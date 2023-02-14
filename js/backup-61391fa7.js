import{H as g}from"./rounded-button-6b29b554.js";import{k as p,ag as h,ah as f,ai as u,aq as z,U as t,ak as B,aO as m,br as r,F as C}from"./Button-5ec267f1.js";import{D as F}from"./delete-confirm-0224c4e5.js";import{T as R}from"./index-9895a798.js";import{u as D}from"./use-table-fa04b674.js";import{K as E,x as l,aZ as x}from"./app-5a2221a4.js";import{a as V}from"./Spin-2c3e5ca3.js";import{N as y}from"./Popconfirm-0c3d3f64.js";import"./use-store-ref-0fa0f74b.js";import"./DataTable-24c7be6c.js";import"./ChevronRight-54213128.js";import"./Checkbox-746a5c9b.js";import"./light-cfc8873a.js";import"./light-6dc94989.js";import"./light-6fe3aaa1.js";import"./light-1d805342.js";import"./light-efffb436.js";import"./Card-73dd4072.js";import"./Select-410a3ac9.js";import"./Tag-62076a6b.js";import"./_common-991711fd.js";import"./Pagination-5b5faf1f.js";import"./Forward-414cae36.js";import"./prop-8b8caa29.js";import"./Tooltip-354350ce.js";import"./preload-helper-f651ca80.js";import"./light-013cc201.js";const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},N=u("path",{d:"M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z",fill:"none"},null,-1),$=u("path",{d:"M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4z",fill:"none"},null,-1),M=u("path",{d:"M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33zM176 416l-9-256h33l9 256zm96 0h-32V160h32zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4zm40 320h-33l9-256h33z",fill:"currentColor"},null,-1),H=[N,$,M],I=p({name:"TrashSharp",render:function(a,c){return h(),f("svg",A,H)}}),K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},U=u("path",{d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93c-.32.67.04 1.47.75 1.71c.59.2 1.23-.08 1.5-.64c1.3-2.66 4.03-4.5 7.19-4.5c1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1V9.41c0-.89-1.08-1.34-1.71-.71l-1.89 1.9z",fill:"currentColor"},null,-1),L=[U],P=p({name:"RedoRound",render:function(a,c){return h(),f("svg",K,L)}}),S={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},j=u("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88c3.16 0 5.89 1.84 7.19 4.5c.27.56.91.84 1.5.64c.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z",fill:"currentColor"},null,-1),q=[j],O=p({name:"UndoRound",render:function(a,c){return h(),f("svg",S,q)}}),ke=p(()=>{const{checkedRowKeys:s,data:a,fetchDataFn:c,loading:k}=D(e=>async()=>{const n=(await l.api.backups.get()).data;n.sort((i,d)=>d.filename.localeCompare(i.filename)),e.value=n});z(()=>{c()});const v=async()=>{const e=message.info("备份中",{duration:1e9,closable:!0}),o=await l.api.backups.new.get({responseType:"blob",timeout:1e9});e.destroy(),message.success("备份完成"),x(o,"backup.zip")},b=async()=>{const e=document.createElement("input");e.type="file",e.style.cssText="position: absolute; opacity: 0; z-index: -9999;top: 0; left: 0",e.accept=".zip",document.body.append(e),e.click(),e.onchange=()=>{const o=e.files[0],n=new FormData;n.append("file",o),l.api.backups.rollback.post({data:n,timeout:1<<30}).then(()=>{message.success("恢复成功，页面将会重载"),setTimeout(()=>{location.reload()},1e3)})}},w=async e=>{let o="";if(Array.isArray(e)?o=e.join(","):o=e,await l.api.backups.delete({data:{files:o}}),message.success("删除成功"),Array.isArray(e))e.forEach(n=>{const i=a.value.findIndex(d=>d.filename===n);i!=-1&&a.value.splice(i,1)});else{const n=a.value.findIndex(i=>i.filename===e);n!=-1&&a.value.splice(n,1)}},_=async e=>{await l.api.backups.rollback(e).patch({}),message.info("回滚中",{closable:!0,duration:1e9})},T=async e=>{const o=message.info("下载中",{duration:1e9,closable:!0}),n=await l.api.backups(e).get({responseType:"blob",timeout:1e9});o.destroy(),message.success("下载完成"),x(n,`${e}.zip`)};return()=>t(E,{actionsElement:t(C,null,[t(g,{icon:t(O,null,null),name:"立即备份",variant:"primary",onClick:v},null),t(g,{icon:t(P,null,null),onClick:b,name:"上传恢复",variant:"info"},null),t(F,{checkedRowKeys:s.value,onDelete:async()=>{w(s.value)},customIcon:t(I,null,null),customButtonTip:"批量删除"},null)])},{default:()=>[t(R,B({data:a,fetchDataFn:c},{checkedRowKey:"filename",loading:k.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},onUpdateCheckedRowKeys:e=>{s.value=e},maxWidth:500,columns:[{type:"selection",options:["none","all"]},{title:"日期",key:"filename",width:300},{title:"大小",key:"size",width:200},{title:"操作",fixed:"right",width:200,key:"filename",render(e){const o=e.filename;return t(V,{inline:!0},{default:()=>[t(m,{text:!0,size:"tiny",type:"primary",onClick:()=>void T(o)},{default:()=>[r("下载")]}),t(y,{positiveText:"取消",negativeText:"回退",onNegativeClick:()=>{_(o)}},{trigger:()=>t(m,{text:!0,size:"tiny",type:"warning"},{default:()=>[r("回退")]}),default:()=>t("span",{class:"max-w-48"},[r("确定要回退？")])}),t(y,{positiveText:"取消",negativeText:"删除",onNegativeClick:()=>{w(o)}},{trigger:()=>t(m,{text:!0,size:"tiny",type:"error"},{default:()=>[r("移除")]}),default:()=>t("span",{class:"max-w-48"},[r("确定要删除？")])})]})}}],noPagination:!0}),null)]})});export{ke as default};
