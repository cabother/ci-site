import PageLayout from '@/components/PageLayout'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

export default function ContatoPage() {
  const contatos = [
    {
      icone: Phone,
      titulo: 'Telefone',
      descricao: '11 98243-1592',
      link: 'tel:+5511982431592'
    },
    {
      icone: Mail,
      titulo: 'Email',
      descricao: 'contato@institutospartan.com.br',
      link: 'mailto:contato@institutospartan.com.br'
    },
    {
      icone: MapPin,
      titulo: 'Endereço',
      descricao: 'Rua Soriano de Souza, 189 - São Paulo/SP',
      link: '#'
    },
    {
      icone: Clock,
      titulo: 'Horário de Atendimento',
      descricao: 'Segunda a Sexta: 8h às 18h',
      link: '#'
    }
  ]

  const canaisSuporte = [
    {
      icone: MessageCircle,
      titulo: 'WhatsApp',
      descricao: 'Atendimento rápido e personalizado',
      link: 'https://wa.me/5511982431592'
    },
    {
      icone: Mail,
      titulo: 'Email',
      descricao: 'Suporte técnico e dúvidas gerais',
      link: 'mailto:suporte@institutospartan.com.br'
    },
    {
      icone: Phone,
      titulo: 'Telefone',
      descricao: 'Atendimento comercial',
      link: 'tel:+5511982431592'
    }
  ]

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contato
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aqui para ajudar você a alcançar seus objetivos no mercado financeiro
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de contato */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvidas-curso">Dúvidas sobre cursos</option>
                      <option value="suporte-tecnico">Suporte técnico</option>
                      <option value="parcerias">Parcerias</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Descreva sua dúvida ou solicitação..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-black px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Informações de contato */}
            <div className="space-y-8">
              {/* Contatos principais */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  {contatos.map((contato, index) => {
                    const IconComponent = contato.icone
                    return (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900">{contato.titulo}</h3>
                          <a
                            href={contato.link}
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            {contato.descricao}
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Canais de suporte */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Canais de Suporte</h2>
                <div className="space-y-4">
                  {canaisSuporte.map((canal, index) => {
                    const IconComponent = canal.icone
                    return (
                      <a
                        key={index}
                        href={canal.link}
                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-primary-50 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-primary-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">{canal.titulo}</h3>
                          <p className="text-sm text-gray-600">{canal.descricao}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* FAQ rápido */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Como funciona o acesso aos cursos?</h3>
                    <p className="text-sm text-gray-600">
                      Após a compra, você recebe acesso imediato à plataforma online e pode estudar pelo tempo determinado para cada curso.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Há garantia de aprovação?</h3>
                    <p className="text-sm text-gray-600">
                      Oferecemos garantia de satisfação. Se não ficar satisfeito, devolvemos seu dinheiro.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Posso estudar pelo celular?</h3>
                    <p className="text-sm text-gray-600">
                      Sim! Nossa plataforma é responsiva e temos um aplicativo exclusivo para alunos.
                    </p>
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
