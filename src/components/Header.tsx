import {Menu,X,Grid2X2} from 'lucide-react';import {useState} from 'react'
import CloudMenu from './CloudMenu'
type Language='ru'|'en'
type Props={language:Language;onLanguageChange:(language:Language)=>void}
export default function Header({language,onLanguageChange}:Props){
 const[open,setOpen]=useState(false),[cloudMenu,setCloudMenu]=useState(false)
 const links=language==='ru'?[['Главная','#top'],['Услуги','#services'],['Портфолио','#work'],['Marketplace','#marketplace']]:[['Home','#top'],['Services','#services'],['Portfolio','#work'],['Marketplace','#marketplace']]
 const go=(href:string)=>{setOpen(false);if(href==='#top'){location.hash='';window.scrollTo({top:0,behavior:'smooth'})}else location.hash=href.slice(1)}
 return <><header className={open?'open':''}><a className="brand" href="#" onClick={e=>{e.preventDefault();go('#top')}}>NEXUM<span>—</span></a><nav>{links.map(([l,href])=><button key={l} onClick={()=>go(href)}>{l}</button>)}</nav><div className="header-actions"><div className="language-switch" role="group" aria-label="Language"><button className={language==='ru'?'active':''} onClick={()=>onLanguageChange('ru')}>RU</button><span>/</span><button className={language==='en'?'active':''} onClick={()=>onLanguageChange('en')}>EN</button></div><button className="header-menu-trigger" onClick={()=>setCloudMenu(true)} aria-label={language==='ru'?'Открыть меню':'Open menu'}><Grid2X2/></button><button className="header-cta" onClick={()=>go('#start')}>{language==='ru'?'Заказать проект':'Start a project'} <span>↗</span></button></div><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={language==='ru'?'Меню':'Menu'}>{open?<X/>:<Menu/>}</button></header>{cloudMenu&&<CloudMenu language={language} onClose={()=>setCloudMenu(false)}/>}</>
}