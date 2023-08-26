const P1600_ROUND_CONSTANTS = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]; function block(t) { for (let _ = 0; _ < 24; ++_) { let e = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], $ = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], o = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], c = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], s = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], n = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], r = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], h = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], a = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], u = h ^ ($ << 1 | o >>> 31), f = a ^ (o << 1 | $ >>> 31), p = t[0] ^ u, l = t[1] ^ f, k = t[10] ^ u, b = t[11] ^ f, d = t[20] ^ u, S = t[21] ^ f, z = t[30] ^ u, g = t[31] ^ f, y = t[40] ^ u, K = t[41] ^ f; u = e ^ (c << 1 | s >>> 31), f = i ^ (s << 1 | c >>> 31); let m = t[2] ^ u, v = t[3] ^ f, C = t[12] ^ u, N = t[13] ^ f, q = t[22] ^ u, w = t[23] ^ f, x = t[32] ^ u, O = t[33] ^ f, T = t[42] ^ u, A = t[43] ^ f; u = $ ^ (n << 1 | r >>> 31), f = o ^ (r << 1 | n >>> 31); let R = t[4] ^ u, H = t[5] ^ f, D = t[14] ^ u, P = t[15] ^ f, U = t[24] ^ u, B = t[25] ^ f, F = t[34] ^ u, L = t[35] ^ f, j = t[44] ^ u, E = t[45] ^ f; u = c ^ (h << 1 | a >>> 31), f = s ^ (a << 1 | h >>> 31); let G = t[6] ^ u, I = t[7] ^ f, J = t[16] ^ u, M = t[17] ^ f, Q = t[26] ^ u, V = t[27] ^ f, W = t[36] ^ u, X = t[37] ^ f, Y = t[46] ^ u, Z = t[47] ^ f; u = n ^ (e << 1 | i >>> 31), f = r ^ (i << 1 | e >>> 31); let tt = t[8] ^ u, t_ = t[9] ^ f, t0 = t[18] ^ u, t2 = t[19] ^ f, te = t[28] ^ u, ti = t[29] ^ f, t$ = t[38] ^ u, to = t[39] ^ f, t1 = t[48] ^ u, tc = t[49] ^ f, ts = p, tn = l, tr = b << 4 | k >>> 28, t6 = k << 4 | b >>> 28, th = d << 3 | S >>> 29, t4 = S << 3 | d >>> 29, ta = g << 9 | z >>> 23, t3 = z << 9 | g >>> 23, tu = y << 18 | K >>> 14, t5 = K << 18 | y >>> 14, tf = m << 1 | v >>> 31, tp = v << 1 | m >>> 31, t7 = N << 12 | C >>> 20, tl = C << 12 | N >>> 20, tk = q << 10 | w >>> 22, tb = w << 10 | q >>> 22, td = O << 13 | x >>> 19, tS = x << 13 | O >>> 19, tz = T << 2 | A >>> 30, tg = A << 2 | T >>> 30, ty = H << 30 | R >>> 2, tK = R << 30 | H >>> 2, tm = D << 6 | P >>> 26, tv = P << 6 | D >>> 26, tC = B << 11 | U >>> 21, tN = U << 11 | B >>> 21, tq = F << 15 | L >>> 17, tw = L << 15 | F >>> 17, tx = E << 29 | j >>> 3, tO = j << 29 | E >>> 3, tT = G << 28 | I >>> 4, t8 = I << 28 | G >>> 4, tA = M << 23 | J >>> 9, tR = J << 23 | M >>> 9, tH = Q << 25 | V >>> 7, tD = V << 25 | Q >>> 7, tP = W << 21 | X >>> 11, tU = X << 21 | W >>> 11, tB = Z << 24 | Y >>> 8, tF = Y << 24 | Z >>> 8, tL = tt << 27 | t_ >>> 5, tj = t_ << 27 | tt >>> 5, tE = t0 << 20 | t2 >>> 12, tG = t2 << 20 | t0 >>> 12, tI = ti << 7 | te >>> 25, tJ = te << 7 | ti >>> 25, tM = t$ << 8 | to >>> 24, tQ = to << 8 | t$ >>> 24, tV = t1 << 14 | tc >>> 18, tW = tc << 14 | t1 >>> 18; t[0] = ts ^ ~t7 & tC, t[1] = tn ^ ~tl & tN, t[10] = tT ^ ~tE & th, t[11] = t8 ^ ~tG & t4, t[20] = tf ^ ~tm & tH, t[21] = tp ^ ~tv & tD, t[30] = tL ^ ~tr & tk, t[31] = tj ^ ~t6 & tb, t[40] = ty ^ ~tA & tI, t[41] = tK ^ ~tR & tJ, t[2] = t7 ^ ~tC & tP, t[3] = tl ^ ~tN & tU, t[12] = tE ^ ~th & td, t[13] = tG ^ ~t4 & tS, t[22] = tm ^ ~tH & tM, t[23] = tv ^ ~tD & tQ, t[32] = tr ^ ~tk & tq, t[33] = t6 ^ ~tb & tw, t[42] = tA ^ ~tI & ta, t[43] = tR ^ ~tJ & t3, t[4] = tC ^ ~tP & tV, t[5] = tN ^ ~tU & tW, t[14] = th ^ ~td & tx, t[15] = t4 ^ ~tS & tO, t[24] = tH ^ ~tM & tu, t[25] = tD ^ ~tQ & t5, t[34] = tk ^ ~tq & tB, t[35] = tb ^ ~tw & tF, t[44] = tI ^ ~ta & tz, t[45] = tJ ^ ~t3 & tg, t[6] = tP ^ ~tV & ts, t[7] = tU ^ ~tW & tn, t[16] = td ^ ~tx & tT, t[17] = tS ^ ~tO & t8, t[26] = tM ^ ~tu & tf, t[27] = tQ ^ ~t5 & tp, t[36] = tq ^ ~tB & tL, t[37] = tw ^ ~tF & tj, t[46] = ta ^ ~tz & ty, t[47] = t3 ^ ~tg & tK, t[8] = tV ^ ~ts & t7, t[9] = tW ^ ~tn & tl, t[18] = tx ^ ~tT & tE, t[19] = tO ^ ~t8 & tG, t[28] = tu ^ ~tf & tm, t[29] = t5 ^ ~tp & tv, t[38] = tB ^ ~tL & tr, t[39] = tF ^ ~tj & t6, t[48] = tz ^ ~ty & tA, t[49] = tg ^ ~tK & tR, t[0] ^= P1600_ROUND_CONSTANTS[2 * _], t[1] ^= P1600_ROUND_CONSTANTS[2 * _ + 1] } } function Keccak(t = 1088, _ = 256) { this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1, this.size = _ / 8, this.initialize(t) } function sha256(t) { function _(t, _) { return t >>> _ | t << 32 - _ } for (var e, i, $ = Math.pow, o = $(2, 32), c = "length", s = "", n = [], r = 8 * t[c], h = sha256.h = sha256.h || [], a = sha256.k = sha256.k || [], u = a[c], f = {}, p = 2; u < 64; p++)if (!f[p]) { for (e = 0; e < 313; e += p)f[e] = p; h[u] = $(p, .5) * o | 0, a[u++] = $(p, 1 / 3) * o | 0 } for (t += "\x80"; t[c] % 64 - 56;)t += "\0"; for (e = 0; e < t[c]; e++) { if ((i = t.charCodeAt(e)) >> 8) return; n[e >> 2] |= i << (3 - e) % 4 * 8 } for (i = 0, n[n[c]] = r / o | 0, n[n[c]] = r; i < n[c];) { var l = n.slice(i, i += 16), k = h; for (e = 0, h = h.slice(0, 8); e < 64; e++) { var b = l[e - 15], d = l[e - 2], S = h[0], z = h[4], g = h[7] + (_(z, 6) ^ _(z, 11) ^ _(z, 25)) + (z & h[5] ^ ~z & h[6]) + a[e] + (l[e] = e < 16 ? l[e] : l[e - 16] + (_(b, 7) ^ _(b, 18) ^ b >>> 3) + l[e - 7] + (_(d, 17) ^ _(d, 19) ^ d >>> 10) | 0), y = (_(S, 2) ^ _(S, 13) ^ _(S, 22)) + (S & h[1] ^ S & h[2] ^ h[1] & h[2]); (h = [g + y | 0].concat(h))[4] = h[4] + g | 0 } for (e = 0; e < 8; e++)h[e] = h[e] + k[e] | 0 } for (e = 0; e < 8; e++)for (i = 3; i + 1; i--) { var K = h[e] >> 8 * i & 255; s += (K < 16 ? 0 : "") + K.toString(16) } return s } function CRC32(t, _ = 4294967295) { t = new Keccak().encode(t); var e, i, $, o = Array(256); for (e = 0; e < 256; e++) { for (i = 0, $ = e; i < 8; i++)1 & $ ? $ = 3988292384 ^ $ >>> 1 : $ >>>= 1; o[e] = $ } for (; t.length;)_ = _ >>> 8 ^ o[(_ ^ 255 & t[0]) & 255], t = t.slice(1); return ((4294967295 ^ _) >>> 0).toString(16).padStart(8, 0) } Keccak.prototype.initialize = function (t, _) { for (let e = 0; e < 50; ++e)this.state[e] = 0; this.blockSize = t / 8, this.count = 0, this.squeezing = !1 }, Keccak.prototype.absorb = function (t) { for (let _ = 0; _ < t.length; ++_)this.state[~~(this.count / 4)] ^= t[_] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (block(this.state), this.count = 0) }, Keccak.prototype.absorbLastFewBits = function (t) { this.state[~~(this.count / 4)] ^= t << 8 * (this.count % 4), (128 & t) != 0 && this.count === this.blockSize - 1 && block(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), block(this.state), this.count = 0, this.squeezing = !0 }, Keccak.prototype.squeeze = function (t) { this.squeezing || this.absorbLastFewBits(1); let _ = new Uint8Array(t); for (let e = 0; e < t; ++e)_[e] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (block(this.state), this.count = 0); return _ }, Keccak.prototype.copy = function (t) { for (let _ = 0; _ < 50; ++_)t.state[_] = this.state[_]; t.blockSize = this.blockSize, t.count = this.count, t.squeezing = this.squeezing }, Keccak.prototype.add = function (t, _ = 256, e = 0n) { for (; t.length;)t[0] = "number" == typeof t[0] ? BigInt(t[0]) : t[0], e = e * BigInt(_) + t[0], t = t.slice(1); return e }, Keccak.prototype.div = function (t, _ = 256, e = []) { for (t = "number" == typeof t ? BigInt(t) : t; t;)e.unshift(t % BigInt(_)), t /= BigInt(_); return e }, Keccak.prototype.char = function (t) { return t.split("").map(t => t.charCodeAt(0)) }, Keccak.prototype.hex = function (t) { return "0x" + t.match(/.{1,2}/g).map(t => t.padStart(2, 0)).join("") }, Keccak.prototype.encode = function (t) { switch (typeof t) { case "string": t = t.replace(/0x/, ""); try { t = 0 == BigInt(this.hex(t)) ? this.add(this.char(t)) : BigInt(this.hex(t)), t = this.div(t).map(Number) } catch (_) { t = this.char(t) } break; case "number": t = this.div(BigInt(t)).map(Number); break; case "bigint": t = this.div(t).map(Number) }return t }, Keccak.prototype.update = function (t) { return this.absorb(this.encode(t)), this.add(Array.from(this.squeeze(this.size))).toString(16).padStart(64, 0) }; const computeHash = { H256: function (t) { return sha256(t) }, H32: function (t) { return CRC32(t) }, K256: function (t) { return new Keccak().update(t) } }; Keccak.prototype.toHex = function (t) { return this.add(this.encode(t)).toString(16) };

function hmac(d, k) {
    if (!k) { k = sha256("Block2023"); }
    let cx = new Keccak();
    [d, k] = [cx.encode(d), cx.encode(k)];
    k = k.length > 64 ? cx.encode(sha256(k)) : cx.encode(k).concat(Array(64 - k.length).fill(0));
    let ik = Array(64).fill(0);
    let ok = Array(64).fill(0);
    let size = 64;
    let i = 0;
    while (i < size) {
        ik[i] = 0x36 ^ k[i];
        ok[i] = 0x5c ^ k[i];
        i++;
    }
    let upd = new Uint8Array(d.length + 64);
    upd.set(ik, 0);
    upd.set(d, 64);
    let res = new Uint8Array(64 + 32);
    res.set(ok, 0);
    res.set(cx.encode(sha256(upd)), 64);
    return sha256(res);
}

const rsa = {
    check: function (n) {
        n = typeof n !== "bigint" ? BigInt(n) : n
        if (n <= 3n) {
            return n > 1n;
        } else if (n % 2n == 0n || n % 3n == 0n) {
            return false;
        }
        let i = 5n;
        while (i * i <= n) {
            if (n % i == 0n || n % (i + 2n) == 0n) {
                return false;
            }
            i += 6n;
        }
        return true;
    },
    fix: function (n) {
        while (!this.check(n)) { n++ }; return (n)
    },
    pubkey: function (p, q, salt = 0) {
        [p, q] = [p, q].map(i => this.fix(i)).map(BigInt)
        salt = salt == 0 ? BigInt(`0x${hmac(p, q * BigInt(Date.now()))}`) : BigInt(salt);
        let [pub, phi, e] = [p * q, (p - 1n) * (q - 1n), salt].map(BigInt)
        let [x, y] = [e, phi];
        let [n, h, k] = [0, pub, 0]
        while (phi !== 0n) {
            let dump = phi;
            phi = e % phi;
            e = dump
        }
        if (e == 1n) {
            n = x
            let [e, phi] = [x, y]
            let [x1, y1, a, b, c, d] = [0n, 1n, 1n, 0n, 0n, 0n], oPhi = phi;
            while (e !== 0n) {
                c = phi / e;
                d = phi % e;
                [x1, y1, a, b] = [a, b, x1 - c * a, y1 - c * b];
                phi = e;
                e = d;
            };
            if (phi === 1n) {
                while (x1 < 0n) { x1 += oPhi; };
                k = x1;
                return [n, k, h]
            }
            return false;
        }
        salt++
        return this.pubkey(p, q, salt)

    },
    compute: function (m, x, y) {
        let szOut = 1n;
        m = m % x;
        while (y > 0n) {
            if (y % 2n == 1n) {
                szOut = (szOut * m) % x;
            }
            y = y >> 1n;
            m = (m * m) % x;
        }
        return szOut;
    },
    encrypt: function (mz, key) {
        let xc = new Keccak()
        let tx = {
            mz: xc.add(xc.encode(mz)),
            mac: BigInt(`0x${hmac(mz)}`),
            key: BigInt(`0x${hmac(mz, key).slice(-8)}`)
        }
        tx.key = [tx.key, tx.mac % tx.key].map(i => this.fix(i)).concat(tx.mac)
        tx.key = this.pubkey(tx.key[0], tx.key[1], tx.key[2])
        tx.mac = tx.key[0]
        tx.key = tx.key.slice(1)
        tx.mz = xc.div(tx.mz, tx.key[1]).map(i => this.compute(i, tx.key[1], tx.mac))
        tx.mz = xc.add(tx.mz, tx.key[1])
        return tx
    },
    comkey: function (pwd, user = "root", host = 'localhost') {
        let zx = new Keccak();
        pwd = zx.update(user + pwd);
        pwd = zx.update(host + pwd);
        let [p, q] = [BigInt('0x' + CRC32(pwd)), BigInt('0x' + pwd)];
        q = q % p;
        [p, q] = [p, q].map(i => this.fix(i))
        let [x, y] = [p * q, (p - 1n) * (q - 1n)]
        y = (x ^ y).toString(16).padStart(10, 0).toUpperCase();
        x = x.toString(16).padStart(16, 0).toUpperCase()
        return [x, y].join('')
    }
}

let dc = rsa.pubkey(129n, 245)

let enc = rsa.comkey('Arindha1009')

console.log(enc)