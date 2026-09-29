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
 const ru=language==='ru'; const work=works.find(w=>w.id===id)||works[0]; const detail=ownDetails[work.title]
 const title=ru?work.ruTitle:work.title
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose?onClose():location.hash=''};document.body.style.overflow='hidden';addEventListener('keydown',onKey);return()=>{document.body.style.overflow='';removeEventListener('keydown',onKey)}},[onClose])
 return <div className="project-space">
  <div className="project-space-nav"><button onClick={()=>onClose?onClose():location.hash=''}><ArrowLeft size={16}/>{ru?'Назад':'Back'}</button><span>NEXUM / {ru?'PROJECT SPACE':'PROJECT SPACE'}</span><button onClick={()=>onClose?onClose():location.hash=''} aria-label="Close"><X size={17}/></button></div>
  <section className="project-space-hero">
   <div className="project-space-title"><small>{detail?(ru?'СОБСТВЕННЫЙ ПРОДУКТ':'OWN PRODUCT'):(ru?'ЦИФРОВОЙ ПРОДУКТ':'DIGITAL PRODUCT')} / {work.id}</small><h1>{title}</h1><p>{ru?work.ruDescription:work.description}</p><div className="project-space-tags"><span>{ru?work.ruCategory:work.category}</span>{detail&&<span>{ru?detail.ruRole:detail.role}</span>}</div></div>
   <div className="project-space-hero-mock"><ProductMockup kind={work.kind} large language={language}/></div>
  </section>
  <section className="project-space-grid">
   <div><small>01 / {ru?'ЗАДАЧА':'PROBLEM'}</small><p>{ru?'Собрать понятный цифровой продукт вокруг реального рабочего сценария, сохранив сложную бизнес-логику.':'Turn a real operational problem into a clear digital product without losing the underlying business logic.'}</p></div>
   <div><small>02 / {ru?'ПРОДУКТ':'PRODUCT'}</small><p>{ru?(detail?'Собственная разработка NEXUM с отдельной продуктовой логикой, интерфейсом и техническим фундаментом.':'Продуктовая система с ясной иерархией, адаптивным интерфейсом и переиспользуемыми сценариями.'):detail?'A NEXUM-built product with its own product logic, interface and technical foundation.':'A focused product system with clear hierarchy, responsive behavior and reusable interaction patterns.'}</p></div>
   <div><small>03 / {ru?'РЕЗУЛЬТАТ':'RESULT'}</small><p>{ru?work.ruResult:work.result}</p></div>
  </section>
  <section className="project-space-capabilities"><div><small>04 / {ru?'ВОЗМОЖНОСТИ':'CAPABILITIES'}</small><h2>{ru?'Из идеи — в работающую систему.':'From idea to working system.'}</h2></div><div className="project-feature-list">{(detail?(ru?detail.ruFeatures:detail.features):[ru?'Продуктовый UX':'Product UX',ru?'Адаптивный интерфейс':'Responsive interface',ru?'Интеграции и API':'Integrations and APIs',ru?'Тестирование сценариев':'Scenario testing']).map((x,i)=><div key={x}><span>0{i+1}</span><CheckCircle2 size={15}/><b>{x}</b></div>)}</div></section>
  <section className="project-space-stack"><div><small>05 / {ru?'ТЕХНОЛОГИИ':'STACK'}</small><h2>{ru?'Технологическая основа':'Technology foundation'}</h2></div><div className="project-stack-list">{(detail?detail.stack:tech).map(x=><span key={x}>{x}</span>)}</div></section>
  <section className="project-space-cta"><div><small>06 / {ru?'СЛЕДУЮЩИЙ ШАГ':'NEXT STEP'}</small><h2>{ru?<>Нужен похожий<br/><i>продукт?</i></>:<>Need a similar<br/><i>product?</i></>}</h2></div><a href="#contact">{ru?'Обсудить проект':'Discuss the project'} <ArrowUpRight size={16}/></a></section>
 </div>
}
