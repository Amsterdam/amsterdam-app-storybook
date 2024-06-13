try{
(()=>{var Ue=__STORYBOOK_API__,{ActiveTabs:Je,Consumer:Qe,ManagerContext:Xe,Provider:Ze,RequestResponseError:Ve,addons:N,combineParameters:er,controlOrMetaKey:rr,controlOrMetaSymbol:tr,eventMatchesShortcut:ar,eventToShortcut:nr,experimental_requestResponse:or,isMacLike:ir,isShortcutTaken:sr,keyToSymbol:pr,merge:lr,mockChannel:dr,optionOrAltSymbol:fr,shortcutMatchesShortcut:ur,shortcutToHumanString:cr,types:gr,useAddonState:mr,useArgTypes:hr,useArgs:br,useChannel:yr,useGlobalTypes:vr,useGlobals:xr,useParameter:Fr,useSharedState:Sr,useStoryPrepared:wr,useStorybookApi:Cr,useStorybookState:kr}=__STORYBOOK_API__;var G=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var Er=__STORYBOOK_CLIENT_LOGGER__,{deprecate:Ar,logger:L,once:Mr,pretty:zr}=__STORYBOOK_CLIENT_LOGGER__;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)}function re(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,r){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},x(e,r)}function te(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,x(e,r)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},M(e)}function ae(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function U(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(U=function(){return!!e})()}function ne(e,r,t){if(U())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,r);var n=new(e.bind.apply(e,a));return t&&x(n,t.prototype),n}function z(e){var r=typeof Map=="function"?new Map:void 0;return z=function(t){if(t===null||!ae(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r<"u"){if(r.has(t))return r.get(t);r.set(t,a)}function a(){return ne(t,arguments,M(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),x(a,t)},z(e)}var oe={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function ie(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=r[0],n=[],o;for(o=1;o<r.length;o+=1)n.push(r[o]);return n.forEach(function(s){a=a.replace(/%[a-z]/,s)}),a}var f=function(e){te(r,e);function r(t){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return a=e.call(this,ie.apply(void 0,[oe[t]].concat(o)))||this,re(a)}return r}(z(Error));function _(e){return Math.round(e*255)}function se(e,r,t){return _(e)+","+_(r)+","+_(t)}function F(e,r,t,a){if(a===void 0&&(a=se),r===0)return a(t,t,t);var n=(e%360+360)%360/60,o=(1-Math.abs(2*t-1))*r,s=o*(1-Math.abs(n%2-1)),p=0,l=0,d=0;n>=0&&n<1?(p=o,l=s):n>=1&&n<2?(p=s,l=o):n>=2&&n<3?(l=o,d=s):n>=3&&n<4?(l=s,d=o):n>=4&&n<5?(p=s,d=o):n>=5&&n<6&&(p=o,d=s);var g=t-o/2,m=p+g,u=l+g,I=d+g;return a(m,u,I)}var Y={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function pe(e){if(typeof e!="string")return e;var r=e.toLowerCase();return Y[r]?"#"+Y[r]:e}var le=/^#[a-fA-F0-9]{6}$/,de=/^#[a-fA-F0-9]{8}$/,fe=/^#[a-fA-F0-9]{3}$/,ue=/^#[a-fA-F0-9]{4}$/,R=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ce=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,ge=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,me=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function O(e){if(typeof e!="string")throw new f(3);var r=pe(e);if(r.match(le))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(de)){var t=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:t}}if(r.match(fe))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(ue)){var a=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:a}}var n=R.exec(r);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=ce.exec(r.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var s=ge.exec(r);if(s){var p=parseInt(""+s[1],10),l=parseInt(""+s[2],10)/100,d=parseInt(""+s[3],10)/100,g="rgb("+F(p,l,d)+")",m=R.exec(g);if(!m)throw new f(4,r,g);return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10)}}var u=me.exec(r.substring(0,50));if(u){var I=parseInt(""+u[1],10),V=parseInt(""+u[2],10)/100,ee=parseInt(""+u[3],10)/100,q="rgb("+F(I,V,ee)+")",w=R.exec(q);if(!w)throw new f(4,r,q);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10),alpha:parseFloat(""+u[4])>1?parseFloat(""+u[4])/100:parseFloat(""+u[4])}}throw new f(5)}function he(e){var r=e.red/255,t=e.green/255,a=e.blue/255,n=Math.max(r,t,a),o=Math.min(r,t,a),s=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var p,l=n-o,d=s>.5?l/(2-n-o):l/(n+o);switch(n){case r:p=(t-a)/l+(t<a?6:0);break;case t:p=(a-r)/l+2;break;default:p=(r-t)/l+4;break}return p*=60,e.alpha!==void 0?{hue:p,saturation:d,lightness:s,alpha:e.alpha}:{hue:p,saturation:d,lightness:s}}function J(e){return he(O(e))}var be=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},H=be;function c(e){var r=e.toString(16);return r.length===1?"0"+r:r}function j(e){return c(Math.round(e*255))}function ye(e,r,t){return H("#"+j(e)+j(r)+j(t))}function k(e,r,t){return F(e,r,t,ye)}function ve(e,r,t){if(typeof e=="number"&&typeof r=="number"&&typeof t=="number")return k(e,r,t);if(typeof e=="object"&&r===void 0&&t===void 0)return k(e.hue,e.saturation,e.lightness);throw new f(1)}function xe(e,r,t,a){if(typeof e=="number"&&typeof r=="number"&&typeof t=="number"&&typeof a=="number")return a>=1?k(e,r,t):"rgba("+F(e,r,t)+","+a+")";if(typeof e=="object"&&r===void 0&&t===void 0&&a===void 0)return e.alpha>=1?k(e.hue,e.saturation,e.lightness):"rgba("+F(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new f(2)}function D(e,r,t){if(typeof e=="number"&&typeof r=="number"&&typeof t=="number")return H("#"+c(e)+c(r)+c(t));if(typeof e=="object"&&r===void 0&&t===void 0)return H("#"+c(e.red)+c(e.green)+c(e.blue));throw new f(6)}function S(e,r,t,a){if(typeof e=="string"&&typeof r=="number"){var n=O(e);return"rgba("+n.red+","+n.green+","+n.blue+","+r+")"}else{if(typeof e=="number"&&typeof r=="number"&&typeof t=="number"&&typeof a=="number")return a>=1?D(e,r,t):"rgba("+e+","+r+","+t+","+a+")";if(typeof e=="object"&&r===void 0&&t===void 0&&a===void 0)return e.alpha>=1?D(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new f(7)}var Fe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Se=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},we=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Ce=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function Q(e){if(typeof e!="object")throw new f(8);if(Se(e))return S(e);if(Fe(e))return D(e);if(Ce(e))return xe(e);if(we(e))return ve(e);throw new f(8)}function X(e,r,t){return function(){var a=t.concat(Array.prototype.slice.call(arguments));return a.length>=r?e.apply(this,a):X(e,r,a)}}function T(e){return X(e,e.length,[])}function B(e,r,t){return Math.max(e,Math.min(r,t))}function ke(e,r){if(r==="transparent")return r;var t=J(r);return Q(v({},t,{lightness:B(0,1,t.lightness-parseFloat(e))}))}var Pe=T(ke),Oe=Pe;function Te(e,r){if(r==="transparent")return r;var t=J(r);return Q(v({},t,{lightness:B(0,1,t.lightness+parseFloat(e))}))}var Be=T(Te),Ie=Be;function _e(e,r){if(r==="transparent")return r;var t=O(r),a=typeof t.alpha=="number"?t.alpha:1,n=v({},t,{alpha:B(0,1,(a*100+parseFloat(e)*100)/100)});return S(n)}var Lr=T(_e);function Re(e,r){if(r==="transparent")return r;var t=O(r),a=typeof t.alpha=="number"?t.alpha:1,n=v({},t,{alpha:B(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return S(n)}var je=T(Re),Ee=je,i={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},K={app:"#F6F9FC",bar:i.lightest,content:i.lightest,preview:i.lightest,gridCellSize:10,hoverable:Ee(.9,i.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},P={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Ae={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:K.app,appContentBg:i.lightest,appPreviewBg:i.lightest,appBorderColor:i.border,appBorderRadius:4,fontBase:P.fonts.base,fontCode:P.fonts.mono,textColor:i.darkest,textInverseColor:i.lightest,textMutedColor:i.dark,barTextColor:i.mediumdark,barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:i.lightest,buttonBg:K.app,buttonBorder:i.medium,booleanBg:i.mediumlight,booleanSelectedBg:i.lightest,inputBg:i.lightest,inputBorder:i.border,inputTextColor:i.darkest,inputBorderRadius:4},W=Ae,Me={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:i.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:P.fonts.base,fontCode:P.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:i.mediumdark,barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:i.lightest,inputBorderRadius:4},ze=Me,{window:E}=G;var He=e=>typeof e!="string"?(L.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,De=e=>!/(gradient|var|calc)/.test(e),$e=(e,r)=>e==="darken"?S(`${Oe(1,r)}`,.95):e==="lighten"?S(`${Ie(1,r)}`,.95):r,Z=e=>r=>{if(!He(r)||!De(r))return r;try{return $e(e,r)}catch{return r}},Yr=Z("lighten"),Kr=Z("darken"),qe=()=>!E||!E.matchMedia?"light":E.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",C={light:W,dark:ze,normal:W},A=qe(),$=(e={base:A},r)=>{let t={...C[A],...C[e.base]||{},...e,base:C[e.base]?e.base:A};return{...r,...t,barSelectedColor:e.barSelectedColor||t.colorSecondary}};N.setConfig({theme:$({appBg:"#ffffff",appBorderColor:"#e6e6e6",appBorderRadius:0,base:"light",brandImage:"./amsterdam.svg",brandTitle:"Gemeente Amsterdam",colorPrimary:"#004699",colorSecondary:"#009dec",fontBase:"AmsterdamSans-Regular, Arial, sans-serif",inputBg:"#ffffff",inputBorder:"#767676",inputBorderRadius:0,inputTextColor:"#000000",textColor:"#000000",textInverseColor:"#ffffff"})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
