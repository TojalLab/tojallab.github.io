import{q as f,e as v,j as g,u as d}from"./query.2bd36cc8.js";import{x as l,B as h,j as _,C as y,D as C,E as w,y as P,A as r}from"./entry.49c8ce84.js";import{h as p,u as $}from"./preview.94f993f7.js";import{_ as j}from"./nuxt-link.261581dc.js";import{w as c,s as N,u as D}from"./utils.87857f88.js";const E=async e=>{const{content:t}=l().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await h(()=>import("./client-db.438f83c0.js"),["./client-db.438f83c0.js","./entry.49c8ce84.js","./entry.1533d98b.css","./query.2bd36cc8.js","./preview.94f993f7.js","./utils.87857f88.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:g(a),previewToken:$().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},O=_({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=y(e),a=C(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&w("dd-navigation").value){const{navigation:n}=D();return{navigation:n}}const{data:s}=await d(`content-navigation-${p(a.value)}`,()=>E(a.value));return{navigation:s}},render(e){const t=P(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{O as default};
