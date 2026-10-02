import {Menu,X,ArrowUpRight} from 'lucide-react'
import {useState} from 'react'
export type Language='ru'|'en'
type Props={language:Language;onLanguageChange:(l:Language)=>void}
const nav={ru:[['Услуги','#services'],['Проекты','#projects'],['Отзывы','#reviews']],en:[['Services','#services'],['Projects','#projects'],['Reviews','#reviews']]} as const
export default function Header({language,onLanguageChange}:Props){
 const [open,setOpen]=useState(false), links=nav[language]
 const go=(h:string)=>{setOpen(false);location.hash=h}
 return <header className="nx-header"><a className="nx-logo" href="#" onClick={e=>{e.preventDefault();go('#')}}>NEXUM</a><nav>{links.map(([l,h])=><button key={h} onClick={()=>go(h)}>{l}</button>)}</nav><div className="nx-header-actions"><button className="nx-lang" onClick={()=>onLanguageChange(language==='ru'?'en':'ru')}>{language.toUpperCase()}</button><button className="nx-login" onClick={()=>go('#login')}>{language==='ru'?'Войти':'Log in'}</button><button className="nx-start" onClick={()=>go('#start')}>{language==='ru'?'Обсудить проект':'Start a project'} <ArrowUpRight size={14}/></button><button className="nx-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<div className="nx-mobile-nav">{links.map(([l,h])=><button key={h} onClick={()=>go(h)}>{l}<ArrowUpRight size={14}/></button>)}<button onClick={()=>go('#login')}>{language==='ru'?'Войти':'Log in'}</button></div>}</header>
}