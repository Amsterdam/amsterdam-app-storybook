import{j as t}from"./jsx-runtime-BlAj40OV.js";import{r as m}from"./index-Cs7sjTYM.js";import{I as N}from"./IconButton-DWjBOmy9.js";import{L as P}from"./Label-CKk-4puC.js";import{C as j}from"./Column-DcHJ9bMY.js";import{I as z}from"./Icon-CMvmjDKU.js";import{P as M}from"./Phrase-Q_YJ8hmi.js";import{u as S}from"./useThemable-VbFnP4pm.js";import{V as T}from"./index-DNzWYFc8.js";import{T as $}from"./index-DS8q97x7.js";import{s as A}from"./index-BRs9ZavV.js";import{P as R}from"./index-C9LjRz3B.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Pressable-5Fq37wVZ.js";import"./PressableBase-BtVoRggx.js";import"./usePiwikTrackCustomEventFromProps--_bAKPt5.js";import"./index-8JwjhRSi.js";import"./useTrackException-BNw22381.js";import"./index-B9HBLp1U.js";import"./NativeEventEmitter-CdIviC7q.js";import"./development-B3zcR1jo.js";import"./index-HY1hV1Sb.js";import"./extends-CF3RwP-h.js";import"./TextAncestorContext-CgUd_yOy.js";import"./index-KNTxeJap.js";import"./Box-BW_o2ALG.js";import"./layoutStyles-nv7cBgSD.js";import"./config-BZnShabN.js";import"./Badge-DX6McJPB.js";import"./Row-CYxCgow3.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-COgu9Gly.js";import"./index-CglSVHKQ.js";import"./useDeviceContext-BXdagwJr.js";import"./index-B5FlGKE6.js";import"./types-CttlCamk.js";import"./index-CC-zlO6h.js";import"./index-Dk74W0Oi.js";import"./Animated-DEQ-X0nE.js";import"./index-adwSuxHZ.js";import"./index-BNEt8Bkx.js";import"./useTheme-Ct6NefpZ.js";import"./index-D5xlL9g-.js";import"./base-color-B2rPH-Aj.js";const f=m.forwardRef(({inputInstructions:r,label:p,numberOfLines:a,onChangeText:e,onFocus:i,placeholder:o="",warning:l,value:s="",testID:n="",textTransform:h,accessibilityLanguage:b="nl-NL",...x},L)=>{const[H,g]=m.useState(!1),[y,c]=m.useState(s),v=S(U({hasFocus:H,numberOfLines:a,warning:l})),O=S(G);m.useEffect(()=>{c(s)},[s]);const W=()=>g(!1),B=I=>{const V=h?h(I):I;c(V),e==null||e(V)},D=()=>{c(""),e==null||e("")},F=()=>{g(!0),i==null||i()};return t.jsxs(j,{gutter:"sm",children:[t.jsxs(j,{gutter:"xs",children:[t.jsx(P,{isAccessible:!x.accessibilityLabel,text:p}),!!r&&t.jsx(M,{children:r})]}),t.jsxs(T,{style:v.frame,children:[t.jsx($,{...x,...O,accessibilityLanguage:b,numberOfLines:R.OS==="ios"?void 0:a,onBlur:W,onChangeText:B,onFocus:F,placeholder:o,ref:L,style:v.textInput,testID:n,textAlignVertical:"top",value:y}),y?t.jsx(T,{children:t.jsx(N,{accessibilityHint:"Maak dit tekstveld leeg",accessibilityLanguage:b,icon:t.jsx(z,{name:"close",size:"lg",testID:`${n}ClearIcon`}),onPress:D,testID:`${n}ClearButton`})}):null]})]})}),U=({hasFocus:r,numberOfLines:p,warning:a})=>({color:e,size:i,text:o})=>{const l=r||a?2:1,s=i.spacing.md-(l-1),n=i.spacing.sm-(l-1);return A.create({frame:{flexDirection:"row",paddingHorizontal:s,paddingVertical:n,backgroundColor:e.textInput.container.background,borderStyle:"solid",borderColor:a?e.control.warning.border:r?e.control.focus.border:e.control.default.border,borderWidth:l},textInput:{minHeight:p?p*o.lineHeight.body+2*n:"auto",flex:1,padding:0,paddingTop:0,color:e.text.default,fontFamily:o.fontFamily.regular,fontSize:o.fontSize.body}})},G=({color:r})=>({placeholderTextColor:r.text.secondary});try{f.displayName="TextInput",f.__docgenInfo={description:"",displayName:"TextInput",props:{onChangeText:{defaultValue:null,description:`Callback that is called when the text input's text changes.
Changed text is passed as an argument to the callback handler.`,name:"onChangeText",required:!1,type:{name:"(((event: string) => void) & ((text: string) => void))"}},onFocus:{defaultValue:null,description:"Callback that is called when the text input is focused",name:"onFocus",required:!1,type:{name:"((() => void) & ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void))"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},inputInstructions:{defaultValue:null,description:"",name:"inputInstructions",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},numberOfLines:{defaultValue:null,description:`Sets the number of lines for a TextInput.
Use it with multiline set to true to be able to fill the lines.`,name:"numberOfLines",required:!1,type:{name:"number"}},placeholder:{defaultValue:{value:""},description:"The string that will be rendered before text input has been entered",name:"placeholder",required:!1,type:{name:"string"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"((text: string) => string)"}}}}}catch{}const Ne={component:f},u={args:{label:"Wat is de titel van je bericht?",placeholder:"Voer een titel in...",value:""}},d={args:{label:"Wat is de titel van je bericht?",multiline:!0,numberOfLines:5,placeholder:"Voer een titel in...",value:""}};var _,w,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(q=(w=u.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var k,C,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    multiline: true,
    numberOfLines: 5,
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Pe=["Default","Multiline"];export{u as Default,d as Multiline,Pe as __namedExportsOrder,Ne as default};
