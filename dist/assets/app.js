import { questionBank } from "./questions.js?v=29";

const STORAGE_KEY = "caderno330-progress-v1";
const THEME_KEY = "caderno330-theme";
const SIMULATION_STORAGE_KEY = "caderno330-simulations-v1";
const recommendedOrder = ["portugues", "matematica", "direito-constitucional", "direito-administrativo", "farmacia"];
const ids = ["subject-filter","topic-filter","order-filter","question-number","setup-message","start-study","open-simulator","simulador","back-from-simulator","sim-total","sim-subjects","sim-message","start-simulation","simulation-results","simulation-summary","simulation-subject-results","save-simulation","review-simulation-errors","new-simulation","simulation-history-list","end-simulation","answered-count","answered-total","correct-count","wrong-count","accuracy-rate","progress-fill","progress-subject-filter","reset-progress","reset-dialog","estudo","back-home","session-position","session-label","question-strip","question-subject","question-display-number","question-topic","question-stem","alternatives","confirm-answer","answer-hint","feedback","feedback-result","feedback-explanation","correct-answer","feedback-topic","previous-question","next-question","theme-toggle"];
const els = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
let progress = loadJson(STORAGE_KEY, {});
let savedSimulations = loadJson(SIMULATION_STORAGE_KEY, []);
let session = [], cursor = 0, selectedAnswer = null, revealed = false, studyMode = "practice", simulation = null;
let simulatorOrder = recommendedOrder.filter(id => questionBank.subjects.some(subject => subject.id === id));
let simulatorSettings = Object.fromEntries(questionBank.subjects.map(subject => [subject.id, { enabled: false, count: 0, topics: [] }]));

function loadJson(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[char]); }
function shuffled(list) { const copy = [...list]; for (let i = copy.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
function subjectById(id) { return questionBank.subjects.find(subject => subject.id === id); }
function areasForSubject(id) { return [...new Set(questionBank.questions.filter(question => question.subjectId === id).map(question => question.area))].sort((a,b) => a.localeCompare(b, "pt-BR")); }
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); renderProgress(); }
function saveHistory() { localStorage.setItem(SIMULATION_STORAGE_KEY, JSON.stringify(savedSimulations)); renderSimulationHistory(); }

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  els["theme-toggle"].setAttribute("aria-pressed", String(theme === "dark"));
  els["theme-toggle"].setAttribute("aria-label", theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro");
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#11191e" : "#f5f2ea";
  localStorage.setItem(THEME_KEY, theme);
}
function initTheme() { setTheme(localStorage.getItem(THEME_KEY) || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")); }
function renderSubjectOptions() {
  els["subject-filter"].innerHTML = [`<option value="all">Todas as matérias (${questionBank.questions.length})</option>`, ...questionBank.subjects.map(subject => `<option value="${subject.id}">${escapeHtml(subject.label)} (${subject.count})</option>`)].join("");
}
function renderProgressSubjectOptions() {
  els["progress-subject-filter"].innerHTML = [`<option value="all">Todas as matérias (${questionBank.questions.length})</option>`, ...questionBank.subjects.map(subject => `<option value="${subject.id}">${escapeHtml(subject.label)} (${subject.count})</option>`)].join("");
}
function renderTopicOptions() {
  const id = els["subject-filter"].value;
  if (id === "all") { els["topic-filter"].disabled = true; els["topic-filter"].innerHTML = '<option value="all">Selecione a matéria</option>'; return; }
  const topics = areasForSubject(id);
  els["topic-filter"].disabled = false;
  els["topic-filter"].innerHTML = [`<option value="all">Todos os assuntos (${topics.length})</option>`, ...topics.map(topic => `<option value="${escapeHtml(topic)}">${escapeHtml(topic)}</option>`)].join("");
}
function filteredQuestions() {
  const subjectId = els["subject-filter"].value, topic = els["topic-filter"].value, order = els["order-filter"].value;
  let questions = questionBank.questions.filter(question => (subjectId === "all" || question.subjectId === subjectId) && (topic === "all" || question.area === topic));
  if (order === "wrong") questions = questions.filter(question => progress[question.id]?.status === "wrong");
  return order === "random" ? shuffled(questions) : questions;
}
function showStudy() { document.querySelector(".landing").hidden = true; document.querySelector(".dashboard").hidden = true; els.simulador.hidden = true; els.estudo.hidden = false; }
function showHome() { els.estudo.hidden = true; els.simulador.hidden = true; document.querySelector(".landing").hidden = false; document.querySelector(".dashboard").hidden = false; session = []; studyMode = "practice"; location.hash = "inicio"; }

function startStudy() {
  els["setup-message"].textContent = "";
  session = filteredQuestions(); const wanted = Number(els["question-number"].value), subjectId = els["subject-filter"].value;
  if (!session.length) { els["setup-message"].textContent = els["order-filter"].value === "wrong" ? "Nenhuma questão errada foi encontrada com estes filtros." : "Nenhuma questão foi encontrada com estes filtros."; return; }
  if (wanted) {
    if (subjectId === "all") { els["setup-message"].textContent = "Escolha uma matéria antes de ir para um número específico."; return; }
    const index = session.findIndex(question => question.number === wanted);
    if (index < 0) { els["setup-message"].textContent = "Essa questão não existe com os filtros selecionados."; return; }
    cursor = index;
  } else cursor = 0;
  studyMode = "practice"; showStudy(); renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSimulator() {
  document.querySelector(".landing").hidden = true; document.querySelector(".dashboard").hidden = true; els.estudo.hidden = true; els.simulador.hidden = false;
  els["simulation-results"].hidden = true; renderSimulatorSubjects(); renderSimulationHistory(); window.scrollTo({ top: 0, behavior: "smooth" });
}
function returnToSimulator() {
  els.estudo.hidden = true; els.simulador.hidden = false; els["simulation-results"].hidden = !simulation?.finished;
  renderSimulatorSubjects(); renderSimulationHistory(); if (simulation?.finished) renderSimulationResults(); window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderSimulatorSubjects() {
  els["sim-subjects"].innerHTML = simulatorOrder.map((id, index) => {
    const subject = subjectById(id), setting = simulatorSettings[id], topics = areasForSubject(id), active = new Set(setting.topics), all = active.size === 0;
    return `<article class="sim-subject-row${setting.enabled ? " is-enabled" : ""}"><header><label class="sim-subject-toggle"><input type="checkbox" data-sim-enabled="${id}" ${setting.enabled ? "checked" : ""}><span>${escapeHtml(subject.label)}</span><small>${subject.count} questões no banco</small></label><div class="sim-order-controls"><button type="button" data-sim-order="up" data-subject-id="${id}" ${index === 0 ? "disabled" : ""} aria-label="Mover para cima">↑</button><button type="button" data-sim-order="down" data-subject-id="${id}" ${index === simulatorOrder.length - 1 ? "disabled" : ""} aria-label="Mover para baixo">↓</button></div></header><div class="sim-subject-options" ${setting.enabled ? "" : "hidden"}><label class="sim-count-field"><span>QUESTÕES DESTA MATÉRIA</span><input type="number" min="1" max="${subject.count}" value="${setting.count || ""}" data-sim-count="${id}" inputmode="numeric" placeholder="Ex.: 10"></label><div class="sim-topic-picker"><div><strong>ASSUNTOS</strong><button type="button" class="sim-all-topics${all ? " active" : ""}" data-sim-all-topics="${id}">${all ? "TODOS OS ASSUNTOS" : "USAR TODOS OS ASSUNTOS"}</button></div><p>Selecione os assuntos que devem cair ou deixe todos ativos.</p><div class="sim-topic-list">${topics.map(topic => `<label><input type="checkbox" data-sim-topic="${id}" value="${escapeHtml(topic)}" ${active.has(topic) ? "checked" : ""}><span>${escapeHtml(topic)}</span></label>`).join("")}</div></div></div></article>`;
  }).join("");
}
function moveSimulatorSubject(id, direction) { const index = simulatorOrder.indexOf(id), next = index + direction; if (next < 0 || next >= simulatorOrder.length) return; [simulatorOrder[index], simulatorOrder[next]] = [simulatorOrder[next], simulatorOrder[index]]; renderSimulatorSubjects(); }
function showSimulationMessage(message) { els["sim-message"].textContent = message; }
function buildSimulation() {
  els["sim-message"].textContent = "";
  const total = Number(els["sim-total"].value), subjectIds = simulatorOrder.filter(id => simulatorSettings[id].enabled);
  if (!Number.isInteger(total) || total < 1) return showSimulationMessage("Informe um total de questões maior que zero.");
  if (!subjectIds.length) return showSimulationMessage("Selecione ao menos uma matéria para montar o simulado.");
  const questions = [];
  for (const id of subjectIds) {
    const setting = simulatorSettings[id], subject = subjectById(id), count = Number(setting.count);
    if (!Number.isInteger(count) || count < 1) return showSimulationMessage(`Informe quantas questões de ${subject.label} devem entrar no simulado.`);
    const topics = setting.topics.length ? setting.topics : areasForSubject(id);
    const eligible = questionBank.questions.filter(question => question.subjectId === id && topics.includes(question.area));
    if (count > eligible.length) return showSimulationMessage(`${subject.label} possui somente ${eligible.length} questões disponíveis com esses assuntos.`);
    const chosen = [];
    for (const topic of shuffled(topics).slice(0, Math.min(count, topics.length))) chosen.push(shuffled(eligible.filter(question => question.area === topic))[0]);
    chosen.push(...shuffled(eligible.filter(question => !chosen.some(item => item.id === question.id))).slice(0, count - chosen.length));
    questions.push(...shuffled(chosen));
  }
  if (questions.length !== total) return showSimulationMessage(`A soma das matérias é ${questions.length}, mas o total definido é ${total}. Ajuste a distribuição.`);
  simulation = { id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`, startedAt: new Date().toISOString(), subjectOrder: subjectIds, questions, answers: {}, finished: false, saved: false, result: null };
  session = questions; cursor = 0; studyMode = "simulation"; showStudy(); renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestionStrip() {
  els["question-strip"].innerHTML = session.map((question, index) => {
    const status = studyMode === "simulation" ? (simulation.answers[question.id] ? "sim-answered" : "unanswered") : studyMode === "review" ? (simulation.answers[question.id] === question.answer ? "correct" : "wrong") : (progress[question.id]?.status || "unanswered");
    return `<button class="${status}${index === cursor ? " current" : ""}" type="button" data-index="${index}" aria-label="Ir para a questão ${index + 1}">${index + 1}</button>`;
  }).join("");
  els["question-strip"].querySelector(".current")?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}
function renderLegend() {
  const legend = document.querySelector(".status-legend");
  legend.innerHTML = studyMode === "simulation" ? '<span><i class="unanswered"></i> não respondida</span><span><i class="sim-answered"></i> resposta registrada</span><span><i class="current"></i> atual</span>' : '<span><i class="unanswered"></i> não respondida</span><span><i class="correct"></i> correta</span><span><i class="wrong"></i> incorreta</span><span><i class="current"></i> atual</span>';
}
function setQuestionFrame(question, label) {
  const subject = subjectById(question.subjectId);
  els["session-position"].textContent = `Questão ${cursor + 1} de ${session.length}`;
  els["session-label"].textContent = label; els["question-subject"].textContent = subject.label.toUpperCase();
  els["question-display-number"].textContent = String(question.number).padStart(question.subjectId === "farmacia" ? 3 : 2, "0");
  els["question-topic"].textContent = question.topic; els["question-stem"].textContent = question.stem;
  els["previous-question"].disabled = cursor === 0; els["next-question"].disabled = cursor === session.length - 1; els["end-simulation"].hidden = studyMode !== "simulation";
  renderLegend(); renderQuestionStrip();
}
function renderOptions(question, selected, locked, outcome = false) {
  els.alternatives.innerHTML = question.options.map(option => {
    const classes = [locked ? "locked" : "", outcome && option.letter === question.answer ? "correct-answer" : "", outcome && selected === option.letter && option.letter !== question.answer ? "wrong-answer" : ""].filter(Boolean).join(" ");
    return `<label class="alternative ${classes}"><input type="radio" name="answer" value="${option.letter}" ${selected === option.letter ? "checked" : ""} ${locked ? "disabled" : ""}><b>${option.letter}</b><span>${escapeHtml(option.text)}</span></label>`;
  }).join("");
}
function showFeedback(question, selected, correct) {
  els.feedback.hidden = false; els["feedback-result"].className = `feedback-result ${correct ? "correct" : "wrong"}`;
  els["feedback-result"].textContent = correct ? `Resposta correta. Você marcou a alternativa ${selected}.` : selected ? `Resposta incorreta. Você marcou ${selected}; a resposta correta é ${question.answer}.` : `Questão não respondida. A resposta correta é ${question.answer}.`;
  els["feedback-explanation"].textContent = question.explanation;
  const option = question.options.find(item => item.letter === question.answer);
  els["correct-answer"].textContent = `${question.answer}) ${option.text}`; els["feedback-topic"].textContent = question.topic;
}
function renderPracticeQuestion() {
  const question = session[cursor]; selectedAnswer = null; revealed = false;
  const modes = { sequential: "ordem sequencial", random: "ordem aleatória", wrong: "revisão de erros" };
  setQuestionFrame(question, `${subjectById(question.subjectId).short} · ${modes[els["order-filter"].value]}`); renderOptions(question, null, false);
  els["confirm-answer"].disabled = true; els["confirm-answer"].hidden = false; els["confirm-answer"].textContent = "CONFIRMAR RESPOSTA"; els["answer-hint"].textContent = "Selecione uma alternativa para continuar."; els.feedback.hidden = true;
}
function renderSimulationQuestion() {
  const question = session[cursor]; selectedAnswer = simulation.answers[question.id] || null; revealed = false;
  setQuestionFrame(question, "Modo simulado · resultado oculto até o encerramento"); renderOptions(question, selectedAnswer, false);
  els["confirm-answer"].disabled = !selectedAnswer; els["confirm-answer"].hidden = false; els["confirm-answer"].textContent = selectedAnswer ? "ATUALIZAR RESPOSTA" : "REGISTRAR RESPOSTA";
  els["answer-hint"].textContent = selectedAnswer ? `Alternativa ${selectedAnswer} registrada. Você pode alterá-la antes de encerrar.` : "Sua resposta ficará oculta até o encerramento do simulado."; els.feedback.hidden = true;
}
function renderReviewQuestion() {
  const question = session[cursor]; selectedAnswer = simulation.answers[question.id];
  setQuestionFrame(question, "Revisão de questões erradas do simulado"); renderOptions(question, selectedAnswer, true, true); els["confirm-answer"].hidden = true; els["answer-hint"].textContent = "Revise a explicação e avance quando estiver pronto."; showFeedback(question, selectedAnswer, selectedAnswer === question.answer);
}
function renderQuestion() { if (studyMode === "simulation") renderSimulationQuestion(); else if (studyMode === "review") renderReviewQuestion(); else renderPracticeQuestion(); }
function confirmPractice() {
  if (!selectedAnswer || revealed) return; const question = session[cursor], correct = selectedAnswer === question.answer; revealed = true;
  progress[question.id] = { status: correct ? "correct" : "wrong", selected: selectedAnswer, answeredAt: new Date().toISOString() }; saveProgress();
  els.alternatives.querySelectorAll(".alternative").forEach(label => { const input = label.querySelector("input"); input.disabled = true; label.classList.add("locked"); if (input.value === question.answer) label.classList.add("correct-answer"); if (input.value === selectedAnswer && !correct) label.classList.add("wrong-answer"); });
  els["confirm-answer"].hidden = true; els["answer-hint"].textContent = "Resposta registrada neste aparelho."; showFeedback(question, selectedAnswer, correct); renderQuestionStrip(); els.feedback.scrollIntoView({ behavior: "smooth", block: "start" });
}
function confirmSimulation() {
  if (!selectedAnswer) return; simulation.answers[session[cursor].id] = selectedAnswer;
  if (cursor < session.length - 1) { cursor += 1; renderQuestion(); document.querySelector(".study-toolbar").scrollIntoView({ behavior: "smooth", block: "start" }); }
  else { renderQuestion(); els["answer-hint"].textContent = "Todas as respostas podem ser revisadas antes de encerrar o simulado."; }
}
function moveQuestion(step) { const next = cursor + step; if (next < 0 || next >= session.length) return; cursor = next; renderQuestion(); document.querySelector(".study-toolbar").scrollIntoView({ behavior: "smooth", block: "start" }); }
function calculateResult() {
  const subjectStats = simulation.subjectOrder.map(subjectId => { const items = simulation.questions.filter(question => question.subjectId === subjectId), correct = items.filter(question => simulation.answers[question.id] === question.answer).length; return { subjectId, total: items.length, correct, wrong: items.length - correct, percentage: Math.round(correct / items.length * 100) }; });
  const correct = subjectStats.reduce((sum, stat) => sum + stat.correct, 0); return { total: simulation.questions.length, correct, wrong: simulation.questions.length - correct, percentage: Math.round(correct / simulation.questions.length * 100), subjectStats };
}
function finishSimulation() {
  const unanswered = simulation.questions.filter(question => !simulation.answers[question.id]).length;
  if (unanswered && !window.confirm(`Há ${unanswered} questão(ões) sem resposta. Encerrar mesmo assim?`)) return;
  simulation.finished = true; simulation.result = calculateResult(); els.estudo.hidden = true; els.simulador.hidden = false; renderSimulationResults(); renderSimulationHistory(); window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderSimulationResults() {
  const result = simulation?.result; if (!result) return; els["simulation-results"].hidden = false;
  els["simulation-summary"].innerHTML = `<article><span>ACERTOS</span><strong>${result.correct}</strong><small>de ${result.total} questões</small></article><article class="correct-card"><span>APROVEITAMENTO</span><strong>${result.percentage}%</strong><small>resultado geral</small></article><article class="wrong-card"><span>PARA REVISAR</span><strong>${result.wrong}</strong><small>questões erradas ou em branco</small></article>`;
  els["simulation-subject-results"].innerHTML = result.subjectStats.map(stat => `<article><strong>${escapeHtml(subjectById(stat.subjectId).label)}</strong><span>${stat.correct} acerto(s) de ${stat.total}</span><b>${stat.percentage}%</b></article>`).join("");
  els["save-simulation"].disabled = simulation.saved; els["save-simulation"].textContent = simulation.saved ? "RESULTADO SALVO NESTE APARELHO" : "SALVAR RESULTADO NESTE APARELHO"; els["review-simulation-errors"].disabled = result.wrong === 0;
}
function saveCurrentSimulation() {
  if (!simulation?.result || simulation.saved) return; savedSimulations.unshift({ id: simulation.id, completedAt: new Date().toISOString(), ...simulation.result }); savedSimulations = savedSimulations.slice(0, 30); simulation.saved = true; saveHistory(); renderSimulationResults();
}
function renderSimulationHistory() {
  if (!savedSimulations.length) { els["simulation-history-list"].innerHTML = '<p class="empty-history">Nenhum resultado foi salvo neste aparelho ainda.</p>'; return; }
  els["simulation-history-list"].innerHTML = savedSimulations.map(record => { const date = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(record.completedAt)); return `<article class="history-item"><div><strong>${record.percentage}%</strong><span>${record.correct} acerto(s) de ${record.total}</span></div><p>${escapeHtml(date)} · ${record.subjectStats.map(stat => `${escapeHtml(subjectById(stat.subjectId)?.short || "Matéria")} ${stat.percentage}%`).join(" · ")}</p><button type="button" data-delete-simulation="${record.id}">EXCLUIR</button></article>`; }).join("");
}
function reviewSimulationErrors() { const errors = simulation.questions.filter(question => simulation.answers[question.id] !== question.answer); if (!errors.length) return; session = errors; cursor = 0; studyMode = "review"; showStudy(); renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" }); }
function renderProgress() {
  const id = els["progress-subject-filter"].value || "all", available = questionBank.questions.filter(question => id === "all" || question.subjectId === id), availableIds = new Set(available.map(question => question.id));
  const records = Object.entries(progress).filter(([id]) => availableIds.has(id)).map(([, record]) => record), correct = records.filter(record => record.status === "correct").length, wrong = records.filter(record => record.status === "wrong").length, answered = correct + wrong;
  els["answered-count"].textContent = answered; els["correct-count"].textContent = correct; els["wrong-count"].textContent = wrong; els["accuracy-rate"].textContent = `${answered ? Math.round(correct / answered * 100) : 0}% de aproveitamento`; els["progress-fill"].style.width = `${available.length ? answered / available.length * 100 : 0}%`; els["answered-total"].textContent = `de ${available.length} questões`;
}
function backFromStudy() {
  if (studyMode === "review") returnToSimulator();
  else if (studyMode === "simulation") { if (!window.confirm("Sair agora abandona este simulado sem resultado. Deseja continuar?")) return; simulation = null; returnToSimulator(); }
  else showHome();
}

els["theme-toggle"].addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
els["subject-filter"].addEventListener("change", renderTopicOptions); els["progress-subject-filter"].addEventListener("change", renderProgress); els["start-study"].addEventListener("click", startStudy); els["open-simulator"].addEventListener("click", openSimulator); els["back-from-simulator"].addEventListener("click", showHome); els["start-simulation"].addEventListener("click", buildSimulation); els["end-simulation"].addEventListener("click", finishSimulation); els["save-simulation"].addEventListener("click", saveCurrentSimulation); els["review-simulation-errors"].addEventListener("click", reviewSimulationErrors); els["new-simulation"].addEventListener("click", () => { simulation = null; els["simulation-results"].hidden = true; renderSimulatorSubjects(); }); els["back-home"].addEventListener("click", backFromStudy);
els["sim-total"].addEventListener("input", () => { els["sim-message"].textContent = ""; });
els["sim-subjects"].addEventListener("change", event => {
  const enabled = event.target.dataset.simEnabled, count = event.target.dataset.simCount, topic = event.target.dataset.simTopic;
  if (enabled) { const setting = simulatorSettings[enabled]; setting.enabled = event.target.checked; setting.count = event.target.checked ? (setting.count || Math.min(5, subjectById(enabled).count)) : 0; if (!event.target.checked) setting.topics = []; renderSimulatorSubjects(); }
  else if (count) simulatorSettings[count].count = Number(event.target.value);
  else if (topic) { const setting = simulatorSettings[topic]; setting.topics = event.target.checked ? [...new Set([...setting.topics, event.target.value])] : setting.topics.filter(item => item !== event.target.value); renderSimulatorSubjects(); }
  els["sim-message"].textContent = "";
});
els["sim-subjects"].addEventListener("click", event => { const move = event.target.closest("button[data-sim-order]"); if (move) return moveSimulatorSubject(move.dataset.subjectId, move.dataset.simOrder === "up" ? -1 : 1); const all = event.target.closest("button[data-sim-all-topics]"); if (all) { simulatorSettings[all.dataset.simAllTopics].topics = []; renderSimulatorSubjects(); } });
els["simulation-history-list"].addEventListener("click", event => { const button = event.target.closest("button[data-delete-simulation]"); if (!button) return; savedSimulations = savedSimulations.filter(record => record.id !== button.dataset.deleteSimulation); saveHistory(); });
els.alternatives.addEventListener("change", event => { if (revealed || studyMode === "review") return; selectedAnswer = event.target.value; els["confirm-answer"].disabled = false; els["answer-hint"].textContent = studyMode === "simulation" ? `Alternativa ${selectedAnswer} selecionada. Ela ficará oculta até o encerramento.` : `Alternativa ${selectedAnswer} selecionada. Confirme quando estiver pronto.`; });
els["confirm-answer"].addEventListener("click", () => studyMode === "simulation" ? confirmSimulation() : confirmPractice()); els["previous-question"].addEventListener("click", () => moveQuestion(-1)); els["next-question"].addEventListener("click", () => moveQuestion(1));
els["question-strip"].addEventListener("click", event => { const button = event.target.closest("button[data-index]"); if (!button) return; cursor = Number(button.dataset.index); renderQuestion(); });
els["reset-progress"].addEventListener("click", () => els["reset-dialog"].showModal()); els["reset-dialog"].addEventListener("close", () => { if (els["reset-dialog"].returnValue !== "confirm") return; progress = {}; localStorage.removeItem(STORAGE_KEY); renderProgress(); });

initTheme(); renderSubjectOptions(); renderProgressSubjectOptions(); renderTopicOptions(); renderProgress(); renderSimulatorSubjects(); renderSimulationHistory();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");
