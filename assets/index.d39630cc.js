import{A as re,B as pe,r as F,C as D,D as ie,d as r,F as se,o as g,c as P,l as _,e,f as a,g as p,G as I,k as B,O as de,H as f,I as ce,J as me,n as c,m as $,y as Fe}from"./index.6261e021.js";import{E as fe,g as z,_ as Ee,h as ge,i as _e}from"./index.vue_vue_type_script_setup_true_lang.15dd06b5.js";import{F as i,_ as L}from"./index.vue_vue_type_script_setup_true_lang.dcc7c371.js";import{c as be,d as Ce,e as ve,b as Be,g as ye}from"./part.b134bb3b.js";import{_ as we}from"./index.vue_vue_type_script_setup_true_lang.c403059b.js";import{_ as he}from"./index.vue_vue_type_script_setup_true_lang.ac048ba6.js";import{V as De,f as Ve}from"./index.10f0ed4f.js";import"./user.6abe22d0.js";import"./index.vue_vue_type_script_setup_true_lang.11b02900.js";const Ue={class:"app-container"},je=re({__name:"index",setup(Ae){const j={partName:"",external:-1,isPage:!0,pageNumber:1,pageSize:10},{cloned:s,sync:M}=pe(j),y=F(!1),b=F(!1),C=F(!1),n=D({id:0,radio:"local",drawingUrl:"",file:null}),V=F(null),R=()=>{V.value.click()},O=o=>{var d;const t=(d=o.target.files)==null?void 0:d[0];t&&(n.file=t)},v=F(!1),T=async()=>{v.value=!0;let o=n.drawingUrl;if(n.radio==="local"){const l=new FormData;l.append("file",n.file),o=(await Ve(l)).data}await Be({id:n.id,drawingUrl:o}),f.success("\u96F6\u4EF6\u56FE\u7EB8\u66F4\u65B0\u6210\u529F"),n.drawingUrl=o,v.value=!1,E()},U=F([]),w=F(0),h=F(!1),E=async o=>{((o==null?void 0:o.page)||(o==null?void 0:o.limit))&&(s.value.pageNumber=o.page,s.value.pageSize=o.limit),h.value=!0;try{const l=await be(s.value),{data:t,msg:d}=l;if(t){U.value=t.data,w.value=t.total;return}f.error(d)}finally{h.value=!1}},G=async o=>{const l=await Ce(o),{data:t,msg:d}=l;if(t===1){f.success("\u96F6\u4EF6\u65B0\u589E\u6210\u529F"),y.value=!1,E();return}f.error(d)},H=async o=>{const l=await ve(o),{data:t,msg:d}=l;if(t===1){f.success("\u96F6\u4EF6\u4FEE\u6539\u6210\u529F"),b.value=!1,E();return}f.error(d)};ie(()=>{E()});const J=D({form:{partName:"",external:fe.INTERNAL,count:0},rules:{},formLabelConfig:[{label:"\u96F6\u4EF6\u540D\u79F0",prop:"partName",type:i.Input,placeholder:"\u8BF7\u8F93\u5165\u96F6\u4EF6\u540D\u79F0"},{label:"\u5916\u534F",prop:"external",type:i.Select,options:z,placeholder:"\u8BF7\u9009\u62E9"},{label:"\u6570\u91CF",prop:"count",type:i.Number,placeholder:"\u8BF7\u8F93\u5165\u6570\u91CF"}]}),A=D({form:{},rules:{},formLabelConfig:[{label:"\u96F6\u4EF6\u7F16\u7801",prop:"code",type:i.Input,placeholder:"\u8BF7\u8F93\u5165\u96F6\u4EF6\u7F16\u7801"},{label:"\u96F6\u4EF6\u540D\u79F0",prop:"partName",type:i.Input,placeholder:"\u8BF7\u8F93\u5165\u96F6\u4EF6\u540D\u79F0"},{label:"\u6570\u91CF",prop:"count",type:i.Number,placeholder:"\u8BF7\u8F93\u5165\u6570\u91CF"},{label:"\u56FE\u7EB8\u5730\u5740",prop:"drawingUrl",type:i.Input,placeholder:"\u8BF7\u8F93\u5165\u56FE\u7EB8\u5730\u5740"},{label:"\u5916\u534F",prop:"external",type:i.Select,options:z,placeholder:"\u8BF7\u9009\u62E9"},{label:"\u9AD8\u5EA6",prop:"height",type:i.Number,placeholder:"\u8BF7\u8F93\u5165\u9AD8\u5EA6"},{label:"\u957F\u5EA6",prop:"length",type:i.Number,placeholder:"\u8BF7\u8F93\u5165\u957F\u5EA6"},{label:"\u91CD\u91CF",prop:"weight",type:i.Number,placeholder:"\u8BF7\u8F93\u5165\u957F\u5EA6"},{label:"\u5BBD\u5EA6",prop:"width",type:i.Number,placeholder:"\u8BF7\u8F93\u5165\u957F\u5EA6"},{label:"\u52A0\u5DE5\u7C7B\u522B",prop:"processCategory",type:i.Input,placeholder:"\u8BF7\u8F93\u5165\u52A0\u5DE5\u7C7B\u522B"},{label:"\u5904\u7406\u65B9\u6CD5",prop:"processMethod",type:i.Input,placeholder:"\u8BF7\u8F93\u5165\u5904\u7406\u65B9\u6CD5"},{label:"\u6240\u5C5E\u9879\u76EE",prop:"projectCode",type:i.ProjectSelect,placeholder:"\u8BF7\u9009\u62E9\u6240\u5C5E\u9879\u76EE",valueKey:"code"}]}),K=o=>{A.form={...o},b.value=!0},q=o=>{C.value=!0},Q=async o=>{const l=await ye({id:o}),{data:t,msg:d}=l;if(t===1){f.success("\u96F6\u4EF6\u5220\u9664\u6210\u529F"),E();return}f.error(d)},W=[{prop:"code",label:"\u4EE3\u53F7"},{prop:"partName",label:"\u96F6\u4EF6\u540D\u79F0"},{prop:"count",label:"\u6570\u91CF"},{prop:"projectName",label:"\u6240\u5C5E\u9879\u76EE"},{prop:"processCategory",label:"\u5DE5\u827A\u5904\u7406\u7C7B\u578B"},{prop:"processMethod",label:"\u5DE5\u827A\u5904\u7406\u65B9\u6CD5"},{prop:"external",label:"\u662F\u5426\u5916\u534F",slotFlag:"external"},{prop:"width",label:"\u5BBD\u5EA6"},{prop:"height",label:"\u9AD8\u5EA6"},{prop:"weight",label:"\u91CD\u91CF"},{prop:"length",label:"\u957F\u5EA6"},{prop:"createAt",label:"\u521B\u5EFA\u65F6\u95F4"}];return(o,l)=>{const t=r("el-form-item"),d=r("el-input"),X=r("el-option"),Y=r("el-select"),m=r("el-button"),x=r("el-form"),Z=r("el-col"),ee=r("el-row"),k=r("el-popconfirm"),le=r("el-table-column"),ue=r("el-table"),ae=r("pagination"),N=r("el-radio"),oe=r("el-radio-group"),te=r("el-dialog"),ne=se("loading");return g(),P("div",Ue,[_("div",null,[e(x,{model:p(s),inline:!0,"label-width":"68px"},{default:a(()=>[e(t,{label:"\u9879\u76EE\u540D\u79F0"},{default:a(()=>[e(Ee,{modelValue:p(s).projectCode,"onUpdate:modelValue":l[0]||(l[0]=u=>p(s).projectCode=u),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e(t,{label:"\u96F6\u4EF6\u540D\u79F0"},{default:a(()=>[e(d,{modelValue:p(s).partName,"onUpdate:modelValue":l[1]||(l[1]=u=>p(s).partName=u),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e(t,{label:"\u662F\u5426\u5916\u534F"},{default:a(()=>[e(Y,{modelValue:p(s).external,"onUpdate:modelValue":l[2]||(l[2]=u=>p(s).external=u),style:{width:"240px"},placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(g(!0),P(ce,null,me(p(ge),u=>(g(),B(X,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(t,null,{default:a(()=>[e(m,{type:"primary",icon:"Search",onClick:E},{default:a(()=>[c("\u67E5\u8BE2")]),_:1}),e(m,{icon:"Refresh",onClick:p(M)},{default:a(()=>[c("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),e(ee,{gutter:10,class:"mb8"},{default:a(()=>[e(Z,{span:1.5},{default:a(()=>[e(m,{type:"warning",plain:"",icon:"Download"},{default:a(()=>[c("\u5BFC\u51FA")]),_:1})]),_:1},8,["span"])]),_:1}),_("div",null,[I((g(),B(ue,{data:U.value,border:"",style:{width:"100%"}},{default:a(()=>[e(he,{columns:W},{external:a(u=>[e(we,{value:u.row.external,mapConfig:p(_e)},null,8,["value","mapConfig"])]),_:1}),e(le,{label:"\u64CD\u4F5C",fixed:"right",width:"200"},{default:a(u=>[e(m,{size:"small",type:"primary",onClick:S=>q(u.row)},{default:a(()=>[c("\u56FE\u7EB8")]),_:2},1032,["onClick"]),e(m,{size:"small",onClick:S=>K(u.row),type:"warning"},{default:a(()=>[c("\u4FEE\u6539")]),_:2},1032,["onClick"]),e(k,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F",onConfirm:S=>Q(u.row.id)},{reference:a(()=>[e(m,{size:"small",type:"danger"},{default:a(()=>[c("\u5220\u9664")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[ne,h.value]]),I(e(ae,{total:w.value,page:p(s).pageNumber,"onUpdate:page":l[3]||(l[3]=u=>p(s).pageNumber=u),limit:p(s).pageSize,"onUpdate:limit":l[4]||(l[4]=u=>p(s).pageSize=u),onPagination:E},null,8,["total","page","limit"]),[[de,w.value>0]])]),e(L,{modelValue:y.value,"onUpdate:modelValue":l[5]||(l[5]=u=>y.value=u),title:"\u65B0\u589E\u96F6\u4EF6",formConfig:J,onSubmit:G},null,8,["modelValue","formConfig"]),e(L,{modelValue:b.value,"onUpdate:modelValue":l[6]||(l[6]=u=>b.value=u),title:"\u4FEE\u6539\u96F6\u4EF6",formConfig:A,onSubmit:H},null,8,["modelValue","formConfig"]),e(te,{title:"\u56FE\u7EB8",modelValue:C.value,"onUpdate:modelValue":l[10]||(l[10]=u=>C.value=u),width:"80%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:a(()=>[e(k,{title:"\u786E\u8BA4\u4FEE\u6539\u5417\uFF1F",onConfirm:T},{reference:a(()=>[e(m,{type:"primary",loading:v.value},{default:a(()=>[c("\u4FEE \u6539")]),_:1},8,["loading"])]),_:1}),e(m,{onClick:l[9]||(l[9]=u=>C.value=!1),loading:v.value},{default:a(()=>[c("\u53D6 \u6D88")]),_:1},8,["loading"])]),default:a(()=>[e(p(De),{style:{height:"65vh"},config:{toolbar:!1},"page-scale":"page-width",pdf:"https://p1-kp.adkwai.com/kos/nlav111397/chrome-plugin-upload/2023-10-12/1697113209018.ec7d8f0fc45bc98d.pdf"}),e(x,{model:n},{default:a(()=>[e(t,{label:"\u4FEE\u6539\u56FE\u7EB8"},{default:a(()=>[e(oe,{modelValue:n.radio,"onUpdate:modelValue":l[7]||(l[7]=u=>n.radio=u)},{default:a(()=>[e(N,{label:"local"},{default:a(()=>[c("\u672C\u5730")]),_:1}),e(N,{label:"network"},{default:a(()=>[c("\u5728\u7EBF")]),_:1})]),_:1},8,["modelValue"])]),_:1}),n.radio==="network"?(g(),B(t,{key:0,label:"\u56FE\u7EB8\u5730\u5740"},{default:a(()=>[e(d,{modelValue:n.drawingUrl,"onUpdate:modelValue":l[8]||(l[8]=u=>n.drawingUrl=u),placeholder:"\u8BF7\u8F93\u5165\u56FE\u7EB8\u5730\u5740"},null,8,["modelValue"])]),_:1})):$("",!0),n.radio==="local"?(g(),B(t,{key:1,label:"\u56FE\u7EB8\u5730\u5740"},{default:a(()=>{var u;return[_("div",null,[e(m,{type:"primary",onClick:R},{default:a(()=>[c(" \u9009\u62E9\u56FE\u7EB8 ")]),_:1}),_("input",{ref_key:"drawingUrlRef",ref:V,style:{display:"none"},name:"file",accept:".pdf,.png",type:"file",onChange:O},null,544)]),_("div",null," \xA0\xA0"+Fe((u=n==null?void 0:n.drawingUrl)==null?void 0:u.name),1)]}),_:1})):$("",!0)]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{je as default};