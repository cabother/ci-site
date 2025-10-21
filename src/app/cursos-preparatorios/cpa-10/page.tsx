import PageLayout from '@/components/PageLayout'
import { ArrowLeft, Clock, BookOpen, Users, Award, CheckCircle } from 'lucide-react'

export default function CPA10Page() {
  const modulos = [
    'Introdução ao Mercado Financeiro',
    'Produtos Bancários',
    'Fundos de Investimento',
    'Previdência Privada',
    'Seguros',
    'Regulamentação ANBIMA'
  ]

  const beneficios = [
    'Apostila completa com todo o conteúdo',
    'Mais de 700 questões de simulados',
    '6 meses de acesso à plataforma',
    'Suporte especializado',
    'Certificado de conclusão',
    'Garantia de satisfação'
  ]

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <a href="/cursos-preparatorios" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Cursos Preparatórios
            </a>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              CPA-10
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Certificação Profissional ANBIMA - Série 10
            </p>
            <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              Certificação Obrigatória para Bancos
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Conteúdo principal */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre o Curso</h2>
                <p className="text-gray-600 mb-6">
                  A CPA-10 é ideal para quem está começando no setor bancário. Esta certificação é obrigatória para profissionais que trabalham com produtos de investimento em bancos e corretoras. Nosso curso preparatório oferece todo o conteúdo necessário para sua aprovação.
                </p>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-gray-600">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
              </div>

              {/* Módulos */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Módulos do Curso</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {modulos.map((modulo, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{modulo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Preço */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Investimento</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">R$ 329,00</div>
                  <div className="text-gray-500">ou 12x de R$ 27,42 sem juros</div>
                  <div className="text-green-600 font-medium mt-2">10% OFF no PIX</div>
                </div>
                <a 
                  href="https://app.4st.com.br/produto/LsQ6wufa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-success-600 text-white px-4 py-3 rounded-md font-medium hover:bg-success-700 transition-colors mb-4 block text-center"
                >
                  Comprar Agora
                </a>
                <button className="w-full border border-primary-600 text-primary-600 px-4 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors">
                  Adicionar ao Carrinho
                </button>
              </div>

              {/* Informações */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informações do Curso</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">6 meses de acesso</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">700+ questões</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Suporte especializado</span>
                  </div>
                </div>
              </div>

              {/* Benefícios */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">O que você recebe</h3>
                <div className="space-y-3">
                  {beneficios.map((beneficio, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 text-sm">{beneficio}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
