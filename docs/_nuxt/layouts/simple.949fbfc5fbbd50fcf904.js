webpackJsonp([3],{"/rQw":function(t,n,e){"use strict";var a=function(){var t=this.$createElement,n=this._self._c||t;return n("g",[n("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},"/wPQ":function(t,n,e){"use strict";var a=e("zTCQ"),s=e("rKnj"),i=!1;var o=function(t){i||e("fVo7")},r=e("VU/8")(a.a,s.a,!1,o,"data-v-b6aed376",null);r.options.__file="components/IconBase.vue",n.a=r.exports},"47yv":function(t,n,e){"use strict";var a=e("GjVg"),s=e("VU/8")(null,a.a,!1,null,null,null);s.options.__file="components/icons/IconInfo.vue",n.a=s.exports},"6J+2":function(t,n,e){"use strict";var a=e("lDaj");n.a={name:"SlideNav",components:{CallToAction:a.a},data:function(){return{title:"SlideNav",show:!1}},methods:{navToggle:function(){this.show=!this.show},closeToggle:function(){this.show=!this.show}}}},"7V3H":function(t,n,e){"use strict";var a=e("/wPQ"),s=e("47yv"),i=e("HldI"),o=e("nBUn"),r=e("B52B");n.a={name:"Navigation",components:{IconBase:a.a,IconInfo:s.a,IconTrash:i.a,IconShare:o.a,IconArrowLeft:r.a},data:function(){return{title:"Navigation"}},methods:{toggleAllInfo:function(t){document.body.classList.toggle("showAllInfo")},setupClear:function(){confirm("Are you sure? This will remove all your hard work.")&&this.$store.commit("setup/setupClear")}}}},B52B:function(t,n,e){"use strict";var a=e("grw4"),s=e("VU/8")(null,a.a,!1,null,null,null);s.options.__file="components/icons/IconArrowLeft.vue",n.a=s.exports},CvqX:function(t,n,e){"use strict";var a=e("6J+2"),s=e("RX5y"),i=e("VU/8")(a.a,s.a,!1,null,null,null);i.options.__file="components/SlideNav.vue",n.a=i.exports},FMf0:function(t,n,e){var a=e("ZhWS");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("f67eac60",a,!1,{sourceMap:!1})},Fj78:function(t,n,e){"use strict";var a=e("YXP+"),s=e("I8H5");n.a={components:{Header:a.a,Navigation:s.a}}},GjVg:function(t,n,e){"use strict";var a=function(){var t=this.$createElement,n=this._self._c||t;return n("g",[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},HhzD:function(t,n,e){"use strict";var a=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("Header"),n("transition",{attrs:{name:"layout",mode:"out-in"}},[n("nuxt")],1),"index"!=this.$route.name?n("Navigation"):this._e()],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},HldI:function(t,n,e){"use strict";var a=e("/rQw"),s=e("VU/8")(null,a.a,!1,null,null,null);s.options.__file="components/icons/IconTrash.vue",n.a=s.exports},I8H5:function(t,n,e){"use strict";var a=e("7V3H"),s=e("eAXS"),i=!1;var o=function(t){i||e("V/np")},r=e("VU/8")(a.a,s.a,!1,o,"data-v-21fe78a2",null);r.options.__file="components/Navigation.vue",n.a=r.exports},IJCV:function(t,n,e){"use strict";n.a={name:"CallToAction",data:function(){return{title:"CallToAction",callToActions:this.$store.state.default.callToActions}}}},RX5y:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component-CallToAction",attrs:{"data-show-nav":t.show}},[e("div",{attrs:{id:"alloy-nav-toggle"},on:{click:t.navToggle}},[t._m(0)]),e("div",{staticClass:"alloy-slide-nav",on:{click:t.closeToggle}},[e("div",{staticClass:"inner"},[e("nav",[e("nuxt-link",{attrs:{to:"/setup"}},[t._v("Your Setup")]),e("nuxt-link",{attrs:{to:"/setup/decks"}},[t._v("All Decks")]),e("nuxt-link",{attrs:{to:"/setup/trucks"}},[t._v("All Trucks")]),e("nuxt-link",{attrs:{to:"/setup/wheels"}},[t._v("All Wheels")]),e("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),e("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),e("CallToAction")],1)])])};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"inner"},[n("span"),n("span"),n("span"),n("span")])}]};n.a=s},RulR:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component-CallToAction"},t._l(t.callToActions,function(n,a){return e("div",{key:a,staticClass:"alloy-cards cta",attrs:{"data-cta-type":n.type}},[e("div",{staticClass:"inner"},[e("p",[e("strong",[t._v(t._s(n.title))]),e("span",[t._v(t._s(n.description))])]),e("a",{staticClass:"btn btn--small",attrs:{href:n.url}},[t._v(t._s(n.cta))])])])}))};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},T2Mc:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("Fj78"),s=e("HhzD"),i=!1;var o=function(t){i||e("FMf0")},r=e("VU/8")(a.a,s.a,!1,o,null,null);r.options.__file="layouts/simple.vue",n.default=r.exports},U52O:function(t,n,e){"use strict";var a=e("uw4c"),s=e("CvqX");n.a={name:"Header",components:{SetupName:a.a,SlideNav:s.a},data:function(){return{title:"Header"}}}},"V/np":function(t,n,e){var a=e("r4Jn");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("28991865",a,!1,{sourceMap:!1})},YO1l:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"svg[data-v-b6aed376]{display:inline-block;vertical-align:baseline;margin-bottom:-2px}",""])},"YXP+":function(t,n,e){"use strict";var a=e("U52O"),s=e("sEIx"),i=e("VU/8")(a.a,s.a,!1,null,null,null);i.options.__file="components/Header.vue",n.a=i.exports},ZhWS:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},eAXS:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component-Navigation"},[e("nav",[e("div",{staticClass:"alloy-btn-group"},["setup"!=this.$route.name?[e("nuxt-link",{staticClass:"btn btn--icon btn--icon-left",attrs:{to:"/setup"}},[e("icon-base",{attrs:{width:"20",height:"20","icon-name":"arrow-left"}},[e("icon-arrow-left")],1),e("span",[t._v("Back")])],1)]:t._e(),"setup"==this.$route.name?e("button",{staticClass:"btn btn--icon",on:{click:t.setupClear}},[e("span",[t._v("Clear")]),e("icon-base",{attrs:{width:"20",height:"20","icon-name":"trash"}},[e("icon-trash")],1)],1):t._e(),e("button",{staticClass:"btn btn--icon",on:{click:t.toggleAllInfo}},[e("span",[t._v("Info")]),e("icon-base",{attrs:{width:"20",height:"20","icon-name":"info"}},[e("icon-info")],1)],1),"setup"==this.$route.name?[e("button",{staticClass:"alloy-share btn btn--alt btn--icon"},[e("span",[t._v("Share")]),e("icon-base",{attrs:{width:"20",height:"20","icon-name":"share"}},[e("icon-share")],1)],1)]:t._e()],2)])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},evrV:function(t,n,e){"use strict";var a=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component-SetupName"},[n("h1",{staticClass:"centered"},[this._v(this._s(this.$store.state.name.nameCurrent))])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},fVo7:function(t,n,e){var a=e("YO1l");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("27075327",a,!1,{sourceMap:!1})},gBEB:function(t,n,e){"use strict";var a=e("fZjL"),s=e.n(a);n.a={name:"SetupName",data:function(){return{nameCurrentRandom:{prefix:"Your",location:"Amazing",suffix:"Setup"}}},methods:{nameRandomGenerator:function(){if(!this.$store.state.name.nameUserCustom){var t=s()(this.$store.state.name.nameRandom)[this.$store.state.name.nameRandomIndex];this.nameCurrentRandom[t]=this.$store.state.name.nameRandom[t][function(t){return Math.floor(Math.random()*t)}(this.$store.state.name.nameRandom[t].length)];var n="\n        "+this.nameCurrentRandom.prefix+" \n        "+this.nameCurrentRandom.location+" \n        "+this.nameCurrentRandom.suffix+"\n      ";this.$store.commit("name/nameSet",n)}}},watch:{$route:function(t,n){this.nameRandomGenerator()}},created:function(){this.nameRandomGenerator()}}},ggfH:function(t,n,e){"use strict";var a=function(){var t=this.$createElement,n=this._self._c||t;return n("g",[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},grw4:function(t,n,e){"use strict";var a=function(){var t=this.$createElement,n=this._self._c||t;return n("g",[n("path",{attrs:{d:"M14 7l-5 5 5 5V7z"}}),n("path",{attrs:{fill:"none",d:"M24 0v24H0V0h24z"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},lDaj:function(t,n,e){"use strict";var a=e("IJCV"),s=e("RulR"),i=e("VU/8")(a.a,s.a,!1,null,null,null);i.options.__file="components/CallToAction.vue",n.a=i.exports},nBUn:function(t,n,e){"use strict";var a=e("ggfH"),s=e("VU/8")(null,a.a,!1,null,null,null);s.options.__file="components/icons/IconShare.vue",n.a=s.exports},r4Jn:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,".component-Navigation[data-v-21fe78a2]{position:fixed;z-index:1000;bottom:0;left:0;width:100%;background-color:#240146;padding:10px}@media (min-width:992px){.component-Navigation[data-v-21fe78a2]{padding:15px}}.alloy-share[data-v-21fe78a2]{-ms-flex-item-align:end;align-self:flex-end;margin-right:0}.alloy-input-field[data-v-21fe78a2]{display:inline-block}.alloy-input-field input[data-v-21fe78a2]{margin-bottom:0}",""])},rKnj:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 24 24","aria-labelledby":t.iconName,role:"presentation"}},[e("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),e("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},sEIx:function(t,n,e){"use strict";var a=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component-Header"},[n("header",["index"==this.$route.name?n("h1",{staticClass:"centered"},[this._v(this._s(this.$store.state.setup.title))]):this._e(),"index"!=this.$route.name?n("SetupName"):this._e()],1),n("SlideNav")],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};n.a=s},uw4c:function(t,n,e){"use strict";var a=e("gBEB"),s=e("evrV"),i=e("VU/8")(a.a,s.a,!1,null,null,null);i.options.__file="components/setup/SetupName.vue",n.a=i.exports},zTCQ:function(t,n,e){"use strict";n.a={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}}}});