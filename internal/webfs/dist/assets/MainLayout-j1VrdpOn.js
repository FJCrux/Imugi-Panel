import{$n as e,Bn as t,C as n,Dt as r,En as i,Fn as a,Ft as o,Gt as s,Jn as c,Jt as l,Kt as u,Mn as d,Mt as f,Nn as p,Pn as m,Rn as h,Sn as g,St as _,T as v,Tn as y,Tt as b,Vn as x,Xn as S,Xt as C,Yt as w,Zn as T,_n as E,_t as D,a as ee,bn as O,f as k,g as A,gn as j,hn as M,i as te,kt as N,m as P,mn as F,o as I,ot as L,r as R,rn as ne,st as z,un as re,vn as B,vt as V,w as ie,wn as H,xn as U,y as ae,yn as W,zn as oe}from"./router-BIO1-tYH.js";import{g as se,n as G,r as ce,t as le}from"./Space-D_izr8eA.js";import{i as ue,n as K,t as de}from"./Tag-SpLY0thm.js";import{o as fe,u as q}from"./_common-CXfM0PR-.js";import{l as J,r as Y,t as pe,u as me}from"./_plugin-vue_export-helper-D_EFaKSB.js";import{n as he,t as ge}from"./Dropdown-BLopI3HD.js";import{n as _e,t as ve}from"./DrawerContent-BYYhIO42.js";import{t as ye}from"./text-BPUjTdUb.js";import{L as X,n as be,s as xe,t as Se}from"./index-C_G8VDoQ.js";import{t as Ce}from"./PeopleOutline-B64cHYoL.js";var we=g({name:`ChevronDownFilled`,render(){return H(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},H(`path`,{d:`M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z`,fill:`currentColor`}))}});function Te(e){let{baseColor:t,textColor2:n,bodyColor:r,cardColor:i,dividerColor:a,actionColor:s,scrollbarColor:c,scrollbarColorHover:l,invertedColor:u}=e;return{textColor:n,textColorInverted:`#FFF`,color:r,colorEmbedded:s,headerColor:i,headerColorInverted:u,footerColor:s,footerColorInverted:u,headerBorderColor:a,headerBorderColorInverted:u,footerBorderColor:a,footerBorderColorInverted:u,siderBorderColor:a,siderBorderColorInverted:u,siderColor:i,siderColorInverted:u,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:o(r,c),siderToggleBarColorHover:o(r,l),__invertScrollbar:`true`}}var Ee=ie({name:`Layout`,common:A,peers:{Scrollbar:P},self:Te}),De=r(`n-layout-sider`),Oe={type:String,default:`static`},ke=u(`layout`,`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[u(`layout-scroll-container`,`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),w(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ae={embedded:Boolean,position:Oe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:``},hasSider:Boolean,siderPlacement:{type:String,default:`left`}},je=r(`n-layout`);function Me(e){return g({name:e?`LayoutContent`:`Layout`,props:Object.assign(Object.assign({},v.props),Ae),setup(e){let t=c(null),n=c(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=z(e),o=v(`Layout`,`-layout`,ke,Ee,e,r);function s(r,i){if(e.nativeScrollbar){let{value:e}=t;e&&(i===void 0?e.scrollTo(r):e.scrollTo(r,i))}else{let{value:e}=n;e&&e.scrollTo(r,i)}}a(je,e);let l=0,u=0,d=t=>{var n;let r=t.target;l=r.scrollLeft,u=r.scrollTop,(n=e.onScroll)==null||n.call(e,t)};b(()=>{if(e.nativeScrollbar){let e=t.value;e&&(e.scrollTop=u,e.scrollLeft=l)}});let f={display:`flex`,flexWrap:`nowrap`,width:`100%`,flexDirection:`row`},p={scrollTo:s},m=F(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=o.value;return{"--n-bezier":t,"--n-color":e.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),h=i?L(`layout`,F(()=>e.embedded?`e`:``),m,e):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:n,hasSiderStyle:f,mergedTheme:o,handleNativeElScroll:d,cssVars:i?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender},p)},render(){var t;let{mergedClsPrefix:n,hasSider:r}=this;(t=this.onRender)==null||t.call(this);let i=r?this.hasSiderStyle:void 0;return H(`div`,{class:[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`],style:this.cssVars},this.nativeScrollbar?H(`div`,{ref:`scrollableElRef`,class:[`${n}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):H(k,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}var Ne=Me(!1),Pe=Me(!0),Fe=u(`layout-header`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[w(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),w(`bordered`,`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Ie={position:Oe,inverted:Boolean,bordered:{type:Boolean,default:!1}},Le=g({name:`LayoutHeader`,props:Object.assign(Object.assign({},v.props),Ie),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=z(e),r=v(`Layout`,`-layout-header`,Fe,Ee,e,t),i=F(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=r.value,i={"--n-bezier":t};return e.inverted?(i[`--n-color`]=n.headerColorInverted,i[`--n-text-color`]=n.textColorInverted,i[`--n-border-color`]=n.headerBorderColorInverted):(i[`--n-color`]=n.headerColor,i[`--n-text-color`]=n.textColor,i[`--n-border-color`]=n.headerBorderColor),i}),a=n?L(`layout-header`,F(()=>e.inverted?`a`:`b`),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),H(`div`,{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Re=u(`layout-sider`,`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[w(`bordered`,[l(`border`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),l(`left-placement`,[w(`bordered`,[l(`border`,`
 right: 0;
 `)])]),w(`right-placement`,`
 justify-content: flex-start;
 `,[w(`bordered`,[l(`border`,`
 left: 0;
 `)]),w(`collapsed`,[u(`layout-toggle-button`,[u(`base-icon`,`
 transform: rotate(180deg);
 `)]),u(`layout-toggle-bar`,[s(`&:hover`,[l(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),l(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])])]),u(`layout-toggle-button`,`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[u(`base-icon`,`
 transform: rotate(0);
 `)]),u(`layout-toggle-bar`,`
 left: -28px;
 transform: rotate(180deg);
 `,[s(`&:hover`,[l(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),l(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})])])]),w(`collapsed`,[u(`layout-toggle-bar`,[s(`&:hover`,[l(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),l(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])]),u(`layout-toggle-button`,[u(`base-icon`,`
 transform: rotate(0);
 `)])]),u(`layout-toggle-button`,`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[u(`base-icon`,`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),u(`layout-toggle-bar`,`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[l(`top, bottom`,`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),l(`bottom`,`
 position: absolute;
 top: 34px;
 `),s(`&:hover`,[l(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),l(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})]),l(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color)`}),s(`&:hover`,[l(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color-hover)`})])]),l(`border`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),u(`layout-sider-scroll-container`,`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),w(`show-content`,[u(`layout-sider-scroll-container`,{opacity:1})]),w(`absolute-positioned`,`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ze=g({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return H(`div`,{onClick:this.onClick,class:`${e}-layout-toggle-bar`},H(`div`,{class:`${e}-layout-toggle-bar__top`}),H(`div`,{class:`${e}-layout-toggle-bar__bottom`}))}}),Be=g({name:`LayoutToggleButton`,props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return H(`div`,{class:`${e}-layout-toggle-button`,onClick:this.onClick},H(n,{clsPrefix:e},{default:()=>H(he,null)}))}}),Ve={position:Oe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:``},collapseMode:{type:String,default:`transform`},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},He=g({name:`LayoutSider`,props:Object.assign(Object.assign({},v.props),Ve),setup(e){let t=y(je),n=c(null),r=c(null),i=c(e.defaultCollapsed),o=me(S(e,`collapsed`),i),s=F(()=>J(o.value?e.collapsedWidth:e.width)),l=F(()=>e.collapseMode===`transform`?{minWidth:J(e.width)}:{}),u=F(()=>t?t.siderPlacement:`left`);function d(t,i){if(e.nativeScrollbar){let{value:e}=n;e&&(i===void 0?e.scrollTo(t):e.scrollTo(t,i))}else{let{value:e}=r;e&&e.scrollTo(t,i)}}function f(){let{"onUpdate:collapsed":t,onUpdateCollapsed:n,onExpand:r,onCollapse:a}=e,{value:s}=o;n&&V(n,!s),t&&V(t,!s),i.value=!s,s?r&&V(r):a&&V(a)}let p=0,m=0,h=t=>{var n;let r=t.target;p=r.scrollLeft,m=r.scrollTop,(n=e.onScroll)==null||n.call(e,t)};b(()=>{if(e.nativeScrollbar){let e=n.value;e&&(e.scrollTop=m,e.scrollLeft=p)}}),a(De,{collapsedRef:o,collapseModeRef:S(e,`collapseMode`)});let{mergedClsPrefixRef:g,inlineThemeDisabled:_}=z(e),x=v(`Layout`,`-layout-sider`,Re,Ee,e,g);function C(t){var n,r;t.propertyName===`max-width`&&(o.value?(n=e.onAfterLeave)==null||n.call(e):(r=e.onAfterEnter)==null||r.call(e))}let w={scrollTo:d},T=F(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=x.value,{siderToggleButtonColor:r,siderToggleButtonBorder:i,siderToggleBarColor:a,siderToggleBarColorHover:o}=n,s={"--n-bezier":t,"--n-toggle-button-color":r,"--n-toggle-button-border":i,"--n-toggle-bar-color":a,"--n-toggle-bar-color-hover":o};return e.inverted?(s[`--n-color`]=n.siderColorInverted,s[`--n-text-color`]=n.textColorInverted,s[`--n-border-color`]=n.siderBorderColorInverted,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColorInverted,s.__invertScrollbar=n.__invertScrollbar):(s[`--n-color`]=n.siderColor,s[`--n-text-color`]=n.textColor,s[`--n-border-color`]=n.siderBorderColor,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColor),s}),E=_?L(`layout-sider`,F(()=>e.inverted?`a`:`b`),T,e):void 0;return Object.assign({scrollableElRef:n,scrollbarInstRef:r,mergedClsPrefix:g,mergedTheme:x,styleMaxWidth:s,mergedCollapsed:o,scrollContainerStyle:l,siderPlacement:u,handleNativeElScroll:h,handleTransitionend:C,handleTriggerClick:f,inlineThemeDisabled:_,cssVars:T,themeClass:E?.themeClass,onRender:E?.onRender},w)},render(){var e;let{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:r}=this;return(e=this.onRender)==null||e.call(this),H(`aside`,{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:J(this.width)}]},this.nativeScrollbar?H(`div`,{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:`auto`},this.contentStyle],ref:`scrollableElRef`},this.$slots):H(k,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar===`true`?{colorHover:`rgba(255, 255, 255, .4)`,color:`rgba(255, 255, 255, .3)`}:void 0}),this.$slots),r?H(r===`bar`?ze:Be,{clsPrefix:t,class:n?this.collapsedTriggerClass:this.triggerClass,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?H(`div`,{class:`${t}-layout-sider__border`}):null)}}),Z=r(`n-menu`),Ue=r(`n-submenu`),We=r(`n-menu-item-group`),Ge=[s(`&::before`,`background-color: var(--n-item-color-hover);`),l(`arrow`,`
 color: var(--n-arrow-color-hover);
 `),l(`icon`,`
 color: var(--n-item-icon-color-hover);
 `),u(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover);
 `,[s(`a`,`
 color: var(--n-item-text-color-hover);
 `),l(`extra`,`
 color: var(--n-item-text-color-hover);
 `)])],Ke=[l(`icon`,`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover-horizontal);
 `,[s(`a`,`
 color: var(--n-item-text-color-hover-horizontal);
 `),l(`extra`,`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],qe=s([u(`menu`,`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[w(`horizontal`,`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[u(`submenu`,`margin: 0;`),u(`menu-item`,`margin: 0;`),u(`menu-item-content`,`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[s(`&::before`,`display: none;`),w(`selected`,`border-bottom: 2px solid var(--n-border-color-horizontal)`)]),u(`menu-item-content`,[w(`selected`,[l(`icon`,`color: var(--n-item-icon-color-active-horizontal);`),u(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-horizontal);
 `,[s(`a`,`color: var(--n-item-text-color-active-horizontal);`),l(`extra`,`color: var(--n-item-text-color-active-horizontal);`)])]),w(`child-active`,`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[u(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[s(`a`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `),l(`extra`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),l(`icon`,`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),C(`disabled`,[C(`selected, child-active`,[s(`&:focus-within`,Ke)]),w(`selected`,[Q(null,[l(`icon`,`color: var(--n-item-icon-color-active-hover-horizontal);`),u(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[s(`a`,`color: var(--n-item-text-color-active-hover-horizontal);`),l(`extra`,`color: var(--n-item-text-color-active-hover-horizontal);`)])])]),w(`child-active`,[Q(null,[l(`icon`,`color: var(--n-item-icon-color-child-active-hover-horizontal);`),u(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[s(`a`,`color: var(--n-item-text-color-child-active-hover-horizontal);`),l(`extra`,`color: var(--n-item-text-color-child-active-hover-horizontal);`)])])]),Q(`border-bottom: 2px solid var(--n-border-color-horizontal);`,Ke)]),u(`menu-item-content-header`,[s(`a`,`color: var(--n-item-text-color-horizontal);`)])])]),C(`responsive`,[u(`menu-item-content-header`,`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),w(`collapsed`,[u(`menu-item-content`,[w(`selected`,[s(`&::before`,`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),u(`menu-item-content-header`,`opacity: 0;`),l(`arrow`,`opacity: 0;`),l(`icon`,`color: var(--n-item-icon-color-collapsed);`)])]),u(`menu-item`,`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),u(`menu-item-content`,`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s(`> *`,`z-index: 1;`),s(`&::before`,`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),w(`disabled`,`
 opacity: .45;
 cursor: not-allowed;
 `),w(`collapsed`,[l(`arrow`,`transform: rotate(0);`)]),w(`selected`,[s(`&::before`,`background-color: var(--n-item-color-active);`),l(`arrow`,`color: var(--n-arrow-color-active);`),l(`icon`,`color: var(--n-item-icon-color-active);`),u(`menu-item-content-header`,`
 color: var(--n-item-text-color-active);
 `,[s(`a`,`color: var(--n-item-text-color-active);`),l(`extra`,`color: var(--n-item-text-color-active);`)])]),w(`child-active`,[u(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active);
 `,[s(`a`,`
 color: var(--n-item-text-color-child-active);
 `),l(`extra`,`
 color: var(--n-item-text-color-child-active);
 `)]),l(`arrow`,`
 color: var(--n-arrow-color-child-active);
 `),l(`icon`,`
 color: var(--n-item-icon-color-child-active);
 `)]),C(`disabled`,[C(`selected, child-active`,[s(`&:focus-within`,Ge)]),w(`selected`,[Q(null,[l(`arrow`,`color: var(--n-arrow-color-active-hover);`),l(`icon`,`color: var(--n-item-icon-color-active-hover);`),u(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover);
 `,[s(`a`,`color: var(--n-item-text-color-active-hover);`),l(`extra`,`color: var(--n-item-text-color-active-hover);`)])])]),w(`child-active`,[Q(null,[l(`arrow`,`color: var(--n-arrow-color-child-active-hover);`),l(`icon`,`color: var(--n-item-icon-color-child-active-hover);`),u(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover);
 `,[s(`a`,`color: var(--n-item-text-color-child-active-hover);`),l(`extra`,`color: var(--n-item-text-color-child-active-hover);`)])])]),w(`selected`,[Q(null,[s(`&::before`,`background-color: var(--n-item-color-active-hover);`)])]),Q(null,Ge)]),l(`icon`,`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),l(`arrow`,`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),u(`menu-item-content-header`,`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[s(`a`,`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[s(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),l(`extra`,`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),u(`submenu`,`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[u(`menu-item-content`,`
 height: var(--n-item-height);
 `),u(`submenu-children`,`
 overflow: hidden;
 padding: 0;
 `,[fe({duration:`.2s`})])]),u(`menu-item-group`,[u(`menu-item-group-title`,`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),u(`menu-tooltip`,[s(`a`,`
 color: inherit;
 text-decoration: none;
 `)]),u(`menu-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Q(e,t){return[w(`hover`,e,t),s(`&:hover`,e,t)]}var Je=g({name:`MenuOptionContent`,props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){let{props:t}=y(Z);return{menuProps:t,style:F(()=>{let{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:F(()=>{let{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){let{clsPrefix:e,tmNode:t,menuProps:{renderIcon:r,renderLabel:i,renderExtra:a,expandIcon:o}}=this,s=r?r(t.rawNode):X(this.icon);return H(`div`,{onClick:e=>{var t;(t=this.onClick)==null||t.call(this,e)},role:`none`,class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&H(`div`,{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:`none`},[s]),H(`div`,{class:`${e}-menu-item-content-header`,role:`none`},this.isEllipsisPlaceholder?this.title:i?i(t.rawNode):X(this.title),this.extra||a?H(`span`,{class:`${e}-menu-item-content-header__extra`},` `,a?a(t.rawNode):X(this.extra)):null),this.showArrow?H(n,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>o?o(t.rawNode):H(we,null)}):null)}}),Ye=8;function $(e){let t=y(Z),{props:n,mergedCollapsedRef:r}=t,i=y(Ue,null),a=y(We,null),o=F(()=>n.mode===`horizontal`),s=F(()=>o.value?n.dropdownPlacement:`tmNodes`in e?`right-start`:`right`),c=F(()=>Math.max(n.collapsedIconSize??n.iconSize,n.iconSize));return{dropdownPlacement:s,activeIconSize:F(()=>!o.value&&e.root&&r.value?n.collapsedIconSize??n.iconSize:n.iconSize),maxIconSize:c,paddingLeft:F(()=>{if(o.value)return;let{collapsedWidth:t,indent:s,rootIndent:l}=n,{root:u,isGroup:d}=e,f=l===void 0?s:l;return u?r.value?t/2-c.value/2:f:a&&typeof a.paddingLeftRef.value==`number`?s/2+a.paddingLeftRef.value:i&&typeof i.paddingLeftRef.value==`number`?(d?s/2:s)+i.paddingLeftRef.value:0}),iconMarginRight:F(()=>{let{collapsedWidth:t,indent:i,rootIndent:a}=n,{value:s}=c,{root:l}=e;return o.value||!l||!r.value?Ye:(a===void 0?i:a)+s+Ye-(t+s)/2}),NMenu:t,NSubmenu:i,NMenuOptionGroup:a}}var Xe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ze=g({name:`MenuDivider`,setup(){let{mergedClsPrefixRef:e,isHorizontalRef:t}=y(Z);return()=>t.value?null:H(`div`,{class:`${e.value}-menu-divider`})}}),Qe=Object.assign(Object.assign({},Xe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),$e=D(Qe),et=g({name:`MenuOption`,props:Qe,setup(e){let t=$(e),{NSubmenu:n,NMenu:r,NMenuOptionGroup:i}=t,{props:a,mergedClsPrefixRef:o,mergedCollapsedRef:s}=r,c=n?n.mergedDisabledRef:i?i.mergedDisabledRef:{value:!1},l=F(()=>c.value||e.disabled);function u(t){let{onClick:n}=e;n&&n(t)}function d(t){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),u(t))}return{mergedClsPrefix:o,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:N(()=>e.root&&s.value&&a.mode!==`horizontal`&&!l.value),selected:N(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:d}},render(){let{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:r,nodeProps:i}}=this,a=i?.(n.rawNode);return H(`div`,Object.assign({},a,{role:`menuitem`,class:[`${e}-menu-item`,a?.class]}),H(ce,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:`hover`,placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:[`menu-tooltip`]},{default:()=>r?r(n.rawNode):X(this.title),trigger:()=>H(Je,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),tt=Object.assign(Object.assign({},Xe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),nt=D(tt),rt=g({name:`MenuOptionGroup`,props:tt,setup(e){let t=$(e),{NSubmenu:n}=t,r=F(()=>n?.mergedDisabledRef.value?!0:e.tmNode.disabled);a(We,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:r});let{mergedClsPrefixRef:i,props:o}=y(Z);return function(){let{value:n}=i,r=t.paddingLeft.value,{nodeProps:a}=o,s=a?.(e.tmNode.rawNode);return H(`div`,{class:`${n}-menu-item-group`,role:`group`},H(`div`,Object.assign({},s,{class:[`${n}-menu-item-group-title`,s?.class],style:[s?.style||``,r===void 0?``:`padding-left: ${r}px;`]}),X(e.title),e.extra?H(re,null,` `,X(e.extra)):null),H(`div`,null,e.tmNodes.map(e=>ot(e,o))))}}});function it(e){return e.type===`divider`||e.type===`render`}function at(e){return e.type===`divider`}function ot(e,t){let{rawNode:n}=e,{show:r}=n;if(r===!1)return null;if(it(n))return at(n)?H(Ze,Object.assign({key:e.key},n.props)):null;let{labelField:i}=t,{key:a,level:o,isGroup:s}=e,c=Object.assign(Object.assign({},n),{title:n.title||n[i],extra:n.titleExtra||n.extra,key:a,internalKey:a,level:o,root:o===0,isGroup:s});return e.children?e.isGroup?H(rt,q(c,nt,{tmNode:e,tmNodes:e.children,key:a})):H(lt,q(c,ct,{key:a,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):H(et,q(c,$e,{key:a,tmNode:e}))}var st=Object.assign(Object.assign({},Xe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),ct=D(st),lt=g({name:`Submenu`,props:st,setup(e){let t=$(e),{NMenu:n,NSubmenu:r}=t,{props:i,mergedCollapsedRef:o,mergedThemeRef:s}=n,l=F(()=>{let{disabled:t}=e;return r?.mergedDisabledRef.value||i.disabled?!0:t}),u=c(!1);a(Ue,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:l}),a(We,null);function d(){let{onClick:t}=e;t&&t()}function f(){l.value||(o.value||n.toggleExpand(e.internalKey),d())}function p(e){u.value=e}return{menuProps:i,mergedTheme:s,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:u,paddingLeft:t.paddingLeft,mergedDisabled:l,mergedValue:n.mergedValueRef,childActive:N(()=>e.virtualChildActive??n.activePathRef.value.includes(e.internalKey)),collapsed:F(()=>i.mode===`horizontal`?!1:o.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:F(()=>!l.value&&(i.mode===`horizontal`||o.value)),handlePopoverShowChange:p,handleClick:f}},render(){let{mergedClsPrefix:e,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{let{isHorizontal:e,paddingLeft:t,collapsed:n,mergedDisabled:r,maxIconSize:i,activeIconSize:a,title:o,childActive:s,icon:c,handleClick:l,menuProps:{nodeProps:u},dropdownShow:d,iconMarginRight:f,tmNode:p,mergedClsPrefix:m,isEllipsisPlaceholder:h,extra:g}=this,_=u?.(p.rawNode);return H(`div`,Object.assign({},_,{class:[`${m}-menu-item`,_?.class],role:`menuitem`}),H(Je,{tmNode:p,paddingLeft:t,collapsed:n,disabled:r,iconMarginRight:f,maxIconSize:i,activeIconSize:a,title:o,extra:g,showArrow:!e,childActive:s,clsPrefix:m,icon:c,hover:d,onClick:l,isEllipsisPlaceholder:h}))},i=()=>H(ae,null,{default:()=>{let{tmNodes:t,collapsed:n}=this;return n?null:H(`div`,{class:`${e}-submenu-children`,role:`menu`},t.map(e=>ot(e,this.menuProps)))}});return this.root?H(ge,Object.assign({size:`large`,trigger:`hover`},this.menuProps?.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:`14px`,optionIconSizeLarge:`18px`},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>H(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):H(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),ut=g({name:`Menu`,inheritAttrs:!1,props:Object.assign(Object.assign({},v.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},disabledField:{type:String,default:`disabled`},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:`vertical`},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:`bottom`},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=z(e),i=v(`Menu`,`-menu`,qe,xe,e,n),o=y(De,null),s=F(()=>{let{collapsed:t}=e;if(t!==void 0)return t;if(o){let{collapseModeRef:e,collapsedRef:t}=o;if(e.value===`width`)return t.value??!1}return!1}),l=F(()=>{let{keyField:t,childrenField:n,disabledField:r}=e;return K(e.items||e.options,{getIgnored(e){return it(e)},getChildren(e){return e[n]},getDisabled(e){return e[r]},getKey(e){return e[t]??e.name}})}),u=F(()=>new Set(l.value.treeNodes.map(e=>e.key))),{watchProps:d}=e,p=c(null);d?.includes(`defaultValue`)?t(()=>{p.value=e.defaultValue}):p.value=e.defaultValue;let m=me(S(e,`value`),p),h=c([]),g=()=>{h.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(m.value,{includeSelf:!1}).keyPath};d?.includes(`defaultExpandedKeys`)?t(g):g();let _=se(e,[`expandedNames`,`expandedKeys`]),b=me(_,h),x=F(()=>l.value.treeNodes),C=F(()=>l.value.getPath(m.value).keyPath);a(Z,{props:e,mergedCollapsedRef:s,mergedThemeRef:i,mergedValueRef:m,mergedExpandedKeysRef:b,activePathRef:C,mergedClsPrefixRef:n,isHorizontalRef:F(()=>e.mode===`horizontal`),invertedRef:S(e,`inverted`),doSelect:w,toggleExpand:E});function w(t,n){let{"onUpdate:value":r,onUpdateValue:i,onSelect:a}=e;i&&V(i,t,n),r&&V(r,t,n),a&&V(a,t,n),p.value=t}function T(t){let{"onUpdate:expandedKeys":n,onUpdateExpandedKeys:r,onExpandedNamesChange:i,onOpenNamesChange:a}=e;n&&V(n,t),r&&V(r,t),i&&V(i,t),a&&V(a,t),h.value=t}function E(t){let n=Array.from(b.value),r=n.findIndex(e=>e===t);if(~r)n.splice(r,1);else{if(e.accordion&&u.value.has(t)){let e=n.findIndex(e=>u.value.has(e));e>-1&&n.splice(e,1)}n.push(t)}T(n)}let D=t=>{let n=l.value.getPath(t??m.value,{includeSelf:!1}).keyPath;if(!n.length)return;let r=Array.from(b.value),i=new Set([...r,...n]);e.accordion&&u.value.forEach(e=>{i.has(e)&&!n.includes(e)&&i.delete(e)}),T(Array.from(i))},ee=F(()=>{let{inverted:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=i.value,{borderRadius:a,borderColorHorizontal:o,fontSize:s,itemHeight:c,dividerColor:l}=r,u={"--n-divider-color":l,"--n-bezier":n,"--n-font-size":s,"--n-border-color-horizontal":o,"--n-border-radius":a,"--n-item-height":c};return t?(u[`--n-group-text-color`]=r.groupTextColorInverted,u[`--n-color`]=r.colorInverted,u[`--n-item-text-color`]=r.itemTextColorInverted,u[`--n-item-text-color-hover`]=r.itemTextColorHoverInverted,u[`--n-item-text-color-active`]=r.itemTextColorActiveInverted,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHoverInverted,u[`--n-item-icon-color`]=r.itemIconColorInverted,u[`--n-item-icon-color-hover`]=r.itemIconColorHoverInverted,u[`--n-item-icon-color-active`]=r.itemIconColorActiveInverted,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHoverInverted,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActiveInverted,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHoverInverted,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsedInverted,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontalInverted,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontalInverted,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontalInverted,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontalInverted,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontalInverted,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontalInverted,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontalInverted,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontalInverted,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontalInverted,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontalInverted,u[`--n-arrow-color`]=r.arrowColorInverted,u[`--n-arrow-color-hover`]=r.arrowColorHoverInverted,u[`--n-arrow-color-active`]=r.arrowColorActiveInverted,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHoverInverted,u[`--n-arrow-color-child-active`]=r.arrowColorChildActiveInverted,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHoverInverted,u[`--n-item-color-hover`]=r.itemColorHoverInverted,u[`--n-item-color-active`]=r.itemColorActiveInverted,u[`--n-item-color-active-hover`]=r.itemColorActiveHoverInverted,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsedInverted):(u[`--n-group-text-color`]=r.groupTextColor,u[`--n-color`]=r.color,u[`--n-item-text-color`]=r.itemTextColor,u[`--n-item-text-color-hover`]=r.itemTextColorHover,u[`--n-item-text-color-active`]=r.itemTextColorActive,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActive,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveHover,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHover,u[`--n-item-icon-color`]=r.itemIconColor,u[`--n-item-icon-color-hover`]=r.itemIconColorHover,u[`--n-item-icon-color-active`]=r.itemIconColorActive,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHover,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActive,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHover,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsed,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontal,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontal,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontal,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontal,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontal,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontal,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontal,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontal,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontal,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontal,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontal,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontal,u[`--n-arrow-color`]=r.arrowColor,u[`--n-arrow-color-hover`]=r.arrowColorHover,u[`--n-arrow-color-active`]=r.arrowColorActive,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHover,u[`--n-arrow-color-child-active`]=r.arrowColorChildActive,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHover,u[`--n-item-color-hover`]=r.itemColorHover,u[`--n-item-color-active`]=r.itemColorActive,u[`--n-item-color-active-hover`]=r.itemColorActiveHover,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsed),u}),O=r?L(`menu`,F(()=>e.inverted?`a`:`b`),ee,e):void 0,k=f(),A=c(null),j=c(null),M=!0,te=()=>{var e;M?M=!1:(e=A.value)==null||e.sync({showAllItemsBeforeCalculate:!0})};function N(){return document.getElementById(k)}let P=c(-1);function I(t){P.value=e.options.length-t}function R(e){e||(P.value=-1)}let ne=F(()=>{let t=P.value;return{children:t===-1?[]:e.options.slice(t)}}),re=F(()=>{let{childrenField:t,disabledField:n,keyField:r}=e;return K([ne.value],{getIgnored(e){return it(e)},getChildren(e){return e[t]},getDisabled(e){return e[n]},getKey(e){return e[r]??e.name}})}),B=F(()=>K([{}]).treeNodes[0]);function ie(){if(P.value===-1)return H(lt,{root:!0,level:0,key:`__ellpisisGroupPlaceholder__`,internalKey:`__ellpisisGroupPlaceholder__`,title:`···`,tmNode:B.value,domId:k,isEllipsisPlaceholder:!0});let e=re.value.treeNodes[0],t=C.value;return H(lt,{level:0,root:!0,key:`__ellpisisGroup__`,internalKey:`__ellpisisGroup__`,title:`···`,virtualChildActive:!!e.children?.some(e=>t.includes(e.key)),tmNode:e,domId:k,rawNodes:e.rawNode.children||[],tmNodes:e.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:n,controlledExpandedKeys:_,uncontrolledExpanededKeys:h,mergedExpandedKeys:b,uncontrolledValue:p,mergedValue:m,activePath:C,tmNodes:x,mergedTheme:i,mergedCollapsed:s,cssVars:r?void 0:ee,themeClass:O?.themeClass,overflowRef:A,counterRef:j,updateCounter:()=>{},onResize:te,onUpdateOverflow:R,onUpdateCount:I,renderCounter:ie,getCounter:N,onRender:O?.onRender,showOption:D,deriveResponsiveState:te}},render(){let{mergedClsPrefix:e,mode:t,themeClass:n,onRender:r}=this;r?.();let a=()=>this.tmNodes.map(e=>ot(e,this.$props)),o=t===`horizontal`&&this.responsive,s=()=>H(`div`,i(this.$attrs,{role:t===`horizontal`?`menubar`:`menu`,class:[`${e}-menu`,n,`${e}-menu--${t}`,o&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),o?H(ue,{ref:`overflowRef`,onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:a,counter:this.renderCounter}):a());return o?H(_,{onResize:this.onResize},{default:s}):s()}}),dt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},ft=g({name:`GitNetworkOutline`,render:function(e,t){return m(),B(`svg`,dt,t[0]||=[W(`<circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="256" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 256v112"></path><circle cx="384" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M128 144c0 74.67 68.92 112 128 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M384 144c0 74.67-68.92 112-128 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>`,6)])}}),pt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},mt=g({name:`GridOutline`,render:function(e,t){return m(),B(`svg`,pt,t[0]||=[M(`rect`,{x:`48`,y:`48`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),M(`rect`,{x:`288`,y:`48`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),M(`rect`,{x:`48`,y:`288`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),M(`rect`,{x:`288`,y:`288`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),ht={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},gt=g({name:`LanguageOutline`,render:function(e,t){return m(),B(`svg`,ht,t[0]||=[W(`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 112h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 64v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 448l96-224l96 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M301.5 384h133"></path><path d="M281.3 112S257 206 199 277S80 384 80 384" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M256 336s-35-27-72-75s-56-85-56-85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>`,6)])}}),_t={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},vt=g({name:`LinkOutline`,render:function(e,t){return m(),B(`svg`,_t,t[0]||=[M(`path`,{d:`M208 352h-64a96 96 0 0 1 0-192h64`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`36`},null,-1),M(`path`,{d:`M304 160h64a96 96 0 0 1 0 192h-64`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`36`},null,-1),M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`36`,d:`M163.29 256h187.42`},null,-1)])}}),yt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},bt=g({name:`LogOutOutline`,render:function(e,t){return m(),B(`svg`,yt,t[0]||=[M(`path`,{d:`M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 336l80-80l-80-80`},null,-1),M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 256h256`},null,-1)])}}),xt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},St=g({name:`MenuOutline`,render:function(e,t){return m(),B(`svg`,xt,t[0]||=[M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`,d:`M80 160h352`},null,-1),M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`,d:`M80 256h352`},null,-1),M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`,d:`M80 352h352`},null,-1)])}}),Ct={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},wt=g({name:`OptionsOutline`,render:function(e,t){return m(),B(`svg`,Ct,t[0]||=[W(`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 128h80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 128h240"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 384h80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 384h240"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 256h240"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 256h80"></path><circle cx="336" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="176" cy="256" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="336" cy="384" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>`,9)])}}),Tt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Et=g({name:`PersonCircleOutline`,render:function(e,t){return m(),B(`svg`,Tt,t[0]||=[M(`path`,{d:`M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 0 1-6.14-.32a124.27 124.27 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25z`,fill:`currentColor`},null,-1),M(`path`,{d:`M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z`,fill:`currentColor`},null,-1)])}}),Dt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ot=g({name:`SettingsOutline`,render:function(e,t){return m(),B(`svg`,Dt,t[0]||=[M(`path`,{d:`M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),kt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},At=g({name:`SwapHorizontalOutline`,render:function(e,t){return m(),B(`svg`,kt,t[0]||=[M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M304 48l112 112l-112 112`},null,-1),M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M398.87 160H96`},null,-1),M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M208 464L96 352l112-112`},null,-1),M(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M114 352h302`},null,-1)])}}),jt=[`href`],Mt={key:0,style:{"margin-left":`4px`}},Nt=760,Pt=pe(g({__name:`MainLayout`,setup(t){let n=te(),r=ee(),{t:i}=ne(),a=c(``),o=c(``),s=c(``),l=c(null),u,f=c(!1),g=c(!1);function _(){f.value=window.innerWidth<Nt}oe(()=>n.path,()=>g.value=!1);function v(e){return()=>H(G,null,{default:()=>H(e)})}let y=F(()=>[{label:()=>H(R,{to:`/`},{default:()=>i(`menu.dashboard`)}),key:`/`,icon:v(mt)},{label:()=>H(R,{to:`/users`},{default:()=>i(`menu.users`)}),key:`/users`,icon:v(Ce)},{label:()=>H(R,{to:`/network`},{default:()=>i(`menu.network`)}),key:`/network`,icon:v(ft)},{label:()=>H(R,{to:`/outbounds`},{default:()=>i(`menu.outbounds`)}),key:`/outbounds`,icon:v(At)},{label:()=>H(R,{to:`/chain`},{default:()=>i(`menu.chain`)}),key:`/chain`,icon:v(vt)},{label:()=>H(R,{to:`/advanced`},{default:()=>i(`menu.advanced`)}),key:`/advanced`,icon:v(wt)},{label:()=>H(R,{to:`/settings`},{default:()=>i(`menu.settings`)}),key:`/settings`,icon:v(Ot)}]),b=F(()=>o.value===`RUNNING`?`success`:o.value===`IDLE`?`warning`:o.value?`error`:`default`),S=F(()=>[{label:i(`layout.logout`),key:`logout`,icon:v(bt)}]),C=Se.map(e=>({label:e.label,key:e.code}));async function w(){try{let e=await Y.get(`/api/dashboard`);o.value=e.mitaStatus,s.value=e.mitaVersion}catch{}}d(async()=>{try{let e=await Y.get(`/api/me`);a.value=e.username}catch{}w(),u=window.setInterval(()=>{document.hidden||w()},8e3);try{l.value=await Y.get(`/api/version`)}catch{}_(),window.addEventListener(`resize`,_)}),p(()=>{window.clearInterval(u),window.removeEventListener(`resize`,_)});async function D(e){if(e===`logout`)try{await Y.post(`/api/logout`)}finally{r.push(`/login`)}}return(t,r)=>{let c=h(`router-view`);return m(),j(T(Ne),{position:`absolute`,"has-sider":!f.value},{default:x(()=>[f.value?E(``,!0):(m(),j(T(He),{key:0,bordered:``,"collapsed-width":64,width:220,"collapse-mode":`width`,"show-trigger":`bar`},{default:x(()=>[r[3]||=M(`div`,{class:`brand`},[M(`span`,{class:`dot`}),M(`span`,{class:`name`},`Mieru Web UI`)],-1),U(T(ut),{value:T(n).path,options:y.value,indent:20},null,8,[`value`,`options`])]),_:1})),U(T(Ne),null,{default:x(()=>[U(T(Le),{bordered:``,class:`header`},{default:x(()=>[U(T(le),{align:`center`,size:f.value?6:10,wrap:!1},{default:x(()=>[f.value?(m(),j(T(I),{key:0,quaternary:``,circle:``,onClick:r[0]||=e=>g.value=!0},{icon:x(()=>[U(T(G),{component:T(St)},null,8,[`component`])]),_:1})):E(``,!0),U(T(de),{type:b.value,size:`small`,round:``},{default:x(()=>[O(e(o.value||`…`),1)]),_:1},8,[`type`]),s.value&&!f.value?(m(),j(T(ye),{key:1,depth:`3`,style:{"font-size":`12px`}},{default:x(()=>[O(`mita v`+e(s.value),1)]),_:1})):E(``,!0),l.value&&!f.value?(m(),j(T(ye),{key:2,depth:`3`,style:{"font-size":`12px`}},{default:x(()=>[O(` · panel `+e(l.value.current===`dev`?`dev`:l.value.current),1)]),_:1})):E(``,!0),l.value?.updateAvailable?(m(),B(`a`,{key:3,href:l.value.releaseUrl,target:`_blank`,rel:`noopener noreferrer`,class:`update-link`},[U(T(de),{size:`small`,type:`success`,round:``,bordered:!1},{default:x(()=>[O(e(T(i)(`layout.updateAvailable`,{v:l.value.latest})),1)]),_:1})],8,jt)):E(``,!0)]),_:1},8,[`size`]),U(T(le),{align:`center`,size:14,wrap:!1},{default:x(()=>[U(T(ge),{options:T(C),onSelect:r[1]||=e=>T(be)(e),trigger:`click`},{default:x(()=>[U(T(I),{text:``,style:{"font-size":`18px`}},{icon:x(()=>[U(T(G),{component:T(gt)},null,8,[`component`])]),_:1})]),_:1},8,[`options`]),U(T(ge),{options:S.value,onSelect:D,trigger:`click`},{default:x(()=>[U(T(I),{text:``,focusable:!1},{icon:x(()=>[U(T(G),{component:T(Et)},null,8,[`component`])]),default:x(()=>[f.value?E(``,!0):(m(),B(`span`,Mt,e(a.value||`admin`),1))]),_:1})]),_:1},8,[`options`])]),_:1})]),_:1}),U(T(Pe),{class:`content`,"content-style":`padding: ${f.value?16:24}px; max-width: 1100px; margin: 0 auto;`},{default:x(()=>[U(c)]),_:1},8,[`content-style`])]),_:1}),U(T(_e),{show:g.value,"onUpdate:show":r[2]||=e=>g.value=e,width:240,placement:`left`},{default:x(()=>[U(T(ve),{"native-scrollbar":!1,"body-content-style":`padding: 0`},{default:x(()=>[r[4]||=M(`div`,{class:`brand`},[M(`span`,{class:`dot`}),M(`span`,{class:`name`},`Mieru Web UI`)],-1),U(T(ut),{value:T(n).path,options:y.value,indent:20},null,8,[`value`,`options`])]),_:1})]),_:1},8,[`show`])]),_:1},8,[`has-sider`])}}}),[[`__scopeId`,`data-v-5111305c`]]);export{Pt as default};