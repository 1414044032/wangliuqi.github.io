import{l as x}from"./user.65af7cc1.js";import{A as V,r as t,w as v,D as w,d as f,F as y,G as B,o as r,k as _,f as M,c as C,J as D,I}from"./index.2e5bc0a8.js";const q=V({__name:"index",props:{modelValue:null,disabled:{type:Boolean}},emits:["update:modelValue"],setup(g,{emit:h}){const o=g,s=t(),n=t([]),i=t();v(s,(e,l)=>{e!==l&&h("update:modelValue",e)}),v(()=>o.modelValue,(e,l)=>{e!==l&&(s.value=e)});const d=t({value:"",pageNum:1,pageSize:10,userName:void 0}),u=t(!1),c=[];function m(){if(u.value){c.push(1);return}u.value=!0,x(d.value).then(e=>{n.value=[...n.value,...e.rows],i.value=e.total,u.value=!1,c.length>0&&p()})}w(()=>{m()});const p=()=>{if(console.log("load"),n.value.length>=i.value)return!1;d.value.pageNum++,m()},b=()=>{p()};return(e,l)=>{const k=f("el-option"),L=f("el-select"),N=y("loadMore");return B((r(),_(L,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=a=>s.value=a),style:{width:"240px"},disabled:o==null?void 0:o.disabled,"popper-class":"selectList"},{default:M(()=>[(r(!0),C(I,null,D(n.value,a=>(r(),_(k,{key:a.userId,label:a.userName+"-"+a.nickName,value:a.userId},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])),[[N,b,"selectList"]])}}});export{q as _};
