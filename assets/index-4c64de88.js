import{r as d,j as e}from"./index-11fb5c98.js";import{F as l,C as E,a as C,T as L}from"./index-fabbc82a.js";import{S as f}from"./index-c7b6b5c6.js";import{J as m,W as T,V as M,L as B}from"./EditOutlined-d581a128.js";import{P as J,I as i,S as R}from"./index-d7eca782.js";import{M as q,P as K,D as z}from"./DeleteOutlined-d479eded.js";import"./index-8c7352a9.js";const Z=()=>{const[r,o]=d.useState([]),[p,u]=d.useState(""),[b,g]=d.useState(!1),[I,y]=d.useState(!1),[n]=l.useForm(),[k,S]=d.useState(!0),[x,F]=d.useState(""),c=t=>t.key===p,V=t=>{S(t.target.checked)};d.useEffect(()=>{y(!0);const t=localStorage.getItem("depositData");setTimeout(()=>{y(!1)},500),t&&o(JSON.parse(t))},[]),d.useEffect(()=>{localStorage.setItem("depositData",JSON.stringify(r))},[r]);const w=t=>{n.setFieldsValue({...t}),u(t.key)},A=async t=>{try{const a=await n.validateFields(),s=[...r],h=s.findIndex(j=>t.key===j.key);if(h>-1){const j=s[h];s.splice(h,1,{...j,...a}),o(s),u("")}else s.push(a),o(s),u("")}catch(a){console.log("Validate Failed:",a)}n.resetFields()},D=()=>{n.validateFields().then(t=>{const a=[...r,{key:Date.now().toString(),...t}];o(a),g(!1),n.resetFields()}).catch(t=>{console.log("Validation failed:",t)})},v=()=>{u("")},N=t=>{o(r.filter(a=>a.key!==t.key))},O=x?r.filter(t=>t.aAddress.toLowerCase().includes(x.toLowerCase())||t.bAddress.toLowerCase().includes(x.toLowerCase())):r,P=[{title:"#",key:"index",render:(t,a,s)=>s+1,align:"center"},{title:"个人地址",dataIndex:"aAddress",key:"aAddress",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"aAddress",style:{margin:0},children:e.jsx(i,{defaultValue:t,onChange:s=>n.setFieldsValue({aAddress:s.target.value})})}):t,align:"center",width:500},{title:"交易所地址",dataIndex:"bAddress",key:"bAddress",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"bAddress",style:{margin:0},children:e.jsx(i,{defaultValue:t,onChange:s=>n.setFieldsValue({bAddress:s.target.value})})}):t,align:"center",width:500},{title:"交易所名称",dataIndex:"exchangeName",key:"exchangeName",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"exchangeName",style:{margin:0},children:e.jsx(i,{defaultValue:t,onChange:s=>n.setFieldsValue({exchangeName:s.target.value})})}):t,align:"center"},{title:"备注",dataIndex:"notes",key:"notes",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"notes",style:{margin:0},children:e.jsx(i,{defaultValue:t,onChange:s=>n.setFieldsValue({notes:s.target.value})})}):t,align:"center"},{title:"操作",key:"action",render:(t,a)=>c(a)?e.jsxs(f,{children:[e.jsx(m,{type:"primary",onClick:()=>A(a),icon:e.jsx(T,{})}),e.jsx(m,{onClick:v,icon:e.jsx(M,{})})]}):e.jsxs(f,{children:[e.jsx(m,{type:"primary",disabled:p!=="",onClick:()=>w(a),icon:e.jsx(B,{})}),e.jsx(K,{title:"确定删除吗?",onConfirm:()=>N(a),children:e.jsx(m,{icon:e.jsx(z,{})})})]}),align:"center"}];return e.jsxs(e.Fragment,{children:[e.jsxs(f,{style:{marginBottom:10},children:[e.jsx(m,{type:"primary",onClick:()=>g(!0),icon:e.jsx(J,{}),shape:"round"}),e.jsx(E,{onChange:V,checked:k,children:"是否分页"}),e.jsxs(C,{color:"magenta",children:["当前共有",r.length,"条记录"]}),e.jsx(C,{color:"magenta",children:"方便管理个人地址和交易所充值地址，做到一一对应，防止女巫"})]}),e.jsx(i.Search,{bordered:!0,allowClear:!0,placeholder:"搜索地址",value:x,onChange:t=>F(t.target.value),style:{marginBottom:10}}),e.jsx(q,{title:"添加记录",open:b,onOk:D,onCancel:()=>g(!1),children:e.jsxs(l,{form:n,layout:"vertical",children:[e.jsx(l.Item,{label:"个人地址",name:"aAddress",rules:[{required:!0,message:"请输入个人地址"}],children:e.jsx(i,{})}),e.jsx(l.Item,{label:"交易所地址",name:"bAddress",rules:[{required:!0,message:"请输入交易所地址"}],children:e.jsx(i,{})}),e.jsx(l.Item,{label:"交易所名称",name:"exchangeName",children:e.jsx(i,{})}),e.jsx(l.Item,{label:"备注",name:"notes",children:e.jsx(i,{})})]})}),e.jsx(R,{spinning:I,children:e.jsx(L,{bordered:!0,columns:P,dataSource:O,className:"centered-table",pagination:k?{defaultPageSize:10}:!1})})]})};export{Z as default};
