import{as as r,j as n,V as C,at as w,S as G}from"./iframe-BgmtLANu.js";import{N as S}from"./NavigationButton-CPnu3sp9.js";import{B as b}from"./Box-uiLcJe2C.js";import{S as R}from"./SingleSelectable-BwfDVlor.js";import{C as m}from"./Column-grk6y80-.js";import{T as j}from"./Title-CLrCXJ4x.js";import{u as _}from"./useNavigation-DJpcNqd7.js";import{B as v}from"./BurningGuideRecommendationTag-BiNrmhwr.js";import{u as V}from"./useThemable-CA-CoxxA.js";import"./preload-helper-Dp1pzeXC.js";import"./Pressable-4dWMZNLt.js";import"./PressableBase-CaFd1o6F.js";import"./usePiwikTrackCustomEventFromProps-Bdk-3ZGl.js";import"./useTrackException-C-sHUlDt.js";import"./Row-CHdoZ3-5.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-CdSdf80T.js";import"./index-BKTx2uac.js";import"./useDeviceContext-C89wB96i.js";import"./Phrase-CS1Td3vD.js";import"./AccessibleText-Cm5UdElf.js";import"./layoutStyles-USjOnbvc.js";import"./Size-D3FgncZ4.js";const c={[r.red]:"Stook geen hout",[r.orange]:"Liever geen hout stoken",[r.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=V(W(e)),{navigate:s}=_();return n.jsx(C,{style:a.container,children:n.jsx(b,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(R,{accessibilityLabel:`${c[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(j,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:c[e],textAlign:"center"}),n.jsx(v,{fontSize:"body",variant:e})]})}),n.jsx(S,{chevronSize:"md",horizontallyAlign:"center",insetVertical:"sm",onPress:()=>{s(w.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},W=e=>({color:a,border:s})=>G.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const ne={component:d},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:r.red}}},i={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:r.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:r.yellow}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,x,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(B=t.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const re=["CodeRed","CodeOrange","CodeYellow"];export{i as CodeOrange,o as CodeRed,t as CodeYellow,re as __namedExportsOrder,ne as default};
