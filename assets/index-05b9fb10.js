import{W as A,r as S,j as R,L as z,S as ee,B as te,K as ne,p as re,N as oe}from"./index-1660292c.js";import{I as se}from"./index-e908a679.js";import{m as ie}from"./index-22d8b14b.js";var le=Object.defineProperty,L=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,D=(h,s,a)=>s in h?le(h,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):h[s]=a,b=(h,s)=>{for(var a in s||(s={}))U.call(s,a)&&D(h,a,s[a]);if(L)for(var a of L(s))k.call(s,a)&&D(h,a,s[a]);return h},F=(h,s)=>{var a={};for(var i in h)U.call(h,i)&&s.indexOf(i)<0&&(a[i]=h[i]);if(h!=null&&L)for(var i of L(h))s.indexOf(i)<0&&k.call(h,i)&&(a[i]=h[i]);return a};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var P;(h=>{const s=class{constructor(e,t,n,r){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<s.MIN_VERSION||e>s.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let o=[];for(let l=0;l<this.size;l++)o.push(!1);for(let l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(n);if(this.drawCodewords(c),r==-1){let l=1e9;for(let g=0;g<8;g++){this.applyMask(g),this.drawFormatBits(g);const d=this.getPenaltyScore();d<l&&(r=g,l=d),this.applyMask(g)}}u(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(e,t){const n=h.QrSegment.makeSegments(e);return s.encodeSegments(n,t)}static encodeBinary(e,t){const n=h.QrSegment.makeBytes(e);return s.encodeSegments([n],t)}static encodeSegments(e,t,n=1,r=40,o=-1,c=!0){if(!(s.MIN_VERSION<=n&&n<=r&&r<=s.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let l,g;for(l=n;;l++){const m=s.getNumDataCodewords(l,t)*8,p=C.getTotalBits(e,l);if(p<=m){g=p;break}if(l>=r)throw new RangeError("Data too long")}for(const m of[s.Ecc.MEDIUM,s.Ecc.QUARTILE,s.Ecc.HIGH])c&&g<=s.getNumDataCodewords(l,m)*8&&(t=m);let d=[];for(const m of e){i(m.mode.modeBits,4,d),i(m.numChars,m.mode.numCharCountBits(l),d);for(const p of m.getData())d.push(p)}u(d.length==g);const _=s.getNumDataCodewords(l,t)*8;u(d.length<=_),i(0,Math.min(4,_-d.length),d),i(0,(8-d.length%8)%8,d),u(d.length%8==0);for(let m=236;d.length<_;m^=253)i(m,8,d);let M=[];for(;M.length*8<d.length;)M.push(0);return d.forEach((m,p)=>M[p>>>3]|=m<<7-(p&7)),new s(l,t,M,o)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n==0&&r==0||n==0&&r==t-1||n==t-1&&r==0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let o=0;o<10;o++)n=n<<1^(n>>>9)*1335;const r=(t<<10|n)^21522;u(r>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,E(r,o));this.setFunctionModule(8,7,E(r,6)),this.setFunctionModule(8,8,E(r,7)),this.setFunctionModule(7,8,E(r,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,E(r,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,E(r,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,E(r,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;u(t>>>18==0);for(let n=0;n<18;n++){const r=E(t,n),o=this.size-11+n%3,c=Math.floor(n/3);this.setFunctionModule(o,c,r),this.setFunctionModule(c,o,r)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(n)),c=e+r,l=t+n;0<=c&&c<this.size&&0<=l&&l<this.size&&this.setFunctionModule(c,l,o!=2&&o!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,n=this.errorCorrectionLevel;if(e.length!=s.getNumDataCodewords(t,n))throw new RangeError("Invalid argument");const r=s.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t],o=s.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t],c=Math.floor(s.getNumRawDataModules(t)/8),l=r-c%r,g=Math.floor(c/r);let d=[];const _=s.reedSolomonComputeDivisor(o);for(let m=0,p=0;m<r;m++){let w=e.slice(p,p+g-o+(m<l?0:1));p+=w.length;const N=s.reedSolomonComputeRemainder(w,_);m<l&&w.push(0),d.push(w.concat(N))}let M=[];for(let m=0;m<d[0].length;m++)d.forEach((p,w)=>{(m!=g-o||w>=l)&&M.push(p[m])});return u(M.length==c),M}drawCodewords(e){if(e.length!=Math.floor(s.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(let r=0;r<this.size;r++)for(let o=0;o<2;o++){const c=n-o,g=(n+1&2)==0?this.size-1-r:r;!this.isFunction[g][c]&&t<e.length*8&&(this.modules[g][c]=E(e[t>>>3],7-(t&7)),t++)}}u(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let c=!1,l=0,g=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[o][d]==c?(l++,l==5?e+=s.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,g),c||(e+=this.finderPenaltyCountPatterns(g)*s.PENALTY_N3),c=this.modules[o][d],l=1);e+=this.finderPenaltyTerminateAndCount(c,l,g)*s.PENALTY_N3}for(let o=0;o<this.size;o++){let c=!1,l=0,g=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[d][o]==c?(l++,l==5?e+=s.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,g),c||(e+=this.finderPenaltyCountPatterns(g)*s.PENALTY_N3),c=this.modules[d][o],l=1);e+=this.finderPenaltyTerminateAndCount(c,l,g)*s.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let c=0;c<this.size-1;c++){const l=this.modules[o][c];l==this.modules[o][c+1]&&l==this.modules[o+1][c]&&l==this.modules[o+1][c+1]&&(e+=s.PENALTY_N2)}let t=0;for(const o of this.modules)t=o.reduce((c,l)=>c+(l?1:0),t);const n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return u(0<=r&&r<=9),e+=r*s.PENALTY_N4,u(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<s.MIN_VERSION||e>s.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return u(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(s.getNumRawDataModules(e)/8)-s.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*s.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let r=0;r<e-1;r++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let o=0;o<t.length;o++)t[o]=s.reedSolomonMultiply(t[o],n),o+1<t.length&&(t[o]^=t[o+1]);n=s.reedSolomonMultiply(n,2)}return t}static reedSolomonComputeRemainder(e,t){let n=t.map(r=>0);for(const r of e){const o=r^n.shift();n.push(0),t.forEach((c,l)=>n[l]^=s.reedSolomonMultiply(c,o))}return n}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return u(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];u(t<=this.size*3);const n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let a=s;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],h.QrCode=a;function i(e,t,n){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function E(e,t){return(e>>>t&1)!=0}function u(e){if(!e)throw new Error("Assertion error")}const f=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(e){let t=[];for(const n of e)i(n,8,t);return new f(f.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!f.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const r=Math.min(e.length-n,3);i(parseInt(e.substr(n,r),10),r*3+1,t),n+=r}return new f(f.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!f.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],n;for(n=0;n+2<=e.length;n+=2){let r=f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n))*45;r+=f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n+1)),i(r,11,t)}return n<e.length&&i(f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n)),6,t),new f(f.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:f.isNumeric(e)?[f.makeNumeric(e)]:f.isAlphanumeric(e)?[f.makeAlphanumeric(e)]:[f.makeBytes(f.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<1<<7)i(e,8,t);else if(e<1<<14)i(2,2,t),i(e,14,t);else if(e<1e6)i(6,3,t),i(e,21,t);else throw new RangeError("ECI assignment value out of range");return new f(f.Mode.ECI,0,t)}static isNumeric(e){return f.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return f.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const r of e){const o=r.mode.numCharCountBits(t);if(r.numChars>=1<<o)return 1/0;n+=4+o+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)!="%"?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}};let C=f;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",h.QrSegment=C})(P||(P={}));(h=>{(s=>{const a=class{constructor(E,u){this.ordinal=E,this.formatBits=u}};let i=a;i.LOW=new a(0,1),i.MEDIUM=new a(1,0),i.QUARTILE=new a(2,3),i.HIGH=new a(3,2),s.Ecc=i})(h.QrCode||(h.QrCode={}))})(P||(P={}));(h=>{(s=>{const a=class{constructor(E,u){this.modeBits=E,this.numBitsCharCount=u}numCharCountBits(E){return this.numBitsCharCount[Math.floor((E+7)/17)]}};let i=a;i.NUMERIC=new a(1,[10,12,14]),i.ALPHANUMERIC=new a(2,[9,11,13]),i.BYTE=new a(4,[8,16,16]),i.KANJI=new a(8,[8,10,12]),i.ECI=new a(7,[0,0,0]),s.Mode=i})(h.QrSegment||(h.QrSegment={}))})(P||(P={}));var v=P;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Q={L:v.QrCode.Ecc.LOW,M:v.QrCode.Ecc.MEDIUM,Q:v.QrCode.Ecc.QUARTILE,H:v.QrCode.Ecc.HIGH},j=128,H="L",$="#FFFFFF",Y="#000000",G=!1,O=4,ae=.1;function X(h,s=0){const a=[];return h.forEach(function(i,E){let u=null;i.forEach(function(f,C){if(!f&&u!==null){a.push(`M${u+s} ${E+s}h${C-u}v1H${u+s}z`),u=null;return}if(C===i.length-1){if(!f)return;u===null?a.push(`M${C+s},${E+s} h1v1H${C+s}z`):a.push(`M${u+s},${E+s} h${C+1-u}v1H${u+s}z`);return}f&&u===null&&(u=C)})}),a.join("")}function K(h,s){return h.slice().map((a,i)=>i<s.y||i>=s.y+s.h?a:a.map((E,u)=>u<s.x||u>=s.x+s.w?E:!1))}function V(h,s,a,i){if(i==null)return null;const E=a?O:0,u=h.length+E*2,f=Math.floor(s*ae),C=u/s,e=(i.width||f)*C,t=(i.height||f)*C,n=i.x==null?h.length/2-e/2:i.x*C,r=i.y==null?h.length/2-t/2:i.y*C;let o=null;if(i.excavate){let c=Math.floor(n),l=Math.floor(r),g=Math.ceil(e+n-c),d=Math.ceil(t+r-l);o={x:c,y:l,w:g,h:d}}return{x:n,y:r,h:t,w:e,excavation:o}}var ce=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function he(h){const s=h,{value:a,size:i=j,level:E=H,bgColor:u=$,fgColor:f=Y,includeMargin:C=G,style:e,imageSettings:t}=s,n=F(s,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),r=t==null?void 0:t.src,o=S.useRef(null),c=S.useRef(null),[l,g]=S.useState(!1);S.useEffect(()=>{if(o.current!=null){const M=o.current,m=M.getContext("2d");if(!m)return;let p=v.QrCode.encodeText(a,Q[E]).getModules();const w=C?O:0,N=p.length+w*2,y=V(p,i,C,t),I=c.current,B=y!=null&&I!==null&&I.complete&&I.naturalHeight!==0&&I.naturalWidth!==0;B&&y.excavation!=null&&(p=K(p,y.excavation));const x=window.devicePixelRatio||1;M.height=M.width=i*x;const T=i/N*x;m.scale(T,T),m.fillStyle=u,m.fillRect(0,0,N,N),m.fillStyle=f,ce?m.fill(new Path2D(X(p,w))):p.forEach(function(W,Z){W.forEach(function(J,q){J&&m.fillRect(q+w,Z+w,1,1)})}),B&&m.drawImage(I,y.x+w,y.y+w,y.w,y.h)}}),S.useEffect(()=>{g(!1)},[r]);const d=b({height:i,width:i},e);let _=null;return r!=null&&(_=A.createElement("img",{src:r,key:r,style:{display:"none"},onLoad:()=>{g(!0)},ref:c})),A.createElement(A.Fragment,null,A.createElement("canvas",b({style:d,height:i,width:i,ref:o},n)),_)}function ue(h){const s=h,{value:a,size:i=j,level:E=H,bgColor:u=$,fgColor:f=Y,includeMargin:C=G,imageSettings:e}=s,t=F(s,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let n=v.QrCode.encodeText(a,Q[E]).getModules();const r=C?O:0,o=n.length+r*2,c=V(n,i,C,e);let l=null;e!=null&&c!=null&&(c.excavation!=null&&(n=K(n,c.excavation)),l=A.createElement("image",{xlinkHref:e.src,height:c.h,width:c.w,x:c.x+r,y:c.y+r,preserveAspectRatio:"none"}));const g=X(n,r);return A.createElement("svg",b({height:i,width:i,viewBox:`0 0 ${o} ${o}`},t),A.createElement("path",{fill:u,d:`M0,0 h${o}v${o}H0z`,shapeRendering:"crispEdges"}),A.createElement("path",{fill:f,d:g,shapeRendering:"crispEdges"}),l)}var fe=h=>{const s=h,{renderAs:a}=s,i=F(s,["renderAs"]);return a==="svg"?A.createElement(ue,b({},i)):A.createElement(he,b({},i))};const{Content:de}=z,{Title:me,Text:ge}=re,we=()=>{const h="0x88888A8b367cCE8C82C451f37511905c3028ed49",s={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"calc(100vh - 64px)",padding:"40px",backgroundColor:"#F5F5F5"},a={marginTop:"20px",marginBottom:"20px",padding:"30px",backgroundColor:"#fff",borderRadius:"15px",boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.1)"},i={marginBottom:"30px",color:"#333"},E={marginLeft:"10px",borderRadius:"50%",verticalAlign:"middle",position:"relative",top:"-4px"},u={backgroundColor:"#FFA726",borderColor:"#FFA726",color:"#fff"},f=()=>{oe(h),ie.success("地址已复制到剪贴板")};return R.jsx(z,{children:R.jsxs(de,{style:s,children:[R.jsxs(me,{level:3,style:i,children:["捐赠作者一杯咖啡",R.jsx(se,{src:"/coffee.jpg",width:30,preview:!1,style:E})]}),R.jsx("div",{style:i,children:R.jsxs(ee,{children:[R.jsxs(ge,{children:[R.jsx("strong",{children:"EVM地址："}),h]}),R.jsx(te,{icon:R.jsx(ne,{}),style:u,onClick:f,children:"复制"})]})}),R.jsx("div",{style:a,children:R.jsx(fe,{value:h})})]})})};export{we as default};
