import{d as ue,i as N,r as j,an as sr,ao as lr,ap as Fe,aq as ur,m as vn,ar as At,B as K,as as wt,N as mn,at as dr,q as Rt,E as Tt,y as yn,G as Q,z as ae,K as cr,n as R,C as H,D as q,au as wn,O as fr,v as qe,av as gr,F as ve,A as Cn,af as hr,T as pr,M as je,J as br,aw as vr,p as U,H as mr,aj as Ve,V as Ke,a8 as $e,Y as St,Q as yr,ax as wr,ay as Cr,ab as xr,az as Pr,ak as Rr,aA as Ue,aB as ne,aC as Ie,a6 as Tr,u as xn,_ as we,b as C,aD as Sr,w as M,h as V,t as J,e as L,c as Ct,a as De,$ as xt,o as se,am as Er,al as Br}from"./index-BuNiYHKx.js";import{u as kr,a as me,A as ke}from"./_plugin-vue_export-helper-D29iSuJO.js";import{A as Ar,N as Nt}from"./InputNumber-CEdI65FE.js";import{d as Nr,e as It,f as Ir,p as _r,o as zr,u as _t,a as ee}from"./Space-B5dQOTQD.js";import{N as Lr}from"./Select-CABe5RXB.js";import{a as zt,u as Pn,N as ye}from"./use-message-DB9vTDMh.js";import{N as Mr}from"./Alert-DJOUitwH.js";import{N as Lt}from"./text-B3QF-0Fz.js";import{H as _e}from"./HelpLabel-DjQW23wh.js";import{N as $r,a as Ur}from"./DrawerContent-DsNnOxur.js";import{N as Dr}from"./Switch-DzFU4Xwj.js";import{N as Fr}from"./DataTable-D9kxHaMF.js";import{N as jr,a as ze}from"./FormItem-DXOtnScc.js";import{N as qr}from"./Tag-BPOyTqmM.js";import"./Dropdown-BYv92xLg.js";import"./ArrowDown-DQqspMvQ.js";const Or=It(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[It("&::-webkit-scrollbar",{width:0,height:0})]),Hr=ue({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=j(null);function a(t){!(t.currentTarget.offsetWidth<t.currentTarget.scrollWidth)||t.deltaY===0||(t.currentTarget.scrollLeft+=t.deltaY+t.deltaX,t.preventDefault())}const o=sr();return Or.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Nr,ssr:o}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...t){var n;(n=e.value)===null||n===void 0||n.scrollTo(...t)}})},render(){return N("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Wr=/\s/;function Vr(e){for(var a=e.length;a--&&Wr.test(e.charAt(a)););return a}var Kr=/^\s+/;function Jr(e){return e&&e.slice(0,Vr(e)+1).replace(Kr,"")}var Mt=NaN,Yr=/^[-+]0x[0-9a-f]+$/i,Gr=/^0b[01]+$/i,Qr=/^0o[0-7]+$/i,Xr=parseInt;function $t(e){if(typeof e=="number")return e;if(lr(e))return Mt;if(Fe(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=Fe(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Jr(e);var o=Gr.test(e);return o||Qr.test(e)?Xr(e.slice(2),o?2:8):Yr.test(e)?Mt:+e}var Je=function(){return ur.Date.now()},Zr="Expected a function",ea=Math.max,ta=Math.min;function na(e,a,o){var r,t,n,i,s,l,d=0,f=!1,x=!1,w=!0;if(typeof e!="function")throw new TypeError(Zr);a=$t(a)||0,Fe(o)&&(f=!!o.leading,x="maxWait"in o,n=x?ea($t(o.maxWait)||0,a):n,w="trailing"in o?!!o.trailing:w);function y(u){var p=r,v=t;return r=t=void 0,d=u,i=e.apply(v,p),i}function T(u){return d=u,s=setTimeout(S,a),f?y(u):i}function E(u){var p=u-l,v=u-d,m=a-p;return x?ta(m,n-v):m}function D(u){var p=u-l,v=u-d;return l===void 0||p>=a||p<0||x&&v>=n}function S(){var u=Je();if(D(u))return B(u);s=setTimeout(S,E(u))}function B(u){return s=void 0,w&&r?y(u):(r=t=void 0,i)}function b(){s!==void 0&&clearTimeout(s),d=0,r=l=t=s=void 0}function c(){return s===void 0?i:B(Je())}function P(){var u=Je(),p=D(u);if(r=arguments,t=this,l=u,p){if(s===void 0)return T(l);if(x)return clearTimeout(s),s=setTimeout(S,a),y(l)}return s===void 0&&(s=setTimeout(S,a)),i}return P.cancel=b,P.flush=c,P}var ra="Expected a function";function aa(e,a,o){var r=!0,t=!0;if(typeof e!="function")throw new TypeError(ra);return Fe(o)&&(r="leading"in o?!!o.leading:r,t="trailing"in o?!!o.trailing:t),na(e,a,{leading:r,maxWait:a,trailing:t})}const Rn=vn("n-popconfirm"),Tn={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},Ut=cr(Tn),oa=ue({name:"NPopconfirmPanel",props:Tn,setup(e){const{localeRef:a}=zt("Popconfirm"),{inlineThemeDisabled:o}=Rt(),{mergedClsPrefixRef:r,mergedThemeRef:t,props:n}=Tt(Rn),i=ae(()=>{const{common:{cubicBezierEaseInOut:l},self:{fontSize:d,iconSize:f,iconColor:x}}=t.value;return{"--n-bezier":l,"--n-font-size":d,"--n-icon-size":f,"--n-icon-color":x}}),s=o?yn("popconfirm-panel",void 0,i,n):void 0;return Object.assign(Object.assign({},zt("Popconfirm")),{mergedClsPrefix:r,cssVars:o?void 0:i,localizedPositiveText:ae(()=>e.positiveText||a.value.positiveText),localizedNegativeText:ae(()=>e.negativeText||a.value.negativeText),positiveButtonProps:Q(n,"positiveButtonProps"),negativeButtonProps:Q(n,"negativeButtonProps"),handlePositiveClick(l){e.onPositiveClick(l)},handleNegativeClick(l){e.onNegativeClick(l)},themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender})},render(){var e;const{mergedClsPrefix:a,showIcon:o,$slots:r}=this,t=At(r.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&N(K,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&N(K,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),N("div",{class:[`${a}-popconfirm__panel`,this.themeClass],style:this.cssVars},wt(r.default,n=>o||n?N("div",{class:`${a}-popconfirm__body`},o?N("div",{class:`${a}-popconfirm__icon`},At(r.icon,()=>[N(mn,{clsPrefix:a},{default:()=>N(dr,null)})])):null,n):null),t?N("div",{class:[`${a}-popconfirm__action`]},t):null)}}),ia=R("popconfirm",[H("body",`
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
 `,[q("&:not(:first-child)","margin-top: 8px"),R("button",[q("&:not(:last-child)","margin-right: 8px;")])])]),sa=Object.assign(Object.assign(Object.assign({},qe.props),_r),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),la=ue({name:"Popconfirm",props:sa,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:a}=Rt(),o=qe("Popconfirm","-popconfirm",ia,gr,e,a),r=j(null);function t(s){var l;if(!(!((l=r.value)===null||l===void 0)&&l.getMergedShow()))return;const{onPositiveClick:d,"onUpdate:show":f}=e;Promise.resolve(d?d(s):!0).then(x=>{var w;x!==!1&&((w=r.value)===null||w===void 0||w.setShow(!1),f&&ve(f,!1))})}function n(s){var l;if(!(!((l=r.value)===null||l===void 0)&&l.getMergedShow()))return;const{onNegativeClick:d,"onUpdate:show":f}=e;Promise.resolve(d?d(s):!0).then(x=>{var w;x!==!1&&((w=r.value)===null||w===void 0||w.setShow(!1),f&&ve(f,!1))})}return Cn(Rn,{mergedThemeRef:o,mergedClsPrefixRef:a,props:e}),{setShow(s){var l;(l=r.value)===null||l===void 0||l.setShow(s)},syncPosition(){var s;(s=r.value)===null||s===void 0||s.syncPosition()},mergedTheme:o,popoverInstRef:r,handlePositiveClick:t,handleNegativeClick:n}},render(){const{$slots:e,$props:a,mergedTheme:o}=this;return N(Ir,Object.assign({},wn(a,Ut),{theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.trigger,default:()=>{const r=fr(a,Ut);return N(oa,Object.assign({},r,{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}}),Et=vn("n-tabs"),Sn={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Le=ue({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Sn,slots:Object,setup(e){const a=Tt(Et,null);return a||hr("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return N("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ua=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},wn(Sn,["displayDirective"])),Pt=ue({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ua,setup(e){const{mergedClsPrefixRef:a,valueRef:o,typeRef:r,closableRef:t,tabStyleRef:n,addTabStyleRef:i,tabClassRef:s,addTabClassRef:l,tabChangeIdRef:d,onBeforeLeaveRef:f,triggerRef:x,handleAdd:w,activateTab:y,handleClose:T}=Tt(Et);return{trigger:x,mergedClosable:ae(()=>{if(e.internalAddable)return!1;const{closable:E}=e;return E===void 0?t.value:E}),style:n,addStyle:i,tabClass:s,addTabClass:l,clsPrefix:a,value:o,type:r,handleClose(E){E.stopPropagation(),!e.disabled&&T(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){w();return}const{name:E}=e,D=++d.id;if(E!==o.value){const{value:S}=f;S?Promise.resolve(S(e.name,o.value)).then(B=>{B&&d.id===D&&y(E)}):y(E)}}}},render(){const{internalAddable:e,clsPrefix:a,name:o,disabled:r,label:t,tab:n,value:i,mergedClosable:s,trigger:l,$slots:{default:d}}=this,f=t??n;return N("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?N("div",{class:`${a}-tabs-tab-pad`}):null,N("div",Object.assign({key:o,"data-name":o,"data-disabled":r?!0:void 0},pr({class:[`${a}-tabs-tab`,i===o&&`${a}-tabs-tab--active`,r&&`${a}-tabs-tab--disabled`,s&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l==="click"?this.activateTab:void 0,onMouseenter:l==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),N("span",{class:`${a}-tabs-tab__label`},e?N(je,null,N("div",{class:`${a}-tabs-tab__height-placeholder`}," "),N(mn,{clsPrefix:a},{default:()=>N(Ar,null)})):d?d():typeof f=="object"?f:br(f??o)),s&&this.type==="card"?N(vr,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),da=R("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[U("segment-type",[R("tabs-rail",[q("&.transition-disabled",[R("tabs-capsule",`
 transition: none;
 `)])])]),U("top",[R("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),U("left",[R("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),U("left, right",`
 flex-direction: row;
 `,[R("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),R("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),U("right",`
 flex-direction: row-reverse;
 `,[R("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),R("tabs-bar",`
 left: 0;
 `)]),U("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[R("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),R("tabs-bar",`
 top: 0;
 `)]),R("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[R("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),R("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[R("tabs-tab",`
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
 `)])])]),U("flex",[R("tabs-nav",`
 width: 100%;
 position: relative;
 `,[R("tabs-wrapper",`
 width: 100%;
 `,[R("tabs-tab",`
 margin-right: 0;
 `)])])]),R("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[H("prefix, suffix",`
 display: flex;
 align-items: center;
 `),H("prefix","padding-right: 16px;"),H("suffix","padding-left: 16px;")]),U("top, bottom",[q(">",[R("tabs-nav",[R("tabs-nav-scroll-wrapper",[q("&::before",`
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
 `)])])])])]),U("left, right",[R("tabs-nav-scroll-content",`
 flex-direction: column;
 `),q(">",[R("tabs-nav",[R("tabs-nav-scroll-wrapper",[q("&::before",`
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
 `)])])])])]),R("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[R("tabs-nav-y-scroll",`
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
 `)]),R("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),R("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),R("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),R("tabs-tab",`
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
 `)]),R("tabs-bar",`
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
 `)]),R("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),R("tab-pane",`
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
 `)]),R("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),U("line-type, bar-type",[R("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[q("&:hover",{color:"var(--n-tab-text-color-hover)"}),U("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),U("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),R("tabs-nav",[U("line-type",[U("top",[H("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R("tabs-bar",`
 bottom: -1px;
 `)]),U("left",[H("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),R("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),R("tabs-bar",`
 right: -1px;
 `)]),U("right",[H("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),R("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),R("tabs-bar",`
 left: -1px;
 `)]),U("bottom",[H("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),R("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),R("tabs-bar",`
 top: -1px;
 `)]),H("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),R("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),R("tabs-bar",`
 border-radius: 0;
 `)]),U("card-type",[H("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),R("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),R("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),R("tabs-tab",`
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
 `),mr("disabled",[q("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),U("closable","padding-right: 8px;"),U("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),U("disabled","color: var(--n-tab-text-color-disabled);")])]),U("left, right",`
 flex-direction: column; 
 `,[H("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),R("tabs-wrapper",`
 flex-direction: column;
 `),R("tabs-tab-wrapper",`
 flex-direction: column;
 `,[R("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),U("top",[U("card-type",[R("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-bottom: 1px solid #0000;
 `)]),R("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),U("left",[U("card-type",[R("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),R("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-right: 1px solid #0000;
 `)]),R("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),R("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),U("right",[U("card-type",[R("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),R("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-left: 1px solid #0000;
 `)]),R("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),R("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),U("bottom",[U("card-type",[R("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),R("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[U("active",`
 border-top: 1px solid #0000;
 `)]),R("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),R("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Ye=aa,ca=Object.assign(Object.assign({},qe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),fa=ue({name:"Tabs",props:ca,slots:Object,setup(e,{slots:a}){var o,r,t,n;const{mergedClsPrefixRef:i,inlineThemeDisabled:s,mergedComponentPropsRef:l}=Rt(e),d=qe("Tabs","-tabs",da,wr,e,i),f=j(null),x=j(null),w=j(null),y=j(null),T=j(null),E=j(null),D=j(!0),S=j(!0),B=_t(e,["labelSize","size"]),b=ae(()=>{var g,h;if(B.value)return B.value;const A=(h=(g=l==null?void 0:l.value)===null||g===void 0?void 0:g.Tabs)===null||h===void 0?void 0:h.size;return A||"medium"}),c=_t(e,["activeName","value"]),P=j((r=(o=c.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&r!==void 0?r:a.default?(n=(t=Ve(a.default())[0])===null||t===void 0?void 0:t.props)===null||n===void 0?void 0:n.name:null),u=kr(c,P),p={id:0},v=ae(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});$e(u,()=>{p.id=0,k(),$()});function m(){var g;const{value:h}=u;return h===null?null:(g=f.value)===null||g===void 0?void 0:g.querySelector(`[data-name="${h}"]`)}function z(g){if(e.type==="card")return;const{value:h}=x;if(!h)return;const A=h.style.opacity==="0";if(g){const F=`${i.value}-tabs-bar--disabled`,{barWidth:O,placement:X}=e;if(g.dataset.disabled==="true"?h.classList.add(F):h.classList.remove(F),["top","bottom"].includes(X)){if(_(["top","maxHeight","height"]),typeof O=="number"&&g.offsetWidth>=O){const Z=Math.floor((g.offsetWidth-O)/2)+g.offsetLeft;h.style.left=`${Z}px`,h.style.maxWidth=`${O}px`}else h.style.left=`${g.offsetLeft}px`,h.style.maxWidth=`${g.offsetWidth}px`;h.style.width="8192px",A&&(h.style.transition="none"),h.offsetWidth,A&&(h.style.transition="",h.style.opacity="1")}else{if(_(["left","maxWidth","width"]),typeof O=="number"&&g.offsetHeight>=O){const Z=Math.floor((g.offsetHeight-O)/2)+g.offsetTop;h.style.top=`${Z}px`,h.style.maxHeight=`${O}px`}else h.style.top=`${g.offsetTop}px`,h.style.maxHeight=`${g.offsetHeight}px`;h.style.height="8192px",A&&(h.style.transition="none"),h.offsetHeight,A&&(h.style.transition="",h.style.opacity="1")}}}function I(){if(e.type==="card")return;const{value:g}=x;g&&(g.style.opacity="0")}function _(g){const{value:h}=x;if(h)for(const A of g)h.style[A]=""}function k(){if(e.type==="card")return;const g=m();g?z(g):I()}function $(){var g;const h=(g=T.value)===null||g===void 0?void 0:g.$el;if(!h)return;const A=m();if(!A)return;const{scrollLeft:F,offsetWidth:O}=h,{offsetLeft:X,offsetWidth:Z}=A;F>X?h.scrollTo({top:0,left:X,behavior:"smooth"}):X+Z>F+O&&h.scrollTo({top:0,left:X+Z-O,behavior:"smooth"})}const Y=j(null);let oe=0,te=null;function Ae(g){const h=Y.value;if(h){oe=g.getBoundingClientRect().height;const A=`${oe}px`,F=()=>{h.style.height=A,h.style.maxHeight=A};te?(F(),te(),te=null):te=F}}function Oe(g){const h=Y.value;if(h){const A=g.getBoundingClientRect().height,F=()=>{document.body.offsetHeight,h.style.maxHeight=`${A}px`,h.style.height=`${Math.max(oe,A)}px`};te?(te(),te=null,F()):te=F}}function Ce(){const g=Y.value;if(g){g.style.maxHeight="",g.style.height="";const{paneWrapperStyle:h}=e;if(typeof h=="string")g.style.cssText=h;else if(h){const{maxHeight:A,height:F}=h;A!==void 0&&(g.style.maxHeight=A),F!==void 0&&(g.style.height=F)}}}const de={value:[]},xe=j("next");function Pe(g){const h=u.value;let A="next";for(const F of de.value){if(F===h)break;if(F===g){A="prev";break}}xe.value=A,He(g)}function He(g){const{onActiveNameChange:h,onUpdateValue:A,"onUpdate:value":F}=e;h&&ve(h,g),A&&ve(A,g),F&&ve(F,g),P.value=g}function Re(g){const{onClose:h}=e;h&&ve(h,g)}function Te(){const{value:g}=x;if(!g)return;const h="transition-disabled";g.classList.add(h),k(),g.classList.remove(h)}const W=j(null);function G({transitionDisabled:g}){const h=f.value;if(!h)return;g&&h.classList.add("transition-disabled");const A=m();A&&W.value&&(W.value.style.width=`${A.offsetWidth}px`,W.value.style.height=`${A.offsetHeight}px`,W.value.style.transform=`translateX(${A.offsetLeft-Cr(getComputedStyle(h).paddingLeft)}px)`,g&&W.value.offsetWidth),g&&h.classList.remove("transition-disabled")}$e([u],()=>{e.type==="segment"&&Ue(()=>{G({transitionDisabled:!1})})}),St(()=>{e.type==="segment"&&G({transitionDisabled:!0})});let ie=0;function Se(g){var h;if(g.contentRect.width===0&&g.contentRect.height===0||ie===g.contentRect.width)return;ie=g.contentRect.width;const{type:A}=e;if((A==="line"||A==="bar")&&Te(),A!=="segment"){const{placement:F}=e;We((F==="top"||F==="bottom"?(h=T.value)===null||h===void 0?void 0:h.$el:E.value)||null)}}const Nn=Ye(Se,64);$e([()=>e.justifyContent,()=>e.size],()=>{Ue(()=>{const{type:g}=e;(g==="line"||g==="bar")&&Te()})});const ge=j(!1);function In(g){var h;const{target:A,contentRect:{width:F,height:O}}=g,X=A.parentElement.parentElement.offsetWidth,Z=A.parentElement.parentElement.offsetHeight,{placement:pe}=e;if(!ge.value)pe==="top"||pe==="bottom"?X<F&&(ge.value=!0):Z<O&&(ge.value=!0);else{const{value:Ee}=y;if(!Ee)return;pe==="top"||pe==="bottom"?X-F>Ee.$el.offsetWidth&&(ge.value=!1):Z-O>Ee.$el.offsetHeight&&(ge.value=!1)}We(((h=T.value)===null||h===void 0?void 0:h.$el)||null)}const _n=Ye(In,64);function zn(){const{onAdd:g}=e;g&&g(),Ue(()=>{const h=m(),{value:A}=T;!h||!A||A.scrollTo({left:h.offsetLeft,top:0,behavior:"smooth"})})}function We(g){if(!g)return;const{placement:h}=e;if(h==="top"||h==="bottom"){const{scrollLeft:A,scrollWidth:F,offsetWidth:O}=g;D.value=A<=0,S.value=A+O>=F}else{const{scrollTop:A,scrollHeight:F,offsetHeight:O}=g;D.value=A<=0,S.value=A+O>=F}}const Ln=Ye(g=>{We(g.target)},64);Cn(Et,{triggerRef:Q(e,"trigger"),tabStyleRef:Q(e,"tabStyle"),tabClassRef:Q(e,"tabClass"),addTabStyleRef:Q(e,"addTabStyle"),addTabClassRef:Q(e,"addTabClass"),paneClassRef:Q(e,"paneClass"),paneStyleRef:Q(e,"paneStyle"),mergedClsPrefixRef:i,typeRef:Q(e,"type"),closableRef:Q(e,"closable"),valueRef:u,tabChangeIdRef:p,onBeforeLeaveRef:Q(e,"onBeforeLeave"),activateTab:Pe,handleClose:Re,handleAdd:zn}),zr(()=>{k(),$()}),yr(()=>{const{value:g}=w;if(!g)return;const{value:h}=i,A=`${h}-tabs-nav-scroll-wrapper--shadow-start`,F=`${h}-tabs-nav-scroll-wrapper--shadow-end`;D.value?g.classList.remove(A):g.classList.add(A),S.value?g.classList.remove(F):g.classList.add(F)});const Mn={syncBarPosition:()=>{k()}},$n=()=>{G({transitionDisabled:!0})},kt=ae(()=>{const{value:g}=b,{type:h}=e,A={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[h],F=`${g}${A}`,{self:{barColor:O,closeIconColor:X,closeIconColorHover:Z,closeIconColorPressed:pe,tabColor:Ee,tabBorderColor:Un,paneTextColor:Dn,tabFontWeight:Fn,tabBorderRadius:jn,tabFontWeightActive:qn,colorSegment:On,fontWeightStrong:Hn,tabColorSegment:Wn,closeSize:Vn,closeIconSize:Kn,closeColorHover:Jn,closeColorPressed:Yn,closeBorderRadius:Gn,[ne("panePadding",g)]:Ne,[ne("tabPadding",F)]:Qn,[ne("tabPaddingVertical",F)]:Xn,[ne("tabGap",F)]:Zn,[ne("tabGap",`${F}Vertical`)]:er,[ne("tabTextColor",h)]:tr,[ne("tabTextColorActive",h)]:nr,[ne("tabTextColorHover",h)]:rr,[ne("tabTextColorDisabled",h)]:ar,[ne("tabFontSize",g)]:or},common:{cubicBezierEaseInOut:ir}}=d.value;return{"--n-bezier":ir,"--n-color-segment":On,"--n-bar-color":O,"--n-tab-font-size":or,"--n-tab-text-color":tr,"--n-tab-text-color-active":nr,"--n-tab-text-color-disabled":ar,"--n-tab-text-color-hover":rr,"--n-pane-text-color":Dn,"--n-tab-border-color":Un,"--n-tab-border-radius":jn,"--n-close-size":Vn,"--n-close-icon-size":Kn,"--n-close-color-hover":Jn,"--n-close-color-pressed":Yn,"--n-close-border-radius":Gn,"--n-close-icon-color":X,"--n-close-icon-color-hover":Z,"--n-close-icon-color-pressed":pe,"--n-tab-color":Ee,"--n-tab-font-weight":Fn,"--n-tab-font-weight-active":qn,"--n-tab-padding":Qn,"--n-tab-padding-vertical":Xn,"--n-tab-gap":Zn,"--n-tab-gap-vertical":er,"--n-pane-padding-left":Ie(Ne,"left"),"--n-pane-padding-right":Ie(Ne,"right"),"--n-pane-padding-top":Ie(Ne,"top"),"--n-pane-padding-bottom":Ie(Ne,"bottom"),"--n-font-weight-strong":Hn,"--n-tab-color-segment":Wn}}),he=s?yn("tabs",ae(()=>`${b.value[0]}${e.type[0]}`),kt,e):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:u,renderedNames:new Set,segmentCapsuleElRef:W,tabsPaneWrapperRef:Y,tabsElRef:f,barElRef:x,addTabInstRef:y,xScrollInstRef:T,scrollWrapperElRef:w,addTabFixed:ge,tabWrapperStyle:v,handleNavResize:Nn,mergedSize:b,handleScroll:Ln,handleTabsResize:_n,cssVars:s?void 0:kt,themeClass:he==null?void 0:he.themeClass,animationDirection:xe,renderNameListRef:de,yScrollElRef:E,handleSegmentResize:$n,onAnimationBeforeLeave:Ae,onAnimationEnter:Oe,onAnimationAfterEnter:Ce,onRender:he==null?void 0:he.onRender},Mn)},render(){const{mergedClsPrefix:e,type:a,placement:o,addTabFixed:r,addable:t,mergedSize:n,renderNameListRef:i,onRender:s,paneWrapperClass:l,paneWrapperStyle:d,$slots:{default:f,prefix:x,suffix:w}}=this;s==null||s();const y=f?Ve(f()).filter(P=>P.type.__TAB_PANE__===!0):[],T=f?Ve(f()).filter(P=>P.type.__TAB__===!0):[],E=!T.length,D=a==="card",S=a==="segment",B=!D&&!S&&this.justifyContent;i.value=[];const b=()=>{const P=N("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},B?null:N("div",{class:`${e}-tabs-scroll-padding`,style:o==="top"||o==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),E?y.map((u,p)=>(i.value.push(u.props.name),Ge(N(Pt,Object.assign({},u.props,{internalCreatedByPane:!0,internalLeftPadded:p!==0&&(!B||B==="center"||B==="start"||B==="end")}),u.children?{default:u.children.tab}:void 0)))):T.map((u,p)=>(i.value.push(u.props.name),Ge(p!==0&&!B?jt(u):u))),!r&&t&&D?Ft(t,(E?y.length:T.length)!==0):null,B?null:N("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return N("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},D&&t?N(Ke,{onResize:this.handleTabsResize},{default:()=>P}):P,D?N("div",{class:`${e}-tabs-pad`}):null,D?null:N("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},c=S?"top":o;return N("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${n}-size`,B&&`${e}-tabs--flex`,`${e}-tabs--${c}`],style:this.cssVars},N("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav--${c}`,`${e}-tabs-nav`]},wt(x,P=>P&&N("div",{class:`${e}-tabs-nav__prefix`},P)),S?N(Ke,{onResize:this.handleSegmentResize},{default:()=>N("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},N("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},N("div",{class:`${e}-tabs-wrapper`},N("div",{class:`${e}-tabs-tab`}))),E?y.map((P,u)=>(i.value.push(P.props.name),N(Pt,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:u!==0}),P.children?{default:P.children.tab}:void 0))):T.map((P,u)=>(i.value.push(P.props.name),u===0?P:jt(P))))}):N(Ke,{onResize:this.handleNavResize},{default:()=>N("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(c)?N(Hr,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:b}):N("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},b()))}),r&&t&&D?Ft(t,!0):null,wt(w,P=>P&&N("div",{class:`${e}-tabs-nav__suffix`},P))),E&&(this.animated&&(c==="top"||c==="bottom")?N("div",{ref:"tabsPaneWrapperRef",style:d,class:[`${e}-tabs-pane-wrapper`,l]},Dt(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Dt(y,this.mergedValue,this.renderedNames)))}});function Dt(e,a,o,r,t,n,i){const s=[];return e.forEach(l=>{const{name:d,displayDirective:f,"display-directive":x}=l.props,w=T=>f===T||x===T,y=a===d;if(l.key!==void 0&&(l.key=d),y||w("show")||w("show:lazy")&&o.has(d)){o.has(d)||o.add(d);const T=!w("if");s.push(T?xr(l,[[Tr,y]]):l)}}),i?N(Pr,{name:`${i}-transition`,onBeforeLeave:r,onEnter:t,onAfterEnter:n},{default:()=>s}):s}function Ft(e,a){return N(Pt,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function jt(e){const a=Rr(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function Ge(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}function ga(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var be={},Qe,qt;function ha(){return qt||(qt=1,Qe=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Qe}var Xe={},le={},Ot;function ce(){if(Ot)return le;Ot=1;let e;const a=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return le.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},le.getSymbolTotalCodewords=function(r){return a[r]},le.getBCHDigit=function(o){let r=0;for(;o!==0;)r++,o>>>=1;return r},le.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');e=r},le.isKanjiModeEnabled=function(){return typeof e<"u"},le.toSJIS=function(r){return e(r)},le}var Ze={},Ht;function Bt(){return Ht||(Ht=1,(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function a(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+o)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,t){if(e.isValid(r))return r;try{return a(r)}catch{return t}}})(Ze)),Ze}var et,Wt;function pa(){if(Wt)return et;Wt=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(a){const o=Math.floor(a/8);return(this.buffer[o]>>>7-a%8&1)===1},put:function(a,o){for(let r=0;r<o;r++)this.putBit((a>>>o-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(a){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),a&&(this.buffer[o]|=128>>>this.length%8),this.length++}},et=e,et}var tt,Vt;function ba(){if(Vt)return tt;Vt=1;function e(a){if(!a||a<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=a,this.data=new Uint8Array(a*a),this.reservedBit=new Uint8Array(a*a)}return e.prototype.set=function(a,o,r,t){const n=a*this.size+o;this.data[n]=r,t&&(this.reservedBit[n]=!0)},e.prototype.get=function(a,o){return this.data[a*this.size+o]},e.prototype.xor=function(a,o,r){this.data[a*this.size+o]^=r},e.prototype.isReserved=function(a,o){return this.reservedBit[a*this.size+o]},tt=e,tt}var nt={},Kt;function va(){return Kt||(Kt=1,(function(e){const a=ce().getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const t=Math.floor(r/7)+2,n=a(r),i=n===145?26:Math.ceil((n-13)/(2*t-2))*2,s=[n-7];for(let l=1;l<t-1;l++)s[l]=s[l-1]-i;return s.push(6),s.reverse()},e.getPositions=function(r){const t=[],n=e.getRowColCoords(r),i=n.length;for(let s=0;s<i;s++)for(let l=0;l<i;l++)s===0&&l===0||s===0&&l===i-1||s===i-1&&l===0||t.push([n[s],n[l]]);return t}})(nt)),nt}var rt={},Jt;function ma(){if(Jt)return rt;Jt=1;const e=ce().getSymbolSize,a=7;return rt.getPositions=function(r){const t=e(r);return[[0,0],[t-a,0],[0,t-a]]},rt}var at={},Yt;function ya(){return Yt||(Yt=1,(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const a={N1:3,N2:3,N3:40,N4:10};e.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const n=t.size;let i=0,s=0,l=0,d=null,f=null;for(let x=0;x<n;x++){s=l=0,d=f=null;for(let w=0;w<n;w++){let y=t.get(x,w);y===d?s++:(s>=5&&(i+=a.N1+(s-5)),d=y,s=1),y=t.get(w,x),y===f?l++:(l>=5&&(i+=a.N1+(l-5)),f=y,l=1)}s>=5&&(i+=a.N1+(s-5)),l>=5&&(i+=a.N1+(l-5))}return i},e.getPenaltyN2=function(t){const n=t.size;let i=0;for(let s=0;s<n-1;s++)for(let l=0;l<n-1;l++){const d=t.get(s,l)+t.get(s,l+1)+t.get(s+1,l)+t.get(s+1,l+1);(d===4||d===0)&&i++}return i*a.N2},e.getPenaltyN3=function(t){const n=t.size;let i=0,s=0,l=0;for(let d=0;d<n;d++){s=l=0;for(let f=0;f<n;f++)s=s<<1&2047|t.get(d,f),f>=10&&(s===1488||s===93)&&i++,l=l<<1&2047|t.get(f,d),f>=10&&(l===1488||l===93)&&i++}return i*a.N3},e.getPenaltyN4=function(t){let n=0;const i=t.data.length;for(let l=0;l<i;l++)n+=t.data[l];return Math.abs(Math.ceil(n*100/i/5)-10)*a.N4};function o(r,t,n){switch(r){case e.Patterns.PATTERN000:return(t+n)%2===0;case e.Patterns.PATTERN001:return t%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(t+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return t*n%2+t*n%3===0;case e.Patterns.PATTERN110:return(t*n%2+t*n%3)%2===0;case e.Patterns.PATTERN111:return(t*n%3+(t+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(t,n){const i=n.size;for(let s=0;s<i;s++)for(let l=0;l<i;l++)n.isReserved(l,s)||n.xor(l,s,o(t,l,s))},e.getBestMask=function(t,n){const i=Object.keys(e.Patterns).length;let s=0,l=1/0;for(let d=0;d<i;d++){n(d),e.applyMask(d,t);const f=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(d,t),f<l&&(l=f,s=d)}return s}})(at)),at}var Me={},Gt;function En(){if(Gt)return Me;Gt=1;const e=Bt(),a=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Me.getBlocksCount=function(t,n){switch(n){case e.L:return a[(t-1)*4+0];case e.M:return a[(t-1)*4+1];case e.Q:return a[(t-1)*4+2];case e.H:return a[(t-1)*4+3];default:return}},Me.getTotalCodewordsCount=function(t,n){switch(n){case e.L:return o[(t-1)*4+0];case e.M:return o[(t-1)*4+1];case e.Q:return o[(t-1)*4+2];case e.H:return o[(t-1)*4+3];default:return}},Me}var ot={},Be={},Qt;function wa(){if(Qt)return Be;Qt=1;const e=new Uint8Array(512),a=new Uint8Array(256);return(function(){let r=1;for(let t=0;t<255;t++)e[t]=r,a[r]=t,r<<=1,r&256&&(r^=285);for(let t=255;t<512;t++)e[t]=e[t-255]})(),Be.log=function(r){if(r<1)throw new Error("log("+r+")");return a[r]},Be.exp=function(r){return e[r]},Be.mul=function(r,t){return r===0||t===0?0:e[a[r]+a[t]]},Be}var Xt;function Ca(){return Xt||(Xt=1,(function(e){const a=wa();e.mul=function(r,t){const n=new Uint8Array(r.length+t.length-1);for(let i=0;i<r.length;i++)for(let s=0;s<t.length;s++)n[i+s]^=a.mul(r[i],t[s]);return n},e.mod=function(r,t){let n=new Uint8Array(r);for(;n.length-t.length>=0;){const i=n[0];for(let l=0;l<t.length;l++)n[l]^=a.mul(t[l],i);let s=0;for(;s<n.length&&n[s]===0;)s++;n=n.slice(s)}return n},e.generateECPolynomial=function(r){let t=new Uint8Array([1]);for(let n=0;n<r;n++)t=e.mul(t,new Uint8Array([1,a.exp(n)]));return t}})(ot)),ot}var it,Zt;function xa(){if(Zt)return it;Zt=1;const e=Ca();function a(o){this.genPoly=void 0,this.degree=o,this.degree&&this.initialize(this.degree)}return a.prototype.initialize=function(r){this.degree=r,this.genPoly=e.generateECPolynomial(this.degree)},a.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(r.length+this.degree);t.set(r);const n=e.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(n,i),s}return n},it=a,it}var st={},lt={},ut={},en;function Bn(){return en||(en=1,ut.isValid=function(a){return!isNaN(a)&&a>=1&&a<=40}),ut}var re={},tn;function kn(){if(tn)return re;tn=1;const e="[0-9]+",a="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+`)(?:.|[\r
]))+`;re.KANJI=new RegExp(o,"g"),re.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),re.BYTE=new RegExp(r,"g"),re.NUMERIC=new RegExp(e,"g"),re.ALPHANUMERIC=new RegExp(a,"g");const t=new RegExp("^"+o+"$"),n=new RegExp("^"+e+"$"),i=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return re.testKanji=function(l){return t.test(l)},re.testNumeric=function(l){return n.test(l)},re.testAlphanumeric=function(l){return i.test(l)},re}var nn;function fe(){return nn||(nn=1,(function(e){const a=Bn(),o=kn();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,i){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!a.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?n.ccBits[0]:i<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return o.testNumeric(n)?e.NUMERIC:o.testAlphanumeric(n)?e.ALPHANUMERIC:o.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.from=function(n,i){if(e.isValid(n))return n;try{return r(n)}catch{return i}}})(lt)),lt}var rn;function Pa(){return rn||(rn=1,(function(e){const a=ce(),o=En(),r=Bt(),t=fe(),n=Bn(),i=7973,s=a.getBCHDigit(i);function l(w,y,T){for(let E=1;E<=40;E++)if(y<=e.getCapacity(E,T,w))return E}function d(w,y){return t.getCharCountIndicator(w,y)+4}function f(w,y){let T=0;return w.forEach(function(E){const D=d(E.mode,y);T+=D+E.getBitsLength()}),T}function x(w,y){for(let T=1;T<=40;T++)if(f(w,T)<=e.getCapacity(T,y,t.MIXED))return T}e.from=function(y,T){return n.isValid(y)?parseInt(y,10):T},e.getCapacity=function(y,T,E){if(!n.isValid(y))throw new Error("Invalid QR Code version");typeof E>"u"&&(E=t.BYTE);const D=a.getSymbolTotalCodewords(y),S=o.getTotalCodewordsCount(y,T),B=(D-S)*8;if(E===t.MIXED)return B;const b=B-d(E,y);switch(E){case t.NUMERIC:return Math.floor(b/10*3);case t.ALPHANUMERIC:return Math.floor(b/11*2);case t.KANJI:return Math.floor(b/13);case t.BYTE:default:return Math.floor(b/8)}},e.getBestVersionForData=function(y,T){let E;const D=r.from(T,r.M);if(Array.isArray(y)){if(y.length>1)return x(y,D);if(y.length===0)return 1;E=y[0]}else E=y;return l(E.mode,E.getLength(),D)},e.getEncodedBits=function(y){if(!n.isValid(y)||y<7)throw new Error("Invalid QR Code version");let T=y<<12;for(;a.getBCHDigit(T)-s>=0;)T^=i<<a.getBCHDigit(T)-s;return y<<12|T}})(st)),st}var dt={},an;function Ra(){if(an)return dt;an=1;const e=ce(),a=1335,o=21522,r=e.getBCHDigit(a);return dt.getEncodedBits=function(n,i){const s=n.bit<<3|i;let l=s<<10;for(;e.getBCHDigit(l)-r>=0;)l^=a<<e.getBCHDigit(l)-r;return(s<<10|l)^o},dt}var ct={},ft,on;function Ta(){if(on)return ft;on=1;const e=fe();function a(o){this.mode=e.NUMERIC,this.data=o.toString()}return a.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(r){let t,n,i;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),i=parseInt(n,10),r.put(i,10);const s=this.data.length-t;s>0&&(n=this.data.substr(t),i=parseInt(n,10),r.put(i,s*3+1))},ft=a,ft}var gt,sn;function Sa(){if(sn)return gt;sn=1;const e=fe(),a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(r){this.mode=e.ALPHANUMERIC,this.data=r}return o.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let i=a.indexOf(this.data[n])*45;i+=a.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(a.indexOf(this.data[n]),6)},gt=o,gt}var ht,ln;function Ea(){if(ln)return ht;ln=1;const e=fe();function a(o){this.mode=e.BYTE,typeof o=="string"?this.data=new TextEncoder().encode(o):this.data=new Uint8Array(o)}return a.getBitsLength=function(r){return r*8},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(o){for(let r=0,t=this.data.length;r<t;r++)o.put(this.data[r],8)},ht=a,ht}var pt,un;function Ba(){if(un)return pt;un=1;const e=fe(),a=ce();function o(r){this.mode=e.KANJI,this.data=r}return o.getBitsLength=function(t){return t*13},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(r){let t;for(t=0;t<this.data.length;t++){let n=a.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),r.put(n,13)}},pt=o,pt}var bt={exports:{}},dn;function ka(){return dn||(dn=1,(function(e){var a={single_source_shortest_paths:function(o,r,t){var n={},i={};i[r]=0;var s=a.PriorityQueue.make();s.push(r,0);for(var l,d,f,x,w,y,T,E,D;!s.empty();){l=s.pop(),d=l.value,x=l.cost,w=o[d]||{};for(f in w)w.hasOwnProperty(f)&&(y=w[f],T=x+y,E=i[f],D=typeof i[f]>"u",(D||E>T)&&(i[f]=T,s.push(f,T),n[f]=d))}if(typeof t<"u"&&typeof i[t]>"u"){var S=["Could not find a path from ",r," to ",t,"."].join("");throw new Error(S)}return n},extract_shortest_path_from_predecessor_list:function(o,r){for(var t=[],n=r;n;)t.push(n),o[n],n=o[n];return t.reverse(),t},find_path:function(o,r,t){var n=a.single_source_shortest_paths(o,r,t);return a.extract_shortest_path_from_predecessor_list(n,t)},PriorityQueue:{make:function(o){var r=a.PriorityQueue,t={},n;o=o||{};for(n in r)r.hasOwnProperty(n)&&(t[n]=r[n]);return t.queue=[],t.sorter=o.sorter||r.default_sorter,t},default_sorter:function(o,r){return o.cost-r.cost},push:function(o,r){var t={value:o,cost:r};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=a})(bt)),bt.exports}var cn;function Aa(){return cn||(cn=1,(function(e){const a=fe(),o=Ta(),r=Sa(),t=Ea(),n=Ba(),i=kn(),s=ce(),l=ka();function d(S){return unescape(encodeURIComponent(S)).length}function f(S,B,b){const c=[];let P;for(;(P=S.exec(b))!==null;)c.push({data:P[0],index:P.index,mode:B,length:P[0].length});return c}function x(S){const B=f(i.NUMERIC,a.NUMERIC,S),b=f(i.ALPHANUMERIC,a.ALPHANUMERIC,S);let c,P;return s.isKanjiModeEnabled()?(c=f(i.BYTE,a.BYTE,S),P=f(i.KANJI,a.KANJI,S)):(c=f(i.BYTE_KANJI,a.BYTE,S),P=[]),B.concat(b,c,P).sort(function(p,v){return p.index-v.index}).map(function(p){return{data:p.data,mode:p.mode,length:p.length}})}function w(S,B){switch(B){case a.NUMERIC:return o.getBitsLength(S);case a.ALPHANUMERIC:return r.getBitsLength(S);case a.KANJI:return n.getBitsLength(S);case a.BYTE:return t.getBitsLength(S)}}function y(S){return S.reduce(function(B,b){const c=B.length-1>=0?B[B.length-1]:null;return c&&c.mode===b.mode?(B[B.length-1].data+=b.data,B):(B.push(b),B)},[])}function T(S){const B=[];for(let b=0;b<S.length;b++){const c=S[b];switch(c.mode){case a.NUMERIC:B.push([c,{data:c.data,mode:a.ALPHANUMERIC,length:c.length},{data:c.data,mode:a.BYTE,length:c.length}]);break;case a.ALPHANUMERIC:B.push([c,{data:c.data,mode:a.BYTE,length:c.length}]);break;case a.KANJI:B.push([c,{data:c.data,mode:a.BYTE,length:d(c.data)}]);break;case a.BYTE:B.push([{data:c.data,mode:a.BYTE,length:d(c.data)}])}}return B}function E(S,B){const b={},c={start:{}};let P=["start"];for(let u=0;u<S.length;u++){const p=S[u],v=[];for(let m=0;m<p.length;m++){const z=p[m],I=""+u+m;v.push(I),b[I]={node:z,lastCount:0},c[I]={};for(let _=0;_<P.length;_++){const k=P[_];b[k]&&b[k].node.mode===z.mode?(c[k][I]=w(b[k].lastCount+z.length,z.mode)-w(b[k].lastCount,z.mode),b[k].lastCount+=z.length):(b[k]&&(b[k].lastCount=z.length),c[k][I]=w(z.length,z.mode)+4+a.getCharCountIndicator(z.mode,B))}}P=v}for(let u=0;u<P.length;u++)c[P[u]].end=0;return{map:c,table:b}}function D(S,B){let b;const c=a.getBestModeForData(S);if(b=a.from(B,c),b!==a.BYTE&&b.bit<c.bit)throw new Error('"'+S+'" cannot be encoded with mode '+a.toString(b)+`.
 Suggested mode is: `+a.toString(c));switch(b===a.KANJI&&!s.isKanjiModeEnabled()&&(b=a.BYTE),b){case a.NUMERIC:return new o(S);case a.ALPHANUMERIC:return new r(S);case a.KANJI:return new n(S);case a.BYTE:return new t(S)}}e.fromArray=function(B){return B.reduce(function(b,c){return typeof c=="string"?b.push(D(c,null)):c.data&&b.push(D(c.data,c.mode)),b},[])},e.fromString=function(B,b){const c=x(B,s.isKanjiModeEnabled()),P=T(c),u=E(P,b),p=l.find_path(u.map,"start","end"),v=[];for(let m=1;m<p.length-1;m++)v.push(u.table[p[m]].node);return e.fromArray(y(v))},e.rawSplit=function(B){return e.fromArray(x(B,s.isKanjiModeEnabled()))}})(ct)),ct}var fn;function Na(){if(fn)return Xe;fn=1;const e=ce(),a=Bt(),o=pa(),r=ba(),t=va(),n=ma(),i=ya(),s=En(),l=xa(),d=Pa(),f=Ra(),x=fe(),w=Aa();function y(u,p){const v=u.size,m=n.getPositions(p);for(let z=0;z<m.length;z++){const I=m[z][0],_=m[z][1];for(let k=-1;k<=7;k++)if(!(I+k<=-1||v<=I+k))for(let $=-1;$<=7;$++)_+$<=-1||v<=_+$||(k>=0&&k<=6&&($===0||$===6)||$>=0&&$<=6&&(k===0||k===6)||k>=2&&k<=4&&$>=2&&$<=4?u.set(I+k,_+$,!0,!0):u.set(I+k,_+$,!1,!0))}}function T(u){const p=u.size;for(let v=8;v<p-8;v++){const m=v%2===0;u.set(v,6,m,!0),u.set(6,v,m,!0)}}function E(u,p){const v=t.getPositions(p);for(let m=0;m<v.length;m++){const z=v[m][0],I=v[m][1];for(let _=-2;_<=2;_++)for(let k=-2;k<=2;k++)_===-2||_===2||k===-2||k===2||_===0&&k===0?u.set(z+_,I+k,!0,!0):u.set(z+_,I+k,!1,!0)}}function D(u,p){const v=u.size,m=d.getEncodedBits(p);let z,I,_;for(let k=0;k<18;k++)z=Math.floor(k/3),I=k%3+v-8-3,_=(m>>k&1)===1,u.set(z,I,_,!0),u.set(I,z,_,!0)}function S(u,p,v){const m=u.size,z=f.getEncodedBits(p,v);let I,_;for(I=0;I<15;I++)_=(z>>I&1)===1,I<6?u.set(I,8,_,!0):I<8?u.set(I+1,8,_,!0):u.set(m-15+I,8,_,!0),I<8?u.set(8,m-I-1,_,!0):I<9?u.set(8,15-I-1+1,_,!0):u.set(8,15-I-1,_,!0);u.set(m-8,8,1,!0)}function B(u,p){const v=u.size;let m=-1,z=v-1,I=7,_=0;for(let k=v-1;k>0;k-=2)for(k===6&&k--;;){for(let $=0;$<2;$++)if(!u.isReserved(z,k-$)){let Y=!1;_<p.length&&(Y=(p[_]>>>I&1)===1),u.set(z,k-$,Y),I--,I===-1&&(_++,I=7)}if(z+=m,z<0||v<=z){z-=m,m=-m;break}}}function b(u,p,v){const m=new o;v.forEach(function($){m.put($.mode.bit,4),m.put($.getLength(),x.getCharCountIndicator($.mode,u)),$.write(m)});const z=e.getSymbolTotalCodewords(u),I=s.getTotalCodewordsCount(u,p),_=(z-I)*8;for(m.getLengthInBits()+4<=_&&m.put(0,4);m.getLengthInBits()%8!==0;)m.putBit(0);const k=(_-m.getLengthInBits())/8;for(let $=0;$<k;$++)m.put($%2?17:236,8);return c(m,u,p)}function c(u,p,v){const m=e.getSymbolTotalCodewords(p),z=s.getTotalCodewordsCount(p,v),I=m-z,_=s.getBlocksCount(p,v),k=m%_,$=_-k,Y=Math.floor(m/_),oe=Math.floor(I/_),te=oe+1,Ae=Y-oe,Oe=new l(Ae);let Ce=0;const de=new Array(_),xe=new Array(_);let Pe=0;const He=new Uint8Array(u.buffer);for(let ie=0;ie<_;ie++){const Se=ie<$?oe:te;de[ie]=He.slice(Ce,Ce+Se),xe[ie]=Oe.encode(de[ie]),Ce+=Se,Pe=Math.max(Pe,Se)}const Re=new Uint8Array(m);let Te=0,W,G;for(W=0;W<Pe;W++)for(G=0;G<_;G++)W<de[G].length&&(Re[Te++]=de[G][W]);for(W=0;W<Ae;W++)for(G=0;G<_;G++)Re[Te++]=xe[G][W];return Re}function P(u,p,v,m){let z;if(Array.isArray(u))z=w.fromArray(u);else if(typeof u=="string"){let Y=p;if(!Y){const oe=w.rawSplit(u);Y=d.getBestVersionForData(oe,v)}z=w.fromString(u,Y||40)}else throw new Error("Invalid data");const I=d.getBestVersionForData(z,v);if(!I)throw new Error("The amount of data is too big to be stored in a QR Code");if(!p)p=I;else if(p<I)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+I+`.
`);const _=b(p,v,z),k=e.getSymbolSize(p),$=new r(k);return y($,p),T($),E($,p),S($,v,0),p>=7&&D($,p),B($,_),isNaN(m)&&(m=i.getBestMask($,S.bind(null,$,v))),i.applyMask(m,$),S($,v,m),{modules:$,version:p,errorCorrectionLevel:v,maskPattern:m,segments:z}}return Xe.create=function(p,v){if(typeof p>"u"||p==="")throw new Error("No input text");let m=a.M,z,I;return typeof v<"u"&&(m=a.from(v.errorCorrectionLevel,a.M),z=d.from(v.version),I=i.from(v.maskPattern),v.toSJISFunc&&e.setToSJISFunction(v.toSJISFunc)),P(p,z,m,I)},Xe}var vt={},mt={},gn;function An(){return gn||(gn=1,(function(e){function a(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let r=o.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+o);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const t=parseInt(r.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const t=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,i=r.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:a(r.color.dark||"#000000ff"),light:a(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,t){return t.width&&t.width>=r+t.margin*2?t.width/(r+t.margin*2):t.scale},e.getImageWidth=function(r,t){const n=e.getScale(r,t);return Math.floor((r+t.margin*2)*n)},e.qrToImageData=function(r,t,n){const i=t.modules.size,s=t.modules.data,l=e.getScale(i,n),d=Math.floor((i+n.margin*2)*l),f=n.margin*l,x=[n.color.light,n.color.dark];for(let w=0;w<d;w++)for(let y=0;y<d;y++){let T=(w*d+y)*4,E=n.color.light;if(w>=f&&y>=f&&w<d-f&&y<d-f){const D=Math.floor((w-f)/l),S=Math.floor((y-f)/l);E=x[s[D*i+S]?1:0]}r[T++]=E.r,r[T++]=E.g,r[T++]=E.b,r[T]=E.a}}})(mt)),mt}var hn;function Ia(){return hn||(hn=1,(function(e){const a=An();function o(t,n,i){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=i,n.width=i,n.style.height=i+"px",n.style.width=i+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,i,s){let l=s,d=i;typeof l>"u"&&(!i||!i.getContext)&&(l=i,i=void 0),i||(d=r()),l=a.getOptions(l);const f=a.getImageWidth(n.modules.size,l),x=d.getContext("2d"),w=x.createImageData(f,f);return a.qrToImageData(w.data,n,l),o(x,d,f),x.putImageData(w,0,0),d},e.renderToDataURL=function(n,i,s){let l=s;typeof l>"u"&&(!i||!i.getContext)&&(l=i,i=void 0),l||(l={});const d=e.render(n,i,l),f=l.type||"image/png",x=l.rendererOpts||{};return d.toDataURL(f,x.quality)}})(vt)),vt}var yt={},pn;function _a(){if(pn)return yt;pn=1;const e=An();function a(t,n){const i=t.a/255,s=n+'="'+t.hex+'"';return i<1?s+" "+n+'-opacity="'+i.toFixed(2).slice(1)+'"':s}function o(t,n,i){let s=t+n;return typeof i<"u"&&(s+=" "+i),s}function r(t,n,i){let s="",l=0,d=!1,f=0;for(let x=0;x<t.length;x++){const w=Math.floor(x%n),y=Math.floor(x/n);!w&&!d&&(d=!0),t[x]?(f++,x>0&&w>0&&t[x-1]||(s+=d?o("M",w+i,.5+y+i):o("m",l,0),l=0,d=!1),w+1<n&&t[x+1]||(s+=o("h",f),f=0)):l++}return s}return yt.render=function(n,i,s){const l=e.getOptions(i),d=n.modules.size,f=n.modules.data,x=d+l.margin*2,w=l.color.light.a?"<path "+a(l.color.light,"fill")+' d="M0 0h'+x+"v"+x+'H0z"/>':"",y="<path "+a(l.color.dark,"stroke")+' d="'+r(f,d,l.margin)+'"/>',T='viewBox="0 0 '+x+" "+x+'"',D='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+T+' shape-rendering="crispEdges">'+w+y+`</svg>
`;return typeof s=="function"&&s(null,D),D},yt}var bn;function za(){if(bn)return be;bn=1;const e=ha(),a=Na(),o=Ia(),r=_a();function t(n,i,s,l,d){const f=[].slice.call(arguments,1),x=f.length,w=typeof f[x-1]=="function";if(!w&&!e())throw new Error("Callback required as last argument");if(w){if(x<2)throw new Error("Too few arguments provided");x===2?(d=s,s=i,i=l=void 0):x===3&&(i.getContext&&typeof d>"u"?(d=l,l=void 0):(d=l,l=s,s=i,i=void 0))}else{if(x<1)throw new Error("Too few arguments provided");return x===1?(s=i,i=l=void 0):x===2&&!i.getContext&&(l=s,s=i,i=void 0),new Promise(function(y,T){try{const E=a.create(s,l);y(n(E,i,l))}catch(E){T(E)}})}try{const y=a.create(s,l);d(null,n(y,i,l))}catch(y){d(y)}}return be.create=a.create,be.toCanvas=t.bind(null,o.render),be.toDataURL=t.bind(null,o.renderToDataURL),be.toString=t.bind(null,function(n,i,s){return r.render(n,s)}),be}var La=za();const Ma=ga(La),$a=ue({__name:"ShareModal",props:{username:{}},emits:["close"],setup(e,{emit:a}){const o=e,r=a,t=Pn(),{t:n}=xn(),i=j(null),s=j(""),l=j(null),d=j(null),f=j(null),x=j("link"),w=j(60),y=ae(()=>[{label:n("share.ttl15m"),value:15},{label:n("share.ttl1h"),value:60},{label:n("share.ttl24h"),value:1440}]),T=j(""),E=j(0),D=j(!1);async function S(p,v){if(!(!p||!v))try{await Ma.toCanvas(p,v,{width:280,margin:1})}catch{}}async function B(){if(await Ue(),x.value==="link"){await S(f.value,T.value);return}i.value&&(i.value.mierusUrls.length&&await S(l.value,i.value.mierusUrls[0]),await S(d.value,i.value.mieruUrl))}St(async()=>{try{i.value=await me.get(`/api/users/${encodeURIComponent(o.username)}/share`),await B()}catch(p){s.value=p instanceof ke?p.message:n("share.failed")}}),$e(x,B);async function b(){D.value=!0;try{const p=await me.post(`/api/users/${encodeURIComponent(o.username)}/share-token`,{ttlMinutes:w.value});T.value=p.url,E.value=p.expiresAt,await B()}catch(p){t.error(p instanceof ke?p.message:n("share.linkFailed"))}finally{D.value=!1}}function c(){return E.value?n("share.expires",{date:new Date(E.value*1e3).toLocaleString()}):""}function P(p){navigator.clipboard.writeText(p).then(()=>t.success(n("common.copied")),()=>t.error(n("common.copyFailed")))}function u(){if(!i.value)return;const p=new Blob([i.value.clientConfigJson],{type:"application/json"}),v=document.createElement("a");v.href=URL.createObjectURL(p),v.download=`mieru-${o.username}.json`,v.click(),URL.revokeObjectURL(v.href)}return(p,v)=>(se(),we(C(Sr),{show:!0,preset:"card",title:C(n)("share.title",{name:e.username}),style:{width:"480px"},onClose:v[6]||(v[6]=m=>r("close")),onMaskClick:v[7]||(v[7]=m=>r("close"))},{default:M(()=>[s.value?(se(),we(C(Mr),{key:0,type:"warning","show-icon":!1},{default:M(()=>[V(J(s.value),1)]),_:1})):(se(),we(C(fa),{key:1,value:x.value,"onUpdate:value":v[5]||(v[5]=m=>x.value=m)},{default:M(()=>[L(C(Le),{name:"link",tab:C(n)("share.linkTab")},{default:M(()=>[L(C(ee),{vertical:"",align:"center"},{default:M(()=>[L(C(Lt),{depth:"3",style:{"font-size":"12px","text-align":"center"}},{default:M(()=>[V(J(C(n)("share.linkText")),1)]),_:1}),L(C(ee),{align:"center"},{default:M(()=>[L(C(Lr),{value:w.value,"onUpdate:value":v[0]||(v[0]=m=>w.value=m),options:y.value,style:{width:"140px"}},null,8,["value","options"]),L(C(K),{type:"primary",loading:D.value,onClick:b},{default:M(()=>[V(J(C(n)("share.generateLink")),1)]),_:1},8,["loading"])]),_:1}),T.value?(se(),Ct(je,{key:0},[De("canvas",{ref_key:"linkCanvas",ref:f},null,512),L(C(ye),{value:T.value,readonly:""},null,8,["value"]),L(C(ee),{align:"center"},{default:M(()=>[L(C(K),{size:"small",onClick:v[1]||(v[1]=m=>P(T.value))},{default:M(()=>[V(J(C(n)("share.copyLink")),1)]),_:1}),L(C(Lt),{depth:"3",style:{"font-size":"12px"}},{default:M(()=>[V(J(c()),1)]),_:1})]),_:1})],64)):xt("",!0)]),_:1})]),_:1},8,["tab"]),L(C(Le),{name:"mierus",tab:"mierus://",disabled:!i.value},{default:M(()=>[L(C(ee),{vertical:"",align:"center"},{default:M(()=>{var m;return[De("canvas",{ref_key:"mierusCanvas",ref:l},null,512),L(C(ye),{value:(m=i.value)==null?void 0:m.mierusUrls[0],type:"textarea",readonly:"",autosize:{minRows:2,maxRows:4}},null,8,["value"]),L(C(K),{size:"small",onClick:v[2]||(v[2]=z=>P(i.value.mierusUrls[0]))},{default:M(()=>[V(J(C(n)("share.copyLink")),1)]),_:1})]}),_:1})]),_:1},8,["disabled"]),L(C(Le),{name:"mieru",tab:"mieru://",disabled:!i.value},{default:M(()=>[L(C(ee),{vertical:"",align:"center"},{default:M(()=>{var m;return[De("canvas",{ref_key:"mieruCanvas",ref:d},null,512),L(C(ye),{value:(m=i.value)==null?void 0:m.mieruUrl,type:"textarea",readonly:"",autosize:{minRows:2,maxRows:4}},null,8,["value"]),L(C(K),{size:"small",onClick:v[3]||(v[3]=z=>P(i.value.mieruUrl))},{default:M(()=>[V(J(C(n)("share.copyLink")),1)]),_:1})]}),_:1})]),_:1},8,["disabled"]),L(C(Le),{name:"json",tab:C(n)("share.configTab"),disabled:!i.value},{default:M(()=>[L(C(ee),{vertical:""},{default:M(()=>{var m;return[L(C(ye),{value:(m=i.value)==null?void 0:m.clientConfigJson,type:"textarea",readonly:"",autosize:{minRows:8,maxRows:14}},null,8,["value"]),L(C(ee),null,{default:M(()=>[L(C(K),{size:"small",onClick:v[4]||(v[4]=z=>P(i.value.clientConfigJson))},{default:M(()=>[V(J(C(n)("common.copy")),1)]),_:1}),L(C(K),{size:"small",onClick:u},{default:M(()=>[V(J(C(n)("share.downloadJson")),1)]),_:1})]),_:1})]}),_:1})]),_:1},8,["tab","disabled"])]),_:1},8,["value"]))]),_:1},8,["title"]))}}),eo=ue({__name:"UsersPage",setup(e){const a=Pn(),{t:o}=xn(),r=j([]),t=j(!1),n=j(!1),i=j(null),s=j({name:"",password:"",allowPrivateIP:!1}),l=j([]),d=j(null);function f(b){if(b<1024)return`${b} B`;const c=["KiB","MiB","GiB","TiB"];let P=b,u=-1;do P/=1024,u++;while(P>=1024&&u<c.length-1);return`${P.toFixed(1)} ${c[u]}`}function x(b){var p,v;const c=Object.entries(b.metrics);if(!c.length)return"—";const P=((p=c.find(([m])=>m.toLowerCase().includes("download")))==null?void 0:p[1])??0,u=((v=c.find(([m])=>m.toLowerCase().includes("upload")))==null?void 0:v[1])??0;return`↓ ${f(P)} / ↑ ${f(u)}`}const w=ae(()=>[{title:o("users.name"),key:"name"},{title:o("users.colQuotas"),key:"quotas",render:b=>b.quotas.length?b.quotas.map(c=>N(qr,{size:"small",style:"margin-right:4px"},{default:()=>`${c.megabytes} MB / ${c.days}d`})):"—"},{title:o("users.colTraffic"),key:"traffic",render:x},{title:o("users.colShare"),key:"share",render:b=>N(K,{size:"small",disabled:!b.hasSecret,onClick:()=>d.value=b.name},{default:()=>b.hasSecret?o("users.share"):o("users.noPassword")})},{title:o("common.actions"),key:"actions",render:b=>N(ee,null,{default:()=>[N(K,{size:"small",onClick:()=>E(b)},{default:()=>o("common.edit")}),N(la,{onPositiveClick:()=>B(b.name)},{trigger:()=>N(K,{size:"small",type:"error",quaternary:!0},{default:()=>o("common.delete")}),default:()=>o("users.confirmDelete",{name:b.name})})]})}]);async function y(){t.value=!0;try{r.value=await me.get("/api/users")}catch(b){a.error(b instanceof ke?b.message:o("users.loadFailed"))}finally{t.value=!1}}function T(){i.value=null,s.value={name:"",password:"",allowPrivateIP:!1},l.value=[],n.value=!0}function E(b){i.value=b.name,s.value={name:b.name,password:"",allowPrivateIP:b.allowPrivateIP},l.value=b.quotas.map(c=>({...c})),n.value=!0}function D(){l.value.push({days:30,megabytes:10240})}async function S(){const b={password:s.value.password,quotas:l.value,allowPrivateIP:s.value.allowPrivateIP};try{i.value===null?(await me.post("/api/users",{name:s.value.name,...b}),a.success(o("users.created"))):(await me.put(`/api/users/${encodeURIComponent(i.value)}`,b),a.success(o("users.updated"))),n.value=!1,await y()}catch(c){a.error(c instanceof ke?c.message:o("common.saveFailed"))}}async function B(b){try{await me.del(`/api/users/${encodeURIComponent(b)}`),a.success(o("users.deleted")),await y()}catch(c){a.error(c instanceof ke?c.message:o("common.deleteFailed"))}}return St(y),(b,c)=>(se(),Ct(je,null,[L(C(Er),{title:C(o)("users.title")},{"header-extra":M(()=>[L(C(K),{type:"primary",onClick:T},{default:M(()=>[V(J(C(o)("users.addUser")),1)]),_:1})]),default:M(()=>[L(C(Fr),{columns:w.value,data:r.value,loading:t.value,"row-key":P=>P.name},null,8,["columns","data","loading","row-key"])]),_:1},8,["title"]),L(C($r),{show:n.value,"onUpdate:show":c[4]||(c[4]=P=>n.value=P),width:420},{default:M(()=>[L(C(Ur),{title:i.value===null?C(o)("users.addUser"):C(o)("users.editUser",{name:i.value})},{footer:M(()=>[L(C(ee),null,{default:M(()=>[L(C(K),{onClick:c[3]||(c[3]=P=>n.value=!1)},{default:M(()=>[V(J(C(o)("common.cancel")),1)]),_:1}),L(C(K),{type:"primary",onClick:S},{default:M(()=>[V(J(C(o)("common.save")),1)]),_:1})]),_:1})]),default:M(()=>[L(C(jr),null,{default:M(()=>[i.value===null?(se(),we(C(ze),{key:0},{label:M(()=>[L(_e,{label:C(o)("users.name"),help:C(o)("users.nameHelp")},null,8,["label","help"])]),default:M(()=>[L(C(ye),{value:s.value.name,"onUpdate:value":c[0]||(c[0]=P=>s.value.name=P),placeholder:"username"},null,8,["value"])]),_:1})):xt("",!0),L(C(ze),null,{label:M(()=>[L(_e,{label:i.value===null?C(o)("users.password"):C(o)("users.passwordKeep"),help:C(o)("users.passwordHelp")},null,8,["label","help"])]),default:M(()=>[L(C(ye),{value:s.value.password,"onUpdate:value":c[1]||(c[1]=P=>s.value.password=P),type:"password","show-password-on":"click"},null,8,["value"])]),_:1}),L(C(ze),null,{label:M(()=>[L(_e,{label:C(o)("users.allowPrivate"),help:C(o)("users.allowPrivateHelp")},null,8,["label","help"])]),default:M(()=>[L(C(Dr),{value:s.value.allowPrivateIP,"onUpdate:value":c[2]||(c[2]=P=>s.value.allowPrivateIP=P)},null,8,["value"])]),_:1}),L(C(ze),null,{label:M(()=>[L(_e,{label:C(o)("users.quotas"),help:C(o)("users.quotasHelp")},null,8,["label","help"])]),default:M(()=>[L(C(ee),{vertical:"",style:{width:"100%"}},{default:M(()=>[(se(!0),Ct(je,null,Br(l.value,(P,u)=>(se(),we(C(ee),{key:u,align:"center"},{default:M(()=>[L(C(Nt),{value:P.megabytes,"onUpdate:value":p=>P.megabytes=p,min:1,step:1024},{suffix:M(()=>[...c[6]||(c[6]=[V("MB",-1)])]),_:1},8,["value","onUpdate:value"]),De("span",null,J(C(o)("users.per")),1),L(C(Nt),{value:P.days,"onUpdate:value":p=>P.days=p,min:1,max:365},{suffix:M(()=>[V(J(C(o)("users.days")),1)]),_:1},8,["value","onUpdate:value"]),L(C(K),{size:"tiny",quaternary:"",type:"error",onClick:p=>l.value.splice(u,1)},{default:M(()=>[...c[7]||(c[7]=[V("✕",-1)])]),_:1},8,["onClick"])]),_:2},1024))),128)),L(C(K),{size:"small",dashed:"",onClick:D},{default:M(()=>[V(J(C(o)("users.addQuota")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["show"]),d.value?(se(),we($a,{key:0,username:d.value,onClose:c[5]||(c[5]=P=>d.value=null)},null,8,["username"])):xt("",!0)],64))}});export{eo as default};
