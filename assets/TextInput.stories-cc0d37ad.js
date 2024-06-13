import{j as i,S as W}from"./index-9d7eb5a2.js";import{r as m}from"./index-76fb7be0.js";import{I as B}from"./IconButton-41490c66.js";import{L as D}from"./Label-8dd61a17.js";import{C as F}from"./Column-46adc1c7.js";import{I as z}from"./Icon-3ee257ff.js";import{c as v}from"./useThemable-a57962df.js";import{V as I}from"./index-b1a24850.js";import{T as M}from"./index-ac8698bd.js";import{P as k}from"./invariant-f1a82cf7.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-b1f6f57f.js";import"./PressableBase-2680f321.js";import"./usePiwikTrackCustomEventFromProps-0c5dd185.js";import"./slugs-b43e7e98.js";import"./index-6f107027.js";import"./NativeEventEmitter-7be6cb46.js";import"./index-fb7b51b4.js";import"./TextAncestorContext-3b992cff.js";import"./development-de2bc6fd.js";import"./redux-toolkit.esm-cb9067f1.js";import"./useSentry-3517252a.js";import"./index-07bd7250.js";import"./callBound-c4e9bae7.js";import"./index-5008ca59.js";import"./extends-34e645d9.js";import"./Box-f01fe6a4.js";import"./layoutStyles-605143e0.js";import"./config-55b2a55c.js";import"./Badge-0677b044.js";import"./Row-00cddd21.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./useDeviceContext-82bee89b.js";import"./index-3cad2065.js";import"./index-72552a59.js";import"./index-169dd17a.js";import"./types-65ac26c5.js";import"./Paragraph-e7bf4ab1.js";import"./index-b21a90e4.js";import"./index-9d475cdf.js";import"./Animated-4476d759.js";import"./index-87b6cec9.js";import"./useTheme-d4cae06a.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";const f=m.forwardRef(({label:r,numberOfLines:a,onChangeText:e,onFocus:t,placeholder:p="",warning:n,value:o="",testID:l="",accessibilityLanguage:s="nl-NL",...b},q)=>{const[C,h]=m.useState(!1),[x,u]=m.useState(o),g=v(R({hasFocus:C,numberOfLines:a,warning:n})),E=v(A);m.useEffect(()=>{u(o)},[o]);const L=()=>h(!1),O=y=>{u(y),e==null||e(y)},H=()=>{u(""),e==null||e("")},N=()=>{h(!0),t==null||t()};return i.jsxs(F,{gutter:"sm",children:[i.jsx(D,{isAccessible:!b.accessibilityLabel,text:r}),i.jsxs(I,{style:g.frame,children:[i.jsx(M,{...b,...E,accessibilityLanguage:s,numberOfLines:k.OS==="ios"?void 0:a,onBlur:L,onChangeText:O,onFocus:N,placeholder:p,ref:q,style:g.textInput,testID:l,textAlignVertical:"top",value:x}),x?i.jsx(I,{children:i.jsx(B,{accessibilityHint:"Maak dit tekstveld leeg",accessibilityLanguage:s,icon:i.jsx(z,{name:"close",size:"lg",testID:`${l}ClearIcon`}),onPress:H,testID:`${l}ClearButton`})}):null]})]})}),R=({hasFocus:r,numberOfLines:a,warning:e})=>({color:t,size:p,text:n})=>{const o=r||e?2:1,l=p.spacing.md-(o-1),s=p.spacing.sm-(o-1);return W.create({frame:{flexDirection:"row",paddingHorizontal:l,paddingVertical:s,backgroundColor:t.box.background.white,borderStyle:"solid",borderColor:e?t.control.warning.border:r?t.control.focus.border:t.control.default.border,borderWidth:o},textInput:{minHeight:k.OS==="ios"&&a?a*n.lineHeight.body+2*s:"auto",flex:1,padding:0,paddingTop:0,color:t.text.default,fontFamily:n.fontFamily.regular,fontSize:n.fontSize.body}})},A=({color:r})=>({placeholderTextColor:r.text.secondary});try{f.displayName="TextInput",f.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},numberOfLines:{defaultValue:null,description:`Sets the number of lines for a TextInput.
Use it with multiline set to true to be able to fill the lines.`,name:"numberOfLines",required:!1,type:{name:"number"}},onChangeText:{defaultValue:null,description:`Callback that is called when the text input's text changes.
Changed text is passed as an argument to the callback handler.`,name:"onChangeText",required:!1,type:{name:"(((event: string) => void) & ((text: string) => void))"}},onFocus:{defaultValue:null,description:"Callback that is called when the text input is focused",name:"onFocus",required:!1,type:{name:"((() => void) & ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void))"}},placeholder:{defaultValue:{value:""},description:"The string that will be rendered before text input has been entered",name:"placeholder",required:!1,type:{name:"string"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}}}}}catch{}const We={component:f},c={args:{label:"Wat is de titel van je bericht?",placeholder:"Voer een titel in...",value:""}},d={args:{label:"Wat is de titel van je bericht?",multiline:!0,numberOfLines:5,placeholder:"Voer een titel in...",value:""}};var S,V,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(j=(V=c.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var _,w,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    multiline: true,
    numberOfLines: 5,
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const Be=["Default","Multiline"];export{c as Default,d as Multiline,Be as __namedExportsOrder,We as default};
