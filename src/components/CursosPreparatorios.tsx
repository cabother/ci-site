import { Star, Shield } from 'lucide-react'

export default function CursosPreparatorios() {
  const cursos = [
    {
      id: 'cpa10',
      nome: 'CPA10',
      precoParcelado: 'R$ 27,42',
      precoVista: 'R$ 329,00',
      parcelas: '12x',
      desconto: '10% OFF no Pix',
      features: [
        'Apostila Completa',
        'Simulados (+700 questões)',
        '6 meses de acesso'
      ]
    },
    {
      id: 'cpa20',
      nome: 'CPA20',
      precoParcelado: 'R$ 36,58',
      precoVista: 'R$ 439,00',
      parcelas: '12x',
      desconto: '10% OFF no Pix',
      features: [
        'Apostila Completa',
        'Simulados (+1.200 questões)',
        '6 meses de acesso'
      ]
    },
    {
      id: 'cea',
      nome: 'CEA',
      precoParcelado: 'R$ 62,42',
      precoVista: 'R$ 749,00',
      parcelas: '12x',
      desconto: '10% OFF no Pix',
      features: [
        'Apostila Completa',
        'Simulados (+1.300 questões)',
        '8 meses de acesso'
      ]
    },
    {
      id: 'cfp',
      nome: 'CFP®',
      precoParcelado: 'R$ 165,83',
      precoVista: 'R$ 1.990,00',
      parcelas: '12x',
      desconto: '10% OFF no Pix',
      features: [
        'Apostila Completa',
        'Simulados (+1.480 questões)',
        '3 anos de acesso'
      ]
    },
    {
      id: 'ancord',
      nome: 'ANCORD',
      precoParcelado: 'R$ 36,58',
      precoVista: 'R$ 439,00',
      parcelas: '12x',
      desconto: '10% OFF no Pix',
      features: [
        'Apostila Completa',
        'Simulados (+710 questões)',
        '8 meses de acesso'
      ]
    },
    {
      id: 'pqo-b3',
      nome: 'PQO B3',
      precoParcelado: 'R$ 40,33',
      precoVista: 'R$ 390,00',
      parcelas: '12x',
      desconto: 'Compra Segura',
      features: [
        'Apostila Completa',
        'Simulados (+525 questões)',
        '6 meses de acesso'
      ]
    }
  ]

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cursos Preparatórios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prepare-se para as principais certificações do mercado financeiro com nossos cursos completos
          </p>
        </div>

        {/* Grid de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso) => (
            <div key={curso.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                {/* Header do curso */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">{curso.nome}</h3>
                  <div className="flex items-center justify-center text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Preços */}
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-500 mb-1">{curso.parcelas} de</div>
                  <div className="text-2xl font-bold text-primary-600">{curso.precoParcelado}</div>
                  <div className="text-sm text-gray-500 mb-2">ou {curso.precoVista} à vista</div>
                  <div className={`text-sm font-medium ${
                    curso.desconto === 'Compra Segura' ? 'text-blue-600' : 'text-green-600'
                  }`}>
                    {curso.desconto}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {curso.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Botões */}
                <div className="space-y-3 mt-auto">
                  <button className="w-full bg-success-600 text-white px-4 py-3 rounded-md font-medium hover:bg-success-700 transition-colors">
                    Comprar Agora
                  </button>
                  <button className="w-full border border-primary-600 text-primary-600 px-4 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors">
                    Saiba Mais
                  </button>
                </div>

                {/* Badge de segurança para PQO B3 */}
                {curso.id === 'pqo-b3' && (
                  <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                    <Shield className="h-4 w-4 mr-1" />
                    Compra Segura
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou o curso que procura? Conheça nossa assinatura completa!
          </p>
          <button className="bg-primary-600 text-black px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            Ver Assinatura Cliquei
          </button>
        </div>
      </div>
    </section>
  )
}
