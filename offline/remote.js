(function (g) {
    var window = this; 'use strict'; var Pab = function (a, b) { this.u = a >>> 0; this.j = b >>> 0 }, Rab = function (a) {
        if (!a) return Qab || (Qab = new Pab(0, 0));
        if (!/^\d+$/.test(a)) return null; g.Dba(a); return new Pab(g.be, g.ce)
    }, Sab = function (a, b, c) { null != c && ("string" === typeof c && Rab(c), g.Ae(a, b, 1), "number" === typeof c ? (a = a.j, b = c >>> 0, c = Math.floor((c - b) / 4294967296) >>> 0, g.be = b, g.ce = c, g.ye(a, g.be), g.ye(a, g.ce)) : (c = Rab(c), a = a.j, b = c.j, g.ye(a, c.u), g.ye(a, b))) }, Uab = function (a, b, c) {
        b = g.rba(b, c);
        null != b && (g.Ae(a, c, 0), a.j.j.push(b ? 1 : 0))
    }, Wab = function (a) { g.I.call(this, a, -1, Vab) }, Xab = function (a) { g.I.call(this, a) }, Yab = function (a) { g.I.call(this, a) }, Zab = function (a) { g.I.call(this, a) }, $ab = function (a) { g.I.call(this, a) }, Y7 = function (a) {
        g.Lj(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ra()).toString(36));
        return a
    }, Z7 = function (a, b, c) {
        Array.isArray(c) || (c = [String(c)]);
        g.dga(a.u, b, c)
    }, abb = function (a) {
        if (a instanceof g.pm) return a;
        if ("function" == typeof a.ij) return a.ij(!1); if (g.La(a)) {
            var b = 0, c = new g.pm; c.next = function () { for (; ;) { if (b >= a.length) return g.p3; if (b in a) return g.qm(a[b++]); b++ } };
            return c
        } throw Error("Not implemented");
    }, bbb = function (a, b, c) {
        if (g.La(a)) g.qc(a, b, c);
        else for (a = abb(a); ;) { var d = a.next(); if (d.done) break; b.call(c, d.value, void 0, a) }
    }, cbb = function (a, b) {
        var c = [];
        bbb(b, function (d) { try { var e = g.Fo.prototype.u.call(this, d, !0) } catch (f) { if ("Storage: Invalid value was encountered" == f) return; throw f; } void 0 === e ? c.push(d) : g.Lka(e) && c.push(d) }, a);
        return c
    }, dbb = function (a, b) { cbb(a, b).forEach(function (c) { g.Fo.prototype.remove.call(this, c) }, a) }, ebb = function (a) {
        if (a.Z) {
            if (a.Z.locationOverrideToken) return { locationOverrideToken: a.Z.locationOverrideToken };
            if (null != a.Z.latitudeE7 && null != a.Z.longitudeE7) return { latitudeE7: a.Z.latitudeE7, longitudeE7: a.Z.longitudeE7 }
        } return null
    }, fbb = function (a, b) { g.Sb(a, b) || a.push(b) }, gbb = function (a) {
        var b = 0, c;
        for (c in a) b++; return b
    }, hbb = function (a, b) { return g.tf(a, b) }, ibb = function (a) {
        try { return g.C.JSON.parse(a) } catch (b) { } a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try { return eval("(" + a + ")") } catch (b) { } throw Error("Invalid JSON string: " + a);
    }, $7 = function (a) { if (g.C.JSON) try { return g.C.JSON.parse(a) } catch (b) { } return ibb(a) }, jbb = function (a, b, c, d) {
        var e = new g.Dj(null);
        a && g.Ej(e, a); b && g.Fj(e, b); c && g.Gj(e, c); d && (e.J = d); return e
    }, a8 = function (a, b) {
        g.Qx[a] = !0;
        var c = g.Ox(); c && c.publish.apply(c, arguments); g.Qx[a] = !1
    }, b8 = function (a) {
        this.name = this.id = "";
        this.clientName = "UNKNOWN_INTERFACE"; this.app = ""; this.type = "REMOTE_CONTROL"; this.obfuscatedGaiaId = this.avatar = this.username = ""; this.capabilities = new Set; this.experiments = new Set; this.theme = "u"; new g.oo; this.model = this.brand = ""; this.year = 0; this.chipset = this.osVersion = this.os = ""; this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN"; a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
            a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", kbb(this, a.capabilities || ""), lbb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
    }, kbb = function (a, b) {
        a.capabilities.clear();
        g.um(b.split(","), g.Qa(hbb, mbb)).forEach(function (c) { a.capabilities.add(c) })
    }, lbb = function (a, b) {
        a.experiments.clear();
        b.split(",").forEach(function (c) { a.experiments.add(c) })
    }, c8 = function (a) {
        a = a || {};
        this.name = a.name || ""; this.id = a.id || a.screenId || ""; this.token = a.token || a.loungeToken || ""; this.uuid = a.uuid || a.dialId || ""; this.idType = a.screenIdType || "normal"
    }, d8 = function (a, b) { return !!b && (a.id == b || a.uuid == b) }, nbb = function (a) {
        return {
            name: a.name,
            screenId: a.id, loungeToken: a.token, dialId: a.uuid, screenIdType: a.idType
        }
    }, obb = function (a) { return new c8(a) }, pbb = function (a) { return Array.isArray(a) ? g.Ok(a, obb) : [] }, e8 = function (a) { return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null" }, qbb = function (a) { return Array.isArray(a) ? "[" + g.Ok(a, e8).join(",") + "]" : "null" }, rbb = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
            function (a) {
                var b = 16 * Math.random() | 0;
                return ("x" == a ? b : b & 3 | 8).toString(16)
            })
    }, sbb = function (a) {
        return g.Ok(a, function (b) {
            return {
                key: b.id,
                name: b.name
            }
        })
    }, tbb = function (a, b) { return g.Pb(a, function (c) { return c || b ? !c != !b ? !1 : c.id == b.id : !0 }) }, f8 = function (a, b) { return g.Pb(a, function (c) { return d8(c, b) }) }, ubb = function () {
        var a = (0, g.Lz)();
        a && dbb(a, a.j.ij(!0))
    }, g8 = function () {
        var a = g.Oz("yt-remote-connected-devices") || [];
        g.lc(a); return a
    }, vbb = function (a) {
        if (g.Vb(a)) return [];
        var b = a[0].indexOf("#"), c = -1 == b ? a[0] : a[0].substring(0, b); return g.Ok(a, function (d, e) { return 0 == e ? d : d.substring(c.length) })
    }, wbb = function (a) { g.Nz("yt-remote-connected-devices", a, 86400) }, h8 = function () {
        if (xbb) return xbb;
        var a = g.Oz("yt-remote-device-id"); a || (a = rbb(), g.Nz("yt-remote-device-id", a, 31536E3)); for (var b = g8(), c = 1, d = a; g.Sb(b, d);)c++, d = a + "#" + c; return xbb = d
    }, ybb = function () {
        var a = g8(), b = h8();
        g.Qz() && g.nc(a, b); a = vbb(a); if (g.Vb(a)) try { g.Lu("remote_sid") } catch (c) { } else try { g.Ju("remote_sid", a.join(","), -1) } catch (c) { }
    }, zbb = function () { return g.Oz("yt-remote-session-browser-channel") }, Abb = function () { return g.Oz("yt-remote-local-screens") || [] }, Bbb = function () { g.Nz("yt-remote-lounge-token-expiration", !0, 86400) }, Cbb = function (a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = g.Ok(Abb(), function (d) { return d.loungeToken }), c = g.Ok(a, function (d) { return d.loungeToken });
        g.Td(c, function (d) { return !g.Sb(b, d) }) && Bbb();
        g.Nz("yt-remote-local-screens", a, 31536E3)
    }, i8 = function (a) {
        a || (g.Pz("yt-remote-session-screen-id"), g.Pz("yt-remote-session-video-id"));
        ybb(); a = g8(); g.Xb(a, h8()); wbb(a)
    }, Dbb = function () {
        if (!j8) {
            var a = g.Oo();
            a && (j8 = new g.Co(a))
        }
    }, Ebb = function () {
        Dbb();
        return j8 ? !!j8.get("yt-remote-use-staging-server") : !1
    }, Fbb = function () {
        var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
        return a ? parseInt(a[1], 10) : 0
    }, Gbb = function (a) { return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a)) }, Hbb = function () { return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null }, k8 = function (a) { a.length ? Ibb(a.shift(), function () { k8(a) }) : Jbb() }, Kbb = function (a) { return "chrome-extension://" + a + "/cast_sender.js" }, Ibb = function (a, b, c) {
        var d = document.createElement("script");
        d.onerror = b; c && (d.onload = c); g.bj(d, g.lg(a)); (document.head || document.documentElement).appendChild(d)
    }, Lbb = function () {
        var a = Fbb(), b = [];
        if (1 < a) { var c = a - 1; b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js"); b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js") } return b
    }, Jbb = function () {
        var a = Hbb();
        a && a(!1, "No cast extension found")
    }, Nbb = function () {
        if (Mbb) {
            var a = 2, b = Hbb(), c = function () {
                a--;
                0 == a && b && b(!0)
            };
            window.__onGCastApiAvailable = c; Ibb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Jbb, c)
        }
    }, Obb = function () {
        Nbb();
        var a = Lbb(); a.push("//www.gstatic.com/eureka/clank/cast_sender.js"); k8(a)
    }, Qbb = function () {
        Nbb();
        var a = Lbb(); a.push.apply(a, g.t(Pbb.map(Kbb))); a.push("//www.gstatic.com/eureka/clank/cast_sender.js"); k8(a)
    }, Rbb = function () {
        this.j = l8();
        this.j.wp("/client_streamz/youtube/living_room/mdx/channel/opened", { Qh: 3, Ph: "channel_type" })
    }, Sbb = function (a, b) { a.j.Br("/client_streamz/youtube/living_room/mdx/channel/opened", b) }, Tbb = function () {
        this.j = l8();
        this.j.wp("/client_streamz/youtube/living_room/mdx/channel/closed", { Qh: 3, Ph: "channel_type" })
    }, Ubb = function (a, b) { a.j.Br("/client_streamz/youtube/living_room/mdx/channel/closed", b) }, Vbb = function () {
        this.j = l8();
        this.j.wp("/client_streamz/youtube/living_room/mdx/channel/message_received", { Qh: 3, Ph: "channel_type" })
    }, Wbb = function (a, b) { a.j.Br("/client_streamz/youtube/living_room/mdx/channel/message_received", b) }, Xbb = function () {
        this.j = l8();
        this.j.wp("/client_streamz/youtube/living_room/mdx/channel/error", { Qh: 3, Ph: "channel_type" })
    }, Ybb = function (a, b) { a.j.Br("/client_streamz/youtube/living_room/mdx/channel/error", b) }, Zbb = function () {
        this.j = l8();
        this.j.wp("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    }, $bb = function () {
        this.j = l8();
        this.j.wp("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    }, m8 = function (a, b, c) {
        g.J.call(this);
        this.I = null != c ? (0, g.Pa)(a, c) : a; this.yh = b; this.D = (0, g.Pa)(this.ZU, this); this.j = !1; this.u = 0; this.B = this.xc = null; this.C = []
    }, n8 = function (a, b, c) {
        g.J.call(this);
        this.C = null != c ? a.bind(c) : a; this.yh = b; this.B = null; this.j = !1; this.u = 0; this.xc = null
    }, acb = function (a) {
        a.xc = g.Mh(function () {
            a.xc = null;
            a.j && !a.u && (a.j = !1, acb(a))
        }, a.yh);
        var b = a.B; a.B = null; a.C.apply(null, b)
    }, o8 = function () { }, bcb = function () { g.af.call(this, "p") }, ccb = function () { g.af.call(this, "o") }, dcb = function () {
        var a = new g.C.TextEncoder;
        return new g.C.ReadableStream({ start: function (b) { for (var c = g.r(["test\r\n", "test\r\n"]), d = c.next(); !d.done; d = c.next())b.enqueue(a.encode(d.value)); b.close() } })
    }, ecb = function (a) { return (a = /\/\/([^\/]+)\//.exec(a)) ? a[1].endsWith("google.com") : !1 }, gcb = function (a, b) {
        if (!fcb) {
            fcb = !0;
            var c; a: { if (c = g.C.navigator) if (c = c.userAgent) break a; c = "" } (-1 == c.indexOf("Chrome") || -1 != c.indexOf("Edg") ? 0 : 90 <= parseInt(/Chrome\/(\d+)/.exec(c)[1], 10)) && ecb(a) && window && window.document && ecb(window.document.URL) && (c = document.createElement("meta"), c.httpEquiv = "origin-trial", c.content = "A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
                document.head.appendChild(c), (new Request("", { body: new ReadableStream, method: "POST" })).headers.has("Content-Type") || (g.C.fetch(a + "?ot=1", { method: "POST", body: "test\r\n" }).catch(b), g.C.fetch(a + "?ot=2", { method: "POST", body: dcb(), QX: !1 }).catch(b), g.C.fetch(a + "?ot=3", { method: "POST", body: dcb(), QX: !0 }).catch(b)))
        }
    }, icb = function () { return hcb = hcb || new g.Uf }, jcb = function (a) { g.af.call(this, "serverreachability", a) }, p8 = function (a) {
        var b = icb();
        b.dispatchEvent(new jcb(b, a))
    }, kcb = function (a, b) {
        g.af.call(this, "statevent", a);
        this.stat = b
    }, q8 = function (a) {
        var b = icb();
        b.dispatchEvent(new kcb(b, a))
    }, lcb = function (a, b, c, d) {
        g.af.call(this, "timingevent", a);
        this.size = b; this.Pw = d
    }, r8 = function (a, b) {
        if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
        return g.C.setTimeout(function () { a() }, b)
    }, mcb = function () { }, s8 = function (a, b, c, d) {
        this.D = a;
        this.C = b; this.Ac = c; this.zc = d || 1; this.kb = new g.Qj(this); this.Gb = 45E3; a = g.pG ? 125 : void 0; this.ob = new g.Lh(a); this.La = null; this.B = !1; this.S = this.eb = this.J = this.Qa = this.Aa = this.Lb = this.Z = null; this.qa = []; this.j = null; this.ea = 0; this.I = this.ya = null; this.Rb = -1; this.Ia = !1; this.yb = 0; this.Ya = null; this.Pc = this.Wa = this.lc = this.Ba = !1; this.u = new ncb
    }, ncb = function () {
        this.B = null;
        this.j = ""; this.u = !1
    }, pcb = function (a, b, c) {
        a.Qa = 1;
        a.J = Y7(b.clone()); a.S = c; a.Ba = !0; ocb(a, null)
    }, ocb = function (a, b) {
        a.Aa = Date.now();
        t8(a); a.eb = a.J.clone(); Z7(a.eb, "t", a.zc); a.ea = 0; var c = a.D.Qa; a.u = new ncb; a.j = qcb(a.D, c ? b : null, !a.S); 0 < a.yb && (a.Ya = new n8((0, g.Pa)(a.mM, a, a.j), a.yb)); a.kb.Ra(a.j, "readystatechange", a.cV); b = a.La ? g.Gf(a.La) : {}; a.S ? (a.ya || (a.ya = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.eb, a.ya, a.S, b)) : (a.ya = "GET", a.j.send(a.eb, a.ya, null, b)); p8(1)
    }, rcb = function (a) { return a.j ? "GET" == a.ya && 2 != a.Qa && a.D.oe : !1 }, vcb = function (a, b, c) {
        for (var d = !0, e; !a.Ia && a.ea < c.length;)if (e = scb(a, c), e == u8) {
            4 ==
            b && (a.I = 4, q8(14), d = !1);
            break
        } else if (e == tcb) { a.I = 4; q8(15); d = !1; break } else ucb(a, e); rcb(a) && e != u8 && e != tcb && (a.u.j = "", a.ea = 0); 4 != b || 0 != c.length || a.u.u || (a.I = 1, q8(16), d = !1); a.B = a.B && d; d ? 0 < c.length && !a.Pc && (a.Pc = !0, a.D.DJ(a)) : (v8(a), w8(a))
    }, scb = function (a, b) {
        var c = a.ea, d = b.indexOf("\n", c);
        if (-1 == d) return u8; c = Number(b.substring(c, d)); if (isNaN(c)) return tcb; d += 1; if (d + c > b.length) return u8; b = b.slice(d, d + c); a.ea = d + c; return b
    }, t8 = function (a) {
        a.Lb = Date.now() + a.Gb;
        wcb(a, a.Gb)
    }, wcb = function (a, b) {
        if (null != a.Z) throw Error("WatchDog timer not null");
        a.Z = r8((0, g.Pa)(a.aV, a), b)
    }, x8 = function (a) { a.Z && (g.C.clearTimeout(a.Z), a.Z = null) }, w8 = function (a) { a.D.Xf() || a.Ia || xcb(a.D, a) }, v8 = function (a) {
        x8(a);
        g.Ye(a.Ya); a.Ya = null; a.ob.stop(); g.Rj(a.kb); if (a.j) { var b = a.j; a.j = null; b.abort(); b.dispose() }
    }, ucb = function (a, b) {
        try {
            var c = a.D;
            if (0 != c.vg && (c.j == a || ycb(c.u, a))) if (!a.Wa && ycb(c.u, a) && 3 == c.vg) { try { var d = c.pe.j.parse(b) } catch (A) { d = null } if (Array.isArray(d) && 3 == d.length) { var e = d; if (0 == e[0]) a: { if (!c.S) { if (c.j) if (c.j.Aa + 3E3 < a.Aa) y8(c), z8(c); else break a; zcb(c); q8(18) } } else c.Kd = e[1], 0 < c.Kd - c.Wa && 37500 > e[2] && c.ob && 0 == c.qa && !c.ea && (c.ea = r8((0, g.Pa)(c.dV, c), 6E3)); if (1 >= Acb(c.u) && c.Sc) { try { c.Sc() } catch (A) { } c.Sc = void 0 } } else A8(c, 11) } else if ((a.Wa || c.j == a) && y8(c), !g.cb(b)) for (e = c.pe.j.parse(b), b = 0; b < e.length; b++) {
                var f = e[b]; c.Wa = f[0];
                f = f[1]; if (2 == c.vg) if ("c" == f[0]) {
                    c.C = f[1]; c.Pc = f[2]; var h = f[3]; null != h && (c.nM = h); var l = f[5]; null != l && "number" === typeof l && 0 < l && (c.eb = 1.5 * l); d = c; var m = a.j; if (m) { var n = g.Hi(m, "X-Client-Wire-Protocol"); if (n) { var p = d.u; !p.j && (g.eb(n, "spdy") || g.eb(n, "quic") || g.eb(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (Bcb(p, p.u), p.u = null)) } if (d.Ba) { var q = g.Hi(m, "X-HTTP-Session-Id"); q && (d.Qd = q, g.Lj(d.La, d.Ba, q)) } } c.vg = 3; c.D && c.D.tM(); c.Lc && (c.Hd = Date.now() - a.Aa); d = c; var u = a; d.xd = Ccb(d, d.Qa ? d.Pc : null, d.zc); if (u.Wa) {
                        Dcb(d.u,
                            u); var w = u, y = d.eb; y && w.setTimeout(y); w.Z && (x8(w), t8(w)); d.j = u
                    } else Ecb(d); 0 < c.B.length && B8(c)
                } else "stop" != f[0] && "close" != f[0] || A8(c, 7); else 3 == c.vg && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? A8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.sM(f), c.qa = 0)
            } p8(4)
        } catch (A) { }
    }, Fcb = function (a, b) {
        this.j = a;
        this.map = b; this.context = null
    }, Gcb = function (a) {
        this.D = a || 10;
        g.C.PerformanceNavigationTiming ? (a = g.C.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.C.chrome && g.C.chrome.loadTimes && g.C.chrome.loadTimes() && g.C.chrome.loadTimes().wasFetchedViaSpdy); this.C = a ? this.D : 1; this.j = null; 1 < this.C && (this.j = new Set); this.u = null; this.B = []
    }, Hcb = function (a) { return a.u ? !0 : a.j ? a.j.size >= a.C : !1 }, Acb = function (a) { return a.u ? 1 : a.j ? a.j.size : 0 }, ycb = function (a, b) { return a.u ? a.u == b : a.j ? a.j.has(b) : !1 }, Bcb = function (a,
        b) { a.j ? a.j.add(b) : a.u = b }, Dcb = function (a, b) { a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b) }, Icb = function (a) {
            if (null != a.u) return a.B.concat(a.u.qa);
            if (null != a.j && 0 !== a.j.size) { var b = a.B; a = g.r(a.j.values()); for (var c = a.next(); !c.done; c = a.next())b = b.concat(c.value.qa); return b } return g.bc(a.B)
        }, Jcb = function (a, b) {
            var c = new mcb;
            if (g.C.Image) {
                var d = new Image; d.onload = g.Qa(C8, c, d, "TestLoadImage: loaded", !0, b); d.onerror = g.Qa(C8, c, d, "TestLoadImage: error", !1, b); d.onabort = g.Qa(C8, c, d, "TestLoadImage: abort", !1, b); d.ontimeout = g.Qa(C8, c, d, "TestLoadImage: timeout", !1, b); g.C.setTimeout(function () { if (d.ontimeout) d.ontimeout() }, 1E4);
                d.src = a
            } else b(!1)
        }, C8 = function (a, b, c, d, e) { try { b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d) } catch (f) { } }, Kcb = function () { this.j = new o8 }, Lcb = function (a, b, c) {
            var d = c || "";
            try { g.Cj(a, function (e, f) { var h = e; g.Ma(e) && (h = g.di(e)); b.push(d + f + "=" + encodeURIComponent(h)) }) } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        }, D8 = function (a, b, c) { return c && c.m_ ? c.m_[a] || b : b }, Mcb = function (a) {
            this.B = [];
            this.Pc = this.xd = this.La = this.zc = this.j = this.Qd = this.Ba = this.Ia = this.J = this.Lb = this.Z = null; this.Ue = this.Ya = 0; this.Ne = D8("failFast", !1, a); this.ob = this.ea = this.S = this.I = this.D = null; this.Ac = !0; this.Kd = this.Wa = -1; this.lc = this.qa = this.Aa = 0; this.Ce = D8("baseRetryDelayMs", 5E3, a); this.jf = D8("retryDelaySeedMs", 1E4, a); this.Te = D8("forwardChannelMaxRetries", 2, a); this.Id = D8("forwardChannelRequestTimeoutMs", 2E4, a); this.Ld = a && a.w6a || void 0; this.oe = a && a.u6a || !1; this.eb = void 0; this.Qa = a && a.F5 || !1; this.C = ""; this.u = new Gcb(a &&
                a.b5a); this.pe = new Kcb; this.Gb = a && a.q5a || !1; this.yb = a && a.i5a || !1; this.Gb && this.yb && (this.yb = !1); this.kf = a && a.W4a || !1; a && a.s5a && (this.Ac = !1); this.Lc = !this.Gb && this.Ac && a && a.f5a || !1; this.Sc = void 0; this.Hd = 0; this.kb = !1; this.ya = null; this.Af = !a || !1 !== a.h5a; this.Rb = null
        }, z8 = function (a) { a.j && (Ncb(a), a.j.cancel(), a.j = null) }, Ocb = function (a) {
            z8(a);
            a.S && (g.C.clearTimeout(a.S), a.S = null); y8(a); a.u.cancel(); a.I && ("number" === typeof a.I && g.C.clearTimeout(a.I), a.I = null)
        }, B8 = function (a) { Hcb(a.u) || a.I || (a.I = !0, g.Bh(a.pM, a), a.Aa = 0) }, Qcb = function (a, b) {
            if (Acb(a.u) >= a.u.C - (a.I ? 1 : 0)) return !1;
            if (a.I) return a.B = b.qa.concat(a.B), !0; if (1 == a.vg || 2 == a.vg || a.Aa >= (a.Ne ? 0 : a.Te)) return !1; a.I = r8((0, g.Pa)(a.pM, a, b), Pcb(a, a.Aa)); a.Aa++; return !0
        }, Scb = function (a, b) {
            var c;
            b ? c = b.Ac : c = a.Ya++; var d = a.La.clone(); g.Lj(d, "SID", a.C); g.Lj(d, "RID", c); g.Lj(d, "AID", a.Wa); E8(a, d); a.J && a.Z && g.Pj(d, a.J, a.Z); c = new s8(a, a.C, c, a.Aa + 1); null === a.J && (c.La = a.Z); b && (a.B = b.qa.concat(a.B)); b = Rcb(a, c, 1E3); c.setTimeout(Math.round(.5 * a.Id) + Math.round(.5 * a.Id * Math.random())); Bcb(a.u, c); pcb(c, d, b)
        }, E8 = function (a, b) {
            a.Ia && g.lf(a.Ia, function (c, d) { g.Lj(b, d, c) });
            a.D && g.Cj({}, function (c, d) { g.Lj(b, d, c) })
        }, Rcb = function (a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Pa)(a.D.eV, a.D, a) : null; a: for (var e = a.B, f = -1; ;) { var h = ["count=" + c]; -1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f); for (var l = !0, m = 0; m < c; m++) { var n = e[m].j, p = e[m].map; n -= f; if (0 > n) f = Math.max(0, e[m].j - 100), l = !1; else try { Lcb(p, h, "req" + n + "_") } catch (q) { d && d(p) } } if (l) { d = h.join("&"); break a } } a = a.B.splice(0, c); b.qa = a; return d
        }, Ecb = function (a) { a.j || a.S || (a.lc = 1, g.Bh(a.oM, a), a.qa = 0) }, zcb = function (a) {
            if (a.j || a.S || 3 <= a.qa) return !1;
            a.lc++; a.S = r8((0, g.Pa)(a.oM, a), Pcb(a, a.qa)); a.qa++; return !0
        }, Ncb = function (a) { null != a.ya && (g.C.clearTimeout(a.ya), a.ya = null) }, Tcb = function (a) {
            a.j = new s8(a, a.C, "rpc", a.lc);
            null === a.J && (a.j.La = a.Z); a.j.yb = 0; var b = a.xd.clone(); g.Lj(b, "RID", "rpc"); g.Lj(b, "SID", a.C); g.Lj(b, "CI", a.ob ? "0" : "1"); g.Lj(b, "AID", a.Wa); g.Lj(b, "TYPE", "xmlhttp"); E8(a, b); a.J && a.Z && g.Pj(b, a.J, a.Z); a.eb && a.j.setTimeout(a.eb); var c = a.j; a = a.Pc; c.Qa = 1; c.J = Y7(b.clone()); c.S = null; c.Ba = !0; ocb(c, a)
        }, y8 = function (a) { null != a.ea && (g.C.clearTimeout(a.ea), a.ea = null) }, xcb = function (a, b) {
            var c = null;
            if (a.j == b) { y8(a); Ncb(a); a.j = null; var d = 2 } else if (ycb(a.u, b)) c = b.qa, Dcb(a.u, b), d = 1; else return; if (0 != a.vg) if (b.B) if (1 == d) { c = b.S ? b.S.length : 0; b = Date.now() - b.Aa; var e = a.Aa; d = icb(); d.dispatchEvent(new lcb(d, c, b, e)); B8(a) } else Ecb(a); else { var f = b.Rb; e = b.getLastError(); if (3 == e || 0 == e && 0 < f || !(1 == d && Qcb(a, b) || 2 == d && zcb(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) { case 1: A8(a, 5); break; case 4: A8(a, 10); break; case 3: A8(a, 6); break; default: A8(a, 2) } }
        }, Pcb = function (a, b) {
            var c = a.Ce + Math.floor(Math.random() *
                a.jf);
            a.isActive() || (c *= 2); return c * b
        }, A8 = function (a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null); var d = (0, g.Pa)(a.O5, a); c || (c = new g.Dj("//www.google.com/images/cleardot.gif"), g.C.location && "http" == g.C.location.protocol || g.Ej(c, "https"), Y7(c)); Jcb(c.toString(), d)
            } else q8(2); a.vg = 0; a.D && a.D.rM(b); Ucb(a); Ocb(a)
        }, Ucb = function (a) {
            a.vg = 0;
            a.Rb = []; if (a.D) { var b = Icb(a.u); if (0 != b.length || 0 != a.B.length) g.cc(a.Rb, b), g.cc(a.Rb, a.B), a.u.B.length = 0, g.bc(a.B), a.B.length = 0; a.D.qM() }
        }, Vcb = function (a) {
            if (0 == a.vg) return a.Rb;
            var b = []; g.cc(b, Icb(a.u)); g.cc(b, a.B); return b
        }, Ccb = function (a, b, c) {
            var d = g.Mj(c);
            "" != d.j ? (b && g.Fj(d, b + "." + d.j), g.Gj(d, d.B)) : (d = g.C.location, d = jbb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c)); b = a.Ba; c = a.Qd; b && c && g.Lj(d, b, c); g.Lj(d, "VER", a.nM); E8(a, d); return d
        }, qcb = function (a, b, c) {
            if (b && !a.Qa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.oe && !a.Ld ? new g.Ai(new g.yj({ MS: !0 })) : new g.Ai(a.Ld); b.J = a.Qa; return b
        }, Wcb = function () { }, Xcb = function () {
            if (g.Ac && !g.wc(10)) throw Error("Environmental error: no available transport.");
        }, G8 = function (a, b) {
            g.Uf.call(this);
            this.j = new Mcb(b); this.I = a; this.u = b && b.U_ || null; a = b && b.T_ || null; b && b.a5a && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" }); this.j.Z = a; a = b && b.w5a || null; b && b.vQ && (a ? a["X-WebChannel-Content-Type"] = b.vQ : a = { "X-WebChannel-Content-Type": b.vQ }); b && b.rO && (a ? a["X-WebChannel-Client-Profile"] = b.rO : a = { "X-WebChannel-Client-Profile": b.rO }); this.j.Lb = a; (a = b && b.u5a) && !g.cb(a) && (this.j.J = a); this.J = b && b.F5 || !1; this.D = b && b.g6a || !1; (b = b && b.e_) && !g.cb(b) && (this.j.Ba = b, g.sf(this.u, b) && g.Df(this.u,
                b)); this.C = new F8(this)
        }, Ycb = function (a) {
            bcb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__); var b = a.__sm__; b ? this.data = (this.metadataKey = g.pf(b)) ? g.Ef(b, this.metadataKey) : b : this.data = a
        }, Zcb = function (a) {
            ccb.call(this);
            this.status = 1; this.errorCode = a
        }, F8 = function (a) { this.j = a }, $cb = function (a, b) {
            this.u = a;
            this.j = b
        }, adb = function (a) {
            return Vcb(a.j).map(function (b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.D ? ibb(b) : b); return b
            })
        }, H8 = function (a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function () { a() }, b)
        }, J8 = function (a) { I8.dispatchEvent(new bdb(I8, a)) }, bdb = function (a, b) {
            g.af.call(this, "statevent", a);
            this.stat = b
        }, K8 = function (a, b, c, d) {
            this.j = a;
            this.C = b; this.J = c; this.I = d || 1; this.u = 45E3; this.B = new g.Qj(this); this.D = new g.Lh; this.D.setInterval(250)
        }, ddb = function (a, b, c) {
            a.Bu = 1;
            a.hp = Y7(b.clone()); a.yr = c; a.Ba = !0; cdb(a, null)
        }, edb = function (a, b, c, d, e) {
            a.Bu = 1;
            a.hp = Y7(b.clone()); a.yr = null; a.Ba = c; e && (a.vS = !1); cdb(a, d)
        }, cdb = function (a, b) {
            a.Au = Date.now();
            L8(a); a.jp = a.hp.clone(); Z7(a.jp, "t", a.I); a.kB = 0; a.Ih = a.j.AF(a.j.Hx() ? b : null); 0 < a.yF && (a.iB = new n8((0, g.Pa)(a.uM, a, a.Ih), a.yF)); a.B.Ra(a.Ih, "readystatechange", a.gV); b = a.xr ? g.Gf(a.xr) : {}; a.yr ? (a.jB = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Ih.send(a.jp, a.jB, a.yr, b)) : (a.jB = "GET", a.vS && !g.gf && (b.Connection = "close"), a.Ih.send(a.jp, a.jB, null, b)); a.j.Al(1)
        }, hdb = function (a, b) {
            var c = a.kB, d = b.indexOf("\n", c);
            if (-1 == d) return fdb; c = Number(b.substring(c, d)); if (isNaN(c)) return gdb; d += 1; if (d + c > b.length) return fdb; b = b.slice(d, d + c); a.kB = d + c; return b
        }, jdb = function (a, b) {
            a.Au = Date.now();
            L8(a); var c = b ? window.location.hostname : ""; a.jp = a.hp.clone(); g.Lj(a.jp, "DOMAIN", c); g.Lj(a.jp, "t", a.I); try { a.Kl = new ActiveXObject("htmlfile") } catch (m) { M8(a); a.ip = 7; J8(22); N8(a); return } var d = "<html><body>"; if (b) {
                var e = ""; for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b); if ("<" == f) f = e + "\\x3c"; else if (">" == f) f = e + "\\x3e"; else {
                        if (f in O8) f = O8[f]; else if (f in idb) f = O8[f] = idb[f]; else {
                            var h = f.charCodeAt(0); if (31 < h && 127 > h) var l = f; else { if (256 > h) { if (l = "\\x", 16 > h || 256 < h) l += "0" } else l = "\\u", 4096 > h && (l += "0"); l += h.toString(16).toUpperCase() } f =
                                O8[f] = l
                        } f = e + f
                    } e = f
                } d += '<script>document.domain="' + e + '"\x3c/script>'
            } d += "</body></html>"; c = g.Ag(g.ig("b/12014412"), d); a.Kl.open(); a.Kl.write(g.yg(c)); a.Kl.close(); a.Kl.parentWindow.m = (0, g.Pa)(a.F3, a); a.Kl.parentWindow.d = (0, g.Pa)(a.AR, a, !0); a.Kl.parentWindow.rpcClose = (0, g.Pa)(a.AR, a, !1); c = a.Kl.createElement("DIV"); a.Kl.parentWindow.document.body.appendChild(c); d = g.pg(a.jp.toString()); d = g.Tg(g.og(d)); d = g.Ag(g.ig("b/12014412"), '<iframe src="' + d + '"></iframe>'); g.sda(c, d); a.j.Al(1)
        }, L8 = function (a) {
            a.zF =
            Date.now() + a.u;
            kdb(a, a.u)
        }, kdb = function (a, b) {
            if (null != a.Cu) throw Error("WatchDog timer not null");
            a.Cu = H8((0, g.Pa)(a.fV, a), b)
        }, ldb = function (a) { a.Cu && (g.C.clearTimeout(a.Cu), a.Cu = null) }, N8 = function (a) { a.j.Xf() || a.wr || a.j.lB(a) }, M8 = function (a) {
            ldb(a);
            g.Ye(a.iB); a.iB = null; a.D.stop(); g.Rj(a.B); if (a.Ih) { var b = a.Ih; a.Ih = null; b.abort(); b.dispose() } a.Kl && (a.Kl = null)
        }, mdb = function (a, b) { try { a.j.vM(a, b), a.j.Al(4) } catch (c) { } }, odb = function (a, b, c, d, e) {
            if (0 == d) c(!1);
            else { var f = e || 0; d--; ndb(a, b, function (h) { h ? c(!0) : g.C.setTimeout(function () { odb(a, b, c, d, f) }, f) }) }
        }, ndb = function (a, b, c) {
            var d = new Image;
            d.onload = function () { try { P8(d), c(!0) } catch (e) { } };
            d.onerror = function () { try { P8(d), c(!1) } catch (e) { } };
            d.onabort = function () { try { P8(d), c(!1) } catch (e) { } };
            d.ontimeout = function () { try { P8(d), c(!1) } catch (e) { } };
            g.C.setTimeout(function () { if (d.ontimeout) d.ontimeout() }, b);
            d.src = a
        }, P8 = function (a) {
            a.onload = null;
            a.onerror = null; a.onabort = null; a.ontimeout = null
        }, pdb = function (a) {
            this.j = a;
            this.u = new o8
        }, qdb = function (a) {
            var b = Q8(a.j, a.by, "/mail/images/cleardot.gif");
            Y7(b); odb(b.toString(), 5E3, (0, g.Pa)(a.iY, a), 3, 2E3); a.Al(1)
        }, rdb = function (a) {
            var b = a.j.Z;
            if (null != b) J8(5), b ? (J8(11), R8(a.j, a, !1)) : (J8(12), R8(a.j, a, !0)); else if (a.xi = new K8(a), a.xi.xr = a.BF, b = a.j, b = Q8(b, b.Hx() ? a.Gx : null, a.CF), J8(5), !g.Ac || g.wc(10)) Z7(b, "TYPE", "xmlhttp"), edb(a.xi, b, !1, a.Gx, !1); else { Z7(b, "TYPE", "html"); var c = a.xi; a = !!a.Gx; c.Bu = 3; c.hp = Y7(b.clone()); jdb(c, a) }
        }, sdb = function (a, b, c) {
            this.j = 1;
            this.u = []; this.B = []; this.D = new o8; this.S = a || null; this.Z = null != b ? b : null; this.J = c || !1
        }, tdb = function (a, b) {
            this.j = a;
            this.map = b; this.context = null
        }, udb = function (a, b, c, d) {
            g.af.call(this, "timingevent", a);
            this.size = b; this.Pw = d
        }, vdb = function (a) { g.af.call(this, "serverreachability", a) }, xdb = function (a) {
            a.hV(1, 0);
            a.mB = Q8(a, null, a.DF); wdb(a)
        }, ydb = function (a) {
            a.Dp && (a.Dp.abort(), a.Dp = null);
            a.Jf && (a.Jf.cancel(), a.Jf = null); a.Nn && (g.C.clearTimeout(a.Nn), a.Nn = null); S8(a); a.Ei && (a.Ei.cancel(), a.Ei = null); a.kp && (g.C.clearTimeout(a.kp), a.kp = null)
        }, zdb = function (a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new tdb(a.iV++, b)); 2 != a.j && 3 != a.j || wdb(a)
        }, Adb = function (a) {
            var b = 0;
            a.Jf && b++; a.Ei && b++; return b
        }, wdb = function (a) { a.Ei || a.kp || (a.kp = H8((0, g.Pa)(a.zM, a), 0), a.Eu = 0) }, Ddb = function (a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.Jx = Math.floor(1E5 * Math.random());
                    b = a.Jx++; var c = new K8(a, "", b); c.xr = a.Ol; var d = Bdb(a), e = a.mB.clone(); g.Lj(e, "RID", b); g.Lj(e, "CVER", "1"); T8(a, e); ddb(c, e, d); a.Ei = c; a.j = 2
                }
            } else 3 == a.j && (b ? Cdb(a, b) : 0 == a.u.length || a.Ei || Cdb(a))
        }, Cdb = function (a, b) {
            if (b) if (6 < a.zr) {
                a.u = a.B.concat(a.u);
                a.B.length = 0; var c = a.Jx - 1; b = Bdb(a)
            } else c = b.J, b = b.yr; else c = a.Jx++, b = Bdb(a); var d = a.mB.clone(); g.Lj(d, "SID", a.C); g.Lj(d, "RID", c); g.Lj(d, "AID", a.Fu); T8(a, d); c = new K8(a, a.C, c, a.Eu + 1); c.xr = a.Ol; c.setTimeout(1E4 + Math.round(1E4 * Math.random())); a.Ei = c; ddb(c, d, b)
        }, T8 = function (a, b) { a.ph && (a = a.ph.DM()) && g.lf(a, function (c, d) { g.Lj(b, d, c) }) }, Bdb = function (a) {
            var b = Math.min(a.u.length, 1E3), c = ["count=" + b];
            if (6 < a.zr && 0 < b) { var d = a.u[0].j; c.push("ofs=" + d) } else d = 0; for (var e = {}, f = 0; f < b; e = { ou: e.ou }, f++) { e.ou = a.u[f].j; var h = a.u[f].map; e.ou = 6 >= a.zr ? f : e.ou - d; try { g.lf(h, function (l) { return function (m, n) { c.push("req" + l.ou + "_" + n + "=" + encodeURIComponent(m)) } }(e)) } catch (l) { c.push("req" + e.ou + "_type=" + encodeURIComponent("_badmap")) } } a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        }, Edb = function (a) { a.Jf || a.Nn || (a.I = 1, a.Nn = H8((0, g.Pa)(a.yM, a), 0), a.Du = 0) }, Gdb = function (a) {
            if (a.Jf || a.Nn || 3 <= a.Du) return !1;
            a.I++; a.Nn = H8((0, g.Pa)(a.yM, a), Fdb(a, a.Du)); a.Du++; return !0
        }, R8 = function (a, b, c) {
            a.TE = c;
            a.Pl = b.Mn; a.J || xdb(a)
        }, S8 = function (a) { null != a.Ar && (g.C.clearTimeout(a.Ar), a.Ar = null) }, Fdb = function (a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2); return c * b
        }, U8 = function (a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.ph && (c = null); var d = (0, g.Pa)(a.N5, a); c || (c = new g.Dj("//www.google.com/images/cleardot.gif"), Y7(c)); ndb(c.toString(), 1E4, d)
            } else J8(2); Hdb(a, b)
        }, Hdb = function (a, b) {
            a.j = 0;
            a.ph && a.ph.AM(b); Idb(a); ydb(a)
        }, Idb = function (a) {
            a.j = 0;
            a.Pl = -1; if (a.ph) if (0 == a.B.length && 0 == a.u.length) a.ph.EF(); else { var b = g.bc(a.B), c = g.bc(a.u); a.B.length = 0; a.u.length = 0; a.ph.EF(b, c) }
        }, Q8 = function (a, b, c) {
            var d = g.Mj(c);
            if ("" != d.j) b && g.Fj(d, b + "." + d.j), g.Gj(d, d.B); else { var e = window.location; d = jbb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c) } a.Ix && g.lf(a.Ix, function (f, h) { g.Lj(d, h, f) });
            g.Lj(d, "VER", a.zr); T8(a, d); return d
        }, Jdb = function () { }, Kdb = function () {
            this.j = [];
            this.u = []
        }, Ldb = function (a) {
            g.af.call(this, "channelMessage");
            this.message = a
        }, Mdb = function (a) {
            g.af.call(this, "channelError");
            this.error = a
        }, Ndb = function (a, b) {
            this.action = a;
            this.params = b || {}
        }, V8 = function (a, b) {
            g.J.call(this);
            this.j = new g.Xn(this.x3, 0, this); g.M(this, this.j); this.yh = 5E3; this.u = 0; if ("function" === typeof a) b && (a = (0, g.Pa)(a, b)); else if (a && "function" === typeof a.handleEvent) a = (0, g.Pa)(a.handleEvent, a); else throw Error("Invalid listener argument"); this.B = a
        }, Odb = function () { }, l8 = function () {
            if (!W8) {
                W8 = new g.Oh(new Odb);
                var a = g.au("client_streamz_web_flush_count", -1); -1 !== a && (W8.C = a)
            } return W8
        }, Pdb = function (a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function () { return "" } : d;
            e = void 0 === e ? !1 : e; this.Aa = a; this.J = b; this.B = new g.Bo; this.u = new V8(this.M4, this); this.j = null; this.ea = !1; this.I = null; this.Z = ""; this.S = this.D = 0; this.C = []; this.Qa = c; this.qa = d; this.Wa = e; this.La = new Rbb; this.ya = new Tbb; this.Ia = new Vbb; this.Ba = new Xbb; this.Ya = new Zbb; this.eb = new $bb
        }, Qdb = function (a) {
            if (a.j) {
                var b = a.qa(), c = a.j.Ol || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"]; a.j.Ol = c
            }
        }, X8 = function (a) {
            this.port = this.domain = "";
            this.j = "/api/lounge"; this.u = !0; a = a || document.location.href; var b = Number(g.oi(4, a)) || ""; b && (this.port = ":" + b); this.domain = g.pi(a) || ""; a = g.nb(); 0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.lb(a, "10.0") && (this.u = !1))
        }, Y8 = function (a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j); return g.wi(c + b, {})
        }, Rdb = function (a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST", context: a, timeout: 5E3, withCredentials: !1, onSuccess: g.Qa(a.C, d, !0), onError: g.Qa(a.B, e), onTimeout: g.Qa(a.D, e)
            }; c && (a.postParams = c, a.headers = { "Content-Type": "application/x-www-form-urlencoded" }); return g.Au(b, a)
        }, Sdb = function (a, b) {
            g.Uf.call(this);
            var c = this; this.Xc = a(); this.Xc.subscribe("handlerOpened", this.mV, this); this.Xc.subscribe("handlerClosed", this.kV, this); this.Xc.subscribe("handlerError", function (d, e) { c.onError(e) });
            this.Xc.subscribe("handlerMessage", this.lV, this); this.j = b
        }, Tdb = function (a, b, c) {
            var d = this;
            c = void 0 === c ? function () { return "" } : c;
            var e = void 0 === e ? new Xcb : e; var f = void 0 === f ? new g.Bo : f; this.pathPrefix = a; this.j = b; this.Aa = c; this.D = f; this.S = null; this.Z = this.J = 0; this.channel = null; this.I = 0; this.B = new V8(function () { d.B.isActive(); var h; 0 === (null == (h = d.channel) ? void 0 : Acb((new $cb(h, h.j)).j.u)) && d.connect(d.S, d.J) });
            this.C = {}; this.u = {}; this.ea = !1; this.logger = null; this.qa = []; this.Jg = void 0; this.La = new Rbb; this.ya = new Tbb; this.Ia = new Vbb; this.Ba = new Xbb
        }, Udb = function (a) {
            g.Nf(a.channel, "m", function () {
                a.I = 3;
                a.B.reset(); a.S = null; a.J = 0; for (var b = g.r(a.qa), c = b.next(); !c.done; c = b.next())c = c.value, a.channel && a.channel.send(c); a.qa = []; a.ma("webChannelOpened"); Sbb(a.La, "WEB_CHANNEL")
            });
            g.Nf(a.channel, "n", function () { a.I = 0; a.B.isActive() || a.ma("webChannelClosed"); var b, c = null == (b = a.channel) ? void 0 : adb(new $cb(b, b.j)); c && (a.qa = [].concat(g.t(c))); Ubb(a.ya, "WEB_CHANNEL") });
            g.Nf(a.channel, "p", function (b) { var c = b.data; "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.ma("webChannelMessage", new Ndb(c[0], c[1])); a.Jg = b.statusCode; Wbb(a.Ia, "WEB_CHANNEL") });
            g.Nf(a.channel, "o", function () { 401 === a.Jg || a.B.start(); a.ma("webChannelError"); Ybb(a.Ba, "WEB_CHANNEL") })
        }, Vdb = function (a) {
            var b = a.Aa();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        }, Wdb = function (a) {
            g.Uf.call(this);
            this.j = a(); this.j.subscribe("webChannelOpened", this.pV, this); this.j.subscribe("webChannelClosed", this.nV, this); this.j.subscribe("webChannelError", this.onError, this); this.j.subscribe("webChannelMessage", this.oV, this)
        }, Xdb = function (a, b, c, d, e) {
            function f() { return new Pdb(Y8(a, "/bc"), b, !1, c, d) }
            c = void 0 === c ? function () { return "" } : c;
            return g.S("enable_mdx_web_channel_desktop") ? new Wdb(function () { return new Tdb(Y8(a, "/wc"), b, c) }) : new Sdb(f, e)
        }, aeb = function () {
            var a = Ydb;
            Zdb(); Z8.push(a); $db()
        }, $8 = function (a, b) {
            Zdb();
            var c = beb(a, String(b)); g.Vb(Z8) ? ceb(c) : ($db(), g.qc(Z8, function (d) { d(c) }))
        }, a9 = function (a) { $8("CP", a) }, Zdb = function () { Z8 || (Z8 = g.Ga("yt.mdx.remote.debug.handlers_") || [], g.Fa("yt.mdx.remote.debug.handlers_", Z8)) }, ceb = function (a) {
            var b = (b9 + 1) % 50;
            b9 = b; c9[b] = a; d9 || (d9 = 49 == b)
        }, $db = function () {
            var a = Z8;
            if (c9[0]) {
                var b = d9 ? b9 : -1; do { b = (b + 1) % 50; var c = c9[b]; g.qc(a, function (d) { d(c) }) } while (b != b9);
                c9 = Array(50); b9 = -1; d9 = !1
            }
        }, beb = function (a, b) {
            var c = (Date.now() - deb) / 1E3;
            c.toFixed && (c = c.toFixed(3)); var d = []; d.push("[", c + "s", "] "); d.push("[", "yt.mdx.remote", "] "); d.push(a + ": " + b, "\n"); return d.join("")
        }, e9 = function (a) {
            g.az.call(this);
            this.I = a; this.screens = []
        }, eeb = function (a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a; a.screens.push(b); return !0
        }, feb = function (a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.um(a.screens, function (f) { return !!tbb(b, f) });
            for (var d = 0, e = b.length; d < e; d++)c = eeb(a, b[d]) || c; return c
        }, geb = function (a, b) {
            var c = a.screens.length;
            a.screens = g.um(a.screens, function (d) { return !(d || b ? !d != !b ? 0 : d.id == b.id : 1) });
            return a.screens.length < c
        }, heb = function (a, b, c, d, e) {
            g.az.call(this);
            this.B = a; this.J = b; this.C = c; this.I = d; this.D = e; this.u = 0; this.j = null; this.xc = NaN
        }, g9 = function (a) {
            e9.call(this, "LocalScreenService");
            this.u = a; this.j = NaN; f9(this); this.info("Initializing with " + qbb(this.screens))
        }, ieb = function (a) {
            if (a.screens.length) {
                var b = g.Ok(a.screens, function (d) { return d.id }), c = Y8(a.u, "/pairing/get_lounge_token_batch");
                Rdb(a.u, c, { screen_ids: b.join(",") }, (0, g.Pa)(a.FZ, a), (0, g.Pa)(a.EZ, a))
            }
        }, f9 = function (a) {
            if (g.S("deprecate_pair_servlet_enabled")) return feb(a, []);
            var b = pbb(Abb()); b = g.um(b, function (c) { return !c.uuid });
            return feb(a, b)
        }, h9 = function (a, b) {
            Cbb(g.Ok(a.screens, nbb));
            b && Bbb()
        }, keb = function (a, b) {
            g.az.call(this);
            this.I = b; b = (b = g.Oz("yt-remote-online-screen-ids") || "") ? b.split(",") : []; for (var c = {}, d = this.I(), e = 0, f = d.length; e < f; ++e) { var h = d[e].id; c[h] = g.Sb(b, h) } this.j = c; this.D = a; this.B = this.C = NaN; this.u = null; jeb("Initialized with " + g.di(this.j))
        }, leb = function (a, b, c) {
            var d = Y8(a.D, "/pairing/get_screen_availability");
            Rdb(a.D, d, { lounge_token: b.token }, (0, g.Pa)(function (e) { e = e.screens || []; for (var f = 0, h = e.length; f < h; ++f)if (e[f].loungeToken == b.token) { c("online" == e[f].status); return } c(!1) }, a), (0, g.Pa)(function () { c(!1) }, a))
        }, neb = function (a, b) {
            a: if (gbb(b) != gbb(a.j)) var c = !1;
            else { c = g.rf(b); for (var d = 0, e = c.length; d < e; ++d)if (!a.j[c[d]]) { c = !1; break a } c = !0 } c || (jeb("Updated online screens: " + g.di(a.j)), a.j = b, a.ma("screenChange")); meb(a)
        }, i9 = function (a) {
            isNaN(a.B) || g.xu(a.B);
            a.B = g.vu((0, g.Pa)(a.vK, a), 0 < a.C && a.C < g.Ra() ? 2E4 : 1E4)
        }, jeb = function (a) { $8("OnlineScreenService", a) }, oeb = function (a) {
            var b = {};
            g.qc(a.I(), function (c) { c.token ? b[c.token] = c.id : this.hf("Requesting availability of screen w/o lounge token.") });
            return b
        }, meb = function (a) {
            a = g.rf(g.mf(a.j, function (b) { return b }));
            g.lc(a); a.length ? g.Nz("yt-remote-online-screen-ids", a.join(","), 60) : g.Pz("yt-remote-online-screen-ids")
        }, j9 = function (a, b) {
            b = void 0 === b ? !1 : b;
            e9.call(this, "ScreenService"); this.C = a; this.J = b; this.j = this.u = null; this.B = []; this.D = {}; peb(this)
        }, reb = function (a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]); var h = a.qj(), l = c ? f8(h, c) : null; c && (a.J || l) || (l = f8(h, b)); if (l) { l.uuid = b; var m = k9(a, l); leb(a.j, m, function (n) { e(n ? m : null) }) } else c ? qeb(a, c, (0, g.Pa)(function (n) {
                var p = k9(this, new c8({
                    name: d,
                    screenId: c, loungeToken: n, dialId: b || ""
                })); leb(this.j, p, function (q) { e(q ? p : null) })
            }, a), f) : e(null)
        }, seb = function (a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)if (a.screens[c].name == b) return a.screens[c];
            return null
        }, teb = function (a, b, c) { leb(a.j, b, c) }, qeb = function (a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: { screen_ids: b }, method: "POST", context: a, onSuccess: function (f, h) { f = h && h.screens || []; f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response")) },
                onError: function () { d(Error("Request screen lounge token failed")) }
            };
            g.Au(Y8(a.C, "/pairing/get_lounge_token_batch"), e)
        }, ueb = function (a) {
            a.screens = a.u.qj();
            var b = a.D, c = {}, d; for (d in b) c[b[d]] = d; b = 0; for (d = a.screens.length; b < d; ++b) { var e = a.screens[b]; e.uuid = c[e.id] || "" } a.info("Updated manual screens: " + qbb(a.screens))
        }, peb = function (a) {
            veb(a);
            a.u = new g9(a.C); a.u.subscribe("screenChange", (0, g.Pa)(a.OZ, a)); ueb(a); a.J || (a.B = pbb(g.Oz("yt-remote-automatic-screen-cache") || [])); veb(a); a.info("Initializing automatic screens: " + qbb(a.B)); a.j = new keb(a.C, (0, g.Pa)(a.qj, a, !0)); a.j.subscribe("screenChange", (0, g.Pa)(function () { this.ma("onlineScreenChange") }, a))
        }, k9 = function (a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = f8(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.J || web(a)); veb(a); a.D[b.uuid] = b.id; g.Nz("yt-remote-device-id-map", a.D, 31536E3); return b
        }, web = function (a) {
            a = g.um(a.B, function (b) { return "shortLived" != b.idType });
            g.Nz("yt-remote-automatic-screen-cache", g.Ok(a, nbb))
        }, veb = function (a) { a.D = g.Oz("yt-remote-device-id-map") || {} }, l9 = function (a, b, c) {
            g.az.call(this);
            this.Ba = c; this.B = a; this.j = b; this.C = null
        }, m9 = function (a, b) {
            a.C = b;
            a.ma("sessionScreen", a.C)
        }, xeb = function (a, b) {
            a.C && (a.C.token = b, k9(a.B, a.C));
            a.ma("sessionScreen", a.C)
        }, n9 = function (a, b) { $8(a.Ba, b) }, o9 = function (a, b, c) {
            l9.call(this, a, b, "CastSession");
            var d = this; this.config_ = c; this.u = null; this.qa = (0, g.Pa)(this.uV, this); this.ya = (0, g.Pa)(this.P3, this); this.ea = g.vu(function () { yeb(d, null) }, 12E4);
            this.J = this.D = this.I = this.S = 0; this.Aa = !1; this.Z = "unknown"
        }, Aeb = function (a, b) {
            g.xu(a.J);
            a.J = 0; 0 == b ? zeb(a) : a.J = g.vu(function () { zeb(a) }, b)
        }, zeb = function (a) {
            Beb(a, "getLoungeToken");
            g.xu(a.D); a.D = g.vu(function () { Ceb(a, null) }, 3E4)
        }, Beb = function (a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.di());
            var c = {}; c.type = b; a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function () { }, (0, g.Pa)(function () { n9(this, "Failed to send message: " + b + ".") }, a)) : n9(a, "Sending yt message without session: " + g.di(c))
        }, Deb = function (a, b) { b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.kP(b, function (c) { m9(a, c) }, function () { return a.Wh() }, 5)) : a.Wh(Error("Waiting for session status timed out.")) }, Feb = function (a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " +
                JSON.stringify(b));
            var d = new c8(b); Eeb(a, d, function (e) { e ? (a.Aa = !0, k9(a.B, d), m9(a, d), a.Z = "unknown", Aeb(a, c)) : (g.eu(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Wh()) }, 5)
        }, yeb = function (a, b) {
            g.xu(a.ea);
            a.ea = 0; b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? Feb(a, { name: a.j.friendlyName, screenId: b.screenId, loungeToken: b.loungeToken, dialId: b.deviceId, screenIdType: "shortLived" }, b.loungeTokenRefreshIntervalMs) : (g.eu(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Deb(a, b.screenId))) : (g.eu(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), Deb(a, b.screenId)) : Deb(a, b.screenId) : a.Wh(Error("Waiting for session status timed out."))
        }, Ceb = function (a, b) {
            g.xu(a.D);
            a.D = 0; var c = null; if (b) if (b.loungeToken) { var d; (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken") } else c = "missingLoungeToken"; else c = "noLoungeTokenResponse"; c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Z = c, Aeb(a, 3E4)) : (xeb(a, b.loungeToken), a.Aa = !1, a.Z = "unknown", Aeb(a, b.loungeTokenRefreshIntervalMs))
        }, Eeb = function (a, b, c, d) {
            g.xu(a.I);
            a.I = 0; teb(a.B, b, function (e) { e || 0 > d ? c(e) : a.I = g.vu(function () { Eeb(a, b, c, d - 1) }, 300) })
        }, Geb = function (a) {
            g.xu(a.S);
            a.S = 0; g.xu(a.I); a.I = 0; g.xu(a.ea); a.ea = 0; g.xu(a.D); a.D = 0; g.xu(a.J); a.J = 0
        }, p9 = function (a, b, c, d) {
            l9.call(this, a, b, "DialSession");
            this.config_ = d; this.u = this.S = null; this.ya = ""; this.Qa = c; this.La = null; this.ea = function () { };
            this.Z = NaN; this.Ia = (0, g.Pa)(this.vV, this); this.D = function () { };
            this.J = this.I = 0; this.qa = !1; this.Aa = "unknown"
        }, q9 = function (a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        }, Heb = function (a) {
            a.D = a.B.FM(a.ya, a.j.label, a.j.friendlyName, q9(a), function (b, c) {
                a.D = function () { };
                a.qa = !0; m9(a, b); "shortLived" == b.idType && 0 < c && r9(a, c)
            }, function (b) {
                a.D = function () { };
                a.Wh(b)
            })
        }, Ieb = function (a) {
            var b = {};
            b.pairingCode = a.ya; b.theme = a.Qa; Ebb() && (b.env_useStageMdx = 1); return g.ui(b)
        }, Jeb = function (a) {
            return new Promise(function (b) {
                a.ya = rbb();
                if (a.La) { var c = new chrome.cast.DialLaunchResponse(!0, Ieb(a)); b(c); Heb(a) } else a.ea = function () {
                    g.xu(a.Z); a.ea = function () { };
                    a.Z = NaN; var d = new chrome.cast.DialLaunchResponse(!0, Ieb(a)); b(d); Heb(a)
                }, a.Z = g.vu(function () { a.ea() }, 100)
            })
        }, Leb = function (a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new c8(b); return (new Promise(function (e) { Keb(a, d, function (f) { f ? (a.qa = !0, k9(a.B, d), m9(a, d), r9(a, c)) : g.eu(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")); e(f) }, 5) })).then(function (e) { return e ? new chrome.cast.DialLaunchResponse(!1) : Jeb(a) })
        }, Meb = function (a, b) {
            var c = a.S.receiver.label, d = a.j.friendlyName;
            return (new Promise(function (e) {
                reb(a.B, c, b, d, function (f) { f && f.token && m9(a, f); e(f) }, function (f) {
                    n9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function (e) { return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Jeb(a) })
        }, Keb = function (a, b, c, d) {
            g.xu(a.I);
            a.I = 0; teb(a.B, b, function (e) { e || 0 > d ? c(e) : a.I = g.vu(function () { Keb(a, b, c, d - 1) }, 300) })
        }, r9 = function (a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            q9(a) && (g.xu(a.J), a.J = 0, 0 == b ? Neb(a) : a.J = g.vu(function () { Neb(a) }, b))
        }, Neb = function (a) {
            q9(a) && a.u.getDialAppInfo(function (b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {}; var c = null; if (b.loungeToken) { var d; (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken") } else c = "missingLoungeToken"; c ? (a.Aa = c, r9(a, 3E4)) : (a.qa = !1, a.Aa = "unknown", xeb(a, b.loungeToken), r9(a, b.loungeTokenRefreshIntervalMs))
            }, function (b) {
                a.info("getDialAppInfo error: " + b);
                a.Aa = "noLoungeTokenResponse"; r9(a, 3E4)
            })
        }, Oeb = function (a) {
            g.xu(a.I);
            a.I = 0; g.xu(a.J); a.J = 0; a.D(); a.D = function () { };
            g.xu(a.Z)
        }, s9 = function (a, b) {
            l9.call(this, a, b, "ManualSession");
            this.u = g.vu((0, g.Pa)(this.pw, this, null), 150)
        }, t9 = function (a, b) {
            g.az.call(this);
            this.config_ = b; this.u = a; this.S = b.appId || "233637DE"; this.C = b.theme || "cl"; this.Z = b.disableCastApi || !1; this.I = b.forceMirroring || !1; this.j = null; this.J = !1; this.B = []; this.D = (0, g.Pa)(this.G2, this)
        }, Peb = function (a, b) { return b ? g.Pb(a.B, function (c) { return d8(b, c.label) }, a) : null }, u9 = function (a) { $8("Controller", a) }, Ydb = function (a) { window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a) }, v9 = function (a) { return a.J || !!a.B.length || !!a.j }, w9 = function (a, b, c) {
            b != a.j && (g.Ye(a.j), (a.j = b) ? (c ? a.ma("yt-remote-cast2-receiver-resumed",
                b.j) : a.ma("yt-remote-cast2-receiver-selected", b.j), b.subscribe("sessionScreen", (0, g.Pa)(a.yR, a, b)), b.subscribe("sessionFailed", function () { return Qeb(a, b) }), b.getScreen() ? a.ma("yt-remote-cast2-session-change", b.getScreen()) : c && a.j.pw(null)) : a.ma("yt-remote-cast2-session-change", null))
        }, Qeb = function (a, b) { a.j == b && a.ma("yt-remote-cast2-session-failed") }, Reb = function (a) {
            var b = a.u.EM(), c = a.j && a.j.j;
            a = g.Ok(b, function (d) { c && d8(d, c.label) && (c = null); var e = d.uuid ? d.uuid : d.id, f = Peb(this, d); f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM); return f }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c)); return a
        }, Yeb = function (a, b, c, d) {
            d.disableCastApi ? x9("Cannot initialize because disabled by Mdx config.") : Seb() ? Teb(b, d) && (Ueb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Veb(a, c) : (window.__onGCastApiAvailable = function (e, f) {
                e ? Veb(a, c) : (y9("Failed to load cast API: " + f), Web(!1), Ueb(!1), g.Pz("yt-remote-cast-available"), g.Pz("yt-remote-cast-receiver"),
                    Xeb(), c(!1))
            }, d.loadCastApiSetupScript ? g.Rz("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Fbb() && Obb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? Jbb() : 89 <= Fbb() ? Qbb() : (Nbb(), k8(Pbb.map(Kbb))))) : x9("Cannot initialize because not running Chrome")
        }, Xeb = function () {
            x9("dispose");
            var a = z9(); a && a.dispose(); g.Fa("yt.mdx.remote.cloudview.instance_", null); Zeb(!1); g.Tx($eb); $eb.length = 0
        }, A9 = function () { return !!g.Oz("yt-remote-cast-installed") }, afb = function () {
            var a = g.Oz("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        }, bfb = function () {
            x9("clearCurrentReceiver");
            g.Pz("yt-remote-cast-receiver")
        }, cfb = function () { return A9() ? z9() ? z9().getCastSession() : (y9("getCastSelector: Cast is not initialized."), null) : (y9("getCastSelector: Cast API is not installed!"), null) }, dfb = function () { A9() ? z9() ? B9() ? (x9("Requesting cast selector."), z9().requestSession()) : (x9("Wait for cast API to be ready to request the session."), $eb.push(g.Sx("yt-remote-cast2-api-ready", dfb))) : y9("requestCastSelector: Cast is not initialized.") : y9("requestCastSelector: Cast API is not installed!") },
        C9 = function (a, b) { B9() ? z9().setConnectedScreenStatus(a, b) : y9("setConnectedScreenStatus called before ready.") }, Seb = function () {
            var a = 0 <= g.nb().search(/ (CrMo|Chrome|CriOS)\//);
            return g.$D || a
        }, efb = function (a, b) { z9().init(a, b) }, Teb = function (a, b) {
            var c = !1;
            z9() || (a = new t9(a, b), a.subscribe("yt-remote-cast2-availability-change", function (d) { g.Nz("yt-remote-cast-available", d); a8("yt-remote-cast2-availability-change", d) }), a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
                x9("onReceiverSelected: " + d.friendlyName);
                g.Nz("yt-remote-cast-receiver", d); a8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
                x9("onReceiverResumed: " + d.friendlyName);
                g.Nz("yt-remote-cast-receiver", d); a8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function (d) {
                x9("onSessionChange: " + e8(d));
                d || g.Pz("yt-remote-cast-receiver"); a8("yt-remote-cast2-session-change", d)
            }), g.Fa("yt.mdx.remote.cloudview.instance_", a), c = !0);
            x9("cloudview.createSingleton_: " + c); return c
        }, z9 = function () { return g.Ga("yt.mdx.remote.cloudview.instance_") }, Veb = function (a, b) {
            Web(!0);
            Ueb(!1); efb(a, function (c) { c ? (Zeb(!0), g.Ux("yt-remote-cast2-api-ready")) : (y9("Failed to initialize cast API."), Web(!1), g.Pz("yt-remote-cast-available"), g.Pz("yt-remote-cast-receiver"), Xeb()); b(c) })
        }, x9 = function (a) { $8("cloudview", a) }, y9 = function (a) { $8("cloudview", a) }, Web = function (a) {
            x9("setCastInstalled_ " + a);
            g.Nz("yt-remote-cast-installed", a)
        }, B9 = function () { return !!g.Ga("yt.mdx.remote.cloudview.apiReady_") }, Zeb = function (a) {
            x9("setApiReady_ " + a);
            g.Fa("yt.mdx.remote.cloudview.apiReady_", a)
        }, Ueb = function (a) { g.Fa("yt.mdx.remote.cloudview.initializing_", a) }, D9 = function (a) {
            this.index = -1;
            this.videoId = this.listId = ""; this.volume = this.playerState = -1; this.muted = !1; this.audioTrackId = null; this.I = this.J = 0; this.trackData = null; this.hasNext = this.Rm = !1; this.S = this.D = this.j = this.C = 0; this.B = NaN; this.u = !1; this.reset(a)
        }, ffb = function (a) {
            a.audioTrackId = null;
            a.trackData = null; a.playerState = -1; a.Rm = !1; a.hasNext = !1; a.J = 0; a.I = g.Ra(); a.C = 0; a.j = 0; a.D = 0; a.S = 0; a.B = NaN; a.u = !1
        }, E9 = function (a) { return a.Tc() ? (g.Ra() - a.I) / 1E3 : 0 }, F9 = function (a, b) {
            a.J = b;
            a.I = g.Ra()
        }, G9 = function (a) {
            switch (a.playerState) {
                case 1: case 1081: return (g.Ra() - a.I) / 1E3 + a.J;
                case -1E3: return 0
            }return a.J
        }, H9 = function (a, b, c) {
            var d = a.videoId;
            a.videoId = b; a.index = c; b != d && ffb(a)
        }, gfb = function (a) {
            var b = {};
            b.index = a.index; b.listId = a.listId; b.videoId = a.videoId; b.playerState = a.playerState; b.volume = a.volume; b.muted = a.muted; b.audioTrackId = a.audioTrackId; b.trackData = g.Hf(a.trackData); b.hasPrevious = a.Rm; b.hasNext = a.hasNext; b.playerTime = a.J; b.playerTimeAt = a.I; b.seekableStart = a.C; b.seekableEnd = a.j; b.duration = a.D; b.loadedTime = a.S; b.liveIngestionTime = a.B; return b
        }, J9 = function (a, b) {
            g.az.call(this);
            this.B = 0; this.C = a; this.I = []; this.D = new Kdb; this.u = this.j = null; this.Z = (0, g.Pa)(this.g1, this); this.J = (0, g.Pa)(this.Tz, this); this.S = (0, g.Pa)(this.f1, this); this.ea = (0, g.Pa)(this.l1, this); var c = 0; a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.PK, this), hfb(this))) : c = 3; 0 != c && (b ? this.PK(c) : g.vu((0, g.Pa)(function () { this.PK(c) }, this), 0));
            (a = cfb()) && I9(this, a); this.subscribe("yt-remote-cast2-session-change", this.ea)
        }, K9 = function (a) { return new D9(a.C.getPlayerContextData()) }, hfb = function (a) { g.qc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function (b) { this.I.push(this.C.subscribe(b, g.Qa(this.E2, b), this)) }, a) }, ifb = function (a) {
            g.qc(a.I, function (b) { this.C.unsubscribeByKey(b) }, a);
            a.I.length = 0
        }, L9 = function (a) { return 1 == a.getState() }, M9 = function (a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.enqueue(b)
        }, jfb = function (a, b, c) {
            var d = K9(a);
            F9(d, c); -1E3 != d.playerState && (d.playerState = b); N9(a, d)
        }, O9 = function (a, b, c) { a.C.sendMessage(b, c) }, N9 = function (a, b) {
            ifb(a);
            a.C.setPlayerContextData(gfb(b)); hfb(a)
        }, I9 = function (a, b) {
            a.u && (a.u.removeUpdateListener(a.Z), a.u.removeMediaListener(a.J), a.Tz(null));
            a.u = b; a.u && (a9("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.Z), a.u.addMediaListener(a.J), a.u.media.length && a.Tz(a.u.media[0]))
        }, kfb = function (a) {
            var b = a.j.media, c = a.j.customData;
            if (b && c) { var d = K9(a); b.contentId != d.videoId && a9("Cast changing video to: " + b.contentId); d.videoId = b.contentId; d.playerState = c.playerState; F9(d, a.j.getEstimatedTime()); N9(a, d) } else a9("No cast media video. Ignoring state update.")
        }, P9 = function (a, b, c) {
            return (0, g.Pa)(function (d) {
                this.hf("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.hf("Retrying " + b + " using MDx browser channel."), O9(this, b, c))
            }, a)
        }, S9 = function (a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.az.call(this); var e = this; this.I = NaN; this.ya = !1; this.Z = this.S = this.qa = this.Aa = NaN; this.ea = []; this.D = this.J = this.C = this.j = this.u = null; this.La = a; this.Ia = d; this.ea.push(g.yx(window, "beforeunload", function () { e.Hv(2) }));
            this.B = []; this.j = new D9; this.Qa = b.id; this.Ba = b.idType; this.u = Xdb(this.La, c, this.JM, "shortLived" == this.Ba, this.Qa); this.u.Ra("channelOpened", function () { lfb(e) });
            this.u.Ra("channelClosed", function () { Q9("Channel closed"); isNaN(e.I) ? i8(!0) : i8(); e.dispose() });
            this.u.Ra("channelError", function (f) { i8(); isNaN(e.Xy()) ? (1 == f && "shortLived" == e.Ba && e.ma("browserChannelAuthError", f), Q9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.ya = !0, Q9("Channel error: " + f + " with reconnection in " + e.Xy() + " ms"), R9(e, 2)) });
            this.u.Ra("channelMessage", function (f) { mfb(e, f) });
            this.u.Wo(b.token); this.subscribe("remoteQueueChange", function () { var f = e.j.videoId; g.Qz() && g.Nz("yt-remote-session-video-id", f) })
        }, nfb = function (a) { return g.Pb(a.B, function (b) { return "LOUNGE_SCREEN" == b.type }) }, Q9 = function (a) { $8("conn", a) }, R9 = function (a, b) { a.ma("proxyStateChange", b) }, ofb = function (a) {
            a.I = g.vu(function () {
                Q9("Connecting timeout");
                a.Hv(1)
            }, 2E4)
        }, pfb = function (a) {
            g.xu(a.I);
            a.I = NaN
        }, qfb = function (a) {
            g.xu(a.Aa);
            a.Aa = NaN
        }, sfb = function (a) {
            rfb(a);
            a.qa = g.vu(function () { T9(a, "getNowPlaying") }, 2E4)
        }, rfb = function (a) {
            g.xu(a.qa);
            a.qa = NaN
        }, lfb = function (a) {
            Q9("Channel opened");
            a.ya && (a.ya = !1, qfb(a), a.Aa = g.vu(function () { Q9("Timing out waiting for a screen."); a.Hv(1) }, 15E3))
        }, ufb = function (a, b) {
            var c = null;
            if (b) { var d = nfb(a); d && (c = { clientName: d.clientName, deviceMake: d.brand, deviceModel: d.model, osVersion: d.osVersion }) } g.Fa("yt.mdx.remote.remoteClient_", c); b && (pfb(a), qfb(a)); c = a.u.dw() && isNaN(a.I); b == c ? b && (R9(a, 1), T9(a, "getSubtitlesTrack")) : b ? (a.jP() && a.j.reset(), R9(a, 1), T9(a, "getNowPlaying"), tfb(a)) : a.Hv(1)
        }, vfb = function (a, b) {
            var c = b.params.videoId;
            delete b.params.videoId; c == a.j.videoId && (g.vf(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ma("remotePlayerChange"))
        }, wfb = function (a, b, c) {
            var d = b.params.videoId || b.params.video_id, e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId; H9(a.j, d, e); a.ma("remoteQueueChange", c)
        }, yfb = function (a, b) {
            b.params = b.params || {};
            wfb(a, b, "NOW_PLAYING_MAY_CHANGE"); xfb(a, b); a.ma("autoplayDismissed")
        }, xfb = function (a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            F9(a.j, isNaN(c) ? 0 : c); c = parseInt(b.params.state, 10); c = isNaN(c) ? -1 : c; -1 == c && -1E3 == a.j.playerState && (c = -1E3); a.j.playerState = c; c = Number(b.params.loadedTime); a.j.S = isNaN(c) ? 0 : c; a.j.Cj(Number(b.params.duration)); c = a.j; var d = Number(b.params.liveIngestionTime); c.B = d; c.u = isNaN(d) ? !1 : !0; c = a.j; d = Number(b.params.seekableStartTime); b = Number(b.params.seekableEndTime); c.C = isNaN(d) ? 0 : d; c.j = isNaN(b) ? 0 : b; 1 == a.j.playerState ? sfb(a) : rfb(a); a.ma("remotePlayerChange")
        }, zfb = function (a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) { case 1: c = 1081; break; case 2: c = 1084; break; case 0: c = 1083 }a.j.playerState = c; b = parseInt(b.params.currentTime, 10); F9(a.j, isNaN(b) ? 0 : b); a.ma("remotePlayerChange")
            }
        }, Afb = function (a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10); a.j.muted = c; a.ma("remotePlayerChange")
        }, Bfb = function (a, b) {
            a.J = b.params.videoId;
            a.ma("nowAutoplaying", parseInt(b.params.timeout, 10))
        }, Cfb = function (a, b) {
            a.J = b.params.videoId || null;
            a.ma("autoplayUpNext", a.J)
        }, Dfb = function (a, b) {
            a.D = b.params.autoplayMode;
            a.ma("autoplayModeChange", a.D); "DISABLED" == a.D && a.ma("autoplayDismissed")
        }, Efb = function (a, b) {
            var c = "true" == b.params.hasNext;
            a.j.Rm = "true" == b.params.hasPrevious; a.j.hasNext = c; a.ma("previousNextChange")
        }, mfb = function (a, b) {
            b = b.message;
            b.params ? Q9("Received: action=" + b.action + ", params=" + g.di(b.params)) : Q9("Received: action=" + b.action + " {}"); switch (b.action) {
                case "loungeStatus": b = $7(b.params.devices); a.B = g.Ok(b, function (d) { return new b8(d) });
                    b = !!g.Pb(a.B, function (d) { return "LOUNGE_SCREEN" == d.type });
                    ufb(a, b); b = a.UP("mlm"); a.ma("multiStateLoopEnabled", b); break; case "loungeScreenDisconnected": g.$b(a.B, function (d) { return "LOUNGE_SCREEN" == d.type });
                    ufb(a, !1); break; case "remoteConnected": var c = new b8($7(b.params.device)); g.Pb(a.B, function (d) { return d.equals(c) }) || fbb(a.B, c);
                    break; case "remoteDisconnected": c = new b8($7(b.params.device)); g.$b(a.B, function (d) { return d.equals(c) });
                    break; case "gracefulDisconnect": break; case "playlistModified": wfb(a, b, "QUEUE_MODIFIED"); break; case "nowPlaying": yfb(a, b); break; case "onStateChange": xfb(a, b); break; case "onAdStateChange": zfb(a, b); break; case "onVolumeChanged": Afb(a, b); break; case "onSubtitlesTrackChanged": vfb(a, b); break; case "nowAutoplaying": Bfb(a, b); break; case "autoplayDismissed": a.ma("autoplayDismissed"); break; case "autoplayUpNext": Cfb(a, b); break; case "onAutoplayModeChanged": Dfb(a, b); break; case "onHasPreviousNextChanged": Efb(a, b);
                    break; case "requestAssistedSignIn": a.ma("assistedSignInRequested", b.params.authCode); break; case "onLoopModeChanged": a.ma("loopModeChange", b.params.loopMode); break; default: Q9("Unrecognized action: " + b.action)
            }
        }, tfb = function (a) {
            g.xu(a.Z);
            a.Z = g.vu(function () { a.Hv(1) }, 864E5)
        }, T9 = function (a, b, c) {
            c ? Q9("Sending: action=" + b + ", params=" + g.di(c)) : Q9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        }, Ffb = function (a) {
            e9.call(this, "ScreenServiceProxy");
            this.Vf = a; this.j = []; this.j.push(this.Vf.$_s("screenChange", (0, g.Pa)(this.zV, this))); this.j.push(this.Vf.$_s("onlineScreenChange", (0, g.Pa)(this.g2, this)))
        }, Kfb = function (a, b) {
            Dbb();
            if (!j8 || !j8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.O("MDX_CONFIG") || b; ubb(); ybb(); U9 || (U9 = new X8(b ? b.loungeApiHost : void 0), Ebb() && (U9.j = "/api/loungedev")); V9 || (V9 = g.Ga("yt.mdx.remote.deferredProxies_") || [], g.Fa("yt.mdx.remote.deferredProxies_", V9)); Gfb(); var c = W9(); if (!c) {
                    var d = new j9(U9, b ? b.disableAutomaticScreenCache || !1 : !1); g.Fa("yt.mdx.remote.screenService_", d); c = W9(); var e = {}; b && (e = {
                        appId: b.appId, disableDial: b.disableDial, theme: b.theme, loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi, enableDialLoungeToken: b.enableDialLoungeToken, enableCastLoungeToken: b.enableCastLoungeToken, forceMirroring: b.forceMirroring
                    }); g.Fa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1); Yeb(a, d, function (f) { f ? X9() && C9(X9(), "YouTube TV") : d.subscribe("onlineScreenChange", function () { a8("yt-remote-receiver-availability-change") }) }, e)
                } b && !g.Ga("yt.mdx.remote.initialized_") && (g.Fa("yt.mdx.remote.initialized_", !0), Y9("Initializing: " + g.di(b)),
                    Z9.push(g.Sx("yt-remote-cast2-api-ready", function () { a8("yt-remote-api-ready") })), Z9.push(g.Sx("yt-remote-cast2-availability-change", function () { a8("yt-remote-receiver-availability-change") })), Z9.push(g.Sx("yt-remote-cast2-receiver-selected", function () {
                        $9(null);
                        a8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), Z9.push(g.Sx("yt-remote-cast2-receiver-resumed", function () { a8("yt-remote-receiver-resumed", "cast-selector-receiver") })), Z9.push(g.Sx("yt-remote-cast2-session-change", Hfb)), Z9.push(g.Sx("yt-remote-connection-change", function (f) { f ? C9(X9(), "YouTube TV") : a$() || (C9(null, null), bfb()) })), Z9.push(g.Sx("yt-remote-cast2-session-failed", function () { a8("yt-remote-connection-failed") })), a = Ifb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.S("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), Y9(" -- with channel params: " + g.di(a)), a ? (g.Nz("yt-remote-session-app", a.app), g.Nz("yt-remote-session-name", a.name)) : (g.Pz("yt-remote-session-app"), g.Pz("yt-remote-session-name")), g.Fa("yt.mdx.remote.channelParams_", a), c.start(), X9() || Jfb())
            }
        }, Lfb = function () {
            var a = W9().Vf.$_gos();
            var b = b$(); b && c$() && (tbb(a, b) || a.push(b)); return sbb(a)
        }, Nfb = function () {
            var a = Mfb();
            !a && A9() && afb() && (a = { key: "cast-selector-receiver", name: afb() }); return a
        }, Mfb = function () {
            var a = Lfb(), b = b$();
            b || (b = a$()); return g.Pb(a, function (c) { return b && d8(b, c.key) ? !0 : !1 })
        }, b$ = function () {
            var a = X9();
            if (!a) return null; var b = W9().qj(); return f8(b, a)
        }, Hfb = function (a) {
            Y9("remote.onCastSessionChange_: " + e8(a));
            if (a) { var b = b$(); if (b && b.id == a.id) { if (C9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) d$ && (d$.token = a), (b = c$()) && b.Wo(a) } else b && e$(), f$(a, 1) } else c$() && e$()
        }, e$ = function () {
            B9() ? z9().stopSession() : y9("stopSession called before API ready.");
            var a = c$(); a && (a.disconnect(1), Ofb(null))
        }, Pfb = function () {
            var a = c$();
            return !!a && 3 != a.getProxyState()
        }, Y9 = function (a) { $8("remote", a) }, W9 = function () {
            if (!Qfb) {
                var a = g.Ga("yt.mdx.remote.screenService_");
                Qfb = a ? new Ffb(a) : null
            } return Qfb
        }, X9 = function () { return g.Ga("yt.mdx.remote.currentScreenId_") }, Rfb = function (a) { g.Fa("yt.mdx.remote.currentScreenId_", a) }, Sfb = function () { return g.Ga("yt.mdx.remote.connectData_") }, $9 = function (a) { g.Fa("yt.mdx.remote.connectData_", a) }, c$ = function () { return g.Ga("yt.mdx.remote.connection_") }, Ofb = function (a) {
            var b = c$();
            $9(null); a || Rfb(""); g.Fa("yt.mdx.remote.connection_", a); V9 && (g.qc(V9, function (c) { c(a) }), V9.length = 0);
            b && !a ? a8("yt-remote-connection-change", !1) : !b && a && a8("yt-remote-connection-change", !0)
        }, a$ = function () {
            var a = g.Qz();
            if (!a) return null; var b = W9(); if (!b) return null; b = b.qj(); return f8(b, a)
        }, f$ = function (a, b) {
            X9();
            b$() && b$(); if (g$) d$ = a; else {
                Rfb(a.id); var c = g.Ga("yt.mdx.remote.enableConnectWithInitialState_") || !1; a = new S9(U9, a, Ifb(), c); a.connect(b, Sfb()); a.subscribe("beforeDisconnect", function (d) { a8("yt-remote-before-disconnect", d) });
                a.subscribe("beforeDispose", function () { c$() && (c$(), Ofb(null)) });
                a.subscribe("browserChannelAuthError", function () { var d = b$(); d && "shortLived" == d.idType && (B9() ? z9().handleBrowserChannelAuthError() : y9("refreshLoungeToken called before API ready.")) });
                Ofb(a)
            }
        }, Jfb = function () {
            var a = a$();
            a ? (Y9("Resume connection to: " + e8(a)), f$(a, 0)) : (i8(), bfb(), Y9("Skipping connecting because no session screen found."))
        }, Gfb = function () {
            var a = Ifb();
            if (g.vf(a)) { a = h8(); var b = g.Oz("yt-remote-session-name") || "", c = g.Oz("yt-remote-session-app") || ""; a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 }; g.Fa("yt.mdx.remote.channelParams_", a) }
        }, Ifb = function () { return g.Ga("yt.mdx.remote.channelParams_") || {} }, Vfb = function (a, b, c) {
            g.J.call(this);
            var d = this; this.j = a; this.G = b; this.uc = c; this.events = new g.XD(this); this.ea = this.events.T(this.G, "onVolumeChange", function (e) { Tfb(d, e) });
            this.D = !1; this.I = new g.YJ(64); this.u = new g.Xn(this.JS, 500, this); this.B = new g.Xn(this.KS, 1E3, this); this.S = new m8(this.t6, 0, this); this.C = {}; this.Z = new g.Xn(this.wT, 1E3, this); this.J = new n8(this.seekTo, 1E3, this); g.M(this, this.events); this.events.T(b, "onCaptionsTrackListChanged", this.P1); this.events.T(b, "captionschanged", this.d1); this.events.T(b, "captionssettingschanged", this.RS); this.events.T(b, "videoplayerreset", this.KD); this.events.T(b, "mdxautoplaycancel", function () { d.uc.FO() });
            b.K("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function () { Ufb(d.j) || h$(d) || i$(d, 0) });
            a = this.uc; a.isDisposed(); a.subscribe("proxyStateChange", this.vR, this); a.subscribe("remotePlayerChange", this.Yz, this); a.subscribe("remoteQueueChange", this.KD, this); a.subscribe("previousNextChange", this.sR, this); a.subscribe("nowAutoplaying", this.mR, this); a.subscribe("autoplayDismissed", this.PQ, this); g.M(this, this.u); g.M(this, this.B); g.M(this, this.S); g.M(this, this.Z); g.M(this, this.J); this.RS(); this.KD(); this.Yz()
        }, Tfb = function (a, b) {
            if (h$(a)) {
                a.uc.unsubscribe("remotePlayerChange", a.Yz, a);
                var c = Math.round(b.volume); b = !!b.muted; var d = K9(a.uc); if (c !== d.volume || b !== d.muted) a.uc.setVolume(c, b), a.Z.start(); a.uc.subscribe("remotePlayerChange", a.Yz, a)
            }
        }, Wfb = function (a) {
            a.hc(0);
            a.u.stop(); a.Xb(new g.YJ(64))
        }, Xfb = function (a, b) {
            if (h$(a) && !a.D) {
                var c = null;
                b && (c = { style: a.G.getSubtitlesUserSettings() }, g.If(c, b)); a.uc.IM(a.G.getVideoData(1).videoId, c); a.C = K9(a.uc).trackData
            }
        }, i$ = function (a, b) {
            var c = a.G.getPlaylist();
            if (null == c ? 0 : c.listId) { var d = c.index; var e = c.listId.toString() } c = a.G.getVideoData(1); a.uc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ba, ebb(c)); a.Xb(new g.YJ(1))
        }, Yfb = function (a, b) {
            if (b) {
                var c = a.G.getOption("captions", "tracklist", { MP: 1 });
                c && c.length ? (a.G.setOption("captions", "track", b), a.D = !1) : (a.G.loadModule("captions"), a.D = !0)
            } else a.G.setOption("captions", "track", {})
        }, h$ = function (a) { return K9(a.uc).videoId === a.G.getVideoData(1).videoId }, j$ = function () {
            g.W.call(this, {
                F: "div",
                N: "ytp-mdx-popup-dialog", X: { role: "dialog" }, W: [{
                    F: "div", N: "ytp-mdx-popup-dialog-inner-content", W: [{ F: "div", N: "ytp-mdx-popup-title", oa: "You're signed out" }, { F: "div", N: "ytp-mdx-popup-description", oa: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer." }, {
                        F: "div", N: "ytp-mdx-privacy-popup-buttons", W: [{ F: "button", Fa: ["ytp-button", "ytp-mdx-privacy-popup-cancel"], oa: "Cancel" }, {
                            F: "button", Fa: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"], oa: "Confirm"
                        }]
                    }]
                }]
            }); this.j = new g.IL(this, 250); this.cancelButton = this.Da("ytp-mdx-privacy-popup-cancel"); this.confirmButton = this.Da("ytp-mdx-privacy-popup-confirm"); g.M(this, this.j); this.T(this.cancelButton, "click", this.u); this.T(this.confirmButton, "click", this.B)
        }, k$ = function (a) {
            g.W.call(this, {
                F: "div",
                N: "ytp-remote", W: [{ F: "div", N: "ytp-remote-display-status", W: [{ F: "div", N: "ytp-remote-display-status-icon", W: [g.XEa()] }, { F: "div", N: "ytp-remote-display-status-text", oa: "{{statustext}}" }] }]
            }); this.api = a; this.j = new g.IL(this, 250); g.M(this, this.j); this.T(a, "presentingplayerstatechange", this.onStateChange); this.Vc(a.Eb())
        }, l$ = function (a, b) {
            g.nR.call(this, "Play on", 1, a, b);
            this.G = a; this.Kq = {}; this.T(a, "onMdxReceiversChange", this.D); this.T(a, "presentingplayerstatechange", this.D); this.D()
        }, Zfb = function (a) {
            g.eO.call(this, a);
            this.pn = { key: rbb(), name: "This computer" }; this.Vj = null; this.subscriptions = []; this.fK = this.uc = null; this.Kq = [this.pn]; this.Fp = this.pn; this.Dd = new g.YJ(64); this.fQ = 0; this.Ig = -1; this.gA = !1; this.eA = this.Jw = null; if (!g.SF(this.player.V()) && !g.TF(this.player.V())) { a = this.player; var b = g.rN(a); b && (b = b.Lm()) && (b = new l$(a, b), g.M(this, b)); b = new k$(a); g.M(this, b); g.BN(a, b.element, 4); this.Jw = new j$; g.M(this, this.Jw); g.BN(a, this.Jw.element, 4); this.gA = !!a$() }
        }, m$ = function (a) {
            a.eA && (a.player.removeEventListener("presentingplayerstatechange",
                a.eA), a.eA = null)
        }, $fb = function (a, b, c) {
            a.Dd = c;
            a.player.ma("presentingplayerstatechange", new g.qJ(c, b))
        }, n$ = function (a, b) {
            if (b.key !== a.Fp.key) if (b.key === a.pn.key) e$();
            else if (Ufb(a) && agb(a), a.Fp = b, !a.player.V().K("disable_mdx_connection_in_mdx_module_for_music_web") || !g.TF(a.player.V())) {
                var c = a.player.getPlaylistId(); var d = a.player.getVideoData(1); var e = d.videoId; if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.V().K("should_clear_video_data_on_player_cued_unstarted")) d = null; else {
                    var f = a.player.getPlaylist(); if (f) { var h = []; for (var l = 0; l < f.length; l++)h[l] = g.$N(f, l).videoId } else h = [e]; f = a.player.getCurrentTime(1); a = {
                        videoIds: h, listId: c,
                        videoId: e, playerParams: d.playerParams, clickTrackingParams: d.Ba, index: Math.max(a.player.getPlaylistIndex(), 0), currentTime: 0 === f ? void 0 : f
                    }; (d = ebb(d)) && (a.locationInfo = d); d = a
                } Y9("Connecting to: " + g.di(b)); "cast-selector-receiver" == b.key ? ($9(d || null), b = d || null, B9() ? z9().setLaunchParams(b) : y9("setLaunchParams called before ready.")) : !d && Pfb() && X9() == b.key ? a8("yt-remote-connection-change", !0) : (e$(), $9(d || null), d = W9().qj(), (b = f8(d, b.key)) && f$(b, 1))
            }
        }, Ufb = function (a) {
            var b;
            (b = !a.player.V().K("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.O("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.O("SESSION_INDEX") && !g.O("LOGGED_IN"))) || a.gA || !a.Jw); return b ? !1 : g.jG(a.player.V()) || g.mG(a.player.V())
        }, agb = function (a) {
            a.player.Eb().Tc() ? a.player.pauseVideo() : (a.eA = function (b) { !a.gA && g.sJ(b, 8) && (a.player.pauseVideo(), m$(a)) }, a.player.addEventListener("presentingplayerstatechange", a.eA));
            a.Jw && a.Jw.Qc(); c$() || (g$ = !0)
        };
    g.eq.prototype.Qp = g.ba(1, function () { return g.nd(this, 6) });
    g.de.prototype.pB = g.ba(0, function () { var a = g.he(this); return 4294967296 * g.he(this) + (a >>> 0) });
    var Qab, bgb = g.Pe(function (a, b, c) { if (1 !== a.u) return !1; g.E(b, c, g.ke(a.j)); return !0 }, g.Qe), cgb = g.Pe(function (a, b, c, d) {
        if (1 !== a.u) return !1;
        g.Dd(b, c, d, g.ke(a.j)); return !0
    }, g.Qe), dgb = g.Pe(function (a, b, c) {
        if (0 !== a.u) return !1;
        g.E(b, c, g.fe(a.j)); return !0
    }, g.Re), egb = g.Pe(function (a, b, c, d) {
        if (0 !== a.u) return !1;
        g.Dd(b, c, d, g.fe(a.j)); return !0
    }, g.Re), fgb = g.Pe(function (a, b, c) {
        if (0 !== a.u) return !1;
        g.E(b, c, g.ge(a.j)); return !0
    }, g.Se), ggb = g.Pe(function (a, b, c, d) {
        if (0 !== a.u) return !1;
        g.Dd(b, c, d, g.ge(a.j)); return !0
    }, g.Se), igb = g.Pe(function (a, b, c) {
        if (1 !== a.u) return !1;
        g.E(b, c, a.j.pB()); return !0
    }, function (a, b, c) { Sab(a, c, g.nd(b, c)) }), jgb = g.Pe(function (a, b, c) {
        if (1 !== a.u && 2 !== a.u) return !1;
        b = g.sd(b, c); if (2 == a.u) { c = g.de.prototype.pB; var d = g.ge(a.j) >>> 0; for (d = a.j.j + d; a.j.j < d;)b.push(c.call(a.j)) } else b.push(a.j.pB()); return !0
    }, function (a, b, c) {
        b = g.sd(b, c);
        if (null != b) for (var d = 0; d < b.length; d++)Sab(a, c, b[d])
    }), kgb = g.Pe(function (a, b, c) {
        if (0 !== a.u) return !1;
        g.E(b, c, g.le(a.j)); return !0
    }, Uab), lgb = g.Pe(function (a, b, c, d) {
        if (0 !== a.u) return !1;
        g.Dd(b, c, d, g.le(a.j)); return !0
    }, Uab), mgb = g.Pe(function (a, b, c) {
        if (2 !== a.u) return !1;
        a = g.ve(a); g.Bd(b, c, a); return !0
    }, function (a, b, c) {
        b = g.sd(b, c);
        if (null != b) for (var d = 0; d < b.length; d++) { var e = b[d]; null != e && g.Be(a, c, g.vaa(e)) }
    }), ngb = g.Pe(function (a, b, c, d) {
        if (2 !== a.u) return !1;
        g.Dd(b, c, d, g.ve(a)); return !0
    }, g.oca), ogb = g.Pe(function (a, b, c, d, e) {
        if (2 !== a.u) return !1;
        g.se(a, g.vba(b, d, c), e); return !0
    }, g.pca), Vab = [1];
    g.v(Wab, g.I); g.v(Xab, g.I); var pgb = [Wab, 1, g.O2, [Xab, 1, bgb, 2, dgb]]; g.v(Yab, g.I); g.v(Zab, g.I); g.v($ab, g.I);
    var qgb = [1, 2], rgb = [g.Ph, 1, g.N2, 5, igb, 2, ogb, [Yab, 1, g.P2, [Zab, 1, g.N2, 2, g.N2, 3, kgb], qgb, 2, g.P2, [$ab, 1, g.N2, 2, g.N2, 3, fgb, 4, kgb], qgb], 3, mgb, 6, jgb, 4, g.O2, [g.Rh, 1, g.O2, [g.Sh, 1, ngb, g.Vh, 2, ggb, g.Vh, 3, lgb, g.Vh], 2, ogb, [g.Th, 1, egb, g.Uh, 2, cgb, g.Uh, 3, g.P2, pgb, g.Uh]]], idb = { "\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" }, O8 = { "'": "\\'" }, mbb = {
        Hda: "atp", USa: "ska", BPa: "que", FGa: "mus", TSa: "sus", uua: "dsp", VQa: "seq", WFa: "mic", tna: "dpa", Eea: "cds", vGa: "mlm",
        ona: "dsdtr", WHa: "ntb"
    }; b8.prototype.equals = function (a) { return a ? this.id == a.id : !1 };
    var j8, xbb = "", Mbb = Gbb("loadCastFramework") || Gbb("loadCastApplicationFramework"), Pbb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    g.Va(m8, g.J); g.k = m8.prototype; g.k.YU = function (a) { this.C = arguments; this.j = !1; this.xc ? this.B = g.Ra() + this.yh : this.xc = g.Mh(this.D, this.yh) };
    g.k.stop = function () { this.xc && (g.C.clearTimeout(this.xc), this.xc = null); this.B = null; this.j = !1; this.C = [] };
    g.k.pause = function () { ++this.u };
    g.k.resume = function () { this.u && (--this.u, !this.u && this.j && (this.j = !1, this.I.apply(null, this.C))) };
    g.k.ra = function () { this.stop(); m8.Re.ra.call(this) };
    g.k.ZU = function () { this.xc && (g.C.clearTimeout(this.xc), this.xc = null); this.B ? (this.xc = g.Mh(this.D, this.B - g.Ra()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.I.apply(null, this.C)) }; g.v(n8, g.J); g.k = n8.prototype; g.k.xF = function (a) { this.B = arguments; this.xc || this.u ? this.j = !0 : acb(this) };
    g.k.stop = function () { this.xc && (g.C.clearTimeout(this.xc), this.xc = null, this.j = !1, this.B = null) };
    g.k.pause = function () { this.u++ };
    g.k.resume = function () { this.u--; this.u || !this.j || this.xc || (this.j = !1, acb(this)) };
    g.k.ra = function () { g.J.prototype.ra.call(this); this.stop() }; o8.prototype.stringify = function (a) { return g.C.JSON.stringify(a, void 0) };
    o8.prototype.parse = function (a) { return g.C.JSON.parse(a, void 0) }; g.Va(bcb, g.af); g.Va(ccb, g.af); var fcb = !1; var hcb = null; g.Va(jcb, g.af); g.Va(kcb, g.af); g.Va(lcb, g.af); mcb.prototype.info = function () { };
    mcb.prototype.warning = function () { }; var tcb = {}, u8 = {}; g.k = s8.prototype; g.k.setTimeout = function (a) { this.Gb = a };
    g.k.cV = function (a) { a = a.target; var b = this.Ya; b && 3 == g.Di(a) ? b.xF() : this.mM(a) };
    g.k.mM = function (a) {
        try {
            if (a == this.j) a: {
                var b = g.Di(this.j), c = this.j.u, d = this.j.getStatus(); if (!(3 > b) && (3 != b || g.pG || this.j && (this.u.u || g.Fi(this.j) || g.Gi(this.j)))) {
                    this.Ia || 4 != b || 7 == c || (8 == c || 0 >= d ? p8(3) : p8(2)); x8(this); var e = this.j.getStatus(); this.Rb = e; b: if (rcb(this)) {
                        var f = g.Gi(this.j); a = ""; var h = f.length, l = 4 == g.Di(this.j); if (!this.u.B) { if ("undefined" === typeof TextDecoder) { v8(this); w8(this); var m = ""; break b } this.u.B = new g.C.TextDecoder } for (c = 0; c < h; c++)this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        }); f.splice(0, h); this.u.j += a; this.ea = 0; m = this.u.j
                    } else m = g.Fi(this.j); if (this.B = 200 == e) { if (this.lc && !this.Wa) { b: { if (this.j) { var n = g.Hi(this.j, "X-HTTP-Initial-Response"); if (n && !g.cb(n)) { var p = n; break b } } p = null } if (e = p) this.Wa = !0, ucb(this, e); else { this.B = !1; this.I = 3; q8(12); v8(this); w8(this); break a } } this.Ba ? (vcb(this, b, m), g.pG && this.B && 3 == b && (this.kb.Ra(this.ob, "tick", this.bV), this.ob.start())) : ucb(this, m); 4 == b && v8(this); this.B && !this.Ia && (4 == b ? xcb(this.D, this) : (this.B = !1, t8(this))) } else g.Vea(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.I = 3, q8(12)) : (this.I = 0, q8(13)), v8(this), w8(this)
                }
            }
        } catch (q) { } finally { }
    };
    g.k.bV = function () { if (this.j) { var a = g.Di(this.j), b = g.Fi(this.j); this.ea < b.length && (x8(this), vcb(this, a, b), this.B && 4 != a && t8(this)) } };
    g.k.cancel = function () { this.Ia = !0; v8(this) };
    g.k.aV = function () { this.Z = null; var a = Date.now(); 0 <= a - this.Lb ? (2 != this.Qa && (p8(3), q8(17)), v8(this), this.I = 2, w8(this)) : wcb(this, this.Lb - a) };
    g.k.getLastError = function () { return this.I }; Gcb.prototype.cancel = function () { this.B = Icb(this); if (this.u) this.u.cancel(), this.u = null; else if (this.j && 0 !== this.j.size) { for (var a = g.r(this.j.values()), b = a.next(); !b.done; b = a.next())b.value.cancel(); this.j.clear() } }; g.k = Mcb.prototype; g.k.nM = 8; g.k.vg = 1; g.k.connect = function (a, b, c, d) { this.Af && g.Bh((0, g.Pa)(this.K4, this, a)); q8(0); this.zc = a; this.Ia = b || {}; c && void 0 !== d && (this.Ia.OSID = c, this.Ia.OAID = d); this.ob = this.Ac; this.La = Ccb(this, null, this.zc); B8(this) };
    g.k.disconnect = function () { Ocb(this); if (3 == this.vg) { var a = this.Ya++, b = this.La.clone(); g.Lj(b, "SID", this.C); g.Lj(b, "RID", a); g.Lj(b, "TYPE", "terminate"); E8(this, b); a = new s8(this, this.C, a); a.Qa = 2; a.J = Y7(b.clone()); b = !1; g.C.navigator && g.C.navigator.sendBeacon && (b = g.C.navigator.sendBeacon(a.J.toString(), "")); !b && g.C.Image && ((new Image).src = a.J, b = !0); b || (a.j = qcb(a.D, null), a.j.send(a.J)); a.Aa = Date.now(); t8(a) } Ucb(this) };
    g.k.K4 = function (a) { try { gcb(a, function () { }) } catch (b) { } };
    g.k.Xf = function () { return 0 == this.vg };
    g.k.getState = function () { return this.vg };
    g.k.pM = function (a) {
        if (this.I) if (this.I = null, 1 == this.vg) {
            if (!a) {
                this.Ya = Math.floor(1E5 * Math.random()); a = this.Ya++; var b = new s8(this, "", a), c = this.Z; this.Lb && (c ? (c = g.Gf(c), g.If(c, this.Lb)) : c = this.Lb); null !== this.J || this.yb || (b.La = c, c = null); var d; if (this.Gb) a: {
                    for (var e = d = 0; e < this.B.length; e++) { b: { var f = this.B[e]; if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) { f = f.length; break b } f = void 0 } if (void 0 === f) break; d += f; if (4096 < d) { d = e; break a } if (4096 === d || e === this.B.length - 1) { d = e + 1; break a } } d =
                        1E3
                } else d = 1E3; d = Rcb(this, b, d); e = this.La.clone(); g.Lj(e, "RID", a); g.Lj(e, "CVER", 22); this.Ba && g.Lj(e, "X-HTTP-Session-Id", this.Ba); E8(this, e); c && (this.yb ? d = "headers=" + g.Rg(g.ega(c)) + "&" + d : this.J && g.Pj(e, this.J, c)); Bcb(this.u, b); this.kf && g.Lj(e, "TYPE", "init"); this.Gb ? (g.Lj(e, "$req", d), g.Lj(e, "SID", "null"), b.lc = !0, pcb(b, e, null)) : pcb(b, e, d); this.vg = 2
            }
        } else 3 == this.vg && (a ? Scb(this, a) : 0 == this.B.length || Hcb(this.u) || Scb(this))
    };
    g.k.oM = function () { this.S = null; Tcb(this); if (this.Lc && !(this.kb || null == this.j || 0 >= this.Hd)) { var a = 2 * this.Hd; this.ya = r8((0, g.Pa)(this.b1, this), a) } };
    g.k.b1 = function () { this.ya && (this.ya = null, this.ob = !1, this.kb = !0, q8(10), z8(this), Tcb(this)) };
    g.k.DJ = function (a) { this.j == a && this.Lc && !this.kb && (Ncb(this), this.kb = !0, q8(11)) };
    g.k.dV = function () { null != this.ea && (this.ea = null, z8(this), zcb(this), q8(19)) };
    g.k.O5 = function (a) { a ? q8(2) : q8(1) };
    g.k.isActive = function () { return !!this.D && this.D.isActive(this) };
    g.k = Wcb.prototype; g.k.tM = function () { };
    g.k.sM = function () { };
    g.k.rM = function () { };
    g.k.qM = function () { };
    g.k.isActive = function () { return !0 };
    g.k.eV = function () { }; g.Va(G8, g.Uf); G8.prototype.open = function () { this.j.D = this.C; this.J && (this.j.Qa = !0); this.j.connect(this.I, this.u || void 0) };
    G8.prototype.close = function () { this.j.disconnect() };
    G8.prototype.send = function (a) { var b = this.j; if ("string" === typeof a) { var c = {}; c.__data__ = a; a = c } else this.D && (c = {}, c.__data__ = g.di(a), a = c); b.B.push(new Fcb(b.Ue++, a)); 3 == b.vg && B8(b) };
    G8.prototype.ra = function () { this.j.D = null; delete this.C; this.j.disconnect(); delete this.j; G8.Re.ra.call(this) };
    g.Va(Ycb, bcb); g.Va(Zcb, ccb); g.Va(F8, Wcb); F8.prototype.tM = function () { this.j.dispatchEvent("m") };
    F8.prototype.sM = function (a) { this.j.dispatchEvent(new Ycb(a)) };
    F8.prototype.rM = function (a) { this.j.dispatchEvent(new Zcb(a)) };
    F8.prototype.qM = function () { this.j.dispatchEvent("n") }; var I8 = new g.Uf; g.v(bdb, g.af); g.k = K8.prototype; g.k.xr = null; g.k.Ln = !1; g.k.Cu = null; g.k.zF = null; g.k.Au = null; g.k.Bu = null; g.k.hp = null; g.k.jp = null; g.k.yr = null; g.k.Ih = null; g.k.kB = 0; g.k.Kl = null; g.k.jB = null; g.k.ip = null; g.k.Fx = -1; g.k.vS = !0; g.k.wr = !1; g.k.yF = 0; g.k.iB = null; var gdb = {}, fdb = {}; g.k = K8.prototype; g.k.setTimeout = function (a) { this.u = a };
    g.k.gV = function (a) { a = a.target; var b = this.iB; b && 3 == g.Di(a) ? b.xF() : this.uM(a) };
    g.k.uM = function (a) {
        try {
            if (a == this.Ih) a: {
                var b = g.Di(this.Ih), c = this.Ih.u, d = this.Ih.getStatus(); if (g.Ac && !g.wc(10) || g.gf && !g.vc("420+")) { if (4 > b) break a } else if (3 > b || 3 == b && !g.Fi(this.Ih)) break a; this.wr || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Al(3) : this.j.Al(2)); ldb(this); var e = this.Ih.getStatus(); this.Fx = e; var f = g.Fi(this.Ih); if (this.Ln = 200 == e) {
                    4 == b && M8(this); if (this.Ba) {
                        for (a = !0; !this.wr && this.kB < f.length;) {
                            var h = hdb(this, f); if (h == fdb) { 4 == b && (this.ip = 4, J8(15), a = !1); break } else if (h == gdb) {
                                this.ip = 4; J8(16); a =
                                    !1; break
                            } else mdb(this, h)
                        } 4 == b && 0 == f.length && (this.ip = 1, J8(17), a = !1); this.Ln = this.Ln && a; a || (M8(this), N8(this))
                    } else mdb(this, f); this.Ln && !this.wr && (4 == b ? this.j.lB(this) : (this.Ln = !1, L8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.ip = 3, J8(13)) : (this.ip = 0, J8(14)), M8(this), N8(this)
            }
        } catch (l) { } finally { }
    };
    g.k.F3 = function (a) { H8((0, g.Pa)(this.E3, this, a), 0) };
    g.k.E3 = function (a) { this.wr || (ldb(this), mdb(this, a), L8(this)) };
    g.k.AR = function (a) { H8((0, g.Pa)(this.D3, this, a), 0) };
    g.k.D3 = function (a) { this.wr || (M8(this), this.Ln = a, this.j.lB(this), this.j.Al(4)) };
    g.k.cancel = function () { this.wr = !0; M8(this) };
    g.k.fV = function () { this.Cu = null; var a = Date.now(); 0 <= a - this.zF ? (2 != this.Bu && this.j.Al(3), M8(this), this.ip = 2, J8(18), N8(this)) : kdb(this, this.zF - a) };
    g.k.getLastError = function () { return this.ip }; g.k = pdb.prototype; g.k.BF = null; g.k.xi = null; g.k.gE = !1; g.k.LS = null; g.k.rC = null; g.k.SI = null; g.k.CF = null; g.k.Qj = null; g.k.Mn = -1; g.k.Gx = null; g.k.by = null; g.k.connect = function (a) { this.CF = a; a = Q8(this.j, null, this.CF); J8(3); this.LS = Date.now(); var b = this.j.S; null != b ? (this.Gx = b[0], (this.by = b[1]) ? (this.Qj = 1, qdb(this)) : (this.Qj = 2, rdb(this))) : (Z7(a, "MODE", "init"), this.xi = new K8(this), this.xi.xr = this.BF, edb(this.xi, a, !1, null, !0), this.Qj = 0) };
    g.k.iY = function (a) { if (a) this.Qj = 2, rdb(this); else { J8(4); var b = this.j; b.Pl = b.Dp.Mn; U8(b, 9) } a && this.Al(2) };
    g.k.AF = function (a) { return this.j.AF(a) };
    g.k.abort = function () { this.xi && (this.xi.cancel(), this.xi = null); this.Mn = -1 };
    g.k.Xf = function () { return !1 };
    g.k.vM = function (a, b) { this.Mn = a.Fx; if (0 == this.Qj) if (b) { try { var c = this.u.parse(b) } catch (d) { a = this.j; a.Pl = this.Mn; U8(a, 2); return } this.Gx = c[0]; this.by = c[1] } else a = this.j, a.Pl = this.Mn, U8(a, 2); else if (2 == this.Qj) if (this.gE) J8(7), this.SI = Date.now(); else if ("11111" == b) { if (J8(6), this.gE = !0, this.rC = Date.now(), a = this.rC - this.LS, !g.Ac || g.wc(10) || 500 > a) this.Mn = 200, this.xi.cancel(), J8(12), R8(this.j, this, !0) } else J8(8), this.rC = this.SI = Date.now(), this.gE = !1 };
    g.k.lB = function () { this.Mn = this.xi.Fx; if (this.xi.Ln) 0 == this.Qj ? this.by ? (this.Qj = 1, qdb(this)) : (this.Qj = 2, rdb(this)) : 2 == this.Qj && ((!g.Ac || g.wc(10) ? !this.gE : 200 > this.SI - this.rC) ? (J8(11), R8(this.j, this, !1)) : (J8(12), R8(this.j, this, !0))); else { 0 == this.Qj ? J8(9) : 2 == this.Qj && J8(10); var a = this.j; this.xi.getLastError(); a.Pl = this.Mn; U8(a, 2) } };
    g.k.Hx = function () { return this.j.Hx() };
    g.k.isActive = function () { return this.j.isActive() };
    g.k.Al = function (a) { this.j.Al(a) }; g.k = sdb.prototype; g.k.Ol = null; g.k.Ix = null; g.k.Ei = null; g.k.Jf = null; g.k.DF = null; g.k.mB = null; g.k.wM = null; g.k.nB = null; g.k.Jx = 0; g.k.iV = 0; g.k.ph = null; g.k.kp = null; g.k.Nn = null; g.k.Ar = null; g.k.Dp = null; g.k.TE = null; g.k.Fu = -1; g.k.xM = -1; g.k.Pl = -1; g.k.Eu = 0; g.k.Du = 0; g.k.zr = 8; g.Va(udb, g.af); g.Va(vdb, g.af); g.k = sdb.prototype; g.k.connect = function (a, b, c, d, e) { J8(0); this.DF = b; this.Ix = c || {}; d && void 0 !== e && (this.Ix.OSID = d, this.Ix.OAID = e); this.J ? (H8((0, g.Pa)(this.sO, this, a), 100), xdb(this)) : this.sO(a) };
    g.k.disconnect = function () { ydb(this); if (3 == this.j) { var a = this.Jx++, b = this.mB.clone(); g.Lj(b, "SID", this.C); g.Lj(b, "RID", a); g.Lj(b, "TYPE", "terminate"); T8(this, b); a = new K8(this, this.C, a); a.Bu = 2; a.hp = Y7(b.clone()); (new Image).src = a.hp.toString(); a.Au = Date.now(); L8(a) } Idb(this) };
    g.k.sO = function (a) { this.Dp = new pdb(this); this.Dp.BF = this.Ol; this.Dp.u = this.D; this.Dp.connect(a) };
    g.k.Xf = function () { return 0 == this.j };
    g.k.getState = function () { return this.j };
    g.k.zM = function (a) { this.kp = null; Ddb(this, a) };
    g.k.yM = function () { this.Nn = null; this.Jf = new K8(this, this.C, "rpc", this.I); this.Jf.xr = this.Ol; this.Jf.yF = 0; var a = this.wM.clone(); g.Lj(a, "RID", "rpc"); g.Lj(a, "SID", this.C); g.Lj(a, "CI", this.TE ? "0" : "1"); g.Lj(a, "AID", this.Fu); T8(this, a); if (!g.Ac || g.wc(10)) g.Lj(a, "TYPE", "xmlhttp"), edb(this.Jf, a, !0, this.nB, !1); else { g.Lj(a, "TYPE", "html"); var b = this.Jf, c = !!this.nB; b.Bu = 3; b.hp = Y7(a.clone()); jdb(b, c) } };
    g.k.vM = function (a, b) {
        if (0 != this.j && (this.Jf == a || this.Ei == a)) if (this.Pl = a.Fx, this.Ei == a && 3 == this.j) if (7 < this.zr) { try { var c = this.D.parse(b) } catch (d) { c = null } if (Array.isArray(c) && 3 == c.length) if (a = c, 0 == a[0]) a: { if (!this.Nn) { if (this.Jf) if (this.Jf.Au + 3E3 < this.Ei.Au) S8(this), this.Jf.cancel(), this.Jf = null; else break a; Gdb(this); J8(19) } } else this.xM = a[1], 0 < this.xM - this.Fu && 37500 > a[2] && this.TE && 0 == this.Du && !this.Ar && (this.Ar = H8((0, g.Pa)(this.jV, this), 6E3)); else U8(this, 11) } else null != b && U8(this, 11); else if (this.Jf ==
            a && S8(this), !g.cb(b)) for (a = this.D.parse(b), b = 0; b < a.length; b++)c = a[b], this.Fu = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.nB = c[2], c = c[3], null != c ? this.zr = c : this.zr = 6, this.j = 3, this.ph && this.ph.CM(), this.wM = Q8(this, this.Hx() ? this.nB : null, this.DF), Edb(this)) : "stop" == c[0] && U8(this, 7) : 3 == this.j && ("stop" == c[0] ? U8(this, 7) : "noop" != c[0] && this.ph && this.ph.BM(c), this.Du = 0)
    };
    g.k.jV = function () { null != this.Ar && (this.Ar = null, this.Jf.cancel(), this.Jf = null, Gdb(this), J8(20)) };
    g.k.lB = function (a) {
        if (this.Jf == a) { S8(this); this.Jf = null; var b = 2 } else if (this.Ei == a) this.Ei = null, b = 1; else return; this.Pl = a.Fx; if (0 != this.j) if (a.Ln) if (1 == b) { b = Date.now() - a.Au; var c = I8; c.dispatchEvent(new udb(c, a.yr ? a.yr.length : 0, b, this.Eu)); wdb(this); this.B.length = 0 } else Edb(this); else {
            c = a.getLastError(); var d; if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Pl)) { if (d = 1 == b) this.Ei || this.kp || 1 == this.j || 2 <= this.Eu ? d = !1 : (this.kp = H8((0, g.Pa)(this.zM, this, a), Fdb(this, this.Eu)), this.Eu++, d = !0); d = !(d || 2 == b && Gdb(this)) } if (d) switch (c) {
                case 1: U8(this,
                    5); break; case 4: U8(this, 10); break; case 3: U8(this, 6); break; case 7: U8(this, 12); break; default: U8(this, 2)
            }
        }
    };
    g.k.hV = function (a) { if (!g.Sb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j); };
    g.k.N5 = function (a) { a ? J8(2) : (J8(1), Hdb(this, 8)) };
    g.k.AF = function (a) { if (a) throw Error("Can't create secondary domain capable XhrIo object."); a = new g.Ai; a.J = !1; return a };
    g.k.isActive = function () { return !!this.ph && this.ph.isActive(this) };
    g.k.Al = function (a) { var b = I8; b.dispatchEvent(new vdb(b, a)) };
    g.k.Hx = function () { return !(!g.Ac || g.wc(10)) };
    g.k = Jdb.prototype; g.k.CM = function () { };
    g.k.BM = function () { };
    g.k.AM = function () { };
    g.k.EF = function () { };
    g.k.DM = function () { return {} };
    g.k.isActive = function () { return !0 }; g.k = Kdb.prototype; g.k.enqueue = function (a) { this.u.push(a) };
    g.k.isEmpty = function () { return 0 === this.j.length && 0 === this.u.length };
    g.k.clear = function () { this.j = []; this.u = [] };
    g.k.contains = function (a) { return g.Sb(this.j, a) || g.Sb(this.u, a) };
    g.k.remove = function (a) { var b = this.j; var c = (0, g.gYa)(b, a); 0 <= c ? (g.Wb(b, c), b = !0) : b = !1; return b || g.Xb(this.u, a) };
    g.k.ek = function () { for (var a = [], b = this.j.length - 1; 0 <= b; --b)a.push(this.j[b]); var c = this.u.length; for (b = 0; b < c; ++b)a.push(this.u[b]); return a }; g.v(Ldb, g.af); g.v(Mdb, g.af); g.Va(V8, g.J); g.k = V8.prototype; g.k.x3 = function () { this.yh = Math.min(3E5, 2 * this.yh); this.B(); this.u && this.start() };
    g.k.start = function () { var a = this.yh + 15E3 * Math.random(); g.Yn(this.j, a); this.u = Date.now() + a };
    g.k.stop = function () { this.j.stop(); this.u = 0 };
    g.k.isActive = function () { return this.j.isActive() };
    g.k.reset = function () { this.j.stop(); this.yh = 5E3 }; Odb.prototype.flush = function (a, b) { a = void 0 === a ? [] : a; b = void 0 === b ? !1 : b; if (g.S("enable_client_streamz_web")) { a = g.r(a); for (var c = a.next(); !c.done; c = a.next())c = g.mea(c.value), c = { serializedIncrementBatch: g.xc(g.Je(c, rgb)) }, g.cpa("streamzIncremented", c, { JK: b }) } }; var W8; g.Va(Pdb, Jdb); g.k = Pdb.prototype; g.k.subscribe = function (a, b, c) { return this.B.subscribe(a, b, c) };
    g.k.unsubscribe = function (a, b, c) { return this.B.unsubscribe(a, b, c) };
    g.k.Og = function (a) { return this.B.Og(a) };
    g.k.ma = function (a, b) { return this.B.ma.apply(this.B, arguments) };
    g.k.dispose = function () { this.ea || (this.ea = !0, g.Ye(this.B), this.disconnect(), g.Ye(this.u), this.u = null, this.qa = function () { return "" }) };
    g.k.isDisposed = function () { return this.ea };
    g.k.connect = function (a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.Z = ""; this.u.stop(); this.I = a || null; this.D = b || 0; a = this.Aa + "/test"; b = this.Aa + "/bind"; var d = new sdb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Qa), e = this.j; e && (e.ph = null); d.ph = this; this.j = d; Qdb(this); if (this.j) { d = g.O("ID_TOKEN"); var f = this.j.Ol || {}; d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"]; this.j.Ol = f } e ? (3 != e.getState() && 0 == Adb(e) || e.getState(), this.j.connect(a, b, this.J, e.C, e.Fu)) : c ? this.j.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.j.connect(a, b, this.J)
        }
    };
    g.k.disconnect = function (a) { this.S = a || 0; this.u.stop(); Qdb(this); this.j && (3 == this.j.getState() && Ddb(this.j), this.j.disconnect()); this.S = 0 };
    g.k.sendMessage = function (a, b) { a = { _sc: a }; b && g.If(a, b); this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.dw() && (Qdb(this), zdb(this.j, a)) };
    g.k.CM = function () { this.u.reset(); this.I = null; this.D = 0; if (this.C.length) { var a = this.C; this.C = []; for (var b = 0, c = a.length; b < c; ++b)zdb(this.j, a[b]) } this.ma("handlerOpened"); Sbb(this.La, "BROWSER_CHANNEL") };
    g.k.AM = function (a) { var b = 2 == a && 401 == this.j.Pl; 4 == a || b || this.u.start(); this.ma("handlerError", a, b); Ybb(this.Ba, "BROWSER_CHANNEL") };
    g.k.EF = function (a, b) { if (!this.u.isActive()) this.ma("handlerClosed"); else if (b) for (var c = 0, d = b.length; c < d; ++c) { var e = b[c].map; e && this.C.push(e) } Ubb(this.ya, "BROWSER_CHANNEL"); a && this.Ya.j.HF("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length); b && this.eb.j.HF("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length) };
    g.k.DM = function () { var a = { v: 2 }; this.Z && (a.gsessionid = this.Z); 0 != this.D && (a.ui = "" + this.D); 0 != this.S && (a.ui = "" + this.S); this.I && g.If(a, this.I); return a };
    g.k.BM = function (a) { "S" == a[0] ? this.Z = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.ma("handlerMessage", new Ndb(a[0], a[1])); Wbb(this.Ia, "BROWSER_CHANNEL") };
    g.k.dw = function () { return !!this.j && 3 == this.j.getState() };
    g.k.Wo = function (a) { (this.J.loungeIdToken = a) || this.u.stop(); if (this.Wa && this.j) { var b = this.j.Ol || {}; a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"]; this.j.Ol = b } };
    g.k.Qp = function () { return this.J.id };
    g.k.Xp = function () { return this.u.isActive() ? this.u.u - Date.now() : NaN };
    g.k.Gt = function () { var a = this.u; g.Zn(a.j); a.start() };
    g.k.M4 = function () { this.u.isActive(); 0 == Adb(this.j) && this.connect(this.I, this.D) }; X8.prototype.C = function (a, b, c, d) { b ? a(d) : a({ text: c.responseText }) };
    X8.prototype.B = function (a, b) { a(Error("Request error: " + b.status)) };
    X8.prototype.D = function (a) { a(Error("request timed out")) }; g.v(Sdb, g.Uf); g.k = Sdb.prototype; g.k.connect = function (a, b, c) { this.Xc.connect(a, b, c) };
    g.k.disconnect = function (a) { this.Xc.disconnect(a) };
    g.k.Gt = function () { this.Xc.Gt() };
    g.k.Qp = function () { return this.Xc.Qp() };
    g.k.Xp = function () { return this.Xc.Xp() };
    g.k.dw = function () { return this.Xc.dw() };
    g.k.mV = function () { this.dispatchEvent("channelOpened"); var a = this.Xc, b = this.j; g.Nz("yt-remote-session-browser-channel", { firstTestResults: [""], secondTestResults: !a.j.TE, sessionId: a.j.C, arrayId: a.j.Fu }); g.Nz("yt-remote-session-screen-id", b); a = g8(); b = h8(); g.Sb(a, b) || a.push(b); wbb(a); ybb() };
    g.k.kV = function () { this.dispatchEvent("channelClosed") };
    g.k.lV = function (a) { this.dispatchEvent(new Ldb(a)) };
    g.k.onError = function (a) { this.dispatchEvent(new Mdb(a ? 1 : 0)) };
    g.k.sendMessage = function (a, b) { this.Xc.sendMessage(a, b) };
    g.k.Wo = function (a) { this.Xc.Wo(a) };
    g.k.dispose = function () { this.Xc.dispose() }; g.k = Tdb.prototype;
    g.k.connect = function (a, b) {
        a = void 0 === a ? {} : a; b = void 0 === b ? 0 : b; 2 !== this.I && (this.B.stop(), this.S = a, this.J = b, Vdb(this), (a = g.O("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.Q_ && (this.u.mdxVersion = "" + this.j.Q_), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities)), 0 !== this.J ? this.u.ui = "" + this.J : delete this.u.ui,
            Object.assign(this.u, this.S), this.channel = new G8(this.pathPrefix, { e_: "gsessionid", T_: this.C, U_: this.u }), this.channel.open(), this.I = 2, Udb(this))
    };
    g.k.disconnect = function (a) { this.Z = void 0 === a ? 0 : a; this.B.stop(); Vdb(this); this.channel && (0 !== this.Z ? this.u.ui = "" + this.Z : delete this.u.ui, this.channel.close()); this.Z = 0 };
    g.k.Xp = function () { return this.B.isActive() ? this.B.u - Date.now() : NaN };
    g.k.Gt = function () { var a = this.B; g.Zn(a.j); a.start() };
    g.k.sendMessage = function (a, b) { this.channel && (Vdb(this), a = Object.assign({}, { _sc: a }, b), this.channel.send(a)) };
    g.k.Wo = function (a) { a || this.B.stop(); a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"] };
    g.k.Qp = function () { return this.j ? this.j.id : "" };
    g.k.ma = function (a) { return this.D.ma.apply(this.D, [a].concat(g.t(g.za.apply(1, arguments)))) };
    g.k.subscribe = function (a, b, c) { return this.D.subscribe(a, b, c) };
    g.k.unsubscribe = function (a, b, c) { return this.D.unsubscribe(a, b, c) };
    g.k.Og = function (a) { return this.D.Og(a) };
    g.k.dispose = function () { this.ea || (this.ea = !0, g.Ye(this.D), this.disconnect(), g.Ye(this.B), this.Aa = function () { return "" }) };
    g.k.isDisposed = function () { return this.ea }; g.v(Wdb, g.Uf); g.k = Wdb.prototype; g.k.connect = function (a, b) { this.j.connect(a, b) };
    g.k.disconnect = function (a) { this.j.disconnect(a) };
    g.k.Gt = function () { this.j.Gt() };
    g.k.Qp = function () { return this.j.Qp() };
    g.k.Xp = function () { return this.j.Xp() };
    g.k.dw = function () { return 3 === this.j.I };
    g.k.pV = function () { this.dispatchEvent("channelOpened") };
    g.k.nV = function () { this.dispatchEvent("channelClosed") };
    g.k.oV = function (a) { this.dispatchEvent(new Ldb(a)) };
    g.k.onError = function () { this.dispatchEvent(new Mdb(401 === this.j.Jg ? 1 : 0)) };
    g.k.sendMessage = function (a, b) { this.j.sendMessage(a, b) };
    g.k.Wo = function (a) { this.j.Wo(a) };
    g.k.dispose = function () { this.j.dispose() }; var deb = Date.now(), Z8 = null, c9 = Array(50), b9 = -1, d9 = !1; g.Va(e9, g.az); e9.prototype.qj = function () { return this.screens };
    e9.prototype.contains = function (a) { return !!tbb(this.screens, a) };
    e9.prototype.get = function (a) { return a ? f8(this.screens, a) : null };
    e9.prototype.info = function (a) { $8(this.I, a) }; g.v(heb, g.az); g.k = heb.prototype; g.k.start = function () { !this.j && isNaN(this.xc) && this.OR() };
    g.k.stop = function () { this.j && (this.j.abort(), this.j = null); isNaN(this.xc) || (g.xu(this.xc), this.xc = NaN) };
    g.k.ra = function () { this.stop(); g.az.prototype.ra.call(this) };
    g.k.OR = function () { this.xc = NaN; this.j = g.Au(Y8(this.B, "/pairing/get_screen"), { method: "POST", postParams: { pairing_code: this.J }, timeout: 5E3, onSuccess: (0, g.Pa)(this.rV, this), onError: (0, g.Pa)(this.qV, this), onTimeout: (0, g.Pa)(this.sV, this) }) };
    g.k.rV = function (a, b) { this.j = null; a = b.screen || {}; a.dialId = this.C; a.name = this.I; b = -1; this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs); this.ma("pairingComplete", new c8(a), b) };
    g.k.qV = function (a) { this.j = null; a.status && 404 == a.status ? this.u >= sgb.length ? this.ma("pairingFailed", Error("DIAL polling timed out")) : (a = sgb[this.u], this.xc = g.vu((0, g.Pa)(this.OR, this), a), this.u++) : this.ma("pairingFailed", Error("Server error " + a.status)) };
    g.k.sV = function () { this.j = null; this.ma("pairingFailed", Error("Server not responding")) };
    var sgb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4]; g.Va(g9, e9); g.k = g9.prototype; g.k.start = function () { f9(this) && this.ma("screenChange"); !g.Oz("yt-remote-lounge-token-expiration") && ieb(this); g.xu(this.j); this.j = g.vu((0, g.Pa)(this.start, this), 1E4) };
    g.k.add = function (a, b) { f9(this); eeb(this, a); h9(this, !1); this.ma("screenChange"); b(a); a.token || ieb(this) };
    g.k.remove = function (a, b) { var c = f9(this); geb(this, a) && (h9(this, !1), c = !0); b(a); c && this.ma("screenChange") };
    g.k.SE = function (a, b, c, d) { var e = f9(this), f = this.get(a.id); f ? (f.name != b && (f.name = b, h9(this, !1), e = !0), c(a)) : d(Error("no such local screen.")); e && this.ma("screenChange") };
    g.k.ra = function () { g.xu(this.j); g9.Re.ra.call(this) };
    g.k.FZ = function (a) { f9(this); var b = this.screens.length; a = a && a.screens || []; for (var c = 0, d = a.length; c < d; ++c) { var e = a[c], f = this.get(e.screenId); f && (f.token = e.loungeToken, --b) } h9(this, !b); b && $8(this.I, "Missed " + b + " lounge tokens.") };
    g.k.EZ = function (a) { $8(this.I, "Requesting lounge tokens failed: " + a) }; g.v(keb, g.az); g.k = keb.prototype; g.k.start = function () { var a = parseInt(g.Oz("yt-remote-fast-check-period") || "0", 10); (this.C = g.Ra() - 144E5 < a ? 0 : a) ? i9(this) : (this.C = g.Ra() + 3E5, g.Nz("yt-remote-fast-check-period", this.C), this.vK()) };
    g.k.isEmpty = function () { return g.vf(this.j) };
    g.k.update = function () {
        jeb("Updating availability on schedule."); var a = this.I(), b = g.mf(this.j, function (c, d) { return c && !!f8(a, d) }, this);
        neb(this, b)
    };
    g.k.ra = function () { g.xu(this.B); this.B = NaN; this.u && (this.u.abort(), this.u = null); g.az.prototype.ra.call(this) };
    g.k.vK = function () { g.xu(this.B); this.B = NaN; this.u && this.u.abort(); var a = oeb(this); if (gbb(a)) { var b = Y8(this.D, "/pairing/get_screen_availability"); this.u = Rdb(this.D, b, { lounge_token: g.rf(a).join(",") }, (0, g.Pa)(this.Y2, this, a), (0, g.Pa)(this.X2, this)) } else neb(this, {}), i9(this) };
    g.k.Y2 = function (a, b) { this.u = null; var c = g.rf(oeb(this)); if (g.mc(c, g.rf(a))) { b = b.screens || []; c = {}; for (var d = 0, e = b.length; d < e; ++d)c[a[b[d].loungeToken]] = "online" == b[d].status; neb(this, c); i9(this) } else this.hf("Changing Screen set during request."), this.vK() };
    g.k.X2 = function (a) { this.hf("Screen availability failed: " + a); this.u = null; i9(this) };
    g.k.hf = function (a) { $8("OnlineScreenService", a) }; g.Va(j9, e9); g.k = j9.prototype; g.k.start = function () { this.u.start(); this.j.start(); this.screens.length && (this.ma("screenChange"), this.j.isEmpty() || this.ma("onlineScreenChange")) };
    g.k.add = function (a, b, c) { this.u.add(a, b, c) };
    g.k.remove = function (a, b, c) { this.u.remove(a, b, c); this.j.update() };
    g.k.SE = function (a, b, c, d) { this.u.contains(a) ? this.u.SE(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, $8(this.I, a), d(Error(a))) };
    g.k.qj = function (a) { return a ? this.screens : g.ac(this.screens, g.um(this.B, function (b) { return !this.contains(b) }, this)) };
    g.k.EM = function () { return g.um(this.qj(!0), function (a) { return !!this.j.j[a.id] }, this) };
    g.k.FM = function (a, b, c, d, e, f) {
        var h = this; this.info("getDialScreenByPairingCode " + a + " / " + b); var l = new heb(this.C, a, b, c, d); l.subscribe("pairingComplete", function (m, n) { g.Ye(l); e(k9(h, m), n) });
        l.subscribe("pairingFailed", function (m) { g.Ye(l); f(m) });
        l.start(); return (0, g.Pa)(l.stop, l)
    };
    g.k.tV = function (a, b, c, d) {
        g.Au(Y8(this.C, "/pairing/get_screen"), {
            method: "POST", postParams: { pairing_code: a }, timeout: 5E3, onSuccess: (0, g.Pa)(function (e, f) { e = new c8(f.screen || {}); if (!e.name || seb(this, e.name)) { a: { f = e.name; for (var h = 2, l = b(f, h); seb(this, l);) { h++; if (20 < h) break a; l = b(f, h) } f = l } e.name = f } c(k9(this, e)) }, this),
            onError: (0, g.Pa)(function (e) { d(Error("pairing request failed: " + e.status)) }, this),
            onTimeout: (0, g.Pa)(function () { d(Error("pairing request timed out.")) }, this)
        })
    };
    g.k.ra = function () { g.Ye(this.u); g.Ye(this.j); j9.Re.ra.call(this) };
    g.k.OZ = function () { ueb(this); this.ma("screenChange"); this.j.update() };
    j9.prototype.dispose = j9.prototype.dispose; g.Va(l9, g.az); g.k = l9.prototype; g.k.getScreen = function () { return this.C };
    g.k.Wh = function (a) { this.isDisposed() || (a && (n9(this, "" + a), this.ma("sessionFailed")), this.C = null, this.ma("sessionScreen", null)) };
    g.k.info = function (a) { $8(this.Ba, a) };
    g.k.GM = function () { return null };
    g.k.NK = function (a) { var b = this.j; a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null; chrome.cast.setReceiverDisplayStatus(b, (0, g.Pa)(function () { this.info("Updated receiver status for " + b.friendlyName + ": " + a) }, this), (0, g.Pa)(function () { n9(this, "Failed to update receiver status for: " + b.friendlyName) }, this)) };
    g.k.ra = function () { this.NK(""); l9.Re.ra.call(this) }; g.v(o9, l9); g.k = o9.prototype; g.k.MK = function (a) { if (this.u) { if (this.u == a) return; n9(this, "Overriding cast session with new session object"); Geb(this); this.Aa = !1; this.Z = "unknown"; this.u.removeUpdateListener(this.qa); this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya) } this.u = a; this.u.addUpdateListener(this.qa); this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya); Beb(this, "getMdxSessionStatus") };
    g.k.pw = function (a) { this.info("launchWithParams no-op for Cast: " + g.di(a)) };
    g.k.stop = function () { this.u ? this.u.stop((0, g.Pa)(function () { this.Wh() }, this), (0, g.Pa)(function () { this.Wh(Error("Failed to stop receiver app.")) }, this)) : this.Wh(Error("Stopping cast device without session.")) };
    g.k.NK = function () { };
    g.k.ra = function () { this.info("disposeInternal"); Geb(this); this.u && (this.u.removeUpdateListener(this.qa), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya)); this.u = null; l9.prototype.ra.call(this) };
    g.k.P3 = function (a, b) { if (!this.isDisposed()) if (b) if (b = $7(b), g.Ma(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.di(b)), a) { case "mdxSessionStatus": yeb(this, b); break; case "loungeToken": Ceb(this, b); break; default: n9(this, "Unknown youtube message: " + a) } else n9(this, "Unable to parse message."); else n9(this, "No data in message.") };
    g.k.kP = function (a, b, c, d) { g.xu(this.S); this.S = 0; reb(this.B, this.j.label, a, this.j.friendlyName, (0, g.Pa)(function (e) { e ? b(e) : 0 <= d ? (n9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.S = g.vu((0, g.Pa)(this.kP, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen.")) }, this), c) };
    g.k.GM = function () { return this.u };
    g.k.uV = function (a) { this.isDisposed() || a || (n9(this, "Cast session died."), this.Wh()) }; g.v(p9, l9); g.k = p9.prototype; g.k.MK = function (a) { this.u = a; this.u.addUpdateListener(this.Ia) };
    g.k.pw = function (a) { this.La = a; this.ea() };
    g.k.stop = function () { Oeb(this); this.u ? this.u.stop((0, g.Pa)(this.Wh, this, null), (0, g.Pa)(this.Wh, this, "Failed to stop DIAL device.")) : this.Wh() };
    g.k.ra = function () { Oeb(this); this.u && this.u.removeUpdateListener(this.Ia); this.u = null; l9.prototype.ra.call(this) };
    g.k.vV = function (a) { this.isDisposed() || a || (n9(this, "DIAL session died."), this.D(), this.D = function () { }, this.Wh()) }; g.v(s9, l9); s9.prototype.stop = function () { this.Wh() };
    s9.prototype.MK = function () { };
    s9.prototype.pw = function () { g.xu(this.u); this.u = NaN; var a = f8(this.B.qj(), this.j.label); a ? m9(this, a) : this.Wh(Error("No such screen")) };
    s9.prototype.ra = function () { g.xu(this.u); this.u = NaN; l9.prototype.ra.call(this) }; g.v(t9, g.az); g.k = t9.prototype;
    g.k.init = function (a, b) {
        chrome.cast.timeout.requestSession = 3E4; var c = new chrome.cast.SessionRequest(this.S, [chrome.cast.Capability.AUDIO_OUT]); this.Z || (c.dialRequest = new chrome.cast.DialRequest("YouTube")); var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED; a = a || this.I ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION; var e = (0, g.Pa)(this.J2, this); c = new chrome.cast.ApiConfig(c, (0, g.Pa)(this.wR, this), e, d, a); c.customDialLaunchCallback = (0, g.Pa)(this.v1, this);
        chrome.cast.initialize(c, (0, g.Pa)(function () { this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), aeb(), this.u.subscribe("onlineScreenChange", (0, g.Pa)(this.HM, this)), this.B = Reb(this), chrome.cast.setCustomReceivers(this.B, function () { }, (0, g.Pa)(function (f) { this.hf("Failed to set initial custom receivers: " + g.di(f)) }, this)), this.ma("yt-remote-cast2-availability-change", v9(this)), b(!0)) }, this), (0, g.Pa)(function (f) {
            this.hf("Failed to initialize API: " + g.di(f));
            b(!1)
        }, this))
    };
    g.k.X4 = function (a, b) {
        u9("Setting connected screen ID: " + a + " -> " + b); if (this.j) { var c = this.j.getScreen(); if (!a || c && c.id != a) u9("Unsetting old screen status: " + this.j.j.friendlyName), w9(this, null) } if (a && b) {
            if (!this.j) {
                c = f8(this.u.qj(), a); if (!c) { u9("setConnectedScreenStatus: Unknown screen."); return } if ("shortLived" == c.idType) { u9("setConnectedScreenStatus: Screen with id type to be short lived."); return } a = Peb(this, c); a || (u9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function () { }, (0, g.Pa)(function (d) { this.hf("Failed to set initial custom receivers: " + g.di(d)) }, this)));
                u9("setConnectedScreenStatus: new active receiver: " + a.friendlyName); w9(this, new s9(this.u, a), !0)
            } this.j.NK(b)
        } else u9("setConnectedScreenStatus: no screen.")
    };
    g.k.Y4 = function (a) { this.isDisposed() ? this.hf("Setting connection data on disposed cast v2") : this.j ? this.j.pw(a) : this.hf("Setting connection data without a session") };
    g.k.xV = function () { this.isDisposed() ? this.hf("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), w9(this, null)) : u9("Stopping non-existing session") };
    g.k.requestSession = function () { chrome.cast.requestSession((0, g.Pa)(this.wR, this), (0, g.Pa)(this.d3, this)) };
    g.k.ra = function () { this.u.unsubscribe("onlineScreenChange", (0, g.Pa)(this.HM, this)); window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D); var a = Ydb, b = g.Ga("yt.mdx.remote.debug.handlers_"); g.Xb(b || [], a); g.Ye(this.j); g.az.prototype.ra.call(this) };
    g.k.hf = function (a) { $8("Controller", a) };
    g.k.yR = function (a, b) { this.j == a && (b || w9(this, null), this.ma("yt-remote-cast2-session-change", b)) };
    g.k.G2 = function (a, b) {
        if (!this.isDisposed()) if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), u9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
            case chrome.cast.ReceiverAction.CAST: if (this.j) if (this.j.j.label != a.label) u9("onReceiverAction_: Stopping active receiver: " + this.j.j.friendlyName), this.j.stop(); else { u9("onReceiverAction_: Casting to active receiver."); this.j.getScreen() && this.ma("yt-remote-cast2-session-change", this.j.getScreen()); break } switch (a.receiverType) {
                case chrome.cast.ReceiverType.CUSTOM: w9(this,
                    new s9(this.u, a)); break; case chrome.cast.ReceiverType.DIAL: w9(this, new p9(this.u, a, this.C, this.config_)); break; case chrome.cast.ReceiverType.CAST: w9(this, new o9(this.u, a, this.config_)); break; default: this.hf("Unknown receiver type: " + a.receiverType)
            }break; case chrome.cast.ReceiverAction.STOP: this.j && this.j.j.label == a.label ? this.j.stop() : this.hf("Stopping receiver w/o session: " + a.friendlyName)
        } else this.hf("onReceiverAction_ called without receiver.")
    };
    g.k.v1 = function (a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed")); var b = a.receiver; b.receiverType != chrome.cast.ReceiverType.DIAL && (this.hf("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL); var c = this.j ? this.j.j : null; if (!c || c.label != b.label) return this.hf("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch")); if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.getScreen()) return u9("Reselecting dial screen."),
                this.ma("yt-remote-cast2-session-change", this.j.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1)); this.hf('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName); w9(this, new p9(this.u, b, this.C, this.config_))
        } b = this.j; b.S = a; b.S.appState == chrome.cast.DialAppState.RUNNING ? (a = b.S.extraData || {}, c = a.screenId || null, q9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Leb(b, {
            name: b.j.friendlyName, screenId: a.screenId, loungeToken: a.loungeToken, dialId: b.S.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.eu(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = Meb(b, c)) : a = Meb(b, c)) : a = Jeb(b); return a
    };
    g.k.wR = function (a) {
        var b = this; if (!this.isDisposed() && !this.I) {
            u9("New cast session ID: " + a.sessionId); var c = a.receiver; if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j) if (c.receiverType == chrome.cast.ReceiverType.CAST) u9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), w9(this, new o9(this.u, c, this.config_), !0); else { this.hf("Got non-cast session without previous mdx receiver event, or mdx resume."); return } var d = this.j.j, e = f8(this.u.qj(),
                    d.label); e && d8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (u9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.Ye(this.j), this.j = new o9(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Pa)(this.yR, this, this.j)), this.j.subscribe("sessionFailed", function () { return Qeb(b, b.j) }), this.j.pw(null));
                this.j.MK(a)
            }
        }
    };
    g.k.wV = function () { return this.j ? this.j.GM() : null };
    g.k.d3 = function (a) { this.isDisposed() || (this.hf("Failed to estabilish a session: " + g.di(a)), a.code != chrome.cast.ErrorCode.CANCEL && w9(this, null), this.ma("yt-remote-cast2-session-failed")) };
    g.k.J2 = function (a) { u9("Receiver availability updated: " + a); if (!this.isDisposed()) { var b = v9(this); this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE; v9(this) != b && this.ma("yt-remote-cast2-availability-change", v9(this)) } };
    g.k.HM = function () { this.isDisposed() || (this.B = Reb(this), u9("Updating custom receivers: " + g.di(this.B)), chrome.cast.setCustomReceivers(this.B, function () { }, (0, g.Pa)(function () { this.hf("Failed to set custom receivers.") }, this)), this.ma("yt-remote-cast2-availability-change", v9(this))) };
    t9.prototype.setLaunchParams = t9.prototype.Y4; t9.prototype.setConnectedScreenStatus = t9.prototype.X4; t9.prototype.stopSession = t9.prototype.xV; t9.prototype.getCastSession = t9.prototype.wV; t9.prototype.requestSession = t9.prototype.requestSession; t9.prototype.init = t9.prototype.init; t9.prototype.dispose = t9.prototype.dispose; var $eb = []; g.k = D9.prototype;
    g.k.reset = function (a) {
        this.listId = ""; this.index = -1; this.videoId = ""; ffb(this); this.volume = -1; this.muted = !1; a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Rm = a.hasPrevious, this.hasNext = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.S = a.loadedTime, this.B = a.liveIngestionTime, this.u =
            !isNaN(this.B))
    };
    g.k.Tc = function () { return 1 == this.playerState };
    g.k.isAdPlaying = function () { return 1081 == this.playerState };
    g.k.Cj = function (a) { this.D = isNaN(a) ? 0 : a };
    g.k.getDuration = function () { return this.u ? this.D + E9(this) : this.D };
    g.k.clone = function () { return new D9(gfb(this)) }; g.v(J9, g.az); g.k = J9.prototype; g.k.getState = function () { return this.B };
    g.k.Xp = function () { return this.C.getReconnectTimeout() };
    g.k.Gt = function () { this.C.reconnect() };
    g.k.play = function () { L9(this) ? (this.j ? this.j.play(null, g.Yf, P9(this, "play")) : O9(this, "play"), jfb(this, 1, G9(K9(this))), this.ma("remotePlayerChange")) : M9(this, this.play) };
    g.k.pause = function () { L9(this) ? (this.j ? this.j.pause(null, g.Yf, P9(this, "pause")) : O9(this, "pause"), jfb(this, 2, G9(K9(this))), this.ma("remotePlayerChange")) : M9(this, this.pause) };
    g.k.seekTo = function (a) { if (L9(this)) { if (this.j) { var b = K9(this), c = new chrome.cast.media.SeekRequest; c.currentTime = a; b.Tc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE; this.j.seek(c, g.Yf, P9(this, "seekTo", { newTime: a })) } else O9(this, "seekTo", { newTime: a }); jfb(this, 3, a); this.ma("remotePlayerChange") } else M9(this, g.Qa(this.seekTo, a)) };
    g.k.stop = function () { if (L9(this)) { this.j ? this.j.stop(null, g.Yf, P9(this, "stopVideo")) : O9(this, "stopVideo"); var a = K9(this); a.index = -1; a.videoId = ""; ffb(a); N9(this, a); this.ma("remotePlayerChange") } else M9(this, this.stop) };
    g.k.setVolume = function (a, b) {
        if (L9(this)) {
            var c = K9(this); if (this.u) { if (c.volume != a) { var d = Math.round(a) / 100; this.u.setReceiverVolumeLevel(d, (0, g.Pa)(function () { a9("set receiver volume: " + d) }, this), (0, g.Pa)(function () { this.hf("failed to set receiver volume.") }, this)) } c.muted != b && this.u.setReceiverMuted(b, (0, g.Pa)(function () { a9("set receiver muted: " + b) }, this), (0, g.Pa)(function () { this.hf("failed to set receiver muted.") }, this)) } else {
                var e = {
                    volume: a,
                    muted: b
                }; -1 != c.volume && (e.delta = a - c.volume); O9(this, "setVolume", e)
            } c.muted = b; c.volume = a; N9(this, c)
        } else M9(this, g.Qa(this.setVolume, a, b))
    };
    g.k.IM = function (a, b) { if (L9(this)) { var c = K9(this); a = { videoId: a }; b && (c.trackData = { trackName: b.name, languageCode: b.languageCode, sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "", languageName: b.languageName, kind: b.kind }, a.style = g.di(b.style), g.If(a, c.trackData)); O9(this, "setSubtitlesTrack", a); N9(this, c) } else M9(this, g.Qa(this.IM, a, b)) };
    g.k.setAudioTrack = function (a, b) { L9(this) ? (b = b.getLanguageInfo().getId(), O9(this, "setAudioTrack", { videoId: a, audioTrackId: b }), a = K9(this), a.audioTrackId = b, N9(this, a)) : M9(this, g.Qa(this.setAudioTrack, a, b)) };
    g.k.playVideo = function (a, b, c, d, e, f, h) { d = void 0 === d ? null : d; e = void 0 === e ? null : e; f = void 0 === f ? null : f; h = void 0 === h ? null : h; var l = K9(this), m = { videoId: a }; void 0 !== c && (m.currentIndex = c); H9(l, a, c || 0); void 0 !== b && (F9(l, b), m.currentTime = b); d && (m.listId = d); e && (m.playerParams = e); f && (m.clickTrackingParams = f); h && (m.locationInfo = g.di(h)); O9(this, "setPlaylist", m); d || N9(this, l) };
    g.k.ZD = function (a, b) { if (L9(this)) { if (a && b) { var c = K9(this); H9(c, a, b); N9(this, c) } O9(this, "previous") } else M9(this, g.Qa(this.ZD, a, b)) };
    g.k.nextVideo = function (a, b) { if (L9(this)) { if (a && b) { var c = K9(this); H9(c, a, b); N9(this, c) } O9(this, "next") } else M9(this, g.Qa(this.nextVideo, a, b)) };
    g.k.yv = function () { if (L9(this)) { O9(this, "clearPlaylist"); var a = K9(this); a.reset(); N9(this, a); this.ma("remotePlayerChange") } else M9(this, this.yv) };
    g.k.FO = function () { L9(this) ? O9(this, "dismissAutoplay") : M9(this, this.FO) };
    g.k.dispose = function () { if (3 != this.B) { var a = this.B; this.B = 3; this.ma("proxyStateChange", a, this.B) } g.az.prototype.dispose.call(this) };
    g.k.ra = function () { ifb(this); this.C = null; this.D.clear(); I9(this, null); g.az.prototype.ra.call(this) };
    g.k.PK = function (a) { if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) { var b = this.B; this.B = a; this.ma("proxyStateChange", b, a); if (1 == a) for (; !this.D.isEmpty();)b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this); else 3 == a && this.dispose() } };
    g.k.E2 = function (a, b) { this.ma(a, b) };
    g.k.g1 = function (a) { if (!a) this.Tz(null), I9(this, null); else if (this.u.receiver.volume) { a = this.u.receiver.volume; var b = K9(this), c = Math.round(100 * a.level || 0); if (b.volume != c || b.muted != a.muted) a9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, N9(this, b) } };
    g.k.Tz = function (a) { a9("Cast media: " + !!a); this.j && this.j.removeUpdateListener(this.S); if (this.j = a) this.j.addUpdateListener(this.S), kfb(this), this.ma("remotePlayerChange") };
    g.k.f1 = function (a) { a ? (kfb(this), this.ma("remotePlayerChange")) : this.Tz(null) };
    g.k.mL = function () { O9(this, "sendDebugCommand", { debugCommand: "stats4nerds " }) };
    g.k.l1 = function () { var a = cfb(); a && I9(this, a) };
    g.k.hf = function (a) { $8("CP", a) }; g.v(S9, g.az); g.k = S9.prototype;
    g.k.connect = function (a, b) {
        if (b) {
            var c = b.listId, d = b.videoId, e = b.videoIds, f = b.playerParams, h = b.clickTrackingParams, l = b.index, m = { videoId: d }, n = b.currentTime, p = b.locationInfo; b = b.loopMode; void 0 !== n && (m.currentTime = 5 >= n ? 0 : n); f && (m.playerParams = f); p && (m.locationInfo = p); h && (m.clickTrackingParams = h); c && (m.listId = c); e && 0 < e.length && (m.videoIds = e.join(",")); void 0 !== l && (m.currentIndex = l); this.Ia && (m.loopMode = b || "LOOP_MODE_OFF"); c && (this.j.listId = c); this.j.videoId = d; this.j.index = l || 0; this.j.state = 3; F9(this.j,
                n); this.D = "UNSUPPORTED"; c = this.Ia ? "setInitialState" : "setPlaylist"; Q9("Connecting with " + c + " and params: " + g.di(m)); this.u.connect({ method: c, params: g.di(m) }, a, zbb())
        } else Q9("Connecting without params"), this.u.connect({}, a, zbb()); ofb(this)
    };
    g.k.Wo = function (a) { this.u.Wo(a) };
    g.k.dispose = function () { this.isDisposed() || (g.Fa("yt.mdx.remote.remoteClient_", null), this.ma("beforeDispose"), R9(this, 3)); g.az.prototype.dispose.call(this) };
    g.k.ra = function () { pfb(this); rfb(this); qfb(this); g.xu(this.S); this.S = NaN; g.xu(this.Z); this.Z = NaN; this.C = null; g.zx(this.ea); this.ea.length = 0; this.u.dispose(); g.az.prototype.ra.call(this); this.D = this.J = this.B = this.j = this.u = null };
    g.k.UP = function (a) { if (!this.B || 0 === this.B.length) return !1; for (var b = g.r(this.B), c = b.next(); !c.done; c = b.next())if (!c.value.capabilities.has(a)) return !1; return !0 };
    g.k.wZ = function () { var a = 3; this.isDisposed() || (a = 0, isNaN(this.Xy()) ? this.u.dw() && isNaN(this.I) && (a = 1) : a = 2); return a };
    g.k.Hv = function (a) { Q9("Disconnecting with " + a); g.Fa("yt.mdx.remote.remoteClient_", null); pfb(this); this.ma("beforeDisconnect", a); 1 == a && i8(); this.u.disconnect(a); this.dispose() };
    g.k.uZ = function () { var a = this.j; this.C && (a = this.j.clone(), H9(a, this.C, a.index)); return gfb(a) };
    g.k.Z4 = function (a) {
        var b = this, c = new D9(a); c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.xu(this.S), this.S = g.vu(function () { if (b.C) { var e = b.C; b.C = null; b.j.videoId != e && T9(b, "getNowPlaying") } }, 5E3));
        var d = []; this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange"); this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && G9(this.j) == G9(c) && g.di(this.j.trackData) == g.di(c.trackData) || d.push("remotePlayerChange"); this.j.reset(a); g.qc(d, function (e) { this.ma(e) }, this)
    };
    g.k.jP = function () {
        var a = this.u.Qp(), b = g.Pb(this.B, function (c) { return "REMOTE_CONTROL" == c.type && c.id != a });
        return b ? b.id : ""
    };
    g.k.Xy = function () { return this.u.Xp() };
    g.k.rZ = function () { return this.D || "UNSUPPORTED" };
    g.k.sZ = function () { return this.J || "" };
    g.k.yV = function () { !isNaN(this.Xy()) && this.u.Gt() };
    g.k.V4 = function (a, b) { T9(this, a, b); tfb(this) };
    g.k.JM = function () { var a = g.Ku("SID", "") || "", b = g.Ku("SAPISID", "") || "", c = g.Ku("__Secure-3PAPISID", "") || ""; if (!a && !b && !c) return ""; a = g.xc(g.ab(a), 2); b = g.xc(g.ab(b), 2); c = g.xc(g.ab(c), 2); return g.xc(g.ab(a + "," + b + "," + c), 2) };
    S9.prototype.subscribe = S9.prototype.subscribe; S9.prototype.unsubscribeByKey = S9.prototype.Og; S9.prototype.getProxyState = S9.prototype.wZ; S9.prototype.disconnect = S9.prototype.Hv; S9.prototype.getPlayerContextData = S9.prototype.uZ; S9.prototype.setPlayerContextData = S9.prototype.Z4; S9.prototype.getOtherConnectedRemoteId = S9.prototype.jP; S9.prototype.getReconnectTimeout = S9.prototype.Xy; S9.prototype.getAutoplayMode = S9.prototype.rZ; S9.prototype.getAutoplayVideoId = S9.prototype.sZ; S9.prototype.reconnect = S9.prototype.yV;
    S9.prototype.sendMessage = S9.prototype.V4; S9.prototype.getXsrfToken = S9.prototype.JM; S9.prototype.isCapabilitySupportedOnConnectedDevices = S9.prototype.UP; g.v(Ffb, e9); g.k = Ffb.prototype; g.k.qj = function (a) { return this.Vf.$_gs(a) };
    g.k.contains = function (a) { return !!this.Vf.$_c(a) };
    g.k.get = function (a) { return this.Vf.$_g(a) };
    g.k.start = function () { this.Vf.$_st() };
    g.k.add = function (a, b, c) { this.Vf.$_a(a, b, c) };
    g.k.remove = function (a, b, c) { this.Vf.$_r(a, b, c) };
    g.k.SE = function (a, b, c, d) { this.Vf.$_un(a, b, c, d) };
    g.k.ra = function () { for (var a = 0, b = this.j.length; a < b; ++a)this.Vf.$_ubk(this.j[a]); this.j.length = 0; this.Vf = null; e9.prototype.ra.call(this) };
    g.k.zV = function () { this.ma("screenChange") };
    g.k.g2 = function () { this.ma("onlineScreenChange") };
    j9.prototype.$_st = j9.prototype.start; j9.prototype.$_gspc = j9.prototype.tV; j9.prototype.$_gsppc = j9.prototype.FM; j9.prototype.$_c = j9.prototype.contains; j9.prototype.$_g = j9.prototype.get; j9.prototype.$_a = j9.prototype.add; j9.prototype.$_un = j9.prototype.SE; j9.prototype.$_r = j9.prototype.remove; j9.prototype.$_gs = j9.prototype.qj; j9.prototype.$_gos = j9.prototype.EM; j9.prototype.$_s = j9.prototype.subscribe; j9.prototype.$_ubk = j9.prototype.Og; var d$ = null, g$ = !1, U9 = null, V9 = null, Qfb = null, Z9 = []; g.v(Vfb, g.J); g.k = Vfb.prototype; g.k.ra = function () { g.J.prototype.ra.call(this); this.u.stop(); this.B.stop(); this.S.stop(); var a = this.uc; a.unsubscribe("proxyStateChange", this.vR, this); a.unsubscribe("remotePlayerChange", this.Yz, this); a.unsubscribe("remoteQueueChange", this.KD, this); a.unsubscribe("previousNextChange", this.sR, this); a.unsubscribe("nowAutoplaying", this.mR, this); a.unsubscribe("autoplayDismissed", this.PQ, this); this.uc = this.j = null };
    g.k.gk = function (a) {
        var b = g.za.apply(1, arguments); if (2 != this.uc.B) if (h$(this)) { if (!K9(this.uc).isAdPlaying() || "control_seek" !== a) switch (a) { case "control_toggle_play_pause": K9(this.uc).Tc() ? this.uc.pause() : this.uc.play(); break; case "control_play": this.uc.play(); break; case "control_pause": this.uc.pause(); break; case "control_seek": this.J.xF(b[0], b[1]); break; case "control_subtitles_set_track": Xfb(this, b[0]); break; case "control_set_audio_track": this.setAudioTrack(b[0]) } } else switch (a) {
            case "control_toggle_play_pause": case "control_play": case "control_pause": b =
                this.G.getCurrentTime(); i$(this, 0 === b ? void 0 : b); break; case "control_seek": i$(this, b[0]); break; case "control_subtitles_set_track": Xfb(this, b[0]); break; case "control_set_audio_track": this.setAudioTrack(b[0])
        }
    };
    g.k.d1 = function (a) { this.S.YU(a) };
    g.k.t6 = function (a) { this.gk("control_subtitles_set_track", g.vf(a) ? null : a) };
    g.k.RS = function () { var a = this.G.getOption("captions", "track"); g.vf(a) || Xfb(this, a) };
    g.k.hc = function (a) { this.j.hc(a, this.G.getVideoData().lengthSeconds) };
    g.k.P1 = function () { g.vf(this.C) || Yfb(this, this.C); this.D = !1 };
    g.k.vR = function (a, b) { this.B.stop(); 2 === b && this.KS() };
    g.k.Yz = function () {
        if (h$(this)) {
            this.u.stop(); var a = K9(this.uc); switch (a.playerState) { case 1080: case 1081: case 1084: case 1085: this.j.Ig = 1; break; case 1082: case 1083: this.j.Ig = 0; break; default: this.j.Ig = -1 }switch (a.playerState) {
                case 1081: case 1: this.Xb(new g.YJ(8)); this.JS(); break; case 1085: case 3: this.Xb(new g.YJ(9)); break; case 1083: case 0: this.Xb(new g.YJ(2)); this.J.stop(); this.hc(this.G.getVideoData().lengthSeconds); break; case 1084: this.Xb(new g.YJ(4)); break; case 2: this.Xb(new g.YJ(4)); this.hc(G9(a));
                    break; case -1: this.Xb(new g.YJ(64)); break; case -1E3: this.Xb(new g.YJ(128, { errorCode: "mdx.remoteerror", errorMessage: "This video is not available for remote playback.", mC: 2 }))
            }a = K9(this.uc).trackData; var b = this.C; (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, Yfb(this, a)); a = K9(this.uc); -1 === a.volume || Math.round(this.G.getVolume()) === a.volume && this.G.isMuted() === a.muted || this.Z.isActive() || this.wT()
        } else Wfb(this)
    };
    g.k.sR = function () { this.G.ma("mdxpreviousnextchange") };
    g.k.KD = function () { h$(this) || Wfb(this) };
    g.k.mR = function (a) { isNaN(a) || this.G.ma("mdxnowautoplaying", a) };
    g.k.PQ = function () { this.G.ma("mdxautoplaycanceled") };
    g.k.setAudioTrack = function (a) { h$(this) && this.uc.setAudioTrack(this.G.getVideoData(1).videoId, a) };
    g.k.seekTo = function (a, b) { -1 === K9(this.uc).playerState ? i$(this, a) : b && this.uc.seekTo(a) };
    g.k.wT = function () { var a = this; if (h$(this)) { var b = K9(this.uc); this.events.yc(this.ea); b.muted ? this.G.mute() : this.G.unMute(); this.G.setVolume(b.volume); this.ea = this.events.T(this.G, "onVolumeChange", function (c) { Tfb(a, c) }) } };
    g.k.JS = function () { this.u.stop(); if (!this.uc.isDisposed()) { var a = K9(this.uc); a.Tc() && this.Xb(new g.YJ(8)); this.hc(G9(a)); this.u.start() } };
    g.k.KS = function () { this.B.stop(); this.u.stop(); var a = this.uc.Xp(); 2 == this.uc.B && !isNaN(a) && this.B.start() };
    g.k.Xb = function (a) { this.B.stop(); var b = this.I; if (!g.cK(b, a)) { var c = g.V(a, 2); c !== g.V(this.I, 2) && this.G.Uw(c); this.I = a; $fb(this.j, b, a) } }; g.v(j$, g.W); j$.prototype.Qc = function () { this.j.show() };
    j$.prototype.Bb = function () { this.j.hide() };
    j$.prototype.u = function () { a8("mdx-privacy-popup-cancel"); this.Bb() };
    j$.prototype.B = function () { a8("mdx-privacy-popup-confirm"); this.Bb() }; g.v(k$, g.W); k$.prototype.onStateChange = function (a) { this.Vc(a.state) };
    k$.prototype.Vc = function (a) { if (3 === this.api.getPresentingPlayerType()) { var b = { RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name }; a = g.V(a, 128) ? g.FJ("Error on $RECEIVER_NAME", b) : a.Tc() || g.V(a, 4) ? g.FJ("Playing on $RECEIVER_NAME", b) : g.FJ("Connected to $RECEIVER_NAME", b); this.Oa("statustext", a); this.j.show() } else this.j.hide() }; g.v(l$, g.nR); l$.prototype.D = function () { var a = this.G.getOption("remote", "receivers"); a && 1 < a.length && !this.G.getOption("remote", "quickCast") ? (this.Kq = g.rc(a, this.j, this), g.oR(this, g.Ok(a, this.j)), a = this.G.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Sj(a), this.enable(!0)) : this.enable(!1) };
    l$.prototype.j = function (a) { return a.key };
    l$.prototype.Wk = function (a) { return "cast-selector-receiver" === a ? "Cast..." : this.Kq[a].name };
    l$.prototype.Pg = function (a) { g.nR.prototype.Pg.call(this, a); this.G.setOption("remote", "currentReceiver", this.Kq[a]); this.qb.Bb() }; g.v(Zfb, g.eO); g.k = Zfb.prototype;
    g.k.create = function () {
        var a = this.player.V(), b = g.QF(a); a = { device: "Desktop", app: "youtube-desktop", loadCastApiSetupScript: a.K("mdx_load_cast_api_bootstrap_script"), enableDialLoungeToken: a.K("enable_dial_short_lived_lounge_token"), enableCastLoungeToken: a.K("enable_cast_short_lived_lounge_token") }; Kfb(b, a); this.subscriptions.push(g.Sx("yt-remote-before-disconnect", this.Z0, this)); this.subscriptions.push(g.Sx("yt-remote-connection-change", this.K2, this)); this.subscriptions.push(g.Sx("yt-remote-receiver-availability-change", this.uR,
            this)); this.subscriptions.push(g.Sx("yt-remote-auto-connect", this.I2, this)); this.subscriptions.push(g.Sx("yt-remote-receiver-resumed", this.H2, this)); this.subscriptions.push(g.Sx("mdx-privacy-popup-confirm", this.m4, this)); this.subscriptions.push(g.Sx("mdx-privacy-popup-cancel", this.l4, this)); this.uR()
    };
    g.k.load = function () { this.player.cancelPlayback(); g.eO.prototype.load.call(this); this.Vj = new Vfb(this, this.player, this.uc); var a = (a = Sfb()) ? a.currentTime : 0; var b = Pfb() ? new J9(c$(), void 0) : null; 0 == a && b && (a = G9(K9(b))); 0 !== a && this.hc(a); $fb(this, this.Dd, this.Dd); this.player.Bn(6) };
    g.k.unload = function () { this.player.ma("mdxautoplaycanceled"); this.Fp = this.pn; g.Ze(this.Vj, this.uc); this.uc = this.Vj = null; g.eO.prototype.unload.call(this); this.player.Bn(5); m$(this) };
    g.k.ra = function () { g.Tx(this.subscriptions); g.eO.prototype.ra.call(this) };
    g.k.qn = function (a) { var b = g.za.apply(1, arguments); this.loaded && this.Vj.gk.apply(this.Vj, [a].concat(g.t(b))) };
    g.k.getAdState = function () { return this.Ig };
    g.k.Rm = function () { return this.uc ? K9(this.uc).Rm : !1 };
    g.k.hasNext = function () { return this.uc ? K9(this.uc).hasNext : !1 };
    g.k.hc = function (a, b) { this.fQ = a || 0; this.player.ma("progresssync", a, b); this.player.Pa("onVideoProgress", a || 0) };
    g.k.getCurrentTime = function () { return this.fQ };
    g.k.getProgressState = function () {
        var a = K9(this.uc), b = this.player.getVideoData(); return {
            airingStart: 0, airingEnd: 0, allowSeeking: this.player.V().K("web_player_mdx_allow_seeking_change_killswitch") ? this.player.hg() : !a.isAdPlaying() && this.player.hg(), clipEnd: b.clipEnd, clipStart: b.clipStart, current: this.getCurrentTime(), displayedStart: -1, duration: a.getDuration(), ingestionTime: a.u ? a.B + E9(a) : a.B, isAtLiveHead: 1 >= (a.u ? a.j + E9(a) : a.j) - this.getCurrentTime(), loaded: a.S, seekableEnd: a.u ? a.j + E9(a) : a.j, seekableStart: 0 <
                a.C ? a.C + E9(a) : a.C
        }
    };
    g.k.nextVideo = function () { this.uc && this.uc.nextVideo() };
    g.k.ZD = function () { this.uc && this.uc.ZD() };
    g.k.Z0 = function (a) { 1 === a && (this.fK = this.uc ? K9(this.uc) : null) };
    g.k.K2 = function () { var a = Pfb() ? new J9(c$(), void 0) : null; if (a) { var b = this.Fp; this.loaded && this.unload(); this.uc = a; this.fK = null; b.key !== this.pn.key && (this.Fp = b, this.load()) } else g.Ye(this.uc), this.uc = null, this.loaded && (this.unload(), (a = this.fK) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, G9(a))); this.player.ma("videodatachange", "newdata", this.player.getVideoData(), 3) };
    g.k.uR = function () { var a = [this.pn], b = a.concat, c = Lfb(); A9() && g.Oz("yt-remote-cast-available") && c.push({ key: "cast-selector-receiver", name: "Cast..." }); this.Kq = b.call(a, c); a = Nfb() || this.pn; n$(this, a); this.player.Pa("onMdxReceiversChange") };
    g.k.I2 = function () { var a = Nfb(); n$(this, a) };
    g.k.H2 = function () { this.Fp = Nfb() };
    g.k.m4 = function () { this.gA = !0; m$(this); g$ = !1; d$ && f$(d$, 1); d$ = null };
    g.k.l4 = function () { this.gA = !1; m$(this); n$(this, this.pn); this.Fp = this.pn; g$ = !1; d$ = null; this.player.playVideo() };
    g.k.Bg = function (a, b) { switch (a) { case "casting": return this.loaded; case "receivers": return this.Kq; case "currentReceiver": return b && ("cast-selector-receiver" === b.key ? dfb() : n$(this, b)), this.loaded ? this.Fp : this.pn; case "quickCast": return 2 === this.Kq.length && "cast-selector-receiver" === this.Kq[1].key ? (b && dfb(), !0) : !1 } };
    g.k.mL = function () { this.uc.mL() };
    g.k.Dj = function () { return !1 };
    g.k.getOptions = function () { return ["casting", "receivers", "currentReceiver", "quickCast"] }; g.dO("remote", Zfb);
})(_yt_player);
