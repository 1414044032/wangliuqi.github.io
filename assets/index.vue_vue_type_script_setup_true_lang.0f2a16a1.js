import{c as B}from"./part.601bb279.js";import{B as N,r as u,w as c,F as T,d as m,G as k,H as y,o as s,n as v,f as L,c as M,K as V,J as C}from"./index.8b4e0df5.js";const w=N({__name:"index",props:{modelValue:null,disabled:{type:Boolean},valueTag:null},emits:["update:modelValue"],setup(p,{emit:_}){const e=p,o=u(),n=u([]),d=u();c(o,(a,l)=>{a!==l&&_("update:modelValue",a)}),c(()=>e.modelValue,(a,l)=>{a!==l&&a!==o.value&&(o.value=a)},{immediate:!0});const r=u({partName:"",external:-1,isPage:!0,pageNumber:1,pageSize:10});function i(){B(r.value).then(a=>{n.value=[...n.value,...a.data.data],d.value=a.data.total})}T(()=>{i()});const f=()=>{if(console.log("load"),n.value.length>=d.value)return!1;r.value.pageNumber++,i()},g=()=>{f()};return(a,l)=>{const b=m("el-option"),h=m("el-select"),x=k("loadMore");return y((s(),v(h,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),style:{width:"240px"},disabled:e==null?void 0:e.disabled,"popper-class":"partSelect"},{default:L(()=>[(s(!0),M(C,null,V(n.value,t=>(s(),v(b,{key:e!=null&&e.valueTag?t[e.valueTag]:t.id,label:t.partName,value:e!=null&&e.valueTag?t[e.valueTag]:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])),[[x,g,"partSelect"]])}}});export{w as _};