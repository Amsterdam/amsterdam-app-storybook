import{_ as ge}from"./extends-98964cd2.js";import{c as se,S as Ie,_ as xe}from"./index-1401012c.js";import{r as E}from"./index-76fb7be0.js";import{j as ee,i as ue,h as _e}from"./base-color-66d0fb4c.js";import{u as Ue}from"./index-56eca6dc.js";import{V as ke}from"./index-8aec880e.js";var De=()=>{};function Fe(){var e=!1;if(se)try{var n={};Object.defineProperty(n,"passive",{get(){return e=!0,!1}}),window.addEventListener("test",null,n),window.removeEventListener("test",null,n)}catch{}return e}var Ke=Fe();function Ne(e){return e==null?!1:Ke?e:!!e.capture}function Be(){return this.cancelBubble}function Re(){return this.defaultPrevented}function Ae(e){return e.nativeEvent=e,e.persist=De,e.isDefaultPrevented=Re,e.isPropagationStopped=Be,e}function i(e,n,r,s){var o=Ne(s),u=a=>r(Ae(a));return e.addEventListener(n,u,o),function(){e!=null&&e.removeEventListener(n,u,o)}}var Ve=()=>typeof window<"u"&&window.PointerEvent!=null,m="keyboard",l="keyboard",_,U,k=!1,We=new Set,D="keyboard",g="mouse",X="touch",je="blur",ie="contextmenu",Ye="focus",$e="keydown",le="mousedown",ve="mousemove",de="mouseup",ce="pointerdown",fe="pointermove",ye="scroll",me="selectionchange",Ee="touchcancel",Pe="touchmove",be="touchstart",Ge="visibilitychange",ne={passive:!0},d={capture:!0,passive:!0};function Oe(){(_!=null||U!=null)&&(_!=null&&(l=_,_=null),U!=null&&(m=U,U=null),p())}function Xe(){_=l,U=m,m=D,l=D,p(),k=!1}function ze(){Oe()}function qe(e){e.metaKey||e.altKey||e.ctrlKey||l!==D&&(l=D,m=D,p())}function Je(){document.visibilityState!=="hidden"&&Oe()}function y(e){var n=e.type;if(Ve()){if(n===ce){m!==e.pointerType&&(l=e.pointerType,m=e.pointerType,p());return}if(n===fe){l!==e.pointerType&&(l=e.pointerType,p());return}}else{if(k||(n===le&&m!==g&&(l=g,m=g,p()),n===ve&&l!==g&&(l=g,p())),n===be){k=!0,e.touches&&e.touches.length>1&&(k=!1),m!==X&&(l=X,m=X,p());return}(n===ie||n===de||n===me||n===ye||n===Ee||n===Pe)&&(k=!1)}}se&&(i(window,je,Xe,ne),i(window,Ye,ze,ne),i(document,$e,qe,d),i(document,Ge,Je,d),i(document,ce,y,d),i(document,fe,y,d),i(document,ie,y,d),i(document,le,y,d),i(document,ve,y,d),i(document,de,y,d),i(document,Ee,y,d),i(document,Pe,y,d),i(document,be,y,d),i(document,me,y,d),i(document,ye,y,d));function p(){var e={activeModality:m,modality:l};We.forEach(n=>{n(e)})}function Qe(){return l}function I(e,n){var r=ee(()=>new Map),s=ee(()=>(o,u)=>{var a=r.get(o);a!=null&&a(),u==null&&(r.delete(o),u=()=>{});var v=i(o,e,u,n);return r.set(o,v),v});return ue(()=>()=>{r.forEach(o=>{o()}),r.clear()},[r]),s}var Ze={},x={passive:!0},te="react-gui:hover:lock",re="react-gui:hover:unlock",en=()=>typeof window<"u"&&window.PointerEvent!=null;function oe(e,n,r){var s=document.createEvent("CustomEvent"),o=r||Ze,u=o.bubbles,a=u===void 0?!0:u,v=o.cancelable,P=v===void 0?!0:v,b=o.detail;s.initCustomEvent(n,a,P,b),e.dispatchEvent(s)}function z(e){var n=e.pointerType;return n??Qe()}function nn(e,n){var r=n.contain,s=n.disabled,o=n.onHoverStart,u=n.onHoverChange,a=n.onHoverUpdate,v=n.onHoverEnd,P=en(),b=I(P?"pointermove":"mousemove",x),F=I(P?"pointerenter":"mouseenter",x),M=I(P?"pointerleave":"mouseleave",x),L=I(te,x),S=I(re,x);ue(()=>{var O=e.current;if(O!==null){var T=function(t){v!=null&&v(t),u!=null&&u(!1),b(O,null),M(O,null)},K=function(t){var c=e.current;c!=null&&z(t)!=="touch"&&(r&&oe(c,re),T(t))},N=function(t){z(t)!=="touch"&&a!=null&&(t.x==null&&(t.x=t.clientX),t.y==null&&(t.y=t.clientY),a(t))},w=function(t){o!=null&&o(t),u!=null&&u(!0),a!=null&&b(O,s?null:N),M(O,s?null:K)},B=function(t){var c=e.current;if(c!=null&&z(t)!=="touch"){r&&oe(c,te),w(t);var R=function(H){H.target!==c&&T(t)},V=function(H){H.target!==c&&w(t)};L(c,s?null:R),S(c,s?null:V)}};F(O,s?null:B)}},[F,b,M,L,S,r,s,o,u,a,v,e])}var tn=["children","delayLongPress","delayPressIn","delayPressOut","disabled","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","tabIndex","testOnly_hovered","testOnly_pressed"];function rn(e,n){var r=e.children,s=e.delayLongPress,o=e.delayPressIn,u=e.delayPressOut,a=e.disabled,v=e.onBlur,P=e.onContextMenu,b=e.onFocus,F=e.onHoverIn,M=e.onHoverOut,L=e.onKeyDown,S=e.onLongPress,O=e.onPress,T=e.onPressMove,K=e.onPressIn,N=e.onPressOut,w=e.style,B=e.tabIndex,C=e.testOnly_hovered,t=e.testOnly_pressed,c=xe(e,tn),R=q(C===!0),V=R[0],W=R[1],H=q(!1),he=H[0],A=H[1],J=q(t===!0),Le=J[0],Q=J[1],h=E.useRef(null),we=_e(n,h),Ce=E.useMemo(()=>({delayLongPress:s,delayPressStart:o,delayPressEnd:u,disabled:a,onLongPress:S,onPress:O,onPressChange:Q,onPressStart:K,onPressMove:T,onPressEnd:N}),[s,o,u,a,S,O,K,T,N,Q]),j=Ue(h,Ce),Y=j.onContextMenu,$=j.onKeyDown;nn(h,{contain:!0,disabled:a,onHoverChange:W,onHoverStart:F,onHoverEnd:M});var Z={hovered:V,focused:he,pressed:Le},He=E.useCallback(f=>{f.nativeEvent.target===h.current&&(A(!1),v!=null&&v(f))},[h,A,v]),Me=E.useCallback(f=>{f.nativeEvent.target===h.current&&(A(!0),b!=null&&b(f))},[h,A,b]),Se=E.useCallback(f=>{Y!=null&&Y(f),P!=null&&P(f)},[P,Y]),Te=E.useCallback(f=>{$!=null&&$(f),L!=null&&L(f)},[L,$]),G;return B!==void 0?G=B:G=a?-1:0,E.createElement(ke,ge({},c,j,{"aria-disabled":a,onBlur:He,onContextMenu:Se,onFocus:Me,onKeyDown:Te,ref:we,style:[a?ae.disabled:ae.active,typeof w=="function"?w(Z):w],tabIndex:G}),typeof r=="function"?r(Z):r)}function q(e){var n=E.useState(!1),r=n[0],s=n[1];return[r||e,s]}var ae=Ie.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{pointerEvents:"box-none"}}),pe=E.memo(E.forwardRef(rn));pe.displayName="Pressable";const dn=pe;export{dn as P};