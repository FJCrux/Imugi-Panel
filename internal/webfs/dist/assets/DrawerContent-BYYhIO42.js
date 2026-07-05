import{An as e,Bn as t,D as n,En as r,Fn as i,Gt as a,Hn as o,Jn as s,Jt as c,Kt as l,O as u,Ot as d,Sn as f,T as p,Tn as m,Xn as h,Yt as g,_,f as v,in as y,mn as b,ot as x,sn as S,st as C,vt as w,wn as T,yt as E,zn as D}from"./router-BIO1-tYH.js";import{T as O,_ as k,b as A,g as j,h as M,l as N,m as P,w as F,x as I}from"./_common-CXfM0PR-.js";import{l as L,u as R}from"./_plugin-vue_export-helper-D_EFaKSB.js";import{H as z,V as B,u as V,z as H}from"./index-C_G8VDoQ.js";var U=f({name:`NDrawerContent`,inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(n){let r=s(!!n.show),a=s(null),o=m(O),c=0,l=``,d=null,f=s(!1),p=s(!1),h=b(()=>n.placement===`top`||n.placement===`bottom`),{mergedClsPrefixRef:g,mergedRtlRef:_}=C(n),v=u(`Drawer`,_,g),y=L,x=e=>{p.value=!0,c=h.value?e.clientY:e.clientX,l=document.body.style.cursor,document.body.style.cursor=h.value?`ns-resize`:`ew-resize`,document.body.addEventListener(`mousemove`,P),document.body.addEventListener(`mouseleave`,y),document.body.addEventListener(`mouseup`,L)},w=()=>{d!==null&&(window.clearTimeout(d),d=null),p.value?f.value=!0:d=window.setTimeout(()=>{f.value=!0},300)},T=()=>{d!==null&&(window.clearTimeout(d),d=null),f.value=!1},{doUpdateHeight:E,doUpdateWidth:j}=o,M=e=>{let{maxWidth:t}=n;if(t&&e>t)return t;let{minWidth:r}=n;return r&&e<r?r:e},N=e=>{let{maxHeight:t}=n;if(t&&e>t)return t;let{minHeight:r}=n;return r&&e<r?r:e};function P(e){if(p.value)if(h.value){let t=a.value?.offsetHeight||0,r=c-e.clientY;t+=n.placement===`bottom`?r:-r,t=N(t),E(t),c=e.clientY}else{let t=a.value?.offsetWidth||0,r=c-e.clientX;t+=n.placement===`right`?r:-r,t=M(t),j(t),c=e.clientX}}function L(){p.value&&(c=0,p.value=!1,document.body.style.cursor=l,document.body.removeEventListener(`mousemove`,P),document.body.removeEventListener(`mouseup`,L),document.body.removeEventListener(`mouseleave`,y))}t(()=>{n.show&&(r.value=!0)}),D(()=>n.show,e=>{e||L()}),e(()=>{L()});let R=b(()=>{let{show:e}=n,t=[[S,e]];return n.showMask||t.push([k,n.onClickoutside,void 0,{capture:!0}]),t});function z(){var e;r.value=!1,(e=n.onAfterLeave)==null||e.call(n)}return B(b(()=>n.blockScroll&&r.value)),i(F,a),i(A,null),i(I,null),{bodyRef:a,rtlEnabled:v,mergedClsPrefix:o.mergedClsPrefixRef,isMounted:o.isMountedRef,mergedTheme:o.mergedThemeRef,displayed:r,transitionName:b(()=>({right:`slide-in-from-right-transition`,left:`slide-in-from-left-transition`,top:`slide-in-from-top-transition`,bottom:`slide-in-from-bottom-transition`})[n.placement]),handleAfterLeave:z,bodyDirectives:R,handleMousedownResizeTrigger:x,handleMouseenterResizeTrigger:w,handleMouseleaveResizeTrigger:T,isDragging:p,isHoverOnResizeTrigger:f}},render(){let{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective===`show`||this.displayed||this.show?o(T(`div`,{role:`none`},T(P,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>T(y,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>o(T(`div`,r(this.$attrs,{role:`dialog`,ref:`bodyRef`,"aria-modal":`true`,class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?T(`div`,{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?T(`div`,{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:`none`},e):T(v,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[S,this.displayDirective===`if`||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:W,cubicBezierEaseOut:G}=n;function K({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-bottom`}={}){return[a(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${W}`}),a(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${G}`}),a(`&.${n}-transition-enter-to`,{transform:`translateY(0)`}),a(`&.${n}-transition-enter-from`,{transform:`translateY(100%)`}),a(`&.${n}-transition-leave-from`,{transform:`translateY(0)`}),a(`&.${n}-transition-leave-to`,{transform:`translateY(100%)`})]}var{cubicBezierEaseIn:q,cubicBezierEaseOut:J}=n;function Y({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-left`}={}){return[a(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${q}`}),a(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${J}`}),a(`&.${n}-transition-enter-to`,{transform:`translateX(0)`}),a(`&.${n}-transition-enter-from`,{transform:`translateX(-100%)`}),a(`&.${n}-transition-leave-from`,{transform:`translateX(0)`}),a(`&.${n}-transition-leave-to`,{transform:`translateX(-100%)`})]}var{cubicBezierEaseIn:X,cubicBezierEaseOut:Z}=n;function Q({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-right`}={}){return[a(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${X}`}),a(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Z}`}),a(`&.${n}-transition-enter-to`,{transform:`translateX(0)`}),a(`&.${n}-transition-enter-from`,{transform:`translateX(100%)`}),a(`&.${n}-transition-leave-from`,{transform:`translateX(0)`}),a(`&.${n}-transition-leave-to`,{transform:`translateX(100%)`})]}var{cubicBezierEaseIn:$,cubicBezierEaseOut:ee}=n;function te({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-top`}={}){return[a(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${$}`}),a(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${ee}`}),a(`&.${n}-transition-enter-to`,{transform:`translateY(0)`}),a(`&.${n}-transition-enter-from`,{transform:`translateY(-100%)`}),a(`&.${n}-transition-leave-from`,{transform:`translateY(0)`}),a(`&.${n}-transition-leave-to`,{transform:`translateY(-100%)`})]}var ne=a([l(`drawer`,`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Q(),Y(),te(),K(),g(`unselectable`,`
 user-select: none; 
 -webkit-user-select: none;
 `),g(`native-scrollbar`,[l(`drawer-content-wrapper`,`
 overflow: auto;
 height: 100%;
 `)]),c(`resize-trigger`,`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[g(`hover`,`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),l(`drawer-content-wrapper`,`
 box-sizing: border-box;
 `),l(`drawer-content`,`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[g(`native-scrollbar`,[l(`drawer-body-content-wrapper`,`
 height: 100%;
 overflow: auto;
 `)]),l(`drawer-body`,`
 flex: 1 0 0;
 overflow: hidden;
 `),l(`drawer-body-content-wrapper`,`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),l(`drawer-header`,`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[c(`main`,`
 flex: 1;
 `),c(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),l(`drawer-footer`,`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),g(`right-placement`,`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[c(`resize-trigger`,`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),g(`left-placement`,`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[c(`resize-trigger`,`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),g(`top-placement`,`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[c(`resize-trigger`,`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),g(`bottom-placement`,`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[c(`resize-trigger`,`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),a(`body`,[a(`>`,[l(`drawer-container`,`
 position: fixed;
 `)])]),l(`drawer-container`,`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[a(`> *`,`
 pointer-events: all;
 `)]),l(`drawer-mask`,`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[g(`invisible`,`
 background-color: rgba(0, 0, 0, 0)
 `),_({enterDuration:`0.2s`,leaveDuration:`0.2s`,enterCubicBezier:`var(--n-bezier-in)`,leaveCubicBezier:`var(--n-bezier-out)`})])]),re=f({name:`Drawer`,inheritAttrs:!1,props:Object.assign(Object.assign({},p.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:`right`},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:`if`},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),setup(e){let{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:r}=C(e),a=d(),o=p(`Drawer`,`-drawer`,ne,V,e,t),c=s(e.defaultWidth),l=s(e.defaultHeight),u=R(h(e,`width`),c),f=R(h(e,`height`),l),m=b(()=>{let{placement:t}=e;return t===`top`||t===`bottom`?``:L(u.value)}),g=b(()=>{let{placement:t}=e;return t===`left`||t===`right`?``:L(f.value)}),_=t=>{let{onUpdateWidth:n,"onUpdate:width":r}=e;n&&w(n,t),r&&w(r,t),c.value=t},v=t=>{let{onUpdateHeight:n,"onUpdate:width":r}=e;n&&w(n,t),r&&w(r,t),l.value=t},y=b(()=>[{width:m.value,height:g.value},e.drawerStyle||``]);function S(t){let{onMaskClick:n,maskClosable:r}=e;r&&k(!1),n&&n(t)}function T(e){S(e)}let E=z();function D(t){var n;(n=e.onEsc)==null||n.call(e),e.show&&e.closeOnEsc&&H(t)&&(E.value||k(!1))}function k(t){let{onHide:n,onUpdateShow:r,"onUpdate:show":i}=e;r&&w(r,t),i&&w(i,t),n&&!t&&w(n,t)}i(O,{isMountedRef:a,mergedThemeRef:o,mergedClsPrefixRef:t,doUpdateShow:k,doUpdateHeight:v,doUpdateWidth:_});let A=b(()=>{let{common:{cubicBezierEaseInOut:e,cubicBezierEaseIn:t,cubicBezierEaseOut:n},self:{color:r,textColor:i,boxShadow:a,lineHeight:s,headerPadding:c,footerPadding:l,borderRadius:u,bodyPadding:d,titleFontSize:f,titleTextColor:p,titleFontWeight:m,headerBorderBottom:h,footerBorderTop:g,closeIconColor:_,closeIconColorHover:v,closeIconColorPressed:y,closeColorHover:b,closeColorPressed:x,closeIconSize:S,closeSize:C,closeBorderRadius:w,resizableTriggerColorHover:T}}=o.value;return{"--n-line-height":s,"--n-color":r,"--n-border-radius":u,"--n-text-color":i,"--n-box-shadow":a,"--n-bezier":e,"--n-bezier-out":n,"--n-bezier-in":t,"--n-header-padding":c,"--n-body-padding":d,"--n-footer-padding":l,"--n-title-text-color":p,"--n-title-font-size":f,"--n-title-font-weight":m,"--n-header-border-bottom":h,"--n-footer-border-top":g,"--n-close-icon-color":_,"--n-close-icon-color-hover":v,"--n-close-icon-color-pressed":y,"--n-close-size":C,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-icon-size":S,"--n-close-border-radius":w,"--n-resize-trigger-color-hover":T}}),j=r?x(`drawer`,void 0,A,e):void 0;return{mergedClsPrefix:t,namespace:n,mergedBodyStyle:y,handleOutsideClick:T,handleMaskClick:S,handleEsc:D,mergedTheme:o,cssVars:r?void 0:A,themeClass:j?.themeClass,onRender:j?.onRender,isMounted:a}},render(){let{mergedClsPrefix:e}=this;return T(M,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)==null||t.call(this),o(T(`div`,{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:`none`},this.showMask?T(y,{name:`fade-in-transition`,appear:this.isMounted},{default:()=>this.show?T(`div`,{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask===`transparent`&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,T(U,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[j,{zIndex:this.zIndex,enabled:this.show}]])}})}}),ie=f({name:`DrawerContent`,props:{title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},slots:Object,setup(){let e=m(O,null);e||E(`drawer-content`,"`n-drawer-content` must be placed inside `n-drawer`.");let{doUpdateShow:t}=e;function n(){t(!1)}return{handleCloseClick:n,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){let{title:e,mergedClsPrefix:t,nativeScrollbar:n,mergedTheme:r,bodyClass:i,bodyStyle:a,bodyContentClass:o,bodyContentStyle:s,headerClass:c,headerStyle:l,footerClass:u,footerStyle:d,scrollbarProps:f,closable:p,$slots:m}=this;return T(`div`,{role:`none`,class:[`${t}-drawer-content`,n&&`${t}-drawer-content--native-scrollbar`]},m.header||e||p?T(`div`,{class:[`${t}-drawer-header`,c],style:l,role:`none`},T(`div`,{class:`${t}-drawer-header__main`,role:`heading`,"aria-level":`1`},m.header===void 0?e:m.header()),p&&T(N,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,n?T(`div`,{class:[`${t}-drawer-body`,i],style:a,role:`none`},T(`div`,{class:[`${t}-drawer-body-content-wrapper`,o],style:s,role:`none`},m)):T(v,Object.assign({themeOverrides:r.peerOverrides.Scrollbar,theme:r.peers.Scrollbar},f,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,o],contentStyle:s}),m),m.footer?T(`div`,{class:[`${t}-drawer-footer`,u],style:d,role:`none`},m.footer()):null)}});export{re as n,ie as t};