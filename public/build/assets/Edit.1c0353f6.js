import{T as k,c as V,w as s,o as l,a as r,u as e,Z as E,A as U,t as i,e as u,b as $,n as m,f,d as n,s as q,F as D}from"./app.5525411e.js";import{C as A,a as C,D as N,E as B}from"./colors.a2631a0f.js";import{_ as I}from"./LayoutAuthenticated.8d8b991e.js";import{_ as O,a as T}from"./SectionTitleLineWithButton.5b904e92.js";import{_ as y,a as F}from"./CardBox.6a785c8c.js";import{_}from"./FormField.d5eeaa0c.js";import{_ as c}from"./FormControl.c85245a6.js";import{_ as M}from"./BaseButtons.46955167.js";import{_ as K}from"./NotificationBar.8938ad3d.js";import"./BaseLevel.012c8a60.js";const L={class:"flex"},S={class:"grid grid-cols-3 gap-4 my-4"},W={class:"relative"},j={class:"absolute inset-x-1/2 text-gray-800 font-semibold bg-white bg-opacity-75 px-4 text-center py-1 rounded"},z=["src","alt"],P={class:"absolute top-2 right-2"},Y=["onClick"],Z=f("i",{class:"fas fa-trash"},null,-1),G=[Z],H={key:0,class:"text-red-400 text-sm"},J={key:0,class:"text-red-400 text-sm"},Q={key:0,class:"text-red-400 text-sm"},R={key:0,class:"text-red-400 text-sm"},X={key:0,class:"text-red-400 text-sm"},ee={key:0,class:"text-red-400 text-sm"},te={key:0,class:"text-red-400 text-sm"},re={key:0,class:"text-red-400 text-sm"},oe={key:0,class:"text-red-400 text-sm"},ae={key:0,class:"text-red-400 text-sm"},se={key:0,class:"text-red-400 text-sm"},de={key:0,class:"text-red-400 text-sm"},le={key:0,class:"text-red-400 text-sm"},ie={key:0,class:"text-red-400 text-sm"},xe={__name:"Edit",props:{product:{type:Object,default:()=>({})}},setup(h){const d=h,t=k({_method:"put",name_arabic:d.product.name_arabic,name_english:d.product.name_english,sku:d.product.sku,weight:d.product.weight,payment_deadline_minutes:d.product.payment_deadline_minutes,cost_price:d.product.cost_price,estimated_market_price:d.product.estimated_market_price,auction_duration_minutes:d.product.auction_duration_minutes,registration_amount:d.product.registration_amount,required_bidders:d.product.required_bidders,opening_bid_amount:d.product.opening_bid_amount,product_details:d.product.product_details,auction_start:x(d.product.auction_start),auction_end:x(d.product.auction_end)});function x(p){if(!p)return null;const a=new Date(p),o=a.getFullYear();let b=a.getMonth()+1;b<10&&(b="0"+b);let g=a.getDate();return g<10&&(g="0"+g),`${o}-${b}-${g}`}const v=k({});function w(p,a){confirm(`Are you sure you want to delete image ${a} ? `)&&v.delete(route("admin.product.destroyImage",p))}return(p,a)=>(l(),V(I,null,{default:s(()=>[r(e(E),{title:"Update product"}),r(T,null,{default:s(()=>[r(O,{icon:e(A),title:"Update product",main:""},{default:s(()=>[r(y,{"route-name":p.route("admin.product.index"),icon:e(C),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),p.$page.props.flash.message?(l(),V(K,{key:Date.now(),color:"success",icon:p.mdiAlertBoxOutline},{default:s(()=>[U(i(p.$page.props.flash.message),1)]),_:1},8,["icon"])):u("",!0),r(F,{form:"",onSubmit:a[14]||(a[14]=$(o=>e(t).post(p.route("admin.product.update",d.product.id)),["prevent"]))},{footer:s(()=>[r(M,null,{default:s(()=>[r(y,{type:"submit",color:"info",label:"Submit",class:m({"opacity-25":e(t).processing}),disabled:e(t).processing},null,8,["class","disabled"])]),_:1})]),default:s(()=>[r(_,{class:"image-container"},{default:s(()=>[f("div",L,[r(y,{label:"Image Upload",class:"w-32 h-10 inline-block","route-name":p.route("admin.product.image",d.product.id),icon:e(N)},null,8,["route-name","icon"]),r(y,{label:"Image Edit",class:"w-32 h-10 inline-block ml-4","route-name":p.route("admin.product.editImageProductMultible",d.product.id),icon:e(B)},null,8,["route-name","icon"])])]),_:1}),f("div",S,[(l(!0),n(D,null,q(d.product.image_product,(o,b)=>(l(),n("div",{key:o.id,class:"max-w-full focus:ring focus:outline-none rounded"},[f("div",W,[f("span",j,i(o.rank),1),f("img",{class:"image block w-full",src:o.image_path,alt:o.alt},null,8,z),f("div",P,[f("div",{onClick:g=>w(o.id,o.rank),class:"px-2 py-1 cursor-pointer bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none"},G,8,Y)])])]))),128))]),r(_,{label:"Name Arabic",class:m({"text-red-400":e(t).errors.name_arabic})},{default:s(()=>[r(c,{modelValue:e(t).name_arabic,"onUpdate:modelValue":a[0]||(a[0]=o=>e(t).name_arabic=o),type:"text",placeholder:"Enter Name Arabic",error:e(t).errors.name_arabic},{default:s(()=>[e(t).errors.name_arabic?(l(),n("div",H,i(e(t).errors.name_arabic),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"Name English",class:m({"text-red-400":e(t).errors.name_english})},{default:s(()=>[r(c,{modelValue:e(t).name_english,"onUpdate:modelValue":a[1]||(a[1]=o=>e(t).name_english=o),type:"text",placeholder:"Enter Name English",error:e(t).errors.name},{default:s(()=>[e(t).errors.name_english?(l(),n("div",J,i(e(t).errors.name_english),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"sku",class:m({"text-red-400":e(t).errors.sku})},{default:s(()=>[r(c,{modelValue:e(t).sku,"onUpdate:modelValue":a[2]||(a[2]=o=>e(t).sku=o),type:"text",placeholder:"Enter sku",error:e(t).errors.sku},{default:s(()=>[e(t).errors.sku?(l(),n("div",Q,i(e(t).errors.sku),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"Weight",class:m({"text-red-400":e(t).errors.weight})},{default:s(()=>[r(c,{modelValue:e(t).weight,"onUpdate:modelValue":a[3]||(a[3]=o=>e(t).weight=o),type:"number",step:"0.01",placeholder:"Enter Weight",error:e(t).errors.weight},{default:s(()=>[e(t).errors.weight?(l(),n("div",R,i(e(t).errors.weight),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"payment deadline minutes",class:m({"text-red-400":e(t).errors.payment_deadline_minutes})},{default:s(()=>[r(c,{modelValue:e(t).payment_deadline_minutes,"onUpdate:modelValue":a[4]||(a[4]=o=>e(t).payment_deadline_minutes=o),type:"number",step:"0.01",placeholder:"Enter payment deadline minutes",error:e(t).errors.payment_deadline_minutes},{default:s(()=>[e(t).errors.payment_deadline_minutes?(l(),n("div",X,i(e(t).errors.payment_deadline_minutes),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"cost price",class:m({"text-red-400":e(t).errors.cost_price})},{default:s(()=>[r(c,{modelValue:e(t).cost_price,"onUpdate:modelValue":a[5]||(a[5]=o=>e(t).cost_price=o),type:"number",step:"0.01",placeholder:"Enter cost price",error:e(t).errors.cost_price},{default:s(()=>[e(t).errors.cost_price?(l(),n("div",ee,i(e(t).errors.cost_price),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"estimated market price",class:m({"text-red-400":e(t).errors.estimated_market_price})},{default:s(()=>[r(c,{modelValue:e(t).estimated_market_price,"onUpdate:modelValue":a[6]||(a[6]=o=>e(t).estimated_market_price=o),type:"number",step:"0.01",placeholder:"Enter estimated market price",error:e(t).errors.estimated_market_price},{default:s(()=>[e(t).errors.estimated_market_price?(l(),n("div",te,i(e(t).errors.estimated_market_price),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"auction duration minutes",class:m({"text-red-400":e(t).errors.auction_duration_minutes})},{default:s(()=>[r(c,{modelValue:e(t).auction_duration_minutes,"onUpdate:modelValue":a[7]||(a[7]=o=>e(t).auction_duration_minutes=o),type:"number",placeholder:"Enter auction  duration minutes",error:e(t).errors.auction_duration_minutes},{default:s(()=>[e(t).errors.auction_duration_minutes?(l(),n("div",re,i(e(t).errors.weight),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"registration amount",class:m({"text-red-400":e(t).errors.registration_amount})},{default:s(()=>[r(c,{modelValue:e(t).registration_amount,"onUpdate:modelValue":a[8]||(a[8]=o=>e(t).registration_amount=o),type:"number",step:"0.01",placeholder:"Enter registration amount",error:e(t).errors.registration_amount},{default:s(()=>[e(t).errors.registration_amount?(l(),n("div",oe,i(e(t).errors.registration_amount),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"required bidders",class:m({"text-red-400":e(t).errors.required_bidders})},{default:s(()=>[r(c,{modelValue:e(t).required_bidders,"onUpdate:modelValue":a[9]||(a[9]=o=>e(t).required_bidders=o),type:"number",step:"0.01",placeholder:"Enter required bidders",error:e(t).errors.required_bidders},{default:s(()=>[e(t).errors.required_bidders?(l(),n("div",ae,i(e(t).errors.required_bidders),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"opening bid amount",class:m({"text-red-400":e(t).errors.opening_bid_amount})},{default:s(()=>[r(c,{modelValue:e(t).opening_bid_amount,"onUpdate:modelValue":a[10]||(a[10]=o=>e(t).opening_bid_amount=o),type:"number",step:"0.01",placeholder:"Enter opening bid amount",error:e(t).errors.opening_bid_amount},{default:s(()=>[e(t).errors.opening_bid_amount?(l(),n("div",se,i(e(t).errors.opening_bid_amount),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"Details",class:m({"text-red-400":e(t).errors.product_details})},{default:s(()=>[r(c,{modelValue:e(t).product_details,"onUpdate:modelValue":a[11]||(a[11]=o=>e(t).product_details=o),type:"textarea",placeholder:"Enter  Details",error:e(t).errors.product_details},{default:s(()=>[e(t).errors.product_details?(l(),n("div",de,i(e(t).errors.product_details),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"auction start",class:m({"text-red-400":e(t).errors.auction_start})},{default:s(()=>[r(c,{modelValue:e(t).auction_start,"onUpdate:modelValue":a[12]||(a[12]=o=>e(t).auction_start=o),type:"date",step:"0.01",placeholder:"Enter auction start",error:e(t).errors.auction_start},{default:s(()=>[e(t).errors.auction_start?(l(),n("div",le,i(e(t).errors.auction_start),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(_,{label:"auction end",class:m({"text-red-400":e(t).errors.auction_end})},{default:s(()=>[r(c,{modelValue:e(t).auction_end,"onUpdate:modelValue":a[13]||(a[13]=o=>e(t).auction_end=o),type:"date",step:"0.01",placeholder:"Enter auction end",error:e(t).errors.auction_end},{default:s(()=>[e(t).errors.auction_end?(l(),n("div",ie,i(e(t).errors.auction_end),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{xe as default};
