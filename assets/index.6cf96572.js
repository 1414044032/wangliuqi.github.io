import{S as F,b as Q,s as W}from"./interface.7e30e7ed.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang.71a764b5.js";import{_ as X}from"./index.vue_vue_type_script_setup_true_lang.45ca6477.js";import{F as c}from"./interface.b519aa86.js";import{f as Y,a as Z,b as ee,c as ue}from"./index.vue_vue_type_script_setup_true_lang.666c15f8.js";import{B as oe,C as le,r as _,D as A,F as te,d as a,G as ae,o as B,c as S,j as k,e,f as l,H as ne,n as j,g as n,I as m,J as re,K as se,p as d}from"./index.8b4e0df5.js";import"./user.517568cb.js";import"./index.vue_vue_type_script_setup_true_lang.2ae15ae8.js";const ce={class:"app-container"},ge=oe({__name:"index",setup(pe){const w={name:"",state:F.ALL},{cloned:f,sync:V}=le(w),h=_([]),x=async t=>{console.log(t);const o=await Z(t),{data:s,msg:r}=o;if(s===1){m.success("\u9879\u76EE\u65B0\u589E\u6210\u529F"),b.value=!1,E();return}m.error(r)},L=async t=>{console.log(t);const o=await ee(t),{data:s,msg:r}=o;if(s===1){m.success("\u9879\u76EE\u4FEE\u6539\u6210\u529F"),g.value=!1,E();return}m.error(r)},b=_(!1),g=_(!1),C=_(!1),M=()=>{b.value=!0},P=t=>{v.form={...t},g.value=!0},U=t=>{v.form=t,C.value=!0},N=A({form:{code:"",name:"",projectManager:""},rules:{code:[{required:!0,message:"\u8BF7\u8F93\u5165\u9879\u76EE\u7F16\u53F7",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",trigger:"blur"}],projectManager:[{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE\u8D1F\u8D23\u4EBA",trigger:"blur"}]},formLabelConfig:[{label:"\u9879\u76EE\u7F16\u53F7",prop:"code",type:c.Input,placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u7F16\u53F7"},{label:"\u9879\u76EE\u540D\u79F0",prop:"name",type:c.Input,placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"},{label:"\u8D1F\u8D23\u4EBA",prop:"projectManager",type:c.Input,placeholder:"\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA"}]}),v=A({form:{name:""},rules:{},formLabelConfig:[{label:"\u9879\u76EE\u7F16\u53F7",prop:"code",type:c.Input,placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u7F16\u53F7"},{label:"\u9879\u76EE\u540D\u79F0",prop:"name",type:c.Input,placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"},{label:"\u9879\u76EE\u8D1F\u8D23\u4EBA",prop:"projectManager",type:c.Input,placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u8D1F\u8D23\u4EBA"},{label:"\u9879\u76EE\u72B6\u6001",prop:"state",type:c.Radio,placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE\u72B6\u6001",options:Q}]});te(()=>{E()});const y=_(!1),E=async()=>{y.value=!0;try{const t=await Y(f.value),{data:o,msg:s}=t;h.value=o}finally{y.value=!1}},T={[F.ALL]:{label:"\u5168\u90E8",color:"primary"},[F.NOT_START]:{label:"\u672A\u5F00\u59CB",color:"danger"},[F.PROCESSING]:{label:"\u6267\u884C\u4E2D",color:"warning"},[F.FINISHED]:{label:"\u5DF2\u5B8C\u6210",color:"success"}},$=async t=>{const o=await ue({id:t}),{data:s,msg:r}=o;if(s===1){m.success("\u9879\u76EE\u5220\u9664\u6210\u529F"),V(),E();return}m.error(r)};return(t,o)=>{const s=a("el-input"),r=a("el-form-item"),O=a("el-option"),R=a("el-select"),p=a("el-button"),q=a("el-form"),z=a("el-col"),G=a("el-row"),i=a("el-table-column"),H=a("el-popconfirm"),J=a("el-table"),K=ae("loading");return B(),S("div",ce,[k("div",null,[e(q,{model:w,inline:!0,"label-width":"68px"},{default:l(()=>[e(r,{label:"\u9879\u76EE\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:n(f).name,"onUpdate:modelValue":o[0]||(o[0]=u=>n(f).name=u),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e(r,{label:"\u72B6\u6001"},{default:l(()=>[e(R,{modelValue:n(f).state,"onUpdate:modelValue":o[1]||(o[1]=u=>n(f).state=u),style:{width:"240px"},placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(B(!0),S(re,null,se(n(W),u=>(B(),j(O,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(p,{type:"primary",icon:"Search",onClick:E},{default:l(()=>[d("\u67E5\u8BE2")]),_:1}),e(p,{icon:"Refresh",onClick:n(V)},{default:l(()=>[d("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1})]),e(G,{gutter:10,class:"mb8"},{default:l(()=>[e(z,{span:1.5},{default:l(()=>[e(p,{type:"primary",plain:"",icon:"Plus",onClick:M},{default:l(()=>[d("\u65B0\u589E")]),_:1})]),_:1},8,["span"])]),_:1}),k("div",null,[ne((B(),j(J,{data:h.value,border:"",style:{width:"100%"}},{default:l(()=>[e(i,{prop:"code",label:"\u9879\u76EE\u7F16\u53F7"}),e(i,{prop:"name",label:"\u9879\u76EE\u540D\u79F0"}),e(i,{prop:"projectManager",label:"\u8D1F\u8D23\u4EBA"}),e(i,{prop:"state",label:"\u72B6\u6001"},{default:l(u=>[e(n(X),{value:u.row.state,mapConfig:T},null,8,["value"])]),_:1}),e(i,{prop:"createAt",label:"\u521B\u5EFA\u65F6\u95F4"}),e(i,{label:"\u64CD\u4F5C"},{default:l(u=>[e(p,{size:"small",type:"primary",onClick:I=>U(u.row)},{default:l(()=>[d("\u8BE6\u60C5")]),_:2},1032,["onClick"]),e(p,{size:"small",type:"warning",onClick:I=>P(u.row)},{default:l(()=>[d("\u4FEE\u6539")]),_:2},1032,["onClick"]),e(H,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F",onConfirm:I=>$(u.row.id)},{reference:l(()=>[e(p,{size:"small",type:"danger"},{default:l(()=>[d("\u5220\u9664")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[K,y.value]])]),e(n(D),{modelValue:b.value,"onUpdate:modelValue":o[2]||(o[2]=u=>b.value=u),title:"\u65B0\u589E\u9879\u76EE",formConfig:N,onSubmit:x},null,8,["modelValue","formConfig"]),e(n(D),{modelValue:g.value,"onUpdate:modelValue":o[3]||(o[3]=u=>g.value=u),title:"\u4FEE\u6539\u9879\u76EE",formConfig:v,onSubmit:L},null,8,["modelValue","formConfig"]),e(n(D),{modelValue:C.value,"onUpdate:modelValue":o[4]||(o[4]=u=>C.value=u),title:"\u9879\u76EE\u8BE6\u60C5",formConfig:v,onlyShow:""},null,8,["modelValue","formConfig"])])}}});export{ge as default};