import{j as v}from"./useThemable-e7da91f2.js";import{r as t}from"./index-4ab02870.js";import{S as d,P as M}from"./index-610f912e.js";import{R as p}from"./Row-fb894198.js";import{A as a,E as H}from"./Animated-79809011.js";import{I as f}from"./types-e7c584cc.js";import{u as L}from"./useDeviceContext-f2885708.js";import{u as g}from"./useTheme-e00f6261.js";const c=({children:e})=>{const l=t.useRef(new a.Value(0));return t.useEffect(()=>{const{start:r,stop:s}=a.loop(a.timing(l.current,{toValue:360,duration:1e3,easing:H.linear,useNativeDriver:!0}));return r(),s},[]),v(p,{align:"center",children:v(a.View,{accessibilityLabel:"Bezig …",accessible:!0,style:[{transform:[{rotate:l.current.interpolate({inputRange:[0,360],outputRange:["0deg","360deg"]})}]}],children:e})})};try{c.displayName="Rotator",c.__docgenInfo={description:"Indicates activity, often while performing network tasks.\nBest used through `PleaseWait` rather than by itself.",displayName:"Rotator",props:{}}}catch{}var u=(e=>(e.alert="m15.9 2.3-16 28.6h32l-16-28.6zm0 8.4 9 16.1h-18l9-16.1zm-1 5.9h2v5.1h-2v-5.1zm2 8.1v-2h-2v2h2z",e.announcement="M23 0v11.6c1.8.6 3 2.3 3 4.2s-1.2 3.6-3 4.2v11.6L12.6 26l-5.2 5.2-2.8-2.8 4.3-4.3-1.5-.8H0v-15h7.4L23 0zM4 12.3v7h4v-7H4zM19 25l-9-4.8v-8.7l9-4.8V25zM29.4 8.1l-3.1 3.1 1.4 1.4 3.1-3.1-1.4-1.4zm-1.7 11-1.4 1.4 3.1 2.9 1.4-1.4-3.1-2.9zm.3-4.3h4v2h-4v-2z",e.api="M18.593 17.812a.938.938 0 0 1 0 1.326l-2.217 2.216 2.12 2.12L16.975 25H9.126l-5 5L2 27.879l4.99-4.99V15.01l1.521-1.521 2.12 2.12 2.217-2.217a.937.937 0 1 1 1.325 1.326l-2.216 2.217 3.093 3.093 2.217-2.216a.938.938 0 0 1 1.326 0zM30 4.121 27.879 2l-4.907 4.907-.9-.9h-6l-3.1 3 10 10 3.1-3v-6l-.982-.982z",e.car="M24 20a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 20a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM19 7l7 7h6v9h-3a5 5 0 0 0-10 0h-7a5 5 0 0 0-10 0H0v-9l7-7h12zm-1 2h-5v5h9.962L18 9zm-7 0H8l-5 5h8V9z",e.card="M30.223 26.668H1.777V5.332h28.446ZM5.332 23.109h21.336V8.891H5.332Zm8.535-6.043H8.891a1.78 1.78 0 0 0-1.782 1.778v2.488h8.536v-2.488a1.78 1.78 0 0 0-1.778-1.778Zm11.024-1.957h-2.668v-2.664h-1.778v2.664h-2.668v1.782h2.668v2.664h1.778V16.89h2.668ZM8.523 13.52a2.854 2.854 0 1 0 5.709.003 2.854 2.854 0 0 0-5.709-.002",e.chatting="M23.4 7h-15V5.5h15V7zm-4 1.5h-11V10h11V8.5zm10-7v13h-9v5l-5-5h-13v-13h27zm-2 2h-23v9h23v-9zm-2.5 24h-3.7c-2.1 0-3.6.9-3.6 3.6v.9h11v-.9c0-2.7-1.6-3.6-3.7-3.6zm.9-3.7c.2-1.1-.3-2.2-1.2-2.9-.9-.6-2.2-.6-3.1 0s-1.4 1.8-1.2 2.9c.3 1.3 1.4 2.3 2.8 2.3s2.4-1 2.7-2.3zm-14.9 3.7H7.2c-2.1 0-3.6.9-3.6 3.6v.9h11v-.9c0-2.7-1.6-3.6-3.7-3.6zm.9-3.7c.2-1.1-.3-2.2-1.2-2.9s-2.2-.6-3.1 0-1.4 1.8-1.2 2.9c0 .7.3 1.4.8 1.9s1.2.8 2 .8c1.5 0 2.7-1.2 2.7-2.7z",e.checkmark="M12.1 27-.1 14.2l2.9-2.8 9.3 9.8L29 4l2.9 2.8L12.1 27z",e["chevron-down"]="m15.9 25.8-16-16 2.9-2.9L15.9 20 29 6.9l2.9 2.9-16 16z",e["chevron-left"]="m23.237 32-16-16 16-16 2.9 2.91L13.057 16l13.08 13.09-2.9 2.91Z",e["chevron-right"]="m9.6 32-2.9-2.9L19.8 16 6.7 2.9 9.6 0l16 16-16 16z",e["chevron-up"]="M29 25.8 15.9 12.7 2.8 25.8l-2.9-2.9 16-16 16 16-2.9 2.9z",e.circle="M4 16c0 6.6 5.4 12 12 12s12-5.4 12-12S22.6 4 16 4 4 9.4 4 16",e["city-office"]="M16 8c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm16 9v2h-2v13h-2v-2H4v2H2V19H0v-2h32zm-4 9v-5H4v5h24zM8 15V12.2c.1-1.7 1.5-3.1 3.2-3.2H20.5c1.8 0 3.3 1.4 3.4 3.2V15H8z",e["city-pass"]="M4.246 6C2.106 6 .367 7.79.367 10v12c0 2.21 1.738 4 3.88 4H27.52c2.144 0 3.878-1.79 3.878-4V10c0-2.21-1.734-4-3.878-4Zm11.637 16c3.215 0 5.82-2.688 5.82-6 0-3.313-2.605-6-5.82-6-3.211 0-5.817 2.688-5.817 6 0 3.313 2.606 6 5.817 6Zm0 0",e.clock="M15.9 0C7 0-.1 7.2-.1 16s7.2 16 16 16 16-7.2 16-16c0-4.2-1.7-8.3-4.7-11.3S20.1 0 15.9 0zm.9 28v-2h-2v1.9C9 27.4 4.4 22.8 4 17h1.9v-2H4C4.4 9.2 9 4.5 14.9 4.1V6h2V4.1c5.8.4 10.4 5.1 10.9 10.9h-1.9v2h1.9c-.5 5.9-5.1 10.6-11 11zm.1-13h4v2h-6V9h2v6z",e.close="M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z",e.collaborate="m26.3 18.3 5.3-5.3L19.9 1.4l-4.2 4.2-3.8-3.8L.5 13.2l5.4 5.4-1.2 1.2a2.9 2.9 0 0 0 0 4.2 2.9 2.9 0 0 0 2.1.9 3.1 3.1 0 0 0 .9 2.2 3.3 3.3 0 0 0 2.2.8 3.3 3.3 0 0 0 .8 2.2 3.1 3.1 0 0 0 2.2.9 2.7 2.7 0 0 0 2.1-.9l1.2-1.2.9.9a3.3 3.3 0 0 0 2.1.9 3.4 3.4 0 0 0 2.2-.9 3.1 3.1 0 0 0 .9-2.2 2.9 2.9 0 0 0 2.1-.9 2.7 2.7 0 0 0 .9-2.1 3.1 3.1 0 0 0 3-3 3.1 3.1 0 0 0-.9-2.2l-1.1-1.1zM19.9 4.2l8.8 8.8-3.5 3.6-.3.3-7.2-7.2-2.4 2.4a1.2 1.2 0 0 1-1.6 0 1.2 1.2 0 0 1 0-1.7l6.2-6.2zM7.6 22.6a1.1 1.1 0 0 1-1.5 0 1 1 0 0 1 0-1.4L7.3 20l1.5 1.4-1.2 1.2zm3 3a1.1 1.1 0 0 1-1.5 0 .9.9 0 0 1-.3-.7 1.1 1.1 0 0 1 .3-.7l1.2-1.2 1.5 1.5-1.2 1.1zm3 3.1a1 1 0 0 1-1.4 0 1.1 1.1 0 0 1-.3-.8 1.1 1.1 0 0 1 .3-.7l1.1-1.2 1.5 1.5-1.2 1.2zM26 22.3a1 1 0 0 1-1.4 0L21.3 19l-1.6 1.6 3.3 3.3a1 1 0 0 1 0 1.4 1.1 1.1 0 0 1-.7.3 1.1 1.1 0 0 1-.8-.3l-3.2-3.2-1.6 1.5 3.3 3.3a1.1 1.1 0 0 1 0 1.5 1.1 1.1 0 0 1-.8.3 1.1 1.1 0 0 1-.7-.3L3.3 13.2l.2-.2 8.4-8.4L14.3 7l-2 2a3.1 3.1 0 0 0 0 4.5 3.3 3.3 0 0 0 4.5 0l.9-.9 8.3 8.3a1 1 0 0 1 0 1.4z",e["construction-work"]="m31.2 26.7-2.3-2.4-1.6 1.5-3.2-3.2-4-12.8c-.2-.7-.5-1.3-1.1-1.8l-3.8-3.7-.4-.4L13 2.1l-.3-.3L7 7.9l2.4 2.4 2.2 2.2-2.7 3.9L0 31.7h4l7-12.1 4.2 4.4v7.7h3.5v-9.1L15 18.8l1.2-1.7L26 27l-1.6 1.4 2.2 2.5c.6.6 1.4.9 2.2 1 .8.1 1.7-.2 2.3-.9.6-.6 1-1.3 1-2.2 0-.7-.3-1.5-.9-2.1zM10.6 9.1l2.2-2.3 1.7 1.7-1.8 2.5-2.1-1.9zm7.7 4.8 1.3 4-2.4-2.4 1.1-1.6z M17.5,4a3.2,3.2 0 1,0 6.4,0a3.2,3.2 0 1,0 -6.4,0",e["document-text"]="m17.6 5 5.4 5.4V27H9V5h8.6m1.3-3H6v28h20V9.1L18.9 2zM11 16h10v-2H11v2zm0 4h10v-2H11v2zm0 4h10v-2H11v2z",e.edit="M24.5 1 4.2 21.3 1 31l9.7-3.2L31 7.5 24.5 1zM6.3 27.1 5 25.7 6 23l3 3.1-2.7 1z",e.email="M-.1 4.6v24h32v-24h-32zM16 16.9 5.9 8.6H26l-10 8.3zm-4.8-1.3-7.3 6.8V9.5l7.3 6.1zm1.6 1.3 3.2 2.7 3.1-2.6 8.2 7.6H4.4l8.4-7.7zm7.8-1.2 7.2-6.1v12.8l-7.2-6.7z",e.enlarge="M17.9 14V0h-4v14h-14v4h14v14h4V18h14v-4h-14z",e["external-link"]="M19.006 0H32.01v12.992h-4.002V6.826L14.434 20.417l-2.83-2.818L25.187 3.998h-6.182V0zm7.002 13.991L26.018 32H.01V6.016h17.975l-3.98 3.978.02.02H4.01v17.988h18.006l-.01-10.013 4-3.998z",e.facade="M22.6 9.5V7.8h-1.1V6.4h-1V4.9h-.9V3.5h-1.1V2.2h-1V1h-2.9v1.2h-1v1.3h-1V4.9h-1v1.5h-1v1.4h-1v1.7h-1V31h15.3V9.5h-1.3zM13.7 6h4.6v4h-4.6V6zm1.2 22.9h-4v-8h4v8zm0-9.9h-4v-7h4v7zm6.2 9.9h-4v-8h4v8zm0-9.9h-4v-7h4v7z",e.housing="M14 28h4.008v-8H14v8zm-2 0V18h8.008v10H28V12.98L16 5 4 13.516V28h8zM0 32V11.022L16 0l16 11.022V32H0z",e.info="M15.9 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 24c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm-1-15h2V9h-2v2zm0 12h2V13h-2v10z",e.location="m16.679 32-1.23-1.086c-.45-.369-10.878-9.68-10.878-18.806C4.571 5.42 9.992 0 16.68 0s12.108 5.42 12.108 12.108c0 9.126-10.428 18.438-10.879 18.806L16.68 32Zm0-28.271A8.39 8.39 0 0 0 8.3 12.108c0 5.387 5.244 11.728 8.369 14.842 2.591-2.55 8.389-9.034 8.389-14.842a8.39 8.39 0 0 0-8.379-8.38Zm0 12.476a4.097 4.097 0 1 0 0-8.195 4.097 4.097 0 0 0 0 8.195Z",e.login="M17.777 1.777v3.555h8.891v21.336h-8.89v3.555h12.445V1.777ZM16.73 7.832l-2.507 2.516 3.875 3.875H1.778v3.554h16.32l-3.875 3.875 2.507 2.516L24.906 16Zm0 0",e["organic-waste-container"]="M23.2 4.8C22.9 2.1 19.6 0 15.7 0S8.5 2.2 8.1 4.8H7V30H3.9v2h24v-2h-3.2V4.8h-1.5zM12.3 2.4h6.9v6.9h-6.9V2.4zM22.7 29H9V12.6h13.7V29z",e.person="M31 32H1v-2.5c0-7.5 4.2-10 10-10h10c5.8 0 10 2.5 10 10V32ZM16 17a7.6 7.6 0 0 0 7.5-7.5 7.5 7.5 0 0 0-15 0A7.6 7.6 0 0 0 16 17Z",e["person-desk"]="M30 16v2h-2v12h-2v-2H6v2H4V18H2v-2h28zm-4 4H6v4h20v-4zM18 8.98c2.3 0 4 1 4 4v1H10v-1c0-3 1.69-4 4-4zM16 2a2.99 2.99 0 1 1 0 5.98A2.99 2.99 0 0 1 16 2z",e.phone="M30.4 26.9s-3.1 3.4-5.6 3.6-9.2-3.2-14.7-8.7c-5.5-5.5-9-11.4-8.7-14.7S5 1.5 5 1.5l7.1 7.1-2.8 2.8 11.2 11.2 2.8-2.8 7.1 7.1z",e.pointer="M29.18 14C28.3576 8.41126 23.9687 4.02245 18.38 3.2V0H14.38V3.2C8.77561 3.99119 4.3712 8.3956 3.58 14H0.380005V18H3.58C4.3712 23.6044 8.77561 28.0088 14.38 28.8V32H18.38V28.8C23.9534 27.947 28.327 23.5734 29.18 18H32.38V14H29.18ZM16.38 25C11.4094 25 7.38 20.9706 7.38 16C7.38 11.0294 11.4094 7 16.38 7C21.3506 7 25.38 11.0294 25.38 16C25.38 18.3869 24.4318 20.6761 22.744 22.364C21.0561 24.0518 18.767 25 16.38 25ZM21.38 16C21.38 18.7614 19.1414 21 16.38 21C13.6186 21 11.38 18.7614 11.38 16C11.38 13.2386 13.6186 11 16.38 11C19.1414 11 21.38 13.2386 21.38 16Z",e["question-mark-solid"]="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-.4 24.3c-1.1 0-1.9-.8-1.9-1.9s.8-1.9 1.9-1.9 1.9.8 1.9 1.9c.1 1.1-.7 1.9-1.9 1.9zm3.3-8.7c-.9.9-1.9 1.9-1.9 2.9v.8h-2.7v-1.2c0-1.6.8-2.4 1.5-3.1.7-.7 1.5-1.2 1.5-2.4 0-.9-.7-1.3-1.7-1.3-.8 0-1.5.4-2 1.2l-2.3-2C12.4 9 13.7 8.4 16 8.4c2.8 0 4.5 1.5 4.5 3.7.2 1.5-.8 2.6-1.6 3.5z",e.search="m32 29.119-9.825-9.825a12.217 12.217 0 1 0-2.88 2.881L29.118 32 32 29.119Zm-19.771-8.745a8.145 8.145 0 1 1 0-16.29 8.145 8.145 0 0 1 0 16.29Z",e.settings="M0 18.6v-5.1H1.4c2.1-.4 3.5-2.3 3.1-4.4-.1-.6-.3-1.1-.6-1.6l-1-1 3.6-3.6V3l.9.9c1.7 1.2 4.1.8 5.3-.9.3-.4.5-.9.6-1.5V0h5.1V1.4c.4 2.1 2.3 3.5 4.4 3.1.5-.1 1-.3 1.5-.6l1-1 3.6 3.6h-.1l-.9.9c-1.1 1.5-.9 3.6.4 4.9.5.5 1.2.9 2 1.1H32v5.1H30.6c-2.1.4-3.5 2.4-3.1 4.4.1.5.3 1 .6 1.5l1 1-3.6 3.6v-.1l-.9-.9c-1.7-1.2-4.1-.8-5.3.9-.3.4-.5.9-.6 1.5V32h-5.1V30.6c-.4-2.1-2.3-3.5-4.4-3.1-.5.1-1 .3-1.5.6l-1 1-3.6-3.6h.1l.9-.9c1.2-1.7.8-4.1-.9-5.3-.4-.3-.9-.5-1.5-.6H0zM16 22c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z",e.spinner="M16.3 5c2.2 0 4.3.7 6.1 1.9 1.8 1.2 3.2 3 4 5 .8 2 1 4.2.6 6.4-.4 2.1-1.5 4.1-3.1 5.6s-3.5 2.6-5.7 3c-2.1.4-4.3.2-6.3-.7-2-.9-3.7-2.3-4.9-4.1-1.2-1.8-1.8-4-1.8-6.1",e.strides="M26.3 18.3c-.4 1.5-2.1 4.9-2.1 4.9L19 21.9s.5-2.8.1-3.8c-.4-1.1-.8-2.9-.8-4.6 0-2.4.5-3.3 1.6-5.1.6-.9 2-1.5 3.2-1.4.8 0 1.5.3 2.2.9.9.8 1.3 2 1.5 3.5.5 2.7.4 3.7-.5 6.9zm-9.2 7.9c-.3 1-.5 1.8-.3 2.9.1.6.5 1.2 1.4 1.5 1 .4 1.8.4 2 .4.8-.1 1.4-.5 1.9-1 1-1.1 1.6-5.1 1.6-5.1l-5.5-1.4c0-.1-.8 1.8-1.1 2.7zM5 12c.2 1.6 1.5 5.1 1.5 5.1l5.4-.7s-.2-2.8.3-3.8c.5-1.1 1.1-2.8 1.3-4.5.3-2.4-.1-3.3-1-5.3-.5-.9-1.8-1.7-3.1-1.8-.8 0-1.6.1-2.3.6-1 .7-1.6 1.9-1.9 3.3-.7 2.9-.7 3.8-.2 7.1zm7.4 6-5.6.8s.2 4 1 5.3c.4.6.9 1 1.7 1.2.2 0 1 .1 2-.2.9-.3 1.4-.8 1.6-1.4.3-1 .2-1.9 0-2.9l-.7-2.8z",e["trash-bin"]="M21,4h8v4h-2v24H5V8H3V4h8V0h10V4z M19,2h-6v2h6V2z M23,28H9V8h14V28z M13,12h-2v12h2V12z M15,12h2v12h-2V12z M21,12h-2v12h2V12z",e["two-persons"]="M9.1 13.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3S4.8 7 4.8 9.4c.1 2.4 2 4.3 4.3 4.3zM25.7 20.5H20c-.8 0-1.6.1-2.3.3 0-4.2-2.4-5.6-5.7-5.6H6.3C3 15.2.6 16.6.6 20.9v1.4h14.8c-.7.9-1.1 2.2-1.1 3.9v1.4h17.1v-1.4c0-4.3-2.4-5.7-5.7-5.7z M22.9 19c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3-4.3 1.9-4.3 4.3 1.9 4.3 4.3 4.3z",e.whatsapp="m0 32 2.2-8.2C.8 21.4.1 18.7.1 15.9.1 7.1 7.3 0 16 0c4.2 0 8.2 1.7 11.2 4.7s4.6 7 4.6 11.2c0 8.7-7.1 15.9-15.9 15.9-2.7 0-5.3-.7-7.6-1.9L0 32zm8.8-5.1C11 28.3 13.2 29 16 29c7.3 0 13.2-5.9 13.2-13.2 0-7.3-5.9-13.2-13.2-13.2-7.3.1-13.2 6-13.2 13.3 0 3 .9 5.2 2.3 7.5l-1.3 4.9 5-1.4zM24 19.6c-.1-.2-.4-.3-.8-.5s-2.3-1.2-2.7-1.3c-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6s-.5.3-.9.1c-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.1-.8-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.2.4-1.3 1.4-1.3 3.3 0 2 1.4 3.8 1.6 4.1.2.3 2.8 4.3 6.8 6 .9.4 1.7.7 2.3.8.9.3 1.8.3 2.5.2.8-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9z",e))(u||{});const C=3,y={spinner:{Wrapper:c,stroke:!0}},n=({color:e="default",name:l,size:r="md",testID:s})=>{const{color:i}=g(),{fontScale:m}=L(),o=f[r]*m,{Wrapper:z=t.Fragment,stroke:h,strokeWidth:V=C}=y[l]??{};return v(z,{children:v(d,{fillRule:"evenodd",height:o,testID:s,viewBox:"0 0 32 32",width:o,children:v(M,{d:u[l],fill:h?"none":i.text[e],stroke:h?i.text[e]:void 0,strokeWidth:h?V:void 0})})})};try{n.displayName="Icon",n.__docgenInfo={description:"",displayName:"Icon",props:{color:{defaultValue:{value:"default"},description:"The color of the icon to display.",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'},{value:'"link"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"warning"'}]}},name:{defaultValue:null,description:"The name of the icon to display.",name:"name",required:!0,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}},size:{defaultValue:{value:"md"},description:"The size of the icon.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"ml"'},{value:'"lg"'},{value:'"xl"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}export{n as I};
//# sourceMappingURL=Icon-acc4c785.js.map