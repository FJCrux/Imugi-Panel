import{An as e,At as t,Dt as n,En as r,Fn as i,Gt as a,Jn as o,Jt as s,Kn as c,Kt as l,Sn as u,T as d,Tn as f,Xn as p,Xt as m,Yt as h,Zt as g,bt as _,in as v,jt as y,kn as b,kt as x,mn as S,ot as C,p as w,qn as T,st as E,un as D,vt as O,wn as k,zn as A}from"./router-BIO1-tYH.js";import{a as j,c as M,d as N,f as P,i as F,n as I,o as L}from"./Space-D_izr8eA.js";import{a as R,n as ee}from"./Tag-SpLY0thm.js";import{E as z,b as B,u as te,w as V,x as H}from"./_common-CXfM0PR-.js";import{u as ne}from"./_plugin-vue_export-helper-D_EFaKSB.js";import{L as U,O as re,_ as ie}from"./index-C_G8VDoQ.js";function ae(n={},r){let i=c({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:a,keyup:o}=n,s=e=>{switch(e.key){case`Control`:i.ctrl=!0;break;case`Meta`:i.command=!0,i.win=!0;break;case`Shift`:i.shift=!0;break;case`Tab`:i.tab=!0;break}a!==void 0&&Object.keys(a).forEach(t=>{if(t!==e.key)return;let n=a[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},l=e=>{switch(e.key){case`Control`:i.ctrl=!1;break;case`Meta`:i.command=!1,i.win=!1;break;case`Shift`:i.shift=!1;break;case`Tab`:i.tab=!1;break}o!==void 0&&Object.keys(o).forEach(t=>{if(t!==e.key)return;let n=o[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},u=()=>{(r===void 0||r.value)&&(y(`keydown`,document,s),y(`keyup`,document,l)),r!==void 0&&A(r,e=>{e?(y(`keydown`,document,s),y(`keyup`,document,l)):(t(`keydown`,document,s),t(`keyup`,document,l))})};return z()?(b(u),e(()=>{(r===void 0||r.value)&&(t(`keydown`,document,s),t(`keyup`,document,l))})):u(),T(i)}function oe(e,t,n){if(!t)return e;let r=o(e.value),i=null;return A(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function W(e){return t=>{t?e.value=t.$el:e.value=null}}var G=u({name:`ChevronRight`,render(){return k(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},k(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),K=n(`n-dropdown-menu`),q=n(`n-dropdown`),J=n(`n-dropdown-option`),Y=u({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return k(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),se=u({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=f(K),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=f(q);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=k(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),k(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},k(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},U(o.icon)),k(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):U(o.title??o[this.labelField])),k(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}});function X(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ce(e){return e.type===`group`}function Z(e){return e.type===`divider`}function le(e){return e.type===`render`}var Q=u({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=f(q),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:s,activeKeyPathRef:c,animatedRef:l,mergedShowRef:u,renderLabelRef:d,renderIconRef:p,labelFieldRef:m,childrenFieldRef:h,renderOptionRef:g,nodePropsRef:_,menuPropsRef:v}=t,y=f(J,null),b=f(K),C=f(B),w=S(()=>e.tmNode.rawNode),T=S(()=>{let{value:t}=h;return X(e.tmNode.rawNode,t)}),E=S(()=>{let{disabled:t}=e.tmNode;return t}),D=oe(S(()=>{if(!T.value)return!1;let{key:t,disabled:i}=e.tmNode;if(i)return!1;let{value:o}=n,{value:c}=r,{value:l}=a,{value:u}=s;return o===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,S(()=>r.value===null&&!l.value)),O=S(()=>!!y?.enteringSubmenuRef.value),k=o(!1);i(J,{enteringSubmenuRef:k});function A(){k.value=!0}function j(){k.value=!1}function M(){let{parentKey:t,tmNode:i}=e;i.disabled||u.value&&(a.value=t,r.value=null,n.value=i.key)}function N(){let{tmNode:t}=e;t.disabled||u.value&&n.value!==t.key&&M()}function P(t){if(e.tmNode.disabled||!u.value)return;let{relatedTarget:r}=t;r&&!R({target:r},`dropdownOption`)&&!R({target:r},`scrollbarRail`)&&(n.value=null)}function F(){let{value:n}=T,{tmNode:r}=e;u.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:m,renderLabel:d,renderIcon:p,siblingHasIcon:b.showIconRef,siblingHasSubmenu:b.hasSubmenuRef,menuProps:v,popoverBody:C,animated:l,mergedShowSubmenu:S(()=>D.value&&!O.value),rawNode:w,hasSubmenu:T,pending:x(()=>{let{value:t}=s,{key:n}=e.tmNode;return t.includes(n)}),childActive:x(()=>{let{value:t}=c,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:x(()=>{let{value:t}=c,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:E,renderOption:g,nodeProps:_,handleClick:F,handleMouseMove:N,handleMouseEnter:M,handleMouseLeave:P,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:j}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:n,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:o,renderLabel:s,renderIcon:c,renderOption:l,nodeProps:u,props:d,scrollable:f}=this,p=null;if(n){let e=this.menuProps?.call(this,t,t.children);p=k($,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let m={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},h=u?.(t),g=k(`div`,Object.assign({class:[`${i}-dropdown-option`,h?.class],"data-dropdown-option":!0},h),k(`div`,r(m,d),[k(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(t):U(t.icon)]),k(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(t):U(t[this.labelField]??t.title)),k(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,o&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?k(I,null,{default:()=>k(G,null)}):null)]),this.hasSubmenu?k(P,null,{default:()=>[k(N,null,{default:()=>k(`div`,{class:`${i}-dropdown-offset-container`},k(M,{show:this.mergedShowSubmenu,placement:this.placement,to:f&&this.popoverBody||void 0,teleportDisabled:!f},{default:()=>k(`div`,{class:`${i}-dropdown-menu-wrapper`},e?k(v,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>p}):p)}))})]}):null);return l?l({node:g,option:t}):g}}),ue=u({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return k(D,null,k(se,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:Z(r)?k(Y,{clsPrefix:n,key:e.key}):e.isGroup?(_(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):k(Q,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),de=u({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return k(`div`,t,[e?.()])}}),$=u({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=f(q);i(K,{showIconRef:S(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:S(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>X(e,t));let{rawNode:n}=e;return X(n,t)})})});let r=o(null);return i(H,null),i(V,null),i(B,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:le(i)?k(de,{tmNode:r,key:r.key}):Z(i)?k(Y,{clsPrefix:t,key:r.key}):ce(i)?k(ue,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):k(Q,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return k(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?k(w,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?L({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=l(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[re(),l(`dropdown-option`,`
 position: relative;
 `,[a(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[a(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),l(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[a(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),m(`disabled`,[h(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[s(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),a(`&::before`,`background-color: var(--n-option-color-hover);`)]),h(`active`,`
 color: var(--n-option-text-color-active);
 `,[s(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),a(`&::before`,`background-color: var(--n-option-color-active);`)]),h(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[s(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),h(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),h(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[s(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[h(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),s(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[h(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),l(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),s(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),s(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[h(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),l(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),l(`dropdown-menu`,`pointer-events: all;`)]),l(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),l(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),l(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),a(`>`,[l(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),m(`scrollable`,`
 padding: var(--n-padding);
 `),h(`scrollable`,[s(`content`,`
 padding: var(--n-padding);
 `)])]),pe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},me=Object.keys(j),he=u({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},j),pe),d.props),setup(e){let t=o(!1),n=ne(p(e,`show`),t),r=S(()=>{let{keyField:t,childrenField:n}=e;return ee(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),a=S(()=>r.value.treeNodes),s=o(null),c=o(null),l=o(null),u=S(()=>s.value??c.value??l.value??null),f=S(()=>r.value.getPath(u.value).keyPath),m=S(()=>r.value.getPath(e.value).keyPath),h=x(()=>e.keyboard&&n.value);ae({keydown:{ArrowUp:{prevent:!0,handler:P},ArrowRight:{prevent:!0,handler:N},ArrowDown:{prevent:!0,handler:F},ArrowLeft:{prevent:!0,handler:M},Enter:{prevent:!0,handler:I},Escape:j}},h);let{mergedClsPrefixRef:_,inlineThemeDisabled:v,mergedComponentPropsRef:y}=E(e),b=S(()=>e.size||y?.value?.Dropdown?.size||`medium`),w=d(`Dropdown`,`-dropdown`,fe,ie,e,_);i(q,{labelFieldRef:p(e,`labelField`),childrenFieldRef:p(e,`childrenField`),renderLabelRef:p(e,`renderLabel`),renderIconRef:p(e,`renderIcon`),hoverKeyRef:s,keyboardKeyRef:c,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:f,activeKeyPathRef:m,animatedRef:p(e,`animated`),mergedShowRef:n,nodePropsRef:p(e,`nodeProps`),renderOptionRef:p(e,`renderOption`),menuPropsRef:p(e,`menuProps`),doSelect:T,doUpdateShow:D}),A(n,t=>{!e.animated&&!t&&k()});function T(t,n){let{onSelect:r}=e;r&&O(r,t,n)}function D(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&O(r,n),i&&O(i,n),t.value=n}function k(){s.value=null,c.value=null,l.value=null}function j(){D(!1)}function M(){R(`left`)}function N(){R(`right`)}function P(){R(`up`)}function F(){R(`down`)}function I(){let e=L();e?.isLeaf&&n.value&&(T(e.key,e.rawNode),D(!1))}function L(){let{value:e}=r,{value:t}=u;return!e||t===null?null:e.getNode(t)??null}function R(e){let{value:t}=u,{value:{getFirstAvailableNode:n}}=r,i=null;if(t===null){let e=n();e!==null&&(i=e.key)}else{let t=L();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(i=n.key)}}i!==null&&(s.value=null,c.value=i)}let z=S(()=>{let{inverted:t}=e,n=b.value,{common:{cubicBezierEaseInOut:r},self:i}=w.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[g(`optionIconSuffixWidth`,n)]:l,[g(`optionSuffixWidth`,n)]:u,[g(`optionIconPrefixWidth`,n)]:d,[g(`optionPrefixWidth`,n)]:f,[g(`fontSize`,n)]:p,[g(`optionHeight`,n)]:m,[g(`optionIconSize`,n)]:h}=i,_={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(_[`--n-color`]=i.colorInverted,_[`--n-option-color-hover`]=i.optionColorHoverInverted,_[`--n-option-color-active`]=i.optionColorActiveInverted,_[`--n-option-text-color`]=i.optionTextColorInverted,_[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=i.prefixColorInverted,_[`--n-suffix-color`]=i.suffixColorInverted,_[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(_[`--n-color`]=i.color,_[`--n-option-color-hover`]=i.optionColorHover,_[`--n-option-color-active`]=i.optionColorActive,_[`--n-option-text-color`]=i.optionTextColor,_[`--n-option-text-color-hover`]=i.optionTextColorHover,_[`--n-option-text-color-active`]=i.optionTextColorActive,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,_[`--n-prefix-color`]=i.prefixColor,_[`--n-suffix-color`]=i.suffixColor,_[`--n-group-header-text-color`]=i.groupHeaderTextColor),_}),B=v?C(`dropdown`,S(()=>`${b.value[0]}${e.inverted?`i`:``}`),z,e):void 0;return{mergedClsPrefix:_,mergedTheme:w,mergedSize:b,tmNodes:a,mergedShow:n,handleAfterLeave:()=>{e.animated&&k()},doUpdateShow:D,cssVars:v?void 0:z,themeClass:B?.themeClass,onRender:B?.onRender}},render(){let e=(e,t,n,i,a)=>{var o;let{mergedClsPrefix:s,menuProps:c}=this;(o=this.onRender)==null||o.call(this);let l=c?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},u={ref:W(t),class:[e,`${s}-dropdown`,`${s}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:s,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:a};return k($,r(this.$attrs,u,l))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return k(F,Object.assign({},te(this.$props,me),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{G as n,W as r,he as t};