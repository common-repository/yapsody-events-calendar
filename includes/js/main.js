//! moment.js
//! version : 2.11.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
    "use strict";

    function a() {
        return Qc.apply(null, arguments)
    }

    function b(a) {
        Qc = a
    }

    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function g(a, b) {
        for (var c in b) f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a, b, c, d) {
        return za(a, b, c, d, !0).utc()
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function j(a) {
        return null == a._pf && (a._pf = i()), a._pf
    }

    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
        }
        return a._isValid
    }

    function l(a) {
        var b = h(NaN);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
    }

    function m(a) {
        return void 0 === a
    }

    function n(a, b) {
        var c, d, e;
        if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), Sc.length > 0)
            for (c in Sc) d = Sc[c], e = b[d], m(e) || (a[d] = e);
        return a
    }

    function o(b) {
        n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Tc === !1 && (Tc = !0, a.updateOffset(this), Tc = !1)
    }

    function p(a) {
        return a instanceof o || null != a && null != a._isAMomentObject
    }

    function q(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function r(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = q(b)), c
    }

    function s(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
        return g + f
    }

    function t() {}

    function u(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function v(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = u(a[f]).split("-"), b = e.length, c = u(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = w(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function w(a) {
        var b = null;
        if (!Uc[a] && !m(module) && module && module.exports) try {
            b = Rc._abbr, require("./locale/" + a), x(b)
        } catch (c) {}
        return Uc[a]
    }

    function x(a, b) {
        var c;
        return a && (c = m(b) ? z(a) : y(a, b), c && (Rc = c)), Rc._abbr
    }

    function y(a, b) {
        return null !== b ? (b.abbr = a, Uc[a] = Uc[a] || new t, Uc[a].set(b), x(a), Uc[a]) : (delete Uc[a], null)
    }

    function z(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Rc;
        if (!c(a)) {
            if (b = w(a)) return b;
            a = [a]
        }
        return v(a)
    }

    function A(a, b) {
        var c = a.toLowerCase();
        Vc[c] = Vc[c + "s"] = Vc[b] = a
    }

    function B(a) {
        return "string" == typeof a ? Vc[a] || Vc[a.toLowerCase()] : void 0
    }

    function C(a) {
        var b, c, d = {};
        for (c in a) f(a, c) && (b = B(c), b && (d[b] = a[c]));
        return d
    }

    function D(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }

    function E(b, c) {
        return function(d) {
            return null != d ? (G(this, b, d), a.updateOffset(this, c), this) : F(this, b)
        }
    }

    function F(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }

    function G(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function H(a, b) {
        var c;
        if ("object" == typeof a)
            for (c in a) this.set(c, a[c]);
        else if (a = B(a), D(this[a])) return this[a](b);
        return this
    }

    function I(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function J(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }), a && (Zc[a] = e), b && (Zc[b[0]] = function() {
            return I(e.apply(this, arguments), b[1], b[2])
        }), c && (Zc[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function K(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function L(a) {
        var b, c, d = a.match(Wc);
        for (b = 0, c = d.length; c > b; b++) Zc[d[b]] ? d[b] = Zc[d[b]] : d[b] = K(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function M(a, b) {
        return a.isValid() ? (b = N(b, a.localeData()), Yc[b] = Yc[b] || L(b), Yc[b](a)) : a.localeData().invalidDate()
    }

    function N(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Xc.lastIndex = 0; d >= 0 && Xc.test(a);) a = a.replace(Xc, c), Xc.lastIndex = 0, d -= 1;
        return a
    }

    function O(a, b, c) {
        pd[a] = D(b) ? b : function(a) {
            return a && c ? c : b
        }
    }

    function P(a, b) {
        return f(pd, a) ? pd[a](b._strict, b._locale) : new RegExp(Q(a))
    }

    function Q(a) {
        return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function R(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
                c[b] = r(a)
            }), c = 0; c < a.length; c++) qd[a[c]] = d
    }

    function S(a, b) {
        R(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function T(a, b, c) {
        null != b && f(qd, a) && qd[a](b, c._a, c, a)
    }

    function U(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function V(a, b) {
        return c(this._months) ? this._months[a.month()] : this._months[Ad.test(b) ? "format" : "standalone"][a.month()]
    }

    function W(a, b) {
        return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Ad.test(b) ? "format" : "standalone"][a.month()]
    }

    function X(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function Y(a, b) {
        var c;
        return a.isValid() ? "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), U(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a) : a
    }

    function Z(b) {
        return null != b ? (Y(this, b), a.updateOffset(this, !0), this) : F(this, "Month")
    }

    function $() {
        return U(this.year(), this.month())
    }

    function _(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[sd] < 0 || c[sd] > 11 ? sd : c[td] < 1 || c[td] > U(c[rd], c[sd]) ? td : c[ud] < 0 || c[ud] > 24 || 24 === c[ud] && (0 !== c[vd] || 0 !== c[wd] || 0 !== c[xd]) ? ud : c[vd] < 0 || c[vd] > 59 ? vd : c[wd] < 0 || c[wd] > 59 ? wd : c[xd] < 0 || c[xd] > 999 ? xd : -1, j(a)._overflowDayOfYear && (rd > b || b > td) && (b = td), j(a)._overflowWeeks && -1 === b && (b = yd), j(a)._overflowWeekday && -1 === b && (b = zd), j(a).overflow = b), a
    }

    function aa(b) {
        a.suppressDeprecationWarnings === !1 && !m(console) && console.warn && console.warn("Deprecation warning: " + b)
    }

    function ba(a, b) {
        var c = !0;
        return g(function() {
            return c && (aa(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
        }, b)
    }

    function ca(a, b) {
        Dd[a] || (aa(b), Dd[a] = !0)
    }

    function da(a) {
        var b, c, d, e, f, g, h = a._i,
            i = Ed.exec(h) || Fd.exec(h);
        if (i) {
            for (j(a).iso = !0, b = 0, c = Hd.length; c > b; b++)
                if (Hd[b][1].exec(i[1])) {
                    e = Hd[b][0], d = Hd[b][2] !== !1;
                    break
                }
            if (null == e) return void(a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Id.length; c > b; b++)
                    if (Id[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Id[b][0];
                        break
                    }
                if (null == f) return void(a._isValid = !1)
            }
            if (!d && null != f) return void(a._isValid = !1);
            if (i[4]) {
                if (!Gd.exec(i[4])) return void(a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""), sa(a)
        } else a._isValid = !1
    }

    function ea(b) {
        var c = Jd.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (da(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }

    function fa(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    }

    function ga(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
    }

    function ha(a) {
        return ia(a) ? 366 : 365
    }

    function ia(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function ja() {
        return ia(this.year())
    }

    function ka(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ga(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }

    function la(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7,
            i = ka(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return 0 >= j ? (f = a - 1, g = ha(f) + j) : j > ha(a) ? (f = a + 1, g = j - ha(a)) : (f = a, g = j), {
            year: f,
            dayOfYear: g
        }
    }

    function ma(a, b, c) {
        var d, e, f = ka(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return 1 > g ? (e = a.year() - 1, d = g + na(e, b, c)) : g > na(a.year(), b, c) ? (d = g - na(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        }
    }

    function na(a, b, c) {
        var d = ka(a, b, c),
            e = ka(a + 1, b, c);
        return (ha(a) - d + e) / 7
    }

    function oa(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function pa(b) {
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }

    function qa(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = pa(a), a._w && null == a._a[td] && null == a._a[sd] && ra(a), a._dayOfYear && (e = oa(a._a[rd], d[rd]), a._dayOfYear > ha(e) && (j(a)._overflowDayOfYear = !0), c = ga(e, 0, a._dayOfYear), a._a[sd] = c.getUTCMonth(), a._a[td] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[ud] && 0 === a._a[vd] && 0 === a._a[wd] && 0 === a._a[xd] && (a._nextDay = !0, a._a[ud] = 0), a._d = (a._useUTC ? ga : fa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[ud] = 24)
        }
    }

    function ra(a) {
        var b, c, d, e, f, g, h, i;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = oa(b.GG, a._a[rd], ma(Aa(), 1, 4).year), d = oa(b.W, 1), e = oa(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = oa(b.gg, a._a[rd], ma(Aa(), f, g).year), d = oa(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > na(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = la(c, d, e, f, g), a._a[rd] = h.year, a._dayOfYear = h.dayOfYear)
    }

    function sa(b) {
        if (b._f === a.ISO_8601) return void da(b);
        b._a = [], j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            k = 0;
        for (e = N(b._f, b._locale).match(Wc) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Zc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), T(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[ud] <= 12 && b._a[ud] > 0 && (j(b).bigHour = void 0), b._a[ud] = ta(b._locale, b._a[ud], b._meridiem), qa(b), _(b)
    }

    function ta(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function ua(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], sa(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }

    function va(a) {
        if (!a._d) {
            var b = C(a._i);
            a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                return a && parseInt(a, 10)
            }), qa(a)
        }
    }

    function wa(a) {
        var b = new o(_(xa(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function xa(a) {
        var b = a._i,
            e = a._f;
        return a._locale = a._locale || z(a._l), null === b || void 0 === e && "" === b ? l({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(_(b)) : (c(e) ? ua(a) : e ? sa(a) : d(b) ? a._d = b : ya(a), k(a) || (a._d = null), a))
    }

    function ya(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ea(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
            return parseInt(a, 10)
        }), qa(b)) : "object" == typeof f ? va(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
    }

    function za(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, wa(f)
    }

    function Aa(a, b, c, d) {
        return za(a, b, c, d, !1)
    }

    function Ba(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Aa();
        for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
        return d
    }

    function Ca() {
        var a = [].slice.call(arguments, 0);
        return Ba("isBefore", a)
    }

    function Da() {
        var a = [].slice.call(arguments, 0);
        return Ba("isAfter", a)
    }

    function Ea(a) {
        var b = C(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = z(), this._bubble()
    }

    function Fa(a) {
        return a instanceof Ea
    }

    function Ga(a, b) {
        J(a, 0, 0, function() {
            var a = this.utcOffset(),
                c = "+";
            return 0 > a && (a = -a, c = "-"), c + I(~~(a / 60), 2) + b + I(~~a % 60, 2)
        })
    }

    function Ha(a, b) {
        var c = (b || "").match(a) || [],
            d = c[c.length - 1] || [],
            e = (d + "").match(Od) || ["-", 0, 0],
            f = +(60 * e[1]) + r(e[2]);
        return "+" === e[0] ? f : -f
    }

    function Ia(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Aa(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Aa(b).local()
    }

    function Ja(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Ka(b, c) {
        var d, e = this._offset || 0;
        return this.isValid() ? null != b ? ("string" == typeof b ? b = Ha(md, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ja(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? $a(this, Va(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ja(this) : null != b ? this : NaN
    }

    function La(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Ma(a) {
        return this.utcOffset(0, a)
    }

    function Na(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ja(this), "m")), this
    }

    function Oa() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ha(ld, this._i)), this
    }

    function Pa(a) {
        return this.isValid() ? (a = a ? Aa(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
    }

    function Qa() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ra() {
        if (!m(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (n(a, this), a = xa(a), a._a) {
            var b = a._isUTC ? h(a._a) : Aa(a._a);
            this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Sa() {
        return this.isValid() ? !this._isUTC : !1
    }

    function Ta() {
        return this.isValid() ? this._isUTC : !1
    }

    function Ua() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function Va(a, b) {
        var c, d, e, g = a,
            h = null;
        return Fa(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Pd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: 0,
            d: r(h[td]) * c,
            h: r(h[ud]) * c,
            m: r(h[vd]) * c,
            s: r(h[wd]) * c,
            ms: r(h[xd]) * c
        }) : (h = Qd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: Wa(h[2], c),
            M: Wa(h[3], c),
            d: Wa(h[4], c),
            h: Wa(h[5], c),
            m: Wa(h[6], c),
            s: Wa(h[7], c),
            w: Wa(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = Ya(Aa(g.from), Aa(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ea(g), Fa(a) && f(a, "_locale") && (d._locale = a._locale), d
    }

    function Wa(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function Xa(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function Ya(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Ia(b, a), a.isBefore(b) ? c = Xa(a, b) : (c = Xa(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Za(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (ca(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Va(c, d), $a(this, e, a), this
        }
    }

    function $a(b, c, d, e) {
        var f = c._milliseconds,
            g = c._days,
            h = c._months;
        b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && G(b, "Date", F(b, "Date") + g * d), h && Y(b, F(b, "Month") + h * d), e && a.updateOffset(b, g || h))
    }

    function _a(a, b) {
        var c = a || Aa(),
            d = Ia(c, this).startOf("day"),
            e = this.diff(d, "days", !0),
            f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
            g = b && (D(b[f]) ? b[f]() : b[f]);
        return this.format(g || this.localeData().calendar(f, this, Aa(c)))
    }

    function ab() {
        return new o(this)
    }

    function bb(a, b) {
        var c = p(a) ? a : Aa(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1
    }

    function cb(a, b) {
        var c = p(a) ? a : Aa(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1
    }

    function db(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c)
    }

    function eb(a, b) {
        var c, d = p(a) ? a : Aa(a);
        return this.isValid() && d.isValid() ? (b = B(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1
    }

    function fb(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }

    function gb(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }

    function hb(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Ia(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = B(b), "year" === b || "month" === b || "quarter" === b ? (g = ib(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : NaN) : NaN
    }

    function ib(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function jb() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function kb() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function lb(b) {
        var c = M(this, b || a.defaultFormat);
        return this.localeData().postformat(c)
    }

    function mb(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Aa(a).isValid()) ? Va({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function nb(a) {
        return this.from(Aa(), a)
    }

    function ob(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Aa(a).isValid()) ? Va({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function pb(a) {
        return this.to(Aa(), a)
    }

    function qb(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = z(a), null != b && (this._locale = b), this)
    }

    function rb() {
        return this._locale
    }

    function sb(a) {
        switch (a = B(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function tb(a) {
        return a = B(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
    }

    function ub() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function vb() {
        return Math.floor(+this / 1e3)
    }

    function wb() {
        return this._offset ? new Date(+this) : this._d
    }

    function xb() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function yb() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function zb() {
        return this.isValid() ? this.toISOString() : "null"
    }

    function Ab() {
        return k(this)
    }

    function Bb() {
        return g({}, j(this))
    }

    function Cb() {
        return j(this).overflow
    }

    function Db() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Eb(a, b) {
        J(0, [a, a.length], 0, b)
    }

    function Fb(a) {
        return Jb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Gb(a) {
        return Jb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Hb() {
        return na(this.year(), 1, 4)
    }

    function Ib() {
        var a = this.localeData()._week;
        return na(this.year(), a.dow, a.doy)
    }

    function Jb(a, b, c, d, e) {
        var f;
        return null == a ? ma(this, d, e).year : (f = na(a, d, e), b > f && (b = f), Kb.call(this, a, b, c, d, e))
    }

    function Kb(a, b, c, d, e) {
        var f = la(a, b, c, d, e),
            g = ga(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
    }

    function Lb(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Mb(a) {
        return ma(a, this._week.dow, this._week.doy).week
    }

    function Nb() {
        return this._week.dow
    }

    function Ob() {
        return this._week.doy
    }

    function Pb(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Qb(a) {
        var b = ma(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Rb(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Sb(a, b) {
        return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
    }

    function Tb(a) {
        return this._weekdaysShort[a.day()]
    }

    function Ub(a) {
        return this._weekdaysMin[a.day()]
    }

    function Vb(a, b, c) {
        var d, e, f;
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
            if (e = Aa([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d
        }
    }

    function Wb(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Rb(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function Xb(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function Yb(a) {
        return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN
    }

    function Zb(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function $b() {
        return this.hours() % 12 || 12
    }

    function _b(a, b) {
        J(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function ac(a, b) {
        return b._meridiemParse
    }

    function bc(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function cc(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function dc(a, b) {
        b[xd] = r(1e3 * ("0." + a))
    }

    function ec() {
        return this._isUTC ? "UTC" : ""
    }

    function fc() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function gc(a) {
        return Aa(1e3 * a)
    }

    function hc() {
        return Aa.apply(null, arguments).parseZone()
    }

    function ic(a, b, c) {
        var d = this._calendar[a];
        return D(d) ? d.call(b, c) : d
    }

    function jc(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function kc() {
        return this._invalidDate
    }

    function lc(a) {
        return this._ordinal.replace("%d", a)
    }

    function mc(a) {
        return a
    }

    function nc(a, b, c, d) {
        var e = this._relativeTime[c];
        return D(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function oc(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return D(c) ? c(b) : c.replace(/%s/i, b)
    }

    function pc(a) {
        var b, c;
        for (c in a) b = a[c], D(b) ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function qc(a, b, c, d) {
        var e = z(),
            f = h().set(d, b);
        return e[c](f, a)
    }

    function rc(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return qc(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++) g[f] = qc(a, f, c, e);
        return g
    }

    function sc(a, b) {
        return rc(a, b, "months", 12, "month")
    }

    function tc(a, b) {
        return rc(a, b, "monthsShort", 12, "month")
    }

    function uc(a, b) {
        return rc(a, b, "weekdays", 7, "day")
    }

    function vc(a, b) {
        return rc(a, b, "weekdaysShort", 7, "day")
    }

    function wc(a, b) {
        return rc(a, b, "weekdaysMin", 7, "day")
    }

    function xc() {
        var a = this._data;
        return this._milliseconds = me(this._milliseconds), this._days = me(this._days), this._months = me(this._months), a.milliseconds = me(a.milliseconds), a.seconds = me(a.seconds), a.minutes = me(a.minutes), a.hours = me(a.hours), a.months = me(a.months), a.years = me(a.years), this
    }

    function yc(a, b, c, d) {
        var e = Va(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function zc(a, b) {
        return yc(this, a, b, 1)
    }

    function Ac(a, b) {
        return yc(this, a, b, -1)
    }

    function Bc(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a)
    }

    function Cc() {
        var a, b, c, d, e, f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Bc(Ec(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Dc(g)), h += e, g -= Bc(Ec(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function Dc(a) {
        return 4800 * a / 146097
    }

    function Ec(a) {
        return 146097 * a / 4800
    }

    function Fc(a) {
        var b, c, d = this._milliseconds;
        if (a = B(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Dc(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(Ec(this._months)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function Gc() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12)
    }

    function Hc(a) {
        return function() {
            return this.as(a)
        }
    }

    function Ic(a) {
        return a = B(a), this[a + "s"]()
    }

    function Jc(a) {
        return function() {
            return this._data[a]
        }
    }

    function Kc() {
        return q(this.days() / 7)
    }

    function Lc(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function Mc(a, b, c) {
        var d = Va(a).abs(),
            e = Ce(d.as("s")),
            f = Ce(d.as("m")),
            g = Ce(d.as("h")),
            h = Ce(d.as("d")),
            i = Ce(d.as("M")),
            j = Ce(d.as("y")),
            k = e < De.s && ["s", e] || 1 >= f && ["m"] || f < De.m && ["mm", f] || 1 >= g && ["h"] || g < De.h && ["hh", g] || 1 >= h && ["d"] || h < De.d && ["dd", h] || 1 >= i && ["M"] || i < De.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, Lc.apply(null, k)
    }

    function Nc(a, b) {
        return void 0 === De[a] ? !1 : void 0 === b ? De[a] : (De[a] = b, !0)
    }

    function Oc(a) {
        var b = this.localeData(),
            c = Mc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function Pc() {
        var a, b, c, d = Ee(this._milliseconds) / 1e3,
            e = Ee(this._days),
            f = Ee(this._months);
        a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    var Qc, Rc, Sc = a.momentProperties = [],
        Tc = !1,
        Uc = {},
        Vc = {},
        Wc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Xc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Yc = {},
        Zc = {},
        $c = /\d/,
        _c = /\d\d/,
        ad = /\d{3}/,
        bd = /\d{4}/,
        cd = /[+-]?\d{6}/,
        dd = /\d\d?/,
        ed = /\d\d\d\d?/,
        fd = /\d\d\d\d\d\d?/,
        gd = /\d{1,3}/,
        hd = /\d{1,4}/,
        id = /[+-]?\d{1,6}/,
        jd = /\d+/,
        kd = /[+-]?\d+/,
        ld = /Z|[+-]\d\d:?\d\d/gi,
        md = /Z|[+-]\d\d(?::?\d\d)?/gi,
        nd = /[+-]?\d+(\.\d{1,3})?/,
        od = /[0-9]*(a[mn]\s?)?['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        pd = {},
        qd = {},
        rd = 0,
        sd = 1,
        td = 2,
        ud = 3,
        vd = 4,
        wd = 5,
        xd = 6,
        yd = 7,
        zd = 8;
    J("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), J("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    }), J("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    }), A("month", "M"), O("M", dd), O("MM", dd, _c), O("MMM", od), O("MMMM", od), R(["M", "MM"], function(a, b) {
        b[sd] = r(a) - 1
    }), R(["MMM", "MMMM"], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[sd] = e : j(c).invalidMonth = a
    });
    var Ad = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        Bd = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Cd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec".split("_"),
        Dd = {};
    a.suppressDeprecationWarnings = !1;
    var Ed = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Fd = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Gd = /Z|[+-]\d\d(?::?\d\d)?/,
        Hd = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Id = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Jd = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = ba("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), J(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), J(0, ["YYYY", 4], 0, "year"), J(0, ["YYYYY", 5], 0, "year"), J(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), O("Y", kd), O("YY", dd, _c), O("YYYY", hd, bd), O("YYYYY", id, cd), O("YYYYYY", id, cd), R(["YYYYY", "YYYYYY"], rd), R("YYYY", function(b, c) {
        c[rd] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b)
    }), R("YY", function(b, c) {
        c[rd] = a.parseTwoDigitYear(b)
    }), a.parseTwoDigitYear = function(a) {
        return r(a) + (r(a) > 68 ? 1900 : 2e3)
    };
    var Kd = E("FullYear", !1);
    a.ISO_8601 = function() {};
    var Ld = ba("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var a = Aa.apply(null, arguments);
            return this.isValid() && a.isValid() ? this > a ? this : a : l()
        }),
        Md = ba("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var a = Aa.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : l()
        }),
        Nd = Date.now || function() {
            return +new Date
        };
    Ga("Z", ":"), Ga("ZZ", ""), O("Z", md), O("ZZ", md), R(["Z", "ZZ"], function(a, b, c) {
        c._useUTC = !0, c._tzm = Ha(md, a)
    });
    var Od = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var Pd = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        Qd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Va.fn = Ea.prototype;
    var Rd = Za(1, "add"),
        Sd = Za(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Td = ba("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    J(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), J(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Eb("gggg", "weekYear"), Eb("ggggg", "weekYear"), Eb("GGGG", "isoWeekYear"), Eb("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), O("G", kd), O("g", kd), O("GG", dd, _c), O("gg", dd, _c), O("GGGG", hd, bd), O("gggg", hd, bd), O("GGGGG", id, cd), O("ggggg", id, cd), S(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
        b[d.substr(0, 2)] = r(a)
    }), S(["gg", "GG"], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), J("Q", 0, "Qo", "quarter"), A("quarter", "Q"), O("Q", $c), R("Q", function(a, b) {
        b[sd] = 3 * (r(a) - 1)
    }), J("w", ["ww", 2], "wo", "week"), J("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), O("w", dd), O("ww", dd, _c), O("W", dd), O("WW", dd, _c), S(["w", "ww", "W", "WW"], function(a, b, c, d) {
        b[d.substr(0, 1)] = r(a)
    });
    var Ud = {
        dow: 0,
        doy: 6
    };
    J("D", ["DD", 2], "Do", "date"), A("date", "D"), O("D", dd), O("DD", dd, _c), O("Do", function(a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient
    }), R(["D", "DD"], td), R("Do", function(a, b) {
        b[td] = r(a.match(dd)[0], 10)
    });
    var Vd = E("Date", !0);
    J("d", 0, "do", "day"), J("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a)
    }), J("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a)
    }), J("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a)
    }), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), O("d", dd), O("e", dd), O("E", dd), O("dd", od), O("ddd", od), O("dddd", od), S(["dd", "ddd", "dddd"], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : j(c).invalidWeekday = a
    }), S(["d", "e", "E"], function(a, b, c, d) {
        b[d] = r(a)
    });
    var Wd = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Xd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Yd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), O("DDD", gd), O("DDDD", ad), R(["DDD", "DDDD"], function(a, b, c) {
        c._dayOfYear = r(a)
    }), J("H", ["HH", 2], 0, "hour"), J("h", ["hh", 2], 0, $b), J("hmm", 0, 0, function() {
        return "" + $b.apply(this) + I(this.minutes(), 2)
    }), J("hmmss", 0, 0, function() {
        return "" + $b.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), J("Hmm", 0, 0, function() {
        return "" + this.hours() + I(this.minutes(), 2)
    }), J("Hmmss", 0, 0, function() {
        return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), _b("a", !0), _b("A", !1), A("hour", "h"), O("a", ac), O("A", ac), O("H", dd), O("h", dd), O("HH", dd, _c), O("hh", dd, _c), O("hmm", ed), O("hmmss", fd), O("Hmm", ed), O("Hmmss", fd), R(["H", "HH"], ud), R(["a", "A"], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), R(["h", "hh"], function(a, b, c) {
        b[ud] = r(a), j(c).bigHour = !0
    }), R("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[ud] = r(a.substr(0, d)), b[vd] = r(a.substr(d)), j(c).bigHour = !0
    }), R("hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[ud] = r(a.substr(0, d)), b[vd] = r(a.substr(d, 2)), b[wd] = r(a.substr(e)), j(c).bigHour = !0
    }), R("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[ud] = r(a.substr(0, d)), b[vd] = r(a.substr(d))
    }), R("Hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[ud] = r(a.substr(0, d)), b[vd] = r(a.substr(d, 2)), b[wd] = r(a.substr(e))
    });
    var Zd = /[ap]\.?m?\.?/i,
        $d = E("Hours", !0);
    J("m", ["mm", 2], 0, "minute"), A("minute", "m"), O("m", dd), O("mm", dd, _c), R(["m", "mm"], vd);
    var _d = E("Minutes", !1);
    J("s", ["ss", 2], 0, "second"), A("second", "s"), O("s", dd), O("ss", dd, _c), R(["s", "ss"], wd);
    var ae = E("Seconds", !1);
    J("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), J(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), J(0, ["SSS", 3], 0, "millisecond"), J(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), J(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), J(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), J(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), J(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), J(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), A("millisecond", "ms"), O("S", gd, $c), O("SS", gd, _c), O("SSS", gd, ad);
    var be;
    for (be = "SSSS"; be.length <= 9; be += "S") O(be, jd);
    for (be = "S"; be.length <= 9; be += "S") R(be, dc);
    var ce = E("Milliseconds", !1);
    J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
    var de = o.prototype;
    de.add = Rd, de.calendar = _a, de.clone = ab, de.diff = hb, de.endOf = tb, de.format = lb, de.from = mb, de.fromNow = nb, de.to = ob, de.toNow = pb, de.get = H, de.invalidAt = Cb, de.isAfter = bb, de.isBefore = cb, de.isBetween = db, de.isSame = eb, de.isSameOrAfter = fb, de.isSameOrBefore = gb, de.isValid = Ab, de.lang = Td, de.locale = qb, de.localeData = rb, de.max = Md, de.min = Ld, de.parsingFlags = Bb, de.set = H, de.startOf = sb, de.subtract = Sd, de.toArray = xb, de.toObject = yb, de.toDate = wb, de.toISOString = kb, de.toJSON = zb, de.toString = jb, de.unix = vb, de.valueOf = ub, de.creationData = Db, de.year = Kd, de.isLeapYear = ja, de.weekYear = Fb, de.isoWeekYear = Gb, de.quarter = de.quarters = Lb, de.month = Z, de.daysInMonth = $, de.week = de.weeks = Pb, de.isoWeek = de.isoWeeks = Qb, de.weeksInYear = Ib, de.isoWeeksInYear = Hb, de.date = Vd, de.day = de.days = Wb, de.weekday = Xb, de.isoWeekday = Yb, de.dayOfYear = Zb, de.hour = de.hours = $d, de.minute = de.minutes = _d, de.second = de.seconds = ae, de.millisecond = de.milliseconds = ce, de.utcOffset = Ka, de.utc = Ma, de.local = Na, de.parseZone = Oa, de.hasAlignedHourOffset = Pa, de.isDST = Qa, de.isDSTShifted = Ra, de.isLocal = Sa, de.isUtcOffset = Ta, de.isUtc = Ua, de.isUTC = Ua, de.zoneAbbr = ec, de.zoneName = fc, de.dates = ba("dates accessor is deprecated. Use date instead.", Vd), de.months = ba("months accessor is deprecated. Use month instead", Z), de.years = ba("years accessor is deprecated. Use year instead", Kd), de.zone = ba("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", La);
    var ee = de,
        fe = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        ge = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        he = "Invalid date",
        ie = "%d",
        je = /\d{1,2}/,
        ke = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        le = t.prototype;
    le._calendar = fe, le.calendar = ic, le._longDateFormat = ge, le.longDateFormat = jc, le._invalidDate = he, le.invalidDate = kc, le._ordinal = ie, le.ordinal = lc, le._ordinalParse = je, le.preparse = mc, le.postformat = mc, le._relativeTime = ke, le.relativeTime = nc, le.pastFuture = oc, le.set = pc, le.months = V, le._months = Bd, le.monthsShort = W, le._monthsShort = Cd, le.monthsParse = X, le.week = Mb, le._week = Ud, le.firstDayOfYear = Ob, le.firstDayOfWeek = Nb, le.weekdays = Sb, le._weekdays = Wd, le.weekdaysMin = Ub, le._weekdaysMin = Yd, le.weekdaysShort = Tb, le._weekdaysShort = Xd, le.weekdaysParse = Vb, le.isPM = bc, le._meridiemParse = Zd, le.meridiem = cc, x("en", {
        monthsParse: [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i],
        longMonthsParse: [/^january$/i, /^february$/i, /^march$/i, /^april$/i, /^may$/i, /^june$/i, /^july$/i, /^august$/i, /^september$/i, /^october$/i, /^november$/i, /^december$/i],
        shortMonthsParse: [/^jan$/i, /^feb$/i, /^mar$/i, /^apr$/i, /^may$/i, /^jun$/i, /^jul$/i, /^aug/i, /^sept?$/i, /^oct$/i, /^nov$/i, /^dec$/i],
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
                c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = ba("moment.lang is deprecated. Use moment.locale instead.", x), a.langData = ba("moment.langData is deprecated. Use moment.localeData instead.", z);
    var me = Math.abs,
        ne = Hc("ms"),
        oe = Hc("s"),
        pe = Hc("m"),
        qe = Hc("h"),
        re = Hc("d"),
        se = Hc("w"),
        te = Hc("M"),
        ue = Hc("y"),
        ve = Jc("milliseconds"),
        we = Jc("seconds"),
        xe = Jc("minutes"),
        ye = Jc("hours"),
        ze = Jc("days"),
        Ae = Jc("months"),
        Be = Jc("years"),
        Ce = Math.round,
        De = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        Ee = Math.abs,
        Fe = Ea.prototype;
    Fe.abs = xc, Fe.add = zc, Fe.subtract = Ac, Fe.as = Fc, Fe.asMilliseconds = ne, Fe.asSeconds = oe, Fe.asMinutes = pe, Fe.asHours = qe, Fe.asDays = re, Fe.asWeeks = se, Fe.asMonths = te, Fe.asYears = ue, Fe.valueOf = Gc, Fe._bubble = Cc, Fe.get = Ic, Fe.milliseconds = ve, Fe.seconds = we, Fe.minutes = xe, Fe.hours = ye, Fe.days = ze, Fe.weeks = Kc, Fe.months = Ae, Fe.years = Be, Fe.humanize = Oc, Fe.toISOString = Pc, Fe.toString = Pc, Fe.toJSON = Pc, Fe.locale = qb, Fe.localeData = rb, Fe.toIsoString = ba("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Pc), Fe.lang = Td, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), O("x", kd), O("X", nd), R("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), R("x", function(a, b, c) {
        c._d = new Date(r(a))
    }), a.version = "2.11.0", b(Aa), a.fn = ee, a.min = Ca, a.max = Da, a.now = Nd, a.utc = h, a.unix = gc, a.months = sc, a.isDate = d, a.locale = x, a.invalid = l, a.duration = Va, a.isMoment = p, a.weekdays = uc, a.parseZone = hc, a.localeData = z, a.isDuration = Fa, a.monthsShort = tc, a.weekdaysMin = wc, a.defineLocale = y, a.weekdaysShort = vc, a.normalizeUnits = B, a.relativeTimeThreshold = Nc, a.prototype = ee;
    var Ge = a;
    return Ge
});
/*!
 * FullCalendar v2.6.1
 * Docs & License: http://fullcalendar.io/
 * (c) 2015 Adam Shaw
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : "object" == typeof exports ? module.exports = a(require("jquery"), require("moment")) : a(jQuery, moment)
}(function(a, b) {
    function c(a) {
        return Q(a, Ra)
    }

    function d(b) {
        var c, d = {
            views: b.views || {}
        };
        return a.each(b, function(b, e) {
            "views" != b && (a.isPlainObject(e) && !/(time|duration|interval)$/i.test(b) && -1 == a.inArray(b, Ra) ? (c = null, a.each(e, function(a, e) {
                /^(month|week|day|default|basic(Week|Day)?|agenda(Week|Day)?)$/.test(a) ? (d.views[a] || (d.views[a] = {}), d.views[a][b] = e) : (c || (c = {}), c[a] = e)
            }), c && (d[b] = c)) : d[b] = e)
        }), d
    }

    function e(a, b) {
        b.left && a.css({
            "border-left-width": 1,
            "margin-left": b.left - 1
        }), b.right && a.css({
            "border-right-width": 1,
            "margin-right": b.right - 1
        })
    }

    function f(a) {
        a.css({
            "margin-left": "",
            "margin-right": "",
            "border-left-width": "",
            "border-right-width": ""
        })
    }

    function g() {
        a("body").addClass("fc-not-allowed")
    }

    function h() {
        a("body").removeClass("fc-not-allowed")
    }

    function i(b, c, d) {
        var e = Math.floor(c / b.length),
            f = Math.floor(c - e * (b.length - 1)),
            g = [],
            h = [],
            i = [],
            k = 0;
        j(b), b.each(function(c, d) {
            var j = c === b.length - 1 ? f : e,
                l = a(d).outerHeight(!0);
            j > l ? (g.push(d), h.push(l), i.push(a(d).height())) : k += l
        }), d && (c -= k, e = Math.floor(c / g.length), f = Math.floor(c - e * (g.length - 1))), a(g).each(function(b, c) {
            var d = b === g.length - 1 ? f : e,
                j = h[b],
                k = i[b],
                l = d - (j - k);
            d > j && a(c).height(l)
        })
    }

    function j(a) {
        a.height("")
    }

    function k(b) {
        var c = 0;
        return b.find("> span").each(function(b, d) {
            var e = a(d).outerWidth();
            e > c && (c = e)
        }), c++, b.width(c), c
    }

    function l(a, b) {
        return a.height(b).addClass("fc-scroller"), a[0].scrollHeight - 1 > a[0].clientHeight ? !0 : (m(a), !1)
    }

    function m(a) {
        a.height("").removeClass("fc-scroller")
    }

    function n(b) {
        var c = b.css("position"),
            d = b.parents().filter(function() {
                var b = a(this);
                return /(auto|scroll)/.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
            }).eq(0);
        return "fixed" !== c && d.length ? d : a(b[0].ownerDocument || document)
    }

    function o(a) {
        var b = a.offset();
        return {
            left: b.left,
            right: b.left + a.outerWidth(),
            top: b.top,
            bottom: b.top + a.outerHeight()
        }
    }

    function p(a) {
        var b = a.offset(),
            c = r(a),
            d = b.left + u(a, "border-left-width") + c.left,
            e = b.top + u(a, "border-top-width") + c.top;
        return {
            left: d,
            right: d + a[0].clientWidth,
            top: e,
            bottom: e + a[0].clientHeight
        }
    }

    function q(a) {
        var b = a.offset(),
            c = b.left + u(a, "border-left-width") + u(a, "padding-left"),
            d = b.top + u(a, "border-top-width") + u(a, "padding-top");
        return {
            left: c,
            right: c + a.width(),
            top: d,
            bottom: d + a.height()
        }
    }

    function r(a) {
        var b = a.innerWidth() - a[0].clientWidth,
            c = {
                left: 0,
                right: 0,
                top: 0,
                bottom: a.innerHeight() - a[0].clientHeight
            };
        return s() && "rtl" == a.css("direction") ? c.left = b : c.right = b, c
    }

    function s() {
        return null === Sa && (Sa = t()), Sa
    }

    function t() {
        var b = a("<div><div/></div>").css({
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }).appendTo("body"),
            c = b.children(),
            d = c.offset().left > b.offset().left;
        return b.remove(), d
    }

    function u(a, b) {
        return parseFloat(a.css(b)) || 0
    }

    function v(a) {
        return 1 == a.which && !a.ctrlKey
    }

    function w(a, b) {
        var c = {
            left: Math.max(a.left, b.left),
            right: Math.min(a.right, b.right),
            top: Math.max(a.top, b.top),
            bottom: Math.min(a.bottom, b.bottom)
        };
        return c.left < c.right && c.top < c.bottom ? c : !1
    }

    function x(a, b) {
        return {
            left: Math.min(Math.max(a.left, b.left), b.right),
            top: Math.min(Math.max(a.top, b.top), b.bottom)
        }
    }

    function y(a) {
        return {
            left: (a.left + a.right) / 2,
            top: (a.top + a.bottom) / 2
        }
    }

    function z(a, b) {
        return {
            left: a.left - b.left,
            top: a.top - b.top
        }
    }

    function A(b) {
        var c, d, e = [],
            f = [];
        for ("string" == typeof b ? f = b.split(/\s*,\s*/) : "function" == typeof b ? f = [b] : a.isArray(b) && (f = b), c = 0; c < f.length; c++) d = f[c], "string" == typeof d ? e.push("-" == d.charAt(0) ? {
            field: d.substring(1),
            order: -1
        } : {
            field: d,
            order: 1
        }) : "function" == typeof d && e.push({
            func: d
        });
        return e
    }

    function B(a, b, c) {
        var d, e;
        for (d = 0; d < c.length; d++)
            if (e = C(a, b, c[d])) return e;
        return 0
    }

    function C(a, b, c) {
        return c.func ? c.func(a, b) : D(a[c.field], b[c.field]) * (c.order || 1)
    }

    function D(b, c) {
        return b || c ? null == c ? -1 : null == b ? 1 : "string" === a.type(b) || "string" === a.type(c) ? String(b).localeCompare(String(c)) : b - c : 0
    }

    function E(a, b) {
        var c, d, e, f, g = a.start,
            h = a.end,
            i = b.start,
            j = b.end;
        return h > i && j > g ? (g >= i ? (c = g.clone(), e = !0) : (c = i.clone(), e = !1), j >= h ? (d = h.clone(), f = !0) : (d = j.clone(), f = !1), {
            start: c,
            end: d,
            isStart: e,
            isEnd: f
        }) : void 0
    }

    function F(a, c) {
        return b.duration({
            days: a.clone().stripTime().diff(c.clone().stripTime(), "days"),
            ms: a.time() - c.time()
        })
    }

    function G(a, c) {
        return b.duration({
            days: a.clone().stripTime().diff(c.clone().stripTime(), "days")
        })
    }

    function H(a, c, d) {
        return b.duration(Math.round(a.diff(c, d, !0)), d)
    }

    function I(a, b) {
        var c, d, e;
        for (c = 0; c < Ua.length && (d = Ua[c], e = J(d, a, b), !(e >= 1 && ba(e))); c++);
        return d
    }

    function J(a, c, d) {
        return null != d ? d.diff(c, a, !0) : b.isDuration(c) ? c.as(a) : c.end.diff(c.start, a, !0)
    }

    function K(a, b, c) {
        var d;
        return N(c) ? (b - a) / c : (d = c.asMonths(), Math.abs(d) >= 1 && ba(d) ? b.diff(a, "months", !0) / d : b.diff(a, "days", !0) / c.asDays())
    }

    function L(a, b) {
        var c, d;
        return N(a) || N(b) ? a / b : (c = a.asMonths(), d = b.asMonths(), Math.abs(c) >= 1 && ba(c) && Math.abs(d) >= 1 && ba(d) ? c / d : a.asDays() / b.asDays())
    }

    function M(a, c) {
        var d;
        return N(a) ? b.duration(a * c) : (d = a.asMonths(), Math.abs(d) >= 1 && ba(d) ? b.duration({
            months: d * c
        }) : b.duration({
            days: a.asDays() * c
        }))
    }

    function N(a) {
        return Boolean(a.hours() || a.minutes() || a.seconds() || a.milliseconds())
    }

    function O(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }

    function P(a) {
        return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(a)
    }

    function Q(a, b) {
        var c, d, e, f, g, h, i = {};
        if (b)
            for (c = 0; c < b.length; c++) {
                for (d = b[c], e = [], f = a.length - 1; f >= 0; f--)
                    if (g = a[f][d], "object" == typeof g) e.unshift(g);
                    else if (void 0 !== g) {
                    i[d] = g;
                    break
                }
                e.length && (i[d] = Q(e))
            }
        for (c = a.length - 1; c >= 0; c--) {
            h = a[c];
            for (d in h) d in i || (i[d] = h[d])
        }
        return i
    }

    function R(a) {
        var b = function() {};
        return b.prototype = a, new b
    }

    function S(a, b) {
        for (var c in a) U(a, c) && (b[c] = a[c])
    }

    function T(a, b) {
        var c, d, e = ["constructor", "toString", "valueOf"];
        for (c = 0; c < e.length; c++) d = e[c], a[d] !== Object.prototype[d] && (b[d] = a[d])
    }

    function U(a, b) {
        return Ya.call(a, b)
    }

    function V(b) {
        return /undefined|null|boolean|number|string/.test(a.type(b))
    }

    function W(b, c, d) {
        if (a.isFunction(b) && (b = [b]), b) {
            var e, f;
            for (e = 0; e < b.length; e++) f = b[e].apply(c, d) || f;
            return f
        }
    }

    function X() {
        for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a]
    }

    function Y(a) {
        return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function Z(a) {
        return a.replace(/&.*?;/g, "")
    }

    function $(b) {
        var c = [];
        return a.each(b, function(a, b) {
            null != b && c.push(a + ":" + b)
        }), c.join(";")
    }

    function _(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function aa(a, b) {
        return a - b
    }

    function ba(a) {
        return a % 1 === 0
    }

    function ca(a, b) {
        var c = a[b];
        return function() {
            return c.apply(a, arguments)
        }
    }

    function da(a, b) {
        var c, d, e, f, g = function() {
            var h = +new Date - f;
            b > h && h > 0 ? c = setTimeout(g, b - h) : (c = null, a.apply(e, d), c || (e = d = null))
        };
        return function() {
            e = this, d = arguments, f = +new Date, c || (c = setTimeout(g, b))
        }
    }

    function ea(c, d, e) {
        var f, g, h, i, j = c[0],
            k = 1 == c.length && "string" == typeof j;
        return b.isMoment(j) ? (i = b.apply(null, c), ga(j, i)) : O(j) || void 0 === j ? i = b.apply(null, c) : (f = !1, g = !1, k ? Za.test(j) ? (j += "-01", c = [j], f = !0, g = !0) : (h = $a.exec(j)) && (f = !h[5], g = !0) : a.isArray(j) && (g = !0), i = d || f ? b.utc.apply(b, c) : b.apply(null, c), f ? (i._ambigTime = !0, i._ambigZone = !0) : e && (g ? i._ambigZone = !0 : k && (i.utcOffset ? i.utcOffset(j) : i.zone(j)))), i._fullCalendar = !0, i
    }

    function fa(a, c) {
        var d, e, f = !1,
            g = !1,
            h = a.length,
            i = [];
        for (d = 0; h > d; d++) e = a[d], b.isMoment(e) || (e = Pa.moment.parseZone(e)), f = f || e._ambigTime, g = g || e._ambigZone, i.push(e);
        for (d = 0; h > d; d++) e = i[d], c || !f || e._ambigTime ? g && !e._ambigZone && (i[d] = e.clone().stripZone()) : i[d] = e.clone().stripTime();
        return i
    }

    function ga(a, b) {
        a._ambigTime ? b._ambigTime = !0 : b._ambigTime && (b._ambigTime = !1), a._ambigZone ? b._ambigZone = !0 : b._ambigZone && (b._ambigZone = !1)
    }

    function ha(a, b) {
        a.year(b[0] || 0).month(b[1] || 0).date(b[2] || 0).hours(b[3] || 0).minutes(b[4] || 0).seconds(b[5] || 0).milliseconds(b[6] || 0)
    }

    function ia(a, b) {
        return ab.format.call(a, b)
    }

    function ja(a, b) {
        return ka(a, pa(b))
    }

    function ka(a, b) {
        var c, d = "";
        for (c = 0; c < b.length; c++) d += la(a, b[c]);
        return d
    }

    function la(a, b) {
        var c, d;
        return "string" == typeof b ? b : (c = b.token) ? bb[c] ? bb[c](a) : ia(a, c) : b.maybe && (d = ka(a, b.maybe), d.match(/[1-9]/)) ? d : ""
    }

    function ma(a, b, c, d, e) {
        var f;
        return a = Pa.moment.parseZone(a), b = Pa.moment.parseZone(b), f = (a.localeData || a.lang).call(a), c = f.longDateFormat(c) || c, d = d || " - ", na(a, b, pa(c), d, e)
    }

    function na(a, b, c, d, e) {
        var f, g, h, i, j = a.clone().stripZone(),
            k = b.clone().stripZone(),
            l = "",
            m = "",
            n = "",
            o = "",
            p = "";
        for (g = 0; g < c.length && (f = oa(a, b, j, k, c[g]), f !== !1); g++) l += f;
        for (h = c.length - 1; h > g && (f = oa(a, b, j, k, c[h]), f !== !1); h--) m = f + m;
        for (i = g; h >= i; i++) n += la(a, c[i]), o += la(b, c[i]);
        return (n || o) && (p = e ? o + d + n : n + d + o), l + p + m
    }

    function oa(a, b, c, d, e) {
        var f, g;
        return "string" == typeof e ? e : (f = e.token) && (g = cb[f.charAt(0)], g && c.isSame(d, g)) ? ia(a, f) : !1
    }

    function pa(a) {
        return a in db ? db[a] : db[a] = qa(a)
    }

    function qa(a) {
        for (var b, c = [], d = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; b = d.exec(a);) b[1] ? c.push(b[1]) : b[2] ? c.push({
            maybe: qa(b[2])
        }) : b[3] ? c.push({
            token: b[3]
        }) : b[5] && c.push(b[5]);
        return c
    }

    function ra() {}

    function sa(a, b) {
        var c;
        return U(b, "constructor") && (c = b.constructor), "function" != typeof c && (c = b.constructor = function() {
            a.apply(this, arguments)
        }), c.prototype = R(a.prototype), S(b, c.prototype), T(b, c.prototype), S(a, c), c
    }

    function ta(a, b) {
        S(b.prototype || b, a.prototype)
    }

    function ua(a, b) {
        return a || b ? a && b ? a.component === b.component && va(a, b) && va(b, a) : !1 : !0
    }

    function va(a, b) {
        for (var c in a)
            if (!/^(component|left|right|top|bottom)$/.test(c) && a[c] !== b[c]) return !1;
        return !0
    }

    function wa(a) {
        var b = ya(a);
        return "background" === b || "inverse-background" === b
    }

    function xa(a) {
        return "inverse-background" === ya(a)
    }

    function ya(a) {
        return X((a.source || {}).rendering, a.rendering)
    }

    function za(a) {
        var b, c, d = {};
        for (b = 0; b < a.length; b++) c = a[b], (d[c._id] || (d[c._id] = [])).push(c);
        return d
    }

    function Aa(a, b) {
        return a.start - b.start
    }

    function Ba(c) {
        var d, e, f, g, h = Pa.dataAttrPrefix;
        return h && (h += "-"), d = c.data(h + "event") || null, d && (d = "object" == typeof d ? a.extend({}, d) : {}, e = d.start, null == e && (e = d.time), f = d.duration, g = d.stick, delete d.start, delete d.time, delete d.duration, delete d.stick), null == e && (e = c.data(h + "start")), null == e && (e = c.data(h + "time")), null == f && (f = c.data(h + "duration")), null == g && (g = c.data(h + "stick")), e = null != e ? b.duration(e) : null, f = null != f ? b.duration(f) : null, g = Boolean(g), {
            eventProps: d,
            startTime: e,
            duration: f,
            stick: g
        }
    }

    function Ca(a, b) {
        var c, d;
        for (c = 0; c < b.length; c++)
            if (d = b[c], d.leftCol <= a.rightCol && d.rightCol >= a.leftCol) return !0;
        return !1
    }

    function Da(a, b) {
        return a.leftCol - b.leftCol
    }

    function Ea(a) {
        var b, c, d, e = [];
        for (b = 0; b < a.length; b++) {
            for (c = a[b], d = 0; d < e.length && Ha(c, e[d]).length; d++);
            c.level = d, (e[d] || (e[d] = [])).push(c)
        }
        return e
    }

    function Fa(a) {
        var b, c, d, e, f;
        for (b = 0; b < a.length; b++)
            for (c = a[b], d = 0; d < c.length; d++)
                for (e = c[d], e.forwardSegs = [], f = b + 1; f < a.length; f++) Ha(e, a[f], e.forwardSegs)
    }

    function Ga(a) {
        var b, c, d = a.forwardSegs,
            e = 0;
        if (void 0 === a.forwardPressure) {
            for (b = 0; b < d.length; b++) c = d[b], Ga(c), e = Math.max(e, 1 + c.forwardPressure);
            a.forwardPressure = e
        }
    }

    function Ha(a, b, c) {
        c = c || [];
        for (var d = 0; d < b.length; d++) Ia(a, b[d]) && c.push(b[d]);
        return c
    }

    function Ia(a, b) {
        return a.bottom > b.top && a.top < b.bottom
    }

    function Ja(c, d) {
        function e() {
            U ? h() && (k(), i()) : f()
        }

        function f() {
            V = O.theme ? "ui" : "fc", c.addClass("fc"), O.isRTL ? c.addClass("fc-rtl") : c.addClass("fc-ltr"), O.theme ? c.addClass("ui-widget") : c.addClass("fc-unthemed"), U = a("<div class='fc-view-container'/>").prependTo(c), S = N.header = new Ma(N, O), T = S.render(), T && c.prepend(T), i(O.defaultView), O.handleWindowResize && (Y = da(m, O.windowResizeDelay), a(window).resize(Y))
        }

        function g() {
            W && W.removeElement(), S.removeElement(), U.remove(), c.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"), Y && a(window).unbind("resize", Y)
        }

        function h() {
            return c.is(":visible")
        }

        function i(b) {
            ca++, W && b && W.type !== b && (S.deactivateButton(W.type), H(), W.removeElement(), W = N.view = null), !W && b && (W = N.view = ba[b] || (ba[b] = N.instantiateView(b)), W.setElement(a("<div class='fc-view fc-" + b + "-view' />").appendTo(U)), S.activateButton(b)), W && (Z = W.massageCurrentDate(Z), W.displaying && Z.isWithin(W.intervalStart, W.intervalEnd) || h() && (W.display(Z), I(), u(), v(), q())), I(), ca--
        }

        function j(a) {
            return h() ? (a && l(), ca++, W.updateSize(!0), ca--, !0) : void 0
        }

        function k() {
            h() && l()
        }

        function l() {
            X = "number" == typeof O.contentHeight ? O.contentHeight : "number" == typeof O.height ? O.height - (T ? T.outerHeight(!0) : 0) : Math.round(U.width() / Math.max(O.aspectRatio, .5))
        }

        function m(a) {
            !ca && a.target === window && W.start && j(!0) && W.trigger("windowResize", aa)
        }

        function n() {
            p(), r()
        }

        function o() {
            h() && (H(), W.displayEvents(ea), I())
        }

        function p() {
            H(), W.clearEvents(), I()
        }

        function q() {
            !O.lazyFetching || $(W.start, W.end) ? r() : o()
        }

        function r() {
            _(W.start, W.end)
        }

        function s(a) {
            ea = a, o()
        }

        function t() {
            o()
        }

        function u() {
            S.updateTitle(W.title)
        }

        function v() {
            var a = N.getNow();
            a.isWithin(W.intervalStart, W.intervalEnd) ? S.disableButton("today") : S.enableButton("today")
        }

        function w(a, b) {
            W.select(N.buildSelectSpan.apply(N, arguments))
        }

        function x() {
            W && W.unselect()
        }

        function y() {
            Z = W.computePrevDate(Z), i()
        }

        function z() {
            Z = W.computeNextDate(Z), i()
        }

        function A() {
            Z.add(-1, "years"), i()
        }

        function B() {
            Z.add(1, "years"), i()
        }

        function C() {
            Z = N.getNow(), i()
        }

        function D(a) {
            Z = N.moment(a).stripZone(), i()
        }

        function E(a) {
            Z.add(b.duration(a)), i()
        }

        function F(a, b) {
            var c;
            b = b || "day", c = N.getViewSpec(b) || N.getUnitViewSpec(b), Z = a.clone(), i(c ? c.type : null)
        }

        function G() {
            return N.applyTimezone(Z)
        }

        function H() {
            U.css({
                width: "100%",
                height: U.height(),
                overflow: "hidden"
            })
        }

        function I() {
            U.css({
                width: "",
                height: "",
                overflow: ""
            })
        }

        function J() {
            return N
        }

        function K() {
            return W
        }

        function L(a, b) {
            return void 0 === b ? O[a] : void(("height" == a || "contentHeight" == a || "aspectRatio" == a) && (O[a] = b, j(!0)))
        }

        function M(a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return b = b || aa, this.triggerWith(a, b, c), O[a] ? O[a].apply(b, c) : void 0
        }
        var N = this;
        N.initOptions(d || {});
        var O = this.options;
        N.render = e, N.destroy = g, N.refetchEvents = n, N.reportEvents = s, N.reportEventChange = t, N.rerenderEvents = o, N.changeView = i, N.select = w, N.unselect = x, N.prev = y, N.next = z, N.prevYear = A, N.nextYear = B, N.today = C, N.gotoDate = D, N.incrementDate = E, N.zoomTo = F, N.getDate = G, N.getCalendar = J, N.getView = K, N.option = L, N.trigger = M;
        var P = R(La(O.lang));
        if (O.monthNames && (P._months = O.monthNames), O.monthNamesShort && (P._monthsShort = O.monthNamesShort), O.dayNames && (P._weekdays = O.dayNames), O.dayNamesShort && (P._weekdaysShort = O.dayNamesShort), null != O.firstDay) {
            var Q = R(P._week);
            Q.dow = O.firstDay, P._week = Q
        }
        P._fullCalendar_weekCalc = function(a) {
            return "function" == typeof a ? a : "local" === a ? a : "iso" === a || "ISO" === a ? "ISO" : void 0
        }(O.weekNumberCalculation), N.defaultAllDayEventDuration = b.duration(O.defaultAllDayEventDuration), N.defaultTimedEventDuration = b.duration(O.defaultTimedEventDuration), N.moment = function() {
            var a;
            return "local" === O.timezone ? (a = Pa.moment.apply(null, arguments), a.hasTime() && a.local()) : a = "UTC" === O.timezone ? Pa.moment.utc.apply(null, arguments) : Pa.moment.parseZone.apply(null, arguments), "_locale" in a ? a._locale = P : a._lang = P, a
        }, N.getIsAmbigTimezone = function() {
            return "local" !== O.timezone && "UTC" !== O.timezone
        }, N.applyTimezone = function(a) {
            if (!a.hasTime()) return a.clone();
            var b, c = N.moment(a.toArray()),
                d = a.time() - c.time();
            return d && (b = c.clone().add(d), a.time() - b.time() === 0 && (c = b)), c
        }, N.getNow = function() {
            var a = O.now;
            return "function" == typeof a && (a = a()), N.moment(a).stripZone()
        }, N.getEventEnd = function(a) {
            return a.end ? a.end.clone() : N.getDefaultEventEnd(a.allDay, a.start)
        }, N.getDefaultEventEnd = function(a, b) {
            var c = b.clone();
            return a ? c.stripTime().add(N.defaultAllDayEventDuration) : c.add(N.defaultTimedEventDuration), N.getIsAmbigTimezone() && c.stripZone(), c
        }, N.humanizeDuration = function(a) {
            return (a.locale || a.lang).call(a, O.lang).humanize()
        }, Na.call(N, O);
        var S, T, U, V, W, X, Y, Z, $ = N.isFetchNeeded,
            _ = N.fetchEvents,
            aa = c[0],
            ba = {},
            ca = 0,
            ea = [];
        Z = null != O.defaultDate ? N.moment(O.defaultDate).stripZone() : N.getNow(), N.getSuggestedViewHeight = function() {
            return void 0 === X && k(), X
        }, N.isHeightAuto = function() {
            return "auto" === O.contentHeight || "auto" === O.height
        }, N.freezeContentHeight = H, N.unfreezeContentHeight = I, N.initialize()
    }

    function Ka(b) {
        a.each(tb, function(a, c) {
            null == b[a] && (b[a] = c(b))
        })
    }

    function La(a) {
        var c = b.localeData || b.langData;
        return c.call(b, a) || c.call(b, "en")
    }

    function Ma(b, c) {
        function d() {
            var b = c.header;
            return n = c.theme ? "ui" : "fc", b ? o = a("<div class='fc-toolbar'/>").append(f("left")).append(f("right")).append(f("center")).append('<div class="fc-clear"/>') : void 0
        }

        function e() {
            o.remove(), o = a()
        }

        function f(d) {
            var e = a('<div class="fc-' + d + '"/>'),
                f = c.header[d];
            return f && a.each(f.split(" "), function(d) {
                var f, g = a(),
                    h = !0;
                a.each(this.split(","), function(d, e) {
                    var f, i, j, k, l, m, o, q, r, s;
                    "title" == e ? (g = g.add(a("<h2>&nbsp;</h2>")), h = !1) : ((f = (b.options.customButtons || {})[e]) ? (j = function(a) {
                        f.click && f.click.call(s[0], a)
                    }, k = "", l = f.text) : (i = b.getViewSpec(e)) ? (j = function() {
                        b.changeView(e)
                    }, p.push(e), k = i.buttonTextOverride, l = i.buttonTextDefault) : b[e] && (j = function() {
                        b[e]()
                    }, k = (b.overrides.buttonText || {})[e], l = c.buttonText[e]), j && (m = f ? f.themeIcon : c.themeButtonIcons[e], o = f ? f.icon : c.buttonIcons[e], q = k ? Y(k) : m && c.theme ? "<span class='ui-icon ui-icon-" + m + "'></span>" : o && !c.theme ? "<span class='fc-icon fc-icon-" + o + "'></span>" : Y(l), r = ["fc-" + e + "-button", n + "-button", n + "-state-default"], s = a('<button type="button" class="' + r.join(" ") + '">' + q + "</button>").click(function(a) {
                        s.hasClass(n + "-state-disabled") || (j(a), (s.hasClass(n + "-state-active") || s.hasClass(n + "-state-disabled")) && s.removeClass(n + "-state-hover"))
                    }).mousedown(function() {
                        s.not("." + n + "-state-active").not("." + n + "-state-disabled").addClass(n + "-state-down")
                    }).mouseup(function() {
                        s.removeClass(n + "-state-down")
                    }).hover(function() {
                        s.not("." + n + "-state-active").not("." + n + "-state-disabled").addClass(n + "-state-hover")
                    }, function() {
                        s.removeClass(n + "-state-hover").removeClass(n + "-state-down")
                    }), g = g.add(s)))
                }), h && g.first().addClass(n + "-corner-left").end().last().addClass(n + "-corner-right").end(), g.length > 1 ? (f = a("<div/>"), h && f.addClass("fc-button-group"), f.append(g), e.append(f)) : e.append(g)
            }), e
        }

        function g(a) {
            o.find("h2").text(a)
        }

        function h(a) {
            o.find(".fc-" + a + "-button").addClass(n + "-state-active")
        }

        function i(a) {
            o.find(".fc-" + a + "-button").removeClass(n + "-state-active")
        }

        function j(a) {
            o.find(".fc-" + a + "-button").attr("disabled", "disabled").addClass(n + "-state-disabled")
        }

        function k(a) {
            o.find(".fc-" + a + "-button").removeAttr("disabled").removeClass(n + "-state-disabled")
        }

        function l() {
            return p
        }
        var m = this;
        m.render = d, m.removeElement = e, m.updateTitle = g, m.activateButton = h, m.deactivateButton = i, m.disableButton = j, m.enableButton = k, m.getViewsWithButtons = l;
        var n, o = a(),
            p = []
    }

    function Na(c) {
        function d(a, b) {
            return !L || L > a || b > M
        }

        function e(a, b) {
            L = a, M = b, T = [];
            var c = ++R,
                d = Q.length;
            S = d;
            for (var e = 0; d > e; e++) f(Q[e], c)
        }

        function f(b, c) {
            g(b, function(d) {
                var e, f, g, h = a.isArray(b.events);
                if (c == R) {
                    if (d)
                        for (e = 0; e < d.length; e++) f = d[e], g = h ? f : s(f, b), g && T.push.apply(T, w(g));
                    S--, S || N(T)
                }
            })
        }

        function g(b, d) {
            var e, f, h = Pa.sourceFetchers;
            for (e = 0; e < h.length; e++) {
                if (f = h[e].call(K, b, L.clone(), M.clone(), c.timezone, d), f === !0) return;
                if ("object" == typeof f) return void g(f, d)
            }
            var i = b.events;
            if (i) a.isFunction(i) ? (K.pushLoading(), i.call(K, L.clone(), M.clone(), c.timezone, function(a) {
                d(a), K.popLoading()
            })) : a.isArray(i) ? d(i) : d();
            else {
                var j = b.url;
                if (j) {
                    var k, l = b.success,
                        m = b.error,
                        n = b.complete;
                    k = a.isFunction(b.data) ? b.data() : b.data;
                    var o = a.extend({}, k || {}),
                        p = X(b.startParam, c.startParam),
                        q = X(b.endParam, c.endParam),
                        r = X(b.timezoneParam, c.timezoneParam);
                        ( L && p && (o[p] = L.format()) ), ( M && q && (o[q] = M.format())), c.timezone && "local" != c.timezone && (o[r] = c.timezone), K.pushLoading(), a.ajax(a.extend({}, ub, b, {
                        data: o,
                        success: function(b) {
                            b = b || [];
                            var c = W(l, this, arguments);
                            a.isArray(c) && (b = c), d(b)
                        },
                        error: function() {
                            W(m, this, arguments), d()
                        },
                        complete: function() {
                            W(n, this, arguments), K.popLoading()
                        }
                    }))
                } else d()
            }
        }

        function h(a) {
            var b = i(a);
            b && (Q.push(b), S++, f(b, R))
        }

        function i(b) {
            var c, d, e = Pa.sourceNormalizers;
            if (a.isFunction(b) || a.isArray(b) ? c = {
                    events: b
                } : "string" == typeof b ? c = {
                    url: b
                } : "object" == typeof b && (c = a.extend({}, b)), c) {
                for (c.className ? "string" == typeof c.className && (c.className = c.className.split(/\s+/)) : c.className = [], a.isArray(c.events) && (c.origArray = c.events, c.events = a.map(c.events, function(a) {
                        return s(a, c)
                    })), d = 0; d < e.length; d++) e[d].call(K, c);
                return c
            }
        }

        function j(b) {
            Q = a.grep(Q, function(a) {
                return !k(a, b)
            }), T = a.grep(T, function(a) {
                return !k(a.source, b)
            }), N(T)
        }

        function k(a, b) {
            return a && b && l(a) == l(b)
        }

        function l(a) {
            return ("object" == typeof a ? a.origArray || a.googleCalendarId || a.url || a.events : null) || a
        }

        function m(a) {
            a.start = K.moment(a.start), a.end ? a.end = K.moment(a.end) : a.end = null, x(a, n(a)), N(T)
        }

        function n(b) {
            var c = {};
            return a.each(b, function(a, b) {
                o(a) && void 0 !== b && V(b) && (c[a] = b)
            }), c
        }

        function o(a) {
            return !/^_|^(id|allDay|start|end)$/.test(a)
        }

        function p(a, b) {
            var c, d, e, f = s(a);
            if (f) {
                for (c = w(f), d = 0; d < c.length; d++) e = c[d], e.source || (b && (O.events.push(e), e.source = O), T.push(e));
                return N(T), c
            }
            return []
        }

        function q(b) {
            var c, d;
            for (null == b ? b = function() {
                    return !0
                } : a.isFunction(b) || (c = b + "", b = function(a) {
                    return a._id == c
                }), T = a.grep(T, b, !0), d = 0; d < Q.length; d++) a.isArray(Q[d].events) && (Q[d].events = a.grep(Q[d].events, b, !0));
            N(T)
        }

        function r(b) {
            return a.isFunction(b) ? a.grep(T, b) : null != b ? (b += "", a.grep(T, function(a) {
                return a._id == b
            })) : T
        }

        function s(d, e) {
            var f, g, h, i = {};
            if (c.eventDataTransform && (d = c.eventDataTransform(d)), e && e.eventDataTransform && (d = e.eventDataTransform(d)), a.extend(i, d), e && (i.source = e), i._id = d._id || (void 0 === d.id ? "_fc" + vb++ : d.id + ""), d.className ? "string" == typeof d.className ? i.className = d.className.split(/\s+/) : i.className = d.className : i.className = [], f = d.start || d.date, g = d.end, P(f) && (f = b.duration(f)), P(g) && (g = b.duration(g)), d.dow || b.isDuration(f) || b.isDuration(g)) i.start = f ? b.duration(f) : null, i.end = g ? b.duration(g) : null, i._recurring = !0;
            else {
                if (f && (f = K.moment(f), !f.isValid())) return !1;
                g && (g = K.moment(g), g.isValid() || (g = null)), h = d.allDay, void 0 === h && (h = X(e ? e.allDayDefault : void 0, c.allDayDefault)), t(f, g, h, i)
            }
            return i
        }

        function t(a, b, c, d) {
            d.start = a, d.end = b, d.allDay = c, u(d), Oa(d)
        }

        function u(a) {
            v(a), a.end && !a.end.isAfter(a.start) && (a.end = null), a.end || (c.forceEventDuration ? a.end = K.getDefaultEventEnd(a.allDay, a.start) : a.end = null)
        }

        function v(a) {
            null == a.allDay && (a.allDay = !(a.start.hasTime() || a.end && a.end.hasTime())), a.allDay ? (a.start.stripTime(), a.end && a.end.stripTime()) : (a.start.hasTime() || (a.start = K.applyTimezone(a.start.time(0))), a.end && !a.end.hasTime() && (a.end = K.applyTimezone(a.end.time(0))))
        }

        function w(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n = [];
            if (c = c || L, d = d || M, b)
                if (b._recurring) {
                    if (f = b.dow)
                        for (e = {}, g = 0; g < f.length; g++) e[f[g]] = !0;
                    for (h = c.clone().stripTime(); h.isBefore(d);)(!e || e[h.day()]) && (i = b.start, j = b.end, k = h.clone(), l = null, i && (k = k.time(i)), j && (l = h.clone().time(j)), m = a.extend({}, b), t(k, l, !i && !j, m), n.push(m)), h.add(1, "days")
                } else n.push(b);
            return n
        }

        function x(b, c, d) {
            function e(a, b) {
                return d ? H(a, b, d) : c.allDay ? G(a, b) : F(a, b)
            }
            var f, g, h, i, j, k, l = {};
            return c = c || {}, c.start || (c.start = b.start.clone()), void 0 === c.end && (c.end = b.end ? b.end.clone() : null), null == c.allDay && (c.allDay = b.allDay), u(c), f = {
                start: b._start.clone(),
                end: b._end ? b._end.clone() : K.getDefaultEventEnd(b._allDay, b._start),
                allDay: c.allDay
            }, u(f), g = null !== b._end && null === c.end, h = e(c.start, f.start), c.end ? (i = e(c.end, f.end), j = i.subtract(h)) : j = null, a.each(c, function(a, b) {
                o(a) && void 0 !== b && (l[a] = b)
            }), k = y(r(b._id), g, c.allDay, h, j, l), {
                dateDelta: h,
                durationDelta: j,
                undo: k
            }
        }

        function y(b, c, d, e, f, g) {
            var h = K.getIsAmbigTimezone(),
                i = [];
            return e && !e.valueOf() && (e = null), f && !f.valueOf() && (f = null), a.each(b, function(b, j) {
                    var k, l;
                    k = {
                        start: j.start.clone(),
                        end: j.end ? j.end.clone() : null,
                        allDay: j.allDay
                    }, a.each(g, function(a) {
                        k[a] = j[a]
                    }), l = {
                        start: j._start,
                        end: j._end,
                        allDay: d
                    }, u(l), c ? l.end = null : f && !l.end && (l.end = K.getDefaultEventEnd(l.allDay, l.start)), e && (l.start.add(e), l.end && l.end.add(e)), f && l.end.add(f), h && !l.allDay && (e || f) && (l.start.stripZone(), l.end && l.end.stripZone()), a.extend(j, g, l), Oa(j), i.push(function() {
                        a.extend(j, k), Oa(j)
                    })
                }),
                function() {
                    for (var a = 0; a < i.length; a++) i[a]()
                }
        }

        function z(b) {
            var d, e = c.businessHours,
                f = {
                    className: "fc-nonbusiness",
                    start: "09:00",
                    end: "17:00",
                    dow: [1, 2, 3, 4, 5],
                    rendering: "inverse-background"
                },
                g = K.getView();
            return e && (d = a.extend({}, f, "object" == typeof e ? e : {})), d ? (b && (d.start = null, d.end = null), w(s(d), g.start, g.end)) : []
        }

        function A(a, b) {
            var d = b.source || {},
                e = X(b.constraint, d.constraint, c.eventConstraint),
                f = X(b.overlap, d.overlap, c.eventOverlap);
            return D(a, e, f, b)
        }

        function B(b, c, d) {
            var e, f;
            return d && (e = a.extend({}, d, c), f = w(s(e))[0]), f ? A(b, f) : C(b)
        }

        function C(a) {
            return D(a, c.selectConstraint, c.selectOverlap)
        }

        function D(a, b, c, d) {
            var e, f, g, h, i, j;
            if (null != b) {
                for (e = E(b), f = !1, h = 0; h < e.length; h++)
                    if (I(e[h], a)) {
                        f = !0;
                        break
                    }
                if (!f) return !1
            }
            for (g = K.getPeerEvents(a, d), h = 0; h < g.length; h++)
                if (i = g[h], J(i, a)) {
                    if (c === !1) return !1;
                    if ("function" == typeof c && !c(i, d)) return !1;
                    if (d) {
                        if (j = X(i.overlap, (i.source || {}).overlap), j === !1) return !1;
                        if ("function" == typeof j && !j(d, i)) return !1
                    }
                }
            return !0
        }

        function E(a) {
            return "businessHours" === a ? z() : "object" == typeof a ? w(s(a)) : r(a)
        }

        function I(a, b) {
            var c = a.start.clone().stripZone(),
                d = K.getEventEnd(a).stripZone();
            return b.start >= c && b.end <= d
        }

        function J(a, b) {
            var c = a.start.clone().stripZone(),
                d = K.getEventEnd(a).stripZone();
            return b.start < d && b.end > c
        }
        var K = this;
        K.isFetchNeeded = d, K.fetchEvents = e, K.addEventSource = h, K.removeEventSource = j, K.updateEvent = m, K.renderEvent = p, K.removeEvents = q, K.clientEvents = r, K.mutateEvent = x, K.normalizeEventDates = u, K.normalizeEventTimes = v;
        var L, M, N = K.reportEvents,
            O = {
                events: []
            },
            Q = [O],
            R = 0,
            S = 0,
            T = [];
        a.each((c.events ? [c.events] : []).concat(c.eventSources || []), function(a, b) {
            var c = i(b);
            c && Q.push(c)
        }), K.getBusinessHoursEvents = z, K.isEventSpanAllowed = A, K.isExternalSpanAllowed = B, K.isSelectionSpanAllowed = C, K.getEventCache = function() {
            return T
        }
    }

    function Oa(a) {
        a._allDay = a.allDay, a._start = a.start.clone(), a._end = a.end ? a.end.clone() : null
    }
    var Pa = a.fullCalendar = {
            version: "2.6.1",
            internalApiVersion: 3
        },
        Qa = Pa.views = {};
    a.fn.fullCalendar = function(b) {
        var c = Array.prototype.slice.call(arguments, 1),
            d = this;
        return this.each(function(e, f) {
            var g, h = a(f),
                i = h.data("fullCalendar");
            "string" == typeof b ? i && a.isFunction(i[b]) && (g = i[b].apply(i, c), e || (d = g), "destroy" === b && h.removeData("fullCalendar")) : i || (i = new pb(h, b), h.data("fullCalendar", i), i.render())
        }), d
    };
    var Ra = ["header", "buttonText", "buttonIcons", "themeButtonIcons"];
    Pa.intersectRanges = E, Pa.applyAll = W, Pa.debounce = da, Pa.isInt = ba, Pa.htmlEscape = Y, Pa.cssToStr = $, Pa.proxy = ca, Pa.capitaliseFirstLetter = _, Pa.getOuterRect = o, Pa.getClientRect = p, Pa.getContentRect = q, Pa.getScrollbarWidths = r;
    var Sa = null;
    Pa.intersectRects = w, Pa.parseFieldSpecs = A, Pa.compareByFieldSpecs = B, Pa.compareByFieldSpec = C, Pa.flexibleCompare = D, Pa.computeIntervalUnit = I, Pa.divideRangeByDuration = K, Pa.divideDurationByDuration = L, Pa.multiplyDuration = M, Pa.durationHasTime = N;
    var Ta = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        Ua = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Pa.log = function() {
        var a = window.console;
        return a && a.log ? a.log.apply(a, arguments) : void 0
    }, Pa.warn = function() {
        var a = window.console;
        return a && a.warn ? a.warn.apply(a, arguments) : Pa.log.apply(Pa, arguments)
    };
    var Va, Wa, Xa, Ya = {}.hasOwnProperty,
        Za = /^\s*\d{4}-\d\d$/,
        $a = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
        _a = b.fn,
        ab = a.extend({}, _a);
    Pa.moment = function() {
        return ea(arguments)
    }, Pa.moment.utc = function() {
        var a = ea(arguments, !0);
        return a.hasTime() && a.utc(), a
    }, Pa.moment.parseZone = function() {
        return ea(arguments, !0, !0)
    }, _a.clone = function() {
        var a = ab.clone.apply(this, arguments);
        return ga(this, a), this._fullCalendar && (a._fullCalendar = !0), a
    }, _a.week = _a.weeks = function(a) {
        var b = (this._locale || this._lang)._fullCalendar_weekCalc;
        return null == a && "function" == typeof b ? b(this) : "ISO" === b ? ab.isoWeek.apply(this, arguments) : ab.week.apply(this, arguments)
    }, _a.time = function(a) {
        if (!this._fullCalendar) return ab.time.apply(this, arguments);
        if (null == a) return b.duration({
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        });
        this._ambigTime = !1, b.isDuration(a) || b.isMoment(a) || (a = b.duration(a));
        var c = 0;
        return b.isDuration(a) && (c = 24 * Math.floor(a.asDays())), this.hours(c + a.hours()).minutes(a.minutes()).seconds(a.seconds()).milliseconds(a.milliseconds())
    }, _a.stripTime = function() {
        var a;
        return this._ambigTime || (a = this.toArray(), this.utc(), Wa(this, a.slice(0, 3)), this._ambigTime = !0, this._ambigZone = !0), this
    }, _a.hasTime = function() {
        return !this._ambigTime
    }, _a.stripZone = function() {
        var a, b;
        return this._ambigZone || (a = this.toArray(), b = this._ambigTime, this.utc(), Wa(this, a), this._ambigTime = b || !1, this._ambigZone = !0), this
    }, _a.hasZone = function() {
        return !this._ambigZone
    }, _a.local = function() {
        var a = this.toArray(),
            b = this._ambigZone;
        return ab.local.apply(this, arguments), this._ambigTime = !1, this._ambigZone = !1, b && Xa(this, a), this
    }, _a.utc = function() {
        return ab.utc.apply(this, arguments), this._ambigTime = !1, this._ambigZone = !1, this
    }, a.each(["zone", "utcOffset"], function(a, b) {
        ab[b] && (_a[b] = function(a) {
            return null != a && (this._ambigTime = !1, this._ambigZone = !1), ab[b].apply(this, arguments)
        })
    }), _a.format = function() {
        return this._fullCalendar && arguments[0] ? ja(this, arguments[0]) : this._ambigTime ? ia(this, "YYYY-MM-DD") : this._ambigZone ? ia(this, "YYYY-MM-DD[T]HH:mm:ss") : ab.format.apply(this, arguments)
    }, _a.toISOString = function() {
        return this._ambigTime ? ia(this, "YYYY-MM-DD") : this._ambigZone ? ia(this, "YYYY-MM-DD[T]HH:mm:ss") : ab.toISOString.apply(this, arguments)
    }, _a.isWithin = function(a, b) {
        var c = fa([this, a, b]);
        return c[0] >= c[1] && c[0] < c[2]
    }, _a.isSame = function(a, b) {
        var c;
        return this._fullCalendar ? b ? (c = fa([this, a], !0), ab.isSame.call(c[0], c[1], b)) : (a = Pa.moment.parseZone(a), ab.isSame.call(this, a) && Boolean(this._ambigTime) === Boolean(a._ambigTime) && Boolean(this._ambigZone) === Boolean(a._ambigZone)) : ab.isSame.apply(this, arguments)
    }, a.each(["isBefore", "isAfter"], function(a, b) {
        _a[b] = function(a, c) {
            var d;
            return this._fullCalendar ? (d = fa([this, a]), ab[b].call(d[0], d[1], c)) : ab[b].apply(this, arguments)
        }
    }), Va = "_d" in b() && "updateOffset" in b, Wa = Va ? function(a, c) {
        a._d.setTime(Date.UTC.apply(Date, c)), b.updateOffset(a, !1)
    } : ha, Xa = Va ? function(a, c) {
        a._d.setTime(+new Date(c[0] || 0, c[1] || 0, c[2] || 0, c[3] || 0, c[4] || 0, c[5] || 0, c[6] || 0)), b.updateOffset(a, !1)
    } : ha;
    var bb = {
        t: function(a) {
            return ia(a, "a").charAt(0)
        },
        T: function(a) {
            return ia(a, "A").charAt(0)
        }
    };
    Pa.formatRange = ma;
    var cb = {
            Y: "year",
            M: "month",
            D: "day",
            d: "day",
            A: "second",
            a: "second",
            T: "second",
            t: "second",
            H: "second",
            h: "second",
            m: "second",
            s: "second"
        },
        db = {};
    Pa.Class = ra, ra.extend = function() {
        var a, b, c = arguments.length;
        for (a = 0; c > a; a++) b = arguments[a], c - 1 > a && ta(this, b);
        return sa(this, b || {})
    }, ra.mixin = function(a) {
        ta(this, a)
    };
    var eb = Pa.Emitter = ra.extend({
            callbackHash: null,
            on: function(a, b) {
                return this.getCallbacks(a).add(b), this
            },
            off: function(a, b) {
                return this.getCallbacks(a).remove(b), this
            },
            trigger: function(a) {
                var b = Array.prototype.slice.call(arguments, 1);
                return this.triggerWith(a, this, b), this
            },
            triggerWith: function(a, b, c) {
                var d = this.getCallbacks(a);
                return d.fireWith(b, c), this
            },
            getCallbacks: function(b) {
                var c;
                return this.callbackHash || (this.callbackHash = {}), c = this.callbackHash[b], c || (c = this.callbackHash[b] = a.Callbacks()), c
            }
        }),
        fb = ra.extend({
            isHidden: !0,
            options: null,
            el: null,
            documentMousedownProxy: null,
            margin: 10,
            constructor: function(a) {
                this.options = a || {}
            },
            show: function() {
                this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
            },
            hide: function() {
                this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
            },
            render: function() {
                var b = this,
                    c = this.options;
                this.el = a('<div class="fc-popover"/>').addClass(c.className || "").css({
                    top: 0,
                    left: 0
                }).append(c.content).appendTo(c.parentEl), this.el.on("click", ".fc-close", function() {
                    b.hide()
                }), c.autoHide && a(document).on("mousedown", this.documentMousedownProxy = ca(this, "documentMousedown"))
            },
            documentMousedown: function(b) {
                this.el && !a(b.target).closest(this.el).length && this.hide()
            },
            removeElement: function() {
                this.hide(), this.el && (this.el.remove(), this.el = null), a(document).off("mousedown", this.documentMousedownProxy)
            },
            position: function() {
                var b, c, d, e, f, g = this.options,
                    h = this.el.offsetParent().offset(),
                    i = this.el.outerWidth(),
                    j = this.el.outerHeight(),
                    k = a(window),
                    l = n(this.el);
                e = g.top || 0, f = void 0 !== g.left ? g.left : void 0 !== g.right ? g.right - i : 0, l.is(window) || l.is(document) ? (l = k, b = 0, c = 0) : (d = l.offset(), b = d.top, c = d.left), b += k.scrollTop(), c += k.scrollLeft(), g.viewportConstrain !== !1 && (e = Math.min(e, b + l.outerHeight() - j - this.margin), e = Math.max(e, b + this.margin), f = Math.min(f, c + l.outerWidth() - i - this.margin),
                    f = Math.max(f, c + this.margin)), this.el.css({
                    top: e - h.top,
                    left: f - h.left
                })
            },
            trigger: function(a) {
                this.options[a] && this.options[a].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }),
        gb = Pa.CoordCache = ra.extend({
            els: null,
            forcedOffsetParentEl: null,
            origin: null,
            boundingRect: null,
            isHorizontal: !1,
            isVertical: !1,
            lefts: null,
            rights: null,
            tops: null,
            bottoms: null,
            constructor: function(b) {
                this.els = a(b.els), this.isHorizontal = b.isHorizontal, this.isVertical = b.isVertical, this.forcedOffsetParentEl = b.offsetParent ? a(b.offsetParent) : null
            },
            build: function() {
                var a = this.forcedOffsetParentEl || this.els.eq(0).offsetParent();
                this.origin = a.offset(), this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals()
            },
            clear: function() {
                this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null
            },
            ensureBuilt: function() {
                this.origin || this.build()
            },
            queryBoundingRect: function() {
                var a = n(this.els.eq(0));
                return a.is(document) ? void 0 : p(a)
            },
            buildElHorizontals: function() {
                var b = [],
                    c = [];
                this.els.each(function(d, e) {
                    var f = a(e),
                        g = f.offset().left,
                        h = f.outerWidth();
                    b.push(g), c.push(g + h)
                }), this.lefts = b, this.rights = c
            },
            buildElVerticals: function() {
                var b = [],
                    c = [];
                this.els.each(function(d, e) {
                    var f = a(e),
                        g = f.offset().top,
                        h = f.outerHeight();
                    b.push(g), c.push(g + h)
                }), this.tops = b, this.bottoms = c
            },
            getHorizontalIndex: function(a) {
                this.ensureBuilt();
                var b, c = this.boundingRect,
                    d = this.lefts,
                    e = this.rights,
                    f = d.length;
                if (!c || a >= c.left && a < c.right)
                    for (b = 0; f > b; b++)
                        if (a >= d[b] && a < e[b]) return b
            },
            getVerticalIndex: function(a) {
                this.ensureBuilt();
                var b, c = this.boundingRect,
                    d = this.tops,
                    e = this.bottoms,
                    f = d.length;
                if (!c || a >= c.top && a < c.bottom)
                    for (b = 0; f > b; b++)
                        if (a >= d[b] && a < e[b]) return b
            },
            getLeftOffset: function(a) {
                return this.ensureBuilt(), this.lefts[a]
            },
            getLeftPosition: function(a) {
                return this.ensureBuilt(), this.lefts[a] - this.origin.left
            },
            getRightOffset: function(a) {
                return this.ensureBuilt(), this.rights[a]
            },
            getRightPosition: function(a) {
                return this.ensureBuilt(), this.rights[a] - this.origin.left
            },
            getWidth: function(a) {
                return this.ensureBuilt(), this.rights[a] - this.lefts[a]
            },
            getTopOffset: function(a) {
                return this.ensureBuilt(), this.tops[a]
            },
            getTopPosition: function(a) {
                return this.ensureBuilt(), this.tops[a] - this.origin.top
            },
            getBottomOffset: function(a) {
                return this.ensureBuilt(), this.bottoms[a]
            },
            getBottomPosition: function(a) {
                return this.ensureBuilt(), this.bottoms[a] - this.origin.top
            },
            getHeight: function(a) {
                return this.ensureBuilt(), this.bottoms[a] - this.tops[a]
            }
        }),
        hb = Pa.DragListener = ra.extend({
            options: null,
            isListening: !1,
            isDragging: !1,
            originX: null,
            originY: null,
            mousemoveProxy: null,
            mouseupProxy: null,
            subjectEl: null,
            subjectHref: null,
            scrollEl: null,
            scrollBounds: null,
            scrollTopVel: null,
            scrollLeftVel: null,
            scrollIntervalId: null,
            scrollHandlerProxy: null,
            scrollSensitivity: 30,
            scrollSpeed: 200,
            scrollIntervalMs: 50,
            constructor: function(a) {
                a = a || {}, this.options = a, this.subjectEl = a.subjectEl
            },
            mousedown: function(a) {
                v(a) && (a.preventDefault(), this.startListening(a), this.options.distance || this.startDrag(a))
            },
            startListening: function(b) {
                var c;
                this.isListening || (b && this.options.scroll && (c = n(a(b.target)), c.is(window) || c.is(document) || (this.scrollEl = c, this.scrollHandlerProxy = da(ca(this, "scrollHandler"), 100), this.scrollEl.on("scroll", this.scrollHandlerProxy))), a(document).on("mousemove", this.mousemoveProxy = ca(this, "mousemove")).on("mouseup", this.mouseupProxy = ca(this, "mouseup")).on("selectstart", this.preventDefault), b ? (this.originX = b.pageX, this.originY = b.pageY) : (this.originX = 0, this.originY = 0), this.isListening = !0, this.listenStart(b))
            },
            listenStart: function(a) {
                this.trigger("listenStart", a)
            },
            mousemove: function(a) {
                var b, c, d = a.pageX - this.originX,
                    e = a.pageY - this.originY;
                this.isDragging || (b = this.options.distance || 1, c = d * d + e * e, c >= b * b && this.startDrag(a)), this.isDragging && this.drag(d, e, a)
            },
            startDrag: function(a) {
                this.isListening || this.startListening(), this.isDragging || (this.isDragging = !0, this.dragStart(a))
            },
            dragStart: function(a) {
                var b = this.subjectEl;
                this.trigger("dragStart", a), (this.subjectHref = b ? b.attr("href") : null) && b.removeAttr("href")
            },
            drag: function(a, b, c) {
                this.trigger("drag", a, b, c), this.updateScroll(c)
            },
            mouseup: function(a) {
                this.stopListening(a)
            },
            stopDrag: function(a) {
                this.isDragging && (this.stopScrolling(), this.dragStop(a), this.isDragging = !1)
            },
            dragStop: function(a) {
                var b = this;
                this.trigger("dragStop", a), setTimeout(function() {
                    b.subjectHref && b.subjectEl.attr("href", b.subjectHref)
                }, 0)
            },
            stopListening: function(b) {
                this.stopDrag(b), this.isListening && (this.scrollEl && (this.scrollEl.off("scroll", this.scrollHandlerProxy), this.scrollHandlerProxy = null), a(document).off("mousemove", this.mousemoveProxy).off("mouseup", this.mouseupProxy).off("selectstart", this.preventDefault), this.mousemoveProxy = null, this.mouseupProxy = null, this.isListening = !1, this.listenStop(b))
            },
            listenStop: function(a) {
                this.trigger("listenStop", a)
            },
            trigger: function(a) {
                this.options[a] && this.options[a].apply(this, Array.prototype.slice.call(arguments, 1))
            },
            preventDefault: function(a) {
                a.preventDefault()
            },
            computeScrollBounds: function() {
                var a = this.scrollEl;
                this.scrollBounds = a ? o(a) : null
            },
            updateScroll: function(a) {
                var b, c, d, e, f = this.scrollSensitivity,
                    g = this.scrollBounds,
                    h = 0,
                    i = 0;
                g && (b = (f - (a.pageY - g.top)) / f, c = (f - (g.bottom - a.pageY)) / f, d = (f - (a.pageX - g.left)) / f, e = (f - (g.right - a.pageX)) / f, b >= 0 && 1 >= b ? h = b * this.scrollSpeed * -1 : c >= 0 && 1 >= c && (h = c * this.scrollSpeed), d >= 0 && 1 >= d ? i = d * this.scrollSpeed * -1 : e >= 0 && 1 >= e && (i = e * this.scrollSpeed)), this.setScrollVel(h, i)
            },
            setScrollVel: function(a, b) {
                this.scrollTopVel = a, this.scrollLeftVel = b, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(ca(this, "scrollIntervalFunc"), this.scrollIntervalMs))
            },
            constrainScrollVel: function() {
                var a = this.scrollEl;
                this.scrollTopVel < 0 ? a.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && a.scrollTop() + a[0].clientHeight >= a[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? a.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && a.scrollLeft() + a[0].clientWidth >= a[0].scrollWidth && (this.scrollLeftVel = 0)
            },
            scrollIntervalFunc: function() {
                var a = this.scrollEl,
                    b = this.scrollIntervalMs / 1e3;
                this.scrollTopVel && a.scrollTop(a.scrollTop() + this.scrollTopVel * b), this.scrollLeftVel && a.scrollLeft(a.scrollLeft() + this.scrollLeftVel * b), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.stopScrolling()
            },
            stopScrolling: function() {
                this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.scrollStop())
            },
            scrollHandler: function() {
                this.scrollIntervalId || this.scrollStop()
            },
            scrollStop: function() {}
        }),
        ib = hb.extend({
            component: null,
            origHit: null,
            hit: null,
            coordAdjust: null,
            constructor: function(a, b) {
                hb.call(this, b), this.component = a
            },
            listenStart: function(a) {
                var b, c, d, e = this.subjectEl;
                hb.prototype.listenStart.apply(this, arguments), this.computeCoords(), a ? (c = {
                    left: a.pageX,
                    top: a.pageY
                }, d = c, e && (b = o(e), d = x(d, b)), this.origHit = this.queryHit(d.left, d.top), e && this.options.subjectCenter && (this.origHit && (b = w(this.origHit, b) || b), d = y(b)), this.coordAdjust = z(d, c)) : (this.origHit = null, this.coordAdjust = null)
            },
            computeCoords: function() {
                this.component.prepareHits(), this.computeScrollBounds()
            },
            dragStart: function(a) {
                var b;
                hb.prototype.dragStart.apply(this, arguments), b = this.queryHit(a.pageX, a.pageY), b && this.hitOver(b)
            },
            drag: function(a, b, c) {
                var d;
                hb.prototype.drag.apply(this, arguments), d = this.queryHit(c.pageX, c.pageY), ua(d, this.hit) || (this.hit && this.hitOut(), d && this.hitOver(d))
            },
            dragStop: function() {
                this.hitDone(), hb.prototype.dragStop.apply(this, arguments)
            },
            hitOver: function(a) {
                var b = ua(a, this.origHit);
                this.hit = a, this.trigger("hitOver", this.hit, b, this.origHit)
            },
            hitOut: function() {
                this.hit && (this.trigger("hitOut", this.hit), this.hitDone(), this.hit = null)
            },
            hitDone: function() {
                this.hit && this.trigger("hitDone", this.hit)
            },
            listenStop: function() {
                hb.prototype.listenStop.apply(this, arguments), this.origHit = null, this.hit = null, this.component.releaseHits()
            },
            scrollStop: function() {
                hb.prototype.scrollStop.apply(this, arguments), this.computeCoords()
            },
            queryHit: function(a, b) {
                return this.coordAdjust && (a += this.coordAdjust.left, b += this.coordAdjust.top), this.component.queryHit(a, b)
            }
        }),
        jb = ra.extend({
            options: null,
            sourceEl: null,
            el: null,
            parentEl: null,
            top0: null,
            left0: null,
            mouseY0: null,
            mouseX0: null,
            topDelta: null,
            leftDelta: null,
            mousemoveProxy: null,
            isFollowing: !1,
            isHidden: !1,
            isAnimating: !1,
            constructor: function(b, c) {
                this.options = c = c || {}, this.sourceEl = b, this.parentEl = c.parentEl ? a(c.parentEl) : b.parent()
            },
            start: function(b) {
                this.isFollowing || (this.isFollowing = !0, this.mouseY0 = b.pageY, this.mouseX0 = b.pageX, this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), a(document).on("mousemove", this.mousemoveProxy = ca(this, "mousemove")))
            },
            stop: function(b, c) {
                function d() {
                    this.isAnimating = !1, e.removeElement(), this.top0 = this.left0 = null, c && c()
                }
                var e = this,
                    f = this.options.revertDuration;
                this.isFollowing && !this.isAnimating && (this.isFollowing = !1, a(document).off("mousemove", this.mousemoveProxy), b && f && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                    top: this.top0,
                    left: this.left0
                }, {
                    duration: f,
                    complete: d
                })) : d())
            },
            getEl: function() {
                var a = this.el;
                return a || (this.sourceEl.width(), a = this.el = this.sourceEl.clone().css({
                    position: "absolute",
                    visibility: "",
                    display: this.isHidden ? "none" : "",
                    margin: 0,
                    right: "auto",
                    bottom: "auto",
                    width: this.sourceEl.width(),
                    height: this.sourceEl.height(),
                    opacity: this.options.opacity || "",
                    zIndex: this.options.zIndex
                }).appendTo(this.parentEl)), a
            },
            removeElement: function() {
                this.el && (this.el.remove(), this.el = null)
            },
            updatePosition: function() {
                var a, b;
                this.getEl(), null === this.top0 && (this.sourceEl.width(), a = this.sourceEl.offset(), b = this.el.offsetParent().offset(), this.top0 = a.top - b.top, this.left0 = a.left - b.left), this.el.css({
                    top: this.top0 + this.topDelta,
                    left: this.left0 + this.leftDelta
                })
            },
            mousemove: function(a) {
                this.topDelta = a.pageY - this.mouseY0, this.leftDelta = a.pageX - this.mouseX0, this.isHidden || this.updatePosition()
            },
            hide: function() {
                this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
            },
            show: function() {
                this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
            }
        }),
        kb = Pa.Grid = ra.extend({
            view: null,
            isRTL: null,
            start: null,
            end: null,
            el: null,
            elsByFill: null,
            externalDragStartProxy: null,
            eventTimeFormat: null,
            displayEventTime: null,
            displayEventEnd: null,
            minResizeDuration: null,
            largeUnit: null,
            constructor: function(a) {
                this.view = a, this.isRTL = a.opt("isRTL"), this.elsByFill = {}, this.externalDragStartProxy = ca(this, "externalDragStart")
            },
            computeEventTimeFormat: function() {
                return this.view.opt("smallTimeFormat")
            },
            computeDisplayEventTime: function() {
                return !0
            },
            computeDisplayEventEnd: function() {
                return !0
            },
            setRange: function(a) {
                this.start = a.start.clone(), this.end = a.end.clone(), this.rangeUpdated(), this.processRangeOptions()
            },
            rangeUpdated: function() {},
            processRangeOptions: function() {
                var a, b, c = this.view;
                this.eventTimeFormat = c.opt("eventTimeFormat") || c.opt("timeFormat") || this.computeEventTimeFormat(), a = c.opt("displayEventTime"), null == a && (a = this.computeDisplayEventTime()), b = c.opt("displayEventEnd"), null == b && (b = this.computeDisplayEventEnd()), this.displayEventTime = a, this.displayEventEnd = b
            },
            spanToSegs: function(a) {},
            diffDates: function(a, b) {
                return this.largeUnit ? H(a, b, this.largeUnit) : F(a, b)
            },
            prepareHits: function() {},
            releaseHits: function() {},
            queryHit: function(a, b) {},
            getHitSpan: function(a) {},
            getHitEl: function(a) {},
            setElement: function(b) {
                var c = this;
                this.el = b, b.on("mousedown", function(b) {
                    a(b.target).is(".fc-event-container *, .fc-more") || a(b.target).closest(".fc-popover").length || c.dayMousedown(b)
                }), this.bindSegHandlers(), this.bindGlobalHandlers()
            },
            removeElement: function() {
                this.unbindGlobalHandlers(), this.el.remove()
            },
            renderSkeleton: function() {},
            renderDates: function() {},
            unrenderDates: function() {},
            bindGlobalHandlers: function() {
                a(document).on("dragstart sortstart", this.externalDragStartProxy)
            },
            unbindGlobalHandlers: function() {
                a(document).off("dragstart sortstart", this.externalDragStartProxy)
            },
            dayMousedown: function(a) {
                var b, c, d = this,
                    e = this.view,
                    f = e.opt("selectable"),
                    i = new ib(this, {
                        scroll: e.opt("dragScroll"),
                        dragStart: function() {
                            e.unselect()
                        },
                        hitOver: function(a, e, h) {
                            h && (b = e ? a : null, f && (c = d.computeSelection(d.getHitSpan(h), d.getHitSpan(a)), c ? d.renderSelection(c) : c === !1 && g()))
                        },
                        hitOut: function() {
                            b = null, c = null, d.unrenderSelection(), h()
                        },
                        listenStop: function(a) {
                            b && e.triggerDayClick(d.getHitSpan(b), d.getHitEl(b), a), c && e.reportSelection(c, a), h()
                        }
                    });
                i.mousedown(a)
            },
            renderEventLocationHelper: function(a, b) {
                var c = this.fabricateHelperEvent(a, b);
                this.renderHelper(c, b)
            },
            fabricateHelperEvent: function(a, b) {
                var c = b ? R(b.event) : {};
                return c.start = a.start.clone(), c.end = a.end ? a.end.clone() : null, c.allDay = null, this.view.calendar.normalizeEventDates(c), c.className = (c.className || []).concat("fc-helper"), b || (c.editable = !1), c
            },
            renderHelper: function(a, b) {},
            unrenderHelper: function() {},
            renderSelection: function(a) {
                this.renderHighlight(a)
            },
            unrenderSelection: function() {
                this.unrenderHighlight()
            },
            computeSelection: function(a, b) {
                var c = this.computeSelectionSpan(a, b);
                return c && !this.view.calendar.isSelectionSpanAllowed(c) ? !1 : c
            },
            computeSelectionSpan: function(a, b) {
                var c = [a.start, a.end, b.start, b.end];
                return c.sort(aa), {
                    start: c[0].clone(),
                    end: c[3].clone()
                }
            },
            renderHighlight: function(a) {
                this.renderFill("highlight", this.spanToSegs(a))
            },
            unrenderHighlight: function() {
                this.unrenderFill("highlight")
            },
            highlightSegClasses: function() {
                return ["fc-highlight"]
            },
            renderBusinessHours: function() {},
            unrenderBusinessHours: function() {},
            getNowIndicatorUnit: function() {},
            renderNowIndicator: function(a) {},
            unrenderNowIndicator: function() {},
            renderFill: function(a, b) {},
            unrenderFill: function(a) {
                var b = this.elsByFill[a];
                b && (b.remove(), delete this.elsByFill[a])
            },
            renderFillSegEls: function(b, c) {
                var d, e = this,
                    f = this[b + "SegEl"],
                    g = "",
                    h = [];
                if (c.length) {
                    for (d = 0; d < c.length; d++) g += this.fillSegHtml(b, c[d]);
                    a(g).each(function(b, d) {
                        var g = c[b],
                            i = a(d);
                        f && (i = f.call(e, g, i)), i && (i = a(i), i.is(e.fillSegTag) && (g.el = i, h.push(g)))
                    })
                }
                return h
            },
            fillSegTag: "div",
            fillSegHtml: function(a, b) {
                var c = this[a + "SegClasses"],
                    d = this[a + "SegCss"],
                    e = c ? c.call(this, b) : [],
                    f = $(d ? d.call(this, b) : {});
                return "<" + this.fillSegTag + (e.length ? ' class="' + e.join(" ") + '"' : "") + (f ? ' style="' + f + '"' : "") + " />"
            },
            getDayClasses: function(a) {
                var b = this.view,
                    c = b.calendar.getNow(),
                    d = ["fc-" + Ta[a.day()]];
                return 1 == b.intervalDuration.as("months") && a.month() != b.intervalStart.month() && d.push("fc-other-month"), a.isSame(c, "day") ? d.push("fc-today", b.highlightStateClass) : c > a ? d.push("fc-past") : d.push("fc-future"), d
            }
        });
    kb.mixin({
        mousedOverSeg: null,
        isDraggingSeg: !1,
        isResizingSeg: !1,
        isDraggingExternal: !1,
        segs: null,
        renderEvents: function(a) {
            var b, c = [],
                d = [];
            for (b = 0; b < a.length; b++)(wa(a[b]) ? c : d).push(a[b]);
            this.segs = [].concat(this.renderBgEvents(c), this.renderFgEvents(d))
        },
        renderBgEvents: function(a) {
            var b = this.eventsToSegs(a);
            return this.renderBgSegs(b) || b
        },
        renderFgEvents: function(a) {
            var b = this.eventsToSegs(a);
            return this.renderFgSegs(b) || b
        },
        unrenderEvents: function() {
            this.triggerSegMouseout(), this.unrenderFgSegs(), this.unrenderBgSegs(), this.segs = null
        },
        getEventSegs: function() {
            return this.segs || []
        },
        renderFgSegs: function(a) {},
        unrenderFgSegs: function() {},
        renderFgSegEls: function(b, c) {
            var d, e = this.view,
                f = "",
                g = [];
            if (b.length) {
                for (d = 0; d < b.length; d++) f += this.fgSegHtml(b[d], c);
                a(f).each(function(c, d) {
                    var f = b[c],
                        h = e.resolveEventEl(f.event, a(d));
                    h && (h.data("fc-seg", f), f.el = h, g.push(f))
                })
            }
            return g
        },
        fgSegHtml: function(a, b) {},
        renderBgSegs: function(a) {
            return this.renderFill("bgEvent", a)
        },
        unrenderBgSegs: function() {
            this.unrenderFill("bgEvent")
        },
        bgEventSegEl: function(a, b) {
            return this.view.resolveEventEl(a.event, b)
        },
        bgEventSegClasses: function(a) {
            var b = a.event,
                c = b.source || {};
            return ["fc-bgevent"].concat(b.className, c.className || [])
        },
        bgEventSegCss: function(a) {
            return {
                "background-color": this.getSegSkinCss(a)["background-color"]
            }
        },
        businessHoursSegClasses: function(a) {
            return ["fc-nonbusiness", "fc-bgevent"]
        },
        bindSegHandlers: function() {
            var b = this,
                c = this.view;
            a.each({
                mouseenter: function(a, c) {
                    b.triggerSegMouseover(a, c)
                },
                mouseleave: function(a, c) {
                    b.triggerSegMouseout(a, c)
                },
                click: function(a, b) {
                    return c.trigger("eventClick", this, a.event, b)
                },
                mousedown: function(d, e) {
                    a(e.target).is(".fc-resizer") && c.isEventResizable(d.event) ? b.segResizeMousedown(d, e, a(e.target).is(".fc-start-resizer")) : c.isEventDraggable(d.event) && b.segDragMousedown(d, e)
                }
            }, function(c, d) {
                b.el.on(c, ".fc-event-container > *", function(c) {
                    var e = a(this).data("fc-seg");
                    return !e || b.isDraggingSeg || b.isResizingSeg ? void 0 : d.call(this, e, c)
                })
            })
        },
        triggerSegMouseover: function(a, b) {
            this.mousedOverSeg || (this.mousedOverSeg = a, this.view.trigger("eventMouseover", a.el[0], a.event, b))
        },
        triggerSegMouseout: function(a, b) {
            b = b || {}, this.mousedOverSeg && (a = a || this.mousedOverSeg, this.mousedOverSeg = null, this.view.trigger("eventMouseout", a.el[0], a.event, b))
        },
        segDragMousedown: function(a, b) {
            var c, d = this,
                e = this.view,
                f = e.calendar,
                i = a.el,
                j = a.event,
                k = new jb(a.el, {
                    parentEl: e.el,
                    opacity: e.opt("dragOpacity"),
                    revertDuration: e.opt("dragRevertDuration"),
                    zIndex: 2
                }),
                l = new ib(e, {
                    distance: 5,
                    scroll: e.opt("dragScroll"),
                    subjectEl: i,
                    subjectCenter: !0,
                    listenStart: function(a) {
                        k.hide(), k.start(a)
                    },
                    dragStart: function(b) {
                        d.triggerSegMouseout(a, b), d.segDragStart(a, b), e.hideEvent(j)
                    },
                    hitOver: function(b, h, i) {
                        a.hit && (i = a.hit), c = d.computeEventDrop(i.component.getHitSpan(i), b.component.getHitSpan(b), j), c && !f.isEventSpanAllowed(d.eventToSpan(c), j) && (g(), c = null), c && e.renderDrag(c, a) ? k.hide() : k.show(), h && (c = null)
                    },
                    hitOut: function() {
                        e.unrenderDrag(), k.show(), c = null
                    },
                    hitDone: function() {
                        h()
                    },
                    dragStop: function(b) {
                        k.stop(!c, function() {
                            e.unrenderDrag(), e.showEvent(j), d.segDragStop(a, b), c && e.reportEventDrop(j, c, this.largeUnit, i, b)
                        })
                    },
                    listenStop: function() {
                        k.stop()
                    }
                });
            l.mousedown(b)
        },
        segDragStart: function(a, b) {
            this.isDraggingSeg = !0, this.view.trigger("eventDragStart", a.el[0], a.event, b, {})
        },
        segDragStop: function(a, b) {
            this.isDraggingSeg = !1, this.view.trigger("eventDragStop", a.el[0], a.event, b, {})
        },
        computeEventDrop: function(a, b, c) {
            var d, e, f = this.view.calendar,
                g = a.start,
                h = b.start;
            return g.hasTime() === h.hasTime() ? (d = this.diffDates(h, g), c.allDay && N(d) ? (e = {
                start: c.start.clone(),
                end: f.getEventEnd(c),
                allDay: !1
            }, f.normalizeEventTimes(e)) : e = {
                start: c.start.clone(),
                end: c.end ? c.end.clone() : null,
                allDay: c.allDay
            }, e.start.add(d), e.end && e.end.add(d)) : e = {
                start: h.clone(),
                end: null,
                allDay: !h.hasTime()
            }, e
        },
        applyDragOpacity: function(a) {
            var b = this.view.opt("dragOpacity");
            null != b && a.each(function(a, c) {
                c.style.opacity = b
            })
        },
        externalDragStart: function(b, c) {
            var d, e, f = this.view;
            f.opt("droppable") && (d = a((c ? c.item : null) || b.target), e = f.opt("dropAccept"), (a.isFunction(e) ? e.call(d[0], d) : d.is(e)) && (this.isDraggingExternal || this.listenToExternalDrag(d, b, c)))
        },
        listenToExternalDrag: function(a, b, c) {
            var d, e = this,
                f = this.view.calendar,
                i = Ba(a),
                j = new ib(this, {
                    listenStart: function() {
                        e.isDraggingExternal = !0
                    },
                    hitOver: function(a) {
                        d = e.computeExternalDrop(a.component.getHitSpan(a), i), d && !f.isExternalSpanAllowed(e.eventToSpan(d), d, i.eventProps) && (g(), d = null), d && e.renderDrag(d)
                    },
                    hitOut: function() {
                        d = null
                    },
                    hitDone: function() {
                        h(), e.unrenderDrag()
                    },
                    dragStop: function() {
                        d && e.view.reportExternalDrop(i, d, a, b, c)
                    },
                    listenStop: function() {
                        e.isDraggingExternal = !1
                    }
                });
            j.startDrag(b)
        },
        computeExternalDrop: function(a, b) {
            var c = this.view.calendar,
                d = {
                    start: c.applyTimezone(a.start),
                    end: null
                };
            return b.startTime && !d.start.hasTime() && d.start.time(b.startTime), b.duration && (d.end = d.start.clone().add(b.duration)), d
        },
        renderDrag: function(a, b) {},
        unrenderDrag: function() {},
        segResizeMousedown: function(a, b, c) {
            var d, e = this,
                f = this.view,
                i = f.calendar,
                j = a.el,
                k = a.event,
                l = i.getEventEnd(k),
                m = new ib(this, {
                    distance: 5,
                    scroll: f.opt("dragScroll"),
                    subjectEl: j,
                    dragStart: function(b) {
                        e.triggerSegMouseout(a, b), e.segResizeStart(a, b)
                    },
                    hitOver: function(b, h, j) {
                        var m = e.getHitSpan(j),
                            n = e.getHitSpan(b);
                        d = c ? e.computeEventStartResize(m, n, k) : e.computeEventEndResize(m, n, k), d && (i.isEventSpanAllowed(e.eventToSpan(d), k) ? d.start.isSame(k.start) && d.end.isSame(l) && (d = null) : (g(), d = null)), d && (f.hideEvent(k), e.renderEventResize(d, a))
                    },
                    hitOut: function() {
                        d = null
                    },
                    hitDone: function() {
                        e.unrenderEventResize(), f.showEvent(k), h()
                    },
                    dragStop: function(b) {
                        e.segResizeStop(a, b), d && f.reportEventResize(k, d, this.largeUnit, j, b)
                    }
                });
            m.mousedown(b)
        },
        segResizeStart: function(a, b) {
            this.isResizingSeg = !0, this.view.trigger("eventResizeStart", a.el[0], a.event, b, {})
        },
        segResizeStop: function(a, b) {
            this.isResizingSeg = !1, this.view.trigger("eventResizeStop", a.el[0], a.event, b, {})
        },
        computeEventStartResize: function(a, b, c) {
            return this.computeEventResize("start", a, b, c)
        },
        computeEventEndResize: function(a, b, c) {
            return this.computeEventResize("end", a, b, c)
        },
        computeEventResize: function(a, b, c, d) {
            var e, f, g = this.view.calendar,
                h = this.diffDates(c[a], b[a]);
            return e = {
                start: d.start.clone(),
                end: g.getEventEnd(d),
                allDay: d.allDay
            }, e.allDay && N(h) && (e.allDay = !1, g.normalizeEventTimes(e)), e[a].add(h), e.start.isBefore(e.end) || (f = this.minResizeDuration || (d.allDay ? g.defaultAllDayEventDuration : g.defaultTimedEventDuration), "start" == a ? e.start = e.end.clone().subtract(f) : e.end = e.start.clone().add(f)), e
        },
        renderEventResize: function(a, b) {},
        unrenderEventResize: function() {},
        getEventTimeText: function(a, b, c) {
            return null == b && (b = this.eventTimeFormat), null == c && (c = this.displayEventEnd), this.displayEventTime && a.start.hasTime() ? c && a.end ? this.view.formatRange(a, b) : a.start.format(b) : ""
        },
        getSegClasses: function(a, b, c) {
            var d = a.event,
                e = ["fc-event", a.isStart ? "fc-start" : "fc-not-start", a.isEnd ? "fc-end" : "fc-not-end"].concat(d.className, d.source ? d.source.className : []);
            return b && e.push("fc-draggable"), c && e.push("fc-resizable"), e
        },
        getSegSkinCss: function(a) {
            var b = a.event,
                c = this.view,
                d = b.source || {},
                e = b.color,
                f = d.color,
                g = c.opt("eventColor");
            return {
                "background-color": b.backgroundColor || e || d.backgroundColor || f || c.opt("eventBackgroundColor") || g,
                "border-color": b.borderColor || e || d.borderColor || f || c.opt("eventBorderColor") || g,
                color: b.textColor || d.textColor || c.opt("eventTextColor")
            }
        },
        eventToSegs: function(a) {
            return this.eventsToSegs([a])
        },
        eventToSpan: function(a) {
            return this.eventToSpans(a)[0]
        },
        eventToSpans: function(a) {
            var b = this.eventToRange(a);
            return this.eventRangeToSpans(b, a)
        },
        eventsToSegs: function(b, c) {
            var d = this,
                e = za(b),
                f = [];
            return a.each(e, function(a, b) {
                var e, g = [];
                for (e = 0; e < b.length; e++) g.push(d.eventToRange(b[e]));
                if (xa(b[0]))
                    for (g = d.invertRanges(g), e = 0; e < g.length; e++) f.push.apply(f, d.eventRangeToSegs(g[e], b[0], c));
                else
                    for (e = 0; e < g.length; e++) f.push.apply(f, d.eventRangeToSegs(g[e], b[e], c))
            }), f
        },
        eventToRange: function(a) {
            return {
                start: a.start.clone().stripZone(),
                end: (a.end ? a.end.clone() : this.view.calendar.getDefaultEventEnd(null != a.allDay ? a.allDay : !a.start.hasTime(), a.start)).stripZone()
            }
        },
        eventRangeToSegs: function(a, b, c) {
            var d, e = this.eventRangeToSpans(a, b),
                f = [];
            for (d = 0; d < e.length; d++) f.push.apply(f, this.eventSpanToSegs(e[d], b, c));
            return f
        },
        eventRangeToSpans: function(b, c) {
            return [a.extend({}, b)]
        },
        eventSpanToSegs: function(a, b, c) {
            var d, e, f = c ? c(a) : this.spanToSegs(a);
            for (d = 0; d < f.length; d++) e = f[d], e.event = b, e.eventStartMS = +a.start, e.eventDurationMS = a.end - a.start;
            return f
        },
        invertRanges: function(a) {
            var b, c, d = this.view,
                e = d.start.clone(),
                f = d.end.clone(),
                g = [],
                h = e;
            for (a.sort(Aa), b = 0; b < a.length; b++) c = a[b], c.start > h && g.push({
                start: h,
                end: c.start
            }), h = c.end;
            return f > h && g.push({
                start: h,
                end: f
            }), g
        },
        sortEventSegs: function(a) {
            a.sort(ca(this, "compareEventSegs"))
        },
        compareEventSegs: function(a, b) {
            return a.eventStartMS - b.eventStartMS || b.eventDurationMS - a.eventDurationMS || b.event.allDay - a.event.allDay || B(a.event, b.event, this.view.eventOrderSpecs)
        }
    }), Pa.isBgEvent = wa, Pa.dataAttrPrefix = "";
    var lb = Pa.DayTableMixin = {
            breakOnWeeks: !1,
            dayDates: null,
            dayIndices: null,
            daysPerRow: null,
            rowCnt: null,
            colCnt: null,
            colHeadFormat: null,
            updateDayTable: function() {
                for (var a, b, c, d = this.view, e = this.start.clone(), f = -1, g = [], h = []; e.isBefore(this.end);) d.isHiddenDay(e) ? g.push(f + .5) : (f++, g.push(f), h.push(e.clone())), e.add(1, "days");
                if (this.breakOnWeeks) {
                    for (b = h[0].day(), a = 1; a < h.length && h[a].day() != b; a++);
                    c = Math.ceil(h.length / a)
                } else c = 1, a = h.length;
                this.dayDates = h, this.dayIndices = g, this.daysPerRow = a, this.rowCnt = c, this.updateDayTableCols()
            },
            updateDayTableCols: function() {
                this.colCnt = this.computeColCnt(), this.colHeadFormat = this.view.opt("columnFormat") || this.computeColHeadFormat()
            },
            computeColCnt: function() {
                return this.daysPerRow
            },
            getCellDate: function(a, b) {
                return this.dayDates[this.getCellDayIndex(a, b)].clone()
            },
            getCellRange: function(a, b) {
                var c = this.getCellDate(a, b),
                    d = c.clone().add(1, "days");
                return {
                    start: c,
                    end: d
                }
            },
            getCellDayIndex: function(a, b) {
                return a * this.daysPerRow + this.getColDayIndex(b)
            },
            getColDayIndex: function(a) {
                return this.isRTL ? this.colCnt - 1 - a : a
            },
            getDateDayIndex: function(a) {
                var b = this.dayIndices,
                    c = a.diff(this.start, "days");
                return 0 > c ? b[0] - 1 : c >= b.length ? b[b.length - 1] + 1 : b[c]
            },
            computeColHeadFormat: function() {
                return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
            },
            sliceRangeByRow: function(a) {
                var b, c, d, e, f, g = this.daysPerRow,
                    h = this.view.computeDayRange(a),
                    i = this.getDateDayIndex(h.start),
                    j = this.getDateDayIndex(h.end.clone().subtract(1, "days")),
                    k = [];
                for (b = 0; b < this.rowCnt; b++) c = b * g, d = c + g - 1, e = Math.max(i, c), f = Math.min(j, d), e = Math.ceil(e), f = Math.floor(f), f >= e && k.push({
                    row: b,
                    firstRowDayIndex: e - c,
                    lastRowDayIndex: f - c,
                    isStart: e === i,
                    isEnd: f === j
                });
                return k
            },
            sliceRangeByDay: function(a) {
                var b, c, d, e, f, g, h = this.daysPerRow,
                    i = this.view.computeDayRange(a),
                    j = this.getDateDayIndex(i.start),
                    k = this.getDateDayIndex(i.end.clone().subtract(1, "days")),
                    l = [];
                for (b = 0; b < this.rowCnt; b++)
                    for (c = b * h, d = c + h - 1, e = c; d >= e; e++) f = Math.max(j, e), g = Math.min(k, e), f = Math.ceil(f), g = Math.floor(g), g >= f && l.push({
                        row: b,
                        firstRowDayIndex: f - c,
                        lastRowDayIndex: g - c,
                        isStart: f === j,
                        isEnd: g === k
                    });
                return l
            },
            renderHeadHtml: function() {
                var a = this.view;
                return '<div class="fc-row ' + a.widgetHeaderClass + '"><table><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
            },
            renderHeadIntroHtml: function() {
                return this.renderIntroHtml()
            },
            renderHeadTrHtml: function() {
                return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
            },
            renderHeadDateCellsHtml: function() {
                var a, b, c = [];
                for (a = 0; a < this.colCnt; a++) b = this.getCellDate(0, a), c.push(this.renderHeadDateCellHtml(b));
                return c.join("")
            },
            renderHeadDateCellHtml: function(a, b, c) {
                var d = this.view;
                return '<th class="fc-day-header ' + d.widgetHeaderClass + " fc-" + Ta[a.day()] + '"' + (1 == this.rowCnt ? ' data-date="' + a.format("YYYY-MM-DD") + '"' : "") + (b > 1 ? ' colspan="' + b + '"' : "") + (c ? " " + c : "") + ">" + Y(a.format(this.colHeadFormat)) + "</th>"
            },
            renderBgTrHtml: function(a) {
                return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(a)) + this.renderBgCellsHtml(a) + (this.isRTL ? this.renderBgIntroHtml(a) : "") + "</tr>"
            },
            renderBgIntroHtml: function(a) {
                return this.renderIntroHtml()
            },
            renderBgCellsHtml: function(a) {
                var b, c, d = [];
                for (b = 0; b < this.colCnt; b++) c = this.getCellDate(a, b), d.push(this.renderBgCellHtml(c));
                return d.join("")
            },
            renderBgCellHtml: function(a, b) {
                var c = this.view,
                    d = this.getDayClasses(a);
                return d.unshift("fc-day", c.widgetContentClass), '<td class="' + d.join(" ") + '" data-date="' + a.format("YYYY-MM-DD") + '"' + (b ? " " + b : "") + "></td>"
            },
            renderIntroHtml: function() {},
            bookendCells: function(a) {
                var b = this.renderIntroHtml();
                b && (this.isRTL ? a.append(b) : a.prepend(b))
            }
        },
        mb = Pa.DayGrid = kb.extend(lb, {
            numbersVisible: !1,
            bottomCoordPadding: 0,
            rowEls: null,
            cellEls: null,
            helperEls: null,
            rowCoordCache: null,
            colCoordCache: null,
            renderDates: function(a) {
                var b, c, d = this.view,
                    e = this.rowCnt,
                    f = this.colCnt,
                    g = "";
                for (b = 0; e > b; b++) g += this.renderDayRowHtml(b, a);
                for (this.el.html(g), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day"), this.rowCoordCache = new gb({
                        els: this.rowEls,
                        isVertical: !0
                    }), this.colCoordCache = new gb({
                        els: this.cellEls.slice(0, this.colCnt),
                        isHorizontal: !0
                    }), b = 0; e > b; b++)
                    for (c = 0; f > c; c++) d.trigger("dayRender", null, this.getCellDate(b, c), this.getCellEl(b, c))
            },
            unrenderDates: function() {
                this.removeSegPopover()
            },
            renderBusinessHours: function() {
                var a = this.view.calendar.getBusinessHoursEvents(!0),
                    b = this.eventsToSegs(a);
                this.renderFill("businessHours", b, "bgevent")
            },
            renderDayRowHtml: function(a, b) {
                var c = this.view,
                    d = ["fc-row", "fc-week", c.widgetContentClass];
                return b && d.push("fc-rigid"), '<div class="' + d.join(" ") + '"><div class="fc-bg"><table>' + this.renderBgTrHtml(a) + '</table></div><div class="fc-content-skeleton"><table>' + (this.numbersVisible ? "<thead>" + this.renderNumberTrHtml(a) + "</thead>" : "") + "</table></div></div>"
            },
            renderNumberTrHtml: function(a) {
                return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(a)) + this.renderNumberCellsHtml(a) + (this.isRTL ? this.renderNumberIntroHtml(a) : "") + "</tr>"
            },
            renderNumberIntroHtml: function(a) {
                return this.renderIntroHtml()
            },
            renderNumberCellsHtml: function(a) {
                var b, c, d = [];
                for (b = 0; b < this.colCnt; b++) c = this.getCellDate(a, b), d.push(this.renderNumberCellHtml(c));
                return d.join("")
            },
            renderNumberCellHtml: function(a) {
                var b;
                return this.view.dayNumbersVisible ? (b = this.getDayClasses(a), b.unshift("fc-day-number"), '<td class="' + b.join(" ") + '" data-date="' + a.format() + '">' + a.date() + "</td>") : "<td/>"
            },
            computeEventTimeFormat: function() {
                return this.view.opt("extraSmallTimeFormat")
            },
            computeDisplayEventEnd: function() {
                return 1 == this.colCnt
            },
            rangeUpdated: function() {
                this.updateDayTable()
            },
            spanToSegs: function(a) {
                var b, c, d = this.sliceRangeByRow(a);
                for (b = 0; b < d.length; b++) c = d[b], this.isRTL ? (c.leftCol = this.daysPerRow - 1 - c.lastRowDayIndex, c.rightCol = this.daysPerRow - 1 - c.firstRowDayIndex) : (c.leftCol = c.firstRowDayIndex, c.rightCol = c.lastRowDayIndex);
                return d
            },
            prepareHits: function() {
                this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
            },
            releaseHits: function() {
                this.colCoordCache.clear(), this.rowCoordCache.clear()
            },
            queryHit: function(a, b) {
                var c = this.colCoordCache.getHorizontalIndex(a),
                    d = this.rowCoordCache.getVerticalIndex(b);
                return null != d && null != c ? this.getCellHit(d, c) : void 0
            },
            getHitSpan: function(a) {
                return this.getCellRange(a.row, a.col)
            },
            getHitEl: function(a) {
                return this.getCellEl(a.row, a.col)
            },
            getCellHit: function(a, b) {
                return {
                    row: a,
                    col: b,
                    component: this,
                    left: this.colCoordCache.getLeftOffset(b),
                    right: this.colCoordCache.getRightOffset(b),
                    top: this.rowCoordCache.getTopOffset(a),
                    bottom: this.rowCoordCache.getBottomOffset(a)
                }
            },
            getCellEl: function(a, b) {
                return this.cellEls.eq(a * this.colCnt + b)
            },
            renderDrag: function(a, b) {
                return this.renderHighlight(this.eventToSpan(a)), b && !b.el.closest(this.el).length ? (this.renderEventLocationHelper(a, b), this.applyDragOpacity(this.helperEls), !0) : void 0
            },
            unrenderDrag: function() {
                this.unrenderHighlight(), this.unrenderHelper()
            },
            renderEventResize: function(a, b) {
                this.renderHighlight(this.eventToSpan(a)), this.renderEventLocationHelper(a, b)
            },
            unrenderEventResize: function() {
                this.unrenderHighlight(), this.unrenderHelper()
            },
            renderHelper: function(b, c) {
                var d, e = [],
                    f = this.eventToSegs(b);
                f = this.renderFgSegEls(f), d = this.renderSegRows(f), this.rowEls.each(function(b, f) {
                    var g, h = a(f),
                        i = a('<div class="fc-helper-skeleton"><table/></div>');
                    g = c && c.row === b ? c.el.position().top : h.find(".fc-content-skeleton tbody").position().top, i.css("top", g).find("table").append(d[b].tbodyEl), h.append(i), e.push(i[0])
                }), this.helperEls = a(e)
            },
            unrenderHelper: function() {
                this.helperEls && (this.helperEls.remove(), this.helperEls = null)
            },
            fillSegTag: "td",
            renderFill: function(b, c, d) {
                var e, f, g, h = [];
                for (c = this.renderFillSegEls(b, c), e = 0; e < c.length; e++) f = c[e], g = this.renderFillRow(b, f, d), this.rowEls.eq(f.row).append(g), h.push(g[0]);
                return this.elsByFill[b] = a(h), c
            },
            renderFillRow: function(b, c, d) {
                var e, f, g = this.colCnt,
                    h = c.leftCol,
                    i = c.rightCol + 1;
                return d = d || b.toLowerCase(), e = a('<div class="fc-' + d + '-skeleton"><table><tr/></table></div>'), f = e.find("tr"), h > 0 && f.append('<td colspan="' + h + '"/>'), f.append(c.el.attr("colspan", i - h)), g > i && f.append('<td colspan="' + (g - i) + '"/>'), this.bookendCells(f), e
            }
        });
    mb.mixin({
        rowStructs: null,
        unrenderEvents: function() {
            this.removeSegPopover(), kb.prototype.unrenderEvents.apply(this, arguments)
        },
        getEventSegs: function() {
            return kb.prototype.getEventSegs.call(this).concat(this.popoverSegs || [])
        },
        renderBgSegs: function(b) {
            var c = a.grep(b, function(a) {
                return a.event.allDay
            });
            return kb.prototype.renderBgSegs.call(this, c)
        },
        renderFgSegs: function(b) {
            var c;
            return b = this.renderFgSegEls(b), c = this.rowStructs = this.renderSegRows(b), this.rowEls.each(function(b, d) {
                a(d).find(".fc-content-skeleton > table").append(c[b].tbodyEl)
            }), b
        },
        unrenderFgSegs: function() {
            for (var a, b = this.rowStructs || []; a = b.pop();) a.tbodyEl.remove();
            this.rowStructs = null
        },
        renderSegRows: function(a) {
            var b, c, d = [];
            for (b = this.groupSegRows(a), c = 0; c < b.length; c++) d.push(this.renderSegRow(c, b[c]));
            return d
        },
        fgSegHtml: function(a, b) {
            var c, d, e = this.view,
                f = a.event,
                g = e.isEventDraggable(f),
                h = !b && f.allDay && a.isStart && e.isEventResizableFromStart(f),
                i = !b && f.allDay && a.isEnd && e.isEventResizableFromEnd(f),
                j = this.getSegClasses(a, g, h || i),
                k = $(this.getSegSkinCss(a)),
                l = "";
                /*console.log(a);
                console.log(b);*/
            return j.unshift("fc-day-grid-event", "fc-h-event"), a.isStart && (c = this.getEventTimeText(f), c && (l = '<span class="fc-time">' + Y(c) + "</span>")), d = '<span class="fc-title">'+ (Y(f.title || "") || "&nbsp;") +"</span>" /*+ "<p>"+ (f.image?"<img style='min-height:40px;margin: auto;width: 80%;display: block;box-shadow: none;' src="+(Y(f.image || ""))+">":"") + "</p>"*/, '<a target="_blank" class="' + j.join(" ") + '"' + (f.url ? ' href="' + Y(f.url) + '"' : "") + (k ? ' style="' + k + '"' : "") + '><div class="fc-content">' + (this.isRTL ? d + " " + l : l + " " + d) + "</div>" + (h ? '<div class="fc-resizer fc-start-resizer" />' : "") + (i ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        renderSegRow: function(b, c) {
            function d(b) {
                for (; b > g;) k = (r[e - 1] || [])[g], k ? k.attr("rowspan", parseInt(k.attr("rowspan") || 1, 10) + 1) : (k = a("<td/>"), h.append(k)), q[e][g] = k, r[e][g] = k, g++
            }
            var e, f, g, h, i, j, k, l = this.colCnt,
                m = this.buildSegLevels(c),
                n = Math.max(1, m.length),
                o = a("<tbody/>"),
                p = [],
                q = [],
                r = [];
            for (e = 0; n > e; e++) {
                if (f = m[e], g = 0, h = a("<tr/>"), p.push([]), q.push([]), r.push([]), f)
                    for (i = 0; i < f.length; i++) {
                        for (j = f[i], d(j.leftCol), k = a('<td class="fc-event-container"/>').append(j.el), j.leftCol != j.rightCol ? k.attr("colspan", j.rightCol - j.leftCol + 1) : r[e][g] = k; g <= j.rightCol;) q[e][g] = k, p[e][g] = j, g++;
                        h.append(k)
                    }
                d(l), this.bookendCells(h), o.append(h)
            }
            return {
                row: b,
                tbodyEl: o,
                cellMatrix: q,
                segMatrix: p,
                segLevels: m,
                segs: c
            }
        },
        buildSegLevels: function(a) {
            var b, c, d, e = [];
            for (this.sortEventSegs(a), b = 0; b < a.length; b++) {
                for (c = a[b], d = 0; d < e.length && Ca(c, e[d]); d++);
                c.level = d, (e[d] || (e[d] = [])).push(c)
            }
            for (d = 0; d < e.length; d++) e[d].sort(Da);
            return e
        },
        groupSegRows: function(a) {
            var b, c = [];
            for (b = 0; b < this.rowCnt; b++) c.push([]);
            for (b = 0; b < a.length; b++) c[a[b].row].push(a[b]);
            return c
        }
    }), mb.mixin({
        segPopover: null,
        popoverSegs: null,
        removeSegPopover: function() {
            this.segPopover && this.segPopover.hide()
        },
        limitRows: function(a) {
            var b, c, d = this.rowStructs || [];
            for (b = 0; b < d.length; b++) this.unlimitRow(b), c = a ? "number" == typeof a ? a : this.computeRowLevelLimit(b) : !1, c !== !1 && this.limitRow(b, c)
        },
        computeRowLevelLimit: function(b) {
            function c(b, c) {
                f = Math.max(f, a(c).outerHeight())
            }
            var d, e, f, g = this.rowEls.eq(b),
                h = g.height(),
                i = this.rowStructs[b].tbodyEl.children();
            for (d = 0; d < i.length; d++)
                if (e = i.eq(d).removeClass("fc-limited"), f = 0, e.find("> td > :first-child").each(c), e.position().top + f > h) return d;
            return !1
        },
        limitRow: function(b, c) {
            function d(d) {
                for (; d > w;) j = t.getCellSegs(b, w, c), j.length && (m = f[c - 1][w], s = t.renderMoreLink(b, w, j), r = a("<div/>").append(s), m.append(r), v.push(r[0])), w++
            }
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = this,
                u = this.rowStructs[b],
                v = [],
                w = 0;
            if (c && c < u.segLevels.length) {
                for (e = u.segLevels[c - 1], f = u.cellMatrix, g = u.tbodyEl.children().slice(c).addClass("fc-limited").get(), h = 0; h < e.length; h++) {
                    for (i = e[h], d(i.leftCol), l = [], k = 0; w <= i.rightCol;) j = this.getCellSegs(b, w, c), l.push(j), k += j.length, w++;
                    if (k) {
                        for (m = f[c - 1][i.leftCol], n = m.attr("rowspan") || 1, o = [], p = 0; p < l.length; p++) q = a('<td class="fc-more-cell"/>').attr("rowspan", n), j = l[p], s = this.renderMoreLink(b, i.leftCol + p, [i].concat(j)), r = a("<div/>").append(s), q.append(r), o.push(q[0]), v.push(q[0]);
                        m.addClass("fc-limited").after(a(o)), g.push(m[0])
                    }
                }
                d(this.colCnt), u.moreEls = a(v), u.limitedEls = a(g)
            }
        },
        unlimitRow: function(a) {
            var b = this.rowStructs[a];
            b.moreEls && (b.moreEls.remove(), b.moreEls = null), b.limitedEls && (b.limitedEls.removeClass("fc-limited"), b.limitedEls = null)
        },
        renderMoreLink: function(b, c, d) {
            var e = this,
                f = this.view;
            return a('<a class="fc-more"/>').text(this.getMoreLinkText(d.length)).on("click", function(g) {
                var h = f.opt("eventLimitClick"),
                    i = e.getCellDate(b, c),
                    j = a(this),
                    k = e.getCellEl(b, c),
                    l = e.getCellSegs(b, c),
                    m = e.resliceDaySegs(l, i),
                    n = e.resliceDaySegs(d, i);
                "function" == typeof h && (h = f.trigger("eventLimitClick", null, {
                    date: i,
                    dayEl: k,
                    moreEl: j,
                    segs: m,
                    hiddenSegs: n
                }, g)), "popover" === h ? e.showSegPopover(b, c, j, m) : "string" == typeof h && f.calendar.zoomTo(i, h)
            })
        },
        showSegPopover: function(a, b, c, d) {
            var e, f, g = this,
                h = this.view,
                i = c.parent();
            e = 1 == this.rowCnt ? h.el : this.rowEls.eq(a), f = {
                className: "fc-more-popover",
                content: this.renderSegPopoverContent(a, b, d),
                parentEl: this.el,
                top: e.offset().top,
                autoHide: !0,
                viewportConstrain: h.opt("popoverViewportConstrain"),
                hide: function() {
                    g.segPopover.removeElement(), g.segPopover = null, g.popoverSegs = null
                }
            }, this.isRTL ? f.right = i.offset().left + i.outerWidth() + 1 : f.left = i.offset().left - 1, this.segPopover = new fb(f), this.segPopover.show()
        },
        renderSegPopoverContent: function(b, c, d) {
            var e, f = this.view,
                g = f.opt("theme"),
                h = this.getCellDate(b, c).format(f.opt("dayPopoverFormat")),
                i = a('<div class="fc-header ' + f.widgetHeaderClass + '"><span class="fc-close ' + (g ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"></span><span class="fc-title">' + Y(h) + '</span><div class="fc-clear"/></div><div class="fc-body ' + f.widgetContentClass + '"><div class="fc-event-container"></div></div>'),
                j = i.find(".fc-event-container");
            for (d = this.renderFgSegEls(d, !0), this.popoverSegs = d, e = 0; e < d.length; e++) this.prepareHits(), d[e].hit = this.getCellHit(b, c), this.releaseHits(), j.append(d[e].el);
            return i
        },
        resliceDaySegs: function(b, c) {
            var d = a.map(b, function(a) {
                    return a.event
                }),
                e = c.clone(),
                f = e.clone().add(1, "days"),
                g = {
                    start: e,
                    end: f
                };
            return b = this.eventsToSegs(d, function(a) {
                var b = E(a, g);
                return b ? [b] : []
            }), this.sortEventSegs(b), b
        },
        getMoreLinkText: function(a) {
            var b = this.view.opt("eventLimitText");
            return "function" == typeof b ? b(a) : "+" + a + " " + b
        },
        getCellSegs: function(a, b, c) {
            for (var d, e = this.rowStructs[a].segMatrix, f = c || 0, g = []; f < e.length;) d = e[f][b], d && g.push(d), f++;
            return g
        }
    });
    var nb = Pa.TimeGrid = kb.extend(lb, {
        slotDuration: null,
        snapDuration: null,
        snapsPerSlot: null,
        minTime: null,
        maxTime: null,
        labelFormat: null,
        labelInterval: null,
        colEls: null,
        slatEls: null,
        nowIndicatorEls: null,
        colCoordCache: null,
        slatCoordCache: null,
        constructor: function() {
            kb.apply(this, arguments), this.processOptions()
        },
        renderDates: function() {
            this.el.html(this.renderHtml()), this.colEls = this.el.find(".fc-day"), this.slatEls = this.el.find(".fc-slats tr"), this.colCoordCache = new gb({
                els: this.colEls,
                isHorizontal: !0
            }), this.slatCoordCache = new gb({
                els: this.slatEls,
                isVertical: !0
            }), this.renderContentSkeleton()
        },
        renderHtml: function() {
            return '<div class="fc-bg"><table>' + this.renderBgTrHtml(0) + '</table></div><div class="fc-slats"><table>' + this.renderSlatRowHtml() + "</table></div>"
        },
        renderSlatRowHtml: function() {
            for (var a, c, d, e = this.view, f = this.isRTL, g = "", h = b.duration(+this.minTime); h < this.maxTime;) a = this.start.clone().time(h), c = ba(L(h, this.labelInterval)), d = '<td class="fc-axis fc-time ' + e.widgetContentClass + '" ' + e.axisStyleAttr() + ">" + (c ? "<span>" + Y(a.format(this.labelFormat)) + "</span>" : "") + "</td>", g += '<tr data-time="' + a.format("HH:mm:ss") + '"' + (c ? "" : ' class="fc-minor"') + ">" + (f ? "" : d) + '<td class="' + e.widgetContentClass + '"/>' + (f ? d : "") + "</tr>", h.add(this.slotDuration);
            return g
        },
        processOptions: function() {
            var c, d = this.view,
                e = d.opt("slotDuration"),
                f = d.opt("snapDuration");
            e = b.duration(e), f = f ? b.duration(f) : e, this.slotDuration = e, this.snapDuration = f, this.snapsPerSlot = e / f, this.minResizeDuration = f, this.minTime = b.duration(d.opt("minTime")), this.maxTime = b.duration(d.opt("maxTime")), c = d.opt("slotLabelFormat"), a.isArray(c) && (c = c[c.length - 1]), this.labelFormat = c || d.opt("axisFormat") || d.opt("smallTimeFormat"), c = d.opt("slotLabelInterval"), this.labelInterval = c ? b.duration(c) : this.computeLabelInterval(e)
        },
        computeLabelInterval: function(a) {
            var c, d, e;
            for (c = Db.length - 1; c >= 0; c--)
                if (d = b.duration(Db[c]), e = L(d, a), ba(e) && e > 1) return d;
            return b.duration(a)
        },
        computeEventTimeFormat: function() {
            return this.view.opt("noMeridiemTimeFormat")
        },
        computeDisplayEventEnd: function() {
            return !0
        },
        prepareHits: function() {
            this.colCoordCache.build(), this.slatCoordCache.build()
        },
        releaseHits: function() {
            this.colCoordCache.clear()
        },
        queryHit: function(a, b) {
            var c = this.snapsPerSlot,
                d = this.colCoordCache,
                e = this.slatCoordCache,
                f = d.getHorizontalIndex(a),
                g = e.getVerticalIndex(b);
            if (null != f && null != g) {
                var h = e.getTopOffset(g),
                    i = e.getHeight(g),
                    j = (b - h) / i,
                    k = Math.floor(j * c),
                    l = g * c + k,
                    m = h + k / c * i,
                    n = h + (k + 1) / c * i;
                return {
                    col: f,
                    snap: l,
                    component: this,
                    left: d.getLeftOffset(f),
                    right: d.getRightOffset(f),
                    top: m,
                    bottom: n
                }
            }
        },
        getHitSpan: function(a) {
            var b, c = this.getCellDate(0, a.col),
                d = this.computeSnapTime(a.snap);
            return c.time(d), b = c.clone().add(this.snapDuration), {
                start: c,
                end: b
            }
        },
        getHitEl: function(a) {
            return this.colEls.eq(a.col)
        },
        rangeUpdated: function() {
            this.updateDayTable()
        },
        computeSnapTime: function(a) {
            return b.duration(this.minTime + this.snapDuration * a)
        },
        spanToSegs: function(a) {
            var b, c = this.sliceRangeByTimes(a);
            for (b = 0; b < c.length; b++) this.isRTL ? c[b].col = this.daysPerRow - 1 - c[b].dayIndex : c[b].col = c[b].dayIndex;
            return c
        },
        sliceRangeByTimes: function(a) {
            var b, c, d, e, f = [];
            for (c = 0; c < this.daysPerRow; c++) d = this.dayDates[c].clone(), e = {
                start: d.clone().time(this.minTime),
                end: d.clone().time(this.maxTime)
            }, b = E(a, e), b && (b.dayIndex = c, f.push(b));
            return f
        },
        updateSize: function(a) {
            this.slatCoordCache.build(), a && this.updateSegVerticals([].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || []))
        },
        computeDateTop: function(a, c) {
            return this.computeTimeTop(b.duration(a - c.clone().stripTime()))
        },
        computeTimeTop: function(a) {
            var b, c, d = this.slatEls.length,
                e = (a - this.minTime) / this.slotDuration;
            return e = Math.max(0, e), e = Math.min(d, e), b = Math.floor(e), b = Math.min(b, d - 1), c = e - b, this.slatCoordCache.getTopPosition(b) + this.slatCoordCache.getHeight(b) * c
        },
        renderDrag: function(a, b) {
            if (b) {
                this.renderEventLocationHelper(a, b);
                for (var c = 0; c < this.helperSegs.length; c++) this.applyDragOpacity(this.helperSegs[c].el);
                return !0
            }
            this.renderHighlight(this.eventToSpan(a))
        },
        unrenderDrag: function() {
            this.unrenderHelper(), this.unrenderHighlight()
        },
        renderEventResize: function(a, b) {
            this.renderEventLocationHelper(a, b)
        },
        unrenderEventResize: function() {
            this.unrenderHelper()
        },
        renderHelper: function(a, b) {
            this.renderHelperSegs(this.eventToSegs(a), b)
        },
        unrenderHelper: function() {
            this.unrenderHelperSegs()
        },
        renderBusinessHours: function() {
            var a = this.view.calendar.getBusinessHoursEvents(),
                b = this.eventsToSegs(a);
            this.renderBusinessSegs(b)
        },
        unrenderBusinessHours: function() {
            this.unrenderBusinessSegs()
        },
        getNowIndicatorUnit: function() {
            return "minute"
        },
        renderNowIndicator: function(b) {
            var c, d = this.spanToSegs({
                    start: b,
                    end: b
                }),
                e = this.computeDateTop(b, b),
                f = [];
            for (c = 0; c < d.length; c++) f.push(a('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", e).appendTo(this.colContainerEls.eq(d[c].col))[0]);
            d.length > 0 && f.push(a('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", e).appendTo(this.el.find(".fc-content-skeleton"))[0]), this.nowIndicatorEls = a(f)
        },
        unrenderNowIndicator: function() {
            this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null)
        },
        renderSelection: function(a) {
            this.view.opt("selectHelper") ? this.renderEventLocationHelper(a) : this.renderHighlight(a)
        },
        unrenderSelection: function() {
            this.unrenderHelper(), this.unrenderHighlight()
        },
        renderHighlight: function(a) {
            this.renderHighlightSegs(this.spanToSegs(a))
        },
        unrenderHighlight: function() {
            this.unrenderHighlightSegs()
        }
    });
    nb.mixin({
        colContainerEls: null,
        fgContainerEls: null,
        bgContainerEls: null,
        helperContainerEls: null,
        highlightContainerEls: null,
        businessContainerEls: null,
        fgSegs: null,
        bgSegs: null,
        helperSegs: null,
        highlightSegs: null,
        businessSegs: null,
        renderContentSkeleton: function() {
            var b, c, d = "";
            for (b = 0; b < this.colCnt; b++) d += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
            c = a('<div class="fc-content-skeleton"><table><tr>' + d + "</tr></table></div>"), this.colContainerEls = c.find(".fc-content-col"), this.helperContainerEls = c.find(".fc-helper-container"), this.fgContainerEls = c.find(".fc-event-container:not(.fc-helper-container)"), this.bgContainerEls = c.find(".fc-bgevent-container"), this.highlightContainerEls = c.find(".fc-highlight-container"), this.businessContainerEls = c.find(".fc-business-container"), this.bookendCells(c.find("tr")), this.el.append(c)
        },
        renderFgSegs: function(a) {
            return a = this.renderFgSegsIntoContainers(a, this.fgContainerEls), this.fgSegs = a, a
        },
        unrenderFgSegs: function() {
            this.unrenderNamedSegs("fgSegs")
        },
        renderHelperSegs: function(a, b) {
            var c, d, e;
            for (a = this.renderFgSegsIntoContainers(a, this.helperContainerEls), c = 0; c < a.length; c++) d = a[c], b && b.col === d.col && (e = b.el, d.el.css({
                left: e.css("left"),
                right: e.css("right"),
                "margin-left": e.css("margin-left"),
                "margin-right": e.css("margin-right")
            }));
            this.helperSegs = a
        },
        unrenderHelperSegs: function() {
            this.unrenderNamedSegs("helperSegs")
        },
        renderBgSegs: function(a) {
            return a = this.renderFillSegEls("bgEvent", a), this.updateSegVerticals(a), this.attachSegsByCol(this.groupSegsByCol(a), this.bgContainerEls), this.bgSegs = a, a
        },
        unrenderBgSegs: function() {
            this.unrenderNamedSegs("bgSegs")
        },
        renderHighlightSegs: function(a) {
            a = this.renderFillSegEls("highlight", a), this.updateSegVerticals(a), this.attachSegsByCol(this.groupSegsByCol(a), this.highlightContainerEls), this.highlightSegs = a
        },
        unrenderHighlightSegs: function() {
            this.unrenderNamedSegs("highlightSegs")
        },
        renderBusinessSegs: function(a) {
            a = this.renderFillSegEls("businessHours", a), this.updateSegVerticals(a), this.attachSegsByCol(this.groupSegsByCol(a), this.businessContainerEls), this.businessSegs = a
        },
        unrenderBusinessSegs: function() {
            this.unrenderNamedSegs("businessSegs")
        },
        groupSegsByCol: function(a) {
            var b, c = [];
            for (b = 0; b < this.colCnt; b++) c.push([]);
            for (b = 0; b < a.length; b++) c[a[b].col].push(a[b]);
            return c
        },
        attachSegsByCol: function(a, b) {
            var c, d, e;
            for (c = 0; c < this.colCnt; c++)
                for (d = a[c], e = 0; e < d.length; e++) b.eq(c).append(d[e].el)
        },
        unrenderNamedSegs: function(a) {
            var b, c = this[a];
            if (c) {
                for (b = 0; b < c.length; b++) c[b].el.remove();
                this[a] = null
            }
        },
        renderFgSegsIntoContainers: function(a, b) {
            var c, d;
            for (a = this.renderFgSegEls(a), c = this.groupSegsByCol(a), d = 0; d < this.colCnt; d++) this.updateFgSegCoords(c[d]);
            return this.attachSegsByCol(c, b), a
        },
        fgSegHtml: function(a, b) {
            var c, d, e, f = this.view,
                g = a.event,
                h = f.isEventDraggable(g),
                i = !b && a.isStart && f.isEventResizableFromStart(g),
                j = !b && a.isEnd && f.isEventResizableFromEnd(g),
                k = this.getSegClasses(a, h, i || j),
                l = $(this.getSegSkinCss(a));
            return k.unshift("fc-time-grid-event", "fc-v-event"), f.isMultiDayEvent(g) ? (a.isStart || a.isEnd) && (c = this.getEventTimeText(a), d = this.getEventTimeText(a, "LT"), e = this.getEventTimeText(a, null, !1)) : (c = this.getEventTimeText(g), d = this.getEventTimeText(g, "LT"), e = this.getEventTimeText(g, null, !1)), '<a class="' + k.join(" ") + '"' + (g.url ? ' href="' + Y(g.url) + '"' : "") + (l ? ' style="' + l + '"' : "") + '><div class="fc-content">' + (c ? '<div class="fc-time" data-start="' + Y(e) + '" data-full="' + Y(d) + '"><span>' + Y(c) + "</span></div>" : "") + (g.title ? '<div class="fc-title">' + Y(g.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (j ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        updateSegVerticals: function(a) {
            this.computeSegVerticals(a), this.assignSegVerticals(a)
        },
        computeSegVerticals: function(a) {
            var b, c;
            for (b = 0; b < a.length; b++) c = a[b], c.top = this.computeDateTop(c.start, c.start), c.bottom = this.computeDateTop(c.end, c.start)
        },
        assignSegVerticals: function(a) {
            var b, c;
            for (b = 0; b < a.length; b++) c = a[b], c.el.css(this.generateSegVerticalCss(c))
        },
        generateSegVerticalCss: function(a) {
            return {
                top: a.top,
                bottom: -a.bottom
            }
        },
        updateFgSegCoords: function(a) {
            this.computeSegVerticals(a), this.computeFgSegHorizontals(a), this.assignSegVerticals(a), this.assignFgSegHorizontals(a)
        },
        computeFgSegHorizontals: function(a) {
            var b, c, d;
            if (this.sortEventSegs(a), b = Ea(a), Fa(b), c = b[0]) {
                for (d = 0; d < c.length; d++) Ga(c[d]);
                for (d = 0; d < c.length; d++) this.computeFgSegForwardBack(c[d], 0, 0)
            }
        },
        computeFgSegForwardBack: function(a, b, c) {
            var d, e = a.forwardSegs;
            if (void 0 === a.forwardCoord)
                for (e.length ? (this.sortForwardSegs(e), this.computeFgSegForwardBack(e[0], b + 1, c), a.forwardCoord = e[0].backwardCoord) : a.forwardCoord = 1, a.backwardCoord = a.forwardCoord - (a.forwardCoord - c) / (b + 1), d = 0; d < e.length; d++) this.computeFgSegForwardBack(e[d], 0, a.forwardCoord)
        },
        sortForwardSegs: function(a) {
            a.sort(ca(this, "compareForwardSegs"))
        },
        compareForwardSegs: function(a, b) {
            return b.forwardPressure - a.forwardPressure || (a.backwardCoord || 0) - (b.backwardCoord || 0) || this.compareEventSegs(a, b)
        },
        assignFgSegHorizontals: function(a) {
            var b, c;
            for (b = 0; b < a.length; b++) c = a[b], c.el.css(this.generateFgSegHorizontalCss(c)), c.bottom - c.top < 30 && c.el.addClass("fc-short")
        },
        generateFgSegHorizontalCss: function(a) {
            var b, c, d = this.view.opt("slotEventOverlap"),
                e = a.backwardCoord,
                f = a.forwardCoord,
                g = this.generateSegVerticalCss(a);
            return d && (f = Math.min(1, e + 2 * (f - e))), this.isRTL ? (b = 1 - f, c = e) : (b = e, c = 1 - f), g.zIndex = a.level + 1, g.left = 100 * b + "%", g.right = 100 * c + "%", d && a.forwardPressure && (g[this.isRTL ? "marginLeft" : "marginRight"] = 20), g
        }
    });
    var ob = Pa.View = ra.extend({
            type: null,
            name: null,
            title: null,
            calendar: null,
            options: null,
            el: null,
            displaying: null,
            isSkeletonRendered: !1,
            isEventsRendered: !1,
            start: null,
            end: null,
            intervalStart: null,
            intervalEnd: null,
            intervalDuration: null,
            intervalUnit: null,
            isRTL: !1,
            isSelected: !1,
            eventOrderSpecs: null,
            scrollerEl: null,
            scrollTop: null,
            widgetHeaderClass: null,
            widgetContentClass: null,
            highlightStateClass: null,
            nextDayThreshold: null,
            isHiddenDayHash: null,
            documentMousedownProxy: null,
            isNowIndicatorRendered: null,
            initialNowDate: null,
            initialNowQueriedMs: null,
            nowIndicatorTimeoutID: null,
            nowIndicatorIntervalID: null,
            constructor: function(a, c, d, e) {
                this.calendar = a, this.type = this.name = c, this.options = d, this.intervalDuration = e || b.duration(1, "day"), this.nextDayThreshold = b.duration(this.opt("nextDayThreshold")), this.initThemingProps(), this.initHiddenDays(), this.isRTL = this.opt("isRTL"), this.eventOrderSpecs = A(this.opt("eventOrder")), this.documentMousedownProxy = ca(this, "documentMousedown"), this.initialize()
            },
            initialize: function() {},
            opt: function(a) {
                return this.options[a]
            },
            trigger: function(a, b) {
                var c = this.calendar;
                return c.trigger.apply(c, [a, b || this].concat(Array.prototype.slice.call(arguments, 2), [this]))
            },
            setDate: function(a) {
                this.setRange(this.computeRange(a))
            },
            setRange: function(b) {
                a.extend(this, b), this.updateTitle()
            },
            computeRange: function(a) {
                var b, c, d = I(this.intervalDuration),
                    e = a.clone().startOf(d),
                    f = e.clone().add(this.intervalDuration);
                return /year|month|week|day/.test(d) ? (e.stripTime(), f.stripTime()) : (e.hasTime() || (e = this.calendar.time(0)), f.hasTime() || (f = this.calendar.time(0))), b = e.clone(), b = this.skipHiddenDays(b), c = f.clone(), c = this.skipHiddenDays(c, -1, !0), {
                    intervalUnit: d,
                    intervalStart: e,
                    intervalEnd: f,
                    start: b,
                    end: c
                }
            },
            computePrevDate: function(a) {
                return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).subtract(this.intervalDuration), -1)
            },
            computeNextDate: function(a) {
                return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).add(this.intervalDuration))
            },
            massageCurrentDate: function(a, b) {
                return this.intervalDuration.as("days") <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, b), a.startOf("day")), a
            },
            updateTitle: function() {
                this.title = this.computeTitle()
            },
            computeTitle: function() {
                return this.formatRange({
                    start: this.calendar.applyTimezone(this.intervalStart),
                    end: this.calendar.applyTimezone(this.intervalEnd)
                }, this.opt("titleFormat") || this.computeTitleFormat(), this.opt("titleRangeSeparator"))
            },
            computeTitleFormat: function() {
                return "year" == this.intervalUnit ? "YYYY" : "month" == this.intervalUnit ? this.opt("monthYearFormat") : this.intervalDuration.as("days") > 1 ? "ll" : "LL"
            },
            formatRange: function(a, b, c) {
                var d = a.end;
                return d.hasTime() || (d = d.clone().subtract(1)), ma(a.start, d, b, c, this.opt("isRTL"))
            },
            setElement: function(a) {
                this.el = a, this.bindGlobalHandlers()
            },
            removeElement: function() {
                this.clear(), this.isSkeletonRendered && (this.unrenderSkeleton(), this.isSkeletonRendered = !1), this.unbindGlobalHandlers(), this.el.remove()
            },
            display: function(b) {
                var c = this,
                    d = null;
                return this.displaying && (d = this.queryScroll()), this.calendar.freezeContentHeight(), this.clear().then(function() {
                    return c.displaying = a.when(c.displayView(b)).then(function() {
                        c.forceScroll(c.computeInitialScroll(d)), c.calendar.unfreezeContentHeight(), c.triggerRender()
                    })
                })
            },
            clear: function() {
                var b = this,
                    c = this.displaying;
                return c ? c.then(function() {
                    return b.displaying = null, b.clearEvents(), b.clearView()
                }) : a.when()
            },
            displayView: function(a) {
                this.isSkeletonRendered || (this.renderSkeleton(), this.isSkeletonRendered = !0), a && this.setDate(a), this.render && this.render(), this.renderDates(), this.updateSize(), this.renderBusinessHours(), this.startNowIndicator()
            },
            clearView: function() {
                this.unselect(), this.stopNowIndicator(), this.triggerUnrender(), this.unrenderBusinessHours(), this.unrenderDates(), this.destroy && this.destroy()
            },
            renderSkeleton: function() {},
            unrenderSkeleton: function() {},
            renderDates: function() {},
            unrenderDates: function() {},
            triggerRender: function() {
                this.trigger("viewRender", this, this, this.el)
            },
            triggerUnrender: function() {
                this.trigger("viewDestroy", this, this, this.el)
            },
            bindGlobalHandlers: function() {
                a(document).on("mousedown", this.documentMousedownProxy)
            },
            unbindGlobalHandlers: function() {
                a(document).off("mousedown", this.documentMousedownProxy)
            },
            initThemingProps: function() {
                var a = this.opt("theme") ? "ui" : "fc";
                this.widgetHeaderClass = a + "-widget-header", this.widgetContentClass = a + "-widget-content", this.highlightStateClass = a + "-state-highlight"
            },
            renderBusinessHours: function() {},
            unrenderBusinessHours: function() {},
            startNowIndicator: function() {
                var a, c, d, e = this;
                this.opt("nowIndicator") && (a = this.getNowIndicatorUnit(), a && (c = ca(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = +new Date, this.renderNowIndicator(this.initialNowDate), this.isNowIndicatorRendered = !0, d = this.initialNowDate.clone().startOf(a).add(1, a) - this.initialNowDate, this.nowIndicatorTimeoutID = setTimeout(function() {
                    e.nowIndicatorTimeoutID = null, c(), d = +b.duration(1, a), d = Math.max(100, d), e.nowIndicatorIntervalID = setInterval(c, d)
                }, d)))
            },
            updateNowIndicator: function() {
                this.isNowIndicatorRendered && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add(new Date - this.initialNowQueriedMs)))
            },
            stopNowIndicator: function() {
                this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearTimeout(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1)
            },
            getNowIndicatorUnit: function() {},
            renderNowIndicator: function(a) {},
            unrenderNowIndicator: function() {},
            updateSize: function(a) {
                var b;
                a && (b = this.queryScroll()), this.updateHeight(a), this.updateWidth(a), this.updateNowIndicator(), a && this.setScroll(b)
            },
            updateWidth: function(a) {},
            updateHeight: function(a) {
                var b = this.calendar;
                this.setHeight(b.getSuggestedViewHeight(), b.isHeightAuto())
            },
            setHeight: function(a, b) {},
            computeScrollerHeight: function(a) {
                var b, c, d = this.scrollerEl;
                return b = this.el.add(d), b.css({
                    position: "relative",
                    left: -1
                }), c = this.el.outerHeight() - d.height(), b.css({
                    position: "",
                    left: ""
                }), a - c
            },
            computeInitialScroll: function(a) {
                return 0
            },
            queryScroll: function() {
                return this.scrollerEl ? this.scrollerEl.scrollTop() : void 0
            },
            setScroll: function(a) {
                return this.scrollerEl ? this.scrollerEl.scrollTop(a) : void 0
            },
            forceScroll: function(a) {
                var b = this;
                this.setScroll(a), setTimeout(function() {
                    b.setScroll(a)
                }, 0)
            },
            displayEvents: function(a) {
                var b = this.queryScroll();
                this.clearEvents(), this.renderEvents(a), this.isEventsRendered = !0, this.setScroll(b), this.triggerEventRender()
            },
            clearEvents: function() {
                var a;
                this.isEventsRendered && (a = this.queryScroll(), this.triggerEventUnrender(), this.destroyEvents && this.destroyEvents(), this.unrenderEvents(), this.setScroll(a), this.isEventsRendered = !1)
            },
            renderEvents: function(a) {},
            unrenderEvents: function() {},
            triggerEventRender: function() {
                this.renderedEventSegEach(function(a) {
                    this.trigger("eventAfterRender", a.event, a.event, a.el)
                }), this.trigger("eventAfterAllRender")
            },
            triggerEventUnrender: function() {
                this.renderedEventSegEach(function(a) {
                    this.trigger("eventDestroy", a.event, a.event, a.el)
                })
            },
            resolveEventEl: function(b, c) {
                var d = this.trigger("eventRender", b, b, c);
                return d === !1 ? c = null : d && d !== !0 && (c = a(d)), c
            },
            showEvent: function(a) {
                this.renderedEventSegEach(function(a) {
                    a.el.css("visibility", "")
                }, a)
            },
            hideEvent: function(a) {
                this.renderedEventSegEach(function(a) {
                    a.el.css("visibility", "hidden")
                }, a)
            },
            renderedEventSegEach: function(a, b) {
                var c, d = this.getEventSegs();
                for (c = 0; c < d.length; c++) b && d[c].event._id !== b._id || d[c].el && a.call(this, d[c])
            },
            getEventSegs: function() {
                return []
            },
            isEventDraggable: function(a) {
                var b = a.source || {};
                return X(a.startEditable, b.startEditable, this.opt("eventStartEditable"), a.editable, b.editable, this.opt("editable"))
            },
            reportEventDrop: function(a, b, c, d, e) {
                var f = this.calendar,
                    g = f.mutateEvent(a, b, c),
                    h = function() {
                        g.undo(), f.reportEventChange()
                    };
                this.triggerEventDrop(a, g.dateDelta, h, d, e), f.reportEventChange()
            },
            triggerEventDrop: function(a, b, c, d, e) {
                this.trigger("eventDrop", d[0], a, b, c, e, {})
            },
            reportExternalDrop: function(b, c, d, e, f) {
                var g, h, i = b.eventProps;
                i && (g = a.extend({}, i, c), h = this.calendar.renderEvent(g, b.stick)[0]), this.triggerExternalDrop(h, c, d, e, f)
            },
            triggerExternalDrop: function(a, b, c, d, e) {
                this.trigger("drop", c[0], b.start, d, e), a && this.trigger("eventReceive", null, a)
            },
            renderDrag: function(a, b) {},
            unrenderDrag: function() {},
            isEventResizableFromStart: function(a) {
                return this.opt("eventResizableFromStart") && this.isEventResizable(a)
            },
            isEventResizableFromEnd: function(a) {
                return this.isEventResizable(a)
            },
            isEventResizable: function(a) {
                var b = a.source || {};
                return X(a.durationEditable, b.durationEditable, this.opt("eventDurationEditable"), a.editable, b.editable, this.opt("editable"))
            },
            reportEventResize: function(a, b, c, d, e) {
                var f = this.calendar,
                    g = f.mutateEvent(a, b, c),
                    h = function() {
                        g.undo(), f.reportEventChange()
                    };
                this.triggerEventResize(a, g.durationDelta, h, d, e), f.reportEventChange()
            },
            triggerEventResize: function(a, b, c, d, e) {
                this.trigger("eventResize", d[0], a, b, c, e, {})
            },
            select: function(a, b) {
                this.unselect(b), this.renderSelection(a), this.reportSelection(a, b)
            },
            renderSelection: function(a) {},
            reportSelection: function(a, b) {
                this.isSelected = !0, this.triggerSelect(a, b)
            },
            triggerSelect: function(a, b) {
                this.trigger("select", null, this.calendar.applyTimezone(a.start), this.calendar.applyTimezone(a.end), b)
            },
            unselect: function(a) {
                this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.trigger("unselect", null, a))
            },
            unrenderSelection: function() {},
            documentMousedown: function(b) {
                var c;
                this.isSelected && this.opt("unselectAuto") && v(b) && (c = this.opt("unselectCancel"), c && a(b.target).closest(c).length || this.unselect(b))
            },
            triggerDayClick: function(a, b, c) {
                this.trigger("dayClick", b, this.calendar.applyTimezone(a.start), c)
            },
            initHiddenDays: function() {
                var b, c = this.opt("hiddenDays") || [],
                    d = [],
                    e = 0;
                for (this.opt("weekends") === !1 && c.push(0, 6), b = 0; 7 > b; b++)(d[b] = -1 !== a.inArray(b, c)) || e++;
                if (!e) throw "invalid hiddenDays";
                this.isHiddenDayHash = d
            },
            isHiddenDay: function(a) {
                return b.isMoment(a) && (a = a.day()), this.isHiddenDayHash[a]
            },
            skipHiddenDays: function(a, b, c) {
                var d = a.clone();
                for (b = b || 1; this.isHiddenDayHash[(d.day() + (c ? b : 0) + 7) % 7];) d.add(b, "days");
                return d
            },
            computeDayRange: function(a) {
                var b, c = a.start.clone().stripTime(),
                    d = a.end,
                    e = null;
                return d && (e = d.clone().stripTime(), b = +d.time(), b && b >= this.nextDayThreshold && e.add(1, "days")), (!d || c >= e) && (e = c.clone().add(1, "days")), {
                    start: c,
                    end: e
                }
            },
            isMultiDayEvent: function(a) {
                var b = this.computeDayRange(a);
                return b.end.diff(b.start, "days") > 1
            }
        }),
        pb = Pa.Calendar = ra.extend({
            dirDefaults: null,
            langDefaults: null,
            overrides: null,
            options: null,
            viewSpecCache: null,
            view: null,
            header: null,
            loadingLevel: 0,
            constructor: Ja,
            initialize: function() {},
            initOptions: function(a) {
                var b, e, f, g;
                a = d(a), b = a.lang, e = qb[b], e || (b = pb.defaults.lang, e = qb[b] || {}), f = X(a.isRTL, e.isRTL, pb.defaults.isRTL), g = f ? pb.rtlDefaults : {}, this.dirDefaults = g, this.langDefaults = e, this.overrides = a, this.options = c([pb.defaults, g, e, a]), Ka(this.options), this.viewSpecCache = {}
            },
            getViewSpec: function(a) {
                var b = this.viewSpecCache;
                return b[a] || (b[a] = this.buildViewSpec(a))
            },
            getUnitViewSpec: function(b) {
                var c, d, e;
                if (-1 != a.inArray(b, Ua))
                    for (c = this.header.getViewsWithButtons(), a.each(Pa.views, function(a) {
                            c.push(a)
                        }), d = 0; d < c.length; d++)
                        if (e = this.getViewSpec(c[d]), e && e.singleUnit == b) return e
            },
            buildViewSpec: function(a) {
                for (var d, e, f, g, h = this.overrides.views || {}, i = [], j = [], k = [], l = a; l;) d = Qa[l], e = h[l], l = null, "function" == typeof d && (d = {
                    "class": d
                }), d && (i.unshift(d), j.unshift(d.defaults || {}), f = f || d.duration, l = l || d.type), e && (k.unshift(e), f = f || e.duration, l = l || e.type);
                return d = Q(i), d.type = a, d["class"] ? (f && (f = b.duration(f), f.valueOf() && (d.duration = f, g = I(f), 1 === f.as(g) && (d.singleUnit = g, k.unshift(h[g] || {})))), d.defaults = c(j), d.overrides = c(k), this.buildViewSpecOptions(d), this.buildViewSpecButtonText(d, a), d) : !1
            },
            buildViewSpecOptions: function(a) {
                a.options = c([pb.defaults, a.defaults, this.dirDefaults, this.langDefaults, this.overrides, a.overrides]), Ka(a.options)
            },
            buildViewSpecButtonText: function(a, b) {
                function c(c) {
                    var d = c.buttonText || {};
                    return d[b] || (a.singleUnit ? d[a.singleUnit] : null)
                }
                a.buttonTextOverride = c(this.overrides) || a.overrides.buttonText, a.buttonTextDefault = c(this.langDefaults) || c(this.dirDefaults) || a.defaults.buttonText || c(pb.defaults) || (a.duration ? this.humanizeDuration(a.duration) : null) || b
            },
            instantiateView: function(a) {
                var b = this.getViewSpec(a);
                return new b["class"](this, a, b.options, b.duration)
            },
            isValidViewType: function(a) {
                return Boolean(this.getViewSpec(a))
            },
            pushLoading: function() {
                this.loadingLevel++ || this.trigger("loading", null, !0, this.view)
            },
            popLoading: function() {
                --this.loadingLevel || this.trigger("loading", null, !1, this.view)
            },
            buildSelectSpan: function(a, b) {
                var c, d = this.moment(a).stripZone();
                return c = b ? this.moment(b).stripZone() : d.hasTime() ? d.clone().add(this.defaultTimedEventDuration) : d.clone().add(this.defaultAllDayEventDuration), {
                    start: d,
                    end: c
                }
            }
        });
    pb.mixin(eb), pb.defaults = {
        titleRangeSeparator: " — ",
        monthYearFormat: "MMMM YYYY",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        scrollTime: "06:00:00",
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        isRTL: !1,
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "title",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 200
    }, pb.englishDefaults = {
        dayPopoverFormat: "dddd, MMMM D"
    }, pb.rtlDefaults = {
        header: {
            left: "next,prev today",
            center: "",
            right: "title"
        },
        buttonIcons: {
            prev: "right-single-arrow",
            next: "left-single-arrow",
            prevYear: "right-double-arrow",
            nextYear: "left-double-arrow"
        },
        themeButtonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w",
            nextYear: "seek-prev",
            prevYear: "seek-next"
        }
    };
    var qb = Pa.langs = {};
    Pa.datepickerLang = function(b, c, d) {
        var e = qb[b] || (qb[b] = {});
        e.isRTL = d.isRTL, e.weekNumberTitle = d.weekHeader, a.each(rb, function(a, b) {
            e[a] = b(d)
        }), a.datepicker && (a.datepicker.regional[c] = a.datepicker.regional[b] = d, a.datepicker.regional.en = a.datepicker.regional[""], a.datepicker.setDefaults(d))
    }, Pa.lang = function(b, d) {
        var e, f;
        e = qb[b] || (qb[b] = {}), d && (e = qb[b] = c([e, d])), f = La(b), a.each(sb, function(a, b) {
            null == e[a] && (e[a] = b(f, e))
        }), pb.defaults.lang = b
    };
    var rb = {
            buttonText: function(a) {
                return {
                    prev: Z(a.prevText),
                    next: Z(a.nextText),
                    today: Z(a.currentText)
                }
            },
            monthYearFormat: function(a) {
                return a.showMonthAfterYear ? "YYYY[" + a.yearSuffix + "] MMMM" : "MMMM YYYY[" + a.yearSuffix + "]"
            }
        },
        sb = {
            dayOfMonthFormat: function(a, b) {
                var c = a.longDateFormat("l");
                return c = c.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), b.isRTL ? c += " ddd" : c = "ddd " + c, c
            },
            mediumTimeFormat: function(a) {
                return a.longDateFormat("LT").replace(/\s*a$/i, "a")
            },
            smallTimeFormat: function(a) {
                return a.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a");
            },
            extraSmallTimeFormat: function(a) {
                return a.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
            },
            hourFormat: function(a) {
                return a.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
            },
            noMeridiemTimeFormat: function(a) {
                return a.longDateFormat("LT").replace(/\s*a$/i, "")
            }
        },
        tb = {
            smallDayDateFormat: function(a) {
                return a.isRTL ? "D dd" : "dd D"
            },
            weekFormat: function(a) {
                return a.isRTL ? "w[ " + a.weekNumberTitle + "]" : "[" + a.weekNumberTitle + " ]w"
            },
            smallWeekFormat: function(a) {
                return a.isRTL ? "w[" + a.weekNumberTitle + "]" : "[" + a.weekNumberTitle + "]w"
            }
        };
    Pa.lang("en", pb.englishDefaults), Pa.sourceNormalizers = [], Pa.sourceFetchers = [];
    var ub = {
            dataType: "json",
            cache: !1
        },
        vb = 1;
    pb.prototype.getPeerEvents = function(a, b) {
        var c, d, e = this.getEventCache(),
            f = [];
        for (c = 0; c < e.length; c++) d = e[c], b && b._id === d._id || f.push(d);
        return f
    };
    var wb = Pa.BasicView = ob.extend({
            dayGridClass: mb,
            dayGrid: null,
            dayNumbersVisible: !1,
            weekNumbersVisible: !1,
            weekNumberWidth: null,
            headContainerEl: null,
            headRowEl: null,
            initialize: function() {
                this.dayGrid = this.instantiateDayGrid()
            },
            instantiateDayGrid: function() {
                var a = this.dayGridClass.extend(xb);
                return new a(this)
            },
            setRange: function(a) {
                ob.prototype.setRange.call(this, a), this.dayGrid.breakOnWeeks = /year|month|week/.test(this.intervalUnit), this.dayGrid.setRange(a)
            },
            computeRange: function(a) {
                var b = ob.prototype.computeRange.call(this, a);
                return /year|month/.test(b.intervalUnit) && (b.start.startOf("week"), b.start = this.skipHiddenDays(b.start), b.end.weekday() && (b.end.add(1, "week").startOf("week"), b.end = this.skipHiddenDays(b.end, -1, !0))), b
            },
            renderDates: function() {
                this.dayNumbersVisible = this.dayGrid.rowCnt > 1, this.weekNumbersVisible = this.opt("weekNumbers"), this.dayGrid.numbersVisible = this.dayNumbersVisible || this.weekNumbersVisible, this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scrollerEl = this.el.find(".fc-day-grid-container"), this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.renderDates(this.hasRigidRows())
            },
            renderHead: function() {
                this.headContainerEl = this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()), this.headRowEl = this.headContainerEl.find(".fc-row")
            },
            unrenderDates: function() {
                this.dayGrid.unrenderDates(), this.dayGrid.removeElement()
            },
            renderBusinessHours: function() {
                this.dayGrid.renderBusinessHours()
            },
            renderSkeletonHtml: function() {
                return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '"><div class="fc-day-grid-container"><div class="fc-day-grid"/></div></td></tr></tbody></table>'
            },
            weekNumberStyleAttr: function() {
                return null !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
            },
            hasRigidRows: function() {
                var a = this.opt("eventLimit");
                return a && "number" != typeof a
            },
            updateWidth: function() {
                this.weekNumbersVisible && (this.weekNumberWidth = k(this.el.find(".fc-week-number")))
            },
            setHeight: function(a, b) {
                var c, d = this.opt("eventLimit");
                m(this.scrollerEl), f(this.headRowEl), this.dayGrid.removeSegPopover(), d && "number" == typeof d && this.dayGrid.limitRows(d), c = this.computeScrollerHeight(a), this.setGridHeight(c, b), d && "number" != typeof d && this.dayGrid.limitRows(d), !b && l(this.scrollerEl, c) && (e(this.headRowEl, r(this.scrollerEl)), c = this.computeScrollerHeight(a), this.scrollerEl.height(c))
            },
            setGridHeight: function(a, b) {
                b ? j(this.dayGrid.rowEls) : i(this.dayGrid.rowEls, a, !0)
            },
            prepareHits: function() {
                this.dayGrid.prepareHits()
            },
            releaseHits: function() {
                this.dayGrid.releaseHits()
            },
            queryHit: function(a, b) {
                return this.dayGrid.queryHit(a, b)
            },
            getHitSpan: function(a) {
                return this.dayGrid.getHitSpan(a)
            },
            getHitEl: function(a) {
                return this.dayGrid.getHitEl(a)
            },
            renderEvents: function(a) {
                this.dayGrid.renderEvents(a), this.updateHeight()
            },
            getEventSegs: function() {
                return this.dayGrid.getEventSegs()
            },
            unrenderEvents: function() {
                this.dayGrid.unrenderEvents()
            },
            renderDrag: function(a, b) {
                return this.dayGrid.renderDrag(a, b)
            },
            unrenderDrag: function() {
                this.dayGrid.unrenderDrag()
            },
            renderSelection: function(a) {
                this.dayGrid.renderSelection(a)
            },
            unrenderSelection: function() {
                this.dayGrid.unrenderSelection()
            }
        }),
        xb = {
            renderHeadIntroHtml: function() {
                var a = this.view;
                return a.weekNumbersVisible ? '<th class="fc-week-number ' + a.widgetHeaderClass + '" ' + a.weekNumberStyleAttr() + "><span>" + Y(a.opt("weekNumberTitle")) + "</span></th>" : ""
            },
            renderNumberIntroHtml: function(a) {
                var b = this.view;
                return b.weekNumbersVisible ? '<td class="fc-week-number" ' + b.weekNumberStyleAttr() + "><span>" + this.getCellDate(a, 0).format("w") + "</span></td>" : ""
            },
            renderBgIntroHtml: function() {
                var a = this.view;
                return a.weekNumbersVisible ? '<td class="fc-week-number ' + a.widgetContentClass + '" ' + a.weekNumberStyleAttr() + "></td>" : ""
            },
            renderIntroHtml: function() {
                var a = this.view;
                return a.weekNumbersVisible ? '<td class="fc-week-number" ' + a.weekNumberStyleAttr() + "></td>" : ""
            }
        },
        yb = Pa.MonthView = wb.extend({
            computeRange: function(a) {
                var b, c = wb.prototype.computeRange.call(this, a);
                return this.isFixedWeeks() && (b = Math.ceil(c.end.diff(c.start, "weeks", !0)), c.end.add(6 - b, "weeks")), c
            },
            setGridHeight: function(a, b) {
                b = b || "variable" === this.opt("weekMode"), b && (a *= this.rowCnt / 6), i(this.dayGrid.rowEls, a, !b)
            },
            isFixedWeeks: function() {
                var a = this.opt("weekMode");
                return a ? "fixed" === a : this.opt("fixedWeekCount")
            }
        });
    Qa.basic = {
        "class": wb
    }, Qa.basicDay = {
        type: "basic",
        duration: {
            days: 1
        }
    }, Qa.basicWeek = {
        type: "basic",
        duration: {
            weeks: 1
        }
    }, Qa.month = {
        "class": yb,
        duration: {
            months: 1
        },
        defaults: {
            fixedWeekCount: !0
        }
    };
    var zb = Pa.AgendaView = ob.extend({
            timeGridClass: nb,
            timeGrid: null,
            dayGridClass: mb,
            dayGrid: null,
            axisWidth: null,
            headContainerEl: null,
            noScrollRowEls: null,
            bottomRuleEl: null,
            bottomRuleHeight: null,
            initialize: function() {
                this.timeGrid = this.instantiateTimeGrid(), this.opt("allDaySlot") && (this.dayGrid = this.instantiateDayGrid())
            },
            instantiateTimeGrid: function() {
                var a = this.timeGridClass.extend(Ab);
                return new a(this)
            },
            instantiateDayGrid: function() {
                var a = this.dayGridClass.extend(Bb);
                return new a(this)
            },
            setRange: function(a) {
                ob.prototype.setRange.call(this, a), this.timeGrid.setRange(a), this.dayGrid && this.dayGrid.setRange(a)
            },
            renderDates: function() {
                this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scrollerEl = this.el.find(".fc-time-grid-container"), this.timeGrid.setElement(this.el.find(".fc-time-grid")), this.timeGrid.renderDates(), this.bottomRuleEl = a('<hr class="fc-divider ' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el), this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.renderDates(), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()), this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)")
            },
            renderHead: function() {
                this.headContainerEl = this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())
            },
            unrenderDates: function() {
                this.timeGrid.unrenderDates(), this.timeGrid.removeElement(), this.dayGrid && (this.dayGrid.unrenderDates(), this.dayGrid.removeElement())
            },
            renderSkeletonHtml: function() {
                return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + this.widgetHeaderClass + '"/>' : "") + '<div class="fc-time-grid-container"><div class="fc-time-grid"/></div></td></tr></tbody></table>'
            },
            axisStyleAttr: function() {
                return null !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
            },
            renderBusinessHours: function() {
                this.timeGrid.renderBusinessHours(), this.dayGrid && this.dayGrid.renderBusinessHours()
            },
            unrenderBusinessHours: function() {
                this.timeGrid.unrenderBusinessHours(), this.dayGrid && this.dayGrid.unrenderBusinessHours()
            },
            getNowIndicatorUnit: function() {
                return this.timeGrid.getNowIndicatorUnit()
            },
            renderNowIndicator: function(a) {
                this.timeGrid.renderNowIndicator(a)
            },
            unrenderNowIndicator: function() {
                this.timeGrid.unrenderNowIndicator()
            },
            updateSize: function(a) {
                this.timeGrid.updateSize(a), ob.prototype.updateSize.call(this, a)
            },
            updateWidth: function() {
                this.axisWidth = k(this.el.find(".fc-axis"))
            },
            setHeight: function(a, b) {
                var c, d;
                null === this.bottomRuleHeight && (this.bottomRuleHeight = this.bottomRuleEl.outerHeight()), this.bottomRuleEl.hide(), this.scrollerEl.css("overflow", ""), m(this.scrollerEl), f(this.noScrollRowEls), this.dayGrid && (this.dayGrid.removeSegPopover(), c = this.opt("eventLimit"), c && "number" != typeof c && (c = Cb), c && this.dayGrid.limitRows(c)), b || (d = this.computeScrollerHeight(a), l(this.scrollerEl, d) ? (e(this.noScrollRowEls, r(this.scrollerEl)), d = this.computeScrollerHeight(a), this.scrollerEl.height(d)) : (this.scrollerEl.height(d).css("overflow", "hidden"), this.bottomRuleEl.show()))
            },
            computeInitialScroll: function() {
                var a = b.duration(this.opt("scrollTime")),
                    c = this.timeGrid.computeTimeTop(a);
                return c = Math.ceil(c), c && c++, c
            },
            prepareHits: function() {
                this.timeGrid.prepareHits(), this.dayGrid && this.dayGrid.prepareHits()
            },
            releaseHits: function() {
                this.timeGrid.releaseHits(), this.dayGrid && this.dayGrid.releaseHits()
            },
            queryHit: function(a, b) {
                var c = this.timeGrid.queryHit(a, b);
                return !c && this.dayGrid && (c = this.dayGrid.queryHit(a, b)), c
            },
            getHitSpan: function(a) {
                return a.component.getHitSpan(a)
            },
            getHitEl: function(a) {
                return a.component.getHitEl(a)
            },
            renderEvents: function(a) {
                var b, c, d = [],
                    e = [],
                    f = [];
                for (c = 0; c < a.length; c++) a[c].allDay ? d.push(a[c]) : e.push(a[c]);
                b = this.timeGrid.renderEvents(e), this.dayGrid && (f = this.dayGrid.renderEvents(d)), this.updateHeight()
            },
            getEventSegs: function() {
                return this.timeGrid.getEventSegs().concat(this.dayGrid ? this.dayGrid.getEventSegs() : [])
            },
            unrenderEvents: function() {
                this.timeGrid.unrenderEvents(), this.dayGrid && this.dayGrid.unrenderEvents()
            },
            renderDrag: function(a, b) {
                return a.start.hasTime() ? this.timeGrid.renderDrag(a, b) : this.dayGrid ? this.dayGrid.renderDrag(a, b) : void 0
            },
            unrenderDrag: function() {
                this.timeGrid.unrenderDrag(), this.dayGrid && this.dayGrid.unrenderDrag()
            },
            renderSelection: function(a) {
                a.start.hasTime() || a.end.hasTime() ? this.timeGrid.renderSelection(a) : this.dayGrid && this.dayGrid.renderSelection(a)
            },
            unrenderSelection: function() {
                this.timeGrid.unrenderSelection(), this.dayGrid && this.dayGrid.unrenderSelection()
            }
        }),
        Ab = {
            renderHeadIntroHtml: function() {
                var a, b = this.view;
                return b.opt("weekNumbers") ? (a = this.start.format(b.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + b.widgetHeaderClass + '" ' + b.axisStyleAttr() + "><span>" + Y(a) + "</span></th>") : '<th class="fc-axis ' + b.widgetHeaderClass + '" ' + b.axisStyleAttr() + "></th>"
            },
            renderBgIntroHtml: function() {
                var a = this.view;
                return '<td class="fc-axis ' + a.widgetContentClass + '" ' + a.axisStyleAttr() + "></td>"
            },
            renderIntroHtml: function() {
                var a = this.view;
                return '<td class="fc-axis" ' + a.axisStyleAttr() + "></td>"
            }
        },
        Bb = {
            renderBgIntroHtml: function() {
                var a = this.view;
                return '<td class="fc-axis ' + a.widgetContentClass + '" ' + a.axisStyleAttr() + "><span>" + (a.opt("allDayHtml") || Y(a.opt("allDayText"))) + "</span></td>"
            },
            renderIntroHtml: function() {
                var a = this.view;
                return '<td class="fc-axis" ' + a.axisStyleAttr() + "></td>"
            }
        },
        Cb = 5,
        Db = [{
            hours: 1
        }, {
            minutes: 30
        }, {
            minutes: 15
        }, {
            seconds: 30
        }, {
            seconds: 15
        }];
    return Qa.agenda = {
        "class": zb,
        defaults: {
            allDaySlot: !0,
            allDayText: "all-day",
            slotDuration: "00:30:00",
            minTime: "00:00:00",
            maxTime: "24:00:00",
            slotEventOverlap: !0
        }
    }, Qa.agendaDay = {
        type: "agenda",
        duration: {
            days: 1
        }
    }, Qa.agendaWeek = {
        type: "agenda",
        duration: {
            weeks: 1
        }
    }, Pa
});

/*
 * qTip2 - Pretty powerful tooltips
 * http://craigsworks.com/projects/qtip2/
 *
 * Version: nightly
 * Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
 *
 * Dual licensed under MIT or GPLv2 licenses
 *   http://en.wikipedia.org/wiki/MIT_License
 *   http://en.wikipedia.org/wiki/GNU_General_Public_License
 *
 * Date: Thu Apr 26 12:17:04.0000000000 2012
 */
/*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */ /*global window: false, jQuery: false, console: false, define: false */
/*
 * qTip2 - Pretty powerful tooltips - v3.0.3
 * http://qtip2.com
 *
 * Copyright (c) 2016 
 * Released under the MIT licenses
 * http://jquery.org/license
 *
 * Date: Wed May 11 2016 10:31 GMT+0100+0100
 * Plugins: None
 * Styles: core
 */
/*global window: false, jQuery: false, console: false, define: false */

/* Cache window, document, undefined */
/* qtip2 v3.0.3 | Plugins: None | Styles: core | qtip2.com | Licensed MIT | Wed May 11 2016 22:31:32 */

/* qtip2 v3.0.3 | Plugins: tips modal viewport svg imagemap ie6 | Styles: core basic css3 | qtip2.com | Licensed MIT | Wed May 11 2016 22:31:31 */

!function(a,b,c){!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.qtip&&a(jQuery)}(function(d){"use strict";function e(a,b,c,e){this.id=c,this.target=a,this.tooltip=F,this.elements={target:a},this._id=S+"-"+c,this.timers={img:{}},this.options=b,this.plugins={},this.cache={event:{},target:d(),disabled:E,attr:e,onTooltip:E,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=E}function f(a){return a===F||"object"!==d.type(a)}function g(a){return!(d.isFunction(a)||a&&a.attr||a.length||"object"===d.type(a)&&(a.jquery||a.then))}function h(a){var b,c,e,h;return f(a)?E:(f(a.metadata)&&(a.metadata={type:a.metadata}),"content"in a&&(b=a.content,f(b)||b.jquery||b.done?(c=g(b)?E:b,b=a.content={text:c}):c=b.text,"ajax"in b&&(e=b.ajax,h=e&&e.once!==E,delete b.ajax,b.text=function(a,b){var f=c||d(this).attr(b.options.content.attr)||"Loading...",g=d.ajax(d.extend({},e,{context:b})).then(e.success,F,e.error).then(function(a){return a&&h&&b.set("content.text",a),a},function(a,c,d){b.destroyed||0===a.status||b.set("content.text",c+": "+d)});return h?f:(b.set("content.text",f),g)}),"title"in b&&(d.isPlainObject(b.title)&&(b.button=b.title.button,b.title=b.title.text),g(b.title||E)&&(b.title=E))),"position"in a&&f(a.position)&&(a.position={my:a.position,at:a.position}),"show"in a&&f(a.show)&&(a.show=a.show.jquery?{target:a.show}:a.show===D?{ready:D}:{event:a.show}),"hide"in a&&f(a.hide)&&(a.hide=a.hide.jquery?{target:a.hide}:{event:a.hide}),"style"in a&&f(a.style)&&(a.style={classes:a.style}),d.each(R,function(){this.sanitize&&this.sanitize(a)}),a)}function i(a,b){for(var c,d=0,e=a,f=b.split(".");e=e[f[d++]];)d<f.length&&(c=e);return[c||a,f.pop()]}function j(a,b){var c,d,e;for(c in this.checks)if(this.checks.hasOwnProperty(c))for(d in this.checks[c])this.checks[c].hasOwnProperty(d)&&(e=new RegExp(d,"i").exec(a))&&(b.push(e),("builtin"===c||this.plugins[c])&&this.checks[c][d].apply(this.plugins[c]||this,b))}function k(a){return V.concat("").join(a?"-"+a+" ":" ")}function l(a,b){return b>0?setTimeout(d.proxy(a,this),b):void a.call(this)}function m(a){this.tooltip.hasClass(aa)||(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this.timers.show=l.call(this,function(){this.toggle(D,a)},this.options.show.delay))}function n(a){if(!this.tooltip.hasClass(aa)&&!this.destroyed){var b=d(a.relatedTarget),c=b.closest(W)[0]===this.tooltip[0],e=b[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==b[0]&&"mouse"===this.options.position.target&&c||this.options.hide.fixed&&/mouse(out|leave|move)/.test(a.type)&&(c||e))try{a.preventDefault(),a.stopImmediatePropagation()}catch(f){}else this.timers.hide=l.call(this,function(){this.toggle(E,a)},this.options.hide.delay,this)}}function o(a){!this.tooltip.hasClass(aa)&&this.options.hide.inactive&&(clearTimeout(this.timers.inactive),this.timers.inactive=l.call(this,function(){this.hide(a)},this.options.hide.inactive))}function p(a){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(a)}function q(a,c,e){d(b.body).delegate(a,(c.split?c:c.join("."+S+" "))+"."+S,function(){var a=y.api[d.attr(this,U)];a&&!a.disabled&&e.apply(a,arguments)})}function r(a,c,f){var g,i,j,k,l,m=d(b.body),n=a[0]===b?m:a,o=a.metadata?a.metadata(f.metadata):F,p="html5"===f.metadata.type&&o?o[f.metadata.name]:F,q=a.data(f.metadata.name||"qtipopts");try{q="string"==typeof q?d.parseJSON(q):q}catch(r){}if(k=d.extend(D,{},y.defaults,f,"object"==typeof q?h(q):F,h(p||o)),i=k.position,k.id=c,"boolean"==typeof k.content.text){if(j=a.attr(k.content.attr),k.content.attr===E||!j)return E;k.content.text=j}if(i.container.length||(i.container=m),i.target===E&&(i.target=n),k.show.target===E&&(k.show.target=n),k.show.solo===D&&(k.show.solo=i.container.closest("body")),k.hide.target===E&&(k.hide.target=n),k.position.viewport===D&&(k.position.viewport=i.container),i.container=i.container.eq(0),i.at=new A(i.at,D),i.my=new A(i.my),a.data(S))if(k.overwrite)a.qtip("destroy",!0);else if(k.overwrite===E)return E;return a.attr(T,c),k.suppress&&(l=a.attr("title"))&&a.removeAttr("title").attr(ca,l).attr("title",""),g=new e(a,k,c,!!j),a.data(S,g),g}function s(a){return a.charAt(0).toUpperCase()+a.slice(1)}function t(a,b){var d,e,f=b.charAt(0).toUpperCase()+b.slice(1),g=(b+" "+va.join(f+" ")+f).split(" "),h=0;if(ua[b])return a.css(ua[b]);for(;d=g[h++];)if((e=a.css(d))!==c)return ua[b]=d,e}function u(a,b){return Math.ceil(parseFloat(t(a,b)))}function v(a,b){this._ns="tip",this.options=b,this.offset=b.offset,this.size=[b.width,b.height],this.qtip=a,this.init(a)}function w(a,b){this.options=b,this._ns="-modal",this.qtip=a,this.init(a)}function x(a){this._ns="ie6",this.qtip=a,this.init(a)}var y,z,A,B,C,D=!0,E=!1,F=null,G="x",H="y",I="width",J="height",K="top",L="left",M="bottom",N="right",O="center",P="flipinvert",Q="shift",R={},S="qtip",T="data-hasqtip",U="data-qtip-id",V=["ui-widget","ui-tooltip"],W="."+S,X="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),Y=S+"-fixed",Z=S+"-default",$=S+"-focus",_=S+"-hover",aa=S+"-disabled",ba="_replacedByqTip",ca="oldtitle",da={ie:function(){var a,c;for(a=4,c=b.createElement("div");(c.innerHTML="<!--[if gt IE "+a+"]><i></i><![endif]-->")&&c.getElementsByTagName("i")[0];a+=1);return a>4?a:NaN}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||E};z=e.prototype,z._when=function(a){return d.when.apply(d,a)},z.render=function(a){if(this.rendered||this.destroyed)return this;var b=this,c=this.options,e=this.cache,f=this.elements,g=c.content.text,h=c.content.title,i=c.content.button,j=c.position,k=[];return d.attr(this.target[0],"aria-describedby",this._id),e.posClass=this._createPosClass((this.position={my:j.my,at:j.at}).my),this.tooltip=f.tooltip=d("<div/>",{id:this._id,"class":[S,Z,c.style.classes,e.posClass].join(" "),width:c.style.width||"",height:c.style.height||"",tracking:"mouse"===j.target&&j.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":E,"aria-describedby":this._id+"-content","aria-hidden":D}).toggleClass(aa,this.disabled).attr(U,this.id).data(S,this).appendTo(j.container).append(f.content=d("<div />",{"class":S+"-content",id:this._id+"-content","aria-atomic":D})),this.rendered=-1,this.positioning=D,h&&(this._createTitle(),d.isFunction(h)||k.push(this._updateTitle(h,E))),i&&this._createButton(),d.isFunction(g)||k.push(this._updateContent(g,E)),this.rendered=D,this._setWidget(),d.each(R,function(a){var c;"render"===this.initialize&&(c=this(b))&&(b.plugins[a]=c)}),this._unassignEvents(),this._assignEvents(),this._when(k).then(function(){b._trigger("render"),b.positioning=E,b.hiddenDuringWait||!c.show.ready&&!a||b.toggle(D,e.event,E),b.hiddenDuringWait=E}),y.api[this.id]=this,this},z.destroy=function(a){function b(){if(!this.destroyed){this.destroyed=D;var a,b=this.target,c=b.attr(ca);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),d.each(this.plugins,function(){this.destroy&&this.destroy()});for(a in this.timers)this.timers.hasOwnProperty(a)&&clearTimeout(this.timers[a]);b.removeData(S).removeAttr(U).removeAttr(T).removeAttr("aria-describedby"),this.options.suppress&&c&&b.attr("title",c).removeAttr(ca),this._unassignEvents(),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=F,delete y.api[this.id]}}return this.destroyed?this.target:(a===D&&"hide"!==this.triggering||!this.rendered?b.call(this):(this.tooltip.one("tooltiphidden",d.proxy(b,this)),!this.triggering&&this.hide()),this.target)},B=z.checks={builtin:{"^id$":function(a,b,c,e){var f=c===D?y.nextid:c,g=S+"-"+f;f!==E&&f.length>0&&!d("#"+g).length?(this._id=g,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):a[b]=e},"^prerender":function(a,b,c){c&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(a,b,c){this._updateContent(c)},"^content.attr$":function(a,b,c,d){this.options.content.text===this.target.attr(d)&&this._updateContent(this.target.attr(c))},"^content.title$":function(a,b,c){return c?(c&&!this.elements.title&&this._createTitle(),void this._updateTitle(c)):this._removeTitle()},"^content.button$":function(a,b,c){this._updateButton(c)},"^content.title.(text|button)$":function(a,b,c){this.set("content."+b,c)},"^position.(my|at)$":function(a,b,c){"string"==typeof c&&(this.position[b]=a[b]=new A(c,"at"===b))},"^position.container$":function(a,b,c){this.rendered&&this.tooltip.appendTo(c)},"^show.ready$":function(a,b,c){c&&(!this.rendered&&this.render(D)||this.toggle(D))},"^style.classes$":function(a,b,c,d){this.rendered&&this.tooltip.removeClass(d).addClass(c)},"^style.(width|height)":function(a,b,c){this.rendered&&this.tooltip.css(b,c)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(a,b,c){this.rendered&&this.tooltip.toggleClass(Z,!!c)},"^events.(render|show|move|hide|focus|blur)$":function(a,b,c){this.rendered&&this.tooltip[(d.isFunction(c)?"":"un")+"bind"]("tooltip"+b,c)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var a=this.options.position;this.tooltip.attr("tracking","mouse"===a.target&&a.adjust.mouse),this._unassignEvents(),this._assignEvents()}}}},z.get=function(a){if(this.destroyed)return this;var b=i(this.options,a.toLowerCase()),c=b[0][b[1]];return c.precedance?c.string():c};var ea=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,fa=/^prerender|show\.ready/i;z.set=function(a,b){if(this.destroyed)return this;var c,e=this.rendered,f=E,g=this.options;return"string"==typeof a?(c=a,a={},a[c]=b):a=d.extend({},a),d.each(a,function(b,c){if(e&&fa.test(b))return void delete a[b];var h,j=i(g,b.toLowerCase());h=j[0][j[1]],j[0][j[1]]=c&&c.nodeType?d(c):c,f=ea.test(b)||f,a[b]=[j[0],j[1],c,h]}),h(g),this.positioning=D,d.each(a,d.proxy(j,this)),this.positioning=E,this.rendered&&this.tooltip[0].offsetWidth>0&&f&&this.reposition("mouse"===g.position.target?F:this.cache.event),this},z._update=function(a,b){var c=this,e=this.cache;return this.rendered&&a?(d.isFunction(a)&&(a=a.call(this.elements.target,e.event,this)||""),d.isFunction(a.then)?(e.waiting=D,a.then(function(a){return e.waiting=E,c._update(a,b)},F,function(a){return c._update(a,b)})):a===E||!a&&""!==a?E:(a.jquery&&a.length>0?b.empty().append(a.css({display:"block",visibility:"visible"})):b.html(a),this._waitForContent(b).then(function(a){c.rendered&&c.tooltip[0].offsetWidth>0&&c.reposition(e.event,!a.length)}))):E},z._waitForContent=function(a){var b=this.cache;return b.waiting=D,(d.fn.imagesLoaded?a.imagesLoaded():(new d.Deferred).resolve([])).done(function(){b.waiting=E}).promise()},z._updateContent=function(a,b){this._update(a,this.elements.content,b)},z._updateTitle=function(a,b){this._update(a,this.elements.title,b)===E&&this._removeTitle(E)},z._createTitle=function(){var a=this.elements,b=this._id+"-title";a.titlebar&&this._removeTitle(),a.titlebar=d("<div />",{"class":S+"-titlebar "+(this.options.style.widget?k("header"):"")}).append(a.title=d("<div />",{id:b,"class":S+"-title","aria-atomic":D})).insertBefore(a.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(a){d(this).toggleClass("ui-state-active ui-state-focus","down"===a.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(a){d(this).toggleClass("ui-state-hover","mouseover"===a.type)}),this.options.content.button&&this._createButton()},z._removeTitle=function(a){var b=this.elements;b.title&&(b.titlebar.remove(),b.titlebar=b.title=b.button=F,a!==E&&this.reposition())},z._createPosClass=function(a){return S+"-pos-"+(a||this.options.position.my).abbrev()},z.reposition=function(c,e){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=D;var f,g,h,i,j=this.cache,k=this.tooltip,l=this.options.position,m=l.target,n=l.my,o=l.at,p=l.viewport,q=l.container,r=l.adjust,s=r.method.split(" "),t=k.outerWidth(E),u=k.outerHeight(E),v=0,w=0,x=k.css("position"),y={left:0,top:0},z=k[0].offsetWidth>0,A=c&&"scroll"===c.type,B=d(a),C=q[0].ownerDocument,F=this.mouse;if(d.isArray(m)&&2===m.length)o={x:L,y:K},y={left:m[0],top:m[1]};else if("mouse"===m)o={x:L,y:K},(!r.mouse||this.options.hide.distance)&&j.origin&&j.origin.pageX?c=j.origin:!c||c&&("resize"===c.type||"scroll"===c.type)?c=j.event:F&&F.pageX&&(c=F),"static"!==x&&(y=q.offset()),C.body.offsetWidth!==(a.innerWidth||C.documentElement.clientWidth)&&(g=d(b.body).offset()),y={left:c.pageX-y.left+(g&&g.left||0),top:c.pageY-y.top+(g&&g.top||0)},r.mouse&&A&&F&&(y.left-=(F.scrollX||0)-B.scrollLeft(),y.top-=(F.scrollY||0)-B.scrollTop());else{if("event"===m?c&&c.target&&"scroll"!==c.type&&"resize"!==c.type?j.target=d(c.target):c.target||(j.target=this.elements.target):"event"!==m&&(j.target=d(m.jquery?m:this.elements.target)),m=j.target,m=d(m).eq(0),0===m.length)return this;m[0]===b||m[0]===a?(v=da.iOS?a.innerWidth:m.width(),w=da.iOS?a.innerHeight:m.height(),m[0]===a&&(y={top:(p||m).scrollTop(),left:(p||m).scrollLeft()})):R.imagemap&&m.is("area")?f=R.imagemap(this,m,o,R.viewport?s:E):R.svg&&m&&m[0].ownerSVGElement?f=R.svg(this,m,o,R.viewport?s:E):(v=m.outerWidth(E),w=m.outerHeight(E),y=m.offset()),f&&(v=f.width,w=f.height,g=f.offset,y=f.position),y=this.reposition.offset(m,y,q),(da.iOS>3.1&&da.iOS<4.1||da.iOS>=4.3&&da.iOS<4.33||!da.iOS&&"fixed"===x)&&(y.left-=B.scrollLeft(),y.top-=B.scrollTop()),(!f||f&&f.adjustable!==E)&&(y.left+=o.x===N?v:o.x===O?v/2:0,y.top+=o.y===M?w:o.y===O?w/2:0)}return y.left+=r.x+(n.x===N?-t:n.x===O?-t/2:0),y.top+=r.y+(n.y===M?-u:n.y===O?-u/2:0),R.viewport?(h=y.adjusted=R.viewport(this,y,l,v,w,t,u),g&&h.left&&(y.left+=g.left),g&&h.top&&(y.top+=g.top),h.my&&(this.position.my=h.my)):y.adjusted={left:0,top:0},j.posClass!==(i=this._createPosClass(this.position.my))&&(j.posClass=i,k.removeClass(j.posClass).addClass(i)),this._trigger("move",[y,p.elem||p],c)?(delete y.adjusted,e===E||!z||isNaN(y.left)||isNaN(y.top)||"mouse"===m||!d.isFunction(l.effect)?k.css(y):d.isFunction(l.effect)&&(l.effect.call(k,this,d.extend({},y)),k.queue(function(a){d(this).css({opacity:"",height:""}),da.ie&&this.style.removeAttribute("filter"),a()})),this.positioning=E,this):this},z.reposition.offset=function(a,c,e){function f(a,b){c.left+=b*a.scrollLeft(),c.top+=b*a.scrollTop()}if(!e[0])return c;var g,h,i,j,k=d(a[0].ownerDocument),l=!!da.ie&&"CSS1Compat"!==b.compatMode,m=e[0];do"static"!==(h=d.css(m,"position"))&&("fixed"===h?(i=m.getBoundingClientRect(),f(k,-1)):(i=d(m).position(),i.left+=parseFloat(d.css(m,"borderLeftWidth"))||0,i.top+=parseFloat(d.css(m,"borderTopWidth"))||0),c.left-=i.left+(parseFloat(d.css(m,"marginLeft"))||0),c.top-=i.top+(parseFloat(d.css(m,"marginTop"))||0),g||"hidden"===(j=d.css(m,"overflow"))||"visible"===j||(g=d(m)));while(m=m.offsetParent);return g&&(g[0]!==k[0]||l)&&f(g,1),c};var ga=(A=z.reposition.Corner=function(a,b){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,O).toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!b;var c=a.charAt(0);this.precedance="t"===c||"b"===c?H:G}).prototype;ga.invert=function(a,b){this[a]=this[a]===L?N:this[a]===N?L:b||this[a]},ga.string=function(a){var b=this.x,c=this.y,d=b!==c?"center"===b||"center"!==c&&(this.precedance===H||this.forceY)?[c,b]:[b,c]:[b];return a!==!1?d.join(" "):d},ga.abbrev=function(){var a=this.string(!1);return a[0].charAt(0)+(a[1]&&a[1].charAt(0)||"")},ga.clone=function(){return new A(this.string(),this.forceY)},z.toggle=function(a,c){var e=this.cache,f=this.options,g=this.tooltip;if(c){if(/over|enter/.test(c.type)&&e.event&&/out|leave/.test(e.event.type)&&f.show.target.add(c.target).length===f.show.target.length&&g.has(c.relatedTarget).length)return this;e.event=d.event.fix(c)}if(this.waiting&&!a&&(this.hiddenDuringWait=D),!this.rendered)return a?this.render(1):this;if(this.destroyed||this.disabled)return this;var h,i,j,k=a?"show":"hide",l=this.options[k],m=this.options.position,n=this.options.content,o=this.tooltip.css("width"),p=this.tooltip.is(":visible"),q=a||1===l.target.length,r=!c||l.target.length<2||e.target[0]===c.target;return(typeof a).search("boolean|number")&&(a=!p),h=!g.is(":animated")&&p===a&&r,i=h?F:!!this._trigger(k,[90]),this.destroyed?this:(i!==E&&a&&this.focus(c),!i||h?this:(d.attr(g[0],"aria-hidden",!a),a?(this.mouse&&(e.origin=d.event.fix(this.mouse)),d.isFunction(n.text)&&this._updateContent(n.text,E),d.isFunction(n.title)&&this._updateTitle(n.title,E),!C&&"mouse"===m.target&&m.adjust.mouse&&(d(b).bind("mousemove."+S,this._storeMouse),C=D),o||g.css("width",g.outerWidth(E)),this.reposition(c,arguments[2]),o||g.css("width",""),l.solo&&("string"==typeof l.solo?d(l.solo):d(W,l.solo)).not(g).not(l.target).qtip("hide",new d.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete e.origin,C&&!d(W+'[tracking="true"]:visible',l.solo).not(g).length&&(d(b).unbind("mousemove."+S),C=E),this.blur(c)),j=d.proxy(function(){a?(da.ie&&g[0].style.removeAttribute("filter"),g.css("overflow",""),"string"==typeof l.autofocus&&d(this.options.show.autofocus,g).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):g.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(a?"visible":"hidden")},this),l.effect===E||q===E?(g[k](),j()):d.isFunction(l.effect)?(g.stop(1,1),l.effect.call(g,this),g.queue("fx",function(a){j(),a()})):g.fadeTo(90,a?1:0,j),a&&l.target.trigger("qtip-"+this.id+"-inactive"),this))},z.show=function(a){return this.toggle(D,a)},z.hide=function(a){return this.toggle(E,a)},z.focus=function(a){if(!this.rendered||this.destroyed)return this;var b=d(W),c=this.tooltip,e=parseInt(c[0].style.zIndex,10),f=y.zindex+b.length;return c.hasClass($)||this._trigger("focus",[f],a)&&(e!==f&&(b.each(function(){this.style.zIndex>e&&(this.style.zIndex=this.style.zIndex-1)}),b.filter("."+$).qtip("blur",a)),c.addClass($)[0].style.zIndex=f),this},z.blur=function(a){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass($),this._trigger("blur",[this.tooltip.css("zIndex")],a),this)},z.disable=function(a){return this.destroyed?this:("toggle"===a?a=!(this.rendered?this.tooltip.hasClass(aa):this.disabled):"boolean"!=typeof a&&(a=D),this.rendered&&this.tooltip.toggleClass(aa,a).attr("aria-disabled",a),this.disabled=!!a,this)},z.enable=function(){return this.disable(E)},z._createButton=function(){var a=this,b=this.elements,c=b.tooltip,e=this.options.content.button,f="string"==typeof e,g=f?e:"Close tooltip";b.button&&b.button.remove(),e.jquery?b.button=e:b.button=d("<a />",{"class":"qtip-close "+(this.options.style.widget?"":S+"-icon"),title:g,"aria-label":g}).prepend(d("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),b.button.appendTo(b.titlebar||c).attr("role","button").click(function(b){return c.hasClass(aa)||a.hide(b),E})},z._updateButton=function(a){if(!this.rendered)return E;var b=this.elements.button;a?this._createButton():b.remove()},z._setWidget=function(){var a=this.options.style.widget,b=this.elements,c=b.tooltip,d=c.hasClass(aa);c.removeClass(aa),aa=a?"ui-state-disabled":"qtip-disabled",c.toggleClass(aa,d),c.toggleClass("ui-helper-reset "+k(),a).toggleClass(Z,this.options.style.def&&!a),b.content&&b.content.toggleClass(k("content"),a),b.titlebar&&b.titlebar.toggleClass(k("header"),a),b.button&&b.button.toggleClass(S+"-icon",!a)},z._storeMouse=function(a){return(this.mouse=d.event.fix(a)).type="mousemove",this},z._bind=function(a,b,c,e,f){if(a&&c&&b.length){var g="."+this._id+(e?"-"+e:"");return d(a).bind((b.split?b:b.join(g+" "))+g,d.proxy(c,f||this)),this}},z._unbind=function(a,b){return a&&d(a).unbind("."+this._id+(b?"-"+b:"")),this},z._trigger=function(a,b,c){var e=new d.Event("tooltip"+a);return e.originalEvent=c&&d.extend({},c)||this.cache.event||F,this.triggering=a,this.tooltip.trigger(e,[this].concat(b||[])),this.triggering=E,!e.isDefaultPrevented()},z._bindEvents=function(a,b,c,e,f,g){var h=c.filter(e).add(e.filter(c)),i=[];h.length&&(d.each(b,function(b,c){var e=d.inArray(c,a);e>-1&&i.push(a.splice(e,1)[0])}),i.length&&(this._bind(h,i,function(a){var b=this.rendered?this.tooltip[0].offsetWidth>0:!1;(b?g:f).call(this,a)}),c=c.not(h),e=e.not(h))),this._bind(c,a,f),this._bind(e,b,g)},z._assignInitialEvents=function(a){function b(a){return this.disabled||this.destroyed?E:(this.cache.event=a&&d.event.fix(a),this.cache.target=a&&d(a.target),clearTimeout(this.timers.show),void(this.timers.show=l.call(this,function(){this.render("object"==typeof a||c.show.ready)},c.prerender?0:c.show.delay)))}var c=this.options,e=c.show.target,f=c.hide.target,g=c.show.event?d.trim(""+c.show.event).split(" "):[],h=c.hide.event?d.trim(""+c.hide.event).split(" "):[];this._bind(this.elements.target,["remove","removeqtip"],function(){this.destroy(!0)},"destroy"),/mouse(over|enter)/i.test(c.show.event)&&!/mouse(out|leave)/i.test(c.hide.event)&&h.push("mouseleave"),this._bind(e,"mousemove",function(a){this._storeMouse(a),this.cache.onTarget=D}),this._bindEvents(g,h,e,f,b,function(){return this.timers?void clearTimeout(this.timers.show):E}),(c.show.ready||c.prerender)&&b.call(this,a)},z._assignEvents=function(){var c=this,e=this.options,f=e.position,g=this.tooltip,h=e.show.target,i=e.hide.target,j=f.container,k=f.viewport,l=d(b),q=d(a),r=e.show.event?d.trim(""+e.show.event).split(" "):[],s=e.hide.event?d.trim(""+e.hide.event).split(" "):[];d.each(e.events,function(a,b){c._bind(g,"toggle"===a?["tooltipshow","tooltiphide"]:["tooltip"+a],b,null,g)}),/mouse(out|leave)/i.test(e.hide.event)&&"window"===e.hide.leave&&this._bind(l,["mouseout","blur"],function(a){/select|option/.test(a.target.nodeName)||a.relatedTarget||this.hide(a)}),e.hide.fixed?i=i.add(g.addClass(Y)):/mouse(over|enter)/i.test(e.show.event)&&this._bind(i,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+e.hide.event).indexOf("unfocus")>-1&&this._bind(j.closest("html"),["mousedown","touchstart"],function(a){var b=d(a.target),c=this.rendered&&!this.tooltip.hasClass(aa)&&this.tooltip[0].offsetWidth>0,e=b.parents(W).filter(this.tooltip[0]).length>0;b[0]===this.target[0]||b[0]===this.tooltip[0]||e||this.target.has(b[0]).length||!c||this.hide(a)}),"number"==typeof e.hide.inactive&&(this._bind(h,"qtip-"+this.id+"-inactive",o,"inactive"),this._bind(i.add(g),y.inactiveEvents,o)),this._bindEvents(r,s,h,i,m,n),this._bind(h.add(g),"mousemove",function(a){if("number"==typeof e.hide.distance){var b=this.cache.origin||{},c=this.options.hide.distance,d=Math.abs;(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&this.hide(a)}this._storeMouse(a)}),"mouse"===f.target&&f.adjust.mouse&&(e.hide.event&&this._bind(h,["mouseenter","mouseleave"],function(a){return this.cache?void(this.cache.onTarget="mouseenter"===a.type):E}),this._bind(l,"mousemove",function(a){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(aa)&&this.tooltip[0].offsetWidth>0&&this.reposition(a)})),(f.adjust.resize||k.length)&&this._bind(d.event.special.resize?k:q,"resize",p),f.adjust.scroll&&this._bind(q.add(f.container),"scroll",p)},z._unassignEvents=function(){var c=this.options,e=c.show.target,f=c.hide.target,g=d.grep([this.elements.target[0],this.rendered&&this.tooltip[0],c.position.container[0],c.position.viewport[0],c.position.container.closest("html")[0],a,b],function(a){return"object"==typeof a});e&&e.toArray&&(g=g.concat(e.toArray())),f&&f.toArray&&(g=g.concat(f.toArray())),this._unbind(g)._unbind(g,"destroy")._unbind(g,"inactive")},d(function(){q(W,["mouseenter","mouseleave"],function(a){var b="mouseenter"===a.type,c=d(a.currentTarget),e=d(a.relatedTarget||a.target),f=this.options;b?(this.focus(a),c.hasClass(Y)&&!c.hasClass(aa)&&clearTimeout(this.timers.hide)):"mouse"===f.position.target&&f.position.adjust.mouse&&f.hide.event&&f.show.target&&!e.closest(f.show.target[0]).length&&this.hide(a),c.toggleClass(_,b)}),q("["+U+"]",X,o)}),y=d.fn.qtip=function(a,b,e){var f=(""+a).toLowerCase(),g=F,i=d.makeArray(arguments).slice(1),j=i[i.length-1],k=this[0]?d.data(this[0],S):F;return!arguments.length&&k||"api"===f?k:"string"==typeof a?(this.each(function(){var a=d.data(this,S);if(!a)return D;if(j&&j.timeStamp&&(a.cache.event=j),!b||"option"!==f&&"options"!==f)a[f]&&a[f].apply(a,i);else{if(e===c&&!d.isPlainObject(b))return g=a.get(b),E;a.set(b,e)}}),g!==F?g:this):"object"!=typeof a&&arguments.length?void 0:(k=h(d.extend(D,{},a)),this.each(function(a){var b,c;return c=d.isArray(k.id)?k.id[a]:k.id,c=!c||c===E||c.length<1||y.api[c]?y.nextid++:c,b=r(d(this),c,k),b===E?D:(y.api[c]=b,d.each(R,function(){"initialize"===this.initialize&&this(b)}),void b._assignInitialEvents(j))}))},d.qtip=e,y.api={},d.each({attr:function(a,b){if(this.length){var c=this[0],e="title",f=d.data(c,"qtip");if(a===e&&f&&f.options&&"object"==typeof f&&"object"==typeof f.options&&f.options.suppress)return arguments.length<2?d.attr(c,ca):(f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",b),this.attr(ca,b))}return d.fn["attr"+ba].apply(this,arguments)},clone:function(a){var b=d.fn["clone"+ba].apply(this,arguments);return a||b.filter("["+ca+"]").attr("title",function(){return d.attr(this,ca)}).removeAttr(ca),b}},function(a,b){if(!b||d.fn[a+ba])return D;var c=d.fn[a+ba]=d.fn[a];d.fn[a]=function(){return b.apply(this,arguments)||c.apply(this,arguments)}}),d.ui||(d["cleanData"+ba]=d.cleanData,d.cleanData=function(a){for(var b,c=0;(b=d(a[c])).length;c++)if(b.attr(T))try{b.triggerHandler("removeqtip")}catch(e){}d["cleanData"+ba].apply(this,arguments)}),y.version="3.0.3",y.nextid=0,y.inactiveEvents=X,y.zindex=15e3,y.defaults={prerender:E,id:E,overwrite:D,suppress:D,content:{text:D,attr:"title",title:E,button:E},position:{my:"top left",at:"bottom right",target:E,container:E,viewport:E,adjust:{x:0,y:0,mouse:D,scroll:D,resize:D,method:"flipinvert flipinvert"},effect:function(a,b){d(this).animate(b,{duration:200,queue:E})}},show:{target:E,event:"mouseenter",effect:D,delay:90,solo:E,ready:E,autofocus:E},hide:{target:E,event:"mouseleave",effect:D,delay:0,fixed:E,inactive:E,leave:"window",distance:E},style:{classes:"",widget:E,width:E,height:E,def:D},events:{render:F,move:F,show:F,hide:F,toggle:F,visible:F,hidden:F,focus:F,blur:F}};var ha,ia,ja,ka,la,ma="margin",na="border",oa="color",pa="background-color",qa="transparent",ra=" !important",sa=!!b.createElement("canvas").getContext,ta=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,ua={},va=["Webkit","O","Moz","ms"];sa?(ka=a.devicePixelRatio||1,la=function(){var a=b.createElement("canvas").getContext("2d");return a.backingStorePixelRatio||a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||1}(),ja=ka/la):ia=function(a,b,c){return"<qtipvml:"+a+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(b||"")+' style="behavior: url(#default#VML); '+(c||"")+'" />'},d.extend(v.prototype,{init:function(a){var b,c;c=this.element=a.elements.tip=d("<div />",{"class":S+"-tip"}).prependTo(a.tooltip),sa?(b=d("<canvas />").appendTo(this.element)[0].getContext("2d"),b.lineJoin="miter",b.miterLimit=1e5,b.save()):(b=ia("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(b+b),a._bind(d("*",c).add(c),["click","mousedown"],function(a){a.stopPropagation()},this._ns)),a._bind(a.tooltip,"tooltipmove",this.reposition,this._ns,this),this.create()},_swapDimensions:function(){this.size[0]=this.options.height,this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width,this.size[1]=this.options.height},_useTitle:function(a){var b=this.qtip.elements.titlebar;return b&&(a.y===K||a.y===O&&this.element.position().top+this.size[1]/2+this.options.offset<b.outerHeight(D))},_parseCorner:function(a){var b=this.qtip.options.position.my;return a===E||b===E?a=E:a===D?a=new A(b.string()):a.string||(a=new A(a),a.fixed=D),a},_parseWidth:function(a,b,c){var d=this.qtip.elements,e=na+s(b)+"Width";return(c?u(c,e):u(d.content,e)||u(this._useTitle(a)&&d.titlebar||d.content,e)||u(d.tooltip,e))||0},_parseRadius:function(a){var b=this.qtip.elements,c=na+s(a.y)+s(a.x)+"Radius";return da.ie<9?0:u(this._useTitle(a)&&b.titlebar||b.content,c)||u(b.tooltip,c)||0},_invalidColour:function(a,b,c){var d=a.css(b);return!d||c&&d===a.css(c)||ta.test(d)?E:d},_parseColours:function(a){var b=this.qtip.elements,c=this.element.css("cssText",""),e=na+s(a[a.precedance])+s(oa),f=this._useTitle(a)&&b.titlebar||b.content,g=this._invalidColour,h=[];return h[0]=g(c,pa)||g(f,pa)||g(b.content,pa)||g(b.tooltip,pa)||c.css(pa),h[1]=g(c,e,oa)||g(f,e,oa)||g(b.content,e,oa)||g(b.tooltip,e,oa)||b.tooltip.css(e),d("*",c).add(c).css("cssText",pa+":"+qa+ra+";"+na+":0"+ra+";"),h},_calculateSize:function(a){var b,c,d,e=a.precedance===H,f=this.options.width,g=this.options.height,h="c"===a.abbrev(),i=(e?f:g)*(h?.5:1),j=Math.pow,k=Math.round,l=Math.sqrt(j(i,2)+j(g,2)),m=[this.border/i*l,this.border/g*l];return m[2]=Math.sqrt(j(m[0],2)-j(this.border,2)),m[3]=Math.sqrt(j(m[1],2)-j(this.border,2)),b=l+m[2]+m[3]+(h?0:m[0]),c=b/l,d=[k(c*f),k(c*g)],e?d:d.reverse()},_calculateTip:function(a,b,c){c=c||1,b=b||this.size;var d=b[0]*c,e=b[1]*c,f=Math.ceil(d/2),g=Math.ceil(e/2),h={br:[0,0,d,e,d,0],bl:[0,0,d,0,0,e],tr:[0,e,d,0,d,e],tl:[0,0,0,e,d,e],tc:[0,e,f,0,d,e],bc:[0,0,d,0,f,e],rc:[0,0,d,g,0,e],lc:[d,0,d,e,0,g]};return h.lt=h.br,h.rt=h.bl,h.lb=h.tr,h.rb=h.tl,h[a.abbrev()]},_drawCoords:function(a,b){a.beginPath(),a.moveTo(b[0],b[1]),a.lineTo(b[2],b[3]),a.lineTo(b[4],b[5]),a.closePath()},create:function(){var a=this.corner=(sa||da.ie)&&this._parseCorner(this.options.corner);return this.enabled=!!this.corner&&"c"!==this.corner.abbrev(),this.enabled&&(this.qtip.cache.corner=a.clone(),this.update()),this.element.toggle(this.enabled),this.corner},update:function(b,c){if(!this.enabled)return this;var e,f,g,h,i,j,k,l,m=this.qtip.elements,n=this.element,o=n.children(),p=this.options,q=this.size,r=p.mimic,s=Math.round;b||(b=this.qtip.cache.corner||this.corner),r===E?r=b:(r=new A(r),r.precedance=b.precedance,"inherit"===r.x?r.x=b.x:"inherit"===r.y?r.y=b.y:r.x===r.y&&(r[b.precedance]=b[b.precedance])),f=r.precedance,b.precedance===G?this._swapDimensions():this._resetDimensions(),e=this.color=this._parseColours(b),e[1]!==qa?(l=this.border=this._parseWidth(b,b[b.precedance]),p.border&&1>l&&!ta.test(e[1])&&(e[0]=e[1]),this.border=l=p.border!==D?p.border:l):this.border=l=0,k=this.size=this._calculateSize(b),n.css({width:k[0],height:k[1],lineHeight:k[1]+"px"}),j=b.precedance===H?[s(r.x===L?l:r.x===N?k[0]-q[0]-l:(k[0]-q[0])/2),s(r.y===K?k[1]-q[1]:0)]:[s(r.x===L?k[0]-q[0]:0),s(r.y===K?l:r.y===M?k[1]-q[1]-l:(k[1]-q[1])/2)],sa?(g=o[0].getContext("2d"),g.restore(),g.save(),g.clearRect(0,0,6e3,6e3),h=this._calculateTip(r,q,ja),i=this._calculateTip(r,this.size,ja),o.attr(I,k[0]*ja).attr(J,k[1]*ja),o.css(I,k[0]).css(J,k[1]),this._drawCoords(g,i),g.fillStyle=e[1],g.fill(),g.translate(j[0]*ja,j[1]*ja),this._drawCoords(g,h),g.fillStyle=e[0],g.fill()):(h=this._calculateTip(r),h="m"+h[0]+","+h[1]+" l"+h[2]+","+h[3]+" "+h[4]+","+h[5]+" xe",j[2]=l&&/^(r|b)/i.test(b.string())?8===da.ie?2:1:0,o.css({coordsize:k[0]+l+" "+k[1]+l,antialias:""+(r.string().indexOf(O)>-1),left:j[0]-j[2]*Number(f===G),top:j[1]-j[2]*Number(f===H),width:k[0]+l,height:k[1]+l}).each(function(a){var b=d(this);b[b.prop?"prop":"attr"]({coordsize:k[0]+l+" "+k[1]+l,path:h,fillcolor:e[0],filled:!!a,stroked:!a}).toggle(!(!l&&!a)),!a&&b.html(ia("stroke",'weight="'+2*l+'px" color="'+e[1]+'" miterlimit="1000" joinstyle="miter"'))})),a.opera&&setTimeout(function(){m.tip.css({display:"inline-block",visibility:"visible"})},1),c!==E&&this.calculate(b,k)},calculate:function(a,b){if(!this.enabled)return E;var c,e,f=this,g=this.qtip.elements,h=this.element,i=this.options.offset,j={};
return a=a||this.corner,c=a.precedance,b=b||this._calculateSize(a),e=[a.x,a.y],c===G&&e.reverse(),d.each(e,function(d,e){var h,k,l;e===O?(h=c===H?L:K,j[h]="50%",j[ma+"-"+h]=-Math.round(b[c===H?0:1]/2)+i):(h=f._parseWidth(a,e,g.tooltip),k=f._parseWidth(a,e,g.content),l=f._parseRadius(a),j[e]=Math.max(-f.border,d?k:i+(l>h?l:-h)))}),j[a[c]]-=b[c===G?0:1],h.css({margin:"",top:"",bottom:"",left:"",right:""}).css(j),j},reposition:function(a,b,d){function e(a,b,c,d,e){a===Q&&j.precedance===b&&k[d]&&j[c]!==O?j.precedance=j.precedance===G?H:G:a!==Q&&k[d]&&(j[b]=j[b]===O?k[d]>0?d:e:j[b]===d?e:d)}function f(a,b,e){j[a]===O?p[ma+"-"+b]=o[a]=g[ma+"-"+b]-k[b]:(h=g[e]!==c?[k[b],-g[b]]:[-k[b],g[b]],(o[a]=Math.max(h[0],h[1]))>h[0]&&(d[b]-=k[b],o[b]=E),p[g[e]!==c?e:b]=o[a])}if(this.enabled){var g,h,i=b.cache,j=this.corner.clone(),k=d.adjusted,l=b.options.position.adjust.method.split(" "),m=l[0],n=l[1]||l[0],o={left:E,top:E,x:0,y:0},p={};this.corner.fixed!==D&&(e(m,G,H,L,N),e(n,H,G,K,M),j.string()===i.corner.string()&&i.cornerTop===k.top&&i.cornerLeft===k.left||this.update(j,E)),g=this.calculate(j),g.right!==c&&(g.left=-g.right),g.bottom!==c&&(g.top=-g.bottom),g.user=this.offset,o.left=m===Q&&!!k.left,o.left&&f(G,L,N),o.top=n===Q&&!!k.top,o.top&&f(H,K,M),this.element.css(p).toggle(!(o.x&&o.y||j.x===O&&o.y||j.y===O&&o.x)),d.left-=g.left.charAt?g.user:m!==Q||o.top||!o.left&&!o.top?g.left+this.border:0,d.top-=g.top.charAt?g.user:n!==Q||o.left||!o.left&&!o.top?g.top+this.border:0,i.cornerLeft=k.left,i.cornerTop=k.top,i.corner=j.clone()}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns),this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}}),ha=R.tip=function(a){return new v(a,a.options.style.tip)},ha.initialize="render",ha.sanitize=function(a){if(a.style&&"tip"in a.style){var b=a.style.tip;"object"!=typeof b&&(b=a.style.tip={corner:b}),/string|boolean/i.test(typeof b.corner)||(b.corner=D)}},B.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create(),this.qtip.reposition()},"^style.tip.(height|width)$":function(a){this.size=[a.width,a.height],this.update(),this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}},d.extend(D,y.defaults,{style:{tip:{corner:D,mimic:E,width:6,height:6,border:D,offset:0}}});var wa,xa,ya="qtip-modal",za="."+ya;xa=function(){function a(a){if(d.expr[":"].focusable)return d.expr[":"].focusable;var b,c,e,f=!isNaN(d.attr(a,"tabindex")),g=a.nodeName&&a.nodeName.toLowerCase();return"area"===g?(b=a.parentNode,c=b.name,a.href&&c&&"map"===b.nodeName.toLowerCase()?(e=d("img[usemap=#"+c+"]")[0],!!e&&e.is(":visible")):!1):/input|select|textarea|button|object/.test(g)?!a.disabled:"a"===g?a.href||f:f}function c(a){j.length<1&&a.length?a.not("body").blur():j.first().focus()}function e(a){if(h.is(":visible")){var b,e=d(a.target),g=f.tooltip,i=e.closest(W);b=i.length<1?E:parseInt(i[0].style.zIndex,10)>parseInt(g[0].style.zIndex,10),b||e.closest(W)[0]===g[0]||c(e)}}var f,g,h,i=this,j={};d.extend(i,{init:function(){return h=i.elem=d("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return E}}).hide(),d(b.body).bind("focusin"+za,e),d(b).bind("keydown"+za,function(a){f&&f.options.show.modal.escape&&27===a.keyCode&&f.hide(a)}),h.bind("click"+za,function(a){f&&f.options.show.modal.blur&&f.hide(a)}),i},update:function(b){f=b,j=b.options.show.modal.stealfocus!==E?b.tooltip.find("*").filter(function(){return a(this)}):[]},toggle:function(a,e,j){var k=a.tooltip,l=a.options.show.modal,m=l.effect,n=e?"show":"hide",o=h.is(":visible"),p=d(za).filter(":visible:not(:animated)").not(k);return i.update(a),e&&l.stealfocus!==E&&c(d(":focus")),h.toggleClass("blurs",l.blur),e&&h.appendTo(b.body),h.is(":animated")&&o===e&&g!==E||!e&&p.length?i:(h.stop(D,E),d.isFunction(m)?m.call(h,e):m===E?h[n]():h.fadeTo(parseInt(j,10)||90,e?1:0,function(){e||h.hide()}),e||h.queue(function(a){h.css({left:"",top:""}),d(za).length||h.detach(),a()}),g=e,f.destroyed&&(f=F),i)}}),i.init()},xa=new xa,d.extend(w.prototype,{init:function(a){var b=a.tooltip;return this.options.on?(a.elements.overlay=xa.elem,b.addClass(ya).css("z-index",y.modal_zindex+d(za).length),a._bind(b,["tooltipshow","tooltiphide"],function(a,c,e){var f=a.originalEvent;if(a.target===b[0])if(f&&"tooltiphide"===a.type&&/mouse(leave|enter)/.test(f.type)&&d(f.relatedTarget).closest(xa.elem[0]).length)try{a.preventDefault()}catch(g){}else(!f||f&&"tooltipsolo"!==f.type)&&this.toggle(a,"tooltipshow"===a.type,e)},this._ns,this),a._bind(b,"tooltipfocus",function(a,c){if(!a.isDefaultPrevented()&&a.target===b[0]){var e=d(za),f=y.modal_zindex+e.length,g=parseInt(b[0].style.zIndex,10);xa.elem[0].style.zIndex=f-1,e.each(function(){this.style.zIndex>g&&(this.style.zIndex-=1)}),e.filter("."+$).qtip("blur",a.originalEvent),b.addClass($)[0].style.zIndex=f,xa.update(c);try{a.preventDefault()}catch(h){}}},this._ns,this),void a._bind(b,"tooltiphide",function(a){a.target===b[0]&&d(za).filter(":visible").not(b).last().qtip("focus",a)},this._ns,this)):this},toggle:function(a,b,c){return a&&a.isDefaultPrevented()?this:void xa.toggle(this.qtip,!!b,c)},destroy:function(){this.qtip.tooltip.removeClass(ya),this.qtip._unbind(this.qtip.tooltip,this._ns),xa.toggle(this.qtip,E),delete this.qtip.elements.overlay}}),wa=R.modal=function(a){return new w(a,a.options.show.modal)},wa.sanitize=function(a){a.show&&("object"!=typeof a.show.modal?a.show.modal={on:!!a.show.modal}:"undefined"==typeof a.show.modal.on&&(a.show.modal.on=D))},y.modal_zindex=y.zindex-200,wa.initialize="render",B.modal={"^show.modal.(on|blur)$":function(){this.destroy(),this.init(),this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}},d.extend(D,y.defaults,{show:{modal:{on:E,effect:D,blur:D,stealfocus:D,escape:D}}}),R.viewport=function(c,d,e,f,g,h,i){function j(a,b,c,e,f,g,h,i,j){var k=d[f],s=u[a],t=v[a],w=c===Q,x=s===f?j:s===g?-j:-j/2,y=t===f?i:t===g?-i:-i/2,z=q[f]+r[f]-(n?0:m[f]),A=z-k,B=k+j-(h===I?o:p)-z,C=x-(u.precedance===a||s===u[b]?y:0)-(t===O?i/2:0);return w?(C=(s===f?1:-1)*x,d[f]+=A>0?A:B>0?-B:0,d[f]=Math.max(-m[f]+r[f],k-C,Math.min(Math.max(-m[f]+r[f]+(h===I?o:p),k+C),d[f],"center"===s?k-x:1e9))):(e*=c===P?2:0,A>0&&(s!==f||B>0)?(d[f]-=C+e,l.invert(a,f)):B>0&&(s!==g||A>0)&&(d[f]-=(s===O?-C:C)+e,l.invert(a,g)),d[f]<q[f]&&-d[f]>B&&(d[f]=k,l=u.clone())),d[f]-k}var k,l,m,n,o,p,q,r,s=e.target,t=c.elements.tooltip,u=e.my,v=e.at,w=e.adjust,x=w.method.split(" "),y=x[0],z=x[1]||x[0],A=e.viewport,B=e.container,C={left:0,top:0};return A.jquery&&s[0]!==a&&s[0]!==b.body&&"none"!==w.method?(m=B.offset()||C,n="static"===B.css("position"),k="fixed"===t.css("position"),o=A[0]===a?A.width():A.outerWidth(E),p=A[0]===a?A.height():A.outerHeight(E),q={left:k?0:A.scrollLeft(),top:k?0:A.scrollTop()},r=A.offset()||C,"shift"===y&&"shift"===z||(l=u.clone()),C={left:"none"!==y?j(G,H,y,w.x,L,N,I,f,h):0,top:"none"!==z?j(H,G,z,w.y,K,M,J,g,i):0,my:l}):C},R.polys={polygon:function(a,b){var c,d,e,f={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:E},g=0,h=[],i=1,j=1,k=0,l=0;for(g=a.length;g--;)c=[parseInt(a[--g],10),parseInt(a[g+1],10)],c[0]>f.position.right&&(f.position.right=c[0]),c[0]<f.position.left&&(f.position.left=c[0]),c[1]>f.position.bottom&&(f.position.bottom=c[1]),c[1]<f.position.top&&(f.position.top=c[1]),h.push(c);if(d=f.width=Math.abs(f.position.right-f.position.left),e=f.height=Math.abs(f.position.bottom-f.position.top),"c"===b.abbrev())f.position={left:f.position.left+f.width/2,top:f.position.top+f.height/2};else{for(;d>0&&e>0&&i>0&&j>0;)for(d=Math.floor(d/2),e=Math.floor(e/2),b.x===L?i=d:b.x===N?i=f.width-d:i+=Math.floor(d/2),b.y===K?j=e:b.y===M?j=f.height-e:j+=Math.floor(e/2),g=h.length;g--&&!(h.length<2);)k=h[g][0]-f.position.left,l=h[g][1]-f.position.top,(b.x===L&&k>=i||b.x===N&&i>=k||b.x===O&&(i>k||k>f.width-i)||b.y===K&&l>=j||b.y===M&&j>=l||b.y===O&&(j>l||l>f.height-j))&&h.splice(g,1);f.position={left:h[0][0],top:h[0][1]}}return f},rect:function(a,b,c,d){return{width:Math.abs(c-a),height:Math.abs(d-b),position:{left:Math.min(a,c),top:Math.min(b,d)}}},_angles:{tc:1.5,tr:7/4,tl:5/4,bc:.5,br:.25,bl:.75,rc:2,lc:1,c:0},ellipse:function(a,b,c,d,e){var f=R.polys._angles[e.abbrev()],g=0===f?0:c*Math.cos(f*Math.PI),h=d*Math.sin(f*Math.PI);return{width:2*c-Math.abs(g),height:2*d-Math.abs(h),position:{left:a+g,top:b+h},adjustable:E}},circle:function(a,b,c,d){return R.polys.ellipse(a,b,c,c,d)}},R.svg=function(a,c,e){for(var f,g,h,i,j,k,l,m,n,o=c[0],p=d(o.ownerSVGElement),q=o.ownerDocument,r=(parseInt(c.css("stroke-width"),10)||0)/2;!o.getBBox;)o=o.parentNode;if(!o.getBBox||!o.parentNode)return E;switch(o.nodeName){case"ellipse":case"circle":m=R.polys.ellipse(o.cx.baseVal.value,o.cy.baseVal.value,(o.rx||o.r).baseVal.value+r,(o.ry||o.r).baseVal.value+r,e);break;case"line":case"polygon":case"polyline":for(l=o.points||[{x:o.x1.baseVal.value,y:o.y1.baseVal.value},{x:o.x2.baseVal.value,y:o.y2.baseVal.value}],m=[],k=-1,i=l.numberOfItems||l.length;++k<i;)j=l.getItem?l.getItem(k):l[k],m.push.apply(m,[j.x,j.y]);m=R.polys.polygon(m,e);break;default:m=o.getBBox(),m={width:m.width,height:m.height,position:{left:m.x,top:m.y}}}return n=m.position,p=p[0],p.createSVGPoint&&(g=o.getScreenCTM(),l=p.createSVGPoint(),l.x=n.left,l.y=n.top,h=l.matrixTransform(g),n.left=h.x,n.top=h.y),q!==b&&"mouse"!==a.position.target&&(f=d((q.defaultView||q.parentWindow).frameElement).offset(),f&&(n.left+=f.left,n.top+=f.top)),q=d(q),n.left+=q.scrollLeft(),n.top+=q.scrollTop(),m},R.imagemap=function(a,b,c){b.jquery||(b=d(b));var e,f,g,h,i,j=(b.attr("shape")||"rect").toLowerCase().replace("poly","polygon"),k=d('img[usemap="#'+b.parent("map").attr("name")+'"]'),l=d.trim(b.attr("coords")),m=l.replace(/,$/,"").split(",");if(!k.length)return E;if("polygon"===j)h=R.polys.polygon(m,c);else{if(!R.polys[j])return E;for(g=-1,i=m.length,f=[];++g<i;)f.push(parseInt(m[g],10));h=R.polys[j].apply(this,f.concat(c))}return e=k.offset(),e.left+=Math.ceil((k.outerWidth(E)-k.width())/2),e.top+=Math.ceil((k.outerHeight(E)-k.height())/2),h.position.left+=e.left,h.position.top+=e.top,h};var Aa,Ba='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';d.extend(x.prototype,{_scroll:function(){var b=this.qtip.elements.overlay;b&&(b[0].style.top=d(a).scrollTop()+"px")},init:function(c){var e=c.tooltip;d("select, object").length<1&&(this.bgiframe=c.elements.bgiframe=d(Ba).appendTo(e),c._bind(e,"tooltipmove",this.adjustBGIFrame,this._ns,this)),this.redrawContainer=d("<div/>",{id:S+"-rcontainer"}).appendTo(b.body),c.elements.overlay&&c.elements.overlay.addClass("qtipmodal-ie6fix")&&(c._bind(a,["scroll","resize"],this._scroll,this._ns,this),c._bind(e,["tooltipshow"],this._scroll,this._ns,this)),this.redraw()},adjustBGIFrame:function(){var a,b,c=this.qtip.tooltip,d={height:c.outerHeight(E),width:c.outerWidth(E)},e=this.qtip.plugins.tip,f=this.qtip.elements.tip;b=parseInt(c.css("borderLeftWidth"),10)||0,b={left:-b,top:-b},e&&f&&(a="x"===e.corner.precedance?[I,L]:[J,K],b[a[1]]-=f[a[0]]()),this.bgiframe.css(b).css(d)},redraw:function(){if(this.qtip.rendered<1||this.drawing)return this;var a,b,c,d,e=this.qtip.tooltip,f=this.qtip.options.style,g=this.qtip.options.position.container;return this.qtip.drawing=1,f.height&&e.css(J,f.height),f.width?e.css(I,f.width):(e.css(I,"").appendTo(this.redrawContainer),b=e.width(),1>b%2&&(b+=1),c=e.css("maxWidth")||"",d=e.css("minWidth")||"",a=(c+d).indexOf("%")>-1?g.width()/100:0,c=(c.indexOf("%")>-1?a:1*parseInt(c,10))||b,d=(d.indexOf("%")>-1?a:1*parseInt(d,10))||0,b=c+d?Math.min(Math.max(b,d),c):b,e.css(I,Math.round(b)).appendTo(g)),this.drawing=0,this},destroy:function(){this.bgiframe&&this.bgiframe.remove(),this.qtip._unbind([a,this.qtip.tooltip],this._ns)}}),Aa=R.ie6=function(a){return 6===da.ie?new x(a):E},Aa.initialize="render",B.ie6={"^content|style$":function(){this.redraw()}}})}(window,document);
