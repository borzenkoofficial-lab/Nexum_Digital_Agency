import {ArrowUpRight,Bot,Box,Code2,Globe,LayoutGrid,MessageCircle,PanelTop,Plug,X} from 'lucide-react'
import {useMemo,useState} from 'react'
import ProductMockup from './ProductMockup'

type Category='ALL'|'SITES'|'APPS'|'TELEGRAM'|'PLUGINS'|'AI'|'SAAS'
type Item={id:string;title:string;category:Exclude<Category,'ALL'>;label:string;description:string;kind:'dashboard'|'mobile'|'ai'|'commerce'|'platform'|'telegram'|'plugin'|'website';icon:typeof Globe;size:'hero'|'wide'|'standard';number:string}
const categories:Category[]=['ALL','SITES','APPS','TELEGRAM','PLUGINS','AI','SAAS']
const items:Item[]=[
 {id:'atlas',title:'Atlas',category:'SAAS',label:'Operations platform',description:'Рабочая система для заказов, команд и операционных процессов.',kind:'platform',icon:LayoutGrid,size:'hero',number:'01'},
 {id:'forma',title:'Forma',category:'SITES',label:'Editorial website',description:'Имиджевый сайт с выразительной типографикой и продуктовой подачей.',kind:'website',icon:Globe,size:'hero',number:'02'},
 {id:'pulse',title:'Pulse',category:'APPS',label:'Mobile application',description:'Мобильное приложение для ежедневных задач и командной работы.',kind:'mobile',icon:PanelTop,size:'standard',number:'03'},
 {id:'nexum-bot',title:'Nexum Bot',category:'TELEGRAM',label:'Telegram bot',description:'Telegram-бот для заявок, уведомлений, поддержки и автоматизации.',kind:'telegram',icon:MessageCircle,size:'standard',number:'04'},
 {id:'forge',title:'Forge',category:'PLUGINS',label:'Product plugin',description:'Расширение, которое добавляет AI-инструменты прямо в рабочий интерфейс.',kind:'plugin',icon:Plug,size:'wide',number:'05'},
 {id:'nexum-ai',title:'Nexum AI',category:'AI',label:'AI workspace',description:'AI-ассистент, который работает с данными, источниками и действиями.',kind:'ai',icon:Bot,size:'hero',number:'06'},
 {id:'north',title:'North',category:'SAAS',label:'Analytics SaaS',description:'Дашборд для показателей, отчётности и контроля бизнеса.',kind:'dashboard',icon:Box,size:'standard',number:'07'},
 {id:'studio',title:'Studio',category:'SITES',label:'Digital product site',description:'Сайт цифрового продукта с демонстрацией интерфейса и сценариев.',kind:'website',icon:Code2,size:'standard',number:'08'},
 {id:'orbit',title:'Orbit',category:'APPS',label:'Client application',description:'Приложение для клиентов, задач и ежедневного взаимодействия.',kind:'mobile',icon:PanelTop,size:'wide',number:'09'},
 {id:'signal',title:'Signal',category:'AI',label:'AI automation',description:'AI-система для обработки запросов, данных и повторяющихся процессов.',kind:'ai',icon:Bot,size:'standard',number:'10'},
 {id:'grid',title:'Grid',category:'SAAS',label:'Business dashboard',description:'Рабочее пространство для аналитики, показателей и контроля операций.',kind:'dashboard',icon:Box,size:'standard',number:'11'},
 {id:'frame',title:'Frame',category:'PLUGINS',label:'Workflow plugin',description:'Инструмент для расширения существующего продукта и ускорения рабочих процессов.',kind:'plugin',icon:Plug,size:'standard',number:'12'},
]
export default function MarketplacePage(){
 const[category,setCategory]=useState<Category>('ALL');const[selected,setSelected]=useState<Item|null>(null)
 const filtered=useMemo(()=>category==='ALL'?items:items.filter(x=>x.category===category),[category])
 return <main className="marketplace-page">
  <section className="marketplace-hero"><div><span className="marketplace-kicker">NEXUM / MARKETPLACE</span><h1>Готовые цифровые<br/><i>продукты и решения.</i></h1><p>Выберите направление, посмотрите концепции и откройте продукт, который можно адаптировать под вашу задачу.</p></div><div className="marketplace-hero-mark">N.</div></section>
  <section className="marketplace-catalog" id="marketplace-catalog">
   <div className="marketplace-toolbar"><div className="marketplace-results">{filtered.length} PRODUCTS</div><div className="marketplace-filters">{categories.map(c=><button key={c} className={category===c?'active':''} onClick={()=>{setCategory(c);setSelected(null)}}>{c}</button>)}</div></div>
   <div className="marketplace-grid">{filtered.map((item,index)=>{const Icon=item.icon;return <div className={'market-entry '+(index>0&&index%4===0?'market-entry-break':'')} key={item.id}>
    {category==='ALL'&&index>0&&index%4===0&&<div className="market-editorial-divider"><span>0{Math.floor(index/4)+1}</span><b>{index<8?'SELECTED DIGITAL SYSTEMS':'MORE FROM THE STUDIO'}</b><i>{item.category}</i></div>}
    <button className={'market-card market-card-'+item.size} style={{'--delay':String(Math.min(index,8)*45)+'ms'} as Record<string,string>} onClick={()=>setSelected(item)}>
      <div className={'market-card-visual market-card-visual-'+item.kind}>
        <div className="market-card-top"><span>{item.number}</span><Icon size={15}/></div>
        {item.size==='hero'&&<div className="market-hero-stamp"><span>SELECTED CASE</span><b>{item.label}</b><i>CONCEPT / NEXUM</i></div>}
        <div className="market-card-mock"><ProductMockup kind={item.kind} large={item.size==='hero'}/></div>
        <div className={'market-3d-badge market-object-'+item.kind} aria-hidden="true"><div className="market-3d-shadow"/><div className="market-3d-face"><Icon size={22}/></div></div>
        <span className="market-card-open"><ArrowUpRight size={15}/></span>
      </div>
      <div className="market-card-info"><div><small>{item.category} / {item.label}</small><h2>{item.title}</h2><p>{item.description}</p></div><span className="market-card-arrow"><ArrowUpRight size={17}/></span></div>
    </button>
   </div>})}</div>
  </section>
  <section className="marketplace-bottom-cta"><span>NEED SOMETHING CUSTOM?</span><h2>Создадим продукт<br/><i>под вашу задачу.</i></h2><a href="#contact">Обсудить проект <ArrowUpRight size={16}/></a></section>
  {selected&&<div className="market-modal-backdrop" role="dialog" aria-modal="true" aria-label={selected.title} onClick={()=>setSelected(null)}><div className="market-modal" onClick={e=>e.stopPropagation()}><button className="market-modal-close" onClick={()=>setSelected(null)} aria-label="Закрыть"><X size={18}/></button><div className="market-modal-visual"><ProductMockup kind={selected.kind} large/></div><div className="market-modal-copy"><div className="market-modal-meta"><span>{selected.category}</span><span>CASE / {selected.number}</span></div><small>{selected.category} / {selected.label}</small><h2>{selected.title}</h2><p>{selected.description}</p><a href="#contact" onClick={()=>setSelected(null)}>Запросить похожий продукт <ArrowUpRight size={15}/></a></div></div></div>}
 </main>
}