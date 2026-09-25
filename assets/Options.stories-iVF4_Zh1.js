import{i as e}from"./preload-helper-B45gAKPr.js";import{Jr as t,Wr as n}from"./iframe-BvMeIKCC.js";import{a as r,n as i,o as a,t as o}from"./Options-PfFyF1nU.js";var s,c,l,u,d,f,p;e((()=>{i(),t(),a(),s={argTypes:{onChange:{action:`onChange`}},component:o},c=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}],l={args:{options:c,type:r.radio,orientation:n.horizontal,label:`Radio Options`,testID:`radioButton`}},u={args:{options:c,type:r.checkbox,orientation:n.vertical,label:`Checkbox Options`,testID:`checkboxButton`}},d={args:{options:c,type:r.rating,orientation:n.horizontal,label:`Rating Options`,testID:`ratingButton`,value:`2`}},f={args:{options:c,type:r.selection_buttons,orientation:n.horizontal,label:`Selection Buttons`,testID:`selectionButton`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    type: QuestionType.radio,
    orientation: LayoutOrientation.horizontal,
    label: 'Radio Options',
    testID: 'radioButton'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    type: QuestionType.checkbox,
    orientation: LayoutOrientation.vertical,
    label: 'Checkbox Options',
    testID: 'checkboxButton'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    type: QuestionType.rating,
    orientation: LayoutOrientation.horizontal,
    label: 'Rating Options',
    testID: 'ratingButton',
    value: '2'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    type: QuestionType.selection_buttons,
    orientation: LayoutOrientation.horizontal,
    label: 'Selection Buttons',
    testID: 'selectionButton'
  }
}`,...f.parameters?.docs?.source}}},p=[`Radio`,`Checkbox`,`Rating`,`SelectionButtons`]}))();export{u as Checkbox,l as Radio,d as Rating,f as SelectionButtons,p as __namedExportsOrder,s as default};