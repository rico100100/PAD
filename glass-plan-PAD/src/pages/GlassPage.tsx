
import { useApp } from '../state/AppContext'
import StagePill from '../components/StagePill'
import matrix from '../data/glassMatrix.json'

export default function GlassPage(){
  const { fp, ip, setFP, setIP } = useApp()
  const stage = (matrix as string[][])[4 - fp][ip]

  async function copy(){
    const txt = `GLASS (FP ${fp}, IP ${ip}) → Estadio ${stage}`
    try { await navigator.clipboard.writeText(txt) } catch {}
  }

  return (
    <section className="mt-8">
      <div className="mb-4 flex flex-wrap gap-2 text-sm">
        <a href="#/glass#fp" className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 bg-white hover:bg-slate-50"><span className="w-2 h-2 rounded-full bg-brand-600"></span> FP</a>
        <a href="#/glass#ip" className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 bg-white hover:bg-slate-50"><span className="w-2 h-2 rounded-full bg-brand-600"></span> IP</a>
        <a href="#/glass#matriz" className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 bg-white hover:bg-slate-50"><span className="w-2 h-2 rounded-full bg-brand-600"></span> Matriz</a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article id="fp" className="lg:col-span-2 rounded-xl bg-white/90 border border-slate-200/70 p-6 shadow-soft">
          <header className="mb-4 flex items-center gap-2">
            <div className="rounded-md bg-brand-100 p-2" aria-hidden="true"><svg className="h-5 w-5 text-brand-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM7 11h10v2H7z"/></svg></div>
            <h2 className="text-lg font-semibold">Sector femoropoplíteo (FP) — Criterios de grado</h2>
          </header>
          <ol className="space-y-2 list-decimal list-inside text-sm leading-relaxed">
            <li><strong>FP-0:</strong> Enfermedad leve o no significativa (&lt;50%).</li>
            <li><strong>FP-1:</strong> AFS &lt; 1/3 (&lt;10 cm); puede incluir un solo CTO focal (&lt;5 cm) no flush; poplítea leve/no significativa.</li>
            <li><strong>FP-2:</strong> AFS 1/3–2/3 (10–20 cm); CTO total &lt; 1/3 (10 cm) pero no flush; estenosis poplítea &lt;2 cm sin comprometer trifurcación.</li>
            <li><strong>FP-3:</strong> AFS &gt; 2/3 (&gt;20 cm) o CTO 10–20 cm; oclusión flush &lt;20 cm; estenosis poplítea 2–5 cm sin comprometer trifurcación.</li>
            <li><strong>FP-4:</strong> Oclusión total AFS &gt;20 cm; enfermedad poplítea &gt;5 cm o que compromete trifurcación; cualquier CTO poplíteo.</li>
          </ol>
          <p className="mt-3 text-xs text-slate-500">*Sube un grado con calcificación circunferencial difusa (&gt;50%) en TAP.</p>
        </article>

        <article id="ip" className="rounded-xl bg-white/90 border border-slate-200/70 p-6 shadow-soft">
          <header className="mb-4 flex items-center gap-2">
            <div className="rounded-md bg-brand-100 p-2" aria-hidden="true"><svg className="h-5 w-5 text-brand-700" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zM4 11h10v2H4zM4 16h16v2H4z"/></svg></div>
            <h2 className="text-lg font-semibold">Sector infrapoplíteo (IP) — Criterios de grado</h2>
          </header>
          <ol className="space-y-2 list-decimal list-inside text-sm leading-relaxed">
            <li><strong>IP-0:</strong> Enfermedad leve o no significativa (&lt;50%).</li>
            <li><strong>IP-1:</strong> Estenosis focal &lt;3 cm (excluye tronco tibioperoneo - TP).</li>
            <li><strong>IP-2:</strong> Lesión objetivo &lt;1/3 (&lt;10 cm); CTO focal único (&lt;3 cm; excluye tronco TP y origen de la arteria objetivo).</li>
            <li><strong>IP-3:</strong> Longitud 1/3–2/3 (10–20 cm) o CTO 3–10 cm (puede incluir origen arteria objetivo; no tronco TP).</li>
            <li><strong>IP-4:</strong> &gt;2/3 o CTO &gt;1/3 (&gt;10 cm); puede incluir origen arteria objetivo; cualquier CTO de tronco TP.</li>
          </ol>
          <p className="mt-3 text-xs text-slate-500">*La gradación IP se aplica al vaso principal del TAP. Tronco TP solo si el TAP es tibial posterior o peronea.</p>
        </article>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6" id="matriz">
        <article className="lg:col-span-2 rounded-xl bg-white/90 border border-slate-200/70 p-6 shadow-soft">
          <header className="mb-4 flex items-center gap-2">
            <div className="rounded-md bg-brand-100 p-2" aria-hidden="true"><svg className="h-5 w-5 text-brand-700" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/></svg></div>
            <h2 className="text-lg font-semibold">Tabla de Estadio GLASS (Infrainguinal)</h2>
          </header>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-2 text-left">FP \ IP</th>
                  <th className="p-2">0</th>
                  <th className="p-2">1</th>
                  <th className="p-2">2</th>
                  <th className="p-2">3</th>
                  <th className="p-2">4</th>
                </tr>
              </thead>
              <tbody>
                <tr><th className="p-2 text-left">4</th><td className="p-2">III</td><td className="p-2">III</td><td className="p-2">III</td><td className="p-2">III</td><td className="p-2">III</td></tr>
                <tr className="bg-slate-50"><th className="p-2 text-left">3</th><td className="p-2">II</td><td className="p-2">II</td><td className="p-2">III</td><td className="p-2">III</td><td className="p-2">III</td></tr>
                <tr><th className="p-2 text-left">2</th><td className="p-2">I</td><td className="p-2">II</td><td className="p-2">III</td><td className="p-2">III</td><td className="p-2">III</td></tr>
                <tr className="bg-slate-50"><th className="p-2 text-left">1</th><td className="p-2">I</td><td className="p-2">I</td><td className="p-2">II</td><td className="p-2">III</td><td className="p-2">III</td></tr>
                <tr><th className="p-2 text-left">0</th><td className="p-2">NA</td><td className="p-2">I</td><td className="p-2">I</td><td className="p-2">II</td><td className="p-2">III</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <aside className="rounded-xl bg-white/90 border border-slate-200/70 p-6 shadow-soft">
          <h3 className="text-base font-semibold mb-3">Calcula tu estadio GLASS</h3>
          <label className="block text-sm mb-2">Grado FP
            <select className="mt-1 w-full rounded-lg border border-slate-300 p-2" value={fp} onChange={e=>setFP(Number(e.target.value))}>
              {[0,1,2,3,4].map(n=> <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
          <label className="block text-sm mb-4">Grado IP
            <select className="mt-1 w-full rounded-lg border border-slate-300 p-2" value={ip} onChange={e=>setIP(Number(e.target.value))}>
              {[0,1,2,3,4].map(n=> <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50 mb-2">
            <p className="text-sm">Estadio GLASS:</p>
            <p className="text-2xl font-semibold text-brand-900"><StagePill value={stage} /></p>
          </div>
          <button onClick={copy} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 7h9v10H8zM6 9H5v12h12v-1H6z"/></svg>
            Copiar resultado
          </button>
        </aside>
      </div>
    </section>
  )
}
