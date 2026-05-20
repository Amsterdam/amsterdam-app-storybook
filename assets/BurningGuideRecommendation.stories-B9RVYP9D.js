import{B as i,j as n,V as g,s as l}from"./iframe-BzEXLxvz.js";import{N as p}from"./NavigationButton-7KCRaEco.js";import{B as x}from"./Box-DUM3Wh2-.js";import{S as f}from"./SingleSelectable-TuNaMAdK.js";import{C as m}from"./Column-ocgW_5HR.js";import{T as h}from"./Title-CkXt5C4j.js";import{u as G}from"./useNavigation-BU1BRsqS.js";import{B}from"./BurningGuideRecommendationTag-CiEMZOHP.js";import{u as b}from"./useThemable-icaQYRls.js";import"./preload-helper-Zf8nSx-t.js";import"./Pressable-DyKXV__s.js";import"./PressableBase-D8WX3nBs.js";import"./usePiwikTrackCustomEventFromProps-C7q-yqGJ.js";import"./useTrackException-BKs7VnvU.js";import"./Row-CLpR3f-E.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-0h8COE_R.js";import"./xml-CA5XRPWj.js";import"./svgIcons-NWpcNoNJ.js";import"./useDeviceContext-CaxAfgaI.js";import"./Phrase-CuOSARMZ.js";import"./AccessibleText-DsXTpan_.js";import"./layoutStyles-Dx_ApYH0.js";import"./Size-B5x7axkj.js";var c=(e=>(e.burningGuide="BurningGuide",e.burningGuideCodeInfo="BurningGuideCodeInfo",e.burningGuideNuisance="BurningGuideNuisance",e.burningGuideRisks="BurningGuideRisks",e.burningGuideTips="BurningGuideTips",e))(c||{});const u={[i.red]:"Stook geen hout",[i.orange]:"Liever geen hout stoken",[i.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=b(C(e)),{navigate:s}=G();return n.jsx(g,{style:a.container,children:n.jsx(x,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(f,{accessibilityLabel:`${u[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(h,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:u[e],textAlign:"center"}),n.jsx(B,{fontSize:"body",variant:e})]})}),n.jsx(p,{chevronSize:"md",horizontallyAlign:"center",insetVertical:"sm",onPress:()=>{s(c.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},C=e=>({color:a,border:s})=>l.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",filePath:"/Users/runner/work/1/s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",methods:[],props:{recommendation:{defaultValue:null,declarations:[{fileName:"s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",name:"TypeLiteral"}],description:"",name:"recommendation",required:!0,tags:{},type:{name:"ListItem"}}},tags:{}}}catch{}const M={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:i.red}}},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:i.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:i.yellow}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 22.00 uur',
      variant: BurningGuideCodeVariant.orange
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: false,
      timeWindow: 'Woensdag 04.00 uur',
      variant: BurningGuideCodeVariant.yellow
    }
  }
}`,...t.parameters?.docs?.source}}};const U=["CodeRed","CodeOrange","CodeYellow"];export{o as CodeOrange,r as CodeRed,t as CodeYellow,U as __namedExportsOrder,M as default};
