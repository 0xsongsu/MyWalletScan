import{r,g as ht,j as O}from"./index-39a3281a.js";import{C as Le,a as vt}from"./axios-27349ab9.js";import{m as Ne,Y as xt,r as St,l as ve,C as pe,a2 as Et,a3 as Ct,e as Y,a4 as _e,a5 as xe,G as Me,a6 as Ot,A as He,_ as de,K as ue,a7 as De,a8 as wt,n as jt,a9 as $t,u as ce,aa as be,ab as Tt,ac as Be,ad as Rt,ae as we,U as zt,af as Pt,ag as Ae,ah as It,P as kt,R as Lt,O as Nt,ai as _t,M as Mt}from"./EditOutlined-8c5bf8a8.js";const he=r.createContext("default"),je=e=>{let{children:n,size:o}=e;const t=r.useContext(he);return r.createElement(he.Provider,{value:o||t},n)},Ht=e=>{const{antCls:n,componentCls:o,iconCls:t,avatarBg:s,avatarColor:p,avatarSizeBase:g,avatarSizeLG:l,avatarSizeSM:c,avatarFontSizeBase:m,avatarFontSizeLG:i,avatarFontSizeSM:b,borderRadius:h,borderRadiusLG:C,borderRadiusSM:f,lineWidth:x,lineType:T}=e,S=(v,d,w)=>({width:v,height:v,lineHeight:`${v-x*2}px`,borderRadius:"50%",[`&${o}-square`]:{borderRadius:w},[`${o}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${o}-icon`]:{fontSize:d,[`> ${t}`]:{margin:0}}});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},St(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:p,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:s,border:`${x}px ${T} transparent`,["&-image"]:{background:"transparent"},[`${n}-image-img`]:{display:"block"}}),S(g,m,h)),{["&-lg"]:Object.assign({},S(l,i,C)),["&-sm"]:Object.assign({},S(c,b,f)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Dt=e=>{const{componentCls:n,avatarGroupBorderColor:o,avatarGroupSpace:t}=e;return{[`${n}-group`]:{display:"inline-flex",[`${n}`]:{borderColor:o},["> *:not(:first-child)"]:{marginInlineStart:t}}}},We=Ne("Avatar",e=>{const{colorTextLightSolid:n,controlHeight:o,controlHeightLG:t,controlHeightSM:s,fontSize:p,fontSizeLG:g,fontSizeXL:l,fontSizeHeading3:c,marginXS:m,colorBorderBg:i,colorTextPlaceholder:b}=e,h=xt(e,{avatarBg:b,avatarColor:n,avatarSizeBase:o,avatarSizeLG:t,avatarSizeSM:s,avatarFontSizeBase:Math.round((g+l)/2),avatarFontSizeLG:c,avatarFontSizeSM:p,avatarGroupSpace:-m,avatarGroupBorderColor:i});return[Ht(h),Dt(h)]});var Bt=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const At=(e,n)=>{const o=r.useContext(he),[t,s]=r.useState(1),[p,g]=r.useState(!1),[l,c]=r.useState(!0),m=r.useRef(null),i=r.useRef(null),b=ve(n,m),{getPrefixCls:h}=r.useContext(pe),C=()=>{if(!i.current||!m.current)return;const P=i.current.offsetWidth,I=m.current.offsetWidth;if(P!==0&&I!==0){const{gap:V=4}=e;V*2<I&&s(I-V*2<P?(I-V*2)/P:1)}};r.useEffect(()=>{g(!0)},[]),r.useEffect(()=>{c(!0),s(1)},[e.src]),r.useEffect(()=>{C()},[e.gap]);const f=()=>{const{onError:P}=e;(P?P():void 0)!==!1&&c(!1)},{prefixCls:x,shape:T="circle",size:S="default",src:v,srcSet:d,icon:w,className:F,rootClassName:j,alt:G,draggable:$,children:y,crossOrigin:k}=e,M=Bt(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),E=S==="default"?o:S,H=Object.keys(typeof E=="object"?E||{}:{}).some(P=>["xs","sm","md","lg","xl","xxl"].includes(P)),R=Et(H),N=r.useMemo(()=>{if(typeof E!="object")return{};const P=Ct.find(V=>R[V]),I=E[P];return I?{width:I,height:I,lineHeight:`${I}px`,fontSize:w?I/2:18}:{}},[R,E]),_=h("avatar",x),[J,W]=We(_),U=Y({[`${_}-lg`]:E==="large",[`${_}-sm`]:E==="small"}),Z=r.isValidElement(v),te=Y(_,U,{[`${_}-${T}`]:!!T,[`${_}-image`]:Z||v&&l,[`${_}-icon`]:!!w},F,j,W),ne=typeof E=="number"?{width:E,height:E,lineHeight:`${E}px`,fontSize:w?E/2:18}:{};let K;if(typeof v=="string"&&l)K=r.createElement("img",{src:v,draggable:$,srcSet:d,onError:f,alt:G,crossOrigin:k});else if(Z)K=v;else if(w)K=w;else if(p||t!==1){const P=`scale(${t}) translateX(-50%)`,I={msTransform:P,WebkitTransform:P,transform:P},V=typeof E=="number"?{lineHeight:`${E}px`}:{};K=r.createElement(_e,{onResize:C},r.createElement("span",{className:`${_}-string`,ref:i,style:Object.assign(Object.assign({},V),I)},y))}else K=r.createElement("span",{className:`${_}-string`,style:{opacity:0},ref:i},y);return delete M.onError,delete M.gap,J(r.createElement("span",Object.assign({},M,{style:Object.assign(Object.assign(Object.assign({},ne),N),M.style),className:te,ref:b}),K))},Wt=r.forwardRef(At),Fe=Wt,Ft=e=>{const{getPrefixCls:n,direction:o}=r.useContext(pe),{prefixCls:t,className:s,rootClassName:p,maxCount:g,maxStyle:l,size:c}=e,m=n("avatar",t),i=`${m}-group`,[b,h]=We(m),C=Y(i,{[`${i}-rtl`]:o==="rtl"},s,p,h),{children:f,maxPopoverPlacement:x="top",maxPopoverTrigger:T="hover"}=e,S=xe(f).map((d,w)=>Me(d,{key:`avatar-key-${w}`})),v=S.length;if(g&&g<v){const d=S.slice(0,g),w=S.slice(g,v);return d.push(r.createElement(Ot,{key:"avatar-popover-key",content:w,trigger:T,placement:x,overlayClassName:`${i}-popover`},r.createElement(Fe,{style:l},`+${v-g}`))),b(r.createElement(je,{size:c},r.createElement("div",{className:C,style:e.style},d)))}return b(r.createElement(je,{size:c},r.createElement("div",{className:C,style:e.style},S)))},Kt=Ft,Ke=Fe;Ke.Group=Kt;const Vt=Ke;var Gt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const Ut=Gt;var Ve=function(n,o){return r.createElement(He,de(de({},n),{},{ref:o,icon:Ut}))};Ve.displayName="CopyOutlined";const Xt=r.forwardRef(Ve);var qt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const Jt=qt;var Ge=function(n,o){return r.createElement(He,de(de({},n),{},{ref:o,icon:Jt}))};Ge.displayName="EnterOutlined";const Yt=r.forwardRef(Ge);var Qt=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Zt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},en=r.forwardRef((e,n)=>{const o=m=>{const{keyCode:i}=m;i===ue.ENTER&&m.preventDefault()},t=m=>{const{keyCode:i}=m,{onClick:b}=e;i===ue.ENTER&&b&&b()},{style:s,noStyle:p,disabled:g}=e,l=Qt(e,["style","noStyle","disabled"]);let c={};return p||(c=Object.assign({},Zt)),g&&(c.pointerEvents="none"),c=Object.assign(Object.assign({},c),s),r.createElement("div",Object.assign({role:"button",tabIndex:0,ref:n},l,{onKeyDown:o,onKeyUp:t,style:c}))}),$e=en;var tn=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,o=[],t=0;t<e.rangeCount;t++)o.push(e.getRangeAt(t));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(s){e.addRange(s)}),n&&n.focus()}},nn=tn,Te={"text/plain":"Text","text/html":"Url",default:"Text"},on="Copy to clipboard: #{key}, Enter";function rn(e){var n=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}function sn(e,n){var o,t,s,p,g,l,c=!1;n||(n={}),o=n.debug||!1;try{s=nn(),p=document.createRange(),g=document.getSelection(),l=document.createElement("span"),l.textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(i){if(i.stopPropagation(),n.format)if(i.preventDefault(),typeof i.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var b=Te[n.format]||Te.default;window.clipboardData.setData(b,e)}else i.clipboardData.clearData(),i.clipboardData.setData(n.format,e);n.onCopy&&(i.preventDefault(),n.onCopy(i.clipboardData))}),document.body.appendChild(l),p.selectNodeContents(l),g.addRange(p);var m=document.execCommand("copy");if(!m)throw new Error("copy command was unsuccessful");c=!0}catch(i){o&&console.error("unable to copy using execCommand: ",i),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),c=!0}catch(b){o&&console.error("unable to copy using clipboardData: ",b),o&&console.error("falling back to prompt"),t=rn("message"in n?n.message:on),window.prompt(t,e)}}finally{g&&(typeof g.removeRange=="function"?g.removeRange(p):g.removeAllRanges()),l&&document.body.removeChild(l),s()}return c}var an=sn;const ln=ht(an),cn=(e,n,o,t)=>{const{sizeMarginHeadingVerticalEnd:s,fontWeightStrong:p}=t;return{marginBottom:s,color:o,fontWeight:p,fontSize:e,lineHeight:n}},dn=e=>{const n=[1,2,3,4,5],o={};return n.forEach(t=>{o[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=cn(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),o},un=e=>{const{componentCls:n}=e;return{"a&, a":Object.assign(Object.assign({},De(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},pn=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:wt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),fn=e=>{const{componentCls:n}=e,t=jt(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-t,marginBottom:`calc(1em - ${t}px)`},[`${n}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},gn=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),mn=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),yn=e=>{const{componentCls:n,sizeMarginHeadingVerticalStart:o}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${n}-secondary`]:{color:e.colorTextDescription},[`&${n}-success`]:{color:e.colorSuccess},[`&${n}-warning`]:{color:e.colorWarning},[`&${n}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},dn(e)),{[`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]:{marginTop:o},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:o}}}),pn(e)),un(e)),{[`
        ${n}-expand,
        ${n}-edit,
        ${n}-copy
      `]:Object.assign(Object.assign({},De(e)),{marginInlineStart:e.marginXXS})}),fn(e)),gn(e)),mn()),{"&-rtl":{direction:"rtl"}})}},Ue=Ne("Typography",e=>[yn(e)],{sizeMarginHeadingVerticalStart:"1.2em",sizeMarginHeadingVerticalEnd:"0.5em"}),bn=e=>{let{prefixCls:n,"aria-label":o,className:t,style:s,direction:p,maxLength:g,autoSize:l=!0,value:c,onSave:m,onCancel:i,onEnd:b,component:h,enterIcon:C=r.createElement(Yt,null)}=e;const f=r.useRef(null),x=r.useRef(!1),T=r.useRef(),[S,v]=r.useState(c);r.useEffect(()=>{v(c)},[c]),r.useEffect(()=>{if(f.current&&f.current.resizableTextArea){const{textArea:R}=f.current.resizableTextArea;R.focus();const{length:N}=R.value;R.setSelectionRange(N,N)}},[]);const d=R=>{let{target:N}=R;v(N.value.replace(/[\n\r]/g,""))},w=()=>{x.current=!0},F=()=>{x.current=!1},j=R=>{let{keyCode:N}=R;x.current||(T.current=N)},G=()=>{m(S.trim())},$=R=>{let{keyCode:N,ctrlKey:_,altKey:J,metaKey:W,shiftKey:U}=R;T.current===N&&!x.current&&!_&&!J&&!W&&!U&&(N===ue.ENTER?(G(),b==null||b()):N===ue.ESC&&i())},y=()=>{G()},k=h?`${n}-${h}`:"",[M,E]=Ue(n),H=Y(n,`${n}-edit-content`,{[`${n}-rtl`]:p==="rtl"},t,k,E);return M(r.createElement("div",{className:H,style:s},r.createElement($t,{ref:f,maxLength:g,value:S,onChange:d,onKeyDown:j,onKeyUp:$,onCompositionStart:w,onCompositionEnd:F,onBlur:y,"aria-label":o,rows:1,autoSize:l}),C!==null?Me(C,{className:`${n}-edit-content-confirm`}):null))},hn=bn;function ge(e,n){return r.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},n),o&&typeof e=="object"?e:null)]},[e])}const vn=(e,n)=>{const o=r.useRef(!1);r.useEffect(()=>{o.current?e():o.current=!0},n)},xn=vn;var Sn=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const En=r.forwardRef((e,n)=>{var{prefixCls:o,component:t="article",className:s,rootClassName:p,setContentRef:g,children:l,direction:c}=e,m=Sn(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction"]);const{getPrefixCls:i,direction:b}=r.useContext(pe),h=c??b;let C=n;g&&(C=ve(n,g));const f=i("typography",o),[x,T]=Ue(f),S=Y(f,{[`${f}-rtl`]:h==="rtl"},s,p,T);return x(r.createElement(t,Object.assign({className:S,ref:C},m),l))}),Xe=En;function qe(e){const n=typeof e;return n==="string"||n==="number"}function Cn(e){let n=0;return e.forEach(o=>{qe(o)?n+=String(o).length:n+=1}),n}function Re(e,n){let o=0;const t=[];for(let s=0;s<e.length;s+=1){if(o===n)return t;const p=e[s],l=qe(p)?String(p).length:1,c=o+l;if(c>n){const m=n-o;return t.push(String(p).slice(0,m)),t}t.push(p),o=c}return e}const On=0,ie=1,ze=2,me=3,Pe=4,wn=e=>{let{enabledMeasure:n,children:o,text:t,width:s,fontSize:p,rows:g,onEllipsis:l}=e;const[[c,m,i],b]=r.useState([0,0,0]),[h,C]=r.useState(On),[f,x]=r.useState(0),T=r.useRef(null),S=r.useRef(null),v=r.useMemo(()=>xe(t),[t]),d=r.useMemo(()=>Cn(v),[v]),w=r.useMemo(()=>!n||h!==me?o(v,!1):o(Re(v,m),m<d),[n,h,o,v,m,d]);ce(()=>{n&&s&&p&&d&&(C(ie),b([0,Math.ceil(d/2),d]))},[n,s,p,t,d,g]),ce(()=>{var $;h===ie&&x((($=T.current)===null||$===void 0?void 0:$.offsetHeight)||0)},[h]),ce(()=>{var $,y;if(f){if(h===ie){const k=(($=S.current)===null||$===void 0?void 0:$.offsetHeight)||0,M=g*f;k<=M?(C(Pe),l(!1)):C(ze)}else if(h===ze)if(c!==i){const k=((y=S.current)===null||y===void 0?void 0:y.offsetHeight)||0,M=g*f;let E=c,H=i;c===i-1?H=c:k<=M?E=m:H=m;const R=Math.ceil((E+H)/2);b([E,R,H])}else C(me),l(!0)}},[h,c,i,g,f]);const F={width:s,whiteSpace:"normal",margin:0,padding:0},j=($,y,k)=>r.createElement("span",{"aria-hidden":!0,ref:y,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(p/2)*2},k)},$),G=($,y)=>{const k=Re(v,$);return j(o(k,!0),y,F)};return r.createElement(r.Fragment,null,w,n&&h!==me&&h!==Pe&&r.createElement(r.Fragment,null,j("lg",T,{wordBreak:"keep-all",whiteSpace:"nowrap"}),h===ie?j(o(v,!1),S,F):G(m,S)))},jn=wn,$n=e=>{let{enabledEllipsis:n,isEllipsis:o,children:t,tooltipProps:s}=e;return!(s!=null&&s.title)||!n?t:r.createElement(be,Object.assign({open:o?void 0:!1},s),t)},Tn=$n;var Rn=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};function zn(e,n){let{mark:o,code:t,underline:s,delete:p,strong:g,keyboard:l,italic:c}=e,m=n;function i(b,h){h&&(m=r.createElement(b,{},m))}return i("strong",g),i("u",s),i("del",p),i("code",t),i("mark",o),i("kbd",l),i("i",c),m}function le(e,n,o){return e===!0||e===void 0?n:e||o&&n}function Ie(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const Pn="...",In=r.forwardRef((e,n)=>{var o,t,s;const{prefixCls:p,className:g,style:l,type:c,disabled:m,children:i,ellipsis:b,editable:h,copyable:C,component:f,title:x}=e,T=Rn(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:S,direction:v}=r.useContext(pe),[d]=Tt("Text"),w=r.useRef(null),F=r.useRef(null),j=S("typography",p),G=Be(T,["mark","code","delete","underline","strong","keyboard","italic"]),[$,y]=ge(h),[k,M]=Rt(!1,{value:y.editing}),{triggerType:E=["icon"]}=y,H=a=>{var u;a&&((u=y.onStart)===null||u===void 0||u.call(y)),M(a)};xn(()=>{var a;k||(a=F.current)===null||a===void 0||a.focus()},[k]);const R=a=>{a==null||a.preventDefault(),H(!0)},N=a=>{var u;(u=y.onChange)===null||u===void 0||u.call(y,a),H(!1)},_=()=>{var a;(a=y.onCancel)===null||a===void 0||a.call(y),H(!1)},[J,W]=ge(C),[U,Z]=r.useState(!1),te=r.useRef(),ne={};W.format&&(ne.format=W.format);const K=()=>{window.clearTimeout(te.current)},P=a=>{var u;a==null||a.preventDefault(),a==null||a.stopPropagation(),ln(W.text||String(i)||"",ne),Z(!0),K(),te.current=window.setTimeout(()=>{Z(!1)},3e3),(u=W.onCopy)===null||u===void 0||u.call(W,a)};r.useEffect(()=>K,[]);const[I,V]=r.useState(!1),[Se,Je]=r.useState(!1),[Ye,Qe]=r.useState(!1),[Ee,Ze]=r.useState(!1),[Ce,et]=r.useState(!1),[tt,nt]=r.useState(!0),[X,z]=ge(b,{expandable:!1}),B=X&&!Ye,{rows:Q=1}=z,oe=r.useMemo(()=>!B||z.suffix!==void 0||z.onEllipsis||z.expandable||$||J,[B,z,$,J]);ce(()=>{X&&!oe&&(V(we("webkitLineClamp")),Je(we("textOverflow")))},[oe,X]);const A=r.useMemo(()=>oe?!1:Q===1?Se:I,[oe,Se,I]),Oe=B&&(A?Ce:Ee),ot=B&&Q===1&&A,re=B&&Q>1&&A,rt=a=>{var u;Qe(!0),(u=z.onExpand)===null||u===void 0||u.call(z,a)},[st,at]=r.useState(0),[it,lt]=r.useState(0),ct=(a,u)=>{let{offsetWidth:L}=a;var D;at(L),lt(parseInt((D=window.getComputedStyle)===null||D===void 0?void 0:D.call(window,u).fontSize,10)||0)},dt=a=>{var u;Ze(a),Ee!==a&&((u=z.onEllipsis)===null||u===void 0||u.call(z,a))};r.useEffect(()=>{const a=w.current;if(X&&A&&a){const u=re?a.offsetHeight<a.scrollHeight:a.offsetWidth<a.scrollWidth;Ce!==u&&et(u)}},[X,A,i,re,tt]),r.useEffect(()=>{const a=w.current;if(typeof IntersectionObserver>"u"||!a||!A||!B)return;const u=new IntersectionObserver(()=>{nt(!!a.offsetParent)});return u.observe(a),()=>{u.disconnect()}},[A,B]);let q={};z.tooltip===!0?q={title:(o=y.text)!==null&&o!==void 0?o:i}:r.isValidElement(z.tooltip)?q={title:z.tooltip}:typeof z.tooltip=="object"?q=Object.assign({title:(t=y.text)!==null&&t!==void 0?t:i},z.tooltip):q={title:z.tooltip};const se=r.useMemo(()=>{const a=u=>["string","number"].includes(typeof u);if(!(!X||A)){if(a(y.text))return y.text;if(a(i))return i;if(a(x))return x;if(a(q.title))return q.title}},[X,A,x,q.title,Oe]);if(k)return r.createElement(hn,{value:(s=y.text)!==null&&s!==void 0?s:typeof i=="string"?i:"",onSave:N,onCancel:_,onEnd:y.onEnd,prefixCls:j,className:g,style:l,direction:v,component:f,maxLength:y.maxLength,autoSize:y.autoSize,enterIcon:y.enterIcon});const ut=()=>{const{expandable:a,symbol:u}=z;if(!a)return null;let L;return u?L=u:L=d==null?void 0:d.expand,r.createElement("a",{key:"expand",className:`${j}-expand`,onClick:rt,"aria-label":d==null?void 0:d.expand},L)},pt=()=>{if(!$)return;const{icon:a,tooltip:u}=y,L=xe(u)[0]||(d==null?void 0:d.edit),D=typeof L=="string"?L:"";return E.includes("icon")?r.createElement(be,{key:"edit",title:u===!1?"":L},r.createElement($e,{ref:F,className:`${j}-edit`,onClick:R,"aria-label":D},a||r.createElement(zt,{role:"button"}))):null},ft=()=>{if(!J)return;const{tooltips:a,icon:u}=W,L=Ie(a),D=Ie(u),ae=U?le(L[1],d==null?void 0:d.copied):le(L[0],d==null?void 0:d.copy),yt=U?d==null?void 0:d.copied:d==null?void 0:d.copy,bt=typeof ae=="string"?ae:yt;return r.createElement(be,{key:"copy",title:ae},r.createElement($e,{className:Y(`${j}-copy`,U&&`${j}-copy-success`),onClick:P,"aria-label":bt},U?le(D[1],r.createElement(Pt,null),!0):le(D[0],r.createElement(Xt,null),!0)))},gt=a=>[a&&ut(),pt(),ft()],mt=a=>[a&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Pn),z.suffix,gt(a)];return r.createElement(_e,{onResize:ct,disabled:!B||A},a=>r.createElement(Tn,{tooltipProps:q,enabledEllipsis:B,isEllipsis:Oe},r.createElement(Xe,Object.assign({className:Y({[`${j}-${c}`]:c,[`${j}-disabled`]:m,[`${j}-ellipsis`]:X,[`${j}-single-line`]:B&&Q===1,[`${j}-ellipsis-single-line`]:ot,[`${j}-ellipsis-multiple-line`]:re},g),prefixCls:p,style:Object.assign(Object.assign({},l),{WebkitLineClamp:re?Q:void 0}),component:f,ref:ve(a,w,n),direction:v,onClick:E.includes("text")?R:void 0,"aria-label":se==null?void 0:se.toString(),title:x},G),r.createElement(jn,{enabledMeasure:B&&!A,text:i,rows:Q,width:st,fontSize:it,onEllipsis:dt},(u,L)=>{let D=u;return u.length&&L&&se&&(D=r.createElement("span",{key:"show-content","aria-hidden":!0},D)),zn(e,r.createElement(r.Fragment,null,D,mt(L)))}))))}),fe=In;var kn=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Ln=r.forwardRef((e,n)=>{var{ellipsis:o,rel:t}=e,s=kn(e,["ellipsis","rel"]);const p=Object.assign(Object.assign({},s),{rel:t===void 0&&s.target==="_blank"?"noopener noreferrer":t});return delete p.navigate,r.createElement(fe,Object.assign({},p,{ref:n,ellipsis:!!o,component:"a"}))}),Nn=Ln,_n=r.forwardRef((e,n)=>r.createElement(fe,Object.assign({ref:n},e,{component:"div"}))),Mn=_n;var Hn=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Dn=(e,n)=>{var{ellipsis:o}=e,t=Hn(e,["ellipsis"]);const s=r.useMemo(()=>o&&typeof o=="object"?Be(o,["expandable","rows"]):o,[o]);return r.createElement(fe,Object.assign({ref:n},t,{ellipsis:s,component:"span"}))},Bn=r.forwardRef(Dn);var An=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Wn=[1,2,3,4,5],Fn=r.forwardRef((e,n)=>{const{level:o=1}=e,t=An(e,["level"]);let s;return Wn.includes(o)?s=`h${o}`:s="h1",r.createElement(fe,Object.assign({ref:n},t,{component:s}))}),Kn=Fn,ee=Xe;ee.Text=Bn;ee.Link=Nn;ee.Title=Kn;ee.Paragraph=Mn;const Vn=ee,{Search:Gn}=Mt,{Meta:Un}=Le,{Text:ye}=Vn,{Option:ke}=Ae,Yn=()=>{const[e,n]=r.useState([]),[o,t]=r.useState(""),[s,p]=r.useState(1),[g,l]=r.useState(!1),[c,m]=r.useState("Time"),i=(f,x,T)=>{l(!0);const S=encodeURIComponent(f),v=`https://api.mirrorbeats.xyz/mirror/Mirror/search?page=${x}&keyword=${S}&sort=${T}`;vt.get(v).then(d=>{console.log(d),n(d.data.data)}).catch(d=>{console.log(d)}).finally(()=>{l(!1)})},b=f=>{const x=f||"空投";t(x),i(x,s,c)},h=f=>{p(f),i(o||"空投",f,c)},C=f=>{m(f),i(o,s,f)};return O.jsxs("div",{style:{padding:"20px"},children:[O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[O.jsx(Gn,{placeholder:"输入你想要查询的Mirror关键词",onSearch:b,enterButton:!0,style:{width:"70%",marginRight:"10px"}}),O.jsxs(Ae,{placeholder:"选择排序方式",defaultValue:c,style:{width:120},onChange:C,children:[O.jsx(ke,{value:"Relevance",children:"Relevance"}),O.jsx(ke,{value:"Time",children:"Time"})]}),O.jsx(It,{current:s,onChange:h,total:50,style:{flex:"none"}})]}),g?O.jsx(kt,{size:"large",style:{display:"block",margin:"0 auto"}}):e.length>0?O.jsx(Lt,{gutter:[16,16],children:e.map(f=>O.jsx(Nt,{span:6,children:O.jsx("a",{href:f.link,target:"_blank",rel:"noreferrer",children:O.jsx(Le,{style:{borderRadius:"15px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",width:"100%",padding:"10px",marginBottom:"20px"},hoverable:!0,children:O.jsx(Un,{title:O.jsx(ye,{style:{fontWeight:"bold",fontSize:"16px",whiteSpace:"normal"},children:f.title}),description:O.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[O.jsxs("div",{children:[O.jsx(ye,{strong:!0,children:"作者: "}),f.nickname,O.jsx("br",{}),O.jsx(ye,{strong:!0,children:"创建时间: "}),new Date(f.creat_time*1e3).toLocaleString()]}),O.jsx("div",{style:{marginLeft:"10px"},children:O.jsx(Vt,{src:f.avatar,size:64,onError:x=>{x.target.src="https://image.theblockbeats.info/icon/mirrorLogo.jpeg"}})})]})})},f.id)})}))}):O.jsx(_t,{description:"Nothing"})]})};export{Yn as default};
