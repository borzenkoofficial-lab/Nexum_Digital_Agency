import {ArrowUpRight,BarChart3,Boxes,BrainCircuit,Building2,CheckCircle2,Globe2,Layers3,MessageSquare,Search,ShoppingBag,Users,Workflow,Zap} from 'lucide-react'

type Props={id:string;language:'ru'|'en'}

const data:Record<string,{brand:string;eyebrow:string;title:string;sub:string;theme:string}> = {
 '01':{brand:'STRATA',eyebrow:'FIELD OPERATIONS',title:'Build without the noise.',sub:'Teams, requests and schedules in one operational space.',theme:'construction'},
 '02':{brand:'NEXUM AI',eyebrow:'INTELLIGENCE WORKSPACE',title:'Ask. Understand. Act.',sub:'Company knowledge turned into useful decisions.',theme:'ai'},
 '03':{brand:'ATLAS',eyebrow:'BUSINESS INTELLIGENCE',title:'See the business clearly.',sub:'Signals, performance and operations in one view.',theme:'dashboard'},
 '04':{brand:'OBJECT',eyebrow:'DIGITAL COMMERCE',title:'Objects for everyday.',sub:'A calm commerce experience built around discovery.',theme:'commerce'},
 '05':{brand:'FIELD',eyebrow:'MOBILE PRODUCT',title:'Your work, in motion.',sub:'A focused mobile workspace for people on the move.',theme:'mobile'},
 '06':{brand:'NEXUM.DEV',eyebrow:'AI DEVELOPMENT CLOUD',title:'Build the next product.',sub:'From idea to running interface, inside one workspace.',theme:'dev'},
 '07':{brand:'NEXUM CORE',eyebrow:'AI FOUNDATION',title:'Intelligence, engineered.',sub:'Models, memory, tools and evaluation in one layer.',theme:'core'},
 '08':{brand:'GRUZLI',eyebrow:'FIELD MARKETPLACE',title:'Work finds its team.',sub:'Requests, dispatchers and loaders connected in one flow.',theme:'gruzli'}
}

export default function PortfolioSiteMockup({id,language}:Props){
 const d=data[id]||data['01']; const ru=language==='ru'
 return <div className={`portfolio-site portfolio-site-${d.theme}`}>
  <div className="portfolio-site-nav"><b>{d.brand}</b><span>{ru?'Продукт':'Product'}</span><span>{ru?'Возможности':'Capabilities'}</span><span>{ru?'О компании':'About'}</span><span className="site-nav-cta">{ru?'Запустить':'Launch'} <ArrowUpRight size={11}/></span></div>
  <div className="portfolio-site-body">
   <div className="portfolio-site-copy"><small>{d.eyebrow}</small><h3>{d.title}</h3><p>{d.sub}</p><button>{ru?'Открыть продукт':'Open product'} <ArrowUpRight size={12}/></button></div>
   <SiteVisual theme={d.theme} ru={ru}/>
  </div>
  <div className="portfolio-site-foot"><span>01 — 04</span><span>{ru?'Создано внутри NEXUM DIGITAL':'Built inside NEXUM DIGITAL'}</span><span>SCROLL ↓</span></div>
 </div>
}

function SiteVisual({theme,ru}:{theme:string;ru:boolean}){
 if(theme==='commerce') return <div className="site-visual commerce-site"><div className="site-products"><article><div/><b>FORM 01</b><span>€240</span></article><article><div/><b>OBJECT 02</b><span>€180</span></article><article><div/><b>LINE 03</b><span>€320</span></article></div><ShoppingBag className="site-floating-icon" size={17}/></div>
 if(theme==='ai'||theme==='core') return <div className="site-visual ai-site"><div className="ai-orb"><BrainCircuit size={30}/></div><div className="site-chat"><span>USER</span><b>{ru?'Проанализируй проект':'Analyze this project'}</b><span>CORE</span><p>{ru?'Готово. Найдено 6 связанных сигналов и 3 следующих действия.':'Done. 6 related signals and 3 next actions found.'}</p></div></div>
 if(theme==='dashboard') return <div className="site-visual dash-site"><div className="dash-top"><BarChart3 size={15}/><span>LIVE / 09:41</span></div><div className="dash-metrics"><b>84%<small>capacity</small></b><b>28<small>projects</small></b><b>91%<small>on track</small></b></div><div className="dash-graph"><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
 if(theme==='mobile') return <div className="site-visual mobile-site"><div className="mini-phone"><div className="mini-phone-head">09:41 <span>•••</span></div><small>MY WORKSPACE</small><h4>78%</h4><div className="mini-progress"/><div className="mini-row"><CheckCircle2 size={11}/> 3 tasks today</div><div className="mini-row"><MessageSquare size={11}/> 4 new messages</div></div></div>
 if(theme==='dev') return <div className="site-visual dev-site"><div className="code-panel"><div><span>PROJECT / NEXUM</span><b>app.tsx</b></div><pre>{`export default function App() {
  return <Workspace />
}`}</pre></div><div className="preview-panel"><div className="preview-dot"/><div/><div/><div/></div></div>
 if(theme==='gruzli') return <div className="site-visual gruzli-site"><div className="gruzli-map"><span/><span/><span/><span/><div className="gruzli-route"/></div><div className="gruzli-order"><b>{ru?'Заявка #2048':'Request #2048'}</b><span>{ru?'Москва · сегодня':'Moscow · today'}</span><strong>{ru?'4 грузчика':'4 loaders'}</strong><button>{ru?'Найти команду':'Find a team'}</button></div></div>
 return <div className="site-visual construction-site"><div className="site-sidebar"><Building2 size={15}/><span/><span/><span/><span/></div><div className="site-kanban"><div><b>IN PROGRESS</b><i/><i/></div><div><b>READY</b><i/><i/><i/></div><div><b>TEAM</b><Users size={15}/><i/></div></div><Workflow className="site-floating-icon" size={17}/></div>
}
