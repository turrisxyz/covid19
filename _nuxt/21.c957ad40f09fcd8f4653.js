(window.webpackJsonp=window.webpackJsonp||[]).push([[21,81,86],{422:function(e,t,l){"use strict";l.d(t,"b",(function(){return n})),l.d(t,"c",(function(){return r})),l.d(t,"a",(function(){return o}));l(293),l(87);function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e<0?function(e){return null==e?void 0:e.toFixed(0)}:e>20?function(e){return null==e?void 0:e.toFixed(20)}:function(t){return null==t?void 0:t.toFixed(e)}}function r(){return function(e){return null==e?void 0:e.toLocaleString()}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return Number(n(e)(t)).toLocaleString("en",{minimumFractionDigits:e})}}},432:function(e,t,l){var content=l(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(29).default)("7cf19f2f",content,!0,{sourceMap:!1})},434:function(e,t,l){var content=l(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(29).default)("905bdcd6",content,!0,{sourceMap:!1})},435:function(e,t,l){"use strict";l.r(t);var n=l(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),r=(l(446),l(13)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"DataView-DataSet"},[e.title?l("h4",{staticClass:"DataView-DataSet-title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),l("div",{staticClass:"DataView-DataSet-info"},[e.lText?[l("p",{staticClass:"DataView-DataSet-summary"},[e._v("\n        "+e._s(e.lText)+"\n        "),l("span",{staticClass:"DataView-DataSet-summary-unit"},[e._v(e._s(e.unit))])])]:e._e(),e._v(" "),l("span",{staticClass:"DataView-DataSet-date"},[e._v(e._s(e.sText))]),e._v(" "),e.sTextUnder?[l("br"),e._v(" "),l("span",{staticClass:"DataView-DataSet-date"},[e._v(e._s(e.sTextUnder))])]:e._e()],2)])}),[],!1,null,null,null);t.default=component.exports},438:function(e,t,l){"use strict";l.r(t);var n=l(0),r=l(91),o=n.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""}}}),c=(l(449),l(13)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("app-link",{attrs:{to:e.url}},[e._v("\n  "+e._s(e.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);t.default=component.exports},446:function(e,t,l){"use strict";l(432)},447:function(e,t,l){var n=l(28)(!1);n.push([e.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:12px;color:#4d4d4d}@media screen and (min-width:1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-weight:400;flex:1 1 50%;font-size:1.8rem}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-style:normal;line-height:30px;margin-bottom:0!important;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}",""]),e.exports=n},449:function(e,t,l){"use strict";l(434)},450:function(e,t,l){var n=l(28)(!1);n.push([e.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),e.exports=n},634:function(e,t,l){"use strict";l.r(t);l(41),l(10);var n=l(0),r=l(443),o=l(435),c=l(438),d=n.default.extend({components:{DataView:r.default,DataViewDataSetPanel:o.default,OpenDataLink:c.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){var e=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(e,0).forEach((function(table){table.setAttribute("tabindex","0")}))}}),f=l(13),y=l(60),m=l.n(y),x=l(952),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("data-view",{attrs:{title:e.title,"title-id":e.titleId,date:e.date},scopedSlots:e._u([{key:"additionalDescription",fn:function(){return[e._t("additionalDescription")]},proxy:!0},{key:"infoPanel",fn:function(){return[l("data-view-data-set-panel",{attrs:{"l-text":e.info.lText,"s-text":e.info.sText,unit:e.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[l("open-data-link",{directives:[{name:"show",rawName:"v-show",value:e.url,expression:"url"}],attrs:{url:e.url}})]},proxy:!0}],null,!0)},[l("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:e.chartData.headers,items:e.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"disable-sort":!0}})],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VDataTable:x.a})},672:function(e){e.exports=JSON.parse('{"date":"2021/8/30 19:00","datasets":{"date":"2021/8/29","data":[{"code":131016,"area":"特別区","label":"千代田区","ruby":"ちよだく","count":1673},{"code":131024,"area":"特別区","label":"中央区","ruby":"ちゅうおうく","count":5191},{"code":131032,"area":"特別区","label":"港区","ruby":"みなとく","count":9365},{"code":131041,"area":"特別区","label":"新宿区","ruby":"しんじゅくく","count":16200},{"code":131059,"area":"特別区","label":"文京区","ruby":"ぶんきょうく","count":4797},{"code":131067,"area":"特別区","label":"台東区","ruby":"たいとうく","count":5896},{"code":131075,"area":"特別区","label":"墨田区","ruby":"すみだく","count":6501},{"code":131083,"area":"特別区","label":"江東区","ruby":"こうとうく","count":11894},{"code":131091,"area":"特別区","label":"品川区","ruby":"しながわく","count":10041},{"code":131105,"area":"特別区","label":"目黒区","ruby":"めぐろく","count":9280},{"code":131113,"area":"特別区","label":"大田区","ruby":"おおたく","count":17048},{"code":131121,"area":"特別区","label":"世田谷区","ruby":"せたがやく","count":25205},{"code":131130,"area":"特別区","label":"渋谷区","ruby":"しぶやく","count":9077},{"code":131148,"area":"特別区","label":"中野区","ruby":"なかのく","count":11024},{"code":131156,"area":"特別区","label":"杉並区","ruby":"すぎなみく","count":14210},{"code":131164,"area":"特別区","label":"豊島区","ruby":"としまく","count":9424},{"code":131172,"area":"特別区","label":"北区","ruby":"きたく","count":8154},{"code":131181,"area":"特別区","label":"荒川区","ruby":"あらかわく","count":5155},{"code":131199,"area":"特別区","label":"板橋区","ruby":"いたばしく","count":12995},{"code":131202,"area":"特別区","label":"練馬区","ruby":"ねりまく","count":15555},{"code":131211,"area":"特別区","label":"足立区","ruby":"あだちく","count":15611},{"code":131229,"area":"特別区","label":"葛飾区","ruby":"かつしかく","count":10949},{"code":131237,"area":"特別区","label":"江戸川区","ruby":"えどがわく","count":15957},{"code":132012,"area":"多摩地域","label":"八王子市","ruby":"はちおうじし","count":8542},{"code":132021,"area":"多摩地域","label":"立川市","ruby":"たちかわし","count":2918},{"code":132039,"area":"多摩地域","label":"武蔵野市","ruby":"むさしのし","count":2836},{"code":132047,"area":"多摩地域","label":"三鷹市","ruby":"みたかし","count":3344},{"code":132055,"area":"多摩地域","label":"青梅市","ruby":"おうめし","count":1418},{"code":132063,"area":"多摩地域","label":"府中市","ruby":"ふちゅうし","count":3780},{"code":132071,"area":"多摩地域","label":"昭島市","ruby":"あきしまし","count":1609},{"code":132080,"area":"多摩地域","label":"調布市","ruby":"ちょうふし","count":4193},{"code":132098,"area":"多摩地域","label":"町田市","ruby":"まちだし","count":6190},{"code":132101,"area":"多摩地域","label":"小金井市","ruby":"こがねいし","count":1936},{"code":132110,"area":"多摩地域","label":"小平市","ruby":"こだいらし","count":2598},{"code":132128,"area":"多摩地域","label":"日野市","ruby":"ひのし","count":2513},{"code":132136,"area":"多摩地域","label":"東村山市","ruby":"ひがしむらやまし","count":1833},{"code":132144,"area":"多摩地域","label":"国分寺市","ruby":"こくぶんじし","count":1844},{"code":132152,"area":"多摩地域","label":"国立市","ruby":"くにたちし","count":994},{"code":132187,"area":"多摩地域","label":"福生市","ruby":"ふっさし","count":943},{"code":132195,"area":"多摩地域","label":"狛江市","ruby":"こまえし","count":1326},{"code":132209,"area":"多摩地域","label":"東大和市","ruby":"ひがしやまとし","count":1022},{"code":132217,"area":"多摩地域","label":"清瀬市","ruby":"きよせし","count":871},{"code":132225,"area":"多摩地域","label":"東久留米市","ruby":"ひがしくるめし","count":1587},{"code":132233,"area":"多摩地域","label":"武蔵村山市","ruby":"むさしむらやまし","count":927},{"code":132241,"area":"多摩地域","label":"多摩市","ruby":"たまし","count":1868},{"code":132250,"area":"多摩地域","label":"稲城市","ruby":"いなぎし","count":1298},{"code":132276,"area":"多摩地域","label":"羽村市","ruby":"はむらし","count":681},{"code":132284,"area":"多摩地域","label":"あきる野市","ruby":"あきるのし","count":985},{"code":132292,"area":"多摩地域","label":"西東京市","ruby":"にしとうきょうし","count":3652},{"code":133035,"area":"多摩地域","label":"瑞穂町","ruby":"みずほまち","count":360},{"code":133051,"area":"多摩地域","label":"日の出町","ruby":"ひのでまち","count":150},{"code":133078,"area":"多摩地域","label":"檜原村","ruby":"ひのはらむら","count":12},{"code":133086,"area":"多摩地域","label":"奥多摩町","ruby":"おくたままち","count":49},{"code":133612,"area":"島しょ地域","label":"大島町","ruby":"おおしままち","count":64},{"code":133621,"area":"島しょ地域","label":"利島村","ruby":"としまむら","count":1},{"code":133639,"area":"島しょ地域","label":"新島村","ruby":"にいじまむら","count":14},{"code":133647,"area":"島しょ地域","label":"神津島村","ruby":"こうづしまむら","count":1},{"code":133817,"area":"島しょ地域","label":"三宅村","ruby":"みやけむら","count":12},{"code":133825,"area":"島しょ地域","label":"御蔵島村","ruby":"みくらじまむら","count":2},{"code":134015,"area":"島しょ地域","label":"八丈町","ruby":"はちじょうまち","count":14},{"code":134023,"area":"島しょ地域","label":"青ヶ島村","ruby":"あおがしまむら","count":0},{"code":134210,"area":"島しょ地域","label":"小笠原村","ruby":"おがさわらむら","count":10},{"code":null,"area":null,"label":"都外","ruby":null,"count":24913},{"code":null,"area":null,"label":"調査中","ruby":null,"count":238},{"code":null,"area":null,"label":"小計","ruby":null,"count":338750}]}}')},783:function(e,t,l){"use strict";l.r(t);l(184),l(25),l(24);var n=l(27),r=l.n(n),o=l(634),c=l(672),d=l(422),f=Object(d.a)(),y={components:{ConfirmedCasesByMunicipalitiesTable:o.default},data:function(){var e=this,t=c.datasets,l=c.date,n=r()(l).format("YYYY/MM/DD HH:mm"),o={headers:[],datasets:[]};"ja"===this.$i18n.locale?o.headers=[{text:this.$t("地域"),value:"area"},{text:this.$t("ふりがな"),value:"ruby"},{text:this.$t("区市町村"),value:"label"},{text:this.$t("陽性者数"),value:"count",align:"end"}]:o.headers=[{text:this.$t("地域"),value:"area"},{text:this.$t("区市町村"),value:"label"},{text:this.$t("陽性者数"),value:"count",align:"end"}];var d=["特別区","多摩地域","島しょ地域",null];return t.data.sort((function(a,b){return a.ruby===b.ruby?0:a.ruby>b.ruby?1:-1})).sort((function(a,b){return d.indexOf(a.area)-d.indexOf(b.area)})),o.datasets=t.data.filter((function(e){return"小計"!==e.label})).map((function(t){var area=e.$t(t.area),label=e.$t(t.label),l=f(t.count);return"ja"===e.$i18n.locale?{area:area,ruby:e.$t(t.ruby),label:label,count:l}:{area:area,label:label,count:l}})),{date:n,municipalitiesTable:o,info:{sText:this.$t("{date}の累計",{date:this.$d(new Date(t.date),"date")})}}}},m=l(13),x=l(60),v=l.n(x),h=l(441),component=Object(m.a)(y,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-col",{staticClass:"DataCard ConfirmedCasesByMunicipalitiesCard",attrs:{cols:"12",md:"6"}},[l("client-only",[l("confirmed-cases-by-municipalities-table",{attrs:{title:e.$t("陽性者数（区市町村別）"),"title-id":"number-of-confirmed-cases-by-municipalities","chart-data":e.municipalitiesTable,date:e.date,info:e.info,url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000085"},scopedSlots:e._u([{key:"additionalDescription",fn:function(){return[l("span",[e._v(e._s(e.$t("（注）")))]),e._v(" "),l("ul",[l("li",[e._v("\n            "+e._s(e.$t("前日までに報告された陽性者数の累計値"))+"\n          ")]),e._v(" "),l("li",[e._v("\n            "+e._s(e.$t("チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCol:h.a})}}]);