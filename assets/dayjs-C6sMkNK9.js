import{g as tt}from"./_commonjsHelpers-D6-XlEtG.js";var Q={exports:{}},ut=Q.exports,rt;function at(){return rt||(rt=1,function(C,W){(function(H,D){C.exports=D()})(ut,function(){var H=1e3,D=6e4,q=36e5,I="millisecond",o="second",x="minute",h="hour",T="day",U="week",O="month",$="quarter",m="year",f="date",n="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],t=s%100;return"["+s+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(s,r,t){var i=String(s);return!i||i.length>=r?s:""+Array(r+1-i.length).join(t)+s},z={s:p,z:function(s){var r=-s.utcOffset(),t=Math.abs(r),i=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+p(i,2,"0")+":"+p(e,2,"0")},m:function s(r,t){if(r.date()<t.date())return-s(t,r);var i=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(i,O),a=t-e<0,u=r.clone().add(i+(a?-1:1),O);return+(-(i+(t-e)/(a?e-u:u-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:O,y:m,w:U,d:T,D:f,h,m:x,s:o,ms:I,Q:$}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},M="en",w={};w[M]=y;var L="$isDayjsObject",N=function(s){return s instanceof P||!(!s||!s[L])},j=function s(r,t,i){var e;if(!r)return M;if(typeof r=="string"){var a=r.toLowerCase();w[a]&&(e=a),t&&(w[a]=t,e=a);var u=r.split("-");if(!e&&u.length>1)return s(u[0])}else{var l=r.name;w[l]=r,e=l}return!i&&e&&(M=e),e||!i&&M},v=function(s,r){if(N(s))return s.clone();var t=typeof r=="object"?r:{};return t.date=s,t.args=arguments,new P(t)},c=z;c.l=j,c.i=N,c.w=function(s,r){return v(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var P=function(){function s(t){this.$L=j(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[L]=!0}var r=s.prototype;return r.parse=function(t){this.$d=function(i){var e=i.date,a=i.utc;if(e===null)return new Date(NaN);if(c.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(d);if(u){var l=u[2]-1||0,g=(u[7]||"0").substring(0,3);return a?new Date(Date.UTC(u[1],l,u[3]||1,u[4]||0,u[5]||0,u[6]||0,g)):new Date(u[1],l,u[3]||1,u[4]||0,u[5]||0,u[6]||0,g)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return c},r.isValid=function(){return this.$d.toString()!==n},r.isSame=function(t,i){var e=v(t);return this.startOf(i)<=e&&e<=this.endOf(i)},r.isAfter=function(t,i){return v(t)<this.startOf(i)},r.isBefore=function(t,i){return this.endOf(i)<v(t)},r.$g=function(t,i,e){return c.u(t)?this[i]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,i){var e=this,a=!!c.u(i)||i,u=c.p(t),l=function(E,b){var Z=c.w(e.$u?Date.UTC(e.$y,b,E):new Date(e.$y,b,E),e);return a?Z:Z.endOf(T)},g=function(E,b){return c.w(e.toDate()[E].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(b)),e)},S=this.$W,Y=this.$M,k=this.$D,J="set"+(this.$u?"UTC":"");switch(u){case m:return a?l(1,0):l(31,11);case O:return a?l(1,Y):l(0,Y+1);case U:var A=this.$locale().weekStart||0,R=(S<A?S+7:S)-A;return l(a?k-R:k+(6-R),Y);case T:case f:return g(J+"Hours",0);case h:return g(J+"Minutes",1);case x:return g(J+"Seconds",2);case o:return g(J+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,i){var e,a=c.p(t),u="set"+(this.$u?"UTC":""),l=(e={},e[T]=u+"Date",e[f]=u+"Date",e[O]=u+"Month",e[m]=u+"FullYear",e[h]=u+"Hours",e[x]=u+"Minutes",e[o]=u+"Seconds",e[I]=u+"Milliseconds",e)[a],g=a===T?this.$D+(i-this.$W):i;if(a===O||a===m){var S=this.clone().set(f,1);S.$d[l](g),S.init(),this.$d=S.set(f,Math.min(this.$D,S.daysInMonth())).$d}else l&&this.$d[l](g);return this.init(),this},r.set=function(t,i){return this.clone().$set(t,i)},r.get=function(t){return this[c.p(t)]()},r.add=function(t,i){var e,a=this;t=Number(t);var u=c.p(i),l=function(Y){var k=v(a);return c.w(k.date(k.date()+Math.round(Y*t)),a)};if(u===O)return this.set(O,this.$M+t);if(u===m)return this.set(m,this.$y+t);if(u===T)return l(1);if(u===U)return l(7);var g=(e={},e[x]=D,e[h]=q,e[o]=H,e)[u]||1,S=this.$d.getTime()+t*g;return c.w(S,this)},r.subtract=function(t,i){return this.add(-1*t,i)},r.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||n;var a=t||"YYYY-MM-DDTHH:mm:ssZ",u=c.z(this),l=this.$H,g=this.$m,S=this.$M,Y=e.weekdays,k=e.months,J=e.meridiem,A=function(b,Z,V,B){return b&&(b[Z]||b(i,a))||V[Z].slice(0,B)},R=function(b){return c.s(l%12||12,b,"0")},E=J||function(b,Z,V){var B=b<12?"AM":"PM";return V?B.toLowerCase():B};return a.replace(_,function(b,Z){return Z||function(V){switch(V){case"YY":return String(i.$y).slice(-2);case"YYYY":return c.s(i.$y,4,"0");case"M":return S+1;case"MM":return c.s(S+1,2,"0");case"MMM":return A(e.monthsShort,S,k,3);case"MMMM":return A(k,S);case"D":return i.$D;case"DD":return c.s(i.$D,2,"0");case"d":return String(i.$W);case"dd":return A(e.weekdaysMin,i.$W,Y,2);case"ddd":return A(e.weekdaysShort,i.$W,Y,3);case"dddd":return Y[i.$W];case"H":return String(l);case"HH":return c.s(l,2,"0");case"h":return R(1);case"hh":return R(2);case"a":return E(l,g,!0);case"A":return E(l,g,!1);case"m":return String(g);case"mm":return c.s(g,2,"0");case"s":return String(i.$s);case"ss":return c.s(i.$s,2,"0");case"SSS":return c.s(i.$ms,3,"0");case"Z":return u}return null}(b)||u.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,i,e){var a,u=this,l=c.p(i),g=v(t),S=(g.utcOffset()-this.utcOffset())*D,Y=this-g,k=function(){return c.m(u,g)};switch(l){case m:a=k()/12;break;case O:a=k();break;case $:a=k()/3;break;case U:a=(Y-S)/6048e5;break;case T:a=(Y-S)/864e5;break;case h:a=Y/q;break;case x:a=Y/D;break;case o:a=Y/H;break;default:a=Y}return e?a:c.a(a)},r.daysInMonth=function(){return this.endOf(O).$D},r.$locale=function(){return w[this.$L]},r.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),a=j(t,i,!0);return a&&(e.$L=a),e},r.clone=function(){return c.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),et=P.prototype;return v.prototype=et,[["$ms",I],["$s",o],["$m",x],["$H",h],["$W",T],["$M",O],["$y",m],["$D",f]].forEach(function(s){et[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),v.extend=function(s,r){return s.$i||(s(r,P,v),s.$i=!0),v},v.locale=j,v.isDayjs=N,v.unix=function(s){return v(1e3*s)},v.en=w[M],v.Ls=w,v.p={},v})}(Q)),Q.exports}var ot=at();const F=tt(ot);var G={exports:{}},ft=G.exports,nt;function ct(){return nt||(nt=1,function(C,W){(function(H,D){C.exports=D()})(ft,function(){var H={year:0,month:1,day:2,hour:3,minute:4,second:5},D={};return function(q,I,o){var x,h=function($,m,f){f===void 0&&(f={});var n=new Date($),d=function(_,y){y===void 0&&(y={});var p=y.timeZoneName||"short",z=_+"|"+p,M=D[z];return M||(M=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:_,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:p}),D[z]=M),M}(m,f);return d.formatToParts(n)},T=function($,m){for(var f=h($,m),n=[],d=0;d<f.length;d+=1){var _=f[d],y=_.type,p=_.value,z=H[y];z>=0&&(n[z]=parseInt(p,10))}var M=n[3],w=M===24?0:M,L=n[0]+"-"+n[1]+"-"+n[2]+" "+w+":"+n[4]+":"+n[5]+":000",N=+$;return(o.utc(L).valueOf()-(N-=N%1e3))/6e4},U=I.prototype;U.tz=function($,m){$===void 0&&($=x);var f,n=this.utcOffset(),d=this.toDate(),_=d.toLocaleString("en-US",{timeZone:$}),y=Math.round((d-new Date(_))/1e3/60),p=15*-Math.round(d.getTimezoneOffset()/15)-y;if(!Number(p))f=this.utcOffset(0,m);else if(f=o(_,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(p,!0),m){var z=f.utcOffset();f=f.add(n-z,"minute")}return f.$x.$timezone=$,f},U.offsetName=function($){var m=this.$x.$timezone||o.tz.guess(),f=h(this.valueOf(),m,{timeZoneName:$}).find(function(n){return n.type.toLowerCase()==="timezonename"});return f&&f.value};var O=U.startOf;U.startOf=function($,m){if(!this.$x||!this.$x.$timezone)return O.call(this,$,m);var f=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return O.call(f,$,m).tz(this.$x.$timezone,!0)},o.tz=function($,m,f){var n=f&&m,d=f||m||x,_=T(+o(),d);if(typeof $!="string")return o($).tz(d);var y=function(w,L,N){var j=w-60*L*1e3,v=T(j,N);if(L===v)return[j,L];var c=T(j-=60*(v-L)*1e3,N);return v===c?[j,v]:[w-60*Math.min(v,c)*1e3,Math.max(v,c)]}(o.utc($,n).valueOf(),_,d),p=y[0],z=y[1],M=o(p).utcOffset(z);return M.$x.$timezone=d,M},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function($){x=$}}})}(G)),G.exports}var ht=ct();const dt=tt(ht);var K={exports:{}},lt=K.exports,it;function $t(){return it||(it=1,function(C,W){(function(H,D){C.exports=D()})(lt,function(){var H="minute",D=/[+-]\d\d(?::?\d\d)?/g,q=/([+-]|\d\d)/g;return function(I,o,x){var h=o.prototype;x.utc=function(n){var d={date:n,utc:!0,args:arguments};return new o(d)},h.utc=function(n){var d=x(this.toDate(),{locale:this.$L,utc:!0});return n?d.add(this.utcOffset(),H):d},h.local=function(){return x(this.toDate(),{locale:this.$L,utc:!1})};var T=h.parse;h.parse=function(n){n.utc&&(this.$u=!0),this.$utils().u(n.$offset)||(this.$offset=n.$offset),T.call(this,n)};var U=h.init;h.init=function(){if(this.$u){var n=this.$d;this.$y=n.getUTCFullYear(),this.$M=n.getUTCMonth(),this.$D=n.getUTCDate(),this.$W=n.getUTCDay(),this.$H=n.getUTCHours(),this.$m=n.getUTCMinutes(),this.$s=n.getUTCSeconds(),this.$ms=n.getUTCMilliseconds()}else U.call(this)};var O=h.utcOffset;h.utcOffset=function(n,d){var _=this.$utils().u;if(_(n))return this.$u?0:_(this.$offset)?O.call(this):this.$offset;if(typeof n=="string"&&(n=function(M){M===void 0&&(M="");var w=M.match(D);if(!w)return null;var L=(""+w[0]).match(q)||["-",0,0],N=L[0],j=60*+L[1]+ +L[2];return j===0?0:N==="+"?j:-j}(n),n===null))return this;var y=Math.abs(n)<=16?60*n:n,p=this;if(d)return p.$offset=y,p.$u=n===0,p;if(n!==0){var z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(p=this.local().add(y+z,H)).$offset=y,p.$x.$localOffset=z}else p=this.utc();return p};var $=h.format;h.format=function(n){var d=n||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return $.call(this,d)},h.valueOf=function(){var n=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*n},h.isUTC=function(){return!!this.$u},h.toISOString=function(){return this.toDate().toISOString()},h.toString=function(){return this.toDate().toUTCString()};var m=h.toDate;h.toDate=function(n){return n==="s"&&this.$offset?x(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():m.call(this)};var f=h.diff;h.diff=function(n,d,_){if(n&&this.$u===n.$u)return f.call(this,n,d,_);var y=this.local(),p=x(n).local();return f.call(y,p,d,_)}}})}(K)),K.exports}var mt=$t();const vt=tt(mt);var X={exports:{}},pt=X.exports,st;function gt(){return st||(st=1,function(C,W){(function(H,D){C.exports=D(at())})(pt,function(H){function D(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var q=D(H),I={name:"nl",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),ordinal:function(o){return"["+o+(o===1||o===8||o>=20?"ste":"de")+"]"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};return q.default.locale(I,null,!0),I})}(X)),X.exports}gt();const Mt="Europe/Amsterdam";F.extend(vt);F.extend(dt);F.locale("nl");F.tz.setDefault(Mt);const _t=C=>{const W=F(C).format();return F(W)},yt=C=>{const W=F.unix(C);return F(W)};export{_t as a,yt as d};
