webpackJsonp([3],{"/rQw":function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}),e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},"/wPQ":function(t,e,n){"use strict";var a=n("zTCQ"),s=n("rKnj"),i=!1;var o=function(t){i||n("fVo7")},r=n("VU/8")(a.a,s.a,!1,o,"data-v-b6aed376",null);r.options.__file="components/IconBase.vue",e.a=r.exports},"1wxY":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},"2F+8":function(t,e,n){"use strict";var a=n("YXP+"),s=n("yqLL"),i=n("I8H5");e.a={components:{Header:a.a,Footer:s.a,Navigation:i.a}}},"47yv":function(t,e,n){"use strict";var a=n("GjVg"),s=n("VU/8")(null,a.a,!1,null,null,null);s.options.__file="components/icons/IconInfo.vue",e.a=s.exports},"6J+2":function(t,e,n){"use strict";var a=n("lDaj");e.a={name:"SlideNav",components:{CallToAction:a.a},data:function(){return{title:"SlideNav",show:!1}},methods:{navToggle:function(){this.show=!this.show}}}},"7V3H":function(t,e,n){"use strict";var a=n("/wPQ"),s=n("47yv"),i=n("HldI"),o=n("nBUn"),r=n("B52B");e.a={name:"Navigation",components:{IconBase:a.a,IconInfo:s.a,IconTrash:i.a,IconShare:o.a,IconArrowLeft:r.a},data:function(){return{title:"Navigation"}},methods:{toggleAllInfo:function(t){document.body.classList.toggle("showAllInfo")},setupClear:function(){confirm("Are you sure? This will remove all your hard work.")&&this.$store.commit("setup/setupClear")}}}},B52B:function(t,e,n){"use strict";var a=n("grw4"),s=n("VU/8")(null,a.a,!1,null,null,null);s.options.__file="components/icons/IconArrowLeft.vue",e.a=s.exports},CvqX:function(t,e,n){"use strict";var a=n("6J+2"),s=n("RX5y"),i=n("VU/8")(a.a,s.a,!1,null,null,null);i.options.__file="components/SlideNav.vue",e.a=i.exports},DLCH:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),e("nuxt"),"index"!=this.$route.name?e("Navigation"):this._e(),e("Footer")],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},GjVg:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},HldI:function(t,e,n){"use strict";var a=n("/rQw"),s=n("VU/8")(null,a.a,!1,null,null,null);s.options.__file="components/icons/IconTrash.vue",e.a=s.exports},I8H5:function(t,e,n){"use strict";var a=n("7V3H"),s=n("eAXS"),i=!1;var o=function(t){i||n("V/np")},r=n("VU/8")(a.a,s.a,!1,o,"data-v-21fe78a2",null);r.options.__file="components/Navigation.vue",e.a=r.exports},IJCV:function(t,e,n){"use strict";e.a={name:"CallToAction",data:function(){return{title:"CallToAction",callToActions:this.$store.state.default.callToActions}}}},Ma2J:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("2F+8"),s=n("DLCH"),i=!1;var o=function(t){i||n("S2gv")},r=n("VU/8")(a.a,s.a,!1,o,null,null);r.options.__file="layouts/default.vue",e.default=r.exports},RX5y:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-CallToAction",attrs:{"data-show-nav":t.show}},[n("div",{attrs:{id:"alloy-nav-toggle"},on:{click:t.navToggle}},[t._m(0)]),n("div",{staticClass:"alloy-slide-nav"},[n("div",{staticClass:"inner"},[n("nav",[n("nuxt-link",{attrs:{to:"/setup"}},[t._v("Your Setup")]),n("nuxt-link",{attrs:{to:"/setup/decks"}},[t._v("All Decks")]),n("nuxt-link",{attrs:{to:"/setup/trucks"}},[t._v("All Trucks")]),n("nuxt-link",{attrs:{to:"/setup/wheels"}},[t._v("All Wheels")]),n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),n("CallToAction")],1)])])};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inner"},[e("span"),e("span"),e("span"),e("span")])}]};e.a=s},RulR:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-CallToAction"},t._l(t.callToActions,function(e,a){return n("div",{key:a,staticClass:"alloy-cards cta",attrs:{"data-cta-type":e.type}},[n("div",{staticClass:"inner"},[n("p",[n("strong",[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.description))])]),n("a",{staticClass:"btn btn--small",attrs:{href:e.url}},[t._v(t._s(e.cta))])])])}))};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},S2gv:function(t,e,n){var a=n("1wxY");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("8ca17794",a,!1,{sourceMap:!1})},U52O:function(t,e,n){"use strict";var a=n("uw4c"),s=n("CvqX");e.a={name:"Header",components:{SetupName:a.a,SlideNav:s.a},data:function(){return{title:"Header"}}}},"V/np":function(t,e,n){var a=n("r4Jn");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("28991865",a,!1,{sourceMap:!1})},YO1l:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"svg[data-v-b6aed376]{display:inline-block;vertical-align:baseline;margin-bottom:-2px}",""])},"YXP+":function(t,e,n){"use strict";var a=n("U52O"),s=n("sEIx"),i=n("VU/8")(a.a,s.a,!1,null,null,null);i.options.__file="components/Header.vue",e.a=i.exports},eAXS:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-Navigation"},[n("nav",[n("div",{staticClass:"alloy-btn-group"},["setup"!=this.$route.name?[n("nuxt-link",{staticClass:"btn btn--icon btn--icon-left",attrs:{to:"/setup"}},[n("icon-base",{attrs:{width:"20",height:"20","icon-name":"arrow-left"}},[n("icon-arrow-left")],1),n("span",[t._v("Back")])],1)]:t._e(),"setup"==this.$route.name?n("button",{staticClass:"btn",on:{click:t.setupClear}},[n("span",[t._v("Clear")]),n("icon-base",{attrs:{width:"20",height:"20","icon-name":"trash"}},[n("icon-trash")],1)],1):t._e(),n("button",{staticClass:"btn",on:{click:t.toggleAllInfo}},[n("span",[t._v("Info")]),n("icon-base",{attrs:{width:"20",height:"20","icon-name":"info"}},[n("icon-info")],1)],1),"setup"!=this.$route.name?n("div",{staticClass:"alloy-input-field"},[n("label",{attrs:{for:"search"}},[t._v("Seach")]),n("input",{attrs:{type:"text",id:"search",placeholder:"Search "+this.$route.params.type+"..."}})]):t._e(),"setup"==this.$route.name?[n("button",{staticClass:"alloy-share btn btn--alt"},[n("span",[t._v("Share")]),n("icon-base",{attrs:{width:"20",height:"20","icon-name":"share"}},[n("icon-share")],1)],1)]:t._e()],2)])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},evrV:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component-SetupName"},[e("h1",{staticClass:"centered"},[this._v(this._s(this.$store.state.name.nameCurrent))])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},fVo7:function(t,e,n){var a=n("YO1l");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("27075327",a,!1,{sourceMap:!1})},gBEB:function(t,e,n){"use strict";var a=n("fZjL"),s=n.n(a);e.a={name:"SetupName",data:function(){return{nameCurrentRandom:{prefix:"Your",location:"Amazing",suffix:"Setup"}}},methods:{nameRandomGenerator:function(){if(!this.$store.state.name.nameUserCustom){var t=s()(this.$store.state.name.nameRandom)[this.$store.state.name.nameRandomIndex];this.nameCurrentRandom[t]=this.$store.state.name.nameRandom[t][function(t){return Math.floor(Math.random()*t)}(this.$store.state.name.nameRandom[t].length)];var e="\n        "+this.nameCurrentRandom.prefix+" \n        "+this.nameCurrentRandom.location+" \n        "+this.nameCurrentRandom.suffix+"\n      ";this.$store.commit("name/nameSet",e)}}},watch:{$route:function(t,e){this.nameRandomGenerator()}},created:function(){this.nameRandomGenerator()}}},ggfH:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},grw4:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M14 7l-5 5 5 5V7z"}}),e("path",{attrs:{fill:"none",d:"M24 0v24H0V0h24z"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},lDaj:function(t,e,n){"use strict";var a=n("IJCV"),s=n("RulR"),i=n("VU/8")(a.a,s.a,!1,null,null,null);i.options.__file="components/CallToAction.vue",e.a=i.exports},nBUn:function(t,e,n){"use strict";var a=n("ggfH"),s=n("VU/8")(null,a.a,!1,null,null,null);s.options.__file="components/icons/IconShare.vue",e.a=s.exports},oc9k:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"inner"},[n("div",{staticClass:"alloy-col"},[n("CallToAction")],1),n("div",{staticClass:"alloy-col"},[n("h3",[t._v("Road map")]),n("p",[t._v("Projects are never done, as specially not personal side projects ")]),n("ul",t._l(t.todos,function(e,a){return n("li",{key:a},[t._v(t._s(e.name))])})),n("h4",[t._v("What to help?")]),n("p",[t._v("Are you a Vue.js/Nuxt or Javascript developer? ")]),n("a",{staticClass:"btn btn--small",attrs:{href:"#"}},[t._v("Shoot me a message")])]),n("div",{staticClass:"alloy-col"},[n("h3",[t._v("About")]),n("div",{domProps:{innerHTML:t._s(this.$store.state.default.about_text)}}),n("h4",[t._v("Mitchel van Eijgen")]),t._m(0)]),n("div",{staticClass:"alloy-col"},[n("h3",[t._v("Special thanks!")]),n("ul",t._l(t.specialThanks,function(e,a){return n("li",{key:a},[t._v(t._s(e.name)+"\n          "),n("small",[t._v("("+t._s(e.realname)+")")])])}))])])])};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Graphic designer who loves technology.\n        "),e("a",{attrs:{href:"https://mvaneijgen.nl"}},[this._v("mvaneijgen.nl")])])}]};e.a=s},r4Jn:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".component-Navigation[data-v-21fe78a2]{position:fixed;z-index:1000;bottom:0;left:0;width:100%;background-color:#240146;padding:15px}.alloy-share[data-v-21fe78a2]{float:right;margin-right:0}.alloy-input-field[data-v-21fe78a2]{display:inline-block}.alloy-input-field input[data-v-21fe78a2]{margin-bottom:0}@media only screen and (max-width:400px){.btn[data-v-21fe78a2],input[data-v-21fe78a2]{font-size:.8rem;line-height:1em;padding:5px 10px}label[data-v-21fe78a2]{font-size:.4rem;padding:3px 5px;top:-5px}}",""])},rKnj:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 24 24","aria-labelledby":t.iconName,role:"presentation"}},[n("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),n("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},sEIx:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component-Header"},[e("header",["index"==this.$route.name?e("h1",{staticClass:"centered"},[this._v(this._s(this.$store.state.setup.title))]):this._e(),"index"!=this.$route.name?e("SetupName"):this._e()],1),e("SlideNav")],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},sFHl:function(t,e,n){"use strict";var a=n("lDaj");e.a={name:"Footer",components:{CallToAction:a.a},data:function(){return{title:"Footer",todos:this.$store.state.default.todos,specialThanks:this.$store.state.default.specialThanks}}}},uw4c:function(t,e,n){"use strict";var a=n("gBEB"),s=n("evrV"),i=n("VU/8")(a.a,s.a,!1,null,null,null);i.options.__file="components/setup/SetupName.vue",e.a=i.exports},yqLL:function(t,e,n){"use strict";var a=n("sFHl"),s=n("oc9k"),i=n("VU/8")(a.a,s.a,!1,null,null,null);i.options.__file="components/Footer.vue",e.a=i.exports},zTCQ:function(t,e,n){"use strict";e.a={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}}}});