(window.webpackJsonp=window.webpackJsonp||[]).push([[89,90],{441:function(t,e,n){"use strict";n(18),n(24),n(32),n(34);var r=n(3),o=(n(87),n(22),n(37),n(71),n(278),n(20),n(39),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(40),n(45),n(10),n(72),n(292),n(0)),c=n(102),l=n(11);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=["sm","md","lg","xl"],v=x.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=x.reduce((function(t,e){return t["offset"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),m=x.reduce((function(t,e){return t["order"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(m)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var S=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var r=n[t],o=O(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},518:function(t,e,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("5a537a67",content,!0,{sourceMap:!1})},574:function(t,e,n){"use strict";n(518)},575:function(t,e,n){var r=n(28)(!1);r.push([t.i,".StaticInfo{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;font-size:1.2rem}.StaticInfo-Text{white-space:pre-wrap;font-size:1.2rem;font-weight:600;flex:1 0 50%;padding-right:16px}.StaticInfo-Button{flex:1 0 auto;text-align:right;display:inline-block}.StaticInfo-Button>a{text-decoration:none;color:#008830!important;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#008830;color:#fff}.StaticInfo-Button>a:hover,.StaticInfo-Button>a:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=r},576:function(t,e,n){var content=n(643);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("432d621b",content,!0,{sourceMap:!1})},622:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(91),c=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),l=(n(574),n(13)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StaticInfo"},[n("h3",{staticClass:"StaticInfo-Text"},[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("app-link",{staticClass:"StaticInfo-Link",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},642:function(t,e,n){"use strict";n(576)},643:function(t,e,n){var r=n(28)(!1);r.push([t.i,".ConsultationWrap[data-v-9bc239a0]{display:flex;align-items:center;height:100%}.Consultation[data-v-9bc239a0]{height:100%;padding:3px 18px;min-height:5.5em}",""]),t.exports=r},775:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(622),c=r.default.extend({components:{StaticInfo:o.default}}),l=(n(642),n(13)),f=n(60),d=n.n(f),x=n(441),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"ConsultationWrap"},[n("static-info",{staticClass:"Consultation",attrs:{url:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/index.html",text:t.$t("ワクチン情報・変異株情報・検査情報等の新型コロナ関連情報はこちら"),"btn-text":t.$t("新型コロナ保健医療情報ポータル")}})],1)])}),[],!1,null,"9bc239a0",null);e.default=component.exports;d()(component,{VCol:x.a})}}]);