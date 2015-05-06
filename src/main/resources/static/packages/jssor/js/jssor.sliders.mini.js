﻿(function (g, f, b, e, c, d, h) {/*! Jssor */
    new (function () {
    });
    var l = g.$JssorEasing$ = {
        $EaseLinear: function (a) {
            return a
        }, $EaseGoBack: function (a) {
            return 1 - b.abs(2 - 1)
        }, $EaseSwing: function (a) {
            return -b.cos(a * b.PI) / 2 + .5
        }, $EaseInQuad: function (a) {
            return a * a
        }, $EaseOutQuad: function (a) {
            return -a * (a - 2)
        }, $EaseInOutQuad: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
        }, $EaseInCubic: function (a) {
            return a * a * a
        }, $EaseOutCubic: function (a) {
            return (a -= 1) * a * a + 1
        }, $EaseInOutCubic: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
        }, $EaseInQuart: function (a) {
            return a * a * a * a
        }, $EaseOutQuart: function (a) {
            return -((a -= 1) * a * a * a - 1)
        }, $EaseInOutQuart: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
        }, $EaseInQuint: function (a) {
            return a * a * a * a * a
        }, $EaseOutQuint: function (a) {
            return (a -= 1) * a * a * a * a + 1
        }, $EaseInOutQuint: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
        }, $EaseInSine: function (a) {
            return 1 - b.cos(a * b.PI / 2)
        }, $EaseOutSine: function (a) {
            return b.sin(a * b.PI / 2)
        }, $EaseInOutSine: function (a) {
            return -1 / 2 * (b.cos(b.PI * a) - 1)
        }, $EaseInExpo: function (a) {
            return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
        }, $EaseOutExpo: function (a) {
            return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
        }, $EaseInOutExpo: function (a) {
            return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
        }, $EaseInCirc: function (a) {
            return -(b.sqrt(1 - a * a) - 1)
        }, $EaseOutCirc: function (a) {
            return b.sqrt(1 - (a -= 1) * a)
        }, $EaseInOutCirc: function (a) {
            return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
        }, $EaseInElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
        }, $EaseOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
        }, $EaseInOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .45, d = .1125;
            return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
        }, $EaseInBack: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, $EaseOutBack: function (a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        }, $EaseInOutBack: function (a) {
            var b = 1.70158;
            return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, $EaseInBounce: function (a) {
            return 1 - l.$EaseOutBounce(1 - a)
        }, $EaseOutBounce: function (a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }, $EaseInOutBounce: function (a) {
            return a < 1 / 2 ? l.$EaseInBounce(a * 2) * .5 : l.$EaseOutBounce(a * 2 - 1) * .5 + .5
        }, $EaseInWave: function (a) {
            return 1 - b.cos(a * b.PI * 2)
        }, $EaseOutWave: function (a) {
            return b.sin(a * b.PI * 2)
        }, $EaseOutJump: function (a) {
            return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        }, $EaseInJump: function (a) {
            return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        }
    }, q = {me: 37, Ed: 39}, j, a = new function () {
        var j = this, nb = 1, F = 2, F = 3, gb = 4, kb = 5, r = 0, m = 0, v = 0, y = 0, rb = navigator.appName, l = navigator.userAgent, q = f.documentElement, B;

        function D() {
            if (!r)if (rb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                var d = l.indexOf("MSIE");
                r = nb;
                v = o(l.substring(d + 5, l.indexOf(";", d)));
                /*@cc_on@*/
                m = f.documentMode || v
            } else if (rb == "Netscape" && !!g.addEventListener) {
                var c = l.indexOf("Firefox"), a = l.indexOf("Safari"), h = l.indexOf("Chrome"), b = l.indexOf("AppleWebKit");
                if (c >= 0) {
                    r = F;
                    m = o(l.substring(c + 8))
                } else if (a >= 0) {
                    var i = l.substring(0, a).lastIndexOf("/");
                    r = h >= 0 ? gb : F;
                    m = o(l.substring(i + 1, a))
                }
                if (b >= 0)y = o(l.substring(b + 12))
            } else {
                var e = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(l);
                if (e) {
                    r = kb;
                    m = o(e[2])
                }
            }
        }

        function t() {
            D();
            return r == nb
        }

        function N() {
            return t() && (m < 6 || f.compatMode == "BackCompat")
        }

        function sb() {
            D();
            return r == F
        }

        function fb() {
            D();
            return r == gb
        }

        function jb() {
            D();
            return r == kb
        }

        function A() {
            return t() && m < 9
        }

        function w(a) {
            if (!B) {
                k(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function (b) {
                    if (a.style[b] != h) {
                        B = b;
                        return c
                    }
                });
                B = B || "transform"
            }
            return B
        }

        function pb(a) {
            return Object.prototype.toString.call(a)
        }

        var I;

        function k(a, d) {
            if (pb(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)if (d(a[b], b, a))return c
            } else for (var e in a)if (d(a[e], e, a))return c
        }

        function xb() {
            if (!I) {
                I = {};
                k(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
                    I["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return I
        }

        function z(a) {
            return a == e ? String(a) : xb()[pb(a)] || "object"
        }

        function qb(b, a) {
            setTimeout(b, a || 0)
        }

        function G(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            k(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function db(b, a) {
            if (m < 9)b.style.filter = a
        }

        j.Ab = t;
        j.re = sb;
        j.ib = fb;
        j.Gb = A;
        j.V = function () {
            return m
        };
        j.bc = function () {
            return y
        };
        j.$Delay = qb;
        function ob(a) {
            a.constructor === ob.caller && a.ac && a.ac()
        }

        j.ac = ob;
        j.O = function (a) {
            if (j.de(a))a = f.getElementById(a);
            return a
        };
        function u(a) {
            return a || g.event
        }

        u = u;
        j.ge = function (a) {
            a = u(a);
            return a.target || a.srcElement || f
        };
        j.Zb = function (a) {
            a = u(a);
            var b = f.body;
            return {
                x: a.pageX || a.clientX + (q.scrollLeft || b.scrollLeft || 0) - (q.clientLeft || b.clientLeft || 0) || 0,
                y: a.pageY || a.clientY + (q.scrollTop || b.scrollTop || 0) - (q.clientTop || b.clientTop || 0) || 0
            }
        };
        function E(c, d, a) {
            if (a != h)c.style[d] = a; else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && g.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, e);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function W(b, c, a, d) {
            if (a != h) {
                d && (a += "px");
                E(b, c, a)
            } else return o(E(b, c))
        }

        function p(d, a) {
            var b = a & 2, c = a ? W : E;
            return function (e, a) {
                return c(e, d, a, b)
            }
        }

        function vb(b) {
            if (t() && v < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? o(a[1]) / 100 : 1
            } else return o(b.style.opacity || "1")
        }

        function wb(c, a, f) {
            if (t() && v < 9) {
                var h = c.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = b.round(100 * a), d = "";
                if (e < 100 || f)d = "alpha(opacity=" + e + ") ";
                var g = G(h, [i], d);
                db(c, g)
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
        }

        j.ce = function (b, c) {
            var a = w(b);
            if (a)b.style[a + "Origin"] = c
        };
        j.Qc = function (a, c) {
            if (t() && v < 9 || v < 10 && N())a.style.zoom = c == 1 ? "" : c; else {
                var b = w(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = G(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        j.Jd = function (a) {
            if (!a.style[w(a)] || a.style[w(a)] == "none")a.style[w(a)] = "perspective(2000px)"
        };
        j.jb = function (b, a) {
            return function (c) {
                c = u(c);
                var e = c.type, d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !j.Fd(a, d)) && b(c)
            }
        };
        j.e = function (a, c, d, b) {
            a = j.O(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        j.Pd = function (a, c, d, b) {
            a = j.O(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        j.Nd = function (b, a) {
            j.e(A() ? f : g, "mouseup", b, a)
        };
        j.N = function (a) {
            a = u(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = d
        };
        j.r = function (d, c) {
            var a = [].slice.call(arguments, 2), b = function () {
                var b = a.concat([].slice.call(arguments, 0));
                return c.apply(d, b)
            };
            return b
        };
        j.le = function (a, b) {
            if (b == h)return a.textContent || a.innerText;
            var c = f.createTextNode(b);
            j.kc(a);
            a.appendChild(c)
        };
        j.kc = function (a) {
            a.innerHTML = ""
        };
        j.cb = function (c) {
            for (var b = [], a = c.firstChild; a; a = a.nextSibling)a.nodeType == 1 && b.push(a);
            return b
        };
        function hb(a, c, b, f) {
            if (!b)b = "u";
            for (a = a ? a.firstChild : e; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (S(a, b) == c)return a;
                if (f) {
                    var d = hb(a, c, b, f);
                    if (d)return d
                }
            }
        }

        j.o = hb;
        function bb(a, c, d) {
            for (a = a ? a.firstChild : e; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (d) {
                    var b = bb(a, c, d);
                    if (b)return b
                }
            }
        }

        j.pe = bb;
        j.qe = function (b, a) {
            return b.getElementsByTagName(a)
        };
        function V(c) {
            for (var b = 1; b < arguments.length; b++) {
                var a = arguments[b];
                if (a)for (var d in a)c[d] = a[d]
            }
            return c
        }

        j.n = V;
        j.Nc = function (a) {
            return z(a) == "function"
        };
        j.de = function (a) {
            return z(a) == "string"
        };
        j.ad = function (a) {
            return !isNaN(o(a)) && isFinite(a)
        };
        j.f = k;
        function Q(a) {
            return f.createElement(a)
        }

        j.P = function () {
            return Q("DIV", f)
        };
        j.Zc = function () {
            return Q("SPAN", f)
        };
        j.zb = function () {
        };
        function T(b, c, a) {
            if (a == h)return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function S(a, b) {
            return T(a, b) || T(a, "data-" + b)
        }

        j.db = S;
        function s(b, a) {
            if (a == h)return b.className;
            b.className = a
        }

        j.tc = s;
        j.nc = function (a) {
            return a.parentNode
        };
        j.z = function (a) {
            j.H(a, "none")
        };
        j.p = function (a, b) {
            j.H(a, b == d ? "none" : "")
        };
        j.Pc = function (b, a) {
            b.removeAttribute(a)
        };
        j.Tc = function () {
            return t() && m < 10
        };
        j.Uc = function (d, c) {
            if (c)d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)"; else {
                var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = G(g, f, "");
                a.qb(d, e)
            }
        };
        j.u = function () {
            return +new Date
        };
        j.t = function (b, a) {
            b.appendChild(a)
        };
        j.fb = function (c, b, a) {
            c.insertBefore(b, a)
        };
        j.T = function (b, a) {
            b.removeChild(a)
        };
        j.Rc = function (b, a) {
            k(a, function (a) {
                j.T(b, a)
            })
        };
        j.ud = function (a) {
            j.Rc(a, j.cb(a))
        };
        function o(a) {
            return parseFloat(a)
        }

        j.Fd = function (b, a) {
            var c = f.body;
            while (a && b != a && c != a)try {
                a = a.parentNode
            } catch (e) {
                return d
            }
            return b == a
        };
        function U(b, a) {
            return b.cloneNode(a)
        }

        j.U = U;
        function M(a) {
            if (a) {
                var b = a.$FlyDirection;
                if (b & 1)a.x = a.$ScaleHorizontal || 1;
                if (b & 2)a.x = -a.$ScaleHorizontal || -1;
                if (b & 4)a.y = a.$ScaleVertical || 1;
                if (b & 8)a.y = -a.$ScaleVertical || -1;
                M(a.$Brother)
            }
        }

        j.gb = function (a) {
            if (a) {
                for (var b = 0; b < a.length; b++)M(a[b]);
                for (var c in a)M(a[c])
            }
        };
        function O(b, a, c) {
            a.onload = e;
            a.abort = e;
            b && b(a, c)
        }

        j.R = function (d, b) {
            if (jb() && m < 11.6 || !d)O(b, e); else {
                var a = new Image;
                a.onload = j.r(e, O, b, a);
                a.onabort = j.r(e, O, b, a, c);
                a.src = d
            }
        };
        j.td = function (e, b, f) {
            var d = e.length + 1;

            function c(a) {
                d--;
                if (b && a && a.src == b.src)b = a;
                !d && f && f(b)
            }

            k(e, function (b) {
                a.R(b.src, c)
            });
            c()
        };
        j.Yb = function (d, k, j, i) {
            if (i)d = U(d, c);
            for (var h = a.qe(d, k), f = h.length - 1; f > -1; f--) {
                var b = h[f], e = U(j, c);
                s(e, s(b));
                a.qb(e, b.style.cssText);
                var g = a.nc(b);
                a.fb(g, e, b);
                a.T(g, b)
            }
            return d
        };
        var C;

        function zb(b) {
            var g = this, m, i, l, e;

            function f() {
                var a = m;
                if (e)a += "ds"; else if (i)a += "dn"; else if (l)a += "av";
                s(b, a)
            }

            function n(a) {
                if (e)j.N(a); else {
                    C.push(g);
                    i = c;
                    f()
                }
            }

            g.Cd = function () {
                i = d;
                f()
            };
            g.gc = function (a) {
                if (a != h) {
                    l = a;
                    f()
                } else return l
            };
            g.$Enable = function (a) {
                if (a != h) {
                    e = !a;
                    f()
                } else return !e
            };
            b = j.O(b);
            if (!C) {
                j.Nd(function () {
                    var a = C;
                    C = [];
                    k(a, function (a) {
                        a.Cd()
                    })
                });
                C = []
            }
            m = s(b);
            a.e(b, "mousedown", n)
        }

        j.rb = function (a) {
            return new zb(a)
        };
        j.sb = E;
        j.S = p("overflow");
        j.k = p("top", 2);
        j.m = p("left", 2);
        j.i = p("width", 2);
        j.g = p("height", 2);
        j.te = p("marginLeft", 2);
        j.ne = p("marginTop", 2);
        j.q = p("position");
        j.H = p("display");
        j.A = p("zIndex", 1);
        j.Qb = function (b, a, c) {
            if (a != h)wb(b, a, c); else return vb(b)
        };
        j.qb = function (a, b) {
            if (b != h)a.style.cssText = b; else return a.style.cssText
        };
        var R = {$Opacity: j.Qb, $Top: j.k, $Left: j.m, Ob: j.i, Rb: j.g, Q: j.q, Vf: j.H, $ZIndex: j.A}, x;

        function H() {
            if (!x)x = V({Uf: j.ne, Tf: j.te, $Clip: j.Uc}, R);
            return x
        }

        j.zd = H;
        j.I = function (c, b) {
            var a = H();
            k(b, function (d, b) {
                a[b] && a[b](c, d)
            })
        };
        new (function () {
        })
    }, m = function () {
        var b = this, d = [];

        function i(a, b) {
            d.push({Ub: a, Lb: b})
        }

        function h(b, c) {
            a.f(d, function (a, e) {
                a.Ub == b && a.Lb === c && d.splice(e, 1)
            })
        }

        b.$On = b.addEventListener = i;
        b.$Off = b.removeEventListener = h;
        b.b = function (b) {
            var c = [].slice.call(arguments, 1);
            a.f(d, function (a) {
                try {
                    a.Ub == b && a.Lb.apply(g, c)
                } catch (d) {
                }
            })
        }
    };
    j = function (n, m, g, O, z, x) {
        n = n || 0;
        var f = this, r, o, p, y, A = 0, C, M, L, D, j = 0, t = 0, E, k = n, i, h, q, u = [], B;

        function I(b) {
            i += b;
            h += b;
            k += b;
            j += b;
            t += b;
            a.f(u, function (a) {
                a, a.$Shift(b)
            })
        }

        function N(a, b) {
            var c = a - i + n * b;
            I(c);
            return h
        }

        function w(w, G) {
            var n = w;
            if (q && (n >= h || n <= i))n = ((n - i) % q + q) % q + i;
            if (!E || y || G || j != n) {
                var p = b.min(n, h);
                p = b.max(p, i);
                if (!E || y || G || p != t) {
                    if (x) {
                        var d = x;
                        if (z) {
                            var s = (p - k) / (m || 1);
                            if (g.gd && a.ib() && m)s = b.round(s / 16 * m) * 16 / m;
                            if (g.$Reverse)s = 1 - s;
                            d = {};
                            for (var o in x) {
                                var R = M[o] || 1, J = L[o] || [0, 1], l = (s - J[0]) / J[1];
                                l = b.min(b.max(l, 0), 1);
                                l = l * R;
                                var H = b.floor(l);
                                if (l != H)l -= H;
                                var Q = C[o] || C.tb, I = Q(l), r, K = z[o], F = x[o];
                                if (a.ad(F))r = K + (F - K) * I; else {
                                    r = a.n({L: {}}, z[o]);
                                    a.f(F.L, function (c, b) {
                                        var a = c * I;
                                        r.L[b] = a;
                                        r[b] += a
                                    })
                                }
                                d[o] = r
                            }
                        }
                        if (z.$Zoom);
                        if (x.$Clip && g.$Move) {
                            var v = d.$Clip.L, D = (v.$Top || 0) + (v.$Bottom || 0), A = (v.$Left || 0) + (v.$Right || 0);
                            d.$Left = (d.$Left || 0) + A;
                            d.$Top = (d.$Top || 0) + D;
                            d.$Clip.$Left -= A;
                            d.$Clip.$Right -= A;
                            d.$Clip.$Top -= D;
                            d.$Clip.$Bottom -= D
                        }
                        if (d.$Clip && a.Tc() && !d.$Clip.$Top && !d.$Clip.$Left && d.$Clip.$Right == g.$OriginalWidth && d.$Clip.$Bottom == g.$OriginalHeight)d.$Clip = e;
                        a.f(d, function (b, a) {
                            B[a] && B[a](O, b)
                        })
                    }
                    f.Ib(t - k, p - k)
                }
                t = p;
                a.f(u, function (b, c) {
                    var a = w < j ? u[u.length - c - 1] : b;
                    a.C(w, G)
                });
                var P = j, N = w;
                j = n;
                E = c;
                f.ub(P, N)
            }
        }

        function F(a, c) {
            c && a.qc(h, 1);
            h = b.max(h, a.W());
            u.push(a)
        }

        function H() {
            if (r) {
                var d = a.u(), e = b.min(d - A, 80), c = j + e * p;
                A = d;
                if (c * p >= o * p)c = o;
                w(c);
                if (!y && c * p >= o * p)J(D); else a.$Delay(H, g.$Interval)
            }
        }

        function v(d, e, g) {
            if (!r) {
                r = c;
                y = g;
                D = e;
                d = b.max(d, i);
                d = b.min(d, h);
                o = d;
                p = o < j ? -1 : 1;
                f.sc();
                A = a.u();
                H()
            }
        }

        function J(a) {
            if (r) {
                y = r = D = d;
                f.cc();
                a && a()
            }
        }

        f.$Play = function (a, b, c) {
            v(a ? j + a : h, b, c)
        };
        f.fc = v;
        f.D = J;
        f.nd = function (a) {
            v(a)
        };
        f.B = function () {
            return j
        };
        f.dc = function () {
            return o
        };
        f.eb = function () {
            return t
        };
        f.C = w;
        f.ic = function () {
            w(i, c)
        };
        f.$Move = function (a) {
            w(j + a)
        };
        f.$IsPlaying = function () {
            return r
        };
        f.Bd = function (a) {
            q = a
        };
        f.qc = N;
        f.$Shift = I;
        f.Fb = function (a) {
            F(a, 0)
        };
        f.Db = function (a) {
            F(a, 1)
        };
        f.W = function () {
            return h
        };
        f.ub = f.sc = f.cc = f.Ib = a.zb;
        f.Bb = a.u();
        g = a.n({$Interval: 16}, g);
        q = g.mc;
        B = a.n({}, a.zd(), g.pc);
        i = k = n;
        h = n + m;
        var M = g.$Round || {}, L = g.$During || {};
        C = a.n({tb: a.Nc(g.$Easing) && g.$Easing || l.$EaseSwing}, g.$Easing)
    };
    var r;
    new function () {
        ;
        function n(r, lc) {
            var k = this;

            function Gc() {
                var a = this;
                j.call(a, -1e8, 2e8);
                a.Kd = function () {
                    var c = a.eb(), d = b.floor(c), f = v(d), e = c - b.floor(c);
                    return {E: f, Vd: d, Q: e}
                };
                a.ub = function (d, a) {
                    var e = b.floor(a);
                    if (e != a && a > d)e++;
                    Yb(e, c);
                    k.b(n.$EVT_POSITION_CHANGE, v(a), v(d), a, d)
                }
            }

            function Fc() {
                var b = this;
                j.call(b, 0, 0, {mc: u});
                a.f(E, function (a) {
                    N & 1 && a.Bd(u);
                    b.Db(a);
                    a.$Shift(mb / fc)
                })
            }

            function Ec() {
                var a = this, b = Xb.$Elmt;
                j.call(a, -1, 2, {$Easing: l.$EaseLinear, pc: {Q: dc}, mc: u}, b, {Q: 1}, {Q: -1});
                a.ob = b
            }

            function tc(q, o) {
                var f = this, i, l, g, m, h;
                j.call(f, -1e8, 2e8);
                f.sc = function () {
                    U = c;
                    Y = e;
                    k.b(n.$EVT_SWIPE_START, v(z.B()), z.B())
                };
                f.cc = function () {
                    U = d;
                    m = d;
                    var a = z.Kd();
                    k.b(n.$EVT_SWIPE_END, v(z.B()), z.B());
                    !a.Q && Ic(a.Vd, t)
                };
                f.ub = function (f, e) {
                    var d;
                    if (m)d = h; else {
                        d = l;
                        if (g) {
                            var c = e / g;
                            if (a.ib() || a.re()) {
                                b.round(c * 16 / g) / 16 * g;
                                c = parseFloat(c.toFixed(4))
                            }
                            d = p.$SlideEasing(c) * (l - i) + i
                        }
                    }
                    z.C(d)
                };
                f.hb = function (a, c, b, d) {
                    i = a;
                    l = c;
                    g = b;
                    z.C(a);
                    f.C(0);
                    f.fc(b, d)
                };
                f.se = function (a) {
                    m = c;
                    h = a;
                    f.$Play(a, e, c)
                };
                f.ke = function (a) {
                    h = a
                };
                z = new Gc;
                z.Fb(q);
                z.Fb(o)
            }

            function uc() {
                var c = this, b = cc();
                a.A(b, 0);
                c.$Elmt = b;
                c.mb = function () {
                    a.z(b);
                    a.kc(b)
                }
            }

            function Dc(o, l) {
                var f = this, r, x, H, y, g, z = [], R, q, T, G, P, F, h, s, i;
                j.call(f, -w, w + 1, {});
                function D(a) {
                    x && x.Hb();
                    r && r.Hb();
                    S(o, a);
                    F = c;
                    r = new J.$Class(o, J, 1);
                    x = new J.$Class(o, J);
                    x.ic();
                    r.ic()
                }

                function Z() {
                    r.Bb < J.Bb && D()
                }

                function I(m, q, l) {
                    if (!G) {
                        G = c;
                        if (g && l) {
                            var e = l.width, b = l.height, j = e, i = b;
                            if (e && b && p.$FillMode) {
                                if (p.$FillMode & 3 && (!(p.$FillMode & 4) || e > M || b > L)) {
                                    var h = d, o = M / L * b / e;
                                    if (p.$FillMode & 1)h = o > 1; else if (p.$FillMode & 2)h = o < 1;
                                    j = h ? e * L / b : M;
                                    i = h ? L : b * M / e
                                }
                                a.i(g, j);
                                a.g(g, i);
                                a.k(g, (L - i) / 2);
                                a.m(g, (M - j) / 2)
                            }
                            a.q(g, "absolute");
                            k.b(n.$EVT_LOAD_END, ic)
                        }
                    }
                    a.z(q);
                    m && m(f)
                }

                function U(b, c, d, e) {
                    if (e == Y && t == l && V)if (!Hc) {
                        var a = v(b);
                        C.ye(a, l, c, f, d);
                        c.Md();
                        gb.qc(a, 1);
                        gb.C(a);
                        A.hb(b, b, 0)
                    }
                }

                function ab(b) {
                    if (b == Y && t == l) {
                        if (!h) {
                            var a = e;
                            if (C)if (C.E == l)a = C.Id(); else C.mb();
                            Z();
                            h = new Bc(l, a, f.ve(), f.Rd());
                            h.Mc(i)
                        }
                        !h.$IsPlaying() && h.Eb()
                    }
                }

                function Q(d, c) {
                    if (d == l) {
                        if (d != c)E[c] && E[c].Ld(); else h && h.be();
                        i && i.$Enable();
                        var k = Y = a.u();
                        f.R(a.r(e, ab, k))
                    } else {
                        var j = b.abs(l - d), g = w + p.$LazyLoading;
                        (!P || j <= g || u - j <= g) && f.R()
                    }
                }

                function bb() {
                    if (t == l && h) {
                        h.D();
                        i && i.$Quit();
                        i && i.$Disable();
                        h.zc()
                    }
                }

                function cb() {
                    t == l && h && h.D()
                }

                function O(b) {
                    if (X)a.N(b); else k.b(n.$EVT_CLICK, l, b)
                }

                function N() {
                    i = s.pInstance;
                    h && h.Mc(i)
                }

                f.R = function (d, b) {
                    b = b || y;
                    if (z.length && !G) {
                        a.p(b);
                        if (!T) {
                            T = c;
                            k.b(n.$EVT_LOAD_START);
                            a.f(z, function (b) {
                                if (!b.src) {
                                    b.src = a.db(b, "src2");
                                    a.H(b, b["display-origin"])
                                }
                            })
                        }
                        a.td(z, g, a.r(e, I, d, b))
                    } else I(d, b)
                };
                f.Ud = function () {
                    if (C) {
                        var b = C.ie(u);
                        if (b) {
                            var f = Y = a.u(), c = l + bc, d = E[v(c)];
                            return d.R(a.r(e, U, c, d, b, f), y)
                        }
                    }
                    hb(t + p.$AutoPlaySteps * bc)
                };
                f.Cb = function () {
                    Q(l, l)
                };
                f.Ld = function () {
                    i && i.$Quit();
                    i && i.$Disable();
                    f.Kc();
                    h && h.Hd();
                    h = e;
                    D()
                };
                f.Md = function () {
                    a.z(o)
                };
                f.Kc = function () {
                    a.p(o)
                };
                f.Od = function () {
                    i && i.$Enable()
                };
                function S(b, f, e) {
                    if (b["jssor-slider"])return;
                    e = e || 0;
                    if (!F) {
                        if (b.tagName == "IMG") {
                            z.push(b);
                            if (!b.src) {
                                P = c;
                                b["display-origin"] = a.H(b);
                                a.z(b)
                            }
                        }
                        a.Gb() && a.A(b, (a.A(b) || 0) + 1);
                        if (p.$HWA && a.bc() > 0)(!K || a.bc() < 534 || !kb) && a.Jd(b)
                    }
                    var h = a.cb(b);
                    a.f(h, function (h) {
                        var j = a.db(h, "u");
                        if (j == "player" && !s) {
                            s = h;
                            if (s.pInstance)N(); else a.e(s, "dataavailable", N)
                        }
                        if (j == "caption") {
                            if (!a.Ab() && !f) {
                                var i = a.U(h, c);
                                a.fb(b, i, h);
                                a.T(b, h);
                                h = i;
                                f = c
                            }
                        } else if (!F && !e && !g && a.db(h, "u") == "image") {
                            g = h;
                            if (g) {
                                if (g.tagName == "A") {
                                    R = g;
                                    a.I(R, W);
                                    q = a.U(g, d);
                                    a.e(q, "click", O);
                                    a.I(q, W);
                                    a.H(q, "block");
                                    a.Qb(q, 0);
                                    a.sb(q, "backgroundColor", "#000");
                                    g = a.pe(g, "IMG")
                                }
                                g.border = 0;
                                a.I(g, W)
                            }
                        }
                        S(h, f, e + 1)
                    })
                }

                f.Ib = function (c, b) {
                    var a = w - b;
                    dc(H, a)
                };
                f.ve = function () {
                    return r
                };
                f.Rd = function () {
                    return x
                };
                f.E = l;
                m.call(f);
                var B = a.o(o, "thumb");
                if (B) {
                    f.ze = a.U(B, c);
                    a.Pc(B, "id");
                    a.z(B)
                }
                a.p(o);
                y = a.U(jb, c);
                a.A(y, 1e3);
                a.e(o, "click", O);
                D(c);
                f.vc = g;
                f.Dc = q;
                f.ob = H = o;
                a.t(H, y);
                k.$On(203, Q);
                k.$On(28, cb);
                k.$On(24, bb)
            }

            function Bc(h, q, v, u) {
                var b = this, l = 0, x = 0, m, g, e, f, i, r, w, s, o = E[h];
                j.call(b, 0, 0);
                function y() {
                    a.ud(Q);
                    jc && i && o.Dc && a.t(Q, o.Dc);
                    a.p(Q, i || !o.vc)
                }

                function z() {
                    if (r) {
                        r = d;
                        k.b(n.$EVT_ROLLBACK_END, h, e, l, g, e, f);
                        b.C(g)
                    }
                    b.Eb()
                }

                function A(a) {
                    s = a;
                    b.D();
                    b.Eb()
                }

                b.Eb = function () {
                    var a = b.eb();
                    if (!D && !U && !s && t == h) {
                        if (!a) {
                            if (m && !i) {
                                i = c;
                                b.zc(c);
                                k.b(n.$EVT_SLIDESHOW_START, h, l, x, m, f)
                            }
                            y()
                        }
                        var d, p = n.$EVT_STATE_CHANGE;
                        if (a != f)if (a == e)d = f; else if (a == g)d = e; else if (!a)d = g; else if (a > e) {
                            r = c;
                            d = e;
                            p = n.$EVT_ROLLBACK_START
                        } else d = b.dc();
                        k.b(p, h, a, l, g, e, f);
                        var j = V && (!R || H);
                        if (a == f)j && o.Ud(); else(j || a != e) && b.fc(d, z)
                    }
                };
                b.be = function () {
                    e == f && e == b.eb() && b.C(g)
                };
                b.Hd = function () {
                    C && C.E == h && C.mb();
                    var a = b.eb();
                    a < f && k.b(n.$EVT_STATE_CHANGE, h, -a - 1, l, g, e, f)
                };
                b.zc = function (b) {
                    q && a.S(ob, b && q.jc.$Outside ? "" : "hidden")
                };
                b.Ib = function (b, a) {
                    if (i && a >= m) {
                        i = d;
                        y();
                        o.Kc();
                        C.mb();
                        k.b(n.$EVT_SLIDESHOW_END, h, l, x, m, f)
                    }
                    k.b(n.$EVT_PROGRESS_CHANGE, h, a, l, g, e, f)
                };
                b.Mc = function (a) {
                    if (a && !w) {
                        w = a;
                        a.$On($JssorPlayer$.jd, A)
                    }
                };
                q && b.Db(q);
                m = b.W();
                b.W();
                b.Db(v);
                g = v.W();
                e = g + p.$AutoPlayInterval;
                u.$Shift(e);
                b.Fb(u);
                f = b.W()
            }

            function dc(e, g) {
                var f = y > 0 ? y : nb, c = Fb * g * (f & 1), d = Gb * g * (f >> 1 & 1);
                if (a.ib()) {
                    c = c.toFixed(3);
                    d = d.toFixed(3)
                } else {
                    c = b.round(c);
                    d = b.round(d)
                }
                if (a.Ab() && a.V() >= 10 && a.V() < 11)e.style.msTransform = "translate(" + c + "px, " + d + "px)"; else if (a.ib() && a.V() >= 30 && a.V() < 34) {
                    e.style.WebkitTransition = "transform 0s";
                    e.style.WebkitTransform = "translate3d(" + c + "px, " + d + "px, 0px) perspective(2000px)"
                } else {
                    a.m(e, c);
                    a.k(e, d)
                }
            }

            function zc(c) {
                var b = a.ge(c).tagName;
                !O && b != "INPUT" && b != "TEXTAREA" && b != "SELECT" && xc() && yc(c)
            }

            function Mb() {
                vb = U;
                Qb = A.dc();
                F = z.B();
                if (D || !H && R & 12) {
                    A.D();
                    k.b(n.Yc)
                }
            }

            function kc(e) {
                if (!D && (H || !(R & 12)) && !A.$IsPlaying()) {
                    var c = z.B(), a = b.ceil(F);
                    if (e && b.abs(G) >= p.$MinDragOffsetToSlide) {
                        a = b.ceil(c);
                        a += lb
                    }
                    if (!(N & 1))a = b.min(u - w, b.max(a, 0));
                    var d = b.abs(a - c);
                    d = 1 - b.pow(1 - d, 5);
                    if (!X && vb)A.nd(Qb); else if (c == a) {
                        yb.Od();
                        yb.Cb()
                    } else A.hb(c, a, d * Zb)
                }
            }

            function yc(b) {
                D = c;
                Eb = d;
                Y = e;
                a.e(f, tb, gc);
                a.u();
                X = 0;
                Mb();
                if (!vb)y = 0;
                if (K) {
                    var h = b.touches[0];
                    zb = h.clientX;
                    Ab = h.clientY
                } else {
                    var g = a.Zb(b);
                    zb = g.x;
                    Ab = g.y;
                    a.N(b)
                }
                G = 0;
                ib = 0;
                lb = 0;
                k.b(n.$EVT_DRAG_START, v(F), F, b)
            }

            function gc(e) {
                if (D && (!a.Gb() || e.button)) {
                    var f;
                    if (K) {
                        var m = e.touches;
                        if (m && m.length > 0)f = new i(m[0].clientX, m[0].clientY)
                    } else f = a.Zb(e);
                    if (f) {
                        var k = f.x - zb, l = f.y - Ab;
                        if (b.floor(F) != F)y = y || nb & O;
                        if ((k || l) && !y) {
                            if (O == 3)if (b.abs(l) > b.abs(k))y = 2; else y = 1; else y = O;
                            if (K && y == 1 && b.abs(l) - b.abs(k) > 3)Eb = c
                        }
                        if (y) {
                            var d = l, j = Gb;
                            if (y == 1) {
                                d = k;
                                j = Fb
                            }
                            if (!(N & 1)) {
                                if (d > 0) {
                                    var g = j * t, h = d - g;
                                    if (h > 0)d = g + b.sqrt(h) * 5
                                }
                                if (d < 0) {
                                    var g = j * (u - w - t), h = -d - g;
                                    if (h > 0)d = -g - b.sqrt(h) * 5
                                }
                            }
                            if (G - ib < -2)lb = 0; else if (G - ib > 2)lb = -1;
                            ib = G;
                            G = d;
                            xb = F - G / j / (fb || 1);
                            if (G && y && !Eb) {
                                a.N(e);
                                if (!U)A.se(xb); else A.ke(xb)
                            } else a.Gb() && a.N(e)
                        }
                    }
                } else Jb(e)
            }

            function Jb(e) {
                vc();
                if (D) {
                    D = d;
                    a.u();
                    a.Pd(f, tb, gc);
                    X = G;
                    X && a.N(e);
                    A.D();
                    var b = z.B();
                    k.b(n.$EVT_DRAG_END, v(b), b, v(F), F, e);
                    kc(c);
                    Mb()
                }
            }

            function sc(a) {
                E[t];
                t = v(a);
                yb = E[t];
                Yb(a);
                return t
            }

            function Ic(a, b) {
                y = 0;
                sc(a);
                k.b(n.$EVT_PARK, v(a), b)
            }

            function Yb(b, c) {
                Cb = b;
                a.f(T, function (a) {
                    a.Mb(v(b), b, c)
                })
            }

            function xc() {
                var b = n.Ec || 0, a = S;
                if (K)a & 1 && (a &= 1);
                n.Ec |= a;
                return O = a & ~b
            }

            function vc() {
                if (O) {
                    n.Ec &= ~S;
                    O = 0
                }
            }

            function cc() {
                var b = a.P();
                a.I(b, W);
                a.q(b, "absolute");
                return b
            }

            function v(a) {
                return (a % u + u) % u
            }

            function pc(a, c) {
                if (c)if (!N) {
                    a = b.min(b.max(a + Cb, 0), u - w);
                    c = d
                } else if (N & 2) {
                    a = v(a + Cb);
                    c = d
                }
                hb(a, p.$SlideDuration, c)
            }

            function Db() {
                a.f(T, function (a) {
                    a.Sb(a.lb.$ChanceToShow > H)
                })
            }

            function nc() {
                if (!H) {
                    H = 1;
                    Db();
                    if (!D) {
                        R & 12 && kc();
                        R & 3 && E[t].Cb()
                    }
                }
            }

            function mc() {
                if (H) {
                    H = 0;
                    Db();
                    D || !(R & 12) || Mb()
                }
            }

            function oc() {
                W = {Ob: M, Rb: L, $Top: 0, $Left: 0};
                a.f(ab, function (b) {
                    a.I(b, W);
                    a.q(b, "absolute");
                    a.S(b, "hidden");
                    a.z(b)
                });
                a.I(jb, W)
            }

            function rb(b, a) {
                hb(b, a, c)
            }

            function hb(g, f, k) {
                if (Vb && (!D || p.$NaviQuitDrag)) {
                    U = c;
                    D = d;
                    A.D();
                    if (f == h)f = Zb;
                    var e = Kb.eb(), a = g;
                    if (k) {
                        a = e + g;
                        if (g > 0)a = b.ceil(a); else a = b.floor(a)
                    }
                    if (!(N & 1)) {
                        a = v(a);
                        a = b.max(0, b.min(a, u - w))
                    }
                    var j = (a - e) % u;
                    a = e + j;
                    var i = e == a ? 0 : f * b.abs(j);
                    i = b.min(i, f * w * 1.5);
                    A.hb(e, a, i || 1)
                }
            }

            k.$PlayTo = hb;
            k.$GoTo = function (a) {
                hb(a, 1)
            };
            k.$Next = function () {
                rb(1)
            };
            k.$Prev = function () {
                rb(-1)
            };
            k.$Pause = function () {
                V = d
            };
            k.$Play = function () {
                if (!V) {
                    V = c;
                    E[t] && E[t].Cb()
                }
            };
            k.$SetSlideshowTransitions = function (b) {
                a.gb(b);
                p.$SlideshowOptions.$Transitions = b
            };
            k.$SetCaptionTransitions = function (b) {
                a.gb(b);
                J.Ad = b;
                J.Bb = a.u()
            };
            k.$SlidesCount = function () {
                return ab.length
            };
            k.$CurrentIndex = function () {
                return t
            };
            k.$IsAutoPlaying = function () {
                return V
            };
            k.$IsDragging = function () {
                return D
            };
            k.$IsSliding = function () {
                return U
            };
            k.$IsMouseOver = function () {
                return !H
            };
            k.$LastDragSucceded = function () {
                return X
            };
            function eb() {
                return a.i(x || r)
            }

            function pb() {
                return a.g(x || r)
            }

            k.$OriginalWidth = k.$GetOriginalWidth = eb;
            k.$OriginalHeight = k.$GetOriginalHeight = pb;
            function Nb(c, e) {
                if (c == h)return a.i(r);
                if (!x) {
                    var b = a.P(f);
                    a.qb(b, a.qb(r));
                    a.tc(b, a.tc(r));
                    a.q(b, "relative");
                    a.k(b, 0);
                    a.m(b, 0);
                    a.S(b, "visible");
                    x = a.P(f);
                    a.q(x, "absolute");
                    a.k(x, 0);
                    a.m(x, 0);
                    a.i(x, a.i(r));
                    a.g(x, a.g(r));
                    a.ce(x, "0 0");
                    a.t(x, b);
                    var i = a.cb(r);
                    a.t(r, x);
                    a.sb(r, "backgroundImage", "");
                    var g = {
                        navigator: cb && cb.$Scale == d,
                        arrowleft: P && P.$Scale == d,
                        arrowright: P && P.$Scale == d,
                        thumbnavigator: I && I.$Scale == d,
                        thumbwrapper: I && I.$Scale == d
                    };
                    a.f(i, function (c) {
                        a.t(g[a.db(c, "u")] ? r : b, c)
                    });
                    a.p(b);
                    a.p(x)
                }
                fb = c / (e ? a.g : a.i)(x);
                a.Qc(x, fb);
                a.i(r, e ? fb * eb() : c);
                a.g(r, e ? c : fb * pb());
                a.f(T, function (a) {
                    a.Nb()
                })
            }

            k.$ScaleHeight = k.$GetScaleHeight = function (b) {
                if (b == h)return a.g(r);
                Nb(b, c)
            };
            k.$ScaleWidth = k.$SetScaleWidth = k.$GetScaleWidth = Nb;
            k.Hc = function (a) {
                var d = b.ceil(v(mb / fc)), c = v(a - t + d);
                if (c > w) {
                    if (a - t > u / 2)a -= u; else if (a - t <= -u / 2)a += u
                } else a = t + c - d;
                return a
            };
            m.call(this);
            k.$Elmt = r = a.O(r);
            var p = a.n({
                $FillMode: 0,
                $LazyLoading: 1,
                $StartIndex: 0,
                $AutoPlay: d,
                $Loop: 1,
                $HWA: c,
                $NaviQuitDrag: c,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 3e3,
                $PauseOnHover: 1,
                $SlideDuration: 500,
                $SlideEasing: l.$EaseOutQuad,
                $MinDragOffsetToSlide: 20,
                $SlideSpacing: 0,
                $DisplayPieces: 1,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1
            }, lc), nb = p.$PlayOrientation & 3, bc = (p.$PlayOrientation & 4) / -4 || 1, db = p.$SlideshowOptions, J = a.n({$Class: s}, p.Ge);
            a.gb(J.Ad);
            var cb = p.$BulletNavigatorOptions, P = p.$ArrowNavigatorOptions, I = p.$ThumbnailNavigatorOptions, Z = p.$UISearchMode, x, B = a.o(r, "slides", e, Z), jb = a.o(r, "loading", e, Z) || a.P(f), Pb = a.o(r, "navigator", e, Z), hc = a.o(r, "arrowleft", e, Z), ec = a.o(r, "arrowright", e, Z), Ob = a.o(r, "thumbnavigator", e, Z), rc = a.i(B), qc = a.g(B), W, ab = [], Ac = a.cb(B);
            a.f(Ac, function (b) {
                b.tagName == "DIV" && !a.db(b, "u") && ab.push(b)
            });
            var t = -1, Cb, yb, u = ab.length, M = p.$SlideWidth || rc, L = p.$SlideHeight || qc, ac = p.$SlideSpacing, Fb = M + ac, Gb = L + ac, fc = nb & 1 ? Fb : Gb, w = b.min(p.$DisplayPieces, u), ob, y, O, Eb, K, T = [], Ub, Wb, Tb, jc, Hc, V, R = p.$PauseOnHover, Zb = p.$SlideDuration, wb, kb, mb, Vb = w < u, N = Vb ? p.$Loop : 0, S, X, H = 1, U, D, Y, zb = 0, Ab = 0, G, ib, lb, Kb, z, gb, A, Xb = new uc, fb;
            V = p.$AutoPlay;
            k.lb = lc;
            oc();
            r["jssor-slider"] = c;
            a.A(B, a.A(B) || 0);
            a.q(B, "absolute");
            ob = a.U(B);
            a.fb(a.nc(B), ob, B);
            if (db) {
                jc = db.$ShowLink;
                wb = db.$Class;
                a.gb(db.$Transitions);
                kb = w == 1 && u > 1 && wb && (!a.Ab() || a.V() >= 8)
            }
            mb = kb || w >= u || !(N & 1) ? 0 : p.$ParkingPosition;
            S = (w > 1 || mb ? nb : -1) & p.$DragOrientation;
            var Bb = B, E = [], C, Q, Ib = "mousedown", tb = "mousemove", Lb = "mouseup", sb, F, vb, Qb, xb, bb;
            if (g.navigator.pointerEnabled || (bb = g.navigator.msPointerEnabled)) {
                Ib = bb ? "MSPointerDown" : "pointerdown";
                tb = bb ? "MSPointerMove" : "pointermove";
                Lb = bb ? "MSPointerUp" : "pointerup";
                sb = bb ? "MSPointerCancel" : "pointercancel";
                if (S) {
                    var Hb = "none";
                    if (S == 1)Hb = "pan-y"; else if (S == 2)Hb = "pan-x";
                    a.sb(Bb, bb ? "msTouchAction" : "touchAction", Hb)
                }
            } else if ("ontouchstart"in g || "createTouch"in f) {
                K = c;
                Ib = "touchstart";
                tb = "touchmove";
                Lb = "touchend";
                sb = "touchcancel"
            }
            gb = new Ec;
            if (kb)C = new wb(Xb, M, L, db, K);
            a.t(ob, gb.ob);
            a.S(B, "hidden");
            Q = cc();
            a.sb(Q, "backgroundColor", "#000");
            a.Qb(Q, 0);
            a.fb(Bb, Q, Bb.firstChild);
            for (var ub = 0; ub < ab.length; ub++) {
                var Cc = ab[ub], ic = new Dc(Cc, ub);
                E.push(ic)
            }
            a.z(jb);
            Kb = new Fc;
            A = new tc(Kb, gb);
            if (S) {
                a.e(B, Ib, zc);
                a.e(f, Lb, Jb);
                sb && a.e(f, sb, Jb)
            }
            R &= K ? 10 : 5;
            if (Pb && cb) {
                Ub = new cb.$Class(Pb, cb, eb(), pb());
                T.push(Ub)
            }
            if (P && hc && ec) {
                Wb = new P.$Class(hc, ec, P, eb(), pb());
                T.push(Wb)
            }
            if (Ob && I) {
                I.$StartIndex = p.$StartIndex;
                Tb = new I.$Class(Ob, I);
                T.push(Tb)
            }
            a.f(T, function (a) {
                a.xb(u, E, jb);
                a.$On(o.vb, pc)
            });
            Nb(eb());
            a.e(r, "mouseout", a.jb(nc, r));
            a.e(r, "mouseover", a.jb(mc, r));
            Db();
            p.$ArrowKeyNavigation && a.e(f, "keydown", function (a) {
                if (a.keyCode == q.me)rb(-1); else a.keyCode == q.Ed && rb(1)
            });
            var qb = p.$StartIndex;
            if (!(N & 1))qb = b.max(0, b.min(qb, u - w));
            A.hb(qb, qb, 0)
        }

        n.$EVT_CLICK = 21;
        n.$EVT_DRAG_START = 22;
        n.$EVT_DRAG_END = 23;
        n.$EVT_SWIPE_START = 24;
        n.$EVT_SWIPE_END = 25;
        n.$EVT_LOAD_START = 26;
        n.$EVT_LOAD_END = 27;
        n.Yc = 28;
        n.$EVT_POSITION_CHANGE = 202;
        n.$EVT_PARK = 203;
        n.$EVT_SLIDESHOW_START = 206;
        n.$EVT_SLIDESHOW_END = 207;
        n.$EVT_PROGRESS_CHANGE = 208;
        n.$EVT_STATE_CHANGE = 209;
        n.$EVT_ROLLBACK_START = 210;
        n.$EVT_ROLLBACK_END = 211;
        g.$JssorSlider$ = r = n
    };
    var o = {vb: 1};
    g.$JssorBulletNavigator$ = function (g, F, E, C) {
        var h = this;
        m.call(h);
        g = a.O(g);
        var t, u, s, r, l = 0, f, n, k, y, z, j, i, q, p, D = [], A = [];

        function x(a) {
            a != -1 && A[a].gc(a == l)
        }

        function v(a) {
            h.b(o.vb, a * n)
        }

        h.$Elmt = g;
        h.Mb = function (a) {
            if (a != r) {
                var d = l, c = b.floor(a / n);
                l = c;
                r = a;
                x(d);
                x(c)
            }
        };
        h.Sb = function (b) {
            a.p(g, b)
        };
        var B;
        h.Nb = function () {
            if (!B || f.$Scale == d) {
                f.$AutoCenter & 1 && a.m(g, (E - u) / 2);
                f.$AutoCenter & 2 && a.k(g, (C - s) / 2);
                B = c
            }
        };
        var w;
        h.xb = function (C) {
            if (!w) {
                t = b.ceil(C / n);
                l = 0;
                var o = q + y, r = p + z, m = b.ceil(t / k) - 1;
                u = q + o * (!j ? m : k - 1);
                s = p + r * (j ? m : k - 1);
                a.i(g, u);
                a.g(g, s);
                for (var d = 0; d < t; d++) {
                    var B = a.Zc();
                    a.le(B, d + 1);
                    var h = a.Yb(i, "NumberTemplate", B, c);
                    a.q(h, "absolute");
                    var x = d % (m + 1);
                    a.m(h, !j ? o * x : d % k * o);
                    a.k(h, j ? r * x : b.floor(d / (m + 1)) * r);
                    a.t(g, h);
                    D[d] = h;
                    f.$ActionMode & 1 && a.e(h, "click", a.r(e, v, d));
                    f.$ActionMode & 2 && a.e(h, "mouseover", a.jb(a.r(e, v, d), h));
                    A[d] = a.rb(h)
                }
                w = c
            }
        };
        h.lb = f = a.n({$SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1}, F);
        i = a.o(g, "prototype");
        q = a.i(i);
        p = a.g(i);
        a.T(g, i);
        n = f.$Steps || 1;
        k = f.$Lanes || 1;
        y = f.$SpacingX;
        z = f.$SpacingY;
        j = f.$Orientation - 1
    };
    g.$JssorArrowNavigator$ = function (f, g, t, n, l) {
        var b = this;
        m.call(b);
        var h, j, r = a.i(f), p = a.g(f);

        function k(a) {
            b.b(o.vb, a, c)
        }

        b.Mb = function (b, a, c) {
            if (c);
        };
        b.Sb = function (b) {
            a.p(f, b);
            a.p(g, b)
        };
        var s;
        b.Nb = function () {
            if (!s || h.$Scale == d) {
                if (h.$AutoCenter & 1) {
                    a.m(f, (n - r) / 2);
                    a.m(g, (n - r) / 2)
                }
                if (h.$AutoCenter & 2) {
                    a.k(f, (l - p) / 2);
                    a.k(g, (l - p) / 2)
                }
                s = c
            }
        };
        var q;
        b.xb = function (b) {
            if (!q) {
                a.e(f, "click", a.r(e, k, -j));
                a.e(g, "click", a.r(e, k, j));
                a.rb(f);
                a.rb(g);
                q = c
            }
        };
        b.lb = h = a.n({$Steps: 1}, t);
        j = h.$Steps
    };
    g.$JssorThumbnailNavigator$ = function (i, A) {
        var h = this, x, l, e, u = [], y, w, f, n, p, t, s, k, q, g, j;
        m.call(h);
        i = a.O(i);
        function z(n, d) {
            var g = this, b, m, k;

            function p() {
                m.gc(l == d)
            }

            function i() {
                if (!q.$LastDragSucceded()) {
                    var a = f - d % f, b = q.Hc((d + a) / f - 1), c = b * f + f - a;
                    h.b(o.vb, c)
                }
            }

            g.E = d;
            g.Lc = p;
            k = n.ze || n.vc || a.P();
            g.ob = b = a.Yb(j, "ThumbnailTemplate", k, c);
            m = a.rb(b);
            e.$ActionMode & 1 && a.e(b, "click", i);
            e.$ActionMode & 2 && a.e(b, "mouseover", a.jb(i, b))
        }

        h.Mb = function (c, d, e) {
            var a = l;
            l = c;
            a != -1 && u[a].Lc();
            u[c].Lc();
            !e && q.$PlayTo(q.Hc(b.floor(d / f)))
        };
        h.Sb = function (b) {
            a.p(i, b)
        };
        h.Nb = a.zb;
        var v;
        h.xb = function (F, D) {
            if (!v) {
                x = F;
                b.ceil(x / f);
                l = -1;
                k = b.min(k, D.length);
                var h = e.$Orientation & 1, o = t + (t + n) * (f - 1) * (1 - h), m = s + (s + p) * (f - 1) * h, C = o + (o + n) * (k - 1) * h, A = m + (m + p) * (k - 1) * (1 - h);
                a.q(g, "absolute");
                a.S(g, "hidden");
                e.$AutoCenter & 1 && a.m(g, (y - C) / 2);
                e.$AutoCenter & 2 && a.k(g, (w - A) / 2);
                a.i(g, C);
                a.g(g, A);
                var j = [];
                a.f(D, function (l, e) {
                    var i = new z(l, e), d = i.ob, c = b.floor(e / f), k = e % f;
                    a.m(d, (t + n) * k * (1 - h));
                    a.k(d, (s + p) * k * h);
                    if (!j[c]) {
                        j[c] = a.P();
                        a.t(g, j[c])
                    }
                    a.t(j[c], d);
                    u.push(i)
                });
                var E = a.n({
                    $AutoPlay: d,
                    $NaviQuitDrag: d,
                    $SlideWidth: o,
                    $SlideHeight: m,
                    $SlideSpacing: n * h + p * (1 - h),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: e.$Orientation,
                    $DragOrientation: e.$DisableDrag ? 0 : e.$Orientation
                }, e);
                q = new r(i, E);
                v = c
            }
        };
        h.lb = e = a.n({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, A);
        y = a.i(i);
        w = a.g(i);
        g = a.o(i, "slides");
        j = a.o(g, "prototype");
        t = a.i(j);
        s = a.g(j);
        a.T(g, j);
        f = e.$Lanes || 1;
        n = e.$SpacingX;
        p = e.$SpacingY;
        k = e.$DisplayPieces
    };
    function s() {
        j.call(this, 0, 0);
        this.Hb = a.zb
    }
})(window, document, Math, null, true, false)