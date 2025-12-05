import{U as i,k as h,S as y,a0 as f,j as n,V as w,e as b,C as v,T as S}from"./iframe-jV65qURF.js";import{N as T}from"./NavigationButton-Be4ZC_2s.js";import{B as _}from"./BurningGuideRecommendationTag-DngUudEa.js";import"./preload-helper-Dp1pzeXC.js";import"./Size-hdQ3oM0L.js";var B=(e=>(e.burningGuide="BurningGuide",e.burningGuideCodeInfo="BurningGuideCodeInfo",e.burningGuideNuisance="BurningGuideNuisance",e.burningGuideRisks="BurningGuideRisks",e.burningGuideTips="BurningGuideTips",e))(B||{});const V={[i.red]:"Stook geen hout",[i.orange]:"Liever geen hout stoken",[i.yellow]:"Hout stoken kan, maar doe het slim"},s=({recommendation:{variant:e}})=>{const t=h(W(e)),{navigate:d}=f();return n.jsx(w,{style:t.container,children:n.jsx(b,{inset:"lg",children:n.jsxs(v,{gutter:"md",halign:"center",children:[n.jsx(S,{level:"h2",testID:"BurningGuideRecommendationTitle",text:V[e],textAlign:"center"}),n.jsx(_,{fontSize:"body",variant:e}),n.jsx(T,{horizontallyAlign:"center",iconSize:"md",insetVertical:"sm",onPress:()=>{d(B.burningGuideCodeInfo)},testID:"BurningGuideRecommendationNavigationButton",title:"Meer informatie"})]})})})},W=e=>({color:t,border:d})=>y.create({container:{borderWidth:d.width.xl,borderColor:t.burningGuide.recommendationTag[e].background}});try{s.displayName="BurningGuideRecommendation",s.__docgenInfo={description:"",displayName:"BurningGuideRecommendation",props:{recommendation:{defaultValue:null,description:"",name:"recommendation",required:!0,type:{name:"ListItem"}}}}}catch{}const F={component:s},r={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 16.00 uur",variant:i.red}}},o={args:{recommendation:{id:"0",isFixed:!0,timeWindow:"Dinsdag 22.00 uur",variant:i.orange}}},a={args:{recommendation:{id:"0",isFixed:!1,timeWindow:"Woensdag 04.00 uur",variant:i.yellow}}};var u,m,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,l,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 22.00 uur',
      variant: BurningGuideCodeVariant.orange
    }
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var x,G,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: false,
      timeWindow: 'Woensdag 04.00 uur',
      variant: BurningGuideCodeVariant.yellow
    }
  }
}`,...(C=(G=a.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};const N=["CodeRed","CodeOrange","CodeYellow"];export{o as CodeOrange,r as CodeRed,a as CodeYellow,N as __namedExportsOrder,F as default};
