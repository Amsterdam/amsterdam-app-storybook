import{e as J,s as h,f as K,_ as d}from"./index-Us49mgpR.js";import{_ as M}from"./extends-CF3RwP-h.js";import{r as o}from"./index-CBqU2yxZ.js";import{V as g}from"./index-BySreB3I.js";var Q=/^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/,X=e=>e.match(Q)[1],Y=e=>!isNaN(parseFloat(e))&&isFinite(e),S=(e,i)=>{if(typeof e=="string"){var b=parseFloat(e)*i,v=X(e);return""+b+v}else if(Y(e))return e*i},ee=["aria-label","accessibilityLabel","activeThumbColor","activeTrackColor","disabled","onValueChange","style","thumbColor","trackColor","value"],te={},k="0px 1px 3px rgba(0,0,0,0.5)",re=k+", 0 0 0 10px rgba(0,0,0,0.1)",ae="#A3D3CF",le="#939393",R="#D5D5D5",oe="#009688",ie="#FAFAFA",L="#BDBDBD",ne=o.forwardRef((e,i)=>{var b=e["aria-label"],v=e.accessibilityLabel,n=e.activeThumbColor,l=e.activeTrackColor,p=e.disabled,u=p===void 0?!1:p,w=e.onValueChange,x=e.style,T=x===void 0?te:x,s=e.thumbColor,t=e.trackColor,D=e.value,r=D===void 0?!1:D,V=J(e,ee),f=o.useRef(null);function N(y){w!=null&&w(y.nativeEvent.target.checked)}function F(y){var z=y.nativeEvent.type==="focus",G=z?re:k;f.current!=null&&(f.current.style.boxShadow=G)}var _=h.flatten(T),I=_.height,j=_.width,c=I||"20px",A=S(c,2),W=j>A?j:A,$=S(c,.5),m=function(){return r===!0?t!=null&&typeof t=="object"?t.true:l??ae:t!=null&&typeof t=="object"?t.false:t??le}(),C=r?n??oe:s??ie,E=c,B=E,O=[a.root,T,u&&a.cursorDefault,{height:c,width:W}],H=function(){return r===!0?typeof l=="string"&&l!=null||typeof t=="object"&&t!=null&&t.true?m:R:typeof t=="string"&&t!=null||typeof t=="object"&&t!=null&&t.false?m:R}(),U=function(){return r===!0?n==null?L:C:s==null?L:C}(),P=[a.track,{backgroundColor:u?H:m,borderRadius:$}],Z=[a.thumb,r&&a.thumbActive,{backgroundColor:u?U:C,height:E,marginStart:r?S(B,-1):0,width:B}],q=K("input",{"aria-label":b||v,checked:r,disabled:u,onBlur:F,onChange:N,onFocus:F,ref:i,style:[a.nativeControl,a.cursorInherit],type:"checkbox",role:"switch"});return o.createElement(g,M({},V,{style:O}),o.createElement(g,{style:P}),o.createElement(g,{ref:f,style:Z}),q)});ne.displayName="Switch";var a=h.create({root:{cursor:"pointer",userSelect:"none"},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},track:d(d({forcedColorAdjust:"none"},h.absoluteFillObject),{},{height:"70%",margin:"auto",transitionDuration:"0.1s",width:"100%"}),thumb:{forcedColorAdjust:"none",alignSelf:"flex-start",borderRadius:"100%",boxShadow:k,start:"0%",transform:"translateZ(0)",transitionDuration:"0.1s"},thumbActive:{insetInlineStart:"100%"},nativeControl:d(d({},h.absoluteFillObject),{},{height:"100%",margin:0,appearance:"none",padding:0,width:"100%"})});export{ne as S};
