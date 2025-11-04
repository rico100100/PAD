
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import GlassPage from './pages/GlassPage'
import GlassAIPage from './pages/GlassAIPage'
import TascPage from './pages/TascPage'
import AlgorithmPage from './pages/AlgorithmPage'
import { AppProvider } from './state/AppContext'

export default function App(){
  const location = useLocation();
  return (
    <AppProvider>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <div className="rounded-xl bg-brand-100 p-2 shadow-soft" aria-hidden="true">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#2563eb" aria-hidden="true"><path d="M3 7a4 4 0 0 1 4-4h4.2a3 3 0 0 1 2.1.9l2.1 2.1A3 3 0 0 0 18.6 7H21a3 3 0 0 1 3 3v7a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V7z"/></svg>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight truncate">GLASS (Infrainguinal) + GLASS-AI (Propuesto) + TASC</h1>
            <p className="text-sm text-slate-600 truncate">PLAN • WIfI • TAP — calculadoras y algoritmo</p>
          </div>
          <a href="#/algoritmo" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-600 text-white px-3 py-2 shadow-soft hover:shadow-softHover">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 5l7 7H5l7-7zm0 7v7"/></svg>
            Ir al algoritmo
          </a>
        </div>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-3 flex flex-wrap gap-2">
          {['/glass','/glass-ai','/tasc','/algoritmo'].map((p, i) => {
            const labels = ['GLASS Infrainguinal','GLASS Aortoilíaco (prop.)','TASC II','Algoritmo'];
            return (
              <NavLink key={p} to={p}
                className={({isActive}) => [
                  "tab inline-flex items-center gap-2 rounded-xl px-4 py-2 border shadow-soft",
                  isActive ? "border-brand-200 bg-brand-50 text-brand-800" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                ].join(' ')}>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h14a2 2 0 0 1 2 2v12.5a1.5 1.5 0 0 1-1.5 1.5H6.5A3.5 3.5 0 0 1 3 16.5V6a2 2 0 0 1 2-2z"/></svg>
                {labels[i]}
              </NavLink>
            )
          })}
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <Routes>
          <Route path="/" element={<GlassPage />} />
          <Route path="/glass" element={<GlassPage />} />
          <Route path="/glass-ai" element={<GlassAIPage />} />
          <Route path="/tasc" element={<TascPage />} />
          <Route path="/algoritmo" element={<AlgorithmPage />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-500">
          Herramienta de apoyo; no sustituye el juicio clínico.
        </div>
      </footer>
    </AppProvider>
  )
}
