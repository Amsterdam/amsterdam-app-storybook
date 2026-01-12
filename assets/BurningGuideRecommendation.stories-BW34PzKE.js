import{am as i,j as n,V as B,S as y}from"./iframe-Cz7CXUHQ.js";import{N as w}from"./NavigationButton-Bu-2SICk.js";import{B as S}from"./Box-DNPkKZf7.js";import{S as j}from"./SingleSelectable-CGRW2eJS.js";import{C as m}from"./Column-CYMYmzO9.js";import{T}from"./Title-CmT1LIS3.js";import{u as _}from"./useNavigation-C3d_EWQC.js";import{B as v}from"./BurningGuideRecommendationTag-CgFYXn03.js";import{u as V}from"./useThemable-DDtdTLxe.js";import"./preload-helper-Dp1pzeXC.js";import"./Pressable-6hLIFi0l.js";import"./PressableBase-Bzke1Wdy.js";import"./usePiwikTrackCustomEventFromProps-Xc6vTL-u.js";import"./useTrackException-DWtsawqd.js";import"./Row-Ct6MY6hT.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-B8zKW2ct.js";import"./index-DNHMKJm4.js";import"./types-CVDZqz9V.js";import"./useDeviceContext-jb4SIIFS.js";import"./Phrase-D7UVGrdY.js";import"./AccessibleText-BJccN3Lb.js";import"./layoutStyles-DRFZJw5Z.js";import"./Size-BqiG9zRU.js";var b=(e=>(e.burningGuide="BurningGuide",e.burningGuideCodeInfo="BurningGuideCodeInfo",e.burningGuideNuisance="BurningGuideNuisance",e.burningGuideRisks="BurningGuideRisks",e.burningGuideTips="BurningGuideTips",e))(b||{});const u={[i.red]:"Stook geen hout",[i.orange]:"Liever geen hout stoken",[i.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const a=V(W(e)),{navigate:s}=_();return n.jsx(B,{style:a.container,children:n.jsx(S,{inset:"lg",children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(j,{accessibilityLabel:`${u[e]}, Code ${e}`,children:n.jsxs(m,{gutter:"md",halign:"center",children:[n.jsx(T,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:u[e],textAlign:"center"}),n.jsx(v,{fontSize:"body",variant:e})]})}),n.jsx(w,{horizontallyAlign:"center",iconSize:"md",insetVertical:"sm",onPress:()=>{s(b.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},W=e=>({color:a,border:s})=>y.create({container:{borderWidth:s.width.xl,borderColor:a.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const ie={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:i.red}}},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:i.orange}}},t={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:i.yellow}}};var c,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
