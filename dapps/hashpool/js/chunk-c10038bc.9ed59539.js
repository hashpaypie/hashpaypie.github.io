(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c10038bc"],{2034:function(t,e,n){"use strict";var c=n("5465");n.n(c).a},5465:function(t,e,n){},5638:function(t,e,n){"use strict";n.r(e);var c=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("ade3"));function i(e,t){var n,c=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),c.push.apply(c,n)),c}var a={components:{play:function(){return n.e("chunk-8eaebbc0").then(n.bind(null,"0fdf"))},swap:function(){return n.e("chunk-2e0c7c58").then(n.bind(null,"b84a"))},income:function(){return n.e("chunk-06dd4e6f").then(n.bind(null,"64c4"))},mine:function(){return n.e("chunk-36ce51e6").then(n.bind(null,"8c26"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},Vuex.mapState(["contentActive"])),data:function(){return{playGameNav:[{title:this.$t("can-yu")},{title:this.$t("dui-huan")},{title:this.$t("shou-yi")},{title:this.$t("wo-de")}]}},methods:{navSwitch:function(t){this.$store.commit("contentActive",t)}}},r=(n("2034"),n("0c7c")),a=Object(r.a)(a,function(){var n=this,t=n.$createElement,c=n._self._c||t;return c("div",{staticClass:"content",attrs:{id:"content"}},[c("div",{staticClass:"publicBox"},[c("publicTitle",{attrs:{title:n.$t("can-yu-you-xi")}}),c("div",{staticClass:"playGame"},[c("div",{staticClass:"playGameNav"},n._l(n.playGameNav,function(t,e){return c("div",{key:e,class:{active:n.contentActive==e},on:{click:function(t){return n.navSwitch(e)}}},[n._v(n._s(t.title))])}),0),c("div",{staticClass:"navContent",class:{activeBorder1:0==n.active,activeBorder2:1==n.active||2==n.active,activeBorder3:3==n.active}},[c("play",{directives:[{name:"show",rawName:"v-show",value:0==n.contentActive,expression:"contentActive == 0"}]}),c("swap",{directives:[{name:"show",rawName:"v-show",value:1==n.contentActive,expression:"contentActive == 1"}]}),c("income",{directives:[{name:"show",rawName:"v-show",value:2==n.contentActive,expression:"contentActive == 2"}]}),c("mine",{directives:[{name:"show",rawName:"v-show",value:3==n.contentActive,expression:"contentActive == 3"}]})],1)])],1)])},[],!1,null,"9e10ce82",null);e.default=a.exports}}]);