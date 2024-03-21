import{T as c,c as w,w as l,o as _,a,u as e,Z as b,n as m,b as V}from"./app.5525411e.js";import{o as P,N as d,j as y}from"./colors.a2631a0f.js";import{_ as $,a as k,b as g}from"./FormValidationErrors.0962bfc6.js";import{a as x,_ as q}from"./CardBox.6a785c8c.js";import{_ as i}from"./FormField.d5eeaa0c.js";import{_ as t}from"./FormControl.c85245a6.js";const N={__name:"ResetPassword",props:{email:{type:String,default:null},token:{type:String,default:null}},setup(p){const n=p,s=c({token:n.token,email:n.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(C,o)=>(_(),w($,null,{default:l(()=>[a(e(b),{title:"Reset Password"}),a(g,{bg:"purplePink"},{default:l(({cardClass:f})=>[a(x,{class:m(f),form:"",onSubmit:V(u,["prevent"])},{default:l(()=>[a(k),a(i,{label:"Email","label-for":"email",help:"Please enter your email"},{default:l(()=>[a(t,{modelValue:e(s).email,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).email=r),icon:e(P),autocomplete:"email",type:"email",id:"email",required:""},null,8,["modelValue","icon"])]),_:1}),a(i,{label:"Password","label-for":"password",help:"Please enter new password"},{default:l(()=>[a(t,{modelValue:e(s).password,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).password=r),icon:e(d),type:"password",autocomplete:"new-password",id:"password",required:""},null,8,["modelValue","icon"])]),_:1}),a(i,{label:"Confirm Password","label-for":"password_confirmation",help:"Please confirm new password"},{default:l(()=>[a(t,{modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=r=>e(s).password_confirmation=r),icon:e(d),type:"password",autocomplete:"new-password",id:"password_confirmation",required:""},null,8,["modelValue","icon"])]),_:1}),a(y),a(q,{type:"submit",color:"info",label:"Reset password",class:m({"opacity-25":e(s).processing}),disabled:e(s).processing},null,8,["class","disabled"])]),_:2},1032,["class"])]),_:1})]),_:1}))}};export{N as default};
