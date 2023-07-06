import{A as I,_ as j,l as ee,P as te,C as k,e as H,R as G,a0 as re,aA as A,bi as W,bk as oe,bd as ne,$ as ae,bl as le}from"./EditOutlined-d581a128.js";import{r as t}from"./index-11fb5c98.js";var ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};const se=ie;var ce=function(a,o){return t.createElement(I,j({},a,{ref:o,icon:se}))};const _e=t.forwardRef(ce);var de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};const ue=de;var ge=function(a,o){return t.createElement(I,j({},a,{ref:o,icon:ue}))};const Ae=t.forwardRef(ge);var fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const me=fe;var pe=function(a,o){return t.createElement(I,j({},a,{ref:o,icon:me}))};const We=t.forwardRef(pe);var he={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};const xe=he;var Ce=function(a,o){return t.createElement(I,j({},a,{ref:o,icon:xe}))};const ye=t.forwardRef(Ce),be=e=>!isNaN(parseFloat(e))&&isFinite(e),Se=be,ve=e=>{const{componentCls:a,colorBgContainer:o,colorBgBody:r,colorText:n}=e;return{[`${a}-sider-light`]:{background:o,[`${a}-sider-trigger`]:{color:n,background:o},[`${a}-sider-zero-width-trigger`]:{color:n,background:o,border:`1px solid ${r}`,borderInlineStart:0}}}},$e=ve,we=e=>{const{antCls:a,componentCls:o,colorText:r,colorTextLightSolid:n,colorBgHeader:c,colorBgBody:s,colorBgTrigger:g,layoutHeaderHeight:u,layoutHeaderPaddingInline:f,layoutHeaderColor:m,layoutFooterPadding:S,layoutTriggerHeight:p,layoutZeroTriggerSize:v,motionDurationMid:h,motionDurationSlow:C,fontSize:$,borderRadius:d}=e;return{[o]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:s,"&, *":{boxSizing:"border-box"},[`&${o}-has-sider`]:{flexDirection:"row",[`> ${o}, > ${o}-content`]:{width:0}},[`${o}-header, &${o}-footer`]:{flex:"0 0 auto"},[`${o}-sider`]:{position:"relative",minWidth:0,background:c,transition:`all ${h}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${a}-menu${a}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:p},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:p,color:n,lineHeight:`${p}px`,textAlign:"center",background:g,cursor:"pointer",transition:`all ${h}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:u,insetInlineEnd:-v,zIndex:1,width:v,height:v,color:n,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:c,borderStartStartRadius:0,borderStartEndRadius:d,borderEndEndRadius:d,borderEndStartRadius:0,cursor:"pointer",transition:`background ${C} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${C}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-v,borderStartStartRadius:d,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:d}}}}},$e(e)),{"&-rtl":{direction:"rtl"}}),[`${o}-header`]:{height:u,paddingInline:f,color:m,lineHeight:`${u}px`,background:c,[`${a}-menu`]:{lineHeight:"inherit"}},[`${o}-footer`]:{padding:S,color:r,fontSize:$,background:s},[`${o}-content`]:{flex:"auto",minHeight:0}}},V=ee("Layout",e=>{const{colorText:a,controlHeightSM:o,controlHeight:r,controlHeightLG:n,marginXXS:c}=e,s=n*1.25,g=te(e,{layoutHeaderHeight:r*2,layoutHeaderPaddingInline:s,layoutHeaderColor:a,layoutFooterPadding:`${o}px ${s}px`,layoutTriggerHeight:n+c*2,layoutZeroTriggerSize:n});return[we(g)]},e=>{const{colorBgLayout:a}=e;return{colorBgHeader:"#001529",colorBgBody:a,colorBgTrigger:"#002140"}});var X=globalThis&&globalThis.__rest||function(e,a){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};const Z=t.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});function P(e){let{suffixCls:a,tagName:o,displayName:r}=e;return n=>t.forwardRef((s,g)=>t.createElement(n,Object.assign({ref:g,suffixCls:a,tagName:o},s)))}const _=t.forwardRef((e,a)=>{const{prefixCls:o,suffixCls:r,className:n,tagName:c}=e,s=X(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:g}=t.useContext(k),u=g("layout",o),[f,m]=V(u),S=r?`${u}-${r}`:u;return f(t.createElement(c,Object.assign({className:H(o||S,n,m),ref:a},s)))}),Ee=t.forwardRef((e,a)=>{const{direction:o}=t.useContext(k),[r,n]=t.useState([]),{prefixCls:c,className:s,rootClassName:g,children:u,hasSider:f,tagName:m}=e,S=X(e,["prefixCls","className","rootClassName","children","hasSider","tagName"]),p=G(S,["suffixCls"]),{getPrefixCls:v}=t.useContext(k),h=v("layout",c),[C,$]=V(h),d=H(h,{[`${h}-has-sider`]:typeof f=="boolean"?f:r.length>0,[`${h}-rtl`]:o==="rtl"},s,g,$),E=t.useMemo(()=>({siderHook:{addSider:x=>{n(y=>[].concat(re(y),[x]))},removeSider:x=>{n(y=>y.filter(O=>O!==x))}}}),[]);return C(t.createElement(Z.Provider,{value:E},t.createElement(m,Object.assign({ref:a,className:d},p),u)))}),Oe=P({tagName:"section",displayName:"Layout"})(Ee),De=P({suffixCls:"header",tagName:"header",displayName:"Header"})(_),Ge=P({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(_),Ve=P({suffixCls:"content",tagName:"main",displayName:"Content"})(_),Xe=Oe;var ze=globalThis&&globalThis.__rest||function(e,a){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};const D={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},Ne=t.createContext({}),ke=(()=>{let e=0;return function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${a}${e}`}})(),He=t.forwardRef((e,a)=>{var{prefixCls:o,className:r,trigger:n,children:c,defaultCollapsed:s=!1,theme:g="dark",style:u={},collapsible:f=!1,reverseArrow:m=!1,width:S=200,collapsedWidth:p=80,zeroWidthTriggerStyle:v,breakpoint:h,onCollapse:C,onBreakpoint:$}=e,d=ze(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]);const{siderHook:E}=t.useContext(Z),[x,y]=t.useState("collapsed"in d?d.collapsed:s),[O,T]=t.useState(!1);t.useEffect(()=>{"collapsed"in d&&y(d.collapsed)},[d.collapsed]);const B=(l,i)=>{"collapsed"in d||y(l),C==null||C(l,i)},z=t.useRef();z.current=l=>{T(l.matches),$==null||$(l.matches),x!==l.matches&&B(l.matches,"responsive")},t.useEffect(()=>{function l(b){return z.current(b)}let i;if(typeof window<"u"){const{matchMedia:b}=window;if(b&&h&&h in D){i=b(`(max-width: ${D[h]})`);try{i.addEventListener("change",l)}catch{i.addListener(l)}l(i)}}return()=>{try{i==null||i.removeEventListener("change",l)}catch{i==null||i.removeListener(l)}}},[h]),t.useEffect(()=>{const l=ke("ant-sider-");return E.addSider(l),()=>E.removeSider(l)},[]);const F=()=>{B(!x,"clickTrigger")},{getPrefixCls:N}=t.useContext(k),R=()=>{const l=N("layout-sider",o),i=G(d,["collapsed"]),b=x?p:S,w=Se(b)?`${b}px`:String(b),M=parseFloat(String(p||0))===0?t.createElement("span",{onClick:F,className:H(`${l}-zero-width-trigger`,`${l}-zero-width-trigger-${m?"right":"left"}`),style:v},n||t.createElement(ye,null)):null,Q={expanded:m?t.createElement(A,null):t.createElement(W,null),collapsed:m?t.createElement(W,null):t.createElement(A,null)}[x?"collapsed":"expanded"],U=n!==null?M||t.createElement("div",{className:`${l}-trigger`,onClick:F,style:{width:w}},n||Q):null,Y=Object.assign(Object.assign({},u),{flex:`0 0 ${w}`,maxWidth:w,minWidth:w,width:w}),q=H(l,`${l}-${g}`,{[`${l}-collapsed`]:!!x,[`${l}-has-trigger`]:f&&n!==null&&!M,[`${l}-below`]:!!O,[`${l}-zero-width`]:parseFloat(w)===0},r);return t.createElement("aside",Object.assign({className:q},i,{style:Y,ref:a}),t.createElement("div",{className:`${l}-children`},c),f||O&&M?U:null)},L=t.useMemo(()=>({siderCollapsed:x}),[x]);return t.createElement(Ne.Provider,{value:L},R())}),Ze=He;function Be(e){let{className:a,direction:o,index:r,marginDirection:n,children:c,split:s,wrap:g}=e;const{horizontalSize:u,verticalSize:f,latestIndex:m,supportFlexGap:S}=t.useContext(J);let p={};return S||(o==="vertical"?r<m&&(p={marginBottom:u/(s?2:1)}):p=Object.assign(Object.assign({},r<m&&{[n]:u/(s?2:1)}),g&&{paddingBottom:f})),c==null?null:t.createElement(t.Fragment,null,t.createElement("div",{className:a,style:p},c),r<m&&s&&t.createElement("span",{className:`${a}-split`,style:p},s))}var Fe=globalThis&&globalThis.__rest||function(e,a){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};const J=t.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),Ie={small:8,middle:16,large:24};function je(e){return typeof e=="string"?Ie[e]:e||0}const Pe=e=>{const{getPrefixCls:a,space:o,direction:r}=t.useContext(k),{size:n=(o==null?void 0:o.size)||"small",align:c,className:s,rootClassName:g,children:u,direction:f="horizontal",prefixCls:m,split:S,style:p,wrap:v=!1}=e,h=Fe(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap"]),C=ne(),[$,d]=t.useMemo(()=>(Array.isArray(n)?n:[n,n]).map(i=>je(i)),[n]),E=ae(u,{keepEmpty:!0}),x=c===void 0&&f==="horizontal"?"center":c,y=a("space",m),[O,T]=le(y),B=H(y,T,`${y}-${f}`,{[`${y}-rtl`]:r==="rtl",[`${y}-align-${x}`]:x},s,g),z=`${y}-item`,F=r==="rtl"?"marginLeft":"marginRight";let N=0;const R=E.map((i,b)=>{i!=null&&(N=b);const w=i&&i.key||`${z}-${b}`;return t.createElement(Be,{className:z,key:w,direction:f,index:b,marginDirection:F,split:S,wrap:v},i)}),L=t.useMemo(()=>({horizontalSize:$,verticalSize:d,latestIndex:N,supportFlexGap:C}),[$,d,N,C]);if(E.length===0)return null;const l={};return v&&(l.flexWrap="wrap",C||(l.marginBottom=-d)),C&&(l.columnGap=$,l.rowGap=d),O(t.createElement("div",Object.assign({className:B,style:Object.assign(Object.assign({},l),p)},h),t.createElement(J.Provider,{value:L},R)))},K=Pe;K.Compact=oe;const Je=K;export{_e as C,Ae as E,Ge as F,De as H,We as I,Je as S,Xe as a,Ve as b,Ze as c,Ne as d};