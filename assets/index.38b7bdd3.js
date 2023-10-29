import{_ as oe}from"./index.vue_vue_type_script_setup_true_lang.35fc4e15.js";import{E as I,_ as te}from"./index.vue_vue_type_script_setup_true_lang.15dd06b5.js";import{b as ue}from"./material.77e1a4d3.js";import{u as W,F as f,_ as z,d as de}from"./index.vue_vue_type_script_setup_true_lang.dcc7c371.js";import{A as J,r as y,w,D as ne,d as r,F as ie,G as se,o as V,k as $,f as u,c as N,J as re,I as O,x as pe,B as me,C as X,e,M as q,g as o,l as _,n as F,y as G,m as R,q as ce,s as be,_ as fe}from"./index.6261e021.js";import"./part.b134bb3b.js";import"./user.6abe22d0.js";import"./index.vue_vue_type_script_setup_true_lang.11b02900.js";const _e=J({__name:"index",props:{modelValue:null,disabled:{type:Boolean},valueTag:null},emits:["update:modelValue"],setup(E,{emit:k}){const d=E,B=W(),i=y(),D=y([]),t=y();w(i,(s,m)=>{s!==m&&k("update:modelValue",s)}),w(()=>d.modelValue,(s,m)=>{s!==m&&s!==i.value&&(i.value=s)},{immediate:!0});const h=y({code:"",name:"",pageNumber:1,pageSize:20});function p(){ue(h.value).then(s=>{D.value=[...D.value,...s.data.data],t.value=s.data.total,B.updateMaterialManage(s.data.data.map(m=>({id:m.code,name:m.name})))})}ne(()=>{p()});const U=()=>{if(console.log("load"),D.value.length>=t.value)return!1;h.value.pageNumber++,p()},g=()=>{console.log("handleLoadMore"),U()};return(s,m)=>{const L=r("el-option"),S=r("el-select"),M=ie("loadMore");return se((V(),$(S,{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=b=>i.value=b),style:{width:"240px"},disabled:d==null?void 0:d.disabled,"popper-class":"materialSelect"},{default:u(()=>[(V(!0),N(O,null,re(D.value,b=>(V(),$(L,{key:d!=null&&d.valueTag?b[d.valueTag]:b.id,label:b.name+" "+b.specification,value:d!=null&&d.valueTag?b[d.valueTag]:b.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])),[[M,g,"materialSelect"]])}}}),ve=E=>(ce("data-v-ad7b00a9"),E=E(),be(),E),Ce={class:"cardTitleBox"},Fe={class:"makeCardFormBox"},ye=ve(()=>_("span",null,"\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u6DFB\u52A0",-1)),Ee={class:"makeCardFormFooter"},Ve=J({__name:"index",props:{visible:{type:Boolean},data:null,action:null},emits:["submit","update:visible"],setup(E,{emit:k}){const d=E,B=W(),i=pe(()=>d.action==="show");w(()=>d.data,(n,l)=>{n!==l&&(t.value=n,p.value=n.processItemList||[])});const D={projectName:"",projectCode:"",partName:"",partCode:"",unit:"",materialName:"",materialId:"",state:0,productionDate:""},{cloned:t,sync:h}=me(D),p=y([]),U=()=>{console.log("submit"),k("submit",{...t.value,processItemModelList:p.value})},g=y(!1),s=y(!1),m=n=>{console.log(n),g.value=!1,p.value.push({...n})},L=()=>{g.value=!0,P.form.noOrder=p.value.length+1},S=n=>{const l=p.value.findIndex(v=>v===n);p.value.splice(l,1)},M=n=>{j.form={...n},s.value=!0},b=n=>{s.value=!1;const l=p.value.findIndex(v=>v===j.form);p.value.splice(l,1,n)},j=X({form:{},rules:{},formLabelConfig:[{label:"\u5DE5\u5E8F",prop:"noOrder",type:f.Number},{label:"\u5DE5\u79CD",prop:"workTypeId",type:f.WorkTypeSelect},{label:"\u5DE5\u827A\u6D41\u7A0B",prop:"processContent",type:f.Input},{label:"\u6570\u91CF",prop:"count",type:f.Number},{label:"\u662F\u5426\u5916\u534F",prop:"external",type:f.Radio,options:[{label:"\u662F",value:I.EXTERNAL},{label:"\u5426",value:I.INTERNAL}]}]}),P=X({form:{noOrder:1,workTypeId:"",processContent:"",external:I.EXTERNAL,count:0},rules:{},formLabelConfig:[{label:"\u5DE5\u5E8F",prop:"noOrder",type:f.Number},{label:"\u5DE5\u79CD",prop:"workTypeId",type:f.WorkTypeSelect},{label:"\u5DE5\u827A\u6D41\u7A0B",prop:"processContent",type:f.Textarea},{label:"\u6570\u91CF",prop:"count",type:f.Number},{label:"\u662F\u5426\u5916\u534F",prop:"external",type:f.Radio,options:[{label:"\u662F",value:I.EXTERNAL},{label:"\u5426",value:I.INTERNAL}]}]}),x=y(!1);return w(()=>d.visible,(n,l)=>{n!==l&&(x.value=n)}),w(x,(n,l)=>{n!==l&&k("update:visible",n)}),(n,l)=>{const v=r("el-input"),H=r("el-date-picker"),C=r("el-form-item"),K=r("el-input-number"),Q=r("el-form"),c=r("el-table-column"),T=r("el-button"),Z=r("Plus"),ee=r("el-icon"),le=r("el-table"),ae=r("el-dialog");return V(),N("div",null,[e(ae,{title:"\u5DE5\u827A\u5361",modelValue:x.value,"onUpdate:modelValue":l[11]||(l[11]=a=>x.value=a),width:"60%",center:""},q({default:u(()=>[_("div",null,[_("div",Ce,[_("div",null,[F(" \u751F\u4EA7\u7F16\u53F7 \xA0 "),e(v,{modelValue:o(t).productionNo,"onUpdate:modelValue":l[0]||(l[0]=a=>o(t).productionNo=a),style:{width:"140px"},disabled:o(i)},null,8,["modelValue","disabled"])]),_("div",null,[F(" \u751F\u4EA7\u65E5\u671F \xA0 "),e(H,{modelValue:o(t).productionDate,"onUpdate:modelValue":l[1]||(l[1]=a=>o(t).productionDate=a),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F","value-format":"YYYY-MM-DD",style:{width:"140px"},disabled:o(i)},null,8,["modelValue","disabled"])])]),_("div",Fe,[e(Q,{inline:!0,"label-width":"68px"},{default:u(()=>[e(C,{label:"\u9879\u76EE\u540D\u79F0"},{default:u(()=>[e(te,{modelValue:o(t).projectCode,"onUpdate:modelValue":l[2]||(l[2]=a=>o(t).projectCode=a),valueTag:"code",style:{width:"140px"},disabled:o(i)},null,8,["modelValue","disabled"])]),_:1}),e(C,{label:"\u9879\u76EE\u4EE3\u53F7"},{default:u(()=>[e(v,{modelValue:o(t).projectCode,"onUpdate:modelValue":l[3]||(l[3]=a=>o(t).projectCode=a),style:{width:"140px"},disabled:""},null,8,["modelValue"])]),_:1}),e(C,{label:"\u96F6\u4EF6\u540D\u79F0"},{default:u(()=>[e(oe,{modelValue:o(t).partCode,"onUpdate:modelValue":l[4]||(l[4]=a=>o(t).partCode=a),valueTag:"code",style:{width:"140px"},disabled:o(i)},null,8,["modelValue","disabled"])]),_:1}),e(C,{label:"\u96F6\u4EF6\u7F16\u53F7"},{default:u(()=>[e(v,{modelValue:o(t).partCode,"onUpdate:modelValue":l[5]||(l[5]=a=>o(t).partCode=a),style:{width:"140px"},disabled:""},null,8,["modelValue"])]),_:1}),e(C,{label:"\u5355\u4F4D"},{default:u(()=>[e(de,{modelValue:o(t).unit,"onUpdate:modelValue":l[6]||(l[6]=a=>o(t).unit=a),style:{width:"140px"},disabled:o(i)},null,8,["modelValue","disabled"])]),_:1}),e(C,{label:"\u6570\u91CF"},{default:u(()=>[e(K,{modelValue:o(t).count,"onUpdate:modelValue":l[7]||(l[7]=a=>o(t).count=a),style:{width:"140px"},disabled:o(i)},null,8,["modelValue","disabled"])]),_:1}),e(C,{label:"\u6750\u6599\u540D\u79F0"},{default:u(()=>[e(_e,{modelValue:o(t).materialId,"onUpdate:modelValue":l[8]||(l[8]=a=>o(t).materialId=a),valueTag:"code",style:{width:"140px"},disabled:o(i)},null,8,["modelValue","disabled"])]),_:1}),e(C,{label:"\u6750\u6599\u7F16\u53F7"},{default:u(()=>[e(v,{modelValue:o(t).materialId,"onUpdate:modelValue":l[9]||(l[9]=a=>o(t).materialId=a),style:{width:"140px"},disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),_("div",null,[e(le,{data:p.value},q({empty:u(()=>[ye]),default:u(()=>[e(c,{prop:"noOrder",label:"\u5DE5\u5E8F",width:"70"}),e(c,{prop:"workTypeId",label:"\u5DE5\u79CD",width:"70"},{default:u(a=>{var A,Y;return[(d==null?void 0:d.action)==="add"?(V(),N(O,{key:0},[F(G((Y=(A=o(B))==null?void 0:A.workTypeManage)==null?void 0:Y.get(a.row.workTypeId)),1)],64)):R("",!0),(d==null?void 0:d.action)==="show"?(V(),N(O,{key:1},[F(G(a.row.workTypeName),1)],64)):R("",!0)]}),_:1}),e(c,{prop:"processContent",label:"\u5DE5\u827A\u6D41\u7A0B"}),e(c,{prop:"count",label:"\u4EF6\u6570",width:"70"}),e(c,{prop:"",label:"\u64CD\u4F5C\u4EBA",width:"70"}),e(c,{label:"\u68C0\u9A8C"},{default:u(()=>[e(c,{prop:"name",label:"\u5408\u683C",width:"70"}),e(c,{prop:"name",label:"\u8FD4\u4FEE",width:"70"}),e(c,{prop:"name",label:"\u4FDD\u8D39",width:"70"}),e(c,{prop:"name",label:"\u68C0\u9A8C\u5458",width:"120"})]),_:1}),o(i)?R("",!0):(V(),$(c,{key:0,label:"\u64CD\u4F5C",fixed:"right"},{default:u(a=>[e(T,{size:"small",type:"warning",onClick:A=>M(a.row)},{default:u(()=>[F("\u4FEE\u6539")]),_:2},1032,["onClick"]),e(T,{size:"small",type:"primary",onClick:A=>S(a.row)},{default:u(()=>[F("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1}))]),_:2},[o(i)?void 0:{name:"append",fn:u(()=>[_("div",{class:"tableFooterBox",onClick:L},[e(ee,null,{default:u(()=>[e(Z)]),_:1})])]),key:"0"}]),1032,["data"])])])])]),_:2},[o(i)?void 0:{name:"footer",fn:u(()=>[_("div",Ee,[e(T,{onClick:l[10]||(l[10]=a=>x.value=!1)},{default:u(()=>[F("\u53D6 \u6D88")]),_:1}),e(T,{type:"primary",onClick:U},{default:u(()=>[F("\u63D0 \u4EA4")]),_:1})])]),key:"0"}]),1032,["modelValue"]),e(z,{modelValue:g.value,"onUpdate:modelValue":l[12]||(l[12]=a=>g.value=a),title:"\u65B0\u589E\u5DE5\u5E8F",formConfig:P,onSubmit:m},null,8,["modelValue","formConfig"]),e(z,{modelValue:s.value,"onUpdate:modelValue":l[13]||(l[13]=a=>s.value=a),title:"\u4FEE\u6539\u5DE5\u5E8F",formConfig:j,onSubmit:b},null,8,["modelValue","formConfig"])])}}});const Ne=fe(Ve,[["__scopeId","data-v-ad7b00a9"]]);export{Ne as default};