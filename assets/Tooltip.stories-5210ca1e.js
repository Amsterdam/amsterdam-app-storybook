import{j as o,S as D}from"./index-9d7eb5a2.js";import{r as y}from"./index-76fb7be0.js";import{F as C}from"./Fader-fed0f1a1.js";import{P as F}from"./PressableBase-2680f321.js";import{T as E}from"./Triangle-dbe84300.js";import{S as N}from"./SingleSelectable-4c258d98.js";import{C as I}from"./Column-46adc1c7.js";import{P as $}from"./Paragraph-e7bf4ab1.js";import{c as q}from"./useThemable-a57962df.js";import{R as A}from"./Row-00cddd21.js";import{P as n,D as d}from"./types-65ac26c5.js";import{u as L}from"./useAccessibilityFocus-ece11ad0.js";import{V as W}from"./index-b1a24850.js";import"./_commonjsHelpers-de833af9.js";import"./useIsReduceMotionEnabled-43587bce.js";import"./index-5c0b44be.js";import"./invariant-f1a82cf7.js";import"./NativeEventEmitter-7be6cb46.js";import"./index-fb7b51b4.js";import"./TextAncestorContext-3b992cff.js";import"./index-17010b30.js";import"./Animated-4476d759.js";import"./extends-34e645d9.js";import"./index-72552a59.js";import"./index-87b6cec9.js";import"./index-169dd17a.js";import"./usePiwikTrackCustomEventFromProps-0c5dd185.js";import"./slugs-b43e7e98.js";import"./index-6f107027.js";import"./development-de2bc6fd.js";import"./redux-toolkit.esm-cb9067f1.js";import"./useSentry-3517252a.js";import"./index-07bd7250.js";import"./callBound-c4e9bae7.js";import"./index-5008ca59.js";import"./index-b21a90e4.js";import"./index-9d475cdf.js";import"./Center-25dc1fa7.js";import"./layoutStyles-605143e0.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./useIsScreenReaderEnabled-c23fcc2f.js";import"./duration-6591c38b.js";import"./index-c1b0849e.js";const x=({testID:e,text:t})=>{const a=q(M),i=typeof t=="string"?[t]:t;return o.jsx(N,{accessibilityRole:"text",accessible:!1,style:a.tooltip,testID:`${e}Content`,children:o.jsx(I,{gutter:"sm",children:i.map((s,r)=>o.jsx($,{color:"inverse",testID:`${e}Paragraph${r}`,variant:"small",children:s},s))})})},M=({color:e,size:t})=>D.create({tooltip:{padding:t.spacing.md,backgroundColor:e.background.inverse}});try{x.displayName="TooltipContent",x.__docgenInfo={description:"",displayName:"TooltipContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const U=e=>({[n.above]:d.down,[n.below]:d.up,[n.before]:d.right,[n.after]:d.left})[e],z=y.forwardRef(({extraSpace:e,placement:t,productTourTipTargetLayout:a,fadeIn:i,fadeInDuration:s,startFadeIn:r,...l},p)=>{const m=q(B({extraSpace:e,placement:t,productTourTipTargetLayout:a}));return i?o.jsx(C,{...l,duration:s,ref:p,shouldAnimate:r,style:m.tooltip}):o.jsx(W,{...l,ref:p,style:m.tooltip})}),b=y.forwardRef(({accessibilityLabel:e,accessibilityLanguage:t="nl-NL",extraSpace:a,fadeIn:i,fadeInDuration:s,placement:r,productTourTipTargetLayout:l,onPress:p,startFadeIn:m,testID:v,text:S},R)=>{const k=U(r),h=L(),u=y.useRef(null);y.useEffect(()=>{u!=null&&u.current&&h(u.current)},[h]);const c=o.jsx(E,{direction:k});return o.jsx(z,{extraSpace:a,fadeIn:i,fadeInDuration:s,placement:r,productTourTipTargetLayout:l,ref:R,startFadeIn:m,children:o.jsx(F,{accessibilityLabel:e,accessibilityLanguage:t,accessibilityRole:"alert",onPress:p,testID:v,children:o.jsxs(A,{children:[r===n.after&&c,o.jsxs(I,{children:[r===n.below&&c,o.jsx(x,{testID:v,text:S}),r===n.above&&c]}),r===n.before&&c]})})})}),B=({extraSpace:e,placement:t,productTourTipTargetLayout:a})=>({size:i,z:s})=>{const r=()=>{if(!a)return{position:"relative"};const l=a.height+(e?i.spacing[e]:0);return{left:0,right:0,position:"absolute",...t===n.above?{bottom:l}:{top:l}}};return D.create({tooltip:{flex:1,alignItems:"center",paddingHorizontal:i.spacing.lg,...r(),zIndex:s.tooltip}})};try{b.displayName="Tooltip",b.__docgenInfo={description:"",displayName:"Tooltip",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},extraSpace:{defaultValue:null,description:"Extra space to set between target and tooltip",name:"extraSpace",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},fadeIn:{defaultValue:null,description:"Determines whether the tooltip fades in and out. Default is 300 ms.",name:"fadeIn",required:!1,type:{name:"boolean"}},fadeInDuration:{defaultValue:null,description:"Duration of the fade-in animation in milliseconds, only works when fade = true",name:"fadeInDuration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"above"'},{value:'"after"'},{value:'"before"'},{value:'"below"'}]}},productTourTipTargetLayout:{defaultValue:null,description:"",name:"productTourTipTargetLayout",required:!1,type:{name:"LayoutRectangle"}},startFadeIn:{defaultValue:null,description:"",name:"startFadeIn",required:!1,type:{name:"boolean"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const $e={component:b},f={args:{placement:n.below,text:"We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld."}},g={args:{placement:n.below,text:["Tip!","Vul het formulier in en win een parkeervergunning."]}};var w,_,T;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: 'We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld.'
  }
}`,...(T=(_=f.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var j,P,V;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: ['Tip!', 'Vul het formulier in en win een parkeervergunning.']
  }
}`,...(V=(P=g.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const Ae=["Default","Multiline"];export{f as Default,g as Multiline,Ae as __namedExportsOrder,$e as default};
