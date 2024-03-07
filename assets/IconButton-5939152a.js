import{j as l,a as i,S as s}from"./index-1401012c.js";import{r as d}from"./index-76fb7be0.js";import{P as m}from"./Pressable-21657c5a.js";import{c}from"./config-55b2a55c.js";import{B as v}from"./Badge-9739ba32.js";import{R as p}from"./Row-a25c9171.js";import{I as g}from"./types-e7c584cc.js";import{a as f}from"./useThemable-a5fed888.js";import{V as y}from"./index-e1b95cde.js";const n=d.forwardRef(({badgeValue:a,icon:e,...t},o)=>{const u=f(h),r=(c.minTouchSize-g[e.props.size??"md"])/2;return l(p,{align:"start",valign:"center",children:i(m,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",hitSlop:r,ref:o,variant:"transparent",...t,children:[e,a?l(y,{style:u.badgePosition,children:l(v,{testID:`${t.testID}Badge`,value:a,variant:"on-icon"})}):null]})})}),h=({size:a})=>{const e=a.spacing.sm;return s.create({badgePosition:{position:"absolute",top:-e,right:-e,left:-e,alignItems:"flex-end"}})};try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{badgeValue:{defaultValue:null,description:"The value for a badge to be displayed on top of the icon.",name:"badgeValue",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"The icon component to use for the button.",name:"icon",required:!0,type:{name:"ReactElement<IconProps, string | JSXElementConstructor<any>>"}},grow:{defaultValue:null,description:"Whether the button grows to fill its parent container.",name:"grow",required:!1,type:{name:"boolean"}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"negative"'},{value:'"transparent"'}]}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}}}}}catch{}export{n as I};
