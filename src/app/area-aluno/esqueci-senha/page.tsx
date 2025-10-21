'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'

export default function EsqueciSenhaPage() {
  const [email, setEmail] = useState('')
  const [captchaValue, setCaptchaValue] = useState('')
  const [captchaInput, setCaptchaInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Gerar captcha aleatório
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  const [captcha] = useState(() => generateCaptcha())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validar captcha
    if (captchaInput.toUpperCase() !== captcha.toUpperCase()) {
      setError('Código de verificação incorreto')
      return
    }

    // Validar email
    if (!email || !email.includes('@')) {
      setError('Por favor, insira um email válido')
      return
    }

    setIsLoading(true)

    // Simulação de envio de email
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <PageLayout>
        <div className="bg-black min-h-screen py-16 flex items-center">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="bg-gray-900 rounded-lg shadow-2xl p-8 border border-gray-800">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-4">
                  Email Enviado!
                </h1>
                <p className="text-gray-400 mb-6">
                  Enviamos um link de recuperação de senha para <strong className="text-white">{email}</strong>
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
                </p>
                <div className="space-y-3">
                  <a
                    href="/area-aluno/login"
                    className="block w-full bg-primary-600 text-black px-4 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
                  >
                    Voltar para o Login
                  </a>
                  <a
                    href="/"
                    className="block w-full border border-gray-700 text-gray-300 px-4 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                  >
                    Voltar para o Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="bg-black min-h-screen py-16 flex items-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Card de Recuperação */}
          <div className="bg-gray-900 rounded-lg shadow-2xl p-8 border border-gray-800">
            {/* Logo e Título */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <Mail className="h-8 w-8 text-black" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Esqueci minha Senha
              </h1>
              <p className="text-gray-400">
                Digite seu email para receber um link de recuperação
              </p>
            </div>

            {/* Mensagem de Erro */}
            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-700 rounded-md flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Captcha */}
              <div>
                <label htmlFor="captcha" className="block text-sm font-medium text-gray-300 mb-2">
                  Código de Verificação
                </label>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 relative">
                    <input
                      id="captcha"
                      type="text"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      required
                      maxLength={5}
                      className="block w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent uppercase tracking-widest text-center"
                      placeholder="Digite o código"
                    />
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3">
                    <span className="text-2xl font-bold text-primary-600 tracking-widest select-none">
                      {captcha}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Digite o código mostrado acima
                </p>
              </div>

              {/* Botão de Enviar */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 text-black px-4 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Enviar Link de Recuperação'}
              </button>
            </form>

            {/* Divisor */}
            <div className="mt-6 mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3 text-center">
              <a
                href="/area-aluno/login"
                className="block text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para o Login
              </a>
              <a
                href="/"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Voltar para o site
              </a>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Não recebeu o email? Verifique sua pasta de spam ou{' '}
              <a href="/contato" className="text-primary-600 hover:text-primary-500">
                entre em contato
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

