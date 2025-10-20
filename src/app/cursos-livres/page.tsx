import PageLayout from '@/components/PageLayout'
import { ArrowLeft, Clock, BookOpen, Users, Award, CheckCircle, FileSpreadsheet } from 'lucide-react'

export default function CursosLivresPage() {
  const cursos = [
    {
      id: 'excel',
      nome: 'Excel Avançado',
      descricao: 'Domine o Excel com funções avançadas e automação',
      preco: 'R$ 197,00',
      parcelas: '12x de R$ 16,41',
      duracao: '6 meses',
      icone: FileSpreadsheet,
      descricaoCompleta: 'Aprenda Excel do básico ao avançado com foco no mercado financeiro. Inclui funções complexas, macros, dashboards e automação de processos.'
    },
    {
      id: 'hp12c',
      nome: 'HP-12C',
      descricao: 'Matemática Financeira com Calculadora HP-12C',
      preco: 'R$ 177,00',
      parcelas: '12x de R$ 14,75',
      duracao: '6 meses',
      icone: FileSpreadsheet,
      descricaoCompleta: 'Domine a calculadora HP-12C e os cálculos financeiros essenciais. Aprenda desde operações básicas até cálculos complexos de investimentos.'
    },
    {
      id: 'linkedin',
      nome: 'Executivo LinkedIn',
      descricao: 'Construa uma presença profissional forte',
      preco: 'R$ 197,00',
      parcelas: '12x de R$ 16,41',
      duracao: '6 meses',
      icone: FileSpreadsheet,
      descricaoCompleta: 'Desenvolva sua marca pessoal no LinkedIn e acelere sua carreira. Aprenda estratégias de networking, conteúdo e posicionamento profissional.'
    }
  ]

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cursos Livres
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolva habilidades essenciais para sua carreira com nossos cursos práticos e focados no seu crescimento profissional
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-gray-600">Cursos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">15K+</div>
              <div className="text-gray-600">Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
          </div>

          {/* Grid de cursos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cursos.map((curso) => {
              const IconComponent = curso.icone
              return (
                <div key={curso.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                        <IconComponent className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{curso.nome}</h3>
                      <p className="text-gray-600 mb-4">{curso.descricao}</p>
                    </div>

                    <div className="mb-6">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-primary-600">{curso.preco}</div>
                        <div className="text-sm text-gray-500">{curso.parcelas}</div>
                        <div className="text-sm text-green-600 font-medium mt-1">10% OFF no PIX</div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-primary-600" />
                          {curso.duracao} de acesso
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <BookOpen className="h-4 w-4 mr-2 text-primary-600" />
                          Material completo
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-6">{curso.descricaoCompleta}</p>

                    <div className="space-y-3">
                      <a 
                        href={`/cursos-livres/${curso.id}`}
                        className="w-full bg-primary-600 text-white px-4 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors text-center block"
                      >
                        Saiba Mais
                      </a>
                      <button className="w-full border border-primary-600 text-primary-600 px-4 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors">
                        Comprar Agora
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA final */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quer desenvolver múltiplas habilidades?
            </h2>
            <p className="text-gray-600 mb-6">
              Conheça nossos pacotes combinados e economize até 30% no investimento total.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Ver Pacotes Combinados
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
