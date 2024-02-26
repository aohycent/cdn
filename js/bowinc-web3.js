(typeof Crypto=="undefined"||!Crypto.util)&&function(){var e=window.Crypto={},f=e.util={rotl:function(a,b){return a<<b|a>>>32-b},rotr:function(a,b){return a<<32-b|a>>>b},endian:function(a){if(a.constructor==Number)return f.rotl(a,8)&16711935|f.rotl(a,24)&4278255360;for(var b=0;b<a.length;b++)a[b]=f.endian(a[b]);return a},randomBytes:function(a){for(var b=[];a>0;a--)b.push(Math.floor(Math.random()*256));return b},bytesToWords:function(a){for(var b=[],c=0,d=0;c<a.length;c++,d+=8)b[d>>>5]|=(a[c]&255)<<
24-d%32;return b},wordsToBytes:function(a){for(var b=[],c=0;c<a.length*32;c+=8)b.push(a[c>>>5]>>>24-c%32&255);return b},bytesToHex:function(a){for(var b=[],c=0;c<a.length;c++)b.push((a[c]>>>4).toString(16)),b.push((a[c]&15).toString(16));return b.join("")},hexToBytes:function(a){for(var b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substr(c,2),16));return b},bytesToBase64:function(a){for(var b=[],c=0;c<a.length;c+=3)for(var d=a[c]<<16|a[c+1]<<8|a[c+2],e=0;e<4;e++)c*8+e*6<=a.length*8?b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>>
6*(3-e)&63)):b.push("=");return b.join("")},base64ToBytes:function(a){for(var a=a.replace(/[^A-Z0-9+\/]/ig,""),b=[],c=0,d=0;c<a.length;d=++c%4)d!=0&&b.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(c-1))&Math.pow(2,-2*d+8)-1)<<d*2|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(c))>>>6-d*2);return b}},e=e.charenc={};e.UTF8={stringToBytes:function(a){return g.stringToBytes(unescape(encodeURIComponent(a)))},bytesToString:function(a){return decodeURIComponent(escape(g.bytesToString(a)))}};
var g=e.Binary={stringToBytes:function(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c)&255);return b},bytesToString:function(a){for(var b=[],c=0;c<a.length;c++)b.push(String.fromCharCode(a[c]));return b.join("")}}}();
(typeof Crypto=="undefined"||!Crypto.util)&&function(){var f=window.Crypto={},l=f.util={rotl:function(b,a){return b<<a|b>>>32-a},rotr:function(b,a){return b<<32-a|b>>>a},endian:function(b){if(b.constructor==Number)return l.rotl(b,8)&16711935|l.rotl(b,24)&4278255360;for(var a=0;a<b.length;a++)b[a]=l.endian(b[a]);return b},randomBytes:function(b){for(var a=[];b>0;b--)a.push(Math.floor(Math.random()*256));return a},bytesToWords:function(b){for(var a=[],c=0,d=0;c<b.length;c++,d+=8)a[d>>>5]|=(b[c]&255)<<
24-d%32;return a},wordsToBytes:function(b){for(var a=[],c=0;c<b.length*32;c+=8)a.push(b[c>>>5]>>>24-c%32&255);return a},bytesToHex:function(b){for(var a=[],c=0;c<b.length;c++)a.push((b[c]>>>4).toString(16)),a.push((b[c]&15).toString(16));return a.join("")},hexToBytes:function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(parseInt(b.substr(c,2),16));return a},bytesToBase64:function(b){for(var a=[],c=0;c<b.length;c+=3)for(var d=b[c]<<16|b[c+1]<<8|b[c+2],q=0;q<4;q++)c*8+q*6<=b.length*8?a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>>
6*(3-q)&63)):a.push("=");return a.join("")},base64ToBytes:function(b){for(var b=b.replace(/[^A-Z0-9+\/]/ig,""),a=[],c=0,d=0;c<b.length;d=++c%4)d!=0&&a.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(c-1))&Math.pow(2,-2*d+8)-1)<<d*2|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(c))>>>6-d*2);return a}},f=f.charenc={};f.UTF8={stringToBytes:function(b){return i.stringToBytes(unescape(encodeURIComponent(b)))},bytesToString:function(b){return decodeURIComponent(escape(i.bytesToString(b)))}};
var i=f.Binary={stringToBytes:function(b){for(var a=[],c=0;c<b.length;c++)a.push(b.charCodeAt(c)&255);return a},bytesToString:function(b){for(var a=[],c=0;c<b.length;c++)a.push(String.fromCharCode(b[c]));return a.join("")}}}();
(function(){var f=Crypto,l=f.util,i=f.charenc,b=i.UTF8,a=i.Binary,c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,
2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],d=f.SHA256=function(b,c){var e=l.wordsToBytes(d._sha256(b));return c&&c.asBytes?e:c&&c.asString?a.bytesToString(e):l.bytesToHex(e)};d._sha256=function(a){a.constructor==String&&(a=b.stringToBytes(a));var d=l.bytesToWords(a),e=a.length*8,a=[1779033703,3144134277,
1013904242,2773480762,1359893119,2600822924,528734635,1541459225],f=[],m,n,i,h,o,p,r,s,g,k,j;d[e>>5]|=128<<24-e%32;d[(e+64>>9<<4)+15]=e;for(s=0;s<d.length;s+=16){e=a[0];m=a[1];n=a[2];i=a[3];h=a[4];o=a[5];p=a[6];r=a[7];for(g=0;g<64;g++){g<16?f[g]=d[g+s]:(k=f[g-15],j=f[g-2],f[g]=((k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3)+(f[g-7]>>>0)+((j<<15|j>>>17)^(j<<13|j>>>19)^j>>>10)+(f[g-16]>>>0));j=e&m^e&n^m&n;var t=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22);k=(r>>>0)+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+
(h&o^~h&p)+c[g]+(f[g]>>>0);j=t+j;r=p;p=o;o=h;h=i+k>>>0;i=n;n=m;m=e;e=k+j>>>0}a[0]+=e;a[1]+=m;a[2]+=n;a[3]+=i;a[4]+=h;a[5]+=o;a[6]+=p;a[7]+=r}return a};d._blocksize=16;d._digestsize=32})();
(typeof Crypto=="undefined"||!Crypto.util)&&function(){var d=window.Crypto={},k=d.util={rotl:function(b,a){return b<<a|b>>>32-a},rotr:function(b,a){return b<<32-a|b>>>a},endian:function(b){if(b.constructor==Number)return k.rotl(b,8)&16711935|k.rotl(b,24)&4278255360;for(var a=0;a<b.length;a++)b[a]=k.endian(b[a]);return b},randomBytes:function(b){for(var a=[];b>0;b--)a.push(Math.floor(Math.random()*256));return a},bytesToWords:function(b){for(var a=[],c=0,e=0;c<b.length;c++,e+=8)a[e>>>5]|=(b[c]&255)<<
24-e%32;return a},wordsToBytes:function(b){for(var a=[],c=0;c<b.length*32;c+=8)a.push(b[c>>>5]>>>24-c%32&255);return a},bytesToHex:function(b){for(var a=[],c=0;c<b.length;c++)a.push((b[c]>>>4).toString(16)),a.push((b[c]&15).toString(16));return a.join("")},hexToBytes:function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(parseInt(b.substr(c,2),16));return a},bytesToBase64:function(b){for(var a=[],c=0;c<b.length;c+=3)for(var e=b[c]<<16|b[c+1]<<8|b[c+2],p=0;p<4;p++)c*8+p*6<=b.length*8?a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>
6*(3-p)&63)):a.push("=");return a.join("")},base64ToBytes:function(b){for(var b=b.replace(/[^A-Z0-9+\/]/ig,""),a=[],c=0,e=0;c<b.length;e=++c%4)e!=0&&a.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(c-1))&Math.pow(2,-2*e+8)-1)<<e*2|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(c))>>>6-e*2);return a}},d=d.charenc={};d.UTF8={stringToBytes:function(b){return g.stringToBytes(unescape(encodeURIComponent(b)))},bytesToString:function(b){return decodeURIComponent(escape(g.bytesToString(b)))}};
var g=d.Binary={stringToBytes:function(b){for(var a=[],c=0;c<b.length;c++)a.push(b.charCodeAt(c)&255);return a},bytesToString:function(b){for(var a=[],c=0;c<b.length;c++)a.push(String.fromCharCode(b[c]));return a.join("")}}}();
(function(){var d=Crypto,k=d.util,g=d.charenc,b=g.UTF8,a=g.Binary,c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,
2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],e=d.SHA256=function(b,c){var f=k.wordsToBytes(e._sha256(b));return c&&c.asBytes?f:c&&c.asString?a.bytesToString(f):k.bytesToHex(f)};e._sha256=function(a){a.constructor==String&&(a=b.stringToBytes(a));var e=k.bytesToWords(a),f=a.length*8,a=[1779033703,3144134277,
1013904242,2773480762,1359893119,2600822924,528734635,1541459225],d=[],g,m,r,i,n,o,s,t,h,l,j;e[f>>5]|=128<<24-f%32;e[(f+64>>9<<4)+15]=f;for(t=0;t<e.length;t+=16){f=a[0];g=a[1];m=a[2];r=a[3];i=a[4];n=a[5];o=a[6];s=a[7];for(h=0;h<64;h++){h<16?d[h]=e[h+t]:(l=d[h-15],j=d[h-2],d[h]=((l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3)+(d[h-7]>>>0)+((j<<15|j>>>17)^(j<<13|j>>>19)^j>>>10)+(d[h-16]>>>0));j=f&g^f&m^g&m;var u=(f<<30|f>>>2)^(f<<19|f>>>13)^(f<<10|f>>>22);l=(s>>>0)+((i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25))+
(i&n^~i&o)+c[h]+(d[h]>>>0);j=u+j;s=o;o=n;n=i;i=r+l>>>0;r=m;m=g;g=f;f=l+j>>>0}a[0]+=f;a[1]+=g;a[2]+=m;a[3]+=r;a[4]+=i;a[5]+=n;a[6]+=o;a[7]+=s}return a};e._blocksize=16;e._digestsize=32})();
(function(){var d=Crypto,k=d.util,g=d.charenc,b=g.UTF8,a=g.Binary;d.HMAC=function(c,e,d,g){e.constructor==String&&(e=b.stringToBytes(e));d.constructor==String&&(d=b.stringToBytes(d));d.length>c._blocksize*4&&(d=c(d,{asBytes:!0}));for(var f=d.slice(0),d=d.slice(0),q=0;q<c._blocksize*4;q++)f[q]^=92,d[q]^=54;c=c(f.concat(c(d.concat(e),{asBytes:!0})),{asBytes:!0});return g&&g.asBytes?c:g&&g.asString?a.bytesToString(c):k.bytesToHex(c)}})();
(function() {
function n(a){throw a;}var q=null;function s(a,b){this.a=a;this.b=b}function u(a,b){var d=[],h=(1<<b)-1,f=a.length*b,g;for(g=0;g<f;g+=b)d[g>>>5]|=(a.charCodeAt(g/b)&h)<<32-b-g%32;return{value:d,binLen:f}}function x(a){var b=[],d=a.length,h,f;0!==d%2&&n("String of HEX type must be in byte increments");for(h=0;h<d;h+=2)f=parseInt(a.substr(h,2),16),isNaN(f)&&n("String of HEX type contains invalid characters"),b[h>>>3]|=f<<24-4*(h%8);return{value:b,binLen:4*d}}
function B(a){var b=[],d=0,h,f,g,k,m;-1===a.search(/^[a-zA-Z0-9=+\/]+$/)&&n("Invalid character in base-64 string");h=a.indexOf("=");a=a.replace(/\=/g,"");-1!==h&&h<a.length&&n("Invalid '=' found in base-64 string");for(f=0;f<a.length;f+=4){m=a.substr(f,4);for(g=k=0;g<m.length;g+=1)h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(m[g]),k|=h<<18-6*g;for(g=0;g<m.length-1;g+=1)b[d>>2]|=(k>>>16-8*g&255)<<24-8*(d%4),d+=1}return{value:b,binLen:8*d}}
function E(a,b){var d="",h=4*a.length,f,g;for(f=0;f<h;f+=1)g=a[f>>>2]>>>8*(3-f%4),d+="0123456789abcdef".charAt(g>>>4&15)+"0123456789abcdef".charAt(g&15);return b.outputUpper?d.toUpperCase():d}
function F(a,b){var d="",h=4*a.length,f,g,k;for(f=0;f<h;f+=3){k=(a[f>>>2]>>>8*(3-f%4)&255)<<16|(a[f+1>>>2]>>>8*(3-(f+1)%4)&255)<<8|a[f+2>>>2]>>>8*(3-(f+2)%4)&255;for(g=0;4>g;g+=1)d=8*f+6*g<=32*a.length?d+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(k>>>6*(3-g)&63):d+b.b64Pad}return d}
function G(a){var b={outputUpper:!1,b64Pad:"="};try{a.hasOwnProperty("outputUpper")&&(b.outputUpper=a.outputUpper),a.hasOwnProperty("b64Pad")&&(b.b64Pad=a.b64Pad)}catch(d){}"boolean"!==typeof b.outputUpper&&n("Invalid outputUpper formatting option");"string"!==typeof b.b64Pad&&n("Invalid b64Pad formatting option");return b}
function H(a,b){var d=q,d=new s(a.a,a.b);return d=32>=b?new s(d.a>>>b|d.b<<32-b&4294967295,d.b>>>b|d.a<<32-b&4294967295):new s(d.b>>>b-32|d.a<<64-b&4294967295,d.a>>>b-32|d.b<<64-b&4294967295)}function I(a,b){var d=q;return d=32>=b?new s(a.a>>>b,a.b>>>b|a.a<<32-b&4294967295):new s(0,a.a>>>b-32)}function J(a,b,d){return new s(a.a&b.a^~a.a&d.a,a.b&b.b^~a.b&d.b)}function U(a,b,d){return new s(a.a&b.a^a.a&d.a^b.a&d.a,a.b&b.b^a.b&d.b^b.b&d.b)}
function V(a){var b=H(a,28),d=H(a,34);a=H(a,39);return new s(b.a^d.a^a.a,b.b^d.b^a.b)}function W(a){var b=H(a,14),d=H(a,18);a=H(a,41);return new s(b.a^d.a^a.a,b.b^d.b^a.b)}function X(a){var b=H(a,1),d=H(a,8);a=I(a,7);return new s(b.a^d.a^a.a,b.b^d.b^a.b)}function Y(a){var b=H(a,19),d=H(a,61);a=I(a,6);return new s(b.a^d.a^a.a,b.b^d.b^a.b)}
function Z(a,b){var d,h,f;d=(a.b&65535)+(b.b&65535);h=(a.b>>>16)+(b.b>>>16)+(d>>>16);f=(h&65535)<<16|d&65535;d=(a.a&65535)+(b.a&65535)+(h>>>16);h=(a.a>>>16)+(b.a>>>16)+(d>>>16);return new s((h&65535)<<16|d&65535,f)}
function aa(a,b,d,h){var f,g,k;f=(a.b&65535)+(b.b&65535)+(d.b&65535)+(h.b&65535);g=(a.b>>>16)+(b.b>>>16)+(d.b>>>16)+(h.b>>>16)+(f>>>16);k=(g&65535)<<16|f&65535;f=(a.a&65535)+(b.a&65535)+(d.a&65535)+(h.a&65535)+(g>>>16);g=(a.a>>>16)+(b.a>>>16)+(d.a>>>16)+(h.a>>>16)+(f>>>16);return new s((g&65535)<<16|f&65535,k)}
function ba(a,b,d,h,f){var g,k,m;g=(a.b&65535)+(b.b&65535)+(d.b&65535)+(h.b&65535)+(f.b&65535);k=(a.b>>>16)+(b.b>>>16)+(d.b>>>16)+(h.b>>>16)+(f.b>>>16)+(g>>>16);m=(k&65535)<<16|g&65535;g=(a.a&65535)+(b.a&65535)+(d.a&65535)+(h.a&65535)+(f.a&65535)+(k>>>16);k=(a.a>>>16)+(b.a>>>16)+(d.a>>>16)+(h.a>>>16)+(f.a>>>16)+(g>>>16);return new s((k&65535)<<16|g&65535,m)}
function $(a,b,d){var h,f,g,k,m,j,A,C,K,e,L,v,l,M,t,p,y,z,r,N,O,P,Q,R,c,S,w=[],T,D;"SHA-384"===d||"SHA-512"===d?(L=80,h=(b+128>>>10<<5)+31,M=32,t=2,c=s,p=Z,y=aa,z=ba,r=X,N=Y,O=V,P=W,R=U,Q=J,S=[new c(1116352408,3609767458),new c(1899447441,602891725),new c(3049323471,3964484399),new c(3921009573,2173295548),new c(961987163,4081628472),new c(1508970993,3053834265),new c(2453635748,2937671579),new c(2870763221,3664609560),new c(3624381080,2734883394),new c(310598401,1164996542),new c(607225278,1323610764),
new c(1426881987,3590304994),new c(1925078388,4068182383),new c(2162078206,991336113),new c(2614888103,633803317),new c(3248222580,3479774868),new c(3835390401,2666613458),new c(4022224774,944711139),new c(264347078,2341262773),new c(604807628,2007800933),new c(770255983,1495990901),new c(1249150122,1856431235),new c(1555081692,3175218132),new c(1996064986,2198950837),new c(2554220882,3999719339),new c(2821834349,766784016),new c(2952996808,2566594879),new c(3210313671,3203337956),new c(3336571891,
1034457026),new c(3584528711,2466948901),new c(113926993,3758326383),new c(338241895,168717936),new c(666307205,1188179964),new c(773529912,1546045734),new c(1294757372,1522805485),new c(1396182291,2643833823),new c(1695183700,2343527390),new c(1986661051,1014477480),new c(2177026350,1206759142),new c(2456956037,344077627),new c(2730485921,1290863460),new c(2820302411,3158454273),new c(3259730800,3505952657),new c(3345764771,106217008),new c(3516065817,3606008344),new c(3600352804,1432725776),new c(4094571909,
1467031594),new c(275423344,851169720),new c(430227734,3100823752),new c(506948616,1363258195),new c(659060556,3750685593),new c(883997877,3785050280),new c(958139571,3318307427),new c(1322822218,3812723403),new c(1537002063,2003034995),new c(1747873779,3602036899),new c(1955562222,1575990012),new c(2024104815,1125592928),new c(2227730452,2716904306),new c(2361852424,442776044),new c(2428436474,593698344),new c(2756734187,3733110249),new c(3204031479,2999351573),new c(3329325298,3815920427),new c(3391569614,
3928383900),new c(3515267271,566280711),new c(3940187606,3454069534),new c(4118630271,4000239992),new c(116418474,1914138554),new c(174292421,2731055270),new c(289380356,3203993006),new c(460393269,320620315),new c(685471733,587496836),new c(852142971,1086792851),new c(1017036298,365543100),new c(1126000580,2618297676),new c(1288033470,3409855158),new c(1501505948,4234509866),new c(1607167915,987167468),new c(1816402316,1246189591)],e="SHA-384"===d?[new c(3418070365,3238371032),new c(1654270250,914150663),
new c(2438529370,812702999),new c(355462360,4144912697),new c(1731405415,4290775857),new c(41048885895,1750603025),new c(3675008525,1694076839),new c(1203062813,3204075428)]:[new c(1779033703,4089235720),new c(3144134277,2227873595),new c(1013904242,4271175723),new c(2773480762,1595750129),new c(1359893119,2917565137),new c(2600822924,725511199),new c(528734635,4215389547),new c(1541459225,327033209)]):n("Unexpected error in SHA-2 implementation");a[b>>>5]|=128<<24-b%32;a[h]=b;T=a.length;for(v=0;v<
T;v+=M){b=e[0];h=e[1];f=e[2];g=e[3];k=e[4];m=e[5];j=e[6];A=e[7];for(l=0;l<L;l+=1)w[l]=16>l?new c(a[l*t+v],a[l*t+v+1]):y(N(w[l-2]),w[l-7],r(w[l-15]),w[l-16]),C=z(A,P(k),Q(k,m,j),S[l],w[l]),K=p(O(b),R(b,h,f)),A=j,j=m,m=k,k=p(g,C),g=f,f=h,h=b,b=p(C,K);e[0]=p(b,e[0]);e[1]=p(h,e[1]);e[2]=p(f,e[2]);e[3]=p(g,e[3]);e[4]=p(k,e[4]);e[5]=p(m,e[5]);e[6]=p(j,e[6]);e[7]=p(A,e[7])}"SHA-384"===d?D=[e[0].a,e[0].b,e[1].a,e[1].b,e[2].a,e[2].b,e[3].a,e[3].b,e[4].a,e[4].b,e[5].a,e[5].b]:"SHA-512"===d?D=[e[0].a,e[0].b,
e[1].a,e[1].b,e[2].a,e[2].b,e[3].a,e[3].b,e[4].a,e[4].b,e[5].a,e[5].b,e[6].a,e[6].b,e[7].a,e[7].b]:n("Unexpected error in SHA-2 implementation");return D}
window.jsSHA=function(a,b,d){var h=q,f=q,g=0,k=[0],m=0,j=q,m="undefined"!==typeof d?d:8;8===m||16===m||n("charSize must be 8 or 16");"HEX"===b?(0!==a.length%2&&n("srcString of HEX type must be in byte increments"),j=x(a),g=j.binLen,k=j.value):"ASCII"===b||"TEXT"===b?(j=u(a,m),g=j.binLen,k=j.value):"B64"===b?(j=B(a),g=j.binLen,k=j.value):n("inputFormat must be HEX, TEXT, ASCII, or B64");this.getHash=function(a,b,d){var e=q,m=k.slice(),j="";switch(b){case "HEX":e=E;break;case "B64":e=F;break;default:n("format must be HEX or B64")}"SHA-384"===
a?(q===h&&(h=$(m,g,a)),j=e(h,G(d))):"SHA-512"===a?(q===f&&(f=$(m,g,a)),j=e(f,G(d))):n("Chosen SHA variant is not supported");return j};this.getHMAC=function(a,b,d,e,f){var h,l,j,t,p,y=[],z=[],r=q;switch(e){case "HEX":h=E;break;case "B64":h=F;break;default:n("outputFormat must be HEX or B64")}"SHA-384"===d?(j=128,p=384):"SHA-512"===d?(j=128,p=512):n("Chosen SHA variant is not supported");"HEX"===b?(r=x(a),t=r.binLen,l=r.value):"ASCII"===b||"TEXT"===b?(r=u(a,m),t=r.binLen,l=r.value):"B64"===b?(r=B(a),
t=r.binLen,l=r.value):n("inputFormat must be HEX, TEXT, ASCII, or B64");a=8*j;b=j/4-1;j<t/8?(l=$(l,t,d),l[b]&=4294967040):j>t/8&&(l[b]&=4294967040);for(j=0;j<=b;j+=1)y[j]=l[j]^909522486,z[j]=l[j]^1549556828;d=$(z.concat($(y.concat(k),a+g,d)),a+p,d);return h(d,G(f))}};})();

var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();

(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=window.Crypto={},n=t.util={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return n.rotl(e,8)&16711935|n.rotl(e,24)&4278255360;for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(Math.random()*256));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<e.length*32;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((e[n]&15).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(t){if(typeof btoa=="function")return btoa(s.bytesToString(t));for(var n=[],r=0;r<t.length;r+=3){var i=t[r]<<16|t[r+1]<<8|t[r+2];for(var o=0;o<4;o++)r*8+o*6<=t.length*8?n.push(e.charAt(i>>>6*(3-o)&63)):n.push("=")}return n.join("")},base64ToBytes:function(t){if(typeof atob=="function")return s.stringToBytes(atob(t));t=t.replace(/[^A-Z0-9+\/]/ig,"");for(var n=[],r=0,i=0;r<t.length;i=++r%4){if(i==0)continue;n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<i*2|e.indexOf(t.charAt(r))>>>6-i*2)}return n}};t.mode={};var r=t.charenc={},i=r.UTF8={stringToBytes:function(e){return s.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(s.bytesToString(e)))}},s=r.Binary={stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}})();
(function(){var e=Crypto,t=e.util,n=e.charenc,r=n.UTF8,i=n.Binary,s=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],o=e.SHA256=function(e,n){var r=t.wordsToBytes(o._sha256(e));return n&&n.asBytes?r:n&&n.asString?i.bytesToString(r):t.bytesToHex(r)};o._sha256=function(e){e.constructor==String&&(e=r.stringToBytes(e));var n=t.bytesToWords(e),i=e.length*8,o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],u=[],a,f,l,c,h,p,d,v,m,g,y,b;n[i>>5]|=128<<24-i%32,n[(i+64>>9<<4)+15]=i;for(var m=0;m<n.length;m+=16){a=o[0],f=o[1],l=o[2],c=o[3],h=o[4],p=o[5],d=o[6],v=o[7];for(var g=0;g<64;g++){if(g<16)u[g]=n[g+m];else{var w=u[g-15],E=u[g-2],S=(w<<25|w>>>7)^(w<<14|w>>>18)^w>>>3,x=(E<<15|E>>>17)^(E<<13|E>>>19)^E>>>10;u[g]=S+(u[g-7]>>>0)+x+(u[g-16]>>>0)}var T=h&p^~h&d,N=a&f^a&l^f&l,C=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),k=(h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25);y=(v>>>0)+k+T+s[g]+(u[g]>>>0),b=C+N,v=d,d=p,p=h,h=c+y,c=l,l=f,f=a,a=y+b}o[0]+=a,o[1]+=f,o[2]+=l,o[3]+=c,o[4]+=h,o[5]+=p,o[6]+=d,o[7]+=v}return o},o._blocksize=16})();
(function(){function o(e,t,n,r){return 0<=e&&e<=15?t^n^r:16<=e&&e<=31?t&n|~t&r:32<=e&&e<=47?(t|~n)^r:48<=e&&e<=63?t&r|n&~r:64<=e&&e<=79?t^(n|~r):"rmd160_f: j out of range"}function u(e){return 0<=e&&e<=15?0:16<=e&&e<=31?1518500249:32<=e&&e<=47?1859775393:48<=e&&e<=63?2400959708:64<=e&&e<=79?2840853838:"rmd160_K1: j out of range"}function a(e){return 0<=e&&e<=15?1352829926:16<=e&&e<=31?1548603684:32<=e&&e<=47?1836072691:48<=e&&e<=63?2053994217:64<=e&&e<=79?0:"rmd160_K2: j out of range"}function p(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function d(e,t){return e<<t|e>>>32-t}var e=Crypto,t=e.util,n=e.charenc,r=n.UTF8,i=n.Binary;t.bytesToLWords=function(e){var t=Array(e.length>>2);for(var n=0;n<t.length;n++)t[n]=0;for(var n=0;n<e.length*8;n+=8)t[n>>5]|=(e[n/8]&255)<<n%32;return t},t.lWordsToBytes=function(e){var t=[];for(var n=0;n<e.length*32;n+=8)t.push(e[n>>5]>>>n%32&255);return t};var s=e.RIPEMD160=function(e,n){var r=t.lWordsToBytes(s._rmd160(e));return n&&n.asBytes?r:n&&n.asString?i.bytesToString(r):t.bytesToHex(r)};s._rmd160=function(e){e.constructor==String&&(e=r.stringToBytes(e));var n=t.bytesToLWords(e),i=e.length*8;n[i>>5]|=128<<i%32,n[(i+64>>>9<<4)+14]=i;var s=1732584193,v=4023233417,m=2562383102,g=271733878,y=3285377520;for(var b=0;b<n.length;b+=16){var w,E=s,S=v,x=m,T=g,N=y,C=s,k=v,L=m,A=g,O=y;for(var M=0;M<=79;++M)w=p(E,o(M,S,x,T)),w=p(w,n[b+f[M]]),w=p(w,u(M)),w=p(d(w,c[M]),N),E=N,N=T,T=d(x,10),x=S,S=w,w=p(C,o(79-M,k,L,A)),w=p(w,n[b+l[M]]),w=p(w,a(M)),w=p(d(w,h[M]),O),C=O,O=A,A=d(L,10),L=k,k=w;w=p(v,p(x,A)),v=p(m,p(T,O)),m=p(g,p(N,C)),g=p(y,p(E,k)),y=p(s,p(S,L)),s=w}return[s,v,m,g,y]};var f=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],l=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],c=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],h=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]})();
function Arcfour(){this.i=0,this.j=0,this.S=new Array}function ARC4init(e){var t,n,r;for(t=0;t<256;++t)this.S[t]=t;n=0;for(t=0;t<256;++t)n=n+this.S[t]+e[t%e.length]&255,r=this.S[t],this.S[t]=this.S[n],this.S[n]=r;this.i=0,this.j=0}function ARC4next(){var e;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,e=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=e,this.S[e+this.S[this.i]&255]}function prng_newstate(){return new Arcfour}Arcfour.prototype.init=ARC4init,Arcfour.prototype.next=ARC4next;var rng_psize=256;
function rng_seed_int(e){rng_pool[rng_pptr++]^=e&255,rng_pool[rng_pptr++]^=e>>8&255,rng_pool[rng_pptr++]^=e>>16&255,rng_pool[rng_pptr++]^=e>>24&255,rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}function rng_seed_time(){rng_seed_int((new Date).getTime())}function rng_get_byte(){if(rng_state==null){rng_seed_time(),rng_state=prng_newstate(),rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(e){var t;for(t=0;t<e.length;++t)e[t]=rng_get_byte()}function SecureRandom(){}var rng_state,rng_pool,rng_pptr;if(rng_pool==null){rng_pool=new Array,rng_pptr=0;var t;if(navigator.appName=="Netscape"&&navigator.appVersion<"5"&&window.crypto){var z=window.crypto.random(32);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]=z.charCodeAt(t)&255}while(rng_pptr<rng_psize)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=t&255;rng_pptr=0,rng_seed_time()}SecureRandom.prototype.nextBytes=rng_get_bytes;
function BigInteger(e,t,n){e!=null&&("number"==typeof e?this.fromNumber(e,t,n):t==null&&"string"!=typeof e?this.fromString(e,256):this.fromString(e,t))}function nbi(){return new BigInteger(null)}function am1(e,t,n,r,i,s){while(--s>=0){var o=t*this[e++]+n[r]+i;i=Math.floor(o/67108864),n[r++]=o&67108863}return i}function am2(e,t,n,r,i,s){var o=t&32767,u=t>>15;while(--s>=0){var a=this[e]&32767,f=this[e++]>>15,l=u*a+f*o;a=o*a+((l&32767)<<15)+n[r]+(i&1073741823),i=(a>>>30)+(l>>>15)+u*f+(i>>>30),n[r++]=a&1073741823}return i}function am3(e,t,n,r,i,s){var o=t&16383,u=t>>14;while(--s>=0){var a=this[e]&16383,f=this[e++]>>14,l=u*a+f*o;a=o*a+((l&16383)<<14)+n[r]+i,i=(a>>28)+(l>>14)+u*f,n[r++]=a&268435455}return i}function int2char(e){return BI_RM.charAt(e)}function intAt(e,t){var n=BI_RC[e.charCodeAt(t)];return n==null?-1:n}function bnpCopyTo(e){for(var t=this.t-1;t>=0;--t)e[t]=this[t];e.t=this.t,e.s=this.s}function bnpFromInt(e){this.t=1,this.s=e<0?-1:0,e>0?this[0]=e:e<-1?this[0]=e+DV:this.t=0}function nbv(e){var t=nbi();return t.fromInt(e),t}function bnpFromString(e,t){var n;if(t==16)n=4;else if(t==8)n=3;else if(t==256)n=8;else if(t==2)n=1;else if(t==32)n=5;else{if(t!=4){this.fromRadix(e,t);return}n=2}this.t=0,this.s=0;var r=e.length,i=!1,s=0;while(--r>=0){var o=n==8?e[r]&255:intAt(e,r);if(o<0){e.charAt(r)=="-"&&(i=!0);continue}i=!1,s==0?this[this.t++]=o:s+n>this.DB?(this[this.t-1]|=(o&(1<<this.DB-s)-1)<<s,this[this.t++]=o>>this.DB-s):this[this.t-1]|=o<<s,s+=n,s>=this.DB&&(s-=this.DB)}n==8&&(e[0]&128)!=0&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),i&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){var e=this.s&this.DM;while(this.t>0&&this[this.t-1]==e)--this.t}function bnToString(e){if(this.s<0)return"-"+this.negate().toString(e);var t;if(e==16)t=4;else if(e==8)t=3;else if(e==2)t=1;else if(e==32)t=5;else{if(e!=4)return this.toRadix(e);t=2}var n=(1<<t)-1,r,i=!1,s="",o=this.t,u=this.DB-o*this.DB%t;if(o-->0){u<this.DB&&(r=this[o]>>u)>0&&(i=!0,s=int2char(r));while(o>=0)u<t?(r=(this[o]&(1<<u)-1)<<t-u,r|=this[--o]>>(u+=this.DB-t)):(r=this[o]>>(u-=t)&n,u<=0&&(u+=this.DB,--o)),r>0&&(i=!0),i&&(s+=int2char(r))}return i?s:"0"}function bnNegate(){var e=nbi();return BigInteger.ZERO.subTo(this,e),e}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(e){var t=this.s-e.s;if(t!=0)return t;var n=this.t;t=n-e.t;if(t!=0)return this.s<0?-t:t;while(--n>=0)if((t=this[n]-e[n])!=0)return t;return 0}function nbits(e){var t=1,n;return(n=e>>>16)!=0&&(e=n,t+=16),(n=e>>8)!=0&&(e=n,t+=8),(n=e>>4)!=0&&(e=n,t+=4),(n=e>>2)!=0&&(e=n,t+=2),(n=e>>1)!=0&&(e=n,t+=1),t}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(e,t){var n;for(n=this.t-1;n>=0;--n)t[n+e]=this[n];for(n=e-1;n>=0;--n)t[n]=0;t.t=this.t+e,t.s=this.s}function bnpDRShiftTo(e,t){for(var n=e;n<this.t;++n)t[n-e]=this[n];t.t=Math.max(this.t-e,0),t.s=this.s}function bnpLShiftTo(e,t){var n=e%this.DB,r=this.DB-n,i=(1<<r)-1,s=Math.floor(e/this.DB),o=this.s<<n&this.DM,u;for(u=this.t-1;u>=0;--u)t[u+s+1]=this[u]>>r|o,o=(this[u]&i)<<n;for(u=s-1;u>=0;--u)t[u]=0;t[s]=o,t.t=this.t+s+1,t.s=this.s,t.clamp()}function bnpRShiftTo(e,t){t.s=this.s;var n=Math.floor(e/this.DB);if(n>=this.t){t.t=0;return}var r=e%this.DB,i=this.DB-r,s=(1<<r)-1;t[0]=this[n]>>r;for(var o=n+1;o<this.t;++o)t[o-n-1]|=(this[o]&s)<<i,t[o-n]=this[o]>>r;r>0&&(t[this.t-n-1]|=(this.s&s)<<i),t.t=this.t-n,t.clamp()}function bnpSubTo(e,t){var n=0,r=0,i=Math.min(e.t,this.t);while(n<i)r+=this[n]-e[n],t[n++]=r&this.DM,r>>=this.DB;if(e.t<this.t){r-=e.s;while(n<this.t)r+=this[n],t[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(n<e.t)r-=e[n],t[n++]=r&this.DM,r>>=this.DB;r-=e.s}t.s=r<0?-1:0,r<-1?t[n++]=this.DV+r:r>0&&(t[n++]=r),t.t=n,t.clamp()}function bnpMultiplyTo(e,t){var n=this.abs(),r=e.abs(),i=n.t;t.t=i+r.t;while(--i>=0)t[i]=0;for(i=0;i<r.t;++i)t[i+n.t]=n.am(0,r[i],t,i,0,n.t);t.s=0,t.clamp(),this.s!=e.s&&BigInteger.ZERO.subTo(t,t)}function bnpSquareTo(e){var t=this.abs(),n=e.t=2*t.t;while(--n>=0)e[n]=0;for(n=0;n<t.t-1;++n){var r=t.am(n,t[n],e,2*n,0,1);(e[n+t.t]+=t.am(n+1,2*t[n],e,2*n+1,r,t.t-n-1))>=t.DV&&(e[n+t.t]-=t.DV,e[n+t.t+1]=1)}e.t>0&&(e[e.t-1]+=t.am(n,t[n],e,2*n,0,1)),e.s=0,e.clamp()}function bnpDivRemTo(e,t,n){var r=e.abs();if(r.t<=0)return;var i=this.abs();if(i.t<r.t){t!=null&&t.fromInt(0),n!=null&&this.copyTo(n);return}n==null&&(n=nbi());var s=nbi(),o=this.s,u=e.s,a=this.DB-nbits(r[r.t-1]);a>0?(r.lShiftTo(a,s),i.lShiftTo(a,n)):(r.copyTo(s),i.copyTo(n));var f=s.t,l=s[f-1];if(l==0)return;var c=l*(1<<this.F1)+(f>1?s[f-2]>>this.F2:0),h=this.FV/c,p=(1<<this.F1)/c,d=1<<this.F2,v=n.t,m=v-f,g=t==null?nbi():t;s.dlShiftTo(m,g),n.compareTo(g)>=0&&(n[n.t++]=1,n.subTo(g,n)),BigInteger.ONE.dlShiftTo(f,g),g.subTo(s,s);while(s.t<f)s[s.t++]=0;while(--m>=0){var y=n[--v]==l?this.DM:Math.floor(n[v]*h+(n[v-1]+d)*p);if((n[v]+=s.am(0,y,n,m,0,f))<y){s.dlShiftTo(m,g),n.subTo(g,n);while(n[v]<--y)n.subTo(g,n)}}t!=null&&(n.drShiftTo(f,t),o!=u&&BigInteger.ZERO.subTo(t,t)),n.t=f,n.clamp(),a>0&&n.rShiftTo(a,n),o<0&&BigInteger.ZERO.subTo(n,n)}function bnMod(e){var t=nbi();return this.abs().divRemTo(e,null,t),this.s<0&&t.compareTo(BigInteger.ZERO)>0&&e.subTo(t,t),t}function Classic(e){this.m=e}function cConvert(e){return e.s<0||e.compareTo(this.m)>=0?e.mod(this.m):e}function cRevert(e){return e}function cReduce(e){e.divRemTo(this.m,null,e)}function cMulTo(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function cSqrTo(e,t){e.squareTo(t),this.reduce(t)}function bnpInvDigit(){if(this.t<1)return 0;var e=this[0];if((e&1)==0)return 0;var t=e&3;return t=t*(2-(e&15)*t)&15,t=t*(2-(e&255)*t)&255,t=t*(2-((e&65535)*t&65535))&65535,t=t*(2-e*t%this.DV)%this.DV,t>0?this.DV-t:-t}function Montgomery(e){this.m=e,this.mp=e.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}function montConvert(e){var t=nbi();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),e.s<0&&t.compareTo(BigInteger.ZERO)>0&&this.m.subTo(t,t),t}function montRevert(e){var t=nbi();return e.copyTo(t),this.reduce(t),t}function montReduce(e){while(e.t<=this.mt2)e[e.t++]=0;for(var t=0;t<this.m.t;++t){var n=e[t]&32767,r=n*this.mpl+((n*this.mph+(e[t]>>15)*this.mpl&this.um)<<15)&e.DM;n=t+this.m.t,e[n]+=this.m.am(0,r,e,t,0,this.m.t);while(e[n]>=e.DV)e[n]-=e.DV,e[++n]++}e.clamp(),e.drShiftTo(this.m.t,e),e.compareTo(this.m)>=0&&e.subTo(this.m,e)}function montSqrTo(e,t){e.squareTo(t),this.reduce(t)}function montMulTo(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function bnpIsEven(){return(this.t>0?this[0]&1:this.s)==0}function bnpExp(e,t){if(e>4294967295||e<1)return BigInteger.ONE;var n=nbi(),r=nbi(),i=t.convert(this),s=nbits(e)-1;i.copyTo(n);while(--s>=0){t.sqrTo(n,r);if((e&1<<s)>0)t.mulTo(r,i,n);else{var o=n;n=r,r=o}}return t.revert(n)}function bnModPowInt(e,t){var n;return e<256||t.isEven()?n=new Classic(t):n=new Montgomery(t),this.exp(e,n)}var dbits,canary=0xdeadbeefcafe,j_lm=(canary&16777215)==15715070;j_lm&&navigator.appName=="Microsoft Internet Explorer"?(BigInteger.prototype.am=am2,dbits=30):j_lm&&navigator.appName!="Netscape"?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv)BI_RC[rr++]=vv;rr="a".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;rr="A".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1);
function bnClone(){var e=nbi();return this.copyTo(e),e}function bnIntValue(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}function bnpChunkSize(e){return Math.floor(Math.LN2*this.DB/Math.log(e))}function bnSigNum(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function bnpToRadix(e){e==null&&(e=10);if(this.signum()==0||e<2||e>36)return"0";var t=this.chunkSize(e),n=Math.pow(e,t),r=nbv(n),i=nbi(),s=nbi(),o="";this.divRemTo(r,i,s);while(i.signum()>0)o=(n+s.intValue()).toString(e).substr(1)+o,i.divRemTo(r,i,s);return s.intValue().toString(e)+o}function bnpFromRadix(e,t){this.fromInt(0),t==null&&(t=10);var n=this.chunkSize(t),r=Math.pow(t,n),i=!1,s=0,o=0;for(var u=0;u<e.length;++u){var a=intAt(e,u);if(a<0){e.charAt(u)=="-"&&this.signum()==0&&(i=!0);continue}o=t*o+a,++s>=n&&(this.dMultiply(r),this.dAddOffset(o,0),s=0,o=0)}s>0&&(this.dMultiply(Math.pow(t,s)),this.dAddOffset(o,0)),i&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(e,t,n){if("number"==typeof t)if(e<2)this.fromInt(1);else{this.fromNumber(e,n),this.testBit(e-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(e-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);while(!this.isProbablePrime(t))this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(BigInteger.ONE.shiftLeft(e-1),this)}else{var r=new Array,i=e&7;r.length=(e>>3)+1,t.nextBytes(r),i>0?r[0]&=(1<<i)-1:r[0]=0,this.fromString(r,256)}}function bnToByteArray(){var e=this.t,t=new Array;t[0]=this.s;var n=this.DB-e*this.DB%8,r,i=0;if(e-->0){n<this.DB&&(r=this[e]>>n)!=(this.s&this.DM)>>n&&(t[i++]=r|this.s<<this.DB-n);while(e>=0){n<8?(r=(this[e]&(1<<n)-1)<<8-n,r|=this[--e]>>(n+=this.DB-8)):(r=this[e]>>(n-=8)&255,n<=0&&(n+=this.DB,--e)),(r&128)!=0&&(r|=-256),i==0&&(this.s&128)!=(r&128)&&++i;if(i>0||r!=this.s)t[i++]=r}}return t}function bnEquals(e){return this.compareTo(e)==0}function bnMin(e){return this.compareTo(e)<0?this:e}function bnMax(e){return this.compareTo(e)>0?this:e}function bnpBitwiseTo(e,t,n){var r,i,s=Math.min(e.t,this.t);for(r=0;r<s;++r)n[r]=t(this[r],e[r]);if(e.t<this.t){i=e.s&this.DM;for(r=s;r<this.t;++r)n[r]=t(this[r],i);n.t=this.t}else{i=this.s&this.DM;for(r=s;r<e.t;++r)n[r]=t(i,e[r]);n.t=e.t}n.s=t(this.s,e.s),n.clamp()}function op_and(e,t){return e&t}function bnAnd(e){var t=nbi();return this.bitwiseTo(e,op_and,t),t}function op_or(e,t){return e|t}function bnOr(e){var t=nbi();return this.bitwiseTo(e,op_or,t),t}function op_xor(e,t){return e^t}function bnXor(e){var t=nbi();return this.bitwiseTo(e,op_xor,t),t}function op_andnot(e,t){return e&~t}function bnAndNot(e){var t=nbi();return this.bitwiseTo(e,op_andnot,t),t}function bnNot(){var e=nbi();for(var t=0;t<this.t;++t)e[t]=this.DM&~this[t];return e.t=this.t,e.s=~this.s,e}function bnShiftLeft(e){var t=nbi();return e<0?this.rShiftTo(-e,t):this.lShiftTo(e,t),t}function bnShiftRight(e){var t=nbi();return e<0?this.lShiftTo(-e,t):this.rShiftTo(e,t),t}function lbit(e){if(e==0)return-1;var t=0;return(e&65535)==0&&(e>>=16,t+=16),(e&255)==0&&(e>>=8,t+=8),(e&15)==0&&(e>>=4,t+=4),(e&3)==0&&(e>>=2,t+=2),(e&1)==0&&++t,t}function bnGetLowestSetBit(){for(var e=0;e<this.t;++e)if(this[e]!=0)return e*this.DB+lbit(this[e]);return this.s<0?this.t*this.DB:-1}function cbit(e){var t=0;while(e!=0)e&=e-1,++t;return t}function bnBitCount(){var e=0,t=this.s&this.DM;for(var n=0;n<this.t;++n)e+=cbit(this[n]^t);return e}function bnTestBit(e){var t=Math.floor(e/this.DB);return t>=this.t?this.s!=0:(this[t]&1<<e%this.DB)!=0}function bnpChangeBit(e,t){var n=BigInteger.ONE.shiftLeft(e);return this.bitwiseTo(n,t,n),n}function bnSetBit(e){return this.changeBit(e,op_or)}function bnClearBit(e){return this.changeBit(e,op_andnot)}function bnFlipBit(e){return this.changeBit(e,op_xor)}function bnpAddTo(e,t){var n=0,r=0,i=Math.min(e.t,this.t);while(n<i)r+=this[n]+e[n],t[n++]=r&this.DM,r>>=this.DB;if(e.t<this.t){r+=e.s;while(n<this.t)r+=this[n],t[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(n<e.t)r+=e[n],t[n++]=r&this.DM,r>>=this.DB;r+=e.s}t.s=r<0?-1:0,r>0?t[n++]=r:r<-1&&(t[n++]=this.DV+r),t.t=n,t.clamp()}function bnAdd(e){var t=nbi();return this.addTo(e,t),t}function bnSubtract(e){var t=nbi();return this.subTo(e,t),t}function bnMultiply(e){var t=nbi();return this.multiplyTo(e,t),t}function bnSquare(){var e=nbi();return this.squareTo(e),e}function bnDivide(e){var t=nbi();return this.divRemTo(e,t,null),t}function bnRemainder(e){var t=nbi();return this.divRemTo(e,null,t),t}function bnDivideAndRemainder(e){var t=nbi(),n=nbi();return this.divRemTo(e,t,n),new Array(t,n)}function bnpDMultiply(e){this[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(e,t){if(e==0)return;while(this.t<=t)this[this.t++]=0;this[t]+=e;while(this[t]>=this.DV)this[t]-=this.DV,++t>=this.t&&(this[this.t++]=0),++this[t]}function NullExp(){}function nNop(e){return e}function nMulTo(e,t,n){e.multiplyTo(t,n)}function nSqrTo(e,t){e.squareTo(t)}function bnPow(e){return this.exp(e,new NullExp)}function bnpMultiplyLowerTo(e,t,n){var r=Math.min(this.t+e.t,t);n.s=0,n.t=r;while(r>0)n[--r]=0;var i;for(i=n.t-this.t;r<i;++r)n[r+this.t]=this.am(0,e[r],n,r,0,this.t);for(i=Math.min(e.t,t);r<i;++r)this.am(0,e[r],n,r,0,t-r);n.clamp()}function bnpMultiplyUpperTo(e,t,n){--t;var r=n.t=this.t+e.t-t;n.s=0;while(--r>=0)n[r]=0;for(r=Math.max(t-this.t,0);r<e.t;++r)n[this.t+r-t]=this.am(t-r,e[r],n,0,0,this.t+r-t);n.clamp(),n.drShiftTo(1,n)}function Barrett(e){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}function barrettConvert(e){if(e.s<0||e.t>2*this.m.t)return e.mod(this.m);if(e.compareTo(this.m)<0)return e;var t=nbi();return e.copyTo(t),this.reduce(t),t}function barrettRevert(e){return e}function barrettReduce(e){e.drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(e.compareTo(this.r2)<0)e.dAddOffset(1,this.m.t+1);e.subTo(this.r2,e);while(e.compareTo(this.m)>=0)e.subTo(this.m,e)}function barrettSqrTo(e,t){e.squareTo(t),this.reduce(t)}function barrettMulTo(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function bnModPow(e,t){var n=e.bitLength(),r,i=nbv(1),s;if(n<=0)return i;n<18?r=1:n<48?r=3:n<144?r=4:n<768?r=5:r=6,n<8?s=new Classic(t):t.isEven()?s=new Barrett(t):s=new Montgomery(t);var o=new Array,u=3,a=r-1,f=(1<<r)-1;o[1]=s.convert(this);if(r>1){var l=nbi();s.sqrTo(o[1],l);while(u<=f)o[u]=nbi(),s.mulTo(l,o[u-2],o[u]),u+=2}var c=e.t-1,h,p=!0,d=nbi(),v;n=nbits(e[c])-1;while(c>=0){n>=a?h=e[c]>>n-a&f:(h=(e[c]&(1<<n+1)-1)<<a-n,c>0&&(h|=e[c-1]>>this.DB+n-a)),u=r;while((h&1)==0)h>>=1,--u;(n-=u)<0&&(n+=this.DB,--c);if(p)o[h].copyTo(i),p=!1;else{while(u>1)s.sqrTo(i,d),s.sqrTo(d,i),u-=2;u>0?s.sqrTo(i,d):(v=i,i=d,d=v),s.mulTo(d,o[h],i)}while(c>=0&&(e[c]&1<<n)==0)s.sqrTo(i,d),v=i,i=d,d=v,--n<0&&(n=this.DB-1,--c)}return s.revert(i)}function bnGCD(e){var t=this.s<0?this.negate():this.clone(),n=e.s<0?e.negate():e.clone();if(t.compareTo(n)<0){var r=t;t=n,n=r}var i=t.getLowestSetBit(),s=n.getLowestSetBit();if(s<0)return t;i<s&&(s=i),s>0&&(t.rShiftTo(s,t),n.rShiftTo(s,n));while(t.signum()>0)(i=t.getLowestSetBit())>0&&t.rShiftTo(i,t),(i=n.getLowestSetBit())>0&&n.rShiftTo(i,n),t.compareTo(n)>=0?(t.subTo(n,t),t.rShiftTo(1,t)):(n.subTo(t,n),n.rShiftTo(1,n));return s>0&&n.lShiftTo(s,n),n}function bnpModInt(e){if(e<=0)return 0;var t=this.DV%e,n=this.s<0?e-1:0;if(this.t>0)if(t==0)n=this[0]%e;else for(var r=this.t-1;r>=0;--r)n=(t*n+this[r])%e;return n}function bnModInverse(e){var t=e.isEven();if(this.isEven()&&t||e.signum()==0)return BigInteger.ZERO;var n=e.clone(),r=this.clone(),i=nbv(1),s=nbv(0),o=nbv(0),u=nbv(1);while(n.signum()!=0){while(n.isEven()){n.rShiftTo(1,n);if(t){if(!i.isEven()||!s.isEven())i.addTo(this,i),s.subTo(e,s);i.rShiftTo(1,i)}else s.isEven()||s.subTo(e,s);s.rShiftTo(1,s)}while(r.isEven()){r.rShiftTo(1,r);if(t){if(!o.isEven()||!u.isEven())o.addTo(this,o),u.subTo(e,u);o.rShiftTo(1,o)}else u.isEven()||u.subTo(e,u);u.rShiftTo(1,u)}n.compareTo(r)>=0?(n.subTo(r,n),t&&i.subTo(o,i),s.subTo(u,s)):(r.subTo(n,r),t&&o.subTo(i,o),u.subTo(s,u))}return r.compareTo(BigInteger.ONE)!=0?BigInteger.ZERO:u.compareTo(e)>=0?u.subtract(e):u.signum()<0?(u.addTo(e,u),u.signum()<0?u.add(e):u):u}function bnIsProbablePrime(e){var t,n=this.abs();if(n.t==1&&n[0]<=lowprimes[lowprimes.length-1]){for(t=0;t<lowprimes.length;++t)if(n[0]==lowprimes[t])return!0;return!1}if(n.isEven())return!1;t=1;while(t<lowprimes.length){var r=lowprimes[t],i=t+1;while(i<lowprimes.length&&r<lplim)r*=lowprimes[i++];r=n.modInt(r);while(t<i)if(r%lowprimes[t++]==0)return!1}return n.millerRabin(e)}function bnpMillerRabin(e){var t=this.subtract(BigInteger.ONE),n=t.getLowestSetBit();if(n<=0)return!1;var r=t.shiftRight(n);e=e+1>>1,e>lowprimes.length&&(e=lowprimes.length);var i=nbi();for(var s=0;s<e;++s){i.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var o=i.modPow(r,this);if(o.compareTo(BigInteger.ONE)!=0&&o.compareTo(t)!=0){var u=1;while(u++<n&&o.compareTo(t)!=0){o=o.modPowInt(2,this);if(o.compareTo(BigInteger.ONE)==0)return!1}if(o.compareTo(t)!=0)return!1}}return!0}NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=(1<<26)/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,BigInteger.prototype.square=bnSquare;
function ECFieldElementFp(e,t){this.x=t,this.q=e}function feFpEquals(e){return e==this?!0:this.q.equals(e.q)&&this.x.equals(e.x)}function feFpToBigInteger(){return this.x}function feFpNegate(){return new ECFieldElementFp(this.q,this.x.negate().mod(this.q))}function feFpAdd(e){return new ECFieldElementFp(this.q,this.x.add(e.toBigInteger()).mod(this.q))}function feFpSubtract(e){return new ECFieldElementFp(this.q,this.x.subtract(e.toBigInteger()).mod(this.q))}function feFpMultiply(e){return new ECFieldElementFp(this.q,this.x.multiply(e.toBigInteger()).mod(this.q))}function feFpSquare(){return new ECFieldElementFp(this.q,this.x.square().mod(this.q))}function feFpDivide(e){return new ECFieldElementFp(this.q,this.x.multiply(e.toBigInteger().modInverse(this.q)).mod(this.q))}function ECPointFp(e,t,n,r){this.curve=e,this.x=t,this.y=n,r==null?this.z=BigInteger.ONE:this.z=r,this.zinv=null}function pointFpGetX(){return this.zinv==null&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpGetY(){return this.zinv==null&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpEquals(e){if(e==this)return!0;if(this.isInfinity())return e.isInfinity();if(e.isInfinity())return this.isInfinity();var t,n;return t=e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q),t.equals(BigInteger.ZERO)?(n=e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q),n.equals(BigInteger.ZERO)):!1}function pointFpIsInfinity(){return this.x==null&&this.y==null?!0:this.z.equals(BigInteger.ZERO)&&!this.y.toBigInteger().equals(BigInteger.ZERO)}function pointFpNegate(){return new ECPointFp(this.curve,this.x,this.y.negate(),this.z)}function pointFpAdd(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q),n=e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q);if(BigInteger.ZERO.equals(n))return BigInteger.ZERO.equals(t)?this.twice():this.curve.getInfinity();var r=new BigInteger("3"),i=this.x.toBigInteger(),s=this.y.toBigInteger(),o=e.x.toBigInteger(),u=e.y.toBigInteger(),a=n.square(),f=a.multiply(n),l=i.multiply(a),c=t.square().multiply(this.z),h=c.subtract(l.shiftLeft(1)).multiply(e.z).subtract(f).multiply(n).mod(this.curve.q),p=l.multiply(r).multiply(t).subtract(s.multiply(f)).subtract(c.multiply(t)).multiply(e.z).add(t.multiply(f)).mod(this.curve.q),d=f.multiply(this.z).multiply(e.z).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(h),this.curve.fromBigInteger(p),d)}function pointFpTwice(){if(this.isInfinity())return this;if(this.y.toBigInteger().signum()==0)return this.curve.getInfinity();var e=new BigInteger("3"),t=this.x.toBigInteger(),n=this.y.toBigInteger(),r=n.multiply(this.z),i=r.multiply(n).mod(this.curve.q),s=this.curve.a.toBigInteger(),o=t.square().multiply(e);BigInteger.ZERO.equals(s)||(o=o.add(this.z.square().multiply(s))),o=o.mod(this.curve.q);var u=o.square().subtract(t.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(r).mod(this.curve.q),a=o.multiply(e).multiply(t).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(o.square().multiply(o)).mod(this.curve.q),f=r.square().multiply(r).shiftLeft(3).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(u),this.curve.fromBigInteger(a),f)}function pointFpMultiply(e){if(this.isInfinity())return this;if(e.signum()==0)return this.curve.getInfinity();var t=e,n=t.multiply(new BigInteger("3")),r=this.negate(),i=this,s;for(s=n.bitLength()-2;s>0;--s){i=i.twice();var o=n.testBit(s),u=t.testBit(s);o!=u&&(i=i.add(o?this:r))}return i}function pointFpMultiplyTwo(e,t,n){var r;e.bitLength()>n.bitLength()?r=e.bitLength()-1:r=n.bitLength()-1;var i=this.curve.getInfinity(),s=this.add(t);while(r>=0)i=i.twice(),e.testBit(r)?n.testBit(r)?i=i.add(s):i=i.add(this):n.testBit(r)&&(i=i.add(t)),--r;return i}function ECCurveFp(e,t,n){this.q=e,this.a=this.fromBigInteger(t),this.b=this.fromBigInteger(n),this.infinity=new ECPointFp(this,null,null)}function curveFpGetQ(){return this.q}function curveFpGetA(){return this.a}function curveFpGetB(){return this.b}function curveFpEquals(e){return e==this?!0:this.q.equals(e.q)&&this.a.equals(e.a)&&this.b.equals(e.b)}function curveFpGetInfinity(){return this.infinity}function curveFpFromBigInteger(e){return new ECFieldElementFp(this.q,e)}function curveFpDecodePointHex(e){switch(parseInt(e.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var t=(e.length-2)/2,n=e.substr(2,t),r=e.substr(t+2,t);return new ECPointFp(this,this.fromBigInteger(new BigInteger(n,16)),this.fromBigInteger(new BigInteger(r,16)));default:return null}}ECFieldElementFp.prototype.equals=feFpEquals,ECFieldElementFp.prototype.toBigInteger=feFpToBigInteger,ECFieldElementFp.prototype.negate=feFpNegate,ECFieldElementFp.prototype.add=feFpAdd,ECFieldElementFp.prototype.subtract=feFpSubtract,ECFieldElementFp.prototype.multiply=feFpMultiply,ECFieldElementFp.prototype.square=feFpSquare,ECFieldElementFp.prototype.divide=feFpDivide,ECPointFp.prototype.getX=pointFpGetX,ECPointFp.prototype.getY=pointFpGetY,ECPointFp.prototype.equals=pointFpEquals,ECPointFp.prototype.isInfinity=pointFpIsInfinity,ECPointFp.prototype.negate=pointFpNegate,ECPointFp.prototype.add=pointFpAdd,ECPointFp.prototype.twice=pointFpTwice,ECPointFp.prototype.multiply=pointFpMultiply,ECPointFp.prototype.multiplyTwo=pointFpMultiplyTwo,ECCurveFp.prototype.getQ=curveFpGetQ,ECCurveFp.prototype.getA=curveFpGetA,ECCurveFp.prototype.getB=curveFpGetB,ECCurveFp.prototype.equals=curveFpEquals,ECCurveFp.prototype.getInfinity=curveFpGetInfinity,ECCurveFp.prototype.fromBigInteger=curveFpFromBigInteger,ECCurveFp.prototype.decodePointHex=curveFpDecodePointHex;
function X9ECParameters(e,t,n,r){this.curve=e,this.g=t,this.n=n,this.h=r}function x9getCurve(){return this.curve}function x9getG(){return this.g}function x9getN(){return this.n}function x9getH(){return this.h}function fromHex(e){return new BigInteger(e,16)}function secp128r1(){var e=fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF"),t=fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC"),n=fromHex("E87579C11079F43DD824993C2CEE5ED3"),r=fromHex("FFFFFFFE0000000075A30D1B9038A115"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("04161FF7528B899B2D0C28607CA52C5B86CF5AC8395BAFEB13C02DA292DDED7A83");return new X9ECParameters(s,o,r,i)}function secp160k1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73"),t=BigInteger.ZERO,n=fromHex("7"),r=fromHex("0100000000000000000001B8FA16DFAB9ACA16B6B3"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("043B4C382CE37AA192A4019E763036F4F5DD4D7EBB938CF935318FDCED6BC28286531733C3F03C4FEE");return new X9ECParameters(s,o,r,i)}function secp160r1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF"),t=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC"),n=fromHex("1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45"),r=fromHex("0100000000000000000001F4C8F927AED3CA752257"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("044A96B5688EF573284664698968C38BB913CBFC8223A628553168947D59DCC912042351377AC5FB32");return new X9ECParameters(s,o,r,i)}function secp192k1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37"),t=BigInteger.ZERO,n=fromHex("3"),r=fromHex("FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("04DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D");return new X9ECParameters(s,o,r,i)}function secp192r1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF"),t=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC"),n=fromHex("64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1"),r=fromHex("FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("04188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF101207192B95FFC8DA78631011ED6B24CDD573F977A11E794811");return new X9ECParameters(s,o,r,i)}function secp224r1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001"),t=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE"),n=fromHex("B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4"),r=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("04B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34");return new X9ECParameters(s,o,r,i)}function secp256k1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F"),t=BigInteger.ZERO,n=fromHex("7"),r=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("0479BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8");return new X9ECParameters(s,o,r,i)}function secp256r1(){var e=fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF"),t=fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC"),n=fromHex("5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B"),r=fromHex("FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("046B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C2964FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5");return new X9ECParameters(s,o,r,i)}function getSECCurveByName(e){return e=="secp128r1"?secp128r1():e=="secp160k1"?secp160k1():e=="secp160r1"?secp160r1():e=="secp192k1"?secp192k1():e=="secp192r1"?secp192r1():e=="secp224r1"?secp224r1():e=="secp256k1"?secp256k1():e=="secp256r1"?secp256r1():null}X9ECParameters.prototype.getCurve=x9getCurve,X9ECParameters.prototype.getG=x9getG,X9ECParameters.prototype.getN=x9getN,X9ECParameters.prototype.getH=x9getH;
var EventEmitter=function(){};EventEmitter.prototype.on=function(e,t,n){n||(n=this),this._listeners||(this._listeners={}),this._listeners[e]||(this._listeners[e]=[]),this._unbinders||(this._unbinders={}),this._unbinders[e]||(this._unbinders[e]=[]);var r=function(e){t.apply(n,[e])};this._unbinders[e].push(t),this._listeners[e].push(r)},EventEmitter.prototype.trigger=function(e,t){t===undefined&&(t={}),this._listeners||(this._listeners={});if(!this._listeners[e])return;var n=this._listeners[e].length;while(n--)this._listeners[e][n](t)},EventEmitter.prototype.removeListener=function(e,t){this._unbinders||(this._unbinders={});if(!this._unbinders[e])return;var n=this._unbinders[e].length;while(n--)this._unbinders[e][n]===t&&(this._unbinders[e].splice(n,1),this._listeners[e].splice(n,1))},EventEmitter.augment=function(e){for(var t in EventEmitter.prototype)e[t]||(e[t]=EventEmitter.prototype[t])};
(function(e){var t=e;"object"!=typeof module&&(t.EventEmitter=EventEmitter)})("object"==typeof module?module.exports:window.Bitcoin={});
BigInteger.valueOf=nbv,BigInteger.prototype.toByteArrayUnsigned=function(){var e=this.abs().toByteArray();return e.length?(e[0]==0&&(e=e.slice(1)),e.map(function(e){return e<0?e+256:e})):e},BigInteger.fromByteArrayUnsigned=function(e){return e.length?e[0]&128?new BigInteger([0].concat(e)):new BigInteger(e):e.valueOf(0)},BigInteger.prototype.toByteArraySigned=function(){var e=this.abs().toByteArrayUnsigned(),t=this.compareTo(BigInteger.ZERO)<0;return t?e[0]&128?e.unshift(128):e[0]|=128:e[0]&128&&e.unshift(0),e},BigInteger.fromByteArraySigned=function(e){return e[0]&128?(e[0]&=127,BigInteger.fromByteArrayUnsigned(e).negate()):BigInteger.fromByteArrayUnsigned(e)};var names=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];"undefined"==typeof window.console&&(window.console={});for(var i=0;i<names.length;++i)"undefined"==typeof window.console[names[i]]&&(window.console[names[i]]=function(){});Bitcoin.Util={isArray:Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},makeFilledArray:function(e,t){var n=[],r=0;while(r<e)n[r++]=t;return n},numToVarInt:function(e){return e<253?[e]:e<=65536?[253,e>>>8,e&255]:e<=1?[254].concat(Crypto.util.wordsToBytes([e])):[255].concat(Crypto.util.wordsToBytes([e>>>32,e]))},valueToBigInt:function(e){return e instanceof BigInteger?e:BigInteger.fromByteArrayUnsigned(e)},formatValue:function(e){var t=this.valueToBigInt(e).toString(),n=t.length>8?t.substr(0,t.length-8):"0",r=t.length>8?t.substr(t.length-8):t;while(r.length<8)r="0"+r;r=r.replace(/0*$/,"");while(r.length<2)r+="0";return n+"."+r},parseValue:function(e){var t=e.split("."),n=t[0],r=t[1]||"0";while(r.length<8)r+="0";r=r.replace(/^0+/g,"");var i=BigInteger.valueOf(parseInt(n));return i=i.multiply(BigInteger.valueOf(1e8)),i=i.add(BigInteger.valueOf(parseInt(r))),i},sha256ripe160:function(e){return Crypto.RIPEMD160(Crypto.SHA256(e,{asBytes:!0}),{asBytes:!0})}};for(var i in Crypto.util)Crypto.util.hasOwnProperty(i)&&(Bitcoin.Util[i]=Crypto.util[i]);
(function(e){e.Base58={alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",validRegex:/^[1-9A-HJ-NP-Za-km-z]+$/,base:BigInteger.valueOf(58),encode:function(e){var n=BigInteger.fromByteArrayUnsigned(e),r=[];while(n.compareTo(t.base)>=0){var i=n.mod(t.base);r.unshift(t.alphabet[i.intValue()]),n=n.subtract(i).divide(t.base)}r.unshift(t.alphabet[n.intValue()]);for(var s=0;s<e.length;s++){if(e[s]!=0)break;r.unshift(t.alphabet[0])}return r.join("")},decode:function(e){var n=BigInteger.valueOf(0),r=0;for(var i=e.length-1;i>=0;i--){var s=t.alphabet.indexOf(e[i]);if(s<0)throw"Invalid character";n=n.add(BigInteger.valueOf(s).multiply(t.base.pow(e.length-1-i))),e[i]=="1"?r++:r=0}var o=n.toByteArrayUnsigned();while(r-->0)o.unshift(0);return o}};var t=e.Base58})("undefined"!=typeof Bitcoin?Bitcoin:module.exports);
Bitcoin.Address=function(e){"string"==typeof e&&(e=Bitcoin.Address.decodeString(e)),this.hash=e,this.version=0},Bitcoin.Address.prototype.toString=function(){var e=this.hash.slice(0);e.unshift(this.version);var t=Crypto.SHA256(Crypto.SHA256(e,{asBytes:!0}),{asBytes:!0}),n=e.concat(t.slice(0,4));return Bitcoin.Base58.encode(n)},Bitcoin.Address.prototype.getHashBase64=function(){return Crypto.util.bytesToBase64(this.hash)},Bitcoin.Address.decodeString=function(e){var t=Bitcoin.Base58.decode(e),n=t.slice(0,21),r=Crypto.SHA256(Crypto.SHA256(n,{asBytes:!0}),{asBytes:!0});if(r[0]!=t[21]||r[1]!=t[22]||r[2]!=t[23]||r[3]!=t[24])throw"Checksum validation failed!";var i=n.shift();if(i!=0)throw"Version "+i+" not supported!";return n};
function integerToBytes(e,t){var n=e.toByteArrayUnsigned();if(t<n.length)n=n.slice(n.length-t);else while(t>n.length)n.unshift(0);return n}function dmp(e){return e instanceof BigInteger||(e=e.toBigInteger()),Crypto.util.bytesToHex(e.toByteArrayUnsigned())}ECFieldElementFp.prototype.getByteLength=function(){return Math.floor((this.toBigInteger().bitLength()+7)/8)},ECPointFp.prototype.getEncoded=function(e){var t=this.getX().toBigInteger(),n=this.getY().toBigInteger(),r=integerToBytes(t,32);return e?n.isEven()?r.unshift(2):r.unshift(3):(r.unshift(4),r=r.concat(integerToBytes(n,32))),r},ECPointFp.decodeFrom=function(e,t){var n=t[0],r=t.length-1,i=t.slice(1,1+r/2),s=t.slice(1+r/2,1+r);i.unshift(0),s.unshift(0);var o=new BigInteger(i),u=new BigInteger(s);return new ECPointFp(e,e.fromBigInteger(o),e.fromBigInteger(u))},ECPointFp.prototype.add2D=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;if(this.x.equals(e.x))return this.y.equals(e.y)?this.twice():this.curve.getInfinity();var t=e.x.subtract(this.x),n=e.y.subtract(this.y),r=n.divide(t),i=r.square().subtract(this.x).subtract(e.x),s=r.multiply(this.x.subtract(i)).subtract(this.y);return new ECPointFp(this.curve,i,s)},ECPointFp.prototype.twice2D=function(){if(this.isInfinity())return this;if(this.y.toBigInteger().signum()==0)return this.curve.getInfinity();var e=this.curve.fromBigInteger(BigInteger.valueOf(2)),t=this.curve.fromBigInteger(BigInteger.valueOf(3)),n=this.x.square().multiply(t).add(this.curve.a).divide(this.y.multiply(e)),r=n.square().subtract(this.x.multiply(e)),i=n.multiply(this.x.subtract(r)).subtract(this.y);return new ECPointFp(this.curve,r,i)},ECPointFp.prototype.multiply2D=function(e){if(this.isInfinity())return this;if(e.signum()==0)return this.curve.getInfinity();var t=e,n=t.multiply(new BigInteger("3")),r=this.negate(),i=this,s;for(s=n.bitLength()-2;s>0;--s){i=i.twice();var o=n.testBit(s),u=t.testBit(s);o!=u&&(i=i.add2D(o?this:r))}return i},ECPointFp.prototype.isOnCurve=function(){var e=this.getX().toBigInteger(),t=this.getY().toBigInteger(),n=this.curve.getA().toBigInteger(),r=this.curve.getB().toBigInteger(),i=this.curve.getQ(),s=t.multiply(t).mod(i),o=e.multiply(e).multiply(e).add(n.multiply(e)).add(r).mod(i);return s.equals(o)},ECPointFp.prototype.toString=function(){return"("+this.getX().toBigInteger().toString()+","+this.getY().toBigInteger().toString()+")"},ECPointFp.prototype.validate=function(){var e=this.curve.getQ();if(this.isInfinity())throw new Error("Point is at infinity.");var t=this.getX().toBigInteger(),n=this.getY().toBigInteger();if(t.compareTo(BigInteger.ONE)<0||t.compareTo(e.subtract(BigInteger.ONE))>0)throw new Error("x coordinate out of bounds");if(n.compareTo(BigInteger.ONE)<0||n.compareTo(e.subtract(BigInteger.ONE))>0)throw new Error("y coordinate out of bounds");if(!this.isOnCurve())throw new Error("Point is not on the curve.");if(this.multiply(e).isInfinity())throw new Error("Point is not a scalar multiple of G.");return!0},Bitcoin.ECDSA=function(){function r(e,t,n,r){var i=Math.max(t.bitLength(),r.bitLength()),s=e.add2D(n),o=e.curve.getInfinity();for(var u=i-1;u>=0;--u)o=o.twice2D(),o.z=BigInteger.ONE,t.testBit(u)?r.testBit(u)?o=o.add2D(s):o=o.add2D(e):r.testBit(u)&&(o=o.add2D(n));return o}var e=getSECCurveByName("secp256k1"),t=new SecureRandom,n=null,i={getBigRandom:function(e){return(new BigInteger(e.bitLength(),t)).mod(e.subtract(BigInteger.ONE)).add(BigInteger.ONE)},sign:function(t,n){var r=n,s=e.getN(),o=BigInteger.fromByteArrayUnsigned(t);do var u=i.getBigRandom(s),a=e.getG(),f=a.multiply(u),l=f.getX().toBigInteger().mod(s);while(l.compareTo(BigInteger.ZERO)<=0);var c=u.modInverse(s).multiply(o.add(r.multiply(l))).mod(s);return i.serializeSig(l,c)},verify:function(t,n,r){var s,o;if(Bitcoin.Util.isArray(n)){var u=i.parseSig(n);s=u.r,o=u.s}else{if("object"!=typeof n||!n.r||!n.s)throw"Invalid value for signature";s=n.r,o=n.s}var a;if(r instanceof ECPointFp)a=r;else{if(!Bitcoin.Util.isArray(r))throw"Invalid format for pubkey value, must be byte array or ECPointFp";a=ECPointFp.decodeFrom(e.getCurve(),r)}var f=BigInteger.fromByteArrayUnsigned(t);return i.verifyRaw(f,s,o,a)},verifyRaw:function(t,n,r,i){var s=e.getN(),o=e.getG();if(n.compareTo(BigInteger.ONE)<0||n.compareTo(s)>=0)return!1;if(r.compareTo(BigInteger.ONE)<0||r.compareTo(s)>=0)return!1;var u=r.modInverse(s),a=t.multiply(u).mod(s),f=n.multiply(u).mod(s),l=o.multiply(a).add(i.multiply(f)),c=l.getX().toBigInteger().mod(s);return c.equals(n)},serializeSig:function(e,t){var n=e.toByteArraySigned(),r=t.toByteArraySigned(),i=[];return i.push(2),i.push(n.length),i=i.concat(n),i.push(2),i.push(r.length),i=i.concat(r),i.unshift(i.length),i.unshift(48),i},parseSig:function(e){var t;if(e[0]!=48)throw new Error("Signature not a valid DERSequence");t=2;if(e[t]!=2)throw new Error("First element in signature must be a DERInteger");var n=e.slice(t+2,t+2+e[t+1]);t+=2+e[t+1];if(e[t]!=2)throw new Error("Second element in signature must be a DERInteger");var r=e.slice(t+2,t+2+e[t+1]);t+=2+e[t+1];var i=BigInteger.fromByteArrayUnsigned(n),s=BigInteger.fromByteArrayUnsigned(r);return{r:i,s:s}},parseSigCompact:function(t){if(t.length!==65)throw"Signature has the wrong length";var n=t[0]-27;if(n<0||n>7)throw"Invalid signature type";var r=e.getN(),i=BigInteger.fromByteArrayUnsigned(t.slice(1,33)).mod(r),s=BigInteger.fromByteArrayUnsigned(t.slice(33,65)).mod(r);return{r:i,s:s,i:n}},recoverPubKey:function(t,s,o,u){u&=3;var a=u&1,f=u>>1,l=e.getN(),c=e.getG(),h=e.getCurve(),p=h.getQ(),d=h.getA().toBigInteger(),v=h.getB().toBigInteger();n||(n=p.add(BigInteger.ONE).divide(BigInteger.valueOf(4)));var m=f?t.add(l):t,g=m.multiply(m).multiply(m).add(d.multiply(m)).add(v).mod(p),y=g.modPow(n,p),b=y.isEven()?u%2:(u+1)%2,w=(y.isEven()?!a:a)?y:p.subtract(y),E=new ECPointFp(h,h.fromBigInteger(m),h.fromBigInteger(w));E.validate();var S=BigInteger.fromByteArrayUnsigned(o),x=BigInteger.ZERO.subtract(S).mod(l),T=t.modInverse(l),N=r(E,s,c,x).multiply(T);console.log("G.x: ",Crypto.util.bytesToHex(c.x.toBigInteger().toByteArrayUnsigned())),console.log("G.y: ",Crypto.util.bytesToHex(c.y.toBigInteger().toByteArrayUnsigned())),console.log("s: ",Crypto.util.bytesToHex(T.toByteArrayUnsigned())),console.log("Q.x: ",Crypto.util.bytesToHex(N.x.toBigInteger().toByteArrayUnsigned())),console.log("Q.y: ",Crypto.util.bytesToHex(N.y.toBigInteger().toByteArrayUnsigned())),N.validate();if(!i.verifyRaw(S,t,s,N))throw"Pubkey recovery unsuccessful";var C=new Bitcoin.ECKey;return C.pub=N,C},calcPubkeyRecoveryParam:function(e,t,n,r){for(var i=0;i<4;i++)try{var s=Bitcoin.ECDSA.recoverPubKey(t,n,r,i);if(s.getBitcoinAddress().toString()==e)return i}catch(o){}throw"Unable to find valid recovery factor"}};return i}();
Bitcoin.ECKey=function(){var e=Bitcoin.ECDSA,t=getSECCurveByName("secp256k1"),n=new SecureRandom,r=function(n){if(!n){var i=t.getN();this.priv=e.getBigRandom(i)}else n instanceof BigInteger?this.priv=n:Bitcoin.Util.isArray(n)?this.priv=BigInteger.fromByteArrayUnsigned(n):"string"==typeof n&&(n.length==51&&n[0]=="5"?this.priv=BigInteger.fromByteArrayUnsigned(r.decodeString(n)):this.priv=BigInteger.fromByteArrayUnsigned(Crypto.util.base64ToBytes(n)));this.compressed=!!r.compressByDefault};return r.compressByDefault=!1,r.prototype.setCompressed=function(e){this.compressed=!!e},r.prototype.getPub=function(){return this.getPubPoint().getEncoded(this.compressed)},r.prototype.getPubPoint=function(){return this.pub||(this.pub=t.getG().multiply(this.priv)),this.pub},r.prototype.getPubKeyHash=function(){return this.pubKeyHash?this.pubKeyHash:this.pubKeyHash=Bitcoin.Util.sha256ripe160(this.getPub())},r.prototype.getBitcoinAddress=function(){var e=this.getPubKeyHash(),t=new Bitcoin.Address(e);return t},r.prototype.getExportedPrivateKey=function(){var e=this.priv.toByteArrayUnsigned();while(e.length<32)e.unshift(0);e.unshift(128);var t=Crypto.SHA256(Crypto.SHA256(e,{asBytes:!0}),{asBytes:!0}),n=e.concat(t.slice(0,4));return Bitcoin.Base58.encode(n)},r.prototype.setPub=function(e){this.pub=ECPointFp.decodeFrom(t.getCurve(),e)},r.prototype.toString=function(e){return e==="base64"?Crypto.util.bytesToBase64(this.priv.toByteArrayUnsigned()):Crypto.util.bytesToHex(this.priv.toByteArrayUnsigned())},r.prototype.sign=function(t){return e.sign(t,this.priv)},r.prototype.verify=function(t,n){return e.verify(t,n,this.getPub())},r.decodeString=function(e){var t=Bitcoin.Base58.decode(e),n=t.slice(0,33),r=Crypto.SHA256(Crypto.SHA256(n,{asBytes:!0}),{asBytes:!0});if(r[0]!=t[33]||r[1]!=t[34]||r[2]!=t[35]||r[3]!=t[36])throw"Checksum validation failed!";var i=n.shift();if(i!=128)throw"Version "+i+" not supported!";return n},r}();
(function(){var e=Bitcoin.Opcode=function(e){this.code=e};e.prototype.toString=function(){return e.reverseMap[this.code]},e.map={OP_0:0,OP_FALSE:0,OP_PUSHDATA1:76,OP_PUSHDATA2:77,OP_PUSHDATA4:78,OP_1NEGATE:79,OP_RESERVED:80,OP_1:81,OP_TRUE:81,OP_2:82,OP_3:83,OP_4:84,OP_5:85,OP_6:86,OP_7:87,OP_8:88,OP_9:89,OP_10:90,OP_11:91,OP_12:92,OP_13:93,OP_14:94,OP_15:95,OP_16:96,OP_NOP:97,OP_VER:98,OP_IF:99,OP_NOTIF:100,OP_VERIF:101,OP_VERNOTIF:102,OP_ELSE:103,OP_ENDIF:104,OP_VERIFY:105,OP_RETURN:106,OP_TOALTSTACK:107,OP_FROMALTSTACK:108,OP_2DROP:109,OP_2DUP:110,OP_3DUP:111,OP_2OVER:112,OP_2ROT:113,OP_2SWAP:114,OP_IFDUP:115,OP_DEPTH:116,OP_DROP:117,OP_DUP:118,OP_NIP:119,OP_OVER:120,OP_PICK:121,OP_ROLL:122,OP_ROT:123,OP_SWAP:124,OP_TUCK:125,OP_CAT:126,OP_SUBSTR:127,OP_LEFT:128,OP_RIGHT:129,OP_SIZE:130,OP_INVERT:131,OP_AND:132,OP_OR:133,OP_XOR:134,OP_EQUAL:135,OP_EQUALVERIFY:136,OP_RESERVED1:137,OP_RESERVED2:138,OP_1ADD:139,OP_1SUB:140,OP_2MUL:141,OP_2DIV:142,OP_NEGATE:143,OP_ABS:144,OP_NOT:145,OP_0NOTEQUAL:146,OP_ADD:147,OP_SUB:148,OP_MUL:149,OP_DIV:150,OP_MOD:151,OP_LSHIFT:152,OP_RSHIFT:153,OP_BOOLAND:154,OP_BOOLOR:155,OP_NUMEQUAL:156,OP_NUMEQUALVERIFY:157,OP_NUMNOTEQUAL:158,OP_LESSTHAN:159,OP_GREATERTHAN:160,OP_LESSTHANOREQUAL:161,OP_GREATERTHANOREQUAL:162,OP_MIN:163,OP_MAX:164,OP_WITHIN:165,OP_RIPEMD160:166,OP_SHA1:167,OP_SHA256:168,OP_HASH160:169,OP_HASH256:170,OP_CODESEPARATOR:171,OP_CHECKSIG:172,OP_CHECKSIGVERIFY:173,OP_CHECKMULTISIG:174,OP_CHECKMULTISIGVERIFY:175,OP_NOP1:176,OP_NOP2:177,OP_NOP3:178,OP_NOP4:179,OP_NOP5:180,OP_NOP6:181,OP_NOP7:182,OP_NOP8:183,OP_NOP9:184,OP_NOP10:185,OP_PUBKEYHASH:253,OP_PUBKEY:254,OP_INVALIDOPCODE:255},e.reverseMap=[];for(var t in e.map)e.reverseMap[e.map[t]]=t})();
(function(){var Opcode=Bitcoin.Opcode;for(var i in Opcode.map)eval("var "+i+" = "+Opcode.map[i]+";");var Script=Bitcoin.Script=function(e){if(!e)this.buffer=[];else if("string"==typeof e)this.buffer=Crypto.util.base64ToBytes(e);else if(Bitcoin.Util.isArray(e))this.buffer=e;else{if(!(e instanceof Script))throw new Error("Invalid script");this.buffer=e.buffer}this.parse()};Script.prototype.parse=function(){function n(n){e.chunks.push(e.buffer.slice(t,t+n)),t+=n}var e=this;this.chunks=[];var t=0;while(t<this.buffer.length){var r=this.buffer[t++];r>=240&&(r=r<<8|this.buffer[t++]);var i;r>0&&r<OP_PUSHDATA1?n(r):r==OP_PUSHDATA1?(i=this.buffer[t++],n(i)):r==OP_PUSHDATA2?(i=this.buffer[t++]<<8|this.buffer[t++],n(i)):r==OP_PUSHDATA4?(i=this.buffer[t++]<<24|this.buffer[t++]<<16|this.buffer[t++]<<8|this.buffer[t++],n(i)):this.chunks.push(r)}},Script.prototype.getOutType=function(){return this.chunks[this.chunks.length-1]==OP_CHECKMULTISIG&&this.chunks[this.chunks.length-2]<=3?"Multisig":this.chunks.length==5&&this.chunks[0]==OP_DUP&&this.chunks[1]==OP_HASH160&&this.chunks[3]==OP_EQUALVERIFY&&this.chunks[4]==OP_CHECKSIG?"Address":this.chunks.length==2&&this.chunks[1]==OP_CHECKSIG?"Pubkey":"Strange"},Script.prototype.simpleOutHash=function(){switch(this.getOutType()){case"Address":return this.chunks[2];case"Pubkey":return Bitcoin.Util.sha256ripe160(this.chunks[0]);default:throw new Error("Encountered non-standard scriptPubKey")}},Script.prototype.simpleOutPubKeyHash=Script.prototype.simpleOutHash,Script.prototype.getInType=function(){return this.chunks.length==1&&Bitcoin.Util.isArray(this.chunks[0])?"Pubkey":this.chunks.length==2&&Bitcoin.Util.isArray(this.chunks[0])&&Bitcoin.Util.isArray(this.chunks[1])?"Address":"Strange"},Script.prototype.simpleInPubKey=function(){switch(this.getInType()){case"Address":return this.chunks[1];case"Pubkey":throw new Error("Script does not contain pubkey.");default:throw new Error("Encountered non-standard scriptSig")}},Script.prototype.simpleInHash=function(){return Bitcoin.Util.sha256ripe160(this.simpleInPubKey())},Script.prototype.simpleInPubKeyHash=Script.prototype.simpleInHash,Script.prototype.writeOp=function(e){this.buffer.push(e),this.chunks.push(e)},Script.prototype.writeBytes=function(e){e.length<OP_PUSHDATA1?this.buffer.push(e.length):e.length<=255?(this.buffer.push(OP_PUSHDATA1),this.buffer.push(e.length)):e.length<=65535?(this.buffer.push(OP_PUSHDATA2),this.buffer.push(e.length&255),this.buffer.push(e.length>>>8&255)):(this.buffer.push(OP_PUSHDATA4),this.buffer.push(e.length&255),this.buffer.push(e.length>>>8&255),this.buffer.push(e.length>>>16&255),this.buffer.push(e.length>>>24&255)),this.buffer=this.buffer.concat(e),this.chunks.push(e)},Script.createOutputScript=function(e){var t=new Script;return t.writeOp(OP_DUP),t.writeOp(OP_HASH160),t.writeBytes(e.hash),t.writeOp(OP_EQUALVERIFY),t.writeOp(OP_CHECKSIG),t},Script.prototype.extractAddresses=function(e){switch(this.getOutType()){case"Address":return e.push(new Address(this.chunks[2])),1;case"Pubkey":return e.push(new Address(Util.sha256ripe160(this.chunks[0]))),1;case"Multisig":for(var t=1;t<this.chunks.length-2;++t)e.push(new Address(Util.sha256ripe160(this.chunks[t])));return this.chunks[0]-OP_1+1;default:throw new Error("Encountered non-standard scriptPubKey")}},Script.createMultiSigOutputScript=function(e,t){var n=new Bitcoin.Script;n.writeOp(OP_1+e-1);for(var r=0;r<t.length;++r)n.writeBytes(t[r]);return n.writeOp(OP_1+t.length-1),n.writeOp(OP_CHECKMULTISIG),n},Script.createInputScript=function(e,t){var n=new Script;return n.writeBytes(e),n.writeBytes(t),n},Script.prototype.clone=function(){return new Script(this.buffer)}})();
(function(){var e=Bitcoin.Script,t=Bitcoin.Transaction=function(e){this.version=1,this.lock_time=0,this.ins=[],this.outs=[],this.timestamp=null,this.block=null;if(e){e.hash&&(this.hash=e.hash),e.version&&(this.version=e.version),e.lock_time&&(this.lock_time=e.lock_time);if(e.ins&&e.ins.length)for(var t=0;t<e.ins.length;t++)this.addInput(new u(e.ins[t]));if(e.outs&&e.outs.length)for(var t=0;t<e.outs.length;t++)this.addOutput(new a(e.outs[t]));e.timestamp&&(this.timestamp=e.timestamp),e.block&&(this.block=e.block)}};t.objectify=function(e){var n=[];for(var r=0;r<e.length;r++)n.push(new t(e[r]));return n},t.prototype.addInput=function(e,t){arguments[0]instanceof u?this.ins.push(arguments[0]):this.ins.push(new u({outpoint:{hash:e.hash,index:t},script:new Bitcoin.Script,sequence:4294967295}))},t.prototype.addOutput=function(t,n){if(arguments[0]instanceof a)this.outs.push(arguments[0]);else{if(n instanceof BigInteger){n=n.toByteArrayUnsigned().reverse();while(n.length<8)n.push(0)}else Bitcoin.Util.isArray(n);this.outs.push(new a({value:n,script:e.createOutputScript(t)}))}},t.prototype.serialize=function(){var e=[];e=e.concat(Crypto.util.wordsToBytes([parseInt(this.version)]).reverse()),e=e.concat(Bitcoin.Util.numToVarInt(this.ins.length));for(var t=0;t<this.ins.length;t++){var n=this.ins[t];e=e.concat(Crypto.util.base64ToBytes(n.outpoint.hash)),e=e.concat(Crypto.util.wordsToBytes([parseInt(n.outpoint.index)]).reverse());var r=n.script.buffer;e=e.concat(Bitcoin.Util.numToVarInt(r.length)),e=e.concat(r),e=e.concat(Crypto.util.wordsToBytes([parseInt(n.sequence)]).reverse())}e=e.concat(Bitcoin.Util.numToVarInt(this.outs.length));for(var t=0;t<this.outs.length;t++){var i=this.outs[t];e=e.concat(i.value);var r=i.script.buffer;e=e.concat(Bitcoin.Util.numToVarInt(r.length)),e=e.concat(r)}return e=e.concat(Crypto.util.wordsToBytes([parseInt(this.lock_time)]).reverse()),e};var n=171,r=1,i=2,s=3,o=80;t.prototype.hashTransactionForSignature=function(t,n,r){var u=this.clone();for(var a=0;a<u.ins.length;a++)u.ins[a].script=new e;u.ins[n].script=t;if((r&31)==i){u.outs=[];for(var a=0;a<u.ins.length;a++)a!=n&&(u.ins[a].sequence=0)}else(r&31)==s;r&o&&(u.ins=[u.ins[n]]);var f=u.serialize();f=f.concat(Crypto.util.wordsToBytes([parseInt(r)]).reverse());var l=Crypto.SHA256(f,{asBytes:!0});return Crypto.SHA256(l,{asBytes:!0})},t.prototype.getHash=function(){var e=this.serialize();return Crypto.SHA256(Crypto.SHA256(e,{asBytes:!0}),{asBytes:!0})},t.prototype.clone=function(){var e=new t;e.version=this.version,e.lock_time=this.lock_time;for(var n=0;n<this.ins.length;n++){var r=this.ins[n].clone();e.addInput(r)}for(var n=0;n<this.outs.length;n++){var i=this.outs[n].clone();e.addOutput(i)}return e},t.prototype.analyze=function(e){if(e instanceof Bitcoin.Wallet){var t=!0,n=!0,r=null,i=null,s=null;for(var o=this.outs.length-1;o>=0;o--){var u=this.outs[o],a=u.script.simpleOutPubKeyHash();e.hasHash(a)?i=a:n=!1,r=a}for(var o=this.ins.length-1;o>=0;o--){var f=this.ins[o];s=f.script.simpleInPubKeyHash();if(!e.hasHash(s)){t=!1;break}}var l=this.calcImpact(e),c={};return c.impact=l,l.sign>0&&l.value.compareTo(BigInteger.ZERO)>0?(c.type="recv",c.addr=new Bitcoin.Address(i)):t&&n?c.type="self":t?(c.type="sent",c.addr=new Bitcoin.Address(r)):c.type="other",c}return null},t.prototype.getDescription=function(e){var t=this.analyze(e);if(!t)return"";switch(t.type){case"recv":return"Received with "+t.addr;case"sent":return"Payment to "+t.addr;case"self":return"Payment to yourself";case"other":default:return""}},t.prototype.getTotalOutValue=function(){var e=BigInteger.ZERO;for(var t=0;t<this.outs.length;t++){var n=this.outs[t];e=e.add(Bitcoin.Util.valueToBigInt(n.value))}return e},t.prototype.getTotalValue=t.prototype.getTotalOutValue,t.prototype.calcImpact=function(e){if(e instanceof Bitcoin.Wallet){var t=BigInteger.ZERO;for(var n=0;n<this.outs.length;n++){var r=this.outs[n],i=Crypto.util.bytesToBase64(r.script.simpleOutPubKeyHash());e.hasHash(i)&&(t=t.add(Bitcoin.Util.valueToBigInt(r.value)))}var s=BigInteger.ZERO;for(var n=0;n<this.ins.length;n++){var o=this.ins[n],i=Crypto.util.bytesToBase64(o.script.simpleInPubKeyHash());if(e.hasHash(i)){var u=e.txIndex[o.outpoint.hash];u&&(s=s.add(Bitcoin.Util.valueToBigInt(u.outs[o.outpoint.index].value)))}}return t.compareTo(s)>=0?{sign:1,value:t.subtract(s)}:{sign:-1,value:s.subtract(t)}}return BigInteger.ZERO};var u=Bitcoin.TransactionIn=function(t){this.outpoint=t.outpoint,t.script instanceof e?this.script=t.script:this.script=new e(t.script),this.sequence=t.sequence};u.prototype.clone=function(){var e=new u({outpoint:{hash:this.outpoint.hash,index:this.outpoint.index},script:this.script.clone(),sequence:this.sequence});return e};var a=Bitcoin.TransactionOut=function(t){t.script instanceof e?this.script=t.script:this.script=new e(t.script);if(Bitcoin.Util.isArray(t.value))this.value=t.value;else if("string"==typeof t.value){var n=(new BigInteger(t.value,10)).toString(16);while(n.length<16)n="0"+n;this.value=Crypto.util.hexToBytes(n)}};a.prototype.clone=function(){var e=new a({script:this.script.clone(),value:this.value.slice(0)});return e}})();
Bitcoin.Wallet=function(){var e=Bitcoin.Script,t=Bitcoin.TransactionIn,n=Bitcoin.TransactionOut,r=function(){var e=[];this.addressHashes=[],this.txIndex={},this.unspentOuts=[],this.addressPointer=0,this.addKey=function(t,n){t instanceof Bitcoin.ECKey||(t=new Bitcoin.ECKey(t)),e.push(t),n&&("string"==typeof n&&(n=Crypto.util.base64ToBytes(n)),t.setPub(n)),this.addressHashes.push(t.getBitcoinAddress().getHashBase64())},this.addKeys=function(e,t){"string"==typeof e&&(e=e.split(",")),"string"==typeof t&&(t=t.split(","));var n;if(Array.isArray(t)&&e.length==t.length)for(n=0;n<e.length;n++)this.addKey(e[n],t[n]);else for(n=0;n<e.length;n++)this.addKey(e[n])},this.getKeys=function(){var t=[];for(var n=0;n<e.length;n++)t.push(e[n].toString("base64"));return t},this.getPubKeys=function(){var t=[];for(var n=0;n<e.length;n++)t.push(Crypto.util.bytesToBase64(e[n].getPub()));return t},this.clear=function(){e=[]},this.getLength=function(){return e.length},this.getAllAddresses=function(){var t=[];for(var n=0;n<e.length;n++)t.push(e[n].getBitcoinAddress());return t},this.getCurAddress=function(){return e[this.addressPointer]?e[this.addressPointer].getBitcoinAddress():null},this.getNextAddress=function(){return this.addressPointer++,e[this.addressPointer]||this.generateAddress(),e[this.addressPointer].getBitcoinAddress()},this.signWithKey=function(t,n){t=Crypto.util.bytesToBase64(t);for(var r=0;r<this.addressHashes.length;r++)if(this.addressHashes[r]==t)return e[r].sign(n);throw new Error("Missing key for signature")},this.getPubKeyFromHash=function(t){t=Crypto.util.bytesToBase64(t);for(var n=0;n<this.addressHashes.length;n++)if(this.addressHashes[n]==t)return e[n].getPub();throw new Error("Hash unknown")}};return r.prototype.generateAddress=function(){this.addKey(new Bitcoin.ECKey)},r.prototype.process=function(e){if(this.txIndex[e.hash])return;var r,i,s;for(r=0;r<e.outs.length;r++){var o=new n(e.outs[r]);s=Crypto.util.bytesToBase64(o.script.simpleOutPubKeyHash());for(i=0;i<this.addressHashes.length;i++)if(this.addressHashes[i]===s){this.unspentOuts.push({tx:e,index:r,out:o});break}}for(r=0;r<e.ins.length;r++){var u=new t(e.ins[r]),a=u.script.simpleInPubKey();s=Crypto.util.bytesToBase64(Bitcoin.Util.sha256ripe160(a));for(i=0;i<this.addressHashes.length;i++)if(this.addressHashes[i]===s){for(var f=0;f<this.unspentOuts.length;f++)u.outpoint.hash==this.unspentOuts[f].tx.hash&&u.outpoint.index==this.unspentOuts[f].index&&this.unspentOuts.splice(f,1);break}}this.txIndex[e.hash]=e},r.prototype.getBalance=function(){var e=BigInteger.valueOf(0);for(var t=0;t<this.unspentOuts.length;t++){var n=this.unspentOuts[t].out;e=e.add(Bitcoin.Util.valueToBigInt(n.value))}return e},r.prototype.createSend=function(t,n,r){var i=[],s=n.add(r),o=BigInteger.ZERO,u;for(u=0;u<this.unspentOuts.length;u++){i.push(this.unspentOuts[u]),o=o.add(Bitcoin.Util.valueToBigInt(this.unspentOuts[u].out.value));if(o.compareTo(s)>=0)break}if(o.compareTo(s)<0)throw new Error("Insufficient funds.");var a=o.subtract(s),f=new Bitcoin.Transaction;for(u=0;u<i.length;u++)f.addInput(i[u].tx,i[u].index);f.addOutput(t,n),a.compareTo(BigInteger.ZERO)>0&&f.addOutput(this.getNextAddress(),a);var l=1;for(u=0;u<f.ins.length;u++){var c=f.hashTransactionForSignature(i[u].out.script,u,l),h=i[u].out.script.simpleOutPubKeyHash(),p=this.signWithKey(h,c);p.push(parseInt(l,10)),f.ins[u].script=e.createInputScript(p,this.getPubKeyFromHash(h))}return f},r.prototype.clearTransactions=function(){this.txIndex={},this.unspentOuts=[]},r.prototype.hasHash=function(e){Bitcoin.Util.isArray(e)&&(e=Crypto.util.bytesToBase64(e));for(var t=0;t<this.addressHashes.length;t++)if(this.addressHashes[t]===e)return!0;return!1},r}();
var TransactionDatabase=function(){this.txs=[],this.txIndex={}};EventEmitter.augment(TransactionDatabase.prototype),TransactionDatabase.prototype.addTransaction=function(e){this.addTransactionNoUpdate(e),$(this).trigger("update")},TransactionDatabase.prototype.addTransactionNoUpdate=function(e){if(this.txIndex[e.hash])return;this.txs.push(new Bitcoin.Transaction(e)),this.txIndex[e.hash]=e},TransactionDatabase.prototype.removeTransaction=function(e){this.removeTransactionNoUpdate(e),$(this).trigger("update")},TransactionDatabase.prototype.removeTransactionNoUpdate=function(e){var t=this.txIndex[e];if(!t)return;for(var n=0,r=this.txs.length;n<r;n++)if(this.txs[n].hash==e){this.txs.splice(n,1);break}delete this.txIndex[e]},TransactionDatabase.prototype.loadTransactions=function(e){for(var t=0;t<e.length;t++)this.addTransactionNoUpdate(e[t]);$(this).trigger("update")},TransactionDatabase.prototype.getTransactions=function(){return this.txs},TransactionDatabase.prototype.clear=function(){this.txs=[],this.txIndex={},$(this).trigger("update")}

// Constants table
var zl = [
    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
var zr = [
    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
var sl = [
     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
var sr = [
    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];

var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];

var bytesToWords = function (bytes) {
  var words = [];
  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32);
  }
  return words;
};

var wordsToBytes = function (words) {
  var bytes = [];
  for (var b = 0; b < words.length * 32; b += 8) {
    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
  }
  return bytes;
};

var processBlock = function (H, M, offset) {

  // Swap endian
  for (var i = 0; i < 16; i++) {
    var offset_i = offset + i;
    var M_offset_i = M[offset_i];

    // Swap
    M[offset_i] = (
        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
    );
  }

  // Working variables
  var al, bl, cl, dl, el;
  var ar, br, cr, dr, er;

  ar = al = H[0];
  br = bl = H[1];
  cr = cl = H[2];
  dr = dl = H[3];
  er = el = H[4];
  // Computation
  var t;
  for (var i = 0; i < 80; i += 1) {
    t = (al +  M[offset+zl[i]])|0;
    if (i<16){
        t +=  f1(bl,cl,dl) + hl[0];
    } else if (i<32) {
        t +=  f2(bl,cl,dl) + hl[1];
    } else if (i<48) {
        t +=  f3(bl,cl,dl) + hl[2];
    } else if (i<64) {
        t +=  f4(bl,cl,dl) + hl[3];
    } else {// if (i<80) {
        t +=  f5(bl,cl,dl) + hl[4];
    }
    t = t|0;
    t =  rotl(t,sl[i]);
    t = (t+el)|0;
    al = el;
    el = dl;
    dl = rotl(cl, 10);
    cl = bl;
    bl = t;

    t = (ar + M[offset+zr[i]])|0;
    if (i<16){
        t +=  f5(br,cr,dr) + hr[0];
    } else if (i<32) {
        t +=  f4(br,cr,dr) + hr[1];
    } else if (i<48) {
        t +=  f3(br,cr,dr) + hr[2];
    } else if (i<64) {
        t +=  f2(br,cr,dr) + hr[3];
    } else {// if (i<80) {
        t +=  f1(br,cr,dr) + hr[4];
    }
    t = t|0;
    t =  rotl(t,sr[i]) ;
    t = (t+er)|0;
    ar = er;
    er = dr;
    dr = rotl(cr, 10);
    cr = br;
    br = t;
  }
  // Intermediate hash value
  t    = (H[1] + cl + dr)|0;
  H[1] = (H[2] + dl + er)|0;
  H[2] = (H[3] + el + ar)|0;
  H[3] = (H[4] + al + br)|0;
  H[4] = (H[0] + bl + cr)|0;
  H[0] =  t;
};

function f1(x, y, z) {
  return ((x) ^ (y) ^ (z));
}

function f2(x, y, z) {
  return (((x)&(y)) | ((~x)&(z)));
}

function f3(x, y, z) {
  return (((x) | (~(y))) ^ (z));
}

function f4(x, y, z) {
  return (((x) & (z)) | ((y)&(~(z))));
}

function f5(x, y, z) {
  return ((x) ^ ((y) |(~(z))));
}

function rotl(x,n) {
  return (x<<n) | (x>>>(32-n));
}

function ripemd160(message) {
  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];

  var m = bytesToWords(message);

  var nBitsLeft = message.length * 8;
  var nBitsTotal = message.length * 8;

  // Add padding
  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
  );

  for (var i=0 ; i<m.length; i += 16) {
    processBlock(H, m, i);
  }

  // Swap endian
  for (var i = 0; i < 5; i++) {
      // Shortcut
    var H_i = H[i];

    // Swap
    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
  }

  var digestbytes = wordsToBytes(H);
  return digestbytes;
}

/*!
* Basic Javascript Elliptic Curve implementation
* Ported loosely from BouncyCastle's Java EC code
* Only Fp curves implemented for now
* 
* Copyright Tom Wu, bitaddress.org  BSD License.
* http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/
(function () {

    // Constructor function of Global EllipticCurve object
    var ec = window.EllipticCurve = function () { };


    // ----------------
    // ECFieldElementFp constructor
    // q instanceof BigInteger
    // x instanceof BigInteger
    ec.FieldElementFp = function (q, x) {
        this.x = x;
        // TODO if(x.compareTo(q) >= 0) error
        this.q = q;
    };

    ec.FieldElementFp.prototype.equals = function (other) {
        if (other == this) return true;
        return (this.q.equals(other.q) && this.x.equals(other.x));
    };

    ec.FieldElementFp.prototype.toBigInteger = function () {
        return this.x;
    };

    ec.FieldElementFp.prototype.negate = function () {
        return new ec.FieldElementFp(this.q, this.x.negate().mod(this.q));
    };

    ec.FieldElementFp.prototype.add = function (b) {
        return new ec.FieldElementFp(this.q, this.x.add(b.toBigInteger()).mod(this.q));
    };

    ec.FieldElementFp.prototype.subtract = function (b) {
        return new ec.FieldElementFp(this.q, this.x.subtract(b.toBigInteger()).mod(this.q));
    };

    ec.FieldElementFp.prototype.multiply = function (b) {
        return new ec.FieldElementFp(this.q, this.x.multiply(b.toBigInteger()).mod(this.q));
    };

    ec.FieldElementFp.prototype.square = function () {
        return new ec.FieldElementFp(this.q, this.x.square().mod(this.q));
    };

    ec.FieldElementFp.prototype.divide = function (b) {
        return new ec.FieldElementFp(this.q, this.x.multiply(b.toBigInteger().modInverse(this.q)).mod(this.q));
    };

    ec.FieldElementFp.prototype.getByteLength = function () {
        return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
    };

    // D.1.4 91
    /**
    * return a sqrt root - the routine verifies that the calculation
    * returns the right value - if none exists it returns null.
    * 
    * Copyright (c) 2000 - 2011 The Legion Of The Bouncy Castle (http://www.bouncycastle.org)
    * Ported to JavaScript by bitaddress.org
    */
    ec.FieldElementFp.prototype.sqrt = function () {
        if (!this.q.testBit(0)) throw new Error("even value of q");

        // p mod 4 == 3
        if (this.q.testBit(1)) {
            // z = g^(u+1) + p, p = 4u + 3
            var z = new ec.FieldElementFp(this.q, this.x.modPow(this.q.shiftRight(2).add(BigInteger.ONE), this.q));
            return z.square().equals(this) ? z : null;
        }

        // p mod 4 == 1
        var qMinusOne = this.q.subtract(BigInteger.ONE);
        var legendreExponent = qMinusOne.shiftRight(1);
        if (!(this.x.modPow(legendreExponent, this.q).equals(BigInteger.ONE))) return null;
        var u = qMinusOne.shiftRight(2);
        var k = u.shiftLeft(1).add(BigInteger.ONE);
        var Q = this.x;
        var fourQ = Q.shiftLeft(2).mod(this.q);
        var U, V;

        do {
            var rand = new SecureRandom();
            var P;
            do {
                P = new BigInteger(this.q.bitLength(), rand);
            }
            while (P.compareTo(this.q) >= 0 || !(P.multiply(P).subtract(fourQ).modPow(legendreExponent, this.q).equals(qMinusOne)));

            var result = ec.FieldElementFp.fastLucasSequence(this.q, P, Q, k);

            U = result[0];
            V = result[1];
            if (V.multiply(V).mod(this.q).equals(fourQ)) {
                // Integer division by 2, mod q
                if (V.testBit(0)) {
                    V = V.add(this.q);
                }
                V = V.shiftRight(1);
                return new ec.FieldElementFp(this.q, V);
            }
        }
        while (U.equals(BigInteger.ONE) || U.equals(qMinusOne));

        return null;
    };

    /*
    * Copyright (c) 2000 - 2011 The Legion Of The Bouncy Castle (http://www.bouncycastle.org)
    * Ported to JavaScript by bitaddress.org
    */
    ec.FieldElementFp.fastLucasSequence = function (p, P, Q, k) {
        // TODO Research and apply "common-multiplicand multiplication here"

        var n = k.bitLength();
        var s = k.getLowestSetBit();
        var Uh = BigInteger.ONE;
        var Vl = BigInteger.TWO;
        var Vh = P;
        var Ql = BigInteger.ONE;
        var Qh = BigInteger.ONE;

        for (var j = n - 1; j >= s + 1; --j) {
            Ql = Ql.multiply(Qh).mod(p);
            if (k.testBit(j)) {
                Qh = Ql.multiply(Q).mod(p);
                Uh = Uh.multiply(Vh).mod(p);
                Vl = Vh.multiply(Vl).subtract(P.multiply(Ql)).mod(p);
                Vh = Vh.multiply(Vh).subtract(Qh.shiftLeft(1)).mod(p);
            }
            else {
                Qh = Ql;
                Uh = Uh.multiply(Vl).subtract(Ql).mod(p);
                Vh = Vh.multiply(Vl).subtract(P.multiply(Ql)).mod(p);
                Vl = Vl.multiply(Vl).subtract(Ql.shiftLeft(1)).mod(p);
            }
        }

        Ql = Ql.multiply(Qh).mod(p);
        Qh = Ql.multiply(Q).mod(p);
        Uh = Uh.multiply(Vl).subtract(Ql).mod(p);
        Vl = Vh.multiply(Vl).subtract(P.multiply(Ql)).mod(p);
        Ql = Ql.multiply(Qh).mod(p);

        for (var j = 1; j <= s; ++j) {
            Uh = Uh.multiply(Vl).mod(p);
            Vl = Vl.multiply(Vl).subtract(Ql.shiftLeft(1)).mod(p);
            Ql = Ql.multiply(Ql).mod(p);
        }

        return [Uh, Vl];
    };

    // ----------------
    // ECPointFp constructor
    ec.PointFp = function (curve, x, y, z, compressed) {
        this.curve = curve;
        this.x = x;
        this.y = y;
        // Projective coordinates: either zinv == null or z * zinv == 1
        // z and zinv are just BigIntegers, not fieldElements
        if (z == null) {
            this.z = BigInteger.ONE;
        }
        else {
            this.z = z;
        }
        this.zinv = null;
        // compression flag
        this.compressed = !!compressed;
    };

    ec.PointFp.prototype.getX = function () {
        if (this.zinv == null) {
            this.zinv = this.z.modInverse(this.curve.q);
        }
        var r = this.x.toBigInteger().multiply(this.zinv);
        this.curve.reduce(r);
        return this.curve.fromBigInteger(r);
    };

    ec.PointFp.prototype.getY = function () {
        if (this.zinv == null) {
            this.zinv = this.z.modInverse(this.curve.q);
        }
        var r = this.y.toBigInteger().multiply(this.zinv);
        this.curve.reduce(r);
        return this.curve.fromBigInteger(r);
    };

    ec.PointFp.prototype.equals = function (other) {
        if (other == this) return true;
        if (this.isInfinity()) return other.isInfinity();
        if (other.isInfinity()) return this.isInfinity();
        var u, v;
        // u = Y2 * Z1 - Y1 * Z2
        u = other.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(other.z)).mod(this.curve.q);
        if (!u.equals(BigInteger.ZERO)) return false;
        // v = X2 * Z1 - X1 * Z2
        v = other.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(other.z)).mod(this.curve.q);
        return v.equals(BigInteger.ZERO);
    };

    ec.PointFp.prototype.isInfinity = function () {
        if ((this.x == null) && (this.y == null)) return true;
        return this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
    };

    ec.PointFp.prototype.negate = function () {
        return new ec.PointFp(this.curve, this.x, this.y.negate(), this.z);
    };

    ec.PointFp.prototype.add = function (b) {
        if (this.isInfinity()) return b;
        if (b.isInfinity()) return this;

        // u = Y2 * Z1 - Y1 * Z2
        var u = b.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(b.z)).mod(this.curve.q);
        // v = X2 * Z1 - X1 * Z2
        var v = b.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(b.z)).mod(this.curve.q);


        if (BigInteger.ZERO.equals(v)) {
            if (BigInteger.ZERO.equals(u)) {
                return this.twice(); // this == b, so double
            }
            return this.curve.getInfinity(); // this = -b, so infinity
        }

        var THREE = new BigInteger("3");
        var x1 = this.x.toBigInteger();
        var y1 = this.y.toBigInteger();
        var x2 = b.x.toBigInteger();
        var y2 = b.y.toBigInteger();

        var v2 = v.square();
        var v3 = v2.multiply(v);
        var x1v2 = x1.multiply(v2);
        var zu2 = u.square().multiply(this.z);

        // x3 = v * (z2 * (z1 * u^2 - 2 * x1 * v^2) - v^3)
        var x3 = zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.q);
        // y3 = z2 * (3 * x1 * u * v^2 - y1 * v^3 - z1 * u^3) + u * v^3
        var y3 = x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.q);
        // z3 = v^3 * z1 * z2
        var z3 = v3.multiply(this.z).multiply(b.z).mod(this.curve.q);

        return new ec.PointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
    };

    ec.PointFp.prototype.twice = function () {
        if (this.isInfinity()) return this;
        if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();

        // TODO: optimized handling of constants
        var THREE = new BigInteger("3");
        var x1 = this.x.toBigInteger();
        var y1 = this.y.toBigInteger();

        var y1z1 = y1.multiply(this.z);
        var y1sqz1 = y1z1.multiply(y1).mod(this.curve.q);
        var a = this.curve.a.toBigInteger();

        // w = 3 * x1^2 + a * z1^2
        var w = x1.square().multiply(THREE);
        if (!BigInteger.ZERO.equals(a)) {
            w = w.add(this.z.square().multiply(a));
        }
        w = w.mod(this.curve.q);
        //this.curve.reduce(w);
        // x3 = 2 * y1 * z1 * (w^2 - 8 * x1 * y1^2 * z1)
        var x3 = w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.q);
        // y3 = 4 * y1^2 * z1 * (3 * w * x1 - 2 * y1^2 * z1) - w^3
        var y3 = w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.square().multiply(w)).mod(this.curve.q);
        // z3 = 8 * (y1 * z1)^3
        var z3 = y1z1.square().multiply(y1z1).shiftLeft(3).mod(this.curve.q);

        return new ec.PointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
    };

    // Simple NAF (Non-Adjacent Form) multiplication algorithm
    // TODO: modularize the multiplication algorithm
    ec.PointFp.prototype.multiply = function (k) {
        if (this.isInfinity()) return this;
        if (k.signum() == 0) return this.curve.getInfinity();

        var e = k;
        var h = e.multiply(new BigInteger("3"));

        var neg = this.negate();
        var R = this;

        var i;
        for (i = h.bitLength() - 2; i > 0; --i) {
            R = R.twice();

            var hBit = h.testBit(i);
            var eBit = e.testBit(i);

            if (hBit != eBit) {
                R = R.add(hBit ? this : neg);
            }
        }

        return R;
    };

    // Compute this*j + x*k (simultaneous multiplication)
    ec.PointFp.prototype.multiplyTwo = function (j, x, k) {
        var i;
        if (j.bitLength() > k.bitLength())
            i = j.bitLength() - 1;
        else
            i = k.bitLength() - 1;

        var R = this.curve.getInfinity();
        var both = this.add(x);
        while (i >= 0) {
            R = R.twice();
            if (j.testBit(i)) {
                if (k.testBit(i)) {
                    R = R.add(both);
                }
                else {
                    R = R.add(this);
                }
            }
            else {
                if (k.testBit(i)) {
                    R = R.add(x);
                }
            }
            --i;
        }

        return R;
    };

    // patched by bitaddress.org and Casascius for use with Bitcoin.ECKey
    // patched by coretechs to support compressed public keys
    ec.PointFp.prototype.getEncoded = function (compressed) {
        var x = this.getX().toBigInteger();
        var y = this.getY().toBigInteger();
        var len = 32; // integerToBytes will zero pad if integer is less than 32 bytes. 32 bytes length is required by the Bitcoin protocol.
        var enc = ec.integerToBytes(x, len);

        // when compressed prepend byte depending if y point is even or odd 
        if (compressed) {
            if (y.isEven()) {
                enc.unshift(0x02);
            }
            else {
                enc.unshift(0x03);
            }
        }
        else {
            enc.unshift(0x04);
            enc = enc.concat(ec.integerToBytes(y, len)); // uncompressed public key appends the bytes of the y point
        }
        return enc;
    };

    ec.PointFp.decodeFrom = function (curve, enc) {
        var type = enc[0];
        var dataLen = enc.length - 1;

        // Extract x and y as byte arrays
        var xBa = enc.slice(1, 1 + dataLen / 2);
        var yBa = enc.slice(1 + dataLen / 2, 1 + dataLen);

        // Prepend zero byte to prevent interpretation as negative integer
        xBa.unshift(0);
        yBa.unshift(0);

        // Convert to BigIntegers
        var x = new BigInteger(xBa);
        var y = new BigInteger(yBa);

        // Return point
        return new ec.PointFp(curve, curve.fromBigInteger(x), curve.fromBigInteger(y));
    };

    ec.PointFp.prototype.add2D = function (b) {
        if (this.isInfinity()) return b;
        if (b.isInfinity()) return this;

        if (this.x.equals(b.x)) {
            if (this.y.equals(b.y)) {
                // this = b, i.e. this must be doubled
                return this.twice();
            }
            // this = -b, i.e. the result is the point at infinity
            return this.curve.getInfinity();
        }

        var x_x = b.x.subtract(this.x);
        var y_y = b.y.subtract(this.y);
        var gamma = y_y.divide(x_x);

        var x3 = gamma.square().subtract(this.x).subtract(b.x);
        var y3 = gamma.multiply(this.x.subtract(x3)).subtract(this.y);

        return new ec.PointFp(this.curve, x3, y3);
    };

    ec.PointFp.prototype.twice2D = function () {
        if (this.isInfinity()) return this;
        if (this.y.toBigInteger().signum() == 0) {
            // if y1 == 0, then (x1, y1) == (x1, -y1)
            // and hence this = -this and thus 2(x1, y1) == infinity
            return this.curve.getInfinity();
        }

        var TWO = this.curve.fromBigInteger(BigInteger.valueOf(2));
        var THREE = this.curve.fromBigInteger(BigInteger.valueOf(3));
        var gamma = this.x.square().multiply(THREE).add(this.curve.a).divide(this.y.multiply(TWO));

        var x3 = gamma.square().subtract(this.x.multiply(TWO));
        var y3 = gamma.multiply(this.x.subtract(x3)).subtract(this.y);

        return new ec.PointFp(this.curve, x3, y3);
    };

    ec.PointFp.prototype.multiply2D = function (k) {
        if (this.isInfinity()) return this;
        if (k.signum() == 0) return this.curve.getInfinity();

        var e = k;
        var h = e.multiply(new BigInteger("3"));

        var neg = this.negate();
        var R = this;

        var i;
        for (i = h.bitLength() - 2; i > 0; --i) {
            R = R.twice();

            var hBit = h.testBit(i);
            var eBit = e.testBit(i);

            if (hBit != eBit) {
                R = R.add2D(hBit ? this : neg);
            }
        }

        return R;
    };

    ec.PointFp.prototype.isOnCurve = function () {
        var x = this.getX().toBigInteger();
        var y = this.getY().toBigInteger();
        var a = this.curve.getA().toBigInteger();
        var b = this.curve.getB().toBigInteger();
        var n = this.curve.getQ();
        var lhs = y.multiply(y).mod(n);
        var rhs = x.multiply(x).multiply(x).add(a.multiply(x)).add(b).mod(n);
        return lhs.equals(rhs);
    };

    ec.PointFp.prototype.toString = function () {
        return '(' + this.getX().toBigInteger().toString() + ',' + this.getY().toBigInteger().toString() + ')';
    };

    /**
    * Validate an elliptic curve point.
    *
    * See SEC 1, section 3.2.2.1: Elliptic Curve Public Key Validation Primitive
    */
    ec.PointFp.prototype.validate = function () {
        var n = this.curve.getQ();

        // Check Q != O
        if (this.isInfinity()) {
            throw new Error("Point is at infinity.");
        }

        // Check coordinate bounds
        var x = this.getX().toBigInteger();
        var y = this.getY().toBigInteger();
        if (x.compareTo(BigInteger.ONE) < 0 || x.compareTo(n.subtract(BigInteger.ONE)) > 0) {
            throw new Error('x coordinate out of bounds');
        }
        if (y.compareTo(BigInteger.ONE) < 0 || y.compareTo(n.subtract(BigInteger.ONE)) > 0) {
            throw new Error('y coordinate out of bounds');
        }

        // Check y^2 = x^3 + ax + b (mod n)
        if (!this.isOnCurve()) {
            throw new Error("Point is not on the curve.");
        }

        // Check nQ = 0 (Q is a scalar multiple of G)
        if (this.multiply(n).isInfinity()) {
            // TODO: This check doesn't work - fix.
            throw new Error("Point is not a scalar multiple of G.");
        }

        return true;
    };




    // ----------------
    // ECCurveFp constructor
    ec.CurveFp = function (q, a, b) {
        this.q = q;
        this.a = this.fromBigInteger(a);
        this.b = this.fromBigInteger(b);
        this.infinity = new ec.PointFp(this, null, null);
        this.reducer = new Barrett(this.q);
    }

    ec.CurveFp.prototype.getQ = function () {
        return this.q;
    };

    ec.CurveFp.prototype.getA = function () {
        return this.a;
    };

    ec.CurveFp.prototype.getB = function () {
        return this.b;
    };

    ec.CurveFp.prototype.equals = function (other) {
        if (other == this) return true;
        return (this.q.equals(other.q) && this.a.equals(other.a) && this.b.equals(other.b));
    };

    ec.CurveFp.prototype.getInfinity = function () {
        return this.infinity;
    };

    ec.CurveFp.prototype.fromBigInteger = function (x) {
        return new ec.FieldElementFp(this.q, x);
    };

    ec.CurveFp.prototype.reduce = function (x) {
        this.reducer.reduce(x);
    };

    // for now, work with hex strings because they're easier in JS
    // compressed support added by bitaddress.org
    ec.CurveFp.prototype.decodePointHex = function (s) {
        var firstByte = parseInt(s.substr(0, 2), 16);
        switch (firstByte) { // first byte
            case 0:
                return this.infinity;
            case 2: // compressed
            case 3: // compressed
                var yTilde = firstByte & 1;
                var xHex = s.substr(2, s.length - 2);
                var X1 = new BigInteger(xHex, 16);
                return this.decompressPoint(yTilde, X1);
            case 4: // uncompressed
            case 6: // hybrid
            case 7: // hybrid
                var len = (s.length - 2) / 2;
                var xHex = s.substr(2, len);
                var yHex = s.substr(len + 2, len);

                return new ec.PointFp(this,
                    this.fromBigInteger(new BigInteger(xHex, 16)),
                    this.fromBigInteger(new BigInteger(yHex, 16)));

            default: // unsupported
                return null;
        }
    };

    ec.CurveFp.prototype.encodePointHex = function (p) {
        if (p.isInfinity()) return "00";
        var xHex = p.getX().toBigInteger().toString(16);
        var yHex = p.getY().toBigInteger().toString(16);
        var oLen = this.getQ().toString(16).length;
        if ((oLen % 2) != 0) oLen++;
        while (xHex.length < oLen) {
            xHex = "0" + xHex;
        }
        while (yHex.length < oLen) {
            yHex = "0" + yHex;
        }
        return "04" + xHex + yHex;
    };

    /*
    * Copyright (c) 2000 - 2011 The Legion Of The Bouncy Castle (http://www.bouncycastle.org)
    * Ported to JavaScript by bitaddress.org
    *
    * Number yTilde
    * BigInteger X1
    */
    ec.CurveFp.prototype.decompressPoint = function (yTilde, X1) {
        var x = this.fromBigInteger(X1);
        var alpha = x.multiply(x.square().add(this.getA())).add(this.getB());
        var beta = alpha.sqrt();
        // if we can't find a sqrt we haven't got a point on the curve - run!
        if (beta == null) throw new Error("Invalid point compression");
        var betaValue = beta.toBigInteger();
        var bit0 = betaValue.testBit(0) ? 1 : 0;
        if (bit0 != yTilde) {
            // Use the other root
            beta = this.fromBigInteger(this.getQ().subtract(betaValue));
        }
        return new ec.PointFp(this, x, beta, null, true);
    };


    ec.fromHex = function (s) { return new BigInteger(s, 16); };

    ec.integerToBytes = function (i, len) {
        var bytes = i.toByteArrayUnsigned();
        if (len < bytes.length) {
            bytes = bytes.slice(bytes.length - len);
        } else while (len > bytes.length) {
            bytes.unshift(0);
        }
        return bytes;
    };


    // Named EC curves
    // ----------------
    // X9ECParameters constructor
    ec.X9Parameters = function (curve, g, n, h) {
        this.curve = curve;
        this.g = g;
        this.n = n;
        this.h = h;
    }
    ec.X9Parameters.prototype.getCurve = function () { return this.curve; };
    ec.X9Parameters.prototype.getG = function () { return this.g; };
    ec.X9Parameters.prototype.getN = function () { return this.n; };
    ec.X9Parameters.prototype.getH = function () { return this.h; };

    // secp256k1 is the Curve used by Bitcoin
    ec.secNamedCurves = {
        // used by Bitcoin
        "secp256k1": function () {
            // p = 2^256 - 2^32 - 2^9 - 2^8 - 2^7 - 2^6 - 2^4 - 1
            var p = ec.fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F");
            var a = BigInteger.ZERO;
            var b = ec.fromHex("7");
            var n = ec.fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141");
            var h = BigInteger.ONE;
            var curve = new ec.CurveFp(p, a, b);
            var G = curve.decodePointHex("04"
                    + "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798"
                    + "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8");
            return new ec.X9Parameters(curve, G, n, h);
        }
    };

    // secp256k1 called by Bitcoin's ECKEY
    ec.getSECCurveByName = function (name) {
        if (ec.secNamedCurves[name] == undefined) return null;
        return ec.secNamedCurves[name]();
    }
})();

function msg_numToVarInt(i) {
    if (i < 0xfd) {
      return [i];
    } else if (i <= 0xffff) {
      // can't use numToVarInt from bitcoinjs, BitcoinQT wants big endian here (!)
      return [0xfd, i & 255, i >>> 8];
    } else if (i <= 0xffffffff) {
      return [0xfe, i & 255, (i >>> 8) & 255, (i >>> 16) & 255, i >>> 24];
    } else {
        throw ("message too large");
    }
}

function msg_bytes(message) {
    var b = Crypto.charenc.UTF8.stringToBytes(message);
    return msg_numToVarInt(b.length).concat(b);
}

function msg_digest(message) {
    var b = msg_bytes("Bitcoin Signed Message:\n").concat(msg_bytes(message));
    return Crypto.SHA256(Crypto.SHA256(b, {asBytes:true}), {asBytes:true});
}

function verify_message(signature, message, addrtype) {
    try {
        var sig = Crypto.util.base64ToBytes(signature);
    } catch(err) {
        return false;
    }

    if (sig.length != 65)
        return false;

    // extract r,s from signature
    var r = BigInteger.fromByteArrayUnsigned(sig.slice(1,1+32));
    var s = BigInteger.fromByteArrayUnsigned(sig.slice(33,33+32));

    // get recid
    var compressed = false;
    var nV = sig[0];
    if (nV < 27 || nV >= 35)
        return false;
    if (nV >= 31) {
        compressed = true;
        nV -= 4;
    }
    var recid = BigInteger.valueOf(nV - 27);

    var ecparams = getSECCurveByName("secp256k1");
    var curve = ecparams.getCurve();
    var a = curve.getA().toBigInteger();
    var b = curve.getB().toBigInteger();
    var p = curve.getQ();
    var G = ecparams.getG();
    var order = ecparams.getN();

    var x = r.add(order.multiply(recid.divide(BigInteger.valueOf(2))));
    var alpha = x.multiply(x).multiply(x).add(a.multiply(x)).add(b).mod(p);
    var beta = alpha.modPow(p.add(BigInteger.ONE).divide(BigInteger.valueOf(4)), p);
    var y = beta.subtract(recid).isEven() ? beta : p.subtract(beta);

    var R = new ECPointFp(curve, curve.fromBigInteger(x), curve.fromBigInteger(y));
    var e = BigInteger.fromByteArrayUnsigned(msg_digest(message));
    var minus_e = e.negate().mod(order);
    var inv_r = r.modInverse(order);
    var Q = (R.multiply(s).add(G.multiply(minus_e))).multiply(inv_r);

    var public_key = Q.getEncoded(compressed);
    var addr = new Bitcoin.Address(Bitcoin.Util.sha256ripe160(public_key));

    addr.version = addrtype ? addrtype : 0;
    return addr.toString();
}

function sign_message(private_key, message, compressed, addrtype) {
    if (!private_key)
        return false;

    var signature = private_key.sign(msg_digest(message));
    var address = new Bitcoin.Address(private_key.getPubKeyHash());
    address.version = addrtype ? addrtype : 0;

    //convert ASN.1-serialized signature to bitcoin-qt format
    var obj = Bitcoin.ECDSA.parseSig(signature);
    var sequence = [0];
    sequence = sequence.concat(obj.r.toByteArrayUnsigned());
    sequence = sequence.concat(obj.s.toByteArrayUnsigned());

    for (var i = 0; i < 4; i++) {
        var nV = 27 + i;
        if (compressed)
            nV += 4;
        sequence[0] = nV;
        var sig = Crypto.util.bytesToBase64(sequence);
        if (verify_message(sig, message, addrtype) == address)
            return sig;
    }

    return false;
}

function bitcoinsig_test() {
    var k = '5JeWZ1z6sRcLTJXdQEDdB986E6XfLAkj9CgNE4EHzr5GmjrVFpf';
    var a = '17mDAmveV5wBwxajBsY7g1trbMW1DVWcgL';
    var s = 'HDiv4Oe9SjM1FFVbKk4m3N34efYiRgkQGGoEm564ldYt44jHVTuX23+WnihNMi4vujvpUs1M529P3kftjDezn9E=';
    var m = 'test message';
    payload = Bitcoin.Base58.decode(k);
    secret = payload.slice(1, 33);
    compressed = payload.length == 38;
    console.log(verify_message(s, m));
    sig = sign_message(new Bitcoin.ECKey(secret), m, compressed);
    console.log(sig);
    console.log(verify_message(sig, m));
}

if (typeof require != 'undefined' && require.main === module) {
    window = global; navigator = {}; Bitcoin = {};
    eval(require('fs').readFileSync('./bitcoinjs-min.js')+'');
    eval(require('path').basename(module.filename,'.js')+'_test()');
}

/**
 * Bowinc - A multipurpose cross chain node framework.
 * @version 1.0
 * @author Bowgov International
 * @email hycent@afocha.org
 * @repository http://github.com/bowinc/bowinc
 * @copyright Bowinc (c) 2021-2023
*/

(function () {
    var bowinc = window.bowinc = function () { };

    /* bowchain network vars */
    bowinc.bowchain = function(){
    	var bownets;
    };
    //bowinc.bownets=[{'name':'bitcoin','pub'}]; // bownet vars

    /* public vars */
    bowinc.compressed = false;
    bowinc.pub = 0x00;
    bowinc.priv = 0x80;
    bowinc.multisig = 0x05;
    bowinc.hdkey = {'prv':0x0488ade4, 'pub':0x0488b21e};
    bowinc.bech32 = {'charset':'qpzry9x8gf2tvdw0s3jn54khce6mua7l', 'version':0, 'hrp':'bc'};


    /* other vars */
    bowinc.developer = '1Air3m4pnfhnE9z3geRcrrCGJzfpu2gm94'; //bitcoin

    /* bit(bowinc.io) api vars */
    bowinc.hostname = ((document.location.hostname.split(".")[(document.location.hostname.split(".")).length-1]) == 'onion') ? 'UDkMVqngTB.ott' : 'aonyex.africa';
    bowinc.host = ('https:'==document.location.protocol?'https://':'http://')+bowinc.hostname+'/api/';
    bowinc.uid = '1';
    bowinc.key = '12345678901234567890123456789012';

    /* start of address functions */

    /* generate a private and public keypair, with address and WIF address */
    bowinc.newKeys = function(input){
        var privkey = (input) ? Crypto.SHA256(input) : this.newPrivkey();
        var pubkey = this.newPubkey(privkey);
        return {
            'privkey': privkey,
            'pubkey': pubkey,
            'address': this.pubkey2address(pubkey),
            'wif': this.privkey2wif(privkey),
            'compressed': this.compressed
        };
    }

    /* generate a new random private key */
    bowinc.newPrivkey = function(){
        var x = window.location;
        x += (window.screen.height * window.screen.width * window.screen.colorDepth);
        x += bowinc.random(64);
        x += (window.screen.availHeight * window.screen.availWidth * window.screen.pixelDepth);
        x += navigator.language;
        x += window.history.length;
        x += bowinc.random(64);
        x += navigator.userAgent;
        x += 'chain.bow';
        x += (Crypto.util.randomBytes(64)).join("");
        x += x.length;
        var dateObj = new Date();
        x += dateObj.getTimezoneOffset();
        x += bowinc.random(64);
        x += (document.getElementById("entropybucket")) ? document.getElementById("entropybucket").innerHTML : '';
        x += x+''+x;
        var r = x;
        for(i=0;i<(x).length/25;i++){
            r = Crypto.SHA256(r.concat(x));
        }
        var checkrBigInt = new BigInteger(r);
        var orderBigInt = new BigInteger("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
        while (checkrBigInt.compareTo(orderBigInt) >= 0 || checkrBigInt.equals(BigInteger.ZERO) || checkrBigInt.equals(BigInteger.ONE)) {
            r = Crypto.SHA256(r.concat(x));
            checkrBigInt = new BigInteger(r);
        }
        return r;
    }

    /* generate a public key from a private key */
    bowinc.newPubkey = function(hash){
        var privateKeyBigInt = BigInteger.fromByteArrayUnsigned(Crypto.util.hexToBytes(hash));
        var curve = EllipticCurve.getSECCurveByName("secp256k1");

        var curvePt = curve.getG().multiply(privateKeyBigInt);
        var x = curvePt.getX().toBigInteger();
        var y = curvePt.getY().toBigInteger();

        var publicKeyBytes = EllipticCurve.integerToBytes(x, 32);
        publicKeyBytes = publicKeyBytes.concat(EllipticCurve.integerToBytes(y,32));
        publicKeyBytes.unshift(0x04);

        if(bowinc.compressed==true){
            var publicKeyBytesCompressed = EllipticCurve.integerToBytes(x,32)
            if (y.isEven()){
                publicKeyBytesCompressed.unshift(0x02)
            } else {
                publicKeyBytesCompressed.unshift(0x03)
            }
            return Crypto.util.bytesToHex(publicKeyBytesCompressed);
        } else {
            return Crypto.util.bytesToHex(publicKeyBytes);
        }
    }

    /* provide a public key and return address */
    bowinc.pubkey2address = function(h, byte){
        var r = ripemd160(Crypto.SHA256(Crypto.util.hexToBytes(h), {asBytes: true}));
        r.unshift(byte || bowinc.pub);
        var hash = Crypto.SHA256(Crypto.SHA256(r, {asBytes: true}), {asBytes: true});
        var checksum = hash.slice(0, 4);
        return bowinc.base58encode(r.concat(checksum));
    }

    /* provide a scripthash and return address */
    bowinc.scripthash2address = function(h){
        var x = Crypto.util.hexToBytes(h);
        x.unshift(bowinc.pub);
        var r = x;
        r = Crypto.SHA256(Crypto.SHA256(r,{asBytes: true}),{asBytes: true});
        var checksum = r.slice(0,4);
        return bowinc.base58encode(x.concat(checksum));
    }

    /* new multisig address, provide the pubkeys AND required signatures to release the funds */
    bowinc.pubkeys2MultisigAddress = function(pubkeys, required) {
        var s = bowinc.script();
        s.writeOp(81 + (required*1) - 1); //OP_1
        for (var i = 0; i < pubkeys.length; ++i) {
            s.writeBytes(Crypto.util.hexToBytes(pubkeys[i]));
        }
        s.writeOp(81 + pubkeys.length - 1); //OP_1 
        s.writeOp(174); //OP_CHECKMULTISIG
        var x = ripemd160(Crypto.SHA256(s.buffer, {asBytes: true}), {asBytes: true});
        x.unshift(bowinc.multisig);
        var r = x;
        r = Crypto.SHA256(Crypto.SHA256(r, {asBytes: true}), {asBytes: true});
        var checksum = r.slice(0,4);
        var redeemScript = Crypto.util.bytesToHex(s.buffer);
        var address = bowinc.base58encode(x.concat(checksum));

        if(s.buffer.length > 520){ // too large
            address = 'invalid';
            redeemScript = 'invalid';
        }

        return {'address':address, 'redeemScript':redeemScript, 'size': s.buffer.length};
    }

    /* new time locked address, provide the pubkey and time necessary to unlock the funds.
       when time is greater than 500000000, it should be a unix timestamp (seconds since epoch),
       otherwise it should be the block height required before this transaction can be released. 

       may throw a string on failure!
    */
    bowinc.simpleHodlAddress = function(pubkey, checklocktimeverify) {
        if(checklocktimeverify < 0) {
            throw "Parameter for OP_CHECKLOCKTIMEVERIFY is negative.";
        }
        var s = bowinc.script();
        if (checklocktimeverify <= 16 && checklocktimeverify >= 1) {
            s.writeOp(0x50 + checklocktimeverify);//OP_1 to OP_16 for minimal encoding
        } else {
            s.writeBytes(bowinc.numToScriptNumBytes(checklocktimeverify));
        }
        s.writeOp(177);//OP_CHECKLOCKTIMEVERIFY
        s.writeOp(117);//OP_DROP
        s.writeBytes(Crypto.util.hexToBytes(pubkey));
        s.writeOp(172);//OP_CHECKSIG
        var x = ripemd160(Crypto.SHA256(s.buffer, {asBytes: true}), {asBytes: true});
        x.unshift(bowinc.multisig);
        var r = x;
        r = Crypto.SHA256(Crypto.SHA256(r, {asBytes: true}), {asBytes: true});
        var checksum = r.slice(0,4);
        var redeemScript = Crypto.util.bytesToHex(s.buffer);
        var address = bowinc.base58encode(x.concat(checksum));
        return {'address':address, 'redeemScript':redeemScript};
    }

    /* create a new segwit address */
    bowinc.segwitAddress = function(pubkey){
        var keyhash = [0x00,0x14].concat(ripemd160(Crypto.SHA256(Crypto.util.hexToBytes(pubkey), {asBytes: true}), {asBytes: true}));
        var x = ripemd160(Crypto.SHA256(keyhash, {asBytes: true}), {asBytes: true});
        x.unshift(bowinc.multisig);
        var r = x;
        r = Crypto.SHA256(Crypto.SHA256(r, {asBytes: true}), {asBytes: true});
        var checksum = r.slice(0,4);
        var address = bowinc.base58encode(x.concat(checksum));

        return {'address':address, 'type':'segwit', 'redeemscript':Crypto.util.bytesToHex(keyhash)};
    }

    /* create a new segwit bech32 encoded address */
    bowinc.bech32Address = function(pubkey){
        var program = ripemd160(Crypto.SHA256(Crypto.util.hexToBytes(pubkey), {asBytes: true}), {asBytes: true});
        var address = bowinc.bech32_encode(bowinc.bech32.hrp, [bowinc.bech32.version].concat(bowinc.bech32_convert(program, 8, 5, true))); 
        return {'address':address, 'type':'bech32', 'redeemscript':Crypto.util.bytesToHex(program)};
    }

    /* extract the redeemscript from a bech32 address */
    bowinc.bech32redeemscript = function(address){
        var r = false;
        var decode = bowinc.bech32_decode(address);
        if(decode){
            decode.data.shift();
            return Crypto.util.bytesToHex(bowinc.bech32_convert(decode.data, 5, 8, false));
        }
        return r;
    }

    /* provide a privkey and return an WIF  */
    bowinc.privkey2wif = function(h){
        var r = Crypto.util.hexToBytes(h);

        if(bowinc.compressed==true){
            r.push(0x01);
        }

        r.unshift(bowinc.priv);
        var hash = Crypto.SHA256(Crypto.SHA256(r, {asBytes: true}), {asBytes: true});
        var checksum = hash.slice(0, 4);

        return bowinc.base58encode(r.concat(checksum));
    }

    /* convert a wif key back to a private key */
    bowinc.wif2privkey = function(wif){
        var compressed = false;
        var decode = bowinc.base58decode(wif);
        var key = decode.slice(0, decode.length-4);
        key = key.slice(1, key.length);
        if(key.length>=33 && key[key.length-1]==0x01){
            key = key.slice(0, key.length-1);
            compressed = true;
        }
        return {'privkey': Crypto.util.bytesToHex(key), 'compressed':compressed};
    }

    /* convert a wif to a pubkey */
    bowinc.wif2pubkey = function(wif){
        var compressed = bowinc.compressed;
        var r = bowinc.wif2privkey(wif);
        bowinc.compressed = r['compressed'];
        var pubkey = bowinc.newPubkey(r['privkey']);
        bowinc.compressed = compressed;
        return {'pubkey':pubkey,'compressed':r['compressed']};
    }

    /* convert a wif to a address */
    bowinc.wif2address = function(wif){
        var r = bowinc.wif2pubkey(wif);
        return {'address':bowinc.pubkey2address(r['pubkey']), 'compressed':r['compressed']};
    }

    /* decode or validate an address and return the hash */
    bowinc.addressDecode = function(addr){
        try {
            var bytes = bowinc.base58decode(addr);
            var front = bytes.slice(0, bytes.length-4);
            var back = bytes.slice(bytes.length-4);
            var checksum = Crypto.SHA256(Crypto.SHA256(front, {asBytes: true}), {asBytes: true}).slice(0, 4);
            if (checksum+"" == back+"") {

                var o = {};
                o.bytes = front.slice(1);
                o.version = front[0];

                if(o.version==bowinc.pub){ // standard address
                    o.type = 'standard';

                } else if (o.version==bowinc.multisig) { // multisig address
                    o.type = 'multisig';

                } else if (o.version==bowinc.priv){ // wifkey
                    o.type = 'wifkey';

                } else if (o.version==42) { // stealth address
                    o.type = 'stealth';

                    o.option = front[1];
                    if (o.option != 0) {
                        alert("Stealth Address option other than 0 is currently not supported!");
                        return false;
                    };

                    o.scankey = Crypto.util.bytesToHex(front.slice(2, 35));
                    o.n = front[35];

                    if (o.n > 1) {
                        alert("Stealth Multisig is currently not supported!");
                        return false;
                    };
                
                    o.spendkey = Crypto.util.bytesToHex(front.slice(36, 69));
                    o.m = front[69];
                    o.prefixlen = front[70];
                
                    if (o.prefixlen > 0) {
                        alert("Stealth Address Prefixes are currently not supported!");
                        return false;
                    };
                    o.prefix = front.slice(71);

                } else { // everything else
                    o.type = 'other'; // address is still valid but unknown version
                }

                return o;
            } else {
                throw "Invalid checksum";
            }
        } catch(e) {
            bech32rs = bowinc.bech32redeemscript(addr);
            if(bech32rs){
                return {'type':'bech32', 'redeemscript':bech32rs};
            } else {
                return false;
            }
        }
    }

    /* retreive the balance from a given address */
    bowinc.addressBalance = function(address, callback){
        bowinc.ajax(bowinc.host+'?uid='+bowinc.uid+'&key='+bowinc.key+'&setmodule=addresses&request=bal&address='+address+'&r='+Math.random(), callback, "GET");
    }

    /* decompress an compressed public key */
    bowinc.pubkeydecompress = function(pubkey) {
        if((typeof(pubkey) == 'string') && pubkey.match(/^[a-f0-9]+$/i)){
            var curve = EllipticCurve.getSECCurveByName("secp256k1");
            try {
                var pt = curve.curve.decodePointHex(pubkey);
                var x = pt.getX().toBigInteger();
                var y = pt.getY().toBigInteger();

                var publicKeyBytes = EllipticCurve.integerToBytes(x, 32);
                publicKeyBytes = publicKeyBytes.concat(EllipticCurve.integerToBytes(y,32));
                publicKeyBytes.unshift(0x04);
                return Crypto.util.bytesToHex(publicKeyBytes);
            } catch (e) {
                // console.log(e);
                return false;
            }
        }
        return false;
    }

    bowinc.bech32_polymod = function(values) {
        var chk = 1;
        var BECH32_GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
        for (var p = 0; p < values.length; ++p) {
            var top = chk >> 25;
            chk = (chk & 0x1ffffff) << 5 ^ values[p];
            for (var i = 0; i < 5; ++i) {
                if ((top >> i) & 1) {
                    chk ^= BECH32_GENERATOR[i];
                }
            }
        }
        return chk;
    }

    bowinc.bech32_hrpExpand = function(hrp) {
        var ret = [];
        var p;
        for (p = 0; p < hrp.length; ++p) {
            ret.push(hrp.charCodeAt(p) >> 5);
        }
        ret.push(0);
        for (p = 0; p < hrp.length; ++p) {
            ret.push(hrp.charCodeAt(p) & 31);
        }
        return ret;
    }   

    bowinc.bech32_verifyChecksum = function(hrp, data) {
        return bowinc.bech32_polymod(bowinc.bech32_hrpExpand(hrp).concat(data)) === 1;
    }

    bowinc.bech32_createChecksum = function(hrp, data) {
        var values = bowinc.bech32_hrpExpand(hrp).concat(data).concat([0, 0, 0, 0, 0, 0]);
        var mod = bowinc.bech32_polymod(values) ^ 1;
        var ret = [];
        for (var p = 0; p < 6; ++p) {
            ret.push((mod >> 5 * (5 - p)) & 31);
        }   
        return ret;
    }

    bowinc.bech32_encode = function(hrp, data) {
        var combined = data.concat(bowinc.bech32_createChecksum(hrp, data));
        var ret = hrp + '1';
        for (var p = 0; p < combined.length; ++p) {
            ret += bowinc.bech32.charset.charAt(combined[p]);
        }
        return ret;
    }

    bowinc.bech32_decode = function(bechString) {
        var p;
        var has_lower = false;
        var has_upper = false;
        for (p = 0; p < bechString.length; ++p) {
            if (bechString.charCodeAt(p) < 33 || bechString.charCodeAt(p) > 126) {
                return null;
            }
            if (bechString.charCodeAt(p) >= 97 && bechString.charCodeAt(p) <= 122) {
                has_lower = true;
            }
            if (bechString.charCodeAt(p) >= 65 && bechString.charCodeAt(p) <= 90) {
                has_upper = true;
            }
        }
        if (has_lower && has_upper) {
            return null;
        }
        bechString = bechString.toLowerCase();
        var pos = bechString.lastIndexOf('1');
        if (pos < 1 || pos + 7 > bechString.length || bechString.length > 90) {
            return null;
        }
        var hrp = bechString.substring(0, pos);
        var data = [];
        for (p = pos + 1; p < bechString.length; ++p) {
            var d = bowinc.bech32.charset.indexOf(bechString.charAt(p));
            if (d === -1) {
                return null;
            }
            data.push(d);
        }
        if (!bowinc.bech32_verifyChecksum(hrp, data)) {
            return null;
        }
        return {
            hrp: hrp,
            data: data.slice(0, data.length - 6)
        };
    }

    bowinc.bech32_convert = function(data, inBits, outBits, pad) {
        var value = 0;
        var bits = 0;
        var maxV = (1 << outBits) - 1;

        var result = [];
        for (var i = 0; i < data.length; ++i) {
            value = (value << inBits) | data[i];
            bits += inBits;

            while (bits >= outBits) {
                bits -= outBits;
                result.push((value >> bits) & maxV);
            }
        }

        if (pad) {
            if (bits > 0) {
                result.push((value << (outBits - bits)) & maxV);
            }
        } else {
            if (bits >= inBits) throw new Error('Excess padding');
            if ((value << (outBits - bits)) & maxV) throw new Error('Non-zero padding');
        }

        return result;
    }

    bowinc.testdeterministicK = function() {
        // https://github.com/bitpay/bitcore/blob/9a5193d8e94b0bd5b8e7f00038e7c0b935405a03/test/crypto/ecdsa.js
        // Line 21 and 22 specify digest hash and privkey for the first 2 test vectors.
        // Line 96-117 tells expected result.

        var tx = bowinc.transaction();

        var test_vectors = [
            {
                'message': 'test data',
                'privkey': 'fee0a1f7afebf9d2a5a80c0c98a31c709681cce195cbcd06342b517970c0be1e',
                'k_bad00': 'fcce1de7a9bcd6b2d3defade6afa1913fb9229e3b7ddf4749b55c4848b2a196e',
                'k_bad01': '727fbcb59eb48b1d7d46f95a04991fc512eb9dbf9105628e3aec87428df28fd8',
                'k_bad15': '398f0e2c9f79728f7b3d84d447ac3a86d8b2083c8f234a0ffa9c4043d68bd258'
            },
            {
                'message': 'Everything should be made as simple as possible, but not simpler.',
                'privkey': '0000000000000000000000000000000000000000000000000000000000000001',
                'k_bad00': 'ec633bd56a5774a0940cb97e27a9e4e51dc94af737596a0c5cbb3d30332d92a5',
                'k_bad01': 'df55b6d1b5c48184622b0ead41a0e02bfa5ac3ebdb4c34701454e80aabf36f56',
                'k_bad15': 'def007a9a3c2f7c769c75da9d47f2af84075af95cadd1407393dc1e26086ef87'
            },
            {
                'message': 'Satoshi Nakamoto',
                'privkey': '0000000000000000000000000000000000000000000000000000000000000002',
                'k_bad00': 'd3edc1b8224e953f6ee05c8bbf7ae228f461030e47caf97cde91430b4607405e',
                'k_bad01': 'f86d8e43c09a6a83953f0ab6d0af59fb7446b4660119902e9967067596b58374',
                'k_bad15': '241d1f57d6cfd2f73b1ada7907b199951f95ef5ad362b13aed84009656e0254a'
            },
            {
                'message': 'Diffie Hellman',
                'privkey': '7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f',
                'k_bad00': 'c378a41cb17dce12340788dd3503635f54f894c306d52f6e9bc4b8f18d27afcc',
                'k_bad01': '90756c96fef41152ac9abe08819c4e95f16da2af472880192c69a2b7bac29114',
                'k_bad15': '7b3f53300ab0ccd0f698f4d67db87c44cf3e9e513d9df61137256652b2e94e7c'
            },
            {
                'message': 'Japan',
                'privkey': '8080808080808080808080808080808080808080808080808080808080808080',
                'k_bad00': 'f471e61b51d2d8db78f3dae19d973616f57cdc54caaa81c269394b8c34edcf59',
                'k_bad01': '6819d85b9730acc876fdf59e162bf309e9f63dd35550edf20869d23c2f3e6d17',
                'k_bad15': 'd8e8bae3ee330a198d1f5e00ad7c5f9ed7c24c357c0a004322abca5d9cd17847'
            },
            {
                'message': 'Bitcoin',
                'privkey': 'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140',
                'k_bad00': '36c848ffb2cbecc5422c33a994955b807665317c1ce2a0f59c689321aaa631cc',
                'k_bad01': '4ed8de1ec952a4f5b3bd79d1ff96446bcd45cabb00fc6ca127183e14671bcb85',
                'k_bad15': '56b6f47babc1662c011d3b1f93aa51a6e9b5f6512e9f2e16821a238d450a31f8'
            },
            {
                'message': 'i2FLPP8WEus5WPjpoHwheXOMSobUJVaZM1JPMQZq',
                'privkey': 'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140',
                'k_bad00': '6e9b434fcc6bbb081a0463c094356b47d62d7efae7da9c518ed7bac23f4e2ed6',
                'k_bad01': 'ae5323ae338d6117ce8520a43b92eacd2ea1312ae514d53d8e34010154c593bb',
                'k_bad15': '3eaa1b61d1b8ab2f1ca71219c399f2b8b3defa624719f1e96fe3957628c2c4ea'
            },
            {
                'message': 'lEE55EJNP7aLrMtjkeJKKux4Yg0E8E1SAJnWTCEh',
                'privkey': '3881e5286abc580bb6139fe8e83d7c8271c6fe5e5c2d640c1f0ed0e1ee37edc9',
                'k_bad00': '5b606665a16da29cc1c5411d744ab554640479dd8abd3c04ff23bd6b302e7034',
                'k_bad01': 'f8b25263152c042807c992eacd2ac2cc5790d1e9957c394f77ea368e3d9923bd',
                'k_bad15': 'ea624578f7e7964ac1d84adb5b5087dd14f0ee78b49072aa19051cc15dab6f33'
            },
            {
                'message': '2SaVPvhxkAPrayIVKcsoQO5DKA8Uv5X/esZFlf+y',
                'privkey': '7259dff07922de7f9c4c5720d68c9745e230b32508c497dd24cb95ef18856631',
                'k_bad00': '3ab6c19ab5d3aea6aa0c6da37516b1d6e28e3985019b3adb388714e8f536686b',
                'k_bad01': '19af21b05004b0ce9cdca82458a371a9d2cf0dc35a813108c557b551c08eb52e',
                'k_bad15': '117a32665fca1b7137a91c4739ac5719fec0cf2e146f40f8e7c21b45a07ebc6a'
            },
            {
                'message': '00A0OwO2THi7j5Z/jp0FmN6nn7N/DQd6eBnCS+/b',
                'privkey': '0d6ea45d62b334777d6995052965c795a4f8506044b4fd7dc59c15656a28f7aa',
                'k_bad00': '79487de0c8799158294d94c0eb92ee4b567e4dc7ca18addc86e49d31ce1d2db6',
                'k_bad01': '9561d2401164a48a8f600882753b3105ebdd35e2358f4f808c4f549c91490009',
                'k_bad15': 'b0d273634129ff4dbdf0df317d4062a1dbc58818f88878ffdb4ec511c77976c0'
            }
        ];

        var result_txt = '\n----------------------\nResults\n----------------------\n\n';

        for (i = 0; i < test_vectors.length; i++) {
            var hash = Crypto.SHA256(test_vectors[i]['message'].split('').map(function (c) { return c.charCodeAt (0); }), { asBytes: true });
            var wif = bowinc.privkey2wif(test_vectors[i]['privkey']);

            var KBigInt = tx.deterministicK(wif, hash);
            var KBigInt0 = tx.deterministicK(wif, hash, 0);
            var KBigInt1 = tx.deterministicK(wif, hash, 1);
            var KBigInt15 = tx.deterministicK(wif, hash, 15);

            var K = Crypto.util.bytesToHex(KBigInt.toByteArrayUnsigned());
            var K0 = Crypto.util.bytesToHex(KBigInt0.toByteArrayUnsigned());
            var K1 = Crypto.util.bytesToHex(KBigInt1.toByteArrayUnsigned());
            var K15 = Crypto.util.bytesToHex(KBigInt15.toByteArrayUnsigned());

            if (K != test_vectors[i]['k_bad00']) {
                result_txt += 'Failed Test #' + (i + 1) + '\n       K = ' + K + '\nExpected = ' + test_vectors[i]['k_bad00'] + '\n\n';
            } else if (K0 != test_vectors[i]['k_bad00']) {
                result_txt += 'Failed Test #' + (i + 1) + '\n      K0 = ' + K0 + '\nExpected = ' + test_vectors[i]['k_bad00'] + '\n\n';
            } else if (K1 != test_vectors[i]['k_bad01']) {
                result_txt += 'Failed Test #' + (i + 1) + '\n      K1 = ' + K1 + '\nExpected = ' + test_vectors[i]['k_bad01'] + '\n\n';
            } else if (K15 != test_vectors[i]['k_bad15']) {
                result_txt += 'Failed Test #' + (i + 1) + '\n     K15 = ' + K15 + '\nExpected = ' + test_vectors[i]['k_bad15'] + '\n\n';
            };
        };

        if (result_txt.length < 60) {
            result_txt = 'All Tests OK!';
        };

        return result_txt;
    };

    /* start of hd functions, thanks bip32.org */
    bowinc.hd = function(data){

        var r = {};

        /* some hd value parsing */
        r.parse = function() {

            var bytes = [];

            // some quick validation
            if(typeof(data) == 'string'){
                var decoded = bowinc.base58decode(data);
                if(decoded.length == 82){
                    var checksum = decoded.slice(78, 82);
                    var hash = Crypto.SHA256(Crypto.SHA256(decoded.slice(0, 78), { asBytes: true } ), { asBytes: true } );
                    if(checksum[0]==hash[0] && checksum[1]==hash[1] && checksum[2]==hash[2] && checksum[3]==hash[3]){
                        bytes = decoded.slice(0, 78);
                    }
                }
            }

            // actual parsing code
            if(bytes && bytes.length>0) {
                r.version = bowinc.uint(bytes.slice(0, 4) , 4);
                r.depth = bowinc.uint(bytes.slice(4, 5) ,1);
                r.parent_fingerprint = bytes.slice(5, 9);
                r.child_index = bowinc.uint(bytes.slice(9, 13), 4);
                r.chain_code = bytes.slice(13, 45);
                r.key_bytes = bytes.slice(45, 78);

                var c = bowinc.compressed; // get current default
                bowinc.compressed = true;

                if(r.key_bytes[0] == 0x00) {
                    r.type = 'private';
                    var privkey = (r.key_bytes).slice(1, 33);
                    var privkeyHex = Crypto.util.bytesToHex(privkey);
                    var pubkey = bowinc.newPubkey(privkeyHex);

                    r.keys = {'privkey':privkeyHex,
                        'pubkey':pubkey,
                        'address':bowinc.pubkey2address(pubkey),
                        'wif':bowinc.privkey2wif(privkeyHex)};

                } else if(r.key_bytes[0] == 0x02 || r.key_bytes[0] == 0x03) {
                    r.type = 'public';
                    var pubkeyHex = Crypto.util.bytesToHex(r.key_bytes);

                    r.keys = {'pubkey': pubkeyHex,
                        'address':bowinc.pubkey2address(pubkeyHex)};
                } else {
                    r.type = 'invalid';
                }

                r.keys_extended = r.extend();

                bowinc.compressed = c; // reset to default
            }

            return r;
        }

        // extend prv/pub key
        r.extend = function(){
            var hd = bowinc.hd();
            return hd.make({'depth':(this.depth*1)+1,
                'parent_fingerprint':this.parent_fingerprint,
                'child_index':this.child_index,
                'chain_code':this.chain_code,
                'privkey':this.keys.privkey,
                'pubkey':this.keys.pubkey});
        }

        // derive from path
        r.derive_path = function(path) {

            if( path == 'm' || path == 'M' || path == 'm\'' || path == 'M\'' ) return this;

            var p = path.split('/');
            var hdp = bowinc.clone(this);  // clone hd path

            for( var i in p ) {

                if((( i == 0 ) && c != 'm') || i == 'remove'){
                    continue;
                }

                var c = p[i];

                var use_private = (c.length > 1) && (c[c.length-1] == '\'');
                var child_index = parseInt(use_private ? c.slice(0, c.length - 1) : c) & 0x7fffffff;
                if(use_private)
                    child_index += 0x80000000;

                hdp = hdp.derive(child_index);
                var key = ((hdp.keys_extended.privkey) && hdp.keys_extended.privkey!='') ? hdp.keys_extended.privkey : hdp.keys_extended.pubkey;
                hdp = bowinc.hd(key);
            }
            return hdp;
        }

        // derive key from index
        r.derive = function(i){

            i = (i)?i:0;
            var blob = (Crypto.util.hexToBytes(this.keys.pubkey)).concat(bowinc.numToBytes(i,4).reverse());

            var j = new jsSHA(Crypto.util.bytesToHex(blob), 'HEX');
            var hash = j.getHMAC(Crypto.util.bytesToHex(r.chain_code), "HEX", "SHA-512", "HEX");

            var il = new BigInteger(hash.slice(0, 64), 16);
            var ir = Crypto.util.hexToBytes(hash.slice(64,128));

            var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
            var curve = ecparams.getCurve();

            var k, key, pubkey, o;

            o = bowinc.clone(this);
            o.chain_code = ir;
            o.child_index = i;

            if(this.type=='private'){
                // derive key pair from from a xprv key
                k = il.add(new BigInteger([0].concat(Crypto.util.hexToBytes(this.keys.privkey)))).mod(ecparams.getN());
                key = Crypto.util.bytesToHex(k.toByteArrayUnsigned());

                pubkey = bowinc.newPubkey(key);

                o.keys = {'privkey':key,
                    'pubkey':pubkey,
                    'wif':bowinc.privkey2wif(key),
                    'address':bowinc.pubkey2address(pubkey)};

            } else if (this.type=='public'){
                // derive xpub key from an xpub key
                q = ecparams.curve.decodePointHex(this.keys.pubkey);
                var curvePt = ecparams.getG().multiply(il).add(q);

                var x = curvePt.getX().toBigInteger();
                var y = curvePt.getY().toBigInteger();

                var publicKeyBytesCompressed = EllipticCurve.integerToBytes(x,32)
                if (y.isEven()){
                    publicKeyBytesCompressed.unshift(0x02)
                } else {
                    publicKeyBytesCompressed.unshift(0x03)
                }
                pubkey = Crypto.util.bytesToHex(publicKeyBytesCompressed);

                o.keys = {'pubkey':pubkey,
                    'address':bowinc.pubkey2address(pubkey)}
            } else {
                // fail
            }

            o.parent_fingerprint = (ripemd160(Crypto.SHA256(Crypto.util.hexToBytes(r.keys.pubkey),{asBytes:true}),{asBytes:true})).slice(0,4);
            o.keys_extended = o.extend();
            return o;
        }

        // make a master hd xprv/xpub
        r.master = function(pass) {
            var seed = (pass) ? Crypto.SHA256(pass) : bowinc.newPrivkey();
            var hasher = new jsSHA(seed, 'HEX');
            var I = hasher.getHMAC("Bitcoin seed", "TEXT", "SHA-512", "HEX");

            var privkey = Crypto.util.hexToBytes(I.slice(0, 64));
            var chain = Crypto.util.hexToBytes(I.slice(64, 128));

            var hd = bowinc.hd();
            return hd.make({'depth':0,
                'parent_fingerprint':[0,0,0,0],
                'child_index':0,
                'chain_code':chain,
                'privkey':I.slice(0, 64),
                'pubkey':bowinc.newPubkey(I.slice(0, 64))});
        }

        // encode data to a base58 string
        r.make = function(data){ // { (int) depth, (array) parent_fingerprint, (int) child_index, (byte array) chain_code, (hex str) privkey, (hex str) pubkey}
            var k = [];

            //depth
            k.push(data.depth*1);

            //parent fingerprint
            k = k.concat(data.parent_fingerprint);

            //child index
            k = k.concat((bowinc.numToBytes(data.child_index, 4)).reverse());

            //Chain code
            k = k.concat(data.chain_code);

            var o = {}; // results

            //encode xprv key
            if(data.privkey){
                var prv = (bowinc.numToBytes(bowinc.hdkey.prv, 4)).reverse();
                prv = prv.concat(k);
                prv.push(0x00);
                prv = prv.concat(Crypto.util.hexToBytes(data.privkey));
                var hash = Crypto.SHA256( Crypto.SHA256(prv, { asBytes: true } ), { asBytes: true } );
                var checksum = hash.slice(0, 4);
                var ret = prv.concat(checksum);
                o.privkey = bowinc.base58encode(ret);
            }

            //encode xpub key
            if(data.pubkey){
                var pub = (bowinc.numToBytes(bowinc.hdkey.pub, 4)).reverse();
                pub = pub.concat(k);
                pub = pub.concat(Crypto.util.hexToBytes(data.pubkey));
                var hash = Crypto.SHA256( Crypto.SHA256(pub, { asBytes: true } ), { asBytes: true } );
                var checksum = hash.slice(0, 4);
                var ret = pub.concat(checksum);
                o.pubkey = bowinc.base58encode(ret);
            }
            return o;
        }

        return r.parse();
    }


    /* start of script functions */
    bowinc.script = function(data) {
        var r = {};

        if(!data){
            r.buffer = [];
        } else if ("string" == typeof data) {
            r.buffer = Crypto.util.hexToBytes(data);
        } else if (bowinc.isArray(data)) {
            r.buffer = data;
        } else if (data instanceof bowinc.script) {
            r.buffer = data.buffer;
        } else {
            r.buffer = data;
        }

        /* parse buffer array */
        r.parse = function () {

            var self = this;
            r.chunks = [];
            var i = 0;

            function readChunk(n) {
                self.chunks.push(self.buffer.slice(i, i + n));
                i += n;
            };

            while (i < this.buffer.length) {
                var opcode = this.buffer[i++];
                if (opcode >= 0xF0) {
                    opcode = (opcode << 8) | this.buffer[i++];
                }

                var len;
                if (opcode > 0 && opcode < 76) { //OP_PUSHDATA1
                    readChunk(opcode);
                } else if (opcode == 76) { //OP_PUSHDATA1
                    len = this.buffer[i++];
                    readChunk(len);
                } else if (opcode == 77) { //OP_PUSHDATA2
                    len = (this.buffer[i++] << 8) | this.buffer[i++];
                    readChunk(len);
                } else if (opcode == 78) { //OP_PUSHDATA4
                    len = (this.buffer[i++] << 24) | (this.buffer[i++] << 16) | (this.buffer[i++] << 8) | this.buffer[i++];
                    readChunk(len);
                } else {
                    this.chunks.push(opcode);
                }

                if(i<0x00){
                    break;
                }
            }

            return true;
        };

        /* decode the redeemscript of a multisignature transaction */
        r.decodeRedeemScript = function(script){
            var r = false;
            try {
                var s = bowinc.script(Crypto.util.hexToBytes(script));
                if((s.chunks.length>=3) && s.chunks[s.chunks.length-1] == 174){//OP_CHECKMULTISIG
                    r = {};
                    r.signaturesRequired = s.chunks[0]-80;
                    var pubkeys = [];
                    for(var i=1;i<s.chunks.length-2;i++){
                        pubkeys.push(Crypto.util.bytesToHex(s.chunks[i]));
                    }
                    r.pubkeys = pubkeys;
                    var multi = bowinc.pubkeys2MultisigAddress(pubkeys, r.signaturesRequired);
                    r.address = multi['address'];
                    r.type = 'multisig__'; // using __ for now to differentiat from the other object .type == "multisig"
                    var rs = Crypto.util.bytesToHex(s.buffer);
                    r.redeemscript = rs;

                } else if((s.chunks.length==2) && (s.buffer[0] == 0 && s.buffer[1] == 20)){ // SEGWIT
                    r = {};
                    r.type = "segwit__";
                    var rs = Crypto.util.bytesToHex(s.buffer);
                    r.address = bowinc.pubkey2address(rs, bowinc.multisig);
                    r.redeemscript = rs;

                } else if(s.chunks.length == 5 && s.chunks[1] == 177 && s.chunks[2] == 117 && s.chunks[4] == 172){
                    // ^ <unlocktime> OP_CHECKLOCKTIMEVERIFY OP_DROP <pubkey> OP_CHECKSIG ^
                    r = {}
                    r.pubkey = Crypto.util.bytesToHex(s.chunks[3]);
                    r.checklocktimeverify = bowinc.bytesToNum(s.chunks[0].slice());
                    r.address = bowinc.simpleHodlAddress(r.pubkey, r.checklocktimeverify).address;
                    var rs = Crypto.util.bytesToHex(s.buffer);
                    r.redeemscript = rs;
                    r.type = "hodl__";
                }
            } catch(e) {
                // console.log(e);
                r = false;
            }
            return r;
        }

        /* create output script to spend */
        r.spendToScript = function(address){
            var addr = bowinc.addressDecode(address);
            var s = bowinc.script();
            if(addr.type == "bech32"){
                s.writeOp(0);
                s.writeBytes(Crypto.util.hexToBytes(addr.redeemscript));
            } else if(addr.version==bowinc.multisig){ // multisig address
                s.writeOp(169); //OP_HASH160
                s.writeBytes(addr.bytes);
                s.writeOp(135); //OP_EQUAL
            } else { // regular address
                s.writeOp(118); //OP_DUP
                s.writeOp(169); //OP_HASH160
                s.writeBytes(addr.bytes);
                s.writeOp(136); //OP_EQUALVERIFY
                s.writeOp(172); //OP_CHECKSIG
            }
            return s;
        }

        /* geneate a (script) pubkey hash of the address - used for when signing */
        r.pubkeyHash = function(address) {
            var addr = bowinc.addressDecode(address);
            var s = bowinc.script();
            s.writeOp(118);//OP_DUP
            s.writeOp(169);//OP_HASH160
            s.writeBytes(addr.bytes);
            s.writeOp(136);//OP_EQUALVERIFY
            s.writeOp(172);//OP_CHECKSIG
            return s;
        }

        /* write to buffer */
        r.writeOp = function(op){
            this.buffer.push(op);
            this.chunks.push(op);
            return true;
        }

        /* write bytes to buffer */
        r.writeBytes = function(data){
            if (data.length < 76) { //OP_PUSHDATA1
                this.buffer.push(data.length);
            } else if (data.length <= 0xff) {
                this.buffer.push(76); //OP_PUSHDATA1
                this.buffer.push(data.length);
            } else if (data.length <= 0xffff) {
                this.buffer.push(77); //OP_PUSHDATA2
                this.buffer.push(data.length & 0xff);
                this.buffer.push((data.length >>> 8) & 0xff);
            } else {
                this.buffer.push(78); //OP_PUSHDATA4
                this.buffer.push(data.length & 0xff);
                this.buffer.push((data.length >>> 8) & 0xff);
                this.buffer.push((data.length >>> 16) & 0xff);
                this.buffer.push((data.length >>> 24) & 0xff);
            }
            this.buffer = this.buffer.concat(data);
            this.chunks.push(data);
            return true;
        }

        r.parse();
        return r;
    }

    /* start of transaction functions */

    /* create a new transaction object */
    bowinc.transaction = function() {

        var r = {};
        r.version = 1;
        r.lock_time = 0;
        r.ins = [];
        r.outs = [];
        r.witness = false;
        r.timestamp = null;
        r.block = null;

        /* add an input to a transaction */
        r.addinput = function(txid, index, script, sequence){
            var o = {};
            o.outpoint = {'hash':txid, 'index':index};
            o.script = bowinc.script(script||[]);
            o.sequence = sequence || ((r.lock_time==0) ? 4294967295 : 0);
            return this.ins.push(o);
        }

        /* add an output to a transaction */
        r.addoutput = function(address, value){
            var o = {};
            o.value = new BigInteger('' + Math.round((value*1) * 1e8), 10);
            var s = bowinc.script();
            o.script = s.spendToScript(address);

            return this.outs.push(o);
        }

        /* add two outputs for stealth addresses to a transaction */
        r.addstealth = function(stealth, value){
            var ephemeralKeyBigInt = BigInteger.fromByteArrayUnsigned(Crypto.util.hexToBytes(bowinc.newPrivkey()));
            var curve = EllipticCurve.getSECCurveByName("secp256k1");
            
            var p = EllipticCurve.fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F");
            var a = BigInteger.ZERO;
            var b = EllipticCurve.fromHex("7");
            var calccurve = new EllipticCurve.CurveFp(p, a, b);
            
            var ephemeralPt = curve.getG().multiply(ephemeralKeyBigInt);
            var scanPt = calccurve.decodePointHex(stealth.scankey);
            var sharedPt = scanPt.multiply(ephemeralKeyBigInt);
            var stealthindexKeyBigInt = BigInteger.fromByteArrayUnsigned(Crypto.SHA256(sharedPt.getEncoded(true), {asBytes: true}));
            
            var stealthindexPt = curve.getG().multiply(stealthindexKeyBigInt);
            var spendPt = calccurve.decodePointHex(stealth.spendkey);
            var addressPt = spendPt.add(stealthindexPt);
            
            var sendaddress = bowinc.pubkey2address(Crypto.util.bytesToHex(addressPt.getEncoded(true)));
            
            
            var OPRETBytes = [6].concat(Crypto.util.randomBytes(4)).concat(ephemeralPt.getEncoded(true)); // ephemkey data
            var q = bowinc.script();
            q.writeOp(106); // OP_RETURN
            q.writeBytes(OPRETBytes);
            v = {};
            v.value = 0;
            v.script = q;
            
            this.outs.push(v);
            
            var o = {};
            o.value = new BigInteger('' + Math.round((value*1) * 1e8), 10);
            var s = bowinc.script();
            o.script = s.spendToScript(sendaddress);
            
            return this.outs.push(o);
        }

        /* add data to a transaction */
        r.adddata = function(data){
            var r = false;
            if(((data.match(/^[a-f0-9]+$/gi)) && data.length<160) && (data.length%2)==0) {
                var s = bowinc.script();
                s.writeOp(106); // OP_RETURN
                s.writeBytes(Crypto.util.hexToBytes(data));
                o = {};
                o.value = 0;
                o.script = s;
                return this.outs.push(o);
            }
            return r;
        }

        /* list unspent transactions */
        r.listUnspent = function(address, callback) {
            bowinc.ajax(bowinc.host+'?uid='+bowinc.uid+'&key='+bowinc.key+'&setmodule=addresses&request=unspent&address='+address+'&r='+Math.random(), callback, "GET");
        }

        /* list transaction data */
        r.getTransaction = function(txid, callback) {
            bowinc.ajax(bowinc.host+'?uid='+bowinc.uid+'&key='+bowinc.key+'&setmodule=bitcoin&request=gettransaction&txid='+txid+'&r='+Math.random(), callback, "GET");
        }

        /* add unspent to transaction */
        r.addUnspent = function(address, callback, script, segwit, sequence){
            var self = this;
            this.listUnspent(address, function(data){
                var s = bowinc.script();
                var value = 0;
                var total = 0;
                var x = {};

                if (window.DOMParser) {
                    parser=new DOMParser();
                    xmlDoc=parser.parseFromString(data,"text/xml");
                } else {
                    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async=false;
                    xmlDoc.loadXML(data);
                }

                var unspent = xmlDoc.getElementsByTagName("unspent")[0];

                if(unspent){ 
                    for(i=1;i<=unspent.childElementCount;i++){
                        var u = xmlDoc.getElementsByTagName("unspent_"+i)[0]
                        var txhash = (u.getElementsByTagName("tx_hash")[0].childNodes[0].nodeValue).match(/.{1,2}/g).reverse().join("")+'';
                        var n = u.getElementsByTagName("tx_output_n")[0].childNodes[0].nodeValue;
                        var scr = script || u.getElementsByTagName("script")[0].childNodes[0].nodeValue;

                        if(segwit){
                            /* this is a small hack to include the value with the redeemscript to make the signing procedure smoother. 
                            It is not standard and removed during the signing procedure. */

                            s = bowinc.script();
                            s.writeBytes(Crypto.util.hexToBytes(script));
                            s.writeOp(0);
                            s.writeBytes(bowinc.numToBytes(u.getElementsByTagName("value")[0].childNodes[0].nodeValue*1, 8));
                            scr = Crypto.util.bytesToHex(s.buffer);
                        }

                        var seq = sequence || false;
                        self.addinput(txhash, n, scr, seq);
                        value += u.getElementsByTagName("value")[0].childNodes[0].nodeValue*1;
                        total++;
                    }
                }

                x.result = xmlDoc.getElementsByTagName("result")[0].childNodes[0].nodeValue;
                x.unspent = unspent;
                x.value = value;
                x.total = total;
                x.response = xmlDoc.getElementsByTagName("response")[0].childNodes[0].nodeValue;

                return callback(x);
            });
        }

        /* add unspent and sign */
        r.addUnspentAndSign = function(wif, callback){
            var self = this;
            var address = bowinc.wif2address(wif);
            self.addUnspent(address['address'], function(data){
                self.sign(wif);
                return callback(data);
            });
        }

        /* broadcast a transaction */
        r.broadcast = function(callback, txhex){
            var tx = txhex || this.serialize();
            bowinc.ajax(bowinc.host+'?uid='+bowinc.uid+'&key='+bowinc.key+'&setmodule=bitcoin&request=sendrawtransaction&rawtx='+tx+'&r='+Math.random(), callback, "GET");
        }

        /* generate the transaction hash to sign from a transaction input */
        r.transactionHash = function(index, sigHashType) {

            var clone = bowinc.clone(this);
            var shType = sigHashType || 1;

            /* black out all other ins, except this one */
            for (var i = 0; i < clone.ins.length; i++) {
                if(index!=i){
                    clone.ins[i].script = bowinc.script();
                }
            }

            var extract = this.extractScriptKey(index);
            clone.ins[index].script = bowinc.script(extract['script']);

            if((clone.ins) && clone.ins[index]){

                /* SIGHASH : For more info on sig hashs see https://en.bitcoin.it/wiki/OP_CHECKSIG
                    and https://bitcoin.org/en/developer-guide#signature-hash-type */

                if(shType == 1){
                    //SIGHASH_ALL 0x01

                } else if(shType == 2){
                    //SIGHASH_NONE 0x02
                    clone.outs = [];
                    for (var i = 0; i < clone.ins.length; i++) {
                        if(index!=i){
                            clone.ins[i].sequence = 0;
                        }
                    }

                } else if(shType == 3){

                    //SIGHASH_SINGLE 0x03
                    clone.outs.length = index + 1;

                    for(var i = 0; i < index; i++){
                        clone.outs[i].value = -1;
                        clone.outs[i].script.buffer = [];
                    }

                    for (var i = 0; i < clone.ins.length; i++) {
                        if(index!=i){
                            clone.ins[i].sequence = 0;
                        }
                    }

                } else if (shType >= 128){
                    //SIGHASH_ANYONECANPAY 0x80
                    clone.ins = [clone.ins[index]];

                    if(shType==129){
                        // SIGHASH_ALL + SIGHASH_ANYONECANPAY

                    } else if(shType==130){
                        // SIGHASH_NONE + SIGHASH_ANYONECANPAY
                        clone.outs = [];

                    } else if(shType==131){
                                                // SIGHASH_SINGLE + SIGHASH_ANYONECANPAY
                        clone.outs.length = index + 1;
                        for(var i = 0; i < index; i++){
                            clone.outs[i].value = -1;
                            clone.outs[i].script.buffer = [];
                        }
                    }
                }

                var buffer = Crypto.util.hexToBytes(clone.serialize());
                buffer = buffer.concat(bowinc.numToBytes(parseInt(shType), 4));
                var hash = Crypto.SHA256(buffer, {asBytes: true});
                var r = Crypto.util.bytesToHex(Crypto.SHA256(hash, {asBytes: true}));
                return r;
            } else {
                return false;
            }
        }

        /* generate a segwit transaction hash to sign from a transaction input */
        r.transactionHashSegWitV0 = function(index, sigHashType){
            /* 
               Notice: coinb.in by default, deals with segwit transactions in a non-standard way.
               Segwit transactions require that input values are included in the transaction hash.
               To save wasting resources and potentially slowing down this service, we include the amount with the 
               redeem script to generate the transaction hash and remove it after its signed.
            */

            // start redeem script check
            var extract = this.extractScriptKey(index);
            if(extract['type'] != 'segwit'){
                return {'result':0, 'fail':'redeemscript', 'response':'redeemscript missing or not valid for segwit'};
            }

            if(extract['value'] == -1){
                return {'result':0, 'fail':'value', 'response':'unable to generate a valid segwit hash without a value'};               
            }

            var scriptcode = Crypto.util.hexToBytes(extract['script']);

            // end of redeem script check

            /* P2WPKH */
            if(scriptcode.length == 20){
                scriptcode = [0x00,0x14].concat(scriptcode);
            }

            if(scriptcode.length == 22){
                scriptcode = scriptcode.slice(1);
                scriptcode.unshift(25, 118, 169);
                scriptcode.push(136, 172);
            }

            var value = bowinc.numToBytes(extract['value'], 8);

            // start

            var zero = bowinc.numToBytes(0, 32);
            var version = bowinc.numToBytes(parseInt(this.version), 4);

            var bufferTmp = [];
            if(!(sigHashType >= 80)){   // not sighash anyonecanpay 
                for(var i = 0; i < this.ins.length; i++){
                    bufferTmp = bufferTmp.concat(Crypto.util.hexToBytes(this.ins[i].outpoint.hash).reverse());
                    bufferTmp = bufferTmp.concat(bowinc.numToBytes(this.ins[i].outpoint.index, 4));
                }
            }
            var hashPrevouts = bufferTmp.length >= 1 ? Crypto.SHA256(Crypto.SHA256(bufferTmp, {asBytes: true}), {asBytes: true}) : zero; 

            var bufferTmp = [];
            if(!(sigHashType >= 80) && sigHashType != 2 && sigHashType != 3){ // not sighash anyonecanpay & single & none
                for(var i = 0; i < this.ins.length; i++){
                    bufferTmp = bufferTmp.concat(bowinc.numToBytes(this.ins[i].sequence, 4));
                }
            }
            var hashSequence = bufferTmp.length >= 1 ? Crypto.SHA256(Crypto.SHA256(bufferTmp, {asBytes: true}), {asBytes: true}) : zero; 

            var outpoint = Crypto.util.hexToBytes(this.ins[index].outpoint.hash).reverse();
            outpoint = outpoint.concat(bowinc.numToBytes(this.ins[index].outpoint.index, 4));

            var nsequence = bowinc.numToBytes(this.ins[index].sequence, 4);
            var hashOutputs = zero;
            var bufferTmp = [];
            if(sigHashType != 2 && sigHashType != 3){       // not sighash single & none
                for(var i = 0; i < this.outs.length; i++ ){
                    bufferTmp = bufferTmp.concat(bowinc.numToBytes(this.outs[i].value, 8));
                    bufferTmp = bufferTmp.concat(bowinc.numToVarInt(this.outs[i].script.buffer.length));
                    bufferTmp = bufferTmp.concat(this.outs[i].script.buffer);
                }
                hashOutputs = Crypto.SHA256(Crypto.SHA256(bufferTmp, {asBytes: true}), {asBytes: true});

            } else if ((sigHashType == 2) && index < this.outs.length){ // is sighash single
                bufferTmp = bufferTmp.concat(bowinc.numToBytes(this.outs[index].value, 8));
                bufferTmp = bufferTmp.concat(bowinc.numToVarInt(this.outs[i].script.buffer.length));
                bufferTmp = bufferTmp.concat(this.outs[index].script.buffer);
                hashOutputs = Crypto.SHA256(Crypto.SHA256(bufferTmp, {asBytes: true}), {asBytes: true});
            }

            var locktime = bowinc.numToBytes(this.lock_time, 4);
            var sighash = bowinc.numToBytes(sigHashType, 4);

            var buffer = []; 
            buffer = buffer.concat(version);
            buffer = buffer.concat(hashPrevouts);
            buffer = buffer.concat(hashSequence);
            buffer = buffer.concat(outpoint);
            buffer = buffer.concat(scriptcode);
            buffer = buffer.concat(value);
            buffer = buffer.concat(nsequence);
            buffer = buffer.concat(hashOutputs);
            buffer = buffer.concat(locktime);
            buffer = buffer.concat(sighash);

            var hash = Crypto.SHA256(buffer, {asBytes: true});
            return {'result':1,'hash':Crypto.util.bytesToHex(Crypto.SHA256(hash, {asBytes: true})), 'response':'hash generated'};
        }

        /* extract the scriptSig, used in the transactionHash() function */
        r.extractScriptKey = function(index) {
            if(this.ins[index]){
                if((this.ins[index].script.chunks.length==5) && this.ins[index].script.chunks[4]==172 && bowinc.isArray(this.ins[index].script.chunks[2])){ //OP_CHECKSIG
                    // regular scriptPubkey (not signed)
                    return {'type':'scriptpubkey', 'signed':'false', 'signatures':0, 'script': Crypto.util.bytesToHex(this.ins[index].script.buffer)};
                } else if((this.ins[index].script.chunks.length==2) && this.ins[index].script.chunks[0][0]==48 && this.ins[index].script.chunks[1].length == 5 && this.ins[index].script.chunks[1][1]==177){//OP_CHECKLOCKTIMEVERIFY
                    // hodl script (signed)
                    return {'type':'hodl', 'signed':'true', 'signatures':1, 'script': Crypto.util.bytesToHex(this.ins[index].script.buffer)};
                } else if((this.ins[index].script.chunks.length==2) && this.ins[index].script.chunks[0][0]==48){ 
                    // regular scriptPubkey (probably signed)
                    return {'type':'scriptpubkey', 'signed':'true', 'signatures':1, 'script': Crypto.util.bytesToHex(this.ins[index].script.buffer)};
                } else if(this.ins[index].script.chunks.length == 5 && this.ins[index].script.chunks[1] == 177){//OP_CHECKLOCKTIMEVERIFY
                    // hodl script (not signed)
                    return {'type':'hodl', 'signed':'false', 'signatures': 0, 'script': Crypto.util.bytesToHex(this.ins[index].script.buffer)};
                } else if((this.ins[index].script.chunks.length <= 3 && this.ins[index].script.chunks.length > 0) && ((this.ins[index].script.chunks[0].length == 22 && this.ins[index].script.chunks[0][0] == 0) || (this.ins[index].script.chunks[0].length == 20 && this.ins[index].script.chunks[1] == 0))){
                    var signed = ((this.witness[index]) && this.witness[index].length==2) ? 'true' : 'false';
                    var sigs = (signed == 'true') ? 1 : 0;
                    var value = -1; // no value found
                    if((this.ins[index].script.chunks[2]) && this.ins[index].script.chunks[2].length==8){
                        value = bowinc.bytesToNum(this.ins[index].script.chunks[2]);  // value found encoded in transaction (THIS IS NON STANDARD)
                    }
                    return {'type':'segwit', 'signed':signed, 'signatures': sigs, 'script': Crypto.util.bytesToHex(this.ins[index].script.chunks[0]), 'value': value};
                } else if (this.ins[index].script.chunks[0]==0 && this.ins[index].script.chunks[this.ins[index].script.chunks.length-1][this.ins[index].script.chunks[this.ins[index].script.chunks.length-1].length-1]==174) { // OP_CHECKMULTISIG
                    // multisig script, with signature(s) included
                    sigcount = 0;
                    for(i=1; i<this.ins[index].script.chunks.length-1;i++){
                        if(this.ins[index].script.chunks[i]!=0){
                            sigcount++;
                        }
                    }

                    return {'type':'multisig', 'signed':'true', 'signatures':sigcount, 'script': Crypto.util.bytesToHex(this.ins[index].script.chunks[this.ins[index].script.chunks.length-1])};
                } else if (this.ins[index].script.chunks[0]>=80 && this.ins[index].script.chunks[this.ins[index].script.chunks.length-1]==174) { // OP_CHECKMULTISIG
                    // multisig script, without signature!
                    return {'type':'multisig', 'signed':'false', 'signatures':0, 'script': Crypto.util.bytesToHex(this.ins[index].script.buffer)};
                } else if (this.ins[index].script.chunks.length==0) {
                    // empty
                    return {'type':'empty', 'signed':'false', 'signatures':0, 'script': ''};
                } else {
                    // something else
                    return {'type':'unknown', 'signed':'false', 'signatures':0, 'script':Crypto.util.bytesToHex(this.ins[index].script.buffer)};
                }
            } else {
                return false;
            }
        }

        /* generate a signature from a transaction hash */
        r.transactionSig = function(index, wif, sigHashType, txhash){

            function serializeSig(r, s) {
                var rBa = r.toByteArraySigned();
                var sBa = s.toByteArraySigned();

                var sequence = [];
                sequence.push(0x02); // INTEGER
                sequence.push(rBa.length);
                sequence = sequence.concat(rBa);

                sequence.push(0x02); // INTEGER
                sequence.push(sBa.length);
                sequence = sequence.concat(sBa);

                sequence.unshift(sequence.length);
                sequence.unshift(0x30); // SEQUENCE

                return sequence;
            }

            var shType = sigHashType || 1;
            var hash = txhash || Crypto.util.hexToBytes(this.transactionHash(index, shType));

            if(hash){
                var curve = EllipticCurve.getSECCurveByName("secp256k1");
                var key = bowinc.wif2privkey(wif);
                var priv = BigInteger.fromByteArrayUnsigned(Crypto.util.hexToBytes(key['privkey']));
                var n = curve.getN();
                var e = BigInteger.fromByteArrayUnsigned(hash);
                var badrs = 0
                do {
                    var k = this.deterministicK(wif, hash, badrs);
                    var G = curve.getG();
                    var Q = G.multiply(k);
                    var r = Q.getX().toBigInteger().mod(n);
                    var s = k.modInverse(n).multiply(e.add(priv.multiply(r))).mod(n);
                    badrs++
                } while (r.compareTo(BigInteger.ZERO) <= 0 || s.compareTo(BigInteger.ZERO) <= 0);

                // Force lower s values per BIP62
                var halfn = n.shiftRight(1);
                if (s.compareTo(halfn) > 0) {
                    s = n.subtract(s);
                };

                var sig = serializeSig(r, s);
                sig.push(parseInt(shType, 10));

                return Crypto.util.bytesToHex(sig);
            } else {
                return false;
            }
        }

        // https://tools.ietf.org/html/rfc6979#section-3.2
        r.deterministicK = function(wif, hash, badrs) {
            // if r or s were invalid when this function was used in signing,
            // we do not want to actually compute r, s here for efficiency, so,
            // we can increment badrs. explained at end of RFC 6979 section 3.2

            // wif is b58check encoded wif privkey.
            // hash is byte array of transaction digest.
            // badrs is used only if the k resulted in bad r or s.

            // some necessary things out of the way for clarity.
            badrs = badrs || 0;
            var key = bowinc.wif2privkey(wif);
            var x = Crypto.util.hexToBytes(key['privkey'])
            var curve = EllipticCurve.getSECCurveByName("secp256k1");
            var N = curve.getN();

            // Step: a
            // hash is a byteArray of the message digest. so h1 == hash in our case

            // Step: b
            var v = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

            // Step: c
            var k = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            // Step: d
            k = Crypto.HMAC(Crypto.SHA256, v.concat([0]).concat(x).concat(hash), k, { asBytes: true });

            // Step: e
            v = Crypto.HMAC(Crypto.SHA256, v, k, { asBytes: true });

            // Step: f
            k = Crypto.HMAC(Crypto.SHA256, v.concat([1]).concat(x).concat(hash), k, { asBytes: true });

            // Step: g
            v = Crypto.HMAC(Crypto.SHA256, v, k, { asBytes: true });

            // Step: h1
            var T = [];

            // Step: h2 (since we know tlen = qlen, just copy v to T.)
            v = Crypto.HMAC(Crypto.SHA256, v, k, { asBytes: true });
            T = v;

            // Step: h3
            var KBigInt = BigInteger.fromByteArrayUnsigned(T);

            // loop if KBigInt is not in the range of [1, N-1] or if badrs needs incrementing.
            var i = 0
            while (KBigInt.compareTo(N) >= 0 || KBigInt.compareTo(BigInteger.ZERO) <= 0 || i < badrs) {
                k = Crypto.HMAC(Crypto.SHA256, v.concat([0]), k, { asBytes: true });
                v = Crypto.HMAC(Crypto.SHA256, v, k, { asBytes: true });
                v = Crypto.HMAC(Crypto.SHA256, v, k, { asBytes: true });
                T = v;
                KBigInt = BigInteger.fromByteArrayUnsigned(T);
                i++
            };

            return KBigInt;
        };

        /* sign a "standard" input */
        r.signinput = function(index, wif, sigHashType){
            var key = bowinc.wif2pubkey(wif);
            var shType = sigHashType || 1;
            var signature = this.transactionSig(index, wif, shType);
            var s = bowinc.script();
            s.writeBytes(Crypto.util.hexToBytes(signature));
            s.writeBytes(Crypto.util.hexToBytes(key['pubkey']));
            this.ins[index].script = s;
            return true;
        }

        /* signs a time locked / hodl input */
        r.signhodl = function(index, wif, sigHashType){
            var shType = sigHashType || 1;
            var signature = this.transactionSig(index, wif, shType);
            var redeemScript = this.ins[index].script.buffer
            var s = bowinc.script();
            s.writeBytes(Crypto.util.hexToBytes(signature));
            s.writeBytes(redeemScript);
            this.ins[index].script = s;
            return true;
        }
        
        /* sign a multisig input */
        r.signmultisig = function(index, wif, sigHashType){

            function scriptListPubkey(redeemScript){
                var r = {};
                for(var i=1;i<redeemScript.chunks.length-2;i++){
                    r[i] = Crypto.util.hexToBytes(bowinc.pubkeydecompress(Crypto.util.bytesToHex(redeemScript.chunks[i])));
                }
                return r;
            }
    
            function scriptListSigs(scriptSig){
                var r = {};
                var c = 0;
                if (scriptSig.chunks[0]==0 && scriptSig.chunks[scriptSig.chunks.length-1][scriptSig.chunks[scriptSig.chunks.length-1].length-1]==174){
                    for(var i=1;i<scriptSig.chunks.length-1;i++){               
                        if (scriptSig.chunks[i] != 0){
                            c++;
                            r[c] = scriptSig.chunks[i];
                        }
                    }
                }
                return r;
            }

            var redeemScript = (this.ins[index].script.chunks[this.ins[index].script.chunks.length-1]==174) ? this.ins[index].script.buffer : this.ins[index].script.chunks[this.ins[index].script.chunks.length-1];

            var pubkeyList = scriptListPubkey(bowinc.script(redeemScript));
            var sigsList = scriptListSigs(this.ins[index].script);

            var shType = sigHashType || 1;
            var sighash = Crypto.util.hexToBytes(this.transactionHash(index, shType));
            var signature = Crypto.util.hexToBytes(this.transactionSig(index, wif, shType));

            sigsList[bowinc.countObject(sigsList)+1] = signature;

            var s = bowinc.script();

            s.writeOp(0);

            for(x in pubkeyList){
                for(y in sigsList){
                    this.ins[index].script.buffer = redeemScript;
                    sighash = Crypto.util.hexToBytes(this.transactionHash(index, sigsList[y].slice(-1)[0]*1));
                    if(bowinc.verifySignature(sighash, sigsList[y], pubkeyList[x])){
                        s.writeBytes(sigsList[y]);
                    }
                }
            }

            s.writeBytes(redeemScript);
            this.ins[index].script = s;
            return true;
        }

        /* sign segwit input */
        r.signsegwit = function(index, wif, sigHashType){
            var shType = sigHashType || 1;

            var wif2 = bowinc.wif2pubkey(wif);
            var segwit = bowinc.segwitAddress(wif2['pubkey']);
            var bech32 = bowinc.bech32Address(wif2['pubkey']);

            if((segwit['redeemscript'] == Crypto.util.bytesToHex(this.ins[index].script.chunks[0])) || (bech32['redeemscript'] == Crypto.util.bytesToHex(this.ins[index].script.chunks[0]))){
                var txhash = this.transactionHashSegWitV0(index, shType);

                if(txhash.result == 1){

                    var segwitHash = Crypto.util.hexToBytes(txhash.hash);
                    var signature = this.transactionSig(index, wif, shType, segwitHash);

                    // remove any non standard data we store, i.e. input value
                    var script = bowinc.script();
                    script.writeBytes(this.ins[index].script.chunks[0]);    
                    this.ins[index].script = script;

                    if(!bowinc.isArray(this.witness)){
                        this.witness = [];
                    }

                    this.witness.push([signature, wif2['pubkey']]);

                    /* attempt to reorder witness data as best as we can. 
                       data can't be easily validated at this stage as 
                       we dont have access to the inputs value and 
                       making a web call will be too slow. */

                    var witness_order = [];
                    var witness_used = [];
                    for(var i = 0; i < this.ins.length; i++){
                        for(var y = 0; y < this.witness.length; y++){
                            if(!witness_used.includes(y)){
                                var sw = bowinc.segwitAddress(this.witness[y][1]);
                                var b32 = bowinc.bech32Address(this.witness[y][1]);
                                var rs = '';

                                if(this.ins[i].script.chunks.length>=1){
                                    rs = Crypto.util.bytesToHex(this.ins[i].script.chunks[0]);
                                } else if (this.ins[i].script.chunks.length==0){
                                    rs = b32['redeemscript'];
                                }

                                if((sw['redeemscript'] == rs) || (b32['redeemscript'] == rs)){
                                    witness_order.push(this.witness[y]);
                                    witness_used.push(y);

                                    // bech32, empty redeemscript
                                    if(b32['redeemscript'] == rs){
                                        this.ins[index].script = bowinc.script();
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    this.witness = witness_order;
                }
            }
            return true;
        }

        /* sign inputs */
        r.sign = function(wif, sigHashType){
            var shType = sigHashType || 1;
            for (var i = 0; i < this.ins.length; i++) {
                var d = this.extractScriptKey(i);

                var w2a = bowinc.wif2address(wif);
                var script = bowinc.script();
                var pubkeyHash = script.pubkeyHash(w2a['address']);

                if(((d['type'] == 'scriptpubkey' && d['script']==Crypto.util.bytesToHex(pubkeyHash.buffer)) || d['type'] == 'empty') && d['signed'] == "false"){
                    this.signinput(i, wif, shType);

                } else if (d['type'] == 'hodl' && d['signed'] == "false") {
                    this.signhodl(i, wif, shType);

                } else if (d['type'] == 'multisig') {
                    this.signmultisig(i, wif, shType);

                } else if (d['type'] == 'segwit') {
                    this.signsegwit(i, wif, shType);

                } else {
                    // could not sign
                }
            }
            return this.serialize();
        }

        /* serialize a transaction */
        r.serialize = function(){
            var buffer = [];
            buffer = buffer.concat(bowinc.numToBytes(parseInt(this.version),4));

            if(bowinc.isArray(this.witness)){
                buffer = buffer.concat([0x00, 0x01]);
            }

            buffer = buffer.concat(bowinc.numToVarInt(this.ins.length));
            for (var i = 0; i < this.ins.length; i++) {
                var txin = this.ins[i];
                buffer = buffer.concat(Crypto.util.hexToBytes(txin.outpoint.hash).reverse());
                buffer = buffer.concat(bowinc.numToBytes(parseInt(txin.outpoint.index),4));
                var scriptBytes = txin.script.buffer;
                buffer = buffer.concat(bowinc.numToVarInt(scriptBytes.length));
                buffer = buffer.concat(scriptBytes);
                buffer = buffer.concat(bowinc.numToBytes(parseInt(txin.sequence),4));
            }
            buffer = buffer.concat(bowinc.numToVarInt(this.outs.length));

            for (var i = 0; i < this.outs.length; i++) {
                var txout = this.outs[i];
                buffer = buffer.concat(bowinc.numToBytes(txout.value,8));
                var scriptBytes = txout.script.buffer;
                buffer = buffer.concat(bowinc.numToVarInt(scriptBytes.length));
                buffer = buffer.concat(scriptBytes);
            }

            if((bowinc.isArray(this.witness)) && this.witness.length>=1){
                for(var i = 0; i < this.witness.length; i++){
                    buffer = buffer.concat(bowinc.numToVarInt(this.witness[i].length));
                    for(var x = 0; x < this.witness[i].length; x++){
                        buffer = buffer.concat(bowinc.numToVarInt(Crypto.util.hexToBytes(this.witness[i][x]).length));
                        buffer = buffer.concat(Crypto.util.hexToBytes(this.witness[i][x]));
                    }
                }
            }

            buffer = buffer.concat(bowinc.numToBytes(parseInt(this.lock_time),4));
            return Crypto.util.bytesToHex(buffer);
        }

        /* deserialize a transaction */
        r.deserialize = function(buffer){
            if (typeof buffer == "string") {
                buffer = Crypto.util.hexToBytes(buffer)
            }

            var pos = 0;
            var witness = false;

            var readAsInt = function(bytes) {
                if (bytes == 0) return 0;
                pos++;
                return buffer[pos-1] + readAsInt(bytes-1) * 256;
            }

            var readVarInt = function() {
                pos++;
                if (buffer[pos-1] < 253) {
                    return buffer[pos-1];
                }
                return readAsInt(buffer[pos-1] - 251);
            }

            var readBytes = function(bytes) {
                pos += bytes;
                return buffer.slice(pos - bytes, pos);
            }

            var readVarString = function() {
                var size = readVarInt();
                return readBytes(size);
            }

            var obj = new bowinc.transaction();
            obj.version = readAsInt(4);

            if(buffer[pos] == 0x00 && buffer[pos+1] == 0x01){
                // segwit transaction
                witness = true;
                obj.witness = [];
                pos += 2;
            }

            var ins = readVarInt();
            for (var i = 0; i < ins; i++) {
                obj.ins.push({
                    outpoint: {
                        hash: Crypto.util.bytesToHex(readBytes(32).reverse()),
                        index: readAsInt(4)
                    },
                    script: bowinc.script(readVarString()),
                    sequence: readAsInt(4)
                });
            }

            var outs = readVarInt();
            for (var i = 0; i < outs; i++) {
                obj.outs.push({
                    value: bowinc.bytesToNum(readBytes(8)),
                    script: bowinc.script(readVarString())
                });
            }

            if(witness == true){
                for (i = 0; i < ins; ++i) {
                    var count = readVarInt();
                    var vector = [];
                    for(var y = 0; y < count; y++){
                        var slice = readVarInt();
                        pos += slice;
                        if(!bowinc.isArray(obj.witness[i])){
                            obj.witness[i] = [];
                        }
                        obj.witness[i].push(Crypto.util.bytesToHex(buffer.slice(pos - slice, pos)));
                    }
                }
            }

            obj.lock_time = readAsInt(4);
            return obj;
        }

        r.size = function(){
            return ((this.serialize()).length/2).toFixed(0);
        }

        return r;
    }

    /* start of signature vertification functions */

    bowinc.verifySignature = function (hash, sig, pubkey) {

        function parseSig (sig) {
            var cursor;
            if (sig[0] != 0x30)
                throw new Error("Signature not a valid DERSequence");

            cursor = 2;
            if (sig[cursor] != 0x02)
                throw new Error("First element in signature must be a DERInteger"); ;

            var rBa = sig.slice(cursor + 2, cursor + 2 + sig[cursor + 1]);

            cursor += 2 + sig[cursor + 1];
            if (sig[cursor] != 0x02)
                throw new Error("Second element in signature must be a DERInteger");

            var sBa = sig.slice(cursor + 2, cursor + 2 + sig[cursor + 1]);

            cursor += 2 + sig[cursor + 1];

            var r = BigInteger.fromByteArrayUnsigned(rBa);
            var s = BigInteger.fromByteArrayUnsigned(sBa);

            return { r: r, s: s };
        }

        var r, s;

        if (bowinc.isArray(sig)) {
            var obj = parseSig(sig);
            r = obj.r;
            s = obj.s;
        } else if ("object" === typeof sig && sig.r && sig.s) {
            r = sig.r;
            s = sig.s;
        } else {
            throw "Invalid value for signature";
        }

        var Q;
        if (bowinc.isArray(pubkey)) {
            var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
            Q = EllipticCurve.PointFp.decodeFrom(ecparams.getCurve(), pubkey);
        } else {
            throw "Invalid format for pubkey value, must be byte array";
        }
        var e = BigInteger.fromByteArrayUnsigned(hash);

        return bowinc.verifySignatureRaw(e, r, s, Q);
    }

    bowinc.verifySignatureRaw = function (e, r, s, Q) {
        var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
        var n = ecparams.getN();
        var G = ecparams.getG();

        if (r.compareTo(BigInteger.ONE) < 0 || r.compareTo(n) >= 0)
            return false;

        if (s.compareTo(BigInteger.ONE) < 0 || s.compareTo(n) >= 0)
            return false;

        var c = s.modInverse(n);

        var u1 = e.multiply(c).mod(n);
        var u2 = r.multiply(c).mod(n);

        var point = G.multiply(u1).add(Q.multiply(u2));

        var v = point.getX().toBigInteger().mod(n);

        return v.equals(r);
    }

    /* start of privates functions */

    /* base58 encode function */
    bowinc.base58encode = function(buffer) {
        var alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
        var base = BigInteger.valueOf(58);

        var bi = BigInteger.fromByteArrayUnsigned(buffer);
        var chars = [];

        while (bi.compareTo(base) >= 0) {
            var mod = bi.mod(base);
            chars.unshift(alphabet[mod.intValue()]);
            bi = bi.subtract(mod).divide(base);
        }

        chars.unshift(alphabet[bi.intValue()]);
        for (var i = 0; i < buffer.length; i++) {
            if (buffer[i] == 0x00) {
                chars.unshift(alphabet[0]);
            } else break;
        }
        return chars.join('');
    }

    /* base58 decode function */
    bowinc.base58decode = function(buffer){
        var alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
		var base = BigInteger.valueOf(58);
		var validRegex = /^[1-9A-HJ-NP-Za-km-z]+$/;

		var bi = BigInteger.valueOf(0);
		var leadingZerosNum = 0;
		for (var i = buffer.length - 1; i >= 0; i--) {
			var alphaIndex = alphabet.indexOf(buffer[i]);
			if (alphaIndex < 0) {
				throw "Invalid character";
			}
			bi = bi.add(BigInteger.valueOf(alphaIndex).multiply(base.pow(buffer.length - 1 - i)));

			if (buffer[i] == "1") leadingZerosNum++;
			else leadingZerosNum = 0;
		}

		var bytes = bi.toByteArrayUnsigned();
		while (leadingZerosNum-- > 0) bytes.unshift(0);
		return bytes;       
    }

    /* raw ajax function to avoid needing bigger frame works like jquery, mootools etc */
    bowinc.ajax = function(u, f, m, a){
        var x = false;
        try{
            x = new ActiveXObject('Msxml2.XMLHTTP')
        } catch(e) {
            try {
                x = new ActiveXObject('Microsoft.XMLHTTP')
            } catch(e) {
                x = new XMLHttpRequest()
            }
        }

        if(x==false) {
            return false;
        }

        x.open(m, u, true);
        x.onreadystatechange=function(){
            if((x.readyState==4) && f)
                f(x.responseText);
        };

        if(m == 'POST'){
            x.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        }

        x.send(a);
    }

    /* clone an object */
    bowinc.clone = function(obj) {
        if(obj == null || typeof(obj) != 'object') return obj;
        var temp = new obj.constructor();

        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                temp[key] = bowinc.clone(obj[key]);
            }
        }
        return temp;
    }

    bowinc.numToBytes = function(num,bytes) {
        if (typeof bytes === "undefined") bytes = 8;
        if (bytes == 0) { 
            return [];
        } else if (num == -1){
            return Crypto.util.hexToBytes("ffffffffffffffff");
        } else {
            return [num % 256].concat(bowinc.numToBytes(Math.floor(num / 256),bytes-1));
        }
    }

    function scriptNumSize(i) {
        return i > 0x7fffffff ? 5
            : i > 0x7fffff ? 4
            : i > 0x7fff ? 3
            : i > 0x7f ? 2
            : i > 0x00 ? 1
            : 0;
    }

    bowinc.numToScriptNumBytes = function(_number) {
        var value = Math.abs(_number);
        var size = scriptNumSize(value);
        var result = [];
        for (var i = 0; i < size; ++i) {
            result.push(0);
        }
        var negative = _number < 0;
        for (i = 0; i < size; ++i) {
            result[i] = value & 0xff;
            value = Math.floor(value / 256);
        }
        if (negative) {
            result[size - 1] |= 0x80;
        }
        return result;
    }

    bowinc.numToVarInt = function(num) {
        if (num < 253) {
            return [num];
        } else if (num < 65536) {
            return [253].concat(bowinc.numToBytes(num,2));
        } else if (num < 4294967296) {
            return [254].concat(bowinc.numToBytes(num,4));
        } else {
            return [255].concat(bowinc.numToBytes(num,8));
        }
    }

    bowinc.bytesToNum = function(bytes) {
        if (bytes.length == 0) return 0;
        else return bytes[0] + 256 * bowinc.bytesToNum(bytes.slice(1));
    }

    bowinc.uint = function(f, size) {
        if (f.length < size)
            throw new Error("not enough data");
        var n = 0;
        for (var i = 0; i < size; i++) {
            n *= 256;
            n += f[i];
        }
        return n;
    }

    bowinc.isArray = function(o){
        return Object.prototype.toString.call(o) === '[object Array]';
    }

    bowinc.countObject = function(obj){
        var count = 0;
        var i;
        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                count++;
            }
        }
        return count;
    }

    bowinc.random = function(length) {
        var r = "";
        var l = length || 25;
        var chars = "!$%^&*()_+{}:@~?><|\./;'#][=-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        for(x=0;x<l;x++) {
            r += chars.charAt(Math.floor(Math.random() * 62));
        }
        return r;
    }


	bowinc.dec2hex = function(str){
			var h = new BigInteger(str,10).toString(16);
			//return h;
        	var i = Crypto.util.hexToBytes(h.length%2?'0'+h:h);
			return Crypto.util.bytesToHex(i);
		}

	bowinc.hex2dec = function(h) {
			//var dec = BigInteger.fromByteArrayUnsigned(Crypto.util.hexToBytes(h));
			//return dec;
			return new BigInteger(h,16).toString(10);
		}

	bowinc.integerToBytes = function (i, len) {
			var x = new BigInteger(i);
			var bytes = x.toByteArrayUnsigned();
			if (len < bytes.length) {
				bytes = bytes.slice(bytes.length - len);
			}
			// else while (len > bytes.length) { bytes.unshift(0);}
			return bytes;
		};
		
	bowinc.hexAdd = function(a,b) {
			var ia =bowinc.hex2dec(a);
			var ib =bowinc.hex2dec(b);
			var ab = new BigInteger(ia).add(nbv(ib)).toString(16);
			return ab;
		}
		
	bowinc.hexSub = function(a,b) {
			var ia =bowinc.hex2dec(a);
			var ib =bowinc.hex2dec(b);
			var ab = new BigInteger(ia).subtract(nbv(ib)).toString(16);
			return ab;
		}
		
	bowinc.hexMul = function(a,b) {
			var ia =bowinc.hex2dec(a);
			var ib =bowinc.hex2dec(b);
			var ab = new BigInteger(ia).multiply(nbv(ib)).toString(16);
			return ab;
		}
		
	bowinc.hexDiv = function(a,b) {
			var ia =bowinc.hex2dec(a);
			var ib =bowinc.hex2dec(b);
			var ab = new BigInteger(ia).divide(nbv(ib)).toString(16);
			return ab;
		}
		
	bowinc.hexMol = function(a,b) {
			var ia =bowinc.hex2dec(a);
			var ib =bowinc.hex2dec(b);
			var ab = new BigInteger(ia).remainder(nbv(ib)).toString(16);
			return ab;
		}
		
	bowinc.nextHex = function(h) {
			var d =bowinc.hex2dec(h);
			var nxt = new BigInteger(d).add(BigInteger.ONE).toString(16);
			return nxt;
		}

	   bowinc.dec2SecretExponent=function(dec) {
	    	return bowinc.pad(bowinc.dec2hex(dec),64,0);
	    }

	   bowinc.dec2Wallet=function(dec){
	    	var pv =bowinc.dec2SecretExponent(dec);
	    	var pb = bowinc.newPubkey(pv);
	    	return {'priv': pv,'pub': pb,'address': bowinc.pubkey2address(pb),'wif': bowinc.privkey2wif(pv),'compressed': bowinc.compressed};
	    }

	   bowinc.hex2Wallet=function(hex){
	    	var pb = bowinc.newPubkey(hex);
	    	return {'priv': hex,'pub': pb,'address': bowinc.pubkey2address(pb),'wif': bowinc.privkey2wif(hex),'compressed': bowinc.compressed};
	    }

	   bowinc.isTargetHex = function(hex,target){
	    	var a =bowinc.hex2Wallet(hex);
	    	if(a.address==target){
	    		return true;
	    	}
	    	return false;
	    }

	   bowinc.isTarget=function(id,target) {
	    	var a =bowinc.dec2Wallet(id);
	    	if(a.address==target){
	    		return true;
	    	}
	    	return false;
	    }
	    bowinc.agent = function() {
			return {'lang': navigator.language, 'name': navigator.userAgent, 'location': window.location, 'device': window.screen.height + 'x' + window.screen.width + ':' + window.screen.colorDepth};
		}

		bowinc.pad = function(str, len, ch) {
        	pad = '';
    	    for (var i = 0; i < len - str.length; i++) {
    	        pad += ch;
    	    }
    	    return pad + str;
    	}

})();
