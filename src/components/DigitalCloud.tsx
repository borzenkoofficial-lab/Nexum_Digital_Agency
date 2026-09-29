import {ArrowUpRight, Bot, Box, Code2, Globe, Layers3, Sparkles, Workflow} from 'lucide-react'
import ProductMockup from './ProductMockup'
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
 const ru=language==='ru'
 const own=works.filter(w=>['Nexum.dev','Nexum AI Core','Gruzli'].includes(w.title))
 return <div className="digital-cloud">
  <section className="cloud-hero" id="top">
   <div className="cloud-hero-copy">
    <div className="cloud-eyebrow"><span>NEXUM / DIGITAL</span><i>{ru?'DIGITAL DEVELOPMENT CLOUD':'DIGITAL DEVELOPMENT CLOUD'}</i></div>
    <h1>{ru?<>Не сайт агентства.<br/><em>Цифровое облако.</em></>:<>Not an agency site.<br/><em>A digital cloud.</em>}</h1>
    <p>{ru?'Пространство, где собраны разработка, AI, автоматизация, проекты и технологии NEXUM — от первого экрана до работающей системы.':'A digital space bringing development, AI, automation, projects and NEXUM technology together — from the first screen to a working system.'}</p>
    <div className="cloud-hero-actions"><a href="#services" className="cloud-primary">{ru?'Исследовать облако':'Explore the cloud'} <ArrowUpRight size={17}/></a><a href="#contact" className="cloud-secondary">{ru?'Начать проект':'Start a project'}</a></div>
   </div>
   <div className="cloud-orbit" aria-hidden="true">
    <div className="orbit-core"><span>N.</span><small>NEXUM</small></div>
    <div className="orbit-line orbit-line-a"/><div className="orbit-line orbit-line-b"/>
    <span className="orbit-chip chip-a">AI</span><span className="orbit-chip chip-b">WEB</span><span className="orbit-chip chip-c">APP</span><span className="orbit-chip chip-d">SAAS</span><span className="orbit-chip chip-e">DATA</span>
   </div>
  </section>

  <section className="cloud-intro">
   <div className="cloud-intro-index">00 / CLOUD</div>
   <div><p>{ru?'NEXUM DIGITAL — это не каталог отдельных услуг.':'NEXUM DIGITAL is not a catalogue of disconnected services.'}</p><h2>{ru?<>Мы собираем <i>цифровую инфраструктуру</i> вокруг задачи бизнеса.</>:<>We build <i>digital infrastructure</i> around the business problem.</>}</h2></div>
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
   <div className="cloud-service-wall">{services.map((s,i)=><article key={s.n} className="cloud-service-tile"><span>{s.n}</span><div><small>{ru?s.ruType:s.type}</small><h3>{ru?s.ruTitle:s.title}</h3><p>{ru?s.ruText:s.text}</p><div>{(ru?s.ruTags:s.tags).map(tag=><b key={tag}>{tag}</b>)}</div></div><ArrowUpRight size={18}/></article>)}</div>
  </section>

  <section className="cloud-work" id="work">
   <div className="cloud-section-head"><span>03 / BUILT HERE</span><p>{ru?'Создано внутри NEXUM':'Built inside NEXUM'}</p></div>
   <div className="cloud-work-grid">{own.map((w,i)=><a href={`#case/${w.id}`} className="cloud-project" key={w.id}><div className="cloud-project-visual"><ProductMockup kind={w.kind} large language={language}/><span>{String(i+1).padStart(2,'0')} / OWN PRODUCT</span></div><div className="cloud-project-meta"><div><small>{ru?w.ruCategory:w.category}</small><h3>{ru?w.ruTitle:w.title}</h3><p>{ru?w.ruDescription:w.description}</p></div><ArrowUpRight/></div></a>)}</div>
  </section>

  <section className="cloud-map" id="ecosystem">
   <div className="cloud-section-head"><span>04 / ECOSYSTEM</span><p>{ru?'Одна система':'One system'}</p></div>
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
   <div className="cloud-section-head"><span>05 / PROCESS</span><p>{ru?'Как работает облако':'How the cloud works'}</p></div>
   <div className="cloud-process-grid">{['DISCOVER','DESIGN','BUILD','CONNECT','LAUNCH','EVOLVE'].map((x,i)=><article key={x}><span>0{i+1}</span><b>{x}</b><p>{ru?['Задача и контекст.','UX и визуальная система.','Код и продуктовая логика.','AI, API и интеграции.','Запуск и проверка.','Развитие и оптимизация.'][i]:['Problem and context.','UX and visual system.','Code and product logic.','AI, APIs and integrations.','Launch and validation.','Evolution and optimization.'][i]}</p></article>)}</div>
  </section>

  <section className="cloud-cta" id="contact"><div><span>06 / START</span><h2>{ru?<>Что построим<br/><i>следующим?</i></>:<>What will we build<br/><i>next?</i></>}</h2></div><a href="mailto:hello@nexum.agency">{ru?'Начать проект':'Start a project'} <ArrowUpRight/></a></section>
 </div>
}
