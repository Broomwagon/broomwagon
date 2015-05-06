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
    }, p = {
        pd: function (a) {
            return (a & 3) > 0
        }, Zc: function (a) {
            return (a & 12) > 0
        }
    }, q = {of: 37, Re: 39}, n, j, a = new function () {
        var j = this, nb = 1, F = 2, F = 3, gb = 4, kb = 5, r = 0, m = 0, v = 0, Z = 0, y = 0, rb = navigator.appName, l = navigator.userAgent, q = f.documentElement, B;

        function D() {
            if (!r)if (rb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                var d = l.indexOf("MSIE");
                r = nb;
                v = o(l.substring(d + 5, l.indexOf(";", d)));
                /*@cc_on Z=@_jscript_version@*/
                ;
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

        function P() {
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

        function ab() {
            return P() && y > 534 && y < 535
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

        function ub(b, a, c) {
            if (Z < 9) {
                var e = b.style.filter, g = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), f = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "", d = G(e, [g], f);
                db(b, d);
                j.Wc(b, c.y);
                j.Vc(b, c.x)
            }
        }

        j.Rb = t;
        j.ad = sb;
        j.Xe = P;
        j.lb = fb;
        j.Zb = jb;
        j.N = A;
        j.pb = function () {
            return m
        };
        j.Ye = function () {
            return v || m
        };
        j.lc = function () {
            return y
        };
        j.$Delay = qb;
        function ob(a) {
            a.constructor === ob.caller && a.jd && a.jd()
        }

        j.jd = ob;
        j.bb = function (a) {
            if (j.id(a))a = f.getElementById(a);
            return a
        };
        function u(a) {
            return a || g.event
        }

        u = u;
        j.We = function (a) {
            a = u(a);
            return a.target || a.srcElement || f
        };
        j.od = function (a) {
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

        function Y(f, a) {
            var d = a.$Rotate || 0, c = a.$Scale == h ? 1 : a.$Scale;
            if (A()) {
                var k = j.Ue(d / 180 * b.PI, c, c);
                ub(f, !d && c == 1 ? e : k, j.Ve(k, a.$OriginalWidth, a.$OriginalHeight))
            } else {
                var g = w(f);
                if (g) {
                    var i = "rotate(" + d % 360 + "deg) scale(" + c + ")";
                    if (fb() && y > 535)i += " perspective(2000px)";
                    f.style[g] = i
                }
            }
        }

        j.rf = function (b, a) {
            if (ab())qb(j.v(e, Y, b, a)); else Y(b, a)
        };
        j.Ze = function (b, c) {
            var a = w(b);
            if (a)b.style[a + "Origin"] = c
        };
        j.df = function (a, c) {
            if (t() && v < 9 || v < 10 && N())a.style.zoom = c == 1 ? "" : c; else {
                var b = w(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = G(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        j.ef = function (a) {
            if (!a.style[w(a)] || a.style[w(a)] == "none")a.style[w(a)] = "perspective(2000px)"
        };
        j.cf = function (a) {
            a.style[w(a)] = "none"
        };
        j.Ob = function (b, a) {
            return function (c) {
                c = u(c);
                var e = c.type, d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !j.af(a, d)) && b(c)
            }
        };
        j.i = function (a, c, d, b) {
            a = j.bb(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        j.bf = function (a, c, d, b) {
            a = j.bb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        j.Ne = function (b, a) {
            j.i(A() ? f : g, "mouseup", b, a)
        };
        j.Z = function (a) {
            a = u(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = d
        };
        j.v = function (d, c) {
            var a = [].slice.call(arguments, 2), b = function () {
                var b = a.concat([].slice.call(arguments, 0));
                return c.apply(d, b)
            };
            return b
        };
        j.Me = function (a, b) {
            if (b == h)return a.textContent || a.innerText;
            var c = f.createTextNode(b);
            j.Mc(a);
            a.appendChild(c)
        };
        j.Mc = function (a) {
            a.innerHTML = ""
        };
        j.J = function (c) {
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

        j.A = hb;
        function bb(a, c, d) {
            for (a = a ? a.firstChild : e; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (d) {
                    var b = bb(a, c, d);
                    if (b)return b
                }
            }
        }

        j.Pe = bb;
        function cb(a, d, g) {
            var b = [];
            for (a = a ? a.firstChild : e; a; a = a.nextSibling)if (a.nodeType == 1) {
                (!d || a.tagName == d) && b.push(a);
                if (g) {
                    var f = cb(a, d, c);
                    if (f.length)b = b.concat(f)
                }
            }
            return b
        }

        j.Se = cb;
        j.Te = function (b, a) {
            return b.getElementsByTagName(a)
        };
        function V(c) {
            for (var b = 1; b < arguments.length; b++) {
                var a = arguments[b];
                if (a)for (var d in a)c[d] = a[d]
            }
            return c
        }

        j.f = V;
        j.Gc = function (a) {
            return z(a) == "function"
        };
        j.Eb = function (a) {
            return z(a) == "array"
        };
        j.id = function (a) {
            return z(a) == "string"
        };
        j.xc = function (a) {
            return !isNaN(o(a)) && isFinite(a)
        };
        j.b = k;
        function Q(a) {
            return f.createElement(a)
        }

        j.R = function () {
            return Q("DIV", f)
        };
        j.Qe = function () {
            return Q("SPAN", f)
        };
        j.sc = function () {
        };
        function T(b, c, a) {
            if (a == h)return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function S(a, b) {
            return T(a, b) || T(a, "data-" + b)
        }

        j.I = S;
        function s(b, a) {
            if (a == h)return b.className;
            b.className = a
        }

        j.Oc = s;
        j.dc = function (a) {
            return a.parentNode
        };
        j.G = function (a) {
            j.hb(a, "none")
        };
        j.p = function (a, b) {
            j.hb(a, b == d ? "none" : "")
        };
        j.gf = function (b, a) {
            b.removeAttribute(a)
        };
        j.pf = function () {
            return t() && m < 10
        };
        j.qf = function (d, c) {
            if (c)d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)"; else {
                var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = G(g, f, "");
                a.Sb(d, e)
            }
        };
        j.K = function () {
            return +new Date
        };
        j.C = function (b, a) {
            b.appendChild(a)
        };
        j.Ub = function (c, b, a) {
            c.insertBefore(b, a)
        };
        j.vb = function (b, a) {
            b.removeChild(a)
        };
        j.mf = function (b, a) {
            k(a, function (a) {
                j.vb(b, a)
            })
        };
        j.lf = function (a) {
            j.mf(a, j.J(a))
        };
        j.kf = function (b, a) {
            return parseInt(b, a || 10)
        };
        function o(a) {
            return parseFloat(a)
        }

        j.gd = o;
        j.af = function (b, a) {
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

        j.Q = U;
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

        j.Nb = function (a) {
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

        j.nb = function (d, b) {
            if (jb() && m < 11.6 || !d)O(b, e); else {
                var a = new Image;
                a.onload = j.v(e, O, b, a);
                a.onabort = j.v(e, O, b, a, c);
                a.src = d
            }
        };
        j.jf = function (e, b, f) {
            var d = e.length + 1;

            function c(a) {
                d--;
                if (b && a && a.src == b.src)b = a;
                !d && f && f(b)
            }

            k(e, function (b) {
                a.nb(b.src, c)
            });
            c()
        };
        j.Yc = function (d, k, j, i) {
            if (i)d = U(d, c);
            for (var h = a.Te(d, k), f = h.length - 1; f > -1; f--) {
                var b = h[f], e = U(j, c);
                s(e, s(b));
                a.Sb(e, b.style.cssText);
                var g = a.dc(b);
                a.Ub(g, e, b);
                a.vb(g, b)
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
                if (e)j.Z(a); else {
                    C.push(g);
                    i = c;
                    f()
                }
            }

            g.hf = function () {
                i = d;
                f()
            };
            g.bd = function (a) {
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
            b = j.bb(b);
            if (!C) {
                j.Ne(function () {
                    var a = C;
                    C = [];
                    k(a, function (a) {
                        a.hf()
                    })
                });
                C = []
            }
            m = s(b);
            a.i(b, "mousedown", n)
        }

        j.Pb = function (a) {
            return new zb(a)
        };
        j.Bb = E;
        j.T = p("overflow");
        j.r = p("top", 2);
        j.s = p("left", 2);
        j.k = p("width", 2);
        j.j = p("height", 2);
        j.Vc = p("marginLeft", 2);
        j.Wc = p("marginTop", 2);
        j.B = p("position");
        j.hb = p("display");
        j.O = p("zIndex", 1);
        j.wb = function (b, a, c) {
            if (a != h)wb(b, a, c); else return vb(b)
        };
        j.Sb = function (a, b) {
            if (b != h)a.style.cssText = b; else return a.style.cssText
        };
        var R = {$Opacity: j.wb, $Top: j.r, $Left: j.s, jb: j.k, kb: j.j, tb: j.B, Dg: j.hb, $ZIndex: j.O}, x;

        function H() {
            if (!x)x = V({Bg: j.Wc, Ag: j.Vc, $Clip: j.qf, Ib: j.rf}, R);
            return x
        }

        function lb() {
            H();
            x.Ib = x.Ib;
            return x
        }

        j.Md = H;
        j.Fd = lb;
        j.Hd = function (c, b) {
            H();
            var a = {};
            k(b, function (d, b) {
                if (R[b])a[b] = R[b](c)
            });
            return a
        };
        j.H = function (c, b) {
            var a = H();
            k(b, function (d, b) {
                a[b] && a[b](c, d)
            })
        };
        j.xd = function (b, a) {
            lb();
            j.H(b, a)
        };
        n = new function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)for (var k = f[c] = [], b = 0; b < h; b++) {
                    for (var e = 0, a = 0; a < j; a++)e += d[c][a] * g[a][b];
                    k[b] = e
                }
                return f
            }

            a.Gb = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return new i(a[0][0], a[1][0])
            }
        };
        j.Ue = function (d, a, c) {
            var e = b.cos(d), f = b.sin(d);
            return [[e * a, -f * c], [f * a, e * c]]
        };
        j.Ve = function (d, c, a) {
            var e = n.Gb(d, new i(-c / 2, -a / 2)), f = n.Gb(d, new i(c / 2, -a / 2)), g = n.Gb(d, new i(c / 2, a / 2)), h = n.Gb(d, new i(-c / 2, a / 2));
            return new i(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
        }
    }, m = function () {
        var b = this, d = [];

        function i(a, b) {
            d.push({pc: a, rc: b})
        }

        function h(b, c) {
            a.b(d, function (a, e) {
                a.pc == b && a.rc === c && d.splice(e, 1)
            })
        }

        b.$On = b.addEventListener = i;
        b.$Off = b.removeEventListener = h;
        b.g = function (b) {
            var c = [].slice.call(arguments, 1);
            a.b(d, function (a) {
                try {
                    a.pc == b && a.rc.apply(g, c)
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
            a.b(u, function (a) {
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
                            if (g.xe && a.lb() && m)s = b.round(s / 16 * m) * 16 / m;
                            if (g.$Reverse)s = 1 - s;
                            d = {};
                            for (var o in x) {
                                var R = M[o] || 1, J = L[o] || [0, 1], l = (s - J[0]) / J[1];
                                l = b.min(b.max(l, 0), 1);
                                l = l * R;
                                var H = b.floor(l);
                                if (l != H)l -= H;
                                var Q = C[o] || C.D, I = Q(l), r, K = z[o], F = x[o];
                                if (a.xc(F))r = K + (F - K) * I; else {
                                    r = a.f({E: {}}, z[o]);
                                    a.b(F.E, function (c, b) {
                                        var a = c * I;
                                        r.E[b] = a;
                                        r[b] += a
                                    })
                                }
                                d[o] = r
                            }
                        }
                        if (z.$Zoom)d.Ib = {
                            $Rotate: d.$Rotate || 0,
                            $Scale: d.$Zoom,
                            $OriginalWidth: g.$OriginalWidth,
                            $OriginalHeight: g.$OriginalHeight
                        };
                        if (x.$Clip && g.$Move) {
                            var v = d.$Clip.E, D = (v.$Top || 0) + (v.$Bottom || 0), A = (v.$Left || 0) + (v.$Right || 0);
                            d.$Left = (d.$Left || 0) + A;
                            d.$Top = (d.$Top || 0) + D;
                            d.$Clip.$Left -= A;
                            d.$Clip.$Right -= A;
                            d.$Clip.$Top -= D;
                            d.$Clip.$Bottom -= D
                        }
                        if (d.$Clip && a.pf() && !d.$Clip.$Top && !d.$Clip.$Left && d.$Clip.$Right == g.$OriginalWidth && d.$Clip.$Bottom == g.$OriginalHeight)d.$Clip = e;
                        a.b(d, function (b, a) {
                            B[a] && B[a](O, b)
                        })
                    }
                    f.yc(t - k, p - k)
                }
                t = p;
                a.b(u, function (b, c) {
                    var a = w < j ? u[u.length - c - 1] : b;
                    a.L(w, G)
                });
                var P = j, N = w;
                j = n;
                E = c;
                f.Tb(P, N)
            }
        }

        function F(a, c) {
            c && a.Lb(h, 1);
            h = b.max(h, a.V());
            u.push(a)
        }

        function H() {
            if (r) {
                var d = a.K(), e = b.min(d - A, 80), c = j + e * p;
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
                f.Jc();
                A = a.K();
                H()
            }
        }

        function J(a) {
            if (r) {
                y = r = D = d;
                f.Kc();
                a && a()
            }
        }

        f.$Play = function (a, b, c) {
            v(a ? j + a : h, b, c)
        };
        f.Sc = v;
        f.ab = J;
        f.Je = function (a) {
            v(a)
        };
        f.M = function () {
            return j
        };
        f.Qc = function () {
            return o
        };
        f.yb = function () {
            return t
        };
        f.L = w;
        f.nc = function () {
            w(i, c)
        };
        f.$Move = function (a) {
            w(j + a)
        };
        f.$IsPlaying = function () {
            return r
        };
        f.ye = function (a) {
            q = a
        };
        f.Lb = N;
        f.$Shift = I;
        f.U = function (a) {
            F(a, 0)
        };
        f.ic = function (a) {
            F(a, 1)
        };
        f.V = function () {
            return h
        };
        f.Tb = f.Jc = f.Kc = f.yc = a.sc;
        f.jc = a.K();
        g = a.f({$Interval: 16}, g);
        q = g.nd;
        B = a.f({}, a.Md(), g.ld);
        i = k = n;
        h = n + m;
        var M = g.$Round || {}, L = g.$During || {};
        C = a.f({D: a.Gc(g.$Easing) && g.$Easing || l.$EaseSwing}, g.$Easing)
    };
    var r, k = g.$JssorSlideshowFormations$ = {};
    new function () {
        var v = 0, u = 1, x = 2, w = 3, J = 1, I = 2, K = 4, H = 8, P = 256, Q = 512, O = 1024, N = 2048, A = N + J, z = N + I, F = Q + J, D = Q + I, E = P + K, B = P + H, C = O + K, G = O + H;

        function T(a) {
            return (a & I) == I
        }

        function U(a) {
            return (a & K) == K
        }

        function y(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }

        k.$FormationStraight = function (f) {
            for (var d = f.$Cols, e = f.$Rows, k = f.$Assembly, l = f.Cb, j = [], a = 0, b = 0, h = d - 1, i = e - 1, g = l - 1, c, b = 0; b < e; b++)for (a = 0; a < d; a++) {
                switch (k) {
                    case A:
                        c = g - (a * e + (i - b));
                        break;
                    case C:
                        c = g - (b * d + (h - a));
                        break;
                    case F:
                        c = g - (a * e + b);
                    case E:
                        c = g - (b * d + a);
                        break;
                    case z:
                        c = a * e + b;
                        break;
                    case B:
                        c = b * d + (h - a);
                        break;
                    case D:
                        c = a * e + (i - b);
                        break;
                    default:
                        c = b * d + a
                }
                y(j, c, [b, a])
            }
            return j
        };
        k.$FormationSwirl = function (e) {
            var l = e.$Cols, m = e.$Rows, p = e.$Assembly, k = e.Cb, o = [], n = [], i = 0, a = 0, b = 0, f = l - 1, g = m - 1, h, d, j = 0;
            switch (p) {
                case A:
                    a = f;
                    b = 0;
                    d = [x, u, w, v];
                    break;
                case C:
                    a = 0;
                    b = g;
                    d = [v, w, u, x];
                    break;
                case F:
                    a = f;
                    b = g;
                    d = [w, u, x, v];
                    break;
                case E:
                    a = f;
                    b = g;
                    d = [u, w, v, x];
                    break;
                case z:
                    a = 0;
                    b = 0;
                    d = [x, v, w, u];
                    break;
                case B:
                    a = f;
                    b = 0;
                    d = [u, x, v, w];
                    break;
                case D:
                    a = 0;
                    b = g;
                    d = [w, v, x, u];
                    break;
                default:
                    a = 0;
                    b = 0;
                    d = [v, x, u, w]
            }
            i = 0;
            while (i < k) {
                h = b + "," + a;
                if (a >= 0 && a < l && b >= 0 && b < m && !n[h]) {
                    n[h] = c;
                    y(o, i++, [b, a])
                } else switch (d[j++ % d.length]) {
                    case v:
                        a--;
                        break;
                    case x:
                        b--;
                        break;
                    case u:
                        a++;
                        break;
                    case w:
                        b++
                }
                switch (d[j % d.length]) {
                    case v:
                        a++;
                        break;
                    case x:
                        b++;
                        break;
                    case u:
                        a--;
                        break;
                    case w:
                        b--
                }
            }
            return o
        };
        k.$FormationZigZag = function (d) {
            var k = d.$Cols, l = d.$Rows, n = d.$Assembly, j = d.Cb, h = [], i = 0, a = 0, b = 0, e = k - 1, f = l - 1, m, c, g = 0;
            switch (n) {
                case A:
                    a = e;
                    b = 0;
                    c = [x, u, w, u];
                    break;
                case C:
                    a = 0;
                    b = f;
                    c = [v, w, u, w];
                    break;
                case F:
                    a = e;
                    b = f;
                    c = [w, u, x, u];
                    break;
                case E:
                    a = e;
                    b = f;
                    c = [u, w, v, w];
                    break;
                case z:
                    a = 0;
                    b = 0;
                    c = [x, v, w, v];
                    break;
                case B:
                    a = e;
                    b = 0;
                    c = [u, x, v, x];
                    break;
                case D:
                    a = 0;
                    b = f;
                    c = [w, v, x, v];
                    break;
                default:
                    a = 0;
                    b = 0;
                    c = [v, x, u, x]
            }
            i = 0;
            while (i < j) {
                m = b + "," + a;
                if (a >= 0 && a < k && b >= 0 && b < l && typeof h[m] == "undefined") {
                    y(h, i++, [b, a]);
                    switch (c[g % c.length]) {
                        case v:
                            a++;
                            break;
                        case x:
                            b++;
                            break;
                        case u:
                            a--;
                            break;
                        case w:
                            b--
                    }
                } else {
                    switch (c[g++ % c.length]) {
                        case v:
                            a--;
                            break;
                        case x:
                            b--;
                            break;
                        case u:
                            a++;
                            break;
                        case w:
                            b++
                    }
                    switch (c[g++ % c.length]) {
                        case v:
                            a++;
                            break;
                        case x:
                            b++;
                            break;
                        case u:
                            a--;
                            break;
                        case w:
                            b--
                    }
                }
            }
            return h
        };
        k.$FormationStraightStairs = function (h) {
            var l = h.$Cols, m = h.$Rows, e = h.$Assembly, k = h.Cb, i = [], j = 0, c = 0, d = 0, f = l - 1, g = m - 1, o = k - 1;
            switch (e) {
                case A:
                case D:
                case F:
                case z:
                    var a = 0, b = 0;
                    break;
                case B:
                case C:
                case E:
                case G:
                    var a = f, b = 0;
                    break;
                default:
                    e = G;
                    var a = f, b = 0
            }
            c = a;
            d = b;
            while (j < k) {
                if (U(e) || T(e))y(i, o - j++, [d, c]); else y(i, j++, [d, c]);
                switch (e) {
                    case A:
                    case D:
                        c--;
                        d++;
                        break;
                    case F:
                    case z:
                        c++;
                        d--;
                        break;
                    case B:
                    case C:
                        c--;
                        d--;
                        break;
                    case G:
                    case E:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > g) {
                    switch (e) {
                        case A:
                        case D:
                            a++;
                            break;
                        case B:
                        case C:
                        case F:
                        case z:
                            b++;
                            break;
                        case G:
                        case E:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > g) {
                        switch (e) {
                            case A:
                            case D:
                                a = f;
                                b++;
                                break;
                            case F:
                            case z:
                                b = g;
                                a++;
                                break;
                            case B:
                            case C:
                                b = g;
                                a--;
                                break;
                            case G:
                            case E:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > g)b = g; else if (b < 0)b = 0; else if (a > f)a = f; else if (a < 0)a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return i
        };
        k.$FormationSquare = function (h) {
            var a = h.$Cols || 1, c = h.$Rows || 1, i = [], d, e, f, g, j;
            f = a < c ? (c - a) / 2 : 0;
            g = a > c ? (a - c) / 2 : 0;
            j = b.round(b.max(a / 2, c / 2)) + 1;
            for (d = 0; d < a; d++)for (e = 0; e < c; e++)y(i, j - b.min(d + 1 + f, e + 1 + g, a - d + f, c - e + g), [e, d]);
            return i
        };
        k.$FormationRectangle = function (f) {
            var d = f.$Cols || 1, e = f.$Rows || 1, g = [], a, c, h;
            h = b.round(b.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)for (c = 0; c < e; c++)y(g, h - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
            return g
        };
        k.$FormationRandom = function (d) {
            for (var e = [], a, c = 0; c < d.$Rows; c++)for (a = 0; a < d.$Cols; a++)y(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
            return e
        };
        k.$FormationCircle = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, g = [], a, h = e / 2 - .5, i = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)y(g, b.round(b.sqrt(b.pow(c - h, 2) + b.pow(a - i, 2))), [a, c]);
            return g
        };
        k.$FormationCross = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, g = [], a, h = e / 2 - .5, i = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)y(g, b.round(b.min(b.abs(c - h), b.abs(a - i))), [a, c]);
            return g
        };
        k.$FormationRectangleCross = function (f) {
            for (var g = f.$Cols || 1, h = f.$Rows || 1, i = [], a, d = g / 2 - .5, e = h / 2 - .5, j = b.max(d, e) + 1, c = 0; c < g; c++)for (a = 0; a < h; a++)y(i, b.round(j - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
            return i
        };
        function R(a) {
            var b = a.$Formation(a);
            return a.$Reverse ? b.reverse() : b
        }

        function L(g, f) {
            var e = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: d,
                $SlideOut: d,
                $Reverse: d,
                $Formation: k.$FormationRandom,
                $Assembly: G,
                $ChessMode: {$Column: 0, $Row: 0},
                $Easing: l.$EaseSwing,
                $Round: {},
                Ab: [],
                $During: {}
            };
            a.f(e, g);
            e.Cb = e.$Cols * e.$Rows;
            if (a.Gc(e.$Easing))e.$Easing = {D: e.$Easing};
            e.dd = b.ceil(e.$Duration / e.$Interval);
            e.cd = S(e);
            e.fe = function (b, a) {
                b /= e.$Cols;
                a /= e.$Rows;
                var f = b + "x" + a;
                if (!e.Ab[f]) {
                    e.Ab[f] = {jb: b, kb: a};
                    for (var c = 0; c < e.$Cols; c++)for (var d = 0; d < e.$Rows; d++)e.Ab[f][d + "," + c] = {
                        $Top: d * a,
                        $Right: c * b + b,
                        $Bottom: d * a + a,
                        $Left: c * b
                    }
                }
                return e.Ab[f]
            };
            if (e.$Brother) {
                e.$Brother = L(e.$Brother, f);
                e.$SlideOut = c
            }
            return e
        }

        function S(d) {
            var c = d.$Easing;
            if (!c.D)c.D = l.$EaseSwing;
            var e = d.dd, f = c.ob;
            if (!f) {
                var g = a.f({}, d.$Easing, d.$Round);
                f = c.ob = {};
                a.b(g, function (n, l) {
                    var g = c[l] || c.D, j = d.$Round[l] || 1;
                    if (!a.Eb(g.ob))g.ob = [];
                    var h = g.ob[e] = g.ob[e] || [];
                    if (!h[j]) {
                        h[j] = [0];
                        for (var k = 1; k <= e; k++) {
                            var i = k / e * j, m = b.floor(i);
                            if (i != m)i -= m;
                            h[j][k] = g(i)
                        }
                    }
                    f[l] = h
                })
            }
            return f
        }

        function M(D, j, f, y, o, l) {
            var B = this, v, w = {}, n = {}, m = [], h, g, t, r = f.$ChessMode.$Column || 0, s = f.$ChessMode.$Row || 0, i = f.fe(o, l), q = R(f), E = q.length - 1, u = f.$Duration + f.$Delay * E, z = y + u, k = f.$SlideOut, A;
            z += a.lb() ? 260 : 50;
            B.hd = z;
            B.Jb = function (c) {
                c -= y;
                var d = c < u;
                if (d || A) {
                    A = d;
                    if (!k)c = u - c;
                    var e = b.ceil(c / f.$Interval);
                    a.b(n, function (c, f) {
                        var d = b.max(e, c.je);
                        d = b.min(d, c.length - 1);
                        if (c.fd != d) {
                            if (!c.fd && !k)a.p(m[f]); else d == c.Gg && k && a.G(m[f]);
                            c.fd = d;
                            a.xd(m[f], c[d])
                        }
                    })
                }
            };
            function x(b) {
                a.cf(b);
                var c = a.J(b);
                a.b(c, function (a) {
                    x(a)
                })
            }

            j = a.Q(j, c);
            x(j);
            if (a.N()) {
                var F = !j["no-image"], C = a.Se(j, e, c);
                a.b(C, function (b) {
                    (F || b["jssor-slider"]) && a.wb(b, a.wb(b), c)
                })
            }
            a.b(q, function (e, j) {
                a.b(e, function (K) {
                    var O = K[0], N = K[1], y = O + "," + N, q = d, u = d, z = d;
                    if (r && N % 2) {
                        if (p.pd(r))q = !q;
                        if (p.Zc(r))u = !u;
                        if (r & 16)z = !z
                    }
                    if (s && O % 2) {
                        if (p.pd(s))q = !q;
                        if (p.Zc(s))u = !u;
                        if (s & 16)z = !z
                    }
                    f.$Top = f.$Top || f.$Clip & 4;
                    f.$Bottom = f.$Bottom || f.$Clip & 8;
                    f.$Left = f.$Left || f.$Clip & 1;
                    f.$Right = f.$Right || f.$Clip & 2;
                    var F = u ? f.$Bottom : f.$Top, C = u ? f.$Top : f.$Bottom, E = q ? f.$Right : f.$Left, D = q ? f.$Left : f.$Right;
                    f.$Clip = F || C || E || D;
                    t = {};
                    g = {$Top: 0, $Left: 0, $Opacity: 1, jb: o, kb: l};
                    h = a.f({}, g);
                    v = a.f({}, i[y]);
                    if (f.$Opacity)g.$Opacity = 2 - f.$Opacity;
                    if (f.$ZIndex) {
                        g.$ZIndex = f.$ZIndex;
                        h.$ZIndex = 0
                    }
                    var M = f.$Cols * f.$Rows > 1 || f.$Clip;
                    if (f.$Zoom || f.$Rotate) {
                        var L = c;
                        if (a.Rb() && a.Ye() < 9)if (f.$Cols * f.$Rows > 1)L = d; else M = d;
                        if (L) {
                            g.$Zoom = f.$Zoom ? f.$Zoom - 1 : 1;
                            h.$Zoom = 1;
                            if (a.N() || a.Zb())g.$Zoom = b.min(g.$Zoom, 2);
                            var R = f.$Rotate;
                            g.$Rotate = R * 360 * (z ? -1 : 1);
                            h.$Rotate = 0
                        }
                    }
                    if (M) {
                        if (f.$Clip) {
                            var x = f.$ScaleClip || 1, m = v.E = {};
                            if (F && C) {
                                m.$Top = i.kb / 2 * x;
                                m.$Bottom = -m.$Top
                            } else if (F)m.$Bottom = -i.kb * x; else if (C)m.$Top = i.kb * x;
                            if (E && D) {
                                m.$Left = i.jb / 2 * x;
                                m.$Right = -m.$Left
                            } else if (E)m.$Right = -i.jb * x; else if (D)m.$Left = i.jb * x
                        }
                        t.$Clip = v;
                        h.$Clip = i[y]
                    }
                    var P = q ? 1 : -1, Q = u ? 1 : -1;
                    if (f.x)g.$Left += o * f.x * P;
                    if (f.y)g.$Top += l * f.y * Q;
                    a.b(g, function (b, c) {
                        if (a.xc(b))if (b != h[c])t[c] = b - h[c]
                    });
                    w[y] = k ? h : g;
                    var J = b.round(j * f.$Delay / f.$Interval);
                    n[y] = new Array(J);
                    n[y].je = J;
                    for (var B = f.dd, I = 0; I <= B; I++) {
                        var e = {};
                        a.b(t, function (g, c) {
                            var m = f.cd[c] || f.cd.D, l = m[f.$Round[c] || 1], k = f.$During[c] || [0, 1], d = (I / B - k[0]) / k[1] * B;
                            d = b.round(b.min(B, b.max(d, 0)));
                            var j = l[d];
                            if (a.xc(g))e[c] = h[c] + g * j; else {
                                var i = e[c] = a.f({}, h[c]);
                                i.E = [];
                                a.b(g.E, function (c, b) {
                                    var a = c * j;
                                    i.E[b] = a;
                                    i[b] += a
                                })
                            }
                        });
                        if (h.$Zoom)e.Ib = {
                            $Rotate: e.$Rotate || 0,
                            $Scale: e.$Zoom,
                            $OriginalWidth: o,
                            $OriginalHeight: l
                        };
                        if (e.$Clip && f.$Move) {
                            var A = e.$Clip.E, H = (A.$Top || 0) + (A.$Bottom || 0), G = (A.$Left || 0) + (A.$Right || 0);
                            e.$Left = (e.$Left || 0) + G;
                            e.$Top = (e.$Top || 0) + H;
                            e.$Clip.$Left -= G;
                            e.$Clip.$Right -= G;
                            e.$Clip.$Top -= H;
                            e.$Clip.$Bottom -= H
                        }
                        e.$ZIndex = e.$ZIndex || 1;
                        n[y].push(e)
                    }
                })
            });
            q.reverse();
            a.b(q, function (b) {
                a.b(b, function (d) {
                    var g = d[0], f = d[1], e = g + "," + f, b = j;
                    if (f || g)b = a.Q(j, c);
                    a.H(b, w[e]);
                    a.T(b, "hidden");
                    a.B(b, "absolute");
                    D.be(b);
                    m[e] = b;
                    a.p(b, k)
                })
            })
        }

        g.$JssorSlideshowRunner$ = function (h, l, i, n, p) {
            var d = this, o, f, c, s = 0, r = n.$TransitionsOrder, k, g = 16;

            function q() {
                var a = this, b = 0;
                j.call(a, 0, o);
                a.Tb = function (d, a) {
                    if (a - b > g) {
                        b = a;
                        c && c.Jb(a);
                        f && f.Jb(a)
                    }
                };
                a.rb = k
            }

            d.Zd = function (f) {
                var c = 0, e = n.$Transitions, d = e.length;
                if (r) {
                    if (d > f && (a.lb() || a.Xe() || a.ad()))d -= d % f;
                    c = s++ % d
                } else c = b.floor(b.random() * d);
                e[c] && (e[c].gb = c);
                return e[c]
            };
            d.de = function (w, x, n, p, a) {
                k = a;
                a = L(a, g);
                var m = p.sd, j = n.sd;
                m["no-image"] = !p.Fb;
                j["no-image"] = !n.Fb;
                var q = m, r = j, v = a, e = a.$Brother || L({}, g);
                if (!a.$SlideOut) {
                    q = j;
                    r = m
                }
                var s = e.$Shift || 0;
                f = new M(h, r, e, b.max(s - e.$Interval, 0), l, i);
                c = new M(h, q, v, b.max(e.$Interval - s, 0), l, i);
                f.Jb(0);
                c.Jb(0);
                o = b.max(f.hd, c.hd);
                d.gb = w
            };
            d.zb = function () {
                h.zb();
                f = e;
                c = e
            };
            d.ce = function () {
                var a = e;
                if (c)a = new q;
                return a
            };
            if (a.N() || a.Zb() || p && a.lc() < 537)g = 32;
            m.call(d);
            j.call(d, -1e7, 1e7)
        };
        function n(r, lc) {
            var k = this;

            function Gc() {
                var a = this;
                j.call(a, -1e8, 2e8);
                a.ee = function () {
                    var c = a.yb(), d = b.floor(c), f = v(d), e = c - b.floor(c);
                    return {gb: f, ae: d, tb: e}
                };
                a.Tb = function (d, a) {
                    var e = b.floor(a);
                    if (e != a && a > d)e++;
                    Yb(e, c);
                    k.g(n.$EVT_POSITION_CHANGE, v(a), v(d), a, d)
                }
            }

            function Fc() {
                var b = this;
                j.call(b, 0, 0, {nd: u});
                a.b(E, function (a) {
                    N & 1 && a.ye(u);
                    b.ic(a);
                    a.$Shift(mb / fc)
                })
            }

            function Ec() {
                var a = this, b = Xb.$Elmt;
                j.call(a, -1, 2, {$Easing: l.$EaseLinear, ld: {tb: dc}, nd: u}, b, {tb: 1}, {tb: -1});
                a.Wb = b
            }

            function tc(q, o) {
                var f = this, i, l, g, m, h;
                j.call(f, -1e8, 2e8);
                f.Jc = function () {
                    U = c;
                    Y = e;
                    k.g(n.$EVT_SWIPE_START, v(z.M()), z.M())
                };
                f.Kc = function () {
                    U = d;
                    m = d;
                    var a = z.ee();
                    k.g(n.$EVT_SWIPE_END, v(z.M()), z.M());
                    !a.tb && Ic(a.ae, t)
                };
                f.Tb = function (f, e) {
                    var d;
                    if (m)d = h; else {
                        d = l;
                        if (g) {
                            var c = e / g;
                            if (a.lb() || a.ad()) {
                                b.round(c * 16 / g) / 16 * g;
                                c = parseFloat(c.toFixed(4))
                            }
                            d = p.$SlideEasing(c) * (l - i) + i
                        }
                    }
                    z.L(d)
                };
                f.Yb = function (a, c, b, d) {
                    i = a;
                    l = c;
                    g = b;
                    z.L(a);
                    f.L(0);
                    f.Sc(b, d)
                };
                f.Od = function (a) {
                    m = c;
                    h = a;
                    f.$Play(a, e, c)
                };
                f.Pd = function (a) {
                    h = a
                };
                z = new Gc;
                z.U(q);
                z.U(o)
            }

            function uc() {
                var c = this, b = cc();
                a.O(b, 0);
                c.$Elmt = b;
                c.be = function (c) {
                    a.C(b, c);
                    a.p(b)
                };
                c.zb = function () {
                    a.G(b);
                    a.Mc(b)
                }
            }

            function Dc(o, l) {
                var f = this, r, x, H, y, g, z = [], R, q, T, G, P, F, h, s, i;
                j.call(f, -w, w + 1, {});
                function D(a) {
                    x && x.ac();
                    r && r.ac();
                    S(o, a);
                    F = c;
                    r = new J.$Class(o, J, 1);
                    x = new J.$Class(o, J);
                    x.nc();
                    r.nc()
                }

                function Z() {
                    r.jc < J.jc && D()
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
                                a.k(g, j);
                                a.j(g, i);
                                a.r(g, (L - i) / 2);
                                a.s(g, (M - j) / 2)
                            }
                            a.B(g, "absolute");
                            k.g(n.$EVT_LOAD_END, ic)
                        }
                    }
                    a.G(q);
                    m && m(f)
                }

                function U(b, c, d, e) {
                    if (e == Y && t == l && V)if (!Hc) {
                        var a = v(b);
                        C.de(a, l, c, f, d);
                        c.Yd();
                        gb.Lb(a, 1);
                        gb.L(a);
                        A.Yb(b, b, 0)
                    }
                }

                function ab(b) {
                    if (b == Y && t == l) {
                        if (!h) {
                            var a = e;
                            if (C)if (C.gb == l)a = C.ce(); else C.zb();
                            Z();
                            h = new Bc(l, a, f.Td(), f.Ud());
                            h.kd(i)
                        }
                        !h.$IsPlaying() && h.kc()
                    }
                }

                function Q(d, c) {
                    if (d == l) {
                        if (d != c)E[c] && E[c].Vd(); else h && h.le();
                        i && i.$Enable();
                        var k = Y = a.K();
                        f.nb(a.v(e, ab, k))
                    } else {
                        var j = b.abs(l - d), g = w + p.$LazyLoading;
                        (!P || j <= g || u - j <= g) && f.nb()
                    }
                }

                function bb() {
                    if (t == l && h) {
                        h.ab();
                        i && i.$Quit();
                        i && i.$Disable();
                        h.Ec()
                    }
                }

                function cb() {
                    t == l && h && h.ab()
                }

                function O(b) {
                    if (X)a.Z(b); else k.g(n.$EVT_CLICK, l, b)
                }

                function N() {
                    i = s.pInstance;
                    h && h.kd(i)
                }

                f.nb = function (d, b) {
                    b = b || y;
                    if (z.length && !G) {
                        a.p(b);
                        if (!T) {
                            T = c;
                            k.g(n.$EVT_LOAD_START);
                            a.b(z, function (b) {
                                if (!b.src) {
                                    b.src = a.I(b, "src2");
                                    a.hb(b, b["display-origin"])
                                }
                            })
                        }
                        a.jf(z, g, a.v(e, I, d, b))
                    } else I(d, b)
                };
                f.He = function () {
                    if (C) {
                        var b = C.Zd(u);
                        if (b) {
                            var f = Y = a.K(), c = l + bc, d = E[v(c)];
                            return d.nb(a.v(e, U, c, d, b, f), y)
                        }
                    }
                    hb(t + p.$AutoPlaySteps * bc)
                };
                f.bc = function () {
                    Q(l, l)
                };
                f.Vd = function () {
                    i && i.$Quit();
                    i && i.$Disable();
                    f.Tc();
                    h && h.Ee();
                    h = e;
                    D()
                };
                f.Yd = function () {
                    a.G(o)
                };
                f.Tc = function () {
                    a.p(o)
                };
                f.Fe = function () {
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
                                b["display-origin"] = a.hb(b);
                                a.G(b)
                            }
                        }
                        a.N() && a.O(b, (a.O(b) || 0) + 1);
                        if (p.$HWA && a.lc() > 0)(!K || a.lc() < 534 || !kb) && a.ef(b)
                    }
                    var h = a.J(b);
                    a.b(h, function (h) {
                        var j = a.I(h, "u");
                        if (j == "player" && !s) {
                            s = h;
                            if (s.pInstance)N(); else a.i(s, "dataavailable", N)
                        }
                        if (j == "caption") {
                            if (!a.Rb() && !f) {
                                var i = a.Q(h, c);
                                a.Ub(b, i, h);
                                a.vb(b, h);
                                h = i;
                                f = c
                            }
                        } else if (!F && !e && !g && a.I(h, "u") == "image") {
                            g = h;
                            if (g) {
                                if (g.tagName == "A") {
                                    R = g;
                                    a.H(R, W);
                                    q = a.Q(g, d);
                                    a.i(q, "click", O);
                                    a.H(q, W);
                                    a.hb(q, "block");
                                    a.wb(q, 0);
                                    a.Bb(q, "backgroundColor", "#000");
                                    g = a.Pe(g, "IMG")
                                }
                                g.border = 0;
                                a.H(g, W)
                            }
                        }
                        S(h, f, e + 1)
                    })
                }

                f.yc = function (c, b) {
                    var a = w - b;
                    dc(H, a)
                };
                f.Td = function () {
                    return r
                };
                f.Ud = function () {
                    return x
                };
                f.gb = l;
                m.call(f);
                var B = a.A(o, "thumb");
                if (B) {
                    f.pe = a.Q(B, c);
                    a.gf(B, "id");
                    a.G(B)
                }
                a.p(o);
                y = a.Q(jb, c);
                a.O(y, 1e3);
                a.i(o, "click", O);
                D(c);
                f.Fb = g;
                f.Lc = q;
                f.sd = o;
                f.Wb = H = o;
                a.C(H, y);
                k.$On(203, Q);
                k.$On(28, cb);
                k.$On(24, bb)
            }

            function Bc(h, q, v, u) {
                var b = this, l = 0, x = 0, m, g, e, f, i, r, w, s, o = E[h];
                j.call(b, 0, 0);
                function y() {
                    a.lf(Q);
                    jc && i && o.Lc && a.C(Q, o.Lc);
                    a.p(Q, i || !o.Fb)
                }

                function z() {
                    if (r) {
                        r = d;
                        k.g(n.$EVT_ROLLBACK_END, h, e, l, g, e, f);
                        b.L(g)
                    }
                    b.kc()
                }

                function A(a) {
                    s = a;
                    b.ab();
                    b.kc()
                }

                b.kc = function () {
                    var a = b.yb();
                    if (!D && !U && !s && t == h) {
                        if (!a) {
                            if (m && !i) {
                                i = c;
                                b.Ec(c);
                                k.g(n.$EVT_SLIDESHOW_START, h, l, x, m, f)
                            }
                            y()
                        }
                        var d, p = n.$EVT_STATE_CHANGE;
                        if (a != f)if (a == e)d = f; else if (a == g)d = e; else if (!a)d = g; else if (a > e) {
                            r = c;
                            d = e;
                            p = n.$EVT_ROLLBACK_START
                        } else d = b.Qc();
                        k.g(p, h, a, l, g, e, f);
                        var j = V && (!R || H);
                        if (a == f)j && o.He(); else(j || a != e) && b.Sc(d, z)
                    }
                };
                b.le = function () {
                    e == f && e == b.yb() && b.L(g)
                };
                b.Ee = function () {
                    C && C.gb == h && C.zb();
                    var a = b.yb();
                    a < f && k.g(n.$EVT_STATE_CHANGE, h, -a - 1, l, g, e, f)
                };
                b.Ec = function (b) {
                    q && a.T(ob, b && q.rb.$Outside ? "" : "hidden")
                };
                b.yc = function (b, a) {
                    if (i && a >= m) {
                        i = d;
                        y();
                        o.Tc();
                        C.zb();
                        k.g(n.$EVT_SLIDESHOW_END, h, l, x, m, f)
                    }
                    k.g(n.$EVT_PROGRESS_CHANGE, h, a, l, g, e, f)
                };
                b.kd = function (a) {
                    if (a && !w) {
                        w = a;
                        a.$On($JssorPlayer$.Wd, A)
                    }
                };
                q && b.ic(q);
                m = b.V();
                b.V();
                b.ic(v);
                g = v.V();
                e = g + p.$AutoPlayInterval;
                u.$Shift(e);
                b.U(u);
                f = b.V()
            }

            function dc(e, g) {
                var f = y > 0 ? y : nb, c = Fb * g * (f & 1), d = Gb * g * (f >> 1 & 1);
                if (a.lb()) {
                    c = c.toFixed(3);
                    d = d.toFixed(3)
                } else {
                    c = b.round(c);
                    d = b.round(d)
                }
                if (a.Rb() && a.pb() >= 10 && a.pb() < 11)e.style.msTransform = "translate(" + c + "px, " + d + "px)"; else if (a.lb() && a.pb() >= 30 && a.pb() < 34) {
                    e.style.WebkitTransition = "transform 0s";
                    e.style.WebkitTransform = "translate3d(" + c + "px, " + d + "px, 0px) perspective(2000px)"
                } else {
                    a.s(e, c);
                    a.r(e, d)
                }
            }

            function zc(c) {
                var b = a.We(c).tagName;
                !O && b != "INPUT" && b != "TEXTAREA" && b != "SELECT" && xc() && yc(c)
            }

            function Mb() {
                vb = U;
                Qb = A.Qc();
                F = z.M();
                if (D || !H && R & 12) {
                    A.ab();
                    k.g(n.we)
                }
            }

            function kc(e) {
                if (!D && (H || !(R & 12)) && !A.$IsPlaying()) {
                    var c = z.M(), a = b.ceil(F);
                    if (e && b.abs(G) >= p.$MinDragOffsetToSlide) {
                        a = b.ceil(c);
                        a += lb
                    }
                    if (!(N & 1))a = b.min(u - w, b.max(a, 0));
                    var d = b.abs(a - c);
                    d = 1 - b.pow(1 - d, 5);
                    if (!X && vb)A.Je(Qb); else if (c == a) {
                        yb.Fe();
                        yb.bc()
                    } else A.Yb(c, a, d * Zb)
                }
            }

            function yc(b) {
                D = c;
                Eb = d;
                Y = e;
                a.i(f, tb, gc);
                a.K();
                X = 0;
                Mb();
                if (!vb)y = 0;
                if (K) {
                    var h = b.touches[0];
                    zb = h.clientX;
                    Ab = h.clientY
                } else {
                    var g = a.od(b);
                    zb = g.x;
                    Ab = g.y;
                    a.Z(b)
                }
                G = 0;
                ib = 0;
                lb = 0;
                k.g(n.$EVT_DRAG_START, v(F), F, b)
            }

            function gc(e) {
                if (D && (!a.N() || e.button)) {
                    var f;
                    if (K) {
                        var m = e.touches;
                        if (m && m.length > 0)f = new i(m[0].clientX, m[0].clientY)
                    } else f = a.od(e);
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
                                a.Z(e);
                                if (!U)A.Od(xb); else A.Pd(xb)
                            } else a.N() && a.Z(e)
                        }
                    }
                } else Jb(e)
            }

            function Jb(e) {
                vc();
                if (D) {
                    D = d;
                    a.K();
                    a.bf(f, tb, gc);
                    X = G;
                    X && a.Z(e);
                    A.ab();
                    var b = z.M();
                    k.g(n.$EVT_DRAG_END, v(b), b, v(F), F, e);
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
                k.g(n.$EVT_PARK, v(a), b)
            }

            function Yb(b, c) {
                Cb = b;
                a.b(T, function (a) {
                    a.ec(v(b), b, c)
                })
            }

            function xc() {
                var b = n.Ac || 0, a = S;
                if (K)a & 1 && (a &= 1);
                n.Ac |= a;
                return O = a & ~b
            }

            function vc() {
                if (O) {
                    n.Ac &= ~S;
                    O = 0
                }
            }

            function cc() {
                var b = a.R();
                a.H(b, W);
                a.B(b, "absolute");
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
                a.b(T, function (a) {
                    a.qc(a.Xb.$ChanceToShow > H)
                })
            }

            function nc() {
                if (!H) {
                    H = 1;
                    Db();
                    if (!D) {
                        R & 12 && kc();
                        R & 3 && E[t].bc()
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
                W = {jb: M, kb: L, $Top: 0, $Left: 0};
                a.b(ab, function (b) {
                    a.H(b, W);
                    a.B(b, "absolute");
                    a.T(b, "hidden");
                    a.G(b)
                });
                a.H(jb, W)
            }

            function rb(b, a) {
                hb(b, a, c)
            }

            function hb(g, f, k) {
                if (Vb && (!D || p.$NaviQuitDrag)) {
                    U = c;
                    D = d;
                    A.ab();
                    if (f == h)f = Zb;
                    var e = Kb.yb(), a = g;
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
                    A.Yb(e, a, i || 1)
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
                    E[t] && E[t].bc()
                }
            };
            k.$SetSlideshowTransitions = function (b) {
                a.Nb(b);
                p.$SlideshowOptions.$Transitions = b
            };
            k.$SetCaptionTransitions = function (b) {
                a.Nb(b);
                J.$CaptionTransitions = b;
                J.jc = a.K()
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
                return a.k(x || r)
            }

            function pb() {
                return a.j(x || r)
            }

            k.$OriginalWidth = k.$GetOriginalWidth = eb;
            k.$OriginalHeight = k.$GetOriginalHeight = pb;
            function Nb(c, e) {
                if (c == h)return a.k(r);
                if (!x) {
                    var b = a.R(f);
                    a.Sb(b, a.Sb(r));
                    a.Oc(b, a.Oc(r));
                    a.B(b, "relative");
                    a.r(b, 0);
                    a.s(b, 0);
                    a.T(b, "visible");
                    x = a.R(f);
                    a.B(x, "absolute");
                    a.r(x, 0);
                    a.s(x, 0);
                    a.k(x, a.k(r));
                    a.j(x, a.j(r));
                    a.Ze(x, "0 0");
                    a.C(x, b);
                    var i = a.J(r);
                    a.C(r, x);
                    a.Bb(r, "backgroundImage", "");
                    var g = {
                        navigator: cb && cb.$Scale == d,
                        arrowleft: P && P.$Scale == d,
                        arrowright: P && P.$Scale == d,
                        thumbnavigator: I && I.$Scale == d,
                        thumbwrapper: I && I.$Scale == d
                    };
                    a.b(i, function (c) {
                        a.C(g[a.I(c, "u")] ? r : b, c)
                    });
                    a.p(b);
                    a.p(x)
                }
                fb = c / (e ? a.j : a.k)(x);
                a.df(x, fb);
                a.k(r, e ? fb * eb() : c);
                a.j(r, e ? c : fb * pb());
                a.b(T, function (a) {
                    a.mc()
                })
            }

            k.$ScaleHeight = k.$GetScaleHeight = function (b) {
                if (b == h)return a.j(r);
                Nb(b, c)
            };
            k.$ScaleWidth = k.$SetScaleWidth = k.$GetScaleWidth = Nb;
            k.Cc = function (a) {
                var d = b.ceil(v(mb / fc)), c = v(a - t + d);
                if (c > w) {
                    if (a - t > u / 2)a -= u; else if (a - t <= -u / 2)a += u
                } else a = t + c - d;
                return a
            };
            m.call(this);
            k.$Elmt = r = a.bb(r);
            var p = a.f({
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
            }, lc), nb = p.$PlayOrientation & 3, bc = (p.$PlayOrientation & 4) / -4 || 1, db = p.$SlideshowOptions, J = a.f({
                $Class: s,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, p.$CaptionSliderOptions);
            a.Nb(J.$CaptionTransitions);
            var cb = p.$BulletNavigatorOptions, P = p.$ArrowNavigatorOptions, I = p.$ThumbnailNavigatorOptions, Z = p.$UISearchMode, x, B = a.A(r, "slides", e, Z), jb = a.A(r, "loading", e, Z) || a.R(f), Pb = a.A(r, "navigator", e, Z), hc = a.A(r, "arrowleft", e, Z), ec = a.A(r, "arrowright", e, Z), Ob = a.A(r, "thumbnavigator", e, Z), rc = a.k(B), qc = a.j(B), W, ab = [], Ac = a.J(B);
            a.b(Ac, function (b) {
                b.tagName == "DIV" && !a.I(b, "u") && ab.push(b)
            });
            var t = -1, Cb, yb, u = ab.length, M = p.$SlideWidth || rc, L = p.$SlideHeight || qc, ac = p.$SlideSpacing, Fb = M + ac, Gb = L + ac, fc = nb & 1 ? Fb : Gb, w = b.min(p.$DisplayPieces, u), ob, y, O, Eb, K, T = [], Ub, Wb, Tb, jc, Hc, V, R = p.$PauseOnHover, Zb = p.$SlideDuration, wb, kb, mb, Vb = w < u, N = Vb ? p.$Loop : 0, S, X, H = 1, U, D, Y, zb = 0, Ab = 0, G, ib, lb, Kb, z, gb, A, Xb = new uc, fb;
            V = p.$AutoPlay;
            k.Xb = lc;
            oc();
            r["jssor-slider"] = c;
            a.O(B, a.O(B) || 0);
            a.B(B, "absolute");
            ob = a.Q(B);
            a.Ub(a.dc(B), ob, B);
            if (db) {
                jc = db.$ShowLink;
                wb = db.$Class;
                a.Nb(db.$Transitions);
                kb = w == 1 && u > 1 && wb && (!a.Rb() || a.pb() >= 8)
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
                    a.Bb(Bb, bb ? "msTouchAction" : "touchAction", Hb)
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
            a.C(ob, gb.Wb);
            a.T(B, "hidden");
            Q = cc();
            a.Bb(Q, "backgroundColor", "#000");
            a.wb(Q, 0);
            a.Ub(Bb, Q, Bb.firstChild);
            for (var ub = 0; ub < ab.length; ub++) {
                var Cc = ab[ub], ic = new Dc(Cc, ub);
                E.push(ic)
            }
            a.G(jb);
            Kb = new Fc;
            A = new tc(Kb, gb);
            if (S) {
                a.i(B, Ib, zc);
                a.i(f, Lb, Jb);
                sb && a.i(f, sb, Jb)
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
            a.b(T, function (a) {
                a.zc(u, E, jb);
                a.$On(o.Vb, pc)
            });
            Nb(eb());
            a.i(r, "mouseout", a.Ob(nc, r));
            a.i(r, "mouseover", a.Ob(mc, r));
            Db();
            p.$ArrowKeyNavigation && a.i(f, "keydown", function (a) {
                if (a.keyCode == q.of)rb(-1); else a.keyCode == q.Re && rb(1)
            });
            var qb = p.$StartIndex;
            if (!(N & 1))qb = b.max(0, b.min(qb, u - w));
            A.Yb(qb, qb, 0)
        }

        n.$EVT_CLICK = 21;
        n.$EVT_DRAG_START = 22;
        n.$EVT_DRAG_END = 23;
        n.$EVT_SWIPE_START = 24;
        n.$EVT_SWIPE_END = 25;
        n.$EVT_LOAD_START = 26;
        n.$EVT_LOAD_END = 27;
        n.we = 28;
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
    var o = {Vb: 1};
    g.$JssorBulletNavigator$ = function (g, F, E, C) {
        var h = this;
        m.call(h);
        g = a.bb(g);
        var t, u, s, r, l = 0, f, n, k, y, z, j, i, q, p, D = [], A = [];

        function x(a) {
            a != -1 && A[a].bd(a == l)
        }

        function v(a) {
            h.g(o.Vb, a * n)
        }

        h.$Elmt = g;
        h.ec = function (a) {
            if (a != r) {
                var d = l, c = b.floor(a / n);
                l = c;
                r = a;
                x(d);
                x(c)
            }
        };
        h.qc = function (b) {
            a.p(g, b)
        };
        var B;
        h.mc = function () {
            if (!B || f.$Scale == d) {
                f.$AutoCenter & 1 && a.s(g, (E - u) / 2);
                f.$AutoCenter & 2 && a.r(g, (C - s) / 2);
                B = c
            }
        };
        var w;
        h.zc = function (C) {
            if (!w) {
                t = b.ceil(C / n);
                l = 0;
                var o = q + y, r = p + z, m = b.ceil(t / k) - 1;
                u = q + o * (!j ? m : k - 1);
                s = p + r * (j ? m : k - 1);
                a.k(g, u);
                a.j(g, s);
                for (var d = 0; d < t; d++) {
                    var B = a.Qe();
                    a.Me(B, d + 1);
                    var h = a.Yc(i, "NumberTemplate", B, c);
                    a.B(h, "absolute");
                    var x = d % (m + 1);
                    a.s(h, !j ? o * x : d % k * o);
                    a.r(h, j ? r * x : b.floor(d / (m + 1)) * r);
                    a.C(g, h);
                    D[d] = h;
                    f.$ActionMode & 1 && a.i(h, "click", a.v(e, v, d));
                    f.$ActionMode & 2 && a.i(h, "mouseover", a.Ob(a.v(e, v, d), h));
                    A[d] = a.Pb(h)
                }
                w = c
            }
        };
        h.Xb = f = a.f({$SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1}, F);
        i = a.A(g, "prototype");
        q = a.k(i);
        p = a.j(i);
        a.vb(g, i);
        n = f.$Steps || 1;
        k = f.$Lanes || 1;
        y = f.$SpacingX;
        z = f.$SpacingY;
        j = f.$Orientation - 1
    };
    g.$JssorArrowNavigator$ = function (f, g, t, n, l) {
        var b = this;
        m.call(b);
        var h, j, r = a.k(f), p = a.j(f);

        function k(a) {
            b.g(o.Vb, a, c)
        }

        b.ec = function (b, a, c) {
            if (c);
        };
        b.qc = function (b) {
            a.p(f, b);
            a.p(g, b)
        };
        var s;
        b.mc = function () {
            if (!s || h.$Scale == d) {
                if (h.$AutoCenter & 1) {
                    a.s(f, (n - r) / 2);
                    a.s(g, (n - r) / 2)
                }
                if (h.$AutoCenter & 2) {
                    a.r(f, (l - p) / 2);
                    a.r(g, (l - p) / 2)
                }
                s = c
            }
        };
        var q;
        b.zc = function (b) {
            if (!q) {
                a.i(f, "click", a.v(e, k, -j));
                a.i(g, "click", a.v(e, k, j));
                a.Pb(f);
                a.Pb(g);
                q = c
            }
        };
        b.Xb = h = a.f({$Steps: 1}, t);
        j = h.$Steps
    };
    g.$JssorThumbnailNavigator$ = function (i, A) {
        var h = this, x, l, e, u = [], y, w, f, n, p, t, s, k, q, g, j;
        m.call(h);
        i = a.bb(i);
        function z(n, d) {
            var g = this, b, m, k;

            function p() {
                m.bd(l == d)
            }

            function i() {
                if (!q.$LastDragSucceded()) {
                    var a = f - d % f, b = q.Cc((d + a) / f - 1), c = b * f + f - a;
                    h.g(o.Vb, c)
                }
            }

            g.gb = d;
            g.ud = p;
            k = n.pe || n.Fb || a.R();
            g.Wb = b = a.Yc(j, "ThumbnailTemplate", k, c);
            m = a.Pb(b);
            e.$ActionMode & 1 && a.i(b, "click", i);
            e.$ActionMode & 2 && a.i(b, "mouseover", a.Ob(i, b))
        }

        h.ec = function (c, d, e) {
            var a = l;
            l = c;
            a != -1 && u[a].ud();
            u[c].ud();
            !e && q.$PlayTo(q.Cc(b.floor(d / f)))
        };
        h.qc = function (b) {
            a.p(i, b)
        };
        h.mc = a.sc;
        var v;
        h.zc = function (F, D) {
            if (!v) {
                x = F;
                b.ceil(x / f);
                l = -1;
                k = b.min(k, D.length);
                var h = e.$Orientation & 1, o = t + (t + n) * (f - 1) * (1 - h), m = s + (s + p) * (f - 1) * h, C = o + (o + n) * (k - 1) * h, A = m + (m + p) * (k - 1) * (1 - h);
                a.B(g, "absolute");
                a.T(g, "hidden");
                e.$AutoCenter & 1 && a.s(g, (y - C) / 2);
                e.$AutoCenter & 2 && a.r(g, (w - A) / 2);
                a.k(g, C);
                a.j(g, A);
                var j = [];
                a.b(D, function (l, e) {
                    var i = new z(l, e), d = i.Wb, c = b.floor(e / f), k = e % f;
                    a.s(d, (t + n) * k * (1 - h));
                    a.r(d, (s + p) * k * h);
                    if (!j[c]) {
                        j[c] = a.R();
                        a.C(g, j[c])
                    }
                    a.C(j[c], d);
                    u.push(i)
                });
                var E = a.f({
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
        h.Xb = e = a.f({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, A);
        y = a.k(i);
        w = a.j(i);
        g = a.A(i, "slides");
        j = a.A(g, "prototype");
        t = a.k(j);
        s = a.j(j);
        a.vb(g, j);
        f = e.$Lanes || 1;
        n = e.$SpacingX;
        p = e.$SpacingY;
        k = e.$DisplayPieces
    };
    function s() {
        j.call(this, 0, 0);
        this.ac = a.sc
    }

    g.$JssorCaptionSlider$ = function (q, k, g) {
        var d = this, i, o = g ? k.$PlayInMode : k.$PlayOutMode, f = k.$CaptionTransitions, p = {
            rb: "t",
            $Delay: "d",
            $Duration: "du",
            x: "x",
            y: "y",
            $Rotate: "r",
            $Zoom: "z",
            $Opacity: "f",
            ib: "b"
        }, e = {
            D: function (b, a) {
                if (!isNaN(a.eb))b = a.eb; else b *= a.Ad;
                return b
            }, $Opacity: function (b, a) {
                return this.D(b - 1, a)
            }
        };
        e.$Zoom = e.$Opacity;
        j.call(d, 0, 0);
        function m(r, l) {
            var k = [], i, j = [], c = [];

            function h(c, d) {
                var b = {};
                a.b(p, function (g, h) {
                    var e = a.I(c, g + (d || ""));
                    if (e) {
                        var f = {};
                        if (g == "t")f.eb = e; else if (e.indexOf("%") + 1)f.Ad = a.gd(e) / 100; else f.eb = a.gd(e);
                        b[h] = f
                    }
                });
                return b
            }

            function n() {
                return f[b.floor(b.random() * f.length)]
            }

            function d(g) {
                var h;
                if (g == "*")h = n(); else if (g) {
                    var e = f[a.kf(g)] || f[g];
                    if (a.Eb(e)) {
                        if (g != i) {
                            i = g;
                            c[g] = 0;
                            j[g] = e[b.floor(b.random() * e.length)]
                        } else c[g]++;
                        e = j[g];
                        if (a.Eb(e)) {
                            e = e.length && e[c[g] % e.length];
                            if (a.Eb(e))e = e[b.floor(b.random() * e.length)]
                        }
                    }
                    h = e;
                    if (a.id(h))h = d(h)
                }
                return h
            }

            var q = a.J(r);
            a.b(q, function (b) {
                var c = [];
                c.$Elmt = b;
                var f = a.I(b, "u") == "caption";
                a.b(g ? [0, 3] : [2], function (k, n) {
                    if (f) {
                        var j, g;
                        if (k != 2 || !a.I(b, "t3")) {
                            g = h(b, k);
                            if (k == 2 && !g.rb) {
                                g.$Delay = g.$Delay || {eb: 0};
                                g = a.f(h(b, 0), g)
                            }
                        }
                        if (g && g.rb) {
                            j = d(g.rb.eb);
                            if (j) {
                                var i = a.f({$Delay: 0}, j);
                                a.b(g, function (c, a) {
                                    var b = (e[a] || e.D).apply(e, [i[a], g[a]]);
                                    if (!isNaN(b))i[a] = b
                                });
                                if (!n)if (g.ib)i.ib = g.ib.eb || 0; else if (o & 2)i.ib = 0
                            }
                        }
                        c.push(i)
                    }
                    if (l % 2 && !n)c.J = m(b, l + 1)
                });
                k.push(c)
            });
            return k
        }

        function n(x, d, A) {
            var h = {
                $Easing: d.$Easing,
                $Round: d.$Round,
                $During: d.$During,
                $Reverse: g && !A,
                xe: c
            }, i = x, s = a.dc(x), n = a.k(i), m = a.j(i), z = a.k(s), y = a.j(s), f = {}, k = {}, l = d.$ScaleClip || 1;
            if (d.$Opacity)f.$Opacity = 2 - d.$Opacity;
            h.$OriginalWidth = n;
            h.$OriginalHeight = m;
            if (d.$Zoom || d.$Rotate) {
                f.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
                if (a.N() || a.Zb())f.$Zoom = b.min(f.$Zoom, 2);
                k.$Zoom = 1;
                var C = d.$Rotate || 0;
                f.$Rotate = C * 360;
                k.$Rotate = 0
            } else if (d.$Clip) {
                var t = {
                    $Top: 0,
                    $Right: n,
                    $Bottom: m,
                    $Left: 0
                }, w = a.f({}, t), e = w.E = {}, v = d.$Clip & 4, q = d.$Clip & 8, u = d.$Clip & 1, r = d.$Clip & 2;
                if (v && q) {
                    e.$Top = m / 2 * l;
                    e.$Bottom = -e.$Top
                } else if (v)e.$Bottom = -m * l; else if (q)e.$Top = m * l;
                if (u && r) {
                    e.$Left = n / 2 * l;
                    e.$Right = -e.$Left
                } else if (u)e.$Right = -n * l; else if (r)e.$Left = n * l;
                h.$Move = d.$Move;
                f.$Clip = w;
                k.$Clip = t
            }
            var o = 0, p = 0;
            if (d.x)o -= z * d.x;
            if (d.y)p -= y * d.y;
            if (o || p || h.$Move) {
                f.$Left = o + a.s(i);
                f.$Top = p + a.r(i)
            }
            var B = d.$Duration;
            k = a.f(k, a.Hd(i, f));
            h.ld = a.Fd();
            return new j(d.$Delay, B, h, i, k, f)
        }

        function l(b, c) {
            a.b(c, function (a) {
                var e, g = a.$Elmt, c = a[0], j = a[1];
                if (c) {
                    e = n(g, c);
                    b = e.Lb(c.ib == h ? b : c.ib, 1)
                }
                b = l(b, a.J);
                if (j) {
                    var f = n(g, j, 1);
                    f.Lb(b, 1);
                    d.U(f);
                    i.U(f)
                }
                e && d.U(e)
            });
            return b
        }

        d.ac = function () {
            d.L(d.V() * (g || 0));
            i.nc()
        };
        i = new j(0, 0);
        l(0, o ? m(q, 1) : [])
    }
})(window, document, Math, null, true, false)