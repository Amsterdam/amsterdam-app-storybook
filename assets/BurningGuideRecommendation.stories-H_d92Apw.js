import{as as r,j as n,V as C,at as w,S as G}from"./iframe-DkaHFtBo.js";import{N as S}from"./NavigationButton-b47MxZWm.js";import{B as b}from"./Box-4nz6N1QE.js";import{S as R}from"./SingleSelectable-DJ5pm0m_.js";import{C as m}from"./Column-DebUxsy0.js";import{T as j}from"./Title-CQKcO4dw.js";import{u as _}from"./useNavigation-HvgIT85B.js";import{B as v}from"./BurningGuideRecommendationTag-DurqS9M5.js";import{u as V}from"./useThemable-BH3F51aJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Pressable-B34cZUwv.js";import"./PressableBase-Cm4xxHiY.js";import"./usePiwikTrackCustomEventFromProps-BCCJ5yyE.js";import"./useTrackException-5Bc7ymh6.js";import"./Row-D6Pmr40f.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-7FFybeDm.js";import"./index-B2PA29KE.js";import"./useDeviceContext-ByKbUsXy.js";import"./Phrase-Bbtzv63G.js";import"./AccessibleText-D7uK2flS.js";import"./layoutStyles-D5xUSv6W.js";import"./Size-Cx3Nle_6.js";const c={[r.red]:"Stook geen hout",[r.orange]:"Liever geen hout stoken",[r.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=V(W(e)),{navigate:s}=_();return n.jsx(C,{style:a.container,children:n.jsx(b,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(R,{accessibilityLabel:`${c[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(j,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:c[e],textAlign:"center"}),n.jsx(v,{fontSize:"body",variant:e})]})}),n.jsx(S,{chevronSize:"md",horizontallyAlign:"center",insetVertical:"sm",onPress:()=>{s(w.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},W=e=>({color:a,border:s})=>G.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const ne={component:d},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:r.red}}},i={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:r.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:r.yellow}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
