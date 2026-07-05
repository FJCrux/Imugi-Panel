import{An as e,Bn as t,Bt as n,C as r,Ct as i,Dn as a,En as o,Fn as s,Gt as c,Hn as l,Jn as u,Jt as d,Kt as f,Mn as p,O as m,On as h,Ot as g,Rt as _,Sn as v,St as y,T as b,Tn as x,Ut as S,Vt as C,Xn as w,Xt as T,Yt as E,Zt as D,at as O,f as k,ht as A,in as j,jn as M,kt as N,mn as P,ot as F,pt as I,sn as L,st as ee,un as R,ut as z,v as B,vt as V,wn as H,wt as U,zn as W}from"./router-BIO1-tYH.js";import{c as te,d as G,f as K,g as ne,h as q,i as J,l as Y,m as re,p as ie,u as ae,v as oe}from"./Space-D_izr8eA.js";import{a as se,i as X,n as ce,r as Z,t as le}from"./Tag-SpLY0thm.js";import{_ as Q}from"./_common-CXfM0PR-.js";import{u as ue}from"./_plugin-vue_export-helper-D_EFaKSB.js";import{a as de,r as fe}from"./use-message-DyxAtDiS.js";import{A as pe,B as me,E as he,L as $,O as ge,k as _e,y as ve}from"./index-C_G8VDoQ.js";function ye(e){return e&-e}var be=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=ye(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=ye(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}else if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},xe;function Se(){return typeof document>`u`?!1:(xe===void 0&&(xe=`matchMedia`in window?window.matchMedia(`(pointer:coarse)`).matches:!1),xe)}var Ce;function we(){return typeof document>`u`?1:(Ce===void 0&&(Ce=`chrome`in window?window.devicePixelRatio:1),Ce)}var Te=`VVirtualListXScroll`;function Ee({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=u(0),i=u(0),a=P(()=>{let t=e.value;if(t.length===0)return null;let n=new be(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n});return s(Te,{startIndexRef:N(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),endIndexRef:N(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)}),columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:e=>{let t=a.value;return t===null?0:t.sum(e)}}),{listWidthRef:r,scrollLeftRef:i}}var De=v({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=x(Te);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Oe=Y(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[Y(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[Y(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),ke=v({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=U();Oe.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:ae,ssr:t}),p(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&b({key:n}):b({index:t})});let n=!1,r=!1;h(()=>{if(n=!1,!r){r=!0;return}b({top:g.value,left:o.value})}),M(()=>{n=!0,r||=!0});let i=N(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=P(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:o,listWidthRef:s}=Ee({columnsRef:w(e,`columns`),renderColRef:w(e,`renderCol`),renderItemWithColsRef:w(e,`renderItemWithCols`)}),c=u(null),l=u(void 0),d=new Map,f=P(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new be(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=d.get(n);a!==void 0&&i.add(t,a)}),i}),m=u(0),g=u(0),v=N(()=>Math.max(f.value.getBound(g.value-_(e.paddingTop))-1,0)),y=P(()=>{let{value:t}=l;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=v.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),b=(e,t)=>{if(typeof e==`number`){E(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)E(n,r,c);else if(i!==void 0)T(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&T(e,c,l)}else s===`bottom`?E(0,2**53-1,c):s===`top`&&E(0,0,c)},x,S=null;function T(t,n,r){let{value:i}=f,a=i.sum(t)+_(e.paddingTop);if(!r)c.value.scrollTo({left:0,top:a,behavior:n});else{x=t,S!==null&&window.clearTimeout(S),S=window.setTimeout(()=>{x=void 0,S=null},16);let{scrollTop:e,offsetHeight:r}=c.value;if(a>e){let o=i.get(t);a+o<=e+r||c.value.scrollTo({left:0,top:a+o-r,behavior:n})}else c.value.scrollTo({left:0,top:a,behavior:n})}}function E(e,t,n){c.value.scrollTo({left:e,top:t,behavior:n})}function D(t,r){if(n||e.ignoreItemResize||L(r.target))return;let{value:i}=f,o=a.value.get(t),s=i.get(o),l=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(l===s)return;l-e.itemSize===0?d.delete(t):d.set(t,l-e.itemSize);let u=l-s;if(u===0)return;i.add(o,u);let p=c.value;if(p!=null){if(x===void 0){let e=i.sum(o);p.scrollTop>e&&p.scrollBy(0,u)}else(o<x||o===x&&l+i.sum(o)>p.scrollTop+p.offsetHeight)&&p.scrollBy(0,u);I()}m.value++}let O=!Se(),k=!1;function A(t){var n;(n=e.onScroll)==null||n.call(e,t),(!O||!k)&&I()}function j(t){var n;if((n=e.onWheel)==null||n.call(e,t),O){let e=c.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/we(),e.scrollLeft+=t.deltaX/we(),I(),k=!0,oe(()=>{k=!1})}}}function F(t){if(n||L(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===l.value)return}else if(t.contentRect.height===l.value&&t.contentRect.width===s.value)return;l.value=t.contentRect.height,s.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function I(){let{value:e}=c;e!=null&&(g.value=e.scrollTop,o.value=e.scrollLeft)}function L(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:l,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:P(()=>{let{itemResizable:t}=e,n=C(f.value.sum());return m.value,[e.itemsStyle,{boxSizing:`content-box`,width:C(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:C(e.paddingTop),paddingBottom:C(e.paddingBottom)}]}),visibleItemsStyle:P(()=>(m.value,{transform:`translateY(${C(f.value.sum(v.value))})`})),viewportItems:y,listElRef:c,itemsElRef:u(null),scrollTo:b,handleListResize:F,handleListScroll:A,handleListWheel:j,handleItemResize:D}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return H(y,{onResize:this.handleListResize},{default:()=>{var i;return H(`div`,o(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):H(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[H(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:H(De,{index:s,item:a}),l=i==null?void 0:H(De,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?H(y,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}});function Ae(t,n){n&&(p(()=>{let{value:e}=t;e&&i.registerHandler(e,n)}),W(t,(e,t)=>{t&&i.unregisterHandler(t)},{deep:!1}),e(()=>{let{value:e}=t;e&&i.unregisterHandler(e)}))}function je(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function Me(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}var Ne=v({name:`Checkmark`,render(){return H(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},H(`g`,{fill:`none`},H(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),Pe=v({name:`Empty`,render(){return H(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},H(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),H(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`}))}}),Fe=v({props:{onFocus:Function,onBlur:Function},setup(e){return()=>H(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Ie=f(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[d(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[c(`+`,[d(`description`,`
 margin-top: 8px;
 `)])]),d(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Le=v({name:`Empty`,props:Object.assign(Object.assign({},b.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=ee(e),i=b(`Empty`,`-empty`,Ie,pe,e,t),{localeRef:a}=de(`Empty`),o=P(()=>e.description??r?.value?.Empty?.description),s=P(()=>r?.value?.Empty?.renderIcon||(()=>H(Pe,null))),c=P(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{[D(`iconSize`,t)]:r,[D(`fontSize`,t)]:a,textColor:o,iconColor:s,extraTextColor:c}}=i.value;return{"--n-icon-size":r,"--n-font-size":a,"--n-bezier":n,"--n-text-color":o,"--n-icon-color":s,"--n-extra-text-color":c}}),l=n?F(`empty`,P(()=>{let t=``,{size:n}=e;return t+=n[0],t}),c,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:s,localizedDescription:P(()=>o.value||a.value.description),cssVars:n?void 0:c,themeClass:l?.themeClass,onRender:l?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),H(`div`,{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?H(`div`,{class:`${t}-empty__icon`},e.icon?e.icon():H(r,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?H(`div`,{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?H(`div`,{class:`${t}-empty__extra`},e.extra()):null)}}),Re=v({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=x(q);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):$(i[this.labelField],i,!1),s=H(`div`,Object.assign({},a,{class:[`${e}-base-select-group-header`,a?.class]}),o);return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}});function ze(e,t){return H(j,{name:`fade-in-scale-up-transition`},{default:()=>e?H(r,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>H(Ne)}):null})}var Be=v({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:s,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:f}=x(q),p=N(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function m(t){let{tmNode:n}=e;n.disabled||d(t,n)}function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e,{value:r}=p;n.disabled||r||f(t,n)}return{multiple:r,isGrouped:N(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:l,nodeProps:u,isPending:p,isSelected:N(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[c.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:s,renderLabel:a,renderOption:o,handleMouseMove:g,handleMouseEnter:h,handleClick:m}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=ze(n,e),p=c?[c(t,n),a&&f]:[$(t[this.labelField],t,n),a&&f],m=o?.(t),h=H(`div`,Object.assign({},m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:Me([l,m?.onClick]),onMouseenter:Me([u,m?.onMouseenter]),onMousemove:Me([d,m?.onMousemove])}),H(`div`,{class:`${e}-base-select-option__content`},p));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),Ve=f(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[f(`scrollbar`,`
 max-height: var(--n-height);
 `),f(`virtual-list`,`
 max-height: var(--n-height);
 `),f(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[d(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),f(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),f(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),d(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),d(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),d(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),d(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),f(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),f(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[E(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),c(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),c(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),E(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),E(`pending`,[c(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),E(`selected`,`
 color: var(--n-option-text-color-active);
 `,[c(`&::before`,`
 background-color: var(--n-option-color-active);
 `),E(`pending`,[c(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),E(`disabled`,`
 cursor: not-allowed;
 `,[T(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),E(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),d(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[ge({enterScale:`0.5`})])])]),He=v({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},b.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(t){let{mergedClsPrefixRef:r,mergedRtlRef:i,mergedComponentPropsRef:o}=ee(t),c=m(`InternalSelectMenu`,i,r),l=b(`InternalSelectMenu`,`-internal-select-menu`,Ve,_e,t,w(t,`clsPrefix`)),d=u(null),f=u(null),h=u(null),g=P(()=>t.treeMate.getFlattenedNodes()),v=P(()=>Z(g.value)),y=u(null);function x(){let{treeMate:e}=t,n=null,{value:r}=t;r===null?n=e.getFirstAvailableNode():(n=t.multiple?e.getNode((r||[])[(r||[]).length-1]):e.getNode(r),(!n||n.disabled)&&(n=e.getFirstAvailableNode())),G(n||null)}function S(){let{value:e}=y;e&&!t.treeMate.getNode(e.key)&&(y.value=null)}let C;W(()=>t.show,e=>{e?C=W(()=>t.treeMate,()=>{t.resetMenuOnOptionsChange?(t.autoPending?x():S(),a(K)):S()},{immediate:!0}):C?.()},{immediate:!0}),e(()=>{C?.()});let T=P(()=>_(l.value.self[D(`optionHeight`,t.size)])),E=P(()=>n(l.value.self[D(`padding`,t.size)])),O=P(()=>t.multiple&&Array.isArray(t.value)?new Set(t.value):new Set),k=P(()=>{let e=g.value;return e&&e.length===0}),A=P(()=>o?.value?.Select?.renderEmpty);function j(e){let{onToggle:n}=t;n&&n(e)}function M(e){let{onScroll:n}=t;n&&n(e)}function N(e){var t;(t=h.value)==null||t.sync(),M(e)}function I(){var e;(e=h.value)==null||e.sync()}function L(){let{value:e}=y;return e||null}function R(e,t){t.disabled||G(t,!1)}function z(e,t){t.disabled||j(t)}function B(e){var n;se(e,`action`)||(n=t.onKeyup)==null||n.call(t,e)}function V(e){var n;se(e,`action`)||(n=t.onKeydown)==null||n.call(t,e)}function H(e){var n;(n=t.onMousedown)==null||n.call(t,e),!t.focusable&&e.preventDefault()}function U(){let{value:e}=y;e&&G(e.getNext({loop:!0}),!0)}function te(){let{value:e}=y;e&&G(e.getPrev({loop:!0}),!0)}function G(e,t=!1){y.value=e,t&&K()}function K(){var e,n;let r=y.value;if(!r)return;let i=v.value(r.key);i!==null&&(t.virtualScroll?(e=f.value)==null||e.scrollTo({index:i}):(n=h.value)==null||n.scrollTo({index:i,elSize:T.value}))}function ne(e){var n;d.value?.contains(e.target)&&((n=t.onFocus)==null||n.call(t,e))}function J(e){var n;d.value?.contains(e.relatedTarget)||(n=t.onBlur)==null||n.call(t,e)}s(q,{handleOptionMouseEnter:R,handleOptionClick:z,valueSetRef:O,pendingTmNodeRef:y,nodePropsRef:w(t,`nodeProps`),showCheckmarkRef:w(t,`showCheckmark`),multipleRef:w(t,`multiple`),valueRef:w(t,`value`),renderLabelRef:w(t,`renderLabel`),renderOptionRef:w(t,`renderOption`),labelFieldRef:w(t,`labelField`),valueFieldRef:w(t,`valueField`)}),s(re,d),p(()=>{let{value:e}=h;e&&e.sync()});let Y=P(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:r},self:{height:i,borderRadius:a,color:o,groupHeaderTextColor:s,actionDividerColor:c,optionTextColorPressed:u,optionTextColor:d,optionTextColorDisabled:f,optionTextColorActive:p,optionOpacityDisabled:m,optionCheckColor:h,actionTextColor:g,optionColorPending:_,optionColorActive:v,loadingColor:y,loadingSize:b,optionColorActivePending:x,[D(`optionFontSize`,e)]:S,[D(`optionHeight`,e)]:C,[D(`optionPadding`,e)]:w}}=l.value;return{"--n-height":i,"--n-action-divider-color":c,"--n-action-text-color":g,"--n-bezier":r,"--n-border-radius":a,"--n-color":o,"--n-option-font-size":S,"--n-group-header-text-color":s,"--n-option-check-color":h,"--n-option-color-pending":_,"--n-option-color-active":v,"--n-option-color-active-pending":x,"--n-option-height":C,"--n-option-opacity-disabled":m,"--n-option-text-color":d,"--n-option-text-color-active":p,"--n-option-text-color-disabled":f,"--n-option-text-color-pressed":u,"--n-option-padding":w,"--n-option-padding-left":n(w,`left`),"--n-option-padding-right":n(w,`right`),"--n-loading-color":y,"--n-loading-size":b}}),{inlineThemeDisabled:ie}=t,ae=ie?F(`internal-select-menu`,P(()=>t.size[0]),Y,t):void 0,oe={selfRef:d,next:U,prev:te,getPendingTmNode:L};return Ae(d,t.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:r,rtlEnabled:c,virtualListRef:f,scrollbarRef:h,itemSize:T,padding:E,flattenedNodes:g,empty:k,mergedRenderEmpty:A,virtualListContainer(){let{value:e}=f;return e?.listElRef},virtualListContent(){let{value:e}=f;return e?.itemsElRef},doScroll:M,handleFocusin:ne,handleFocusout:J,handleKeyUp:B,handleKeyDown:V,handleMouseDown:H,handleVirtualListResize:I,handleVirtualListScroll:N,cssVars:ie?void 0:Y,themeClass:ae?.themeClass,onRender:ae?.onRender},oe)},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),H(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},A(e.header,e=>e&&H(`div`,{class:`${n}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?H(`div`,{class:`${n}-base-select-menu__loading`},H(B,{clsPrefix:n,strokeWidth:20})):this.empty?H(`div`,{class:`${n}-base-select-menu__empty`,"data-empty":!0},I(e.empty,()=>[this.mergedRenderEmpty?.call(this)||H(Le,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):H(k,Object.assign({ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?H(ke,{ref:`virtualListRef`,class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?H(Re,{key:e.key,clsPrefix:n,tmNode:e}):e.ignored?null:H(Be,{clsPrefix:n,key:e.key,tmNode:e})}):H(`div`,{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?H(Re,{key:e.key,clsPrefix:n,tmNode:e}):H(Be,{clsPrefix:n,key:e.key,tmNode:e})))}),A(e.action,e=>e&&[H(`div`,{class:`${n}-base-select-menu__action`,"data-action":!0,key:`action`},e),H(Fe,{onFocus:this.onTabOut,key:`focus-detector`})]))}}),Ue=c([f(`base-selection`,`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[f(`base-loading`,`
 color: var(--n-loading-color);
 `),f(`base-selection-tags`,`min-height: var(--n-height);`),d(`border, state-border`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),d(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),f(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[d(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),f(`base-selection-overlay`,`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[d(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),f(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[d(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),f(`base-selection-tags`,`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),f(`base-selection-label`,`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[f(`base-selection-input`,`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[d(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),d(`render-label`,`
 color: var(--n-text-color);
 `)]),T(`disabled`,[c(`&:hover`,[d(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),E(`focus`,[d(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),E(`active`,[d(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),f(`base-selection-label`,`background-color: var(--n-color-active);`),f(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),E(`disabled`,`cursor: not-allowed;`,[d(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),f(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[f(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),d(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),f(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),f(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),f(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[d(`input`,`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),d(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>E(`${e}-status`,[d(`state-border`,`border: var(--n-border-${e});`),T(`disabled`,[c(`&:hover`,[d(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),E(`active`,[d(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),f(`base-selection-label`,`background-color: var(--n-color-active-${e});`),f(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),E(`focus`,[d(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),f(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),f(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[c(`&:last-child`,`padding-right: 0;`),f(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[d(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),We=v({name:`InternalSelection`,props:Object.assign(Object.assign({},b.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){let{mergedClsPrefixRef:r,mergedRtlRef:i}=ee(e),o=m(`InternalSelection`,i,r),s=u(null),c=u(null),l=u(null),d=u(null),f=u(null),h=u(null),g=u(null),_=u(null),v=u(null),y=u(null),x=u(!1),S=u(!1),C=u(!1),T=b(`InternalSelection`,`-internal-selection`,Ue,he,e,w(e,`clsPrefix`)),E=P(()=>e.clearable&&!e.disabled&&(C.value||e.active)),O=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):$(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),k=P(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),A=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function j(){var t;let{value:n}=s;if(n){let{value:r}=c;r&&(r.style.width=`${n.offsetWidth}px`,e.maxTagCount!==`responsive`&&((t=v.value)==null||t.sync({showAllItemsBeforeCalculate:!1})))}}function M(){let{value:e}=y;e&&(e.style.display=`none`)}function N(){let{value:e}=y;e&&(e.style.display=`inline-block`)}W(w(e,`active`),e=>{e||M()}),W(w(e,`pattern`),()=>{e.multiple&&a(j)});function I(t){let{onFocus:n}=e;n&&n(t)}function L(t){let{onBlur:n}=e;n&&n(t)}function R(t){let{onDeleteOption:n}=e;n&&n(t)}function z(t){let{onClear:n}=e;n&&n(t)}function B(t){let{onPatternInput:n}=e;n&&n(t)}function V(e){(!e.relatedTarget||!l.value?.contains(e.relatedTarget))&&I(e)}function H(e){l.value?.contains(e.relatedTarget)||L(e)}function U(e){z(e)}function te(){C.value=!0}function G(){C.value=!1}function K(t){!e.active||!e.filterable||t.target!==c.value&&t.preventDefault()}function ne(e){R(e)}let q=u(!1);function J(t){if(t.key===`Backspace`&&!q.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&ne(t[t.length-1])}}let Y=null;function re(t){let{value:n}=s;n&&(n.textContent=t.target.value,j()),e.ignoreComposition&&q.value?Y=t:B(t)}function ie(){q.value=!0}function ae(){q.value=!1,e.ignoreComposition&&B(Y),Y=null}function oe(t){var n;S.value=!0,(n=e.onPatternFocus)==null||n.call(e,t)}function se(t){var n;S.value=!1,(n=e.onPatternBlur)==null||n.call(e,t)}function X(){var t,n;if(e.filterable)S.value=!1,(t=h.value)==null||t.blur(),(n=c.value)==null||n.blur();else if(e.multiple){let{value:e}=d;e?.blur()}else{let{value:e}=f;e?.blur()}}function ce(){var t,n,r;e.filterable?(S.value=!1,(t=h.value)==null||t.focus()):e.multiple?(n=d.value)==null||n.focus():(r=f.value)==null||r.focus()}function Z(){let{value:e}=c;e&&(N(),e.focus())}function le(){let{value:e}=c;e&&e.blur()}function Q(e){let{value:t}=g;t&&t.setTextContent(`+${e}`)}function ue(){let{value:e}=_;return e}function de(){return c.value}let fe=null;function pe(){fe!==null&&window.clearTimeout(fe)}function me(){e.active||(pe(),fe=window.setTimeout(()=>{A.value&&(x.value=!0)},100))}function ge(){pe()}function _e(e){e||(pe(),x.value=!1)}W(A,e=>{e||(x.value=!1)}),p(()=>{t(()=>{let t=h.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=S.value?-1:0)})}),Ae(l,e.onResize);let{inlineThemeDisabled:ve}=e,ye=P(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:r},self:{fontWeight:i,borderRadius:a,color:o,placeholderColor:s,textColor:c,paddingSingle:l,paddingMultiple:u,caretColor:d,colorDisabled:f,textColorDisabled:p,placeholderColorDisabled:m,colorActive:h,boxShadowFocus:g,boxShadowActive:_,boxShadowHover:v,border:y,borderFocus:b,borderHover:x,borderActive:S,arrowColor:C,arrowColorDisabled:w,loadingColor:E,colorActiveWarning:O,boxShadowFocusWarning:k,boxShadowActiveWarning:A,boxShadowHoverWarning:j,borderWarning:M,borderFocusWarning:N,borderHoverWarning:P,borderActiveWarning:F,colorActiveError:I,boxShadowFocusError:L,boxShadowActiveError:ee,boxShadowHoverError:R,borderError:z,borderFocusError:B,borderHoverError:V,borderActiveError:H,clearColor:U,clearColorHover:W,clearColorPressed:te,clearSize:G,arrowSize:K,[D(`height`,t)]:ne,[D(`fontSize`,t)]:q}}=T.value,J=n(l),Y=n(u);return{"--n-bezier":r,"--n-border":y,"--n-border-active":S,"--n-border-focus":b,"--n-border-hover":x,"--n-border-radius":a,"--n-box-shadow-active":_,"--n-box-shadow-focus":g,"--n-box-shadow-hover":v,"--n-caret-color":d,"--n-color":o,"--n-color-active":h,"--n-color-disabled":f,"--n-font-size":q,"--n-height":ne,"--n-padding-single-top":J.top,"--n-padding-multiple-top":Y.top,"--n-padding-single-right":J.right,"--n-padding-multiple-right":Y.right,"--n-padding-single-left":J.left,"--n-padding-multiple-left":Y.left,"--n-padding-single-bottom":J.bottom,"--n-padding-multiple-bottom":Y.bottom,"--n-placeholder-color":s,"--n-placeholder-color-disabled":m,"--n-text-color":c,"--n-text-color-disabled":p,"--n-arrow-color":C,"--n-arrow-color-disabled":w,"--n-loading-color":E,"--n-color-active-warning":O,"--n-box-shadow-focus-warning":k,"--n-box-shadow-active-warning":A,"--n-box-shadow-hover-warning":j,"--n-border-warning":M,"--n-border-focus-warning":N,"--n-border-hover-warning":P,"--n-border-active-warning":F,"--n-color-active-error":I,"--n-box-shadow-focus-error":L,"--n-box-shadow-active-error":ee,"--n-box-shadow-hover-error":R,"--n-border-error":z,"--n-border-focus-error":B,"--n-border-hover-error":V,"--n-border-active-error":H,"--n-clear-size":G,"--n-clear-color":U,"--n-clear-color-hover":W,"--n-clear-color-pressed":te,"--n-arrow-size":K,"--n-font-weight":i}}),be=ve?F(`internal-selection`,P(()=>e.size[0]),ye,e):void 0;return{mergedTheme:T,mergedClearable:E,mergedClsPrefix:r,rtlEnabled:o,patternInputFocused:S,filterablePlaceholder:O,label:k,selected:A,showTagsPanel:x,isComposing:q,counterRef:g,counterWrapperRef:_,patternInputMirrorRef:s,patternInputRef:c,selfRef:l,multipleElRef:d,singleElRef:f,patternInputWrapperRef:h,overflowRef:v,inputTagElRef:y,handleMouseDown:K,handleFocusin:V,handleClear:U,handleMouseEnter:te,handleMouseLeave:G,handleDeleteOption:ne,handlePatternKeyDown:J,handlePatternInputInput:re,handlePatternInputBlur:se,handlePatternInputFocus:oe,handleMouseEnterCounter:me,handleMouseLeaveCounter:ge,handleFocusout:H,handleCompositionEnd:ae,handleCompositionStart:ie,onPopoverUpdateShow:_e,focus:ce,focusInput:Z,blur:X,blurInput:le,updateCounter:Q,getCounter:ue,getTail:de,renderLabel:e.renderLabel,cssVars:ve?void 0:ye,themeClass:be?.themeClass,onRender:be?.onRender}},render(){let{status:e,multiple:t,size:n,disabled:r,filterable:i,maxTagCount:a,bordered:o,clsPrefix:s,ellipsisTagPopoverProps:c,onRender:l,renderTag:u,renderLabel:d}=this;l?.();let f=a===`responsive`,p=typeof a==`number`,m=f||p,h=H(z,null,{default:()=>H(fe,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),g;if(t){let{labelField:e}=this,t=t=>H(`div`,{class:`${s}-base-selection-tag-wrapper`,key:t.value},u?u({option:t,handleClose:()=>{this.handleDeleteOption(t)}}):H(le,{size:n,closable:!t.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(t,!0):$(t[e],t,!0)})),o=()=>(p?this.selectedOptions.slice(0,a):this.selectedOptions).map(t),l=i?H(`div`,{class:`${s}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},H(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),H(`span`,{ref:`patternInputMirrorRef`,class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,_=f?()=>H(`div`,{class:`${s}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},H(le,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0,v;if(p){let e=this.selectedOptions.length-a;e>0&&(v=H(`div`,{class:`${s}-base-selection-tag-wrapper`,key:`__counter__`},H(le,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${e}`})))}let y=f?i?H(X,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:_,tail:()=>l}):H(X,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:_}):p&&v?o().concat(v):o(),b=m?()=>H(`div`,{class:`${s}-base-selection-popover`},f?o():this.selectedOptions.map(t)):void 0,x=m?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,S=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?H(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},H(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,C=i?H(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-tags`},y,f?null:l,h):H(`div`,{ref:`multipleElRef`,class:`${s}-base-selection-tags`,tabindex:r?void 0:0},y,h);g=H(R,null,m?H(J,Object.assign({},x,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>C,default:b}):C,S)}else if(i){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=this.active?!1:this.selected;g=H(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-label`,title:this.patternInputFocused?void 0:je(this.label)},H(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${s}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),n?H(`div`,{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:`input`},H(`div`,{class:`${s}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):$(this.label,this.selectedOption,!0))):null,t?H(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},H(`div`,{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,h)}else g=H(`div`,{ref:`singleElRef`,class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?H(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},H(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):H(`div`,{class:`${s}-base-selection-input`,title:je(this.label),key:`input`},H(`div`,{class:`${s}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):$(this.label,this.selectedOption,!0))),h);return H(`div`,{ref:`selfRef`,class:[`${s}-base-selection`,this.rtlEnabled&&`${s}-base-selection--rtl`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},g,o?H(`div`,{class:`${s}-base-selection__border`}):null,o?H(`div`,{class:`${s}-base-selection__state-border`}):null)}});function Ge(e){return e.type===`group`}function Ke(e){return e.type===`ignored`}function qe(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Je(e,t){return{getIsGroup:Ge,getIgnored:Ke,getKey(t){return Ge(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function Ye(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(Ge(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(Ke(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function Xe(e,t,n){let r=new Map;return e.forEach(e=>{Ge(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var Ze=c([f(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),f(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[ge({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),Qe=v({name:`Select`,props:Object.assign(Object.assign({},b.props),{to:ie.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a}=ee(e),o=b(`Select`,`-select`,Ze,ve,e,t),s=u(e.defaultValue),c=ue(w(e,`value`),s),l=u(!1),d=u(``),f=ne(e,[`items`,`options`]),p=u([]),m=u([]),h=P(()=>m.value.concat(p.value).concat(f.value)),_=P(()=>{let{filter:t}=e;if(t)return t;let{labelField:n,valueField:r}=e;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return qe(e,i);let a=t[r];return typeof a==`string`?qe(e,a):typeof a==`number`?qe(e,String(a)):!1}}),v=P(()=>{if(e.remote)return f.value;{let{value:t}=h,{value:n}=d;return!n.length||!e.filterable?t:Ye(t,_.value,n,e.childrenField)}}),y=P(()=>{let{valueField:t,childrenField:n}=e,r=Je(t,n);return ce(v.value,r)}),x=P(()=>Xe(h.value,e.valueField,e.childrenField)),C=u(!1),T=ue(w(e,`show`),C),E=u(null),D=u(null),k=u(null),{localeRef:A}=de(`Select`),j=P(()=>e.placeholder??A.value.placeholder),M=[],N=u(new Map),I=P(()=>{let{fallbackOption:t}=e;if(t===void 0){let{labelField:t,valueField:n}=e;return e=>({[t]:String(e),[n]:e})}return t===!1?!1:e=>Object.assign(t(e),{value:e})});function L(t){let n=e.remote,{value:r}=N,{value:i}=x,{value:a}=I,o=[];return t.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let R=P(()=>{if(e.multiple){let{value:e}=c;return Array.isArray(e)?L(e):[]}return null}),z=P(()=>{let{value:t}=c;return!e.multiple&&!Array.isArray(t)?t===null?null:L([t])[0]||null:null}),B=O(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:a?.value?.Select?.size||`medium`}}),{mergedSizeRef:H,mergedDisabledRef:U,mergedStatusRef:te}=B;function G(t,n){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=e,{nTriggerFormChange:o,nTriggerFormInput:c}=B;r&&V(r,t,n),a&&V(a,t,n),i&&V(i,t,n),s.value=t,o(),c()}function K(t){let{onBlur:n}=e,{nTriggerFormBlur:r}=B;n&&V(n,t),r()}function q(){let{onClear:t}=e;t&&V(t)}function J(t){let{onFocus:n,showOnFocus:r}=e,{nTriggerFormFocus:i}=B;n&&V(n,t),i(),r&&X()}function Y(t){let{onSearch:n}=e;n&&V(n,t)}function re(t){let{onScroll:n}=e;n&&V(n,t)}function ae(){var t;let{remote:n,multiple:r}=e;if(n){let{value:n}=N;if(r){let{valueField:r}=e;(t=R.value)==null||t.forEach(e=>{n.set(e[r],e)})}else{let t=z.value;t&&n.set(t[e.valueField],t)}}}function oe(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&V(n,t),r&&V(r,t),C.value=t}function X(){U.value||(oe(!0),C.value=!0,e.filterable&&Me())}function Z(){oe(!1)}function le(){d.value=``,m.value=M}let Q=u(!1);function fe(){e.filterable&&(Q.value=!0)}function pe(){e.filterable&&(Q.value=!1,T.value||le())}function he(){U.value||(T.value?e.filterable?Me():Z():X())}function $(e){(k.value?.selfRef)?.contains(e.relatedTarget)||(l.value=!1,K(e),Z())}function ge(e){J(e),l.value=!0}function _e(){l.value=!0}function ye(e){E.value?.$el.contains(e.relatedTarget)||(l.value=!1,K(e),Z())}function be(){var e;(e=E.value)==null||e.focus(),Z()}function xe(e){T.value&&(E.value?.$el.contains(S(e))||Z())}function Se(t){if(!Array.isArray(t))return[];if(I.value)return Array.from(t);{let{remote:n}=e,{value:r}=x;if(n){let{value:e}=N;return t.filter(t=>r.has(t)||e.has(t))}else return t.filter(e=>r.has(e))}}function Ce(e){we(e.rawNode)}function we(t){if(U.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=e;if(n&&!r){let{value:e}=m,t=e[0]||null;if(t){let e=p.value;e.length?e.push(t):p.value=[t],m.value=M}}if(r&&N.value.set(t[a],t),e.multiple){let e=Se(c.value),o=e.findIndex(e=>e===t[a]);if(~o){if(e.splice(o,1),n&&!r){let e=Te(t[a]);~e&&(p.value.splice(e,1),i&&(d.value=``))}}else e.push(t[a]),i&&(d.value=``);G(e,L(e))}else{if(n&&!r){let e=Te(t[a]);~e?p.value=[p.value[e]]:p.value=M}je(),Z(),G(t[a],t)}}function Te(t){return p.value.findIndex(n=>n[e.valueField]===t)}function Ee(t){T.value||X();let{value:n}=t.target;d.value=n;let{tag:r,remote:i}=e;if(Y(n),r&&!i){if(!n){m.value=M;return}let{onCreate:t}=e,r=t?t(n):{[e.labelField]:n,[e.valueField]:n},{valueField:i,labelField:a}=e;f.value.some(e=>e[i]===r[i]||e[a]===r[a])||p.value.some(e=>e[i]===r[i]||e[a]===r[a])?m.value=M:m.value=[r]}}function De(t){t.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=e;!n&&e.filterable&&Z(),r&&!i&&a&&(p.value=M),q(),n?G([],[]):G(null,null)}function Oe(e){!se(e,`action`)&&!se(e,`empty`)&&!se(e,`header`)&&e.preventDefault()}function ke(e){re(e)}function Ae(t){var n,r,i;if(!e.keyboard){t.preventDefault();return}switch(t.key){case` `:if(e.filterable)break;t.preventDefault();case`Enter`:if(!E.value?.isComposing){if(T.value){let t=k.value?.getPendingTmNode();t?Ce(t):e.filterable||(Z(),je())}else if(X(),e.tag&&Q.value){let t=m.value[0];if(t){let n=t[e.valueField],{value:r}=c;e.multiple&&Array.isArray(r)&&r.includes(n)||we(t)}}}t.preventDefault();break;case`ArrowUp`:if(t.preventDefault(),e.loading)return;T.value&&((n=k.value)==null||n.prev());break;case`ArrowDown`:if(t.preventDefault(),e.loading)return;T.value?(r=k.value)==null||r.next():X();break;case`Escape`:T.value&&(me(t),Z()),(i=E.value)==null||i.focus();break}}function je(){var e;(e=E.value)==null||e.focus()}function Me(){var e;(e=E.value)==null||e.focusInput()}function Ne(){var e;T.value&&((e=D.value)==null||e.syncPosition())}ae(),W(w(e,`options`),ae);let Pe={focus:()=>{var e;(e=E.value)==null||e.focus()},focusInput:()=>{var e;(e=E.value)==null||e.focusInput()},blur:()=>{var e;(e=E.value)==null||e.blur()},blurInput:()=>{var e;(e=E.value)==null||e.blurInput()}},Fe=P(()=>{let{self:{menuBoxShadow:e}}=o.value;return{"--n-menu-box-shadow":e}}),Ie=i?F(`select`,void 0,Fe,e):void 0;return Object.assign(Object.assign({},Pe),{mergedStatus:te,mergedClsPrefix:t,mergedBordered:n,namespace:r,treeMate:y,isMounted:g(),triggerRef:E,menuRef:k,pattern:d,uncontrolledShow:C,mergedShow:T,adjustedTo:ie(e),uncontrolledValue:s,mergedValue:c,followerRef:D,localizedPlaceholder:j,selectedOption:z,selectedOptions:R,mergedSize:H,mergedDisabled:U,focused:l,activeWithoutMenuOpen:Q,inlineThemeDisabled:i,onTriggerInputFocus:fe,onTriggerInputBlur:pe,handleTriggerOrMenuResize:Ne,handleMenuFocus:_e,handleMenuBlur:ye,handleMenuTabOut:be,handleTriggerClick:he,handleToggle:Ce,handleDeleteOption:we,handlePatternInput:Ee,handleClear:De,handleTriggerBlur:$,handleTriggerFocus:ge,handleKeydown:Ae,handleMenuAfterLeave:le,handleMenuClickOutside:xe,handleMenuScroll:ke,handleMenuKeydown:Ae,handleMenuMousedown:Oe,mergedTheme:o,cssVars:i?void 0:Fe,themeClass:Ie?.themeClass,onRender:Ie?.onRender})},render(){return H(`div`,{class:`${this.mergedClsPrefix}-select`},H(K,null,{default:()=>[H(G,null,{default:()=>H(We,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),H(te,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ie.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>H(j,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),l(H(He,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[L,this.mergedShow],[Q,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Q,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Me as a,Le as i,Je as n,ke as o,He as r,Qe as t};