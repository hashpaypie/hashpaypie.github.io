(function(t){function e(e){for(var r,c,o=e[0],i=e[1],A=e[2],u=0,p=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,A||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var A=0;A<o.length;A++)e(o[A]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("64a9")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.weixin?r("div",{staticClass:"imtoken"},[t._v("\n\t\t"+t._s(t.$t("text5"))+"\n\t\t"),r("img",{attrs:{src:n("aa06")}})]):t._e(),r("div",{staticClass:"title"},[r("img",{attrs:{src:n("8eba")}}),r("div",[r("span",{class:{active:"zh"==t.$i18n.locale},on:{click:function(e){return t.switchLanguage("zh")}}},[t._v("简体中文")]),r("span",{staticClass:"line"},[t._v("|")]),r("span",{class:{active:"en"==t.$i18n.locale},on:{click:function(e){return t.switchLanguage("en")}}},[t._v("English")])])]),r("div",{staticClass:"content"},[r("img",{attrs:{src:n("d546")}}),r("p",[t._v(t._s(t.$t("text1")))]),r("p",[t._v(t._s(t.$t("text2")))]),r("div",{on:{click:t.download}},[r("img",{attrs:{src:n("b133")}}),r("span",[t._v(t._s(t.$t("text3")))])])]),r("div",{staticClass:"bottom",domProps:{innerHTML:t._s(t.$t("text4"))}})])},s=[],c=(n("4917"),{data:function(){return{appDownloadAddress:"https://dtttesttt.oss-cn-shenzhen.aliyuncs.com/app/dfpro_latest.apk",weixin:!1}},methods:{switchLanguage:function(t){localStorage.setItem("locale",t),this.$i18n.locale=t},download:function(){var t=document.createElement("a");t.href=this.appDownloadAddress,t.click()}},mounted:function(){var t=navigator.userAgent.toLowerCase();"micromessenger"==t.match(/MicroMessenger/i)&&(this.weixin=!0)}}),o=c,i=(n("034f"),n("2877")),A=Object(i["a"])(o,a,s,!1,null,null,null),l=A.exports,u=n("a925"),p={text1:"拥抱区块链，就用哈希派",text2:"您的通用数字钱包",text3:"安卓下载",text4:"版权所有&nbsp;&nbsp;&nbsp;2020Hashpay保留所有",text5:"请点击右上角，使用浏览器打开"},d=p,f={text1:"Embrace the blockchain, use Hashpay",text2:"Your universal digital wallet",text3:"Android download",text4:"all rights reserved&nbsp;&nbsp;&nbsp;2020Hashpay keeps all",text5:"Please click on the upper right corner to open with a browser"},v=f;r["a"].use(u["a"]);var h=new u["a"]({locale:localStorage.getItem("locale")||"zh",messages:{zh:d,en:v}}),b=h;n("45dc");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(l)},i18n:b}).$mount("#app")},"64a9":function(t,e,n){},"8eba":function(t,e){t.exports="data:image/png;base64,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"},aa06:function(t,e,n){t.exports=n.p+"img/line.f5a21ecd.png"},b133:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAEK0lEQVRYR+1ZQYiVVRT+znv//OcuXBRN6KLIhctZjNCihcEMJLhIUihIMixa2GKkJCGFEZOMCg2VDGxnNFFQYZFQYOBAQkFBQi1atDByYSjUwsW99733f3Ie98k/b968/59hnBa+u3rce8853z33nPvO+X5BjeGcu0RyPIQwDeBmDZHylnFVvSQiN733Jj90SNUGW1fV30RkguSFEML2OjK9Par6rYhss4N47x+skq0FaGxsbLLRaPwoIo7kDIDvAJiRCQCbbN4MkfQA/gTwe9rzpIicsrWiKHbFGD9bFUCmJM/z1xuNxjtVCgetF0VxLsb4Yh3ZWh5yzr1E8oSI3NdTStK88JOIXAPwV5p/hORDAB6zKy4BuF4UxUyM8csqUFWAMufcxwCeTVfyn4ic9d5/COBqhfKNzrm9JF/uHYTk2RDCPgDtpWSHAcpU9ZsUkCY/573fv5Isc86dBLA7HeqLEMIzywakqsdF5EBSciCE8F5Jicvz/KkY4zyAf/qUr8/zfCrG+DUAC/LuUNXXRORECvDZGONbg0AN9FDKqp9FJAPwhvf+aFlYVV+x7CH5VQhhZ9/aeRHZQfLVEMLp8ppz7k0AsyTbJDfHGC0OF4yBgFT1cxF5muSVEMLmfqEE+DhJy55P+ozuIbm7KIpDrVbrl35ZVf1VRCZJDry6QYDWqeqN9OZsDyFcqMqM5azneb6j0WictzcrhGAP5a2yfBmQXc8DWZZtyrLschK4vxwHyzE8ZK9T1X+XOrABsmx6G8BM2tROsbNK9oeqsf/FcQDXSJ6yxJFyNq0FgmE2iqI4KM65GwnlOQAWoOatR+0VBrDrLoH81F5zABb0hwA8B+AF85QBYjI67b2fd84dsVQHMF+nXFgJYCtnAEz1nhTnnP22OYwAmRdGHqqKq5GHRh6q8kDV+iiGRh6q8kDV+iiGVstDW7333/c6gzUqP4557w87554AcLFbfvS6AABWR8+JyCwAa4fXoh6y0vWYiFgTucXac8mybKrZbF4cUEevBaAFt1sUxc5u15Hn+YSI7DXPiMiGVF7edUAk/xCR6ySNM/jAQmZRX/Z/lLBL9WXd+RGgPt5g0ZWpqjWM71vnavdb9aasZJ3khtSU7gshnBl6ZQCst//BCIGVGKsrk4iMx4f19mVdmTEczWZzXZrs9kwk94vIFQB7rLEzpSJiJNadQfJkOow1nh+RnBQRI6xsdGnhTqdzq9VqmZ5FTFoVpdcL9NrN5LA/Tu99pb3KDSnzRoCGxuJy+v979sr+ThWAZc4cAGP0jbIxqvj5snsTr23/3ka1HEx0cJdq8d4/XPUs1ArqQZ8VjEntdDrT7Xb78oL3Isu2NJtN+/pjFOGdYWRUjPHdVQFkShLPbB9eNtrpSR4OIdhHmEVDVbeJiFHA5sWrJM/08dxL4roNXfIinLOQOMIAAAAASUVORK5CYII="},d546:function(t,e,n){t.exports=n.p+"img/centerLogo.a6a7eaae.png"}});