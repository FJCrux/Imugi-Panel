import{$ as e,$n as t,Bn as n,Bt as r,C as i,Dn as a,Dt as o,En as s,Fn as c,Gt as l,Hn as u,In as d,Jn as f,Jt as p,Kt as m,Mn as h,Nn as g,Pn as _,Rt as v,Sn as y,St as b,T as x,Tn as S,Vn as C,X as w,Xn as T,Xt as E,Yt as D,Zn as O,Zt as k,_n as A,_t as j,an as ee,bn as M,er as N,gn as P,hn as F,ht as I,mn as L,o as R,ot as te,pn as z,pt as ne,rn as re,rt as ie,sn as ae,st as oe,tr as se,un as B,vn as V,vt as H,wn as U,wt as ce,xn as W,yt as G,zn as le}from"./router-BIO1-tYH.js";import{_ as ue,a as de,g as fe,i as pe,l as me,n as he,t as K,u as ge}from"./Space-D_izr8eA.js";import{t as _e}from"./Tag-SpLY0thm.js";import{l as ve,p as ye,u as q}from"./_common-CXfM0PR-.js";import{n as J,r as Y,t as be,u as xe}from"./_plugin-vue_export-helper-D_EFaKSB.js";import{n as Se,t as X}from"./FormItem-uIEZOOyp.js";import{t as Ce}from"./Select-DMI8J_XY.js";import{t as we}from"./DataTable-DRkrLdNY.js";import{a as Te,n as Z,t as Ee}from"./use-message-DyxAtDiS.js";import{r as De,t as Oe}from"./InputNumber-Cjg5aBqF.js";import{t as ke}from"./Alert-CiEew2am.js";import{n as Ae,t as je}from"./DrawerContent-BYYhIO42.js";import{t as Me}from"./Switch-ChKMMnjR.js";import{t as Ne}from"./text-BPUjTdUb.js";import{C as Pe,L as Fe,R as Ie,f as Le,i as Re,j as ze,o as Be}from"./index-C_G8VDoQ.js";import{t as Ve}from"./HelpLabel-BZMAA5Xh.js";import{t as He}from"./PeopleOutline-B64cHYoL.js";var Ue=me(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[me(`&::-webkit-scrollbar`,{width:0,height:0})]),We=y({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=f(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=ce();return Ue.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:ge,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return U(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Ge=/\s/;function Ke(e){for(var t=e.length;t--&&Ge.test(e.charAt(t)););return t}var qe=/^\s+/;function Je(e){return e&&e.slice(0,Ke(e)+1).replace(qe,``)}var Ye=NaN,Xe=/^[-+]0x[0-9a-f]+$/i,Ze=/^0b[01]+$/i,Qe=/^0o[0-7]+$/i,$e=parseInt;function et(t){if(typeof t==`number`)return t;if(e(t))return Ye;if(w(t)){var n=typeof t.valueOf==`function`?t.valueOf():t;t=w(n)?n+``:n}if(typeof t!=`string`)return t===0?t:+t;t=Je(t);var r=Ze.test(t);return r||Qe.test(t)?$e(t.slice(2),r?2:8):Xe.test(t)?Ye:+t}var tt=function(){return ie.Date.now()},nt=`Expected a function`,rt=Math.max,it=Math.min;function at(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(nt);t=et(t)||0,w(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?rt(et(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?it(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=tt();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(tt())}function x(){var e=tt(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var ot=`Expected a function`;function st(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(ot);return w(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),at(e,t,{leading:r,maxWait:t,trailing:i})}var ct=o(`n-popconfirm`),lt={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},ut=j(lt),dt=y({name:`NPopconfirmPanel`,props:lt,setup(e){let{localeRef:t}=Te(`Popconfirm`),{inlineThemeDisabled:n}=oe(),{mergedClsPrefixRef:r,mergedThemeRef:i,props:a}=S(ct),o=L(()=>{let{common:{cubicBezierEaseInOut:e},self:{fontSize:t,iconSize:n,iconColor:r}}=i.value;return{"--n-bezier":e,"--n-font-size":t,"--n-icon-size":n,"--n-icon-color":r}}),s=n?te(`popconfirm-panel`,void 0,o,a):void 0;return Object.assign(Object.assign({},Te(`Popconfirm`)),{mergedClsPrefix:r,cssVars:n?void 0:o,localizedPositiveText:L(()=>e.positiveText||t.value.positiveText),localizedNegativeText:L(()=>e.negativeText||t.value.negativeText),positiveButtonProps:T(a,`positiveButtonProps`),negativeButtonProps:T(a,`negativeButtonProps`),handlePositiveClick(t){e.onPositiveClick(t)},handleNegativeClick(t){e.onNegativeClick(t)},themeClass:s?.themeClass,onRender:s?.onRender})},render(){var e;let{mergedClsPrefix:t,showIcon:n,$slots:r}=this,a=ne(r.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&U(R,Object.assign({size:`small`,onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&U(R,Object.assign({size:`small`,type:`primary`,onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)==null||e.call(this),U(`div`,{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},I(r.default,e=>n||e?U(`div`,{class:`${t}-popconfirm__body`},n?U(`div`,{class:`${t}-popconfirm__icon`},ne(r.icon,()=>[U(i,{clsPrefix:t},{default:()=>U(ze,null)})])):null,e):null),a?U(`div`,{class:[`${t}-popconfirm__action`]},a):null)}}),ft=m(`popconfirm`,[p(`body`,`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[p(`icon`,`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),p(`action`,`
 display: flex;
 justify-content: flex-end;
 `,[l(`&:not(:first-child)`,`margin-top: 8px`),m(`button`,[l(`&:not(:last-child)`,`margin-right: 8px;`)])])]),pt=y({name:`Popconfirm`,props:Object.assign(Object.assign(Object.assign({},x.props),de),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:`click`},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),slots:Object,__popover__:!0,setup(e){let{mergedClsPrefixRef:t}=oe(),n=x(`Popconfirm`,`-popconfirm`,ft,Be,e,t),r=f(null);function i(t){if(!r.value?.getMergedShow())return;let{onPositiveClick:n,"onUpdate:show":i}=e;Promise.resolve(n?n(t):!0).then(e=>{var t;e!==!1&&((t=r.value)==null||t.setShow(!1),i&&H(i,!1))})}function a(t){if(!r.value?.getMergedShow())return;let{onNegativeClick:n,"onUpdate:show":i}=e;Promise.resolve(n?n(t):!0).then(e=>{var t;e!==!1&&((t=r.value)==null||t.setShow(!1),i&&H(i,!1))})}return c(ct,{mergedThemeRef:n,mergedClsPrefixRef:t,props:e}),{setShow(e){var t;(t=r.value)==null||t.setShow(e)},syncPosition(){var e;(e=r.value)==null||e.syncPosition()},mergedTheme:n,popoverInstRef:r,handlePositiveClick:i,handleNegativeClick:a}},render(){let{$slots:e,$props:t,mergedTheme:n}=this;return U(pe,Object.assign({},Ie(t,ut),{theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalExtraClass:[`popconfirm`],ref:`popoverInstRef`}),{trigger:e.trigger,default:()=>{let n=q(t,ut);return U(dt,Object.assign({},n,{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}}),mt=o(`n-tabs`),ht={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},gt=y({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:ht,slots:Object,setup(e){let t=S(mt,null);return t||G(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return U(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),_t=y({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ie(ht,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=S(mt);return{trigger:d,mergedClosable:L(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:a,tab:o,value:c,mergedClosable:l,trigger:u,$slots:{default:d}}=this,f=a??o;return U(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?U(`div`,{class:`${t}-tabs-tab-pad`}):null,U(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},s({class:[`${t}-tabs-tab`,c===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,l&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:u===`click`?this.activateTab:void 0,onMouseenter:u===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),U(`span`,{class:`${t}-tabs-tab__label`},e?U(B,null,U(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),U(i,{clsPrefix:t},{default:()=>U(De,null)})):d?d():typeof f==`object`?f:Fe(f??n)),l&&this.type===`card`?U(ve,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),vt=m(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[D(`segment-type`,[m(`tabs-rail`,[l(`&.transition-disabled`,[m(`tabs-capsule`,`
 transition: none;
 `)])])]),D(`top`,[m(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),D(`left`,[m(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),D(`left, right`,`
 flex-direction: row;
 `,[m(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),m(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),D(`right`,`
 flex-direction: row-reverse;
 `,[m(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),m(`tabs-bar`,`
 left: 0;
 `)]),D(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[m(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),m(`tabs-bar`,`
 top: 0;
 `)]),m(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[m(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),m(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[m(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[D(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),l(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),D(`flex`,[m(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[m(`tabs-wrapper`,`
 width: 100%;
 `,[m(`tabs-tab`,`
 margin-right: 0;
 `)])])]),m(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[p(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),p(`prefix`,`padding-right: 16px;`),p(`suffix`,`padding-left: 16px;`)]),D(`top, bottom`,[l(`>`,[m(`tabs-nav`,[m(`tabs-nav-scroll-wrapper`,[l(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),l(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),D(`shadow-start`,[l(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),D(`shadow-end`,[l(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),D(`left, right`,[m(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),l(`>`,[m(`tabs-nav`,[m(`tabs-nav-scroll-wrapper`,[l(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),l(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),D(`shadow-start`,[l(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),D(`shadow-end`,[l(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),m(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[m(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[l(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),l(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),m(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),m(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),m(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),m(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[D(`disabled`,{cursor:`not-allowed`}),p(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),p(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),m(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[l(`&.transition-disabled`,`
 transition: none;
 `),D(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),m(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),m(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[l(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),l(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),l(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),l(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),l(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),m(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),D(`line-type, bar-type`,[m(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[l(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),D(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),D(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),m(`tabs-nav`,[D(`line-type`,[D(`top`,[p(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),m(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),m(`tabs-bar`,`
 bottom: -1px;
 `)]),D(`left`,[p(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),m(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),m(`tabs-bar`,`
 right: -1px;
 `)]),D(`right`,[p(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),m(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),m(`tabs-bar`,`
 left: -1px;
 `)]),D(`bottom`,[p(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),m(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),m(`tabs-bar`,`
 top: -1px;
 `)]),p(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-bar`,`
 border-radius: 0;
 `)]),D(`card-type`,[p(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[D(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[p(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),E(`disabled`,[l(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),D(`closable`,`padding-right: 8px;`),D(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),D(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),D(`left, right`,`
 flex-direction: column; 
 `,[p(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),m(`tabs-wrapper`,`
 flex-direction: column;
 `),m(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[m(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),D(`top`,[D(`card-type`,[m(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),p(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),m(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[D(`active`,`
 border-bottom: 1px solid #0000;
 `)]),m(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),m(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),D(`left`,[D(`card-type`,[m(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),p(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),m(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[D(`active`,`
 border-right: 1px solid #0000;
 `)]),m(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),m(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),D(`right`,[D(`card-type`,[m(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),p(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),m(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[D(`active`,`
 border-left: 1px solid #0000;
 `)]),m(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),m(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),D(`bottom`,[D(`card-type`,[m(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),p(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),m(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[D(`active`,`
 border-top: 1px solid #0000;
 `)]),m(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),m(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),yt=st,bt=y({name:`Tabs`,props:Object.assign(Object.assign({},x.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:i,inlineThemeDisabled:o,mergedComponentPropsRef:s}=oe(e),l=x(`Tabs`,`-tabs`,vt,Re,e,i),u=f(null),d=f(null),p=f(null),m=f(null),g=f(null),_=f(null),y=f(!0),b=f(!0),S=fe(e,[`labelSize`,`size`]),C=L(()=>S.value?S.value:s?.value?.Tabs?.size||`medium`),w=fe(e,[`activeName`,`value`]),E=f(w.value??e.defaultValue??(t.default?ye(t.default())[0]?.props?.name:null)),D=xe(w,E),O={id:0},A=L(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});le(D,()=>{O.id=0,P(),F()});function j(){let{value:e}=D;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function ee(t){if(e.type===`card`)return;let{value:n}=d;if(!n)return;let r=n.style.opacity===`0`;if(t){let a=`${i.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(N([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width=`8192px`,r&&(n.style.transition=`none`),n.offsetWidth,r&&(n.style.transition=``,n.style.opacity=`1`)}else{if(N([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height=`8192px`,r&&(n.style.transition=`none`),n.offsetHeight,r&&(n.style.transition=``,n.style.opacity=`1`)}}}function M(){if(e.type===`card`)return;let{value:t}=d;t&&(t.style.opacity=`0`)}function N(e){let{value:t}=d;if(t)for(let n of e)t.style[n]=``}function P(){if(e.type===`card`)return;let t=j();t?ee(t):M()}function F(){let e=g.value?.$el;if(!e)return;let t=j();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let I=f(null),R=0,z=null;function ne(e){let t=I.value;if(t){R=e.getBoundingClientRect().height;let n=`${R}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};z?(r(),z(),z=null):z=r}}function re(e){let t=I.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(R,n)}px`};z?(z(),z=null,r()):z=r}}function ie(){let t=I.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let ae={value:[]},se=f(`next`);function B(e){let t=D.value,n=`next`;for(let r of ae.value){if(r===t)break;if(r===e){n=`prev`;break}}se.value=n,V(e)}function V(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&H(n,t),r&&H(r,t),i&&H(i,t),E.value=t}function U(t){let{onClose:n}=e;n&&H(n,t)}let ce=!0;function W(){let{value:e}=d;if(!e)return;ce||=!1;let t=`transition-disabled`;e.classList.add(t),P(),e.classList.remove(t)}let G=f(null);function de({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=j();n&&G.value&&(G.value.style.width=`${n.offsetWidth}px`,G.value.style.height=`${n.offsetHeight}px`,G.value.style.transform=`translateX(${n.offsetLeft-v(getComputedStyle(t).paddingLeft)}px)`,e&&G.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}le([D],()=>{e.type===`segment`&&a(()=>{de({transitionDisabled:!1})})}),h(()=>{e.type===`segment`&&de({transitionDisabled:!0})});let pe=0;function me(t){if(t.contentRect.width===0&&t.contentRect.height===0||pe===t.contentRect.width)return;pe=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(ce||e.justifyContent?.startsWith(`space`))&&W(),n!==`segment`){let{placement:t}=e;q((t===`top`||t===`bottom`?g.value?.$el:_.value)||null)}}let he=yt(me,64);le([()=>e.justifyContent,()=>e.size],()=>{a(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&W()})});let K=f(!1);function ge(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!K.value)s===`top`||s===`bottom`?a<r&&(K.value=!0):o<i&&(K.value=!0);else{let{value:e}=m;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(K.value=!1):o-i>e.$el.offsetHeight&&(K.value=!1)}q(g.value?.$el||null)}let _e=yt(ge,64);function ve(){let{onAdd:t}=e;t&&t(),a(()=>{let e=j(),{value:t}=g;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function q(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;y.value=e<=0,b.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;y.value=e<=0,b.value=e+r>=n}}let J=yt(e=>{q(e.target)},64);c(mt,{triggerRef:T(e,`trigger`),tabStyleRef:T(e,`tabStyle`),tabClassRef:T(e,`tabClass`),addTabStyleRef:T(e,`addTabStyle`),addTabClassRef:T(e,`addTabClass`),paneClassRef:T(e,`paneClass`),paneStyleRef:T(e,`paneStyle`),mergedClsPrefixRef:i,typeRef:T(e,`type`),closableRef:T(e,`closable`),valueRef:D,tabChangeIdRef:O,onBeforeLeaveRef:T(e,`onBeforeLeave`),activateTab:B,handleClose:U,handleAdd:ve}),ue(()=>{P(),F()}),n(()=>{let{value:e}=p;if(!e)return;let{value:t}=i,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,r=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),b.value?e.classList.remove(r):e.classList.add(r)});let Y={syncBarPosition:()=>{P()}},be=()=>{de({transitionDisabled:!0})},Se=L(()=>{let{value:t}=C,{type:n}=e,i=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:a,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:u,tabBorderColor:d,paneTextColor:f,tabFontWeight:p,tabBorderRadius:m,tabFontWeightActive:h,colorSegment:g,fontWeightStrong:_,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:w,[k(`panePadding`,t)]:T,[k(`tabPadding`,i)]:E,[k(`tabPaddingVertical`,i)]:D,[k(`tabGap`,i)]:O,[k(`tabGap`,`${i}Vertical`)]:A,[k(`tabTextColor`,n)]:j,[k(`tabTextColorActive`,n)]:ee,[k(`tabTextColorHover`,n)]:M,[k(`tabTextColorDisabled`,n)]:N,[k(`tabFontSize`,t)]:P},common:{cubicBezierEaseInOut:F}}=l.value;return{"--n-bezier":F,"--n-color-segment":g,"--n-bar-color":a,"--n-tab-font-size":P,"--n-tab-text-color":j,"--n-tab-text-color-active":ee,"--n-tab-text-color-disabled":N,"--n-tab-text-color-hover":M,"--n-pane-text-color":f,"--n-tab-border-color":d,"--n-tab-border-radius":m,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":w,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":u,"--n-tab-font-weight":p,"--n-tab-font-weight-active":h,"--n-tab-padding":E,"--n-tab-padding-vertical":D,"--n-tab-gap":O,"--n-tab-gap-vertical":A,"--n-pane-padding-left":r(T,`left`),"--n-pane-padding-right":r(T,`right`),"--n-pane-padding-top":r(T,`top`),"--n-pane-padding-bottom":r(T,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),X=o?te(`tabs`,L(()=>`${C.value[0]}${e.type[0]}`),Se,e):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:D,renderedNames:new Set,segmentCapsuleElRef:G,tabsPaneWrapperRef:I,tabsElRef:u,barElRef:d,addTabInstRef:m,xScrollInstRef:g,scrollWrapperElRef:p,addTabFixed:K,tabWrapperStyle:A,handleNavResize:he,mergedSize:C,handleScroll:J,handleTabsResize:_e,cssVars:o?void 0:Se,themeClass:X?.themeClass,animationDirection:se,renderNameListRef:ae,yScrollElRef:_,handleSegmentResize:be,onAnimationBeforeLeave:ne,onAnimationEnter:re,onAnimationAfterEnter:ie,onRender:X?.onRender},Y)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?ye(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?ye(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let y=()=>{let t=U(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:U(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),wt(U(_t,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),wt(t!==0&&!v?Ct(e):e))),!r&&i&&g?St(i,(h?p.length:m.length)!==0):null,v?null:U(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return U(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?U(b,{onResize:this.handleTabsResize},{default:()=>t}):t,g?U(`div`,{class:`${e}-tabs-pad`}):null,g?null:U(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=_?`top`:n;return U(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},U(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},I(d,t=>t&&U(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?U(b,{onResize:this.handleSegmentResize},{default:()=>U(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},U(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},U(`div`,{class:`${e}-tabs-wrapper`},U(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),U(_t,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ct(e))))}):U(b,{onResize:this.handleNavResize},{default:()=>U(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?U(We,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:y}):U(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},y()))}),r&&i&&g?St(i,!0):null,I(f,t=>t&&U(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(x===`top`||x===`bottom`)?U(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},xt(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):xt(p,this.mergedValue,this.renderedNames)))}});function xt(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?u(e,[[ae,c]]):e)}}),o?U(ee,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function St(e,t){return U(_t,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ct(e){let t=z(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function wt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Tt=N(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),Q=N((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),Et=N((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),Dt=N(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),Ot=N(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),kt=N((e=>{var t=Q().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),At=N((e=>{var t=Q().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),jt=N((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),Mt=N((e=>{var t=Et(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),Nt=N((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),Pt=N((e=>{var t=Nt();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),Ft=N(((e,t)=>{var n=Pt();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),It=N((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),Lt=N((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),$=N((e=>{var t=It(),n=Lt();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),Rt=N((e=>{var t=Q(),n=Mt(),r=Et(),i=$(),a=It(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),zt=N((e=>{var t=Q(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),Bt=N(((e,t)=>{var n=$();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),Vt=N(((e,t)=>{var n=$(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),Ht=N(((e,t)=>{var n=$();function r(e){this.mode=n.BYTE,typeof e==`string`?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),Ut=N(((e,t)=>{var n=$(),r=Q();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),Wt=N(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),Gt=N((e=>{var t=$(),n=Bt(),r=Vt(),i=Ht(),a=Ut(),o=Lt(),s=Q(),c=Wt();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),Kt=N((e=>{var t=Q(),n=Et(),r=Dt(),i=Ot(),a=kt(),o=At(),s=jt(),c=Mt(),l=Ft(),u=Rt(),d=zt(),f=$(),p=Gt();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function b(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return x(a,e,n)}function x(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,S,C;for(S=0;S<v;S++)for(C=0;C<o;C++)S<g[C].length&&(b[x++]=g[C][S]);for(S=0;S<p;S++)for(C=0;C<o;C++)b[x++]=_[C][S];return b}function S(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=b(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),S(e,a,i,o)}})),qt=N((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||={};let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),Jt=N((e=>{var t=qt();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),Yt=N((e=>{var t=qt();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),Xt=se(N((e=>{var t=Tt(),n=Kt(),r=Jt(),i=Yt();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))(),1),Zt=y({__name:`ShareModal`,props:{username:{}},emits:[`close`],setup(e,{emit:n}){let r=e,i=n,o=Ee(),{t:s}=re(),c=f(null),l=f(``),u=f(null),d=f(null),p=f(null),m=f(`link`),g=f(60),v=L(()=>[{label:s(`share.ttl15m`),value:15},{label:s(`share.ttl1h`),value:60},{label:s(`share.ttl24h`),value:1440}]),y=f(``),b=f(0),x=f(!1);async function S(e,t){if(!(!e||!t))try{await Xt.toCanvas(e,t,{width:280,margin:1})}catch{}}async function w(){if(await a(),m.value===`link`){await S(p.value,y.value);return}c.value&&(c.value.mierusUrls.length&&await S(u.value,c.value.mierusUrls[0]),await S(d.value,c.value.mieruUrl))}h(async()=>{try{c.value=await Y.get(`/api/users/${encodeURIComponent(r.username)}/share`),await w()}catch(e){l.value=e instanceof J?e.message:s(`share.failed`)}}),le(m,w);async function T(){x.value=!0;try{let e=await Y.post(`/api/users/${encodeURIComponent(r.username)}/share-token`,{ttlMinutes:g.value});y.value=e.url,b.value=e.expiresAt,await w()}catch(e){o.error(e instanceof J?e.message:s(`share.linkFailed`))}finally{x.value=!1}}function E(){return b.value?s(`share.expires`,{date:new Date(b.value*1e3).toLocaleString()}):``}function D(e){navigator.clipboard.writeText(e).then(()=>o.success(s(`common.copied`)),()=>o.error(s(`common.copyFailed`)))}function k(){if(!c.value)return;let e=new Blob([c.value.clientConfigJson],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`mieru-${r.username}.json`,t.click(),URL.revokeObjectURL(t.href)}return(n,r)=>(_(),P(O(Le),{show:!0,preset:`card`,title:O(s)(`share.title`,{name:e.username}),style:{width:`480px`},onClose:r[6]||=e=>i(`close`),onMaskClick:r[7]||=e=>i(`close`)},{default:C(()=>[l.value?(_(),P(O(ke),{key:0,type:`warning`,"show-icon":!1},{default:C(()=>[M(t(l.value),1)]),_:1})):(_(),P(O(bt),{key:1,value:m.value,"onUpdate:value":r[5]||=e=>m.value=e},{default:C(()=>[W(O(gt),{name:`link`,tab:O(s)(`share.linkTab`)},{default:C(()=>[W(O(K),{vertical:``,align:`center`},{default:C(()=>[W(O(Ne),{depth:`3`,style:{"font-size":`12px`,"text-align":`center`}},{default:C(()=>[M(t(O(s)(`share.linkText`)),1)]),_:1}),W(O(K),{align:`center`},{default:C(()=>[W(O(Ce),{value:g.value,"onUpdate:value":r[0]||=e=>g.value=e,options:v.value,style:{width:`140px`}},null,8,[`value`,`options`]),W(O(R),{type:`primary`,loading:x.value,onClick:T},{default:C(()=>[M(t(O(s)(`share.generateLink`)),1)]),_:1},8,[`loading`])]),_:1}),y.value?(_(),V(B,{key:0},[F(`canvas`,{ref_key:`linkCanvas`,ref:p},null,512),W(O(Z),{value:y.value,readonly:``},null,8,[`value`]),W(O(K),{align:`center`},{default:C(()=>[W(O(R),{size:`small`,onClick:r[1]||=e=>D(y.value)},{default:C(()=>[M(t(O(s)(`share.copyLink`)),1)]),_:1}),W(O(Ne),{depth:`3`,style:{"font-size":`12px`}},{default:C(()=>[M(t(E()),1)]),_:1})]),_:1})],64)):A(``,!0)]),_:1})]),_:1},8,[`tab`]),W(O(gt),{name:`mierus`,tab:`mierus://`,disabled:!c.value},{default:C(()=>[W(O(K),{vertical:``,align:`center`},{default:C(()=>[F(`canvas`,{ref_key:`mierusCanvas`,ref:u},null,512),W(O(Z),{value:c.value?.mierusUrls[0],type:`textarea`,readonly:``,autosize:{minRows:2,maxRows:4}},null,8,[`value`]),W(O(R),{size:`small`,onClick:r[2]||=e=>D(c.value.mierusUrls[0])},{default:C(()=>[M(t(O(s)(`share.copyLink`)),1)]),_:1})]),_:1})]),_:1},8,[`disabled`]),W(O(gt),{name:`mieru`,tab:`mieru://`,disabled:!c.value},{default:C(()=>[W(O(K),{vertical:``,align:`center`},{default:C(()=>[F(`canvas`,{ref_key:`mieruCanvas`,ref:d},null,512),W(O(Z),{value:c.value?.mieruUrl,type:`textarea`,readonly:``,autosize:{minRows:2,maxRows:4}},null,8,[`value`]),W(O(R),{size:`small`,onClick:r[3]||=e=>D(c.value.mieruUrl)},{default:C(()=>[M(t(O(s)(`share.copyLink`)),1)]),_:1})]),_:1})]),_:1},8,[`disabled`]),W(O(gt),{name:`json`,tab:O(s)(`share.configTab`),disabled:!c.value},{default:C(()=>[W(O(K),{vertical:``},{default:C(()=>[W(O(Z),{value:c.value?.clientConfigJson,type:`textarea`,readonly:``,autosize:{minRows:8,maxRows:14}},null,8,[`value`]),W(O(K),null,{default:C(()=>[W(O(R),{size:`small`,onClick:r[4]||=e=>D(c.value.clientConfigJson)},{default:C(()=>[M(t(O(s)(`common.copy`)),1)]),_:1}),W(O(R),{size:`small`,onClick:k},{default:C(()=>[M(t(O(s)(`share.downloadJson`)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,[`tab`,`disabled`])]),_:1},8,[`value`]))]),_:1},8,[`title`]))}}),Qt={class:`empty`},$t={class:`empty-title`},en={class:`empty-sub`},tn={key:0,class:`legend`},nn=300*1e3,rn=be(y({__name:`UsersPage`,setup(e){let n=Ee(),{t:r}=re(),i=f([]),a=f(!1),o=f(Date.now()),s,c;function l(e){let t=Math.max(0,o.value-e),n=Math.floor(t/6e4);if(n<1)return r(`users.momentsAgo`);if(n<60)return r(`users.minutesAgo`,{n});let i=Math.floor(n/60);return i<24?r(`users.hoursAgo`,{n:i}):r(`users.daysAgo`,{n:Math.floor(i/24)})}function u(e){return Object.entries(e.metrics).reduce((e,[t,n])=>{let r=t.toLowerCase();return r.includes(`download`)||r.includes(`upload`)?e+n:e},0)}let p=f(!1),m=f(null),v=f({name:``,password:``,allowPrivateIP:!1}),y=f([]),b=f(null);function x(e){if(e<1024)return`${e} B`;let t=[`KiB`,`MiB`,`GiB`,`TiB`],n=e,r=-1;do n/=1024,r++;while(n>=1024&&r<t.length-1);return`${n.toFixed(1)} ${t[r]}`}function S(e){let t=Object.entries(e.metrics);if(!t.length)return`—`;let n=t.find(([e])=>e.toLowerCase().includes(`download`))?.[1]??0,r=t.find(([e])=>e.toLowerCase().includes(`upload`))?.[1]??0;return`↓ ${x(n)} / ↑ ${x(r)}`}let w=L(()=>[{title:r(`users.name`),key:`name`},{title:r(`users.colStatus`),key:`status`,render:e=>{let t=e.lastActiveUnixMs>0&&o.value-e.lastActiveUnixMs<nn,n;return n=t?r(`users.online`):e.lastActiveUnixMs>0?l(e.lastActiveUnixMs):u(e)>0?r(`users.offline`):r(`users.neverActive`),U(_e,{type:t?`success`:`default`,size:`small`,round:!0},{default:()=>n})}},{title:r(`users.colQuotas`),key:`quotas`,render:e=>e.quotas.length?e.quotas.map(e=>U(_e,{size:`small`,style:`margin-right:4px`},{default:()=>`${e.megabytes} MB / ${e.days}d`})):`—`},{title:r(`users.colTraffic`),key:`traffic`,render:S},{title:r(`users.colShare`),key:`share`,render:e=>U(R,{size:`small`,disabled:!e.hasSecret,onClick:()=>b.value=e.name},{default:()=>e.hasSecret?r(`users.share`):r(`users.noPassword`)})},{title:r(`common.actions`),key:`actions`,render:e=>U(K,null,{default:()=>[U(R,{size:`small`,onClick:()=>D(e)},{default:()=>r(`common.edit`)}),U(pt,{onPositiveClick:()=>ee(e.name)},{trigger:()=>U(R,{size:`small`,type:`error`,quaternary:!0},{default:()=>r(`common.delete`)}),default:()=>r(`users.confirmDelete`,{name:e.name})})]})}]);async function T(e=!1){e||(a.value=!0);try{i.value=await Y.get(`/api/users`),o.value=Date.now()}catch(t){e||n.error(t instanceof J?t.message:r(`users.loadFailed`))}finally{e||(a.value=!1)}}function E(){m.value=null,v.value={name:``,password:``,allowPrivateIP:!1},y.value=[],p.value=!0}function D(e){m.value=e.name,v.value={name:e.name,password:``,allowPrivateIP:e.allowPrivateIP},y.value=e.quotas.map(e=>({...e})),p.value=!0}function k(){y.value.push({days:30,megabytes:10240})}async function j(){let e={password:v.value.password,quotas:y.value,allowPrivateIP:v.value.allowPrivateIP};try{m.value===null?(await Y.post(`/api/users`,{name:v.value.name,...e}),n.success(r(`users.created`))):(await Y.put(`/api/users/${encodeURIComponent(m.value)}`,e),n.success(r(`users.updated`))),p.value=!1,await T()}catch(e){n.error(e instanceof J?e.message:r(`common.saveFailed`))}}async function ee(e){try{await Y.del(`/api/users/${encodeURIComponent(e)}`),n.success(r(`users.deleted`)),await T()}catch(e){n.error(e instanceof J?e.message:r(`common.deleteFailed`))}}return h(()=>{T(),s=window.setInterval(()=>{!document.hidden&&!p.value&&T(!0)},1e4),c=window.setInterval(()=>o.value=Date.now(),5e3)}),g(()=>{window.clearInterval(s),window.clearInterval(c)}),(e,n)=>(_(),V(B,null,[W(O(Pe),{title:O(r)(`users.title`)},{"header-extra":C(()=>[W(O(R),{type:`primary`,onClick:E},{default:C(()=>[M(t(O(r)(`users.addUser`)),1)]),_:1})]),default:C(()=>[W(O(we),{columns:w.value,data:i.value,loading:a.value,"row-key":e=>e.name,"scroll-x":760},{empty:C(()=>[F(`div`,Qt,[W(O(he),{component:O(He),size:30,class:`empty-icon`},null,8,[`component`]),F(`div`,$t,t(O(r)(`users.emptyTitle`)),1),F(`div`,en,t(O(r)(`users.emptySub`)),1),W(O(R),{type:`primary`,size:`small`,onClick:E},{default:C(()=>[M(t(O(r)(`users.addUser`)),1)]),_:1})])]),_:1},8,[`columns`,`data`,`loading`,`row-key`]),i.value.length?(_(),V(`p`,tn,t(O(r)(`users.statusLegend`)),1)):A(``,!0)]),_:1},8,[`title`]),W(O(Ae),{show:p.value,"onUpdate:show":n[4]||=e=>p.value=e,width:420},{default:C(()=>[W(O(je),{title:m.value===null?O(r)(`users.addUser`):O(r)(`users.editUser`,{name:m.value})},{footer:C(()=>[W(O(K),null,{default:C(()=>[W(O(R),{onClick:n[3]||=e=>p.value=!1},{default:C(()=>[M(t(O(r)(`common.cancel`)),1)]),_:1}),W(O(R),{type:`primary`,onClick:j},{default:C(()=>[M(t(O(r)(`common.save`)),1)]),_:1})]),_:1})]),default:C(()=>[W(O(Se),null,{default:C(()=>[m.value===null?(_(),P(O(X),{key:0},{label:C(()=>[W(Ve,{label:O(r)(`users.name`),help:O(r)(`users.nameHelp`)},null,8,[`label`,`help`])]),default:C(()=>[W(O(Z),{value:v.value.name,"onUpdate:value":n[0]||=e=>v.value.name=e,placeholder:`username`},null,8,[`value`])]),_:1})):A(``,!0),W(O(X),null,{label:C(()=>[W(Ve,{label:m.value===null?O(r)(`users.password`):O(r)(`users.passwordKeep`),help:O(r)(`users.passwordHelp`)},null,8,[`label`,`help`])]),default:C(()=>[W(O(Z),{value:v.value.password,"onUpdate:value":n[1]||=e=>v.value.password=e,type:`password`,"show-password-on":`click`},null,8,[`value`])]),_:1}),W(O(X),null,{label:C(()=>[W(Ve,{label:O(r)(`users.allowPrivate`),help:O(r)(`users.allowPrivateHelp`)},null,8,[`label`,`help`])]),default:C(()=>[W(O(Me),{value:v.value.allowPrivateIP,"onUpdate:value":n[2]||=e=>v.value.allowPrivateIP=e},null,8,[`value`])]),_:1}),W(O(X),null,{label:C(()=>[W(Ve,{label:O(r)(`users.quotas`),help:O(r)(`users.quotasHelp`)},null,8,[`label`,`help`])]),default:C(()=>[W(O(K),{vertical:``,style:{width:`100%`}},{default:C(()=>[(_(!0),V(B,null,d(y.value,(e,i)=>(_(),P(O(K),{key:i,align:`center`},{default:C(()=>[W(O(Oe),{value:e.megabytes,"onUpdate:value":t=>e.megabytes=t,min:1,step:1024},{suffix:C(()=>[...n[6]||=[M(`MB`,-1)]]),_:1},8,[`value`,`onUpdate:value`]),F(`span`,null,t(O(r)(`users.per`)),1),W(O(Oe),{value:e.days,"onUpdate:value":t=>e.days=t,min:1,max:365},{suffix:C(()=>[M(t(O(r)(`users.days`)),1)]),_:1},8,[`value`,`onUpdate:value`]),W(O(R),{size:`tiny`,quaternary:``,type:`error`,onClick:e=>y.value.splice(i,1)},{default:C(()=>[...n[7]||=[M(`✕`,-1)]]),_:1},8,[`onClick`])]),_:2},1024))),128)),W(O(R),{size:`small`,dashed:``,onClick:k},{default:C(()=>[M(t(O(r)(`users.addQuota`)),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`title`])]),_:1},8,[`show`]),b.value?(_(),P(Zt,{key:0,username:b.value,onClose:n[5]||=e=>b.value=null},null,8,[`username`])):A(``,!0)],64))}}),[[`__scopeId`,`data-v-26e8b568`]]);export{rn as default};