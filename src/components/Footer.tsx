import { Youtube, Instagram, Linkedin, MessageCircle, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const cursosPreparatorios = [
    'CPA 10',
    'CPA 20',
    'CEA',
    'ANCORD',
    'CFP®',
    'PQO B3'
  ]

  const cursosLivres = [
    'Excel',
    'HP-12C',
    'Executivo LinkedIn'
  ]

  const linksSpartan = [
    'Sobre',
    'Spartan na Mídia',
    'Política de Reembolso',
    'Política de Privacidade',
    'Política de Cookies',
    'Fale Conosco'
  ]

  const linksSuporte = [
    'Fale conosco pelo WhatsApp!',
    '11 98243-1592',
    'Status dos Serviços Spartan'
  ]

  const redesSociais = [
    { nome: 'YouTube', icone: Youtube, href: '#' },
    { nome: 'Instagram', icone: Instagram, href: '#' },
    { nome: 'LinkedIn', icone: Linkedin, href: '#' },
    { nome: 'TikTok', icone: MessageCircle, href: '#' },
    { nome: 'Spotify', icone: MessageCircle, href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Seção principal do footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Instituto Spartan</h3>
            <p className="text-gray-300 text-sm mb-4">
              Transformando carreiras através da educação financeira de qualidade.
            </p>
            <div className="text-sm text-gray-400">
              <p>Instituto Spartan S/A</p>
              <p>CNPJ: 24.970.216/0001-48</p>
              <p>Rua Soriano de Souza, 189 - SP</p>
              <div className="flex items-center mt-2">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@institutospartan.com.br</span>
              </div>
            </div>
          </div>

          {/* Cursos Preparatórios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Cursos Preparatórios</h4>
            <ul className="space-y-2">
              {cursosPreparatorios.map((curso, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {curso}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cursos Livres */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Cursos Livres</h4>
            <ul className="space-y-2">
              {cursosLivres.map((curso, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {curso}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instituto Spartan */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Instituto Spartan</h4>
            <ul className="space-y-2">
              {linksSpartan.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              {linksSuporte.map((link, index) => (
                <li key={index}>
                  {index === 1 ? (
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </div>
                  ) : (
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-sm font-medium mb-2">Siga o Instituto Spartan</h5>
              <div className="flex space-x-4">
                {redesSociais.map((rede, index) => {
                  const IconComponent = rede.icone
                  return (
                    <a
                      key={index}
                      href={rede.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={rede.nome}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Duplicação das redes sociais para mobile */}
            <div className="md:hidden">
              <h5 className="text-sm font-medium mb-2">Siga o Instituto Spartan</h5>
              <div className="flex space-x-4">
                {redesSociais.map((rede, index) => {
                  const IconComponent = rede.icone
                  return (
                    <a
                      key={index}
                      href={rede.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={rede.nome}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="text-center text-sm text-gray-400">
            <p>
              Copyright © 2016 - 2025 - <strong>Instituto Spartan S/A</strong> - Todos os direitos reservados - 
              <a href="#" className="hover:text-white transition-colors ml-1">Termos de Uso</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
