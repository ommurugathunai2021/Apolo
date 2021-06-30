try { /*! @sentry/browser 5.27.3 (e0be154) | https://github.com/getsentry/sentry-javascript */
    var Sentry = function(t) {
        var n = function(t, r) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
                })(t, r)
        };

        function r(t, r) {
            function e() {
                this.constructor = t
            }
            n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
        }
        var e, i, o, u, s = function() {
            return (s = Object.assign || function(t) {
                for (var n, r = 1, e = arguments.length; r < e; r++)
                    for (var i in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                return t
            }).apply(this, arguments)
        };

        function c(t) {
            var n = "function" == typeof Symbol && t[Symbol.iterator],
                r = 0;
            return n ? n.call(t) : {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            }
        }

        function a(t, n) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var e, i, o = r.call(t),
                u = [];
            try {
                for (;
                    (void 0 === n || n-- > 0) && !(e = o.next()).done;) u.push(e.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    e && !e.done && (r = o.return) && r.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return u
        }

        function f() {
            for (var t = [], n = 0; n < arguments.length; n++) t = t.concat(a(arguments[n]));
            return t
        }

        function h(t) {
            switch (Object.prototype.toString.call(t)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return g(t, Error)
            }
        }

        function v(t) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(t)
        }

        function l(t) {
            return "[object DOMError]" === Object.prototype.toString.call(t)
        }

        function d(t) {
            return "[object String]" === Object.prototype.toString.call(t)
        }

        function p(t) {
            return null === t || "object" != typeof t && "function" != typeof t
        }

        function y(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }

        function m(t) {
            return "undefined" != typeof Event && g(t, Event)
        }

        function b(t) {
            return "undefined" != typeof Element && g(t, Element)
        }

        function w(t) {
            return Boolean(t && t.then && "function" == typeof t.then)
        }

        function g(t, n) {
            try {
                return t instanceof n
            } catch (t) {
                return !1
            }
        }

        function E(t) {
            try {
                for (var n = t, r = [], e = 0, i = 0, o = " > ".length, u = void 0; n && e++ < 5 && !("html" === (u = x(n)) || e > 1 && i + r.length * o + u.length >= 80);) r.push(u), i += u.length, n = n.parentNode;
                return r.reverse().join(" > ")
            } catch (t) {
                return "<unknown>"
            }
        }

        function x(t) {
            var n, r, e, i, o, u = t,
                s = [];
            if (!u || !u.tagName) return "";
            if (s.push(u.tagName.toLowerCase()), u.id && s.push("#" + u.id), (n = u.className) && d(n))
                for (r = n.split(/\s+/), o = 0; o < r.length; o++) s.push("." + r[o]);
            var c = ["type", "name", "title", "alt"];
            for (o = 0; o < c.length; o++) e = c[o], (i = u.getAttribute(e)) && s.push("[" + e + '="' + i + '"]');
            return s.join("")
        }! function(t) {
            t[t.None = 0] = "None", t[t.Error = 1] = "Error", t[t.Debug = 2] = "Debug", t[t.Verbose = 3] = "Verbose"
        }(e || (e = {})),
        function(t) {
            t.Ok = "ok", t.Exited = "exited", t.Crashed = "crashed", t.Abnormal = "abnormal"
        }(i || (i = {})), (o = t.Severity || (t.Severity = {})).Fatal = "fatal", o.Error = "error", o.Warning = "warning", o.Log = "log", o.Info = "info", o.Debug = "debug", o.Critical = "critical",
            function(t) {
                t.fromString = function(n) {
                    switch (n) {
                        case "debug":
                            return t.Debug;
                        case "info":
                            return t.Info;
                        case "warn":
                        case "warning":
                            return t.Warning;
                        case "error":
                            return t.Error;
                        case "fatal":
                            return t.Fatal;
                        case "critical":
                            return t.Critical;
                        case "log":
                        default:
                            return t.Log
                    }
                }
            }(t.Severity || (t.Severity = {})), (u = t.Status || (t.Status = {})).Unknown = "unknown", u.Skipped = "skipped", u.Success = "success", u.RateLimit = "rate_limit", u.Invalid = "invalid", u.Failed = "failed",
            function(t) {
                t.fromHttpCode = function(n) {
                    return n >= 200 && n < 300 ? t.Success : 429 === n ? t.RateLimit : n >= 400 && n < 500 ? t.Invalid : n >= 500 ? t.Failed : t.Unknown
                }
            }(t.Status || (t.Status = {}));
        var j = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array ? function(t, n) {
                return t.__proto__ = n, t
            } : function(t, n) {
                for (var r in n) t.hasOwnProperty(r) || (t[r] = n[r]);
                return t
            });
        var k = function(t) {
                function n(n) {
                    var r = this.constructor,
                        e = t.call(this, n) || this;
                    return e.message = n, e.name = r.prototype.constructor.name, j(e, r.prototype), e
                }
                return r(n, t), n
            }(Error),
            _ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
            S = function() {
                function t(t) {
                    "string" == typeof t ? this.t(t) : this.i(t), this.o()
                }
                return t.prototype.toString = function(t) {
                    void 0 === t && (t = !1);
                    var n = this,
                        r = n.host,
                        e = n.path,
                        i = n.pass,
                        o = n.port,
                        u = n.projectId;
                    return n.protocol + "://" + n.user + (t && i ? ":" + i : "") + "@" + r + (o ? ":" + o : "") + "/" + (e ? e + "/" : e) + u
                }, t.prototype.t = function(t) {
                    var n = _.exec(t);
                    if (!n) throw new k("Invalid Dsn");
                    var r = a(n.slice(1), 6),
                        e = r[0],
                        i = r[1],
                        o = r[2],
                        u = void 0 === o ? "" : o,
                        s = r[3],
                        c = r[4],
                        f = void 0 === c ? "" : c,
                        h = "",
                        v = r[5],
                        l = v.split("/");
                    if (l.length > 1 && (h = l.slice(0, -1).join("/"), v = l.pop()), v) {
                        var d = v.match(/^\d+/);
                        d && (v = d[0])
                    }
                    this.i({
                        host: s,
                        pass: u,
                        path: h,
                        projectId: v,
                        port: f,
                        protocol: e,
                        user: i
                    })
                }, t.prototype.i = function(t) {
                    this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
                }, t.prototype.o = function() {
                    var t = this;
                    if (["protocol", "user", "host", "projectId"].forEach(function(n) {
                            if (!t[n]) throw new k("Invalid Dsn: " + n + " missing")
                        }), !this.projectId.match(/^\d+$/)) throw new k("Invalid Dsn: Invalid projectId " + this.projectId);
                    if ("http" !== this.protocol && "https" !== this.protocol) throw new k("Invalid Dsn: Invalid protocol " + this.protocol);
                    if (this.port && isNaN(parseInt(this.port, 10))) throw new k("Invalid Dsn: Invalid port " + this.port)
                }, t
            }(),
            O = function() {
                function t() {
                    this.u = "function" == typeof WeakSet, this.s = this.u ? new WeakSet : []
                }
                return t.prototype.memoize = function(t) {
                    if (this.u) return !!this.s.has(t) || (this.s.add(t), !1);
                    for (var n = 0; n < this.s.length; n++) {
                        if (this.s[n] === t) return !0
                    }
                    return this.s.push(t), !1
                }, t.prototype.unmemoize = function(t) {
                    if (this.u) this.s.delete(t);
                    else
                        for (var n = 0; n < this.s.length; n++)
                            if (this.s[n] === t) {
                                this.s.splice(n, 1);
                                break
                            }
                }, t
            }(),
            T = "<anonymous>";

        function D(t) {
            try {
                return t && "function" == typeof t && t.name || T
            } catch (t) {
                return T
            }
        }

        function R(t, n) {
            return void 0 === n && (n = 0), "string" != typeof t || 0 === n ? t : t.length <= n ? t : t.substr(0, n) + "..."
        }

        function I(t, n) {
            if (!Array.isArray(t)) return "";
            for (var r = [], e = 0; e < t.length; e++) {
                var i = t[e];
                try {
                    r.push(String(i))
                } catch (t) {
                    r.push("[value cannot be serialized]")
                }
            }
            return r.join(n)
        }

        function N(t, n) {
            return !!d(t) && (r = n, "[object RegExp]" === Object.prototype.toString.call(r) ? n.test(t) : "string" == typeof n && -1 !== t.indexOf(n));
            var r
        }

        function M(t, n, r) {
            if (n in t) {
                var e = t[n],
                    i = r(e);
                if ("function" == typeof i) try {
                    i.prototype = i.prototype || {}, Object.defineProperties(i, {
                        __sentry_original__: {
                            enumerable: !1,
                            value: e
                        }
                    })
                } catch (t) {}
                t[n] = i
            }
        }

        function A(t) {
            if (h(t)) {
                var n = t,
                    r = {
                        message: n.message,
                        name: n.name,
                        stack: n.stack
                    };
                for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (r[e] = n[e]);
                return r
            }
            if (m(t)) {
                var i = t,
                    o = {};
                o.type = i.type;
                try {
                    o.target = b(i.target) ? E(i.target) : Object.prototype.toString.call(i.target)
                } catch (t) {
                    o.target = "<unknown>"
                }
                try {
                    o.currentTarget = b(i.currentTarget) ? E(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
                } catch (t) {
                    o.currentTarget = "<unknown>"
                }
                for (var e in "undefined" != typeof CustomEvent && g(t, CustomEvent) && (o.detail = i.detail), i) Object.prototype.hasOwnProperty.call(i, e) && (o[e] = i);
                return o
            }
            return t
        }

        function C(t) {
            return function(t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(t))
        }

        function q(t, n, r) {
            void 0 === n && (n = 3), void 0 === r && (r = 102400);
            var e = H(t, n);
            return C(e) > r ? q(t, n - 1, r) : e
        }

        function L(t, n) {
            return "domain" === n && t && "object" == typeof t && t.h ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" != typeof global && t === global ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : y(r = t) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + D(t) + "]" : t;
            var r
        }

        function U(t, n, r, e) {
            if (void 0 === r && (r = 1 / 0), void 0 === e && (e = new O), 0 === r) return function(t) {
                var n = Object.prototype.toString.call(t);
                if ("string" == typeof t) return t;
                if ("[object Object]" === n) return "[Object]";
                if ("[object Array]" === n) return "[Array]";
                var r = L(t);
                return p(r) ? r : n
            }(n);
            if (null != n && "function" == typeof n.toJSON) return n.toJSON();
            var i = L(n, t);
            if (p(i)) return i;
            var o = A(n),
                u = Array.isArray(n) ? [] : {};
            if (e.memoize(n)) return "[Circular ~]";
            for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (u[s] = U(s, o[s], r - 1, e));
            return e.unmemoize(n), u
        }

        function H(t, n) {
            try {
                return JSON.parse(JSON.stringify(t, function(t, r) {
                    return U(t, r, n)
                }))
            } catch (t) {
                return "**non-serializable**"
            }
        }

        function P(t, n) {
            void 0 === n && (n = 40);
            var r = Object.keys(A(t));
            if (r.sort(), !r.length) return "[object has no keys]";
            if (r[0].length >= n) return R(r[0], n);
            for (var e = r.length; e > 0; e--) {
                var i = r.slice(0, e).join(", ");
                if (!(i.length > n)) return e === r.length ? i : R(i, n)
            }
            return ""
        }

        function F(t) {
            var n, r;
            if (y(t)) {
                var e = t,
                    i = {};
                try {
                    for (var o = c(Object.keys(e)), u = o.next(); !u.done; u = o.next()) {
                        var s = u.value;
                        void 0 !== e[s] && (i[s] = F(e[s]))
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return i
            }
            return Array.isArray(t) ? t.map(F) : t
        }

        function X() {
            return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
        }
        var J = {};

        function W() {
            return X() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : J
        }

        function $() {
            var t = W(),
                n = t.crypto || t.msCrypto;
            if (void 0 !== n && n.getRandomValues) {
                var r = new Uint16Array(8);
                n.getRandomValues(r), r[3] = 4095 & r[3] | 16384, r[4] = 16383 & r[4] | 32768;
                var e = function(t) {
                    for (var n = t.toString(16); n.length < 4;) n = "0" + n;
                    return n
                };
                return e(r[0]) + e(r[1]) + e(r[2]) + e(r[3]) + e(r[4]) + e(r[5]) + e(r[6]) + e(r[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = 16 * Math.random() | 0;
                return ("x" === t ? n : 3 & n | 8).toString(16)
            })
        }

        function B(t) {
            if (!t) return {};
            var n = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!n) return {};
            var r = n[6] || "",
                e = n[8] || "";
            return {
                host: n[4],
                path: n[5],
                protocol: n[2],
                relative: n[5] + r + e
            }
        }

        function G(t) {
            if (t.message) return t.message;
            if (t.exception && t.exception.values && t.exception.values[0]) {
                var n = t.exception.values[0];
                return n.type && n.value ? n.type + ": " + n.value : n.type || n.value || t.event_id || "<unknown>"
            }
            return t.event_id || "<unknown>"
        }

        function z(t) {
            var n = W();
            if (!("console" in n)) return t();
            var r = n.console,
                e = {};
            ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
                t in n.console && r[t].__sentry_original__ && (e[t] = r[t], r[t] = r[t].__sentry_original__)
            });
            var i = t();
            return Object.keys(e).forEach(function(t) {
                r[t] = e[t]
            }), i
        }

        function V(t, n, r) {
            t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].value = t.exception.values[0].value || n || "", t.exception.values[0].type = t.exception.values[0].type || r || "Error"
        }

        function K(t, n) {
            void 0 === n && (n = {});
            try {
                t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}, Object.keys(n).forEach(function(r) {
                    t.exception.values[0].mechanism[r] = n[r]
                })
            } catch (t) {}
        }
        var Q = 6e4;
        var Y = W(),
            Z = "Sentry Logger ",
            tt = function() {
                function t() {
                    this.v = !1
                }
                return t.prototype.disable = function() {
                    this.v = !1
                }, t.prototype.enable = function() {
                    this.v = !0
                }, t.prototype.log = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    this.v && z(function() {
                        Y.console.log(Z + "[Log]: " + t.join(" "))
                    })
                }, t.prototype.warn = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    this.v && z(function() {
                        Y.console.warn(Z + "[Warn]: " + t.join(" "))
                    })
                }, t.prototype.error = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    this.v && z(function() {
                        Y.console.error(Z + "[Error]: " + t.join(" "))
                    })
                }, t
            }();
        Y.__SENTRY__ = Y.__SENTRY__ || {};
        var nt = Y.__SENTRY__.logger || (Y.__SENTRY__.logger = new tt);

        function rt() {
            if (!("fetch" in W())) return !1;
            try {
                return new Headers, new Request(""), new Response, !0
            } catch (t) {
                return !1
            }
        }

        function et(t) {
            return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        }

        function it() {
            if (!rt()) return !1;
            try {
                return new Request("_", {
                    referrerPolicy: "origin"
                }), !0
            } catch (t) {
                return !1
            }
        }
        var ot, ut = W(),
            st = {},
            ct = {};

        function at(t) {
            if (!ct[t]) switch (ct[t] = !0, t) {
                case "console":
                    ! function() {
                        if (!("console" in ut)) return;
                        ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
                            t in ut.console && M(ut.console, t, function(n) {
                                return function() {
                                    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
                                    ht("console", {
                                        args: r,
                                        level: t
                                    }), n && Function.prototype.apply.call(n, ut.console, r)
                                }
                            })
                        })
                    }();
                    break;
                case "dom":
                    ! function() {
                        if (!("document" in ut)) return;
                        ut.document.addEventListener("click", bt("click", ht.bind(null, "dom")), !1), ut.document.addEventListener("keypress", wt(ht.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach(function(t) {
                            var n = ut[t] && ut[t].prototype;
                            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (M(n, "addEventListener", function(t) {
                                return function(n, r, e) {
                                    return r && r.handleEvent ? ("click" === n && M(r, "handleEvent", function(t) {
                                        return function(n) {
                                            return bt("click", ht.bind(null, "dom"))(n), t.call(this, n)
                                        }
                                    }), "keypress" === n && M(r, "handleEvent", function(t) {
                                        return function(n) {
                                            return wt(ht.bind(null, "dom"))(n), t.call(this, n)
                                        }
                                    })) : ("click" === n && bt("click", ht.bind(null, "dom"), !0)(this), "keypress" === n && wt(ht.bind(null, "dom"))(this)), t.call(this, n, r, e)
                                }
                            }), M(n, "removeEventListener", function(t) {
                                return function(n, r, e) {
                                    try {
                                        t.call(this, n, r.__sentry_wrapped__, e)
                                    } catch (t) {}
                                    return t.call(this, n, r, e)
                                }
                            }))
                        })
                    }();
                    break;
                case "xhr":
                    ! function() {
                        if (!("XMLHttpRequest" in ut)) return;
                        var t = [],
                            n = [],
                            r = XMLHttpRequest.prototype;
                        M(r, "open", function(r) {
                            return function() {
                                for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                                var o = this,
                                    u = e[1];
                                o.__sentry_xhr__ = {
                                    method: d(e[0]) ? e[0].toUpperCase() : e[0],
                                    url: e[1]
                                }, d(u) && "POST" === o.__sentry_xhr__.method && u.match(/sentry_key/) && (o.__sentry_own_request__ = !0);
                                var s = function() {
                                    if (4 === o.readyState) {
                                        try {
                                            o.__sentry_xhr__ && (o.__sentry_xhr__.status_code = o.status)
                                        } catch (t) {}
                                        try {
                                            var r = t.indexOf(o);
                                            if (-1 !== r) {
                                                t.splice(r);
                                                var i = n.splice(r)[0];
                                                o.__sentry_xhr__ && void 0 !== i[0] && (o.__sentry_xhr__.body = i[0])
                                            }
                                        } catch (t) {}
                                        ht("xhr", {
                                            args: e,
                                            endTimestamp: Date.now(),
                                            startTimestamp: Date.now(),
                                            xhr: o
                                        })
                                    }
                                };
                                return "onreadystatechange" in o && "function" == typeof o.onreadystatechange ? M(o, "onreadystatechange", function(t) {
                                    return function() {
                                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                        return s(), t.apply(o, n)
                                    }
                                }) : o.addEventListener("readystatechange", s), r.apply(o, e)
                            }
                        }), M(r, "send", function(r) {
                            return function() {
                                for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                                return t.push(this), n.push(e), ht("xhr", {
                                    args: e,
                                    startTimestamp: Date.now(),
                                    xhr: this
                                }), r.apply(this, e)
                            }
                        })
                    }();
                    break;
                case "fetch":
                    ! function() {
                        if (! function() {
                                if (!rt()) return !1;
                                var t = W();
                                if (et(t.fetch)) return !0;
                                var n = !1,
                                    r = t.document;
                                if (r && "function" == typeof r.createElement) try {
                                    var e = r.createElement("iframe");
                                    e.hidden = !0, r.head.appendChild(e), e.contentWindow && e.contentWindow.fetch && (n = et(e.contentWindow.fetch)), r.head.removeChild(e)
                                } catch (t) {
                                    nt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                                }
                                return n
                            }()) return;
                        M(ut, "fetch", function(t) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                var e = {
                                    args: n,
                                    fetchData: {
                                        method: vt(n),
                                        url: lt(n)
                                    },
                                    startTimestamp: Date.now()
                                };
                                return ht("fetch", s({}, e)), t.apply(ut, n).then(function(t) {
                                    return ht("fetch", s(s({}, e), {
                                        endTimestamp: Date.now(),
                                        response: t
                                    })), t
                                }, function(t) {
                                    throw ht("fetch", s(s({}, e), {
                                        endTimestamp: Date.now(),
                                        error: t
                                    })), t
                                })
                            }
                        })
                    }();
                    break;
                case "history":
                    ! function() {
                        if (t = W(), n = t.chrome, r = n && n.app && n.app.runtime, e = "history" in t && !!t.history.pushState && !!t.history.replaceState, r || !e) return;
                        var t, n, r, e;
                        var i = ut.onpopstate;

                        function o(t) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                var e = n.length > 2 ? n[2] : void 0;
                                if (e) {
                                    var i = ot,
                                        o = String(e);
                                    ot = o, ht("history", {
                                        from: i,
                                        to: o
                                    })
                                }
                                return t.apply(this, n)
                            }
                        }
                        ut.onpopstate = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = ut.location.href,
                                e = ot;
                            if (ot = r, ht("history", {
                                    from: e,
                                    to: r
                                }), i) return i.apply(this, t)
                        }, M(ut.history, "pushState", o), M(ut.history, "replaceState", o)
                    }();
                    break;
                case "error":
                    gt = ut.onerror, ut.onerror = function(t, n, r, e, i) {
                        return ht("error", {
                            column: e,
                            error: i,
                            line: r,
                            msg: t,
                            url: n
                        }), !!gt && gt.apply(this, arguments)
                    };
                    break;
                case "unhandledrejection":
                    xt = ut.onunhandledrejection, ut.onunhandledrejection = function(t) {
                        return ht("unhandledrejection", t), !xt || xt.apply(this, arguments)
                    };
                    break;
                default:
                    nt.warn("unknown instrumentation type:", t)
            }
        }

        function ft(t) {
            t && "string" == typeof t.type && "function" == typeof t.callback && (st[t.type] = st[t.type] || [], st[t.type].push(t.callback), at(t.type))
        }

        function ht(t, n) {
            var r, e;
            if (t && st[t]) try {
                for (var i = c(st[t] || []), o = i.next(); !o.done; o = i.next()) {
                    var u = o.value;
                    try {
                        u(n)
                    } catch (n) {
                        nt.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + D(u) + "\nError: " + n)
                    }
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (e = i.return) && e.call(i)
                } finally {
                    if (r) throw r.error
                }
            }
        }

        function vt(t) {
            return void 0 === t && (t = []), "Request" in ut && g(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
        }

        function lt(t) {
            return void 0 === t && (t = []), "string" == typeof t[0] ? t[0] : "Request" in ut && g(t[0], Request) ? t[0].url : String(t[0])
        }
        var dt, pt, yt = 1e3,
            mt = 0;

        function bt(t, n, r) {
            return void 0 === r && (r = !1),
                function(e) {
                    dt = void 0, e && pt !== e && (pt = e, mt && clearTimeout(mt), r ? mt = setTimeout(function() {
                        n({
                            event: e,
                            name: t
                        })
                    }) : n({
                        event: e,
                        name: t
                    }))
                }
        }

        function wt(t) {
            return function(n) {
                var r;
                try {
                    r = n.target
                } catch (t) {
                    return
                }
                var e = r && r.tagName;
                e && ("INPUT" === e || "TEXTAREA" === e || r.isContentEditable) && (dt || bt("input", t)(n), clearTimeout(dt), dt = setTimeout(function() {
                    dt = void 0
                }, yt))
            }
        }
        var gt = null;
        var Et, xt = null;
        ! function(t) {
            t.PENDING = "PENDING", t.RESOLVED = "RESOLVED", t.REJECTED = "REJECTED"
        }(Et || (Et = {}));
        var jt = function() {
                function t(t) {
                    var n = this;
                    this.l = Et.PENDING, this.p = [], this.m = function(t) {
                        n.g(Et.RESOLVED, t)
                    }, this.j = function(t) {
                        n.g(Et.REJECTED, t)
                    }, this.g = function(t, r) {
                        n.l === Et.PENDING && (w(r) ? r.then(n.m, n.j) : (n.l = t, n.k = r, n._()))
                    }, this.S = function(t) {
                        n.p = n.p.concat(t), n._()
                    }, this._ = function() {
                        if (n.l !== Et.PENDING) {
                            var t = n.p.slice();
                            n.p = [], t.forEach(function(t) {
                                t.done || (n.l === Et.RESOLVED && t.onfulfilled && t.onfulfilled(n.k), n.l === Et.REJECTED && t.onrejected && t.onrejected(n.k), t.done = !0)
                            })
                        }
                    };
                    try {
                        t(this.m, this.j)
                    } catch (t) {
                        this.j(t)
                    }
                }
                return t.resolve = function(n) {
                    return new t(function(t) {
                        t(n)
                    })
                }, t.reject = function(n) {
                    return new t(function(t, r) {
                        r(n)
                    })
                }, t.all = function(n) {
                    return new t(function(r, e) {
                        if (Array.isArray(n))
                            if (0 !== n.length) {
                                var i = n.length,
                                    o = [];
                                n.forEach(function(n, u) {
                                    t.resolve(n).then(function(t) {
                                        o[u] = t, 0 === (i -= 1) && r(o)
                                    }).then(null, e)
                                })
                            } else r([]);
                        else e(new TypeError("Promise.all requires an array as input."))
                    })
                }, t.prototype.then = function(n, r) {
                    var e = this;
                    return new t(function(t, i) {
                        e.S({
                            done: !1,
                            onfulfilled: function(r) {
                                if (n) try {
                                    return void t(n(r))
                                } catch (t) {
                                    return void i(t)
                                } else t(r)
                            },
                            onrejected: function(n) {
                                if (r) try {
                                    return void t(r(n))
                                } catch (t) {
                                    return void i(t)
                                } else i(n)
                            }
                        })
                    })
                }, t.prototype.catch = function(t) {
                    return this.then(function(t) {
                        return t
                    }, t)
                }, t.prototype.finally = function(n) {
                    var r = this;
                    return new t(function(t, e) {
                        var i, o;
                        return r.then(function(t) {
                            o = !1, i = t, n && n()
                        }, function(t) {
                            o = !0, i = t, n && n()
                        }).then(function() {
                            o ? e(i) : t(i)
                        })
                    })
                }, t.prototype.toString = function() {
                    return "[object SyncPromise]"
                }, t
            }(),
            kt = function() {
                function t(t) {
                    this.O = t, this.T = []
                }
                return t.prototype.isReady = function() {
                    return void 0 === this.O || this.length() < this.O
                }, t.prototype.add = function(t) {
                    var n = this;
                    return this.isReady() ? (-1 === this.T.indexOf(t) && this.T.push(t), t.then(function() {
                        return n.remove(t)
                    }).then(null, function() {
                        return n.remove(t).then(null, function() {})
                    }), t) : jt.reject(new k("Not adding Promise due to buffer limit reached."))
                }, t.prototype.remove = function(t) {
                    return this.T.splice(this.T.indexOf(t), 1)[0]
                }, t.prototype.length = function() {
                    return this.T.length
                }, t.prototype.drain = function(t) {
                    var n = this;
                    return new jt(function(r) {
                        var e = setTimeout(function() {
                            t && t > 0 && r(!1)
                        }, t);
                        jt.all(n.T).then(function() {
                            clearTimeout(e), r(!0)
                        }).then(null, function() {
                            r(!0)
                        })
                    })
                }, t
            }(),
            _t = {
                nowSeconds: function() {
                    return Date.now() / 1e3
                }
            };
        var St = X() ? function() {
                try {
                    return (t = module, n = "perf_hooks", t.require(n)).performance
                } catch (t) {
                    return
                }
                var t, n
            }() : function() {
                var t = W().performance;
                if (t && t.now) return {
                    now: function() {
                        return t.now()
                    },
                    timeOrigin: Date.now() - t.now()
                }
            }(),
            Ot = void 0 === St ? _t : {
                nowSeconds: function() {
                    return (St.timeOrigin + St.now()) / 1e3
                }
            },
            Tt = _t.nowSeconds.bind(_t),
            Dt = (Ot.nowSeconds.bind(Ot), function() {
                var t = W().performance;
                if (t) t.timeOrigin ? t.timeOrigin : t.timing && t.timing.navigationStart || Date.now()
            }(), function() {
                function t() {
                    this.D = !1, this.R = [], this.I = [], this.N = [], this.M = {}, this.A = {}, this.C = {}, this.q = {}
                }
                return t.clone = function(n) {
                    var r = new t;
                    return n && (r.N = f(n.N), r.A = s({}, n.A), r.C = s({}, n.C), r.q = s({}, n.q), r.M = n.M, r.L = n.L, r.U = n.U, r.H = n.H, r.P = n.P, r.F = n.F, r.I = f(n.I)), r
                }, t.prototype.addScopeListener = function(t) {
                    this.R.push(t)
                }, t.prototype.addEventProcessor = function(t) {
                    return this.I.push(t), this
                }, t.prototype.setUser = function(t) {
                    return this.M = t || {}, this.H && this.H.update({
                        user: t
                    }), this.X(), this
                }, t.prototype.getUser = function() {
                    return this.M
                }, t.prototype.setTags = function(t) {
                    return this.A = s(s({}, this.A), t), this.X(), this
                }, t.prototype.setTag = function(t, n) {
                    var r;
                    return this.A = s(s({}, this.A), ((r = {})[t] = n, r)), this.X(), this
                }, t.prototype.setExtras = function(t) {
                    return this.C = s(s({}, this.C), t), this.X(), this
                }, t.prototype.setExtra = function(t, n) {
                    var r;
                    return this.C = s(s({}, this.C), ((r = {})[t] = n, r)), this.X(), this
                }, t.prototype.setFingerprint = function(t) {
                    return this.F = t, this.X(), this
                }, t.prototype.setLevel = function(t) {
                    return this.L = t, this.X(), this
                }, t.prototype.setTransactionName = function(t) {
                    return this.P = t, this.X(), this
                }, t.prototype.setTransaction = function(t) {
                    return this.setTransactionName(t)
                }, t.prototype.setContext = function(t, n) {
                    var r;
                    return null === n ? delete this.q[t] : this.q = s(s({}, this.q), ((r = {})[t] = n, r)), this.X(), this
                }, t.prototype.setSpan = function(t) {
                    return this.U = t, this.X(), this
                }, t.prototype.getSpan = function() {
                    return this.U
                }, t.prototype.getTransaction = function() {
                    var t, n, r, e, i = this.getSpan();
                    return (null === (t = i) || void 0 === t ? void 0 : t.transaction) ? null === (n = i) || void 0 === n ? void 0 : n.transaction : (null === (e = null === (r = i) || void 0 === r ? void 0 : r.spanRecorder) || void 0 === e ? void 0 : e.spans[0]) ? i.spanRecorder.spans[0] : void 0
                }, t.prototype.setSession = function(t) {
                    return t ? this.H = t : delete this.H, this.X(), this
                }, t.prototype.getSession = function() {
                    return this.H
                }, t.prototype.update = function(n) {
                    if (!n) return this;
                    if ("function" == typeof n) {
                        var r = n(this);
                        return r instanceof t ? r : this
                    }
                    return n instanceof t ? (this.A = s(s({}, this.A), n.A), this.C = s(s({}, this.C), n.C), this.q = s(s({}, this.q), n.q), n.M && Object.keys(n.M).length && (this.M = n.M), n.L && (this.L = n.L), n.F && (this.F = n.F)) : y(n) && (n = n, this.A = s(s({}, this.A), n.tags), this.C = s(s({}, this.C), n.extra), this.q = s(s({}, this.q), n.contexts), n.user && (this.M = n.user), n.level && (this.L = n.level), n.fingerprint && (this.F = n.fingerprint)), this
                }, t.prototype.clear = function() {
                    return this.N = [], this.A = {}, this.C = {}, this.M = {}, this.q = {}, this.L = void 0, this.P = void 0, this.F = void 0, this.U = void 0, this.H = void 0, this.X(), this
                }, t.prototype.addBreadcrumb = function(t, n) {
                    var r = s({
                        timestamp: Tt()
                    }, t);
                    return this.N = void 0 !== n && n >= 0 ? f(this.N, [r]).slice(-n) : f(this.N, [r]), this.X(), this
                }, t.prototype.clearBreadcrumbs = function() {
                    return this.N = [], this.X(), this
                }, t.prototype.applyToEvent = function(t, n) {
                    var r;
                    if (this.C && Object.keys(this.C).length && (t.extra = s(s({}, this.C), t.extra)), this.A && Object.keys(this.A).length && (t.tags = s(s({}, this.A), t.tags)), this.M && Object.keys(this.M).length && (t.user = s(s({}, this.M), t.user)), this.q && Object.keys(this.q).length && (t.contexts = s(s({}, this.q), t.contexts)), this.L && (t.level = this.L), this.P && (t.transaction = this.P), this.U) {
                        t.contexts = s({
                            trace: this.U.getTraceContext()
                        }, t.contexts);
                        var e = null === (r = this.U.transaction) || void 0 === r ? void 0 : r.name;
                        e && (t.tags = s({
                            transaction: e
                        }, t.tags))
                    }
                    return this.J(t), t.breadcrumbs = f(t.breadcrumbs || [], this.N), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this.W(f(Rt(), this.I), t, n)
                }, t.prototype.W = function(t, n, r, e) {
                    var i = this;
                    return void 0 === e && (e = 0), new jt(function(o, u) {
                        var c = t[e];
                        if (null === n || "function" != typeof c) o(n);
                        else {
                            var a = c(s({}, n), r);
                            w(a) ? a.then(function(n) {
                                return i.W(t, n, r, e + 1).then(o)
                            }).then(null, u) : i.W(t, a, r, e + 1).then(o).then(null, u)
                        }
                    })
                }, t.prototype.X = function() {
                    var t = this;
                    this.D || (this.D = !0, setTimeout(function() {
                        t.R.forEach(function(n) {
                            n(t)
                        }), t.D = !1
                    }))
                }, t.prototype.J = function(t) {
                    t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this.F && (t.fingerprint = t.fingerprint.concat(this.F)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                }, t
            }());

        function Rt() {
            var t = W();
            return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
        }

        function It(t) {
            Rt().push(t)
        }
        var Nt = function() {
                function t(t) {
                    this.errors = 0, this.sid = $(), this.timestamp = Date.now(), this.started = Date.now(), this.duration = 0, this.status = i.Ok, t && this.update(t)
                }
                return t.prototype.update = function(t) {
                    void 0 === t && (t = {}), t.user && (t.user.ip_address && (this.ipAddress = t.user.ip_address), t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || Date.now(), t.sid && (this.sid = 32 === t.sid.length ? t.sid : $()), t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), "number" == typeof t.duration ? this.duration = t.duration : this.duration = this.timestamp - this.started, t.release && (this.release = t.release), t.environment && (this.environment = t.environment), t.ipAddress && (this.ipAddress = t.ipAddress), t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status)
                }, t.prototype.close = function(t) {
                    t ? this.update({
                        status: t
                    }) : this.status === i.Ok ? this.update({
                        status: i.Exited
                    }) : this.update()
                }, t.prototype.toJSON = function() {
                    return F({
                        sid: "" + this.sid,
                        init: !0,
                        started: new Date(this.started).toISOString(),
                        timestamp: new Date(this.timestamp).toISOString(),
                        status: this.status,
                        errors: this.errors,
                        did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                        duration: this.duration,
                        attrs: F({
                            release: this.release,
                            environment: this.environment,
                            ip_address: this.ipAddress,
                            user_agent: this.userAgent
                        })
                    })
                }, t
            }(),
            Mt = 3,
            At = function() {
                function t(t, n, r) {
                    void 0 === n && (n = new Dt), void 0 === r && (r = Mt), this.$ = r, this.B = [{}], this.getStackTop().scope = n, this.bindClient(t)
                }
                return t.prototype.isOlderThan = function(t) {
                    return this.$ < t
                }, t.prototype.bindClient = function(t) {
                    this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                }, t.prototype.pushScope = function() {
                    var t = Dt.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: t
                    }), t
                }, t.prototype.popScope = function() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }, t.prototype.withScope = function(t) {
                    var n = this.pushScope();
                    try {
                        t(n)
                    } finally {
                        this.popScope()
                    }
                }, t.prototype.getClient = function() {
                    return this.getStackTop().client
                }, t.prototype.getScope = function() {
                    return this.getStackTop().scope
                }, t.prototype.getStack = function() {
                    return this.B
                }, t.prototype.getStackTop = function() {
                    return this.B[this.B.length - 1]
                }, t.prototype.captureException = function(t, n) {
                    var r = this.G = $(),
                        e = n;
                    if (!n) {
                        var i = void 0;
                        try {
                            throw new Error("Sentry syntheticException")
                        } catch (t) {
                            i = t
                        }
                        e = {
                            originalException: t,
                            syntheticException: i
                        }
                    }
                    return this.V("captureException", t, s(s({}, e), {
                        event_id: r
                    })), r
                }, t.prototype.captureMessage = function(t, n, r) {
                    var e = this.G = $(),
                        i = r;
                    if (!r) {
                        var o = void 0;
                        try {
                            throw new Error(t)
                        } catch (t) {
                            o = t
                        }
                        i = {
                            originalException: t,
                            syntheticException: o
                        }
                    }
                    return this.V("captureMessage", t, n, s(s({}, i), {
                        event_id: e
                    })), e
                }, t.prototype.captureEvent = function(t, n) {
                    var r = this.G = $();
                    return this.V("captureEvent", t, s(s({}, n), {
                        event_id: r
                    })), r
                }, t.prototype.lastEventId = function() {
                    return this.G
                }, t.prototype.addBreadcrumb = function(t, n) {
                    var r = this.getStackTop(),
                        e = r.scope,
                        i = r.client;
                    if (e && i) {
                        var o = i.getOptions && i.getOptions() || {},
                            u = o.beforeBreadcrumb,
                            c = void 0 === u ? null : u,
                            a = o.maxBreadcrumbs,
                            f = void 0 === a ? 100 : a;
                        if (!(f <= 0)) {
                            var h = Tt(),
                                v = s({
                                    timestamp: h
                                }, t),
                                l = c ? z(function() {
                                    return c(v, n)
                                }) : v;
                            null !== l && e.addBreadcrumb(l, Math.min(f, 100))
                        }
                    }
                }, t.prototype.setUser = function(t) {
                    var n = this.getScope();
                    n && n.setUser(t)
                }, t.prototype.setTags = function(t) {
                    var n = this.getScope();
                    n && n.setTags(t)
                }, t.prototype.setExtras = function(t) {
                    var n = this.getScope();
                    n && n.setExtras(t)
                }, t.prototype.setTag = function(t, n) {
                    var r = this.getScope();
                    r && r.setTag(t, n)
                }, t.prototype.setExtra = function(t, n) {
                    var r = this.getScope();
                    r && r.setExtra(t, n)
                }, t.prototype.setContext = function(t, n) {
                    var r = this.getScope();
                    r && r.setContext(t, n)
                }, t.prototype.configureScope = function(t) {
                    var n = this.getStackTop(),
                        r = n.scope,
                        e = n.client;
                    r && e && t(r)
                }, t.prototype.run = function(t) {
                    var n = qt(this);
                    try {
                        t(this)
                    } finally {
                        qt(n)
                    }
                }, t.prototype.getIntegration = function(t) {
                    var n = this.getClient();
                    if (!n) return null;
                    try {
                        return n.getIntegration(t)
                    } catch (n) {
                        return nt.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                    }
                }, t.prototype.startSpan = function(t) {
                    return this.K("startSpan", t)
                }, t.prototype.startTransaction = function(t, n) {
                    return this.K("startTransaction", t, n)
                }, t.prototype.traceHeaders = function() {
                    return this.K("traceHeaders")
                }, t.prototype.startSession = function(t) {
                    this.endSession();
                    var n = this.getStackTop(),
                        r = n.scope,
                        e = n.client,
                        i = e && e.getOptions() || {},
                        o = i.release,
                        u = i.environment,
                        c = new Nt(s(s({
                            release: o,
                            environment: u
                        }, r && {
                            user: r.getUser()
                        }), t));
                    return r && r.setSession(c), c
                }, t.prototype.endSession = function() {
                    var t = this.getStackTop(),
                        n = t.scope,
                        r = t.client;
                    if (n) {
                        var e = n.getSession && n.getSession();
                        e && (e.close(), r && r.captureSession && r.captureSession(e), n.setSession())
                    }
                }, t.prototype.V = function(t) {
                    for (var n, r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
                    var i = this.getStackTop(),
                        o = i.scope,
                        u = i.client;
                    u && u[t] && (n = u)[t].apply(n, f(r, [o]))
                }, t.prototype.K = function(t) {
                    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    var e = Ct().__SENTRY__;
                    if (e && e.extensions && "function" == typeof e.extensions[t]) return e.extensions[t].apply(this, n);
                    nt.warn("Extension method " + t + " couldn't be found, doing nothing.")
                }, t
            }();

        function Ct() {
            var t = W();
            return t.__SENTRY__ = t.__SENTRY__ || {
                extensions: {},
                hub: void 0
            }, t
        }

        function qt(t) {
            var n = Ct(),
                r = Ht(n);
            return Pt(n, t), r
        }

        function Lt() {
            var t = Ct();
            return Ut(t) && !Ht(t).isOlderThan(Mt) || Pt(t, new At), X() ? function(t) {
                try {
                    var n = (e = Ct().__SENTRY__) && e.extensions && e.extensions.domain && e.extensions.domain.active;
                    if (!n) return Ht(t);
                    if (!Ut(n) || Ht(n).isOlderThan(Mt)) {
                        var r = Ht(t).getStackTop();
                        Pt(n, new At(r.client, Dt.clone(r.scope)))
                    }
                    return Ht(n)
                } catch (n) {
                    return Ht(t)
                }
                var e
            }(t) : Ht(t)
        }

        function Ut(t) {
            return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
        }

        function Ht(t) {
            return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new At, t.__SENTRY__.hub)
        }

        function Pt(t, n) {
            return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = n, !0)
        }

        function Ft(t) {
            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var e = Lt();
            if (e && e[t]) return e[t].apply(e, f(n));
            throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
        }

        function captureException(t, n) {
            var r;
            try {
                throw new Error("Sentry syntheticException")
            } catch (t) {
                r = t
            }
            return Ft("captureException", t, {
                captureContext: n,
                originalException: t,
                syntheticException: r
            })
        }

        function Xt(t) {
            Ft("withScope", t)
        }
        var Jt = function() {
                function t(t) {
                    this.dsn = t, this.Y = new S(t)
                }
                return t.prototype.getDsn = function() {
                    return this.Y
                }, t.prototype.getBaseApiEndpoint = function() {
                    var t = this.Y,
                        n = t.protocol ? t.protocol + ":" : "",
                        r = t.port ? ":" + t.port : "";
                    return n + "//" + t.host + r + (t.path ? "/" + t.path : "") + "/api/"
                }, t.prototype.getStoreEndpoint = function() {
                    return this.Z("store")
                }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                    return this.getStoreEndpoint() + "?" + this.tt()
                }, t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                    return this.nt() + "?" + this.tt()
                }, t.prototype.getStoreEndpointPath = function() {
                    var t = this.Y;
                    return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
                }, t.prototype.getRequestHeaders = function(t, n) {
                    var r = this.Y,
                        e = ["Sentry sentry_version=7"];
                    return e.push("sentry_client=" + t + "/" + n), e.push("sentry_key=" + r.user), r.pass && e.push("sentry_secret=" + r.pass), {
                        "Content-Type": "application/json",
                        "X-Sentry-Auth": e.join(", ")
                    }
                }, t.prototype.getReportDialogEndpoint = function(t) {
                    void 0 === t && (t = {});
                    var n = this.Y,
                        r = this.getBaseApiEndpoint() + "embed/error-page/",
                        e = [];
                    for (var i in e.push("dsn=" + n.toString()), t)
                        if ("user" === i) {
                            if (!t.user) continue;
                            t.user.name && e.push("name=" + encodeURIComponent(t.user.name)), t.user.email && e.push("email=" + encodeURIComponent(t.user.email))
                        } else e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                    return e.length ? r + "?" + e.join("&") : r
                }, t.prototype.nt = function() {
                    return this.Z("envelope")
                }, t.prototype.Z = function(t) {
                    return "" + this.getBaseApiEndpoint() + this.Y.projectId + "/" + t + "/"
                }, t.prototype.tt = function() {
                    var t, n = {
                        sentry_key: this.Y.user,
                        sentry_version: "7"
                    };
                    return t = n, Object.keys(t).map(function(n) {
                        return encodeURIComponent(n) + "=" + encodeURIComponent(t[n])
                    }).join("&")
                }, t
            }(),
            Wt = [];

        function $t(t) {
            var n = {};
            return function(t) {
                var n = t.defaultIntegrations && f(t.defaultIntegrations) || [],
                    r = t.integrations,
                    e = [];
                if (Array.isArray(r)) {
                    var i = r.map(function(t) {
                            return t.name
                        }),
                        o = [];
                    n.forEach(function(t) {
                        -1 === i.indexOf(t.name) && -1 === o.indexOf(t.name) && (e.push(t), o.push(t.name))
                    }), r.forEach(function(t) {
                        -1 === o.indexOf(t.name) && (e.push(t), o.push(t.name))
                    })
                } else "function" == typeof r ? (e = r(n), e = Array.isArray(e) ? e : [e]) : e = f(n);
                var u = e.map(function(t) {
                    return t.name
                });
                return -1 !== u.indexOf("Debug") && e.push.apply(e, f(e.splice(u.indexOf("Debug"), 1))), e
            }(t).forEach(function(t) {
                n[t.name] = t,
                    function(t) {
                        -1 === Wt.indexOf(t.name) && (t.setupOnce(It, Lt), Wt.push(t.name), nt.log("Integration installed: " + t.name))
                    }(t)
            }), n
        }
        var Bt, Gt = function() {
                function t(t, n) {
                    this.rt = {}, this.et = 0, this.it = new t(n), this.ot = n, n.dsn && (this.ut = new S(n.dsn))
                }
                return t.prototype.captureException = function(t, n, r) {
                    var e = this,
                        i = n && n.event_id;
                    return this.st(this.ct().eventFromException(t, n).then(function(t) {
                        return e.at(t, n, r)
                    }).then(function(t) {
                        i = t
                    })), i
                }, t.prototype.captureMessage = function(t, n, r, e) {
                    var i = this,
                        o = r && r.event_id,
                        u = p(t) ? this.ct().eventFromMessage("" + t, n, r) : this.ct().eventFromException(t, r);
                    return this.st(u.then(function(t) {
                        return i.at(t, r, e)
                    }).then(function(t) {
                        o = t
                    })), o
                }, t.prototype.captureEvent = function(t, n, r) {
                    var e = n && n.event_id;
                    return this.st(this.at(t, n, r).then(function(t) {
                        e = t
                    })), e
                }, t.prototype.captureSession = function(t) {
                    t.release ? this.ft(t) : nt.warn("Discarded session because of missing release")
                }, t.prototype.getDsn = function() {
                    return this.ut
                }, t.prototype.getOptions = function() {
                    return this.ot
                }, t.prototype.flush = function(t) {
                    var n = this;
                    return this.ht(t).then(function(r) {
                        return n.ct().getTransport().close(t).then(function(t) {
                            return r && t
                        })
                    })
                }, t.prototype.close = function(t) {
                    var n = this;
                    return this.flush(t).then(function(t) {
                        return n.getOptions().enabled = !1, t
                    })
                }, t.prototype.setupIntegrations = function() {
                    this.vt() && (this.rt = $t(this.ot))
                }, t.prototype.getIntegration = function(t) {
                    try {
                        return this.rt[t.id] || null
                    } catch (n) {
                        return nt.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                    }
                }, t.prototype.lt = function(t, n) {
                    var r, e, o, u = !1,
                        a = !1,
                        f = n.exception && n.exception.values;
                    if (f) {
                        a = !0;
                        try {
                            for (var h = c(f), v = h.next(); !v.done; v = h.next()) {
                                var l = v.value.mechanism;
                                if (l && !1 === l.handled) {
                                    u = !0;
                                    break
                                }
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                v && !v.done && (e = h.return) && e.call(h)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }
                    var d = n.user;
                    if (!t.userAgent) {
                        var p = n.request ? n.request.headers : {};
                        for (var y in p)
                            if ("user-agent" === y.toLowerCase()) {
                                o = p[y];
                                break
                            }
                    }
                    t.update(s(s({}, u && {
                        status: i.Crashed
                    }), {
                        user: d,
                        userAgent: o,
                        errors: t.errors + Number(a || u)
                    }))
                }, t.prototype.ft = function(t) {
                    this.ct().sendSession(t)
                }, t.prototype.ht = function(t) {
                    var n = this;
                    return new jt(function(r) {
                        var e = 0,
                            i = setInterval(function() {
                                0 == n.et ? (clearInterval(i), r(!0)) : (e += 1, t && e >= t && (clearInterval(i), r(!1)))
                            }, 1)
                    })
                }, t.prototype.ct = function() {
                    return this.it
                }, t.prototype.vt = function() {
                    return !1 !== this.getOptions().enabled && void 0 !== this.ut
                }, t.prototype.dt = function(t, n, r) {
                    var e = this,
                        i = this.getOptions().normalizeDepth,
                        o = void 0 === i ? 3 : i,
                        u = s(s({}, t), {
                            event_id: t.event_id || (r && r.event_id ? r.event_id : $()),
                            timestamp: t.timestamp || Tt()
                        });
                    this.pt(u), this.yt(u);
                    var c = n;
                    r && r.captureContext && (c = Dt.clone(c).update(r.captureContext));
                    var a = jt.resolve(u);
                    return c && (a = c.applyToEvent(u, r)), a.then(function(t) {
                        return "number" == typeof o && o > 0 ? e.bt(t, o) : t
                    })
                }, t.prototype.bt = function(t, n) {
                    if (!t) return null;
                    var r = s(s(s(s(s({}, t), t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map(function(t) {
                            return s(s({}, t), t.data && {
                                data: H(t.data, n)
                            })
                        })
                    }), t.user && {
                        user: H(t.user, n)
                    }), t.contexts && {
                        contexts: H(t.contexts, n)
                    }), t.extra && {
                        extra: H(t.extra, n)
                    });
                    return t.contexts && t.contexts.trace && (r.contexts.trace = t.contexts.trace), r
                }, t.prototype.pt = function(t) {
                    var n = this.getOptions(),
                        r = n.environment,
                        e = n.release,
                        i = n.dist,
                        o = n.maxValueLength,
                        u = void 0 === o ? 250 : o;
                    "environment" in t || (t.environment = "environment" in n ? r : "production"), void 0 === t.release && void 0 !== e && (t.release = e), void 0 === t.dist && void 0 !== i && (t.dist = i), t.message && (t.message = R(t.message, u));
                    var s = t.exception && t.exception.values && t.exception.values[0];
                    s && s.value && (s.value = R(s.value, u));
                    var c = t.request;
                    c && c.url && (c.url = R(c.url, u))
                }, t.prototype.yt = function(t) {
                    var n = t.sdk,
                        r = Object.keys(this.rt);
                    n && r.length > 0 && (n.integrations = r)
                }, t.prototype.wt = function(t) {
                    this.ct().sendEvent(t)
                }, t.prototype.at = function(t, n, r) {
                    return this.gt(t, n, r).then(function(t) {
                        return t.event_id
                    }, function(t) {
                        nt.error(t)
                    })
                }, t.prototype.gt = function(t, n, r) {
                    var e = this,
                        i = this.getOptions(),
                        o = i.beforeSend,
                        u = i.sampleRate;
                    if (!this.vt()) return jt.reject(new k("SDK not enabled, will not send event."));
                    var s = "transaction" === t.type;
                    return !s && "number" == typeof u && Math.random() > u ? jt.reject(new k("This event has been sampled, will not send event.")) : this.dt(t, r, n).then(function(t) {
                        if (null === t) throw new k("An event processor returned null, will not send event.");
                        if (n && n.data && !0 === n.data.__sentry__ || s || !o) return t;
                        var r = o(t, n);
                        if (void 0 === r) throw new k("`beforeSend` method has to return `null` or a valid event.");
                        return w(r) ? r.then(function(t) {
                            return t
                        }, function(t) {
                            throw new k("beforeSend rejected with " + t)
                        }) : r
                    }).then(function(t) {
                        if (null === t) throw new k("`beforeSend` returned `null`, will not send event.");
                        var n = r && r.getSession && r.getSession();
                        return !s && n && e.lt(n, t), e.wt(t), t
                    }).then(null, function(t) {
                        if (t instanceof k) throw t;
                        throw e.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }), new k("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                    })
                }, t.prototype.st = function(t) {
                    var n = this;
                    this.et += 1, t.then(function(t) {
                        return n.et -= 1, t
                    }, function(t) {
                        return n.et -= 1, t
                    })
                }, t
            }(),
            zt = function() {
                function n() {}
                return n.prototype.sendEvent = function(n) {
                    return jt.resolve({
                        reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                        status: t.Status.Skipped
                    })
                }, n.prototype.close = function(t) {
                    return jt.resolve(!0)
                }, n
            }(),
            Vt = function() {
                function t(t) {
                    this.ot = t, this.ot.dsn || nt.warn("No DSN provided, backend will not do anything."), this.Et = this.xt()
                }
                return t.prototype.eventFromException = function(t, n) {
                    throw new k("Backend has to implement `eventFromException` method")
                }, t.prototype.eventFromMessage = function(t, n, r) {
                    throw new k("Backend has to implement `eventFromMessage` method")
                }, t.prototype.sendEvent = function(t) {
                    this.Et.sendEvent(t).then(null, function(t) {
                        nt.error("Error while sending event: " + t)
                    })
                }, t.prototype.sendSession = function(t) {
                    this.Et.sendSession ? this.Et.sendSession(t).then(null, function(t) {
                        nt.error("Error while sending session: " + t)
                    }) : nt.warn("Dropping session because custom transport doesn't implement sendSession")
                }, t.prototype.getTransport = function() {
                    return this.Et
                }, t.prototype.xt = function() {
                    return new zt
                }, t
            }();

        function Kt(t, n) {
            return {
                body: JSON.stringify({
                    sent_at: (new Date).toISOString()
                }) + "\n" + JSON.stringify({
                    type: "session"
                }) + "\n" + JSON.stringify(t),
                type: "session",
                url: n.getEnvelopeEndpointWithUrlEncodedAuth()
            }
        }

        function Qt(t, n) {
            var r = "transaction" === t.type,
                e = {
                    body: JSON.stringify(t),
                    type: t.type || "event",
                    url: r ? n.getEnvelopeEndpointWithUrlEncodedAuth() : n.getStoreEndpointWithUrlEncodedAuth()
                };
            if (r) {
                var i = JSON.stringify({
                    event_id: t.event_id,
                    sent_at: (new Date).toISOString()
                }) + "\n" + JSON.stringify({
                    type: t.type
                }) + "\n" + e.body;
                e.body = i
            }
            return e
        }
        var Yt = function() {
                function t() {
                    this.name = t.id
                }
                return t.prototype.setupOnce = function() {
                    Bt = Function.prototype.toString, Function.prototype.toString = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = this.__sentry_original__ || this;
                        return Bt.apply(r, t)
                    }
                }, t.id = "FunctionToString", t
            }(),
            Zt = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
            tn = function() {
                function t(n) {
                    void 0 === n && (n = {}), this.ot = n, this.name = t.id
                }
                return t.prototype.setupOnce = function() {
                    It(function(n) {
                        var r = Lt();
                        if (!r) return n;
                        var e = r.getIntegration(t);
                        if (e) {
                            var i = r.getClient(),
                                o = i ? i.getOptions() : {},
                                u = e.jt(o);
                            if (e.kt(n, u)) return null
                        }
                        return n
                    })
                }, t.prototype.kt = function(t, n) {
                    return this._t(t, n) ? (nt.warn("Event dropped due to being internal Sentry Error.\nEvent: " + G(t)), !0) : this.St(t, n) ? (nt.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + G(t)), !0) : this.Ot(t, n) ? (nt.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + G(t) + ".\nUrl: " + this.Tt(t)), !0) : !this.Dt(t, n) && (nt.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + G(t) + ".\nUrl: " + this.Tt(t)), !0)
                }, t.prototype._t = function(t, n) {
                    if (!n.ignoreInternal) return !1;
                    try {
                        return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
                    } catch (t) {
                        return !1
                    }
                }, t.prototype.St = function(t, n) {
                    return !(!n.ignoreErrors || !n.ignoreErrors.length) && this.Rt(t).some(function(t) {
                        return n.ignoreErrors.some(function(n) {
                            return N(t, n)
                        })
                    })
                }, t.prototype.Ot = function(t, n) {
                    if (!n.denyUrls || !n.denyUrls.length) return !1;
                    var r = this.Tt(t);
                    return !!r && n.denyUrls.some(function(t) {
                        return N(r, t)
                    })
                }, t.prototype.Dt = function(t, n) {
                    if (!n.allowUrls || !n.allowUrls.length) return !0;
                    var r = this.Tt(t);
                    return !r || n.allowUrls.some(function(t) {
                        return N(r, t)
                    })
                }, t.prototype.jt = function(t) {
                    return void 0 === t && (t = {}), {
                        allowUrls: f(this.ot.whitelistUrls || [], this.ot.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                        denyUrls: f(this.ot.blacklistUrls || [], this.ot.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                        ignoreErrors: f(this.ot.ignoreErrors || [], t.ignoreErrors || [], Zt),
                        ignoreInternal: void 0 === this.ot.ignoreInternal || this.ot.ignoreInternal
                    }
                }, t.prototype.Rt = function(t) {
                    if (t.message) return [t.message];
                    if (t.exception) try {
                        var n = t.exception.values && t.exception.values[0] || {},
                            r = n.type,
                            e = void 0 === r ? "" : r,
                            i = n.value,
                            o = void 0 === i ? "" : i;
                        return ["" + o, e + ": " + o]
                    } catch (n) {
                        return nt.error("Cannot extract message for event " + G(t)), []
                    }
                    return []
                }, t.prototype.Tt = function(t) {
                    try {
                        if (t.stacktrace) {
                            var n = t.stacktrace.frames;
                            return n && n[n.length - 1].filename || null
                        }
                        if (t.exception) {
                            var r = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                            return r && r[r.length - 1].filename || null
                        }
                        return null
                    } catch (n) {
                        return nt.error("Cannot extract url for event " + G(t)), null
                    }
                }, t.id = "InboundFilters", t
            }(),
            nn = Object.freeze({
                __proto__: null,
                FunctionToString: Yt,
                InboundFilters: tn
            }),
            rn = "?",
            en = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            on = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
            un = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            sn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            cn = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            an = /Minified React error #\d+;/i;

        function fn(t) {
            var n = null,
                r = 0;
            t && ("number" == typeof t.framesToPop ? r = t.framesToPop : an.test(t.message) && (r = 1));
            try {
                if (n = function(t) {
                        if (!t || !t.stacktrace) return null;
                        for (var n, r = t.stacktrace, e = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = r.split("\n"), u = [], s = 0; s < o.length; s += 2) {
                            var c = null;
                            (n = e.exec(o[s])) ? c = {
                                url: n[2],
                                func: n[3],
                                args: [],
                                line: +n[1],
                                column: null
                            }: (n = i.exec(o[s])) && (c = {
                                url: n[6],
                                func: n[3] || n[4],
                                args: n[5] ? n[5].split(",") : [],
                                line: +n[1],
                                column: +n[2]
                            }), c && (!c.func && c.line && (c.func = rn), u.push(c))
                        }
                        if (!u.length) return null;
                        return {
                            message: vn(t),
                            name: t.name,
                            stack: u
                        }
                    }(t)) return hn(n, r)
            } catch (t) {}
            try {
                if (n = function(t) {
                        if (!t || !t.stack) return null;
                        for (var n, r, e, i = [], o = t.stack.split("\n"), u = 0; u < o.length; ++u) {
                            if (r = en.exec(o[u])) {
                                var s = r[2] && 0 === r[2].indexOf("native");
                                r[2] && 0 === r[2].indexOf("eval") && (n = cn.exec(r[2])) && (r[2] = n[1], r[3] = n[2], r[4] = n[3]), e = {
                                    url: r[2] && 0 === r[2].indexOf("address at ") ? r[2].substr("address at ".length) : r[2],
                                    func: r[1] || rn,
                                    args: s ? [r[2]] : [],
                                    line: r[3] ? +r[3] : null,
                                    column: r[4] ? +r[4] : null
                                }
                            } else if (r = un.exec(o[u])) e = {
                                url: r[2],
                                func: r[1] || rn,
                                args: [],
                                line: +r[3],
                                column: r[4] ? +r[4] : null
                            };
                            else {
                                if (!(r = on.exec(o[u]))) continue;
                                r[3] && r[3].indexOf(" > eval") > -1 && (n = sn.exec(r[3])) ? (r[1] = r[1] || "eval", r[3] = n[1], r[4] = n[2], r[5] = "") : 0 !== u || r[5] || void 0 === t.columnNumber || (i[0].column = t.columnNumber + 1), e = {
                                    url: r[3],
                                    func: r[1] || rn,
                                    args: r[2] ? r[2].split(",") : [],
                                    line: r[4] ? +r[4] : null,
                                    column: r[5] ? +r[5] : null
                                }
                            }!e.func && e.line && (e.func = rn), i.push(e)
                        }
                        if (!i.length) return null;
                        return {
                            message: vn(t),
                            name: t.name,
                            stack: i
                        }
                    }(t)) return hn(n, r)
            } catch (t) {}
            return {
                message: vn(t),
                name: t && t.name,
                stack: [],
                failed: !0
            }
        }

        function hn(t, n) {
            try {
                return s(s({}, t), {
                    stack: t.stack.slice(n)
                })
            } catch (n) {
                return t
            }
        }

        function vn(t) {
            var n = t && t.message;
            return n ? n.error && "string" == typeof n.error.message ? n.error.message : n : "No error message"
        }
        var ln = 50;

        function dn(t) {
            var n = yn(t.stack),
                r = {
                    type: t.name,
                    value: t.message
                };
            return n && n.length && (r.stacktrace = {
                frames: n
            }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
        }

        function pn(t) {
            return {
                exception: {
                    values: [dn(t)]
                }
            }
        }

        function yn(t) {
            if (!t || !t.length) return [];
            var n = t,
                r = n[0].func || "",
                e = n[n.length - 1].func || "";
            return -1 === r.indexOf("captureMessage") && -1 === r.indexOf("captureException") || (n = n.slice(1)), -1 !== e.indexOf("sentryWrapped") && (n = n.slice(0, -1)), n.slice(0, ln).map(function(t) {
                return {
                    colno: null === t.column ? void 0 : t.column,
                    filename: t.url || n[0].url,
                    function: t.func || "?",
                    in_app: !0,
                    lineno: null === t.line ? void 0 : t.line
                }
            }).reverse()
        }

        function mn(n, r, e) {
            var i = wn(r, e && e.syntheticException || void 0, {
                attachStacktrace: n.attachStacktrace
            });
            return K(i, {
                handled: !0,
                type: "generic"
            }), i.level = t.Severity.Error, e && e.event_id && (i.event_id = e.event_id), jt.resolve(i)
        }

        function bn(n, r, e, i) {
            void 0 === e && (e = t.Severity.Info);
            var o = gn(r, i && i.syntheticException || void 0, {
                attachStacktrace: n.attachStacktrace
            });
            return o.level = e, i && i.event_id && (o.event_id = i.event_id), jt.resolve(o)
        }

        function wn(t, n, r) {
            var e, i;
            if (void 0 === r && (r = {}), v(t) && t.error) return e = pn(fn(t = t.error));
            if (l(t) || (i = t, "[object DOMException]" === Object.prototype.toString.call(i))) {
                var o = t,
                    u = o.name || (l(o) ? "DOMError" : "DOMException"),
                    c = o.message ? u + ": " + o.message : u;
                return V(e = gn(c, n, r), c), "code" in o && (e.tags = s(s({}, e.tags), {
                    "DOMException.code": "" + o.code
                })), e
            }
            return h(t) ? e = pn(fn(t)) : y(t) || m(t) ? (K(e = function(t, n, r) {
                var e = {
                    exception: {
                        values: [{
                            type: m(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: "Non-Error " + (r ? "promise rejection" : "exception") + " captured with keys: " + P(t)
                        }]
                    },
                    extra: {
                        __serialized__: q(t)
                    }
                };
                if (n) {
                    var i = yn(fn(n).stack);
                    e.stacktrace = {
                        frames: i
                    }
                }
                return e
            }(t, n, r.rejection), {
                synthetic: !0
            }), e) : (V(e = gn(t, n, r), "" + t, void 0), K(e, {
                synthetic: !0
            }), e)
        }

        function gn(t, n, r) {
            void 0 === r && (r = {});
            var e = {
                message: t
            };
            if (r.attachStacktrace && n) {
                var i = yn(fn(n).stack);
                e.stacktrace = {
                    frames: i
                }
            }
            return e
        }
        var En = function() {
                function n(t) {
                    this.options = t, this.T = new kt(30), this.It = {}, this.Nt = new Jt(this.options.dsn), this.url = this.Nt.getStoreEndpointWithUrlEncodedAuth()
                }
                return n.prototype.sendEvent = function(t) {
                    throw new k("Transport Class has to implement `sendEvent` method")
                }, n.prototype.close = function(t) {
                    return this.T.drain(t)
                }, n.prototype.Mt = function(n) {
                    var r = n.requestType,
                        e = n.response,
                        i = n.headers,
                        o = n.resolve,
                        u = n.reject,
                        s = t.Status.fromHttpCode(e.status);
                    this.At(i) && nt.warn("Too many requests, backing off till: " + this.Ct(r)), s !== t.Status.Success ? u(e) : o({
                        status: s
                    })
                }, n.prototype.Ct = function(t) {
                    return this.It[t] || this.It.all
                }, n.prototype.qt = function(t) {
                    return this.Ct(t) > new Date(Date.now())
                }, n.prototype.At = function(t) {
                    var n, r, e, i, o = Date.now(),
                        u = t["x-sentry-rate-limits"],
                        s = t["retry-after"];
                    if (u) {
                        try {
                            for (var a = c(u.trim().split(",")), f = a.next(); !f.done; f = a.next()) {
                                var h = f.value.split(":", 2),
                                    v = parseInt(h[0], 10),
                                    l = 1e3 * (isNaN(v) ? 60 : v);
                                try {
                                    for (var d = (e = void 0, c(h[1].split(";"))), p = d.next(); !p.done; p = d.next()) {
                                        var y = p.value;
                                        this.It[y || "all"] = new Date(o + l)
                                    }
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        p && !p.done && (i = d.return) && i.call(d)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                f && !f.done && (r = a.return) && r.call(a)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return !0
                    }
                    return !!s && (this.It.all = new Date(o + function(t, n) {
                        if (!n) return Q;
                        var r = parseInt("" + n, 10);
                        if (!isNaN(r)) return 1e3 * r;
                        var e = Date.parse("" + n);
                        return isNaN(e) ? Q : e - t
                    }(o, s)), !0)
                }, n
            }(),
            xn = W(),
            jn = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(n, t), n.prototype.sendEvent = function(t) {
                    return this.Lt(Qt(t, this.Nt), t)
                }, n.prototype.sendSession = function(t) {
                    return this.Lt(Kt(t, this.Nt), t)
                }, n.prototype.Lt = function(t, n) {
                    var r = this;
                    if (this.qt(t.type)) return Promise.reject({
                        event: n,
                        type: t.type,
                        reason: "Transport locked till " + this.Ct(t.type) + " due to too many requests.",
                        status: 429
                    });
                    var e = {
                        body: t.body,
                        method: "POST",
                        referrerPolicy: it() ? "origin" : ""
                    };
                    return void 0 !== this.options.fetchParameters && Object.assign(e, this.options.fetchParameters), void 0 !== this.options.headers && (e.headers = this.options.headers), this.T.add(new jt(function(n, i) {
                        xn.fetch(t.url, e).then(function(e) {
                            var o = {
                                "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": e.headers.get("Retry-After")
                            };
                            r.Mt({
                                requestType: t.type,
                                response: e,
                                headers: o,
                                resolve: n,
                                reject: i
                            })
                        }).catch(i)
                    }))
                }, n
            }(En),
            kn = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(n, t), n.prototype.sendEvent = function(t) {
                    return this.Lt(Qt(t, this.Nt), t)
                }, n.prototype.sendSession = function(t) {
                    return this.Lt(Kt(t, this.Nt), t)
                }, n.prototype.Lt = function(t, n) {
                    var r = this;
                    return this.qt(t.type) ? Promise.reject({
                        event: n,
                        type: t.type,
                        reason: "Transport locked till " + this.Ct(t.type) + " due to too many requests.",
                        status: 429
                    }) : this.T.add(new jt(function(n, e) {
                        var i = new XMLHttpRequest;
                        for (var o in i.onreadystatechange = function() {
                                if (4 === i.readyState) {
                                    var o = {
                                        "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                        "retry-after": i.getResponseHeader("Retry-After")
                                    };
                                    r.Mt({
                                        requestType: t.type,
                                        response: i,
                                        headers: o,
                                        resolve: n,
                                        reject: e
                                    })
                                }
                            }, i.open("POST", t.url), r.options.headers) r.options.headers.hasOwnProperty(o) && i.setRequestHeader(o, r.options.headers[o]);
                        i.send(t.body)
                    }))
                }, n
            }(En),
            _n = Object.freeze({
                __proto__: null,
                BaseTransport: En,
                FetchTransport: jn,
                XHRTransport: kn
            }),
            Sn = function(n) {
                function e() {
                    return null !== n && n.apply(this, arguments) || this
                }
                return r(e, n), e.prototype.eventFromException = function(t, n) {
                    return mn(this.ot, t, n)
                }, e.prototype.eventFromMessage = function(n, r, e) {
                    return void 0 === r && (r = t.Severity.Info), bn(this.ot, n, r, e)
                }, e.prototype.xt = function() {
                    if (!this.ot.dsn) return n.prototype.xt.call(this);
                    var t = s(s({}, this.ot.transportOptions), {
                        dsn: this.ot.dsn
                    });
                    return this.ot.transport ? new this.ot.transport(t) : rt() ? new jn(t) : new kn(t)
                }, e
            }(Vt),
            On = 0;

        function Tn() {
            return On > 0
        }

        function Dn(t, n, r) {
            if (void 0 === n && (n = {}), "function" != typeof t) return t;
            try {
                if (t.__sentry__) return t;
                if (t.__sentry_wrapped__) return t.__sentry_wrapped__
            } catch (n) {
                return t
            }
            var sentryWrapped = function() {
                var e = Array.prototype.slice.call(arguments);
                try {
                    r && "function" == typeof r && r.apply(this, arguments);
                    var i = e.map(function(t) {
                        return Dn(t, n)
                    });
                    return t.handleEvent ? t.handleEvent.apply(this, i) : t.apply(this, i)
                } catch (t) {
                    throw On += 1, setTimeout(function() {
                        On -= 1
                    }), Xt(function(r) {
                        r.addEventProcessor(function(t) {
                            var r = s({}, t);
                            return n.mechanism && (V(r, void 0, void 0), K(r, n.mechanism)), r.extra = s(s({}, r.extra), {
                                arguments: e
                            }), r
                        }), captureException(t)
                    }), t
                }
            };
            try {
                for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (sentryWrapped[e] = t[e])
            } catch (t) {}
            t.prototype = t.prototype || {}, sentryWrapped.prototype = t.prototype, Object.defineProperty(t, "__sentry_wrapped__", {
                enumerable: !1,
                value: sentryWrapped
            }), Object.defineProperties(sentryWrapped, {
                __sentry__: {
                    enumerable: !1,
                    value: !0
                },
                __sentry_original__: {
                    enumerable: !1,
                    value: t
                }
            });
            try {
                Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable && Object.defineProperty(sentryWrapped, "name", {
                    get: function() {
                        return t.name
                    }
                })
            } catch (t) {}
            return sentryWrapped
        }

        function Rn(t) {
            if (void 0 === t && (t = {}), t.eventId)
                if (t.dsn) {
                    var n = document.createElement("script");
                    n.async = !0, n.src = new Jt(t.dsn).getReportDialogEndpoint(t), t.onLoad && (n.onload = t.onLoad), (document.head || document.body).appendChild(n)
                } else nt.error("Missing dsn option in showReportDialog call");
            else nt.error("Missing eventId option in showReportDialog call")
        }
        var In = function() {
                function n(t) {
                    this.name = n.id, this.Ut = !1, this.Ht = !1, this.ot = s({
                        onerror: !0,
                        onunhandledrejection: !0
                    }, t)
                }
                return n.prototype.setupOnce = function() {
                    Error.stackTraceLimit = 50, this.ot.onerror && (nt.log("Global Handler attached: onerror"), this.Pt()), this.ot.onunhandledrejection && (nt.log("Global Handler attached: onunhandledrejection"), this.Ft())
                }, n.prototype.Pt = function() {
                    var t = this;
                    this.Ut || (ft({
                        callback: function(r) {
                            var e = r.error,
                                i = Lt(),
                                o = i.getIntegration(n),
                                u = e && !0 === e.__sentry_own_request__;
                            if (o && !Tn() && !u) {
                                var s = i.getClient(),
                                    c = p(e) ? t.Xt(r.msg, r.url, r.line, r.column) : t.Jt(wn(e, void 0, {
                                        attachStacktrace: s && s.getOptions().attachStacktrace,
                                        rejection: !1
                                    }), r.url, r.line, r.column);
                                K(c, {
                                    handled: !1,
                                    type: "onerror"
                                }), i.captureEvent(c, {
                                    originalException: e
                                })
                            }
                        },
                        type: "error"
                    }), this.Ut = !0)
                }, n.prototype.Ft = function() {
                    var r = this;
                    this.Ht || (ft({
                        callback: function(e) {
                            var i = e;
                            try {
                                "reason" in e ? i = e.reason : "detail" in e && "reason" in e.detail && (i = e.detail.reason)
                            } catch (t) {}
                            var o = Lt(),
                                u = o.getIntegration(n),
                                s = i && !0 === i.__sentry_own_request__;
                            if (!u || Tn() || s) return !0;
                            var c = o.getClient(),
                                a = p(i) ? r.Wt(i) : wn(i, void 0, {
                                    attachStacktrace: c && c.getOptions().attachStacktrace,
                                    rejection: !0
                                });
                            a.level = t.Severity.Error, K(a, {
                                handled: !1,
                                type: "onunhandledrejection"
                            }), o.captureEvent(a, {
                                originalException: i
                            })
                        },
                        type: "unhandledrejection"
                    }), this.Ht = !0)
                }, n.prototype.Xt = function(t, n, r, e) {
                    var i, o = v(t) ? t.message : t;
                    if (d(o)) {
                        var u = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        u && (i = u[1], o = u[2])
                    }
                    var s = {
                        exception: {
                            values: [{
                                type: i || "Error",
                                value: o
                            }]
                        }
                    };
                    return this.Jt(s, n, r, e)
                }, n.prototype.Wt = function(t) {
                    return {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: "Non-Error promise rejection captured with value: " + t
                            }]
                        }
                    }
                }, n.prototype.Jt = function(t, n, r, e) {
                    t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {}, t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
                    var i = isNaN(parseInt(e, 10)) ? void 0 : e,
                        o = isNaN(parseInt(r, 10)) ? void 0 : r,
                        u = d(n) && n.length > 0 ? n : function() {
                            try {
                                return document.location.href
                            } catch (t) {
                                return ""
                            }
                        }();
                    return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
                        colno: i,
                        filename: u,
                        function: "?",
                        in_app: !0,
                        lineno: o
                    }), t
                }, n.id = "GlobalHandlers", n
            }(),
            Nn = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
            Mn = function() {
                function t(n) {
                    this.name = t.id, this.ot = s({
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0
                    }, n)
                }
                return t.prototype.setupOnce = function() {
                    var t = W();
                    (this.ot.setTimeout && M(t, "setTimeout", this.$t.bind(this)), this.ot.setInterval && M(t, "setInterval", this.$t.bind(this)), this.ot.requestAnimationFrame && M(t, "requestAnimationFrame", this.Bt.bind(this)), this.ot.XMLHttpRequest && "XMLHttpRequest" in t && M(XMLHttpRequest.prototype, "send", this.Gt.bind(this)), this.ot.eventTarget) && (Array.isArray(this.ot.eventTarget) ? this.ot.eventTarget : Nn).forEach(this.zt.bind(this))
                }, t.prototype.$t = function(t) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var e = n[0];
                        return n[0] = Dn(e, {
                            mechanism: {
                                data: {
                                    function: D(t)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), t.apply(this, n)
                    }
                }, t.prototype.Bt = function(t) {
                    return function(n) {
                        return t.call(this, Dn(n, {
                            mechanism: {
                                data: {
                                    function: "requestAnimationFrame",
                                    handler: D(t)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    }
                }, t.prototype.zt = function(t) {
                    var n = W(),
                        r = n[t] && n[t].prototype;
                    r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (M(r, "addEventListener", function(n) {
                        return function(r, e, i) {
                            try {
                                "function" == typeof e.handleEvent && (e.handleEvent = Dn(e.handleEvent.bind(e), {
                                    mechanism: {
                                        data: {
                                            function: "handleEvent",
                                            handler: D(e),
                                            target: t
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }))
                            } catch (t) {}
                            return n.call(this, r, Dn(e, {
                                mechanism: {
                                    data: {
                                        function: "addEventListener",
                                        handler: D(e),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }), i)
                        }
                    }), M(r, "removeEventListener", function(t) {
                        return function(n, r, e) {
                            var i, o = r;
                            try {
                                var u = null === (i = o) || void 0 === i ? void 0 : i.__sentry_wrapped__;
                                u && t.call(this, n, u, e)
                            } catch (t) {}
                            return t.call(this, n, o, e)
                        }
                    }))
                }, t.prototype.Gt = function(t) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var e = this;
                        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(t) {
                            t in e && "function" == typeof e[t] && M(e, t, function(n) {
                                var r = {
                                    mechanism: {
                                        data: {
                                            function: t,
                                            handler: D(n)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                };
                                return n.__sentry_original__ && (r.mechanism.data.handler = D(n.__sentry_original__)), Dn(n, r)
                            })
                        }), t.apply(this, n)
                    }
                }, t.id = "TryCatch", t
            }(),
            An = function() {
                function n(t) {
                    this.name = n.id, this.ot = s({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    }, t)
                }
                return n.prototype.addSentryBreadcrumb = function(t) {
                    this.ot.sentry && Lt().addBreadcrumb({
                        category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                        event_id: t.event_id,
                        level: t.level,
                        message: G(t)
                    }, {
                        event: t
                    })
                }, n.prototype.setupOnce = function() {
                    var t = this;
                    this.ot.console && ft({
                        callback: function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            t.Vt.apply(t, f(n))
                        },
                        type: "console"
                    }), this.ot.dom && ft({
                        callback: function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            t.Kt.apply(t, f(n))
                        },
                        type: "dom"
                    }), this.ot.xhr && ft({
                        callback: function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            t.Qt.apply(t, f(n))
                        },
                        type: "xhr"
                    }), this.ot.fetch && ft({
                        callback: function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            t.Yt.apply(t, f(n))
                        },
                        type: "fetch"
                    }), this.ot.history && ft({
                        callback: function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            t.Zt.apply(t, f(n))
                        },
                        type: "history"
                    })
                }, n.prototype.Vt = function(n) {
                    var r = {
                        category: "console",
                        data: {
                            arguments: n.args,
                            logger: "console"
                        },
                        level: t.Severity.fromString(n.level),
                        message: I(n.args, " ")
                    };
                    if ("assert" === n.level) {
                        if (!1 !== n.args[0]) return;
                        r.message = "Assertion failed: " + (I(n.args.slice(1), " ") || "console.assert"), r.data.arguments = n.args.slice(1)
                    }
                    Lt().addBreadcrumb(r, {
                        input: n.args,
                        level: n.level
                    })
                }, n.prototype.Kt = function(t) {
                    var n;
                    try {
                        n = t.event.target ? E(t.event.target) : E(t.event)
                    } catch (t) {
                        n = "<unknown>"
                    }
                    0 !== n.length && Lt().addBreadcrumb({
                        category: "ui." + t.name,
                        message: n
                    }, {
                        event: t.event,
                        name: t.name
                    })
                }, n.prototype.Qt = function(t) {
                    if (t.endTimestamp) {
                        if (t.xhr.__sentry_own_request__) return;
                        var n = t.xhr.__sentry_xhr__ || {},
                            r = n.method,
                            e = n.url,
                            i = n.status_code,
                            o = n.body;
                        Lt().addBreadcrumb({
                            category: "xhr",
                            data: {
                                method: r,
                                url: e,
                                status_code: i
                            },
                            type: "http"
                        }, {
                            xhr: t.xhr,
                            input: o
                        })
                    } else;
                }, n.prototype.Yt = function(n) {
                    n.endTimestamp && (n.fetchData.url.match(/sentry_key/) && "POST" === n.fetchData.method || (n.error ? Lt().addBreadcrumb({
                        category: "fetch",
                        data: n.fetchData,
                        level: t.Severity.Error,
                        type: "http"
                    }, {
                        data: n.error,
                        input: n.args
                    }) : Lt().addBreadcrumb({
                        category: "fetch",
                        data: s(s({}, n.fetchData), {
                            status_code: n.response.status
                        }),
                        type: "http"
                    }, {
                        input: n.args,
                        response: n.response
                    })))
                }, n.prototype.Zt = function(t) {
                    var n = W(),
                        r = t.from,
                        e = t.to,
                        i = B(n.location.href),
                        o = B(r),
                        u = B(e);
                    o.path || (o = i), i.protocol === u.protocol && i.host === u.host && (e = u.relative), i.protocol === o.protocol && i.host === o.host && (r = o.relative), Lt().addBreadcrumb({
                        category: "navigation",
                        data: {
                            from: r,
                            to: e
                        }
                    })
                }, n.id = "Breadcrumbs", n
            }(),
            Cn = "cause",
            qn = 5,
            Ln = function() {
                function t(n) {
                    void 0 === n && (n = {}), this.name = t.id, this.tn = n.key || Cn, this.O = n.limit || qn
                }
                return t.prototype.setupOnce = function() {
                    It(function(n, r) {
                        var e = Lt().getIntegration(t);
                        return e ? e.nn(n, r) : n
                    })
                }, t.prototype.nn = function(t, n) {
                    if (!(t.exception && t.exception.values && n && g(n.originalException, Error))) return t;
                    var r = this.rn(n.originalException, this.tn);
                    return t.exception.values = f(r, t.exception.values), t
                }, t.prototype.rn = function(t, n, r) {
                    if (void 0 === r && (r = []), !g(t[n], Error) || r.length + 1 >= this.O) return r;
                    var e = dn(fn(t[n]));
                    return this.rn(t[n], n, f([e], r))
                }, t.id = "LinkedErrors", t
            }(),
            Un = W(),
            Hn = function() {
                function t() {
                    this.name = t.id
                }
                return t.prototype.setupOnce = function() {
                    It(function(n) {
                        var r, e, i;
                        if (Lt().getIntegration(t)) {
                            if (!Un.navigator && !Un.location && !Un.document) return n;
                            var o = (null === (r = n.request) || void 0 === r ? void 0 : r.url) || (null === (e = Un.location) || void 0 === e ? void 0 : e.href),
                                u = (Un.document || {}).referrer,
                                c = (Un.navigator || {}).userAgent,
                                a = s(s(s({}, null === (i = n.request) || void 0 === i ? void 0 : i.headers), u && {
                                    Referer: u
                                }), c && {
                                    "User-Agent": c
                                }),
                                f = s(s({}, o && {
                                    url: o
                                }), {
                                    headers: a
                                });
                            return s(s({}, n), {
                                request: f
                            })
                        }
                        return n
                    })
                }, t.id = "UserAgent", t
            }(),
            Pn = Object.freeze({
                __proto__: null,
                GlobalHandlers: In,
                TryCatch: Mn,
                Breadcrumbs: An,
                LinkedErrors: Ln,
                UserAgent: Hn
            }),
            Fn = "sentry.javascript.browser",
            Xn = function(t) {
                function n(n) {
                    return void 0 === n && (n = {}), t.call(this, Sn, n) || this
                }
                return r(n, t), n.prototype.showReportDialog = function(t) {
                    void 0 === t && (t = {}), W().document && (this.vt() ? Rn(s(s({}, t), {
                        dsn: t.dsn || this.getDsn()
                    })) : nt.error("Trying to call showReportDialog with Sentry Client disabled"))
                }, n.prototype.dt = function(n, r, e) {
                    return n.platform = n.platform || "javascript", n.sdk = s(s({}, n.sdk), {
                        name: Fn,
                        packages: f(n.sdk && n.sdk.packages || [], [{
                            name: "npm:@sentry/browser",
                            version: "5.27.3"
                        }]),
                        version: "5.27.3"
                    }), t.prototype.dt.call(this, n, r, e)
                }, n.prototype.wt = function(n) {
                    var r = this.getIntegration(An);
                    r && r.addSentryBreadcrumb(n), t.prototype.wt.call(this, n)
                }, n
            }(Gt),
            Jn = [new tn, new Yt, new Mn, new An, new In, new Ln, new Hn];
        var Wn = {},
            $n = W();
        $n.Sentry && $n.Sentry.Integrations && (Wn = $n.Sentry.Integrations);
        var Bn = s(s(s({}, Wn), nn), Pn);
        return t.BrowserClient = Xn, t.Hub = At, t.Integrations = Bn, t.SDK_NAME = Fn, t.SDK_VERSION = "5.27.3", t.Scope = Dt, t.Transports = _n, t.addBreadcrumb = function(t) {
            Ft("addBreadcrumb", t)
        }, t.addGlobalEventProcessor = It, t.captureEvent = function(t) {
            return Ft("captureEvent", t)
        }, t.captureException = captureException, t.captureMessage = function(t, n) {
            var r;
            try {
                throw new Error(t)
            } catch (t) {
                r = t
            }
            return Ft("captureMessage", t, "string" == typeof n ? n : void 0, s({
                originalException: t,
                syntheticException: r
            }, "string" != typeof n ? {
                captureContext: n
            } : void 0))
        }, t.close = function(t) {
            var n = Lt().getClient();
            return n ? n.close(t) : jt.reject(!1)
        }, t.configureScope = function(t) {
            Ft("configureScope", t)
        }, t.defaultIntegrations = Jn, t.eventFromException = mn, t.eventFromMessage = bn, t.flush = function(t) {
            var n = Lt().getClient();
            return n ? n.flush(t) : jt.reject(!1)
        }, t.forceLoad = function() {}, t.getCurrentHub = Lt, t.getHubFromCarrier = Ht, t.init = function(t) {
            if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = Jn), void 0 === t.release) {
                var n = W();
                n.SENTRY_RELEASE && n.SENTRY_RELEASE.id && (t.release = n.SENTRY_RELEASE.id)
            }
            void 0 === t.autoSessionTracking && (t.autoSessionTracking = !1),
                function(t, n) {
                    !0 === n.debug && nt.enable();
                    var r = Lt(),
                        e = new t(n);
                    r.bindClient(e)
                }(Xn, t), t.autoSessionTracking && function() {
                    var t = W(),
                        n = Lt(),
                        r = "complete" === document.readyState,
                        e = !1,
                        i = function() {
                            e && r && n.endSession()
                        },
                        o = function() {
                            r = !0, i(), t.removeEventListener("load", o)
                        };
                    n.startSession(), r || t.addEventListener("load", o);
                    try {
                        var u = new PerformanceObserver(function(t, n) {
                                t.getEntries().forEach(function(t) {
                                    "first-contentful-paint" === t.name && t.startTime < s && (n.disconnect(), e = !0, i())
                                })
                            }),
                            s = "hidden" === document.visibilityState ? 0 : 1 / 0;
                        document.addEventListener("visibilitychange", function(t) {
                            s = Math.min(s, t.timeStamp)
                        }, {
                            once: !0
                        }), u.observe({
                            type: "paint",
                            buffered: !0
                        })
                    } catch (t) {
                        e = !0, i()
                    }
                }()
        }, t.injectReportDialog = Rn, t.lastEventId = function() {
            return Lt().lastEventId()
        }, t.makeMain = qt, t.onLoad = function(t) {
            t()
        }, t.setContext = function(t, n) {
            Ft("setContext", t, n)
        }, t.setExtra = function(t, n) {
            Ft("setExtra", t, n)
        }, t.setExtras = function(t) {
            Ft("setExtras", t)
        }, t.setTag = function(t, n) {
            Ft("setTag", t, n)
        }, t.setTags = function(t) {
            Ft("setTags", t)
        }, t.setUser = function(t) {
            Ft("setUser", t)
        }, t.showReportDialog = function(t) {
            void 0 === t && (t = {}), t.eventId || (t.eventId = Lt().lastEventId());
            var n = Lt().getClient();
            n && n.showReportDialog(t)
        }, t.startTransaction = function(t, n) {
            return Ft("startTransaction", s({}, t), n)
        }, t.withScope = Xt, t.wrap = function(t) {
            return Dn(t)()
        }, t
    }({});;
    (function() {
        if (!String.prototype.startsWith) {
            String.prototype.startsWith = function(searchString, position) {
                position = position || 0;
                return this.indexOf(searchString, position) === position;
            };
        }
        if (typeof wp_sentry === 'object') {
            var regexListUrls = function(listUrls) {
                for (var url in listUrls) {
                    if (listUrls.hasOwnProperty(url)) {
                        if (listUrls[url].startsWith('regex:')) {
                            listUrls[url] = new RegExp(listUrls[url].slice(6), 'i');
                        }
                    }
                }
            };
            if (typeof wp_sentry.whitelistUrls === 'object') {
                regexListUrls(wp_sentry.whitelistUrls);
            }
            if (typeof wp_sentry.blacklistUrls === 'object') {
                regexListUrls(wp_sentry.blacklistUrls);
            }
            if (typeof wp_sentry_hook === 'function') {
                var hookResult = wp_sentry_hook(wp_sentry);
                if (hookResult === false) {
                    return;
                }
            }
            Sentry.init(wp_sentry);
            if (typeof wp_sentry.context === 'object') {
                Sentry.configureScope(function(scope) {
                    if (typeof wp_sentry.context.user === 'object') {
                        scope.setUser(wp_sentry.context.user);
                    }
                    if (typeof wp_sentry.context.tags === 'object') {
                        for (var tag in wp_sentry.context.tags) {
                            if (wp_sentry.context.tags.hasOwnProperty(tag)) {
                                scope.setTag(tag, wp_sentry.context.tags[tag]);
                            }
                        }
                    }
                    if (typeof wp_sentry.context.extra === 'object') {
                        for (var extra in wp_sentry.context.extra) {
                            if (wp_sentry.context.extra.hasOwnProperty(extra)) {
                                scope.setExtra(extra, wp_sentry.context.extra[extra]);
                            }
                        }
                    }
                });
            }
        }
    })();
} catch (e) {}
try { /*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
    "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
        function(a, b, c) {
            function d(c) {
                var d = b.console;
                f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
            }

            function e(b, c, e, f) {
                if (Object.defineProperty) try {
                    return void Object.defineProperty(b, c, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return d(f), e
                        },
                        set: function(a) {
                            d(f), e = a
                        }
                    })
                } catch (g) {}
                a._definePropertyBroken = !0, b[c] = e
            }
            a.migrateVersion = "1.4.1";
            var f = {};
            a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
                f = {}, a.migrateWarnings.length = 0
            }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
            var g = a("<input/>", {
                    size: 1
                }).attr("size") && a.attrFn,
                h = a.attr,
                i = a.attrHooks.value && a.attrHooks.value.get || function() {
                    return null
                },
                j = a.attrHooks.value && a.attrHooks.value.set || function() {
                    return c
                },
                k = /^(?:input|button)$/i,
                l = /^[238]$/,
                m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                n = /^(?:checked|selected)$/i;
            e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
                var j = e.toLowerCase(),
                    o = b && b.nodeType;
                return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                    get: function(b, d) {
                        var e, f = a.prop(b, d);
                        return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                    },
                    set: function(b, c, d) {
                        var e;
                        return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                    }
                }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
            }, a.attrHooks.value = {
                get: function(a, b) {
                    var c = (a.nodeName || "").toLowerCase();
                    return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
                },
                set: function(a, b) {
                    var c = (a.nodeName || "").toLowerCase();
                    return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
                }
            };
            var o, p, q = a.fn.init,
                r = a.find,
                s = a.parseJSON,
                t = /^\s*</,
                u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
                v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
                w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
            a.fn.init = function(b, e, f) {
                var g, h;
                return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
            }, a.fn.init.prototype = a.fn, a.find = function(a) {
                var b = Array.prototype.slice.call(arguments);
                if ("string" == typeof a && u.test(a)) try {
                    document.querySelector(a)
                } catch (c) {
                    a = a.replace(v, function(a, b, c, d) {
                        return "[" + b + c + '"' + d + '"]'
                    });
                    try {
                        document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                    } catch (e) {
                        d("Attribute selector with '#' was not fixed: " + b[0])
                    }
                }
                return r.apply(this, b)
            };
            var x;
            for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
            a.parseJSON = function(a) {
                return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
            }, a.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
                function b(a, c) {
                    return new b.fn.init(a, c)
                }
                a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                    var f = a.fn.init.call(this, d, e, c);
                    return f instanceof b ? f : b(f)
                }, b.fn.init.prototype = b.fn;
                var c = b(document);
                return d("jQuery.sub() is deprecated"), b
            }, a.fn.size = function() {
                return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
            };
            var y = !1;
            a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
                var d = a.cssHooks[c] && a.cssHooks[c].get;
                d && (a.cssHooks[c].get = function() {
                    var a;
                    return y = !0, a = d.apply(this, arguments), y = !1, a
                })
            }), a.swap = function(a, b, c, e) {
                var f, g, h = {};
                y || d("jQuery.swap() is undocumented and deprecated");
                for (g in b) h[g] = a.style[g], a.style[g] = b[g];
                f = c.apply(a, e || []);
                for (g in b) a.style[g] = h[g];
                return f
            }, a.ajaxSetup({
                converters: {
                    "text json": a.parseJSON
                }
            });
            var z = a.fn.data;
            a.fn.data = function(b) {
                var e, f, g = this[0];
                return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
            };
            var A = /\/(java|ecma)script/i;
            a.clean || (a.clean = function(b, c, e, f) {
                c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
                var g, h, i, j, k = [];
                if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                    for (i = function(a) {
                            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                        }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
                return k
            });
            var B = a.event.add,
                C = a.event.remove,
                D = a.event.trigger,
                E = a.fn.toggle,
                F = a.fn.live,
                G = a.fn.die,
                H = a.fn.load,
                I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
                J = new RegExp("\\b(?:" + I + ")\\b"),
                K = /(?:^|\s)hover(\.\S+|)\b/,
                L = function(b) {
                    return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
                };
            a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
                a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
            }, a.event.remove = function(a, b, c, d, e) {
                C.call(this, a, L(b) || "", c, d, e)
            }, a.each(["load", "unload", "error"], function(b, c) {
                a.fn[c] = function() {
                    var a = Array.prototype.slice.call(arguments, 0);
                    return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
                }
            }), a.fn.toggle = function(b, c) {
                if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
                d("jQuery.fn.toggle(handler, handler...) is deprecated");
                var e = arguments,
                    f = b.guid || a.guid++,
                    g = 0,
                    h = function(c) {
                        var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                        return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                    };
                for (h.guid = f; g < e.length;) e[g++].guid = f;
                return this.click(h)
            }, a.fn.live = function(b, c, e) {
                return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
            }, a.fn.die = function(b, c) {
                return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
            }, a.event.trigger = function(a, b, c, e) {
                return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
            }, a.each(I.split("|"), function(b, c) {
                a.event.special[c] = {
                    setup: function() {
                        var b = this;
                        return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                            a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                        }), a._data(this, c, a.guid++)), !1
                    },
                    teardown: function() {
                        return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                    }
                }
            }), a.event.special.ready = {
                setup: function() {
                    this === document && d("'ready' event is deprecated")
                }
            };
            var M = a.fn.andSelf || a.fn.addBack,
                N = a.fn.find;
            if (a.fn.andSelf = function() {
                    return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
                }, a.fn.find = function(a) {
                    var b = N.apply(this, arguments);
                    return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
                }, a.Callbacks) {
                var O = a.Deferred,
                    P = [
                        ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                    ];
                a.Deferred = function(b) {
                    var c = O(),
                        e = c.promise();
                    return c.pipe = e.pipe = function() {
                        var b = arguments;
                        return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                            a.each(P, function(f, g) {
                                var h = a.isFunction(b[f]) && b[f];
                                c[g[1]](function() {
                                    var b = h && h.apply(this, arguments);
                                    b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                                })
                            }), b = null
                        }).promise()
                    }, c.isResolved = function() {
                        return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                    }, c.isRejected = function() {
                        return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                    }, b && b.call(c, c), c
                }
            }
        }(jQuery, window);
} catch (e) {}
try {
    (function($) {
        'use strict';
        if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
            return;
        }
        wpcf7 = $.extend({
            cached: 0,
            inputs: []
        }, wpcf7);
        $(function() {
            wpcf7.supportHtml5 = (function() {
                var features = {};
                var input = document.createElement('input');
                features.placeholder = 'placeholder' in input;
                var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
                $.each(inputTypes, function(index, value) {
                    input.setAttribute('type', value);
                    features[value] = input.type !== 'text';
                });
                return features;
            })();
            $('div.wpcf7 > form').each(function() {
                var $form = $(this);
                wpcf7.initForm($form);
                if (wpcf7.cached) {
                    wpcf7.refill($form);
                }
            });
        });
        wpcf7.getId = function(form) {
            return parseInt($('input[name="_wpcf7"]', form).val(), 10);
        };
        wpcf7.initForm = function(form) {
            var $form = $(form);
            wpcf7.setStatus($form, 'init');
            $form.submit(function(event) {
                if (!wpcf7.supportHtml5.placeholder) {
                    $('[placeholder].placeheld', $form).each(function(i, n) {
                        $(n).val('').removeClass('placeheld');
                    });
                }
                if (typeof window.FormData === 'function') {
                    wpcf7.submit($form);
                    event.preventDefault();
                }
            });
            $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
            wpcf7.toggleSubmit($form);
            $form.on('click', '.wpcf7-acceptance', function() {
                wpcf7.toggleSubmit($form);
            });
            $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
                var name = $(this).attr('name');
                $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
            });
            $('.wpcf7-list-item.has-free-text', $form).each(function() {
                var $freetext = $(':input.wpcf7-free-text', this);
                var $wrap = $(this).closest('.wpcf7-form-control');
                if ($(':checkbox, :radio', this).is(':checked')) {
                    $freetext.prop('disabled', false);
                } else {
                    $freetext.prop('disabled', true);
                }
                $wrap.on('change', ':checkbox, :radio', function() {
                    var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                    if ($cb.is(':checked')) {
                        $freetext.prop('disabled', false).focus();
                    } else {
                        $freetext.prop('disabled', true);
                    }
                });
            });
            if (!wpcf7.supportHtml5.placeholder) {
                $('[placeholder]', $form).each(function() {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                    $(this).focus(function() {
                        if ($(this).hasClass('placeheld')) {
                            $(this).val('').removeClass('placeheld');
                        }
                    });
                    $(this).blur(function() {
                        if ('' === $(this).val()) {
                            $(this).val($(this).attr('placeholder'));
                            $(this).addClass('placeheld');
                        }
                    });
                });
            }
            if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
                $form.find('input.wpcf7-date[type="date"]').each(function() {
                    $(this).datepicker({
                        dateFormat: 'yy-mm-dd',
                        minDate: new Date($(this).attr('min')),
                        maxDate: new Date($(this).attr('max'))
                    });
                });
            }
            if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
                $form.find('input.wpcf7-number[type="number"]').each(function() {
                    $(this).spinner({
                        min: $(this).attr('min'),
                        max: $(this).attr('max'),
                        step: $(this).attr('step')
                    });
                });
            }
            wpcf7.resetCounter($form);
            $form.on('change', '.wpcf7-validates-as-url', function() {
                var val = $.trim($(this).val());
                if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                    val = val.replace(/^\/+/, '');
                    val = 'http://' + val;
                }
                $(this).val(val);
            });
        };
        wpcf7.submit = function(form) {
            if (typeof window.FormData !== 'function') {
                return;
            }
            var $form = $(form);
            $('.ajax-loader', $form).addClass('is-active');
            wpcf7.clearResponse($form);
            var formData = new FormData($form.get(0));
            var detail = {
                id: $form.closest('div.wpcf7').attr('id'),
                status: 'init',
                inputs: [],
                formData: formData
            };
            $.each($form.serializeArray(), function(i, field) {
                if ('_wpcf7' == field.name) {
                    detail.contactFormId = field.value;
                } else if ('_wpcf7_version' == field.name) {
                    detail.pluginVersion = field.value;
                } else if ('_wpcf7_locale' == field.name) {
                    detail.contactFormLocale = field.value;
                } else if ('_wpcf7_unit_tag' == field.name) {
                    detail.unitTag = field.value;
                } else if ('_wpcf7_container_post' == field.name) {
                    detail.containerPostId = field.value;
                } else if (field.name.match(/^_/)) {} else {
                    detail.inputs.push(field);
                }
            });
            wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
            var ajaxSuccess = function(data, status, xhr, $form) {
                detail.id = $(data.into).attr('id');
                detail.status = data.status;
                detail.apiResponse = data;
                switch (data.status) {
                    case 'init':
                        wpcf7.setStatus($form, 'init');
                        break;
                    case 'validation_failed':
                        $.each(data.invalid_fields, function(i, n) {
                            $(n.into, $form).each(function() {
                                wpcf7.notValidTip(this, n.message);
                                $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                                $('[aria-invalid]', this).attr('aria-invalid', 'true');
                            });
                        });
                        wpcf7.setStatus($form, 'invalid');
                        wpcf7.triggerEvent(data.into, 'invalid', detail);
                        break;
                    case 'acceptance_missing':
                        wpcf7.setStatus($form, 'unaccepted');
                        wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                        break;
                    case 'spam':
                        wpcf7.setStatus($form, 'spam');
                        wpcf7.triggerEvent(data.into, 'spam', detail);
                        break;
                    case 'aborted':
                        wpcf7.setStatus($form, 'aborted');
                        wpcf7.triggerEvent(data.into, 'aborted', detail);
                        break;
                    case 'mail_sent':
                        wpcf7.setStatus($form, 'sent');
                        wpcf7.triggerEvent(data.into, 'mailsent', detail);
                        break;
                    case 'mail_failed':
                        wpcf7.setStatus($form, 'failed');
                        wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                        break;
                    default:
                        wpcf7.setStatus($form, 'custom-' + data.status.replace(/[^0-9a-z]+/i, '-'));
                }
                wpcf7.refill($form, data);
                wpcf7.triggerEvent(data.into, 'submit', detail);
                if ('mail_sent' == data.status) {
                    $form.each(function() {
                        this.reset();
                    });
                    wpcf7.toggleSubmit($form);
                    wpcf7.resetCounter($form);
                }
                if (!wpcf7.supportHtml5.placeholder) {
                    $form.find('[placeholder].placeheld').each(function(i, n) {
                        $(n).val($(n).attr('placeholder'));
                    });
                }
                $('.wpcf7-response-output', $form).html('').append(data.message).slideDown('fast');
                $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
                    var $response = $(this);
                    $response.html('').append(data.message);
                    if (data.invalid_fields) {
                        var $invalids = $('<ul></ul>');
                        $.each(data.invalid_fields, function(i, n) {
                            if (n.idref) {
                                var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                            } else {
                                var $li = $('<li></li>').append(n.message);
                            }
                            $invalids.append($li);
                        });
                        $response.append($invalids);
                    }
                    $response.focus();
                });
                if (data.posted_data_hash) {
                    $form.find('input[name="_wpcf7_posted_data_hash"]').first().val(data.posted_data_hash);
                }
            };
            $.ajax({
                type: 'POST',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
                data: formData,
                dataType: 'json',
                processData: false,
                contentType: false
            }).done(function(data, status, xhr) {
                ajaxSuccess(data, status, xhr, $form);
                $('.ajax-loader', $form).removeClass('is-active');
            }).fail(function(xhr, status, error) {
                var $e = $('<div class="ajax-error"></div>').text(error.message);
                $form.after($e);
            });
        };
        wpcf7.triggerEvent = function(target, name, detail) {
            var event = new CustomEvent('wpcf7' + name, {
                bubbles: true,
                detail: detail
            });
            $(target).get(0).dispatchEvent(event);
        };
        wpcf7.setStatus = function(form, status) {
            var $form = $(form);
            var prevStatus = $form.data('status');
            $form.data('status', status);
            $form.addClass(status);
            if (prevStatus && prevStatus !== status) {
                $form.removeClass(prevStatus);
            }
        }
        wpcf7.toggleSubmit = function(form, state) {
            var $form = $(form);
            var $submit = $('input:submit', $form);
            if (typeof state !== 'undefined') {
                $submit.prop('disabled', !state);
                return;
            }
            if ($form.hasClass('wpcf7-acceptance-as-validation')) {
                return;
            }
            $submit.prop('disabled', false);
            $('.wpcf7-acceptance', $form).each(function() {
                var $span = $(this);
                var $input = $('input:checkbox', $span);
                if (!$span.hasClass('optional')) {
                    if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                        $submit.prop('disabled', true);
                        return false;
                    }
                }
            });
        };
        wpcf7.resetCounter = function(form) {
            var $form = $(form);
            $('.wpcf7-character-count', $form).each(function() {
                var $count = $(this);
                var name = $count.attr('data-target-name');
                var down = $count.hasClass('down');
                var starting = parseInt($count.attr('data-starting-value'), 10);
                var maximum = parseInt($count.attr('data-maximum-value'), 10);
                var minimum = parseInt($count.attr('data-minimum-value'), 10);
                var updateCount = function(target) {
                    var $target = $(target);
                    var length = $target.val().length;
                    var count = down ? starting - length : length;
                    $count.attr('data-current-value', count);
                    $count.text(count);
                    if (maximum && maximum < length) {
                        $count.addClass('too-long');
                    } else {
                        $count.removeClass('too-long');
                    }
                    if (minimum && length < minimum) {
                        $count.addClass('too-short');
                    } else {
                        $count.removeClass('too-short');
                    }
                };
                $(':input[name="' + name + '"]', $form).each(function() {
                    updateCount(this);
                    $(this).keyup(function() {
                        updateCount(this);
                    });
                });
            });
        };
        wpcf7.notValidTip = function(target, message) {
            var $target = $(target);
            $('.wpcf7-not-valid-tip', $target).remove();
            $('<span></span>').attr({
                'class': 'wpcf7-not-valid-tip',
                'role': 'alert',
                'aria-hidden': 'true',
            }).text(message).appendTo($target);
            if ($target.is('.use-floating-validation-tip *')) {
                var fadeOut = function(target) {
                    $(target).not(':hidden').animate({
                        opacity: 0
                    }, 'fast', function() {
                        $(this).css({
                            'z-index': -100
                        });
                    });
                };
                $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
                    fadeOut(this);
                });
                $target.on('focus', ':input', function() {
                    fadeOut($('.wpcf7-not-valid-tip', $target));
                });
            }
        };
        wpcf7.refill = function(form, data) {
            var $form = $(form);
            var refillCaptcha = function($form, items) {
                $.each(items, function(i, n) {
                    $form.find(':input[name="' + i + '"]').val('');
                    $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                    var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                    $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
                });
            };
            var refillQuiz = function($form, items) {
                $.each(items, function(i, n) {
                    $form.find(':input[name="' + i + '"]').val('');
                    $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                    $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
                });
            };
            if (typeof data === 'undefined') {
                $.ajax({
                    type: 'GET',
                    url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                    beforeSend: function(xhr) {
                        var nonce = $form.find(':input[name="_wpnonce"]').val();
                        if (nonce) {
                            xhr.setRequestHeader('X-WP-Nonce', nonce);
                        }
                    },
                    dataType: 'json'
                }).done(function(data, status, xhr) {
                    if (data.captcha) {
                        refillCaptcha($form, data.captcha);
                    }
                    if (data.quiz) {
                        refillQuiz($form, data.quiz);
                    }
                });
            } else {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            }
        };
        wpcf7.clearResponse = function(form) {
            var $form = $(form);
            $form.siblings('.screen-reader-response').html('');
            $('.wpcf7-not-valid-tip', $form).remove();
            $('[aria-invalid]', $form).attr('aria-invalid', 'false');
            $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
            $('.wpcf7-response-output', $form).hide().empty();
        };
        wpcf7.apiSettings.getRoute = function(path) {
            var url = wpcf7.apiSettings.root;
            url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
            return url;
        };
    })(jQuery);
    (function() {
        if (typeof window.CustomEvent === "function") return false;

        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    })();
} catch (e) {}
try { /*! This file is auto-generated */
    window.addComment = function(s) {
        var u, f, v, y = s.document,
            p = {
                commentReplyClass: "comment-reply-link",
                cancelReplyId: "cancel-comment-reply-link",
                commentFormId: "commentform",
                temporaryFormId: "wp-temp-form-div",
                parentIdFieldId: "comment_parent",
                postIdFieldId: "comment_post_ID"
            },
            e = s.MutationObserver || s.WebKitMutationObserver || s.MozMutationObserver,
            i = "querySelector" in y && "addEventListener" in s,
            n = !!y.documentElement.dataset;

        function t() {
            r(),
                function() {
                    if (!e) return;
                    new e(d).observe(y.body, {
                        childList: !0,
                        subtree: !0
                    })
                }()
        }

        function r(e) {
            if (i && (u = I(p.cancelReplyId), f = I(p.commentFormId), u)) {
                u.addEventListener("touchstart", a), u.addEventListener("click", a);
                var t = function(e) {
                    if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode) return f.removeEventListener("keydown", t), e.preventDefault(), f.submit.click(), !1
                };
                f && f.addEventListener("keydown", t);
                for (var n, r = function(e) {
                        var t, n = p.commentReplyClass;
                        e && e.childNodes || (e = y);
                        t = y.getElementsByClassName ? e.getElementsByClassName(n) : e.querySelectorAll("." + n);
                        return t
                    }(e), d = 0, o = r.length; d < o; d++)(n = r[d]).addEventListener("touchstart", l), n.addEventListener("click", l)
            }
        }

        function a(e) {
            var t = I(p.temporaryFormId);
            t && v && (I(p.parentIdFieldId).value = "0", t.parentNode.replaceChild(v, t), this.style.display = "none", e.preventDefault())
        }

        function l(e) {
            var t = this,
                n = m(t, "belowelement"),
                r = m(t, "commentid"),
                d = m(t, "respondelement"),
                o = m(t, "postid");
            n && r && d && o && !1 === s.addComment.moveForm(n, r, d, o) && e.preventDefault()
        }

        function d(e) {
            for (var t = e.length; t--;)
                if (e[t].addedNodes.length) return void r()
        }

        function m(e, t) {
            return n ? e.dataset[t] : e.getAttribute("data-" + t)
        }

        function I(e) {
            return y.getElementById(e)
        }
        return i && "loading" !== y.readyState ? t() : i && s.addEventListener("DOMContentLoaded", t, !1), {
            init: r,
            moveForm: function(e, t, n, r) {
                var d = I(e);
                v = I(n);
                var o, i, a, l = I(p.parentIdFieldId),
                    m = I(p.postIdFieldId);
                if (d && v && l) {
                    ! function(e) {
                        var t = p.temporaryFormId,
                            n = I(t);
                        if (n) return;
                        (n = y.createElement("div")).id = t, n.style.display = "none", e.parentNode.insertBefore(n, e)
                    }(v), r && m && (m.value = r), l.value = t, u.style.display = "", d.parentNode.insertBefore(v, d.nextSibling), u.onclick = function() {
                        return !1
                    };
                    try {
                        for (var c = 0; c < f.elements.length; c++)
                            if (o = f.elements[c], i = !1, "getComputedStyle" in s ? a = s.getComputedStyle(o) : y.documentElement.currentStyle && (a = o.currentStyle), (o.offsetWidth <= 0 && o.offsetHeight <= 0 || "hidden" === a.visibility) && (i = !0), "hidden" !== o.type && !o.disabled && !i) {
                                o.focus();
                                break
                            }
                    } catch (e) {}
                    return !1
                }
            }
        }
    }(window);
} catch (e) {}
try { /*! This file is auto-generated */
    ! function(d, l) {
        "use strict";
        var e = !1,
            o = !1;
        if (l.querySelector)
            if (d.addEventListener) e = !0;
        if (d.wp = d.wp || {}, !d.wp.receiveEmbedMessage)
            if (d.wp.receiveEmbedMessage = function(e) {
                    var t = e.data;
                    if (t)
                        if (t.secret || t.message || t.value)
                            if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                                var r, a, i, s, n, o = l.querySelectorAll('iframe[data-secret="' + t.secret + '"]'),
                                    c = l.querySelectorAll('blockquote[data-secret="' + t.secret + '"]');
                                for (r = 0; r < c.length; r++) c[r].style.display = "none";
                                for (r = 0; r < o.length; r++)
                                    if (a = o[r], e.source === a.contentWindow) {
                                        if (a.removeAttribute("style"), "height" === t.message) {
                                            if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                            else if (~~i < 200) i = 200;
                                            a.height = i
                                        }
                                        if ("link" === t.message)
                                            if (s = l.createElement("a"), n = l.createElement("a"), s.href = a.getAttribute("src"), n.href = t.value, n.host === s.host)
                                                if (l.activeElement === a) d.top.location.href = t.value
                                    }
                            }
                }, e) d.addEventListener("message", d.wp.receiveEmbedMessage, !1), l.addEventListener("DOMContentLoaded", t, !1), d.addEventListener("load", t, !1);

        function t() {
            if (!o) {
                o = !0;
                var e, t, r, a, i = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                    s = !!navigator.userAgent.match(/Trident.*rv:11\./),
                    n = l.querySelectorAll("iframe.wp-embedded-content");
                for (t = 0; t < n.length; t++) {
                    if (!(r = n[t]).getAttribute("data-secret")) a = Math.random().toString(36).substr(2, 10), r.src += "#?secret=" + a, r.setAttribute("data-secret", a);
                    if (i || s)(e = r.cloneNode(!0)).removeAttribute("security"), r.parentNode.replaceChild(e, r)
                }
            }
        }
    }(window, document);
} catch (e) {}