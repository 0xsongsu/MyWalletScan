import{r as T,j as r}from"./index-11fb5c98.js";import{U as bt,D as xt,e as St}from"./save_excel-2fc958ff.js";import{a as Q,C as Ct}from"./axios-4f7dbae2.js";import{F as L,T as H,a as Tt}from"./index-fabbc82a.js";import{M as mt,P as ht,D as ft}from"./DeleteOutlined-d479eded.js";import{I as lt,S as g,P as It,E as Ft,a as Et}from"./index-d7eca782.js";import{J as V,L as jt}from"./EditOutlined-d581a128.js";import{L as vt}from"./index-192c80ef.js";import{S as Dt,n as W}from"./FileSaver.min-7222e1eb.js";import{S as Ot}from"./index-c7b6b5c6.js";import"./index-8c7352a9.js";async function tt(S){try{let h=0,p,w;const i="https://starkscan.stellate.sh/",d={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},l={query:`query TransactionsTableQuery(
                $first: Int!,
                $after: String,
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
                transactions(
                  first: $first,
                  after: $after,
                  input: $input
                ) {
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
              }`,variables:{first:30,after:null,input:{initiator_address:S,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}},c=await Q.post(i,l,{headers:d});for(let I=0;I<c.data.data.transactions.edges.length;I++)c.data.data.transactions.edges[I].node.transaction_type==="INVOKE_FUNCTION"&&(h+=1);p=c.data.data.transactions.pageInfo.hasNextPage;const b=c.data.data.transactions.edges[0].node.timestamp,m=new Date(b*1e3);let y=m.getFullYear(),k=m.getMonth()+1,x=m.getDate();k<10&&(k="0"+k),x<10&&(x="0"+x);let M=`${y}/${k}/${x}`;if(p===!0)for(w=c.data.data.transactions.pageInfo.endCursor;p;){l.variables.after=w;const I=await Q.post(i,l,{headers:d});p=I.data.data.transactions.pageInfo.hasNextPage,w=I.data.data.transactions.pageInfo.endCursor;for(let X=0;X<I.data.data.transactions.edges.length;X++)I.data.data.transactions.edges[X].node.transaction_type==="INVOKE_FUNCTION"&&(h+=1)}const dt=new Date(b*1e3),rt=8,K=new Date(dt.getTime()+rt*3600*1e3),ct=new Date,st=new Date(ct.getTime()+rt*3600*1e3)-K,Y=Math.floor(st/(1e3*60*60)),ot=Math.floor(Y/24);let q="";return ot>0?q=`${ot} 天前`:Y>0?q=`${Y} 小时前`:q="刚刚",console.log(h,M,q),{tx:h,stark_latest_tx:M,stark_latest_tx_time:q}}catch(h){return console.error(h),{tx:"Error",stark_latest_tx:"Error"}}}async function gt(S,h,p,w){for(let i=0;i<w.length;i++){const d=w[i].node;d.transaction_hash;const l=d.transfer_amount_display,c=d.transfer_from_address;d.timestamp,d.transfer_to_identifier;const b=d.main_call?d.main_call.selector_identifier:null;if(c==="0x0000000000000000000000000000000000000000000000000000000000000000"&&b==="handle_deposit"){const m=d.from_erc20_identifier;if(m in h){const y=h[m].amount+=parseFloat(l),k=h[m].count+=1;h[m]={amount:y,count:k}}else h[m]={amount:parseFloat(l),count:1}}else if(c===S&&b==="initiate_withdraw"){const m=d.from_erc20_identifier;if(m in p){const y=p[m].amount+=parseFloat(l),k=p[m].count+=1;p[m]={amount:y,count:k}}else p[m]={amount:parseFloat(l),count:1}}}return[h,p]}async function et(S){try{const h="https://starkscan.stellate.sh/",p={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},w={query:`query ERC20TransferEventsTableQuery(
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
`,variables:{first:30,after:null,input:{transfer_from_or_to_address:S,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let i=await Q.post(h,w,{headers:p}),d=i.data.data.erc20TransferEvents.edges,l={},c={},b=i.data.data.erc20TransferEvents.pageInfo.hasNextPage,m;for([l,c]=await gt(S,l,c,d),b&&(m=i.data.data.erc20TransferEvents.pageInfo.endCursor);b===!0;){w.variables.after=m;let x=await Q.post(h,w,{headers:p});b=x.data.data.erc20TransferEvents.pageInfo.hasNextPage,b===!1?m=null:m=x.data.data.erc20TransferEvents.pageInfo.endCursor,[l,c]=await gt(S,l,c,x.data.data.erc20TransferEvents.edges)}let y=0,k=0;for(let x in l)y+=l[x].count;for(let x in c)k+=c[x].count;return console.log(l),console.log(c),{d_eth_amount:l["StarkGate: ETH"]?parseFloat(l["StarkGate: ETH"].amount).toFixed(3):0,d_eth_count:l["StarkGate: ETH"]?l["StarkGate: ETH"].count:0,d_usdc_amount:l["StarkGate: USDC"]?parseFloat(l["StarkGate: USDC"].amount).toFixed(3):0,d_usdc_count:l["StarkGate: USDC"]?l["StarkGate: USDC"].count:0,d_usdt_amount:l["StarkGate: USDT"]?parseFloat(l["StarkGate: USDT"].amount).toFixed(3):0,d_usdt_count:l["StarkGate: USDT"]?l["StarkGate: USDT"].count:0,d_dai_amount:l["StarkGate: DAI"]?parseFloat(l["StarkGate: DAI"].amount).toFixed(3):0,d_dai_count:l["StarkGate: DAI"]?l["StarkGate: DAI"].count:0,d_wbtc_amount:l["StarkGate: WBTC"]?parseFloat(l["StarkGate: WBTC"].amount).toFixed(6):0,d_wbtc_count:l["StarkGate: WBTC"]?l["StarkGate: WBTC"].count:0,w_eth_amount:c["StarkGate: ETH"]?parseFloat(c["StarkGate: ETH"].amount).toFixed(3):0,w_eth_count:c["StarkGate: ETH"]?c["StarkGate: ETH"].count:0,w_usdc_amount:c["StarkGate: USDC"]?parseFloat(c["StarkGate: USDC"].amount).toFixed(3):0,w_usdc_count:c["StarkGate: USDC"]?c["StarkGate: USDC"].count:0,w_usdt_amount:c["StarkGate: USDT"]?parseFloat(c["StarkGate: USDT"].amount).toFixed(3):0,w_usdt_count:c["StarkGate: USDT"]?c["StarkGate: USDT"].count:0,w_dai_amount:c["StarkGate: DAI"]?parseFloat(c["StarkGate: DAI"].amount).toFixed(3):0,w_dai_count:c["StarkGate: DAI"]?c["StarkGate: DAI"].count:0,w_wbtc_amount:c["StarkGate: WBTC"]?parseFloat(c["StarkGate: WBTC"].amount).toFixed(6):0,w_wbtc_count:c["StarkGate: WBTC"]?c["StarkGate: WBTC"].count:0,total_deposit_count:y,total_widthdraw_count:k}}catch(h){return console.log(h),{d_eth_amount:"Error",d_eth_count:"Error",d_usdc_amount:"Error",d_usdc_count:"Error",d_usdt_amount:"Error",d_usdt_count:"Error",d_dai_amount:"Error",d_dai_count:"Error",d_wbtc_amount:"Error",d_wbtc_count:"Error",w_eth_amount:"Error",w_eth_count:"Error",w_usdc_amount:"Error",w_usdc_count:"Error",w_usdt_amount:"Error",w_usdt_count:"Error",w_dai_amount:"Error",w_dai_count:"Error",w_wbtc_amount:"Error",w_wbtc_count:"Error",total_deposit_count:"Error",total_widthdraw_count:"Error"}}}async function at(S){try{const h="https://starkscan.stellate.sh/",p={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},w={query:`query ContractPageQuery(
  $input: ContractInput!
) {
  contract(input: $input) {
    contract_address
    is_starknet_class_code_verified
    implementation_type
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
`,variables:{input:{contract_address:S}}},i=await Q.post(h,w,{headers:p}),d=i.data.data.contract.eth_balance.balance_display,l=i.data.data.contract.starknet_id?i.data.data.contract.starknet_id.domain:"null",c=i.data.data.contract.deployed_at_timestamp;return{eth_balance:parseFloat(d).toFixed(3),stark_id:l==="null"?"无":l,deployed_at_timestamp:c}}catch(h){return console.log(h),{eth_balance:"Error",stark_id:"Error",deployed_at_timestamp:"Error"}}}async function nt(S){try{const h="https://starkscan.stellate.sh/",w={method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify({query:`query ERC20BalancesByOwnerAddressTableQuery($input: ERC20BalancesByOwnerAddressInput!) {
  erc20BalancesByOwnerAddress(input: $input) {
    id
    contract_address
    balance_display
  }
}`,variables:{input:{owner_address:S}}})},l=(await Q.post(h,w.data,w)).data.data.erc20BalancesByOwnerAddress;let c=0,b=0,m=0;for(let y=0;y<l.length;y++){const k=l[y];k.contract_address==="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"&&(c=parseFloat(k.balance_display)),k.contract_address==="0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"&&(b=parseFloat(k.balance_display)),k.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"&&(m=parseFloat(k.balance_display))}return{USDC:c.toFixed(2),USDT:b.toFixed(2),DAI:m.toFixed(2)}}catch(h){return console.error("Error fetching USDC balance:",h),{USDC:"ERROR"}}}const{TextArea:Nt}=lt,{Content:Gt}=vt,Vt=()=>{const[S,h]=T.useState(!1),[p,w]=T.useState(!1),[i,d]=T.useState([]),[l]=L.useForm(),[c,b]=T.useState(!1),[m,y]=T.useState([]),[k,x]=T.useState(!1),[M]=L.useForm(),[dt,rt]=T.useState(0),[K,ct]=T.useState(!1),it=()=>{ct(!K)},st=()=>K?r.jsx(Ft,{}):r.jsx(Et,{});T.useEffect(()=>{const t=()=>{rt(window.innerHeight-260)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[]),T.useEffect(()=>{x(!0);const t=localStorage.getItem("stark_addresses");setTimeout(()=>{x(!1)},500),t&&d(JSON.parse(t))},[]);const Y=t=>{d(i.filter(s=>s.key!==t)),localStorage.setItem("stark_addresses",JSON.stringify(i.filter(s=>s.key!==t)))},ot=async()=>{try{const t=await M.validateFields();if(t.address.length!==66&&t.address.length!==64){W.error({message:"错误",description:"请输入正确的stark地址(64位)"},2);return}t.address.startsWith("0x")||(t.address="0x"+t.address),h(!1);const s=i.findIndex(a=>a.address===t.address);if(s!==-1){d(i.map((o,e)=>e===s?{...o,name:t.name}:o));const a=[...i];at(t.address).then(({eth_balance:o,stark_id:e,deployed_at_timestamp:n})=>{a[s]={...a[s],stark_eth_balance:o,stark_id:e,create_time:n},d(a),localStorage.setItem("stark_addresses",JSON.stringify(i))}),nt(t.address).then(({USDC:o,USDT:e,DAI:n})=>{a[s]={...a[s],stark_usdc_balance:o,stark_usdt_balance:e,stark_dai_balance:n},d(a),localStorage.setItem("stark_addresses",JSON.stringify(i))}),et(t.address).then(({d_eth_amount:o,d_eth_count:e,d_usdc_amount:n,d_usdc_count:_,d_usdt_amount:u,d_usdt_count:f,d_dai_amount:C,d_dai_count:F,d_wbtc_amount:E,d_wbtc_count:j,w_eth_amount:v,w_eth_count:D,w_usdc_amount:O,w_usdc_count:N,w_usdt_amount:G,w_usdt_count:U,w_dai_amount:P,w_dai_count:B,w_wbtc_amount:A,w_wbtc_count:J,total_deposit_count:R,total_widthdraw_count:$})=>{a[s]={...a[s],d_eth_amount:o,d_eth_count:e,d_usdc_amount:n,d_usdc_count:_,d_usdt_amount:u,d_usdt_count:f,d_dai_amount:C,d_dai_count:F,d_wbtc_amount:E,d_wbtc_count:j,w_eth_amount:v,w_eth_count:D,w_usdc_amount:O,w_usdc_count:N,w_usdt_amount:G,w_usdt_count:U,w_dai_amount:P,w_dai_count:B,w_wbtc_amount:A,w_wbtc_count:J,total_deposit_count:R,total_widthdraw_count:$},d(a),localStorage.setItem("stark_addresses",JSON.stringify(i))}),tt(t.address).then(({tx:o,stark_latest_tx:e,stark_latest_tx_time:n})=>{a[s]={...a[s],stark_tx_amount:o,stark_latest_tx:e,stark_latest_tx_time:n},d(a),localStorage.setItem("stark_addresses",JSON.stringify(i))})}else{const a={key:i.length.toString(),name:t.name,address:t.address,stark_eth_balance:null,stark_usdc_balance:null,stark_usdt_balance:null,stark_dai_balance:null,stark_id:null,create_time:null,d_eth_amount:null,d_eth_count:null,d_usdc_amount:null,d_usdc_count:null,d_usdt_amount:null,d_usdt_count:null,d_dai_amount:null,d_dai_count:null,d_wbtc_amount:null,d_wbtc_count:null,w_eth_amount:null,w_eth_count:null,w_usdc_amount:null,w_usdc_count:null,w_usdt_amount:null,w_usdt_count:null,w_dai_amount:null,w_dai_count:null,w_wbtc_amount:null,w_wbtc_count:null,stark_tx_amount:null,stark_latest_tx:null,stark_latest_tx_time:null,total_deposit_count:null,total_widthdraw_count:null},o=[...i,a];d(o),tt(t.address).then(({tx:e,stark_latest_tx:n,stark_latest_tx_time:_})=>{a.stark_tx_amount=e,a.stark_latest_tx=n,a.stark_latest_tx_time=_,d([...o]),localStorage.setItem("stark_addresses",JSON.stringify(o))}),at(t.address).then(({eth_balance:e,stark_id:n,deployed_at_timestamp:_})=>{a.stark_eth_balance=e,a.stark_id=n,a.create_time=_,d([...o]),localStorage.setItem("stark_addresses",JSON.stringify(o))}),nt(t.address).then(({USDC:e,USDT:n,DAI:_})=>{a.stark_usdc_balance=e,a.stark_usdt_balance=n,a.stark_dai_balance=_,d([...o]),localStorage.setItem("stark_addresses",JSON.stringify(o))}),et(t.address).then(({d_eth_amount:e,d_eth_count:n,d_usdc_amount:_,d_usdc_count:u,d_usdt_amount:f,d_usdt_count:C,d_dai_amount:F,d_dai_count:E,d_wbtc_amount:j,d_wbtc_count:v,w_eth_amount:D,w_eth_count:O,w_usdc_amount:N,w_usdc_count:G,w_usdt_amount:U,w_usdt_count:P,w_dai_amount:B,w_dai_count:A,w_wbtc_amount:J,w_wbtc_count:R,total_widthdraw_count:$,total_deposit_count:z})=>{a.d_eth_amount=e,a.d_eth_count=n,a.d_usdc_amount=_,a.d_usdc_count=u,a.d_usdt_amount=f,a.d_usdt_count=C,a.d_dai_amount=F,a.d_dai_count=E,a.d_wbtc_amount=j,a.d_wbtc_count=v,a.w_eth_amount=D,a.w_eth_count=O,a.w_usdc_amount=N,a.w_usdc_count=G,a.w_usdt_amount=U,a.w_usdt_count=P,a.w_dai_amount=B,a.w_dai_count=A,a.w_wbtc_amount=J,a.w_wbtc_count=R,a.total_deposit_count=z,a.total_widthdraw_count=$,d([...o]),localStorage.setItem("stark_addresses",JSON.stringify(o))})}}catch(t){W.error({message:"错误",description:t.message},2)}finally{M.resetFields()}},q=async()=>{try{const s=(await l.validateFields()).addresses.split(`
`),a=[...i];for(let o of s){if(o=o.trim(),o.length!==66&&o.length!==64){W.error({message:"错误",description:"请输入正确的stark地址(64位)"});continue}o.startsWith("0x")||(o="0x"+o);const e=a.findIndex(n=>n.address===o);if(e!==-1){const n=[...a];tt(o).then(({tx:_,stark_latest_tx:u,stark_latest_tx_time:f})=>{n[e]={...n[e],stark_tx_amount:_,stark_latest_tx:u,stark_latest_tx_time:f},d(n),localStorage.setItem("stark_addresses",JSON.stringify(n))}),at(o).then(({eth_balance:_,stark_id:u,deployed_at_timestamp:f})=>{n[e]={...n[e],stark_eth_balance:_,stark_id:u,create_time:f},d(n),localStorage.setItem("stark_addresses",JSON.stringify(n))}),nt(o).then(({USDC:_,USDT:u,DAI:f})=>{n[e]={...n[e],stark_usdc_balance:_,stark_usdt_balance:u,stark_dai_balance:f},d(n),localStorage.setItem("stark_addresses",JSON.stringify(n))}),et(o).then(({d_eth_amount:_,d_eth_count:u,d_usdc_amount:f,d_usdc_count:C,d_usdt_amount:F,d_usdt_count:E,d_dai_amount:j,d_dai_count:v,d_wbtc_amount:D,d_wbtc_count:O,w_eth_amount:N,w_eth_count:G,w_usdc_amount:U,w_usdc_count:P,w_usdt_amount:B,w_usdt_count:A,w_dai_amount:J,w_dai_count:R,w_wbtc_amount:$,w_wbtc_count:z,total_widthdraw_count:Z,total_deposit_count:_t})=>{n[e]={...n[e],d_eth_amount:_,d_eth_count:u,d_usdc_amount:f,d_usdc_count:C,d_usdt_amount:F,d_usdt_count:E,d_dai_amount:j,d_dai_count:v,d_wbtc_amount:D,d_wbtc_count:O,w_eth_amount:N,w_eth_count:G,w_usdc_amount:U,w_usdc_count:P,w_usdt_amount:B,w_usdt_count:A,w_dai_amount:J,w_dai_count:R,w_wbtc_amount:$,w_wbtc_count:z,total_widthdraw_count:Z,total_deposit_count:_t}})}else{const n={key:a.length.toString(),address:o,stark_eth_balance:null,stark_usdc_balance:null,stark_usdt_balance:null,stark_dai_balance:null,stark_id:null,create_time:null,d_eth_amount:null,d_eth_count:null,d_usdc_amount:null,d_usdc_count:null,d_usdt_amount:null,d_usdt_count:null,d_dai_amount:null,d_dai_count:null,d_wbtc_amount:null,d_wbtc_count:null,w_eth_amount:null,w_eth_count:null,w_usdc_amount:null,w_usdc_count:null,w_usdt_amount:null,w_usdt_count:null,w_dai_amount:null,w_dai_count:null,w_wbtc_amount:null,w_wbtc_count:null,stark_tx_amount:null,stark_latest_tx:null,stark_latest_tx_time:null,total_deposit_count:null,total_widthdraw_count:null};a.push(n),d(a),tt(o).then(({tx:_,stark_latest_tx:u,stark_latest_tx_time:f})=>{n.stark_tx_amount=_,n.stark_latest_tx=u,n.stark_latest_tx_time=f,d([...a]),localStorage.setItem("stark_addresses",JSON.stringify(a))}),at(o).then(({eth_balance:_,stark_id:u,deployed_at_timestamp:f})=>{n.stark_eth_balance=_,n.stark_id=u,n.create_time=f,d([...a]),localStorage.setItem("stark_addresses",JSON.stringify(a))}),nt(o).then(({USDC:_,USDT:u,DAI:f})=>{n.stark_usdc_balance=_,n.stark_usdt_balance=u,n.stark_dai_balance=f,d([...a]),localStorage.setItem("stark_addresses",JSON.stringify(a))}),et(o).then(({d_eth_amount:_,d_eth_count:u,d_usdc_amount:f,d_usdc_count:C,d_usdt_amount:F,d_usdt_count:E,d_dai_amount:j,d_dai_count:v,d_wbtc_amount:D,d_wbtc_count:O,w_eth_amount:N,w_eth_count:G,w_usdc_amount:U,w_usdc_count:P,w_usdt_amount:B,w_usdt_count:A,w_dai_amount:J,w_dai_count:R,w_wbtc_amount:$,w_wbtc_count:z,total_widthdraw_count:Z,total_deposit_count:_t})=>{n.d_eth_amount=_,n.d_eth_count=u,n.d_usdc_amount=f,n.d_usdc_count=C,n.d_usdt_amount=F,n.d_usdt_count=E,n.d_dai_amount=j,n.d_dai_count=v,n.d_wbtc_amount=D,n.d_wbtc_count=O,n.w_eth_amount=N,n.w_eth_count=G,n.w_usdc_amount=U,n.w_usdc_count=P,n.w_usdt_amount=B,n.w_usdt_count=A,n.w_dai_amount=J,n.w_dai_count=R,n.w_wbtc_amount=$,n.w_wbtc_count=z,n.total_widthdraw_count=Z,n.total_deposit_count=_t,d([...a]),localStorage.setItem("stark_addresses",JSON.stringify(a))})}}w(!1)}catch(t){W.error({message:"错误",description:t.message})}finally{l.resetFields(),y([])}},I=async()=>{if(!m.length){W.error({message:"错误",description:"请先选择要刷新的地址"},2);return}b(!0);try{let t=[];const s=[...i];for(let a of m){const o=s.findIndex(e=>e.key===a);if(o!==-1){const e=s[o];e.stark_tx_amount=null,e.stark_latest_tx=null,e.stark_latest_tx_time=null,e.stark_eth_balance=null,e.stark_usdc_balance=null,e.stark_usdt_balance=null,e.stark_dai_balance=null,e.stark_id=null,e.create_time=null,e.d_eth_amount=null,e.d_eth_count=null,e.d_usdc_amount=null,e.d_usdc_count=null,e.d_usdt_amount=null,e.d_usdt_count=null,e.d_dai_amount=null,e.d_dai_count=null,e.d_wbtc_amount=null,e.d_wbtc_count=null,e.w_eth_amount=null,e.w_eth_count=null,e.w_usdc_amount=null,e.w_usdc_count=null,e.w_usdt_amount=null,e.w_usdt_count=null,e.w_dai_amount=null,e.w_dai_count=null,e.w_wbtc_amount=null,e.w_wbtc_count=null,e.total_widthdraw_count=null,e.total_deposit_count=null,d([...s]),t.push(tt(e.address).then(({tx:n,stark_latest_tx:_,stark_latest_tx_time:u})=>{e.stark_tx_amount=n,e.stark_latest_tx=_,e.stark_latest_tx_time=u,d([...s]),localStorage.setItem("stark_addresses",JSON.stringify(i))})),t.push(at(e.address).then(({eth_balance:n,stark_id:_,deployed_at_timestamp:u})=>{e.stark_eth_balance=n,e.stark_id=_,e.create_time=u,d([...s]),localStorage.setItem("stark_addresses",JSON.stringify(i))})),t.push(nt(e.address).then(({USDC:n,USDT:_,DAI:u})=>{e.stark_usdc_balance=n,e.stark_usdt_balance=_,e.stark_dai_balance=u,d([...s]),localStorage.setItem("stark_addresses",JSON.stringify(i))})),t.push(et(e.address).then(({d_eth_amount:n,d_eth_count:_,d_usdc_amount:u,d_usdc_count:f,d_usdt_amount:C,d_usdt_count:F,d_dai_amount:E,d_dai_count:j,d_wbtc_amount:v,d_wbtc_count:D,w_eth_amount:O,w_eth_count:N,w_usdc_amount:G,w_usdc_count:U,w_usdt_amount:P,w_usdt_count:B,w_dai_amount:A,w_dai_count:J,w_wbtc_amount:R,w_wbtc_count:$,total_widthdraw_count:z,total_deposit_count:Z})=>{e.d_eth_amount=n,e.d_eth_count=_,e.d_usdc_amount=u,e.d_usdc_count=f,e.d_usdt_amount=C,e.d_usdt_count=F,e.d_dai_amount=E,e.d_dai_count=j,e.d_wbtc_amount=v,e.d_wbtc_count=D,e.w_eth_amount=O,e.w_eth_count=N,e.w_usdc_amount=G,e.w_usdc_count=U,e.w_usdt_amount=P,e.w_usdt_count=B,e.w_dai_amount=A,e.w_dai_count=J,e.w_wbtc_amount=R,e.w_wbtc_count=$,e.total_widthdraw_count=z,e.total_deposit_count=Z,d([...s]),localStorage.setItem("stark_addresses",JSON.stringify(i))}))}}await Promise.all(t)}catch(t){W.error({message:"错误",description:t.message},2)}finally{b(!1),y([])}},X=()=>{if(!m.length){W.error({message:"错误",description:"请先选择要删除的地址"},2);return}d(i.filter(t=>!m.includes(t.key))),localStorage.setItem("stark_addresses",JSON.stringify(i.filter(t=>!m.includes(t.key)))),y([])},kt=()=>{St(i,"starkInfo")},[pt,ut]=T.useState(null),wt=[{title:"#",key:"index",align:"center",render:(t,s,a)=>a+1,width:60},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(t,s)=>s.key===pt?r.jsx(lt,{placeholder:"请输入备注",defaultValue:t,onPressEnter:o=>{s.name=o.target.value,d([...i]),localStorage.setItem("stark_addresses",JSON.stringify(i)),ut(null)}}):r.jsxs(r.Fragment,{children:[r.jsx(Tt,{color:"blue",children:t}),r.jsx(V,{shape:"circle",icon:r.jsx(jt,{}),size:"small",onClick:()=>ut(s.key)})]}),width:80},{title:r.jsxs("span",{children:["钱包地址",r.jsx("span",{onClick:it,style:{marginLeft:8,cursor:"pointer"},children:st()})]}),dataIndex:"address",key:"address",align:"center",className:"address",render:(t,s)=>K?"***":t===null?r.jsx(g,{}):t.slice(0,6)+"..."+t.slice(-6),width:180},{title:"创建时间",dataIndex:"create_time",key:"create_time",align:"center",className:"create_time",render:(t,s)=>{if(t===null)return r.jsx(g,{});{let a=new Date(t*1e3),o=a.getFullYear(),e=(a.getMonth()+1).toString().padStart(2,"0"),n=a.getDate().toString().padStart(2,"0");return`${o}/${e}/${n}`}},width:100},{title:r.jsxs("span",{children:["starkId",r.jsx("span",{onClick:it,style:{marginLeft:8,cursor:"pointer"},children:st()})]}),dataIndex:"stark_id",key:"stark_id",align:"center",render:(t,s)=>K?"***":t===null?r.jsx(g,{}):t,width:180},{title:"StarkWare",className:"zksync2",children:[{title:"ETH",dataIndex:"stark_eth_balance",key:"stark_eth_balance",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:80},{title:"USDC",dataIndex:"stark_usdc_balance",key:"stark_usdc_balance",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:80},{title:"USDT",dataIndex:"stark_usdt_balance",key:"stark_usdt_balance",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:80},{title:"DAI",dataIndex:"stark_dai_balance",key:"stark_dai_balance",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:80},{title:"Tx",dataIndex:"stark_tx_amount",key:"stark_tx_amount",align:"center",sorter:(t,s)=>t.stark_tx_amount-s.stark_tx_amount,render:(t,s)=>{if(t===null)return r.jsx(g,{});const a=Math.log(t),o=Math.log(1),e=Math.log(100),n=(a-o)/(e-o),_=.1,C=`rgba(173, 216, 230, ${n*(1-_)+_})`;return{children:t,props:{style:{background:C}}}},width:80},{title:"最后交易",dataIndex:"stark_latest_tx_time",key:"stark_latest_tx_time",align:"center",render:(t,s)=>{let a="inherit";return t===null?r.jsx(g,{}):(t.includes("天")&&parseInt(t)>7?a="red":a="#1677ff",r.jsx("a",{href:"https://starkscan.co/contract/"+s.address,target:"_blank",style:{color:a},children:t}))},width:80},{title:"官方桥Tx数量",className:"stark_cross_tx",children:[{title:"L1->L2",children:[{title:"ETH",dataIndex:"d_eth_count",key:"12cross_eth_tx",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:40},{title:"USDT",dataIndex:"d_usdt_count",key:"12cross_usdt_tx",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:40},{title:"USDC",dataIndex:"d_usdc_count",key:"12cross_usdc_tx",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:40},{title:"总计",dataIndex:"total_deposit_count",key:"12cross_total_tx",align:"center",render:(t,s)=>r.jsx("span",{style:{color:t===0?"red":"inherit"},children:t===null?r.jsx(g,{}):t}),width:40}]},{title:"L2->L1",className:"cross21",children:[{title:"ETH",dataIndex:"w_eth_count",key:"21cross_eth_tx",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:40},{title:"USDT",dataIndex:"w_usdt_count",key:"21cross_usdt_tx",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:40},{title:"USDC",dataIndex:"w_usdc_count",key:"21cross_usdc_tx",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:40},{title:"总计",dataIndex:"total_widthdraw_count",key:"21cross_total_tx",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:40}]}]},{title:"官方桥跨链额",className:"stark_cross_amount",children:[{title:"L1->L2",children:[{title:"ETH",dataIndex:"d_eth_amount",key:"12cross_eth_amount",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:60},{title:"USDT",dataIndex:"d_usdt_amount",key:"12cross_usdt_amount",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:60},{title:"USDC",dataIndex:"d_usdc_amount",key:"12cross_usdc_amount",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:60}]},{title:"L2->L1",className:"cross21",children:[{title:"ETH",dataIndex:"w_eth_amount",key:"21cross_eth_amount",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:60},{title:"USDT",dataIndex:"w_usdt_amount",key:"21cross_usdt_amount",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:60},{title:"USDC",dataIndex:"w_usdc_amount",key:"21cross_usdc_amount",align:"center",render:(t,s)=>t===null?r.jsx(g,{}):t,width:60}]}]},{title:"操作",key:"action",align:"center",render:(t,s)=>r.jsx(Ot,{size:"small",children:r.jsx(ht,{title:"确认删除？",onConfirm:()=>Y(s.key),children:r.jsx(V,{icon:r.jsx(ft,{})})})}),width:60}]}],yt={selectedRowKeys:m,onChange:t=>{y(t)}};return r.jsx("div",{children:r.jsxs(Gt,{children:[r.jsx(mt,{title:"批量添加地址",open:p,onOk:q,onCancel:()=>{w(!1),l.resetFields()},okText:"添加地址",cancelText:"取消",children:r.jsx(L,{form:l,layout:"vertical",children:r.jsx(L.Item,{label:"地址",name:"addresses",rules:[{required:!0}],children:r.jsx(Nt,{placeholder:"请输入地址，每行一个",style:{width:"500px",height:"200px"}})})})}),r.jsx(mt,{title:"添加地址",open:S,onOk:ot,onCancel:()=>h(!1),okText:"添加地址",cancelText:"取消",children:r.jsxs(L,{form:M,layout:"vertical",children:[r.jsx(L.Item,{label:"地址",name:"address",rules:[{required:!0}],children:r.jsx(lt,{placeholder:"请输入地址"})}),r.jsx(L.Item,{label:"备注",name:"name",children:r.jsx(lt,{placeholder:"请输入备注"})})]})}),r.jsx(g,{spinning:k,children:r.jsx(H,{rowSelection:yt,dataSource:i,pagination:!1,bordered:!0,style:{marginBottom:"0px"},size:"small",columns:wt,scroll:{y:dt},summary:t=>{let s=0,a=0,o=0,e=0;t.forEach(({stark_eth_balance:_,stark_usdc_balance:u,stark_usdt_balance:f,stark_dai_balance:C})=>{s+=Number(_),a+=Number(u),o+=Number(f),e+=Number(C)});const n=Array(17).fill().map((_,u)=>r.jsx(H.Summary.Cell,{index:u+10},u));return r.jsx(r.Fragment,{children:r.jsxs(H.Summary.Row,{children:[r.jsx(H.Summary.Cell,{index:0,colSpan:6,children:"总计"}),r.jsx(H.Summary.Cell,{index:6,children:s.toFixed(4)}),r.jsx(H.Summary.Cell,{index:7,children:a.toFixed(2)}),r.jsx(H.Summary.Cell,{index:8,children:o.toFixed(2)}),r.jsx(H.Summary.Cell,{index:9,children:e.toFixed(2)}),n]})})},footer:()=>r.jsx(Ct,{children:r.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[r.jsx(V,{type:"primary",onClick:I,loading:c,size:"large",style:{width:"20%"},icon:r.jsx(Dt,{}),children:"刷新选中地址"}),r.jsx(V,{type:"primary",onClick:()=>{h(!0)},size:"large",style:{width:"20%"},icon:r.jsx(It,{}),children:"添加地址"}),r.jsx(V,{type:"primary",onClick:()=>{w(!0)},size:"large",style:{width:"20%"},icon:r.jsx(bt,{}),children:"批量添加地址"}),r.jsx(ht,{title:"确认删除"+m.length+"个地址？",onConfirm:X,children:r.jsx(V,{type:"primary",danger:!0,size:"large",style:{width:"20%"},icon:r.jsx(ft,{}),children:"删除选中地址"})}),r.jsx(V,{type:"primary",icon:r.jsx(xt,{}),size:"large",style:{width:"8%"},onClick:kt})]})})})})]})})};export{Vt as default};
