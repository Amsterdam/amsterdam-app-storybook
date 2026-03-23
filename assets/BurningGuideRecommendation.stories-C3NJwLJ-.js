import{as as r,j as n,V as C,at as w,S as G}from"./iframe-C_edxd9J.js";import{N as S}from"./NavigationButton-BKBYh6W0.js";import{B as b}from"./Box-xJgJtUGO.js";import{S as R}from"./SingleSelectable-B036zOZM.js";import{C as m}from"./Column-BekdBeHG.js";import{T as j}from"./Title-DcbC6Pf1.js";import{u as _}from"./useNavigation-B3LN2rcb.js";import{B as v}from"./BurningGuideRecommendationTag-BTkh_vRP.js";import{u as V}from"./useThemable-B8gWwVJ2.js";import"./preload-helper-Dp1pzeXC.js";import"./Pressable-kdXX_r6Q.js";import"./PressableBase-3oQoeitz.js";import"./usePiwikTrackCustomEventFromProps-CfxWP7LG.js";import"./useTrackException-B6J39ozz.js";import"./Row-YzYJ8afb.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-BWCHVCvw.js";import"./index-KH9heRcO.js";import"./useDeviceContext-DAh3WlNH.js";import"./Phrase-BubHkehv.js";import"./AccessibleText-DKlOON7z.js";import"./layoutStyles-B-t07wY9.js";import"./Size-DtHyGCMC.js";const c={[r.red]:"Stook geen hout",[r.orange]:"Liever geen hout stoken",[r.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=V(W(e)),{navigate:s}=_();return n.jsx(C,{style:a.container,children:n.jsx(b,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(R,{accessibilityLabel:`${c[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(j,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:c[e],textAlign:"center"}),n.jsx(v,{fontSize:"body",variant:e})]})}),n.jsx(S,{chevronSize:"md",horizontallyAlign:"center",insetVertical:"sm",onPress:()=>{s(w.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},W=e=>({color:a,border:s})=>G.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const ne={component:d},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:r.red}}},i={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:r.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:r.yellow}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
