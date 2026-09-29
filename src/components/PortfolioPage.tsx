import {ArrowUpRight,Filter} from 'lucide-react'
import ProductMockup from './ProductMockup'
import PortfolioSiteMockup from './PortfolioSiteMockup'
import ProjectSpace from './ProjectSpace'
import {works} from '../data/content'
import {useMemo,useState} from 'react'
type Language='ru'|'en'
const filters=[['ALL','ALL'],['PRODUCTS','ПРОДУКТЫ'],['AI','AI'],['PLATFORMS','ПЛАТФОРМЫ'],['NEXUM','NEXUM']] as const
const filterWork=(kind:string,title:string,filter:string)=>filter==='ALL'||(filter==='AI'&&kind==='ai')||(filter==='PRODUCTS'&&['commerce','mobile'].includes(kind))||(filter==='PLATFORMS'&&kind==='platform')||(filter==='NEXUM'&&(title.toLowerCase().startsWith('nexum')||title==='Gruzli'))
export default function PortfolioPage({language}:{language:Language}){
 const ru=language==='ru';const[selected,setSelected]=useState<(typeof works)[number]|null>(null);const[filter,setFilter]=useState('ALL')
 const visible=useMemo(()=>works.filter(w=>filterWork(w.kind,w.title,filter)),[filter])
 return <main className="subpage portfolio-page">
  <section className="subpage-hero"><small>02 / PORTFOLIO</small><h1>{ru?<>Портфолио<br/><i>продуктов.</i></>:<>Built<br/><i>products.</i></>}</h1><p>{ru?'Не галерея макетов. Реальные цифровые продукты, системы и эксперименты, созданные внутри NEXUM.':'Not a gallery of mockups. Digital products, systems and experiments built inside NEXUM.'}</p></section>
  <section className="subpage-section">
   <div className="portfolio-toolbar"><div className="cloud-section-head"><span>BUILT HERE</span><p>{ru?'Продукты и системы':'Products and systems'}</p></div><div className="portfolio-filter-label"><Filter size={13}/><span>{visible.length} / {works.length}</span></div></div>
   <div className="portfolio-filters">{filters.map(([en,ruLabel])=><button key={en} className={filter===en?'active':''} onClick={()=>setFilter(en)}>{ru?ruLabel:en}</button>)}</div>
   <div className="cloud-work-grid cloud-project-grid portfolio-grid">{visible.map((w,i)=><button type="button" className="cloud-project" key={w.id} onClick={()=>setSelected(w)}><div className="cloud-project-visual"><div className="project-glass-index">{w.id} / PRODUCT SPACE</div><div className="project-live-pill"><span/> {w.kind==='ai'?'INTELLIGENCE':'PRODUCT'}</div><PortfolioSiteMockup id={w.id} language={language}/><div className="project-glass-reflection"/></div><div className="cloud-project-meta"><div><small>{ru?w.ruCategory:w.category}</small><h3>{ru?w.ruTitle:w.title}</h3><p>{ru?w.ruDescription:w.description}</p></div><ArrowUpRight/></div></button>)}</div>
  </section>
  {selected&&<div className="project-space-backdrop" role="presentation" onMouseDown={e=>{if(e.currentTarget===e.target)setSelected(null)}}><ProjectSpace id={selected.id} language={language} onClose={()=>setSelected(null)}/></div>}
 </main>
}