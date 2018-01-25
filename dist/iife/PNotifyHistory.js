"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},PNotifyHistory=function(t){t=t&&t.__esModule?t.default:t;var e,o={beforeOpen:function(){var e=this.get("max_in_stack");if(e!==1/0){var o=this.get("_options").stack;if(!1!==o&&t.notices&&t.notices.length>e){for(var n="top"===o.push,i=[],s=0,r=n?0:t.notices.length-1;n?r<t.notices.length:r>=0;n?r++:r--)-1!==["opening","open"].indexOf(t.notices[r].get("_state"))&&t.notices[r].get("stack")===o&&(s>=e?i.push(t.notices[r]):s++);for(var a=0;a<i.length;a++)i[a].close(!1)}}}};function n(e){var o,n;n=e,(o=this)._observers={pre:c(),post:c()},o._handlers=c(),o._bind=n._bind,o.options=n,o.root=n.root||o,o.store=o.root.store||n.store,this._state=s(_extends({_notice:null,_options:{}},t.modules.History.defaults),e.data);var a=function(){var t=this;this.on("initModule",function(e){if(t.set(e),t.get("history")){var o=t.get("_notice");o.get("destroy")&&o.set({destroy:!1})}})}.bind(this);e.root?this.root._oncreate.push(a):this._oncreate=[a],this._fragment=(this._state,{c:i,m:i,p:i,u:i,d:i}),e.target&&(this._fragment.c(),this._fragment.m(e.target,e.anchor||null),r(this._oncreate))}function i(){}function s(t){for(var e,o,n=1,i=arguments.length;n<i;n++){o=arguments[n];for(e in o)t[e]=o[e]}return t}function r(t){for(;t&&t.length;)t.pop()()}function a(t){this.destroy=i,this.fire("destroy"),this.set=this.get=i,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function c(){return Object.create(null)}function h(t,e,o,n,i){for(var s in e)if(o[s]){var r=n[s],a=i[s],c=e[s];if(c)for(var h=0;h<c.length;h+=1){var f=c[h];f.__calling||(f.__calling=!0,f.call(t,r,a),f.__calling=!1)}}}return s(n.prototype,o,{destroy:a,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var o=t in this._handlers&&this._handlers[t].slice();if(!o)return;for(var n=0;n<o.length;n+=1)o[n].call(this,e)},observe:function(t,e,o){var n=o&&o.defer?this._observers.post:this._observers.pre;(n[t]||(n[t]=[])).push(e),o&&!1===o.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1);return{cancel:function(){var o=n[t].indexOf(e);~o&&n[t].splice(o,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var o=this._handlers[t]||(this._handlers[t]=[]);return o.push(e),{cancel:function(){var t=o.indexOf(e);~t&&o.splice(t,1)}}},set:function(t){if(this._set(s({},t)),this.root._lock)return;this.root._lock=!0,r(this.root._beforecreate),r(this.root._oncreate),r(this.root._aftercreate),this.root._lock=!1},teardown:a,_set:function(t){var e=this._state,o={},n=!1;for(var i in t)r=t[i],a=e[i],(r!==a||r&&"object"===(void 0===r?"undefined":_typeof(r))||"function"==typeof r)&&(o[i]=n=!0);var r,a;if(!n)return;this._state=s({},e,t),this._recompute(o,this._state),this._bind&&this._bind(o,this._state);this._fragment&&(h(this,this._observers.pre,o,this._state,e),this._fragment.p(o,this._state),h(this,this._observers.post,o,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}}),n.prototype._recompute=i,(e=n).key="History",e.defaults={history:!0,max_in_stack:1/0},e.init=function(t){return new e({target:document.body})},e.showLast=function(e){if(void 0===e&&(e=t.defaultStack),!1!==e){var o="top"===e.push,n=o?0:t.notices.length-1,i=void 0;do{if(!(i=t.notices[n]))return;n+=o?1:-1}while(i.get("stack")!==e||!i.get("_modules").History.get("history")||"opening"===i.get("_state")||"open"===i.get("_state"));i.open()}},e.showAll=function(e){if(void 0===e&&(e=t.defaultStack),!1!==e)for(var o=0;o<t.notices.length;o++){var n=t.notices[o];!0!==e&&n.get("stack")!==e||!n.get("_modules").History.get("history")||n.open()}},t.modules.History=e,n}(PNotify);
//# sourceMappingURL=PNotifyHistory.js.map