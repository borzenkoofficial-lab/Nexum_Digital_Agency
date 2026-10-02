import {useEffect,useState} from 'react'

type Lang='ru'|'en'
type Page='home'|'services'|'projects'|'reviews'|'marketplace'|'portfolio'|'login'|'register'|'start'

const T={
ru:{nav:['Услуги','Проекты','Отзывы','Маркетплейс','Портфолио'],heroKicker:'NEXUM / DIGITAL PRODUCT STUDIO',heroTitle:'Создаём цифровые продукты, которыми хочется пользоваться.',heroText:'Сайты, приложения, AI-системы, брендинг и автоматизация — от идеи до работающего продукта.',start:'Обсудить проект',cases:'Смотреть проекты',services:'Всё необходимое для цифрового продукта.',projects:'Продукты, интерфейсы и системы.',reviews:'Опыт работы — в деталях, а не в обещаниях.',portfolio:'Interactive Lab',portfolioText:'Не статичные картинки. Откройте кейс и попробуйте интерфейс.',login:'Войти',register:'Регистрация'},
en:{nav:['Services','Projects','Reviews','Marketplace','Portfolio'],heroKicker:'NEXUM / DIGITAL PRODUCT STUDIO',heroTitle:'We build digital products people want to use.',heroText:'Websites, apps, AI systems, identity and automation — from idea to working product.',start:'Start a project',cases:'View projects',services:'Everything a digital product needs.',projects:'Products, interfaces and systems.',reviews:'Show the work. Skip the empty promises.',portfolio:'Interactive Lab',portfolioText:'Not static screenshots. Open a case and try the interface.',login:'Sign in',register:'Create account'}}

const services=[['WEB','Websites & platforms','Промо, корпоративные сайты, SaaS и сложные web-продукты.'],['APP','Web & mobile apps','Продуктовые интерфейсы, кабинеты, мобильные сценарии и сервисы.'],['AI','AI systems','AI-агенты, ассистенты, knowledge systems и автоматизация.'],['DESIGN','UI/UX & branding','Исследование, UX, визуальная система, motion и дизайн-система.'],['3D','3D & motion','3D-сцены, продуктовые визуалы, motion и интерактивные презентации.'],['AUTO','Automation','CRM, внутренние системы, Telegram и интеграции.']]
const projects=[['NEXUM AI','AI product','AI workspace / agent platform'],['GRUZLI','Marketplace','Заказчик → диспетчер → грузчик'],['DIGITAL CLOUD','Studio platform','Коммерческая digital-платформа']]
const market=[['AI','AI-консультант','Исследование, прототип и AI-логика продукта.'],['WEB','Landing / site','Премиальный сайт под запуск продукта или компании.'],['BOT','Telegram bot','Бот с интерфейсом, сценариями и интеграциями.'],['CRM','Internal system','Рабочее пространство для команды и процессов.']]

function go(p:Page){location.hash=p==='home'?'':p;window.scrollTo({top:0,behavior:'smooth'})}

function Header({lang,setLang}:{lang:Lang;setLang:(v:Lang)=>void}){
 const c=T[lang]
 const links:Page[]=['services','projects','reviews','marketplace','portfolio']
 return <header className="header"><button className="brand" onClick={()=>go('home')}><span className="brand-mark">N</span>NEXUM</button><nav className="nav">{links.map((x,i)=><button key={x} onClick={()=>go(x)}>{c.nav[i]}</button>)}</nav><div className="header-actions"><button className="lang" onClick={()=>setLang(lang==='ru'?'en':'ru')}>{lang.toUpperCase()}</button><button className="login-link" onClick={()=>go('login')}>{c.login}</button><button className="black-btn small" onClick={()=>go('start')}>{c.start}</button></div></header>
}

function ProductVisual(){
 return <div className="hero-visual">
  <div className="halo"/>
  <div className="system-orbit orbit-a"/>
  <div className="system-orbit orbit-b"/>
  <div className="system-core"><span>N</span><small>NEXUM CORE</small></div>
  <div className="system-node node-web"><b>WEB</b><span>platforms</span></div>
  <div className="system-node node-ai"><b>AI</b><span>agents</span></div>
  <div className="system-node node-design"><b>DESIGN</b><span>systems</span></div>
  <div className="system-node node-auto"><b>AUTO</b><span>workflows</span></div>
  <div className="float-card card-one">AI / WEB / 3D</div>
  <div className="float-card card-two"><b>24/7</b><span>digital systems</span></div>
 </div>
}

function SectionTitle({eyebrow,title,text}:{eyebrow:string;title:string;text?:string}){return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}

function ServiceGrid(){return <div className="service-grid">{services.map(([tag,title,text])=><button className="service-card" key={tag} onClick={()=>go('start')}><span>{tag}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></button>)}</div>}

function ProjectGrid(){return <div className="project-grid">{projects.map(([name,type,text],i)=><button className={'project-card p'+i} key={name} onClick={()=>go('portfolio')}><div className="project-art"><div className="art-orb"/><div className="art-window"><small>{type}</small><strong>{name}</strong><span>{text}</span></div></div><div className="project-info"><span>{type}</span><h3>{name}</h3><b>View case →</b></div></button>)}</div>}

function Reviews(){const data=[['01','Основатель продукта','“Команда быстро превратила сложную идею в понятный продуктовый интерфейс.”'],['02','Product lead','“Сильная связка стратегии, дизайна и разработки без лишней бюрократии.”'],['03','Founder','“Нам было важно получить не картинку, а систему, которую можно развивать.”']];return <div className="review-grid">{data.map(([n,role,text])=><article className="review" key={n}><span>{n}</span><div><div className="stars">★★★★★</div><p>{text}</p><small>{role}</small></div></article>)}</div>}

function PortfolioStrip(){return <div className="lab-strip"><button onClick={()=>go('portfolio')} className="lab-main"><div className="lab-orbit"/><div><span>INTERACTIVE LAB</span><h3>5 live product experiences</h3><p>Commerce · AI · Telegram · Product · Game</p></div><b>↗</b></button><div className="lab-mini"><span>LIVE</span><strong>Try it yourself</strong><small>Real interactions, not screenshots.</small></div></div>}

function Home({lang}:{lang:Lang}){
 const c=T[lang]
 return <><section className="hero"><div className="hero-copy"><span className="eyebrow">{c.heroKicker}</span><h1>{c.heroTitle}</h1><p>{c.heroText}</p><div className="hero-actions"><button className="black-btn" onClick={()=>go('start')}>{c.start}<b>↗</b></button><button className="text-btn" onClick={()=>go('projects')}>{c.cases}<b>→</b></button></div><div className="hero-meta"><span>01 / STRATEGY</span><span>02 / DESIGN</span><span>03 / BUILD</span><span>04 / LAUNCH</span></div></div><ProductVisual/></section><section className="capabilities"><span>WEB</span><span>AI</span><span>PRODUCT</span><span>DESIGN</span><span>3D</span><span>AUTOMATION</span></section><section className="section"><SectionTitle eyebrow="SERVICES" title={c.services}/><ServiceGrid/></section><section className="section muted-section"><SectionTitle eyebrow="SELECTED WORK" title={c.projects}/><ProjectGrid/></section><section className="section"><SectionTitle eyebrow="NEXUM / LAB" title={c.portfolio} text={c.portfolioText}/><PortfolioStrip/></section><section className="section review-band"><SectionTitle eyebrow="CLIENT NOTES" title={c.reviews}/><Reviews/></section><CTA lang={lang}/></>
}

function Portfolio({lang}:{lang:Lang}){
 const [active,setActive]=useState(0)
 const items=['Commerce','AI Agent','Telegram','Product','Game']
 return <section className="portfolio-page"><SectionTitle eyebrow="NEXUM / INTERACTIVE LAB" title={T[lang].portfolio} text={T[lang].portfolioText}/><div className="portfolio-tabs">{items.map((x,i)=><button className={active===i?'active':''} onClick={()=>setActive(i)} key={x}>{String(i+1).padStart(2,'0')} {x}</button>)}</div><Demo type={active}/><div className="build-note"><span>BUILD QUALITY</span><strong>Designed as a real product surface.</strong><p>Каждая демка показывает конкретный паттерн: commerce, AI workspace, Telegram flow, product dashboard или interactive game.</p></div></section>
}

function Demo({type}:{type:number}){
 if(type===0)return <div className="demo commerce"><div className="demo-nav"><b>ATELIER</b><span>NEW / WOMEN / MEN / OBJECTS</span><i>Bag 02</i></div><div className="commerce-body"><div><small>SPRING / 26</small><h3>Objects<br/>in motion.</h3><button>Add to bag</button></div><div className="fashion-object"><div/></div></div></div>
 if(type===1)return <div className="demo ai-demo"><aside><b>NEXUM AI</b><span>Overview</span><span>Projects</span><span>Memory</span><span>Agents</span></aside><main><small>AI AGENT / ONLINE</small><h3>How can I help<br/>build your product?</h3><div className="ai-input">Describe a task…<b>↗</b></div><div className="ai-pills"><span>Research</span><span>Design</span><span>Build</span></div></main><div className="ai-orb"/></div>
 if(type===2)return <BotDemo/>
 if(type===3)return <div className="demo product-demo"><aside><b>PROJECT</b><span>Overview</span><span>Analytics</span><span>Tasks</span></aside><main><div className="dash-top"><small>MONDAY / 02 OCT</small><b>Good afternoon.</b></div><div className="metrics"><div><small>Revenue</small><strong>€84.2k</strong><span>+12.8%</span></div><div><small>Active users</small><strong>12,842</strong><span>+8.4%</span></div><div><small>Conversion</small><strong>6.82%</strong><span>+1.2%</span></div></div><div className="dash-chart"><i/><i/><i/><i/><i/><i/><i/></div></main></div>
 return <MiniGame/>
}

function BotDemo(){const [choice,setChoice]=useState('');return <div className="demo bot-demo"><div className="phone"><div className="bot-head">NEXUM SERVICE<small>online</small></div><div className="messages"><p>Здравствуйте! Что нужно сделать?</p><button onClick={()=>setChoice('Сайт')}>Заказать сайт</button><button onClick={()=>setChoice('AI')}>AI-интеграция</button>{choice&&<p className="user-msg">Выбрано: {choice}. Расскажите подробнее.</p>}</div><div className="bot-input">Сообщение…<b>→</b></div></div></div>}

function MiniGame(){const [score,setScore]=useState(0);const [pos,setPos]=useState(50);const hit=()=>{setScore(v=>v+1);setPos(Math.round(15+Math.random()*70))};return <div className="demo game-demo"><div className="game-top"><b>NEXUM ARCADE</b><span>SCORE {String(score).padStart(2,'0')}</span><button onClick={()=>setScore(0)}>RESET</button></div><div className="game-field" onClick={hit}><div className="game-stars">✦　·　✧　·　✦　·　·　✧</div><div className="game-ball" style={{left:pos+'%'}}/><div className="game-paddle" style={{left:pos+'%'}}/><span className="game-help">TAP THE FIELD</span></div></div>}

function CTA({lang}:{lang:Lang}){return <section className="cta"><div><span>NEXUM / 2026</span><h2>Есть идея?<br/><em>Давайте соберём.</em></h2></div><button className="black-btn" onClick={()=>go('start')}>{T[lang].start}<b>↗</b></button></section>}

function Generic({type,lang}:{type:Page;lang:Lang}){
 if(type==='services')return <section className="page"><SectionTitle eyebrow="NEXUM / SERVICES" title={T[lang].services} text="От стратегии и визуального языка до production и поддержки."/><ServiceGrid/><CTA lang={lang}/></section>
 if(type==='projects')return <section className="page"><SectionTitle eyebrow="NEXUM / WORK" title={T[lang].projects}/><ProjectGrid/><CTA lang={lang}/></section>
 if(type==='reviews')return <section className="page"><SectionTitle eyebrow="NEXUM / REVIEWS" title={T[lang].reviews}/><Reviews/><div className="disclaimer">Отзывы в этой демонстрационной версии — пример контентной структуры, не подтверждённые публичные рекомендации.</div></section>
 if(type==='marketplace')return <section className="page"><SectionTitle eyebrow="NEXUM / MARKETPLACE" title="NEXUM Marketplace" text="Готовые цифровые решения, услуги и продуктовые модули."/><div className="market-grid">{market.map(([tag,title,text])=><article className="market-card" key={tag}><span>{tag}</span><h3>{title}</h3><p>{text}</p><button onClick={()=>go('start')}>Запросить →</button></article>)}</div></section>
 return <Portfolio lang={lang}/>
}

function Auth({mode,lang}:{mode:'login'|'register';lang:Lang}){const [sent,setSent]=useState(false);return <section className="auth-page"><div className="auth-card"><span className="eyebrow">NEXUM / ACCOUNT</span><h1>{mode==='login'?T[lang].login:T[lang].register}</h1>{sent?<div className="success">Готово. Это demo-flow, backend authentication пока не подключён.</div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}>{mode==='register'&&<input placeholder="Имя" required/>}<input type="email" placeholder="Email" required/><input type="password" placeholder="Password" required/>{mode==='register'&&<label><input type="checkbox" required/> Я принимаю условия</label>}<button className="black-btn" type="submit">{mode==='login'?'Войти':'Создать аккаунт'} →</button></form>}<button className="text-btn" onClick={()=>go('home')}>← На главную</button></div></section>}

function Start({lang}:{lang:Lang}){const [sent,setSent]=useState(false);return <section className="start-page"><div><span className="eyebrow">NEXUM / NEW PROJECT</span><h1>Расскажите,<br/><em>что строим.</em></h1><p>Коротко опишите задачу. Мы вернёмся с направлением, этапами и вопросами.</p></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success">Заявка сохранена в demo-режиме. Реальная отправка будет подключена отдельно.</div>:<><input placeholder="Имя / компания" required/><input type="email" placeholder="Email" required/><textarea placeholder="Что нужно сделать?" rows={7} required/><button className="black-btn" type="submit">{T[lang].start} ↗</button></>}</form></section>}

export default function App(){
 const [lang,setLang]=useState<Lang>(()=>(localStorage.getItem('nexum-lang') as Lang)||'ru')
 const [page,setPage]=useState<Page>(()=>(location.hash.replace('#','') as Page)||'home')
 useEffect(()=>localStorage.setItem('nexum-lang',lang),[lang])
 useEffect(()=>{const f=()=>setPage((location.hash.replace('#','') as Page)||'home');addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[])
 let content
 if(page==='home')content=<Home lang={lang}/>
 else if(page==='login'||page==='register')content=<Auth mode={page} lang={lang}/>
 else if(page==='start')content=<Start lang={lang}/>
 else content=<Generic type={page} lang={lang}/>
 return <><Header lang={lang} setLang={setLang}/><main>{content}</main><footer><span>© 2026 NEXUM</span><span>Digital products / AI / Design / Technology</span><button onClick={()=>go('start')}>Start a project ↗</button></footer></>
}