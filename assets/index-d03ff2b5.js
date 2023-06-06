import{m as G,P as H,O as F,r as z,C as M,e as w,R as k,a6 as L,Q as U,T as Y,Y as B,I as K,U as T}from"./EditOutlined-524edae9.js";import{r}from"./index-3aeb8e3b.js";import{I as X,C as Q,E as W}from"./index-3f391cd0.js";import{N as q,u as J}from"./index-19ef35b0.js";const V=n=>{const{componentCls:e,iconCls:s,boxShadow:t,colorText:o,colorBgElevated:i,colorSuccess:d,colorError:v,colorWarning:a,colorInfo:l,fontSizeLG:p,motionEaseInOutCirc:u,motionDurationSlow:c,marginXS:g,paddingXS:f,borderRadiusLG:m,zIndexPopup:y,messageNoticeContentPadding:P}=n,b=`${e}-notice`,$=new F("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:f,transform:"translateY(0)",opacity:1}}),x=new F("MessageMoveOut",{"0%":{maxHeight:n.height,padding:f,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),O={padding:f,textAlign:"center",[`${e}-custom-content > ${s}`]:{verticalAlign:"text-bottom",marginInlineEnd:g,fontSize:p},[`${b}-content`]:{display:"inline-block",padding:P,background:i,borderRadius:m,boxShadow:t,pointerEvents:"all"},[`${e}-success > ${s}`]:{color:d},[`${e}-error > ${s}`]:{color:v},[`${e}-warning > ${s}`]:{color:a},[`${e}-info > ${s},
      ${e}-loading > ${s}`]:{color:l}};return[{[e]:Object.assign(Object.assign({},z(n)),{color:o,position:"fixed",top:g,width:"100%",pointerEvents:"none",zIndex:y,[`${e}-move-up`]:{animationFillMode:"forwards"},[`
        ${e}-move-up-appear,
        ${e}-move-up-enter
      `]:{animationName:$,animationDuration:c,animationPlayState:"paused",animationTimingFunction:u},[`
        ${e}-move-up-appear${e}-move-up-appear-active,
        ${e}-move-up-enter${e}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${e}-move-up-leave`]:{animationName:x,animationDuration:c,animationPlayState:"paused",animationTimingFunction:u},[`${e}-move-up-leave${e}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[e]:{[b]:Object.assign({},O)}},{[`${e}-notice-pure-panel`]:Object.assign(Object.assign({},O),{padding:0,textAlign:"start"})}]},_=G("Message",n=>{const e=H(n,{messageNoticeContentPadding:`${(n.controlHeightLG-n.fontSize*n.lineHeight)/2}px ${n.paddingSM}px`});return[V(e)]},n=>({height:150,zIndexPopup:n.zIndexPopupBase+10}));function Z(n,e){return{motionName:e??`${n}-move-up`}}function j(n){let e;const s=new Promise(o=>{e=n(()=>{o(!0)})}),t=()=>{e==null||e()};return t.then=(o,i)=>s.then(o,i),t.promise=s,t}var ee=globalThis&&globalThis.__rest||function(n,e){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(s[t[o]]=n[t[o]]);return s};const ne={info:r.createElement(X,null),success:r.createElement(Q,null),error:r.createElement(k,null),warning:r.createElement(W,null),loading:r.createElement(L,null)};function A(n){let{prefixCls:e,type:s,icon:t,children:o}=n;return r.createElement("div",{className:w(`${e}-custom-content`,`${e}-${s}`)},t||ne[s],r.createElement("span",null,o))}function te(n){const{prefixCls:e,className:s,type:t,icon:o,content:i}=n,d=ee(n,["prefixCls","className","type","icon","content"]),{getPrefixCls:v}=r.useContext(M),a=e||v("message"),[,l]=_(a);return r.createElement(q,Object.assign({},d,{prefixCls:a,className:w(s,l,`${a}-notice-pure-panel`),eventKey:"pure",duration:null,content:r.createElement(A,{prefixCls:a,type:t,icon:o},i)}))}var oe=globalThis&&globalThis.__rest||function(n,e){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(s[t[o]]=n[t[o]]);return s};const se=8,re=3,ae=r.forwardRef((n,e)=>{const{top:s,prefixCls:t,getContainer:o,maxCount:i,duration:d=re,rtl:v,transitionName:a,onAllRemoved:l}=n,{getPrefixCls:p,getPopupContainer:u}=r.useContext(M),c=t||p("message"),[,g]=_(c),f=()=>({left:"50%",transform:"translateX(-50%)",top:s??se}),m=()=>w(g,v?`${c}-rtl`:""),y=()=>Z(c,a),P=r.createElement("span",{className:`${c}-close-x`},r.createElement(U,{className:`${c}-close-icon`})),[b,$]=J({prefixCls:c,style:f,className:m,motion:y,closable:!1,closeIcon:P,duration:d,getContainer:()=>(o==null?void 0:o())||(u==null?void 0:u())||document.body,maxCount:i,onAllRemoved:l});return r.useImperativeHandle(e,()=>Object.assign(Object.assign({},b),{prefixCls:c,hashId:g})),$});let N=0;function R(n){const e=r.useRef(null);return[r.useMemo(()=>{const t=a=>{var l;(l=e.current)===null||l===void 0||l.close(a)},o=a=>{if(!e.current){const O=()=>{};return O.then=()=>{},O}const{open:l,prefixCls:p,hashId:u}=e.current,c=`${p}-notice`,{content:g,icon:f,type:m,key:y,className:P,onClose:b}=a,$=oe(a,["content","icon","type","key","className","onClose"]);let x=y;return x==null&&(N+=1,x=`antd-message-${N}`),j(O=>(l(Object.assign(Object.assign({},$),{key:x,content:r.createElement(A,{prefixCls:p,type:m,icon:f},g),placement:"top",className:w(m&&`${c}-${m}`,u,P),onClose:()=>{b==null||b(),O()}})),()=>{t(x)}))},d={open:o,destroy:a=>{var l;a!==void 0?t(a):(l=e.current)===null||l===void 0||l.destroy()}};return["info","success","warning","error","loading"].forEach(a=>{const l=(p,u,c)=>{let g;p&&typeof p=="object"&&"content"in p?g=p:g={content:p};let f,m;typeof u=="function"?m=u:(f=u,m=c);const y=Object.assign(Object.assign({onClose:m,duration:f},g),{type:a});return o(y)};d[a]=l}),d},[]),r.createElement(ae,Object.assign({key:"message-holder"},n,{ref:e}))]}function ie(n){return R(n)}let C=null,h=n=>n(),E=[],I={};function le(){const{prefixCls:n,getContainer:e,duration:s,rtl:t,maxCount:o,top:i}=I,d=n??T().getPrefixCls("message"),v=(e==null?void 0:e())||document.body;return{prefixCls:d,container:v,duration:s,rtl:t,maxCount:o,top:i}}const ce=r.forwardRef((n,e)=>{const s=()=>{const{prefixCls:u,container:c,maxCount:g,duration:f,rtl:m,top:y}=le();return{prefixCls:u,getContainer:()=>c,maxCount:g,duration:f,rtl:m,top:y}},[t,o]=r.useState(s),[i,d]=R(t),v=T(),a=v.getRootPrefixCls(),l=v.getIconPrefixCls(),p=()=>{o(s)};return r.useEffect(p,[]),r.useImperativeHandle(e,()=>{const u=Object.assign({},i);return Object.keys(u).forEach(c=>{u[c]=function(){return p(),i[c].apply(i,arguments)}}),{instance:u,sync:p}}),r.createElement(K,{prefixCls:a,iconPrefixCls:l},d)});function S(){if(!C){const n=document.createDocumentFragment(),e={fragment:n};C=e,h(()=>{Y(r.createElement(ce,{ref:s=>{const{instance:t,sync:o}=s||{};Promise.resolve().then(()=>{!e.instance&&t&&(e.instance=t,e.sync=o,S())})}}),n)});return}C.instance&&(E.forEach(n=>{const{type:e,skipped:s}=n;if(!s)switch(e){case"open":{h(()=>{const t=C.instance.open(Object.assign(Object.assign({},I),n.config));t==null||t.then(n.resolve),n.setCloseFn(t)});break}case"destroy":h(()=>{C==null||C.instance.destroy(n.key)});break;default:h(()=>{var t;const o=(t=C.instance)[e].apply(t,B(n.args));o==null||o.then(n.resolve),n.setCloseFn(o)})}}),E=[])}function ue(n){I=Object.assign(Object.assign({},I),n),h(()=>{var e;(e=C==null?void 0:C.sync)===null||e===void 0||e.call(C)})}function pe(n){const e=j(s=>{let t;const o={type:"open",config:n,resolve:s,setCloseFn:i=>{t=i}};return E.push(o),()=>{t?h(()=>{t()}):o.skipped=!0}});return S(),e}function de(n,e){const s=j(t=>{let o;const i={type:n,args:e,resolve:t,setCloseFn:d=>{o=d}};return E.push(i),()=>{o?h(()=>{o()}):i.skipped=!0}});return S(),s}function ge(n){E.push({type:"destroy",key:n}),S()}const me=["success","info","warning","error","loading"],fe={open:pe,destroy:ge,config:ue,useMessage:ie,_InternalPanelDoNotUseOrYouWillBeFired:te},D=fe;me.forEach(n=>{D[n]=function(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return de(n,s)}});const xe=D;export{xe as m};