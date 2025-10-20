import { Play, Smartphone, Monitor, Clock, Award, Users } from 'lucide-react'

export default function PlataformaSection() {
  const features = [
    {
      icone: Monitor,
      titulo: 'Plataforma Online',
      descricao: 'Acesse nossos cursos de onde estiver, no seu tempo e do seu jeito! Nossa plataforma online funciona direto no navegador.'
    },
    {
      icone: Smartphone,
      titulo: 'Aplicativo Exclusivo',
      descricao: 'O aplicativo exclusivo para alunos oferece ainda mais praticidade no celular, permitindo estudar em qualquer lugar.'
    },
    {
      icone: Clock,
      titulo: 'Flexibilidade Total',
      descricao: 'Estude no seu ritmo, pause e retome quando quiser. Nossa plataforma se adapta à sua rotina.'
    },
    {
      icone: Award,
      titulo: 'Qualidade Garantida',
      descricao: 'Investimos pesado para que você possa alcançar seu sucesso e se preparar não só para sua certificação, mas para toda sua carreira.'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça a plataforma que vai transformar seu aprendizado em resultado
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Investimos pesado para que você possa alcançar seu sucesso e se preparar não só para sua certificação, mas para toda sua carreira.
          </p>
          
          {/* Vídeo placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-4 hover:bg-primary-700 transition-colors cursor-pointer">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <p className="text-gray-600">Assista ao vídeo e descubra como é a experiência de estudar com o Instituto Spartan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de plataforma e app */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Plataforma online e aplicativo exclusivo para alunos
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acesse nossos cursos de onde estiver, no seu tempo e do seu jeito! Nossa plataforma online funciona direto no navegador, e o aplicativo exclusivo para alunos oferece ainda mais praticidade no celular.
            </p>
          </div>

          {/* Grid de features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icone
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.titulo}</h4>
                  <p className="text-gray-600">{feature.descricao}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Seção de educação flexível */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Educação que cabe na sua rotina
            </h3>
            <p className="text-lg text-gray-600">
              Comece sua jornada com flexibilidade e praticidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Plataforma online e aplicativo exclusivo para alunos
              </h4>
              <p className="text-gray-600 mb-6">
                Acesse nossos cursos de onde estiver, no seu tempo e do seu jeito! Nossa plataforma online funciona direto no navegador, e o aplicativo exclusivo para alunos oferece ainda mais praticidade no celular.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Acesso 24/7 de qualquer dispositivo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Sincronização automática entre dispositivos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Download de materiais para estudo offline</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-primary-100 rounded-full mb-4">
                <Users className="h-16 w-16 text-primary-600" />
              </div>
              <p className="text-gray-600">
                Mais de 50.000 alunos já transformaram suas carreiras conosco
              </p>
            </div>
          </div>
        </div>

        {/* Avaliações */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            No Google Avaliações somos referência nas buscas por certificações
          </h3>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9/5</span>
          </div>
          <p className="text-gray-600">
            Baseado em mais de 10.000 avaliações de nossos alunos
          </p>
        </div>
      </div>
    </section>
  )
}
