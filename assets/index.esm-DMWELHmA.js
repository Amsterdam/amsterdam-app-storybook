import{R as m}from"./index-B-xgG2PE.js";var de=e=>e.type==="checkbox",te=e=>e instanceof Date,B=e=>e==null;const tt=e=>typeof e=="object";var E=e=>!B(e)&&!Array.isArray(e)&&tt(e)&&!te(e),rt=e=>E(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,xt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,st=(e,s)=>e.has(xt(s)),wt=e=>{const s=e.constructor&&e.constructor.prototype;return E(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(t||E(e)))if(s=t?[]:{},!t&&!wt(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=M(e[a]));else return e;return s}var Fe=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,f=(e,s,t)=>{if(!s||!E(e))return t;const a=Fe(s.split(/[,[\].]+?/)).reduce((n,l)=>B(n)?n:n[l],e);return D(a)||a===e?D(e[s])?t:e[s]:a},q=e=>typeof e=="boolean",Oe=e=>/^\w*$/.test(e),it=e=>Fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),x=(e,s,t)=>{let a=-1;const n=Oe(s)?[s]:it(s),l=n.length,y=l-1;for(;++a<l;){const g=n[a];let w=t;if(a!==y){const S=e[g];w=E(S)||Array.isArray(S)?S:isNaN(+n[a+1])?{}:[]}if(g==="__proto__")return;e[g]=w,e=e[g]}return e};const ve={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},p={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},at=m.createContext(null),Le=()=>m.useContext(at),Ht=e=>{const{children:s,...t}=e;return m.createElement(at.Provider,{value:t},s)};var ut=(e,s,t,a=!0)=>{const n={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const y=l;return s._proxyFormState[y]!==p.all&&(s._proxyFormState[y]=!a||p.all),t&&(t[y]=!0),e[y]}});return n},N=e=>E(e)&&!Object.keys(e).length,lt=(e,s,t,a)=>{t(e);const{name:n,...l}=e;return N(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(y=>s[y]===(!a||p.all))},fe=e=>Array.isArray(e)?e:[e],nt=(e,s,t)=>!e||!s||e===s||fe(e).some(a=>a&&(t?a===s:a.startsWith(s)||s.startsWith(a)));function Ue(e){const s=m.useRef(e);s.current=e,m.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function Dt(e){const s=Le(),{control:t=s.control,disabled:a,name:n,exact:l}=e||{},[y,g]=m.useState(t._formState),w=m.useRef(!0),S=m.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),_=m.useRef(n);return _.current=n,Ue({disabled:a,next:v=>w.current&&nt(_.current,v.name,l)&&lt(v,S.current,t._updateFormState)&&g({...t._formState,...v}),subject:t._subjects.state}),m.useEffect(()=>(w.current=!0,S.current.isValid&&t._updateValid(!0),()=>{w.current=!1}),[t]),ut(y,t,S.current,!1)}var $=e=>typeof e=="string",ot=(e,s,t,a,n)=>$(e)?(a&&s.watch.add(e),f(t,e,n)):Array.isArray(e)?e.map(l=>(a&&s.watch.add(l),f(t,l))):(a&&(s.watchAll=!0),t);function Et(e){const s=Le(),{control:t=s.control,name:a,defaultValue:n,disabled:l,exact:y}=e||{},g=m.useRef(a);g.current=a,Ue({disabled:l,subject:t._subjects.values,next:_=>{nt(g.current,_.name,y)&&S(M(ot(g.current,t._names,_.values||t._formValues,!1,n)))}});const[w,S]=m.useState(t._getWatch(a,n));return m.useEffect(()=>t._removeUnmounted()),w}function St(e){const s=Le(),{name:t,disabled:a,control:n=s.control,shouldUnregister:l}=e,y=st(n._names.array,t),g=Et({control:n,name:t,defaultValue:f(n._formValues,t,f(n._defaultValues,t,e.defaultValue)),exact:!0}),w=Dt({control:n,name:t,exact:!0}),S=m.useRef(n.register(t,{...e.rules,value:g,...q(e.disabled)?{disabled:e.disabled}:{}}));return m.useEffect(()=>{const _=n._options.shouldUnregister||l,v=(W,H)=>{const U=f(n._fields,W);U&&U._f&&(U._f.mount=H)};if(v(t,!0),_){const W=M(f(n._options.defaultValues,t));x(n._defaultValues,t,W),D(f(n._formValues,t))&&x(n._formValues,t,W)}return()=>{(y?_&&!n._state.action:_)?n.unregister(t):v(t,!1)}},[t,n,y,l]),m.useEffect(()=>{f(n._fields,t)&&n._updateDisabledField({disabled:a,fields:n._fields,name:t,value:f(n._fields,t)._f.value})},[a,t,n]),{field:{name:t,value:g,...q(a)||w.disabled?{disabled:w.disabled||a}:{},onChange:m.useCallback(_=>S.current.onChange({target:{value:rt(_),name:t},type:ve.CHANGE}),[t]),onBlur:m.useCallback(()=>S.current.onBlur({target:{value:f(n._formValues,t),name:t},type:ve.BLUR}),[t,n]),ref:m.useCallback(_=>{const v=f(n._fields,t);v&&_&&(v._f.ref={focus:()=>_.focus(),select:()=>_.select(),setCustomValidity:W=>_.setCustomValidity(W),reportValidity:()=>_.reportValidity()})},[n._fields,t])},formState:w,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!f(w.errors,t)},isDirty:{enumerable:!0,get:()=>!!f(w.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!f(w.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!f(w.validatingFields,t)},error:{enumerable:!0,get:()=>f(w.errors,t)}})}}const $t=e=>e.render(St(e));var kt=(e,s,t,a,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:n||!0}}:{},Ke=e=>({isOnSubmit:!e||e===p.onSubmit,isOnBlur:e===p.onBlur,isOnChange:e===p.onChange,isOnAll:e===p.all,isOnTouch:e===p.onTouched}),Ge=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ce=(e,s,t,a)=>{for(const n of t||Object.keys(e)){const l=f(e,n);if(l){const{_f:y,...g}=l;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],n)&&!a)return!0;if(y.ref&&s(y.ref,y.name)&&!a)return!0;if(ce(g,s))break}else if(E(g)&&ce(g,s))break}}};var Ct=(e,s,t)=>{const a=fe(f(e,t));return x(a,"root",s[t]),x(e,t,a),e},Re=e=>e.type==="file",J=e=>typeof e=="function",_e=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},he=e=>$(e),Be=e=>e.type==="radio",be=e=>e instanceof RegExp;const Ye={value:!1,isValid:!1},ze={value:!0,isValid:!0};var ft=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:Ye}return Ye};const Je={isValid:!1,value:null};var ct=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Je):Je;function Qe(e,s,t="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||q(e)&&!e)return{type:t,message:he(e)?e:"",ref:s}}var ie=e=>E(e)&&!be(e)?e:{value:e,message:""},Xe=async(e,s,t,a,n)=>{const{ref:l,refs:y,required:g,maxLength:w,minLength:S,min:_,max:v,pattern:W,validate:H,name:U,valueAsNumber:Ae,mount:K,disabled:Q}=e._f,F=f(s,U);if(!K||Q)return{};const G=y?y[0]:l,Y=V=>{a&&G.reportValidity&&(G.setCustomValidity(q(V)?"":V||""),G.reportValidity())},k={},re=Be(l),ye=de(l),Z=re||ye,se=(Ae||Re(l))&&D(l.value)&&D(F)||_e(l)&&l.value===""||F===""||Array.isArray(F)&&!F.length,P=kt.bind(null,U,t,k),ge=(V,A,C,R=z.maxLength,j=z.minLength)=>{const I=V?A:C;k[U]={type:V?R:j,message:I,ref:l,...P(V?R:j,I)}};if(n?!Array.isArray(F)||!F.length:g&&(!Z&&(se||B(F))||q(F)&&!F||ye&&!ft(y).isValid||re&&!ct(y).isValid)){const{value:V,message:A}=he(g)?{value:!!g,message:g}:ie(g);if(V&&(k[U]={type:z.required,message:A,ref:G,...P(z.required,A)},!t))return Y(A),k}if(!se&&(!B(_)||!B(v))){let V,A;const C=ie(v),R=ie(_);if(!B(F)&&!isNaN(F)){const j=l.valueAsNumber||F&&+F;B(C.value)||(V=j>C.value),B(R.value)||(A=j<R.value)}else{const j=l.valueAsDate||new Date(F),I=le=>new Date(new Date().toDateString()+" "+le),ae=l.type=="time",ue=l.type=="week";$(C.value)&&F&&(V=ae?I(F)>I(C.value):ue?F>C.value:j>new Date(C.value)),$(R.value)&&F&&(A=ae?I(F)<I(R.value):ue?F<R.value:j<new Date(R.value))}if((V||A)&&(ge(!!V,C.message,R.message,z.max,z.min),!t))return Y(k[U].message),k}if((w||S)&&!se&&($(F)||n&&Array.isArray(F))){const V=ie(w),A=ie(S),C=!B(V.value)&&F.length>+V.value,R=!B(A.value)&&F.length<+A.value;if((C||R)&&(ge(C,V.message,A.message),!t))return Y(k[U].message),k}if(W&&!se&&$(F)){const{value:V,message:A}=ie(W);if(be(V)&&!F.match(V)&&(k[U]={type:z.pattern,message:A,ref:l,...P(z.pattern,A)},!t))return Y(A),k}if(H){if(J(H)){const V=await H(F,s),A=Qe(V,G);if(A&&(k[U]={...A,...P(z.validate,A.message)},!t))return Y(A.message),k}else if(E(H)){let V={};for(const A in H){if(!N(V)&&!t)break;const C=Qe(await H[A](F,s),G,A);C&&(V={...C,...P(A,C.message)},Y(C.message),t&&(k[U]=V))}if(!N(V)&&(k[U]={ref:G,...V},!t))return k}}return Y(!0),k};function Tt(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=D(e)?a++:e[s[a++]];return e}function Ot(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function T(e,s){const t=Array.isArray(s)?s:Oe(s)?[s]:it(s),a=t.length===1?e:Tt(e,t),n=t.length-1,l=t[n];return a&&delete a[l],n!==0&&(E(a)&&N(a)||Array.isArray(a)&&Ot(a))&&T(e,t.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}},Ce=e=>B(e)||!tt(e);function X(e,s){if(Ce(e)||Ce(s))return e===s;if(te(e)&&te(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const n of t){const l=e[n];if(!a.includes(n))return!1;if(n!=="ref"){const y=s[n];if(te(l)&&te(y)||E(l)&&E(y)||Array.isArray(l)&&Array.isArray(y)?!X(l,y):l!==y)return!1}}return!0}var dt=e=>e.type==="select-multiple",Lt=e=>Be(e)||de(e),Se=e=>_e(e)&&e.isConnected,yt=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function Ve(e,s={}){const t=Array.isArray(e);if(E(e)||t)for(const a in e)Array.isArray(e[a])||E(e[a])&&!yt(e[a])?(s[a]=Array.isArray(e[a])?[]:{},Ve(e[a],s[a])):B(e[a])||(s[a]=!0);return s}function gt(e,s,t){const a=Array.isArray(e);if(E(e)||a)for(const n in e)Array.isArray(e[n])||E(e[n])&&!yt(e[n])?D(s)||Ce(t[n])?t[n]=Array.isArray(e[n])?Ve(e[n],[]):{...Ve(e[n])}:gt(e[n],B(s)?{}:s[n],t[n]):t[n]=!X(e[n],s[n]);return t}var ne=(e,s)=>gt(e,s,Ve(s)),ht=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>D(e)?e:s?e===""?NaN:e&&+e:t&&$(e)?new Date(e):a?a(e):e;function ke(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Re(s)?s.files:Be(s)?ct(e.refs).value:dt(s)?[...s.selectedOptions].map(({value:t})=>t):de(s)?ft(e.refs).value:ht(D(s.value)?e.ref.value:s.value,e)}var Ut=(e,s,t,a)=>{const n={};for(const l of e){const y=f(s,l);y&&x(n,l,y._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:a}},oe=e=>D(e)?e:be(e)?e.source:E(e)?be(e.value)?e.value.source:e.value:e;const Ze="AsyncFunction";var Rt=e=>(!e||!e.validate)&&!!(J(e.validate)&&e.validate.constructor.name===Ze||E(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Ze)),Bt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function et(e,s,t){const a=f(e,t);if(a||Oe(t))return{error:a,name:t};const n=t.split(".");for(;n.length;){const l=n.join("."),y=f(s,l),g=f(e,l);if(y&&!Array.isArray(y)&&t!==l)return{name:t};if(g&&g.type)return{name:l,error:g};n.pop()}return{name:t}}var Mt=(e,s,t,a,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?a.isOnBlur:n.isOnBlur)?!e:(t?a.isOnChange:n.isOnChange)?e:!0,Nt=(e,s)=>!Fe(f(e,s)).length&&T(e,s);const Pt={mode:p.onSubmit,reValidateMode:p.onChange,shouldFocusError:!0};function It(e={}){let s={...Pt,...e},t={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},n=E(s.defaultValues)||E(s.values)?M(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:M(n),y={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,S=0;const _={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Ee(),array:Ee(),state:Ee()},W=Ke(s.mode),H=Ke(s.reValidateMode),U=s.criteriaMode===p.all,Ae=r=>i=>{clearTimeout(S),S=setTimeout(r,i)},K=async r=>{if(!e.disabled&&(_.isValid||r)){const i=s.resolver?N((await Z()).errors):await P(a,!0);i!==t.isValid&&v.state.next({isValid:i})}},Q=(r,i)=>{!e.disabled&&(_.isValidating||_.validatingFields)&&((r||Array.from(g.mount)).forEach(u=>{u&&(i?x(t.validatingFields,u,i):T(t.validatingFields,u))}),v.state.next({validatingFields:t.validatingFields,isValidating:!N(t.validatingFields)}))},F=(r,i=[],u,d,c=!0,o=!0)=>{if(d&&u&&!e.disabled){if(y.action=!0,o&&Array.isArray(f(a,r))){const h=u(f(a,r),d.argA,d.argB);c&&x(a,r,h)}if(o&&Array.isArray(f(t.errors,r))){const h=u(f(t.errors,r),d.argA,d.argB);c&&x(t.errors,r,h),Nt(t.errors,r)}if(_.touchedFields&&o&&Array.isArray(f(t.touchedFields,r))){const h=u(f(t.touchedFields,r),d.argA,d.argB);c&&x(t.touchedFields,r,h)}_.dirtyFields&&(t.dirtyFields=ne(n,l)),v.state.next({name:r,isDirty:V(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else x(l,r,i)},G=(r,i)=>{x(t.errors,r,i),v.state.next({errors:t.errors})},Y=r=>{t.errors=r,v.state.next({errors:t.errors,isValid:!1})},k=(r,i,u,d)=>{const c=f(a,r);if(c){const o=f(l,r,D(u)?f(n,r):u);D(o)||d&&d.defaultChecked||i?x(l,r,i?o:ke(c._f)):R(r,o),y.mount&&K()}},re=(r,i,u,d,c)=>{let o=!1,h=!1;const b={name:r};if(!e.disabled){const O=!!(f(a,r)&&f(a,r)._f&&f(a,r)._f.disabled);if(!u||d){_.isDirty&&(h=t.isDirty,t.isDirty=b.isDirty=V(),o=h!==b.isDirty);const L=O||X(f(n,r),i);h=!!(!O&&f(t.dirtyFields,r)),L||O?T(t.dirtyFields,r):x(t.dirtyFields,r,!0),b.dirtyFields=t.dirtyFields,o=o||_.dirtyFields&&h!==!L}if(u){const L=f(t.touchedFields,r);L||(x(t.touchedFields,r,u),b.touchedFields=t.touchedFields,o=o||_.touchedFields&&L!==u)}o&&c&&v.state.next(b)}return o?b:{}},ye=(r,i,u,d)=>{const c=f(t.errors,r),o=_.isValid&&q(i)&&t.isValid!==i;if(e.delayError&&u?(w=Ae(()=>G(r,u)),w(e.delayError)):(clearTimeout(S),w=null,u?x(t.errors,r,u):T(t.errors,r)),(u?!X(c,u):c)||!N(d)||o){const h={...d,...o&&q(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...h},v.state.next(h)}},Z=async r=>{Q(r,!0);const i=await s.resolver(l,s.context,Ut(r||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return Q(r),i},se=async r=>{const{errors:i}=await Z(r);if(r)for(const u of r){const d=f(i,u);d?x(t.errors,u,d):T(t.errors,u)}else t.errors=i;return i},P=async(r,i,u={valid:!0})=>{for(const d in r){const c=r[d];if(c){const{_f:o,...h}=c;if(o){const b=g.array.has(o.name),O=c._f&&Rt(c._f);O&&_.validatingFields&&Q([d],!0);const L=await Xe(c,l,U,s.shouldUseNativeValidation&&!i,b);if(O&&_.validatingFields&&Q([d]),L[o.name]&&(u.valid=!1,i))break;!i&&(f(L,o.name)?b?Ct(t.errors,L,o.name):x(t.errors,o.name,L[o.name]):T(t.errors,o.name))}!N(h)&&await P(h,i,u)}}return u.valid},ge=()=>{for(const r of g.unMount){const i=f(a,r);i&&(i._f.refs?i._f.refs.every(u=>!Se(u)):!Se(i._f.ref))&&me(r)}g.unMount=new Set},V=(r,i)=>!e.disabled&&(r&&i&&x(l,r,i),!X(Me(),n)),A=(r,i,u)=>ot(r,g,{...y.mount?l:D(i)?n:$(r)?{[r]:i}:i},u,i),C=r=>Fe(f(y.mount?l:n,r,e.shouldUnregister?f(n,r,[]):[])),R=(r,i,u={})=>{const d=f(a,r);let c=i;if(d){const o=d._f;o&&(!o.disabled&&x(l,r,ht(i,o)),c=_e(o.ref)&&B(i)?"":i,dt(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?de(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(b=>b===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Re(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:r,values:{...l}})))}(u.shouldDirty||u.shouldTouch)&&re(r,c,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&le(r)},j=(r,i,u)=>{for(const d in i){const c=i[d],o=`${r}.${d}`,h=f(a,o);(g.array.has(r)||E(c)||h&&!h._f)&&!te(c)?j(o,c,u):R(o,c,u)}},I=(r,i,u={})=>{const d=f(a,r),c=g.array.has(r),o=M(i);x(l,r,o),c?(v.array.next({name:r,values:{...l}}),(_.isDirty||_.dirtyFields)&&u.shouldDirty&&v.state.next({name:r,dirtyFields:ne(n,l),isDirty:V(r,o)})):d&&!d._f&&!B(o)?j(r,o,u):R(r,o,u),Ge(r,g)&&v.state.next({...t}),v.values.next({name:y.mount?r:void 0,values:{...l}})},ae=async r=>{y.mount=!0;const i=r.target;let u=i.name,d=!0;const c=f(a,u),o=()=>i.type?ke(c._f):rt(r),h=b=>{d=Number.isNaN(b)||te(b)&&isNaN(b.getTime())||X(b,f(l,u,b))};if(c){let b,O;const L=o(),ee=r.type===ve.BLUR||r.type===ve.FOCUS_OUT,Ft=!Bt(c._f)&&!s.resolver&&!f(t.errors,u)&&!c._f.deps||Mt(ee,f(t.touchedFields,u),t.isSubmitted,H,W),we=Ge(u,g,ee);x(l,u,L),ee?(c._f.onBlur&&c._f.onBlur(r),w&&w(0)):c._f.onChange&&c._f.onChange(r);const De=re(u,L,ee,!1),At=!N(De)||we;if(!ee&&v.values.next({name:u,type:r.type,values:{...l}}),Ft)return _.isValid&&(e.mode==="onBlur"?ee&&K():K()),At&&v.state.next({name:u,...we?{}:De});if(!ee&&we&&v.state.next({...t}),s.resolver){const{errors:He}=await Z([u]);if(h(L),d){const mt=et(t.errors,a,u),$e=et(He,a,mt.name||u);b=$e.error,u=$e.name,O=N(He)}}else Q([u],!0),b=(await Xe(c,l,U,s.shouldUseNativeValidation))[u],Q([u]),h(L),d&&(b?O=!1:_.isValid&&(O=await P(a,!0)));d&&(c._f.deps&&le(c._f.deps),ye(u,O,b,De))}},ue=(r,i)=>{if(f(t.errors,i)&&r.focus)return r.focus(),1},le=async(r,i={})=>{let u,d;const c=fe(r);if(s.resolver){const o=await se(D(r)?r:c);u=N(o),d=r?!c.some(h=>f(o,h)):u}else r?(d=(await Promise.all(c.map(async o=>{const h=f(a,o);return await P(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!d&&!t.isValid)&&K()):d=u=await P(a);return v.state.next({...!$(r)||_.isValid&&u!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:u}:{},errors:t.errors}),i.shouldFocus&&!d&&ce(a,ue,r?c:g.mount),d},Me=r=>{const i={...y.mount?l:n};return D(r)?i:$(r)?f(i,r):r.map(u=>f(i,u))},Ne=(r,i)=>({invalid:!!f((i||t).errors,r),isDirty:!!f((i||t).dirtyFields,r),error:f((i||t).errors,r),isValidating:!!f(t.validatingFields,r),isTouched:!!f((i||t).touchedFields,r)}),vt=r=>{r&&fe(r).forEach(i=>T(t.errors,i)),v.state.next({errors:r?t.errors:{}})},Pe=(r,i,u)=>{const d=(f(a,r,{_f:{}})._f||{}).ref,c=f(t.errors,r)||{},{ref:o,message:h,type:b,...O}=c;x(t.errors,r,{...O,...i,ref:d}),v.state.next({name:r,errors:t.errors,isValid:!1}),u&&u.shouldFocus&&d&&d.focus&&d.focus()},_t=(r,i)=>J(r)?v.values.subscribe({next:u=>r(A(void 0,i),u)}):A(r,i,!0),me=(r,i={})=>{for(const u of r?fe(r):g.mount)g.mount.delete(u),g.array.delete(u),i.keepValue||(T(a,u),T(l,u)),!i.keepError&&T(t.errors,u),!i.keepDirty&&T(t.dirtyFields,u),!i.keepTouched&&T(t.touchedFields,u),!i.keepIsValidating&&T(t.validatingFields,u),!s.shouldUnregister&&!i.keepDefaultValue&&T(n,u);v.values.next({values:{...l}}),v.state.next({...t,...i.keepDirty?{isDirty:V()}:{}}),!i.keepIsValid&&K()},Ie=({disabled:r,name:i,field:u,fields:d,value:c})=>{if(q(r)&&y.mount||r){const o=r?void 0:D(c)?ke(u?u._f:f(d,i)._f):c;x(l,i,o),re(i,o,!1,!1,!0)}},xe=(r,i={})=>{let u=f(a,r);const d=q(i.disabled)||q(e.disabled);return x(a,r,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:r}},name:r,mount:!0,...i}}),g.mount.add(r),u?Ie({field:u,disabled:q(i.disabled)?i.disabled:e.disabled,name:r,value:i.value}):k(r,!0,i.value),{...d?{disabled:i.disabled||e.disabled}:{},...s.progressive?{required:!!i.required,min:oe(i.min),max:oe(i.max),minLength:oe(i.minLength),maxLength:oe(i.maxLength),pattern:oe(i.pattern)}:{},name:r,onChange:ae,onBlur:ae,ref:c=>{if(c){xe(r,i),u=f(a,r);const o=D(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Lt(o),b=u._f.refs||[];if(h?b.find(O=>O===o):o===u._f.ref)return;x(a,r,{_f:{...u._f,...h?{refs:[...b.filter(Se),o,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),k(r,!1,void 0,o)}else u=f(a,r,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(st(g.array,r)&&y.action)&&g.unMount.add(r)}}},qe=()=>s.shouldFocusError&&ce(a,ue,g.mount),bt=r=>{q(r)&&(v.state.next({disabled:r}),ce(a,(i,u)=>{const d=f(a,u);d&&(i.disabled=d._f.disabled||r,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||r}))},0,!1))},We=(r,i)=>async u=>{let d;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let c=M(l);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:h}=await Z();t.errors=o,c=h}else await P(a);if(T(t.errors,"root"),N(t.errors)){v.state.next({errors:{}});try{await r(c,u)}catch(o){d=o}}else i&&await i({...t.errors},u),qe(),setTimeout(qe);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},Vt=(r,i={})=>{f(a,r)&&(D(i.defaultValue)?I(r,M(f(n,r))):(I(r,i.defaultValue),x(n,r,M(i.defaultValue))),i.keepTouched||T(t.touchedFields,r),i.keepDirty||(T(t.dirtyFields,r),t.isDirty=i.defaultValue?V(r,M(f(n,r))):V()),i.keepError||(T(t.errors,r),_.isValid&&K()),v.state.next({...t}))},je=(r,i={})=>{const u=r?M(r):n,d=M(u),c=N(r),o=c?n:d;if(i.keepDefaultValues||(n=u),!i.keepValues){if(i.keepDirtyValues){const h=new Set([...g.mount,...Object.keys(ne(n,l))]);for(const b of Array.from(h))f(t.dirtyFields,b)?x(o,b,f(l,b)):I(b,f(o,b))}else{if(Te&&D(r))for(const h of g.mount){const b=f(a,h);if(b&&b._f){const O=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(_e(O)){const L=O.closest("form");if(L){L.reset();break}}}}a={}}l=e.shouldUnregister?i.keepDefaultValues?M(n):{}:M(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!_.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!X(r,n)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&l?ne(n,l):t.dirtyFields:i.keepDefaultValues&&r?ne(n,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},pe=(r,i)=>je(J(r)?r(l):r,i);return{control:{register:xe,unregister:me,getFieldState:Ne,handleSubmit:We,setError:Pe,_executeSchema:Z,_getWatch:A,_getDirty:V,_updateValid:K,_removeUnmounted:ge,_updateFieldArray:F,_updateDisabledField:Ie,_getFieldArray:C,_reset:je,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(r=>{pe(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:bt,_subjects:v,_proxyFormState:_,_setErrors:Y,get _fields(){return a},get _formValues(){return l},get _state(){return y},set _state(r){y=r},get _defaultValues(){return n},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:le,register:xe,handleSubmit:We,watch:_t,setValue:I,getValues:Me,reset:pe,resetField:Vt,clearErrors:vt,unregister:me,setError:Pe,setFocus:(r,i={})=>{const u=f(a,r),d=u&&u._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Ne}}function Kt(e={}){const s=m.useRef(),t=m.useRef(),[a,n]=m.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...It(e),formState:a});const l=s.current.control;return l._options=e,Ue({subject:l._subjects.state,next:y=>{lt(y,l._proxyFormState,l._updateFormState,!0)&&n({...l._formState})}}),m.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),m.useEffect(()=>{if(l._proxyFormState.isDirty){const y=l._getDirty();y!==a.isDirty&&l._subjects.state.next({isDirty:y})}},[l,a.isDirty]),m.useEffect(()=>{e.values&&!X(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,n(y=>({...y}))):l._resetDefaultValues()},[e.values,l]),m.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),m.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),m.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),m.useEffect(()=>{s.current&&(s.current.watch=s.current.watch.bind({}))},[a]),s.current.formState=ut(a,l),s.current}export{$t as C,Ht as F,St as a,Le as b,Kt as u};
