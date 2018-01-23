(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define("PNotifyStyleMaterial", ["exports", "./PNotify.html"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require("./PNotify.html"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.PNotify);
		global.PNotifyStyleMaterial = mod.exports;
	}
})(this, function (exports, _PNotify) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _PNotify2 = _interopRequireDefault(_PNotify);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		return typeof obj;
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	function setup(Component) {
		Component.key = "StyleMaterial";

		// Register the module with PNotify.
		_PNotify2.default.modules.StyleMaterial = Component;
		// Prepend this module to the container.
		_PNotify2.default.modulesPrependContainer.push(Component);

		_PNotify2.default.styling.material = _extends({}, _PNotify2.default.styling.brighttheme, {
			container: "pnotify-material",
			notice: "pnotify-material-notice",
			notice_icon: "material-icons pnotify-material-icon-notice",
			info: "pnotify-material-info",
			info_icon: "material-icons pnotify-material-icon-info",
			success: "pnotify-material-success",
			success_icon: "material-icons pnotify-material-icon-success",
			error: "pnotify-material-error",
			error_icon: "material-icons pnotify-material-icon-error",
			closer: "material-icons pnotify-material-icon-closer",
			pin_up: "material-icons pnotify-material-icon-sticker",
			pin_down: "material-icons pnotify-material-icon-sticker pnotify-material-icon-stuck"
		});
	};

	function add_css() {
		var style = createElement("style");
		style.id = 'svelte-1437404409-style';
		style.textContent = "@import url(https://fonts.googleapis.com/css?family=Material+Icons);[ui-pnotify] .pnotify-material{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;font-size:14px}[ui-pnotify] .pnotify-material.ui-pnotify-shadow{-webkit-box-shadow:0px 6px 24px 0px rgba(0,0,0,0.2);-moz-box-shadow:0px 6px 24px 0px rgba(0,0,0,0.2);box-shadow:0px 6px 24px 0px rgba(0,0,0,0.2)}[ui-pnotify] .pnotify-material.ui-pnotify-container{padding:24px}[ui-pnotify] .pnotify-material .ui-pnotify-title{margin-bottom:20px;font-size:20px}[ui-pnotify] .pnotify-material-notice{background-color:#FFEE58;border:none;color:#000}[ui-pnotify] .pnotify-material-info{background-color:#26C6DA;border:none;color:#000}[ui-pnotify] .pnotify-material-success{background-color:#66BB6A;border:none;color:#fff}[ui-pnotify] .pnotify-material-error{background-color:#EF5350;border:none;color:#fff}[ui-pnotify] .pnotify-material-icon-notice,[ui-pnotify] .pnotify-material-icon-info,[ui-pnotify] .pnotify-material-icon-success,[ui-pnotify] .pnotify-material-icon-error,[ui-pnotify] .pnotify-material-icon-closer,[ui-pnotify] .pnotify-material-icon-sticker{position:relative}[ui-pnotify] .pnotify-material-icon-closer,[ui-pnotify] .pnotify-material-icon-sticker{height:20px;width:20px;font-size:20px;line-height:20px;position:relative}[ui-pnotify] .pnotify-material-icon-notice:after,[ui-pnotify] .pnotify-material-icon-info:after,[ui-pnotify] .pnotify-material-icon-success:after,[ui-pnotify] .pnotify-material-icon-error:after,[ui-pnotify] .pnotify-material-icon-closer:after,[ui-pnotify] .pnotify-material-icon-sticker:after{font-family:'Material Icons'}[ui-pnotify] .pnotify-material-icon-notice:after{content:\"announcement\"}[ui-pnotify] .pnotify-material-icon-info:after{content:\"info\"}[ui-pnotify] .pnotify-material-icon-success:after{content:\"check_circle\"}[ui-pnotify] .pnotify-material-icon-error:after{content:\"error\"}[ui-pnotify] .pnotify-material-icon-closer,[ui-pnotify] .pnotify-material-icon-sticker{display:inline-block}[ui-pnotify] .pnotify-material-icon-closer:after{top:-4px;content:\"close\"}[ui-pnotify] .pnotify-material-icon-sticker:after{top:-5px;content:\"pause\"}[ui-pnotify] .pnotify-material-icon-sticker.pnotify-material-icon-stuck:after{content:\"play_arrow\"}";
		appendNode(style, document.head);
	}

	function create_main_fragment(state, component) {

		return {
			c: noop,

			m: noop,

			p: noop,

			u: noop,

			d: noop
		};
	}

	function PNotifyStyleMaterial(options) {
		init(this, options);
		this._state = assign({}, options.data);

		if (!document.getElementById("svelte-1437404409-style")) add_css();

		this._fragment = create_main_fragment(this._state, this);

		if (options.target) {
			this._fragment.c();
			this._fragment.m(options.target, options.anchor || null);
		}
	}

	assign(PNotifyStyleMaterial.prototype, {
		destroy: destroy,
		get: get,
		fire: fire,
		observe: observe,
		on: on,
		set: set,
		teardown: destroy,
		_set: _set,
		_mount: _mount,
		_unmount: _unmount
	});

	PNotifyStyleMaterial.prototype._recompute = noop;

	setup(PNotifyStyleMaterial);

	function createElement(name) {
		return document.createElement(name);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function noop() {}

	function init(component, options) {
		component._observers = { pre: blankObject(), post: blankObject() };
		component._handlers = blankObject();
		component._bind = options._bind;

		component.options = options;
		component.root = options.root || component;
		component.store = component.root.store || options.store;
	}

	function assign(target) {
		var k,
		    source,
		    i = 1,
		    len = arguments.length;
		for (; i < len; i++) {
			source = arguments[i];
			for (k in source) {
				target[k] = source[k];
			}
		}

		return target;
	}

	function destroy(detach) {
		this.destroy = noop;
		this.fire('destroy');
		this.set = this.get = noop;

		if (detach !== false) this._fragment.u();
		this._fragment.d();
		this._fragment = this._state = null;
	}

	function get(key) {
		return key ? this._state[key] : this._state;
	}

	function fire(eventName, data) {
		var handlers = eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	}

	function observe(key, callback, options) {
		var group = options && options.defer ? this._observers.post : this._observers.pre;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(this, this._state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	}

	function on(eventName, handler) {
		if (eventName === 'teardown') return this.on('destroy', handler);

		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	}

	function set(newState) {
		this._set(assign({}, newState));
		if (this.root._lock) return;
		this.root._lock = true;
		callAll(this.root._beforecreate);
		callAll(this.root._oncreate);
		callAll(this.root._aftercreate);
		this.root._lock = false;
	}

	function _set(newState) {
		var oldState = this._state,
		    changed = {},
		    dirty = false;

		for (var key in newState) {
			if (differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = assign({}, oldState, newState);
		this._recompute(changed, this._state);
		if (this._bind) this._bind(changed, this._state);

		if (this._fragment) {
			dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
			this._fragment.p(changed, this._state);
			dispatchObservers(this, this._observers.post, changed, this._state, oldState);
		}
	}

	function _mount(target, anchor) {
		this._fragment.m(target, anchor);
	}

	function _unmount() {
		if (this._fragment) this._fragment.u();
	}

	function blankObject() {
		return Object.create(null);
	}

	function callAll(fns) {
		while (fns && fns.length) {
			fns.pop()();
		}
	}

	function differs(a, b) {
		return a !== b || a && (typeof a === "undefined" ? "undefined" : _typeof(a)) === 'object' || typeof a === 'function';
	}

	function dispatchObservers(component, group, changed, newState, oldState) {
		for (var key in group) {
			if (!changed[key]) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}
	exports.default = PNotifyStyleMaterial;
});