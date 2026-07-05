import{$n as e,An as t,C as n,Cn as r,Dt as i,En as a,Et as o,Fn as s,Gt as c,Hn as l,Ht as u,In as d,Jn as f,Jt as p,Kt as m,Mn as h,Mt as g,Nn as _,O as v,Pn as y,Sn as b,St as x,T as S,Tn as C,Vn as w,Vt as T,Xn as E,Xt as ee,Yt as D,Zn as O,_n as te,_t as ne,bn as k,g as re,gn as ie,gt as ae,hn as A,kt as j,lt as oe,mn as M,mt as se,o as ce,ot as N,pn as P,rn as le,sn as F,st as I,un as L,vn as R,vt as z,wn as B,xn as V,y as ue,yt as de,zn as H}from"./router-BIO1-tYH.js";import{r as fe,s as pe,t as me,v as he}from"./Space-D_izr8eA.js";import{a as U,t as ge}from"./Tag-SpLY0thm.js";import{D as _e,O as ve,o as ye,p as be}from"./_common-CXfM0PR-.js";import{n as W,r as G,t as xe,u as Se}from"./_plugin-vue_export-helper-D_EFaKSB.js";import{n as Ce}from"./Dropdown-BLopI3HD.js";import{t as we}from"./DataTable-DRkrLdNY.js";import{t as Te}from"./use-message-DyxAtDiS.js";import{t as K}from"./Alert-CiEew2am.js";import{C as Ee,x as De}from"./index-C_G8VDoQ.js";var Oe={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function ke(e){return`(min-width: ${e}px)`}var q={};function Ae(e=Oe){if(!_e||typeof window.matchMedia!=`function`)return M(()=>[]);let n=f({}),r=Object.keys(e),i=(e,t)=>{e.matches?n.value[t]=!0:n.value[t]=!1};return r.forEach(t=>{let n=e[t],r,a;q[n]===void 0?(r=window.matchMedia(ke(n)),r.addEventListener?r.addEventListener(`change`,e=>{a.forEach(n=>{n(e,t)})}):r.addListener&&r.addListener(e=>{a.forEach(n=>{n(e,t)})}),a=new Set,q[n]={mql:r,cbs:a}):(r=q[n].mql,a=q[n].cbs),a.add(i),r.matches&&a.forEach(e=>{e(r,t)})}),t(()=>{r.forEach(t=>{let{cbs:n}=q[e[t]];n.has(i)&&n.delete(i)})}),M(()=>{let{value:e}=n;return r.filter(t=>e[t])})}function je(e){let t=e.dirs?.find(({dir:e})=>e===F);return!!(t&&t.value===!1)}function Me(e,t){let n=C(oe,null);return M(()=>e.hljs||n?.mergedHljsRef.value)}var Ne=b({name:`ChevronLeft`,render(){return B(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},B(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`}))}});function Pe(e){let{textColor2:t,fontSize:n,fontWeightStrong:r,textColor3:i}=e;return{textColor:t,fontSize:n,fontWeightStrong:r,"mono-3":`#a0a1a7`,"hue-1":`#0184bb`,"hue-2":`#4078f2`,"hue-3":`#a626a4`,"hue-4":`#50a14f`,"hue-5":`#e45649`,"hue-5-2":`#c91243`,"hue-6":`#986801`,"hue-6-2":`#c18401`,lineNumberTextColor:i}}var Fe={name:`Code`,common:re,self:Pe},Ie=c([m(`code`,`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[D(`show-line-numbers`,`
 display: flex;
 `),p(`line-numbers`,`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),D(`word-wrap`,[c(`pre`,`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),c(`pre`,`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),c(`[class^=hljs]`,`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{let t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),J=b({name:`Code`,props:Object.assign(Object.assign({},S.props),{language:String,code:{type:String,default:``},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),setup(e,{slots:t}){let{internalNoHighlight:n}=e,{mergedClsPrefixRef:r,inlineThemeDisabled:i}=I(),a=f(null),o=n?{value:void 0}:Me(e),s=(e,t,n)=>{let{value:r}=o;return!r||!(e&&r.getLanguage(e))?null:r.highlight(n?t.trim():t,{language:e}).value},c=M(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),l=()=>{if(t.default)return;let{value:n}=a;if(!n)return;let{language:r}=e,i=e.uri?window.decodeURIComponent(e.code):e.code;if(r){let t=s(r,i,e.trim);if(t!==null){if(e.inline)n.innerHTML=t;else{let e=n.querySelector(`.__code__`);e&&n.removeChild(e);let r=document.createElement(`pre`);r.className=`__code__`,r.innerHTML=t,n.appendChild(r)}return}}if(e.inline){n.textContent=i;return}let o=n.querySelector(`.__code__`);if(o)o.textContent=i;else{let e=document.createElement(`pre`);e.className=`__code__`,e.textContent=i,n.innerHTML=``,n.appendChild(e)}};h(l),H(E(e,`language`),l),H(E(e,`code`),l),n||H(o,l);let u=S(`Code`,`-code`,Ie,Fe,e,r),d=M(()=>{let{common:{cubicBezierEaseInOut:t,fontFamilyMono:n},self:{textColor:r,fontSize:i,fontWeightStrong:a,lineNumberTextColor:o,"mono-3":s,"hue-1":c,"hue-2":l,"hue-3":d,"hue-4":f,"hue-5":p,"hue-5-2":m,"hue-6":h,"hue-6-2":g}}=u.value,{internalFontSize:_}=e;return{"--n-font-size":_?`${_}px`:i,"--n-font-family":n,"--n-font-weight-strong":a,"--n-bezier":t,"--n-text-color":r,"--n-mono-3":s,"--n-hue-1":c,"--n-hue-2":l,"--n-hue-3":d,"--n-hue-4":f,"--n-hue-5":p,"--n-hue-5-2":m,"--n-hue-6":h,"--n-hue-6-2":g,"--n-line-number-text-color":o}}),p=i?N(`code`,M(()=>`${e.internalFontSize||`a`}`),d,e):void 0;return{mergedClsPrefix:r,codeRef:a,mergedShowLineNumbers:c,lineNumbers:M(()=>{let t=1,n=[],r=!1;for(let i of e.code)i===`
`?(r=!0,n.push(t++)):r=!1;return r||n.push(t++),n.join(`
`)}),cssVars:i?void 0:d,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;let{mergedClsPrefix:t,wordWrap:n,mergedShowLineNumbers:r,onRender:i}=this;return i?.(),B(`code`,{class:[`${t}-code`,this.themeClass,n&&`${t}-code--word-wrap`,r&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:`codeRef`},r?B(`pre`,{class:`${t}-code__line-numbers`},this.lineNumbers):null,(e=this.$slots).default?.call(e))}}),Le=m(`collapse`,`width: 100%;`,[m(`collapse-item`,`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[D(`disabled`,[p(`header`,`cursor: not-allowed;`,[p(`header-main`,`
 color: var(--n-title-text-color-disabled);
 `),m(`collapse-item-arrow`,`
 color: var(--n-arrow-color-disabled);
 `)])]),m(`collapse-item`,`margin-left: 32px;`),c(`&:first-child`,`margin-top: 0;`),c(`&:first-child >`,[p(`header`,`padding-top: 0;`)]),D(`left-arrow-placement`,[p(`header`,[m(`collapse-item-arrow`,`margin-right: 4px;`)])]),D(`right-arrow-placement`,[p(`header`,[m(`collapse-item-arrow`,`margin-left: 4px;`)])]),p(`content-wrapper`,[p(`content-inner`,`padding-top: 16px;`),ye({duration:`0.15s`})]),D(`active`,[p(`header`,[D(`active`,[m(`collapse-item-arrow`,`transform: rotate(90deg);`)])])]),c(`&:not(:first-child)`,`border-top: 1px solid var(--n-divider-color);`),ee(`disabled`,[D(`trigger-area-main`,[p(`header`,[p(`header-main`,`cursor: pointer;`),m(`collapse-item-arrow`,`cursor: default;`)])]),D(`trigger-area-arrow`,[p(`header`,[m(`collapse-item-arrow`,`cursor: pointer;`)])]),D(`trigger-area-extra`,[p(`header`,[p(`header-extra`,`cursor: pointer;`)])])]),p(`header`,`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[p(`header-main`,`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),p(`header-extra`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),m(`collapse-item-arrow`,`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),Re=Object.assign(Object.assign({},S.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:`left`},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:`if`},triggerAreas:{type:Array,default:()=>[`main`,`extra`,`arrow`]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),Y=i(`n-collapse`),ze=b({name:`Collapse`,props:Re,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=I(e),a=f(e.defaultExpandedNames),o=Se(M(()=>e.expandedNames),a),c=S(`Collapse`,`-collapse`,Le,De,e,n);function l(t){let{"onUpdate:expandedNames":n,onUpdateExpandedNames:r,onExpandedNamesChange:i}=e;r&&z(r,t),n&&z(n,t),i&&z(i,t),a.value=t}function u(t){let{onItemHeaderClick:n}=e;n&&z(n,t)}function d(t,n,r){let{accordion:i}=e,{value:a}=o;if(i)t?(l([n]),u({name:n,expanded:!0,event:r})):(l([]),u({name:n,expanded:!1,event:r}));else if(!Array.isArray(a))l([n]),u({name:n,expanded:!0,event:r});else{let e=a.slice(),t=e.findIndex(e=>n===e);~t?(e.splice(t,1),l(e),u({name:n,expanded:!1,event:r})):(e.push(n),l(e),u({name:n,expanded:!0,event:r}))}}s(Y,{props:e,mergedClsPrefixRef:n,expandedNamesRef:o,slots:t,toggleItem:d});let p=v(`Collapse`,i,n),m=M(()=>{let{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:t,dividerColor:n,titlePadding:r,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:s,fontSize:l,titleFontSize:u,arrowColorDisabled:d,itemMargin:f}}=c.value;return{"--n-font-size":l,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":r,"--n-title-font-size":u,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":t,"--n-arrow-color":s,"--n-arrow-color-disabled":d,"--n-item-margin":f}}),h=r?N(`collapse`,void 0,m,e):void 0;return{rtlEnabled:p,mergedTheme:c,mergedClsPrefix:n,cssVars:r?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),B(`div`,{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),Be=b({name:`CollapseItemContent`,props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:ve(E(e,`show`))}},render(){return B(ue,null,{default:()=>{let{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,i=t===`show`&&n,a=B(`div`,{class:`${r}-collapse-item__content-wrapper`},B(`div`,{class:`${r}-collapse-item__content-inner`},this.$slots));return i?l(a,[[F,e]]):e?a:null}})}}),X=b({name:`CollapseItem`,props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(e){let{mergedRtlRef:t}=I(e),n=g(),r=j(()=>e.name??n),i=C(Y);i||de(`collapse-item`,"`n-collapse-item` must be placed inside `n-collapse`.");let{expandedNamesRef:a,props:o,mergedClsPrefixRef:s,slots:c}=i,l=M(()=>{let{value:e}=a;if(Array.isArray(e)){let{value:t}=r;return!~e.findIndex(e=>e===t)}else if(e){let{value:t}=r;return t!==e}return!0});return{rtlEnabled:v(`Collapse`,t,s),collapseSlots:c,randomName:n,mergedClsPrefix:s,collapsed:l,triggerAreas:E(o,`triggerAreas`),mergedDisplayDirective:M(()=>{let{displayDirective:t}=e;return t||o.displayDirective}),arrowPlacement:M(()=>o.arrowPlacement),handleClick(t){let n=`main`;U(t,`arrow`)&&(n=`arrow`),U(t,`extra`)&&(n=`extra`),o.triggerAreas.includes(n)&&i&&!e.disabled&&i.toggleItem(l.value,r.value,t)}}},render(){let{collapseSlots:e,$slots:t,arrowPlacement:r,collapsed:i,mergedDisplayDirective:a,mergedClsPrefix:o,disabled:s,triggerAreas:c}=this,l=se(t.header,{collapsed:i},()=>[this.title]),u=t[`header-extra`]||e[`header-extra`],d=t.arrow||e.arrow;return B(`div`,{class:[`${o}-collapse-item`,`${o}-collapse-item--${r}-arrow-placement`,s&&`${o}-collapse-item--disabled`,!i&&`${o}-collapse-item--active`,c.map(e=>`${o}-collapse-item--trigger-area-${e}`)]},B(`div`,{class:[`${o}-collapse-item__header`,!i&&`${o}-collapse-item__header--active`]},B(`div`,{class:`${o}-collapse-item__header-main`,onClick:this.handleClick},r===`right`&&l,B(`div`,{class:`${o}-collapse-item-arrow`,key:+!this.rtlEnabled,"data-arrow":!0},se(d,{collapsed:i},()=>[B(n,{clsPrefix:o},{default:()=>this.rtlEnabled?B(Ne,null):B(Ce,null)})])),r===`left`&&l),ae(u,{collapsed:i},e=>B(`div`,{class:`${o}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},e))),B(Be,{clsPrefix:o,displayDirective:a,show:!i},t))}}),Z=i(`n-grid`),Ve={span:{type:[Number,String],default:1},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}};ne(Ve);var Q=b({__GRID_ITEM__:!0,name:`GridItem`,alias:[`Gi`],props:Ve,setup(){let{isSsrRef:e,xGapRef:t,itemStyleRef:n,overflowRef:i,layoutShiftDisabledRef:a}=C(Z),o=r();return{overflow:i,itemStyle:n,layoutShiftDisabled:a,mergedXGap:M(()=>T(t.value||0)),deriveStyle:()=>{e.value;let{privateSpan:n=1,privateShow:r=!0,privateColStart:i=void 0,privateOffset:a=0}=o.vnode.props,{value:s}=t,c=T(s||0);return{display:r?``:`none`,gridColumn:`${i??`span ${n}`} / span ${n}`,marginLeft:a?`calc((100% - (${n} - 1) * ${c}) / ${n} * ${a} + ${c} * ${a})`:``}}}},render(){var e;if(this.layoutShiftDisabled){let{span:e,offset:t,mergedXGap:n}=this;return B(`div`,{style:{gridColumn:`span ${e} / span ${e}`,marginLeft:t?`calc((100% - (${e} - 1) * ${n}) / ${e} * ${t} + ${n} * ${t})`:``}},this.$slots)}return B(`div`,{style:[this.itemStyle,this.deriveStyle()]},(e=this.$slots).default?.call(e,{overflow:this.overflow}))}}),He={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Ue=24,$=`__ssr__`,We=b({name:`Grid`,inheritAttrs:!1,props:{layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:`self`},cols:{type:[Number,String],default:Ue},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},setup(e){let{mergedClsPrefixRef:t,mergedBreakpointsRef:n}=I(e),r=/^\d+$/,i=f(void 0),a=Ae(n?.value||He),c=j(()=>!!(e.itemResponsive||!r.test(e.cols.toString())||!r.test(e.xGap.toString())||!r.test(e.yGap.toString()))),l=M(()=>{if(c.value)return e.responsive===`self`?i.value:a.value}),d=j(()=>Number(u(e.cols.toString(),l.value))??Ue),p=j(()=>u(e.xGap.toString(),l.value)),m=j(()=>u(e.yGap.toString(),l.value)),g=e=>{i.value=e.contentRect.width},_=e=>{he(g,e)},v=f(!1),y=M(()=>{if(e.responsive===`self`)return _}),b=f(!1),x=f();return h(()=>{let{value:e}=x;e&&e.hasAttribute($)&&(e.removeAttribute($),b.value=!0)}),s(Z,{layoutShiftDisabledRef:E(e,`layoutShiftDisabled`),isSsrRef:b,itemStyleRef:E(e,`itemStyle`),xGapRef:p,overflowRef:v}),{isSsr:!o,contentEl:x,mergedClsPrefix:t,style:M(()=>e.layoutShiftDisabled?{width:`100%`,display:`grid`,gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:T(e.xGap),rowGap:T(e.yGap)}:{width:`100%`,display:`grid`,gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:T(p.value),rowGap:T(m.value)}),isResponsive:c,responsiveQuery:l,responsiveCols:d,handleResize:y,overflow:v}},render(){if(this.layoutShiftDisabled)return B(`div`,a({ref:`contentEl`,class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);let e=()=>{this.overflow=!1;let e=be(pe(this)),t=[],{collapsed:n,collapsedRows:r,responsiveCols:i,responsiveQuery:o}=this;e.forEach(e=>{if(e?.type?.__GRID_ITEM__!==!0)return;if(je(e)){let n=P(e);n.props?n.props.privateShow=!1:n.props={privateShow:!1},t.push({child:n,rawChildSpan:0});return}e.dirs=e.dirs?.filter(({dir:e})=>e!==F)||null,e.dirs?.length===0&&(e.dirs=null);let n=P(e),r=Number(u(n.props?.span,o)??1);r!==0&&t.push({child:n,rawChildSpan:r})});let s=0,c=t[t.length-1]?.child;if(c?.props){let e=c.props?.suffix;e!==void 0&&e!==!1&&(s=Number(u(c.props?.span,o)??1),c.props.privateSpan=s,c.props.privateColStart=i+1-s,c.props.privateShow=c.props.privateShow??!0)}let l=0,d=!1;for(let{child:e,rawChildSpan:a}of t){if(d&&(this.overflow=!0),!d){let t=Number(u(e.props?.offset,o)??0),c=Math.min(a+t,i);if(e.props?(e.props.privateSpan=c,e.props.privateOffset=t):e.props={privateSpan:c,privateOffset:t},n){let e=l%i;c+e>i&&(l+=i-e),c+l+s>r*i?d=!0:l+=c}}d&&(e.props?e.props.privateShow!==!0&&(e.props.privateShow=!1):e.props={privateShow:!1})}return B(`div`,a({ref:`contentEl`,class:`${this.mergedClsPrefix}-grid`,style:this.style,[$]:this.isSsr||void 0},this.$attrs),t.map(({child:e})=>e))};return this.isResponsive&&this.responsive===`self`?B(x,{onResize:this.handleResize},{default:e}):e()}}),Ge={class:`page-title`},Ke={class:`warnlist`},qe={class:`tile`},Je={class:`tile-foot`},Ye={class:`tile-up`},Xe={class:`tile`},Ze={class:`tile-label`},Qe={class:`tile-value`},$e={class:`tile`},et={class:`tile-label tile-label-help`},tt={class:`tile-value`},nt={class:`tile`},rt={class:`tile-label`},it={class:`tile-value`},at={class:`tile`},ot={class:`tile-label`},st={class:`tile-value`},ct=xe(b({__name:`DashboardPage`,setup(t){let n=Te(),{t:r}=le(),i=f(null),a=f([]),o=f([]),s;function c(e){if(e<1024)return`${e} B`;let t=[`KiB`,`MiB`,`GiB`,`TiB`],n=e,r=-1;do n/=1024,r++;while(n>=1024&&r<t.length-1);return`${n.toFixed(1)} ${t[r]}`}function l(e){if(e<=0)return`—`;let t=Math.floor(e/86400),n=Math.floor(e%86400/3600),r=Math.floor(e%3600/60);return t>0?`${t}d ${n}h`:n>0?`${n}h ${r}m`:`${r}m`}let u=M(()=>{let e=i.value?.metrics?.traffic??{};return{down:e.DownloadBytes??0,up:e.UploadBytes??0}}),p=M(()=>i.value?.mitaStatus===`RUNNING`?`success`:i.value?.mitaStatus===`UNREACHABLE`?`error`:`warning`),m=M(()=>[{title:`ID`,key:`id`},{title:r(`dashboard.colProtocol`),key:`protocol`},{title:r(`dashboard.colLocal`),key:`localAddr`},{title:r(`dashboard.colRemote`),key:`remoteAddr`},{title:r(`dashboard.colState`),key:`state`}]);async function g(){try{i.value=await G.get(`/api/dashboard`),a.value=await G.get(`/api/sessions`)}catch{}}async function v(){try{let e=await G.get(`/api/mita/logs?lines=200`);o.value=e.lines}catch(e){e instanceof W&&e.status===501&&(o.value=[r(`dashboard.notSupervising`)])}}async function b(){try{await G.post(`/api/mita/restart`),n.success(r(`dashboard.restartRequested`))}catch(e){n.error(e instanceof W?e.message:r(`dashboard.restartFailed`))}}function x(){g(),s=window.setInterval(()=>{document.hidden||g()},5e3)}return h(x),_(()=>window.clearInterval(s)),(t,n)=>(y(),R(L,null,[A(`h2`,Ge,e(O(r)(`dashboard.title`)),1),V(O(me),{vertical:``,size:16},{default:w(()=>[i.value?.warnings?.length?(y(),ie(O(K),{key:0,type:`warning`,title:O(r)(`dashboard.hardening`)},{default:w(()=>[A(`ul`,Ke,[(y(!0),R(L,null,d(i.value.warnings,(t,n)=>(y(),R(`li`,{key:n},e(t),1))),128))])]),_:1},8,[`title`])):te(``,!0),V(O(We),{cols:5,"x-gap":12,"y-gap":12,"item-responsive":``,responsive:`screen`},{default:w(()=>[V(O(Q),{span:`5 m:1`},{default:w(()=>[A(`div`,qe,[n[0]||=A(`div`,{class:`tile-label`},`mita`,-1),A(`div`,Je,[V(O(ge),{type:p.value,size:`small`,round:``},{default:w(()=>[k(e(i.value?.mitaStatus??`…`),1)]),_:1},8,[`type`]),A(`span`,Ye,e(O(r)(`dashboard.mitaSub`,{version:i.value?.mitaVersion||`-`,uptime:l(i.value?.mitaUptimeSeconds??0)})),1)])])]),_:1}),V(O(Q),{span:`5 m:1`},{default:w(()=>[A(`div`,Xe,[A(`div`,Ze,e(O(r)(`dashboard.users`)),1),A(`div`,Qe,e(i.value?.userCount??0),1)])]),_:1}),V(O(Q),{span:`5 m:1`},{default:w(()=>[A(`div`,$e,[V(O(fe),{trigger:`hover`},{trigger:w(()=>[A(`div`,et,e(O(r)(`dashboard.onlineNow`)),1)]),default:w(()=>[k(` `+e(O(r)(`dashboard.onlineHint`)),1)]),_:1}),A(`div`,tt,e(i.value?.activeUserCount??0),1)])]),_:1}),V(O(Q),{span:`5 m:1`},{default:w(()=>[A(`div`,nt,[A(`div`,rt,e(O(r)(`dashboard.download`)),1),A(`div`,it,e(c(u.value.down)),1)])]),_:1}),V(O(Q),{span:`5 m:1`},{default:w(()=>[A(`div`,at,[A(`div`,ot,e(O(r)(`dashboard.upload`)),1),A(`div`,st,e(c(u.value.up)),1)])]),_:1})]),_:1}),V(O(Ee),{title:`mita`},{"header-extra":w(()=>[V(O(ce),{size:`small`,type:`warning`,secondary:``,onClick:b},{default:w(()=>[k(e(O(r)(`dashboard.restartMita`)),1)]),_:1})]),default:w(()=>[V(O(ze),{onItemHeaderClick:v},{default:w(()=>[V(O(X),{title:O(r)(`dashboard.logs`),name:`logs`},{default:w(()=>[V(O(J),{code:o.value.join(`
`)||O(r)(`dashboard.empty`),language:`text`,"word-wrap":``},null,8,[`code`])]),_:1},8,[`title`]),V(O(X),{title:O(r)(`dashboard.rawConnections`,{n:a.value.length}),name:`sessions`},{default:w(()=>[V(O(K),{type:`default`,"show-icon":!1,style:{"margin-bottom":`10px`}},{default:w(()=>[k(e(O(r)(`dashboard.rawConnectionsNote`)),1)]),_:1}),V(O(we),{columns:m.value,data:a.value,"row-key":e=>e.id,size:`small`,"scroll-x":640},null,8,[`columns`,`data`,`row-key`])]),_:1},8,[`title`]),V(O(X),{title:O(r)(`dashboard.rawMetrics`),name:`metrics`},{default:w(()=>[V(O(J),{code:JSON.stringify(i.value?.metrics??{},null,2),language:`json`,"word-wrap":``},null,8,[`code`])]),_:1},8,[`title`])]),_:1})]),_:1})]),_:1})],64))}}),[[`__scopeId`,`data-v-5233eb8f`]]);export{ct as default};