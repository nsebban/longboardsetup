webpackJsonp([4],{"/rQw":function(t,e,i){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}),e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},"/wPQ":function(t,e,i){"use strict";var o=i("zTCQ"),s=i("rKnj"),a=!1;var n=function(t){a||i("fVo7")},r=i("VU/8")(o.a,s.a,!1,n,"data-v-b6aed376",null);r.options.__file="components/IconBase.vue",e.a=r.exports},"47yv":function(t,e,i){"use strict";var o=i("GjVg"),s=i("VU/8")(null,o.a,!1,null,null,null);s.options.__file="components/icons/IconInfo.vue",e.a=s.exports},"8Jf3":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alloy-items alloy-cards",attrs:{"data-type":t.item.type,"data-view":t.item.view,"data-item-id":t.item.id,"data-info":t.showInfo}},[i("div",{staticClass:"inner",on:{click:t.itemEdit}},["simple"!=t.item.view?i("img",{attrs:{src:t.item.image,alt:t.item.title}}):i("img",{attrs:{src:"http://alloy.work/codepen/QBOyJj/custom.jpg",alt:t.item.title}}),i("div",{staticClass:"alloy-content"},[i("div",{staticClass:"alloy-meta"},[i("p",[i("strong",[t._v(t._s(t.item.custom))])])]),i("h3",{staticClass:"item-title",domProps:{innerHTML:t._s(t.item.title)}}),i("a",{attrs:{href:"http://www.google.com/search?q="+t.item.title.replace(/ /g,"+")}},[t._v("Search online")]),i("a",{staticClass:"report",attrs:{href:"//api.longboardsetup.com/"+t.item.type+"/"+t.item.slug,target:"_blank"}},[t._v("Fix item?")])])])])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},"9y/9":function(t,e,i){"use strict";var o=i("Dd8w"),s=i.n(o),a=i("NYxO"),n=i("mLW4"),r=(i.n(n),i("/wPQ")),c=i("HldI");e.a={name:"CustomForm",components:{IconBase:r.a,IconTrash:c.a},data:function(){return{types:this.$store.state.items.types,hasQueries:!1,locationOn:!1,item:{}}},computed:s()({},Object(a.mapGetters)({getSetupCurrent:"setup/getSetupCurrent",getCurrentItem:"setup/getCurrentItem"})),methods:{routeToSetup:function(){this.$router.push({path:"/setup"})},handleSubmit:function(){var t=this.getSetupCurrent.length;this.item.view="simple",this.item.id||(this.item.id=""+this.item.custom+t),this.item.type||(this.item.type="custom"+t),this.item.slug=this.item.custom+"~"+this.item.title,this.item.location&&this.locationOn&&(this.item.slug+="~"+this.item.location),this.$store.commit("setup/setupAdd",this.item),this.$store.commit("setup/itemCurrentClear"),this.routeToSetup()},deleteMe:function(){this.$store.commit("setup/setupRemove",this.item),this.routeToSetup();var t={title:this.item.title+" removed from your setup",content:"We'll shall miss it.",image:"",type:"warning",timer:6e3};this.$store.commit("notifications/addNotification",t)},setItemFromStore:function(){this.getCurrentItem.location&&"undefined"!==this.getCurrentItem.location&&(this.locationOn=!0),this.item=s()({},this.getCurrentItem)},imageLink:function(t){return i("sJzT")("./"+t+".svg")}},created:function(){this.setItemFromStore()}}},CTZY:function(t,e,i){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component-NoMoreResults"},[e("div",{staticClass:"inner"},[this._m(0),e("p",[this._v("Do a refined search query to narrow down the item you are looking for. Or help yourself and others by submitting a product!")]),e("nuxt-link",{staticClass:"btn btn--alt",attrs:{to:"/submit"}},[this._v("Upload your own")])],1)])};o._withStripped=!0;var s={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("\n      You've managed to reach the end of the results.\n      "),e("span",[this._v("Too bad it's not the end of the 🌈 rainbow!")])])}]};e.a=s},FCMj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("pXUU"),s=i("p9O/"),a=i("VU/8")(o.a,s.a,!1,null,null,null);a.options.__file="pages/setup/_type/index.vue",e.default=a.exports},FhOP:function(t,e,i){"use strict";var o=i("9y/9"),s=i("hdX2"),a=!1;var n=function(t){a||i("ZUYT")},r=i("VU/8")(o.a,s.a,!1,n,"data-v-a1fa76fc",null);r.options.__file="components/setup/CustomForm.vue",e.a=r.exports},GAzy:function(t,e,i){t.exports=i.p+"img/bushings.a0275bb.svg"},GjVg:function(t,e,i){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}})])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},HA13:function(t,e,i){var o=i("sCBQ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("38f5f852",o,!1,{sourceMap:!1})},HldI:function(t,e,i){"use strict";var o=i("/rQw"),s=i("VU/8")(null,o.a,!1,null,null,null);s.options.__file="components/icons/IconTrash.vue",e.a=s.exports},L1n8:function(t,e,i){"use strict";e.a={name:"NoMoreResults",data:function(){return{title:"NoMoreResults"}}}},Or8g:function(t,e,i){t.exports=i.p+"img/brackets.7e216fa.svg"},P9io:function(t,e,i){"use strict";var o=i("L1n8"),s=i("CTZY"),a=!1;var n=function(t){a||i("HA13")},r=i("VU/8")(o.a,s.a,!1,n,"data-v-7d9673c7",null);r.options.__file="components/default/NoMoreResults.vue",e.a=r.exports},PpES:function(t,e,i){t.exports=i.p+"img/custom.1ab962d.svg"},YO1l:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"svg[data-v-b6aed376]{display:inline-block;vertical-align:baseline;margin-bottom:-2px}",""])},ZUYT:function(t,e,i){var o=i("i8YZ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("395e0aac",o,!1,{sourceMap:!1})},d49A:function(t,e,i){"use strict";var o=i("/wPQ"),s=i("47yv");e.a={props:["item"],name:"Item",components:{IconBase:o.a,IconInfo:s.a},data:function(){return{showInfo:!1}},methods:{toggleInfo:function(t){this.showInfo=!this.showInfo},triggerNameSetupNotification:function(){this.$store.commit("notifications/addNotification",{title:"Nice your setup is coming along nicely",content:"Why don't you give it a name! Just lick on the title on top of the screen",image:"",type:"warning",timer:6e3})},itemEdit:function(t){this.$store.commit("setup/setupAdd",this.item),this.$store.commit("setup/setSetupNotEdited",!0),3===this.$store.getters["setup/getRealSetupLength"]&&this.triggerNameSetupNotification(),this.$router.push({path:"/setup"})}}}},dWSx:function(t,e,i){t.exports=i.p+"img/trucks.899ce83.svg"},dYfJ:function(t,e,i){t.exports=i.p+"img/wheels.6ac4f97.svg"},fVo7:function(t,e,i){var o=i("YO1l");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("27075327",o,!1,{sourceMap:!1})},hdX2:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"component-Custom"},[i("div",{staticClass:"alloy-items alloy-cards alloy-card--preview",attrs:{"data-view":"simple"}},[i("div",{staticClass:"inner"},[i("div",{staticClass:"preview"},[t._v("Preview")]),t.item.custom?i("img",{attrs:{src:t.imageLink(t.item.custom)}}):i("img",{attrs:{src:t.imageLink("custom")}}),i("div",{staticClass:"alloy-content"},[i("div",{staticClass:"alloy-meta"},[i("p",[t.item.custom?i("strong",[t._v(t._s(t.item.custom))]):i("strong",[t._v("Item type")]),t.item.location&&t.locationOn?i("span",[t._v("| "+t._s(t.item.location))]):t._e()])]),t.item.title?i("h3",[t._v(t._s(t.item.title))]):i("h3",[t._v("Input a name")])])])]),i("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[i("div",{staticClass:"alloy-input-field"},[i("label",{attrs:{for:"selectType"}},[t._v("Select part")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.item.custom,expression:"item.custom"}],attrs:{id:"selectType",required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"custom",e.target.multiple?i:i[0])}}},[i("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._l(this.types,function(e,o){return i("option",{key:o,domProps:{value:e.toLowerCase()}},[t._v(t._s(e))])}),i("option",{attrs:{value:"custom"}},[t._v("Everything else")])],2)]),i("div",{staticClass:"alloy-input-field"},[i("label",{attrs:{for:"selectedProductName"}},[t._v("Product name")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],attrs:{id:"selectedProductName",cols:"30",rows:"4",required:""},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})]),i("div",{staticClass:"alloy-checkbox-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.locationOn,expression:"locationOn"}],attrs:{id:"selectedLocation",type:"checkbox"},domProps:{checked:Array.isArray(t.locationOn)?t._i(t.locationOn,null)>-1:t.locationOn},on:{change:function(e){var i=t.locationOn,o=e.target,s=!!o.checked;if(Array.isArray(i)){var a=t._i(i,null);o.checked?a<0&&(t.locationOn=i.concat([null])):a>-1&&(t.locationOn=i.slice(0,a).concat(i.slice(a+1)))}else t.locationOn=s}}}),i("label",{attrs:{for:"selectedLocation"}},[t._v("Define a custom position (e.g. back, top, bottom, ect.)")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.locationOn,expression:"locationOn"}],staticClass:"alloy-input-field"},[i("label",{attrs:{for:"selectedLocation"}},[t._v("Location")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.location,expression:"item.location"}],attrs:{id:"selectedLocation",type:"text"},domProps:{value:t.item.location},on:{input:function(e){e.target.composing||t.$set(t.item,"location",e.target.value)}}})]),i("div",{staticClass:"alloy-btn-group"},[t.item.id?i("button",{staticClass:"btn btn--icon",on:{click:function(e){return e.preventDefault(),t.deleteMe(e)}}},[i("span",[t._v("Delete this item")]),i("icon-base",{attrs:{width:"20",height:"20","icon-name":"trash"}},[i("icon-trash")],1)],1):t._e(),t.item.id?i("input",{attrs:{type:"submit",value:"Change",disabled:""==t.item.custom||""==t.item.title}}):i("input",{attrs:{type:"submit",value:"Add",disabled:!t.item.custom||!t.item.title}})])])])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},i8YZ:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".alloy-btn-group[data-v-a1fa76fc]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.alloy-btn-group input[type=submit][data-v-a1fa76fc]{margin-left:auto}.alloy-checkbox-field[data-v-a1fa76fc]{color:#fff;margin-bottom:30px}.alloy-checkbox-field [type=checkbox][data-v-a1fa76fc]{margin-right:15px}.alloy-checkbox-field small[data-v-a1fa76fc]{display:block}.alloy-card--preview[data-v-a1fa76fc]{margin-bottom:30px;height:120px}.alloy-card--preview .alloy-meta span[data-v-a1fa76fc]{margin-left:5px}.preview[data-v-a1fa76fc]{position:absolute;top:0;right:0;text-transform:uppercase;color:#ccc;padding:5px;font-size:12px;line-height:1em}",""])},mLW4:function(t,e){t.exports={slugify:function(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},isMobile:function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}}},nTDA:function(t,e,i){t.exports=i.p+"img/bearings.50a6195.svg"},"p9O/":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"alloy-page alloy-page--type"},["/setup/custom"==this.$route.path?i("CustomForm"):t._e(),i("div",{staticClass:"alloy-select-flexbox"},[i("div",{staticClass:"inner"},[i("transition-group",{staticClass:"transition-card",attrs:{name:"slide-in",tag:"div"}},t._l(t.allItems,function(t){return i("Item",{key:t.id,attrs:{item:t}})}),1)],1)]),i("transition",{attrs:{name:"slide-in"}},[t.moreResults?t._e():i("NoMoreResults")],1),t.loading&&t.moreResults?i("h1",{staticStyle:{color:"#fff"}},[t._v("Loading "+t._s(t.type)+"...")]):t._e(),t.moreResults?i("button",{staticClass:"centered",attrs:{disabled:t.loading},on:{click:t.itemsLoad}},[t._v("Load more")]):t._e()],1)])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},pXUU:function(t,e,i){"use strict";var o=i("FhOP"),s=i("s/qI"),a=i("P9io"),n=i("s4hn"),r=(i.n(n),["orderby=date","order=desc","per_page=20","_embed"]);e.a={name:"type",components:{CustomForm:o.a,Item:s.a,NoMoreResults:a.a},data:function(){return{type:this.$route.params.type,page:this.$store.state.items[this.$route.params.type].page,loading:!1,moreResults:!0,notificationMissing:!1}},computed:{allItems:function(){return this.$store.getters["items/getItems"](this.$route.params.type)}},methods:{itemsLoad:function(){var t=this;this.moreResults&&(this.loading=!0,this.$axios.get("wp/v2/"+this.type+"?"+r.join("&")+"&page="+this.$store.getters["items/getTypePage"](this.$route.params.type)+"&_embed").then(function(e){var i=e.headers["x-wp-totalpages"];t.$store.getters["items/getTypePage"](t.$route.params.type)>=i&&(t.moreResults=!1),t.$store.commit({type:"items/addItems",itemType:t.type,items:e.data.map(n.fromInputData)}),t.$store.commit({type:"items/incrementPage",itemType:t.type}),t.loading=!1}))},itemsinfIniteScroll:function(){var t=this;window.addEventListener("scroll",function(){var e=document.documentElement.offsetHeight,i=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight>=e;!t.loading&&i&&(t.loading=!0,t.itemsLoad())})}},mounted:function(){this.itemsinfIniteScroll()},created:function(){this.$store.state.items[this.$route.params.type].items.length||this.itemsLoad()},destroyed:function(){}}},rKnj:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 24 24","aria-labelledby":t.iconName,role:"presentation"}},[i("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),i("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},"s/qI":function(t,e,i){"use strict";var o=i("d49A"),s=i("8Jf3"),a=i("VU/8")(o.a,s.a,!1,null,null,null);a.options.__file="components/setup/Item.vue",e.a=a.exports},s4hn:function(t,e){t.exports={fromInputData:function(t){var e="/image-not-found.jpg",i={};return void 0!==t._embedded&&(e=t._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url,i=t._embedded["wp:featuredmedia"][0].media_details.sizes),{id:t.id,title:t.title.rendered,slug:t.slug,type:t.type,view:"advanced",image:e,images:i}}}},sCBQ:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".component-NoMoreResults[data-v-7d9673c7]{width:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin-top:15px}.component-NoMoreResults>.inner[data-v-7d9673c7]{padding:15px;border-radius:5px;margin:0 auto;max-width:600px;width:100%;background-color:#4f039b;display:block;color:#fff}@media (min-width:768px){.component-NoMoreResults>.inner[data-v-7d9673c7]{padding:30px}}.component-NoMoreResults>.inner .btn[data-v-7d9673c7]{float:right}",""])},sJzT:function(t,e,i){var o={"./bearings.svg":"nTDA","./brackets.svg":"Or8g","./bushings.svg":"GAzy","./custom.svg":"PpES","./decks.svg":"u2c6","./trucks-alt.svg":"ySc3","./trucks.svg":"dWSx","./wheels.svg":"dYfJ"};function s(t){return i(a(t))}function a(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id="sJzT"},u2c6:function(t,e,i){t.exports=i.p+"img/decks.875e3c4.svg"},ySc3:function(t,e,i){t.exports=i.p+"img/trucks-alt.26dc91b.svg"},zTCQ:function(t,e,i){"use strict";e.a={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}}}});