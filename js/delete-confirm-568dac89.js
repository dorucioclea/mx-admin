import{H as d}from"./rounded-button-f939e53f.js";import{t as g,U as y}from"./app-c79d7097.js";import{d as f,at as w,b as o}from"./create-injection-key-6dff4bbb.js";import{f as h}from"./use-store-ref-10b7967e.js";const B=f({props:{checkedRowKeys:{type:Object},onDelete:{type:Function,required:!0},message:{type:String},customIcon:{type:Object},showSuccessMessage:{type:Boolean,default:!0},customSuccessMessage:{type:String},customButtonTip:{type:String}},setup(n){const c=h(),a=g();return()=>{const{customIcon:i,checkedRowKeys:s,onDelete:r,message:u,customSuccessMessage:l,showSuccessMessage:m,customButtonTip:p}=n,e=w(s)?s.value:s,t=e?Array.isArray(e)?e.length:e.size:0;return o(d,{variant:"error",disabled:e?t===0:!1,name:p??"删除多条",onClick:()=>{c.warning({title:"警告",content:u??`你确定要删除${t>1?"多条":"这条"}数据？`,positiveText:"はい",negativeText:"达咩",onPositiveClick:async()=>{await r(e),m&&a.success(l??"删除成功")}})},icon:i??o(y,null,null)},null)}}});export{B as D};
