import{_ as m}from"./nuxt-link.261581dc.js";import{_ as p,r as n,c as v,b as t,w as o,o as b,d as a,U as h}from"./entry.49c8ce84.js";const w={name:"full",data(){return{showBackButton:!1}},methods:{backbutton(){this.showBackButton?this.$router.go(-1):this.$router.go("/")}},mounted(){this.showBackButton=window.history.length>0}};function k(s,B,x,$,l,_){const e=n("v-btn"),c=m,r=n("v-toolbar-title"),u=n("v-spacer"),i=n("v-app-bar"),d=n("v-container"),f=n("v-main");return b(),v("div",null,[t(i,{class:"toolbar-color",theme:"dark",fixed:""},{default:o(()=>[t(e,{onClick:_.backbutton,icon:l.showBackButton?"mdi-arrow-left":"mdi-home-outline"},null,8,["onClick","icon"]),t(r,{class:"lab-name-font",to:"/"},{default:o(()=>[t(c,{to:"/"},{default:o(()=>[a("Tojal Lab")]),_:1})]),_:1}),t(u),t(e,{to:"/publications/list"},{default:o(()=>[a("Publications")]),_:1}),t(e,{to:"/software/list"},{default:o(()=>[a("Software")]),_:1}),t(e,{to:"/news/list"},{default:o(()=>[a("News")]),_:1}),t(e,{to:"/team"},{default:o(()=>[a("Team")]),_:1}),t(e,{to:"/joinus"},{default:o(()=>[a("Join us")]),_:1})]),_:1}),t(f,null,{default:o(()=>[t(d,null,{default:o(()=>[h(s.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}const N=p(w,[["render",k],["__scopeId","data-v-e8850823"]]);export{N as default};