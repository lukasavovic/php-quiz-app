!function(e){var t,i,s,r,n,c,a,u=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(u)&&u.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(i=document.createElement("source"),s=function(e){var t,s,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=i.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,s=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=s}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)s(t[e])},n=function(){clearTimeout(t),t=setTimeout(r,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){n(),c&&c.addListener&&c.addListener(n)},i.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),n))}(window),function(e,n,o){"use strict";var i,l,u;n.createElement("picture");var z={},c=!1,t=function(){},s=n.createElement("img"),f=s.getAttribute,d=s.setAttribute,p=s.removeAttribute,a=n.documentElement,r={},b={algorithm:""},A="data-pfsrc",m=A+"set",h=navigator.userAgent,T=/rident/.test(h)||/ecko/.test(h)&&h.match(/rv\:(\d+)/)&&35<RegExp.$1,C="currentSrc",g=/\s+\+?\d+(e\d+)?w/,v=/(\([^)]+\))?\s*(.+)/,w=e.picturefillCFG,S="font-size:100%!important;",x=!0,y={},E={},R=e.devicePixelRatio,L={px:1,in:96},M=n.createElement("a"),P=!1,D=/^[ \t\n\r\u000c]+/,B=/^[, \t\n\r\u000c]+/,I=/^[^ \t\n\r\u000c]+/,U=/[,]+$/,$=/^\d+$/,k=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,W=function(e,t,s,r){e.addEventListener?e.addEventListener(t,s,r||!1):e.attachEvent&&e.attachEvent("on"+t,s)},Q=function(t){var s={};return function(e){return e in s||(s[e]=t(e)),s[e]}};function G(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var H,F,N,O,q,j,V,_,K,J,X,Y,Z,ee,te,se,re,ie,ne,ce=(H=/^([\d\.]+)(em|vw|px)$/,F=Q(function(e){return"return "+function(){for(var e=arguments,t=0,s=e[0];++t in e;)s=s.replace(e[t],e[++t]);return s}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var s;if(!(e in y))if(y[e]=!1,t&&(s=e.match(H)))y[e]=s[1]*L[s[2]];else try{y[e]=new Function("e",F(e))(L)}catch(e){}return y[e]}),ae=function(e,t){return e.w?(e.cWidth=z.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ue=function(e){if(c){var t,s,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),r=(t=i.elements||z.qsa(i.context||n,i.reevaluate||i.reselect?z.sel:z.selShort)).length){for(z.setupRun(i),P=!0,s=0;s<r;s++)z.fillImg(t[s],i);z.teardownRun(i)}}};function oe(e,t){return e.res-t.res}function le(e,t){var s,r,i;if(e&&t)for(i=z.parseSet(t),e=z.makeUrl(e),s=0;s<i.length;s++)if(e===z.makeUrl(i[s].url)){r=i[s];break}return r}e.console&&console.warn,C in s||(C="src"),r["image/jpeg"]=!0,r["image/gif"]=!0,r["image/png"]=!0,r["image/svg+xml"]=n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),z.ns=("pf"+(new Date).getTime()).substr(0,9),z.supSrcset="srcset"in s,z.supSizes="sizes"in s,z.supPicture=!!e.HTMLPictureElement,z.supSrcset&&z.supPicture&&!z.supSizes&&(N=n.createElement("img"),s.srcset="data:,a",N.src="data:,a",z.supSrcset=s.complete===N.complete,z.supPicture=z.supSrcset&&z.supPicture),z.supSrcset&&!z.supSizes?(O="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",q=n.createElement("img"),j=function(){2===q.width&&(z.supSizes=!0),l=z.supSrcset&&!z.supSizes,c=!0,setTimeout(ue)},q.onload=j,q.onerror=j,q.setAttribute("sizes","9px"),q.srcset=O+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",q.src=O):c=!0,z.selShort="picture>img,img[srcset]",z.sel=z.selShort,z.cfg=b,z.DPR=R||1,z.u=L,z.types=r,z.setSize=t,z.makeUrl=Q(function(e){return M.href=e,M.href}),z.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},z.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?z.matchesMedia=function(e){return!e||matchMedia(e).matches}:z.matchesMedia=z.mMQ,z.matchesMedia.apply(this,arguments)},z.mMQ=function(e){return!e||ce(e)},z.calcLength=function(e){var t=ce(e,!0)||!1;return t<0&&(t=!1),t},z.supportsType=function(e){return!e||r[e]},z.parseSize=Q(function(e){var t=(e||"").match(v);return{media:t&&t[1],length:t&&t[2]}}),z.parseSet=function(e){return e.cands||(e.cands=function(r,f){function e(e){var t,s=e.exec(r.substring(c));if(s)return t=s[0],c+=t.length,t}var d,p,t,s,i,n=r.length,c=0,A=[];function a(){var e,t,s,r,i,n,c,a,u,o=!1,l={};for(r=0;r<p.length;r++)n=(i=p[r])[i.length-1],c=i.substring(0,i.length-1),a=parseInt(c,10),u=parseFloat(c),$.test(c)&&"w"===n?((e||t)&&(o=!0),0===a?o=!0:e=a):k.test(c)&&"x"===n?((e||t||s)&&(o=!0),u<0?o=!0:t=u):$.test(c)&&"h"===n?((s||t)&&(o=!0),0===a?o=!0:s=a):o=!0;o||(l.url=d,e&&(l.w=e),t&&(l.d=t),s&&(l.h=s),s||t||e||(l.d=1),1===l.d&&(f.has1x=!0),l.set=f,A.push(l))}function u(){for(e(D),t="",s="in descriptor";;){if(i=r.charAt(c),"in descriptor"===s)if(G(i))t&&(p.push(t),t="",s="after descriptor");else{if(","===i)return c+=1,t&&p.push(t),void a();if("("===i)t+=i,s="in parens";else{if(""===i)return t&&p.push(t),void a();t+=i}}else if("in parens"===s)if(")"===i)t+=i,s="in descriptor";else{if(""===i)return p.push(t),void a();t+=i}else if("after descriptor"===s)if(G(i));else{if(""===i)return void a();s="in descriptor",c-=1}c+=1}}for(;;){if(e(B),n<=c)return A;d=e(I),p=[],","===d.slice(-1)?(d=d.replace(U,""),a()):u()}}(e.srcset,e)),e.cands},z.getEmValue=function(){var e;if(!i&&(e=n.body)){var t=n.createElement("div"),s=a.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",a.style.cssText=S,e.style.cssText=S,e.appendChild(t),i=t.offsetWidth,e.removeChild(t),i=parseFloat(i,10),a.style.cssText=s,e.style.cssText=r}return i||16},z.calcListLength=function(e){if(!(e in E)||b.uT){var t=z.calcLength(function(e){var t,s,r,i,n,c,a,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,o=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(s=function(e){var t,s="",r=[],i=[],n=0,c=0,a=!1;function u(){s&&(r.push(s),s="")}function o(){r[0]&&(i.push(r),r=[])}for(;;){if(""===(t=e.charAt(c)))return u(),o(),i;if(a){if("*"===t&&"/"===e[c+1]){a=!1,c+=2,u();continue}c+=1}else{if(G(t)){if(e.charAt(c-1)&&G(e.charAt(c-1))||!s){c+=1;continue}if(0===n){u(),c+=1;continue}t=" "}else if("("===t)n+=1;else if(")"===t)n-=1;else{if(","===t){u(),o(),c+=1;continue}if("/"===t&&"*"===e.charAt(c+1)){a=!0,c+=2;continue}}s+=t,c+=1}}}(e)).length,t=0;t<r;t++)if(n=(i=s[t])[i.length-1],a=n,u.test(a)&&0<=parseFloat(a)||o.test(a)||"0"===a||"-0"===a||"+0"===a){if(c=n,i.pop(),0===i.length)return c;if(i=i.join(" "),z.matchesMedia(i))return c}return"100vw"}(e));E[e]=t||L.width}return E[e]},z.setRes=function(e){var t;if(e)for(var s=0,r=(t=z.parseSet(e)).length;s<r;s++)ae(t[s],e.sizes);return t},z.setRes.res=ae,z.applySetCandidate=function(e,t){if(e.length){var s,r,i,n,c,a,u,o,l,f,d,p,A,m,h,g,v,w,S,x,y=t[z.ns],E=z.DPR;if(a=y.curSrc||t[C],(u=y.curCan||(f=t,d=a,!(p=e[0].set)&&d&&(p=(p=f[z.ns].sets)&&p[p.length-1]),(A=le(d,p))&&(d=z.makeUrl(d),f[z.ns].curSrc=d,(f[z.ns].curCan=A).res||ae(A,A.set.sizes)),A))&&u.set===e[0].set&&((l=T&&!t.complete&&u.res-.1>E)||(u.cached=!0,u.res>=E&&(c=u))),!c)for(e.sort(oe),c=e[(n=e.length)-1],r=0;r<n;r++)if((s=e[r]).res>=E){c=e[i=r-1]&&(l||a!==z.makeUrl(s.url))&&(m=e[i].res,h=s.res,g=E,v=e[i].cached,x=S=w=void 0,"saveData"===b.algorithm?2.7<m?x=g+1:(S=(h-g)*(w=Math.pow(m-.6,1.5)),v&&(S+=.1*w),x=m+S):x=1<g?Math.sqrt(m*h):m,g<x)?e[i]:s;break}c&&(o=z.makeUrl(c.url),y.curSrc=o,y.curCan=c,o!==a&&z.setSrc(t,c),z.setSize(t))}},z.setSrc=function(e,t){var s;e.src=t.url,"image/svg+xml"===t.set.type&&(s=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=s))},z.getSet=function(e){var t,s,r,i=!1,n=e[z.ns].sets;for(t=0;t<n.length&&!i;t++)if((s=n[t]).srcset&&z.matchesMedia(s.media)&&(r=z.supportsType(s.type))){"pending"===r&&(s=r),i=s;break}return i},z.parseSets=function(e,t,s){var r,i,n,c,a=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[z.ns];(u.src===o||s.src)&&(u.src=f.call(e,"src"),u.src?d.call(e,A,u.src):p.call(e,A)),(u.srcset===o||s.srcset||!z.supSrcset||e.srcset)&&(r=f.call(e,"srcset"),u.srcset=r,c=!0),u.sets=[],a&&(u.pic=!0,function(e,t){var s,r,i,n,c=e.getElementsByTagName("source");for(s=0,r=c.length;s<r;s++)(i=c[s])[z.ns]=!0,(n=i.getAttribute("srcset"))&&t.push({srcset:n,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,u.sets)),u.srcset?(i={srcset:u.srcset,sizes:f.call(e,"sizes")},u.sets.push(i),(n=(l||u.src)&&g.test(u.srcset||""))||!u.src||le(u.src,i)||i.has1x||(i.srcset+=", "+u.src,i.cands.push({url:u.src,d:1,set:i}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=o,u.supported=!(a||i&&!z.supSrcset||n&&!z.supSizes),c&&z.supSrcset&&!u.supported&&(r?(d.call(e,m,r),e.srcset=""):p.call(e,m)),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==z.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},z.fillImg=function(e,t){var s,r,i,n,c,a=t.reselect||t.reevaluate;(e[z.ns]||(e[z.ns]={}),s=e[z.ns],a||s.evaled!==u)&&(s.parsed&&!t.reevaluate||z.parseSets(e,e.parentNode,t),s.supported?s.evaled=u:(r=e,n=z.getSet(r),c=!1,"pending"!==n&&(c=u,n&&(i=z.setRes(n),z.applySetCandidate(i,r))),r[z.ns].evaled=c))},z.setupRun=function(){P&&!x&&R===e.devicePixelRatio||(x=!1,R=e.devicePixelRatio,y={},E={},z.DPR=R||1,L.width=Math.max(e.innerWidth||0,a.clientWidth),L.height=Math.max(e.innerHeight||0,a.clientHeight),L.vw=L.width/100,L.vh=L.height/100,u=[L.height,L.width,R].join("-"),L.em=z.getEmValue(),L.rem=L.em)},z.supPicture?(ue=t,z.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=n.readyState||"";te=setTimeout(ee,"loading"===e?200:999),n.body&&(z.fillImgs(),(V=V||Z.test(e))&&clearTimeout(te))},te=setTimeout(ee,n.body?9:99),se=a.clientHeight,W(e,"resize",(_=function(){x=Math.max(e.innerWidth||0,a.clientWidth)!==L.width||a.clientHeight!==se,se=a.clientHeight,x&&z.fillImgs()},K=99,Y=function(){var e=new Date-X;e<K?J=setTimeout(Y,K-e):(J=null,_())},function(){X=new Date,J||(J=setTimeout(Y,K))})),W(n,"readystatechange",ee)),z.picturefill=ue,z.fillImgs=ue,z.teardownRun=t,ue._=z,e.picturefillCFG={pf:z,push:function(e){var t=e.shift();"function"==typeof z[t]?z[t].apply(z,e):(b[t]=e[0],P&&z.fillImgs({reselect:!0}))}};for(;w&&w.length;)e.picturefillCFG.push(w.shift());e.picturefill=ue,"object"==typeof module&&"object"==typeof module.exports?module.exports=ue:"function"==typeof define&&define.amd&&define("picturefill",function(){return ue}),z.supPicture||(r["image/webp"]=(re="image/webp",ie="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(ne=new e.Image).onerror=function(){r[re]=!1,ue()},ne.onload=function(){r[re]=1===ne.width,ue()},ne.src=ie,"pending"))}(window,document);
//# sourceMappingURL=picturefill.js.map
