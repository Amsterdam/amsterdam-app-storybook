import{d as I,j as m,S}from"./useThemable-05c0eaf9.js";import{r as n}from"./index-e67e0a49.js";import{i as x}from"./development-0f9f5b22.js";import{P as _,I as R}from"./index-66ad1afc.js";import{u as W,P as v}from"./index-ebcf7e15.js";import"./_commonjsHelpers-de833af9.js";import"./index-cacef664.js";import"./extends-98964cd2.js";import"./index-df3ac05d.js";import"./invariant-ea487af3.js";const b=()=>null,C=({width:t=0},{width:e=0})=>t>e?1:t<e?-1:0,L=(t,e)=>{var i;if(!Array.isArray(t))return t.uri;if(x&&!e&&(e=1e3),!e)return;const r=[...t].sort(C),a=_.getPixelSizeForLayoutSize(e),s=r.find(({width:o=0})=>o>=a);return s?s.uri:(i=r.pop())==null?void 0:i.uri},N=({onLayout:t,style:e,uriSources:r,width:a=0,...s})=>{const i=n.useMemo(()=>L(r,a),[r,a]);return m(b,{accessibilityIgnoresInvertColors:!0,accessibilityLanguage:"nl-NL",onLayout:t,source:{uri:i},style:e,...s})},d=({aspectRatio:t="wide",onLayout:e,source:r,...a})=>{const{height:s,width:i}=W(),[o,u]=n.useState(void 0),w=n.useMemo(()=>j(t,o),[t,o]),l=I(w);n.useEffect(()=>{u(void 0)},[s,i]);const p=n.useCallback(g=>{u(g.nativeEvent.layout.width),e==null||e(g)},[e,u]);return v.OS==="ios"&&typeof r!="number"?m(N,{onLayout:p,style:[l.image],uriSources:r,width:o,...a}):m(R,{accessibilityIgnoresInvertColors:!0,accessibilityLanguage:"nl-NL",onLayout:p,source:r,style:[l.image],...a})},j=(t,e)=>({media:r})=>{const a=r.aspectRatio[t];return S.create({image:{width:void 0,maxWidth:"100%",height:v.OS==="android"&&e&&a>0?e/a:void 0,flex:1,aspectRatio:a,resizeMode:"cover"}})};try{d.displayName="Image",d.__docgenInfo={description:"",displayName:"Image",props:{aspectRatio:{defaultValue:{value:"wide"},description:"",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"extraWide"'},{value:'"narrow"'},{value:'"square"'},{value:'"wide"'}]}}}}}catch{}const z=""+new URL("62225.wees-jezelf.4x5.md-43be2e2a.jpg",import.meta.url).href,V={component:d},c={args:{aspectRatio:"wide",source:z}};var f,h,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    aspectRatio: 'wide',
    source
  }
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const k=["Default"];export{c as Default,k as __namedExportsOrder,V as default};
//# sourceMappingURL=Image.stories-3692bd76.js.map