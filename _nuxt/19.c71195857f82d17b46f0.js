(window.webpackJsonp=window.webpackJsonp||[]).push([[19,87],{436:function(t,e,r){var content=r(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("8ce8012e",content,!0,{sourceMap:!1})},437:function(t,e,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("2bf24da6",content,!0,{sourceMap:!1})},439:function(t,e,r){"use strict";r.r(e);r(24),r(25),r(41),r(10);var n=r(27),o=r.n(n),l=r(0),d={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))},methods:{formatDate:function(t){var e=o()(new Date(t));return e.isValid()?this.$d(e.toDate(),"date"):t}}},c=l.default.extend(d),h=(r(453),r(13)),f=r(60),y=r.n(f),v=r(952),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var n=e.items;return[r("tbody",t._l(n,(function(e,i){return r("tr",{key:i},[r("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(n,o){return r("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[n])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;y()(component,{VDataTable:v.a})},440:function(t,e,r){"use strict";r.r(e);r(65);var n=r(445),o={props:{displayData:{type:Object,required:!0},isWeekly:{type:Boolean,required:!1,default:!1}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var r=(t-38)/(this.isWeekly?24:60)*e+38;return Math.max(r,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),n.a.$on(n.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),n.a.$off(n.b)}},l=(r(455),r(13)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[r("div",{ref:"scrollable",staticClass:"scrollable",attrs:{tabindex:"0"}},[r("div",{style:{width:t.chartWidth+"px"}},[t._t("chart",null,{chartWidth:t.chartWidth})],2)]),t._v(" "),t._t("sticky-chart")],2)}),[],!1,null,"f591854c",null);e.default=component.exports},442:function(t,e,r){"use strict";r.d(e,"b",(function(){return y})),r.d(e,"a",(function(){return v}));var n={strokeColor:"#5a8055",fillColor:"#1b4d30"},o={strokeColor:"#5a8055",fillColor:"#00a040"},l={strokeColor:"#5a8055",fillColor:"#c5e2c6"},d={strokeColor:"#1b4d30",fillColor:"#cbe1c8"},c={strokeColor:"#cc7004",fillColor:"#cc7004"},h={strokeColor:"#1b4d30",fillColor:"#1b4d30"},f={strokeColor:"#5a8055",fillColor:"#e2eee2"};function y(t){switch(t){case 1:return[o];case 2:return[n,l];case 4:return[n,o,l,f];default:return[n,o,l]}}function v(t){return{A:n,B:o,C:l,D:d,E:c,F:h,G:f}[t]}},445:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=new(r(0).default),o="TOGGLE_TAB"},453:function(t,e,r){"use strict";r(436)},454:function(t,e,r){var n=r(28)(!1);n.push([t.i,".cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=n},455:function(t,e,r){"use strict";r(437)},456:function(t,e,r){var n=r(28)(!1);n.push([t.i,".LegendStickyChart[data-v-f591854c]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-f591854c]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-f591854c]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=n},485:function(t,e,r){var content=r(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("acab53c2",content,!0,{sourceMap:!1})},600:function(t,e,r){"use strict";var n=r(485),o=r.n(n);r.d(e,"default",(function(){return o.a}))},601:function(t,e,r){var n=r(28)(!1);n.push([t.i,".GraphLegend_1KEAS{text-align:center;list-style:none;padding:0!important}.GraphLegend_1KEAS li{display:inline-block;margin:0 3px}.GraphLegend_1KEAS li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_1KEAS li button{color:#707070;font-size:1.2rem}",""]),n.locals={GraphLegend:"GraphLegend_1KEAS"},t.exports=n},633:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(93),l=(r(25),r(14),r(41),r(0)),d=r(443),c=r(439),h=r(440),f=r(143),y=r(442),v=l.default.extend({components:{DataView:d.default,DataViewTable:c.default,ScrollableChart:h.default},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"agency-bar-chart"},chartData:{type:Object,default:function(){return{date:"",periods:[],datasets:[]}}},date:{type:String,default:""},labels:{type:Array,default:function(){return[]}},periods:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},unit:{type:String,required:!1,default:""}},data:function(){return{colors:Object(y.b)(3),canvas:!0,yAxesBgPlugin:f.b,displayLegends:[!0,!0,!0]}},computed:{displayData:function(){var t=this;return{labels:this.labels,datasets:this.chartData.datasets.map((function(e,r){var label=t.items[r],data=e.data,n=t.colors[r];return{label:label,data:data,backgroundColor:n.fillColor,borderColor:n.strokeColor,borderWidth:1}}))}},displayOption:function(){var t=this,e={maintainAspectRatio:!1,tooltips:{displayColors:!1,callbacks:{title:function(e){var r=t.periods[e[0].index];return t.$t("期間: {duration}",{duration:r})},label:function(e,data){var r=e.datasetIndex,title=t.$t(data.datasets[r].label),n=parseInt(e.value).toLocaleString(),o=t.$t(t.unit);return"".concat(title,": ").concat(n," ").concat(o)}}},legend:{display:!1},scales:{xAxes:[{id:"period",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,fontColor:"#808080",callback:function(e,i){return t.periods[i]}}},{id:"year",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"year",displayFormats:{year:"YYYY"}}}],yAxes:[{stacked:!0,gridLines:{display:!0},ticks:{fontSize:9,fontColor:"#808080",maxTicksLimit:10,callback:function(label){return"".concat(label).concat(t.unit)}}}]}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},displayDataHeader:function(){var t=this;return{labels:this.labels,datasets:this.chartData.datasets.map((function(e,r){return{label:t.items[r],data:e.data,backgroundColor:"transparent",borderWidth:0}}))}},displayOptionHeader:function(){var t=this;return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"period",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,fontColor:"transparent",callback:function(e,i){return t.periods[i]}}},{id:"year",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"year"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,fontColor:"#808080",maxTicksLimit:10,callback:function(label){return"".concat(label).concat(t.unit)}}}]},animation:{duration:0}}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.displayData.datasets.map((function(text,t){return{text:text.label,value:String(t),align:"end"}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.periods[i]}].concat(Object(o.a)(t.displayData.datasets.map((function(e,r){return Object(n.a)({},r,t.displayData.datasets[r].data[i].toLocaleString())})))))})).reverse()}},created:function(){this.canvas=!0},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()}}}),m=r(600),k=r(13);var component=Object(k.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"dataTable",fn:function(){return[r("client-only",[r("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0}],null,!0)},[r("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.items,(function(e,i){return r("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[r("button",[r("div",{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor,width:"20px"}}),t._v(" "),r("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v("\n          "+t._s(e)+"\n        ")])])])})),0),t._v(" "),r("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),r("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData,"is-weekly":!0},scopedSlots:t._u([{key:"chart",fn:function(e){var n=e.chartWidth;return[r("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:280,width:n}})]}},{key:"sticky-chart",fn:function(){return[r("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,"display-legends":t.displayLegends,plugins:t.yAxesBgPlugin,height:280}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports},782:function(t,e,r){"use strict";r.r(e);r(25),r(14);var n=r(0),o=r(633),l=r(141),d=n.default.extend({components:{Chart:o.default},data:function(){return{agencyItems:[this.$t("第一庁舎計"),this.$t("第二庁舎計"),this.$t("議事堂計")]}},computed:{agency:function(){return this.$store.state.agency},date:function(){return this.agency.date},labels:function(){return this.agency.periods.map((function(p){return Object(l.a)(p.begin)}))},periods:function(){var t=this;return this.agency.periods.map((function(p){var e=t.$d(p.begin,"dateWithoutYear"),r=t.$d(p.end,"dateWithoutYear");return"".concat(e,"~").concat(r)}))}}}),c=r(13),h=r(60),f=r.n(h),y=r(441),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"DataCard AgencyCard",attrs:{cols:"12",md:"6"}},[r("client-only",[r("chart",{attrs:{title:t.$t("都庁来庁者数の推移"),"title-id":"agency","chart-id":"agency","chart-data":t.agency,date:t.date,labels:t.labels,periods:t.periods,items:t.agencyItems,unit:t.$t("人")},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[t._v("\n        "+t._s(t.$t("※土・日・祝日を除く庁舎開庁日の1週間累計数"))+"\n      ")]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:y.a})}}]);