
          window.__NEXT_REGISTER_PAGE('/release-notes', function() {
            var comp = module.exports=webpackJsonp([0],[,function(t,e,r){"use strict";function n(t,e,r,n){function o(t,n,o){var a;return n=n||(o?0:null),e&&t.type!==e||(a=r(t,n,o||null)),t.children&&!1!==a?i(t.children,t):a}function i(t,e){for(var r,i=n?-1:1,a=t.length,s=(n?a:-1)+i;s>-1&&s<a;){if((r=t[s])&&!1===o(r,s,e))return!1;s+=i}return!0}"function"==typeof e&&(n=r,r=e,e=null),o(t)}t.exports=n},,,,function(t,e,r){"use strict";function n(t,e){function r(t){function e(t,e,r){function n(t){var n,i=e.messages;if(t&&-1===i.indexOf(t))try{e.fail(t)}catch(t){}for(;o<i.length;)n=i[o],n.ruleId=s,n.source=a,n.fatal=u,o++;r()}var o=e.messages.length;c(t,e,i,n)}var r=o(s,t),n=r[0],i=r[1],u=2===n;return n?e:void 0}var n=t.split(":"),a=n[0],s=n[1],c=i(e);return s||(s=a,a=null),r.displayName=t,r}function o(t,e){var r,n;if(r="boolean"==typeof e?[e]:null==e?[1]:"object"!=typeof e||"number"!=typeof e[0]&&"boolean"!=typeof e[0]&&"string"!=typeof e[0]?[1,e]:e.concat(),n=r[0],"boolean"==typeof n?n=n?1:0:"string"==typeof n&&("off"===n?n=0:"on"===n||"warn"===n?n=1:"error"===n?n=2:(n=1,r=[n,r])),n<0||n>2)throw new Error("Invalid severity `"+n+"` for `"+t+"`, expected 0, 1, or 2");return r[0]=n,r}var i=r(451);t.exports=n},function(t,e,r){"use strict";function n(t){var e=o(o(t).position),r=o(e.start),n=o(e.end);return!(r.line&&r.column&&n.line&&n.column)}function o(t){return t&&"object"==typeof t?t:{}}t.exports=n},function(t,e,r){"use strict";function n(t,e){for(var r,n,a=e.children||[],s=a.length,c=[],u=-1;++u<s;)(r=i(t,a[u],e))&&(u&&"break"===a[u-1].type&&(r.value&&(r.value=o.left(r.value)),(n=r.children&&r.children[0])&&n.value&&(n.value=o.left(n.value))),c=c.concat(r));return c}t.exports=n;var o=r(19),i=r(140)},,function(t,e,r){"use strict";function n(t,e){if("string"!=typeof t)throw new TypeError("expected a string");if(1===e)return t;if(2===e)return t+t;var r=t.length*e;if(o!==t||void 0===o)o=t,i="";else if(i.length>=r)return i.substr(0,r);for(;r>i.length&&e>1;)1&e&&(i+=t),e>>=1,t+=t;return i+=t,i=i.substr(0,r)}/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var o,i="";t.exports=n},function(t,e){function r(){for(var t={},e=0;e<arguments.length;e++){var r=arguments[e];for(var o in r)n.call(r,o)&&(t[o]=r[o])}return t}t.exports=r;var n=Object.prototype.hasOwnProperty},,,function(t,e,r){"use strict";function n(t){return i.test("number"==typeof t?o(t):t.charAt(0))}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-whitespace-character
 * @fileoverview Check if a character is a whitespace character.
 */
t.exports=n;var o=String.fromCharCode,i=/\s/},function(t,e,r){"use strict";var n=r(315);t.exports=function(t,e,r){return null!=r||"object"==typeof e&&!Array.isArray(e)||(r=e,e={}),n({},e,{type:String(t)},null!=r&&(Array.isArray(r)?{children:r}:{value:String(r)}))}},,,function(t,e,r){"use strict";function n(t){function e(e){var r=e&&e.position&&e.position[t]||{};return{line:r.line||null,column:r.column||null,offset:isNaN(r.offset)?null:r.offset}}return e}var o=e;o.start=n("start"),o.end=n("end")},,function(t,e){function r(t){return t.replace(/^\s*|\s*$/g,"")}e=t.exports=r,e.left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}},,,,,,,,,,,,,function(t,e,r){"use strict";function n(t,e){var r=[],n=-1,i=t.length;for(e&&r.push(o("text","\n"));++n<i;)n&&r.push(o("text","\n")),r.push(t[n]);return e&&0!==t.length&&r.push(o("text","\n")),r}t.exports=n;var o=r(14)},,,,,,,,function(t,e,r){"use strict";function n(t){var e="string"==typeof t?t.charCodeAt(0):t;return e>=48&&e<=57}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-decimal
 * @fileoverview Check if a character is decimal.
 */
t.exports=n},,,,,,,,,,,,,,function(t,e,r){"use strict";function n(t){return encodeURI(decodeURI(t))}function o(t){return t}t.exports=o;try{n(""),t.exports=n}catch(t){}},function(t,e,r){"use strict";function n(t,e){var r,n={};e||(e={});for(r in L)n[r]=null==e[r]?L[r]:e[r];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),o(t,n)}function o(t,e){function r(){return{line:yt,column:bt,offset:gt+(ht.offset||0)}}function n(t,e){var n=r();n.column+=e,n.offset+=e,ut.call(pt,G[t],n,t)}function o(e){return t.charAt(e)}function f(){xt&&(wt.push(xt),st&&st.call(lt,xt,{start:et,end:r()}),xt=T)}var p,L,M,V,H,$,Z,Y,Q,J,K,X,W,tt,et,rt,nt,ot,it=e.additional,at=e.nonTerminated,st=e.text,ct=e.reference,ut=e.warning,lt=e.textContext,ft=e.referenceContext,pt=e.warningContext,ht=e.position,dt=e.indent||[],mt=t.length,gt=0,vt=-1,bt=ht.column||1,yt=ht.line||1,xt=T,wt=[];for(et=r(),Z=ut?n:m,gt--,mt++;++gt<mt;)if(V===w&&(bt=dt[vt]||1),(V=o(gt))!==b)V===w&&(yt++,vt++,bt=0),V?(xt+=V,bt++):f();else{if(($=o(gt+1))===S||$===w||$===v||$===q||$===E||$===b||$===T||it&&$===it){xt+=V,bt++;continue}for(X=K=ot=gt+1,$!==y?W=D:(ot=++K,$=o(ot),$===A||$===k?(W=C,ot=++K):W=j),p=J=M=T,tt=N[W],ot--;++ot<mt&&($=o(ot),tt($));)M+=$,W===D&&s(u,M)&&(p=M,J=u[M]);L=o(ot)===x,L&&(ot++,W===D&&s(c,M)&&(p=M,J=c[M])),nt=1+ot-X,(L||at)&&(M?W===D?(L&&!J?Z(z,1):(p!==M&&(ot=K+p.length,nt=1+ot-K,L=!1),L||(Y=p?R:B,e.attribute?($=o(ot),$===O?(Z(Y,nt),J=null):h($)?J=null:Z(Y,nt)):Z(Y,nt))),H=J):(L||Z(U,nt),H=parseInt(M,I[W]),i(H)?(Z(F,nt),H=g):H in l?(Z(_,nt),H=l[H]):(Q=T,a(H)&&Z(_,nt),H>65535&&(H-=65536,Q+=d(H>>>10|55296),H=56320|1023&H),H=Q+d(H))):W!==D&&Z(P,nt)),H?(f(),et=r(),gt=ot-1,bt+=ot-X+1,wt.push(H),rt=r(),rt.offset++,ct&&ct.call(ft,H,{start:et,end:rt},t.slice(X-1,ot)),et=rt):(M=t.slice(X-1,ot),xt+=M,bt+=M.length,gt=ot-1)}return wt.join(T)}function i(t){return t>=55296&&t<=57343||t>1114111}function a(t){return t>=1&&t<=8||11===t||t>=13&&t<=31||t>=127&&t<=159||t>=64976&&t<=65007||65535==(65535&t)||65534==(65535&t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module parse-entities
 * @fileoverview Parse HTML character references: fast, spec-compliant,
 *   positional information.
 */
var s=r(4),c=r(267),u=r(133),l=r(268),f=r(40),p=r(132),h=r(131);t.exports=n;var d=String.fromCharCode,m=Function.prototype,g="�",v="\f",b="&",y="#",x=";",w="\n",A="x",k="X",q=" ",E="<",O="=",T="",S="\t",L={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},D="named",C="hexadecimal",j="decimal",I={};I[C]=16,I[j]=10;var N={};N[D]=h,N[j]=f,N[C]=p;var R=1,U=2,B=3,P=4,z=5,_=6,F=7,M="Numeric character references",V=" must be terminated by a semicolon",H=" cannot be empty",G={};G[R]="Named character references"+V,G[U]=M+V,G[B]="Named character references"+H,G[P]=M+H,G[z]="Named character references must be known",G[_]=M+" cannot be disallowed",G[F]=M+" cannot be outside the permissible Unicode range"},,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";function n(t){function e(e,r,n){var i,a=e&&e.children;if(r+=t,i=a&&a[r],!n)for(;i&&o(i);)r+=t,i=a[r];return i}return e}var o=r(129);e.before=n(-1),e.after=n(1)},,function(t,e,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module mdast:util:to-string
 * @fileoverview Utility to get the plain text content of a node.
 */
function n(t){return t&&(t.value?t.value:t.alt?t.alt:t.title)||""}function o(t){return n(t)||t.children&&t.children.map(o).join("")||""}t.exports=o},,,,,function(t,e,r){"use strict";var n=r(271);t.exports=function(t,e,r){return"number"==typeof e&&(r=e),t in n?e=n[t]:"string"!=typeof e&&(e=(t.replace(/(?:s|x|z|ch|sh)$/i,"$&e").replace(/([^aeiou])y$/i,"$1ie")+"s").replace(/i?e?s$/i,function(e){return t.slice(-1)===t.slice(-1).toLowerCase()?e.toLowerCase():e.toUpperCase()})),1===r?t:e}},function(t,e,r){"use strict";function n(t,e,r,n){for(var o,i,a,s,c,u,l=["pedantic","commonmark"],f=l.length,p=t.length,h=-1;++h<p;){for(o=t[h],i=o[1]||{},a=o[0],s=-1,u=!1;++s<f;)if(c=l[s],void 0!==i[c]&&i[c]!==r.options[c]){u=!0;break}if(!u&&e[a].apply(r,n))return!0}return!1}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:get-indentation
 * @fileoverview Get indentation.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){return o(t).toLowerCase()}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:normalize
 * @fileoverview Normalize an identifier.
 */
var o=r(100);t.exports=n},function(t,e,r){"use strict";function n(t){var e=-1===t.indexOf('"')?'"':"'";return e+t+e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:enclose-title
 * @fileoverview Quote a `title` the best way possible.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){return e||0===t.length||i.test(t)||o(t,"(")!==o(t,")")?"<"+t+">":t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:enclose-uri
 * @fileoverview Wrap `url` in angle brackets when needed.
 */
var o=r(99);t.exports=n;var i=/\s/},function(t,e,r){"use strict";function n(t,e){var r=e||{},n=r.subset,o=n?c(n):v,a=r.escapeOnly,u=r.omitOptionalSemicolons;return t=t.replace(o,function(t,e,n){return i(t,n.charAt(e+1),r)}),n||a?t:t.replace(b,function(t,e,r){return s(1024*(t.charCodeAt(0)-55296)+t.charCodeAt(1)-56320+65536,r.charAt(e+2),u)}).replace(y,function(t,e,n){return i(t,n.charAt(e+1),r)})}function o(t){return n(t,{escapeOnly:!0,useNamedReferences:!0})}function i(t,e,r){var n,o,i=r.useShortestReferences,c=r.omitOptionalSemicolons;return(i||r.useNamedReferences)&&f(g,t)&&(n=a(g[t],e,c,r.attribute)),!i&&n||(o=s(t.charCodeAt(0),e,c)),n&&(!i||n.length<o.length)?n:o}function a(t,e,r,n){var o="&"+t;return r&&f(l,t)&&-1===d.indexOf(t)&&(!n||e&&"="!==e&&!h(e))?o:o+";"}function s(t,e,r){var n="&#x"+t.toString(16).toUpperCase();return r&&e&&!p(e)?n:n+";"}function c(t){return new RegExp("["+t.join("")+"]","g")}var u=r(266),l=r(133),f=r(4),p=r(132),h=r(131),d=r(273);t.exports=n,n.escape=o;var m=['"',"'","<",">","&","`"],g=function(){var t,e={};for(t in u)e[u[t]]=t;return e}(),v=c(m),b=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,y=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g},function(t,e,r){"use strict";function n(t){for(var e=String(t),r=e.length;e.charAt(--r)===o;);return e.slice(0,r+1)}t.exports=n;var o="\n"},function(t,e,r){"use strict";function n(){return!0}function o(t){return function(e){return Boolean(e&&e.type===t)}}function i(t){return function(e){var r;for(r in t)if(e[r]!==t[r])return!1;return!0}}function a(t,e,r,s,c){var u=null!==s&&void 0!==s,l=null!==r&&void 0!==r;if("string"==typeof t)t=o(t);else if(null===t||void 0===t)t=n;else if("object"==typeof t)t=i(t);else if("function"!=typeof t)throw new Error("Expected function, string, or object as test");if(l&&("number"!=typeof r||r<0||r===1/0))throw new Error("Expected positive finite index or child node");if(u&&(!a(null,s)||!s.children))throw new Error("Expected parent node");if(!e||!e.type||"string"!=typeof e.type)return!1;if(u!==l)throw new Error("Expected both parent and index");return Boolean(t.call(c,e,r,s))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unist:util:is
 * @fileoverview Utility to check if a node passes a test.
 */
t.exports=a},function(t,e,r){"use strict";function n(t){var e=a(String(t));return{toPosition:o(e),toOffset:i(e)}}function o(t){function e(e){var r=-1,n=t.length;if(e<0)return{};for(;++r<n;)if(t[r]>e)return{line:r+1,column:e-(t[r-1]||0)+1,offset:e};return{}}return e}function i(t){function e(e){var r=e&&e.line,n=e&&e.column;return!isNaN(r)&&!isNaN(n)&&r-1 in t?(t[r-2]||0)+n-1||0:-1}return e}function a(t){for(var e=[],r=t.indexOf("\n");-1!==r;)e.push(r+1),r=t.indexOf("\n",r+1);return e.push(t.length+1),e}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module vfile-location
 * @fileoverview Convert between positions (line and column-based)
 *   and offsets (range-based) locations in a virtual file.
 */
t.exports=n},,,,,function(t,e,r){"use strict";function n(t,e){var r,n=0;if(t=String(t),"string"!=typeof e||1!==e.length)throw new Error("Expected character");for(r=t.indexOf(e);-1!==r;)n++,r=t.indexOf(e,r+1);return n}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module ccount
 * @fileoverview Count characters.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){return String(t).replace(/\s+/g," ")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module collapse-white-space
 * @fileoverview Replace multiple white-space characters
 *   with a single space.
 */
t.exports=n},,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module rehype:lint:util:is-element
 */
function n(t,e){var r;if(!(null===e||void 0===e||"string"==typeof e||"object"==typeof e&&e.length))throw new Error("Expected `string` or `Array.<string>` for `tagNames`, not `"+e+"`");return!(!t||"object"!=typeof t||"element"!==t.type||"string"!=typeof t.tagName)&&(null===e||void 0===e||(r=t.tagName,"string"==typeof e?r===e:-1!==e.indexOf(r)))}t.exports=n},function(t,e,r){"use strict";function n(t,e){for(var r=e&&e.children,n=r&&r.length,i=-1,a=[];++i<n;)a[i]=o(t,r[i],i,e);return a.join("")}var o=r(127);t.exports=n},function(t,e,r){"use strict";function n(t,e,r){var n=A(r,e,!0);return!n||!y("comment",n)&&!w(n)}function o(t,e,r){var n=A(r,e);return!n||!y("comment",n)}function i(t,e,r){var n=A(r,e);return!n||!y("comment",n)}function a(t,e,r){var n=A(r,e);return n?x(n,["address","article","aside","blockquote","details","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","menu","nav","ol","p","pre","section","table","ul"]):!r||!x(r,["a","audio","del","ins","map","noscript","video"])}function s(t,e,r){var n=A(r,e);return!n||x(n,"li")}function c(t,e,r){var n=A(r,e);return n&&x(n,["dt","dd"])}function u(t,e,r){var n=A(r,e);return!n||x(n,["dt","dd"])}function l(t,e,r){var n=A(r,e);return!n||x(n,["rp","rt"])}function f(t,e,r){var n=A(r,e);return!n||x(n,"optgroup")}function p(t,e,r){var n=A(r,e);return!n||x(n,["option","optgroup"])}function h(t,e,r){var n=A(r,e);return!n||x(n,["menuitem","hr","menu"])}function d(t,e,r){var n=A(r,e);return n&&x(n,["tbody","tfoot"])}function m(t,e,r){var n=A(r,e);return!n||x(n,["tbody","tfoot"])}function g(t,e,r){return!A(r,e)}function v(t,e,r){var n=A(r,e);return!n||x(n,"tr")}function b(t,e,r){var n=A(r,e);return!n||x(n,["td","th"])}var y=r(93),x=r(122),w=r(126),A=r(79).after,k=r(125);t.exports=k({html:o,head:n,body:i,p:a,li:s,dt:c,dd:u,rt:l,rp:l,optgroup:f,option:p,menuitem:h,colgroup:n,caption:n,thead:d,tbody:m,tfoot:g,tr:v,td:b,th:b})},function(t,e,r){"use strict";function n(t){function e(e,r,n){var i=e.tagName,a=!!o(t,i)&&t[i];return!!a&&a(e,r,n)}return e}var o=r(4);t.exports=n},function(t,e,r){"use strict";function n(t){return o("text",t)&&i(t.value.charAt(0))}var o=r(93),i=r(129);t.exports=n},function(t,e,r){"use strict";function n(t,e,r,n){var a=e&&e.type;if(!a)throw new Error("Expected node, not `"+e+"`");if(!o(i,a))throw new Error("Cannot compile unknown node `"+a+"`");return i[a](t,e,r,n)}var o=r(4);t.exports=n;var i={};i.root=r(123),i.text=r(128),i.element=r(247),i.doctype=r(246),i.comment=r(245),i.raw=r(253)},function(t,e,r){"use strict";function n(t,e,r,n){var s=e.value;return o(n)?s:a(s,i(t.entities,{subset:["<","&"]}))}function o(t){return t&&("script"===t.tagName||"style"===t.tagName)}var i=r(10),a=r(91);t.exports=n},function(t,e,r){"use strict";function n(t){var e;if(t&&"object"==typeof t&&"text"===t.type)e=t.value||"";else{if("string"!=typeof t)return!1;e=t}return""===e.replace(o,"")}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hast:util:whitespace
 * @fileoverview Check whether a node is inter-element
 *   whitespace.
 */
var o=/[\ \t\n\f\r]/g;t.exports=n},function(t,e,r){"use strict";function n(t){var e="string"==typeof t?t.charCodeAt(0):t;return e>=97&&e<=122||e>=65&&e<=90}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-alphabetical
 * @fileoverview Check if a character is alphabetical.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){return o(t)||i(t)}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-alphanumerical
 * @fileoverview Check if a character is alphanumerical.
 */
var o=r(130),i=r(40);t.exports=n},function(t,e,r){"use strict";function n(t){var e="string"==typeof t?t.charCodeAt(0):t;return e>=97&&e<=102||e>=65&&e<=70||e>=48&&e<=57}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-hexadecimal
 * @fileoverview Check if a character is hexadecimal.
 */
t.exports=n},function(t,e){t.exports={AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"}},function(t,e,r){"use strict";function n(t,e){var r,n,o=0,i=0;if("string"!=typeof e||1!==e.length)throw new Error("Expected character");for(t=String(t),r=n=t.indexOf(e);-1!==n;)o++,n===r?o>i&&(i=o):o=1,r=n+1,n=t.indexOf(e,r);return i}t.exports=n},function(t,e,r){"use strict";function n(t){var e=t||{};return e.commonmark?a:e.gfm?i:o}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module markdown-escapes
 * @fileoverview List of escapable characters in markdown.
 */
t.exports=n;var o=["\\","`","*","{","}","[","]","(",")","#","+","-",".","!","_",">"],i=o.concat(["~","|"]),a=i.concat(["\n",'"',"$","%","&","'",",","/",":",";","<","=","?","@","^"]);n.default=o,n.gfm=i,n.commonmark=a},function(t,e,r){"use strict";function n(t,e,r){var n=e.referenceType;if("collapsed"!==n&&"full"!==n&&!r)return"imageReference"===e.type?o("text","!["+e.alt+"]"):[o("text","[")].concat(i(t,e),o("text","]"))}t.exports=n;var o=r(14),i=r(7)},function(t,e,r){"use strict";function n(t,e){var r=e.identifier;return t(e.position,"sup",{id:"fnref-"+r},[t(e,"a",{href:"#fn-"+r,className:["footnote-ref"]},[o("text",r)])])}t.exports=n;var o=r(14)},function(t,e,r){"use strict";function n(t,e){var r={},n=e.ordered?"ol":"ul";return"number"==typeof e.start&&1!==e.start&&(r.start=e.start),t(e,n,r,o(i(t,e),!0))}t.exports=n;var o=r(32),i=r(7)},function(t,e,r){"use strict";function n(t,e){return t(e,"hr")}t.exports=n},function(t,e,r){"use strict";function n(t,e){return i(e)?t.augment(e,a("text",e.value)):t(e,"div",c(t,e))}function o(t,e,r){var o=e&&e.type,i=s(t.handlers,o)?t.handlers[o]:null;if(!o)throw new Error("Expected node, got `"+e+"`");return("function"==typeof i?i:n)(t,e,r)}function i(t){var e=t.data||{};return!(s(e,"hName")||s(e,"hProperties")||s(e,"hChildren"))&&"value"in t}t.exports=o;var a=r(14),s=r(4),c=r(7)},,,,,,function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return o.exec(t).slice(1)};e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,o="/"===a.charAt(0))}return e=r(n(e.split("/"),function(t){return!!t}),!o).join("/"),(o?"/":"")+e||"."},e.normalize=function(t){var o=e.isAbsolute(t),i="/"===a(t,-1);return t=r(n(t.split("/"),function(t){return!!t}),!o).join("/"),t||o||(t="."),t&&i&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var o=n(t.split("/")),i=n(r.split("/")),a=Math.min(o.length,i.length),s=a,c=0;c<a;c++)if(o[c]!==i[c]){s=c;break}for(var u=[],c=s;c<o.length;c++)u.push("..");return u=u.concat(i.slice(s)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=i(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return i(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(e,r(56))},function(t,e,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:defaults
 * @fileoverview Default options for `parse`.
 */
t.exports={position:!0,gfm:!0,yaml:!0,commonmark:!1,footnotes:!1,pedantic:!1,blocks:r(272),breaks:!1}},function(t,e,r){"use strict";function n(t,e){var r=t.indexOf("[",e),n=t.indexOf("![",e);return-1===n?r:r<n?r:n}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:link
 * @fileoverview Locate a link.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){return t.indexOf("<",e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:tag
 * @fileoverview Locate a tag.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){for(var e,r=0,n=0,i=t.charAt(r),a={};i in o;)e=o[i],n+=e,e>1&&(n=Math.floor(n/e)*e),a[n]=r,i=t.charAt(++r);return{indent:n,stops:a}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:get-indentation
 * @fileoverview Get indentation.
 */
t.exports=n;var o={" ":1,"\t":4}},function(t,e,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:html
 * @fileoverview HTML regexes.
 */
var n="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",o="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";e.openCloseTag=new RegExp("^(?:"+n+"|"+o+")"),e.tag=new RegExp("^(?:"+n+"|"+o+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")},function(t,e,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:defaults
 * @fileoverview Default options for `stringify`.
 */
t.exports={gfm:!0,commonmark:!1,pedantic:!1,entities:"false",setext:!1,closeAtx:!1,looseTable:!1,spacedTable:!0,paddedTable:!0,incrementListMarker:!0,fences:!1,fence:"`",bullet:"-",listItemIndent:"tab",rule:"*",ruleSpaces:!0,ruleRepetition:3,strong:"*",emphasis:"_"}},function(t,e,r){"use strict";function n(t){var e;return"&"!==t.charAt(0)?0:(e=t.split("&",2).join("&"),e.length-o(e).length)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:entity-prefix-length
 * @fileoverview Encode based on the identifier.
 */
var o=r(55);t.exports=n},function(t,e,r){"use strict";function n(t){var e=t.referenceType,r="full"===e?t.identifier:"";return"shortcut"===e?r:"["+r+"]"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:label
 * @fileoverview Stringify a reference label.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){var r,n;for(t=t.split("\n"),r=t.length,n=o(" ",e*i);r--;)0!==t[r].length&&(t[r]=n+t[r]);return t.join("\n")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:pad
 * @fileoverview Pad a given value.
 */
var o=r(9);t.exports=n;var i=4},function(t,e,r){"use strict";function n(t){return t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:returner
 * @fileoverview Return the given value.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e,r){return function(){var n=r||this,o=n[t];return n[t]=!e,function(){n[t]=o}}}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module state-toggle
 * @fileoverview Enter/exit a state.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){function e(e){return t.apply(this,e)}function r(){return this instanceof r?t.apply(this,arguments):new e(arguments)}var n,a,s;i(r,t),i(e,r),n=r.prototype;for(a in n)(s=n[a])&&"object"==typeof s&&(n[a]="concat"in s?s.concat():o(s));return r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unherit
 * @fileoverview Create a custom constructor which can be modified
 *   without affecting the original class.
 */
var o=r(10),i=r(257);t.exports=n},,,function(t,e){function r(t){return"[object String]"===n.call(t)}var n=Object.prototype.toString;t.exports=r},,,,,,function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(44),i=n(o),a=r(42),s=n(a),c=r(21),u=n(c),l=r(11),f=n(l),p=r(12),h=n(p),d=r(23),m=n(d),g=r(22),v=n(g),b=r(0),y=n(b),x=r(432),w=n(x),A=r(334),k=n(A),q=r(393),E=n(q);r(265);var O=r(85),T=n(O),S=function(t){function e(){return(0,f.default)(this,e),(0,m.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,v.default)(e,t),(0,h.default)(e,[{key:"render",value:function(){var t=this.props.body;return y.default.createElement(T.default,{title:"release notes",className:"release-notes"},y.default.createElement("div",{className:"container"},y.default.createElement("div",{className:"row contents",dangerouslySetInnerHTML:{__html:t}})))}}],[{key:"getInitialProps",value:function(){function t(){return e.apply(this,arguments)}var e=(0,s.default)(i.default.mark(function t(){var e,r,n;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/rhiokim/gona/master/CHANGELOG.md");case 2:return e=t.sent,t.next=5,e.text();case 5:return r=t.sent,t.next=8,(0,w.default)().use(E.default).use(k.default).process(r);case 8:return n=t.sent,t.abrupt("return",{body:n.contents});case 10:case"end":return t.stop()}},t,this)}));return t}()}]),e}(y.default.Component);e.default=S},,function(t,e,r){"use strict";function n(t,e,r){var n,i=-1;if(!t)throw new Error("Iterate requires that |this| not be "+t);if(!o(t,"length"))throw new Error("Iterate requires that |this| has a `length`");if("function"!=typeof e)throw new Error("`callback` must be a function");for(;++i<t.length;)i in t&&"number"==typeof(n=e.call(r,t[i],i,t))&&(n<0&&(i=0),i=n-1)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module array-iterate
 * @fileoverview `forEach` with the possibility to change the
 *   next position.
 */
var o=r(4);t.exports=n},,,,,,,,function(t,e,r){"use strict";function n(t){if(t)throw t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module bail
 * @fileoverview Throw a given error.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){for(var e,r=[],n=String(t||c),o=n.indexOf(a),s=0,u=!1;!u;)-1===o&&(o=n.length,u=!0),e=i(n.slice(s,o)),!e&&u||r.push(e),s=o+1,o=n.indexOf(a,s);return r}function o(t,e){var r=e||{},n=r.padLeft;return t[t.length-1]===c&&(t=t.concat(c)),i(t.join((r.padRight?s:c)+a+(n||void 0===n||null===n?s:c)))}e.parse=n,e.stringify=o;var i=r(19),a=",",s=" ",c=""},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";function n(t,e){var r,n,c="string"==typeof t,u=c&&t.length,l=0,f=-1,p=-1,h=e||4,d=[];if(!c)throw new Error("detab expected string");for(;++f<u;)r=t.charCodeAt(f),r===i?(n=h-(p+1)%h,p+=n,d.push(t.slice(l,f)+o(" ",n)),l=f+1):r===a||r===s?p=-1:p++;return d.push(t.slice(l)),d.join("")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module detab
 * @fileoverview Detab: tabs -> spaces.
 */
t.exports=n;var o=r(9),i=9,a=10,s=13},,,,,,,function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===o.call(t)},a=function(t){if(!t||"[object Object]"!==o.call(t))return!1;var e=n.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!r)return!1;var i;for(i in t);return void 0===i||n.call(t,i)};t.exports=function t(){var e,r,n,o,s,c,u=arguments[0],l=1,f=arguments.length,p=!1;for("boolean"==typeof u&&(p=u,u=arguments[1]||{},l=2),(null==u||"object"!=typeof u&&"function"!=typeof u)&&(u={});l<f;++l)if(null!=(e=arguments[l]))for(r in e)n=u[r],o=e[r],u!==o&&(p&&o&&(a(o)||(s=i(o)))?(s?(s=!1,c=n&&i(n)?n:[]):c=n&&a(n)?n:{},u[r]=t(p,c,o)):void 0!==o&&(u[r]=o));return u}},,,,,function(t,e,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module hdast:sanitize
 * @fileoverview Sanitize HAST.
 */
t.exports=r(243)},function(t,e,r){"use strict";function n(t,e){var r,n={type:"root",children:[]};return t&&"object"==typeof t&&t.type?(r=o(m(g,e||{}),t,[]),r?"length"in r?1===r.length?r[0]:(n.children=r,n):r:n):n}function o(t,e,r){var n,o,i,a=e&&e.type,s={type:e.type},c=!0;if(d(v,a)){n=m(v[a],v["*"]);for(i in n)o=n[i](t,e[i],e,r),!1===o?(c=!1,s[i]=e[i]):null!=o&&(s[i]=o)}else c=!1;return c?s:s.children&&s.children.length&&-1===t.strip.indexOf(s.tagName)?s.children:null}function i(t,e,r,n){var i,a=e||[],s=a.length||0,c=[],u=-1;for(n=n.concat(r.tagName);++u<s;)(i=o(t,a[u],n))&&("length"in i?c=c.concat(i):c.push(i));return c}function a(t,e,r,n){var o,i,a,u=l(t,r.tagName,r,n),f=t.attributes,p=e||{},m={};o=d(f,u)?f[u]:[],o=[].concat(o,f["*"]);for(i in p)a=p[i],(-1!==o.indexOf(i)||h(i)&&-1!==o.indexOf("data*"))&&null!=(a=a&&"object"==typeof a&&"length"in a?s(t,a,i):c(t,a,i))&&(m[i]=a);return m}function s(t,e,r){for(var n,o=e.length,i=[],a=-1;++a<o;)null!=(n=c(t,e[a],r))&&i.push(n);return i}function c(t,e,r){return"boolean"!=typeof e&&"number"!=typeof e&&"string"!=typeof e?null:u(t,e,r)?(-1!==t.clobber.indexOf(r)&&(e=t.clobberPrefix+e),e):null}function u(t,e,r){var n,o,i,a,s,c=t.protocols;if(c=d(c,r)?c[r].concat():[],!c.length)return!0;if(e=String(e),"#"===(o=e.charAt(0))||"/"===o)return!0;if(-1===(i=e.indexOf(":")))return!0;for(a=c.length,s=-1;++s<a;)if(n=c[s],i===n.length&&e.slice(0,n.length)===n)return!0;return-1!==(s=e.indexOf("?"))&&i>s||-1!==(s=e.indexOf("#"))&&i>s}function l(t,e,r,n){var o,i,a="string"==typeof e?e:null,s=t.ancestors;if(!a||"*"===a||-1===t.tagNames.indexOf(a))return!1;if(s=d(s,a)?s[a]:[],s.length)for(o=s.length+1,i=-1;++i<o;){if(!s[i])return!1;if(-1!==n.indexOf(s[i]))break}return a}function f(t,e){return"string"==typeof e?e:""}function p(t,e){return e}function h(t){return t.length>4&&"data"===t.slice(0,4).toLowerCase()}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module hdast:sanitize
 * @fileoverview Sanitize HAST.
 */
var d=r(4),m=r(10),g=r(269);t.exports=n;var v={root:{children:i},element:{tagName:l,properties:a,children:i},text:{value:f},"*":{data:p,position:p}}},function(t,e,r){"use strict";t.exports=r(248)},function(t,e,r){"use strict";function n(t,e){return"\x3c!--"+e.value+"--\x3e"}t.exports=n},function(t,e,r){"use strict";function n(t,e){var r=e.public,n=e.system,i="<!DOCTYPE";return e.name?(i+=" "+e.name,null!=r?i+=" PUBLIC "+o(r):null!=n&&(i+=" SYSTEM"),null!=n&&(i+=" "+o(n)),i+">"):i+">"}function o(t){var e=-1===t.indexOf('"')?'"':"'";return e+t+e}t.exports=n},function(t,e,r){"use strict";function n(t,e,r,n){var i=e.tagName,a=m(t,e),s=-1!==t.voids.indexOf(i.toLowerCase()),c=o(t,e.properties),u=t.omit,l="";return s=!a&&s,!c&&u&&u.opening(e,r,n)||(l=A+i+(c?b+c:v),s&&t.close&&(t.tightClose&&c.charAt(c.length-1)!==q||(l+=b),l+=q),l+=k),l+=a,s||u&&u.closing(e,r,n)||(l+=A+q+i+k),l}function o(t,e){var r,n,o,a,s,c,u=[];for(r in e)null!=(n=e[r])&&(o=i(t,r,n))&&u.push(o);for(a=u.length,s=-1;++s<a;)o=u[s],c=t.tight&&o.charAt(o.length-1),s!==a-1&&c!==y&&c!==x&&(u[s]=o+b);return u.join(v)}function i(t,e,r){var n,o=f(e)||{};return null==r||"number"==typeof r&&isNaN(r)||!r&&o.boolean||!1===r&&o.overloadedBoolean?v:(n=a(t,e),r&&o.boolean||!0===r&&o.overloadedBoolean?n:n+s(t,e,r))}function a(t,e){var r=f(e)||{},n=r.name||h(e);return n.slice(0,g.length)===g&&/[0-9]/.test(n.charAt(g.length))&&(n=g+"-"+n.slice(4)),p(n,c(t.entities,{subset:t.NAME}))}function s(t,e,r){var n,o=f(e)||{},i=t.entities,a=t.quote,s=t.alternative;return"object"==typeof r&&"length"in r&&(r=(o.commaSeparated?l:u)(r,{padLeft:!t.tightLists})),r=String(r),!r&&t.collapseEmpty||(n=r,t.unquoted&&(n=p(r,c(i,{subset:t.UNQUOTED,attribute:!0}))),t.unquoted&&n===r||(s&&d(r,a)>d(r,s)&&(a=s),r=p(r,c(i,{subset:a===x?t.SINGLE_QUOTED:t.DOUBLE_QUOTED,attribute:!0})),r=a+r+a),r=r?w+r:r),r}var c=r(10),u=r(436).stringify,l=r(178).stringify,f=r(322),p=r(91),h=r(274),d=r(99),m=r(123);t.exports=n;var g="data",v="",b=" ",y='"',x="'",w="=",A="<",k=">",q="/"},function(t,e,r){"use strict";function n(t,e){var r=e||{},n=r.quote||s,b=r.quoteSmart,y=r.allowParseErrors,x=r.allowDangerousCharacters,w=n===s?c:s,A=y?u:l,k=y?p:h,q=y?d:m,E=y?g:v;if(n!==s&&n!==c)throw new Error("Invalid quote `"+n+"`, expected `"+c+"` or `"+s+"`");return a({NAME:A.concat(x?[]:f),UNQUOTED:k.concat(x?[]:f),DOUBLE_QUOTED:E.concat(x?[]:f),SINGLE_QUOTED:q.concat(x?[]:f),omit:r.omitOptionalTags&&i,quote:n,alternative:b?w:null,unquoted:Boolean(r.preferUnquoted),tight:r.tightAttributes,tightLists:r.tightCommaSeparatedLists,tightClose:r.tightSelfClosing,collapseEmpty:r.collapseEmptyAttributes,dangerous:r.allowDangerousHTML,voids:r.voids||o.concat(),entities:r.entities||{},close:r.closeSelfClosing},t)}var o=r(254),i=r(249),a=r(127);t.exports=n;var s='"',c="'",u=["&"," ","\t","\n","\r","\f","/",">","="],l=u.concat("\0",s,c,"<"),f=[s,c,"`"],p=["&"," ","\t","\n","\r","\f",">"],h=p.concat("\0",s,c,"<","=","`"),d=["&",c],m=d.concat("\0"),g=["&",s],v=g.concat("\0")},function(t,e,r){"use strict";e.opening=r(250),e.closing=r(124)},function(t,e,r){"use strict";function n(t){var e=p(t);return!e||!u("comment",e)}function o(t){for(var e,r,n=t.children,o=n.length,i={},a=-1;++a<o;)if(e=n[a],r=e.tagName,"element"===e.type&&("title"===r||"base"===r)){if(c(i,r))return!1;i[r]=!0}return Boolean(o)}function i(t){var e=p(t,!0);return!e||!u("comment",e)&&!d(e)&&!l(e,["meta","link","script","style","template"])}function a(t,e,r){var n=f(r,e),o=p(t,!0);return(!l(n,"colgroup")||!m(n,h(r,n),r))&&(o&&l(o,"col"))}function s(t,e,r){var n=f(r,e),o=p(t);return(!l(n,["thead","tbody"])||!m(n,h(r,n),r))&&(o&&l(o,"tr"))}var c=r(4),u=r(93),l=r(122),f=r(79).before,p=r(251),h=r(252),d=r(126),m=r(124),g=r(125);t.exports=g({html:n,head:o,body:i,colgroup:a,tbody:s})},function(t,e,r){"use strict";function n(t,e){return o(t,-1,e)}var o=r(79).after;t.exports=n},function(t,e,r){"use strict";function n(t,e){return t&&t.children&&t.children.indexOf(e)}t.exports=n},function(t,e,r){"use strict";function n(t,e){return t.dangerous?e.value:o(t,e)}var o=r(128);t.exports=n},function(t,e,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module html-void-elements
 * @fileoverview List of known void HTML elements.
 */
t.exports=r(270)},,,function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){"use strict";t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return!/[^0-9a-z\xDF-\xFF]/.test(t.toLowerCase())}},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},,function(t,e,r){"use strict";var n=Object.prototype.toString;t.exports=function(t){var e;return"[object Object]"===n.call(t)&&(null===(e=Object.getPrototypeOf(t))||e===Object.getPrototypeOf({}))}},,,function(t,e,r){"use strict";function n(t){return i.test("number"==typeof t?o(t):t.charAt(0))}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-word-character
 * @fileoverview Check if a character is a word character.
 */
t.exports=n;var o=String.fromCharCode,i=/\w/},function(t,e,r){r(450),t.exports=self.fetch.bind(self)},function(t,e){t.exports={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"}},function(t,e){t.exports={AEli:"Æ",AElig:"Æ",AM:"&",AMP:"&",Aacut:"Á",Aacute:"Á",Abreve:"Ă",Acir:"Â",Acirc:"Â",Acy:"А",Afr:"𝔄",Agrav:"À",Agrave:"À",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"𝔸",ApplyFunction:"⁡",Arin:"Å",Aring:"Å",Ascr:"𝒜",Assign:"≔",Atild:"Ã",Atilde:"Ã",Aum:"Ä",Auml:"Ä",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"𝔅",Bopf:"𝔹",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COP:"©",COPY:"©",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedi:"Ç",Ccedil:"Ç",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"¸",CenterDot:"·",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"𝒞",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"𝔇",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"𝔻",Dot:"¨",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"𝒟",Dstrok:"Đ",ENG:"Ŋ",ET:"Ð",ETH:"Ð",Eacut:"É",Eacute:"É",Ecaron:"Ě",Ecir:"Ê",Ecirc:"Ê",Ecy:"Э",Edot:"Ė",Efr:"𝔈",Egrav:"È",Egrave:"È",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"𝔼",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Eum:"Ë",Euml:"Ë",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"𝔉",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"𝔽",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",G:">",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"𝔊",Gg:"⋙",Gopf:"𝔾",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacut:"Í",Iacute:"Í",Icir:"Î",Icirc:"Î",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrav:"Ì",Igrave:"Ì",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"𝕀",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Ium:"Ï",Iuml:"Ï",Jcirc:"Ĵ",Jcy:"Й",Jfr:"𝔍",Jopf:"𝕁",Jscr:"𝒥",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"𝔎",Kopf:"𝕂",Kscr:"𝒦",LJcy:"Љ",L:"<",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"𝔏",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"𝕃",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",MinusPlus:"∓",Mopf:"𝕄",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",Nfr:"𝔑",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"𝒩",Ntild:"Ñ",Ntilde:"Ñ",Nu:"Ν",OElig:"Œ",Oacut:"Ó",Oacute:"Ó",Ocir:"Ô",Ocirc:"Ô",Ocy:"О",Odblac:"Ő",Ofr:"𝔒",Ograv:"Ò",Ograve:"Ò",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"𝕆",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"𝒪",Oslas:"Ø",Oslash:"Ø",Otild:"Õ",Otilde:"Õ",Otimes:"⨷",Oum:"Ö",Ouml:"Ö",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"𝔓",Phi:"Φ",Pi:"Π",PlusMinus:"±",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"𝒫",Psi:"Ψ",QUO:'"',QUOT:'"',Qfr:"𝔔",Qopf:"ℚ",Qscr:"𝒬",RBarr:"⤐",RE:"®",REG:"®",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"𝔖",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"𝕊",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"𝒮",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THOR:"Þ",THORN:"Þ",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"\t",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"𝔗",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"𝕋",TripleDot:"⃛",Tscr:"𝒯",Tstrok:"Ŧ",Uacut:"Ú",Uacute:"Ú",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucir:"Û",Ucirc:"Û",Ucy:"У",Udblac:"Ű",Ufr:"𝔘",Ugrav:"Ù",Ugrave:"Ù",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"𝕌",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"𝒰",Utilde:"Ũ",Uum:"Ü",Uuml:"Ü",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",Vopf:"𝕍",Vscr:"𝒱",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"𝔚",Wopf:"𝕎",Wscr:"𝒲",Xfr:"𝔛",Xi:"Ξ",Xopf:"𝕏",Xscr:"𝒳",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacut:"Ý",Yacute:"Ý",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"𝔜",Yopf:"𝕐",Yscr:"𝒴",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"𝒵",aacut:"á",aacute:"á",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acir:"â",acirc:"â",acut:"´",acute:"´",acy:"а",aeli:"æ",aelig:"æ",af:"⁡",afr:"𝔞",agrav:"à",agrave:"à",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",am:"&",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",aopf:"𝕒",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",arin:"å",aring:"å",ascr:"𝒶",ast:"*",asymp:"≈",asympeq:"≍",atild:"ã",atilde:"ã",aum:"ä",auml:"ä",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvba:"¦",brvbar:"¦",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedi:"ç",ccedil:"ç",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedi:"¸",cedil:"¸",cemptyv:"⦲",cen:"¢",cent:"¢",centerdot:"·",cfr:"𝔠",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"®",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"𝕔",coprod:"∐",cop:"©",copy:"©",copysr:"℗",crarr:"↵",cross:"✗",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curre:"¤",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",de:"°",deg:"°",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",digamma:"ϝ",disin:"⋲",div:"÷",divid:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacut:"é",eacute:"é",easter:"⩮",ecaron:"ě",ecir:"ê",ecirc:"ê",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",eg:"⪚",egrav:"è",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",et:"ð",eth:"ð",eum:"ë",euml:"ë",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac1:"¼",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac3:"¾",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",g:">",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",horbar:"―",hscr:"𝒽",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacut:"í",iacute:"í",ic:"⁣",icir:"î",icirc:"î",icy:"и",iecy:"е",iexc:"¡",iexcl:"¡",iff:"⇔",ifr:"𝔦",igrav:"ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"𝕚",iota:"ι",iprod:"⨼",iques:"¿",iquest:"¿",iscr:"𝒾",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",ium:"ï",iuml:"ï",jcirc:"ĵ",jcy:"й",jfr:"𝔧",jmath:"ȷ",jopf:"𝕛",jscr:"𝒿",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"𝔨",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"𝕜",kscr:"𝓀",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laqu:"«",laquo:"«",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",l:"<",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",mac:"¯",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"𝔪",mho:"℧",micr:"µ",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middo:"·",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",mp:"∓",mscr:"𝓂",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbs:" ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"𝕟",no:"¬",not:"¬",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntild:"ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacut:"ó",oacute:"ó",oast:"⊛",ocir:"ô",ocirc:"ô",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"𝔬",ogon:"˛",ograv:"ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"º",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslas:"ø",oslash:"ø",osol:"⊘",otild:"õ",otilde:"õ",otimes:"⊗",otimesas:"⨶",oum:"ö",ouml:"ö",ovbar:"⌽",par:"¶",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusm:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",pointint:"⨕",popf:"𝕡",poun:"£",pound:"£",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",psi:"ψ",puncsp:" ",qfr:"𝔮",qint:"⨌",qopf:"𝕢",qprime:"⁗",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quo:'"',quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raqu:"»",raquo:"»",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",re:"®",reg:"®",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"𝓇",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sec:"§",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",sh:"­",shy:"­",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup:"⊃",sup1:"¹",sup2:"²",sup3:"³",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szli:"ß",szlig:"ß",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thor:"þ",thorn:"þ",tilde:"˜",time:"×",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacut:"ú",uacute:"ú",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucir:"û",ucirc:"û",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",ugrav:"ù",ugrave:"ù",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",um:"¨",uml:"¨",uogon:"ų",uopf:"𝕦",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"𝓊",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uum:"ü",uuml:"ü",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",vprop:"∝",vrtri:"⊳",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"𝔴",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacut:"ý",yacute:"ý",yacy:"я",ycirc:"ŷ",ycy:"ы",ye:"¥",yen:"¥",yfr:"𝔶",yicy:"ї",yopf:"𝕪",yscr:"𝓎",yucy:"ю",yum:"ÿ",yuml:"ÿ",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"𝔷",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",zscr:"𝓏",zwj:"‍",zwnj:"‌"}},function(t,e){t.exports={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"}},function(t,e){t.exports={strip:["script"],clobberPrefix:"user-content-",clobber:["name","id"],ancestors:{li:["ol","ul"],tbody:["table"],tfoot:["table"],thead:["table"],td:["table"],th:["table"],tr:["table"]},protocols:{href:["http","https","mailto"],cite:["http","https"],src:["http","https"],longDesc:["http","https"]},tagNames:["h1","h2","h3","h4","h5","h6","h7","h8","br","b","i","strong","em","a","pre","code","img","tt","div","ins","del","sup","sub","p","ol","ul","table","thead","tbody","tfoot","blockquote","dl","dt","dd","kbd","q","samp","var","hr","ruby","rt","rp","li","tr","td","th","s","strike","summary","details"],attributes:{a:["href"],img:["src","longDesc"],div:["itemScope","itemType"],blockquote:["cite"],del:["cite"],ins:["cite"],q:["cite"],"*":["abbr","accept","acceptCharset","accessKey","action","align","alt","axis","border","cellPadding","cellSpacing","char","charoff","charSet","checked","clear","cols","colSpan","color","compact","coords","dateTime","dir","disabled","encType","htmlFor","frame","headers","height","hrefLang","hspace","isMap","id","label","lang","maxLength","media","method","multiple","name","nohref","noshade","nowrap","open","prompt","readOnly","rel","rev","rows","rowSpan","rules","scope","selected","shape","size","span","start","summary","tabIndex","target","title","type","useMap","valign","value","vspace","width","itemProp"]}}},function(t,e){t.exports=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"]},function(t,e){t.exports={addendum:"addenda",aircraft:"aircraft",alga:"algae",alumna:"alumnae",alumnus:"alumni",amoeba:"amoebae",analysis:"analyses",antenna:"antennae",antithesis:"antitheses",apex:"apices",appendix:"appendices",axis:"axes",bacillus:"bacilli",bacterium:"bacteria",barracks:"barracks",basis:"bases",beau:"beaux",bison:"bison",bureau:"bureaus",cactus:"cacti",calf:"calves",child:"children","château":"châteaus",cherub:"cherubim",codex:"codices",concerto:"concerti",corpus:"corpora",crisis:"crises",criterion:"criteria",curriculum:"curricula",datum:"data",deer:"deer",diagnosis:"diagnoses",die:"dice",dwarf:"dwarfs",echo:"echoes",elf:"elves",elk:"elk",ellipsis:"ellipses",embargo:"embargoes",emphasis:"emphases",erratum:"errata","faux pas":"faux pas",fez:"fezes",firmware:"firmware",fish:"fish",focus:"foci",foot:"feet",formula:"formulae",fungus:"fungi",gallows:"gallows",genus:"genera",goose:"geese",graffito:"graffiti",grouse:"grouse",half:"halves",hero:"heroes",hoof:"hooves",hypothesis:"hypotheses",index:"indices",knife:"knives",larva:"larvae",leaf:"leaves",libretto:"libretti",life:"lives",loaf:"loaves",locus:"loci",louse:"lice",man:"men",matrix:"matrices",means:"means",medium:"media",memorandum:"memoranda",minutia:"minutiae",moose:"moose",mouse:"mice",nebula:"nebulae",neurosis:"neuroses",news:"news",nucleus:"nuclei",oasis:"oases",offspring:"offspring",opus:"opera",ovum:"ova",ox:"oxen",paralysis:"paralyses",parenthesis:"parentheses",phenomenon:"phenomena",phylum:"phyla",potato:"potatoes",prognosis:"prognoses",quiz:"quizzes",radius:"radii",referendum:"referenda",salmon:"salmon",scarf:"scarves",self:"selves",series:"series",sheep:"sheep",shelf:"shelves",shrimp:"shrimp",species:"species",stimulus:"stimuli",stratum:"strata",swine:"swine",syllabus:"syllabi",symposium:"symposia",synopsis:"synopses",synthesis:"syntheses",tableau:"tableaus",that:"those",thesis:"theses",thief:"thieves",tomato:"tomatoes",tooth:"teeth",trout:"trout",tuna:"tuna",vertebra:"vertebrae",vertex:"vertices",veto:"vetoes",vita:"vitae",vortex:"vortices",wharf:"wharves",wife:"wives",wolf:"wolves",woman:"women"}},function(t,e){t.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},function(t,e){t.exports=["cent","copy","divide","gt","lt","not","para","times"]},function(t,e,r){"use strict";t.exports=e=function(t){return t.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,function(t){return"-"+t.toLowerCase()})},e.reverse=function(t){return t.replace(/-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g,function(t){return t.slice(1).toUpperCase()})}},function(t,e,r){"use strict";function n(t,e){var r,n,u,A,k,q,E,O,T,S,L,D,C=e||{},j=C.delimiter,I=C.start,N=C.end,R=C.align,U=C.stringLength||i,B=0,P=-1,z=t.length,_=[];for(R=R?R.concat():[],null!==j&&void 0!==j||(j=x+y+x),null!==I&&void 0!==I||(I=y+x),null!==N&&void 0!==N||(N=x+y);++P<z;)for(A=t[P],q=-1,A.length>B&&(B=A.length);++q<B;)E=A[q]?s(A[q]):null,_[q]||(_[q]=g),E>_[q]&&(_[q]=E);for("string"==typeof R&&(R=a(B,R).split("")),q=-1;++q<B;)r=R[q],"string"==typeof r&&(r=r.charAt(0).toLowerCase()),-1===m.indexOf(r)&&(r=d),R[q]=r;for(P=-1,u=[];++P<z;){for(A=t[P],q=-1,k=[];++q<B;)T=A[q],T=o(T),R[q]===h?(E=s(T),O=_[q]+(c.test(T)?0:1)-(U(T)-E),k[q]=T+a(O-1)):k[q]=T;u[P]=k}for(_=[],P=-1;++P<z;)for(k=u[P],q=-1;++q<B;)T=k[q],_[q]||(_[q]=g),(O=U(T))>_[q]&&(_[q]=O);for(P=-1;++P<z;){if(k=u[P],q=-1,!1!==C.pad)for(;++q<B;)T=k[q],E=_[q]-(U(T)||0),S=a(E),R[q]===f||R[q]===h?T=S+T:R[q]===p?(E/=2,E%1==0?(L=E,D=E):(L=E+.5,D=E-.5),T=a(L)+T+a(D)):T+=S,k[q]=T;u[P]=k.join(j)}if(!1!==C.rule){for(q=-1,n=[];++q<B;)!1===C.pad?(T=t[0][q],S=U(o(T)),S=S>g?S:g):S=_[q],r=R[q],T=r===f||r===d?b:v,T+=a(S-2,b),T+=r!==l&&r!==d?v:b,n[q]=T;u.splice(1,0,n.join(j))}return I+u.join(N+w+I)+N}function o(t){return null===t||void 0===t?"":String(t)}function i(t){return String(t).length}function a(t,e){return Array(t+1).join(e||x)}function s(t){var e=u.exec(t);return e?e.index+1:t.length}t.exports=n;var c=/\./,u=/\.[^.]*$/,l="l",f="r",p="c",h=".",d="",m=[l,f,p,h,d],g=3,v=":",b="-",y="|",x=" ",w="\n"},function(t,e,r){"use strict";function n(t){var e={};return t.replace(a,function(t,r,n,o,i){var a=n||o||i||"";return"true"===a||""===a?a=!0:"false"===a?a=!1:isNaN(a)||(a=Number(a)),e[r]=a,""})?null:e}function o(t){var e,r,o;return t&&t.type===i?(e=t.value,(r=e.match(s))&&r[1].length===e.length?(o=n(r[3]||""),o?{name:r[2],attributes:r[4]||"",parameters:o,node:t}:null):null):null}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module mdast:comment-marker
 * @fileoverview Parse a comment marker.
 */
var i="html",a=new RegExp("\\s+([-a-z0-9_]+)(?:=(?:\"((?:\\\\[\\s\\S]|[^\"])+)\"|'((?:\\\\[\\s\\S]|[^'])+)'|((?:\\\\[\\s\\S]|[^\"'\\s])+)))?","gi"),s=new RegExp("(\\s*\x3c!--\\s*([a-zA-Z0-9-]+)(\\s+([\\s\\S]*?))?\\s*--\x3e\\s*)");t.exports=o},function(t,e,r){"use strict";function n(t,e){function r(t){t.children&&s(t)}function n(t,r,n){var i=n.children,a=r&&i[r-1];if(a&&t.type===a.type&&o(a,e)&&o(t,e))return t.value&&(a.value+=t.value),t.children&&(a.children=a.children.concat(t.children)),i.splice(r,1),a.position&&t.position&&(a.position.end=t.position.end),r}var s=a(n);return i(t,r),t}function o(t,e){var r,n;return"text"===t.type?!t.position||(r=t.position.start,n=t.position.end,r.line!==n.line||n.column-r.column===t.value.length):e&&"blockquote"===t.type}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module mdast:util:compact
 * @fileoverview Make an MDAST tree compact.
 */
var i=r(1),a=r(445);t.exports=n},function(t,e,r){"use strict";function n(t,e){return i(o(t,e))}function o(t,e){function r(t){var e=a(t.identifier);c(o,e)||(o[e]=t)}function n(t){o[a(t.identifier)]=t}var o={};if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return s(t,"definition",e&&e.commonmark?r:n),o}function i(t){function e(e){var r=e&&a(e);return r&&c(t,r)?t[r]:null}return e}function a(t){return t.toUpperCase()}var s=r(1),c=r(4);t.exports=n},function(t,e,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module mdast:util:heading-style
 * @fileoverview Utility to get the style of an mdast heading.
 */
function n(t,e){return t<3?"atx":"atx"===e||"setext"===e?e:null}function o(t,e){var r=t.children[t.children.length-1],o=t.depth,i=t&&t.position&&t.position.end,a=r&&r.position&&r.position.end;return i?r?a.line+1===i.line?"setext":a.column+o<i.column?"atx-closed":n(o,e):i.column-1<=2*o?n(o,e):"atx-closed":null}t.exports=o},function(t,e,r){"use strict";t.exports=r(302)},function(t,e,r){"use strict";function n(t){var e,r=t.footnotes,n=r.length,s=-1,c=[];if(!n)return null;for(;++s<n;)e=r[s],c[s]={type:"listItem",data:{hProperties:{id:"fn-"+e.identifier}},children:e.children.concat({type:"link",url:"#fnref-"+e.identifier,data:{hProperties:{className:["footnote-backref"]}},children:[{type:"text",value:"↩"}]}),position:e.position};return t(null,"div",{className:["footnotes"]},a([o(t),i(t,{type:"list",ordered:!0,children:c})],!0))}t.exports=n;var o=r(139),i=r(138),a=r(32)},function(t,e,r){"use strict";function n(t,e){return t(e,"blockquote",o(i(t,e),!0))}t.exports=n;var o=r(32),i=r(7)},function(t,e,r){"use strict";function n(t,e){return[t(e,"br"),o("text","\n")]}t.exports=n;var o=r(14)},function(t,e,r){"use strict";function n(t,e){var r=e.value?o(e.value+"\n"):"",n=e.lang&&e.lang.match(/^[^ \t]+(?=[ \t]|$)/),a={};return n&&(a.className=["language-"+n]),t(e.position,"pre",[t(e,"code",a,[i("text",r)])])}t.exports=n;var o=r(230),i=r(14)},function(t,e,r){"use strict";function n(t,e){return t(e,"del",o(t,e))}t.exports=n;var o=r(7)},function(t,e,r){"use strict";function n(t,e){return t(e,"em",o(t,e))}t.exports=n;var o=r(7)},function(t,e,r){"use strict";function n(t,e){for(var r=[],n=1,i=t.footnotes,a=i.length,s=-1;++s<a;)r[s]=i[s].identifier;for(;-1!==r.indexOf(String(n));)n++;return n=String(n),i.push({type:"footnoteDefinition",identifier:n,children:e.children,position:e.position}),o(t,{type:"footnoteReference",identifier:n,position:e.position})}t.exports=n;var o=r(137)},function(t,e,r){"use strict";function n(t,e){return t(e,"h"+e.depth,o(t,e))}t.exports=n;var o=r(7)},function(t,e,r){"use strict";function n(t,e){return t.dangerous?t.augment(e,o("raw",e.value)):null}t.exports=n;var o=r(14)},function(t,e,r){"use strict";function n(t,e){var r=t.definition(e.identifier),n={src:o(r&&r.url||""),alt:e.alt};return r&&null!=r.title&&(n.title=r.title),i(t,e,r)||t(e,"img",n)}t.exports=n;var o=r(54),i=r(136)},function(t,e,r){"use strict";function n(t,e){var r={src:o(e.url),alt:e.alt};return null!=e.title&&(r.title=e.title),t(e,"img",r)}var o=r(54);t.exports=n},function(t,e,r){"use strict";function n(){return null}t.exports={blockquote:r(282),break:r(283),code:r(284),delete:r(285),emphasis:r(286),footnoteReference:r(137),footnote:r(287),heading:r(288),html:r(289),imageReference:r(290),image:r(291),inlineCode:r(293),linkReference:r(294),link:r(295),listItem:r(296),list:r(138),paragraph:r(297),root:r(298),strong:r(299),table:r(300),text:r(301),thematicBreak:r(139),yaml:n,definition:n,footnoteDefinition:n}},function(t,e,r){"use strict";function n(t,e){return t(e,"code",[i("text",o(e.value))])}t.exports=n;var o=r(100),i=r(14)},function(t,e,r){"use strict";function n(t,e){var r=t.definition(e.identifier),n={href:o(r&&r.url||"")};return r&&null!=r.title&&(n.title=r.title),i(t,e,r)||t(e,"a",n,a(t,e))}t.exports=n;var o=r(54),i=r(136),a=r(7)},function(t,e,r){"use strict";function n(t,e){var r={href:o(e.url)};return null!=e.title&&(r.title=e.title),t(e,"a",r,i(t,e))}var o=r(54),i=r(7);t.exports=n},function(t,e,r){"use strict";function n(t,e,r){var n,s=e.children,c=s[0],u=(!r||!r.loose)&&c&&c.children&&1===s.length,l=a(t,u?c:e),f={};return"boolean"==typeof e.checked&&(u||c&&"paragraph"===c.type||l.unshift(t(null,"p",[])),n=u?l:l[0].children,0!==n.length&&n.unshift(o("text"," ")),n.unshift(t(null,"input",{type:"checkbox",checked:e.checked,disabled:!0})),f.className=["task-list-item"]),u||0===l.length||(l=i(l,!0)),t(e,"li",f,l)}t.exports=n;var o=r(14),i=r(32),a=r(7)},function(t,e,r){"use strict";function n(t,e){return t(e,"p",o(t,e))}t.exports=n;var o=r(7)},function(t,e,r){"use strict";function n(t,e){return t.augment(e,o("root",i(a(t,e))))}t.exports=n;var o=r(14),i=r(32),a=r(7)},function(t,e,r){"use strict";function n(t,e){return t(e,"strong",o(t,e))}t.exports=n;var o=r(7)},function(t,e,r){"use strict";function n(t,e){for(var r,n,s,c,u,l=e.children,f=l.length,p=e.align,h=p.length,d=[];f--;){for(n=l[f].children,c=0===f?"th":"td",r=h,s=[];r--;)u=n[r],s[r]=t(u,c,{align:p[r]},u?i(a(t,u)):[]);d[f]=t(l[f],"tr",i(s,!0))}return t(e,"table",i([t(d[0].position,"thead",i([d[0]],!0)),t({start:o.start(d[1]),end:o.end(d[d.length-1])},"tbody",i(d.slice(1),!0))],!0))}t.exports=n;var o=r(17),i=r(32),a=r(7)},function(t,e,r){"use strict";function n(t,e){return t.augment(e,o("text",i(e.value)))}t.exports=n;var o=r(14),i=r(442)},function(t,e,r){"use strict";function n(t,e){function r(t,e){var r,n;return t&&"data"in t&&(r=t.data,"element"===e.type&&r.hName&&(e.tagName=r.hName),"element"===e.type&&r.hProperties&&(e.properties=i(e.properties,r.hProperties)),e.children&&r.hChildren&&(e.children=r.hChildren)),n=t&&t.position?t:{position:t},u(n)||(e.position={start:c.start(n),end:c.end(n)}),e}function n(t,e,n,o){return null==o&&"object"==typeof n&&"length"in n&&(o=n,n={}),r(t,{type:"element",tagName:e,properties:n||{},children:o||[]})}function o(t){n.footnotes.push(t)}var a=e||{},f=a.allowDangerousHTML;return n.dangerous=f,n.definition=l(t,a),n.footnotes=[],n.augment=r,n.handlers=i(h,a.handlers||{}),s(t,"footnoteDefinition",o),n}function o(t,e){var r=n(t,e),o=f(r,t),i=p(r);return o&&o.children&&i&&(o.children=o.children.concat(a("text","\n"),i)),o}t.exports=o;var i=r(10),a=r(14),s=r(1),c=r(17),u=r(6),l=r(278),f=r(140),p=r(281),h=r(292)},,,,,,,,,,,,,function(t,e,r){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,s,c=n(t),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var l in r)i.call(r,l)&&(c[l]=r[l]);if(o){s=o(r);for(var f=0;f<s.length;f++)a.call(r,s[f])&&(c[s[f]]=r[s[f]])}}return c}},,,,,,,function(t,e,r){"use strict";function n(t,e){return(t&e)===e}function o(t){return t.toLowerCase()}function i(t){var e=o(t);return f[l[e]||e]}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @copyright 2013-2015 Facebook Inc.
 * @license MIT
 * @module property-information
 * @fileoverview Information for HTML properties.
 */
var a,s,c,u={abbr:null,accept:256,acceptCharset:128,accessKey:128,action:null,allowFullScreen:9,allowTransparency:1,alt:null,async:8,autoComplete:128,autoFocus:8,autoPlay:8,capture:9,cellPadding:null,cellSpacing:null,challenge:1,charSet:1,checked:10,cite:null,className:129,cols:49,colSpan:null,command:null,content:null,contentEditable:null,contextMenu:1,controls:10,coords:272,crossOrigin:null,data:null,dateTime:1,default:8,defer:8,dir:null,dirName:null,disabled:9,download:64,draggable:null,dropzone:128,encType:null,form:1,formAction:1,formEncType:1,formMethod:1,formNoValidate:8,formTarget:1,frameBorder:1,headers:128,height:49,hidden:9,high:16,href:null,hrefLang:null,htmlFor:128,httpEquiv:128,icon:null,id:2,inputMode:1,is:1,isMap:8,keyParams:1,keyType:1,kind:null,label:null,lang:null,list:1,loop:10,low:16,manifest:1,marginHeight:16,marginWidth:16,max:null,maxLength:49,media:1,mediaGroup:null,menu:null,method:null,min:null,minLength:49,multiple:10,muted:10,name:null,nonce:null,noValidate:8,open:8,optimum:16,pattern:null,ping:128,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:10,rel:129,required:8,reversed:8,role:1,rows:49,rowSpan:48,sandbox:128,scope:null,scoped:8,scrolling:null,seamless:9,selected:10,shape:null,size:49,sizes:129,sortable:8,sorted:128,span:48,spellCheck:null,src:null,srcDoc:2,srcLang:null,srcSet:257,start:16,step:null,style:null,summary:null,tabIndex:16,target:null,title:null,translate:null,type:null,typeMustMatch:8,useMap:null,value:2,volume:48,width:17,wmode:1,wrap:null,autoCapitalize:null,autoCorrect:null,autoSave:null,itemProp:129,itemScope:9,itemType:129,itemID:1,itemRef:129,property:null,results:null,security:1,unselectable:1,xmlLang:1,xmlBase:1},l={xmlbase:"xml:base",xmllang:"xml:lang",classname:"class",htmlfor:"for",httpequiv:"http-equiv",acceptcharset:"accept-charset"},f={};for(a in u)s=o(a),s=l[s]||s,c=u[a],f[s]={name:s,propertyName:a,mustUseAttribute:n(c,1),mustUseProperty:n(c,2),boolean:n(c,8),overloadedBoolean:n(c,64),numeric:n(c,16),positiveNumeric:n(c,48),commaSeparated:n(c,256),spaceSeparated:n(c,128)};i.all=f,t.exports=i},,,,,,,,,,,,function(t,e,r){"use strict";function n(t){function e(t,e){var l,f=t&&t.type&&"root"===t.type,p=i(t,{allowDangerousHTML:!n,handlers:u});return e.extname&&(e.extname=".html"),n&&(p=s(p,c)),l=a(p,o(r,{allowDangerousHTML:!n})),f&&"\n"!==l.charAt(l.length-1)&&(l+="\n"),l}var r=t||{},n=r.sanitize,c=n&&"object"==typeof n?n:null,u=r.handlers||{};this.Compiler=e}var o=r(10),i=r(280),a=r(244),s=r(242);t.exports=n},function(t,e,r){"use strict";function n(t,e){var r=e.toString(),n=r.length-1;n>-1&&"\n"!==r.charAt(n)&&e.message("Missing newline character at end of file")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module final-newline
 * @fileoverview
 *   Warn when a newline at the end of a file is missing.
 *
 *   This rule allows empty files.
 *
 *   See [StackExchange](http://unix.stackexchange.com/questions/18743) for
 *   why.
 */
var o=r(5);t.exports=o("remark-lint:final-newline",n)},function(t,e,r){"use strict";function n(t,e){function r(t){var r,o=a.start(t).offset,i=a.end(t).offset;s(t)||(r=n.slice(o,i).split("\n",1)[0].replace(/\r$/,""),r.length>2&&e.message("Use two spaces for hard line breaks",t))}var n=e.toString();i(t,"break",r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module hard-break-spaces
 * @fileoverview
 *   Warn when too many spaces are used to create a hard break.
 *
 * @example {"name": "valid.md"}
 *
 *   <!--Note: `·` represents ` `-->
 *
 *   Lorem ipsum··
 *   dolor sit amet
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   <!--Note: `·` represents ` `-->
 *
 *   Lorem ipsum···
 *   dolor sit amet.
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:12-4:1: Use two spaces for hard line breaks
 */
var o=r(5),i=r(1),a=r(17),s=r(6);t.exports=o("remark-lint:hard-break-spaces",n)},function(t,e,r){"use strict";function n(t,e){function r(t){t.children.forEach(n)}function n(t){var r,n=t.children[0],a=u(t).offset,s=u(n).offset;c(t)||0!==(r=o.slice(a,s).match(/^\s*/)[0].length)&&(a=u(n),e.message("Incorrect indentation before bullet: remove "+r+" "+i("space",r),{line:a.line,column:a.column-r}))}var o=e.toString();a(t,"list",r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module list-item-bullet-indent
 * @fileoverview
 *   Warn when list item bullets are indented.
 *
 * @example {"name": "valid.md"}
 *
 *   Paragraph.
 *
 *   * List item
 *   * List item
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   Paragraph.
 *
 *    * List item
 *    * List item
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:3: Incorrect indentation before bullet: remove 1 space
 *   4:3: Incorrect indentation before bullet: remove 1 space
 */
var o=r(5),i=r(86),a=r(1),s=r(17),c=r(6);t.exports=o("remark-lint:list-item-bullet-indent",n);var u=s.start},function(t,e,r){"use strict";function n(t,e,r){function n(t){function n(n){var a,s,c,l,f,p,h=n.children[0],d=u(n).offset,m=u(h).offset;c=o.slice(d,m),c=c.replace(/\[[x ]?]\s*$/i,""),a=c.trimRight().length,s=4*Math.ceil(a/4),l="tab-size"===r?s:"space"===r?a+1:t.loose?s:a+1,c.length!==l&&(f=l-c.length,p=f>0?"add":"remove",f=Math.abs(f),e.message("Incorrect list-item indent: "+p+" "+f+" "+i("space",f),u(h)))}var a=t.children;c(t)||a.forEach(n)}var o=e.toString();r="string"==typeof r?r:"tab-size",!0!==l[r]&&e.fail("Invalid list-item indent style `"+r+"`: use either `'tab-size'`, `'space'`, or `'mixed'`"),a(t,"list",n)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module list-item-indent
 * @fileoverview
 *   Warn when the spacing between a list item’s bullet and its content
 *   violates a given style.
 *
 *   Options: `string`, either `'tab-size'`, `'mixed'`, or `'space'`,
 *   default: `'tab-size'`.
 *
 * @example {"name": "valid.md"}
 *
 *   The below style is called `tab-size`.
 *
 *   *   List
 *       item.
 *
 *   Paragraph.
 *
 *   11. List
 *       item.
 *
 *   Paragraph.
 *
 *   *   List
 *       item.
 *
 *   *   List
 *       item.
 *
 * @example {"name": "valid.md", "setting": "mixed"}
 *
 *   * List item.
 *
 *   Paragraph.
 *
 *   11. List item
 *
 *   Paragraph.
 *
 *   *   List
 *       item.
 *
 *   *   List
 *       item.
 *
 * @example {"name": "valid.md", "setting": "space"}
 *
 *   * List item.
 *
 *   Paragraph.
 *
 *   11. List item
 *
 *   Paragraph.
 *
 *   * List
 *     item.
 *
 *   * List
 *     item.
 *
 * @example {"name": "invalid.md", "setting": "space", "label": "input"}
 *
 *   *   List
 *       item.
 *
 * @example {"name": "invalid.md", "setting": "space", "label": "output"}
 *
 *    1:5: Incorrect list-item indent: remove 2 spaces
 *
 * @example {"name": "invalid.md", "setting": "tab-size", "label": "input"}
 *
 *   * List
 *     item.
 *
 * @example {"name": "invalid.md", "setting": "tab-size", "label": "output"}
 *
 *    1:3: Incorrect list-item indent: add 2 spaces
 *
 * @example {"name": "invalid.md", "setting": "mixed", "label": "input"}
 *
 *   *   List item.
 *
 * @example {"name": "invalid.md", "setting": "mixed", "label": "output"}
 *
 *    1:5: Incorrect list-item indent: remove 2 spaces
 *
 * @example {"name": "invalid.md", "setting": "invalid", "label": "output", "config": {"positionless": true}}
 *
 *    1:1: Invalid list-item indent style `invalid`: use either `'tab-size'`, `'space'`, or `'mixed'`
 */
var o=r(5),i=r(86),a=r(1),s=r(17),c=r(6);t.exports=o("remark-lint:list-item-indent",n);var u=s.start,l={"tab-size":!0,mixed:!0,space:!0}},function(t,e,r){"use strict";function n(t,e){function r(t){var r=u(t.children[0]).column,n=l(t.children[t.children.length-1]).column,o=u(t).column,i=l(t).column;s(t)||o!==r-1||i!==n+1||f.test(c(t))||e.message("All automatic links must start with a protocol",t)}i(t,"link",r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-auto-link-without-protocol
 * @fileoverview
 *   Warn for angle-bracketed links without protocol.
 *
 * @example {"name": "valid.md"}
 *
 *   <http://www.example.com>
 *   <mailto:foo@bar.com>
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   <www.example.com>
 *   <foo@bar.com>
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   2:1-2:14: All automatic links must start with a protocol
 */
var o=r(5),i=r(1),a=r(17),s=r(6),c=r(81);t.exports=o("remark-lint:no-auto-link-without-protocol",n);var u=a.start,l=a.end,f=/^[a-z][a-z+.-]+:\/?/i},function(t,e,r){"use strict";function n(t,e){function r(t){function r(t,r){for(var a,s=i+r+1,c=o.toOffset({line:s,column:t})-1;++c<u;){if(">"===(a=n.charAt(c)))return;if(" "!==a&&"\t"!==a)break}e.message("Missing caret in blockquote",{line:s,column:t})}var i=s.start(t).line,a=t.position&&t.position.indent;!c(t)&&a&&0!==a.length&&a.forEach(r)}var n=e.toString(),o=i(e),u=n.length;a(t,"blockquote",r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-blockquote-without-caret
 * @fileoverview
 *   Warn when blank lines without carets are found in a blockquote.
 *
 * @example {"name": "valid.md"}
 *
 *   > Foo...
 *   >
 *   > ...Bar.
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   > Foo...
 *
 *   > ...Bar.
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   2:1: Missing caret in blockquote
 */
var o=r(5),i=r(94),a=r(1),s=r(17),c=r(6);t.exports=o("remark-lint:no-blockquote-without-caret",n)},function(t,e,r){"use strict";function n(t,e){function r(t){var r,o=n[t.identifier];a(t)||(o&&o.type&&(r=i.start(o),e.message("Do not use definitions with the same identifier ("+r.line+":"+r.column+")",t)),n[t.identifier]=t)}var n={};s(t,"definition",r),s(t,"footnoteDefinition",r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-duplicate-definitions
 * @fileoverview
 *   Warn when duplicate definitions are found.
 *
 * @example {"name": "valid.md"}
 *
 *   [foo]: bar
 *   [baz]: qux
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   [foo]: bar
 *   [foo]: qux
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   2:1-2:11: Do not use definitions with the same identifier (1:1)
 */
var o=r(5),i=r(17),a=r(6),s=r(1);t.exports=o("remark-lint:no-duplicate-definitions",n)},function(t,e,r){"use strict";function n(t,e){function r(t){var r,o,i,c,p,h,d,m=t.depth,g=t.children,v=a(t,"atx");if(!u(t)){if("atx"===v||"atx-closed"===v){for(o=l(t),h=o.offset,d=n.charAt(h);d&&"#"!==d;)h++,d=n.charAt(h);if(!d)return;if(h=m+(h-o.offset),!(r=l(g[0]).column))return;c=r-o.column-1-h,c&&(p=c>0?"Remove":"Add",c=Math.abs(c),e.message(p+" "+c+" "+s("space",c)+" before this heading’s content",l(g[0])))}"atx-closed"===v&&(i=f(g[g.length-1]),(c=f(t).column-i.column-1-m)&&e.message("Remove "+c+" "+s("space",c)+" after this heading’s content",i))}}var n=e.toString();i(t,"heading",r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-heading-content-indent
 * @fileoverview
 *   Warn when a heading’s content is indented.
 *
 * @example {"name": "valid.md"}
 *
 *   <!-- Note: the middle-dots represent spaces -->
 *
 *   #·Foo
 *
 *   ## Bar·##
 *
 *     ##·Baz
 *
 *   Setext headings are not affected.
 *
 *   Baz
 *   ===
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   <!-- Note: the middle-dots represent spaces -->
 *
 *   #··Foo
 *
 *   ## Bar··##
 *
 *     ##··Baz
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:4: Remove 1 space before this heading’s content
 *   5:7: Remove 1 space after this heading’s content
 *   7:7: Remove 1 space before this heading’s content
 *
 * @example {"name": "empty-heading.md"}
 *
 *   #··
 *
 * @example {"name": "tight.md", "config":{"pedantic":true}, "label": "input"}
 *
 *   In pedantic mode, headings without spacing can also be detected:
 *
 *   ##No spacing left, too much right··##
 *
 * @example {"name": "tight.md", "label": "output"}
 *
 *   3:3: Add 1 space before this heading’s content
 *   3:34: Remove 1 space after this heading’s content
 */
var o=r(5),i=r(1),a=r(279),s=r(86),c=r(17),u=r(6);t.exports=o("remark-lint:no-heading-content-indent",n);var l=c.start,f=c.end},function(t,e,r){"use strict";function n(t,e){function r(t){var r,n=t.type;a(t)||"emphasis"!==n&&"strong"!==n&&"delete"!==n&&"image"!==n&&"link"!==n||(r=s(t)," "!==r.charAt(0)&&" "!==r.charAt(r.length-1)||e.message("Don’t pad `"+n+"` with inner spaces",t))}i(t,r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-inline-padding
 * @fileoverview
 *   Warn when inline nodes are padded with spaces between markers and
 *   content.
 *
 *   Warns for emphasis, strong, delete, image, and link.
 *
 * @example {"name": "valid.md"}
 *
 *   Alpha, *bravo*, _charlie_, [delta](http://echo.fox/trot)
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   Alpha, * bravo *, _ charlie _, [ delta ](http://echo.fox/trot)
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:8-1:17: Don’t pad `emphasis` with inner spaces
 *   1:19-1:30: Don’t pad `emphasis` with inner spaces
 *   1:32-1:63: Don’t pad `link` with inner spaces
 */
var o=r(5),i=r(1),a=r(6),s=r(81);t.exports=o("remark-lint:no-inline-padding",n)},function(t,e,r){"use strict";function n(t,e){function r(t){var r=u(t.children[0]).column,n=l(t.children[t.children.length-1]).column,o=u(t).column,i=l(t).column,a=c(t);s(t)||o!==r||i!==n||t.url!==f+a&&t.url!==a||e.message("Don’t use literal URLs without angle brackets",t)}i(t,"link",r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-literal-urls
 * @fileoverview
 *   Warn when URLs without angle-brackets are used.
 *
 * @example {"name": "valid.md"}
 *
 *   <http://foo.bar/baz>
 *   <mailto:qux@quux.com>
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   http://foo.bar/baz
 *
 *   mailto:qux@quux.com
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:19: Don’t use literal URLs without angle brackets
 */
var o=r(5),i=r(1),a=r(17),s=r(6),c=r(81);t.exports=o("remark-lint:no-literal-urls",n);var u=a.start,l=a.end,f="mailto:"},function(t,e,r){"use strict";function n(t,e){function r(t){a(t)||"shortcut"===t.referenceType&&e.message("Use the trailing [] on reference images",t)}i(t,"imageReference",r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-shortcut-reference-image
 * @fileoverview
 *   Warn when shortcut reference images are used.
 *
 * @example {"name": "valid.md"}
 *
 *   ![foo][]
 *
 *   [foo]: http://foo.bar/baz.png
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   ![foo]
 *
 *   [foo]: http://foo.bar/baz.png
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:7: Use the trailing [] on reference images
 */
var o=r(5),i=r(1),a=r(6);t.exports=o("remark-lint:no-shortcut-reference-image",n)},function(t,e,r){"use strict";function n(t,e){function r(t){a(t)||"shortcut"===t.referenceType&&e.message("Use the trailing [] on reference links",t)}i(t,"linkReference",r)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-shortcut-reference-link
 * @fileoverview
 *   Warn when shortcut reference links are used.
 *
 * @example {"name": "valid.md"}
 *
 *   [foo][]
 *
 *   [foo]: http://foo.bar/baz
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   [foo]
 *
 *   [foo]: http://foo.bar/baz
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:6: Use the trailing [] on reference links
 */
var o=r(5),i=r(1),a=r(6);t.exports=o("remark-lint:no-shortcut-reference-link",n)},function(t,e,r){"use strict";function n(t,e){function r(t){i(t)||(o[t.identifier.toUpperCase()]=!0)}function n(t){i(t)||o[t.identifier.toUpperCase()]||e.message("Found reference to undefined definition",t)}var o={};a(t,"definition",r),a(t,"footnoteDefinition",r),a(t,"imageReference",n),a(t,"linkReference",n),a(t,"footnoteReference",n)}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module no-undefined-references
 * @fileoverview
 *   Warn when references to undefined definitions are found.
 *
 * @example {"name": "valid.md"}
 *
 *   [foo][]
 *
 *   [foo]: https://example.com
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   [bar][]
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:8: Found reference to undefined definition
 */
var o=r(5),i=r(6),a=r(1);t.exports=o("remark-lint:no-undefined-references",n)},function(t,e,r){"use strict";function n(t,e){function r(t){i(t)||(s[t.identifier.toUpperCase()]={node:t,used:!1})}function n(t){var e=s[t.identifier.toUpperCase()];!i(t)&&e&&(e.used=!0)}var o,s={};a(t,"definition",r),a(t,"footnoteDefinition",r),a(t,"imageReference",n),a(t,"linkReference",n),a(t,"footnoteReference",n);for(o in s)s[o].used||e.message("Found unused definition",s[o].node)}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module no-unused-definitions
 * @fileoverview
 *   Warn when unused definitions are found.
 *
 * @example {"name": "valid.md"}
 *
 *   [foo][]
 *
 *   [foo]: https://example.com
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   [bar]: https://example.com
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:27: Found unused definition
 */
var o=r(5),i=r(6),a=r(1);t.exports=o("remark-lint:no-unused-definitions",n)},function(t,e,r){"use strict";function n(t,e,r){function n(t){function n(t){var n,i=t.children[0],a=c(t).offset,u=c(i).offset;s(t)||(n=o.slice(a,u).replace(/\s|\d/g,""),n=n.replace(/\[[x ]?]\s*$/i,""),r?n!==r&&e.message("Marker style should be `"+r+"`",t):r=n)}var i=t.children;t.ordered&&i.forEach(n)}var o=e.toString();r="string"!=typeof r||"consistent"===r?null:r,!0!==u[r]&&e.fail("Invalid ordered list-item marker style `"+r+"`: use either `'.'` or `')'`"),i(t,"list",n)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module ordered-list-marker-style
 * @fileoverview
 *   Warn when the list-item marker style of ordered lists violate a given
 *   style.
 *
 *   Options: `string`, either `'consistent'`, `'.'`, or `')'`,
 *   default: `'consistent'`.
 *
 *   Note that `)` is only supported in CommonMark.
 *
 *   The default value, `consistent`, detects the first used list
 *   style, and will warn when a subsequent list uses a different
 *   style.
 *
 * @example {"name": "valid.md"}
 *
 *   By default (`consistent`), if one style used throughout the file,
 *   that’s OK.
 *
 *   1.  Foo
 *
 *
 *   1.  Bar
 *
 *   Unordered lists are not affected by this rule.
 *
 *   * Foo
 *
 * @example {"name": "valid.md", "setting": "."}
 *
 *   1.  Foo
 *
 *   2.  Bar
 *
 * @example {"name": "valid.md", "setting": ")", "config": {"commonmark": true}}
 *
 *   <!-- This is also valid when `consistent`.
 *        But it does require commonmark. -->
 *
 *   1)  Foo
 *
 *   2)  Bar
 *
 * @example {"name": "invalid.md", "label": "input", "config": {"commonmark": true}}
 *
 *   1.  Foo
 *
 *   2)  Bar
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:1-3:8: Marker style should be `.`
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "!", "config": {"positionless": true}}
 *
 *   1:1: Invalid ordered list-item marker style `!`: use either `'.'` or `')'`
 */
var o=r(5),i=r(1),a=r(17),s=r(6);t.exports=o("remark-lint:ordered-list-marker-style",n);var c=a.start,u={")":!0,".":!0,null:!0}},function(t,e,r){"use strict";function n(){this.use(o)}function o(){return i({name:"lint",source:"remark-lint"})}var i=r(351);t.exports=n},function(t,e,r){"use strict";function n(t){function e(e,p){function h(t,e,r){var o=!n||-1!==n.indexOf(t);return o||p.warn("Unknown rule: cannot "+e+" `'"+t+"'`",r),o}function d(t){var e=t?x[t]:w;return e&&0!==e.length?e[e.length-1].state:t?i?-1!==l.indexOf(t):-1===f.indexOf(t):!i}function m(t,e,r){var n,o,i=r?x[r]:w;if(i||(i=x[r]=[]),o=d(r),n=e,n!==o&&i.push({state:n,position:t}),!r)for(r in x)m(t,e,r)}function g(t,e,r){for(var n,o=e&&e.length;--o>-1;)if(n=e[o],n.position&&n.position.line&&n.position.column&&(n.position.line<t.line||n.position.line===t.line&&n.position.column<t.column))return!0===n.state;return r?i?-1!==l.indexOf(r):-1===f.indexOf(r):b||i}var v=a(p),b=!i,y=o(e,p),x={},w=[];s(e,"html",function(e,r,n){var o,a,s,l,f,d,g,v,b=c(e);if(b&&b.name===t.name){if(o=b.attributes.split(/\s/g),s=o.shift(),d=n.children[r+1],g=b.node.position&&b.node.position.start,v=d&&d.position&&d.position.end,!s||!0==!u[s])return p.fail("Unknown keyword `"+s+"`: expected `'enable'`, `'disable'`, or `'ignore'`",b.node);for(f=o.length,l=-1;++l<f;)a=o[l],h(a,s,b.node)&&(m(g,"enable"===s,a),"ignore"===s&&m(v,!0,a));f||("ignore"===s?(m(g,!1),m(v,!0)):(m(g,"enable"===s),i="enable"!==s))}}),p.messages=p.messages.filter(function(t){var e,n=y.length,o=t.ruleId,i=x[o];if(!t.source||-1===r.indexOf(t.source))return!0;for(t.line||(t.line=1),t.column||(t.column=1),e=v.toOffset(t);n--;)if(y[n].start<=e&&y[n].end>e)return!1;return g(t,i,o)&&g(t,w)})}var r,n,i,l,f,p=t&&t.name;if(!p)throw new Error("Expected `name` in `options`, got `"+p+"`");return n=t.known,i=t.reset,l=t.enable||[],f=t.disable||[],r=t.source,r?"string"==typeof r&&(r=[r]):r=[p],e}function o(t,e){function r(t){var e=t.position;n(e&&e.start&&e.start.offset),t.children||n(e&&e.end&&e.end.offset)}function n(t){if(null===t||void 0===t)return void(c=!0);a>=t||(c&&(u.push({start:a,end:t}),c=!1),a=t)}var o=t.children[t.children.length-1],a=0,c=!1,u=[];return s(t,r),o&&o.position&&o.position.end&&a===o.position.end.offset&&""!==i(e.toString().slice(a))&&(n(),n(t&&t.position&&t.position.end&&t.position.end.offset-1)),u}var i=r(19),a=r(94),s=r(1),c=r(276),u={enable:!0,disable:!0,ignore:!0};t.exports=n},function(t,e,r){"use strict";function n(t){var e=o(a);e.prototype.options=i(e.prototype.options,this.data("settings"),t),this.Parser=e}var o=r(158),i=r(10),a=r(362);t.exports=n,n.Parser=a},function(t,e,r){"use strict";function n(t){function e(e){for(var r=t.offset,n=e.line,o=[];++n&&n in r;)o.push((r[n]||0)+1);return{start:e,indent:o}}function r(e,r,n){3!==n&&t.file.message(e,r)}function n(n,i,a){o(n,{position:e(i),warning:r,text:a,reference:a,textContext:t,referenceContext:t})}function i(t,n){return o(t,{position:e(n),warning:r})}return n.raw=i,n}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:decode
 * @fileoverview Decode entities.
 */
var o=r(55);t.exports=n},function(t,e,r){"use strict";function n(t,e){for(var r=t.indexOf("\n",e);r>e&&" "===t.charAt(r-1);)r--;return r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:break
 * @fileoverview Locate a break.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){return t.indexOf("`",e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:code-inline
 * @fileoverview Locate inline code.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){return t.indexOf("~~",e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:delete
 * @fileoverview Locate strikethrough.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){var r=t.indexOf("*",e),n=t.indexOf("_",e);return-1===n?r:-1===r?n:n<r?n:r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:emphasis
 * @fileoverview Locate italics / emphasis.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){return t.indexOf("\\",e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:escape
 * @fileoverview Locate an escape.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){var r=t.indexOf("**",e),n=t.indexOf("__",e);return-1===n?r:-1===r?n:n<r?n:r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:strong
 * @fileoverview Locate bold / strong / importance.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){var r,n=o.length,i=-1,a=-1;if(!this.options.gfm)return-1;for(;++i<n;)-1!==(r=t.indexOf(o[i],e))&&(r<a||-1===a)&&(a=r);return a}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:url
 * @fileoverview Locate a URL.
 */
t.exports=n;var o=["https://","http://","mailto:"]},function(t,e,r){"use strict";function n(){var t,e=this,r=String(e.file),n={line:1,column:1,offset:0},c=o(n);return r=r.replace(s,a),65279===r.charCodeAt(0)&&(r=r.slice(1),c.column++,c.offset++),t={type:"root",children:e.tokenizeBlock(r,c),position:{start:n,end:e.eof||o(n)}},e.options.position||i(t,!0),t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:parse
 * @fileoverview Parse the document
 */
var o=r(10),i=r(446);t.exports=n;var a="\n",s=/\r\n|\r/g},function(t,e,r){"use strict";function n(t,e){this.file=e,this.offset={},this.options=i(this.options),this.setOptions({}),this.inList=!1,this.inBlock=!1,this.inLink=!1,this.atStart=!0,this.toOffset=s(e).toOffset,this.unescape=c(this,"escape"),this.decode=u(this)}function o(t){var e,r=[];for(e in t)r.push(e);return r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse
 * @fileoverview Markdown parser.
 */
var i=r(10),a=r(157),s=r(94),c=r(391),u=r(353),l=r(390);t.exports=n;var f=n.prototype;f.setOptions=r(363),f.parse=r(361),f.options=r(147),f.exitStart=a("atStart",!0),f.enterList=a("inList",!1),f.enterLink=a("inLink",!1),f.enterBlock=a("inBlock",!1),f.interruptParagraph=[["thematicBreak"],["atxHeading"],["fencedCode"],["blockquote"],["html"],["setextHeading",{commonmark:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],f.interruptList=[["fencedCode",{pedantic:!1}],["thematicBreak",{pedantic:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],f.interruptBlockquote=[["indentedCode",{commonmark:!0}],["fencedCode",{commonmark:!0}],["atxHeading",{commonmark:!0}],["setextHeading",{commonmark:!0}],["thematicBreak",{commonmark:!0}],["html",{commonmark:!0}],["list",{commonmark:!0}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],f.blockTokenizers={yamlFrontMatter:r(389),newline:r(381),indentedCode:r(368),fencedCode:r(367),blockquote:r(365),atxHeading:r(375),thematicBreak:r(387),list:r(380),setextHeading:r(376),html:r(377),footnote:r(374),definition:r(370),table:r(385),paragraph:r(382)},f.inlineTokenizers={escape:r(373),autoLink:r(364),url:r(388),html:r(378),link:r(379),reference:r(383),strong:r(384),emphasis:r(372),deletion:r(371),code:r(369),break:r(366),text:r(386)},f.blockMethods=o(f.blockTokenizers),f.inlineMethods=o(f.inlineTokenizers),f.tokenizeBlock=l("block"),f.tokenizeInline=l("inline"),f.tokenizeFactory=l},function(t,e,r){"use strict";function n(t){var e,r,n=this,s=n.options;if(null==t)t={};else{if("object"!=typeof t)throw new Error("Invalid value `"+t+"` for setting `options`");t=o(t)}for(e in a){if(r=t[e],null==r&&(r=s[e]),"blocks"!==e&&"boolean"!=typeof r||"blocks"===e&&"object"!=typeof r)throw new Error("Invalid value `"+r+"` for setting `options."+e+"`");t[e]=r}return n.options=t,n.escape=i(t),n}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse
 * @fileoverview Markdown parser.
 */
var o=r(10),i=r(135),a=r(147);t.exports=n},function(t,e,r){"use strict";function n(t,e,r){var n,i,p,h,d,m,g,v,b,y,x,w;if(e.charAt(0)===a){for(n=this,i="",p=e.length,h=0,d="",g=!1,v="",h++,i=a;h<p&&" "!==(m=e.charAt(h))&&m!==s&&m!==c&&(":"!==m||e.charAt(h+1)!==u);)d+=m,h++;if(d){if(v+=d,d="",m=e.charAt(h),v+=m,h++,m===c)g=!0;else{if(":"!==m||e.charAt(h+1)!==u)return;v+=u,h++}for(;h<p&&" "!==(m=e.charAt(h))&&m!==s;)d+=m,h++;if(m=e.charAt(h),d&&m===s)return!!r||(v+=d,y=v,i+=v+m,b=t.now(),b.column++,b.offset++,g&&(v.slice(0,f).toLowerCase()===l?(y=y.substr(f),b.column+=f,b.offset+=f):v=l+v),x=n.inlineTokenizers.escape,n.inlineTokenizers.escape=null,w=n.enterLink(),y=n.tokenizeInline(y,b),n.inlineTokenizers.escape=x,w(),t(i)({type:"link",title:null,url:o(v),children:y}))}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:auto-link
 * @fileoverview Tokenise an auto-link.
 */
var o=r(55),i=r(149);t.exports=n,n.locator=i,n.notInLink=!0;var a="<",s=">",c="@",u="/",l="mailto:",f=l.length},function(t,e,r){"use strict";function n(t,e,r){for(var n,l,f,p,h,d,m,g,v,b=this,y=b.offset,x=b.blockTokenizers,w=b.interruptBlockquote,A=t.now(),k=A.line,q=e.length,E=[],O=[],T=[],S=0;S<q&&((l=e.charAt(S))===c||l===s);)S++;if(e.charAt(S)===u){if(r)return!0;for(S=0;S<q;){for(p=e.indexOf(a,S),m=S,g=!1,-1===p&&(p=q);S<q&&((l=e.charAt(S))===c||l===s);)S++;if(e.charAt(S)===u?(S++,g=!0,e.charAt(S)===c&&S++):S=m,h=e.slice(S,p),!g&&!o(h)){S=m;break}if(!g&&(f=e.slice(S),i(w,x,b,[t,f,!0])))break;d=m===S?h:e.slice(m,p),T.push(S-m),E.push(d),O.push(h),S=p+1}for(S=-1,q=T.length,n=t(E.join(a));++S<q;)y[k]=(y[k]||0)+T[S],k++;return v=b.enterBlock(),O=b.tokenizeBlock(O.join(a),A),v(),n({type:"blockquote",children:O})}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:blockquote
 * @fileoverview Tokenise blockquote.
 */
var o=r(19),i=r(87);t.exports=n;var a="\n",s="\t",c=" ",u=">"},function(t,e,r){"use strict";function n(t,e,r){for(var n,o=this,a=o.options.breaks,s=e.length,c=-1,u="";++c<s;){if("\n"===(n=e.charAt(c))){if(!a&&c<i)return;return!!r||(u+=n,t(u)({type:"break"}))}if(" "!==n)return;u+=n}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:break
 * @fileoverview Tokenise a break.
 */
var o=r(354);t.exports=n,n.locator=o;var i=2},function(t,e,r){"use strict";function n(t,e,r){var n,p,h,d,m,g,v,b,y,x,w,A=this,k=A.options,q=e.length+1,E=0,O="";if(k.gfm){for(;E<q&&((h=e.charAt(E))===s||h===a);)O+=h,E++;if(x=E,(h=e.charAt(E))===c||h===u){for(E++,p=h,n=1,O+=h;E<q&&(h=e.charAt(E))===p;)O+=h,n++,E++;if(!(n<l)){for(;E<q&&((h=e.charAt(E))===s||h===a);)O+=h,E++;for(d="",m="";E<q&&(h=e.charAt(E))!==i&&h!==c&&h!==u;)h===s||h===a?m+=h:(d+=m+h,m=""),E++;if(!(h=e.charAt(E))||h===i){if(r)return!0;for(w=t.now(),w.column+=O.length,w.offset+=O.length,O+=d,d=A.decode.raw(A.unescape(d),w),m&&(O+=m),m="",b="",y="",g="",v="";E<q;)if(h=e.charAt(E),g+=b,v+=y,b="",y="",h===i){for(g?(b+=h,y+=h):O+=h,m="",E++;E<q&&(h=e.charAt(E))===s;)m+=h,E++;if(b+=m,y+=m.slice(x),!(m.length>=f)){for(m="";E<q&&(h=e.charAt(E))===p;)m+=h,E++;if(b+=m,y+=m,!(m.length<n)){for(m="";E<q&&((h=e.charAt(E))===s||h===a);)b+=h,y+=h,E++;if(!h||h===i)break}}}else g+=h,y+=h,E++;return O+=g+b,t(O)({type:"code",lang:d||null,value:o(v)})}}}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:code-fenced
 * @fileoverview Tokenise fenced code.
 */
var o=r(92);t.exports=n;var i="\n",a="\t",s=" ",c="~",u="`",l=3,f=4},function(t,e,r){"use strict";function n(t,e,r){for(var n,o,l,f=-1,p=e.length,h="",d="",m="",g="";++f<p;)if(n=e.charAt(f),l)if(l=!1,h+=m,d+=g,m="",g="",n===a)m=n,g=n;else for(h+=n,d+=n;++f<p;){if(!(n=e.charAt(f))||n===a){g=n,m=n;break}h+=n,d+=n}else if(n===c&&e.charAt(f+1)===n&&e.charAt(f+2)===n&&e.charAt(f+3)===n)m+=u,f+=3,l=!0;else if(n===s)m+=n,l=!0;else{for(o="";n===s||n===c;)o+=n,n=e.charAt(++f);if(n!==a)break;m+=o+n,g+=n}if(d)return!!r||t(h)({type:"code",lang:null,value:i(d)})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:code-indented
 * @fileoverview Tokenise indented code.
 */
var o=r(9),i=r(92);t.exports=n;var a="\n",s="\t",c=" ",u=o(c,4)},function(t,e,r){"use strict";function n(t,e,r){for(var n,i,s,c,u,l,f,p,h=e.length,d=0,m="",g="";d<h&&e.charAt(d)===a;)m+=a,d++;if(m){for(u=m,c=d,m="",p=e.charAt(d),s=0;d<h;){if(l=p,p=e.charAt(d+1),l===a?(s++,g+=l):(s=0,m+=l),s&&p!==a){if(s===c){u+=m+g,f=!0;break}m+=g,g=""}d++}if(!f){if(c%2!=0)return;m=""}if(r)return!0;for(n="",i="",h=m.length,d=-1;++d<h;)l=m.charAt(d),o(l)?i+=l:(i&&(n&&(n+=i),i=""),n+=l);return t(u)({type:"inlineCode",value:n})}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:code-inline
 * @fileoverview Tokenise inline code.
 */
var o=r(13),i=r(355);t.exports=n,n.locator=i;var a="`"},function(t,e,r){"use strict";function n(t,e,r){for(var n,a,x,w,A,k,q,E,O=this,T=O.options.commonmark,S=0,L=e.length,D="";S<L&&((w=e.charAt(S))===h||w===p);)D+=w,S++;if((w=e.charAt(S))===d){for(S++,D+=w,x="";S<L&&(w=e.charAt(S))!==m;)w===l&&(x+=w,S++,w=e.charAt(S)),x+=w,S++;if(x&&e.charAt(S)===m&&e.charAt(S+1)===b){for(k=x,D+=x+m+b,S=D.length,x="";S<L&&((w=e.charAt(S))===p||w===h||w===f);)D+=w,S++;if(w=e.charAt(S),x="",n=D,w===y){for(S++;S<L&&(w=e.charAt(S),o(w));)x+=w,S++;if((w=e.charAt(S))===o.delimiter)D+=y+x+w,S++;else{if(T)return;S-=x.length+1,x=""}}if(!x){for(;S<L&&(w=e.charAt(S),i(w));)x+=w,S++;D+=x}if(x){for(q=x,x="";S<L&&((w=e.charAt(S))===p||w===h||w===f);)x+=w,S++;if(w=e.charAt(S),A=null,w===c?A=c:w===u?A=u:w===g&&(A=v),A){if(!x)return;for(D+=x+w,S=D.length,x="";S<L&&(w=e.charAt(S))!==A;){if(w===f){if(S++,(w=e.charAt(S))===f||w===A)return;x+=f}x+=w,S++}if((w=e.charAt(S))!==A)return;a=D,D+=x+w,S++,E=x,x=""}else x="",S=D.length;for(;S<L&&((w=e.charAt(S))===p||w===h);)D+=w,S++;return w=e.charAt(S),w&&w!==f?void 0:!!r||(n=t(n).test().end,q=O.decode.raw(O.unescape(q),n),E&&(a=t(a).test().end,E=O.decode.raw(O.unescape(E),a)),t(D)({type:"definition",identifier:s(k),title:E||null,url:q}))}}}}function o(t){return t!==x&&t!==d&&t!==m}function i(t){return t!==d&&t!==m&&!a(t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:definition
 * @fileoverview Tokenise a definition.
 */
var a=r(13),s=r(88);t.exports=n,n.notInList=!0,n.notInBlock=!0;var c='"',u="'",l="\\",f="\n",p="\t",h=" ",d="[",m="]",g="(",v=")",b=":",y="<",x=">";o.delimiter=x},function(t,e,r){"use strict";function n(t,e,r){var n,i,c,u=this,l="",f="",p="",h="";if(u.options.gfm&&e.charAt(0)===a&&e.charAt(1)===a&&!o(e.charAt(2)))for(n=1,i=e.length,c=t.now(),c.column+=2,c.offset+=2;++n<i;){if(!((l=e.charAt(n))!==a||f!==a||p&&o(p)))return!!r||t(s+h+s)({type:"delete",children:u.tokenizeInline(h,c)});h+=f,p=f,f=l}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:delete
 * @fileoverview Tokenise strikethrough.
 */
var o=r(13),i=r(356);t.exports=n,n.locator=i;var a="~",s="~~"},function(t,e,r){"use strict";function n(t,e,r){var n,s,l,f,p,h,d,m=this,g=0,v=e.charAt(g);if(!(v!==c&&v!==u||(s=m.options.pedantic,p=v,l=v,h=e.length,g++,f="",v="",s&&a(e.charAt(g)))))for(;g<h;){if(d=v,!((v=e.charAt(g))!==l||s&&a(d))){if((v=e.charAt(++g))!==l){if(!o(f)||d===l)return;if(!s&&l===u&&i(v)){f+=l;continue}return!!r||(n=t.now(),n.column++,n.offset++,t(p+f+l)({type:"emphasis",children:m.tokenizeInline(f,n)}))}f+=l}s||"\\"!==v||(f+=v,v=e.charAt(++g)),f+=v,g++}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:emphasis
 * @fileoverview Tokenise emphasis.
 */
var o=r(19),i=r(264),a=r(13),s=r(357);t.exports=n,n.locator=s;var c="*",u="_"},function(t,e,r){"use strict";function n(t,e,r){var n,o,i=this;if("\\"===e.charAt(0)&&(n=e.charAt(1),-1!==i.escape.indexOf(n)))return!!r||(o="\n"===n?{type:"break"}:{type:"text",value:n},t("\\"+n)(o))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:escape
 * @fileoverview Tokenise an escape.
 */
var o=r(358);t.exports=n,n.locator=o},function(t,e,r){"use strict";function n(t,e,r){var n,m,g,v,b,y,x,w,A,k,q,E,O=this,T=O.offset;if(O.options.footnotes){for(n=0,m=e.length,g="",v=t.now(),b=v.line;n<m&&(A=e.charAt(n),o(A));)g+=A,n++;if(e.charAt(n)===l&&e.charAt(n+1)===p){for(g+=l+p,n=g.length,x="";n<m&&(A=e.charAt(n))!==f;)A===a&&(x+=A,n++,A=e.charAt(n)),x+=A,n++;if(x&&e.charAt(n)===f&&e.charAt(n+1)===h){if(r)return!0;for(k=i(x),g+=x+f+h,n=g.length;n<m&&((A=e.charAt(n))===c||A===u);)g+=A,n++;for(v.column+=g.length,v.offset+=g.length,x="",y="",w="";n<m;){if((A=e.charAt(n))===s){for(w=A,n++;n<m&&(A=e.charAt(n))===s;)w+=A,n++;for(x+=w,w="";n<m&&(A=e.charAt(n))===u;)w+=A,n++;if(0===w.length)break;x+=w}x&&(y+=x,x=""),y+=A,n++}return g+=y,y=y.replace(d,function(t){return T[b]=(T[b]||0)+t.length,b++,""}),q=t(g),E=O.enterBlock(),y=O.tokenizeBlock(y,v),E(),q({type:"footnoteDefinition",identifier:k,children:y})}}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:footnote-definition
 * @fileoverview Tokenise footnote definition.
 */
var o=r(13),i=r(88);t.exports=n,n.notInList=!0,n.notInBlock=!0;var a="\\",s="\n",c="\t",u=" ",l="[",f="]",p="^",h=":",d=/^( {4}|\t)?/gm},function(t,e,r){"use strict";function n(t,e,r){for(var n,u,l,f=this,p=f.options,h=e.length+1,d=-1,m=t.now(),g="",v="";++d<h;){if((n=e.charAt(d))!==a&&n!==i){d--;break}g+=n}for(l=0;++d<=h;){if((n=e.charAt(d))!==s){d--;break}g+=n,l++}if(!(l>c)&&l&&(p.pedantic||e.charAt(d+1)!==s)){for(h=e.length+1,u="";++d<h;){if((n=e.charAt(d))!==a&&n!==i){d--;break}u+=n}if(p.pedantic||0!==u.length||!n||n===o){if(r)return!0;for(g+=u,u="",v="";++d<h&&(n=e.charAt(d))&&n!==o;)if(n===a||n===i||n===s){for(;n===a||n===i;)u+=n,n=e.charAt(++d);for(;n===s;)u+=n,n=e.charAt(++d);for(;n===a||n===i;)u+=n,n=e.charAt(++d);d--}else v+=u+n,u="";return m.column+=g.length,m.offset+=g.length,g+=v+u,t(g)({type:"heading",depth:l,children:f.tokenizeInline(v,m)})}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:heading-atx
 * @fileoverview Tokenise an ATX-style heading.
 */
t.exports=n;var o="\n",i="\t",a=" ",s="#",c=6},function(t,e,r){"use strict";function n(t,e,r){for(var n,u,l,f,p,h=this,d=t.now(),m=e.length,g=-1,v="";++g<m;){if((l=e.charAt(g))!==a||g>=s){g--;break}v+=l}for(n="",u="";++g<m;){if((l=e.charAt(g))===o){g--;break}l===a||l===i?u+=l:(n+=u+l,u="")}if(d.column+=v.length,d.offset+=v.length,v+=n+u,l=e.charAt(++g),f=e.charAt(++g),l===o&&c[f]){for(v+=l,u=f,p=c[f];++g<m;){if((l=e.charAt(g))!==f){if(l!==o)return;g--;break}u+=l}return!!r||t(v+u)({type:"heading",depth:p,children:h.tokenizeInline(n,d)})}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:heading-setext
 * @fileoverview Tokenise an setext-style heading.
 */
t.exports=n;var o="\n",i="\t",a=" ",s=3,c={};c["="]=1,c["-"]=2},function(t,e,r){"use strict";function n(t,e,r){for(var n,u,l,f,p,h,d,m=this,g=m.options.blocks,v=e.length,b=0,y=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+g.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(o.source+"\\s*$"),/^$/,!1]];b<v&&((f=e.charAt(b))===i||f===a);)b++;if(e.charAt(b)===c){for(n=e.indexOf(s,b+1),n=-1===n?v:n,u=e.slice(b,n),l=-1,p=y.length;++l<p;)if(y[l][0].test(u)){h=y[l];break}if(h){if(r)return h[2];if(b=n,!h[1].test(u))for(;b<v;){if(n=e.indexOf(s,b+1),n=-1===n?v:n,u=e.slice(b+1,n),h[1].test(u)){u&&(b=n);break}b=n}return d=e.slice(0,b),t(d)({type:"html",value:d})}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:html-block
 * @fileoverview Tokenise block HTML.
 */
var o=r(151).openCloseTag;t.exports=n;var i="\t",a=" ",s="\n",c="<"},function(t,e,r){"use strict";function n(t,e,r){var n,i,u=this,l=e.length;if(!("<"!==e.charAt(0)||l<3)&&(n=e.charAt(1),(o(n)||"?"===n||"!"===n||"/"===n)&&(i=e.match(a))))return!!r||(i=i[0],!u.inLink&&s.test(i)?u.inLink=!0:u.inLink&&c.test(i)&&(u.inLink=!1),t(i)({type:"html",value:i}))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:html-inline
 * @fileoverview Tokenise inline HTML.
 */
var o=r(130),i=r(149),a=r(151).tag;t.exports=n,n.locator=i;var s=/^<a /i,c=/^<\/a>/i},function(t,e,r){"use strict";function n(t,e,r){var n,a,v,b,y,x,w,A,k,q,E,O,T,S,L,D,C,j,I,N=this,R="",U=0,B=e.charAt(0),P=N.options.commonmark,z=N.options.gfm;if("!"===B&&(k=!0,R=B,B=e.charAt(++U)),B===c&&(k||!N.inLink)){for(R+=B,L="",U++,O=e.length,C=t.now(),S=0,C.column+=U,C.offset+=U;U<O;){if(B=e.charAt(U),x=B,B===d){for(a=1;e.charAt(U+1)===d;)x+=B,U++,a++;v?a>=v&&(v=0):v=a}else if(B===s)U++,x+=e.charAt(U);else if(v&&!z||B!==c){if((!v||z)&&B===u){if(!S){if(z)for(;U<O&&(B=e.charAt(U+1),i(B));)x+=B,U++;if(e.charAt(U+1)!==l)return;x+=l,n=!0,U++;break}S--}}else S++;L+=x,x="",U++}if(n){for(q=L,R+=L+x,U++;U<O&&(B=e.charAt(U),i(B));)R+=B,U++;if(B=e.charAt(U),A=P?g:m,L="",b=R,B===p){for(U++,b+=p;U<O&&(B=e.charAt(U))!==h;){if(P&&"\n"===B)return;L+=B,U++}if(e.charAt(U)!==h)return;R+=p+L+h,D=L,U++}else{for(B=null,x="";U<O&&(B=e.charAt(U),!x||!o(A,B));){if(i(B)){if(P)break;x+=B}else{if(B===l)S++;else if(B===f){if(0===S)break;S--}L+=x,x="",B===s&&(L+=s,B=e.charAt(++U)),L+=B}U++}R+=L,D=L,U=R.length}for(L="";U<O&&(B=e.charAt(U),i(B));)L+=B,U++;if(B=e.charAt(U),R+=L,L&&o(A,B))if(U++,R+=B,L="",E=A[B],y=R,P){for(;U<O&&(B=e.charAt(U))!==E;)B===s&&(L+=s,B=e.charAt(++U)),U++,L+=B;if((B=e.charAt(U))!==E)return;for(T=L,R+=L+B,U++;U<O&&(B=e.charAt(U),i(B));)R+=B,U++}else for(x="";U<O;){if((B=e.charAt(U))===E)w&&(L+=E+x,x=""),w=!0;else if(w){if(B===f){R+=L+E+x,T=L;break}i(B)?x+=B:(L+=E+x+B,x="",w=!1)}else L+=B;U++}if(e.charAt(U)===f)return!!r||(R+=f,D=N.decode.raw(N.unescape(D),t(b).test().end),T&&(y=t(y).test().end,T=N.decode.raw(N.unescape(T),y)),I={type:k?"image":"link",title:T||null,url:D},k?I.alt=N.decode.raw(N.unescape(q),C)||null:(j=N.enterLink(),I.children=N.tokenizeInline(q,C),j()),t(R)(I))}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:link
 * @fileoverview Tokenise a link.
 */
var o=r(4),i=r(13),a=r(148);t.exports=n,n.locator=a;var s="\\",c="[",u="]",l="(",f=")",p="<",h=">",d="`",m={};m['"']='"',m["'"]="'";var g={};g['"']='"',g["'"]="'",g[l]=f},function(t,e,r){"use strict";function n(t,e,r){for(var n,i,a,c,l,f,y,w,A,k,q,E,L,D,C,j,I,N,R,U,B,P,z,_,F=this,M=F.options.commonmark,V=F.options.pedantic,H=F.blockTokenizers,G=F.interruptList,$=0,Z=e.length,Y=null,Q=0;$<Z;){if((c=e.charAt($))===b)Q+=x-Q%x;else{if(c!==g)break;Q++}$++}if(!(Q>=x)){if(c=e.charAt($),n=M?S:T,!0===O[c])l=c,a=!1;else{for(a=!0,i="";$<Z&&(c=e.charAt($),u(c));)i+=c,$++;if(c=e.charAt($),!i||!0!==n[c])return;Y=parseInt(i,10),l=c}if((c=e.charAt(++$))===g||c===b){if(r)return!0;for($=0,D=[],C=[],j=[];$<Z;){for(f=e.indexOf(v,$),y=$,w=!1,_=!1,-1===f&&(f=Z),z=$+x,Q=0;$<Z;){if((c=e.charAt($))===b)Q+=x-Q%x;else{if(c!==g)break;Q++}$++}if(Q>=x&&(_=!0),I&&Q>=I.indent&&(_=!0),c=e.charAt($),A=null,!_){if(!0===O[c])A=c,$++,Q++;else{for(i="";$<Z&&(c=e.charAt($),u(c));)i+=c,$++;c=e.charAt($),$++,i&&!0===n[c]&&(A=c,Q+=i.length+1)}if(A)if((c=e.charAt($))===b)Q+=x-Q%x,$++;else if(c===g){for(z=$+x;$<z&&e.charAt($)===g;)$++,Q++;$===z&&e.charAt($)===g&&($-=x-1,Q-=x-1)}else c!==v&&""!==c&&(A=null)}if(A){if(!V&&l!==A)break;w=!0}else M||_||e.charAt(y)!==g?M&&I&&(_=Q>=I.indent||Q>x):_=!0,w=!1,$=y;if(q=e.slice(y,f),k=y===$?q:e.slice($,f),(A===h||A===d||A===m)&&H.thematicBreak.call(F,t,q,!0))break;if(E=L,L=!s(k).length,_&&I)I.value=I.value.concat(j,q),C=C.concat(j,q),j=[];else if(w)0!==j.length&&(I.value.push(""),I.trail=j.concat()),I={value:[q],indent:Q,trail:[]},D.push(I),C=C.concat(j,q),j=[];else if(L){if(E)break;j.push(q)}else{if(E)break;if(p(G,H,F,[t,q,!0]))break;I.value=I.value.concat(j,q),C=C.concat(j,q),j=[]}$=f+1}for(B=t(C.join(v)).reset({type:"list",ordered:a,start:Y,loose:null,children:[]}),N=F.enterList(),R=F.enterBlock(),U=!1,$=-1,Z=D.length;++$<Z;)I=D[$].value.join(v),P=t.now(),I=t(I)(o(F,I,P),B),I.loose&&(U=!0),I=D[$].trail.join(v),$!==Z-1&&(I+=v),t(I);return N(),R(),B.loose=U,B}}}function o(t,e,r){var n,o,s=t.offset,c=t.options.pedantic?i:a,u=null;return e=c.apply(null,arguments),t.options.gfm&&(n=e.match(A))&&(o=n[0].length,u=n[1].toLowerCase()===y,s[r.line]+=o,e=e.slice(o)),{type:"listItem",loose:w.test(e)||e.charAt(e.length-1)===v,checked:u,children:t.tokenizeBlock(e,r)}}function i(t,e,r){function n(t){return o[i]=(o[i]||0)+t.length,i++,""}var o=t.offset,i=r.line;return e=e.replace(q,n),i=r.line,e.replace(E,n)}function a(t,e,r){function n(t,e,r,n,s){return i=e+r+n,a=s,Number(r)<10&&i.length%2==1&&(r=g+r),(o=e+c(g,r.length)+n)+a}var o,i,a,s,u,p,h,d=t.offset,m=r.line;for(e=e.replace(k,n),s=e.split(v),u=f(e,l(o).indent).split(v),u[0]=a,d[m]=(d[m]||0)+i.length,m++,p=0,h=s.length;++p<h;)d[m]=(d[m]||0)+s[p].length-u[p].length,m++;return u.join(v)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:list
 * @fileoverview Tokenise a list.
 */
var s=r(19),c=r(9),u=r(40),l=r(150),f=r(392),p=r(87);t.exports=n;var h="*",d="_",m="-",g=" ",v="\n",b="\t",y="x",x=4,w=/\n\n(?!\s*$)/,A=/^\[([ \t]|x|X)][ \t]/,k=/^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,q=/^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,E=/^( {1,4}|\t)?/gm,O={};O[h]=!0,O["+"]=!0,O[m]=!0;var T={};T["."]=!0;var S={};S["."]=!0,S[")"]=!0},function(t,e,r){"use strict";function n(t,e,r){var n,i,a,s,c=e.charAt(0);if("\n"===c){if(r)return!0;for(s=1,n=e.length,i=c,a="";s<n&&(c=e.charAt(s),o(c));)a+=c,"\n"===c&&(i+=a,a=""),s++;t(i)}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:newline
 * @fileoverview Tokenise a newline.
 */
var o=r(13);t.exports=n},function(t,e,r){"use strict";function n(t,e,r){for(var n,p,h,d,m,g=this,v=g.options,b=v.commonmark,y=v.gfm,x=g.blockTokenizers,w=g.interruptParagraph,A=e.indexOf(c),k=e.length;A<k;){if(-1===A){A=k;break}if(e.charAt(A+1)===c)break;if(b){for(d=0,n=A+1;n<k;){if((h=e.charAt(n))===u){d=f;break}if(h!==l)break;d++,n++}if(d>=f){A=e.indexOf(c,A+1);continue}}if(p=e.slice(A+1),s(w,x,g,[t,p,!0]))break;if(x.list.call(g,t,p,!0)&&(g.inList||b||y&&!i(o.left(p).charAt(0))))break;if(n=A,-1!==(A=e.indexOf(c,A+1))&&""===o(e.slice(n,A))){A=n;break}}return p=e.slice(0,A),""===o(p)?(t(p),null):!!r||(m=t.now(),p=a(p),t(p)({type:"paragraph",children:g.tokenizeInline(p,m)}))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:paragraph
 * @fileoverview Tokenise a paragraph.
 */
var o=r(19),i=r(40),a=r(92),s=r(87);t.exports=n;var c="\n",u="\t",l=" ",f=4},function(t,e,r){"use strict";function n(t,e,r){var n,i,v,b,y,x,w,A,k=this,q=e.charAt(0),E=0,O=e.length,T="",S="",L=s,D=l;if("!"===q&&(L=c,S=q,q=e.charAt(++E)),q===m){for(E++,S+=q,x="",k.options.footnotes&&L===s&&e.charAt(E)===h&&(S+=h,E++,L=u),A=0;E<O;){if((q=e.charAt(E))===m)w=!0,A++;else if(q===g){if(!A)break;A--}q===d&&(x+=d,q=e.charAt(++E)),x+=q,E++}if(T=x,n=x,(q=e.charAt(E))===g){for(E++,T+=q,x="";E<O&&(q=e.charAt(E),o(q));)x+=q,E++;if((q=e.charAt(E))===m){for(i="",x+=q,E++;E<O&&(q=e.charAt(E))!==m&&q!==g;)q===d&&(i+=d,q=e.charAt(++E)),i+=q,E++;q=e.charAt(E),q===g?(D=i?p:f,x+=i+q,E++):i="",T+=x,x=""}else{if(!n)return;i=n}if(D===p||!w)return L===u&&D!==l&&(L=s,S=m+h,n=h+n),T=S+T,L===s&&k.inLink?null:!!r||(L===u&&-1!==n.indexOf(" ")?t(T)({type:"footnote",children:this.tokenizeInline(n,t.now())}):(v=t.now(),v.column+=S.length,v.offset+=S.length,i=D===p?i:n,b={type:L+"Reference",identifier:a(i)},L!==s&&L!==c||(b.referenceType=D),L===s?(y=k.enterLink(),b.children=k.tokenizeInline(n,v),y()):L===c&&(b.alt=k.decode.raw(k.unescape(n),v)||null),t(T)(b)))}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:reference
 * @fileoverview Tokenise a reference.
 */
var o=r(13),i=r(148),a=r(88);t.exports=n,n.locator=i;var s="link",c="image",u="footnote",l="shortcut",f="collapsed",p="full",h="^",d="\\",m="[",g="]"},function(t,e,r){"use strict";function n(t,e,r){var n,a,u,l,f,p,h,d=this,m=0,g=e.charAt(m);if(!(g!==s&&g!==c||e.charAt(++m)!==g||(a=d.options.pedantic,u=g,f=u+u,p=e.length,m++,l="",g="",a&&i(e.charAt(m)))))for(;m<p;){if(h=g,!((g=e.charAt(m))!==u||e.charAt(m+1)!==u||a&&i(h))&&(g=e.charAt(m+2))!==u){if(!o(l))return;return!!r||(n=t.now(),n.column+=2,n.offset+=2,t(f+l+f)({type:"strong",children:d.tokenizeInline(l,n)}))}a||"\\"!==g||(l+=g,g=e.charAt(++m)),l+=g,m++}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:strong
 * @fileoverview Tokenise strong.
 */
var o=r(19),i=r(13),a=r(359);t.exports=n,n.locator=a;var s="*",c="_"},function(t,e,r){"use strict";function n(t,e,r){var n,y,x,w,A,k,q,E,O,T,S,L,D,C,j,I,N,R,U,B,P,z,_,F,M=this;if(M.options.gfm){for(n=0,R=0,k=e.length+1,q=[];n<k;){if(z=e.indexOf(f,n),_=e.indexOf(c,n+1),-1===z&&(z=e.length),-1===_||_>z){if(R<d)return;break}q.push(e.slice(n,z)),R++,n=z+1}for(w=q.join(f),y=q.splice(1,1)[0]||[],n=0,k=y.length,R--,x=!1,S=[];n<k;){if((O=y.charAt(n))===c){if(T=null,!1===x){if(!1===F)return}else S.push(x),x=!1;F=!1}else if(O===s)T=!0,x=x||b;else if(O===u)x=x===m?g:T&&x===b?v:m;else if(!o(O))return;n++}if(!1!==x&&S.push(x),!(S.length<h)){if(r)return!0;for(N=-1,B=[],P=t(w).reset({type:"table",align:S,children:B});++N<R;){for(U=q[N],A={type:"tableRow",children:[]},N&&t(f),t(U).reset(A,P),k=U.length+1,n=0,E="",L="",D=!0,C=null,j=null;n<k;)if((O=U.charAt(n))!==p&&O!==l){if(""===O||O===c)if(D)t(O);else{if(O&&j){E+=O,n++;continue}!L&&!O||D||(w=L,E.length>1&&(O?(w+=E.slice(0,E.length-1),E=E.charAt(E.length-1)):(w+=E,E="")),I=t.now(),t(w)({type:"tableCell",children:M.tokenizeInline(L,I)},A)),t(E+O),E="",L=""}else if(E&&(L+=E,E=""),L+=O,O===i&&n!==k-2&&(L+=U.charAt(n+1),n++),O===a){for(C=1;U.charAt(n+1)===O;)L+=O,n++,C++;j?C>=j&&(j=0):j=C}D=!1,n++}else L?E+=O:t(O),n++;N||t(f+y)}return P}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:table
 * @fileoverview Tokenise a table.
 */
var o=r(13);t.exports=n,n.notInList=!0;var i="\\",a="`",s="-",c="|",u=":",l=" ",f="\n",p="\t",h=1,d=2,m="left",g="center",v="right",b=null},function(t,e,r){"use strict";function n(t,e,r){var n,o,i,a,s,c,u,l,f,p,h=this;if(r)return!0;for(n=h.inlineMethods,a=n.length,o=h.inlineTokenizers,i=-1,f=e.length;++i<a;)"text"!==(l=n[i])&&o[l]&&(u=o[l].locator,u||t.file.fail("Missing locator: `"+l+"`"),-1!==(c=u.call(h,e,1))&&c<f&&(f=c));s=e.slice(0,f),p=t.now(),h.decode(s,p,function(e,r,n){t(n||e)({type:"text",value:e})})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:text
 * @fileoverview Tokenise text.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e,r){for(var n,f,p,h,d=-1,m=e.length+1,g="";++d<m&&((n=e.charAt(d))===i||n===a);)g+=n;if(n===s||n===u||n===c)for(f=n,g+=n,p=1,h="";++d<m;)if((n=e.charAt(d))===f)p++,g+=h+f,h="";else{if(n!==a)return p>=l&&(!n||n===o)?(g+=h,!!r||t(g)({type:"thematicBreak"})):void 0;h+=n}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:thematic-break
 * @fileoverview Tokenise a thematic break.
 */
t.exports=n;var o="\n",i="\t",a=" ",s="*",c="_",u="-",l=3},function(t,e,r){"use strict";function n(t,e,r){var n,a,g,v,b,y,x,w,A,k,q,E,O=this;if(O.options.gfm){for(n="",v=-1,w=m;++v<w;)if(y=d[v],x=e.slice(0,y.length),x.toLowerCase()===y){n=x;break}if(n){for(v=n.length,w=e.length,A="",k=0;v<w&&(g=e.charAt(v),!i(g)&&g!==f)&&("."!==g&&","!==g&&":"!==g&&";"!==g&&'"'!==g&&"'"!==g&&")"!==g&&"]"!==g||(q=e.charAt(v+1))&&!i(q))&&(g!==u&&g!==s||k++,g!==l&&g!==c||!(--k<0));)A+=g,v++;if(A){if(n+=A,a=n,y===h){if(-1===(b=A.indexOf(p))||b===w-1)return;a=a.substr(h.length)}return!!r||(E=O.enterLink(),a=O.tokenizeInline(a,t.now()),E(),t(n)({type:"link",title:null,url:o(n),children:a}))}}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:url
 * @fileoverview Tokenise a URL.
 */
var o=r(55),i=r(13),a=r(360);t.exports=n,n.locator=a,n.notInLink=!0;var s="[",c="]",u="(",l=")",f="<",p="@",h="mailto:",d=["http://","https://",h],m=d.length},function(t,e,r){"use strict";function n(t,e,r){var n,s,c,u,l,f,p=this;if(p.options.yaml&&e.charAt(0)===i&&e.charAt(1)===i&&e.charAt(2)===i&&e.charAt(3)===a)for(n=o+a,s="",f="",c=3,u=e.length;++c<u;){if((l=e.charAt(c))===i&&(f||!s)&&e.charAt(c+1)===i&&e.charAt(c+2)===i)return!!r||(n+=f+o,t(n)({type:"yaml",value:s}));l===a?f+=l:(n+=f+l,s+=f+l,f="")}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:yaml
 * @fileoverview Tokenise YAML.
 */
t.exports=n,n.onlyAtStart=!0;var o="---",i="-",a="\n"},function(t,e,r){"use strict";function n(t){var e,r;return"text"!==t.type||!t.position||(e=t.position.start,r=t.position.end,e.line!==r.line||r.column-e.column===t.value.length)}function o(t,e){return t.value+=e.value,t}function i(t,e){return this.options.commonmark?e:(t.children=t.children.concat(e.children),t)}function a(t){function e(e,r){function o(t){for(var e=-1,r=t.indexOf("\n");-1!==r;)q++,e=r,r=t.indexOf("\n",r+1);-1===e?E+=t.length:E=t.length-e,q in x&&(-1!==e?E+=x[q]:E<=x[q]&&(E=x[q]+1))}function i(){var t=[],e=q+1;return function(){for(var r=q+1;e<r;)t.push((x[e]||0)+1),e++;return t}}function a(){var t={line:q,column:E};return t.offset=y.toOffset(t),t}function c(t){this.start=t,this.end=a()}function u(t){e.substring(0,t.length)!==t&&y.file.fail(new Error("Incorrectly eaten value: please report this warning on http://git.io/vg5Ft"),a())}function l(){function t(t,r){var n=t.position,o=n?n.start:e,i=[],a=n&&n.end.line,s=e.line;if(t.position=new c(o),n&&r&&n.indent){if(i=n.indent,a<s){for(;++a<s;)i.push((x[a]||0)+1);i.push(e.column)}r=i.concat(r)}return t.position.indent=r||[],t}var e=a();return t}function f(t,e){var r=e?e.children:w,o=r[r.length-1];return o&&t.type===o.type&&t.type in s&&n(o)&&n(t)&&(t=s[t.type].call(y,o,t)),t!==o&&r.push(t),y.atStart&&0!==w.length&&y.exitStart(),t}function p(t){function r(t,e){return p(f(p(t),e),c)}function n(){var n=r.apply(null,arguments);return q=h.line,E=h.column,e=t+e,n}function s(){var r=p({});return q=h.line,E=h.column,e=t+e,r.position}var c=i(),p=l(),h=a();return u(t),r.reset=n,n.test=s,r.test=s,e=e.substring(t.length),o(t),c=c(),r}var h,d,m,g,v,b,y=this,x=y.offset,w=[],A=y[t+"Methods"],k=y[t+"Tokenizers"],q=r.line,E=r.column;if(!e)return w;for(p.now=a,p.file=y.file,o("");e;){for(h=-1,d=A.length,v=!1;++h<d&&(g=A[h],!(m=k[g])||m.onlyAtStart&&!y.atStart||m.notInList&&y.inList||m.notInBlock&&y.inBlock||m.notInLink&&y.inLink||(b=e.length,m.apply(y,[p,e]),!(v=b!==e.length))););v||y.file.fail(new Error("Infinite loop"),p.now())}return y.eof=a(),w}return e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenizer
 * @fileoverview Markdown tokenizer.
 */
t.exports=a;var s={text:o,blockquote:i}},function(t,e,r){"use strict";function n(t,e){function r(r){for(var n,o=0,i=r.indexOf("\\"),a=t[e],s=[];-1!==i;)s.push(r.slice(o,i)),o=i+1,n=r.charAt(o),n&&-1!==a.indexOf(n)||s.push("\\"),i=r.indexOf("\\",o);return s.push(r.slice(o)),s.join("")}return r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:unescape
 * @fileoverview Unescape escapes.
 */
t.exports=n},function(t,e,r){"use strict";function n(t,e){var r,n,l,f,p=t.split(c),h=p.length+1,d=1/0,m=[];for(p.unshift(i(s,e)+"!");h--;)if(n=a(p[h]),m[h]=n.stops,0!==o(p[h]).length){if(!n.indent){d=1/0;break}n.indent>0&&n.indent<d&&(d=n.indent)}if(d!==1/0)for(h=p.length;h--;){for(l=m[h],r=d;r&&!(r in l);)r--;f=0!==o(p[h]).length&&d&&r!==d?u:"",p[h]=f+p[h].slice(r in l?l[r]+1:0)}return p.shift(),p.join(c)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:remove-indentation
 * @fileoverview Remove indentation.
 */
var o=r(19),i=r(9),a=r(150);t.exports=n;var s=" ",c="\n",u="\t"},function(t,e,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module remark:preset:lint-recommended
 * @fileoverview remark preset to configure remark-lint with
 *   settings that prevent mistakes or syntaxes that do not
 *   work correctly across vendors.
 */
t.exports.plugins=[r(350),r(335),r(337),[r(338),"tab-size"],r(339),r(340),r(344),[r(349),"."],r(336),r(341),r(342),r(343),r(345),r(346),r(347),r(348)]},function(t,e,r){"use strict";function n(t){var e=o(a);e.prototype.options=i(e.prototype.options,this.data("settings"),t),this.Compiler=e}var o=r(158),i=r(10),a=r(395);t.exports=n,n.Compiler=a},function(t,e,r){"use strict";function n(t,e){this.inLink=!1,this.inTable=!1,this.tree=t,this.file=e,this.options=o(this.options),this.setOptions({})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify
 * @fileoverview Markdown compiler
 */
var o=r(10),i=r(157);t.exports=n;var a=n.prototype;a.enterLink=i("inLink",!1),a.enterTable=i("inTable",!1),a.enterLinkReference=r(405),a.options=r(152),a.setOptions=r(403),a.compile=r(399),a.visit=r(400),a.all=r(397),a.block=r(398),a.visitOrderedItems=r(401),a.visitUnorderedItems=r(402),a.visitors={root:r(425),text:r(429),heading:r(415),paragraph:r(424),blockquote:r(406),list:r(423),listItem:r(422),inlineCode:r(419),yaml:r(431),code:r(408),html:r(416),thematicBreak:r(430),strong:r(426),emphasis:r(411),break:r(407),delete:r(410),link:r(421),linkReference:r(420),imageReference:r(417),definition:r(409),image:r(418),footnote:r(414),footnoteReference:r(413),footnoteDefinition:r(412),table:r(428),tableCell:r(427)}},function(t,e,r){"use strict";function n(t){function e(e,r,n){function d(t){return-1===j.indexOf(t)?m[t]:p+t}var g,v,b,y,x,w,A=this,k=t.gfm,q=t.commonmark,E=t.pedantic,O=q?[".",")"]:["."],T=n&&n.children,S=T&&T.indexOf(r),L=T&&T[S-1],D=T&&T[S+1],C=e.length,j=l(t),I=-1,N=[],R=N;for(g=L?i(L)&&/\n\s*$/.test(L.value):!n||"root"===n.type||"paragraph"===n.type;++I<C;){if(v=e.charAt(I),w=!1,"\n"===v)g=!0;else if(v===p||"`"===v||"*"===v||"["===v||"<"===v||"&"===v&&f(e.slice(I))>0||"]"===v&&A.inLink||k&&"~"===v&&"~"===e.charAt(I+1)||k&&"|"===v&&(A.inTable||o(e,I))||"_"===v&&I>0&&I<C-1&&(E||!c(e.charAt(I-1))||!c(e.charAt(I+1)))||k&&!A.inLink&&":"===v&&a(N.join("")))w=!0;else if(g)if(">"===v||"#"===v||-1!==h.indexOf(v))w=!0;else if(s(v)){for(x=I+1;x<C&&s(e.charAt(x));)x++;-1!==O.indexOf(e.charAt(x))&&((D=e.charAt(x+1))&&" "!==D&&"\t"!==D&&"\n"!==D||(N.push(e.slice(I,x)),I=x,v=e.charAt(I),w=!0))}g&&!u(v)&&(g=!1),N.push(w?d(v):v)}if(T&&i(r)){if(L&&"shortcut"===L.referenceType){for(I=-1,C=R.length;++I<C;)if(" "!==(v=R[I])&&"\t"!==v){"("!==v&&":"!==v||(R[I]=d(v));break}i(D)&&I===C&&"("===D.value.charAt(0)&&R.push(p)}k&&!A.inLink&&i(L)&&":"===e.charAt(0)&&a(L.value.slice(-6))&&(R[0]=d(":")),i(D)&&"&"===e.charAt(C-1)&&0!==f("&"+D.value)&&(R[R.length-1]=d("&")),k&&i(D)&&"~"===e.charAt(C-1)&&"~"===D.value.charAt(0)&&R.splice(R.length-1,0,p),b=i(L)&&c(L.value.slice(-1)),y=i(D)&&c(D.value.charAt(0)),1===C?"_"!==e||!E&&b&&y||R.unshift(p):("_"!==e.charAt(0)||!E&&b&&c(e.charAt(1))||R.unshift(p),"_"!==e.charAt(C-1)||!E&&y&&c(e.charAt(C-2))||R.splice(R.length-1,0,p))}return R.join("")}return e}function o(t,e){var r=t.lastIndexOf("\n",e),n=t.indexOf("\n",e);for(r=-1===r?-1:r,n=-1===n?t.length:n;++r<n;)if(-1===d.indexOf(t.charAt(r)))return!1;return!0}function i(t){return t&&"text"===t.type}function a(t){var e=t.slice(-6).toLowerCase();return"mailto"===e||"https"===e.slice(-5)||"http"===e.slice(-4)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:escape
 * @fileoverview Escape text to prevent it turning
 *   into markdown syntax.
 */
var s=r(40),c=r(258),u=r(13),l=r(135),f=r(153);t.exports=n;var p="\\",h=["*","-","+"],d=[":","-"," ","|"],m={"<":"&lt;",":":"&#x3A;","&":"&amp;","|":"&#x7C;","~":"&#x7E;"}},function(t,e,r){"use strict";function n(t){for(var e=this,r=t.children,n=r.length,o=[],i=-1;++i<n;)o[i]=e.visit(r[i],t);return o}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:all
 * @fileoverview Stringify children in a node.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){for(var e,r,n=this,o=[],i=t.children,a=i.length,s=-1;++s<a;)e=i[s],r&&(e.type===r.type&&"list"===r.type?o.push(r.ordered===e.ordered?"\n\n\n":"\n\n"):"list"!==r.type||"code"!==e.type||e.lang?o.push("\n\n"):o.push("\n\n\n")),o.push(n.visit(e,t)),r=e;return o.join("")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:block
 * @fileoverview Stringify a block.
 */
t.exports=n},function(t,e,r){"use strict";function n(){return this.visit(o(this.tree,this.options.commonmark))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:compile
 * @fileoverview Compile the given node.
 */
var o=r(277);t.exports=n},function(t,e,r){"use strict";function n(t,e){var r=this,n=r.visitors;return"function"!=typeof n[t.type]&&r.file.fail(new Error("Missing compiler for node of type `"+t.type+"`: `"+t+"`"),t),n[t.type].call(r,t,e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:one
 * @fileoverview Stringify a node.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){for(var e,r=this,n=r.visitors.listItem,o=r.options.incrementListMarker,i=[],a=t.start,s=t.children,c=s.length,u=-1;++u<c;)e=(o?a+u:a)+".",i[u]=n.call(r,s[u],t,u,e);return i.join("\n")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:ordered-items
 * @fileoverview Stringify ordered list items.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){for(var e=this,r=e.options.bullet,n=e.visitors.listItem,o=t.children,i=o.length,a=-1,s=[];++a<i;)s[a]=n.call(e,o[a],t,a,r);return s.join("\n")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:unordered-items
 * @fileoverview Stringify unordered list items.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){var e,r,n=this,i=n.options;if(null==t)t={};else{if("object"!=typeof t)throw new Error("Invalid value `"+t+"` for setting `options`");t=u(t)}for(r in f)m[typeof f[r]](t,r,i[r],d[r]);return e=t.ruleRepetition,e&&e<3&&o(e,"options.ruleRepetition"),n.encode=c(String(t.entities)),n.escape=p(t),n.options=t,n}function o(t,e){throw new Error("Invalid value `"+t+"` for setting `"+e+"`")}function i(t,e,r){var n=t[e];null==n&&(n=r),"boolean"!=typeof n&&o(n,"options."+e),t[e]=n}function a(t,e,r){var n=t[e];null==n&&(n=r),isNaN(n)&&o(n,"options."+e),t[e]=n}function s(t,e,r,n){var i=t[e];null==i&&(i=r),i=String(i),i in n||o(i,"options."+e),t[e]=i}function c(t){function e(t){return l(t,r)}var r={};return"false"===t?h:("true"===t&&(r.useNamedReferences=!0),"escape"===t&&(r.escapeOnly=!0,r.useNamedReferences=!0),e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:set-options
 * @fileoverview Set configuration.
 */
var u=r(10),l=r(91),f=r(152),p=r(396),h=r(156);t.exports=n;var d={entities:{true:!0,false:!0,numbers:!0,escape:!0},bullet:{"*":!0,"-":!0,"+":!0},rule:{"-":!0,_:!0,"*":!0},listItemIndent:{tab:!0,mixed:!0,1:!0},emphasis:{_:!0,"*":!0},strong:{_:!0,"*":!0},fence:{"`":!0,"~":!0}},m={boolean:i,string:s,number:a}},function(t,e,r){"use strict";function n(t,e){for(var r,n=t.length,a=e.length,s=[],c=0,u=0;u<n;){for(r=u;u<n&&!i.test(t.charAt(u));)u+=1;for(s.push(t.slice(r,u));c<a&&!i.test(e.charAt(c));)c+=1;for(r=c;c<a&&i.test(e.charAt(c));)"&"===e.charAt(c)&&(c+=o(e.slice(c))),c+=1;for(s.push(e.slice(r,c));u<n&&i.test(t.charAt(u));)u+=1}return s.join("")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:copy-identifier-encoding
 * @fileoverview Encode based on the identifier.
 */
var o=r(153);t.exports=n;var i=/[-!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~_]/},function(t,e,r){"use strict";function n(t,e){var r=t.encode,n=t.escape,i=t.enterLink();return"shortcut"!==e.referenceType&&"collapsed"!==e.referenceType?i:(t.escape=o,t.encode=o,function(){t.encode=r,t.escape=n,i()})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:enter-link-reference
 * @fileoverview Enter a reference.
 */
var o=r(156);t.exports=n},function(t,e,r){"use strict";function n(t){for(var e,r=this.block(t).split("\n"),n=[],o=r.length,i=-1;++i<o;)e=r[i],n[i]=(e?" ":"")+e;return">"+n.join("\n>")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:blockquote
 * @fileoverview Stringify a blockquote.
 */
t.exports=n},function(t,e,r){"use strict";function n(){return o[this.options.commonmark]}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:break
 * @fileoverview Stringify a break.
 */
t.exports=n;var o={true:"\\\n",false:"  \n"}},function(t,e,r){"use strict";function n(t,e){var r,n=this,c=t.value,u=n.options,l=u.fence,f=n.encode(t.lang||"",t);return f||u.fences||!c?(r=o(c,l)+1,s.test(c)&&(c=a(c,1)),(r=i(l,Math.max(r,3)))+f+"\n"+c+"\n"+r):(e&&"listItem"===e.type&&"tab"!==u.listItemIndent&&u.pedantic&&n.file.fail("Cannot indent code properly. See http://git.io/vgFvT",t.position),a(c,1))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:code
 * @fileoverview Stringify code.
 */
var o=r(134),i=r(9),a=r(155);t.exports=n;var s=/([`~])\1{2}/},function(t,e,r){"use strict";function n(t){var e=o(t.url);return t.title&&(e+=" "+i(t.title)),"["+t.identifier+"]: "+e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:definition
 * @fileoverview Stringify a definition.
 */
var o=r(90),i=r(89);t.exports=n},function(t,e,r){"use strict";function n(t){return"~~"+this.all(t).join("")+"~~"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:delete
 * @fileoverview Stringify a delete.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){var e=this.options.emphasis;return e+this.all(t).join("")+e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:emphasis
 * @fileoverview Stringify a emphasis.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){return"[^"+t.identifier.toLowerCase()+"]: "+this.all(t).join("\n\n"+o(" ",4))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:footnote-definition
 * @fileoverview Stringify a footnote-definition.
 */
var o=r(9);t.exports=n},function(t,e,r){"use strict";function n(t){return"[^"+t.identifier+"]"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:footnote-reference
 * @fileoverview Stringify a footnote reference.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){return"[^"+this.all(t).join("")+"]"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:footnote
 * @fileoverview Stringify a footnote.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){var e,r=this,n=t.depth,i=r.options.setext,a=r.options.closeAtx,s=r.all(t).join("");return i&&n<3?s+"\n"+o(1===n?"=":"-",s.length):(e=o("#",t.depth))+" "+s+(a?" "+e:"")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:heading
 * @fileoverview Stringify a heading.
 */
var o=r(9);t.exports=n},function(t,e,r){"use strict";function n(t){return t.value}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:html
 * @fileoverview Stringify html.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){return"!["+(this.encode(t.alt,t)||"")+"]"+o(t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:image-reference
 * @fileoverview Stringify an image reference.
 */
var o=r(154);t.exports=n},function(t,e,r){"use strict";function n(t){var e=this,r=o(e.encode(t.url||"",t)),n=e.enterLink(),a=e.encode(e.escape(t.alt||"",t));return n(),t.title&&(r+=" "+i(e.encode(t.title,t))),"!["+a+"]("+r+")"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:image
 * @fileoverview Stringify an image.
 */
var o=r(90),i=r(89);t.exports=n},function(t,e,r){"use strict";function n(t){var e=t.value,r=i("`",o(e,"`")+1),n=r,a=r;return"`"===e.charAt(0)&&(n+=" "),"`"===e.charAt(e.length-1)&&(a=" "+a),n+e+a}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:inline-code
 * @fileoverview Stringify inline code.
 */
var o=r(134),i=r(9);t.exports=n},function(t,e,r){"use strict";function n(t){var e=this,r=t.referenceType,n=e.enterLinkReference(e,t),a=e.all(t).join("");return n(),"shortcut"!==r&&"collapsed"!==r||(a=o(a,t.identifier)),"["+a+"]"+i(t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:link-reference
 * @fileoverview Stringify a link reference.
 */
var o=r(404),i=r(154);t.exports=n},function(t,e,r){"use strict";function n(t){var e=this,r=e.encode(t.url||"",t),n=e.enterLink(),s=e.encode(e.escape(t.url||"",t)),c=e.all(t).join("");return n(),null!=t.title||!a.test(r)||s!==c&&s!=="mailto:"+c?(r=o(r),t.title&&(r+=" "+i(e.encode(e.escape(t.title,t),t))),"["+c+"]("+r+")"):o(e.encode(t.url),!0)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:link
 * @fileoverview Stringify a link.
 */
var o=r(90),i=r(89);t.exports=n;var a=/^[a-z][a-z+.-]+:\/?/i},function(t,e,r){"use strict";function n(t,e,r,n){for(var s,c,u,l=this,f=l.options.listItemIndent,p=t.loose,h=t.children,d=h.length,m=[],g=-1;++g<d;)m[g]=l.visit(h[g],t);return s=a[t.checked]+m.join(p?"\n\n":"\n"),"1"===f||"mixed"===f&&-1===s.indexOf("\n")?(c=n.length+1,u=" "):(c=4*Math.ceil((n.length+1)/4),u=o(" ",c-n.length)),s=n+u+i(s,c/4).slice(c),p&&e.children.length-1!==r&&(s+="\n"),s}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:list-item
 * @fileoverview Stringify a list item.
 */
var o=r(9),i=r(155);t.exports=n;var a={undefined:"",null:"",true:"[x] ",false:"[ ] "}},function(t,e,r){"use strict";function n(t){return this[o[t.ordered]](t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:list
 * @fileoverview Stringify a list.
 */
t.exports=n;var o={true:"visitOrderedItems",false:"visitUnorderedItems"}},function(t,e,r){"use strict";function n(t){return this.all(t).join("")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:paragraph
 * @fileoverview Stringify a paragraph.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){return this.block(t)+"\n"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:root
 * @fileoverview Stringify a root.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){var e=o(this.options.strong,2);return e+this.all(t).join("")+e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:strong
 * @fileoverview Stringify a strong.
 */
var o=r(9);t.exports=n},function(t,e,r){"use strict";function n(t){return this.all(t).join("")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:table-cell
 * @fileoverview Stringify a table-cell.
 */
t.exports=n},function(t,e,r){"use strict";function n(t){for(var e,r,n=this,i=n.options.looseTable,a=n.options.spacedTable,s=n.options.paddedTable,c=t.children,u=c.length,l=n.enterTable(),f=[];u--;)f[u]=n.all(c[u]);return l(),i?(e="",r=""):a?(e="| ",r=" |"):(e="|",r="|"),o(f,{align:t.align,pad:s,start:e,end:r,delimiter:a?" | ":"|"})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:table
 * @fileoverview Stringify a table.
 */
var o=r(275);t.exports=n},function(t,e,r){"use strict";function n(t,e){return this.encode(this.escape(t.value,t,e),t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:text
 * @fileoverview Stringify a text.
 */
t.exports=n},function(t,e,r){"use strict";function n(){var t=this.options,e=o(t.rule,t.ruleRepetition);return t.ruleSpaces?e.split("").join(" "):e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:thematic-break
 * @fileoverview Stringify a thematic-break.
 */
var o=r(9);t.exports=n},function(t,e,r){"use strict";function n(t){var e=o("-",3);return e+(t.value?"\n"+t.value:"")+"\n"+e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:yaml
 * @fileoverview Stringify yaml.
 */
var o=r(9);t.exports=n},function(t,e,r){"use strict";var n=r(444),o=r(352),i=r(394);t.exports=n().use(o).use(i).freeze()},function(t,e,r){"use strict";function n(t,e){if("string"!=typeof t)return t;if(0===t.length)return t;var r=o.basename(t,o.extname(t))+e;return o.join(o.dirname(t),r)}var o=r(146);t.exports=n},function(t,e,r){(function(t,e){!function(t,r){"use strict";function n(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),r=0;r<e.length;r++)e[r]=arguments[r+1];var n={callback:t,args:e};return u[c]=n,s(c),c++}function o(t){delete u[t]}function i(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(r,n)}}function a(t){if(l)setTimeout(a,0,t);else{var e=u[t];if(e){l=!0;try{i(e)}finally{o(t),l=!1}}}}if(!t.setImmediate){var s,c=1,u={},l=!1,f=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?function(){var e="setImmediate$"+Math.random()+"$",r=function(r){r.source===t&&"string"==typeof r.data&&0===r.data.indexOf(e)&&a(+r.data.slice(e.length))};t.addEventListener?t.addEventListener("message",r,!1):t.attachEvent("onmessage",r),s=function(r){t.postMessage(e+r,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var r=f.createElement("script");r.onreadystatechange=function(){a(e),r.onreadystatechange=null,t.removeChild(r),r=null},t.appendChild(r)}}():function(){s=function(t){setTimeout(a,0,t)}}(),p.setImmediate=n,p.clearImmediate=o}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,r(57),r(56))},function(t,e){t.exports=function(t,e,r){var n=[],o=t.length;if(0===o)return n;var i=e<0?Math.max(0,e+o):e||0;for(void 0!==r&&(o=r<0?r+o:r);o-- >i;)n[o-i]=t[o];return n}},function(t,e,r){"use strict";function n(t){var e=i(String(t||a));return e===a?[]:e.split(c)}function o(t){return i(t.join(s))}var i=r(19);e.parse=n,e.stringify=o;var a="",s=" ",c=/[ \t\n\r\f]+/g},,,,,function(t,e,r){function n(t,e){this._id=t,this._clearFn=e}var o=Function.prototype.apply;e.setTimeout=function(){return new n(o.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new n(o.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},r(434),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,r){"use strict";function n(t){return String(t).replace(o,i)}t.exports=n;var o=/[ \t]*\n+[ \t]*/g,i="\n"},function(t,e,r){"use strict";function n(){function t(){function t(s){var c=r[++e],u=i.call(arguments,0),l=u.slice(1),f=n.length,p=-1;if(s)return void a(s);for(;++p<f;)null!==l[p]&&void 0!==l[p]||(l[p]=n[p]);n=l,c?o(c,t).apply(null,n):a.apply(null,[null].concat(n))}var e=-1,n=i.call(arguments,0,-1),a=arguments[arguments.length-1];if("function"!=typeof a)throw new Error("Expected function as last argument, not "+a);t.apply(null,[null].concat(n))}function e(t){if("function"!=typeof t)throw new Error("Expected `fn` to be a function, not "+t);return r.push(t),n}var r=[],n={};return n.run=t,n.use=e,n}function o(t,e){function r(){var e,r=i.call(arguments,0),s=t.length>r.length;s&&r.push(n);try{e=t.apply(null,r)}catch(t){if(s&&a)throw t;return n(t)}s||(e&&"function"==typeof e.then?e.then(o,n):e instanceof Error?n(e):o(e))}function n(){a||(a=!0,e.apply(null,arguments))}function o(t){n(null,t)}var a;return r}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module trough
 * @fileoverview Middleware.  Inspired by `segmentio/ware`,
 *   but able to change the values from transformer to
 *   transformer.
 */
t.exports=n;var i=[].slice},function(t,e,r){"use strict";function n(t,e){e.tree=t.parse(e.file)}function o(t,e,r){function n(t,n,o){t?r(t):(e.tree=n,e.file=o,r())}t.run(e.tree,e.file,n)}function i(t,e){e.file.contents=t.stringify(e.tree,e.file)}function a(){function t(){for(var t=a(),e=S.length,r=-1;++r<e;)t.use.apply(null,S[r]);return t.data(m(!0,{},D)),t}function e(){var e,r,n,o;if(C)return t;for(;++j<S.length;)e=S[j],r=e[0],n=e[1],o=null,!1!==n&&(!0===n&&(e[1]=void 0),o=r.apply(t,e.slice(1)),x(o)&&L.use(o));return C=!0,j=1/0,t}function r(e,r){return y(e)?2===arguments.length?(f("data",C),D[e]=r,t):d(D,e)&&D[e]||null:e?(f("data",C),D=e,t):D}function n(e){function r(t){i(t.plugins),t.settings&&(s=m(s||{},t.settings))}function n(t){if(x(t))a(t);else{if("object"!=typeof t)throw new Error("Expected usable value, not `"+t+"`");"length"in t?a.apply(null,t):r(t)}}function i(t){var e,r;if(null===t||void 0===t);else{if(!("object"==typeof t&&"length"in t))throw new Error("Expected a list of plugins, not `"+t+"`");for(e=t.length,r=-1;++r<e;)n(t[r])}}function a(t,e){var r=o(t);r?(w(r[1])&&w(e)&&(e=m(r[1],e)),r[1]=e):S.push(A.call(arguments))}var s;if(f("use",C),null===e||void 0===e);else if(x(e))a.apply(null,arguments);else{if("object"!=typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?i(e):r(e)}return s&&(D.settings=m(D.settings||{},s)),t}function o(t){for(var e,r=S.length,n=-1;++n<r;)if(e=S[n],e[0]===t)return e}function i(r){var n,o=v(r);return e(),n=t.Parser,u("parse",n),s(n)?new n(String(o),o).parse():n(String(o),o)}function c(t,r,n){function o(e,o){function i(r,i,a){i=i||t,r?o(r):e?e(i):n(null,i,a)}L.run(t,v(r),i)}if(p(t),e(),!n&&x(r)&&(n=r,r=null),!n)return new Promise(o);o(null,n)}function q(t,e){function r(t,e){o=!0,g(t),n=e}var n,o=!1;return c(t,e,r),h("runSync","run",o),n}function E(r,n){var o,i=v(n);return e(),o=t.Compiler,l("stringify",o),p(r),s(o)?new o(r,i).compile():o(r,i)}function O(r,n){function o(e,o){function i(t){t?o(t):e?e(a):n(null,a)}var a=v(r);k.run(t,{file:a},i)}if(e(),u("process",t.Parser),l("process",t.Compiler),!n)return new Promise(o);o(null,n)}function T(r){function n(t){i=!0,g(t)}var o,i=!1;return e(),u("processSync",t.Parser),l("processSync",t.Compiler),o=v(r),O(o,n),h("processSync","process",i),o}var S=[],L=b(),D={},C=!1,j=-1;return t.data=r,t.freeze=e,t.attachers=S,t.use=n,t.parse=i,t.stringify=E,t.run=c,t.runSync=q,t.process=O,t.processSync=T,t}function s(t){return x(t)&&c(t.prototype)}function c(t){var e;for(e in t)return!0;return!1}function u(t,e){if(!x(e))throw new Error("Cannot `"+t+"` without `Parser`")}function l(t,e){if(!x(e))throw new Error("Cannot `"+t+"` without `Compiler`")}function f(t,e){if(e)throw new Error("Cannot invoke `"+t+"` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")}function p(t){if(!t||!y(t.type))throw new Error("Expected node, got `"+t+"`")}function h(t,e,r){if(!r)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}var d=r(4),m=r(237),g=r(177),v=r(449),b=r(443),y=r(161),x=r(453),w=r(261);t.exports=a().freeze();var A=[].slice,k=b().use(n).use(o).use(i)},function(t,e,r){"use strict";function n(t){return o(i(t))}function o(t){function e(e){var r=e&&e.children;if(!r)throw new Error("Missing children in `parent` for `modifier`");return a(r,t,e)}return e}function i(t){function e(e,r){return t(e,r,this)}return e}var a=r(169);t.exports=n},function(t,e,r){"use strict";function n(t,e){return a(t,e?o:i),t}function o(t){delete t.position}function i(t){t.position=void 0}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module unist:util:remove-position
 * @fileoverview Remove `position`s from a unist tree.
 */
var a=r(1);t.exports=n},function(t,e,r){"use strict";function n(t){return t&&"object"==typeof t?s(t,"position")||s(t,"type")?i(t.position):s(t,"start")||s(t,"end")?i(t):s(t,"line")||s(t,"column")?o(t):null:null}function o(t){return t&&"object"==typeof t||(t={}),a(t.line)+":"+a(t.column)}function i(t){return t&&"object"==typeof t||(t={}),o(t.start)+"-"+o(t.end)}function a(t){return t&&"number"==typeof t?t:1}var s=r(4);t.exports=n},,function(t,e,r){"use strict";(function(e){function n(t){var r,o,i;if(t){if(v(t)||g(t))t={contents:t};else if("message"in t&&"messages"in t)return t}else t={};if(!(this instanceof n))return new n(t);for(this.data={},this.messages=[],this.history=[],this.cwd=e.cwd(),o=-1,i=y.length;++o<i;)r=y[o],h(t,r)&&(this[r]=t[r]);for(r in t)-1===y.indexOf(r)&&(this[r]=t[r])}function o(t){var e=this.contents||"";return g(e)?e.toString(t):String(e)}function i(t,e,r){var n,o,i=this.path,a=m(e)||"1:1";return n={start:{line:null,column:null},end:{line:null,column:null}},e&&e.position&&(e=e.position),e&&(e.start?(n=e,e=e.start):n.start=e),o=new c(t.message||t),o.name=(i?i+":":"")+a,o.file=i||"",o.reason=t.message||t,o.line=e?e.line:null,o.column=e?e.column:null,o.location=n,o.ruleId=r||null,o.source=null,o.fatal=!1,t.stack&&(o.stack=t.stack),this.messages.push(o),o}function a(){var t=this.message.apply(this,arguments);throw t.fatal=!0,t}function s(){}function c(t){this.message=t}function u(t,e){if(-1!==t.indexOf(p.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+p.sep+"`")}function l(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function f(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}var p=r(146),h=r(4),d=r(433),m=r(447),g=r(259),v=r(161);t.exports=n;var b=n.prototype;b.toString=o,b.message=i,b.fail=a,b.warn=i;var y=["history","path","basename","stem","extname","dirname"];Object.defineProperty(b,"path",{get:function(){return this.history[this.history.length-1]},set:function(t){l(t,"path"),t!==this.path&&this.history.push(t)}}),Object.defineProperty(b,"dirname",{get:function(){return v(this.path)?p.dirname(this.path):void 0},set:function(t){f(this.path,"dirname"),this.path=p.join(t||"",this.basename)}}),Object.defineProperty(b,"basename",{get:function(){return v(this.path)?p.basename(this.path):void 0},set:function(t){l(t,"basename"),u(t,"basename"),this.path=p.join(this.dirname||"",t)}}),Object.defineProperty(b,"extname",{get:function(){return v(this.path)?p.extname(this.path):void 0},set:function(t){var e=t||"";if(u(e,"extname"),f(this.path,"extname"),e){if("."!==e.charAt(0))throw new Error("`extname` must start with `.`");if(-1!==e.indexOf(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=d(this.path,e)}}),Object.defineProperty(b,"stem",{get:function(){return v(this.path)?p.basename(this.path,this.extname):void 0},set:function(t){l(t,"stem"),u(t,"stem"),this.path=p.join(this.dirname||"",t+(this.extname||""))}}),s.prototype=Error.prototype,c.prototype=new s,b=c.prototype,b.file=b.name=b.reason=b.message=b.stack="",b.fatal=b.column=b.line=null}).call(e,r(56))},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function s(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function c(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function u(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&y(t))this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!x(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(t){var e=t.toUpperCase();return w.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var r=e.body;if(t instanceof h){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=p(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function g(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],y=function(t){return t&&DataView.prototype.isPrototypeOf(t)},x=ArrayBuffer.isView||function(t){return t&&b.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},f.call(h.prototype),f.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];g.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=h,t.Response=g,t.fetch=function(t,e){return new Promise(function(r,n){var o=new h(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new g(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&v.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(t,e,r){function n(t){function e(){var e=s(arguments),r=e[e.length-1],n=this,a="function"==typeof r?e.pop():c;if(!t)return a.apply(n,[null].concat(e));if(i(t))return u(t).apply(n,e.concat(a));if(t.length>e.length)try{return t.apply(n,e.concat(a))}catch(t){return a(t)}return o(t,a).apply(n,e)}return e}function o(t,e){return function(){var r;try{r=t.apply(this,arguments)}catch(t){return e(t)}a(r)?r.then(function(t){e(null,t)},e):r instanceof Error?e(r):e(null,r)}}function i(t){return t&&t.constructor&&"GeneratorFunction"==t.constructor.name}function a(t){return t&&"function"==typeof t.then}var s=r(435),c=function(){},u=r(452);t.exports=n},function(t,e,r){(function(e){function r(t){var r=c(t);return function(o){function i(t,r){e(function(){o.call(s,t,r)})}function a(t,r){var o;if(arguments.length>2&&(r=f.call(arguments,1)),t)try{o=c.throw(t)}catch(t){return i(t)}if(!t)try{o=c.next(r)}catch(t){return i(t)}if(o.done)return i(null,o.value);if(o.value=n(o.value,s),"function"!=typeof o.value)a(new TypeError('You may only yield a function, promise, generator, array, or object, but the following was passed: "'+String(o.value)+'"'));else{var u=!1;try{o.value.call(s,function(){u||(u=!0,a.apply(s,arguments))})}catch(t){e(function(){u||(u=!0,a(t))})}}}var s=this,c=t;if(r){var u=f.call(arguments),p=u.length,h=p&&"function"==typeof u[p-1];o=h?u.pop():l,c=t.apply(this,u)}else o=o||l;a()}}function n(t,e){return c(t)?r(t.call(e)):s(t)?r(t):a(t)?i(t):"function"==typeof t?t:u(t)||Array.isArray(t)?o.call(e,t):t}function o(t){var r=this,o=Array.isArray(t);return function(i){var a,s=Object.keys(t),c=s.length,u=o?new Array(c):new t.constructor;if(!c)return void e(function(){i(null,u)});if(!o)for(var l=0;l<c;l++)u[s[l]]=void 0;for(var l=0;l<s.length;l++)!function(t,e){if(!a)try{if("function"!=typeof(t=n(t,r)))return u[e]=t,--c||i(null,u);t.call(r,function(t,r){if(!a){if(t)return a=!0,i(t);u[e]=r,--c||i(null,u)}})}catch(t){a=!0,i(t)}}(t[s[l]],s[l])}}function i(t){return function(e){t.then(function(t){e(null,t)},e)}}function a(t){return t&&"function"==typeof t.then}function s(t){return t&&"function"==typeof t.next&&"function"==typeof t.throw}function c(t){return t&&t.constructor&&"GeneratorFunction"==t.constructor.name}function u(t){return t&&Object==t.constructor}function l(t){t&&e(function(){throw t})}var f=Array.prototype.slice;t.exports=r}).call(e,r(441).setImmediate)},function(t,e){t.exports=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},,,function(t,e,r){t.exports=r(167)}],[456]);
            return { page: comp.default }
          })
        