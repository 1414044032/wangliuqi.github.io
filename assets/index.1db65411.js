import{K as V,A as ce,r as h,C as fe,a9 as _e,d,F as L,o as p,c as q,G as b,O as he,g as a,e,f as l,j as ge,I as O,J as Q,k as g,n as m,Y as j,l as G,y as J,m as P,t as ve,aL as ye}from"./index.2e5bc0a8.js";function Y(r){return V({url:"/system/dept/list",method:"get",params:r})}function be(r){return V({url:"/system/dept/list/exclude/"+r,method:"get"})}function Ve(r){return V({url:"/system/dept/"+r,method:"get"})}function ke(r){return V({url:"/system/dept",method:"post",data:r})}function we(r){return V({url:"/system/dept",method:"put",data:r})}function Ie(r){return V({url:"/system/dept/"+r,method:"delete"})}const Ne={class:"app-container"},Ce={class:"dialog-footer"},xe=ce({name:"Dept"}),Ue=Object.assign(xe,{setup(r){const{proxy:s}=ve(),{sys_normal_disable:C}=s.useDict("sys_normal_disable"),E=h([]),_=h(!1),x=h(!0),I=h(!0),D=h(""),U=h([]),S=h(!0),T=h(!0),z=fe({form:{},queryParams:{deptName:void 0,status:void 0},rules:{parentId:[{required:!0,message:"\u4E0A\u7EA7\u90E8\u95E8\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],deptName:[{required:!0,message:"\u90E8\u95E8\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],orderNum:[{required:!0,message:"\u663E\u793A\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],email:[{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801",trigger:"blur"}]}}),{queryParams:v,form:o,rules:H}=_e(z);function y(){x.value=!0,Y(v.value).then(u=>{E.value=s.handleTree(u.data,"deptId"),x.value=!1})}function M(){_.value=!1,$()}function $(){o.value={deptId:void 0,parentId:void 0,deptName:void 0,orderNum:0,leader:void 0,phone:void 0,email:void 0,status:"0"},s.resetForm("deptRef")}function R(){y()}function W(){s.resetForm("queryRef"),R()}function F(u){$(),Y().then(n=>{U.value=s.handleTree(n.data,"deptId")}),u!=null&&(o.value.parentId=u.deptId),_.value=!0,D.value="\u6DFB\u52A0\u90E8\u95E8"}function X(){T.value=!1,S.value=!S.value,ye(()=>{T.value=!0})}function Z(u){$(),be(u.deptId).then(n=>{U.value=s.handleTree(n.data,"deptId")}),Ve(u.deptId).then(n=>{o.value=n.data,_.value=!0,D.value="\u4FEE\u6539\u90E8\u95E8"})}function ee(){s.$refs.deptRef.validate(u=>{u&&(o.value.deptId!=null?we(o.value).then(n=>{s.$modal.msgSuccess("\u4FEE\u6539\u6210\u529F"),_.value=!1,y()}):ke(o.value).then(n=>{s.$modal.msgSuccess("\u65B0\u589E\u6210\u529F"),_.value=!1,y()}))})}function le(u){s.$modal.confirm('\u662F\u5426\u786E\u8BA4\u5220\u9664\u540D\u79F0\u4E3A"'+u.deptName+'"\u7684\u6570\u636E\u9879?').then(function(){return Ie(u.deptId)}).then(()=>{y(),s.$modal.msgSuccess("\u5220\u9664\u6210\u529F")}).catch(()=>{})}return y(),(u,n)=>{const k=d("el-input"),i=d("el-form-item"),te=d("el-option"),ae=d("el-select"),c=d("el-button"),A=d("el-form"),f=d("el-col"),ne=d("right-toolbar"),B=d("el-row"),w=d("el-table-column"),oe=d("dict-tag"),de=d("el-table"),ue=d("el-tree-select"),re=d("el-input-number"),se=d("el-radio"),pe=d("el-radio-group"),ie=d("el-dialog"),N=L("hasPermi"),me=L("loading");return p(),q("div",Ne,[b(e(A,{model:a(v),ref:"queryRef",inline:!0},{default:l(()=>[e(i,{label:"\u90E8\u95E8\u540D\u79F0",prop:"deptName"},{default:l(()=>[e(k,{modelValue:a(v).deptName,"onUpdate:modelValue":n[0]||(n[0]=t=>a(v).deptName=t),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",clearable:"",style:{width:"200px"},onKeyup:ge(R,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(i,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[e(ae,{modelValue:a(v).status,"onUpdate:modelValue":n[1]||(n[1]=t=>a(v).status=t),placeholder:"\u90E8\u95E8\u72B6\u6001",clearable:"",style:{width:"200px"}},{default:l(()=>[(p(!0),q(O,null,Q(a(C),t=>(p(),g(te,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(c,{type:"primary",icon:"Search",onClick:R},{default:l(()=>[m("\u641C\u7D22")]),_:1}),e(c,{icon:"Refresh",onClick:W},{default:l(()=>[m("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),[[he,a(I)]]),e(B,{gutter:10,class:"mb8"},{default:l(()=>[e(f,{span:1.5},{default:l(()=>[b((p(),g(c,{type:"primary",plain:"",icon:"Plus",onClick:F},{default:l(()=>[m("\u65B0\u589E")]),_:1})),[[N,["system:dept:add"]]])]),_:1},8,["span"]),e(f,{span:1.5},{default:l(()=>[e(c,{type:"info",plain:"",icon:"Sort",onClick:X},{default:l(()=>[m("\u5C55\u5F00/\u6298\u53E0")]),_:1})]),_:1},8,["span"]),e(ne,{showSearch:a(I),"onUpdate:showSearch":n[2]||(n[2]=t=>j(I)?I.value=t:null),onQueryTable:y},null,8,["showSearch"])]),_:1}),a(T)?b((p(),g(de,{key:0,data:a(E),"row-key":"deptId","default-expand-all":a(S),"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:l(()=>[e(w,{prop:"deptName",label:"\u90E8\u95E8\u540D\u79F0",width:"260"}),e(w,{prop:"orderNum",label:"\u6392\u5E8F",width:"200"}),e(w,{prop:"status",label:"\u72B6\u6001",width:"100"},{default:l(t=>[e(oe,{options:a(C),value:t.row.status},null,8,["options","value"])]),_:1}),e(w,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"200"},{default:l(t=>[G("span",null,J(u.parseTime(t.row.createTime)),1)]),_:1}),e(w,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:l(t=>[b((p(),g(c,{link:"",type:"primary",icon:"Edit",onClick:K=>Z(t.row)},{default:l(()=>[m("\u4FEE\u6539")]),_:2},1032,["onClick"])),[[N,["system:dept:edit"]]]),b((p(),g(c,{link:"",type:"primary",icon:"Plus",onClick:K=>F(t.row)},{default:l(()=>[m("\u65B0\u589E")]),_:2},1032,["onClick"])),[[N,["system:dept:add"]]]),t.row.parentId!=0?b((p(),g(c,{key:0,link:"",type:"primary",icon:"Delete",onClick:K=>le(t.row)},{default:l(()=>[m("\u5220\u9664")]),_:2},1032,["onClick"])),[[N,["system:dept:remove"]]]):P("",!0)]),_:1})]),_:1},8,["data","default-expand-all"])),[[me,a(x)]]):P("",!0),e(ie,{title:a(D),modelValue:a(_),"onUpdate:modelValue":n[10]||(n[10]=t=>j(_)?_.value=t:null),width:"600px","append-to-body":""},{footer:l(()=>[G("div",Ce,[e(c,{type:"primary",onClick:ee},{default:l(()=>[m("\u786E \u5B9A")]),_:1}),e(c,{onClick:M},{default:l(()=>[m("\u53D6 \u6D88")]),_:1})])]),default:l(()=>[e(A,{ref:"deptRef",model:a(o),rules:a(H),"label-width":"80px"},{default:l(()=>[e(B,null,{default:l(()=>[a(o).parentId!==0?(p(),g(f,{key:0,span:24},{default:l(()=>[e(i,{label:"\u4E0A\u7EA7\u90E8\u95E8",prop:"parentId"},{default:l(()=>[e(ue,{modelValue:a(o).parentId,"onUpdate:modelValue":n[3]||(n[3]=t=>a(o).parentId=t),data:a(U),props:{value:"deptId",label:"deptName",children:"children"},"value-key":"deptId",placeholder:"\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8","check-strictly":""},null,8,["modelValue","data"])]),_:1})]),_:1})):P("",!0),e(f,{span:12},{default:l(()=>[e(i,{label:"\u90E8\u95E8\u540D\u79F0",prop:"deptName"},{default:l(()=>[e(k,{modelValue:a(o).deptName,"onUpdate:modelValue":n[4]||(n[4]=t=>a(o).deptName=t),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"\u663E\u793A\u6392\u5E8F",prop:"orderNum"},{default:l(()=>[e(re,{modelValue:a(o).orderNum,"onUpdate:modelValue":n[5]||(n[5]=t=>a(o).orderNum=t),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"\u8D1F\u8D23\u4EBA",prop:"leader"},{default:l(()=>[e(k,{modelValue:a(o).leader,"onUpdate:modelValue":n[6]||(n[6]=t=>a(o).leader=t),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA",maxlength:"20"},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"phone"},{default:l(()=>[e(k,{modelValue:a(o).phone,"onUpdate:modelValue":n[7]||(n[7]=t=>a(o).phone=t),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",maxlength:"11"},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"\u90AE\u7BB1",prop:"email"},{default:l(()=>[e(k,{modelValue:a(o).email,"onUpdate:modelValue":n[8]||(n[8]=t=>a(o).email=t),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"\u90E8\u95E8\u72B6\u6001"},{default:l(()=>[e(pe,{modelValue:a(o).status,"onUpdate:modelValue":n[9]||(n[9]=t=>a(o).status=t)},{default:l(()=>[(p(!0),q(O,null,Q(a(C),t=>(p(),g(se,{key:t.value,label:t.value},{default:l(()=>[m(J(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{Ue as default};
