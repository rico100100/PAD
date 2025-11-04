
import cls from 'classnames'

export default function StagePill({value}:{value:string}){
  const color = value==='I' ? 'bg-green-100 text-green-800' :
    (value==='II' || value==='I–II') ? 'bg-amber-100 text-amber-800' :
    value==='III' ? 'bg-rose-100 text-rose-800' : 'bg-slate-200 text-slate-800'
  return <span className={cls('pill', color)}>{value}</span>
}
