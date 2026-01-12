import{am as i,j as n,V as B,S as y}from"./iframe-VF62bCEO.js";import{N as w}from"./NavigationButton-la-xT7jt.js";import{B as S}from"./Box-KcEiQj6E.js";import{S as j}from"./SingleSelectable-BKEuwMbR.js";import{C as m}from"./Column-B23F-OVQ.js";import{T}from"./Title-CkXfvQTP.js";import{u as _}from"./useNavigation-D3ZDx4ha.js";import{B as v}from"./BurningGuideRecommendationTag-CM-7n66z.js";import{u as V}from"./useThemable-DhwO9QBW.js";import"./preload-helper-Dp1pzeXC.js";import"./Pressable-DKsxbw7Z.js";import"./PressableBase-DtRWX0sr.js";import"./usePiwikTrackCustomEventFromProps-9gy5Avv_.js";import"./useTrackException-Dd2wW29j.js";import"./Row-OHOhu8pV.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-KAZ1yaWc.js";import"./index-CsyreniV.js";import"./types-CVDZqz9V.js";import"./useDeviceContext-DRL1Fap7.js";import"./Phrase-DsmPs0Sq.js";import"./AccessibleText-DMWU-aKf.js";import"./layoutStyles-BaIMMgS2.js";import"./Size-BiW7foK7.js";var b=(e=>(e.burningGuide="BurningGuide",e.burningGuideCodeInfo="BurningGuideCodeInfo",e.burningGuideNuisance="BurningGuideNuisance",e.burningGuideRisks="BurningGuideRisks",e.burningGuideTips="BurningGuideTips",e))(b||{});const u={[i.red]:"Stook geen hout",[i.orange]:"Liever geen hout stoken",[i.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=V(W(e)),{navigate:s}=_();return n.jsx(B,{style:a.container,children:n.jsx(S,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(j,{accessibilityLabel:`${u[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(T,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:u[e],textAlign:"center"}),n.jsx(v,{fontSize:"body",variant:e})]})}),n.jsx(w,{horizontallyAlign:"center",iconSize:"md",insetVertical:"sm",onPress:()=>{s(b.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},W=e=>({color:a,border:s})=>y.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const ie={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:i.red}}},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:i.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:i.yellow}}};var c,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,x,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 22.00 uur',
      variant: BurningGuideCodeVariant.orange
    }
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var G,h,C;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: false,
      timeWindow: 'Woensdag 04.00 uur',
      variant: BurningGuideCodeVariant.yellow
    }
  }
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const re=["CodeRed","CodeOrange","CodeYellow"];export{o as CodeOrange,r as CodeRed,t as CodeYellow,re as __namedExportsOrder,ie as default};
