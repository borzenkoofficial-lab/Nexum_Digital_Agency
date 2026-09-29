import {ArrowLeft,ArrowUpRight,CheckCircle2,X} from 'lucide-react'
import {works,tech} from '../data/content'
import ProductMockup from './ProductMockup'
import {useEffect} from 'react'
type Language='ru'|'en'
const ownDetails:Record<string,{role:string;ruRole:string;features:string[];ruFeatures:string[];stack:string[]}>={
 'Nexum.dev':{role:'AI development platform',ruRole:'AI-платформа разработки',features:['AI agent loop','Real preview','File and Git tools','AI gateway'],ruFeatures:['AI-агентный цикл','Рабочий preview','Файлы и Git','AI gateway'],stack:['React','TypeScript','Node.js','AI']},
 'Nexum AI Core':{role:'AI intelligence foundation',ruRole:'AI-ядро',features:['Models and providers','Memory','Research and sources','Evaluation'],ruFeatures:['Модели и провайдеры','Память','Исследования и источники','Оценка'],stack:['Python','FastAPI','Ollama','Qwen']},
 'Gruzli':{role:'Marketplace / operations',ruRole:'Маркетплейс / операции',features:['Customer → dispatcher → loader','Order feed','CRM and chats','Ratings and cartoteka'],ruFeatures:['Заказчик → диспетчер → грузчик','Лента заказов','CRM и чаты','Рейтинги и картотека'],stack:['React','TypeScript','PWA','APIs']}
}
export default function ProjectSpace({id,language,onClose}:{id:string;language:Language;onClose?:()=>void}){
 const ru=language==='ru';const work=works.find(w=>w.id===id)||works[0];const detail=ownDetails[work.title];const title=ru?work.ruTitle:work.title
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose?onClose():location.hash=''};document.body.style.overflow='hidden';addEventListener('keydown',onKey);return()=>{document.body.style.overflow='';removeEventListener('keydown',onKey)}},[onClose])
 return <div className="project-space">
  <div className="project-space-nav"><button onClick={()=>onClose?onClose():location.hash=''}><ArrowLeft size={16}/>{ru?'Назад':'Back'}</button><div className="project-space-breadcrumb"><span>NEXUM</span><i>/</i><b>{ru?'PRODUCT SPACE':'PRODUCT SPACE'}</b><i>/</i><span>{work.id}</span></div><button onClick={()=>onClose?onClose():location.hash=''} aria-label="Close"><X size={17}/></button></div>
  <section className="project-space-hero">
   <div className="project-space-title"><small>{detail?(ru?'СОБСТВЕННЫЙ ПРОДУКТ':'OWN PRODUCT'):(ru?'ЦИФРОВОЙ ПРОДУКТ':'DIGITAL PRODUCT')} / {work.id}</small><h1>{title}</h1><p>{ru?work.ruDescription:work.description}</p><div className="project-space-tags"><span>{ru?work.ruCategory:work.category}</span>{detail&&<span>{ru?detail.ruRole:detail.role}</span>}<span>{ru?'PRODUCT SPACE':'PRODUCT SPACE'}</span></div></div>
   <div className="project-space-hero-mock"><ProductMockup kind={work.kind} large language={language}/><div className="project-space-orbit"/><div className="project-space-orbit orbit-2"/></div>
  </section>
  <section className="project-space-grid">
   <div><small>01 / {ru?'ЗАДАЧА':'PROBLEM'}</small><h3>{ru?'Сценарий':'Scenario'}</h3><p>{ru?'Собрать понятный цифровой продукт вокруг реального рабочего сценария, сохранив сложную бизнес-логику.':'Turn a real operational problem into a clear digital product without losing the underlying business logic.'}</p></div>
   <div><small>02 / {ru?'ПРОДУКТ':'PRODUCT'}</small><h3>{ru?'Система':'System'}</h3><p>{ru?(detail?'Собственная разработка NEXUM с отдельной продуктовой логикой, интерфейсом и техническим фундаментом.':'Продуктовая система с ясной иерархией, адаптивным интерфейсом и переиспользуемыми сценариями.'):detail?'A NEXUM-built product with its own product logic, interface and technical foundation.':'A focused product system with clear hierarchy, responsive behavior and reusable interaction patterns.'}</p></div>
   <div><small>03 / {ru?'РЕЗУЛЬТАТ':'RESULT'}</small><h3>{ru?'Что создано':'What was built'}</h3><p>{ru?work.ruResult:work.result}</p></div>
  </section>
  <section className="project-space-capabilities"><div><small>04 / {ru?'ВОЗМОЖНОСТИ':'CAPABILITIES'}</small><h2>{ru?'Из идеи — в работающую систему.':'From idea to working system.'}</h2><p>{ru?'Каждый Product Space показывает не только экран, но и слой продукта за ним.':'Every Product Space exposes the product layer behind the interface.'}</p></div><div className="project-feature-list">{(detail?(ru?detail.ruFeatures:detail.features):[ru?'Продуктовый UX':'Product UX',ru?'Адаптивный интерфейс':'Responsive interface',ru?'Интеграции и API':'Integrations and APIs',ru?'Тестирование сценариев':'Scenario testing']).map((x,i)=><div key={x}><span>0{i+1}</span><CheckCircle2 size={15}/><b>{x}</b></div>)}</div></section>
  <section className="project-space-stack"><div><small>05 / {ru?'ТЕХНОЛОГИИ':'STACK'}</small><h2>{ru?'Технологическая основа':'Technology foundation'}</h2></div><div className="project-stack-list">{(detail?detail.stack:tech).map(x=><span key={x}>{x}</span>)}</div></section>
  <section className="project-space-cta"><div><small>06 / {ru?'СЛЕДУЮЩИЙ ШАГ':'NEXT STEP'}</small><h2>{ru?<>Создадим похожую<br/><i>систему?</i></>:<>Build a similar<br/><i>system?</i></>}</h2><p>{ru?'Перенесём логику этого продукта в вашу задачу и соберём новый digital system.':'We can translate this product logic into your own digital system.'}</p></div><a href="#start">{ru?'Начать проект':'Start a project'} <ArrowUpRight size={16}/></a></section>
 </div>
}