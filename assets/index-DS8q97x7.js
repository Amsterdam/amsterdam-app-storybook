import{r as u}from"./index-Cs7sjTYM.js";import{u as _e,g as He,a as Ie,s as $e}from"./index-BRs9ZavV.js";import{d as Be,a as je,c as qe,f as Ae,k as Ge,m as Ve,t as We,s as Je,h as Qe,u as Ue,b as Xe,e as Ye,g as Ze,p as Ne}from"./TextAncestorContext-CgUd_yOy.js";import{T as S}from"./index-adwSuxHZ.js";var et=(e,l)=>{var i=e.selectionEnd,v=e.selectionStart,m=l.start,R=l.end;return m!==v||R!==i},W=(e,l)=>{if(et(e,l)){var i=l.start,v=l.end;try{e.setSelectionRange(i,v||i)}catch{}}},tt=Object.assign({},Be,je,qe,Ae,Ge,Ve,We,Je,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0}),nt=e=>Ne(e,tt);function rt(e){return e.isComposing||e.keyCode===229}var k=null,J=u.forwardRef((e,l)=>{var i=e.autoCapitalize,v=i===void 0?"sentences":i,m=e.autoComplete,R=e.autoCompleteType,O=e.autoCorrect,F=O===void 0?!0:O,g=e.blurOnSubmit,Q=e.caretHidden,U=e.clearTextOnFocus,P=e.dir,X=e.editable,Y=e.enterKeyHint,d=e.inputMode,M=e.keyboardType,z=e.multiline,c=z===void 0?!1:z,Z=e.numberOfLines,L=e.onBlur,D=e.onChange,K=e.onChangeText,p=e.onContentSizeChange,_=e.onFocus,H=e.onKeyPress,N=e.onLayout,ee=e.onMoveShouldSetResponder,te=e.onMoveShouldSetResponderCapture,ne=e.onResponderEnd,re=e.onResponderGrant,ae=e.onResponderMove,oe=e.onResponderReject,le=e.onResponderRelease,ue=e.onResponderStart,ie=e.onResponderTerminate,ce=e.onResponderTerminationRequest,se=e.onScrollShouldSetResponder,de=e.onScrollShouldSetResponderCapture,I=e.onSelectionChange,fe=e.onSelectionChangeShouldSetResponder,ve=e.onSelectionChangeShouldSetResponderCapture,he=e.onStartShouldSetResponder,Se=e.onStartShouldSetResponderCapture,$=e.onSubmitEditing,me=e.placeholderTextColor,B=e.readOnly,Ce=B===void 0?!1:B,ye=e.returnKeyType,j=e.rows,q=e.secureTextEntry,C=q===void 0?!1:q,b=e.selection,Re=e.selectTextOnFocus,ge=e.showSoftInputOnFocus,A=e.spellCheck,a,y;if(d!=null)y=d,d==="email"?a="email":d==="tel"?a="tel":d==="search"?a="search":d==="url"?a="url":a="text";else if(M!=null)switch(M){case"email-address":a="email";break;case"number-pad":case"numeric":y="numeric";break;case"decimal-pad":y="decimal";break;case"phone-pad":a="tel";break;case"search":case"web-search":a="search";break;case"url":a="url";break;default:a="text"}C&&(a="password");var f=u.useRef({height:null,width:null}),s=u.useRef(null),x=u.useRef(null),G=u.useRef(!1);u.useEffect(()=>{s.current&&x.current&&W(s.current,x.current),G.current=C},[C]);var T=u.useCallback(t=>{if(c&&p&&t!=null){var r=t.scrollHeight,o=t.scrollWidth;(r!==f.current.height||o!==f.current.width)&&(f.current.height=r,f.current.width=o,p({nativeEvent:{contentSize:{height:f.current.height,width:f.current.width}}}))}},[c,p]),pe=u.useMemo(()=>t=>{t!=null&&(t.clear=function(){t!=null&&(t.value="")},t.isFocused=function(){return t!=null&&S.currentlyFocusedField()===t},T(t))},[T]);function be(t){S._currentlyFocusedNode=null,L&&(t.nativeEvent.text=t.target.value,L(t))}function xe(t){var r=t.target,o=r.value;t.nativeEvent.text=o,T(r),D&&D(t),K&&K(o)}function Te(t){var r=t.target;_&&(t.nativeEvent.text=r.value,_(t)),r!=null&&(S._currentlyFocusedNode=r,U&&(r.value=""),Re&&(k!=null&&clearTimeout(k),k=setTimeout(()=>{r!=null&&document.activeElement===r&&r.select()},0)))}function Ee(t){var r=t.target;t.stopPropagation();var o=!c,E=g??o,h=t.nativeEvent,V=rt(h);H&&H(t),t.key==="Enter"&&!t.shiftKey&&!V&&!t.isDefaultPrevented()&&((g||!c)&&$&&(t.preventDefault(),h.text=t.target.value,$(t)),E&&r!=null&&setTimeout(()=>r.blur(),0))}function ke(t){try{var r=t.target,o=r.selectionStart,E=r.selectionEnd,h={start:o,end:E};I&&(t.nativeEvent.selection=h,t.nativeEvent.text=t.target.value,I(t)),G.current===C&&(x.current=h)}catch{}}Qe(()=>{var t=s.current;t!=null&&b!=null&&W(t,b),document.activeElement===t&&(S._currentlyFocusedNode=t)},[s,b]);var we=c?"textarea":"input";Ue(s,N),Xe(s,{onMoveShouldSetResponder:ee,onMoveShouldSetResponderCapture:te,onResponderEnd:ne,onResponderGrant:re,onResponderMove:ae,onResponderReject:oe,onResponderRelease:le,onResponderStart:ue,onResponderTerminate:ie,onResponderTerminationRequest:ce,onScrollShouldSetResponder:se,onScrollShouldSetResponderCapture:de,onSelectionChangeShouldSetResponder:fe,onSelectionChangeShouldSetResponderCapture:ve,onStartShouldSetResponder:he,onStartShouldSetResponderCapture:Se});var Oe=_e(),Fe=Oe.direction,n=nt(e);n.autoCapitalize=v,n.autoComplete=m||R||"on",n.autoCorrect=F?"on":"off",n.dir=P!==void 0?P:"auto",n.enterKeyHint=Y||ye,n.inputMode=y,n.onBlur=be,n.onChange=xe,n.onFocus=Te,n.onKeyDown=Ee,n.onSelect=ke,n.readOnly=Ce===!0||X===!1,n.rows=c?j??Z:1,n.spellCheck=A??F,n.style=[{"--placeholderTextColor":me},w.textinput$raw,w.placeholder,e.style,Q&&w.caretHidden],n.type=c?void 0:a,n.virtualkeyboardpolicy=ge===!1?"manual":"auto";var Pe=Ye(n),Me=Ze(s,Pe,pe,l);n.ref=Me;var ze=e.lang!=null?He(e.lang):null,Le=e.dir||ze,De=Le||Fe,Ke=Ie(we,n,{writingDirection:De});return Ke});J.displayName="TextInput";J.State=S;var w=$e.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"},caretHidden:{caretColor:"transparent"}});export{J as T};
