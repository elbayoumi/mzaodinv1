import{T as p,c,w as l,o as a,a as s,u as n,Z as _,e as r,A as k,t as y,f as t,y as $,G as w,b as v,d as u,s as x,F as C}from"./app.5525411e.js";import{m as A,t as D,A as N,n as O,x as j,y as B}from"./colors.a2631a0f.js";import{_ as S}from"./LayoutAuthenticated.8d8b991e.js";import{_ as V,a as T}from"./SectionTitleLineWithButton.5b904e92.js";import{_ as d,a as h}from"./CardBox.6a785c8c.js";import{_ as M}from"./BaseButtons.46955167.js";import{_ as E}from"./NotificationBar.8938ad3d.js";import{_ as F,a as q}from"./Sort.cdb1ab42.js";import"./FormControl.c85245a6.js";import"./BaseLevel.012c8a60.js";const G={class:"py-2 flex"},I={class:"flex pl-4"},L=t("th",null," Description ",-1),P={key:0},U={"data-label":"Name"},Z={"data-label":"Description"},z={key:0,class:"before:hidden lg:w-1 whitespace-nowrap"},H={class:"py-4"},se={__name:"Index",props:{categoryTypes:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})}},setup(e){const f=p({search:e.filters.search}),g=p({});function b(i){confirm("Are you sure you want to delete?")&&g.delete(route("admin.category.type.destroy",i))}return(i,m)=>(a(),c(S,null,{default:l(()=>[s(n(_),{title:"category Types"}),s(T,null,{default:l(()=>[s(V,{icon:n(A),title:"Category Types",main:""},{default:l(()=>[e.can.delete?(a(),c(d,{key:0,"route-name":i.route("admin.category.type.create"),icon:n(D),label:"Add",color:"info","rounded-full":"",small:""},null,8,["route-name","icon"])):r("",!0)]),_:1},8,["icon"]),i.$page.props.flash.message?(a(),c(E,{key:Date.now(),color:"success",icon:n(N)},{default:l(()=>[k(y(i.$page.props.flash.message),1)]),_:1},8,["icon"])):r("",!0),s(h,{class:"mb-6","has-table":""},{default:l(()=>[t("form",{onSubmit:m[1]||(m[1]=v(o=>n(f).get(i.route("admin.category.type.index")),["prevent"]))},[t("div",G,[t("div",I,[$(t("input",{type:"search","onUpdate:modelValue":m[0]||(m[0]=o=>n(f).search=o),class:"rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",placeholder:"Search"},null,512),[[w,n(f).search]]),s(d,{label:"Search",type:"submit",color:"info",class:"ml-4 inline-flex items-center px-4 py-2"})])])],32)]),_:1}),s(h,{class:"mb-6","has-table":""},{default:l(()=>[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[s(F,{label:"Name",attribute:"name"})]),L,e.can.edit||e.can.delete||e.can.manage?(a(),u("th",P,"Actions")):r("",!0)])]),t("tbody",null,[(a(!0),u(C,null,x(e.categoryTypes.data,o=>(a(),u("tr",{key:o.id},[t("td",U,y(o.name),1),t("td",Z,y(o.description),1),e.can.edit||e.can.delete||e.can.manage?(a(),u("td",z,[s(M,{type:"justify-start lg:justify-end","no-wrap":""},{default:l(()=>[e.can.manage?(a(),c(d,{key:0,"route-name":i.route("admin.category.type.item.index",o.id),color:"warning",icon:n(O),small:""},null,8,["route-name","icon"])):r("",!0),e.can.edit?(a(),c(d,{key:1,"route-name":i.route("admin.category.type.edit",o.id),color:"info",icon:n(j),small:""},null,8,["route-name","icon"])):r("",!0),e.can.delete?(a(),c(d,{key:2,color:"danger",icon:n(B),small:"",onClick:K=>b(o.id)},null,8,["icon","onClick"])):r("",!0)]),_:2},1024)])):r("",!0)]))),128))])]),t("div",H,[s(q,{data:e.categoryTypes},null,8,["data"])])]),_:1})]),_:1})]),_:1}))}};export{se as default};
