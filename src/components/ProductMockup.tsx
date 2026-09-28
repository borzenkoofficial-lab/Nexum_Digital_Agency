import {Bot, CheckCircle2, CircleUserRound, FileText, MessageSquare, Search, ShoppingBag, Sparkles, Users, Zap, Plug, ArrowUpRight, Layers3, Workflow, Database, Bell} from 'lucide-react'

type Props={kind:'dashboard'|'mobile'|'ai'|'commerce'|'platform'|'telegram'|'plugin'|'website';large?:boolean;language?:'ru'|'en'}

export default function ProductMockup({kind,large=false,language='ru'}:Props){
 if(kind==='mobile') return <Mobile language={language}/>
 if(kind==='telegram') return <Telegram language={language}/>
 if(kind==='plugin') return <Plugin language={language}/>
 if(kind==='website') return <Website language={language}/>
 return <div className={`browser-scene ${large?'large':''} mockup-${kind}`}>
   <div className="browser">
     <div className="browser-bar"><span/><span/><span/><div className="address">app.nexum.systems</div><div className="browser-status"/></div>
     <div className="product-ui">{kind==='ai'?<AI language={language}/>:kind==='commerce'?<Commerce language={language}/>:<Dashboard platform={kind==='platform'} language={language}/>}</div>
   </div>
 </div>
}

function Dashboard({platform,language}:{platform:boolean;language:'ru'|'en'}){
 return <>
  <aside className="ui-side">
   <b>{platform?(language==='ru'?'ПОЛЕ / OS':'FIELD / OS'):'studio'}</b>
   <span className="active">{language==='ru'?'Обзор':'Overview'}</span><span>{language==='ru'?'Проекты':'Projects'}</span><span>{language==='ru'?'Команда':'People'}</span><span>{language==='ru'?'Активность':'Activity'}</span>
   <div className="side-bottom"><span>{language==='ru'?'Настройки':'Settings'}</span><span>{language==='ru'?'Помощь':'Help'}</span></div>
  </aside>
  <main className="ui-main">
   <div className="ui-head"><div><small>{platform?(language==='ru'?'ОПЕРАЦИИ / СЕГОДНЯ':'OPERATIONS / TODAY'):(language==='ru'?'АНАЛИТИКА / СЕГОДНЯ':'ANALYTICS / TODAY')}</small><h3>{platform?(language==='ru'?'Обзор проектов':'Project overview'):(language==='ru'?'Доброе утро':'Good morning')}</h3></div><CircleUserRound size={25}/></div>
   <div className="metric-row atlas-metrics">
    <div><small>ACTIVE {language==='ru'?'ПРОЕКТЫ':'PROJECTS'}</small><strong>28</strong><em>+4 this month</em><span className="metric-spark"><i/><i/><i/><i/><i/></span></div>
    <div><small>TEAM CAPACITY</small><strong>84%</strong><em>6 teams online</em><span className="metric-mini-bars"><i/><i/><i/><i/></span></div>
    <div><small>ON SCHEDULE</small><strong>91%</strong><em>+6.4% this week</em><span className="metric-ring">91%</span></div>
   </div>
   <div className="atlas-plan"><div className="chart-head"><span>{language==='ru'?'Ход проектов':'Project flow'}</span><span>{language==='ru'?'ЭТА НЕДЕЛЯ / LIVE':'THIS WEEK / LIVE'}</span></div><div className="atlas-track"><i/><i/><i/><i/><i/><i/></div><div className="atlas-labels"><span>{language==='ru'?'Планирование':'Planning'}</span><span>{language==='ru'?'Дизайн':'Design'}</span><span>{language==='ru'?'Разработка':'Build'}</span><span>{language==='ru'?'Проверка':'Review'}</span><span>{language==='ru'?'Запуск':'Launch'}</span></div></div>
   <div className="activity atlas-activity"><span>{language==='ru'?'ОПЕРАЦИИ В РЕАЛЬНОМ ВРЕМЕНИ':'LIVE OPERATIONS'}</span><b><CheckCircle2 size={14}/> {language==='ru'?'Atlas / готов к проверке':'Atlas / ready for review'}</b><b><Users size={14}/> {language==='ru'?'Команда 04 / онлайн':'Team 04 / online'}</b><b><Bell size={13}/> {language==='ru'?'3 элемента требуют внимания':'3 items need attention'}</b></div>
  </main>
 </>
}

function AI({language}:{language:'ru'|'en'}){
 return <>
  <aside className="ui-side"><b>AI / 01</b><span className="active">{language==='ru'?'Ассистент':'Assistant'}</span><span>{language==='ru'?'Источники':'Sources'}</span><span>{language==='ru'?'История':'History'}</span><div className="side-bottom"><span>{language==='ru'?'Модели':'Models'}</span></div></aside>
  <main className="ui-main ai-main">
   <div className="ui-head"><div><small>{language==='ru'?'AI-ПРОСТРАНСТВО / ОНЛАЙН':'AI WORKSPACE / ONLINE'}</small><h3>{language==='ru'?'Чем я могу помочь?':'What can I help with?'</h3></div><div className="ai-online"><span/> LIVE</div></div>
   <div className="ai-message"><div className="ai-avatar"><Sparkles size={15}/></div><div><b>{language==='ru'?'Ассистент пространства':'Workspace Assistant'}</b><p>{language==='ru'?'Я анализирую рабочее пространство, обобщаю активность и превращаю запросы в действия.':'I can analyze your workspace, summarize activity and turn requests into actions.'}</p><div className="ai-source-row"><span><Database size={10}/> 14 sources</span><span><Workflow size={10}/> 6 actions</span></div></div></div>
   <div className="prompt"><Search size={16}/><span>{language==='ru'?'Задайте вопрос о продукте...':'Ask anything about the product...'}</span><button>↑</button></div>
   <div className="ai-suggestions"><span>{language==='ru'?'Сводка за неделю':'Summarize this week'}</span><span>{language==='ru'?'Найти открытые задачи':'Find open tasks'}</span><span>{language==='ru'?'Создать отчёт':'Draft a report'}</span></div><div className="ai-foot"><span>MODEL / NEXUM CORE</span><span>READY</span></div>
  </main>
 </>
}

function Commerce({language}:{language:'ru'|'en'}){
 return <main className="commerce">
  <div className="commerce-nav"><b>OBJECT / 01</b><span>{language==='ru'?'Новая коллекция':'New collection'}</span><ShoppingBag size={18}/></div>
  <div className="commerce-hero"><div><small>SPRING / 2026</small><h3>{language==='ru'?'Предметы<br/>на каждый день.':'Objects<br/>for everyday.'}</h3><button>{language==='ru'?'Смотреть коллекцию →':'Explore collection →'}</button></div><div className="product-orb"/></div>
  <div className="commerce-meta"><span>01 — 12</span><span>{language==='ru'?'Создано для ежедневного использования':'Designed for daily use'}</span></div>
 </main>
}

function Website({language}:{language:'ru'|'en'}){return <div className="website-scene"><div className="website-nav"><b>FORMA</b><span>{language==='ru'?'Главная':'Index'}</span><span>{language==='ru'?'Проекты':'Projects'}</span><span>{language==='ru'?'О нас':'About'}</span><span>↗</span></div><div className="website-hero"><small>{language==='ru'?'СТУДИЯ ЦИФРОВЫХ ПРОДУКТОВ':'DIGITAL PRODUCT STUDIO'}</small><h3>{language==='ru'?<>Идеи<br/><i>в продукты.</i></>:<>Ideas<br/><i>into products.</i></>}</h3><p>{language==='ru'?'Стратегия, дизайн и технологии для цифрового бизнеса.':'Strategy, design and technology for ambitious digital businesses.'}</p></div><div className="website-grid"><span>01 / 06</span><b>{language==='ru'?'Избранные работы':'Selected work'}</b><span>Scroll ↓</span></div><div className="website-accent"><span>STRATEGY</span><span>DESIGN</span><span>ENGINEERING</span></div></div>}

function Telegram({language}:{language:'ru'|'en'}){return <div className="telegram-scene"><div className="telegram-window"><div className="telegram-head"><Bot size={15}/><div><b>Nexum Bot</b><span>online</span></div></div><div className="telegram-chat"><div className="tg-date">TODAY</div><div className="tg-bubble bot">{language==='ru'?'Привет. Чем могу помочь?':'Hi. How can I help?'}<small>09:41</small></div><div className="tg-bubble user">{language==='ru'?'Найди открытые заявки на сегодня.':'Find open requests for today.'}<small>09:42</small></div><div className="tg-bubble bot">{language==='ru'?'Нашёл 12 заявок. Сформировать подборку?':'Found 12 requests. Create a shortlist?'}<small>09:42</small></div></div><div className="tg-actions"><span>{language==='ru'?'Мои заявки':'My requests'}</span><span>{language==='ru'?'Новая заявка':'New request'}</span><span>{language==='ru'?'Поддержка':'Support'}</span></div></div></div>}

function Plugin({language}:{language:'ru'|'en'}){return <div className="plugin-scene"><div className="plugin-panel"><div className="plugin-top"><span><Plug size={13}/> NEXUM PLUGIN</span><span>•••</span></div><div className="plugin-title">{language==='ru'?<>AI-инструменты<br/><i>прямо в вашем процессе.</i></>:<>AI tools<br/><i>inside your workflow.</i></>}</div><div className="plugin-actions"><button><Sparkles size={13}/> {language==='ru'?'Создать':'Generate'}</button><button><Search size={13}/> {language==='ru'?'Анализировать':'Analyze'}</button><button><Zap size={13}/> {language==='ru'?'Автоматизировать':'Automate'}</button></div><div className="plugin-footer"><span><Layers3 size={10}/> {language==='ru'?'Подключено к рабочему пространству':'Connected to workspace'}</span><b>●</b></div></div></div>}

function Mobile({language}:{language:'ru'|'en'}){
 return <div className="device-scene"><div className="phone">
  <div className="phone-speaker"/>
  <div className="phone-screen">
   <div className="mini-top"><span>09:41</span><span>● ● ●</span></div>
   <div className="mobile-profile"><span>{language==='ru'?'МОЁ ПРОСТРАНСТВО':'MY WORKSPACE'}</span><CircleUserRound size={14}/></div>
   <p className="eyebrow">{language==='ru'?'ПОНЕДЕЛЬНИК, 28 СЕН':'MONDAY, 28 SEP'}</p><h4>{language==='ru'?'Ваше пространство':'Your workspace'}</h4>
   <div className="phone-stat"><span>{language==='ru'?'ПРОГРЕСС ЗА НЕДЕЛЮ':'WEEKLY PROGRESS'}</span><strong>78%</strong><i><b/></i><small>{language==='ru'?'+12% за неделю':'+12% from last week'}</small><em>{language==='ru'?'ПО ПЛАНУ':'ON TRACK'}</em></div>
   <div className="phone-list"><div><Zap size={12}/><span>{language==='ru'?'3 задачи на сегодня':'3 tasks due today'}</span><b>›</b></div><div><FileText size={12}/><span>{language==='ru'?'2 отчёта готовы':'2 reports ready'}</span><b>›</b></div><div><MessageSquare size={12}/><span>{language==='ru'?'4 новых сообщения':'4 new messages'}</span><b>›</b></div></div>
   <div className="phone-nav"><span className="active"/><span/><span/><span/><b><ArrowUpRight size={10}/></b></div>
  </div>
 </div></div>
}
