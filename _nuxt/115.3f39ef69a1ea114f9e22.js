(window.webpackJsonp=window.webpackJsonp||[]).push([[115,81,86],{432:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("7cf19f2f",content,!0,{sourceMap:!1})},434:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("905bdcd6",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),o=(n(446),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[t.title?n("h4",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("p",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("span",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])])]:t._e(),t._v(" "),n("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},438:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(91),l=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""}}}),d=(n(449),n(13)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,n){"use strict";n(432)},447:function(t,e,n){var r=n(28)(!1);r.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:12px;color:#4d4d4d}@media screen and (min-width:1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-weight:400;flex:1 1 50%;font-size:1.8rem}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-style:normal;line-height:30px;margin-bottom:0!important;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}",""]),t.exports=r},449:function(t,e,n){"use strict";n(434)},450:function(t,e,n){var r=n(28)(!1);r.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=r},457:function(t,e,n){"use strict";n(10),n(24);var r=n(141);e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var o=e["小計"];isNaN(o)||(n+=o,t.push({label:Object(r.a)(e["日付"]),transition:o,cumulative:n}))})),t}},500:function(t,e,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("4ead5d9d",content,!0,{sourceMap:!1})},523:function(t,e,n){var content=n(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("5d373904",content,!0,{sourceMap:!1})},541:function(t,e,n){"use strict";n(500)},542:function(t,e,n){var r=n(28)(!1);r.push([t.i,".cardTable.v-data-table th{padding:8px 10px!important;height:auto!important;border-bottom:1px solid #d9d9d9!important;color:#4d4d4d!important;font-size:1.2rem!important}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr th{font-weight:400}.cardTable.v-data-table tbody tr td{padding:8px 10px!important;height:auto!important;font-size:1.2rem!important}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) td,.cardTable.v-data-table tbody tr:nth-child(odd) th{background:hsla(0,0%,85.1%,.3)}.cardTable.v-data-table .v-select{margin-left:10px}.cardTable.v-data-table:focus{outline:1px dotted #707070}.cardTable .v-data-table__wrapper{box-shadow:inset 0 -20px 12px -12px rgba(0,0,0,.2)}.cardTable .v-data-footer{font-size:1.2rem}.cardTable .v-data-footer__pagination{margin-left:0;margin-right:5px}.cardTable .v-data-footer__select .v-select__selections .v-select__selection--comma{font-size:1.2rem}.v-menu__content{width:80px}.v-menu__content .v-list-item{padding:0 8px}.v-list-item__title{font-size:1.5rem}.loading{visibility:hidden}.FooterNote{margin:0!important}.DataTable-header{white-space:nowrap}",""]),t.exports=r},563:function(t,e,n){"use strict";n.r(e);n(87),n(41),n(10);var r=n(46),o=n(0),l=n(120),d=n(443),c=n(435),f=n(438),h=o.default.extend({components:{DataView:d.default,DataViewDataSetPanel:c.default,OpenDataLink:f.default,ScaleLoader:l.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},tableData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""},loaded:{type:Boolean,default:!1},error:{type:Object,default:null},dataLength:{type:Number,default:10}},data:function(){return{itemsPerPage:15,page:1,mdiAlert:r.b}},watch:{itemsPerPage:function(){this.$emit("on-change-items-per-page",this.itemsPerPage),this.page=1},page:function(){this.$emit("on-change-page",this.page)}},mounted:function(){var t=this.$refs.displayedTable.$el,e=t.querySelectorAll("table");Array.prototype.slice.call(e,0).forEach((function(table){table.setAttribute("tabindex","0")}));var n=t.querySelectorAll("input[aria-readonly]");Array.prototype.slice.call(n,0).forEach((function(input){input.removeAttribute("aria-readonly")}))}}),v=(n(541),n(13)),m=n(60),_=n.n(m),x=n(941),y=n(952),D=n(176),w=n(840),S=n(415),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}}),t._v(" "),n("p",{staticClass:"FooterNote"},[t._v("\n      "+t._s(t.$t("下記更新日時はオープンデータAPIの反映日時に準じています"))+"\n    ")])]},proxy:!0}],null,!0)},[n("v-overlay",{attrs:{opacity:"0",absolute:"",value:!t.loaded,"justify-center":"","align-center":""}},[n("scale-loader",{attrs:{color:"#00A040"}})],1),t._v(" "),t.error?n("v-overlay",{attrs:{absolute:"","justify-center":"","align-center":""}},[n("v-alert",{attrs:{color:"#AD2121"}},[n("v-icon",[t._v("\n        "+t._s(t.mdiAlert)+"\n      ")]),t._v("\n      "+t._s(t.title)+" "+t._s(t.$t("の読み込みに失敗しました"))+" "),n("br"),t._v("\n      エラーメッセージ: "+t._s(t.error.message)+"\n    ")],1)],1):t._e(),t._v(" "),n("v-layout",{class:{loading:!t.loaded||t.error},attrs:{column:""}},[n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.tableData.headers,items:t.tableData.datasets,height:240,"fixed-header":"","hide-default-header":!0,"mobile-breakpoint":0,"footer-props":{"items-per-page-options":[15,30,50,100,200,300,500,1e3],"items-per-page-text":t.$t("1ページ当たり")},"items-per-page":t.itemsPerPage,page:t.page,"disable-sort":!0,"server-items-length":t.dataLength},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e},"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"header",fn:function(e){var r=e.props.headers;return[n("thead",[n("tr",t._l(r,(function(header,i){return n("th",{key:i,class:"text-"+(header.align||"start")+" DataTable-header"},[t._v("\n              "+t._s(t.$t(header.text))+"\n            ")])})),0)])]}},{key:"body",fn:function(e){var n=e.items,r=e.headers;return[t._t("tableBody",null,{items:n,headers:r})]}},{key:"footer.page-text",fn:function(e){return[t._v("\n        "+t._s(t.$t("{itemsLength} 項目中 {pageStart} - {pageStop} ",{itemsLength:e.itemsLength,pageStart:e.pageStart,pageStop:e.pageStop}))+"\n      ")]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VAlert:x.a,VDataTable:y.a,VIcon:D.a,VLayout:w.a,VOverlay:S.a})},602:function(t,e,n){"use strict";n(523)},603:function(t,e,n){var r=n(28)(!1);r.push([t.i,".DataTable-cell[data-v-60e4c666]{white-space:nowrap}",""]),t.exports=r},699:function(t,e,n){"use strict";n.r(e);var r=n(12),o=n(16),l=(n(66),n(41),n(14),n(20),n(79),n(65),n(37),n(61),n(45),n(27)),d=n.n(l),c=n(563),f=n(119),h=(n(25),[{text:"公表日",value:"公表日",type:"date"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代",type:"age"},{text:"性別",value:"性別"},{text:"職業",value:"職業",align:"center"},{text:"接触歴",value:"接触歴",align:"center"},{text:"発症日",value:"発症日",type:"date"},{text:"確定日",value:"確定日",type:"date"},{text:"退院",value:"退院",align:"center"}]);var v=n(457),m={components:{DataTable:c.default},data:function(){var t=Object(v.a)(f.patients_summary.data),e=t[t.length-1],n=this.$d(new Date(e.label),"date"),r=e.cumulative,o={lText:r.toLocaleString(),sText:this.$t("{date}の累計",{date:n}),unit:this.$t("人")};return{dataLength:r,sumInfoOfPatients:o,date:"",page:1,itemsPerPage:15,endCursor:"",patientsData:[]}},computed:{patientsTable:function(){var t,e=this.page*this.itemsPerPage,n=e-this.itemsPerPage,r=this.patientsData.slice(n,e);return t=r.map((function(t){var e,n,r,o,l,d,c;return{"公表日":null!==(e=t["公表_年月日"])&&void 0!==e?e:"不明","居住地":null!==(n=t["患者_居住地"])&&void 0!==n?n:"調査中","年代":null!==(r=t["患者_年代"])&&void 0!==r?r:"不明","性別":null!==(o=t["患者_性別"])&&void 0!==o?o:"不明","職業":null!==(l=t["患者_職業"])&&void 0!==l?l:"-","接触歴":t["患者_接触歴の有無フラグ"]?"〇":"","発症日":null!==(d=t["発症_年月日"])&&void 0!==d?d:"","確定日":null!==(c=t["確定_年月日"])&&void 0!==c?c:"","退院":t["退院済フラグ"]?"〇":""}})),{headers:h,datasets:t}},dataMargin:function(){return this.patientsData.length-this.page*this.itemsPerPage}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchOpenAPI();case 2:n=e.sent,r=n.patientsData,o=n.metaData,t.patientsData=t.patientsData.concat(r),t.endCursor=o.endCursor,t.date=o.updated,t.fetchIfNoCache();case 9:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1,methods:{fetchOpenAPI:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.data.metro.tokyo.lg.jp",n="".concat("https://api.data.metro.tokyo.lg.jp","/v1/Covid19Patient?limit=").concat(t.itemsPerPage)+(t.endCursor?"&cursor=".concat(encodeURIComponent(t.endCursor)):""),e.next=4,fetch(n).then((function(t){return t.json()})).then((function(data){return{patientsData:data[0],metaData:data[1]}})).catch((function(t){throw new Error(t.toString())}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},fetchIfNoCache:function(){var t=this;this.dataMargin<=0&&setTimeout((function(){return t.$fetch()}),0)},onChangeItemsPerPage:function(t){this.itemsPerPage=t,this.endCursor="",this.patientsData=[],this.$fetch()},onChangePage:function(t){this.page=t,this.fetchIfNoCache()},translateDate:function(t){var e=d()(t);return e.isValid()?this.$d(e.toDate(),"date"):t},translateAge:function(t){var e=t.split(/(代)$/,2),n=Object(r.a)(e,2),o=n[0];return n[1]?this.$t("{age}代",{age:o}):this.$t(t)},translateWord:function(t){return["-","‐","―","－",null].includes(t)?t:this.$t(t)}}},_=(n(602),n(13)),x=n(60),y=n.n(x),D=n(441),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard ConfirmedCasesAttributesCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-table",{attrs:{title:t.$t("陽性者の属性"),"title-id":"attributes-of-confirmed-cases","table-data":t.patientsTable,date:t.date,info:t.sumInfoOfPatients,url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068",loaded:t.dataMargin>=0,error:t.$fetchState.error,"data-length":t.dataLength},on:{"on-change-items-per-page":t.onChangeItemsPerPage,"on-change-page":t.onChangePage},scopedSlots:t._u([{key:"tableBody",fn:function(e){var r=e.items,o=e.headers;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"text-start DataTable-cell",attrs:{scope:"row"}},[t._v("\n              "+t._s(t.translateDate(e["公表日"]))+"\n            ")]),t._v(" "),t._l(o.slice(1),(function(header,r){return n("td",{key:r,class:"text-"+(header.align||"start")+" DataTable-cell"},["date"===header.type?[t._v("\n                "+t._s(t.translateDate(e[header.value]))+"\n              ")]:"age"===header.type?[t._v("\n                "+t._s(t.translateAge(e[header.value]))+"\n              ")]:[t._v("\n                "+t._s(t.translateWord(e[header.value]))+"\n              ")]],2)}))],2)})),0)]}},{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("「確定日」は検査により陽性であることを医師が確認した日"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("「職業」「接触歴」「発症日」「確定日」は、2020年10月1日以降の情報について週1回更新"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("「退院」は、保健所から報告があり、確認ができているものを反映（死亡退院を含む）"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,"60e4c666",null);e.default=component.exports;y()(component,{VCol:D.a})}}]);