import{F as a,t as j,_ as M,v as R}from"./index.vue_vue_type_script_setup_true_lang.e875871c.js";import{A as U,B as z,r as n,C as G,D as K,d as o,F as W,o as y,c as $,l as s,e as t,f as u,g as _,G as H,k as q,H as C,n as F,y as b}from"./index.2e5bc0a8.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang.3131d1ea.js";import"./user.65af7cc1.js";import"./index.vue_vue_type_script_setup_true_lang.4fed71ce.js";import"./index.vue_vue_type_script_setup_true_lang.e793fdb4.js";const O={class:"app-container"},ae=U({__name:"index",setup(Q){const A={pageNumber:1,pageSize:10,isPage:!0,planNo:""},{cloned:p,sync:g}=z(A),v=n([]),h=n(0),w=async i=>{console.log(i);const l=await R(i),{data:m,msg:d}=l;if(m===1){C.success("\u70B9\u68C0\u8BA1\u5212\u65B0\u589E\u6210\u529F"),c.value=!1,D();return}C.error(d)},c=n(!1);n(!1),n(!1);const L=()=>{c.value=!0},N=G({form:{beginDate:"",count:0,endDate:"",planDetectionIdList:[],planDeviceNoList:[],planName:"",timeType:"",userId:0},rules:{},formLabelConfig:[{prop:"beginDate",label:"\u8BA1\u5212\u5F00\u59CB\u65F6\u95F4",type:a.DatePicker,placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u5F00\u59CB\u65F6\u95F4"},{prop:"count",label:"\u8BA1\u5212\u6B21\u6570",type:a.Number,placeholder:"\u8BF7\u8F93\u5165\u8BA1\u5212\u6B21\u6570"},{prop:"endDate",label:"\u8BA1\u5212\u7ED3\u675F\u65F6\u95F4",type:a.DatePicker,placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u7ED3\u675F\u65F6\u95F4"},{prop:"planDetectionIdList",label:"\u68C0\u6D4B\u9879",type:a.DetectionSelect,multiple:!0,placeholder:"\u8BF7\u9009\u62E9\u68C0\u6D4B\u9879"},{prop:"planDeviceNoList",label:"\u68C0\u6D4B\u8BBE\u5907",type:a.DeviceSelect,placeholder:"\u8BF7\u9009\u62E9\u8BBE\u5907",multiple:!0},{prop:"planName",label:"\u8BA1\u5212\u540D\u79F0",type:a.Input,placeholder:"\u8BF7\u8F93\u5165\u8BA1\u5212\u540D\u79F0"},{prop:"timeType",label:"\u8BA1\u5212\u7C7B\u578B",type:a.Select,placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u7C7B\u578B",options:[{label:"\u65E5",value:"DAY"},{label:"\u5468",value:"WEEK"},{label:"\u5E74",value:"YEAR"}]},{prop:"userId",label:"\u8BA1\u5212\u8D1F\u8D23\u4EBA",type:a.UserSelect,placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u8D1F\u8D23\u4EBA"}]}),k={DAY:"\u65E5",WEEK:"\u5468",YEAR:"\u5E74"};K(()=>{D()});const f=n(!1),D=async()=>{f.value=!0;try{const i=await j(p.value),{data:l,msg:m}=i;v.value=l==null?void 0:l.data,h.value=l==null?void 0:l.total}finally{f.value=!1}},I=[{prop:"planName",label:"\u8BA1\u5212\u540D\u79F0"},{prop:"timeType",label:"\u65F6\u95F4\u9891\u6B21",slotFlag:"timeType"},{prop:"state",label:"\u72B6\u6001"},{prop:"beginDate",label:"\u8BA1\u5212\u5F00\u59CB\u65E5\u671F"},{prop:"endDate",label:"\u8BA1\u5212\u7ED3\u675F\u65F6\u95F4"},{prop:"userNick",label:"\u8D1F\u8D23\u4EBA"},{prop:"deviceList",label:"\u68C0\u6D4B\u8BBE\u5907",slotFlag:"deviceList"},{prop:"detectionItemList",label:"\u68C0\u6D4B\u9879\u76EE",slotFlag:"detectionItemList"}];return(i,l)=>{const m=o("el-input"),d=o("el-form-item"),B=o("el-button"),S=o("el-form"),T=o("el-col"),V=o("el-row"),x=o("el-table-column"),P=o("el-table"),Y=W("loading");return y(),$("div",O,[s("div",null,[t(S,{model:_(p),inline:!0},{default:u(()=>[t(d,{label:"\u8BA1\u5212\u5E8F\u5217\u53F7"},{default:u(()=>[t(m,{modelValue:_(p).planNo,"onUpdate:modelValue":l[0]||(l[0]=e=>_(p).planNo=e),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t(d,null,{default:u(()=>[t(B,{type:"primary",icon:"Search",onClick:D},{default:u(()=>[F("\u67E5\u8BE2")]),_:1}),t(B,{icon:"Refresh",onClick:_(g)},{default:u(()=>[F("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),t(V,{gutter:10,class:"mb8"},{default:u(()=>[t(T,{span:1.5},{default:u(()=>[t(B,{type:"primary",plain:"",icon:"Plus",onClick:L},{default:u(()=>[F("\u65B0\u589E")]),_:1})]),_:1},8,["span"])]),_:1}),s("div",null,[H((y(),q(P,{data:v.value,border:"",style:{width:"100%"}},{default:u(()=>[t(J,{columns:I},{timeType:u(e=>[s("span",null,b("\u6BCF"+k[e==null?void 0:e.row.timeType]+(e==null?void 0:e.row.count)+"\u6B21"),1)]),deviceList:u(e=>{var r;return[s("div",null,b((r=e==null?void 0:e.row.deviceList)==null?void 0:r.map(E=>E.name).join(", ")),1)]}),detectionItemList:u(e=>{var r;return[s("div",null,b((r=e==null?void 0:e.row.detectionItemList)==null?void 0:r.map(E=>E.item).join(", ")),1)]}),_:1}),t(x,{label:"\u64CD\u4F5C",fixed:"right",width:"200"},{default:u(e=>[t(B,{size:"small",type:"warning"},{default:u(()=>[F("\u4FEE\u6539")]),_:1})]),_:1})]),_:1},8,["data"])),[[Y,f.value]])]),t(M,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=e=>c.value=e),title:"\u65B0\u589E\u70B9\u68C0\u8BA1\u5212",formConfig:N,onSubmit:w},null,8,["modelValue","formConfig"])])}}});export{ae as default};