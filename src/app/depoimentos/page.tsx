import PageLayout from '@/components/PageLayout'
import { Star, Quote, User, Award } from 'lucide-react'

export default function DepoimentosPage() {
  const depoimentos = [
    {
      id: 1,
      nome: 'Maria Silva',
      cargo: 'Analista Financeira',
      empresa: 'Banco do Brasil',
      certificacao: 'CPA-20',
      foto: '/api/placeholder/80/80',
      texto: 'O curso da Spartan foi fundamental para minha aprovação na CPA-20. O material é completo e os professores são excepcionais. Recomendo para todos que querem se destacar no mercado financeiro.',
      nota: 5
    },
    {
      id: 2,
      nome: 'João Santos',
      cargo: 'Gerente de Investimentos',
      empresa: 'XP Investimentos',
      certificacao: 'CEA',
      foto: '/api/placeholder/80/80',
      texto: 'Consegui minha certificação CEA em apenas 3 meses graças ao curso da Spartan. A metodologia é eficiente e o suporte é incrível. Vale cada centavo investido!',
      nota: 5
    },
    {
      id: 3,
      nome: 'Ana Costa',
      cargo: 'Consultora Financeira',
      empresa: 'BTG Pactual',
      certificacao: 'CFP',
      foto: '/api/placeholder/80/80',
      texto: 'O CFP é uma certificação complexa, mas com o curso da Spartan consegui me preparar adequadamente. Os simulados são muito próximos da prova real.',
      nota: 5
    },
    {
      id: 4,
      nome: 'Carlos Oliveira',
      cargo: 'Assessor de Investimentos',
      empresa: 'Rico',
      certificacao: 'CPA-10',
      foto: '/api/placeholder/80/80',
      texto: 'Comecei minha carreira no mercado financeiro com o curso CPA-10 da Spartan. Hoje sou assessor e recomendo a todos os iniciantes.',
      nota: 5
    },
    {
      id: 5,
      nome: 'Fernanda Lima',
      cargo: 'Especialista em Fundos',
      empresa: 'Itaú Asset',
      certificacao: 'ANCORD',
      foto: '/api/placeholder/80/80',
      texto: 'A certificação ANCORD abriu muitas portas na minha carreira. O curso da Spartan me deu toda a base necessária para aprovação.',
      nota: 5
    },
    {
      id: 6,
      nome: 'Roberto Alves',
      cargo: 'Operador de Bolsa',
      empresa: 'B3',
      certificacao: 'PQO B3',
      foto: '/api/placeholder/80/80',
      texto: 'Trabalho diretamente na B3 e o curso PQO da Spartan foi essencial para minha qualificação. Material atualizado e professores experientes.',
      nota: 5
    }
  ]

  const estatisticas = [
    { numero: '95%', descricao: 'Taxa de Aprovação' },
    { numero: '50K+', descricao: 'Alunos Aprovados' },
    { numero: '4.9', descricao: 'Nota Média' },
    { numero: '10K+', descricao: 'Depoimentos' }
  ]

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Depoimentos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja o que nossos alunos falam sobre nossa metodologia e resultados
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.numero}</div>
                <div className="text-white">{stat.descricao}</div>
              </div>
            ))}
          </div>

          {/* Grid de depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {depoimentos.map((depoimento) => (
              <div key={depoimento.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                {/* Avaliação */}
                <div className="flex items-center mb-4">
                  {[...Array(depoimento.nota)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Depoimento */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary-200 mb-3" />
                  <p className="text-gray-600 italic">
                    &ldquo;{depoimento.texto}&rdquo;
                  </p>
                </div>

                {/* Informações do aluno */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{depoimento.nome}</h3>
                    <p className="text-sm text-gray-600">{depoimento.cargo}</p>
                    <p className="text-sm text-gray-500">{depoimento.empresa}</p>
                    <div className="flex items-center mt-1">
                      <Award className="h-4 w-4 text-primary-600 mr-1" />
                      <span className="text-sm text-primary-600 font-medium">{depoimento.certificacao}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Seja o próximo a compartilhar sua história de sucesso
            </h2>
            <p className="text-gray-600 mb-6">
              Junte-se a milhares de profissionais que já transformaram suas carreiras conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-black px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Começar Agora
              </button>
              <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Ver Cursos
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
