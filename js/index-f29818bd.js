import{_ as p}from"./preload-helper-f651ca80.js";import{H as c}from"./rounded-button-6b29b554.js";import{F as d,d as f}from"./index-0c37ef3b.js";import{_ as v}from"./CheckCircleOutlined-671315e4.js";import{q as g,aM as i,K as _,x as h}from"./app-5a2221a4.js";import{T as y}from"./two-col-2e7b2c61.js";import{J as S}from"./use-store-ref-0fa0f74b.js";import{k as T,y as l,U as e,F as E}from"./Button-5ec267f1.js";import"./use-async-monaco-a28c8a58.js";import"./index-f48bd189.js";import"./Spin-2c3e5ca3.js";import"./index-1b8f17cb.js";import"./editor.main-dc93c917.js";import"./editor.api-4e51eec6.js";import"./monaco.contribution-6af567af.js";import"./use-save-confirm-7fb4feea.js";import"./vue.runtime.esm-bundler-8c96fb9f.js";import"./Card-73dd4072.js";const q=T({setup(){const o=S("debug-serverless",f),u=g(),a=l(),n=l(""),s=async()=>{try{const r=await h.api.debug.function.post({data:{function:o.value},errorHandler:t=>{n.value=`Error: ${t.data.message}`,u.error(t.data.message)}});p(()=>import("./editor.main-dc93c917.js").then(t=>t.e),["js/editor.main-dc93c917.js","js/editor.api-4e51eec6.js","assets/editor-e5ad2865.css","js/preload-helper-f651ca80.js","js/monaco.contribution-6af567af.js","assets/editor-eefcd250.css"]).then(t=>{t.editor.colorize(JSON.stringify(r.data,null,2),"typescript",{tabSize:2}).then(m=>{a.value.innerHTML=m}).catch(()=>{a.value.innerHTML=JSON.stringify(r,null,2)})})}catch{}};return()=>e(_,{actionsElement:e(E,null,[e(c,{icon:e(v,null,null),onClick:s},null)])},{default:()=>[e(y,null,{default:()=>[e(i,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(d,{value:o,onSave:s},null)])]}),e(i,{span:"18"},{default:()=>[e("pre",{class:"overflow-auto max-h-[calc(100vh-10rem)] !bg-none !bg-transparent",ref:a},[n.value])]})]})]})}});export{q as default};
