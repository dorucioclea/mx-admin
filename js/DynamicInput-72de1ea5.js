import{k as U,v as a,aI as X,C as Y,aJ as Z,b4 as ee,l as K,E as y,D as q,G as te,H as ne,J as ae,cn as re,y as le,ax as D,bG as ie,L as J,n as B,t as oe,K as ue,N as se,bF as ce,aO as R,aD as G,Q as k,bC as de,cr as j,bM as T,A as me,b2 as $}from"./Button-5ec267f1.js";import{x as pe,N as F}from"./use-store-ref-0fa0f74b.js";import{c as fe}from"./_common-202f2abd.js";import{A as H}from"./Add-89af046c.js";import{N as he}from"./ButtonGroup-61958723.js";import{R as ye}from"./Remove-3934817c.js";import{A as ve}from"./ChevronRight-54213128.js";const ge=U({name:"ArrowUp",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a("g",{fill:"none"},a("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),be=()=>fe,Ve=X({name:"DynamicInput",common:Y,peers:{Input:pe,Button:Z},self:be}),Pe=Ve,L=ee("n-dynamic-input"),Ie=U({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:n,placeholderRef:m}=K(L);return{mergedTheme:n,placeholder:m}},render(){const{mergedTheme:n,placeholder:m,value:i,clsPrefix:u,onUpdateValue:c}=this;return a("div",{class:`${u}-dynamic-input-preset-input`},a(F,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:i,placeholder:m,onUpdateValue:c}))}}),Re=U({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(n){const{mergedThemeRef:m,keyPlaceholderRef:i,valuePlaceholderRef:u}=K(L);return{mergedTheme:m,keyPlaceholder:i,valuePlaceholder:u,handleKeyInput(c){n.onUpdateValue({key:c,value:n.value.value})},handleValueInput(c){n.onUpdateValue({key:n.value.key,value:c})}}},render(){const{mergedTheme:n,keyPlaceholder:m,valuePlaceholder:i,value:u,clsPrefix:c}=this;return a("div",{class:`${c}-dynamic-input-preset-pair`},a(F,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:u.key,class:`${c}-dynamic-input-pair-input`,placeholder:m,onUpdateValue:this.handleKeyInput}),a(F,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:u.value,class:`${c}-dynamic-input-pair-input`,placeholder:i,onUpdateValue:this.handleValueInput}))}}),ke=y("dynamic-input",{width:"100%"},[y("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[y("dynamic-input-preset-input",{flex:1,alignItems:"center"}),y("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[y("dynamic-input-pair-input",[q("&:first-child",{"margin-right":"12px"})])]),te("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[ne("icon",{cursor:"pointer"})]),q("&:last-child",{marginBottom:0})]),y("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[y("form-item-blank",{paddingTop:"0 !important"})])]),O=new WeakMap,we=Object.assign(Object.assign({},J.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),Ne=U({name:"DynamicInput",props:we,setup(n,{slots:m}){const{mergedComponentPropsRef:i,mergedClsPrefixRef:u,mergedRtlRef:c,inlineThemeDisabled:d}=ae(),v=K(re,null),V=le(n.defaultValue),w=D(n,"value"),p=ie(w,V),s=J("DynamicInput","-dynamic-input",ke,Pe,n,u),C=B(()=>{const{value:e}=p;if(Array.isArray(e)){const{max:t}=n;return t!==void 0&&e.length>=t}return!1}),A=B(()=>{const{value:e}=p;return Array.isArray(e)?e.length<=n.min:!0}),N=B(()=>{var e,t;return(t=(e=i?.value)===null||e===void 0?void 0:e.DynamicInput)===null||t===void 0?void 0:t.buttonSize});function f(e){const{onInput:t,"onUpdate:value":l,onUpdateValue:r}=n;t&&$(t,e),l&&$(l,e),r&&$(r,e),V.value=e}function S(e,t){if(e==null||typeof e!="object")return t;const l=j(e)?T(e):e;let r=O.get(l);return r===void 0&&O.set(l,r=me()),r}function P(e,t){const{value:l}=p,r=Array.from(l??[]),h=r[e];if(r[e]=t,h&&t&&typeof h=="object"&&typeof t=="object"){const x=j(h)?T(h):h,Q=j(t)?T(t):t,E=O.get(x);E!==void 0&&O.set(Q,E)}f(r)}function g(){o(0)}function o(e){const{value:t}=p,{onCreate:l}=n,r=Array.from(t??[]);if(l)r.splice(e+1,0,l(e+1)),f(r);else if(m.default)r.splice(e+1,0,null),f(r);else switch(n.preset){case"input":r.splice(e+1,0,""),f(r);break;case"pair":r.splice(e+1,0,{key:"",value:""}),f(r);break}}function I(e){const{value:t}=p;if(!Array.isArray(t))return;const{min:l}=n;if(t.length<=l)return;const r=Array.from(t);r.splice(e,1),f(r);const{onRemove:h}=n;h&&h(e)}function M(e,t,l){if(t<0||l<0||t>=e.length||l>=e.length||t===l)return;const r=e[t];e[t]=e[l],e[l]=r}function W(e,t){const{value:l}=p;if(!Array.isArray(l))return;const r=Array.from(l);e==="up"&&M(r,t,t-1),e==="down"&&M(r,t,t+1),f(r)}oe(L,{mergedThemeRef:s,keyPlaceholderRef:D(n,"keyPlaceholder"),valuePlaceholderRef:D(n,"valuePlaceholder"),placeholderRef:D(n,"placeholder")});const _=ue("DynamicInput",c,u),z=B(()=>{const{self:{actionMargin:e,actionMarginRtl:t}}=s.value;return{"--action-margin":e,"--action-margin-rtl":t}}),b=d?se("dynamic-input",void 0,z,n):void 0;return{locale:ce("DynamicInput").localeRef,rtlEnabled:_,buttonSize:N,mergedClsPrefix:u,NFormItem:v,uncontrolledValue:V,mergedValue:p,insertionDisabled:C,removeDisabled:A,handleCreateClick:g,ensureKey:S,handleValueChange:P,remove:I,move:W,createItem:o,mergedTheme:s,cssVars:d?void 0:z,themeClass:b?.themeClass,onRender:b?.onRender}},render(){const{$slots:n,buttonSize:m,mergedClsPrefix:i,mergedValue:u,locale:c,mergedTheme:d,keyField:v,itemStyle:V,preset:w,showSortButton:p,NFormItem:s,ensureKey:C,handleValueChange:A,remove:N,createItem:f,move:S,onRender:P}=this;return P?.(),a("div",{class:[`${i}-dynamic-input`,this.rtlEnabled&&`${i}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(u)||u.length===0?a(R,Object.assign({block:!0,ghost:!0,dashed:!0,size:m},this.createButtonProps,{disabled:this.insertionDisabled,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>G(n["create-button-default"],()=>[c.create]),icon:()=>G(n["create-button-icon"],()=>[a(k,{clsPrefix:i},{default:()=>a(H,null)})])}):u.map((g,o)=>a("div",{key:v?g[v]:C(g,o),"data-key":v?g[v]:C(g,o),class:`${i}-dynamic-input-item`,style:V},de(n.default,{value:u[o],index:o},()=>[w==="input"?a(Ie,{clsPrefix:i,value:u[o],parentPath:s?s.path.value:void 0,path:s?.path.value?`${s.path.value}[${o}]`:void 0,onUpdateValue:I=>A(o,I)}):w==="pair"?a(Re,{clsPrefix:i,value:u[o],parentPath:s?s.path.value:void 0,path:s?.path.value?`${s.path.value}[${o}]`:void 0,onUpdateValue:I=>A(o,I)}):null]),a("div",{class:`${i}-dynamic-input-item__action`},a(he,{size:m},{default:()=>[a(R,{disabled:this.removeDisabled,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,circle:!0,onClick:()=>N(o)},{icon:()=>a(k,{clsPrefix:i},{default:()=>a(ye,null)})}),a(R,{disabled:this.insertionDisabled,circle:!0,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,onClick:()=>f(o)},{icon:()=>a(k,{clsPrefix:i},{default:()=>a(H,null)})}),p?a(R,{disabled:o===0,circle:!0,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,onClick:()=>S("up",o)},{icon:()=>a(k,{clsPrefix:i},{default:()=>a(ge,null)})}):null,p?a(R,{disabled:o===u.length-1,circle:!0,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,onClick:()=>S("down",o)},{icon:()=>a(k,{clsPrefix:i},{default:()=>a(ve,null)})}):null]})))))}});export{Ne as N};
