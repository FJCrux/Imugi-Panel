import{d as N,i as s,j as lo,s as io,k as ao,l as Te,m as oe,n as u,p as I,S as Le,q as ie,v as W,x as $e,y as ae,z as x,r as L,A as Q,C as d,D as k,N as Ee,E as q,F as K,G as le,H as ee,I as so,J,K as we,L as fe,M as co,O as ce,P as uo,V as ho,Q as _e,R as vo,T as mo,U as po,o as E,c as V,W as ye,a as S,u as fo,X as go,Y as bo,Z as xo,_ as Ae,w as B,b as O,e as H,h as de,t as ue,$ as Co,a0 as wo,B as Oe,a1 as yo,a2 as ko,g as zo,a3 as X}from"./index-BuNiYHKx.js";import{f as he,u as ge,a as ve,_ as Io}from"./_plugin-vue_export-helper-D29iSuJO.js";import{N as So,u as Ro,a as Me,b as me}from"./Space-B5dQOTQD.js";import{C as No,N as be}from"./Dropdown-BYv92xLg.js";import{V as Po,c as pe,N as To}from"./Tag-BPOyTqmM.js";import{N as _o}from"./text-B3QF-0Fz.js";const Ao=N({name:"ChevronDownFilled",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Oo(e){const{baseColor:t,textColor2:o,bodyColor:i,cardColor:c,dividerColor:l,actionColor:h,scrollbarColor:m,scrollbarColorHover:a,invertedColor:b}=e;return{textColor:o,textColorInverted:"#FFF",color:i,colorEmbedded:h,headerColor:c,headerColorInverted:b,footerColor:h,footerColorInverted:b,headerBorderColor:l,headerBorderColorInverted:b,footerBorderColor:l,footerBorderColorInverted:b,siderBorderColor:l,siderBorderColorInverted:b,siderColor:c,siderColorInverted:b,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Te(i,m),siderToggleBarColorHover:Te(i,a),__invertScrollbar:"true"}}const ke=lo({name:"Layout",common:ao,peers:{Scrollbar:io},self:Oo}),Fe=oe("n-layout-sider"),ze={type:String,default:"static"},Mo=u("layout",`
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
`,[u("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),jo={embedded:Boolean,position:ze,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ke=oe("n-layout");function Ve(e){return N({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},W.props),jo),setup(t){const o=L(null),i=L(null),{mergedClsPrefixRef:c,inlineThemeDisabled:l}=ie(t),h=W("Layout","-layout",Mo,ke,t,c);function m(f,z){if(t.nativeScrollbar){const{value:_}=o;_&&(z===void 0?_.scrollTo(f):_.scrollTo(f,z))}else{const{value:_}=i;_&&_.scrollTo(f,z)}}Q(Ke,t);let a=0,b=0;const j=f=>{var z;const _=f.target;a=_.scrollLeft,b=_.scrollTop,(z=t.onScroll)===null||z===void 0||z.call(t,f)};$e(()=>{if(t.nativeScrollbar){const f=o.value;f&&(f.scrollTop=b,f.scrollLeft=a)}});const M={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:m},P=x(()=>{const{common:{cubicBezierEaseInOut:f},self:z}=h.value;return{"--n-bezier":f,"--n-color":t.embedded?z.colorEmbedded:z.color,"--n-text-color":z.textColor}}),T=l?ae("layout",x(()=>t.embedded?"e":""),P,t):void 0;return Object.assign({mergedClsPrefix:c,scrollableElRef:o,scrollbarInstRef:i,hasSiderStyle:M,mergedTheme:h,handleNativeElScroll:j,cssVars:l?void 0:P,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},p)},render(){var t;const{mergedClsPrefix:o,hasSider:i}=this;(t=this.onRender)===null||t===void 0||t.call(this);const c=i?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return s("div",{class:l,style:this.cssVars},this.nativeScrollbar?s("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,c],onScroll:this.handleNativeElScroll},this.$slots):s(Le,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,c]}),this.$slots))}})}const je=Ve(!1),Ho=Ve(!0),Bo=u("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),I("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Lo={position:ze,inverted:Boolean,bordered:{type:Boolean,default:!1}},$o=N({name:"LayoutHeader",props:Object.assign(Object.assign({},W.props),Lo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ie(e),i=W("Layout","-layout-header",Bo,ke,e,t),c=x(()=>{const{common:{cubicBezierEaseInOut:h},self:m}=i.value,a={"--n-bezier":h};return e.inverted?(a["--n-color"]=m.headerColorInverted,a["--n-text-color"]=m.textColorInverted,a["--n-border-color"]=m.headerBorderColorInverted):(a["--n-color"]=m.headerColor,a["--n-text-color"]=m.textColor,a["--n-border-color"]=m.headerBorderColor),a}),l=o?ae("layout-header",x(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Eo=u("layout-sider",`
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
`,[I("bordered",[d("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),d("left-placement",[I("bordered",[d("border",`
 right: 0;
 `)])]),I("right-placement",`
 justify-content: flex-start;
 `,[I("bordered",[d("border",`
 left: 0;
 `)]),I("collapsed",[u("layout-toggle-button",[u("base-icon",`
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",[k("&:hover",[d("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),d("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),u("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[u("base-icon",`
 transform: rotate(0);
 `)]),u("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[k("&:hover",[d("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),d("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),I("collapsed",[u("layout-toggle-bar",[k("&:hover",[d("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),d("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),u("layout-toggle-button",[u("base-icon",`
 transform: rotate(0);
 `)])]),u("layout-toggle-button",`
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
 `,[u("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[d("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),d("bottom",`
 position: absolute;
 top: 34px;
 `),k("&:hover",[d("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),d("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),d("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),k("&:hover",[d("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),d("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),u("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),I("show-content",[u("layout-sider-scroll-container",{opacity:1})]),I("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Fo=N({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},s("div",{class:`${e}-layout-toggle-bar__top`}),s("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Ko=N({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},s(Ee,{clsPrefix:e},{default:()=>s(No,null)}))}}),Vo={position:ze,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Do=N({name:"LayoutSider",props:Object.assign(Object.assign({},W.props),Vo),setup(e){const t=q(Ke),o=L(null),i=L(null),c=L(e.defaultCollapsed),l=ge(le(e,"collapsed"),c),h=x(()=>he(l.value?e.collapsedWidth:e.width)),m=x(()=>e.collapseMode!=="transform"?{}:{minWidth:he(e.width)}),a=x(()=>t?t.siderPlacement:"left");function b(A,w){if(e.nativeScrollbar){const{value:y}=o;y&&(w===void 0?y.scrollTo(A):y.scrollTo(A,w))}else{const{value:y}=i;y&&y.scrollTo(A,w)}}function j(){const{"onUpdate:collapsed":A,onUpdateCollapsed:w,onExpand:y,onCollapse:G}=e,{value:D}=l;w&&K(w,!D),A&&K(A,!D),c.value=!D,D?y&&K(y):G&&K(G)}let M=0,p=0;const P=A=>{var w;const y=A.target;M=y.scrollLeft,p=y.scrollTop,(w=e.onScroll)===null||w===void 0||w.call(e,A)};$e(()=>{if(e.nativeScrollbar){const A=o.value;A&&(A.scrollTop=p,A.scrollLeft=M)}}),Q(Fe,{collapsedRef:l,collapseModeRef:le(e,"collapseMode")});const{mergedClsPrefixRef:T,inlineThemeDisabled:f}=ie(e),z=W("Layout","-layout-sider",Eo,ke,e,T);function _(A){var w,y;A.propertyName==="max-width"&&(l.value?(w=e.onAfterLeave)===null||w===void 0||w.call(e):(y=e.onAfterEnter)===null||y===void 0||y.call(e))}const Y={scrollTo:b},U=x(()=>{const{common:{cubicBezierEaseInOut:A},self:w}=z.value,{siderToggleButtonColor:y,siderToggleButtonBorder:G,siderToggleBarColor:D,siderToggleBarColorHover:se}=w,$={"--n-bezier":A,"--n-toggle-button-color":y,"--n-toggle-button-border":G,"--n-toggle-bar-color":D,"--n-toggle-bar-color-hover":se};return e.inverted?($["--n-color"]=w.siderColorInverted,$["--n-text-color"]=w.textColorInverted,$["--n-border-color"]=w.siderBorderColorInverted,$["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColorInverted,$.__invertScrollbar=w.__invertScrollbar):($["--n-color"]=w.siderColor,$["--n-text-color"]=w.textColor,$["--n-border-color"]=w.siderBorderColor,$["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColor),$}),F=f?ae("layout-sider",x(()=>e.inverted?"a":"b"),U,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:i,mergedClsPrefix:T,mergedTheme:z,styleMaxWidth:h,mergedCollapsed:l,scrollContainerStyle:m,siderPlacement:a,handleNativeElScroll:P,handleTransitionend:_,handleTriggerClick:j,inlineThemeDisabled:f,cssVars:U,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender},Y)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:he(this.width)}]},this.nativeScrollbar?s("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):s(Le,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?s(Fo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):s(Ko,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?s("div",{class:`${t}-layout-sider__border`}):null)}}),te=oe("n-menu"),De=oe("n-submenu"),Ie=oe("n-menu-item-group"),He=[k("&::before","background-color: var(--n-item-color-hover);"),d("arrow",`
 color: var(--n-arrow-color-hover);
 `),d("icon",`
 color: var(--n-item-icon-color-hover);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[k("a",`
 color: var(--n-item-text-color-hover);
 `),d("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Be=[d("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[k("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),d("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Uo=k([u("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[I("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[u("submenu","margin: 0;"),u("menu-item","margin: 0;"),u("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[k("&::before","display: none;"),I("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),u("menu-item-content",[I("selected",[d("icon","color: var(--n-item-icon-color-active-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[k("a","color: var(--n-item-text-color-active-horizontal);"),d("extra","color: var(--n-item-text-color-active-horizontal);")])]),I("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[k("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),d("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),d("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ee("disabled",[ee("selected, child-active",[k("&:focus-within",Be)]),I("selected",[Z(null,[d("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[k("a","color: var(--n-item-text-color-active-hover-horizontal);"),d("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[Z(null,[d("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[k("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),d("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Z("border-bottom: 2px solid var(--n-border-color-horizontal);",Be)]),u("menu-item-content-header",[k("a","color: var(--n-item-text-color-horizontal);")])])]),ee("responsive",[u("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("collapsed",[u("menu-item-content",[I("selected",[k("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),u("menu-item-content-header","opacity: 0;"),d("arrow","opacity: 0;"),d("icon","color: var(--n-item-icon-color-collapsed);")])]),u("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),u("menu-item-content",`
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
 `,[k("> *","z-index: 1;"),k("&::before",`
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
 `),I("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),I("collapsed",[d("arrow","transform: rotate(0);")]),I("selected",[k("&::before","background-color: var(--n-item-color-active);"),d("arrow","color: var(--n-arrow-color-active);"),d("icon","color: var(--n-item-icon-color-active);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[k("a","color: var(--n-item-text-color-active);"),d("extra","color: var(--n-item-text-color-active);")])]),I("child-active",[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[k("a",`
 color: var(--n-item-text-color-child-active);
 `),d("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),d("arrow",`
 color: var(--n-arrow-color-child-active);
 `),d("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ee("disabled",[ee("selected, child-active",[k("&:focus-within",He)]),I("selected",[Z(null,[d("arrow","color: var(--n-arrow-color-active-hover);"),d("icon","color: var(--n-item-icon-color-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[k("a","color: var(--n-item-text-color-active-hover);"),d("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[Z(null,[d("arrow","color: var(--n-arrow-color-child-active-hover);"),d("icon","color: var(--n-item-icon-color-child-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[k("a","color: var(--n-item-text-color-child-active-hover);"),d("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[Z(null,[k("&::before","background-color: var(--n-item-color-active-hover);")])]),Z(null,He)]),d("icon",`
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
 `),d("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),u("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[k("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[k("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),d("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),u("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[u("menu-item-content",`
 height: var(--n-item-height);
 `),u("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[so({duration:".2s"})])]),u("menu-item-group",[u("menu-item-group-title",`
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
 `)])]),u("menu-tooltip",[k("a",`
 color: inherit;
 text-decoration: none;
 `)]),u("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Z(e,t){return[I("hover",e,t),k("&:hover",e,t)]}const Ue=N({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=q(te);return{menuProps:t,style:x(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:x(()=>{const{maxIconSize:o,activeIconSize:i,iconMarginRight:c}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${i}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:i,renderExtra:c,expandIcon:l}}=this,h=o?o(t.rawNode):J(this.icon);return s("div",{onClick:m=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,m)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},h&&s("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[h]),s("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:i?i(t.rawNode):J(this.title),this.extra||c?s("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(t.rawNode):J(this.extra)):null),this.showArrow?s(Ee,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):s(Ao,null)}):null)}}),ne=8;function Se(e){const t=q(te),{props:o,mergedCollapsedRef:i}=t,c=q(De,null),l=q(Ie,null),h=x(()=>o.mode==="horizontal"),m=x(()=>h.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=x(()=>{var p;return Math.max((p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize,o.iconSize)}),b=x(()=>{var p;return!h.value&&e.root&&i.value&&(p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize}),j=x(()=>{if(h.value)return;const{collapsedWidth:p,indent:P,rootIndent:T}=o,{root:f,isGroup:z}=e,_=T===void 0?P:T;return f?i.value?p/2-a.value/2:_:l&&typeof l.paddingLeftRef.value=="number"?P/2+l.paddingLeftRef.value:c&&typeof c.paddingLeftRef.value=="number"?(z?P/2:P)+c.paddingLeftRef.value:0}),M=x(()=>{const{collapsedWidth:p,indent:P,rootIndent:T}=o,{value:f}=a,{root:z}=e;return h.value||!z||!i.value?ne:(T===void 0?P:T)+f+ne-(p+f)/2});return{dropdownPlacement:m,activeIconSize:b,maxIconSize:a,paddingLeft:j,iconMarginRight:M,NMenu:t,NSubmenu:c,NMenuOptionGroup:l}}const Re={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Go=N({name:"MenuDivider",setup(){const e=q(te),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:s("div",{class:`${t.value}-menu-divider`})}}),Ge=Object.assign(Object.assign({},Re),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),qo=we(Ge),Wo=N({name:"MenuOption",props:Ge,setup(e){const t=Se(e),{NSubmenu:o,NMenu:i,NMenuOptionGroup:c}=t,{props:l,mergedClsPrefixRef:h,mergedCollapsedRef:m}=i,a=o?o.mergedDisabledRef:c?c.mergedDisabledRef:{value:!1},b=x(()=>a.value||e.disabled);function j(p){const{onClick:P}=e;P&&P(p)}function M(p){b.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),j(p))}return{mergedClsPrefix:h,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:l,dropdownEnabled:fe(()=>e.root&&m.value&&l.mode!=="horizontal"&&!b.value),selected:fe(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:b,handleClick:M}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:i,nodeProps:c}}=this,l=c==null?void 0:c(o.rawNode);return s("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),s(So,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(o.rawNode):J(this.title),trigger:()=>s(Ue,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),qe=Object.assign(Object.assign({},Re),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Yo=we(qe),Xo=N({name:"MenuOptionGroup",props:qe,setup(e){const t=Se(e),{NSubmenu:o}=t,i=x(()=>o!=null&&o.mergedDisabledRef.value?!0:e.tmNode.disabled);Q(Ie,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:i});const{mergedClsPrefixRef:c,props:l}=q(te);return function(){const{value:h}=c,m=t.paddingLeft.value,{nodeProps:a}=l,b=a==null?void 0:a(e.tmNode.rawNode);return s("div",{class:`${h}-menu-item-group`,role:"group"},s("div",Object.assign({},b,{class:[`${h}-menu-item-group-title`,b==null?void 0:b.class],style:[(b==null?void 0:b.style)||"",m!==void 0?`padding-left: ${m}px;`:""]}),J(e.title),e.extra?s(co,null," ",J(e.extra)):null),s("div",null,e.tmNodes.map(j=>Ne(j,l))))}}});function xe(e){return e.type==="divider"||e.type==="render"}function Zo(e){return e.type==="divider"}function Ne(e,t){const{rawNode:o}=e,{show:i}=o;if(i===!1)return null;if(xe(o))return Zo(o)?s(Go,Object.assign({key:e.key},o.props)):null;const{labelField:c}=t,{key:l,level:h,isGroup:m}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[c],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:h,root:h===0,isGroup:m});return e.children?e.isGroup?s(Xo,ce(a,Yo,{tmNode:e,tmNodes:e.children,key:l})):s(Ce,ce(a,Jo,{key:l,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):s(Wo,ce(a,qo,{key:l,tmNode:e}))}const We=Object.assign(Object.assign({},Re),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Jo=we(We),Ce=N({name:"Submenu",props:We,setup(e){const t=Se(e),{NMenu:o,NSubmenu:i}=t,{props:c,mergedCollapsedRef:l,mergedThemeRef:h}=o,m=x(()=>{const{disabled:p}=e;return i!=null&&i.mergedDisabledRef.value||c.disabled?!0:p}),a=L(!1);Q(De,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:m}),Q(Ie,null);function b(){const{onClick:p}=e;p&&p()}function j(){m.value||(l.value||o.toggleExpand(e.internalKey),b())}function M(p){a.value=p}return{menuProps:c,mergedTheme:h,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:m,mergedValue:o.mergedValueRef,childActive:fe(()=>{var p;return(p=e.virtualChildActive)!==null&&p!==void 0?p:o.activePathRef.value.includes(e.internalKey)}),collapsed:x(()=>c.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:x(()=>!m.value&&(c.mode==="horizontal"||l.value)),handlePopoverShowChange:M,handleClick:j}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:i}}=this,c=()=>{const{isHorizontal:h,paddingLeft:m,collapsed:a,mergedDisabled:b,maxIconSize:j,activeIconSize:M,title:p,childActive:P,icon:T,handleClick:f,menuProps:{nodeProps:z},dropdownShow:_,iconMarginRight:Y,tmNode:U,mergedClsPrefix:F,isEllipsisPlaceholder:A,extra:w}=this,y=z==null?void 0:z(U.rawNode);return s("div",Object.assign({},y,{class:[`${F}-menu-item`,y==null?void 0:y.class],role:"menuitem"}),s(Ue,{tmNode:U,paddingLeft:m,collapsed:a,disabled:b,iconMarginRight:Y,maxIconSize:j,activeIconSize:M,title:p,extra:w,showArrow:!h,childActive:P,clsPrefix:F,icon:T,hover:_,onClick:f,isEllipsisPlaceholder:A}))},l=()=>s(uo,null,{default:()=>{const{tmNodes:h,collapsed:m}=this;return m?null:s("div",{class:`${t}-submenu-children`,role:"menu"},h.map(a=>Ne(a,this.menuProps)))}});return this.root?s(be,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:i}),{default:()=>s("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},c(),this.isHorizontal?null:l())}):s("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},c(),l())}}),Qo=Object.assign(Object.assign({},W.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),et=N({name:"Menu",inheritAttrs:!1,props:Qo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ie(e),i=W("Menu","-menu",Uo,po,e,t),c=q(Fe,null),l=x(()=>{var v;const{collapsed:C}=e;if(C!==void 0)return C;if(c){const{collapseModeRef:r,collapsedRef:g}=c;if(r.value==="width")return(v=g.value)!==null&&v!==void 0?v:!1}return!1}),h=x(()=>{const{keyField:v,childrenField:C,disabledField:r}=e;return pe(e.items||e.options,{getIgnored(g){return xe(g)},getChildren(g){return g[C]},getDisabled(g){return g[r]},getKey(g){var R;return(R=g[v])!==null&&R!==void 0?R:g.name}})}),m=x(()=>new Set(h.value.treeNodes.map(v=>v.key))),{watchProps:a}=e,b=L(null);a!=null&&a.includes("defaultValue")?_e(()=>{b.value=e.defaultValue}):b.value=e.defaultValue;const j=le(e,"value"),M=ge(j,b),p=L([]),P=()=>{p.value=e.defaultExpandAll?h.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||h.value.getPath(M.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?_e(P):P();const T=Ro(e,["expandedNames","expandedKeys"]),f=ge(T,p),z=x(()=>h.value.treeNodes),_=x(()=>h.value.getPath(M.value).keyPath);Q(te,{props:e,mergedCollapsedRef:l,mergedThemeRef:i,mergedValueRef:M,mergedExpandedKeysRef:f,activePathRef:_,mergedClsPrefixRef:t,isHorizontalRef:x(()=>e.mode==="horizontal"),invertedRef:le(e,"inverted"),doSelect:Y,toggleExpand:F});function Y(v,C){const{"onUpdate:value":r,onUpdateValue:g,onSelect:R}=e;g&&K(g,v,C),r&&K(r,v,C),R&&K(R,v,C),b.value=v}function U(v){const{"onUpdate:expandedKeys":C,onUpdateExpandedKeys:r,onExpandedNamesChange:g,onOpenNamesChange:R}=e;C&&K(C,v),r&&K(r,v),g&&K(g,v),R&&K(R,v),p.value=v}function F(v){const C=Array.from(f.value),r=C.findIndex(g=>g===v);if(~r)C.splice(r,1);else{if(e.accordion&&m.value.has(v)){const g=C.findIndex(R=>m.value.has(R));g>-1&&C.splice(g,1)}C.push(v)}U(C)}const A=v=>{const C=h.value.getPath(v??M.value,{includeSelf:!1}).keyPath;if(!C.length)return;const r=Array.from(f.value),g=new Set([...r,...C]);e.accordion&&m.value.forEach(R=>{g.has(R)&&!C.includes(R)&&g.delete(R)}),U(Array.from(g))},w=x(()=>{const{inverted:v}=e,{common:{cubicBezierEaseInOut:C},self:r}=i.value,{borderRadius:g,borderColorHorizontal:R,fontSize:to,itemHeight:ro,dividerColor:no}=r,n={"--n-divider-color":no,"--n-bezier":C,"--n-font-size":to,"--n-border-color-horizontal":R,"--n-border-radius":g,"--n-item-height":ro};return v?(n["--n-group-text-color"]=r.groupTextColorInverted,n["--n-color"]=r.colorInverted,n["--n-item-text-color"]=r.itemTextColorInverted,n["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,n["--n-item-text-color-active"]=r.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=r.itemIconColorInverted,n["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=r.arrowColorInverted,n["--n-arrow-color-hover"]=r.arrowColorHoverInverted,n["--n-arrow-color-active"]=r.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=r.itemColorHoverInverted,n["--n-item-color-active"]=r.itemColorActiveInverted,n["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=r.groupTextColor,n["--n-color"]=r.color,n["--n-item-text-color"]=r.itemTextColor,n["--n-item-text-color-hover"]=r.itemTextColorHover,n["--n-item-text-color-active"]=r.itemTextColorActive,n["--n-item-text-color-child-active"]=r.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,n["--n-item-icon-color"]=r.itemIconColor,n["--n-item-icon-color-hover"]=r.itemIconColorHover,n["--n-item-icon-color-active"]=r.itemIconColorActive,n["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=r.arrowColor,n["--n-arrow-color-hover"]=r.arrowColorHover,n["--n-arrow-color-active"]=r.arrowColorActive,n["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,n["--n-arrow-color-child-active"]=r.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,n["--n-item-color-hover"]=r.itemColorHover,n["--n-item-color-active"]=r.itemColorActive,n["--n-item-color-active-hover"]=r.itemColorActiveHover,n["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),n}),y=o?ae("menu",x(()=>e.inverted?"a":"b"),w,e):void 0,G=vo(),D=L(null),se=L(null);let $=!0;const Pe=()=>{var v;$?$=!1:(v=D.value)===null||v===void 0||v.sync({showAllItemsBeforeCalculate:!0})};function Ye(){return document.getElementById(G)}const re=L(-1);function Xe(v){re.value=e.options.length-v}function Ze(v){v||(re.value=-1)}const Je=x(()=>{const v=re.value;return{children:v===-1?[]:e.options.slice(v)}}),Qe=x(()=>{const{childrenField:v,disabledField:C,keyField:r}=e;return pe([Je.value],{getIgnored(g){return xe(g)},getChildren(g){return g[v]},getDisabled(g){return g[C]},getKey(g){var R;return(R=g[r])!==null&&R!==void 0?R:g.name}})}),eo=x(()=>pe([{}]).treeNodes[0]);function oo(){var v;if(re.value===-1)return s(Ce,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:eo.value,domId:G,isEllipsisPlaceholder:!0});const C=Qe.value.treeNodes[0],r=_.value,g=!!(!((v=C.children)===null||v===void 0)&&v.some(R=>r.includes(R.key)));return s(Ce,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:g,tmNode:C,domId:G,rawNodes:C.rawNode.children||[],tmNodes:C.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:T,uncontrolledExpanededKeys:p,mergedExpandedKeys:f,uncontrolledValue:b,mergedValue:M,activePath:_,tmNodes:z,mergedTheme:i,mergedCollapsed:l,cssVars:o?void 0:w,themeClass:y==null?void 0:y.themeClass,overflowRef:D,counterRef:se,updateCounter:()=>{},onResize:Pe,onUpdateOverflow:Ze,onUpdateCount:Xe,renderCounter:oo,getCounter:Ye,onRender:y==null?void 0:y.onRender,showOption:A,deriveResponsiveState:Pe}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:i}=this;i==null||i();const c=()=>this.tmNodes.map(a=>Ne(a,this.$props)),h=t==="horizontal"&&this.responsive,m=()=>s("div",mo(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,h&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),h?s(Po,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:c,counter:this.renderCounter}):c());return h?s(ho,{onResize:this.onResize},{default:m}):m()}}),ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},tt=N({name:"GitNetworkOutline",render:function(t,o){return E(),V("svg",ot,o[0]||(o[0]=[ye('<circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="256" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 256v112"></path><circle cx="384" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M128 144c0 74.67 68.92 112 128 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M384 144c0 74.67-68.92 112-128 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',6)]))}}),rt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},nt=N({name:"GridOutline",render:function(t,o){return E(),V("svg",rt,o[0]||(o[0]=[S("rect",{x:"48",y:"48",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),S("rect",{x:"288",y:"48",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),S("rect",{x:"48",y:"288",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),S("rect",{x:"288",y:"288",width:"176",height:"176",rx:"20",ry:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},it=N({name:"LanguageOutline",render:function(t,o){return E(),V("svg",lt,o[0]||(o[0]=[ye('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 112h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 64v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 448l96-224l96 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M301.5 384h133"></path><path d="M281.3 112S257 206 199 277S80 384 80 384" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M256 336s-35-27-72-75s-56-85-56-85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',6)]))}}),at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},st=N({name:"LinkOutline",render:function(t,o){return E(),V("svg",at,o[0]||(o[0]=[S("path",{d:"M208 352h-64a96 96 0 0 1 0-192h64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),S("path",{d:"M304 160h64a96 96 0 0 1 0 192h-64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36",d:"M163.29 256h187.42"},null,-1)]))}}),ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},dt=N({name:"LogOutOutline",render:function(t,o){return E(),V("svg",ct,o[0]||(o[0]=[S("path",{d:"M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 336l80-80l-80-80"},null,-1),S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 256h256"},null,-1)]))}}),ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ht=N({name:"OptionsOutline",render:function(t,o){return E(),V("svg",ut,o[0]||(o[0]=[ye('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 128h80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 128h240"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 384h80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 384h240"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 256h240"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 256h80"></path><circle cx="336" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="176" cy="256" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="336" cy="384" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>',9)]))}}),vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},mt=N({name:"PeopleOutline",render:function(t,o){return E(),V("svg",vt,o[0]||(o[0]=[S("path",{d:"M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),S("path",{d:"M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),S("path",{d:"M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),S("path",{d:"M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1)]))}}),pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ft=N({name:"PersonCircleOutline",render:function(t,o){return E(),V("svg",pt,o[0]||(o[0]=[S("path",{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 0 1-6.14-.32a124.27 124.27 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25z",fill:"currentColor"},null,-1),S("path",{d:"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z",fill:"currentColor"},null,-1)]))}}),gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},bt=N({name:"SettingsOutline",render:function(t,o){return E(),V("svg",gt,o[0]||(o[0]=[S("path",{d:"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ct=N({name:"SwapHorizontalOutline",render:function(t,o){return E(),V("svg",xt,o[0]||(o[0]=[S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M304 48l112 112l-112 112"},null,-1),S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M398.87 160H96"},null,-1),S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M208 464L96 352l112-112"},null,-1),S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M114 352h302"},null,-1)]))}}),wt=N({__name:"MainLayout",setup(e){const t=yo(),o=zo(),{t:i}=fo(),c=L(""),l=L(""),h=L("");let m;function a(f){return()=>s(me,null,{default:()=>s(f)})}const b=x(()=>[{label:()=>s(X,{to:"/"},{default:()=>i("menu.dashboard")}),key:"/",icon:a(nt)},{label:()=>s(X,{to:"/users"},{default:()=>i("menu.users")}),key:"/users",icon:a(mt)},{label:()=>s(X,{to:"/network"},{default:()=>i("menu.network")}),key:"/network",icon:a(tt)},{label:()=>s(X,{to:"/outbounds"},{default:()=>i("menu.outbounds")}),key:"/outbounds",icon:a(Ct)},{label:()=>s(X,{to:"/chain"},{default:()=>i("menu.chain")}),key:"/chain",icon:a(st)},{label:()=>s(X,{to:"/advanced"},{default:()=>i("menu.advanced")}),key:"/advanced",icon:a(ht)},{label:()=>s(X,{to:"/settings"},{default:()=>i("menu.settings")}),key:"/settings",icon:a(bt)}]),j=x(()=>l.value==="RUNNING"?"success":l.value==="IDLE"?"warning":l.value?"error":"default"),M=x(()=>[{label:i("layout.logout"),key:"logout",icon:a(dt)}]),p=go.map(f=>({label:f.label,key:f.code}));async function P(){try{const f=await ve.get("/api/dashboard");l.value=f.mitaStatus,h.value=f.mitaVersion}catch{}}bo(async()=>{try{const f=await ve.get("/api/me");c.value=f.username}catch{}P(),m=window.setInterval(()=>{document.hidden||P()},8e3)}),xo(()=>window.clearInterval(m));async function T(f){if(f==="logout")try{await ve.post("/api/logout")}finally{o.push("/login")}}return(f,z)=>{const _=ko("router-view");return E(),Ae(O(je),{position:"absolute","has-sider":""},{default:B(()=>[H(O(Do),{bordered:"","collapsed-width":64,width:220,"collapse-mode":"width","show-trigger":"bar"},{default:B(()=>[z[1]||(z[1]=S("div",{class:"brand"},[S("span",{class:"dot"}),S("span",{class:"name"},"Mieru Web UI")],-1)),H(O(et),{value:O(t).path,options:b.value,indent:20},null,8,["value","options"])]),_:1}),H(O(je),null,{default:B(()=>[H(O($o),{bordered:"",class:"header"},{default:B(()=>[H(O(Me),{align:"center",size:10},{default:B(()=>[H(O(To),{type:j.value,size:"small",round:""},{default:B(()=>[de(ue(l.value||"…"),1)]),_:1},8,["type"]),h.value?(E(),Ae(O(_o),{key:0,depth:"3",style:{"font-size":"12px"}},{default:B(()=>[de("mita v"+ue(h.value),1)]),_:1})):Co("",!0)]),_:1}),H(O(Me),{align:"center",size:4},{default:B(()=>[H(O(be),{options:O(p),onSelect:z[0]||(z[0]=Y=>O(wo)(Y)),trigger:"click"},{default:B(()=>[H(O(Oe),{text:""},{icon:B(()=>[H(O(me),{component:O(it)},null,8,["component"])]),_:1})]),_:1},8,["options"]),H(O(be),{options:M.value,onSelect:T,trigger:"click"},{default:B(()=>[H(O(Oe),{text:""},{icon:B(()=>[H(O(me),{component:O(ft)},null,8,["component"])]),default:B(()=>[de(" "+ue(c.value||"admin"),1)]),_:1})]),_:1},8,["options"])]),_:1})]),_:1}),H(O(Ho),{class:"content","content-style":"padding: 24px; max-width: 1100px; margin: 0 auto;"},{default:B(()=>[H(_)]),_:1})]),_:1})]),_:1})}}}),Nt=Io(wt,[["__scopeId","data-v-c3abcc06"]]);export{Nt as default};
