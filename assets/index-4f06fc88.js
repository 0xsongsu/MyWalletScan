import{a as R,i as de,d as me,u as ue,r as E,F as U,j as e,M as _e,m as H,e as d,n as fe,B as D,U as ge,k as M,P as V,D as J,o as he,I as te,L as ye,E as Q,c as q,K as pe,S as K,f as xe,T as Ce,h as be,R as Te,q as B,v as ke,p as Se,N as ve}from"./index-1660292c.js";import{d as Y}from"./deleteData-361f0f2e.js";import{m as we}from"./index-22d8b14b.js";async function X(i,a,s){const r=await R.post(i,a,{headers:s});let t=[];const n={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29500};return r.data.data.erc20TransferEvents.edges.forEach(l=>{const{transaction_hash:_,from_address:g,transfer_amount_display:u,transfer_from_address:p,transfer_to_address:w,from_erc20_identifier:k,main_call:P,timestamp:O,__typename:$}=l.node;t.push({transaction_hash:_,from_address:g,transfer_amount_display:u,transfer_from_address:p,transfer_to_address:w,from_erc20_identifier:k,timestamp:O,main_call:P,__typename:$,total_value:n.hasOwnProperty(k)?u*n[k]:0})}),{transfers:t,hasNextPage:r.data.data.erc20TransferEvents.pageInfo.hasNextPage,endCursor:r.data.data.erc20TransferEvents.pageInfo.endCursor}}async function Fe(i){const a="https://starkscan.stellate.sh/",s={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},r={query:`query ERC20TransferEventsTableQuery(
  $first: Int!
  $after: String
  $input: ERC20TransferEventsInput!
) {
  ...ERC20TransferEventsTablePaginationFragment_erc20TransferEvents_2DAjA4
}

fragment ERC20TransferEventsTablePaginationFragment_erc20TransferEvents_2DAjA4 on Query {
  erc20TransferEvents(first: $first, after: $after, input: $input) {
    edges {
      node {
        id
        ...ERC20TransferEventsTableRowFragment_erc20TransferEvent
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ERC20TransferEventsTableRowFragment_erc20TransferEvent on ERC20TransferEvent {
  id
  transaction_hash
  from_address
  from_erc20_identifier
  from_contract {
    is_social_verified
    id
  }
  transfer_from_address
  transfer_from_identifier
  transfer_from_contract {
    is_social_verified
    id
  }
  transfer_to_address
  transfer_to_identifier
  transfer_to_contract {
    is_social_verified
    id
  }
  transfer_amount
  transfer_amount_display
  timestamp
  main_call {
    selector_identifier
    id
  }
}
`,variables:{first:100,after:null,input:{transfer_from_or_to_address:i,sort_by:"timestamp",order_by:"desc"}}};let t=[],n=await X(a,r,s);for(t.push(...n.transfers);n.hasNextPage;)r.variables.after=n.endCursor,n=await X(a,r,s),t.push(...n.transfers);return t}async function Z(i,a,s){const r=await R.post(i,a,{headers:s});let t=[];return r.data.data.transactions.edges.forEach(n=>{const{actual_fee_display:l,initiator_address:_,initiator_identifier:g,nonce:u,calldata:p,main_calls:w,timestamp:k,transaction_hash:P}=n.node;t.push({actual_fee_display:l,initiator_address:_,initiator_identifier:g,nonce:u,calldata:p,main_calls:w,timestamp:k,transaction_hash:P,transfers:[]})}),{transactions:t,hasNextPage:r.data.data.transactions.pageInfo.hasNextPage,endCursor:r.data.data.transactions.pageInfo.endCursor}}async function je(i){const a="https://starkscan.stellate.sh/",s={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},r={query:`query TransactionsTableQuery(
  $first: Int!
  $after: String
  $input: TransactionsInput!
) {
  ...TransactionsTablePaginationFragment_transactions_2DAjA4
}

fragment TransactionsTableExpandedItemFragment_transaction on Transaction {
  entry_point_selector_name
  calldata_decoded
  entry_point_selector
  calldata
  initiator_address
  initiator_identifier
 actual_fee
  actual_fee_display
 main_calls {
    selector
    selector_name
    calldata_decoded
    selector_identifier
    calldata
    contract_address
    contract_identifier
    id
  }
}

fragment TransactionsTablePaginationFragment_transactions_2DAjA4 on Query {
  transactions(first: $first, after: $after, input: $input) {
    edges {
      node {
        id
        ...TransactionsTableRowFragment_transaction
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment TransactionsTableRowFragment_transaction on Transaction {
  id
  transaction_hash
  block_number
  transaction_status
  transaction_type
  timestamp
  nonce
 contract_address
  contract_identifier
 sender_address
  sender_identifier
 initiator_address
  initiator_identifier
  initiator {
    is_social_verified
    id
  }
  main_calls {
    selector_identifier
    id
  }
  ...TransactionsTableExpandedItemFragment_transaction
}
`,variables:{first:100,after:null,input:{initiator_address:i,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}};let t=[],n=await Z(a,r,s);for(t.push(...n.transactions);n.hasNextPage;)r.variables.after=n.endCursor,n=await Z(a,r,s),t.push(...n.transactions);const l=await Fe(i);return l.forEach(_=>{t.forEach(g=>{_.transaction_hash===g.transaction_hash&&g.transfers.push(_)})}),{transfers:l,transactions:t}}const ne=i=>{const a=new Date(i)*1e3,s=(new Date().getTime()-new Date(a).getTime())/1e3;if(s<60)return Math.round(s)+" 秒前";const r=s/60;if(r<60)return Math.round(r)+" 分前";const t=r/60;if(t<24)return Math.round(t)+" 时前";const n=t/24;return Math.round(n)+" 天前"},Ie=async i=>{try{if(!i)return{tx:0,lastTime:"无交易",fee:0};let a=0;i.forEach(n=>{a+=parseFloat(n.actual_fee_display)});const s=i[0].nonce,r=i[0].timestamp,t=ne(r)||"无交易";return{tx:s,lastTime:t,fee:Number(a).toFixed(3)}}catch{return{tx:"-",lastTime:"-",fee:"-"}}};async function Ee(i){try{const a="https://starkscan.stellate.sh/",s={query:`query ERC20BalancesByOwnerAddressTableQuery(
  $input: ERC20BalancesByOwnerAddressInput!
) {
  erc20BalancesByOwnerAddress(input: $input) {
    id
    ...ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance
  }
}

fragment ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance on ERC20Balance {
  id
  contract_address
  contract_erc20_identifier
  contract_erc20_contract {
    symbol
    is_social_verified
    icon_url
    id
  }
  balance_display
}
`,variables:{input:{owner_address:i}}},r={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},t=await R.post(a,s,{headers:r});let n={ETH:0,USDT:0,USDC:0,DAI:0,WBTC:0};return t.data.data.erc20BalancesByOwnerAddress.forEach(l=>{l.contract_address==="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"?n.ETH=Number(parseFloat(l.balance_display)).toFixed(3):l.contract_address==="0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"?n.USDT=Number(parseFloat(l.balance_display)).toFixed(3):l.contract_address==="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"?n.USDC=Number(parseFloat(l.balance_display)).toFixed(3):l.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"?n.DAI=Number(parseFloat(l.balance_display)).toFixed(3):l.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"&&(n.WBTC=Number(parseFloat(l.balance_display)).toFixed(3))}),n}catch(a){return console.log(a),{ETH:"-",USDT:"-",USDC:"-",DAI:"-",WBTC:"-"}}}const Ae=i=>{const a=i.getFullYear(),s=new Date(a,0,1),r=(i.getDay()+6)%7,t=Math.floor((i.getTime()-s.getTime())/864e5),n=Math.floor((t+s.getDay()-r)/7);return`${a}-${n}`},De=i=>{let a="";if(!i)return a;for(let s=0;s<i.length;s++)if(i[s]&&(i[s].length===66||i[s].length===64||i[s].length===65)){a=i[s];break}return a},Be=(i,a)=>{const s=new Set,r=new Set,t=new Set,n=new Set;return a.forEach(l=>{const _=new Date(l.timestamp*1e3),g=_.getFullYear(),u=_.getMonth(),p=_.getDate(),w=Ae(_);s.add(`${g}-${u}-${p}`),r.add(`${g}-${w}`),t.add(`${g}-${u}`);const k=De(l.calldata);k&&n.add(k)}),{dayActivity:s.size,weekActivity:r.size,monthActivity:t.size,contractActivity:n.size}};function Pe(i,a){if(a.length===0)return{dayActivity:0,weekActivity:0,monthActivity:0,contractActivity:0};const{dayActivity:s,weekActivity:r,monthActivity:t,contractActivity:n}=Be(i,a);return{dayActivity:s,weekActivity:r,monthActivity:t,contractActivity:n}}const Ne=i=>{let a=0,s=0,r=0,t=0;const n={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29e3};return i.forEach(l=>{const _=l.transfer_from_address,g=l.transfer_to_address,u=l.transfer_amount_display,p=l.from_erc20_identifier;_.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(l.main_call?l.main_call.selector_identifier:null)==="handle_deposit"&&(a+=1,r+=parseFloat(u)*n[p]),g.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(l.main_call?l.main_call.selector_identifier:null)==="initiate_withdraw"&&(s+=1,t+=parseFloat(u)*n[p])}),{DepositTx:a,WithdrawTx:s,DepositVolume:Number(r.toFixed(2)),WithdrawVolume:Number(t.toFixed(2))}};async function Oe(i){const a="https://starkscan.stellate.sh/",s={query:`query ContractPageQuery(
  $input: ContractInput!
) {
  contract(input: $input) {
    contract_address
    is_starknet_class_code_verified
    implementation_type
    ...ContractPageContainerFragment_contract
    ...ContractPageOverviewTabFragment_contract
    ...ContractPageClassCodeHistoryTabFragment_contract
    ...ContractFunctionReadWriteTabFragment_contract
    id
  }
}

fragment ContractFunctionReadCallsFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
}

fragment ContractFunctionReadWriteTabFragment_contract on Contract {
  contract_address
  starknet_class {
    ...ContractFunctionReadCallsFragment_starknetClass
    ...ContractFunctionWriteCallsFragment_starknetClass
    id
  }
}

fragment ContractFunctionWriteCallsFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
}

fragment ContractPageClassCodeHistoryTabFragment_contract on Contract {
  contract_address
  starknet_class {
    is_code_verified
    id
  }
  ...ContractPageCodeSubTabFragment_contract
}

fragment ContractPageCodeSubTabFragment_contract on Contract {
  starknet_class {
    class_hash
    ...StarknetClassCodeTabFragment_starknetClass
    id
  }
}

fragment ContractPageContainerFragment_contract on Contract {
  contract_address
  implementation_type
  is_starknet_class_code_verified
  contract_stats {
    number_of_transactions
    number_of_account_calls
    number_of_events
  }
}

fragment ContractPageOverviewTabClassHashPlacedAtItemFragment_contract on Contract {
  deployed_at_transaction_hash
  class_hash_placed_at_transaction_hash
  class_hash_placed_at_timestamp
}

fragment ContractPageOverviewTabEthBalanceItemFragment_contract on Contract {
  eth_balance {
    balance_display
    id
  }
}

fragment ContractPageOverviewTabFragment_contract on Contract {
  contract_address
  class_hash
  name_tag
  is_social_verified
  deployed_by_contract_address
  deployed_by_contract_identifier
  deployed_at_transaction_hash
  deployed_at_timestamp
  ...ContractPageOverviewTabEthBalanceItemFragment_contract
  ...ContractPageOverviewTabTypeItemFragment_contract
  ...ContractPageOverviewTabStarknetIDItemFragment_contract
  starknet_class {
    ...StarknetClassVersionItemFragment_starknetClass
    id
  }
  ...ContractPageOverviewTabClassHashPlacedAtItemFragment_contract
}

fragment ContractPageOverviewTabStarknetIDItemFragment_contract on Contract {
  starknet_id {
    domain
  }
}

fragment ContractPageOverviewTabTypeItemFragment_contract on Contract {
  implementation_type
  starknet_class {
    type
    id
  }
}

fragment StarknetClassCodeTabAbiAndByteCodeItemFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
  bytecode
  sierra_program
}

fragment StarknetClassCodeTabFragment_starknetClass on StarknetClass {
  ...StarknetClassCodeTabVerifiedItemFragment_starknetClass
  ...StarknetClassCodeTabSourceCodeItemFragment_starknetClass
  ...StarknetClassCodeTabAbiAndByteCodeItemFragment_starknetClass
}

fragment StarknetClassCodeTabSourceCodeItemFragment_starknetClass on StarknetClass {
  class_hash
  verified {
    source_code
  }
}

fragment StarknetClassCodeTabVerifiedItemFragment_starknetClass on StarknetClass {
  is_code_verified
  verified {
    name
    source_code
    verified_at_timestamp
  }
}

fragment StarknetClassVersionItemFragment_starknetClass on StarknetClass {
  is_cairo_one
}
`,variables:{input:{contract_address:i}}},r={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},t=await R.post(a,s,{headers:r}),n=ne(t.data.data.contract.deployed_at_timestamp),l=t.data.data.contract.starknet_id?t.data.data.contract.starknet_id.domain:"无";return{deployedTime:n,starkId:l}}function qe(i){try{let a=0;const s=["transfer","deposit","handle_deposit","initiate_withdraw"];return i.forEach(r=>{if(r.main_calls&&s.includes(r.main_calls[0].selector_name))return;const t=r.transfers.sort((l,_)=>parseInt(_.total_value)-parseInt(l.total_value));if(t.length===0)return;const n=parseFloat(t[0].total_value);a+=n}),{Vol:a.toFixed(3)}}catch(a){return console.log(a),{Vol:"-"}}}const ee=async i=>{let a;try{await de(me);const s=await je(i),r=s.transactions,t=s.transfers,n=Pe(i,r),{tx:l,lastTime:_,fee:g}=await Ie(r),u=await Ee(i),p=Ne(t),w=await Oe(i),k=qe(r);return a={accountInfo:w,balance:u,tx:l,lastTime:_,fee:g,activity:n,bridge:p,...k,result:"success"},await ue("starkTransactions",{address:i,data:JSON.stringify(r)}),a}catch(s){return a={result:"error",reason:s.message},a}};const{Text:j}=Se,{TextArea:Re}=te,{Content:$e}=ye,We=()=>{const[i,a]=E.useState(!1),[s,r]=E.useState(!1),[t,n]=E.useState([]),[l]=U.useForm(),[_,g]=E.useState(!1),[u,p]=E.useState([]),[w,k]=E.useState(!1);let P=t.length+1;const[O,$]=E.useState(!1);E.useEffect(()=>{k(!0);const o=localStorage.getItem("stark_addresses");setTimeout(()=>{k(!1)},500),o&&n(JSON.parse(o)),$(!0)},[]),E.useEffect(()=>{O&&localStorage.setItem("stark_addresses",JSON.stringify(t))},[t,O]);const ae=[{title:"#",key:"index",align:"center",render:(o,c,T)=>T+1},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(o,c)=>{const T=o||e.jsx(Q,{});return e.jsx(V,{title:e.jsx("div",{children:e.jsx(te,{placeholder:"请输入备注",defaultValue:o,onChange:f=>{c.name=f.target.value},allowClear:!0,bordered:!0})}),icon:e.jsx(Q,{}),onConfirm:()=>{n([...t]),localStorage.setItem("stark_addresses",JSON.stringify(t))},onCancel:()=>{},okText:"确定",cancelText:"取消",children:e.jsx(q,{color:"blue",style:{cursor:"pointer"},children:T})})}},{title:"钱包地址",dataIndex:"address",key:"address",align:"center",className:"address",render:o=>{const c=()=>{ve(o),we.success("地址已复制")};return o?e.jsxs(e.Fragment,{children:[o.slice(0,4),"...",o.slice(-4),e.jsx(D,{type:"text",icon:e.jsx(pe,{}),onClick:c,style:{marginLeft:8}})]}):e.jsx(H,{})}},{title:"StarkId",dataIndex:["accountInfo","starkId"],key:"starkId",align:"center",render:o=>o},{title:"StarkNet",children:[{title:"ETH",dataIndex:["balance","ETH"],key:"stark_eth_balance",align:"center"},{title:"USDC",dataIndex:["balance","USDC"],key:"stark_usdc_balance",align:"center"},{title:"USDT",dataIndex:["balance","USDT"],key:"stark_usdt_balance",align:"center"},{title:"DAI",dataIndex:["balance","DAI"],key:"stark_dai_balance",align:"center"},{title:"WBTC",dataIndex:["balance","WBTC"],key:"stark_wbtc_balance",align:"center"},{title:"Tx",dataIndex:"tx",key:"stark_tx_amount",align:"center",sorter:(o,c)=>o.tx-c.tx},{title:"最后交易",dataIndex:"lastTime",key:"stark_latest_tx",align:"center",render:(o,c)=>e.jsx("a",{href:`https://voyager.online/contract/${c.address}`,target:"_blank",children:o})},{title:"官方桥Tx",className:"stark_cross_tx",children:[{title:"L1->L2",dataIndex:["bridge","DepositTx"],align:"center"},{title:"L2->L1",dataIndex:["bridge","WithdrawTx"],align:"center"}]},{title:"官方桥金额(U)",className:"stark_cross_amount",children:[{title:"L1->L2",dataIndex:["bridge","DepositVolume"],align:"center"},{title:"L2->L1",dataIndex:["bridge","WithdrawVolume"],align:"center"}]},{title:"活跃统计",className:"stark_activity",children:[{title:"天",dataIndex:["activity","dayActivity"],align:"center"},{title:"周",dataIndex:["activity","weekActivity"],align:"center"},{title:"月",dataIndex:["activity","monthActivity"],align:"center"},{title:"合约",dataIndex:["activity","contractActivity"],align:"center"},{title:"Vol(U)",dataIndex:"Vol",align:"center",sorter:(o,c)=>o.Vol-c.Vol},{title:"fee(E)",dataIndex:"fee",align:"center",sorter:(o,c)=>o.fee-c.fee}]},{title:"状态",key:"result",align:"center",render:(o,c)=>e.jsxs(K,{children:[c.result==="success"?e.jsx(q,{icon:e.jsx(xe,{}),color:"success",children:"成功"}):null,c.result==="error"?e.jsx(Ce,{title:c.reason,children:e.jsx(q,{icon:e.jsx(be,{}),color:"error",children:"失败 "})}):null,c.result==="pending"?e.jsx(q,{icon:e.jsx(M,{spin:!0}),color:"processing",children:"获取中 "}):null]})},{title:"操作",key:"action",align:"center",render:(o,c)=>e.jsxs(K,{children:[e.jsx(V,{title:"确认删除？",onConfirm:async()=>{await se(c.address)},children:e.jsx(D,{icon:e.jsx(J,{})})}),e.jsx(D,{icon:e.jsx(Te,{}),onClick:()=>{L(c.key)}})]})}]}],se=async o=>{n(t.filter(c=>c.address!==o)),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(c=>c.address!==o))),await Y("starkTransactions",[o])},re=async()=>{try{r(!0),a(!1);const c=(await l.validateFields()).addresses.split(`
`),T=5;let f=0,h=[];const S=()=>{for(;h.length>0&&f<T;){const m=h.shift();f+=1,m().finally(()=>{f-=1,S()})}};for(let m of c){if(m=m.trim(),m.length!==66&&m.length!==64){B.error({message:"错误",description:"请输入正确的stark地址(64位)",duration:1});continue}m.startsWith("0x")||(m="0x"+m);const v=()=>new Promise(async(A,N)=>{try{n(F=>{const C=[...F];if(C.findIndex(b=>b.address===m)===-1){const b={key:P.toString(),address:m,result:"pending"};P++,C.push(b)}return C});const x=await ee(m);n(F=>{const C=[...F],y=C.findIndex(b=>b.address===m);return y!==-1&&(C[y]={...C[y],...x}),C}),A()}catch(x){N(x)}});h.push(v)}for(S();f>0||h.length>0;)await new Promise(m=>setTimeout(m,100));B.success({message:"成功",description:"批量添加完成",duration:1})}catch(o){B.error({message:"错误",description:o.message,duration:1})}finally{l.resetFields(),p([]),r(!1)}},L=async o=>{const c=o?[o]:u;if(!c.length){B.error({message:"错误",description:"请先选择要刷新的地址",duration:1});return}g(!0);try{let f=0,h=[];const S=()=>{for(;h.length>0&&f<5;){const m=h.shift();f+=1,m().finally(()=>{f-=1,S()})}};for(let m of c){const v=t.findIndex(A=>A.key===m);if(v!==-1){const A=()=>new Promise(async(N,x)=>{try{n(C=>{const y=[...C];for(let b in y[v])b!=="address"&&b!=="name"&&b!=="key"&&(b==="result"?y[v][b]="pending":y[v][b]=null);return y});const F=await ee(t[v].address);n(C=>{const y=[...C];return y[v]={...y[v],...F},localStorage.setItem("stark_addresses",JSON.stringify(y)),y}),N()}catch(F){x(F)}});h.push(A)}}for(S();f>0||h.length>0;)await new Promise(m=>setTimeout(m,100));B.success({message:"完成",description:"刷新地址数据完成",duration:1})}catch(T){B.error({message:"错误",description:T.message,duration:1})}finally{g(!1),o||p([])}},ie=async()=>{if(!u.length){B.error({message:"错误",description:"请先选择要删除的地址",duration:1});return}const o=t.filter(c=>u.includes(c.key)).map(c=>c.address);await Y("starkTransactions",o),n(t.filter(c=>!u.includes(c.key))),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(c=>!u.includes(c.key)))),p([])},oe=()=>{ke(t,"starkInfo")},ce={selectedRowKeys:u,onChange:o=>{p(o)}};function I(o,c=3){return o===0?"0":o.toFixed(c)}const le=o=>{let c=0,T=0,f=0,h=0,S=0,m=0,v=0,A=0,N=0;return o.forEach(x=>{var F,C,y,b,W,z,G;c+=parseFloat(((F=x.balance)==null?void 0:F.ETH)||0),T+=parseFloat(((C=x.balance)==null?void 0:C.USDC)||0),f+=parseFloat(((y=x.balance)==null?void 0:y.USDT)||0),h+=parseFloat(((b=x.balance)==null?void 0:b.DAI)||0),S+=parseFloat(((W=x.balance)==null?void 0:W.WBTC)||0),m+=parseFloat(((z=x.bridge)==null?void 0:z.DepositVolume)||0),v+=parseFloat(((G=x.bridge)==null?void 0:G.WithdrawVolume)||0),A+=parseFloat(x.Vol||0),N+=parseFloat(x.fee||0)}),e.jsx(d.Summary,{children:e.jsxs(d.Summary.Row,{children:[e.jsx(d.Summary.Cell,{index:0,children:e.jsx(j,{type:"danger",children:"总计"})}),e.jsx(d.Summary.Cell,{index:1}),e.jsx(d.Summary.Cell,{index:2}),e.jsx(d.Summary.Cell,{index:3}),e.jsx(d.Summary.Cell,{index:4}),e.jsx(d.Summary.Cell,{index:5,children:e.jsx(j,{type:"danger",children:I(c)})}),e.jsx(d.Summary.Cell,{index:6,children:e.jsx(j,{type:"danger",children:I(T)})}),e.jsx(d.Summary.Cell,{index:7,children:e.jsx(j,{type:"danger",children:I(f)})}),e.jsx(d.Summary.Cell,{index:8,children:e.jsx(j,{type:"danger",children:I(h)})}),e.jsx(d.Summary.Cell,{index:9,children:e.jsx(j,{type:"danger",children:I(S)})}),e.jsx(d.Summary.Cell,{index:10}),e.jsx(d.Summary.Cell,{index:11}),e.jsx(d.Summary.Cell,{index:12}),e.jsx(d.Summary.Cell,{index:13}),e.jsx(d.Summary.Cell,{index:14,children:e.jsx(j,{type:"danger",children:I(m,2)})}),e.jsx(d.Summary.Cell,{index:15,children:e.jsx(j,{type:"danger",children:I(v,2)})}),e.jsx(d.Summary.Cell,{index:16}),e.jsx(d.Summary.Cell,{index:17}),e.jsx(d.Summary.Cell,{index:18}),e.jsx(d.Summary.Cell,{index:19}),e.jsx(d.Summary.Cell,{index:20,children:e.jsx(j,{type:"danger",children:I(A,2)})}),e.jsx(d.Summary.Cell,{index:21,children:e.jsx(j,{type:"danger",children:I(N,2)})}),e.jsx(d.Summary.Cell,{index:22}),e.jsx(d.Summary.Cell,{index:23})]})})};return e.jsx("div",{children:e.jsxs($e,{children:[e.jsx(_e,{title:"批量添加地址",open:i,onOk:re,onCancel:()=>{a(!1),l.resetFields()},okText:"添加地址",cancelText:"取消",width:800,children:e.jsx(U,{form:l,layout:"vertical",children:e.jsx(U.Item,{label:"地址",name:"addresses",rules:[{required:!0,validator:(o,c)=>{const T=c.split(`
`);let f=[];for(let h=0;h<T.length;h++){let S=T[h].trim();(!S.startsWith("0x")||S.length!==66&&S.length!==64)&&f.push(h+1)}return f.length?Promise.reject(`行 ${f.join(", ")} 的地址格式错误，请输入正确的stark地址(64位)`):Promise.resolve()}}],children:e.jsx(Re,{placeholder:"请输入地址，每行一个",style:{width:"100%",height:"300px",resize:"none"}})})})}),e.jsx("div",{style:{marginBottom:"50px"},children:e.jsx(H,{spinning:w,size:"small",children:e.jsx(d,{rowSelection:ce,dataSource:t,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:ae,summary:le})})}),e.jsx("div",{className:"stark_footer",children:e.jsx(fe,{size:"small",style:{width:"100%"},children:e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[e.jsx(D,{type:"primary",onClick:()=>{a(!0)},size:"large",style:{width:"25%"},icon:e.jsx(ge,{}),loading:s,children:s?"添加中...":"添加地址"}),e.jsx(D,{type:"primary",onClick:()=>L(),loading:_,size:"large",style:{width:"25%"},icon:e.jsx(M,{}),children:"刷新选中地址"}),e.jsx(V,{title:"确认删除"+u.length+"个地址？",onConfirm:async()=>{await ie()},children:e.jsx(D,{type:"primary",danger:!0,size:"large",style:{width:"25%"},icon:e.jsx(J,{}),children:"删除选中地址"})}),e.jsx(D,{type:"primary",icon:e.jsx(he,{}),size:"large",style:{width:"8%"},onClick:oe})]})})})]})})};export{We as default};
