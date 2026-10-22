import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const sources = [
  {
    id: "matematica",
    label: "Matemática e Raciocínio Lógico",
    short: "Matemática",
    file: "C:/Users/lelou/Downloads/Questoes_Matematica_Massaranduba.txt",
    expected: 60,
  },
  {
    id: "administracao-publica",
    label: "Administração Pública e Legislação",
    short: "Administração Pública",
    file: "C:/Users/lelou/Downloads/Questoes_Administracao_Publica_Massaranduba.txt",
    expected: 50,
  },
  {
    id: "portugues",
    label: "Língua Portuguesa",
    short: "Português",
    file: "C:/Users/lelou/Downloads/Questoes_Portugues_Massaranduba.txt",
    expected: 60,
  },
  {
    id: "farmacia",
    label: "Conhecimentos Específicos de Farmácia",
    short: "Farmácia",
    file: "C:/Users/lelou/Downloads/Questoes_Farmacia_Massaranduba.txt",
    expected: 160,
  },
];

function cleanParagraphs(lines) {
  const paragraphs = [];
  let current = [];
  const flush = () => {
    if (!current.length) return;
    paragraphs.push(current.join(" ").replace(/\s+/g, " ").trim());
    current = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flush();
      continue;
    }
    current.push(line);
  }
  flush();
  return paragraphs.join("\n\n");
}

function parseSource(source) {
  const text = fs.readFileSync(source.file, "utf8").replace(/\r\n?/g, "\n");
  const header = /^QUESTÃO\s+(\d+)\s+\((.+?)\)\s*$/gm;
  const matches = [...text.matchAll(header)];

  return matches.map((match, index) => {
    const blockStart = match.index;
    const blockEnd = index + 1 < matches.length ? matches[index + 1].index : text.length;
    const block = text.slice(blockStart, blockEnd).trim();
    const lines = block.split("\n");
    const dividerIndex = lines.findIndex((line) => line.includes("RESOLVA ANTES DE CONTINUAR"));
    const contentLines = lines.slice(1, dividerIndex === -1 ? lines.length : dividerIndex);

    const optionStarts = [];
    contentLines.forEach((line, lineIndex) => {
      if (/^[A-E]\)\s*/.test(line.trim())) optionStarts.push(lineIndex);
    });
    if (optionStarts.length !== 5) {
      throw new Error(`${source.label} questão ${match[1]}: esperadas 5 alternativas, encontradas ${optionStarts.length}.`);
    }

    const stem = cleanParagraphs(contentLines.slice(0, optionStarts[0]));
    const options = optionStarts.map((start, optionIndex) => {
      const end = optionIndex + 1 < optionStarts.length ? optionStarts[optionIndex + 1] : contentLines.length;
      const optionLines = contentLines.slice(start, end);
      const letter = optionLines[0].trim()[0];
      optionLines[0] = optionLines[0].replace(/^[A-E]\)\s*/, "");
      return { letter, text: cleanParagraphs(optionLines) };
    });

    const answerMatch = block.match(/GABARITO:\s*###\(\(\(\s*([A-E])\s*\)\)\)###/);
    const explanationMatch = block.match(/EXPLICAÇÃO:\s*([\s\S]*?)$/);
    if (!answerMatch || !explanationMatch) {
      throw new Error(`${source.label} questão ${match[1]}: gabarito ou explicação ausente.`);
    }

    return {
      id: `${source.id}-${String(Number(match[1])).padStart(3, "0")}`,
      subjectId: source.id,
      number: Number(match[1]),
      topic: match[2].trim(),
      area: match[2].split(/\s[-–—:]\s/)[0].trim(),
      stem,
      options,
      answer: answerMatch[1],
      explanation: cleanParagraphs(explanationMatch[1].split("\n")),
    };
  });
}

const questions = sources.flatMap((source) => {
  const parsed = parseSource(source);
  if (parsed.length !== source.expected) {
    throw new Error(`${source.label}: esperadas ${source.expected} questões, encontradas ${parsed.length}.`);
  }
  return parsed;
});

const payload = {
  generatedAt: new Date().toISOString(),
  subjects: sources.map(({ id, label, short, expected }) => ({ id, label, short, count: expected })),
  questions,
};

fs.mkdirSync(path.join(root, "dist", "assets"), { recursive: true });
fs.writeFileSync(
  path.join(root, "dist", "assets", "questions.js"),
  `export const questionBank = ${JSON.stringify(payload, null, 2)};\n`,
  "utf8",
);

console.log(JSON.stringify({ questions: questions.length, subjects: payload.subjects }, null, 2));
