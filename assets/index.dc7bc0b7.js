import{L as e}from"./index.8b4e0df5.js";var s=(t=>(t[t.ALL=-1]="ALL",t[t.Person=0]="Person",t[t.Device=1]="Device",t[t.Material=2]="Material",t))(s||{});const o=[{label:"\u4EBA\u5458",value:0},{label:"\u8BBE\u5907",value:1},{label:"\u6750\u6599",value:2}],a=[{label:"\u5168\u90E8",value:-1},...o],c=t=>e({url:"/mes/cost/item/list",method:"post",data:t}),u=t=>e({url:"/mes/cost/item/insert",method:"post",data:t}),l=t=>e({url:"/mes/cost/item/update",method:"post",data:t,params:t}),n=t=>e({url:`/mes/cost/item/${t.id}`,method:"get",params:t}),d=t=>e({url:"/mes/cost/project/list",method:"post",data:t}),i=t=>e({url:`/mes/cost/project/${t.projectCode}`,method:"get",params:t});export{o as B,s as C,a,l as b,c,n as d,d as e,u as f,i as g};