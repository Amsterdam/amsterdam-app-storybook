import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{G as n,K as r,ct as i,n as a,st as o}from"./dist-NCr0OYBw.js";import{l as s,u as c}from"./themes-DrStBEp1.js";import{n as l,t as u}from"./useThemable-D4FT0DWq.js";import{n as d,t as f}from"./Title-B4wGQU9K.js";import{n as p,t as m}from"./Box-DSFjIVf7.js";import{n as h,t as g}from"./Column-EJ_XNhlH.js";import{n as _,t as v}from"./useNavigation-DGT6diC9.js";import{n as y,t as b}from"./SingleSelectable-LQJVvOPg.js";import{n as x,t as S}from"./NavigationButton-DDr2xbrH.js";import{n as C,t as w}from"./BurningGuideRecommendationTag-D_SY9Npi.js";var T,E=e((()=>{T=function(e){return e.burningGuide=`BurningGuide`,e.burningGuideCodeInfo=`BurningGuideCodeInfo`,e.burningGuideNuisance=`BurningGuideNuisance`,e.burningGuideRisks=`BurningGuideRisks`,e.burningGuideTips=`BurningGuideTips`,e}({})})),D,O=e((()=>{c(),D={[s.red]:`Stook geen hout`,[s.orange]:`Liever geen hout stoken`,[s.yellow]:`Hout stoken kan, maar doe het slim`}})),k,A,j,M=e((()=>{a(),x(),p(),y(),h(),d(),v(),C(),E(),O(),u(),k=t(),A=({recommendation:{variant:e}})=>{let t=l(j(e)),{navigate:r}=_();return(0,k.jsx)(n,{style:t.container,children:(0,k.jsx)(m,{inset:`lg`,children:(0,k.jsxs)(g,{gutter:`md`,halign:`center`,children:[(0,k.jsx)(b,{accessibilityLabel:`${D[e]}, Code ${e}`,children:(0,k.jsxs)(g,{gutter:`md`,halign:`center`,children:[(0,k.jsx)(f,{accessible:!1,level:`h2`,testID:`BurningGuideRecommendationTitle`,text:D[e],textAlign:`center`}),(0,k.jsx)(w,{fontSize:`body`,variant:e})]})}),(0,k.jsx)(S,{chevronSize:`md`,horizontallyAlign:`center`,insetVertical:`sm`,onPress:()=>{r(T.burningGuideCodeInfo)},testID:`BurningGuideRecommendationNavigationButton`,title:`Meer informatie`})]})})})},j=e=>({color:t,border:n})=>i.create({container:{borderWidth:n.width.xl,borderColor:t.burningGuide.recommendationTag[e].background}});try{A.displayName=`BurningGuideRecommendation`,A.__docgenInfo={description:``,displayName:`BurningGuideRecommendation`,filePath:`/Users/runner/work/1/s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx`,methods:[],props:{recommendation:{defaultValue:null,declarations:[{fileName:`s/src/modules/burning-guide/components/BurningGuideRecommendation.tsx`,name:`TypeLiteral`}],description:``,name:`recommendation`,required:!0,tags:{},type:{name:`ListItem`}}},tags:{}}}catch{}})),N,P,F,I,L;e((()=>{c(),M(),N={component:A},P={args:{recommendation:{id:`0`,isFixed:!0,timeWindow:`Dinsdag 16.00 uur`,variant:s.red}}},F={args:{recommendation:{id:`0`,isFixed:!0,timeWindow:`Dinsdag 22.00 uur`,variant:s.orange}}},I={args:{recommendation:{id:`0`,isFixed:!1,timeWindow:`Woensdag 04.00 uur`,variant:s.yellow}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 16.00 uur',
      variant: BurningGuideCodeVariant.red
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: true,
      timeWindow: 'Dinsdag 22.00 uur',
      variant: BurningGuideCodeVariant.orange
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    recommendation: {
      id: '0',
      isFixed: false,
      timeWindow: 'Woensdag 04.00 uur',
      variant: BurningGuideCodeVariant.yellow
    }
  }
}`,...I.parameters?.docs?.source}}},L=[`CodeRed`,`CodeOrange`,`CodeYellow`]}))();export{F as CodeOrange,P as CodeRed,I as CodeYellow,L as __namedExportsOrder,N as default};