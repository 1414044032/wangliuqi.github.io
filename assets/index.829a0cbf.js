import{_ as g}from"./index.vue_vue_type_script_setup_true_lang.71a764b5.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang.666c15f8.js";import{F as r}from"./interface.b519aa86.js";import{b as R,c as W,d as q}from"./timeSheet.f77fdda0.js";import{B as Q,C as Y,r as F,D as v,F as Z,d,G as ee,o as B,c as k,j as V,e,f as t,g as n,H as ue,n as x,I as E,J as le,K as te,p as _}from"./index.8b4e0df5.js";import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang.0f2a16a1.js";import{_ as oe}from"./index.vue_vue_type_script_setup_true_lang.abca134c.js";import{E as D,f as ne,g as re}from"./interface.dd4c3312.js";import pe from"./index.544fd366.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang.45ca6477.js";import"./user.517568cb.js";import"./index.vue_vue_type_script_setup_true_lang.2ae15ae8.js";import"./interface.7e30e7ed.js";import"./part.601bb279.js";const de={class:"app-container"},Ve=Q({__name:"index",setup(Fe){const h={beginDate:"",companyName:"",endDate:"",pageNumber:1,pageSize:10,isPage:!0,partCode:"",projectCode:"",taskState:D.ALL},{cloned:o,sync:w}=Y(h),y=F([]),S=F(0),U=async a=>{console.log(a);const l=await W(a),{data:p,msg:s}=l;if(p===1){E.success("\u5916\u534F\u4EFB\u52A1\u65B0\u589E\u6210\u529F"),c.value=!1,m();return}E.error(s)},N=async a=>{console.log(a);const l=await q(a),{data:p,msg:s}=l;if(p===1){E.success("\u5916\u534F\u9879\u76EE\u4FEE\u6539\u6210\u529F"),i.value=!1,m();return}E.error(s)},c=F(!1),i=F(!1);F(!1);const I=()=>{c.value=!0},P=a=>{C.form={...a},i.value=!0},T=v({form:{beginDate:"",companyName:"",endDate:"",externalContact:"",externalPhone:"",internalUserId:void 0,processItemId:void 0},rules:{},formLabelConfig:[{label:"\u5916\u534F\u516C\u53F8",prop:"companyName",type:r.Input,placeholder:"\u8BF7\u8F93\u5165\u5916\u534F\u516C\u53F8"},{label:"\u5916\u534F\u4EBA\u540D\u79F0",prop:"externalContact",type:r.Input,placeholder:"\u8BF7\u8F93\u5165\u5916\u534F\u4EBA\u540D\u79F0"},{label:"\u5916\u534F\u8D1F\u8D23\u4EBA\u7535\u8BDD",prop:"externalPhone",type:r.Input,placeholder:"\u8BF7\u8F93\u5165\u5916\u534F\u4EBA\u7535\u8BDD"},{label:"\u5185\u90E8\u8054\u7CFB\u4EBA",prop:"internalUserId",type:r.UserSelect,placeholder:"\u8BF7\u8F93\u5165\u5916\u534F\u4EBA\u540D\u79F0"},{label:"\u8BA1\u5212\u51FA\u5382\u65F6\u95F4",prop:"beginDate",type:r.DatePicker,placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u51FA\u5382\u65F6\u95F4"},{label:"\u8BA1\u5212\u51FA\u5382\u65F6\u95F4",prop:"endDate",type:r.DatePicker,placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u51FA\u5382\u65F6\u95F4"}]}),C=v({form:{},rules:{},formLabelConfig:[{label:"\u5916\u534F\u516C\u53F8",prop:"companyName",type:r.Input,placeholder:"\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0"},{label:"\u8BA1\u5212\u51FA\u5382\u65F6\u95F4",prop:"beginDate",type:r.DatePicker,placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u51FA\u5382\u65F6\u95F4"},{label:"\u8BA1\u5212\u8FD4\u5382\u65F6\u95F4",prop:"beginDate",type:r.DatePicker,placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u8FD4\u5382\u65F6\u95F4"},{label:"\u5916\u534F\u4EBA\u540D\u5B57",prop:"externalContact",type:r.Input,placeholder:"\u8BF7\u8F93\u5165\u5916\u534F\u4EBA\u540D\u5B57"},{label:"\u5916\u534F\u8D1F\u8D23\u4EBA\u7535\u8BDD",prop:"externalPhone",type:r.Input,placeholder:"\u8BF7\u8F93\u5165\u5916\u534F\u8D1F\u8D23\u4EBA\u7535\u8BDD"},{label:"\u5185\u90E8\u8054\u7CFB\u4EBA",prop:"internalContact",type:r.Input,placeholder:"\u8BF7\u8F93\u5165\u5916\u534F\u8D1F\u8D23\u4EBA\u7535\u8BDD"},{label:"\u5916\u534F\u4EFB\u52A1\u72B6\u6001",prop:"taskState",type:r.Select,placeholder:"\u8BF7\u9009\u62E9\u5916\u534F\u4EFB\u52A1\u72B6\u6001",options:ne}]});Z(()=>{m()});const b=F(!1),m=async a=>{((a==null?void 0:a.page)||(a==null?void 0:a.limit))&&(o.value={...o.value,pageNumber:a.page,pageSize:a.limit}),b.value=!0;try{const l=await R(o.value),{data:p,msg:s}=l;y.value=p==null?void 0:p.data,S.value=p==null?void 0:p.total}finally{b.value=!1}},j=[{prop:"actualWorkHour",label:"\u5B9E\u9645\u5DE5\u65F6"},{prop:"beginDate",label:"\u8BA1\u5212\u51FA\u5382\u65F6\u95F4"},{prop:"companyName",label:"\u5916\u534F\u516C\u53F8"},{prop:"endDate",label:"\u8BA1\u5212\u51FA\u5382\u65F6\u95F4"},{prop:"externalContact",label:"\u5916\u534F\u4EBA\u540D\u79F0"},{prop:"externalPhone",label:"\u5916\u534F\u8D1F\u8D23\u4EBA\u7535\u8BDD"},{prop:"partName",label:"\u96F6\u4EF6\u540D\u79F0"},{prop:"projectName",label:"\u9879\u76EE\u540D\u79F0"},{prop:"taskState",label:"\u5916\u534F\u4EFB\u52A1\u72B6\u6001",slotFlag:"taskState"}],M={[D.COMPLETED]:{label:"\u5DF2\u5B8C\u6210",color:"success"},[D.UNEXECUTED]:{label:"\u672A\u6267\u884C",color:"danger"},[D.EXECUTING]:{label:"\u6267\u884C\u4E2D",color:"warning"}};return(a,l)=>{const p=d("el-input"),s=d("el-form-item"),A=d("el-date-picker"),L=d("el-option"),$=d("el-select"),f=d("el-button"),z=d("el-form"),O=d("el-col"),G=d("el-row"),H=d("el-table-column"),X=d("el-table"),J=ee("loading");return B(),k("div",de,[V("div",null,[e(z,{model:n(o),inline:!0},{default:t(()=>[e(s,{label:"\u5916\u534F\u516C\u53F8"},{default:t(()=>[e(p,{modelValue:n(o).companyName,"onUpdate:modelValue":l[0]||(l[0]=u=>n(o).companyName=u),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e(s,{label:"\u8BA1\u5212\u51FA\u5382\u65F6\u95F4"},{default:t(()=>[e(A,{style:{width:"240px"},modelValue:n(o).beginDate,"onUpdate:modelValue":l[1]||(l[1]=u=>n(o).beginDate=u),type:"date",placeholder:"\u9009\u62E9\u65F6\u95F4","value-format":"yyyy-MM-dd"},null,8,["modelValue"])]),_:1}),e(s,{label:"\u8BA1\u5212\u51FA\u5382\u65F6\u95F4"},{default:t(()=>[e(A,{style:{width:"240px"},modelValue:n(o).endDate,"onUpdate:modelValue":l[2]||(l[2]=u=>n(o).endDate=u),type:"date",placeholder:"\u9009\u62E9\u65F6\u95F4","value-format":"yyyy-MM-dd"},null,8,["modelValue"])]),_:1}),e(s,{label:"\u9879\u76EE\u540D\u79F0"},{default:t(()=>[e(K,{modelValue:n(o).projectCode,"onUpdate:modelValue":l[3]||(l[3]=u=>n(o).projectCode=u),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e(s,{label:"\u96F6\u4EF6\u540D\u79F0"},{default:t(()=>[e(ae,{modelValue:n(o).projectCode,"onUpdate:modelValue":l[4]||(l[4]=u=>n(o).projectCode=u),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e(s,{label:"\u5916\u534F\u4EFB\u52A1\u72B6\u6001"},{default:t(()=>[e($,{modelValue:n(o).taskState,"onUpdate:modelValue":l[5]||(l[5]=u=>n(o).taskState=u),style:{width:"240px"},placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[(B(!0),k(le,null,te(n(re),u=>(B(),x(L,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:t(()=>[e(f,{type:"primary",icon:"Search",onClick:m},{default:t(()=>[_("\u67E5\u8BE2")]),_:1}),e(f,{icon:"Refresh",onClick:n(w)},{default:t(()=>[_("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),e(G,{gutter:10,class:"mb8"},{default:t(()=>[e(O,{span:1.5},{default:t(()=>[e(f,{type:"primary",plain:"",icon:"Plus",onClick:I},{default:t(()=>[_("\u65B0\u589E")]),_:1})]),_:1},8,["span"])]),_:1}),V("div",null,[ue((B(),x(X,{data:y.value,border:"",style:{width:"100%"}},{default:t(()=>[e(oe,{columns:j},{taskState:t(u=>[e(se,{value:u.row.taskState,mapConfig:M},null,8,["value"])]),_:1}),e(H,{label:"\u64CD\u4F5C",fixed:"right",width:"200"},{default:t(u=>[e(f,{size:"small",type:"warning",onClick:ce=>P(u.row)},{default:t(()=>[_("\u4FEE\u6539")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[J,b.value]])]),e(g,{modelValue:c.value,"onUpdate:modelValue":l[6]||(l[6]=u=>c.value=u),title:"\u65B0\u589E\u5916\u534F",formConfig:T,onSubmit:U,width:"50%",col:"2"},{default:t(()=>[e(pe)]),_:1},8,["modelValue","formConfig"]),e(g,{modelValue:i.value,"onUpdate:modelValue":l[7]||(l[7]=u=>i.value=u),title:"\u4FEE\u6539\u5916\u534F\u4EFB\u52A1",formConfig:C,onSubmit:N},null,8,["modelValue","formConfig"])])}}});export{Ve as default};