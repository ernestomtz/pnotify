!function(t,e){if("function"==typeof define&&define.amd)define("PNotifyCallbacks",["exports","./PNotify.html"],e);else if("undefined"!=typeof exports)e(exports,require("./PNotify.html"));else{var n={};e(n,t.PNotify),t.PNotifyCallbacks=n}}(this,function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=e)&&n.__esModule?n:{default:n};var o,i,s,f,a,l,u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=r.default.prototype.open,h=r.default.prototype.close,_=function(t,e,n){var r=t?t.get("modules"):e.modules,o=r&&r.Callbacks?r.Callbacks:{};return o[n]?o[n]:function(){return!0}};function d(t){var e,n;n=t,(e=this)._observers={pre:v(),post:v()},e._handlers=v(),e._bind=n._bind,e.options=n,e.root=n.root||e,e.store=e.root.store||n.store,this._state=y({},t.data),this._fragment=(this._state,{c:p,m:p,p:p,u:p,d:p}),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}function p(){}function y(t){for(var e,n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(e in n)t[e]=n[e]}return t}function m(t){this.destroy=p,this.fire("destroy"),this.set=this.get=p,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function v(){return Object.create(null)}function b(t){for(;t&&t.length;)t.pop()()}function g(t,e,n,r,o){for(var i in e)if(n[i]){var s=r[i],f=o[i],a=e[i];if(a)for(var l=0;l<a.length;l+=1){var u=a[l];u.__calling||(u.__calling=!0,u.call(t,s,f),u.__calling=!1)}}}r.default.prototype.open=function(){if(!1!==_(this,null,"before_open")(this)){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];c.apply(this,e),_(this,null,"after_open")(this)}},r.default.prototype.close=function(t){if(!1!==_(this,null,"before_close")(this,t)){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];h.apply(this,[t].concat(n)),_(this,null,"after_close")(this,t)}},y(d.prototype,{destroy:m,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(!n)return;for(var r=0;r<n.length;r+=1)n[r].call(this,e)},observe:function(t,e,n){var r=n&&n.defer?this._observers.post:this._observers.pre;(r[t]||(r[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1);return{cancel:function(){var n=r[t].indexOf(e);~n&&r[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){if(this._set(y({},t)),this.root._lock)return;this.root._lock=!0,b(this.root._beforecreate),b(this.root._oncreate),b(this.root._aftercreate),this.root._lock=!1},teardown:m,_set:function(t){var e=this._state,n={},r=!1;for(var o in t)i=t[o],s=e[o],(i!==s||i&&"object"===(void 0===i?"undefined":u(i))||"function"==typeof i)&&(n[o]=r=!0);var i,s;if(!r)return;this._state=y({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state);this._fragment&&(g(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),g(this,this._observers.post,n,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}}),d.prototype._recompute=p,o=r.default.alert,i=r.default.notice,s=r.default.info,f=r.default.success,a=r.default.error,l=function(t,e){_(null,e,"before_init")(e);var n=t(e);return _(n,null,"after_init")(n),n},r.default.alert=function(t){return l(o,t)},r.default.notice=function(t){return l(i,t)},r.default.info=function(t){return l(s,t)},r.default.success=function(t){return l(f,t)},r.default.error=function(t){return l(a,t)},t.default=d});
//# sourceMappingURL=PNotifyCallbacks.js.map