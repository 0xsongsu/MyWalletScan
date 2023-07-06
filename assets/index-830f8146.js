import{r as e,j as a}from"./index-11fb5c98.js";import{C as L,a as re}from"./axios-4f7dbae2.js";import{u as se,r as ae,b as A,c as ne,S as oe,R as ie,C as ce,d as le,I as de}from"./index-d7eca782.js";import{l as ge,P as me,r as pe,k as he,C as H,e as k,Z as ue,$ as fe,E as xe}from"./EditOutlined-d581a128.js";import{P as Se}from"./index-8c7352a9.js";import{T as ve}from"./index-89e31de5.js";const T=e.createContext("default"),G=t=>{let{children:i,size:n}=t;const r=e.useContext(T);return e.createElement(T.Provider,{value:n||r},i)},ye=t=>{const{antCls:i,componentCls:n,iconCls:r,avatarBg:o,avatarColor:j,avatarSizeBase:p,avatarSizeLG:v,avatarSizeSM:h,avatarFontSizeBase:S,avatarFontSizeLG:c,avatarFontSizeSM:b,borderRadius:C,borderRadiusLG:z,borderRadiusSM:s,lineWidth:d,lineType:E}=t,u=(l,f,y)=>({width:l,height:l,lineHeight:`${l-d*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:y},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:f,[`> ${r}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},pe(t)),{position:"relative",display:"inline-block",overflow:"hidden",color:j,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${d}px ${E} transparent`,["&-image"]:{background:"transparent"},[`${i}-image-img`]:{display:"block"}}),u(p,S,C)),{["&-lg"]:Object.assign({},u(v,c,z)),["&-sm"]:Object.assign({},u(h,b,s)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},be=t=>{const{componentCls:i,avatarGroupBorderColor:n,avatarGroupSpace:r}=t;return{[`${i}-group`]:{display:"inline-flex",[`${i}`]:{borderColor:n},["> *:not(:first-child)"]:{marginInlineStart:r}}}},F=ge("Avatar",t=>{const{colorTextLightSolid:i,controlHeight:n,controlHeightLG:r,controlHeightSM:o,fontSize:j,fontSizeLG:p,fontSizeXL:v,fontSizeHeading3:h,marginXS:S,colorBorderBg:c,colorTextPlaceholder:b}=t,C=me(t,{avatarBg:b,avatarColor:i,avatarSizeBase:n,avatarSizeLG:r,avatarSizeSM:o,avatarFontSizeBase:Math.round((p+v)/2),avatarFontSizeLG:h,avatarFontSizeSM:j,avatarGroupSpace:-S,avatarGroupBorderColor:c});return[ye(C),be(C)]});var Ce=globalThis&&globalThis.__rest||function(t,i){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&i.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)i.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};const je=(t,i)=>{const n=e.useContext(T),[r,o]=e.useState(1),[j,p]=e.useState(!1),[v,h]=e.useState(!0),S=e.useRef(null),c=e.useRef(null),b=he(i,S),{getPrefixCls:C}=e.useContext(H),z=()=>{if(!c.current||!S.current)return;const m=c.current.offsetWidth,x=S.current.offsetWidth;if(m!==0&&x!==0){const{gap:O=4}=t;O*2<x&&o(x-O*2<m?(x-O*2)/m:1)}};e.useEffect(()=>{p(!0)},[]),e.useEffect(()=>{h(!0),o(1)},[t.src]),e.useEffect(()=>{z()},[t.gap]);const s=()=>{const{onError:m}=t;(m?m():void 0)!==!1&&h(!1)},{prefixCls:d,shape:E="circle",size:u="default",src:l,srcSet:f,icon:y,className:V,rootClassName:K,alt:X,draggable:q,children:B,crossOrigin:D}=t,w=Ce(t,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),g=u==="default"?n:u,U=Object.keys(typeof g=="object"?g||{}:{}).some(m=>["xs","sm","md","lg","xl","xxl"].includes(m)),I=se(U),Z=e.useMemo(()=>{if(typeof g!="object")return{};const m=ae.find(O=>I[O]),x=g[m];return x?{width:x,height:x,lineHeight:`${x}px`,fontSize:y?x/2:18}:{}},[I,g]),$=C("avatar",d),[J,Q]=F($),Y=k({[`${$}-lg`]:g==="large",[`${$}-sm`]:g==="small"}),N=e.isValidElement(l),ee=k($,Y,{[`${$}-${E}`]:!!E,[`${$}-image`]:N||l&&v,[`${$}-icon`]:!!y},V,K,Q),te=typeof g=="number"?{width:g,height:g,lineHeight:`${g}px`,fontSize:y?g/2:18}:{};let R;if(typeof l=="string"&&v)R=e.createElement("img",{src:l,draggable:q,srcSet:f,onError:s,alt:X,crossOrigin:D});else if(N)R=l;else if(y)R=y;else if(j||r!==1){const m=`scale(${r}) translateX(-50%)`,x={msTransform:m,WebkitTransform:m,transform:m},O=typeof g=="number"?{lineHeight:`${g}px`}:{};R=e.createElement(ue,{onResize:z},e.createElement("span",{className:`${$}-string`,ref:c,style:Object.assign(Object.assign({},O),x)},B))}else R=e.createElement("span",{className:`${$}-string`,style:{opacity:0},ref:c},B);return delete w.onError,delete w.gap,J(e.createElement("span",Object.assign({},w,{style:Object.assign(Object.assign(Object.assign({},te),Z),w.style),className:ee,ref:b}),R))},ze=e.forwardRef(je),_=ze,$e=t=>{const{getPrefixCls:i,direction:n}=e.useContext(H),{prefixCls:r,className:o,rootClassName:j,maxCount:p,maxStyle:v,size:h}=t,S=i("avatar",r),c=`${S}-group`,[b,C]=F(S),z=k(c,{[`${c}-rtl`]:n==="rtl"},o,j,C),{children:s,maxPopoverPlacement:d="top",maxPopoverTrigger:E="hover"}=t,u=fe(s).map((f,y)=>xe(f,{key:`avatar-key-${y}`})),l=u.length;if(p&&p<l){const f=u.slice(0,p),y=u.slice(p,l);return f.push(e.createElement(Se,{key:"avatar-popover-key",content:y,trigger:E,placement:d,overlayClassName:`${c}-popover`},e.createElement(_,{style:v},`+${l-p}`))),b(e.createElement(G,{size:h},e.createElement("div",{className:z,style:t.style},f)))}return b(e.createElement(G,{size:h},e.createElement("div",{className:z,style:t.style},u)))},Ee=$e,W=_;W.Group=Ee;const Oe=W,{Search:Re}=de,{Meta:we}=L,{Text:P}=ve,{Option:M}=A,Ge=()=>{const[t,i]=e.useState([]),[n,r]=e.useState(""),[o,j]=e.useState(1),[p,v]=e.useState(!1),[h,S]=e.useState("Time"),c=(s,d,E)=>{v(!0);const u=encodeURIComponent(s),l=`https://api.mirrorbeats.xyz/mirror/Mirror/search?page=${d}&keyword=${u}&sort=${E}`;re.get(l).then(f=>{console.log(f),i(f.data.data)}).catch(f=>{console.log(f)}).finally(()=>{v(!1)})},b=s=>{const d=s||"空投";r(d),c(d,o,h)},C=s=>{j(s),c(n||"空投",s,h)},z=s=>{S(s),c(n,o,s)};return a.jsxs("div",{style:{padding:"20px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[a.jsx(Re,{placeholder:"输入你想要查询的Mirror关键词",onSearch:b,enterButton:!0,style:{width:"70%",marginRight:"10px"}}),a.jsxs(A,{placeholder:"选择排序方式",defaultValue:h,style:{width:120},onChange:z,children:[a.jsx(M,{value:"Relevance",children:"Relevance"}),a.jsx(M,{value:"Time",children:"Time"})]}),a.jsx(ne,{current:o,onChange:C,total:50,style:{flex:"none"}})]}),p?a.jsx(oe,{size:"large",style:{display:"block",margin:"0 auto"}}):t.length>0?a.jsx(ie,{gutter:[16,16],children:t.map(s=>a.jsx(ce,{span:6,children:a.jsx("a",{href:s.link,target:"_blank",rel:"noreferrer",children:a.jsx(L,{style:{borderRadius:"15px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",width:"100%",padding:"10px",marginBottom:"20px"},hoverable:!0,children:a.jsx(we,{title:a.jsx(P,{style:{fontWeight:"bold",fontSize:"16px",whiteSpace:"normal"},children:s.title}),description:a.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[a.jsxs("div",{children:[a.jsx(P,{strong:!0,children:"作者: "}),s.nickname,a.jsx("br",{}),a.jsx(P,{strong:!0,children:"创建时间: "}),new Date(s.creat_time*1e3).toLocaleString()]}),a.jsx("div",{style:{marginLeft:"10px"},children:a.jsx(Oe,{src:s.avatar,size:64,onError:d=>{d.target.src="https://image.theblockbeats.info/icon/mirrorLogo.jpeg"}})})]})})},s.id)})}))}):a.jsx(le,{description:"Nothing"})]})};export{Ge as default};