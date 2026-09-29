import {useEffect,useState} from 'react'
import Header from './components/Header'
import ProjectSpace from './components/ProjectSpace'
import DigitalCloud from './components/DigitalCloud'
import ServicesPage from './components/ServicesPage'
import PortfolioPage from './components/PortfolioPage'
import MarketplacePage from './components/MarketplacePage'
import StartProjectPage from './components/StartProjectPage'
export type Language='ru'|'en'
function App(){
 const[path,setPath]=useState(location.hash)
 const[language,setLanguage]=useState<Language>(()=>{try{return localStorage.getItem('nexum-language')==='en'?'en':'ru'}catch{return'ru'}})
 useEffect(()=>{const onHash=()=>setPath(location.hash);addEventListener('hashchange',onHash);return()=>removeEventListener('hashchange',onHash)},[])
 useEffect(()=>{try{localStorage.setItem('nexum-language',language)}catch{}},[language])
 useEffect(()=>{if(path==='#ecosystem'||path==='#process'){requestAnimationFrame(()=>document.getElementById(path.slice(1))?.scrollIntoView({behavior:'smooth'}))}},[path])
 let page=<DigitalCloud language={language}/>
 if(path==='#services')page=<ServicesPage language={language}/>
 else if(path==='#work')page=<PortfolioPage language={language}/>
 else if(path==='#marketplace')page=<MarketplacePage language={language}/>
 else if(path==='#start')page=<StartProjectPage language={language}/>
 else if(path.startsWith('#case/'))page=<ProjectSpace id={path.split('/')[1]} language={language}/>
 return <><Header language={language} onLanguageChange={setLanguage}/>{page}</>
}
export default App
