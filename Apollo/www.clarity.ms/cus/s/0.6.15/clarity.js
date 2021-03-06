/* clarity-js v0.6.15: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get track() {
                return Ma
            },
            get start() {
                return Ia
            },
            get queue() {
                return Da
            },
            get stop() {
                return Ca
            }
        }),
        e = {
            projectId: null,
            delay: 3e3,
            cssRules: !1,
            lean: !0,
            track: !0,
            content: !0,
            mask: [],
            unmask: [],
            regions: [],
            metrics: [],
            cookies: [],
            server: null,
            report: null,
            upload: null,
            upgrade: null
        },
        n = 0;

    function a(t) {
        return void 0 === t && (t = null), t = t || performance.now(), Math.max(Math.round(t - n), 0)
    }
    var r = null,
        i = null,
        o = !1;

    function u() {
        o && (r = {
            time: a(),
            event: 4,
            data: {
                visible: i.visible,
                docWidth: i.docWidth,
                docHeight: i.docHeight,
                screenWidth: i.screenWidth,
                screenHeight: i.screenHeight,
                scrollX: i.scrollX,
                scrollY: i.scrollY,
                pointerX: i.pointerX,
                pointerY: i.pointerY,
                activityTime: i.activityTime
            }
        }), i = i || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0
        }
    }

    function s(t, e, n) {
        switch (t) {
            case 8:
                i.docWidth = e, i.docHeight = n;
                break;
            case 11:
                i.screenWidth = e, i.screenHeight = n;
                break;
            case 10:
                i.scrollX = e, i.scrollY = n;
                break;
            default:
                i.pointerX = e, i.pointerY = n
        }
        o = !0
    }

    function c(t) {
        i.activityTime = t
    }

    function l(t, e) {
        i.visible = "visible" === e ? 1 : 0, i.visible || c(t), o = !0
    }

    function d() {
        o && ja(4)
    }
    var f = Object.freeze({
            __proto__: null,
            get state() {
                return r
            },
            start: function() {
                o = !1, u()
            },
            reset: u,
            track: s,
            activity: c,
            visibility: l,
            compute: d,
            stop: function() {
                u()
            }
        }),
        h = null;

    function p(t, e) {
        nr() && t && e && "string" == typeof t && "string" == typeof e && t.length < 255 && e.length < 255 && (h = {
            key: t,
            value: e
        }, ja(24))
    }

    function v(t) {
        for (var e = 5381, n = e, a = 0; a < t.length; a += 2) {
            if (e = (e << 5) + e ^ t.charCodeAt(a), a + 1 < t.length) n = (n << 5) + n ^ t.charCodeAt(a + 1)
        }
        return Math.abs(e + 11579 * n).toString(36)
    }
    var g = null;

    function m(t, e) {
        y(t, "string" == typeof e ? [e] : e)
    }

    function b(t, e, n) {
        void 0 === e && (e = null), void 0 === n && (n = null), y("userId", [t]), y("sessionId", [e]), y("pageId", [n])
    }

    function y(t, e) {
        if (nr() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = [], a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            g[t] = n
        }
    }

    function w() {
        ja(34)
    }

    function k() {
        g = {}
    }
    var O = Object.freeze({
            __proto__: null,
            get data() {
                return g
            },
            start: function() {
                k()
            },
            set: m,
            identify: b,
            compute: w,
            reset: k,
            stop: function() {
                k()
            }
        }),
        E = null,
        _ = null;

    function S(t) {
        _ = t
    }

    function M() {
        nr() && (e.track = !0, I())
    }

    function N() {
        z("_clsk", "", 0)
    }

    function T() {
        var t = Math.round(Date.now()),
            n = e.lean ? 0 : 1,
            a = "string" == typeof e.upload ? e.upload : "";
        n && _ && _(E, !e.lean), z("_clsk", [E.sessionId, t, E.pageNum, n, a].join("|"), 1)
    }

    function x(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function I() {
        z("_clck", E.userId, 365)
    }

    function D() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function C(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function L(t) {
        if (x(document, "cookie")) {
            var e = document.cookie.split(";");
            if (e)
                for (var n = 0; n < e.length; n++) {
                    var a = e[n].split("=");
                    if (a.length > 1 && a[0] && a[0].trim() === t) return a[1]
                }
        }
        return null
    }

    function z(t, n, a) {
        if (e.track && x(document, "cookie")) {
            var r = new Date;
            r.setDate(r.getDate() + a);
            var i = r ? "expires=" + r.toUTCString() : "";
            document.cookie = t + "=" + n + ";" + i + ";path=/"
        }
    }
    var R, j = Object.freeze({
        __proto__: null,
        get data() {
            return E
        },
        get callback() {
            return _
        },
        start: function() {
            _ = null;
            var t, n = navigator && "userAgent" in navigator ? navigator.userAgent : "",
                a = document && document.title ? document.title : "",
                r = function() {
                    var t = {
                            session: D(),
                            ts: Math.round(Date.now()),
                            count: 1,
                            upgrade: 0,
                            upload: ""
                        },
                        e = L("_clsk");
                    if (e) {
                        var n = e.split("|");
                        5 === n.length && t.ts - C(n[1]) < 18e5 && (t.session = n[0], t.count = C(n[2]) + 1, t.upgrade = C(n[3]), t.upload = n[4])
                    }
                    return t
                }();
            if (E = {
                    projectId: e.projectId || v(location.host),
                    userId: (t = L("_clck"), t && t.length > 0 ? t.split("|")[0] : D()),
                    sessionId: r.session,
                    pageNum: r.count
                }, e.upload && "string" == typeof e.upload && 0 === e.upload.indexOf("https://")) {
                var i = e.upload;
                e.server = i.substr(0, i.indexOf("/", "https://".length)), e.upload = e.server.length > 0 && e.server.length < i.length ? i.substr(e.server.length + 1) : i
            }
            e.lean = (!e.track || 1 !== r.upgrade) && e.lean, e.upload = e.track && "string" == typeof e.upload && r.upload ? r.upload : e.upload, J(0, n), J(3, a), J(1, location.href), J(2, document.referrer), J(15, function() {
                var t = D();
                if (e.track && x(window, "sessionStorage")) {
                    var n = sessionStorage.getItem("_cltk");
                    t = n || t, sessionStorage.setItem("_cltk", t)
                }
                return t
            }()), J(16, document.documentElement.lang), J(17, document.dir), navigator && J(9, navigator.userLanguage || navigator.language), Wa(0, r.ts), Wa(1, 0), screen && (Wa(14, Math.round(screen.width)), Wa(15, Math.round(screen.height)), Wa(16, Math.round(screen.colorDepth)));
            for (var o = 0, u = e.cookies; o < u.length; o++) {
                var s = u[o],
                    c = L(s);
                c && m(s, c)
            }
            I()
        },
        stop: function() {
            _ = null
        },
        metadata: S,
        consent: M,
        clear: N,
        save: T
    });

    function Y() {
        R = []
    }
    var A = null;

    function H(t) {
        return 0 === A.sequence && T(), A.start = A.start + A.duration, A.duration = a() - A.start, A.sequence++, A.upload = t && "sendBeacon" in navigator ? 1 : 0, A.end = t ? 1 : 0, [A.version, A.sequence, A.start, A.duration, A.projectId, A.userId, A.sessionId, A.pageNum, A.upload, A.end]
    }
    var X, W = Object.freeze({
        __proto__: null,
        get data() {
            return A
        },
        start: function() {
            var t = E;
            A = {
                version: "0.6.15",
                sequence: 0,
                start: 0,
                duration: 0,
                projectId: t.projectId,
                userId: t.userId,
                sessionId: t.sessionId,
                pageNum: t.pageNum,
                upload: 0,
                end: 0
            }
        },
        stop: function() {
            A = null
        },
        envelope: H
    });

    function q(t) {
        if (0 === X.check) {
            var e = X.check;
            e = A.sequence >= 128 ? 1 : e, e = a() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== X.check && P(e)
        }
    }

    function P(t) {
        ! function(t) {
            if (R && -1 === R.indexOf(t)) {
                var n = e.report;
                if (n && n.length > 0) {
                    var a = JSON.stringify({
                            m: t,
                            p: E.projectId,
                            u: E.userId,
                            s: E.sessionId,
                            n: E.pageNum
                        }),
                        r = new XMLHttpRequest;
                    r.open("POST", n), r.send(a), R.push(t)
                }
            }
        }("Limit #" + t), X.check = t, N(), wr()
    }

    function U() {
        0 !== X.check && ja(35)
    }
    var B = Object.freeze({
            __proto__: null,
            get data() {
                return X
            },
            start: function() {
                X = {
                    check: 0
                }
            },
            check: q,
            trigger: P,
            compute: U,
            stop: function() {
                X = null
            }
        }),
        F = null,
        V = null;

    function J(t, e) {
        e && (e = "" + e, t in F || (F[t] = []), F[t].indexOf(e) < 0 && (F[t].push(e), t in V || (V[t] = []), V[t].push(e), F[t].length > 128 && P(5)))
    }

    function G() {
        ja(1)
    }

    function K() {
        V = {}
    }
    var Z, Q = Object.freeze({
        __proto__: null,
        get data() {
            return F
        },
        get updates() {
            return V
        },
        start: function() {
            F = {}, V = {}
        },
        stop: function() {
            F = {}, V = {}
        },
        log: J,
        compute: G,
        reset: K
    });

    function $(t, e, n) {
        return window.setTimeout(qa(t), e, n)
    }

    function tt(t) {
        return window.clearTimeout(t)
    }
    var et = 0,
        nt = 0,
        at = null;

    function rt() {
        at && tt(at), at = $(it, nt), et = a()
    }

    function it() {
        var t = a();
        Z = {
            gap: t - et
        }, ja(25), Z.gap < 3e5 ? at = $(it, nt) : $a && (p("clarity", "suspend"), wr(), ["document", "touchstart"].forEach((function(t) {
            return Ua(document, t, rr)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return Ua(window, t, rr)
        })))
    }
    var ot = Object.freeze({
            __proto__: null,
            get data() {
                return Z
            },
            start: function() {
                nt = 6e4, et = 0
            },
            reset: rt,
            stop: function() {
                tt(at), et = 0, nt = 0
            }
        }),
        ut = null;

    function st(t, e) {
        if (t in ut) {
            var n = ut[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? ut[t].push([e, 0]) : a[1] = e - a[0]
        } else ut[t] = [
            [e, 0]
        ]
    }

    function ct() {
        ja(36)
    }

    function lt() {
        ut = {}
    }
    var dt = null;

    function ft(t) {
        nr() && e.lean && (e.lean = !1, dt = {
            key: t
        }, T(), e.upgrade && e.upgrade(t), ja(3))
    }
    var ht = [f, Q, O, B, Object.freeze({
        __proto__: null,
        get data() {
            return ut
        },
        start: function() {
            ut = {}
        },
        stop: function() {
            ut = {}
        },
        track: st,
        compute: ct,
        reset: lt
    }), j, W, t, ot, Object.freeze({
        __proto__: null,
        get data() {
            return dt
        },
        start: function() {
            !e.lean && e.upgrade && e.upgrade("Config"), dt = null
        },
        upgrade: ft,
        stop: function() {
            dt = null
        }
    })];

    function pt() {
        Ya = {}, Aa = {}, Ha(5), ht.forEach((function(t) {
            return qa(t.start)()
        }))
    }

    function vt() {
        ht.slice().reverse().forEach((function(t) {
            return qa(t.stop)()
        })), Ya = {}, Aa = {}
    }

    function gt() {
        w(), d(), G(), ja(0), ct(), U()
    }

    function mt(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    s(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    s(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            s((a = a.apply(t, e || [])).next())
        }))
    }

    function bt(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < r[1]) {
                                    o.label = r[1], r = i;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(i);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = e.call(t, o)
                    } catch (t) {
                        i = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function yt(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                        return function(t) {
                            for (var e = -1, n = !1, a = !1, r = !1, i = null, o = 0; o < t.length; o++) {
                                var u = t.charCodeAt(o);
                                n = n || u >= 48 && u <= 57, a = a || 64 === u, r = 9 === u || 10 === u || 13 === u || 32 === u, (0 === o || o === t.length - 1 || r) && ((n || a) && (null === i && (i = t.split("")), Ot(i, e, r ? o : o + 1)), r && (n = !1, a = !1, e = o))
                            }
                            return i ? i.join("") : t
                        }(t);
                    case "input":
                        return kt(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                        return a ? function(t) {
                            var e = t.trim();
                            if (e.length > 0) {
                                var n = e[0],
                                    a = t.indexOf(n),
                                    r = t.substr(0, a),
                                    i = t.substr(a + e.length);
                                return "" + r + e.length.toString(36) + i
                            }
                            return t
                        }(t) : wt(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                        return kt(t);
                    case "placeholder":
                        return wt(t)
                }
        }
        return t
    }

    function wt(t) {
        return t.replace(/\S/gi, "???")
    }

    function kt(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "???";
        return n
    }

    function Ot(t, e, n) {
        for (var a = e + 1; a < n; a++) t[a] = "???"
    }
    var Et = {},
        _t = [],
        St = null,
        Mt = null,
        Nt = null;

    function Tt() {
        Et = {}, _t = [], St = null, Mt = null
    }

    function xt(t, e) {
        return void 0 === e && (e = 0), mt(this, void 0, void 0, (function() {
            var n, a, r;
            return bt(this, (function(i) {
                for (n = 0, a = _t; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    _t[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n
                    })
                })), null === St && null === Mt && It(), [2, r]
            }))
        }))
    }

    function It() {
        var t = _t.shift();
        t && (St = t, t.task().then((function() {
            t.resolve(), St = null, It()
        })).catch((function(t) {
            ae(0, t, 1), St = null, It()
        })))
    }

    function Dt(t) {
        return !(t in Et) || performance.now() - Et[t].start > Et[t].yield
    }

    function Ct(t) {
        Et[t] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function Lt(t) {
        var e = performance.now() - Et[t].start;
        Xa(t, e), Ha(5), Et[t].calls > 0 && Xa(4, e)
    }

    function zt(t) {
        return mt(this, void 0, void 0, (function() {
            var e;
            return bt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t in Et ? (Lt(t), e = Et[t], [4, Rt()]) : [3, 2];
                    case 1:
                        e.yield = n.sent().timeRemaining(),
                            function(t) {
                                if (Et && Et[t]) {
                                    var e = Et[t].calls,
                                        n = Et[t].yield;
                                    Ct(t), Et[t].calls = e + 1, Et[t].yield = n
                                }
                            }(t), n.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }

    function Rt() {
        return mt(this, void 0, void 0, (function() {
            return bt(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return Mt ? [4, Mt] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            At(t, {
                                timeout: 5e3
                            })
                        }))]
                }
            }))
        }))
    }
    var jt, Yt, At = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            a = new MessageChannel,
            r = a.port1,
            i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now(),
                o = r - n,
                u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(r)
            }));
            else {
                var s = o > e.timeout;
                t({
                    didTimeout: s,
                    timeRemaining: function() {
                        return s ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function Ht(t) {
        var e = t.target;
        e && "IMG" === e.tagName && (jt = {
            source: e.src,
            target: e
        }, xt(te.bind(this, 32)))
    }

    function Xt() {
        Yt = null
    }

    function Wt() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            s = Math.max(n, a, r, i, o, u),
            c = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(c, l, d, f, h, p);
        null !== Yt && s === Yt.width && v === Yt.height || null === s || null === v || (Yt = {
            width: s,
            height: v
        }, qt(8))
    }

    function qt(t, n) {
        return void 0 === n && (n = null), mt(this, void 0, void 0, (function() {
            var r, i, o, u, l, d, f, h, p, v, g, m, b, y, w, k, O, E, _, S, M, N, T, x, I, D;
            return bt(this, (function(C) {
                switch (C.label) {
                    case 0:
                        switch (r = n || a(), i = [r, t], o = 3, t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 37:
                                return [3, 3];
                            case 5:
                            case 6:
                                return [3, 4]
                        }
                        return [3, 11];
                    case 1:
                        return u = Yt, i.push(u.width), i.push(u.height), s(t, u.width, u.height), Da(i), [3, 11];
                    case 2:
                        for (l = 0, d = Be; l < d.length; l++) f = d[l], (i = [f.time, 7]).push(f.data.id), i.push(f.data.state), i.push(f.data.name), Da(i);
                        return an(), [3, 11];
                    case 3:
                        for (h = 0, p = Bt; h < p.length; h++) v = p[h], i.push(v.id), i.push(v.width), i.push(v.height);
                        return Gt(), Da(i), [3, 11];
                    case 4:
                        if (!((g = Ae()).length > 0)) return [3, 10];
                        m = 0, b = g, C.label = 5;
                    case 5:
                        return m < b.length ? (y = b[m], Dt(o) ? [4, zt(o)] : [3, 7]) : [3, 9];
                    case 6:
                        C.sent(), C.label = 7;
                    case 7:
                        for (w = [], k = y.data, O = y.metadata.active, E = y.metadata.privacy, _ = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(y), S = O ? ["tag", "path", "attributes", "value"] : ["tag"], function(t) {
                                if (!1 === Ft) return;
                                if (Vt = null === Vt ? new ResizeObserver(Jt) : Vt) {
                                    var e = Re(t);
                                    if (e && null !== e.metadata.size && 0 === e.metadata.size.length) {
                                        var n = ze(t);
                                        if (n && n.nodeType === Node.ELEMENT_NODE) {
                                            var a = n,
                                                r = a.getBoundingClientRect();
                                            e.metadata.size = [Math.floor(100 * r.width), Math.floor(100 * r.height)], Vt.observe(a)
                                        }
                                    }
                                }
                            }(y.id), M = 0, N = S; M < N.length; M++)
                            if (k[T = N[M]]) switch (T) {
                                case "tag":
                                    x = y.metadata.size, I = _ ? -1 : 1, i.push(y.id * I), y.parent && O && i.push(y.parent), y.previous && O && i.push(y.previous), w.push(y.position ? k[T] + "~" + y.position : k[T]), x && 2 === x.length && w.push("#" + Pt(x[0]) + "." + Pt(x[1]));
                                    break;
                                case "path":
                                    w.push(y.data.path + ">");
                                    break;
                                case "attributes":
                                    for (D in k[T]) void 0 !== k[T][D] && w.push(Ut(D, k[T][D], E));
                                    break;
                                case "value":
                                    w.push(yt(k[T], k.tag, E, _))
                            }
                        i = function(t, e) {
                            for (var n = null, a = 0, r = e; a < r.length; a++) {
                                var i = r[a],
                                    o = t.indexOf(i);
                                o >= 0 ? n ? n.push(o) : (n = [o], t.push(n)) : (n = null, t.push(i))
                            }
                            return t
                        }(i, w), C.label = 8;
                    case 8:
                        return m++, [3, 5];
                    case 9:
                        6 === t && c(r), Da(i, !e.lean), C.label = 10;
                    case 10:
                        return [3, 11];
                    case 11:
                        return [2]
                }
            }))
        }))
    }

    function Pt(t) {
        return t.toString(36)
    }

    function Ut(t, e, n) {
        return t + "=" + yt(e, t, n)
    }
    var Bt = [],
        Ft = !1,
        Vt = null;

    function Jt(t) {
        window.requestAnimationFrame((function() {
            for (var e = 0, n = t; e < n.length; e++) {
                var a = n[e],
                    r = a.target,
                    i = r ? xe(r) : null;
                if (i) {
                    var o = Re(i).metadata.size,
                        u = a.borderBoxSize,
                        s = null,
                        c = null;
                    if (u && u.length > 0) s = Math.floor(100 * u[0].inlineSize), c = Math.floor(100 * u[0].blockSize);
                    else {
                        var l = r.getBoundingClientRect();
                        s = Math.floor(100 * l.width), c = Math.floor(100 * l.height)
                    }
                    s !== o[0] && c !== o[1] && (o = [s, c], Bt.push({
                        id: i,
                        width: s,
                        height: c
                    }))
                }
            }
            Bt.length > 0 && qt(37)
        }))
    }

    function Gt() {
        Bt = []
    }

    function Kt() {
        Gt(), Vt && (Vt.disconnect(), Vt = null), Ft = !1
    }
    var Zt, Qt = {};

    function $t(t) {
        var e = t.error || t;
        if (e.message in Qt || (Qt[e.message] = 0), Qt[e.message]++ >= 5) return !0;
        if (e && e.message) {
            if (Zt = {
                    message: e.message,
                    line: t.lineno,
                    column: t.colno,
                    stack: e.stack,
                    source: t.filename
                }, e.message.indexOf("ResizeObserver") >= 0) return Kt(), !1;
            te(31)
        }
        return !0
    }

    function te(t) {
        return mt(this, void 0, void 0, (function() {
            var e, n;
            return bt(this, (function(r) {
                switch (e = [a(), t], t) {
                    case 31:
                        e.push(Zt.message), e.push(Zt.line), e.push(Zt.column), e.push(Zt.stack), e.push(Zt.source), Da(e);
                        break;
                    case 32:
                        jt && (n = ga(jt.target, t), e.push(jt.source), e.push(n.id), Da(e));
                        break;
                    case 33:
                        ee && (e.push(ee.code), e.push(ee.name), e.push(ee.message), e.push(ee.stack), e.push(ee.severity), Da(e, !1))
                }
                return [2]
            }))
        }))
    }
    var ee, ne = {};

    function ae(t, e, n) {
        void 0 === n && (n = 1);
        var a = e ? e.name + "|" + e.message : "";
        t in ne && ne[t].indexOf(a) >= 0 || (ee = {
            code: t,
            name: e ? e.name : null,
            message: e ? e.message : null,
            stack: e ? e.stack : null,
            severity: n
        }, t in ne ? ne[t].push(a) : ne[t] = [a], te(33))
    }

    function re() {
        ne = {}
    }
    var ie = /1/g,
        oe = /[^0-9\.]/g,
        ue = /[^0-9\.,]/g,
        se = {};

    function ce(t, e) {
        for (var n = function(e) {
                var n = e[0],
                    a = e[1],
                    r = e[2],
                    i = e[3],
                    o = !0;
                switch (r) {
                    case 0:
                        o = i && !!top.location.href.match(function(t) {
                            return se[t] = t in se ? se[t] : new RegExp(t), se[t]
                        }(i));
                        break;
                    case 1:
                        o = i && !!le(i)
                }
                o && t.querySelectorAll(a).forEach((function(t) {
                    return Ze(t, n.toString())
                }))
            }, a = 0, r = e; a < r.length; a++) {
            n(r[a])
        }
    }

    function le(t, e, n) {
        void 0 === e && (e = null), void 0 === n && (n = window);
        var a = t.split("."),
            r = a.shift();
        return n && n[r] ? a.length > 0 ? le(a.join("."), e, n[r]) : null === e || e === typeof n[r] ? n[r] : null : null
    }

    function de(t, e, n) {
        void 0 === n && (n = !0);
        try {
            e = e || 1;
            var a = document.documentElement.lang;
            if (Intl && Intl.NumberFormat && a && n) {
                t = t.replace(ue, "");
                var r = Intl.NumberFormat(a).format(11111).replace(ie, ""),
                    i = Intl.NumberFormat(a).format(1.1).replace(ie, "");
                return Math.round(parseFloat(t.replace(new RegExp("\\" + r, "g"), "").replace(new RegExp("\\" + i), ".")) * e)
            }
            return Math.round(parseFloat(t.replace(oe, "")) * e)
        } catch (t) {
            return null
        }
    }
    var fe = 1,
        he = ["password", "hidden", "email", "tel"],
        pe = ["addr", "cell", "code", "dob", "email", "mob", "name", "phone", "secret", "social", "ssn", "tel", "zip", "pass"],
        ve = ["address", "password", "contact"],
        ge = [],
        me = [],
        be = [],
        ye = [],
        we = [],
        ke = null,
        Oe = null,
        Ee = null,
        _e = {};

    function Se() {
        Ne(), Te(document)
    }

    function Me() {
        Ne()
    }

    function Ne() {
        fe = 1, ge = [], me = [], ye = [], be = [], we = [], _e = {}, ke = new WeakMap, Oe = new WeakMap, Ee = new WeakMap, "__CLARITY_DEVTOOLS_HOOK__" in window && (window.__CLARITY_DEVTOOLS_HOOK__ = {
            get: je,
            getNode: ze,
            history: Pe
        })
    }

    function Te(t) {
        try {
            "querySelectorAll" in t && (ce(t, e.regions), function(t, e) {
                for (var n = function(e) {
                        var n = e[0],
                            a = e[1],
                            r = e[2],
                            i = e[3];
                        if (r) switch (a) {
                            case 0:
                                t.querySelectorAll(r).forEach((function(t) {
                                    Wa(n, de(t.innerText, i))
                                }));
                                break;
                            case 2:
                                t.querySelectorAll("[" + r + "]").forEach((function(t) {
                                    Wa(n, de(t.getAttribute(r), i, !1))
                                }));
                                break;
                            case 1:
                                Wa(n, le(r, "number"))
                        }
                    }, a = 0, r = e; a < r.length; a++) {
                    n(r[a])
                }
            }(t, e.metrics), e.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Ee.set(t, 3)
                }))
            })), e.unmask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Ee.set(t, 0)
                }))
            })))
        } catch (t) {
            ae(5, t, 1)
        }
    }

    function xe(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = ke.get(t);
        return !n && e && (n = fe++, ke.set(t, n)), n || null
    }

    function Ie(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Oe.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function De(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Oe.has(e) ? Oe.get(e) : null
    }

    function Ce(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function Le(t) {
        var e = t.parent && t.parent in me ? me[t.parent] : null,
            n = e ? e.selector + ">" : null,
            a = t.selector,
            r = function(t, e, n, a) {
                var r = a ? ":nth-of-type(" + a + ")" : "";
                switch (t) {
                    case "STYLE":
                    case "TITLE":
                    case "LINK":
                    case "META":
                    case "*T":
                    case "*D":
                        return "";
                    case "HTML":
                        return "HTML";
                    default:
                        if (null === e) return "";
                        var i = "" + e + (t = 0 === t.indexOf("svg:") ? t.substr("svg:".length) : t) + r;
                        return "class" in n && n.class.length > 0 && (i = "" + e + t + "." + n.class.trim().split(/\s+/).join(".") + r), i
                }
            }(t.data.tag, n, t.data.attributes, function(t, e) {
                var n = e.data.tag,
                    a = e.data.attributes && !("class" in e.data.attributes);
                if (t && (["DIV", "TR", "P", "LI", "UL", "A", "BUTTON"].indexOf(n) >= 0 || a)) {
                    e.position = 1;
                    for (var r = t ? t.children.indexOf(e.id) : -1; r-- > 0;) {
                        var i = me[t.children[r]];
                        if (e.data.tag === i.data.tag) {
                            e.position = i.position + 1;
                            break
                        }
                    }
                }
                return e.position
            }(e, t));
        r !== a && -1 === we.indexOf(t.id) && we.push(t.id), t.selector = r
    }

    function ze(t) {
        return t in ge ? ge[t] : null
    }

    function Re(t) {
        return t in me ? me[t] : null
    }

    function je(t) {
        var e = xe(t);
        return e in me ? me[e] : null
    }

    function Ye(t) {
        return xe(t) in ge
    }

    function Ae() {
        for (var t = [], e = 0, n = ye; e < n.length; e++) {
            var a = n[e];
            if (a in me) {
                var r = me[a],
                    i = r.parent;
                r.data.path = null === i || ye.indexOf(i) >= 0 || 0 === r.selector.length ? null : me[i].selector, t.push(me[a])
            }
        }
        return ye = [], t
    }

    function He(t, e, n) {
        if (null !== e && null !== n) {
            var a = me[e],
                r = "attributes" in a.data ? a.data.attributes : {};
            switch (t) {
                case "VIDEO":
                case "AUDIO":
                case "LINK":
                    if ("href" in r && r.href.length > 0 && (_e[Xe(r.href)] = e), "src" in r && r.src.length > 0 && 0 !== r.src.indexOf("data:") && (_e[Xe(r.src)] = e), "srcset" in r && r.srcset.length > 0)
                        for (var i = 0, o = r.srcset.split(","); i < o.length; i++) {
                            var u = o[i].trim().split(" ");
                            2 === u.length && u[0].length > 0 && (_e[Xe(u[0])] = e)
                        }
            }
        }
    }

    function Xe(t) {
        var e = document.createElement("a");
        return e.href = t, e.href
    }

    function We(t) {
        for (var e = null; null === e && t.previousSibling;) e = xe(t.previousSibling), t = t.previousSibling;
        return e
    }

    function qe(t, e, n, r) {
        void 0 === n && (n = !0), void 0 === r && (r = !1);
        var i, o = ye.indexOf(t);
        if (o >= 0 && 1 === e && r ? (ye.splice(o, 1), ye.push(t)) : -1 === o && n && ye.push(t), "__CLARITY_DEVTOOLS_HOOK__" in window) {
            var u = (i = [me[t]], JSON.parse(JSON.stringify(i)))[0],
                s = {
                    time: a(),
                    source: e,
                    value: u
                };
            t in be || (be[t] = []), be[t].push(s)
        }
    }

    function Pe(t) {
        return t in be ? be[t] : []
    }
    var Ue = Object.freeze({
            __proto__: null,
            start: Se,
            stop: Me,
            parse: Te,
            getId: xe,
            add: function(t, n, a, r) {
                var i = xe(t, !0),
                    o = n ? xe(n) : null,
                    u = We(t),
                    s = e.content ? 1 : 2,
                    c = null,
                    l = "",
                    d = Qe(t) ? i : null;
                o >= 0 && me[o] && (l = (c = me[o]).data.tag, c.children.push(i), d = null === d ? c.region : d, s = c.metadata.privacy), s = function(t, e, n, a) {
                        var r = e.attributes,
                            i = e.tag.toUpperCase();
                        if (Ee.has(t)) return Ee.get(t);
                        if (null == r) return a;
                        if ("class" in r && 1 === a)
                            for (var o = 0, u = ve; o < u.length; o++) {
                                var s = u[o];
                                if (r.class.indexOf(s) >= 0) {
                                    a = 2;
                                    break
                                }
                            }
                        if ("INPUT" === i)
                            if (0 === a) {
                                for (var c = "", l = 0, d = Object.keys(r); l < d.length; l++) {
                                    var f = d[l];
                                    c += r[f].toLowerCase()
                                }
                                for (var h = 0, p = pe; h < p.length; h++) {
                                    var v = p[h];
                                    if (c.indexOf(v) >= 0) {
                                        a = 2;
                                        break
                                    }
                                }
                            } else 1 === a && (a = r && "submit" === r.type ? 0 : 2);
                        "type" in r && he.indexOf(r.type) >= 0 && (a = 2);
                        "data-clarity-mask" in r && (a = 3);
                        "data-clarity-unmask" in r && (a = 0);
                        var g = "*T" === i ? n : i;
                        "STYLE" !== g && "TITLE" !== g || (a = 0);
                        return a
                    }(t, a, l, s), a.attributes && "data-clarity-region" in a.attributes && (Ze(t, a.attributes["data-clarity-region"]), d = i), ge[i] = t, me[i] = {
                        id: i,
                        parent: o,
                        previous: u,
                        children: [],
                        position: null,
                        data: a,
                        selector: "",
                        region: d,
                        metadata: {
                            active: !0,
                            privacy: s,
                            size: null
                        }
                    }, Le(me[i]),
                    function(t, e) {
                        var n = t.data,
                            a = "*T" === n.tag && n.value && n.value.length > 15,
                            r = 2 === t.metadata.privacy || 3 === t.metadata.privacy;
                        a && r && e && null === e.metadata.size && (e.metadata.size = []);
                        "IMG" === n.tag && 3 === t.metadata.privacy && (t.metadata.size = [])
                    }(me[i], c), He(a.tag, i, o), qe(i, r)
            },
            update: function(t, e, n, a) {
                var r = xe(t),
                    i = e ? xe(e) : null,
                    o = We(t),
                    u = !1,
                    s = !1;
                if (r in me) {
                    var c = me[r];
                    if (c.metadata.active = !0, c.previous !== o && (u = !0, c.previous = o), c.parent !== i) {
                        u = !0;
                        var l = c.parent;
                        if (c.parent = i, null !== i && i >= 0) {
                            var d = null === o ? 0 : me[i].children.indexOf(o) + 1;
                            me[i].children.splice(d, 0, r), c.region = Qe(t) ? r : me[i].region
                        } else ! function(t, e) {
                            if (t in me) {
                                var n = me[t];
                                n.metadata.active = !1, n.parent = null, qe(t, e)
                            }
                        }(r, a);
                        if (null !== l && l >= 0) {
                            var f = me[l].children.indexOf(r);
                            f >= 0 && me[l].children.splice(f, 1)
                        }
                        s = !0
                    }
                    for (var h in n) Ce(c.data, n, h) && (u = !0, c.data[h] = n[h]);
                    Le(c), He(n.tag, r, i), qe(r, a, u, s)
                }
            },
            sameorigin: Ie,
            iframe: De,
            getNode: ze,
            getMatch: function(t) {
                return t in _e ? ze(_e[t]) : null
            },
            getValue: Re,
            get: je,
            has: Ye,
            updates: Ae
        }),
        Be = [],
        Fe = null,
        Ve = {},
        Je = [],
        Ge = !1,
        Ke = null;

    function Ze(t, e) {
        !1 === Fe.has(t) && (Fe.set(t, e), (Ke = null === Ke && Ge ? new IntersectionObserver(tn, {
            threshold: [0, .2, .4, .6, .8, 1]
        }) : Ke) && t && t.nodeType === Node.ELEMENT_NODE && Ke.observe(t))
    }

    function Qe(t) {
        return Fe && Fe.has(t)
    }

    function $e() {
        for (var t = [], e = 0, n = Je; e < n.length; e++) {
            var a = n[e],
                r = xe(a.node);
            r in Ve || (r ? (a.data.id = r, Ve[r] = a.data, Be.push(nn(a.data))) : t.push(a))
        }
        Je = t, Be.length > 0 && qt(7)
    }

    function tn(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if (Fe.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var s = r ? xe(r) : null,
                    c = s in Ve ? Ve[s] : {
                        id: s,
                        name: Fe.get(r),
                        state: 0
                    };
                en(r, c, (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .25 || a.intersectionRatio > .8 ? 10 : 0), c.state >= 10 && Ke && Ke.unobserve(r)
            }
        }
        Be.length > 0 && qt(7)
    }

    function en(t, e, n) {
        var a = n > e.state;
        e.state = a ? n : e.state, e.id ? (e.id in Ve && a || !(e.id in Ve)) && (Ve[e.id] = e, Be.push(nn(e))) : Je.push({
            node: t,
            data: e
        })
    }

    function nn(t) {
        return {
            time: a(),
            data: {
                id: t.id,
                state: t.state,
                name: t.name
            }
        }
    }

    function an() {
        Be = []
    }

    function rn(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? De(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var on = ["input", "textarea", "radio", "button", "canvas"],
        un = [];

    function sn(t) {
        Ua(t, "click", cn.bind(this, 9, t), !0)
    }

    function cn(t, e, n) {
        var r = De(e),
            i = r ? r.contentDocument.documentElement : document.documentElement,
            o = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + i.scrollLeft) : null,
            u = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + i.scrollTop) : null;
        if (r) {
            var s = rn(r);
            o = o ? o + Math.round(s.x) : o, u = u ? u + Math.round(s.y) : u
        }
        var c = va(n),
            l = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (o = Math.round(d.x + d.w / 2), u = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((o - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((u - d.y) / d.h * 32767), 0) : 0;
        null !== o && null !== u && (un.push({
            time: a(),
            event: t,
            data: {
                target: c,
                x: o,
                y: u,
                eX: f,
                eY: h,
                button: n.button,
                reaction: dn(c),
                context: fn(l),
                text: ln(c),
                link: l ? l.href : null,
                hash: null
            }
        }), xt(ma.bind(this, t)))
    }

    function ln(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.trim().replace(/\s+/g, " ").substr(0, 25))
        }
        return e
    }

    function dn(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (on.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function fn(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function hn() {
        un = []
    }
    var pn = null,
        vn = [];

    function gn(t) {
        var e = va(t),
            n = je(e);
        if (e && e.type && n) {
            var r = void 0;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    r = e.checked ? "true" : "false";
                    break;
                case "range":
                    r = e.value;
                    break;
                default:
                    r = yt(e.value, "input", n.metadata.privacy)
            }
            var i = {
                target: e,
                value: r
            };
            vn.length > 0 && vn[vn.length - 1].data.target === i.target && vn.pop(), vn.push({
                time: a(),
                event: 27,
                data: i
            }), tt(pn), pn = $(mn, 500, 27)
        }
    }

    function mn(t) {
        xt(ma.bind(this, t))
    }

    function bn() {
        vn = []
    }
    var yn, wn = [],
        kn = null;

    function On(t, e, n) {
        var r = De(e),
            i = r ? r.contentDocument.documentElement : document.documentElement,
            o = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + i.scrollLeft) : null,
            u = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + i.scrollTop) : null;
        if (r) {
            var s = rn(r);
            o = o ? o + Math.round(s.x) : o, u = u ? u + Math.round(s.y) : u
        }
        null !== o && null !== u && _n({
            time: a(),
            event: t,
            data: {
                target: va(n),
                x: o,
                y: u
            }
        })
    }

    function En(t, e, n) {
        var r = De(e),
            i = r ? r.contentDocument.documentElement : document.documentElement,
            o = n.changedTouches,
            u = a();
        if (o)
            for (var s = 0; s < o.length; s++) {
                var c = o[s],
                    l = "clientX" in c ? Math.round(c.clientX + i.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + i.scrollTop) : null;
                l = l && r ? l + Math.round(r.offsetLeft) : l, d = d && r ? d + Math.round(r.offsetTop) : d, null !== l && null !== d && _n({
                    time: u,
                    event: t,
                    data: {
                        target: va(n),
                        x: l,
                        y: d
                    }
                })
            }
    }

    function _n(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = wn.length,
                    n = e > 1 ? wn[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && wn.pop(), wn.push(t), tt(kn), kn = $(Sn, 500, t.event);
                break;
            default:
                wn.push(t), Sn(t.event)
        }
    }

    function Sn(t) {
        xt(ma.bind(this, t))
    }

    function Mn() {
        wn = []
    }

    function Nn() {
        var t = document.documentElement;
        yn = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, ma(11)
    }

    function Tn() {
        yn = null
    }
    var xn = [],
        In = null;

    function Dn(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            r = t ? va(t) : n;
        if (r && r.nodeType === Node.DOCUMENT_NODE) {
            var i = De(r);
            e = i ? i.contentWindow : e, r = n = r.documentElement
        }
        var o = r === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(r.scrollLeft),
            u = r === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(r.scrollTop),
            s = {
                time: a(),
                event: 10,
                data: {
                    target: r,
                    x: o,
                    y: u
                }
            };
        if ((null !== t || 0 !== o || 0 !== u) && null !== o && null !== u) {
            var c = xn.length,
                l = c > 1 ? xn[c - 2] : null;
            l && function(t, e) {
                var n = t.data.x - e.data.x,
                    a = t.data.y - e.data.y;
                return n * n + a * a < 400 && e.time - t.time < 25
            }(l, s) && xn.pop(), xn.push(s), tt(In), In = $(Cn, 500, 10)
        }
    }

    function Cn(t) {
        xt(ma.bind(this, t))
    }
    var Ln, zn, Rn = null,
        jn = null,
        Yn = null;

    function An(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = Rn.start ? Rn.start : null;
            null !== jn && null !== Rn.start && n !== e.anchorNode && (tt(Yn), Hn(21)), Rn = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, jn = e, tt(Yn), Yn = $(Hn, 500, 21)
        }
    }

    function Hn(t) {
        xt(ma.bind(this, t))
    }

    function Xn() {
        jn = null, Rn = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }

    function Wn(t) {
        Ln = {
            name: t.type
        }, ma(26), wr()
    }

    function qn() {
        Ln = null
    }

    function Pn() {
        zn = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, ma(28)
    }

    function Un() {
        zn = null
    }

    function Bn(t) {
        ! function(t) {
            var e = De(t);
            Ua(e ? e.contentWindow : t === document ? window : t, "scroll", Dn, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (sn(t), function(t) {
            Ua(t, "mousedown", On.bind(this, 13, t), !0), Ua(t, "mouseup", On.bind(this, 14, t), !0), Ua(t, "mousemove", On.bind(this, 12, t), !0), Ua(t, "mousewheel", On.bind(this, 15, t), !0), Ua(t, "dblclick", On.bind(this, 16, t), !0), Ua(t, "touchstart", En.bind(this, 17, t), !0), Ua(t, "touchend", En.bind(this, 18, t), !0), Ua(t, "touchmove", En.bind(this, 19, t), !0), Ua(t, "touchcancel", En.bind(this, 20, t), !0)
        }(t), function(t) {
            Ua(t, "input", gn, !0)
        }(t), function(t) {
            Ua(t, "selectstart", An.bind(this, t), !0), Ua(t, "selectionchange", An.bind(this, t), !0)
        }(t))
    }
    var Fn = Object.freeze({
            __proto__: null,
            start: function() {
                ba = [], wa(), hn(), Mn(), bn(), Ua(window, "resize", Nn), Nn(), Ua(document, "visibilitychange", Pn), Pn(), xn = [], Dn(), Xn(), Ua(window, "pagehide", Wn)
            },
            stop: function() {
                ba = [], wa(), hn(), tt(kn), wn.length > 0 && Sn(wn[wn.length - 1].event), tt(pn), bn(), Tn(), Un(), tt(In), xn = [], Xn(), tt(Yn), qn()
            },
            observe: Bn
        }),
        Vn = /[^0-9\.]/g;

    function Jn(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(Vn, "")) * e)
        }
        return null
    }
    var Gn = ["title", "alt", "onload", "onfocus", "onerror"];

    function Kn(t, e) {
        var n = null;
        if (2 === e && !1 === Ye(t)) return n;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var a = !1 === Ye(t) ? "add" : "update",
            r = t.parentElement ? t.parentElement : null,
            i = t.ownerDocument !== document;
        switch (t.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                r = i && t.parentNode ? De(t.parentNode) : r;
                var o = t,
                    u = {
                        tag: (i ? "iframe:" : "") + "*D",
                        attributes: {
                            name: o.name,
                            publicId: o.publicId,
                            systemId: o.systemId
                        }
                    };
                Ue[a](t, r, u, e);
                break;
            case Node.DOCUMENT_NODE:
                t === document && Te(document), Zn(t);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var s = t;
                if (s.host)
                    if ("function" === typeof s.constructor && s.constructor.toString().indexOf("[native code]") >= 0) {
                        Zn(s);
                        for (var c = "", l = 0, d = ("adoptedStyleSheets" in s ? s.adoptedStyleSheets : []); l < d.length; l++) {
                            c += $n(d[l])
                        }
                        var f = {
                            tag: "*S",
                            attributes: {
                                style: c
                            }
                        };
                        Ue[a](t, s.host, f, e)
                    } else Ue[a](t, s.host, {
                        tag: "*P",
                        attributes: {}
                    }, e);
                break;
            case Node.TEXT_NODE:
                if (r = r || t.parentNode, "update" === a || r && Ye(r) && "STYLE" !== r.tagName) {
                    var h = {
                        tag: "*T",
                        value: t.nodeValue
                    };
                    Ue[a](t, r, h, e)
                }
                break;
            case Node.ELEMENT_NODE:
                var p = t,
                    v = p.tagName,
                    g = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                Gn.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(p);
                switch (r = t.parentNode ? t.parentNode : null, "http://www.w3.org/2000/svg" === p.namespaceURI && (v = "svg:" + v), v) {
                    case "HTML":
                        r = i && r ? De(r) : null;
                        var m = {
                            tag: (i ? "iframe:" : "") + v,
                            attributes: g
                        };
                        Ue[a](t, r, m, e);
                        break;
                    case "SCRIPT":
                        if ("type" in g && "application/ld+json" === g.type) try {
                            ! function t(e) {
                                for (var n = 0, a = Object.keys(e); n < a.length; n++) {
                                    var r = a[n],
                                        i = e[r];
                                    if ("@type" === r && "string" == typeof i) switch (i = (i = i.toLowerCase()).indexOf("article") >= 0 || i.indexOf("posting") >= 0 ? "article" : i) {
                                        case "article":
                                        case "recipe":
                                            J(5, e[r]);
                                            break;
                                        case "product":
                                            J(5, e[r]), J(10, e.name), J(12, e.sku), e.brand && J(6, e.brand.name);
                                            break;
                                        case "aggregaterating":
                                            e.ratingValue && (Wa(11, Jn(e.ratingValue, 100)), Wa(18, Jn(e.bestRating)), Wa(19, Jn(e.worstRating))), Wa(12, Jn(e.ratingCount)), Wa(17, Jn(e.reviewCount));
                                            break;
                                        case "person":
                                            J(8, e.name);
                                            break;
                                        case "offer":
                                            J(7, e.availability), J(14, e.itemCondition), J(13, e.priceCurrency), J(12, e.sku), Wa(13, Jn(e.price));
                                            break;
                                        case "brand":
                                            J(6, e.name)
                                    }
                                    null !== i && "object" == typeof i && t(i)
                                }
                            }(JSON.parse(p.text))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                    case "META":
                        break;
                    case "HEAD":
                        var b = {
                            tag: v,
                            attributes: g
                        };
                        location && (b.attributes["*B"] = location.protocol + "//" + location.hostname), Ue[a](t, r, b, e);
                        break;
                    case "STYLE":
                        var y = {
                            tag: v,
                            attributes: g,
                            value: Qn(p)
                        };
                        Ue[a](t, r, y, e);
                        break;
                    case "IFRAME":
                        var w = t,
                            k = {
                                tag: v,
                                attributes: g
                            };
                        Ie(w) && (! function(t) {
                            !1 === Ye(t) && Ua(t, "load", pa.bind(this, t, "childList"), !0)
                        }(w), k.attributes["*O"] = "true", w.contentDocument && w.contentWindow && "loading" !== w.contentDocument.readyState && (n = w.contentDocument)), Ue[a](t, r, k, e);
                        break;
                    default:
                        var O = {
                            tag: v,
                            attributes: g
                        };
                        p.shadowRoot && (n = p.shadowRoot), Ue[a](t, r, O, e)
                }
        }
        return n
    }

    function Zn(t) {
        Ye(t) || (! function(t) {
            try {
                var e = window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__("MutationObserver") : "MutationObserver",
                    n = e in window ? new window[e](qa(ca)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), ea.push(n))
            } catch (t) {
                ae(2, t, 0)
            }
        }(t), Bn(t))
    }

    function Qn(t) {
        var n = t.textContent ? t.textContent.trim() : "",
            a = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === n.length || a > 0 || e.cssRules) && (n = $n(t.sheet)), n
    }

    function $n(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (ae(1, t, 1), "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }

    function ta(t, e, n) {
        return mt(this, void 0, void 0, (function() {
            var a, r, i, o;
            return bt(this, (function(u) {
                switch (u.label) {
                    case 0:
                        a = [t], u.label = 1;
                    case 1:
                        if (!(a.length > 0)) return [3, 4];
                        for (r = a.shift(), i = r.firstChild; i;) a.push(i), i = i.nextSibling;
                        return Dt(e) ? [4, zt(e)] : [3, 3];
                    case 2:
                        u.sent(), u.label = 3;
                    case 3:
                        return (o = Kn(r, n)) && a.push(o), [3, 1];
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var ea = [],
        na = [],
        aa = null,
        ra = null,
        ia = [],
        oa = null,
        ua = null,
        sa = {};

    function ca(t) {
        var e = a();
        st(6, e), na.push({
            time: e,
            mutations: t
        }), xt(la, 1).then((function() {
            qa(Wt)(), qa($e)()
        }))
    }

    function la() {
        return mt(this, void 0, void 0, (function() {
            var t, e, n, r, i, o, u, s;
            return bt(this, (function(c) {
                switch (c.label) {
                    case 0:
                        Ct(t = 3), c.label = 1;
                    case 1:
                        if (!(na.length > 0)) return [3, 15];
                        e = na.shift(), n = 0, r = e.mutations, c.label = 2;
                    case 2:
                        if (!(n < r.length)) return [3, 13];
                        switch (i = r[n], o = i.target, (u = function(t, e) {
                            var n = t.target ? je(t.target.parentNode) : null;
                            if (n) {
                                var r = a() > ua,
                                    i = [n.selector, t.attributeName, t.addedNodes ? t.addedNodes.length : 0, t.removedNodes ? t.removedNodes.length : 0].join();
                                sa[i] = i in sa ? sa[i] : [0];
                                var o = sa[i];
                                if (!1 === r && o[0] >= 10 && da(o[1], 2, e), o[0] = r ? o[0] + 1 : 1, 10 === o[0]) return o[1] = t.removedNodes, "suspend";
                                if (o[0] > 10) return ""
                            }
                            return t.type
                        }(i, t)) && o && o.ownerDocument && Te(o.ownerDocument), u) {
                            case "attributes":
                                return [3, 3];
                            case "characterData":
                                return [3, 6];
                            case "childList":
                                return [3, 9];
                            case "suspend":
                                return [3, 10]
                        }
                        return [3, 11];
                    case 3:
                        return Dt(t) ? [4, zt(t)] : [3, 5];
                    case 4:
                        c.sent(), c.label = 5;
                    case 5:
                        return Kn(o, 3), [3, 12];
                    case 6:
                        return Dt(t) ? [4, zt(t)] : [3, 8];
                    case 7:
                        c.sent(), c.label = 8;
                    case 8:
                        return Kn(o, 4), [3, 12];
                    case 9:
                        return da(i.addedNodes, 1, t), da(i.removedNodes, 2, t), [3, 12];
                    case 10:
                        return (s = je(o)) && (s.data.tag = "*M"), [3, 12];
                    case 11:
                        return [3, 12];
                    case 12:
                        return n++, [3, 2];
                    case 13:
                        return [4, qt(6, e.time)];
                    case 14:
                        return c.sent(), [3, 1];
                    case 15:
                        return Lt(t), [2]
                }
            }))
        }))
    }

    function da(t, e, n) {
        return mt(this, void 0, void 0, (function() {
            var a, r;
            return bt(this, (function(i) {
                switch (i.label) {
                    case 0:
                        a = t ? t.length : 0, r = 0, i.label = 1;
                    case 1:
                        return r < a ? 1 !== e ? [3, 2] : (ta(t[r], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return Dt(n) ? [4, zt(n)] : [3, 4];
                    case 3:
                        i.sent(), i.label = 4;
                    case 4:
                        Kn(t[r], e), i.label = 5;
                    case 5:
                        return r++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function fa(t) {
        ia.indexOf(t) < 0 && ia.push(t), oa && tt(oa), oa = $(ha, 33)
    }

    function ha() {
        for (var t = 0, e = ia; t < e.length; t++) {
            pa(e[t], "characterData")
        }
        ia = []
    }

    function pa(t, e) {
        qa(ca)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }

    function va(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return ua = a() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function ga(t, e) {
        var n = {
            id: 0,
            hash: null,
            selector: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var a = je(t);
            null !== a && (n.id = a.id, n.hash = a.selector ? v(a.selector) : null, n.selector = a.selector, n.privacy = a.metadata.privacy, a.region && function(t, e) {
                var n = ze(t),
                    a = t in Ve ? Ve[t] : {
                        id: t,
                        state: 0,
                        name: Fe.get(n)
                    },
                    r = 0;
                switch (e) {
                    case 9:
                        r = 20;
                        break;
                    case 27:
                        r = 30
                }
                en(n, a, r)
            }(a.region, e))
        }
        return n
    }

    function ma(t) {
        return mt(this, void 0, void 0, (function() {
            var e, n, r, i, o, u, c, d, f, h, p, v, g, m;
            return bt(this, (function(b) {
                switch (e = a(), n = [e, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (v = 0; v < wn.length; v++) g = wn[v], (r = ga(g.data.target, g.event)).id > 0 && ((n = [g.time, g.event]).push(r.id), n.push(g.data.x), n.push(g.data.y), Da(n), s(g.event, g.data.x, g.data.y));
                        Mn();
                        break;
                    case 9:
                        for (v = 0; v < un.length; v++) g = un[v], i = ga(g.data.target, g.event), (n = [g.time, g.event]).push(i.id), n.push(g.data.x), n.push(g.data.y), n.push(g.data.eX), n.push(g.data.eY), n.push(g.data.button), n.push(g.data.reaction), n.push(g.data.context), n.push(yt(g.data.text, "click", i.privacy)), n.push(g.data.link), n.push(i.hash), Da(n), ka(g.time, g.event, i.hash, g.data.x, g.data.y, g.data.reaction, g.data.context);
                        hn();
                        break;
                    case 11:
                        o = yn, n.push(o.width), n.push(o.height), s(t, o.width, o.height), Tn(), Da(n);
                        break;
                    case 26:
                        u = Ln, n.push(u.name), qn(), Da(n);
                        break;
                    case 27:
                        for (v = 0; v < vn.length; v++) g = vn[v], c = ga(g.data.target, g.event), (n = [g.time, g.event]).push(c.id), n.push(g.data.value), Da(n);
                        bn();
                        break;
                    case 21:
                        (d = Rn) && (f = ga(d.start, t), h = ga(d.end, t), n.push(f.id), n.push(d.startOffset), n.push(h.id), n.push(d.endOffset), Xn(), Da(n));
                        break;
                    case 10:
                        for (v = 0; v < xn.length; v++) g = xn[v], (p = ga(g.data.target, g.event)).id > 0 && ((n = [g.time, g.event]).push(p.id), n.push(g.data.x), n.push(g.data.y), Da(n), s(g.event, g.data.x, g.data.y));
                        xn = [];
                        break;
                    case 22:
                        for (v = 0; v < ya.length; v++) g = ya[v], (n = [g.time, g.event]).push(g.data.type), n.push(g.data.hash), n.push(g.data.x), n.push(g.data.y), n.push(g.data.reaction), n.push(g.data.context), Da(n, !1);
                        wa();
                        break;
                    case 28:
                        m = zn, n.push(m.visible), Da(n), l(e, m.visible), Un()
                }
                return [2]
            }))
        }))
    }
    var ba = [],
        ya = [];

    function wa() {
        ya = []
    }

    function ka(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), ba.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), s(e, a, r)
    }
    var Oa, Ea, _a, Sa, Ma, Na = 0,
        Ta = null,
        xa = 0;

    function Ia() {
        Sa = !0, Na = 0, xa = 0, Oa = [], Ea = [], _a = {}, Ma = null
    }

    function Da(t, n) {
        if (void 0 === n && (n = !0), Sa) {
            var r = a(),
                i = t.length > 1 ? t[1] : null,
                o = JSON.stringify(t);
            switch (i) {
                case 37:
                case 5:
                case 6:
                    Na += o.length, Oa.push(o);
                    break;
                default:
                    Ea.push(o)
            }
            r - xa > 2 * e.delay && (tt(Ta), Ta = null), n && null === Ta && (25 !== i && rt(), Ta = $(La, e.delay), xa = r, q(Na))
        }
    }

    function Ca() {
        tt(Ta), La(!0), Na = 0, xa = 0, Oa = [], Ea = [], _a = {}, Ma = null, Sa = !1
    }

    function La(t) {
        void 0 === t && (t = !1), Ta = null;
        var n = !1 === e.lean && A.sequence > 0;
        n && Oa && Oa.length > 0 && Wa(1, 1), $e(),
            function() {
                var t = [];
                ya = [];
                for (var e = A.start + A.duration, n = Math.max(e - 2e3, 0), a = 0, r = ba; a < r.length; a++) {
                    var i = r[a];
                    i.time >= n && (i.time <= e && ya.push(i), t.push(i))
                }
                ba = t, ma(22)
            }(), gt();
        var a = !0 === t,
            r = function(t) {
                return t.p.length > 0 ? '{"e":' + t.e + ',"a":' + t.a + ',"p":' + t.p + "}" : '{"e":' + t.e + ',"a":' + t.a + "}"
            }({
                e: JSON.stringify(H(a)),
                a: "[" + Ea.join() + "]",
                p: n ? "[" + Oa.join() + "]" : ""
            });
        Xa(2, r.length), za(r, A.sequence, a), Ea = [], n && (Oa = [], Na = 0)
    }

    function za(t, n, a) {
        if ("string" == typeof e.upload && e.server) {
            var r = e.server + "/" + e.upload,
                i = !1;
            if (a && "sendBeacon" in navigator && (i = navigator.sendBeacon(r, t)), !1 === i) {
                n in _a ? _a[n].attempts++ : _a[n] = {
                    data: t,
                    attempts: 1
                };
                var o = new XMLHttpRequest;
                o.open("POST", r), null !== n && (o.onreadystatechange = function() {
                    qa(Ra)(o, n, a)
                }), o.withCredentials = !0, o.send(t)
            }
        } else if (e.upload) {
            (0, e.upload)(t)
        }
    }

    function Ra(t, e, n) {
        var a = _a[e];
        t && 4 === t.readyState && a && ((t.status < 200 || t.status > 208) && a.attempts <= 1 ? 0 === t.status ? za(a.data, e, !0) : t.status >= 400 && t.status < 500 ? P(6) : za(a.data, e, n) : (Ma = {
            sequence: e,
            attempts: a.attempts,
            status: t.status
        }, a.attempts > 1 && ja(2), 200 === t.status && t.responseText && function(t) {
            switch (t && t.length > 0 ? t.split(" ")[0] : "") {
                case "END":
                    P(6);
                    break;
                case "UPGRADE":
                    ft("Auto")
            }
        }(t.responseText), a.attempts > 1 && 0 !== t.status && P(3), delete _a[e]))
    }

    function ja(t) {
        var e = [a(), t];
        switch (t) {
            case 4:
                var n = r;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), Da(e, !1)), u();
                break;
            case 25:
                e.push(Z.gap), Da(e);
                break;
            case 35:
                e.push(X.check), Da(e, !1);
                break;
            case 3:
                e.push(dt.key), Da(e);
                break;
            case 2:
                e.push(Ma.sequence), e.push(Ma.attempts), e.push(Ma.status), Da(e, !1);
                break;
            case 24:
                e.push(h.key), e.push(h.value), Da(e);
                break;
            case 34:
                var i = Object.keys(g);
                if (i.length > 0) {
                    for (var o = 0, s = i; o < s.length; o++) {
                        var c = s[o];
                        e.push(c), e.push(g[c])
                    }
                    k(), Da(e, !1)
                }
                break;
            case 0:
                var l = Object.keys(Aa);
                if (l.length > 0) {
                    for (var d = 0, f = l; d < f.length; d++) {
                        var p = f[d],
                            v = parseInt(p, 10);
                        e.push(v), e.push(Math.round(Aa[p]))
                    }
                    Aa = {}, Da(e, !1)
                }
                break;
            case 1:
                var m = Object.keys(V);
                if (m.length > 0) {
                    for (var b = 0, y = m; b < y.length; b++) {
                        var w = y[b];
                        v = parseInt(w, 10);
                        e.push(v), e.push(V[w])
                    }
                    K(), Da(e, !1)
                }
                break;
            case 36:
                var O = Object.keys(ut);
                if (O.length > 0) {
                    for (var E = 0, _ = O; E < _.length; E++) {
                        var S = _[E];
                        v = parseInt(S, 10);
                        e.push(v), e.push([].concat.apply([], ut[S]))
                    }
                    lt(), Da(e, !1)
                }
        }
    }
    var Ya = null,
        Aa = null;

    function Ha(t, e) {
        void 0 === e && (e = 1), t in Ya || (Ya[t] = 0), t in Aa || (Aa[t] = 0), Ya[t] += e, Aa[t] += e
    }

    function Xa(t, e) {
        null !== e && (t in Ya || (Ya[t] = 0), t in Aa || (Aa[t] = 0), Ya[t] += e, Aa[t] += e)
    }

    function Wa(t, e) {
        null !== e && !1 === isNaN(e) && (t in Ya || (Ya[t] = 0), (e > Ya[t] || 0 === Ya[t]) && (Aa[t] = e, Ya[t] = e))
    }

    function qa(t) {
        return function() {
            var e = performance.now();
            t.apply(this, arguments);
            var n = performance.now() - e;
            Xa(4, n), n > 30 && (Ha(7), Wa(6, n))
        }
    }
    var Pa = [];

    function Ua(t, e, n, a) {
        void 0 === a && (a = !1), n = qa(n);
        try {
            t.addEventListener(e, n, a), Pa.push({
                event: e,
                target: t,
                listener: n,
                capture: a
            })
        } catch (t) {}
    }

    function Ba() {
        for (var t = 0, e = Pa; t < e.length; t++) {
            var n = e[t];
            try {
                n.target.removeEventListener(n.event, n.listener, n.capture)
            } catch (t) {}
        }
        Pa = []
    }
    var Fa = null,
        Va = null,
        Ja = null,
        Ga = 0;

    function Ka() {
        return !(Ga++ > 20) || (ae(4, null, 0), !1)
    }

    function Za() {
        Ja !== Qa() && Ga <= 20 && (wr(), window.setTimeout(yr, 250))
    }

    function Qa() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var $a = !1;

    function tr() {
        $a = !0, n = performance.now(), Tt(), Ba(), Y(), Ja = Qa(), Ga = 0, Ua(window, "popstate", Za), null === Fa && (Fa = history.pushState), history.pushState = function() {
            Ka() && (Fa.apply(this, arguments), Za())
        }, null === Va && (Va = history.replaceState), history.replaceState = function() {
            Ka() && (Va.apply(this, arguments), Za())
        }
    }

    function er() {
        null !== Fa && (history.pushState = Fa, Fa = null), null !== Va && (history.replaceState = Va, Va = null), Ja = null, Ga = 0, Y(), Ba(), Tt(), n = 0, $a = !1
    }

    function nr() {
        return $a
    }

    function ar(t) {
        if (null === t || $a) return !1;
        for (var n in t) n in e && (e[n] = t[n]);
        return !0
    }

    function rr() {
        yr(), p("clarity", "restart")
    }

    function ir() {
        return mt(this, void 0, void 0, (function() {
            var t, e;
            return bt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = a(), Ct(e = 3), [4, ta(document, e, 0)];
                    case 1:
                        return n.sent(), [4, qt(5, t)];
                    case 2:
                        return n.sent(), Lt(e), [2]
                }
            }))
        }))
    }
    var or, ur, sr = null;

    function cr() {
        sr = null
    }

    function lr(t) {
        sr = {
            fetchStart: Math.round(t.fetchStart),
            connectStart: Math.round(t.connectStart),
            connectEnd: Math.round(t.connectEnd),
            requestStart: Math.round(t.requestStart),
            responseStart: Math.round(t.responseStart),
            responseEnd: Math.round(t.responseEnd),
            domInteractive: Math.round(t.domInteractive),
            domComplete: Math.round(t.domComplete),
            loadEventStart: Math.round(t.loadEventStart),
            loadEventEnd: Math.round(t.loadEventEnd),
            redirectCount: Math.round(t.redirectCount),
            size: t.transferSize ? t.transferSize : 0,
            type: t.type,
            protocol: t.nextHopProtocol,
            encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
            decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
        }, dr(29)
    }

    function dr(t) {
        return mt(this, void 0, void 0, (function() {
            var e, n;
            return bt(this, (function(r) {
                switch (e = a(), n = [e, t], t) {
                    case 30:
                        n.push(or.downlink), n.push(or.rtt), n.push(or.saveData), n.push(or.type), hr(), Da(n, !1);
                        break;
                    case 29:
                        n.push(sr.fetchStart), n.push(sr.connectStart), n.push(sr.connectEnd), n.push(sr.requestStart), n.push(sr.responseStart), n.push(sr.responseEnd), n.push(sr.domInteractive), n.push(sr.domComplete), n.push(sr.loadEventStart), n.push(sr.loadEventEnd), n.push(sr.redirectCount), n.push(sr.size), n.push(sr.type), n.push(sr.protocol), n.push(sr.encodedSize), n.push(sr.decodedSize), cr(), Da(n, !1)
                }
                return [2]
            }))
        }))
    }

    function fr() {
        var t = navigator.connection;
        or = {
            downlink: t.downlink,
            rtt: t.rtt,
            saveData: t.saveData ? 1 : 0,
            type: t.effectiveType
        }, dr(30)
    }

    function hr() {
        or = null
    }
    var pr = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function vr() {
        try {
            ur && ur.disconnect(), ur = new PerformanceObserver(qa(gr));
            for (var t = 0, e = pr; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && Xa(9, 0), ur.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            ae(3, null, 1)
        }
    }

    function gr(t) {
        ! function(t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case "navigation":
                        lr(a);
                        break;
                    case "resource":
                        J(4, mr(a.name));
                        break;
                    case "longtask":
                        Ha(7);
                        break;
                    case "first-input":
                        e && Wa(10, a.processingStart - a.startTime);
                        break;
                    case "layout-shift":
                        e && !a.hadRecentInput && Xa(9, 1e3 * a.value);
                        break;
                    case "largest-contentful-paint":
                        e && Wa(8, a.startTime)
                }
            }
        }(t.getEntries())
    }

    function mr(t) {
        var e = document.createElement("a");
        return e.href = t, e.hostname
    }
    var br = [Object.freeze({
        __proto__: null,
        start: function() {
            Ua(window, "error", $t), Qt = {}, Ua(document, "error", Ht, !0), re()
        },
        stop: function() {
            jt = null, re()
        }
    }), Object.freeze({
        __proto__: null,
        start: function() {
            Xt(), Wt(), an(), Ke = null, Fe = new WeakMap, Ve = {}, Je = [], Ge = !!window.IntersectionObserver, Se(), ea = [], ia = [], oa = null, ua = 0, sa = {}, null === aa && (aa = CSSStyleSheet.prototype.insertRule), null === ra && (ra = CSSStyleSheet.prototype.deleteRule), CSSStyleSheet.prototype.insertRule = function() {
                return fa(this.ownerNode), aa.apply(this, arguments)
            }, CSSStyleSheet.prototype.deleteRule = function() {
                return fa(this.ownerNode), ra.apply(this, arguments)
            }, xt(ir, 1).then((function() {
                qa(Wt)(), qa($e)()
            })), Gt(), Vt = null, Ft = !!window.ResizeObserver
        },
        stop: function() {
            an(), Fe = null, Ve = {}, Je = [], Ke && (Ke.disconnect(), Ke = null), Ge = !1, Me(),
                function() {
                    for (var t = 0, e = ea; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    ea = [], null !== aa && (CSSStyleSheet.prototype.insertRule = aa, aa = null), null !== ra && (CSSStyleSheet.prototype.deleteRule = ra, ra = null), sa = {}, na = [], ia = [], ua = 0, oa = null
                }(), Kt(), Xt()
        }
    }), Fn, Object.freeze({
        __proto__: null,
        start: function() {
            cr(), navigator && "connection" in navigator && "downlink" in navigator.connection && "number" == typeof navigator.connection.downlink && (navigator.connection.addEventListener("change", fr), fr()),
                function() {
                    window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Ua(window, "load", $.bind(this, vr, 0)) : vr() : ae(3, null, 0)
                }()
        },
        stop: function() {
            ur && ur.disconnect(), ur = null, hr(), cr()
        }
    })];

    function yr(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    return !1 === $a && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap
                } catch (t) {
                    return !1
                }
            }() && (ar(t), tr(), pt(), br.forEach((function(t) {
                return qa(t.start)()
            })))
    }

    function wr() {
        nr() && (br.slice().reverse().forEach((function(t) {
            return qa(t.stop)()
        })), vt(), er())
    }
    var kr = Object.freeze({
        __proto__: null,
        version: "0.6.15",
        start: yr,
        pause: function() {
            nr() && (p("clarity", "pause"), null === Mt && (Mt = new Promise((function(t) {
                Nt = t
            }))))
        },
        resume: function() {
            nr() && (Mt && (Nt(), Mt = null, null === St && It()), p("clarity", "resume"))
        },
        stop: wr,
        consent: M,
        event: p,
        identify: b,
        set: m,
        upgrade: ft,
        metadata: S
    });
    ! function() {
        if ("undefined" != typeof window) {
            var t = window;
            t.clarity && !t.clarity.q && console.warn("Error CL001: Multiple Clarity tags detected.");
            var e = t.clarity && t.clarity.q || [];
            for (t.clarity = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return kr[t].apply(kr, e)
                }; e.length > 0;) t.clarity.apply(t, e.shift())
        }
    }()
}();