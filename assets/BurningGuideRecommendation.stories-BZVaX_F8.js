import{B as o,j as n,V as c,a9 as l,s as g}from"./iframe-D9UGtGBj.js";import{N as p}from"./NavigationButton-BEX9Ip8H.js";import{B as x}from"./Box-TLYXTvXj.js";import{S as f}from"./SingleSelectable-CMdUh3qd.js";import{C as m}from"./Column-BgqY-e9z.js";import{T as h}from"./Title-CrX7mQRW.js";import{u as B}from"./useNavigation-zzgFyGbz.js";import{B as y}from"./BurningGuideRecommendationTag-fNWjVbCc.js";import{u as C}from"./useThemable-CwV4rU-S.js";import"./preload-helper-Zf8nSx-t.js";import"./Pressable-BhMGkLpc.js";import"./PressableBase-DS8NpxaB.js";import"./usePiwikTrackCustomEventFromProps-BgSpw6b-.js";import"./useTrackException-Dz62yeqa.js";import"./Row-j43gLZ2F.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-Dx8XrJXA.js";import"./xml-JDF98lPC.js";import"./useDeviceContext-Bu-v1HxA.js";import"./Phrase-jqr865W_.js";import"./AccessibleText-B3LiOWSW.js";import"./layoutStyles-CrdwtbKn.js";import"./Size-DBKlOZvP.js";const u={[o.red]:"Stook geen hout",[o.orange]:"Liever geen hout stoken",[o.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=C(G(e)),{navigate:s}=B();return n.jsx(c,{style:a.container,children:n.jsx(x,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(f,{accessibilityLabel:`${u[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(h,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:u[e],textAlign:"center"}),n.jsx(y,{fontSize:"body",variant:e})]})}),n.jsx(p,{chevronSize:"md",horizontallyAlign:"center",insetVertical:"sm",onPress:()=>{s(l.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},G=e=>({color:a,border:s})=>g.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",filePath:"/Users/runner/work/1/s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",methods:[],props:{recommendation:{defaultValue:null,declarations:[{fileName:"s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx",name:"TypeLiteral"}],description:"",name:"recommendation",required:!0,tags:{},type:{name:"ListItem"}}},tags:{}}}catch{}const H={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:o.red}}},i={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:o.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:o.yellow}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
