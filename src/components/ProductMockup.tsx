import {Bot, CheckCircle2, CircleUserRound, FileText, MessageSquare, Search, ShoppingBag, Sparkles, Users, Zap, Plug, ArrowUpRight, Layers3, Workflow, Database, Bell} from 'lucide-react'

type Props={kind:'dashboard'|'mobile'|'ai'|'commerce'|'platform'|'telegram'|'plugin'|'website';large?:boolean}

export default function ProductMockup({kind,large=false}:Props){
 if(kind==='mobile') return <Mobile/>
 if(kind==='telegram') return <Telegram/>
 if(kind==='plugin') return <Plugin/>
 if(kind==='website') return <Website/>
 return <div className={`browser-scene ${large?'large':''} mockup-${kind}`}>
   <div className="browser">
     <div className="browser-bar"><span/><span/><span/><div className="address">app.nexum.systems</div><div className="browser-status"/></div>
     <div className="product-ui">{kind==='ai'?<AI/>:kind==='commerce'?<Commerce/>:<Dashboard platform={kind==='platform'}/>}</div>
   </div>
 </div>
}

function Dashboard({platform}:{platform:boolean}){
 return <>
  <aside className="ui-side">
   <b>{platform?'FIELD / OS':'studio'}</b>
   <span className="active">Overview</span><span>Projects</span><span>People</span><span>Activity</span>
   <div className="side-bottom"><span>Settings</span><span>Help</span></div>
  </aside>
  <main className="ui-main">
   <div className="ui-head"><div><small>{platform?'OPERATIONS / TODAY':'ANALYTICS / TODAY'}</small><h3>{platform?'Project overview':'Good morning'}</h3></div><CircleUserRound size={25}/></div>
   <div className="metric-row">
    <div><small>REVENUE</small><strong>$84.2k</strong><em>+12.8%</em><span className="metric-spark"><i/><i/><i/><i/><i/></span></div>
    <div><small>PROJECTS</small><strong>28</strong><em>+4 this month</em><span className="metric-mini-bars"><i/><i/><i/><i/></span></div>
    <div><small>ACTIVE USERS</small><strong>4,892</strong><em>+18%</em><span className="metric-ring">84%</span></div>
   </div>
   <div className="chart"><div className="chart-head"><span>Performance</span><span>Last 30 days⌄</span></div><div className="bars">{[42,64,50,78,57,88,72,96,69,82,75,91].map((h,i)=><i key={i} style={{height:h+'%'}}/>)}</div><div className="chart-axis"><span>01</span><span>10</span><span>20</span><span>30</span></div></div>
   <div className="activity"><span>Recent activity</span><b><CheckCircle2 size={14}/> Project updated</b><b><Users size={14}/> New team member</b><b><Bell size={13}/> 3 alerts</b></div>
  </main>
 </>
}

function AI(){
 return <>
  <aside className="ui-side"><b>AI / 01</b><span className="active">Assistant</span><span>Sources</span><span>History</span><div className="side-bottom"><span>Models</span></div></aside>
  <main className="ui-main ai-main">
   <div className="ui-head"><div><small>AI WORKSPACE / ONLINE</small><h3>What can I help with?</h3></div><div className="ai-online"><span/> LIVE</div></div>
   <div className="ai-message"><div className="ai-avatar"><Sparkles size={15}/></div><div><b>Workspace Assistant</b><p>I can analyze your workspace, summarize activity and turn requests into actions.</p><div className="ai-source-row"><span><Database size={10}/> 14 sources</span><span><Workflow size={10}/> 6 actions</span></div></div></div>
   <div className="prompt"><Search size={16}/><span>Ask anything about the product...</span><button>↑</button></div>
   <div className="ai-suggestions"><span>Summarize this week</span><span>Find open tasks</span><span>Draft a report</span></div><div className="ai-foot"><span>MODEL / NEXUM CORE</span><span>READY</span></div>
  </main>
 </>
}

function Commerce(){
 return <main className="commerce">
  <div className="commerce-nav"><b>OBJECT / 01</b><span>New collection</span><ShoppingBag size={18}/></div>
  <div className="commerce-hero"><div><small>SPRING / 2026</small><h3>Objects<br/>for everyday.</h3><button>Explore collection →</button></div><div className="product-orb"/></div>
  <div className="commerce-meta"><span>01 — 12</span><span>Designed for daily use</span></div>
 </main>
}

function Website(){return <div className="website-scene"><div className="website-nav"><b>FORMA</b><span>Index</span><span>Projects</span><span>About</span><span>↗</span></div><div className="website-hero"><small>DIGITAL PRODUCT STUDIO</small><h3>Ideas<br/><i>into products.</i></h3><p>Strategy, design and technology for ambitious digital businesses.</p></div><div className="website-grid"><span>01 / 06</span><b>Selected work</b><span>Scroll ↓</span></div><div className="website-accent"><span>STRATEGY</span><span>DESIGN</span><span>ENGINEERING</span></div></div>}

function Telegram(){return <div className="telegram-scene"><div className="telegram-window"><div className="telegram-head"><Bot size={15}/><div><b>Nexum Bot</b><span>online</span></div></div><div className="telegram-chat"><div className="tg-date">TODAY</div><div className="tg-bubble bot">Привет. Чем могу помочь?<small>09:41</small></div><div className="tg-bubble user">Найди открытые заявки на сегодня.<small>09:42</small></div><div className="tg-bubble bot">Нашёл 12 заявок. Сформировать подборку?<small>09:42</small></div></div><div className="tg-actions"><span>Мои заявки</span><span>Новая заявка</span><span>Поддержка</span></div></div></div>}

function Plugin(){return <div className="plugin-scene"><div className="plugin-panel"><div className="plugin-top"><span><Plug size={13}/> NEXUM PLUGIN</span><span>•••</span></div><div className="plugin-title">AI tools<br/><i>inside your workflow.</i></div><div className="plugin-actions"><button><Sparkles size={13}/> Generate</button><button><Search size={13}/> Analyze</button><button><Zap size={13}/> Automate</button></div><div className="plugin-footer"><span><Layers3 size={10}/> Connected to workspace</span><b>●</b></div></div></div>}

function Mobile(){
 return <div className="device-scene"><div className="phone">
  <div className="phone-speaker"/>
  <div className="phone-screen">
   <div className="mini-top"><span>09:41</span><span>● ● ●</span></div>
   <div className="mobile-profile"><span>MY WORKSPACE</span><CircleUserRound size={14}/></div>
   <p className="eyebrow">MONDAY, 28 SEP</p><h4>Your workspace</h4>
   <div className="phone-stat"><span>WEEKLY PROGRESS</span><strong>78%</strong><i><b/></i><small>+12% from last week</small><em>ON TRACK</em></div>
   <div className="phone-list"><div><Zap size={12}/><span>3 tasks due today</span><b>›</b></div><div><FileText size={12}/><span>2 reports ready</span><b>›</b></div><div><MessageSquare size={12}/><span>4 new messages</span><b>›</b></div></div>
   <div className="phone-nav"><span className="active"/><span/><span/><span/><b><ArrowUpRight size={10}/></b></div>
  </div>
 </div></div>
}
