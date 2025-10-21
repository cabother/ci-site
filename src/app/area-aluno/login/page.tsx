'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PageLayout from '@/components/PageLayout'
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulação de login
    setTimeout(() => {
      setIsLoading(false)
      router.push('/area-aluno')
    }, 1000)
  }

  return (
    <PageLayout>
      <div className="bg-black min-h-screen py-16 flex items-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Card de Login */}
          <div className="bg-gray-900 rounded-lg shadow-2xl p-8 border border-gray-800">
            {/* Logo e Título */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <LogIn className="h-8 w-8 text-black" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Área do Aluno
              </h1>
              <p className="text-gray-400">
                Entre com suas credenciais para acessar
              </p>
            </div>

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

              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full pl-10 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Esqueci minha senha */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 bg-gray-800 border-gray-700 rounded text-primary-600 focus:ring-primary-600 focus:ring-2"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
                    Lembrar-me
                  </label>
                </div>
                <a href="/area-aluno/esqueci-senha" className="text-sm text-primary-600 hover:text-primary-500">
                  Esqueci minha senha
                </a>
              </div>

              {/* Botão de Login */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 text-black px-4 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  'Entrando...'
                ) : (
                  <>
                    Entrar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            {/* Divisor */}
            <div className="mt-6 mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">ou</span>
                </div>
              </div>
            </div>

            {/* Cadastro */}
            <div className="text-center">
              <p className="text-sm text-gray-400">
                Ainda não tem uma conta?{' '}
                <a href="/contato" className="text-primary-600 hover:text-primary-500 font-medium">
                  Entre em contato
                </a>
              </p>
            </div>

            {/* Voltar */}
            <div className="mt-6 text-center">
              <a 
                href="/" 
                className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center"
              >
                ← Voltar para o site
              </a>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Precisa de ajuda?{' '}
              <a href="/contato" className="text-primary-600 hover:text-primary-500">
                Entre em contato conosco
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

