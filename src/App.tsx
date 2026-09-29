import {useEffect,useState} from 'react'
import Header from './components/Header'
import ProjectSpace from './components/ProjectSpace'
import MarketplacePage from './components/MarketplacePage'
import DigitalCloud from './components/DigitalCloud'

export type Language='ru'|'en'

function App(){
 const[path,setPath]=useState(location.hash)
 const[language,setLanguage]=useState<Language>(()=>{try{return localStorage.getItem('nexum-language')==='en'?'en':'ru'}catch{return'ru'}})
 useEffect(()=>{const onHash=()=>setPath(location.hash);addEventListener('hashchange',onHash);return()=>removeEventListener('hashchange',onHash)},[])
 useEffect(()=>{try{localStorage.setItem('nexum-language',language)}catch{}},[language])
 const cloud=path===''||path==='#'||path==='#top'||path.startsWith('#services')||path.startsWith('#work')||path.startsWith('#process')||path.startsWith('#about')||path.startsWith('#contact')||path.startsWith('#ecosystem')
 if(path==='#marketplace') return <><Header language={language} onLanguageChange={setLanguage}/><MarketplacePage language={language}/></>
 if(path.startsWith('#case/')) return <><Header language={language} onLanguageChange={setLanguage}/><ProjectSpace id={path.split('/')[1]} language={language}/></>
 return cloud?<><Header language={language} onLanguageChange={setLanguage}/><DigitalCloud language={language}/></>:<><Header language={language} onLanguageChange={setLanguage}/><DigitalCloud language={language}/></>
}
export default App
