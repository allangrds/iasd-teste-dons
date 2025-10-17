"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Mail, Sparkles, RotateCcw, User, Phone } from "lucide-react"
import { DEPARTMENTS, SKILLS, QUESTIONS, QUESTION_TYPE } from "@/lib/quiz-data"

const questions = QUESTIONS

type Answers = Record<number, number[]>

export default function SpiritualGiftsTest() {
  const [stage, setStage] = useState<"intro" | "test" | "results">("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  // Format phone number with mask
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, "")

    // Apply mask based on length
    if (numbers.length <= 10) {
      // Landline: (11) 1234-5678
      return numbers
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
    } else {
      // Mobile: (11) 91234-5678
      return numbers
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 15) // Limit to (11) 91234-5678
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setUserPhone(formatted)
  }

  // Load from localStorage on mount
  useEffect(() => {
    const loadSavedData = async () => {
      if (typeof window !== "undefined") {
        // Simulate minimum loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 500))

        const saved = localStorage.getItem("spiritualGiftsTest")
        if (saved) {
          try {
            const data = JSON.parse(saved)
            const savedDate = new Date(data.timestamp)
            const now = new Date()
            const diffDays = (now.getTime() - savedDate.getTime()) / (1000 * 60 * 60 * 24)

            // If saved data is older than 2 days, clear it
            if (diffDays > 2) {
              localStorage.removeItem("spiritualGiftsTest")
            } else {
              // Restore saved data
              setStage(data.stage)
              setCurrentQuestion(data.currentQuestion)
              setAnswers(data.answers)
              setSelectedOptions(data.selectedOptions || [])
              setUserName(data.userName || "")
              setUserEmail(data.userEmail || "")
              setUserPhone(data.userPhone || "")
            }
          } catch (error) {
            console.error("Error loading saved data:", error)
            localStorage.removeItem("spiritualGiftsTest")
          }
        }
      }
      setIsLoading(false)
    }

    loadSavedData()
  }, [])

  // Save to localStorage whenever relevant state changes
  useEffect(() => {
    if (typeof window !== "undefined" && stage !== "intro") {
      const dataToSave = {
        stage,
        currentQuestion,
        answers,
        selectedOptions,
        userName,
        userEmail,
        userPhone,
        timestamp: new Date().toISOString(),
      }
      localStorage.setItem("spiritualGiftsTest", JSON.stringify(dataToSave))
    }
  }, [stage, currentQuestion, answers, selectedOptions, userName, userEmail, userPhone])

  const handleResetTest = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("spiritualGiftsTest")
    }
    setStage("intro")
    setCurrentQuestion(0)
    setAnswers({})
    setSelectedOptions([])
    setUserName("")
    setUserEmail("")
    setUserPhone("")
  }

  const handleOptionToggle = (optionIndex: number) => {
    const q = questions[currentQuestion]
    const qType = q?.type ?? QUESTION_TYPE.MULTIPLE_CHOICE

    if (
      qType === QUESTION_TYPE.SINGLE_CHOICE ||
      qType === QUESTION_TYPE.YES_NO ||
      qType === QUESTION_TYPE.RANKING
    ) {
      // single-choice, yes_no, and ranking: only one option can be selected
      setSelectedOptions([optionIndex])
    } else {
      // multiple-choice: toggle multiple selections
      setSelectedOptions((prev) =>
        prev.includes(optionIndex) ? prev.filter((i) => i !== optionIndex) : [...prev, optionIndex],
      )
    }
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
    const departmentScores: Record<string, number> = {}
    const skillScores: Record<string, number> = {}
    const departmentNames = Object.values(DEPARTMENTS).map((d) => d.name)
    const skillNames = Object.values(SKILLS).map((s) => s.name)

    departmentNames.forEach((dept) => {
      departmentScores[dept] = 0
    })
    skillNames.forEach((skill) => {
      skillScores[skill] = 0
    })

    Object.entries(answers).forEach(([questionId, optionIndices]) => {
      const question = questions.find((q) => q.id === Number.parseInt(questionId))
      if (!question) return

      optionIndices.forEach((optionIndex) => {
        const option = question.options[optionIndex]

        const hasPoints = Object.keys(option?.points || {}).length > 0

        if (!hasPoints) {
          return
        }

        Object.entries(option.points).forEach(([name, points]) => {
          if (departmentNames.includes(name)) {
            departmentScores[name] = (departmentScores[name] || 0) + points
          } else if (skillNames.includes(name)) {
            skillScores[name] = (skillScores[name] || 0) + points
          }
        })
      })
    })

    const departments = Object.entries(departmentScores)
      .sort(([, a], [, b]) => b - a)
      .filter(([, score]) => score > 0)

    const skills = Object.entries(skillScores)
      .sort(([, a], [, b]) => b - a)
      .filter(([, score]) => score > 0)

    return { departments, skills }
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 flex items-center justify-center">
        <Card className="p-8 shadow-xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 animate-pulse">
              <Sparkles className="w-8 h-8 text-sky-600 animate-spin" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-slate-900">Carregando</p>
              <p className="text-sm text-slate-600">Verificando dados salvos...</p>
            </div>
            <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-sky-600 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  if (stage === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 flex items-center justify-center p-6 md:p-14">
        <Card className="w-full p-8 md:p-12 shadow-xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 mb-4">
              <Sparkles className="w-8 h-8 text-sky-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-balance text-slate-900 mb-0">Teste de Dons Espirituais</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Descubra seus dons e talentos para servir
            </p>

            <div className="space-y-4 text-left bg-slate-50 rounded-lg p-6">
              <h2 className="font-semibold text-slate-900">Como funciona:</h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-sky-600 font-semibold">1.</span>
                  Responda cada pergunta selecionando as opções que mais se identificam com você
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-semibold">2.</span>
                  Você pode pular perguntas se preferir
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-semibold">3.</span>
                  Ao final, descubra suas principais áreas de atuação
                </li>
              </ul>
            </div>

            <div className="space-y-4 text-left bg-sky-50 rounded-lg p-6 border border-sky-200">
              <div>
                <h2 className="font-semibold text-slate-900 mb-2">Habilidades analisados neste teste:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  {Object.values(SKILLS)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((d, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-600 flex-shrink-0" />
                        <span>{d.name}</span>
                      </div>
                    ))}
                </div>
              </div>
              <hr />
              <div>
                <h2 className="font-semibold text-slate-900 mb-2">Departamentos analisados neste teste:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  {Object.values(DEPARTMENTS)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((d, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-600 flex-shrink-0" />
                        <span>{d.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 text-left bg-slate-50 rounded-lg p-6">
              <h2 className="font-semibold text-slate-900 mb-4">Seus Dados:</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={userPhone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="(11) 91234-5678"
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={() => setStage("test")}
              disabled={!userName}
              size="lg"
              className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              Iniciar Teste
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 pt-4">
              <Mail className="w-4 h-4" />
              <span>
                Sugestões:{" "}
                <a href="mailto:esseemail@email.com" className="text-sky-600 hover:underline cursor-pointer">
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
    const { departments, skills } = calculateResults()
    const top3Departments = departments.slice(0, 3)
    const otherDepartments = departments.slice(3)
    const top3Skills = skills.slice(0, 3)
    const otherSkills = skills.slice(3)

    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 md:p-12 shadow-xl">
            <div className="text-center space-y-4 mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                <Sparkles className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-0">Seus Resultados</h1>
              <p className="text-lg text-slate-600">Descubra onde seus dons podem fazer a diferença</p>
            </div>

            {/* User Information Section */}
            {(userName || userEmail || userPhone) && (
              <div className="mb-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border-2 border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-600 to-emerald-600 px-6 py-3">
                  <h2 className="font-semibold text-white text-lg flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Informações do Participante
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {userName && (
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                          <User className="w-5 h-5 text-sky-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Nome</p>
                          <p className="text-sm font-semibold text-slate-900 truncate">{userName}</p>
                        </div>
                      </div>
                    )}
                    {userEmail && (
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">E-mail</p>
                          <p className="text-sm font-semibold text-slate-900 truncate">{userEmail}</p>
                        </div>
                      </div>
                    )}
                    {userPhone && (
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Telefone</p>
                          <p className="text-sm font-semibold text-slate-900 truncate">{userPhone}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {
                top3Departments.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">🌟 Suas principais áreas de atuação</h2>
                    <div className="space-y-4">
                      {top3Departments.map(([dept, score], index) => {
                        const deptKey = Object.keys(DEPARTMENTS).find(key => DEPARTMENTS[key as keyof typeof DEPARTMENTS].name === dept)
                        const description = deptKey ? DEPARTMENTS[deptKey as keyof typeof DEPARTMENTS].description : undefined
                        
                        return (
                          <div
                            key={dept}
                            className="bg-gradient-to-r from-sky-50 to-emerald-50 border-2 border-sky-200 rounded-lg p-6"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white font-bold text-sm">
                                  {index + 1}
                                </span>
                                <div>
                                  <h3 className="text-lg font-semibold text-slate-900">{dept}</h3>
                                  {description && (
                                    <p className="text-sm text-slate-600">{description}</p>
                                  )}
                                </div>
                              </div>
                              <span className="text-2xl font-bold text-sky-600">{score}</span>
                            </div>
                            <div className="mt-4">
                              <Progress value={(score / top3Departments[0][1]) * 100} className="h-3" />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              {otherDepartments.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Outras áreas identificadas</h2>
                  <div className="grid gap-3">
                    {otherDepartments.map(([dept, score]) => {
                      const deptKey = Object.keys(DEPARTMENTS).find(key => DEPARTMENTS[key as keyof typeof DEPARTMENTS].name === dept)
                      const description = deptKey ? DEPARTMENTS[deptKey as keyof typeof DEPARTMENTS].description : undefined
                      
                      return (
                        <div
                          key={dept}
                          className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-between"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-slate-700">{dept}</span>
                            {description && (
                              <p className="text-sm text-slate-600 mt-1">{description}</p>
                            )}
                          </div>
                          <span className="text-lg font-semibold text-slate-600 ml-4">{score}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {top3Skills.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">🌟 Suas principais habilidades</h2>
                  <div className="space-y-4">
                    {top3Skills.map(([skill, score], index) => {
                      const skillKey = Object.keys(SKILLS).find(key => SKILLS[key as keyof typeof SKILLS].name === skill)
                      const description = skillKey ? SKILLS[skillKey as keyof typeof SKILLS].description : undefined
                      
                      return (
                        <div
                          key={skill}
                          className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-6"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm">
                                {index + 1}
                              </span>
                              <div>
                                <h3 className="text-lg font-semibold text-slate-900">{skill}</h3>
                                {description && (
                                  <p className="text-sm text-slate-600 mt-1">{description}</p>
                                )}
                              </div>
                            </div>
                            <span className="text-2xl font-bold text-purple-600">{score}</span>
                          </div>
                          <div className="mt-4">
                            <Progress value={(score / top3Skills[0][1]) * 100} className="h-3" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {otherSkills.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Outras habilidades identificadas</h2>
                  <div className="grid gap-3">
                    {otherSkills.map(([skill, score]) => {
                      const skillKey = Object.keys(SKILLS).find(key => SKILLS[key as keyof typeof SKILLS].name === skill)
                      const description = skillKey ? SKILLS[skillKey as keyof typeof SKILLS].description : undefined
                      
                      return (
                        <div
                          key={skill}
                          className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-between"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-slate-700">{skill}</span>
                            {description && (
                              <p className="text-sm text-slate-600 mt-1">{description}</p>
                            )}
                          </div>
                          <span className="text-lg font-semibold text-slate-600 ml-4">{score}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 space-y-4">
              {/* <p className="text-slate-600 text-center">
                Converse com os líderes da sua igreja para descobrir como você pode usar seus dons para servir!
              </p> */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={handleResetTest}
                  variant="outline"
                  className="border-slate-300 cursor-pointer"
                >
                  Refazer Teste
                </Button>
                <Button onClick={() => window.print()} className="bg-sky-600 hover:bg-sky-700 cursor-pointer">
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

  const getQuestionTypeHelperText = (type: QUESTION_TYPE): string => {
    switch (type) {
      case QUESTION_TYPE.SINGLE_CHOICE:
        return "Escolha apenas uma das alternativas"
      case QUESTION_TYPE.MULTIPLE_CHOICE:
        return "Escolha uma ou várias alternativas"
      case QUESTION_TYPE.RANKING:
        return "De 1 a 5, considerando 1 como discordo totalmente e 5 como concordo totalmente"
      case QUESTION_TYPE.YES_NO:
        return "Responda de forma objetiva"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <Button
            onClick={handleResetTest}
            variant="outline"
            size="sm"
            className="border-slate-300 cursor-pointer whitespace-nowrap"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Refazer
          </Button>
        </div>

        <Card className="p-6 md:p-8 shadow-xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 text-balance leading-relaxed">
                {question.text}
              </h2>
              <p className="text-sm text-slate-500 mt-2">{getQuestionTypeHelperText(question.type)}</p>
            </div>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedOptions.includes(index)
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
            className="border-slate-300 bg-transparent cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Button
            onClick={handleSkip}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 bg-transparent cursor-pointer"
          >
            Pular
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedOptions.length === 0}
            className="flex-1 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 cursor-pointer disabled:cursor-not-allowed"
          >
            {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Próxima"}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
