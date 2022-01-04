(function(e){function t(t){for(var a,s,c=t[0],o=t[1],u=t[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"11bd":function(e,t,n){"use strict";n.r(t),n.d(t,"ADOClient",(function(){return m}));var a=n("1da1"),r=n("d4ec"),i=n("bee2"),s=n("ade3"),c=(n("b64b"),n("d3b7"),n("159b"),n("e9c4"),n("96cf"),n("2a65")),o=n("bc3a"),u=n.n(o),l=n("3a1f"),p=n("19a4"),f=n("a4fa"),d=n("0381"),m=function(){function e(){Object(r["a"])(this,e),Object(s["a"])(this,"account",null),Object(s["a"])(this,"user",null),Object(s["a"])(this,"project",null),Object(s["a"])(this,"host",null),Object(s["a"])(this,"token",null),Object(s["a"])(this,"authHeader",null),Object(s["a"])(this,"VSS",null),Object(s["a"])(this,"axiosInstance",null)}return Object(i["a"])(e,[{key:"init",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.VSS=t||window.VSS,t=this.VSS,n=this,t.init(),t.ready((function(){t.require(["VSS/Authentication/Services"],(function(e){t.getAccessToken().then((function(a){n.token=a,n.authHeader=e.authTokenManager.getAuthorizationHeader(a),n.user=t.getWebContext().user,n.account=t.getWebContext().account,n.project=t.getWebContext().project,n.host=t.getWebContext().host,n.axiosInstance=u.a.create({baseURL:n.host.uri,timeout:3e3,headers:{authorization:n.authHeader,"Content-Type":"application/json"}})}))}))})),e.next=7,c["init"]();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getProjects",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(l["getClient"])(p["CoreRestClient"]),e.next=3,t.getProjects();case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"createRepo",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,r){var i,s,c,o,u,p,d,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=r||{main:{description:"Main Branch"}},r=Object.keys(r),i=Object(l["getClient"])(f["GitRestClient"]),e.next=5,i.createRepository({name:t},n);case 5:return s=e.sent,c=Object.keys(a),o=[],c.forEach((function(e){o.push({changeType:"add",item:{path:e},newContent:{content:a[e],contentType:"rawtext"}})})),e.next=11,i.createPush({refUpdates:[{name:"refs/heads/"+r[0],oldObjectId:"0000000000000000000000000000000000000000"}],commits:[{comment:"Initial commit.",changes:o}]},s.id,n);case 11:if(u=e.sent,!(r.length>1)){e.next=23;break}p=u.commits[0].commitId,d=1;case 15:if(!(d<r.length)){e.next=23;break}return e.next=18,i.updateRefs([{name:"refs/heads/"+r[d],oldObjectId:"0000000000000000000000000000000000000000",newObjectId:p}],s.id,n);case 18:m=e.sent,p=m[0].newObjectId;case 20:d++,e.next=15;break;case 23:return e.abrupt("return",s);case 24:case"end":return e.stop()}}),e)})));function t(t,n,a,r){return e.apply(this,arguments)}return t}()},{key:"createVariableGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=JSON.stringify({name:t,type:"Vsts",description:t,variables:n,providerData:{name:t,description:t,projectReference:this.project},variableGroupProjectReferences:[{name:t,description:t,projectReference:this.project}]}),e.prev=1,e.next=4,this.axiosInstance({method:"post",url:"/".concat(this.project.id,"/_apis/distributedtask/variablegroups"),params:{"api-version":"6.0-preview.2"},data:a});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e["catch"](1),console.log(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"createPipeline",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,r){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=JSON.stringify({configuration:{path:t,repository:{id:n,type:"azureReposGit"},type:"yaml"},name:a,folder:"\\"+r}),e.prev=1,e.next=4,this.axiosInstance({method:"post",url:"/".concat(this.project.id,"/_apis/pipelines"),params:{"api-version":"6.1-preview.1"},data:i});case 4:return s=e.sent,e.abrupt("return",s.data);case 8:throw e.prev=8,e.t0=e["catch"](1),console.log(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t,n,a,r){return e.apply(this,arguments)}return t}()},{key:"getVariableGroups",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(l["getClient"])(d["TaskAgentRestClient"]),e.next=3,n.getVariableGroups(t);case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}()},"11da":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n("b85c"),r=n("53ca"),i=(n("fb6a"),n("b64b"),function e(t){if("object"===Object(r["a"])(t)){if(t instanceof Date)return t.toISOString().slice(0,10);if(Array.isArray(t)){var n,i=[],s=Object(a["a"])(t);try{for(s.s();!(n=s.n()).done;){var c=n.value,o=e(c);void 0!==o&&i.push(o)}}catch(f){s.e(f)}finally{s.f()}if(i.length>0)return i}else{var u={};for(var l in t){var p=e(t[l]);void 0!==p&&(u[l]=p)}if(Object.keys(u).length>0)return u}}else if(void 0!==t&&""!==t)return t}),s=function e(t,n){if("object"===t.type){var a={};for(var r in t.properties)a[r]=e(t.properties[r],n)||t.properties[r].default;return a}return"array"===t.type?[e(t.items,n)]:void 0===n?n:n(t)};function c(e,t){return s(e,t)}function o(e){var t=i(e);return void 0===t?{}:t}},"2cfa":function(e,t,n){var a=n("c973").default;n("96cf"),n("d3b7"),n("159b"),n("b64b");var r=n("f7b3");function i(e,t){return s.apply(this,arguments)}function s(){return s=a(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,i){a(regeneratorRuntime.mark((function a(){var s,c,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:try{s={},c=t["scaffolding.json"],o=JSON.parse(c),Object.keys(t).forEach((function(a){var i=!0;if(o.rules&&o.rules[a]&&"function"===typeof o.rules[a]?i=o.rules[a](o.variables):o.rules&&o.rules[a]&&-1!=Object.keys(o.rules).indexOf(a)&&(i=!!n&&n[o.rules[a]]),n||(n={},Object.keys(o.variables).forEach((function(e){n[e]=o.variables[e].default}))),"scaffolding.json"!=a&&i){var c=t[a];try{var u=r.template(c);c=u(n)}catch(l){console.log(l)}s[a]=c}e(s)}))}catch(u){i(u)}case 1:case"end":return a.stop()}}),a)})))()})));case 1:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}r.templateSettings={evaluate:/\{\%\{([\s\S]+?)\}\%\}/g,interpolate:/\{\%\{=([\s\S]+?)\}\%\}/g,encode:/\{\%\{!([\s\S]+?)\}\%\}/g,use:/\{\%\{#([\s\S]+?)\}\%\}/g,define:/\{\%\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\%\}/g,conditional:/\{\\%{\?(\?)?\s*([\s\S]*?)\s*\}\%\}/g,iterate:/\{\%\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\%\})/g,varname:"params",strip:!1,append:!0,selfcontained:!1},e.exports=i},3686:function(e,t,n){var a=n("c973").default;n("96cf"),n("d3b7"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("b64b");var r=n("c4e3");function i(e){return new Promise((function(t,n){var i={},s="scaffolding/"+e+".zip";a(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{c=new XMLHttpRequest,c.open("GET",s,!0),c.responseType="arraybuffer",c.onload=function(){if(200==this.status){var e=new Uint8Array(this.response),n=new r;n.loadAsync(e).then(function(){var e=a(regeneratorRuntime.mark((function e(n){var a,r,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=Object.keys(n.files),r=0;case 2:if(!(r<a.length)){e.next=12;break}if(s=n.file(a[r]),!s||s.dir){e.next=9;break}return c=a[r],e.next=8,s.async("string");case 8:i[c]=e.sent;case 9:r++,e.next=2;break;case 12:t(i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},c.send()}catch(o){n(o)}case 1:case"end":return e.stop()}}),e)})))()}))}e.exports=i},"3ef3":function(e,t,n){"use strict";n("a67a")},5091:function(e,t,n){"use strict";n("6ec9")},5450:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[n("MainPanel")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns",staticStyle:{height:"100%",overflow:"hidden"}},[n("div",{staticClass:"column is-half"},[n("div",{staticClass:"card",staticStyle:{padding:"10px"}},[e._m(0),n("form",{staticClass:"box"},[n("b-field",{attrs:{label:"Select Scaffolding",labelPosition:"on-border"}},[n("b-select",{staticStyle:{"padding-bottom":"20px"},attrs:{placeholder:"Select Scaffolding",expanded:""},on:{input:e.onScaffoldingChanged},model:{value:e.scaffoldingsIdx,callback:function(t){e.scaffoldingsIdx=t},expression:"scaffoldingsIdx"}},e._l(e.scaffoldings,(function(t,a){return n("option",{key:t,domProps:{value:a}},[e._v(" "+e._s(t)+" ")])})),0)],1),e.adoProjects?[n("b-field",{attrs:{label:"Azure DevOps Project",labelPosition:"on-border"}},[n("b-select",{staticStyle:{"padding-bottom":"20px"},attrs:{placeholder:"Select Project",expanded:""},model:{value:e.adoProject,callback:function(t){e.adoProject=t},expression:"adoProject"}},e._l(e.adoProjects,(function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(" "+e._s(t.name)+" ")])})),0)],1),n("b-field",{attrs:{label:"Repository Name",labelPosition:"on-border"}},[n("b-input",{staticStyle:{"padding-bottom":"20px"},attrs:{expanded:""},model:{value:e.repoName,callback:function(t){e.repoName=t},expression:"repoName"}})],1),e.scaffoldingSettings.variablegroups?n("b-field",{staticStyle:{"padding-bottom":"10px"}},[n("b-checkbox",{attrs:{value:e.createVariableGroups}},[n("span",{staticStyle:{"padding-left":"10px"}},[e._v("Create Variable Group")])])],1):e._e(),e.scaffoldingSettings.variablegroups?n("b-field",{staticStyle:{"padding-bottom":"10px"}},[n("b-checkbox",{attrs:{value:e.createPipelines}},[n("span",{staticStyle:{"padding-left":"10px"}},[e._v("Create DevOps Pipeline")])])],1):e._e()]:e._e(),n("schema-form",{attrs:{schema:e.schema,ado:e.adoProjects},on:{submit:function(t){return e.handleSubmit()},submit2:function(t){return e.previewCode()},submit3:function(t){return e.downloadCode()}},model:{value:e.variables,callback:function(t){e.variables=t},expression:"variables"}}),e.showNotification?n("b-notification",{staticStyle:{"margin-top":"10px"},attrs:{"aria-close-label":"Close notification"}},[e._v(" "+e._s(e.notificationMsg)+" ")]):e._e()],2)])]),n("div",{staticClass:"column",staticStyle:{height:"100%",overflow:"auto"}},[n("div",{staticClass:"card",staticStyle:{padding:"10px"}},[e._m(1),n("section",e._l(e.paths,(function(t){return n("b-collapse",{key:t,staticClass:"card",attrs:{animation:"slide","aria-id":"contentIdForA11y3",open:!1},scopedSlots:e._u([{key:"trigger",fn:function(a){return[n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"contentIdForA11y3"}},[n("p",{staticClass:"card-header-title"},[e._v(" "+e._s(t)+" ")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:a.open?"menu-down":"menu-up"}})],1)])]}}],null,!0)},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("pre",[e._v(e._s(e.loadCode(t))+"\n")])])])])})),1)])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._v("Scaffolding Settings")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._v("Code Preview")])])}],o=n("1da1"),u=(n("96cf"),n("b64b"),n("d3b7"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e._t("header",(function(){return[n("b-notification",{directives:[{name:"show",rawName:"v-show",value:e.activeErrorMessages.length,expression:"activeErrorMessages.length"}],attrs:{type:"is-danger",closable:!1,id:"error-messages"}},e._l(e.activeErrorMessages,(function(t,a){return n("div",{key:a},[n("div",[e._v(e._s(t))])])})),0)]}),{errorMessages:e.activeErrorMessages}),e._l(e.schema.properties,(function(t,a){return[e._t(a,(function(){return[n(e.element,{key:a,tag:"component",staticStyle:{"padding-bottom":"20px"},attrs:{schema:t,value:e.items[a]},on:{input:function(t){return e.updateValue(t,a)}}})]}),{item:{key:a,schema:t,value:e.items[a],update:e.updateValue}})]})),e._t("actions",(function(){return[n("div",{staticClass:"buttons"},[e.ado?n("button",{staticClass:"button is-info",attrs:{type:"submit"}},[n("span",[e._v("Create")])]):e._e(),n("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:e.submit3}},[n("span",[e._v("Download")])])])]}))],2)}),l=[],p=(n("d81d"),n("99af"),n("783b")),f=n.n(p),d=n("dc2d"),m=n.n(d),h=n("f046"),b=n("11da"),v=new f.a({allErrors:!0,jsonPointers:!0,format:"full"}),g={name:"SchemaForm",components:{FormElement:h["default"]},props:{schema:{type:Object},value:{type:Object},element:{default:function(){return"form-element"}},ado:{type:Object}},data:function(){return{items:void 0!==this.value?this.value:Object(b["b"])(this.schema),activeErrorMessages:[]}},watch:{schema:function(){this.items=Object(b["b"])(this.schema),v=new f.a({allErrors:!0,jsonPointers:!0,format:"full"})}},methods:{submit:function(){this.validate()?(this.activeErrorMessages=[],this.$emit("input",Object(b["a"])(this.items)),this.$emit("submit")):this.buildErrors()},submit2:function(){this.validate()?(this.activeErrorMessages=[],this.$emit("input",Object(b["a"])(this.items)),this.$emit("submit2")):this.buildErrors()},submit3:function(){this.validate()?(this.activeErrorMessages=[],this.$emit("input",Object(b["a"])(this.items)),this.$emit("submit3")):this.buildErrors()},validate:function(){return v.validate(this.schema,Object(b["a"])(this.items))},buildErrors:function(){var e=this;this.activeErrorMessages=v.errors.map((function(t){if("required"===t.keyword){var n=0===t.dataPath.length?"/properties/".concat(t.params.missingProperty):t.schemaPath.substring(1,t.schemaPath.length-8)+"properties/".concat(t.params.missingProperty),a=m.a.get(e.schema,n);return a.title+" is required"}if("format"===t.keyword){var r=t.schemaPath.substring(1,t.schemaPath.length-7),i=m.a.get(e.schema,r);return"".concat(i.title," is not in the correct format. Eg: ").concat(i.example)}if("pattern"===t.keyword){var s=t.schemaPath.substring(1,t.schemaPath.length-8),c=m.a.get(e.schema,s);return"".concat(c.title," is not in the correct format. Eg: ").concat(c.example)}}))},updateValue:function(e,t){this.items[t]=e,this.submit2()}}},y=g,j=n("2877"),x=Object(j["a"])(y,u,l,!1,null,null,null),w=x.exports,O=n("8a03"),_=n.n(O),k=n("3686"),C=n("2cfa"),S=n("c4e3"),P=n("21a6"),R=n("f339"),E=n("11bd"),$=E.ADOClient,V={name:"MainPanel",components:{SchemaForm:w},props:{msg:String},computed:{paths:function(){return Object.keys(this.convertedCode)}},data:function(){return{adoProjects:null,adoProject:null,scaffoldings:R,repoName:"app-repo",scaffoldingsIdx:0,scaffoldingObj:{},scaffoldingSettings:{},convertedCode:{},variables:null,schema:{},showNotification:!1,notificationMsg:"",adoClient:null,createVariableGroups:!0,createPipelines:!0}},methods:{handleSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C(e.scaffoldingObj,e.variables);case 2:return e.convertedCode=t.sent,t.next=5,e.createRepo();case 5:if(n=t.sent,e.createVariableGroups)try{Object.keys(e.scaffoldingSettings.variablegroups).forEach((function(t){e.adoClient.createVariableGroup(t,e.scaffoldingSettings.variablegroups[t])}))}catch(a){console.log(a)}if(e.createPipelines)try{Object.keys(e.scaffoldingSettings.pipelines).forEach((function(t){e.adoClient.createPipeline(e.scaffoldingSettings.pipelines[t].path,n.id,t,e.scaffoldingSettings.pipelines[t].folder)}))}catch(a){console.log(a)}case 8:case"end":return t.stop()}}),t)})))()},previewCode:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C(e.scaffoldingObj,e.variables);case 2:e.convertedCode=t.sent;case 3:case"end":return t.stop()}}),t)})))()},downloadCode:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,a=new S,r=Object.keys(e.convertedCode),r.forEach((function(t){a.file(t,e.convertedCode[t])})),a.generateAsync({type:"blob"}).then((function(e){P.saveAs(e,n.repoName+".zip")})),e.showNotification=!0,e.notificationMsg="Start Downloading",setTimeout((function(){n.showNotification=!1}),5e3);case 8:case"end":return t.stop()}}),t)})))()},loadCode:function(e){return this.convertedCode[e]},onScaffoldingChanged:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadScaffodling();case 1:case"end":return t.stop()}}),t)})))()},loadScaffodling:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.scaffoldings[e.scaffoldingsIdx],t.next=3,k(n);case 3:return e.scaffoldingObj=t.sent,a=e.scaffoldingObj["scaffolding.json"],r=JSON.parse(a),e.schema={type:"object",properties:r.variables},e.scaffoldingSettings=r,t.next=10,C(e.scaffoldingObj,e.variables);case 10:e.convertedCode=t.sent,e.$forceUpdate();case 12:case"end":return t.stop()}}),t)})))()},getProjects:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.adoProjects=e.adoClient.getProjects();case 1:case"end":return t.stop()}}),t)})))()},createVariableGroup:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.adoClient.createVariableGroup("test0001");case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},getVariableGroups:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.adoClient.getVariableGroups(e.adoProject.id);case 1:case"end":return t.stop()}}),t)})))()},createRepo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.adoClient.createRepo(e.repoName,e.adoProject.id,e.convertedCode,e.scaffoldingSettings.branches);case 2:return n=t.sent,a=e,e.showNotification=!0,e.notificationMsg="Create Repo Successfully",setTimeout((function(){a.showNotification=!1}),5e3),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.adoClient=new $,t.next=4,e.adoClient.init();case 4:return t.next=6,e.adoClient.getProjects();case 6:e.adoProjects=t.sent,e.adoProjects.length>0&&(e.adoProject=e.adoProjects[0]),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))(),Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadScaffodling();case 1:case"end":return t.stop()}}),t)})))()}},M=V,I=Object(j["a"])(M,s,c,!1,null,"674d0a63",null),N=I.exports,A={name:"App",components:{MainPanel:N}},G=A,T=(n("034f"),Object(j["a"])(G,r,i,!1,null,null,null)),D=T.exports,F=n("7583");n("5abe");a["default"].use(_.a),a["default"].directive("autosize",{inserted:function(e){var t=e.querySelector("textarea");Object(F["a"])(t)}}),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(D)}}).$mount("#app")},"6ec9":function(e,t,n){},7791:function(e,t,n){},"77a3":function(e,t,n){},"7e41":function(e,t,n){"use strict";n("77a3")},"85ec":function(e,t,n){},a542:function(e,t,n){"use strict";n("7791")},a67a:function(e,t,n){},d31f:function(e,t,n){"use strict";n("5450")},f046:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.type,{tag:"component",attrs:{schema:e.schema,value:e.value},on:{input:function(t){return e.$emit("input",t)}}})},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"field"},[e.schema.title?n("legend",[e._v(e._s(e.schema.title))]):e._e(),e.schema.description?n("div",{staticClass:"content"},[e._v(e._s(e.schema.description))]):e._e(),e._l(e.schema.properties,(function(t,a){return n("form-element",{key:a,attrs:{schema:t,value:e.internalValue[a]},on:{input:function(t){return e.updateValue(t,a)}}})}))],2)},s=[],c=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"FormElementWrapper",components:{FormElement:function(){return Promise.resolve().then(n.bind(null,"f046"))}},props:["schema","value"],data:function(){return{internalValue:void 0!==this.value?this.value:{}}},watch:{value:function(e){this.internalValue=e}},methods:{updateValue:function(e,t){this.internalValue[t]=e,this.$emit("input",this.internalValue)}}}),o=c,u=(n("d31f"),n("2877")),l=Object(u["a"])(o,i,s,!1,null,"bc49ad20",null),p=l.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-input",{attrs:{value:e.value,placeholder:e.schema.example},on:{input:function(t){return e.$emit("input",t)}}})],1)},d=[],m={name:"TextElement",props:["schema","value"]},h=m,b=Object(u["a"])(h,f,d,!1,null,null,null),v=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-input",{attrs:{type:"textarea",minlength:e.schema.minLength,maxlength:e.schema.maxLength,value:e.value},on:{input:function(t){return e.$emit("input",t)}}})],1)},y=[],j={name:"TextareaElement",props:["schema","value"]},x=j,w=Object(u["a"])(x,g,y,!1,null,null,null),O=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-input",{attrs:{type:"number",min:e.schema.minimum,max:e.schema.maximum,step:"number"===e.schema.type?"any":"1",value:e.value},on:{input:function(t){e.$emit("input",Number(t))}}})],1)},k=[],C={name:"NumberElement",props:["schema","value"]},S=C,P=Object(u["a"])(S,_,k,!1,null,null,null),R=P.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-select",{attrs:{value:e.value,placeholder:e.schema.title},on:{input:function(t){return e.$emit("input",t)}}},e._l(e.schema.enum,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)],1)},$=[],V={name:"SelectElement",props:["schema","value"]},M=V,I=Object(u["a"])(M,E,$,!1,null,null,null),N=I.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field checkbox-field"},[n("b-checkbox",{attrs:{value:e.value},on:{input:function(t){return e.$emit("input",t)}}},[n("span",{staticClass:"checkbox-title"},[e._v(e._s(e.schema.title))]),e.schema.description?n("p",{staticClass:"help checkbox-desc"},[e._v(e._s(e.schema.description))]):e._e()])],1)},G=[],T={name:"CheckboxElement",props:["schema","value"]},D=T,F=(n("3ef3"),Object(u["a"])(D,A,G,!1,null,"71c273b0",null)),z=F.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[e.schema.title?n("label",{staticClass:"label"},[e._v(e._s(e.schema.title))]):e._e(),e._l(e.schema.items.anyOf,(function(t,a){return n("div",{key:a,staticClass:"field checkbox-field"},[n("b-checkbox",{attrs:{value:-1!==e.items.indexOf(t.enum[0])},on:{input:function(t){return e.updateValue(t,a)}}},[n("span",{staticClass:"checkbox-title"},[e._v(e._s(t.title))]),t.description?n("p",{staticClass:"help checkbox-desc"},[e._v(e._s(t.description))]):e._e()])],1)}))],2)},q=[],H=(n("a434"),n("11da")),W={name:"CheckboxGroupElement",props:["schema","value"],data:function(){return{items:void 0!==this.value?this.value:Object(H["b"])(this.schema)}},methods:{updateValue:function(e,t){var n=this.items.indexOf(this.schema.items.anyOf[t].enum[0]);e&&-1===n?this.items.push(this.schema.items.anyOf[t].enum[0]):e||-1===n||this.items.splice(n,1),this.$emit("input",this.items)}}},L=W,U=(n("a542"),Object(u["a"])(L,J,q,!1,null,"6f617e2c",null)),B=U.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},e._l(e.schema.anyOf,(function(t,a){return n("div",{key:a,staticClass:"field radio-field"},[n("b-radio",{attrs:{value:e.value,"native-value":t.enum[0]},on:{input:function(t){return e.$emit("input",t)}}},[n("span",{staticClass:"radio-title"},[e._v(e._s(t.title))])])],1)})),0)},K=[],Q={name:"RadioButtonElement",props:["schema","value"]},Y=Q,Z=(n("5091"),Object(u["a"])(Y,X,K,!1,null,"4613c018",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"field"},[e.schema.title?n("legend",[e._v(e._s(e.schema.title))]):e._e(),e._l(e.items,(function(t,a){return n("div",{key:a,staticClass:"columns"},[n("div",{staticClass:"column"},[n("form-element",{attrs:{schema:e.schema.items,value:t},on:{input:function(t){return e.updateValue(t,a)}}})],1),n("div",{staticClass:"column is-narrow"},[e.items.length>0?n("button",{key:"remove-"+a,staticClass:"button is-danger",attrs:{type:"button"},on:{click:function(t){return e.items.splice(a,1)}}},[e._v("Remove")]):e._e()])])})),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.addItem()}}},[e._v("Add Item")])],2)},ne=[],ae={name:"FormElementMultiple",components:{FormElement:function(){return Promise.resolve().then(n.bind(null,"f046"))}},props:["schema","value"],data:function(){return{items:void 0!==this.value?this.value:Object(H["b"])(this.schema)}},methods:{addItem:function(){this.items.push(Object(H["b"])(this.schema)[0])},updateValue:function(e,t){this.items.splice(t,1,e),this.$emit("input",this.items)}}},re=ae,ie=(n("7e41"),Object(u["a"])(re,te,ne,!1,null,"58c46062",null)),se=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.schema.title,message:e.schema.description,labelPosition:"on-border"}},[n("b-datepicker",{attrs:{value:e.value,placeholder:"Click to select date"},on:{input:function(t){return e.$emit("input",t)}}})],1)},oe=[],ue={name:"DatePickerElement",props:["schema","value"]},le=ue,pe=Object(u["a"])(le,ce,oe,!1,null,null,null),fe=pe.exports,de={name:"FormElement",props:["schema","value"],computed:{type:function(){var e=v;return void 0!==this.schema.widget?"textarea"===this.schema.widget&&(e=O):void 0!==this.schema.anyOf?e=ee:void 0!==this.schema.enum?e=N:"boolean"===this.schema.type?e=z:"array"===this.schema.type?e=void 0===this.schema.items.anyOf?se:B:"object"===this.schema.type?e=p:"integer"===this.schema.type||"number"===this.schema.type?e=R:"date"===this.schema.format&&(e=fe),e}}},me=de,he=Object(u["a"])(me,a,r,!1,null,null,null);t["default"]=he.exports},f339:function(e){e.exports=JSON.parse('["simple-repo","simple-repo-copy","simple-nodejs","azure-databricks-starterkit"]')}});
//# sourceMappingURL=app.474ccf54.js.map