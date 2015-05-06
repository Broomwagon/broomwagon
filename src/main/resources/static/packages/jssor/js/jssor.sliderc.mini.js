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
    }, q = {Be: 37, Ce: 39}, n, j, a = new function () {
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
                j.Jc(b, c.y);
                j.Rc(b, c.x)
            }
        }

        j.Qb = t;
        j.Ke = sb;
        j.tb = fb;
        j.ze = jb;
        j.Eb = A;
        j.fb = function () {
            return m
        };
        j.pc = function () {
            return y
        };
        j.$Delay = qb;
        function ob(a) {
            a.constructor === ob.caller && a.sc && a.sc()
        }

        j.sc = ob;
        j.U = function (a) {
            if (j.jc(a))a = f.getElementById(a);
            return a
        };
        function u(a) {
            return a || g.event
        }

        u = u;
        j.Ae = function (a) {
            a = u(a);
            return a.target || a.srcElement || f
        };
        j.lc = function (a) {
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
                var k = j.He(d / 180 * b.PI, c, c);
                ub(f, !d && c == 1 ? e : k, j.Ie(k, a.$OriginalWidth, a.$OriginalHeight))
            } else {
                var g = w(f);
                if (g) {
                    var i = "rotate(" + d % 360 + "deg) scale(" + c + ")";
                    if (fb() && y > 535)i += " perspective(2000px)";
                    f.style[g] = i
                }
            }
        }

        j.Ge = function (b, a) {
            if (ab())qb(j.r(e, Y, b, a)); else Y(b, a)
        };
        j.Ee = function (b, c) {
            var a = w(b);
            if (a)b.style[a + "Origin"] = c
        };
        j.Fe = function (a, c) {
            if (t() && v < 9 || v < 10 && N())a.style.zoom = c == 1 ? "" : c; else {
                var b = w(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = G(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        j.se = function (a) {
            if (!a.style[w(a)] || a.style[w(a)] == "none")a.style[w(a)] = "perspective(2000px)"
        };
        j.Db = function (b, a) {
            return function (c) {
                c = u(c);
                var e = c.type, d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !j.qe(a, d)) && b(c)
            }
        };
        j.f = function (a, c, d, b) {
            a = j.U(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        j.xe = function (a, c, d, b) {
            a = j.U(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        j.ye = function (b, a) {
            j.f(A() ? f : g, "mouseup", b, a)
        };
        j.O = function (a) {
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
        j.we = function (a, b) {
            if (b == h)return a.textContent || a.innerText;
            var c = f.createTextNode(b);
            j.tc(a);
            a.appendChild(c)
        };
        j.tc = function (a) {
            a.innerHTML = ""
        };
        j.F = function (c) {
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

        j.t = hb;
        function bb(a, c, d) {
            for (a = a ? a.firstChild : e; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (d) {
                    var b = bb(a, c, d);
                    if (b)return b
                }
            }
        }

        j.ue = bb;
        j.ve = function (b, a) {
            return b.getElementsByTagName(a)
        };
        function V(c) {
            for (var b = 1; b < arguments.length; b++) {
                var a = arguments[b];
                if (a)for (var d in a)c[d] = a[d]
            }
            return c
        }

        j.j = V;
        j.Oe = function (a) {
            return z(a) == "function"
        };
        j.Ub = function (a) {
            return z(a) == "array"
        };
        j.jc = function (a) {
            return z(a) == "string"
        };
        j.Le = function (a) {
            return !isNaN(o(a)) && isFinite(a)
        };
        j.b = k;
        function Q(a) {
            return f.createElement(a)
        }

        j.R = function () {
            return Q("DIV", f)
        };
        j.Je = function () {
            return Q("SPAN", f)
        };
        j.Tb = function () {
        };
        function T(b, c, a) {
            if (a == h)return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function S(a, b) {
            return T(a, b) || T(a, "data-" + b)
        }

        j.B = S;
        function s(b, a) {
            if (a == h)return b.className;
            b.className = a
        }

        j.Ac = s;
        j.Yb = function (a) {
            return a.parentNode
        };
        j.G = function (a) {
            j.Q(a, "none")
        };
        j.s = function (a, b) {
            j.Q(a, b == d ? "none" : "")
        };
        j.Me = function (b, a) {
            b.removeAttribute(a)
        };
        j.Pe = function () {
            return t() && m < 10
        };
        j.Ne = function (d, c) {
            if (c)d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)"; else {
                var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = G(g, f, "");
                a.xb(d, e)
            }
        };
        j.A = function () {
            return +new Date
        };
        j.u = function (b, a) {
            b.appendChild(a)
        };
        j.Ab = function (c, b, a) {
            c.insertBefore(b, a)
        };
        j.jb = function (b, a) {
            b.removeChild(a)
        };
        j.id = function (b, a) {
            k(a, function (a) {
                j.jb(b, a)
            })
        };
        j.hd = function (a) {
            j.id(a, j.F(a))
        };
        j.kd = function (b, a) {
            return parseInt(b, a || 10)
        };
        function o(a) {
            return parseFloat(a)
        }

        j.rc = o;
        j.qe = function (b, a) {
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

        j.nb = U;
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

        j.yb = function (a) {
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

        j.mb = function (d, b) {
            if (jb() && m < 11.6 || !d)O(b, e); else {
                var a = new Image;
                a.onload = j.r(e, O, b, a);
                a.onabort = j.r(e, O, b, a, c);
                a.src = d
            }
        };
        j.sd = function (e, b, f) {
            var d = e.length + 1;

            function c(a) {
                d--;
                if (b && a && a.src == b.src)b = a;
                !d && f && f(b)
            }

            k(e, function (b) {
                a.mb(b.src, c)
            });
            c()
        };
        j.xc = function (d, k, j, i) {
            if (i)d = U(d, c);
            for (var h = a.ve(d, k), f = h.length - 1; f > -1; f--) {
                var b = h[f], e = U(j, c);
                s(e, s(b));
                a.xb(e, b.style.cssText);
                var g = a.Yb(b);
                a.Ab(g, e, b);
                a.jb(g, b)
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
                if (e)j.O(a); else {
                    C.push(g);
                    i = c;
                    f()
                }
            }

            g.ed = function () {
                i = d;
                f()
            };
            g.Cc = function (a) {
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
            b = j.U(b);
            if (!C) {
                j.ye(function () {
                    var a = C;
                    C = [];
                    k(a, function (a) {
                        a.ed()
                    })
                });
                C = []
            }
            m = s(b);
            a.f(b, "mousedown", n)
        }

        j.wb = function (a) {
            return new zb(a)
        };
        j.ub = E;
        j.bb = p("overflow");
        j.m = p("top", 2);
        j.l = p("left", 2);
        j.g = p("width", 2);
        j.i = p("height", 2);
        j.Rc = p("marginLeft", 2);
        j.Jc = p("marginTop", 2);
        j.v = p("position");
        j.Q = p("display");
        j.H = p("zIndex", 1);
        j.Zb = function (b, a, c) {
            if (a != h)wb(b, a, c); else return vb(b)
        };
        j.xb = function (a, b) {
            if (b != h)a.style.cssText = b; else return a.style.cssText
        };
        var R = {$Opacity: j.Zb, $Top: j.m, $Left: j.l, ec: j.g, fc: j.i, ab: j.v, bg: j.Q, $ZIndex: j.H}, x;

        function H() {
            if (!x)x = V({dg: j.Jc, cg: j.Rc, $Clip: j.Ne, Cb: j.Ge}, R);
            return x
        }

        function lb() {
            H();
            x.Cb = x.Cb;
            return x
        }

        j.me = H;
        j.oe = lb;
        j.ne = function (c, b) {
            H();
            var a = {};
            k(b, function (d, b) {
                if (R[b])a[b] = R[b](c)
            });
            return a
        };
        j.P = function (c, b) {
            var a = H();
            k(b, function (d, b) {
                a[b] && a[b](c, d)
            })
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

            a.Bb = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return new i(a[0][0], a[1][0])
            }
        };
        j.He = function (d, a, c) {
            var e = b.cos(d), f = b.sin(d);
            return [[e * a, -f * c], [f * a, e * c]]
        };
        j.Ie = function (d, c, a) {
            var e = n.Bb(d, new i(-c / 2, -a / 2)), f = n.Bb(d, new i(c / 2, -a / 2)), g = n.Bb(d, new i(c / 2, a / 2)), h = n.Bb(d, new i(-c / 2, a / 2));
            return new i(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
        }
    }, m = function () {
        var b = this, d = [];

        function i(a, b) {
            d.push({Sb: a, Ib: b})
        }

        function h(b, c) {
            a.b(d, function (a, e) {
                a.Sb == b && a.Ib === c && d.splice(e, 1)
            })
        }

        b.$On = b.addEventListener = i;
        b.$Off = b.removeEventListener = h;
        b.e = function (b) {
            var c = [].slice.call(arguments, 1);
            a.b(d, function (a) {
                try {
                    a.Sb == b && a.Ib.apply(g, c)
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
                            if (g.Id && a.tb() && m)s = b.round(s / 16 * m) * 16 / m;
                            if (g.$Reverse)s = 1 - s;
                            d = {};
                            for (var o in x) {
                                var R = M[o] || 1, J = L[o] || [0, 1], l = (s - J[0]) / J[1];
                                l = b.min(b.max(l, 0), 1);
                                l = l * R;
                                var H = b.floor(l);
                                if (l != H)l -= H;
                                var Q = C[o] || C.W, I = Q(l), r, K = z[o], F = x[o];
                                if (a.Le(F))r = K + (F - K) * I; else {
                                    r = a.j({T: {}}, z[o]);
                                    a.b(F.T, function (c, b) {
                                        var a = c * I;
                                        r.T[b] = a;
                                        r[b] += a
                                    })
                                }
                                d[o] = r
                            }
                        }
                        if (z.$Zoom)d.Cb = {
                            $Rotate: d.$Rotate || 0,
                            $Scale: d.$Zoom,
                            $OriginalWidth: g.$OriginalWidth,
                            $OriginalHeight: g.$OriginalHeight
                        };
                        if (x.$Clip && g.$Move) {
                            var v = d.$Clip.T, D = (v.$Top || 0) + (v.$Bottom || 0), A = (v.$Left || 0) + (v.$Right || 0);
                            d.$Left = (d.$Left || 0) + A;
                            d.$Top = (d.$Top || 0) + D;
                            d.$Clip.$Left -= A;
                            d.$Clip.$Right -= A;
                            d.$Clip.$Top -= D;
                            d.$Clip.$Bottom -= D
                        }
                        if (d.$Clip && a.Pe() && !d.$Clip.$Top && !d.$Clip.$Left && d.$Clip.$Right == g.$OriginalWidth && d.$Clip.$Bottom == g.$OriginalHeight)d.$Clip = e;
                        a.b(d, function (b, a) {
                            B[a] && B[a](O, b)
                        })
                    }
                    f.Hb(t - k, p - k)
                }
                t = p;
                a.b(u, function (b, c) {
                    var a = w < j ? u[u.length - c - 1] : b;
                    a.C(w, G)
                });
                var P = j, N = w;
                j = n;
                E = c;
                f.ob(P, N)
            }
        }

        function F(a, c) {
            c && a.qb(h, 1);
            h = b.max(h, a.K());
            u.push(a)
        }

        function H() {
            if (r) {
                var d = a.A(), e = b.min(d - A, 80), c = j + e * p;
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
                f.Xc();
                A = a.A();
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
        f.Gc = v;
        f.L = J;
        f.Ld = function (a) {
            v(a)
        };
        f.D = function () {
            return j
        };
        f.Pc = function () {
            return o
        };
        f.gb = function () {
            return t
        };
        f.C = w;
        f.Mb = function () {
            w(i, c)
        };
        f.$Move = function (a) {
            w(j + a)
        };
        f.$IsPlaying = function () {
            return r
        };
        f.Pd = function (a) {
            q = a
        };
        f.qb = N;
        f.$Shift = I;
        f.N = function (a) {
            F(a, 0)
        };
        f.Nb = function (a) {
            F(a, 1)
        };
        f.K = function () {
            return h
        };
        f.ob = f.Xc = f.Kc = f.Hb = a.Tb;
        f.Ob = a.A();
        g = a.j({$Interval: 16}, g);
        q = g.Nc;
        B = a.j({}, a.me(), g.Mc);
        i = k = n;
        h = n + m;
        var M = g.$Round || {}, L = g.$During || {};
        C = a.j({W: a.Oe(g.$Easing) && g.$Easing || l.$EaseSwing}, g.$Easing)
    };
    var r;
    new function () {
        ;
        function n(r, lc) {
            var k = this;

            function Gc() {
                var a = this;
                j.call(a, -1e8, 2e8);
                a.Zd = function () {
                    var c = a.gb(), d = b.floor(c), f = v(d), e = c - b.floor(c);
                    return {M: f, Wd: d, ab: e}
                };
                a.ob = function (d, a) {
                    var e = b.floor(a);
                    if (e != a && a > d)e++;
                    Yb(e, c);
                    k.e(n.$EVT_POSITION_CHANGE, v(a), v(d), a, d)
                }
            }

            function Fc() {
                var b = this;
                j.call(b, 0, 0, {Nc: u});
                a.b(E, function (a) {
                    N & 1 && a.Pd(u);
                    b.Nb(a);
                    a.$Shift(mb / fc)
                })
            }

            function Ec() {
                var a = this, b = Xb.$Elmt;
                j.call(a, -1, 2, {$Easing: l.$EaseLinear, Mc: {ab: dc}, Nc: u}, b, {ab: 1}, {ab: -1});
                a.sb = b
            }

            function tc(q, o) {
                var f = this, i, l, g, m, h;
                j.call(f, -1e8, 2e8);
                f.Xc = function () {
                    U = c;
                    Y = e;
                    k.e(n.$EVT_SWIPE_START, v(z.D()), z.D())
                };
                f.Kc = function () {
                    U = d;
                    m = d;
                    var a = z.Zd();
                    k.e(n.$EVT_SWIPE_END, v(z.D()), z.D());
                    !a.ab && Ic(a.Wd, t)
                };
                f.ob = function (f, e) {
                    var d;
                    if (m)d = h; else {
                        d = l;
                        if (g) {
                            var c = e / g;
                            if (a.tb() || a.Ke()) {
                                b.round(c * 16 / g) / 16 * g;
                                c = parseFloat(c.toFixed(4))
                            }
                            d = p.$SlideEasing(c) * (l - i) + i
                        }
                    }
                    z.C(d)
                };
                f.pb = function (a, c, b, d) {
                    i = a;
                    l = c;
                    g = b;
                    z.C(a);
                    f.C(0);
                    f.Gc(b, d)
                };
                f.wd = function (a) {
                    m = c;
                    h = a;
                    f.$Play(a, e, c)
                };
                f.jd = function (a) {
                    h = a
                };
                z = new Gc;
                z.N(q);
                z.N(o)
            }

            function uc() {
                var c = this, b = cc();
                a.H(b, 0);
                c.$Elmt = b;
                c.rb = function () {
                    a.G(b);
                    a.tc(b)
                }
            }

            function Dc(o, l) {
                var f = this, r, x, H, y, g, z = [], R, q, T, G, P, F, h, s, i;
                j.call(f, -w, w + 1, {});
                function D(a) {
                    x && x.hc();
                    r && r.hc();
                    S(o, a);
                    F = c;
                    r = new J.$Class(o, J, 1);
                    x = new J.$Class(o, J);
                    x.Mb();
                    r.Mb()
                }

                function Z() {
                    r.Ob < J.Ob && D()
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
                                a.g(g, j);
                                a.i(g, i);
                                a.m(g, (L - i) / 2);
                                a.l(g, (M - j) / 2)
                            }
                            a.v(g, "absolute");
                            k.e(n.$EVT_LOAD_END, ic)
                        }
                    }
                    a.G(q);
                    m && m(f)
                }

                function U(b, c, d, e) {
                    if (e == Y && t == l && V)if (!Hc) {
                        var a = v(b);
                        C.je(a, l, c, f, d);
                        c.ee();
                        gb.qb(a, 1);
                        gb.C(a);
                        A.pb(b, b, 0)
                    }
                }

                function ab(b) {
                    if (b == Y && t == l) {
                        if (!h) {
                            var a = e;
                            if (C)if (C.M == l)a = C.Yd(); else C.rb();
                            Z();
                            h = new Bc(l, a, f.le(), f.Cd());
                            h.Qc(i)
                        }
                        !h.$IsPlaying() && h.Pb()
                    }
                }

                function Q(d, c) {
                    if (d == l) {
                        if (d != c)E[c] && E[c].Ud(); else h && h.Sd();
                        i && i.$Enable();
                        var k = Y = a.A();
                        f.mb(a.r(e, ab, k))
                    } else {
                        var j = b.abs(l - d), g = w + p.$LazyLoading;
                        (!P || j <= g || u - j <= g) && f.mb()
                    }
                }

                function bb() {
                    if (t == l && h) {
                        h.L();
                        i && i.$Quit();
                        i && i.$Disable();
                        h.oc()
                    }
                }

                function cb() {
                    t == l && h && h.L()
                }

                function O(b) {
                    if (X)a.O(b); else k.e(n.$EVT_CLICK, l, b)
                }

                function N() {
                    i = s.pInstance;
                    h && h.Qc(i)
                }

                f.mb = function (d, b) {
                    b = b || y;
                    if (z.length && !G) {
                        a.s(b);
                        if (!T) {
                            T = c;
                            k.e(n.$EVT_LOAD_START);
                            a.b(z, function (b) {
                                if (!b.src) {
                                    b.src = a.B(b, "src2");
                                    a.Q(b, b["display-origin"])
                                }
                            })
                        }
                        a.sd(z, g, a.r(e, I, d, b))
                    } else I(d, b)
                };
                f.ge = function () {
                    if (C) {
                        var b = C.Fd(u);
                        if (b) {
                            var f = Y = a.A(), c = l + bc, d = E[v(c)];
                            return d.mb(a.r(e, U, c, d, b, f), y)
                        }
                    }
                    hb(t + p.$AutoPlaySteps * bc)
                };
                f.ac = function () {
                    Q(l, l)
                };
                f.Ud = function () {
                    i && i.$Quit();
                    i && i.$Disable();
                    f.Sc();
                    h && h.ad();
                    h = e;
                    D()
                };
                f.ee = function () {
                    a.G(o)
                };
                f.Sc = function () {
                    a.s(o)
                };
                f.fd = function () {
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
                                b["display-origin"] = a.Q(b);
                                a.G(b)
                            }
                        }
                        a.Eb() && a.H(b, (a.H(b) || 0) + 1);
                        if (p.$HWA && a.pc() > 0)(!K || a.pc() < 534 || !kb) && a.se(b)
                    }
                    var h = a.F(b);
                    a.b(h, function (h) {
                        var j = a.B(h, "u");
                        if (j == "player" && !s) {
                            s = h;
                            if (s.pInstance)N(); else a.f(s, "dataavailable", N)
                        }
                        if (j == "caption") {
                            if (!a.Qb() && !f) {
                                var i = a.nb(h, c);
                                a.Ab(b, i, h);
                                a.jb(b, h);
                                h = i;
                                f = c
                            }
                        } else if (!F && !e && !g && a.B(h, "u") == "image") {
                            g = h;
                            if (g) {
                                if (g.tagName == "A") {
                                    R = g;
                                    a.P(R, W);
                                    q = a.nb(g, d);
                                    a.f(q, "click", O);
                                    a.P(q, W);
                                    a.Q(q, "block");
                                    a.Zb(q, 0);
                                    a.ub(q, "backgroundColor", "#000");
                                    g = a.ue(g, "IMG")
                                }
                                g.border = 0;
                                a.P(g, W)
                            }
                        }
                        S(h, f, e + 1)
                    })
                }

                f.Hb = function (c, b) {
                    var a = w - b;
                    dc(H, a)
                };
                f.le = function () {
                    return r
                };
                f.Cd = function () {
                    return x
                };
                f.M = l;
                m.call(f);
                var B = a.t(o, "thumb");
                if (B) {
                    f.bd = a.nb(B, c);
                    a.Me(B, "id");
                    a.G(B)
                }
                a.s(o);
                y = a.nb(jb, c);
                a.H(y, 1e3);
                a.f(o, "click", O);
                D(c);
                f.wc = g;
                f.zc = q;
                f.sb = H = o;
                a.u(H, y);
                k.$On(203, Q);
                k.$On(28, cb);
                k.$On(24, bb)
            }

            function Bc(h, q, v, u) {
                var b = this, l = 0, x = 0, m, g, e, f, i, r, w, s, o = E[h];
                j.call(b, 0, 0);
                function y() {
                    a.hd(Q);
                    jc && i && o.zc && a.u(Q, o.zc);
                    a.s(Q, i || !o.wc)
                }

                function z() {
                    if (r) {
                        r = d;
                        k.e(n.$EVT_ROLLBACK_END, h, e, l, g, e, f);
                        b.C(g)
                    }
                    b.Pb()
                }

                function A(a) {
                    s = a;
                    b.L();
                    b.Pb()
                }

                b.Pb = function () {
                    var a = b.gb();
                    if (!D && !U && !s && t == h) {
                        if (!a) {
                            if (m && !i) {
                                i = c;
                                b.oc(c);
                                k.e(n.$EVT_SLIDESHOW_START, h, l, x, m, f)
                            }
                            y()
                        }
                        var d, p = n.$EVT_STATE_CHANGE;
                        if (a != f)if (a == e)d = f; else if (a == g)d = e; else if (!a)d = g; else if (a > e) {
                            r = c;
                            d = e;
                            p = n.$EVT_ROLLBACK_START
                        } else d = b.Pc();
                        k.e(p, h, a, l, g, e, f);
                        var j = V && (!R || H);
                        if (a == f)j && o.ge(); else(j || a != e) && b.Gc(d, z)
                    }
                };
                b.Sd = function () {
                    e == f && e == b.gb() && b.C(g)
                };
                b.ad = function () {
                    C && C.M == h && C.rb();
                    var a = b.gb();
                    a < f && k.e(n.$EVT_STATE_CHANGE, h, -a - 1, l, g, e, f)
                };
                b.oc = function (b) {
                    q && a.bb(ob, b && q.db.$Outside ? "" : "hidden")
                };
                b.Hb = function (b, a) {
                    if (i && a >= m) {
                        i = d;
                        y();
                        o.Sc();
                        C.rb();
                        k.e(n.$EVT_SLIDESHOW_END, h, l, x, m, f)
                    }
                    k.e(n.$EVT_PROGRESS_CHANGE, h, a, l, g, e, f)
                };
                b.Qc = function (a) {
                    if (a && !w) {
                        w = a;
                        a.$On($JssorPlayer$.Td, A)
                    }
                };
                q && b.Nb(q);
                m = b.K();
                b.K();
                b.Nb(v);
                g = v.K();
                e = g + p.$AutoPlayInterval;
                u.$Shift(e);
                b.N(u);
                f = b.K()
            }

            function dc(e, g) {
                var f = y > 0 ? y : nb, c = Fb * g * (f & 1), d = Gb * g * (f >> 1 & 1);
                if (a.tb()) {
                    c = c.toFixed(3);
                    d = d.toFixed(3)
                } else {
                    c = b.round(c);
                    d = b.round(d)
                }
                if (a.Qb() && a.fb() >= 10 && a.fb() < 11)e.style.msTransform = "translate(" + c + "px, " + d + "px)"; else if (a.tb() && a.fb() >= 30 && a.fb() < 34) {
                    e.style.WebkitTransition = "transform 0s";
                    e.style.WebkitTransform = "translate3d(" + c + "px, " + d + "px, 0px) perspective(2000px)"
                } else {
                    a.l(e, c);
                    a.m(e, d)
                }
            }

            function zc(c) {
                var b = a.Ae(c).tagName;
                !O && b != "INPUT" && b != "TEXTAREA" && b != "SELECT" && xc() && yc(c)
            }

            function Mb() {
                vb = U;
                Qb = A.Pc();
                F = z.D();
                if (D || !H && R & 12) {
                    A.L();
                    k.e(n.vd)
                }
            }

            function kc(e) {
                if (!D && (H || !(R & 12)) && !A.$IsPlaying()) {
                    var c = z.D(), a = b.ceil(F);
                    if (e && b.abs(G) >= p.$MinDragOffsetToSlide) {
                        a = b.ceil(c);
                        a += lb
                    }
                    if (!(N & 1))a = b.min(u - w, b.max(a, 0));
                    var d = b.abs(a - c);
                    d = 1 - b.pow(1 - d, 5);
                    if (!X && vb)A.Ld(Qb); else if (c == a) {
                        yb.fd();
                        yb.ac()
                    } else A.pb(c, a, d * Zb)
                }
            }

            function yc(b) {
                D = c;
                Eb = d;
                Y = e;
                a.f(f, tb, gc);
                a.A();
                X = 0;
                Mb();
                if (!vb)y = 0;
                if (K) {
                    var h = b.touches[0];
                    zb = h.clientX;
                    Ab = h.clientY
                } else {
                    var g = a.lc(b);
                    zb = g.x;
                    Ab = g.y;
                    a.O(b)
                }
                G = 0;
                ib = 0;
                lb = 0;
                k.e(n.$EVT_DRAG_START, v(F), F, b)
            }

            function gc(e) {
                if (D && (!a.Eb() || e.button)) {
                    var f;
                    if (K) {
                        var m = e.touches;
                        if (m && m.length > 0)f = new i(m[0].clientX, m[0].clientY)
                    } else f = a.lc(e);
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
                                a.O(e);
                                if (!U)A.wd(xb); else A.jd(xb)
                            } else a.Eb() && a.O(e)
                        }
                    }
                } else Jb(e)
            }

            function Jb(e) {
                vc();
                if (D) {
                    D = d;
                    a.A();
                    a.xe(f, tb, gc);
                    X = G;
                    X && a.O(e);
                    A.L();
                    var b = z.D();
                    k.e(n.$EVT_DRAG_END, v(b), b, v(F), F, e);
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
                k.e(n.$EVT_PARK, v(a), b)
            }

            function Yb(b, c) {
                Cb = b;
                a.b(T, function (a) {
                    a.Rb(v(b), b, c)
                })
            }

            function xc() {
                var b = n.Tc || 0, a = S;
                if (K)a & 1 && (a &= 1);
                n.Tc |= a;
                return O = a & ~b
            }

            function vc() {
                if (O) {
                    n.Tc &= ~S;
                    O = 0
                }
            }

            function cc() {
                var b = a.R();
                a.P(b, W);
                a.v(b, "absolute");
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
                    a.Gb(a.zb.$ChanceToShow > H)
                })
            }

            function nc() {
                if (!H) {
                    H = 1;
                    Db();
                    if (!D) {
                        R & 12 && kc();
                        R & 3 && E[t].ac()
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
                W = {ec: M, fc: L, $Top: 0, $Left: 0};
                a.b(ab, function (b) {
                    a.P(b, W);
                    a.v(b, "absolute");
                    a.bb(b, "hidden");
                    a.G(b)
                });
                a.P(jb, W)
            }

            function rb(b, a) {
                hb(b, a, c)
            }

            function hb(g, f, k) {
                if (Vb && (!D || p.$NaviQuitDrag)) {
                    U = c;
                    D = d;
                    A.L();
                    if (f == h)f = Zb;
                    var e = Kb.gb(), a = g;
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
                    A.pb(e, a, i || 1)
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
                    E[t] && E[t].ac()
                }
            };
            k.$SetSlideshowTransitions = function (b) {
                a.yb(b);
                p.$SlideshowOptions.$Transitions = b
            };
            k.$SetCaptionTransitions = function (b) {
                a.yb(b);
                J.$CaptionTransitions = b;
                J.Ob = a.A()
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
                return a.g(x || r)
            }

            function pb() {
                return a.i(x || r)
            }

            k.$OriginalWidth = k.$GetOriginalWidth = eb;
            k.$OriginalHeight = k.$GetOriginalHeight = pb;
            function Nb(c, e) {
                if (c == h)return a.g(r);
                if (!x) {
                    var b = a.R(f);
                    a.xb(b, a.xb(r));
                    a.Ac(b, a.Ac(r));
                    a.v(b, "relative");
                    a.m(b, 0);
                    a.l(b, 0);
                    a.bb(b, "visible");
                    x = a.R(f);
                    a.v(x, "absolute");
                    a.m(x, 0);
                    a.l(x, 0);
                    a.g(x, a.g(r));
                    a.i(x, a.i(r));
                    a.Ee(x, "0 0");
                    a.u(x, b);
                    var i = a.F(r);
                    a.u(r, x);
                    a.ub(r, "backgroundImage", "");
                    var g = {
                        navigator: cb && cb.$Scale == d,
                        arrowleft: P && P.$Scale == d,
                        arrowright: P && P.$Scale == d,
                        thumbnavigator: I && I.$Scale == d,
                        thumbwrapper: I && I.$Scale == d
                    };
                    a.b(i, function (c) {
                        a.u(g[a.B(c, "u")] ? r : b, c)
                    });
                    a.s(b);
                    a.s(x)
                }
                fb = c / (e ? a.i : a.g)(x);
                a.Fe(x, fb);
                a.g(r, e ? fb * eb() : c);
                a.i(r, e ? c : fb * pb());
                a.b(T, function (a) {
                    a.Kb()
                })
            }

            k.$ScaleHeight = k.$GetScaleHeight = function (b) {
                if (b == h)return a.i(r);
                Nb(b, c)
            };
            k.$ScaleWidth = k.$SetScaleWidth = k.$GetScaleWidth = Nb;
            k.Dc = function (a) {
                var d = b.ceil(v(mb / fc)), c = v(a - t + d);
                if (c > w) {
                    if (a - t > u / 2)a -= u; else if (a - t <= -u / 2)a += u
                } else a = t + c - d;
                return a
            };
            m.call(this);
            k.$Elmt = r = a.U(r);
            var p = a.j({
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
            }, lc), nb = p.$PlayOrientation & 3, bc = (p.$PlayOrientation & 4) / -4 || 1, db = p.$SlideshowOptions, J = a.j({
                $Class: s,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, p.$CaptionSliderOptions);
            a.yb(J.$CaptionTransitions);
            var cb = p.$BulletNavigatorOptions, P = p.$ArrowNavigatorOptions, I = p.$ThumbnailNavigatorOptions, Z = p.$UISearchMode, x, B = a.t(r, "slides", e, Z), jb = a.t(r, "loading", e, Z) || a.R(f), Pb = a.t(r, "navigator", e, Z), hc = a.t(r, "arrowleft", e, Z), ec = a.t(r, "arrowright", e, Z), Ob = a.t(r, "thumbnavigator", e, Z), rc = a.g(B), qc = a.i(B), W, ab = [], Ac = a.F(B);
            a.b(Ac, function (b) {
                b.tagName == "DIV" && !a.B(b, "u") && ab.push(b)
            });
            var t = -1, Cb, yb, u = ab.length, M = p.$SlideWidth || rc, L = p.$SlideHeight || qc, ac = p.$SlideSpacing, Fb = M + ac, Gb = L + ac, fc = nb & 1 ? Fb : Gb, w = b.min(p.$DisplayPieces, u), ob, y, O, Eb, K, T = [], Ub, Wb, Tb, jc, Hc, V, R = p.$PauseOnHover, Zb = p.$SlideDuration, wb, kb, mb, Vb = w < u, N = Vb ? p.$Loop : 0, S, X, H = 1, U, D, Y, zb = 0, Ab = 0, G, ib, lb, Kb, z, gb, A, Xb = new uc, fb;
            V = p.$AutoPlay;
            k.zb = lc;
            oc();
            r["jssor-slider"] = c;
            a.H(B, a.H(B) || 0);
            a.v(B, "absolute");
            ob = a.nb(B);
            a.Ab(a.Yb(B), ob, B);
            if (db) {
                jc = db.$ShowLink;
                wb = db.$Class;
                a.yb(db.$Transitions);
                kb = w == 1 && u > 1 && wb && (!a.Qb() || a.fb() >= 8)
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
                    a.ub(Bb, bb ? "msTouchAction" : "touchAction", Hb)
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
            a.u(ob, gb.sb);
            a.bb(B, "hidden");
            Q = cc();
            a.ub(Q, "backgroundColor", "#000");
            a.Zb(Q, 0);
            a.Ab(Bb, Q, Bb.firstChild);
            for (var ub = 0; ub < ab.length; ub++) {
                var Cc = ab[ub], ic = new Dc(Cc, ub);
                E.push(ic)
            }
            a.G(jb);
            Kb = new Fc;
            A = new tc(Kb, gb);
            if (S) {
                a.f(B, Ib, zc);
                a.f(f, Lb, Jb);
                sb && a.f(f, sb, Jb)
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
                a.Vb(u, E, jb);
                a.$On(o.vb, pc)
            });
            Nb(eb());
            a.f(r, "mouseout", a.Db(nc, r));
            a.f(r, "mouseover", a.Db(mc, r));
            Db();
            p.$ArrowKeyNavigation && a.f(f, "keydown", function (a) {
                if (a.keyCode == q.Be)rb(-1); else a.keyCode == q.Ce && rb(1)
            });
            var qb = p.$StartIndex;
            if (!(N & 1))qb = b.max(0, b.min(qb, u - w));
            A.pb(qb, qb, 0)
        }

        n.$EVT_CLICK = 21;
        n.$EVT_DRAG_START = 22;
        n.$EVT_DRAG_END = 23;
        n.$EVT_SWIPE_START = 24;
        n.$EVT_SWIPE_END = 25;
        n.$EVT_LOAD_START = 26;
        n.$EVT_LOAD_END = 27;
        n.vd = 28;
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
        g = a.U(g);
        var t, u, s, r, l = 0, f, n, k, y, z, j, i, q, p, D = [], A = [];

        function x(a) {
            a != -1 && A[a].Cc(a == l)
        }

        function v(a) {
            h.e(o.vb, a * n)
        }

        h.$Elmt = g;
        h.Rb = function (a) {
            if (a != r) {
                var d = l, c = b.floor(a / n);
                l = c;
                r = a;
                x(d);
                x(c)
            }
        };
        h.Gb = function (b) {
            a.s(g, b)
        };
        var B;
        h.Kb = function () {
            if (!B || f.$Scale == d) {
                f.$AutoCenter & 1 && a.l(g, (E - u) / 2);
                f.$AutoCenter & 2 && a.m(g, (C - s) / 2);
                B = c
            }
        };
        var w;
        h.Vb = function (C) {
            if (!w) {
                t = b.ceil(C / n);
                l = 0;
                var o = q + y, r = p + z, m = b.ceil(t / k) - 1;
                u = q + o * (!j ? m : k - 1);
                s = p + r * (j ? m : k - 1);
                a.g(g, u);
                a.i(g, s);
                for (var d = 0; d < t; d++) {
                    var B = a.Je();
                    a.we(B, d + 1);
                    var h = a.xc(i, "NumberTemplate", B, c);
                    a.v(h, "absolute");
                    var x = d % (m + 1);
                    a.l(h, !j ? o * x : d % k * o);
                    a.m(h, j ? r * x : b.floor(d / (m + 1)) * r);
                    a.u(g, h);
                    D[d] = h;
                    f.$ActionMode & 1 && a.f(h, "click", a.r(e, v, d));
                    f.$ActionMode & 2 && a.f(h, "mouseover", a.Db(a.r(e, v, d), h));
                    A[d] = a.wb(h)
                }
                w = c
            }
        };
        h.zb = f = a.j({$SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1}, F);
        i = a.t(g, "prototype");
        q = a.g(i);
        p = a.i(i);
        a.jb(g, i);
        n = f.$Steps || 1;
        k = f.$Lanes || 1;
        y = f.$SpacingX;
        z = f.$SpacingY;
        j = f.$Orientation - 1
    };
    g.$JssorArrowNavigator$ = function (f, g, t, n, l) {
        var b = this;
        m.call(b);
        var h, j, r = a.g(f), p = a.i(f);

        function k(a) {
            b.e(o.vb, a, c)
        }

        b.Rb = function (b, a, c) {
            if (c);
        };
        b.Gb = function (b) {
            a.s(f, b);
            a.s(g, b)
        };
        var s;
        b.Kb = function () {
            if (!s || h.$Scale == d) {
                if (h.$AutoCenter & 1) {
                    a.l(f, (n - r) / 2);
                    a.l(g, (n - r) / 2)
                }
                if (h.$AutoCenter & 2) {
                    a.m(f, (l - p) / 2);
                    a.m(g, (l - p) / 2)
                }
                s = c
            }
        };
        var q;
        b.Vb = function (b) {
            if (!q) {
                a.f(f, "click", a.r(e, k, -j));
                a.f(g, "click", a.r(e, k, j));
                a.wb(f);
                a.wb(g);
                q = c
            }
        };
        b.zb = h = a.j({$Steps: 1}, t);
        j = h.$Steps
    };
    g.$JssorThumbnailNavigator$ = function (i, A) {
        var h = this, x, l, e, u = [], y, w, f, n, p, t, s, k, q, g, j;
        m.call(h);
        i = a.U(i);
        function z(n, d) {
            var g = this, b, m, k;

            function p() {
                m.Cc(l == d)
            }

            function i() {
                if (!q.$LastDragSucceded()) {
                    var a = f - d % f, b = q.Dc((d + a) / f - 1), c = b * f + f - a;
                    h.e(o.vb, c)
                }
            }

            g.M = d;
            g.Hc = p;
            k = n.bd || n.wc || a.R();
            g.sb = b = a.xc(j, "ThumbnailTemplate", k, c);
            m = a.wb(b);
            e.$ActionMode & 1 && a.f(b, "click", i);
            e.$ActionMode & 2 && a.f(b, "mouseover", a.Db(i, b))
        }

        h.Rb = function (c, d, e) {
            var a = l;
            l = c;
            a != -1 && u[a].Hc();
            u[c].Hc();
            !e && q.$PlayTo(q.Dc(b.floor(d / f)))
        };
        h.Gb = function (b) {
            a.s(i, b)
        };
        h.Kb = a.Tb;
        var v;
        h.Vb = function (F, D) {
            if (!v) {
                x = F;
                b.ceil(x / f);
                l = -1;
                k = b.min(k, D.length);
                var h = e.$Orientation & 1, o = t + (t + n) * (f - 1) * (1 - h), m = s + (s + p) * (f - 1) * h, C = o + (o + n) * (k - 1) * h, A = m + (m + p) * (k - 1) * (1 - h);
                a.v(g, "absolute");
                a.bb(g, "hidden");
                e.$AutoCenter & 1 && a.l(g, (y - C) / 2);
                e.$AutoCenter & 2 && a.m(g, (w - A) / 2);
                a.g(g, C);
                a.i(g, A);
                var j = [];
                a.b(D, function (l, e) {
                    var i = new z(l, e), d = i.sb, c = b.floor(e / f), k = e % f;
                    a.l(d, (t + n) * k * (1 - h));
                    a.m(d, (s + p) * k * h);
                    if (!j[c]) {
                        j[c] = a.R();
                        a.u(g, j[c])
                    }
                    a.u(j[c], d);
                    u.push(i)
                });
                var E = a.j({
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
        h.zb = e = a.j({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, A);
        y = a.g(i);
        w = a.i(i);
        g = a.t(i, "slides");
        j = a.t(g, "prototype");
        t = a.g(j);
        s = a.i(j);
        a.jb(g, j);
        f = e.$Lanes || 1;
        n = e.$SpacingX;
        p = e.$SpacingY;
        k = e.$DisplayPieces
    };
    function s() {
        j.call(this, 0, 0);
        this.hc = a.Tb
    }

    g.$JssorCaptionSlider$ = function (q, k, g) {
        var d = this, i, o = g ? k.$PlayInMode : k.$PlayOutMode, f = k.$CaptionTransitions, p = {
            db: "t",
            $Delay: "d",
            $Duration: "du",
            x: "x",
            y: "y",
            $Rotate: "r",
            $Zoom: "z",
            $Opacity: "f",
            X: "b"
        }, e = {
            W: function (b, a) {
                if (!isNaN(a.Z))b = a.Z; else b *= a.ae;
                return b
            }, $Opacity: function (b, a) {
                return this.W(b - 1, a)
            }
        };
        e.$Zoom = e.$Opacity;
        j.call(d, 0, 0);
        function m(r, l) {
            var k = [], i, j = [], c = [];

            function h(c, d) {
                var b = {};
                a.b(p, function (g, h) {
                    var e = a.B(c, g + (d || ""));
                    if (e) {
                        var f = {};
                        if (g == "t")f.Z = e; else if (e.indexOf("%") + 1)f.ae = a.rc(e) / 100; else f.Z = a.rc(e);
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
                    var e = f[a.kd(g)] || f[g];
                    if (a.Ub(e)) {
                        if (g != i) {
                            i = g;
                            c[g] = 0;
                            j[g] = e[b.floor(b.random() * e.length)]
                        } else c[g]++;
                        e = j[g];
                        if (a.Ub(e)) {
                            e = e.length && e[c[g] % e.length];
                            if (a.Ub(e))e = e[b.floor(b.random() * e.length)]
                        }
                    }
                    h = e;
                    if (a.jc(h))h = d(h)
                }
                return h
            }

            var q = a.F(r);
            a.b(q, function (b) {
                var c = [];
                c.$Elmt = b;
                var f = a.B(b, "u") == "caption";
                a.b(g ? [0, 3] : [2], function (k, n) {
                    if (f) {
                        var j, g;
                        if (k != 2 || !a.B(b, "t3")) {
                            g = h(b, k);
                            if (k == 2 && !g.db) {
                                g.$Delay = g.$Delay || {Z: 0};
                                g = a.j(h(b, 0), g)
                            }
                        }
                        if (g && g.db) {
                            j = d(g.db.Z);
                            if (j) {
                                var i = a.j({$Delay: 0}, j);
                                a.b(g, function (c, a) {
                                    var b = (e[a] || e.W).apply(e, [i[a], g[a]]);
                                    if (!isNaN(b))i[a] = b
                                });
                                if (!n)if (g.X)i.X = g.X.Z || 0; else if (o & 2)i.X = 0
                            }
                        }
                        c.push(i)
                    }
                    if (l % 2 && !n)c.F = m(b, l + 1)
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
                Id: c
            }, i = x, s = a.Yb(x), n = a.g(i), m = a.i(i), z = a.g(s), y = a.i(s), f = {}, k = {}, l = d.$ScaleClip || 1;
            if (d.$Opacity)f.$Opacity = 2 - d.$Opacity;
            h.$OriginalWidth = n;
            h.$OriginalHeight = m;
            if (d.$Zoom || d.$Rotate) {
                f.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
                if (a.Eb() || a.ze())f.$Zoom = b.min(f.$Zoom, 2);
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
                }, w = a.j({}, t), e = w.T = {}, v = d.$Clip & 4, q = d.$Clip & 8, u = d.$Clip & 1, r = d.$Clip & 2;
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
                f.$Left = o + a.l(i);
                f.$Top = p + a.m(i)
            }
            var B = d.$Duration;
            k = a.j(k, a.ne(i, f));
            h.Mc = a.oe();
            return new j(d.$Delay, B, h, i, k, f)
        }

        function l(b, c) {
            a.b(c, function (a) {
                var e, g = a.$Elmt, c = a[0], j = a[1];
                if (c) {
                    e = n(g, c);
                    b = e.qb(c.X == h ? b : c.X, 1)
                }
                b = l(b, a.F);
                if (j) {
                    var f = n(g, j, 1);
                    f.qb(b, 1);
                    d.N(f);
                    i.N(f)
                }
                e && d.N(e)
            });
            return b
        }

        d.hc = function () {
            d.C(d.K() * (g || 0));
            i.Mb()
        };
        i = new j(0, 0);
        l(0, o ? m(q, 1) : [])
    }
})(window, document, Math, null, true, false)