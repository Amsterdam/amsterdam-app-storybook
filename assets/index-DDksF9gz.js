import{_ as M}from"./extends-CF3RwP-h.js";import{s as V,e as A}from"./index-Us49mgpR.js";import{r as n}from"./index-CBqU2yxZ.js";import{u as D}from"./TextAncestorContext-CxUfpxkU.js";import{u as N}from"./usePiwikTrackCustomEventFromProps-ByXbYGhF.js";import{V as W}from"./index-BySreB3I.js";var q=["activeOpacity","children","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onHideUnderlay","onLongPress","onPress","onPressIn","onPressOut","onShowUnderlay","rejectResponderTermination","style","testOnly_pressed","underlayColor"];function L(e,l){return{child:{opacity:e??.85},underlay:{backgroundColor:l===void 0?"black":l}}}function R(e){return e.onPress!=null||e.onPressIn!=null||e.onPressOut!=null||e.onLongPress!=null}function z(e,l){var t=e.activeOpacity,_=e.children,P=e.delayPressIn,f=e.delayPressOut,h=e.delayLongPress,s=e.disabled,C=e.focusable,a=e.onHideUnderlay,m=e.onLongPress,b=e.onPress,o=e.onPressIn,i=e.onPressOut,d=e.onShowUnderlay,v=e.rejectResponderTermination,I=e.style,u=e.testOnly_pressed,c=e.underlayColor,w=A(e,q),g=n.useRef(null),T=D(l,g),O=n.useState(u===!0?L(t,c):null),r=O[0],S=O[1],E=n.useCallback(()=>{R(e)&&(S(L(t,c)),d!=null&&d())},[t,d,e,c]),x=n.useCallback(()=>{u!==!0&&R(e)&&(S(null),a!=null&&a())},[a,e,u]),j=n.useMemo(()=>({cancelable:!v,disabled:s,delayLongPress:h,delayPressStart:P,delayPressEnd:f,onLongPress:m,onPress:b,onPressStart(y){E(),o!=null&&o(y)},onPressEnd(y){x(),i!=null&&i(y)}}),[h,P,f,s,m,b,o,i,v,E,x]),k=N(g,j),H=n.Children.only(_);return n.createElement(W,M({},w,k,{accessibilityDisabled:s,focusable:!s&&C!==!1,pointerEvents:s?"box-none":void 0,ref:T,style:[U.root,I,!s&&U.actionable,r&&r.underlay]}),n.cloneElement(H,{style:[H.props.style,r&&r.child]}))}var U=V.create({root:{userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),B=n.memo(n.forwardRef(z));B.displayName="TouchableHighlight";export{B as M};