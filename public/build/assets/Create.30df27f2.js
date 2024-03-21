import{T as b,c as V,w as a,o as s,a as r,u as e,Z as y,b as k,n as i,d,t as m,e as u,f as n,A as p}from"./app.5525411e.js";import{m as g,a as w}from"./colors.a2631a0f.js";import{_ as v}from"./LayoutAuthenticated.8d8b991e.js";import{_ as $,a as E}from"./SectionTitleLineWithButton.5b904e92.js";import{_ as h,a as U}from"./CardBox.6a785c8c.js";import{_ as c}from"./FormField.d5eeaa0c.js";import{_ as f}from"./FormControl.c85245a6.js";import{_ as B}from"./FormCheckRadioGroup.d5296ccf.js";import{_ as N}from"./BaseButtons.46955167.js";import"./BaseLevel.012c8a60.js";const C={key:0,class:"text-red-400 text-sm"},O=n("div",{class:"item-list"},[p(" You can also enter an internal path such as "),n("em",{class:"placeholder"},"/home"),p(" or an external URL such as "),n("em",{class:"placeholder"},"http://example.com"),p(". Add prefix "),n("em",{class:"placeholder"},"<admin>"),p(" to link for admin page. Enter "),n("em",{class:"placeholder"},"<nolink>"),p(" to display link text only. ")],-1),A={key:0,class:"text-red-400 text-sm"},L={key:0,class:"text-red-400 text-sm"},S={key:0,class:"text-red-400 text-sm"},T=n("div",null," The maximum depth for a link and all its children is fixed. Some menu links may not be available as parents if selecting them would exceed this limit. ",-1),D={key:0,class:"text-red-400 text-sm"},F={__name:"Create",props:{menu:{type:Object,default:()=>({})},item_options:{type:Object,default:()=>({})}},setup(_){const t=b({name:"",uri:"",description:"",enabled:!0,parent_id:"",weight:""});return(x,o)=>(s(),V(v,null,{default:a(()=>[r(e(y),{title:"Create menu item"}),r(E,null,{default:a(()=>[r($,{icon:e(g),title:"Add menu item",main:""},{default:a(()=>[r(h,{"route-name":x.route("admin.menu.item.index",_.menu.id),icon:e(w),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),r(U,{form:"",onSubmit:o[6]||(o[6]=k(l=>e(t).post(x.route("admin.menu.item.store",_.menu.id)),["prevent"]))},{footer:a(()=>[r(N,null,{default:a(()=>[r(h,{type:"submit",color:"info",label:"Submit",class:i({"opacity-25":e(t).processing}),disabled:e(t).processing},null,8,["class","disabled"])]),_:1})]),default:a(()=>[r(c,{label:"Name",class:i({"text-red-400":e(t).errors.name})},{default:a(()=>[r(f,{modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).name=l),type:"text",placeholder:"Enter Name",error:e(t).errors.name},{default:a(()=>[e(t).errors.name?(s(),d("div",C,m(e(t).errors.name),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(c,{label:"Link",class:i({"text-red-400":e(t).errors.uri})},{default:a(()=>[r(f,{modelValue:e(t).uri,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).uri=l),type:"text",placeholder:"Enter Link",error:e(t).errors.name},{default:a(()=>[O,e(t).errors.uri?(s(),d("div",A,m(e(t).errors.uri),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(c,{label:"Description",class:i({"text-red-400":e(t).errors.description})},{default:a(()=>[r(f,{modelValue:e(t).description,"onUpdate:modelValue":o[2]||(o[2]=l=>e(t).description=l),type:"text",placeholder:"Enter Description",error:e(t).errors.description},{default:a(()=>[e(t).errors.description?(s(),d("div",L,m(e(t).errors.description),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(B,{modelValue:e(t).enabled,"onUpdate:modelValue":o[3]||(o[3]=l=>e(t).enabled=l),name:"enabled",options:{enabled:"Enabled"}},null,8,["modelValue"]),r(c,{label:"Parent Item",class:i({"text-red-400":e(t).errors.parent_id})},{default:a(()=>[r(f,{modelValue:e(t).parent_id,"onUpdate:modelValue":o[4]||(o[4]=l=>e(t).parent_id=l),type:"select",placeholder:"--ROOT--",error:e(t).errors.parent_id,options:_.item_options},{default:a(()=>[e(t).errors.parent_id?(s(),d("div",S,m(e(t).errors.parent_id),1)):u("",!0),T]),_:1},8,["modelValue","error","options"])]),_:1},8,["class"]),r(c,{label:"Weight",class:i({"text-red-400":e(t).errors.weight})},{default:a(()=>[r(f,{modelValue:e(t).weight,"onUpdate:modelValue":o[5]||(o[5]=l=>e(t).weight=l),type:"text",placeholder:"Enter Weight",error:e(t).errors.weight},{default:a(()=>[e(t).errors.weight?(s(),d("div",D,m(e(t).errors.weight),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{F as default};
