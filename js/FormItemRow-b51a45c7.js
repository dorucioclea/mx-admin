import{h as v,i as y,j as R,k as u,u as P,J as w,n as C}from"./fade-in.cssr-c6d077ce.js";import{u as c,W as l,Y as p,k as f}from"./Card-720de80b.js";import{d as m,p as x,a4 as N,h as a,a0 as j,i as S,a2 as O,c as $,r as I}from"./create-injection-key-6dff4bbb.js";import{f as A,N as K,a as V}from"./FormItem-94ab7cfc.js";const k=Array.apply(null,{length:24}).map((t,r)=>{const s=r+1,e=`calc(100% / 24 * ${s})`;return[u(`${s}-span`,{width:e}),u(`${s}-offset`,{marginLeft:e}),u(`${s}-push`,{left:e}),u(`${s}-pull`,{right:e})]}),z=v([y("row",{width:"100%",display:"flex",flexWrap:"wrap"}),y("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[R("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),k])]),b=j("n-row"),d={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},E=p(d),F=m({name:"Row",props:d,setup(t){const{mergedClsPrefixRef:r,mergedRtlRef:s}=P(t);w("-legacy-grid",z,r);const e=C("Row",s,r),n=c(()=>{const{gutter:o}=t;return Array.isArray(o)&&o[1]||0}),i=c(()=>{const{gutter:o}=t;return Array.isArray(o)?o[0]:Number(o)});return x(b,{mergedClsPrefixRef:r,gutterRef:N(t,"gutter"),verticalGutterRef:n,horizontalGutterRef:i}),{mergedClsPrefix:r,rtlEnabled:e,styleMargin:c(()=>`-${l(n.value,{c:.5})} -${l(i.value,{c:.5})}`),styleWidth:c(()=>`calc(100% + ${l(i.value)})`)}},render(){return a("div",{class:[`${this.mergedClsPrefix}-row`,this.rtlEnabled&&`${this.mergedClsPrefix}-row--rtl`],style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}}),g={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},G=p(g),M=m({name:"Col",props:g,setup(t){const r=S(b,null);return r||O("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:r.mergedClsPrefixRef,gutter:r.gutterRef,stylePadding:$(()=>`${l(r.verticalGutterRef.value,{c:.5})} ${l(r.horizontalGutterRef.value,{c:.5})}`),mergedPush:$(()=>Number(t.push)-Number(t.pull))}},render(){const{$slots:t,span:r,mergedPush:s,offset:e,stylePadding:n,gutter:i,mergedClsPrefix:o}=this;return a("div",{class:[`${o}-col`,{[`${o}-col--${r}-span`]:!0,[`${o}-col--${s}-push`]:s>0,[`${o}-col--${-s}-pull`]:s<0,[`${o}-col--${e}-offset`]:e}],style:{padding:n}},i?a("div",null,t):t)}}),h=Object.assign(Object.assign({},g),V),W=p(h),L=m({name:"FormItemCol",props:h,setup(){const t=I(null);return{formItemInstRef:t,validate:(...e)=>{const{value:n}=t;if(n)return n.validate(...e)},restoreValidation:()=>{const{value:e}=t;if(e)return e.restoreValidation()}}},render(){return a(M,f(this.$props,G),{default:()=>{const t=f(this.$props,A);return a(K,Object.assign({ref:"formItemInstRef"},t),this.$slots)}})}}),B=Object.assign(Object.assign({},d),h),D=m({name:"FormItemRow",props:B,setup(){const t=I(null);return{formItemColInstRef:t,validate:(...e)=>{const{value:n}=t;if(n)return n.validate(...e)},restoreValidation:()=>{const{value:e}=t;if(e)return e.restoreValidation()}}},render(){return a(F,f(this.$props,E),{default:()=>{const t=f(this.$props,W);return a(L,Object.assign(Object.assign({ref:"formItemColInstRef"},t),{span:24}),this.$slots)}})}});export{D as N};
