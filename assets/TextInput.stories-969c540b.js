import{a as v,j as l,S as B}from"./index-1401012c.js";import{r as c}from"./index-76fb7be0.js";import{I as D}from"./IconButton-0579ec87.js";import{L as F}from"./Label-0a368e6a.js";import{C as z}from"./Column-2e1417fa.js";import{I as M}from"./Icon-1baee975.js";import{a as I}from"./useThemable-27d8c265.js";import{V as S}from"./index-8aec880e.js";import{T as A}from"./index-84e0d194.js";import{P as q}from"./index-0f55ce69.js";import"./_commonjsHelpers-de833af9.js";import"./config-55b2a55c.js";import"./Badge-9b1ab892.js";import"./Row-99740ecb.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useDeviceContext-5f757378.js";import"./NativeEventEmitter-abc7829a.js";import"./index-d983c834.js";import"./base-color-66d0fb4c.js";import"./index-290feef2.js";import"./index-83a31e41.js";import"./types-e7c584cc.js";import"./index-393588f7.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./Paragraph-2431e25e.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-d0a22265.js";import"./index-96ea5a53.js";import"./useTheme-7821b5d5.js";import"./index-d3ea75b5.js";const f=c.forwardRef(({label:r,numberOfLines:n,onChangeText:e,onFocus:t,placeholder:s="",warning:i,value:a="",testID:d="",accessibilityLanguage:o="nl-NL",...b},L)=>{const[O,h]=c.useState(!1),[g,m]=c.useState(a),y=I(P({hasFocus:O,numberOfLines:n,warning:i})),C=I(R);c.useEffect(()=>{m(a)},[a]);const E=()=>h(!1),H=x=>{m(x),e==null||e(x)},N=()=>{m(""),e==null||e("")},W=()=>{h(!0),t==null||t()};return v(z,{gutter:"sm",children:[l(F,{isAccessible:!b.accessibilityLabel,text:r}),v(S,{style:y.frame,children:[l(A,{...b,...C,accessibilityLanguage:o,numberOfLines:q.OS==="ios"?void 0:n,onBlur:E,onChangeText:H,onFocus:W,placeholder:s,ref:L,style:y.textInput,testID:d,textAlignVertical:"top",value:g}),g?l(S,{children:l(D,{accessibilityHint:"Maak dit tekstveld leeg",accessibilityLanguage:o,icon:l(M,{name:"close",size:"lg"}),onPress:N,testID:`${d}ClearButton`})}):null]})]})}),P=({hasFocus:r,numberOfLines:n,warning:e})=>({color:t,size:s,text:i})=>{const a=r||e?2:1,d=s.spacing.md-(a-1),o=s.spacing.sm-(a-1);return B.create({frame:{flexDirection:"row",paddingHorizontal:d,paddingVertical:o,backgroundColor:t.box.background.white,borderStyle:"solid",borderColor:e?t.control.warning.border:r?t.control.focus.border:t.control.default.border,borderWidth:a},textInput:{minHeight:q.OS==="ios"&&n?n*i.lineHeight.body+2*o:"auto",flex:1,padding:0,paddingTop:0,color:t.text.default,fontFamily:i.fontFamily.regular,fontSize:i.fontSize.body}})},R=({color:r})=>({placeholderTextColor:r.text.secondary});try{f.displayName="TextInput",f.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},numberOfLines:{defaultValue:null,description:`Sets the number of lines for a TextInput.
Use it with multiline set to true to be able to fill the lines.`,name:"numberOfLines",required:!1,type:{name:"number"}},onChangeText:{defaultValue:null,description:`Callback that is called when the text input's text changes.
Changed text is passed as an argument to the callback handler.`,name:"onChangeText",required:!1,type:{name:"(((event: string) => void) & ((text: string) => void))"}},onFocus:{defaultValue:null,description:"Callback that is called when the text input is focused",name:"onFocus",required:!1,type:{name:"((() => void) & ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void))"}},placeholder:{defaultValue:{value:""},description:"The string that will be rendered before text input has been entered",name:"placeholder",required:!1,type:{name:"string"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}}}}}catch{}const Ve={component:f},p={args:{label:"Wat is de titel van je bericht?",placeholder:"Voer een titel in...",value:""}},u={args:{label:"Wat is de titel van je bericht?",multiline:!0,numberOfLines:5,placeholder:"Voer een titel in...",value:""}};var V,_,w;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(w=(_=p.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var T,j,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    multiline: true,
    numberOfLines: 5,
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const _e=["Default","Multiline"];export{p as Default,u as Multiline,_e as __namedExportsOrder,Ve as default};
