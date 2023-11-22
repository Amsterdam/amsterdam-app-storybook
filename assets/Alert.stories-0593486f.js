import{U as v,u as W,d as y,j as i,a as d,S as O}from"./useThemable-badc2311.js";import{r}from"./index-4ab02870.js";import{I as F}from"./IconButton-a3787727.js";import{B as M}from"./Box-11a8c6f2.js";import{S as U}from"./SingleSelectable-14a60c64.js";import{C as V}from"./Column-4ddd937e.js";import{R as x}from"./Row-0adb9166.js";import{I as w}from"./Icon-54c2f1c2.js";import{P as _}from"./Paragraph-5fb95601.js";import{T as z}from"./Title-84bd1630.js";import{u as H}from"./useAccessibilityFocus-3218e1b1.js";import{N as $,a as q,u as G,s as J,r as f,b as K}from"./alert-53ecf1ab.js";import{u as Q,a as X}from"./useDispatch-097ffed3.js";import{D as Y}from"./duration-9bede4c8.js";import{a as Z}from"./accessibleText-50b2b39a.js";import{P as tt}from"./invariant-ee4e8dd1.js";import{P as et}from"./index-4fdbf81e.js";import{L as C}from"./index-ec353eb5.js";import{V as N}from"./index-8c71fb4d.js";import"./_commonjsHelpers-de833af9.js";import"./config-55b2a55c.js";import"./Badge-d314d1d5.js";import"./useDeviceContext-c9e474d6.js";import"./index-3ef41323.js";import"./index-c19a59a9.js";import"./index-5683e99e.js";import"./index-9d1af517.js";import"./types-e7c584cc.js";import"./layoutStyles-7b13d22c.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-7c90a212.js";import"./index-9d475cdf.js";import"./Animated-6d54a273.js";import"./extends-98964cd2.js";import"./index-e7d43bd0.js";import"./useTheme-17a8a918.js";import"./useIsScreenReaderEnabled-a5d05830.js";import"./useSentry-152b1f7d.js";import"./sentry-3d932f71.js";import"./development-5fd8a389.js";import"./index-4ffb28e8.js";import"./index-19f2d8d7.js";import"./index-7e8d53f4.js";var l=(t=>(t.withButton="withButton",t.withoutButton="withoutButton",t))(l||{}),n=(t=>(t.information="information",t.negative="negative",t.positive="positive",t))(n||{});function ot(){const t=r.useContext($),o=r.useContext(q);if(o===void 0&&t===void 0)throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");return o??t}const it=()=>ot(),rt=t=>{const o=it();r.useEffect(()=>o.addListener("blur",t),[t,o])};tt.OS==="android"&&v.setLayoutAnimationEnabledExperimental&&v.setLayoutAnimationEnabledExperimental(!0);const B=()=>{const t=H(Y.long),o=Q(),m=G(),s=r.useRef(null),a=W(J),{closeType:u,content:e,testID:A,variant:b,withIcon:T}=a,h=y(at),P=h[b??n.information].iconName,p=y(nt(b,h)),R=r.useCallback(()=>o(f()),[o]);if(rt(R),r.useEffect(()=>{s.current&&a.content&&t(s.current)},[a.content,t]),!a.content)return null;const D=u===l.withoutButton?j=>i(et,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",onPress:()=>{m||C.configureNext(C.Presets.easeInEaseOut),o(f())},...j}):r.Fragment;return i(M,{children:i(D,{children:i(N,{accessibilityLanguage:"nl-NL",accessibilityRole:"alert",accessible:!0,ref:s,style:p==null?void 0:p.view,testID:A,children:d(x,{align:"between",children:[i(U,{accessibilityLabel:Z(e==null?void 0:e.title,e==null?void 0:e.text),accessibilityLanguage:"nl-NL",accessibilityRole:"alert",children:d(x,{gutter:"md",children:[!!T&&i(w,{color:"link",name:P,size:"lg"}),d(V,{children:[!!(e!=null&&e.title)&&i(z,{level:"h4",text:e==null?void 0:e.title}),i(_,{children:e==null?void 0:e.text})]})]})}),u===l.withButton&&i(N,{children:i(F,{accessibilityHint:"Sluit melding",accessibilityLanguage:"nl-NL",icon:i(w,{color:"link",name:"close",size:"lg"}),onPress:()=>o(f())})})]})})})})},nt=(t,o)=>({size:m})=>{if(!t)return;const{backgroundColor:s,borderColor:a,borderWidth:u}=o[t];return O.create({view:{backgroundColor:s,borderWidth:u,borderColor:a,paddingHorizontal:m.spacing.lg,paddingVertical:m.spacing.md}})},at=({color:t})=>({[n.information]:{backgroundColor:t.box.background.alert,borderColor:t.box.background.alert,borderWidth:2,iconName:"alert"},[n.negative]:{backgroundColor:t.box.background.white,borderColor:t.severity.negative,borderWidth:2,iconName:"alert"},[n.positive]:{backgroundColor:t.box.background.white,borderColor:t.severity.positive,borderWidth:2,iconName:"checkmark"}}),I="Title",g="U kunt een dagontheffing of jaarontheffing aanvragen",E={withTitle:{title:I,text:g},withoutTitle:{title:"",text:g}},Xt={component:B,argTypes:{closeType:{options:l,control:{type:"radio"}},content:{control:{type:"radio"},options:[...Object.keys(E)],mapping:E},isVisible:{table:{disable:!0}},variant:{options:n,control:{type:"radio"}}}},st=({...t})=>{const o=X();return r.useEffect(()=>{o(K({...t}))}),i(B,{})},c=st.bind({});c.args={closeType:l.withoutButton,content:{title:I,text:g},variant:n.information,withIcon:!1};var k,L,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`({
  ...alertState
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAlert({
      ...alertState
    }));
  });
  return <Alert />;
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Yt=["Default"];export{c as Default,Yt as __namedExportsOrder,Xt as default};
//# sourceMappingURL=Alert.stories-0593486f.js.map
