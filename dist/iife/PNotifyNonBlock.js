"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},PNotifyNonBlock=function(t){t=t&&t.__esModule?t.default:t;var e,o=/^on/,n=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,r=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,i=/^(scroll|resize|(un)?load|abort|error)$/,s=function(t,e,s){var c=void 0;if(e=e.toLowerCase(),document.createEvent&&t.dispatchEvent){if((e=e.replace(o,"")).match(n)?(t.getBoundingClientRect(),(c=document.createEvent("MouseEvents")).initMouseEvent(e,s.bubbles,s.cancelable,s.view,s.detail,s.screenX,s.screenY,s.clientX,s.clientY,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.button,s.relatedTarget)):e.match(r)?(c=document.createEvent("UIEvents")).initUIEvent(e,s.bubbles,s.cancelable,s.view,s.detail):e.match(i)&&(c=document.createEvent("HTMLEvents")).initEvent(e,s.bubbles,s.cancelable),!c)return;t.dispatchEvent(c)}else e.match(o)||(e="on"+e),c=document.createEventObject(s),t.fireEvent(e,c)},c=void 0;function a(){var t=this,e=[],o=function(t,o,n){var r=document.elementFromPoint(o.clientX,o.clientY);t.refs.elem.classList.add("ui-pnotify-nonblock-hide");var i=document.elementFromPoint(o.clientX,o.clientY);t.refs.elem.classList.remove("ui-pnotify-nonblock-hide");var a=window.getComputedStyle(i).cursor;!function(t){for(var o in e)if(e[o].elem===t)return;e.push({elem:t,cursorStyleValue:t.style.getPropertyValue("cursor"),cursorStylePriority:t.style.getPropertyPriority("cursor")})}(r),r.style.setProperty("cursor","auto"===a?"default":a,"important"),c&&c==i||(c&&(s(c,"mouseleave",o),s(c,"mouseout",o)),s(i,"mouseenter",o),s(i,"mouseover",o)),s(i,n,o),c=i};this.on("initModule",function(n){t.set(n);var r=t.get("_notice");r.on("mouseenter",function(e){t.get("nonblock")&&(e.stopPropagation(),r.addModuleClass("ui-pnotify-nonblock-fade"))}),r.on("mouseleave",function(o){t.get("nonblock")&&o.stopPropagation(),c=null,function(){for(var t in e)e[t].elem.style.setProperty("cursor",e[t].cursorStyleValue,e[t].cursorStylePriority);e.length=0}(),t.get("nonblock")&&r.removeModuleClass("ui-pnotify-nonblock-fade")}),r.on("mouseover",function(e){t.get("nonblock")&&e.stopPropagation()}),r.on("mouseout",function(e){t.get("nonblock")&&e.stopPropagation()}),r.on("mousemove",function(e){t.get("nonblock")&&(e.stopPropagation(),o(r,e,"onmousemove"))}),r.on("mousedown",function(e){t.get("nonblock")&&(e.stopPropagation(),e.preventDefault(),o(r,e,"onmousedown"))}),r.on("mouseup",function(e){t.get("nonblock")&&(e.stopPropagation(),e.preventDefault(),o(r,e,"onmouseup"))}),r.on("click",function(e){t.get("nonblock")&&(e.stopPropagation(),o(r,e,"onclick"))}),r.on("dblclick",function(e){t.get("nonblock")&&(e.stopPropagation(),o(r,e,"ondblclick"))})})}function l(){var t,e,o=(t="style",document.createElement(t));o.id="svelte-2150265124-style",o.textContent="[ui-pnotify].ui-pnotify.ui-pnotify-nonblock-fade{opacity:.2 !important}[ui-pnotify].ui-pnotify.ui-pnotify-nonblock-hide{display:none !important}",e=o,document.head.appendChild(e)}function u(e){var o,n;n=e,(o=this)._observers={pre:m(),post:m()},o._handlers=m(),o._bind=n._bind,o.options=n,o.root=n.root||o,o.store=o.root.store||n.store,this._state=h(_extends({_notice:null,_options:{}},t.modules.NonBlock.defaults),e.data),document.getElementById("svelte-2150265124-style")||l();var r=a.bind(this);e.root?this.root._oncreate.push(r):this._oncreate=[r],this._fragment=(this._state,{c:f,m:f,p:f,u:f,d:f}),e.target&&(this._fragment.c(),this._fragment.m(e.target,e.anchor||null),p(this._oncreate))}function f(){}function h(t){for(var e,o,n=1,r=arguments.length;n<r;n++){o=arguments[n];for(e in o)t[e]=o[e]}return t}function p(t){for(;t&&t.length;)t.pop()()}function d(t){this.destroy=f,this.fire("destroy"),this.set=this.get=f,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function m(){return Object.create(null)}function _(t,e,o,n,r){for(var i in e)if(o[i]){var s=n[i],c=r[i],a=e[i];if(a)for(var l=0;l<a.length;l+=1){var u=a[l];u.__calling||(u.__calling=!0,u.call(t,s,c),u.__calling=!1)}}}return h(u.prototype,{destroy:d,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var o=t in this._handlers&&this._handlers[t].slice();if(!o)return;for(var n=0;n<o.length;n+=1)o[n].call(this,e)},observe:function(t,e,o){var n=o&&o.defer?this._observers.post:this._observers.pre;(n[t]||(n[t]=[])).push(e),o&&!1===o.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1);return{cancel:function(){var o=n[t].indexOf(e);~o&&n[t].splice(o,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var o=this._handlers[t]||(this._handlers[t]=[]);return o.push(e),{cancel:function(){var t=o.indexOf(e);~t&&o.splice(t,1)}}},set:function(t){if(this._set(h({},t)),this.root._lock)return;this.root._lock=!0,p(this.root._beforecreate),p(this.root._oncreate),p(this.root._aftercreate),this.root._lock=!1},teardown:d,_set:function(t){var e=this._state,o={},n=!1;for(var r in t)i=t[r],s=e[r],(i!==s||i&&"object"===(void 0===i?"undefined":_typeof(i))||"function"==typeof i)&&(o[r]=n=!0);var i,s;if(!n)return;this._state=h({},e,t),this._recompute(o,this._state),this._bind&&this._bind(o,this._state);this._fragment&&(_(this,this._observers.pre,o,this._state,e),this._fragment.p(o,this._state),_(this,this._observers.post,o,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}}),u.prototype._recompute=f,(e=u).key="NonBlock",e.defaults={nonblock:!1},e.init=function(t){return new e({target:document.body})},t.modules.NonBlock=e,u}(PNotify);
//# sourceMappingURL=PNotifyNonBlock.js.map