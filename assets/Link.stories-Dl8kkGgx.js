import{j as e}from"./jsx-runtime-Bxcv0yjW.js";import{P as f}from"./Pressable-DHrgjg1F.js";import{c as x}from"./config-BZnShabN.js";import{R as h}from"./Row-BpaNVlKq.js";import{S as g}from"./Size-ByzkQpGs.js";import{I as k}from"./Icon-D4pY69IB.js";import{P as j}from"./Phrase-CZ8cqZBc.js";import{D as a}from"./types-BJ_48vsK.js";import{u}from"./useTheme-B_RvTPKM.js";import"./index-mfbfsM12.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PressableBase-DkeHPQv0.js";import"./usePiwikTrackCustomEventFromProps-BaWUoj_f.js";import"./index-8JwjhRSi.js";import"./useTrackException-Dtu3gYZx.js";import"./index-BowPbij1.js";import"./NativeEventEmitter-MQ3wzVGe.js";import"./index-DSI0shHu.js";import"./TextAncestorContext-Dg3XKfar.js";import"./index-kbHxBZ_W.js";import"./development-ClFnP_lz.js";import"./index-DmLzWpg5.js";import"./extends-CF3RwP-h.js";import"./index-BP1Ij_Cs.js";import"./Box-DXXlVoZv.js";import"./layoutStyles-hLwHoe51.js";import"./useThemable-Ii5MA1D0.js";import"./index-DFkxGuuM.js";import"./base-color-B2rPH-Aj.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./index-BtN4QjYR.js";import"./index-Dk74W0Oi.js";import"./Animated-CFNSbqHF.js";import"./index-2SHDvLR_.js";import"./index-CAyeAlm6.js";import"./useDeviceContext-Cm8FgCCV.js";import"./index-BXDkY5MO.js";const n=({direction:r,external:m,testID:t})=>{const{text:o}=u(),l=m?"external-link":r===a.left?"chevron-left":"chevron-right";return e.jsx(g,{height:o.lineHeight.body,children:e.jsx(k,{color:"link",name:l,testID:t})})},s=({label:r,onPress:m,testID:t,variant:o="default"})=>{const{text:l}=u();return e.jsx(f,{accessibilityLabel:o==="external"?r+", opent in webbrowser":r,accessibilityRole:"link",hitSlop:(x.minTouchSize-l.lineHeight.body)/2,onPress:m,testID:t,children:e.jsxs(h,{gutter:"sm",valign:o!=="external"?"center":void 0,children:[o==="external"&&e.jsx(n,{external:!0,testID:`${t}Icon`}),o==="backward"&&e.jsx(n,{direction:a.left,testID:`${t}Icon`}),o==="default"&&e.jsx(n,{direction:a.right,testID:`${t}Icon`}),e.jsx(j,{color:"link",testID:`${t}Phrase`,children:r}),o==="forward"&&e.jsx(n,{direction:a.right,testID:`${t}Icon`})]})})};try{s.displayName="Link",s.__docgenInfo={description:"",displayName:"Link",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"backward"'},{value:'"forward"'},{value:'"external"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const ie={component:s},i=r=>e.jsx(s,{...r});i.args={label:"Klik mij ik ben een link",variant:"default"};var p,c,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Link {...args} />",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const ne=["Default"];export{i as Default,ne as __namedExportsOrder,ie as default};