export type Work={id:string;title:string;category:string;description:string;kind:'dashboard'|'mobile'|'ai'|'commerce'|'platform';result:string}
export const services=[
{n:'01',title:'Websites',text:'Editorial websites and conversion-focused digital experiences built around a clear product story.'},
{n:'02',title:'Web Applications',text:'Fast, responsive interfaces for complex workflows, dashboards, marketplaces and internal tools.'},
{n:'03',title:'AI & Bots',text:'AI assistants, Telegram bots and intelligent product layers that turn repetitive work into actions.'},
{n:'04',title:'Automation',text:'Connected workflows that remove manual operations across sales, support, finance and delivery.'},
{n:'05',title:'Digital Products',text:'From product strategy and UX to a production-ready interface and technical foundation.'},
{n:'06',title:'Support & Development',text:'Continuous improvement, new features, performance work and reliable product maintenance.'}
]
export const works:Work[]=[
{id:'01',title:'Construction Platform',category:'WEB APPLICATION',description:'A field operations platform connecting requests, teams, schedules and project intelligence.',kind:'platform',result:'A single operational workspace for a distributed team.'},
{id:'02',title:'AI Assistant',category:'AI PRODUCT',description:'A conversational workbench that turns company knowledge into useful, actionable answers.',kind:'ai',result:'A faster path from question to decision.'},
{id:'03',title:'Business Dashboard',category:'DATA PRODUCT',description:'A calm command center for metrics, activity, users and operational signals.',kind:'dashboard',result:'One visual language for complex business data.'},
{id:'04',title:'Commerce Platform',category:'DIGITAL COMMERCE',description:'A product-first commerce experience designed around discovery, trust and speed.',kind:'commerce',result:'A cleaner buying journey across devices.'},
{id:'05',title:'Mobile Application',category:'MOBILE PRODUCT',description:'A focused mobile interface that makes a complex service feel simple in the hand.',kind:'mobile',result:'A compact product experience with native rhythm.'}
]
export const tech=['React / TypeScript','Node.js / APIs','Python / AI','Cloud / Infrastructure','Automation / Integrations']
export const process=[['01','DISCOVER','Clarify the business problem, audience, constraints and measurable outcome.'],['02','PLAN','Shape the product architecture, scope, flows and delivery roadmap.'],['03','DESIGN','Build the visual language and interface around real product scenarios.'],['04','BUILD','Develop the experience with reusable components and production-ready foundations.'],['05','TEST','Validate responsive behavior, interactions, accessibility and edge cases.'],['06','LAUNCH','Ship, measure and keep improving the product after release.']]