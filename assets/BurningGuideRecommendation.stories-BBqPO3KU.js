import{B as o,j as n,V as c,a8 as l,s as g}from"./iframe-DHbJDa1I.js";import{N as p}from"./NavigationButton-CJ31thOf.js";import{B as x}from"./Box-BvSiDOzy.js";import{S as f}from"./SingleSelectable-cXUoe6uu.js";import{C as m}from"./Column-DVmqc9T8.js";import{T as h}from"./Title-DPknxdtd.js";import{u as B}from"./useNavigation-CB5oz3_m.js";import{B as y}from"./BurningGuideRecommendationTag-CJ8SUClo.js";import{u as C}from"./useThemable-B0ojQefn.js";import"./preload-helper-Zf8nSx-t.js";import"./Pressable-BUWM0kyV.js";import"./PressableBase-DtJnkiJX.js";import"./usePiwikTrackCustomEventFromProps-yFtBpTRo.js";import"./useTrackException-qtgZJjBL.js";import"./Row-DqkO9lDB.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-BpiZVjAl.js";import"./xml-BTe105cE.js";import"./useDeviceContext-vJvkhXcX.js";import"./Phrase-831Daa4t.js";import"./AccessibleText-qzn8J2-s.js";import"./layoutStyles-C--wpAdF.js";import"./Size-DuNjKRF9.js";const u={[o.red]:"Stook geen hout",[o.orange]:"Liever geen hout stoken",[o.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=C(G(e)),{navigate:s}=B();return n.jsx(c,{style:a.container,children:n.jsx(x,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(f,{accessibilityLabel:`${u[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(h,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:u[e],textAlign:"center"}),n.jsx(y,{fontSize:"body",variant:e})]})}),n.jsx(p,{chevronSize:"md",horizontallyAlign:"center",insetVertical:"sm",onPress:()=>{s(l.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},G=e=>({color:a,border:s})=>g.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",filePath:"/Users/runner/work/1/s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",methods:[],props:{recommendation:{defaultValue:null,declarations:[{fileName:"s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",name:"TypeLiteral"}],description:"",name:"recommendation",required:!0,tags:{},type:{name:"ListItem"}}},tags:{}}}catch{}const H={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:o.red}}},i={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:o.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:o.yellow}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 22.00 uur',
      variant: BurningGuideCodeVariant.orange
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: false,
      timeWindow: 'Woensdag 04.00 uur',
      variant: BurningGuideCodeVariant.yellow
    }
  }
}`,...t.parameters?.docs?.source}}};const M=["CodeRed","CodeOrange","CodeYellow"];export{i as CodeOrange,r as CodeRed,t as CodeYellow,M as __namedExportsOrder,H as default};
