import{Bt as e,C as t,En as n,Ft as r,Gt as i,Jn as a,Jt as o,Kt as s,O as c,Pt as l,Sn as u,T as d,Yt as f,Zt as p,g as m,ht as h,mn as g,ot as _,pt as v,st as y,wn as b,y as x}from"./router-BIO1-tYH.js";import{l as S,o as C}from"./_common-CXfM0PR-.js";import{M as w,N as T,P as E,T as D,j as O}from"./index-C_G8VDoQ.js";function k(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:i,baseColor:a,dividerColor:o,actionColor:s,textColor1:c,textColor2:u,closeColorHover:d,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,infoColor:g,successColor:_,warningColor:v,errorColor:y,fontSize:b}=e;return Object.assign(Object.assign({},D),{fontSize:b,lineHeight:t,titleFontWeight:i,borderRadius:n,border:`1px solid ${o}`,color:s,titleTextColor:c,iconColor:u,contentTextColor:u,closeBorderRadius:n,closeColorHover:d,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderInfo:`1px solid ${r(a,l(g,{alpha:.25}))}`,colorInfo:r(a,l(g,{alpha:.08})),titleTextColorInfo:c,iconColorInfo:g,contentTextColorInfo:u,closeColorHoverInfo:d,closeColorPressedInfo:f,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:h,borderSuccess:`1px solid ${r(a,l(_,{alpha:.25}))}`,colorSuccess:r(a,l(_,{alpha:.08})),titleTextColorSuccess:c,iconColorSuccess:_,contentTextColorSuccess:u,closeColorHoverSuccess:d,closeColorPressedSuccess:f,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:h,borderWarning:`1px solid ${r(a,l(v,{alpha:.33}))}`,colorWarning:r(a,l(v,{alpha:.08})),titleTextColorWarning:c,iconColorWarning:v,contentTextColorWarning:u,closeColorHoverWarning:d,closeColorPressedWarning:f,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:h,borderError:`1px solid ${r(a,l(y,{alpha:.25}))}`,colorError:r(a,l(y,{alpha:.08})),titleTextColorError:c,iconColorError:y,contentTextColorError:u,closeColorHoverError:d,closeColorPressedError:f,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:h})}var A={name:`Alert`,common:m,self:k},j=s(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[o(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),f(`closable`,[s(`alert-body`,[o(`title`,`
 padding-right: 24px;
 `)])]),o(`icon`,{color:`var(--n-icon-color)`}),s(`alert-body`,{padding:`var(--n-padding)`},[o(`title`,{color:`var(--n-title-text-color)`}),o(`content`,{color:`var(--n-content-text-color)`})]),C({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),o(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),o(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),f(`show-icon`,[s(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),f(`right-adjust`,[s(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),s(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[o(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[i(`& +`,[o(`content`,{marginTop:`9px`})])]),o(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),o(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=u({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},d.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(t){let{mergedClsPrefixRef:n,mergedBorderedRef:r,inlineThemeDisabled:i,mergedRtlRef:o}=y(t),s=d(`Alert`,`-alert`,j,A,t,n),l=c(`Alert`,o,n),u=g(()=>{let{common:{cubicBezierEaseInOut:n},self:r}=s.value,{fontSize:i,borderRadius:a,titleFontWeight:o,lineHeight:c,iconSize:l,iconMargin:u,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=r,{type:y}=t,{left:b,right:x}=e(u);return{"--n-bezier":n,"--n-color":r[p(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":m,"--n-close-color-hover":r[p(`closeColorHover`,y)],"--n-close-color-pressed":r[p(`closeColorPressed`,y)],"--n-close-icon-color":r[p(`closeIconColor`,y)],"--n-close-icon-color-hover":r[p(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":r[p(`closeIconColorPressed`,y)],"--n-icon-color":r[p(`iconColor`,y)],"--n-border":r[p(`border`,y)],"--n-title-text-color":r[p(`titleTextColor`,y)],"--n-content-text-color":r[p(`contentTextColor`,y)],"--n-line-height":c,"--n-border-radius":a,"--n-font-size":i,"--n-title-font-weight":o,"--n-icon-size":l,"--n-icon-margin":u,"--n-icon-margin-rtl":d,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),f=i?_(`alert`,g(()=>t.type[0]),u,t):void 0,m=a(!0),h=()=>{let{onAfterLeave:e,onAfterHide:n}=t;e&&e(),n&&n()};return{rtlEnabled:l,mergedClsPrefix:n,mergedBordered:r,visible:m,handleCloseClick:()=>{Promise.resolve(t.onClose?.call(t)).then(e=>{e!==!1&&(m.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:s,cssVars:i?void 0:u,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),b(x,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:r}=this,i={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?b(`div`,Object.assign({},n(this.$attrs,i)),this.closable&&b(S,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&b(`div`,{class:`${e}-alert__border`}),this.showIcon&&b(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},v(r.icon,()=>[b(t,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return b(w,null);case`info`:return b(T,null);case`warning`:return b(O,null);case`error`:return b(E,null);default:return null}}})])),b(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},h(r.header,t=>{let n=t||this.title;return n?b(`div`,{class:`${e}-alert-body__title`},n):null}),r.default&&b(`div`,{class:`${e}-alert-body__content`},r))):null}})}});export{M as t};