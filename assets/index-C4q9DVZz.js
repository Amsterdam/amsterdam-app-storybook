import{_ as M}from"./extends-CF3RwP-h.js";import{s as V,_ as A}from"./index-CEE--Juu.js";import{r as n}from"./index-mfbfsM12.js";import{g as D}from"./TextAncestorContext-Cvz4PlE2.js";import{a as N}from"./usePiwikTrackCustomEventFromProps-B2suRJ87.js";import{V as W}from"./index-BDsvWohO.js";var q=["activeOpacity","children","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onHideUnderlay","onLongPress","onPress","onPressIn","onPressOut","onShowUnderlay","rejectResponderTermination","style","testOnly_pressed","underlayColor"];function H(e,l){return{child:{opacity:e??.85},underlay:{backgroundColor:l===void 0?"black":l}}}function L(e){return e.onPress!=null||e.onPressIn!=null||e.onPressOut!=null||e.onLongPress!=null}function z(e,l){var t=e.activeOpacity,U=e.children,P=e.delayPressIn,f=e.delayPressOut,h=e.delayLongPress,s=e.disabled,C=e.focusable,a=e.onHideUnderlay,m=e.onLongPress,b=e.onPress,o=e.onPressIn,i=e.onPressOut,d=e.onShowUnderlay,g=e.rejectResponderTermination,I=e.style,u=e.testOnly_pressed,c=e.underlayColor,w=A(e,q),v=n.useRef(null),T=D(l,v),O=n.useState(u===!0?H(t,c):null),r=O[0],S=O[1],E=n.useCallback(()=>{L(e)&&(S(H(t,c)),d!=null&&d())},[t,d,e,c]),_=n.useCallback(()=>{u!==!0&&L(e)&&(S(null),a!=null&&a())},[a,e,u]),j=n.useMemo(()=>({cancelable:!g,disabled:s,delayLongPress:h,delayPressStart:P,delayPressEnd:f,onLongPress:m,onPress:b,onPressStart(y){E(),o!=null&&o(y)},onPressEnd(y){_(),i!=null&&i(y)}}),[h,P,f,s,m,b,o,i,g,E,_]),k=N(v,j),x=n.Children.only(U);return n.createElement(W,M({},w,k,{accessibilityDisabled:s,focusable:!s&&C!==!1,pointerEvents:s?"box-none":void 0,ref:T,style:[R.root,I,!s&&R.actionable,r&&r.underlay]}),n.cloneElement(x,{style:[x.props.style,r&&r.child]}))}var R=V.create({root:{userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),B=n.memo(n.forwardRef(z));B.displayName="TouchableHighlight";export{B as M};
