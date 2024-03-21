import{T as g,c as i,w as o,o as n,a as e,u as s,Z as V,n as u,b as $,A as d,t as y,e as f,i as k}from"./app.5525411e.js";import{l as P,M as R,j as h}from"./colors.a2631a0f.js";import{_ as q,a as A,c as B,b as C}from"./FormValidationErrors.0962bfc6.js";import{a as L,_ as p}from"./CardBox.6a785c8c.js";import{_ as N}from"./FormCheckRadioGroup.d5296ccf.js";import{_ as c}from"./FormField.d5eeaa0c.js";import{_}from"./FormControl.c85245a6.js";import{_ as S}from"./BaseButtons.46955167.js";import{_ as U}from"./BaseLevel.012c8a60.js";const Z={__name:"Login",props:{canResetPassword:Boolean,status:{type:String,default:null}},setup(m){const a=g({email:"",password:"",remember:[]}),b=()=>{a.transform(t=>({...t,remember:a.remember&&a.remember.length?"on":""})).post(route("login"),{onFinish:()=>a.reset("password")})};return(t,r)=>(n(),i(q,null,{default:o(()=>[e(s(V),{title:"Login"}),e(C,{bg:"purplePink"},{default:o(({cardClass:w})=>[e(L,{class:u(w),form:"",onSubmit:$(b,["prevent"])},{default:o(()=>[e(A),m.status?(n(),i(B,{key:0,color:"info"},{default:o(()=>[d(y(m.status),1)]),_:1})):f("",!0),e(c,{label:"Email","label-for":"email",help:"Please enter your email"},{default:o(()=>[e(_,{modelValue:s(a).email,"onUpdate:modelValue":r[0]||(r[0]=l=>s(a).email=l),icon:s(P),id:"email",autocomplete:"email",type:"email",required:""},null,8,["modelValue","icon"])]),_:1}),e(c,{label:"Password","label-for":"password",help:"Please enter your password"},{default:o(()=>[e(_,{modelValue:s(a).password,"onUpdate:modelValue":r[1]||(r[1]=l=>s(a).password=l),icon:s(R),type:"password",id:"password",autocomplete:"current-password",required:""},null,8,["modelValue","icon"])]),_:1}),e(N,{modelValue:s(a).remember,"onUpdate:modelValue":r[2]||(r[2]=l=>s(a).remember=l),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),e(h),e(U,null,{default:o(()=>[e(S,null,{default:o(()=>[e(p,{type:"submit",color:"info",label:"Login",class:u({"opacity-25":s(a).processing}),disabled:s(a).processing},null,8,["class","disabled"]),m.canResetPassword?(n(),i(p,{key:0,"route-name":t.route("password.request"),color:"info",outline:"",label:"Remind"},null,8,["route-name"])):f("",!0)]),_:1}),e(s(k),{href:t.route("register")},{default:o(()=>[d(" Register ")]),_:1},8,["href"])]),_:1})]),_:2},1032,["class"])]),_:1})]),_:1}))}};export{Z as default};