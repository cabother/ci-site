'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const cursosPreparatorios = [
    'Assinatura Spartan',
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

  return (
    <header className="bg-gray-950 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              Instituto Spartan
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-white hover:text-primary-600 px-3 py-2 text-sm font-medium whitespace-nowrap">
                Cursos Preparatórios
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-950 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-800">
                <div className="py-1">
                  <a href="/cursos-preparatorios" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Assinatura Spartan
                  </a>
                  <a href="/cursos-preparatorios/cpa-10" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    CPA 10
                  </a>
                  <a href="/cursos-preparatorios/cpa-20" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    CPA 20
                  </a>
                  <a href="/cursos-preparatorios/cea" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    CEA
                  </a>
                  <a href="/cursos-preparatorios/ancord" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    ANCORD
                  </a>
                  <a href="/cursos-preparatorios/cfp" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    CFP®
                  </a>
                  <a href="/cursos-preparatorios/pqo-b3" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    PQO B3
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-white hover:text-primary-600 px-3 py-2 text-sm font-medium whitespace-nowrap">
                Cursos Livres
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-950 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-800">
                <div className="py-1">
                  <a href="/cursos-livres/excel" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Excel
                  </a>
                  <a href="/cursos-livres/hp-12c" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    HP-12C
                  </a>
                  <a href="/cursos-livres/linkedin" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Executivo LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <a href="/depoimentos" className="text-white hover:text-primary-600 px-3 py-2 text-sm font-medium whitespace-nowrap">
              Depoimentos
            </a>
            <a href="/blog" className="text-white hover:text-primary-600 px-3 py-2 text-sm font-medium whitespace-nowrap">
              Blog
            </a>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Sobre
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-950 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-800">
                <div className="py-1">
                  <a href="/sobre" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Sobre
                  </a>
                  <a href="#midia" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Spartan na Mídia
                  </a>
                </div>
              </div>
            </div>
            <a href="/contato" className="text-white hover:text-primary-600 px-3 py-2 text-sm font-medium whitespace-nowrap">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/area-aluno/login" className="text-white hover:text-primary-600 px-3 py-2 text-sm font-medium whitespace-nowrap">
              Área do aluno
            </a>
            <a href="/cursos-preparatorios" className="bg-primary-600 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors whitespace-nowrap">
              Assinatura Spartan
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500 px-3 py-2">Cursos Preparatórios</div>
                <a href="/cursos-preparatorios" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Assinatura Spartan
                </a>
                <a href="/cursos-preparatorios/cpa-10" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  CPA 10
                </a>
                <a href="/cursos-preparatorios/cpa-20" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  CPA 20
                </a>
                <a href="/cursos-preparatorios/cea" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  CEA
                </a>
                <a href="/cursos-preparatorios/ancord" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ANCORD
                </a>
                <a href="/cursos-preparatorios/cfp" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  CFP®
                </a>
                <a href="/cursos-preparatorios/pqo-b3" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  PQO B3
                </a>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500 px-3 py-2">Cursos Livres</div>
                <a href="/cursos-livres/excel" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Excel
                </a>
                <a href="/cursos-livres/hp-12c" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  HP-12C
                </a>
                <a href="/cursos-livres/linkedin" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Executivo LinkedIn
                </a>
              </div>
              <a href="/depoimentos" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Depoimentos
              </a>
              <a href="/blog" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Blog
              </a>
              <a href="/sobre" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sobre
              </a>
              <a href="#midia" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Spartan na Mídia
              </a>
              <a href="/contato" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Contato
              </a>
              <a href="/area-aluno/login" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Área do aluno
              </a>
              <a href="/cursos-preparatorios" className="block px-3 py-2 text-sm bg-primary-600 text-black rounded-md mx-3">
                Assinatura Spartan
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
