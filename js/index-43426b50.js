import{a as f,u as b}from"./use-async-monaco-a28c8a58.js";import{aM as p,K as g,x as y}from"./app-5a2221a4.js";import{T as N}from"./two-col-2e7b2c61.js";import{E as m}from"./types-a9f3cfbf.js";import{J as s}from"./use-store-ref-0fa0f74b.js";import{k as S,y as T,au as h,U as a,aO as w,br as x}from"./Button-5ec267f1.js";import{N as M}from"./Form-4f2beb1e.js";import{N as i}from"./FormItem-32059e79.js";import{N as d}from"./Select-410a3ac9.js";import"./preload-helper-f651ca80.js";import"./index-f48bd189.js";import"./Spin-2c3e5ca3.js";import"./index-1b8f17cb.js";import"./editor.main-dc93c917.js";import"./editor.api-4e51eec6.js";import"./monaco.contribution-6af567af.js";import"./use-save-confirm-7fb4feea.js";import"./Card-73dd4072.js";import"./context-2fd66e76.js";import"./light-50e066bd.js";import"./light-1d805342.js";import"./Tag-62076a6b.js";import"./_common-991711fd.js";const C=t=>{switch(t){case"objectId":return((o=Math,r=Date,l=16,u=n=>o.floor(n).toString(l))=>u(r.now()/1e3)+" ".repeat(l).replace(/./g,()=>u(o.random()*l)))();case"now":return new Date().toISOString();case"randomtext":return btoa(Math.random().toString()).substring(10,5);case"randomnumber":return Math.floor(Math.random()*1e4);default:return`{{${t}}}`}},Y=S({setup(){const t=s("debug-event-name",m.POST_CREATE),o=s("debug-event",{}),r=s("debug-event-type","web"),l=f({value:o.value[t.value]||"export default {}"}),u=T();h(()=>t.value,e=>{n.editor.setValue(o.value[e]||"")});const n=b(u,l,e=>{o.value={...o.value,[t.value]:e}},{language:"typescript",unSaveConfirm:!1}),c=async()=>{const e=o.value[t.value]?.replace(/(\{\{(.*?)\}\})/g,(E,V,v)=>C(v))??"";y.api.debug.events.post({params:{type:r.value,event:t.value},data:new Function(`return ${e.replace(/^export default /,"")}`)()})};return()=>a(g,null,{default:()=>[a(N,null,{default:()=>[a(p,{span:"12"},{default:()=>[a(M,null,{default:()=>[a(i,{label:"Type"},{default:()=>[a(d,{tag:!0,filterable:!0,value:r.value,onUpdateValue:e=>void(r.value=e),options:["web","all","admin"].map(e=>({value:e,label:e}))},null)]}),a(i,{label:"Event"},{default:()=>[a(d,{tag:!0,filterable:!0,value:t.value,onUpdateValue:e=>void(t.value=e),options:Object.keys(m).map(e=>({value:e,label:e}))},null)]})]}),a("div",null,[a(w,{type:"primary",onClick:c},{default:()=>[x("测试")]})])]}),a(p,{span:"24"},{default:()=>[a("div",{class:"h-[calc(100vh-20rem)] relative"},[a("div",{ref:u,class:"h-full"},null)])]})]})]})}});export{Y as default};
