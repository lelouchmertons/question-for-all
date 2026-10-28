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
  4: {
    stem: "Um fornecedor elevou um preço em 25% e, posteriormente, concedeu desconto de 20% sobre o valor reajustado. Em comparação ao preço original, qual foi a variação percentual do valor final?",
    options: ["0%.", "+1%.", "−10%.", "+5%.", "−5%."],
    correct: "0%.",
    explanation: "Os fatores são 1,25 e 0,80. Como 1,25 × 0,80 = 1, o preço retorna ao valor original. Percentuais inversos podem se anular quando seus fatores se compensam, embora 25 e 20 não sejam números iguais."
  },
  5: {
    stem: "O consumo de determinado item aumentou 30% em um mês e diminuiu 30% no mês seguinte. Em relação ao consumo inicial, qual foi a variação percentual do consumo final?",
    options: ["+30%.", "−9%.", "−3%.", "0%.", "−6%."],
    correct: "−9%.",
    explanation: "O fator acumulado é 1,30 × 0,70 = 0,91. O resultado corresponde a 91% do valor inicial, portanto houve redução de 9%."
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
  16: {
    stem: "O menor número natural maior que 18 que, ao ser dividido por 8, 12 e 18, deixa resto 5 em todos os casos é:",
    options: ["293.", "221.", "77.", "149.", "72."],
    correct: "77.",
    explanation: "Se o número deixa resto 5, sua diferença para 5 deve ser múltipla comum de 8, 12 e 18. O MMC é 72. Assim, os números possíveis têm a forma 72k + 5; o menor que é maior que 18 é 77."
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
  32: {
    stem: "Uma tabela apresenta o número de atendimentos de três unidades:\n\nUnidade A: janeiro 400; fevereiro 460. Unidade B: janeiro 250; fevereiro 300. Unidade C: janeiro 600; fevereiro 660.\n\nQual unidade apresentou o maior crescimento percentual?",
    options: ["Unidade A, 15%.", "Unidade C, 10%.", "Unidade B, 20%.", "Unidades A e C, 15%.", "As três unidades, 15%."],
    correct: "Unidade B, 20%.",
    explanation: "A unidade A cresceu 60/400 = 15%; B cresceu 50/250 = 20%; e C cresceu 60/600 = 10%. O aumento absoluto não basta para comparar crescimento percentual, pois as bases iniciais são diferentes."
  },
  33: {
    stem: "Uma urna contém 4 bolas vermelhas, 5 azuis e 3 verdes. Retira-se uma primeira bola e informa-se apenas que ela não era azul. Sem reposição, qual é a probabilidade de a segunda bola ser azul?",
    options: ["4/11.", "5/11.", "5/12.", "7/11.", "7/12."],
    correct: "5/11.",
    explanation: "Sabendo que a primeira bola não era azul, foi removida uma das sete bolas vermelhas ou verdes. Restam 11 bolas, e as cinco azuis continuam na urna. Logo, a probabilidade pedida é 5/11."
  },
  37: {
    stem: "A negação lógica de “Todos os relatórios foram revisados e aprovados” é:",
    options: ["Existe relatório que não foi revisado e não foi aprovado.", "Todos os relatórios não foram revisados ou não foram aprovados.", "Existe relatório que não foi revisado ou não foi aprovado.", "Existe relatório revisado, mas não aprovado.", "Todos os relatórios foram revisados, mas não aprovados."],
    correct: "Existe relatório que não foi revisado ou não foi aprovado.",
    explanation: "A negação de uma afirmação universal exige ao menos um contraexemplo. Além disso, a negação de “revisado e aprovado” é “não revisado ou não aprovado”. Não é necessário que as duas falhas ocorram simultaneamente."
  },
  38: {
    stem: "Considere a proposição: “Se o lote foi liberado, então a análise foi concluída.” Sabendo que a análise não foi concluída, conclui-se validamente que:",
    options: ["a conclusão da análise será posterior à liberação.", "a ausência de conclusão não informa a situação da liberação.", "a liberação do lote não ocorreu antes da conclusão da análise.", "o lote foi liberado em caráter provisório.", "o lote foi liberado, mas a análise não foi concluída."],
    correct: "a liberação do lote não ocorreu antes da conclusão da análise.",
    explanation: "A proposição tem a forma “se L, então A”. Ao saber que A é falsa, conclui-se que L também é falsa. Esse raciocínio é o modus tollens; não depende de supor uma liberação provisória ou uma conclusão futura."
  }
};

const manualOptionSets = {
  "farmacia-050": {
    options: [
      "manter produtos de aparência ou nomes semelhantes lado a lado, com identificação apenas no sistema informatizado.",
      "atribuir a prevenção de erros à responsabilização individual, com apuração posterior do profissional envolvido.",
      "usar a memória e a experiência dos profissionais como controle principal antes da dispensação.",
      "reduzir rótulos auxiliares e sinais de alerta para simplificar a rotina do estoque.",
      "separar medicamentos semelhantes, usar alertas e adotar conferência independente nos processos de maior risco."
    ], correct: 4
  },
  "farmacia-051": {
    options: [
      "apresentam baixa estabilidade térmica e exigem condições específicas de conservação durante todo o armazenamento.",
      "são destinados predominantemente ao ambiente hospitalar e requerem monitoramento intensivo durante a dispensação.",
      "são medicamentos injetáveis de alto custo, relacionados a terapias de maior complexidade clínica.",
      "têm retenção de receita e exigem controle especial desde a aquisição até a dispensação.",
      "possuem nomes, grafias, pronúncias ou embalagens semelhantes, capazes de favorecer trocas e exigir diferenciação."
    ], correct: 4
  },
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

const farmaciaBatchOneOverrides = {
  "farmacia-001": {
    options: [
      "assegura acesso prioritário a pessoas incluídas em programas públicos conforme classificação de risco territorial.",
      "vincula o uso regular dos serviços à contribuição prévia para a seguridade social ou ao vínculo formal de trabalho.",
      "reserva o atendimento ordinário a cidadãos brasileiros, admitindo estrangeiros nas situações previstas em regulamento local.",
      "garante a todas as pessoas acesso às ações e aos serviços de saúde, sem discriminação indevida.",
      "concentra o acesso público em urgências, surtos e situações classificadas como de maior gravidade clínica."
    ], correct: 3
  },
  "farmacia-002": {
    options: [
      "organização do cuidado a partir dos serviços hospitalares, com encaminhamento posterior às ações ambulatoriais disponíveis.",
      "oferta de tecnologias solicitadas pelo usuário após avaliação de disponibilidade financeira e conveniência administrativa da unidade.",
      "planejamento de prevenção, tratamento e reabilitação por setores autônomos, articulados apenas mediante referência formal.",
      "conjunto articulado e contínuo de ações preventivas e curativas, individuais e coletivas, exigidas para cada caso nos diferentes níveis de complexidade.",
      "prioridade das intervenções curativas dirigidas às condições já instaladas, com ações preventivas conduzidas em programação separada."
    ], correct: 3
  },
  "farmacia-003": {
    options: [
      "universalidade, porque preserva o direito de acesso da população aos serviços existentes na rede pública.",
      "integralidade, porque amplia o conjunto de recursos técnicos disponíveis para todos os usuários do território.",
      "igualdade formal, porque utiliza o mesmo critério de distribuição de recursos para todas as regiões do Município.",
      "descentralização, porque transfere a decisão sobre os recursos para cada unidade de saúde da rede local.",
      "equidade, porque destina mais recursos às regiões com maior vulnerabilidade e piores indicadores de saúde."
    ], correct: 4
  },
  "farmacia-004": {
    options: [
      "coordenação federal direta dos serviços locais, com execução municipal restrita às decisões previamente definidas.",
      "organização da rede por unidades independentes, sem necessidade de regionalização, hierarquização ou integração assistencial.",
      "financiamento dos atendimentos segundo contribuição do usuário, com gratuidade limitada às ações consideradas prioritárias.",
      "gestão centralizada com comando único nacional, preservando aos Estados e Municípios apenas funções operacionais.",
      "descentralização político-administrativa, com direção única em cada esfera de governo e atuação coordenada entre os entes federativos."
    ], correct: 4
  },
  "farmacia-005": {
    options: [
      "órgão colegiado permanente e deliberativo, com participação de governo, prestadores, profissionais de saúde e usuários.",
      "instância judicial destinada a anular decisões de gestores quando houver questionamento sobre políticas públicas de saúde.",
      "colegiado de gestores responsável pela execução dos serviços, com participação social limitada à apresentação de demandas.",
      "reunião periódica convocada pela gestão em situações de crise sanitária para orientar decisões emergenciais do Município.",
      "entidade de apoio à administração, sem atribuição de acompanhar, formular ou controlar políticas públicas de saúde."
    ], correct: 0
  },
  "farmacia-006": {
    options: [
      "a cada dois anos, para acompanhar a execução das metas definidas no plano de saúde vigente.",
      "a cada três anos, com convocação obrigatória pelo gestor de saúde da respectiva esfera de governo.",
      "a cada quatro anos, para avaliar a situação de saúde e propor diretrizes para as políticas públicas.",
      "em convocação anual do Congresso Nacional, após a apresentação dos relatórios financeiros do sistema de saúde.",
      "mensalmente, sempre que houver pauta relacionada ao planejamento das ações de saúde no território."
    ], correct: 2
  },
  "farmacia-007": {
    options: [
      "gestão centralizada pela União, com execução estadual e municipal subordinada às decisões administrativas federais.",
      "participação complementar vedada à iniciativa privada, inclusive nos casos de insuficiência da rede pública instalada.",
      "atendimento integral com prioridade exclusiva para ações curativas e encaminhamento posterior das medidas preventivas.",
      "participação da comunidade na formulação, no acompanhamento e no controle das ações e dos serviços de saúde.",
      "cobrança direta do usuário como mecanismo ordinário para financiar o acesso aos serviços de maior complexidade."
    ], correct: 3
  },
  "farmacia-008": {
    options: [
      "associada a cuidados ou procedimentos de saúde, manifestando-se durante ou após o atendimento em razão da assistência prestada.",
      "identificada apenas em hospitais com terapia intensiva ou centro cirúrgico, por envolver procedimentos de maior complexidade.",
      "presente antes da admissão e reconhecida durante a internação, desde que haja registro de alteração clínica no prontuário.",
      "associada a bactéria multirresistente confirmada em cultura, com ocorrência registrada durante a internação hospitalar.",
      "restrita à internação hospitalar, sem possibilidade de ocorrer em atendimento ambulatorial, domiciliar ou de menor porte."
    ], correct: 0
  },
  "farmacia-009": {
    options: [
      "secar as mãos com papel descartável e aplicar preparação alcoólica antes de retomar o atendimento ao paciente.",
      "higienizar as mãos com água e sabonete, removendo a sujidade visível antes de qualquer outra preparação.",
      "friccionar preparação alcoólica e enxaguar em seguida, para retirar os resíduos orgânicos presentes nas mãos.",
      "aplicar produto antisséptico perfumado, mantendo as luvas como barreira até o fim do procedimento em curso.",
      "calçar luvas limpas sobre as mãos contaminadas e realizar a lavagem somente depois de finalizar o atendimento."
    ], correct: 1
  },
  "farmacia-010": {
    options: [
      "no início do plantão, como preparação suficiente para todos os contatos previstos durante o período de trabalho.",
      "antes de procedimentos invasivos, sem necessidade de higiene após contato com superfícies próximas ao paciente.",
      "após tocar superfícies próximas ao paciente, mesmo sem contato direto com ele, antes de seguir para outra atividade assistencial.",
      "ao término do turno, como medida que substitui as oportunidades de higiene durante a assistência prestada.",
      "na presença de matéria orgânica visível, como único momento em que a higiene das mãos se torna necessária."
    ], correct: 2
  },
  "farmacia-011": {
    options: [
      "orientação escrita padronizada, entregue ao usuário ao fim da consulta para que possa rever as informações em casa.",
      "definição da conduta a partir da prescrição, deixando crenças, condições financeiras e rotina para avaliação posterior.",
      "condução breve e objetiva da conversa, com foco nos dados técnicos necessários para registrar o atendimento realizado.",
      "escuta ativa, linguagem compreensível e confirmação de que o usuário entendeu as orientações acordadas durante o atendimento.",
      "uso de terminologia técnica uniforme, com explicações adicionais reservadas aos usuários que apresentem dúvidas específicas."
    ], correct: 3
  },
  "farmacia-012": {
    options: [
      "devem ser protegidas e compartilhadas nas hipóteses autorizadas ou justificadas por necessidade assistencial e dever legal.",
      "permanecem sob guarda exclusiva do profissional que realizou o atendimento, sem integração aos registros institucionais do serviço.",
      "podem ser apresentadas em relato de caso educativo, desde que o nome do paciente seja abreviado na publicação.",
      "podem circular entre os profissionais da unidade porque o atendimento ocorreu em serviço integrante do SUS.",
      "perdem o caráter sigiloso quando são registradas em prontuário eletrônico acessado pela equipe de saúde responsável."
    ], correct: 0
  },
  "farmacia-013": {
    options: [
      "priorizar preparações manipuladas para ampliar a individualização terapêutica, mesmo quando houver opção industrializada adequada.",
      "concentrar as compras na esfera federal para padronizar a organização da assistência em todo o território.",
      "estimular a automedicação como estratégia de acesso, acompanhada de materiais educativos sobre uso seguro dos produtos.",
      "garantir segurança, eficácia e qualidade, promover o uso racional e assegurar acesso da população aos medicamentos essenciais.",
      "organizar a assistência farmacêutica como atividade de abastecimento, separada das demais políticas de saúde."
    ], correct: 3
  },
  "farmacia-014": {
    options: [
      "integram listas prioritárias para doenças raras, com seleção baseada na complexidade terapêutica dos tratamentos disponíveis.",
      "dispensam demonstração de eficácia e segurança quando já figuram em listas elaboradas por órgãos públicos de saúde.",
      "satisfazem as necessidades prioritárias de saúde da população e devem estar disponíveis em formas, quantidades e condições adequadas.",
      "são necessariamente tecnologias novas e patenteadas, selecionadas para atualizar a oferta terapêutica do sistema.",
      "são definidos pelo menor custo de aquisição, desde que a apresentação possa ser distribuída pela rede pública local."
    ], correct: 2
  },
  "farmacia-015": {
    options: [
      "pela incorporação das apresentações mais recentes, priorizando inovações disponíveis no mercado farmacêutico nacional.",
      "pela linha comercial do fornecedor vencedor da última licitação, para preservar padronização e escala de aquisição.",
      "por decisão financeira isolada, priorizando produtos com menor impacto imediato no orçamento anual da administração.",
      "por equipe ou comissão multiprofissional, com critérios epidemiológicos, clínicos, de eficácia, segurança, qualidade e custo-efetividade.",
      "pela publicidade recebida pelos produtos e pelo reconhecimento de suas marcas entre profissionais e usuários."
    ], correct: 3
  },
  "farmacia-016": {
    options: [
      "escolher a alternativa terapêutica mais segura para cada usuário, após avaliação clínica e definição individual da farmacoterapia.",
      "redigir o edital de licitação e estabelecer requisitos jurídicos para contratação dos fornecedores de medicamentos do Município.",
      "dispensar o medicamento e orientar o usuário sobre posologia, conservação e medidas de acompanhamento do tratamento.",
      "estimar quantidades para período definido, compatibilizando necessidades, estoques, consumo, recursos e capacidade de armazenamento.",
      "conferir os produtos recebidos, registrar divergências e providenciar as medidas relacionadas à aceitação da entrega."
    ], correct: 3
  },
  "farmacia-017": {
    options: [
      "indicar a marca comercial como referência principal, complementando-a com especificação técnica quando houver mais de um fornecedor.",
      "aceitar quantitativo diverso do contratado mediante compromisso formal de regularização do saldo na entrega subsequente.",
      "especificar adequadamente o objeto e considerar qualidade, regularidade sanitária, prazo, condições de entrega e custo total, além do preço.",
      "aceitar produto sem registro sanitário quando a documentação comercial demonstrar custo final inferior ao das opções regularizadas.",
      "concentrar a análise no procedimento licitatório, utilizando o consumo histórico apenas como referência complementar de planejamento."
    ], correct: 2
  },
  "farmacia-018": {
    options: [
      "preservar identidade, integridade, qualidade e rastreabilidade dos produtos durante sua permanência no estoque.",
      "substituir o registro de lote e validade por inventários periódicos, mantendo apenas o controle quantitativo de entrada e saída.",
      "ampliar o aproveitamento do espaço físico com contato direto das embalagens ao piso e às paredes do almoxarifado.",
      "adotar uma faixa única de temperatura para simplificar o monitoramento operacional de todos os produtos armazenados.",
      "priorizar prevenção de furtos e avarias físicas, deixando o controle de validade para a etapa de dispensação ao usuário."
    ], correct: 0
  },
  "farmacia-019": {
    options: [
      "suprimento das unidades requisitantes em quantidades, qualidade e tempo adequados, com controle documental e logístico.",
      "administração do medicamento ao paciente, com verificação da dose, via, horário, registro e resposta clínica observada.",
      "prescrição farmacêutica individual, com definição da farmacoterapia após avaliação da necessidade e do risco do usuário.",
      "segregação e descarte de produtos vencidos, avariados ou reprovados nas inspeções realizadas no almoxarifado.",
      "seleção de medicamentos para a lista municipal, realizada antes da programação e da aquisição dos itens necessários."
    ], correct: 0
  },
  "farmacia-020": {
    options: [
      "ato de fornecimento baseado na disponibilidade do produto, com análise da prescrição restrita às situações de dúvida administrativa.",
      "etapa administrativa de entrega e registro, com orientação ao usuário prevista apenas para produtos de maior vigilância sanitária.",
      "transferência física do medicamento com conferência de quantidade e validade, deixando informações de uso para a consulta posterior.",
      "etapa logística integrada ao controle de estoque, com aconselhamento reservado a tratamentos novos ou considerados de maior risco.",
      "ato profissional de fornecimento acompanhado da análise pertinente e de orientações necessárias ao uso seguro e efetivo."
    ], correct: 4
  }
};

const administracaoBatchOneOverrides = {
  "administracao-publica-001": {
    options: [
      "no sentido subjetivo, corresponde às entidades da administração indireta, excluídos os órgãos e os agentes públicos.",
      "nos dois sentidos, designa o conjunto de agentes públicos que exercem atividades estatais em nome da coletividade.",
      "no sentido objetivo, reúne as funções legislativa e jurisdicional exercidas pelos Poderes, afastada a atividade administrativa.",
      "no sentido objetivo, designa os órgãos do Poder Executivo responsáveis pela prática direta dos atos administrativos.",
      "no sentido subjetivo, designa órgãos, agentes e entidades; no objetivo, a atividade administrativa por eles exercida."
    ], correct: 4
  },
  "administracao-publica-002": {
    options: [
      "pode agir quando não houver proibição expressa, desde que a medida apresente resultado mais eficiente para a Administração.",
      "precisa de autorização normativa apenas quando o procedimento gerar despesa pública ou produzir efeito patrimonial direto.",
      "somente pode agir quando houver fundamento jurídico que autorize sua conduta, inclusive se entender que outra medida seria mais eficiente.",
      "pode substituir a exigência legal por justificativa técnica baseada em sua convicção sobre o interesse público envolvido.",
      "pode adotar o procedimento após obter concordância verbal da chefia e dos servidores diretamente envolvidos na execução."
    ], correct: 2
  },
  "administracao-publica-003": {
    options: [
      "impessoalidade, pois a campanha institucional não pode servir à promoção pessoal de autoridades ou agentes públicos.",
      "especialidade, pois a campanha deveria ser conduzida exclusivamente pelo órgão técnico responsável pela informação divulgada.",
      "autotutela, pois a Administração deve rever seus atos apenas depois de provocação formal de outro Poder da República.",
      "continuidade, pois a divulgação de informações públicas não pode ser interrompida durante a transição entre gestões municipais.",
      "eficiência, pois a campanha deveria utilizar recursos de publicidade somente para ampliar o alcance da mensagem à população."
    ], correct: 0
  },
  "administracao-publica-004": {
    options: [
      "a publicidade exige divulgação de todos os documentos administrativos, inclusive daqueles protegidos por sigilo constitucional ou legal.",
      "a Administração pode definir sigilo para atos de sua conveniência, desde que a decisão seja registrada no processo correspondente.",
      "a divulgação oficial torna eficaz todo ato administrativo, inclusive quando houver vício de competência, forma ou finalidade pública.",
      "a transparência é a regra, mas o ordenamento admite sigilo em hipóteses constitucional e legalmente justificadas.",
      "a publicidade alcança os atos do Poder Executivo federal, enquanto Estados e Municípios seguem regime próprio de divulgação."
    ], correct: 3
  },
  "administracao-publica-005": {
    options: [
      "priorização da economia financeira, com redução de custos que comprometa a qualidade e a continuidade do serviço prestado.",
      "substituição dos controles de legalidade por metas de produtividade definidas pela chefia responsável pelo setor administrativo.",
      "atuação com qualidade, produtividade e bom uso dos recursos, respeitados os demais princípios jurídicos.",
      "atendimento prioritário aos usuários que gerem menor custo administrativo, para ampliar a produtividade global da unidade.",
      "obtenção de resultados mensuráveis pela Administração por meios que se afastem dos limites jurídicos aplicáveis à atuação estatal."
    ], correct: 2
  },
  "administracao-publica-006": {
    options: [
      "o parentesco afasta o conflito de interesses quando o servidor não recebe vantagem econômica direta pela informação utilizada.",
      "utiliza a posição pública para produzir favorecimento privado e rompe a imparcialidade esperada do agente.",
      "o dever ético surge apenas se a conduta estiver prevista como crime, improbidade ou infração disciplinar formalmente tipificada.",
      "a ética funcional se limita ao cumprimento da jornada de trabalho, das ordens superiores e dos procedimentos do setor.",
      "a informação produzida no exercício do cargo pode ser utilizada pelo servidor após ele avaliar a conveniência para seus familiares."
    ], correct: 1
  },
  "administracao-publica-007": {
    options: [
      "exclusiva do agente que praticou o ato, cabendo à pessoa jurídica apenas acompanhar a apuração administrativa posterior.",
      "objetiva, cabendo à vítima demonstrar dano e nexo causal, assegurado o direito de regresso contra o agente nos casos de dolo ou culpa.",
      "afastada quando o agente ocupa cargo efetivo, pois a estabilidade transfere ao servidor a responsabilidade integral pelo dano.",
      "subjetiva, dependendo sempre de prova de dolo ou culpa do agente para que a vítima obtenha indenização da pessoa jurídica.",
      "penal por sua natureza, ficando a reparação civil condicionada à existência de condenação criminal definitiva contra o agente."
    ], correct: 1
  },
  "administracao-publica-008": {
    options: [
      "podem cumular-se e são independentes, embora decisões sobre fato ou autoria possam produzir repercussões legalmente previstas.",
      "não podem coexistir, devendo a Administração aguardar a definição da esfera penal antes de instaurar procedimento disciplinar.",
      "dependem de condenação penal prévia, porque a definição judicial sobre o fato impede apuração autônoma pelas demais instâncias.",
      "excluem o dever de reparar o dano, pois a aplicação de sanção administrativa já afasta a necessidade de indenização civil.",
      "limitam-se à responsabilidade administrativa, reservando as demais consequências aos fatos praticados fora do exercício do cargo."
    ], correct: 0
  },
  "administracao-publica-009": {
    options: [
      "Prefeituras, câmaras municipais, empresas públicas e sociedades de economia mista integrantes da estrutura local.",
      "Ministérios, secretarias, autarquias e departamentos administrativos responsáveis por atividades internas de cada Poder.",
      "Órgãos públicos, concessionárias de serviço público, cartórios extrajudiciais e fundações privadas conveniadas ao Estado.",
      "Autarquias, fundações públicas, empresas públicas e sociedades de economia mista, todas integrantes da administração indireta.",
      "Secretarias municipais, departamentos técnicos, fundações privadas comuns e conselhos de políticas públicas instituídos por lei."
    ], correct: 3
  },
  "administracao-publica-010": {
    options: [
      "deixa de integrar a Federação e passa a exercer competências próprias definidas exclusivamente pela sua Lei Orgânica local.",
      "possui soberania equivalente à da República Federativa do Brasil, podendo celebrar compromissos internacionais de interesse municipal.",
      "pode afastar leis federais e estaduais quando entender que elas não atendem às necessidades administrativas do seu território.",
      "exerce atribuições delegadas pela União, com autonomia limitada à execução de programas e repasses federais vigentes.",
      "possui capacidades de auto-organização, autogoverno, autoadministração e autolegislação nos limites constitucionais."
    ], correct: 4
  },
  "administracao-publica-011": {
    options: [
      "a erradicação da pobreza e da marginalização, prevista como objetivo fundamental da República no texto constitucional.",
      "a prevalência dos direitos humanos, adotada como princípio das relações internacionais da República Federativa do Brasil.",
      "a defesa da paz, indicada como princípio para a atuação do Brasil perante os demais Estados e organismos internacionais.",
      "o pluralismo político, incluído entre os fundamentos que estruturam a República Federativa do Brasil no texto constitucional.",
      "a garantia do desenvolvimento nacional, formulada como objetivo fundamental a ser promovido pelo Estado brasileiro."
    ], correct: 3
  },
  "administracao-publica-012": {
    options: [
      "abolir a separação dos Poderes para concentrar a direção política e administrativa em órgão único de coordenação nacional.",
      "conceder soberania aos Municípios para que possam estabelecer relações diretas com outros Estados e organismos internacionais.",
      "adotar religião oficial, garantindo ao mesmo tempo liberdade de culto às demais crenças reconhecidas pela legislação.",
      "restringir a livre iniciativa nas atividades econômicas consideradas estratégicas para o desenvolvimento nacional do País.",
      "erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais, como objetivo fundamental da República."
    ], correct: 4
  },
  "administracao-publica-013": {
    options: [
      "União, Estados e Municípios, como entes federativos que atuam de modo integrado na organização político-administrativa brasileira.",
      "Presidência, Congresso e Supremo Tribunal Federal, estruturados em hierarquia para coordenar as funções do Estado brasileiro.",
      "Legislativo, Tribunal de Contas e Executivo, com competências próprias e coordenação exercida pelo Poder Judiciário nacional.",
      "Legislativo, Executivo e Judiciário, independentes e harmônicos entre si, com competências constitucionais próprias.",
      "Executivo, Ministério Público e Judiciário, atuando em conjunto na formulação, fiscalização e execução das políticas públicas."
    ], correct: 3
  },
  "administracao-publica-014": {
    options: [
      "brasileiros natos possuem igualdade plena perante a lei, enquanto os demais dependem das condições previstas em tratados internacionais.",
      "estrangeiros são alcançados pelos direitos fundamentais apenas depois de obter residência permanente ou naturalização brasileira.",
      "todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se a brasileiros e estrangeiros residentes os direitos previstos na Constituição.",
      "a igualdade vincula principalmente o Poder Executivo, cabendo aos demais Poderes estabelecer critérios próprios para situações semelhantes.",
      "a igualdade impede qualquer diferenciação jurídica, inclusive quando a Constituição admite ações destinadas a corrigir desigualdades concretas."
    ], correct: 2
  },
  "administracao-publica-015": {
    options: [
      "a autoridade competente pode criar obrigações por ordem verbal quando a medida for necessária à continuidade do serviço público.",
      "a autonomia privada permite afastar exigências legais em relações particulares que não produzam efeito direto sobre terceiros.",
      "servidores públicos submetem-se integralmente à lei, enquanto particulares seguem apenas as restrições previstas em regulamentos administrativos.",
      "decretos podem substituir leis quando detalham procedimentos administrativos e recebem aprovação expressa da autoridade competente.",
      "ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei, conforme a garantia constitucional de legalidade."
    ], correct: 4
  },
  "administracao-publica-016": {
    options: [
      "associações lícitas podem adotar organização paramilitar quando a finalidade declarada for proteção interna de seus filiados.",
      "o Estado pode interferir no funcionamento das associações sempre que houver interesse administrativo na atividade exercida pelo grupo.",
      "a criação de associações depende de autorização prévia do Poder Executivo, seguida de registro perante a autoridade competente.",
      "a pessoa que aderiu regularmente à associação deve permanecer vinculada até a deliberação formal dos demais associados.",
      "as associações só poderão ser compulsoriamente dissolvidas por decisão judicial transitada em julgado, nos casos previstos pela Constituição."
    ], correct: 4
  },
  "administracao-publica-017": {
    options: [
      "a função social incide exclusivamente sobre imóveis urbanos, conforme a disciplina constitucional aplicável à política urbana municipal.",
      "a desapropriação decorre da supremacia do interesse público e dispensa fundamento constitucional ou legal específico para sua realização.",
      "a propriedade atenderá a sua função social, em conformidade com as limitações e finalidades previstas no ordenamento jurídico.",
      "o exercício da propriedade não pode sofrer condicionamentos administrativos quando o bem estiver regularmente registrado em nome do titular.",
      "o interesse coletivo não pode limitar o uso da propriedade, devendo o Poder Público atuar somente mediante acordo prévio com o proprietário."
    ], correct: 2
  },
  "administracao-publica-018": {
    options: [
      "as informações requeridas por estrangeiros, salvo quando houver reciprocidade prevista em tratado internacional celebrado pelo Brasil.",
      "as informações produzidas pelo Poder Executivo, que permanecem sujeitas a divulgação apenas após aprovação pelo Poder Legislativo.",
      "as informações capazes de revelar erro administrativo, para preservar a estabilidade e a continuidade dos serviços públicos envolvidos.",
      "aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado, conforme as hipóteses constitucionalmente protegidas.",
      "as informações relativas a despesas públicas, que dependem de autorização da autoridade responsável pelo respectivo órgão."
    ], correct: 3
  },
  "administracao-publica-019": {
    options: [
      "direito líquido e certo ameaçado ou violado por ilegalidade ou abuso de poder, quando não amparado por habeas corpus ou habeas data.",
      "acesso ou retificação de dados pessoais mantidos em registros governamentais ou em bancos de dados de caráter público.",
      "patrimônio público, moralidade administrativa, meio ambiente ou patrimônio cultural lesados por ato praticado por agente público.",
      "falta de norma regulamentadora que inviabilize o exercício de direito constitucional ou prerrogativa ligada à cidadania.",
      "liberdade de locomoção ameaçada ou restringida por ilegalidade ou abuso de poder praticado por autoridade pública."
    ], correct: 0
  },
  "administracao-publica-020": {
    options: [
      "invalidar ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente ou ao patrimônio cultural protegido.",
      "proteger liberdade de locomoção ameaçada ou restringida por ilegalidade ou abuso de poder praticado por autoridade pública.",
      "proteger direito líquido e certo demonstrado por prova pré-constituída quando não couber habeas corpus ou habeas data.",
      "suprir falta de norma regulamentadora que inviabilize direito constitucional ou prerrogativa ligada à cidadania.",
      "assegurar conhecimento ou retificação de dados do impetrante mantidos em registros governamentais ou de caráter público."
    ], correct: 4
  },
  "administracao-publica-021": {
    options: [
      "a prisão civil por dívida comum, admitida como mecanismo de proteção ao cumprimento das obrigações patrimoniais privadas.",
      "a censura prévia, prevista como controle estatal para impedir divulgação de conteúdo contrário ao interesse coletivo.",
      "a saúde, incluída entre os direitos sociais assegurados pelo art. 6º da Constituição Federal e pelas normas de proteção social.",
      "o anonimato, reconhecido como forma de proteger a livre manifestação de pensamento em espaços públicos e digitais.",
      "a intervenção federal permanente, prevista como garantia de proteção social em situações de desigualdade econômica regional."
    ], correct: 2
  },
  "administracao-publica-022": {
    options: [
      "o estrangeiro que obtenha naturalização ordinária depois de cumprir o período de residência exigido pela legislação brasileira.",
      "o nascido no estrangeiro de pai ou mãe brasileira que seja registrado em repartição brasileira competente.",
      "o nascido no Brasil de pais estrangeiros que estejam no País em missão oficial de seu Estado de origem.",
      "o cidadão originário de país de língua portuguesa que resida no Brasil e requeira igualdade de direitos políticos.",
      "o estrangeiro casado com pessoa brasileira, desde que mantenha residência permanente e vínculo familiar reconhecido no território nacional."
    ], correct: 1
  },
  "administracao-publica-023": {
    options: [
      "analfabetos, maiores de 70 anos e maiores de 16 e menores de 18 anos, nas condições previstas pela Constituição Federal.",
      "conscritos durante o serviço militar obrigatório, aos quais é assegurado alistamento e voto facultativos durante a incorporação.",
      "estrangeiros residentes no Brasil, desde que possuam domicílio eleitoral reconhecido pela Justiça Eleitoral competente.",
      "todos os maiores de 18 anos, salvo aqueles que apresentem impedimento temporário justificado perante a autoridade eleitoral.",
      "somente maiores de 70 anos, com exclusão dos analfabetos e dos jovens entre 16 e 18 anos do exercício facultativo."
    ], correct: 0
  },
  "administracao-publica-024": {
    options: [
      "podem adotar organização paramilitar voltada à segurança interna de seus filiados, desde que registrada perante a Justiça Eleitoral.",
      "ficam dispensados de prestar contas à Justiça Eleitoral quando não recebem recursos provenientes do Fundo Partidário.",
      "podem receber recursos de governo estrangeiro após autorização do Congresso Nacional e registro da transferência financeira.",
      "têm criação, fusão, incorporação e extinção livres, respeitados soberania nacional, regime democrático, pluripartidarismo e direitos fundamentais.",
      "devem possuir caráter estadual, sendo facultativa a organização de diretório nacional para participação nas eleições gerais."
    ], correct: 3
  },
  "administracao-publica-025": {
    options: [
      "União, Estados e Territórios, com Municípios organizados como divisões administrativas internas de cada Estado-membro.",
      "somente União e Estados, cabendo aos Municípios executar competências locais delegadas pelos respectivos governos estaduais.",
      "União e Municípios, com Distrito Federal submetido à administração direta da União em matérias de interesse nacional.",
      "Estados, Municípios e comarcas, todos dotados de autonomia política para organizar os serviços públicos de sua competência.",
      "União, Estados, Distrito Federal e Municípios, todos autônomos nos termos da Constituição e integrantes da Federação brasileira."
    ], correct: 4
  },
  "administracao-publica-026": {
    options: [
      "editada unilateralmente pelo prefeito, com posterior apreciação da Câmara Municipal para ratificação das regras de organização local.",
      "votada em dois turnos, com interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal.",
      "submetida à sanção do governador, porque a Lei Orgânica deve respeitar a estrutura constitucional estabelecida pelo Estado-membro.",
      "aprovada pelo Congresso Nacional, após proposta da Câmara Municipal e manifestação do Poder Executivo local sobre o texto final.",
      "aprovada por maioria simples em turno único, com promulgação pelo prefeito e divulgação oficial no Diário do Município."
    ], correct: 1
  },
  "administracao-publica-027": {
    options: [
      "declarar guerra e celebrar a paz, mediante autorização da Câmara Municipal e coordenação com os demais entes da Federação.",
      "legislar sobre assuntos de interesse local e suplementar a legislação federal e estadual no que couber, observados os limites constitucionais.",
      "legislar privativamente sobre direito penal, processual e eleitoral para adequar as normas às necessidades locais do Município.",
      "manter relações diretas com Estados estrangeiros para celebrar acordos administrativos e comerciais de interesse do território municipal.",
      "emitir moeda de circulação municipal, observadas as diretrizes de política econômica definidas pela União e pelo Banco Central."
    ], correct: 1
  },
  "administracao-publica-028": {
    options: [
      "legitimidade, pessoalidade, moralidade, sigilo e economicidade, aplicáveis à administração direta e indireta de cada ente federativo.",
      "legalidade, informalidade, pessoalidade, publicidade e eficácia, como parâmetros de atuação administrativa previstos no caput do art. 37.",
      "proporcionalidade, publicidade, supremacia, eficiência e especialidade, princípios gerais que substituem a enumeração constitucional expressa.",
      "legalidade, hierarquia, autotutela, continuidade e eficiência, valores que estruturam a atuação dos órgãos e dos agentes públicos.",
      "legalidade, impessoalidade, moralidade, publicidade e eficiência, princípios expressos que vinculam a Administração Pública."
    ], correct: 4
  },
  "administracao-publica-029": {
    options: [
      "as nomeações para qualquer emprego de empresa pública, sem distinção entre funções permanentes e cargos de confiança da entidade.",
      "as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração, destinado às atribuições de direção, chefia e assessoramento.",
      "as nomeações de parentes de agentes políticos, desde que haja vínculo de confiança e compatibilidade com a natureza da função exercida.",
      "todas as contratações realizadas pelo prefeito, desde que estejam previstas no orçamento e atendam à necessidade temporária do serviço.",
      "as funções permanentes de natureza técnica, quando forem preenchidas por profissionais com experiência comprovada na área de atuação."
    ], correct: 1
  },
  "administracao-publica-030": {
    options: [
      "definido livremente após a homologação, conforme a disponibilidade financeira e a necessidade de provimento da Administração.",
      "de até dois anos, prorrogável uma vez por igual período, conforme a previsão estabelecida no edital do certame.",
      "obrigatoriamente de quatro anos, considerando o prazo máximo de gestão e a continuidade do serviço público prestado.",
      "de um ano, sem possibilidade de prorrogação, para garantir renovação periódica dos candidatos inscritos no certame público.",
      "ilimitado até o preenchimento de todas as vagas, salvo decisão administrativa fundamentada que encerre a validade do concurso."
    ], correct: 1
  }
};

const administracaoBatchTwoOverrides = {
  "administracao-publica-031": { options: [
    "funções de confiança e cargos em comissão dependem de concurso específico, seguido de livre designação pela autoridade competente.",
    "cargos em comissão são ocupados preferencialmente por pessoas sem vínculo efetivo, vedada reserva a servidores de carreira.",
    "funções de confiança podem ser atribuídas a particulares, enquanto cargos em comissão são exclusivos de servidores efetivos.",
    "funções de confiança são exclusivas de servidores efetivos, e ambas as figuras se destinam a direção, chefia e assessoramento.",
    "funções de confiança e cargos em comissão podem abranger atividades técnicas permanentes, mediante motivação da autoridade competente."
  ], correct: 3 },
  "administracao-publica-032": { options: [
    "Executivo e Ministério Público, responsáveis pelas funções políticas e administrativas previstas na Lei Orgânica municipal.",
    "Executivo, Judiciário e Ministério Público, organizados como Poderes locais independentes e harmônicos entre si.",
    "Legislativo, Executivo e Judiciário, com atribuições próprias previstas para a estrutura institucional do Município.",
    "Legislativo e Executivo, independentes e harmônicos entre si, conforme a Lei Orgânica do Município.",
    "Prefeitura, Câmara e Tribunal de Contas municipal, com competências próprias para deliberar e executar atos locais."
  ], correct: 3 },
  "administracao-publica-033": { options: [
    "13 vereadores, considerando o limite demográfico adotado pela Lei Orgânica para a composição da Câmara Municipal.",
    "7 vereadores, número estabelecido para a representação legislativa municipal na redação vigente da Lei Orgânica.",
    "9 vereadores, conforme a redação vigente do art. 13 da Lei Orgânica de Massaranduba.",
    "11 vereadores, quantidade prevista para a composição ordinária da Câmara Municipal em cada legislatura.",
    "8 vereadores, com distribuição de mandatos definida pela Justiça Eleitoral para a representação local."
  ], correct: 2 },
  "administracao-publica-034": { options: [
    "voto favorável de dois terços dos membros da Câmara em dois turnos, observado interstício mínimo de dez dias entre as votações.",
    "maioria absoluta dos membros da Câmara, em dois turnos consecutivos realizados na mesma sessão legislativa.",
    "unanimidade dos vereadores presentes, seguida de sanção do prefeito e publicação do texto aprovado em diário oficial.",
    "voto favorável de três quintos dos membros da Câmara, em três turnos de discussão e deliberação legislativa.",
    "maioria simples dos vereadores presentes, em turno único convocado especificamente para votar a proposta de emenda."
  ], correct: 0 },
  "administracao-publica-035": { options: [
    "3% dos moradores maiores de 16 anos, identificados conforme cadastro municipal de participação popular e eleitoral.",
    "5% do eleitorado do Município, devidamente identificado na forma da Lei Orgânica, com apresentação do projeto à Câmara Municipal.",
    "1% da população total do Município, incluídos residentes sem inscrição eleitoral e menores de idade interessados.",
    "2% dos servidores municipais em exercício, representados por entidade sindical ou associação funcional regularmente constituída.",
    "10% dos vereadores em exercício, mediante subscrição formal acompanhada de justificativa sobre a matéria legislativa."
  ], correct: 1 },
  "administracao-publica-036": { options: [
    "toda pessoa contratada por empresa terceirizada para prestar serviço contínuo ou eventual em repartição municipal.",
    "a pessoa legalmente investida em cargo público, após nomeação e posse segundo as exigências previstas no Estatuto municipal.",
    "a pessoa designada para serviço eventual ao Município, vinculada a contratação temporária ou a parceria administrativa específica.",
    "exclusivamente o agente político eleito para mandato municipal, durante o período de exercício de suas atribuições públicas.",
    "o ocupante de cargo em comissão, por exercer função de confiança e livre nomeação no âmbito administrativo."
  ], correct: 1 },
  "administracao-publica-037": { options: [
    "nomeação, como ato inicial de provimento em cargo público previsto na relação estatutária aplicável aos servidores.",
    "readaptação, quando há investidura em cargo compatível com limitação física ou mental verificada em inspeção médica.",
    "transferência, como forma de provimento enumerada no art. 13 do Estatuto dos Servidores de Massaranduba.",
    "reversão, correspondente ao retorno à atividade nas hipóteses estatutariamente previstas para servidor aposentado.",
    "recondução, associada ao retorno do servidor estável nas situações previstas pela norma estatutária municipal."
  ], correct: 2 },
  "administracao-publica-038": { options: [
    "a posse, momento em que o nomeado aceita formalmente as atribuições, os deveres e as responsabilidades do cargo público.",
    "o primeiro pagamento, quando o servidor passa a integrar a folha financeira do Município e recebe a remuneração inicial.",
    "o término do estágio probatório, após confirmação da aptidão funcional e avaliação do desempenho no cargo ocupado.",
    "a inscrição no concurso, mediante apresentação de documentos e confirmação de participação no processo seletivo público.",
    "a homologação do resultado, ato que encerra o concurso e autoriza posteriormente as nomeações dos candidatos aprovados."
  ], correct: 0 },
  "administracao-publica-039": { options: [
    "45 dias da publicação, automaticamente prorrogados por igual período quando o nomeado ainda não tiver apresentado documentos completos.",
    "30 dias da nomeação, sem prorrogação, salvo decisão administrativa excepcional fundamentada pela autoridade competente.",
    "15 dias da publicação do ato de nomeação, permitida prorrogação por igual prazo a requerimento do nomeado.",
    "5 dias da homologação do concurso, sem prorrogação, para assegurar que a nomeação ocorra no início do exercício financeiro.",
    "10 dias da convocação, prorrogáveis por 5 dias, mediante simples comunicação do candidato à unidade de recursos humanos."
  ], correct: 2 },
  "administracao-publica-040": { options: [
    "2 dias da posse, contados em dias úteis, para que o servidor compareça à unidade e inicie suas atividades funcionais.",
    "5 dias da posse, contados da investidura formal no cargo, salvo situação de exercício em outra localidade prevista no Estatuto.",
    "15 dias da posse, prazo aplicável à apresentação inicial do servidor e à definição da unidade de lotação correspondente.",
    "3 dias da nomeação, antes da posse, para que o candidato indique à Administração a intenção de entrar em exercício.",
    "10 dias da convocação, prorrogáveis por igual período quando o servidor apresentar justificativa aceita pela chefia imediata."
  ], correct: 1 },
  "administracao-publica-041": { options: [
    "a investidura do servidor em cargo de atribuições e responsabilidades compatíveis com limitação física ou mental verificada em inspeção médica.",
    "o retorno do aposentado por invalidez à atividade, após declaração de que não subsistem os motivos da aposentadoria concedida.",
    "a reinvestidura do servidor no cargo anteriormente ocupado, depois de invalidada sua demissão por decisão administrativa ou judicial.",
    "o retorno do servidor estável ao cargo anteriormente ocupado, em razão de inabilitação em estágio probatório de outro cargo.",
    "a promoção automática do servidor para cargo de maior vencimento, após reconhecimento de limitação que impeça atribuições anteriores."
  ], correct: 0 },
  "administracao-publica-042": { options: [
    "o retorno à atividade do servidor aposentado por invalidez quando declarados insubsistentes os motivos da aposentadoria.",
    "o retorno ao cargo anterior por reprovação em estágio probatório de outro cargo, assegurada ao servidor estável a recondução.",
    "a disponibilidade remunerada decorrente da extinção do cargo, com aproveitamento posterior em função compatível na administração.",
    "o deslocamento do servidor entre repartições, com alteração de lotação e preservação das atribuições originalmente previstas.",
    "a volta do servidor demitido após invalidação da demissão, com ressarcimento das vantagens devidas no período afastado."
  ], correct: 0 },
  "administracao-publica-043": { options: [
    "aquisição de nova escolaridade reconhecida pela Administração, com retorno do servidor ao cargo anteriormente ocupado na carreira.",
    "licença para interesse particular, com possibilidade de reassunção do cargo após o término do período autorizado pela chefia.",
    "promoção por merecimento, seguida de retorno à classe anterior quando houver necessidade de reorganização do quadro funcional.",
    "inabilitação em estágio probatório relativo a outro cargo, assegurado retorno do servidor estável à situação funcional anterior.",
    "aposentadoria voluntária do servidor, seguida de retorno à atividade quando houver interesse da Administração e vaga disponível."
  ], correct: 3 },
  "administracao-publica-044": { options: [
    "suspensão, aplicada nas hipóteses previstas para infrações de gravidade superior à advertência e inferior à demissão.",
    "destituição de função de confiança, aplicável ao servidor que deixa de atender aos deveres ligados à função exercida.",
    "advertência verbal ou escrita, utilizada para faltas de menor gravidade definidas no regime disciplinar estatutário.",
    "demissão, aplicada nas situações mais graves previstas no Estatuto dos Servidores Públicos Municipais de Massaranduba.",
    "redução definitiva de vencimento como penalidade autônoma, aplicada após processo administrativo disciplinar regularmente instaurado."
  ], correct: 4 },
  "administracao-publica-045": { options: [
    "15 dias, limite aplicável à suspensão disciplinar ordinária prevista para infrações de menor gravidade no Estatuto municipal.",
    "20 dias, prazo máximo de afastamento disciplinar adotado para servidores do quadro efetivo municipal.",
    "45 dias, limite definido para suspensão aplicada após reincidência em falta funcional que não imponha demissão do servidor.",
    "30 dias, período máximo de suspensão estabelecido para as infrações que exigem afastamento temporário do exercício funcional.",
    "60 dias, limite máximo de suspensão disciplinar nas hipóteses previstas no Estatuto de Massaranduba."
  ], correct: 4 },
  "administracao-publica-046": { options: [
    "o quadro de cargos, os planos de carreira e a remuneração dos servidores do quadro efetivo do Poder Executivo de Massaranduba.",
    "as contratações terceirizadas do Município, abrangendo seleção de prestadores, fiscalização contratual e substituição de postos de trabalho.",
    "o regime disciplinar dos vereadores, incluindo deveres parlamentares, sanções por quebra de decoro e regras de funcionamento da Câmara.",
    "o regime eleitoral municipal, disciplinando candidaturas, propaganda, votação e apuração dos resultados das eleições locais.",
    "a criação do Poder Judiciário municipal, com definição de varas, competências e formas de provimento dos respectivos cargos."
  ], correct: 0 },
  "administracao-publica-047": { options: [
    "julgar crimes praticados por servidores, com competência para aplicar penas administrativas e encaminhar decisões ao Poder Judiciário.",
    "substituir integralmente o setor de recursos humanos na gestão de folha, registros funcionais e rotinas de admissão de pessoal.",
    "nomear livremente servidores para cargos efetivos, observando necessidade administrativa e disponibilidade de vagas no quadro municipal.",
    "desenvolver e acompanhar a ascensão profissional dos servidores efetivos do Poder Executivo municipal, conforme as regras do plano de carreira.",
    "elaborar a Lei Orgânica do Município, propondo alterações na estrutura dos Poderes e na organização político-administrativa local."
  ], correct: 3 },
  "administracao-publica-048": { options: [
    "sem relação com requisitos ou atribuições dos cargos, ficando a distribuição funcional sujeita à decisão de cada chefia imediata.",
    "exclusivamente por decisões verbais de cada chefia, conforme a necessidade de serviço identificada em cada unidade administrativa.",
    "em classes, com definição legal de elementos como quantidade de cargos, denominação e padrões referenciais de vencimento.",
    "como cargos políticos eletivos, com mandatos definidos conforme a estrutura administrativa prevista para o Poder Executivo municipal.",
    "sem denominação ou referência remuneratória definida, para permitir adequação anual conforme a disponibilidade financeira do Município."
  ], correct: 2 },
  "administracao-publica-049": { options: [
    "organização do quadro efetivo e do desenvolvimento funcional de servidores do Poder Executivo de Massaranduba.",
    "estruturação da carreira de magistrados estaduais, com regras de promoção, vencimentos e garantias funcionais no âmbito do Judiciário.",
    "regulamentação de associações privadas, incluindo requisitos de constituição, funcionamento e fiscalização pelo Poder Público municipal.",
    "organização dos partidos políticos, com definição de regras sobre filiação, prestação de contas e participação eleitoral no Município.",
    "definição das penas aplicáveis a crimes federais, com estabelecimento de tipos penais e procedimentos processuais correspondentes."
  ], correct: 0 },
  "administracao-publica-050": { options: [
    "a LC nº 190/2023 substituiu integralmente o Estatuto e passou a reunir deveres, proibições e sanções disciplinares dos servidores.",
    "as duas leis possuem o mesmo objeto e diferem apenas quanto aos valores remuneratórios atualizados em seus respectivos anexos.",
    "a LC nº 12/2005 estabelece o regime estatutário, e a LC nº 190/2023 organiza cargos, carreira e remuneração do quadro efetivo.",
    "a LC nº 12/2005 trata somente de remuneração, enquanto a LC nº 190/2023 disciplina provimento e responsabilidade funcional.",
    "a LC nº 190/2023 corresponde à Lei Orgânica municipal, cabendo à LC nº 12/2005 organizar os Poderes Executivo e Legislativo."
  ], correct: 2 }
};

function applyManualOptionSet(question) {
  const override = administracaoBatchTwoOverrides[question.id] || administracaoBatchOneOverrides[question.id] || farmaciaBatchOneOverrides[question.id] || manualOptionSets[question.id];
  if (!override) return;
  question.options = override.options.map((text, index) => ({ letter: "ABCDE"[index], text }));
  question.answer = "ABCDE"[override.correct];
}

// Padrão editorial para o banco: cada distrator pode indicar o trecho exato
// que muda o conceito e uma justificativa curta. Novas questões devem receber
// essa ficha junto com enunciado, gabarito e explicação principal.
const diagnosticNotes = {
  "farmacia-050": {
    "manter produtos de aparência ou nomes semelhantes lado a lado, com identificação apenas no sistema informatizado.": {
      focus: "lado a lado, com identificação apenas no sistema informatizado",
      reason: "Produtos semelhantes precisam de separação física e sinais visuais de diferenciação. O sistema informatizado ajuda, mas não elimina o risco de troca no armazenamento ou na seleção."
    },
    "atribuir a prevenção de erros à responsabilização individual, com apuração posterior do profissional envolvido.": {
      focus: "responsabilização individual",
      reason: "Uma barreira sistêmica modifica o processo antes que o erro alcance a pessoa. A apuração individual acontece depois do evento e não substitui prevenção estrutural."
    },
    "usar a memória e a experiência dos profissionais como controle principal antes da dispensação.": {
      focus: "memória e a experiência dos profissionais como controle principal",
      reason: "Memória e experiência são importantes, mas são controles frágeis quando usados sozinhos. Alertas, separação e dupla conferência reduzem a dependência de atenção individual."
    },
    "reduzir rótulos auxiliares e sinais de alerta para simplificar a rotina do estoque.": {
      focus: "reduzir rótulos auxiliares e sinais de alerta",
      reason: "Rótulos e alertas funcionam justamente como barreiras de diferenciação. Retirá-los torna produtos parecidos mais fáceis de confundir."
    }
  },
  "farmacia-051": {
    "apresentam baixa estabilidade térmica e exigem condições específicas de conservação durante todo o armazenamento.": {
      focus: "baixa estabilidade térmica",
      reason: "Isso descreve um medicamento termolábil. LASA significa look-alike/sound-alike: o risco nasce da semelhança de nome, som, grafia ou apresentação."
    },
    "são destinados predominantemente ao ambiente hospitalar e requerem monitoramento intensivo durante a dispensação.": {
      focus: "destinados predominantemente ao ambiente hospitalar",
      reason: "O local de uso não define um medicamento LASA. Produtos ambulatoriais e hospitalares podem ser LASA quando apresentam semelhança capaz de induzir troca."
    },
    "são medicamentos injetáveis de alto custo, relacionados a terapias de maior complexidade clínica.": {
      focus: "injetáveis de alto custo",
      reason: "Via de administração e custo não definem LASA. O critério é o potencial de confusão causado pela aparência ou pelo nome do produto."
    },
    "têm retenção de receita e exigem controle especial desde a aquisição até a dispensação.": {
      focus: "retenção de receita e exigem controle especial",
      reason: "Controle especial é uma classificação sanitária diferente. Um medicamento LASA pode ou não exigir retenção de receita."
    }
  },
  "farmacia-055": {
    "imunossupressoras.": {
      focus: "imunossupressoras",
      reason: "As substâncias imunossupressoras pertencem à lista C3, não à lista A3."
    },
    "antirretrovirais.": {
      focus: "antirretrovirais",
      reason: "Os antirretrovirais são tratados na lista C4, não na A3."
    },
    "anabolizantes de uso veterinário apenas.": {
      focus: "anabolizantes",
      reason: "Anabolizantes integram a lista C5. A lista A3 corresponde a substâncias psicotrópicas."
    },
    "retinoicas de uso sistêmico.": {
      focus: "retinoicas de uso sistêmico",
      reason: "Substâncias retinoicas de uso sistêmico pertencem à lista C2, não à lista A3."
    }
  }
};

function applyDiagnosticNotes(question) {
  const notes = diagnosticNotes[question.id] || {};
  question.options = question.options.map((option) => ({
    ...option,
    diagnostic: option.letter === question.answer ? undefined : notes[option.text]
  }));
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
  question.options = ordered.map((option, index) => ({ ...option, letter: "ABCDE"[index] }));
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
  mathQuestionsStrengthened: Object.keys(mathOverrides).map(Number),
  mathBatchOneReviewed: Array.from({ length: 20 }, (_, index) => index + 1),
  mathBatchTwoReviewed: Array.from({ length: 20 }, (_, index) => index + 21)
};

const report = validate(bank);
fs.writeFileSync(bankPath, `export const questionBank = ${JSON.stringify(bank, null, 2)};\n`, "utf8");
fs.writeFileSync(path.join(root, "review-report.json"), JSON.stringify(report, null, 2) + "\n", "utf8");
console.log(JSON.stringify(report, null, 2));
