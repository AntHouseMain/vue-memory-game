webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i=s("d7EF"),c=s.n(i),r={props:{card:Object,mainColor:String},data:function(){return{}},methods:{setCardBg:function(t){this.$refs.item.style.backgroundColor=t},onClickCard:function(t){this.setCardBg(this.card.bc),this.$emit("clickItem",t.target)}},mounted:function(){this.setCardBg(this.mainColor)}},o={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-flex",{ref:"item",staticClass:"card",on:{click:function(e){t.onClickCard(e)}}})},staticRenderFns:[]};var a={components:{"card-item":s("VU/8")(r,o,!1,function(t){s("gCWi")},null,null).exports},data:function(){return{clickCount:0,selectedItems:[],mainColor:"#009688",timer:null,seconds:0,secondsTimer:null,cards:[{bc:"#EF5350",id:1},{bc:"#EF5350",id:2},{bc:"#EC407A",id:3},{bc:"#EC407A",id:4},{bc:"#AB47BC",id:5},{bc:"#AB47BC",id:6},{bc:"#7E57C2",id:7},{bc:"#7E57C2",id:8},{bc:"#5C6BC0",id:9},{bc:"#5C6BC0",id:10},{bc:"#42A5F5",id:11},{bc:"#42A5F5",id:12},{bc:"#66BB6A",id:13},{bc:"#66BB6A",id:14},{bc:"#FFCA28",id:15},{bc:"#FFCA28",id:16},{bc:"#FF7043",id:17},{bc:"#FF7043",id:18},{bc:"#8D6E63",id:19},{bc:"#8D6E63",id:20},{bc:"#78909C",id:21},{bc:"#78909C",id:22},{bc:"#212121",id:23},{bc:"#212121",id:24},{bc:"#DDDDDD",id:25}],cardsLeft:25,successfulDialog:!1}},methods:{onChooseItem:function(t){this.selectedItems.push(t),this.clickCount++,1==this.clickCount&&this.onStartTimer(),2==this.selectedItems.length?this.isItemsMatch()?this.hideItems():this.isItemsNotMatch(t):this.selectedItems.length>2&&this.nextStep(t)},isItemsMatch:function(){var t=c()(this.selectedItems,2),e=t[0],s=t[1];return e.style.backgroundColor==s.style.backgroundColor&&e!=s},isItemsNotMatch:function(){var t=this;this.timer=setTimeout(function(){t.selectedItems.forEach(function(e){e.style.backgroundColor=t.mainColor,t.selectedItems=[]})},500)},nextStep:function(t){var e=this;this.selectedItems=this.selectedItems.filter(function(s){return s.style.backgroundColor==t.style.backgroundColor||(s.style.backgroundColor=e.mainColor,!1)})},hideItems:function(){this.selectedItems.forEach(function(t){t.style.display="none"}),this.cardsLeft-=2,1==this.cardsLeft&&(clearInterval(this.secondsTimer),this.successfulDialog=!0)},onStartTimer:function(){var t=this;this.secondsTimer=setInterval(function(){t.seconds++},1e3)}},computed:{randomCards:function(){for(var t,e,s=this.cards.length;s;t=parseInt(Math.random()*s),e=this.cards[--s],this.cards[s]=this.cards[t],this.cards[t]=e);return this.cards}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-layout",[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-layout",[s("v-flex",{attrs:{xs6:""}},[t._v("\n          Time: "+t._s(this.seconds)+"\n        ")]),t._v(" "),s("v-flex",{attrs:{xs6:""}},[t._v("\n          Moves: "+t._s(this.clickCount)+"\n        ")])],1),t._v(" "),s("v-card",[s("v-container",{attrs:{"grid-list-lg":""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.randomCards,function(e){return s("v-flex",{key:e.id,staticClass:"card-item"},[s("card-item",{attrs:{card:e,mainColor:t.mainColor},on:{clickItem:t.onChooseItem}})],1)}))],1)],1)],1)],1),t._v(" "),s("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.successfulDialog,callback:function(e){t.successfulDialog=e},expression:"successfulDialog"}},[s("v-card",[s("v-card-title",[t._v("\n        Сongratulations!\n      ")]),t._v(" "),s("v-card-text",{attrs:{"green--text":""}},[t._v("\n        You won! Your time is "+t._s(this.seconds)+" seconds!\n      ")]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{color:"green",dark:""},on:{click:function(e){e.stopPropagation(),t.successfulDialog=!1}}},[t._v("ok")])],1)],1)],1)],1)},staticRenderFns:[]};var d={name:"App",components:{"card-list":s("VU/8")(a,l,!1,function(t){s("az/r")},null,null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("card-list")],1)},staticRenderFns:[]};var f=s("VU/8")(d,u,!1,function(t){s("gVhv")},null,null).exports,h=s("3EgV"),m=s.n(h);s("7zck");n.default.use(m.a),n.default.config.productionTip=!1,new n.default({el:"#app",components:{App:f},template:"<App/>"})},"az/r":function(t,e){},gCWi:function(t,e){},gVhv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3e504b4bf5c108815028.js.map