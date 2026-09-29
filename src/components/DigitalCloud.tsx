import {ArrowUpRight, Globe, Layers3, Sparkles, Workflow, X, CheckCircle2} from 'lucide-react'
import {useEffect,useState} from 'react'
import ProductMockup from './ProductMockup'
import ProjectSpace from './ProjectSpace'
import {services,works} from '../data/content'

type Language='ru'|'en'

const capabilities=[
 ['BUILD','СОЗДАТЬ','Build','Web, apps, SaaS, marketplaces and digital products.','Сайты, приложения, SaaS, маркетплейсы и цифровые продукты.','website'],
 ['INTELLIGENCE','ИНТЕЛЛЕКТ','Intelligence','AI agents, assistants, knowledge and research systems.','AI-агенты, ассистенты, знания и исследовательские системы.','ai'],
 ['CONNECT','СВЯЗАТЬ','Connect','APIs, CRM, payments, bots and external services.','API, CRM, платежи, боты и внешние сервисы.','platform'],
 ['OPERATE','АВТОМАТИЗИРОВАТЬ','Operate','Workflows, dashboards, analytics and internal tools.','Workflow, дашборды, аналитика и внутренние системы.','dashboard'],
] as const

const iconMap={website:Globe,ai:Sparkles,platform:Layers3,dashboard:Workflow}

export default function DigitalCloud({language}:{language:Language}){
 const [selectedService,setSelectedService]=useState<(typeof services)[number]|null>(null)
 const [selectedProject,setSelectedProject]=useState<(typeof works)[number]|null>(null)
 useEffect(()=>{const active=Boolean(selectedService||selectedProject);const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape'){setSelectedService(null);setSelectedProject(null)}};if(active)document.body.style.overflow='hidden';addEventListener('keydown',onKey);return()=>{document.body.style.overflow='';removeEventListener('keydown',onKey)}},[selectedService,selectedProject])
 const ru=language==='ru'
 const own=works
 const heroTitle=ru ? 'Не сайт агентства.' : 'Not an agency site.'
 const heroEmphasis=ru ? 'Цифровое облако.' : 'A digital cloud.'
 const introTitle=ru ? 'Мы собираем' : 'We build'
 const introEmphasis=ru ? 'цифровую инфраструктуру' : 'digital infrastructure'
 const introSuffix=ru ? ' вокруг задачи бизнеса.' : ' around the business problem.'
  const [activeServiceIndex,setActiveServiceIndex]=useState(0)
  const activeService=services[activeServiceIndex]
 return <div className="digital-cloud">
  <section className="cloud-hero" id="top">
   <div className="cloud-hero-copy">
    <div className="cloud-eyebrow"><span>NEXUM / DIGITAL</span><i>{ru?'DIGITAL DEVELOPMENT CLOUD':'DIGITAL DEVELOPMENT CLOUD'}</i></div>
    <h1>{heroTitle}<br/><em>{heroEmphasis}</em></h1>
    <p>{ru?'Пространство, где собраны разработка, AI, автоматизация, проекты и технологии NEXUM — от первого экрана до работающей системы.':'A digital space bringing development, AI, automation, projects and NEXUM technology together — from the first screen to a working system.'}</p>
    <div className="cloud-hero-actions"><a href="#services" className="cloud-primary">{ru?'Исследовать облако':'Explore the cloud'} <ArrowUpRight size={17}/></a><a href="#contact" className="cloud-secondary">{ru?'Начать проект':'Start a project'}</a></div>
    <div className="cloud-hero-system" aria-label={ru?'Система NEXUM':'NEXUM system'}>
      <div><span>01</span><b>CORE</b><small>{ru?'Интеллект':'Intelligence'}</small></div>
      <div><span>02</span><b>DEV</b><small>{ru?'Разработка':'Build'}</small></div>
      <div><span>03</span><b>DIGITAL</b><small>{ru?'Продукты':'Products'}</small></div>
      <div><span>04</span><b>PRODUCT</b><small>{ru?'Запуск':'Launch'}</small></div>
    </div>
   </div>
   <div className="cloud-orbit" aria-hidden="true">
    <div className="hero-glass-panel hero-glass-panel-a"><small>01 / CORE</small><b>INTELLIGENCE</b><span>AI · MEMORY · MODELS</span></div>
    <div className="hero-glass-panel hero-glass-panel-b"><small>02 / DEV</small><b>BUILD SYSTEM</b><span>CODE · PREVIEW · DEPLOY</span></div>
    <div className="orbit-core"><span>N.</span><small>NEXUM</small><b>01—04</b></div>
    <div className="orbit-line orbit-line-a"/><div className="orbit-line orbit-line-b"/><div className="orbit-line orbit-line-c"/>
    <span className="orbit-chip chip-a">AI</span><span className="orbit-chip chip-b">WEB</span><span className="orbit-chip chip-c">APP</span><span className="orbit-chip chip-d">SAAS</span><span className="orbit-chip chip-e">DATA</span>
    <div className="hero-glass-panel hero-glass-panel-c"><small>LIVE SYSTEM</small><b>04 PRODUCTS</b><span>CONNECTED / 24.09</span></div>
   </div>
  </section>

  <section className="cloud-intro">
   <div className="cloud-intro-index">00 / CLOUD</div>
   <div><p>{ru?'NEXUM DIGITAL — это не каталог отдельных услуг.':'NEXUM DIGITAL is not a catalogue of disconnected services.'}</p><h2>{introTitle} <i>{introEmphasis}</i>{introSuffix}</h2></div>
  </section>

  <section className="cloud-capabilities" id="services">
   <div className="cloud-section-head"><span>01 / CAPABILITIES</span><p>{ru?'Возможности облака':'What the cloud can build'}</p></div>
   <div className="capability-grid">{capabilities.map(([en,ruName,enName,enDesc,ruDesc,kind],i)=>{const Icon=iconMap[kind];return <article className="capability-card" key={en}>
    <div className="capability-card-top"><span>0{i+1}</span><Icon size={17}/></div>
    <div className="capability-mock"><ProductMockup kind={kind==='website'?'website':kind==='ai'?'ai':kind==='dashboard'?'dashboard':'platform'} language={language}/></div>
    <div className="capability-copy"><small>{ru?ruName:en}</small><h3>{ru?ruName:enName}</h3><p>{ru?ruDesc:enDesc}</p><a href="#contact">{ru?'Собрать решение':'Build this'} <ArrowUpRight size={14}/></a></div>
   </article>})}</div>
  </section>

  <section className="cloud-services">
   <div className="cloud-section-head"><span>02 / SERVICES</span><p>{ru?'Библиотека разработки':'Development library'}</p></div>
   <div className="cloud-service-stage">
 <div className="cloud-service-wall">{services.map((s,i)=><button type="button" key={s.n} className={`cloud-service-tile ${activeServiceIndex===i?'is-active':''}`} onMouseEnter={()=>setActiveServiceIndex(i)} onFocus={()=>setActiveServiceIndex(i)} onClick={()=>setSelectedService(s)}><span>{s.n}</span><div><small>{ru?s.ruType:s.type}</small><h3>{ru?s.ruTitle:s.title}</h3><p>{ru?s.ruText:s.text}</p><div>{(ru?s.ruTags:s.tags).map(tag=><b key={tag}>{tag}</b>)}</div></div><ArrowUpRight size={18}/></button>)}</div>
 <div className="cloud-service-preview" aria-live="polite"><div className="cloud-service-preview-top"><span>{activeService.n} / PREVIEW</span><span>{ru?'Живой модуль':'Live module'}</span></div><ProductMockup kind={activeService.kind} large language={language}/><div className="cloud-service-preview-copy"><small>{ru?activeService.ruType:activeService.type}</small><h3>{ru?activeService.ruTitle:activeService.title}</h3></div></div>
</div>
  </section>

  <section className="cloud-work" id="work">
   <div className="cloud-section-head"><span>03 / BUILT HERE</span><p>{ru?'Создано внутри NEXUM':'Built inside NEXUM'}</p></div>
   <div className="cloud-work-grid cloud-project-grid">{own.map((w,i)=><button type="button" className={`cloud-project cloud-project-${i+1}`} key={w.id} onClick={()=>setSelectedProject(w)}><div className="cloud-project-visual"><div className="project-glass-index">{String(i+1).padStart(2,'0')} / OWN PRODUCT</div><ProductMockup kind={w.kind} large language={language}/><div className="project-glass-reflection"/></div><div className="cloud-project-meta"><div><small>{ru?w.ruCategory:w.category}</small><h3>{ru?w.ruTitle:w.title}</h3><p>{ru?w.ruDescription:w.description}</p></div><ArrowUpRight/></div></button>)}</div>
  </section>

  <section className="cloud-library" id="library">
   <div className="cloud-section-head"><span>04 / LIBRARY</span><p>{ru?'Всё, что можем собрать':'Everything we can build'}</p></div>
   <div className="library-grid">
    {['WEB','MOBILE','AI','SAAS','CRM','MARKETPLACE','ECOMMERCE','DASHBOARD','TELEGRAM','API','AUTOMATION','INTERNAL TOOLS'].map((x,i)=><button key={x} className="library-pill" onClick={()=>document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}><span>0{String(i+1).padStart(2,'0')}</span><b>{x}</b><ArrowUpRight size={14}/></button>)}
   </div>
  </section>

  <section className="cloud-map" id="ecosystem">
   <div className="cloud-section-head"><span>05 / ECOSYSTEM</span><p>{ru?'Одна система':'One system'}</p></div>
   <div className="ecosystem-map">
    <div className="ecosystem-center"><b>NEXUM</b><span>{ru?'ТЕХНОЛОГИЧЕСКАЯ ЭКОСИСТЕМА':'TECHNOLOGY ECOSYSTEM'}</span></div>
    <div className="ecosystem-node node-core"><strong>CORE</strong><span>{ru?'Intelligence':'Intelligence'}</span></div>
    <div className="ecosystem-node node-dev"><strong>DEV</strong><span>{ru?'Build':'Build'}</span></div>
    <div className="ecosystem-node node-digital"><strong>DIGITAL</strong><span>{ru?'Develop':'Develop'}</span></div>
    <div className="ecosystem-node node-gruzli"><strong>GRUZLI</strong><span>{ru?'Product':'Product'}</span></div>
    <i className="eco-connector c1"/><i className="eco-connector c2"/><i className="eco-connector c3"/><i className="eco-connector c4"/>
   </div>
  </section>

  <section className="cloud-process" id="process">
   <div className="cloud-section-head"><span>06 / PROCESS</span><p>{ru?'Как работает облако':'How the cloud works'}</p></div>
   <div className="cloud-process-grid">{['DISCOVER','DESIGN','BUILD','CONNECT','LAUNCH','EVOLVE'].map((x,i)=><article key={x}><span>0{i+1}</span><b>{x}</b><p>{ru?['Задача и контекст.','UX и визуальная система.','Код и продуктовая логика.','AI, API и интеграции.','Запуск и проверка.','Развитие и оптимизация.'][i]:['Problem and context.','UX and visual system.','Code and product logic.','AI, APIs and integrations.','Launch and validation.','Evolution and optimization.'][i]}</p></article>)}</div>
  </section>

  <section className="cloud-cta" id="contact"><div><span>07 / START</span><h2>{ru?<>Что построим<br/><i>следующим?</i></>:<>What will we build<br/><i>next?</i></>}</h2></div><a href="mailto:hello@nexum.agency">{ru?'Начать проект':'Start a project'} <ArrowUpRight/></a></section>
  {selectedService&&<div className="cloud-service-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.currentTarget===e.target)setSelectedService(null)}}>
   <div className="cloud-service-modal" role="dialog" aria-modal="true" aria-label={ru?selectedService.ruTitle:selectedService.title}>
    <button className="cloud-service-close" onClick={()=>setSelectedService(null)} aria-label={ru?'Закрыть':'Close'}><X size={18}/></button>
    <div className="cloud-service-modal-visual"><ProductMockup kind={selectedService.kind} large language={language}/></div>
    <div className="cloud-service-modal-copy"><div className="cloud-modal-meta"><span>{selectedService.n}</span><span>{ru?selectedService.ruType:selectedService.type}</span></div><h2>{ru?selectedService.ruTitle:selectedService.title}</h2><p>{ru?selectedService.ruText:selectedService.text}</p><div className="cloud-modal-tags">{(ru?selectedService.ruTags:selectedService.tags).map(tag=><b key={tag}>{tag}</b>)}</div><div className="cloud-modal-capabilities"><span><CheckCircle2 size={14}/>{ru?'Product design':'Product design'}</span><span><CheckCircle2 size={14}/>{ru?'Engineering':'Engineering'}</span><span><CheckCircle2 size={14}/>{ru?'Launch checks':'Launch checks'}</span></div><a href="#contact" onClick={()=>setSelectedService(null)}>{ru?'Обсудить решение':'Discuss this solution'} <ArrowUpRight size={14}/></a></div>
   </div>
  </div>}
  {selectedProject&&<div className="project-space-backdrop" role="presentation" onMouseDown={e=>{if(e.currentTarget===e.target)setSelectedProject(null)}}><ProjectSpace id={selectedProject.id} language={language} onClose={()=>setSelectedProject(null)}/></div>}
 </div>
}
