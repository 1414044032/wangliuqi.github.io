import{C as f,a as E,B as X,f as Y,b as Z,c as ee,d as ue}from"./index.dc7bc0b7.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang.71a764b5.js";import{F as p}from"./interface.b519aa86.js";import{_ as te}from"./index.vue_vue_type_script_setup_true_lang.45ca6477.js";import{B as oe,C as le,r as C,F as ae,D as h,d as a,G as ne,o as g,c as D,j as I,e,f as l,g as n,H as se,n as V,I as m,J as ie,K as re,p as _}from"./index.8b4e0df5.js";import{_ as pe}from"./index.vue_vue_type_script_setup_true_lang.abca134c.js";import"./user.517568cb.js";import"./index.vue_vue_type_script_setup_true_lang.2ae15ae8.js";import"./index.vue_vue_type_script_setup_true_lang.666c15f8.js";import"./interface.7e30e7ed.js";const ce={class:"app-container"},Ee=oe({__name:"index",setup(me){const w={isPage:!0,pageNumber:1,pageSize:10,itemName:"",itemType:f.ALL},{cloned:s,sync:N}=le(w),B=C([]),k=async u=>{console.log(u);const t=await Y(u),{data:i,msg:r}=t;if(i===1){m.success("\u6210\u672C\u9879\u65B0\u589E\u6210\u529F"),F.value=!1,c();return}m.error(r)},U=async u=>{const t=await Z(u),{data:i,msg:r}=t;if(i===1){m.success("\u6210\u672C\u9879\u4FEE\u6539\u6210\u529F"),y.value=!1,c();return}m.error(r)},P=C(!1),b=C(0),c=async u=>{((u==null?void 0:u.page)||(u==null?void 0:u.limit))&&(s.value={...s.value,pageNumber:u.page,pageSize:u.limit});const t=await ee(s.value),{data:i,msg:r}=t;B.value=i.data,b.value=i.total};ae(()=>{c()});const F=C(!1),y=C(!1),S=()=>{console.log("\u65B0\u589E"),F.value=!0},x=u=>{v.form={...u},y.value=!0},z=async u=>{const t=await ue({id:u}),{data:i,msg:r}=t;if(i===1){m.success("\u6210\u672C\u9879\u5220\u9664\u6210\u529F"),c();return}m.error(r)},v=h({form:{},rules:{},formLabelConfig:[{label:"\u6210\u672C\u540D\u79F0",prop:"itemName",type:p.Input,placeholder:"\u8BF7\u8F93\u5165"},{label:"\u6210\u672C\u5355\u4F4D",prop:"itemUnit",type:p.Input,placeholder:"\u8BF7\u8F93\u5165\u6210\u672C\u5355\u4F4D"},{label:"\u5355\u4EF7",prop:"unitPrice",type:p.Input,placeholder:"\u8BF7\u8F93\u5165\u6210\u672C\u5355\u4EF7"},{label:"\u6210\u672C\u7C7B\u578B",prop:"itemType",type:p.Select,placeholder:"\u8BF7\u9009\u62E9\u6210\u672C\u7C7B\u578B",options:E}]}),L=h({form:{itemName:"",itemUnit:"",unitPrice:0,itemType:f.Person},rules:{},formLabelConfig:[{label:"\u6210\u672C\u540D\u79F0",prop:"itemName",type:p.Input,placeholder:"\u8BF7\u8F93\u5165"},{label:"\u6210\u672C\u5355\u4F4D",prop:"itemUnit",type:p.Input,placeholder:"\u8BF7\u8F93\u5165\u6210\u672C\u5355\u4F4D"},{label:"\u5355\u4EF7",prop:"unitPrice",type:p.Number,placeholder:"\u8BF7\u8F93\u5165\u6210\u672C\u5355\u4EF7"},{label:"\u6210\u672C\u7C7B\u578B",prop:"itemType",type:p.Radio,placeholder:"\u8BF7\u9009\u62E9\u6210\u672C\u7C7B\u578B",options:X}]}),$=[{label:"\u6210\u672C\u540D\u79F0",prop:"itemName"},{label:"\u6210\u672C\u5355\u4F4D",prop:"itemUnit"},{label:"\u5355\u4EF7",prop:"unitPrice"},{label:"\u6210\u672C\u7C7B\u578B",prop:"itemType",slotFlag:"itemType"}],A={[f.Person]:{label:"\u4EBA\u5DE5\u6210\u672C",color:"success"},[f.Material]:{label:"\u6750\u6599\u6210\u672C",color:"success"},[f.Device]:{label:"\u8BBE\u5907\u6210\u672C",color:"success"}};return(u,t)=>{const i=a("el-input"),r=a("el-form-item"),M=a("el-option"),G=a("el-select"),d=a("el-button"),R=a("el-form"),j=a("el-col"),H=a("el-row"),J=a("el-popconfirm"),K=a("el-table-column"),O=a("el-table"),q=a("pagination"),Q=ne("loading");return g(),D("div",ce,[I("div",null,[e(R,{model:n(s),inline:!0},{default:l(()=>[e(r,{label:"\u6210\u672C\u540D\u79F0"},{default:l(()=>[e(i,{modelValue:n(s).itemName,"onUpdate:modelValue":t[0]||(t[0]=o=>n(s).itemName=o),style:{width:"150px"}},null,8,["modelValue"])]),_:1}),e(r,{label:"\u6210\u672C\u7C7B\u578B"},{default:l(()=>[e(G,{modelValue:n(s).itemType,"onUpdate:modelValue":t[1]||(t[1]=o=>n(s).itemType=o),style:{width:"240px"},placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(g(!0),D(ie,null,re(n(E),o=>(g(),V(M,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(d,{type:"primary",icon:"Search",onClick:c},{default:l(()=>[_("\u67E5\u8BE2")]),_:1}),e(d,{icon:"Refresh",onClick:n(N)},{default:l(()=>[_("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),e(H,{gutter:10,class:"mb8"},{default:l(()=>[e(j,{span:1.5},{default:l(()=>[e(d,{type:"primary",plain:"",icon:"Plus",onClick:S},{default:l(()=>[_("\u65B0\u589E")]),_:1})]),_:1},8,["span"])]),_:1}),I("div",null,[se((g(),V(O,{data:B.value,border:"",style:{width:"100%"}},{default:l(()=>[e(pe,{columns:$},{itemType:l(o=>[e(te,{value:o.row.itemType,mapConfig:A},null,8,["value"])]),_:1}),e(K,{label:"\u64CD\u4F5C"},{default:l(o=>[e(d,{size:"small",type:"warning",onClick:W=>x(o.row)},{default:l(()=>[_("\u4FEE\u6539")]),_:2},1032,["onClick"]),e(J,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F",onConfirm:W=>z(o.row.id)},{reference:l(()=>[e(d,{size:"small",type:"danger"},{default:l(()=>[_("\u5220\u9664")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[Q,P.value]]),e(q,{total:b.value,page:n(s).pageNumber,"page-size":n(s).pageSize,onPagination:c},null,8,["total","page","page-size"])]),e(n(T),{modelValue:F.value,"onUpdate:modelValue":t[2]||(t[2]=o=>F.value=o),title:"\u65B0\u589E\u6210\u672C\u7C7B\u578B",formConfig:L,onSubmit:k},null,8,["modelValue","formConfig"]),e(n(T),{modelValue:y.value,"onUpdate:modelValue":t[3]||(t[3]=o=>y.value=o),title:"\u4FEE\u6539\u6210\u672C\u7C7B\u578B",formConfig:v,onSubmit:U},null,8,["modelValue","formConfig"])])}}});export{Ee as default};