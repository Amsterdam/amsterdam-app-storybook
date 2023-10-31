import{U as v,v as W,u as y,j as i,a as d,S as F}from"./useThemable-7e23fae8.js";import{r}from"./index-e67e0a49.js";import{I as O}from"./IconButton-4b257434.js";import{B as M}from"./Box-bc2e679d.js";import{S as U}from"./SingleSelectable-6a793866.js";import{C as V}from"./Column-fb14c007.js";import{R as x}from"./Row-06ac4eed.js";import{I as w}from"./Icon-c5702ead.js";import{P as _}from"./Paragraph-ff57c0fe.js";import{T as z}from"./Title-80e1adb4.js";import{u as H}from"./useAccessibilityFocus-e761c1dd.js";import{N as $,a as q,u as B,b as G,s as J,r as f,c as K}from"./alert-e37df188.js";import{a as Q}from"./accessibleText-50b2b39a.js";import{P as X}from"./index-8d8d2929.js";import{P as Y}from"./index-a31edbaa.js";import{L as C}from"./index-5ab8f78d.js";import{V as k}from"./index-ea25b3de.js";import"./_commonjsHelpers-de833af9.js";import"./config-55b2a55c.js";import"./Badge-4f7e4b82.js";import"./useDeviceContext-f57ee50f.js";import"./EventEmitter-2b0932c2.js";import"./invariant-ea487af3.js";import"./index-d324eba8.js";import"./index-880a3f2e.js";import"./types-e7c584cc.js";import"./layoutStyles-bc05e64d.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-884c992e.js";import"./index-9d475cdf.js";import"./Animated-1f43aa99.js";import"./extends-98964cd2.js";import"./index-546e8b88.js";import"./index-8457ee36.js";import"./useTheme-4260c7c0.js";import"./development-ac8156d8.js";import"./index-e76bff40.js";import"./index-f8ce0a05.js";import"./setFocusDelay-5f7e19ce.js";import"./index-d7b7437a.js";var s=(t=>(t.withButton="withButton",t.withoutButton="withoutButton",t))(s||{}),n=(t=>(t.information="information",t.negative="negative",t.positive="positive",t))(n||{});function Z(){const t=r.useContext($),o=r.useContext(q);if(o===void 0&&t===void 0)throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");return o??t}const tt=()=>Z(),et=t=>{const o=tt();r.useEffect(()=>o.addListener("beforeRemove",t),[t,o])},ot=()=>B();X.OS==="android"&&v.setLayoutAnimationEnabledExperimental&&v.setLayoutAnimationEnabledExperimental(!0);const A=()=>{const t=H("afterInitialFocus"),o=ot(),c=G(),l=W(J),{closeType:m,content:e,testID:T,variant:g,withIcon:P}=l,h=y(rt),j=h[g??n.information].iconName,p=y(it(g,h)),u=r.useCallback(()=>o(f()),[o]);if(et(u),r.useEffect(()=>{u()},[u]),!l.content)return null;const D=m===s.withoutButton?L=>i(Y,{accessibilityRole:"button",onPress:()=>{c||C.configureNext(C.Presets.easeInEaseOut),o(f())},...L}):r.Fragment;return i(M,{children:i(D,{children:i(k,{accessibilityRole:"alert",accessible:!0,ref:t,style:p==null?void 0:p.view,testID:T,children:d(x,{align:"between",children:[i(U,{accessibilityLabel:Q(e==null?void 0:e.title,e==null?void 0:e.text),accessibilityRole:"alert",children:d(x,{gutter:"md",children:[!!P&&i(w,{color:"link",name:j,size:"lg"}),d(V,{children:[!!(e!=null&&e.title)&&i(z,{level:"h4",text:e==null?void 0:e.title}),i(_,{children:e==null?void 0:e.text})]})]})}),m===s.withButton&&i(k,{children:i(O,{accessibilityHint:"Sluit melding",icon:i(w,{color:"link",name:"close",size:"lg"}),onPress:()=>o(f())})})]})})})})},it=(t,o)=>({size:c})=>{if(!t)return;const{backgroundColor:l,borderColor:m,borderWidth:e}=o[t];return F.create({view:{backgroundColor:l,borderWidth:e,borderColor:m,paddingHorizontal:c.spacing.lg,paddingVertical:c.spacing.md}})},rt=({color:t})=>({[n.information]:{backgroundColor:t.box.background.alert,borderColor:t.box.background.alert,borderWidth:2,iconName:"alert"},[n.negative]:{backgroundColor:t.box.background.white,borderColor:t.severity.negative,borderWidth:2,iconName:"alert"},[n.positive]:{backgroundColor:t.box.background.white,borderColor:t.severity.positive,borderWidth:2,iconName:"checkmark"}}),R="Title",b="U kunt een dagontheffing of jaarontheffing aanvragen",E={withTitle:{title:R,text:b},withoutTitle:{title:"",text:b}},qt={component:A,argTypes:{closeType:{options:s,control:{type:"radio"}},content:{control:{type:"radio"},options:[...Object.keys(E)],mapping:E},isVisible:{table:{disable:!0}},variant:{options:n,control:{type:"radio"}}}},nt=({...t})=>{const o=B();return r.useEffect(()=>{o(K({...t}))}),i(A,{})},a=nt.bind({});a.args={closeType:s.withoutButton,content:{title:R,text:b},variant:n.information,withIcon:!1};var S,I,N;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`({
  ...alertState
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAlert({
      ...alertState
    }));
  });
  return <Alert />;
}`,...(N=(I=a.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const Gt=["Default"];export{a as Default,Gt as __namedExportsOrder,qt as default};
//# sourceMappingURL=Alert.stories-7a213034.js.map