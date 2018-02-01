"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},PNotifyNonBlock=function(t){t=t&&t.__esModule?t.default:t;var e=/^on/,o=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,n=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,r=/^(scroll|resize|(un)?load|abort|error)$/,i=function(t,i,s){var a=void 0;if(i=i.toLowerCase(),document.createEvent&&t.dispatchEvent){if((i=i.replace(e,"")).match(o)?(t.getBoundingClientRect(),(a=document.createEvent("MouseEvents")).initMouseEvent(i,s.bubbles,s.cancelable,s.view,s.detail,s.screenX,s.screenY,s.clientX,s.clientY,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.button,s.relatedTarget)):i.match(n)?(a=document.createEvent("UIEvents")).initUIEvent(i,s.bubbles,s.cancelable,s.view,s.detail):i.match(r)&&(a=document.createEvent("HTMLEvents")).initEvent(i,s.bubbles,s.cancelable),!a)return;t.dispatchEvent(a)}else i.match(e)||(i="on"+i),a=document.createEventObject(s),t.fireEvent(i,a)},s=void 0;var a;function c(){var t=this,e=[],o=function(t,o,n){var r=document.elementFromPoint(o.clientX,o.clientY);t.refs.elem.classList.add("ui-pnotify-nonblock-hide");var a=document.elementFromPoint(o.clientX,o.clientY);t.refs.elem.classList.remove("ui-pnotify-nonblock-hide");var c=window.getComputedStyle(a).cursor;!function(t){for(var o=0;o<e.length;o++)if(e[o].elem===t)return;e.push({elem:t,cursorStyleValue:t.style.getPropertyValue("cursor"),cursorStylePriority:t.style.getPropertyPriority("cursor")})}(r),r.style.setProperty("cursor","auto"===c?"default":c,"important"),s&&s==a||(s&&(i(s,"mouseleave",o),i(s,"mouseout",o)),i(a,"mouseenter",o),i(a,"mouseover",o)),i(a,n,o),s=a},n=this.get("_notice");n.on("mouseenter",function(e){t.get("nonblock")&&e.stopPropagation&&(e.stopPropagation(),n.addModuleClass("ui-pnotify-nonblock-fade"))}),n.on("mouseleave",function(o){t.get("nonblock")&&o.stopPropagation&&o.stopPropagation(),s=null,function(){for(var t=0;t<e.length;t++)e[t].elem.style.setProperty("cursor",e[t].cursorStyleValue,e[t].cursorStylePriority);e.length=0}(),t.get("nonblock")&&n.removeModuleClass("ui-pnotify-nonblock-fade")}),n.on("mouseover",function(e){t.get("nonblock")&&e.stopPropagation&&e.stopPropagation()}),n.on("mouseout",function(e){t.get("nonblock")&&e.stopPropagation&&e.stopPropagation()}),n.on("mousemove",function(e){t.get("nonblock")&&e.stopPropagation&&(e.stopPropagation(),o(n,e,"onmousemove"))}),n.on("mousedown",function(e){t.get("nonblock")&&e.stopPropagation&&(e.stopPropagation(),e.preventDefault(),o(n,e,"onmousedown"))}),n.on("mouseup",function(e){t.get("nonblock")&&e.stopPropagation&&(e.stopPropagation(),e.preventDefault(),o(n,e,"onmouseup"))}),n.on("click",function(e){t.get("nonblock")&&e.stopPropagation&&(e.stopPropagation(),o(n,e,"onclick"))}),n.on("dblclick",function(e){t.get("nonblock")&&e.stopPropagation&&(e.stopPropagation(),o(n,e,"ondblclick"))})}function l(){var t,e,o=(t="style",document.createElement(t));o.id="svelte-2279676945-style",o.textContent="[ui-pnotify].ui-pnotify.ui-pnotify-nonblock-fade{opacity:.2 !important}[ui-pnotify].ui-pnotify.ui-pnotify-nonblock-hide{display:none !important}",e=o,document.head.appendChild(e)}function u(e){var o,n;n=e,(o=this)._observers={pre:m(),post:m()},o._handlers=m(),o._bind=n._bind,o.options=n,o.root=n.root||o,o.store=o.root.store||n.store,this._state=p(_extends({_notice:null,_options:{}},t.modules.NonBlock.defaults),e.data),document.getElementById("svelte-2279676945-style")||l();var r=c.bind(this);e.root?this.root._oncreate.push(r):this._oncreate=[r],this._fragment=(this._state,{c:f,m:f,p:f,u:f,d:f}),e.target&&(this._fragment.c(),this._fragment.m(e.target,e.anchor||null),h(this._oncreate))}function f(){}function p(t){for(var e,o,n=1,r=arguments.length;n<r;n++){o=arguments[n];for(e in o)t[e]=o[e]}return t}function h(t){for(;t&&t.length;)t.pop()()}function d(t){this.destroy=f,this.fire("destroy"),this.set=this.get=f,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function m(){return Object.create(null)}function _(t,e,o,n,r){for(var i in e)if(o[i]){var s=n[i],a=r[i],c=e[i];if(c)for(var l=0;l<c.length;l+=1){var u=c[l];u.__calling||(u.__calling=!0,u.call(t,s,a),u.__calling=!1)}}}return p(u.prototype,{initModule:function(t){this.set(t)}},{destroy:d,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var o=t in this._handlers&&this._handlers[t].slice();if(!o)return;for(var n=0;n<o.length;n+=1)o[n].call(this,e)},observe:function(t,e,o){var n=o&&o.defer?this._observers.post:this._observers.pre;(n[t]||(n[t]=[])).push(e),o&&!1===o.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1);return{cancel:function(){var o=n[t].indexOf(e);~o&&n[t].splice(o,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var o=this._handlers[t]||(this._handlers[t]=[]);return o.push(e),{cancel:function(){var t=o.indexOf(e);~t&&o.splice(t,1)}}},set:function(t){if(this._set(p({},t)),this.root._lock)return;this.root._lock=!0,h(this.root._beforecreate),h(this.root._oncreate),h(this.root._aftercreate),this.root._lock=!1},teardown:d,_set:function(t){var e=this._state,o={},n=!1;for(var r in t)i=t[r],s=e[r],(i!==s||i&&"object"===(void 0===i?"undefined":_typeof(i))||"function"==typeof i)&&(o[r]=n=!0);var i,s;if(!n)return;this._state=p({},e,t),this._recompute(o,this._state),this._bind&&this._bind(o,this._state);this._fragment&&(_(this,this._observers.pre,o,this._state,e),this._fragment.p(o,this._state),_(this,this._observers.post,o,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}}),u.prototype._recompute=f,(a=u).key="NonBlock",a.defaults={nonblock:!1},a.init=function(t){return new a({target:document.body,data:{_notice:t}})},t.modules.NonBlock=a,u}(PNotify);
//# sourceMappingURL=PNotifyNonBlock.js.map