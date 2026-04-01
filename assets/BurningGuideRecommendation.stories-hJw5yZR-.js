import{al as r,j as n,V as u,am as l,S as g}from"./iframe-DarNI88R.js";import{N as p}from"./NavigationButton-DFiFQBcK.js";import{B as x}from"./Box-Pu0T_-Aa.js";import{S as f}from"./SingleSelectable-BBnf2oi8.js";import{C as m}from"./Column-r1eNY8MM.js";import{T as h}from"./Title-D5YVQG2Y.js";import{u as B}from"./useNavigation-DArmUdcG.js";import{B as y}from"./BurningGuideRecommendationTag-PcnF5KPV.js";import{u as C}from"./useThemable-DNySlJ_X.js";import"./preload-helper-Zf8nSx-t.js";import"./Pressable-C-7x2RWs.js";import"./PressableBase-5ZVmtanQ.js";import"./usePiwikTrackCustomEventFromProps-icdBOxSM.js";import"./useTrackException-ffWGY_tq.js";import"./Row-DgTXEaln.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-346wWd9p.js";import"./index-2TuXuLNF.js";import"./useDeviceContext-BXz-K09g.js";import"./Phrase-DRmob5rc.js";import"./AccessibleText-BRJzlmYL.js";import"./layoutStyles-JoGkdW5i.js";import"./Size-CYXF5cIw.js";const c={[r.red]:"Stook geen hout",[r.orange]:"Liever geen hout stoken",[r.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=C(w(e)),{navigate:s}=B();return n.jsx(u,{style:a.container,children:n.jsx(x,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(f,{accessibilityLabel:`${c[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(h,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:c[e],textAlign:"center"}),n.jsx(y,{fontSize:"body",variant:e})]})}),n.jsx(p,{chevronSize:"md",horizontallyAlign:"center",insetVertical:"sm",onPress:()=>{s(l.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},w=e=>({color:a,border:s})=>g.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const M={component:d},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:r.red}}},i={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:r.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:r.yellow}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const P=["CodeRed","CodeOrange","CodeYellow"];export{i as CodeOrange,o as CodeRed,t as CodeYellow,P as __namedExportsOrder,M as default};
