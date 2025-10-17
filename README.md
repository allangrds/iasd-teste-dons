# Na Jornada | Teste de dons

Fornecer uma aplicação simples para que membros e frequentadores possam responder um questionário que identifica talentos/interesses em ministérios da igreja, gerando uma pontuação por departamento

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Como instalar](#como-instalar)
- [Como executar localmente](#como-executar-o-projeto-localmente)
- [Formato do JSON de perguntas](#como-funciona-o-json-das-perguntas)
- [Como contribuir](#como-contribuir)

## Pré-requisitos

- Node.js (recomendado: >= 18.16.0)
- npm >= 9.x


## Como instalar

1. Clone este repositório:

```bash
git clone https://github.com/allangrds/iasd-teste-dons.git
cd iasd-teste-dons
```

2. Instale dependências:

```bash
npm install
```

## Como executar o projeto localmente

Para rodar em modo de desenvolvimento:

```bash
npm run dev
# depois abra http://localhost:3000
```

Para gerar uma build de produção e servir:

```bash
npm run build
npm start
```

## Rotas da aplicação

A aplicação possui duas rotas principais:

- `/` - Página inicial com o questionário de identificação de talentos/dons. Os usuários respondem às perguntas e ao final recebem uma pontuação por departamento.
- `/estatisticas` - Página de estatísticas que exibe um resumo dos resultados e análises dos dados coletados.

## Como funciona o JSON das perguntas

As perguntas são definidas como um array de objetos no arquivo `lib/quiz-data.ts`. A estrutura atual é mais complexa e completa, incluindo:

- **DEPARTMENTS**: Objeto que define todos os departamentos/ministérios disponíveis, cada um com `name` e `description`.
- **SKILLS**: Objeto que define as habilidades avaliadas, cada uma com `name` e `description`.
- **QUESTION_TYPE**: Enum que define os tipos de pergunta disponíveis:
  - `SINGLE_CHOICE`: escolha única
  - `MULTIPLE_CHOICE`: múltipla escolha
  - `RANKING`: ordenação por preferência
  - `YES_NO`: sim ou não
- **QUESTIONS**: Array com as perguntas do questionário.

Exemplo de uma pergunta:

```typescript
{
  id: 1,
  text: "Quando eu preciso resolver problemas em grupo, como costuma agir?",
  type: QUESTION_TYPE.MULTIPLE_CHOICE,
  options: [
    {
      text: "Assumo a liderança e organizo as tarefas",
      points: {
        [SKILLS.lideranca.name]: 1,
        [SKILLS.iniciativa.name]: 1,
        [SKILLS.organizacao.name]: 1
      }
    },
    {
      text: "Contribuo com ideias",
      points: {
        [SKILLS.criatividade.name]: 1
      }
    }
  ]
}
```

Campos principais:

- `id`: número único da pergunta
- `text`: enunciado da pergunta
- `type`: tipo da pergunta (do enum QUESTION_TYPE)
- `options`: array de alternativas
  - `text`: texto da alternativa
  - `points`: objeto onde a chave é uma referência para `DEPARTMENTS[key].name` ou `SKILLS[key].name` e o valor é a pontuação atribuída

As pontuações são acumuladas por habilidade ou departamento, e as habilidades estão relacionadas aos departamentos através da lógica da aplicação.

## Como contribuir

1. Abra uma issue para discutir alterações maiores ou correções.
2. Faça um fork e crie uma branch com a sua feature/bugfix:

```bash
git checkout -b feature/minha-melhora
```

3. Faça commits pequenos e claros. Ao terminar, envie um pull request para a branch `main` deste repositório.

Dicas:

- Mantenha o formato do JSON de perguntas ao adicionar novas entradas.
- Rode `npm run dev` localmente e verifique visualmente qualquer alteração de UI.
- Se adicionar dependências, atualize o `package-lock.json`.
