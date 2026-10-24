# Question for All

PWA offline de questões de concurso, com filtros por matéria e assunto, resolução sequencial ou aleatória, explicações após a confirmação da resposta e registro local de desempenho.

## Publicação

O projeto é estático. No Vercel, importe o repositório e mantenha `dist` como diretório de saída. Não há etapa de instalação ou build necessária.

## Atualização do banco

1. Atualize os arquivos de questões de origem.
2. Execute `node scripts/parse-questions.mjs`.
3. Execute `node scripts/refine-questions.mjs`.
4. Revise o arquivo `review-report.json` e publique o commit.
