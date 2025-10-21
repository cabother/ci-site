import { Calculator, Linkedin, FileSpreadsheet } from 'lucide-react'

export default function CursosLivres() {
  const cursos = [
    {
      id: 'hp12c',
      nome: 'HP-12C',
      titulo: 'Matemática Financeira com',
      icone: Calculator,
      precoParcelado: 'R$ 14,75',
      precoVista: 'R$ 177,00',
      parcelas: '12x',
      desconto: '10% OFF no Pix',
      descricao: 'Domine a calculadora HP-12C e os cálculos financeiros essenciais para sua carreira.',
      features: [
        'Apostila Completa',
        'Exercícios Práticos',
        '6 meses de acesso'
      ]
    },
    {
      id: 'linkedin',
      nome: 'LinkedIn',
      titulo: 'Executivo LinkedIn',
      icone: Linkedin,
      precoParcelado: 'R$ 16,41',
      precoVista: 'R$ 197,00',
      parcelas: '12x',
      desconto: '10% OFF no Pix',
      descricao: 'Construa uma presença profissional forte no LinkedIn e acelere sua carreira.',
      features: [
        'Apostila Completa',
        'Templates Prontos',
        '6 meses de acesso'
      ]
    },
    {
      id: 'excel',
      nome: 'Excel',
      titulo: 'Excel Avançado',
      icone: FileSpreadsheet,
      precoParcelado: 'R$ 16,41',
      precoVista: 'R$ 197,00',
      parcelas: '12x',
      desconto: '10% OFF no Pix',
      descricao: 'Domine o Excel com funções avançadas e automação para o mercado financeiro.',
      features: [
        'Apostila Completa',
        'Planilhas Práticas',
        '6 meses de acesso'
      ]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Desenvolva habilidades essenciais para sua carreira
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prepare-se para se destacar com cursos práticos e focados no seu crescimento profissional
          </p>
        </div>

        {/* Grid de cursos livres */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cursos.map((curso) => {
            const IconComponent = curso.icone
            return (
              <div key={curso.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  {/* Header com ícone */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{curso.titulo}</h3>
                    <h4 className="text-lg font-semibold text-primary-600">{curso.nome}</h4>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-600 text-center mb-6">{curso.descricao}</p>

                  {/* Preços */}
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 mb-1">{curso.parcelas} de</div>
                    <div className="text-2xl font-bold text-primary-600">{curso.precoParcelado}</div>
                    <div className="text-sm text-gray-500 mb-2">ou {curso.precoVista} à vista</div>
                    <div className="text-sm text-green-600 font-medium">{curso.desconto}</div>
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
                    <a 
                      href="https://app.4st.com.br/produto/LsQ6wufa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-success-600 text-white px-4 py-3 rounded-md font-medium hover:bg-success-700 transition-colors block text-center"
                    >
                      Comprar Agora
                    </a>
                    <button className="w-full border border-primary-600 text-primary-600 px-4 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer desenvolver múltiplas habilidades? Conheça nossos pacotes combinados!
          </p>
          <button className="bg-primary-600 text-black px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            Ver Pacotes Combinados
          </button>
        </div>
      </div>
    </section>
  )
}
