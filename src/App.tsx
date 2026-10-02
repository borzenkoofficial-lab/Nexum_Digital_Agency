import React,{useEffect,useState} from 'react'
import Header from './components/Header'
import PlatformRouter, { type Language } from './components/PlatformPages'
import NexumOS from './components/NexumOS'
import AdminPanel from './components/AdminPanel'

class AppErrorBoundary extends React.Component<{children:React.ReactNode},{error:Error|null}>{
 state={error:null}
 static getDerivedStateFromError(error:Error){return {error}}
 render(){
  if(this.state.error){
   return <main style={{minHeight:'100vh',display:'grid',placeItems:'center',padding:24,fontFamily:'Inter,-apple-system,BlinkMacSystemFont,sans-serif',background:'#f7f8fa',color:'#101114'}}>
    <div style={{maxWidth:760,width:'100%',padding:32,border:'1px solid #e4e5ea',borderRadius:20,background:'#fff',boxShadow:'0 20px 60px rgba(0,0,0,.08)'}}>
     <small style={{letterSpacing:'.14em',color:'#756ee7'}}>NEXUM / RUNTIME ERROR</small>
     <h1 style={{fontSize:42,letterSpacing:'-.05em',margin:'14px 0'}}>Интерфейс остановился</h1>
     <p style={{color:'#6f727c',lineHeight:1.6}}>Ошибка рендера перехвачена, поэтому вместо пустого экрана показывается диагностика.</p>
     <pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere',padding:16,borderRadius:12,background:'#f5f5f7',fontSize:12,lineHeight:1.5}}>{this.state.error.message}</pre>
     <button onClick={()=>location.reload()} style={{marginTop:16,padding:'11px 16px',borderRadius:10,background:'#101114',color:'#fff'}}>Перезагрузить</button>
    </div>
   </main>
  }
  return this.props.children
 }
}

export default function App(){
 const [path,setPath]=useState(location.hash)
 const [osOpen,setOsOpen]=useState(false)
 const [language,setLanguage]=useState<Language>(()=>{try{return localStorage.getItem('nexum-language')==='en'?'en':'ru'}catch{return'ru'}})
 useEffect(()=>{const onHash=()=>setPath(location.hash);addEventListener('hashchange',onHash);return()=>removeEventListener('hashchange',onHash)},[])
 useEffect(()=>{try{localStorage.setItem('nexum-language',language)}catch{}},[language])
 useEffect(()=>{window.scrollTo({top:0,behavior:'auto'})},[path])
 const purePath=path.split('?')[0]
 const isAuth=purePath==='#login'||purePath==='#register'||purePath==='#forgot-password'||purePath==='#reset-password'
 const isDashboard=purePath.startsWith('#dashboard')||purePath==='#profile'||purePath==='#settings'
 const isAdmin=import.meta.env.DEV&&(location.pathname==='/admin'||purePath==='#admin'||purePath.startsWith('#admin/'))
 if(isAdmin) return <AdminPanel/>
 return <AppErrorBoundary><>{!isAuth&&!isDashboard&&<Header language={language} onLanguageChange={setLanguage} onOpenOS={()=>setOsOpen(true)}/>}<PlatformRouter language={language}/>{!isAuth&&!isDashboard&&<footer className="nxp-footer"><div><b>NEXUM</b><span>Digital services & technology.</span></div><div><strong>Products</strong><button onClick={()=>location.hash='#ai'}>AI</button><button onClick={()=>location.hash='#solutions'}>Solutions</button><button onClick={()=>location.hash='#services'}>Services</button></div><div><strong>Company</strong><button onClick={()=>location.hash='#about'}>About</button><button onClick={()=>location.hash='#business'}>For Business</button><button onClick={()=>location.hash='#experts'}>Experts</button><button onClick={()=>location.hash='#start'}>Contact</button></div><div><strong>Resources</strong><button onClick={()=>location.hash='#journal'}>Knowledge</button><button onClick={()=>location.hash='#support'}>Support</button><button onClick={()=>location.hash='#pricing'}>Pricing</button></div><div><strong>Legal</strong><span>Privacy</span><span>Terms</span><span>Cookies</span></div><div className="nxp-footer-bottom"><span>© 2026 NEXUM Digital</span><span>AI / DEV / DIGITAL / SYSTEMS</span></div></footer>}{osOpen&&<NexumOS language={language} onClose={()=>setOsOpen(false)}/>}</></AppErrorBoundary>
}
