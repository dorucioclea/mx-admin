import{i as p}from"./isEmpty-c1f037e7.js";import{d as f,r as o,ab as d,b as n}from"./create-injection-key-6dff4bbb.js";import{V as v}from"./app-c79d7097.js";import{N as y}from"./Select-a912f9f4.js";import{N as c}from"./DynamicInput-1b1a5fbe.js";const g=f({props:{value:{type:Object,required:!0},onChange:{type:Function,required:!0},options:{type:Array,required:!1},plainKeyInput:{type:Boolean,required:!1,default:!1}},setup(r){const u=o([]),i=o(new Set),s=d(()=>r.value,e=>{if(!p(e)){const a=Object.entries(e).map(([l,t])=>(i.value.add(l),{key:l,value:t.toString()}));u.value=a,s()}},{deep:!0});return d(()=>u.value,e=>{const a=e.reduce((l,t)=>(t.key===""&&t.value===""||(l[t.key]=t.value.toString()),l),{});r.onChange(a)},{deep:!0}),d(()=>u.value,e=>{i.value.clear(),e.forEach(a=>{i.value.add(a.key)})},{deep:!0}),()=>n(c,{value:u.value,onUpdateValue:e=>{u.value=(()=>{const a=e.findIndex(l=>l===null);return a!==-1&&e.splice(a,1,{key:"",value:""}),e})()}},{default(e){return n("div",{class:"flex items-center w-full"},[r.plainKeyInput?n(v,{class:"mr-4",placeholder:"请输入",value:e.value.key,onUpdateValue:a=>{e.value.key=a}},null):n(y,{class:"mr-4",filterable:!0,tag:!0,placeholder:"请选择",value:e.value.key,onUpdateValue:a=>{e.value.key=a},options:r.options?.map(a=>({...a,disabled:i.value.has(a.value)}))},null),n(v,{value:e.value.value.toString(),onUpdateValue:a=>{e.value.value=a}},null)])}})}});export{g as K};
