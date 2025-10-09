"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Mail, Sparkles } from "lucide-react"
import { departments, questions } from "@/lib/quiz-data"

type Answers = Record<number, number[]>

export default function SpiritualGiftsTest() {
  const [stage, setStage] = useState<"intro" | "test" | "results">("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleOptionToggle = (optionIndex: number) => {
    setSelectedOptions((prev) =>
      prev.includes(optionIndex) ? prev.filter((i) => i !== optionIndex) : [...prev, optionIndex],
    )
  }

  const handleNext = () => {
    // Save answers only if user selected something
    if (selectedOptions.length > 0) {
      setAnswers((prev) => ({
        ...prev,
        [questions[currentQuestion].id]: selectedOptions,
      }))
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedOptions(answers[questions[currentQuestion + 1]?.id] || [])
    } else {
      setStage("results")
    }
  }

  const handleSkip = () => {
    // Remove any previous answer for this question
    setAnswers((prev) => {
      const newAnswers = { ...prev }
      delete newAnswers[questions[currentQuestion].id]
      return newAnswers
    })

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedOptions(answers[questions[currentQuestion + 1]?.id] || [])
    } else {
      setStage("results")
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
      setSelectedOptions(answers[questions[currentQuestion - 1].id] || [])
    }
  }

  const calculateResults = () => {
    const scores: Record<string, number> = {}
    departments.forEach((dept) => {
      scores[dept] = 0
    })

    Object.entries(answers).forEach(([questionId, optionIndices]) => {
      const question = questions.find((q) => q.id === Number.parseInt(questionId))
      if (!question) return

      optionIndices.forEach((optionIndex) => {
        const option = question.options[optionIndex]
        Object.entries(option.points).forEach(([dept, points]) => {
          scores[dept] = (scores[dept] || 0) + points
        })
      })
    })

    return Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .filter(([, score]) => score > 0)
  }

  if (stage === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 md:p-12 shadow-xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 mb-4">
              <Sparkles className="w-8 h-8 text-sky-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-balance text-slate-900">Teste de Dons Espirituais</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Descubra seus dons e talentos para servir na Igreja Adventista do Sétimo Dia
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-slate-700">
              <p className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>
                  Este teste foi criado com auxílio de inteligência artificial. Suas sugestões são bem-vindas!
                </span>
              </p>
            </div>

            <div className="space-y-4 text-left bg-slate-50 rounded-lg p-6">
              <h2 className="font-semibold text-slate-900">Como funciona:</h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-sky-600 font-semibold">1.</span>
                  Responda cada pergunta selecionando as opções que mais se identificam com você
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-semibold">2.</span>
                  Você pode selecionar múltiplas opções por pergunta
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-semibold">3.</span>
                  Você pode pular perguntas se preferir
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-semibold">4.</span>
                  Ao final, descubra suas principais áreas de atuação
                </li>
              </ul>
            </div>

            <div className="space-y-4 text-left bg-sky-50 rounded-lg p-6 border border-sky-200">
              <h2 className="font-semibold text-slate-900">Departamentos analisados neste teste:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 flex-shrink-0" />
                    <span>{dept}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={() => setStage("test")}
              size="lg"
              className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white"
            >
              Iniciar Teste
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 pt-4">
              <Mail className="w-4 h-4" />
              <span>
                Sugestões:{" "}
                <a href="mailto:esseemail@email.com" className="text-sky-600 hover:underline">
                  esseemail@email.com
                </a>
              </span>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  if (stage === "results") {
    const results = calculateResults()
    const top3 = results.slice(0, 3)
    const others = results.slice(3)

    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 md:p-12 shadow-xl">
            <div className="text-center space-y-4 mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                <Sparkles className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Seus Resultados</h1>
              <p className="text-lg text-slate-600">Descubra onde seus dons podem fazer a diferença</p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">🌟 Suas Principais Áreas de Atuação</h2>
                <div className="space-y-4">
                  {top3.map(([dept, score], index) => (
                    <div
                      key={dept}
                      className="bg-gradient-to-r from-sky-50 to-emerald-50 border-2 border-sky-200 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white font-bold text-sm">
                            {index + 1}
                          </span>
                          <h3 className="text-lg font-semibold text-slate-900">{dept}</h3>
                        </div>
                        <span className="text-2xl font-bold text-sky-600">{score}</span>
                      </div>
                      <Progress value={(score / top3[0][1]) * 100} className="h-3" />
                    </div>
                  ))}
                </div>
              </div>

              {others.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Outras Áreas Identificadas</h2>
                  <div className="grid gap-3">
                    {others.map(([dept, score]) => (
                      <div
                        key={dept}
                        className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-between"
                      >
                        <span className="font-medium text-slate-700">{dept}</span>
                        <span className="text-lg font-semibold text-slate-600">{score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 space-y-4">
              <p className="text-slate-600 text-center">
                Converse com os líderes da sua igreja para descobrir como você pode usar seus dons para servir!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => {
                    setStage("intro")
                    setCurrentQuestion(0)
                    setAnswers({})
                    setSelectedOptions([])
                  }}
                  variant="outline"
                  className="border-slate-300"
                >
                  Refazer Teste
                </Button>
                <Button onClick={() => window.print()} className="bg-sky-600 hover:bg-sky-700">
                  Imprimir Resultados
                </Button>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Mail className="w-4 h-4" />
              <span>
                Sugestões:{" "}
                <a href="mailto:esseemail@email.com" className="text-sky-600 hover:underline">
                  esseemail@email.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-6 md:p-8 shadow-xl">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 text-balance leading-relaxed">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedOptions.includes(index)
                      ? "border-sky-500 bg-sky-50"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <Checkbox
                    checked={selectedOptions.includes(index)}
                    onCheckedChange={() => handleOptionToggle(index)}
                    className="mt-0.5"
                  />
                  <span className="text-slate-700 leading-relaxed">{option.text}</span>
                </label>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex gap-3">
          <Button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            variant="outline"
            className="border-slate-300 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Button
            onClick={handleSkip}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 bg-transparent"
          >
            Pular
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedOptions.length === 0}
            className="flex-1 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300"
          >
            {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Próxima"}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
