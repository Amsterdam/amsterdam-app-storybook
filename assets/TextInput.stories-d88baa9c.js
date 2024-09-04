import{j as i}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{I as W}from"./IconButton-9680ba58.js";import{L as B}from"./Label-974b1575.js";import{C as D}from"./Column-67bbac3f.js";import{I as F}from"./Icon-620af10f.js";import{e as v}from"./useThemable-0ff36c28.js";import{V as I}from"./index-5b56d0c8.js";import{R}from"./index-0b797b1c.js";import{P as k}from"./index-115efad7.js";import{S as z}from"./index-a802de3b.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-4302397e.js";import"./PressableBase-e5c6b6d6.js";import"./usePiwikTrackCustomEventFromProps-1282c0f8.js";import"./index-e8e5dbb3.js";import"./useTrackException-4a5c311f.js";import"./index-ee304789.js";import"./NativeEventEmitter-2071600e.js";import"./development-6fd8b346.js";import"./index-b3fe80a1.js";import"./extends-4c19d496.js";import"./TextAncestorContext-c1a63433.js";import"./Box-89e460a7.js";import"./layoutStyles-b0426a14.js";import"./config-55b2a55c.js";import"./Badge-8fd635a6.js";import"./Row-2be06d61.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./useDeviceContext-d0c458db.js";import"./index-e8db3c07.js";import"./index-ccab62b4.js";import"./types-65ac26c5.js";import"./Paragraph-8d808f9d.js";import"./index-ecf17355.js";import"./index-9d475cdf.js";import"./Animated-fdc153e4.js";import"./index-4f48d35c.js";import"./useTheme-1c292d66.js";import"./index-d3ea75b5.js";import"./base-color-5d90126d.js";const f=m.forwardRef(({label:r,numberOfLines:a,onChangeText:e,onFocus:t,placeholder:p="",warning:n,value:o="",testID:l="",accessibilityLanguage:s="nl-NL",...b},q)=>{const[C,h]=m.useState(!1),[x,u]=m.useState(o),g=v(M({hasFocus:C,numberOfLines:a,warning:n})),E=v(A);m.useEffect(()=>{u(o)},[o]);const L=()=>h(!1),O=y=>{u(y),e==null||e(y)},H=()=>{u(""),e==null||e("")},N=()=>{h(!0),t==null||t()};return i.jsxs(D,{gutter:"sm",children:[i.jsx(B,{isAccessible:!b.accessibilityLabel,text:r}),i.jsxs(I,{style:g.frame,children:[i.jsx(R,{...b,...E,accessibilityLanguage:s,numberOfLines:k.OS==="ios"?void 0:a,onBlur:L,onChangeText:O,onFocus:N,placeholder:p,ref:q,style:g.textInput,testID:l,textAlignVertical:"top",value:x}),x?i.jsx(I,{children:i.jsx(W,{accessibilityHint:"Maak dit tekstveld leeg",accessibilityLanguage:s,icon:i.jsx(F,{name:"close",size:"lg",testID:`${l}ClearIcon`}),onPress:H,testID:`${l}ClearButton`})}):null]})]})}),M=({hasFocus:r,numberOfLines:a,warning:e})=>({color:t,size:p,text:n})=>{const o=r||e?2:1,l=p.spacing.md-(o-1),s=p.spacing.sm-(o-1);return z.create({frame:{flexDirection:"row",paddingHorizontal:l,paddingVertical:s,backgroundColor:t.textInput.container.background,borderStyle:"solid",borderColor:e?t.control.warning.border:r?t.control.focus.border:t.control.default.border,borderWidth:o},textInput:{minHeight:k.OS==="ios"&&a?a*n.lineHeight.body+2*s:"auto",flex:1,padding:0,paddingTop:0,color:t.text.default,fontFamily:n.fontFamily.regular,fontSize:n.fontSize.body}})},A=({color:r})=>({placeholderTextColor:r.text.secondary});try{f.displayName="TextInput",f.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},numberOfLines:{defaultValue:null,description:`Sets the number of lines for a TextInput.
Use it with multiline set to true to be able to fill the lines.`,name:"numberOfLines",required:!1,type:{name:"number"}},onChangeText:{defaultValue:null,description:`Callback that is called when the text input's text changes.
Changed text is passed as an argument to the callback handler.`,name:"onChangeText",required:!1,type:{name:"(((event: string) => void) & ((text: string) => void))"}},onFocus:{defaultValue:null,description:"Callback that is called when the text input is focused",name:"onFocus",required:!1,type:{name:"((() => void) & ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void))"}},placeholder:{defaultValue:{value:""},description:"The string that will be rendered before text input has been entered",name:"placeholder",required:!1,type:{name:"string"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}}}}}catch{}const Le={component:f},c={args:{label:"Wat is de titel van je bericht?",placeholder:"Voer een titel in...",value:""}},d={args:{label:"Wat is de titel van je bericht?",multiline:!0,numberOfLines:5,placeholder:"Voer een titel in...",value:""}};var S,V,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const Oe=["Default","Multiline"];export{c as Default,d as Multiline,Oe as __namedExportsOrder,Le as default};