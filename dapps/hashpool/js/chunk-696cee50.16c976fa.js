(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-696cee50"],{"0016":function(t,e,s){},"0447":function(t,e,i){"use strict";i.r(e);var s,n,a=(i("b680"),i("96cf"),i("1da1")),r={data:function(){return{navList:[{title:this.$t("zui-xin-can-yu")},{title:this.$t("xing-yun-jiang-li")}],active:0,newList:[],luckyList:[]}},methods:{switchNav:function(t){this.active=t},getEthHistory:(n=Object(a.a)(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$web3.eth.getBlockNumber().then();case 2:t.t0=t.sent,t.t1=100800,e=50400<(e=t.t0-t.t1)?e:0,this.$contract.Bank_ws.events.Log_Deposit({fromBlock:e}).on("data",function(t){s.newList.unshift({amount:t.returnValues.amount.fromWei("Mwei").toFixed(2),address:t.returnValues.owner,time:s.$toTime(t.returnValues.time,"Y-M-D")})});case 7:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),getLuckyList:function(){var e=this;this.$contract.Bank_ws.events.Log_Luckdog({fromBlock:0}).on("data",function(t){e.luckyList.unshift({address:t.returnValues.who,amount:t.returnValues.awardsTotal.fromWei("Mwei").toFixed(2),time:e.$toTime(t.returnValues.time,"Y-M-D")})})}},mounted:(s=Object(a.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.getEthHistory(),this.getLuckyList();case 2:case"end":return t.stop()}},t,this)})),function(){return s.apply(this,arguments)})},a=(i("c716"),i("0c7c")),r=Object(a.a)(r,function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"news"},[n("div",{staticClass:"newsNav"},s._l(s.navList,function(t,e){return n("div",{key:e,on:{click:function(t){return s.switchNav(e)}}},[n("span",[s._v(s._s(t.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:s.active==e,expression:"active == index"}],staticClass:"line"})])}),0),n("div",{staticClass:"newsListBox"},[n("img",{attrs:{src:i("5bd0")}}),n("div",{directives:[{name:"show",rawName:"v-show",value:0===s.active,expression:"active === 0"}]},s._l(s.newList,function(t,e){return n("div",{key:e,staticClass:"list"},[n("span",[s._v(s._s(t.address.slice(0,5)+"..."+t.address.slice(-5)))]),n("span",[s._v(s._s(t.amount)+" HE")])])}),0),n("div",{directives:[{name:"show",rawName:"v-show",value:1===s.active,expression:"active === 1"}]},s._l(s.luckyList,function(t,e){return n("div",{key:e,staticClass:"list"},[n("span",[s._v(s._s(t.address.slice(0,5)+"..."+t.address.slice(-5)))]),n("span",[s._v(s._s(t.amount)+" HE")]),n("span",[s._v(s._s(t.time))])])}),0)])])},[],!1,null,"61f24270",null);e.default=r.exports},"5bd0":function(t,e,s){t.exports=s.p+"img/flower.f31c0641.png"},c716:function(t,e,s){"use strict";var n=s("0016");s.n(n).a}}]);