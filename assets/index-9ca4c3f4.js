import{r as c,j as e}from"./index-45d1e58a.js";import{U as he,D as pe,e as ue}from"./save_excel-fefe8d17.js";import{a as xe,C as ye}from"./axios-5c2c9f37.js";import{F as o,a as H,T as fe}from"./index-901f4d82.js";import{M as K,P as Y,D as U}from"./DeleteOutlined-26a7869d.js";import{I as x,S as f,P as ge,E as Ie,a as je}from"./index-fa4e2ac6.js";import{S as R}from"./index-f81d5d78.js";import{A as ke,_ as be,J as d,L as Se}from"./EditOutlined-4d29251f.js";import{L as we}from"./index-28ee721c.js";import{S as Ce,n as E}from"./FileSaver.min-363414b7.js";import"./index-294e7c85.js";var ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M320 224h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-60 508h-80V292h80v440zm644-436h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8zm-60 364h-80V364h80v296zM612 404h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8zm-60 145a3 3 0 01-3 3h-74a3 3 0 01-3-3v-74a3 3 0 013-3h74a3 3 0 013 3v74z"}}]},name:"sliders",theme:"outlined"};const Fe=ve;var Ee=function(i,T){return c.createElement(ke,be({},i,{ref:T,icon:Fe}))};const Ae=c.forwardRef(Ee),z={bsc:"https://api.bscscan.com",ftm:"https://api.ftmscan.com",metis:"https://andromeda-explorer.metis.io",avax:"https://api.snowtrace.io",matic:"https://api.polygonscan.com",arb:"https://api.arbiscan.io",op:"https://api-optimistic.etherscan.io",eth:"https://api.etherscan.io"},Te={bsc:["IHA6XUNGC9A8CS1EVB4ZKMMNCEVWQYWGNF","35GX1RBQBNKDSS2QFF8YZ9IJ4MUPD8FBV4","KD21NU93H2696XZGUE6IIZX291V2291WBZ"],ftm:["7NS7WM87WNYTDWXFRUP1QFVEGEMEWWTT1R","JUEKUR5XBG5Z4WQUV71IZHJCPGVWADGHY3","YCTIQFTS8AXJQVE84CYY2FSGU9JYHWTEMN"],metis:[null],avax:["XZVMR1A53KHXIEZV2X5QYZ2GSYFDDHUGVS","PX4ZC7BFCMF51E7DC7JKDWERHYCW8JNPM7","B4XCRBZYZX26NGZG1XJB7UIDGDWF8TYSHT"],matic:["5N7B38PZTENUK44XDF3WUPFFN68ICZ87Y3","SIKU51V7YGAYUZF8HJ7R5FE6WHBP4Z6VEI","SMIPK99XJR9IXRSSCDHWJB8CT4YKTKJC4E"],arb:["FTAT7G2F45P8VNVQG66SGF7T4TS6R2QFGY","MXKDX8ZX8H5P34WFXFZF1YEPA6X6DDIV5R","WBCVFF7GVC4XJZFMS3EZJVVPMAH14IT7SU"],op:["C8JSVBMBI2NBBYWUJ99ZR2QCQ8GB33NFGB"],eth:["FPFT5EGK6F4JS97IA4E8SI24UN559W53VI","XHSCQN5JZHT4WY1JCATJTN4IDGX2PU6WHH","ADX2IDIUKD57WAM1GN6YA9E9Y9R3W5CXMC"]};let X={};async function P(l,i){console.log(i);const T=Object.keys(z).map(async m=>{try{const h=z[m];let p;if(i&&m in i&&i[m])p=i[m];else{const y=Te[m],v=Math.floor(Math.random()*y.length);p=y[v]}let w=0;l=l.toLowerCase();let M;p===null?M=`${h}/api?module=account&action=txlist&address=${l}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc`:M=`${h}/api?module=account&action=txlist&address=${l}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=${p}`;const C=await xe.get(M);for(let y=0;y<C.data.result.length;y++){const v=C.data.result[y].input.slice(0,10);C.data.result[y].from===l&&C.data.result[y].txreceipt_status==="1"&&["0x9fbf10fc","0x1114cd2a","0xc858f5f9","0x76a9099a","0x2e15238c","0xae30f6ee","0xc45dec27","0x2cdf0b95","0x879762e2","0x656f3d64","0x51905636","0xad660825","0xfe359a0d","0xca23bb4c","0x00000005"].includes(v)&&(w+=1)}return{net:m,tx:w}}catch(h){return console.log(h.message),{net:m,tx:"error"}}}),V=await Promise.all(T);let A=0;return V.forEach(({net:m,tx:h})=>{h!=="error"&&(A+=h),X[m]=h}),X.total=A,X}const{Content:Ve}=we,{TextArea:Me}=x,Ze=()=>{const[l,i]=c.useState([]),[T,V]=c.useState(!1),[A]=o.useForm(),[m]=o.useForm(),[h]=o.useForm(),[p,w]=c.useState([]),[M,C]=c.useState(!1),[y,v]=c.useState(!1),[W,J]=c.useState(!1),[L,_]=c.useState(!1),[O,G]=c.useState(localStorage.getItem("l0_api_key")),[Q,$]=c.useState(0),[N,q]=c.useState(!1),ee=()=>{q(!N)},te=()=>N?e.jsx(Ie,{}):e.jsx(je,{});c.useEffect(()=>{const t=()=>{$(window.innerHeight-180)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[]);const se=()=>{ue(l,"LayerZeroInfo")},ae=()=>{if(!p.length){E.error({message:"错误",description:"请先选择要删除的地址"},2);return}i(l.filter(t=>!p.includes(t.key))),localStorage.setItem("l0_addresses",JSON.stringify(l.filter(t=>!p.includes(t.key)))),w([])},ne=t=>{i(l.filter(n=>n.key!==t)),localStorage.setItem("l0_addresses",JSON.stringify(l.filter(n=>n.key!==t)))},le=async()=>{try{const t=await A.validateFields();if(t.address.startsWith("0x")||(t.address="0x"+t.address),t.address.length!==42){E.error({message:"错误",description:"请输入正确的EVM地址"},2);return}V(!1);const n=l.findIndex(a=>a.address===t.address);if(n!==-1){i(l.map((s,u)=>u===n?{...s,name:t.name}:s));const a=[...l];P(t.address,O).then(({arb:s,avax:u,bsc:r,eth:g,ftm:I,matic:j,metis:k,op:b,total:S})=>{a[n]={...a[n],arb:s,avax:u,bsc:r,eth:g,ftm:I,matic:j,metis:k,op:b,total:S},i(a),localStorage.setItem("l0_addresses",JSON.stringify(l))})}else{const a={key:l.length.toString(),name:t.name,address:t.address,arb:null,avax:null,bsc:null,eth:null,ftm:null,matic:null,metis:null,op:null,total:null},s=[...l,a];i(s),P(t.address,O).then(({arb:u,avax:r,bsc:g,eth:I,ftm:j,matic:k,metis:b,op:S,total:F})=>{a.arb=u,a.avax=r,a.bsc=g,a.eth=I,a.ftm=j,a.matic=k,a.metis=b,a.op=S,a.total=F,i([...s]),localStorage.setItem("l0_addresses",JSON.stringify(s))})}}catch(t){E.error({message:"错误",description:t.message},2)}finally{A.resetFields()}},re=async()=>{if(!p.length){E.error({message:"错误",description:"请先选择要刷新的地址"},2);return}C(!0);try{const t=[...l];for(let n of p){const a=t.findIndex(s=>s.key===n);if(a!==-1){const s=t[a];s.eth=null,s.bsc=null,s.ftm=null,s.matic=null,s.metis=null,s.op=null,s.arb=null,s.avax=null,s.total=null,i([...t]);const{arb:u,avax:r,bsc:g,eth:I,ftm:j,matic:k,metis:b,op:S,total:F}=await P(s.address,O);s.arb=u,s.avax=r,s.bsc=g,s.eth=I,s.ftm=j,s.matic=k,s.metis=b,s.op=S,s.total=F,i([...t]),localStorage.setItem("l0_addresses",JSON.stringify(l))}}}catch(t){E.error({message:"错误",description:t.message},2)}finally{C(!1),w([])}},ie=async()=>{try{const n=(await m.validateFields()).addresses.split(`
`),a=[...l];for(let s of n){if(s.startsWith("0x")||(s="0x"+s),s=s.trim(),s.length!==42){E.error({message:"错误",description:"请输入正确的地址"});continue}const u=a.findIndex(r=>r.address===s);if(u!==-1){const r=[...a],{arb:g,avax:I,bsc:j,eth:k,ftm:b,matic:S,metis:F,op:B,total:D}=await P(s,O);r[u]={...r[u],arb:g,avax:I,bsc:j,eth:k,ftm:b,matic:S,metis:F,op:B,total:D},i(r),localStorage.setItem("l0_addresses",JSON.stringify(r))}else{const r={key:a.length.toString(),address:s,arb:null,avax:null,bsc:null,eth:null,ftm:null,matic:null,metis:null,op:null,total:null};a.push(r),i(a);const{arb:g,avax:I,bsc:j,eth:k,ftm:b,matic:S,metis:F,op:B,total:D}=await P(s,O);r.arb=g,r.avax=I,r.bsc=j,r.eth=k,r.ftm=b,r.matic=S,r.metis=F,r.op=B,r.total=D,i([...a]),localStorage.setItem("l0_addresses",JSON.stringify(a))}}v(!1)}catch(t){E.error({message:"错误",description:t.message})}finally{m.resetFields(),w([])}},[oe,Z]=c.useState(null),ce=[{title:"#",key:"index",render:(t,n,a)=>a+1,align:"center",width:40},{title:"备注",dataIndex:"name",key:"name",align:"center",render:(t,n)=>n.key===oe?e.jsx(x,{placeholder:"请输入备注",defaultValue:t,onPressEnter:s=>{n.name=s.target.value,i([...l]),localStorage.setItem("l0_addresses",JSON.stringify(l)),Z(null)}}):e.jsxs(e.Fragment,{children:[e.jsx(H,{color:"blue",children:t}),e.jsx(d,{shape:"circle",icon:e.jsx(Se,{}),size:"small",onClick:()=>Z(n.key)})]}),width:80},{title:e.jsxs("span",{children:["钱包地址",e.jsx("span",{onClick:ee,style:{marginLeft:8,cursor:"pointer"},children:te()})]}),dataIndex:"address",key:"address",align:"center",render:(t,n)=>N?"***":t,width:350},{title:"ETH",dataIndex:"eth",key:"eth",render:(t,n)=>t===null?e.jsx(f,{}):t,align:"center",width:80},{title:"MATIC",dataIndex:"matic",key:"matic",render:(t,n)=>t===null?e.jsx(f,{}):t,align:"center",width:80},{title:"BSC",dataIndex:"bsc",key:"bsc",render:(t,n)=>t===null?e.jsx(f,{}):t,align:"center",width:80},{title:"ARB",dataIndex:"arb",key:"arb",width:80,render:(t,n)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"OP",dataIndex:"op",key:"op",width:80,render:(t,n)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"AVAX",dataIndex:"avax",key:"avax",width:80,render:(t,n)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"FTM",dataIndex:"ftm",key:"ftm",width:80,render:(t,n)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"METIS",dataIndex:"metis",key:"metis",width:80,render:(t,n)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"总Tx",dataIndex:"total",key:"total",width:80,render:(t,n)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"操作",key:"action",width:80,render:(t,n)=>e.jsx(R,{size:"small",children:e.jsx(Y,{title:"确定删除吗？",onConfirm:()=>ne(n.key),children:e.jsx(d,{icon:e.jsx(U,{})})})}),align:"center"}];c.useEffect(()=>{_(!0);const t=localStorage.getItem("l0_addresses");setTimeout(()=>{_(!1)},500),t&&i(JSON.parse(t))},[]);const de=()=>{localStorage.setItem("l0_api_key",JSON.stringify(h.getFieldsValue())),J(!1),G(JSON.parse(localStorage.getItem("l0_api_key")))};c.useEffect(()=>{const t=localStorage.getItem("l0_api_key");t&&(G(JSON.parse(t)),h.setFieldsValue(JSON.parse(t)))},[]);const me={selectedRowKeys:p,onChange:t=>{w(t)}};return e.jsx("div",{children:e.jsxs(Ve,{children:[e.jsx(K,{title:"批量添加地址",open:y,onOk:ie,onCancel:()=>{v(!1),m.resetFields()},okText:"添加地址",cancelText:"取消",children:e.jsx(o,{form:m,layout:"vertical",children:e.jsx(o.Item,{label:"地址",name:"addresses",rules:[{required:!0}],children:e.jsx(Me,{placeholder:"请输入地址，每行一个",style:{width:"500px",height:"200px"}})})})}),e.jsx(K,{title:"添加地址",open:T,onOk:le,onCancel:()=>V(!1),okText:"添加地址",cancelText:"取消",children:e.jsxs(o,{form:A,layout:"vertical",children:[e.jsx(o.Item,{label:"地址",name:"address",rules:[{required:!0}],children:e.jsx(x,{placeholder:"请输入地址"})}),e.jsx(o.Item,{label:"备注",name:"name",children:e.jsx(x,{placeholder:"请输入备注"})})]})}),e.jsx(K,{title:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"更换API Key"}),e.jsx("div",{style:{fontSize:"12px",color:"#888"},children:e.jsxs(R,{children:[e.jsx(d,{type:"link",onClick:()=>window.open("https://etherscan.io/myapikey","_blank"),children:"Eth"}),e.jsx(d,{type:"link",onClick:()=>window.open("https://polygonscan.com/myapikey","_blank"),children:"Matic"}),e.jsx(d,{type:"link",onClick:()=>window.open("https://bscscan.com/myapikey","_blank"),children:"Bsc"}),e.jsx(d,{type:"link",onClick:()=>window.open("https://arbiscan.io/myapikey","_blank"),children:"Arb"}),e.jsx(d,{type:"link",onClick:()=>window.open("https://optimistic.etherscan.io/myapikey","_blank"),children:"Op"}),e.jsx(d,{type:"link",onClick:()=>window.open("https://snowtrace.io/myapikey","_blank"),children:"Avax"}),e.jsx(d,{type:"link",onClick:()=>window.open("https://ftmscan.com/myapikey","_blank"),children:"Ftm"})]})})]}),open:W,onOk:de,onCancel:()=>J(!1),okText:"确定",cancelText:"取消",children:e.jsxs(o,{form:h,layout:"horizontal",children:[e.jsx(o.Item,{label:"Eth",name:"eth",children:e.jsx(x,{placeholder:"请输入Etherscan API Key"})}),e.jsx(o.Item,{label:"Polygon",name:"matic",children:e.jsx(x,{placeholder:"请输入Polygonscan API Key"})}),e.jsx(o.Item,{label:"Bsc",name:"bsc",children:e.jsx(x,{placeholder:"请输入Bscscan API Key"})}),e.jsx(o.Item,{label:"Arb",name:"arb",children:e.jsx(x,{placeholder:"请输入Arbitrumscan API Key"})}),e.jsx(o.Item,{label:"Op",name:"op",children:e.jsx(x,{placeholder:"请输入Optimismscan API Key"})}),e.jsx(o.Item,{label:"Avax",name:"avax",children:e.jsx(x,{placeholder:"请输入Avalanche API Key"})}),e.jsx(o.Item,{label:"Ftm",name:"ftm",children:e.jsx(x,{placeholder:"请输入Fantomscan API Key"})})]})}),e.jsx(H,{color:"blue",style:{marginBottom:"10px"},children:"获取数据使用的是作者的区块链浏览器API Key，用的人多可能会有卡顿报错的情况，如果有需要请自行更换API Key"}),e.jsx(f,{spinning:L,children:e.jsx(fe,{columns:ce,dataSource:l,rowSelection:me,pagination:!1,bordered:!0,size:"small",scroll:{y:Q}})}),e.jsx(ye,{children:e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[e.jsx(d,{type:"primary",onClick:()=>{V(!0)},size:"large",style:{width:"15%"},icon:e.jsx(ge,{}),children:"添加地址"}),e.jsx(d,{type:"primary",onClick:()=>{v(!0)},size:"large",style:{width:"15%"},icon:e.jsx(he,{}),children:"批量添加地址"}),e.jsx(d,{type:"primary",onClick:re,loading:M,size:"large",style:{width:"15%"},icon:e.jsx(Ce,{}),children:"刷新选中地址"}),e.jsx(Y,{title:"确认删除"+p.length+"个地址？",onConfirm:ae,children:e.jsx(d,{type:"primary",danger:!0,size:"large",style:{width:"15%"},icon:e.jsx(U,{}),children:"删除选中地址"})}),e.jsx(d,{type:"primary",onClick:()=>{J(!0)},size:"large",style:{width:"15%"},icon:e.jsx(Ae,{}),children:"更换API KEY"}),e.jsx(d,{type:"primary",icon:e.jsx(pe,{}),size:"large",style:{width:"8%"},onClick:se})]})})]})})};export{Ze as default};