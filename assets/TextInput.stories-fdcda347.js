import{u as x,a as v,j as o,S as B}from"./useThemable-f6bacdce.js";import{r as d}from"./index-f1286426.js";import{I as D}from"./IconButton-9f931873.js";import{L as F}from"./Label-b0eb2774.js";import{C as N}from"./Column-8f675c88.js";import{I as z}from"./Icon-5c61137a.js";import{V as I}from"./index-179922ce.js";import{T as M}from"./index-46f9b591.js";import{P as k}from"./index-fff9359c.js";import"./_commonjsHelpers-de833af9.js";import"./config-55b2a55c.js";import"./Badge-be3fe42f.js";import"./Row-434f21d2.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useDeviceContext-07d8242c.js";import"./index-bea11cd4.js";import"./index-f73c2a00.js";import"./types-e7c584cc.js";import"./index-c5acb37f.js";import"./extends-98964cd2.js";import"./index-cb95cf1a.js";import"./Paragraph-41cebac1.js";import"./index-5df40f86.js";import"./index-9d475cdf.js";import"./Animated-bb4acc0a.js";import"./index-678da550.js";import"./useTheme-eca4d827.js";const f=d.forwardRef(({label:r,numberOfLines:n,onChangeText:e,onFocus:t,placeholder:s="",warning:i,value:a="",testID:c="",...l},q)=>{const[L,b]=d.useState(!1),[h,m]=d.useState(a),g=x(A({hasFocus:L,numberOfLines:n,warning:i})),O=x(P);d.useEffect(()=>{m(a)},[a]);const C=()=>b(!1),E=y=>{m(y),e==null||e(y)},H=()=>{m(""),e==null||e("")},W=()=>{b(!0),t==null||t()};return v(N,{gutter:"sm",children:[o(F,{isAccessible:!l.accessibilityLabel,text:r}),v(I,{style:g.frame,children:[o(M,{...l,...O,numberOfLines:k.OS==="ios"?void 0:n,onBlur:C,onChangeText:E,onFocus:W,placeholder:s,ref:q,style:g.textInput,testID:c,textAlignVertical:"top",value:h}),h?o(I,{children:o(D,{accessibilityHint:"Maak dit tekstveld leeg",icon:o(z,{name:"close",size:"lg"}),onPress:H,testID:`${c}ClearButton`})}):null]})]})}),A=({hasFocus:r,numberOfLines:n,warning:e})=>({color:t,size:s,text:i})=>{const a=r||e?2:1,c=s.spacing.md-(a-1),l=s.spacing.sm-(a-1);return B.create({frame:{flexDirection:"row",paddingHorizontal:c,paddingVertical:l,backgroundColor:t.box.background.white,borderStyle:"solid",borderColor:e?t.control.warning.border:r?t.control.focus.border:t.control.default.border,borderWidth:a},textInput:{minHeight:k.OS==="ios"&&n?n*i.lineHeight.body+2*l:"auto",flex:1,padding:0,paddingTop:0,color:t.text.default,fontFamily:i.fontFamily.regular,fontSize:i.fontSize.body}})},P=({color:r})=>({placeholderTextColor:r.text.secondary});try{f.displayName="TextInput",f.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},numberOfLines:{defaultValue:null,description:`Sets the number of lines for a TextInput.
Use it with multiline set to true to be able to fill the lines.`,name:"numberOfLines",required:!1,type:{name:"number"}},onChangeText:{defaultValue:null,description:`Callback that is called when the text input's text changes.
Changed text is passed as an argument to the callback handler.`,name:"onChangeText",required:!1,type:{name:"(((event: string) => void) & ((text: string) => void))"}},onFocus:{defaultValue:null,description:"Callback that is called when the text input is focused",name:"onFocus",required:!1,type:{name:"((() => void) & ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void))"}},placeholder:{defaultValue:{value:""},description:"The string that will be rendered before text input has been entered",name:"placeholder",required:!1,type:{name:"string"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}}}}}catch{}const ge={component:f},u={args:{label:"Wat is de titel van je bericht?",placeholder:"Voer een titel in...",value:""}},p={args:{label:"Wat is de titel van je bericht?",multiline:!0,numberOfLines:5,placeholder:"Voer een titel in...",value:""}};var S,V,_;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var w,T,j;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Wat is de titel van je bericht?',
    multiline: true,
    numberOfLines: 5,
    placeholder: 'Voer een titel in...',
    value: ''
  }
}`,...(j=(T=p.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const ye=["Default","Multiline"];export{u as Default,p as Multiline,ye as __namedExportsOrder,ge as default};
//# sourceMappingURL=TextInput.stories-fdcda347.js.map
