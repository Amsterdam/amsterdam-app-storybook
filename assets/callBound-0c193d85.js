var er=Error,tr=EvalError,or=RangeError,nr=ReferenceError,Y=SyntaxError,U=TypeError,ar=URIError,ir=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var r={},e=Symbol("test"),t=Object(e);if(typeof e=="string"||Object.prototype.toString.call(e)!=="[object Symbol]"||Object.prototype.toString.call(t)!=="[object Symbol]")return!1;var o=42;r[e]=o;for(e in r)return!1;if(typeof Object.keys=="function"&&Object.keys(r).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(r).length!==0)return!1;var i=Object.getOwnPropertySymbols(r);if(i.length!==1||i[0]!==e||!Object.prototype.propertyIsEnumerable.call(r,e))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var y=Object.getOwnPropertyDescriptor(r,e);if(y.value!==o||y.enumerable!==!0)return!1}return!0},T=typeof Symbol<"u"&&Symbol,yr=ir,pr=function(){return typeof T!="function"||typeof Symbol!="function"||typeof T("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:yr()},M={foo:{}},lr=Object,fr=function(){return{__proto__:M}.foo===M.foo&&!({__proto__:null}instanceof lr)},ur="Function.prototype.bind called on incompatible ",sr=Object.prototype.toString,cr=Math.max,vr="[object Function]",k=function(r,e){for(var t=[],o=0;o<r.length;o+=1)t[o]=r[o];for(var i=0;i<e.length;i+=1)t[i+r.length]=e[i];return t},gr=function(r,e){for(var t=[],o=e||0,i=0;o<r.length;o+=1,i+=1)t[i]=r[o];return t},dr=function(n,r){for(var e="",t=0;t<n.length;t+=1)e+=n[t],t+1<n.length&&(e+=r);return e},br=function(r){var e=this;if(typeof e!="function"||sr.apply(e)!==vr)throw new TypeError(ur+e);for(var t=gr(arguments,1),o,i=function(){if(this instanceof o){var u=e.apply(this,k(t,arguments));return Object(u)===u?u:this}return e.apply(r,k(t,arguments))},y=cr(0,e.length-t.length),p=[],l=0;l<y;l++)p[l]="$"+l;if(o=Function("binder","return function ("+dr(p,",")+"){ return binder.apply(this,arguments); }")(i),e.prototype){var c=function(){};c.prototype=e.prototype,o.prototype=new c,c.prototype=null}return o},hr=br,N=Function.prototype.bind||hr,mr=Function.prototype.call,Ar=Object.prototype.hasOwnProperty,Pr=N,Sr=Pr.call(mr,Ar),a,Er=er,wr=tr,Ir=or,Fr=nr,E=Y,S=U,Or=ar,H=Function,B=function(n){try{return H('"use strict"; return ('+n+").constructor;")()}catch{}},g=Object.getOwnPropertyDescriptor;if(g)try{g({},"")}catch{g=null}var j=function(){throw new S},$r=g?function(){try{return arguments.callee,j}catch{try{return g(arguments,"callee").get}catch{return j}}}():j,m=pr(),Rr=fr(),f=Object.getPrototypeOf||(Rr?function(n){return n.__proto__}:null),P={},xr=typeof Uint8Array>"u"||!f?a:f(Uint8Array),d={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?a:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?a:ArrayBuffer,"%ArrayIteratorPrototype%":m&&f?f([][Symbol.iterator]()):a,"%AsyncFromSyncIteratorPrototype%":a,"%AsyncFunction%":P,"%AsyncGenerator%":P,"%AsyncGeneratorFunction%":P,"%AsyncIteratorPrototype%":P,"%Atomics%":typeof Atomics>"u"?a:Atomics,"%BigInt%":typeof BigInt>"u"?a:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?a:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?a:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?a:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Er,"%eval%":eval,"%EvalError%":wr,"%Float32Array%":typeof Float32Array>"u"?a:Float32Array,"%Float64Array%":typeof Float64Array>"u"?a:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?a:FinalizationRegistry,"%Function%":H,"%GeneratorFunction%":P,"%Int8Array%":typeof Int8Array>"u"?a:Int8Array,"%Int16Array%":typeof Int16Array>"u"?a:Int16Array,"%Int32Array%":typeof Int32Array>"u"?a:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":m&&f?f(f([][Symbol.iterator]())):a,"%JSON%":typeof JSON=="object"?JSON:a,"%Map%":typeof Map>"u"?a:Map,"%MapIteratorPrototype%":typeof Map>"u"||!m||!f?a:f(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?a:Promise,"%Proxy%":typeof Proxy>"u"?a:Proxy,"%RangeError%":Ir,"%ReferenceError%":Fr,"%Reflect%":typeof Reflect>"u"?a:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?a:Set,"%SetIteratorPrototype%":typeof Set>"u"||!m||!f?a:f(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?a:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":m&&f?f(""[Symbol.iterator]()):a,"%Symbol%":m?Symbol:a,"%SyntaxError%":E,"%ThrowTypeError%":$r,"%TypedArray%":xr,"%TypeError%":S,"%Uint8Array%":typeof Uint8Array>"u"?a:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?a:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?a:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?a:Uint32Array,"%URIError%":Or,"%WeakMap%":typeof WeakMap>"u"?a:WeakMap,"%WeakRef%":typeof WeakRef>"u"?a:WeakRef,"%WeakSet%":typeof WeakSet>"u"?a:WeakSet};if(f)try{null.error}catch(n){var Ur=f(f(n));d["%Error.prototype%"]=Ur}var Br=function n(r){var e;if(r==="%AsyncFunction%")e=B("async function () {}");else if(r==="%GeneratorFunction%")e=B("function* () {}");else if(r==="%AsyncGeneratorFunction%")e=B("async function* () {}");else if(r==="%AsyncGenerator%"){var t=n("%AsyncGeneratorFunction%");t&&(e=t.prototype)}else if(r==="%AsyncIteratorPrototype%"){var o=n("%AsyncGenerator%");o&&f&&(e=f(o.prototype))}return d[r]=e,e},C={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},I=N,R=Sr,jr=I.call(Function.call,Array.prototype.concat),_r=I.call(Function.apply,Array.prototype.splice),W=I.call(Function.call,String.prototype.replace),x=I.call(Function.call,String.prototype.slice),Dr=I.call(Function.call,RegExp.prototype.exec),Gr=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Nr=/\\(\\)?/g,Tr=function(r){var e=x(r,0,1),t=x(r,-1);if(e==="%"&&t!=="%")throw new E("invalid intrinsic syntax, expected closing `%`");if(t==="%"&&e!=="%")throw new E("invalid intrinsic syntax, expected opening `%`");var o=[];return W(r,Gr,function(i,y,p,l){o[o.length]=p?W(l,Nr,"$1"):y||i}),o},Mr=function(r,e){var t=r,o;if(R(C,t)&&(o=C[t],t="%"+o[0]+"%"),R(d,t)){var i=d[t];if(i===P&&(i=Br(t)),typeof i>"u"&&!e)throw new S("intrinsic "+r+" exists, but is not available. Please file an issue!");return{alias:o,name:t,value:i}}throw new E("intrinsic "+r+" does not exist!")},b=function(r,e){if(typeof r!="string"||r.length===0)throw new S("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof e!="boolean")throw new S('"allowMissing" argument must be a boolean');if(Dr(/^%?[^%]*%?$/,r)===null)throw new E("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var t=Tr(r),o=t.length>0?t[0]:"",i=Mr("%"+o+"%",e),y=i.name,p=i.value,l=!1,c=i.alias;c&&(o=c[0],_r(t,jr([0,1],c)));for(var u=1,v=!0;u<t.length;u+=1){var s=t[u],h=x(s,0,1),F=x(s,-1);if((h==='"'||h==="'"||h==="`"||F==='"'||F==="'"||F==="`")&&h!==F)throw new E("property names with quotes must have matching quotes");if((s==="constructor"||!v)&&(l=!0),o+="."+s,y="%"+o+"%",R(d,y))p=d[y];else if(p!=null){if(!(s in p)){if(!e)throw new S("base intrinsic for "+r+" exists, but the property is not available.");return}if(g&&u+1>=t.length){var O=g(p,s);v=!!O,v&&"get"in O&&!("originalValue"in O.get)?p=O.get:p=p[s]}else v=R(p,s),p=p[s];v&&!l&&(d[y]=p)}}return p},K={exports:{}},kr=b,D=kr("%Object.defineProperty%",!0),G=function(){if(D)try{return D({},"a",{value:1}),!0}catch{return!1}return!1};G.hasArrayLengthDefineBug=function(){if(!G())return null;try{return D([],"length",{value:1}).length!==1}catch{return!0}};var Q=G,Cr=b,$=Cr("%Object.getOwnPropertyDescriptor%",!0);if($)try{$([],"length")}catch{$=null}var X=$,Wr=Q(),Lr=b,w=Wr&&Lr("%Object.defineProperty%",!0);if(w)try{w({},"a",{value:1})}catch{w=!1}var Jr=Y,A=U,L=X,Vr=function(r,e,t){if(!r||typeof r!="object"&&typeof r!="function")throw new A("`obj` must be an object or a function`");if(typeof e!="string"&&typeof e!="symbol")throw new A("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new A("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new A("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new A("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new A("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,i=arguments.length>4?arguments[4]:null,y=arguments.length>5?arguments[5]:null,p=arguments.length>6?arguments[6]:!1,l=!!L&&L(r,e);if(w)w(r,e,{configurable:y===null&&l?l.configurable:!y,enumerable:o===null&&l?l.enumerable:!o,value:t,writable:i===null&&l?l.writable:!i});else if(p||!o&&!i&&!y)r[e]=t;else throw new Jr("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},qr=b,J=Vr,zr=Q(),V=X,q=U,Yr=qr("%Math.floor%"),Hr=function(r,e){if(typeof r!="function")throw new q("`fn` is not a function");if(typeof e!="number"||e<0||e>4294967295||Yr(e)!==e)throw new q("`length` must be a positive 32-bit integer");var t=arguments.length>2&&!!arguments[2],o=!0,i=!0;if("length"in r&&V){var y=V(r,"length");y&&!y.configurable&&(o=!1),y&&!y.writable&&(i=!1)}return(o||i||!t)&&(zr?J(r,"length",e,!0,!0):J(r,"length",e)),r},_,z;function Kr(){if(z)return _;z=1;var n=b,r=n("%Object.defineProperty%",!0)||!1;if(r)try{r({},"a",{value:1})}catch{r=!1}return _=r,_}(function(n){var r=N,e=b,t=Hr,o=U,i=e("%Function.prototype.apply%"),y=e("%Function.prototype.call%"),p=e("%Reflect.apply%",!0)||r.call(y,i),l=Kr(),c=e("%Math.max%");n.exports=function(s){if(typeof s!="function")throw new o("a function is required");var h=p(r,y,arguments);return t(h,1+c(0,s.length-(arguments.length-1)),!0)};var u=function(){return p(r,i,arguments)};l?l(n.exports,"apply",{value:u}):n.exports.apply=u})(K);var Qr=K.exports,Z=b,rr=Qr,Xr=rr(Z("String.prototype.indexOf")),Zr=function(r,e){var t=Z(r,!!e);return typeof t=="function"&&Xr(r,".prototype.")>-1?rr(t):t};export{Qr as a,b,Zr as c,Vr as d,X as g,Q as h,ir as s,U as t};