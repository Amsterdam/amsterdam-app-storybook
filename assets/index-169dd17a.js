import{b as Q,u as U,g as V,d as X,S as Y,_ as x}from"./index-9d7eb5a2.js";import{r as a}from"./index-76fb7be0.js";import{d as Z,b as ee,c as oe,f as te,k as ne,m as re,t as ae,s as le,T as b,e as se,g as ie,a as de,u as ue,p as Se}from"./TextAncestorContext-3b992cff.js";var ce=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],Re=Object.assign({},Z,ee,oe,te,ne,re,ae,le,{href:!0,lang:!0,pointerEvents:!0}),pe=e=>Se(e,Re),C=a.forwardRef((e,g)=>{var l=e.hrefAttrs,n=e.numberOfLines,s=e.onClick,w=e.onLayout,r=e.onPress,k=e.onMoveShouldSetResponder,y=e.onMoveShouldSetResponderCapture,P=e.onResponderEnd,L=e.onResponderGrant,M=e.onResponderMove,T=e.onResponderReject,A=e.onResponderRelease,E=e.onResponderStart,O=e.onResponderTerminate,W=e.onResponderTerminationRequest,_=e.onScrollShouldSetResponder,j=e.onScrollShouldSetResponderCapture,D=e.onSelectionChangeShouldSetResponder,$=e.onSelectionChangeShouldSetResponderCapture,q=e.onStartShouldSetResponder,G=e.onStartShouldSetResponderCapture,R=e.selectable,H=Q(e,ce),i=a.useContext(b),S=a.useRef(null),z=U(),B=z.direction;se(S,w),ie(S,{onMoveShouldSetResponder:k,onMoveShouldSetResponderCapture:y,onResponderEnd:P,onResponderGrant:L,onResponderMove:M,onResponderReject:T,onResponderRelease:A,onResponderStart:E,onResponderTerminate:O,onResponderTerminationRequest:W,onScrollShouldSetResponder:_,onScrollShouldSetResponderCapture:j,onSelectionChangeShouldSetResponder:D,onSelectionChangeShouldSetResponderCapture:$,onStartShouldSetResponder:q,onStartShouldSetResponderCapture:G});var N=a.useCallback(c=>{s!=null?s(c):r!=null&&(c.stopPropagation(),r(c))},[s,r]),p=i?"span":"div",F=e.lang!=null?V(e.lang):null,d=e.dir||F,I=d||B,o=pe(H);if(o.dir=d,i||(o.dir=d??"auto"),(s||r)&&(o.onClick=N),o.style=[n!=null&&n>1&&{WebkitLineClamp:n},i===!0?t.textHasAncestor$raw:t.text$raw,n===1&&t.textOneLine,n!=null&&n>1&&t.textMultiLine,e.style,R===!0&&t.selectable,R===!1&&t.notSelectable,r&&t.pressable],e.href!=null&&(p="a",l!=null)){var h=l.download,f=l.rel,u=l.target;h!=null&&(o.download=h),f!=null&&(o.rel=f),typeof u=="string"&&(o.target=u.charAt(0)!=="_"?"_"+u:u)}var J=de(o),K=ue(S,J,g);o.ref=K;var v=X(p,o,{writingDirection:I});return i?v:a.createElement(b.Provider,{value:!0},v)});C.displayName="Text";var m={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},t=Y.create({text$raw:m,textHasAncestor$raw:x(x({},m),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const xe=C;export{xe as T};