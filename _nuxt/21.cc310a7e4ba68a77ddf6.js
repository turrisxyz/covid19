(window.webpackJsonp=window.webpackJsonp||[]).push([[21,22,23,70,129],{455:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},460:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(328),n(107);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},492:function(t,e,n){"use strict";var o=n(1);n(4),n(212),n(11),n(213);function r(t,e,n){var o,r=null==(o=t._observe)?void 0:o[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var l={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var l=e.modifiers||{},c=e.value,d="object"===Object(o.a)(c)?c:{handler:c,options:{}},m=d.handler,f=d.options,v=new IntersectionObserver((function(){var o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0,f=null==(o=t._observe)?void 0:o[n.context._uid];if(f){var v=c.some((function(t){return t.isIntersecting}));!m||l.quiet&&!f.init||l.once&&!v&&!f.init||m(c,d,v),v&&l.once?r(t,e,n):f.init=!0}}),f);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:v},v.observe(t)}},unbind:r};e.a=l},505:function(t,e,n){"use strict";n(107);var o=n(30),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),l=Object(o.f)(this.maxHeight),c=Object(o.f)(this.maxWidth),d=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},506:function(t,e,n){"use strict";n(33),n(40),n(41),n(42),n(53),n(57);var o=n(15),r=(n(4),n(107),n(37),n(28),n(90),n(312),n(54),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(55),n(63),n(18),n(11),n(19),n(20),n(212),n(213),n(82),n(327),n(0)),l=n(215),c=n(30);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),C=f.reduce((function(t,e){return t["order"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(C)};function j(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var x=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:m(m(m(m({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},C),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var m=x.get(c);return m||function(){var t,e;for(e in m=[],y)y[e].forEach((function(t){var o=n[t],r=j(e,t,o);r&&m.push(r)}));var r=m.some((function(t){return t.startsWith("col-")}));m.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(c,m)}(),t(n.tag,Object(l.a)(data,{class:m}),r)}})},572:function(t,e,n){var content=n(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("45d64bcf",content,!0,{sourceMap:!1})},573:function(t,e,n){var content=n(602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("d93b19ee",content,!0,{sourceMap:!1})},578:function(t){t.exports=JSON.parse('{"date":"2022/3/17 20:00","data":{"専門家3行コメント":[{"@ja":"新規陽性者数は緩やかな減少傾向にあるものの、年度末前後のイベントによる人の移動、接触機会の増加やオミクロン株BA.2系統の影響を受ければ、感染が再拡大する恐れがある。10歳未満の新規陽性者数が高い値で推移しており、警戒が必要である。","@en":"While the number of new positive cases is showing a gradual decline, a resurgence of cases might occur should there be effects from the increased movement of people and opportunities for contact due to events held around the end of the fiscal/academic year, as well as the Omicron BA.2 sub-variant. The number of new positive cases among children under the age of 10 remains high, requiring vigilance. "},{"@ja":"東京ルールの適用件数は、減少傾向にあるものの、未だ高い値で推移している。入院患者数及び重症患者数に占める高齢者の割合が、高い値で推移しており、高齢者への対応等で医療従事者への負担が長期化している。","@en":"The number of cases that do not fulfill the Tokyo Rule for Emergency Medical Care is declining, but remains high. Senior citizens still make up a high percentage of the patients admitted to hospitals and those with severe symptoms, and the care needed for these elderly patients is contributing to the prolonged burden on health care workers."}],"(1)新規陽性者数":8159,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":83.9,"(3)新規陽性者における接触歴等不明者（人数）":4880.6,"(3)新規陽性者における接触歴等不明者（増加比）":85.5,"(4)PCR・抗原検査（陽性率）":31.2,"(4)PCR・抗原検査（検査人数）":14756.9,"(5)救急医療の東京ルールの適用件数":152.6,"(6)入院患者数":2736,"(6)入院患者確保病床数":6946,"(7)重症患者数":53,"(7)重症患者確保病床数":471,"総括コメント-感染状況":{"date":"2022-03-16","level":4,"display":{"@ja":"感染の再拡大の危険性が高いと思われる","@en":"There is a high risk of a resurgence of the virus."}},"総括コメント-医療提供体制":{"date":"2022-03-16","level":4,"display":{"@ja":"通常の医療が大きく制限されている","@en":"The provision of non-COVID health care is under pressure."}}}}')},579:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(460),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),d=Object(o.a)(1);return{"(1)新規陽性者数":{value:d(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:d(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:d(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:d(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:d(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:d(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:d(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},585:function(t,e,n){var content=n(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("76b3c5a9",content,!0,{sourceMap:!1})},599:function(t,e,n){"use strict";n(572)},600:function(t,e,n){var o=n(46)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-592c53a8]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-592c53a8]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-592c53a8]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},601:function(t,e,n){"use strict";n(573)},602:function(t,e,n){var o=n(46)(!1);o.push([t.i,".RandomImageContainer[data-v-cc1b0b78]{display:flex;justify-content:center}",""]),t.exports=o},641:function(t,e,n){"use strict";n.r(e);n(107);var o=n(0).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(n(599),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[n("p",[t._v(t._s(t.comment))])]),t._v(" "),n("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"592c53a8",null);e.default=component.exports},642:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({computed:{currentImage:function(){var t=this.monitoringCommentImage.data.images.length,e=Math.floor(Math.random()*t);return this.monitoringCommentImage.data.images[e]},monitoringCommentImage:function(){return this.$store.state.monitoringCommentImage}}}),r=(n(601),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RandomImageContainer"},[n("a",{attrs:{target:"_blank",href:t.currentImage.href}},[n("img",{attrs:{width:"320",height:"240",src:t.currentImage.src,alt:t.currentImage.alt}})])])}),[],!1,null,"cc1b0b78",null);e.default=component.exports},676:function(t,e,n){"use strict";n(585)},677:function(t,e,n){var o=n(46)(!1);o.push([t.i,".MonitoringComment-date[data-v-44ff3322]{text-align:right;font-size:1.4rem}.MonitoringComment-summary-item[data-v-44ff3322]{margin-bottom:8px;font-size:1.4rem}.MonitoringCommentFrame[data-v-44ff3322]{margin:20px 0}.MonitoringCommentFrame-title[data-v-44ff3322]{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringCommentImage[data-v-44ff3322]{margin-top:50px}.MonitoringCommentLink[data-v-44ff3322]{display:flex;justify-content:center;align-items:center;margin-top:12px;font-size:1.4rem}",""]),t.exports=o},720:function(t,e,n){"use strict";n.r(e);n(63),n(31),n(34),n(35);var o=n(61),r=n(0),l=n(109),c=n(461),d=n(641),m=n(578),f=n(579),v=n(642),h=r.default.extend({components:{AppLink:l.default,DataView:c.default,Frame:d.default,RandomImage:v.default},data:function(){return{monitoringComment:Object(f.a)(m.data),date:m.date,mdiChevronRight:o.e}},computed:{translatedMonitoringSummarizedComments:function(){var t=m.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]},formattedDate:function(t){return this.$d(new Date(t),"date")}}}),C=(n(676),n(16)),y=n(75),j=n.n(y),x=n(506),_=n(443),component=Object(C.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringCommentCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("感染状況・医療提供体制の分析"),"title-id":"monitoring-comment",date:t.date,"is-set-title-row":""},scopedSlots:t._u([{key:"infoPanel",fn:function(){return[n("div",{staticClass:"MonitoringComment-date"},[t._v("\n          "+t._s(t.$t("{date}時点",{date:t.formattedDate(t.monitoringComment["総括コメント-感染状況"].date)}))+"\n        ")])]},proxy:!0}])},[t._v(" "),n("div",[n("ul",t._l(t.translatedMonitoringSummarizedComments,(function(e,i){return n("li",{key:i,staticClass:"MonitoringComment-summary-item"},[t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1),t._v(" "),n("div",{staticClass:"MonitoringCommentImage"},[n("random-image"),t._v(" "),n("div",{staticClass:"MonitoringCommentLink"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/monitoring.html"}},[t._v("\n              "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n            ")])],1)],1)])])],1)],1)}),[],!1,null,"44ff3322",null);e.default=component.exports;j()(component,{VCol:x.a,VIcon:_.a})}}]);