# IASD | Teste de dons

Fornecer uma aplicação simples para que membros e frequentadores possam responder um questionário que identifica talentos/interesses em ministérios da igreja, gerando uma pontuação por departamento

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Como instalar](#como-instalar)
- [Como executar localmente](#como-executar-o-projeto-localmente)
- [Formato do JSON de perguntas](#como-funciona-o-json-das-perguntas)
- [Como contribuir](#como-contribuir)

## Pré-requisitos

- Node.js (recomendado: >= 18.16.0)compatíveis.
- pnpm >= 10.x


## Como instalar

1. Clone este repositório:

```bash
git clone https://github.com/allangrds/iasd-teste-dons.git
cd iasd-teste-dons
```

2. Instale dependências:

```bash
pnpm install
```

## Como executar o projeto localmente

Para rodar em modo de desenvolvimento:

```bash
pnpm dev
# depois abra http://localhost:3000
```

Para gerar uma build de produção e servir:

```bash
pnpm build
pnpm start
```

## Como funciona o JSON das perguntas

As perguntas são definidas como um array de objetos. Cada pergunta possui um `id`, um `text` (enunciado) e um array `options` com as alternativas. Cada alternativa tem um `text` e um objeto `points` que mapeia departamentos para pontuações.

Exemplo mínimo (um item):

```json
[
	{
		"id": 1,
		"text": "Você gosta de planejar eventos espirituais ou de estudo?",
		"options": [
			{
				"text": "Sim, organizo agendas e materiais",
				"points": {
					"Secretaria": 2
				}
			},
			{
				"text": "Prefiro conduzir estudos ou liderar discussões",
				"points": {
					"Ministério Pessoal": 2
				}
			}
		]
	}
]
```

Campos:
- id: número único da pergunta.
- text: enunciado da pergunta.
- options: array de alternativas.
	- text: texto da alternativa.
	- points: mapa onde a chave é o nome do departamento/ministério e o valor é a pontuação atribuída quando a alternativa é escolhida.

No projeto existente, o arquivo com as perguntas está em `lib/quiz-data.ts` e segue esse esquema (tipado como `Question`).

## Como contribuir

1. Abra uma issue para discutir alterações maiores ou correções.
2. Faça um fork e crie uma branch com a sua feature/bugfix:

```bash
git checkout -b feature/minha-melhora
```

3. Faça commits pequenos e claros. Ao terminar, envie um pull request para a branch `main` deste repositório.

Dicas:
- Mantenha o formato do JSON de perguntas ao adicionar novas entradas.
- Rode `pnpm dev` localmente e verifique visualmente qualquer alteração de UI.
- Se adicionar dependências, atualize o `pnpm-lock.yaml` (ou forneça instruções alternativas).

---