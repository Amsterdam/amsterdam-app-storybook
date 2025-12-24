import{aI as i,d as y,S as f,u as w,j as n,V as S,B as j,C as u,w as T,T as _}from"./iframe-usjyrobZ.js";import{N as v}from"./NavigationButton-CfIGyKQK.js";import{B as V}from"./BurningGuideRecommendationTag-D3HySGw3.js";import"./preload-helper-Dp1pzeXC.js";import"./Size-D2zZUW2c.js";var B=(e=>(e.burningGuide="BurningGuide",e.burningGuideCodeInfo="BurningGuideCodeInfo",e.burningGuideNuisance="BurningGuideNuisance",e.burningGuideRisks="BurningGuideRisks",e.burningGuideTips="BurningGuideTips",e))(B||{});const c={[i.red]:"Stook geen hout",[i.orange]:"Liever geen hout stoken",[i.yellow]:"Hout stoken kan, maar doe het slim"},d=({recommendation:{variant:e}})=>{const t=y(W(e)),{navigate:s}=w();return n.jsx(S,{style:t.container,children:n.jsx(j,{inset:"lg",children:n.jsxs(u,{gutter:"md",halign:"center",children:[n.jsx(T,{accessibilityLabel:`${c[e]}, Code ${e}`,children:n.jsxs(u,{gutter:"md",halign:"center",children:[n.jsx(_,{accessible:!1,level:"h2",testID:"BurningGuideRecommendationTitle",text:c[e],textAlign:"center"}),n.jsx(V,{fontSize:"body",variant:e})]})}),n.jsx(v,{horizontallyAlign:"center",iconSize:"md",insetVertical:"sm",onPress:()=>{s(B.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},W=e=>({color:t,border:s})=>f.create({container:{borderWidth:s.width.xl,borderColor:t.burningGuide.recommendationTag[e].background}});try{d.displayName="BurningGuideRecommendation",d.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const N={component:d},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:i.red}}},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:i.orange}}},a={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:i.yellow}}};var m,l,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(G=(x=o.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var h,C,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: false,
      timeWindow: 'Woensdag 04.00 uur',
      variant: BurningGuideCodeVariant.yellow
    }
  }
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const z=["CodeRed","CodeOrange","CodeYellow"];export{o as CodeOrange,r as CodeRed,a as CodeYellow,z as __namedExportsOrder,N as default};
