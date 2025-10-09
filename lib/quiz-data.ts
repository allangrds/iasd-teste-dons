export const departments = [
  "Secretaria",
  "Tesouraria",
  "Anciãos",
  "Diaconato",
  "Escola Sabatina",
  "Ministério Pessoal",
  "Ministério da Família",
  "Ministério da Criança",
  "Ministério do Adolescente",
  "Ministério dos Jovens",
  "Clube de Desbravadores",
  "Clube de Aventureiros",
  "Ministério de Música",
  "Ministério de Saúde",
  "Ação Social Adventista",
  "Comunicação",
  "Publicações",
  "Patrimônio/Manutenção",
  "Ministério de Mulheres",
  "Ministério de Homens",
  "Ministério do Idoso",
]

export type Question = {
  id: number
  text: string
  options: {
    text: string
    points: Record<string, number>
  }[]
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Você gosta de planejar eventos espirituais ou de estudo?",
    options: [
      {
        text: "Sim, organizo agendas e materiais",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Prefiro conduzir estudos ou liderar discussões",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Gosto de preparar atividades criativas para crianças e jovens",
        points: {
          "Ministério da Criança": 2,
          "Ministério Jovens": 1,
        },
      },
      {
        text: "Apoio com logística e infraestrutura",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 2,
    text: "Você se sente mais motivado(a) em projetos que envolvem:",
    options: [
      {
        text: "Estudos bíblicos e discipulado",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Música e louvor",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Apoio social ou comunitário",
        points: {
          ASA: 2,
        },
      },
      {
        text: "Administração e organização de recursos",
        points: {
          Secretaria: 2,
          Tesouraria: 1,
        },
      },
    ],
  },
  {
    id: 3,
    text: "Em relação a crianças e adolescentes, você prefere:",
    options: [
      {
        text: "Ensinar histórias e princípios bíblicos",
        points: {
          "Ministério da Criança": 2,
          "Ministério do Adolescente": 1,
        },
      },
      {
        text: "Organizar atividades de campo, esportes e aventuras",
        points: {
          "Clube de Desbravadores": 2,
          "Clube de Aventureiros": 1,
        },
      },
      {
        text: "Aconselhar e apoiar famílias",
        points: {
          "Ministério da Família": 2,
        },
      },
      {
        text: "Apoiar com logística e materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 4,
    text: "Você gosta de ajudar financeiramente em projetos da igreja?",
    options: [
      {
        text: "Sim, arrecadando fundos ou doações",
        points: {
          Tesouraria: 2,
          ASA: 1,
        },
      },
      {
        text: "Prefiro apoiar na organização e planejamento financeiro",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Prefiro doar tempo e trabalho prático",
        points: {
          ASA: 2,
          "Patrimônio/Manutenção": 1,
        },
      },
      {
        text: "Prefiro apoiar espiritualmente e com aconselhamento",
        points: {
          "Ministério Pessoal": 2,
        },
      },
    ],
  },
  {
    id: 5,
    text: "Quando alguém precisa de apoio emocional ou espiritual, você:",
    options: [
      {
        text: "Ouve, aconselha e ora",
        points: {
          Anciãos: 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Orienta com estudo bíblico ou literatura",
        points: {
          "Ministério Pessoal": 2,
          Publicações: 1,
        },
      },
      {
        text: "Apoia com ações práticas ou voluntariado",
        points: {
          ASA: 2,
        },
      },
      {
        text: "Ajuda na organização de atividades ou eventos",
        points: {
          Secretaria: 2,
          "Patrimônio/Manutenção": 1,
        },
      },
    ],
  },
  {
    id: 6,
    text: "Você prefere trabalhos que envolvem:",
    options: [
      {
        text: "Criatividade e música",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Ensino e orientação espiritual",
        points: {
          "Ministério Pessoal": 2,
          "Escola Sabatina": 1,
        },
      },
      {
        text: "Apoio social e voluntariado",
        points: {
          ASA: 2,
        },
      },
      {
        text: "Administração e logística",
        points: {
          Secretaria: 2,
          "Patrimônio/Manutenção": 1,
        },
      },
    ],
  },
  {
    id: 7,
    text: "Quando participa de projetos missionários, você:",
    options: [
      {
        text: "Distribui materiais e literatura",
        points: {
          Publicações: 2,
        },
      },
      {
        text: "Conduz visitas e estudos bíblicos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Organiza logística e transporte",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Coordena arrecadação e doações",
        points: {
          Tesouraria: 2,
        },
      },
    ],
  },
  {
    id: 8,
    text: "Em reuniões ou cultos, você prefere:",
    options: [
      {
        text: "Liderar atividades ou estudos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Apoiar com logística e infraestrutura",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Organizar documentos e agendas",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Participar com música ou louvor",
        points: {
          "Ministério de Música": 2,
        },
      },
    ],
  },
  {
    id: 9,
    text: "Você gosta de planejar ou acompanhar atividades físicas e recreativas?",
    options: [
      {
        text: "Sim, com jovens e adolescentes",
        points: {
          "Ministério dos Jovens": 2,
          "Clube de Desbravadores": 1,
        },
      },
      {
        text: "Prefiro atividades de campo e aventuras",
        points: {
          "Clube de Desbravadores": 2,
          "Clube de Aventureiros": 1,
        },
      },
      {
        text: "Prefiro ensinar ou orientar espiritualmente",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Prefiro apoiar com infraestrutura e logística",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 10,
    text: "Você se sente chamado(a) a cuidar de pessoas idosas ou enfermas?",
    options: [
      {
        text: "Sim, visitando e oferecendo apoio espiritual",
        points: {
          "Ministério do Idoso": 2,
          "Ministério de Saúde": 1,
        },
      },
      {
        text: "Apoio com atividades práticas e voluntariado",
        points: {
          ASA: 2,
          "Patrimônio/Manutenção": 1,
        },
      },
      {
        text: "Planejo e incentivo hábitos saudáveis",
        points: {
          "Ministério de Saúde": 2,
        },
      },
      {
        text: "Apoio financeiramente quando necessário",
        points: {
          Tesouraria: 2,
        },
      },
    ],
  },
  {
    id: 11,
    text: "Quando organiza eventos, você prefere:",
    options: [
      {
        text: "Planejar agenda e documentação",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Apoiar financeiramente ou arrecadar fundos",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Liderar espiritualmente ou coordenar estudo",
        points: {
          "Ministério Pessoal": 2,
          Anciãos: 1,
        },
      },
      {
        text: "Cuidar de logística, espaço e manutenção",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 12,
    text: "Você gosta de ensinar e motivar outras pessoas?",
    options: [
      {
        text: "Sim, através de estudos bíblicos",
        points: {
          "Ministério Pessoal": 2,
          "Escola Sabatina": 1,
        },
      },
      {
        text: "Através da música e arte",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Através de orientação prática e social",
        points: {
          ASA: 2,
        },
      },
      {
        text: "Através de planejamento e organização",
        points: {
          Secretaria: 2,
          "Patrimônio/Manutenção": 1,
        },
      },
    ],
  },
  {
    id: 13,
    text: "Você prefere atividades relacionadas a:",
    options: [
      {
        text: "Estudo e ensino",
        points: {
          "Escola Sabatina": 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Música e arte",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Social e comunitário",
        points: {
          ASA: 2,
        },
      },
      {
        text: "Administração e logística",
        points: {
          Secretaria: 2,
          "Patrimônio/Manutenção": 1,
        },
      },
    ],
  },
  {
    id: 14,
    text: "Em projetos de literatura e evangelismo, você:",
    options: [
      {
        text: "Distribui livros e revistas",
        points: {
          Publicações: 2,
        },
      },
      {
        text: "Ensina e acompanha estudos bíblicos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Organiza logística e materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Apoia financeiramente",
        points: {
          Tesouraria: 2,
        },
      },
    ],
  },
  {
    id: 15,
    text: "Você gosta de planejar atividades para:",
    options: [
      {
        text: "Crianças",
        points: {
          "Ministério da Criança": 2,
        },
      },
      {
        text: "Adolescentes",
        points: {
          "Ministério do Adolescente": 2,
        },
      },
      {
        text: "Jovens",
        points: {
          "Ministério dos Jovens": 2,
        },
      },
      {
        text: "Famílias ou adultos",
        points: {
          "Ministério da Família": 2,
        },
      },
    ],
  },
  {
    id: 16,
    text: "Você prefere apoiar com:",
    options: [
      {
        text: "Logística e manutenção",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Estudo bíblico e orientação",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Música ou arte",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Organização e registros",
        points: {
          Secretaria: 2,
        },
      },
    ],
  },
  {
    id: 17,
    text: "Você se sente motivado(a) a trabalhar com:",
    options: [
      {
        text: "Finanças e arrecadação",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Aconselhamento e discipulado",
        points: {
          "Ministério Pessoal": 2,
          Anciãos: 1,
        },
      },
      {
        text: "Crianças e adolescentes",
        points: {
          "Ministério da Criança": 2,
          "Ministério do Adolescente": 1,
        },
      },
      {
        text: "Infraestrutura e logística",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 18,
    text: "Em atividades de música ou louvor, você prefere:",
    options: [
      {
        text: "Cantar ou tocar",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Organizar ensaios",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Criar novas músicas ou arranjos",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Apoiar com logística e equipamentos",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 19,
    text: "Você se sente chamado(a) a apoiar:",
    options: [
      {
        text: "Crianças e jovens em sua fé",
        points: {
          "Ministério da Criança": 2,
          "Ministério Jovens": 1,
        },
      },
      {
        text: "Famílias e casais",
        points: {
          "Ministério da Família": 2,
        },
      },
      {
        text: "Idosos e enfermos",
        points: {
          "Ministério do Idoso": 2,
          "Ministério de Saúde": 1,
        },
      },
      {
        text: "Ações sociais e comunitárias",
        points: {
          ASA: 2,
        },
      },
    ],
  },
  {
    id: 20,
    text: "Quando um novo projeto da igreja surge, você prefere:",
    options: [
      {
        text: "Planejar e organizar detalhes administrativos",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Apoiar financeiramente ou administrar fundos",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Liderar espiritualmente e motivar pessoas",
        points: {
          "Ministério Pessoal": 2,
          Anciãos: 1,
        },
      },
      {
        text: "Apoiar logisticamente e estruturar o espaço",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 21,
    text: "Você gosta de lidar com registros financeiros e controlar orçamentos?",
    options: [
      {
        text: "Sim, adoro organizar contas e doações",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Prefiro organizar listas e documentos administrativos",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Prefiro planejar eventos ou atividades para jovens",
        points: {
          "Ministério Jovens": 2,
        },
      },
      {
        text: "Gosto mais de apoiar ações sociais",
        points: {
          "Ação Social Adventista": 2,
        },
      },
    ],
  },
  {
    id: 22,
    text: "Quando ajuda alguém, você geralmente:",
    options: [
      {
        text: "Ensina ou orienta espiritualmente",
        points: {
          "Ministério Pessoal": 2,
          Anciãos: 1,
        },
      },
      {
        text: "Organiza tarefas práticas ou materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Incentiva hábitos saudáveis e cuidados com a saúde",
        points: {
          "Ministério de Saúde": 2,
        },
      },
      {
        text: "Motiva pessoas através de música ou arte",
        points: {
          "Ministério de Música": 2,
        },
      },
    ],
  },
  {
    id: 23,
    text: "Se você fosse voluntário em projetos com crianças, você:",
    options: [
      {
        text: "Ensinar histórias bíblicas",
        points: {
          "Ministério da Criança": 2,
        },
      },
      {
        text: "Criar jogos, dinâmicas e atividades lúdicas",
        points: {
          "Clube de Aventureiros": 2,
        },
      },
      {
        text: "Apoiar os pais e familiares",
        points: {
          "Ministério da Família": 2,
        },
      },
      {
        text: "Cuidar da infraestrutura e materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 24,
    text: "Você se sente confortável em liderar reuniões ou estudos?",
    options: [
      {
        text: "Sim, gosto de organizar e conduzir",
        points: {
          "Escola Sabatina": 2,
          Anciãos: 1,
        },
      },
      {
        text: "Prefiro apoiar com materiais ou logística",
        points: {
          Secretaria: 2,
          "Patrimônio/Manutenção": 1,
        },
      },
      {
        text: "Prefiro ensinar de forma prática, com exemplos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Prefiro organizar a comunicação e divulgação",
        points: {
          Comunicação: 2,
        },
      },
    ],
  },
  {
    id: 25,
    text: "Quando há necessidade de apoio à comunidade, você:",
    options: [
      {
        text: "Oferece doações ou ajuda prática",
        points: {
          "Ação Social Adventista": 2,
        },
      },
      {
        text: "Coordena atividades e logística",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Incentiva participação em estudos bíblicos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Organiza arrecadação e finanças",
        points: {
          Tesouraria: 2,
        },
      },
    ],
  },
  {
    id: 26,
    text: "Você se sente mais à vontade em:",
    options: [
      {
        text: "Liderar estudos bíblicos ou discipulado",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Organizar registros, agendas e documentos",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Ensinar ou orientar crianças e jovens",
        points: {
          "Ministério da Criança": 2,
          "Ministério do Adolescente": 1,
        },
      },
      {
        text: "Apoiar projetos sociais ou comunitários",
        points: {
          ASA: 2,
          "Ministério de Saúde": 1,
        },
      },
    ],
  },
  {
    id: 27,
    text: "Você gosta de atividades que envolvem música?",
    options: [
      {
        text: "Cantar ou tocar instrumentos",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Organizar ensaios e apresentações",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Apoiar com infraestrutura e logística",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Compor ou criar novas músicas",
        points: {
          "Ministério de Música": 2,
        },
      },
    ],
  },
  {
    id: 28,
    text: "Em ações evangelísticas, você prefere:",
    options: [
      {
        text: "Distribuir literatura ou materiais",
        points: {
          "Publicações/Literatura Evangelística": 2,
        },
      },
      {
        text: "Fazer visitas ou estudos bíblicos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Organizar logística e materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Apoiar financeiramente ou arrecadar fundos",
        points: {
          Tesouraria: 2,
        },
      },
    ],
  },
  {
    id: 29,
    text: "Ao participar de eventos para jovens ou adolescentes, você:",
    options: [
      {
        text: "Lidera grupos e atividades",
        points: {
          "Ministério dos Jovens": 2,
          "Ministério do Adolescente": 1,
        },
      },
      {
        text: "Organiza dinâmicas, jogos e acampamentos",
        points: {
          "Clube de Desbravadores": 2,
          "Clube de Aventureiros": 1,
        },
      },
      {
        text: "Apoia com comunicação e divulgação",
        points: {
          Comunicação: 2,
        },
      },
      {
        text: "Cuida da infraestrutura e logística",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 30,
    text: "Você gosta de preparar materiais de estudo ou apostilas?",
    options: [
      {
        text: "Sim, adoro organizar e produzir",
        points: {
          Secretaria: 2,
          "Escola Sabatina": 1,
        },
      },
      {
        text: "Prefiro fazer a distribuição",
        points: {
          "Publicações/Literatura Evangelística": 2,
        },
      },
      {
        text: "Prefiro ensinar com esses materiais",
        points: {
          "Escola Sabatina": 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Prefiro cuidar da infraestrutura e equipamentos",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 31,
    text: "Você se sente chamado(a) a cuidar de idosos ou pessoas com necessidades especiais?",
    options: [
      {
        text: "Sim, visitando e oferecendo apoio espiritual",
        points: {
          "Ministério do Idoso": 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Apoio com atividades práticas e serviços",
        points: {
          "Patrimônio/Manutenção": 2,
          ASA: 1,
        },
      },
      {
        text: "Planejo atividades recreativas ou educativas",
        points: {
          "Ministério de Saúde": 2,
        },
      },
      {
        text: "Auxilio com arrecadação ou finanças",
        points: {
          Tesouraria: 2,
        },
      },
    ],
  },
  {
    id: 32,
    text: "Quando precisa planejar algo, você prefere:",
    options: [
      {
        text: "Estruturar todo o processo com detalhes",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Cuidar da parte financeira",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Organizar logística e materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Planejar atividades espirituais ou de estudo",
        points: {
          "Ministério Pessoal": 2,
        },
      },
    ],
  },
  {
    id: 33,
    text: "Em trabalhos voluntários, você prefere:",
    options: [
      {
        text: "Ensinar e orientar pessoas",
        points: {
          "Ministério Pessoal": 2,
          Anciãos: 1,
        },
      },
      {
        text: "Planejar e coordenar recursos",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Apoiar com música ou arte",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Ajudar com ações sociais ou comunitárias",
        points: {
          ASA: 2,
        },
      },
    ],
  },
  {
    id: 34,
    text: "Você gosta de trabalhar com crianças pequenas?",
    options: [
      {
        text: "Sim, ensinar e brincar",
        points: {
          "Ministério da Criança": 2,
        },
      },
      {
        text: "Organizar atividades e jogos",
        points: {
          "Clube de Aventureiros": 2,
        },
      },
      {
        text: "Orientar os pais ou familiares",
        points: {
          "Ministério da Família": 2,
        },
      },
      {
        text: "Apoiar logística e materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 35,
    text: "Quando participa de reuniões de igreja, você prefere:",
    options: [
      {
        text: "Ajudar na organização e registro de dados",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Cuidar da parte financeira",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Apoiar com estudos e mensagens bíblicas",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Apoiar com logística, limpeza e manutenção",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 36,
    text: "Você gosta de projetos de saúde e bem-estar?",
    options: [
      {
        text: "Sim, incentivar hábitos saudáveis",
        points: {
          "Ministério de Saúde": 2,
        },
      },
      {
        text: "Organizar campanhas ou eventos",
        points: {
          "Ministério de Saúde": 2,
          ASA: 1,
        },
      },
      {
        text: "Apoiar financeiramente ações de saúde",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Ensinar e motivar espiritualmente os participantes",
        points: {
          "Ministério Pessoal": 2,
        },
      },
    ],
  },
  {
    id: 37,
    text: "Você prefere atividades que envolvam:",
    options: [
      {
        text: "Música, arte e criatividade",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Estudos e ensino bíblico",
        points: {
          "Escola Sabatina": 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Atividades sociais e comunitárias",
        points: {
          ASA: 2,
        },
      },
      {
        text: "Administração, finanças e logística",
        points: {
          Secretaria: 2,
          Tesouraria: 1,
        },
      },
    ],
  },
  {
    id: 38,
    text: "Ao trabalhar em grupo, você gosta de:",
    options: [
      {
        text: "Liderar e organizar tarefas",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Apoiar com tarefas práticas",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Ensinar ou aconselhar",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Divulgar e comunicar",
        points: {
          Comunicação: 2,
        },
      },
    ],
  },
  {
    id: 39,
    text: "Se houver oportunidade de ajudar em clubes de jovens, você prefere:",
    options: [
      {
        text: "Liderar atividades e dinâmicas",
        points: {
          "Ministério dos Jovens": 2,
        },
      },
      {
        text: "Organizar eventos e logística",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Ensinar princípios bíblicos e valores",
        points: {
          "Ministério Pessoal": 2,
          "Ministério do Adolescente": 1,
        },
      },
      {
        text: "Apoiar com música ou recreação",
        points: {
          "Ministério de Música": 2,
        },
      },
    ],
  },
  {
    id: 40,
    text: "Você gosta de trabalhar com grupos de adultos ou famílias?",
    options: [
      {
        text: "Sim, ensinar princípios bíblicos",
        points: {
          "Ministério Pessoal": 2,
          "Escola Sabatina": 1,
        },
      },
      {
        text: "Organizar atividades sociais ou eventos",
        points: {
          "Ministério da Família": 2,
          ASA: 1,
        },
      },
      {
        text: "Ajudar com questões financeiras",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Apoiar com logística e manutenção",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 41,
    text: "Você gosta de organizar documentos, listas ou registros da igreja?",
    options: [
      {
        text: "Sim, adoro manter tudo organizado",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Prefiro lidar com dinheiro e contas",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Prefiro organizar a agenda de reuniões e cultos",
        points: {
          Secretaria: 2,
          Anciãos: 1,
        },
      },
      {
        text: "Gosto mais de organizar estudos ou materiais bíblicos",
        points: {
          "Escola Sabatina": 2,
        },
      },
    ],
  },
  {
    id: 42,
    text: "Quando alguém precisa de ajuda em casa ou na igreja, você:",
    options: [
      {
        text: "Gosta de consertar ou arrumar coisas",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Prefere ouvir, aconselhar e orar",
        points: {
          Anciãos: 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Prefere ensinar ou orientar espiritualmente",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Prefere apoiar logisticamente, preparando materiais ou suprimentos",
        points: {
          Secretaria: 2,
          Diaconato: 1,
        },
      },
    ],
  },
  {
    id: 43,
    text: "Qual destas atividades você mais se identifica?",
    options: [
      {
        text: "Cuidar de finanças e registros",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Organizar ensaios ou apresentações musicais",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Planejar eventos ou atividades para jovens",
        points: {
          "Ministério Jovens": 2,
          "Clube de Desbravadores": 1,
        },
      },
      {
        text: "Ensinar princípios bíblicos a crianças",
        points: {
          "Ministério da Criança": 2,
        },
      },
    ],
  },
  {
    id: 44,
    text: "Quando se envolve em projetos, você prefere:",
    options: [
      {
        text: "Cuidar da comunicação e divulgação",
        points: {
          Comunicação: 2,
        },
      },
      {
        text: "Preparar relatórios e registros administrativos",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Apoiar com ações práticas de ajuda",
        points: {
          "Ação Social Adventista": 2,
        },
      },
      {
        text: "Liderar estudos ou aulas bíblicas",
        points: {
          "Escola Sabatina": 2,
        },
      },
    ],
  },
  {
    id: 45,
    text: "Você se sente confortável em falar em público e motivar pessoas?",
    options: [
      {
        text: "Sim, adoro ensinar e inspirar",
        points: {
          "Ministério Pessoal": 2,
          "Ministério Jovens": 1,
        },
      },
      {
        text: "Prefiro trabalhar nos bastidores, organizando material",
        points: {
          Secretaria: 2,
          "Patrimônio/Manutenção": 1,
        },
      },
      {
        text: "Prefiro música ou arte como forma de motivar",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Prefiro ajudar com tarefas práticas ou sociais",
        points: {
          "Ação Social Adventista": 2,
        },
      },
    ],
  },
  {
    id: 46,
    text: "Ao planejar atividades para crianças, você prefere:",
    options: [
      {
        text: "Criar jogos e atividades lúdicas",
        points: {
          "Ministério da Criança": 2,
          "Clube de Aventureiros": 1,
        },
      },
      {
        text: "Ensinar histórias bíblicas",
        points: {
          "Ministério da Criança": 2,
        },
      },
      {
        text: "Ajudar na logística e organização do evento",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Apoiar os pais com conselhos ou materiais",
        points: {
          "Ministério da Família": 2,
          "Ministério de Mulheres": 1,
        },
      },
    ],
  },
  {
    id: 47,
    text: "Se você pudesse organizar um projeto missionário, faria:",
    options: [
      {
        text: "Distribuição de literatura e evangelismo",
        points: {
          Publicações: 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Visitas e acompanhamento de pessoas",
        points: {
          "Ministério Pessoal": 2,
          Anciãos: 1,
        },
      },
      {
        text: "Recolhimento de fundos e doações",
        points: {
          Tesouraria: 2,
          ASA: 1,
        },
      },
      {
        text: "Preparação de logística e materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 48,
    text: "Em relação a música, você prefere:",
    options: [
      {
        text: "Cantar ou tocar",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Dirigir ou organizar apresentações",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Compor, arranjar ou criar novas músicas",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Apoiar com infraestrutura, instrumentos e equipamentos",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 49,
    text: "Você se considera mais:",
    options: [
      {
        text: "Organizado(a) e metódico(a)",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Comunicativo(a) e inspirador(a)",
        points: {
          "Ministério Pessoal": 2,
          "Ministério Jovens": 1,
        },
      },
      {
        text: "Criativo(a) e artístico(a)",
        points: {
          "Ministério de Música": 2,
          Comunicação: 1,
        },
      },
      {
        text: "Prático(a) e disposto(a) a ajudar fisicamente",
        points: {
          "Patrimônio/Manutenção": 2,
          "Ação Social Adventista": 1,
        },
      },
    ],
  },
  {
    id: 50,
    text: "Quando há um evento na igreja, você prefere:",
    options: [
      {
        text: "Preparar convites, registros e agenda",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Preparar alimentos ou cuidar do serviço social",
        points: {
          "Ação Social Adventista": 2,
          "Ministério de Saúde": 1,
        },
      },
      {
        text: "Organizar atividades para crianças ou jovens",
        points: {
          "Ministério da Criança": 2,
          "Ministério dos Jovens": 1,
        },
      },
      {
        text: "Ensaiar música ou liderar o louvor",
        points: {
          "Ministério de Música": 2,
        },
      },
    ],
  },
  {
    id: 51,
    text: "Quando alguém da igreja precisa de aconselhamento espiritual, você:",
    options: [
      {
        text: "Ouve e orienta com base na Bíblia",
        points: {
          Anciãos: 2,
        },
      },
      {
        text: "Leva recursos literários ou devocionais",
        points: {
          "Publicações/Literatura Evangelística": 2,
        },
      },
      {
        text: "Incentiva participação em estudos ou classes da Escola Sabatina",
        points: {
          "Escola Sabatina": 2,
        },
      },
      {
        text: "Oferece ajuda prática ou emocional",
        points: {
          "Ministério Pessoal": 2,
          "Ação Social Adventista": 1,
        },
      },
    ],
  },
  {
    id: 52,
    text: "Se você tivesse que planejar uma ação social, você faria:",
    options: [
      {
        text: "Organizar equipe de voluntários",
        points: {
          Secretaria: 2,
          Diaconato: 1,
        },
      },
      {
        text: "Arrecadar fundos e doações",
        points: {
          Tesouraria: 2,
          "Ação Social Adventista": 1,
        },
      },
      {
        text: "Distribuir alimentos e roupas",
        points: {
          "Ação Social Adventista": 2,
        },
      },
      {
        text: "Garantir registro e relatórios das atividades",
        points: {
          Secretaria: 2,
        },
      },
    ],
  },
  {
    id: 53,
    text: "Durante encontros com jovens, você prefere:",
    options: [
      {
        text: "Ensinar princípios bíblicos e de liderança",
        points: {
          "Ministério dos Jovens": 2,
        },
      },
      {
        text: "Organizar jogos, dinâmicas e atividades",
        points: {
          "Clube de Desbravadores": 2,
          "Clube de Aventureiros": 1,
        },
      },
      {
        text: "Discutir temas atuais à luz da Bíblia",
        points: {
          "Ministério do Adolescente": 2,
        },
      },
      {
        text: "Cuidar da logística do encontro",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 54,
    text: "No ministério da família, você tende a:",
    options: [
      {
        text: "Aconselhar casais e famílias",
        points: {
          "Ministério da Família": 2,
        },
      },
      {
        text: "Organizar eventos que promovam união familiar",
        points: {
          "Ministério da Família": 2,
          "Ministério de Mulheres": 1,
        },
      },
      {
        text: "Distribuir literatura sobre família e relacionamentos",
        points: {
          Publicações: 2,
        },
      },
      {
        text: "Oferecer ajuda prática a famílias necessitadas",
        points: {
          "Ação Social Adventista": 2,
        },
      },
    ],
  },
  {
    id: 55,
    text: "Quando se trata de música, você prefere:",
    options: [
      {
        text: "Cantar ou tocar instrumento",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Organizar ensaios e apresentações",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Compor ou arranjar músicas",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Cuidar dos equipamentos e instrumentos",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 56,
    text: "Ao organizar eventos, você se interessa por:",
    options: [
      {
        text: "Divulgação, redes sociais e comunicação",
        points: {
          Comunicação: 2,
        },
      },
      {
        text: "Preparar materiais impressos ou boletins",
        points: {
          "Publicações/Literatura Evangelística": 2,
        },
      },
      {
        text: "Cuidar da infraestrutura e equipamentos",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Receber e acolher os visitantes",
        points: {
          Diaconato: 2,
          "Ministério Pessoal": 1,
        },
      },
    ],
  },
  {
    id: 57,
    text: "Você gosta de ensinar ou discipular pessoas através de:",
    options: [
      {
        text: "Estudos bíblicos em grupo",
        points: {
          "Escola Sabatina": 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Estudos individuais ou acompanhamento pessoal",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Atividades com jovens e adolescentes",
        points: {
          "Ministério dos Jovens": 2,
          "Ministério do Adolescente": 1,
        },
      },
      {
        text: "Atividades lúdicas com crianças",
        points: {
          "Ministério da Criança": 2,
        },
      },
    ],
  },
  {
    id: 58,
    text: "Quando alguém está doente ou com dificuldade, você:",
    options: [
      {
        text: "Vai visitar e orar por essa pessoa",
        points: {
          "Ministério de Saúde": 2,
          "Ministério do Idoso": 1,
        },
      },
      {
        text: "Ajuda com doações de alimentos, remédios ou roupas",
        points: {
          "Ação Social Adventista": 2,
        },
      },
      {
        text: "Coordena estudo bíblico ou devocional",
        points: {
          "Ministério Pessoal": 2,
          "Escola Sabatina": 1,
        },
      },
      {
        text: "Organiza infraestrutura, transporte ou suporte físico",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 59,
    text: "Em campanhas de literatura e evangelismo, você prefere:",
    options: [
      {
        text: "Distribuir folhetos, livros e revistas",
        points: {
          "Publicações/Literatura Evangelística": 2,
        },
      },
      {
        text: "Incentivar pessoas a participarem de estudos bíblicos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Organizar a logística de entrega de materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Apoiar financeiramente as ações evangelísticas",
        points: {
          Tesouraria: 2,
        },
      },
    ],
  },
  {
    id: 60,
    text: "Você se sente motivado(a) em servir no ministério de mulheres ou homens quando:",
    options: [
      {
        text: "Pode liderar grupos e organizar encontros",
        points: {
          "Ministério de Mulheres": 2,
          "Ministério da Família": 1,
        },
      },
      {
        text: "Pode planejar ações práticas e sociais",
        points: {
          "Ministério de Homens": 2,
          "Ação Social Adventista": 1,
        },
      },
      {
        text: "Pode estudar e ensinar princípios bíblicos",
        points: {
          "Escola Sabatina": 2,
        },
      },
      {
        text: "Pode motivar a participação em projetos da igreja",
        points: {
          "Ministério Pessoal": 2,
        },
      },
    ],
  },
  {
    id: 61,
    text: "Você gosta de manter a ordem em documentos e agendar compromissos?",
    options: [
      {
        text: "Organizo planilhas e arquivos",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Prefiro lidar com dinheiro e contas bancárias",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Ajudo na recepção de pessoas na igreja",
        points: {
          Diaconato: 2,
          "Ministério da Família": 1,
        },
      },
      {
        text: "Participo de grupos de estudo bíblico",
        points: {
          "Escola Sabatina": 2,
        },
      },
    ],
  },
  {
    id: 62,
    text: "Em um projeto de igreja, qual tarefa você escolheria?",
    options: [
      {
        text: "Garantir que toda a papelada esteja correta e atualizada",
        points: {
          Secretaria: 2,
          "Patrimônio/Manutenção": 1,
        },
      },
      {
        text: "Planejar e controlar o orçamento financeiro",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Visitar membros e ajudar em necessidades práticas",
        points: {
          Diaconato: 2,
          ASA: 1,
        },
      },
      {
        text: "Coordenar o estudo da lição da Escola Sabatina",
        points: {
          "Escola Sabatina": 2,
        },
      },
    ],
  },
  {
    id: 63,
    text: "Você se sente à vontade organizando finanças pessoais ou comunitárias?",
    options: [
      {
        text: "Sim, gosto de fazer orçamento e acompanhar doações",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Não, prefiro tarefas de apoio e limpeza",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Prefiro preparar e distribuir literatura de edificação",
        points: {
          Publicações: 2,
        },
      },
      {
        text: "Gosto mais de ensinar a Bíblia para adultos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
    ],
  },
  {
    id: 64,
    text: "Durante o culto, como você prefere participar?",
    options: [
      {
        text: "Ajudando a preparar o local e cuidar da manutenção",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Organizando os materiais de apoio e agenda do pastor",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Participando do grupo de oração e aconselhamento",
        points: {
          Anciãos: 2,
        },
      },
      {
        text: "Tocando um instrumento musical ou liderando o coral",
        points: {
          "Ministério de Música": 2,
        },
      },
    ],
  },
  {
    id: 65,
    text: "O que você mais gosta de fazer no tempo livre?",
    options: [
      {
        text: "Liderar um pequeno grupo de estudo bíblico",
        points: {
          "Escola Sabatina": 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Ler e discutir livros e revistas cristãs",
        points: {
          Publicações: 2,
        },
      },
      {
        text: "Praticar esportes em equipe ou acampar",
        points: {
          "Clube de Desbravadores": 2,
          ASA: 1,
        },
      },
      {
        text: "Cozinhar uma refeição para a família",
        points: {
          "Ministério da Família": 2,
          "Ação Social Adventista": 1,
        },
      },
    ],
  },
  {
    id: 66,
    text: "Ao planejar um evento social, você prefere cuidar de:",
    options: [
      {
        text: "Convites, anúncios e comunicação",
        points: {
          Comunicação: 2,
        },
      },
      {
        text: "Decoração, limpeza e organização do local",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Arrecadar fundos e cuidar do caixa",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Programar uma atividade espiritual ou mensagem",
        points: {
          Anciãos: 2,
          "Ministério Pessoal": 1,
        },
      },
    ],
  },
  {
    id: 67,
    text: "Seus amigos sabem que você é bom(a) em:",
    options: [
      {
        text: "Resolver problemas técnicos ou de informática",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Aprender e tocar vários instrumentos musicais",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Orientar pessoas sobre fé e valores cristãos",
        points: {
          "Ministério Pessoal": 2,
          Anciãos: 1,
        },
      },
      {
        text: "Dar aulas criativas para crianças",
        points: {
          "Ministério da Criança": 2,
        },
      },
    ],
  },
  {
    id: 68,
    text: "Qual destas atividades lhe atrai mais?",
    options: [
      {
        text: "Ensinar versículos bíblicos para crianças",
        points: {
          "Ministério da Criança": 2,
        },
      },
      {
        text: "Ser voluntário em programas de saúde ou bem-estar",
        points: {
          "Ministério de Saúde": 2,
        },
      },
      {
        text: "Organizar eventos esportivos ou recreativos para jovens",
        points: {
          "Ministério Jovens": 2,
        },
      },
      {
        text: "Administrar listas de presença e arquivos da igreja",
        points: {
          Secretaria: 2,
        },
      },
    ],
  },
  {
    id: 69,
    text: "Você se considera uma pessoa:",
    options: [
      {
        text: "Organizada e pontual para atender compromissos",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Extrovertida e boa em motivar pessoas",
        points: {
          "Ministério Jovens": 2,
          "Ministério do Adolescente": 1,
        },
      },
      {
        text: "Detalhista e confiante para lidar com dinheiro",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Criativa e sensível às necessidades dos outros",
        points: {
          "Ministério de Mulheres": 2,
          ASA: 1,
        },
      },
    ],
  },
  {
    id: 70,
    text: "Se alguém precisa de ajuda prática, você:",
    options: [
      {
        text: "Gosta de consertar coisas ou decorar espaços",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
      {
        text: "Oferece apoio emocional, ouvindo e orando",
        points: {
          Anciãos: 2,
        },
      },
      {
        text: "Busca ajuda com perguntas da Bíblia",
        points: {
          "Escola Sabatina": 2,
        },
      },
      {
        text: "Participa de campanhas de arrecadação para necessitados",
        points: {
          "Ação Social Adventista": 2,
        },
      },
    ],
  },
  {
    id: 71,
    text: "Em relação a crianças e jovens, você se interessa por:",
    options: [
      {
        text: "Ensinar histórias e valores bíblicos",
        points: {
          "Ministério da Criança": 2,
        },
      },
      {
        text: "Planejar atividades de campo e aventuras",
        points: {
          "Clube de Aventureiros": 2,
        },
      },
      {
        text: "Ajudar adolescentes a resolver dúvidas da adolescência",
        points: {
          "Ministério do Adolescente": 2,
        },
      },
      {
        text: "Liderar grupos de jovens em estudos e dinâmicas",
        points: {
          "Ministério Jovens": 2,
        },
      },
    ],
  },
  {
    id: 72,
    text: "Você prefere trabalhos que:",
    options: [
      {
        text: "Incentivam adoção de hábitos saudáveis",
        points: {
          "Ministério de Saúde": 2,
        },
      },
      {
        text: "Desenvolvem o talento musical em cultos",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Reúnem pessoas para estudo da lição",
        points: {
          "Escola Sabatina": 2,
        },
      },
      {
        text: "Cuidam do patrimônio físico da igreja",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 73,
    text: "Quando surge uma nova campanha missionária, você:",
    options: [
      {
        text: "Se oferece para coordenar a arrecadação",
        points: {
          "Ação Social Adventista": 2,
        },
      },
      {
        text: "Ajuda divulgando em redes sociais e site",
        points: {
          Comunicação: 2,
        },
      },
      {
        text: "Se envolve nas visitas e estudos bíblicos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Apoia encontrando colete e recursos",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 74,
    text: "Qual destas situações lhe agrada mais?",
    options: [
      {
        text: "Trocar cartas ou boletins informativos",
        points: {
          Comunicação: 2,
        },
      },
      {
        text: "Cozinhar refeições nutritivas para a comunidade",
        points: {
          "Ministério de Saúde": 2,
          ASA: 1,
        },
      },
      {
        text: "Ensinar jovens sobre liderança e valores",
        points: {
          "Ministério Jovens": 2,
        },
      },
      {
        text: "Fazer a contabilidade de um projeto social",
        points: {
          Tesouraria: 2,
        },
      },
    ],
  },
  {
    id: 75,
    text: "Você se vê trabalhando voluntariamente:",
    options: [
      {
        text: "Com organizações que apoiam viúvos e órfãos",
        points: {
          "Ministério da Família": 2,
          "Ministério de Mulheres": 1,
        },
      },
      {
        text: "Em projetos de leitura da Bíblia ou literatura",
        points: {
          Publicações: 2,
        },
      },
      {
        text: "Fazendo apresentações musicais em cultos",
        points: {
          "Ministério de Música": 2,
        },
      },
      {
        text: "Zelando pela limpeza e ordem dos espaços",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 76,
    text: "Em um grupo de estudo, você costuma:",
    options: [
      {
        text: "Tomar a frente para meditar e orar",
        points: {
          Anciãos: 2,
        },
      },
      {
        text: "Anotar dúvidas e enviar recados sobre o encontro",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Cuidar da lanchonete ou alimentação",
        points: {
          "Ação Social Adventista": 2,
          "Ministério de Saúde": 1,
        },
      },
      {
        text: "Levar depoimentos de pessoas da comunidade",
        points: {
          "Ministério Pessoal": 2,
        },
      },
    ],
  },
  {
    id: 77,
    text: "Você se impressiona mais com quem:",
    options: [
      {
        text: "É excelente em ensinar e liderar estudos bíblicos",
        points: {
          "Escola Sabatina": 2,
        },
      },
      {
        text: "Consegue motivar jovens a participar",
        points: {
          "Ministério Jovens": 2,
        },
      },
      {
        text: "Dedica tempo cuidando de idosos ou enfermos",
        points: {
          "Ministério do Idoso": 2,
        },
      },
      {
        text: "Organiza recursos e estoque de materiais",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 78,
    text: "Sua maior satisfação é:",
    options: [
      {
        text: "Ver pessoas descobrindo novos conceitos bíblicos",
        points: {
          "Ministério Pessoal": 2,
        },
      },
      {
        text: "Ajudar outros a usarem melhor seus dons",
        points: {
          Anciãos: 2,
          "Ministério Pessoal": 1,
        },
      },
      {
        text: "Ver crianças aprendendo sobre Jesus",
        points: {
          "Ministério da Criança": 2,
        },
      },
      {
        text: "Garantir que tudo esteja bem conservado",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 79,
    text: "Você tem facilidade para:",
    options: [
      {
        text: "Planejar orçamentos familiares ou de eventos",
        points: {
          Tesouraria: 2,
        },
      },
      {
        text: "Comunicar-se em público",
        points: {
          "Ministério Pessoal": 2,
          "Ministério da Família": 1,
        },
      },
      {
        text: "Ensinar e discipular outras pessoas",
        points: {
          Anciãos: 2,
        },
      },
      {
        text: "Fazer manutenção ou consertos simples",
        points: {
          "Patrimônio/Manutenção": 2,
        },
      },
    ],
  },
  {
    id: 80,
    text: "Quando surge um novo desafio espiritual, você:",
    options: [
      {
        text: "Gosta de acompanhar processos burocráticos para projetos",
        points: {
          Secretaria: 2,
        },
      },
      {
        text: "Incentiva a leitura da Bíblia e línguas devocionais",
        points: {
          "Escola Sabatina": 2,
        },
      },
      {
        text: "Se voluntaria em atividades comunitárias",
        points: {
          ASA: 2,
          "Ministério de Saúde": 1,
        },
      },
      {
        text: "Organiza eventos musicais evangelísticos",
        points: {
          "Ministério de Música": 2,
        },
      },
    ],
  },
]
