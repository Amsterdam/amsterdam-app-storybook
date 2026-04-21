import{j as t,m as o,V as u}from"./iframe-BfstYiK4.js";import{P as m}from"./Pressable-BoXCVYmY.js";import{A as d}from"./AlertBase-UZSjfeLV.js";import{u as c}from"./useAccessibilityAnnounce-DfMANG6d.js";const n=e=>t.jsx(d,{...e,variant:o.negative});try{n.displayName="AlertNegative",n.__docgenInfo={description:"",displayName:"AlertNegative",filePath:"/Users/runner/work/1/s/src/components/ui/feedback/alert/AlertNegative.tsx",methods:[],props:{accessibilityLabel:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/AlertBase.tsx",name:"TypeLiteral"}],description:"",name:"accessibilityLabel",required:!1,tags:{},type:{name:"string"}},inset:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/AlertBase.tsx",name:"TypeLiteral"}],description:"",name:"inset",required:!1,tags:{},type:{name:"enum",raw:'"no" | "xxs" | "xs" | "sm" | "smd" | "md" | "lg" | "xl" | "xxl"',value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},hasCloseIcon:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"",name:"hasCloseIcon",required:!1,tags:{},type:{name:"boolean"}},hasIcon:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"",name:"hasIcon",required:!1,tags:{},type:{name:"boolean"}},navigateTo:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"If the Alert should include a link to an internal route, use this property",name:"navigateTo",required:!1,tags:{example:`This example fills the link with a route and params within the current Navigator Stack
\`\`\`ts
navigateTo: {
   label: 'Dit is een link',
   params: [AddressRouteName.chooseAddress, { moduleSlug: ModuleSlug.address }],
}
\`\`\`
This example fills the link with a route and params to another Navigator Stack
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
\`\`\``},type:{name:"{ label: string; params: NavigateTo; }"}},text:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"",name:"text",required:!1,tags:{},type:{name:"ReactNode"}},title:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"",name:"title",required:!1,tags:{},type:{name:"string"}},variant:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"",name:"variant",required:!1,tags:{},type:{name:"enum",raw:"AlertVariant",value:[{value:'"information"',description:"",fullComment:"",tags:{}},{value:'"negative"',description:"",fullComment:"",tags:{}},{value:'"positive"',description:"",fullComment:"",tags:{}},{value:'"warning"',description:"",fullComment:"",tags:{}}]}},testID:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/types.ts",name:"TypeLiteral"}],description:"",name:"testID",required:!0,tags:{},type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}},tags:{}}}catch{}const p=({children:e,retryFn:s,testID:a})=>s?t.jsx(m,{onPress:s,testID:a,children:e}):t.jsx(u,{testID:a,children:e}),r=({retryFn:e,testID:s,text:a="Er ging iets mis.",title:l="Sorry …",...i})=>(c(`${l} ${a}`),t.jsx(p,{retryFn:e,testID:s,children:t.jsx(n,{...i,testID:"SomethingWentWrong",text:a,title:l})}));try{r.displayName="SomethingWentWrong",r.__docgenInfo={description:"",displayName:"SomethingWentWrong",filePath:"/Users/runner/work/1/s/src/components/ui/feedback/SomethingWentWrong.tsx",methods:[],props:{testID:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/types.ts",name:"TypeLiteral"}],description:"",name:"testID",required:!0,tags:{},type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}},accessibilityLabel:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/AlertBase.tsx",name:"TypeLiteral"}],description:"",name:"accessibilityLabel",required:!1,tags:{},type:{name:"string"}},inset:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/AlertBase.tsx",name:"TypeLiteral"}],description:"",name:"inset",required:!1,tags:{},type:{name:"enum",raw:'"no" | "xxs" | "xs" | "sm" | "smd" | "md" | "lg" | "xl" | "xxl"',value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},variant:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"",name:"variant",required:!1,tags:{},type:{name:"enum",raw:"AlertVariant",value:[{value:'"information"',description:"",fullComment:"",tags:{}},{value:'"negative"',description:"",fullComment:"",tags:{}},{value:'"positive"',description:"",fullComment:"",tags:{}},{value:'"warning"',description:"",fullComment:"",tags:{}}]}},title:{defaultValue:{value:"Sorry …"},declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"",name:"title",required:!1,tags:{},type:{name:"string"}},hasCloseIcon:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"",name:"hasCloseIcon",required:!1,tags:{},type:{name:"boolean"}},hasIcon:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"",name:"hasIcon",required:!1,tags:{},type:{name:"boolean"}},navigateTo:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/alert/Alert.types.ts",name:"TypeLiteral"}],description:"If the Alert should include a link to an internal route, use this property",name:"navigateTo",required:!1,tags:{example:`This example fills the link with a route and params within the current Navigator Stack
\`\`\`ts
navigateTo: {
   label: 'Dit is een link',
   params: [AddressRouteName.chooseAddress, { moduleSlug: ModuleSlug.address }],
}
\`\`\`
This example fills the link with a route and params to another Navigator Stack
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
\`\`\``},type:{name:"{ label: string; params: NavigateTo; }"}},retryFn:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/SomethingWentWrong.tsx",name:"TypeLiteral"}],description:"",name:"retryFn",required:!1,tags:{},type:{name:"(() => void)"}},text:{defaultValue:{value:"Er ging iets mis."},declarations:[{fileName:"s/src/components/ui/feedback/SomethingWentWrong.tsx",name:"TypeLiteral"}],description:"",name:"text",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}export{r as S};
