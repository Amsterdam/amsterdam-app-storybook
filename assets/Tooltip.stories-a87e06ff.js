import{j as n,S as q,a as w}from"./index-1401012c.js";import{r as y}from"./index-76fb7be0.js";import{F as j}from"./Fader-ede04fd6.js";import{P as N}from"./PressableBase-6c81d006.js";import{T as E}from"./Triangle-800b296a.js";import{S as $}from"./SingleSelectable-a6d5becd.js";import{C as S}from"./Column-9caa3800.js";import{P as A}from"./Paragraph-12a38325.js";import{a as k}from"./useThemable-a5fed888.js";import{R as L}from"./Row-a25c9171.js";import{P as o,D as d}from"./types-e7c584cc.js";import{u as W}from"./useAccessibilityFocus-f67d6fe4.js";import{V as M}from"./index-e1b95cde.js";import"./_commonjsHelpers-de833af9.js";import"./useIsReduceMotionEnabled-4355285d.js";import"./index-5d7f9d89.js";import"./invariant-f1a82cf7.js";import"./NativeEventEmitter-7be6cb46.js";import"./index-8ad79f0b.js";import"./Animated-905ced6c.js";import"./extends-98964cd2.js";import"./index-240c6d7a.js";import"./TextAncestorContext-63ed7f56.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./usePiwikTrackCustomEventFromProps-169cccda.js";import"./slugs-8fd1a178.js";import"./index-1ec8836c.js";import"./index-14cede91.js";import"./development-fba0c344.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./useSentry-2755e804.js";import"./logging-4c91f15c.js";import"./callBound-55a1829f.js";import"./index-072f370e.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Center-c19f3089.js";import"./layoutStyles-ee44dbe0.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./useIsScreenReaderEnabled-293fae72.js";import"./duration-6591c38b.js";import"./index-c1b0849e.js";const b=({testID:e,text:r})=>{const a=k(U),i=typeof r=="string"?[r]:r;return n($,{accessibilityRole:"text",accessible:!1,style:a.tooltip,testID:`${e}Content`,children:n(S,{gutter:"sm",children:i.map((l,t)=>n(A,{color:"inverse",testID:`${e}Paragraph${t}`,variant:"small",children:l},l))})})},U=({color:e,size:r})=>q.create({tooltip:{padding:r.spacing.md,backgroundColor:e.background.inverse}});try{b.displayName="TooltipContent",b.__docgenInfo={description:"",displayName:"TooltipContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const z=e=>({[o.above]:d.down,[o.below]:d.up,[o.before]:d.right,[o.after]:d.left})[e],B=y.forwardRef(({extraSpace:e,placement:r,productTourTipTargetLayout:a,fadeIn:i,fadeInDuration:l,startFadeIn:t,...s},p)=>{const m=k(H({extraSpace:e,placement:r,productTourTipTargetLayout:a}));return i?n(j,{...s,duration:l,ref:p,shouldAnimate:t,style:m.tooltip}):n(M,{...s,ref:p,style:m.tooltip})}),v=y.forwardRef(({accessibilityLabel:e,accessibilityLanguage:r="nl-NL",extraSpace:a,fadeIn:i,fadeInDuration:l,placement:t,productTourTipTargetLayout:s,onPress:p,startFadeIn:m,testID:h,text:C},R)=>{const F=z(t),x=W(),u=y.useRef(null);y.useEffect(()=>{u!=null&&u.current&&x(u.current)},[x]);const c=n(E,{direction:F});return n(B,{extraSpace:a,fadeIn:i,fadeInDuration:l,placement:t,productTourTipTargetLayout:s,ref:R,startFadeIn:m,children:n(N,{accessibilityLabel:e,accessibilityLanguage:r,accessibilityRole:"alert",onPress:p,testID:h,children:w(L,{children:[t===o.after&&c,w(S,{children:[t===o.below&&c,n(b,{testID:h,text:C}),t===o.above&&c]}),t===o.before&&c]})})})}),H=({extraSpace:e,placement:r,productTourTipTargetLayout:a})=>({size:i})=>{const l=()=>{if(!a)return{position:"relative"};const t=a.height+(e?i.spacing[e]:0);return{left:0,right:0,position:"absolute",...r===o.above?{bottom:t}:{top:t}}};return q.create({tooltip:{flex:1,alignItems:"center",paddingHorizontal:i.spacing.lg,...l(),zIndex:15}})};try{v.displayName="Tooltip",v.__docgenInfo={description:"",displayName:"Tooltip",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | string[]"}},extraSpace:{defaultValue:null,description:"Extra space to set between target and tooltip",name:"extraSpace",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},fadeIn:{defaultValue:null,description:"Determines whether the tooltip fades in and out. Default is 300 ms.",name:"fadeIn",required:!1,type:{name:"boolean"}},fadeInDuration:{defaultValue:null,description:"Duration of the fade-in animation in milliseconds, only works when fade = true",name:"fadeInDuration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"above"'},{value:'"after"'},{value:'"before"'},{value:'"below"'}]}},productTourTipTargetLayout:{defaultValue:null,description:"",name:"productTourTipTargetLayout",required:!1,type:{name:"LayoutRectangle"}},startFadeIn:{defaultValue:null,description:"",name:"startFadeIn",required:!1,type:{name:"boolean"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const $e={component:v},f={args:{placement:o.below,text:"We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld."}},g={args:{placement:o.below,text:["Tip!","Vul het formulier in en win een parkeervergunning."]}};var _,T,P;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: 'We gebruiken het adres alleen in de app om u de juiste informatie te tonen. Uw gegevens worden niet gedeeld.'
  }
}`,...(P=(T=f.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var V,D,I;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placement: Placement.below,
    text: ['Tip!', 'Vul het formulier in en win een parkeervergunning.']
  }
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Ae=["Default","Multiline"];export{f as Default,g as Multiline,Ae as __namedExportsOrder,$e as default};