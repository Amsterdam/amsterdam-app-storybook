import{a8 as B,a9 as a,aa as r}from"./iframe-HLxzUbhb.js";import"./preload-helper-Dp1pzeXC.js";const D={argTypes:{onChange:{action:"onChange"}},component:B},s=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],t={args:{options:s,type:r.radio,orientation:a.horizontal,label:"Radio Options",testID:"radioButton"}},o={args:{options:s,type:r.checkbox,orientation:a.vertical,label:"Checkbox Options",testID:"checkboxButton"}},e={args:{options:s,type:r.rating,orientation:a.horizontal,label:"Rating Options",testID:"ratingButton",value:"2"}},n={args:{options:s,type:r.selection_buttons,orientation:a.horizontal,label:"Selection Buttons",testID:"selectionButton"}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options,
    type: QuestionType.radio,
    orientation: LayoutOrientation.horizontal,
    label: 'Radio Options',
    testID: 'radioButton'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,u,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    options,
    type: QuestionType.checkbox,
    orientation: LayoutOrientation.vertical,
    label: 'Checkbox Options',
    testID: 'checkboxButton'
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,m,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    options,
    type: QuestionType.rating,
    orientation: LayoutOrientation.horizontal,
    label: 'Rating Options',
    testID: 'ratingButton',
    value: '2'
  }
}`,...(b=(m=e.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,h,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options,
    type: QuestionType.selection_buttons,
    orientation: LayoutOrientation.horizontal,
    label: 'Selection Buttons',
    testID: 'selectionButton'
  }
}`,...(O=(h=n.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const I=["Radio","Checkbox","Rating","SelectionButtons"];export{o as Checkbox,t as Radio,e as Rating,n as SelectionButtons,I as __namedExportsOrder,D as default};
