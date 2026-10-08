import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{J as r,lt as i,n as a,q as o,ut as s}from"./dist-CW4nBAfu.js";import{n as c,t as l}from"./Column-DSTKTcrR.js";import{n as u,t as d}from"./Title-Drxk5R4h.js";import{n as f,t as p}from"./Paragraph-Bam9NW76.js";import{n as m,r as h,t as g}from"./components-BOFnzHAP.js";import{n as _,t as v}from"./ProgressStep-DDfRm3Pv.js";var y=t({CompletedStep:()=>C,CurrentStep:()=>S,ExpandedTimelineItem:()=>T,LastStep:()=>E,PlannedStep:()=>w,__namedExportsOrder:()=>O,default:()=>x}),b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{a(),_(),c(),f(),u(),g(),b=n(),x={component:v,tags:[`!autodocs`],decorators:[e=>(0,b.jsx)(m,{highlight:!0,maxWidth:`480px`,children:(0,b.jsx)(o,{style:D.storyContainer,children:(0,b.jsx)(e,{})})})],argTypes:{accessible:{control:`boolean`},children:{control:!1,table:{disable:!0}},isExpanded:{control:`boolean`},numberIndicator:{control:{type:`number`}},progressStatus:{control:{type:`select`},options:[`active`,`planned`,`done`]},progressStatusNextItem:{control:{type:`select`},options:[`active`,`planned`,`done`,void 0]},testID:{control:!1,table:{disable:!0}},variant:{control:{type:`select`},options:[`primary`,`secondary`]}},args:{children:(0,b.jsxs)(l,{gutter:`xs`,shrink:1,children:[(0,b.jsx)(d,{level:`h4`,text:`Step title`}),(0,b.jsx)(p,{children:`Brief guidance that helps people understand what happens in this step.`})]}),progressStatus:`active`,progressStatusNextItem:`planned`,variant:`secondary`,numberIndicator:2}},S={},C={args:{progressStatus:`done`,progressStatusNextItem:`done`}},w={args:{progressStatus:`planned`,progressStatusNextItem:`planned`,numberIndicator:3}},T={args:{children:(0,b.jsxs)(l,{gutter:`sm`,shrink:1,children:[(0,b.jsx)(d,{level:`h4`,text:`Permit review`}),(0,b.jsx)(p,{children:`Keep the connector visible while people review the details of the current milestone.`}),(0,b.jsx)(p,{color:`secondary`,children:`Add supporting details only when the expanded content helps someone decide what happens next.`})]}),isExpanded:!0,progressStatus:`active`,progressStatusNextItem:`planned`,variant:`primary`,numberIndicator:void 0}},E={args:{progressStatus:`done`,progressStatusNextItem:void 0}},D=s.create({storyContainer:{minHeight:220,padding:24}}),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    progressStatus: 'done',
    progressStatusNextItem: 'done'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    progressStatus: 'planned',
    progressStatusNextItem: 'planned',
    numberIndicator: 3
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Column gutter="sm" shrink={1}>
        <Title level="h4" text="Permit review" />
        <Paragraph>
          Keep the connector visible while people review the details of the
          current milestone.
        </Paragraph>
        <Paragraph color="secondary">
          Add supporting details only when the expanded content helps someone
          decide what happens next.
        </Paragraph>
      </Column>,
    isExpanded: true,
    progressStatus: 'active',
    progressStatusNextItem: 'planned',
    variant: 'primary',
    numberIndicator: undefined
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    progressStatus: 'done',
    progressStatusNextItem: undefined
  }
}`,...E.parameters?.docs?.source}}},O=[`CurrentStep`,`CompletedStep`,`PlannedStep`,`ExpandedTimelineItem`,`LastStep`]})))()}export{k as n,y as t};