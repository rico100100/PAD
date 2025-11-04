
import React from 'react'

export default function AlgorithmPage(){
  return (
    <section className="mt-8">
      <article className="rounded-xl bg-white/90 border border-slate-200/70 p-6 shadow-soft">
        <header className="mb-4 flex items-center gap-2">
          <div className="rounded-md bg-brand-100 p-2" aria-hidden="true">
            <svg className="h-5 w-5 text-brand-700" viewBox="0 0 24 24" fill="currentColor"><path d="M7 6h10v2H7V6zm-2 5h14v2H5v-2zm4 5h6v2H9v-2z"/></svg>
          </div>
          <h2 className="text-lg font-semibold">Algoritmo Integrado (PLAN + WIfI + GLASS/GLASS-AI/TASC)</h2>
        </header>
        <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
          <li><strong>Evaluación clínica inicial</strong> — Historia/EF, Rutherford/WIfI, comorbilidades; optimiza terapia médica (antiagregación/estatinas/IECA/DM/cesación tabáquica) y ejercicio.</li>
          <li><strong>Imagen</strong> — Dúplex/CTA/MRA/angiografía según caso. En CLTI, imagen hasta pie y definición del TAP.</li>
          <li><strong>Estratificación anatómica</strong> — Aortoilíaco: TASC II o GLASS-AI propuesto; Infrainguinal: GLASS (FP & IP → Estadio I–III).</li>
          <li><strong>PLAN</strong> — Riesgo del paciente + severidad del miembro (WIfI) + patrón anatómico para decidir <em>endo/abierto/híbrido</em> y objetivo de revascularización.</li>
          <li><strong>Decisión y técnica</strong> — Aortoilíaco A–B/I: endo; C/II: endo avanzado o abierto; D/III: abierto/híbrido salvo alto riesgo (endo selectivo). Infrainguinal I–II: endo; III: bypass/estrategias avanzadas. Siempre orientado a TAP útil y perfusión tisular.</li>
          <li><strong>Seguimiento</strong> — Clínica e imagen; curación de heridas, permeabilidad, MALE; reintervención según necesidad.</li>
        </ol>
        <div className="mt-6 overflow-x-auto">
          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
            <svg viewBox="0 0 960 420" className="w-full h-auto" aria-labelledby="flowTitle flowDesc" role="img">
              <title id="flowTitle">Algoritmo PLAN/WIfI/GLASS-GLASS-AI/TASC</title>
              <desc id="flowDesc">Diagrama simplificado de decisión para enfermedad aortoilíaca e infrainguinal.</desc>
              <defs>
                <style>{`.box{fill:#fff;stroke:#94a3b8;stroke-width:2;rx:10;} .arrow{stroke:#64748b;stroke-width:2;marker-end:url(#m);} .t{font:500 13px ui-sans-serif,system-ui;fill:#0f172a}`}</style>
                <marker id="m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
                </marker>
              </defs>
              <rect className="box" x="30" y="30" width="250" height="60"/><text className="t" x="50" y="65">Evaluación clínica + WIfI + Rx CV</text>
              <rect className="box" x="330" y="30" width="250" height="60"/><text className="t" x="350" y="65">Imagen (Dúplex/CTA/MRA/Angio)</text>
              <rect className="box" x="630" y="30" width="300" height="60"/><text className="t" x="650" y="65">Estratificación: TASC/GLASS/GLASS-AI</text>
              <rect className="box" x="180" y="150" width="280" height="60"/><text className="t" x="200" y="185">PLAN: Risk + Limb (WIfI) + Anatomy</text>
              <rect className="box" x="520" y="150" width="380" height="60"/><text className="t" x="540" y="185">Decisión: Endo vs Abierto vs Híbrido</text>
              <rect className="box" x="180" y="270" width="280" height="60"/><text className="t" x="200" y="305">Objetivo: TAP con perfusión tisular</text>
              <rect className="box" x="520" y="270" width="380" height="60"/><text className="t" x="540" y="305">Seguimiento: clínica, permeabilidad, MALE</text>
              <line className="arrow" x1="280" y1="60" x2="330" y2="60" /><line className="arrow" x1="580" y1="60" x2="630" y2="60" />
              <line className="arrow" x1="480" y1="180" x2="520" y2="180" /><line className="arrow" x1="370" y1="210" x2="370" y2="270" />
              <line className="arrow" x1="710" y1="210" x2="710" y2="270" />
            </svg>
          </div>
        </div>
      </article>
    </section>
  )
}
