import { questionBank } from "./questions.js?v=5";

const STORAGE_KEY = "caderno330-progress-v1";
const THEME_KEY = "caderno330-theme";

const els = Object.fromEntries([
  "subject-filter", "topic-filter", "order-filter", "question-number", "setup-message",
  "start-study", "answered-count", "correct-count", "wrong-count", "accuracy-rate",
  "progress-fill", "reset-progress", "reset-dialog", "estudo", "back-home",
  "session-position", "session-label", "question-strip", "question-subject",
  "question-display-number", "question-topic", "question-stem", "alternatives",
  "confirm-answer", "answer-hint", "feedback", "feedback-result",
  "feedback-explanation", "correct-answer", "feedback-topic", "previous-question",
  "next-question", "theme-toggle", "wrong-diagnostics", "wrong-diagnostic-buttons",
  "wrong-diagnostic-detail",
].map(id => [id, document.getElementById(id)]));

let progress = loadProgress();
let session = [];
let cursor = 0;
let selectedAnswer = null;
let revealed = false;

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  renderProgress();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  els["theme-toggle"].setAttribute("aria-pressed", String(theme === "dark"));
  els["theme-toggle"].setAttribute("aria-label", theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro");
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#11191e" : "#f5f2ea";
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const preferred = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(saved || preferred);
}

function renderSubjectOptions() {
  els["subject-filter"].innerHTML = [
    '<option value="all">Todas as matérias (330)</option>',
    ...questionBank.subjects.map(subject => `<option value="${subject.id}">${escapeHtml(subject.label)} (${subject.count})</option>`),
  ].join("");
}

function renderTopicOptions() {
  const subjectId = els["subject-filter"].value;
  if (subjectId === "all") {
    els["topic-filter"].disabled = true;
    els["topic-filter"].innerHTML = '<option value="all">Selecione a matéria</option>';
    return;
  }
  els["topic-filter"].disabled = false;
  const questions = questionBank.questions.filter(question => subjectId === "all" || question.subjectId === subjectId);
  const topics = [...new Set(questions.map(question => question.area))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  els["topic-filter"].innerHTML = [
    `<option value="all">Todos os assuntos (${topics.length})</option>`,
    ...topics.map(topic => `<option value="${escapeHtml(topic)}">${escapeHtml(topic)}</option>`),
  ].join("");
}

function filteredQuestions() {
  const subjectId = els["subject-filter"].value;
  const topic = els["topic-filter"].value;
  const order = els["order-filter"].value;
  let questions = questionBank.questions.filter(question =>
    (subjectId === "all" || question.subjectId === subjectId) &&
    (topic === "all" || question.area === topic)
  );

  if (order === "wrong") questions = questions.filter(question => progress[question.id]?.status === "wrong");
  if (order === "random") questions = shuffled(questions);
  return questions;
}

function startStudy() {
  els["setup-message"].textContent = "";
  const requestedNumber = Number(els["question-number"].value);
  const subjectId = els["subject-filter"].value;
  session = filteredQuestions();

  if (requestedNumber) {
    if (subjectId === "all") {
      els["setup-message"].textContent = "Escolha uma matéria antes de ir para um número específico.";
      return;
    }
    const index = session.findIndex(question => question.number === requestedNumber);
    if (index === -1) {
      els["setup-message"].textContent = "Essa questão não existe com os filtros selecionados.";
      return;
    }
    cursor = index;
  } else {
    cursor = 0;
  }

  if (!session.length) {
    els["setup-message"].textContent = els["order-filter"].value === "wrong"
      ? "Nenhuma questão errada foi encontrada com estes filtros."
      : "Nenhuma questão foi encontrada com estes filtros.";
    return;
  }

  document.querySelector(".landing").hidden = true;
  document.querySelector(".dashboard").hidden = true;
  els.estudo.hidden = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestionStrip() {
  els["question-strip"].innerHTML = session.map((question, index) => {
    const status = progress[question.id]?.status || "unanswered";
    const current = index === cursor ? " current" : "";
    return `<button class="${status}${current}" type="button" data-index="${index}" aria-label="Ir para a questão ${question.number}">${question.number}</button>`;
  }).join("");
  const currentButton = els["question-strip"].querySelector(".current");
  currentButton?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

function renderQuestion() {
  const question = session[cursor];
  const subject = questionBank.subjects.find(item => item.id === question.subjectId);
  selectedAnswer = null;
  revealed = false;

  els["session-position"].textContent = `Questão ${cursor + 1} de ${session.length}`;
  const modeNames = { sequential: "ordem sequencial", random: "ordem aleatória", wrong: "revisão de erros" };
  els["session-label"].textContent = `${subject.short} · ${modeNames[els["order-filter"].value]}`;
  els["question-subject"].textContent = subject.label.toUpperCase();
  els["question-display-number"].textContent = String(question.number).padStart(question.subjectId === "farmacia" ? 3 : 2, "0");
  els["question-topic"].textContent = question.topic;
  els["question-stem"].textContent = question.stem;
  els.alternatives.innerHTML = question.options.map(option => `
    <label class="alternative">
      <input type="radio" name="answer" value="${option.letter}">
      <b>${option.letter}</b>
      <span>${escapeHtml(option.text)}</span>
    </label>
  `).join("");
  els["confirm-answer"].disabled = true;
  els["confirm-answer"].hidden = false;
  els["answer-hint"].textContent = "Selecione uma alternativa para continuar.";
  els.feedback.hidden = true;
  els["wrong-diagnostics"].hidden = true;
  els["wrong-diagnostic-buttons"].innerHTML = "";
  els["wrong-diagnostic-detail"].innerHTML = "";
  els["previous-question"].disabled = cursor === 0;
  els["next-question"].disabled = cursor === session.length - 1;
  renderQuestionStrip();
}

function diagnosticPhrase(text) {
  const clean = String(text).trim().replace(/[.]$/, "");
  const separators = [...clean.matchAll(/,\s+|\s+(?:e|mas|pois|porque|quando|enquanto)\s+/gi)]
    .map(match => match.index)
    .filter(index => index > 18);
  if (separators.length) return clean.slice(0, separators[0]);
  if (clean.length <= 150) return clean;
  const wordBoundary = clean.lastIndexOf(" ", 138);
  return `${clean.slice(0, wordBoundary > 40 ? wordBoundary : 138)}…`;
}

function renderDiagnosticMarkup(text, phrase) {
  const index = text.toLocaleLowerCase("pt-BR").indexOf(phrase.replace(/…$/, "").toLocaleLowerCase("pt-BR"));
  if (index < 0) return `<mark>${escapeHtml(text)}</mark>`;
  const end = index + phrase.replace(/…$/, "").length;
  return `${escapeHtml(text.slice(0, index))}<mark>${escapeHtml(text.slice(index, end))}</mark>${escapeHtml(text.slice(end))}`;
}

function renderWrongDiagnostics(question) {
  const wrongOptions = question.options.filter(option => option.letter !== question.answer);
  els["wrong-diagnostics"].hidden = false;
  els["wrong-diagnostic-buttons"].innerHTML = wrongOptions.map(option => `
    <button type="button" data-diagnostic-letter="${option.letter}" aria-label="Ver ponto a revisar na alternativa ${option.letter}">${option.letter}</button>
  `).join("");
  els["wrong-diagnostic-detail"].innerHTML = "Selecione uma letra para ver o trecho a revisar.";
}

function showWrongDiagnostic(letter) {
  const question = session[cursor];
  const option = question.options.find(item => item.letter === letter);
  if (!option || option.letter === question.answer) return;
  const phrase = option.diagnostic?.focus || diagnosticPhrase(option.text);
  const reason = option.diagnostic?.reason || question.explanation;
  els["wrong-diagnostic-buttons"].querySelectorAll("button").forEach(button => {
    button.classList.toggle("active", button.dataset.diagnosticLetter === letter);
  });
  els["wrong-diagnostic-detail"].innerHTML = `
    <strong>Alternativa ${escapeHtml(letter)}</strong>
    <p>${renderDiagnosticMarkup(option.text, phrase)}</p>
    <p class="diagnostic-reason"><b>Por que não é correta:</b> ${escapeHtml(reason)}</p>
  `;
}

function confirmAnswer() {
  if (!selectedAnswer || revealed) return;
  const question = session[cursor];
  const correct = selectedAnswer === question.answer;
  revealed = true;

  progress[question.id] = {
    status: correct ? "correct" : "wrong",
    selected: selectedAnswer,
    answeredAt: new Date().toISOString(),
  };
  saveProgress();

  els.alternatives.querySelectorAll(".alternative").forEach(label => {
    const input = label.querySelector("input");
    input.disabled = true;
    label.classList.add("locked");
    if (input.value === question.answer) label.classList.add("correct-answer");
    if (input.value === selectedAnswer && !correct) label.classList.add("wrong-answer");
  });

  els["confirm-answer"].hidden = true;
  els["answer-hint"].textContent = "Resposta registrada neste aparelho.";
  els.feedback.hidden = false;
  els["feedback-result"].className = `feedback-result ${correct ? "correct" : "wrong"}`;
  els["feedback-result"].textContent = correct
    ? `Resposta correta. Você marcou a alternativa ${selectedAnswer}.`
    : `Resposta incorreta. Você marcou ${selectedAnswer}; a resposta correta é ${question.answer}.`;
  els["feedback-explanation"].textContent = question.explanation;
  renderWrongDiagnostics(question);
  const correctOption = question.options.find(option => option.letter === question.answer);
  els["correct-answer"].textContent = `${question.answer}) ${correctOption.text}`;
  els["feedback-topic"].textContent = question.topic;
  renderQuestionStrip();
  els.feedback.scrollIntoView({ behavior: "smooth", block: "start" });
}

function moveQuestion(step) {
  const next = cursor + step;
  if (next < 0 || next >= session.length) return;
  cursor = next;
  renderQuestion();
  document.querySelector(".study-toolbar").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProgress() {
  const records = Object.values(progress);
  const correct = records.filter(record => record.status === "correct").length;
  const wrong = records.filter(record => record.status === "wrong").length;
  const answered = correct + wrong;
  els["answered-count"].textContent = answered;
  els["correct-count"].textContent = correct;
  els["wrong-count"].textContent = wrong;
  els["accuracy-rate"].textContent = `${answered ? Math.round(correct / answered * 100) : 0}% de aproveitamento`;
  els["progress-fill"].style.width = `${answered / questionBank.questions.length * 100}%`;
}

function backToFilters() {
  els.estudo.hidden = true;
  document.querySelector(".landing").hidden = false;
  document.querySelector(".dashboard").hidden = false;
  session = [];
  location.hash = "inicio";
}

els["theme-toggle"].addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
els["subject-filter"].addEventListener("change", renderTopicOptions);
els["start-study"].addEventListener("click", startStudy);
els["back-home"].addEventListener("click", backToFilters);
els.alternatives.addEventListener("change", event => {
  if (revealed) return;
  selectedAnswer = event.target.value;
  els["confirm-answer"].disabled = false;
  els["answer-hint"].textContent = `Alternativa ${selectedAnswer} selecionada. Confirme quando estiver pronto.`;
});
els["confirm-answer"].addEventListener("click", confirmAnswer);
els["previous-question"].addEventListener("click", () => moveQuestion(-1));
els["next-question"].addEventListener("click", () => moveQuestion(1));
els["question-strip"].addEventListener("click", event => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  cursor = Number(button.dataset.index);
  renderQuestion();
});
els["wrong-diagnostic-buttons"].addEventListener("click", event => {
  const button = event.target.closest("button[data-diagnostic-letter]");
  if (!button) return;
  showWrongDiagnostic(button.dataset.diagnosticLetter);
});
els["reset-progress"].addEventListener("click", () => els["reset-dialog"].showModal());
els["reset-dialog"].addEventListener("close", () => {
  if (els["reset-dialog"].returnValue !== "confirm") return;
  progress = {};
  localStorage.removeItem(STORAGE_KEY);
  renderProgress();
});

initTheme();
renderSubjectOptions();
renderTopicOptions();
renderProgress();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");
