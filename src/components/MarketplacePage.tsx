import {ArrowUpRight,Bot,Box,Code2,Globe,LayoutGrid,MessageCircle,PanelTop,Plug,X} from 'lucide-react'
import {useMemo,useState} from 'react'
import ProductMockup from './ProductMockup'

type Category='ALL'|'SITES'|'APPS'|'TELEGRAM'|'PLUGINS'|'AI'|'SAAS'
type Item={id:string;title:string;category:Exclude<Category,'ALL'>;label:string;description:string;kind:'dashboard'|'mobile'|'ai'|'commerce'|'platform';icon:typeof Globe}
const categories:Category[]=['ALL','SITES','APPS','TELEGRAM','PLUGINS','AI','SAAS']
const items:Item[]=[
 {id:'atlas',title:'Atlas',category:'SAAS',label:'Operations platform',description:'Рабочая система для заказов, команд и операционных процессов.',kind:'platform',icon:LayoutGrid},
 {id:'forma',title:'Forma',category:'SITES',label:'Editorial website',description:'Имиджевый сайт с выразительной типографикой и продуктовой подачей.',kind:'commerce',icon:Globe},
 {id:'pulse',title:'Pulse',category:'APPS',label:'Mobile application',description:'Мобильное приложение для ежедневных задач и командной работы.',kind:'mobile',icon:PanelTop},
 {id:'nexum-bot',title:'Nexum Bot',category:'TELEGRAM',label:'Telegram bot',description:'Telegram-бот для заявок, уведомлений, поддержки и автоматизации.',kind:'ai',icon:MessageCircle},
 {id:'forge',title:'Forge',category:'PLUGINS',label:'Product plugin',description:'Расширение, которое добавляет AI-инструменты прямо в рабочий интерфейс.',kind:'platform',icon:Plug},
 {id:'nexum-ai',title:'Nexum AI',category:'AI',label:'AI workspace',description:'AI-ассистент, который работает с данными, источниками и действиями.',kind:'ai',icon:Bot},
 {id:'north',title:'North',category:'SAAS',label:'Analytics SaaS',description:'Дашборд для показателей, отчётности и контроля бизнеса.',kind:'dashboard',icon:Box},
 {id:'studio',title:'Studio',category:'SITES',label:'Digital product site',description:'Сайт цифрового продукта с демонстрацией интерфейса и сценариев.',kind:'commerce',icon:Code2},
]
export default function MarketplacePage(){
 const[category,setCategory]=useState<Category>('ALL');const[selected,setSelected]=useState<Item|null>(null)
 const filtered=useMemo(()=>category==='ALL'?items:items.filter(x=>x.category===category),[category])
 return <main className="marketplace-page">
  <section className="marketplace-hero"><div><span className="marketplace-kicker">NEXUM / MARKETPLACE</span><h1>Готовые цифровые<br/><i>продукты и решения.</i></h1><p>Выберите направление, посмотрите концепции и откройте продукт, который можно адаптировать под вашу задачу.</p></div><div className="marketplace-hero-mark">N.</div></section>
  <section className="marketplace-catalog" id="marketplace-catalog">
   <div className="marketplace-filters">{categories.map(c=><button key={c} className={category===c?'active':''} onClick={()=>{setCategory(c);setSelected(null)}}>{c}</button>)}</div>
   <div className="marketplace-grid">{filtered.map((item,index)=>{const Icon=item.icon;return <button className="market-card" key={item.id} onClick={()=>setSelected(item)}>
    <div className="market-card-visual"><div className="market-card-top"><span>0{index+1}</span><Icon size={15}/></div><div className="market-card-mock"><ProductMockup kind={item.kind}/></div><span className="market-card-open"><ArrowUpRight size={15}/></span></div>
    <div className="market-card-info"><div><small>{item.category} / {item.label}</small><h2>{item.title}</h2><p>{item.description}</p></div><span className="market-card-arrow"><ArrowUpRight size={17}/></span></div>
   </button>})}</div>
  </section>
  <section className="marketplace-bottom-cta"><span>NEED SOMETHING CUSTOM?</span><h2>Создадим продукт<br/><i>под вашу задачу.</i></h2><a href="#contact">Обсудить проект <ArrowUpRight size={16}/></a></section>
  {selected&&<div className="market-modal-backdrop" onClick={()=>setSelected(null)}><div className="market-modal" onClick={e=>e.stopPropagation()}><button className="market-modal-close" onClick={()=>setSelected(null)} aria-label="Закрыть"><X size={18}/></button><div className="market-modal-visual"><ProductMockup kind={selected.kind} large/></div><div className="market-modal-copy"><small>{selected.category} / {selected.label}</small><h2>{selected.title}</h2><p>{selected.description}</p><a href="#contact" onClick={()=>setSelected(null)}>Запросить похожий продукт <ArrowUpRight size={15}/></a></div></div></div>}
 </main>
}