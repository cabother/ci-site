import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CursosPreparatorios from '@/components/CursosPreparatorios'
import CursosLivres from '@/components/CursosLivres'
import PlataformaSection from '@/components/PlataformaSection'
import ProfessoresSection from '@/components/ProfessoresSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <CursosPreparatorios />
      <CursosLivres />
      <PlataformaSection />
      <ProfessoresSection />
      <Footer />
    </main>
  )
}
