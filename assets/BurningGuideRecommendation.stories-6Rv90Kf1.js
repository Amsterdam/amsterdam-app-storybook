import{B as i,j as n,V as g,s as l}from"./iframe-Dm8-54Jz.js";import{N as p}from"./NavigationButton-BMkq4zU4.js";import{B as x}from"./Box-C4PCb-GN.js";import{S as f}from"./SingleSelectable-D_0Jijv7.js";import{C as m}from"./Column-CyUIv4Xh.js";import{T as h}from"./Title-D132W8vM.js";import{u as G}from"./useNavigation-D9TF0weP.js";import{B}from"./BurningGuideRecommendationTag-DqX1k8XF.js";import{u as b}from"./useThemable-CmkvsCaL.js";import"./preload-helper-Zf8nSx-t.js";import"./Pressable-DaMKbvVk.js";import"./PressableBase-0ICOazOB.js";import"./useTrackException--xQGdVhz.js";import"./Row-Bq3SPWtG.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-DLBPPDaP.js";import"./xml-B6x9Kifb.js";import"./svgIcons-CNB6rTa-.js";import"./useDeviceContext-DnZ9FlLR.js";import"./Phrase-ORVwvM_D.js";import"./AccessibleText-Dg5zsdlc.js";import"./layoutStyles-CAa_DYov.js";import"./Size-CIBfMogB.js";var c=(e=>(e.burningGuide="BurningGuide",e.burningGuideCodeInfo="BurningGuideCodeInfo",e.burningGuideNuisance="BurningGuideNuisance",e.burningGuideRisks="BurningGuideRisks",e.burningGuideTips="BurningGuideTips",e))(c||{});const u={[i.red]:"Stook geen hout",[i.orange]:"Liever geen hout stoken",[i.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=b(C(e)),{navigate:s}=G();return n.jsx(g,{style:a.container,children:n.jsx(x,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(f,{accessibilityLabel:`${u[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(h,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:u[e],textAlign:"center"}),n.jsx(B,{fontSize:"body",variant:e})]})}),n.jsx(p,{chevronSize:"md",horizontallyAlign:"center",insetVertical:"sm",onPress:()=>{s(c.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},C=e=>({color:a,border:s})=>l.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",filePath:"/Users/runner/work/1/s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",methods:[],props:{recommendation:{defaultValue:null,declarations:[{fileName:"s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",name:"TypeLiteral"}],description:"",name:"recommendation",required:!0,tags:{},type:{name:"ListItem"}}},tags:{}}}catch{}const H={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:i.red}}},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:i.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:i.yellow}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const M=["CodeRed","CodeOrange","CodeYellow"];export{o as CodeOrange,r as CodeRed,t as CodeYellow,M as __namedExportsOrder,H as default};
