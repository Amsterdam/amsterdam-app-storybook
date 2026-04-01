import{j as n,A as u,V as o}from"./iframe-BwQ2mPvL.js";import{P as d}from"./Pressable-Ntmp695w.js";import{A as m}from"./AlertBase-CKHAOhxR.js";import{u as g}from"./useAccessibilityAnnounce-DApGC1k2.js";const l=e=>n.jsx(m,{...e,variant:u.negative});try{l.displayName="AlertNegative",l.__docgenInfo={description:"",displayName:"AlertNegative",props:{accessibilityLabel:{defaultValue:null,description:"",name:"accessibilityLabel",required:!1,type:{name:"string"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},hasCloseIcon:{defaultValue:null,description:"",name:"hasCloseIcon",required:!1,type:{name:"boolean"}},hasIcon:{defaultValue:null,description:"",name:"hasIcon",required:!1,type:{name:"boolean"}},navigateTo:{defaultValue:null,description:`If the Alert should include a link to an internal route, use this property
@example This example fills the link with a route and params within the current Navigator Stack
\`\`\`ts
navigateTo: {
   label: 'Dit is een link',
   params: [AddressRouteName.chooseAddress, { moduleSlug: ModuleSlug.address }],
}
\`\`\`
@example This example fills the link with a route and params to another Navigator Stack
\`\`\`ts
link: {
   label: 'Dit is een link',
   to: [
       ModuleSlug.address,
       {
           screen: AddressRouteName.chooseAddress,
           params: { moduleSlug: ModuleSlug.address } },
       }
   ],
}
\`\`\``,name:"navigateTo",required:!1,type:{name:"{ label: string; params: NavigateTo; }"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"information"'},{value:'"negative"'},{value:'"positive"'},{value:'"warning"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}}}}catch{}const p=({children:e,retryFn:t,testID:a})=>t?n.jsx(d,{onPress:t,testID:a,children:e}):n.jsx(o,{testID:a,children:e}),i=({retryFn:e,testID:t,text:a="Er ging iets mis.",title:r="Sorry …",...s})=>(g(`${r} ${a}`),n.jsx(p,{retryFn:e,testID:t,children:n.jsx(l,{...s,testID:"SomethingWentWrong",text:a,title:r})}));try{i.displayName="SomethingWentWrong",i.__docgenInfo={description:"",displayName:"SomethingWentWrong",props:{accessibilityLabel:{defaultValue:null,description:"",name:"accessibilityLabel",required:!1,type:{name:"string"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"information"'},{value:'"negative"'},{value:'"positive"'},{value:'"warning"'}]}},title:{defaultValue:{value:"Sorry …"},description:"",name:"title",required:!1,type:{name:"string"}},hasCloseIcon:{defaultValue:null,description:"",name:"hasCloseIcon",required:!1,type:{name:"boolean"}},hasIcon:{defaultValue:null,description:"",name:"hasIcon",required:!1,type:{name:"boolean"}},navigateTo:{defaultValue:null,description:`If the Alert should include a link to an internal route, use this property
@example This example fills the link with a route and params within the current Navigator Stack
\`\`\`ts
navigateTo: {
   label: 'Dit is een link',
   params: [AddressRouteName.chooseAddress, { moduleSlug: ModuleSlug.address }],
}
\`\`\`
@example This example fills the link with a route and params to another Navigator Stack
\`\`\`ts
link: {
   label: 'Dit is een link',
   to: [
       ModuleSlug.address,
       {
           screen: AddressRouteName.chooseAddress,
           params: { moduleSlug: ModuleSlug.address } },
       }
   ],
}
\`\`\``,name:"navigateTo",required:!1,type:{name:"{ label: string; params: NavigateTo; }"}},retryFn:{defaultValue:null,description:"",name:"retryFn",required:!1,type:{name:"(() => void)"}},text:{defaultValue:{value:"Er ging iets mis."},description:"",name:"text",required:!1,type:{name:"string"}}}}}catch{}export{i as S};
