(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6,7,8],{297:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l}));var r=9,o=18,l=[{left:1,middle:16,right:1,firstElement:0,firstANumber:1},{left:2,middle:10,right:6,firstElement:2,firstANumber:3},{left:2,middle:10,right:6,firstElement:10,firstANumber:11},{left:18,middle:0,right:0,firstElement:18,firstANumber:19},{left:18,middle:0,right:0,firstElement:36,firstANumber:37},{left:2,middle:1,right:15,firstElement:54,firstANumber:55},{left:2,middle:1,right:15,firstElement:71,firstANumber:87},{left:15,middle:0,right:0,firstElement:88,firstANumber:57},{left:15,middle:0,right:0,firstElement:103,firstANumber:89}]},298:function(e,t,n){"use strict";n.d(t,"n",(function(){return r})),n.d(t,"o",(function(){return o})),n.d(t,"j",(function(){return l})),n.d(t,"i",(function(){return c})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return v})),n.d(t,"h",(function(){return y})),n.d(t,"q",(function(){return h})),n.d(t,"p",(function(){return w})),n.d(t,"m",(function(){return x})),n.d(t,"e",(function(){return _})),n.d(t,"d",(function(){return N})),n.d(t,"l",(function(){return C})),n.d(t,"k",(function(){return P})),n.d(t,"c",(function(){return j}));var r=0,o=1,l=2,c=3,m=4,f=5,d=6,v=7,y=[l],h=[l,c],w=[l,d],x=[r,l,d],_=[r,l,m,d],N=[r,o,l,m,d],C=[r,o,l,m,d,v],P=[r,o,l,m,f,d,v],j=[r,o,l,c,m,f,d,v]},300:function(e,t,n){"use strict";t.a={"Alkali metals":"#9863ff","Alkaline earth metals":"#f368e0","Transition metals":"#ff9f43","Basic metals":"#ee5253",Metalloids:"#0abde3",Nonmetals:"#1dd1a1",Halogens:"#01a3a4","Noble gases":"#2e86de",Lanthanides:"#c8d6e5",Actinides:"#8395a7"}},301:function(e,t,n){"use strict";t.a={s:"#9863ff",p:"#ee5253",d:"#2e86de",f:"#10ac84"}},302:function(e,t,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(105).default)("355f1f36",content,!0,{sourceMap:!1})},305:function(e,t,n){"use strict";n.r(t);n(209);var r=n(297),o={props:{columnSize:{type:Number,default:1},color:{type:String,default:"transparent"},isKey:{type:Boolean,default:!1}},data:function(e){return{width:64,height:64}},mounted:function(){var e=1*(window.innerWidth-8*(r.a+1))/r.a,t=1*(window.innerHeight-8*(r.b+1))/r.b,n=Math.floor(Math.min(e,t));n>64&&(n=64),this.isKey&&(n=Math.round(2.5*n)),this.width=this.columnSize*n+8*(this.columnSize-1),this.height=n}},l=n(65),c=n(152),m=n.n(c),f=n(374),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-card",{staticClass:"ma-1",staticStyle:{display:"relative"},style:{"pointer-events":"transparent"==e.color?"none":"auto",cursor:e.isKey||"transparent"==e.color?"auto":"pointer"},attrs:{width:e.width,height:e.height,color:e.color,flat:"transparent"==e.color,ripple:!e.isKey&&"transparent"!=e.color},nativeOn:{click:function(t){!e.isKey&&e.$emit("select-element")}}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCard:f.a})},309:function(e,t,n){"use strict";n.r(t);n(209);var r=n(298),o={props:{isKey:{type:Boolean,default:!1},position:{type:Number,default:0}},computed:{translateX:function(){return this.position===r.j||this.position===r.i?"":"-"},translateY:function(){return this.position===r.b||this.position===r.a?"":"-"},largePosition:function(){return this.isKey?30:12},smallPosition:function(){return this.isKey?20:8},xPosition:function(){switch(this.position){case r.n:case r.a:return"left: calc(50% - ".concat(this.smallPosition,"px)");case r.o:case r.b:return"left: calc(50% + ".concat(this.smallPosition,"px)");case r.j:case r.i:return"right: ".concat(this.largePosition,"px");case r.g:case r.f:return"left: ".concat(this.largePosition,"px");default:return"left: 0px"}},yPosition:function(){switch(this.position){case r.n:case r.o:return"top: ".concat(this.largePosition,"px");case r.j:case r.g:return"top: calc(50% - ".concat(this.smallPosition,"px)");case r.i:case r.f:return"top: calc(50% + ".concat(this.smallPosition,"px)");case r.a:case r.b:return"bottom: ".concat(this.largePosition,"px");default:return"top: 0px"}}}},l=n(65),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"pa-1 black rounded-circle",class:e.isKey?"pa-2":"pa-1",staticStyle:{position:"absolute"},style:e.xPosition+"; "+e.yPosition+"; transform: translate("+e.translateX+"50%, "+e.translateY+"50%);"})}),[],!1,null,null,null);t.default=component.exports},313:function(e,t,n){"use strict";n(302)},314:function(e,t,n){var r=n(104)(!1);r.push([e.i,".cell[data-v-3c648b59]{height:100%;display:flex;flex-direction:column;justify-content:flex-end}",""]),e.exports=r},315:function(e,t,n){"use strict";n.r(t);n(209),n(42);var r=n(300),o=n(301),l={props:{element:{type:Object,default:function(){return{name:"Hydrogen",symbol:"H"}}},view:{type:String,default:""},periodNumber:{type:Number,default:0},groupNumber:{type:Number,default:0},block:{type:String,default:"1s"},isKey:{type:Boolean,default:!1},atomicNumber:{type:Number,default:1}},computed:{color:function(){var e,t;return"Electron Configurations"===this.view?null!==(e=o.a[this.block[1]])&&void 0!==e?e:"":null!==(t=r.a[this.element.family])&&void 0!==t?t:""},charge:function(){return this.groupNumber<3?"".concat(this.groupNumber,"+"):13===this.groupNumber?"3+":this.groupNumber>14&&this.groupNumber<18?"".concat(18-this.groupNumber,"-"):""}},methods:{formatCharge:function(e){var t=Math.abs(e);return"".concat(t>1?t:"").concat(e>0?"+":"-")}}},c=(n(313),n(65)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("EmptyCell",{attrs:{color:e.color,"is-key":e.isKey},on:{"select-element":function(t){!e.isKey&&e.$emit("select-element",{element:e.element,atomicNumber:e.atomicNumber})}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:0!=e.periodNumber,expression:"periodNumber != 0"}],staticClass:"text-center",staticStyle:{position:"absolute",top:"50%",left:"-4px",transform:"translate(-100%, -50%)"},style:1==e.periodNumber?"writing-mode: vertical-rl; height: 100%;":""},[e._v("\n    "+e._s((1==e.periodNumber?"Period ":"")+e.periodNumber)+"\n  ")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:0!=e.groupNumber,expression:"groupNumber != 0"}],staticClass:"text-center",staticStyle:{position:"absolute",left:"50%",top:"-4px",transform:"translate(-50%, -100%)",width:"100%"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:"Ionic States"!=e.view,expression:"view != 'Ionic States'"}]},[e._v(e._s((1==e.groupNumber?"Group ":"")+e.groupNumber))]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"Ionic States"==e.view,expression:"view == 'Ionic States'"}]},[e._v(e._s((1==e.groupNumber?"Charge ":"")+e.charge))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Periodic Table"==e.view,expression:"view == 'Periodic Table'"}],staticClass:"cell"},[n("p",{staticClass:"mb-n1 text-center",style:{"font-size":(e.isKey?3:1.2)+"rem"},domProps:{textContent:e._s(e.element.symbol)}}),e._v(" "),n("p",{staticClass:"ma-0 text-center",style:{"font-size":(e.isKey?1.625:.65)+"rem"},domProps:{textContent:e._s(e.element.weight)}}),e._v(" "),n("p",{staticClass:"ma-0 text-center",style:{"font-size":(e.isKey?1.25:.5)+"rem"},domProps:{textContent:e._s(e.element.name)}}),e._v(" "),n("p",{staticStyle:{position:"absolute",top:"4px",left:"2px"},style:{"font-size":(e.isKey?1.625:.65)+"rem"},domProps:{textContent:e._s(e.atomicNumber)}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Ionic States"==e.view,expression:"view == 'Ionic States'"}],staticClass:"cell"},[e._l(e.element.ions,(function(t,i){return n("p",{key:"ion-"+i,staticClass:"mb-n3 text-center",class:e.isKey?"mb-n5":"mb-n3",style:{"font-size":(e.isKey?3:1.2)+"rem"}},[e._v("\n      "+e._s(e.element.symbol)+"\n      "),n("sup",{directives:[{name:"show",rawName:"v-show",value:0!=t,expression:"ion != 0"}],style:{"font-size":(e.isKey?1.875:.75)+"rem","margin-left":(e.isKey?-10:-4)+"px"}},[e._v("\n        "+e._s(e.formatCharge(t))+"\n      ")])])})),e._v(" "),n("p",{staticClass:"mb-0 text-center",class:{"mt-2":!e.isKey},style:{"font-size":(e.isKey?1.25:.5)+"rem"},domProps:{textContent:e._s(e.element.name)}}),e._v(" "),n("p",{staticStyle:{position:"absolute",top:"4px",left:"2px"},style:{"font-size":(e.isKey?1.625:.65)+"rem"},domProps:{textContent:e._s(e.atomicNumber)}})],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Lewis Dots"==e.view,expression:"view == 'Lewis Dots'"}],staticClass:"cell"},[n("p",{staticClass:"text-center",staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},style:{"font-size":(e.isKey?3:1.2)+"rem"},domProps:{textContent:e._s(e.element.symbol)}}),e._v(" "),e._l(e.element.dots,(function(t,r){return n("LewisDot",{key:"dot-"+r,attrs:{"is-key":e.isKey,position:t}})}))],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Electron Configurations"==e.view,expression:"view == 'Electron Configurations'"}],staticClass:"cell"},[n("p",{staticClass:"mb-n1 text-center",style:{"font-size":(e.isKey?3:1.2)+"rem"},domProps:{textContent:e._s(e.element.symbol)}}),e._v(" "),n("p",{staticClass:"ma-0 text-center",style:{"font-size":(e.isKey?1.625:.65)+"rem"},domProps:{textContent:e._s(e.block)}}),e._v(" "),n("p",{staticClass:"ma-0 text-center",style:{"font-size":(e.isKey?1.25:.5)+"rem"},domProps:{textContent:e._s(e.element.name)}}),e._v(" "),n("p",{staticStyle:{position:"absolute",top:"4px",left:"2px"},style:{"font-size":(e.isKey?1.625:.65)+"rem"},domProps:{textContent:e._s(e.atomicNumber)}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Trends"==e.view,expression:"view == 'Trends'"}],staticClass:"cell"},[n("p",{staticClass:"mb-1 text-center",style:{"font-size":(e.isKey?3:1.2)+"rem"},domProps:{textContent:e._s(e.element.symbol)}}),e._v(" "),n("p",{staticClass:"ma-0 text-center",style:{"font-size":(e.isKey?1.25:.5)+"rem"},domProps:{textContent:e._s(e.element.name)}}),e._v(" "),n("p",{staticStyle:{position:"absolute",top:"4px",left:"2px"},style:{"font-size":(e.isKey?1.625:.65)+"rem"},domProps:{textContent:e._s(e.atomicNumber)}})])])}),[],!1,null,"3c648b59",null);t.default=component.exports;installComponents(component,{LewisDot:n(309).default,EmptyCell:n(305).default})},342:function(e,t,n){"use strict";n.r(t);n(209);var r={props:{element:{type:Object,default:function(){return{name:"Hydrogen",symbol:"H"}}},atomicNumber:{type:Number,default:1},view:{type:String,default:""}}},o=n(65),l=n(152),c=n.n(l),m=n(371),f=n(352),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"text-right text-body-1",attrs:{cols:"5"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"Periodic Table"==e.view,expression:"view == 'Periodic Table'"}]},[n("p",{staticClass:"ma-0"},[e._v("\n        Atomic Number\n        "),n("br"),n("br"),e._v("\n        Symbol\n        "),n("br"),n("br"),e._v("\n        Atomic Mass\n        "),n("br"),n("br"),e._v("\n        Name\n      ")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Ionic States"==e.view,expression:"view == 'Ionic States'"}]},[n("p",{staticClass:"ma-0"},[e._v("\n        Atomic Number\n        "),n("br"),n("br"),n("br"),n("br"),e._v("\n        Ion\n        "),n("br"),n("br"),e._v("\n        Name\n      ")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Lewis Dots"==e.view,expression:"view == 'Lewis Dots'"}]},[n("p",{staticClass:"ma-0"},[n("br"),n("br"),n("br"),e._v("\n        Symbol\n      ")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Electron Configurations"==e.view,expression:"view == 'Electron Configurations'"}]},[n("p",{staticClass:"ma-0"},[e._v("\n        Atomic Number\n        "),n("br"),n("br"),e._v("\n        Symbol\n        "),n("br"),n("br"),e._v("\n        Orbital\n        "),n("br"),n("br"),e._v("\n        Name\n      ")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Trends"==e.view,expression:"view == 'Trends'"}]},[n("p",{staticClass:"ma-0"},[e._v("\n        Atomic Number\n        "),n("br"),n("br"),n("br"),e._v("\n        Symbol\n        "),n("br"),n("br"),n("br"),e._v("\n        Name\n      ")])])]),e._v(" "),n("TableCell",{attrs:{element:e.element,"atomic-number":e.atomicNumber,view:e.view,"is-key":""}})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{TableCell:n(315).default}),c()(component,{VCol:m.a,VRow:f.a})},352:function(e,t,n){"use strict";n(28),n(36),n(40),n(41);var r=n(20),o=(n(8),n(67),n(68),n(42),n(33),n(25),n(50),n(319),n(48),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(49),n(29),n(333),n(1)),l=n(303),c=n(18);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=["sm","md","lg","xl"],v=["start","end","center"];function y(e,t){return d.reduce((function(n,r){return n[e+Object(c.s)(r)]=t(),n}),{})}var h=function(e){return[].concat(v,["baseline","stretch"]).includes(e)},w=y("align",(function(){return{type:String,default:null,validator:h}})),x=function(e){return[].concat(v,["space-between","space-around"]).includes(e)},_=y("justify",(function(){return{type:String,default:null,validator:x}})),N=function(e){return[].concat(v,["space-between","space-around","stretch"]).includes(e)},C=y("alignContent",(function(){return{type:String,default:null,validator:N}})),P={align:Object.keys(w),justify:Object.keys(_),alignContent:Object.keys(C)},j={align:"align",justify:"justify",alignContent:"align-content"};function S(e,t,n){var r=j[e];if(null!=n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var O=new Map;t.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},w),{},{justify:{type:String,default:null,validator:x}},_),{},{alignContent:{type:String,default:null,validator:N}},C),render:function(e,t){var n=t.props,data=t.data,o=t.children,c="";for(var m in n)c+=String(n[m]);var f=O.get(c);return f||function(){var e,t;for(t in f=[],P)P[t].forEach((function(e){var r=n[e],o=S(t,e,r);o&&f.push(o)}));f.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(e,"align-".concat(n.align),n.align),Object(r.a)(e,"justify-".concat(n.justify),n.justify),Object(r.a)(e,"align-content-".concat(n.alignContent),n.alignContent),e)),O.set(c,f)}(),e(n.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})}}]);