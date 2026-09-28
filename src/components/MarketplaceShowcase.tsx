import {ArrowUpRight,ChevronLeft,ChevronRight} from 'lucide-react'
import {useEffect,useState} from 'react'
import ProductMockup from './ProductMockup'

const items=[
 {title:'Gruzli',type:'Marketplace',text:'Платформа для бизнеса, диспетчеров и исполнителей.',kind:'platform' as const},
 {title:'Nexum AI',type:'AI PRODUCT',text:'Рабочее пространство для AI-ассистентов и агентов.',kind:'ai' as const},
 {title:'Forma',type:'COMMERCE',text:'Концепт цифрового магазина с editorial-подачей.',kind:'commerce' as const},
 {title:'Pulse',type:'MOBILE PRODUCT',text:'Мобильный продукт для ежедневных рабочих процессов.',kind:'mobile' as const},
 {title:'North',type:'DATA PRODUCT',text:'Система управления показателями и операциями.',kind:'dashboard' as const},
]

export default function MarketplaceShowcase(){
 const[index,setIndex]=useState(0)
 const next=()=>setIndex(i=>(i+1)%items.length)
 const prev=()=>setIndex(i=>(i-1+items.length)%items.length)
 useEffect(()=>{const timer=window.setInterval(next,6000);return()=>window.clearInterval(timer)},[])
 const item=items[index]
 return <section className="marketplace" id="marketplace">
  <div className="marketplace-top">
   <div><span className="marketplace-kicker">NEXUM / MARKETPLACE</span><h2>Продукты, которые<br/><i>можно запустить.</i></h2></div>
   <a className="marketplace-button" href="#work">Маркетплейс <ArrowUpRight size={16}/></a>
  </div>
  <div className="marketplace-stage">
   <button className="market-arrow prev" onClick={prev} aria-label="Предыдущая работа"><ChevronLeft size={18}/></button>
   <div className="marketplace-copy">
    <span>{String(index+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</span>
    <small>{item.type}</small>
    <h3>{item.title}</h3>
    <p>{item.text}</p>
    <a href="#work">Смотреть проект <ArrowUpRight size={14}/></a>
   </div>
   <div className="marketplace-mockup"><ProductMockup kind={item.kind} large/></div>
   <button className="market-arrow next" onClick={next} aria-label="Следующая работа"><ChevronRight size={18}/></button>
  </div>
  <div className="marketplace-bottom">
   <div className="market-dots">{items.map((x,i)=><button key={x.title} className={i===index?'active':''} onClick={()=>setIndex(i)} aria-label={x.title}/>)}</div>
   <span>CONCEPTS / SELECTED DIGITAL PRODUCTS</span>
  </div>
 </section>
}
