import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instituto Spartan - Cursos Preparatórios para Certificações Financeiras',
  description: 'Prepare-se para certificações como CPA-10, CPA-20, CEA, CFP e outras com os melhores cursos preparatórios do mercado financeiro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
