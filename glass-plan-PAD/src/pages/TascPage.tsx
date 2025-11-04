
export default function TascPage(){
  return (
    <section className="mt-8">
      <article className="rounded-xl bg-white/90 border border-slate-200/70 p-6 shadow-soft">
        <header className="mb-4 flex items-center gap-2">
          <div className="rounded-md bg-brand-100 p-2" aria-hidden="true"><svg className="h-5 w-5 text-brand-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM7 11h10v2H7z"/></svg></div>
          <h2 className="text-lg font-semibold">TASC II — Lesiones Aortoilíacas (Resumen práctico)</h2>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold mb-2">Tipos A–D (muy resumido)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>A:</strong> Estenosis focal (CIA/EIA) u oclusiones cortas.</li>
              <li><strong>B:</strong> Estenosis múltiples moderadas; oclusiones EIA unilaterales no largas.</li>
              <li><strong>C:</strong> Oclusiones bilaterales EIA; oclusiones CIA extensas; aorta distal limitada.</li>
              <li><strong>D:</strong> Oclusión aortoilíaca extensa (incluye bifurcación); enfermedad difusa multisegmentaria.</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">*Definiciones completas en el consenso TASC II.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Estrategia preferente (tendencia actual)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>A–B:</strong> Generalmente <em>endovascular primero</em> (angioplastia y stent).</li>
              <li><strong>C:</strong> Endovascular en muchos centros (stents cubiertos/híbridos), o bypass según riesgo y anatomía.</li>
              <li><strong>D:</strong> Abierto (aortobifemoral) o híbrido en candidatos; endovascular selectivo en alto riesgo.</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}
