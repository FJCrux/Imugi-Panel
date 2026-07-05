import{Kt as e,Sn as t,T as n,Yt as r,Zt as i,mn as a,ot as o,st as s,wn as c}from"./router-BIO1-tYH.js";import{g as l}from"./Space-D_izr8eA.js";import{r as u}from"./index-C_G8VDoQ.js";var d=e(`text`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[r(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),r(`italic`,{fontStyle:`italic`}),r(`underline`,{textDecoration:`underline`}),r(`code`,`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),f=t({name:`Text`,props:Object.assign(Object.assign({},n.props),{code:Boolean,type:{type:String,default:`default`},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:r}=s(e),c=n(`Typography`,`-text`,d,u,e,t),f=a(()=>{let{depth:t,type:n}=e,r=n==="default"?t===void 0?`textColor`:`textColor${t}Depth`:i(`textColor`,n),{common:{fontWeightStrong:a,fontFamilyMono:o,cubicBezierEaseInOut:s},self:{codeTextColor:l,codeBorderRadius:u,codeColor:d,codeBorder:f,[r]:p}}=c.value;return{"--n-bezier":s,"--n-text-color":p,"--n-font-weight-strong":a,"--n-font-famliy-mono":o,"--n-code-border-radius":u,"--n-code-text-color":l,"--n-code-color":d,"--n-code-border":f}}),p=r?o(`text`,a(()=>`${e.type[0]}${e.depth||``}`),f,e):void 0;return{mergedClsPrefix:t,compitableTag:l(e,[`as`,`tag`]),cssVars:r?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e,t;let{mergedClsPrefix:n}=this;(e=this.onRender)==null||e.call(this);let r=[`${n}-text`,this.themeClass,{[`${n}-text--code`]:this.code,[`${n}-text--delete`]:this.delete,[`${n}-text--strong`]:this.strong,[`${n}-text--italic`]:this.italic,[`${n}-text--underline`]:this.underline}],i=(t=this.$slots).default?.call(t);return this.code?c(`code`,{class:r,style:this.cssVars},this.delete?c(`del`,null,i):i):this.delete?c(`del`,{class:r,style:this.cssVars},i):c(this.compitableTag||`span`,{class:r,style:this.cssVars},i)}});export{f as t};