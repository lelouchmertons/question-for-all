import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const bankPath = path.join(root, "dist", "assets", "questions.js");

function loadBank() {
  const raw = fs.readFileSync(bankPath, "utf8");
  const start = raw.indexOf("{");
  const json = raw.slice(start).trim().replace(/;\s*$/, "");
  return JSON.parse(json);
}

function hash(text) {
  let value = 2166136261;
  for (const char of text) {
    value ^= char.charCodeAt(0);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

function rng(seed) {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function balancedTargets(count, seedText) {
  const letters = ["A", "B", "C", "D", "E"];
  const base = Array.from({ length: count }, (_, index) => letters[index % 5]);
  for (let attempt = 0; attempt < 200; attempt += 1) {
    const candidate = [...base];
    const random = rng(hash(`${seedText}:${attempt}`));
    for (let index = candidate.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(random() * (index + 1));
      [candidate[index], candidate[swap]] = [candidate[swap], candidate[index]];
    }
    const sequence = candidate.join("");
    const hasLongRun = /(A{3}|B{3}|C{3}|D{3}|E{3})/.test(sequence);
    const hasRepeatedCycle = /ABCDEABCDE|EDCBAEDCBA/.test(sequence);
    if (!hasLongRun && !hasRepeatedCycle) return candidate;
  }
  throw new Error(`Não foi possível construir sequência equilibrada para ${seedText}.`);
}

const mathOverrides = {
  1: {
    stem: "Dois fornecedores apresentaram condições para o mesmo insumo. O fornecedor A cobra R$ 2.500,00 e concede descontos sucessivos de 12% e 5%. O fornecedor B cobra R$ 2.420,00, concede desconto único de 14% e acrescenta frete de R$ 30,00. Qual é a diferença absoluta entre os custos finais?",
    options: ["R$ 9,20.", "R$ 12,00.", "R$ 18,80.", "R$ 21,20.", "R$ 30,00."],
    correct: "R$ 21,20.",
    explanation: "Na proposta A, o custo é 2.500 × 0,88 × 0,95 = R$ 2.090,00. Na proposta B, o custo é 2.420 × 0,86 + 30 = R$ 2.111,20. Portanto, A é R$ 21,20 mais barata. Comparar apenas a soma nominal dos percentuais produziria uma conclusão incorreta."
  },
  2: {
    stem: "Após aumento de 18%, um produto passou a custar R$ 1.416,00. Em seguida, foi concedido desconto promocional de 7,5% sobre o preço reajustado. Quais eram, respectivamente, o preço original e o preço promocional?",
    options: ["R$ 1.180,00 e R$ 1.309,80.", "R$ 1.200,00 e R$ 1.309,80.", "R$ 1.200,00 e R$ 1.310,20.", "R$ 1.220,00 e R$ 1.309,80.", "R$ 1.200,00 e R$ 1.293,00."],
    correct: "R$ 1.200,00 e R$ 1.309,80.",
    explanation: "O preço original satisfaz 1,18P = 1.416, logo P = R$ 1.200,00. O desconto posterior incide sobre R$ 1.416,00: 1.416 × 0,925 = R$ 1.309,80. Os dois percentuais não podem ser somados porque atuam sobre bases diferentes."
  },
  9: {
    stem: "Uma bomba transfere 1.350 litros em 45 minutos, com vazão constante. Ela inicia sozinha o esvaziamento de um reservatório com 3.300 litros. Após 20 minutos, uma segunda bomba, com vazão de 20 litros por minuto, passa a operar junto com a primeira. Quanto tempo decorre desde o início até o término da transferência?",
    options: ["64 minutos.", "70 minutos.", "72 minutos.", "74 minutos.", "78 minutos."],
    correct: "74 minutos.",
    explanation: "A primeira bomba transfere 1.350/45 = 30 L/min. Em 20 minutos, transfere 600 L, restando 2.700 L. Juntas, as bombas transferem 50 L/min e gastam mais 54 minutos. O tempo total é 20 + 54 = 74 minutos."
  },
  14: {
    stem: "Um prêmio de R$ 18.000,00 é dividido entre três equipes na proporção 2:3:4. Da maior parcela são retidos 12,5%, e o valor retido é repartido igualmente entre as outras duas equipes. Após o ajuste, quais são as três parcelas, em ordem crescente?",
    options: ["R$ 4.000,00; R$ 6.000,00; R$ 8.000,00.", "R$ 4.500,00; R$ 6.500,00; R$ 7.000,00.", "R$ 4.500,00; R$ 6.000,00; R$ 7.500,00.", "R$ 5.000,00; R$ 6.000,00; R$ 7.000,00.", "R$ 4.250,00; R$ 6.250,00; R$ 7.500,00."],
    correct: "R$ 4.500,00; R$ 6.500,00; R$ 7.000,00.",
    explanation: "A divisão original é R$ 4.000,00, R$ 6.000,00 e R$ 8.000,00. A retenção de 12,5% sobre R$ 8.000,00 equivale a R$ 1.000,00. A maior parcela fica em R$ 7.000,00, enquanto cada uma das outras recebe R$ 500,00."
  },
  17: {
    stem: "Assinale a alternativa cujo valor é irracional, considerando as simplificações possíveis.",
    options: ["√50 − 5√2.", "√18 − √8.", "√27 ÷ √3.", "(√5)² − 3.", "√48 ÷ √3."],
    correct: "√18 − √8.",
    explanation: "√18 − √8 = 3√2 − 2√2 = √2, que é irracional. As demais expressões resultam, respectivamente, em 0, 3, 2 e 4, todos números racionais."
  },
  18: {
    stem: "Uma cobrança é formada por taxa fixa e R$ 3,50 por unidade. Para 48 unidades, o total foi R$ 222,00. Em um novo contrato, a taxa fixa é reduzida em 20%, o preço por unidade aumenta 8% e são utilizadas 60 unidades. Qual será o novo total?",
    options: ["R$ 264,00.", "R$ 270,00.", "R$ 274,80.", "R$ 280,80.", "R$ 286,20."],
    correct: "R$ 270,00.",
    explanation: "A taxa fixa original é 222 − 48 × 3,50 = R$ 54,00. No novo contrato, ela vale 54 × 0,80 = R$ 43,20, e o preço unitário vale 3,50 × 1,08 = R$ 3,78. Assim, 43,20 + 60 × 3,78 = R$ 270,00."
  },
  20: {
    stem: "Um terreno retangular tem área de 300 m² e comprimento 5 m maior que a largura. Será construída, externamente, uma faixa uniforme de 1 m de largura ao redor de todo o terreno. Qual será a área ocupada apenas pela faixa?",
    options: ["64 m².", "70 m².", "72 m².", "74 m².", "78 m²."],
    correct: "74 m².",
    explanation: "Se a largura é x, então x(x + 5) = 300, cuja raiz positiva é x = 15; o comprimento é 20. Com a faixa externa, as dimensões passam a 17 m e 22 m. A área da faixa é 17 × 22 − 300 = 74 m²."
  },
  21: {
    stem: "Uma cultura começa com 500 unidades e dobra a cada 3 horas. Ao atingir 16.000 unidades, 25% do total é removido. Mantido o mesmo ritmo de crescimento por mais 6 horas, qual será a quantidade final e quanto tempo terá decorrido desde o início?",
    options: ["36.000 unidades em 18 horas.", "42.000 unidades em 21 horas.", "48.000 unidades em 18 horas.", "48.000 unidades em 21 horas.", "64.000 unidades em 21 horas."],
    correct: "48.000 unidades em 21 horas.",
    explanation: "Para passar de 500 a 16.000 ocorre multiplicação por 32 = 2⁵, portanto são necessários 15 horas. Após a remoção, restam 12.000 unidades. Em mais 6 horas ocorrem duas duplicações: 12.000 × 4 = 48.000. O tempo total é 21 horas."
  },
  25: {
    stem: "Considere f(x) = 2x − 1 e g(x) = x² + 3. Os valores reais de x para os quais f(g(x)) = g(f(x)) são:",
    options: ["1 ± √2/2.", "1 ± √3/2.", "1 ± √5/2.", "1 ± √6/2.", "2 ± √6/2."],
    correct: "1 ± √6/2.",
    explanation: "Temos f(g(x)) = 2(x² + 3) − 1 = 2x² + 5 e g(f(x)) = (2x − 1)² + 3 = 4x² − 4x + 4. Igualando, resulta 2x² − 4x − 1 = 0, cujas raízes são 1 ± √6/2."
  },
  26: {
    stem: "Um capital de R$ 8.000,00 rende juros simples de 1,5% ao mês. Após quatro meses, são retirados R$ 2.000,00 do principal, sem retirada dos juros acumulados. O saldo remanescente continua aplicado por mais seis meses sob a mesma taxa. Qual é o valor existente na aplicação ao final?",
    options: ["R$ 6.900,00.", "R$ 6.960,00.", "R$ 7.020,00.", "R$ 7.080,00.", "R$ 7.140,00."],
    correct: "R$ 7.020,00.",
    explanation: "Nos quatro primeiros meses, os juros são 8.000 × 0,015 × 4 = R$ 480,00. Após a retirada, permanecem R$ 6.000,00 de principal, que rendem 6.000 × 0,015 × 6 = R$ 540,00. O saldo final é 6.000 + 480 + 540 = R$ 7.020,00."
  },
  29: {
    stem: "Uma prova de peso 2 recebeu nota 7,0 e uma atividade de peso 3 recebeu nota 8,0. Para que a média ponderada das três avaliações seja 7,4, qual deve ser a nota da prova final, de peso 5?",
    options: ["6,8.", "7,0.", "7,2.", "7,4.", "7,6."],
    correct: "7,2.",
    explanation: "A soma ponderada necessária é 7,4 × 10 = 74. As duas primeiras avaliações fornecem 2 × 7 + 3 × 8 = 38 pontos. Restam 36 pontos ponderados; dividindo pelo peso 5, a nota final deve ser 7,2."
  },
  30: {
    stem: "Os tempos de nove atendimentos, em minutos, foram 12, 18, 15, 21, 14, 19, 17, 25 e 16. Se o maior tempo for reduzido em 20% após melhoria do processo, o que ocorre com a média e a mediana?",
    options: ["A média diminui 5/9 de minuto e a mediana permanece 17.", "A média diminui 1 minuto e a mediana passa a 16.", "A média permanece igual e a mediana passa a 16.", "A média diminui 5/9 de minuto e a mediana passa a 16.", "A média diminui 5 minutos e a mediana permanece 17."],
    correct: "A média diminui 5/9 de minuto e a mediana permanece 17.",
    explanation: "A redução de 20% em 25 minutos é de 5 minutos; distribuída pelos nove valores, diminui a média em 5/9 de minuto. O valor 25 passa a 20, e a ordem fica 12, 14, 15, 16, 17, 18, 19, 20, 21; a mediana continua sendo 17."
  },
  33: {
    stem: "Uma urna contém 4 bolas vermelhas, 5 azuis e 3 verdes. Retira-se uma primeira bola e informa-se apenas que ela não era azul. Sem reposição, qual é a probabilidade de a segunda bola ser azul?",
    options: ["4/11.", "5/11.", "5/12.", "7/11.", "7/12."],
    correct: "5/11.",
    explanation: "Sabendo que a primeira bola não era azul, foi removida uma das sete bolas vermelhas ou verdes. Restam 11 bolas, e as cinco azuis continuam na urna. Logo, a probabilidade pedida é 5/11."
  },
  37: {
    stem: "A negação lógica de “Todos os relatórios foram revisados e aprovados” é:",
    options: ["Nenhum relatório foi revisado e nenhum foi aprovado.", "Todos os relatórios deixaram de ser revisados ou aprovados.", "Existe relatório que não foi revisado ou não foi aprovado.", "Existe relatório que foi revisado, mas não foi aprovado.", "Algum relatório não foi revisado e também não foi aprovado."],
    correct: "Existe relatório que não foi revisado ou não foi aprovado.",
    explanation: "A negação de uma afirmação universal exige ao menos um contraexemplo. Além disso, a negação de “revisado e aprovado” é “não revisado ou não aprovado”. Não é necessário que as duas falhas ocorram simultaneamente."
  }
};

const manualOptionSets = {
  "administracao-publica-019": {
    options: [
      "direito líquido e certo ameaçado ou violado por ilegalidade ou abuso de poder, quando não amparado por habeas corpus ou habeas data",
      "acesso ou correção de informações pessoais mantidas em registros de entidades governamentais ou de caráter público",
      "patrimônio público, moralidade administrativa, meio ambiente ou patrimônio histórico e cultural lesados por ato administrativo",
      "falta de norma regulamentadora que inviabilize o exercício de direito constitucional ou de prerrogativa ligada à cidadania",
      "liberdade de locomoção ameaçada ou restringida por ilegalidade ou abuso de poder"
    ], correct: 0
  },
  "administracao-publica-022": {
    options: [
      "o estrangeiro que obtenha naturalização ordinária após cumprir o período de residência exigido pela legislação",
      "o nascido no estrangeiro de pai ou mãe brasileira que seja registrado em repartição brasileira competente",
      "o nascido no Brasil de pais estrangeiros que estejam no País em missão oficial de seu Estado de origem",
      "o cidadão originário de país de língua portuguesa que resida no Brasil e requeira igualdade de direitos",
      "o estrangeiro casado com pessoa brasileira, desde que mantenha residência permanente no território nacional"
    ], correct: 1
  },
  "farmacia-010": {
    options: [
      "exclusivamente no início do plantão, antes de qualquer contato com pacientes, materiais ou superfícies",
      "antes de procedimentos cirúrgicos, pois os demais contatos não exigem preparação das mãos",
      "após tocar superfícies próximas ao paciente, mesmo sem contato direto com ele",
      "ao final de cada turno, como substituição às oportunidades de higiene ao longo da assistência",
      "quando houver sangue ou outra matéria orgânica visível nas mãos do profissional"
    ], correct: 2
  },
  "farmacia-011": {
    options: [
      "entrega de instruções exclusivamente por escrito, sem oportunidade de dúvidas ou confirmação de entendimento",
      "desconsideração de crenças, limitações financeiras e dificuldades práticas que interferem no uso do medicamento",
      "uso prioritário de terminologia técnica, com orientação centrada em protocolos padronizados para todos os usuários",
      "escuta ativa, linguagem compreensível e confirmação de que o usuário entendeu as orientações",
      "interrupção precoce do relato para reduzir o tempo de atendimento e padronizar a consulta"
    ], correct: 3
  },
  "farmacia-013": {
    options: [
      "concentrar as compras na esfera federal para padronizar a organização da assistência em todo o território",
      "estimular a automedicação como estratégia prioritária para reduzir a procura por serviços e consultas de saúde",
      "priorizar preparações manipuladas para ampliar a individualização terapêutica, mesmo quando houver opção industrializada adequada",
      "garantir segurança, eficácia e qualidade dos medicamentos, promover o uso racional e assegurar o acesso da população aos medicamentos essenciais",
      "organizar a assistência farmacêutica como atividade de abastecimento, separada das demais políticas de saúde"
    ], correct: 3
  },
  "farmacia-014": {
    options: [
      "são destinados prioritariamente a doenças raras por envolverem tecnologias de maior complexidade",
      "dispensam estudos de eficácia, segurança e qualidade por integrarem listas consideradas prioritárias",
      "satisfazem as necessidades prioritárias de saúde da população e devem estar disponíveis em formas, quantidades e condições adequadas",
      "são selecionados pelo menor custo de aquisição, desde que exista opção de efetividade semelhante",
      "são obrigatoriamente novos, patenteados e vinculados às tecnologias lançadas mais recentemente"
    ], correct: 2
  },
  "farmacia-018": {
    options: [
      "preservar identidade, integridade, qualidade e rastreabilidade dos produtos durante sua permanência no estoque",
      "dispensar registros de entrada, saída, lote e validade quando houver contagem física periódica do estoque",
      "concentrar o controle na prevenção de furtos, com inspeção periódica das embalagens e das datas de vencimento",
      "permitir o contato direto das embalagens com piso e paredes para aproveitar integralmente o espaço disponível",
      "adotar uma faixa de temperatura padronizada para todo o estoque, priorizando o controle operacional do almoxarifado"
    ], correct: 0
  },
  "farmacia-020": {
    options: [
      "ato que dispensa análise da prescrição, desde que o produto solicitado esteja disponível no estoque",
      "etapa administrativa com foco na entrega e no registro do produto ao usuário",
      "transferência física do medicamento acompanhada apenas da conferência de quantidade e validade",
      "etapa logística integrada ao controle de estoque, com orientação ao usuário restrita aos medicamentos de maior risco",
      "ato profissional de fornecimento acompanhado da análise pertinente e de orientações necessárias ao uso seguro e efetivo"
    ], correct: 4
  },
  "farmacia-021": {
    options: [
      "tratamento escolhido pelo menor preço unitário disponível.",
      "vários medicamentos para ampliar a chance de resposta terapêutica.",
      "medicamento habitual renovado sem reavaliação da necessidade clínica.",
      "medicamento apropriado à necessidade clínica, em dose e duração adequadas, com informação correta e ao menor custo global compatível com qualidade.",
      "a tecnologia mais recente disponível quando acrescenta conveniência ao tratamento."
    ], correct: 3
  },
  "farmacia-001": {
    options: [
      "o atendimento é reservado a brasileiros natos inscritos em programas públicos de assistência",
      "o uso dos serviços depende de contribuição prévia para a seguridade social ou de vínculo formal de trabalho",
      "cada Município pode limitar o atendimento a grupos definidos segundo sua capacidade financeira local",
      "todas as pessoas têm direito de acesso às ações e aos serviços de saúde, sem discriminação indevida",
      "o acesso público se restringe a emergências, surtos ou situações classificadas como graves"
    ], correct: 3
  },
  "farmacia-002": {
    options: [
      "a prevenção, o tratamento e a reabilitação devem funcionar como ações independentes, conforme o setor responsável",
      "os recursos devem ser concentrados em hospitais, que reúnem os procedimentos de maior complexidade do sistema",
      "a assistência deve priorizar exclusivamente intervenções curativas dirigidas a cada usuário já doente",
      "conjunto articulado e contínuo de ações preventivas e curativas, individuais e coletivas, exigidas para cada caso nos diferentes níveis de complexidade",
      "todo produto ou tecnologia solicitada pelo usuário deve ser fornecido sem avaliação técnica, clínica ou de incorporação"
    ], correct: 3
  },
  "farmacia-004": {
    options: [
      "a gestão local é proibida, cabendo aos Municípios apenas executar determinações federais previamente definidas",
      "todos os serviços locais são comandados diretamente pela União, inclusive na definição de prioridades municipais",
      "o financiamento das ações é transferido integralmente aos usuários, de acordo com a capacidade de pagamento",
      "a organização dos serviços dispensa regionalização, hierarquização e integração entre os diferentes níveis de cuidado",
      "descentralização político-administrativa, com direção única em cada esfera de governo"
    ], correct: 4
  },
  "farmacia-005": {
    options: [
      "órgão colegiado permanente e deliberativo, com participação de governo, prestadores, profissionais de saúde e usuários",
      "reunião temporária convocada apenas durante epidemias ou quando a gestão municipal considere necessário",
      "órgão do Poder Judiciário encarregado de julgar gestores e anular decisões de política pública em saúde",
      "entidade privada sem participação na formulação, no acompanhamento ou no controle das políticas de saúde",
      "colegiado formado exclusivamente por gestores públicos responsáveis pela execução dos serviços"
    ], correct: 0
  },
  "farmacia-008": {
    options: [
      "adquirida em razão de cuidados ou procedimentos de saúde, podendo manifestar-se durante ou após o atendimento quando houver relação com a assistência",
      "restrita a hospitais de grande porte que mantenham unidade de terapia intensiva ou centro cirúrgico próprio",
      "obrigatoriamente presente antes da admissão do paciente e apenas reconhecida durante a internação",
      "impossível em atendimentos ambulatoriais, domiciliares ou realizados em estabelecimentos de menor porte",
      "causada exclusivamente por bactérias multirresistentes identificadas em culturas microbiológicas"
    ], correct: 0
  },
  "farmacia-010": {
    options: [
      "antes de procedimentos cirúrgicos, pois os demais contatos não exigem preparação das mãos",
      "ao final de cada turno, como substituição às oportunidades de higiene ao longo da assistência",
      "após tocar superfícies próximas ao paciente, mesmo sem contato direto com ele",
      "exclusivamente no início do plantão, antes de qualquer contato com pacientes, materiais ou superfícies",
      "quando houver sangue ou outra matéria orgânica visível nas mãos do profissional"
    ], correct: 2
  },
  "farmacia-011": {
    options: [
      "uso prioritário de terminologia técnica, com orientação centrada em protocolos padronizados para todos os usuários",
      "interrupção precoce do relato para reduzir o tempo de atendimento e padronizar a consulta",
      "entrega de instruções exclusivamente por escrito, sem oportunidade de dúvidas ou confirmação de entendimento",
      "escuta ativa, linguagem compreensível e confirmação de que o usuário entendeu as orientações",
      "desconsideração de crenças, limitações financeiras e dificuldades práticas que interferem no uso do medicamento"
    ], correct: 3
  },
  "farmacia-012": {
    options: [
      "devem ser protegidas, com compartilhamento limitado às hipóteses autorizadas pelo paciente ou justificadas por dever legal e necessidade assistencial",
      "podem ser divulgadas em redes sociais desde que o nome do paciente seja abreviado ou omitido na publicação",
      "deixam de ser sigilosas quando passam a integrar prontuário eletrônico acessado pela equipe do serviço",
      "pertencem exclusivamente ao profissional que realizou o atendimento e não podem compor registros institucionais",
      "podem ser comunicadas livremente porque o atendimento foi realizado em unidade integrante do SUS"
    ], correct: 0
  },
  "farmacia-013": {
    options: [
      "concentrar todas as compras na esfera federal, sem participação dos Estados e Municípios na organização da assistência",
      "estimular a automedicação como estratégia prioritária para reduzir a procura por serviços e consultas de saúde",
      "priorizar preparações manipuladas para ampliar a individualização terapêutica, mesmo quando houver opção industrializada adequada",
      "garantir segurança, eficácia e qualidade dos medicamentos, promover o uso racional e assegurar o acesso da população aos medicamentos essenciais",
      "retirar a assistência farmacêutica das políticas de saúde e limitá-la ao abastecimento administrativo de produtos"
    ], correct: 3
  },
  "farmacia-014": {
    options: [
      "são destinados prioritariamente a doenças raras por envolverem tecnologias de maior complexidade",
      "dispensam estudos de eficácia, segurança e qualidade por integrarem listas consideradas prioritárias",
      "satisfazem as necessidades prioritárias de saúde da população e devem estar disponíveis em formas, quantidades e condições adequadas",
      "são selecionados pelo menor custo de aquisição, desde que exista opção de efetividade semelhante",
      "são obrigatoriamente novos, patenteados e vinculados às tecnologias lançadas mais recentemente"
    ], correct: 2
  },
  "farmacia-015": {
    options: [
      "por decisão isolada do setor financeiro, considerando apenas o limite orçamentário disponível para a compra",
      "pelo fornecedor vencedor da última licitação, que define os itens conforme sua linha comercial",
      "conforme a intensidade da publicidade recebida pelos produtos e o reconhecimento de suas marcas",
      "por equipe ou comissão multiprofissional, com critérios epidemiológicos, clínicos, de eficácia, segurança, qualidade e custo-efetividade",
      "pela ordem de lançamento dos produtos, priorizando automaticamente as apresentações mais recentes do mercado"
    ], correct: 3
  },
  "farmacia-016": {
    options: [
      "escolher a alternativa terapêutica mais segura para cada indivíduo durante a consulta farmacêutica",
      "redigir o edital de licitação e definir exclusivamente as regras jurídicas de contratação dos fornecedores",
      "entregar o medicamento ao usuário e prestar orientação individual após a conferência da prescrição",
      "estimar as quantidades necessárias para determinado período, compatibilizando necessidades, estoques, consumo, recursos e capacidade de armazenamento",
      "conferir fisicamente os produtos recebidos e registrar eventuais divergências de quantidade ou qualidade"
    ], correct: 3
  },
  "farmacia-017": {
    options: [
      "utilizar apenas a marca comercial do produto, sem necessidade de especificação técnica ou justificativa objetiva",
      "receber quantitativo diferente do contratado, desde que o fornecedor prometa regularizar a diferença posteriormente",
      "especificar adequadamente o objeto e considerar qualidade, regularidade sanitária, prazo, condições de entrega e custo total, além do preço",
      "aceitar produto sem registro sanitário quando oferecer valor menor do que as alternativas regularizadas",
      "dispensar planejamento porque a licitação, por si só, corrige falhas de programação e previsão de demanda"
    ], correct: 2
  },
  "farmacia-018": {
    options: [
      "preservar identidade, integridade, qualidade e rastreabilidade dos produtos durante sua permanência no estoque",
      "adotar uma faixa de temperatura padronizada para todo o estoque, priorizando o controle operacional do almoxarifado",
      "concentrar o controle na prevenção de furtos, com inspeção periódica das embalagens e das datas de vencimento",
      "permitir o contato direto das embalagens com piso e paredes para aproveitar integralmente o espaço disponível",
      "dispensar registros de entrada, saída, lote e validade quando houver contagem física periódica do estoque"
    ], correct: 0
  },
  "farmacia-019": {
    options: [
      "suprimento das unidades requisitantes em quantidades, qualidade e tempo adequados, com controle documental e logístico",
      "descarte de produtos vencidos, avariados ou reprovados durante inspeções realizadas no almoxarifado",
      "prescrição individual realizada pelo farmacêutico após avaliação clínica e definição da farmacoterapia",
      "administração do medicamento ao paciente, com verificação direta da dose, via e horário de uso",
      "seleção de medicamentos para a lista municipal, antes da programação e da aquisição dos itens necessários"
    ], correct: 0
  },
  "farmacia-020": {
    options: [
      "etapa administrativa com foco na entrega e no registro do produto ao usuário",
      "ato que dispensa análise da prescrição, desde que o produto solicitado esteja disponível no estoque",
      "simples transferência física de uma caixa ao usuário, sem diálogo sobre indicação, dose ou modo de uso",
      "etapa logística integrada ao controle de estoque, com orientação ao usuário restrita aos medicamentos de maior risco",
      "ato profissional de fornecimento acompanhado da análise pertinente e de orientações necessárias ao uso seguro e efetivo"
    ], correct: 4
  },
  "administracao-publica-019": {
    options: [
      "direito líquido e certo ameaçado ou violado por ilegalidade ou abuso de poder, quando não amparado por habeas corpus ou habeas data",
      "liberdade de locomoção ameaçada ou restringida por ilegalidade ou abuso de poder",
      "acesso ou correção de informações pessoais mantidas em registros de entidades governamentais ou de caráter público",
      "falta de norma regulamentadora que inviabilize o exercício de direito constitucional ou de prerrogativa ligada à cidadania",
      "patrimônio público, moralidade administrativa, meio ambiente ou patrimônio histórico e cultural lesados por ato administrativo"
    ],
    correct: 0
  },
  "administracao-publica-020": {
    options: [
      "assegurar conhecimento ou retificação de dados do impetrante mantidos em registros governamentais ou de caráter público",
      "proteger liberdade de locomoção ameaçada ou restringida por ilegalidade ou abuso de poder praticado por autoridade pública",
      "suprir falta de norma regulamentadora que inviabilize direito constitucional ou prerrogativa ligada à cidadania",
      "invalidar ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente ou ao patrimônio cultural",
      "proteger direito líquido e certo demonstrado por prova pré-constituída quando não couber habeas corpus ou habeas data"
    ],
    correct: 0
  },
  "administracao-publica-022": {
    options: [
      "o estrangeiro que obtenha naturalização ordinária após cumprir o período de residência exigido pela legislação",
      "o nascido no estrangeiro de pai ou mãe brasileira que seja registrado em repartição brasileira competente",
      "o estrangeiro casado com pessoa brasileira, desde que mantenha residência permanente no território nacional",
      "o nascido no Brasil de pais estrangeiros que estejam no País em missão oficial de seu Estado de origem",
      "o cidadão originário de país de língua portuguesa que resida no Brasil e requeira igualdade de direitos"
    ],
    correct: 1
  },
  "administracao-publica-031": {
    options: [
      "funções de confiança e cargos em comissão podem abranger atividades técnicas permanentes, desde que a autoridade motive a escolha",
      "funções de confiança podem ser atribuídas a qualquer particular, enquanto cargos em comissão são exclusivos de servidores efetivos",
      "cargos em comissão são sempre ocupados por pessoas sem vínculo efetivo, vedada a reserva de percentual a servidores de carreira",
      "funções de confiança são exclusivas de servidores efetivos, e ambas as figuras se destinam a direção, chefia e assessoramento",
      "funções de confiança e cargos em comissão dependem de concurso específico, seguido de livre designação pela autoridade competente"
    ],
    correct: 3
  },
  "administracao-publica-050": {
    options: [
      "a LC nº 190/2023 substituiu integralmente o Estatuto e passou a reunir também deveres, proibições e sanções disciplinares",
      "a LC nº 12/2005 trata somente de remuneração, enquanto a LC nº 190/2023 disciplina provimento e responsabilidade funcional",
      "a LC nº 12/2005 estabelece o regime estatutário, e a LC nº 190/2023 organiza cargos, carreira e remuneração do quadro efetivo",
      "a LC nº 190/2023 corresponde à Lei Orgânica municipal, cabendo à LC nº 12/2005 organizar os Poderes Executivo e Legislativo",
      "as duas leis possuem o mesmo objeto e diferem apenas quanto aos valores remuneratórios atualizados em seus respectivos anexos"
    ],
    correct: 2
  },
  "administracao-publica-024": {
    options: [
      "podem adotar organização paramilitar quando destinada exclusivamente à segurança interna de seus filiados e dirigentes",
      "ficam dispensados de prestar contas à Justiça Eleitoral quando não recebem recursos provenientes do Fundo Partidário",
      "podem receber recursos financeiros de governo estrangeiro se a transferência for previamente autorizada pelo Congresso Nacional",
      "têm criação, fusão, incorporação e extinção livres, respeitados soberania nacional, regime democrático, pluripartidarismo e direitos fundamentais",
      "devem possuir caráter estadual, sendo facultativa a constituição de diretório nacional para participação nas eleições gerais"
    ],
    correct: 3
  },
  "farmacia-045": {
    options: [
      "resposta nociva e não intencional a um medicamento utilizado em doses normalmente empregadas para profilaxia, diagnóstico ou tratamento",
      "evento evitável capaz de provocar uso inadequado do medicamento ou dano enquanto o produto está sob controle de profissionais ou usuários",
      "ocorrência clínica desfavorável atribuída ao medicamento após avaliação da relação causal com seu uso",
      "ausência do efeito terapêutico esperado apesar da utilização do medicamento na indicação, na dose e pelo período considerados adequados",
      "alteração de identidade, pureza, potência ou desempenho do produto decorrente de falha de fabricação, armazenamento ou transporte"
    ],
    correct: 1
  },
  "farmacia-060": {
    options: [
      "os modelos antigos deixaram de poder ser impressos, mas exemplares impressos no período permitido continuam utilizáveis dentro da validade aplicável",
      "todos os modelos anteriores perderam validade para prescrição e dispensação no mesmo dia em que o primeiro modelo novo foi disponibilizado",
      "a implantação dos novos modelos revogou integralmente a Portaria nº 344/1998 e transferiu o controle das listas aos conselhos profissionais",
      "a versão inicial dos novos modelos permaneceu obrigatória para impressão durante todo o ano, sem substituição por versão posteriormente atualizada",
      "os novos modelos são exclusivos de prescrições digitais, enquanto toda prescrição física permanece vinculada aos anexos antigos da Portaria"
    ],
    correct: 0
  },
  "farmacia-063": {
    options: [
      "consolida a movimentação das substâncias e dos medicamentos sujeitos à exigência, sob responsabilidade do estabelecimento e do responsável técnico",
      "substitui os documentos fiscais de aquisição e transferência, dispensando a conservação dos comprovantes que originaram cada lançamento",
      "funciona como prescrição coletiva para pacientes cadastrados e autoriza dispensações sucessivas durante o período informado no balanço",
      "é preenchido pelo paciente no momento da dispensação e permanece arquivado exclusivamente junto à respectiva receita de controle especial",
      "elimina a responsabilidade do farmacêutico pelos registros individuais quando os totais de entrada e saída fecham sem diferença aparente"
    ],
    correct: 0
  },
  "farmacia-064": {
    options: [
      "somente identificação e assinatura do prescritor, pois concentração, quantidade e posologia podem ser completadas na dispensação",
      "legibilidade, identificação das partes, data, substância, concentração, forma, quantidade, posologia e requisitos próprios do receituário",
      "diagnóstico clínico completo e exames comprobatórios, dispensando a conferência da forma farmacêutica e da quantidade prescrita",
      "existência do produto no estoque e compatibilidade com a padronização local, deixando a conferência dos dados formais para o registro posterior",
      "assinatura do paciente e autorização administrativa prévia, sem necessidade de verificar data, concentração ou duração do tratamento"
    ],
    correct: 1
  },
  "farmacia-118": {
    options: [
      "registrar exclusivamente os medicamentos utilizados, deixando objetivos e prazos para definição apenas quando ocorrer falha terapêutica",
      "definir problemas, objetivos, intervenções, parâmetros de monitoramento e prazos de reavaliação pactuados com paciente e equipe quando necessário",
      "reproduzir a prescrição médica e limitar o acompanhamento à confirmação de que todos os itens foram dispensados na quantidade indicada",
      "ser elaborado pelo profissional sem participação do paciente, evitando que preferências individuais modifiquem os objetivos técnicos do cuidado",
      "substituir o diagnóstico e as decisões dos demais profissionais, concentrando no farmacêutico todas as mudanças da farmacoterapia"
    ],
    correct: 1
  },
  "farmacia-140": {
    options: [
      "ampliar a compra dos dois anti-hipertensivos com base no consumo registrado, mantendo os parâmetros de seleção e reposição já utilizados",
      "suspender novas aquisições, descartar antecipadamente o item próximo do vencimento e aguardar a normalização espontânea da demanda",
      "revisar seleção e programação, analisar consumo e demanda reprimida, redistribuir lotes viáveis, corrigir reposição e acompanhar indicadores",
      "substituir a losartana pelo item excedente em todas as prescrições, desde que ambos pertençam ao mesmo grupo terapêutico principal",
      "atribuir a falta à retirada irregular pelos pacientes e limitar a intervenção ao reforço das regras de dispensação na unidade"
    ],
    correct: 2
  },
  "farmacia-023": {
    options: [
      "conjunto de atividades administrativas destinado à aquisição e à distribuição, sem participação nas ações de cuidado ao usuário",
      "conjunto de ações de promoção, proteção e recuperação da saúde que busca assegurar acesso e uso racional de medicamentos",
      "serviço clínico individual realizado após a prescrição, sem abranger seleção, programação, aquisição ou armazenamento",
      "sistema logístico voltado ao abastecimento das unidades, com avaliação terapêutica reservada exclusivamente ao prescritor",
      "atividade industrial de produção e controle de qualidade que se encerra quando o medicamento é entregue ao serviço de saúde"
    ],
    correct: 1
  },
  "farmacia-061": {
    options: [
      "em área identificada e de acesso controlado, podendo compartilhar o espaço com saneantes quando existirem prateleiras separadas",
      "no estoque comum, desde que os produtos de maior risco permaneçam nas embalagens originais e sejam conferidos diariamente",
      "em local exclusivo, sob chave ou dispositivo de segurança e sob responsabilidade do farmacêutico, conforme a norma aplicável",
      "em área acessível aos dispensadores, sem necessidade de restrição física quando houver controle informatizado de entradas e saídas",
      "fora do estoque contábil regular, pois a escrituração específica substitui os registros de recebimento, lote, validade e inventário"
    ],
    correct: 2
  },
  "farmacia-070": {
    options: [
      "reduzir o tamanho de partículas por trituração a seco até obter pó fino, antes de adicionar qualquer componente líquido",
      "reduzir e dispersar partículas com pequena quantidade de líquido no qual são insolúveis, formando pasta lisa antes da incorporação",
      "separar as fases de uma emulsão por repouso controlado, retirando primeiro a fase que apresenta maior densidade",
      "eliminar completamente o veículo de uma preparação por aquecimento, concentrando os sólidos antes da incorporação à base",
      "promover a união de pós por compressão direta, aumentando a coesão das partículas sem emprego de líquido ou agente aglutinante"
    ],
    correct: 1
  },
  "farmacia-123": {
    options: [
      "descrever segregação, acondicionamento, identificação, coleta, armazenamento, transporte, tratamento e destinação conforme riscos e normas",
      "classificar todos os resíduos como comuns após seu acondicionamento, desde que a coleta interna ocorra em recipientes identificados",
      "abranger somente armazenamento externo, transporte e destinação, deixando a segregação sob decisão de cada setor gerador",
      "ser elaborado pela empresa coletora, que assume integralmente a responsabilidade desde o momento em que o resíduo é produzido",
      "ser preparado após incidente ambiental ou autuação sanitária, quando passam a ser conhecidos os riscos efetivamente existentes no serviço"
    ],
    correct: 0
  },
  "farmacia-125": {
    options: [
      "dispensa análise microbiológica quando também apresenta sabor aceitável e provém de sistema público submetido a tratamento",
      "só é considerada potável quando atende aos parâmetros da norma vigente, pois aparência e odor não afastam contaminações",
      "pode apresentar contaminantes químicos acima dos valores máximos quando não houver alteração perceptível de cor, odor ou sabor",
      "prescinde de vigilância quando distribuída por rede pública, cabendo o controle analítico somente ao ponto de captação da água",
      "é considerada potável pela avaliação sensorial, ficando os ensaios laboratoriais reservados a situações de surto ou denúncia"
    ],
    correct: 1
  },
  "farmacia-137": {
    options: [
      "incorporar risco ao planejamento, acompanhar o fornecedor e ajustar justificadamente o estoque de segurança e as estratégias de aquisição",
      "manter o estoque de segurança no parâmetro histórico, pois elevar seu nível pode comprometer o giro regular dos demais itens",
      "priorizar a proposta de menor preço quando o fornecedor atual mantém regularidade documental e prazo contratual vigente",
      "substituir preventivamente o item por alternativa disponível no mercado, com avaliação restrita à equivalência de apresentação",
      "ampliar o estoque para cobrir o exercício inteiro, concentrando o monitoramento nas datas de recebimento de cada remessa"
    ],
    correct: 0
  },
  "farmacia-148": {
    options: [
      "atua como agonista parcial e restabelece a ventilação sem risco de precipitar abstinência em pessoas dependentes de opioides",
      "é o antídoto utilizado para repor glutationa e limitar lesão hepática decorrente de superdose aguda de paracetamol",
      "antagoniza receptores opioides e pode reverter depressão respiratória, mas exige vigilância porque seu efeito pode ser mais curto",
      "substitui o suporte ventilatório após a primeira resposta clínica, mesmo quando o opioide envolvido apresenta ação prolongada",
      "reduz a absorção gastrointestinal dos opioides e, por esse mecanismo, impede recorrência dos sintomas depois da dose inicial"
    ],
    correct: 2
  },
  "farmacia-152": {
    options: [
      "avaliar gravidade, relação temporal, interações e causas alternativas, solicitando exames quando indicados e ajustando a estratégia",
      "duplicar temporariamente a dose para verificar se o sintoma possui relação proporcional com a intensidade do efeito hipolipemiante",
      "recomendar exercício intenso antes da avaliação laboratorial, pois a persistência da dor durante o esforço confirma toxicidade muscular",
      "manter o tratamento sem investigação quando a dor não impede atividades, pois sintomas musculares leves não se relacionam às estatinas",
      "suspender definitivamente todas as estatinas, sem tentativa de ajuste de dose, mudança de fármaco ou investigação de fatores contribuintes"
    ],
    correct: 0
  },
  "farmacia-074": {
    options: ["500 mL e 500 mL.", "666,7 mL e 333,3 mL.", "600 mL e 400 mL.", "400 mL e 600 mL.", "250 mL e 750 mL."],
    correct: 1
  },
  "farmacia-075": {
    options: ["1 g em 1 mL.", "10 g em 100 mL.", "1 mg em 100 mL.", "1 g em volume final de 100 mL.", "100 g em 1 mL."],
    correct: 3
  },
  "farmacia-094": {
    options: [
      "absorver toda a dose administrada por via oral.",
      "iniciar a desintegração de um comprimido.",
      "reduzir pela metade a quantidade ou concentração do fármaco no organismo.",
      "alcançar a concentração definida como tóxica.",
      "eliminar uma quantidade fixa de fármaco por unidade de tempo."
    ], correct: 2
  },
  "farmacia-095": {
    options: [
      "dez minutos após administração oral.",
      "quatro a cinco meias-vidas.",
      "uma única dose de ataque prevista no esquema terapêutico.",
      "uma hora após o início da administração.",
      "o momento de interrupção do tratamento."
    ], correct: 1
  },
  "farmacia-110": {
    options: [
      "aumentar a absorção intestinal de glicose.",
      "bloquear de forma irreversível os receptores de insulina.",
      "reduzir a produção hepática de glicose e melhorar a sensibilidade à insulina, com baixo risco de hipoglicemia quando usada isoladamente.",
      "reduzir a reserva funcional das células beta pancreáticas.",
      "estimular a secreção basal de insulina e reduzir a produção hepática de glicose."
    ], correct: 2
  },
  "farmacia-122": {
    options: [
      "E, quando o resíduo resultar do uso de objeto perfurante ou cortante.",
      "A, por apresentar risco biológico decorrente de contato com material orgânico.",
      "C, quando houver potencial de emissão de radiação ionizante.",
      "D, após acondicionamento em embalagem destinada a resíduos comuns.",
      "B, químico."
    ], correct: 4
  },
  "farmacia-144": {
    options: [
      "reavaliar e descalonar o tratamento quando clinicamente possível.",
      "acrescentar outro antimicrobiano para ampliar a cobertura empírica.",
      "suspender toda a terapia antimicrobiana e aguardar nova prescrição.",
      "manter a combinação inicial de amplo espectro até o fim do esquema previsto.",
      "definir a escolha pelo resultado microbiológico sem integrar sítio de infecção e evolução clínica."
    ], correct: 0
  },
  "farmacia-129": {
    options: [
      "0 °C.",
      "8 °C a 15 °C.",
      "−20 °C a −10 °C.",
      "15 °C a 30 °C.",
      "+2 °C a +8 °C."
    ], correct: 4
  },
  "farmacia-130": {
    options: [
      "o dano pelo congelamento ocorre apenas em vacinas liofilizadas, pois as demais permanecem estáveis nessa condição",
      "o descongelamento lento restabelece a qualidade quando a excursão foi identificada logo após sua ocorrência",
      "o congelamento melhora a estabilidade de vacinas adsorvidas, reduzindo a necessidade de controle de temperatura",
      "a exposição abaixo da faixa recomendada pode danificá-las irreversivelmente, mesmo quando a embalagem permanece íntegra",
      "a avaliação do congelamento depende apenas da alteração de cor observada antes da aplicação"
    ], correct: 3
  },
  "farmacia-131": {
    options: [
      "manter os produtos identificados e segregados na faixa recomendada, registrar o histórico e solicitar avaliação técnica antes do uso ou descarte",
      "manter os produtos na faixa habitual enquanto se aguarda decisão, registrando apenas a leitura mais recente do equipamento",
      "descartar os produtos após registrar a excursão e comunicar a ocorrência somente se houver perda visível nas embalagens",
      "transferir os itens para equipamento alternativo e retomar o uso quando as leituras posteriores voltarem à faixa recomendada",
      "corrigir a temperatura do equipamento, apagar o alarme e reiniciar a rotina de dispensação ao final do turno"
    ], correct: 0
  },
  "farmacia-132": {
    options: [
      "pode ser utilizada por prazo adicional quando a temperatura registrada permaneceu estável durante todo o armazenamento",
      "pode ser administrada mediante ciência do usuário, desde que a dose seja anotada no registro nominal de vacinação",
      "pode ser vinculada a lote válido se ambos os produtos tiverem a mesma apresentação, diluente e fabricante",
      "não deve ser administrada e precisa ser segregada, registrada e destinada conforme o gerenciamento aplicável",
      "recupera sua validade quando submetida a congelamento controlado antes do retorno ao estoque"
    ], correct: 3
  }
};

function applyManualOptionSet(question) {
  const override = manualOptionSets[question.id];
  if (!override) return;
  question.options = override.options.map((text, index) => ({ letter: "ABCDE"[index], text }));
  question.answer = "ABCDE"[override.correct];
}

function applyMathOverrides(question) {
  if (question.subjectId !== "matematica") return;
  const override = mathOverrides[question.number];
  if (!override) return;
  question.stem = override.stem;
  question.options = override.options.map((text, index) => ({ letter: "ABCDE"[index], text }));
  question.answer = "ABCDE"[override.options.indexOf(override.correct)];
  question.explanation = override.explanation;
}

function cleanImportedFooter(question) {
  question.explanation = question.explanation
    .replace(/\n\n(?:FONTES NORMATIVAS(?: E TÉCNICAS)? PRINCIPAIS|FIM DO BANCO DE QUESTÕES|CONTROLE DE COBERTURA)[\s\S]*$/i, "")
    .trim();
}

function reorderOptions(question, targetLetter) {
  const correct = question.options.find((option) => option.letter === question.answer);
  const distractors = question.options
    .filter((option) => option.letter !== question.answer)
    .sort((a, b) => hash(`${question.id}:${a.text}`) - hash(`${question.id}:${b.text}`));
  const targetIndex = "ABCDE".indexOf(targetLetter);
  const ordered = [];
  let distractorIndex = 0;
  for (let index = 0; index < 5; index += 1) {
    ordered.push(index === targetIndex ? correct : distractors[distractorIndex++]);
  }
  question.options = ordered.map((option, index) => ({ letter: "ABCDE"[index], text: option.text }));
  question.answer = targetLetter;
}

function validate(bank) {
  const report = {};
  const cluePhrases = /ainda que existissem|sem considerar as condições clínicas|sem observar protocolos|como regra geral para todos|independentemente de indicação|tratando esse único elemento|como se a avaliação individual|sem exigir conferência/i;
  for (const subject of bank.subjects) {
    const questions = bank.questions.filter((question) => question.subjectId === subject.id);
    const answerCounts = Object.fromEntries("ABCDE".split("").map((letter) => [letter, 0]));
    let correctUniquelyLongest = 0;
    let suspiciousLengthGap = 0;
    for (const question of questions) {
      if (question.options.length !== 5) throw new Error(`${question.id}: quantidade inválida de alternativas.`);
      if (!question.options.some((option) => option.letter === question.answer)) throw new Error(`${question.id}: gabarito ausente.`);
      if (question.options.some(option => cluePhrases.test(option.text))) throw new Error(`${question.id}: alternativa com pista editorial proibida.`);
      answerCounts[question.answer] += 1;
      const lengths = question.options.map((option) => option.text.length);
      const correctLength = question.options.find((option) => option.letter === question.answer).text.length;
      const max = Math.max(...lengths);
      if (correctLength === max && lengths.filter((length) => length === max).length === 1) correctUniquelyLongest += 1;
      const wrongAverage = question.options.filter((option) => option.letter !== question.answer).reduce((sum, option) => sum + option.text.length, 0) / 4;
      if (correctLength - wrongAverage > 25) suspiciousLengthGap += 1;
    }
    const sequence = questions.map((question) => question.answer).join("");
    if (/(A{3}|B{3}|C{3}|D{3}|E{3})/.test(sequence)) throw new Error(`${subject.id}: sequência com três gabaritos iguais.`);
    if (/ABCDEABCDE|EDCBAEDCBA/.test(sequence)) throw new Error(`${subject.id}: ciclo previsível de gabaritos.`);
    report[subject.id] = { count: questions.length, answerCounts, correctUniquelyLongest, suspiciousLengthGap };
  }
  return report;
}

const bank = loadBank();
for (const question of bank.questions) {
  cleanImportedFooter(question);
  applyMathOverrides(question);
  applyManualOptionSet(question);
}

for (const subject of bank.subjects) {
  const questions = bank.questions.filter((question) => question.subjectId === subject.id);
  const targets = balancedTargets(questions.length, subject.id);
  questions.forEach((question, index) => reorderOptions(question, targets[index]));
}

bank.generatedAt = new Date().toISOString();
bank.review = {
  version: 2,
  description: "Revisão editorial de gabaritos, pistas de extensão, rodapés importados e complexidade matemática.",
  mathQuestionsStrengthened: Object.keys(mathOverrides).map(Number)
};

const report = validate(bank);
fs.writeFileSync(bankPath, `export const questionBank = ${JSON.stringify(bank, null, 2)};\n`, "utf8");
fs.writeFileSync(path.join(root, "review-report.json"), JSON.stringify(report, null, 2) + "\n", "utf8");
console.log(JSON.stringify(report, null, 2));
