import{Gt as e,Jn as t,Jt as n,Kt as r,Pt as i,Rt as a,S as o,Sn as s,T as c,Vt as l,Xn as u,Xt as d,Yt as f,Zt as p,at as m,b as h,ft as g,g as _,ht as v,mn as y,ot as b,st as x,v as S,vt as C,wn as w}from"./router-BIO1-tYH.js";import{u as T}from"./_plugin-vue_export-helper-D_EFaKSB.js";import{a as E}from"./index-C_G8VDoQ.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:a}=e;return Object.assign(Object.assign({},E),{iconColor:a,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${i(t,{alpha:.2})}`})}var O={name:`Switch`,common:_,self:D},k=r(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),n(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),r(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[h({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),n(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),n(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),e(`&:focus`,[n(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),f(`round`,[n(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[n(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),d(`disabled`,[d(`icon`,[f(`rubber-band`,[f(`pressed`,[n(`rail`,[n(`button`,`max-width: var(--n-button-width-pressed);`)])]),n(`rail`,[e(`&:active`,[n(`button`,`max-width: var(--n-button-width-pressed);`)])]),f(`active`,[f(`pressed`,[n(`rail`,[n(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),n(`rail`,[e(`&:active`,[n(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),f(`active`,[n(`rail`,[n(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),n(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[n(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[h()]),n(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),f(`active`,[n(`rail`,`background-color: var(--n-rail-color-active);`)]),f(`loading`,[n(`rail`,`
 cursor: wait;
 `)]),f(`disabled`,[n(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},c.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=s({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=x(e),o=c(`Switch`,`-switch`,k,O,e,n),s=m(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:i?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:d,mergedDisabledRef:f}=s,h=t(e.defaultValue),g=T(u(e,`value`),h),_=y(()=>g.value===e.checkedValue),v=t(!1),S=t(!1),w=y(()=>{let{railStyle:t}=e;if(t)return t({focused:S.value,checked:_.value})});function E(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=s;n&&C(n,t),i&&C(i,t),r&&C(r,t),h.value=t,a(),o()}function D(){let{nTriggerFormFocus:e}=s;e()}function A(){let{nTriggerFormBlur:e}=s;e()}function M(){e.loading||f.value||(g.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue))}function N(){S.value=!0,D()}function P(){S.value=!1,A(),v.value=!1}function F(t){e.loading||f.value||t.key===` `&&(g.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue),v.value=!1)}function I(t){e.loading||f.value||t.key===` `&&(t.preventDefault(),v.value=!0)}let L=y(()=>{let{value:e}=d,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:s,boxShadowFocus:c,loadingColor:u,textColor:f,iconColor:m,[p(`buttonHeight`,e)]:h,[p(`buttonWidth`,e)]:g,[p(`buttonWidthPressed`,e)]:_,[p(`railHeight`,e)]:v,[p(`railWidth`,e)]:y,[p(`railBorderRadius`,e)]:b,[p(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=o.value,C,w,T;return j?(C=`calc((${v} - ${h}) / 2)`,w=`max(${v}, ${h})`,T=`max(${y}, calc(${y} + ${h} - ${v}))`):(C=l((a(v)-a(h))/2),w=l(Math.max(a(v),a(h))),T=a(v)>a(h)?y:l(a(y)+a(h)-a(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":i,"--n-button-color":s,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":h,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":c,"--n-loading-color":u,"--n-text-color":f,"--n-icon-color":m}}),R=r?b(`switch`,y(()=>d.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:v,mergedClsPrefix:n,mergedValue:g,checked:_,mergedDisabled:f,cssVars:r?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:a}=this;i?.();let{checked:s,unchecked:c,icon:l,"checked-icon":u,"unchecked-icon":d}=a,f=!(g(l)&&g(u)&&g(d));return w(`div`,{role:`switch`,"aria-checked":n,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},w(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:r},v(s,t=>v(c,n=>t||n?w(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},w(`div`,{class:`${e}-switch__rail-placeholder`},w(`div`,{class:`${e}-switch__button-placeholder`}),t),w(`div`,{class:`${e}-switch__rail-placeholder`},w(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),w(`div`,{class:`${e}-switch__button`},v(l,t=>v(u,n=>v(d,r=>w(o,null,{default:()=>this.loading?w(S,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?w(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(r||t)?w(`div`,{class:`${e}-switch__button-icon`,key:r?`unchecked-icon`:`icon`},r||t):null})))),v(s,t=>t&&w(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),v(c,t=>t&&w(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};