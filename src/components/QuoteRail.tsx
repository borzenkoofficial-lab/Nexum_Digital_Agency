import {Quote,ArrowUpRight} from 'lucide-react'
import {useEffect,useState} from 'react'
type Language='ru'|'en'
const data={
 ru:[
  ['FIELD NOTE 01','Цифровой продукт должен оставлять пространство для любопытства.'],
  ['FIELD NOTE 02','Если всё понятно с первого экрана — возможно, там нечего исследовать.'],
  ['FIELD NOTE 03','Хороший интерфейс скрывает сложность, но не скрывает возможности.'],
  ['FIELD NOTE 04','Система начинается там, где заканчивается отдельная страница.'],
 ],
 en:[
  ['FIELD NOTE 01','A digital product should leave room for curiosity.'],
  ['FIELD NOTE 02','If everything is clear on the first screen, there may be nothing left to explore.'],
  ['FIELD NOTE 03','A good interface hides complexity without hiding possibility.'],
  ['FIELD NOTE 04','A system begins where a single page ends.'],
 ]
} as const
export default function QuoteRail({language,section='NEXUM SIGNAL'}:{language:Language;section?:string}){
 const ru=language==='ru';const items=data[ru?'ru':'en'];const[index,setIndex]=useState(0)
 useEffect(()=>{const id=window.setInterval(()=>setIndex(v=>(v+1)%items.length),5200);return()=>window.clearInterval(id)},[items.length])
 return <section className="quote-rail" aria-label="NEXUM field notes"><div className="quote-rail-mark"><Quote size={15}/><span>{section}</span><small>0{index+1} / 04</small></div><div className="quote-rail-main" key={index}><b>{items[index][1]}</b><span>{items[index][0]}</span></div><a href="#top" className="quote-rail-link">{ru?'Вернуться наверх':'Back to top'} <ArrowUpRight size={13}/></a></section>
}
