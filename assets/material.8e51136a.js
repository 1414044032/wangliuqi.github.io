import{L as e}from"./index.8b4e0df5.js";const r=t=>e({url:"/mes/bom/list",method:"post",data:{...t,isPage:!0}}),o=t=>e({url:"/mes/bom/delete",method:"post",data:t,params:t}),s=t=>e({url:"/mes/bom/insert",method:"post",data:t}),d=t=>e({url:"/mes/bom/update",method:"post",data:t}),m=t=>e({url:"/mes/bom/upload",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}});export{d as a,r as b,o as c,m as d,s as f};