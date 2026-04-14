import{B as o,j as n,V as c,a9 as l,s as g}from"./iframe-xyhPCDlh.js";import{N as p}from"./NavigationButton-Bz0E5OQN.js";import{B as x}from"./Box-B0eTahWd.js";import{S as f}from"./SingleSelectable-CGk3kpq4.js";import{C as m}from"./Column-mjI4enOB.js";import{T as h}from"./Title-ILPwNi7n.js";import{u as B}from"./useNavigation-C3_Oo_w4.js";import{B as y}from"./BurningGuideRecommendationTag-CtLrzrbD.js";import{u as C}from"./useThemable-BZcRUo1n.js";import"./preload-helper-Zf8nSx-t.js";import"./Pressable-CiPDE39B.js";import"./PressableBase-BPWam9p_.js";import"./usePiwikTrackCustomEventFromProps-C_E446uw.js";import"./useTrackException-CL3MdO7K.js";import"./Row-Bj7am7AI.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-CO3wTS-e.js";import"./xml-DBzKYXbo.js";import"./useDeviceContext-DwI1kXMp.js";import"./Phrase-CxWgHPwJ.js";import"./AccessibleText-CkfIgS3g.js";import"./layoutStyles-CXzZ2hg8.js";import"./Size-Dw3_O5pr.js";const u={[o.red]:"Stook geen hout",[o.orange]:"Liever geen hout stoken",[o.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=C(G(e)),{navigate:s}=B();return n.jsx(c,{style:a.container,children:n.jsx(x,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(f,{accessibilityLabel:`${u[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(h,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:u[e],textAlign:"center"}),n.jsx(y,{fontSize:"body",variant:e})]})}),n.jsx(p,{chevronSize:"md",horizontallyAlign:"center",insetVertical:"sm",onPress:()=>{s(l.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},G=e=>({color:a,border:s})=>g.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",filePath:"/Users/runner/work/1/s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",methods:[],props:{recommendation:{defaultValue:null,declarations:[{fileName:"s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",name:"TypeLiteral"}],description:"",name:"recommendation",required:!0,tags:{},type:{name:"ListItem"}}},tags:{}}}catch{}const H={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:o.red}}},i={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:o.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:o.yellow}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
