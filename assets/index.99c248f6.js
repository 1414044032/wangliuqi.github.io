import{S as _,b as Q,f as W,a as X,c as Y,s as Z,d as ee}from"./index.vue_vue_type_script_setup_true_lang.e793fdb4.js";import{F as i,_ as D}from"./index.vue_vue_type_script_setup_true_lang.e875871c.js";import{_ as ue}from"./index.vue_vue_type_script_setup_true_lang.c9bf5dc0.js";import{A as le,B as oe,r as F,C as k,D as te,d as a,F as ae,o as g,c as A,l as I,e,f as o,G as ne,k as j,g as n,H as m,I as se,J as re,n as d}from"./index.2e5bc0a8.js";import"./user.65af7cc1.js";import"./index.vue_vue_type_script_setup_true_lang.4fed71ce.js";const ce={class:"app-container"},Fe=le({__name:"index",setup(pe){const w={name:"",state:_.ALL},{cloned:f,sync:V}=oe(w),h=F([]),U=async t=>{console.log(t);const l=await X(t),{data:r,msg:s}=l;if(r===1){m.success("\u9879\u76EE\u65B0\u589E\u6210\u529F"),b.value=!1,E();return}m.error(s)},x=async t=>{console.log(t);const l=await Y(t),{data:r,msg:s}=l;if(r===1){m.success("\u9879\u76EE\u4FEE\u6539\u6210\u529F"),v.value=!1,E();return}m.error(s)},b=F(!1),v=F(!1),B=F(!1),L=()=>{b.value=!0},P=t=>{C.form={...t},v.value=!0},M=t=>{C.form=t,B.value=!0},N=k({form:{name:"",projectManager:""},rules:{},formLabelConfig:[{label:"\u9879\u76EE\u540D\u79F0",prop:"name",type:i.Input,placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"},{label:"\u8D1F\u8D23\u4EBA",prop:"projectManager",type:i.Input,placeholder:"\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA"}]}),C=k({form:{name:""},rules:{},formLabelConfig:[{label:"\u9879\u76EE\u7F16\u53F7",prop:"code",type:i.Input,placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u7F16\u53F7"},{label:"\u9879\u76EE\u540D\u79F0",prop:"name",type:i.Input,placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"},{label:"\u9879\u76EE\u8D1F\u8D23\u4EBA",prop:"projectManager",type:i.UserSelect,placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u8D1F\u8D23\u4EBA"},{label:"\u9879\u76EE\u72B6\u6001",prop:"state",type:i.Radio,placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE\u72B6\u6001",options:Q}]});te(()=>{E()});const y=F(!1),E=async()=>{y.value=!0;try{const t=await W(f.value),{data:l,msg:r}=t;h.value=l}finally{y.value=!1}},T={[_.ALL]:{label:"\u5168\u90E8",color:"primary"},[_.NOT_START]:{label:"\u672A\u5F00\u59CB",color:"danger"},[_.PROCESSING]:{label:"\u6267\u884C\u4E2D",color:"warning"},[_.FINISHED]:{label:"\u5DF2\u5B8C\u6210",color:"success"}},$=async t=>{const l=await ee({id:t}),{data:r,msg:s}=l;if(r===1){m.success("\u9879\u76EE\u5220\u9664\u6210\u529F"),V(),E();return}m.error(s)};return(t,l)=>{const r=a("el-input"),s=a("el-form-item"),O=a("el-option"),R=a("el-select"),c=a("el-button"),z=a("el-form"),G=a("el-col"),H=a("el-row"),p=a("el-table-column"),J=a("el-popconfirm"),q=a("el-table"),K=ae("loading");return g(),A("div",ce,[I("div",null,[e(z,{model:w,inline:!0,"label-width":"68px"},{default:o(()=>[e(s,{label:"\u9879\u76EE\u540D\u79F0"},{default:o(()=>[e(r,{modelValue:n(f).name,"onUpdate:modelValue":l[0]||(l[0]=u=>n(f).name=u),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e(s,{label:"\u72B6\u6001"},{default:o(()=>[e(R,{modelValue:n(f).state,"onUpdate:modelValue":l[1]||(l[1]=u=>n(f).state=u),style:{width:"240px"},placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[(g(!0),A(se,null,re(n(Z),u=>(g(),j(O,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:o(()=>[e(c,{type:"primary",icon:"Search",onClick:E},{default:o(()=>[d("\u67E5\u8BE2")]),_:1}),e(c,{icon:"Refresh",onClick:n(V)},{default:o(()=>[d("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1})]),e(H,{gutter:10,class:"mb8"},{default:o(()=>[e(G,{span:1.5},{default:o(()=>[e(c,{type:"primary",plain:"",icon:"Plus",onClick:L},{default:o(()=>[d("\u65B0\u589E")]),_:1})]),_:1},8,["span"])]),_:1}),I("div",null,[ne((g(),j(q,{data:h.value,border:"",style:{width:"100%"}},{default:o(()=>[e(p,{prop:"code",label:"\u9879\u76EE\u7F16\u53F7"}),e(p,{prop:"name",label:"\u9879\u76EE\u540D\u79F0"}),e(p,{prop:"projectManager",label:"\u8D1F\u8D23\u4EBA"}),e(p,{prop:"state",label:"\u72B6\u6001"},{default:o(u=>[e(n(ue),{value:u.row.state,mapConfig:T},null,8,["value"])]),_:1}),e(p,{prop:"createAt",label:"\u521B\u5EFA\u65F6\u95F4"}),e(p,{label:"\u64CD\u4F5C"},{default:o(u=>[e(c,{size:"small",type:"primary",onClick:S=>M(u.row)},{default:o(()=>[d("\u8BE6\u60C5")]),_:2},1032,["onClick"]),e(c,{size:"small",type:"warning",onClick:S=>P(u.row)},{default:o(()=>[d("\u4FEE\u6539")]),_:2},1032,["onClick"]),e(J,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F",onConfirm:S=>$(u.row.id)},{reference:o(()=>[e(c,{size:"small",type:"danger"},{default:o(()=>[d("\u5220\u9664")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[K,y.value]])]),e(n(D),{modelValue:b.value,"onUpdate:modelValue":l[2]||(l[2]=u=>b.value=u),title:"\u65B0\u589E\u9879\u76EE",formConfig:N,onSubmit:U},null,8,["modelValue","formConfig"]),e(n(D),{modelValue:v.value,"onUpdate:modelValue":l[3]||(l[3]=u=>v.value=u),title:"\u4FEE\u6539\u9879\u76EE",formConfig:C,onSubmit:x},null,8,["modelValue","formConfig"]),e(n(D),{modelValue:B.value,"onUpdate:modelValue":l[4]||(l[4]=u=>B.value=u),title:"\u9879\u76EE\u8BE6\u60C5",formConfig:C,onlyShow:""},null,8,["modelValue","formConfig"])])}}});export{Fe as default};