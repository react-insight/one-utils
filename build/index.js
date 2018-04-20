!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["export"],n):n(e.oneUtils={},e.domain)}(this,function(e,n){"use strict";var t=function(e){return"[object Object]"===Object.prototype.toString.call(e)},r=function(e){return"string"==typeof e},o=function(e){return"function"==typeof e},i=function(e){return void 0===e},c=function(e){return"number"==typeof e},u=0,a=1,s=2,f=3,l="unknown",g=function(e){return e.constructor.toString().match(/^function\s+(\w+)\s*\(\)\s*\{\s*\[native code\]\s*\}$/)[1]}(window||global),y=function(){return"Window"===g?u:"Object"===g?s:-1!==["DedicatedWorkerGlobalScope","SharedWorkerGlobalScope","ServiceWorkerGlobalScope"].indexOf(g)?f:l},d=(function(){function e(e){this.value=e}function n(n){var t,r;function o(t,r){try{var c=n[t](r),u=c.value;u instanceof e?Promise.resolve(u.value).then(function(e){o("next",e)},function(e){o("throw",e)}):i(c.done?"return":"normal",c.value)}catch(e){i("throw",e)}}function i(e,n){switch(e){case"return":t.resolve({value:n,done:!0});break;case"throw":t.reject(n);break;default:t.resolve({value:n,done:!1})}(t=t.next)?o(t.key,t.arg):r=null}this._invoke=function(e,n){return new Promise(function(i,c){var u={key:e,arg:n,resolve:i,reject:c,next:null};r?r=r.next=u:(t=r=u,o(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}),h=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),v=function(){function e(n){d(this,e),this.engine=n}return h(e,[{key:"querySelector",value:function(e){return this.nodeList=this.engine.document.querySelector(""+e),this.nodeList}},{key:"querySelectorAll",value:function(e){return this.nodeList=this.engine.document.querySelectorAll(""+e),this.nodeList}},{key:"getBoundingClientRect",value:function(e){return o(e)&&e(this.nodeList.getBoundingClientRect()),this.nodeList.getBoundingClientRect()}}]),e}(),p=(function(){function e(n){d(this,e),this.engine=n}h(e,[{key:"querySelector",value:function(e){return this.nodeList=this.engine.createSelectorQuery().select(e),this.nodeList}},{key:"querySelectorAll",value:function(e){return this.nodeList=this.engine.createSelectorQuery().selectAll(""+e),this.nodeList}},{key:"getBoundingClientRect",value:function(e){var n=this;return new Promise(function(r,i){n.nodeList.boundingClientRect().exec(function(n){var i=t(n[0])?n[0]:n;o(e)&&e(i),r(i)})})}}])}(),function(e){var n=y(),t=null;return n===u&&(t=new v(e)),n===a&&(t=new WebAdapter(e)),t}),m=function(e){return function(n){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return new Promise(function(t,o){return e.apply(void 0,[Object.assign({},n,{success:t,fail:o})].concat(r))})}},w=function(e){if(t(e)){var n=e.key,c=e.data,u=e.success,a=e.fail,s=(e.complete,e.sync);if(!r(n)&&!i(n))return!1;if(!r(c)||!t(c))return!1;if(!o(u)&&!s&&!i(a))return!1;if(!o(a)&&!s&&!i(a))return!1}return!1},S=function(){if(w(itemInfo)){var e=itemInfo,n=e.key,t=e.data,r=(e.success,e.fail,e.complete,e.sync);try{return r?wx.setStorageSync(n,t):wx.setStorage(itemInfo)}catch(e){console.warn("请检查传入的参数是否正确"+itemInfo)}}console.warn("请检查传入的参数是否正确"+itemInfo)},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(w(e)){var n=e.key,t=(e.data,e.success,e.fail,e.complete,e.sync);try{return t?wx.getStorageSync(n):wx.getStorage(e)}catch(n){console.warn("请检查传入的参数是否正确"+e)}}console.warn("请检查传入的参数是否正确"+e)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(w(e))try{e.success,e.fail,e.complete;return e.sync?wx.getStorageInfoSync():wx.getStorage(e)}catch(n){console.warn("请检查传入的参数是否正确"+e)}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(w(e)){var n=info,t=n.key,r=(n.success,n.fail,n.complete,n.sync);try{r&&wx.removeStorageSync(t),wx.removeStorage(e)}catch(e){console.warn("请检查传入的参数是否正确"+info)}}console.warn("请检查传入的参数是否正确"+info)},I=function(e){return e?wx.clearStorageSync():wx.clearStorage()},A=new(function(){function e(){d(this,e)}return h(e,[{key:"init",value:function(e){var n=e.engine;this.AdapterIns=p(n)}},{key:"querySelector",value:function(e){return this.AdapterIns.querySelector(e)}},{key:"querySelectorAll",value:function(e){return this.selector=e,this.AdapterIns.querySelectorAll(e)}},{key:"getBoundingClientRect",value:function(e){return this.AdapterIns.getBoundingClientRect(e)}}]),e}()),P=function(e){return new Promise(function(n,t){return wx["getSystemInfo"+(e?"Sync":"")]({success:n,fail:t})})},q=function(){},L=function(){return new Promise(function(e,n){return wx.login({success:e,fail:n,complete:q})})},j=function(){return new Promise(function(e,n){return wx.getUserInfo({success:e,fail:n,complete:q})})},C=function(){return new Promise(function(e,n){wx.getLocation({type:"wgs84",success:e,fail:n,complete:q})})},O=function(e){var n=e.url,t=e.method,r=e.data,o=e.header;return new Promise(function(e,i){return wx.request({url:n,data:r,method:t,header:o,success:e,fail:i,complete:q})})},$=function(){var e=getCurrentPages();return e[e.length-1].route},W=function(){var e=$(),n=currentPage.options,t=e+"?";for(var r in n){t+=r+"="+n[r]+"&"}return t=t.substring(0,t.length-1)},R=Object.prototype.hasOwnProperty,_=-1,B={},U={on:function(e,n,t){B[e]||(B[e]=[]);var r=config.nameSpace+"-uid-"+_++;return B[e].push({context:t,cb:n,token:r}),r},clearAll:function(){B={}},clear:function(e){B[e]&&delete B[e]},off:function(e){var n="string"==typeof e&&(R.call(B,e)||function(e){for(var n in B)if(R.call(B,n)&&0===n.indexOf(e))return!0;return!1}(e)),t=!n&&"string"==typeof e,r="function"==typeof e,o=null,i=!0,c=null;if(!n){for(o in B)if(R.call(B,o))for(var u=0,a=(c=B[o]).length;u<a;u++)t&&c[u].token===e?(c.splice(u,1),i=e):r&&c[u].cb===e&&(B[o].splice(u,1),i=!0);return i}U.clear(e)},once:function(e,n){B[e]||(B[e]=[]),B[e].push({context:this,cb:n,once:!0})},trigger:function(e,n,t){if(R.call(B,e))return!0===t?setTimeout(o,0):o(),!0;function r(e,n,t){function r(n){e.cb&&e.cb.call(e.context,n),e.once&&(e.cb=function(){})}if(!0===t)try{r(n)}catch(e){setTimeout((o=e,function(){throw o}),0)}var o;r(n)}function o(){if(R.call(B,e))for(var o=B[e],i=o.length,c=0;c<i;c++)r(o[c],n,t)}}},E={phoneNumber:/^[1][3,4,5,7,8][0-9]{9}$/,email:/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/,qq:/^[0-9]{5,10}$/},G=function(e){return console.log(e)},T=U.on,z=U.off,D=U.trigger,N=U.once;e.create=function(e){var n=e.engine;return A.init({engine:n}),{isWxAppEnv:!1,getEnv:y,isObject:t,isString:r,isFunction:o,isUndefined:i,isNumber:c,setItem:S,getItem:b,removeAll:I,removeItem:k,getAll:x,isVaildItemParams:w,fetch:O,getLoginCode:L,getUserInfo:j,getJWD:C,getSystemInfo:P,promisfy:m,getCurrentPageUrl:$,getCurrentPageUrlWithArgs:W,$on:T,$off:z,$trigger:D,$once:N,regex:E,$log:G,dom:A,adapter:p,engine:n}},Object.defineProperty(e,"__esModule",{value:!0})});
