import{K as e,N as u}from"./index.6261e021.js";function n(t){return e({url:"/system/user/list",method:"get",params:t})}function o(t){return e({url:"/system/user/"+u(t),method:"get"})}function d(t){return e({url:"/system/user",method:"post",data:t})}function m(t){return e({url:"/system/user",method:"put",data:t})}function l(t){return e({url:"/system/user/"+t,method:"delete"})}function p(t,r){return e({url:"/system/user/resetPwd",method:"put",data:{userId:t,password:r}})}function i(t,r){return e({url:"/system/user/changeStatus",method:"put",data:{userId:t,status:r}})}function c(){return e({url:"/system/user/profile",method:"get"})}function f(t){return e({url:"/system/user/profile",method:"put",data:t})}function h(t,r){return e({url:"/system/user/profile/updatePwd",method:"put",params:{oldPassword:t,newPassword:r}})}function y(t){return e({url:"/system/user/profile/avatar",method:"post",data:t})}function g(t){return e({url:"/system/user/authRole/"+t,method:"get"})}function U(t){return e({url:"/system/user/authRole",method:"put",params:t})}function P(){return e({url:"/system/user/deptTree",method:"get"})}export{f as a,h as b,g as c,P as d,U as e,l as f,c as g,i as h,o as i,m as j,d as k,n as l,p as r,y as u};
