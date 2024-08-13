import{j as o}from"./jsx-runtime-ffb262ed.js";import{r as j}from"./index-76fb7be0.js";import{F as k}from"./Fader-a5f64e84.js";import{P as C}from"./PressableBase-6a28426e.js";import{T as F}from"./Triangle-1bedb614.js";import{S as N}from"./SingleSelectable-56ab2a6a.js";import{C as P}from"./Column-6598944b.js";import{P as E}from"./Paragraph-4c69197d.js";import{e as V}from"./useThemable-a987c5ae.js";import{S as D}from"./index-a802de3b.js";import{R as $}from"./Row-1f5de8b8.js";import{P as a,D as c}from"./types-65ac26c5.js";import{u as A}from"./useAccessibilityFocus-f494fa3b.js";import{V as L}from"./index-5b56d0c8.js";import"./_commonjsHelpers-de833af9.js";import"./useIsReduceMotionEnabled-646f94d0.js";import"./index-d94c145e.js";import"./index-115efad7.js";import"./TextAncestorContext-c1a63433.js";import"./NativeEventEmitter-2071600e.js";import"./index-d24010b5.js";import"./Animated-fdc153e4.js";import"./extends-4c19d496.js";import"./index-4f48d35c.js";import"./index-ccab62b4.js";import"./usePiwikTrackCustomEventFromProps-a4eb1a0d.js";import"./index-e8e5dbb3.js";import"./useTrackException-a3338c13.js";import"./index-ee304789.js";import"./development-6fd8b346.js";import"./index-66f43522.js";import"./index-ecf17355.js";import"./index-9d475cdf.js";import"./Center-34f5926c.js";import"./layoutStyles-b0426a14.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./index-d3ea75b5.js";import"./base-color-f0c30692.js";import"./useFocusOnElement-e4a3b5d5.js";import"./index-c1b0849e.js";import"./useIsScreenReaderEnabled-6d94c23a.js";import"./useTimeout-40d8ae7a.js";import"./duration-f855cdb9.js";const g=({testID:e,text:t})=>{const n=V(W),i=typeof t=="string"?[t]:t;return o.jsx(N,{accessibilityRole:"text",accessible:!1,style:n.tooltip,testID:`${e}Content`,children:o.jsx(P,{gutter:"sm",children:i.map((s,r)=>o.jsx(E,{color:"inverse",testID:`${e}Paragraph${r}`,variant:"small",children:s},s))})})},W=({color:e,size:t})=>D.create({tooltip:{padding:t.spacing.md,backgroundColor:e.background.inverse}});try{g.displayName="TooltipContent",g.__docgenInfo={description:"",displayName:"TooltipContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const M=e=>({[a.above]:c.down,[a.below]:c.up,[a.before]:c.right,[a.after]:c.left})[e],U=j.forwardRef(({extraSpace:e,placement:t,productTourTipTargetLayout:n,fadeIn:i,fadeInDuration:s,startFadeIn:r,...l},p)=>{const m=V(z({extraSpace:e,placement:t,productTourTipTargetLayout:n}));return i?o.jsx(k,{...l,duration:s,ref:p,shouldAnimate:r,style:m.tooltip}):o.jsx(L,{...l,ref:p,style:m.tooltip})}),y=j.forwardRef(({accessibilityLabel:e,accessibilityLanguage:t="nl-NL",extraSpace:n,fadeIn:i,fadeInDuration:s,placement:r,productTourTipTargetLayout:l,onPress:p,startFadeIn:m,testID:x,text:I},q)=>{const S=M(r),R=A(),u=o.jsx(F,{direction:S});return o.jsx(U,{extraSpace:n,fadeIn:i,fadeInDuration:s,placement:r,productTourTipTargetLayout:l,ref:q,startFadeIn:m,children:o.jsx(C,{accessibilityLabel:e,accessibilityLanguage:t,accessibilityRole:"alert",onPress:p,ref:R,testID:x,children:o.jsxs($,{children:[r===a.after&&u,o.jsxs(P,{children:[r===a.below&&u,o.jsx(g,{testID:x,text:I}),r===a.above&&u]}),r===a.before&&u]})})})}),z=({extraSpace:e,placement:t,productTourTipTargetLayout:n})=>({size:i,z:s})=>{const r=()=>{if(!n)return{position:"relative"};const l=n.height+(e?i.spacing[e]:0);return{left:0,right:0,position:"absolute",...t===a.above?{bottom:l}:{top:l}}};return D.create({tooltip:{flex:1,alignItems:"center",paddingHorizontal:i.spacing.lg,...r(),zIndex:s.tooltip}})};try{y.displayName="Tooltip",y.__docgenInfo={description:"",displayName:"Tooltip",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},extraSpace:{defaultValue:null,description:"Extra space to set between target and tooltip",name:"extraSpace",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},fadeIn:{defaultValue:null,description:"Determines whether the tooltip fades in and out. Default is 300 ms.",name:"fadeIn",required:!1,type:{name:"boolean"}},fadeInDuration:{defaultValue:null,description:"Duration of the fade-in animation in milliseconds, only works when fade = true",name:"fadeInDuration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"above"'},{value:'"after"'},{value:'"before"'},{value:'"below"'}]}},productTourTipTargetLayout:{defaultValue:null,description:"",name:"productTourTipTargetLayout",required:!1,type:{name:"LayoutRectangle"}},startFadeIn:{defaultValue:null,description:"",name:"startFadeIn",required:!1,type:{name:"boolean"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Fe={component:y},d={args:{placement:a.below,text:"We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld."}},f={args:{placement:a.below,text:["Tip!","Vul het formulier in en win een parkeervergunning."]}};var b,v,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: 'We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld.'
  }
}`,...(h=(v=d.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,_,T;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: ['Tip!', 'Vul het formulier in en win een parkeervergunning.']
  }
}`,...(T=(_=f.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const Ne=["Default","Multiline"];export{d as Default,f as Multiline,Ne as __namedExportsOrder,Fe as default};
