import{t as U,N as j,c as w}from"./Tag-945120fa.js";import{O as K,g as W,i as P,u as $,o as k,q as H}from"./fade-in.cssr-c6d077ce.js";import{X as _,G as q,I as E,H as G,Z as M,i as X,P as B}from"./Card-720de80b.js";import{D as Z,V as J}from"./app-c79d7097.js";import{A as Q}from"./Add-fbc91806.js";import{e as Y,b as ee}from"./p-d5bd0779.js";import{s as te}from"./prop-8b8caa29.js";import{d as ne,r as f,a4 as ae,c as S,h as r,z as se}from"./create-injection-key-6dff4bbb.js";const ie=K({name:"DynamicTags",common:W,peers:{Input:Z,Button:_,Tag:U,Space:Y},self(){return{inputWidth:"64px"}}}),oe=ie,re=P("dynamic-tags",[P("input",{minWidth:"var(--n-input-width)"})]),le=Object.assign(Object.assign(Object.assign({},k.props),w),{size:{type:String,default:"medium"},closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputStyle:[String,Object],inputProps:Object,max:Number,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:t=>t},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),ye=ne({name:"DynamicTags",props:le,setup(t){const{mergedClsPrefixRef:h,inlineThemeDisabled:l}=$(t),{localeRef:u}=q("DynamicTags"),d=E(t),{mergedDisabledRef:s}=d,c=f(""),m=f(!1),p=f(!0),y=f(null),v=k("DynamicTags","-dynamic-tags",re,oe,t,h),C=f(t.defaultValue),F=ae(t,"value"),i=G(F,C),O=S(()=>u.value.add),z=S(()=>te(t.size)),b=S(()=>s.value||!!t.max&&i.value.length>=t.max);function T(e){const{onChange:n,"onUpdate:value":g,onUpdateValue:N}=t,{nTriggerFormInput:x,nTriggerFormChange:L}=d;n&&B(n,e),N&&B(N,e),g&&B(g,e),C.value=e,x(),L()}function I(e){const n=i.value.slice(0);n.splice(e,1),T(n)}function D(e){switch(e.key){case"Enter":o()}}function o(e){const n=e??c.value;if(n){const g=i.value.slice(0);g.push(t.onCreate(n)),T(g)}m.value=!1,p.value=!0,c.value=""}function R(){o()}function A(){m.value=!0,se(()=>{var e;(e=y.value)===null||e===void 0||e.focus(),p.value=!1})}const V=S(()=>{const{self:{inputWidth:e}}=v.value;return{"--n-input-width":e}}),a=l?H("dynamic-tags",void 0,V,t):void 0;return{mergedClsPrefix:h,inputInstRef:y,localizedAdd:O,inputSize:z,inputValue:c,showInput:m,inputForceFocused:p,mergedValue:i,mergedDisabled:s,triggerDisabled:b,handleInputKeyUp:D,handleAddClick:A,handleInputBlur:R,handleCloseClick:I,handleInputConfirm:o,mergedTheme:v,cssVars:l?void 0:V,themeClass:a?.themeClass,onRender:a?.onRender}},render(){const{mergedTheme:t,cssVars:h,mergedClsPrefix:l,onRender:u,renderTag:d}=this;return u?.(),r(ee,{class:[`${l}-dynamic-tags`,this.themeClass],size:"small",style:h,theme:t.peers.Space,themeOverrides:t.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:s,tagStyle:c,type:m,round:p,size:y,color:v,closable:C,mergedDisabled:F,showInput:i,inputValue:O,inputStyle:z,inputSize:b,inputForceFocused:T,triggerDisabled:I,handleInputKeyUp:D,handleInputBlur:o,handleAddClick:R,handleCloseClick:A,handleInputConfirm:V,$slots:a}=this;return this.mergedValue.map((e,n)=>d?d(e,n):r(j,{key:n,theme:s.peers.Tag,themeOverrides:s.peerOverrides.Tag,style:c,type:m,round:p,size:y,color:v,closable:C,disabled:F,onClose:()=>A(n)},{default:()=>typeof e=="string"?e:e.label})).concat(i?a.input?a.input({submit:V,deactivate:o}):r(J,Object.assign({placeholder:"",size:b,style:z,autosize:!0},this.inputProps,{ref:"inputInstRef",value:O,onUpdateValue:e=>{this.inputValue=e},theme:s.peers.Input,themeOverrides:s.peerOverrides.Input,onKeyup:D,onBlur:o,internalForceFocus:T})):a.trigger?a.trigger({activate:R,disabled:I}):r(M,{dashed:!0,disabled:I,theme:s.peers.Button,themeOverrides:s.peerOverrides.Button,size:b,onClick:R},{icon:()=>r(X,{clsPrefix:l},{default:()=>r(Q,null)})}))}})}});export{ye as N};
