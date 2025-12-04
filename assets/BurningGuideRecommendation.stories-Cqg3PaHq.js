import{U as n,k as b,S as y,a0 as B,j as i,V as h,e as S,C as T,T as f}from"./iframe-DTT7hwtZ.js";import{N as R}from"./NavigationButton-Dipf7cCP.js";import{B as V}from"./BurningGuideRecommendationTag-B6coONBA.js";import"./preload-helper-Dp1pzeXC.js";import"./Size-nMC5F5ui.js";const _={[n.red]:"Stook geen hout",[n.orange]:"Liever geen hout stoken",[n.yellow]:"Hout stoken kan, maar doe het slim"};var t=(e=>(e.burningGuide="BurningGuide",e.burningGuideCodeOrange="BurningGuideCodeOrange",e.burningGuideCodeRed="BurningGuideCodeRed",e.burningGuideCodeYellow="BurningGuideCodeYellow",e.burningGuideNuisance="BurningGuideNuisance",e.burningGuideRisks="BurningGuideRisks",e.burningGuideTips="BurningGuideTips",e))(t||{});const v={[n.red]:t.burningGuideCodeRed,[n.orange]:t.burningGuideCodeOrange,[n.yellow]:t.burningGuideCodeYellow},u=({recommendation:{variant:e}})=>{const d=b(W(e)),{navigate:s}=B();return i.jsx(h,{style:d.container,children:i.jsx(S,{inset:"lg",children:i.jsxs(T,{gutter:"md",halign:"center",children:[i.jsx(f,{testID:"BurningGuideRecommendationTitle",text:_[e],textAlign:"center"}),i.jsx(V,{fontSize:"body",variant:e}),i.jsx(R,{horizontallyAlign:"center",iconSize:"md",insetVertical:"sm",onPress:()=>{s(v[e])},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},W=e=>({color:d,border:s})=>y.create({container:{borderWidth:s.width.xl,borderColor:d.burningGuide.recommendationTag[e].background}});try{u.displayName="BurningGuideRecommendation",u.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const Y={component:u},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:n.red}}},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:n.orange}}},a={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:n.yellow}}};var m,c,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var l,p,C;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 22.00 uur',
      variant: BurningGuideCodeVariant.orange
    }
  }
}`,...(C=(p=o.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var G,x,w;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: false,
      timeWindow: 'Woensdag 04.00 uur',
      variant: BurningGuideCodeVariant.yellow
    }
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const I=["CodeRed","CodeOrange","CodeYellow"];export{o as CodeOrange,r as CodeRed,a as CodeYellow,I as __namedExportsOrder,Y as default};
