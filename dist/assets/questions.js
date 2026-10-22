export const questionBank = {
  "generatedAt": "2026-10-22T07:13:35.693Z",
  "subjects": [
    {
      "id": "matematica",
      "label": "Matemática e Raciocínio Lógico",
      "short": "Matemática",
      "count": 60
    },
    {
      "id": "administracao-publica",
      "label": "Administração Pública e Legislação",
      "short": "Administração Pública",
      "count": 50
    },
    {
      "id": "portugues",
      "label": "Língua Portuguesa",
      "short": "Português",
      "count": 60
    },
    {
      "id": "farmacia",
      "label": "Conhecimentos Específicos de Farmácia",
      "short": "Farmácia",
      "count": 160
    }
  ],
  "questions": [
    {
      "id": "matematica-001",
      "subjectId": "matematica",
      "number": 1,
      "topic": "Porcentagem - descontos sucessivos",
      "area": "Porcentagem",
      "stem": "Um insumo custava R$ 2.500,00. Em uma negociação, foram aplicados dois descontos sucessivos, de 12% e 5%. O preço final foi:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 2.090,00."
        },
        {
          "letter": "B",
          "text": "R$ 2.075,00."
        },
        {
          "letter": "C",
          "text": "R$ 2.100,00."
        },
        {
          "letter": "D",
          "text": "R$ 2.125,00."
        },
        {
          "letter": "E",
          "text": "R$ 2.137,50."
        }
      ],
      "answer": "A",
      "explanation": "Descontos sucessivos incidem sobre bases diferentes. O fator total é 0,88 x 0,95 = 0,836. Assim, 2.500 x 0,836 = R$ 2.090,00. Somar 12% e 5% diretamente produziria um desconto incorreto de 17%."
    },
    {
      "id": "matematica-002",
      "subjectId": "matematica",
      "number": 2,
      "topic": "Porcentagem - determinação do valor inicial",
      "area": "Porcentagem",
      "stem": "Após um aumento de 18%, um produto passou a custar R$ 1.416,00. Antes do aumento, seu preço era:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 1.180,00."
        },
        {
          "letter": "B",
          "text": "R$ 1.200,00."
        },
        {
          "letter": "C",
          "text": "R$ 1.220,00."
        },
        {
          "letter": "D",
          "text": "R$ 1.240,00."
        },
        {
          "letter": "E",
          "text": "R$ 1.260,00."
        }
      ],
      "answer": "B",
      "explanation": "O preço final corresponde a 118% do inicial. Logo, 1.416 / 1,18 = 1.200. Não se deve retirar 18% do valor final, pois a base do aumento foi o preço anterior."
    },
    {
      "id": "matematica-003",
      "subjectId": "matematica",
      "number": 3,
      "topic": "Porcentagem - pontos percentuais",
      "area": "Porcentagem",
      "stem": "A taxa de cobertura de um serviço passou de 64% para 80%. Esse crescimento corresponde a:",
      "options": [
        {
          "letter": "A",
          "text": "16% e 16 pontos percentuais."
        },
        {
          "letter": "B",
          "text": "20% e 16 pontos percentuais."
        },
        {
          "letter": "C",
          "text": "25% e 16 pontos percentuais."
        },
        {
          "letter": "D",
          "text": "25% e 20 pontos percentuais."
        },
        {
          "letter": "E",
          "text": "16% e 25 pontos percentuais."
        }
      ],
      "answer": "C",
      "explanation": "A variação absoluta é 80% - 64% = 16 pontos percentuais. Em relação ao valor inicial, o crescimento é 16/64 = 0,25 = 25%."
    },
    {
      "id": "matematica-004",
      "subjectId": "matematica",
      "number": 4,
      "topic": "Porcentagem - acréscimo e desconto",
      "area": "Porcentagem",
      "stem": "Um fornecedor elevou um preço em 25% e, posteriormente, concedeu desconto de 20% sobre o valor reajustado. Em comparação ao preço original, o valor final:",
      "options": [
        {
          "letter": "A",
          "text": "ficou 5% maior."
        },
        {
          "letter": "B",
          "text": "ficou 5% menor."
        },
        {
          "letter": "C",
          "text": "ficou 1% maior."
        },
        {
          "letter": "D",
          "text": "permaneceu igual."
        },
        {
          "letter": "E",
          "text": "ficou 10% menor."
        }
      ],
      "answer": "D",
      "explanation": "Os fatores são 1,25 e 0,80. Como 1,25 x 0,80 = 1, o preço retorna ao valor original. Percentuais inversos podem se anular quando seus fatores se compensam, embora 25 e 20 não sejam números iguais."
    },
    {
      "id": "matematica-005",
      "subjectId": "matematica",
      "number": 5,
      "topic": "Porcentagem - variações sucessivas",
      "area": "Porcentagem",
      "stem": "O consumo de determinado item aumentou 30% em um mês e diminuiu 30% no mês seguinte. Em relação ao consumo inicial, o consumo final ficou:",
      "options": [
        {
          "letter": "A",
          "text": "30% maior."
        },
        {
          "letter": "B",
          "text": "inalterado."
        },
        {
          "letter": "C",
          "text": "3% menor."
        },
        {
          "letter": "D",
          "text": "6% menor."
        },
        {
          "letter": "E",
          "text": "9% menor."
        }
      ],
      "answer": "E",
      "explanation": "O fator acumulado é 1,30 x 0,70 = 0,91. O resultado corresponde a 91% do valor inicial, portanto houve redução de 9%."
    },
    {
      "id": "matematica-006",
      "subjectId": "matematica",
      "number": 6,
      "topic": "Porcentagem - concentração",
      "area": "Porcentagem",
      "stem": "Uma solução de 800 mL contém 15% de um componente. Para que a concentração desse componente passe a 12%, sem alterar sua quantidade, deve-se adicionar apenas diluente. O volume de diluente a acrescentar é:",
      "options": [
        {
          "letter": "A",
          "text": "200 mL."
        },
        {
          "letter": "B",
          "text": "160 mL."
        },
        {
          "letter": "C",
          "text": "120 mL."
        },
        {
          "letter": "D",
          "text": "100 mL."
        },
        {
          "letter": "E",
          "text": "80 mL."
        }
      ],
      "answer": "A",
      "explanation": "Há 0,15 x 800 = 120 mL do componente. Para que 120 mL correspondam a 12%, o volume final deve ser 120/0,12 = 1.000 mL. Portanto, acrescentam-se 1.000 - 800 = 200 mL."
    },
    {
      "id": "matematica-007",
      "subjectId": "matematica",
      "number": 7,
      "topic": "Porcentagem - distribuição de resultados",
      "area": "Porcentagem",
      "stem": "Em uma avaliação com 240 candidatos, 35% foram eliminados na primeira etapa. Dos restantes, 25% foram eliminados na segunda. Quantos permaneceram após as duas etapas?",
      "options": [
        {
          "letter": "A",
          "text": "108."
        },
        {
          "letter": "B",
          "text": "117."
        },
        {
          "letter": "C",
          "text": "126."
        },
        {
          "letter": "D",
          "text": "132."
        },
        {
          "letter": "E",
          "text": "144."
        }
      ],
      "answer": "B",
      "explanation": "Após a primeira etapa permanecem 65%: 240 x 0,65 = 156. Depois, permanecem 75% de 156: 156 x 0,75 = 117."
    },
    {
      "id": "matematica-008",
      "subjectId": "matematica",
      "number": 8,
      "topic": "Razão e proporção",
      "area": "Razão e proporção",
      "stem": "Em um almoxarifado, a razão entre caixas do produto X e caixas do produto Y é 5:3. Após a retirada de 20 caixas de X, a razão passa a ser 3:2. A quantidade inicial de caixas de Y era:",
      "options": [
        {
          "letter": "A",
          "text": "60."
        },
        {
          "letter": "B",
          "text": "80."
        },
        {
          "letter": "C",
          "text": "120."
        },
        {
          "letter": "D",
          "text": "90."
        },
        {
          "letter": "E",
          "text": "150."
        }
      ],
      "answer": "C",
      "explanation": "Se X = 5k e Y = 3k, então (5k - 20)/(3k) = 3/2. Logo, 10k - 40 = 9k, portanto k = 40. Assim, Y = 3 x 40 = 120."
    },
    {
      "id": "matematica-009",
      "subjectId": "matematica",
      "number": 9,
      "topic": "Regra de três simples",
      "area": "Regra de três simples",
      "stem": "Uma bomba transfere 1.350 litros em 45 minutos, mantendo vazão constante. Nessas condições, o tempo necessário para transferir 2.100 litros é:",
      "options": [
        {
          "letter": "A",
          "text": "55 minutos."
        },
        {
          "letter": "B",
          "text": "60 minutos."
        },
        {
          "letter": "C",
          "text": "65 minutos."
        },
        {
          "letter": "D",
          "text": "70 minutos."
        },
        {
          "letter": "E",
          "text": "75 minutos."
        }
      ],
      "answer": "D",
      "explanation": "A vazão é 1.350/45 = 30 litros por minuto. Para 2.100 litros, o tempo é 2.100/30 = 70 minutos."
    },
    {
      "id": "matematica-010",
      "subjectId": "matematica",
      "number": 10,
      "topic": "Regra de três composta",
      "area": "Regra de três composta",
      "stem": "Oito trabalhadores, atuando 6 horas por dia durante 15 dias, processam 7.200 unidades. Mantida a produtividade individual, dez trabalhadores, atuando 8 horas por dia, processarão 9.600 unidades em:",
      "options": [
        {
          "letter": "A",
          "text": "6 dias."
        },
        {
          "letter": "B",
          "text": "8 dias."
        },
        {
          "letter": "C",
          "text": "9 dias."
        },
        {
          "letter": "D",
          "text": "10 dias."
        },
        {
          "letter": "E",
          "text": "12 dias."
        }
      ],
      "answer": "E",
      "explanation": "A produtividade é 7.200/(8 x 6 x 15) = 10 unidades por trabalhador-hora. O novo grupo produz 10 x 8 x 10 = 800 unidades por dia. Logo, 9.600/800 = 12 dias."
    },
    {
      "id": "matematica-011",
      "subjectId": "matematica",
      "number": 11,
      "topic": "Grandezas inversamente proporcionais",
      "area": "Grandezas inversamente proporcionais",
      "stem": "Uma tarefa seria concluída por 12 servidores, de mesma produtividade, em 18 dias. Após 6 dias de trabalho, 4 servidores foram deslocados definitivamente. Mantido o ritmo individual, em quantos dias, contados desde o início, a tarefa será concluída?",
      "options": [
        {
          "letter": "A",
          "text": "24 dias."
        },
        {
          "letter": "B",
          "text": "21 dias."
        },
        {
          "letter": "C",
          "text": "25 dias."
        },
        {
          "letter": "D",
          "text": "27 dias."
        },
        {
          "letter": "E",
          "text": "30 dias."
        }
      ],
      "answer": "A",
      "explanation": "O trabalho total equivale a 12 x 18 = 216 servidor-dias. Nos seis primeiros dias foram realizados 12 x 6 = 72, restando 144. Com 8 servidores, são necessários 144/8 = 18 dias adicionais. Total: 6 + 18 = 24 dias."
    },
    {
      "id": "matematica-012",
      "subjectId": "matematica",
      "number": 12,
      "topic": "Razão - mistura",
      "area": "Razão",
      "stem": "Dois líquidos A e B são misturados na razão 7:3. Para produzir 50 litros da mistura, dispondo-se inicialmente de apenas 28 litros de A, a quantidade máxima que poderá ser produzida, sem alterar a proporção, é:",
      "options": [
        {
          "letter": "A",
          "text": "36 litros."
        },
        {
          "letter": "B",
          "text": "40 litros."
        },
        {
          "letter": "C",
          "text": "42 litros."
        },
        {
          "letter": "D",
          "text": "45 litros."
        },
        {
          "letter": "E",
          "text": "48 litros."
        }
      ],
      "answer": "B",
      "explanation": "A corresponde a 7/10 do total. Se há 28 litros de A, o total possível é 28 x 10/7 = 40 litros, utilizando 12 litros de B."
    },
    {
      "id": "matematica-013",
      "subjectId": "matematica",
      "number": 13,
      "topic": "Escala",
      "area": "Escala",
      "stem": "Em uma planta na escala 1:250, uma sala retangular mede 3,2 cm por 2,4 cm. A área real da sala é:",
      "options": [
        {
          "letter": "A",
          "text": "24 m²."
        },
        {
          "letter": "B",
          "text": "36 m²."
        },
        {
          "letter": "C",
          "text": "48 m²."
        },
        {
          "letter": "D",
          "text": "52 m²."
        },
        {
          "letter": "E",
          "text": "60 m²."
        }
      ],
      "answer": "C",
      "explanation": "As dimensões reais são 3,2 x 250 = 800 cm = 8 m e 2,4 x 250 = 600 cm = 6 m. A área é 8 x 6 = 48 m². A escala linear deve ser aplicada a cada dimensão."
    },
    {
      "id": "matematica-014",
      "subjectId": "matematica",
      "number": 14,
      "topic": "Proporção - divisão proporcional",
      "area": "Proporção",
      "stem": "Um prêmio de R$ 18.000,00 será dividido entre três equipes em partes diretamente proporcionais a 2, 3 e 4. A equipe correspondente à maior parte receberá:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 4.000,00."
        },
        {
          "letter": "B",
          "text": "R$ 5.000,00."
        },
        {
          "letter": "C",
          "text": "R$ 6.000,00."
        },
        {
          "letter": "D",
          "text": "R$ 8.000,00."
        },
        {
          "letter": "E",
          "text": "R$ 9.000,00."
        }
      ],
      "answer": "D",
      "explanation": "A soma das partes é 2 + 3 + 4 = 9. A maior equipe recebe 4/9 de 18.000, isto é, R$ 8.000,00."
    },
    {
      "id": "matematica-015",
      "subjectId": "matematica",
      "number": 15,
      "topic": "Números racionais - operações",
      "area": "Números racionais",
      "stem": "Um reservatório estava com 3/5 de sua capacidade. Após a retirada de 1/4 do volume que havia nele, restaram 270 litros. A capacidade total é:",
      "options": [
        {
          "letter": "A",
          "text": "450 litros."
        },
        {
          "letter": "B",
          "text": "500 litros."
        },
        {
          "letter": "C",
          "text": "540 litros."
        },
        {
          "letter": "D",
          "text": "560 litros."
        },
        {
          "letter": "E",
          "text": "600 litros."
        }
      ],
      "answer": "E",
      "explanation": "Restaram 3/4 do volume existente, que era 3/5 da capacidade C. Logo, (3/4)(3/5)C = 9C/20 = 270. Assim, C = 270 x 20/9 = 600 litros."
    },
    {
      "id": "matematica-016",
      "subjectId": "matematica",
      "number": 16,
      "topic": "Números inteiros - divisibilidade",
      "area": "Números inteiros",
      "stem": "O menor número natural maior que 18 que, ao ser dividido por 8, 12 e 18, deixa resto 5 em todos os casos é:",
      "options": [
        {
          "letter": "A",
          "text": "77."
        },
        {
          "letter": "B",
          "text": "72."
        },
        {
          "letter": "C",
          "text": "149."
        },
        {
          "letter": "D",
          "text": "221."
        },
        {
          "letter": "E",
          "text": "293."
        }
      ],
      "answer": "A",
      "explanation": "Se o número deixa resto 5, sua diferença para 5 deve ser múltipla comum de 8, 12 e 18. O MMC é 72. O menor número maior que os divisores é 72 + 5 = 77."
    },
    {
      "id": "matematica-017",
      "subjectId": "matematica",
      "number": 17,
      "topic": "Números reais e irracionais",
      "area": "Números reais e irracionais",
      "stem": "Assinale a alternativa que apresenta um número irracional:",
      "options": [
        {
          "letter": "A",
          "text": "raiz quadrada de 81 dividida por 3."
        },
        {
          "letter": "B",
          "text": "raiz quadrada de 18 menos raiz quadrada de 8."
        },
        {
          "letter": "C",
          "text": "0,121212..."
        },
        {
          "letter": "D",
          "text": "raiz quadrada de 0,04."
        },
        {
          "letter": "E",
          "text": "(raiz quadrada de 5)²."
        }
      ],
      "answer": "B",
      "explanation": "√18 - √8 = 3√2 - 2√2 = √2, que é irracional. As demais expressões resultam, respectivamente, em 3; número decimal periódico racional; 0,2; e 5."
    },
    {
      "id": "matematica-018",
      "subjectId": "matematica",
      "number": 18,
      "topic": "Equação do primeiro grau",
      "area": "Equação do primeiro grau",
      "stem": "Uma taxa fixa acrescida de R$ 3,50 por unidade resultou em cobrança de R$ 222,00 por 48 unidades. Se a taxa fixa é representada por x, então seu valor é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 48,00."
        },
        {
          "letter": "B",
          "text": "R$ 50,00."
        },
        {
          "letter": "C",
          "text": "R$ 54,00."
        },
        {
          "letter": "D",
          "text": "R$ 56,00."
        },
        {
          "letter": "E",
          "text": "R$ 60,00."
        }
      ],
      "answer": "C",
      "explanation": "A equação é x + 3,50 x 48 = 222. Como 3,50 x 48 = 168, x = 222 - 168 = 54."
    },
    {
      "id": "matematica-019",
      "subjectId": "matematica",
      "number": 19,
      "topic": "Sistema de equações",
      "area": "Sistema de equações",
      "stem": "Em uma compra, 8 caixas do item A e 5 caixas do item B custaram R$ 610,00. Em outra, 5 caixas de A e 3 caixas de B custaram R$ 375,00. O preço de uma caixa do item B é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 30,00."
        },
        {
          "letter": "B",
          "text": "R$ 35,00."
        },
        {
          "letter": "C",
          "text": "R$ 40,00."
        },
        {
          "letter": "D",
          "text": "R$ 50,00."
        },
        {
          "letter": "E",
          "text": "R$ 55,00."
        }
      ],
      "answer": "D",
      "explanation": "O sistema é 8A + 5B = 610 e 5A + 3B = 375. Multiplicando a primeira por 3 e a segunda por 5: 24A + 15B = 1.830 e 25A + 15B = 1.875. Logo, A = 45. Em 5A + 3B = 375: 225 + 3B = 375, então B = 50."
    },
    {
      "id": "matematica-020",
      "subjectId": "matematica",
      "number": 20,
      "topic": "Equação do segundo grau",
      "area": "Equação do segundo grau",
      "stem": "Um terreno retangular possui área de 300 m². Seu comprimento mede 5 metros a mais que sua largura. A largura do terreno é:",
      "options": [
        {
          "letter": "A",
          "text": "10 m."
        },
        {
          "letter": "B",
          "text": "12 m."
        },
        {
          "letter": "C",
          "text": "20 m."
        },
        {
          "letter": "D",
          "text": "18 m."
        },
        {
          "letter": "E",
          "text": "15 m."
        }
      ],
      "answer": "E",
      "explanation": "Se a largura é x, o comprimento é x + 5. Assim, x(x + 5) = 300, ou x² + 5x - 300 = 0. As raízes são 15 e -20; a medida válida é 15 m."
    },
    {
      "id": "matematica-021",
      "subjectId": "matematica",
      "number": 21,
      "topic": "Equação exponencial",
      "area": "Equação exponencial",
      "stem": "Uma cultura experimental dobra de quantidade a cada 3 horas. Se inicialmente havia 500 unidades, após quanto tempo haverá 16.000 unidades?",
      "options": [
        {
          "letter": "A",
          "text": "15 horas."
        },
        {
          "letter": "B",
          "text": "12 horas."
        },
        {
          "letter": "C",
          "text": "18 horas."
        },
        {
          "letter": "D",
          "text": "21 horas."
        },
        {
          "letter": "E",
          "text": "24 horas."
        }
      ],
      "answer": "A",
      "explanation": "É necessário multiplicar 500 por 32 para obter 16.000. Como 32 = 2^5, ocorreram cinco duplicações. Cada uma leva 3 horas: 5 x 3 = 15 horas."
    },
    {
      "id": "matematica-022",
      "subjectId": "matematica",
      "number": 22,
      "topic": "Logaritmos",
      "area": "Logaritmos",
      "stem": "Sabendo que log 2 = 0,3010 e log 3 = 0,4771, ambos na base 10, o valor de log 72 é:",
      "options": [
        {
          "letter": "A",
          "text": "1,5562."
        },
        {
          "letter": "B",
          "text": "1,8572."
        },
        {
          "letter": "C",
          "text": "1,9031."
        },
        {
          "letter": "D",
          "text": "2,0792."
        },
        {
          "letter": "E",
          "text": "2,1583."
        }
      ],
      "answer": "B",
      "explanation": "72 = 2³ x 3². Logo, log 72 = 3 log 2 + 2 log 3 = 3(0,3010) + 2(0,4771) = 0,9030 + 0,9542 = 1,8572."
    },
    {
      "id": "matematica-023",
      "subjectId": "matematica",
      "number": 23,
      "topic": "Função de primeiro grau",
      "area": "Função de primeiro grau",
      "stem": "O custo mensal C(x), em reais, de determinada operação é dado por C(x) = 4.800 + 12x, em que x representa o número de procedimentos. Se o valor recebido por procedimento é R$ 20,00, a operação atinge o ponto de equilíbrio quando são realizados:",
      "options": [
        {
          "letter": "A",
          "text": "400 procedimentos."
        },
        {
          "letter": "B",
          "text": "500 procedimentos."
        },
        {
          "letter": "C",
          "text": "600 procedimentos."
        },
        {
          "letter": "D",
          "text": "700 procedimentos."
        },
        {
          "letter": "E",
          "text": "800 procedimentos."
        }
      ],
      "answer": "C",
      "explanation": "No equilíbrio, receita e custo são iguais: 20x = 4.800 + 12x. Assim, 8x = 4.800 e x = 600."
    },
    {
      "id": "matematica-024",
      "subjectId": "matematica",
      "number": 24,
      "topic": "Função quadrática",
      "area": "Função quadrática",
      "stem": "A altura de um objeto, em metros, é dada por h(t) = -5t² + 30t + 2, sendo t o tempo em segundos. A altura máxima atingida é:",
      "options": [
        {
          "letter": "A",
          "text": "42 m."
        },
        {
          "letter": "B",
          "text": "45 m."
        },
        {
          "letter": "C",
          "text": "46 m."
        },
        {
          "letter": "D",
          "text": "47 m."
        },
        {
          "letter": "E",
          "text": "50 m."
        }
      ],
      "answer": "D",
      "explanation": "O vértice ocorre em t = -b/(2a) = -30/(2 x -5) = 3. Então, h(3) = -5(9) + 30(3) + 2 = -45 + 90 + 2 = 47 m."
    },
    {
      "id": "matematica-025",
      "subjectId": "matematica",
      "number": 25,
      "topic": "Funções - composição",
      "area": "Funções",
      "stem": "Se f(x) = 2x - 1 e g(x) = x² + 3, então f(g(2)) é igual a:",
      "options": [
        {
          "letter": "A",
          "text": "7."
        },
        {
          "letter": "B",
          "text": "9."
        },
        {
          "letter": "C",
          "text": "11."
        },
        {
          "letter": "D",
          "text": "12."
        },
        {
          "letter": "E",
          "text": "13."
        }
      ],
      "answer": "E",
      "explanation": "Primeiro, g(2) = 2² + 3 = 7. Depois, f(7) = 2 x 7 - 1 = 13."
    },
    {
      "id": "matematica-026",
      "subjectId": "matematica",
      "number": 26,
      "topic": "Juros simples",
      "area": "Juros simples",
      "stem": "Um capital de R$ 8.000,00 foi aplicado a juros simples de 1,5% ao mês durante 10 meses. O montante ao final foi:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 9.200,00."
        },
        {
          "letter": "B",
          "text": "R$ 8.120,00."
        },
        {
          "letter": "C",
          "text": "R$ 9.080,00."
        },
        {
          "letter": "D",
          "text": "R$ 9.500,00."
        },
        {
          "letter": "E",
          "text": "R$ 10.000,00."
        }
      ],
      "answer": "A",
      "explanation": "J = C.i.t = 8.000 x 0,015 x 10 = 1.200. O montante é 8.000 + 1.200 = R$ 9.200,00."
    },
    {
      "id": "matematica-027",
      "subjectId": "matematica",
      "number": 27,
      "topic": "Juros compostos",
      "area": "Juros compostos",
      "stem": "Um capital de R$ 5.000,00 foi aplicado a 2% ao mês, em juros compostos, por 3 meses. O montante, arredondado para centavos, é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 5.300,00."
        },
        {
          "letter": "B",
          "text": "R$ 5.306,04."
        },
        {
          "letter": "C",
          "text": "R$ 5.312,12."
        },
        {
          "letter": "D",
          "text": "R$ 5.318,24."
        },
        {
          "letter": "E",
          "text": "R$ 5.320,40."
        }
      ],
      "answer": "B",
      "explanation": "M = 5.000(1,02)³ = 5.000 x 1,061208 = R$ 5.306,04."
    },
    {
      "id": "matematica-028",
      "subjectId": "matematica",
      "number": 28,
      "topic": "Matemática financeira - taxa equivalente",
      "area": "Matemática financeira",
      "stem": "Uma taxa de 10% ao semestre, em regime de juros compostos, é equivalente a qual taxa anual efetiva?",
      "options": [
        {
          "letter": "A",
          "text": "19%."
        },
        {
          "letter": "B",
          "text": "20%."
        },
        {
          "letter": "C",
          "text": "21%."
        },
        {
          "letter": "D",
          "text": "22%."
        },
        {
          "letter": "E",
          "text": "25%."
        }
      ],
      "answer": "C",
      "explanation": "Em um ano há dois semestres. A taxa efetiva é (1,10)² - 1 = 1,21 - 1 = 0,21 = 21%."
    },
    {
      "id": "matematica-029",
      "subjectId": "matematica",
      "number": 29,
      "topic": "Estatística - média ponderada",
      "area": "Estatística",
      "stem": "Em uma avaliação, uma prova de peso 2 recebeu nota 7,0; uma atividade de peso 3 recebeu nota 8,0; e uma prova final de peso 5 recebeu nota 6,0. A média ponderada foi:",
      "options": [
        {
          "letter": "A",
          "text": "6,5."
        },
        {
          "letter": "B",
          "text": "6,6."
        },
        {
          "letter": "C",
          "text": "6,7."
        },
        {
          "letter": "D",
          "text": "6,8."
        },
        {
          "letter": "E",
          "text": "7,0."
        }
      ],
      "answer": "D",
      "explanation": "A soma ponderada é 2(7) + 3(8) + 5(6) = 14 + 24 + 30 = 68. A soma dos pesos é 10. Logo, a média é 68/10 = 6,8."
    },
    {
      "id": "matematica-030",
      "subjectId": "matematica",
      "number": 30,
      "topic": "Estatística - mediana",
      "area": "Estatística",
      "stem": "Os tempos, em minutos, de nove atendimentos foram: 12, 18, 15, 21, 14, 19, 17, 25 e 16. A mediana é:",
      "options": [
        {
          "letter": "A",
          "text": "15."
        },
        {
          "letter": "B",
          "text": "16."
        },
        {
          "letter": "C",
          "text": "16,5."
        },
        {
          "letter": "D",
          "text": "18."
        },
        {
          "letter": "E",
          "text": "17."
        }
      ],
      "answer": "E",
      "explanation": "Em ordem: 12, 14, 15, 16, 17, 18, 19, 21, 25. Como há nove valores, a mediana é o quinto: 17."
    },
    {
      "id": "matematica-031",
      "subjectId": "matematica",
      "number": 31,
      "topic": "Estatística - média e alteração dos dados",
      "area": "Estatística",
      "stem": "A média de 12 valores é 18. Após verificar um erro, substituiu-se um valor 14 por 26. A nova média é:",
      "options": [
        {
          "letter": "A",
          "text": "19."
        },
        {
          "letter": "B",
          "text": "18,5."
        },
        {
          "letter": "C",
          "text": "19,5."
        },
        {
          "letter": "D",
          "text": "20."
        },
        {
          "letter": "E",
          "text": "20,5."
        }
      ],
      "answer": "A",
      "explanation": "A soma original era 12 x 18 = 216. A substituição aumenta a soma em 26 - 14 = 12. A nova soma é 228, e 228/12 = 19."
    },
    {
      "id": "matematica-032",
      "subjectId": "matematica",
      "number": 32,
      "topic": "Tabelas e gráficos - variação relativa",
      "area": "Tabelas e gráficos",
      "stem": "Uma tabela apresenta o número de atendimentos de três unidades:\n\nUnidade A: janeiro 400; fevereiro 460. Unidade B: janeiro 250; fevereiro 300. Unidade C: janeiro 600; fevereiro 660.\n\nQual unidade apresentou o maior crescimento percentual?",
      "options": [
        {
          "letter": "A",
          "text": "Unidade A, com 15%."
        },
        {
          "letter": "B",
          "text": "Unidade B, com 20%."
        },
        {
          "letter": "C",
          "text": "Unidade C, com 10%."
        },
        {
          "letter": "D",
          "text": "Unidades A e C, com 15%."
        },
        {
          "letter": "E",
          "text": "Todas apresentaram 60 atendimentos e, portanto, o mesmo percentual."
        }
      ],
      "answer": "B",
      "explanation": "A cresceu 60/400 = 15%; B, 50/250 = 20%; e C, 60/600 = 10%. A variação absoluta não determina, sozinha, a maior variação relativa."
    },
    {
      "id": "matematica-033",
      "subjectId": "matematica",
      "number": 33,
      "topic": "Probabilidade",
      "area": "Probabilidade",
      "stem": "Uma urna contém 4 bolas vermelhas, 5 azuis e 3 verdes. Retira-se uma bola ao acaso. A probabilidade de ela não ser azul é:",
      "options": [
        {
          "letter": "A",
          "text": "5/12."
        },
        {
          "letter": "B",
          "text": "1/2."
        },
        {
          "letter": "C",
          "text": "7/12."
        },
        {
          "letter": "D",
          "text": "2/3."
        },
        {
          "letter": "E",
          "text": "3/4."
        }
      ],
      "answer": "C",
      "explanation": "Há 12 bolas no total e 7 não azuis (4 vermelhas + 3 verdes). Portanto, a probabilidade é 7/12."
    },
    {
      "id": "matematica-034",
      "subjectId": "matematica",
      "number": 34,
      "topic": "Probabilidade sem reposição",
      "area": "Probabilidade sem reposição",
      "stem": "Em um lote há 8 itens conformes e 2 não conformes. Dois itens são escolhidos sucessivamente, sem reposição. A probabilidade de ambos serem conformes é:",
      "options": [
        {
          "letter": "A",
          "text": "16/25."
        },
        {
          "letter": "B",
          "text": "32/45."
        },
        {
          "letter": "C",
          "text": "7/10."
        },
        {
          "letter": "D",
          "text": "28/45."
        },
        {
          "letter": "E",
          "text": "4/5."
        }
      ],
      "answer": "D",
      "explanation": "A probabilidade é (8/10)(7/9) = 56/90 = 28/45."
    },
    {
      "id": "matematica-035",
      "subjectId": "matematica",
      "number": 35,
      "topic": "Análise combinatória",
      "area": "Análise combinatória",
      "stem": "Uma comissão com 3 membros será formada a partir de 7 servidores, sem distinção de funções. O número de comissões possíveis é:",
      "options": [
        {
          "letter": "A",
          "text": "21."
        },
        {
          "letter": "B",
          "text": "28."
        },
        {
          "letter": "C",
          "text": "30."
        },
        {
          "letter": "D",
          "text": "32."
        },
        {
          "letter": "E",
          "text": "35."
        }
      ],
      "answer": "E",
      "explanation": "Como a ordem não importa, usa-se combinação: C(7,3) = 7!/(3!4!) = (7 x 6 x 5)/(3 x 2 x 1) = 35."
    },
    {
      "id": "matematica-036",
      "subjectId": "matematica",
      "number": 36,
      "topic": "Conjuntos - inclusão e exclusão",
      "area": "Conjuntos",
      "stem": "Em um grupo de 120 pessoas, 70 utilizam o serviço A, 55 utilizam o serviço B e 25 utilizam ambos. Quantas não utilizam nenhum dos dois serviços?",
      "options": [
        {
          "letter": "A",
          "text": "20."
        },
        {
          "letter": "B",
          "text": "10."
        },
        {
          "letter": "C",
          "text": "15."
        },
        {
          "letter": "D",
          "text": "25."
        },
        {
          "letter": "E",
          "text": "30."
        }
      ],
      "answer": "A",
      "explanation": "|A união B| = 70 + 55 - 25 = 100. Portanto, 120 - 100 = 20 pessoas não utilizam nenhum dos dois."
    },
    {
      "id": "matematica-037",
      "subjectId": "matematica",
      "number": 37,
      "topic": "Raciocínio lógico - negação",
      "area": "Raciocínio lógico",
      "stem": "A negação lógica de “Todos os relatórios foram revisados e aprovados” é:",
      "options": [
        {
          "letter": "A",
          "text": "Nenhum relatório foi revisado nem aprovado."
        },
        {
          "letter": "B",
          "text": "Existe pelo menos um relatório que não foi revisado ou não foi aprovado."
        },
        {
          "letter": "C",
          "text": "Todos os relatórios não foram revisados ou não foram aprovados."
        },
        {
          "letter": "D",
          "text": "Existe exatamente um relatório revisado e não aprovado."
        },
        {
          "letter": "E",
          "text": "Alguns relatórios foram revisados e aprovados."
        }
      ],
      "answer": "B",
      "explanation": "A negação de “para todo relatório, R e A” é “existe pelo menos um relatório para o qual não R ou não A”. Não é necessário que todos falhem nem que exista exatamente um."
    },
    {
      "id": "matematica-038",
      "subjectId": "matematica",
      "number": 38,
      "topic": "Raciocínio lógico - implicação",
      "area": "Raciocínio lógico",
      "stem": "Considere a proposição: “Se o lote foi liberado, então a análise foi concluída.” Sabendo que a análise não foi concluída, conclui-se validamente que:",
      "options": [
        {
          "letter": "A",
          "text": "o lote foi liberado."
        },
        {
          "letter": "B",
          "text": "a análise será concluída posteriormente."
        },
        {
          "letter": "C",
          "text": "o lote não foi liberado."
        },
        {
          "letter": "D",
          "text": "o lote foi parcialmente liberado."
        },
        {
          "letter": "E",
          "text": "nada pode ser concluído sobre a liberação."
        }
      ],
      "answer": "C",
      "explanation": "Trata-se de modus tollens: se P implica Q e Q é falso, então P é falso. Logo, o lote não foi liberado."
    },
    {
      "id": "matematica-039",
      "subjectId": "matematica",
      "number": 39,
      "topic": "Raciocínio lógico - sequência",
      "area": "Raciocínio lógico",
      "stem": "Considere a sequência 2, 6, 15, 31, 56, ... As diferenças entre termos consecutivos são quadrados perfeitos crescentes. O próximo termo é:",
      "options": [
        {
          "letter": "A",
          "text": "81."
        },
        {
          "letter": "B",
          "text": "86."
        },
        {
          "letter": "C",
          "text": "90."
        },
        {
          "letter": "D",
          "text": "92."
        },
        {
          "letter": "E",
          "text": "96."
        }
      ],
      "answer": "D",
      "explanation": "As diferenças são 4, 9, 16 e 25, isto é, 2², 3², 4² e 5². A próxima é 6² = 36. Logo, 56 + 36 = 92."
    },
    {
      "id": "matematica-040",
      "subjectId": "matematica",
      "number": 40,
      "topic": "Raciocínio lógico - ordenação",
      "area": "Raciocínio lógico",
      "stem": "Cinco relatórios, P, Q, R, S e T, serão analisados em sequência. Sabe-se que P vem antes de R; Q vem imediatamente após S; e T é o último. Qual sequência pode atender a todas as condições?",
      "options": [
        {
          "letter": "A",
          "text": "S, P, Q, R, T."
        },
        {
          "letter": "B",
          "text": "P, Q, S, R, T."
        },
        {
          "letter": "C",
          "text": "R, S, Q, P, T."
        },
        {
          "letter": "D",
          "text": "S, Q, R, T, P."
        },
        {
          "letter": "E",
          "text": "P, S, Q, R, T."
        }
      ],
      "answer": "E",
      "explanation": "Em E, P aparece antes de R, Q vem imediatamente após S e T ocupa a última posição. Em A, Q não vem imediatamente após S; as demais violam pelo menos uma das condições."
    },
    {
      "id": "matematica-041",
      "subjectId": "matematica",
      "number": 41,
      "topic": "Geometria plana - retângulo",
      "area": "Geometria plana",
      "stem": "Um terreno retangular tem lados na razão 3:2 e perímetro igual a 100 m. A área desse terreno é:",
      "options": [
        {
          "letter": "A",
          "text": "600 m²."
        },
        {
          "letter": "B",
          "text": "500 m²."
        },
        {
          "letter": "C",
          "text": "625 m²."
        },
        {
          "letter": "D",
          "text": "750 m²."
        },
        {
          "letter": "E",
          "text": "1.200 m²."
        }
      ],
      "answer": "A",
      "explanation": "Escrevendo os lados como 3k e 2k, o perímetro é 2(3k + 2k) = 10k. Assim, 10k = 100 e k = 10. Os lados medem 30 m e 20 m; portanto, a área é 30 · 20 = 600 m²."
    },
    {
      "id": "matematica-042",
      "subjectId": "matematica",
      "number": 42,
      "topic": "Geometria plana - triângulo retângulo",
      "area": "Geometria plana",
      "stem": "Um triângulo retângulo tem catetos medindo 9 cm e 12 cm. A altura relativa à hipotenusa mede:",
      "options": [
        {
          "letter": "A",
          "text": "6,0 cm."
        },
        {
          "letter": "B",
          "text": "7,2 cm."
        },
        {
          "letter": "C",
          "text": "7,5 cm."
        },
        {
          "letter": "D",
          "text": "8,0 cm."
        },
        {
          "letter": "E",
          "text": "9,6 cm."
        }
      ],
      "answer": "B",
      "explanation": "A hipotenusa mede 15 cm pelo teorema de Pitágoras. Igualando as duas expressões para a área, (9 · 12)/2 = (15 · h)/2. Logo, h = 108/15 = 7,2 cm."
    },
    {
      "id": "matematica-043",
      "subjectId": "matematica",
      "number": 43,
      "topic": "Geometria plana - círculo e coroa circular",
      "area": "Geometria plana",
      "stem": "Uma praça circular de raio 10 m contém, em seu centro, um jardim também circular, de raio 6 m. A área da região da praça externa ao jardim é:",
      "options": [
        {
          "letter": "A",
          "text": "16π m²."
        },
        {
          "letter": "B",
          "text": "36π m²."
        },
        {
          "letter": "C",
          "text": "64π m²."
        },
        {
          "letter": "D",
          "text": "100π m²."
        },
        {
          "letter": "E",
          "text": "136π m²."
        }
      ],
      "answer": "C",
      "explanation": "A área da coroa circular é a diferença entre as áreas dos círculos: π(10² - 6²) = π(100 - 36) = 64π m²."
    },
    {
      "id": "matematica-044",
      "subjectId": "matematica",
      "number": 44,
      "topic": "Geometria plana - trapézio",
      "area": "Geometria plana",
      "stem": "Um trapézio tem bases paralelas medindo 12 cm e 20 cm e altura igual a 7 cm. Sua área é:",
      "options": [
        {
          "letter": "A",
          "text": "98 cm²."
        },
        {
          "letter": "B",
          "text": "104 cm²."
        },
        {
          "letter": "C",
          "text": "108 cm²."
        },
        {
          "letter": "D",
          "text": "112 cm²."
        },
        {
          "letter": "E",
          "text": "224 cm²."
        }
      ],
      "answer": "D",
      "explanation": "A área do trapézio é A = (B + b)h/2. Portanto, A = (20 + 12) · 7/2 = 16 · 7 = 112 cm²."
    },
    {
      "id": "matematica-045",
      "subjectId": "matematica",
      "number": 45,
      "topic": "Geometria espacial - cubo",
      "area": "Geometria espacial",
      "stem": "A diagonal espacial de um cubo mede 6√3 cm. O volume desse cubo é:",
      "options": [
        {
          "letter": "A",
          "text": "36 cm³."
        },
        {
          "letter": "B",
          "text": "72 cm³."
        },
        {
          "letter": "C",
          "text": "108 cm³."
        },
        {
          "letter": "D",
          "text": "180 cm³."
        },
        {
          "letter": "E",
          "text": "216 cm³."
        }
      ],
      "answer": "E",
      "explanation": "A diagonal espacial de um cubo de aresta a é d = a√3. Assim, a√3 = 6√3, de modo que a = 6 cm. O volume é a³ = 6³ = 216 cm³."
    },
    {
      "id": "matematica-046",
      "subjectId": "matematica",
      "number": 46,
      "topic": "Geometria espacial - cilindro",
      "area": "Geometria espacial",
      "stem": "Um reservatório cilíndrico reto possui raio interno de 3 m e altura de 10 m. Desprezando a espessura das paredes, sua capacidade geométrica é:",
      "options": [
        {
          "letter": "A",
          "text": "90π m³."
        },
        {
          "letter": "B",
          "text": "60π m³."
        },
        {
          "letter": "C",
          "text": "30π m³."
        },
        {
          "letter": "D",
          "text": "180π m³."
        },
        {
          "letter": "E",
          "text": "900π m³."
        }
      ],
      "answer": "A",
      "explanation": "O volume do cilindro é V = πr²h. Substituindo r = 3 e h = 10, obtém-se V = π · 9 · 10 = 90π m³."
    },
    {
      "id": "matematica-047",
      "subjectId": "matematica",
      "number": 47,
      "topic": "Sistema métrico - conversão de concentração",
      "area": "Sistema métrico",
      "stem": "Uma solução contém 0,25 g de soluto em cada 100 mL. A concentração dessa solução, expressa em mg/mL, é:",
      "options": [
        {
          "letter": "A",
          "text": "0,25 mg/mL."
        },
        {
          "letter": "B",
          "text": "2,5 mg/mL."
        },
        {
          "letter": "C",
          "text": "25 mg/mL."
        },
        {
          "letter": "D",
          "text": "250 mg/mL."
        },
        {
          "letter": "E",
          "text": "2.500 mg/mL."
        }
      ],
      "answer": "B",
      "explanation": "Como 0,25 g = 250 mg, há 250 mg em 100 mL. Portanto, 250/100 = 2,5 mg/mL."
    },
    {
      "id": "matematica-048",
      "subjectId": "matematica",
      "number": 48,
      "topic": "Grandezas e medidas - velocidade média",
      "area": "Grandezas e medidas",
      "stem": "Um veículo percorre 60 km a 40 km/h e, em seguida, outros 60 km a 60 km/h, sem paradas entre os trechos. A velocidade média no percurso completo é:",
      "options": [
        {
          "letter": "A",
          "text": "45 km/h."
        },
        {
          "letter": "B",
          "text": "46 km/h."
        },
        {
          "letter": "C",
          "text": "48 km/h."
        },
        {
          "letter": "D",
          "text": "50 km/h."
        },
        {
          "letter": "E",
          "text": "52 km/h."
        }
      ],
      "answer": "C",
      "explanation": "O primeiro trecho dura 60/40 = 1,5 h, e o segundo, 60/60 = 1 h. A distância total é 120 km e o tempo total é 2,5 h. Logo, a velocidade média é 120/2,5 = 48 km/h. Não se deve usar a média aritmética simples das velocidades."
    },
    {
      "id": "matematica-049",
      "subjectId": "matematica",
      "number": 49,
      "topic": "Geometria analítica - distância entre pontos",
      "area": "Geometria analítica",
      "stem": "No plano cartesiano, a distância entre os pontos A(-2, 3) e B(4, -5) é:",
      "options": [
        {
          "letter": "A",
          "text": "8."
        },
        {
          "letter": "B",
          "text": "2√17."
        },
        {
          "letter": "C",
          "text": "4√5."
        },
        {
          "letter": "D",
          "text": "10."
        },
        {
          "letter": "E",
          "text": "12."
        }
      ],
      "answer": "D",
      "explanation": "Pela fórmula da distância, d = √[(4 - (-2))² + (-5 - 3)²] = √(6² + (-8)²) = √100 = 10."
    },
    {
      "id": "matematica-050",
      "subjectId": "matematica",
      "number": 50,
      "topic": "Geometria analítica - equação da reta",
      "area": "Geometria analítica",
      "stem": "A reta que passa pelo ponto (2, -1) e tem coeficiente angular igual a 3 pode ser representada por:",
      "options": [
        {
          "letter": "A",
          "text": "y = 2x - 5."
        },
        {
          "letter": "B",
          "text": "y = 3x + 5."
        },
        {
          "letter": "C",
          "text": "y = -3x + 5."
        },
        {
          "letter": "D",
          "text": "y = -3x - 7."
        },
        {
          "letter": "E",
          "text": "y = 3x - 7."
        }
      ],
      "answer": "E",
      "explanation": "Usando a forma ponto-inclinação, y - (-1) = 3(x - 2). Assim, y + 1 = 3x - 6 e, portanto, y = 3x - 7."
    },
    {
      "id": "matematica-051",
      "subjectId": "matematica",
      "number": 51,
      "topic": "Trigonometria - relações no triângulo retângulo",
      "area": "Trigonometria",
      "stem": "Se θ é um ângulo agudo e tg θ = 3/4, então sen θ é igual a:",
      "options": [
        {
          "letter": "A",
          "text": "3/5."
        },
        {
          "letter": "B",
          "text": "4/5."
        },
        {
          "letter": "C",
          "text": "3/4."
        },
        {
          "letter": "D",
          "text": "4/3."
        },
        {
          "letter": "E",
          "text": "5/4."
        }
      ],
      "answer": "A",
      "explanation": "Pode-se representar a tangente por um triângulo com cateto oposto 3 e cateto adjacente 4. A hipotenusa vale 5 pelo teorema de Pitágoras. Logo, sen θ = cateto oposto/hipotenusa = 3/5."
    },
    {
      "id": "matematica-052",
      "subjectId": "matematica",
      "number": 52,
      "topic": "Matrizes - produto e traço",
      "area": "Matrizes",
      "stem": "Considere as matrizes A = [[1, 2], [-1, 3]] e B = [[2, 0], [4, 1]]. O traço da matriz produto AB, isto é, a soma dos elementos de sua diagonal principal, é:",
      "options": [
        {
          "letter": "A",
          "text": "10."
        },
        {
          "letter": "B",
          "text": "13."
        },
        {
          "letter": "C",
          "text": "15."
        },
        {
          "letter": "D",
          "text": "16."
        },
        {
          "letter": "E",
          "text": "20."
        }
      ],
      "answer": "B",
      "explanation": "O produto é AB = [[10, 2], [10, 3]]. O traço é a soma dos elementos da diagonal principal: 10 + 3 = 13."
    },
    {
      "id": "matematica-053",
      "subjectId": "matematica",
      "number": 53,
      "topic": "Sistemas lineares - resolução algébrica",
      "area": "Sistemas lineares",
      "stem": "O sistema linear x + 2y = 7 3x - y = 7 possui solução (x, y). O valor de x + y é:",
      "options": [
        {
          "letter": "A",
          "text": "3."
        },
        {
          "letter": "B",
          "text": "4."
        },
        {
          "letter": "C",
          "text": "5."
        },
        {
          "letter": "D",
          "text": "6."
        },
        {
          "letter": "E",
          "text": "7."
        }
      ],
      "answer": "C",
      "explanation": "Da segunda equação, y = 3x - 7. Substituindo na primeira: x + 2(3x - 7) = 7, então 7x = 21 e x = 3. Logo, y = 2 e x + y = 5."
    },
    {
      "id": "matematica-054",
      "subjectId": "matematica",
      "number": 54,
      "topic": "Progressão aritmética",
      "area": "Progressão aritmética",
      "stem": "Em uma progressão aritmética, o primeiro termo é 7 e a razão é 4. A soma dos 20 primeiros termos é:",
      "options": [
        {
          "letter": "A",
          "text": "820."
        },
        {
          "letter": "B",
          "text": "840."
        },
        {
          "letter": "C",
          "text": "880."
        },
        {
          "letter": "D",
          "text": "900."
        },
        {
          "letter": "E",
          "text": "940."
        }
      ],
      "answer": "D",
      "explanation": "O vigésimo termo é a20 = 7 + 19 · 4 = 83. Portanto, S20 = 20(7 + 83)/2 = 10 · 90 = 900."
    },
    {
      "id": "matematica-055",
      "subjectId": "matematica",
      "number": 55,
      "topic": "Progressão geométrica",
      "area": "Progressão geométrica",
      "stem": "Uma progressão geométrica tem primeiro termo igual a 3 e razão 2. A soma dos seis primeiros termos é:",
      "options": [
        {
          "letter": "A",
          "text": "96."
        },
        {
          "letter": "B",
          "text": "126."
        },
        {
          "letter": "C",
          "text": "144."
        },
        {
          "letter": "D",
          "text": "186."
        },
        {
          "letter": "E",
          "text": "189."
        }
      ],
      "answer": "E",
      "explanation": "Pela fórmula da soma finita, S6 = 3(2⁶ - 1)/(2 - 1). Assim, S6 = 3(64 - 1) = 3 · 63 = 189."
    },
    {
      "id": "matematica-056",
      "subjectId": "matematica",
      "number": 56,
      "topic": "Polinômios - fatoração e avaliação",
      "area": "Polinômios",
      "stem": "Considere P(x) = x³ - 6x² + 11x - 6. Sabendo que P(x) = (x - 1)(x - 2)(x - 3), o valor de P(4) é:",
      "options": [
        {
          "letter": "A",
          "text": "6."
        },
        {
          "letter": "B",
          "text": "8."
        },
        {
          "letter": "C",
          "text": "12."
        },
        {
          "letter": "D",
          "text": "18."
        },
        {
          "letter": "E",
          "text": "24."
        }
      ],
      "answer": "A",
      "explanation": "Utilizando a forma fatorada, P(4) = (4 - 1)(4 - 2)(4 - 3) = 3 · 2 · 1 = 6."
    },
    {
      "id": "matematica-057",
      "subjectId": "matematica",
      "number": 57,
      "topic": "Álgebra - identidades algébricas",
      "area": "Álgebra",
      "stem": "Se x é um número real não nulo e x + 1/x = 5, então o valor de x² + 1/x² é:",
      "options": [
        {
          "letter": "A",
          "text": "21."
        },
        {
          "letter": "B",
          "text": "23."
        },
        {
          "letter": "C",
          "text": "25."
        },
        {
          "letter": "D",
          "text": "27."
        },
        {
          "letter": "E",
          "text": "29."
        }
      ],
      "answer": "B",
      "explanation": "Elevando a igualdade ao quadrado, (x + 1/x)² = x² + 2 + 1/x² = 25. Logo, x² + 1/x² = 25 - 2 = 23."
    },
    {
      "id": "matematica-058",
      "subjectId": "matematica",
      "number": 58,
      "topic": "Conjuntos - inclusão e exclusão",
      "area": "Conjuntos",
      "stem": "Em um grupo de 120 servidores, 75 fizeram o curso A, 55 fizeram o curso B e 12 não fizeram nenhum dos dois. Quantos fizeram somente o curso A?",
      "options": [
        {
          "letter": "A",
          "text": "43."
        },
        {
          "letter": "B",
          "text": "50."
        },
        {
          "letter": "C",
          "text": "53."
        },
        {
          "letter": "D",
          "text": "63."
        },
        {
          "letter": "E",
          "text": "65."
        }
      ],
      "answer": "C",
      "explanation": "Como 12 não fizeram curso algum, 108 fizeram ao menos um. Pela inclusão-exclusão, 108 = 75 + 55 - |A ∩ B|, então |A ∩ B| = 22. Os que fizeram somente A são 75 - 22 = 53."
    },
    {
      "id": "matematica-059",
      "subjectId": "matematica",
      "number": 59,
      "topic": "Probabilidade - retirada sem reposição",
      "area": "Probabilidade",
      "stem": "Uma urna contém 5 bolas vermelhas e 3 azuis. Duas bolas são retiradas ao acaso, sem reposição. A probabilidade de que tenham a mesma cor é:",
      "options": [
        {
          "letter": "A",
          "text": "3/14."
        },
        {
          "letter": "B",
          "text": "5/14."
        },
        {
          "letter": "C",
          "text": "3/8."
        },
        {
          "letter": "D",
          "text": "13/28."
        },
        {
          "letter": "E",
          "text": "1/2."
        }
      ],
      "answer": "D",
      "explanation": "Há C(8,2) = 28 pares possíveis. Os pares de mesma cor são C(5,2) + C(3,2) = 10 + 3 = 13. Portanto, a probabilidade é 13/28."
    },
    {
      "id": "matematica-060",
      "subjectId": "matematica",
      "number": 60,
      "topic": "Matemática financeira - juros e tributação",
      "area": "Matemática financeira",
      "stem": "Uma aplicação de R$ 10.000,00 rende juros compostos de 10% por período durante dois períodos. No resgate, incide imposto de 20% exclusivamente sobre o rendimento obtido. Desconsiderando outras taxas, o valor líquido resgatado é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 11.100,00."
        },
        {
          "letter": "B",
          "text": "R$ 11.210,00."
        },
        {
          "letter": "C",
          "text": "R$ 11.580,00."
        },
        {
          "letter": "D",
          "text": "R$ 11.600,00."
        },
        {
          "letter": "E",
          "text": "R$ 11.680,00."
        }
      ],
      "answer": "E",
      "explanation": "O montante bruto é 10.000 · 1,10² = R$ 12.100,00. O rendimento é R$ 2.100,00, e o imposto corresponde a 20% desse valor, isto é, R$ 420,00. O resgate líquido é 12.100 - 420 = R$ 11.680,00."
    },
    {
      "id": "administracao-publica-001",
      "subjectId": "administracao-publica",
      "number": 1,
      "topic": "Administração Pública - sentidos objetivo e subjetivo",
      "area": "Administração Pública",
      "stem": "Em Direito Administrativo, a expressão “Administração Pública” pode ser empregada em sentidos subjetivo e objetivo. Assinale a alternativa correta.",
      "options": [
        {
          "letter": "A",
          "text": "No sentido subjetivo, designa os órgãos, agentes e entidades que exercem a função administrativa; no objetivo, designa a própria atividade administrativa."
        },
        {
          "letter": "B",
          "text": "No sentido objetivo, designa exclusivamente os órgãos do Poder Executivo."
        },
        {
          "letter": "C",
          "text": "No sentido subjetivo, corresponde apenas às pessoas jurídicas da administração indireta."
        },
        {
          "letter": "D",
          "text": "No sentido objetivo, compreende as funções legislativa e jurisdicional, mas exclui a atividade administrativa."
        },
        {
          "letter": "E",
          "text": "Os dois sentidos são equivalentes e designam somente os agentes públicos."
        }
      ],
      "answer": "A",
      "explanation": "O sentido subjetivo, orgânico ou formal identifica quem administra: órgãos, entidades e agentes. O sentido objetivo, material ou funcional identifica o que é exercido: a atividade administrativa destinada à satisfação do interesse público."
    },
    {
      "id": "administracao-publica-002",
      "subjectId": "administracao-publica",
      "number": 2,
      "topic": "Princípios administrativos - legalidade",
      "area": "Princípios administrativos",
      "stem": "Um servidor municipal pretende adotar procedimento que considera mais eficiente, embora não exista autorização normativa para praticá-lo. À luz do princípio da legalidade administrativa, ele:",
      "options": [
        {
          "letter": "A",
          "text": "pode agir sempre que não houver proibição expressa."
        },
        {
          "letter": "B",
          "text": "somente pode agir quando houver fundamento jurídico que autorize sua conduta."
        },
        {
          "letter": "C",
          "text": "pode agir desde que obtenha concordância verbal de dois colegas."
        },
        {
          "letter": "D",
          "text": "pode substituir a lei por sua convicção pessoal sobre o interesse público."
        },
        {
          "letter": "E",
          "text": "somente precisa de autorização quando houver despesa pública."
        }
      ],
      "answer": "B",
      "explanation": "Para o particular, em regra, é permitido fazer o que a lei não proíbe. O agente público, porém, está sujeito à legalidade administrativa: sua atuação deve possuir fundamento no ordenamento jurídico. Eficiência não autoriza afastar a legalidade."
    },
    {
      "id": "administracao-publica-003",
      "subjectId": "administracao-publica",
      "number": 3,
      "topic": "Princípios administrativos - impessoalidade",
      "area": "Princípios administrativos",
      "stem": "Em campanha institucional custeada pelo Município, foram inseridos nome, imagem e slogan pessoal do prefeito, com destaque superior ao da informação de utilidade pública. A situação viola mais diretamente o princípio da:",
      "options": [
        {
          "letter": "A",
          "text": "eficiência."
        },
        {
          "letter": "B",
          "text": "autotutela."
        },
        {
          "letter": "C",
          "text": "impessoalidade."
        },
        {
          "letter": "D",
          "text": "continuidade."
        },
        {
          "letter": "E",
          "text": "especialidade."
        }
      ],
      "answer": "C",
      "explanation": "A publicidade oficial deve possuir caráter educativo, informativo ou de orientação social e não pode servir à promoção pessoal de autoridades ou servidores. A vedação concretiza especialmente a impessoalidade, sem prejuízo de possível ofensa à moralidade."
    },
    {
      "id": "administracao-publica-004",
      "subjectId": "administracao-publica",
      "number": 4,
      "topic": "Princípios administrativos - publicidade",
      "area": "Princípios administrativos",
      "stem": "Sobre o princípio da publicidade, assinale a alternativa correta.",
      "options": [
        {
          "letter": "A",
          "text": "Impõe divulgação irrestrita de todo documento público, sem exceções."
        },
        {
          "letter": "B",
          "text": "Permite que a Administração mantenha qualquer ato em sigilo por conveniência."
        },
        {
          "letter": "C",
          "text": "Aplica-se apenas aos atos do Poder Executivo federal."
        },
        {
          "letter": "D",
          "text": "A transparência é a regra, mas o ordenamento admite sigilo em hipóteses constitucional e legalmente justificadas."
        },
        {
          "letter": "E",
          "text": "A divulgação oficial convalida automaticamente atos ilegais."
        }
      ],
      "answer": "D",
      "explanation": "Publicidade e transparência constituem a regra, mas não são absolutas. Admitem-se restrições, por exemplo, para proteger a intimidade ou informações cujo sigilo seja imprescindível à segurança da sociedade e do Estado. Publicar um ato ilegal não elimina seu vício."
    },
    {
      "id": "administracao-publica-005",
      "subjectId": "administracao-publica",
      "number": 5,
      "topic": "Princípios administrativos - eficiência",
      "area": "Princípios administrativos",
      "stem": "O princípio da eficiência exige da Administração Pública:",
      "options": [
        {
          "letter": "A",
          "text": "obtenção de resultados a qualquer custo, mesmo contra a lei."
        },
        {
          "letter": "B",
          "text": "priorização exclusiva da economia financeira."
        },
        {
          "letter": "C",
          "text": "substituição de todos os controles formais por metas de produtividade."
        },
        {
          "letter": "D",
          "text": "atendimento apenas dos usuários que produzam menor custo administrativo."
        },
        {
          "letter": "E",
          "text": "atuação com qualidade, produtividade e bom uso dos recursos, respeitados os demais princípios jurídicos."
        }
      ],
      "answer": "E",
      "explanation": "Eficiência envolve boa gestão, qualidade, produtividade e resultados, mas deve coexistir com legalidade, impessoalidade, moralidade e publicidade. Não há autorização para atingir resultados por meios ilegais ou discriminatórios."
    },
    {
      "id": "administracao-publica-006",
      "subjectId": "administracao-publica",
      "number": 6,
      "topic": "Ética e cidadania",
      "area": "Ética e cidadania",
      "stem": "Um servidor tem acesso lícito a informação ainda não divulgada e a utiliza para favorecer economicamente um parente. Mesmo que não receba vantagem pessoal, essa conduta é eticamente incompatível com a função pública porque:",
      "options": [
        {
          "letter": "A",
          "text": "utiliza a posição pública para produzir favorecimento privado e rompe a imparcialidade esperada do agente."
        },
        {
          "letter": "B",
          "text": "informações públicas pertencem livremente ao servidor que as produziu."
        },
        {
          "letter": "C",
          "text": "o dever ético somente existe quando há crime tipificado."
        },
        {
          "letter": "D",
          "text": "o parentesco elimina o conflito de interesses."
        },
        {
          "letter": "E",
          "text": "a ética funcional se limita ao cumprimento do horário de trabalho."
        }
      ],
      "answer": "A",
      "explanation": "A ética pública exige honestidade, lealdade institucional, imparcialidade e orientação ao interesse coletivo. A ausência de ganho direto ou de condenação criminal não torna eticamente legítimo o uso do cargo para favorecer interesse privado."
    },
    {
      "id": "administracao-publica-007",
      "subjectId": "administracao-publica",
      "number": 7,
      "topic": "Responsabilidade civil do Estado",
      "area": "Responsabilidade civil do Estado",
      "stem": "Nos termos do art. 37, § 6º, da Constituição Federal, as pessoas jurídicas de direito público e as pessoas jurídicas de direito privado prestadoras de serviços públicos respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros. Essa responsabilidade perante a vítima é, em regra:",
      "options": [
        {
          "letter": "A",
          "text": "inexistente quando o agente é servidor efetivo."
        },
        {
          "letter": "B",
          "text": "objetiva, assegurado o direito de regresso contra o agente nos casos de dolo ou culpa."
        },
        {
          "letter": "C",
          "text": "subjetiva, exigindo sempre prova de dolo do agente."
        },
        {
          "letter": "D",
          "text": "penal, e não civil."
        },
        {
          "letter": "E",
          "text": "exclusiva do agente, sem participação da pessoa jurídica."
        }
      ],
      "answer": "B",
      "explanation": "A vítima deve demonstrar, em regra, conduta administrativa, dano e nexo causal, sem precisar provar dolo ou culpa do agente. A pessoa jurídica pode buscar regressivamente o ressarcimento do agente quando houver dolo ou culpa."
    },
    {
      "id": "administracao-publica-008",
      "subjectId": "administracao-publica",
      "number": 8,
      "topic": "Responsabilidade do servidor público",
      "area": "Responsabilidade do servidor público",
      "stem": "Um mesmo fato praticado no exercício do cargo pode produzir responsabilidade civil, penal e administrativa. Em regra, essas instâncias:",
      "options": [
        {
          "letter": "A",
          "text": "não podem coexistir."
        },
        {
          "letter": "B",
          "text": "dependem sempre de condenação penal prévia."
        },
        {
          "letter": "C",
          "text": "podem cumular-se e são independentes, ressalvadas as repercussões legalmente previstas."
        },
        {
          "letter": "D",
          "text": "limitam-se à responsabilidade administrativa."
        },
        {
          "letter": "E",
          "text": "excluem o dever de reparar o dano."
        }
      ],
      "answer": "C",
      "explanation": "As responsabilidades podem nascer do mesmo fato e, em regra, são independentes. O Estatuto de Massaranduba expressamente admite a cumulação e afasta a responsabilidade administrativa quando a absolvição criminal negar a existência do fato ou sua autoria (arts. 171 a 176 da LC nº 12/2005)."
    },
    {
      "id": "administracao-publica-009",
      "subjectId": "administracao-publica",
      "number": 9,
      "topic": "Administração direta e indireta",
      "area": "Administração direta e indireta",
      "stem": "Assinale a alternativa que contém apenas entidades da administração pública indireta.",
      "options": [
        {
          "letter": "A",
          "text": "Ministérios, secretarias e autarquias."
        },
        {
          "letter": "B",
          "text": "Prefeituras, câmaras municipais e empresas públicas."
        },
        {
          "letter": "C",
          "text": "Secretarias, departamentos e fundações privadas comuns."
        },
        {
          "letter": "D",
          "text": "Autarquias, fundações públicas, empresas públicas e sociedades de economia mista."
        },
        {
          "letter": "E",
          "text": "Órgãos públicos, concessionárias e cartórios extrajudiciais."
        }
      ],
      "answer": "D",
      "explanation": "Autarquias, fundações públicas, empresas públicas e sociedades de economia mista são entidades dotadas de personalidade jurídica própria. Ministérios, secretarias e departamentos são órgãos da administração direta, não entidades."
    },
    {
      "id": "administracao-publica-010",
      "subjectId": "administracao-publica",
      "number": 10,
      "topic": "Administração Pública Municipal - autonomia",
      "area": "Administração Pública Municipal",
      "stem": "A autonomia municipal assegurada constitucionalmente significa que o Município:",
      "options": [
        {
          "letter": "A",
          "text": "possui soberania equivalente à da República Federativa do Brasil."
        },
        {
          "letter": "B",
          "text": "pode afastar livremente leis federais e estaduais."
        },
        {
          "letter": "C",
          "text": "não integra a Federação."
        },
        {
          "letter": "D",
          "text": "exerce apenas atribuições delegadas pela União."
        },
        {
          "letter": "E",
          "text": "possui capacidades de auto-organização, autogoverno, autoadministração e autolegislação nos limites constitucionais."
        }
      ],
      "answer": "E",
      "explanation": "O Município é ente federativo autônomo, mas não soberano. Sua autonomia abrange organização, governo, administração e legislação sobre matérias de sua competência, sempre dentro da Constituição."
    },
    {
      "id": "administracao-publica-011",
      "subjectId": "administracao-publica",
      "number": 11,
      "topic": "Constituição Federal - fundamentos da República",
      "area": "Constituição Federal",
      "stem": "Constitui fundamento da República Federativa do Brasil previsto no art. 1º da Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "o pluralismo político."
        },
        {
          "letter": "B",
          "text": "a garantia do desenvolvimento nacional."
        },
        {
          "letter": "C",
          "text": "a erradicação da pobreza."
        },
        {
          "letter": "D",
          "text": "a prevalência dos direitos humanos."
        },
        {
          "letter": "E",
          "text": "a defesa da paz."
        }
      ],
      "answer": "A",
      "explanation": "São fundamentos: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político. As demais alternativas trazem objetivos fundamentais ou princípios das relações internacionais."
    },
    {
      "id": "administracao-publica-012",
      "subjectId": "administracao-publica",
      "number": 12,
      "topic": "Constituição Federal - objetivos fundamentais",
      "area": "Constituição Federal",
      "stem": "Nos termos do art. 3º da Constituição Federal, é objetivo fundamental da República Federativa do Brasil:",
      "options": [
        {
          "letter": "A",
          "text": "conceder soberania aos Municípios."
        },
        {
          "letter": "B",
          "text": "erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais."
        },
        {
          "letter": "C",
          "text": "adotar religião oficial."
        },
        {
          "letter": "D",
          "text": "abolir a separação dos Poderes."
        },
        {
          "letter": "E",
          "text": "restringir a livre iniciativa."
        }
      ],
      "answer": "B",
      "explanation": "O art. 3º inclui a construção de sociedade livre, justa e solidária; o desenvolvimento nacional; a erradicação da pobreza e redução das desigualdades; e a promoção do bem de todos sem preconceitos ou discriminações."
    },
    {
      "id": "administracao-publica-013",
      "subjectId": "administracao-publica",
      "number": 13,
      "topic": "Constituição Federal - separação dos Poderes",
      "area": "Constituição Federal",
      "stem": "De acordo com o art. 2º da Constituição Federal, são Poderes da União:",
      "options": [
        {
          "letter": "A",
          "text": "Executivo, Ministério Público e Judiciário."
        },
        {
          "letter": "B",
          "text": "Legislativo, Tribunal de Contas e Executivo."
        },
        {
          "letter": "C",
          "text": "Legislativo, Executivo e Judiciário, independentes e harmônicos entre si."
        },
        {
          "letter": "D",
          "text": "União, Estados e Municípios."
        },
        {
          "letter": "E",
          "text": "Presidência, Congresso e Supremo Tribunal Federal, subordinados entre si."
        }
      ],
      "answer": "C",
      "explanation": "A Constituição consagra Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos. Não há subordinação geral entre eles, embora existam controles recíprocos."
    },
    {
      "id": "administracao-publica-014",
      "subjectId": "administracao-publica",
      "number": 14,
      "topic": "Constituição Federal - igualdade",
      "area": "Constituição Federal",
      "stem": "O caput do art. 5º da Constituição Federal estabelece que:",
      "options": [
        {
          "letter": "A",
          "text": "somente brasileiros natos são iguais perante a lei."
        },
        {
          "letter": "B",
          "text": "a igualdade impede qualquer tratamento jurídico diferenciado."
        },
        {
          "letter": "C",
          "text": "estrangeiros nunca são alcançados pelos direitos fundamentais."
        },
        {
          "letter": "D",
          "text": "todos são iguais perante a lei, sem distinção de qualquer natureza, nos termos constitucionais."
        },
        {
          "letter": "E",
          "text": "a igualdade vale somente nas relações com o Poder Executivo."
        }
      ],
      "answer": "D",
      "explanation": "A igualdade constitucional protege contra discriminações arbitrárias. Ela não impede diferenciações justificadas e proporcionais destinadas, inclusive, a corrigir desigualdades concretas."
    },
    {
      "id": "administracao-publica-015",
      "subjectId": "administracao-publica",
      "number": 15,
      "topic": "Constituição Federal - princípio da legalidade geral",
      "area": "Constituição Federal",
      "stem": "Nos termos do art. 5º, II, da Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "qualquer autoridade pode criar obrigação por ordem verbal."
        },
        {
          "letter": "B",
          "text": "decretos sempre podem substituir leis."
        },
        {
          "letter": "C",
          "text": "somente servidores públicos estão sujeitos à lei."
        },
        {
          "letter": "D",
          "text": "a autonomia privada é ilimitada."
        },
        {
          "letter": "E",
          "text": "ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei."
        }
      ],
      "answer": "E",
      "explanation": "A regra protege a liberdade individual contra imposições sem base legal. Ela se relaciona, mas não se confunde, com a legalidade administrativa, que vincula positivamente a atuação do agente público."
    },
    {
      "id": "administracao-publica-016",
      "subjectId": "administracao-publica",
      "number": 16,
      "topic": "Constituição Federal - liberdade de associação",
      "area": "Constituição Federal",
      "stem": "Sobre a liberdade de associação, assinale a alternativa correta conforme o art. 5º da Constituição Federal.",
      "options": [
        {
          "letter": "A",
          "text": "As associações só poderão ser compulsoriamente dissolvidas por decisão judicial transitada em julgado."
        },
        {
          "letter": "B",
          "text": "A criação de associações depende de autorização prévia do Poder Executivo."
        },
        {
          "letter": "C",
          "text": "O Estado pode interferir livremente no funcionamento das associações."
        },
        {
          "letter": "D",
          "text": "Toda pessoa é obrigada a permanecer associada após sua filiação."
        },
        {
          "letter": "E",
          "text": "Associações lícitas de caráter paramilitar são expressamente permitidas."
        }
      ],
      "answer": "A",
      "explanation": "A criação de associações independe de autorização, é vedada a interferência estatal em seu funcionamento e ninguém pode ser obrigado a associar-se ou permanecer associado. A dissolução compulsória exige decisão judicial transitada em julgado; para suspensão das atividades, basta decisão judicial."
    },
    {
      "id": "administracao-publica-017",
      "subjectId": "administracao-publica",
      "number": 17,
      "topic": "Constituição Federal - direito de propriedade",
      "area": "Constituição Federal",
      "stem": "A Constituição Federal garante o direito de propriedade e determina que:",
      "options": [
        {
          "letter": "A",
          "text": "seu exercício nunca poderá sofrer condicionamentos."
        },
        {
          "letter": "B",
          "text": "a propriedade atenderá a sua função social."
        },
        {
          "letter": "C",
          "text": "apenas imóveis urbanos possuem função social."
        },
        {
          "letter": "D",
          "text": "a desapropriação dispensa fundamento constitucional ou legal."
        },
        {
          "letter": "E",
          "text": "o interesse coletivo jamais poderá limitar o uso da propriedade."
        }
      ],
      "answer": "B",
      "explanation": "O art. 5º assegura a propriedade e, simultaneamente, exige o cumprimento de sua função social. Portanto, o direito não é absoluto e deve ser exercido em compatibilidade com os parâmetros constitucionais."
    },
    {
      "id": "administracao-publica-018",
      "subjectId": "administracao-publica",
      "number": 18,
      "topic": "Constituição Federal - acesso à informação",
      "area": "Constituição Federal",
      "stem": "Nos termos do art. 5º, XXXIII, todos têm direito a receber dos órgãos públicos informações de interesse particular, coletivo ou geral, ressalvadas:",
      "options": [
        {
          "letter": "A",
          "text": "todas as informações produzidas pelo Poder Executivo."
        },
        {
          "letter": "B",
          "text": "apenas as informações solicitadas por estrangeiros."
        },
        {
          "letter": "C",
          "text": "aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
        },
        {
          "letter": "D",
          "text": "as informações que possam revelar erro administrativo."
        },
        {
          "letter": "E",
          "text": "todas as informações relativas a despesas públicas."
        }
      ],
      "answer": "C",
      "explanation": "A transparência é a regra. A própria Constituição admite a ressalva do sigilo quando imprescindível à segurança da sociedade e do Estado, sem criar uma autorização genérica para ocultar erros ou despesas públicas."
    },
    {
      "id": "administracao-publica-019",
      "subjectId": "administracao-publica",
      "number": 19,
      "topic": "Constituição Federal - mandado de segurança",
      "area": "Constituição Federal",
      "stem": "O mandado de segurança destina-se a proteger:",
      "options": [
        {
          "letter": "A",
          "text": "exclusivamente a liberdade de locomoção."
        },
        {
          "letter": "B",
          "text": "exclusivamente o acesso a dados pessoais."
        },
        {
          "letter": "C",
          "text": "qualquer direito, ainda que sem prova pré-constituída."
        },
        {
          "letter": "D",
          "text": "direito líquido e certo, não amparado por habeas corpus ou habeas data, diante de ilegalidade ou abuso de poder praticado por autoridade ou agente no exercício de atribuições do poder público."
        },
        {
          "letter": "E",
          "text": "apenas interesses patrimoniais da Administração."
        }
      ],
      "answer": "D",
      "explanation": "O mandado de segurança possui caráter residual em relação ao habeas corpus e ao habeas data e exige direito líquido e certo, demonstrável por prova pré-constituída. A liberdade de locomoção é tutelada pelo habeas corpus."
    },
    {
      "id": "administracao-publica-020",
      "subjectId": "administracao-publica",
      "number": 20,
      "topic": "Constituição Federal - habeas data",
      "area": "Constituição Federal",
      "stem": "O habeas data é cabível, nos termos constitucionais, para:",
      "options": [
        {
          "letter": "A",
          "text": "anular condenação criminal transitada em julgado."
        },
        {
          "letter": "B",
          "text": "proteger a liberdade de ir e vir."
        },
        {
          "letter": "C",
          "text": "exigir a edição de norma regulamentadora."
        },
        {
          "letter": "D",
          "text": "proteger direito líquido e certo contra autoridade pública em qualquer caso."
        },
        {
          "letter": "E",
          "text": "assegurar conhecimento ou retificação de informações relativas ao impetrante constantes de registros ou bancos de dados governamentais ou de caráter público."
        }
      ],
      "answer": "E",
      "explanation": "O habeas data protege o acesso e a correção de dados pessoais do próprio impetrante em registros governamentais ou de caráter público. Não substitui habeas corpus, mandado de segurança ou mandado de injunção."
    },
    {
      "id": "administracao-publica-021",
      "subjectId": "administracao-publica",
      "number": 21,
      "topic": "Constituição Federal - direitos sociais",
      "area": "Constituição Federal",
      "stem": "É direito social expressamente previsto no art. 6º da Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "a saúde."
        },
        {
          "letter": "B",
          "text": "o anonimato."
        },
        {
          "letter": "C",
          "text": "a censura prévia."
        },
        {
          "letter": "D",
          "text": "a prisão civil por dívida comum."
        },
        {
          "letter": "E",
          "text": "a intervenção federal permanente."
        }
      ],
      "answer": "A",
      "explanation": "Entre os direitos sociais do art. 6º estão educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados."
    },
    {
      "id": "administracao-publica-022",
      "subjectId": "administracao-publica",
      "number": 22,
      "topic": "Constituição Federal - nacionalidade",
      "area": "Constituição Federal",
      "stem": "É brasileiro nato:",
      "options": [
        {
          "letter": "A",
          "text": "todo estrangeiro que resida no Brasil por um ano."
        },
        {
          "letter": "B",
          "text": "o nascido no estrangeiro de pai brasileiro ou mãe brasileira, desde que seja registrado em repartição brasileira competente, entre outras hipóteses constitucionais."
        },
        {
          "letter": "C",
          "text": "todo estrangeiro casado com pessoa brasileira."
        },
        {
          "letter": "D",
          "text": "somente quem nasce no território brasileiro."
        },
        {
          "letter": "E",
          "text": "quem obtém naturalização extraordinária, necessariamente."
        }
      ],
      "answer": "B",
      "explanation": "A Constituição prevê hipóteses de nacionalidade originária por critérios territorial e sanguíneo. O registro em repartição competente é uma das formas pelas quais o filho de brasileiro nascido no exterior pode ser brasileiro nato."
    },
    {
      "id": "administracao-publica-023",
      "subjectId": "administracao-publica",
      "number": 23,
      "topic": "Constituição Federal - direitos políticos",
      "area": "Constituição Federal",
      "stem": "O alistamento eleitoral e o voto são facultativos para:",
      "options": [
        {
          "letter": "A",
          "text": "todos os maiores de 18 anos."
        },
        {
          "letter": "B",
          "text": "estrangeiros residentes no Brasil."
        },
        {
          "letter": "C",
          "text": "analfabetos, maiores de 70 anos e maiores de 16 e menores de 18 anos."
        },
        {
          "letter": "D",
          "text": "conscritos durante o serviço militar obrigatório, que podem alistar-se facultativamente."
        },
        {
          "letter": "E",
          "text": "apenas maiores de 70 anos."
        }
      ],
      "answer": "C",
      "explanation": "O voto é obrigatório para alfabetizados entre 18 e 70 anos e facultativo para analfabetos, maiores de 70 e jovens de 16 e 17 anos. Estrangeiros e conscritos, durante o serviço militar obrigatório, não podem alistar-se."
    },
    {
      "id": "administracao-publica-024",
      "subjectId": "administracao-publica",
      "number": 24,
      "topic": "Constituição Federal - partidos políticos",
      "area": "Constituição Federal",
      "stem": "Sobre os partidos políticos, a Constituição Federal estabelece que:",
      "options": [
        {
          "letter": "A",
          "text": "podem receber recursos financeiros de governo estrangeiro."
        },
        {
          "letter": "B",
          "text": "não precisam prestar contas à Justiça Eleitoral."
        },
        {
          "letter": "C",
          "text": "podem utilizar organização paramilitar."
        },
        {
          "letter": "D",
          "text": "é livre sua criação, fusão, incorporação e extinção, resguardados a soberania nacional, o regime democrático, o pluripartidarismo e os direitos fundamentais."
        },
        {
          "letter": "E",
          "text": "devem possuir caráter exclusivamente estadual."
        }
      ],
      "answer": "D",
      "explanation": "A liberdade partidária convive com limites constitucionais. Os partidos devem ter caráter nacional, prestar contas à Justiça Eleitoral e não podem receber recursos de entidade ou governo estrangeiros nem adotar organização paramilitar."
    },
    {
      "id": "administracao-publica-025",
      "subjectId": "administracao-publica",
      "number": 25,
      "topic": "Constituição Federal - organização do Estado",
      "area": "Constituição Federal",
      "stem": "A organização político-administrativa da República Federativa do Brasil compreende:",
      "options": [
        {
          "letter": "A",
          "text": "somente União e Estados."
        },
        {
          "letter": "B",
          "text": "União, Estados e Territórios, excluídos os Municípios."
        },
        {
          "letter": "C",
          "text": "União e Municípios, excluído o Distrito Federal."
        },
        {
          "letter": "D",
          "text": "Estados, Municípios e comarcas."
        },
        {
          "letter": "E",
          "text": "União, Estados, Distrito Federal e Municípios, todos autônomos nos termos da Constituição."
        }
      ],
      "answer": "E",
      "explanation": "O art. 18 enumera União, Estados, Distrito Federal e Municípios como componentes autônomos da organização político-administrativa. Territórios federais integram a União e não são entes federativos autônomos."
    },
    {
      "id": "administracao-publica-026",
      "subjectId": "administracao-publica",
      "number": 26,
      "topic": "Constituição Federal - organização municipal",
      "area": "Constituição Federal",
      "stem": "O Município rege-se por lei orgânica:",
      "options": [
        {
          "letter": "A",
          "text": "votada em dois turnos, com interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal."
        },
        {
          "letter": "B",
          "text": "editada unilateralmente pelo prefeito."
        },
        {
          "letter": "C",
          "text": "aprovada pelo Congresso Nacional."
        },
        {
          "letter": "D",
          "text": "sujeita à sanção do governador."
        },
        {
          "letter": "E",
          "text": "aprovada por maioria simples em turno único."
        }
      ],
      "answer": "A",
      "explanation": "O art. 29 da Constituição prevê votação em dois turnos, interstício mínimo de dez dias e aprovação por dois terços da Câmara Municipal. A lei orgânica é promulgada pela própria Câmara."
    },
    {
      "id": "administracao-publica-027",
      "subjectId": "administracao-publica",
      "number": 27,
      "topic": "Constituição Federal - competência municipal",
      "area": "Constituição Federal",
      "stem": "É competência constitucional do Município:",
      "options": [
        {
          "letter": "A",
          "text": "emitir moeda."
        },
        {
          "letter": "B",
          "text": "legislar sobre assuntos de interesse local e suplementar a legislação federal e estadual no que couber."
        },
        {
          "letter": "C",
          "text": "declarar guerra e celebrar a paz."
        },
        {
          "letter": "D",
          "text": "manter relações com Estados estrangeiros."
        },
        {
          "letter": "E",
          "text": "legislar privativamente sobre direito penal."
        }
      ],
      "answer": "B",
      "explanation": "O art. 30 atribui aos Municípios a legislação sobre interesse local e a suplementação das normas federais e estaduais quando cabível. As demais matérias indicadas pertencem à esfera federal."
    },
    {
      "id": "administracao-publica-028",
      "subjectId": "administracao-publica",
      "number": 28,
      "topic": "Constituição Federal - princípios do art. 37",
      "area": "Constituição Federal",
      "stem": "O conjunto que reproduz os princípios expressos no caput do art. 37 da Constituição Federal é:",
      "options": [
        {
          "letter": "A",
          "text": "legalidade, hierarquia, autotutela, continuidade e eficiência."
        },
        {
          "letter": "B",
          "text": "legitimidade, pessoalidade, moralidade, sigilo e economicidade."
        },
        {
          "letter": "C",
          "text": "legalidade, impessoalidade, moralidade, publicidade e eficiência."
        },
        {
          "letter": "D",
          "text": "proporcionalidade, publicidade, supremacia, eficiência e especialidade."
        },
        {
          "letter": "E",
          "text": "legalidade, informalidade, pessoalidade, publicidade e eficácia."
        }
      ],
      "answer": "C",
      "explanation": "O conhecido conjunto “LIMPE” corresponde a legalidade, impessoalidade, moralidade, publicidade e eficiência. Outros princípios também orientam a Administração, mas não integram essa enumeração expressa."
    },
    {
      "id": "administracao-publica-029",
      "subjectId": "administracao-publica",
      "number": 29,
      "topic": "Constituição Federal - concurso público",
      "area": "Constituição Federal",
      "stem": "Conforme o art. 37, II, a investidura em cargo ou emprego público depende de aprovação prévia em concurso público, ressalvadas:",
      "options": [
        {
          "letter": "A",
          "text": "todas as contratações realizadas pelo prefeito."
        },
        {
          "letter": "B",
          "text": "as funções permanentes de natureza técnica."
        },
        {
          "letter": "C",
          "text": "as nomeações para qualquer emprego de empresa pública."
        },
        {
          "letter": "D",
          "text": "as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração."
        },
        {
          "letter": "E",
          "text": "as nomeações de parentes de agentes políticos."
        }
      ],
      "answer": "D",
      "explanation": "O concurso é a regra para cargos e empregos públicos. A ressalva do inciso II alcança cargos em comissão legalmente definidos como de livre nomeação e exoneração, destinados às atribuições de direção, chefia e assessoramento."
    },
    {
      "id": "administracao-publica-030",
      "subjectId": "administracao-publica",
      "number": 30,
      "topic": "Constituição Federal - validade do concurso",
      "area": "Constituição Federal",
      "stem": "O prazo de validade do concurso público será:",
      "options": [
        {
          "letter": "A",
          "text": "obrigatoriamente de quatro anos."
        },
        {
          "letter": "B",
          "text": "ilimitado até o preenchimento de todas as vagas."
        },
        {
          "letter": "C",
          "text": "de um ano, sem possibilidade de prorrogação."
        },
        {
          "letter": "D",
          "text": "definido livremente após a homologação, sem previsão no edital."
        },
        {
          "letter": "E",
          "text": "de até dois anos, prorrogável uma vez por igual período."
        }
      ],
      "answer": "E",
      "explanation": "Essa é a regra do art. 37, III. “Até dois anos” significa que o edital pode fixar prazo menor; a prorrogação pode ocorrer uma única vez e por período igual ao inicialmente estabelecido."
    },
    {
      "id": "administracao-publica-031",
      "subjectId": "administracao-publica",
      "number": 31,
      "topic": "Constituição Federal - funções de confiança e cargos em comissão",
      "area": "Constituição Federal",
      "stem": "Nos termos do art. 37, V, da Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "as funções de confiança são exercidas exclusivamente por servidores ocupantes de cargo efetivo, e funções de confiança e cargos em comissão destinam-se apenas às atribuições de direção, chefia e assessoramento."
        },
        {
          "letter": "B",
          "text": "funções de confiança podem ser exercidas por qualquer particular sem vínculo."
        },
        {
          "letter": "C",
          "text": "cargos em comissão destinam-se a toda atividade técnica ou operacional."
        },
        {
          "letter": "D",
          "text": "todos os cargos em comissão devem ser preenchidos exclusivamente por pessoas sem vínculo efetivo."
        },
        {
          "letter": "E",
          "text": "a lei não pode estabelecer percentual de cargos em comissão para servidores de carreira."
        }
      ],
      "answer": "A",
      "explanation": "Função de confiança é exclusiva de servidor efetivo. Os cargos em comissão serão preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei. Ambos se limitam a direção, chefia e assessoramento."
    },
    {
      "id": "administracao-publica-032",
      "subjectId": "administracao-publica",
      "number": 32,
      "topic": "Lei Orgânica de Massaranduba - Poderes municipais",
      "area": "Lei Orgânica de Massaranduba",
      "stem": "Segundo a Lei Orgânica do Município de Massaranduba, são Poderes do Município, independentes e harmônicos entre si:",
      "options": [
        {
          "letter": "A",
          "text": "Executivo, Judiciário e Ministério Público."
        },
        {
          "letter": "B",
          "text": "Legislativo e Executivo."
        },
        {
          "letter": "C",
          "text": "Legislativo, Executivo e Judiciário."
        },
        {
          "letter": "D",
          "text": "Prefeitura, Câmara e Tribunal de Contas municipal."
        },
        {
          "letter": "E",
          "text": "Executivo e Ministério Público."
        }
      ],
      "answer": "B",
      "explanation": "O art. 2º da Lei Orgânica prevê os Poderes Legislativo e Executivo. O Município não possui Poder Judiciário próprio. Independência não elimina a harmonia nem os controles recíprocos previstos no ordenamento."
    },
    {
      "id": "administracao-publica-033",
      "subjectId": "administracao-publica",
      "number": 33,
      "topic": "Lei Orgânica de Massaranduba - Câmara Municipal",
      "area": "Lei Orgânica de Massaranduba",
      "stem": "De acordo com a redação vigente do art. 13 da Lei Orgânica, a Câmara Municipal de Massaranduba é composta por:",
      "options": [
        {
          "letter": "A",
          "text": "7 vereadores."
        },
        {
          "letter": "B",
          "text": "8 vereadores."
        },
        {
          "letter": "C",
          "text": "9 vereadores."
        },
        {
          "letter": "D",
          "text": "11 vereadores."
        },
        {
          "letter": "E",
          "text": "13 vereadores."
        }
      ],
      "answer": "C",
      "explanation": "A Lei Orgânica estabelece expressamente a composição por nove vereadores, eleitos nos termos da legislação. É um ponto de literalidade local, característico de prova municipal."
    },
    {
      "id": "administracao-publica-034",
      "subjectId": "administracao-publica",
      "number": 34,
      "topic": "Lei Orgânica de Massaranduba - emenda",
      "area": "Lei Orgânica de Massaranduba",
      "stem": "Uma proposta de emenda à Lei Orgânica de Massaranduba será considerada aprovada quando obtiver:",
      "options": [
        {
          "letter": "A",
          "text": "maioria simples, em turno único."
        },
        {
          "letter": "B",
          "text": "maioria absoluta, em dois turnos consecutivos no mesmo dia."
        },
        {
          "letter": "C",
          "text": "unanimidade, com sanção do prefeito."
        },
        {
          "letter": "D",
          "text": "voto favorável de dois terços dos membros da Câmara em dois turnos, observado interstício mínimo de dez dias entre as votações."
        },
        {
          "letter": "E",
          "text": "voto favorável de três quintos, em três turnos."
        }
      ],
      "answer": "D",
      "explanation": "O art. 29, § 1º, da Lei Orgânica exige dois turnos, intervalo mínimo de dez dias e dois terços dos membros em ambos. A emenda é promulgada pela Mesa da Câmara, não sancionada pelo prefeito."
    },
    {
      "id": "administracao-publica-035",
      "subjectId": "administracao-publica",
      "number": 35,
      "topic": "Lei Orgânica de Massaranduba - iniciativa popular",
      "area": "Lei Orgânica de Massaranduba",
      "stem": "A iniciativa popular de projeto de lei municipal pode ser exercida mediante apresentação à Câmara de projeto subscrito por, no mínimo:",
      "options": [
        {
          "letter": "A",
          "text": "1% da população total."
        },
        {
          "letter": "B",
          "text": "2% dos servidores municipais."
        },
        {
          "letter": "C",
          "text": "3% dos moradores maiores de 16 anos."
        },
        {
          "letter": "D",
          "text": "10% dos vereadores."
        },
        {
          "letter": "E",
          "text": "5% do eleitorado do Município, devidamente identificado na forma da Lei Orgânica."
        }
      ],
      "answer": "E",
      "explanation": "O art. 30, § 2º, adota o mínimo de cinco por cento do eleitorado, com identificação por assinatura, número do título, zona e seção eleitoral."
    },
    {
      "id": "administracao-publica-036",
      "subjectId": "administracao-publica",
      "number": 36,
      "topic": "LC nº 12/2005 - conceito de servidor",
      "area": "LC nº 12/2005",
      "stem": "Para os efeitos do Estatuto dos Servidores Públicos Municipais de Massaranduba, servidor é:",
      "options": [
        {
          "letter": "A",
          "text": "a pessoa legalmente investida em cargo público."
        },
        {
          "letter": "B",
          "text": "qualquer pessoa que preste serviço eventual ao Município."
        },
        {
          "letter": "C",
          "text": "somente o ocupante de cargo em comissão."
        },
        {
          "letter": "D",
          "text": "exclusivamente o agente político eleito."
        },
        {
          "letter": "E",
          "text": "toda pessoa contratada por empresa terceirizada."
        }
      ],
      "answer": "A",
      "explanation": "Essa é a definição do art. 2º da LC nº 12/2005. O Estatuto também define cargo público como o conjunto de competências e responsabilidades previstas na estrutura organizacional e atribuídas ao titular."
    },
    {
      "id": "administracao-publica-037",
      "subjectId": "administracao-publica",
      "number": 37,
      "topic": "LC nº 12/2005 - formas de provimento",
      "area": "LC nº 12/2005",
      "stem": "Assinale a alternativa que NÃO corresponde a forma de provimento enumerada no art. 13 do Estatuto de Massaranduba.",
      "options": [
        {
          "letter": "A",
          "text": "Nomeação."
        },
        {
          "letter": "B",
          "text": "Transferência."
        },
        {
          "letter": "C",
          "text": "Readaptação."
        },
        {
          "letter": "D",
          "text": "Reversão."
        },
        {
          "letter": "E",
          "text": "Recondução."
        }
      ],
      "answer": "B",
      "explanation": "O Estatuto enumera nomeação, promoção, readaptação, reversão, aproveitamento, recondução e reintegração. Transferência não aparece nessa lista de formas de provimento."
    },
    {
      "id": "administracao-publica-038",
      "subjectId": "administracao-publica",
      "number": 38,
      "topic": "LC nº 12/2005 - investidura",
      "area": "LC nº 12/2005",
      "stem": "Segundo o Estatuto dos Servidores de Massaranduba, a investidura em cargo público ocorre com:",
      "options": [
        {
          "letter": "A",
          "text": "a inscrição no concurso."
        },
        {
          "letter": "B",
          "text": "a homologação do resultado."
        },
        {
          "letter": "C",
          "text": "a posse."
        },
        {
          "letter": "D",
          "text": "o primeiro pagamento."
        },
        {
          "letter": "E",
          "text": "o término do estágio probatório."
        }
      ],
      "answer": "C",
      "explanation": "O art. 17 determina que a investidura ocorre com a posse. Nomeação é forma de provimento; posse é o ato de aceitação e investidura; exercício é o efetivo desempenho das atribuições."
    },
    {
      "id": "administracao-publica-039",
      "subjectId": "administracao-publica",
      "number": 39,
      "topic": "LC nº 12/2005 - prazo para posse",
      "area": "LC nº 12/2005",
      "stem": "A posse ocorrerá, em regra, no prazo de:",
      "options": [
        {
          "letter": "A",
          "text": "5 dias da homologação, sem prorrogação."
        },
        {
          "letter": "B",
          "text": "10 dias da convocação, prorrogáveis por 5 dias."
        },
        {
          "letter": "C",
          "text": "30 dias da nomeação, sem prorrogação."
        },
        {
          "letter": "D",
          "text": "15 dias da publicação do ato de nomeação, permitida prorrogação por igual prazo a requerimento do nomeado."
        },
        {
          "letter": "E",
          "text": "45 dias da publicação, automaticamente prorrogados."
        }
      ],
      "answer": "D",
      "explanation": "Essa é a regra do art. 25. Se a posse não ocorrer no prazo por omissão do interessado, a nomeação será tornada sem efeito e será declarado extinto o direito do nomeado."
    },
    {
      "id": "administracao-publica-040",
      "subjectId": "administracao-publica",
      "number": 40,
      "topic": "LC nº 12/2005 - exercício",
      "area": "LC nº 12/2005",
      "stem": "O servidor empossado que não entrar em exercício no prazo legal será exonerado. Segundo o Estatuto, esse prazo, contado da posse nos casos comuns, é de:",
      "options": [
        {
          "letter": "A",
          "text": "2 dias."
        },
        {
          "letter": "B",
          "text": "3 dias."
        },
        {
          "letter": "C",
          "text": "10 dias."
        },
        {
          "letter": "D",
          "text": "15 dias."
        },
        {
          "letter": "E",
          "text": "5 dias."
        }
      ],
      "answer": "E",
      "explanation": "Os arts. 27 e 30 estabelecem o prazo de cinco dias para entrada em exercício. O art. 30 admite prorrogação por mais cinco dias, mediante solicitação do interessado e a juízo da autoridade competente."
    },
    {
      "id": "administracao-publica-041",
      "subjectId": "administracao-publica",
      "number": 41,
      "topic": "LC nº 12/2005 - readaptação",
      "area": "LC nº 12/2005",
      "stem": "Readaptação é:",
      "options": [
        {
          "letter": "A",
          "text": "a investidura do servidor em cargo de atribuições e responsabilidades compatíveis com limitação física ou mental verificada em inspeção médica."
        },
        {
          "letter": "B",
          "text": "o retorno do aposentado por invalidez à atividade."
        },
        {
          "letter": "C",
          "text": "o retorno do servidor estável ao cargo anteriormente ocupado."
        },
        {
          "letter": "D",
          "text": "a reinvestidura após invalidação da demissão."
        },
        {
          "letter": "E",
          "text": "a promoção automática para cargo de maior vencimento."
        }
      ],
      "answer": "A",
      "explanation": "Essa é a definição do art. 61. A readaptação deve ocorrer em cargo de atribuições afins e respeitar a habilitação exigida; não se confunde com reversão, recondução ou reintegração."
    },
    {
      "id": "administracao-publica-042",
      "subjectId": "administracao-publica",
      "number": 42,
      "topic": "LC nº 12/2005 - reversão",
      "area": "LC nº 12/2005",
      "stem": "Nos termos do Estatuto, reversão é:",
      "options": [
        {
          "letter": "A",
          "text": "o deslocamento do servidor entre repartições."
        },
        {
          "letter": "B",
          "text": "o retorno à atividade do servidor aposentado por invalidez quando declarados insubsistentes os motivos da aposentadoria."
        },
        {
          "letter": "C",
          "text": "a volta do servidor demitido após invalidação da demissão."
        },
        {
          "letter": "D",
          "text": "o retorno ao cargo anterior por reprovação em estágio probatório de outro cargo."
        },
        {
          "letter": "E",
          "text": "a disponibilidade remunerada por extinção do cargo."
        }
      ],
      "answer": "B",
      "explanation": "A definição está no art. 65. A reversão depende de exame médico e de cargo vago e ocorre, preferencialmente, no mesmo cargo ou no resultante de sua transformação."
    },
    {
      "id": "administracao-publica-043",
      "subjectId": "administracao-publica",
      "number": 43,
      "topic": "LC nº 12/2005 - recondução",
      "area": "LC nº 12/2005",
      "stem": "Constitui hipótese de recondução prevista no Estatuto:",
      "options": [
        {
          "letter": "A",
          "text": "aquisição de nova escolaridade."
        },
        {
          "letter": "B",
          "text": "aposentadoria voluntária."
        },
        {
          "letter": "C",
          "text": "inabilitação em estágio probatório relativo a outro cargo."
        },
        {
          "letter": "D",
          "text": "promoção por merecimento."
        },
        {
          "letter": "E",
          "text": "licença para interesse particular."
        }
      ],
      "answer": "C",
      "explanation": "A recondução é o retorno do servidor estável ao cargo anteriormente ocupado e pode decorrer de inabilitação no estágio probatório de outro cargo, reintegração do ocupante anterior ou constatação de transferência indevida."
    },
    {
      "id": "administracao-publica-044",
      "subjectId": "administracao-publica",
      "number": 44,
      "topic": "LC nº 12/2005 - penalidades disciplinares",
      "area": "LC nº 12/2005",
      "stem": "NÃO integra a relação de penas disciplinares do art. 178 do Estatuto:",
      "options": [
        {
          "letter": "A",
          "text": "advertência verbal ou escrita."
        },
        {
          "letter": "B",
          "text": "suspensão."
        },
        {
          "letter": "C",
          "text": "demissão."
        },
        {
          "letter": "D",
          "text": "redução definitiva de vencimento como penalidade autônoma."
        },
        {
          "letter": "E",
          "text": "destituição de função de confiança."
        }
      ],
      "answer": "D",
      "explanation": "O Estatuto enumera advertência, suspensão, demissão, cassação da disponibilidade, destituição de cargo em comissão e destituição de função de confiança. Não prevê redução definitiva de vencimento como pena autônoma."
    },
    {
      "id": "administracao-publica-045",
      "subjectId": "administracao-publica",
      "number": 45,
      "topic": "LC nº 12/2005 - suspensão",
      "area": "LC nº 12/2005",
      "stem": "A suspensão disciplinar, nas hipóteses previstas no Estatuto de Massaranduba, não poderá exceder:",
      "options": [
        {
          "letter": "A",
          "text": "15 dias."
        },
        {
          "letter": "B",
          "text": "20 dias."
        },
        {
          "letter": "C",
          "text": "30 dias."
        },
        {
          "letter": "D",
          "text": "45 dias."
        },
        {
          "letter": "E",
          "text": "60 dias."
        }
      ],
      "answer": "E",
      "explanation": "O art. 180 fixa o máximo de 60 dias. Quando houver conveniência para o serviço, a suspensão pode ser convertida em multa de 50% por dia de remuneração, permanecendo o servidor em serviço."
    },
    {
      "id": "administracao-publica-046",
      "subjectId": "administracao-publica",
      "number": 46,
      "topic": "LC nº 190/2023 - objeto da lei",
      "area": "LC nº 190/2023",
      "stem": "A Lei Complementar Municipal nº 190/2023 tem como objeto central:",
      "options": [
        {
          "letter": "A",
          "text": "o quadro de cargos, os planos de carreira e a remuneração dos servidores do quadro efetivo do Poder Executivo de Massaranduba."
        },
        {
          "letter": "B",
          "text": "exclusivamente o regime disciplinar dos vereadores."
        },
        {
          "letter": "C",
          "text": "a criação do Poder Judiciário municipal."
        },
        {
          "letter": "D",
          "text": "apenas as contratações terceirizadas do Município."
        },
        {
          "letter": "E",
          "text": "o regime eleitoral municipal."
        }
      ],
      "answer": "A",
      "explanation": "A própria ementa delimita a norma: quadro de cargos, planos de carreira e remuneração do quadro efetivo do Executivo municipal. O regime jurídico geral e disciplinar dos servidores é tratado principalmente pela LC nº 12/2005."
    },
    {
      "id": "administracao-publica-047",
      "subjectId": "administracao-publica",
      "number": 47,
      "topic": "LC nº 190/2023 - gestão da carreira",
      "area": "LC nº 190/2023",
      "stem": "A Comissão de Gestão de Carreira do Servidor do Quadro Geral, criada com fundamento na LC nº 190/2023, tem por finalidade:",
      "options": [
        {
          "letter": "A",
          "text": "julgar crimes praticados por servidores."
        },
        {
          "letter": "B",
          "text": "desenvolver e acompanhar a ascensão profissional dos servidores efetivos do Poder Executivo municipal."
        },
        {
          "letter": "C",
          "text": "substituir integralmente o setor de recursos humanos."
        },
        {
          "letter": "D",
          "text": "nomear livremente servidores para cargos efetivos."
        },
        {
          "letter": "E",
          "text": "elaborar a Lei Orgânica do Município."
        }
      ],
      "answer": "B",
      "explanation": "A comissão se vincula à implementação e ao acompanhamento da carreira. Não exerce função jurisdicional, não dispensa concurso e não recebe competência para substituir todos os órgãos de gestão de pessoal."
    },
    {
      "id": "administracao-publica-048",
      "subjectId": "administracao-publica",
      "number": 48,
      "topic": "LC nº 190/2023 - estrutura do quadro efetivo",
      "area": "LC nº 190/2023",
      "stem": "No plano de cargos instituído pela LC nº 190/2023, as categorias funcionais do Quadro Geral de Cargos Efetivos do Poder Executivo são organizadas:",
      "options": [
        {
          "letter": "A",
          "text": "sem denominação ou referência remuneratória definida."
        },
        {
          "letter": "B",
          "text": "exclusivamente por decisões verbais de cada chefia."
        },
        {
          "letter": "C",
          "text": "em classes, com definição legal de elementos como quantidade de cargos, denominação e padrões referenciais de vencimento."
        },
        {
          "letter": "D",
          "text": "como cargos políticos eletivos."
        },
        {
          "letter": "E",
          "text": "sem relação com requisitos ou atribuições dos cargos."
        }
      ],
      "answer": "C",
      "explanation": "A lei estrutura o quadro efetivo por categorias e classes e contém quadros e anexos com dados dos cargos. Mudanças em vagas, denominações, carga horária ou padrões dependem do instrumento normativo adequado, não de simples ordem informal."
    },
    {
      "id": "administracao-publica-049",
      "subjectId": "administracao-publica",
      "number": 49,
      "topic": "LC nº 190/2023 - âmbito de aplicação",
      "area": "LC nº 190/2023",
      "stem": "Assinale a situação diretamente abrangida pelo núcleo da LC nº 190/2023.",
      "options": [
        {
          "letter": "A",
          "text": "Definição das penas aplicáveis a crimes federais."
        },
        {
          "letter": "B",
          "text": "Organização dos partidos políticos."
        },
        {
          "letter": "C",
          "text": "Estruturação da carreira de magistrados estaduais."
        },
        {
          "letter": "D",
          "text": "Organização do quadro efetivo e do desenvolvimento funcional de servidores do Poder Executivo de Massaranduba."
        },
        {
          "letter": "E",
          "text": "Regulamentação de associações privadas."
        }
      ],
      "answer": "D",
      "explanation": "A norma é municipal e se dirige ao quadro efetivo do Poder Executivo. As demais matérias pertencem a outros ramos ou entes e não correspondem ao objeto do plano de cargos e carreira local."
    },
    {
      "id": "administracao-publica-050",
      "subjectId": "administracao-publica",
      "number": 50,
      "topic": "Legislação municipal - relação entre as normas",
      "area": "Legislação municipal",
      "stem": "Quanto à relação entre a LC nº 12/2005 e a LC nº 190/2023, assinale a alternativa correta.",
      "options": [
        {
          "letter": "A",
          "text": "A LC nº 190/2023 é a Constituição do Município."
        },
        {
          "letter": "B",
          "text": "As duas leis tratam exclusivamente do processo legislativo da Câmara."
        },
        {
          "letter": "C",
          "text": "A LC nº 12/2005 disciplina apenas vencimentos, sem regras de provimento ou responsabilidade."
        },
        {
          "letter": "D",
          "text": "A LC nº 190/2023 revogou automaticamente todos os deveres e proibições do Estatuto."
        },
        {
          "letter": "E",
          "text": "A LC nº 12/2005 estabelece o regime estatutário, incluindo provimento, direitos, deveres e disciplina; a LC nº 190/2023 estrutura cargos, carreira e remuneração do quadro efetivo do Executivo."
        }
      ],
      "answer": "E",
      "explanation": "As normas possuem objetos complementares. Para a prova, é essencial separar as regras gerais da vida funcional e disciplinar, concentradas no Estatuto, da estrutura de cargos, evolução na carreira e remuneração tratada pelo plano de carreira.\n\nFONTES NORMATIVAS PRINCIPAIS\n\n- Constituição da República Federativa do Brasil, especialmente arts. 1º a 41. - Lei Orgânica do Município de Massaranduba, em sua redação compilada. - Lei Complementar Municipal nº 12/2005, Estatuto dos Servidores Públicos. - Lei Complementar Municipal nº 190/2023 e alterações, plano de cargos e carreira. - Edital de Concurso Público nº 001/2026 do Município de Massaranduba."
    },
    {
      "id": "portugues-001",
      "subjectId": "portugues",
      "number": 1,
      "topic": "Interpretação de texto - ideia central",
      "area": "Interpretação de texto",
      "stem": "Leia o texto:\n\nNa assistência à saúde, informar não equivale apenas a transmitir dados. Uma orientação tecnicamente correta pode fracassar quando ignora as dúvidas, as condições de vida e o repertório do paciente. A comunicação eficaz exige que o profissional verifique se foi compreendido e adapte a linguagem sem deformar o conteúdo científico.\n\nA ideia central do texto é:",
      "options": [
        {
          "letter": "A",
          "text": "O conteúdo científico deve ser substituído por explicações informais."
        },
        {
          "letter": "B",
          "text": "A comunicação em saúde depende exclusivamente do conhecimento técnico."
        },
        {
          "letter": "C",
          "text": "Transmitir dados corretos é suficiente para garantir a adesão do paciente."
        },
        {
          "letter": "D",
          "text": "A comunicação eficaz combina precisão técnica, adaptação da linguagem e verificação da compreensão."
        },
        {
          "letter": "E",
          "text": "As condições de vida do paciente tornam desnecessária a orientação técnica."
        }
      ],
      "answer": "D",
      "explanation": "O texto distingue a simples transmissão de informações da comunicação efetiva. Esta preserva a precisão científica, mas considera o interlocutor e confirma a compreensão. As demais alternativas reduzem ou contradizem essa tese."
    },
    {
      "id": "portugues-002",
      "subjectId": "portugues",
      "number": 2,
      "topic": "Interpretação de texto - inferência",
      "area": "Interpretação de texto",
      "stem": "Leia o fragmento:\n\nO estoque permaneceu dentro do limite financeiro previsto. Ainda assim, três medicamentos essenciais faltaram durante parte do mês, enquanto outros produtos venceram sem utilização.\n\nÉ possível inferir corretamente que:",
      "options": [
        {
          "letter": "A",
          "text": "O controle financeiro, isoladamente, não assegurou uma gestão eficiente do estoque."
        },
        {
          "letter": "B",
          "text": "A falta dos medicamentos ocorreu necessariamente por insuficiência de verba."
        },
        {
          "letter": "C",
          "text": "Todos os produtos adquiridos eram desnecessários."
        },
        {
          "letter": "D",
          "text": "O limite financeiro foi ultrapassado pela perda dos produtos vencidos."
        },
        {
          "letter": "E",
          "text": "A unidade não realizou qualquer controle de estoque."
        }
      ],
      "answer": "A",
      "explanation": "O texto mostra simultaneamente desabastecimento e vencimento, apesar do respeito ao orçamento. Isso permite concluir que o controle financeiro não bastou. As causas específicas não são informadas; por isso, B, C, D e E fazem afirmações que excedem o fragmento."
    },
    {
      "id": "portugues-003",
      "subjectId": "portugues",
      "number": 3,
      "topic": "Interpretação de texto - pressuposto",
      "area": "Interpretação de texto",
      "stem": "Na frase “A unidade finalmente retomou o acompanhamento mensal dos pacientes”, o advérbio “finalmente” pressupõe que:",
      "options": [
        {
          "letter": "A",
          "text": "a retomada era aguardada ou ocorreu depois de alguma demora."
        },
        {
          "letter": "B",
          "text": "o acompanhamento mensal jamais havia sido realizado."
        },
        {
          "letter": "C",
          "text": "o acompanhamento passou a ser desnecessário."
        },
        {
          "letter": "D",
          "text": "a unidade realizará acompanhamento exclusivamente naquele mês."
        },
        {
          "letter": "E",
          "text": "os pacientes rejeitaram a retomada do serviço."
        }
      ],
      "answer": "A",
      "explanation": "“Finalmente” marca a concretização de algo esperado ou demorado. A forma verbal “retomou” ainda indica que a atividade já existira antes, o que invalida A. As demais informações não estão pressupostas."
    },
    {
      "id": "portugues-004",
      "subjectId": "portugues",
      "number": 4,
      "topic": "Interpretação de texto - informação explícita",
      "area": "Interpretação de texto",
      "stem": "Leia:\n\nO relatório não atribuiu o aumento do consumo a uma causa única. Indicou a ampliação do número de usuários, a sazonalidade de algumas doenças e a mudança do protocolo terapêutico como fatores que, em conjunto, podem explicar o resultado.\n\nDe acordo com o texto:",
      "options": [
        {
          "letter": "A",
          "text": "a mudança do protocolo foi a causa comprovada e exclusiva do aumento."
        },
        {
          "letter": "B",
          "text": "a sazonalidade foi descartada por falta de evidências."
        },
        {
          "letter": "C",
          "text": "o relatório apresentou uma explicação multifatorial e cautelosa."
        },
        {
          "letter": "D",
          "text": "o aumento do número de usuários não teve relação com o consumo."
        },
        {
          "letter": "E",
          "text": "o relatório concluiu que não existia explicação possível."
        }
      ],
      "answer": "C",
      "explanation": "O relatório reúne vários fatores e emprega “podem explicar”, marca de cautela. A, B, D e E contradizem informações expressas no fragmento."
    },
    {
      "id": "portugues-005",
      "subjectId": "portugues",
      "number": 5,
      "topic": "Interpretação de texto - tese e argumento",
      "area": "Interpretação de texto",
      "stem": "Leia:\n\nOs indicadores de produtividade são úteis, mas não devem ser interpretados sem contexto. Uma unidade que atende casos mais complexos pode realizar menos procedimentos e, ainda assim, produzir maior benefício clínico. Por isso, a comparação puramente numérica pode conduzir a avaliações injustas.\n\nQual alternativa apresenta, respectivamente, a tese e o argumento utilizado para sustentá-la?",
      "options": [
        {
          "letter": "A",
          "text": "Indicadores exigem contextualização; quantidade de procedimentos não traduz necessariamente o benefício produzido."
        },
        {
          "letter": "B",
          "text": "Procedimentos numerosos geram maior benefício; casos complexos são raros."
        },
        {
          "letter": "C",
          "text": "Indicadores são inúteis; toda comparação entre unidades deve ser abolida."
        },
        {
          "letter": "D",
          "text": "Casos complexos devem ser recusados; eles reduzem a produtividade registrada."
        },
        {
          "letter": "E",
          "text": "Avaliações são sempre injustas; os indicadores não contêm dados numéricos."
        }
      ],
      "answer": "A",
      "explanation": "A primeira frase estabelece a tese: indicadores são úteis, porém precisam de contexto. O exemplo da unidade com casos complexos demonstra que quantidade e benefício não são equivalentes. As demais alternativas deformam o argumento."
    },
    {
      "id": "portugues-006",
      "subjectId": "portugues",
      "number": 6,
      "topic": "Interpretação de texto - sentido de expressão",
      "area": "Interpretação de texto",
      "stem": "Na frase “A publicação da norma foi apenas o primeiro passo; sua aplicação ainda encontra gargalos”, o termo “gargalos” significa, no contexto:",
      "options": [
        {
          "letter": "A",
          "text": "pontos de dificuldade ou limitação do processo."
        },
        {
          "letter": "B",
          "text": "dispositivos que ampliam automaticamente a eficiência."
        },
        {
          "letter": "C",
          "text": "trechos da norma redigidos em linguagem figurada."
        },
        {
          "letter": "D",
          "text": "agentes responsáveis pela publicação oficial."
        },
        {
          "letter": "E",
          "text": "recursos financeiros já garantidos para a execução."
        }
      ],
      "answer": "A",
      "explanation": "“Gargalo” é empregado metaforicamente para indicar um obstáculo ou ponto que restringe o fluxo de um processo. O contexto contrapõe publicação e dificuldade de aplicação."
    },
    {
      "id": "portugues-007",
      "subjectId": "portugues",
      "number": 7,
      "topic": "Interpretação - relação entre enunciados",
      "area": "Interpretação",
      "stem": "Leia:\n\nO número de notificações de eventos adversos aumentou após a capacitação da equipe. Esse crescimento, isoladamente, não demonstra piora na segurança, pois pode refletir maior capacidade de reconhecer e registrar ocorrências antes subnotificadas.\n\nA segunda frase:",
      "options": [
        {
          "letter": "A",
          "text": "relativiza uma interpretação negativa imediata do aumento observado."
        },
        {
          "letter": "B",
          "text": "elimina a possibilidade de existirem eventos adversos reais."
        },
        {
          "letter": "C",
          "text": "contradiz integralmente o dado apresentado na primeira."
        },
        {
          "letter": "D",
          "text": "comprova que todos os eventos anteriores foram omitidos intencionalmente."
        },
        {
          "letter": "E",
          "text": "conclui que a capacitação aumentou a ocorrência de danos."
        }
      ],
      "answer": "A",
      "explanation": "A segunda frase oferece outra explicação possível para o aumento das notificações. Ela não nega o dado nem comprova uma causa; apenas impede a conclusão automática de que houve piora."
    },
    {
      "id": "portugues-008",
      "subjectId": "portugues",
      "number": 8,
      "topic": "Interpretação - finalidade textual",
      "area": "Interpretação",
      "stem": "Leia:\n\nAntes de utilizar o produto, confira o nome do paciente, a concentração, a via de administração e o prazo de validade. Em caso de divergência, interrompa o procedimento e comunique o responsável.\n\nPredomina nesse fragmento a finalidade de:",
      "options": [
        {
          "letter": "A",
          "text": "narrar um incidente ocorrido durante a administração."
        },
        {
          "letter": "B",
          "text": "defender uma opinião controversa sobre segurança."
        },
        {
          "letter": "C",
          "text": "descrever subjetivamente o ambiente de trabalho."
        },
        {
          "letter": "D",
          "text": "instruir o leitor acerca de uma sequência de condutas."
        },
        {
          "letter": "E",
          "text": "divulgar comercialmente determinado produto."
        }
      ],
      "answer": "D",
      "explanation": "Os verbos no imperativo — “confira”, “interrompa” e “comunique” — orientam ações. Trata-se de finalidade injuntiva, voltada à execução de uma conduta."
    },
    {
      "id": "portugues-009",
      "subjectId": "portugues",
      "number": 9,
      "topic": "Interpretação - ironia",
      "area": "Interpretação",
      "stem": "Após esperar três horas por um atendimento que havia sido marcado, o usuário comentou: “Que pontualidade exemplar!”\n\nO efeito de sentido decorre:",
      "options": [
        {
          "letter": "A",
          "text": "da ironia produzida pela oposição entre o elogio e a situação vivida."
        },
        {
          "letter": "B",
          "text": "do emprego literal do adjetivo “exemplar”."
        },
        {
          "letter": "C",
          "text": "de uma comparação explícita entre dois serviços."
        },
        {
          "letter": "D",
          "text": "da ausência de qualquer avaliação sobre o atendimento."
        },
        {
          "letter": "E",
          "text": "de uma ordem dirigida aos responsáveis pelo serviço."
        }
      ],
      "answer": "A",
      "explanation": "O enunciado elogia a pontualidade em uma situação marcada por longo atraso. A incompatibilidade entre o sentido literal e o contexto produz ironia."
    },
    {
      "id": "portugues-010",
      "subjectId": "portugues",
      "number": 10,
      "topic": "Coesão referencial",
      "area": "Coesão referencial",
      "stem": "Leia:\n\nA comissão analisou as propostas apresentadas pelos fornecedores e encaminhou as que atendiam aos requisitos técnicos para a etapa seguinte.\n\nO pronome “as” retoma:",
      "options": [
        {
          "letter": "A",
          "text": "as propostas."
        },
        {
          "letter": "B",
          "text": "os fornecedores."
        },
        {
          "letter": "C",
          "text": "a comissão."
        },
        {
          "letter": "D",
          "text": "os requisitos técnicos."
        },
        {
          "letter": "E",
          "text": "a etapa seguinte."
        }
      ],
      "answer": "A",
      "explanation": "“As” é pronome demonstrativo substantivado equivalente a “aquelas”: a comissão encaminhou aquelas propostas que atendiam aos requisitos."
    },
    {
      "id": "portugues-011",
      "subjectId": "portugues",
      "number": 11,
      "topic": "Coesão sequencial - conectivos",
      "area": "Coesão sequencial",
      "stem": "Assinale a alternativa que completa corretamente o período:\n\n“O medicamento estava disponível no almoxarifado; ________, não pôde ser dispensado, porque o lote se encontrava bloqueado para investigação.”",
      "options": [
        {
          "letter": "A",
          "text": "contudo"
        },
        {
          "letter": "B",
          "text": "além disso"
        },
        {
          "letter": "C",
          "text": "portanto"
        },
        {
          "letter": "D",
          "text": "por conseguinte"
        },
        {
          "letter": "E",
          "text": "assim"
        }
      ],
      "answer": "A",
      "explanation": "Há oposição entre disponibilidade física e impossibilidade de dispensação. “Contudo” é conectivo adversativo. “Portanto”, “por conseguinte” e “assim” exprimem conclusão; “além disso”, adição."
    },
    {
      "id": "portugues-012",
      "subjectId": "portugues",
      "number": 12,
      "topic": "Coerência textual",
      "area": "Coerência textual",
      "stem": "Assinale o enunciado coerente:",
      "options": [
        {
          "letter": "A",
          "text": "Embora o relatório tenha sido concluído, por isso a equipe ainda o redigirá."
        },
        {
          "letter": "B",
          "text": "O programa reduziu as perdas; entretanto, os dados indicaram diminuição do desperdício."
        },
        {
          "letter": "C",
          "text": "A demanda aumentou, razão pela qual foi necessário rever a programação de compras."
        },
        {
          "letter": "D",
          "text": "A capacitação foi cancelada, apesar de não ter sido realizada por causa do cancelamento."
        },
        {
          "letter": "E",
          "text": "O estoque acabou antes do previsto, portanto permaneceu disponível durante todo o período."
        }
      ],
      "answer": "C",
      "explanation": "O aumento da demanda pode justificar a revisão da programação, e o conectivo causal-conclusivo está bem empregado. Em B, “entretanto” introduz uma ideia equivalente, não oposta. As demais apresentam contradições ou conexão sintática inadequada."
    },
    {
      "id": "portugues-013",
      "subjectId": "portugues",
      "number": 13,
      "topic": "Intertextualidade",
      "area": "Intertextualidade",
      "stem": "Uma campanha de uso racional de medicamentos utiliza a frase “No meio do caminho tinha uma interação”, retomando a estrutura de conhecido poema de Carlos Drummond de Andrade. Esse procedimento constitui:",
      "options": [
        {
          "letter": "A",
          "text": "intertextualidade por alusão e transformação de texto anterior."
        },
        {
          "letter": "B",
          "text": "ambiguidade exclusivamente lexical."
        },
        {
          "letter": "C",
          "text": "discurso indireto livre."
        },
        {
          "letter": "D",
          "text": "estrangeirismo sem adaptação."
        },
        {
          "letter": "E",
          "text": "descrição objetiva de uma paisagem."
        }
      ],
      "answer": "A",
      "explanation": "A campanha recupera uma construção reconhecível de outro texto e a transforma para produzir novo sentido. Isso caracteriza intertextualidade."
    },
    {
      "id": "portugues-014",
      "subjectId": "portugues",
      "number": 14,
      "topic": "Modalização",
      "area": "Modalização",
      "stem": "Em “Os resultados provavelmente refletem uma combinação de fatores”, o termo “provavelmente”:",
      "options": [
        {
          "letter": "A",
          "text": "apresenta a conclusão como certeza absoluta."
        },
        {
          "letter": "B",
          "text": "transforma o período em pergunta indireta."
        },
        {
          "letter": "C",
          "text": "marca uma ordem dirigida ao leitor."
        },
        {
          "letter": "D",
          "text": "elimina a responsabilidade do autor pela afirmação."
        },
        {
          "letter": "E",
          "text": "indica avaliação de possibilidade por parte do enunciador."
        }
      ],
      "answer": "E",
      "explanation": "O advérbio modalizador reduz o grau de certeza e apresenta a explicação como provável, não definitiva."
    },
    {
      "id": "portugues-015",
      "subjectId": "portugues",
      "number": 15,
      "topic": "Sintaxe - sujeito",
      "area": "Sintaxe",
      "stem": "Assinale a alternativa em que o sujeito da oração está corretamente indicado:",
      "options": [
        {
          "letter": "A",
          "text": "“Faltaram medicamentos na unidade.” — sujeito: “na unidade”."
        },
        {
          "letter": "B",
          "text": "“Houve reclamações durante a semana.” — sujeito: “reclamações”."
        },
        {
          "letter": "C",
          "text": "“Chegaram ontem os novos lotes.” — sujeito: “os novos lotes”."
        },
        {
          "letter": "D",
          "text": "“Precisa-se de profissionais experientes.” — sujeito: “profissionais experientes”."
        },
        {
          "letter": "E",
          "text": "“Faz dois meses que o sistema mudou.” — sujeito: “dois meses”."
        }
      ],
      "answer": "C",
      "explanation": "Em C, “os novos lotes” é sujeito posposto, com o qual o verbo concorda. “Haver” no sentido de existir e “fazer” indicando tempo são impessoais. Em “precisa-se de”, o “se” indetermina o sujeito; “de profissionais” é complemento. Em A, “medicamentos” é o sujeito."
    },
    {
      "id": "portugues-016",
      "subjectId": "portugues",
      "number": 16,
      "topic": "Sintaxe - predicação verbal",
      "area": "Sintaxe",
      "stem": "Na oração “A comissão considerou inadequada a proposta”, os termos “a proposta” e “inadequada” exercem, respectivamente, as funções de:",
      "options": [
        {
          "letter": "A",
          "text": "sujeito e predicativo do sujeito."
        },
        {
          "letter": "B",
          "text": "agente da passiva e objeto direto."
        },
        {
          "letter": "C",
          "text": "objeto indireto e adjunto adnominal."
        },
        {
          "letter": "D",
          "text": "complemento nominal e predicativo do sujeito."
        },
        {
          "letter": "E",
          "text": "objeto direto e predicativo do objeto."
        }
      ],
      "answer": "E",
      "explanation": "Quem considera, considera algo: “a proposta” é objeto direto. “Inadequada” atribui uma característica ao objeto durante o julgamento, sendo predicativo do objeto."
    },
    {
      "id": "portugues-017",
      "subjectId": "portugues",
      "number": 17,
      "topic": "Sintaxe - complemento nominal e adjunto adnominal",
      "area": "Sintaxe",
      "stem": "Assinale a alternativa em que o termo destacado funciona como complemento nominal:",
      "options": [
        {
          "letter": "A",
          "text": "A análise **do farmacêutico** foi entregue ontem."
        },
        {
          "letter": "B",
          "text": "O estoque **da unidade** foi conferido."
        },
        {
          "letter": "C",
          "text": "O parecer **da comissão** foi favorável."
        },
        {
          "letter": "D",
          "text": "A orientação **aos pacientes** deve ser clara."
        },
        {
          "letter": "E",
          "text": "A decisão **do diretor** foi comunicada."
        }
      ],
      "answer": "D",
      "explanation": "“Aos pacientes” completa o sentido do nome abstrato “orientação” e designa o alvo da ação de orientar. Nos demais casos, os termos destacados têm valor de agente, possuidor ou especificação e funcionam como adjuntos adnominais."
    },
    {
      "id": "portugues-018",
      "subjectId": "portugues",
      "number": 18,
      "topic": "Sintaxe - voz passiva",
      "area": "Sintaxe",
      "stem": "A transformação correta de “A equipe registrou os eventos adversos” para a voz passiva analítica é:",
      "options": [
        {
          "letter": "A",
          "text": "Registraram-se a equipe e os eventos adversos."
        },
        {
          "letter": "B",
          "text": "Registrou-se os eventos adversos pela equipe."
        },
        {
          "letter": "C",
          "text": "A equipe foi registrada pelos eventos adversos."
        },
        {
          "letter": "D",
          "text": "Os eventos adversos haviam registrado a equipe."
        },
        {
          "letter": "E",
          "text": "Os eventos adversos foram registrados pela equipe."
        }
      ],
      "answer": "E",
      "explanation": "O objeto direto da ativa torna-se sujeito paciente; o verbo assume “ser + particípio”, e o sujeito da ativa torna-se agente da passiva. Mantém-se o pretérito perfeito: “registrou” → “foram registrados”."
    },
    {
      "id": "portugues-019",
      "subjectId": "portugues",
      "number": 19,
      "topic": "Sintaxe - oração subordinada",
      "area": "Sintaxe",
      "stem": "No período “Embora o estoque estivesse regular, a equipe manteve o monitoramento diário”, a oração iniciada por “Embora” exprime:",
      "options": [
        {
          "letter": "A",
          "text": "causa."
        },
        {
          "letter": "B",
          "text": "consequência."
        },
        {
          "letter": "C",
          "text": "finalidade."
        },
        {
          "letter": "D",
          "text": "condição."
        },
        {
          "letter": "E",
          "text": "concessão."
        }
      ],
      "answer": "E",
      "explanation": "A regularidade do estoque poderia levar à redução do monitoramento, mas isso não ocorreu. “Embora” introduz circunstância concessiva."
    },
    {
      "id": "portugues-020",
      "subjectId": "portugues",
      "number": 20,
      "topic": "Sintaxe - oração adjetiva",
      "area": "Sintaxe",
      "stem": "Compare:\n\nI. Os servidores que participaram do treinamento receberam certificado. II. Os servidores, que participaram do treinamento, receberam certificado.\n\nAssinale a interpretação correta:",
      "options": [
        {
          "letter": "A",
          "text": "Em I, afirma-se que todos os servidores participaram do treinamento."
        },
        {
          "letter": "B",
          "text": "Em II, a oração entre vírgulas restringe o grupo de servidores."
        },
        {
          "letter": "C",
          "text": "A retirada das vírgulas altera apenas a pronúncia, não a informação."
        },
        {
          "letter": "D",
          "text": "As duas frases possuem necessariamente o mesmo sentido."
        },
        {
          "letter": "E",
          "text": "Em I, apenas o subconjunto que participou é apresentado como destinatário dos certificados; em II, a oração sugere que todos participaram."
        }
      ],
      "answer": "E",
      "explanation": "Sem vírgulas, a oração é adjetiva restritiva e delimita o grupo. Com vírgulas, é explicativa e apresenta a participação como característica do conjunto já identificado."
    },
    {
      "id": "portugues-021",
      "subjectId": "portugues",
      "number": 21,
      "topic": "Sintaxe - coordenação",
      "area": "Sintaxe",
      "stem": "No período “A equipe revisou o protocolo, mas não alterou o procedimento”, a conjunção “mas” estabelece relação de:",
      "options": [
        {
          "letter": "A",
          "text": "adição."
        },
        {
          "letter": "B",
          "text": "explicação."
        },
        {
          "letter": "C",
          "text": "conclusão."
        },
        {
          "letter": "D",
          "text": "oposição."
        },
        {
          "letter": "E",
          "text": "alternância."
        }
      ],
      "answer": "D",
      "explanation": "“Mas” é conjunção coordenativa adversativa. Contrapõe a revisão do protocolo à ausência de alteração do procedimento."
    },
    {
      "id": "portugues-022",
      "subjectId": "portugues",
      "number": 22,
      "topic": "Sintaxe - correlação verbal",
      "area": "Sintaxe",
      "stem": "Assinale a frase em que a correlação entre os tempos e modos verbais está de acordo com a norma-padrão:",
      "options": [
        {
          "letter": "A",
          "text": "Se a equipe conferisse o lote, evitará o erro."
        },
        {
          "letter": "B",
          "text": "Se a equipe conferir o lote, evitaria o erro."
        },
        {
          "letter": "C",
          "text": "Quando a equipe conferisse o lote amanhã, evitará o erro."
        },
        {
          "letter": "D",
          "text": "Caso a equipe conferiu o lote, evitaria o erro."
        },
        {
          "letter": "E",
          "text": "Se a equipe tivesse conferido o lote, teria evitado o erro."
        }
      ],
      "answer": "E",
      "explanation": "A condição passada não realizada é expressa pelo pretérito mais-que-perfeito composto do subjuntivo, correlacionado ao futuro do pretérito composto: “tivesse conferido” / “teria evitado”."
    },
    {
      "id": "portugues-023",
      "subjectId": "portugues",
      "number": 23,
      "topic": "Classes de palavras - pronome relativo",
      "area": "Classes de palavras",
      "stem": "Assinale a alternativa em que o pronome relativo foi empregado corretamente:",
      "options": [
        {
          "letter": "A",
          "text": "Este é o protocolo onde a equipe discordou."
        },
        {
          "letter": "B",
          "text": "A norma cuja a publicação ocorreu ontem já está vigente."
        },
        {
          "letter": "C",
          "text": "O medicamento de que o paciente necessita está disponível."
        },
        {
          "letter": "D",
          "text": "O setor que confio encaminhou o relatório."
        },
        {
          "letter": "E",
          "text": "A profissional onde elaborou o parecer não compareceu."
        }
      ],
      "answer": "C",
      "explanation": "O verbo “necessitar” rege a preposição “de”, preservada antes do relativo: “de que”. Em A e E, “onde” foi usado sem referência a lugar. Em B, “cujo” não admite artigo depois dele. Em D, “confiar” exige “em”: setor em que confio."
    },
    {
      "id": "portugues-024",
      "subjectId": "portugues",
      "number": 24,
      "topic": "Classes de palavras - valor da conjunção",
      "area": "Classes de palavras",
      "stem": "Na frase “Como o sistema estava indisponível, os registros foram feitos manualmente”, a palavra “Como” introduz ideia de:",
      "options": [
        {
          "letter": "A",
          "text": "comparação."
        },
        {
          "letter": "B",
          "text": "conformidade."
        },
        {
          "letter": "C",
          "text": "consequência."
        },
        {
          "letter": "D",
          "text": "condição."
        },
        {
          "letter": "E",
          "text": "causa."
        }
      ],
      "answer": "E",
      "explanation": "Anteposto à oração principal e equivalente a “porque”, “como” tem valor causal: os registros manuais decorreram da indisponibilidade do sistema."
    },
    {
      "id": "portugues-025",
      "subjectId": "portugues",
      "number": 25,
      "topic": "Classes de palavras - advérbio",
      "area": "Classes de palavras",
      "stem": "Em “A equipe respondeu bastante rapidamente às solicitações”, os termos “bastante” e “rapidamente” são, respectivamente:",
      "options": [
        {
          "letter": "A",
          "text": "adjetivo e substantivo."
        },
        {
          "letter": "B",
          "text": "substantivo e pronome relativo."
        },
        {
          "letter": "C",
          "text": "pronome indefinido e adjetivo."
        },
        {
          "letter": "D",
          "text": "numeral e advérbio de tempo."
        },
        {
          "letter": "E",
          "text": "advérbio de intensidade e advérbio de modo."
        }
      ],
      "answer": "E",
      "explanation": "“Rapidamente” modifica o verbo “respondeu” e indica modo. “Bastante” intensifica outro advérbio e, por isso, é também advérbio, invariável."
    },
    {
      "id": "portugues-026",
      "subjectId": "portugues",
      "number": 26,
      "topic": "Classes de palavras - emprego de “se”",
      "area": "Classes de palavras",
      "stem": "Em “Publicaram-se os resultados definitivos”, o termo “se” é:",
      "options": [
        {
          "letter": "A",
          "text": "índice de indeterminação do sujeito."
        },
        {
          "letter": "B",
          "text": "pronome reflexivo."
        },
        {
          "letter": "C",
          "text": "conjunção condicional."
        },
        {
          "letter": "D",
          "text": "partícula apassivadora."
        },
        {
          "letter": "E",
          "text": "partícula expletiva sem função sintática."
        }
      ],
      "answer": "D",
      "explanation": "O verbo transitivo direto admite voz passiva sintética: “os resultados definitivos foram publicados”. O termo nominal é sujeito paciente, razão pela qual o verbo concorda no plural."
    },
    {
      "id": "portugues-027",
      "subjectId": "portugues",
      "number": 27,
      "topic": "Classes de palavras - valor de “que”",
      "area": "Classes de palavras",
      "stem": "Na frase “É necessário que os dados sejam conferidos”, a palavra “que” é:",
      "options": [
        {
          "letter": "A",
          "text": "pronome relativo."
        },
        {
          "letter": "B",
          "text": "conjunção integrante."
        },
        {
          "letter": "C",
          "text": "preposição."
        },
        {
          "letter": "D",
          "text": "advérbio de intensidade."
        },
        {
          "letter": "E",
          "text": "pronome interrogativo."
        }
      ],
      "answer": "B",
      "explanation": "“Que” introduz a oração substantiva “que os dados sejam conferidos”, a qual funciona como sujeito de “é necessário”. Não retoma um antecedente, portanto não é pronome relativo."
    },
    {
      "id": "portugues-028",
      "subjectId": "portugues",
      "number": 28,
      "topic": "Classes de palavras - artigo e pronome",
      "area": "Classes de palavras",
      "stem": "Assinale a alternativa em que “a” é pronome demonstrativo:",
      "options": [
        {
          "letter": "A",
          "text": "A comissão publicou a decisão."
        },
        {
          "letter": "B",
          "text": "A que recebeu maior pontuação foi classificada."
        },
        {
          "letter": "C",
          "text": "O servidor dirigiu-se a uma unidade próxima."
        },
        {
          "letter": "D",
          "text": "A análise ocorreu durante a reunião."
        },
        {
          "letter": "E",
          "text": "A equipe entregou o relatório à chefia."
        }
      ],
      "answer": "B",
      "explanation": "Em B, “a” equivale a “aquela”: “Aquela que recebeu...”. Nas demais, há artigo definido ou preposição."
    },
    {
      "id": "portugues-029",
      "subjectId": "portugues",
      "number": 29,
      "topic": "Concordância verbal",
      "area": "Concordância verbal",
      "stem": "Assinale a alternativa correta segundo a norma-padrão:",
      "options": [
        {
          "letter": "A",
          "text": "Fazem três meses que o sistema foi implantado."
        },
        {
          "letter": "B",
          "text": "Houveram diversas alterações no cronograma."
        },
        {
          "letter": "C",
          "text": "Existe, no relatório, dados que precisam de revisão."
        },
        {
          "letter": "D",
          "text": "Devem existir soluções mais adequadas para o problema."
        },
        {
          "letter": "E",
          "text": "Tratam-se de medidas temporárias."
        }
      ],
      "answer": "D",
      "explanation": "“Existir” é pessoal, e o auxiliar de uma locução concorda com “soluções”: “devem existir”. “Fazer” temporal e “haver” com sentido de existir ficam no singular. Em C, o correto é “existem dados”. Em E, “tratar-se de” é impessoal nessa construção: “trata-se de medidas”."
    },
    {
      "id": "portugues-030",
      "subjectId": "portugues",
      "number": 30,
      "topic": "Concordância verbal",
      "area": "Concordância verbal",
      "stem": "Assinale a alternativa correta:",
      "options": [
        {
          "letter": "A",
          "text": "Mais de um candidato apresentaram recurso."
        },
        {
          "letter": "B",
          "text": "Fui eu que elaborou o parecer."
        },
        {
          "letter": "C",
          "text": "Nem o gerente nem os servidores percebeu a inconsistência."
        },
        {
          "letter": "D",
          "text": "Cerca de vinte processos permanecem pendentes."
        },
        {
          "letter": "E",
          "text": "Qual de nós resolveremos o problema?"
        }
      ],
      "answer": "D",
      "explanation": "Com expressão aproximativa seguida de numeral plural, o verbo concorda com o substantivo: “vinte processos permanecem”. Em A, em regra, “mais de um candidato apresentou”. Em B: “fui eu que elaborei”. Em C, o sujeito composto exige plural. Em E: “qual de nós resolverá”."
    },
    {
      "id": "portugues-031",
      "subjectId": "portugues",
      "number": 31,
      "topic": "Concordância nominal",
      "area": "Concordância nominal",
      "stem": "Assinale a alternativa correta:",
      "options": [
        {
          "letter": "A",
          "text": "Segue anexo as planilhas solicitadas."
        },
        {
          "letter": "B",
          "text": "É proibida entrada de pessoas não autorizadas."
        },
        {
          "letter": "C",
          "text": "As servidoras estavam meio preocupadas com o prazo."
        },
        {
          "letter": "D",
          "text": "Havia menas solicitações naquele mês."
        },
        {
          "letter": "E",
          "text": "Os documentos seguem incluso no processo."
        }
      ],
      "answer": "C",
      "explanation": "“Meio”, com sentido de “um pouco”, é advérbio e permanece invariável. Em A: “seguem anexas”. Sem determinante, a forma tradicional é “é proibido entrada”; com artigo, “é proibida a entrada”. “Menas” não existe. Em E: “seguem inclusos”."
    },
    {
      "id": "portugues-032",
      "subjectId": "portugues",
      "number": 32,
      "topic": "Regência verbal",
      "area": "Regência verbal",
      "stem": "Assinale a frase correta segundo a norma-padrão:",
      "options": [
        {
          "letter": "A",
          "text": "O servidor aspirava um cargo de maior responsabilidade."
        },
        {
          "letter": "B",
          "text": "A equipe assistiu o treinamento obrigatório."
        },
        {
          "letter": "C",
          "text": "O usuário preferiu aguardar do que retornar outro dia."
        },
        {
          "letter": "D",
          "text": "A decisão implicará revisão dos procedimentos."
        },
        {
          "letter": "E",
          "text": "Todos obedeceram o novo protocolo."
        }
      ],
      "answer": "D",
      "explanation": "“Implicar”, no sentido de acarretar, é transitivo direto: implica revisão. “Aspirar” no sentido de desejar e “assistir” no de presenciar exigem “a”. A construção normativa é “preferiu X a Y”. “Obedecer” exige “a”."
    },
    {
      "id": "portugues-033",
      "subjectId": "portugues",
      "number": 33,
      "topic": "Regência nominal",
      "area": "Regência nominal",
      "stem": "Assinale a alternativa em que a regência nominal está correta:",
      "options": [
        {
          "letter": "A",
          "text": "O relatório é compatível ao regulamento."
        },
        {
          "letter": "B",
          "text": "A medida foi favorável aos usuários."
        },
        {
          "letter": "C",
          "text": "O servidor mostrou-se avesso com mudanças."
        },
        {
          "letter": "D",
          "text": "A unidade permanece acessível de todos."
        },
        {
          "letter": "E",
          "text": "A equipe estava consciente aos riscos."
        }
      ],
      "answer": "B",
      "explanation": "“Favorável” rege a preposição “a”: favorável aos usuários. As construções esperadas são “compatível com”, “avesso a”, “acessível a” e “consciente de”."
    },
    {
      "id": "portugues-034",
      "subjectId": "portugues",
      "number": 34,
      "topic": "Colocação pronominal",
      "area": "Colocação pronominal",
      "stem": "Assinale a alternativa correta segundo a norma-padrão:",
      "options": [
        {
          "letter": "A",
          "text": "Nunca informou-me o motivo da alteração."
        },
        {
          "letter": "B",
          "text": "Se encaminhará amanhã o documento."
        },
        {
          "letter": "C",
          "text": "O servidor que manifestou-se recebeu resposta."
        },
        {
          "letter": "D",
          "text": "Quando lhe entregaram o processo, iniciou a análise."
        },
        {
          "letter": "E",
          "text": "Tinha comunicado-lhe a decisão anteriormente."
        }
      ],
      "answer": "D",
      "explanation": "A conjunção subordinativa “quando” atrai o pronome: “quando lhe entregaram”. “Nunca” e o relativo “que” também exigem próclise em A e C. Não se inicia oração com pronome átono na escrita formal, como em B. Com particípio, não se usa ênclise: “tinha-lhe comunicado”."
    },
    {
      "id": "portugues-035",
      "subjectId": "portugues",
      "number": 35,
      "topic": "Colocação pronominal - mesóclise",
      "area": "Colocação pronominal",
      "stem": "Na ausência de palavra atrativa, a colocação pronominal adequada à norma-padrão em registro formal é:",
      "options": [
        {
          "letter": "A",
          "text": "Me informariam os resultados amanhã."
        },
        {
          "letter": "B",
          "text": "Informariam-me os resultados amanhã."
        },
        {
          "letter": "C",
          "text": "Informar-me-iam os resultados amanhã."
        },
        {
          "letter": "D",
          "text": "Me informar-lhe-iam os resultados amanhã."
        },
        {
          "letter": "E",
          "text": "Informariam os resultados-me amanhã."
        }
      ],
      "answer": "C",
      "explanation": "Com futuro do pretérito, sem elemento atrativo, a tradição normativa prescreve mesóclise: “informar-me-iam”. Em usos contemporâneos, outras soluções sintáticas são preferidas, mas C é a resposta exigida pela norma formal."
    },
    {
      "id": "portugues-036",
      "subjectId": "portugues",
      "number": 36,
      "topic": "Pontuação - vírgula",
      "area": "Pontuação",
      "stem": "Assinale a alternativa corretamente pontuada:",
      "options": [
        {
          "letter": "A",
          "text": "Os medicamentos que exigem refrigeração, foram transferidos imediatamente."
        },
        {
          "letter": "B",
          "text": "Quando o sistema voltou a funcionar os dados, foram atualizados."
        },
        {
          "letter": "C",
          "text": "A equipe, após conferir os lotes, liberou os produtos."
        },
        {
          "letter": "D",
          "text": "O responsável informou, que a reunião seria adiada."
        },
        {
          "letter": "E",
          "text": "A unidade recebeu luvas, máscaras e, aventais."
        }
      ],
      "answer": "C",
      "explanation": "O adjunto adverbial intercalado “após conferir os lotes” está corretamente isolado. Em A, separa-se indevidamente sujeito e verbo. Em B, a oração adverbial anteposta deveria terminar após “funcionar”. Em D, não se separa o verbo de sua oração objetiva. Em E, a vírgula antes de “aventais” é indevida."
    },
    {
      "id": "portugues-037",
      "subjectId": "portugues",
      "number": 37,
      "topic": "Pontuação - alteração de sentido",
      "area": "Pontuação",
      "stem": "Compare:\n\nI. Os usuários que apresentaram receita foram atendidos. II. Os usuários, que apresentaram receita, foram atendidos.\n\nO emprego das vírgulas em II:",
      "options": [
        {
          "letter": "A",
          "text": "é facultativo e não interfere no sentido."
        },
        {
          "letter": "B",
          "text": "indica que apenas parte dos usuários apresentou receita."
        },
        {
          "letter": "C",
          "text": "elimina a relação entre apresentação da receita e atendimento."
        },
        {
          "letter": "D",
          "text": "torna “usuários” objeto direto da oração."
        },
        {
          "letter": "E",
          "text": "transforma a oração restritiva em explicativa e sugere que todos os usuários mencionados apresentaram receita."
        }
      ],
      "answer": "E",
      "explanation": "As vírgulas alteram a natureza da oração adjetiva. Sem elas, há restrição; com elas, a informação é explicativa e se aplica ao conjunto já delimitado."
    },
    {
      "id": "portugues-038",
      "subjectId": "portugues",
      "number": 38,
      "topic": "Pontuação - dois-pontos",
      "area": "Pontuação",
      "stem": "Assinale a alternativa em que os dois-pontos foram empregados adequadamente:",
      "options": [
        {
          "letter": "A",
          "text": "A equipe verificou: e corrigiu todos os registros."
        },
        {
          "letter": "B",
          "text": "O relatório apontou três problemas: atraso, desperdício e subnotificação."
        },
        {
          "letter": "C",
          "text": "Os servidores: participaram da capacitação obrigatória."
        },
        {
          "letter": "D",
          "text": "Foram analisados: os documentos encaminhados ontem."
        },
        {
          "letter": "E",
          "text": "A comissão decidiu: que o recurso era improcedente."
        }
      ],
      "answer": "B",
      "explanation": "Os dois-pontos introduzem uma enumeração que explica “três problemas”. Nas demais opções, eles separam indevidamente verbo e complemento, sujeito e predicado ou elementos da locução verbal."
    },
    {
      "id": "portugues-039",
      "subjectId": "portugues",
      "number": 39,
      "topic": "Pontuação - ponto e vírgula",
      "area": "Pontuação",
      "stem": "Assinale a alternativa em que o ponto e vírgula contribui adequadamente para a organização do período:",
      "options": [
        {
          "letter": "A",
          "text": "A unidade recebeu; os produtos solicitados."
        },
        {
          "letter": "B",
          "text": "Foram convocados Ana, farmacêutica; Bruno, enfermeiro; e Carlos, médico."
        },
        {
          "letter": "C",
          "text": "O servidor; que elaborou o relatório; pediu afastamento."
        },
        {
          "letter": "D",
          "text": "A comissão decidiu; porque o prazo havia terminado."
        },
        {
          "letter": "E",
          "text": "Os dados; foram analisados cuidadosamente pela equipe."
        }
      ],
      "answer": "B",
      "explanation": "O ponto e vírgula separa itens de uma enumeração que já contêm vírgulas internas, tornando a estrutura clara. Nas demais, rompe relações sintáticas essenciais."
    },
    {
      "id": "portugues-040",
      "subjectId": "portugues",
      "number": 40,
      "topic": "Pontuação - aposto",
      "area": "Pontuação",
      "stem": "Assinale a alternativa em que o trecho explicativo está corretamente isolado:",
      "options": [
        {
          "letter": "A",
          "text": "A Portaria nº 344/1998 que trata de substâncias controladas exige estudo atento."
        },
        {
          "letter": "B",
          "text": "A Portaria nº 344/1998, norma relacionada ao controle especial, exige estudo atento."
        },
        {
          "letter": "C",
          "text": "A Portaria, nº 344/1998 norma relacionada ao controle especial exige estudo atento."
        },
        {
          "letter": "D",
          "text": "A Portaria nº 344/1998 norma relacionada, ao controle especial exige estudo atento."
        },
        {
          "letter": "E",
          "text": "A Portaria nº 344/1998 norma relacionada ao controle especial, exige estudo atento."
        }
      ],
      "answer": "B",
      "explanation": "“Norma relacionada ao controle especial” é aposto explicativo e deve ficar entre vírgulas. As outras alternativas omitem ou posicionam mal os sinais."
    },
    {
      "id": "portugues-041",
      "subjectId": "portugues",
      "number": 41,
      "topic": "Pontuação e sentido",
      "area": "Pontuação e sentido",
      "stem": "Assinale a frase em que a vírgula marca corretamente o deslocamento de um adjunto adverbial:",
      "options": [
        {
          "letter": "A",
          "text": "A equipe técnica, revisou o documento."
        },
        {
          "letter": "B",
          "text": "Os candidatos deverão, apresentar documento oficial."
        },
        {
          "letter": "C",
          "text": "A comissão analisou, cuidadosamente os recursos."
        },
        {
          "letter": "D",
          "text": "O parecer foi, encaminhado à autoridade."
        },
        {
          "letter": "E",
          "text": "Depois da conferência, os lotes foram liberados."
        }
      ],
      "answer": "E",
      "explanation": "“Depois da conferência” é adjunto adverbial anteposto e pode ser separado por vírgula. As demais frases separam elementos estreitamente ligados, como sujeito e verbo ou verbo e complemento."
    },
    {
      "id": "portugues-042",
      "subjectId": "portugues",
      "number": 42,
      "topic": "Semântica - ambiguidade",
      "area": "Semântica",
      "stem": "Assinale a frase que apresenta ambiguidade estrutural:",
      "options": [
        {
          "letter": "A",
          "text": "A comissão analisou cuidadosamente todos os recursos."
        },
        {
          "letter": "B",
          "text": "O gerente informou ao farmacêutico que seu relatório estava incompleto."
        },
        {
          "letter": "C",
          "text": "Os produtos vencidos foram separados dos demais."
        },
        {
          "letter": "D",
          "text": "A equipe atualizou os dados na manhã de segunda-feira."
        },
        {
          "letter": "E",
          "text": "O atendimento foi suspenso por falta de energia."
        }
      ],
      "answer": "B",
      "explanation": "“Seu relatório” pode referir-se ao gerente ou ao farmacêutico. A ambiguidade decorre da referência incerta do pronome possessivo."
    },
    {
      "id": "portugues-043",
      "subjectId": "portugues",
      "number": 43,
      "topic": "Semântica - parônimos",
      "area": "Semântica",
      "stem": "Assinale a alternativa que completa corretamente a frase:\n\n“Após analisar o caso, a autoridade decidiu ________ a decisão anterior e determinou a ________ do documento pelo setor responsável.”",
      "options": [
        {
          "letter": "A",
          "text": "ratificar / retificação"
        },
        {
          "letter": "B",
          "text": "retificar / ratificação"
        },
        {
          "letter": "C",
          "text": "ratificar / ratificação"
        },
        {
          "letter": "D",
          "text": "retificar / retificação"
        },
        {
          "letter": "E",
          "text": "retificar / retificassão"
        }
      ],
      "answer": "D",
      "explanation": "“Retificar” significa corrigir, e “retificação” é o ato de corrigir. “Ratificar” significa confirmar. O contexto informa alteração da decisão, por isso requer o campo semântico de correção."
    },
    {
      "id": "portugues-044",
      "subjectId": "portugues",
      "number": 44,
      "topic": "Semântica - polissemia",
      "area": "Semântica",
      "stem": "Na frase “A unidade apresentou uma queda no consumo de antibióticos”, a palavra “queda” exemplifica:",
      "options": [
        {
          "letter": "A",
          "text": "emprego exclusivamente literal relacionado ao movimento físico."
        },
        {
          "letter": "B",
          "text": "polissemia, pois assume o sentido contextual de redução."
        },
        {
          "letter": "C",
          "text": "erro vocabular, pois somente pessoas podem cair."
        },
        {
          "letter": "D",
          "text": "estrangeirismo incorporado ao português."
        },
        {
          "letter": "E",
          "text": "hiperônimo de “medicamento”."
        }
      ],
      "answer": "B",
      "explanation": "“Queda” pode designar movimento físico ou, figuradamente, redução de um indicador. A multiplicidade de sentidos relacionados caracteriza polissemia."
    },
    {
      "id": "portugues-045",
      "subjectId": "portugues",
      "number": 45,
      "topic": "Semântica - hiperonímia",
      "area": "Semântica",
      "stem": "Em relação às palavras “comprimido”, “cápsula” e “solução oral”, a expressão “forma farmacêutica” funciona como:",
      "options": [
        {
          "letter": "A",
          "text": "antônimo."
        },
        {
          "letter": "B",
          "text": "parônimo."
        },
        {
          "letter": "C",
          "text": "eufemismo."
        },
        {
          "letter": "D",
          "text": "homófono."
        },
        {
          "letter": "E",
          "text": "hiperônimo."
        }
      ],
      "answer": "E",
      "explanation": "Hiperônimo é o termo de sentido mais abrangente que inclui outros mais específicos. As três formas citadas pertencem à categoria “forma farmacêutica”."
    },
    {
      "id": "portugues-046",
      "subjectId": "portugues",
      "number": 46,
      "topic": "Crase",
      "area": "Crase",
      "stem": "Assinale a alternativa em que o emprego da crase está correto:",
      "options": [
        {
          "letter": "A",
          "text": "A equipe encaminhou o relatório à autoridade competente."
        },
        {
          "letter": "B",
          "text": "O atendimento ocorre de segunda à sexta."
        },
        {
          "letter": "C",
          "text": "O servidor começou à revisar os documentos."
        },
        {
          "letter": "D",
          "text": "A orientação foi transmitida à todos os presentes."
        },
        {
          "letter": "E",
          "text": "O processo ficou sujeito à mudanças posteriores."
        }
      ],
      "answer": "A",
      "explanation": "“Encaminhar algo a alguém” exige preposição, e “autoridade” admite artigo feminino: a + a = à. Antes de verbo, pronome indefinido e plural sem artigo não ocorre crase. Na correlação temporal, o usual é “de segunda a sexta”."
    },
    {
      "id": "portugues-047",
      "subjectId": "portugues",
      "number": 47,
      "topic": "Crase - locução",
      "area": "Crase",
      "stem": "Assinale a frase corretamente escrita:",
      "options": [
        {
          "letter": "A",
          "text": "A reunião começará as oito horas."
        },
        {
          "letter": "B",
          "text": "O servidor ficou frente à frente com o usuário."
        },
        {
          "letter": "C",
          "text": "A equipe realizou o procedimento às pressas."
        },
        {
          "letter": "D",
          "text": "O relatório foi redigido à lápis."
        },
        {
          "letter": "E",
          "text": "A comissão chegou à Brasília pela manhã."
        }
      ],
      "answer": "C",
      "explanation": "“Às pressas” é locução adverbial feminina e recebe crase. Horário determinado exigiria “às oito horas”. Em expressão com palavras repetidas não se usa crase (“frente a frente”); “lápis” é masculino; Brasília normalmente não admite artigo nesse uso."
    },
    {
      "id": "portugues-048",
      "subjectId": "portugues",
      "number": 48,
      "topic": "Crase - pronome relativo",
      "area": "Crase",
      "stem": "Assinale a alternativa correta:",
      "options": [
        {
          "letter": "A",
          "text": "Esta é a norma à que o parecer se refere."
        },
        {
          "letter": "B",
          "text": "Esta é a norma a qual o parecer se refere."
        },
        {
          "letter": "C",
          "text": "Esta é a norma à qual o parecer se refere."
        },
        {
          "letter": "D",
          "text": "Esta é a norma há qual o parecer se refere."
        },
        {
          "letter": "E",
          "text": "Esta é a norma à cuja o parecer se refere."
        }
      ],
      "answer": "C",
      "explanation": "“Referir-se” rege “a”; o relativo feminino “a qual” admite artigo: a + a qual = à qual. Antes de “que”, em A, não há artigo que justifique o acento."
    },
    {
      "id": "portugues-049",
      "subjectId": "portugues",
      "number": 49,
      "topic": "Crase - caso facultativo",
      "area": "Crase",
      "stem": "Em qual alternativa o emprego da crase é facultativo, mantido o sentido?",
      "options": [
        {
          "letter": "A",
          "text": "Entregou o documento àquela servidora."
        },
        {
          "letter": "B",
          "text": "Referiu-se à norma publicada ontem."
        },
        {
          "letter": "C",
          "text": "Encaminhou a solicitação à sua chefe."
        },
        {
          "letter": "D",
          "text": "Chegou à unidade antes das oito."
        },
        {
          "letter": "E",
          "text": "Voltou à cidade em que nasceu."
        }
      ],
      "answer": "C",
      "explanation": "Antes de pronome possessivo feminino singular, o artigo pode ser empregado ou omitido: “a sua chefe” ou “à sua chefe”. Nas demais, a estrutura indicada exige a fusão ou possui regra própria não facultativa no contexto."
    },
    {
      "id": "portugues-050",
      "subjectId": "portugues",
      "number": 50,
      "topic": "Ortografia",
      "area": "Ortografia",
      "stem": "Assinale a alternativa em que todas as palavras estão grafadas corretamente:",
      "options": [
        {
          "letter": "A",
          "text": "exceção, empecilho, privilégio."
        },
        {
          "letter": "B",
          "text": "excessão, impecilho, previlégio."
        },
        {
          "letter": "C",
          "text": "exceção, empecílio, priviléjio."
        },
        {
          "letter": "D",
          "text": "excessão, empecilho, previlégio."
        },
        {
          "letter": "E",
          "text": "exceção, impecílio, previlégio."
        }
      ],
      "answer": "A",
      "explanation": "As grafias normativas são “exceção”, “empecilho” e “privilégio”. As demais alternativas reproduzem trocas frequentes de letras."
    },
    {
      "id": "portugues-051",
      "subjectId": "portugues",
      "number": 51,
      "topic": "Acentuação gráfica",
      "area": "Acentuação gráfica",
      "stem": "Assinale a alternativa em que todas as palavras são acentuadas pela mesma regra:",
      "options": [
        {
          "letter": "A",
          "text": "saúde, baú, saída."
        },
        {
          "letter": "B",
          "text": "farmacêutico, possível, relatório."
        },
        {
          "letter": "C",
          "text": "público, também, órgão."
        },
        {
          "letter": "D",
          "text": "análise, caráter, café."
        },
        {
          "letter": "E",
          "text": "município, saúde, até."
        }
      ],
      "answer": "A",
      "explanation": "“Saúde”, “baú” e “saída” recebem acento por apresentarem “i” ou “u” tônicos formando hiato, nas condições da regra. As demais opções misturam proparoxítonas, paroxítonas, oxítonas e ditongos."
    },
    {
      "id": "portugues-052",
      "subjectId": "portugues",
      "number": 52,
      "topic": "Acentuação e reforma ortográfica",
      "area": "Acentuação e reforma ortográfica",
      "stem": "Assinale a alternativa correta segundo a ortografia vigente:",
      "options": [
        {
          "letter": "A",
          "text": "A equipe mantém os registros, mas eles não mantém os arquivos físicos."
        },
        {
          "letter": "B",
          "text": "O servidor pôde comparecer ontem, mas não pode comparecer hoje."
        },
        {
          "letter": "C",
          "text": "A comissão analisa a idéia e revê o regulamento."
        },
        {
          "letter": "D",
          "text": "Os gestores têm autonomia, mas o diretor também têm responsabilidade."
        },
        {
          "letter": "E",
          "text": "O relatório contêm dados que não convêm à análise."
        }
      ],
      "answer": "B",
      "explanation": "O acento diferencial distingue “pôde” (pretérito) de “pode” (presente). Em A, o plural é “mantêm”. “Ideia” perdeu o acento. Em D, sujeito singular exige “tem”. Em E, “o relatório” exige “contém”; apenas “dados”, sujeito de “convir”, justifica a forma plural “convêm”."
    },
    {
      "id": "portugues-053",
      "subjectId": "portugues",
      "number": 53,
      "topic": "Tipologia textual",
      "area": "Tipologia textual",
      "stem": "Um texto que apresenta uma tese, desenvolve razões para sustentá-la e procura obter a adesão do leitor organiza-se predominantemente como:",
      "options": [
        {
          "letter": "A",
          "text": "narração."
        },
        {
          "letter": "B",
          "text": "descrição."
        },
        {
          "letter": "C",
          "text": "enumeração sem função discursiva."
        },
        {
          "letter": "D",
          "text": "injunção."
        },
        {
          "letter": "E",
          "text": "argumentação."
        }
      ],
      "answer": "E",
      "explanation": "A argumentação articula uma tese e argumentos com a finalidade de convencer ou justificar uma posição. Narração organiza acontecimentos; descrição caracteriza; injunção orienta ações."
    },
    {
      "id": "portugues-054",
      "subjectId": "portugues",
      "number": 54,
      "topic": "Funções da linguagem",
      "area": "Funções da linguagem",
      "stem": "Em uma campanha com a frase “Vacine-se hoje: proteja você e quem está ao seu redor”, predomina a função:",
      "options": [
        {
          "letter": "A",
          "text": "metalinguística."
        },
        {
          "letter": "B",
          "text": "fática."
        },
        {
          "letter": "C",
          "text": "poética."
        },
        {
          "letter": "D",
          "text": "conativa ou apelativa."
        },
        {
          "letter": "E",
          "text": "emotiva."
        }
      ],
      "answer": "D",
      "explanation": "Os verbos no imperativo procuram influenciar o comportamento do destinatário. O foco no receptor caracteriza a função conativa ou apelativa."
    },
    {
      "id": "portugues-055",
      "subjectId": "portugues",
      "number": 55,
      "topic": "Registros de linguagem",
      "area": "Registros de linguagem",
      "stem": "Assinale a alternativa mais adequada a um parecer técnico formal:",
      "options": [
        {
          "letter": "A",
          "text": "A gente viu que o negócio não estava legal e resolveu dar uma olhada."
        },
        {
          "letter": "B",
          "text": "Tipo assim, os dados ficaram meio estranhos depois da mudança."
        },
        {
          "letter": "C",
          "text": "Verificou-se inconsistência entre os registros e os documentos comprobatórios."
        },
        {
          "letter": "D",
          "text": "O pessoal vacilou feio no preenchimento das informações."
        },
        {
          "letter": "E",
          "text": "Tava tudo certo, só que o sistema deu ruim no final."
        }
      ],
      "answer": "C",
      "explanation": "C emprega vocabulário preciso, construção impessoal e registro compatível com documento técnico. As demais usam coloquialismos ou avaliações imprecisas."
    },
    {
      "id": "portugues-056",
      "subjectId": "portugues",
      "number": 56,
      "topic": "Formação de palavras",
      "area": "Formação de palavras",
      "stem": "A palavra “desabastecimento” é formada, em relação a “abastecer”, por:",
      "options": [
        {
          "letter": "A",
          "text": "composição por justaposição."
        },
        {
          "letter": "B",
          "text": "derivação com acréscimo de prefixo e sufixo."
        },
        {
          "letter": "C",
          "text": "composição por aglutinação."
        },
        {
          "letter": "D",
          "text": "abreviação vocabular."
        },
        {
          "letter": "E",
          "text": "derivação imprópria sem alteração formal."
        }
      ],
      "answer": "B",
      "explanation": "Há acréscimo do prefixo “des-” e do sufixo nominal “-mento” à base relacionada ao verbo “abastecer”. A análise escolar enquadra o processo como derivação prefixal e sufixal."
    },
    {
      "id": "portugues-057",
      "subjectId": "portugues",
      "number": 57,
      "topic": "Vocabulário - neologismo e estrangeirismo",
      "area": "Vocabulário",
      "stem": "Assinale a alternativa correta:",
      "options": [
        {
          "letter": "A",
          "text": "Estrangeirismo é toda palavra antiga que deixou de ser usada."
        },
        {
          "letter": "B",
          "text": "Neologismo é necessariamente uma palavra importada sem adaptação."
        },
        {
          "letter": "C",
          "text": "Arcaísmo é uma forma linguística cujo uso se tornou antigo ou pouco corrente."
        },
        {
          "letter": "D",
          "text": "Latinismo é qualquer erro de tradução do latim."
        },
        {
          "letter": "E",
          "text": "Abreviação e sigla são processos absolutamente idênticos."
        }
      ],
      "answer": "C",
      "explanation": "Arcaísmo designa palavra, forma ou construção antiga ou em desuso. Estrangeirismo vem de outra língua; neologismo é uma criação ou uso novo; latinismo relaciona-se a elemento proveniente do latim. Abreviação e sigla não são categorias idênticas."
    },
    {
      "id": "portugues-058",
      "subjectId": "portugues",
      "number": 58,
      "topic": "Reescrita e manutenção de sentido",
      "area": "Reescrita e manutenção de sentido",
      "stem": "Assinale a reescrita que preserva o sentido e a correção de “Apesar de ter recebido os documentos, a comissão adiou a decisão”:",
      "options": [
        {
          "letter": "A",
          "text": "Porque recebeu os documentos, a comissão adiou a decisão."
        },
        {
          "letter": "B",
          "text": "Embora tenha recebido os documentos, a comissão adiou a decisão."
        },
        {
          "letter": "C",
          "text": "A comissão adiou a decisão, portanto recebeu os documentos."
        },
        {
          "letter": "D",
          "text": "Se recebesse os documentos, a comissão adiaria a decisão."
        },
        {
          "letter": "E",
          "text": "A comissão adiou a decisão para que recebesse os documentos."
        }
      ],
      "answer": "B",
      "explanation": "“Apesar de” e “embora” estabelecem concessão: o recebimento dos documentos não impediu o adiamento. As outras opções introduzem causa, conclusão, condição ou finalidade."
    },
    {
      "id": "portugues-059",
      "subjectId": "portugues",
      "number": 59,
      "topic": "Dicionários e verbetes",
      "area": "Dicionários e verbetes",
      "stem": "Em um verbete de dicionário, a indicação “s.m.” geralmente informa:",
      "options": [
        {
          "letter": "A",
          "text": "a origem geográfica da palavra."
        },
        {
          "letter": "B",
          "text": "que se trata de substantivo masculino."
        },
        {
          "letter": "C",
          "text": "que o emprego é exclusivamente científico."
        },
        {
          "letter": "D",
          "text": "que a palavra possui sentido metafórico."
        },
        {
          "letter": "E",
          "text": "que a forma está ortograficamente incorreta."
        }
      ],
      "answer": "B",
      "explanation": "Dicionários utilizam abreviaturas para registrar informações gramaticais. “s.m.” costuma significar “substantivo masculino”. O próprio dicionário deve apresentar a lista de abreviaturas adotadas."
    },
    {
      "id": "portugues-060",
      "subjectId": "portugues",
      "number": 60,
      "topic": "Questão integrada - interpretação, sintaxe e reescrita",
      "area": "Questão integrada",
      "stem": "Leia:\n\nEmbora a digitalização tenha reduzido o tempo de consulta, ela não eliminou a necessidade de conferir os registros. Sistemas mais rápidos podem reproduzir erros com igual rapidez quando os dados de origem estão incorretos.\n\nAssinale a alternativa correta:",
      "options": [
        {
          "letter": "A",
          "text": "O texto defende que a digitalização tornou a conferência desnecessária."
        },
        {
          "letter": "B",
          "text": "“Embora” introduz uma causa para a eliminação da conferência."
        },
        {
          "letter": "C",
          "text": "O pronome “ela” retoma “necessidade”."
        },
        {
          "letter": "D",
          "text": "A segunda frase explica por que a maior velocidade não dispensa o controle da qualidade dos dados."
        },
        {
          "letter": "E",
          "text": "A substituição de “quando” por “portanto” preservaria a relação de sentido."
        }
      ],
      "answer": "D",
      "explanation": "A segunda frase sustenta a ressalva da primeira: um sistema rápido também acelera a reprodução de erros se os dados de entrada estiverem errados. “Embora” é concessivo; “ela” retoma “digitalização”; “quando” introduz a circunstância em que a reprodução ocorre, enquanto “portanto” seria conclusivo.\n\nFIM DO BANCO DE QUESTÕES\n\nCONTROLE DE COBERTURA\n\n- Interpretação, inferência, tese, finalidade e relações textuais. - Coesão, coerência, intertextualidade e modalização. - Sintaxe da oração e do período; coordenação e subordinação. - Classes de palavras e funções contextuais. - Concordância, regência, colocação pronominal e crase. - Pontuação, semântica, ortografia e acentuação. - Tipologia textual, funções e registros de linguagem. - Formação de palavras, vocabulário, abreviações e verbetes. - Reescrita e correção estrutural de frases."
    },
    {
      "id": "farmacia-001",
      "subjectId": "farmacia",
      "number": 1,
      "topic": "SUS - universalidade",
      "area": "SUS",
      "stem": "O princípio da universalidade no Sistema Único de Saúde significa que:",
      "options": [
        {
          "letter": "A",
          "text": "apenas contribuintes da seguridade social podem utilizar os serviços."
        },
        {
          "letter": "B",
          "text": "somente brasileiros natos possuem direito à assistência."
        },
        {
          "letter": "C",
          "text": "todas as pessoas têm direito de acesso às ações e aos serviços de saúde, sem discriminação indevida."
        },
        {
          "letter": "D",
          "text": "cada Município pode excluir grupos que elevem seus custos assistenciais."
        },
        {
          "letter": "E",
          "text": "o acesso público se limita a situações de emergência."
        }
      ],
      "answer": "C",
      "explanation": "A saúde é direito de todos e dever do Estado. A universalidade garante acesso a todas as pessoas, independentemente de contribuição prévia, renda, nacionalidade ou condição social, observadas as regras de organização do sistema."
    },
    {
      "id": "farmacia-002",
      "subjectId": "farmacia",
      "number": 2,
      "topic": "SUS - integralidade",
      "area": "SUS",
      "stem": "A integralidade da assistência é corretamente compreendida como:",
      "options": [
        {
          "letter": "A",
          "text": "concentração dos recursos exclusivamente em hospitais."
        },
        {
          "letter": "B",
          "text": "oferta apenas de ações curativas individuais."
        },
        {
          "letter": "C",
          "text": "obrigação de fornecer qualquer tecnologia solicitada, sem avaliação técnica."
        },
        {
          "letter": "D",
          "text": "separação absoluta entre prevenção e tratamento."
        },
        {
          "letter": "E",
          "text": "conjunto articulado e contínuo de ações preventivas e curativas, individuais e coletivas, exigidas para cada caso nos diferentes níveis de complexidade."
        }
      ],
      "answer": "E",
      "explanation": "A integralidade articula promoção, prevenção, tratamento e reabilitação nos diferentes níveis de atenção. Ela não equivale à incorporação automática de qualquer intervenção sem critérios clínicos, sanitários e de gestão."
    },
    {
      "id": "farmacia-003",
      "subjectId": "farmacia",
      "number": 3,
      "topic": "SUS - equidade",
      "area": "SUS",
      "stem": "Uma política municipal direciona maior quantidade de farmacêuticos e recursos às regiões com piores indicadores de saúde e maior vulnerabilidade. A medida concretiza principalmente a:",
      "options": [
        {
          "letter": "A",
          "text": "centralização."
        },
        {
          "letter": "B",
          "text": "igualdade meramente formal."
        },
        {
          "letter": "C",
          "text": "equidade."
        },
        {
          "letter": "D",
          "text": "privatização."
        },
        {
          "letter": "E",
          "text": "fragmentação da assistência."
        }
      ],
      "answer": "C",
      "explanation": "Equidade significa reconhecer necessidades diferentes e distribuir recursos de modo proporcional a elas, buscando reduzir desigualdades injustas. Não é tratar todos de maneira idêntica quando as necessidades são distintas."
    },
    {
      "id": "farmacia-004",
      "subjectId": "farmacia",
      "number": 4,
      "topic": "SUS - descentralização",
      "area": "SUS",
      "stem": "Entre as diretrizes organizativas do SUS encontra-se:",
      "options": [
        {
          "letter": "A",
          "text": "comando federal exclusivo de todos os serviços locais."
        },
        {
          "letter": "B",
          "text": "descentralização político-administrativa, com direção única em cada esfera de governo."
        },
        {
          "letter": "C",
          "text": "ausência de regionalização e hierarquização."
        },
        {
          "letter": "D",
          "text": "proibição de participação municipal."
        },
        {
          "letter": "E",
          "text": "financiamento exclusivo pelos usuários."
        }
      ],
      "answer": "B",
      "explanation": "A Constituição e a Lei nº 8.080/1990 organizam o SUS de forma descentralizada, regionalizada e hierarquizada, com direção única em cada esfera. Isso distribui responsabilidades sem eliminar a cooperação interfederativa."
    },
    {
      "id": "farmacia-005",
      "subjectId": "farmacia",
      "number": 5,
      "topic": "Controle social - Conselho de Saúde",
      "area": "Controle social",
      "stem": "Nos termos da Lei nº 8.142/1990, o Conselho de Saúde é:",
      "options": [
        {
          "letter": "A",
          "text": "órgão colegiado permanente e deliberativo, com participação de governo, prestadores, profissionais de saúde e usuários."
        },
        {
          "letter": "B",
          "text": "reunião eventual convocada somente em epidemias."
        },
        {
          "letter": "C",
          "text": "órgão exclusivamente composto por gestores públicos."
        },
        {
          "letter": "D",
          "text": "entidade privada sem atuação sobre a política de saúde."
        },
        {
          "letter": "E",
          "text": "órgão do Poder Judiciário responsável por julgar gestores."
        }
      ],
      "answer": "A",
      "explanation": "O Conselho atua na formulação de estratégias e no controle da execução da política de saúde, inclusive nos aspectos econômicos e financeiros. Seu caráter é permanente e deliberativo."
    },
    {
      "id": "farmacia-006",
      "subjectId": "farmacia",
      "number": 6,
      "topic": "Controle social - Conferência de Saúde",
      "area": "Controle social",
      "stem": "A Conferência de Saúde deve reunir-se, ordinariamente:",
      "options": [
        {
          "letter": "A",
          "text": "mensalmente."
        },
        {
          "letter": "B",
          "text": "a cada quatro anos."
        },
        {
          "letter": "C",
          "text": "a cada dois anos."
        },
        {
          "letter": "D",
          "text": "apenas quando convocada pelo Congresso Nacional."
        },
        {
          "letter": "E",
          "text": "uma única vez em cada Município."
        }
      ],
      "answer": "B",
      "explanation": "A Lei nº 8.142/1990 prevê reunião a cada quatro anos, com representação dos vários segmentos sociais, para avaliar a situação de saúde e propor diretrizes. Pode haver convocação extraordinária."
    },
    {
      "id": "farmacia-007",
      "subjectId": "farmacia",
      "number": 7,
      "topic": "SUS - Constituição Federal",
      "area": "SUS",
      "stem": "O art. 198 da Constituição Federal inclui entre as diretrizes do SUS:",
      "options": [
        {
          "letter": "A",
          "text": "cobrança direta como regra de acesso."
        },
        {
          "letter": "B",
          "text": "participação da comunidade."
        },
        {
          "letter": "C",
          "text": "atendimento integral com prioridade exclusiva para ações curativas."
        },
        {
          "letter": "D",
          "text": "gestão centralizada sem direção estadual ou municipal."
        },
        {
          "letter": "E",
          "text": "exclusão da iniciativa privada de qualquer participação complementar."
        }
      ],
      "answer": "B",
      "explanation": "As diretrizes constitucionais são descentralização com direção única, atendimento integral com prioridade para atividades preventivas, sem prejuízo dos serviços assistenciais, e participação da comunidade."
    },
    {
      "id": "farmacia-008",
      "subjectId": "farmacia",
      "number": 8,
      "topic": "Infecções relacionadas à assistência à saúde",
      "area": "Infecções relacionadas à assistência à saúde",
      "stem": "Uma infecção relacionada à assistência à saúde é aquela:",
      "options": [
        {
          "letter": "A",
          "text": "obrigatoriamente presente antes da admissão do paciente."
        },
        {
          "letter": "B",
          "text": "adquirida em razão de cuidados ou procedimentos de saúde, podendo manifestar-se durante ou após o atendimento quando houver relação com a assistência."
        },
        {
          "letter": "C",
          "text": "causada exclusivamente por bactérias multirresistentes."
        },
        {
          "letter": "D",
          "text": "restrita a hospitais de grande porte."
        },
        {
          "letter": "E",
          "text": "que não pode ocorrer em ambiente ambulatorial."
        }
      ],
      "answer": "B",
      "explanation": "O conceito é mais amplo que “infecção hospitalar”: relaciona-se ao cuidado prestado e pode ocorrer em hospitais, ambulatórios e outros serviços. O momento da manifestação, isoladamente, não define a origem."
    },
    {
      "id": "farmacia-009",
      "subjectId": "farmacia",
      "number": 9,
      "topic": "Higienização das mãos",
      "area": "Higienização das mãos",
      "stem": "Quando as mãos estiverem visivelmente sujas ou contaminadas com matéria orgânica, a conduta preferencial é:",
      "options": [
        {
          "letter": "A",
          "text": "higienizá-las com água e sabonete."
        },
        {
          "letter": "B",
          "text": "aplicar perfume antisséptico."
        },
        {
          "letter": "C",
          "text": "utilizar apenas luvas sobre as mãos sujas."
        },
        {
          "letter": "D",
          "text": "friccionar álcool e imediatamente enxaguar com água."
        },
        {
          "letter": "E",
          "text": "secá-las em tecido reutilizável sem lavagem."
        }
      ],
      "answer": "A",
      "explanation": "Água e sabonete são indicados quando há sujidade visível. A preparação alcoólica é preferida em muitas situações assistenciais quando as mãos não estão visivelmente sujas. Luvas não substituem a higienização."
    },
    {
      "id": "farmacia-010",
      "subjectId": "farmacia",
      "number": 10,
      "topic": "Higienização das mãos - momentos",
      "area": "Higienização das mãos",
      "stem": "É um momento reconhecido para higienização das mãos na assistência:",
      "options": [
        {
          "letter": "A",
          "text": "somente ao iniciar o plantão."
        },
        {
          "letter": "B",
          "text": "apenas quando houver contato com sangue visível."
        },
        {
          "letter": "C",
          "text": "exclusivamente depois de retirar luvas estéreis."
        },
        {
          "letter": "D",
          "text": "apenas antes de procedimentos cirúrgicos."
        },
        {
          "letter": "E",
          "text": "após tocar superfícies próximas ao paciente, mesmo sem contato direto com ele."
        }
      ],
      "answer": "E",
      "explanation": "Os momentos incluem antes de tocar o paciente, antes de procedimento limpo ou asséptico, após risco de exposição a fluidos, após tocar o paciente e após tocar áreas próximas. O ambiente também pode participar da transmissão."
    },
    {
      "id": "farmacia-011",
      "subjectId": "farmacia",
      "number": 11,
      "topic": "Atendimento ao público em saúde",
      "area": "Atendimento ao público em saúde",
      "stem": "No atendimento farmacêutico, a comunicação centrada na pessoa requer:",
      "options": [
        {
          "letter": "A",
          "text": "uso deliberado de termos técnicos sem explicação."
        },
        {
          "letter": "B",
          "text": "escuta ativa, linguagem compreensível e confirmação de que o usuário entendeu as orientações."
        },
        {
          "letter": "C",
          "text": "interrupção imediata do paciente para reduzir o tempo de consulta."
        },
        {
          "letter": "D",
          "text": "transmissão de todas as orientações apenas por escrito."
        },
        {
          "letter": "E",
          "text": "desconsideração de crenças e dificuldades práticas do usuário."
        }
      ],
      "answer": "B",
      "explanation": "Escuta, empatia, linguagem adequada e técnica de confirmação do entendimento reduzem falhas de comunicação e favorecem adesão. Qualidade não se resume à rapidez do atendimento."
    },
    {
      "id": "farmacia-012",
      "subjectId": "farmacia",
      "number": 12,
      "topic": "Ética profissional - confidencialidade",
      "area": "Ética profissional",
      "stem": "Sobre informações clínicas obtidas durante atendimento farmacêutico, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "devem ser protegidas, com compartilhamento limitado às hipóteses autorizadas pelo paciente ou justificadas por dever legal e necessidade assistencial."
        },
        {
          "letter": "B",
          "text": "podem ser divulgadas livremente porque o atendimento ocorreu no SUS."
        },
        {
          "letter": "C",
          "text": "deixam de ser sigilosas quando registradas eletronicamente."
        },
        {
          "letter": "D",
          "text": "podem ser comentadas em redes sociais desde que o nome seja abreviado."
        },
        {
          "letter": "E",
          "text": "pertencem exclusivamente ao profissional que realizou o atendimento."
        }
      ],
      "answer": "A",
      "explanation": "O sigilo protege a dignidade, a privacidade e a confiança na relação assistencial. O acesso e o compartilhamento devem seguir finalidade legítima, necessidade, regras profissionais e legislação aplicável."
    },
    {
      "id": "farmacia-013",
      "subjectId": "farmacia",
      "number": 13,
      "topic": "Política Nacional de Medicamentos",
      "area": "Política Nacional de Medicamentos",
      "stem": "A Política Nacional de Medicamentos tem como propósito essencial:",
      "options": [
        {
          "letter": "A",
          "text": "substituir todos os medicamentos por produtos manipulados."
        },
        {
          "letter": "B",
          "text": "garantir segurança, eficácia e qualidade dos medicamentos, promover o uso racional e assegurar o acesso da população aos medicamentos essenciais."
        },
        {
          "letter": "C",
          "text": "centralizar toda aquisição na esfera federal."
        },
        {
          "letter": "D",
          "text": "estimular a automedicação responsável como política prioritária."
        },
        {
          "letter": "E",
          "text": "retirar a assistência farmacêutica do campo das políticas de saúde."
        }
      ],
      "answer": "B",
      "explanation": "Segurança, eficácia, qualidade, acesso e uso racional formam o núcleo da PNM aprovada pela Portaria nº 3.916/1998. A política também orienta regulação, produção, desenvolvimento científico e reorientação da assistência farmacêutica."
    },
    {
      "id": "farmacia-014",
      "subjectId": "farmacia",
      "number": 14,
      "topic": "Assistência farmacêutica - medicamento essencial",
      "area": "Assistência farmacêutica",
      "stem": "Medicamentos essenciais são aqueles que:",
      "options": [
        {
          "letter": "A",
          "text": "possuem sempre o menor preço unitário do mercado."
        },
        {
          "letter": "B",
          "text": "satisfazem as necessidades prioritárias de saúde da população e devem estar disponíveis em formas, quantidades e condições adequadas."
        },
        {
          "letter": "C",
          "text": "são obrigatoriamente novos e protegidos por patente."
        },
        {
          "letter": "D",
          "text": "dispensam avaliação de eficácia e segurança."
        },
        {
          "letter": "E",
          "text": "se destinam apenas a doenças raras."
        }
      ],
      "answer": "B",
      "explanation": "Essencialidade relaciona-se às necessidades prioritárias, relevância em saúde pública, evidências e viabilidade. Não significa simplesmente menor preço, novidade ou ausência de avaliação."
    },
    {
      "id": "farmacia-015",
      "subjectId": "farmacia",
      "number": 15,
      "topic": "Ciclo da assistência farmacêutica - seleção",
      "area": "Ciclo da assistência farmacêutica",
      "stem": "A seleção municipal de medicamentos deve ser realizada preferencialmente:",
      "options": [
        {
          "letter": "A",
          "text": "pelo fornecedor vencedor da última licitação."
        },
        {
          "letter": "B",
          "text": "por decisão isolada do setor financeiro."
        },
        {
          "letter": "C",
          "text": "por equipe ou comissão multiprofissional, com critérios epidemiológicos, clínicos, de eficácia, segurança, qualidade e custo-efetividade."
        },
        {
          "letter": "D",
          "text": "segundo a quantidade de propaganda de cada produto."
        },
        {
          "letter": "E",
          "text": "apenas pela ordem de lançamento comercial."
        }
      ],
      "answer": "C",
      "explanation": "A seleção racional produz uma lista padronizada coerente com o perfil da população e com evidências. A análise econômica importa, mas não substitui eficácia, segurança, qualidade e necessidade clínica."
    },
    {
      "id": "farmacia-016",
      "subjectId": "farmacia",
      "number": 16,
      "topic": "Ciclo da assistência farmacêutica - programação",
      "area": "Ciclo da assistência farmacêutica",
      "stem": "A programação de medicamentos consiste principalmente em:",
      "options": [
        {
          "letter": "A",
          "text": "escolher a alternativa terapêutica mais segura para cada indivíduo."
        },
        {
          "letter": "B",
          "text": "redigir o edital de licitação."
        },
        {
          "letter": "C",
          "text": "conferir fisicamente os produtos entregues."
        },
        {
          "letter": "D",
          "text": "entregar o medicamento e orientar o paciente."
        },
        {
          "letter": "E",
          "text": "estimar as quantidades necessárias para determinado período, compatibilizando necessidades, estoques, consumo, recursos e capacidade de armazenamento."
        }
      ],
      "answer": "E",
      "explanation": "Programar é quantificar. Uma boa programação evita desabastecimento e excesso, usando dados de consumo, demanda, perfil epidemiológico, estoque existente, prazos de reposição e recursos disponíveis."
    },
    {
      "id": "farmacia-017",
      "subjectId": "farmacia",
      "number": 17,
      "topic": "Ciclo da assistência farmacêutica - aquisição",
      "area": "Ciclo da assistência farmacêutica",
      "stem": "Na aquisição pública de medicamentos, é correto:",
      "options": [
        {
          "letter": "A",
          "text": "especificar adequadamente o objeto e considerar qualidade, regularidade sanitária, prazo, condições de entrega e custo total, além do preço."
        },
        {
          "letter": "B",
          "text": "utilizar apenas a marca comercial, sem justificativa técnica."
        },
        {
          "letter": "C",
          "text": "aceitar produto sem registro quando o preço for inferior."
        },
        {
          "letter": "D",
          "text": "dispensar planejamento porque a licitação corrige falhas de programação."
        },
        {
          "letter": "E",
          "text": "receber quantidade diferente da contratada sem registro da divergência."
        }
      ],
      "answer": "A",
      "explanation": "A compra deve resultar em produto apropriado, regular e disponível no tempo necessário. Menor preço unitário não compensa falhas de qualidade, entrega, especificação ou conformidade sanitária."
    },
    {
      "id": "farmacia-018",
      "subjectId": "farmacia",
      "number": 18,
      "topic": "Ciclo da assistência farmacêutica - armazenamento",
      "area": "Ciclo da assistência farmacêutica",
      "stem": "O armazenamento adequado tem como objetivo:",
      "options": [
        {
          "letter": "A",
          "text": "apenas impedir furtos."
        },
        {
          "letter": "B",
          "text": "preservar identidade, integridade, qualidade e rastreabilidade dos produtos durante sua permanência no estoque."
        },
        {
          "letter": "C",
          "text": "manter todos os medicamentos sob a mesma temperatura."
        },
        {
          "letter": "D",
          "text": "dispensar registros de entrada e saída."
        },
        {
          "letter": "E",
          "text": "permitir contato direto das embalagens com piso e paredes."
        }
      ],
      "answer": "B",
      "explanation": "Armazenar envolve condições ambientais apropriadas, organização, segurança, limpeza, monitoramento, rastreabilidade e rotação. As condições devem seguir as necessidades específicas de cada produto."
    },
    {
      "id": "farmacia-019",
      "subjectId": "farmacia",
      "number": 19,
      "topic": "Ciclo da assistência farmacêutica - distribuição",
      "area": "Ciclo da assistência farmacêutica",
      "stem": "Na assistência farmacêutica, distribuição é:",
      "options": [
        {
          "letter": "A",
          "text": "seleção de medicamentos para a lista municipal."
        },
        {
          "letter": "B",
          "text": "suprimento das unidades requisitantes em quantidades, qualidade e tempo adequados, com controle documental e logístico."
        },
        {
          "letter": "C",
          "text": "prescrição individual realizada pelo farmacêutico."
        },
        {
          "letter": "D",
          "text": "administração do medicamento ao paciente."
        },
        {
          "letter": "E",
          "text": "descarte de produtos vencidos."
        }
      ],
      "answer": "B",
      "explanation": "A distribuição conecta o armazenamento central às unidades de saúde. Deve assegurar produto correto, quantidade correta, destino correto, condições de transporte adequadas e rastreabilidade."
    },
    {
      "id": "farmacia-020",
      "subjectId": "farmacia",
      "number": 20,
      "topic": "Ciclo da assistência farmacêutica - dispensação",
      "area": "Ciclo da assistência farmacêutica",
      "stem": "A dispensação de medicamentos é adequadamente caracterizada como:",
      "options": [
        {
          "letter": "A",
          "text": "simples transferência física de uma caixa ao usuário."
        },
        {
          "letter": "B",
          "text": "etapa exclusivamente administrativa sem responsabilidade clínica."
        },
        {
          "letter": "C",
          "text": "ato que dispensa análise da prescrição."
        },
        {
          "letter": "D",
          "text": "atividade restrita à cobrança e baixa do estoque."
        },
        {
          "letter": "E",
          "text": "ato profissional de fornecimento acompanhado da análise pertinente e de orientações necessárias ao uso seguro e efetivo."
        }
      ],
      "answer": "E",
      "explanation": "A entrega física é apenas parte do processo. A dispensação deve identificar problemas, confirmar paciente e medicamento, orientar posologia, conservação, precauções e adesão e registrar quando necessário."
    },
    {
      "id": "farmacia-021",
      "subjectId": "farmacia",
      "number": 21,
      "topic": "Uso racional de medicamentos",
      "area": "Uso racional de medicamentos",
      "stem": "Há uso racional quando o paciente recebe:",
      "options": [
        {
          "letter": "A",
          "text": "medicamento apropriado à necessidade clínica, em dose e duração adequadas, com informação correta e ao menor custo global compatível com qualidade."
        },
        {
          "letter": "B",
          "text": "o produto mais novo disponível, independentemente de evidência."
        },
        {
          "letter": "C",
          "text": "vários medicamentos para aumentar a chance de resposta."
        },
        {
          "letter": "D",
          "text": "tratamento escolhido apenas pelo menor preço unitário."
        },
        {
          "letter": "E",
          "text": "medicamento sem acompanhamento sempre que já o tenha utilizado."
        }
      ],
      "answer": "A",
      "explanation": "O uso racional combina indicação apropriada, efetividade, segurança, regime correto, adesão, informação e uso responsável de recursos. Polifarmácia ou novidade não significam melhor cuidado."
    },
    {
      "id": "farmacia-022",
      "subjectId": "farmacia",
      "number": 22,
      "topic": "RENAME e padronização",
      "area": "RENAME e padronização",
      "stem": "A Relação Nacional de Medicamentos Essenciais (RENAME):",
      "options": [
        {
          "letter": "A",
          "text": "é uma lista comercial de produtos mais vendidos."
        },
        {
          "letter": "B",
          "text": "orienta a seleção e a organização do acesso a medicamentos no SUS, articulada às responsabilidades e aos protocolos do sistema."
        },
        {
          "letter": "C",
          "text": "obriga todo Município a manter qualquer apresentação disponível no mercado."
        },
        {
          "letter": "D",
          "text": "substitui a avaliação clínica do paciente."
        },
        {
          "letter": "E",
          "text": "inclui somente medicamentos de uso hospitalar."
        }
      ],
      "answer": "B",
      "explanation": "A RENAME é instrumento da política de medicamentos e da assistência farmacêutica. Listas locais podem ser organizadas conforme necessidades e responsabilidades, sem transformar a RENAME em catálogo comercial irrestrito."
    },
    {
      "id": "farmacia-023",
      "subjectId": "farmacia",
      "number": 23,
      "topic": "Política Nacional de Assistência Farmacêutica",
      "area": "Política Nacional de Assistência Farmacêutica",
      "stem": "A assistência farmacêutica deve ser compreendida como:",
      "options": [
        {
          "letter": "A",
          "text": "setor dedicado exclusivamente a compras."
        },
        {
          "letter": "B",
          "text": "logística sem relação com cuidado clínico."
        },
        {
          "letter": "C",
          "text": "atividade limitada à indústria farmacêutica."
        },
        {
          "letter": "D",
          "text": "conjunto de ações restrito à dispensação."
        },
        {
          "letter": "E",
          "text": "conjunto de ações voltadas à promoção, proteção e recuperação da saúde, tendo o medicamento como insumo essencial e visando ao acesso e ao uso racional."
        }
      ],
      "answer": "E",
      "explanation": "A Política Nacional de Assistência Farmacêutica adota conceito amplo, que integra pesquisa, produção, seleção, programação, aquisição, distribuição, dispensação, garantia da qualidade e acompanhamento do uso."
    },
    {
      "id": "farmacia-024",
      "subjectId": "farmacia",
      "number": 24,
      "topic": "Protocolos clínicos",
      "area": "Protocolos clínicos",
      "stem": "Os Protocolos Clínicos e Diretrizes Terapêuticas contribuem para:",
      "options": [
        {
          "letter": "A",
          "text": "substituir o julgamento clínico por decisões financeiras automáticas."
        },
        {
          "letter": "B",
          "text": "liberar qualquer medicamento sem critérios diagnósticos."
        },
        {
          "letter": "C",
          "text": "impedir monitoramento de efetividade e segurança."
        },
        {
          "letter": "D",
          "text": "estabelecer critérios baseados em evidências para diagnóstico, tratamento, monitoramento e acompanhamento dos resultados."
        },
        {
          "letter": "E",
          "text": "eliminar a necessidade de atualização científica."
        }
      ],
      "answer": "D",
      "explanation": "PCDT organizam linhas de cuidado e critérios de uso, favorecendo efetividade, segurança, equidade e monitoramento. Não retiram a avaliação individual nem dispensam atualização periódica."
    },
    {
      "id": "farmacia-025",
      "subjectId": "farmacia",
      "number": 25,
      "topic": "Seleção de medicamentos - critérios",
      "area": "Seleção de medicamentos",
      "stem": "Na seleção de dois medicamentos com eficácia semelhante, é tecnicamente adequado:",
      "options": [
        {
          "letter": "A",
          "text": "comparar segurança, qualidade, conveniência posológica e custo total do tratamento, e não apenas preço por unidade."
        },
        {
          "letter": "B",
          "text": "escolher obrigatoriamente o de maior preço."
        },
        {
          "letter": "C",
          "text": "ignorar interações e contraindicações."
        },
        {
          "letter": "D",
          "text": "utilizar propaganda como principal evidência."
        },
        {
          "letter": "E",
          "text": "excluir dados epidemiológicos da decisão."
        }
      ],
      "answer": "A",
      "explanation": "A análise deve ser multidimensional. Um comprimido barato pode gerar tratamento mais caro se exigir maior dose, duração, monitoramento ou produzir mais eventos adversos."
    },
    {
      "id": "farmacia-026",
      "subjectId": "farmacia",
      "number": 26,
      "topic": "Programação - consumo histórico",
      "area": "Programação",
      "stem": "Ao programar por consumo histórico, o farmacêutico deve:",
      "options": [
        {
          "letter": "A",
          "text": "repetir mecanicamente o consumo anterior."
        },
        {
          "letter": "B",
          "text": "desprezar períodos de desabastecimento."
        },
        {
          "letter": "C",
          "text": "considerar apenas a população cadastrada."
        },
        {
          "letter": "D",
          "text": "excluir tendências sazonais."
        },
        {
          "letter": "E",
          "text": "ajustar o histórico por estoques, faltas, perdas, sazonalidade, mudanças de protocolo e tendência de demanda."
        }
      ],
      "answer": "E",
      "explanation": "Dados brutos podem subestimar demanda quando houve falta ou superestimar quando existiram compras excepcionais. O método é útil, mas exige qualificação do histórico e conhecimento do serviço."
    },
    {
      "id": "farmacia-027",
      "subjectId": "farmacia",
      "number": 27,
      "topic": "Programação - perfil epidemiológico",
      "area": "Programação",
      "stem": "O método baseado no perfil epidemiológico estima necessidades principalmente a partir de:",
      "options": [
        {
          "letter": "A",
          "text": "população, incidência ou prevalência, cobertura esperada e esquema terapêutico padronizado."
        },
        {
          "letter": "B",
          "text": "preço do último fornecedor."
        },
        {
          "letter": "C",
          "text": "espaço livre no almoxarifado."
        },
        {
          "letter": "D",
          "text": "preferência pessoal do comprador."
        },
        {
          "letter": "E",
          "text": "propaganda de produtos recém-lançados."
        }
      ],
      "answer": "A",
      "explanation": "O método relaciona número esperado de casos ou pacientes ao tratamento previsto e à cobertura. É especialmente útil quando o consumo anterior não reflete a necessidade real."
    },
    {
      "id": "farmacia-028",
      "subjectId": "farmacia",
      "number": 28,
      "topic": "Aquisição - especificação técnica",
      "area": "Aquisição",
      "stem": "Uma especificação adequada para aquisição deve:",
      "options": [
        {
          "letter": "A",
          "text": "direcionar sem justificativa para uma marca."
        },
        {
          "letter": "B",
          "text": "omitir forma farmacêutica e concentração."
        },
        {
          "letter": "C",
          "text": "descrever de modo claro princípio ativo, concentração, forma, apresentação, requisitos de qualidade e demais características necessárias."
        },
        {
          "letter": "D",
          "text": "permitir substituição unilateral por qualquer produto."
        },
        {
          "letter": "E",
          "text": "dispensar exigências sanitárias."
        }
      ],
      "answer": "C",
      "explanation": "Especificação incompleta favorece erros e produtos inadequados; direcionamento indevido restringe competição. O objeto deve ser preciso, técnico e compatível com a legislação."
    },
    {
      "id": "farmacia-029",
      "subjectId": "farmacia",
      "number": 29,
      "topic": "Recebimento de medicamentos",
      "area": "Recebimento de medicamentos",
      "stem": "No recebimento de uma entrega, é indispensável:",
      "options": [
        {
          "letter": "A",
          "text": "armazenar tudo antes de conferir."
        },
        {
          "letter": "B",
          "text": "verificar documentação, produto, quantidade, lote, validade, integridade e condições de transporte, registrando não conformidades."
        },
        {
          "letter": "C",
          "text": "aceitar embalagens violadas se o número de unidades estiver correto."
        },
        {
          "letter": "D",
          "text": "misturar imediatamente produtos não conferidos ao estoque liberado."
        },
        {
          "letter": "E",
          "text": "conferir somente o valor total da nota fiscal."
        }
      ],
      "answer": "B",
      "explanation": "O recebimento é barreira de qualidade. Produtos devem permanecer em situação definida até a decisão de aceitação; divergências precisam de registro e tratamento."
    },
    {
      "id": "farmacia-030",
      "subjectId": "farmacia",
      "number": 30,
      "topic": "Armazenamento - quarentena",
      "area": "Armazenamento",
      "stem": "Na gestão de armazenagem, “quarentena” corresponde:",
      "options": [
        {
          "letter": "A",
          "text": "ao descarte imediato de todo produto recebido."
        },
        {
          "letter": "B",
          "text": "à área de medicamentos de alto consumo."
        },
        {
          "letter": "C",
          "text": "ao estoque disponível para dispensação urgente."
        },
        {
          "letter": "D",
          "text": "à devolução automática ao fornecedor."
        },
        {
          "letter": "E",
          "text": "à condição de segregação física ou sistêmica enquanto o produto aguarda decisão de liberação, rejeição ou outra destinação."
        }
      ],
      "answer": "E",
      "explanation": "Quarentena evita o uso de produtos ainda não aprovados. A segregação deve ser inequívoca e controlada, podendo ser física ou garantida por sistema que impeça movimentação indevida."
    },
    {
      "id": "farmacia-031",
      "subjectId": "farmacia",
      "number": 31,
      "topic": "Boas práticas de armazenamento - temperatura",
      "area": "Boas práticas de armazenamento",
      "stem": "O monitoramento de temperatura do estoque deve:",
      "options": [
        {
          "letter": "A",
          "text": "ocorrer somente quando houver reclamação."
        },
        {
          "letter": "B",
          "text": "utilizar equipamento sem calibração ou verificação."
        },
        {
          "letter": "C",
          "text": "produzir registros rastreáveis, permitir identificação de excursões e gerar investigação e ação quando os limites forem ultrapassados."
        },
        {
          "letter": "D",
          "text": "ser substituído pela sensação térmica do funcionário."
        },
        {
          "letter": "E",
          "text": "ignorar períodos noturnos e fins de semana."
        }
      ],
      "answer": "C",
      "explanation": "Não basta medir: é preciso registrar, avaliar tendências e responder a desvios. Equipamentos adequados e qualificados devem representar as condições reais às quais os produtos ficam expostos."
    },
    {
      "id": "farmacia-032",
      "subjectId": "farmacia",
      "number": 32,
      "topic": "Gestão de validade - FEFO",
      "area": "Gestão de validade",
      "stem": "O método FEFO orienta que sejam movimentados primeiro os produtos:",
      "options": [
        {
          "letter": "A",
          "text": "adquiridos pelo maior preço."
        },
        {
          "letter": "B",
          "text": "recebidos do fornecedor mais antigo, qualquer que seja a validade."
        },
        {
          "letter": "C",
          "text": "com maior quantidade física."
        },
        {
          "letter": "D",
          "text": "com vencimento mais próximo, desde que estejam aptos ao uso."
        },
        {
          "letter": "E",
          "text": "de menor consumo mensal."
        }
      ],
      "answer": "D",
      "explanation": "FEFO significa “first expire, first out”: primeiro que vence, primeiro que sai. É mais seguro que usar apenas a ordem cronológica de entrada quando lotes recebidos depois possuem validade menor."
    },
    {
      "id": "farmacia-033",
      "subjectId": "farmacia",
      "number": 33,
      "topic": "Inventário físico",
      "area": "Inventário físico",
      "stem": "Ao encontrar saldo físico inferior ao saldo do sistema, a primeira conduta técnica é:",
      "options": [
        {
          "letter": "A",
          "text": "recontar, revisar movimentações e documentos e investigar a causa antes de realizar ajuste autorizado e rastreável."
        },
        {
          "letter": "B",
          "text": "alterar o sistema sem registro."
        },
        {
          "letter": "C",
          "text": "lançar entrada fictícia para igualar os saldos."
        },
        {
          "letter": "D",
          "text": "ignorar a divergência se o item for barato."
        },
        {
          "letter": "E",
          "text": "atribuir automaticamente a diferença a furto."
        }
      ],
      "answer": "A",
      "explanation": "Divergências podem decorrer de erro de contagem, lançamento, unidade, perda, desvio ou falha de processo. Ajustes devem ser justificados, autorizados e documentados para não ocultar a causa."
    },
    {
      "id": "farmacia-034",
      "subjectId": "farmacia",
      "number": 34,
      "topic": "Curva ABC",
      "area": "Curva ABC",
      "stem": "Na curva ABC de estoque, os itens da classe A são, em geral:",
      "options": [
        {
          "letter": "A",
          "text": "poucos itens que representam parcela elevada do valor de consumo e exigem controle mais rigoroso."
        },
        {
          "letter": "B",
          "text": "produtos necessariamente mais críticos clinicamente."
        },
        {
          "letter": "C",
          "text": "itens vencidos destinados ao descarte."
        },
        {
          "letter": "D",
          "text": "muitos itens de baixo valor acumulado."
        },
        {
          "letter": "E",
          "text": "exclusivamente medicamentos controlados."
        }
      ],
      "answer": "A",
      "explanation": "A classificação ABC usa importância econômica, normalmente valor de consumo anual. Ela não mede criticidade clínica; para isso, pode ser combinada com classificações como XYZ."
    },
    {
      "id": "farmacia-035",
      "subjectId": "farmacia",
      "number": 35,
      "topic": "Classificação XYZ",
      "area": "Classificação XYZ",
      "stem": "A classificação XYZ complementa a curva ABC porque considera principalmente:",
      "options": [
        {
          "letter": "A",
          "text": "o valor financeiro de aquisição."
        },
        {
          "letter": "B",
          "text": "a criticidade e o impacto da falta do item sobre a assistência."
        },
        {
          "letter": "C",
          "text": "a ordem alfabética do princípio ativo."
        },
        {
          "letter": "D",
          "text": "apenas o volume físico ocupado."
        },
        {
          "letter": "E",
          "text": "a idade do fornecedor."
        }
      ],
      "answer": "B",
      "explanation": "Um item barato pode ser vital e insubstituível. A classificação por criticidade impede que a gestão concentre atenção apenas nos itens financeiramente mais representativos."
    },
    {
      "id": "farmacia-036",
      "subjectId": "farmacia",
      "number": 36,
      "topic": "Dimensionamento de estoque - ponto de pedido",
      "area": "Dimensionamento de estoque",
      "stem": "Em um modelo simplificado, o ponto de pedido deve considerar:",
      "options": [
        {
          "letter": "A",
          "text": "somente o espaço disponível."
        },
        {
          "letter": "B",
          "text": "o consumo esperado durante o tempo de reposição, acrescido do estoque de segurança quando aplicável."
        },
        {
          "letter": "C",
          "text": "apenas a quantidade do último pedido."
        },
        {
          "letter": "D",
          "text": "exclusivamente o preço de aquisição."
        },
        {
          "letter": "E",
          "text": "apenas a validade do lote mais antigo."
        }
      ],
      "answer": "B",
      "explanation": "O pedido deve ser disparado antes que o saldo seja consumido durante o lead time. O estoque de segurança protege contra incertezas de consumo e atraso, mas excesso aumenta capital imobilizado e perdas."
    },
    {
      "id": "farmacia-037",
      "subjectId": "farmacia",
      "number": 37,
      "topic": "Gestão de estoque - giro",
      "area": "Gestão de estoque",
      "stem": "O giro de estoque expressa:",
      "options": [
        {
          "letter": "A",
          "text": "a temperatura média do almoxarifado."
        },
        {
          "letter": "B",
          "text": "o percentual de prescrições atendidas."
        },
        {
          "letter": "C",
          "text": "a quantidade de fornecedores cadastrados."
        },
        {
          "letter": "D",
          "text": "quantas vezes o estoque médio é renovado pelo consumo ou saída em determinado período."
        },
        {
          "letter": "E",
          "text": "apenas o número de lotes vencidos."
        }
      ],
      "answer": "D",
      "explanation": "Giro baixo pode sugerir excesso ou baixa movimentação; giro alto pode ser eficiente, mas, se o estoque for insuficiente, elevar risco de ruptura. O indicador deve ser interpretado com nível de serviço e lead time."
    },
    {
      "id": "farmacia-038",
      "subjectId": "farmacia",
      "number": 38,
      "topic": "Prevenção de perdas por validade",
      "area": "Prevenção de perdas por validade",
      "stem": "É medida efetiva para reduzir perdas por vencimento:",
      "options": [
        {
          "letter": "A",
          "text": "acompanhar lotes e validades, aplicar FEFO, redistribuir excedentes em tempo hábil e ajustar a programação."
        },
        {
          "letter": "B",
          "text": "ocultar itens próximos do vencimento."
        },
        {
          "letter": "C",
          "text": "aumentar todos os estoques de segurança."
        },
        {
          "letter": "D",
          "text": "suspender inventários."
        },
        {
          "letter": "E",
          "text": "misturar itens vencidos aos utilizáveis."
        }
      ],
      "answer": "A",
      "explanation": "Perda por validade costuma revelar falhas encadeadas de seleção, programação, aquisição, distribuição ou rotação. A intervenção deve prevenir a causa, e não apenas registrar o descarte."
    },
    {
      "id": "farmacia-039",
      "subjectId": "farmacia",
      "number": 39,
      "topic": "Distribuição e transporte",
      "area": "Distribuição e transporte",
      "stem": "No transporte de medicamentos, deve-se:",
      "options": [
        {
          "letter": "A",
          "text": "preservar as condições especificadas pelo fabricante, controlar riscos e manter rastreabilidade durante todo o trajeto."
        },
        {
          "letter": "B",
          "text": "transportar termolábeis sem monitoramento se o percurso for curto."
        },
        {
          "letter": "C",
          "text": "colocar medicamentos diretamente em contato com gelo reciclável."
        },
        {
          "letter": "D",
          "text": "dispensar avaliação de limpeza do veículo."
        },
        {
          "letter": "E",
          "text": "aceitar qualquer excursão de temperatura sem investigação."
        }
      ],
      "answer": "A",
      "explanation": "Tempo curto não garante estabilidade. Embalagem, qualificação da rota, controle térmico, segurança, limpeza e registros devem ser proporcionais ao risco do produto e do processo."
    },
    {
      "id": "farmacia-040",
      "subjectId": "farmacia",
      "number": 40,
      "topic": "Logística reversa",
      "area": "Logística reversa",
      "stem": "Em uma estratégia de logística reversa de medicamentos, o objetivo é:",
      "options": [
        {
          "letter": "A",
          "text": "recolocar medicamentos devolvidos diretamente no estoque dispensável."
        },
        {
          "letter": "B",
          "text": "descartar qualquer resíduo em lixo comum."
        },
        {
          "letter": "C",
          "text": "transferir toda responsabilidade ao usuário."
        },
        {
          "letter": "D",
          "text": "misturar resíduos químicos com recicláveis."
        },
        {
          "letter": "E",
          "text": "organizar o retorno e a destinação ambientalmente adequada de produtos e resíduos, com segregação e rastreabilidade aplicáveis."
        }
      ],
      "answer": "E",
      "explanation": "O retorno não autoriza reuso automático. É necessário avaliar a cadeia, segregar resíduos e encaminhá-los conforme legislação sanitária e ambiental, sem risco à população ou ao meio ambiente."
    },
    {
      "id": "farmacia-041",
      "subjectId": "farmacia",
      "number": 41,
      "topic": "Termolábeis - excursão de temperatura",
      "area": "Termolábeis",
      "stem": "Após identificar que um termolábil permaneceu fora da faixa recomendada, a equipe deve:",
      "options": [
        {
          "letter": "A",
          "text": "dispensá-lo imediatamente para evitar desperdício."
        },
        {
          "letter": "B",
          "text": "segregá-lo, registrar o desvio e avaliar sua estabilidade com base em dados técnicos antes de decidir o destino."
        },
        {
          "letter": "C",
          "text": "congelá-lo para compensar a exposição ao calor."
        },
        {
          "letter": "D",
          "text": "apagar o registro se a embalagem estiver íntegra."
        },
        {
          "letter": "E",
          "text": "considerar apenas a temperatura no momento da descoberta."
        }
      ],
      "answer": "B",
      "explanation": "A decisão depende de temperatura, duração, histórico, produto e dados do fabricante ou programa responsável. Aparência normal não prova manutenção de potência, e compensar calor com congelamento pode agravar o dano."
    },
    {
      "id": "farmacia-042",
      "subjectId": "farmacia",
      "number": 42,
      "topic": "Indicadores logísticos - desabastecimento",
      "area": "Indicadores logísticos",
      "stem": "Um indicador diretamente relacionado à disponibilidade é:",
      "options": [
        {
          "letter": "A",
          "text": "número de prateleiras do almoxarifado."
        },
        {
          "letter": "B",
          "text": "quantidade de funcionários por turno."
        },
        {
          "letter": "C",
          "text": "percentual de itens classificados como genéricos."
        },
        {
          "letter": "D",
          "text": "custo de energia por metro quadrado."
        },
        {
          "letter": "E",
          "text": "percentual de itens ou dias em ruptura de estoque no período."
        }
      ],
      "answer": "E",
      "explanation": "A ruptura mede indisponibilidade. Deve ser analisada com demanda não atendida, duração, criticidade e causas, pois um único item vital em falta pode ser mais grave que várias faltas de itens facilmente substituíveis."
    },
    {
      "id": "farmacia-043",
      "subjectId": "farmacia",
      "number": 43,
      "topic": "Farmacovigilância - finalidade",
      "area": "Farmacovigilância",
      "stem": "A farmacovigilância tem por finalidade principal:",
      "options": [
        {
          "letter": "A",
          "text": "divulgar comercialmente medicamentos novos."
        },
        {
          "letter": "B",
          "text": "avaliar somente erros de fabricação antes do registro."
        },
        {
          "letter": "C",
          "text": "controlar exclusivamente preços."
        },
        {
          "letter": "D",
          "text": "substituir ensaios clínicos por relatos espontâneos."
        },
        {
          "letter": "E",
          "text": "detectar, avaliar, compreender e prevenir eventos adversos ou outros problemas relacionados a medicamentos."
        }
      ],
      "answer": "E",
      "explanation": "A farmacovigilância continua após a comercialização, quando exposições maiores e populações diversas podem revelar riscos raros, tardios ou associados ao uso real."
    },
    {
      "id": "farmacia-044",
      "subjectId": "farmacia",
      "number": 44,
      "topic": "Farmacovigilância - evento adverso",
      "area": "Farmacovigilância",
      "stem": "Evento adverso é:",
      "options": [
        {
          "letter": "A",
          "text": "qualquer reação com nexo causal comprovado."
        },
        {
          "letter": "B",
          "text": "apenas evento que causa morte."
        },
        {
          "letter": "C",
          "text": "ocorrência médica indesejável durante o uso de um produto, sem que seja necessariamente estabelecida relação causal."
        },
        {
          "letter": "D",
          "text": "somente falha decorrente de erro de medicação."
        },
        {
          "letter": "E",
          "text": "todo efeito terapêutico esperado."
        }
      ],
      "answer": "C",
      "explanation": "Evento adverso é conceito amplo e não exige causalidade demonstrada. Reação adversa pressupõe ao menos suspeita razoável de relação com o medicamento em uso nas condições pertinentes."
    },
    {
      "id": "farmacia-045",
      "subjectId": "farmacia",
      "number": 45,
      "topic": "Segurança do paciente - erro de medicação",
      "area": "Segurança do paciente",
      "stem": "Erro de medicação é:",
      "options": [
        {
          "letter": "A",
          "text": "evento evitável que pode causar ou levar ao uso inadequado do medicamento ou dano ao paciente enquanto o produto está sob controle de profissionais, paciente ou consumidor."
        },
        {
          "letter": "B",
          "text": "sinônimo obrigatório de reação alérgica imprevisível."
        },
        {
          "letter": "C",
          "text": "qualquer falta de eficácia, mesmo com uso correto."
        },
        {
          "letter": "D",
          "text": "evento sempre intencional."
        },
        {
          "letter": "E",
          "text": "dano inevitável decorrente da ação farmacológica normal."
        }
      ],
      "answer": "A",
      "explanation": "O caráter prevenível diferencia o erro. Ele pode ocorrer na prescrição, transcrição, dispensação, preparo, administração, monitoramento ou uso pelo paciente, com ou sem dano efetivo."
    },
    {
      "id": "farmacia-046",
      "subjectId": "farmacia",
      "number": 46,
      "topic": "Segurança do paciente - near miss",
      "area": "Segurança do paciente",
      "stem": "Um medicamento errado é separado, mas a conferência final detecta a falha antes de chegar ao paciente. O caso é classificado como:",
      "options": [
        {
          "letter": "A",
          "text": "reação adversa grave."
        },
        {
          "letter": "B",
          "text": "quase erro ou near miss."
        },
        {
          "letter": "C",
          "text": "evento adverso inevitável."
        },
        {
          "letter": "D",
          "text": "queixa técnica de qualidade."
        },
        {
          "letter": "E",
          "text": "falha terapêutica confirmada."
        }
      ],
      "answer": "B",
      "explanation": "O incidente foi interceptado antes de alcançar o paciente. Near misses devem ser analisados porque revelam fragilidades e oportunidades de prevenção sem que seja preciso aguardar ocorrência de dano."
    },
    {
      "id": "farmacia-047",
      "subjectId": "farmacia",
      "number": 47,
      "topic": "Farmacovigilância - sinal de segurança",
      "area": "Farmacovigilância",
      "stem": "Em farmacovigilância, um sinal corresponde a:",
      "options": [
        {
          "letter": "A",
          "text": "prova definitiva de causalidade."
        },
        {
          "letter": "B",
          "text": "qualquer propaganda negativa sobre um produto."
        },
        {
          "letter": "C",
          "text": "apenas alteração laboratorial já descrita em bula."
        },
        {
          "letter": "D",
          "text": "informação sobre possível relação causal nova, ou novo aspecto de relação conhecida, que justifica investigação adicional."
        },
        {
          "letter": "E",
          "text": "ordem automática de retirada do mercado."
        }
      ],
      "answer": "D",
      "explanation": "Um sinal é hipótese apoiada por informações suficientes para avaliação. Ele não representa, por si só, causalidade comprovada nem determina automaticamente uma medida regulatória específica."
    },
    {
      "id": "farmacia-048",
      "subjectId": "farmacia",
      "number": 48,
      "topic": "Notificação de eventos",
      "area": "Notificação de eventos",
      "stem": "Ao suspeitar de reação adversa grave, o farmacêutico deve:",
      "options": [
        {
          "letter": "A",
          "text": "aguardar certeza absoluta de causalidade."
        },
        {
          "letter": "B",
          "text": "omitir o caso se o evento já constar em bula."
        },
        {
          "letter": "C",
          "text": "comunicar somente ao fabricante, sem registro assistencial."
        },
        {
          "letter": "D",
          "text": "descartar informações sobre lote e concomitantes."
        },
        {
          "letter": "E",
          "text": "prestar o cuidado necessário, documentar dados relevantes e notificar pelos canais aplicáveis mesmo que a causalidade ainda não esteja comprovada."
        }
      ],
      "answer": "E",
      "explanation": "A notificação trabalha com suspeitas qualificadas. Dados de tempo, dose, evolução, retirada ou reexposição, comorbidades e medicamentos concomitantes melhoram a avaliação."
    },
    {
      "id": "farmacia-049",
      "subjectId": "farmacia",
      "number": 49,
      "topic": "Causalidade em reação adversa",
      "area": "Causalidade em reação adversa",
      "stem": "É elemento que fortalece a hipótese de causalidade entre medicamento e evento:",
      "options": [
        {
          "letter": "A",
          "text": "ausência completa de relação temporal."
        },
        {
          "letter": "B",
          "text": "causa alternativa claramente suficiente."
        },
        {
          "letter": "C",
          "text": "exposição ocorrida após o desaparecimento definitivo do evento."
        },
        {
          "letter": "D",
          "text": "relação temporal plausível e melhora após retirada do medicamento, quando clinicamente interpretável."
        },
        {
          "letter": "E",
          "text": "desconhecimento da dose utilizada."
        }
      ],
      "answer": "D",
      "explanation": "Temporalidade e dechallenge positivo apoiam a associação, embora não a provem isoladamente. Causas alternativas, plausibilidade farmacológica e dados de reexposição também são considerados."
    },
    {
      "id": "farmacia-050",
      "subjectId": "farmacia",
      "number": 50,
      "topic": "Prevenção de erros - barreiras",
      "area": "Prevenção de erros",
      "stem": "Constitui barreira sistêmica útil para prevenir erros de dispensação:",
      "options": [
        {
          "letter": "A",
          "text": "separar medicamentos de aparência ou nomes semelhantes, usar alertas e realizar conferência independente nos processos de maior risco."
        },
        {
          "letter": "B",
          "text": "confiar apenas na memória dos profissionais."
        },
        {
          "letter": "C",
          "text": "armazenar produtos semelhantes lado a lado sem identificação."
        },
        {
          "letter": "D",
          "text": "retirar rótulos para reduzir poluição visual."
        },
        {
          "letter": "E",
          "text": "punir individualmente todo erro sem analisar o processo."
        }
      ],
      "answer": "A",
      "explanation": "Segurança robusta depende de desenho do sistema, padronização, alertas, separação, tecnologia e conferências proporcionais ao risco. Abordagem apenas punitiva reduz aprendizado e pode estimular ocultação."
    },
    {
      "id": "farmacia-051",
      "subjectId": "farmacia",
      "number": 51,
      "topic": "Medicamentos LASA",
      "area": "Medicamentos LASA",
      "stem": "Medicamentos LASA são aqueles:",
      "options": [
        {
          "letter": "A",
          "text": "exclusivamente injetáveis de alto custo."
        },
        {
          "letter": "B",
          "text": "sujeitos apenas a controle especial."
        },
        {
          "letter": "C",
          "text": "com baixa estabilidade térmica."
        },
        {
          "letter": "D",
          "text": "cujos nomes ou embalagens semelhantes podem favorecer trocas, exigindo medidas de diferenciação e armazenamento seguro."
        },
        {
          "letter": "E",
          "text": "indicados apenas em ambiente hospitalar."
        }
      ],
      "answer": "D",
      "explanation": "LASA deriva de look-alike/sound-alike. Estratégias incluem segregação, alertas, letras maiúsculas diferenciadoras, padronização e conferência cuidadosa de nome, concentração e apresentação."
    },
    {
      "id": "farmacia-052",
      "subjectId": "farmacia",
      "number": 52,
      "topic": "Medicamentos potencialmente perigosos",
      "area": "Medicamentos potencialmente perigosos",
      "stem": "Medicamentos potencialmente perigosos ou de alta vigilância:",
      "options": [
        {
          "letter": "A",
          "text": "produzem erro com maior frequência em qualquer situação."
        },
        {
          "letter": "B",
          "text": "são necessariamente proibidos na atenção primária."
        },
        {
          "letter": "C",
          "text": "não exigem protocolos específicos."
        },
        {
          "letter": "D",
          "text": "apresentam risco aumentado de dano grave quando ocorre erro, justificando barreiras reforçadas."
        },
        {
          "letter": "E",
          "text": "podem ser identificados apenas pelo preço."
        }
      ],
      "answer": "D",
      "explanation": "A classificação refere-se à gravidade potencial das consequências, não obrigatoriamente à frequência do erro. Padronização, restrição, rotulagem e dupla checagem podem ser adotadas conforme o processo."
    },
    {
      "id": "farmacia-053",
      "subjectId": "farmacia",
      "number": 53,
      "topic": "Legislação sanitária - vigilância",
      "area": "Legislação sanitária",
      "stem": "No âmbito federal, a regulação sanitária de medicamentos é exercida principalmente por:",
      "options": [
        {
          "letter": "A",
          "text": "Agência Nacional de Vigilância Sanitária, sem prejuízo das competências dos demais entes do Sistema Nacional de Vigilância Sanitária."
        },
        {
          "letter": "B",
          "text": "Conselho Federal de Medicina exclusivamente."
        },
        {
          "letter": "C",
          "text": "indústria farmacêutica."
        },
        {
          "letter": "D",
          "text": "associações comerciais locais."
        },
        {
          "letter": "E",
          "text": "Poder Judiciário como atividade administrativa ordinária."
        }
      ],
      "answer": "A",
      "explanation": "A Anvisa coordena e executa competências federais, enquanto Estados e Municípios também integram o sistema e exercem ações sanitárias dentro de suas atribuições."
    },
    {
      "id": "farmacia-054",
      "subjectId": "farmacia",
      "number": 54,
      "topic": "Responsabilidade técnica farmacêutica",
      "area": "Responsabilidade técnica farmacêutica",
      "stem": "A responsabilidade técnica do farmacêutico implica:",
      "options": [
        {
          "letter": "A",
          "text": "mera cessão formal de nome ao estabelecimento."
        },
        {
          "letter": "B",
          "text": "presença e atuação profissional compatíveis com a legislação, supervisão dos processos e adoção de medidas para assegurar qualidade e segurança."
        },
        {
          "letter": "C",
          "text": "responsabilidade apenas pelas vendas."
        },
        {
          "letter": "D",
          "text": "ausência de dever sobre procedimentos escritos."
        },
        {
          "letter": "E",
          "text": "transferência integral das obrigações ao proprietário."
        }
      ],
      "answer": "B",
      "explanation": "Responsabilidade técnica é efetiva, não documental. O farmacêutico deve conhecer, supervisionar e intervir nos processos sob sua competência, registrando não conformidades e recusando práticas inseguras ou ilegais."
    },
    {
      "id": "farmacia-055",
      "subjectId": "farmacia",
      "number": 55,
      "topic": "Portaria SVS/MS nº 344/1998 - listas",
      "area": "Portaria SVS/MS nº 344/1998",
      "stem": "Na Portaria nº 344/1998, as listas A1 e A2 correspondem a substâncias entorpecentes, e a lista A3 a substâncias:",
      "options": [
        {
          "letter": "A",
          "text": "retinoicas de uso sistêmico."
        },
        {
          "letter": "B",
          "text": "imunossupressoras."
        },
        {
          "letter": "C",
          "text": "antirretrovirais."
        },
        {
          "letter": "D",
          "text": "psicotrópicas."
        },
        {
          "letter": "E",
          "text": "anabolizantes de uso veterinário apenas."
        }
      ],
      "answer": "D",
      "explanation": "A organização por listas determina controles, receituários e escrituração. Como os anexos são atualizados periodicamente pela Anvisa, deve-se consultar a versão vigente para classificar cada substância."
    },
    {
      "id": "farmacia-056",
      "subjectId": "farmacia",
      "number": 56,
      "topic": "Portaria nº 344/1998 - Notificação de Receita A",
      "area": "Portaria nº 344/1998",
      "stem": "A Notificação de Receita A é tradicionalmente identificada pela cor:",
      "options": [
        {
          "letter": "A",
          "text": "azul."
        },
        {
          "letter": "B",
          "text": "branca."
        },
        {
          "letter": "C",
          "text": "verde."
        },
        {
          "letter": "D",
          "text": "rosa."
        },
        {
          "letter": "E",
          "text": "amarela."
        }
      ],
      "answer": "E",
      "explanation": "A notificação A, utilizada para listas A pertinentes, é amarela. A notificação B é azul. Em 2026 foram atualizados os modelos nacionais de impressão, sem alterar essa distinção conceitual básica."
    },
    {
      "id": "farmacia-057",
      "subjectId": "farmacia",
      "number": 57,
      "topic": "Portaria nº 344/1998 - Notificação de Receita B",
      "area": "Portaria nº 344/1998",
      "stem": "A Notificação de Receita B, associada aos psicotrópicos das listas correspondentes, é identificada pela cor:",
      "options": [
        {
          "letter": "A",
          "text": "amarela."
        },
        {
          "letter": "B",
          "text": "azul."
        },
        {
          "letter": "C",
          "text": "preta."
        },
        {
          "letter": "D",
          "text": "verde."
        },
        {
          "letter": "E",
          "text": "branca em duas vias."
        }
      ],
      "answer": "B",
      "explanation": "A notificação B é azul. A identificação do tipo correto deve ser acompanhada da verificação da substância, validade, quantidade, preenchimento e demais requisitos vigentes."
    },
    {
      "id": "farmacia-058",
      "subjectId": "farmacia",
      "number": 58,
      "topic": "Receita de Controle Especial",
      "area": "Receita de Controle Especial",
      "stem": "Para medicamentos sujeitos à Receita de Controle Especial, a regra geral da Portaria nº 344/1998 utiliza receita:",
      "options": [
        {
          "letter": "A",
          "text": "branca em duas vias, ficando a primeira retida e a segunda com o paciente, devidamente orientada ou carimbada conforme aplicável."
        },
        {
          "letter": "B",
          "text": "verbal, sem documentação."
        },
        {
          "letter": "C",
          "text": "amarela em via única para qualquer lista."
        },
        {
          "letter": "D",
          "text": "azul sem retenção."
        },
        {
          "letter": "E",
          "text": "comum simples sem identificação do prescritor."
        }
      ],
      "answer": "A",
      "explanation": "A Receita de Controle Especial é utilizada para listas e situações previstas na norma e exige duas vias. O farmacêutico deve verificar os requisitos e a classificação vigente do medicamento."
    },
    {
      "id": "farmacia-059",
      "subjectId": "farmacia",
      "number": 59,
      "topic": "Dispensação de controlados - retenção",
      "area": "Dispensação de controlados",
      "stem": "Na dispensação mediante Notificação de Receita válida, a farmácia deve, em regra:",
      "options": [
        {
          "letter": "A",
          "text": "reter a notificação, efetuar os registros exigidos e fornecer ao paciente a documentação que a norma determinar."
        },
        {
          "letter": "B",
          "text": "devolver a notificação sem qualquer registro."
        },
        {
          "letter": "C",
          "text": "aceitar cópia simples no lugar do original em todos os casos."
        },
        {
          "letter": "D",
          "text": "dispensar quantidade ilimitada."
        },
        {
          "letter": "E",
          "text": "alterar a prescrição sem contato com o prescritor."
        }
      ],
      "answer": "A",
      "explanation": "A retenção e a escrituração permitem controle e rastreabilidade. A dispensação deve respeitar tipo de receituário, validade, abrangência territorial, quantidade e demais regras atualizadas."
    },
    {
      "id": "farmacia-060",
      "subjectId": "farmacia",
      "number": 60,
      "topic": "Controle especial - atualização de 2026",
      "area": "Controle especial",
      "stem": "Sobre os receituários de medicamentos controlados em 2026, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "a Portaria nº 344/1998 foi integralmente revogada."
        },
        {
          "letter": "B",
          "text": "todos os receituários antigos perderam validade em fevereiro de 2026."
        },
        {
          "letter": "C",
          "text": "a Anvisa implantou novos modelos vinculados ao Sistema Nacional de Controle de Receituários, preservando a validade dos receituários impressos até a data de corte informada pela Agência."
        },
        {
          "letter": "D",
          "text": "prescrições controladas deixaram de exigir modelos específicos."
        },
        {
          "letter": "E",
          "text": "somente receitas digitais passaram a ser aceitas."
        }
      ],
      "answer": "C",
      "explanation": "A RDC nº 1.000/2025 atualizou modelos e regras do sistema. A Anvisa informou que modelos anteriores impressos até 12/02/2026 continuam válidos por tempo indeterminado; para novas impressões, aplicam-se os novos modelos."
    },
    {
      "id": "farmacia-061",
      "subjectId": "farmacia",
      "number": 61,
      "topic": "Medicamentos controlados - armazenamento",
      "area": "Medicamentos controlados",
      "stem": "Medicamentos sujeitos a controle especial devem ser armazenados:",
      "options": [
        {
          "letter": "A",
          "text": "sob chave ou outro dispositivo que ofereça segurança, em local exclusivo e sob responsabilidade do farmacêutico, conforme a norma aplicável."
        },
        {
          "letter": "B",
          "text": "junto a alimentos e produtos de limpeza."
        },
        {
          "letter": "C",
          "text": "em área de livre acesso ao público."
        },
        {
          "letter": "D",
          "text": "sem identificação de lote."
        },
        {
          "letter": "E",
          "text": "fora do controle de estoque."
        }
      ],
      "answer": "A",
      "explanation": "O acesso restrito e a rastreabilidade reduzem desvio e uso indevido. A organização interna deve ainda evitar trocas e permitir conciliação entre saldo físico e registros."
    },
    {
      "id": "farmacia-062",
      "subjectId": "farmacia",
      "number": 62,
      "topic": "Controlados - escrituração",
      "area": "Controlados",
      "stem": "A escrituração de medicamentos controlados tem como função:",
      "options": [
        {
          "letter": "A",
          "text": "substituir a prescrição."
        },
        {
          "letter": "B",
          "text": "registrar somente perdas financeiras."
        },
        {
          "letter": "C",
          "text": "manter rastreabilidade das entradas, saídas, perdas e saldos, nos instrumentos e sistemas exigidos para o estabelecimento."
        },
        {
          "letter": "D",
          "text": "permitir ajustes sem justificativa."
        },
        {
          "letter": "E",
          "text": "dispensar inventários físicos."
        }
      ],
      "answer": "C",
      "explanation": "A escrituração permite conciliação e fiscalização. Registros devem ser tempestivos, íntegros e compatíveis com documentos e estoque físico; divergências exigem investigação."
    },
    {
      "id": "farmacia-063",
      "subjectId": "farmacia",
      "number": 63,
      "topic": "Controlados - balanços e mapas",
      "area": "Controlados",
      "stem": "O Balanço de Substâncias Psicoativas e Outras Sujeitas a Controle Especial (BSPO):",
      "options": [
        {
          "letter": "A",
          "text": "é uma prescrição individual."
        },
        {
          "letter": "B",
          "text": "substitui a nota fiscal de aquisição."
        },
        {
          "letter": "C",
          "text": "é usado apenas pelo paciente."
        },
        {
          "letter": "D",
          "text": "elimina a necessidade de responsável técnico."
        },
        {
          "letter": "E",
          "text": "consolida movimentações das substâncias e medicamentos alcançados pela exigência, sob responsabilidade do estabelecimento e de seu responsável técnico."
        }
      ],
      "answer": "E",
      "explanation": "O BSPO é instrumento de controle previsto na regulamentação. Seu preenchimento deve refletir fielmente as movimentações e saldos e observar o tipo de estabelecimento e os prazos aplicáveis."
    },
    {
      "id": "farmacia-064",
      "subjectId": "farmacia",
      "number": 64,
      "topic": "Análise de prescrição",
      "area": "Análise de prescrição",
      "stem": "Ao avaliar uma prescrição de medicamento controlado, o farmacêutico deve verificar:",
      "options": [
        {
          "letter": "A",
          "text": "apenas a cor do papel."
        },
        {
          "letter": "B",
          "text": "legibilidade, identificação de paciente e prescritor, data, substância, concentração, forma, quantidade, posologia e requisitos específicos do receituário."
        },
        {
          "letter": "C",
          "text": "somente a assinatura do paciente."
        },
        {
          "letter": "D",
          "text": "apenas se o produto existe no estoque."
        },
        {
          "letter": "E",
          "text": "somente o diagnóstico clínico completo."
        }
      ],
      "answer": "B",
      "explanation": "A análise é formal, legal e técnica. Inconsistências relevantes devem ser esclarecidas antes da dispensação, com registro da intervenção quando cabível."
    },
    {
      "id": "farmacia-065",
      "subjectId": "farmacia",
      "number": 65,
      "topic": "Conduta diante de prescrição ilegível",
      "area": "Conduta diante de prescrição ilegível",
      "stem": "Diante de prescrição cuja dose não pode ser compreendida com segurança, a conduta correta é:",
      "options": [
        {
          "letter": "A",
          "text": "não dispensar até esclarecer a informação com o prescritor ou por meio seguro e documentado."
        },
        {
          "letter": "B",
          "text": "escolher a dose mais comum."
        },
        {
          "letter": "C",
          "text": "pedir ao paciente que decida."
        },
        {
          "letter": "D",
          "text": "dispensar metade da embalagem."
        },
        {
          "letter": "E",
          "text": "interpretar a palavra por semelhança gráfica."
        }
      ],
      "answer": "A",
      "explanation": "A segurança prevalece sobre a rapidez. Adivinhar uma dose pode causar dano grave; o farmacêutico deve buscar esclarecimento e registrar a intervenção pertinente."
    },
    {
      "id": "farmacia-066",
      "subjectId": "farmacia",
      "number": 66,
      "topic": "Farmacotécnica - preparação magistral",
      "area": "Farmacotécnica",
      "stem": "Preparação magistral é aquela:",
      "options": [
        {
          "letter": "A",
          "text": "preparada na farmácia a partir de prescrição para paciente individualizado, com composição, forma e posologia definidas."
        },
        {
          "letter": "B",
          "text": "produzida industrialmente em larga escala sem prescrição individual."
        },
        {
          "letter": "C",
          "text": "necessariamente constante de compêndio oficial."
        },
        {
          "letter": "D",
          "text": "destinada apenas a uso veterinário."
        },
        {
          "letter": "E",
          "text": "dispensada sem rotulagem."
        }
      ],
      "answer": "A",
      "explanation": "A individualização caracteriza a fórmula magistral. Sua manipulação exige avaliação farmacêutica, cálculos, documentação, controle do processo, rotulagem e orientação."
    },
    {
      "id": "farmacia-067",
      "subjectId": "farmacia",
      "number": 67,
      "topic": "Farmacotécnica - preparação oficinal",
      "area": "Farmacotécnica",
      "stem": "Preparação oficinal é aquela:",
      "options": [
        {
          "letter": "A",
          "text": "manipulada segundo fórmula descrita em formulário ou compêndio oficialmente reconhecido."
        },
        {
          "letter": "B",
          "text": "feita sem procedimento escrito."
        },
        {
          "letter": "C",
          "text": "prescrita exclusivamente por nome de marca."
        },
        {
          "letter": "D",
          "text": "produzida por qualquer estabelecimento não farmacêutico."
        },
        {
          "letter": "E",
          "text": "isenta de controle de qualidade."
        }
      ],
      "answer": "A",
      "explanation": "A fórmula oficinal provém de compêndio reconhecido. Ser oficial não elimina exigências de boas práticas, qualidade, documentação e dispensação segura."
    },
    {
      "id": "farmacia-068",
      "subjectId": "farmacia",
      "number": 68,
      "topic": "Farmacotécnica - diluição geométrica",
      "area": "Farmacotécnica",
      "stem": "Para homogeneizar pequena quantidade de fármaco potente em grande quantidade de diluente em pó, recomenda-se:",
      "options": [
        {
          "letter": "A",
          "text": "adicionar todo o diluente de uma vez."
        },
        {
          "letter": "B",
          "text": "misturar apenas a superfície do recipiente."
        },
        {
          "letter": "C",
          "text": "umedecer obrigatoriamente com água."
        },
        {
          "letter": "D",
          "text": "empregar diluição geométrica, adicionando porções de diluente aproximadamente iguais ao volume da mistura já existente a cada etapa."
        },
        {
          "letter": "E",
          "text": "dispensar trituração e tamisação em qualquer caso."
        }
      ],
      "answer": "D",
      "explanation": "A progressão geométrica reduz risco de regiões muito concentradas. A técnica é especialmente importante para fármacos de baixa dose e estreita margem de segurança."
    },
    {
      "id": "farmacia-069",
      "subjectId": "farmacia",
      "number": 69,
      "topic": "Farmacotécnica - trituração",
      "area": "Farmacotécnica",
      "stem": "A trituração de pós tem como finalidade típica:",
      "options": [
        {
          "letter": "A",
          "text": "esterilizar o material."
        },
        {
          "letter": "B",
          "text": "reduzir o tamanho de partículas e favorecer mistura ou dissolução, conforme a formulação."
        },
        {
          "letter": "C",
          "text": "aumentar a umidade deliberadamente."
        },
        {
          "letter": "D",
          "text": "eliminar a necessidade de pesagem."
        },
        {
          "letter": "E",
          "text": "garantir estabilidade química por si só."
        }
      ],
      "answer": "B",
      "explanation": "Triturar modifica propriedades físicas, não esteriliza nem corrige incompatibilidades. Excesso de energia também pode aquecer ou alterar materiais, por isso a técnica deve ser compatível com o insumo."
    },
    {
      "id": "farmacia-070",
      "subjectId": "farmacia",
      "number": 70,
      "topic": "Farmacotécnica - levigação",
      "area": "Farmacotécnica",
      "stem": "Levigação é a técnica de:",
      "options": [
        {
          "letter": "A",
          "text": "filtrar uma solução por membrana esterilizante."
        },
        {
          "letter": "B",
          "text": "separar líquidos imiscíveis."
        },
        {
          "letter": "C",
          "text": "comprimir pós em tabletes."
        },
        {
          "letter": "D",
          "text": "evaporar totalmente o veículo."
        },
        {
          "letter": "E",
          "text": "reduzir e dispersar partículas sólidas usando pequena quantidade de líquido no qual sejam insolúveis, formando pasta lisa antes da incorporação."
        }
      ],
      "answer": "E",
      "explanation": "A levigação reduz aspereza e aglomerados em preparações como pomadas e suspensões. O agente levigante deve ser compatível com o fármaco e a base."
    },
    {
      "id": "farmacia-071",
      "subjectId": "farmacia",
      "number": 71,
      "topic": "Suspensões farmacêuticas",
      "area": "Suspensões farmacêuticas",
      "stem": "Uma suspensão bem formulada deve:",
      "options": [
        {
          "letter": "A",
          "text": "impedir completamente qualquer sedimentação por tempo ilimitado."
        },
        {
          "letter": "B",
          "text": "formar sedimento compacto e irreversível."
        },
        {
          "letter": "C",
          "text": "conter partículas que flutuem permanentemente."
        },
        {
          "letter": "D",
          "text": "sedimentar lentamente e ser facilmente redispersável, permitindo dose uniforme após agitação."
        },
        {
          "letter": "E",
          "text": "dispensar orientação de agitação."
        }
      ],
      "answer": "D",
      "explanation": "Sedimentação pode ocorrer e não significa necessariamente falha. O problema é caking ou dificuldade de redispersão, que compromete uniformidade das doses."
    },
    {
      "id": "farmacia-072",
      "subjectId": "farmacia",
      "number": 72,
      "topic": "Emulsões - instabilidade",
      "area": "Emulsões",
      "stem": "A coalescência irreversível das gotículas, culminando em separação das fases de uma emulsão, é denominada:",
      "options": [
        {
          "letter": "A",
          "text": "floculação controlada."
        },
        {
          "letter": "B",
          "text": "levigação."
        },
        {
          "letter": "C",
          "text": "sedimentação simples."
        },
        {
          "letter": "D",
          "text": "quebra ou cracking."
        },
        {
          "letter": "E",
          "text": "tamisação."
        }
      ],
      "answer": "D",
      "explanation": "Creaming pode ser reversível por agitação, pois as gotículas ainda mantêm identidade. Na quebra, a coalescência progride e a emulsão não é adequadamente recomposta por simples agitação."
    },
    {
      "id": "farmacia-073",
      "subjectId": "farmacia",
      "number": 73,
      "topic": "Cálculos farmacêuticos - diluição",
      "area": "Cálculos farmacêuticos",
      "stem": "Quantos mililitros de uma solução a 20% são necessários para preparar 500 mL de solução a 4%, desconsiderando contração de volume?",
      "options": [
        {
          "letter": "A",
          "text": "100 mL."
        },
        {
          "letter": "B",
          "text": "80 mL."
        },
        {
          "letter": "C",
          "text": "50 mL."
        },
        {
          "letter": "D",
          "text": "125 mL."
        },
        {
          "letter": "E",
          "text": "200 mL."
        }
      ],
      "answer": "A",
      "explanation": "C1V1 = C2V2. Assim, 20 × V1 = 4 × 500, resultando em V1 = 100 mL. O volume deve ser completado com veículo até 500 mL."
    },
    {
      "id": "farmacia-074",
      "subjectId": "farmacia",
      "number": 74,
      "topic": "Cálculos farmacêuticos - mistura de concentrações",
      "area": "Cálculos farmacêuticos",
      "stem": "Para obter 1.000 mL de solução a 30% misturando soluções a 20% e 50%, os volumes necessários são, respectivamente:",
      "options": [
        {
          "letter": "A",
          "text": "250 mL e 750 mL."
        },
        {
          "letter": "B",
          "text": "400 mL e 600 mL."
        },
        {
          "letter": "C",
          "text": "500 mL e 500 mL."
        },
        {
          "letter": "D",
          "text": "600 mL e 400 mL."
        },
        {
          "letter": "E",
          "text": "aproximadamente 666,7 mL e 333,3 mL."
        }
      ],
      "answer": "E",
      "explanation": "Seja x o volume a 50%: 0,50x + 0,20(1.000 - x) = 300. Logo, 0,30x = 100 e x = 333,3 mL; o restante, 666,7 mL, é da solução a 20%."
    },
    {
      "id": "farmacia-075",
      "subjectId": "farmacia",
      "number": 75,
      "topic": "Cálculos farmacêuticos - porcentagem massa/volume",
      "area": "Cálculos farmacêuticos",
      "stem": "Uma solução a 1% m/v contém:",
      "options": [
        {
          "letter": "A",
          "text": "1 g de soluto em volume final de 100 mL."
        },
        {
          "letter": "B",
          "text": "1 mg em 100 mL."
        },
        {
          "letter": "C",
          "text": "10 g em 100 mL."
        },
        {
          "letter": "D",
          "text": "1 g em 1 mL."
        },
        {
          "letter": "E",
          "text": "100 g em 1 mL."
        }
      ],
      "answer": "A",
      "explanation": "Percentual m/v expressa gramas em 100 mL de preparação final. É preciso diferenciá-lo de m/m, v/v e de unidades como mg/mL."
    },
    {
      "id": "farmacia-076",
      "subjectId": "farmacia",
      "number": 76,
      "topic": "Cálculos farmacêuticos - solução fisiológica",
      "area": "Cálculos farmacêuticos",
      "stem": "Quantos gramas de cloreto de sódio existem em 500 mL de solução a 0,9% m/v?",
      "options": [
        {
          "letter": "A",
          "text": "0,45 g."
        },
        {
          "letter": "B",
          "text": "0,9 g."
        },
        {
          "letter": "C",
          "text": "4,5 g."
        },
        {
          "letter": "D",
          "text": "5,0 g."
        },
        {
          "letter": "E",
          "text": "45 g."
        }
      ],
      "answer": "C",
      "explanation": "Há 0,9 g em 100 mL. Em 500 mL, multiplica-se por cinco: 4,5 g."
    },
    {
      "id": "farmacia-077",
      "subjectId": "farmacia",
      "number": 77,
      "topic": "Cálculos farmacêuticos - dose por peso",
      "area": "Cálculos farmacêuticos",
      "stem": "Um medicamento foi prescrito na dose de 15 mg/kg para paciente de 24 kg. A dose total é:",
      "options": [
        {
          "letter": "A",
          "text": "360 mg."
        },
        {
          "letter": "B",
          "text": "240 mg."
        },
        {
          "letter": "C",
          "text": "160 mg."
        },
        {
          "letter": "D",
          "text": "36 mg."
        },
        {
          "letter": "E",
          "text": "1.600 mg."
        }
      ],
      "answer": "A",
      "explanation": "15 mg/kg × 24 kg = 360 mg. Antes de converter para volume ou número de unidades, deve-se conferir dose máxima e concentração disponível."
    },
    {
      "id": "farmacia-078",
      "subjectId": "farmacia",
      "number": 78,
      "topic": "Cálculos farmacêuticos - velocidade de infusão",
      "area": "Cálculos farmacêuticos",
      "stem": "Uma bolsa de 600 mL deve ser infundida em 5 horas por bomba volumétrica. A velocidade programada é:",
      "options": [
        {
          "letter": "A",
          "text": "60 mL/h."
        },
        {
          "letter": "B",
          "text": "100 mL/h."
        },
        {
          "letter": "C",
          "text": "110 mL/h."
        },
        {
          "letter": "D",
          "text": "150 mL/h."
        },
        {
          "letter": "E",
          "text": "120 mL/h."
        }
      ],
      "answer": "E",
      "explanation": "Velocidade = volume/tempo = 600/5 = 120 mL/h. Em equipo por gravidade, seria necessário também considerar o fator de gotejamento."
    },
    {
      "id": "farmacia-079",
      "subjectId": "farmacia",
      "number": 79,
      "topic": "Cálculos farmacêuticos - razão",
      "area": "Cálculos farmacêuticos",
      "stem": "Uma solução de adrenalina 1:1.000 contém:",
      "options": [
        {
          "letter": "A",
          "text": "0,01 mg/mL."
        },
        {
          "letter": "B",
          "text": "0,1 mg/mL."
        },
        {
          "letter": "C",
          "text": "10 mg/mL."
        },
        {
          "letter": "D",
          "text": "1 mg/mL."
        },
        {
          "letter": "E",
          "text": "100 mg/mL."
        }
      ],
      "answer": "D",
      "explanation": "1:1.000 m/v representa 1 g em 1.000 mL. Como 1 g = 1.000 mg, a concentração é 1 mg/mL. Erros com razões podem ser graves e exigem conferência."
    },
    {
      "id": "farmacia-080",
      "subjectId": "farmacia",
      "number": 80,
      "topic": "Cálculos farmacêuticos - volume por dose",
      "area": "Cálculos farmacêuticos",
      "stem": "Uma suspensão contém 250 mg em 5 mL. Para administrar 375 mg, o volume é:",
      "options": [
        {
          "letter": "A",
          "text": "7,5 mL."
        },
        {
          "letter": "B",
          "text": "5,5 mL."
        },
        {
          "letter": "C",
          "text": "6,0 mL."
        },
        {
          "letter": "D",
          "text": "10 mL."
        },
        {
          "letter": "E",
          "text": "12,5 mL."
        }
      ],
      "answer": "A",
      "explanation": "A concentração é 50 mg/mL. Assim, 375/50 = 7,5 mL. A suspensão deve ser agitada antes da medição para manter uniformidade."
    },
    {
      "id": "farmacia-081",
      "subjectId": "farmacia",
      "number": 81,
      "topic": "Formas semissólidas",
      "area": "Formas semissólidas",
      "stem": "Entre as formas semissólidas, a base mais tipicamente oleosa e oclusiva é:",
      "options": [
        {
          "letter": "A",
          "text": "gel hidrofílico."
        },
        {
          "letter": "B",
          "text": "loção aquosa."
        },
        {
          "letter": "C",
          "text": "solução tópica."
        },
        {
          "letter": "D",
          "text": "pomada com base hidrocarbonada."
        },
        {
          "letter": "E",
          "text": "suspensão oral."
        }
      ],
      "answer": "D",
      "explanation": "Bases hidrocarbonadas reduzem perda de água e são emolientes, porém são mais gordurosas e pouco laváveis. Géis são geralmente menos oclusivos e mais aceitáveis em áreas pilosas ou oleosas."
    },
    {
      "id": "farmacia-082",
      "subjectId": "farmacia",
      "number": 82,
      "topic": "Farmacotécnica - cápsulas",
      "area": "Farmacotécnica",
      "stem": "Ao encapsular um fármaco em baixa dose, a estratégia mais apropriada para reduzir variação de conteúdo é:",
      "options": [
        {
          "letter": "A",
          "text": "preparar mistura homogênea por diluição geométrica e controlar peso e uniformidade do processo."
        },
        {
          "letter": "B",
          "text": "preencher visualmente cada cápsula com quantidades diferentes."
        },
        {
          "letter": "C",
          "text": "misturar o fármaco apenas ao final."
        },
        {
          "letter": "D",
          "text": "dispensar a pesagem do diluente."
        },
        {
          "letter": "E",
          "text": "utilizar qualquer tamanho de cápsula sem avaliar densidade aparente."
        }
      ],
      "answer": "A",
      "explanation": "A homogeneização é crítica quando a dose é pequena. A diluição geométrica, a escolha racional do diluente e os controles de peso e uniformidade reduzem risco de superdose ou subdose entre cápsulas."
    },
    {
      "id": "farmacia-083",
      "subjectId": "farmacia",
      "number": 83,
      "topic": "Comprimidos - dissolução",
      "area": "Comprimidos",
      "stem": "O ensaio de dissolução avalia principalmente:",
      "options": [
        {
          "letter": "A",
          "text": "a dureza mecânica isolada do comprimido."
        },
        {
          "letter": "B",
          "text": "a quantidade ou velocidade com que o fármaco passa para a solução sob condições padronizadas."
        },
        {
          "letter": "C",
          "text": "apenas a identidade do corante."
        },
        {
          "letter": "D",
          "text": "a esterilidade do comprimido."
        },
        {
          "letter": "E",
          "text": "o volume aparente do pó antes da compressão."
        }
      ],
      "answer": "B",
      "explanation": "Dissolução não é sinônimo de desintegração. O comprimido pode se fragmentar, mas o fármaco ainda precisa dissolver no meio para ficar disponível à absorção."
    },
    {
      "id": "farmacia-084",
      "subjectId": "farmacia",
      "number": 84,
      "topic": "Preparações injetáveis",
      "area": "Preparações injetáveis",
      "stem": "Preparações injetáveis exigem, entre outros atributos:",
      "options": [
        {
          "letter": "A",
          "text": "esterilidade, controle de endotoxinas ou pirogênios conforme o produto, partículas e compatibilidade com a via de administração."
        },
        {
          "letter": "B",
          "text": "apenas sabor agradável."
        },
        {
          "letter": "C",
          "text": "conservação obrigatória à temperatura ambiente."
        },
        {
          "letter": "D",
          "text": "ausência de rotulagem."
        },
        {
          "letter": "E",
          "text": "manipulação sem controle ambiental."
        }
      ],
      "answer": "A",
      "explanation": "A via parenteral ultrapassa barreiras protetoras e exige controles rigorosos. A esterilidade final não corrige automaticamente falhas de formulação, endotoxinas, partículas ou incompatibilidades."
    },
    {
      "id": "farmacia-085",
      "subjectId": "farmacia",
      "number": 85,
      "topic": "Fracionamento de medicamentos",
      "area": "Fracionamento de medicamentos",
      "stem": "O fracionamento seguro deve preservar:",
      "options": [
        {
          "letter": "A",
          "text": "apenas o preço unitário."
        },
        {
          "letter": "B",
          "text": "identificação, lote, validade, integridade, condições de conservação e rastreabilidade até a dispensação."
        },
        {
          "letter": "C",
          "text": "somente a embalagem externa original."
        },
        {
          "letter": "D",
          "text": "o anonimato do produto."
        },
        {
          "letter": "E",
          "text": "exclusivamente a cor da forma farmacêutica."
        }
      ],
      "answer": "B",
      "explanation": "Ao reduzir a embalagem, não se podem perder informações essenciais. Procedimentos, rotulagem e registros devem evitar trocas e permitir recolhimento ou investigação de qualidade."
    },
    {
      "id": "farmacia-086",
      "subjectId": "farmacia",
      "number": 86,
      "topic": "Controle de qualidade - identidade",
      "area": "Controle de qualidade",
      "stem": "O ensaio de identificação busca demonstrar:",
      "options": [
        {
          "letter": "A",
          "text": "somente a quantidade total de produto."
        },
        {
          "letter": "B",
          "text": "o prazo de validade por inspeção visual."
        },
        {
          "letter": "C",
          "text": "que a substância ou componente declarado está presente."
        },
        {
          "letter": "D",
          "text": "apenas a ausência de microrganismos."
        },
        {
          "letter": "E",
          "text": "a aceitabilidade de sabor."
        }
      ],
      "answer": "C",
      "explanation": "Identidade responde “é a substância correta?”. Teor responde “quanto há?”, e pureza avalia contaminantes ou impurezas. São atributos relacionados, mas distintos."
    },
    {
      "id": "farmacia-087",
      "subjectId": "farmacia",
      "number": 87,
      "topic": "Metrologia - exatidão e precisão",
      "area": "Metrologia",
      "stem": "Um método apresenta resultados muito próximos entre si, porém todos distantes do valor verdadeiro. Ele é:",
      "options": [
        {
          "letter": "A",
          "text": "exato e impreciso."
        },
        {
          "letter": "B",
          "text": "exato e preciso."
        },
        {
          "letter": "C",
          "text": "inexato e necessariamente inválido para qualquer correção."
        },
        {
          "letter": "D",
          "text": "sem precisão e sem viés."
        },
        {
          "letter": "E",
          "text": "preciso, mas inexato."
        }
      ],
      "answer": "E",
      "explanation": "Precisão é proximidade entre resultados repetidos; exatidão é proximidade do valor verdadeiro. O padrão sugere erro sistemático ou viés."
    },
    {
      "id": "farmacia-088",
      "subjectId": "farmacia",
      "number": 88,
      "topic": "Controle físico-químico - pH",
      "area": "Controle físico-químico",
      "stem": "Como a escala de pH é logarítmica, uma solução de pH 3 possui concentração de íons H+ aproximadamente:",
      "options": [
        {
          "letter": "A",
          "text": "duas vezes maior que uma de pH 4."
        },
        {
          "letter": "B",
          "text": "três vezes maior que uma de pH 4."
        },
        {
          "letter": "C",
          "text": "quatro vezes maior que uma de pH 4."
        },
        {
          "letter": "D",
          "text": "cem vezes menor que uma de pH 4."
        },
        {
          "letter": "E",
          "text": "dez vezes maior que uma de pH 4."
        }
      ],
      "answer": "E",
      "explanation": "Cada unidade de pH representa fator dez na atividade ou concentração aproximada de H+. Menor pH corresponde a maior acidez."
    },
    {
      "id": "farmacia-089",
      "subjectId": "farmacia",
      "number": 89,
      "topic": "Controle de qualidade - teor",
      "area": "Controle de qualidade",
      "stem": "O ensaio de teor de um produto farmacêutico determina:",
      "options": [
        {
          "letter": "A",
          "text": "somente a cor da embalagem."
        },
        {
          "letter": "B",
          "text": "a quantidade de microrganismos viáveis apenas."
        },
        {
          "letter": "C",
          "text": "o tempo necessário para abrir o frasco."
        },
        {
          "letter": "D",
          "text": "exclusivamente a massa total da unidade."
        },
        {
          "letter": "E",
          "text": "a quantidade do princípio ativo em relação ao valor declarado ou especificado."
        }
      ],
      "answer": "E",
      "explanation": "Teor insuficiente pode comprometer eficácia; excesso pode elevar toxicidade. O método deve ser adequado, e a aceitação segue especificação farmacopeica ou autorizada."
    },
    {
      "id": "farmacia-090",
      "subjectId": "farmacia",
      "number": 90,
      "topic": "Controle de qualidade - dissolução",
      "area": "Controle de qualidade",
      "stem": "Uma alteração no tamanho de partícula de fármaco pouco solúvel pode modificar:",
      "options": [
        {
          "letter": "A",
          "text": "apenas a cor do rótulo."
        },
        {
          "letter": "B",
          "text": "somente o número de lote."
        },
        {
          "letter": "C",
          "text": "a velocidade de dissolução e, potencialmente, a biodisponibilidade."
        },
        {
          "letter": "D",
          "text": "exclusivamente a validade administrativa da receita."
        },
        {
          "letter": "E",
          "text": "apenas a densidade da embalagem secundária."
        }
      ],
      "answer": "C",
      "explanation": "Menores partículas geralmente aumentam área superficial e podem acelerar dissolução. O efeito clínico depende da formulação e de qual etapa limita a absorção."
    },
    {
      "id": "farmacia-091",
      "subjectId": "farmacia",
      "number": 91,
      "topic": "Farmacocinética - biodisponibilidade",
      "area": "Farmacocinética",
      "stem": "Biodisponibilidade corresponde:",
      "options": [
        {
          "letter": "A",
          "text": "à velocidade e à extensão com que o fármaco alcança a circulação sistêmica na forma inalterada."
        },
        {
          "letter": "B",
          "text": "exclusivamente à ligação do fármaco ao receptor."
        },
        {
          "letter": "C",
          "text": "apenas ao volume urinário produzido."
        },
        {
          "letter": "D",
          "text": "à fração do fármaco ligada a proteínas, somente."
        },
        {
          "letter": "E",
          "text": "ao tempo de desintegração da embalagem."
        }
      ],
      "answer": "A",
      "explanation": "A extensão é frequentemente relacionada à área sob a curva, e a velocidade a parâmetros como concentração máxima e tempo para alcançá-la. Via intravenosa possui biodisponibilidade sistêmica de 100% por definição."
    },
    {
      "id": "farmacia-092",
      "subjectId": "farmacia",
      "number": 92,
      "topic": "Farmacocinética - volume de distribuição",
      "area": "Farmacocinética",
      "stem": "Um fármaco com volume aparente de distribuição muito elevado tende a:",
      "options": [
        {
          "letter": "A",
          "text": "permanecer exclusivamente no plasma."
        },
        {
          "letter": "B",
          "text": "ser necessariamente eliminado sem metabolização."
        },
        {
          "letter": "C",
          "text": "distribuir-se extensamente para tecidos ou ligar-se fora do compartimento plasmático."
        },
        {
          "letter": "D",
          "text": "possuir absorção oral de 100%."
        },
        {
          "letter": "E",
          "text": "não atravessar membranas biológicas."
        }
      ],
      "answer": "C",
      "explanation": "O volume de distribuição é parâmetro aparente, não volume anatômico real. Valores altos sugerem baixa permanência relativa no plasma e distribuição ou ligação tecidual significativa."
    },
    {
      "id": "farmacia-093",
      "subjectId": "farmacia",
      "number": 93,
      "topic": "Farmacocinética - depuração",
      "area": "Farmacocinética",
      "stem": "Depuração ou clearance representa:",
      "options": [
        {
          "letter": "A",
          "text": "a quantidade total de fármaco no organismo."
        },
        {
          "letter": "B",
          "text": "o tempo para absorção completa."
        },
        {
          "letter": "C",
          "text": "a afinidade pelo receptor."
        },
        {
          "letter": "D",
          "text": "o volume de plasma do qual o fármaco é completamente removido por unidade de tempo."
        },
        {
          "letter": "E",
          "text": "a fração ligada à albumina."
        }
      ],
      "answer": "D",
      "explanation": "A depuração integra eliminação renal, hepática e por outras vias. Relaciona-se à dose de manutenção e, juntamente com o volume de distribuição, influencia a meia-vida."
    },
    {
      "id": "farmacia-094",
      "subjectId": "farmacia",
      "number": 94,
      "topic": "Farmacocinética - meia-vida",
      "area": "Farmacocinética",
      "stem": "Em cinética de primeira ordem, a meia-vida é o tempo necessário para:",
      "options": [
        {
          "letter": "A",
          "text": "reduzir pela metade a quantidade ou concentração do fármaco no organismo."
        },
        {
          "letter": "B",
          "text": "eliminar uma quantidade fixa, independentemente da concentração."
        },
        {
          "letter": "C",
          "text": "alcançar obrigatoriamente concentração tóxica."
        },
        {
          "letter": "D",
          "text": "absorver toda a dose oral."
        },
        {
          "letter": "E",
          "text": "iniciar a desintegração do comprimido."
        }
      ],
      "answer": "A",
      "explanation": "Em primeira ordem, elimina-se uma fração constante por tempo. A meia- vida auxilia a estimar intervalo posológico, acúmulo e tempo para estado de equilíbrio ou eliminação."
    },
    {
      "id": "farmacia-095",
      "subjectId": "farmacia",
      "number": 95,
      "topic": "Farmacocinética - estado de equilíbrio",
      "area": "Farmacocinética",
      "stem": "Em regime de doses repetidas com cinética linear, o estado de equilíbrio costuma ser aproximado após:",
      "options": [
        {
          "letter": "A",
          "text": "quatro a cinco meias-vidas."
        },
        {
          "letter": "B",
          "text": "exatamente uma hora para todos os medicamentos."
        },
        {
          "letter": "C",
          "text": "uma única dose, independentemente do fármaco."
        },
        {
          "letter": "D",
          "text": "dez minutos após administração oral."
        },
        {
          "letter": "E",
          "text": "somente após interrupção do tratamento."
        }
      ],
      "answer": "A",
      "explanation": "A fração do equilíbrio alcançada cresce a cada meia-vida. A dose altera a concentração de equilíbrio em cinética linear, mas o tempo para alcançá-lo é determinado principalmente pela meia-vida."
    },
    {
      "id": "farmacia-096",
      "subjectId": "farmacia",
      "number": 96,
      "topic": "Farmacocinética - dose de ataque",
      "area": "Farmacocinética",
      "stem": "A dose de ataque é particularmente útil quando:",
      "options": [
        {
          "letter": "A",
          "text": "deseja-se atingir rapidamente uma concentração-alvo de fármaco com meia-vida longa."
        },
        {
          "letter": "B",
          "text": "pretende-se reduzir imediatamente o volume de distribuição."
        },
        {
          "letter": "C",
          "text": "não há necessidade de efeito rápido."
        },
        {
          "letter": "D",
          "text": "o fármaco não possui margem terapêutica."
        },
        {
          "letter": "E",
          "text": "se deseja substituir todas as doses de manutenção."
        }
      ],
      "answer": "A",
      "explanation": "A dose de ataque depende principalmente do volume de distribuição, da concentração-alvo e da biodisponibilidade. Ela não elimina a necessidade de doses de manutenção, que repõem o eliminado."
    },
    {
      "id": "farmacia-097",
      "subjectId": "farmacia",
      "number": 97,
      "topic": "Farmacocinética - primeira ordem",
      "area": "Farmacocinética",
      "stem": "Na eliminação de primeira ordem:",
      "options": [
        {
          "letter": "A",
          "text": "elimina-se quantidade fixa por unidade de tempo."
        },
        {
          "letter": "B",
          "text": "a meia-vida aumenta obrigatoriamente a cada dose."
        },
        {
          "letter": "C",
          "text": "elimina-se uma fração constante da quantidade presente por unidade de tempo."
        },
        {
          "letter": "D",
          "text": "não existe relação com a concentração."
        },
        {
          "letter": "E",
          "text": "a depuração é sempre zero."
        }
      ],
      "answer": "C",
      "explanation": "Quanto maior a concentração, maior a quantidade eliminada por unidade de tempo, embora a fração seja constante. Na ordem zero, elimina-se aproximadamente quantidade constante após saturação do processo."
    },
    {
      "id": "farmacia-098",
      "subjectId": "farmacia",
      "number": 98,
      "topic": "Interações - indução enzimática",
      "area": "Interações",
      "stem": "Um indutor de enzimas metabolizadoras pode, em geral:",
      "options": [
        {
          "letter": "A",
          "text": "reduzir imediatamente a síntese das enzimas."
        },
        {
          "letter": "B",
          "text": "aumentar a concentração de todo substrato."
        },
        {
          "letter": "C",
          "text": "agir sempre após uma única dose."
        },
        {
          "letter": "D",
          "text": "não apresentar efeito após ser suspenso."
        },
        {
          "letter": "E",
          "text": "aumentar o metabolismo de determinados substratos, reduzindo sua exposição e possivelmente sua eficácia."
        }
      ],
      "answer": "E",
      "explanation": "A indução costuma desenvolver-se e desaparecer gradualmente por envolver expressão enzimática. Para pró-fármacos, o efeito clínico pode ser diferente, pois maior metabolismo pode elevar formação do metabólito ativo."
    },
    {
      "id": "farmacia-099",
      "subjectId": "farmacia",
      "number": 99,
      "topic": "Interações - inibição enzimática",
      "area": "Interações",
      "stem": "A inibição do metabolismo de um fármaco ativo pode:",
      "options": [
        {
          "letter": "A",
          "text": "reduzir sempre sua concentração."
        },
        {
          "letter": "B",
          "text": "impedir qualquer absorção intestinal."
        },
        {
          "letter": "C",
          "text": "eliminar a possibilidade de toxicidade."
        },
        {
          "letter": "D",
          "text": "aumentar necessariamente sua excreção renal."
        },
        {
          "letter": "E",
          "text": "elevar sua exposição e risco de eventos adversos, dependendo da via metabólica e da relevância clínica."
        }
      ],
      "answer": "E",
      "explanation": "Inibidores podem elevar concentrações de substratos, sobretudo quando a via inibida é importante e a margem terapêutica é estreita. Para pró-fármacos, a inibição pode reduzir ativação e eficácia."
    },
    {
      "id": "farmacia-100",
      "subjectId": "farmacia",
      "number": 100,
      "topic": "Farmacocinética - ligação a proteínas",
      "area": "Farmacocinética",
      "stem": "Sobre a ligação de fármacos a proteínas plasmáticas, é correto afirmar:",
      "options": [
        {
          "letter": "A",
          "text": "somente a fração livre está imediatamente disponível para distribuição, metabolismo, eliminação e interação com alvos."
        },
        {
          "letter": "B",
          "text": "a fração ligada atravessa membranas mais rapidamente."
        },
        {
          "letter": "C",
          "text": "todo deslocamento proteico produz toxicidade clinicamente relevante."
        },
        {
          "letter": "D",
          "text": "albumina liga exclusivamente fármacos básicos."
        },
        {
          "letter": "E",
          "text": "a ligação não pode ser saturável."
        }
      ],
      "answer": "A",
      "explanation": "A fração ligada funciona como reservatório. Alterações de ligação podem ser compensadas por distribuição e eliminação, por isso o significado clínico deve ser avaliado no contexto do fármaco e do paciente."
    },
    {
      "id": "farmacia-101",
      "subjectId": "farmacia",
      "number": 101,
      "topic": "Farmacodinâmica - potência e eficácia",
      "area": "Farmacodinâmica",
      "stem": "Dois agonistas atingem o mesmo efeito máximo, mas o fármaco X necessita de menor concentração que Y. Logo, X é:",
      "options": [
        {
          "letter": "A",
          "text": "mais potente, embora não necessariamente mais eficaz."
        },
        {
          "letter": "B",
          "text": "mais eficaz e menos potente."
        },
        {
          "letter": "C",
          "text": "antagonista de Y."
        },
        {
          "letter": "D",
          "text": "desprovido de afinidade."
        },
        {
          "letter": "E",
          "text": "necessariamente mais seguro."
        }
      ],
      "answer": "A",
      "explanation": "Potência relaciona-se à dose ou concentração necessária; eficácia, ao efeito máximo. Maior potência não implica maior benefício clínico ou segurança."
    },
    {
      "id": "farmacia-102",
      "subjectId": "farmacia",
      "number": 102,
      "topic": "Farmacodinâmica - antagonismo competitivo",
      "area": "Farmacodinâmica",
      "stem": "Na presença de antagonista competitivo reversível, a curva dose-resposta do agonista tende a:",
      "options": [
        {
          "letter": "A",
          "text": "desaparecer irreversivelmente."
        },
        {
          "letter": "B",
          "text": "deslocar-se para a esquerda com maior potência."
        },
        {
          "letter": "C",
          "text": "apresentar sempre maior efeito máximo."
        },
        {
          "letter": "D",
          "text": "não sofrer qualquer alteração."
        },
        {
          "letter": "E",
          "text": "deslocar-se para a direita, podendo o efeito máximo ser alcançado com maior concentração de agonista."
        }
      ],
      "answer": "E",
      "explanation": "O antagonismo competitivo é superável pelo aumento do agonista. Em condições clássicas, reduz a potência aparente sem reduzir o efeito máximo."
    },
    {
      "id": "farmacia-103",
      "subjectId": "farmacia",
      "number": 103,
      "topic": "Margem terapêutica",
      "area": "Margem terapêutica",
      "stem": "Medicamentos de índice terapêutico estreito exigem maior atenção porque:",
      "options": [
        {
          "letter": "A",
          "text": "pequenas variações de exposição podem separar efeito terapêutico de toxicidade."
        },
        {
          "letter": "B",
          "text": "não produzem interações."
        },
        {
          "letter": "C",
          "text": "possuem sempre baixa potência."
        },
        {
          "letter": "D",
          "text": "dispensam monitoramento."
        },
        {
          "letter": "E",
          "text": "são necessariamente ineficazes por via oral."
        }
      ],
      "answer": "A",
      "explanation": "Dose, adesão, função renal ou hepática e interações podem alterar a exposição. Monitorização clínica ou laboratorial pode ser necessária para alguns fármacos."
    },
    {
      "id": "farmacia-104",
      "subjectId": "farmacia",
      "number": 104,
      "topic": "Farmacocinética clínica - função renal",
      "area": "Farmacocinética clínica",
      "stem": "Em paciente com redução importante da função renal, um fármaco eliminado predominantemente inalterado pelos rins pode exigir:",
      "options": [
        {
          "letter": "A",
          "text": "aumento automático da dose de ataque e manutenção."
        },
        {
          "letter": "B",
          "text": "nenhuma alteração em qualquer hipótese."
        },
        {
          "letter": "C",
          "text": "apenas mudança da cor da apresentação."
        },
        {
          "letter": "D",
          "text": "redução da dose de manutenção ou aumento do intervalo, conforme depuração, objetivo terapêutico e características do fármaco."
        },
        {
          "letter": "E",
          "text": "suspensão de todos os medicamentos."
        }
      ],
      "answer": "D",
      "explanation": "Menor depuração renal favorece acúmulo. O ajuste pode modificar dose, intervalo ou ambos. A dose de ataque depende mais do volume de distribuição e nem sempre precisa ser reduzida."
    },
    {
      "id": "farmacia-105",
      "subjectId": "farmacia",
      "number": 105,
      "topic": "Interação farmacodinâmica - anticoagulante",
      "area": "Interação farmacodinâmica",
      "stem": "A associação de anticoagulante oral com anti-inflamatório não esteroidal pode:",
      "options": [
        {
          "letter": "A",
          "text": "reduzir obrigatoriamente o risco hemorrágico."
        },
        {
          "letter": "B",
          "text": "neutralizar o efeito de ambos."
        },
        {
          "letter": "C",
          "text": "impedir lesão gastrointestinal."
        },
        {
          "letter": "D",
          "text": "eliminar a necessidade de monitoramento."
        },
        {
          "letter": "E",
          "text": "aumentar o risco de sangramento por efeitos farmacodinâmicos e, em alguns casos, farmacocinéticos somados."
        }
      ],
      "answer": "E",
      "explanation": "AINEs podem lesar mucosa e interferir na função plaquetária, somando-se à anticoagulação. O risco deve ser avaliado e alternativas ou proteção consideradas conforme o caso."
    },
    {
      "id": "farmacia-106",
      "subjectId": "farmacia",
      "number": 106,
      "topic": "Farmacologia cardiovascular - IECA",
      "area": "Farmacologia cardiovascular",
      "stem": "Efeito que merece monitoramento em paciente que inicia inibidor da enzima conversora de angiotensina é:",
      "options": [
        {
          "letter": "A",
          "text": "hipocalemia intensa como regra."
        },
        {
          "letter": "B",
          "text": "hipoglicemia obrigatória."
        },
        {
          "letter": "C",
          "text": "elevação do potássio e alteração da função renal em pacientes suscetíveis."
        },
        {
          "letter": "D",
          "text": "supressão medular universal."
        },
        {
          "letter": "E",
          "text": "glaucoma agudo previsível."
        }
      ],
      "answer": "C",
      "explanation": "IECA reduzem aldosterona e podem causar hiperpotassemia; creatinina pode se alterar, especialmente em hipovolemia, doença renal ou estenose de artérias renais. Tosse seca e angioedema também são efeitos conhecidos."
    },
    {
      "id": "farmacia-107",
      "subjectId": "farmacia",
      "number": 107,
      "topic": "Farmacologia cardiovascular - tiazídicos",
      "area": "Farmacologia cardiovascular",
      "stem": "Diuréticos tiazídicos podem produzir:",
      "options": [
        {
          "letter": "A",
          "text": "hiperpotassemia como efeito predominante."
        },
        {
          "letter": "B",
          "text": "hipercalemia obrigatória."
        },
        {
          "letter": "C",
          "text": "broncodilatação direta."
        },
        {
          "letter": "D",
          "text": "hiponatremia, hipocalemia e aumento do ácido úrico em pacientes suscetíveis."
        },
        {
          "letter": "E",
          "text": "supressão irreversível de insulina em todos os usuários."
        }
      ],
      "answer": "D",
      "explanation": "Alterações eletrolíticas e metabólicas devem ser acompanhadas. O risco depende de dose, idade, função renal, ingestão, comorbidades e associações."
    },
    {
      "id": "farmacia-108",
      "subjectId": "farmacia",
      "number": 108,
      "topic": "Farmacologia cardiovascular - bloqueador de canal de cálcio",
      "area": "Farmacologia cardiovascular",
      "stem": "Efeito adverso frequente da anlodipino é:",
      "options": [
        {
          "letter": "A",
          "text": "edema periférico relacionado à vasodilatação arteriolar."
        },
        {
          "letter": "B",
          "text": "broncoespasmo por bloqueio beta-2."
        },
        {
          "letter": "C",
          "text": "hipoglicemia grave."
        },
        {
          "letter": "D",
          "text": "tosse por aumento de bradicinina."
        },
        {
          "letter": "E",
          "text": "agranulocitose inevitável."
        }
      ],
      "answer": "A",
      "explanation": "O edema periférico dos di-hidropiridínicos decorre principalmente de alteração da pressão capilar, não de retenção volêmica simples; por isso nem sempre responde bem a diurético."
    },
    {
      "id": "farmacia-109",
      "subjectId": "farmacia",
      "number": 109,
      "topic": "Farmacologia cardiovascular - betabloqueadores",
      "area": "Farmacologia cardiovascular",
      "stem": "Em paciente com asma, requer cautela especial o uso de:",
      "options": [
        {
          "letter": "A",
          "text": "losartana."
        },
        {
          "letter": "B",
          "text": "anlodipino."
        },
        {
          "letter": "C",
          "text": "hidroclorotiazida."
        },
        {
          "letter": "D",
          "text": "betabloqueador não seletivo, pelo risco de broncoconstrição mediada por bloqueio beta-2."
        },
        {
          "letter": "E",
          "text": "enalapril exclusivamente por bloqueio beta-2."
        }
      ],
      "answer": "D",
      "explanation": "Bloqueadores não seletivos atingem receptores beta-2 brônquicos. Quando há indicação forte, a escolha, dose e monitoramento devem considerar seletividade e controle da doença respiratória."
    },
    {
      "id": "farmacia-110",
      "subjectId": "farmacia",
      "number": 110,
      "topic": "Farmacologia do diabetes - metformina",
      "area": "Farmacologia do diabetes",
      "stem": "A metformina reduz glicemia principalmente por:",
      "options": [
        {
          "letter": "A",
          "text": "estimular secreção de insulina independentemente da glicose."
        },
        {
          "letter": "B",
          "text": "bloquear irreversivelmente receptores de insulina."
        },
        {
          "letter": "C",
          "text": "reduzir produção hepática de glicose e melhorar sensibilidade à insulina, com baixo risco de hipoglicemia quando usada isoladamente."
        },
        {
          "letter": "D",
          "text": "aumentar absorção intestinal de glicose."
        },
        {
          "letter": "E",
          "text": "destruir células beta pancreáticas."
        }
      ],
      "answer": "C",
      "explanation": "A metformina não é secretagogo. Função renal e condições associadas a hipóxia ou acidose devem ser avaliadas devido ao raro, porém grave, risco de acidose lática."
    },
    {
      "id": "farmacia-111",
      "subjectId": "farmacia",
      "number": 111,
      "topic": "Farmacologia do diabetes - sulfonilureias",
      "area": "Farmacologia do diabetes",
      "stem": "Evento adverso relevante das sulfonilureias é:",
      "options": [
        {
          "letter": "A",
          "text": "tosse seca."
        },
        {
          "letter": "B",
          "text": "hipoglicemia, especialmente em idosos, jejum, função renal reduzida ou uso de agentes de ação prolongada."
        },
        {
          "letter": "C",
          "text": "broncodilatação excessiva."
        },
        {
          "letter": "D",
          "text": "síndrome de abstinência opioide."
        },
        {
          "letter": "E",
          "text": "hiperpotassemia por antagonismo da aldosterona."
        }
      ],
      "answer": "B",
      "explanation": "Sulfonilureias estimulam secreção de insulina e podem causar hipoglicemia e ganho de peso. Orientação sobre alimentação, sinais e manejo da hipoglicemia é essencial."
    },
    {
      "id": "farmacia-112",
      "subjectId": "farmacia",
      "number": 112,
      "topic": "Insulinas - uso seguro",
      "area": "Insulinas",
      "stem": "Para reduzir erros com insulina, é adequado:",
      "options": [
        {
          "letter": "A",
          "text": "escrever “U” para unidades em qualquer situação."
        },
        {
          "letter": "B",
          "text": "armazenar canetas de pacientes diferentes juntas sem identificação."
        },
        {
          "letter": "C",
          "text": "conferir tipo, concentração, dose, dispositivo e paciente e orientar técnica, rodízio de locais e reconhecimento de hipoglicemia."
        },
        {
          "letter": "D",
          "text": "reutilizar agulhas entre pacientes."
        },
        {
          "letter": "E",
          "text": "misturar qualquer insulina sem verificar compatibilidade."
        }
      ],
      "answer": "C",
      "explanation": "Insulina é medicamento de alta vigilância. Diferentes concentrações e perfis de ação elevam risco de troca; abreviações ambíguas e compartilhamento de canetas devem ser evitados."
    },
    {
      "id": "farmacia-113",
      "subjectId": "farmacia",
      "number": 113,
      "topic": "Hipoglicemia - orientação",
      "area": "Hipoglicemia",
      "stem": "Um paciente consciente, capaz de deglutir e com hipoglicemia sintomática deve, em regra, receber:",
      "options": [
        {
          "letter": "A",
          "text": "apenas água."
        },
        {
          "letter": "B",
          "text": "dose adicional de insulina."
        },
        {
          "letter": "C",
          "text": "alimento exclusivamente rico em gordura."
        },
        {
          "letter": "D",
          "text": "jejum até normalização espontânea."
        },
        {
          "letter": "E",
          "text": "carboidrato de absorção rápida, com reavaliação da glicemia e repetição ou complementação conforme resposta e plano assistencial."
        }
      ],
      "answer": "E",
      "explanation": "Carboidrato rápido corrige a glicemia mais prontamente. Alteração de consciência ou incapacidade de deglutir exige abordagem emergencial e não permite oferta oral pelo risco de aspiração."
    },
    {
      "id": "farmacia-114",
      "subjectId": "farmacia",
      "number": 114,
      "topic": "Diabetes - hemoglobina glicada",
      "area": "Diabetes",
      "stem": "A hemoglobina glicada é utilizada principalmente para:",
      "options": [
        {
          "letter": "A",
          "text": "medir glicemia apenas no instante da coleta."
        },
        {
          "letter": "B",
          "text": "diagnosticar hipoglicemia aguda em tempo real."
        },
        {
          "letter": "C",
          "text": "avaliar exclusivamente função renal."
        },
        {
          "letter": "D",
          "text": "substituir toda automonitorização."
        },
        {
          "letter": "E",
          "text": "estimar a exposição glicêmica média dos últimos meses, com maior peso das semanas mais recentes."
        }
      ],
      "answer": "E",
      "explanation": "A HbA1c reflete glicação ao longo da vida das hemácias. Anemias, hemoglobinopatias, transfusões e alterações da sobrevida eritrocitária podem interferir na interpretação."
    },
    {
      "id": "farmacia-115",
      "subjectId": "farmacia",
      "number": 115,
      "topic": "Antimicrobianos - uso racional",
      "area": "Antimicrobianos",
      "stem": "Contribui para conter resistência antimicrobiana:",
      "options": [
        {
          "letter": "A",
          "text": "usar antibiótico em toda infecção viral."
        },
        {
          "letter": "B",
          "text": "interromper tratamento assim que houver primeira melhora, em qualquer esquema."
        },
        {
          "letter": "C",
          "text": "compartilhar sobras com familiares."
        },
        {
          "letter": "D",
          "text": "escolher sempre o antimicrobiano de espectro mais amplo."
        },
        {
          "letter": "E",
          "text": "utilizar antimicrobiano somente quando indicado, com agente, dose, via e duração adequados e reavaliar conforme dados clínicos e microbiológicos."
        }
      ],
      "answer": "E",
      "explanation": "Stewardship busca melhor resultado individual e menor pressão seletiva. Espectro excessivo, duração inadequada e uso sem indicação aumentam eventos adversos e resistência."
    },
    {
      "id": "farmacia-116",
      "subjectId": "farmacia",
      "number": 116,
      "topic": "Adesão ao tratamento",
      "area": "Adesão ao tratamento",
      "stem": "Para melhorar adesão em doença crônica, a intervenção mais adequada é:",
      "options": [
        {
          "letter": "A",
          "text": "culpar o paciente por qualquer falha."
        },
        {
          "letter": "B",
          "text": "fornecer orientação padronizada sem perguntar dificuldades."
        },
        {
          "letter": "C",
          "text": "aumentar a complexidade do regime."
        },
        {
          "letter": "D",
          "text": "ocultar possíveis efeitos adversos."
        },
        {
          "letter": "E",
          "text": "identificar barreiras com o paciente e pactuar soluções factíveis, simplificando o regime quando possível e verificando compreensão."
        }
      ],
      "answer": "E",
      "explanation": "Adesão é multifatorial: envolve acesso, crenças, sintomas, cognição, eventos adversos, rotina e complexidade. A abordagem deve ser não julgadora e individualizada."
    },
    {
      "id": "farmacia-117",
      "subjectId": "farmacia",
      "number": 117,
      "topic": "Conciliação de medicamentos",
      "area": "Conciliação de medicamentos",
      "stem": "A conciliação medicamentosa consiste em:",
      "options": [
        {
          "letter": "A",
          "text": "suspender todos os medicamentos na admissão."
        },
        {
          "letter": "B",
          "text": "copiar uma lista antiga sem confirmar com o paciente."
        },
        {
          "letter": "C",
          "text": "substituir toda prescrição por medicamentos disponíveis no estoque."
        },
        {
          "letter": "D",
          "text": "obter a melhor história possível de uso, comparar com as prescrições nas transições e resolver discrepâncias não intencionais."
        },
        {
          "letter": "E",
          "text": "conferir apenas medicamentos sujeitos a controle especial."
        }
      ],
      "answer": "D",
      "explanation": "Transições entre domicílio, unidades e alta são pontos de risco. A história inclui prescritos, isentos, fitoterápicos, suplementos, doses, horários, alergias e uso real."
    },
    {
      "id": "farmacia-118",
      "subjectId": "farmacia",
      "number": 118,
      "topic": "Acompanhamento farmacoterapêutico",
      "area": "Acompanhamento farmacoterapêutico",
      "stem": "No acompanhamento farmacoterapêutico, o plano de cuidado deve:",
      "options": [
        {
          "letter": "A",
          "text": "ser elaborado sem participação do paciente."
        },
        {
          "letter": "B",
          "text": "limitar-se a listar medicamentos."
        },
        {
          "letter": "C",
          "text": "definir problemas e objetivos, intervenções, parâmetros de monitoramento e prazos de reavaliação pactuados com o paciente e a equipe quando necessário."
        },
        {
          "letter": "D",
          "text": "substituir todo diagnóstico médico."
        },
        {
          "letter": "E",
          "text": "dispensar registro clínico."
        }
      ],
      "answer": "C",
      "explanation": "O processo é cíclico: coletar dados, avaliar necessidade, efetividade, segurança e adesão, estabelecer plano, intervir, acompanhar resultados e registrar."
    },
    {
      "id": "farmacia-119",
      "subjectId": "farmacia",
      "number": 119,
      "topic": "Fitoterapia no SUS",
      "area": "Fitoterapia no SUS",
      "stem": "Sobre plantas medicinais e fitoterápicos no SUS, é correto afirmar:",
      "options": [
        {
          "letter": "A",
          "text": "“Natural” significa ausência de risco."
        },
        {
          "letter": "B",
          "text": "toda planta pode ser substituída por outra de nome popular semelhante."
        },
        {
          "letter": "C",
          "text": "projetos devem considerar identificação botânica, evidência, qualidade, segurança, interações, cultivo ou obtenção e educação da comunidade."
        },
        {
          "letter": "D",
          "text": "fitoterápicos não interagem com medicamentos."
        },
        {
          "letter": "E",
          "text": "controle de qualidade é desnecessário para material vegetal."
        }
      ],
      "answer": "C",
      "explanation": "Variação de espécie, parte usada, cultivo, processamento e contaminantes afeta composição. Uso comunitário responsável requer farmacovigilância, orientação e integração com a rede de saúde."
    },
    {
      "id": "farmacia-120",
      "subjectId": "farmacia",
      "number": 120,
      "topic": "Insumos de origem animal e vegetal",
      "area": "Insumos de origem animal e vegetal",
      "stem": "Na análise de pureza de insumo natural, é relevante avaliar:",
      "options": [
        {
          "letter": "A",
          "text": "apenas a aparência externa da embalagem."
        },
        {
          "letter": "B",
          "text": "somente o preço de compra."
        },
        {
          "letter": "C",
          "text": "identidade, teor ou marcadores, umidade, matérias estranhas, contaminantes e adulterações conforme a natureza e a especificação do insumo."
        },
        {
          "letter": "D",
          "text": "exclusivamente o nome popular."
        },
        {
          "letter": "E",
          "text": "apenas a data de emissão da nota fiscal."
        }
      ],
      "answer": "C",
      "explanation": "Insumos naturais apresentam variabilidade e risco de troca, adulteração, contaminação microbiológica, resíduos químicos e materiais estranhos. A avaliação combina amostragem, identificação e ensaios apropriados."
    },
    {
      "id": "farmacia-121",
      "subjectId": "farmacia",
      "number": 121,
      "topic": "Biossegurança - equipamentos de proteção",
      "area": "Biossegurança",
      "stem": "Sobre o uso de Equipamentos de Proteção Individual, assinale a alternativa correta.",
      "options": [
        {
          "letter": "A",
          "text": "O EPI elimina o risco na fonte e dispensa outras medidas."
        },
        {
          "letter": "B",
          "text": "Um único tipo de luva protege contra todas as substâncias químicas."
        },
        {
          "letter": "C",
          "text": "Respiradores e máscaras cirúrgicas são equivalentes para qualquer exposição."
        },
        {
          "letter": "D",
          "text": "O EPI pode ser escolhido apenas pelo conforto, sem avaliação do risco."
        },
        {
          "letter": "E",
          "text": "O EPI deve ser selecionado conforme o perigo e a atividade, usado e retirado corretamente e integrado a controles de engenharia e administrativos."
        }
      ],
      "answer": "E",
      "explanation": "A hierarquia de controles prioriza eliminação, substituição e medidas coletivas antes da dependência exclusiva de EPI. Compatibilidade química, tamanho, treinamento, descarte e prevenção de autocontaminação são essenciais."
    },
    {
      "id": "farmacia-122",
      "subjectId": "farmacia",
      "number": 122,
      "topic": "Resíduos de serviços de saúde - Grupo B",
      "area": "Resíduos de serviços de saúde",
      "stem": "Medicamentos vencidos e outros resíduos químicos com características de periculosidade enquadram-se, em regra, no grupo:",
      "options": [
        {
          "letter": "A",
          "text": "A, exclusivamente biológico."
        },
        {
          "letter": "B",
          "text": "C, radioativo."
        },
        {
          "letter": "C",
          "text": "D, comum."
        },
        {
          "letter": "D",
          "text": "B, químico."
        },
        {
          "letter": "E",
          "text": "E, perfurocortante, independentemente da forma."
        }
      ],
      "answer": "D",
      "explanation": "O Grupo B reúne resíduos contendo produtos químicos que podem oferecer risco segundo inflamabilidade, corrosividade, reatividade, toxicidade e outras características. Perfurocortantes pertencem ao Grupo E."
    },
    {
      "id": "farmacia-123",
      "subjectId": "farmacia",
      "number": 123,
      "topic": "PGRSS",
      "area": "PGRSS",
      "stem": "O Plano de Gerenciamento de Resíduos de Serviços de Saúde deve:",
      "options": [
        {
          "letter": "A",
          "text": "ser elaborado apenas após acidente ambiental."
        },
        {
          "letter": "B",
          "text": "limitar-se ao transporte externo."
        },
        {
          "letter": "C",
          "text": "ser responsabilidade exclusiva da empresa coletora."
        },
        {
          "letter": "D",
          "text": "tratar todos os resíduos como comuns."
        },
        {
          "letter": "E",
          "text": "descrever as ações de segregação, acondicionamento, identificação, coleta, armazenamento, transporte, tratamento e destinação conforme riscos e normas."
        }
      ],
      "answer": "E",
      "explanation": "O serviço gerador é responsável por elaborar, implantar, implementar e monitorar o PGRSS. A segregação deve ocorrer no momento e local da geração para reduzir risco, volume perigoso e acidentes."
    },
    {
      "id": "farmacia-124",
      "subjectId": "farmacia",
      "number": 124,
      "topic": "Vigilância Sanitária - produtos sujeitos a controle",
      "area": "Vigilância Sanitária",
      "stem": "A atuação da Vigilância Sanitária sobre medicamentos, cosméticos e saneantes busca:",
      "options": [
        {
          "letter": "A",
          "text": "apenas arrecadar taxas."
        },
        {
          "letter": "B",
          "text": "substituir o controle de qualidade do fabricante."
        },
        {
          "letter": "C",
          "text": "fiscalizar somente produtos importados."
        },
        {
          "letter": "D",
          "text": "garantir lucro mínimo ao estabelecimento."
        },
        {
          "letter": "E",
          "text": "prevenir e reduzir riscos à saúde mediante regulação, inspeção, monitoramento e adoção de medidas sobre produtos, serviços e processos."
        }
      ],
      "answer": "E",
      "explanation": "O caráter é preventivo e protetivo. Regularização, rotulagem, fabricação, armazenamento, publicidade e comercialização podem integrar a fiscalização conforme a categoria e o risco."
    },
    {
      "id": "farmacia-125",
      "subjectId": "farmacia",
      "number": 125,
      "topic": "Qualidade da água - potabilidade",
      "area": "Qualidade da água",
      "stem": "Água transparente e sem odor:",
      "options": [
        {
          "letter": "A",
          "text": "é necessariamente potável."
        },
        {
          "letter": "B",
          "text": "dispensa análise microbiológica."
        },
        {
          "letter": "C",
          "text": "somente é considerada potável quando atende ao conjunto de parâmetros e valores estabelecidos na norma vigente, não bastando características sensoriais."
        },
        {
          "letter": "D",
          "text": "pode conter qualquer concentração de contaminantes químicos."
        },
        {
          "letter": "E",
          "text": "não precisa de vigilância quando proveniente de rede pública."
        }
      ],
      "answer": "C",
      "explanation": "Aparência não exclui microrganismos ou contaminantes químicos. A norma vigente está no Anexo XX da Portaria de Consolidação GM/MS nº 5/2017, atualizado pelas Portarias GM/MS nº 888 e nº 2.472/2021."
    },
    {
      "id": "farmacia-126",
      "subjectId": "farmacia",
      "number": 126,
      "topic": "Toxicologia - paracetamol",
      "area": "Toxicologia",
      "stem": "O antídoto empregado na intoxicação por paracetamol é:",
      "options": [
        {
          "letter": "A",
          "text": "flumazenil."
        },
        {
          "letter": "B",
          "text": "atropina."
        },
        {
          "letter": "C",
          "text": "N-acetilcisteína."
        },
        {
          "letter": "D",
          "text": "naloxona."
        },
        {
          "letter": "E",
          "text": "vitamina K."
        }
      ],
      "answer": "C",
      "explanation": "A N-acetilcisteína repõe capacidade de detoxificação do metabólito reativo e é mais efetiva quando iniciada precocemente, embora possa ser indicada mais tarde conforme avaliação clínica e laboratorial."
    },
    {
      "id": "farmacia-127",
      "subjectId": "farmacia",
      "number": 127,
      "topic": "Toxicologia - organofosforados",
      "area": "Toxicologia",
      "stem": "Na síndrome colinérgica por organofosforados, o fármaco utilizado para antagonizar manifestações muscarínicas é:",
      "options": [
        {
          "letter": "A",
          "text": "naloxona."
        },
        {
          "letter": "B",
          "text": "atropina."
        },
        {
          "letter": "C",
          "text": "azul de metileno."
        },
        {
          "letter": "D",
          "text": "deferoxamina."
        },
        {
          "letter": "E",
          "text": "bicarbonato de sódio como antídoto específico único."
        }
      ],
      "answer": "B",
      "explanation": "Atropina controla broncorreia, broncoespasmo e outras manifestações muscarínicas. O manejo inclui descontaminação segura, suporte e, quando indicado, oxima para reativação da acetilcolinesterase."
    },
    {
      "id": "farmacia-128",
      "subjectId": "farmacia",
      "number": 128,
      "topic": "Soros antiofídicos",
      "area": "Soros antiofídicos",
      "stem": "O soro antiofídico deve ser escolhido principalmente com base:",
      "options": [
        {
          "letter": "A",
          "text": "apenas no peso do paciente."
        },
        {
          "letter": "B",
          "text": "no gênero ou tipo de envenenamento suspeito e na gravidade clínica, seguindo o protocolo, pois o antiveneno possui especificidade."
        },
        {
          "letter": "C",
          "text": "na cor da serpente exclusivamente."
        },
        {
          "letter": "D",
          "text": "na via oral como primeira escolha."
        },
        {
          "letter": "E",
          "text": "no tempo de coagulação como único dado possível."
        }
      ],
      "answer": "B",
      "explanation": "A identificação sindrômica e epidemiológica orienta o antiveneno e o número de ampolas. A dose costuma relacionar-se à gravidade e à carga de veneno, e não ao peso corporal como ocorre com muitos medicamentos."
    },
    {
      "id": "farmacia-129",
      "subjectId": "farmacia",
      "number": 129,
      "topic": "Vacinas - rede de frio",
      "area": "Vacinas",
      "stem": "Na sala de imunização, a faixa geralmente recomendada para conservação da maioria das vacinas do PNI é:",
      "options": [
        {
          "letter": "A",
          "text": "-20 °C a -10 °C para todas."
        },
        {
          "letter": "B",
          "text": "0 °C exatamente."
        },
        {
          "letter": "C",
          "text": "8 °C a 15 °C."
        },
        {
          "letter": "D",
          "text": "temperatura ambiente até 30 °C."
        },
        {
          "letter": "E",
          "text": "+2 °C a +8 °C, respeitadas as especificações de cada imunobiológico."
        }
      ],
      "answer": "E",
      "explanation": "A faixa de +2 °C a +8 °C é referência geral para a instância local. Alguns produtos e etapas possuem requisitos próprios; portanto, manual e fabricante devem ser observados."
    },
    {
      "id": "farmacia-130",
      "subjectId": "farmacia",
      "number": 130,
      "topic": "Vacinas - sensibilidade ao congelamento",
      "area": "Vacinas",
      "stem": "Sobre vacinas sensíveis ao congelamento, é correto afirmar:",
      "options": [
        {
          "letter": "A",
          "text": "congelá-las aumenta a potência."
        },
        {
          "letter": "B",
          "text": "exposição a temperaturas abaixo da faixa pode danificá-las irreversivelmente, mesmo que a embalagem permaneça íntegra."
        },
        {
          "letter": "C",
          "text": "basta descongelar para restaurar a qualidade."
        },
        {
          "letter": "D",
          "text": "somente vacinas liofilizadas sofrem dano pelo frio."
        },
        {
          "letter": "E",
          "text": "o congelamento pode ser avaliado apenas pela cor."
        }
      ],
      "answer": "B",
      "explanation": "Produtos adsorvidos e outros imunobiológicos podem perder qualidade quando congelados. Gelo reciclável deve ser condicionado e posicionado conforme os procedimentos para evitar contato térmico inadequado."
    },
    {
      "id": "farmacia-131",
      "subjectId": "farmacia",
      "number": 131,
      "topic": "Rede de frio - desvio de temperatura",
      "area": "Rede de frio",
      "stem": "Ao detectar excursão de temperatura em vacinas, a conduta correta é:",
      "options": [
        {
          "letter": "A",
          "text": "aplicar rapidamente todas as doses."
        },
        {
          "letter": "B",
          "text": "descartar sem registrar ou consultar o programa."
        },
        {
          "letter": "C",
          "text": "alterar o registro do equipamento."
        },
        {
          "letter": "D",
          "text": "manter os produtos identificados e segregados na faixa recomendada, registrar o histórico e solicitar avaliação técnica antes do uso ou descarte."
        },
        {
          "letter": "E",
          "text": "deixá-los em temperatura ambiente até decisão."
        }
      ],
      "answer": "D",
      "explanation": "A avaliação considera produto, lote, temperatura, duração e exposições anteriores. Descarte precipitado gera perda, enquanto uso sem avaliação pode comprometer efetividade."
    },
    {
      "id": "farmacia-132",
      "subjectId": "farmacia",
      "number": 132,
      "topic": "Imunobiológicos - validade",
      "area": "Imunobiológicos",
      "stem": "Uma vacina vencida:",
      "options": [
        {
          "letter": "A",
          "text": "pode ser usada por mais 30 dias se refrigerada."
        },
        {
          "letter": "B",
          "text": "recupera validade após congelamento."
        },
        {
          "letter": "C",
          "text": "pode ser administrada com consentimento do paciente."
        },
        {
          "letter": "D",
          "text": "deve ser misturada a lote válido."
        },
        {
          "letter": "E",
          "text": "não deve ser administrada e precisa ser segregada, registrada e destinada conforme o gerenciamento aplicável."
        }
      ],
      "answer": "E",
      "explanation": "A conservação adequada não prolonga a validade autorizada. O controle por FEFO e a verificação antes da aplicação são barreiras essenciais."
    },
    {
      "id": "farmacia-133",
      "subjectId": "farmacia",
      "number": 133,
      "topic": "Sistemas de distribuição de medicamentos",
      "area": "Sistemas de distribuição de medicamentos",
      "stem": "Uma vantagem do sistema de distribuição por dose unitária é:",
      "options": [
        {
          "letter": "A",
          "text": "eliminar toda necessidade de prescrição."
        },
        {
          "letter": "B",
          "text": "aumentar estoques descentralizados sem controle."
        },
        {
          "letter": "C",
          "text": "disponibilizar doses identificadas para cada paciente e horário, favorecendo rastreabilidade e redução de erros e perdas."
        },
        {
          "letter": "D",
          "text": "impedir participação do farmacêutico."
        },
        {
          "letter": "E",
          "text": "dispensar conferência na administração."
        }
      ],
      "answer": "C",
      "explanation": "A dose unitária aproxima a distribuição da prescrição individual e reduz manipulações e estoques nas unidades. Não elimina conferência, registro nem monitoramento."
    },
    {
      "id": "farmacia-134",
      "subjectId": "farmacia",
      "number": 134,
      "topic": "Auditoria farmacêutica - parecer técnico",
      "area": "Auditoria farmacêutica",
      "stem": "Um parecer técnico sobre padronização de medicamento deve:",
      "options": [
        {
          "letter": "A",
          "text": "reproduzir material promocional."
        },
        {
          "letter": "B",
          "text": "considerar apenas o preço por caixa."
        },
        {
          "letter": "C",
          "text": "omitir conflitos de interesse."
        },
        {
          "letter": "D",
          "text": "explicitar pergunta, evidências, eficácia, segurança, qualidade, custos, impacto orçamentário, alternativas e conclusão fundamentada."
        },
        {
          "letter": "E",
          "text": "garantir resultado clínico individual."
        }
      ],
      "answer": "D",
      "explanation": "O parecer deve ser transparente e reprodutível. Custo-efetividade e impacto orçamentário são conceitos diferentes e devem ser analisados juntamente com a relevância clínica e a qualidade da evidência."
    },
    {
      "id": "farmacia-135",
      "subjectId": "farmacia",
      "number": 135,
      "topic": "Indicadores de consumo - DDD",
      "area": "Indicadores de consumo",
      "stem": "A Dose Diária Definida (DDD) é:",
      "options": [
        {
          "letter": "A",
          "text": "a dose obrigatória para cada paciente."
        },
        {
          "letter": "B",
          "text": "unidade técnica de comparação correspondente à dose média de manutenção diária presumida para a principal indicação do medicamento em adultos."
        },
        {
          "letter": "C",
          "text": "sinônimo de dose prescrita diária individual."
        },
        {
          "letter": "D",
          "text": "medida exclusiva de custo."
        },
        {
          "letter": "E",
          "text": "valor que substitui dados de população e tempo."
        }
      ],
      "answer": "B",
      "explanation": "A DDD permite comparar consumo entre locais e períodos, frequentemente ajustada por habitantes ou leitos-dia. Não representa necessariamente a dose recomendada ou realmente prescrita a um paciente."
    },
    {
      "id": "farmacia-136",
      "subjectId": "farmacia",
      "number": 136,
      "topic": "Licitação de medicamentos - julgamento técnico",
      "area": "Licitação de medicamentos",
      "stem": "Em uma licitação, a proposta de menor preço deve ser desclassificada quando:",
      "options": [
        {
          "letter": "A",
          "text": "o produto ou a proposta não atende a especificações e requisitos sanitários ou técnicos essenciais definidos no instrumento convocatório."
        },
        {
          "letter": "B",
          "text": "o fornecedor oferece prazo de entrega adequado."
        },
        {
          "letter": "C",
          "text": "o medicamento possui registro válido."
        },
        {
          "letter": "D",
          "text": "a embalagem atende ao solicitado."
        },
        {
          "letter": "E",
          "text": "a documentação comprova a capacidade exigida."
        }
      ],
      "answer": "A",
      "explanation": "Vantajosidade não se resume ao menor número. A Administração precisa receber produto conforme, seguro e adequado; aceitar item incompatível viola o planejamento e pode gerar dano assistencial e econômico."
    },
    {
      "id": "farmacia-137",
      "subjectId": "farmacia",
      "number": 137,
      "topic": "Aquisição e gestão de riscos",
      "area": "Aquisição e gestão de riscos",
      "stem": "Para medicamentos com histórico de atraso de fornecimento e alta criticidade, é adequado:",
      "options": [
        {
          "letter": "A",
          "text": "incorporar análise de risco ao planejamento, diversificar estratégias legalmente cabíveis, monitorar o contrato e ajustar estoques de segurança com justificativa."
        },
        {
          "letter": "B",
          "text": "ignorar o desempenho anterior do fornecedor."
        },
        {
          "letter": "C",
          "text": "adquirir quantidade ilimitada sem avaliar validade."
        },
        {
          "letter": "D",
          "text": "esperar o estoque zerar para iniciar o processo."
        },
        {
          "letter": "E",
          "text": "substituir automaticamente por produto não padronizado."
        }
      ],
      "answer": "A",
      "explanation": "Criticidade, lead time, confiabilidade e validade orientam a mitigação. Estoque excessivo também é risco; a resposta deve ser proporcional e documentada."
    },
    {
      "id": "farmacia-138",
      "subjectId": "farmacia",
      "number": 138,
      "topic": "Ética farmacêutica - autonomia técnica",
      "area": "Ética farmacêutica",
      "stem": "O proprietário exige que o farmacêutico dispense produto em condição que considera insegura e contrária à legislação. Eticamente, o farmacêutico deve:",
      "options": [
        {
          "letter": "A",
          "text": "obedecer para preservar o vínculo empregatício."
        },
        {
          "letter": "B",
          "text": "ocultar a irregularidade do usuário."
        },
        {
          "letter": "C",
          "text": "assinar o ato e transferir verbalmente a responsabilidade."
        },
        {
          "letter": "D",
          "text": "recusar a prática, fundamentar e registrar sua posição e comunicar às instâncias competentes quando necessário."
        },
        {
          "letter": "E",
          "text": "abandonar o estabelecimento sem qualquer providência."
        }
      ],
      "answer": "D",
      "explanation": "A autonomia técnica e o dever de proteger a saúde não podem ser subordinados a interesse comercial. A resposta deve ser profissional, documentada e proporcional, preservando paciente e legalidade."
    },
    {
      "id": "farmacia-139",
      "subjectId": "farmacia",
      "number": 139,
      "topic": "Ética farmacêutica - prontuário e registro",
      "area": "Ética farmacêutica",
      "stem": "Os registros farmacêuticos devem ser:",
      "options": [
        {
          "letter": "A",
          "text": "apagados após cada atendimento."
        },
        {
          "letter": "B",
          "text": "acessíveis a qualquer funcionário sem necessidade."
        },
        {
          "letter": "C",
          "text": "substituídos por memória verbal."
        },
        {
          "letter": "D",
          "text": "divulgados em grupo de mensagens pessoal."
        },
        {
          "letter": "E",
          "text": "claros, completos, rastreáveis, protegidos contra acesso indevido e mantidos segundo requisitos profissionais e legais."
        }
      ],
      "answer": "E",
      "explanation": "O registro sustenta continuidade do cuidado, comunicação, avaliação de resultados e responsabilidade profissional. Correções devem preservar integridade e histórico, sem apagar o dado original de forma indevida."
    },
    {
      "id": "farmacia-140",
      "subjectId": "farmacia",
      "number": 140,
      "topic": "Caso integrado - assistência farmacêutica",
      "area": "Caso integrado",
      "stem": "Uma unidade apresenta faltas recorrentes de losartana, simultaneamente a grande quantidade de outro anti-hipertensivo próximo do vencimento. A intervenção mais completa é:",
      "options": [
        {
          "letter": "A",
          "text": "aumentar indiscriminadamente a compra de todos os anti-hipertensivos."
        },
        {
          "letter": "B",
          "text": "descartar o excedente e manter a programação inalterada."
        },
        {
          "letter": "C",
          "text": "revisar seleção e programação, analisar consumo e demanda reprimida, verificar prescrições e estoques, redistribuir lotes quando possível, corrigir parâmetros de reposição e monitorar indicadores."
        },
        {
          "letter": "D",
          "text": "responsabilizar exclusivamente os pacientes."
        },
        {
          "letter": "E",
          "text": "substituir tratamentos sem avaliação clínica ou protocolo."
        }
      ],
      "answer": "C",
      "explanation": "O problema envolve etapas conectadas do ciclo. A solução exige dados, articulação clínica e logística, prevenção de perdas e acompanhamento; uma compra isolada pode apenas deslocar o desequilíbrio."
    },
    {
      "id": "farmacia-141",
      "subjectId": "farmacia",
      "number": 141,
      "topic": "Antimicrobianos - alergia a betalactâmicos",
      "area": "Antimicrobianos",
      "stem": "Antes de excluir todos os betalactâmicos por relato de “alergia à penicilina”, o farmacêutico deve:",
      "options": [
        {
          "letter": "A",
          "text": "considerar todo efeito gastrointestinal como anafilaxia."
        },
        {
          "letter": "B",
          "text": "retirar o registro sem entrevistar o paciente."
        },
        {
          "letter": "C",
          "text": "recomendar reexposição domiciliar sem avaliação."
        },
        {
          "letter": "D",
          "text": "assumir que toda reação possui o mesmo risco de reação cruzada."
        },
        {
          "letter": "E",
          "text": "caracterizar medicamento, manifestação, tempo de início, gravidade, tratamento recebido e exposições posteriores, encaminhando para avaliação quando indicada."
        }
      ],
      "answer": "E",
      "explanation": "Muitos rótulos de alergia são imprecisos e levam ao uso de alternativas menos adequadas. Diferenciar intolerância, reação tardia leve e hipersensibilidade grave melhora segurança sem promover reexposição imprudente."
    },
    {
      "id": "farmacia-142",
      "subjectId": "farmacia",
      "number": 142,
      "topic": "Antimicrobianos - aminoglicosídeos",
      "area": "Antimicrobianos",
      "stem": "Toxicidades clássicas associadas aos aminoglicosídeos incluem:",
      "options": [
        {
          "letter": "A",
          "text": "hipoglicemia e tosse."
        },
        {
          "letter": "B",
          "text": "hepatotoxicidade isolada e edema periférico."
        },
        {
          "letter": "C",
          "text": "constipação e retenção urinária."
        },
        {
          "letter": "D",
          "text": "síndrome serotoninérgica."
        },
        {
          "letter": "E",
          "text": "nefrotoxicidade e ototoxicidade, com risco relacionado à exposição e a fatores do paciente."
        }
      ],
      "answer": "E",
      "explanation": "Função renal, dose, duração, níveis quando indicados e associações nefro ou ototóxicas devem ser considerados. Bloqueio neuromuscular também pode ocorrer em situações específicas."
    },
    {
      "id": "farmacia-143",
      "subjectId": "farmacia",
      "number": 143,
      "topic": "Antimicrobianos - macrolídeos",
      "area": "Antimicrobianos",
      "stem": "Alguns macrolídeos merecem cautela porque podem:",
      "options": [
        {
          "letter": "A",
          "text": "reduzir o intervalo QT e impedir arritmias."
        },
        {
          "letter": "B",
          "text": "prolongar o intervalo QT e interagir por inibição enzimática, dependendo do agente."
        },
        {
          "letter": "C",
          "text": "produzir hipoglicemia por reposição de insulina."
        },
        {
          "letter": "D",
          "text": "antagonizar receptores opioides."
        },
        {
          "letter": "E",
          "text": "impedir qualquer metabolismo hepático."
        }
      ],
      "answer": "B",
      "explanation": "O risco de prolongamento de QT cresce com predisposição, distúrbios eletrolíticos e outros fármacos. O potencial de interação por CYP não é igual para todos os macrolídeos."
    },
    {
      "id": "farmacia-144",
      "subjectId": "farmacia",
      "number": 144,
      "topic": "Antimicrobianos - descalonamento",
      "area": "Antimicrobianos",
      "stem": "Após resultado de cultura identificar microrganismo sensível a agente de espectro mais estreito, é adequado:",
      "options": [
        {
          "letter": "A",
          "text": "reavaliar e descalonar o tratamento quando clinicamente possível."
        },
        {
          "letter": "B",
          "text": "manter sempre a combinação mais ampla."
        },
        {
          "letter": "C",
          "text": "acrescentar antimicrobianos sem indicação."
        },
        {
          "letter": "D",
          "text": "ignorar sítio de infecção e evolução clínica."
        },
        {
          "letter": "E",
          "text": "suspender imediatamente toda terapia, independentemente do quadro."
        }
      ],
      "answer": "A",
      "explanation": "O descalonamento reduz pressão seletiva, toxicidade e custo, mantendo cobertura eficaz. A decisão integra cultura, foco, penetração, resposta clínica e características do paciente."
    },
    {
      "id": "farmacia-145",
      "subjectId": "farmacia",
      "number": 145,
      "topic": "Anti-inflamatórios não esteroidais",
      "area": "Anti-inflamatórios não esteroidais",
      "stem": "Em idoso com doença renal crônica, insuficiência cardíaca e uso de anticoagulante, os AINEs podem aumentar risco de:",
      "options": [
        {
          "letter": "A",
          "text": "apenas sonolência leve."
        },
        {
          "letter": "B",
          "text": "hipoglicemia por excesso de insulina."
        },
        {
          "letter": "C",
          "text": "broncodilatação e poliúria protetora."
        },
        {
          "letter": "D",
          "text": "lesão renal, retenção hidrossalina, descompensação cardiovascular e sangramento."
        },
        {
          "letter": "E",
          "text": "redução universal da pressão arterial."
        }
      ],
      "answer": "D",
      "explanation": "A inibição de prostaglandinas afeta perfusão renal, mucosa digestiva e homeostase. Risco, dose, duração, indicação e alternativas precisam ser avaliados."
    },
    {
      "id": "farmacia-146",
      "subjectId": "farmacia",
      "number": 146,
      "topic": "Paracetamol - toxicidade",
      "area": "Paracetamol",
      "stem": "Na superdose de paracetamol, a lesão hepática decorre principalmente:",
      "options": [
        {
          "letter": "A",
          "text": "do bloqueio irreversível de receptores opioides."
        },
        {
          "letter": "B",
          "text": "da formação de cristais de cálcio."
        },
        {
          "letter": "C",
          "text": "de reação alérgica em todos os pacientes."
        },
        {
          "letter": "D",
          "text": "do acúmulo do metabólito reativo NAPQI quando as vias de conjugação e a glutationa se tornam insuficientes."
        },
        {
          "letter": "E",
          "text": "da inibição exclusiva da vitamina K."
        }
      ],
      "answer": "D",
      "explanation": "Em doses terapêuticas, pequena fração forma NAPQI e é detoxificada pela glutationa. Na superdose, o metabólito aumenta e causa necrose hepática; a N-acetilcisteína restaura a capacidade de detoxificação."
    },
    {
      "id": "farmacia-147",
      "subjectId": "farmacia",
      "number": 147,
      "topic": "Opioides - segurança",
      "area": "Opioides",
      "stem": "O efeito adverso agudo mais preocupante em superdose de opioide é:",
      "options": [
        {
          "letter": "A",
          "text": "hipertensão grave isolada."
        },
        {
          "letter": "B",
          "text": "diarreia intensa."
        },
        {
          "letter": "C",
          "text": "midríase com agitação."
        },
        {
          "letter": "D",
          "text": "hiperreflexia generalizada."
        },
        {
          "letter": "E",
          "text": "depressão respiratória, frequentemente acompanhada de redução da consciência e miose."
        }
      ],
      "answer": "E",
      "explanation": "A prioridade é suporte de via aérea e ventilação, acionamento de emergência e antagonismo quando indicado. A apresentação pode variar, sobretudo em associações e hipóxia."
    },
    {
      "id": "farmacia-148",
      "subjectId": "farmacia",
      "number": 148,
      "topic": "Opioides - naloxona",
      "area": "Opioides",
      "stem": "A naloxona:",
      "options": [
        {
          "letter": "A",
          "text": "é agonista opioide de longa duração."
        },
        {
          "letter": "B",
          "text": "antagoniza receptores opioides e pode reverter depressão respiratória, exigindo monitoramento porque seu efeito pode durar menos que o do opioide."
        },
        {
          "letter": "C",
          "text": "trata intoxicação por paracetamol."
        },
        {
          "letter": "D",
          "text": "substitui definitivamente o suporte ventilatório."
        },
        {
          "letter": "E",
          "text": "não pode precipitar abstinência."
        }
      ],
      "answer": "B",
      "explanation": "O objetivo é restaurar ventilação adequada. Repetição de doses ou infusão pode ser necessária, e reversão abrupta em dependência pode precipitar abstinência."
    },
    {
      "id": "farmacia-149",
      "subjectId": "farmacia",
      "number": 149,
      "topic": "Asma - corticosteroide inalatório",
      "area": "Asma",
      "stem": "Após usar corticosteroide inalatório, uma orientação útil para reduzir candidíase orofaríngea é:",
      "options": [
        {
          "letter": "A",
          "text": "deitar-se imediatamente."
        },
        {
          "letter": "B",
          "text": "enxaguar a boca e eliminar a água, além de revisar a técnica inalatória."
        },
        {
          "letter": "C",
          "text": "ingerir antibiótico preventivamente."
        },
        {
          "letter": "D",
          "text": "suspender o controlador sempre que estiver assintomático."
        },
        {
          "letter": "E",
          "text": "aumentar a dose do broncodilatador por conta própria."
        }
      ],
      "answer": "B",
      "explanation": "Técnica correta e espaçador, quando compatível com o dispositivo, reduzem deposição orofaríngea. Rouquidão e candidíase devem ser avaliadas sem abandono indevido do controle da asma."
    },
    {
      "id": "farmacia-150",
      "subjectId": "farmacia",
      "number": 150,
      "topic": "Asma - broncodilatador de alívio",
      "area": "Asma",
      "stem": "Uso frequente e crescente de broncodilatador beta-2 de curta ação indica:",
      "options": [
        {
          "letter": "A",
          "text": "controle excelente e ausência de risco."
        },
        {
          "letter": "B",
          "text": "que o medicamento controlador deve ser retirado."
        },
        {
          "letter": "C",
          "text": "cura da inflamação das vias aéreas."
        },
        {
          "letter": "D",
          "text": "possível controle inadequado, necessidade de revisar adesão, técnica, desencadeantes e plano terapêutico."
        },
        {
          "letter": "E",
          "text": "contraindicação absoluta a corticosteroide inalatório."
        }
      ],
      "answer": "D",
      "explanation": "Alívio repetido trata broncoconstrição momentânea, mas não resolve a inflamação subjacente. A dependência excessiva do resgate se associa a maior risco de exacerbações."
    },
    {
      "id": "farmacia-151",
      "subjectId": "farmacia",
      "number": 151,
      "topic": "Inibidores da bomba de prótons",
      "area": "Inibidores da bomba de prótons",
      "stem": "O uso prolongado de inibidor da bomba de prótons deve:",
      "options": [
        {
          "letter": "A",
          "text": "ser mantido indefinidamente sem indicação."
        },
        {
          "letter": "B",
          "text": "ter indicação, dose e duração reavaliadas, reduzindo ou suspendendo quando clinicamente apropriado e seguro."
        },
        {
          "letter": "C",
          "text": "ser interrompido abruptamente em todo paciente."
        },
        {
          "letter": "D",
          "text": "ser associado obrigatoriamente a dois antiácidos."
        },
        {
          "letter": "E",
          "text": "dispensar investigação de sinais de alarme digestivo."
        }
      ],
      "answer": "B",
      "explanation": "Há indicações de longo prazo, mas uso sem necessidade aumenta custo e exposição a riscos. Desprescrição deve considerar indicação, recorrência, rebote e sinais de alarme."
    },
    {
      "id": "farmacia-152",
      "subjectId": "farmacia",
      "number": 152,
      "topic": "Estatinas",
      "area": "Estatinas",
      "stem": "Em paciente que desenvolve dor muscular durante uso de estatina, a conduta adequada é:",
      "options": [
        {
          "letter": "A",
          "text": "considerar o sintoma irrelevante em todos os casos."
        },
        {
          "letter": "B",
          "text": "dobrar a dose imediatamente."
        },
        {
          "letter": "C",
          "text": "proibir permanentemente toda estatina sem avaliação."
        },
        {
          "letter": "D",
          "text": "recomendar exercício intenso para testar o músculo."
        },
        {
          "letter": "E",
          "text": "avaliar gravidade, temporalidade, interações, causas alternativas e exames quando indicados, ajustando a estratégia sem abandonar desnecessariamente o benefício."
        }
      ],
      "answer": "E",
      "explanation": "Sintomas musculares variam de mialgia a rabdomiólise rara. Reavaliação de dose, fármaco, interações e rechallenge orientado pode permitir continuidade da prevenção cardiovascular."
    },
    {
      "id": "farmacia-153",
      "subjectId": "farmacia",
      "number": 153,
      "topic": "Antidepressivos - síndrome serotoninérgica",
      "area": "Antidepressivos",
      "stem": "A síndrome serotoninérgica pode apresentar:",
      "options": [
        {
          "letter": "A",
          "text": "alteração mental, hiperatividade autonômica e achados neuromusculares como clônus e hiperreflexia."
        },
        {
          "letter": "B",
          "text": "apenas constipação crônica."
        },
        {
          "letter": "C",
          "text": "bradicinesia isolada de evolução anual."
        },
        {
          "letter": "D",
          "text": "hiporreflexia flácida como achado obrigatório."
        },
        {
          "letter": "E",
          "text": "ausência de febre em todos os casos."
        }
      ],
      "answer": "A",
      "explanation": "A síndrome costuma surgir após aumento de atividade serotoninérgica por dose, interação ou associação. Reconhecimento e retirada dos agentes implicados, suporte e avaliação urgente são importantes."
    },
    {
      "id": "farmacia-154",
      "subjectId": "farmacia",
      "number": 154,
      "topic": "Benzodiazepínicos - idosos",
      "area": "Benzodiazepínicos",
      "stem": "Em pessoas idosas, benzodiazepínicos podem aumentar:",
      "options": [
        {
          "letter": "A",
          "text": "densidade óssea e equilíbrio."
        },
        {
          "letter": "B",
          "text": "memória e atenção de modo sustentado."
        },
        {
          "letter": "C",
          "text": "função respiratória em associação com opioides."
        },
        {
          "letter": "D",
          "text": "velocidade de reação."
        },
        {
          "letter": "E",
          "text": "sedação, comprometimento cognitivo, quedas e fraturas, especialmente com outros depressores do sistema nervoso central."
        }
      ],
      "answer": "E",
      "explanation": "O uso deve ter indicação clara e ser revisado. Após uso prolongado, a retirada geralmente precisa ser gradual para reduzir abstinência e rebote."
    },
    {
      "id": "farmacia-155",
      "subjectId": "farmacia",
      "number": 155,
      "topic": "Lítio - interações e monitoramento",
      "area": "Lítio",
      "stem": "Em paciente estabilizado com lítio, pode aumentar a concentração e toxicidade:",
      "options": [
        {
          "letter": "A",
          "text": "redução isolada da dose de lítio."
        },
        {
          "letter": "B",
          "text": "aumento controlado da ingestão hídrica."
        },
        {
          "letter": "C",
          "text": "administração de carvão ativado em dose terapêutica."
        },
        {
          "letter": "D",
          "text": "desidratação ou introdução de fármacos como tiazídicos, IECA ou alguns AINEs."
        },
        {
          "letter": "E",
          "text": "uso de solução salina sob indicação médica."
        }
      ],
      "answer": "D",
      "explanation": "O lítio possui margem estreita e eliminação renal. Alterações de volume, sódio, função renal e medicamentos podem causar acúmulo; tremor intenso, ataxia, confusão e sintomas digestivos exigem atenção."
    },
    {
      "id": "farmacia-156",
      "subjectId": "farmacia",
      "number": 156,
      "topic": "Varfarina - interações alimentares",
      "area": "Varfarina",
      "stem": "Para paciente em uso de varfarina, a orientação sobre vitamina K é:",
      "options": [
        {
          "letter": "A",
          "text": "eliminar definitivamente todos os vegetais."
        },
        {
          "letter": "B",
          "text": "variar amplamente o consumo a cada dia."
        },
        {
          "letter": "C",
          "text": "dobrar a dose quando consumir folhas verdes."
        },
        {
          "letter": "D",
          "text": "ignorar dieta e medicamentos concomitantes."
        },
        {
          "letter": "E",
          "text": "manter ingestão relativamente consistente e comunicar mudanças relevantes, pois variações podem alterar o efeito anticoagulante."
        }
      ],
      "answer": "E",
      "explanation": "Consistência é mais importante que proibição indiscriminada. INR, interações, álcool, doenças agudas e adesão também influenciam a resposta."
    },
    {
      "id": "farmacia-157",
      "subjectId": "farmacia",
      "number": 157,
      "topic": "Anticoagulantes orais diretos - adesão",
      "area": "Anticoagulantes orais diretos",
      "stem": "Nos anticoagulantes orais diretos, falhas de adesão podem ser particularmente relevantes porque:",
      "options": [
        {
          "letter": "A",
          "text": "todos possuem efeito por várias semanas após uma dose."
        },
        {
          "letter": "B",
          "text": "não existe risco trombótico quando uma dose é omitida."
        },
        {
          "letter": "C",
          "text": "podem ser repostos em dose dupla por regra geral."
        },
        {
          "letter": "D",
          "text": "não dependem de função renal."
        },
        {
          "letter": "E",
          "text": "a duração relativamente curta do efeito de muitos agentes pode deixar o paciente sem proteção rapidamente."
        }
      ],
      "answer": "E",
      "explanation": "A ausência de monitoramento rotineiro por INR não elimina necessidade de acompanhamento. Função renal, interações, indicação, dose e adesão devem ser revisadas."
    },
    {
      "id": "farmacia-158",
      "subjectId": "farmacia",
      "number": 158,
      "topic": "Levotiroxina - absorção",
      "area": "Levotiroxina",
      "stem": "A absorção da levotiroxina pode ser reduzida por administração próxima de:",
      "options": [
        {
          "letter": "A",
          "text": "água em jejum."
        },
        {
          "letter": "B",
          "text": "oxigênio inalatório."
        },
        {
          "letter": "C",
          "text": "ferro ou cálcio, razão pela qual costuma ser necessário separar os horários."
        },
        {
          "letter": "D",
          "text": "solução fisiológica tópica."
        },
        {
          "letter": "E",
          "text": "vacina inativada."
        }
      ],
      "answer": "C",
      "explanation": "Alimentos e diversos fármacos interferem na absorção. Consistência do horário e da relação com refeições, além do acompanhamento de TSH, ajuda a evitar oscilações."
    },
    {
      "id": "farmacia-159",
      "subjectId": "farmacia",
      "number": 159,
      "topic": "Imunização ativa e passiva",
      "area": "Imunização ativa e passiva",
      "stem": "A diferença fundamental entre vacina e soro hiperimune é que:",
      "options": [
        {
          "letter": "A",
          "text": "a vacina induz resposta imune ativa e memória, enquanto o soro fornece anticorpos prontos com proteção passiva mais imediata e temporária."
        },
        {
          "letter": "B",
          "text": "ambos produzem sempre memória imunológica duradoura."
        },
        {
          "letter": "C",
          "text": "o soro demora semanas para iniciar efeito."
        },
        {
          "letter": "D",
          "text": "vacinas contêm necessariamente anticorpos prontos."
        },
        {
          "letter": "E",
          "text": "soros nunca causam reações de hipersensibilidade."
        }
      ],
      "answer": "A",
      "explanation": "Vacinas requerem tempo para resposta adaptativa, embora possam ser usadas em alguns contextos pós-exposição. Soros ou imunoglobulinas oferecem proteção imediata, sem a mesma memória duradoura."
    },
    {
      "id": "farmacia-160",
      "subjectId": "farmacia",
      "number": 160,
      "topic": "Caso clínico - problema relacionado à farmacoterapia",
      "area": "Caso clínico",
      "stem": "Paciente com hipertensão relata que parou a anlodipino por edema e passou a tomar dobro da dose de losartana por conta própria. A melhor abordagem farmacêutica é:",
      "options": [
        {
          "letter": "A",
          "text": "repreender o paciente e encerrar o atendimento."
        },
        {
          "letter": "B",
          "text": "avaliar pressão, sintomas, doses, adesão e riscos; orientar contra alterações autônomas; registrar e articular revisão terapêutica com o prescritor."
        },
        {
          "letter": "C",
          "text": "confirmar a dose dobrada sem avaliação."
        },
        {
          "letter": "D",
          "text": "recomendar diurético por conta própria em qualquer situação."
        },
        {
          "letter": "E",
          "text": "reiniciar a anlodipino na dose máxima sem conversar com a equipe."
        }
      ],
      "answer": "B",
      "explanation": "Há problema de segurança, adesão e efetividade. A intervenção deve ser centrada no paciente, avaliar urgência, prevenir dano, esclarecer o edema e buscar ajuste compartilhado, não impor ou improvisar tratamento.\n\nFONTES NORMATIVAS E TÉCNICAS PRINCIPAIS\n\n- Constituição Federal, arts. 196 a 200; Leis nº 8.080/1990 e nº 8.142/1990. - Portaria GM/MS nº 3.916/1998 e Resolução CNS nº 338/2004. - Portaria SVS/MS nº 344/1998, atualizações e regras de receituários vigentes. - RDC Anvisa nº 67/2007, RDC nº 222/2018 e RDC nº 430/2020 e atualizações. - Norma de qualidade da água: Anexo XX da Portaria de Consolidação GM/MS nº 5/2017, atualizado pelas Portarias GM/MS nº 888 e nº 2.472/2021. - Manual da Rede de Frio do Programa Nacional de Imunizações, edição vigente. - Resolução CFF nº 724/2022, Código de Ética da Profissão Farmacêutica. - Edital de Concurso Público nº 001/2026 do Município de Massaranduba."
    }
  ]
};
