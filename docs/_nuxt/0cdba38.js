(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{340:function(t,e,n){"use strict";n.r(e);var o=["Periodic Table","Ionic States","Lewis Dots","Electron Configurations","Trends"],r={data:function(t){return{views:o,viewIndex:0,view:""}},created:function(){this.setView(0)},methods:{setView:function(t){this.viewIndex=t,this.view=this.views[this.viewIndex],this.$emit("set-view",this.view)}}},c=n(65),l=n(152),w=n.n(l),v=n(371),d=n(352),h=n(372),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"pa-1",attrs:{"no-gutters":"",justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h3",{staticClass:"text-center",domProps:{textContent:t._s(t.view)}})]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-slider",{attrs:{min:"0",max:t.views.length-1,ticks:"always","tick-labels":t.views,value:t.viewIndex},on:{input:t.setView}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VCol:v.a,VRow:d.a,VSlider:h.a})}}]);