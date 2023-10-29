import{A as He,u as Ge,r as s,C as Je,a9 as We,d as r,F as ce,o as m,c as O,G as y,O as X,g as a,e as t,f as o,j as fe,I as Z,J as ee,k as h,Y as S,n as i,l as Y,y as ve,m as z,t as Xe,aL as B}from"./index.6261e021.js";import{l as Ze,e as el,f as ll,g as ye,h as tl,i as al,j as ol,k as nl}from"./role.b28c6d95.js";import{r as ul,t as dl}from"./menu.5affad5a.js";const rl={class:"app-container"},sl={class:"dialog-footer"},il={class:"dialog-footer"},pl=He({name:"Role"}),yl=Object.assign(pl,{setup(ml){const he=Ge(),{proxy:v}=Xe(),{sys_normal_disable:le}=v.useDict("sys_normal_disable"),te=s([]),_=s(!1),j=s(!0),T=s(!0),Q=s([]),ae=s(!0),oe=s(!0),H=s(0),U=s(""),N=s([]),I=s([]),$=s(!1),q=s(!1),A=s(!0),M=s(!1),E=s([]),w=s(!1),g=s(null),k=s(null),_e=s([{value:"1",label:"\u5168\u90E8\u6570\u636E\u6743\u9650"},{value:"2",label:"\u81EA\u5B9A\u6570\u636E\u6743\u9650"},{value:"3",label:"\u672C\u90E8\u95E8\u6570\u636E\u6743\u9650"},{value:"4",label:"\u672C\u90E8\u95E8\u53CA\u4EE5\u4E0B\u6570\u636E\u6743\u9650"},{value:"5",label:"\u4EC5\u672C\u4EBA\u6570\u636E\u6743\u9650"}]),ge=Je({form:{},queryParams:{pageNum:1,pageSize:10,roleName:void 0,roleKey:void 0,status:void 0},rules:{roleName:[{required:!0,message:"\u89D2\u8272\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],roleKey:[{required:!0,message:"\u6743\u9650\u5B57\u7B26\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],roleSort:[{required:!0,message:"\u89D2\u8272\u987A\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),{queryParams:c,form:u,rules:ke}=We(ge);function b(){j.value=!0,Ze(v.addDateRange(c.value,N.value)).then(n=>{te.value=n.rows,H.value=n.total,j.value=!1})}function P(){c.value.pageNum=1,b()}function be(){N.value=[],v.resetForm("queryRef"),P()}function ne(n){const e=n.roleId||Q.value;v.$modal.confirm('\u662F\u5426\u786E\u8BA4\u5220\u9664\u89D2\u8272\u7F16\u53F7\u4E3A"'+e+'"\u7684\u6570\u636E\u9879?').then(function(){return el(e)}).then(()=>{b(),v.$modal.msgSuccess("\u5220\u9664\u6210\u529F")}).catch(()=>{})}function Ve(){v.download("system/role/export",{...c.value},`role_${new Date().getTime()}.xlsx`)}function Ce(n){Q.value=n.map(e=>e.roleId),ae.value=n.length!=1,oe.value=!n.length}function Se(n){let e=n.status==="0"?"\u542F\u7528":"\u505C\u7528";v.$modal.confirm('\u786E\u8BA4\u8981"'+e+'""'+n.roleName+'"\u89D2\u8272\u5417?').then(function(){return ll(n.roleId,n.status)}).then(()=>{v.$modal.msgSuccess(e+"\u6210\u529F")}).catch(function(){n.status=n.status==="0"?"1":"0"})}function we(n){he.push("/system/role-auth/user/"+n.roleId)}function xe(){dl().then(n=>{I.value=n.data})}function Ke(){let n=k.value.getCheckedKeys(),e=k.value.getHalfCheckedKeys();return n.unshift.apply(n,e),n}function R(){g.value!=null&&g.value.setCheckedKeys([]),$.value=!1,q.value=!1,A.value=!0,M.value=!1,u.value={roleId:void 0,roleName:void 0,roleKey:void 0,roleSort:0,status:"0",menuIds:[],deptIds:[],menuCheckStrictly:!0,deptCheckStrictly:!0,remark:void 0},v.resetForm("roleRef")}function Ue(){R(),xe(),_.value=!0,U.value="\u6DFB\u52A0\u89D2\u8272"}function ue(n){R();const e=n.roleId||Q.value,p=Ne(e);ye(e).then(d=>{u.value=d.data,u.value.roleSort=Number(u.value.roleSort),_.value=!0,B(()=>{p.then(L=>{L.checkedKeys.forEach(J=>{B(()=>{g.value.setChecked(J,!0,!1)})})})}),U.value="\u4FEE\u6539\u89D2\u8272"})}function Ne(n){return ul(n).then(e=>(I.value=e.menus,e))}function Ie(n){return nl(n).then(e=>(E.value=e.depts,e))}function de(n,e){if(e=="menu"){let p=I.value;for(let d=0;d<p.length;d++)g.value.store.nodesMap[p[d].id].expanded=n}else if(e=="dept"){let p=E.value;for(let d=0;d<p.length;d++)k.value.store.nodesMap[p[d].id].expanded=n}}function re(n,e){e=="menu"?g.value.setCheckedNodes(n?I.value:[]):e=="dept"&&k.value.setCheckedNodes(n?E.value:[])}function se(n,e){e=="menu"?u.value.menuCheckStrictly=!!n:e=="dept"&&(u.value.deptCheckStrictly=!!n)}function ie(){let n=g.value.getCheckedKeys(),e=g.value.getHalfCheckedKeys();return n.unshift.apply(n,e),n}function Re(){v.$refs.roleRef.validate(n=>{n&&(u.value.roleId!=null?(u.value.menuIds=ie(),tl(u.value).then(e=>{v.$modal.msgSuccess("\u4FEE\u6539\u6210\u529F"),_.value=!1,b()})):(u.value.menuIds=ie(),al(u.value).then(e=>{v.$modal.msgSuccess("\u65B0\u589E\u6210\u529F"),_.value=!1,b()})))})}function De(){_.value=!1,R()}function Te(n){n!=="2"&&k.value.setCheckedKeys([])}function $e(n){R();const e=Ie(n.roleId);ye(n.roleId).then(p=>{u.value=p.data,w.value=!0,B(()=>{e.then(d=>{B(()=>{k.value&&k.value.setCheckedKeys(d.checkedKeys)})})}),U.value="\u5206\u914D\u6570\u636E\u6743\u9650"})}function qe(){u.value.roleId!=null&&(u.value.deptIds=Ke(),ol(u.value).then(n=>{v.$modal.msgSuccess("\u4FEE\u6539\u6210\u529F"),w.value=!1,b()}))}function Ae(){w.value=!1,R()}return b(),(n,e)=>{const p=r("el-input"),d=r("el-form-item"),L=r("el-option"),G=r("el-select"),J=r("el-date-picker"),f=r("el-button"),W=r("el-form"),F=r("el-col"),Me=r("right-toolbar"),Ee=r("el-row"),V=r("el-table-column"),Pe=r("el-switch"),D=r("el-tooltip"),Le=r("el-table"),Fe=r("pagination"),Oe=r("question-filled"),Ye=r("el-icon"),ze=r("el-input-number"),Be=r("el-radio"),je=r("el-radio-group"),x=r("el-checkbox"),pe=r("el-tree"),me=r("el-dialog"),C=ce("hasPermi"),Qe=ce("loading");return m(),O("div",rl,[y(t(W,{model:a(c),ref:"queryRef",inline:!0,"label-width":"68px"},{default:o(()=>[t(d,{label:"\u89D2\u8272\u540D\u79F0",prop:"roleName"},{default:o(()=>[t(p,{modelValue:a(c).roleName,"onUpdate:modelValue":e[0]||(e[0]=l=>a(c).roleName=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",clearable:"",style:{width:"240px"},onKeyup:fe(P,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(d,{label:"\u6743\u9650\u5B57\u7B26",prop:"roleKey"},{default:o(()=>[t(p,{modelValue:a(c).roleKey,"onUpdate:modelValue":e[1]||(e[1]=l=>a(c).roleKey=l),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26",clearable:"",style:{width:"240px"},onKeyup:fe(P,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(d,{label:"\u72B6\u6001",prop:"status"},{default:o(()=>[t(G,{modelValue:a(c).status,"onUpdate:modelValue":e[2]||(e[2]=l=>a(c).status=l),placeholder:"\u89D2\u8272\u72B6\u6001",clearable:"",style:{width:"240px"}},{default:o(()=>[(m(!0),O(Z,null,ee(a(le),l=>(m(),h(L,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"\u521B\u5EFA\u65F6\u95F4",style:{width:"308px"}},{default:o(()=>[t(J,{modelValue:a(N),"onUpdate:modelValue":e[3]||(e[3]=l=>S(N)?N.value=l:null),"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"-","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),t(d,null,{default:o(()=>[t(f,{type:"primary",icon:"Search",onClick:P},{default:o(()=>[i("\u641C\u7D22")]),_:1}),t(f,{icon:"Refresh",onClick:be},{default:o(()=>[i("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),[[X,a(T)]]),t(Ee,{gutter:10,class:"mb8"},{default:o(()=>[t(F,{span:1.5},{default:o(()=>[y((m(),h(f,{type:"primary",plain:"",icon:"Plus",onClick:Ue},{default:o(()=>[i("\u65B0\u589E")]),_:1})),[[C,["system:role:add"]]])]),_:1},8,["span"]),t(F,{span:1.5},{default:o(()=>[y((m(),h(f,{type:"success",plain:"",icon:"Edit",disabled:a(ae),onClick:ue},{default:o(()=>[i("\u4FEE\u6539")]),_:1},8,["disabled"])),[[C,["system:role:edit"]]])]),_:1},8,["span"]),t(F,{span:1.5},{default:o(()=>[y((m(),h(f,{type:"danger",plain:"",icon:"Delete",disabled:a(oe),onClick:ne},{default:o(()=>[i("\u5220\u9664")]),_:1},8,["disabled"])),[[C,["system:role:remove"]]])]),_:1},8,["span"]),t(F,{span:1.5},{default:o(()=>[y((m(),h(f,{type:"warning",plain:"",icon:"Download",onClick:Ve},{default:o(()=>[i("\u5BFC\u51FA")]),_:1})),[[C,["system:role:export"]]])]),_:1},8,["span"]),t(Me,{showSearch:a(T),"onUpdate:showSearch":e[4]||(e[4]=l=>S(T)?T.value=l:null),onQueryTable:b},null,8,["showSearch"])]),_:1}),y((m(),h(Le,{data:a(te),onSelectionChange:Ce},{default:o(()=>[t(V,{type:"selection",width:"55",align:"center"}),t(V,{label:"\u89D2\u8272\u7F16\u53F7",prop:"roleId",width:"120"}),t(V,{label:"\u89D2\u8272\u540D\u79F0",prop:"roleName","show-overflow-tooltip":!0,width:"150"}),t(V,{label:"\u6743\u9650\u5B57\u7B26",prop:"roleKey","show-overflow-tooltip":!0,width:"150"}),t(V,{label:"\u663E\u793A\u987A\u5E8F",prop:"roleSort",width:"100"}),t(V,{label:"\u72B6\u6001",align:"center",width:"100"},{default:o(l=>[t(Pe,{modelValue:l.row.status,"onUpdate:modelValue":K=>l.row.status=K,"active-value":"0","inactive-value":"1",onChange:K=>Se(l.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(V,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime"},{default:o(l=>[Y("span",null,ve(n.parseTime(l.row.createTime)),1)]),_:1}),t(V,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:o(l=>[l.row.roleId!==1?(m(),h(D,{key:0,content:"\u4FEE\u6539",placement:"top"},{default:o(()=>[y(t(f,{link:"",type:"primary",icon:"Edit",onClick:K=>ue(l.row)},null,8,["onClick"]),[[C,["system:role:edit"]]])]),_:2},1024)):z("",!0),l.row.roleId!==1?(m(),h(D,{key:1,content:"\u5220\u9664",placement:"top"},{default:o(()=>[y(t(f,{link:"",type:"primary",icon:"Delete",onClick:K=>ne(l.row)},null,8,["onClick"]),[[C,["system:role:remove"]]])]),_:2},1024)):z("",!0),l.row.roleId!==1?(m(),h(D,{key:2,content:"\u6570\u636E\u6743\u9650",placement:"top"},{default:o(()=>[y(t(f,{link:"",type:"primary",icon:"CircleCheck",onClick:K=>$e(l.row)},null,8,["onClick"]),[[C,["system:role:edit"]]])]),_:2},1024)):z("",!0),l.row.roleId!==1?(m(),h(D,{key:3,content:"\u5206\u914D\u7528\u6237",placement:"top"},{default:o(()=>[y(t(f,{link:"",type:"primary",icon:"User",onClick:K=>we(l.row)},null,8,["onClick"]),[[C,["system:role:edit"]]])]),_:2},1024)):z("",!0)]),_:1})]),_:1},8,["data"])),[[Qe,a(j)]]),y(t(Fe,{total:a(H),page:a(c).pageNum,"onUpdate:page":e[5]||(e[5]=l=>a(c).pageNum=l),limit:a(c).pageSize,"onUpdate:limit":e[6]||(e[6]=l=>a(c).pageSize=l),onPagination:b},null,8,["total","page","limit"]),[[X,a(H)>0]]),t(me,{title:a(U),modelValue:a(_),"onUpdate:modelValue":e[18]||(e[18]=l=>S(_)?_.value=l:null),width:"500px","append-to-body":""},{footer:o(()=>[Y("div",sl,[t(f,{type:"primary",onClick:Re},{default:o(()=>[i("\u786E \u5B9A")]),_:1}),t(f,{onClick:De},{default:o(()=>[i("\u53D6 \u6D88")]),_:1})])]),default:o(()=>[t(W,{ref:"roleRef",model:a(u),rules:a(ke),"label-width":"100px"},{default:o(()=>[t(d,{label:"\u89D2\u8272\u540D\u79F0",prop:"roleName"},{default:o(()=>[t(p,{modelValue:a(u).roleName,"onUpdate:modelValue":e[7]||(e[7]=l=>a(u).roleName=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(d,{prop:"roleKey"},{label:o(()=>[Y("span",null,[t(D,{content:"\u63A7\u5236\u5668\u4E2D\u5B9A\u4E49\u7684\u6743\u9650\u5B57\u7B26\uFF0C\u5982\uFF1A@PreAuthorize(`@ss.hasRole('admin')`)",placement:"top"},{default:o(()=>[t(Ye,null,{default:o(()=>[t(Oe)]),_:1})]),_:1}),i(" \u6743\u9650\u5B57\u7B26 ")])]),default:o(()=>[t(p,{modelValue:a(u).roleKey,"onUpdate:modelValue":e[8]||(e[8]=l=>a(u).roleKey=l),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26"},null,8,["modelValue"])]),_:1}),t(d,{label:"\u89D2\u8272\u987A\u5E8F",prop:"roleSort"},{default:o(()=>[t(ze,{modelValue:a(u).roleSort,"onUpdate:modelValue":e[9]||(e[9]=l=>a(u).roleSort=l),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1}),t(d,{label:"\u72B6\u6001"},{default:o(()=>[t(je,{modelValue:a(u).status,"onUpdate:modelValue":e[10]||(e[10]=l=>a(u).status=l)},{default:o(()=>[(m(!0),O(Z,null,ee(a(le),l=>(m(),h(Be,{key:l.value,label:l.value},{default:o(()=>[i(ve(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"\u83DC\u5355\u6743\u9650"},{default:o(()=>[t(x,{modelValue:a($),"onUpdate:modelValue":e[11]||(e[11]=l=>S($)?$.value=l:null),onChange:e[12]||(e[12]=l=>de(l,"menu"))},{default:o(()=>[i("\u5C55\u5F00/\u6298\u53E0")]),_:1},8,["modelValue"]),t(x,{modelValue:a(q),"onUpdate:modelValue":e[13]||(e[13]=l=>S(q)?q.value=l:null),onChange:e[14]||(e[14]=l=>re(l,"menu"))},{default:o(()=>[i("\u5168\u9009/\u5168\u4E0D\u9009")]),_:1},8,["modelValue"]),t(x,{modelValue:a(u).menuCheckStrictly,"onUpdate:modelValue":e[15]||(e[15]=l=>a(u).menuCheckStrictly=l),onChange:e[16]||(e[16]=l=>se(l,"menu"))},{default:o(()=>[i("\u7236\u5B50\u8054\u52A8")]),_:1},8,["modelValue"]),t(pe,{class:"tree-border",data:a(I),"show-checkbox":"",ref_key:"menuRef",ref:g,"node-key":"id","check-strictly":!a(u).menuCheckStrictly,"empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u5019",props:{label:"label",children:"children"}},null,8,["data","check-strictly"])]),_:1}),t(d,{label:"\u5907\u6CE8"},{default:o(()=>[t(p,{modelValue:a(u).remark,"onUpdate:modelValue":e[17]||(e[17]=l=>a(u).remark=l),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"]),t(me,{title:a(U),modelValue:a(w),"onUpdate:modelValue":e[28]||(e[28]=l=>S(w)?w.value=l:null),width:"500px","append-to-body":""},{footer:o(()=>[Y("div",il,[t(f,{type:"primary",onClick:qe},{default:o(()=>[i("\u786E \u5B9A")]),_:1}),t(f,{onClick:Ae},{default:o(()=>[i("\u53D6 \u6D88")]),_:1})])]),default:o(()=>[t(W,{model:a(u),"label-width":"80px"},{default:o(()=>[t(d,{label:"\u89D2\u8272\u540D\u79F0"},{default:o(()=>[t(p,{modelValue:a(u).roleName,"onUpdate:modelValue":e[19]||(e[19]=l=>a(u).roleName=l),disabled:!0},null,8,["modelValue"])]),_:1}),t(d,{label:"\u6743\u9650\u5B57\u7B26"},{default:o(()=>[t(p,{modelValue:a(u).roleKey,"onUpdate:modelValue":e[20]||(e[20]=l=>a(u).roleKey=l),disabled:!0},null,8,["modelValue"])]),_:1}),t(d,{label:"\u6743\u9650\u8303\u56F4"},{default:o(()=>[t(G,{modelValue:a(u).dataScope,"onUpdate:modelValue":e[21]||(e[21]=l=>a(u).dataScope=l),onChange:Te},{default:o(()=>[(m(!0),O(Z,null,ee(a(_e),l=>(m(),h(L,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),y(t(d,{label:"\u6570\u636E\u6743\u9650"},{default:o(()=>[t(x,{modelValue:a(A),"onUpdate:modelValue":e[22]||(e[22]=l=>S(A)?A.value=l:null),onChange:e[23]||(e[23]=l=>de(l,"dept"))},{default:o(()=>[i("\u5C55\u5F00/\u6298\u53E0")]),_:1},8,["modelValue"]),t(x,{modelValue:a(M),"onUpdate:modelValue":e[24]||(e[24]=l=>S(M)?M.value=l:null),onChange:e[25]||(e[25]=l=>re(l,"dept"))},{default:o(()=>[i("\u5168\u9009/\u5168\u4E0D\u9009")]),_:1},8,["modelValue"]),t(x,{modelValue:a(u).deptCheckStrictly,"onUpdate:modelValue":e[26]||(e[26]=l=>a(u).deptCheckStrictly=l),onChange:e[27]||(e[27]=l=>se(l,"dept"))},{default:o(()=>[i("\u7236\u5B50\u8054\u52A8")]),_:1},8,["modelValue"]),t(pe,{class:"tree-border",data:a(E),"show-checkbox":"","default-expand-all":"",ref_key:"deptRef",ref:k,"node-key":"id","check-strictly":!a(u).deptCheckStrictly,"empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u5019",props:{label:"label",children:"children"}},null,8,["data","check-strictly"])]),_:1},512),[[X,a(u).dataScope==2]])]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{yl as default};
