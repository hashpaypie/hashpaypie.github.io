webpackJsonp([2],{"+Rp4":function(e,t,n){"use strict";(function(e){"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n,a=(function(e,t){e.exports=function e(t,n,a){var o,r,s=window,i="application/octet-stream",l=a||i,d=t,c=!n&&!a&&d,u=document.createElement("a"),h=function(e){return String(e)},f=s.Blob||s.MozBlob||s.WebKitBlob||h,p=n||"download";if(f=f.call?f.bind(s):Blob,"true"===String(this)&&(l=(d=[d,l])[0],d=d[1]),c&&c.length<2048&&(p=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var m=new XMLHttpRequest;return m.open("GET",c,!0),m.responseType="blob",m.onload=function(t){e(t.target.response,p,i)},setTimeout(function(){m.send()},0),m}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&f!==h))return navigator.msSaveBlob?navigator.msSaveBlob(g(d),p):x(d);d=g(d),l=d.type||i}else if(/([\x80-\xff])/.test(d)){for(var v=0,b=new Uint8Array(d.length),y=b.length;v<y;++v)b[v]=d.charCodeAt(v);d=new f([b],{type:l})}function g(e){for(var t=e.split(/[:;,]/),n=t[1],a="base64"==t[2]?atob:decodeURIComponent,o=a(t.pop()),r=o.length,s=0,i=new Uint8Array(r);s<r;++s)i[s]=o.charCodeAt(s);return new f([i],{type:n})}function x(e,t){if("download"in u)return u.href=e,u.setAttribute("download",p),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout(function(){u.click(),document.body.removeChild(u),!0===t&&setTimeout(function(){s.URL.revokeObjectURL(u.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,i)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var n=document.createElement("iframe");document.body.appendChild(n),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,i)),n.src=e,setTimeout(function(){document.body.removeChild(n)},333)}if(o=d instanceof f?d:new f([d],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(o,p);if(s.URL)x(s.URL.createObjectURL(o),!0);else{if("string"==typeof o||o.constructor===h)try{return x("data:"+l+";base64,"+s.btoa(o))}catch(e){return x("data:"+l+","+encodeURIComponent(o))}(r=new FileReader).onload=function(e){x(this.result)},r.readAsDataURL(o)}return!0}}(n={exports:{}},n.exports),n.exports);var o=function(e,t,n,a,o,r,s,i,l,d){"boolean"!=typeof s&&(l=i,i=s,s=!1);var c,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),a&&(u._scopeId=a),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):t&&(c=s?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),c)if(u.functional){var h=u.render;u.render=function(e,t){return c.call(t),h(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return n};const r={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,default:()=>null},exportFields:{type:Object,default:()=>null},defaultValue:{type:String,required:!1,default:""},header:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:()=>[]},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function},escapeCsv:{type:Boolean,default:!0},stringifyLongNum:{type:Boolean,default:!1}},computed:{idName:()=>"export_"+(new Date).getTime(),downloadFields(){return this.fields?this.fields:this.exportFields?this.exportFields:void 0}},methods:{async generate(){"function"==typeof this.beforeGenerate&&await this.beforeGenerate();let e=this.data;if("function"!=typeof this.fetch&&e||(e=await this.fetch()),!e||!e.length)return;let t=this.getProcessedJson(e,this.downloadFields);return"html"===this.type?this.export(this.jsonToXLS(t),this.name.replace(".xls",".html"),"text/html"):"csv"===this.type?this.export(this.jsonToCSV(t),this.name.replace(".xls",".csv"),"application/csv"):this.export(this.jsonToXLS(t),this.name,"application/vnd.ms-excel")},export:async function(e,t,n){let o=this.base64ToBlob(e,n);"function"==typeof this.beforeFinish&&await this.beforeFinish(),a(o,t,n)},jsonToXLS(e){let t="<thead>";const n=Object.keys(e[0]).length;let a=this;const o=this.header||this.$attrs.title;o&&(t+=this.parseExtraData(o,'<tr><th colspan="'+n+'">${data}</th></tr>')),t+="<tr>";for(let n in e[0])t+="<th>"+n+"</th>";return t+="</tr>",t+="</thead>",t+="<tbody>",e.map(function(e,n){t+="<tr>";for(let n in e)t+="<td>"+a.preprocessLongNum(a.valueReformattedForMultilines(e[n]))+"</td>";t+="</tr>"}),t+="</tbody>",null!=this.footer&&(t+="<tfoot>",t+=this.parseExtraData(this.footer,'<tr><td colspan="'+n+'">${data}</td></tr>'),t+="</tfoot>"),'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>'.replace("${table}",t).replace("${worksheet}",this.worksheet)},jsonToCSV(e){let t=this;var n=[];const a=this.header||this.$attrs.title;a&&n.push(this.parseExtraData(a,"${data}\r\n"));for(let t in e[0])n.push(t),n.push(",");return n.pop(),n.push("\r\n"),e.map(function(e){for(let a in e){let o=e[a]+"";t.escapeCsv&&(o='="'+o+'"').match(/[,"\n]/)&&(o='"'+o.replace(/\"/g,'""')+'"'),n.push(o),n.push(",")}n.pop(),n.push("\r\n")}),null!=this.footer&&n.push(this.parseExtraData(this.footer,"${data}\r\n")),n.join("")},getProcessedJson(e,t){let n=this.getKeys(e,t),a=[],o=this;return e.map(function(e,t){let r={};for(let t in n){let a=n[t];r[t]=o.getValue(a,e)}a.push(r)}),a},getKeys(e,t){if(t)return t;let n={};for(let t in e[0])n[t]=t;return n},parseExtraData(e,t){let n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)e[a]&&(n+=t.replace("${data}",e[a]));else n+=t.replace("${data}",e);return n},getValue(e,t){const n="object"!=typeof e?e:e.field;let a="string"!=typeof n?[]:n.split("."),o=this.defaultValue;return o=n?a.length>1?this.getValueFromNestedItem(t,a):this.parseValue(t[n]):t,e.hasOwnProperty("callback")&&(o=this.getValueFromCallback(o,e.callback)),o},valueReformattedForMultilines:e=>"string"==typeof e?e.replace(/\n/gi,"<br/>"):e,preprocessLongNum(e){if(this.stringifyLongNum){if(String(e).startsWith("0x"))return e;if(!isNaN(e)&&""!=e&&(e>99999999999||e<1e-13))return'="'+e+'"'}return e},getValueFromNestedItem(e,t){let n=e;for(let e of t)n&&(n=n[e]);return this.parseValue(n)},getValueFromCallback(e,t){if("function"!=typeof t)return this.defaultValue;const n=t(e);return this.parseValue(n)},parseValue(e){return e||0===e||"boolean"==typeof e?e:this.defaultValue},base64ToBlob(e,t){let n=window.btoa(window.unescape(encodeURIComponent(e))),a=atob(n),o=a.length,r=new Uint8ClampedArray(o);for(;o--;)r[o]=a.charCodeAt(o);return new Blob([r],{type:t})}}};var s=function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.idName},on:{click:this.generate}},[this._t("default",[this._v(" Download "+this._s(this.name)+" ")])],2)};s._withStripped=!0;var i=o({render:s,staticRenderFns:[]},void 0,r,void 0,!1,void 0,void 0,void 0);t.a=i}).call(t,n("DuR2"))},DZdz:function(e,t){},E2oL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={components:{downoadExcel:n("+Rp4").a},data:function(){return{options:[{value:"1",label:"lv1"},{value:"2",label:"lv2"},{value:"3",label:"lv3"},{value:"4",label:"lv4"},{value:"5",label:"lv5"}],value:null,tableData:[]}},created:function(){this.$contract&&this.init()},methods:{init:function(){},submit:function(){var e=this;if(["",null].includes(this.value))return this.$message("请输入正确的值");this.tableData=[],this.$contract.Manager.methods.addressesOfLevel(this.value).call(function(t,n){if(!t)for(var a=0;a<n.length;a++)e.tableData.push({address:n[a]})})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"level"},[n("div",{staticClass:"query"},[n("el-select",{attrs:{placeholder:"请选择等级"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("查询")])],1),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)},staticRenderFns:[]};var r=n("VU/8")(a,o,!1,function(e){n("DZdz")},"data-v-317f6208",null);t.default=r.exports}});