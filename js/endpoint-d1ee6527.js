import{Z as u,y as l,F as p}from"./app-c79d7097.js";import{d as o,b as t}from"./create-injection-key-6dff4bbb.js";import{Z as s,ag as i}from"./Card-720de80b.js";const c=o({props:{url:{type:String,required:!0}},setup(r){return()=>t("iframe",{src:r.url,class:"max-w-full w-[60ch] h-[60vh]"},null)}}),f=o({props:{path:{type:String,required:!0}},setup(r){return()=>t(i,{placement:"right",class:"!p-0"},{default(){return t(c,{url:r.path},null)},trigger(){return t(s,{text:!0,type:"primary",tag:"a",target:"_blank",href:r.path,onClick:e=>{e.stopPropagation()}},{default:()=>[t(u,null,null)]})}})}}),h=(r,e)=>{const a=l.endpoint,n=new URL(a);return`${n.protocol}//${n.host}/render/markdown/${r}${e?`?token=${p()}`:""}`};export{f as I,h as b};
