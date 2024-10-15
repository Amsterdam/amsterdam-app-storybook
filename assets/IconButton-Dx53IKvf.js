import{j as l}from"./jsx-runtime-Bxcv0yjW.js";import{r}from"./index-mfbfsM12.js";import{P as s}from"./Pressable-CTQw24U-.js";import{c as m}from"./config-BZnShabN.js";import{B as d}from"./Badge-CPHjSiL2.js";import{R as c}from"./Row-BxvtrN6v.js";import{I as p}from"./types-BJ_48vsK.js";import{u as v}from"./useThemable-DK_xoxH7.js";import{V as g}from"./index-BDsvWohO.js";import{s as f}from"./index-CEE--Juu.js";const n=r.forwardRef(({badgeValue:a,icon:e,...t},o)=>{const u=v(y),i=(m.minTouchSize-p[e.props.size??"md"])/2;return l.jsx(c,{align:"start",valign:"center",children:l.jsxs(s,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",hitSlop:i,ref:o,variant:"transparent",...t,children:[e,a?l.jsx(g,{style:u.badgePosition,children:l.jsx(d,{testID:`${t.testID}Badge`,value:a,variant:"on-icon"})}):null]})})}),y=({size:a})=>{const e=a.spacing.sm;return f.create({badgePosition:{position:"absolute",top:-e,right:-e,left:-e,alignItems:"flex-end"}})};try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{badgeValue:{defaultValue:null,description:"The value for a badge to be displayed on top of the icon.",name:"badgeValue",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"The icon component to use for the button.",name:"icon",required:!0,type:{name:"ReactElement<IconProps, string | JSXElementConstructor<any>>"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"transparent"'}]}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}}}}}catch{}export{n as I};
