(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-69a1c13a"],{"0717":function(t,i,e){"use strict";var s=e("b8be");e.n(s).a},3498:function(t,i,e){t.exports=e.p+"img/circle3.6bdb482f.png"},"90c7":function(t,i,e){"use strict";e.r(i);var a=(e("a4d3"),e("4de4"),e("e439"),e("dbb4"),e("b64b"),e("d3b7"),e("3ca3"),e("159b"),e("ddb0"),e("3835")),s=e("ade3");function n(i,t){var e,s=Object.keys(i);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(i),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})),s.push.apply(s,e)),s}var o={data:function(){return{lucky:0,miningPool:0,operation:0,dividends:0,destroyDT:0,time:0,lotteryPool:0}},computed:function(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?n(Object(e),!0).forEach(function(t){Object(s.a)(i,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))})}return i}({},Vuex.mapState(["countdownTime"])),methods:{init:function(){var n=this;Promise.all([this.$web3.eth.getBalance("0x0000000000000000000000000000000000000000").then(),this.$contract.Pool.methods.availTotalAmouns(0).call({from:this.$address}),this.$contract.ERC777_1Token.methods.balanceOf("0x000000000000000000000000000000000000dead").call(),this.$contract.Pool.methods.availTotalAmouns(2).call({from:this.$address}),this.$contract.Pool.methods.availTotalAmouns(3).call({from:this.$address}),this.$web3.eth.getBalance("0x000000000000000000000000000000000000dead").then()]).then(function(t){var i=Object(a.a)(t,6),e=i[0],s=(i[1],i[2]),t=(i[3],i[4]),i=i[5];n.destroyDT=Math.floor(e.fromWei())+Math.floor(i.fromWei()),n.miningPool=Math.floor(s.fromWei("Mwei")),n.lucky=0,n.dividends=Math.floor(t.fromWei("Mwei")),n.lotteryPool=0})}},mounted:function(){new Swiper(".statisticsSwiper",{slidesPerView:3,loop:!1,autoHeight:!0}),this.init()}},c=(e("0717"),e("0c7c")),o=Object(c.a)(o,function(){var t=this,i=t.$createElement,i=t._self._c||i;return i("div",{staticClass:"publicBox"},[i("publicTitle",{attrs:{title:t.$t("shu-ju-tong-ji")}}),i("div",{staticClass:"Statistics"},[i("div",{staticClass:"swiper-container statisticsSwiper"},[i("div",{staticClass:"swiper-wrapper"},[i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"swiper-item StatisticsContent"},[i("div",[i("img",{attrs:{src:e("c52c")}}),i("span",[t._v(t._s(t.lucky))])]),i("span",[t._v(t._s(t.$t("xing-yun-ji-jin"))+"/HE")])])]),i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"swiper-item StatisticsContent"},[i("div",[i("img",{attrs:{src:e("3498")}}),i("span",[t._v(t._s(t.miningPool))])]),i("span",[t._v(t._s(t.$t("kuang-chi-ji-jin"))+"/HE")])])]),i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"swiper-item StatisticsContent"},[i("div",[i("img",{attrs:{src:e("b8dc")}}),i("span",[t._v(t._s(t.dividends))])]),i("span",[t._v(t._s(t.$t("quan-qiu-fen-hong"))+"/HE")])])]),i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"swiper-item StatisticsContent"},[i("div",[i("img",{attrs:{src:e("a6f6")}}),i("span",[t._v(t._s(t.destroyDT))])]),i("span",[t._v(t._s(t.$t("xiao-hui-chi"))+"/DT")])])])])])])],1)},[],!1,null,"7d6cf64e",null);i.default=o.exports},a6f6:function(t,i,e){t.exports=e.p+"img/circle6.cdb38f8d.png"},b8be:function(t,i,e){},b8dc:function(t,i,e){t.exports=e.p+"img/circle4.dd14438a.png"},c52c:function(t,i,e){t.exports=e.p+"img/circle1.66d70945.png"}}]);