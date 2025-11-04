
import { useApp } from '../state/AppContext'
import StagePill from '../components/StagePill'
import map from '../data/glassAIMap.json'

export default function GlassAIPage(){
  const { tasc, ai, setTASC, setAI } = useApp()
  const tascStage = (map as any).tascToStage[tasc] as string
  const aiStage = (map as any).aiToStage[String(ai)] as string

  async function copyTASC(){
    const txt = `GLASS-AI (por TASC ${tasc}) → Estadio ${tascStage}`
    try { await navigator.clipboard.writeText(txt) } catch {}
  }
  async function copyAI(){
    const txt = `GLASS-AI (por AI-${ai}) → Estadio ${aiStage}`
    try { await navigator.clipboard.writeText(txt) } catch {}
  }

  return (
    <section className="mt-8">
      <article className="rounded-xl bg-white/90 border border-slate-200/70 p-6 shadow-soft">
        <header className="mb-4 flex items-center gap-2">
          <div className="rounded-md bg-brand-100 p-2" aria-hidden="true"><svg className="h-5 w-5 text-brand-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM7 11h10v2H7z"/></svg></div>
          <h2 className="text-lg font-semibold">GLASS-AI (Propuesto) — Clasificación Aortoilíaca</h2>
        </header>
        <p className="text-sm text-slate-600 mb-4"><strong>Nota:</strong> GLASS original es infrainguinal. Para aortoilíaco se utiliza TASC II; esta sección ofrece una extensión operativa <em>(no oficial)</em> tipo GLASS para integrar decisiones con el resto del algoritmo.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
            <h3 className="font-semibold mb-3">TASC → Estadio</h3>
            <label className="block text-sm mb-2">Tipo TASC AI
              <select className="mt-1 w-full rounded-lg border border-slate-300 p-2" value={tasc} onChange={e=>setTASC(e.target.value as any)}>
                {['A','B','C','D'].map(t=> <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            <div className="rounded-lg border border-slate-200 p-3 bg-white mb-3">
              <p className="text-sm">Estadio análogo (por TASC):</p>
              <p className="text-2xl font-semibold text-brand-900"><StagePill value={tascStage} /></p>
            </div>
            <button onClick={copyTASC} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 7h9v10H8zM6 9H5v12h12v-1H6z"/></svg>
              Copiar resultado
            </button>
          </div>

          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
            <h3 className="font-semibold mb-3">AI (Propuesto) → Estadio</h3>
            <label className="block text-sm mb-2">Grado GLASS-AI (propuesto)
              <select className="mt-1 w-full rounded-lg border border-slate-300 p-2" value={ai} onChange={e=>setAI(Number(e.target.value))}>
                {[0,1,2,3,4].map(n=> <option key={n} value={n}>AI-{n}</option>)}
              </select>
            </label>
            <div className="rounded-lg border border-slate-200 p-3 bg-white">
              <p className="text-sm">Estadio análogo (por AI):</p>
              <p className="text-2xl font-semibold text-brand-900"><StagePill value={aiStage} /></p>
            </div>
            <div className="mt-3">
              <button onClick={copyAI} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 7h9v10H8zM6 9H5v12h12v-1H6z"/></svg>
                Copiar resultado
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
