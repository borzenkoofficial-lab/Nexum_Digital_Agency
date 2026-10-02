import {useEffect,useState} from 'react'
import Header,{type Language} from './components/Header'
import PlatformRouter from './components/PlatformPages'

export default function App(){
 const [hash,setHash]=useState(location.hash)
 const [language,setLanguage]=useState<Language>(()=>localStorage.getItem('nexum-language')==='en'?'en':'ru')
 useEffect(()=>{const onHash=()=>{setHash(location.hash);window.scrollTo(0,0)};addEventListener('hashchange',onHash);return()=>removeEventListener('hashchange',onHash)},[])
 useEffect(()=>localStorage.setItem('nexum-language',language),[language])
 const auth=hash==='#login'||hash==='#register'
 return <><Header language={language} onLanguageChange={setLanguage}/><PlatformRouter language={language}/>{!auth&&<footer className="nx-footer"><b>NEXUM</b><span>Digital products · AI · Design · Development</span><span>© 2026 NEXUM</span></footer>}</>
}