import{_ as M}from"./extends-CF3RwP-h.js";import{_ as V,s as A}from"./index-Cm4QxXoK.js";import{r as n}from"./index-B-xgG2PE.js";import{c as D}from"./TextAncestorContext-Z5dgoe9Q.js";import{b as N}from"./usePiwikTrackCustomEventFromProps-DpXGD6gu.js";import{V as W}from"./index-DoMT7H_C.js";var q=["activeOpacity","children","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onHideUnderlay","onLongPress","onPress","onPressIn","onPressOut","onShowUnderlay","rejectResponderTermination","style","testOnly_pressed","underlayColor"];function H(e,l){return{child:{opacity:e??.85},underlay:{backgroundColor:l===void 0?"black":l}}}function L(e){return e.onPress!=null||e.onPressIn!=null||e.onPressOut!=null||e.onLongPress!=null}function z(e,l){var t=e.activeOpacity,U=e.children,P=e.delayPressIn,f=e.delayPressOut,h=e.delayLongPress,s=e.disabled,C=e.focusable,a=e.onHideUnderlay,m=e.onLongPress,b=e.onPress,o=e.onPressIn,i=e.onPressOut,d=e.onShowUnderlay,v=e.rejectResponderTermination,I=e.style,u=e.testOnly_pressed,c=e.underlayColor,w=V(e,q),g=n.useRef(null),T=D(l,g),O=n.useState(u===!0?H(t,c):null),r=O[0],S=O[1],E=n.useCallback(()=>{L(e)&&(S(H(t,c)),d!=null&&d())},[t,d,e,c]),_=n.useCallback(()=>{u!==!0&&L(e)&&(S(null),a!=null&&a())},[a,e,u]),j=n.useMemo(()=>({cancelable:!v,disabled:s,delayLongPress:h,delayPressStart:P,delayPressEnd:f,onLongPress:m,onPress:b,onPressStart(y){E(),o!=null&&o(y)},onPressEnd(y){_(),i!=null&&i(y)}}),[h,P,f,s,m,b,o,i,v,E,_]),k=N(g,j),x=n.Children.only(U);return n.createElement(W,M({},w,k,{accessibilityDisabled:s,focusable:!s&&C!==!1,pointerEvents:s?"box-none":void 0,ref:T,style:[R.root,I,!s&&R.actionable,r&&r.underlay]}),n.cloneElement(x,{style:[x.props.style,r&&r.child]}))}var R=A.create({root:{userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),B=n.memo(n.forwardRef(z));B.displayName="TouchableHighlight";export{B as M};
