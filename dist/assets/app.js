import { questionBank } from "./questions.js?v=84";

const STORAGE_KEY = "caderno330-progress-v1";
const FOCUS_KEY = "caderno330-focus-mode";
const SIMULATION_STORAGE_KEY = "caderno330-simulations-v1";
const recommendedOrder = ["portugues", "matematica", "direito-constitucional", "direito-administrativo", "farmacia"];
const ids = ["subject-filter","topic-filter","order-filter","question-number","setup-message","start-study","open-simulator","simulador","back-from-simulator","simulator-config","sim-total","sim-subjects","sim-message","start-simulation","simulation-results","simulation-summary","simulation-subject-results","simulation-topic-results","save-simulation","review-simulation-errors","new-simulation","simulation-history-list","answered-count","answered-total","correct-count","wrong-count","accuracy-rate","progress-fill","progress-subject-filter","reset-progress","reset-dialog","estudo","back-home","session-position","session-label","question-strip","question-subject","question-display-number","question-topic","question-stem","alternatives","confirm-answer","answer-hint","feedback","feedback-result","feedback-explanation","correct-answer","feedback-topic","previous-question","next-question","focus-toggle","total-count"];
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
function orderedSubjects() {
  const priority = { portugues: 0, matematica: 1 };
  return [...questionBank.subjects].sort((a, b) => (priority[a.id] ?? 2) - (priority[b.id] ?? 2) || a.label.localeCompare(b.label, "pt-BR"));
}
function areasForSubject(id) { return [...new Set(questionBank.questions.filter(question => question.subjectId === id).map(question => question.area))].sort((a,b) => a.localeCompare(b, "pt-BR")); }
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); renderProgress(); }
function saveHistory() { localStorage.setItem(SIMULATION_STORAGE_KEY, JSON.stringify(savedSimulations)); renderSimulationHistory(); }
function formatDuration(seconds) { const total = Math.max(0, Math.round(Number(seconds) || 0)), minutes = Math.floor(total / 60), remainder = total % 60; return minutes ? `${minutes} min ${String(remainder).padStart(2, "0")} s` : `${remainder} s`; }
function preserveViewport(update) { const left = window.scrollX, top = window.scrollY; update(); window.scrollTo(left, top); requestAnimationFrame(() => window.scrollTo(left, top)); }

function setFocus(active) {
  document.body.classList.toggle("focus-mode", active);
  els["focus-toggle"].setAttribute("aria-pressed", String(active));
  els["focus-toggle"].setAttribute("aria-label", active ? "Desativar modo foco" : "Ativar modo foco");
  els["focus-toggle"].querySelector(".focus-label").textContent = active ? "Foco ativo" : "Modo foco";
  localStorage.setItem(FOCUS_KEY, String(active));
}
function initFocus() { setFocus(localStorage.getItem(FOCUS_KEY) === "true"); }
function renderBankCounts() {
  const total = questionBank.questions.length;
  const highestQuestionNumber = Math.max(...questionBank.questions.map(question => question.number));
  els["total-count"].textContent = String(total);
  els["sim-total"].max = String(total);
  els["question-number"].max = String(highestQuestionNumber);
  document.querySelector('meta[name="description"]')?.setAttribute("content", `Question for All: PWA de estudos com ${total} questões de concurso comentadas, filtros por matéria e progresso local.`);
}
function renderSubjectOptions() {
  els["subject-filter"].innerHTML = [`<option value="all">Todas as ${questionBank.subjects.length} matérias</option>`, ...orderedSubjects().map(subject => `<option value="${subject.id}">${escapeHtml(subject.label)} (${subject.count})</option>`)].join("");
}
function renderProgressSubjectOptions() {
  els["progress-subject-filter"].innerHTML = [`<option value="all">Todas as ${questionBank.subjects.length} matérias</option>`, ...orderedSubjects().map(subject => `<option value="${subject.id}">${escapeHtml(subject.label)} (${subject.count})</option>`)].join("");
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
  studyMode = "practice"; showStudy(); renderQuestion();
}

function openSimulator() {
  document.querySelector(".landing").hidden = true; document.querySelector(".dashboard").hidden = true; els.estudo.hidden = true; els.simulador.hidden = false;
  renderSimulatorSubjects(); renderSimulationHistory();
  showSimulatorConfig();
}
function showSimulatorConfig() { els["simulator-config"].hidden = false; els["simulation-results"].hidden = true; els["simulator-config"].scrollIntoView({ behavior: "smooth", block: "start" }); }
function returnToSimulator() {
  if (!simulation?.finished) return showHome();
  els.estudo.hidden = true; els.simulador.hidden = false; els["simulator-config"].hidden = true; els["simulation-results"].hidden = false;
  renderSimulationHistory(); renderSimulationResults(); els["simulation-results"].scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderSimulatorSubjects() {
  els["sim-subjects"].innerHTML = simulatorOrder.map((id, index) => {
    const subject = subjectById(id), setting = simulatorSettings[id], topics = areasForSubject(id), active = new Set(setting.topics), all = active.size === topics.length;
    return `<article class="sim-subject-row${setting.enabled ? " is-enabled" : ""}"><header><label class="sim-subject-toggle"><input type="checkbox" data-sim-enabled="${id}" ${setting.enabled ? "checked" : ""}><span>${escapeHtml(subject.label)}</span><small>${subject.count} questões no banco</small></label><div class="sim-order-controls"><button type="button" data-sim-order="up" data-subject-id="${id}" ${index === 0 ? "disabled" : ""} aria-label="Mover para cima">↑</button><button type="button" data-sim-order="down" data-subject-id="${id}" ${index === simulatorOrder.length - 1 ? "disabled" : ""} aria-label="Mover para baixo">↓</button></div></header><div class="sim-subject-options" ${setting.enabled ? "" : "hidden"}><label class="sim-count-field"><span>QUESTÕES DESTA MATÉRIA</span><input type="number" min="1" max="${subject.count}" value="${setting.count || ""}" data-sim-count="${id}" inputmode="numeric" placeholder="Ex.: 10"></label><div class="sim-topic-picker"><div><strong>ASSUNTOS</strong><span class="sim-topic-actions"><button type="button" class="sim-all-topics${all ? " active" : ""}" data-sim-topics-action="all" data-subject-id="${id}">TODOS SELECIONADOS</button><button type="button" class="sim-none-topics${active.size === 0 ? " active" : ""}" data-sim-topics-action="none" data-subject-id="${id}">NENHUM SELECIONADO</button></span></div><p>Marque os assuntos que devem cair. Todos já começam selecionados.</p><div class="sim-topic-list">${topics.map(topic => `<label><input type="checkbox" data-sim-topic="${id}" value="${escapeHtml(topic)}" ${active.has(topic) ? "checked" : ""}><span>${escapeHtml(topic)}</span></label>`).join("")}</div></div></div></article>`;
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
    const topics = setting.topics;
    if (!topics.length) return showSimulationMessage(`Selecione ao menos um assunto para ${subject.label}.`);
    const eligible = questionBank.questions.filter(question => question.subjectId === id && topics.includes(question.area));
    if (count > eligible.length) return showSimulationMessage(`${subject.label} possui somente ${eligible.length} questões disponíveis com esses assuntos.`);
    const chosen = [];
    for (const topic of shuffled(topics).slice(0, Math.min(count, topics.length))) chosen.push(shuffled(eligible.filter(question => question.area === topic))[0]);
    chosen.push(...shuffled(eligible.filter(question => !chosen.some(item => item.id === question.id))).slice(0, count - chosen.length));
    questions.push(...shuffled(chosen));
  }
  if (questions.length !== total) return showSimulationMessage(`A soma das matérias é ${questions.length}, mas o total definido é ${total}. Ajuste a distribuição.`);
  simulation = { id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`, startedAt: new Date().toISOString(), subjectOrder: subjectIds, questions, answers: {}, pending: {}, finished: false, saved: false, result: null };
  session = questions; cursor = 0; studyMode = "simulation"; showStudy(); renderQuestion();
}

function renderQuestionStrip() {
  els["question-strip"].innerHTML = session.map((question, index) => {
    const status = studyMode === "simulation" ? (simulation.pending[question.id] ? "pending" : simulation.answers[question.id] ? "sim-answered" : "unanswered") : studyMode === "review" ? (simulation.answers[question.id] === question.answer ? "correct" : "wrong") : (progress[question.id]?.status || "unanswered");
    return `<button class="${status}${index === cursor ? " current" : ""}" type="button" data-index="${index}" aria-label="Ir para a questão ${index + 1}">${index + 1}</button>`;
  }).join("");
}
function renderLegend() {
  const legend = document.querySelector(".status-legend");
  legend.innerHTML = studyMode === "simulation" ? '<span><i class="unanswered"></i> não respondida</span><span><i class="pending"></i> pendente de confirmação</span><span><i class="sim-answered"></i> resposta registrada</span><span><i class="current"></i> atual</span>' : '<span><i class="unanswered"></i> não respondida</span><span><i class="correct"></i> correta</span><span><i class="wrong"></i> incorreta</span><span><i class="current"></i> atual</span>';
}
function setQuestionFrame(question, label) {
  const subject = subjectById(question.subjectId);
  els["session-position"].textContent = `Questão ${cursor + 1} de ${session.length}`;
  els["session-label"].textContent = label; els["question-subject"].textContent = subject.label.toUpperCase();
  els["question-display-number"].textContent = String(question.number).padStart(question.subjectId === "farmacia" ? 3 : 2, "0");
  els["question-topic"].textContent = question.topic; els["question-stem"].textContent = question.stem;
  els["previous-question"].disabled = cursor === 0; els["next-question"].disabled = cursor === session.length - 1;
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
  els["back-home"].textContent = "← VOLTAR AOS FILTROS";
  setQuestionFrame(question, `${subjectById(question.subjectId).short} · ${modes[els["order-filter"].value]}`); renderOptions(question, null, false);
  els["confirm-answer"].disabled = true; els["confirm-answer"].hidden = false; els["confirm-answer"].textContent = "CONFIRMAR RESPOSTA"; els["answer-hint"].textContent = "Selecione uma alternativa para continuar."; els.feedback.hidden = true;
}
function renderSimulationQuestion() {
  const question = session[cursor]; selectedAnswer = simulation.pending[question.id] || simulation.answers[question.id] || null; revealed = false;
  els["back-home"].textContent = "← ABANDONAR SIMULADO";
  setQuestionFrame(question, "Modo simulado · resultado oculto até o encerramento"); renderOptions(question, selectedAnswer, false);
  const registered = simulation.answers[question.id];
  els["confirm-answer"].disabled = !selectedAnswer; els["confirm-answer"].hidden = false; els["confirm-answer"].textContent = registered ? "ATUALIZAR RESPOSTA" : "REGISTRAR RESPOSTA";
  els["answer-hint"].textContent = registered ? `Alternativa ${registered} registrada. Você pode alterar a escolha e confirmar novamente.` : selectedAnswer ? `Alternativa ${selectedAnswer} pendente de confirmação.` : "Sua resposta ficará oculta até o encerramento do simulado."; els.feedback.hidden = true;
}
function renderReviewQuestion() {
  const question = session[cursor]; selectedAnswer = simulation.answers[question.id];
  els["back-home"].textContent = "← VOLTAR AO RESULTADO";
  setQuestionFrame(question, "Revisão de questões erradas do simulado"); renderOptions(question, selectedAnswer, true, true); els["confirm-answer"].hidden = true; els["answer-hint"].textContent = "Revise a explicação e avance quando estiver pronto."; showFeedback(question, selectedAnswer, selectedAnswer === question.answer);
}
function renderQuestion() { if (studyMode === "simulation") renderSimulationQuestion(); else if (studyMode === "review") renderReviewQuestion(); else renderPracticeQuestion(); }
function confirmPractice() {
  if (!selectedAnswer || revealed) return; const question = session[cursor], correct = selectedAnswer === question.answer; revealed = true;
  progress[question.id] = { status: correct ? "correct" : "wrong", selected: selectedAnswer, answeredAt: new Date().toISOString() }; saveProgress();
  els.alternatives.querySelectorAll(".alternative").forEach(label => { const input = label.querySelector("input"); input.disabled = true; label.classList.add("locked"); if (input.value === question.answer) label.classList.add("correct-answer"); if (input.value === selectedAnswer && !correct) label.classList.add("wrong-answer"); });
  els["confirm-answer"].hidden = true; els["answer-hint"].textContent = "Resposta registrada neste aparelho."; showFeedback(question, selectedAnswer, correct); renderQuestionStrip();
}
function confirmSimulation() {
  if (!selectedAnswer) return;
  const id = session[cursor].id;
  simulation.answers[id] = selectedAnswer;
  delete simulation.pending[id];
  if (simulation.questions.every(question => simulation.answers[question.id])) return finishSimulation();
  if (cursor < session.length - 1) { preserveViewport(() => { cursor += 1; renderQuestion(); }); }
  else { preserveViewport(() => { renderQuestion(); const remaining = simulation.questions.filter(question => !simulation.answers[question.id]).length; els["answer-hint"].textContent = `Faltam ${remaining} resposta(s) confirmada(s). Use os números acima para voltar às questões pendentes.`; }); }
}
function moveQuestion(step) { const next = cursor + step; if (next < 0 || next >= session.length) return; preserveViewport(() => { cursor = next; renderQuestion(); }); }
function calculateResult() {
  const subjectStats = simulation.subjectOrder.map(subjectId => { const items = simulation.questions.filter(question => question.subjectId === subjectId), correct = items.filter(question => simulation.answers[question.id] === question.answer).length; return { subjectId, total: items.length, correct, wrong: items.length - correct, percentage: Math.round(correct / items.length * 100) }; });
  const topics = new Map();
  simulation.questions.forEach(question => { const key = `${question.subjectId}::${question.area}`, current = topics.get(key) || { subjectId: question.subjectId, topic: question.area, total: 0, correct: 0 }; current.total += 1; if (simulation.answers[question.id] === question.answer) current.correct += 1; topics.set(key, current); });
  const topicStats = [...topics.values()].map(stat => ({ ...stat, wrong: stat.total - stat.correct, percentage: Math.round(stat.correct / stat.total * 100) })).sort((a, b) => subjectById(a.subjectId).label.localeCompare(subjectById(b.subjectId).label, "pt-BR") || a.topic.localeCompare(b.topic, "pt-BR"));
  const correct = subjectStats.reduce((sum, stat) => sum + stat.correct, 0), elapsedSeconds = Math.max(1, Math.round((Date.now() - Date.parse(simulation.startedAt)) / 1000));
  return { total: simulation.questions.length, correct, wrong: simulation.questions.length - correct, percentage: Math.round(correct / simulation.questions.length * 100), elapsedSeconds, subjectStats, topicStats };
}
function finishSimulation() {
  if (!simulation || simulation.finished || simulation.questions.some(question => !simulation.answers[question.id])) return;
  preserveViewport(() => { simulation.finished = true; simulation.result = calculateResult(); els.estudo.hidden = true; els.simulador.hidden = false; els["simulator-config"].hidden = true; renderSimulationResults(); renderSimulationHistory(); });
}
function renderSimulationResults() {
  const result = simulation?.result; if (!result) return; els["simulation-results"].hidden = false;
  els["simulation-summary"].innerHTML = `<article><span>ACERTOS</span><strong>${result.correct}</strong><small>de ${result.total} questões</small></article><article class="correct-card"><span>APROVEITAMENTO</span><strong>${result.percentage}%</strong><small>resultado geral</small></article><article class="wrong-card"><span>PARA REVISAR</span><strong>${result.wrong}</strong><small>questões erradas</small></article><article><span>TEMPO REALIZADO</span><strong>${formatDuration(result.elapsedSeconds)}</strong><small>do início ao último registro</small></article>`;
  els["simulation-subject-results"].innerHTML = result.subjectStats.map(stat => `<article><strong>${escapeHtml(subjectById(stat.subjectId).label)}</strong><span>${stat.correct} acerto(s) de ${stat.total}</span><b>${stat.percentage}%</b></article>`).join("");
  els["simulation-topic-results"].innerHTML = `<h4>Desempenho por assunto</h4><div>${result.topicStats.map(stat => `<article><span>${escapeHtml(subjectById(stat.subjectId).short)} · ${escapeHtml(stat.topic)}</span><strong>${stat.correct} de ${stat.total}</strong><b>${stat.percentage}%</b></article>`).join("")}</div>`;
  els["save-simulation"].disabled = simulation.saved; els["save-simulation"].textContent = simulation.saved ? "RESULTADO SALVO NESTE APARELHO" : "SALVAR RESULTADO NESTE APARELHO"; els["review-simulation-errors"].disabled = result.wrong === 0;
}
function saveCurrentSimulation() {
  if (!simulation?.result || simulation.saved) return; savedSimulations.unshift({ id: simulation.id, completedAt: new Date().toISOString(), ...simulation.result }); savedSimulations = savedSimulations.slice(0, 30); simulation.saved = true; saveHistory(); renderSimulationResults();
}
function renderSimulationHistory() {
  if (!savedSimulations.length) { els["simulation-history-list"].innerHTML = '<p class="empty-history">Nenhum resultado foi salvo neste aparelho ainda.</p>'; return; }
  els["simulation-history-list"].innerHTML = savedSimulations.map(record => { const date = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(record.completedAt)); return `<article class="history-item"><div><strong>${record.percentage}%</strong><span>${record.correct} acerto(s) de ${record.total}</span></div><p>${escapeHtml(date)} · ${formatDuration(record.elapsedSeconds)} · ${record.subjectStats.map(stat => `${escapeHtml(subjectById(stat.subjectId)?.short || "Matéria")} ${stat.percentage}%`).join(" · ")}</p><button type="button" data-delete-simulation="${record.id}">EXCLUIR</button></article>`; }).join("");
}
function reviewSimulationErrors() { const errors = simulation.questions.filter(question => simulation.answers[question.id] !== question.answer); if (!errors.length) return; session = errors; cursor = 0; studyMode = "review"; showStudy(); renderQuestion(); }
function renderProgress() {
  const id = els["progress-subject-filter"].value || "all", available = questionBank.questions.filter(question => id === "all" || question.subjectId === id), availableIds = new Set(available.map(question => question.id));
  const records = Object.entries(progress).filter(([id]) => availableIds.has(id)).map(([, record]) => record), correct = records.filter(record => record.status === "correct").length, wrong = records.filter(record => record.status === "wrong").length, answered = correct + wrong;
  els["answered-count"].textContent = answered; els["correct-count"].textContent = correct; els["wrong-count"].textContent = wrong; els["accuracy-rate"].textContent = `${answered ? Math.round(correct / answered * 100) : 0}% de aproveitamento`; els["progress-fill"].style.width = `${available.length ? answered / available.length * 100 : 0}%`; els["answered-total"].textContent = `de ${available.length} questões`;
}
function backFromStudy() {
  if (studyMode === "review") returnToSimulator();
  else if (studyMode === "simulation") { if (!window.confirm("Sair agora abandona este simulado sem resultado. Deseja continuar?")) return; simulation = null; showHome(); }
  else showHome();
}

els["focus-toggle"].addEventListener("click", () => setFocus(!document.body.classList.contains("focus-mode")));
els["subject-filter"].addEventListener("change", renderTopicOptions); els["progress-subject-filter"].addEventListener("change", renderProgress); els["start-study"].addEventListener("click", startStudy); els["open-simulator"].addEventListener("click", openSimulator); els["back-from-simulator"].addEventListener("click", showHome); els["start-simulation"].addEventListener("click", buildSimulation); els["save-simulation"].addEventListener("click", saveCurrentSimulation); els["review-simulation-errors"].addEventListener("click", reviewSimulationErrors); els["new-simulation"].addEventListener("click", () => { simulation = null; els["simulation-results"].hidden = true; renderSimulatorSubjects(); showSimulatorConfig(); }); els["back-home"].addEventListener("click", backFromStudy);
els["sim-total"].addEventListener("input", () => { els["sim-message"].textContent = ""; });
els["sim-subjects"].addEventListener("change", event => {
  const enabled = event.target.dataset.simEnabled, count = event.target.dataset.simCount, topic = event.target.dataset.simTopic;
  if (enabled) { const setting = simulatorSettings[enabled]; setting.enabled = event.target.checked; setting.count = event.target.checked ? (setting.count || Math.min(5, subjectById(enabled).count)) : 0; setting.topics = event.target.checked ? (setting.topics.length ? setting.topics : areasForSubject(enabled)) : []; renderSimulatorSubjects(); }
  else if (count) simulatorSettings[count].count = Number(event.target.value);
  else if (topic) { const setting = simulatorSettings[topic]; setting.topics = event.target.checked ? [...new Set([...setting.topics, event.target.value])] : setting.topics.filter(item => item !== event.target.value); renderSimulatorSubjects(); }
  els["sim-message"].textContent = "";
});
els["sim-subjects"].addEventListener("click", event => { const move = event.target.closest("button[data-sim-order]"); if (move) return moveSimulatorSubject(move.dataset.subjectId, move.dataset.simOrder === "up" ? -1 : 1); const action = event.target.closest("button[data-sim-topics-action]"); if (action) { const id = action.dataset.subjectId; simulatorSettings[id].topics = action.dataset.simTopicsAction === "all" ? areasForSubject(id) : []; renderSimulatorSubjects(); } });
els["simulation-history-list"].addEventListener("click", event => { const button = event.target.closest("button[data-delete-simulation]"); if (!button) return; savedSimulations = savedSimulations.filter(record => record.id !== button.dataset.deleteSimulation); saveHistory(); });
els.alternatives.addEventListener("change", event => { if (revealed || studyMode === "review") return; selectedAnswer = event.target.value; if (studyMode === "simulation") { simulation.pending[session[cursor].id] = selectedAnswer; renderQuestionStrip(); } els["confirm-answer"].disabled = false; els["answer-hint"].textContent = studyMode === "simulation" ? `Alternativa ${selectedAnswer} selecionada e pendente de confirmação.` : `Alternativa ${selectedAnswer} selecionada. Confirme quando estiver pronto.`; });
els["confirm-answer"].addEventListener("click", () => studyMode === "simulation" ? confirmSimulation() : confirmPractice()); els["previous-question"].addEventListener("click", () => moveQuestion(-1)); els["next-question"].addEventListener("click", () => moveQuestion(1));
els["question-strip"].addEventListener("click", event => { const button = event.target.closest("button[data-index]"); if (!button) return; preserveViewport(() => { cursor = Number(button.dataset.index); renderQuestion(); }); });
function selectKeyboardAlternative(direction) {
  if (revealed || studyMode === "review") return;
  const inputs = [...els.alternatives.querySelectorAll('input[type="radio"]')]; if (!inputs.length) return;
  const current = inputs.findIndex(input => input.checked), index = current < 0 ? (direction > 0 ? 0 : inputs.length - 1) : (current + direction + inputs.length) % inputs.length, input = inputs[index];
  input.checked = true; input.dispatchEvent(new Event("change", { bubbles: true })); input.focus({ preventScroll: true });
}
document.addEventListener("keydown", event => {
  if (els.estudo.hidden || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.target.matches("input:not([type=radio]), textarea, select")) return;
  if (event.key === "ArrowUp") { event.preventDefault(); selectKeyboardAlternative(-1); return; }
  if (event.key === "ArrowDown") { event.preventDefault(); selectKeyboardAlternative(1); return; }
  if (event.key === "ArrowLeft") { event.preventDefault(); moveQuestion(-1); return; }
  if (event.key === "ArrowRight") { event.preventDefault(); moveQuestion(1); return; }
  if (event.key === "Enter" && !els["confirm-answer"].hidden && !els["confirm-answer"].disabled) { event.preventDefault(); studyMode === "simulation" ? confirmSimulation() : confirmPractice(); }
});
els["reset-progress"].addEventListener("click", () => els["reset-dialog"].showModal()); els["reset-dialog"].addEventListener("close", () => { if (els["reset-dialog"].returnValue !== "confirm") return; progress = {}; localStorage.removeItem(STORAGE_KEY); renderProgress(); });

initFocus(); renderBankCounts(); renderSubjectOptions(); renderProgressSubjectOptions(); renderTopicOptions(); renderProgress(); renderSimulatorSubjects(); renderSimulationHistory();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");
