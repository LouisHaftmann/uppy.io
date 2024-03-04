"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4750],{76161:(e,a,l)=>{l.r(a),l.d(a,{default:()=>ve});var n=l(67294),i=l(45363),s=l(38555),o=l(19666),r=l(30337),t=l(58152),c=l(93759),d=l(41276),u=l(63313),h=l(66009),p=l(1978),m=l(94235),b=l(27986),g=l(69794),Z=l(41949),k=l(92435),v=l(34338),x=l(25278),y=l(62285),f=l(43932),C=l(16952),j=l(73836),w=l(11176),S=l(36735),U=l(51184),D=l(55532),G=l(74436),I=l(73248),N=l(63786),R=l(16013),F=l(25674),_=l(40543),B=l(94149),z=l(97323),P=l(22250),T=l(96159),A=l(37521),E=l(42008),H=l(10558),O=l(42113),W=l(98148),J=l(92198),K=l(4557),L=l(64954),M=l(60218),V=l(83253),q=l(68260),Q=l(4569),X=l(78570),Y=l(32214),$=l(27877),ee=l(62604),ae=l(6994),le=l(21357),ne=l(31682),ie=l(57263),se=l(87211),oe=l(77367),re=l(66630);const te=[{name:"English (United States)",locale:ae.Z},{name:"Arabic (Saudi Arabia)",locale:re.Z},{name:"Bulgarian (Bulgaria)",locale:oe.Z},{name:"Chinese (China)",locale:C.Z},{name:"Chinese (Taiwan)",locale:f.Z},{name:"Croatian (Croatia)",locale:L.Z},{name:"Czech (Czechia)",locale:se.Z},{name:"Danish (Denmark)",locale:ie.Z},{name:"Dutch (Netherlands)",locale:T.Z},{name:"Finnish (Finland)",locale:X.Z},{name:"French (France)",locale:Q.Z},{name:"Galician (Spain)",locale:q.Z},{name:"German (Germany)",locale:ne.Z},{name:"Greek (Greece)",locale:le.Z},{name:"Hebrew (Israel)",locale:V.Z},{name:"Hindi (India)",locale:M.Z},{name:"Hungarian (Hungary)",locale:K.Z},{name:"Icelandic (Iceland)",locale:W.Z},{name:"Indonesian (Indonesia)",locale:J.Z},{name:"Italian (Italy)",locale:O.Z},{name:"Japanese (Japan)",locale:H.Z},{name:"Korean (South Korea)",locale:E.Z},{name:"Norwegian Bokm\xe5l (Norway)",locale:A.Z},{name:"Persian (Iran)",locale:Y.Z},{name:"Polish (Poland)",locale:P.Z},{name:"Portuguese (Brazil)",locale:z.Z},{name:"Portuguese (Portugal)",locale:B.Z},{name:"Romanian (Romania)",locale:_.Z},{name:"Russian (Russia)",locale:F.Z},{name:"Serbian (Serbia Cyrillic)",locale:N.Z},{name:"Serbian (Serbia Latin)",locale:I.Z},{name:"Slovak (Slovakia)",locale:R.Z},{name:"Spanish (Spain)",locale:ee.Z},{name:"Spanish (Mexico)",locale:$.Z},{name:"Swedish (Sweden)",locale:G.Z},{name:"Thai (Thailand)",locale:D.Z},{name:"Turkish (Turkey)",locale:U.Z},{name:"Ukrainian (Ukraine)",locale:S.Z},{name:"Uzbek (Uzbekistan)",locale:w.Z},{name:"Vietnamese (Vietnam)",locale:j.Z}];l(81551);const ce={main:"main_tfAN",header:"header_rzLV",options:"options_J1Ai","options-wrapper":"options-wrapper_Ce9n","dashboard-inner":"dashboard-inner_Egwd"};var de=l(88746),ue=l(85893);const he={maxFileSize:1e6,maxNumberOfFiles:3,minNumberOfFiles:2,allowedFileTypes:["image/*","video/*"],requiredMetaFields:["caption"]},pe={height:570,width:"100%",restrictions:null,disabled:!1,theme:"light",plugins:["Webcam","GoogleDrive","Dropbox","Instagram","Url","OneDrive","Unsplash","Box","ImageEditor"],enableGoldenRetriever:!1};function me(e,a){switch(a.type){case"small":return a.checked?{...e,width:400,height:400}:{...e,width:"100%",height:570};case"theme":return{...e,theme:a.checked?"dark":"light"};case"disabled":return{...e,disabled:a.checked};case"restrictions":return{...e,restrictions:a.checked?he:void 0};case"plugins":return a.checked?{...e,plugins:[...e.plugins,a.value]}:{...e,plugins:e.plugins.filter((e=>e!==a.value))};case"enableGoldenRetriever":return{...e,enableGoldenRetriever:a.checked};default:return e}}const be=[{heading:"Remote sources",options:[{label:"Google Drive",value:"GoogleDrive",type:"plugins",defaultChecked:!0},{label:"Dropbox",value:"Dropbox",type:"plugins",defaultChecked:!0},{label:"Instagram",value:"Instagram",type:"plugins",defaultChecked:!0},{label:"Url",value:"Url",type:"plugins",defaultChecked:!0},{label:"OneDrive",value:"OneDrive",type:"plugins",defaultChecked:!0},{label:"Unsplash",value:"Unsplash",type:"plugins",defaultChecked:!0},{label:"Box",value:"Box",type:"plugins",defaultChecked:!0}]},{heading:"Local sources",options:[{label:"Webcam",value:"Webcam",type:"plugins",defaultChecked:!0},{label:"Audio",value:"Audio",type:"plugins",defaultChecked:!1},{label:"Screencast",value:"ScreenCapture",type:"plugins",defaultChecked:!1}]},{heading:"Dashboard",options:[{label:"Small",type:"small"},{label:"Disabled",type:"disabled"},{label:"Dark mode",type:"theme"}]},{heading:"Uppy",options:[{label:"Restrictions",type:"restrictions"},{label:"Golden Retriever",type:"enableGoldenRetriever"}]}],ge=e=>{let{state:a,locale:l}=e;const i=(0,n.useCallback)((()=>{const e=new t.Z({restrictions:a.restrictions,locale:l,debug:!0}).use(c.Z).use(k.Z).use(Z.Z).use(v.Z,{}).use(x.Z,{endpoint:ke}).use(d.Z,{companionUrl:Ze,companionKeysParams:{key:"unused-key",credentialsName:"unused-credentials"}}).use(h.Z,{companionUrl:Ze}).use(u.Z,{companionUrl:Ze}).use(b.Z,{companionUrl:Ze}).use(p.Z,{companionUrl:Ze}).use(m.Z,{companionUrl:Ze}).use(g.Z,{companionUrl:Ze});return a.enableGoldenRetriever&&e.use(y.Z),globalThis.uppy=e,e}),[a,l]),[s,o]=(0,n.useState)(i);return(0,n.useEffect)((()=>o(i())),[i]),(0,ue.jsx)("div",{className:ce["uppy-wrapper"],children:(0,ue.jsx)(r.Z,{uppy:s,width:a.width,height:a.height,plugins:a.plugins,theme:a.theme,disabled:a.disabled,note:a.restrictions?"Images and video only, 2\u20133 files, up to 1 MB":null})})},Ze="https://companion.uppy.io",ke="https://tusd.tusdemo.net/files/";function ve(){const[e,a]=(0,n.useReducer)(me,pe),[l,r]=(0,n.useState)(null);return(0,ue.jsx)(i.Z,{children:(0,ue.jsxs)("main",{className:ce.main,children:[(0,ue.jsx)("h1",{children:"Examples"}),(0,ue.jsxs)("div",{className:ce.header,children:[(0,ue.jsx)("h2",{children:"Dashboard"}),(0,ue.jsxs)("p",{children:[(0,ue.jsx)(de.Z,{to:"/docs/dashboard",children:"Docs"})," \u2022"," ",(0,ue.jsx)("a",{target:"_blank",rel:"noopener",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd",children:"CodeSandbox"})]})]}),(0,ue.jsx)("p",{children:"Dashboard is the full-featured UI for Uppy that shows nice file previews and upload progress, lets you edit metadata, and unites acquire plugins, such as Google Drive and Webcam, under one roof."}),(0,ue.jsxs)("section",{children:[(0,ue.jsxs)("div",{className:ce.options,children:[be.map((e=>(0,ue.jsxs)("div",{children:[(0,ue.jsx)("h3",{children:e.heading}),(0,ue.jsx)("div",{"wrapper-for":e.heading,className:ce["options-wrapper"],children:e.options.map((e=>{let{label:l,value:n,type:i,defaultChecked:s}=e;return(0,ue.jsxs)("div",{children:[(0,ue.jsx)("input",{type:"checkbox",id:l,className:ce["framework-input"],name:"framework",value:i,defaultChecked:s,onChange:e=>a({type:i,checked:e.target.checked,value:n})}),(0,ue.jsx)("label",{htmlFor:l,children:l})]},l)}))})]},e.heading))),(0,ue.jsx)("select",{name:"locale",onChange:e=>{r(te.find((a=>a.name===e.target.value)).locale)},children:te.map((e=>{let{name:a}=e;return(0,ue.jsx)("option",{value:a,children:a},a)}))})]}),(0,ue.jsx)("div",{className:ce["dashboard-inner"],children:(0,ue.jsx)(o.Z,{children:()=>(0,ue.jsx)(ge,{state:e,locale:l})})})]}),(0,ue.jsxs)(s.Z,{type:"note",children:["Checkout our"," ",(0,ue.jsx)("a",{href:"https://github.com/transloadit/uppy/tree/main/examples",target:"_blank",rel:"noopener",children:"GitHub examples"})," ","folder for many more examples."]})]})})}}}]);