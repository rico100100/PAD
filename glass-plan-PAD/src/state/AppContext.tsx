
import React, { createContext, useContext, useState } from 'react'

type AppState = {
  fp: number
  ip: number
  tasc: 'A'|'B'|'C'|'D'
  ai: number
  setFP: (v:number)=>void
  setIP: (v:number)=>void
  setTASC: (t:'A'|'B'|'C'|'D')=>void
  setAI: (v:number)=>void
}

const Ctx = createContext<AppState | null>(null)

export function AppProvider({children}:{children:React.ReactNode}){
  const [fp, setFP] = useState(1)
  const [ip, setIP] = useState(1)
  const [tasc, setTASC] = useState<'A'|'B'|'C'|'D'>('A')
  const [ai, setAI] = useState(1)

  return <Ctx.Provider value={{ fp, ip, tasc, ai, setFP, setIP, setTASC, setAI }}>{children}</Ctx.Provider>
}

export function useApp(){ const v = useContext(Ctx); if(!v) throw new Error('AppContext'); return v }
