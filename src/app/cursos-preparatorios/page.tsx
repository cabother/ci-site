import PageLayout from '@/components/PageLayout'
import { GraduationCap, BookOpen, Clock, Users, Award } from 'lucide-react'

export default function CursosPreparatoriosPage() {
  const cursos = [
    {
      id: 'cpa10',
      nome: 'CPA-10',
      descricao: 'Certificação Profissional ANBIMA - Série 10',
      preco: 'R$ 329,00',
      parcelas: '12x de R$ 27,42',
      duracao: '6 meses',
      questoes: '700+ questões',
      descricaoCompleta: 'A CPA-10 é ideal para quem está começando no setor bancário. Esta certificação é obrigatória para profissionais que trabalham com produtos de investimento em bancos e corretoras. Nosso curso preparatório oferece todo o conteúdo necessário para sua aprovação.'
    },
    {
      id: 'cpa20',
      nome: 'CPA-20',
      descricao: 'Certificação Profissional ANBIMA - Série 20',
      preco: 'R$ 439,00',
      parcelas: '12x de R$ 36,58',
      duracao: '6 meses',
      questoes: '1.200+ questões',
      descricaoCompleta: 'A CPA-20 é exigida para atuar com produtos de investimento mais complexos. Esta certificação é essencial para profissionais que trabalham com fundos de investimento, previdência privada e outros produtos estruturados.'
    },
    {
      id: 'cea',
      nome: 'CEA',
      descricao: 'Certificação de Especialista em Investimentos',
      preco: 'R$ 749,00',
      parcelas: '12x de R$ 62,42',
      duracao: '8 meses',
      questoes: '1.300+ questões',
      descricaoCompleta: 'A CEA é o passo que separa o profissional comum do especialista em investimentos. Esta certificação é voltada para profissionais que desejam se especializar em análise de investimentos e gestão de carteiras.'
    },
    {
      id: 'cfp',
      nome: 'CFP®',
      descricao: 'Certified Financial Planner',
      preco: 'R$ 1.990,00',
      parcelas: '12x de R$ 165,83',
      duracao: '3 anos',
      questoes: '1.480+ questões',
      descricaoCompleta: 'O CFP® é a certificação mais prestigiada do mercado financeiro brasileiro. Voltada para planejadores financeiros, esta certificação abrange todos os aspectos do planejamento financeiro pessoal e empresarial.'
    },
    {
      id: 'ancord',
      nome: 'ANCORD',
      descricao: 'Associação Nacional das Corretoras',
      preco: 'R$ 439,00',
      parcelas: '12x de R$ 36,58',
      duracao: '8 meses',
      questoes: '710+ questões',
      descricaoCompleta: 'A certificação ANCORD é essencial para profissionais que trabalham em corretoras de valores mobiliários. Abrange conhecimentos sobre mercado de capitais, operações de bolsa e produtos financeiros.'
    },
    {
      id: 'pqo-b3',
      nome: 'PQO B3',
      descricao: 'Programa de Qualificação Operacional B3',
      preco: 'R$ 390,00',
      parcelas: '12x de R$ 40,33',
      duracao: '6 meses',
      questoes: '525+ questões',
      descricaoCompleta: 'O PQO B3 é obrigatório para profissionais que operam diretamente na B3. Esta certificação é essencial para traders, operadores e outros profissionais que trabalham diretamente com operações de bolsa.'
    }
  ]

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cursos Preparatórios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepare-se para as principais certificações do mercado financeiro com nossos cursos completos e especializados
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-gray-600">Certificações</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">Alunos Aprovados</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5K+</div>
              <div className="text-gray-600">Questões</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Taxa de Aprovação</div>
            </div>
          </div>

          {/* Grid de cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos.map((curso) => (
              <div key={curso.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-primary-600 mb-2">{curso.nome}</h3>
                    <p className="text-gray-600 mb-4">{curso.descricao}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-primary-600">{curso.preco}</div>
                      <div className="text-sm text-gray-500">{curso.parcelas}</div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-primary-600" />
                        {curso.duracao} de acesso
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-2 text-primary-600" />
                        {curso.questoes}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-6">{curso.descricaoCompleta}</p>

                  <div className="space-y-3">
                    <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                      Comprar Agora
                    </button>
                    <button className="w-full border border-primary-600 text-primary-600 px-4 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Não sabe qual certificação escolher?
            </h2>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas pode ajudar você a escolher a certificação ideal para sua carreira.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
