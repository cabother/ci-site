# Cliquei Investimentos Clone

Uma réplica moderna do site da Cliquei Investimentos construída com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e otimizados

## 📋 Funcionalidades

### 🏠 Página Principal
- ✅ Header responsivo com navegação dropdown
- ✅ Seção hero com cursos principais (CEA, CPA-20, CPA-10)
- ✅ Seção completa de cursos preparatórios
- ✅ Seção de cursos livres (HP-12C, LinkedIn, Excel)
- ✅ Seção sobre a plataforma com vídeo placeholder
- ✅ Seção de professores especialistas
- ✅ Footer completo com links e informações

### 📚 Páginas de Cursos Preparatórios
- ✅ **Página Geral** (`/cursos-preparatorios`) - Lista todos os cursos
- ✅ **CPA-10** (`/cursos-preparatorios/cpa-10`) - Página detalhada do curso
- ✅ **CPA-20** (`/cursos-preparatorios/cpa-20`) - Página detalhada do curso
- ✅ **CEA** (`/cursos-preparatorios/cea`) - Página detalhada do curso
- ✅ **CFP®** (`/cursos-preparatorios/cfp`) - Página detalhada do curso
- ✅ **ANCORD** (`/cursos-preparatorios/ancord`) - Página detalhada do curso
- ✅ **PQO B3** (`/cursos-preparatorios/pqo-b3`) - Página detalhada do curso

### 🎓 Páginas de Cursos Livres
- ✅ **Página Geral** (`/cursos-livres`) - Lista todos os cursos livres
- ✅ **Excel** (`/cursos-livres/excel`) - Curso de Excel Avançado
- ✅ **HP-12C** (`/cursos-livres/hp-12c`) - Matemática Financeira
- ✅ **LinkedIn** (`/cursos-livres/linkedin`) - Executivo LinkedIn

### 🏢 Páginas Institucionais
- ✅ **Sobre** (`/sobre`) - História, missão e valores da empresa
- ✅ **Blog** (`/blog`) - Artigos e conteúdo educacional
- ✅ **Depoimentos** (`/depoimentos`) - Testemunhos de alunos
- ✅ **Contato** (`/contato`) - Formulário e informações de contato
- ✅ **Área do Aluno** (`/area-aluno`) - Dashboard do estudante

### 🎨 Design e UX
- ✅ Design responsivo para mobile, tablet e desktop
- ✅ Animações e transições suaves
- ✅ Layout compartilhado entre páginas
- ✅ Navegação funcional com links reais
- ✅ Breadcrumbs para melhor navegação

## 🎨 Design

O projeto replica fielmente o design do site original da Cliquei Investimentos, incluindo:

- Paleta de cores amarelo (primary) e preto (secondary)
- Layout moderno e profissional
- Cards de cursos com preços e features
- Seções bem estruturadas e organizadas
- Tipografia clara e hierarquia visual

## 🛠️ Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1280px+)

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Executa a build de produção
- `npm run lint` - Executa o linter ESLint

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── cursos-preparatorios/
│   │   ├── page.tsx
│   │   ├── cpa-10/page.tsx
│   │   ├── cpa-20/page.tsx
│   │   ├── cea/page.tsx
│   │   ├── cfp/page.tsx
│   │   ├── ancord/page.tsx
│   │   └── pqo-b3/page.tsx
│   ├── cursos-livres/
│   │   ├── page.tsx
│   │   ├── excel/page.tsx
│   │   ├── hp-12c/page.tsx
│   │   └── linkedin/page.tsx
│   ├── sobre/page.tsx
│   ├── blog/page.tsx
│   ├── depoimentos/page.tsx
│   ├── contato/page.tsx
│   └── area-aluno/page.tsx
└── components/
    ├── PageLayout.tsx
    ├── Header.tsx
    ├── HeroSection.tsx
    ├── CursosPreparatorios.tsx
    ├── CursosLivres.tsx
    ├── PlataformaSection.tsx
    ├── ProfessoresSection.tsx
    └── Footer.tsx
```

## 🎯 Próximos Passos

- [ ] Adicionar animações mais elaboradas
- [ ] Implementar funcionalidade de carrinho de compras
- [ ] Adicionar sistema de autenticação
- [ ] Integrar com API de pagamentos
- [ ] Adicionar testes unitários
- [ ] Implementar PWA (Progressive Web App)

## 📄 Licença

Este projeto é apenas para fins educacionais e de demonstração.
