import { GraduationCap, Award, BookOpen } from 'lucide-react'

export default function ProfessoresSection() {
  const professores = [
    {
      nome: 'Tiago Feitosa',
      cargo: 'Professor',
      especialidade: 'Mercado Financeiro',
      experiencia: '15+ anos',
      certificacoes: ['CEA', 'CFP', 'CPA-20'],
      descricao: 'Especialista em produtos de investimento e planejamento financeiro pessoal.'
    },
    {
      nome: 'Pâmela Rocha',
      cargo: 'Professora',
      especialidade: 'Certificações ANBIMA',
      experiencia: '12+ anos',
      certificacoes: ['CEA', 'CPA-20', 'CPA-10'],
      descricao: 'Referência em preparação para certificações do mercado financeiro brasileiro.'
    },
    {
      nome: 'Davi Bastos',
      cargo: 'Professor',
      especialidade: 'Matemática Financeira',
      experiencia: '10+ anos',
      certificacoes: ['CEA', 'CPA-20'],
      descricao: 'Especialista em cálculos financeiros e análise de investimentos.'
    },
    {
      nome: 'Julia Vidal',
      cargo: 'Professora',
      especialidade: 'Compliance e Regulamentação',
      experiencia: '8+ anos',
      certificacoes: ['CEA', 'CPA-20', 'ANCORD'],
      descricao: 'Especialista em regulamentações do mercado financeiro e compliance.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Um Time de Especialistas no Assunto
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Todo o nosso time é formado por especialistas em cada área que atua. Proporcionando um ambiente propício e ideal para que você se desenvolva da melhor forma.
          </p>
        </div>

        {/* Grid de professores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professores.map((professor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Foto placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-2">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">Foto do Professor</p>
                </div>
              </div>

              <div className="p-6">
                {/* Nome e cargo */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{professor.nome}</h3>
                  <p className="text-sm text-primary-600 font-medium">{professor.cargo}</p>
                </div>

                {/* Especialidade e experiência */}
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-sm font-medium text-gray-900">{professor.especialidade}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">{professor.experiencia} de experiência</span>
                  </div>
                </div>

                {/* Certificações */}
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-xs font-medium text-gray-700">Certificações</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {professor.certificacoes.map((cert, certIndex) => (
                      <span key={certIndex} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-sm text-gray-600 text-center">{professor.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer conhecer mais sobre nossa metodologia e equipe?
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            Conhecer Metodologia
          </button>
        </div>
      </div>
    </section>
  )
}
