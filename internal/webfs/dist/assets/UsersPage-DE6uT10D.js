import{d as ue,i as z,r as j,an as lr,ao as ur,ap as Fe,aq as dr,m as mn,ar as Nt,B as K,as as wt,N as yn,at as cr,q as Rt,E as Tt,y as wn,G as Q,z as ae,K as fr,n as C,C as H,D as q,au as Cn,O as gr,v as qe,av as hr,F as ve,A as xn,af as pr,T as br,M as je,J as vr,aw as mr,p as U,H as yr,aj as Ve,V as Ke,a8 as $e,Y as St,Q as wr,ax as Cr,ay as xr,ab as Pr,az as Rr,ak as Tr,aA as Ue,aB as ne,aC as Ie,a6 as Sr,u as Pn,_ as we,b as w,aD as Er,w as L,h as V,t as J,e as M,c as Ct,a as De,$ as xt,o as se,Z as Br,am as Ar,al as Nr}from"./index-iR2p-6Dj.js";import{u as kr,a as me,A as Ae}from"./_plugin-vue_export-helper-BgMEosCn.js";import{A as Ir,N as kt}from"./InputNumber-DsvbfLYz.js";import{d as _r,e as It,f as zr,p as Mr,o as Lr,u as _t,a as ee}from"./Space-BSrt9nIc.js";import{N as $r}from"./Select-CfpGUWKe.js";import{a as zt,u as Rn,N as ye}from"./use-message-Bqbl25Pk.js";import{N as Ur}from"./Alert-DTowAHnx.js";import{N as Mt}from"./text-DfeFdT83.js";import{H as _e}from"./HelpLabel-F8KT4Qcf.js";import{N as Dr,a as Fr}from"./DrawerContent-LR5t5GH2.js";import{N as jr}from"./Switch-jqnqOdZc.js";import{N as qr}from"./DataTable-DlNfdRZ5.js";import{N as Or,a as ze}from"./FormItem-BcgUsSN9.js";import{N as Lt}from"./Tag-C8UCq_2W.js";import"./Dropdown-CkxXHv_l.js";import"./ArrowDown-DbNXElp0.js";const Hr=It(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[It("&::-webkit-scrollbar",{width:0,height:0})]),Wr=ue({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=j(null);function a(t){!(t.currentTarget.offsetWidth<t.currentTarget.scrollWidth)||t.deltaY===0||(t.currentTarget.scrollLeft+=t.deltaY+t.deltaX,t.preventDefault())}const o=lr();return Hr.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:_r,ssr:o}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...t){var n;(n=e.value)===null||n===void 0||n.scrollTo(...t)}})},render(){return z("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Vr=/\s/;function Kr(e){for(var a=e.length;a--&&Vr.test(e.charAt(a)););return a}var Jr=/^\s+/;function Yr(e){return e&&e.slice(0,Kr(e)+1).replace(Jr,"")}var $t=NaN,Gr=/^[-+]0x[0-9a-f]+$/i,Qr=/^0b[01]+$/i,Xr=/^0o[0-7]+$/i,Zr=parseInt;function Ut(e){if(typeof e=="number")return e;if(ur(e))return $t;if(Fe(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=Fe(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Yr(e);var o=Qr.test(e);return o||Xr.test(e)?Zr(e.slice(2),o?2:8):Gr.test(e)?$t:+e}var Je=function(){return dr.Date.now()},ea="Expected a function",ta=Math.max,na=Math.min;function ra(e,a,o){var r,t,n,i,s,l,f=0,h=!1,v=!1,m=!0;if(typeof e!="function")throw new TypeError(ea);a=Ut(a)||0,Fe(o)&&(h=!!o.leading,v="maxWait"in o,n=v?ta(Ut(o.maxWait)||0,a):n,m="trailing"in o?!!o.trailing:m);function y(g){var d=r,u=t;return r=t=void 0,f=g,i=e.apply(u,d),i}function x(g){return f=g,s=setTimeout(P,a),h?y(g):i}function R(g){var d=g-l,u=g-f,c=a-d;return v?na(c,n-u):c}function D(g){var d=g-l,u=g-f;return l===void 0||d>=a||d<0||v&&u>=n}function P(){var g=Je();if(D(g))return B(g);s=setTimeout(P,R(g))}function B(g){return s=void 0,m&&r?y(g):(r=t=void 0,i)}function N(){s!==void 0&&clearTimeout(s),f=0,r=l=t=s=void 0}function S(){return s===void 0?i:B(Je())}function k(){var g=Je(),d=D(g);if(r=arguments,t=this,l=g,d){if(s===void 0)return x(l);if(v)return clearTimeout(s),s=setTimeout(P,a),y(l)}return s===void 0&&(s=setTimeout(P,a)),i}return k.cancel=N,k.flush=S,k}var aa="Expected a function";function oa(e,a,o){var r=!0,t=!0;if(typeof e!="function")throw new TypeError(aa);return Fe(o)&&(r="leading"in o?!!o.leading:r,t="trailing"in o?!!o.trailing:t),ra(e,a,{leading:r,maxWait:a,trailing:t})}const Tn=mn("n-popconfirm"),Sn={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},Dt=fr(Sn),ia=ue({name:"NPopconfirmPanel",props:Sn,setup(e){const{localeRef:a}=zt("Popconfirm"),{inlineThemeDisabled:o}=Rt(),{mergedClsPrefixRef:r,mergedThemeRef:t,props:n}=Tt(Tn),i=ae(()=>{const{common:{cubicBezierEaseInOut:l},self:{fontSize:f,iconSize:h,iconColor:v}}=t.value;return{"--n-bezier":l,"--n-font-size":f,"--n-icon-size":h,"--n-icon-color":v}}),s=o?wn("popconfirm-panel",void 0,i,n):void 0;return Object.assign(Object.assign({},zt("Popconfirm")),{mergedClsPrefix:r,cssVars:o?void 0:i,localizedPositiveText:ae(()=>e.positiveText||a.value.positiveText),localizedNegativeText:ae(()=>e.negativeText||a.value.negativeText),positiveButtonProps:Q(n,"positiveButtonProps"),negativeButtonProps:Q(n,"negativeButtonProps"),handlePositiveClick(l){e.onPositiveClick(l)},handleNegativeClick(l){e.onNegativeClick(l)},themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender})},render(){var e;const{mergedClsPrefix:a,showIcon:o,$slots:r}=this,t=Nt(r.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&z(K,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&z(K,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),z("div",{class:[`${a}-popconfirm__panel`,this.themeClass],style:this.cssVars},wt(r.default,n=>o||n?z("div",{class:`${a}-popconfirm__body`},o?z("div",{class:`${a}-popconfirm__icon`},Nt(r.icon,()=>[z(yn,{clsPrefix:a},{default:()=>z(cr,null)})])):null,n):null),t?z("div",{class:[`${a}-popconfirm__action`]},t):null)}}),sa=C("popconfirm",[H("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[H("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),H("action",`
 display: flex;
 justify-content: flex-end;
 `,[q("&:not(:first-child)","margin-top: 8px"),C("button",[q("&:not(:last-child)","margin-right: 8px;")])])]),la=Object.assign(Object.assign(Object.assign({},qe.props),Mr),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),ua=ue({name:"Popconfirm",props:la,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:a}=Rt(),o=qe("Popconfirm","-popconfirm",sa,hr,e,a),r=j(null);function t(s){var l;if(!(!((l=r.value)===null||l===void 0)&&l.getMergedShow()))return;const{onPositiveClick:f,"onUpdate:show":h}=e;Promise.resolve(f?f(s):!0).then(v=>{var m;v!==!1&&((m=r.value)===null||m===void 0||m.setShow(!1),h&&ve(h,!1))})}function n(s){var l;if(!(!((l=r.value)===null||l===void 0)&&l.getMergedShow()))return;const{onNegativeClick:f,"onUpdate:show":h}=e;Promise.resolve(f?f(s):!0).then(v=>{var m;v!==!1&&((m=r.value)===null||m===void 0||m.setShow(!1),h&&ve(h,!1))})}return xn(Tn,{mergedThemeRef:o,mergedClsPrefixRef:a,props:e}),{setShow(s){var l;(l=r.value)===null||l===void 0||l.setShow(s)},syncPosition(){var s;(s=r.value)===null||s===void 0||s.syncPosition()},mergedTheme:o,popoverInstRef:r,handlePositiveClick:t,handleNegativeClick:n}},render(){const{$slots:e,$props:a,mergedTheme:o}=this;return z(zr,Object.assign({},Cn(a,Dt),{theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.trigger,default:()=>{const r=gr(a,Dt);return z(ia,Object.assign({},r,{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}}),Et=mn("n-tabs"),En={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Me=ue({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:En,slots:Object,setup(e){const a=Tt(Et,null);return a||pr("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return z("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),da=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Cn(En,["displayDirective"])),Pt=ue({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:da,setup(e){const{mergedClsPrefixRef:a,valueRef:o,typeRef:r,closableRef:t,tabStyleRef:n,addTabStyleRef:i,tabClassRef:s,addTabClassRef:l,tabChangeIdRef:f,onBeforeLeaveRef:h,triggerRef:v,handleAdd:m,activateTab:y,handleClose:x}=Tt(Et);return{trigger:v,mergedClosable:ae(()=>{if(e.internalAddable)return!1;const{closable:R}=e;return R===void 0?t.value:R}),style:n,addStyle:i,tabClass:s,addTabClass:l,clsPrefix:a,value:o,type:r,handleClose(R){R.stopPropagation(),!e.disabled&&x(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:R}=e,D=++f.id;if(R!==o.value){const{value:P}=h;P?Promise.resolve(P(e.name,o.value)).then(B=>{B&&f.id===D&&y(R)}):y(R)}}}},render(){const{internalAddable:e,clsPrefix:a,name:o,disabled:r,label:t,tab:n,value:i,mergedClosable:s,trigger:l,$slots:{default:f}}=this,h=t??n;return z("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?z("div",{class:`${a}-tabs-tab-pad`}):null,z("div",Object.assign({key:o,"data-name":o,"data-disabled":r?!0:void 0},br({class:[`${a}-tabs-tab`,i===o&&`${a}-tabs-tab--active`,r&&`${a}-tabs-tab--disabled`,s&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l==="click"?this.activateTab:void 0,onMouseenter:l==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),z("span",{class:`${a}-tabs-tab__label`},e?z(je,null,z("div",{class:`${a}-tabs-tab__height-placeholder`}," "),z(yn,{clsPrefix:a},{default:()=>z(Ir,null)})):f?f():typeof h=="object"?h:vr(h??o)),s&&this.type==="card"?z(mr,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),ca=C("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[U("segment-type",[C("tabs-rail",[q("&.transition-disabled",[C("tabs-capsule",`
 transition: none;
 `)])])]),U("top",[C("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),U("left",[C("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),U("left, right",`
 flex-direction: row;
 `,[C("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),C("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),U("right",`
 flex-direction: row-reverse;
 `,[C("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),C("tabs-bar",`
 left: 0;
 `)]),U("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[C("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),C("tabs-bar",`
 top: 0;
 `)]),C("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[C("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),C("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[C("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[U("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),q("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),U("flex",[C("tabs-nav",`
 width: 100%;
 position: relative;
 `,[C("tabs-wrapper",`
 width: 100%;
 `,[C("tabs-tab",`
 margin-right: 0;
 `)])])]),C("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[H("prefix, suffix",`
 display: flex;
 align-items: center;
 `),H("prefix","padding-right: 16px;"),H("suffix","padding-left: 16px;")]),U("top, bottom",[q(">",[C("tabs-nav",[C("tabs-nav-scroll-wrapper",[q("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),q("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),U("shadow-start",[q("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),U("shadow-end",[q("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),U("left, right",[C("tabs-nav-scroll-content",`
 flex-direction: column;
 `),q(">",[C("tabs-nav",[C("tabs-nav-scroll-wrapper",[q("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),q("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),U("shadow-start",[q("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),U("shadow-end",[q("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),C("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[C("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[q("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),q("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),C("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),C("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),C("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),C("tabs-tab",`
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
 `,[U("disabled",{cursor:"not-allowed"}),H("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),H("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),C("tabs-bar",`
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
 `,[q("&.transition-disabled",`
 transition: none;
 `),U("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),C("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),C("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[q("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),q("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),q("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),q("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),q("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),C("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),U("line-type, bar-type",[C("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[q("&:hover",{color:"var(--n-tab-text-color-hover)"}),U("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),U("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),C("tabs-nav",[U("line-type",[U("top",[H("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),C("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),C("tabs-bar",`
 bottom: -1px;
 `)]),U("left",[H("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),C("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),C("tabs-bar",`
 right: -1px;
 `)]),U("right",[H("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),C("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),C("tabs-bar",`
 left: -1px;
 `)]),U("bottom",[H("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),C("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),C("tabs-bar",`
 top: -1px;
 `)]),H("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-bar",`
 border-radius: 0;
 `)]),U("card-type",[H("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-tab",`
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
 `,[U("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[H("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),yr("disabled",[q("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),U("closable","padding-right: 8px;"),U("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),U("disabled","color: var(--n-tab-text-color-disabled);")])]),U("left, right",`
 flex-direction: column; 
 `,[H("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),C("tabs-wrapper",`
 flex-direction: column;
 `),C("tabs-tab-wrapper",`
 flex-direction: column;
 `,[C("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),U("top",[U("card-type",[C("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),C("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-bottom: 1px solid #0000;
 `)]),C("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),C("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),U("left",[U("card-type",[C("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),C("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-right: 1px solid #0000;
 `)]),C("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),C("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),U("right",[U("card-type",[C("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),C("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-left: 1px solid #0000;
 `)]),C("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),C("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),U("bottom",[U("card-type",[C("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),C("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-top: 1px solid #0000;
 `)]),C("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),C("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Ye=oa,fa=Object.assign(Object.assign({},qe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ga=ue({name:"Tabs",props:fa,slots:Object,setup(e,{slots:a}){var o,r,t,n;const{mergedClsPrefixRef:i,inlineThemeDisabled:s,mergedComponentPropsRef:l}=Rt(e),f=qe("Tabs","-tabs",ca,Cr,e,i),h=j(null),v=j(null),m=j(null),y=j(null),x=j(null),R=j(null),D=j(!0),P=j(!0),B=_t(e,["labelSize","size"]),N=ae(()=>{var p,b;if(B.value)return B.value;const I=(b=(p=l==null?void 0:l.value)===null||p===void 0?void 0:p.Tabs)===null||b===void 0?void 0:b.size;return I||"medium"}),S=_t(e,["activeName","value"]),k=j((r=(o=S.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&r!==void 0?r:a.default?(n=(t=Ve(a.default())[0])===null||t===void 0?void 0:t.props)===null||n===void 0?void 0:n.name:null),g=kr(S,k),d={id:0},u=ae(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});$e(g,()=>{d.id=0,A(),$()});function c(){var p;const{value:b}=g;return b===null?null:(p=h.value)===null||p===void 0?void 0:p.querySelector(`[data-name="${b}"]`)}function T(p){if(e.type==="card")return;const{value:b}=v;if(!b)return;const I=b.style.opacity==="0";if(p){const F=`${i.value}-tabs-bar--disabled`,{barWidth:O,placement:X}=e;if(p.dataset.disabled==="true"?b.classList.add(F):b.classList.remove(F),["top","bottom"].includes(X)){if(_(["top","maxHeight","height"]),typeof O=="number"&&p.offsetWidth>=O){const Z=Math.floor((p.offsetWidth-O)/2)+p.offsetLeft;b.style.left=`${Z}px`,b.style.maxWidth=`${O}px`}else b.style.left=`${p.offsetLeft}px`,b.style.maxWidth=`${p.offsetWidth}px`;b.style.width="8192px",I&&(b.style.transition="none"),b.offsetWidth,I&&(b.style.transition="",b.style.opacity="1")}else{if(_(["left","maxWidth","width"]),typeof O=="number"&&p.offsetHeight>=O){const Z=Math.floor((p.offsetHeight-O)/2)+p.offsetTop;b.style.top=`${Z}px`,b.style.maxHeight=`${O}px`}else b.style.top=`${p.offsetTop}px`,b.style.maxHeight=`${p.offsetHeight}px`;b.style.height="8192px",I&&(b.style.transition="none"),b.offsetHeight,I&&(b.style.transition="",b.style.opacity="1")}}}function E(){if(e.type==="card")return;const{value:p}=v;p&&(p.style.opacity="0")}function _(p){const{value:b}=v;if(b)for(const I of p)b.style[I]=""}function A(){if(e.type==="card")return;const p=c();p?T(p):E()}function $(){var p;const b=(p=x.value)===null||p===void 0?void 0:p.$el;if(!b)return;const I=c();if(!I)return;const{scrollLeft:F,offsetWidth:O}=b,{offsetLeft:X,offsetWidth:Z}=I;F>X?b.scrollTo({top:0,left:X,behavior:"smooth"}):X+Z>F+O&&b.scrollTo({top:0,left:X+Z-O,behavior:"smooth"})}const Y=j(null);let oe=0,te=null;function Ne(p){const b=Y.value;if(b){oe=p.getBoundingClientRect().height;const I=`${oe}px`,F=()=>{b.style.height=I,b.style.maxHeight=I};te?(F(),te(),te=null):te=F}}function Oe(p){const b=Y.value;if(b){const I=p.getBoundingClientRect().height,F=()=>{document.body.offsetHeight,b.style.maxHeight=`${I}px`,b.style.height=`${Math.max(oe,I)}px`};te?(te(),te=null,F()):te=F}}function Ce(){const p=Y.value;if(p){p.style.maxHeight="",p.style.height="";const{paneWrapperStyle:b}=e;if(typeof b=="string")p.style.cssText=b;else if(b){const{maxHeight:I,height:F}=b;I!==void 0&&(p.style.maxHeight=I),F!==void 0&&(p.style.height=F)}}}const de={value:[]},xe=j("next");function Pe(p){const b=g.value;let I="next";for(const F of de.value){if(F===b)break;if(F===p){I="prev";break}}xe.value=I,He(p)}function He(p){const{onActiveNameChange:b,onUpdateValue:I,"onUpdate:value":F}=e;b&&ve(b,p),I&&ve(I,p),F&&ve(F,p),k.value=p}function Re(p){const{onClose:b}=e;b&&ve(b,p)}function Te(){const{value:p}=v;if(!p)return;const b="transition-disabled";p.classList.add(b),A(),p.classList.remove(b)}const W=j(null);function G({transitionDisabled:p}){const b=h.value;if(!b)return;p&&b.classList.add("transition-disabled");const I=c();I&&W.value&&(W.value.style.width=`${I.offsetWidth}px`,W.value.style.height=`${I.offsetHeight}px`,W.value.style.transform=`translateX(${I.offsetLeft-xr(getComputedStyle(b).paddingLeft)}px)`,p&&W.value.offsetWidth),p&&b.classList.remove("transition-disabled")}$e([g],()=>{e.type==="segment"&&Ue(()=>{G({transitionDisabled:!1})})}),St(()=>{e.type==="segment"&&G({transitionDisabled:!0})});let ie=0;function Se(p){var b;if(p.contentRect.width===0&&p.contentRect.height===0||ie===p.contentRect.width)return;ie=p.contentRect.width;const{type:I}=e;if((I==="line"||I==="bar")&&Te(),I!=="segment"){const{placement:F}=e;We((F==="top"||F==="bottom"?(b=x.value)===null||b===void 0?void 0:b.$el:R.value)||null)}}const In=Ye(Se,64);$e([()=>e.justifyContent,()=>e.size],()=>{Ue(()=>{const{type:p}=e;(p==="line"||p==="bar")&&Te()})});const ge=j(!1);function _n(p){var b;const{target:I,contentRect:{width:F,height:O}}=p,X=I.parentElement.parentElement.offsetWidth,Z=I.parentElement.parentElement.offsetHeight,{placement:pe}=e;if(!ge.value)pe==="top"||pe==="bottom"?X<F&&(ge.value=!0):Z<O&&(ge.value=!0);else{const{value:Ee}=y;if(!Ee)return;pe==="top"||pe==="bottom"?X-F>Ee.$el.offsetWidth&&(ge.value=!1):Z-O>Ee.$el.offsetHeight&&(ge.value=!1)}We(((b=x.value)===null||b===void 0?void 0:b.$el)||null)}const zn=Ye(_n,64);function Mn(){const{onAdd:p}=e;p&&p(),Ue(()=>{const b=c(),{value:I}=x;!b||!I||I.scrollTo({left:b.offsetLeft,top:0,behavior:"smooth"})})}function We(p){if(!p)return;const{placement:b}=e;if(b==="top"||b==="bottom"){const{scrollLeft:I,scrollWidth:F,offsetWidth:O}=p;D.value=I<=0,P.value=I+O>=F}else{const{scrollTop:I,scrollHeight:F,offsetHeight:O}=p;D.value=I<=0,P.value=I+O>=F}}const Ln=Ye(p=>{We(p.target)},64);xn(Et,{triggerRef:Q(e,"trigger"),tabStyleRef:Q(e,"tabStyle"),tabClassRef:Q(e,"tabClass"),addTabStyleRef:Q(e,"addTabStyle"),addTabClassRef:Q(e,"addTabClass"),paneClassRef:Q(e,"paneClass"),paneStyleRef:Q(e,"paneStyle"),mergedClsPrefixRef:i,typeRef:Q(e,"type"),closableRef:Q(e,"closable"),valueRef:g,tabChangeIdRef:d,onBeforeLeaveRef:Q(e,"onBeforeLeave"),activateTab:Pe,handleClose:Re,handleAdd:Mn}),Lr(()=>{A(),$()}),wr(()=>{const{value:p}=m;if(!p)return;const{value:b}=i,I=`${b}-tabs-nav-scroll-wrapper--shadow-start`,F=`${b}-tabs-nav-scroll-wrapper--shadow-end`;D.value?p.classList.remove(I):p.classList.add(I),P.value?p.classList.remove(F):p.classList.add(F)});const $n={syncBarPosition:()=>{A()}},Un=()=>{G({transitionDisabled:!0})},At=ae(()=>{const{value:p}=N,{type:b}=e,I={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[b],F=`${p}${I}`,{self:{barColor:O,closeIconColor:X,closeIconColorHover:Z,closeIconColorPressed:pe,tabColor:Ee,tabBorderColor:Dn,paneTextColor:Fn,tabFontWeight:jn,tabBorderRadius:qn,tabFontWeightActive:On,colorSegment:Hn,fontWeightStrong:Wn,tabColorSegment:Vn,closeSize:Kn,closeIconSize:Jn,closeColorHover:Yn,closeColorPressed:Gn,closeBorderRadius:Qn,[ne("panePadding",p)]:ke,[ne("tabPadding",F)]:Xn,[ne("tabPaddingVertical",F)]:Zn,[ne("tabGap",F)]:er,[ne("tabGap",`${F}Vertical`)]:tr,[ne("tabTextColor",b)]:nr,[ne("tabTextColorActive",b)]:rr,[ne("tabTextColorHover",b)]:ar,[ne("tabTextColorDisabled",b)]:or,[ne("tabFontSize",p)]:ir},common:{cubicBezierEaseInOut:sr}}=f.value;return{"--n-bezier":sr,"--n-color-segment":Hn,"--n-bar-color":O,"--n-tab-font-size":ir,"--n-tab-text-color":nr,"--n-tab-text-color-active":rr,"--n-tab-text-color-disabled":or,"--n-tab-text-color-hover":ar,"--n-pane-text-color":Fn,"--n-tab-border-color":Dn,"--n-tab-border-radius":qn,"--n-close-size":Kn,"--n-close-icon-size":Jn,"--n-close-color-hover":Yn,"--n-close-color-pressed":Gn,"--n-close-border-radius":Qn,"--n-close-icon-color":X,"--n-close-icon-color-hover":Z,"--n-close-icon-color-pressed":pe,"--n-tab-color":Ee,"--n-tab-font-weight":jn,"--n-tab-font-weight-active":On,"--n-tab-padding":Xn,"--n-tab-padding-vertical":Zn,"--n-tab-gap":er,"--n-tab-gap-vertical":tr,"--n-pane-padding-left":Ie(ke,"left"),"--n-pane-padding-right":Ie(ke,"right"),"--n-pane-padding-top":Ie(ke,"top"),"--n-pane-padding-bottom":Ie(ke,"bottom"),"--n-font-weight-strong":Wn,"--n-tab-color-segment":Vn}}),he=s?wn("tabs",ae(()=>`${N.value[0]}${e.type[0]}`),At,e):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:g,renderedNames:new Set,segmentCapsuleElRef:W,tabsPaneWrapperRef:Y,tabsElRef:h,barElRef:v,addTabInstRef:y,xScrollInstRef:x,scrollWrapperElRef:m,addTabFixed:ge,tabWrapperStyle:u,handleNavResize:In,mergedSize:N,handleScroll:Ln,handleTabsResize:zn,cssVars:s?void 0:At,themeClass:he==null?void 0:he.themeClass,animationDirection:xe,renderNameListRef:de,yScrollElRef:R,handleSegmentResize:Un,onAnimationBeforeLeave:Ne,onAnimationEnter:Oe,onAnimationAfterEnter:Ce,onRender:he==null?void 0:he.onRender},$n)},render(){const{mergedClsPrefix:e,type:a,placement:o,addTabFixed:r,addable:t,mergedSize:n,renderNameListRef:i,onRender:s,paneWrapperClass:l,paneWrapperStyle:f,$slots:{default:h,prefix:v,suffix:m}}=this;s==null||s();const y=h?Ve(h()).filter(k=>k.type.__TAB_PANE__===!0):[],x=h?Ve(h()).filter(k=>k.type.__TAB__===!0):[],R=!x.length,D=a==="card",P=a==="segment",B=!D&&!P&&this.justifyContent;i.value=[];const N=()=>{const k=z("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},B?null:z("div",{class:`${e}-tabs-scroll-padding`,style:o==="top"||o==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),R?y.map((g,d)=>(i.value.push(g.props.name),Ge(z(Pt,Object.assign({},g.props,{internalCreatedByPane:!0,internalLeftPadded:d!==0&&(!B||B==="center"||B==="start"||B==="end")}),g.children?{default:g.children.tab}:void 0)))):x.map((g,d)=>(i.value.push(g.props.name),Ge(d!==0&&!B?qt(g):g))),!r&&t&&D?jt(t,(R?y.length:x.length)!==0):null,B?null:z("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return z("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},D&&t?z(Ke,{onResize:this.handleTabsResize},{default:()=>k}):k,D?z("div",{class:`${e}-tabs-pad`}):null,D?null:z("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},S=P?"top":o;return z("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${n}-size`,B&&`${e}-tabs--flex`,`${e}-tabs--${S}`],style:this.cssVars},z("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav--${S}`,`${e}-tabs-nav`]},wt(v,k=>k&&z("div",{class:`${e}-tabs-nav__prefix`},k)),P?z(Ke,{onResize:this.handleSegmentResize},{default:()=>z("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},z("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},z("div",{class:`${e}-tabs-wrapper`},z("div",{class:`${e}-tabs-tab`}))),R?y.map((k,g)=>(i.value.push(k.props.name),z(Pt,Object.assign({},k.props,{internalCreatedByPane:!0,internalLeftPadded:g!==0}),k.children?{default:k.children.tab}:void 0))):x.map((k,g)=>(i.value.push(k.props.name),g===0?k:qt(k))))}):z(Ke,{onResize:this.handleNavResize},{default:()=>z("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(S)?z(Wr,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:N}):z("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},N()))}),r&&t&&D?jt(t,!0):null,wt(m,k=>k&&z("div",{class:`${e}-tabs-nav__suffix`},k))),R&&(this.animated&&(S==="top"||S==="bottom")?z("div",{ref:"tabsPaneWrapperRef",style:f,class:[`${e}-tabs-pane-wrapper`,l]},Ft(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ft(y,this.mergedValue,this.renderedNames)))}});function Ft(e,a,o,r,t,n,i){const s=[];return e.forEach(l=>{const{name:f,displayDirective:h,"display-directive":v}=l.props,m=x=>h===x||v===x,y=a===f;if(l.key!==void 0&&(l.key=f),y||m("show")||m("show:lazy")&&o.has(f)){o.has(f)||o.add(f);const x=!m("if");s.push(x?Pr(l,[[Sr,y]]):l)}}),i?z(Rr,{name:`${i}-transition`,onBeforeLeave:r,onEnter:t,onAfterEnter:n},{default:()=>s}):s}function jt(e,a){return z(Pt,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function qt(e){const a=Tr(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function Ge(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}function ha(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var be={},Qe,Ot;function pa(){return Ot||(Ot=1,Qe=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Qe}var Xe={},le={},Ht;function ce(){if(Ht)return le;Ht=1;let e;const a=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return le.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},le.getSymbolTotalCodewords=function(r){return a[r]},le.getBCHDigit=function(o){let r=0;for(;o!==0;)r++,o>>>=1;return r},le.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');e=r},le.isKanjiModeEnabled=function(){return typeof e<"u"},le.toSJIS=function(r){return e(r)},le}var Ze={},Wt;function Bt(){return Wt||(Wt=1,(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function a(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+o)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,t){if(e.isValid(r))return r;try{return a(r)}catch{return t}}})(Ze)),Ze}var et,Vt;function ba(){if(Vt)return et;Vt=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(a){const o=Math.floor(a/8);return(this.buffer[o]>>>7-a%8&1)===1},put:function(a,o){for(let r=0;r<o;r++)this.putBit((a>>>o-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(a){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),a&&(this.buffer[o]|=128>>>this.length%8),this.length++}},et=e,et}var tt,Kt;function va(){if(Kt)return tt;Kt=1;function e(a){if(!a||a<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=a,this.data=new Uint8Array(a*a),this.reservedBit=new Uint8Array(a*a)}return e.prototype.set=function(a,o,r,t){const n=a*this.size+o;this.data[n]=r,t&&(this.reservedBit[n]=!0)},e.prototype.get=function(a,o){return this.data[a*this.size+o]},e.prototype.xor=function(a,o,r){this.data[a*this.size+o]^=r},e.prototype.isReserved=function(a,o){return this.reservedBit[a*this.size+o]},tt=e,tt}var nt={},Jt;function ma(){return Jt||(Jt=1,(function(e){const a=ce().getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const t=Math.floor(r/7)+2,n=a(r),i=n===145?26:Math.ceil((n-13)/(2*t-2))*2,s=[n-7];for(let l=1;l<t-1;l++)s[l]=s[l-1]-i;return s.push(6),s.reverse()},e.getPositions=function(r){const t=[],n=e.getRowColCoords(r),i=n.length;for(let s=0;s<i;s++)for(let l=0;l<i;l++)s===0&&l===0||s===0&&l===i-1||s===i-1&&l===0||t.push([n[s],n[l]]);return t}})(nt)),nt}var rt={},Yt;function ya(){if(Yt)return rt;Yt=1;const e=ce().getSymbolSize,a=7;return rt.getPositions=function(r){const t=e(r);return[[0,0],[t-a,0],[0,t-a]]},rt}var at={},Gt;function wa(){return Gt||(Gt=1,(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const a={N1:3,N2:3,N3:40,N4:10};e.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const n=t.size;let i=0,s=0,l=0,f=null,h=null;for(let v=0;v<n;v++){s=l=0,f=h=null;for(let m=0;m<n;m++){let y=t.get(v,m);y===f?s++:(s>=5&&(i+=a.N1+(s-5)),f=y,s=1),y=t.get(m,v),y===h?l++:(l>=5&&(i+=a.N1+(l-5)),h=y,l=1)}s>=5&&(i+=a.N1+(s-5)),l>=5&&(i+=a.N1+(l-5))}return i},e.getPenaltyN2=function(t){const n=t.size;let i=0;for(let s=0;s<n-1;s++)for(let l=0;l<n-1;l++){const f=t.get(s,l)+t.get(s,l+1)+t.get(s+1,l)+t.get(s+1,l+1);(f===4||f===0)&&i++}return i*a.N2},e.getPenaltyN3=function(t){const n=t.size;let i=0,s=0,l=0;for(let f=0;f<n;f++){s=l=0;for(let h=0;h<n;h++)s=s<<1&2047|t.get(f,h),h>=10&&(s===1488||s===93)&&i++,l=l<<1&2047|t.get(h,f),h>=10&&(l===1488||l===93)&&i++}return i*a.N3},e.getPenaltyN4=function(t){let n=0;const i=t.data.length;for(let l=0;l<i;l++)n+=t.data[l];return Math.abs(Math.ceil(n*100/i/5)-10)*a.N4};function o(r,t,n){switch(r){case e.Patterns.PATTERN000:return(t+n)%2===0;case e.Patterns.PATTERN001:return t%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(t+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return t*n%2+t*n%3===0;case e.Patterns.PATTERN110:return(t*n%2+t*n%3)%2===0;case e.Patterns.PATTERN111:return(t*n%3+(t+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(t,n){const i=n.size;for(let s=0;s<i;s++)for(let l=0;l<i;l++)n.isReserved(l,s)||n.xor(l,s,o(t,l,s))},e.getBestMask=function(t,n){const i=Object.keys(e.Patterns).length;let s=0,l=1/0;for(let f=0;f<i;f++){n(f),e.applyMask(f,t);const h=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(f,t),h<l&&(l=h,s=f)}return s}})(at)),at}var Le={},Qt;function Bn(){if(Qt)return Le;Qt=1;const e=Bt(),a=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Le.getBlocksCount=function(t,n){switch(n){case e.L:return a[(t-1)*4+0];case e.M:return a[(t-1)*4+1];case e.Q:return a[(t-1)*4+2];case e.H:return a[(t-1)*4+3];default:return}},Le.getTotalCodewordsCount=function(t,n){switch(n){case e.L:return o[(t-1)*4+0];case e.M:return o[(t-1)*4+1];case e.Q:return o[(t-1)*4+2];case e.H:return o[(t-1)*4+3];default:return}},Le}var ot={},Be={},Xt;function Ca(){if(Xt)return Be;Xt=1;const e=new Uint8Array(512),a=new Uint8Array(256);return(function(){let r=1;for(let t=0;t<255;t++)e[t]=r,a[r]=t,r<<=1,r&256&&(r^=285);for(let t=255;t<512;t++)e[t]=e[t-255]})(),Be.log=function(r){if(r<1)throw new Error("log("+r+")");return a[r]},Be.exp=function(r){return e[r]},Be.mul=function(r,t){return r===0||t===0?0:e[a[r]+a[t]]},Be}var Zt;function xa(){return Zt||(Zt=1,(function(e){const a=Ca();e.mul=function(r,t){const n=new Uint8Array(r.length+t.length-1);for(let i=0;i<r.length;i++)for(let s=0;s<t.length;s++)n[i+s]^=a.mul(r[i],t[s]);return n},e.mod=function(r,t){let n=new Uint8Array(r);for(;n.length-t.length>=0;){const i=n[0];for(let l=0;l<t.length;l++)n[l]^=a.mul(t[l],i);let s=0;for(;s<n.length&&n[s]===0;)s++;n=n.slice(s)}return n},e.generateECPolynomial=function(r){let t=new Uint8Array([1]);for(let n=0;n<r;n++)t=e.mul(t,new Uint8Array([1,a.exp(n)]));return t}})(ot)),ot}var it,en;function Pa(){if(en)return it;en=1;const e=xa();function a(o){this.genPoly=void 0,this.degree=o,this.degree&&this.initialize(this.degree)}return a.prototype.initialize=function(r){this.degree=r,this.genPoly=e.generateECPolynomial(this.degree)},a.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(r.length+this.degree);t.set(r);const n=e.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(n,i),s}return n},it=a,it}var st={},lt={},ut={},tn;function An(){return tn||(tn=1,ut.isValid=function(a){return!isNaN(a)&&a>=1&&a<=40}),ut}var re={},nn;function Nn(){if(nn)return re;nn=1;const e="[0-9]+",a="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+`)(?:.|[\r
]))+`;re.KANJI=new RegExp(o,"g"),re.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),re.BYTE=new RegExp(r,"g"),re.NUMERIC=new RegExp(e,"g"),re.ALPHANUMERIC=new RegExp(a,"g");const t=new RegExp("^"+o+"$"),n=new RegExp("^"+e+"$"),i=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return re.testKanji=function(l){return t.test(l)},re.testNumeric=function(l){return n.test(l)},re.testAlphanumeric=function(l){return i.test(l)},re}var rn;function fe(){return rn||(rn=1,(function(e){const a=An(),o=Nn();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,i){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!a.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?n.ccBits[0]:i<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return o.testNumeric(n)?e.NUMERIC:o.testAlphanumeric(n)?e.ALPHANUMERIC:o.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.from=function(n,i){if(e.isValid(n))return n;try{return r(n)}catch{return i}}})(lt)),lt}var an;function Ra(){return an||(an=1,(function(e){const a=ce(),o=Bn(),r=Bt(),t=fe(),n=An(),i=7973,s=a.getBCHDigit(i);function l(m,y,x){for(let R=1;R<=40;R++)if(y<=e.getCapacity(R,x,m))return R}function f(m,y){return t.getCharCountIndicator(m,y)+4}function h(m,y){let x=0;return m.forEach(function(R){const D=f(R.mode,y);x+=D+R.getBitsLength()}),x}function v(m,y){for(let x=1;x<=40;x++)if(h(m,x)<=e.getCapacity(x,y,t.MIXED))return x}e.from=function(y,x){return n.isValid(y)?parseInt(y,10):x},e.getCapacity=function(y,x,R){if(!n.isValid(y))throw new Error("Invalid QR Code version");typeof R>"u"&&(R=t.BYTE);const D=a.getSymbolTotalCodewords(y),P=o.getTotalCodewordsCount(y,x),B=(D-P)*8;if(R===t.MIXED)return B;const N=B-f(R,y);switch(R){case t.NUMERIC:return Math.floor(N/10*3);case t.ALPHANUMERIC:return Math.floor(N/11*2);case t.KANJI:return Math.floor(N/13);case t.BYTE:default:return Math.floor(N/8)}},e.getBestVersionForData=function(y,x){let R;const D=r.from(x,r.M);if(Array.isArray(y)){if(y.length>1)return v(y,D);if(y.length===0)return 1;R=y[0]}else R=y;return l(R.mode,R.getLength(),D)},e.getEncodedBits=function(y){if(!n.isValid(y)||y<7)throw new Error("Invalid QR Code version");let x=y<<12;for(;a.getBCHDigit(x)-s>=0;)x^=i<<a.getBCHDigit(x)-s;return y<<12|x}})(st)),st}var dt={},on;function Ta(){if(on)return dt;on=1;const e=ce(),a=1335,o=21522,r=e.getBCHDigit(a);return dt.getEncodedBits=function(n,i){const s=n.bit<<3|i;let l=s<<10;for(;e.getBCHDigit(l)-r>=0;)l^=a<<e.getBCHDigit(l)-r;return(s<<10|l)^o},dt}var ct={},ft,sn;function Sa(){if(sn)return ft;sn=1;const e=fe();function a(o){this.mode=e.NUMERIC,this.data=o.toString()}return a.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(r){let t,n,i;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),i=parseInt(n,10),r.put(i,10);const s=this.data.length-t;s>0&&(n=this.data.substr(t),i=parseInt(n,10),r.put(i,s*3+1))},ft=a,ft}var gt,ln;function Ea(){if(ln)return gt;ln=1;const e=fe(),a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(r){this.mode=e.ALPHANUMERIC,this.data=r}return o.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let i=a.indexOf(this.data[n])*45;i+=a.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(a.indexOf(this.data[n]),6)},gt=o,gt}var ht,un;function Ba(){if(un)return ht;un=1;const e=fe();function a(o){this.mode=e.BYTE,typeof o=="string"?this.data=new TextEncoder().encode(o):this.data=new Uint8Array(o)}return a.getBitsLength=function(r){return r*8},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(o){for(let r=0,t=this.data.length;r<t;r++)o.put(this.data[r],8)},ht=a,ht}var pt,dn;function Aa(){if(dn)return pt;dn=1;const e=fe(),a=ce();function o(r){this.mode=e.KANJI,this.data=r}return o.getBitsLength=function(t){return t*13},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(r){let t;for(t=0;t<this.data.length;t++){let n=a.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),r.put(n,13)}},pt=o,pt}var bt={exports:{}},cn;function Na(){return cn||(cn=1,(function(e){var a={single_source_shortest_paths:function(o,r,t){var n={},i={};i[r]=0;var s=a.PriorityQueue.make();s.push(r,0);for(var l,f,h,v,m,y,x,R,D;!s.empty();){l=s.pop(),f=l.value,v=l.cost,m=o[f]||{};for(h in m)m.hasOwnProperty(h)&&(y=m[h],x=v+y,R=i[h],D=typeof i[h]>"u",(D||R>x)&&(i[h]=x,s.push(h,x),n[h]=f))}if(typeof t<"u"&&typeof i[t]>"u"){var P=["Could not find a path from ",r," to ",t,"."].join("");throw new Error(P)}return n},extract_shortest_path_from_predecessor_list:function(o,r){for(var t=[],n=r;n;)t.push(n),o[n],n=o[n];return t.reverse(),t},find_path:function(o,r,t){var n=a.single_source_shortest_paths(o,r,t);return a.extract_shortest_path_from_predecessor_list(n,t)},PriorityQueue:{make:function(o){var r=a.PriorityQueue,t={},n;o=o||{};for(n in r)r.hasOwnProperty(n)&&(t[n]=r[n]);return t.queue=[],t.sorter=o.sorter||r.default_sorter,t},default_sorter:function(o,r){return o.cost-r.cost},push:function(o,r){var t={value:o,cost:r};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=a})(bt)),bt.exports}var fn;function ka(){return fn||(fn=1,(function(e){const a=fe(),o=Sa(),r=Ea(),t=Ba(),n=Aa(),i=Nn(),s=ce(),l=Na();function f(P){return unescape(encodeURIComponent(P)).length}function h(P,B,N){const S=[];let k;for(;(k=P.exec(N))!==null;)S.push({data:k[0],index:k.index,mode:B,length:k[0].length});return S}function v(P){const B=h(i.NUMERIC,a.NUMERIC,P),N=h(i.ALPHANUMERIC,a.ALPHANUMERIC,P);let S,k;return s.isKanjiModeEnabled()?(S=h(i.BYTE,a.BYTE,P),k=h(i.KANJI,a.KANJI,P)):(S=h(i.BYTE_KANJI,a.BYTE,P),k=[]),B.concat(N,S,k).sort(function(d,u){return d.index-u.index}).map(function(d){return{data:d.data,mode:d.mode,length:d.length}})}function m(P,B){switch(B){case a.NUMERIC:return o.getBitsLength(P);case a.ALPHANUMERIC:return r.getBitsLength(P);case a.KANJI:return n.getBitsLength(P);case a.BYTE:return t.getBitsLength(P)}}function y(P){return P.reduce(function(B,N){const S=B.length-1>=0?B[B.length-1]:null;return S&&S.mode===N.mode?(B[B.length-1].data+=N.data,B):(B.push(N),B)},[])}function x(P){const B=[];for(let N=0;N<P.length;N++){const S=P[N];switch(S.mode){case a.NUMERIC:B.push([S,{data:S.data,mode:a.ALPHANUMERIC,length:S.length},{data:S.data,mode:a.BYTE,length:S.length}]);break;case a.ALPHANUMERIC:B.push([S,{data:S.data,mode:a.BYTE,length:S.length}]);break;case a.KANJI:B.push([S,{data:S.data,mode:a.BYTE,length:f(S.data)}]);break;case a.BYTE:B.push([{data:S.data,mode:a.BYTE,length:f(S.data)}])}}return B}function R(P,B){const N={},S={start:{}};let k=["start"];for(let g=0;g<P.length;g++){const d=P[g],u=[];for(let c=0;c<d.length;c++){const T=d[c],E=""+g+c;u.push(E),N[E]={node:T,lastCount:0},S[E]={};for(let _=0;_<k.length;_++){const A=k[_];N[A]&&N[A].node.mode===T.mode?(S[A][E]=m(N[A].lastCount+T.length,T.mode)-m(N[A].lastCount,T.mode),N[A].lastCount+=T.length):(N[A]&&(N[A].lastCount=T.length),S[A][E]=m(T.length,T.mode)+4+a.getCharCountIndicator(T.mode,B))}}k=u}for(let g=0;g<k.length;g++)S[k[g]].end=0;return{map:S,table:N}}function D(P,B){let N;const S=a.getBestModeForData(P);if(N=a.from(B,S),N!==a.BYTE&&N.bit<S.bit)throw new Error('"'+P+'" cannot be encoded with mode '+a.toString(N)+`.
 Suggested mode is: `+a.toString(S));switch(N===a.KANJI&&!s.isKanjiModeEnabled()&&(N=a.BYTE),N){case a.NUMERIC:return new o(P);case a.ALPHANUMERIC:return new r(P);case a.KANJI:return new n(P);case a.BYTE:return new t(P)}}e.fromArray=function(B){return B.reduce(function(N,S){return typeof S=="string"?N.push(D(S,null)):S.data&&N.push(D(S.data,S.mode)),N},[])},e.fromString=function(B,N){const S=v(B,s.isKanjiModeEnabled()),k=x(S),g=R(k,N),d=l.find_path(g.map,"start","end"),u=[];for(let c=1;c<d.length-1;c++)u.push(g.table[d[c]].node);return e.fromArray(y(u))},e.rawSplit=function(B){return e.fromArray(v(B,s.isKanjiModeEnabled()))}})(ct)),ct}var gn;function Ia(){if(gn)return Xe;gn=1;const e=ce(),a=Bt(),o=ba(),r=va(),t=ma(),n=ya(),i=wa(),s=Bn(),l=Pa(),f=Ra(),h=Ta(),v=fe(),m=ka();function y(g,d){const u=g.size,c=n.getPositions(d);for(let T=0;T<c.length;T++){const E=c[T][0],_=c[T][1];for(let A=-1;A<=7;A++)if(!(E+A<=-1||u<=E+A))for(let $=-1;$<=7;$++)_+$<=-1||u<=_+$||(A>=0&&A<=6&&($===0||$===6)||$>=0&&$<=6&&(A===0||A===6)||A>=2&&A<=4&&$>=2&&$<=4?g.set(E+A,_+$,!0,!0):g.set(E+A,_+$,!1,!0))}}function x(g){const d=g.size;for(let u=8;u<d-8;u++){const c=u%2===0;g.set(u,6,c,!0),g.set(6,u,c,!0)}}function R(g,d){const u=t.getPositions(d);for(let c=0;c<u.length;c++){const T=u[c][0],E=u[c][1];for(let _=-2;_<=2;_++)for(let A=-2;A<=2;A++)_===-2||_===2||A===-2||A===2||_===0&&A===0?g.set(T+_,E+A,!0,!0):g.set(T+_,E+A,!1,!0)}}function D(g,d){const u=g.size,c=f.getEncodedBits(d);let T,E,_;for(let A=0;A<18;A++)T=Math.floor(A/3),E=A%3+u-8-3,_=(c>>A&1)===1,g.set(T,E,_,!0),g.set(E,T,_,!0)}function P(g,d,u){const c=g.size,T=h.getEncodedBits(d,u);let E,_;for(E=0;E<15;E++)_=(T>>E&1)===1,E<6?g.set(E,8,_,!0):E<8?g.set(E+1,8,_,!0):g.set(c-15+E,8,_,!0),E<8?g.set(8,c-E-1,_,!0):E<9?g.set(8,15-E-1+1,_,!0):g.set(8,15-E-1,_,!0);g.set(c-8,8,1,!0)}function B(g,d){const u=g.size;let c=-1,T=u-1,E=7,_=0;for(let A=u-1;A>0;A-=2)for(A===6&&A--;;){for(let $=0;$<2;$++)if(!g.isReserved(T,A-$)){let Y=!1;_<d.length&&(Y=(d[_]>>>E&1)===1),g.set(T,A-$,Y),E--,E===-1&&(_++,E=7)}if(T+=c,T<0||u<=T){T-=c,c=-c;break}}}function N(g,d,u){const c=new o;u.forEach(function($){c.put($.mode.bit,4),c.put($.getLength(),v.getCharCountIndicator($.mode,g)),$.write(c)});const T=e.getSymbolTotalCodewords(g),E=s.getTotalCodewordsCount(g,d),_=(T-E)*8;for(c.getLengthInBits()+4<=_&&c.put(0,4);c.getLengthInBits()%8!==0;)c.putBit(0);const A=(_-c.getLengthInBits())/8;for(let $=0;$<A;$++)c.put($%2?17:236,8);return S(c,g,d)}function S(g,d,u){const c=e.getSymbolTotalCodewords(d),T=s.getTotalCodewordsCount(d,u),E=c-T,_=s.getBlocksCount(d,u),A=c%_,$=_-A,Y=Math.floor(c/_),oe=Math.floor(E/_),te=oe+1,Ne=Y-oe,Oe=new l(Ne);let Ce=0;const de=new Array(_),xe=new Array(_);let Pe=0;const He=new Uint8Array(g.buffer);for(let ie=0;ie<_;ie++){const Se=ie<$?oe:te;de[ie]=He.slice(Ce,Ce+Se),xe[ie]=Oe.encode(de[ie]),Ce+=Se,Pe=Math.max(Pe,Se)}const Re=new Uint8Array(c);let Te=0,W,G;for(W=0;W<Pe;W++)for(G=0;G<_;G++)W<de[G].length&&(Re[Te++]=de[G][W]);for(W=0;W<Ne;W++)for(G=0;G<_;G++)Re[Te++]=xe[G][W];return Re}function k(g,d,u,c){let T;if(Array.isArray(g))T=m.fromArray(g);else if(typeof g=="string"){let Y=d;if(!Y){const oe=m.rawSplit(g);Y=f.getBestVersionForData(oe,u)}T=m.fromString(g,Y||40)}else throw new Error("Invalid data");const E=f.getBestVersionForData(T,u);if(!E)throw new Error("The amount of data is too big to be stored in a QR Code");if(!d)d=E;else if(d<E)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+E+`.
`);const _=N(d,u,T),A=e.getSymbolSize(d),$=new r(A);return y($,d),x($),R($,d),P($,u,0),d>=7&&D($,d),B($,_),isNaN(c)&&(c=i.getBestMask($,P.bind(null,$,u))),i.applyMask(c,$),P($,u,c),{modules:$,version:d,errorCorrectionLevel:u,maskPattern:c,segments:T}}return Xe.create=function(d,u){if(typeof d>"u"||d==="")throw new Error("No input text");let c=a.M,T,E;return typeof u<"u"&&(c=a.from(u.errorCorrectionLevel,a.M),T=f.from(u.version),E=i.from(u.maskPattern),u.toSJISFunc&&e.setToSJISFunction(u.toSJISFunc)),k(d,T,c,E)},Xe}var vt={},mt={},hn;function kn(){return hn||(hn=1,(function(e){function a(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let r=o.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+o);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const t=parseInt(r.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const t=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,i=r.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:a(r.color.dark||"#000000ff"),light:a(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,t){return t.width&&t.width>=r+t.margin*2?t.width/(r+t.margin*2):t.scale},e.getImageWidth=function(r,t){const n=e.getScale(r,t);return Math.floor((r+t.margin*2)*n)},e.qrToImageData=function(r,t,n){const i=t.modules.size,s=t.modules.data,l=e.getScale(i,n),f=Math.floor((i+n.margin*2)*l),h=n.margin*l,v=[n.color.light,n.color.dark];for(let m=0;m<f;m++)for(let y=0;y<f;y++){let x=(m*f+y)*4,R=n.color.light;if(m>=h&&y>=h&&m<f-h&&y<f-h){const D=Math.floor((m-h)/l),P=Math.floor((y-h)/l);R=v[s[D*i+P]?1:0]}r[x++]=R.r,r[x++]=R.g,r[x++]=R.b,r[x]=R.a}}})(mt)),mt}var pn;function _a(){return pn||(pn=1,(function(e){const a=kn();function o(t,n,i){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=i,n.width=i,n.style.height=i+"px",n.style.width=i+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,i,s){let l=s,f=i;typeof l>"u"&&(!i||!i.getContext)&&(l=i,i=void 0),i||(f=r()),l=a.getOptions(l);const h=a.getImageWidth(n.modules.size,l),v=f.getContext("2d"),m=v.createImageData(h,h);return a.qrToImageData(m.data,n,l),o(v,f,h),v.putImageData(m,0,0),f},e.renderToDataURL=function(n,i,s){let l=s;typeof l>"u"&&(!i||!i.getContext)&&(l=i,i=void 0),l||(l={});const f=e.render(n,i,l),h=l.type||"image/png",v=l.rendererOpts||{};return f.toDataURL(h,v.quality)}})(vt)),vt}var yt={},bn;function za(){if(bn)return yt;bn=1;const e=kn();function a(t,n){const i=t.a/255,s=n+'="'+t.hex+'"';return i<1?s+" "+n+'-opacity="'+i.toFixed(2).slice(1)+'"':s}function o(t,n,i){let s=t+n;return typeof i<"u"&&(s+=" "+i),s}function r(t,n,i){let s="",l=0,f=!1,h=0;for(let v=0;v<t.length;v++){const m=Math.floor(v%n),y=Math.floor(v/n);!m&&!f&&(f=!0),t[v]?(h++,v>0&&m>0&&t[v-1]||(s+=f?o("M",m+i,.5+y+i):o("m",l,0),l=0,f=!1),m+1<n&&t[v+1]||(s+=o("h",h),h=0)):l++}return s}return yt.render=function(n,i,s){const l=e.getOptions(i),f=n.modules.size,h=n.modules.data,v=f+l.margin*2,m=l.color.light.a?"<path "+a(l.color.light,"fill")+' d="M0 0h'+v+"v"+v+'H0z"/>':"",y="<path "+a(l.color.dark,"stroke")+' d="'+r(h,f,l.margin)+'"/>',x='viewBox="0 0 '+v+" "+v+'"',D='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+x+' shape-rendering="crispEdges">'+m+y+`</svg>
`;return typeof s=="function"&&s(null,D),D},yt}var vn;function Ma(){if(vn)return be;vn=1;const e=pa(),a=Ia(),o=_a(),r=za();function t(n,i,s,l,f){const h=[].slice.call(arguments,1),v=h.length,m=typeof h[v-1]=="function";if(!m&&!e())throw new Error("Callback required as last argument");if(m){if(v<2)throw new Error("Too few arguments provided");v===2?(f=s,s=i,i=l=void 0):v===3&&(i.getContext&&typeof f>"u"?(f=l,l=void 0):(f=l,l=s,s=i,i=void 0))}else{if(v<1)throw new Error("Too few arguments provided");return v===1?(s=i,i=l=void 0):v===2&&!i.getContext&&(l=s,s=i,i=void 0),new Promise(function(y,x){try{const R=a.create(s,l);y(n(R,i,l))}catch(R){x(R)}})}try{const y=a.create(s,l);f(null,n(y,i,l))}catch(y){f(y)}}return be.create=a.create,be.toCanvas=t.bind(null,o.render),be.toDataURL=t.bind(null,o.renderToDataURL),be.toString=t.bind(null,function(n,i,s){return r.render(n,s)}),be}var La=Ma();const $a=ha(La),Ua=ue({__name:"ShareModal",props:{username:{}},emits:["close"],setup(e,{emit:a}){const o=e,r=a,t=Rn(),{t:n}=Pn(),i=j(null),s=j(""),l=j(null),f=j(null),h=j(null),v=j("link"),m=j(60),y=ae(()=>[{label:n("share.ttl15m"),value:15},{label:n("share.ttl1h"),value:60},{label:n("share.ttl24h"),value:1440}]),x=j(""),R=j(0),D=j(!1);async function P(d,u){if(!(!d||!u))try{await $a.toCanvas(d,u,{width:280,margin:1})}catch{}}async function B(){if(await Ue(),v.value==="link"){await P(h.value,x.value);return}i.value&&(i.value.mierusUrls.length&&await P(l.value,i.value.mierusUrls[0]),await P(f.value,i.value.mieruUrl))}St(async()=>{try{i.value=await me.get(`/api/users/${encodeURIComponent(o.username)}/share`),await B()}catch(d){s.value=d instanceof Ae?d.message:n("share.failed")}}),$e(v,B);async function N(){D.value=!0;try{const d=await me.post(`/api/users/${encodeURIComponent(o.username)}/share-token`,{ttlMinutes:m.value});x.value=d.url,R.value=d.expiresAt,await B()}catch(d){t.error(d instanceof Ae?d.message:n("share.linkFailed"))}finally{D.value=!1}}function S(){return R.value?n("share.expires",{date:new Date(R.value*1e3).toLocaleString()}):""}function k(d){navigator.clipboard.writeText(d).then(()=>t.success(n("common.copied")),()=>t.error(n("common.copyFailed")))}function g(){if(!i.value)return;const d=new Blob([i.value.clientConfigJson],{type:"application/json"}),u=document.createElement("a");u.href=URL.createObjectURL(d),u.download=`mieru-${o.username}.json`,u.click(),URL.revokeObjectURL(u.href)}return(d,u)=>(se(),we(w(Er),{show:!0,preset:"card",title:w(n)("share.title",{name:e.username}),style:{width:"480px"},onClose:u[6]||(u[6]=c=>r("close")),onMaskClick:u[7]||(u[7]=c=>r("close"))},{default:L(()=>[s.value?(se(),we(w(Ur),{key:0,type:"warning","show-icon":!1},{default:L(()=>[V(J(s.value),1)]),_:1})):(se(),we(w(ga),{key:1,value:v.value,"onUpdate:value":u[5]||(u[5]=c=>v.value=c)},{default:L(()=>[M(w(Me),{name:"link",tab:w(n)("share.linkTab")},{default:L(()=>[M(w(ee),{vertical:"",align:"center"},{default:L(()=>[M(w(Mt),{depth:"3",style:{"font-size":"12px","text-align":"center"}},{default:L(()=>[V(J(w(n)("share.linkText")),1)]),_:1}),M(w(ee),{align:"center"},{default:L(()=>[M(w($r),{value:m.value,"onUpdate:value":u[0]||(u[0]=c=>m.value=c),options:y.value,style:{width:"140px"}},null,8,["value","options"]),M(w(K),{type:"primary",loading:D.value,onClick:N},{default:L(()=>[V(J(w(n)("share.generateLink")),1)]),_:1},8,["loading"])]),_:1}),x.value?(se(),Ct(je,{key:0},[De("canvas",{ref_key:"linkCanvas",ref:h},null,512),M(w(ye),{value:x.value,readonly:""},null,8,["value"]),M(w(ee),{align:"center"},{default:L(()=>[M(w(K),{size:"small",onClick:u[1]||(u[1]=c=>k(x.value))},{default:L(()=>[V(J(w(n)("share.copyLink")),1)]),_:1}),M(w(Mt),{depth:"3",style:{"font-size":"12px"}},{default:L(()=>[V(J(S()),1)]),_:1})]),_:1})],64)):xt("",!0)]),_:1})]),_:1},8,["tab"]),M(w(Me),{name:"mierus",tab:"mierus://",disabled:!i.value},{default:L(()=>[M(w(ee),{vertical:"",align:"center"},{default:L(()=>{var c;return[De("canvas",{ref_key:"mierusCanvas",ref:l},null,512),M(w(ye),{value:(c=i.value)==null?void 0:c.mierusUrls[0],type:"textarea",readonly:"",autosize:{minRows:2,maxRows:4}},null,8,["value"]),M(w(K),{size:"small",onClick:u[2]||(u[2]=T=>k(i.value.mierusUrls[0]))},{default:L(()=>[V(J(w(n)("share.copyLink")),1)]),_:1})]}),_:1})]),_:1},8,["disabled"]),M(w(Me),{name:"mieru",tab:"mieru://",disabled:!i.value},{default:L(()=>[M(w(ee),{vertical:"",align:"center"},{default:L(()=>{var c;return[De("canvas",{ref_key:"mieruCanvas",ref:f},null,512),M(w(ye),{value:(c=i.value)==null?void 0:c.mieruUrl,type:"textarea",readonly:"",autosize:{minRows:2,maxRows:4}},null,8,["value"]),M(w(K),{size:"small",onClick:u[3]||(u[3]=T=>k(i.value.mieruUrl))},{default:L(()=>[V(J(w(n)("share.copyLink")),1)]),_:1})]}),_:1})]),_:1},8,["disabled"]),M(w(Me),{name:"json",tab:w(n)("share.configTab"),disabled:!i.value},{default:L(()=>[M(w(ee),{vertical:""},{default:L(()=>{var c;return[M(w(ye),{value:(c=i.value)==null?void 0:c.clientConfigJson,type:"textarea",readonly:"",autosize:{minRows:8,maxRows:14}},null,8,["value"]),M(w(ee),null,{default:L(()=>[M(w(K),{size:"small",onClick:u[4]||(u[4]=T=>k(i.value.clientConfigJson))},{default:L(()=>[V(J(w(n)("common.copy")),1)]),_:1}),M(w(K),{size:"small",onClick:g},{default:L(()=>[V(J(w(n)("share.downloadJson")),1)]),_:1})]),_:1})]}),_:1})]),_:1},8,["tab","disabled"])]),_:1},8,["value"]))]),_:1},8,["title"]))}}),Da=300*1e3,no=ue({__name:"UsersPage",setup(e){const a=Rn(),{t:o}=Pn(),r=j([]),t=j(!1),n=j(Date.now());let i,s;function l(d){if(!d)return o("users.neverActive");const u=Math.max(0,n.value-d),c=Math.floor(u/6e4);if(c<1)return o("users.momentsAgo");if(c<60)return o("users.minutesAgo",{n:c});const T=Math.floor(c/60);return T<24?o("users.hoursAgo",{n:T}):o("users.daysAgo",{n:Math.floor(T/24)})}const f=j(!1),h=j(null),v=j({name:"",password:"",allowPrivateIP:!1}),m=j([]),y=j(null);function x(d){if(d<1024)return`${d} B`;const u=["KiB","MiB","GiB","TiB"];let c=d,T=-1;do c/=1024,T++;while(c>=1024&&T<u.length-1);return`${c.toFixed(1)} ${u[T]}`}function R(d){var E,_;const u=Object.entries(d.metrics);if(!u.length)return"—";const c=((E=u.find(([A])=>A.toLowerCase().includes("download")))==null?void 0:E[1])??0,T=((_=u.find(([A])=>A.toLowerCase().includes("upload")))==null?void 0:_[1])??0;return`↓ ${x(c)} / ↑ ${x(T)}`}const D=ae(()=>[{title:o("users.name"),key:"name"},{title:o("users.colStatus"),key:"status",render:d=>{const u=d.lastActiveUnixMs>0&&n.value-d.lastActiveUnixMs<Da;return z(Lt,{type:u?"success":"default",size:"small",round:!0},{default:()=>u?o("users.online"):l(d.lastActiveUnixMs)})}},{title:o("users.colQuotas"),key:"quotas",render:d=>d.quotas.length?d.quotas.map(u=>z(Lt,{size:"small",style:"margin-right:4px"},{default:()=>`${u.megabytes} MB / ${u.days}d`})):"—"},{title:o("users.colTraffic"),key:"traffic",render:R},{title:o("users.colShare"),key:"share",render:d=>z(K,{size:"small",disabled:!d.hasSecret,onClick:()=>y.value=d.name},{default:()=>d.hasSecret?o("users.share"):o("users.noPassword")})},{title:o("common.actions"),key:"actions",render:d=>z(ee,null,{default:()=>[z(K,{size:"small",onClick:()=>N(d)},{default:()=>o("common.edit")}),z(ua,{onPositiveClick:()=>g(d.name)},{trigger:()=>z(K,{size:"small",type:"error",quaternary:!0},{default:()=>o("common.delete")}),default:()=>o("users.confirmDelete",{name:d.name})})]})}]);async function P(d=!1){d||(t.value=!0);try{r.value=await me.get("/api/users"),n.value=Date.now()}catch(u){d||a.error(u instanceof Ae?u.message:o("users.loadFailed"))}finally{d||(t.value=!1)}}function B(){h.value=null,v.value={name:"",password:"",allowPrivateIP:!1},m.value=[],f.value=!0}function N(d){h.value=d.name,v.value={name:d.name,password:"",allowPrivateIP:d.allowPrivateIP},m.value=d.quotas.map(u=>({...u})),f.value=!0}function S(){m.value.push({days:30,megabytes:10240})}async function k(){const d={password:v.value.password,quotas:m.value,allowPrivateIP:v.value.allowPrivateIP};try{h.value===null?(await me.post("/api/users",{name:v.value.name,...d}),a.success(o("users.created"))):(await me.put(`/api/users/${encodeURIComponent(h.value)}`,d),a.success(o("users.updated"))),f.value=!1,await P()}catch(u){a.error(u instanceof Ae?u.message:o("common.saveFailed"))}}async function g(d){try{await me.del(`/api/users/${encodeURIComponent(d)}`),a.success(o("users.deleted")),await P()}catch(u){a.error(u instanceof Ae?u.message:o("common.deleteFailed"))}}return St(()=>{P(),i=window.setInterval(()=>{!document.hidden&&!f.value&&P(!0)},1e4),s=window.setInterval(()=>n.value=Date.now(),5e3)}),Br(()=>{window.clearInterval(i),window.clearInterval(s)}),(d,u)=>(se(),Ct(je,null,[M(w(Ar),{title:w(o)("users.title")},{"header-extra":L(()=>[M(w(K),{type:"primary",onClick:B},{default:L(()=>[V(J(w(o)("users.addUser")),1)]),_:1})]),default:L(()=>[M(w(qr),{columns:D.value,data:r.value,loading:t.value,"row-key":c=>c.name},null,8,["columns","data","loading","row-key"])]),_:1},8,["title"]),M(w(Dr),{show:f.value,"onUpdate:show":u[4]||(u[4]=c=>f.value=c),width:420},{default:L(()=>[M(w(Fr),{title:h.value===null?w(o)("users.addUser"):w(o)("users.editUser",{name:h.value})},{footer:L(()=>[M(w(ee),null,{default:L(()=>[M(w(K),{onClick:u[3]||(u[3]=c=>f.value=!1)},{default:L(()=>[V(J(w(o)("common.cancel")),1)]),_:1}),M(w(K),{type:"primary",onClick:k},{default:L(()=>[V(J(w(o)("common.save")),1)]),_:1})]),_:1})]),default:L(()=>[M(w(Or),null,{default:L(()=>[h.value===null?(se(),we(w(ze),{key:0},{label:L(()=>[M(_e,{label:w(o)("users.name"),help:w(o)("users.nameHelp")},null,8,["label","help"])]),default:L(()=>[M(w(ye),{value:v.value.name,"onUpdate:value":u[0]||(u[0]=c=>v.value.name=c),placeholder:"username"},null,8,["value"])]),_:1})):xt("",!0),M(w(ze),null,{label:L(()=>[M(_e,{label:h.value===null?w(o)("users.password"):w(o)("users.passwordKeep"),help:w(o)("users.passwordHelp")},null,8,["label","help"])]),default:L(()=>[M(w(ye),{value:v.value.password,"onUpdate:value":u[1]||(u[1]=c=>v.value.password=c),type:"password","show-password-on":"click"},null,8,["value"])]),_:1}),M(w(ze),null,{label:L(()=>[M(_e,{label:w(o)("users.allowPrivate"),help:w(o)("users.allowPrivateHelp")},null,8,["label","help"])]),default:L(()=>[M(w(jr),{value:v.value.allowPrivateIP,"onUpdate:value":u[2]||(u[2]=c=>v.value.allowPrivateIP=c)},null,8,["value"])]),_:1}),M(w(ze),null,{label:L(()=>[M(_e,{label:w(o)("users.quotas"),help:w(o)("users.quotasHelp")},null,8,["label","help"])]),default:L(()=>[M(w(ee),{vertical:"",style:{width:"100%"}},{default:L(()=>[(se(!0),Ct(je,null,Nr(m.value,(c,T)=>(se(),we(w(ee),{key:T,align:"center"},{default:L(()=>[M(w(kt),{value:c.megabytes,"onUpdate:value":E=>c.megabytes=E,min:1,step:1024},{suffix:L(()=>[...u[6]||(u[6]=[V("MB",-1)])]),_:1},8,["value","onUpdate:value"]),De("span",null,J(w(o)("users.per")),1),M(w(kt),{value:c.days,"onUpdate:value":E=>c.days=E,min:1,max:365},{suffix:L(()=>[V(J(w(o)("users.days")),1)]),_:1},8,["value","onUpdate:value"]),M(w(K),{size:"tiny",quaternary:"",type:"error",onClick:E=>m.value.splice(T,1)},{default:L(()=>[...u[7]||(u[7]=[V("✕",-1)])]),_:1},8,["onClick"])]),_:2},1024))),128)),M(w(K),{size:"small",dashed:"",onClick:S},{default:L(()=>[V(J(w(o)("users.addQuota")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["show"]),y.value?(se(),we(Ua,{key:0,username:y.value,onClose:u[5]||(u[5]=c=>y.value=null)},null,8,["username"])):xt("",!0)],64))}});export{no as default};
