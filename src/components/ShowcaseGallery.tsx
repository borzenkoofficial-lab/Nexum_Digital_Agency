import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Maximize2, Monitor, Smartphone, X } from 'lucide-react'

type Language = 'ru' | 'en'
type Category = 'ALL' | 'WEB' | 'PRODUCTS' | 'AI' | 'MOBILE' | 'E-COMMERCE'

type ShowcaseItem = {
  id: string
  category: Exclude<Category,'ALL'>
  title: string
  ruTitle: string
  description: string
  ruDescription: string
  tone: string
  screens: number
}

const items: ShowcaseItem[] = [
  {id:'architecture',category:'WEB',title:'Architecture Platform',ruTitle:'Архитектурная платформа',description:'Editorial web experience for a modern architecture studio.',ruDescription:'Редакционный digital-продукт для архитектурной студии.',tone:'blue',screens:3},
  {id:'ai-saas',category:'AI',title:'AI SaaS',ruTitle:'AI SaaS',description:'AI workspace with assistant, analytics and workflow views.',ruDescription:'AI-продукт с ассистентом, аналитикой и рабочими сценариями.',tone:'violet',screens:4},
  {id:'commerce',category:'E-COMMERCE',title:'Premium Commerce',ruTitle:'Premium E-commerce',description:'High-end commerce experience with product storytelling.',ruDescription:'Премиальный e-commerce с акцентом на продукт и визуальную подачу.',tone:'gold',screens:3},
  {id:'mobile',category:'MOBILE',title:'Mobile Product',ruTitle:'Мобильный продукт',description:'Mobile-first interface for a consumer digital product.',ruDescription:'Mobile-first интерфейс цифрового продукта.',tone:'green',screens:4},
  {id:'dashboard',category:'PRODUCTS',title:'Business Dashboard',ruTitle:'Бизнес-дашборд',description:'Operational workspace for teams, metrics and workflows.',ruDescription:'Рабочая система для команд, метрик и операционных процессов.',tone:'blue',screens:3},
  {id:'assistant',category:'AI',title:'AI Assistant',ruTitle:'AI Assistant',description:'Conversational AI interface connected to business knowledge.',ruDescription:'AI-интерфейс, работающий с базой знаний бизнеса.',tone:'violet',screens:3}
]

const categoryLabels: Record<Category,[string,string]> = {
  ALL:['ALL','ВСЕ'],WEB:['WEB','WEB'],PRODUCTS:['PRODUCTS','ПРОДУКТЫ'],AI:['AI','AI'],MOBILE:['MOBILE','МОБИЛЬНЫЕ'], 'E-COMMERCE':['E-COMMERCE','E-COMMERCE']
}

function go(hash:string){ location.hash = hash.startsWith('#') ? hash : '#'+hash }

function Preview({item,mobile=false,screen=0}:{item:ShowcaseItem;mobile?:boolean;screen?:number}){
  return <div className={'nx-showcase-preview nx-showcase-'+item.tone+(mobile?' nx-showcase-mobile':'')}>
    <div className="nx-showcase-noise"/>
    <div className="nx-showcase-orbit one"/><div className="nx-showcase-orbit two"/>
    <div className="nx-showcase-window">
      <div className="nx-showcase-windowbar"><span/><span/><span/><b>{item.category} / 0{screen+1}</b></div>
      <div className="nx-showcase-content">
        <small>NEXUM DIGITAL</small>
        <strong>{item.title}</strong>
        <div className="nx-showcase-ui">
          <div className="nx-showcase-ui-main"><i/><i/><i/><i/></div>
          <div className="nx-showcase-ui-side"><i/><i/><i/></div>
        </div>
        <div className="nx-showcase-metric"><b>{mobile ? 'MOBILE' : 'DESKTOP'}</b><span>PRODUCT / EXPERIENCE / SYSTEM</span></div>
      </div>
    </div>
  </div>
}

export default function ShowcaseGallery({language}:{language:Language}){
  const ru=language==='ru'
  const [category,setCategory]=useState<Category>('ALL')
  const [selected,setSelected]=useState<ShowcaseItem|null>(null)
  const [mobile,setMobile]=useState(false)
  const [screen,setScreen]=useState(0)
  const visible=category==='ALL'?items:items.filter(x=>x.category===category)
  const index=selected?visible.findIndex(x=>x.id===selected.id):-1

  useEffect(()=>{
    if(!selected)return
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==='Escape')setSelected(null)
      if(e.key==='ArrowRight'&&index>=0)setSelected(visible[(index+1)%visible.length])
      if(e.key==='ArrowLeft'&&index>=0)setSelected(visible[(index-1+visible.length)%visible.length])
    }
    addEventListener('keydown',onKey)
    const previous=document.body.style.overflow
    document.body.style.overflow='hidden'
    return()=>{removeEventListener('keydown',onKey);document.body.style.overflow=previous}
  },[selected,index,visible])

  return <section className="nx-showcase-section">
    <style>{`
      .nx-showcase-section{padding:105px 6vw;background:#f5f6f8;border-top:1px solid #e3e5e9}
      .nx-showcase-head{display:grid;grid-template-columns:1fr 1fr;gap:7vw;margin-bottom:42px}
      .nx-showcase-head small{font-size:9px;letter-spacing:.14em;color:#8b8f99}
      .nx-showcase-head h2{font-size:clamp(50px,7vw,94px);line-height:.88;letter-spacing:-.075em;font-weight:500;margin:14px 0}
      .nx-showcase-head h2 em{font-style:normal;color:#9297a1}
      .nx-showcase-head p{max-width:520px;color:#666b75;font-size:13px;line-height:1.65;align-self:end;margin:0}
      .nx-showcase-filters{display:flex;gap:7px;overflow:auto;padding-bottom:14px;margin-bottom:25px}
      .nx-showcase-filter{white-space:nowrap;border:1px solid #dfe1e6;background:rgba(255,255,255,.75);border-radius:999px;padding:9px 13px;font-size:8px;letter-spacing:.08em;color:#747984}
      .nx-showcase-filter.active{background:#111318;border-color:#111318;color:#fff}
      .nx-showcase-grid{display:grid;grid-template-columns:repeat(12,1fr);gap:10px}
      .nx-showcase-card{grid-column:span 6;border:1px solid #e0e2e7;border-radius:20px;background:#fff;padding:9px;text-align:left;transition:transform .25s ease,box-shadow .25s ease;border:0}
      .nx-showcase-card:nth-child(3n){grid-column:span 4}
      .nx-showcase-card:nth-child(4n){grid-column:span 8}
      .nx-showcase-card:hover{transform:translateY(-4px);box-shadow:0 20px 60px rgba(20,24,32,.12)}
      .nx-showcase-card-info{display:flex;justify-content:space-between;gap:20px;padding:16px 10px 10px}
      .nx-showcase-card-info small{font-size:7px;letter-spacing:.12em;color:#979ba4}
      .nx-showcase-card-info strong{display:block;font-size:20px;letter-spacing:-.05em;margin-top:6px}
      .nx-showcase-card-info span{font-size:8px;color:#888c95}
      .nx-showcase-open{width:30px;height:30px;border:1px solid #e2e4e8;border-radius:50%;display:grid;place-items:center;color:#737781}
      .nx-showcase-preview{position:relative;min-height:300px;overflow:hidden;border-radius:14px;background:#dfe5ff;isolation:isolate}
      .nx-showcase-preview.nx-showcase-violet{background:linear-gradient(135deg,#d9d7ff,#f0eaff 48%,#cddcff)}
      .nx-showcase-preview.nx-showcase-blue{background:linear-gradient(135deg,#dbe9ff,#f5f8ff 48%,#c9e8ef)}
      .nx-showcase-preview.nx-showcase-gold{background:linear-gradient(135deg,#eee4ce,#fffdf8 52%,#d9d4c7)}
      .nx-showcase-preview.nx-showcase-green{background:linear-gradient(135deg,#d7efe5,#f7fcfa 52%,#c9e6dc)}
      .nx-showcase-noise{position:absolute;inset:0;opacity:.18;background-image:radial-gradient(#fff 1px,transparent 1px);background-size:5px 5px}
      .nx-showcase-orbit{position:absolute;border:1px solid rgba(255,255,255,.75);border-radius:50%;transform:rotate(-18deg)}
      .nx-showcase-orbit.one{width:75%;height:65%;left:12%;top:15%}.nx-showcase-orbit.two{width:48%;height:90%;left:27%;top:2%;transform:rotate(55deg)}
      .nx-showcase-window{position:absolute;left:12%;right:12%;top:12%;bottom:8%;background:rgba(255,255,255,.72);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.9);border-radius:14px;box-shadow:0 25px 55px rgba(30,40,65,.17);transform:perspective(900px) rotateX(3deg) rotateY(-5deg)}
      .nx-showcase-windowbar{height:28px;border-bottom:1px solid rgba(30,40,65,.08);display:flex;align-items:center;gap:4px;padding:0 9px}.nx-showcase-windowbar span{width:5px;height:5px;border-radius:50%;background:#a7abb4}.nx-showcase-windowbar b{margin-left:auto;font-size:6px;letter-spacing:.1em;color:#838791}
      .nx-showcase-content{padding:18px}.nx-showcase-content small{font-size:6px;letter-spacing:.16em;color:#858a94}.nx-showcase-content strong{display:block;font-size:24px;letter-spacing:-.06em;margin-top:7px;color:#181a1f}.nx-showcase-ui{display:grid;grid-template-columns:1fr 28%;gap:7px;margin-top:18px}.nx-showcase-ui-main,.nx-showcase-ui-side{border:1px solid rgba(30,40,65,.08);border-radius:7px;background:rgba(255,255,255,.65);padding:7px;display:grid;gap:5px}.nx-showcase-ui-main{grid-template-columns:1.4fr 1fr}.nx-showcase-ui i{display:block;border-radius:4px;background:linear-gradient(135deg,rgba(80,110,180,.2),rgba(255,255,255,.7));min-height:22px}.nx-showcase-ui-main i:first-child{grid-row:span 2;min-height:50px}.nx-showcase-metric{display:flex;justify-content:space-between;align-items:end;margin-top:10px}.nx-showcase-metric b{font-size:7px;letter-spacing:.1em}.nx-showcase-metric span{font-size:5px;color:#8d919a}
      .nx-showcase-mobile{width:72%;margin:auto}.nx-showcase-mobile .nx-showcase-window{left:10%;right:10%;top:8%;bottom:6%;border-radius:22px}.nx-showcase-mobile .nx-showcase-windowbar{height:25px}.nx-showcase-mobile .nx-showcase-content strong{font-size:21px}
      .nx-showcase-viewer{position:fixed;inset:0;z-index:250;background:rgba(8,10,14,.72);backdrop-filter:blur(18px);display:grid;grid-template-rows:auto 1fr auto;color:#fff}
      .nx-showcase-viewer-head{padding:20px 28px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,.13)}.nx-showcase-viewer-head small{font-size:8px;letter-spacing:.14em;color:#aeb3bd}.nx-showcase-viewer-head strong{display:block;font-size:18px;margin-top:5px}.nx-showcase-close{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.2);color:#fff;background:rgba(255,255,255,.08);display:grid;place-items:center}
      .nx-showcase-viewer-stage{display:grid;grid-template-columns:70px minmax(0,900px) 70px;justify-content:center;align-items:center;gap:18px;padding:25px}.nx-showcase-nav{width:52px;height:52px;border-radius:50%;border:1px solid rgba(255,255,255,.18);color:#fff;background:rgba(255,255,255,.08);display:grid;place-items:center}.nx-showcase-viewer-stage .nx-showcase-preview{min-height:min(64vh,560px)}
      .nx-showcase-viewer-footer{padding:16px 28px 22px;display:flex;justify-content:space-between;gap:20px;align-items:center;border-top:1px solid rgba(255,255,255,.13)}.nx-showcase-viewer-footer p{font-size:10px;color:#b8bdc7;margin:5px 0 0}.nx-showcase-viewer-controls{display:flex;gap:7px}.nx-showcase-viewer-controls button,.nx-showcase-cta{height:38px;padding:0 13px;border-radius:10px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#fff;display:flex;align-items:center;gap:7px;font-size:9px}.nx-showcase-viewer-controls button.active{background:#fff;color:#111318}.nx-showcase-cta{background:#fff;color:#111318;border-color:#fff}
      @media(max-width:800px){.nx-showcase-section{padding:72px 20px}.nx-showcase-head{grid-template-columns:1fr;gap:12px}.nx-showcase-head h2{font-size:clamp(48px,14vw,70px)}.nx-showcase-grid{display:grid;grid-template-columns:1fr}.nx-showcase-card,.nx-showcase-card:nth-child(3n),.nx-showcase-card:nth-child(4n){grid-column:auto}.nx-showcase-preview{min-height:250px}.nx-showcase-viewer-stage{grid-template-columns:42px minmax(0,1fr) 42px;gap:5px;padding:12px}.nx-showcase-viewer-stage .nx-showcase-preview{min-height:48vh}.nx-showcase-nav{width:38px;height:38px}.nx-showcase-viewer-head{padding:14px 16px}.nx-showcase-viewer-footer{padding:12px 16px 16px;display:grid}.nx-showcase-viewer-footer p{display:none}.nx-showcase-viewer-controls{justify-content:flex-end}.nx-showcase-cta{justify-content:center}}
    `}</style>
    <div className="nx-showcase-head">
      <div><small>07 / NEXUM SHOWCASE</small><h2>{ru?<>Посмотрите,<br/><em>что мы создаём.</em></>:<>Explore what<br/><em>we can build.</em></>}</h2></div>
      <p>{ru?'Готовые визуальные концепции прямо на странице. Откройте проект, переключите Desktop/Mobile и пролистайте экраны — без перехода на отдельную страницу.':'Ready visual concepts directly on the page. Open a concept, switch Desktop/Mobile and browse screens without leaving the page.'}</p>
    </div>
    <div className="nx-showcase-filters">{(Object.keys(categoryLabels) as Category[]).map(c=><button key={c} className={'nx-showcase-filter '+(category===c?'active':'')} onClick={()=>setCategory(c)}>{ru?categoryLabels[c][1]:categoryLabels[c][0]}</button>)}</div>
    <div className="nx-showcase-grid">{visible.map(item=><button key={item.id} className="nx-showcase-card" onClick={()=>{setSelected(item);setScreen(0);setMobile(false)}}>
      <Preview item={item}/><div className="nx-showcase-card-info"><div><small>{item.category}</small><strong>{ru?item.ruTitle:item.title}</strong><span>{ru?item.ruDescription:item.description}</span></div><span className="nx-showcase-open"><Maximize2 size={13}/></span></div>
    </button>)}</div>
    {selected&&<div className="nx-showcase-viewer" role="dialog" aria-modal="true" aria-label={ru?'Просмотр проекта':'Project viewer'}>
      <div className="nx-showcase-viewer-head"><div><small>{selected.category} / NEXUM DIGITAL</small><strong>{ru?selected.ruTitle:selected.title}</strong></div><button className="nx-showcase-close" onClick={()=>setSelected(null)} aria-label="Close"><X size={18}/></button></div>
      <div className="nx-showcase-viewer-stage"><button className="nx-showcase-nav" onClick={()=>{if(index>=0)setSelected(visible[(index-1+visible.length)%visible.length])}} aria-label="Previous"><ArrowLeft size={18}/></button><Preview item={selected} mobile={mobile} screen={screen}/><button className="nx-showcase-nav" onClick={()=>{if(index>=0)setSelected(visible[(index+1)%visible.length])}} aria-label="Next"><ArrowRight size={18}/></button></div>
      <div className="nx-showcase-viewer-footer"><div><b>{ru?'Концепция digital-продукта':'Digital product concept'}</b><p>{ru?selected.ruDescription:selected.description}</p></div><div className="nx-showcase-viewer-controls"><button className={!mobile?'active':''} onClick={()=>setMobile(false)}><Monitor size={13}/> Desktop</button><button className={mobile?'active':''} onClick={()=>setMobile(true)}><Smartphone size={13}/> Mobile</button><button onClick={()=>setScreen((screen+1)%selected.screens)}><ArrowRight size={13}/> {screen+1}/{selected.screens}</button><button className="nx-showcase-cta" onClick={()=>{setSelected(null);go('#start')}}><ExternalLink size={13}/> {ru?'Начать проект':'Start Project'}</button></div></div>
    </div>}
  </section>
}
