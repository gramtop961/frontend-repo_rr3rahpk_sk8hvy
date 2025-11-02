import HeaderNav from './components/HeaderNav'
import Hero from './components/Hero'
import PanelsShowcase from './components/PanelsShowcase'
import FeatureGrid from './components/FeatureGrid'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeaderNav />
      <main>
        <Hero />
        <PanelsShowcase />
        <FeatureGrid />
      </main>
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Multi‑Module Commerce Suite</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#panels" className="hover:text-slate-900">Panels</a>
            <a href="#" className="hover:text-slate-900">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
