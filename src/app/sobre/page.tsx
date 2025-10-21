import PageLayout from '@/components/PageLayout'
import { Users, Award, Target, Heart, GraduationCap, TrendingUp } from 'lucide-react'

export default function SobrePage() {
  const valores = [
    {
      icone: GraduationCap,
      titulo: 'Excelência Educacional',
      descricao: 'Comprometidos com a qualidade do ensino e resultados excepcionais para nossos alunos.'
    },
    {
      icone: Users,
      titulo: 'Comunidade',
      descricao: 'Construímos uma comunidade forte de profissionais do mercado financeiro.'
    },
    {
      icone: Target,
      titulo: 'Foco no Resultado',
      descricao: 'Nossa metodologia é focada em aprovação e desenvolvimento profissional.'
    },
    {
      icone: Heart,
      titulo: 'Paixão pelo Ensino',
      descricao: 'Amamos o que fazemos e isso se reflete na qualidade dos nossos cursos.'
    }
  ]

  const estatisticas = [
    { numero: '50K+', descricao: 'Alunos Formados' },
    { numero: '95%', descricao: 'Taxa de Aprovação' },
    { numero: '8', descricao: 'Anos de Experiência' },
    { numero: '15', descricao: 'Especialistas' }
  ]

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre o Instituto Spartan
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformando carreiras através da educação financeira de qualidade desde 2016
            </p>
          </div>

          {/* História */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Nossa História</h2>
                <p className="text-white mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-white mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-white">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
                    <TrendingUp className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
                  <p className="text-gray-600">
                    Democratizar o acesso à educação financeira de qualidade, preparando profissionais para o mercado financeiro brasileiro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Nossos Números</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {estatisticas.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.numero}</div>
                  <div className="text-white">{stat.descricao}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Valores */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => {
                const IconComponent = valor.icone
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{valor.titulo}</h3>
                    <p className="text-white text-sm">{valor.descricao}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Equipe */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { nome: 'Tiago Feitosa', cargo: 'CEO & Fundador' },
                { nome: 'Pâmela Rocha', cargo: 'Diretora Pedagógica' },
                { nome: 'Davi Bastos', cargo: 'Coordenador Acadêmico' },
                { nome: 'Julia Vidal', cargo: 'Gerente de Produtos' }
              ].map((pessoa, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pessoa.nome}</h3>
                  <p className="text-gray-600 text-sm">{pessoa.cargo}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Faça parte da nossa história
            </h2>
            <p className="text-gray-600 mb-6">
              Junte-se a milhares de profissionais que já transformaram suas carreiras conosco.
            </p>
            <button className="bg-primary-600 text-black px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
