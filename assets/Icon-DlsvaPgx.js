import{j as a}from"./jsx-runtime-BlAj40OV.js";import{r as H}from"./index-Cs7sjTYM.js";import{S as u,P as p}from"./index-CC-zlO6h.js";import{R as m}from"./Row-CkEY6lbu.js";import{A as t,E as Z}from"./Animated-DEQ-X0nE.js";import{I as z}from"./types-BJ_48vsK.js";import{u as d}from"./useDeviceContext-BXdagwJr.js";import{u as g}from"./useTheme-2vSwFSpt.js";import{V as f}from"./index-DNzWYFc8.js";const o=({children:e})=>{const C=H.useRef(new t.Value(0));return H.useEffect(()=>{const{start:h,stop:l}=t.loop(t.timing(C.current,{toValue:360,duration:1e3,easing:Z.linear,useNativeDriver:!0}));return h(),l},[]),a.jsx(m,{align:"center",children:a.jsx(t.View,{accessibilityLabel:"Bezig …",accessible:!0,style:{transform:[{rotate:C.current.interpolate({inputRange:[0,360],outputRange:["0deg","360deg"]})}]},children:e})})};try{o.displayName="Rotator",o.__docgenInfo={description:"Indicates activity, often while performing network tasks.\nBest used through `PleaseWait` rather than by itself.",displayName:"Rotator",props:{}}}catch{}const k={accessCode:{path:"M2 8H4V4H20V8H22V2H2V8Z M5 10H1V14H5V10Z M11 10H7V14H11V10Z M13 10H17V14H13V10Z M23 10H19V14H23V10Z M2 22V16H4V20H20V16H22V22H2Z",viewBox:"0 0 24 24"},add:{path:"M9.5 17.75C14.0563 17.75 17.75 14.0563 17.75 9.5C17.75 4.94365 14.0563 1.25 9.5 1.25C4.94365 1.25 1.25 4.94365 1.25 9.5C1.25 14.0563 4.94365 17.75 9.5 17.75ZM8.75 8.75V5H10.25V8.75L14 8.75V10.25H10.25V14H8.75V10.25H5V8.75H8.75Z",viewBox:"0 0 19 19"},alarm:{path:"M22.5 52.5H0L0 45H1.875C6.01714 45 9.375 41.6421 9.375 37.5V18.75C9.375 10.4657 16.0907 3.75 24.375 3.75H26.25C26.25 1.67893 27.9289 0 30 0C32.0711 0 33.75 1.67893 33.75 3.75H35.625C43.9093 3.75 50.625 10.4657 50.625 18.75V37.5C50.625 41.6421 53.9829 45 58.125 45H60V52.5H37.5C37.5 56.6421 34.1421 60 30 60C25.8579 60 22.5 56.6421 22.5 52.5ZM26.25 52.5C26.25 54.5711 27.9289 56.25 30 56.25C32.0711 56.25 33.75 54.5711 33.75 52.5H26.25ZM16.875 18.75V37.5C16.875 40.2322 16.1445 42.7937 14.8683 45H45.1317C43.8555 42.7937 43.125 40.2322 43.125 37.5V18.75C43.125 14.6079 39.7671 11.25 35.625 11.25H24.375C20.2329 11.25 16.875 14.6079 16.875 18.75Z",viewBox:"0 0 60 60"},alarmFilled:{path:"M15 23a3 3 0 0 1-6 0h6ZM0 21h24v-3h-.75a3 3 0 0 1-3-3v-7.5a6 6 0 0 0-6-6h-.75a1.5 1.5 0 0 0-3 0h-.75a6 6 0 0 0-6 6V15a3 3 0 0 1-3 3H0v3Z",viewBox:"0 0 26 26"},alert:{path:"m15.9 2.3-16 28.6h32l-16-28.6zm0 8.4 9 16.1h-18l9-16.1zm-1 5.9h2v5.1h-2v-5.1zm2 8.1v-2h-2v2h2z"},announcement:{path:"M23 0v11.6c1.8.6 3 2.3 3 4.2s-1.2 3.6-3 4.2v11.6L12.6 26l-5.2 5.2-2.8-2.8 4.3-4.3-1.5-.8H0v-15h7.4L23 0zM4 12.3v7h4v-7H4zM19 25l-9-4.8v-8.7l9-4.8V25zM29.4 8.1l-3.1 3.1 1.4 1.4 3.1-3.1-1.4-1.4zm-1.7 11-1.4 1.4 3.1 2.9 1.4-1.4-3.1-2.9zm.3-4.3h4v2h-4v-2z"},api:{path:"M18.593 17.812a.938.938 0 0 1 0 1.326l-2.217 2.216 2.12 2.12L16.975 25H9.126l-5 5L2 27.879l4.99-4.99V15.01l1.521-1.521 2.12 2.12 2.217-2.217a.937.937 0 1 1 1.325 1.326l-2.216 2.217 3.093 3.093 2.217-2.216a.938.938 0 0 1 1.326 0zM30 4.121 27.879 2l-4.907 4.907-.9-.9h-6l-3.1 3 10 10 3.1-3v-6l-.982-.982z"},asterisk:{path:"M9.01453 0.564453C10.1815 0.564453 11.4263 0.875651 12.2821 1.22575L10.0648 7.60535L15.3163 3.59865C15.8998 4.22105 16.5611 5.34915 16.9501 6.36055C17.3002 7.41085 17.4169 8.65565 17.3002 9.55035L10.6872 9.51145L16.1721 13.3626C15.7053 14.2184 14.8495 15.1131 13.9159 15.7744C12.9823 16.4746 11.8153 16.9025 10.8428 17.097L9.01453 10.7174L7.18623 17.097C6.29153 16.9025 5.12453 16.4746 4.11313 15.7744C3.17953 15.1131 2.36263 14.2184 1.89583 13.3626L7.34183 9.51145L0.806629 9.55035C0.612129 8.65565 0.728829 7.41085 1.11783 6.36055C1.46793 5.34915 2.16813 4.22105 2.71273 3.59865L8.00313 7.60535L5.74693 1.22575C6.60273 0.875651 7.84753 0.564453 9.01453 0.564453Z",viewBox:"0 0 18 18"},attachment:{path:"M19.9997 7.99967C19.9997 4.31778 17.0149 1.33301 13.333 1.33301C9.65111 1.33301 6.66634 4.31778 6.66634 7.99967V14.6663V17.333V21.333C6.66634 26.4877 10.845 30.6663 15.9997 30.6663C21.1543 30.6663 25.333 26.4877 25.333 21.333V10.6663H22.6663V21.333C22.6663 25.0149 19.6816 27.9997 15.9997 27.9997C12.3178 27.9997 9.33301 25.0149 9.33301 21.333V17.333V14.6663V7.99967C9.33301 5.79054 11.1239 3.99967 13.333 3.99967C15.5421 3.99967 17.333 5.79054 17.333 7.99967V17.333V21.333C17.333 22.0694 16.7361 22.6663 15.9997 22.6663C15.2633 22.6663 14.6663 22.0694 14.6663 21.333V10.6663H11.9997V21.333C11.9997 23.5421 13.7905 25.333 15.9997 25.333C18.2088 25.333 19.9997 23.5421 19.9997 21.333V17.333V7.99967Z"},biometrics:{path:"M2 2V10H4V4L10 4V2H2Z M30 2H22V4L28 4V10H30V2Z M4 22H2V30H10V28H4V22Z M30 22H28V28H22V30H30V22Z M15.939 15.5833C18.1251 15.5833 19.8973 13.8111 19.8973 11.625C19.8973 9.43887 18.1251 7.66667 15.939 7.66667C13.7528 7.66667 11.9806 9.43887 11.9806 11.625C11.9806 13.8111 13.7528 15.5833 15.939 15.5833Z M8.65029 18.066C8.59759 18.1934 8.56538 18.3354 8.54489 18.47L7.66667 24.3333H24.2115L23.3333 18.47C23.1942 17.5434 22.3759 16.8333 21.4389 16.8333H10.4393C9.65457 16.8333 8.92991 17.3311 8.65029 18.066Z"},chat:{path:"M23.5 12.5H6.5V10.5H23.5V12.5ZM19.5 14.5H6.5V16.5H19.5V14.5ZM31.5 5V22H20.5V27L15.5 22H0.5V5H31.5ZM29.5 7H2.5V20H29.5V7Z"},"circle-check-mark":{path:"m7.07 9.88 2.64 2.89 5.91-6.08 1.43 1.4-7.38 7.6-4.07-4.46 1.47-1.35ZM0 11C0 4.92 4.92 0 11 0s11 4.92 11 11-4.92 11-11 11S0 17.08 0 11Zm2 0c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9-9 4.04-9 9Z",viewBox:"0 0 22 22"},backspace:{path:"M3.30599 16L10.866 7H29V25H10.866L3.30599 16Z M23.7279 11.7423L15.2426 20.2275 M15.2426 11.7431L23.7278 20.2284"},camera:{path:"M30 6.25V3.75H10V6.25H0V37.5H40V6.25H30ZM35 32.5H5V11.25H35V32.5ZM20 30C24.4873 30 28.125 26.3623 28.125 21.875C28.125 17.3877 24.4873 13.75 20 13.75C15.5127 13.75 11.875 17.3877 11.875 21.875C11.875 26.3623 15.5127 30 20 30ZM20 16.25C23.1066 16.25 25.625 18.7684 25.625 21.875C25.625 24.9816 23.1066 27.5 20 27.5C16.8934 27.5 14.375 24.9816 14.375 21.875C14.375 18.7684 16.8934 16.25 20 16.25ZM32.5 16.25H30V13.75H32.5V16.25Z",viewBox:"0 0 40 40"},car:{path:"M24 20a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 20a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM19 7l7 7h6v9h-3a5 5 0 0 0-10 0h-7a5 5 0 0 0-10 0H0v-9l7-7h12zm-1 2h-5v5h9.962L18 9zm-7 0H8l-5 5h8V9z"},card:{path:"M30.223 26.668H1.777V5.332h28.446ZM5.332 23.109h21.336V8.891H5.332Zm8.535-6.043H8.891a1.78 1.78 0 0 0-1.782 1.778v2.488h8.536v-2.488a1.78 1.78 0 0 0-1.778-1.778Zm11.024-1.957h-2.668v-2.664h-1.778v2.664h-2.668v1.782h2.668v2.664h1.778V16.89h2.668ZM8.523 13.52a2.854 2.854 0 1 0 5.709.003 2.854 2.854 0 0 0-5.709-.002"},chatting:{path:"M23.4 7h-15V5.5h15V7zm-4 1.5h-11V10h11V8.5zm10-7v13h-9v5l-5-5h-13v-13h27zm-2 2h-23v9h23v-9zm-2.5 24h-3.7c-2.1 0-3.6.9-3.6 3.6v.9h11v-.9c0-2.7-1.6-3.6-3.7-3.6zm.9-3.7c.2-1.1-.3-2.2-1.2-2.9-.9-.6-2.2-.6-3.1 0s-1.4 1.8-1.2 2.9c.3 1.3 1.4 2.3 2.8 2.3s2.4-1 2.7-2.3zm-14.9 3.7H7.2c-2.1 0-3.6.9-3.6 3.6v.9h11v-.9c0-2.7-1.6-3.6-3.7-3.6zm.9-3.7c.2-1.1-.3-2.2-1.2-2.9s-2.2-.6-3.1 0-1.4 1.8-1.2 2.9c0 .7.3 1.4.8 1.9s1.2.8 2 .8c1.5 0 2.7-1.2 2.7-2.7z"},"check-mark":{path:"M12.1 27-.1 14.2l2.9-2.8 9.3 9.8L29 4l2.9 2.8L12.1 27z"},"chevron-down":{path:"m15.9 25.8-16-16 2.9-2.9L15.9 20 29 6.9l2.9 2.9-16 16z"},"chevron-left":{path:"m23.237 32-16-16 16-16 2.9 2.91L13.057 16l13.08 13.09-2.9 2.91Z"},"chevron-right":{path:"m9.6 32-2.9-2.9L19.8 16 6.7 2.9 9.6 0l16 16-16 16z"},"chevron-up":{path:"M29 25.8 15.9 12.7 2.8 25.8l-2.9-2.9 16-16 16 16-2.9 2.9z"},child:{path:"M20.7777 8.07237C20.3489 4.64873 17.4277 2 13.8879 2C10.0529 2 6.94394 5.10891 6.94394 8.94394C6.99381 12.7581 10.0737 15.838 13.8879 15.8879C14.3533 15.8818 14.8078 15.8306 15.2472 15.7384C15.2039 15.4404 15.1796 15.1362 15.1756 14.8271L15.1754 14.815V14.8029C15.1754 11.4474 17.5907 8.65594 20.7777 8.07237ZM10.1844 29.7758H0V27.4611C0 20.5172 3.88861 18.2025 9.25859 18.2025H16.1059C16.4217 18.7463 16.8097 19.243 17.2566 19.6796C15.5916 19.8588 13.9819 20.3883 12.6926 21.5233C10.9893 23.0226 10.1844 25.2734 10.1844 28.1121V29.7758ZM32.0003 29.7758H12.0365V28.1122C12.0365 23.1212 14.8314 21.4576 18.6911 21.4576H25.3457C29.2054 21.4576 32.0003 23.1212 32.0003 28.1122V29.7758ZM22.0184 19.7939C24.7598 19.7581 26.9735 17.5444 27.0093 14.803C27.0093 12.0465 24.7748 9.81201 22.0184 9.81201C19.2619 9.81201 17.0274 12.0465 17.0274 14.803C17.0633 17.5444 19.2769 19.7581 22.0184 19.7939Z"},circle:{path:"M4 16c0 6.6 5.4 12 12 12s12-5.4 12-12S22.6 4 16 4 4 9.4 4 16"},"city-office":{path:"M16 8c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm16 9v2h-2v13h-2v-2H4v2H2V19H0v-2h32zm-4 9v-5H4v5h24zM8 15V12.2c.1-1.7 1.5-3.1 3.2-3.2H20.5c1.8 0 3.3 1.4 3.4 3.2V15H8z"},"city-pass-pass":{path:"M2.5 4C1.67157 4 1 4.67157 1 5.5V18.5C1 19.3284 1.67157 20 2.5 20H21.5C22.3284 20 23 19.3284 23 18.5V5.5C23 4.67157 22.3284 4 21.5 4H2.5ZM17 8H8.81819V10.8701H12.0911L8 14.9705L10.0249 17L14.1363 12.8793V16.2005H17L17 8Z",viewBox:"0 0 24 24"},"city-pass":{path:"M5.44005 0.461548H26.6331L26.6331 21.7238H18.4154V15.96L6.87457 27.5385L0.0769043 20.7186L12.0504 8.70608H5.44005V0.461548Z"},close:{path:"M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z"},collaborate:{path:"m26.3 18.3 5.3-5.3L19.9 1.4l-4.2 4.2-3.8-3.8L.5 13.2l5.4 5.4-1.2 1.2a2.9 2.9 0 0 0 0 4.2 2.9 2.9 0 0 0 2.1.9 3.1 3.1 0 0 0 .9 2.2 3.3 3.3 0 0 0 2.2.8 3.3 3.3 0 0 0 .8 2.2 3.1 3.1 0 0 0 2.2.9 2.7 2.7 0 0 0 2.1-.9l1.2-1.2.9.9a3.3 3.3 0 0 0 2.1.9 3.4 3.4 0 0 0 2.2-.9 3.1 3.1 0 0 0 .9-2.2 2.9 2.9 0 0 0 2.1-.9 2.7 2.7 0 0 0 .9-2.1 3.1 3.1 0 0 0 3-3 3.1 3.1 0 0 0-.9-2.2l-1.1-1.1zM19.9 4.2l8.8 8.8-3.5 3.6-.3.3-7.2-7.2-2.4 2.4a1.2 1.2 0 0 1-1.6 0 1.2 1.2 0 0 1 0-1.7l6.2-6.2zM7.6 22.6a1.1 1.1 0 0 1-1.5 0 1 1 0 0 1 0-1.4L7.3 20l1.5 1.4-1.2 1.2zm3 3a1.1 1.1 0 0 1-1.5 0 .9.9 0 0 1-.3-.7 1.1 1.1 0 0 1 .3-.7l1.2-1.2 1.5 1.5-1.2 1.1zm3 3.1a1 1 0 0 1-1.4 0 1.1 1.1 0 0 1-.3-.8 1.1 1.1 0 0 1 .3-.7l1.1-1.2 1.5 1.5-1.2 1.2zM26 22.3a1 1 0 0 1-1.4 0L21.3 19l-1.6 1.6 3.3 3.3a1 1 0 0 1 0 1.4 1.1 1.1 0 0 1-.7.3 1.1 1.1 0 0 1-.8-.3l-3.2-3.2-1.6 1.5 3.3 3.3a1.1 1.1 0 0 1 0 1.5 1.1 1.1 0 0 1-.8.3 1.1 1.1 0 0 1-.7-.3L3.3 13.2l.2-.2 8.4-8.4L14.3 7l-2 2a3.1 3.1 0 0 0 0 4.5 3.3 3.3 0 0 0 4.5 0l.9-.9 8.3 8.3a1 1 0 0 1 0 1.4z"},"construction-work":{path:"m31.2 26.7-2.3-2.4-1.6 1.5-3.2-3.2-4-12.8c-.2-.7-.5-1.3-1.1-1.8l-3.8-3.7-.4-.4L13 2.1l-.3-.3L7 7.9l2.4 2.4 2.2 2.2-2.7 3.9L0 31.7h4l7-12.1 4.2 4.4v7.7h3.5v-9.1L15 18.8l1.2-1.7L26 27l-1.6 1.4 2.2 2.5c.6.6 1.4.9 2.2 1 .8.1 1.7-.2 2.3-.9.6-.6 1-1.3 1-2.2 0-.7-.3-1.5-.9-2.1zM10.6 9.1l2.2-2.3 1.7 1.7-1.8 2.5-2.1-1.9zm7.7 4.8 1.3 4-2.4-2.4 1.1-1.6z M17.5,4a3.2,3.2 0 1,0 6.4,0a3.2,3.2 0 1,0 -6.4,0"},copy:{path:"M14 2H6V4H12V12H14V2ZM4 0V4H3.5H0V18H12V14H16V0H4ZM3.5 6H2V16H10V6H4.5H3.5Z",viewBox:"0 0 16 18"},document:{path:"M25.5014 0H5.71387V40H35.7139V10.2125L25.5014 0ZM10.7139 35V5H23.2139V12.5H30.7139V35H10.7139Z",viewBox:"0 0 40 40"},documentCheckmark:{path:"M12.3331 3.75H23V23H7.1875V13.375C3.77024 13.375 1 10.6048 1 7.1875C1 3.77024 3.77024 1 7.1875 1C9.33279 1 11.2231 2.09177 12.3331 3.75ZM9.9375 12.7318V20.25H20.25V6.5H13.3372C13.3622 6.72573 13.375 6.95512 13.375 7.1875C13.375 7.66008 13.322 8.12028 13.2217 8.5625H18.875V9.9375H12.7318C12.4831 10.4381 12.1685 10.9002 11.7995 11.3125H18.875V12.6875H11.3125V11.7995C10.9002 12.1685 10.4381 12.4831 9.9375 12.7318ZM11.3125 14.0625H18.875V15.4375H11.3125V14.0625ZM11.3125 16.8125H18.875V18.1875H11.3125V16.8125ZM7.1875 12C9.84537 12 12 9.84537 12 7.1875C12 4.52963 9.84537 2.375 7.1875 2.375C4.52963 2.375 2.375 4.52963 2.375 7.1875C2.375 9.84537 4.52963 12 7.1875 12ZM5.58562 6.36023L7.04403 7.81864L9.47688 5.38579L10.4491 6.35806L7.04403 9.76318L4.61335 7.3325L5.58562 6.36023Z",viewBox:"0 0 24 24"},"document-text":{path:"m17.6 5 5.4 5.4V27H9V5h8.6m1.3-3H6v28h20V9.1L18.9 2zM11 16h10v-2H11v2zm0 4h10v-2H11v2zm0 4h10v-2H11v2z"},download:{path:"M12.125 11.4858L14.85 8.75821L16.6187 10.5224L10.875 16.2778L5.13125 10.5224L6.9 8.75821L9.625 11.4858V0H12.125V11.4858ZM20.875 20V17.4977H0.875V20H20.875Z",viewBox:"0 0 20 20"},edit:{path:"M24.5 1 4.2 21.3 1 31l9.7-3.2L31 7.5 24.5 1zM6.3 27.1 5 25.7 6 23l3 3.1-2.7 1z"},email:{path:"M-.1 4.6v24h32v-24h-32zM16 16.9 5.9 8.6H26l-10 8.3zm-4.8-1.3-7.3 6.8V9.5l7.3 6.1zm1.6 1.3 3.2 2.7 3.1-2.6 8.2 7.6H4.4l8.4-7.7zm7.8-1.2 7.2-6.1v12.8l-7.2-6.7z"},enlarge:{path:"M17.9 14V0h-4v14h-14v4h14v14h4V18h14v-4h-14z"},error:{path:"M16.1399 6.91003L17.5099 8.36003L13.5099 12.14L17.5099 15.91L16.1399 17.36L12.0599 13.51L7.97986 17.36L6.60986 15.91L10.5999 12.14L6.60986 8.36003L7.97986 6.91003L12.0599 10.76L16.1399 6.91003ZM1 12C1 5.92 5.92 1 12 1C18.08 1 23 5.92 23 12C23 18.08 18.08 23 12 23C5.92 23 1 18.08 1 12ZM21 12C21 7.04 16.96 3 12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12Z",viewBox:"0 0 24 24"},"external-link":{path:"M19.006 0H32.01v12.992h-4.002V6.826L14.434 20.417l-2.83-2.818L25.187 3.998h-6.182V0zm7.002 13.991L26.018 32H.01V6.016h17.975l-3.98 3.978.02.02H4.01v17.988h18.006l-.01-10.013 4-3.998z"},eye:{path:"M16 5C8.72727 5 2.51636 9.53853 0 15.945C2.51636 22.3515 8.72727 26.89 16 26.89C23.2727 26.89 29.4836 22.3515 32 15.945C29.4836 9.53853 23.2727 5 16 5ZM16 23.2417C11.9855 23.2417 8.72727 19.9728 8.72727 15.945C8.72727 11.9172 11.9855 8.64833 16 8.64833C20.0145 8.64833 23.2727 11.9172 23.2727 15.945C23.2727 19.9728 20.0145 23.2417 16 23.2417ZM16 11.567C13.5855 11.567 11.6364 13.5225 11.6364 15.945C11.6364 18.3675 13.5855 20.323 16 20.323C18.4145 20.323 20.3636 18.3675 20.3636 15.945C20.3636 13.5225 18.4145 11.567 16 11.567Z"},facade:{path:"M22.6 9.5V7.8h-1.1V6.4h-1V4.9h-.9V3.5h-1.1V2.2h-1V1h-2.9v1.2h-1v1.3h-1V4.9h-1v1.5h-1v1.4h-1v1.7h-1V31h15.3V9.5h-1.3zM13.7 6h4.6v4h-4.6V6zm1.2 22.9h-4v-8h4v8zm0-9.9h-4v-7h4v7zm6.2 9.9h-4v-8h4v8zm0-9.9h-4v-7h4v7z"},faceId:{path:"M2.31445 21.6865C0.884766 21.6865 0.169922 20.9482 0.169922 19.4717V10.4365C0.169922 7.03809 1.03711 4.4834 2.77148 2.77246C4.50586 1.06152 7.08398 0.206055 10.5059 0.206055H19.541C21.0176 0.206055 21.7559 0.920898 21.7559 2.35059C21.7559 3.80371 21.0176 4.53027 19.541 4.53027H10.6113C8.61914 4.53027 7.0957 5.0459 6.04102 6.07715C5.00977 7.1084 4.49414 8.64355 4.49414 10.6826V19.4717C4.49414 20.9482 3.76758 21.6865 2.31445 21.6865ZM65.2441 21.6865C63.8145 21.6865 63.0996 20.9482 63.0996 19.4717V10.6826C63.0996 8.64355 62.5605 7.1084 61.4824 6.07715C60.4043 5.0459 58.8926 4.53027 56.9473 4.53027H48.0527C46.5762 4.53027 45.8379 3.80371 45.8379 2.35059C45.8379 0.920898 46.5762 0.206055 48.0527 0.206055H57.0527C60.498 0.206055 63.0879 1.07324 64.8223 2.80762C66.5566 4.51855 67.4238 7.06152 67.4238 10.4365V19.4717C67.4238 20.9482 66.6973 21.6865 65.2441 21.6865ZM10.5059 67.4248C7.08398 67.4248 4.50586 66.5576 2.77148 64.8232C1.03711 63.1123 0.169922 60.5576 0.169922 57.1592V48.1592C0.169922 46.6826 0.884766 45.9443 2.31445 45.9443C3.76758 45.9443 4.49414 46.6826 4.49414 48.1592V56.9482C4.49414 58.9873 5.00977 60.5225 6.04102 61.5537C7.0957 62.585 8.61914 63.1006 10.6113 63.1006H19.541C21.0176 63.1006 21.7559 63.8271 21.7559 65.2803C21.7559 66.71 21.0176 67.4248 19.541 67.4248H10.5059ZM48.0527 67.4248C46.5762 67.4248 45.8379 66.71 45.8379 65.2803C45.8379 63.8271 46.5762 63.1006 48.0527 63.1006H56.9473C58.8926 63.1006 60.4043 62.585 61.4824 61.5537C62.5605 60.5225 63.0996 58.9873 63.0996 56.9482V48.1592C63.0996 46.6826 63.8145 45.9443 65.2441 45.9443C66.6973 45.9443 67.4238 46.6826 67.4238 48.1592V57.1592C67.4238 60.5576 66.5566 63.1123 64.8223 64.8232C63.0879 66.5576 60.498 67.4248 57.0527 67.4248H48.0527ZM20.7363 31.0029C20.0566 31.0029 19.4941 30.792 19.0488 30.3701C18.627 29.9482 18.416 29.374 18.416 28.6475V23.9014C18.416 23.1982 18.627 22.6357 19.0488 22.2139C19.4941 21.7686 20.0566 21.5459 20.7363 21.5459C21.416 21.5459 21.9785 21.7686 22.4238 22.2139C22.8691 22.6357 23.0918 23.1982 23.0918 23.9014V28.6475C23.0918 29.374 22.8691 29.9482 22.4238 30.3701C21.9785 30.792 21.416 31.0029 20.7363 31.0029ZM30.9316 39.2295C30.2051 39.2295 29.6426 39.0654 29.2441 38.7373C28.8457 38.3857 28.6465 37.917 28.6465 37.3311C28.6465 36.8154 28.8105 36.3936 29.1387 36.0654C29.4902 35.7139 29.9238 35.5381 30.4395 35.5381H31.6348C31.8926 35.5381 32.1152 35.4561 32.3027 35.292C32.5137 35.1279 32.6191 34.8818 32.6191 34.5537V23.3037C32.6191 22.7412 32.7832 22.3076 33.1113 22.0029C33.4395 21.6748 33.873 21.5107 34.4121 21.5107C34.9746 21.5107 35.4199 21.6748 35.748 22.0029C36.0762 22.3076 36.2402 22.7412 36.2402 23.3037V34.2373C36.2402 35.8779 35.8184 37.1201 34.9746 37.9639C34.1309 38.8076 32.8887 39.2295 31.248 39.2295C31.2012 39.2295 31.1426 39.2295 31.0723 39.2295C31.0254 39.2295 30.9785 39.2295 30.9316 39.2295ZM46.6465 31.0029C45.9434 31.0029 45.3809 30.792 44.959 30.3701C44.5371 29.9482 44.3262 29.374 44.3262 28.6475V23.9014C44.3262 23.1982 44.5371 22.6357 44.959 22.2139C45.3809 21.7686 45.9434 21.5459 46.6465 21.5459C47.3262 21.5459 47.877 21.7686 48.2988 22.2139C48.7441 22.6357 48.9668 23.1982 48.9668 23.9014V28.6475C48.9668 29.374 48.7441 29.9482 48.2988 30.3701C47.877 30.792 47.3262 31.0029 46.6465 31.0029ZM33.5332 50.585C31.4941 50.585 29.4785 50.1865 27.4863 49.3896C25.4941 48.5693 23.8066 47.3857 22.4238 45.8389C22.2363 45.6514 22.084 45.4521 21.9668 45.2412C21.873 45.0068 21.8262 44.7607 21.8262 44.5029C21.8262 43.9639 22.002 43.5303 22.3535 43.2021C22.7051 42.874 23.1387 42.71 23.6543 42.71C23.9824 42.71 24.252 42.7803 24.4629 42.9209C24.6973 43.0615 24.9434 43.249 25.2012 43.4834C26.2324 44.5381 27.498 45.3818 28.998 46.0146C30.498 46.6475 32.0098 46.9639 33.5332 46.9639C35.1504 46.9639 36.6973 46.6475 38.1738 46.0146C39.6738 45.3584 40.9277 44.5146 41.9355 43.4834C42.4277 42.9678 42.9316 42.71 43.4473 42.71C43.9395 42.71 44.3613 42.874 44.7129 43.2021C45.0645 43.5303 45.2402 43.9639 45.2402 44.5029C45.2402 44.8076 45.1934 45.0771 45.0996 45.3115C45.0059 45.5225 44.877 45.71 44.7129 45.874C43.2129 47.3506 41.4785 48.5107 39.5098 49.3545C37.5645 50.1748 35.5723 50.585 33.5332 50.585Z",viewBox:"0 0 68 68"},housing:{path:"M14 28h4.008v-8H14v8zm-2 0V18h8.008v10H28V12.98L16 5 4 13.516V28h8zM0 32V11.022L16 0l16 11.022V32H0z"},"park-sign":{path:"M4 0H28V32H4V0ZM24 4H8V28H24V4ZM6 2V30H26V2H6ZM12 8V19.7H14.79V15.884H16.626C19.002 15.884 20.676 14.21 20.676 11.942C20.676 9.674 18.984 8 16.626 8H12ZM16.392 13.67H14.79V10.214H16.392C17.238 10.214 17.85 10.934 17.85 11.942C17.85 12.986 17.238 13.67 16.392 13.67Z"},info:{path:"M15.9 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 24c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm-1-15h2V9h-2v2zm0 12h2V13h-2v10z"},keyboard:{path:"M2 6h28v20H2z M0 4h32v24H0z M7 10h3v3H7zM7 15h3v3H7zM12 10h3v3h-3zM12 15h3v3h-3zM10 20h12v2H10zM17 10h3v3h-3zM17 15h3v3h-3zM22 10h3v3h-3zM22 15h3v3h-3z"},list:{path:"M32.0064 22V26H9.69577V22H32.0064ZM5.52556 22V26H1.35535V22H5.52556ZM32.0064 14V18H9.69577V14H32.0064ZM5.52556 14V18H1.35535V14H5.52556ZM32.0064 6V10H9.69577V6H32.0064ZM5.52556 6V10H1.35535V6H5.52556Z"},location:{path:"m16.679 32-1.23-1.086c-.45-.369-10.878-9.68-10.878-18.806C4.571 5.42 9.992 0 16.68 0s12.108 5.42 12.108 12.108c0 9.126-10.428 18.438-10.879 18.806L16.68 32Zm0-28.271A8.39 8.39 0 0 0 8.3 12.108c0 5.387 5.244 11.728 8.369 14.842 2.591-2.55 8.389-9.034 8.389-14.842a8.39 8.39 0 0 0-8.379-8.38Zm0 12.476a4.097 4.097 0 1 0 0-8.195 4.097 4.097 0 0 0 0 8.195Z"},lock:{path:"M6 11V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V11H20V23H4V11H6ZM8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11H8V7Z",viewBox:"0 0 24 24"},login:{path:"M17.777 1.777v3.555h8.891v21.336h-8.89v3.555h12.445V1.777ZM16.73 7.832l-2.507 2.516 3.875 3.875H1.778v3.554h16.32l-3.875 3.875 2.507 2.516L24.906 16Zm0 0"},"organic-waste-container":{path:"M23.2 4.8C22.9 2.1 19.6 0 15.7 0S8.5 2.2 8.1 4.8H7V30H3.9v2h24v-2h-3.2V4.8h-1.5zM12.3 2.4h6.9v6.9h-6.9V2.4zM22.7 29H9V12.6h13.7V29z"},parking:{path:"M4.5 2.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5H4.5ZM8 6V18H10.4278V13.9385H12.9905C15.3447 13.9385 17 12.2954 17 9.96923C17 7.64308 15.3447 6 12.9905 6H8ZM12.7881 11.9631H10.4278V7.97538H12.7881C13.8549 7.97538 14.5538 8.76923 14.5538 9.96923C14.5538 11.1877 13.8549 11.9631 12.7881 11.9631Z",viewBox:"0 0 24 24"},person:{path:"M31 32H1v-2.5c0-7.5 4.2-10 10-10h10c5.8 0 10 2.5 10 10V32ZM16 17a7.6 7.6 0 0 0 7.5-7.5 7.5 7.5 0 0 0-15 0A7.6 7.6 0 0 0 16 17Z"},"person-desk":{path:"M30 16v2h-2v12h-2v-2H6v2H4V18H2v-2h28zm-4 4H6v4h20v-4zM18 8.98c2.3 0 4 1 4 4v1H10v-1c0-3 1.69-4 4-4zM16 2a2.99 2.99 0 1 1 0 5.98A2.99 2.99 0 0 1 16 2z"},phone:{path:"M30.4 26.9s-3.1 3.4-5.6 3.6-9.2-3.2-14.7-8.7c-5.5-5.5-9-11.4-8.7-14.7S5 1.5 5 1.5l7.1 7.1-2.8 2.8 11.2 11.2 2.8-2.8 7.1 7.1z"},picture:{path:"M0 3.75V36.25H40V3.75H0ZM35 22L27.875 14.625L22.5 20.125L24.125 21.75L27.875 18L35 25.375V31.25H6L16.625 20.5L19.25 23.25L21 25L24.5 28.75L26.125 27.25L16.25 17.375L5 28.875V8.75H35V22ZM7.5 13.75C7.5 12.3693 8.61929 11.25 10 11.25C11.3807 11.25 12.5 12.3693 12.5 13.75C12.5 15.1307 11.3807 16.25 10 16.25C8.61929 16.25 7.5 15.1307 7.5 13.75Z",viewBox:"0 0 40 40"},pointer:{path:"M29.18 14C28.3576 8.41126 23.9687 4.02245 18.38 3.2V0H14.38V3.2C8.77561 3.99119 4.3712 8.3956 3.58 14H0.380005V18H3.58C4.3712 23.6044 8.77561 28.0088 14.38 28.8V32H18.38V28.8C23.9534 27.947 28.327 23.5734 29.18 18H32.38V14H29.18ZM16.38 25C11.4094 25 7.38 20.9706 7.38 16C7.38 11.0294 11.4094 7 16.38 7C21.3506 7 25.38 11.0294 25.38 16C25.38 18.3869 24.4318 20.6761 22.744 22.364C21.0561 24.0518 18.767 25 16.38 25ZM21.38 16C21.38 18.7614 19.1414 21 16.38 21C13.6186 21 11.38 18.7614 11.38 16C11.38 13.2386 13.6186 11 16.38 11C19.1414 11 21.38 13.2386 21.38 16Z"},"question-mark-circle":{path:"M17.7234 24V22H15.6383V24H17.7234ZM12.5106 13C12.5106 10.79 14.3768 9 16.6808 9C18.9849 9 20.851 10.79 20.851 13C20.851 14.2829 20.0274 14.9733 19.2255 15.6455C18.4647 16.2833 17.7234 16.9046 17.7234 18V19.9919H15.6383V18C15.6383 16.1787 16.6205 15.4566 17.4841 14.8217C18.1615 14.3236 18.7659 13.8792 18.7659 13C18.7659 11.9 17.8276 11 16.6808 11C15.534 11 14.5957 11.9 14.5957 13H12.5106ZM16.6808 2C8.65317 2 2.08508 8.3 2.08508 16C2.08508 23.7 8.65317 30 16.6808 30C24.7085 30 31.2766 23.7 31.2766 16C31.2766 8.3 24.7085 2 16.6808 2ZM16.6808 26C10.9468 26 6.2553 21.5 6.2553 16C6.2553 10.5 10.9468 6 16.6808 6C22.4149 6 27.1064 10.5 27.1064 16C27.1064 21.5 22.4149 26 16.6808 26Z"},search:{path:"m32 29.119-9.825-9.825a12.217 12.217 0 1 0-2.88 2.881L29.118 32 32 29.119Zm-19.771-8.745a8.145 8.145 0 1 1 0-16.29 8.145 8.145 0 0 1 0 16.29Z"},settings:{path:"M12 15.5773C11.0401 15.5787 10.1184 15.2014 9.43502 14.5273C9.09987 14.1972 8.83369 13.8038 8.65202 13.3698C8.47035 12.9359 8.37677 12.4702 8.37677 11.9998C8.37677 11.5294 8.47035 11.0637 8.65202 10.6298C8.83369 10.1958 9.09987 9.8024 9.43502 9.47231C10.1195 8.79989 11.0405 8.42313 12 8.42313C12.9595 8.42313 13.8806 8.79989 14.565 9.47231C14.902 9.80135 15.1698 10.1945 15.3526 10.6285C15.5355 11.0626 15.6297 11.5288 15.6297 11.9998C15.6297 12.4708 15.5355 12.937 15.3526 13.3711C15.1698 13.8052 14.902 14.1983 14.565 14.5273C13.8825 15.2028 12.9602 15.5803 12 15.5773ZM12 9.9298C11.7223 9.92723 11.4468 9.97958 11.1894 10.0838C10.9319 10.1881 10.6977 10.3422 10.5 10.5373C10.3052 10.7286 10.1505 10.9568 10.0449 11.2085C9.93924 11.4603 9.88482 11.7305 9.88482 12.0036C9.88482 12.2766 9.93924 12.5468 10.0449 12.7986C10.1505 13.0503 10.3052 13.2785 10.5 13.4698C10.9062 13.8516 11.4426 14.0641 12 14.0641C12.5574 14.0641 13.0939 13.8516 13.5 13.4698C13.6948 13.2785 13.8495 13.0503 13.9551 12.7986C14.0607 12.5468 14.1152 12.2766 14.1152 12.0036C14.1152 11.7305 14.0607 11.4603 13.9551 11.2085C13.8495 10.9568 13.6948 10.7286 13.5 10.5373C13.3023 10.3422 13.068 10.1881 12.8106 10.0838C12.5532 9.97958 12.2777 9.92723 12 9.9298ZM14.925 23.9998H9.08249L7.91249 20.4223L6.6525 19.6723L2.9025 20.4673L-0.022522 15.4723L2.54251 12.6823V11.2948L-0.0150146 8.50483L2.9025 3.50982L6.6525 4.30482L7.90498 3.59232L9.07498 0.00732422H14.9175L16.0875 3.59232L17.34 4.30482L21.09 3.55482L24.0075 8.54233L21.4125 11.2948V12.7198L23.9775 15.5098L21.06 20.5048L17.31 19.7098L16.0575 20.4223L14.925 23.9998ZM11.3025 20.9998H12.705L13.5525 18.3973L16.8375 16.5448L19.5525 17.1148L20.25 15.9223L18.4125 13.8673V10.1173L20.2725 8.08483L19.575 6.89233L16.86 7.46233L13.575 5.59482L12.705 3.04483H11.3025L10.455 5.64733L7.16249 7.52233L4.455 6.94482L3.75751 8.13732L5.60999 10.1698V13.9198L3.75 15.9448L4.455 17.1373L7.16249 16.5448L10.455 18.4198L11.3025 20.9998Z",viewBox:"0 0 24 24"},spinner:{path:"M16.3 5c2.2 0 4.3.7 6.1 1.9 1.8 1.2 3.2 3 4 5 .8 2 1 4.2.6 6.4-.4 2.1-1.5 4.1-3.1 5.6s-3.5 2.6-5.7 3c-2.1.4-4.3.2-6.3-.7-2-.9-3.7-2.3-4.9-4.1-1.2-1.8-1.8-4-1.8-6.1"},touchId:{path:"M16 16C14.3432 16 13 17.3431 13 19C13 20.0394 13.0938 20.8273 13.3511 21.6196C13.6116 22.4217 14.0575 23.2835 14.8321 24.4453C16.1834 26.4723 18.4585 27.7606 19.7464 28.4899C19.8345 28.5398 19.9179 28.5871 19.9961 28.6318L19.0039 30.3682C18.9247 30.323 18.8362 30.2732 18.7393 30.2187C17.4761 29.5078 14.7991 28.0015 13.168 25.5547C12.3425 24.3165 11.7884 23.2828 11.4489 22.2373C11.1062 21.1818 11 20.1697 11 19C11 16.2386 13.2386 14 16 14C18.7614 14 21 16.2386 21 19H19C19 17.3431 17.6569 16 16 16ZM21 19C21 20.6569 22.3432 22 24 22C25.6569 22 27 20.6569 27 19H29C29 21.7614 26.7614 24 24 24C21.2386 24 19 21.7614 19 19H21ZM4.07151 24.3714C3.7064 23.4586 3.46061 22.5252 3.29784 21.6916L5.26077 21.3084C5.40591 22.0516 5.62074 22.8593 5.92847 23.6286C6.67361 25.4915 7.79377 26.8796 8.2071 27.2929L6.79288 28.7071C6.20621 28.1204 4.92637 26.5085 4.07151 24.3714ZM16 8C9.92487 8 5.00001 12.9249 5.00001 19H3.00001C3.00001 11.8203 8.8203 6 16 6C23.1797 6 29 11.8203 29 19H27C27 12.9249 22.0751 8 16 8ZM16 4C11.0512 4 6.66217 6.39544 3.92848 10.0944L2.32007 8.90565C5.41462 4.71846 10.3899 2 16 2C19.0948 2 21.9992 2.82789 24.5007 4.27494L23.4993 6.00615C21.294 4.73045 18.7338 4 16 4ZM28.0714 10.0944C27.2945 9.04309 26.3835 8.09679 25.3636 7.28082L26.6131 5.71918C27.7681 6.64327 28.7998 7.71491 29.6798 8.90565L28.0714 10.0944ZM16 12C12.134 12 9.00003 15.134 9.00003 19C9.00003 19.0796 8.99981 19.1598 8.9996 19.2404C8.99682 20.2723 8.9938 21.3932 9.43906 22.6709C9.63349 23.2288 9.91652 23.822 10.3321 24.4453C11.6801 26.4674 12.8412 27.2103 13.4035 27.57C13.4601 27.6063 13.5107 27.6386 13.5547 27.668L12.4453 29.332C12.4019 29.3031 12.3512 29.2705 12.2939 29.2337C11.6672 28.8307 10.2404 27.9134 8.66796 25.5547C8.15791 24.7896 7.79982 24.0446 7.55046 23.3291C6.98838 21.7162 6.99473 20.2801 6.99926 19.2552C6.99965 19.1671 7.00003 19.0819 7.00003 19C7.00003 14.0294 11.0295 10 16 10C20.9706 10 25 14.0294 25 19H23C23 15.134 19.866 12 16 12ZM17 19C17 22.866 20.134 26 24 26V28C19.0294 28 15 23.9706 15 19V18H17V19Z"},"trash-bin":{path:"M21,4h8v4h-2v24H5V8H3V4h8V0h10V4z M19,2h-6v2h6V2z M23,28H9V8h14V28z M13,12h-2v12h2V12z M15,12h2v12h-2V12z M21,12h-2v12h2V12z"},vote:{path:"m 20.533999,22.34317 v 9.689243 H 0.13559322 V 11.634006 H 11.099736 L 9.5698561,13.163887 A 8.7968127,8.7968127 0 1 0 18.749139,24.12803 Z M 17.856709,16.606118 29.330812,5.1320143 27.545952,3.3471538 16.071848,14.821257 Z M 30.350732,6.1519347 18.621649,18.008508 15.561888,18.645959 14.032007,17.116078 14.541968,14.311297 26.526031,2.3272335 24.741171,0.54237288 12.502127,12.908907 10.462286,22.21568 19.641569,20.685799 32.135593,7.9367952 Z"},wasteCard:{path:"M3 4C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4H3ZM12 6H3V18H12V13H6.06299V11H12V6ZM12 11V13H18V11H12Z",viewBox:"0 0 24 24"},whatsapp:{path:"m0 32 2.2-8.2C.8 21.4.1 18.7.1 15.9.1 7.1 7.3 0 16 0c4.2 0 8.2 1.7 11.2 4.7s4.6 7 4.6 11.2c0 8.7-7.1 15.9-15.9 15.9-2.7 0-5.3-.7-7.6-1.9L0 32zm8.8-5.1C11 28.3 13.2 29 16 29c7.3 0 13.2-5.9 13.2-13.2 0-7.3-5.9-13.2-13.2-13.2-7.3.1-13.2 6-13.2 13.3 0 3 .9 5.2 2.3 7.5l-1.3 4.9 5-1.4zM24 19.6c-.1-.2-.4-.3-.8-.5s-2.3-1.2-2.7-1.3c-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6s-.5.3-.9.1c-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.1-.8-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.2.4-1.3 1.4-1.3 3.3 0 2 1.4 3.8 1.6 4.1.2.3 2.8 4.3 6.8 6 .9.4 1.7.7 2.3.8.9.3 1.8.3 2.5.2.8-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9z"},"wifi-disconnect":{path:"M6.5 7.41421L23.5 24.4142L24.9142 23L22.4426 20.5284L23.7 19.3144C22.2375 17.6153 20.2337 16.5013 18.0541 16.1399L14.5768 12.6626C15.2092 12.5673 15.8518 12.5185 16.5 12.5185C20.2155 12.5185 23.7506 14.1206 26.2 16.9144L29 14.1144C25.8 10.5939 21.2575 8.59512 16.5 8.6144C14.7252 8.60721 12.9803 8.88087 11.3238 9.40962L7.91421 6L6.5 7.41421ZM10.3501 14.0788L7.47339 11.2021C6.20136 12.0038 5.031 12.9801 4 14.1144L6.8 16.9144C7.81762 15.7537 9.02263 14.7987 10.3501 14.0788ZM16.318 20.0467L12.9654 16.694C11.5669 17.2546 10.3055 18.1462 9.3 19.3144L12.2 22.1144C13.2057 20.8534 14.712 20.0998 16.318 20.0467ZM16.5 22.9144C15.607 22.9033 14.7882 23.4101 14.4 24.2144L16.5 26.2144L18.6 24.2144C18.2118 23.4101 17.393 22.9033 16.5 22.9144Z"}},w=3,x={backspace:{stroke:!0,strokeWidth:2},spinner:{Wrapper:o,stroke:!0}},y="0 0 32 32",i=({color:e="default",name:C,size:h="md",testID:l,"logging-label":n})=>{const{color:c}=g(),{fontScale:M}=d(),r=z[h]*M,V=k[C],{Wrapper:s=H.Fragment,stroke:v,strokeWidth:L=w}=x[C]??{};return a.jsx(f,{"logging-label":n,testID:l,children:a.jsx(s,{children:a.jsx(u,{fillRule:"evenodd",height:r,viewBox:"viewBox"in V?V.viewBox:y,width:r,children:a.jsx(p,{d:V.path,fill:v?"none":c.text[e],stroke:v?c.text[e]:void 0,strokeWidth:v?L:void 0})})})})};try{i.displayName="Icon",i.__docgenInfo={description:"",displayName:"Icon",props:{color:{defaultValue:{value:"default"},description:"The color of the icon to display.",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"link"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"inverse"'},{value:'"cityPass"'},{value:'"confirm"'},{value:'"warning"'}]}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the icon to display.",name:"name",required:!0,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"list"'},{value:'"document"'},{value:'"accessCode"'},{value:'"add"'},{value:'"alarm"'},{value:'"alarmFilled"'},{value:'"announcement"'},{value:'"api"'},{value:'"asterisk"'},{value:'"attachment"'},{value:'"biometrics"'},{value:'"chat"'},{value:'"circle-check-mark"'},{value:'"backspace"'},{value:'"camera"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass-pass"'},{value:'"city-pass"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"copy"'},{value:'"documentCheckmark"'},{value:'"document-text"'},{value:'"download"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"error"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"faceId"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"keyboard"'},{value:'"location"'},{value:'"lock"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"parking"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"picture"'},{value:'"pointer"'},{value:'"question-mark-circle"'},{value:'"settings"'},{value:'"spinner"'},{value:'"touchId"'},{value:'"trash-bin"'},{value:'"vote"'},{value:'"wasteCard"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},size:{defaultValue:{value:"md"},description:"The size of the icon.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"ml"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}export{i as I,k as S};
