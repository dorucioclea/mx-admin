import{H as N}from"./rounded-button-6b29b554.js";import{x as i,g as x,H as y,L as b,ar as T,a0 as k,an as F,K as U}from"./app-5a2221a4.js";import{T as C}from"./index-9895a798.js";import{b as w,a as B,N as E}from"./Upload-baf0e991.js";import{k as A,y as n,au as S,R as I,U as t,bs as M,aO as O,br as f,F as P}from"./Button-5ec267f1.js";import{N as z,a as d}from"./Tabs-b7519682.js";import{b as g}from"./Card-73dd4072.js";import{N as D}from"./ButtonGroup-61958723.js";import{N as H}from"./Popconfirm-0c3d3f64.js";import"./use-store-ref-0fa0f74b.js";import"./preload-helper-f651ca80.js";import"./Spin-2c3e5ca3.js";import"./DataTable-24c7be6c.js";import"./ChevronRight-54213128.js";import"./Checkbox-746a5c9b.js";import"./light-cfc8873a.js";import"./light-6dc94989.js";import"./light-6fe3aaa1.js";import"./light-1d805342.js";import"./light-efffb436.js";import"./Select-410a3ac9.js";import"./Tag-62076a6b.js";import"./_common-991711fd.js";import"./Pagination-5b5faf1f.js";import"./Forward-414cae36.js";import"./prop-8b8caa29.js";import"./Tooltip-354350ce.js";import"./Add-89af046c.js";import"./light-a0a0f07b.js";import"./utils-32451f97.js";import"./fade-in-height-expand.cssr-7a0e6e1d.js";import"./throttle-77fca6da.js";import"./light-a2e1a10d.js";import"./light-013cc201.js";const xe=A({setup(){const a=n("icon"),l=n([]);S(()=>a.value,()=>{m()}),I(()=>{m()});const s=n(!1),m=()=>{s.value=!0,i.api.files(a.value).get().then(({data:e})=>{l.value=e,s.value=!1})},o=n(!1),v=async e=>{if(a.value==="icon"){if(e.file.file?.type.startsWith("image"))return!0;message.error("只能上传图片文件，请重新上传")}return!1},h=({file:e,event:r})=>{const u=r?.target,{url:p,name:c}=JSON.parse(u.responseText);return e.name=c,e.url=p,l.value.unshift({url:p,name:c}),e};return()=>t(U,{actionsElement:t(P,null,[t(N,{variant:"info",onClick:()=>{o.value=!0},icon:t(F,null,null)},null)])},{default:()=>[t(z,{value:a.value,onUpdateValue:e=>{a.value=e}},{default:()=>[t(d,{tab:"图标",name:"icon"},null),t(d,{tab:"头像",name:"avatar"},null)]}),t(C,{loading:s.value,data:l,columns:[{key:"name",title:"文件名",width:300,ellipsis:{lineClamp:1,tooltip:!0}},{key:"url",title:"URL",render(e){return t(M,{placement:"bottom",class:"max-w-[400px]"},{trigger(){return t("a",{href:e.url,target:"_blank"},[e.url])},default(){return t(g,{bordered:!0},{default:()=>[t(w,{src:e.url},null)]})}})}},{key:"action",title:"操作",width:150,render(e){return t(D,null,{default:()=>[t(H,{onPositiveClick:()=>{i.api.files(a.value)(e.name).delete().then(()=>{message.success("删除成功"),l.value=l.value.filter(r=>r.name!==e.name)})}},{trigger(){return t(O,{text:!0,type:"error",tertiary:!0,size:"tiny"},{default:()=>[f("删除")]})},default(){return`确定要删除 ${e.name} 吗？`}})]})}}]},null),t(x,{closable:!0,closeOnEsc:!0,onClose:()=>{o.value=!1},show:o.value,onUpdateShow:e=>{o.value=e}},{default:()=>[t(g,{title:"文件上传",class:"modal-card sm flex justify-center",closable:!0,onClose:()=>{o.value=!1}},{default:()=>[t(B,{class:"flex flex-col items-center w-full",headers:{authorization:y()||""},action:`${i.endpoint}/files/upload?type=${a.value}`,"directory-dnd":!0,multiple:!0,onBeforeUpload:v,onFinish:h,onError:e=>{const r=e.event?.target;if(e.file.status="error",!r)return message.warning("网络异常"),e.file;const{message:u}=JSON.parse(r.responseText);return message.warning(u),e.file}},{default:()=>[t(E,{class:"flex flex-col items-center justify-center w-full m-auto py-28"},{default:()=>[t(b,{size:"48",depth:"3"},{default:()=>[t(T,null,null)]}),t(k,{class:"mt-2"},{default:()=>[f("点击或者拖动文件到该区域来上传")]})]})]})]})]})]})}});export{xe as default};
