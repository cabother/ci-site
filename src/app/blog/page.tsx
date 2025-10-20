import PageLayout from '@/components/PageLayout'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      titulo: 'Como se preparar para a prova CPA-10 em 2024',
      resumo: 'Dicas essenciais para conquistar sua certificação CPA-10 com sucesso.',
      autor: 'Tiago Feitosa',
      data: '15 Jan 2024',
      categoria: 'Certificações',
      imagem: '/api/placeholder/400/250'
    },
    {
      id: 2,
      titulo: 'Mercado financeiro: tendências para 2024',
      resumo: 'Análise das principais tendências e oportunidades no mercado financeiro brasileiro.',
      autor: 'Pâmela Rocha',
      data: '12 Jan 2024',
      categoria: 'Mercado',
      imagem: '/api/placeholder/400/250'
    },
    {
      id: 3,
      titulo: 'CEA: o que mudou na prova em 2024',
      resumo: 'Principais mudanças na certificação CEA e como se adaptar ao novo formato.',
      autor: 'Davi Bastos',
      data: '10 Jan 2024',
      categoria: 'Certificações',
      imagem: '/api/placeholder/400/250'
    },
    {
      id: 4,
      titulo: 'LinkedIn para profissionais do mercado financeiro',
      resumo: 'Estratégias para construir uma presença profissional forte no LinkedIn.',
      autor: 'Julia Vidal',
      data: '8 Jan 2024',
      categoria: 'Carreira',
      imagem: '/api/placeholder/400/250'
    },
    {
      id: 5,
      titulo: 'Fundos de investimento: guia completo',
      resumo: 'Tudo que você precisa saber sobre fundos de investimento para sua certificação.',
      autor: 'Tiago Feitosa',
      data: '5 Jan 2024',
      categoria: 'Investimentos',
      imagem: '/api/placeholder/400/250'
    },
    {
      id: 6,
      titulo: 'Matemática financeira na prática',
      resumo: 'Como aplicar conceitos de matemática financeira no dia a dia profissional.',
      autor: 'Davi Bastos',
      data: '3 Jan 2024',
      categoria: 'Educação',
      imagem: '/api/placeholder/400/250'
    }
  ]

  const categorias = ['Todos', 'Certificações', 'Mercado', 'Carreira', 'Investimentos', 'Educação']

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog Instituto Spartan
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Artigos, dicas e insights sobre o mercado financeiro e certificações profissionais
            </p>
          </div>

          {/* Filtros de categoria */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categorias.map((categoria, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-primary-50'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Grid de posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Imagem placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">📊</div>
                    <p className="text-sm text-gray-600">Imagem do Post</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Categoria */}
                  <div className="flex items-center mb-3">
                    <Tag className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-sm text-primary-600 font-medium">{post.categoria}</span>
                  </div>

                  {/* Título */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.titulo}
                  </h2>

                  {/* Resumo */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.resumo}
                  </p>

                  {/* Meta informações */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.autor}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.data}</span>
                    </div>
                  </div>

                  {/* Link para ler mais */}
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Ler mais
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                Anterior
              </button>
              <button className="px-3 py-2 text-sm font-medium bg-primary-600 text-white rounded">
                1
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                2
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                3
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                Próximo
              </button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Receba nossos artigos por email
            </h2>
            <p className="text-gray-600 mb-6">
              Fique por dentro das últimas novidades do mercado financeiro e dicas para suas certificações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-black px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
