import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/platform.css'
import './styles/nexum-v2.css'
createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>)