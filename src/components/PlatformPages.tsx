import { useMemo, useState } from 'react'
import { ArrowRight, ArrowUpRight, BarChart3, Bell, Check, CircleHelp, Clock3, Code2, CreditCard, FileText, Filter, Heart, Layers3, LockKeyhole, MapPin, MessageCircle, PackageCheck, Palette, Search, ShieldCheck, ShoppingBag, Sparkles, Star, UserRound, Users, WandSparkles, X, Zap } from 'lucide-react'
import { works } from '../data/content'
import StartProjectPage from './StartProjectPage'
import ShowcaseGallery from './ShowcaseGallery'

export type Language = 'ru' | 'en'
type Service = { id:string; category:string; ruCategory:string; title:string; ruTitle:string; description:string; ruDescription:string; from:number; timeline:string; icon:typeof Code2; tags:string[] }

const services: Service[] = [
 {id:'web',category:'DEVELOPMENT',ruCategory:'РАЗРАБОТКА',title:'Websites & landing pages',ruTitle:'Сайты и лендинги',description:'Premium marketing sites and conversion-focused digital experiences.',ruDescription:'Имиджевые и коммерческие сайты с сильной подачей продукта.',from:80000,timeline:'7–21 days',icon:Code2,tags:['Landing','Corporate','E-commerce']},
 {id:'app',category:'DEVELOPMENT',ruCategory:'РАЗРАБОТКА',title:'Web applications & SaaS',ruTitle:'Веб-приложения и SaaS',description:'Dashboards, marketplaces, CRM and complex product workflows.',ruDescription:'Личные кабинеты, маркетплейсы, CRM и сложные продуктовые сценарии.',from:300000,timeline:'30–90 days',icon:Layers3,tags:['SaaS','CRM','PWA']},
 {id:'mobile',category:'DEVELOPMENT',ruCategory:'РАЗРАБОТКА',title:'Mobile applications',ruTitle:'Мобильные приложения',description:'iOS, Android and mobile-first product experiences.',ruDescription:'Приложения для iOS, Android и mobile-first продукты.',from:280000,timeline:'45–120 days',icon:Zap,tags:['iOS','Android','PWA']},
 {id:'ai',category:'AI',ruCategory:'AI',title:'AI agents & automation',ruTitle:'AI-агенты и автоматизация',description:'Agents, copilots and workflow automation for real business tasks.',ruDescription:'AI-агенты, ассистенты и автоматизация под реальные бизнес-задачи.',from:180000,timeline:'14–45 days',icon:Sparkles,tags:['Agents','RAG','Tools']},
 {id:'rag',category:'AI',ruCategory:'AI',title:'AI knowledge systems',ruTitle:'AI knowledge systems',description:'RAG, internal search, model integration and knowledge layers.',ruDescription:'RAG, внутренний поиск, интеграция моделей и knowledge layer.',from:220000,timeline:'21–60 days',icon:WandSparkles,tags:['RAG','Search','Memory']},
 {id:'design',category:'DESIGN',ruCategory:'ДИЗАЙН',title:'UI/UX & design systems',ruTitle:'UI/UX и дизайн-системы',description:'Product flows and scalable interface systems.',ruDescription:'Сценарии продукта и дизайн-системы для масштабирования.',from:90000,timeline:'7–30 days',icon:Palette,tags:['UI/UX','Systems','Prototype']},
 {id:'brand',category:'DESIGN',ruCategory:'ДИЗАЙН',title:'Branding & identity',ruTitle:'Брендинг и айдентика',description:'Identity, visual language, decks and launch assets.',ruDescription:'Айдентика, визуальный язык, презентации и материалы запуска.',from:70000,timeline:'7–21 days',icon:Sparkles,tags:['Brand','Logo','Guidelines']},
 {id:'creative',category:'3D / CREATIVE',ruCategory:'3D / КРЕАТИВ',title:'3D, motion & video',ruTitle:'3D, motion и видео',description:'3D scenes, product visualisation, motion and digital campaigns.',ruDescription:'3D-сцены, визуализации, motion и рекламный контент.',from:60000,timeline:'7–30 days',icon:PackageCheck,tags:['3D','Motion','Video']},
 {id:'business',category:'BUSINESS',ruCategory:'БИЗНЕС',title:'Business automation',ruTitle:'Автоматизация бизнеса',description:'CRM, internal systems and integrations.',ruDescription:'CRM, внутренние системы и интеграции.',from:160000,timeline:'21–90 days',icon:BarChart3,tags:['CRM','Automation','API']},
 {id:'marketing',category:'MARKETING',ruCategory:'МАРКЕТИНГ',title:'Growth & performance',ruTitle:'Рост и performance',description:'SEO, content systems and conversion optimisation.',ruDescription:'SEO, контентные системы и оптимизация конверсии.',from:50000,timeline:'14–60 days',icon:Zap,tags:['SEO','Content','CRO']}
]


const categories = [
 ['DEVELOPMENT','Разработка',Code2],['AI','AI',Sparkles],['DESIGN','Дизайн',Palette],['3D / CREATIVE','3D / Creative',Layers3],['BUSINESS','Бизнес',BarChart3],['MARKETING','Маркетинг',Zap]
] as const

const experts = [
 {name:'NEXUM Studio',role:'Digital product team',rating:5,jobs:128,location:'Remote',initials:'N'},
 {name:'NEXUM AI Lab',role:'AI systems & agents',rating:4.9,jobs:76,location:'Remote',initials:'AI'},
 {name:'Northstar Design',role:'Product design studio',rating:4.9,jobs:109,location:'Europe',initials:'N'},
 {name:'Forge Engineering',role:'Web & backend engineering',rating:4.8,jobs:91,location:'Remote',initials:'F'}
]

function go(hash:string){ location.hash = hash.startsWith('#') ? hash : '#'+hash }
function t<T>(ru:boolean,a:T,b:T){ return ru ? a : b }
function money(value:number,ru:boolean){ return ru ? value.toLocaleString('ru-RU')+' ₽' : '€'+Math.max(1,Math.round(value/90)).toLocaleString('en-US') }

function DigitalGlobe(){
 return <div className="nxp-globe-scene" aria-label="NEXUM digital network">
  <div className="nxp-globe-halo"/>
  <div className="nxp-globe">
   <div className="nxp-globe-lat l1"/><div className="nxp-globe-lat l2"/><div className="nxp-globe-lat l3"/>
   <div className="nxp-globe-lon l1"/><div className="nxp-globe-lon l2"/><div className="nxp-globe-lon l3"/>
   {Array.from({length:18},(_,i)=><i key={i} style={{left:`${12+(i%6)*14}%`,top:`${16+Math.floor(i/6)*23+(i%3)*4}%`}}/>)}
  </div>
  <span className="nxp-globe-label g1">AI SYSTEMS</span><span className="nxp-globe-label g2">WEB</span><span className="nxp-globe-label g3">MOBILE</span><span className="nxp-globe-label g4">DATA</span>
  <div className="nxp-globe-orbit o1"/><div className="nxp-globe-orbit o2"/>
 </div>
}
function Visual({tone='blue',label='NEXUM',sub='DIGITAL SYSTEM'}:{tone?:string;label?:string;sub?:string}){
 return <div className={'nxp-visual nxp-tone-'+tone}>
  <div className="nxp-liquid-glass nxp-glass-a"/><div className="nxp-liquid-glass nxp-glass-b"/>
  <div className="nxp-visual-grid"/><div className="nxp-visual-orbit nxp-orbit-a"/><div className="nxp-visual-orbit nxp-orbit-b"/>
  <div className="nxp-visual-3d-orb"><i/><i/><i/><i/><i/><i/></div>
  <div className="nxp-visual-ring nxp-ring-a"/><div className="nxp-visual-ring nxp-ring-b"/>
  <div className="nxp-visual-panel"><span>{label}</span><b>{sub}</b><i/><i/><i/></div>
  <div className="nxp-visual-code"><span>01</span><span>AI</span><span>WEB</span></div>
  <div className="nxp-visual-cursor">↗</div>
 </div>
}
function GlassOrb({label='NEXUM',tone='blue'}:{label?:string;tone?:string}){return <div className={'nxp-glass-orb nxp-tone-'+tone} aria-hidden="true"><span/><i/><b>{label}</b></div>}

function ProductStage({label='DIGITAL PRODUCT',tone='blue'}:{label?:string;tone?:string}){return <div className="nxp-product-stage"><div className="nxp-stage-backdrop"/><div className="nxp-stage-card"><div className="nxp-stage-top"><span/><span/><span/><small>{label}</small></div><div className="nxp-stage-body"><div className="nxp-stage-sidebar"/><div className="nxp-stage-content"><i/><i/><i/><i/></div></div></div><GlassOrb label="AI" tone={tone}/><div className="nxp-stage-ring"/></div>}
function Head({eyebrow,title,copy,action}:{eyebrow:string;title:React.ReactNode;copy?:React.ReactNode;action?:React.ReactNode}){
 return <div className="nxp-section-head"><div><small>{eyebrow}</small><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>{action}</div>
}
function Hero({eyebrow,title,copy}:{eyebrow:string;title:React.ReactNode;copy:string}){
 return <section className="nxp-page-hero"><small>{eyebrow}</small><h1>{title}</h1><p>{copy}</p></section>
}
function Field({label,children}:{label:string;children:React.ReactNode}){ return <label className="nxp-field"><span>{label}</span>{children}</label> }

function Home({language}:{language:Language}){
 const ru=language==='ru'
 return <main className="nxp-page nxp-home-redesign">
  <section className="nxp-home-hero">
   <div className="nxp-home-hero-copy">
    <div className="nxp-home-kicker">
     <span>NEXUM DIGITAL</span>
     <i><span className="nxp-live-dot"/> {ru?'ЦИФРОВЫЕ ПРОДУКТЫ':'DIGITAL PRODUCTS'}</i>
    </div>
    <h1>{ru?<>Создаём<br/><em>цифровые системы.</em></>:<>Digital systems.<br/><em>Built to move.</em></>}</h1>
    <p>{t(ru,'Сайты, продукты, AI и автоматизация — от первой идеи до работающего решения.','Websites, products, AI and automation — from the first idea to a working solution.')}</p>
    <div className="nxp-actions">
     <button className="nxp-button nxp-button-dark" onClick={()=>go('#start')}>{t(ru,'Начать проект','Start a project')} <ArrowUpRight/></button>
     <button className="nxp-button nxp-button-light" onClick={()=>go('#marketplace')}>{t(ru,'Смотреть решения','Explore solutions')} <ArrowRight/></button>
    </div>
    <div className="nxp-home-metrics">
     <span><b>WEB</b><small>{t(ru,'продукты','products')}</small></span>
     <span><b>AI</b><small>{t(ru,'системы','systems')}</small></span>
     <span><b>3D</b><small>{t(ru,'опыт','experience')}</small></span>
     <span><b>AUTO</b><small>{t(ru,'автоматизация','automation')}</small></span>
    </div>
   </div>
   <div className="nxp-home-hero-stage">
    <div className="nxp-home-stage-glow"/>
    <div className="nxp-home-browser">
     <div className="nxp-home-browser-top"><i/><i/><i/><span>NEXUM / PRODUCT SYSTEM</span></div>
     <div className="nxp-home-browser-body">
      <div>
       <small>01 / PLATFORM</small>
       <strong>{ru?'Цифровой продукт':'Digital product'}</strong>
       <p>{ru?'Интерфейс, AI и данные в одной системе.':'Interface, AI and data in one system.'}</p>
      </div>
      <div className="nxp-home-browser-chart"><i/><i/><i/><i/><b>AI</b></div>
     </div>
    </div>
    <div className="nxp-home-phone">
     <div className="nxp-home-phone-screen">
      <small>NEXUM AI</small>
      <b>{ru?'Готово':'Ready'}</b>
      <i/><i/><i/>
      <span>↗</span>
     </div>
    </div>
    <div className="nxp-home-glass-card">
     <small>AI / AUTOMATION</small>
     <b>24 / 7</b>
     <span>{ru?'Рабочий контур':'Operating layer'}</span>
    </div>
    <div className="nxp-home-orbit"/>
   </div>
  </section>
  <ShowcaseGallery language={language}/>
  <section className="nxp-trust-rail">
   <span>{t(ru,'Один вход. Несколько способов получить результат.','One entry point. Services, products and AI for business.')}</span>
   <div><b>01</b><span>DISCOVER</span><i/><b>02</b><span>BUILD</span><i/><b>03</b><span>LAUNCH</span></div>
  </section>
  <section className="nxp-home-system">
   <div className="nxp-home-system-head">
    <div>
     <small>01 / WHAT WE BUILD</small>
     <h2>{t(ru,<>Не набор услуг.<br/><em>Цифровая система.</em></>,<>Not a list of services.<br/><em>A digital system.</em>)}</h2>
    </div>
    <p>{t(ru,'Мы соединяем дизайн, разработку, AI и автоматизацию в один продуктовый контур — без лишних слоёв и посредников.','We connect design, engineering, AI and automation into one product system — without unnecessary layers.')}</p>
   </div>
   <div className="nxp-home-capability-grid">
    {[
     ['01','WEB','Сайты и web-продукты','Sites, platforms and web products','blue'],
     ['02','AI','AI-системы','Agents, copilots and AI infrastructure','violet'],
     ['03','APP','Приложения','Mobile and cross-platform products','green'],
     ['04','3D','3D / Motion','Product visuals, 3D and motion','violet']
    ].map(([n,k,ruTitle,enTitle,tone])=>
     <button key={k} className="nxp-home-capability" onClick={()=>go(k==='AI'?'#ai':k==='3D'?'#solutions':'#services')}>
      <div className="nxp-home-capability-visual"><Visual tone={tone} label={k} sub={ru?ruTitle:enTitle}/></div>
      <div className="nxp-home-capability-meta"><span>{n}</span><b>{ru?ruTitle:enTitle}</b><ArrowUpRight size={17}/></div>
     </button>
    )}
   </div>
  </section>

  <section className="nxp-home-ai">
   <div className="nxp-home-ai-art">
    <div className="nxp-home-ai-halo"/>
    <GlassOrb label="AI" tone="violet"/>
    <div className="nxp-home-ai-ring r1"/><div className="nxp-home-ai-ring r2"/>
    <div className="nxp-home-ai-chip c1">CONTEXT</div><div className="nxp-home-ai-chip c2">TOOLS</div><div className="nxp-home-ai-chip c3">MEMORY</div>
   </div>
   <div className="nxp-home-ai-copy">
    <small>02 / AI CORE</small>
    <h2>{t(ru,<>AI, который<br/><em>делает работу.</em></>,<>AI that<br/><em>does the work.</em>)}</h2>
    <p>{t(ru,'От первого запроса до результата: AI понимает задачу, предлагает план и помогает собрать рабочий продукт.','From the first brief to delivery: AI understands the task, plans the work and helps build the product.')}</p>
    <div className="nxp-home-ai-points"><span><b>01</b>{t(ru,'Понимает контекст','Understands context')}</span><span><b>02</b>{t(ru,'Работает с инструментами','Works with tools')}</span><span><b>03</b>{t(ru,'Проверяет результат','Checks the result')}</span></div>
    <button className="nxp-button nxp-button-dark" onClick={()=>go('#ai')}><Sparkles/> {t(ru,'Открыть NEXUM AI','Open NEXUM AI')} <ArrowUpRight/></button>
   </div>
  </section>

  <section className="nxp-home-work">
   <div className="nxp-home-work-head">
    <div><small>03 / SELECTED WORK</small><h2>{t(ru,<>Продукты, которые<br/><em>можно показать.</em></>,<>Products worth<br/><em>showing.</em>)}</h2></div>
    <button className="nxp-outline-link" onClick={()=>go('#work')}>{t(ru,'Все проекты','All projects')} <ArrowUpRight/></button>
   </div>
   <div className="nxp-home-work-grid">
    {works.slice(0,3).map((w,i)=>
     <button key={w.id} className="nxp-home-work-card" onClick={()=>go('#case/'+w.id)}>
      <Visual tone={i===1?'violet':i===2?'green':'blue'} label={w.category} sub={ru?w.ruTitle:w.title}/>
      <div className="nxp-home-work-info"><small>{ru?w.ruCategory:w.category}</small><h3>{ru?w.ruTitle:w.title}</h3><p>{ru?w.ruDescription:w.description}</p><span>{t(ru,'Открыть проект','Open project')} <ArrowUpRight size={15}/></span></div>
     </button>
    )}
   </div>
  </section>

  <section className="nxp-home-business">
   <div className="nxp-home-business-copy">
    <small>04 / BUSINESS</small>
    <h2>{t(ru,<>Ваш бизнес.<br/><em>Одна система.</em></>,<>Your business.<br/><em>One system.</em></>)}</h2>
    <p>{t(ru,'Корпоративные сайты, внутренние платформы, CRM, AI и автоматизация — проектируем как единую инфраструктуру.','Corporate sites, internal platforms, CRM, AI and automation — designed as one infrastructure.')}</p>
    <div className="nxp-home-business-tags"><span>WEB</span><span>CRM</span><span>AI</span><span>AUTOMATION</span></div>
    <button className="nxp-button nxp-button-light" onClick={()=>go('#business')}>{t(ru,'Решения для бизнеса','Business solutions')} <ArrowUpRight/></button>
   </div>
   <div className="nxp-home-business-stage"><ProductStage label="BUSINESS OS" tone="blue"/><GlassOrb label="B2B" tone="green"/><div className="nxp-home-business-float"><small>OPERATING LAYER</small><b>WEB · AI · CRM</b><span>ONE SYSTEM</span></div></div>
  </section>

  <section className="nxp-home-final">
   <div className="nxp-home-final-art"><div className="nxp-home-final-glow"/><GlassOrb label="N" tone="violet"/><div className="nxp-home-final-orbit"/></div>
   <div className="nxp-home-final-copy">
    <small>05 / START</small>
    <h2>{t(ru,<>Есть идея?<br/><em>Соберём.</em></>,<>Have an idea?<br/><em>Let's build.</em>)}</h2>
    <p>{t(ru,'Расскажите, что хотите запустить. Дальше соберём структуру, визуал и план разработки.','Tell us what you want to launch. We will shape the structure, visual direction and build plan.')}</p>
    <div><button className="nxp-button nxp-button-dark" onClick={()=>go('#start')}>{t(ru,'Начать проект','Start a project')} <ArrowUpRight/></button><button className="nxp-button nxp-button-light" onClick={()=>go('#solutions')}>{t(ru,'Смотреть решения','Explore solutions')} <ArrowRight/></button></div>
   </div>
  </section>
 </main>
}
function ServicesCatalog({language}:{language:Language}){
 const ru=language==='ru'
 const initialCategory=new URLSearchParams(location.hash.split('?')[1]||'').get('category')||'ALL'
 const [category,setCategory]=useState(initialCategory)
 const [query,setQuery]=useState('')
 const [sort,setSort]=useState('popular')
 const visible=useMemo(()=>{
  let list=services.filter((item)=>(category==='ALL'||item.category===category)&&(item.title+' '+item.description+' '+item.tags.join(' ')).toLowerCase().includes(query.toLowerCase()))
  if(sort==='price') list=list.slice().sort((a,b)=>a.from-b.from)
  if(sort==='name') list=list.slice().sort((a,b)=>a.title.localeCompare(b.title))
  return list
 },[category,query,sort])
 return <main className="nxp-page nxp-catalog-page">
  <Hero eyebrow="01 / SERVICES" title={ru?'Услуги NEXUM.':'NEXUM services.'} copy={ru?'Каталог направлений с поиском, фильтрацией и понятным путём к заказу.':'A service catalogue with search, filters and a clear path to order.'}/>
  <section className="nxp-section">
   <div className="nxp-toolbar"><div className="nxp-searchbox"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={ru?'Поиск услуг':'Search services'}/></div><select value={sort} onChange={e=>setSort(e.target.value)}><option value="popular">{ru?'Популярные':'Popular'}</option><option value="price">{ru?'По цене':'Price'}</option><option value="name">{ru?'По названию':'Name'}</option></select></div>
   <div className="nxp-filter-row"><button className={category==='ALL'?'active':''} onClick={()=>setCategory('ALL')}>{ru?'Все':'All'}</button>{categories.map(([key,label])=><button key={key} className={category===key?'active':''} onClick={()=>setCategory(key)}>{ru?label:key}</button>)}</div>
   <div className="nxp-service-list">{visible.map(item=>{const Icon=item.icon;return <button key={item.id} className="nxp-service-card" onClick={()=>go('#service/'+item.id)}><div className="nxp-service-icon"><Icon size={20}/></div><div><small>{ru?item.ruCategory:item.category}</small><h3>{ru?item.ruTitle:item.title}</h3><p>{ru?item.ruDescription:item.description}</p><div className="nxp-tag-row">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="nxp-service-aside"><b>{ru?'от':'from'} {money(item.from,ru)}</b><span><Clock3 size={13}/>{item.timeline}</span><ArrowUpRight/></div></button>})}</div>
  </section>
 </main>
}

function SolutionsPage({language}:{language:Language}){
 const ru=language==='ru'
 const [active,setActive]=useState('ALL')
 const groups=[
  {id:'ALL',ru:'Все решения',en:'All solutions'},
  {id:'DEVELOPMENT',ru:'Разработка',en:'Development'},
  {id:'AI',ru:'AI',en:'AI'},
  {id:'DESIGN',ru:'Дизайн',en:'Design'},
  {id:'3D / CREATIVE',ru:'3D / Creative',en:'3D / Creative'},
  {id:'BUSINESS',ru:'Бизнес',en:'Business'},
  {id:'MARKETING',ru:'Маркетинг',en:'Marketing'}
 ]
 const visible=active==='ALL'?services:services.filter(x=>x.category===active)
 return <main className="nxp-page nxp-solutions-page">
  <section className="nxp-solutions-hero">
   <div className="nxp-solutions-hero-copy">
    <small>02 / NEXUM SOLUTIONS</small>
    <h1>{ru?<>Не каталог.<br/><em>Готовые направления.</em></>:<>Not a marketplace.<br/><em>Clear ways forward.</em></>}</h1>
    <p>{t(ru,'Мы не продаём случайный набор услуг. Выберите направление — NEXUM соберёт под задачу нужную команду, технологию и формат работы.','We do not sell a random list of services. Choose a direction — NEXUM assembles the right team, technology and delivery model.')}</p>
    <div className="nxp-solutions-hero-meta"><span>WEB</span><span>AI</span><span>PRODUCT</span><span>3D</span><span>AUTOMATION</span></div>
   </div>
   <div className="nxp-solutions-hero-art" aria-hidden="true">
    <div className="nxp-solutions-art-core"><span>N</span></div>
    <div className="nxp-solutions-art-ring r1"/><div className="nxp-solutions-art-ring r2"/><div className="nxp-solutions-art-ring r3"/>
    <div className="nxp-solutions-art-label l1">01 / DIGITAL</div><div className="nxp-solutions-art-label l2">02 / AI</div><div className="nxp-solutions-art-label l3">03 / SYSTEMS</div>
   </div>
  </section>
  <section className="nxp-section nxp-solutions-list">
   <div className="nxp-solutions-switcher">{groups.map(g=><button key={g.id} className={active===g.id?'active':''} onClick={()=>setActive(g.id)}>{ru?g.ru:g.en}</button>)}</div>
   <div className="nxp-solutions-grid">{visible.map((item,i)=>{const Icon=item.icon;return <article className="nxp-solution-card" key={item.id}>
    <div className="nxp-solution-card-top"><span>0{String(i+1).padStart(2,'0')}</span><Icon size={18}/></div>
    <div className="nxp-solution-card-index">{item.category}</div>
    <h2>{ru?item.ruTitle:item.title}</h2>
    <p>{ru?item.ruDescription:item.description}</p>
    <div className="nxp-solution-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
    <div className="nxp-solution-bottom"><span>{ru?'от':'from'} {money(item.from,ru)}</span><span>{item.timeline}</span><button onClick={()=>go('#service/'+item.id)}>{ru?'Открыть':'Explore'} <ArrowUpRight/></button></div>
   </article>})}</div>
  </section>
  <section className="nxp-solutions-process"><div><small>03 / DELIVERY</small><h2>{t(ru,<>От идеи<br/><em>до работающего продукта.</em></>,<>From an idea<br/><em>to a working product.</em></>)}</h2></div><div className="nxp-solutions-steps"><div><b>01</b><strong>DISCOVER</strong><span>{t(ru,'Разбираем задачу и определяем результат.','We frame the problem and define the outcome.')}</span></div><div><b>02</b><strong>BUILD</strong><span>{t(ru,'Проектируем, разрабатываем и соединяем системы.','We design, build and connect the systems.')}</span></div><div><b>03</b><strong>LAUNCH</strong><span>{t(ru,'Запускаем и передаём рабочий digital-контур.','We launch and hand over a working digital system.')}</span></div></div></section>
  <section className="nxp-cta-section"><small>04 / START</small><h2>{t(ru,<>Есть задача?<br/><em>Опишем решение.</em></>,<>Have a brief?<br/><em>Let's shape it.</em></>)}</h2><p>{t(ru,'Опишите результат своими словами. NEXUM предложит подходящий формат работы.','Describe the outcome in your own words. NEXUM will propose the right delivery model.')}</p><button className="nxp-button nxp-button-dark" onClick={()=>go('#start')}>{t(ru,'Начать проект','Start a project')} <ArrowUpRight/></button></section>
 </main>
}
function AIPage({language}:{language:Language}){
 const ru=language==='ru',[prompt,setPrompt]=useState(''),[submitted,setSubmitted]=useState(false)
 return <main className="nxp-page nxp-ai-page">
  <div className="nxp-page-scene"><Visual tone="violet" label="NEXUM AI" sub="AGENT SYSTEM"/></div>
  <Hero eyebrow="03 / NEXUM AI" title={ru?'Опишите задачу.':'Describe the task.'} copy={ru?'AI-контур соединяет задачу с продуктом, услугой или специалистом.':'The AI layer connects a brief to a product, service or expert.'}/>
  <section className="nxp-ai-workspace"><div className="nxp-ai-workspace-head"><div><span><span className="nxp-live-dot"/> NEXUM AI / ONLINE</span><small>CONTEXTUAL DISCOVERY</small></div><ShieldCheck size={16}/></div><textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder={ru?'Например: нужен сайт и AI-ассистент для отдела продаж.':'Example: I need a website and AI assistant for sales.'}/><div className="nxp-ai-suggestions">{[ru?'Создать сайт':'Create a website',ru?'Найти специалиста':'Find an expert',ru?'Автоматизировать процесс':'Automate a process',ru?'Создать презентацию':'Create a presentation'].map(x=><button key={x} onClick={()=>setPrompt(x)}>{x}</button>)}</div><button className="nxp-button nxp-button-dark nxp-ai-submit" onClick={()=>setSubmitted(Boolean(prompt.trim()))} disabled={!prompt.trim()}><Sparkles/> {ru?'Найти решение':'Find a solution'} <ArrowRight/></button>{submitted&&<div className="nxp-ai-results-large"><button onClick={()=>go('#marketplace')}><small>SOLUTION</small><h3>Web product + AI</h3><p>{ru?'Собрать web-продукт, AI-слой и автоматизацию.':'Build the web product, AI layer and automation.'}</p><ArrowUpRight/></button><button onClick={()=>go('#experts')}><small>EXPERT</small><h3>NEXUM AI Lab</h3><p>4.9 · 76 projects</p><ArrowUpRight/></button></div>}</section>
 </main>
}

function BusinessPage({language}:{language:Language}){
 const ru=language==='ru'
 const capabilities=ru
  ? ['AI и автоматизация','Корпоративные web-системы','CRM и аналитика','Внутренние платформы','Интеграции','Поддержка и развитие']
  : ['AI & automation','Corporate web systems','CRM & analytics','Internal platforms','Integrations','Support & growth']
 const [sent,setSent]=useState(false)
 const [form,setForm]=useState({name:'',email:'',task:''})
 const up=(k:string,v:string)=>setForm(f=>({...f,[k]:v}))
 return <main className="nxp-page nxp-business-page-v2">
  <section className="nxp-business-v2-hero">
   <div className="nxp-business-v2-copy">
    <small>04 / NEXUM FOR BUSINESS</small>
    <h1>{t(ru,<>Цифровая система<br/><em>для вашего бизнеса.</em></>,<>A digital system<br/><em>built for business.</em></>)}</h1>
    <p>{t(ru,'Не набор подрядчиков. Один технологический контур: стратегия, дизайн, разработка, AI и автоматизация.', 'One technology layer: strategy, design, development, AI and automation.')}</p>
    <div className="nxp-business-v2-actions">
     <button className="nxp-button nxp-button-dark" onClick={()=>document.getElementById('business-contact')?.scrollIntoView({behavior:'smooth'})}>{t(ru,'Обсудить задачу','Discuss a project')} <ArrowUpRight/></button>
     <button className="nxp-outline-link" onClick={()=>go('#work')}>{t(ru,'Смотреть проекты','View projects')} <ArrowUpRight/></button>
    </div>
   </div>
   <div className="nxp-business-v2-stage">
    <ProductStage label="NEXUM BUSINESS" tone="blue"/>
    <GlassOrb label="AI" tone="violet"/>
    <div className="nxp-business-v2-float"><small>OPERATING LAYER</small><b>WEB · AI · CRM</b><span>ONE SYSTEM</span></div>
   </div>
  </section>

  <section className="nxp-business-v2-capabilities nxp-section">
   <div className="nxp-business-v2-section-head"><small>01 / CAPABILITIES</small><h2>{t(ru,<>Всё необходимое.<br/><em>В одном контуре.</em></>,<>Everything needed.<br/><em>One operating layer.</em></>)}</h2></div>
   <div className="nxp-business-v2-grid">
    {capabilities.map((x,i)=><article key={x}><span>0{i+1}</span><b>{x}</b><p>{t(ru,'Подбираем архитектуру и команду под конкретную задачу бизнеса.','Architecture and team shaped around the actual business need.')}</p><ArrowUpRight/></article>)}
   </div>
  </section>

  <section className="nxp-business-v2-flow">
   <div><small>02 / DELIVERY</small><h2>{t(ru,<>От задачи<br/><em>до работающей системы.</em></>,<>From brief<br/><em>to a working system.</em></>)}</h2></div>
   <div className="nxp-business-v2-steps">
    <article><b>01</b><strong>DISCOVER</strong><span>{t(ru,'Разбираем бизнес-процесс и формируем результат.','Frame the business process and outcome.')}</span></article>
    <article><b>02</b><strong>BUILD</strong><span>{t(ru,'Проектируем и собираем digital-продукт.','Design and build the digital product.')}</span></article>
    <article><b>03</b><strong>OPERATE</strong><span>{t(ru,'Запускаем, измеряем и развиваем систему.','Launch, measure and evolve the system.')}</span></article>
   </div>
  </section>

  <section className="nxp-business-v2-contact nxp-section" id="business-contact">
   <div className="nxp-business-v2-contact-art"><div className="nxp-business-v2-glow"/><GlassOrb label="N" tone="green"/><div className="nxp-business-v2-ring"/></div>
   <div className="nxp-business-v2-form-wrap">
    <small>03 / PROJECT INTAKE</small>
    <h2>{t(ru,<>Расскажите,<br/><em>что нужно бизнесу.</em></>,<>Tell us what<br/><em>your business needs.</em></>)}</h2>
    {sent?<SuccessState language={language}/>:<form className="nxp-business-v2-form" onSubmit={e=>{e.preventDefault();setSent(true)}}>
     <Field label={t(ru,'Имя','Name')}><input value={form.name} onChange={e=>up('name',e.target.value)} required/></Field>
     <Field label="Email"><input type="email" value={form.email} onChange={e=>up('email',e.target.value)} required/></Field>
     <Field label={t(ru,'Задача','Brief')}><textarea rows={5} value={form.task} onChange={e=>up('task',e.target.value)} required/></Field>
     <button className="nxp-button nxp-button-dark">{t(ru,'Отправить запрос','Send request')} <ArrowUpRight/></button>
     <p className="nxp-form-note"><ShieldCheck size={13}/> {t(ru,'Конфиденциально. NDA при необходимости.','Confidential. NDA available.')}</p>
    </form>}
   </div>
  </section>
 </main>
}
function ExpertsPage({language}:{language:Language}){
 const ru=language==='ru'
 return <main className="nxp-page nxp-experts-page"><div className="nxp-page-scene"><Visual tone="green" label="EXPERTS" sub="CREATIVE NETWORK"/></div><Hero eyebrow="05 / EXPERTS" title={t(ru,<>Специалисты.<br/><em>Студии. Команды.</em></>,<>Experts.<br/><em>Studios. Teams.</em></>)} copy={t(ru,'Подготовленный UX-контур будущего expert marketplace: профили, специализации, рейтинги, портфолио и история заказов.','The prepared UX layer for an expert marketplace: profiles, ratings, portfolios and order history.')}/><section className="nxp-section"><div className="nxp-toolbar"><div className="nxp-searchbox"><Search size={17}/><input placeholder={t(ru,'Поиск специалиста','Search an expert')}/></div><button className="nxp-filter-button"><Filter size={15}/>{t(ru,'Фильтры','Filters')}</button></div><div className="nxp-experts-large">{experts.map(e=><article key={e.name}><div className="nxp-expert-avatar">{e.initials}</div><div className="nxp-expert-large-body"><div className="nxp-list-row"><div><small>VERIFIED</small><h3>{e.name}</h3><p>{e.role}</p></div><span className="nxp-rating"><Star size={13} fill="currentColor"/> {e.rating}</span></div><div className="nxp-expert-stats"><span><Users size={14}/> {e.jobs} {t(ru,'проектов','projects')}</span><span><MapPin size={14}/> {e.location}</span><span><ShieldCheck size={14}/> {t(ru,'Верифицирован','Verified')}</span></div></div><button className="nxp-round-link" onClick={()=>go('#service/ai')}><ArrowUpRight/></button></article>)}</div></section></main>
}

function ProjectsPage({language}:{language:Language}){
 const ru=language==='ru',[filter,setFilter]=useState('ALL'),filters=['ALL','WEB','MOBILE','AI','DESIGN','3D','BRANDING','MARKETING']
 const visible=filter==='ALL'?works:works.filter(w=>filter==='AI'?w.kind==='ai':filter==='MOBILE'?w.kind==='mobile':filter==='WEB'?['platform','commerce'].includes(w.kind):filter==='DESIGN'?w.kind==='dashboard':true)
 return <main className="nxp-page nxp-projects-page"><div className="nxp-page-scene"><Visual tone="blue" label="PROJECTS" sub="PRODUCT SPACE"/></div><Hero eyebrow="06 / PROJECTS" title={t(ru,<>Проекты.<br/><em>Не просто макеты.</em></>,<>Projects.<br/><em>Beyond mockups.</em></>)} copy={t(ru,'Каждый кейс можно открыть как отдельный Product Space.','Each case opens as its own Product Space.')}/><section className="nxp-section"><div className="nxp-filter-row nxp-filter-pills">{filters.map(x=><button key={x} className={filter===x?'active':''} onClick={()=>setFilter(x)}>{ru&&x==='ALL'?'ВСЕ':x}</button>)}</div><div className="nxp-project-grid">{visible.map((w,i)=><button key={w.id} className="nxp-project-card" onClick={()=>go('#case/'+w.id)}><Visual tone={i%3===1?'violet':i%3===2?'green':'blue'} label={w.category} sub={w.title}/><div><small>{ru?w.ruCategory:w.category}</small><h3>{ru?w.ruTitle:w.title}</h3><p>{ru?w.ruDescription:w.description}</p><span>{t(ru,'Открыть','Open')} <ArrowUpRight/></span></div></button>)}</div></section></main>
}

function PricingPage({language}:{language:Language}){
 const ru=language==='ru',plans=[['START',50000,t(ru,'Для быстрых задач и первых версий.','For quick launches and first versions.')],['PRODUCT',250000,t(ru,'Для приложений, SaaS, AI и сложных систем.','For apps, SaaS, AI and complex systems.')],['BUSINESS',700000,t(ru,'Для внутренних платформ и B2B.','For internal platforms and B2B.')]]
 return <main className="nxp-page nxp-pricing-page"><div className="nxp-page-scene"><Visual tone="violet" label="PRICING" sub="DELIVERY MODEL"/></div><Hero eyebrow="07 / PRICING" title={t(ru,<>Прозрачная рамка.<br/><em>Точная смета — после brief.</em></>,<>A clear frame.<br/><em>Exact scope after the brief.</em></>)} copy={t(ru,'Ориентир по уровню проекта. Финальная стоимость зависит от сценариев, интеграций и глубины продукта.','Useful ranges, with final scope based on workflows, integrations and product depth.')}/><section className="nxp-section"><div className="nxp-pricing-grid">{plans.map((p,i)=><article className={i===1?'featured':''} key={p[0]}><small>{p[0]}</small><h3>Digital product</h3><p>{p[2]}</p><strong>{t(ru,'от','from')} {money(p[1] as number,ru)}</strong><div>{['Discovery','UX / structure','Production','QA / launch'].map(x=><span key={x}><Check size={14}/>{x}</span>)}</div><button className="nxp-button nxp-button-dark" onClick={()=>go('#start')}>{t(ru,'Обсудить','Discuss')} <ArrowUpRight/></button></article>)}</div></section></main>
}

function KnowledgePage({language}:{language:Language}){
 const ru=language==='ru',posts=[t(ru,'Как строить AI-агента вокруг бизнес-процесса','How to design an AI agent around a business process'),t(ru,'Сколько стоит цифровой продукт','What a digital product costs'),t(ru,'Marketplace или студия: что выбрать','Marketplace or studio: choosing a delivery model'),t(ru,'Почему сложность должна оставаться внутри системы','Why complexity should stay inside the system')]
 return <main className="nxp-page nxp-knowledge-page"><div className="nxp-page-scene"><Visual tone="blue" label="KNOWLEDGE" sub="PRODUCT SIGNALS"/></div><Hero eyebrow="08 / KNOWLEDGE" title={t(ru,<>Знания.<br/><em>Сигналы рынка и продукта.</em></>,<>Knowledge.<br/><em>Product and market signals.</em></>)} copy={t(ru,'Блог, кейсы, документация и практические материалы как будущая knowledge layer NEXUM.','Blog, cases, docs and practical material as the future NEXUM knowledge layer.')}/><section className="nxp-section"><div className="nxp-knowledge-grid">{posts.map((p,i)=><article key={p}><div><small>0{i+1} / NEXUM NOTE</small><h3>{p}</h3><p>{t(ru,'Разбор продукта, UX и архитектуры.','A practical product, UX and architecture note.')}</p></div><ArrowUpRight/></article>)}</div></section></main>
}

function AboutPage({language}:{language:Language}){
 const ru=language==='ru'
 return <main className="nxp-page nxp-about-page"><div className="nxp-page-scene"><Visual tone="green" label="NEXUM" sub="ECOSYSTEM"/></div><Hero eyebrow="09 / ABOUT" title={t(ru,<>NEXUM —<br/><em>цифровая экосистема.</em></>,<>NEXUM —<br/><em>a digital ecosystem.</em></>)} copy={t(ru,'Мы соединяем digital agency, AI, marketplace и собственные цифровые продукты в одну систему.','We connect agency delivery, AI, marketplace and proprietary products into one system.')}/><section className="nxp-section nxp-about-grid"><div><small>THE IDEA</small><h2>{t(ru,<>Не просто студия.<br/><em>Не просто marketplace.</em></>,<>Not just a studio.<br/><em>Not just a marketplace.</em></>)}</h2><p>{t(ru,'Пользователю не нужно заранее знать, кто и как решит задачу. Достаточно сформулировать результат.','People should not need to know who or how will solve the problem before they start. They can describe the outcome.')}</p></div><div className="nxp-about-facts"><div><b>AI</b><span>Intelligence</span></div><div><b>DEV</b><span>Engineering</span></div><div><b>DIGITAL</b><span>Services</span></div><div><b>MARKET</b><span>Supply</span></div></div></section></main>
}

function SupportPage({language}:{language:Language}){
 const ru=language==='ru'
 return <main className="nxp-page nxp-support-page"><div className="nxp-page-scene"><Visual tone="blue" label="SUPPORT" sub="HELP LAYER"/></div><Hero eyebrow="10 / SUPPORT" title={t(ru,<>Поддержка.<br/><em>Без лишнего пути.</em></>,<>Support.<br/><em>Without the detour.</em></>)} copy={t(ru,'FAQ, документы, обращения и уведомления в одном контуре.','FAQ, documents, requests and notifications in one layer.')}/><section className="nxp-section"><div className="nxp-support-grid"><button onClick={()=>go("#journal")}><CircleHelp/><div><b>FAQ</b><span>{t(ru,'Ответы на типовые вопросы','Common answers')}</span></div><ArrowUpRight/></button><button onClick={()=>go("#business")}><FileText/><div><b>{t(ru,'Документы','Documents')}</b><span>{t(ru,'Условия, NDA, политика','Terms, NDA, policy')}</span></div><ArrowUpRight/></button><button onClick={()=>go("#start")}><MessageCircle/><div><b>{t(ru,'Поддержка','Support')}</b><span>{t(ru,'Создать обращение','Create a request')}</span></div><ArrowUpRight/></button><button onClick={()=>go("#dashboard/client")}><Bell/><div><b>{t(ru,'Уведомления','Notifications')}</b><span>{t(ru,'Статусы заказов и сообщений','Orders and messages')}</span></div><ArrowUpRight/></button></div></section></main>
}

function AuthPage({language,mode}:{language:Language;mode:'login'|'register'|'forgot'|'reset'}){
 const ru=language==='ru',[step,setStep]=useState(mode),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[role,setRole]=useState('client'),[done,setDone]=useState(false)
 const submit=(e:React.FormEvent)=>{e.preventDefault();if(step==='forgot'){setStep('reset');return}if(step==='reset'){setDone(true);return}localStorage.setItem('nexum-demo-user',JSON.stringify({email,role}));go(role==='company'||role==='agency'?'#dashboard/company':role==='freelancer'?'#dashboard/freelancer':'#dashboard/client')}
 if(done)return <main className="nxp-auth-page"><div className="nxp-auth-card"><div className="nxp-auth-icon"><Check/></div><small>ACCESS / UPDATED</small><h1>{t(ru,'Пароль обновлён.','Password updated.')}</h1><p>{t(ru,'Теперь можно войти в аккаунт.','You can now sign in.')}</p><button className="nxp-button nxp-button-dark" onClick={()=>setStep('login')}>{t(ru,'Войти','Log in')} <ArrowRight/></button></div></main>
 const register=step==='register',recovery=step==='forgot'||step==='reset'
 return <main className="nxp-auth-page"><div className="nxp-auth-brand"><b>NEXUM</b><span>Digital platform</span></div><form className="nxp-auth-card" onSubmit={submit}><div className="nxp-auth-top"><small>{recovery?'ACCOUNT RECOVERY':register?'CREATE ACCOUNT':'WELCOME BACK'}</small><h1>{recovery?(step==='reset'?t(ru,'Новый пароль','New password'):t(ru,'Восстановление доступа','Recover access')):register?t(ru,'Создать аккаунт','Create account'):t(ru,'С возвращением.','Welcome back.')}</h1><p>{recovery?t(ru,'Подготовленный flow восстановления пароля.','Prepared password recovery flow.'):register?t(ru,'Выберите тип пользователя.','Choose an account type.'):t(ru,'Вход открывает рабочий контур NEXUM.','Sign in to your NEXUM workspace.')}</p></div>{step!=='reset'&&<Field label="Email"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></Field>}{(step!=='forgot'&&step!=='reset')&&<Field label={t(ru,'Пароль','Password')}><input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></Field>}{step==='reset'&&<Field label={t(ru,'Новый пароль','New password')}><input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></Field>}{register&&<div className="nxp-role-grid">{[['client',t(ru,'Клиент','Client')],['freelancer',t(ru,'Исполнитель','Expert')],['company',t(ru,'Компания','Company')],['agency','Digital agency']].map(([id,label])=><button type="button" key={id} className={role===id?'active':''} onClick={()=>setRole(id as string)}>{label}</button>)}</div>}<button className="nxp-button nxp-button-dark" type="submit">{recovery?(step==='reset'?t(ru,'Обновить пароль','Update password'):t(ru,'Продолжить','Continue')):register?t(ru,'Создать аккаунт','Create account'):t(ru,'Войти','Log in')} <ArrowRight/></button>{!register&&!recovery&&<button type="button" className="nxp-auth-link" onClick={()=>setStep('forgot')}>{t(ru,'Забыли пароль?','Forgot password?')}</button>}{recovery&&<button type="button" className="nxp-auth-link" onClick={()=>setStep('login')}>{t(ru,'Вернуться ко входу','Back to sign in')}</button>}{!recovery&&<><div className="nxp-auth-divider"><span>OR</span></div><div className="nxp-oauth-row"><button type="button">Google</button><button type="button">Apple</button><button type="button">GitHub</button></div></>}</form></main>
}

function DashboardPage({language,role}:{language:Language;role:'client'|'freelancer'|'company'}){
 const ru=language==='ru',[tab,setTab]=useState('overview'),[notifications,setNotifications]=useState(false),demoOrders=JSON.parse(localStorage.getItem('nexum-orders')||'[]') as Array<{title:string;status:string;price:number}>,title=role==='client'?t(ru,'Мой workspace','My workspace'):role==='freelancer'?t(ru,'Рабочий кабинет','Work dashboard'):t(ru,'Компания','Company workspace')
 const nav=role==='client'?['overview','orders','messages','favorites','billing','settings']:role==='freelancer'?['overview','services','orders','clients','messages','analytics']:['overview','people','projects','orders','documents','analytics','settings']
 return <main className="nxp-dashboard"><aside className="nxp-sidebar"><div className="nxp-sidebar-brand"><b>NEXUM</b><span>{title}</span></div><nav>{nav.map(id=><button key={id} className={tab===id?'active':''} onClick={()=>setTab(id)}><span>{id==='overview'?<BarChart3/>:id==='orders'?<PackageCheck/>:id==='messages'?<MessageCircle/>:id==='favorites'?<Heart/>:id==='billing'?<CreditCard/>:id==='settings'?<LockKeyhole/>:id==='services'?<ShoppingBag/>:<Users/>}</span>{id}</button>)}</nav><button className="nxp-sidebar-footer" onClick={()=>go('#')}>{t(ru,'На сайт','Back to site')} <ArrowUpRight/></button></aside><section className="nxp-dashboard-main"><header className="nxp-dashboard-head"><div><small>WORKSPACE / {role.toUpperCase()}</small><h1>{title}</h1></div><div className="nxp-dashboard-actions"><button onClick={()=>setNotifications(v=>!v)} aria-label="Notifications"><Bell/></button><button onClick={()=>go('#profile')} aria-label="Profile"><UserRound/></button></div>{notifications&&<div className="nxp-notification-popover"><small>NOTIFICATIONS</small><div><span className="nxp-status-dot"/><p><b>New workspace event</b><span>Order flow is ready for review.</span></p></div><div><span className="nxp-status-dot"/><p><b>AI Core</b><span>Discovery layer is online.</span></p></div><div><span className="nxp-status-dot"/><p><b>Marketplace</b><span>3 matching items found.</span></p></div></div>}</header><div className="nxp-dashboard-content"><div className="nxp-dashboard-metrics"><article><small>ACTIVE</small><b>{role==='client'?demoOrders.length:role==='freelancer'?8:14}</b><span>{t(ru,'рабочих элементов','active items')}</span></article><article><small>IN PROGRESS</small><b>{role==='client'?2:role==='freelancer'?5:7}</b><span>{t(ru,'в работе','in progress')}</span></article><article><small>UNREAD</small><b>3</b><span>{t(ru,'новых события','new events')}</span></article><article><small>AI CORE</small><b>ON</b><span>{t(ru,'система готова','system ready')}</span></article></div>{tab==='overview'?<><div className="nxp-dashboard-panel"><div className="nxp-panel-head"><div><small>RECENT ACTIVITY</small><h3>{t(ru,'Последняя активность','Recent activity')}</h3></div><button onClick={()=>setTab('orders')}>{t(ru,'Открыть все','View all')} <ArrowUpRight/></button></div>{demoOrders.length?<div className="nxp-order-list">{demoOrders.slice(-6).reverse().map((o,i)=><div key={i}><span className="nxp-status-dot"/><div><b>{o.title}</b><small>{o.status}</small></div><strong>{money(o.price,ru)}</strong></div>)}</div>:<EmptyState language={language} title={t(ru,'Здесь появятся ваши проекты','Your projects will appear here')} action={t(ru,'Создать проект','Create a project')} onAction={()=>go('#start')}/>}</div><div className="nxp-dashboard-split"><button onClick={()=>go('#ai')}><Sparkles/><b>{t(ru,'Создать с AI','Create with AI')}</b><span>{t(ru,'Начните с результата','Start from an outcome')}</span></button><button onClick={()=>go('#marketplace')}><ShoppingBag/><b>{t(ru,'Найти услугу','Find a solution')}</b><span>{t(ru,'Открыть Marketplace','Open Marketplace')}</span></button></div></>:<div className="nxp-tab-panel"><small>WORKSPACE / {tab.toUpperCase()}</small><h2>{tab}</h2><p>{t(ru,'Рабочий раздел подготовлен для подключения backend, данных и реального transaction flow.','Workspace prepared for backend, data and transaction integration.')}</p><button className="nxp-button nxp-button-dark" onClick={()=>go('#marketplace')}>{t(ru,'Перейти в Marketplace','Open Marketplace')} <ArrowUpRight/></button></div>}</div></section></main>
}

function EmptyState({language,title,action,onAction}:{language:Language;title:string;action?:string;onAction?:()=>void}){return <div className="nxp-empty"><Layers3 size={22}/><b>{title}</b>{action&&<button onClick={onAction}>{action} <ArrowUpRight/></button>}</div>}
function SuccessState({language}:{language:Language}){const ru=language==='ru';return <div className="nxp-success"><div className="nxp-auth-icon"><Check/></div><small>REQUEST / RECEIVED</small><h3>{t(ru,'Запрос принят.','Request received.')}</h3><p>{t(ru,'Вернёмся с уточнениями и следующим шагом.','We will return with questions and the next step.')}</p></div>}

function ServiceDetailPage({language,id}:{language:Language;id:string}){
 const ru=language==='ru'
 const [open,setOpen]=useState(false)
 const item=services.find(x=>x.id===id)
 const rating=4.9
 if(!item)return <main className="nxp-auth-page"><div className="nxp-auth-card"><h1>404</h1><p>Solution not found.</p><button className="nxp-button nxp-button-dark" onClick={()=>go('#solutions')}>Solutions <ArrowRight/></button></div></main>
 return <main className="nxp-page nxp-service-detail"><div className="nxp-breadcrumb"><button onClick={()=>go('#solutions')}>Solutions</button><span>/</span><b>{ru?item.ruCategory:item.category}</b></div><section className="nxp-service-hero"><div><small>{ru?item.ruCategory:item.category}</small><h1>{ru?item.ruTitle:item.title}</h1><p>{ru?item.ruDescription:item.description}</p><div className="nxp-tag-row">{item.tags.map(x=><span key={x}>{x}</span>)}</div><div className="nxp-detail-actions"><button className="nxp-button nxp-button-dark" onClick={()=>setOpen(true)}>{t(ru,'Заказать','Order')} <ArrowUpRight/></button><button className="nxp-button nxp-button-light" onClick={()=>go('#experts')}>{t(ru,'Найти исполнителя','Find an expert')} <Users size={16}/></button></div></div><Visual tone={item.category==='AI'?'violet':item.category==='DESIGN'?'green':'blue'} label={item.category} sub={item.title}/></section><section className="nxp-detail-grid"><div><small>01 / INCLUDED</small><h2>{t(ru,'Что входит','What is included')}</h2><div className="nxp-check-list">{['Discovery','UX / structure','Production build','QA / launch'].map(x=><span key={x}><Check size={15}/>{x}</span>)}</div></div><div><small>02 / DELIVERY</small><h2>{t(ru,'Срок и стоимость','Timeline & price')}</h2><div className="nxp-detail-stat"><b>{money(item.from,ru)}</b><span>{t(ru,'ориентир «от»','indicative starting point')}</span></div><div className="nxp-detail-stat"><b>{item.timeline}</b><span>{t(ru,'типовой срок','typical timeline')}</span></div></div></section><section className="nxp-detail-grid"><div><small>03 / FLOW</small><h2>{t(ru,'Как проходит заказ','Order flow')}</h2><div className="nxp-step-list">{[t(ru,'Выбираете пакет','Choose a package'),t(ru,'Описываете задачу','Describe the task'),t(ru,'Добавляете материалы','Attach files'),t(ru,'Получаете scope','Receive scope'),t(ru,'Работаете в чате','Work in chat'),t(ru,'Подтверждаете результат','Confirm delivery')].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></div><div><small>04 / TRUST</small><h2>{t(ru,'Доверие','Trust')}</h2><div className="nxp-review-box"><Star size={17} fill="currentColor"/><b>{rating}</b><span>{t(ru,'Средний рейтинг','Average rating')}</span></div></div></section>
<section className="nx2-service-extra">
 <div className="nx2-panel">
  <small>05 / DELIVERY</small>
  <h2>{t(ru,<>Из задачи<br/><em>в результат.</em></>,<>From brief<br/><em>to outcome.</em></>)}</h2>
  <div className="nx2-list">
   {[t(ru,'Discovery и уточнение задачи','Discovery and scoping'),t(ru,'UX / структура решения','UX and solution structure'),t(ru,'Разработка и интеграции','Production and integrations'),t(ru,'QA, запуск и передача','QA, launch and handover')].map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span></div>)}
  </div>
 </div>
 <div className="nx2-panel">
  <small>06 / FAQ</small>
  <h2>{t(ru,'Вопросы','Questions')}</h2>
  <div className="nx2-faq">
   <details open><summary>{t(ru,'Можно начать с индивидуального запроса?','Can I start with a custom brief?')}</summary><p>{t(ru,'Да. Если готовый пакет не подходит, опишите задачу — scope формируется после первичного разбора.','Yes. If a package does not fit, submit a brief and scope is shaped after discovery.')}</p></details>
   <details><summary>{t(ru,'Можно подключить AI и интеграции?','Can AI and integrations be included?')}</summary><p>{t(ru,'Да. AI, API, CRM, платежи и другие модули добавляются в состав решения по задаче.','Yes. AI, APIs, CRM, payments and other modules can be included according to the brief.')}</p></details>
   <details><summary>{t(ru,'Как формируется финальная цена?','How is the final price formed?')}</summary><p>{t(ru,'Цена «от» — ориентир. Финальная оценка зависит от сценариев, объёма интерфейса, интеграций и требований.','The starting price is indicative. Final scope depends on workflows, interface depth, integrations and requirements.')}</p></details>
  </div>
 </div>
</section>
<section className="nx2-service-extra">
 <div className="nx2-panel">
  <small>07 / REVIEWS</small><h2>{t(ru,'Опыт клиентов','Client experience')}</h2>
  <div className="nx2-review"><strong>4.9 / 5 · {t(ru,'средняя оценка','average rating')}</strong><span>{t(ru,'Отзывы подключаются к профилю исполнителя и истории заказов.','Reviews will connect to the expert profile and order history.')}</span></div>
  <div className="nx2-review"><strong>{t(ru,'Проверенный delivery flow','Verified delivery flow')}</strong><span>{t(ru,'Заказ → чат → результат → подтверждение → отзыв.','Order → chat → delivery → confirmation → review.')}</span></div>
 </div>
 <div className="nx2-panel">
  <small>08 / RELATED</small><h2>{t(ru,'Похожие решения','Related solutions')}</h2>
  <div className="nx2-list">
   {services.filter(s=>s.id!==item.id).slice(0,4).map(s=><button key={s.id} onClick={()=>go('#service/'+s.id)}><b>{ru?s.ruTitle:s.title}</b><span>{money(s.from,ru)} ↗</span></button>)}
  </div>
 </div>
</section>
<section className="nx2-service-cta">
 <div><small>09 / NEXT STEP</small><h2>{t(ru,<>Готовы начать<br/><em>заказ?</em></>,<>Ready to<br/><em>start?</em></>)}</h2></div>
 <button className="nxp-button nxp-button-dark" onClick={()=>setOpen(true)}>{t(ru,'Заказать услугу','Order this service')} <ArrowUpRight/></button>
</section>
</main>
}

function OrderModal({item,language,onClose}:{item:Service;language:Language;onClose:()=>void}){
 const ru=language==='ru',[step,setStep]=useState(1),[pack,setPack]=useState('standard'),[brief,setBrief]=useState(''),[deadline,setDeadline]=useState(''),[fileName,setFileName]=useState(''),[created,setCreated]=useState(false),base=item.from,m=pack==='basic'?1:pack==='standard'?1.35:1.8,estimate=Math.round(base*m)
 const create=()=>{const orders=JSON.parse(localStorage.getItem('nexum-orders')||'[]');orders.push({title:ru?item.ruTitle:item.title,status:'created',price:estimate,brief,deadline,file:fileName});localStorage.setItem('nexum-orders',JSON.stringify(orders));setCreated(true)}
 return <div className="nxp-modal-backdrop" onMouseDown={e=>e.currentTarget===e.target&&onClose()}><div className="nxp-order-modal"><div className="nxp-modal-head"><div><small>ORDER / {item.category}</small><h2>{ru?item.ruTitle:item.title}</h2></div><button onClick={onClose}><X/></button></div>{created?<div className="nxp-order-success"><div className="nxp-auth-icon"><Check/></div><small>ORDER / CREATED</small><h2>{t(ru,'Заказ создан.','Order created.')}</h2><p>{t(ru,'Рабочий контур заказа готов. Следующий слой — чат и оплата.','The order workspace is ready. Next layer: chat and payment.')}</p><button className="nxp-button nxp-button-dark" onClick={()=>{onClose();go('#dashboard/client')}}>{t(ru,'Открыть кабинет','Open dashboard')} <ArrowUpRight/></button></div>:<><div className="nxp-modal-progress"><span className={step>=1?'active':''}>01</span><i/><span className={step>=2?'active':''}>02</span><i/><span className={step>=3?'active':''}>03</span></div>{step===1?<div className="nxp-modal-body"><small>PACKAGE</small><div className="nxp-package-grid">{[['basic',t(ru,'Базовый','Basic'),1],['standard',t(ru,'Стандарт','Standard'),1.35],['pro',t(ru,'Расширенный','Pro'),1.8]].map(p=><button key={p[0]} className={pack===p[0]?'active':''} onClick={()=>setPack(p[0] as string)}><b>{p[1]}</b><span>{money(Math.round(base*(p[2] as number)),ru)}</span></button>)}</div><div className="nxp-estimate-line"><span>{t(ru,'Предварительная стоимость','Preliminary estimate')}</span><b>{money(estimate,ru)}</b></div><button className="nxp-button nxp-button-dark" onClick={()=>setStep(2)}>{t(ru,'Продолжить','Continue')} <ArrowRight/></button></div>:step===2?<div className="nxp-modal-body"><Field label={t(ru,'Задача','Task')}><textarea value={brief} onChange={e=>setBrief(e.target.value)} rows={6} required placeholder={t(ru,'Что нужно сделать и какой результат нужен?','What needs to be built?')}/></Field><div className="nxp-two-col"><Field label={t(ru,'Срок','Deadline')}><input value={deadline} onChange={e=>setDeadline(e.target.value)} placeholder="2026-10-30"/></Field><Field label={t(ru,'Файл','File')}><input type="file" onChange={e=>{const f=e.target.files?.[0];if(f)setFileName(f.name)}}/></Field></div><div className="nxp-modal-bottom"><button className="nxp-link-button" onClick={()=>setStep(1)}>← {t(ru,'Назад','Back')}</button><button className="nxp-button nxp-button-dark" disabled={!brief.trim()} onClick={()=>setStep(3)}>{t(ru,'Проверить заказ','Review order')} <ArrowRight/></button></div></div>:<div className="nxp-modal-body"><small>REVIEW</small><div className="nxp-review-order"><span>{t(ru,'Услуга','Service')}<b>{ru?item.ruTitle:item.title}</b></span><span>{t(ru,'Пакет','Package')}<b>{pack}</b></span><span>{t(ru,'Срок','Deadline')}<b>{deadline||'—'}</b></span><span>{t(ru,'Файл','File')}<b>{fileName||'—'}</b></span><span>{t(ru,'Стоимость','Estimate')}<b>{money(estimate,ru)}</b></span></div><div className="nxp-modal-bottom"><button className="nxp-link-button" onClick={()=>setStep(2)}>← {t(ru,'Назад','Back')}</button><button className="nxp-button nxp-button-dark" onClick={create}>{t(ru,'Создать заказ','Create order')} <PackageCheck/></button></div></div>}</>}</div></div>
}

export default function PlatformRouter({language}:{language:Language}){
 const hash=location.hash||'', path=hash.split('?')[0]
 if(path===''||path==='#')return <Home language={language}/>
 if(path==='#services')return <ServicesCatalog language={language}/>
 if(path==='#solutions'||path==='#marketplace')return <SolutionsPage language={language}/>
 if(path==='#ai')return <AIPage language={language}/>
 if(path==='#work'||path==='#projects')return <ProjectsPage language={language}/>
 if(path==='#experts')return <ExpertsPage language={language}/>
 if(path==='#business')return <BusinessPage language={language}/>
 if(path==='#pricing')return <PricingPage language={language}/>
 if(path==='#journal'||path==='#blog')return <KnowledgePage language={language}/>
 if(path==='#about')return <AboutPage language={language}/>
 if(path==='#support')return <SupportPage language={language}/>
 if(path==='#login')return <AuthPage language={language} mode="login"/>
 if(path==='#register')return <AuthPage language={language} mode="register"/>
 if(path==='#forgot-password')return <AuthPage language={language} mode="forgot"/>
 if(path==='#reset-password')return <AuthPage language={language} mode="reset"/>
 if(path==='#dashboard/client')return <DashboardPage language={language} role="client"/>
 if(path==='#dashboard/freelancer')return <DashboardPage language={language} role="freelancer"/>
 if(path==='#dashboard/company')return <DashboardPage language={language} role="company"/>
 if(path==='#profile'||path==='#settings')return <DashboardPage language={language} role="client"/>
 if(path==='#start')return <StartProjectPage language={language}/>
 if(path.startsWith('#service/'))return <ServiceDetailPage language={language} id={decodeURIComponent(path.split('/')[1]||'')}/>
 return <main className="nxp-auth-page"><div className="nxp-auth-card"><small>404</small><h1>Not found</h1><button className="nxp-button nxp-button-dark" onClick={()=>go('#')}>NEXUM <ArrowRight/></button></div></main>
}
