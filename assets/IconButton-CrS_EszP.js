import{j as l}from"./jsx-runtime-BlAj40OV.js";import{r}from"./index-Cs7sjTYM.js";import{P as s}from"./Pressable-BTeF00Oa.js";import{c as m}from"./config-BZnShabN.js";import{B as d}from"./Badge-x_Qhz6eB.js";import{R as c}from"./Row-BQcm9HGl.js";import{I as v}from"./types-BJ_48vsK.js";import{u as p}from"./useThemable-CDPjGmtb.js";import{V as g}from"./index-DNzWYFc8.js";import{s as f}from"./index-BRs9ZavV.js";const n=r.forwardRef(({badgeValue:a,icon:e,...t},o)=>{const u=p(h),i=(m.minTouchSize-v[e.props.size??"md"])/2;return l.jsx(c,{align:"start",valign:"center",children:l.jsxs(s,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",hitSlop:i,ref:o,variant:"transparent",...t,children:[e,a?l.jsx(g,{style:u.badgePosition,children:l.jsx(d,{testID:`${t.testID}Badge`,value:a,variant:"on-icon"})}):null]})})}),h=({size:a})=>{const e=a.spacing.sm;return f.create({badgePosition:{position:"absolute",top:-e,right:-e,left:-e,alignItems:"flex-end"}})};try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{badgeValue:{defaultValue:null,description:"The value for a badge to be displayed on top of the icon.",name:"badgeValue",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"The icon component to use for the button.",name:"icon",required:!0,type:{name:"ReactElement<IconProps, string | JSXElementConstructor<any>>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"transparent"'}]}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxs"'},{value:'"xs"'},{value:'"smd"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxs"'},{value:'"xs"'},{value:'"smd"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxs"'},{value:'"xs"'},{value:'"smd"'}]}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"access-code"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"notification-history"'},{value:'"onboarding"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-container"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"Custom dimensions to log with the event.",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}export{n as I};
