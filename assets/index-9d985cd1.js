import{r as c,j as s}from"./index-45d1e58a.js";import{S as ie,n as H}from"./FileSaver.min-363414b7.js";import{g as R}from"./getZksTasks-32cff991.js";import{F as k,T as Z,a as le}from"./index-901f4d82.js";import{S as d,I as ce,E as de,a as ue}from"./index-fa4e2ac6.js";import{C as pe}from"./axios-5c2c9f37.js";import{J as $,L as he}from"./EditOutlined-4d29251f.js";import{L as fe}from"./index-28ee721c.js";import{m as Q}from"./index-e02b9821.js";import"./index-f81d5d78.js";const{Content:me}=fe;function ze(){c.useState(0),c.useState(0),c.useState(!1),c.useState({});const[f,j]=c.useState([]);c.useState(!1),c.useState(!1),k.useForm(),k.useForm();const[m,C]=c.useState([]);k.useForm(),c.useState(!1);const[S,x]=c.useState(!1),[U,b]=c.useState(!1),[y,v]=c.useState(new Map),[V,g]=c.useState([]),[X,Y]=c.useState(!1),[q,G]=c.useState(0),[w,W]=c.useState(!1),z="0x2da10a1e27bf85cedd8ffb1abbe97e53391c0295",F="0x8B791913eB07C32779a16750e3868aA8495F5964",E="0xb9061E38FeE7d30134F56aEf7117E2F6d1580666",P="0xbE7D1FD1f6748bbDefC4fbaCafBb11C6Fc506d1d",_="0x6e2B76966cbD9cF4cC2Fa0D76d24d5241E0ABC2F",I="0x9606eC131EeC0F84c95D82c9a63959F2331cF2aC",D="0x5B91962F5ECa75E6558E4d32Df69B30f75cc6FE5",A="0xCBE2093030F485adAaf5b61deb4D9cA8ADEAE509",B="0xd999E16e68476bC749A28FC14a0c3b6d7073F50c",L="0xC5db68F30D21cBe0C9Eac7BE5eA83468d69297e6",T="0x1BbD33384869b30A323e15868Ce46013C82B86FB",O="0x39e098a153ad69834a9dac32f0fca92066ad03f4",N="0x6C31035D62541ceba2Ac587ea09891d1645D6D07",M="0x84d05333f1F5Bf1358c3f63A113B1953C427925D",J="0x36A1aCbbCAfca2468b85011DDD16E7Cb4d673230",ee=()=>{W(!w)},re=()=>w?s.jsx(de,{}):s.jsx(ue,{}),se=async()=>{try{const e=[...f],r=[];for(let n of e)r.push(()=>new Promise(a=>{const t=u(n.address,z);n.sync=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,F);n.mute=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,E);n.okx=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,P);n.spacefi=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,_);n._1inch=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,I);n.izumi=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,D);n.rollup=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,A);n.zns=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,B);n.velo=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,L);n.rf=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,T);n.eralend=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,O);n.mav=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,N);n.veSync=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,M);n.usdp=t,a()})),r.push(()=>new Promise(a=>{const t=u(n.address,J);n.ooe=t,a()}));await Promise.all(r.map(n=>n())),g([...e]),localStorage.setItem("addresses",JSON.stringify(e))}catch(e){console.error(e)}finally{x(!1)}},te=async()=>{if(!m.length){H.error({message:"错误",description:"请先选择要刷新的地址"},2);return}x(!0);try{const e=[...f],r=[];for(let n of m){const a=e.findIndex(t=>t.key===n);if(a!==-1){const t=e[a],h=new Map,l=await R(t.address);h.set(t.address,l),v(h),await new Promise(o=>{setTimeout(()=>{o()},200)}),r.push(()=>new Promise(o=>{const i=p(l,z);t.sync=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,F);t.mute=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,E);t.okx=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,P);t.spacefi=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,_);t._1inch=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,I);t.izumi=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,D);t.rollup=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,A);t.zns=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,B);t.velo=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,L);t.rf=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,T);t.eralend=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,O);t.mav=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,N);t.veSync=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,M);t.usdp=i,o()})),r.push(()=>new Promise(o=>{const i=p(l,J);t.ooe=i,o()}))}}await Promise.all(r.map(n=>n())),g([...e]),localStorage.setItem("addresses",JSON.stringify(e)),Q.success("刷新成功")}catch(e){H.error({message:"错误",description:e.message},2)}finally{x(!1),C([])}},u=(e,r)=>{r=r.toLowerCase();const n=y.get(e);return n==null?(Q.info("等待数据加载完成再刷新"),"error"):n.reduce((t,h)=>h===r?t+1:t,0)},p=(e,r)=>(r=r.toLowerCase(),e.reduce((a,t)=>t===r?a+1:a,0));c.useEffect(()=>{const e=()=>{G(window.innerHeight-180)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),c.useEffect(()=>{b(!0);const e=localStorage.getItem("addresses");e&&(j(JSON.parse(e)),g(JSON.parse(e))),(async()=>{const n=JSON.parse(e);if(!n)return;const a=new Map,t=[];for(const h of n){const l=h.address,o=R(l).then(i=>{a.set(l,i)}).catch(i=>{console.error(`Error fetching tasks for address ${l}:`,i)});t.push(o)}try{await Promise.all(t),b(!1),v(a)}catch(h){console.error("Error fetching task contracts:",h)}})()},[]),c.useEffect(()=>{!X&&f.length>0&&y.size>0&&(se(),Y(!0))},[f,y]);const ne={selectedRowKeys:m,onChange:e=>{C(e)}},[ae,K]=c.useState(null),oe=[{title:"#",key:"index",align:"center",render:(e,r,n)=>n+1,width:34.5},{title:"备注",dataIndex:"name",key:"name",align:"center",render:(e,r)=>r.key===ae?s.jsx(ce,{placeholder:"请输入备注",defaultValue:e,onPressEnter:a=>{r.name=a.target.value,j([...f]),localStorage.setItem("addresses",JSON.stringify(f)),K(null)}}):s.jsxs(s.Fragment,{children:[s.jsx(le,{color:"blue",children:e}),s.jsx($,{shape:"circle",icon:s.jsx(he,{}),size:"small",onClick:()=>K(r.key)})]}),width:70},{title:s.jsxs("span",{children:["钱包地址",s.jsx("span",{onClick:ee,style:{marginLeft:8,cursor:"pointer"},children:re()})]}),dataIndex:"address",key:"address",align:"center",render:e=>w?"***":e,width:175},{title:"最后交易",dataIndex:"zks2_last_tx",key:"zks2_last_tx",align:"center",render:(e,r)=>{let n="inherit";return e===null?s.jsx(d,{}):(e.includes("周")?n="red":n="#1677ff",s.jsx("a",{href:"https://explorer.zksync.io/address/"+r.address,target:"_blank",style:{color:n},children:e}))},width:60},{title:"zkSyncEra Task List",key:"zks_era_group",className:"zks_era",children:[{title:s.jsx("a",{href:"https://syncswap.xyz",target:"_blank",rel:"noopener noreferrer",children:"SyncSwap"}),dataIndex:"sync",key:"sync",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.sync===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://app.mute.io/swap",target:"_blank",rel:"noopener noreferrer",children:"Mute.io"}),dataIndex:"mute",key:"mute",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.mute===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://www.okx.com/cn/web3/dex",target:"_blank",rel:"noopener noreferrer",children:"OKXSwap"}),dataIndex:"okx",key:"okx",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.okx===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://swap-zksync.spacefi.io/#/swap",target:"_blank",rel:"noopener noreferrer",children:"Spacefi"}),dataIndex:"spacefi",key:"spacefi",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.spacefi===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://app.1inch.io",target:"_blank",rel:"noopener noreferrer",children:"1inch"}),dataIndex:"_1inch",key:"_1inch",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r._1inch===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://izumi.finance/trade/swap",target:"_blank",rel:"noopener noreferrer",children:"izumi"}),dataIndex:"izumi",key:"izumi",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.izumi===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://app.vesync.finance/swap",target:"_blank",rel:"noopener noreferrer",children:"veSync"}),dataIndex:"veSync",key:"veSync",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.veSync===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://app.mav.xyz/?chain=324",target:"_blank",rel:"noopener noreferrer",children:"Maverick"}),dataIndex:"mav",key:"mav",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.mav===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://zks.network/",target:"_blank",rel:"noopener noreferrer",children:"zns"}),dataIndex:"zns",key:"zns",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.zns===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://app.velocore.xyz/swap",target:"_blank",rel:"noopener noreferrer",children:"velocore"}),dataIndex:"velo",key:"velo",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.velo===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://app.reactorfusion.xyz/",target:"_blank",rel:"noopener noreferrer",children:"Reactor"}),dataIndex:"rf",key:"rf",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.rf===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://app.eralend.com/",target:"_blank",rel:"noopener noreferrer",children:"eraLend"}),dataIndex:"eralend",key:"eralend",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.eralend===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://app.overnight.fi/stats?tabName=zksync",target:"_blank",rel:"noopener noreferrer",children:"USD+"}),dataIndex:"usdp",key:"usdp",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.usdp===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:s.jsx("a",{href:"https://app.openocean.finance/CLASSIC#/ZKSYNC/ETH/USDC",target:"_blank",rel:"noopener noreferrer",children:"OpenOcean"}),dataIndex:"ooe",key:"ooe",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.ooe===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(d,{}):e}),width:60},{title:"进度",dataIndex:"progress",key:"progress",align:"center",sorter:(e,r)=>e.progress-r.progress,render:(e,r)=>{const n=["sync","mute","okx","spacefi","_1inch","izumi","zns","velo","rf","eralend","mav","veSync","usdp"],t=n.reduce((l,o)=>r[o]>0?l+1:l,0)/n.length*100;r.progress=t;const h=`rgba(64, 64, 64, ${t/100})`;return{children:s.jsx("span",{children:e===null?s.jsx(d,{}):`${t.toFixed(2)}%`}),props:{style:{background:h}}}},width:60}]}];return s.jsx("div",{children:s.jsx(me,{children:s.jsx(d,{spinning:U,children:s.jsx(Z,{rowSelection:ne,dataSource:V,pagination:!1,bordered:!0,style:{marginBottom:"0px",zIndex:2},size:"small",columns:oe,scroll:{y:q},summary:e=>{e.forEach(({eth_balance:r,zks1_balance:n,zks2_balance:a,zks2_usdcBalance:t,totalFee:h})=>{}),Array(10).fill().map((r,n)=>s.jsx(Z.Summary.Cell,{index:n+6}))},footer:()=>s.jsx(pe,{children:s.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",gap:"10px"},children:s.jsx($,{type:"primary",onClick:te,loading:S,size:"large",style:{width:"20%"},icon:s.jsx(ie,{}),children:S?"正在刷新":"刷新选中地址"})})})})})})})}export{ze as default};
