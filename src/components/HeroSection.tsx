import { ArrowRight, Star } from 'lucide-react'

export default function HeroSection() {
  const cursosPrincipais = [
    {
      id: 'cea',
      titulo: 'CEA',
      subtitulo: 'A CEA abre portas no mercado financeiro',
      descricao: 'A CEA é o passo que separa o profissional comum do especialista em investimentos. Faça o curso preparatório com quem mais aprova.',
      precoParcelado: 'R$ 62,42',
      precoVista: 'R$ 749,00',
      parcelas: '12x sem juros'
    },
    {
      id: 'cpa20',
      titulo: 'CPA-20',
      subtitulo: 'Cresça em sua carreira bancária com a CPA-20',
      descricao: 'A CPA-20 é exigida para atuar com produtos de investimento. Conquiste sua certificação com nosso preparatório completo.',
      precoParcelado: 'R$ 36,58',
      precoVista: 'R$ 439,00',
      parcelas: '12x sem juros'
    },
    {
      id: 'cpa10',
      titulo: 'CPA-10',
      subtitulo: 'A CPA-10 é o primeiro passo para sua carreira',
      descricao: 'A CPA-10 é ideal para quem está começando no setor bancário. Prepare-se com um curso direto, prático e completo.',
      precoParcelado: 'R$ 27,42',
      precoVista: 'R$ 329,00',
      parcelas: '12x sem juros'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Impulsione sua carreira no Mercado Financeiro
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Aprenda com especialistas e alcance o próximo nível com nossos cursos preparatórios para certificações
          </p>
        </div>

        {/* Cards dos cursos principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cursosPrincipais.map((curso) => (
            <div key={curso.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary-600">{curso.titulo}</h3>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{curso.subtitulo}</h4>
                <p className="text-gray-600 mb-6">{curso.descricao}</p>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Por apenas {curso.parcelas} de</div>
                  <div className="text-2xl font-bold text-primary-600">{curso.precoParcelado}</div>
                  <div className="text-sm text-gray-500">ou {curso.precoVista} à vista</div>
                  <div className="text-sm text-green-600 font-medium mt-1">10% OFF no Pix</div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    Apostila Completa
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    Simulados (+700 questões)
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    6 meses de acesso
                  </div>
                </div>

                <div className="flex space-x-3 mt-auto">
                  <a 
                    href="https://app.4st.com.br/produto/LsQ6wufa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-success-600 text-white px-4 py-3 rounded-md font-medium hover:bg-success-700 transition-colors text-center"
                  >
                    Comprar Agora
                  </a>
                  <a 
                    href={`/cursos-preparatorios/${curso.id}`}
                    className="px-4 py-3 border border-primary-600 text-primary-600 rounded-md font-medium hover:bg-primary-50 transition-colors"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a href="/cursos-preparatorios" className="inline-flex items-center bg-primary-600 text-black px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-700 transition-colors">
            Ver todos os Cursos
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
