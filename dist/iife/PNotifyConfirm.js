"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_extends=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},PNotifyConfirm=function(t){t=t&&t.__esModule?t.default:t;var n;function e(t,n){var e,o,i=!1;function r(){i=!0,n.set({prompt_value:e.value}),i=!1}function s(t){n.handleKeyPress(t)}return{c:function(){e=d("textarea"),this.h()},h:function(){g(e,"input",r),e.rows="5",e.className=o="\n              "+(t._notice.get("_styles").input?t._notice.get("_styles").input:"")+"\n              "+t.prompt_class+"\n            ",v(e,"margin-bottom","5px"),v(e,"clear","both"),g(e,"keypress",s)},m:function(o,i){h(e,o,i),n.refs.promptMulti=e,e.value=t.prompt_value},p:function(t,n){i||(e.value=n.prompt_value),(t._notice||t.prompt_class)&&o!==(o="\n              "+(n._notice.get("_styles").input?n._notice.get("_styles").input:"")+"\n              "+n.prompt_class+"\n            ")&&(e.className=o)},u:function(){m(e)},d:function(){y(e,"input",r),y(e,"keypress",s),n.refs.promptMulti===e&&(n.refs.promptMulti=null)}}}function o(t,n){var e,o,i=!1;function r(){i=!0,n.set({prompt_value:e.value}),i=!1}function s(t){n.handleKeyPress(t)}return{c:function(){e=d("input"),this.h()},h:function(){g(e,"input",r),e.type="text",e.className=o="\n              "+(t._notice.get("_styles").input?t._notice.get("_styles").input:"")+"\n              "+t.prompt_class+"\n            ",v(e,"margin-bottom","5px"),v(e,"clear","both"),g(e,"keypress",s)},m:function(o,i){h(e,o,i),n.refs.promptSingle=e,e.value=t.prompt_value},p:function(t,n){i||(e.value=n.prompt_value),(t._notice||t.prompt_class)&&o!==(o="\n              "+(n._notice.get("_styles").input?n._notice.get("_styles").input:"")+"\n              "+n.prompt_class+"\n            ")&&(e.className=o)},u:function(){m(e)},d:function(){y(e,"input",r),y(e,"keypress",s),n.refs.promptSingle===e&&(n.refs.promptSingle=null)}}}function i(t,n){var e,o=l(t),i=o(t,n);return{c:function(){i.c(),e=_()},m:function(t,n){i.m(t,n),h(e,t,n)},p:function(t,r){o===(o=l(r))&&i?i.p(t,r):(i.u(),i.d(),(i=o(r,n)).c(),i.m(e.parentNode,e))},u:function(){i.u(),m(e)},d:function(){i.d()}}}function r(t,n,e,o,i){var r,s,u=a(t,n,e,o),c=u(t,n,e,o,i);return{c:function(){r=d("button"),c.c(),this.h()},h:function(){r.type="button",r.className=s="\n            ui-pnotify-action-button\n            "+(t._notice.get("_styles").btn?t._notice.get("_styles").btn:"")+"\n            "+(e.addClass?e.addClass:"")+"\n          ",g(r,"click",f),r._svelte={component:i,buttons:n,button_index:o}},m:function(t,n){h(r,t,n),c.m(r,null)},p:function(t,n,e,o,l){u===(u=a(n,e,o,l))&&c?c.p(t,n,e,o,l):(c.u(),c.d(),(c=u(n,e,o,l,i)).c(),c.m(r,null)),(t._notice||t.buttons)&&s!==(s="\n            ui-pnotify-action-button\n            "+(n._notice.get("_styles").btn?n._notice.get("_styles").btn:"")+"\n            "+(o.addClass?o.addClass:"")+"\n          ")&&(r.className=s),r._svelte.buttons=e,r._svelte.button_index=l},u:function(){m(r),c.u()},d:function(){c.d(),y(r,"click",f)}}}function s(t,n,e,o,i){var r,s,u=e.text;return{c:function(){r=d("noscript"),s=d("noscript")},m:function(t,n){h(r,t,n),r.insertAdjacentHTML("afterend",u),h(s,t,n)},p:function(t,n,e,o,i){t.buttons&&u!==(u=o.text)&&(b(r,s),r.insertAdjacentHTML("afterend",u))},u:function(){b(r,s),m(r),m(s)},d:x}}function u(t,n,e,o,i){var r,s=e.text;return{c:function(){r=k(s)},m:function(t,n){h(r,t,n)},p:function(t,n,e,o,i){t.buttons&&s!==(s=o.text)&&(r.data=s)},u:function(){m(r)},d:x}}function c(t,n){for(var e,o,s,u=t.prompt&&i(t,n),c=t.buttons,l=[],a=0;a<c.length;a+=1)l[a]=r(t,c,c[a],a,n);return{c:function(){e=d("div"),u&&u.c(),o=k("\n    ");for(var t=0;t<l.length;t+=1)l[t].c();this.h()},h:function(){e.className=s="ui-pnotify-action-bar "+(t._notice.get("_styles").text?t._notice.get("_styles").text:""),v(e,"margin-top","5px"),v(e,"clear","both"),v(e,"text-align",t.align)},m:function(t,n){var i;h(e,t,n),u&&u.m(e,null),i=o,e.appendChild(i);for(var r=0;r<l.length;r+=1)l[r].m(e,null)},p:function(t,c){c.prompt?u?u.p(t,c):((u=i(c,n)).c(),u.m(e,o)):u&&(u.u(),u.d(),u=null);var a=c.buttons;if(t.buttons||t._notice){for(var f=0;f<a.length;f+=1)l[f]?l[f].p(t,c,a,a[f],f):(l[f]=r(c,a,a[f],f,n),l[f].c(),l[f].m(e,null));for(;f<l.length;f+=1)l[f].u(),l[f].d();l.length=a.length}t._notice&&s!==(s="ui-pnotify-action-bar "+(c._notice.get("_styles").text?c._notice.get("_styles").text:""))&&(e.className=s),t.align&&v(e,"text-align",c.align)},u:function(){m(e),u&&u.u();for(var t=0;t<l.length;t+=1)l[t].u()},d:function(){u&&u.d(),function(t){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d()}(l)}}}function l(t){return t.prompt_multi_line?e:o}function a(t,n,e,o){return e.trustText?s:u}function f(t){var n=this._svelte.component,e=this._svelte.buttons[this._svelte.button_index];n.handleClick(e,t)}function p(n){var e,o;o=n,(e=this)._observers={pre:M(),post:M()},e._handlers=M(),e._bind=o._bind,e.options=o,e.root=o.root||e,e.store=e.root.store||o.store,this.refs={},this._state=C(_extends({_notice:null,_options:{}},t.modules.Confirm.defaults),n.data);var i,r,s,u,l=function(){this.fire("init",{module:this})}.bind(this);n.root?this.root._oncreate.push(l):this._oncreate=[l],this._fragment=(i=this._state,r=this,u=(i.confirm||i.prompt)&&c(i,r),{c:function(){u&&u.c(),s=_()},m:function(t,n){u&&u.m(t,n),h(s,t,n)},p:function(t,n){n.confirm||n.prompt?u?u.p(t,n):((u=c(n,r)).c(),u.m(s.parentNode,s)):u&&(u.u(),u.d(),u=null)},u:function(){u&&u.u(),m(s)},d:function(){u&&u.d()}}),n.target&&(this._fragment.c(),this._fragment.m(n.target,n.anchor||null),N(this._oncreate))}function _(){return document.createComment("")}function h(t,n,e){n.insertBefore(t,e)}function m(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function g(t,n,e){t.addEventListener(n,e,!1)}function v(t,n,e){t.style.setProperty(n,e)}function y(t,n,e){t.removeEventListener(n,e,!1)}function b(t,n){for(;t.nextSibling&&t.nextSibling!==n;)t.parentNode.removeChild(t.nextSibling)}function x(){}function k(t){return document.createTextNode(t)}function C(t){for(var n,e,o=1,i=arguments.length;o<i;o++){e=arguments[o];for(n in e)t[n]=e[n]}return t}function N(t){for(;t&&t.length;)t.pop()()}function S(t){this.destroy=x,this.fire("destroy"),this.set=this.get=x,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function M(){return Object.create(null)}function O(t,n,e,o,i){for(var r in n)if(e[r]){var s=o[r],u=i[r],c=n[r];if(c)for(var l=0;l<c.length;l+=1){var a=c[l];a.__calling||(a.__calling=!0,a.call(t,s,u),a.__calling=!1)}}}return C(p.prototype,{initModule:function(t){this.set(t)},afterOpen:function(){this.get("prompt")&&(this.get("prompt_multi_line")?this.refs.promptMulti.focus():this.refs.promptSingle.focus())},handleClick:function(t,n){t.click&&t.click(this.get("_notice"),this.get("prompt")?this.get("prompt_value"):null,n)},handleKeyPress:function(t){if(13==t.keyCode&&!t.shiftKey){t.preventDefault();for(var n=this.get("buttons"),e=0;e<n.length;e++)n[e].promptTrigger&&n[e].click&&n[e].click(this.get("_notice"),this.get("prompt")?this.get("prompt_value"):null,t)}}},{destroy:S,get:function(t){return t?this._state[t]:this._state},fire:function(t,n){var e=t in this._handlers&&this._handlers[t].slice();if(!e)return;for(var o=0;o<e.length;o+=1)e[o].call(this,n)},observe:function(t,n,e){var o=e&&e.defer?this._observers.post:this._observers.pre;(o[t]||(o[t]=[])).push(n),e&&!1===e.init||(n.__calling=!0,n.call(this,this._state[t]),n.__calling=!1);return{cancel:function(){var e=o[t].indexOf(n);~e&&o[t].splice(e,1)}}},on:function(t,n){if("teardown"===t)return this.on("destroy",n);var e=this._handlers[t]||(this._handlers[t]=[]);return e.push(n),{cancel:function(){var t=e.indexOf(n);~t&&e.splice(t,1)}}},set:function(t){if(this._set(C({},t)),this.root._lock)return;this.root._lock=!0,N(this.root._beforecreate),N(this.root._oncreate),N(this.root._aftercreate),this.root._lock=!1},teardown:S,_set:function(t){var n=this._state,e={},o=!1;for(var i in t)r=t[i],s=n[i],(r!==s||r&&"object"===(void 0===r?"undefined":_typeof(r))||"function"==typeof r)&&(e[i]=o=!0);var r,s;if(!o)return;this._state=C({},n,t),this._recompute(e,this._state),this._bind&&this._bind(e,this._state);this._fragment&&(O(this,this._observers.pre,e,this._state,n),this._fragment.p(e,this._state),O(this,this._observers.post,e,this._state,n))},_mount:function(t,n){this._fragment.m(t,n)},_unmount:function(){this._fragment&&this._fragment.u()}}),p.prototype._recompute=x,(n=p).key="Confirm",n.defaults={confirm:!1,prompt:!1,prompt_class:"",prompt_value:"",prompt_multi_line:!1,align:"right",buttons:[{text:"Ok",trustText:!1,addClass:"",promptTrigger:!0,click:function(t,n){t.close(),t.fire("pnotify.confirm",{notice:t,value:n})}},{text:"Cancel",trustText:!1,addClass:"",click:function(t){t.close(),t.fire("pnotify.cancel",{notice:t})}}]},t.modules.Confirm=n,t.modulesAppendContainer.push(n),_extends(t.styling.bootstrap3,{btn:"btn btn-default",input:"form-control"}),_extends(t.styling.bootstrap4,{btn:"btn btn-secondary ml-1",input:"form-control"}),p}(PNotify);
//# sourceMappingURL=PNotifyConfirm.js.map