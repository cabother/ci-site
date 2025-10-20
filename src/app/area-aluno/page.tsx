import PageLayout from '@/components/PageLayout'
import { ArrowLeft, Users, Award, CheckCircle, Star } from 'lucide-react'

export default function AreaAlunoPage() {
  const cursosAtivos = [
    {
      nome: 'CPA-10',
      progresso: 75,
      proximaAula: 'Fundos de Investimento',
      dataAcesso: 'Até 15/07/2024'
    },
    {
      nome: 'Excel Avançado',
      progresso: 45,
      proximaAula: 'Funções Avançadas',
      dataAcesso: 'Até 20/08/2024'
    },
    {
      nome: 'HP-12C',
      progresso: 90,
      proximaAula: 'Análise de Investimentos',
      dataAcesso: 'Até 10/06/2024'
    }
  ]

  const proximasProvas = [
    {
      certificacao: 'CPA-10',
      data: '15/03/2024',
      status: 'Agendada'
    },
    {
      certificacao: 'CEA',
      data: '22/04/2024',
      status: 'Preparando'
    }
  ]

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Área do Aluno
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Acompanhe seu progresso e continue sua jornada de aprendizado
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cursos Ativos */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Meus Cursos Ativos</h2>
                <div className="space-y-6">
                  {cursosAtivos.map((curso, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{curso.nome}</h3>
                        <span className="text-sm text-gray-500">{curso.dataAcesso}</span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progresso</span>
                          <span>{curso.progresso}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${curso.progresso}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">Próxima aula:</p>
                          <p className="font-medium text-gray-900">{curso.proximaAula}</p>
                        </div>
                        <button className="bg-primary-600 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                          Continuar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Próximas Provas */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Próximas Provas</h2>
                <div className="space-y-4">
                  {proximasProvas.map((prova, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">{prova.certificacao}</h3>
                        <p className="text-sm text-gray-600">Data: {prova.data}</p>
                      </div>
                      <div className="flex items-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          prova.status === 'Agendada' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {prova.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Estatísticas */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Minhas Estatísticas</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary-600 mr-3" />
                      <span className="text-gray-700">Cursos Concluídos</span>
                    </div>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-primary-600 mr-3" />
                      <span className="text-gray-700">Certificações</span>
                    </div>
                    <span className="font-semibold text-gray-900">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-primary-600 mr-3" />
                      <span className="text-gray-700">Pontuação Média</span>
                    </div>
                    <span className="font-semibold text-gray-900">8.5</span>
                  </div>
                </div>
              </div>

              {/* Ações Rápidas */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ações Rápidas</h3>
                <div className="space-y-3">
                  <button className="w-full bg-primary-600 text-black px-4 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                    Novo Curso
                  </button>
                  <button className="w-full border border-primary-600 text-primary-600 px-4 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors">
                    Simulados
                  </button>
                  <button className="w-full border border-primary-600 text-primary-600 px-4 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors">
                    Suporte
                  </button>
                </div>
              </div>

              {/* Certificados */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Meus Certificados</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">CPA-10</h4>
                      <p className="text-sm text-gray-600">Concluído em 15/01/2024</p>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Baixar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
