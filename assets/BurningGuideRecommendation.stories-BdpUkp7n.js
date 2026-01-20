import{am as o,j as n,V as C,an as w,S as G}from"./iframe-DLsJoctm.js";import{N as S}from"./NavigationButton-BQac-8aw.js";import{B as b}from"./Box-B1Dlufsa.js";import{S as R}from"./SingleSelectable-DazMURSm.js";import{C as m}from"./Column-Cr3YZdtT.js";import{T as j}from"./Title-GLFT_7cM.js";import{u as _}from"./useNavigation-D63Kr8H6.js";import{B as V}from"./BurningGuideRecommendationTag-Bkk8c4XQ.js";import{u as W}from"./useThemable-Cxvi8Sbu.js";import"./preload-helper-Dp1pzeXC.js";import"./Pressable-BcpCMD7W.js";import"./PressableBase-LV3cJUsm.js";import"./usePiwikTrackCustomEventFromProps-B8R8yAUa.js";import"./useTrackException-ob4UBwX7.js";import"./Row-BMbu_2XQ.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-DJ-Fyz4R.js";import"./index-nvJ9Nl2i.js";import"./types-CVDZqz9V.js";import"./useDeviceContext-CxDoaEdB.js";import"./Phrase-CeX_rREt.js";import"./AccessibleText-CdkCwi5w.js";import"./layoutStyles-BohsR87w.js";import"./Size-B1DTvJRa.js";const c={[o.red]:"Stook geen hout",[o.orange]:"Liever geen hout stoken",[o.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=W(v(e)),{navigate:s}=_();return n.jsx(C,{style:a.container,children:n.jsx(b,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(R,{accessibilityLabel:`${c[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(j,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:c[e],textAlign:"center"}),n.jsx(V,{fontSize:"body",variant:e})]})}),n.jsx(S,{horizontallyAlign:"center",iconSize:"md",insetVertical:"sm",onPress:()=>{s(w.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},v=e=>({color:a,border:s})=>G.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const oe={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:o.red}}},i={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:o.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:o.yellow}}};var u,l,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,x,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 22.00 uur',
      variant: BurningGuideCodeVariant.orange
    }
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,B,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: false,
      timeWindow: 'Woensdag 04.00 uur',
      variant: BurningGuideCodeVariant.yellow
    }
  }
}`,...(y=(B=t.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const re=["CodeRed","CodeOrange","CodeYellow"];export{i as CodeOrange,r as CodeRed,t as CodeYellow,re as __namedExportsOrder,oe as default};
