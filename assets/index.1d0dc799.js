import{A as ae,B as A,r as d,D as le,C as ue,d as i,o as f,c as $,l as B,e as t,f as a,G as ne,O as ie,g as u,H as b,I as re,J as se,k as v,n as m,y as de,m as I,_ as pe}from"./index.6261e021.js";import{A as L,a as ce,m as me,c as fe}from"./interface.47eb8c89.js";import{E as _e}from"./index.vue_vue_type_script_setup_true_lang.15dd06b5.js";import{f as Fe,a as ve,b as Ce,c as Ee}from"./processCard.871e4e8a.js";import{F as be,_ as ge}from"./index.vue_vue_type_script_setup_true_lang.dcc7c371.js";import{_ as M}from"./index.vue_vue_type_script_setup_true_lang.c403059b.js";import D from"./index.38b7bdd3.js";import"./user.6abe22d0.js";import"./index.vue_vue_type_script_setup_true_lang.11b02900.js";import"./index.vue_vue_type_script_setup_true_lang.35fc4e15.js";import"./part.b134bb3b.js";import"./material.77e1a4d3.js";const we={class:"app-container"},Ne=["onClick"],ye=ae({__name:"index",setup(Ae){const S={projectName:"",projectCode:"",partName:"",auditState:L.ALL,state:-1,isPage:!0,pageNumber:1,pageSize:10},{cloned:n,sync:O}=A(S);A({projectName:"",projectCode:"",partName:"",partCode:"",unit:"",materialName:"",materialId:"",productionDate:""});const G={noOrder:1,workTypeName:"",processContent:"",external:_e.EXTERNAL,count:0};A(G),d([]);const k=d([{productionNo:"",projectCode:"",projectName:"",partCode:"",partName:"",unit:"",count:0,materialName:"",auditState:L.PASS}]),x=d(!1),g=d(0),_=async l=>{((l==null?void 0:l.page)||(l==null?void 0:l.limit))&&(n.value.pageNumber=l.page,n.value.pageSize=l.limit),x.value=!0;try{const o=await Fe(n.value),{data:r,msg:p}=o;console.log(r),k.value=r.data,g.value=r.total}catch(o){b.error(o)}finally{x.value=!1}};le(()=>{_()});const C=d(!1),w=d(!1),N=d(!1),V=d({}),P=d({}),R=l=>{V.value=l,w.value=!0},H=l=>{P.value=l,N.value=!0},U=async l=>{console.log("\u63D0\u4EA4\u5BA1\u6838"),await Ee(l),_()},J=()=>{C.value=!0},X=async l=>{const o=await ve(l),{data:r,msg:p}=o;if(r===1){b.success("\u5DE5\u827A\u5361\u65B0\u589E\u6210\u529F"),C.value=!1,_();return}},E=d(!1),q=l=>{console.log("\u66F4\u6539\u751F\u4EA7\u7F16\u53F7"),j.form={id:l.id,productionNo:l.productionNo},E.value=!0},j=ue({form:{},rules:{},formLabelConfig:[{label:"\u751F\u4EA7\u7F16\u53F7",prop:"productionNo",type:be.Input,placeholder:"\u8BF7\u8F93\u5165\u751F\u4EA7\u7F16\u53F7"}]}),K=async l=>{console.log(l);const o=await Ce(l),{data:r,msg:p}=o;if(r===1){b.success("\u751F\u4EA7\u7F16\u53F7\u4FEE\u6539\u6210\u529F"),E.value=!1,_();return}b.error(p)};return(l,o)=>{const r=i("el-input"),p=i("el-form-item"),Q=i("el-option"),W=i("el-select"),c=i("el-button"),Y=i("el-form"),y=i("el-col"),Z=i("el-row"),ee=i("el-tooltip"),s=i("el-table-column"),z=i("el-popconfirm"),te=i("el-table"),oe=i("pagination");return f(),$("div",we,[B("div",null,[t(Y,{model:S,inline:!0,"label-width":"68px"},{default:a(()=>[t(p,{label:"\u9879\u76EE\u540D\u79F0"},{default:a(()=>[t(r,{modelValue:u(n).projectName,"onUpdate:modelValue":o[0]||(o[0]=e=>u(n).projectName=e),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t(p,{label:"\u9879\u76EE\u4EE3\u53F7"},{default:a(()=>[t(r,{modelValue:u(n).projectCode,"onUpdate:modelValue":o[1]||(o[1]=e=>u(n).projectCode=e),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t(p,{label:"\u96F6\u4EF6\u540D\u79F0"},{default:a(()=>[t(r,{modelValue:u(n).partName,"onUpdate:modelValue":o[2]||(o[2]=e=>u(n).partName=e),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t(p,{label:"\u72B6\u6001"},{default:a(()=>[t(W,{modelValue:u(n).auditState,"onUpdate:modelValue":o[3]||(o[3]=e=>u(n).auditState=e),style:{width:"240px"},placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(f(!0),$(re,null,se(u(ce),e=>(f(),v(Q,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(p,null,{default:a(()=>[t(c,{type:"primary",icon:"Search",onClick:_},{default:a(()=>[m("\u67E5\u8BE2")]),_:1}),t(c,{icon:"Refresh",onClick:u(O)},{default:a(()=>[m("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1})]),t(Z,{gutter:10,class:"mb8"},{default:a(()=>[t(y,{span:1.5},{default:a(()=>[t(c,{type:"primary",plain:"",icon:"Plus",onClick:J},{default:a(()=>[m("\u5236\u4F5C")]),_:1})]),_:1},8,["span"]),t(y,{span:1.5},{default:a(()=>[t(c,{type:"warning",plain:"",icon:"Download"},{default:a(()=>[m("\u5BFC\u51FASAP\u6587\u4EF6")]),_:1})]),_:1},8,["span"]),t(y,{span:1.5},{default:a(()=>[t(c,{type:"warning",plain:"",icon:"Download"},{default:a(()=>[m("\u6253\u5370")]),_:1})]),_:1},8,["span"])]),_:1}),B("div",null,[t(te,{data:k.value,border:"",style:{width:"100%"}},{default:a(()=>[t(s,{prop:"productionNo",label:"\u751F\u4EA7\u7F16\u53F7"},{default:a(e=>[t(ee,{effect:"dark",content:"\u70B9\u51FB\u4FEE\u6539",placement:"top"},{default:a(()=>{var F,T,h;return[B("span",{onClick:De=>q(e.row)},de(((T=(F=e==null?void 0:e.row)==null?void 0:F.productionNo)==null?void 0:T.length)>0?(h=e==null?void 0:e.row)==null?void 0:h.productionNo:"\u70B9\u51FB\u8F93\u5165\u7F16\u53F7"),9,Ne)]}),_:2},1024)]),_:1}),t(s,{prop:"projectCode",label:"\u9879\u76EE\u4EE3\u53F7"}),t(s,{prop:"projectName",label:"\u9879\u76EE\u540D\u79F0"}),t(s,{prop:"partCode",label:"\u96F6\u4EF6\u56FE\u53F7"}),t(s,{prop:"partName",label:"\u96F6\u4EF6\u540D\u79F0"}),t(s,{prop:"unit",label:"\u5355\u4F4D"}),t(s,{prop:"count",label:"\u6570\u91CF"}),t(s,{prop:"materialName",label:"\u6750\u6599\u540D\u79F0"}),t(s,{prop:"auditState",label:"\u72B6\u6001"},{default:a(e=>[e.row.state!==0?(f(),v(M,{key:0,value:e.row.auditState,mapConfig:u(me)},null,8,["value","mapConfig"])):(f(),v(M,{key:1,value:e.row.state,mapConfig:u(fe)},null,8,["value","mapConfig"]))]),_:1}),t(s,{label:"\u64CD\u4F5C",fixed:"right",width:"250px"},{default:a(e=>[t(c,{size:"small",type:"primary",onClick:F=>R(e.row)},{default:a(()=>[m("\u8BE6\u60C5")]),_:2},1032,["onClick"]),t(c,{size:"small",type:"warning",onClick:F=>H(e.row)},{default:a(()=>[m("\u7F16\u8F91")]),_:2},1032,["onClick"]),e.row.state===0?(f(),v(z,{key:0,title:"\u786E\u5B9A\u63D0\u4EA4\u5417\uFF1F",confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",onConfirm:F=>U({id:e.row.id,state:1})},{reference:a(()=>[t(c,{size:"small"},{default:a(()=>[m("\u63D0\u4EA4\u5BA1\u6838")]),_:1})]),_:2},1032,["onConfirm"])):I("",!0),e.row.state===1?(f(),v(z,{key:1,title:"\u786E\u5B9A\u63D0\u4EA4\u5417\uFF1F",confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",onConfirm:F=>U({id:e.row.id,state:0})},{reference:a(()=>[t(c,{size:"small"},{default:a(()=>[m("\u64A4\u56DE\u5BA1\u6838")]),_:1})]),_:2},1032,["onConfirm"])):I("",!0)]),_:1})]),_:1},8,["data"]),ne(t(oe,{total:g.value,page:u(n).pageNumber,"onUpdate:page":o[4]||(o[4]=e=>u(n).pageNumber=e),limit:u(n).pageSize,"onUpdate:limit":o[5]||(o[5]=e=>u(n).pageSize=e),onPagination:_},null,8,["total","page","limit"]),[[ie,g.value>0]])]),t(D,{visible:C.value,"onUpdate:visible":o[6]||(o[6]=e=>C.value=e),onSubmit:X,action:"add"},null,8,["visible"]),t(D,{visible:w.value,"onUpdate:visible":o[7]||(o[7]=e=>w.value=e),data:V.value,action:"show"},null,8,["visible","data"]),t(D,{visible:N.value,"onUpdate:visible":o[8]||(o[8]=e=>N.value=e),data:P.value,action:"edit"},null,8,["visible","data"]),t(ge,{modelValue:E.value,"onUpdate:modelValue":o[9]||(o[9]=e=>E.value=e),title:"\u4FEE\u6539\u8BBE\u5907",formConfig:j,onSubmit:K},null,8,["modelValue","formConfig"])])}}});const Le=pe(ye,[["__scopeId","data-v-0770aec8"]]);export{Le as default};