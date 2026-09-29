import {Menu,X,Grid2X2} from 'lucide-react';import {useEffect,useState} from 'react'
import CloudMenu from './CloudMenu'

type Language='ru'|'en'
type Props={language:Language;onLanguageChange:(language:Language)=>void}

export default function Header({language,onLanguageChange}:Props){
 const[open,setOpen]=useState(false)
 const[active,setActive]=useState('#top')
 const[cloudMenu,setCloudMenu]=useState(false)
 useEffect(()=>{const ids=links.map(([,href])=>href);const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActive('#'+visible.target.id)},{rootMargin:'-25% 0px -55% 0px',threshold:[0,.2,.5]});ids.forEach(h=>{const el=document.querySelector(h);if(el)observer.observe(el)});return()=>observer.disconnect()},[language])
 const links=language==='ru'?[['Работы','#work'],['Услуги','#services'],['Процесс','#process'],['Облако','#library'],['Экосистема','#ecosystem'],['Контакты','#contact']]:[['Work','#work'],['Services','#services'],['Process','#process'],['Cloud','#library'],['Ecosystem','#ecosystem'],['Contact','#contact']]
 const go=(href:string)=>{setOpen(false);const target=document.querySelector(href);if(target)target.scrollIntoView({behavior:'smooth'});else{location.hash='';setTimeout(()=>document.querySelector(href)?.scrollIntoView({behavior:'smooth'}),40)}}
 return <header className={open?'open':''}>
  <a className="brand" href="#" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>NEXUM<span>—</span></a>
  <nav>{links.map(([l,href])=><button key={l} onClick={()=>go(href)} className={active===href?'active':''}>{l}</button>)}</nav>
  <div className="header-actions">
   <div className="language-switch" role="group" aria-label="Language"><button className={language==='ru'?'active':''} onClick={()=>onLanguageChange('ru')}>RU</button><span>/</span><button className={language==='en'?'active':''} onClick={()=>onLanguageChange('en')}>EN</button></div>
   <button className="header-menu-trigger" onClick={()=>setCloudMenu(true)} aria-label={language==='ru'?'Открыть меню':'Open menu'}><Grid2X2/></button><button className="header-cta" onClick={()=>go('#contact')}>{language==='ru'?'Обсудить проект':'Start a project'} <span>↗</span></button>
  </div>
  <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={language==='ru'?'Меню':'Menu'}>{open?<X/>:<Menu/>}</button>
 </header>{cloudMenu&&<CloudMenu language={language} onClose={()=>setCloudMenu(false)}/>}
}