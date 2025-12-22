import{a1 as i,X as B,t as f,a8 as w,j as n,V as S,e as j,n as u,av as v,o as _}from"./iframe-Bfbvpq6X.js";import{N as T}from"./NavigationButton-CBkXaXOK.js";import{B as V}from"./BurningGuideRecommendationTag-D6gIRh23.js";import"./preload-helper-Dp1pzeXC.js";import"./Size-BaBhADsb.js";var y=(e=>(e.burningGuide="BurningGuide",e.burningGuideCodeInfo="BurningGuideCodeInfo",e.burningGuideNuisance="BurningGuideNuisance",e.burningGuideRisks="BurningGuideRisks",e.burningGuideTips="BurningGuideTips",e))(y||{});const c={[i.red]:"Stook geen hout",[i.orange]:"Liever geen hout stoken",[i.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const t=B(W(e)),{navigate:s}=w();return n.jsx(S,{style:t.container,children:n.jsx(j,{inset:"lg",children:n.jsxs(u,{gutter:"md",halign:"center",children:[n.jsx(v,{accessibilityLabel:`${c[e]}, Code ${e}`,children:n.jsxs(u,{gutter:"md",halign:"center",children:[n.jsx(_,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:c[e],textAlign:"center"}),n.jsx(V,{fontSize:"body",variant:e})]})}),n.jsx(T,{horizontallyAlign:"center",iconSize:"md",insetVertical:"sm",onPress:()=>{s(y.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},W=e=>({color:t,border:s})=>f.create({container:{borderWidth:s.width.xl,borderColor:t.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const N={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:i.red}}},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:i.orange}}},a={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:i.yellow}}};var m,l,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,x,G;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 22.00 uur',
      variant: BurningGuideCodeVariant.orange
    }
  }
}`,...(G=(x=o.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var h,b,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: false,
      timeWindow: 'Woensdag 04.00 uur',
      variant: BurningGuideCodeVariant.yellow
    }
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const z=["CodeRed","CodeOrange","CodeYellow"];export{o as CodeOrange,r as CodeRed,a as CodeYellow,z as __namedExportsOrder,N as default};
