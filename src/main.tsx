import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './styles.css'

const runtimeGuard=()=>{const onError=(e:ErrorEvent)=>{try{localStorage.setItem('nexum-runtime-error',JSON.stringify({type:'error',message:e.error?.stack||e.message,time:new Date().toISOString()}))}catch{}};const onReject=(e:PromiseRejectionEvent)=>{try{localStorage.setItem('nexum-runtime-rejection',JSON.stringify({type:'unhandledrejection',message:String(e.reason),time:new Date().toISOString()}))}catch{}};window.addEventListener('error',onError);window.addEventListener('unhandledrejection',onReject);return()=>{window.removeEventListener('error',onError);window.removeEventListener('unhandledrejection',onReject)}}


runtimeGuard()
createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>)