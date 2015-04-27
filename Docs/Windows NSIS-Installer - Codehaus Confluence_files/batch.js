try {
/* module-key = 'com.atlassian.plugins.jquery:jquery', location = '/jquery.js' */
(function(q){function Ra(a,b,c){if(void 0===c&&1===a.nodeType)if(c="data-"+b.replace(Xb,"-$1").toLowerCase(),c=a.getAttribute(c),"string"===typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:d.isNumeric(c)?+c:Yb.test(c)?d.parseJSON(c):c}catch(e){}d.data(a,b,c)}else c=void 0;return c}function va(a){for(var b in a)if(!("data"===b&&d.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Sa(a,b,c){var e=b+"defer",f=b+"queue",g=b+"mark",i=d._data(a,e);i&&(("queue"===c||!d._data(a,f))&&
("mark"===c||!d._data(a,g)))&&setTimeout(function(){!d._data(a,f)&&!d._data(a,g)&&(d.removeData(a,e,!0),i.fire())},0)}function C(){return!1}function aa(){return!0}function Ta(a,b,c){b=b||0;if(d.isFunction(b))return d.grep(a,function(a,e){return!!b.call(a,e,a)===c});if(b.nodeType)return d.grep(a,function(a){return a===b===c});if("string"===typeof b){var e=d.grep(a,function(a){return 1===a.nodeType});if(Zb.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a){return 0<=d.inArray(a,
b)===c})}function Ua(a){var b=Va.split("|"),a=a.createDocumentFragment();if(a.createElement)for(;b.length;)a.createElement(b.pop());return a}function Wa(a,b){if(1===b.nodeType&&d.hasData(a)){var c,e,f;e=d._data(a);var g=d._data(b,e),i=e.events;if(i)for(c in delete g.handle,g.events={},i){e=0;for(f=i[c].length;e<f;e++)d.event.add(b,c,i[c][e])}g.data&&(g.data=d.extend({},g.data))}}function Xa(a,b){var c;if(1===b.nodeType){b.clearAttributes&&b.clearAttributes();b.mergeAttributes&&b.mergeAttributes(a);
c=b.nodeName.toLowerCase();if("object"===c)b.outerHTML=a.outerHTML;else if("input"===c&&("checkbox"===a.type||"radio"===a.type)){if(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value)b.value=a.value}else"option"===c?b.selected=a.defaultSelected:"input"===c||"textarea"===c?b.defaultValue=a.defaultValue:"script"===c&&b.text!==a.text&&(b.text=a.text);b.removeAttribute(d.expando);b.removeAttribute("_submit_attached");b.removeAttribute("_change_attached")}}function ba(a){return"undefined"!==
typeof a.getElementsByTagName?a.getElementsByTagName("*"):"undefined"!==typeof a.querySelectorAll?a.querySelectorAll("*"):[]}function Ya(a){if("checkbox"===a.type||"radio"===a.type)a.defaultChecked=a.checked}function Za(a){var b=(a.nodeName||"").toLowerCase();"input"===b?Ya(a):"script"!==b&&"undefined"!==typeof a.getElementsByTagName&&d.grep(a.getElementsByTagName("input"),Ya)}function $a(a,b,c){var e="width"===b?a.offsetWidth:a.offsetHeight,f="width"===b?1:0;if(0<e){if("border"!==c)for(;4>f;f+=2)c||
(e-=parseFloat(d.css(a,"padding"+H[f]))||0),e="margin"===c?e+(parseFloat(d.css(a,c+H[f]))||0):e-(parseFloat(d.css(a,"border"+H[f]+"Width"))||0);return e+"px"}e=I(a,b);if(0>e||null==e)e=a.style[b];if(wa.test(e))return e;e=parseFloat(e)||0;if(c)for(;4>f;f+=2)e+=parseFloat(d.css(a,"padding"+H[f]))||0,"padding"!==c&&(e+=parseFloat(d.css(a,"border"+H[f]+"Width"))||0),"margin"===c&&(e+=parseFloat(d.css(a,c+H[f]))||0);return e+"px"}function ab(a){return function(b,c){"string"!==typeof b&&(c=b,b="*");if(d.isFunction(c))for(var e=
b.toLowerCase().split(bb),f=0,g=e.length,i,h;f<g;f++)i=e[f],(h=/^\+/.test(i))&&(i=i.substr(1)||"*"),i=a[i]=a[i]||[],i[h?"unshift":"push"](c)}}function ca(a,b,c,e,d,g){d=d||b.dataTypes[0];g=g||{};g[d]=!0;for(var d=a[d],i=0,h=d?d.length:0,k=a===xa,n;i<h&&(k||!n);i++)n=d[i](b,c,e),"string"===typeof n&&(!k||g[n]?n=void 0:(b.dataTypes.unshift(n),n=ca(a,b,c,e,n,g)));if((k||!n)&&!g["*"])n=ca(a,b,c,e,"*",g);return n}function cb(a,b){var c,e,f=d.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((f[c]?
a:e||(e={}))[c]=b[c]);e&&d.extend(!0,a,e)}function ya(a,b,c,e){if(d.isArray(b))d.each(b,function(b,d){c||$b.test(a)?e(a,d):ya(a+"["+("object"===typeof d?b:"")+"]",d,c,e)});else if(!c&&"object"===d.type(b))for(var f in b)ya(a+"["+f+"]",b[f],c,e);else e(a,b)}function db(){try{return new q.XMLHttpRequest}catch(a){}}function eb(){setTimeout(ac,0);return da=d.now()}function ac(){da=void 0}function D(a,b){var c={};d.each(ea.concat.apply([],ea.slice(0,b)),function(){c[this]=a});return c}function fb(a){if(!za[a]){var b=
l.body,c=d("<"+a+">").appendTo(b),e=c.css("display");c.remove();if("none"===e||""===e){v||(v=l.createElement("iframe"),v.frameBorder=v.width=v.height=0);b.appendChild(v);if(!K||!v.createElement)K=(v.contentWindow||v.contentDocument).document,K.write((d.support.boxModel?"<!doctype html>":"")+"<html><body>"),K.close();c=K.createElement(a);K.body.appendChild(c);e=d.css(c,"display");b.removeChild(v)}za[a]=e}return za[a]}function gb(a){return d.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:
!1}var l=q.document,bc=q.location,d,hb=function(){if(!j.isReady){try{l.documentElement.doScroll("left")}catch(a){setTimeout(hb,1);return}j.ready()}},j=function(a,b){return new j.fn.init(a,b,ib)},cc=q.jQuery,dc=q.$,ib,ec=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,jb=/\S/,kb=/^\s+/,lb=/\s+$/,fc=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,gc=/^[\],:{}\s]*$/,hc=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,ic=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,jc=/(?:^|:|,)(?:\s*\[)+/g,kc=/(webkit)[ \/]([\w.]+)/,
lc=/(opera)(?:.*version)?[ \/]([\w.]+)/,mc=/(msie) ([\w.]+)/,nc=/(mozilla)(?:.*? rv:([\w.]+))?/,oc=/-([a-z]|[0-9])/ig,pc=/^-ms-/,qc=function(a,b){return(b+"").toUpperCase()},rc=q.navigator.userAgent,fa,ga,P,sc=Object.prototype.toString,Aa=Object.prototype.hasOwnProperty,Ba=Array.prototype.push,X=Array.prototype.slice,mb=String.prototype.trim,nb=Array.prototype.indexOf,ob={};j.fn=j.prototype={constructor:j,init:function(a,b,c){var e;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=
1,this;if("body"===a&&!b&&l.body)return this.context=l,this[0]=l.body,this.selector=a,this.length=1,this;if("string"===typeof a){if((e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&3<=a.length?[null,a,null]:ec.exec(a))&&(e[1]||!b)){if(e[1])return c=(b=b instanceof j?b[0]:b)?b.ownerDocument||b:l,(a=fc.exec(a))?j.isPlainObject(b)?(a=[l.createElement(a[1])],j.fn.attr.call(a,b,!0)):a=[c.createElement(a[1])]:(a=j.buildFragment([e[1]],[c]),a=(a.cacheable?j.clone(a.fragment):a.fragment).childNodes),j.merge(this,
a);if((b=l.getElementById(e[2]))&&b.parentNode){if(b.id!==e[2])return c.find(a);this.length=1;this[0]=b}this.context=l;this.selector=a;return this}return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a)}if(j.isFunction(a))return c.ready(a);void 0!==a.selector&&(this.selector=a.selector,this.context=a.context);return j.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return X.call(this,0)},get:function(a){return null==a?this.toArray():
0>a?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();j.isArray(a)?Ba.apply(e,a):j.merge(e,a);e.prevObject=this;e.context=this.context;"find"===b?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return j.each(this,a,b)},ready:function(a){j.bindReady();ga.add(a);return this},eq:function(a){a=+a;return-1===a?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},
slice:function(){return this.pushStack(X.apply(this,arguments),"slice",X.call(arguments).join(","))},map:function(a){return this.pushStack(j.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:Ba,sort:[].sort,splice:[].splice};j.fn.init.prototype=j.fn;j.extend=j.fn.extend=function(){var a,b,c,e,d,g=arguments[0]||{},i=1,h=arguments.length,k=!1;"boolean"===typeof g&&(k=g,g=arguments[1]||{},i=2);"object"!==typeof g&&!j.isFunction(g)&&(g=
{});h===i&&(g=this,--i);for(;i<h;i++)if(null!=(a=arguments[i]))for(b in a)c=g[b],e=a[b],g!==e&&(k&&e&&(j.isPlainObject(e)||(d=j.isArray(e)))?(d?(d=!1,c=c&&j.isArray(c)?c:[]):c=c&&j.isPlainObject(c)?c:{},g[b]=j.extend(k,c,e)):void 0!==e&&(g[b]=e));return g};j.extend({noConflict:function(a){q.$===j&&(q.$=dc);a&&q.jQuery===j&&(q.jQuery=cc);return j},isReady:!1,readyWait:1,holdReady:function(a){a?j.readyWait++:j.ready(!0)},ready:function(a){if(!0===a&&!--j.readyWait||!0!==a&&!j.isReady){if(!l.body)return setTimeout(j.ready,
1);j.isReady=!0;!0!==a&&0<--j.readyWait||(ga.fireWith(l,[j]),j.fn.trigger&&j(l).trigger("ready").off("ready"))}},bindReady:function(){if(!ga){ga=j.Callbacks("once memory");if("complete"===l.readyState)return setTimeout(j.ready,1);if(l.addEventListener)l.addEventListener("DOMContentLoaded",P,!1),q.addEventListener("load",j.ready,!1);else if(l.attachEvent){l.attachEvent("onreadystatechange",P);q.attachEvent("onload",j.ready);var a=!1;try{a=null==q.frameElement}catch(b){}l.documentElement.doScroll&&
a&&hb()}}},isFunction:function(a){return"function"===j.type(a)},isArray:Array.isArray||function(a){return"array"===j.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):ob[sc.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==j.type(a)||a.nodeType||j.isWindow(a))return!1;try{if(a.constructor&&!Aa.call(a,"constructor")&&!Aa.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);
return void 0===c||Aa.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw Error(a);},parseJSON:function(a){if("string"!==typeof a||!a)return null;a=j.trim(a);if(q.JSON&&q.JSON.parse)return q.JSON.parse(a);if(gc.test(a.replace(hc,"@").replace(ic,"]").replace(jc,"")))return(new Function("return "+a))();j.error("Invalid JSON: "+a)},parseXML:function(a){if("string"!==typeof a||!a)return null;var b,c;try{q.DOMParser?(c=new DOMParser,b=c.parseFromString(a,"text/xml")):
(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a))}catch(e){b=void 0}(!b||!b.documentElement||b.getElementsByTagName("parsererror").length)&&j.error("Invalid XML: "+a);return b},noop:function(){},globalEval:function(a){a&&jb.test(a)&&(q.execScript||function(a){q.eval.call(q,a)})(a)},camelCase:function(a){return a.replace(pc,"ms-").replace(oc,qc)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,c){var e,d=0,g=a.length,i=void 0===
g||j.isFunction(a);if(c)if(i)for(e in a){if(!1===b.apply(a[e],c))break}else for(;d<g&&!1!==b.apply(a[d++],c););else if(i)for(e in a){if(!1===b.call(a[e],e,a[e]))break}else for(;d<g&&!1!==b.call(a[d],d,a[d++]););return a},trim:mb?function(a){return null==a?"":mb.call(a)}:function(a){return null==a?"":a.toString().replace(kb,"").replace(lb,"")},makeArray:function(a,b){var c=b||[];if(null!=a){var e=j.type(a);null==a.length||"string"===e||"function"===e||"regexp"===e||j.isWindow(a)?Ba.call(c,a):j.merge(c,
a)}return c},inArray:function(a,b,c){var e;if(b){if(nb)return nb.call(b,a,c);e=b.length;for(c=c?0>c?Math.max(0,e+c):c:0;c<e;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=a.length,e=0;if("number"===typeof b.length)for(var d=b.length;e<d;e++)a[c++]=b[e];else for(;void 0!==b[e];)a[c++]=b[e++];a.length=c;return a},grep:function(a,b,c){for(var e=[],d,c=!!c,g=0,i=a.length;g<i;g++)d=!!b(a[g],g),c!==d&&e.push(a[g]);return e},map:function(a,b,c){var e,d,g=[],i=0,h=a.length;if(a instanceof
j||void 0!==h&&"number"===typeof h&&(0<h&&a[0]&&a[h-1]||0===h||j.isArray(a)))for(;i<h;i++)e=b(a[i],i,c),null!=e&&(g[g.length]=e);else for(d in a)e=b(a[d],d,c),null!=e&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,b){if("string"===typeof b)var c=a[b],b=a,a=c;if(j.isFunction(a)){var e=X.call(arguments,2),c=function(){return a.apply(b,e.concat(X.call(arguments)))};c.guid=a.guid=a.guid||c.guid||j.guid++;return c}},access:function(a,b,c,e,d,g,i){var h,k=null==c,n=0,r=a.length;if(c&&
"object"===typeof c){for(n in c)j.access(a,b,n,c[n],1,g,e);d=1}else if(void 0!==e){h=void 0===i&&j.isFunction(e);k&&(h?(h=b,b=function(a,b,c){return h.call(j(a),c)}):(b.call(a,e),b=null));if(b)for(;n<r;n++)b(a[n],c,h?e.call(a[n],n,b(a[n],c)):e,i);d=1}return d?a:k?b.call(a):r?b(a[0],c):g},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();a=kc.exec(a)||lc.exec(a)||mc.exec(a)||0>a.indexOf("compatible")&&nc.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},sub:function(){function a(b,
e){return new a.fn.init(b,e)}j.extend(!0,a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(c,e){e&&(e instanceof j&&!(e instanceof a))&&(e=a(e));return j.fn.init.call(this,c,e,b)};a.fn.init.prototype=a.fn;var b=a(l);return a},browser:{}});j.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){ob["[object "+b+"]"]=b.toLowerCase()});fa=j.uaMatch(rc);fa.browser&&(j.browser[fa.browser]=!0,j.browser.version=fa.version);
j.browser.webkit&&(j.browser.safari=!0);jb.test("\u00a0")&&(kb=/^[\s\xA0]+/,lb=/[\s\xA0]+$/);ib=j(l);l.addEventListener?P=function(){l.removeEventListener("DOMContentLoaded",P,false);j.ready()}:l.attachEvent&&(P=function(){if(l.readyState==="complete"){l.detachEvent("onreadystatechange",P);j.ready()}});d=j;var qb={};d.Callbacks=function(a){var b;if(a){if(!(b=qb[a])){b=a;var c=qb[b]={},e,f;b=b.split(/\s+/);e=0;for(f=b.length;e<f;e++)c[b[e]]=true;b=c}}else b={};var a=b,g=[],i=[],h,k,n,r,L,Q,l=function(b){var c,
e,f,h;c=0;for(e=b.length;c<e;c++){f=b[c];h=d.type(f);h==="array"?l(f):h==="function"&&(!a.unique||!o.has(f))&&g.push(f)}},j=function(b,c){c=c||[];h=!a.memory||[b,c];n=k=true;Q=r||0;r=0;for(L=g.length;g&&Q<L;Q++)if(g[Q].apply(b,c)===false&&a.stopOnFalse){h=true;break}n=false;if(g)if(a.once)h===true?o.disable():g=[];else if(i&&i.length){h=i.shift();o.fireWith(h[0],h[1])}},o={add:function(){if(g){var a=g.length;l(arguments);if(n)L=g.length;else if(h&&h!==true){r=a;j(h[0],h[1])}}return this},remove:function(){if(g)for(var b=
arguments,c=0,e=b.length;c<e;c++)for(var d=0;d<g.length;d++)if(b[c]===g[d]){if(n&&d<=L){L--;d<=Q&&Q--}g.splice(d--,1);if(a.unique)break}return this},has:function(a){if(g)for(var b=0,c=g.length;b<c;b++)if(a===g[b])return true;return false},empty:function(){g=[];return this},disable:function(){g=i=h=void 0;return this},disabled:function(){return!g},lock:function(){i=void 0;(!h||h===true)&&o.disable();return this},locked:function(){return!i},fireWith:function(b,c){i&&(n?a.once||i.push([b,c]):(!a.once||
!h)&&j(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!k}};return o};var Ca=[].slice;d.extend({Deferred:function(a){var b=d.Callbacks("once memory"),c=d.Callbacks("once memory"),e=d.Callbacks("memory"),f="pending",g={resolve:b,reject:c,notify:e},i={done:b.add,fail:c.add,progress:e.add,state:function(){return f},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){h.done(a).fail(b).progress(c);return this},always:function(){h.done.apply(h,arguments).fail.apply(h,
arguments);return this},pipe:function(a,b,c){return d.Deferred(function(e){d.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],f=b[1],g;if(d.isFunction(c))h[a](function(){if((g=c.apply(this,arguments))&&d.isFunction(g.promise))g.promise().then(e.resolve,e.reject,e.notify);else e[f+"With"](this===h?e:this,[g])});else h[a](e[f])})}).promise()},promise:function(a){if(a==null)a=i;else for(var b in i)a[b]=i[b];return a}},h=i.promise({}),k;for(k in g){h[k]=g[k].fire;
h[k+"With"]=g[k].fireWith}h.done(function(){f="resolved"},c.disable,e.lock).fail(function(){f="rejected"},b.disable,e.lock);a&&a.call(h,h);return h},when:function(a){function b(a){return function(b){e[a]=arguments.length>1?Ca.call(arguments,0):b;--h||k.resolveWith(k,e)}}function c(a){return function(b){i[a]=arguments.length>1?Ca.call(arguments,0):b;k.notifyWith(n,i)}}var e=Ca.call(arguments,0),f=0,g=e.length,i=Array(g),h=g,k=g<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),n=k.promise();if(g>1){for(;f<
g;f++)e[f]&&e[f].promise&&d.isFunction(e[f].promise)?e[f].promise().then(b(f),k.reject,c(f)):--h;h||k.resolveWith(k,e)}else k!==a&&k.resolveWith(k,g?[a]:[]);return n}});var tc=d,Da;var s,Ea,R,ha,ia,u,E,Y,ja,Fa,S,m=l.createElement("div");m.setAttribute("className","t");m.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";Ea=m.getElementsByTagName("*");R=m.getElementsByTagName("a")[0];if(!Ea||!Ea.length||!R)Da={};else{ha=l.createElement("select");
ia=ha.appendChild(l.createElement("option"));u=m.getElementsByTagName("input")[0];s={leadingWhitespace:3===m.firstChild.nodeType,tbody:!m.getElementsByTagName("tbody").length,htmlSerialize:!!m.getElementsByTagName("link").length,style:/top/.test(R.getAttribute("style")),hrefNormalized:"/a"===R.getAttribute("href"),opacity:/^0.55/.test(R.style.opacity),cssFloat:!!R.style.cssFloat,checkOn:"on"===u.value,optSelected:ia.selected,getSetAttribute:"t"!==m.className,enctype:!!l.createElement("form").enctype,
html5Clone:"<:nav></:nav>"!==l.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0};d.boxModel=s.boxModel="CSS1Compat"===l.compatMode;u.checked=!0;s.noCloneChecked=u.cloneNode(!0).checked;ha.disabled=!0;s.optDisabled=!ia.disabled;try{delete m.test}catch(kd){s.deleteExpando=!1}!m.addEventListener&&(m.attachEvent&&m.fireEvent)&&(m.attachEvent("onclick",
function(){s.noCloneEvent=false}),m.cloneNode(!0).fireEvent("onclick"));u=l.createElement("input");u.value="t";u.setAttribute("type","radio");s.radioValue="t"===u.value;u.setAttribute("checked","checked");u.setAttribute("name","t");m.appendChild(u);E=l.createDocumentFragment();E.appendChild(m.lastChild);s.checkClone=E.cloneNode(!0).cloneNode(!0).lastChild.checked;s.appendChecked=u.checked;E.removeChild(u);E.appendChild(m);if(m.attachEvent)for(Fa in{submit:1,change:1,focusin:1})ja="on"+Fa,S=ja in m,
S||(m.setAttribute(ja,"return;"),S="function"===typeof m[ja]),s[Fa+"Bubbles"]=S;E.removeChild(m);E=ha=ia=m=u=null;d(function(){var a,b,c,e,f=l.getElementsByTagName("body")[0];if(f){a=l.createElement("div");a.style.cssText="padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px";f.insertBefore(a,f.firstChild);m=l.createElement("div");a.appendChild(m);m.innerHTML="<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>";
Y=m.getElementsByTagName("td");S=Y[0].offsetHeight===0;Y[0].style.display="";Y[1].style.display="none";s.reliableHiddenOffsets=S&&Y[0].offsetHeight===0;if(q.getComputedStyle){m.innerHTML="";b=l.createElement("div");b.style.width="0";b.style.marginRight="0";m.style.width="2px";m.appendChild(b);s.reliableMarginRight=(parseInt((q.getComputedStyle(b,null)||{marginRight:0}).marginRight,10)||0)===0}if(typeof m.style.zoom!=="undefined"){m.innerHTML="";m.style.width=m.style.padding="1px";m.style.border=0;
m.style.overflow="hidden";m.style.display="inline";m.style.zoom=1;s.inlineBlockNeedsLayout=m.offsetWidth===3;m.style.display="block";m.style.overflow="visible";m.innerHTML="<div style='width:5px;'></div>";s.shrinkWrapBlocks=m.offsetWidth!==3}m.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;";m.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
b=m.firstChild;c=b.firstChild;e=b.nextSibling.firstChild.firstChild;e={doesNotAddBorder:c.offsetTop!==5,doesAddBorderForTableAndCells:e.offsetTop===5};c.style.position="fixed";c.style.top="20px";e.fixedPosition=c.offsetTop===20||c.offsetTop===15;c.style.position=c.style.top="";b.style.overflow="hidden";b.style.position="relative";e.subtractsBorderForOverflowNotVisible=c.offsetTop===-5;e.doesNotIncludeMarginInBodyOffset=f.offsetTop!==1;if(q.getComputedStyle){m.style.marginTop="1%";s.pixelMargin=(q.getComputedStyle(m,
null)||{marginTop:0}).marginTop!=="1%"}if(typeof a.style.zoom!=="undefined")a.style.zoom=1;f.removeChild(a);m=null;d.extend(s,e)}});Da=s}tc.support=Da;var Yb=/^(?:\{.*\}|\[.*\])$/,Xb=/([A-Z])/g;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!va(a)},data:function(a,b,c,e){if(d.acceptData(a)){var f;f=
d.expando;var g=typeof b==="string",i=a.nodeType,h=i?d.cache:a,k=i?a[f]:a[f]&&f,n=b==="events";if(k&&h[k]&&(n||e||h[k].data)||!(g&&c===void 0)){k||(i?a[f]=k=++d.uuid:k=f);if(!h[k]){h[k]={};if(!i)h[k].toJSON=d.noop}if(typeof b==="object"||typeof b==="function")e?h[k]=d.extend(h[k],b):h[k].data=d.extend(h[k].data,b);f=a=h[k];if(!e){if(!a.data)a.data={};a=a.data}c!==void 0&&(a[d.camelCase(b)]=c);if(n&&!a[b])return f.events;if(g){c=a[b];c==null&&(c=a[d.camelCase(b)])}else c=a;return c}}},removeData:function(a,
b,c){if(d.acceptData(a)){var e,f,g,i=d.expando,h=a.nodeType,k=h?d.cache:a,n=h?a[i]:i;if(k[n]){if(b)if(e=c?k[n]:k[n].data){if(!d.isArray(b))if(b in e)b=[b];else{b=d.camelCase(b);b=b in e?[b]:b.split(" ")}f=0;for(g=b.length;f<g;f++)delete e[b[f]];if(!(c?va:d.isEmptyObject)(e))return}if(!c){delete k[n].data;if(!va(k[n]))return}d.support.deleteExpando||!k.setInterval?delete k[n]:k[n]=null;h&&(d.support.deleteExpando?delete a[i]:a.removeAttribute?a.removeAttribute(i):a[i]=null)}}},_data:function(a,b,c){return d.data(a,
b,c,true)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});d.fn.extend({data:function(a,b){var c,e,f,g,i,h=this[0],k=0,n=null;if(a===void 0){if(this.length){n=d.data(h);if(h.nodeType===1&&!d._data(h,"parsedAttrs")){f=h.attributes;for(i=f.length;k<i;k++){g=f[k].name;if(g.indexOf("data-")===0){g=d.camelCase(g.substring(5));Ra(h,g,n[g])}}d._data(h,"parsedAttrs",true)}}return n}if(typeof a==="object")return this.each(function(){d.data(this,
a)});c=a.split(".",2);c[1]=c[1]?"."+c[1]:"";e=c[1]+"!";return d.access(this,function(b){if(b===void 0){n=this.triggerHandler("getData"+e,[c[0]]);if(n===void 0&&h){n=d.data(h,a);n=Ra(h,a,n)}return n===void 0&&c[1]?this.data(c[0]):n}c[1]=b;this.each(function(){var f=d(this);f.triggerHandler("setData"+e,c);d.data(this,a,b);f.triggerHandler("changeData"+e,c)})},null,b,arguments.length>1,null,false)},removeData:function(a){return this.each(function(){d.removeData(this,a)})}});d.extend({_mark:function(a,
b){if(a){b=(b||"fx")+"mark";d._data(a,b,(d._data(a,b)||0)+1)}},_unmark:function(a,b,c){if(a!==true){c=b;b=a;a=false}if(b){var c=c||"fx",e=c+"mark";if(a=a?0:(d._data(b,e)||1)-1)d._data(b,e,a);else{d.removeData(b,e,true);Sa(b,c,"mark")}}},queue:function(a,b,c){var e;if(a){b=(b||"fx")+"queue";e=d._data(a,b);c&&(!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c));return e||[]}},dequeue:function(a,b){var b=b||"fx",c=d.queue(a,b),e=c.shift(),f={};e==="inprogress"&&(e=c.shift());if(e){b==="fx"&&c.unshift("inprogress");
d._data(a,b+".run",f);e.call(a,function(){d.dequeue(a,b)},f)}if(!c.length){d.removeData(a,b+"queue "+b+".run",true);Sa(a,b,"queue")}}});d.fn.extend({queue:function(a,b){var c=2;if(typeof a!=="string"){b=a;a="fx";c--}return arguments.length<c?d.queue(this[0],a):b===void 0?this:this.each(function(){var c=d.queue(this,a,b);a==="fx"&&c[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a;return this.queue(b||
"fx",function(b,e){var d=setTimeout(b,a);e.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){function c(){--i||e.resolveWith(f,[f])}if(typeof a!=="string"){b=a;a=void 0}for(var a=a||"fx",e=d.Deferred(),f=this,g=f.length,i=1,h=a+"defer",k=a+"queue",n=a+"mark",r;g--;)if(r=d.data(f[g],h,void 0,true)||(d.data(f[g],k,void 0,true)||d.data(f[g],n,void 0,true))&&d.data(f[g],h,d.Callbacks("once memory"),true)){i++;r.add(c)}c();return e.promise(b)}});
var rb=/[\n\t\r]/g,ka=/\s+/,uc=/\r/g,vc=/^(?:button|input)$/i,wc=/^(?:button|input|object|select|textarea)$/i,xc=/^a(?:rea)?$/i,sb=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,tb=d.support.getSetAttribute,x,ub,vb;d.fn.extend({attr:function(a,b){return d.access(this,d.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){d.removeAttr(this,a)})},prop:function(a,b){return d.access(this,d.prop,
a,b,arguments.length>1)},removeProp:function(a){a=d.propFix[a]||a;return this.each(function(){try{this[a]=void 0;delete this[a]}catch(b){}})},addClass:function(a){var b,c,e,f,g,i,h;if(d.isFunction(a))return this.each(function(b){d(this).addClass(a.call(this,b,this.className))});if(a&&typeof a==="string"){b=a.split(ka);c=0;for(e=this.length;c<e;c++){f=this[c];if(f.nodeType===1)if(!f.className&&b.length===1)f.className=a;else{g=" "+f.className+" ";i=0;for(h=b.length;i<h;i++)~g.indexOf(" "+b[i]+" ")||
(g=g+(b[i]+" "));f.className=d.trim(g)}}}return this},removeClass:function(a){var b,c,e,f,g,i,h;if(d.isFunction(a))return this.each(function(b){d(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a==="string"||a===void 0){b=(a||"").split(ka);c=0;for(e=this.length;c<e;c++){f=this[c];if(f.nodeType===1&&f.className)if(a){g=(" "+f.className+" ").replace(rb," ");i=0;for(h=b.length;i<h;i++)g=g.replace(" "+b[i]+" "," ");f.className=d.trim(g)}else f.className=""}}return this},toggleClass:function(a,
b){var c=typeof a,e=typeof b==="boolean";return d.isFunction(a)?this.each(function(c){d(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string")for(var f,g=0,i=d(this),h=b,k=a.split(ka);f=k[g++];){h=e?h:!i.hasClass(f);i[h?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean"){this.className&&d._data(this,"__className__",this.className);this.className=this.className||a===false?"":d._data(this,"__className__")||""}})},hasClass:function(a){for(var a=
" "+a+" ",b=0,c=this.length;b<c;b++)if(this[b].nodeType===1&&(" "+this[b].className+" ").replace(rb," ").indexOf(a)>-1)return true;return false},val:function(a){var b,c,e,f=this[0];if(arguments.length){e=d.isFunction(a);return this.each(function(c){var f=d(this);if(this.nodeType===1){c=e?a.call(this,c,f.val()):a;c==null?c="":typeof c==="number"?c=c+"":d.isArray(c)&&(c=d.map(c,function(a){return a==null?"":a+""}));b=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()];if(!b||!("set"in b)||
b.set(this,c,"value")===void 0)this.value=c}})}if(f){if((b=d.valHooks[f.type]||d.valHooks[f.nodeName.toLowerCase()])&&"get"in b&&(c=b.get(f,"value"))!==void 0)return c;c=f.value;return typeof c==="string"?c.replace(uc,""):c==null?"":c}}});d.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,e=a.selectedIndex,f=[],g=a.options,i=a.type==="select-one";if(e<0)return null;a=i?e:0;for(c=i?e+1:g.length;a<c;a++){b=g[a];
if(b.selected&&(d.support.optDisabled?!b.disabled:b.getAttribute("disabled")===null)&&(!b.parentNode.disabled||!d.nodeName(b.parentNode,"optgroup"))){b=d(b).val();if(i)return b;f.push(b)}}return i&&!f.length&&g.length?d(g[e]).val():f},set:function(a,b){var c=d.makeArray(b);d(a).find("option").each(function(){this.selected=d.inArray(d(this).val(),c)>=0});if(!c.length)a.selectedIndex=-1;return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,b,c,e){var f,
g,i=a.nodeType;if(a&&!(i===3||i===8||i===2)){if(e&&b in d.attrFn)return d(a)[b](c);if(typeof a.getAttribute==="undefined")return d.prop(a,b,c);if(e=i!==1||!d.isXMLDoc(a)){b=b.toLowerCase();g=d.attrHooks[b]||(sb.test(b)?ub:x)}if(c!==void 0)if(c===null)d.removeAttr(a,b);else{if(g&&"set"in g&&e&&(f=g.set(a,c,b))!==void 0)return f;a.setAttribute(b,""+c);return c}else{if(g&&"get"in g&&e&&(f=g.get(a,b))!==null)return f;f=a.getAttribute(b);return f===null?void 0:f}}},removeAttr:function(a,b){var c,e,f,g,
i,h=0;if(b&&a.nodeType===1){e=b.toLowerCase().split(ka);for(g=e.length;h<g;h++)if(f=e[h]){c=d.propFix[f]||f;(i=sb.test(f))||d.attr(a,f,"");a.removeAttribute(tb?f:c);i&&c in a&&(a[c]=false)}}},attrHooks:{type:{set:function(a,b){if(vc.test(a.nodeName)&&a.parentNode)d.error("type property can't be changed");else if(!d.support.radioValue&&b==="radio"&&d.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b);if(c)a.value=c;return b}}},value:{get:function(a,b){return x&&d.nodeName(a,"button")?x.get(a,
b):b in a?a.value:null},set:function(a,b,c){if(x&&d.nodeName(a,"button"))return x.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,b,c){var e,f,g;g=a.nodeType;if(a&&!(g===3||g===8||g===2)){if(g=g!==1||!d.isXMLDoc(a)){b=d.propFix[b]||b;f=d.propHooks[b]}return c!==
void 0?f&&"set"in f&&(e=f.set(a,c,b))!==void 0?e:a[b]=c:f&&"get"in f&&(e=f.get(a,b))!==null?e:a[b]}},propHooks:{tabIndex:{get:function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?parseInt(b.value,10):wc.test(a.nodeName)||xc.test(a.nodeName)&&a.href?0:void 0}}}});d.attrHooks.tabindex=d.propHooks.tabIndex;ub={get:function(a,b){var c,e=d.prop(a,b);return e===true||typeof e!=="boolean"&&(c=a.getAttributeNode(b))&&c.nodeValue!==false?b.toLowerCase():void 0},set:function(a,b,c){if(b===
false)d.removeAttr(a,c);else{b=d.propFix[c]||c;b in a&&(a[b]=true);a.setAttribute(c,c.toLowerCase())}return c}};tb||(vb={name:!0,id:!0,coords:!0},x=d.valHooks.button={get:function(a,b){var c;return(c=a.getAttributeNode(b))&&(vb[b]?c.nodeValue!=="":c.specified)?c.nodeValue:void 0},set:function(a,b,c){var e=a.getAttributeNode(c);if(!e){e=l.createAttribute(c);a.setAttributeNode(e)}return e.nodeValue=b+""}},d.attrHooks.tabindex.set=x.set,d.each(["width","height"],function(a,b){d.attrHooks[b]=d.extend(d.attrHooks[b],
{set:function(a,e){if(e===""){a.setAttribute(b,"auto");return e}}})}),d.attrHooks.contenteditable={get:x.get,set:function(a,b,c){b===""&&(b="false");x.set(a,b,c)}});d.support.hrefNormalized||d.each(["href","src","width","height"],function(a,b){d.attrHooks[b]=d.extend(d.attrHooks[b],{get:function(a){a=a.getAttribute(b,2);return a===null?void 0:a}})});d.support.style||(d.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||void 0},set:function(a,b){return a.style.cssText=""+b}});d.support.optSelected||
(d.propHooks.selected=d.extend(d.propHooks.selected,{get:function(a){if(a=a.parentNode){a.selectedIndex;a.parentNode&&a.parentNode.selectedIndex}return null}}));d.support.enctype||(d.propFix.enctype="encoding");d.support.checkOn||d.each(["radio","checkbox"],function(){d.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}});d.each(["radio","checkbox"],function(){d.valHooks[this]=d.extend(d.valHooks[this],{set:function(a,b){if(d.isArray(b))return a.checked=d.inArray(d(a).val(),
b)>=0}})});var Ga=/^(?:textarea|input|select)$/i,wb=/^([^\.]*)?(?:\.(.+))?$/,yc=/(?:^|\s)hover(\.\S+)?\b/,zc=/^key/,Ac=/^(?:mouse|contextmenu)|click/,xb=/^(?:focusinfocus|focusoutblur)$/,Bc=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,Cc=function(a){if(a=Bc.exec(a)){a[1]=(a[1]||"").toLowerCase();a[3]=a[3]&&RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)")}return a},yb=function(a){return d.event.special.hover?a:a.replace(yc,"mouseenter$1 mouseleave$1")};d.event={add:function(a,b,c,e,f){var g,i,h,k,n,r,l,j,o;if(!(a.nodeType===
3||a.nodeType===8||!b||!c||!(g=d._data(a)))){if(c.handler){l=c;c=l.handler;f=l.selector}if(!c.guid)c.guid=d.guid++;h=g.events;if(!h)g.events=h={};i=g.handle;if(!i){g.handle=i=function(a){return typeof d!=="undefined"&&(!a||d.event.triggered!==a.type)?d.event.dispatch.apply(i.elem,arguments):void 0};i.elem=a}b=d.trim(yb(b)).split(" ");for(g=0;g<b.length;g++){k=wb.exec(b[g])||[];n=k[1];r=(k[2]||"").split(".").sort();o=d.event.special[n]||{};n=(f?o.delegateType:o.bindType)||n;o=d.event.special[n]||{};
k=d.extend({type:n,origType:k[1],data:e,handler:c,guid:c.guid,selector:f,quick:f&&Cc(f),namespace:r.join(".")},l);j=h[n];if(!j){j=h[n]=[];j.delegateCount=0;if(!o.setup||o.setup.call(a,e,r,i)===false)a.addEventListener?a.addEventListener(n,i,false):a.attachEvent&&a.attachEvent("on"+n,i)}if(o.add){o.add.call(a,k);if(!k.handler.guid)k.handler.guid=c.guid}f?j.splice(j.delegateCount++,0,k):j.push(k);d.event.global[n]=true}a=null}},global:{},remove:function(a,b,c,e,f){var g=d.hasData(a)&&d._data(a),i,h,
k,n,r,j,l,o,m,p;if(g&&(l=g.events)){b=d.trim(yb(b||"")).split(" ");for(i=0;i<b.length;i++){h=wb.exec(b[i])||[];k=n=h[1];h=h[2];if(k){o=d.event.special[k]||{};k=(e?o.delegateType:o.bindType)||k;m=l[k]||[];r=m.length;h=h?RegExp("(^|\\.)"+h.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(j=0;j<m.length;j++){p=m[j];if((f||n===p.origType)&&(!c||c.guid===p.guid)&&(!h||h.test(p.namespace))&&(!e||e===p.selector||e==="**"&&p.selector)){m.splice(j--,1);p.selector&&m.delegateCount--;o.remove&&o.remove.call(a,
p)}}if(m.length===0&&r!==m.length){(!o.teardown||o.teardown.call(a,h)===false)&&d.removeEvent(a,k,g.handle);delete l[k]}}else for(k in l)d.event.remove(a,k+b[i],c,e,true)}if(d.isEmptyObject(l)){if(b=g.handle)b.elem=null;d.removeData(a,["events","handle"],true)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(a,b,c,e){if(!c||!(c.nodeType===3||c.nodeType===8)){var f=a.type||a,g=[],i,h,k,n,r;if(!xb.test(f+d.event.triggered)){if(f.indexOf("!")>=0){f=f.slice(0,-1);i=true}if(f.indexOf(".")>=
0){g=f.split(".");f=g.shift();g.sort()}if(c&&!d.event.customEvent[f]||d.event.global[f]){a=typeof a==="object"?a[d.expando]?a:new d.Event(f,a):new d.Event(f);a.type=f;a.isTrigger=true;a.exclusive=i;a.namespace=g.join(".");a.namespace_re=a.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;i=f.indexOf(":")<0?"on"+f:"";if(c){a.result=void 0;if(!a.target)a.target=c;b=b!=null?d.makeArray(b):[];b.unshift(a);k=d.event.special[f]||{};if(!(k.trigger&&k.trigger.apply(c,b)===false)){r=[[c,k.bindType||
f]];if(!e&&!k.noBubble&&!d.isWindow(c)){n=k.delegateType||f;g=xb.test(n+f)?c:c.parentNode;for(h=null;g;g=g.parentNode){r.push([g,n]);h=g}h&&h===c.ownerDocument&&r.push([h.defaultView||h.parentWindow||q,n])}for(h=0;h<r.length&&!a.isPropagationStopped();h++){g=r[h][0];a.type=r[h][1];(n=(d._data(g,"events")||{})[a.type]&&d._data(g,"handle"))&&n.apply(g,b);(n=i&&g[i])&&(d.acceptData(g)&&n.apply(g,b)===false)&&a.preventDefault()}a.type=f;if(!e&&!a.isDefaultPrevented()&&(!k._default||k._default.apply(c.ownerDocument,
b)===false)&&!(f==="click"&&d.nodeName(c,"a"))&&d.acceptData(c))if(i&&c[f]&&(f!=="focus"&&f!=="blur"||a.target.offsetWidth!==0)&&!d.isWindow(c)){(h=c[i])&&(c[i]=null);d.event.triggered=f;c[f]();d.event.triggered=void 0;h&&(c[i]=h)}return a.result}}else{c=d.cache;for(h in c)c[h].events&&c[h].events[f]&&d.event.trigger(a,b,c[h].handle.elem,true)}}}}},dispatch:function(a){var a=d.event.fix(a||q.event),b=(d._data(this,"events")||{})[a.type]||[],c=b.delegateCount,e=[].slice.call(arguments,0),f=!a.exclusive&&
!a.namespace,g=d.event.special[a.type]||{},i=[],h,k,n,r,j,l,o;e[0]=a;a.delegateTarget=this;if(!(g.preDispatch&&g.preDispatch.call(this,a)===false)){if(c&&!(a.button&&a.type==="click")){n=d(this);n.context=this.ownerDocument||this;for(k=a.target;k!=this;k=k.parentNode||this)if(k.disabled!==true){j={};l=[];n[0]=k;for(h=0;h<c;h++){r=b[h];o=r.selector;if(j[o]===void 0){var m=j,p=o,B;if(r.quick){B=r.quick;var s=k.attributes||{};B=(!B[1]||k.nodeName.toLowerCase()===B[1])&&(!B[2]||(s.id||{}).value===B[2])&&
(!B[3]||B[3].test((s["class"]||{}).value))}else B=n.is(o);m[p]=B}j[o]&&l.push(r)}l.length&&i.push({elem:k,matches:l})}}b.length>c&&i.push({elem:this,matches:b.slice(c)});for(h=0;h<i.length&&!a.isPropagationStopped();h++){c=i[h];a.currentTarget=c.elem;for(b=0;b<c.matches.length&&!a.isImmediatePropagationStopped();b++){r=c.matches[b];if(f||!a.namespace&&!r.namespace||a.namespace_re&&a.namespace_re.test(r.namespace)){a.data=r.data;a.handleObj=r;r=((d.event.special[r.origType]||{}).handle||r.handler).apply(c.elem,
e);if(r!==void 0){a.result=r;if(r===false){a.preventDefault();a.stopPropagation()}}}}}g.postDispatch&&g.postDispatch.call(this,a);return a.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:["char","charCode","key","keyCode"],filter:function(a,b){if(a.which==null)a.which=b.charCode!=null?b.charCode:b.keyCode;return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(a,b){var c,e,d=b.button,g=b.fromElement;if(a.pageX==null&&b.clientX!=null){c=a.target.ownerDocument||l;e=c.documentElement;c=c.body;a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0);a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)}if(!a.relatedTarget&&g)a.relatedTarget=g===a.target?b.toElement:g;if(!a.which&&d!==void 0)a.which=d&1?1:d&2?3:d&4?2:0;return a}},fix:function(a){if(a[d.expando])return a;
var b,c,e=a,f=d.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props,a=d.Event(e);for(b=g.length;b;){c=g[--b];a[c]=e[c]}if(!a.target)a.target=e.srcElement||l;if(a.target.nodeType===3)a.target=a.target.parentNode;if(a.metaKey===void 0)a.metaKey=a.ctrlKey;return f.filter?f.filter(a,e):a},special:{ready:{setup:d.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){if(d.isWindow(this))this.onbeforeunload=
c},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}},simulate:function(a,b,c,e){a=d.extend(new d.Event,c,{type:a,isSimulated:true,originalEvent:{}});e?d.event.trigger(a,null,b):d.event.dispatch.call(b,a);a.isDefaultPrevented()&&c.preventDefault()}};d.event.handle=d.event.dispatch;d.removeEvent=l.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,false)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)};d.Event=function(a,b){if(!(this instanceof
d.Event))return new d.Event(a,b);if(a&&a.type){this.originalEvent=a;this.type=a.type;this.isDefaultPrevented=a.defaultPrevented||a.returnValue===false||a.getPreventDefault&&a.getPreventDefault()?aa:C}else this.type=a;b&&d.extend(this,b);this.timeStamp=a&&a.timeStamp||d.now();this[d.expando]=true};d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=aa;var a=this.originalEvent;if(a)a.preventDefault?a.preventDefault():a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=
aa;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=aa;this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={delegateType:b,bindType:b,handle:function(a){var e=a.relatedTarget,f=a.handleObj,g;if(!e||e!==this&&!d.contains(this,e)){a.type=f.origType;g=f.handler.apply(this,
arguments);a.type=b}return g}}});d.support.submitBubbles||(d.event.special.submit={setup:function(){if(d.nodeName(this,"form"))return false;d.event.add(this,"click._submit keypress._submit",function(a){a=a.target;if((a=d.nodeName(a,"input")||d.nodeName(a,"button")?a.form:void 0)&&!a._submit_attached){d.event.add(a,"submit._submit",function(a){a._submit_bubble=true});a._submit_attached=true}})},postDispatch:function(a){if(a._submit_bubble){delete a._submit_bubble;this.parentNode&&!a.isTrigger&&d.event.simulate("submit",
this.parentNode,a,true)}},teardown:function(){if(d.nodeName(this,"form"))return false;d.event.remove(this,"._submit")}});d.support.changeBubbles||(d.event.special.change={setup:function(){if(Ga.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){d.event.add(this,"propertychange._change",function(a){if(a.originalEvent.propertyName==="checked")this._just_changed=true});d.event.add(this,"click._change",function(a){if(this._just_changed&&!a.isTrigger){this._just_changed=false;d.event.simulate("change",
this,a,true)}})}return false}d.event.add(this,"beforeactivate._change",function(a){a=a.target;if(Ga.test(a.nodeName)&&!a._change_attached){d.event.add(a,"change._change",function(a){this.parentNode&&(!a.isSimulated&&!a.isTrigger)&&d.event.simulate("change",this.parentNode,a,true)});a._change_attached=true}})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){d.event.remove(this,
"._change");return Ga.test(this.nodeName)}});d.support.focusinBubbles||d.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,e=function(a){d.event.simulate(b,a.target,d.event.fix(a),true)};d.event.special[b]={setup:function(){c++===0&&l.addEventListener(a,e,true)},teardown:function(){--c===0&&l.removeEventListener(a,e,true)}}});d.fn.extend({on:function(a,b,c,e,f){var g,i;if(typeof a==="object"){if(typeof b!=="string"){c=c||b;b=void 0}for(i in a)this.on(i,b,c,a[i],f);return this}if(c==null&&
e==null){e=b;c=b=void 0}else if(e==null)if(typeof b==="string"){e=c;c=void 0}else{e=c;c=b;b=void 0}if(e===false)e=C;else if(!e)return this;if(f===1){g=e;e=function(a){d().off(a);return g.apply(this,arguments)};e.guid=g.guid||(g.guid=d.guid++)}return this.each(function(){d.event.add(this,a,e,c,b)})},one:function(a,b,c,e){return this.on(a,b,c,e,1)},off:function(a,b,c){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;d(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,
e.handler);return this}if(typeof a==="object"){for(e in a)this.off(e,b,a[e]);return this}if(b===false||typeof b==="function"){c=b;b=void 0}c===false&&(c=C);return this.each(function(){d.event.remove(this,a,c,b)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){d(this.context).on(a,this.selector,b,c);return this},die:function(a,b){d(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,e){return this.on(b,
a,c,e)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return d.event.trigger(a,b,this[0],true)},toggle:function(a){var b=arguments,c=a.guid||d.guid++,e=0,f=function(c){var f=(d._data(this,"lastToggle"+a.guid)||0)%e;d._data(this,"lastToggle"+a.guid,f+1);c.preventDefault();return b[f].apply(this,arguments)||false};for(f.guid=c;e<b.length;)b[e++].guid=
c;return this.click(f)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){d.fn[b]=function(a,e){if(e==null){e=a;a=null}return arguments.length>0?this.on(b,null,a,e):this.trigger(b)};d.attrFn&&(d.attrFn[b]=true);if(zc.test(b))d.event.fixHooks[b]=d.event.keyHooks;
if(Ac.test(b))d.event.fixHooks[b]=d.event.mouseHooks});var zb=function(a,b,c,e,d,g){for(var d=0,i=e.length;d<i;d++){var h=e[d];if(h){for(var k=false,h=h[a];h;){if(h[T]===c){k=e[h.sizset];break}if(h.nodeType===1&&!g){h[T]=c;h.sizset=d}if(h.nodeName.toLowerCase()===b){k=h;break}h=h[a]}e[d]=k}}},Ab=function(a,b,c,e,d,g){for(var d=0,i=e.length;d<i;d++){var h=e[d];if(h){for(var k=false,h=h[a];h;){if(h[T]===c){k=e[h.sizset];break}if(h.nodeType===1){if(!g){h[T]=c;h.sizset=d}if(typeof b!=="string"){if(h===
b){k=true;break}}else if(o.filter(b,[h]).length>0){k=h;break}}h=h[a]}e[d]=k}}},Ha=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,T="sizcache"+(Math.random()+"").replace(".",""),Ia=0,Bb=Object.prototype.toString,la=!1,Cb=!0,U=/\\/g,Dc=/\r\n/g,ma=/\W/;[0,0].sort(function(){Cb=false;return 0});var o=function(a,b,c,e){var c=c||[],d=b=b||l;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string")return c;
var g,i,h,k,n,r=true,j=o.isXML(b),m=[],q=a;do{Ha.exec("");if(g=Ha.exec(q)){q=g[3];m.push(g[1]);if(g[2]){k=g[3];break}}}while(g);if(m.length>1&&Db.exec(a))if(m.length===2&&p.relative[m[0]])i=Eb(m[0]+m[1],b,e);else for(i=p.relative[m[0]]?[b]:o(m.shift(),b);m.length;){a=m.shift();p.relative[a]&&(a=a+m.shift());i=Eb(a,i,e)}else{if(!e&&m.length>1&&b.nodeType===9&&!j&&p.match.ID.test(m[0])&&!p.match.ID.test(m[m.length-1])){g=o.find(m.shift(),b,j);b=g.expr?o.filter(g.expr,g.set)[0]:g.set[0]}if(b){g=e?{expr:m.pop(),
set:w(e)}:o.find(m.pop(),m.length===1&&(m[0]==="~"||m[0]==="+")&&b.parentNode?b.parentNode:b,j);i=g.expr?o.filter(g.expr,g.set):g.set;for(m.length>0?h=w(i):r=false;m.length;){g=n=m.pop();p.relative[n]?g=m.pop():n="";g==null&&(g=b);p.relative[n](h,g,j)}}else h=[]}h||(h=i);h||o.error(n||a);if(Bb.call(h)==="[object Array]")if(r)if(b&&b.nodeType===1)for(a=0;h[a]!=null;a++)h[a]&&(h[a]===true||h[a].nodeType===1&&o.contains(b,h[a]))&&c.push(i[a]);else for(a=0;h[a]!=null;a++)h[a]&&h[a].nodeType===1&&c.push(i[a]);
else c.push.apply(c,h);else w(h,c);if(k){o(k,d,c,e);o.uniqueSort(c)}return c};o.uniqueSort=function(a){if(na){la=Cb;a.sort(na);if(la)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a};o.matches=function(a,b){return o(a,null,null,b)};o.matchesSelector=function(a,b){return o(b,null,null,[a]).length>0};o.find=function(a,b,c){var d,f,g,i,h,k;if(!a)return[];f=0;for(g=p.order.length;f<g;f++){h=p.order[f];if(i=p.leftMatch[h].exec(a)){k=i[1];i.splice(1,1);if(k.substr(k.length-1)!=="\\"){i[1]=
(i[1]||"").replace(U,"");d=p.find[h](i,b,c);if(d!=null){a=a.replace(p.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}};o.filter=function(a,b,c,d){for(var f,g,i,h,k,n,j,l,m=a,q=[],s=b,u=b&&b[0]&&o.isXML(b[0]);a&&b.length;){for(i in p.filter)if((f=p.leftMatch[i].exec(a))!=null&&f[2]){n=p.filter[i];k=f[1];g=false;f.splice(1,1);if(k.substr(k.length-1)!=="\\"){s===q&&(q=[]);if(p.preFilter[i])if(f=p.preFilter[i](f,s,c,q,d,u)){if(f===
true)continue}else g=h=true;if(f)for(j=0;(k=s[j])!=null;j++)if(k){h=n(k,f,j,s);l=d^h;if(c&&h!=null)l?g=true:s[j]=false;else if(l){q.push(k);g=true}}if(h!==void 0){c||(s=q);a=a.replace(p.match[i],"");if(!g)return[];break}}}if(a===m)if(g==null)o.error(a);else break;m=a}return s};o.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};var Ja=o.getText=function(a){var b,c;b=a.nodeType;var d="";if(b)if(b===1||b===9||b===11){if(typeof a.textContent==="string")return a.textContent;
if(typeof a.innerText==="string")return a.innerText.replace(Dc,"");for(a=a.firstChild;a;a=a.nextSibling)d=d+Ja(a)}else{if(b===3||b===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(d=d+Ja(c));return d},p=o.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=
typeof b==="string",d=c&&!ma.test(b),c=c&&!d;d&&(b=b.toLowerCase());for(var d=0,f=a.length,g;d<f;d++)if(g=a[d]){for(;(g=g.previousSibling)&&g.nodeType!==1;);a[d]=c||g&&g.nodeName.toLowerCase()===b?g||false:g===b}c&&o.filter(b,a,true)},">":function(a,b){var c,d=typeof b==="string",f=0,g=a.length;if(d&&!ma.test(b))for(b=b.toLowerCase();f<g;f++){if(c=a[f]){c=c.parentNode;a[f]=c.nodeName.toLowerCase()===b?c:false}}else{for(;f<g;f++)(c=a[f])&&(a[f]=d?c.parentNode:c.parentNode===b);d&&o.filter(b,a,true)}},
"":function(a,b,c){var d,f=Ia++,g=Ab;if(typeof b==="string"&&!ma.test(b)){d=b=b.toLowerCase();g=zb}g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=Ia++,g=Ab;if(typeof b==="string"&&!ma.test(b)){d=b=b.toLowerCase();g=zb}g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(a=b.getElementById(a[1]))&&a.parentNode?[a]:[]},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){for(var c=[],d=b.getElementsByName(a[1]),f=0,g=d.length;f<
g;f++)d[f].getAttribute("name")===a[1]&&c.push(d[f]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,f,g){a=" "+a[1].replace(U,"")+" ";if(g)return a;for(var g=0,i;(i=b[g])!=null;g++)i&&(f^(i.className&&(" "+i.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(i):c&&(b[g]=false));return false},ID:function(a){return a[1].replace(U,"")},TAG:function(a){return a[1].replace(U,
"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||o.error(a[0]);a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}else a[2]&&o.error(a[0]);a[0]=Ia++;return a},ATTR:function(a,b,c,d,f,g){b=a[1]=a[1].replace(U,"");!g&&p.attrMap[b]&&(a[1]=p.attrMap[b]);a[4]=(a[4]||a[5]||"").replace(U,"");a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(a,b,c,d,f){if(a[1]===
"not")if((Ha.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=o(a[3],null,null,b);else{a=o.filter(a[3],b,c,1^f);c||d.push.apply(d,a);return false}else if(p.match.POS.test(a[0])||p.match.CHILD.test(a[0]))return true;return a},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===true},checked:function(a){return a.checked===true},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===
true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!o(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()===
"input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},
focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var f=b[1],g=p.filters[f];if(g)return g(a,c,b,d);if(f==="contains")return(a.textContent||a.innerText||
Ja([a])||"").indexOf(b[3])>=0;if(f==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return false;return true}o.error(f)},CHILD:function(a,b){var c,d,f,g,i,h;c=b[1];h=a;switch(c){case "only":case "first":for(;h=h.previousSibling;)if(h.nodeType===1)return false;if(c==="first")return true;h=a;case "last":for(;h=h.nextSibling;)if(h.nodeType===1)return false;return true;case "nth":c=b[2];d=b[3];if(c===1&&d===0)return true;f=b[0];if((g=a.parentNode)&&(g[T]!==f||!a.nodeIndex)){i=0;for(h=g.firstChild;h;h=
h.nextSibling)if(h.nodeType===1)h.nodeIndex=++i;g[T]=f}h=a.nodeIndex-d;return c===0?h===0:h%c===0&&h/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],c=o.attr?o.attr(a,c):p.attrHandle[c]?p.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=c+"",f=b[2],g=b[4];return c==
null?f==="!=":!f&&o.attr?c!=null:f==="="?d===g:f==="*="?d.indexOf(g)>=0:f==="~="?(" "+d+" ").indexOf(g)>=0:!g?d&&c!==false:f==="!="?d!==g:f==="^="?d.indexOf(g)===0:f==="$="?d.substr(d.length-g.length)===g:f==="|="?d===g||d.substr(0,g.length+1)===g+"-":false},POS:function(a,b,c,d){var f=p.setFilters[b[2]];if(f)return f(a,c,b,d)}}},Db=p.match.POS,Ec=function(a,b){return"\\"+(b-0+1)},Z;for(Z in p.match)p.match[Z]=RegExp(p.match[Z].source+/(?![^\[]*\])(?![^\(]*\))/.source),p.leftMatch[Z]=RegExp(/(^(?:.|\r|\n)*?)/.source+
p.match[Z].source.replace(/\\(\d+)/g,Ec));p.match.globalPOS=Db;var w=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(l.documentElement.childNodes,0)[0].nodeType}catch(ld){w=function(a,b){var c=0,d=b||[];if(Bb.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var na,$;l.documentElement.compareDocumentPosition?
na=function(a,b){if(a===b){la=true;return 0}return!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(na=function(a,b){if(a===b){la=true;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,f=[],g=[];c=a.parentNode;d=b.parentNode;var i=c;if(c===d)return $(a,b);if(c){if(!d)return 1}else return-1;for(;i;){f.unshift(i);i=i.parentNode}for(i=d;i;){g.unshift(i);i=i.parentNode}c=f.length;d=g.length;for(i=
0;i<c&&i<d;i++)if(f[i]!==g[i])return $(f[i],g[i]);return i===c?$(a,g[i],-1):$(f[i],b,1)},$=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});var oa=l.createElement("div"),Fb="script"+(new Date).getTime(),pa=l.documentElement;oa.innerHTML="<a name='"+Fb+"'/>";pa.insertBefore(oa,pa.firstChild);l.getElementById(Fb)&&(p.find.ID=function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!==
"undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},p.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b});pa.removeChild(oa);var pa=oa=null,F=l.createElement("div");F.appendChild(l.createComment(""));0<F.getElementsByTagName("*").length&&(p.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){for(var d=[],f=0;c[f];f++)c[f].nodeType===1&&d.push(c[f]);c=d}return c});F.innerHTML=
"<a href='#'></a>";F.firstChild&&("undefined"!==typeof F.firstChild.getAttribute&&"#"!==F.firstChild.getAttribute("href"))&&(p.attrHandle.href=function(a){return a.getAttribute("href",2)});F=null;if(l.querySelectorAll){var Ka=o,qa=l.createElement("div");qa.innerHTML="<p class='TEST'></p>";if(!(qa.querySelectorAll&&0===qa.querySelectorAll(".TEST").length)){var o=function(a,b,c,d){b=b||l;if(!d&&!o.isXML(b)){var f=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);if(f&&(b.nodeType===1||b.nodeType===9)){if(f[1])return w(b.getElementsByTagName(a),
c);if(f[2]&&p.find.CLASS&&b.getElementsByClassName)return w(b.getElementsByClassName(f[2]),c)}if(b.nodeType===9){if(a==="body"&&b.body)return w([b.body],c);if(f&&f[3]){var g=b.getElementById(f[3]);if(g&&g.parentNode){if(g.id===f[3])return w([g],c)}else return w([],c)}try{return w(b.querySelectorAll(a),c)}catch(i){}}else if(b.nodeType===1&&b.nodeName.toLowerCase()!=="object"){var f=b,h=(g=b.getAttribute("id"))||"__sizzle__",k=b.parentNode,n=/^\s*[+~]/.test(a);g?h=h.replace(/'/g,"\\$&"):b.setAttribute("id",
h);if(n&&k)b=b.parentNode;try{if(!n||k)return w(b.querySelectorAll("[id='"+h+"'] "+a),c)}catch(j){}finally{g||f.removeAttribute("id")}}}return Ka(a,b,c,d)},La;for(La in Ka)o[La]=Ka[La];qa=null}}var ra=l.documentElement,sa=ra.matchesSelector||ra.mozMatchesSelector||ra.webkitMatchesSelector||ra.msMatchesSelector;if(sa){var Fc=!sa.call(l.createElement("div"),"div"),Gb=!1;try{sa.call(l.documentElement,"[test!='']:sizzle")}catch(md){Gb=!0}o.matchesSelector=function(a,b){b=b.replace(/\=\s*([^'"\]]*)\s*\]/g,
"='$1']");if(!o.isXML(a))try{if(Gb||!p.match.PSEUDO.test(b)&&!/!=/.test(b)){var c=sa.call(a,b);if(c||!Fc||a.document&&a.document.nodeType!==11)return c}}catch(d){}return o(b,null,null,[a]).length>0}}var V=l.createElement("div");V.innerHTML="<div class='test e'></div><div class='test'></div>";V.getElementsByClassName&&0!==V.getElementsByClassName("e").length&&(V.lastChild.className="e",1!==V.getElementsByClassName("e").length&&(p.order.splice(1,0,"CLASS"),p.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==
"undefined"&&!c)return b.getElementsByClassName(a[1])},V=null));o.contains=l.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):true)}:l.documentElement.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(){return false};o.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":false};var Eb=function(a,b,c){for(var d,f=[],g="",b=b.nodeType?[b]:b;d=p.match.PSEUDO.exec(a);){g=g+d[0];a=a.replace(p.match.PSEUDO,
"")}a=p.relative[a]?a+"*":a;d=0;for(var i=b.length;d<i;d++)o(a,b[d],f,c);return o.filter(g,f)};o.attr=d.attr;o.selectors.attrMap={};d.find=o;d.expr=o.selectors;d.expr[":"]=d.expr.filters;d.unique=o.uniqueSort;d.text=o.getText;d.isXMLDoc=o.isXML;d.contains=o.contains;var Gc=/Until$/,Hc=/^(?:parents|prevUntil|prevAll)/,Ic=/,/,Zb=/^.[^:#\[\.,]*$/,Jc=Array.prototype.slice,Hb=d.expr.match.globalPOS,Kc={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this,c,e;if(typeof a!==
"string")return d(a).filter(function(){c=0;for(e=b.length;c<e;c++)if(d.contains(b[c],this))return true});var f=this.pushStack("","find",a),g,i,h;c=0;for(e=this.length;c<e;c++){g=f.length;d.find(a,this[c],f);if(c>0)for(i=g;i<f.length;i++)for(h=0;h<g;h++)if(f[h]===f[i]){f.splice(i--,1);break}}return f},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,e=b.length;a<e;a++)if(d.contains(this,b[a]))return true})},not:function(a){return this.pushStack(Ta(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ta(this,
a,true),"filter",a)},is:function(a){return!!a&&(typeof a==="string"?Hb.test(a)?d(a,this.context).index(this[0])>=0:d.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){for(f=1;g&&g.ownerDocument&&g!==b;){for(e=0;e<a.length;e++)d(g).is(a[e])&&c.push({selector:a[e],elem:g,level:f});g=g.parentNode;f++}return c}var i=Hb.test(a)||typeof a!=="string"?d(a,b||this.context):0;e=0;for(f=this.length;e<f;e++)for(g=this[e];g;)if(i?i.index(g)>-1:d.find.matchesSelector(g,
a)){c.push(g);break}else{g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){return!a?this[0]&&this[0].parentNode?this.prevAll().length:-1:typeof a==="string"?d.inArray(this[0],d(a)):d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a&&a.nodeType?[a]:a),e=d.merge(this.get(),c);return this.pushStack(!c[0]||!c[0].parentNode||c[0].parentNode.nodeType===11||
!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}});d.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,
"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c);Gc.test(a)||(e=c);e&&typeof e==="string"&&(f=d.filter(e,
f));f=this.length>1&&!Kc[a]?d.unique(f):f;if((this.length>1||Ic.test(e))&&Hc.test(a))f=f.reverse();return this.pushStack(f,a,Jc.call(arguments).join(","))}});d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,b,c){for(var e=[],a=a[b];a&&a.nodeType!==9&&(c===void 0||a.nodeType!==1||!d(a).is(c));){a.nodeType===1&&e.push(a);a=a[b]}return e},nth:function(a,b,c){for(var b=b||1,d=0;a;a=a[c])if(a.nodeType===
1&&++d===b)break;return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Va="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Lc=/ jQuery\d+="(?:\d+|null)"/g,Ma=/^\s+/,Ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Jb=/<([\w:]+)/,Mc=/<tbody/i,Nc=/<|&#?\w+;/,Oc=/<(?:script|style)/i,Pc=/<(?:script|object|embed|option|style)/i,
Kb=RegExp("<(?:"+Va+")[\\s/>]","i"),Lb=/checked\s*(?:[^=]|=\s*.checked.)/i,Mb=/\/(java|ecma)script/i,Qc=/^\s*<!(?:\[CDATA\[|\-\-)/,y={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Na=Ua(l);y.optgroup=y.option;y.tbody=y.tfoot=
y.colgroup=y.caption=y.thead;y.th=y.td;d.support.htmlSerialize||(y._default=[1,"div<div>","</div>"]);d.fn.extend({text:function(a){return d.access(this,function(a){return a===void 0?d.text(this):this.empty().append((this[0]&&this[0].ownerDocument||l).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);
b.map(function(){for(var a=this;a.firstChild&&a.firstChild.nodeType===1;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return d.isFunction(a)?this.each(function(b){d(this).wrapInner(a.call(this,b))}):this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=d.isFunction(a);return this.each(function(c){d(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||
d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,
"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d.clean(arguments));return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length){if(!b&&e.nodeType===1){d.cleanData(e.getElementsByTagName("*"));d.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},
empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a,b){a=a==null?false:a;b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){return d.access(this,function(a){var c=this[0]||{},e=0,f=this.length;if(a===void 0)return c.nodeType===1?c.innerHTML.replace(Lc,""):null;if(typeof a==="string"&&!Oc.test(a)&&(d.support.leadingWhitespace||!Ma.test(a))&&
!y[(Jb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ib,"<$1></$2>");try{for(;e<f;e++){c=this[e]||{};if(c.nodeType===1){d.cleanData(c.getElementsByTagName("*"));c.innerHTML=a}}c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=
this.parentNode;d(this).remove();b?d(b).before(a):d(c).append(a)})}return this.length?this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,true)},domManip:function(a,b,c){var e,f,g,i=a[0],h=[];if(!d.support.checkClone&&arguments.length===3&&typeof i==="string"&&Lb.test(i))return this.each(function(){d(this).domManip(a,b,c,true)});if(d.isFunction(i))return this.each(function(e){var f=d(this);a[0]=i.call(this,e,b?f.html():void 0);f.domManip(a,b,c)});
if(this[0]){e=i&&i.parentNode;e=d.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:d.buildFragment(a,this,h);g=e.fragment;if(f=g.childNodes.length===1?g=g.firstChild:g.firstChild){b=b&&d.nodeName(f,"tr");f=0;for(var k=this.length,n=k-1;f<k;f++)c.call(b?d.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):this[f]:this[f],e.cacheable||k>1&&f<n?d.clone(g,true,true):g)}h.length&&d.each(h,
function(a,b){b.src?d.ajax({type:"GET",global:false,url:b.src,async:false,dataType:"script"}):d.globalEval((b.text||b.textContent||b.innerHTML||"").replace(Qc,"/*$0*/"));b.parentNode&&b.parentNode.removeChild(b)})}return this}});d.buildFragment=function(a,b,c){var e,f,g,i,h=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]);i.createDocumentFragment||(i=l);if(a.length===1&&typeof h==="string"&&h.length<512&&i===l&&h.charAt(0)==="<"&&!Pc.test(h)&&(d.support.checkClone||!Lb.test(h))&&(d.support.html5Clone||
!Kb.test(h))){f=true;(g=d.fragments[h])&&g!==1&&(e=g)}if(!e){e=i.createDocumentFragment();d.clean(a,i,e,c)}f&&(d.fragments[h]=g?e:1);return{fragment:e,cacheable:f}};d.fragments={};d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],c=d(c),f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&c.length===1){c[b](this[0]);return this}for(var f=0,g=c.length;f<g;f++){var i=
(f>0?this.clone(true):this).get();d(c[f])[b](i);e=e.concat(i)}return this.pushStack(e,a,c.selector)}});d.extend({clone:function(a,b,c){var e,f,g;if(d.support.html5Clone||d.isXMLDoc(a)||!Kb.test("<"+a.nodeName+">"))e=a.cloneNode(true);else{e=l.createElement("div");Na.appendChild(e);e.innerHTML=a.outerHTML;e=e.firstChild}var i=e;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){Xa(a,i);e=ba(a);f=ba(i);for(g=0;e[g];++g)f[g]&&Xa(e[g],f[g])}if(b){Wa(a,
i);if(c){e=ba(a);f=ba(i);for(g=0;e[g];++g)Wa(e[g],f[g])}}return i},clean:function(a,b,c,e){var f,g=[],b=b||l;typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||l);for(var i=0,h;(h=a[i])!=null;i++){typeof h==="number"&&(h=h+"");if(h){if(typeof h==="string")if(Nc.test(h)){h=h.replace(Ib,"<$1></$2>");f=(Jb.exec(h)||["",""])[1].toLowerCase();var k=y[f]||y._default,n=k[0],j=b.createElement("div"),m=Na.childNodes;b===l?Na.appendChild(j):Ua(b).appendChild(j);for(j.innerHTML=
k[1]+h+k[2];n--;)j=j.lastChild;if(!d.support.tbody){n=Mc.test(h);k=f==="table"&&!n?j.firstChild&&j.firstChild.childNodes:k[1]==="<table>"&&!n?j.childNodes:[];for(f=k.length-1;f>=0;--f)d.nodeName(k[f],"tbody")&&!k[f].childNodes.length&&k[f].parentNode.removeChild(k[f])}!d.support.leadingWhitespace&&Ma.test(h)&&j.insertBefore(b.createTextNode(Ma.exec(h)[0]),j.firstChild);h=j.childNodes;if(j){j.parentNode.removeChild(j);if(m.length>0)(j=m[m.length-1])&&j.parentNode&&j.parentNode.removeChild(j)}}else h=
b.createTextNode(h);var o;if(!d.support.appendChecked)if(h[0]&&typeof(o=h.length)==="number")for(f=0;f<o;f++)Za(h[f]);else Za(h);h.nodeType?g.push(h):g=d.merge(g,h)}}if(c){a=function(a){return!a.type||Mb.test(a.type)};for(i=0;g[i];i++){b=g[i];if(e&&d.nodeName(b,"script")&&(!b.type||Mb.test(b.type)))e.push(b.parentNode?b.parentNode.removeChild(b):b);else{if(b.nodeType===1){h=d.grep(b.getElementsByTagName("script"),a);g.splice.apply(g,[i+1,0].concat(h))}c.appendChild(b)}}}return g},cleanData:function(a){for(var b,
c,e=d.cache,f=d.event.special,g=d.support.deleteExpando,i=0,h;(h=a[i])!=null;i++)if(!h.nodeName||!d.noData[h.nodeName.toLowerCase()])if(c=h[d.expando]){if((b=e[c])&&b.events){for(var k in b.events)f[k]?d.event.remove(h,k):d.removeEvent(h,k,b.handle);if(b.handle)b.handle.elem=null}g?delete h[d.expando]:h.removeAttribute&&h.removeAttribute(d.expando);delete e[c]}}});var Oa=/alpha\([^)]*\)/i,Rc=/opacity=([^)]*)/,Sc=/([A-Z]|^ms)/g,Tc=/^[\-+]?(?:\d*\.)?\d+$/i,wa=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Uc=/^([\-+])=([\-+.\de]+)/,
Vc=/^margin/,Wc={position:"absolute",visibility:"hidden",display:"block"},H=["Top","Right","Bottom","Left"],I,Nb,Ob;d.fn.css=function(a,b){return d.access(this,function(a,b,f){return f!==void 0?d.style(a,b,f):d.css(a,b)},a,b,arguments.length>1)};d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=I(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":d.support.cssFloat?
"cssFloat":"styleFloat"},style:function(a,b,c,e){if(a&&!(a.nodeType===3||a.nodeType===8||!a.style)){var f,g=d.camelCase(b),i=a.style,h=d.cssHooks[g],b=d.cssProps[g]||g;if(c!==void 0){e=typeof c;if(e==="string"&&(f=Uc.exec(c))){c=+(f[1]+1)*+f[2]+parseFloat(d.css(a,b));e="number"}if(!(c==null||e==="number"&&isNaN(c))){e==="number"&&!d.cssNumber[g]&&(c=c+"px");if(!h||!("set"in h)||(c=h.set(a,c))!==void 0)try{i[b]=c}catch(k){}}}else return h&&"get"in h&&(f=h.get(a,false,e))!==void 0?f:i[b]}},css:function(a,
b,c){var e,f,b=d.camelCase(b);f=d.cssHooks[b];b=d.cssProps[b]||b;b==="cssFloat"&&(b="float");if(f&&"get"in f&&(e=f.get(a,true,c))!==void 0)return e;if(I)return I(a,b)},swap:function(a,b,c){var d={},f;for(f in b){d[f]=a.style[f];a.style[f]=b[f]}c=c.call(a);for(f in b)a.style[f]=d[f];return c}});d.curCSS=d.css;l.defaultView&&l.defaultView.getComputedStyle&&(Nb=function(a,b){var c,e,f,g=a.style,b=b.replace(Sc,"-$1").toLowerCase();if((e=a.ownerDocument.defaultView)&&(f=e.getComputedStyle(a,null))){c=
f.getPropertyValue(b);c===""&&!d.contains(a.ownerDocument.documentElement,a)&&(c=d.style(a,b))}if(!d.support.pixelMargin&&f&&Vc.test(b)&&wa.test(c)){e=g.width;g.width=c;c=f.width;g.width=e}return c});l.documentElement.currentStyle&&(Ob=function(a,b){var c,d,f=a.currentStyle&&a.currentStyle[b],g=a.style;if(f==null&&g&&(c=g[b]))f=c;if(wa.test(f)){c=g.left;if(d=a.runtimeStyle&&a.runtimeStyle.left)a.runtimeStyle.left=a.currentStyle.left;g.left=b==="fontSize"?"1em":f;f=g.pixelLeft+"px";g.left=c;if(d)a.runtimeStyle.left=
d}return f===""?"auto":f});I=Nb||Ob;d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,e,f){if(e)return a.offsetWidth!==0?$a(a,b,f):d.swap(a,Wc,function(){return $a(a,b,f)})},set:function(a,b){return Tc.test(b)?b+"px":b}}});d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return Rc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,e=a.currentStyle,f=d.isNumeric(b)?"alpha(opacity="+b*
100+")":"",g=e&&e.filter||c.filter||"";c.zoom=1;if(b>=1&&d.trim(g.replace(Oa,""))===""){c.removeAttribute("filter");if(e&&!e.filter)return}c.filter=Oa.test(g)?g.replace(Oa,f):g+" "+f}});d(function(){if(!d.support.reliableMarginRight)d.cssHooks.marginRight={get:function(a,b){return d.swap(a,{display:"inline-block"},function(){return b?I(a,"margin-right"):a.style.marginRight})}}});d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!d.support.reliableHiddenOffsets&&
(a.style&&a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});d.each({margin:"",padding:"",border:"Width"},function(a,b){d.cssHooks[a+b]={expand:function(c){for(var d=typeof c==="string"?c.split(" "):[c],f={},c=0;c<4;c++)f[a+H[c]+b]=d[c]||d[c-2]||d[0];return f}}});var Xc=/%20/g,$b=/\[\]$/,Pb=/\r?\n/g,Yc=/#.*$/,Zc=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,$c=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
ad=/^(?:GET|HEAD)$/,bd=/^\/\//,Qb=/\?/,cd=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,dd=/^(?:select|textarea)/i,bb=/\s+/,ed=/([?&])_=[^&]*/,Rb=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Sb=d.fn.load,xa={},Tb={},J,G,Ub=["*/"]+["*"];try{J=bc.href}catch(nd){J=l.createElement("a"),J.href="",J=J.href}G=Rb.exec(J.toLowerCase())||[];d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&Sb)return Sb.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0)var f=
a.slice(e,a.length),a=a.slice(0,e);e="GET";if(b)if(d.isFunction(b)){c=b;b=void 0}else if(typeof b==="object"){b=d.param(b,d.ajaxSettings.traditional);e="POST"}var g=this;d.ajax({url:a,type:e,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText;if(a.isResolved()){a.done(function(a){e=a});g.html(f?d("<div>").append(e.replace(cd,"")).find(f):e)}c&&g.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?
d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||dd.test(this.nodeName)||$c.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a){return{name:b.name,value:a.replace(Pb,"\r\n")}}):{name:b.name,value:c.replace(Pb,"\r\n")}}).get()}});d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.on(b,a)}});d.each(["get","post"],
function(a,b){d[b]=function(a,e,f,g){if(d.isFunction(e)){g=g||f;f=e;e=void 0}return d.ajax({type:b,url:a,data:e,success:f,dataType:g})}});d.extend({getScript:function(a,b){return d.get(a,void 0,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){if(b)cb(a,d.ajaxSettings);else{b=a;a=d.ajaxSettings}cb(a,b);return a},ajaxSettings:{url:J,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(G[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",
processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Ub},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":q.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:ab(xa),ajaxTransport:ab(Tb),ajax:function(a,b){function c(a,b,c,j){if(u!==2){u=2;q&&clearTimeout(q);p=void 0;m=j||
"";t.readyState=a>0?4:0;var l,o,r,j=b;if(c){var s=e,L=t,w=s.contents,v=s.dataTypes,pb=s.responseFields,A,z,x,B;for(z in pb)z in c&&(L[pb[z]]=c[z]);for(;v[0]==="*";){v.shift();A===void 0&&(A=s.mimeType||L.getResponseHeader("content-type"))}if(A)for(z in w)if(w[z]&&w[z].test(A)){v.unshift(z);break}if(v[0]in c)x=v[0];else{for(z in c){if(!v[0]||s.converters[z+" "+v[0]]){x=z;break}B||(B=z)}x=x||B}if(x){x!==v[0]&&v.unshift(x);c=c[x]}else c=void 0}else c=void 0;if(a>=200&&a<300||a===304){if(e.ifModified){if(A=
t.getResponseHeader("Last-Modified"))d.lastModified[n]=A;if(A=t.getResponseHeader("Etag"))d.etag[n]=A}if(a===304){j="notmodified";l=true}else try{A=e;A.dataFilter&&(c=A.dataFilter(c,A.dataType));var H=A.dataTypes;z={};var E,F,J=H.length,G,M=H[0],C,I,N,O,D;for(E=1;E<J;E++){if(E===1)for(F in A.converters)typeof F==="string"&&(z[F.toLowerCase()]=A.converters[F]);C=M;M=H[E];if(M==="*")M=C;else if(C!=="*"&&C!==M){I=C+" "+M;N=z[I]||z["* "+M];if(!N){D=void 0;for(O in z){G=O.split(" ");if(G[0]===C||G[0]===
"*")if(D=z[G[1]+" "+M]){O=z[O];O===true?N=D:D===true&&(N=O);break}}}!N&&!D&&d.error("No conversion from "+I.replace(" "," to "));N!==true&&(c=N?N(c):D(O(c)))}}o=c;j="success";l=true}catch(K){j="parsererror";r=K}}else{r=j;if(!j||a){j="error";a<0&&(a=0)}}t.status=a;t.statusText=""+(b||j);l?i.resolveWith(f,[o,j,t]):i.rejectWith(f,[t,j,r]);t.statusCode(k);k=void 0;y&&g.trigger("ajax"+(l?"Success":"Error"),[t,e,l?o:r]);h.fireWith(f,[t,j]);if(y){g.trigger("ajaxComplete",[t,e]);--d.active||d.event.trigger("ajaxStop")}}}
if(typeof a==="object"){b=a;a=void 0}var b=b||{},e=d.ajaxSetup({},b),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,i=d.Deferred(),h=d.Callbacks("once memory"),k=e.statusCode||{},n,j={},l={},m,o,p,q,s,u=0,y,w,t={readyState:0,setRequestHeader:function(a,b){if(!u){var c=a.toLowerCase(),a=l[c]=l[c]||a;j[a]=b}return this},getAllResponseHeaders:function(){return u===2?m:null},getResponseHeader:function(a){var b;if(u===2){if(!o)for(o={};b=Zc.exec(m);)o[b[1].toLowerCase()]=b[2];b=o[a.toLowerCase()]}return b===
void 0?null:b},overrideMimeType:function(a){if(!u)e.mimeType=a;return this},abort:function(a){a=a||"abort";p&&p.abort(a);c(0,a);return this}};i.promise(t);t.success=t.done;t.error=t.fail;t.complete=h.add;t.statusCode=function(a){if(a){var b;if(u<2)for(b in a)k[b]=[k[b],a[b]];else{b=a[t.status];t.then(b,b)}}return this};e.url=((a||e.url)+"").replace(Yc,"").replace(bd,G[1]+"//");e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bb);if(e.crossDomain==null){s=Rb.exec(e.url.toLowerCase());e.crossDomain=
!(!s||!(s[1]!=G[1]||s[2]!=G[2]||(s[3]||(s[1]==="http:"?80:443))!=(G[3]||(G[1]==="http:"?80:443))))}if(e.data&&e.processData&&typeof e.data!=="string")e.data=d.param(e.data,e.traditional);ca(xa,e,b,t);if(u===2)return false;y=e.global;e.type=e.type.toUpperCase();e.hasContent=!ad.test(e.type);y&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){if(e.data){e.url=e.url+((Qb.test(e.url)?"&":"?")+e.data);delete e.data}n=e.url;if(e.cache===false){s=d.now();var v=e.url.replace(ed,"$1_="+s);e.url=
v+(v===e.url?(Qb.test(e.url)?"&":"?")+"_="+s:"")}}(e.data&&e.hasContent&&e.contentType!==false||b.contentType)&&t.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){n=n||e.url;d.lastModified[n]&&t.setRequestHeader("If-Modified-Since",d.lastModified[n]);d.etag[n]&&t.setRequestHeader("If-None-Match",d.etag[n])}t.setRequestHeader("Accept",e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", "+Ub+"; q=0.01":""):e.accepts["*"]);for(w in e.headers)t.setRequestHeader(w,
e.headers[w]);if(e.beforeSend&&(e.beforeSend.call(f,t,e)===false||u===2)){t.abort();return false}for(w in{success:1,error:1,complete:1})t[w](e[w]);if(p=ca(Tb,e,b,t)){t.readyState=1;y&&g.trigger("ajaxSend",[t,e]);e.async&&e.timeout>0&&(q=setTimeout(function(){t.abort("timeout")},e.timeout));try{u=1;p.send(j,c)}catch(x){if(u<2)c(-1,x);else throw x;}}else c(-1,"No Transport");return t},param:function(a,b){var c=[],e=function(a,b){b=d.isFunction(b)?b():b;c[c.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
if(b===void 0)b=d.ajaxSettings.traditional;if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){e(this.name,this.value)});else for(var f in a)ya(f,a[f],b,e);return c.join("&").replace(Xc,"+")}});d.extend({active:0,lastModified:{},etag:{}});var fd=d.now(),ta=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+fd++}});d.ajaxPrefilter("json jsonp",function(a,b,c){b=typeof a.data==="string"&&/^application\/x\-www\-form\-urlencoded/.test(a.contentType);
if(a.dataTypes[0]==="jsonp"||a.jsonp!==false&&(ta.test(a.url)||b&&ta.test(a.data))){var e,f=a.jsonpCallback=d.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,g=q[f],i=a.url,h=a.data,k="$1"+f+"$2";if(a.jsonp!==false){i=i.replace(ta,k);if(a.url===i){b&&(h=h.replace(ta,k));a.data===h&&(i=i+((/\?/.test(i)?"&":"?")+a.jsonp+"="+f))}}a.url=i;a.data=h;q[f]=function(a){e=[a]};c.always(function(){q[f]=g;if(e&&d.isFunction(g))q[f](e[0])});a.converters["script json"]=function(){e||d.error(f+" was not called");
return e[0]};a.dataTypes[0]="json";return"script"}});d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}});d.ajaxPrefilter("script",function(a){if(a.cache===void 0)a.cache=false;if(a.crossDomain){a.type="GET";a.global=false}});d.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=l.head||l.getElementsByTagName("head")[0]||
l.documentElement;return{send:function(d,f){b=l.createElement("script");b.async="async";if(a.scriptCharset)b.charset=a.scriptCharset;b.src=a.url;b.onload=b.onreadystatechange=function(a,d){if(d||!b.readyState||/loaded|complete/.test(b.readyState)){b.onload=b.onreadystatechange=null;c&&b.parentNode&&c.removeChild(b);b=void 0;d||f(200,"success")}};c.insertBefore(b,c.firstChild)},abort:function(){if(b)b.onload(0,1)}}}});var Pa=q.ActiveXObject?function(){for(var a in W)W[a](0,1)}:!1,gd=0,W;d.ajaxSettings.xhr=
q.ActiveXObject?function(){var a;if(!(a=!this.isLocal&&db()))a:{try{a=new q.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:db;var Qa=d.ajaxSettings.xhr();d.extend(d.support,{ajax:!!Qa,cors:!!Qa&&"withCredentials"in Qa});d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var b;return{send:function(c,e){var f=a.xhr(),g,i;a.username?f.open(a.type,a.url,a.async,a.username,a.password):f.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)f[i]=
a.xhrFields[i];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType);!a.crossDomain&&!c["X-Requested-With"]&&(c["X-Requested-With"]="XMLHttpRequest");try{for(i in c)f.setRequestHeader(i,c[i])}catch(h){}f.send(a.hasContent&&a.data||null);b=function(c,h){var i,j,l,m,o;try{if(b&&(h||f.readyState===4)){b=void 0;if(g){f.onreadystatechange=d.noop;Pa&&delete W[g]}if(h)f.readyState!==4&&f.abort();else{i=f.status;l=f.getAllResponseHeaders();m={};if((o=f.responseXML)&&o.documentElement)m.xml=o;try{m.text=
f.responseText}catch(p){}try{j=f.statusText}catch(q){j=""}!i&&a.isLocal&&!a.crossDomain?i=m.text?200:404:i===1223&&(i=204)}}}catch(s){h||e(-1,s)}m&&e(i,j,m,l)};if(!a.async||f.readyState===4)b();else{g=++gd;if(Pa){if(!W){W={};d(q).unload(Pa)}W[g]=b}f.onreadystatechange=b}},abort:function(){b&&b(0,1)}}}});var za={},v,K,hd=/^(?:toggle|show|hide)$/,id=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ua,ea=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft",
"paddingRight"],["opacity"]],da;d.fn.extend({show:function(a,b,c){if(a||a===0)return this.animate(D("show",3),a,b,c);for(var c=0,e=this.length;c<e;c++){a=this[c];if(a.style){b=a.style.display;if(!d._data(a,"olddisplay")&&b==="none")b=a.style.display="";(b===""&&d.css(a,"display")==="none"||!d.contains(a.ownerDocument.documentElement,a))&&d._data(a,"olddisplay",fb(a.nodeName))}}for(c=0;c<e;c++){a=this[c];if(a.style){b=a.style.display;if(b===""||b==="none")a.style.display=d._data(a,"olddisplay")||""}}return this},
hide:function(a,b,c){if(a||a===0)return this.animate(D("hide",3),a,b,c);for(var c=0,e=this.length;c<e;c++){a=this[c];if(a.style){b=d.css(a,"display");b!=="none"&&!d._data(a,"olddisplay")&&d._data(a,"olddisplay",b)}}for(c=0;c<e;c++)if(this[c].style)this[c].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?
"show":"hide"]()}):this.animate(D("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){function f(){g.queue===false&&d._mark(this);var b=d.extend({},g),c=this.nodeType===1,e=c&&d(this).is(":hidden"),f,j,l,m,o;b.animatedProperties={};for(l in a){f=d.camelCase(l);if(l!==f){a[f]=a[l];delete a[l]}if((j=d.cssHooks[f])&&"expand"in j){m=j.expand(a[f]);delete a[f];for(l in m)l in a||(a[l]=
m[l])}}for(f in a){j=a[f];if(d.isArray(j)){b.animatedProperties[f]=j[1];j=a[f]=j[0]}else b.animatedProperties[f]=b.specialEasing&&b.specialEasing[f]||b.easing||"swing";if(j==="hide"&&e||j==="show"&&!e)return b.complete.call(this);if(c&&(f==="height"||f==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")!d.support.inlineBlockNeedsLayout||fb(this.nodeName)==="inline"?this.style.display="inline-block":
this.style.zoom=1}}if(b.overflow!=null)this.style.overflow="hidden";for(l in a){c=new d.fx(this,b,l);j=a[l];if(hd.test(j))if(f=d._data(this,"toggle"+l)||(j==="toggle"?e?"show":"hide":0)){d._data(this,"toggle"+l,f==="show"?"hide":"show");c[f]()}else c[j]();else{f=id.exec(j);m=c.cur();if(f){j=parseFloat(f[2]);o=f[3]||(d.cssNumber[l]?"":"px");if(o!=="px"){d.style(this,l,(j||1)+o);m=(j||1)/c.cur()*m;d.style(this,l,m+o)}f[1]&&(j=(f[1]==="-="?-1:1)*j+m);c.custom(m,j,o)}else c.custom(m,j,"")}}return true}
var g=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(g.complete,[false]);a=d.extend({},a);return g.queue===false?this.each(f):this.queue(g.queue,f)},stop:function(a,b,c){if(typeof a!=="string"){c=b;b=a;a=void 0}b&&a!==false&&this.queue(a||"fx",[]);return this.each(function(){var b,f=false,g=d.timers,i=d._data(this);c||d._unmark(true,this);if(a==null)for(b in i){if(i[b]&&i[b].stop&&b.indexOf(".run")===b.length-4){var h=i[b];d.removeData(this,b,true);h.stop(c)}}else if(i[b=a+".run"]&&i[b].stop){i=
i[b];d.removeData(this,b,true);i.stop(c)}for(b=g.length;b--;)if(g[b].elem===this&&(a==null||g[b].queue===a)){if(c)g[b](true);else g[b].saveState();f=true;g.splice(b,1)}(!c||!f)&&d.dequeue(this,a)})}});d.each({slideDown:D("show",1),slideUp:D("hide",1),slideToggle:D("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,d,f){return this.animate(b,a,d,f)}});d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):
{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default;if(e.queue==null||e.queue===true)e.queue="fx";e.old=e.complete;e.complete=function(a){d.isFunction(e.old)&&e.old.call(this);e.queue?d.dequeue(this,e.queue):a!==false&&d._unmark(this)};return e},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+0.5}},
timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;b.orig=b.orig||{}}});d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function e(a){return f.step(a)}
var f=this,g=d.fx;this.startTime=da||eb();this.end=b;this.now=this.start=a;this.pos=this.state=0;this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px");e.queue=this.options.queue;e.elem=this.elem;e.saveState=function(){d._data(f.elem,"fxshow"+f.prop)===void 0&&(f.options.hide?d._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&d._data(f.elem,"fxshow"+f.prop,f.end))};e()&&(d.timers.push(e)&&!ua)&&(ua=setInterval(g.tick,g.interval))},show:function(){var a=d._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=a||d.style(this.elem,this.prop);this.options.show=true;a!==void 0?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d._data(this.elem,"fxshow"+this.prop)||d.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b,c=da||eb(),e=true,f=this.elem,g=this.options;if(a||c>=g.duration+this.startTime){this.now=this.end;this.pos=
this.state=1;this.update();g.animatedProperties[this.prop]=true;for(b in g.animatedProperties)g.animatedProperties[b]!==true&&(e=false);if(e){g.overflow!=null&&!d.support.shrinkWrapBlocks&&d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]});g.hide&&d(f).hide();if(g.hide||g.show)for(b in g.animatedProperties){d.style(f,b,g.orig[b]);d.removeData(f,"fxshow"+b,true);d.removeData(f,"toggle"+b,true)}if(a=g.complete){g.complete=false;a.call(f)}}return false}if(g.duration==Infinity)this.now=
c;else{a=c-this.startTime;this.state=a/g.duration;this.pos=d.easing[g.animatedProperties[this.prop]](this.state,a,0,1,g.duration);this.now=this.start+(this.end-this.start)*this.pos}this.update();return true}};d.extend(d.fx,{tick:function(){for(var a,b=d.timers,c=0;c<b.length;c++){a=b[c];!a()&&b[c]===a&&b.splice(c--,1)}b.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ua);ua=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&
a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}});d.each(ea.concat.apply([],ea),function(a,b){b.indexOf("margin")&&(d.fx.step[b]=function(a){d.style(a.elem,b,Math.max(0,a.now)+a.unit)})});d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var Vb,jd=/^t(?:able|d|h)$/i,Wb=/^(?:body|html)$/i;Vb="getBoundingClientRect"in l.documentElement?function(a,b,c,e){try{e=a.getBoundingClientRect()}catch(f){}if(!e||
!d.contains(c,a))return e?{top:e.top,left:e.left}:{top:0,left:0};a=b.body;b=gb(b);return{top:e.top+(b.pageYOffset||d.support.boxModel&&c.scrollTop||a.scrollTop)-(c.clientTop||a.clientTop||0),left:e.left+(b.pageXOffset||d.support.boxModel&&c.scrollLeft||a.scrollLeft)-(c.clientLeft||a.clientLeft||0)}}:function(a,b,c){var e,f=a.offsetParent,g=b.body;e=(b=b.defaultView)?b.getComputedStyle(a,null):a.currentStyle;for(var i=a.offsetTop,h=a.offsetLeft;(a=a.parentNode)&&a!==g&&a!==c;){if(d.support.fixedPosition&&
e.position==="fixed")break;e=b?b.getComputedStyle(a,null):a.currentStyle;i=i-a.scrollTop;h=h-a.scrollLeft;if(a===f){i=i+a.offsetTop;h=h+a.offsetLeft;if(d.support.doesNotAddBorder&&(!d.support.doesAddBorderForTableAndCells||!jd.test(a.nodeName))){i=i+(parseFloat(e.borderTopWidth)||0);h=h+(parseFloat(e.borderLeftWidth)||0)}f=a.offsetParent}if(d.support.subtractsBorderForOverflowNotVisible&&e.overflow!=="visible"){i=i+(parseFloat(e.borderTopWidth)||0);h=h+(parseFloat(e.borderLeftWidth)||0)}}if(e.position===
"relative"||e.position==="static"){i=i+g.offsetTop;h=h+g.offsetLeft}if(d.support.fixedPosition&&e.position==="fixed"){i=i+Math.max(c.scrollTop,g.scrollTop);h=h+Math.max(c.scrollLeft,g.scrollLeft)}return{top:i,left:h}};d.fn.offset=function(a){if(arguments.length)return a===void 0?this:this.each(function(b){d.offset.setOffset(this,a,b)});var b=this[0],c=b&&b.ownerDocument;return!c?null:b===c.body?d.offset.bodyOffset(b):Vb(b,c,c.documentElement)};d.offset={bodyOffset:function(a){var b=a.offsetTop,c=
a.offsetLeft;if(d.support.doesNotIncludeMarginInBodyOffset){b=b+(parseFloat(d.css(a,"marginTop"))||0);c=c+(parseFloat(d.css(a,"marginLeft"))||0)}return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");if(e==="static")a.style.position="relative";var f=d(a),g=f.offset(),i=d.css(a,"top"),h=d.css(a,"left"),j={},l={};if((e==="absolute"||e==="fixed")&&d.inArray("auto",[i,h])>-1){l=f.position();e=l.top;h=l.left}else{e=parseFloat(i)||0;h=parseFloat(h)||0}d.isFunction(b)&&(b=b.call(a,c,g));
if(b.top!=null)j.top=b.top-g.top+e;if(b.left!=null)j.left=b.left-g.left+h;"using"in b?b.using.call(a,j):f.css(j)}};d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=Wb.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top=c.top-(parseFloat(d.css(a,"marginTop"))||0);c.left=c.left-(parseFloat(d.css(a,"marginLeft"))||0);e.top=e.top+(parseFloat(d.css(b[0],"borderTopWidth"))||0);e.left=e.left+(parseFloat(d.css(b[0],"borderLeftWidth"))||0);return{top:c.top-
e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||l.body;a&&!Wb.test(a.nodeName)&&d.css(a,"position")==="static";)a=a.offsetParent;return a})}});d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);d.fn[a]=function(e){return d.access(this,function(a,e,i){var h=gb(a);if(i===void 0)return h?b in h?h[b]:d.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(!c?i:d(h).scrollLeft(),
c?i:d(h).scrollTop()):a[e]=i},a,e,arguments.length,null)}});d.each({Height:"height",Width:"width"},function(a,b){var c="client"+a,e="scroll"+a,f="offset"+a;d.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(d.css(a,b,"padding")):this[b]():null};d.fn["outer"+a]=function(a){var c=this[0];return c?c.style?parseFloat(d.css(c,b,a?"margin":"border")):this[b]():null};d.fn[b]=function(a){return d.access(this,function(a,b,g){if(d.isWindow(a)){b=a.document;a=b.documentElement[c];return d.support.boxModel&&
a||b.body&&b.body[c]||a}if(a.nodeType===9){b=a.documentElement;return b[c]>=b[e]?b[c]:Math.max(a.body[e],b[e],a.body[f],b[f])}if(g===void 0){a=d.css(a,b);b=parseFloat(a);return d.isNumeric(b)?b:a}d(a).css(b,g)},b,a,arguments.length,null)}});q.jQuery=q.$=d;"function"===typeof define&&(define.amd&&define.amd.jQuery)&&define("jquery",[],function(){return d})})(window);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-compatibility', location = 'js-vendor/jquery/jquery-compatibility.js' */
jQuery.noConflict();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-core', location = 'js/atlassian.js' */
/* Atlassian UI and the Atlassian Design Guidelines are created by Atlassian. See https://developer.atlassian.com/display/AUI/ for API documentation and https://developer.atlassian.com/design/ for license details. */
(function(){if(typeof jQuery==="undefined"){throw new Error("jQuery is required for AJS to function.")}if(typeof window.console==="undefined"){window.console={messages:[],log:function(A){this.messages.push(A)},show:function(){alert(this.messages.join("\n"));this.messages=[]}}}else{console.show=function(){}}window.AJS=(function(){var F=[];var A;var E;var H=0;function D(L){var K={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;","`":"&#96;"};if(typeof K[L]==="string"){return K[L]}return"&quot;"}var I=/[&"'<>`]/g;var G={version:"5.4.4-CONFDEV-21873",params:{},$:jQuery,log:function(){if(typeof console!=="undefined"&&console.log){Function.prototype.apply.apply(console.log,[console,arguments])}},warn:function(){if(typeof console!=="undefined"&&console.warn){Function.prototype.apply.apply(console.warn,[console,arguments])}},error:function(){if(typeof console!=="undefined"&&console.error){Function.prototype.apply.apply(console.error,[console,arguments])}},preventDefault:function(K){K.preventDefault()},stopEvent:function(K){K.stopPropagation();return false},include:function(K){if(!this.contains(F,K)){F.push(K);var L=document.createElement("script");L.src=K;this.$("body").append(L)}},toggleClassName:function(K,L){if(!(K=this.$(K))){return }K.toggleClass(L)},setVisible:function(L,K){if(!(L=this.$(L))){return }var M=this.$;M(L).each(function(){var N=M(this).hasClass("hidden");if(N&&K){M(this).removeClass("hidden")}else{if(!N&&!K){M(this).addClass("hidden")}}})},setCurrent:function(K,L){if(!(K=this.$(K))){return }if(L){K.addClass("current")}else{K.removeClass("current")}},isVisible:function(K){return !this.$(K).hasClass("hidden")},isClipped:function(K){K=AJS.$(K);return(K.prop("scrollWidth")>K.prop("clientWidth"))},populateParameters:function(L){if(!L){L=this.params}var K=this;this.$(".parameters input").each(function(){var M=this.value,N=this.title||this.id;if(K.$(this).hasClass("list")){if(L[N]){L[N].push(M)}else{L[N]=[M]}}else{L[N]=(M.match(/^(tru|fals)e$/i)?M.toLowerCase()==="true":M)}})},toInit:function(L){var K=this;this.$(function(){try{L.apply(this,arguments)}catch(M){K.log("Failed to run init function: "+M+"\n"+L.toString())}});return this},indexOf:function(O,N,L){var M=O.length;if(L===null){L=0}else{if(L<0){L=Math.max(0,M+L)}}for(var K=L;K<M;K++){if(O[K]===N){return K}}return -1},contains:function(L,K){return this.indexOf(L,K)>-1},firebug:function(){AJS.log("DEPRECATED: AJS.firebug should no longer be used.");var K=this.$(document.createElement("script"));K.attr("src","https://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js");this.$("head").append(K);(function(){if(window.firebug){firebug.init()}else{setTimeout(AJS.firebug,0)}})()},clone:function(K){return AJS.$(K).clone().removeAttr("id")},alphanum:function(R,Q){R=(R+"").toLowerCase();Q=(Q+"").toLowerCase();var M=/(\d+|\D+)/g;var N=R.match(M);var K=Q.match(M);var P=Math.max(N.length,K.length);for(var L=0;L<P;L++){if(L===N.length){return -1}if(L===K.length){return 1}var S=parseInt(N[L],10)+"";var O=parseInt(K[L],10)+"";if(S===N[L]&&O===K[L]&&S!==O){return(S-O)/Math.abs(S-O)}if((S!==N[L]||O!==K[L])&&N[L]!==K[L]){return N[L]<K[L]?-1:1}}return 0},onTextResize:function(L){if(typeof L==="function"){if(AJS.onTextResize["on-text-resize"]){AJS.onTextResize["on-text-resize"].push(function(M){L(M)})}else{var K=AJS("div");K.css({width:"1em",height:"1em",position:"absolute",top:"-9999em",left:"-9999em"});this.$("body").append(K);K.size=K.width();setInterval(function(){if(K.size!==K.width()){K.size=K.width();for(var M=0,N=AJS.onTextResize["on-text-resize"].length;M<N;M++){AJS.onTextResize["on-text-resize"][M](K.size)}}},0);AJS.onTextResize.em=K;AJS.onTextResize["on-text-resize"]=[function(M){L(M)}]}}},unbindTextResize:function(M){for(var K=0,L=AJS.onTextResize["on-text-resize"].length;K<L;K++){if(AJS.onTextResize["on-text-resize"][K]===M){return AJS.onTextResize["on-text-resize"].splice(K,1)}}},escape:function(K){return escape(K).replace(/%u\w{4}/gi,function(L){return unescape(L)})},escapeHtml:function(K){return K.replace(I,D)},filterBySearch:function(O,T,U){if(!T){return[]}var M=this.$;var R=(U&&U.keywordsField)||"keywords";var Q=(U&&U.ignoreForCamelCase)?"i":"";var N=(U&&U.matchBoundary)?"\\b":"";var L=(U&&U.splitRegex)||(/\s+/);var P=T.split(L);var K=[];M.each(P,function(){var W=[new RegExp(N+this,"i")];if(/^([A-Z][a-z]*) {2,}$/.test(this)){var V=this.replace(/([A-Z][a-z]*)/g,"\\b$1[^,]*");W.push(new RegExp(V,Q))}K.push(W)});var S=[];M.each(O,function(){for(var X=0;X<K.length;X++){var V=false;for(var W=0;W<K[X].length;W++){if(K[X][W].test(this[R])){V=true;break}}if(!V){return }}S.push(this)});return S},drawLogo:function(T){AJS.log("DEPRECATED: AJS.drawLogo should no longer be used.");var M=T.scaleFactor||1;var R=T.fill||"#fff";var S=T.stroke||"#000";var K=400*M;var P=40*M;var O=T.strokeWidth||1;var Q=T.containerID||".aui-logo";if(!AJS.$(".aui-logo").length){AJS.$("body").append('<div id="aui-logo" class="aui-logo"><div>')}var N=Raphael(Q,K+50*M,P+100*M);var L=N.path("M 0,0 c 3.5433333,-4.7243333 7.0866667,-9.4486667 10.63,-14.173 -14.173,0 -28.346,0 -42.519,0 C -35.432667,-9.4486667 -38.976333,-4.7243333 -42.52,0 -28.346667,0 -14.173333,0 0,0 z m 277.031,28.346 c -14.17367,0 -28.34733,0 -42.521,0 C 245.14,14.173 255.77,0 266.4,-14.173 c -14.17267,0 -28.34533,0 -42.518,0 C 213.25167,0 202.62133,14.173 191.991,28.346 c -14.17333,0 -28.34667,0 -42.52,0 14.17333,-18.8976667 28.34667,-37.7953333 42.52,-56.693 -7.08667,-9.448667 -14.17333,-18.897333 -21.26,-28.346 -14.173,0 -28.346,0 -42.519,0 7.08667,9.448667 14.17333,18.897333 21.26,28.346 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 -14.173333,0 -28.346667,0 -42.52,0 10.63,-14.173 21.26,-28.346 31.89,-42.519 -14.390333,0 -28.780667,0 -43.171,0 C 42.520733,1.330715e-4 31.889933,14.174867 21.26,28.347 c -42.520624,6.24e-4 -85.039187,-8.13e-4 -127.559,-0.001 11.220667,-14.961 22.441333,-29.922 33.662,-44.883 -6.496,-8.661 -12.992,-17.322 -19.488,-25.983 5.905333,0 11.810667,0 17.716,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.173333,0 28.346667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.173333,0 28.3466667,0 42.52,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.1733333,0 28.3466667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.390333,0 28.780667,0 43.171,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 42.51967,0 85.03933,0 127.559,0 10.63033,14.173333 21.26067,28.346667 31.891,42.52 14.17267,0 28.34533,0 42.518,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.17367,0 28.34733,0 42.521,0 14.17333,18.897667 28.34667,37.795333 42.52,56.693 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 z");L.scale(M,-M,0,0);L.translate(120*M,P);L.attr("fill",R);L.attr("stroke",S);L.attr("stroke-width",O)},debounce:function(L,N){var M;var K;return function(){var O=arguments;var P=this;var Q=function(){K=L.apply(P,O)};clearTimeout(M);M=setTimeout(Q,N);return K}},id:function(K){A=H+++"";E=K?K+A:"aui-uid-"+A;if(!document.getElementById(E)){return E}else{E=E+"-"+new Date().getTime();if(!document.getElementById(E)){return E}else{throw new Error("ERROR: timestamped fallback ID "+E+" exists. AJS.id stopped.")}}},_addID:function(L,M){var K=AJS.$(L);var N=M||false;K.each(function(){var O=AJS.$(this);if(!O.attr("id")){O.attr("id",AJS.id(N))}})},enable:function(M,K){var L=AJS.$(M);if(typeof K==="undefined"){K=true}return L.each(function(){this.disabled=!K})}};if(typeof AJS!=="undefined"){for(var C in AJS){G[C]=AJS[C]}}var J=function(){var K=null;if(arguments.length&&typeof arguments[0]==="string"){K=AJS.$(document.createElement(arguments[0]));if(arguments.length===2){K.html(arguments[1])}}return K};for(var B in G){J[B]=G[B]}return J})();AJS.$(function(){var A=AJS.$("body");if(!A.data("auiVersion")){A.attr("data-aui-version",AJS.version)}AJS.populateParameters()});AJS.$.ajaxSettings.traditional=true})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-core', location = 'js/format.js' */
AJS.format=function(I){var B=/'(?!')/g,H=/^\d+$/,E=/^(\d+),number$/,C=/^(\d+)\,choice\,(.+)/,G=/^(\d+)([#<])(.+)/;var F=function(R,P){var O="",M;if(M=R.match(H)){O=P.length>++R?P[R]:""}else{if(M=R.match(E)){O=P.length>++M[1]?P[M[1]]:""}else{if(M=R.match(C)){var S=(P.length>++M[1]?P[M[1]]:null);if(S!==null){var T=M[2].split("|");var N=null;for(var L=0;L<T.length;L++){var K=T[L].match(G);var Q=parseInt(K[1],10);if(S<Q){if(N){O=N;break}else{O=K[3];break}}if(S==Q&&K[2]=="#"){O=K[3];break}else{}if(L==T.length-1){O=K[3]}N=K[3]}var J=[O].concat(Array.prototype.slice.call(P,1));O=AJS.format.apply(AJS,J)}}}}return O};var D=function(O){var M=false,J=-1,N=0;for(var L=0;L<O.length;L++){var P=O.charAt(L);if(P=="'"){M=!M}if(M){continue}if(P==="{"){if(N===0){J=L}N++}else{if(P==="}"){if(N>0){N--;if(N===0){var K=[];K.push(O.substring(0,L+1));K.push(O.substring(0,J));K.push(O.substring(J+1,L));return K}}}}}return null};var A=function(M){var K=arguments,L="",J=D(M);while(J){M=M.substring(J[0].length);L+=J[1].replace(B,"");L+=F(J[2],K);J=D(M)}L+=M.replace(B,"");return L};return A.apply(AJS,arguments)};AJS.I18n={getText:function(A){var B=Array.prototype.slice.call(arguments,1);if(AJS.I18n.keys&&Object.prototype.hasOwnProperty.call(AJS.I18n.keys,A)){return AJS.format.apply(null,[AJS.I18n.keys[A]].concat(B))}return A}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-core', location = 'js/blanket.js' */
(function(B){var A;AJS.dim=function(C,D){if(!A){A=B.browser.msie&&parseInt(B.browser.version,10)<8?B("html"):B(document.body)}if(!AJS.dim.$dim){AJS.dim.$dim=AJS("div").addClass("aui-blanket");if(D){AJS.dim.$dim.css({zIndex:D})}if(B.browser.msie){AJS.dim.$dim.css({width:"200%",height:Math.max(B(document).height(),B(window).height())+"px"})}B("body").append(AJS.dim.$dim);if(B.browser.msie&&(C!==false)){AJS.dim.$shim=B('<iframe frameBorder="0" class="aui-blanket-shim" src="about:blank"/>');AJS.dim.$shim.css({height:Math.max(B(document).height(),B(window).height())+"px"});if(D){AJS.dim.$shim.css({zIndex:D-1})}B("body").append(AJS.dim.$shim);AJS.dim.shim=AJS.dim.$shim}AJS.dim.cachedOverflow=A.css("overflow");A.css("overflow","hidden")}return AJS.dim.$dim};AJS.undim=function(){if(AJS.dim.$dim){AJS.dim.$dim.remove();AJS.dim.$dim=null;if(AJS.dim.$shim){AJS.dim.$shim.remove();AJS.dim.$shim=null}A&&A.css("overflow",AJS.dim.cachedOverflow);if(B.browser.safari){var C=B(window).scrollTop();B(window).scrollTop(10+5*(C==10)).scrollTop(C)}}}}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs-gadgets-base', location = 'js-vendor/jquery/plugins/jquery.aop.js' */
(function(){var _after=1;var _afterThrow=2;var _afterFinally=3;var _before=4;var _around=5;var _intro=6;var _regexEnabled=true;var _arguments="arguments";var _undef="undefined";var getType=(function(){var toString=Object.prototype.toString,toStrings={},nodeTypes={1:"element",3:"textnode",9:"document",11:"fragment"},types="Arguments Array Boolean Date Document Element Error Fragment Function NodeList Null Number Object RegExp String TextNode Undefined Window".split(" ");for(var i=types.length;i--;){var type=types[i],constructor=window[type];if(constructor){try{toStrings[toString.call(new constructor)]=type.toLowerCase()}catch(e){}}}return function(item){return item==null&&(item===undefined?_undef:"null")||item.nodeType&&nodeTypes[item.nodeType]||typeof item.length=="number"&&(item.callee&&_arguments||item.alert&&"window"||item.item&&"nodelist")||toStrings[toString.call(item)]}})();var isFunc=function(obj){return getType(obj)=="function"};var weaveOne=function(source,method,advice){var old=source[method];if(advice.type!=_intro&&!isFunc(old)){var oldObject=old;old=function(){var code=arguments.length>0?_arguments+"[0]":"";for(var i=1;i<arguments.length;i++){code+=","+_arguments+"["+i+"]"}return eval("oldObject("+code+");")}}var aspect;if(advice.type==_after||advice.type==_afterThrow||advice.type==_afterFinally){aspect=function(){var returnValue,exceptionThrown=null;try{returnValue=old.apply(this,arguments)}catch(e){exceptionThrown=e}if(advice.type==_after){if(exceptionThrown==null){returnValue=advice.value.apply(this,[returnValue,method])}else{throw exceptionThrown}}else{if(advice.type==_afterThrow&&exceptionThrown!=null){returnValue=advice.value.apply(this,[exceptionThrown,method])}else{if(advice.type==_afterFinally){returnValue=advice.value.apply(this,[returnValue,exceptionThrown,method])}}}return returnValue}}else{if(advice.type==_before){aspect=function(){advice.value.apply(this,[arguments,method]);return old.apply(this,arguments)}}else{if(advice.type==_intro){aspect=function(){return advice.value.apply(this,arguments)}}else{if(advice.type==_around){aspect=function(){var invocation={object:this,args:Array.prototype.slice.call(arguments)};return advice.value.apply(invocation.object,[{arguments:invocation.args,method:method,proceed:function(){return old.apply(invocation.object,invocation.args)}}])}}}}}aspect.unweave=function(){source[method]=old;pointcut=source=aspect=old=null};source[method]=aspect;return aspect};var search=function(source,pointcut,advice){var methods=[];for(var method in source){var item=null;try{item=source[method]}catch(e){}if(item!=null&&method.match(pointcut.method)&&isFunc(item)){methods[methods.length]={source:source,method:method,advice:advice}}}return methods};var weave=function(pointcut,advice){var source=typeof (pointcut.target.prototype)!=_undef?pointcut.target.prototype:pointcut.target;var advices=[];if(advice.type!=_intro&&typeof (source[pointcut.method])==_undef){var methods=search(pointcut.target,pointcut,advice);if(methods.length==0){methods=search(source,pointcut,advice)}for(var i in methods){advices[advices.length]=weaveOne(methods[i].source,methods[i].method,methods[i].advice)}}else{advices[0]=weaveOne(source,pointcut.method,advice)}return _regexEnabled?advices:advices[0]};jQuery.aop={after:function(pointcut,advice){return weave(pointcut,{type:_after,value:advice})},afterThrow:function(pointcut,advice){return weave(pointcut,{type:_afterThrow,value:advice})},afterFinally:function(pointcut,advice){return weave(pointcut,{type:_afterFinally,value:advice})},before:function(pointcut,advice){return weave(pointcut,{type:_before,value:advice})},around:function(pointcut,advice){return weave(pointcut,{type:_around,value:advice})},introduction:function(pointcut,advice){return weave(pointcut,{type:_intro,value:advice})},setup:function(settings){_regexEnabled=settings.regexMatch}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs-gadgets-base', location = 'js/dropdown.js' */
AJS.dropDown=function(L,E){var U=null,I=[],Q=false,H=AJS.$(document),C={item:"li:has(a)",activeClass:"active",alignment:"right",displayHandler:function(W){return W.name},escapeHandler:function(){this.hide("escape");return false},hideHandler:function(){},moveHandler:function(X,W){},useDisabled:false};AJS.$.extend(C,E);C.alignment={left:"left",right:"right"}[C.alignment.toLowerCase()]||"left";if(L&&L.jquery){U=L}else{if(typeof L=="string"){U=AJS.$(L)}else{if(L&&L.constructor==Array){U=AJS("div").addClass("aui-dropdown").toggleClass("hidden",!!C.isHiddenByDefault);for(var P=0,K=L.length;P<K;P++){var J=AJS("ol");for(var O=0,S=L[P].length;O<S;O++){var M=AJS("li");var G=L[P][O];if(G.href){M.append(AJS("a").html("<span>"+C.displayHandler(G)+"</span>").attr({href:G.href}).addClass(G.className));AJS.$.data(AJS.$("a > span",M)[0],"properties",G)}else{M.html(G.html).addClass(G.className)}if(G.icon){M.prepend(AJS("img").attr("src",G.icon))}if(G.insideSpanIcon){M.children("a").prepend(AJS("span").attr("class","icon"))}AJS.$.data(M[0],"properties",G);J.append(M)}if(P==K-1){J.addClass("last")}U.append(J)}AJS.$("body").append(U)}else{throw new Error("AJS.dropDown function was called with illegal parameter. Should be AJS.$ object, AJS.$ selector or array.")}}}var F=function(){N(+1)};var T=function(){N(-1)};var N=function(Z){var Y=!Q,W=AJS.dropDown.current.$[0],X=AJS.dropDown.current.links,a=W.focused;Q=true;if(X.length===0){return }W.focused=(typeof a==="number")?a:-1;if(!AJS.dropDown.current){AJS.log("move - not current, aborting");return true}W.focused+=Z;if(W.focused<0){W.focused=X.length-1}else{if(W.focused>=X.length){W.focused=0}}C.moveHandler(AJS.$(X[W.focused]),Z<0?"up":"down");if(Y&&X.length){AJS.$(X[W.focused]).addClass(C.activeClass);Q=false}else{if(!X.length){Q=false}}};var V=function(Y){if(!AJS.dropDown.current){return true}var Z=Y.which,W=AJS.dropDown.current.$[0],X=AJS.dropDown.current.links;AJS.dropDown.current.cleanActive();switch(Z){case 40:F();break;case 38:T();break;case 27:return C.escapeHandler.call(AJS.dropDown.current,Y);case 13:if(W.focused>=0){if(!C.selectionHandler){if(AJS.$(X[W.focused]).attr("nodeName")!="a"){return AJS.$("a",X[W.focused]).trigger("focus")}else{return AJS.$(X[W.focused]).trigger("focus")}}else{return C.selectionHandler.call(AJS.dropDown.current,Y,AJS.$(X[W.focused]))}}return true;default:if(X.length){AJS.$(X[W.focused]).addClass(C.activeClass)}return true}Y.stopPropagation();Y.preventDefault();return false};var A=function(W){if(!((W&&W.which&&(W.which==3))||(W&&W.button&&(W.button==2))||false)){if(AJS.dropDown.current){AJS.dropDown.current.hide("click")}}};var D=function(W){return function(){if(!AJS.dropDown.current){return }AJS.dropDown.current.cleanFocus();this.originalClass=this.className;AJS.$(this).addClass(C.activeClass);AJS.dropDown.current.$[0].focused=W}};var R=function(W){if(W.button||W.metaKey||W.ctrlKey||W.shiftKey){return true}if(AJS.dropDown.current&&C.selectionHandler){C.selectionHandler.call(AJS.dropDown.current,W,AJS.$(this))}};var B=function(X){var W=false;if(X.data("events")){AJS.$.each(X.data("events"),function(Y,Z){AJS.$.each(Z,function(b,a){if(R===a){W=true;return false}})})}return W};U.each(function(){var W=this,Y=AJS.$(this),Z={};var X={reset:function(){Z=AJS.$.extend(Z,{$:Y,links:AJS.$(C.item||"li:has(a)",W),cleanActive:function(){if(W.focused+1&&Z.links.length){AJS.$(Z.links[W.focused]).removeClass(C.activeClass)}},cleanFocus:function(){Z.cleanActive();W.focused=-1},moveDown:F,moveUp:T,moveFocus:V,getFocusIndex:function(){return(typeof W.focused=="number")?W.focused:-1}});Z.links.each(function(a){var b=AJS.$(this);if(!B(b)){b.hover(D(a),Z.cleanFocus);b.click(R)}})},appear:function(a){if(a){Y.removeClass("hidden");Y.addClass("aui-dropdown-"+C.alignment)}else{Y.addClass("hidden")}},fade:function(a){if(a){Y.fadeIn("fast")}else{Y.fadeOut("fast")}},scroll:function(a){if(a){Y.slideDown("fast")}else{Y.slideUp("fast")}}};Z.reset=X.reset;Z.reset();Z.addControlProcess=function(b,a){AJS.$.aop.around({target:this,method:b},a)};Z.addCallback=function(b,a){return AJS.$.aop.after({target:this,method:b},a)};Z.show=function(a){if(C.useDisabled&&this.$.closest(".aui-dd-parent").hasClass("disabled")){return }this.alignment=C.alignment;A();AJS.dropDown.current=this;this.method=a||this.method||"appear";this.timer=setTimeout(function(){H.click(A)},0);H.keydown(V);if(C.firstSelected&&this.links[0]){D(0).call(this.links[0])}AJS.$(W.offsetParent).css({zIndex:2000});X[this.method](true);AJS.$(document).trigger("showLayer",["dropdown",AJS.dropDown.current])};Z.hide=function(a){this.method=this.method||"appear";AJS.$(Y.get(0).offsetParent).css({zIndex:""});this.cleanFocus();X[this.method](false);H.unbind("click",A).unbind("keydown",V);AJS.$(document).trigger("hideLayer",["dropdown",AJS.dropDown.current]);AJS.dropDown.current=null;return a};Z.addCallback("reset",function(){if(C.firstSelected&&this.links[0]){D(0).call(this.links[0])}});if(!AJS.dropDown.iframes){AJS.dropDown.iframes=[]}AJS.dropDown.createShims=function(){AJS.$("iframe").each(function(a){var b=this;if(!b.shim){b.shim=AJS.$("<div />").addClass("shim hidden").appendTo("body");AJS.dropDown.iframes.push(b)}});return arguments.callee}();Z.addCallback("show",function(){AJS.$(AJS.dropDown.iframes).each(function(){var a=AJS.$(this);if(a.is(":visible")){var b=a.offset();b.height=a.height();b.width=a.width();this.shim.css({left:b.left+"px",top:b.top+"px",height:b.height+"px",width:b.width+"px"}).removeClass("hidden")}})});Z.addCallback("hide",function(){AJS.$(AJS.dropDown.iframes).each(function(){this.shim.addClass("hidden")});C.hideHandler()});if(AJS.$.browser.msie&&~~(AJS.$.browser.version)<9){(function(){var a=function(){if(this.$.is(":visible")){if(!this.iframeShim){this.iframeShim=AJS.$('<iframe class="dropdown-shim" src="javascript:false;" frameBorder="0" />').insertBefore(this.$)}this.iframeShim.css({display:"block",top:this.$.css("top"),width:this.$.outerWidth()+"px",height:this.$.outerHeight()+"px"});if(C.alignment=="left"){this.iframeShim.css({left:"0px"})}else{this.iframeShim.css({right:"0px"})}}};Z.addCallback("reset",a);Z.addCallback("show",a);Z.addCallback("hide",function(){if(this.iframeShim){this.iframeShim.css({display:"none"})}})})()}I.push(Z)});return I};AJS.dropDown.getAdditionalPropertyValue=function(D,A){var C=D[0];if(!C||(typeof C.tagName!="string")||C.tagName.toLowerCase()!="li"){AJS.log("AJS.dropDown.getAdditionalPropertyValue : item passed in should be an LI element wrapped by jQuery")}var B=AJS.$.data(C,"properties");return B?B[A]:null};AJS.dropDown.removeAllAdditionalProperties=function(A){};AJS.dropDown.Standard=function(H){var C=[],G,B={selector:".aui-dd-parent",dropDown:".aui-dropdown",trigger:".aui-dd-trigger"};AJS.$.extend(B,H);var F=function(I,L,K,J){AJS.$.extend(J,{trigger:I});L.addClass("dd-allocated");K.addClass("hidden");if(B.isHiddenByDefault==false){J.show()}J.addCallback("show",function(){L.addClass("active")});J.addCallback("hide",function(){L.removeClass("active")})};var A=function(K,I,L,J){if(J!=AJS.dropDown.current){L.css({top:I.outerHeight()});J.show();K.stopImmediatePropagation()}K.preventDefault()};if(B.useLiveEvents){var D=[];var E=[];AJS.$(B.trigger).live("click",function(L){var I=AJS.$(this);var N,M,J;var K;if((K=AJS.$.inArray(this,D))>=0){var O=E[K];N=O.parent;M=O.dropdown;J=O.ddcontrol}else{N=I.closest(B.selector);M=N.find(B.dropDown);if(M.length===0){return }J=AJS.dropDown(M,B)[0];if(!J){return }D.push(this);O={parent:N,dropdown:M,ddcontrol:J};F(I,N,M,J);E.push(O)}A(L,I,M,J)})}else{if(this instanceof AJS.$){G=this}else{G=AJS.$(B.selector)}G=G.not(".dd-allocated").filter(":has("+B.dropDown+")").filter(":has("+B.trigger+")");G.each(function(){var L=AJS.$(this),K=AJS.$(B.dropDown,this),I=AJS.$(B.trigger,this),J=AJS.dropDown(K,B)[0];AJS.$.extend(J,{trigger:I});F(I,L,K,J);I.click(function(M){A(M,I,K,J)});C.push(J)})}return C};AJS.dropDown.Ajax=function(C){var B,A={cache:true};AJS.$.extend(A,C||{});B=AJS.dropDown.Standard.call(this,A);AJS.$(B).each(function(){var D=this;AJS.$.extend(D,{getAjaxOptions:function(E){var F=function(G){if(A.formatResults){G=A.formatResults(G)}if(A.cache){D.cache.set(D.getAjaxOptions(),G)}D.refreshSuccess(G)};if(A.ajaxOptions){if(AJS.$.isFunction(A.ajaxOptions)){return AJS.$.extend(A.ajaxOptions.call(D),{success:F})}else{return AJS.$.extend(A.ajaxOptions,{success:F})}}return AJS.$.extend(E,{success:F})},refreshSuccess:function(E){this.$.html(E)},cache:function(){var E={};return{get:function(F){var G=F.data||"";return E[(F.url+G).replace(/[\?\&]/gi,"")]},set:function(F,G){var H=F.data||"";E[(F.url+H).replace(/[\?\&]/gi,"")]=G},reset:function(){E={}}}}(),show:function(E){return function(F){if(A.cache&&!!D.cache.get(D.getAjaxOptions())){D.refreshSuccess(D.cache.get(D.getAjaxOptions()));E.call(D)}else{AJS.$(AJS.$.ajax(D.getAjaxOptions())).throbber({target:D.$,end:function(){D.reset()}});E.call(D);if(D.iframeShim){D.iframeShim.hide()}}}}(D.show),resetCache:function(){D.cache.reset()}});D.addCallback("refreshSuccess",function(){D.reset()})});return B};AJS.$.fn.dropDown=function(B,A){B=(B||"Standard").replace(/^([a-z])/,function(C){return C.toUpperCase()});return AJS.dropDown[B].call(this,A)};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs-raphael', location = 'js-vendor/raphael/raphael.js' */
/* THIS FILE HAS BEEN MODIFIED BY ATLASSIAN. See https://ecosystem.atlassian.net/browse/AUI-1535 for details. Modified lines are marked below, search "ATLASSIAN" */
(function(I){var E="0.3.4",J="hasOwnProperty",B=/[\.\/]/,A="*",G=function(){},F=function(M,L){return M-L},D,H,K={n:{}},C=function(L,a){var U=K,R=H,V=Array.prototype.slice.call(arguments,2),X=C.listeners(L),W=0,T=false,O,N=[],S={},P=[],M=D,Y=[];D=L;H=0;for(var Q=0,Z=X.length;Q<Z;Q++){if("zIndex" in X[Q]){N.push(X[Q].zIndex);if(X[Q].zIndex<0){S[X[Q].zIndex]=X[Q]}}}N.sort(F);while(N[W]<0){O=S[N[W++]];P.push(O.apply(a,V));if(H){H=R;return P}}for(Q=0;Q<Z;Q++){O=X[Q];if("zIndex" in O){if(O.zIndex==N[W]){P.push(O.apply(a,V));if(H){break}do{W++;O=S[N[W]];O&&P.push(O.apply(a,V));if(H){break}}while(O)}else{S[O.zIndex]=O}}else{P.push(O.apply(a,V));if(H){break}}}H=R;D=M;return P.length?P:null};C.listeners=function(L){var T=L.split(B),R=K,X,S,M,P,W,O,Q,U,V=[R],N=[];for(P=0,W=T.length;P<W;P++){U=[];for(O=0,Q=V.length;O<Q;O++){R=V[O].n;S=[R[T[P]],R[A]];M=2;while(M--){X=S[M];if(X){U.push(X);N=N.concat(X.f||[])}}}V=U}return N};C.on=function(L,O){var Q=L.split(B),P=K;for(var M=0,N=Q.length;M<N;M++){P=P.n;!P[Q[M]]&&(P[Q[M]]={n:{}});P=P[Q[M]]}P.f=P.f||[];for(M=0,N=P.f.length;M<N;M++){if(P.f[M]==O){return G}}P.f.push(O);return function(R){if(+R==+R){O.zIndex=+R}}};C.stop=function(){H=1};C.nt=function(L){if(L){return new RegExp("(?:\\.|\\/|^)"+L+"(?:\\.|\\/|$)").test(D)}return D};C.off=C.unbind=function(M,R){var T=M.split(B),S,V,N,P,W,O,Q,U=[K];for(P=0,W=T.length;P<W;P++){for(O=0;O<U.length;O+=N.length-2){N=[O,1];S=U[O].n;if(T[P]!=A){if(S[T[P]]){N.push(S[T[P]])}}else{for(V in S){if(S[J](V)){N.push(S[V])}}}U.splice.apply(U,N)}}for(P=0,W=U.length;P<W;P++){S=U[P];while(S.n){if(R){if(S.f){for(O=0,Q=S.f.length;O<Q;O++){if(S.f[O]==R){S.f.splice(O,1);break}}!S.f.length&&delete S.f}for(V in S.n){if(S.n[J](V)&&S.n[V].f){var L=S.n[V].f;for(O=0,Q=L.length;O<Q;O++){if(L[O]==R){L.splice(O,1);break}}!L.length&&delete S.n[V].f}}}else{delete S.f;for(V in S.n){if(S.n[J](V)&&S.n[V].f){delete S.n[V].f}}}S=S.n}}};C.once=function(L,M){var N=function(){var O=M.apply(this,arguments);C.unbind(L,N);return O};return C.on(L,N)};C.version=E;C.toString=function(){return"You are running Eve "+E};(typeof module!="undefined"&&module.exports)?(module.exports=C):(typeof define!="undefined"?(define("eve",[],function(){return C})):(I.eve=C))})(this);if(!window.eve&&typeof define==="function"&&typeof require==="function"){window.eve=require("eve")}(function(){function Aq(S){if(Aq.is(S,"function")){return AO?S():eve.on("raphael.DOMload",S)}else{if(Aq.is(S,BC)){return Aq._engine.create[Bf](Aq,S.splice(0,3+Aq.is(S[0],Ak))).add(S)}else{var E=Array.prototype.slice.call(arguments,0);if(Aq.is(E[E.length-1],"function")){var R=E.pop();return AO?R.call(Aq._engine.create[Bf](Aq,E)):eve.on("raphael.DOMload",function(){R.call(Aq._engine.create[Bf](Aq,E))})}else{return Aq._engine.create[Bf](Aq,arguments)}}}}Aq.version="2.1.0";Aq.eve=eve;var AO,A=/[, ]+/,BV={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},BQ=/\{(\d+)\}/g,Bi="prototype",AK="hasOwnProperty",AZ={doc:document,win:window},P={was:Object.prototype[AK].call(AZ.win,"Raphael"),is:AZ.win.Raphael},Be=function(){this.ca=this.customAttributes={}},A3,BN="appendChild",Bf="apply",Bd="concat",z="createTouch" in AZ.doc,Aw="",Ap=" ",Bg=String,f="split",s="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[f](Ap),BW={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},Bj=Bg.prototype.toLowerCase,AT=Math,J=AT.max,BL=AT.min,AV=AT.abs,BO=AT.pow,Au=AT.PI,Ak="number",AJ="string",BC="array",A4="toString",A8="fill",A0=Object.prototype.toString,BY={},G="push",D=Aq._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,Z=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,AU={"NaN":1,"Infinity":1,"-Infinity":1},B=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,AH=AT.round,Y="setAttribute",AN=parseFloat,u=parseInt,BS=Bg.prototype.toUpperCase,O=Aq._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},AR=Aq._availableAnimAttrs={blur:Ak,"clip-rect":"csv",cx:Ak,cy:Ak,fill:"colour","fill-opacity":Ak,"font-size":Ak,height:Ak,opacity:Ak,path:"path",r:Ak,rx:Ak,ry:Ak,stroke:"colour","stroke-opacity":Ak,"stroke-width":Ak,transform:"transform",width:Ak,x:Ak,y:Ak},AC=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,BH=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,K={hs:1,rg:1},BF=/,?([achlmqrstvxz]),?/gi,Az=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,AI=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,Ao=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,Av=Aq._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,At={},BP=function(R,E){return R.key-E.key},T=function(R,E){return AN(R)-AN(E)},k=function(){},Ba=function(E){return E},AY=Aq._rectPath=function(E,d,R,S,b){if(b){return[["M",E+b,d],["l",R-b*2,0],["a",b,b,0,0,1,b,b],["l",0,S-b*2],["a",b,b,0,0,1,-b,b],["l",b*2-R,0],["a",b,b,0,0,1,-b,-b],["l",0,b*2-S],["a",b,b,0,0,1,b,-b],["z"]]}return[["M",E,d],["l",R,0],["l",0,S],["l",-R,0],["z"]]},m=function(E,b,S,R){if(R==null){R=S}return[["M",E,b],["m",0,-R],["a",S,R,0,1,1,0,2*R],["a",S,R,0,1,1,0,-2*R],["z"]]},p=Aq._getPath={path:function(E){return E.attr("path")},circle:function(R){var E=R.attrs;return m(E.cx,E.cy,E.r)},ellipse:function(R){var E=R.attrs;return m(E.cx,E.cy,E.rx,E.ry)},rect:function(R){var E=R.attrs;return AY(E.x,E.y,E.width,E.height,E.r)},image:function(R){var E=R.attrs;return AY(E.x,E.y,E.width,E.height)},text:function(E){var R=E._getBBox();return AY(R.x,R.y,R.width,R.height)}},n=Aq.mapPath=function(Bm,g){if(!g){return Bm}var Bk,d,S,E,Bl,b,R;Bm=w(Bm);for(S=0,Bl=Bm.length;S<Bl;S++){R=Bm[S];for(E=1,b=R.length;E<b;E+=2){Bk=g.x(R[E],R[E+1]);d=g.y(R[E],R[E+1]);R[E]=Bk;R[E+1]=d}}return Bm};Aq._g=AZ;Aq.type=(AZ.win.SVGAngle||AZ.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML");if(Aq.type=="VML"){var Ad=AZ.doc.createElement("div"),Ag;Ad.innerHTML='<v:shape adj="1"/>';Ag=Ad.firstChild;Ag.style.behavior="url(#default#VML)";if(!(Ag&&typeof Ag.adj=="object")){return(Aq.type=Aw)}Ad=null}Aq.svg=!(Aq.vml=Aq.type=="VML");Aq._Paper=Be;Aq.fn=A3=Be.prototype=Aq.prototype;Aq._id=0;Aq._oid=0;Aq.is=function(R,E){E=Bj.call(E);if(E=="finite"){return !AU[AK](+R)}if(E=="array"){return R instanceof Array}return(E=="null"&&R===null)||(E==typeof R&&R!==null)||(E=="object"&&R===Object(R))||(E=="array"&&Array.isArray&&Array.isArray(R))||A0.call(R).slice(8,-1).toLowerCase()==E};function x(S){if(Object(S)!==S){return S}var R=new S.constructor;for(var E in S){if(S[AK](E)){R[E]=x(S[E])}}return R}Aq.angle=function(d,i,S,g,R,b){if(R==null){var E=d-S,Bk=i-g;if(!E&&!Bk){return 0}return(180+AT.atan2(-Bk,-E)*180/Au+360)%360}else{return Aq.angle(d,i,R,b)-Aq.angle(S,g,R,b)}};Aq.rad=function(E){return E%360*Au/180};Aq.deg=function(E){return E*180/Au%360};Aq.snapTo=function(R,b,E){E=Aq.is(E,"finite")?E:10;if(Aq.is(R,BC)){var S=R.length;while(S--){if(AV(R[S]-b)<=E){return R[S]}}}else{R=+R;var d=b%R;if(d<E){return b-d}if(d>R-E){return b-d+R}}return b};var F=Aq.createUUID=(function(E,R){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(E,R).toUpperCase()}})(/[xy]/g,function(S){var R=AT.random()*16|0,E=S=="x"?R:(R&3|8);return E.toString(16)});Aq.setWindow=function(E){eve("raphael.setWindow",Aq,AZ.win,E);AZ.win=E;AZ.doc=AZ.win.document;if(Aq._engine.initWin){Aq._engine.initWin(AZ.win)}};var BE=function(S){if(Aq.vml){var E=/^\s+|\s+$/g;var d;try{var g=new ActiveXObject("htmlfile");g.write("<body>");g.close();d=g.body}catch(Bk){d=createPopup().document.body}var R=d.createTextRange();BE=Af(function(i){try{d.style.color=Bg(i).replace(E,Aw);var Bl=R.queryCommandValue("ForeColor");Bl=((Bl&255)<<16)|(Bl&65280)|((Bl&16711680)>>>16);return"#"+("000000"+Bl.toString(16)).slice(-6)}catch(Bm){return"none"}})}else{var b=AZ.doc.createElement("i");b.title="Rapha\xebl Colour Picker";b.style.display="none";AZ.doc.body.appendChild(b);BE=Af(function(i){b.style.color=i;return AZ.doc.defaultView.getComputedStyle(b,Aw).getPropertyValue("color")})}return BE(S)},Ah=function(){return"hsb("+[this.h,this.s,this.b]+")"},o=function(){return"hsl("+[this.h,this.s,this.l]+")"},W=function(){return this.hex},Ax=function(d,S,E){if(S==null&&Aq.is(d,"object")&&"r" in d&&"g" in d&&"b" in d){E=d.b;S=d.g;d=d.r}if(S==null&&Aq.is(d,AJ)){var R=Aq.getRGB(d);d=R.r;S=R.g;E=R.b}if(d>1||S>1||E>1){d/=255;S/=255;E/=255}return[d,S,E]},A1=function(d,S,E,i){d*=255;S*=255;E*=255;var R={r:d,g:S,b:E,hex:Aq.rgb(d,S,E),toString:W};Aq.is(i,"finite")&&(R.opacity=i);return R};Aq.color=function(E){var R;if(Aq.is(E,"object")&&"h" in E&&"s" in E&&"b" in E){R=Aq.hsb2rgb(E);E.r=R.r;E.g=R.g;E.b=R.b;E.hex=R.hex}else{if(Aq.is(E,"object")&&"h" in E&&"s" in E&&"l" in E){R=Aq.hsl2rgb(E);E.r=R.r;E.g=R.g;E.b=R.b;E.hex=R.hex}else{if(Aq.is(E,"string")){E=Aq.getRGB(E)}if(Aq.is(E,"object")&&"r" in E&&"g" in E&&"b" in E){R=Aq.rgb2hsl(E);E.h=R.h;E.s=R.s;E.l=R.l;R=Aq.rgb2hsb(E);E.v=R.b}else{E={hex:"none"};E.r=E.g=E.b=E.h=E.s=E.v=E.l=-1}}}E.toString=W;return E};Aq.hsb2rgb=function(i,Bm,Bk,d){if(this.is(i,"object")&&"h" in i&&"s" in i&&"b" in i){Bk=i.b;Bm=i.s;i=i.h;d=i.o}i*=360;var g,Bl,S,b,E;i=(i%360)/60;E=Bk*Bm;b=E*(1-AV(i%2-1));g=Bl=S=Bk-E;i=~~i;g+=[E,b,0,0,b,E][i];Bl+=[b,E,E,b,0,0][i];S+=[0,0,b,E,E,b][i];return A1(g,Bl,S,d)};Aq.hsl2rgb=function(Bk,Bm,g,d){if(this.is(Bk,"object")&&"h" in Bk&&"s" in Bk&&"l" in Bk){g=Bk.l;Bm=Bk.s;Bk=Bk.h}if(Bk>1||Bm>1||g>1){Bk/=360;Bm/=100;g/=100}Bk*=360;var i,Bl,S,b,E;Bk=(Bk%360)/60;E=2*Bm*(g<0.5?g:1-g);b=E*(1-AV(Bk%2-1));i=Bl=S=g-E/2;Bk=~~Bk;i+=[E,b,0,0,b,E][Bk];Bl+=[b,E,E,b,0,0][Bk];S+=[0,0,b,E,E,b][Bk];return A1(i,Bl,S,d)};Aq.rgb2hsb=function(Bl,Bk,E){E=Ax(Bl,Bk,E);Bl=E[0];Bk=E[1];E=E[2];var i,d,R,Bm;R=J(Bl,Bk,E);Bm=R-BL(Bl,Bk,E);i=(Bm==0?null:R==Bl?(Bk-E)/Bm:R==Bk?(E-Bl)/Bm+2:(Bl-Bk)/Bm+4);i=((i+360)%6)*60/360;d=Bm==0?0:Bm/R;return{h:i,s:d,b:R,toString:Ah}};Aq.rgb2hsl=function(E,Bk,Bn){Bn=Ax(E,Bk,Bn);E=Bn[0];Bk=Bn[1];Bn=Bn[2];var Bo,i,Bm,Bl,d,R;Bl=J(E,Bk,Bn);d=BL(E,Bk,Bn);R=Bl-d;Bo=(R==0?null:Bl==E?(Bk-Bn)/R:Bl==Bk?(Bn-E)/R+2:(E-Bk)/R+4);Bo=((Bo+360)%6)*60/360;Bm=(Bl+d)/2;i=(R==0?0:Bm<0.5?R/(2*Bm):R/(2-2*Bm));return{h:Bo,s:i,l:Bm,toString:o}};Aq._path2string=function(){return this.join(",").replace(BF,"$1")};function BJ(b,S){for(var E=0,R=b.length;E<R;E++){if(b[E]===S){return b.push(b.splice(E,1)[0])}}}function Af(b,R,E){function S(){var d=Array.prototype.slice.call(arguments,0),i=d.join("\u2400"),g=S.cache=S.cache||{},Bk=S.count=S.count||[];if(g[AK](i)){BJ(Bk,i);return E?E(g[i]):g[i]}Bk.length>=1000&&delete g[Bk.shift()];Bk.push(i);g[i]=b[Bf](R,d);return E?E(g[i]):g[i]}return S}var BU=Aq._preload=function(S,R){var E=AZ.doc.createElement("img");E.style.cssText="position:absolute;left:-9999em;top:-9999em";E.onload=function(){R.call(this);this.onload=null;AZ.doc.body.removeChild(this)};E.onerror=function(){AZ.doc.body.removeChild(this)};AZ.doc.body.appendChild(E);E.src=S};function AQ(){return this.hex}Aq.getRGB=Af(function(E){if(!E||!!((E=Bg(E)).indexOf("-")+1)){return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:AQ}}if(E=="none"){return{r:-1,g:-1,b:-1,hex:"none",toString:AQ}}!(K[AK](E.toLowerCase().substring(0,2))||E.charAt()=="#")&&(E=BE(E));var d,R,S,i,b,Bl,Bk,g=E.match(Z);if(g){if(g[2]){i=u(g[2].substring(5),16);S=u(g[2].substring(3,5),16);R=u(g[2].substring(1,3),16)}if(g[3]){i=u((Bl=g[3].charAt(3))+Bl,16);S=u((Bl=g[3].charAt(2))+Bl,16);R=u((Bl=g[3].charAt(1))+Bl,16)}if(g[4]){Bk=g[4][f](BH);R=AN(Bk[0]);Bk[0].slice(-1)=="%"&&(R*=2.55);S=AN(Bk[1]);Bk[1].slice(-1)=="%"&&(S*=2.55);i=AN(Bk[2]);Bk[2].slice(-1)=="%"&&(i*=2.55);g[1].toLowerCase().slice(0,4)=="rgba"&&(b=AN(Bk[3]));Bk[3]&&Bk[3].slice(-1)=="%"&&(b/=100)}if(g[5]){Bk=g[5][f](BH);R=AN(Bk[0]);Bk[0].slice(-1)=="%"&&(R*=2.55);S=AN(Bk[1]);Bk[1].slice(-1)=="%"&&(S*=2.55);i=AN(Bk[2]);Bk[2].slice(-1)=="%"&&(i*=2.55);(Bk[0].slice(-3)=="deg"||Bk[0].slice(-1)=="\xb0")&&(R/=360);g[1].toLowerCase().slice(0,4)=="hsba"&&(b=AN(Bk[3]));Bk[3]&&Bk[3].slice(-1)=="%"&&(b/=100);return Aq.hsb2rgb(R,S,i,b)}if(g[6]){Bk=g[6][f](BH);R=AN(Bk[0]);Bk[0].slice(-1)=="%"&&(R*=2.55);S=AN(Bk[1]);Bk[1].slice(-1)=="%"&&(S*=2.55);i=AN(Bk[2]);Bk[2].slice(-1)=="%"&&(i*=2.55);(Bk[0].slice(-3)=="deg"||Bk[0].slice(-1)=="\xb0")&&(R/=360);g[1].toLowerCase().slice(0,4)=="hsla"&&(b=AN(Bk[3]));Bk[3]&&Bk[3].slice(-1)=="%"&&(b/=100);return Aq.hsl2rgb(R,S,i,b)}g={r:R,g:S,b:i,toString:AQ};g.hex="#"+(16777216|i|(S<<8)|(R<<16)).toString(16).slice(1);Aq.is(b,"finite")&&(g.opacity=b);return g}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:AQ}},Aq);Aq.hsb=Af(function(S,R,E){return Aq.hsb2rgb(S,R,E).hex});Aq.hsl=Af(function(S,R,E){return Aq.hsl2rgb(S,R,E).hex});Aq.rgb=Af(function(S,R,E){return"#"+(16777216|E|(R<<8)|(S<<16)).toString(16).slice(1)});Aq.getColor=function(R){var S=this.getColor.start=this.getColor.start||{h:0,s:1,b:R||0.75},E=this.hsb2rgb(S.h,S.s,S.b);S.h+=0.075;if(S.h>1){S.h=0;S.s-=0.2;S.s<=0&&(this.getColor.start={h:0,s:1,b:S.b})}return E.hex};Aq.getColor.reset=function(){delete this.start};function BA(S,Bk){var g=[];for(var R=0,E=S.length;E-2*!Bk>R;R+=2){var b=[{x:+S[R-2],y:+S[R-1]},{x:+S[R],y:+S[R+1]},{x:+S[R+2],y:+S[R+3]},{x:+S[R+4],y:+S[R+5]}];if(Bk){if(!R){b[0]={x:+S[E-2],y:+S[E-1]}}else{if(E-4==R){b[3]={x:+S[0],y:+S[1]}}else{if(E-2==R){b[2]={x:+S[0],y:+S[1]};b[3]={x:+S[2],y:+S[3]}}}}}else{if(E-4==R){b[3]=b[2]}else{if(!R){b[0]={x:+S[R],y:+S[R+1]}}}}g.push(["C",(-b[0].x+6*b[1].x+b[2].x)/6,(-b[0].y+6*b[1].y+b[2].y)/6,(b[1].x+6*b[2].x-b[3].x)/6,(b[1].y+6*b[2].y-b[3].y)/6,b[2].x,b[2].y])}return g}Aq.parsePathString=function(E){if(!E){return null}var S=y(E);if(S.arr){return Ay(S.arr)}var b={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},R=[];if(Aq.is(E,BC)&&Aq.is(E[0],BC)){R=Ay(E)}if(!R.length){Bg(E).replace(Az,function(g,d,Bl){var Bk=[],i=d.toLowerCase();Bl.replace(Ao,function(Bn,Bm){Bm&&Bk.push(+Bm)});if(i=="m"&&Bk.length>2){R.push([d][Bd](Bk.splice(0,2)));i="l";d=d=="m"?"l":"L"}if(i=="r"){R.push([d][Bd](Bk))}else{while(Bk.length>=b[i]){R.push([d][Bd](Bk.splice(0,b[i])));if(!b[i]){break}}}})}R.toString=Aq._path2string;S.arr=Ay(R);return R};Aq.parseTransformString=Af(function(R){if(!R){return null}var S={r:3,s:4,t:2,m:6},E=[];if(Aq.is(R,BC)&&Aq.is(R[0],BC)){E=Ay(R)}if(!E.length){Bg(R).replace(AI,function(g,d,Bl){var Bk=[],i=Bj.call(d);Bl.replace(Ao,function(Bn,Bm){Bm&&Bk.push(+Bm)});E.push([d][Bd](Bk))})}E.toString=Aq._path2string;return E});var y=function(R){var E=y.ps=y.ps||{};if(E[R]){E[R].sleep=100}else{E[R]={sleep:100}}setTimeout(function(){for(var S in E){if(E[AK](S)&&S!=R){E[S].sleep--;!E[S].sleep&&delete E[S]}}});return E[R]};Aq.findDotsAtSegment=function(R,E,B1,Bz,i,d,Bm,Bk,Bu){var Br=1-Bu,Bw=BO(Br,3),Bx=BO(Br,2),Bo=Bu*Bu,Bl=Bo*Bu,Bq=Bw*R+Bx*3*Bu*B1+Br*3*Bu*Bu*i+Bl*Bm,Bn=Bw*E+Bx*3*Bu*Bz+Br*3*Bu*Bu*d+Bl*Bk,Bv=R+2*Bu*(B1-R)+Bo*(i-2*B1+R),Bt=E+2*Bu*(Bz-E)+Bo*(d-2*Bz+E),B0=B1+2*Bu*(i-B1)+Bo*(Bm-2*i+B1),By=Bz+2*Bu*(d-Bz)+Bo*(Bk-2*d+Bz),Bs=Br*R+Bu*B1,Bp=Br*E+Bu*Bz,b=Br*i+Bu*Bm,S=Br*d+Bu*Bk,g=(90-AT.atan2(Bv-B0,Bt-By)*180/Au);(Bv>B0||Bt<By)&&(g+=180);return{x:Bq,y:Bn,m:{x:Bv,y:Bt},n:{x:B0,y:By},start:{x:Bs,y:Bp},end:{x:b,y:S},alpha:g}};Aq.bezierBBox=function(R,E,b,S,Bl,i,g,d){if(!Aq.is(R,"array")){R=[R,E,b,S,Bl,i,g,d]}var Bk=A9.apply(null,R);return{x:Bk.min.x,y:Bk.min.y,x2:Bk.max.x,y2:Bk.max.y,width:Bk.max.x-Bk.min.x,height:Bk.max.y-Bk.min.y}};Aq.isPointInsideBBox=function(R,E,S){return E>=R.x&&E<=R.x2&&S>=R.y&&S<=R.y2};Aq.isBBoxIntersect=function(S,R){var E=Aq.isPointInsideBBox;return E(R,S.x,S.y)||E(R,S.x2,S.y)||E(R,S.x,S.y2)||E(R,S.x2,S.y2)||E(S,R.x,R.y)||E(S,R.x2,R.y)||E(S,R.x,R.y2)||E(S,R.x2,R.y2)||(S.x<R.x2&&S.x>R.x||R.x<S.x2&&R.x>S.x)&&(S.y<R.y2&&S.y>R.y||R.y<S.y2&&R.y>S.y)};function BI(E,i,g,d,b){var S=-3*i+9*g-9*d+3*b,R=E*S+6*i-12*g+6*d;return E*R-3*i+3*g}function N(Bv,d,Bu,S,Bt,R,Bq,E,Bn){if(Bn==null){Bn=1}Bn=Bn>1?1:Bn<0?0:Bn;var Bo=Bn/2,Bp=12,Bk=[-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],Bs=[0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],b=0;for(var Br=0;Br<Bp;Br++){var Bl=Bo*Bk[Br]+Bo,Bm=BI(Bl,Bv,Bu,Bt,Bq),Bw=BI(Bl,d,S,R,E),g=Bm*Bm+Bw*Bw;b+=Bs[Br]*AT.sqrt(g)}return Bo*b}function c(S,Bo,R,Bn,E,Bl,Bq,Bk,Bm){if(Bm<0||N(S,Bo,R,Bn,E,Bl,Bq,Bk)<Bm){return }var Bp=1,b=Bp/2,g=Bp-b,d,i=0.01;d=N(S,Bo,R,Bn,E,Bl,Bq,Bk,g);while(AV(d-Bm)>i){b/=2;g+=(d<Bm?1:-1)*b;d=N(S,Bo,R,Bn,E,Bl,Bq,Bk,g)}return g}function q(b,Bp,S,Bn,E,Bm,Br,Bl){if(J(b,S)<BL(E,Br)||BL(b,S)>J(E,Br)||J(Bp,Bn)<BL(Bm,Bl)||BL(Bp,Bn)>J(Bm,Bl)){return }var Bk=(b*Bn-Bp*S)*(E-Br)-(b-S)*(E*Bl-Bm*Br),i=(b*Bn-Bp*S)*(Bm-Bl)-(Bp-Bn)*(E*Bl-Bm*Br),d=(b-S)*(Bm-Bl)-(Bp-Bn)*(E-Br);if(!d){return }var Bq=Bk/d,Bo=i/d,g=+Bq.toFixed(2),R=+Bo.toFixed(2);if(g<+BL(b,S).toFixed(2)||g>+J(b,S).toFixed(2)||g<+BL(E,Br).toFixed(2)||g>+J(E,Br).toFixed(2)||R<+BL(Bp,Bn).toFixed(2)||R>+J(Bp,Bn).toFixed(2)||R<+BL(Bm,Bl).toFixed(2)||R>+J(Bm,Bl).toFixed(2)){return }return{x:Bq,y:Bo}}function AX(R,E){return AF(R,E)}function Q(R,E){return AF(R,E,1)}function AF(B1,B0,Bz){var b=Aq.bezierBBox(B1),R=Aq.bezierBBox(B0);if(!Aq.isBBoxIntersect(b,R)){return Bz?0:[]}var Bu=N.apply(0,B1),Bt=N.apply(0,B0),Bl=~~(Bu/5),Bk=~~(Bt/5),Br=[],Bq=[],S={},B2=Bz?0:[];for(var Bw=0;Bw<Bl+1;Bw++){var Bs=Aq.findDotsAtSegment.apply(Aq,B1.concat(Bw/Bl));Br.push({x:Bs.x,y:Bs.y,t:Bw/Bl})}for(Bw=0;Bw<Bk+1;Bw++){Bs=Aq.findDotsAtSegment.apply(Aq,B0.concat(Bw/Bk));Bq.push({x:Bs.x,y:Bs.y,t:Bw/Bk})}for(Bw=0;Bw<Bl;Bw++){for(var Bv=0;Bv<Bk;Bv++){var By=Br[Bw],E=Br[Bw+1],Bx=Bq[Bv],g=Bq[Bv+1],Bp=AV(E.x-By.x)<0.001?"y":"x",Bo=AV(g.x-Bx.x)<0.001?"y":"x",d=q(By.x,By.y,E.x,E.y,Bx.x,Bx.y,g.x,g.y);if(d){if(S[d.x.toFixed(4)]==d.y.toFixed(4)){continue}S[d.x.toFixed(4)]=d.y.toFixed(4);var Bn=By.t+AV((d[Bp]-By[Bp])/(E[Bp]-By[Bp]))*(E.t-By.t),Bm=Bx.t+AV((d[Bo]-Bx[Bo])/(g[Bo]-Bx[Bo]))*(g.t-Bx.t);if(Bn>=0&&Bn<=1&&Bm>=0&&Bm<=1){if(Bz){B2++}else{B2.push({x:d.x,y:d.y,t1:Bn,t2:Bm})}}}}}return B2}Aq.pathIntersection=function(R,E){return e(R,E)};Aq.pathIntersectionNumber=function(R,E){return e(R,E,1)};function e(S,E,Bv){S=Aq._path2curve(S);E=Aq._path2curve(E);var Bt,g,Bs,b,Bq,Bk,R,Bn,Bz,By,B0=Bv?0:[];for(var Br=0,Bl=S.length;Br<Bl;Br++){var Bx=S[Br];if(Bx[0]=="M"){Bt=Bq=Bx[1];g=Bk=Bx[2]}else{if(Bx[0]=="C"){Bz=[Bt,g].concat(Bx.slice(1));Bt=Bz[6];g=Bz[7]}else{Bz=[Bt,g,Bt,g,Bq,Bk,Bq,Bk];Bt=Bq;g=Bk}for(var Bp=0,Bu=E.length;Bp<Bu;Bp++){var Bw=E[Bp];if(Bw[0]=="M"){Bs=R=Bw[1];b=Bn=Bw[2]}else{if(Bw[0]=="C"){By=[Bs,b].concat(Bw.slice(1));Bs=By[6];b=By[7]}else{By=[Bs,b,Bs,b,R,Bn,R,Bn];Bs=R;b=Bn}var Bm=AF(Bz,By,Bv);if(Bv){B0+=Bm}else{for(var Bo=0,d=Bm.length;Bo<d;Bo++){Bm[Bo].segment1=Br;Bm[Bo].segment2=Bp;Bm[Bo].bez1=Bz;Bm[Bo].bez2=By}B0=B0.concat(Bm)}}}}}return B0}Aq.isPointInsidePath=function(R,E,b){var S=Aq.pathBBox(R);return Aq.isPointInsideBBox(S,E,b)&&e(R,[["M",E,b],["H",S.x2+10]],1)%2==1};Aq._removedFactory=function(E){return function(){eve("raphael.log",null,"Rapha\xebl: you are calling to method \u201c"+E+"\u201d of removed object",E)}};var AM=Aq.pathBBox=function(Bs){var Bm=y(Bs);if(Bm.bbox){return Bm.bbox}if(!Bs){return{x:0,y:0,width:0,height:0,x2:0,y2:0}}Bs=w(Bs);var Bp=0,Bo=0,d=[],R=[],S;for(var Bk=0,Br=Bs.length;Bk<Br;Bk++){S=Bs[Bk];if(S[0]=="M"){Bp=S[1];Bo=S[2];d.push(Bp);R.push(Bo)}else{var Bl=A9(Bp,Bo,S[1],S[2],S[3],S[4],S[5],S[6]);d=d[Bd](Bl.min.x,Bl.max.x);R=R[Bd](Bl.min.y,Bl.max.y);Bp=S[5];Bo=S[6]}}var E=BL[Bf](0,d),Bq=BL[Bf](0,R),g=J[Bf](0,d),b=J[Bf](0,R),Bn={x:E,y:Bq,x2:g,y2:b,width:g-E,height:b-Bq};Bm.bbox=x(Bn);return Bn},Ay=function(R){var E=x(R);E.toString=Aq._path2string;return E},Ab=Aq._pathToRelative=function(b){var Bl=y(b);if(Bl.rel){return Ay(Bl.rel)}if(!Aq.is(b,BC)||!Aq.is(b&&b[0],BC)){b=Aq.parsePathString(b)}var Bo=[],Bq=0,Bp=0,Bt=0,Bs=0,S=0;if(b[0][0]=="M"){Bq=b[0][1];Bp=b[0][2];Bt=Bq;Bs=Bp;S++;Bo.push(["M",Bq,Bp])}for(var Bk=S,Bu=b.length;Bk<Bu;Bk++){var E=Bo[Bk]=[],Br=b[Bk];if(Br[0]!=Bj.call(Br[0])){E[0]=Bj.call(Br[0]);switch(E[0]){case"a":E[1]=Br[1];E[2]=Br[2];E[3]=Br[3];E[4]=Br[4];E[5]=Br[5];E[6]=+(Br[6]-Bq).toFixed(3);E[7]=+(Br[7]-Bp).toFixed(3);break;case"v":E[1]=+(Br[1]-Bp).toFixed(3);break;case"m":Bt=Br[1];Bs=Br[2];default:for(var g=1,Bm=Br.length;g<Bm;g++){E[g]=+(Br[g]-((g%2)?Bq:Bp)).toFixed(3)}}}else{E=Bo[Bk]=[];if(Br[0]=="m"){Bt=Br[1]+Bq;Bs=Br[2]+Bp}for(var d=0,R=Br.length;d<R;d++){Bo[Bk][d]=Br[d]}}var Bn=Bo[Bk].length;switch(Bo[Bk][0]){case"z":Bq=Bt;Bp=Bs;break;case"h":Bq+=+Bo[Bk][Bn-1];break;case"v":Bp+=+Bo[Bk][Bn-1];break;default:Bq+=+Bo[Bk][Bn-2];Bp+=+Bo[Bk][Bn-1]}}Bo.toString=Aq._path2string;Bl.rel=Ay(Bo);return Bo},V=Aq._pathToAbsolute=function(Bp){var S=y(Bp);if(S.abs){return Ay(S.abs)}if(!Aq.is(Bp,BC)||!Aq.is(Bp&&Bp[0],BC)){Bp=Aq.parsePathString(Bp)}if(!Bp||!Bp.length){return[["M",0,0]]}var Bv=[],Bk=0,g=0,Bn=0,Bm=0,b=0;if(Bp[0][0]=="M"){Bk=+Bp[0][1];g=+Bp[0][2];Bn=Bk;Bm=g;b++;Bv[0]=["M",Bk,g]}var Bu=Bp.length==3&&Bp[0][0]=="M"&&Bp[1][0].toUpperCase()=="R"&&Bp[2][0].toUpperCase()=="Z";for(var Bo,E,Bs=b,Bl=Bp.length;Bs<Bl;Bs++){Bv.push(Bo=[]);E=Bp[Bs];if(E[0]!=BS.call(E[0])){Bo[0]=BS.call(E[0]);switch(Bo[0]){case"A":Bo[1]=E[1];Bo[2]=E[2];Bo[3]=E[3];Bo[4]=E[4];Bo[5]=E[5];Bo[6]=+(E[6]+Bk);Bo[7]=+(E[7]+g);break;case"V":Bo[1]=+E[1]+g;break;case"H":Bo[1]=+E[1]+Bk;break;case"R":var d=[Bk,g][Bd](E.slice(1));for(var Br=2,Bt=d.length;Br<Bt;Br++){d[Br]=+d[Br]+Bk;d[++Br]=+d[Br]+g}Bv.pop();Bv=Bv[Bd](BA(d,Bu));break;case"M":Bn=+E[1]+Bk;Bm=+E[2]+g;default:for(Br=1,Bt=E.length;Br<Bt;Br++){Bo[Br]=+E[Br]+((Br%2)?Bk:g)}}}else{if(E[0]=="R"){d=[Bk,g][Bd](E.slice(1));Bv.pop();Bv=Bv[Bd](BA(d,Bu));Bo=["R"][Bd](E.slice(-2))}else{for(var Bq=0,R=E.length;Bq<R;Bq++){Bo[Bq]=E[Bq]}}}switch(Bo[0]){case"Z":Bk=Bn;g=Bm;break;case"H":Bk=Bo[1];break;case"V":g=Bo[1];break;case"M":Bn=Bo[Bo.length-2];Bm=Bo[Bo.length-1];default:Bk=Bo[Bo.length-2];g=Bo[Bo.length-1]}}Bv.toString=Aq._path2string;S.abs=Ay(Bv);return Bv},Bh=function(R,b,E,S){return[R,b,E,S,E,S]},BM=function(R,b,i,d,E,S){var g=1/3,Bk=2/3;return[g*R+Bk*i,g*b+Bk*d,g*E+Bk*i,g*S+Bk*d,E,S]},AE=function(Br,CM,B0,By,Bs,Bm,b,Bq,CL,Bt){var Bx=Au*120/180,E=Au/180*(+Bs||0),B4=[],B1,CI=Af(function(CN,CQ,i){var CP=CN*AT.cos(i)-CQ*AT.sin(i),CO=CN*AT.sin(i)+CQ*AT.cos(i);return{x:CP,y:CO}});if(!Bt){B1=CI(Br,CM,-E);Br=B1.x;CM=B1.y;B1=CI(Bq,CL,-E);Bq=B1.x;CL=B1.y;var R=AT.cos(Au/180*Bs),Bo=AT.sin(Au/180*Bs),B6=(Br-Bq)/2,B5=(CM-CL)/2;var CG=(B6*B6)/(B0*B0)+(B5*B5)/(By*By);if(CG>1){CG=AT.sqrt(CG);B0=CG*B0;By=CG*By}var S=B0*B0,B9=By*By,CB=(Bm==b?-1:1)*AT.sqrt(AV((S*B9-S*B5*B5-B9*B6*B6)/(S*B5*B5+B9*B6*B6))),Bv=CB*B0*B5/By+(Br+Bq)/2,Bu=CB*-By*B6/B0+(CM+CL)/2,Bl=AT.asin(((CM-Bu)/By).toFixed(9)),Bk=AT.asin(((CL-Bu)/By).toFixed(9));Bl=Br<Bv?Au-Bl:Bl;Bk=Bq<Bv?Au-Bk:Bk;Bl<0&&(Bl=Au*2+Bl);Bk<0&&(Bk=Au*2+Bk);if(b&&Bl>Bk){Bl=Bl-Au*2}if(!b&&Bk>Bl){Bk=Bk-Au*2}}else{Bl=Bt[0];Bk=Bt[1];Bv=Bt[2];Bu=Bt[3]}var Bp=Bk-Bl;if(AV(Bp)>Bx){var Bw=Bk,Bz=Bq,Bn=CL;Bk=Bl+Bx*(b&&Bk>Bl?1:-1);Bq=Bv+B0*AT.cos(Bk);CL=Bu+By*AT.sin(Bk);B4=AE(Bq,CL,B0,By,Bs,0,b,Bz,Bn,[Bk,Bw,Bv,Bu])}Bp=Bk-Bl;var g=AT.cos(Bl),CK=AT.sin(Bl),d=AT.cos(Bk),CJ=AT.sin(Bk),B7=AT.tan(Bp/4),CA=4/3*B0*B7,B8=4/3*By*B7,CH=[Br,CM],CF=[Br+CA*CK,CM-B8*g],CE=[Bq+CA*CJ,CL-B8*d],CC=[Bq,CL];CF[0]=2*CH[0]-CF[0];CF[1]=2*CH[1]-CF[1];if(Bt){return[CF,CE,CC][Bd](B4)}else{B4=[CF,CE,CC][Bd](B4).join()[f](",");var B2=[];for(var CD=0,B3=B4.length;CD<B3;CD++){B2[CD]=CD%2?CI(B4[CD-1],B4[CD],E).y:CI(B4[CD],B4[CD+1],E).x}return B2}},AG=function(R,E,b,S,Bl,Bk,i,g,Bm){var d=1-Bm;return{x:BO(d,3)*R+BO(d,2)*3*Bm*b+d*3*Bm*Bm*Bl+BO(Bm,3)*i,y:BO(d,3)*E+BO(d,2)*3*Bm*S+d*3*Bm*Bm*Bk+BO(Bm,3)*g}},A9=Af(function(S,E,g,d,Bt,Bs,Bp,Bm){var Br=(Bt-2*g+S)-(Bp-2*Bt+g),Bo=2*(g-S)-2*(Bt-g),Bl=S-g,Bk=(-Bo+AT.sqrt(Bo*Bo-4*Br*Bl))/2/Br,i=(-Bo-AT.sqrt(Bo*Bo-4*Br*Bl))/2/Br,Bn=[E,Bm],Bq=[S,Bp],R;AV(Bk)>"1e12"&&(Bk=0.5);AV(i)>"1e12"&&(i=0.5);if(Bk>0&&Bk<1){R=AG(S,E,g,d,Bt,Bs,Bp,Bm,Bk);Bq.push(R.x);Bn.push(R.y)}if(i>0&&i<1){R=AG(S,E,g,d,Bt,Bs,Bp,Bm,i);Bq.push(R.x);Bn.push(R.y)}Br=(Bs-2*d+E)-(Bm-2*Bs+d);Bo=2*(d-E)-2*(Bs-d);Bl=E-d;Bk=(-Bo+AT.sqrt(Bo*Bo-4*Br*Bl))/2/Br;i=(-Bo-AT.sqrt(Bo*Bo-4*Br*Bl))/2/Br;AV(Bk)>"1e12"&&(Bk=0.5);AV(i)>"1e12"&&(i=0.5);if(Bk>0&&Bk<1){R=AG(S,E,g,d,Bt,Bs,Bp,Bm,Bk);Bq.push(R.x);Bn.push(R.y)}if(i>0&&i<1){R=AG(S,E,g,d,Bt,Bs,Bp,Bm,i);Bq.push(R.x);Bn.push(R.y)}return{min:{x:BL[Bf](0,Bq),y:BL[Bf](0,Bn)},max:{x:J[Bf](0,Bq),y:J[Bf](0,Bn)}}}),w=Aq._path2curve=Af(function(Bt,Bo){var Bm=!Bo&&y(Bt);if(!Bo&&Bm.curve){return Ay(Bm.curve)}var b=V(Bt),Bp=Bo&&V(Bo),Bq={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},R={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g=function(Bu,Bv){var i,Bw;if(!Bu){return["C",Bv.x,Bv.y,Bv.x,Bv.y,Bv.x,Bv.y]}!(Bu[0] in {T:1,Q:1})&&(Bv.qx=Bv.qy=null);switch(Bu[0]){case"M":Bv.X=Bu[1];Bv.Y=Bu[2];break;case"A":Bu=["C"][Bd](AE[Bf](0,[Bv.x,Bv.y][Bd](Bu.slice(1))));break;case"S":i=Bv.x+(Bv.x-(Bv.bx||Bv.x));Bw=Bv.y+(Bv.y-(Bv.by||Bv.y));Bu=["C",i,Bw][Bd](Bu.slice(1));break;case"T":Bv.qx=Bv.x+(Bv.x-(Bv.qx||Bv.x));Bv.qy=Bv.y+(Bv.y-(Bv.qy||Bv.y));Bu=["C"][Bd](BM(Bv.x,Bv.y,Bv.qx,Bv.qy,Bu[1],Bu[2]));break;case"Q":Bv.qx=Bu[1];Bv.qy=Bu[2];Bu=["C"][Bd](BM(Bv.x,Bv.y,Bu[1],Bu[2],Bu[3],Bu[4]));break;case"L":Bu=["C"][Bd](Bh(Bv.x,Bv.y,Bu[1],Bu[2]));break;case"H":Bu=["C"][Bd](Bh(Bv.x,Bv.y,Bu[1],Bv.y));break;case"V":Bu=["C"][Bd](Bh(Bv.x,Bv.y,Bv.x,Bu[1]));break;case"Z":Bu=["C"][Bd](Bh(Bv.x,Bv.y,Bv.X,Bv.Y));break}return Bu},E=function(Bu,Bv){if(Bu[Bv].length>7){Bu[Bv].shift();var Bw=Bu[Bv];while(Bw.length){Bu.splice(Bv++,0,["C"][Bd](Bw.splice(0,6)))}Bu.splice(Bv,1);Br=J(b.length,Bp&&Bp.length||0)}},S=function(By,Bx,Bv,Bu,Bw){if(By&&Bx&&By[Bw][0]=="M"&&Bx[Bw][0]!="M"){Bx.splice(Bw,0,["M",Bu.x,Bu.y]);Bv.bx=0;Bv.by=0;Bv.x=By[Bw][1];Bv.y=By[Bw][2];Br=J(b.length,Bp&&Bp.length||0)}};for(var Bl=0,Br=J(b.length,Bp&&Bp.length||0);Bl<Br;Bl++){b[Bl]=g(b[Bl],Bq);E(b,Bl);Bp&&(Bp[Bl]=g(Bp[Bl],R));Bp&&E(Bp,Bl);S(b,Bp,Bq,R,Bl);S(Bp,b,R,Bq,Bl);var Bk=b[Bl],Bs=Bp&&Bp[Bl],d=Bk.length,Bn=Bp&&Bs.length;Bq.x=Bk[d-2];Bq.y=Bk[d-1];Bq.bx=AN(Bk[d-4])||Bq.x;Bq.by=AN(Bk[d-3])||Bq.y;R.bx=Bp&&(AN(Bs[Bn-4])||R.x);R.by=Bp&&(AN(Bs[Bn-3])||R.y);R.x=Bp&&Bs[Bn-2];R.y=Bp&&Bs[Bn-1]}if(!Bp){Bm.curve=Ay(b)}return Bp?[b,Bp]:b},null,Ay),U=Aq._parseDots=Af(function(Bn){var Bm=[];for(var g=0,Bo=Bn.length;g<Bo;g++){var E={},Bl=Bn[g].match(/^([^:]*):?([\d\.]*)/);E.color=Aq.getRGB(Bl[1]);if(E.color.error){return null}E.color=E.color.hex;Bl[2]&&(E.offset=Bl[2]+"%");Bm.push(E)}for(g=1,Bo=Bm.length-1;g<Bo;g++){if(!Bm[g].offset){var R=AN(Bm[g-1].offset||0),S=0;for(var b=g+1;b<Bo;b++){if(Bm[b].offset){S=Bm[b].offset;break}}if(!S){S=100;b=Bo}S=AN(S);var Bk=(S-R)/(b-g+1);for(;g<b;g++){R+=Bk;Bm[g].offset=R+"%"}}}return Bm}),Aj=Aq._tear=function(E,R){E==R.top&&(R.top=E.prev);E==R.bottom&&(R.bottom=E.next);E.next&&(E.next.prev=E.prev);E.prev&&(E.prev.next=E.next)},AP=Aq._tofront=function(E,R){if(R.top===E){return }Aj(E,R);E.next=null;E.prev=R.top;R.top.next=E;R.top=E},M=Aq._toback=function(E,R){if(R.bottom===E){return }Aj(E,R);E.next=R.bottom;E.prev=null;R.bottom.prev=E;R.bottom=E},h=Aq._insertafter=function(R,E,S){Aj(R,S);E==S.top&&(S.top=R);E.next&&(E.next.prev=R);R.next=E.next;R.prev=E;E.next=R},As=Aq._insertbefore=function(R,E,S){Aj(R,S);E==S.bottom&&(S.bottom=R);E.prev&&(E.prev.next=R);R.prev=E.prev;E.prev=R;R.next=E},BK=Aq.toMatrix=function(S,E){var b=AM(S),R={_:{transform:Aw},getBBox:function(){return b}};An(R,E);return R.matrix},t=Aq.transformPath=function(R,E){return n(R,BK(R,E))},An=Aq._extractTransform=function(R,By){if(By==null){return R._.transform}By=Bg(By).replace(/\.{3}|\u2026/g,R._.transform||Aw);var Bq=Aq.parseTransformString(By),Bo=0,Bm=0,Bl=0,Bs=1,Br=1,Bz=R._,Bt=new Ae;Bz.transform=Bq||[];if(Bq){for(var Bu=0,Bn=Bq.length;Bu<Bn;Bu++){var Bp=Bq[Bu],E=Bp.length,d=Bg(Bp[0]).toLowerCase(),Bx=Bp[0]!=d,Bk=Bx?Bt.invert():0,Bw,b,Bv,S,g;if(d=="t"&&E==3){if(Bx){Bw=Bk.x(0,0);b=Bk.y(0,0);Bv=Bk.x(Bp[1],Bp[2]);S=Bk.y(Bp[1],Bp[2]);Bt.translate(Bv-Bw,S-b)}else{Bt.translate(Bp[1],Bp[2])}}else{if(d=="r"){if(E==2){g=g||R.getBBox(1);Bt.rotate(Bp[1],g.x+g.width/2,g.y+g.height/2);Bo+=Bp[1]}else{if(E==4){if(Bx){Bv=Bk.x(Bp[2],Bp[3]);S=Bk.y(Bp[2],Bp[3]);Bt.rotate(Bp[1],Bv,S)}else{Bt.rotate(Bp[1],Bp[2],Bp[3])}Bo+=Bp[1]}}}else{if(d=="s"){if(E==2||E==3){g=g||R.getBBox(1);Bt.scale(Bp[1],Bp[E-1],g.x+g.width/2,g.y+g.height/2);Bs*=Bp[1];Br*=Bp[E-1]}else{if(E==5){if(Bx){Bv=Bk.x(Bp[3],Bp[4]);S=Bk.y(Bp[3],Bp[4]);Bt.scale(Bp[1],Bp[2],Bv,S)}else{Bt.scale(Bp[1],Bp[2],Bp[3],Bp[4])}Bs*=Bp[1];Br*=Bp[2]}}}else{if(d=="m"&&E==7){Bt.add(Bp[1],Bp[2],Bp[3],Bp[4],Bp[5],Bp[6])}}}}Bz.dirtyT=1;R.matrix=Bt}}R.matrix=Bt;Bz.sx=Bs;Bz.sy=Br;Bz.deg=Bo;Bz.dx=Bm=Bt.e;Bz.dy=Bl=Bt.f;if(Bs==1&&Br==1&&!Bo&&Bz.bbox){Bz.bbox.x+=+Bm;Bz.bbox.y+=+Bl}else{Bz.dirtyT=1}},I=function(R){var E=R[0];switch(E.toLowerCase()){case"t":return[E,0,0];case"m":return[E,1,0,0,1,0,0];case"r":if(R.length==4){return[E,0,R[2],R[3]]}else{return[E,0]}case"s":if(R.length==5){return[E,1,1,R[3],R[4]]}else{if(R.length==3){return[E,1,1]}else{return[E,1]}}}},Aa=Aq._equaliseTransform=function(d,b){b=Bg(b).replace(/\.{3}|\u2026/g,d);d=Aq.parseTransformString(d)||[];b=Aq.parseTransformString(b)||[];var E=J(d.length,b.length),Bm=[],Bn=[],S=0,R,g,Bl,Bk;for(;S<E;S++){Bl=d[S]||I(b[S]);Bk=b[S]||I(Bl);if((Bl[0]!=Bk[0])||(Bl[0].toLowerCase()=="r"&&(Bl[2]!=Bk[2]||Bl[3]!=Bk[3]))||(Bl[0].toLowerCase()=="s"&&(Bl[3]!=Bk[3]||Bl[4]!=Bk[4]))){return }Bm[S]=[];Bn[S]=[];for(R=0,g=J(Bl.length,Bk.length);R<g;R++){R in Bl&&(Bm[S][R]=Bl[R]);R in Bk&&(Bn[S][R]=Bk[R])}}return{from:Bm,to:Bn}};Aq._getContainer=function(E,d,S,b){var R;R=b==null&&!Aq.is(E,"object")?AZ.doc.getElementById(E):E;if(R==null){return }if(R.tagName){if(d==null){return{container:R,width:R.style.pixelWidth||R.offsetWidth,height:R.style.pixelHeight||R.offsetHeight}}else{return{container:R,width:d,height:S}}}return{container:1,x:E,y:d,width:S,height:b}};Aq.pathToRelative=Ab;Aq._engine={};Aq.path2curve=w;Aq.matrix=function(R,E,Bk,i,g,S){return new Ae(R,E,Bk,i,g,S)};function Ae(R,E,Bk,i,g,S){if(R!=null){this.a=+R;this.b=+E;this.c=+Bk;this.d=+i;this.e=+g;this.f=+S}else{this.a=1;this.b=0;this.c=0;this.d=1;this.e=0;this.f=0}}(function(S){S.add=function(Bu,Br,Bp,Bn,Bl,Bk){var i=[[],[],[]],g=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],Bt=[[Bu,Bp,Bl],[Br,Bn,Bk],[0,0,1]],Bs,Bq,Bo,Bm;if(Bu&&Bu instanceof Ae){Bt=[[Bu.a,Bu.c,Bu.e],[Bu.b,Bu.d,Bu.f],[0,0,1]]}for(Bs=0;Bs<3;Bs++){for(Bq=0;Bq<3;Bq++){Bm=0;for(Bo=0;Bo<3;Bo++){Bm+=g[Bs][Bo]*Bt[Bo][Bq]}i[Bs][Bq]=Bm}}this.a=i[0][0];this.b=i[1][0];this.c=i[0][1];this.d=i[1][1];this.e=i[0][2];this.f=i[1][2]};S.invert=function(){var d=this,b=d.a*d.d-d.b*d.c;return new Ae(d.d/b,-d.b/b,-d.c/b,d.a/b,(d.c*d.f-d.d*d.e)/b,(d.b*d.e-d.a*d.f)/b)};S.clone=function(){return new Ae(this.a,this.b,this.c,this.d,this.e,this.f)};S.translate=function(b,d){this.add(1,0,0,1,b,d)};S.scale=function(d,i,b,g){i==null&&(i=d);(b||g)&&this.add(1,0,0,1,b,g);this.add(d,0,0,i,0,0);(b||g)&&this.add(1,0,0,1,-b,-g)};S.rotate=function(d,b,Bk){d=Aq.rad(d);b=b||0;Bk=Bk||0;var i=+AT.cos(d).toFixed(9),g=+AT.sin(d).toFixed(9);this.add(i,g,-g,i,b,Bk);this.add(1,0,0,1,-b,-Bk)};S.x=function(b,d){return b*this.a+d*this.c+this.e};S.y=function(b,d){return b*this.b+d*this.d+this.f};S.get=function(b){return +this[Bg.fromCharCode(97+b)].toFixed(4)};S.toString=function(){return Aq.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()};S.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"};S.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]};function R(b){return b[0]*b[0]+b[1]*b[1]}function E(b){var d=AT.sqrt(R(b));b[0]&&(b[0]/=d);b[1]&&(b[1]/=d)}S.split=function(){var d={};d.dx=this.e;d.dy=this.f;var i=[[this.a,this.c],[this.b,this.d]];d.scalex=AT.sqrt(R(i[0]));E(i[0]);d.shear=i[0][0]*i[1][0]+i[0][1]*i[1][1];i[1]=[i[1][0]-i[0][0]*d.shear,i[1][1]-i[0][1]*d.shear];d.scaley=AT.sqrt(R(i[1]));E(i[1]);d.shear/=d.scaley;var b=-i[0][1],g=i[1][1];if(g<0){d.rotate=Aq.deg(AT.acos(g));if(b<0){d.rotate=360-d.rotate}}else{d.rotate=Aq.deg(AT.asin(b))}d.isSimple=!+d.shear.toFixed(9)&&(d.scalex.toFixed(9)==d.scaley.toFixed(9)||!d.rotate);d.isSuperSimple=!+d.shear.toFixed(9)&&d.scalex.toFixed(9)==d.scaley.toFixed(9)&&!d.rotate;d.noRotation=!+d.shear.toFixed(9)&&!d.rotate;return d};S.toTransformString=function(b){var d=b||this[f]();if(d.isSimple){d.scalex=+d.scalex.toFixed(4);d.scaley=+d.scaley.toFixed(4);d.rotate=+d.rotate.toFixed(4);return(d.dx||d.dy?"t"+[d.dx,d.dy]:Aw)+(d.scalex!=1||d.scaley!=1?"s"+[d.scalex,d.scaley,0,0]:Aw)+(d.rotate?"r"+[d.rotate,0,0]:Aw)}else{return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}})(Ae.prototype);var v=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);if((navigator.vendor=="Apple Computer, Inc.")&&(v&&v[1]<4||navigator.platform.slice(0,2)=="iP")||(navigator.vendor=="Google Inc."&&v&&v[1]<8)){A3.safari=function(){var E=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){E.remove()})}}else{A3.safari=k}var r=function(){this.returnValue=false},Bc=function(){return this.originalEvent.preventDefault()},A7=function(){this.cancelBubble=true},Ai=function(){return this.originalEvent.stopPropagation()},Ac=(function(){if(AZ.doc.addEventListener){return function(g,b,S,R){var E=z&&BW[b]?BW[b]:b,d=function(Bp){var Bo=AZ.doc.documentElement.scrollTop||AZ.doc.body.scrollTop,Bq=AZ.doc.documentElement.scrollLeft||AZ.doc.body.scrollLeft,Bk=Bp.clientX+Bq,Br=Bp.clientY+Bo;if(z&&BW[AK](b)){for(var Bm=0,Bn=Bp.targetTouches&&Bp.targetTouches.length;Bm<Bn;Bm++){if(Bp.targetTouches[Bm].target==g){var Bl=Bp;Bp=Bp.targetTouches[Bm];Bp.originalEvent=Bl;Bp.preventDefault=Bc;Bp.stopPropagation=Ai;break}}}return S.call(R,Bp,Bk,Br)};g.addEventListener(E,d,false);return function(){g.removeEventListener(E,d,false);return true}}}else{if(AZ.doc.attachEvent){return function(g,b,S,R){var d=function(Bl){Bl=Bl||AZ.win.event;var Bk=AZ.doc.documentElement.scrollTop||AZ.doc.body.scrollTop,Bm=AZ.doc.documentElement.scrollLeft||AZ.doc.body.scrollLeft,i=Bl.clientX+Bm,Bn=Bl.clientY+Bk;Bl.preventDefault=Bl.preventDefault||r;Bl.stopPropagation=Bl.stopPropagation||A7;return S.call(R,Bl,i,Bn)};g.attachEvent("on"+b,d);var E=function(){g.detachEvent("on"+b,d);return true};return E}}}})(),BD=[],BX=function(Bl){var Bo=Bl.clientX,Bn=Bl.clientY,Bq=AZ.doc.documentElement.scrollTop||AZ.doc.body.scrollTop,Br=AZ.doc.documentElement.scrollLeft||AZ.doc.body.scrollLeft,S,b=BD.length;while(b--){S=BD[b];if(z){var g=Bl.touches.length,d;while(g--){d=Bl.touches[g];if(d.identifier==S.el._drag.id){Bo=d.clientX;Bn=d.clientY;(Bl.originalEvent?Bl.originalEvent:Bl).preventDefault();break}}}else{Bl.preventDefault()}var R=S.el.node,E,Bk=R.nextSibling,Bp=R.parentNode,Bm=R.style.display;AZ.win.opera&&Bp.removeChild(R);R.style.display="none";E=S.el.paper.getElementByPoint(Bo,Bn);R.style.display=Bm;AZ.win.opera&&(Bk?Bp.insertBefore(R,Bk):Bp.appendChild(R));E&&eve("raphael.drag.over."+S.el.id,S.el,E);Bo+=Br;Bn+=Bq;eve("raphael.drag.move."+S.el.id,S.move_scope||S.el,Bo-S.el._drag.x,Bn-S.el._drag.y,Bo,Bn,Bl)}},C=function(S){Aq.unmousemove(BX).unmouseup(C);var R=BD.length,E;while(R--){E=BD[R];E.el._drag={};eve("raphael.drag.end."+E.el.id,E.end_scope||E.start_scope||E.move_scope||E.el,S)}BD=[]},BG=Aq.el={};for(var AW=s.length;AW--;){(function(E){Aq[E]=BG[E]=function(S,R){if(Aq.is(S,"function")){this.events=this.events||[];this.events.push({name:E,f:S,unbind:Ac(this.shape||this.node||AZ.doc,E,S,R||this)})}return this};Aq["un"+E]=BG["un"+E]=function(b){var S=this.events||[],R=S.length;while(R--){if(S[R].name==E&&S[R].f==b){S[R].unbind();S.splice(R,1);!S.length&&delete this.events;return this}}return this}})(s[AW])}BG.data=function(R,b){var S=At[this.id]=At[this.id]||{};if(arguments.length==1){if(Aq.is(R,"object")){for(var E in R){if(R[AK](E)){this.data(E,R[E])}}return this}eve("raphael.data.get."+this.id,this,S[R],R);return S[R]}S[R]=b;eve("raphael.data.set."+this.id,this,b,R);return this};BG.removeData=function(E){if(E==null){At[this.id]={}}else{At[this.id]&&delete At[this.id][E]}return this};BG.hover=function(b,E,S,R){return this.mouseover(b,S).mouseout(E,R||S)};BG.unhover=function(R,E){return this.unmouseover(R).unmouseout(E)};var BT=[];BG.drag=function(R,g,d,E,S,b){function i(Bl){(Bl.originalEvent||Bl).preventDefault();var Bk=AZ.doc.documentElement.scrollTop||AZ.doc.body.scrollTop,Bm=AZ.doc.documentElement.scrollLeft||AZ.doc.body.scrollLeft;this._drag.x=Bl.clientX+Bm;this._drag.y=Bl.clientY+Bk;this._drag.id=Bl.identifier;!BD.length&&Aq.mousemove(BX).mouseup(C);BD.push({el:this,move_scope:E,start_scope:S,end_scope:b});g&&eve.on("raphael.drag.start."+this.id,g);R&&eve.on("raphael.drag.move."+this.id,R);d&&eve.on("raphael.drag.end."+this.id,d);eve("raphael.drag.start."+this.id,S||E||this,Bl.clientX+Bm,Bl.clientY+Bk,Bl)}this._drag={};BT.push({el:this,start:i});this.mousedown(i);return this};BG.onDragOver=function(E){E?eve.on("raphael.drag.over."+this.id,E):eve.unbind("raphael.drag.over."+this.id)};BG.undrag=function(){var E=BT.length;while(E--){if(BT[E].el==this){this.unmousedown(BT[E].start);BT.splice(E,1);eve.unbind("raphael.drag.*."+this.id)}}!BT.length&&Aq.unmousemove(BX).unmouseup(C)};A3.circle=function(E,b,S){var R=Aq._engine.circle(this,E||0,b||0,S||0);this.__set__&&this.__set__.push(R);return R};A3.rect=function(E,g,R,b,d){var S=Aq._engine.rect(this,E||0,g||0,R||0,b||0,d||0);this.__set__&&this.__set__.push(S);return S};A3.ellipse=function(E,d,b,S){var R=Aq._engine.ellipse(this,E||0,d||0,b||0,S||0);this.__set__&&this.__set__.push(R);return R};A3.path=function(E){E&&!Aq.is(E,AJ)&&!Aq.is(E[0],BC)&&(E+=Aw);var R=Aq._engine.path(Aq.format[Bf](Aq,arguments),this);this.__set__&&this.__set__.push(R);return R};A3.image=function(d,E,g,R,b){var S=Aq._engine.image(this,d||"about:blank",E||0,g||0,R||0,b||0);this.__set__&&this.__set__.push(S);return S};A3.text=function(E,b,S){var R=Aq._engine.text(this,E||0,b||0,Bg(S));this.__set__&&this.__set__.push(R);return R};A3.set=function(R){!Aq.is(R,"array")&&(R=Array.prototype.splice.call(arguments,0,arguments.length));var E=new AL(R);this.__set__&&this.__set__.push(E);return E};A3.setStart=function(E){this.__set__=E||this.set()};A3.setFinish=function(R){var E=this.__set__;delete this.__set__;return E};A3.setSize=function(R,E){return Aq._engine.setSize.call(this,R,E)};A3.setViewBox=function(E,d,R,b,S){return Aq._engine.setViewBox.call(this,E,d,R,b,S)};A3.top=A3.bottom=null;A3.raphael=Aq;var BR=function(S){var d=S.getBoundingClientRect(),Bl=S.ownerDocument,g=Bl.body,E=Bl.documentElement,b=E.clientTop||g.clientTop||0,i=E.clientLeft||g.clientLeft||0,Bk=d.top+(AZ.win.pageYOffset||E.scrollTop||g.scrollTop)-b,R=d.left+(AZ.win.pageXOffset||E.scrollLeft||g.scrollLeft)-i;return{y:Bk,x:R}};A3.getElementByPoint=function(R,Bk){var i=this,S=i.canvas,g=AZ.doc.elementFromPoint(R,Bk);if(AZ.win.opera&&g.tagName=="svg"){var d=BR(S),b=S.createSVGRect();b.x=R-d.x;b.y=Bk-d.y;b.width=b.height=1;var E=S.getIntersectionList(b,null);if(E.length){g=E[E.length-1]}}if(!g){return null}while(g.parentNode&&g!=S.parentNode&&!g.raphael){g=g.parentNode}g==i.canvas.parentNode&&(g=S);g=g&&g.raphael?i.getById(g.raphaelid):null;return g};A3.getById=function(R){var E=this.bottom;while(E){if(E.id==R){return E}E=E.next}return null};A3.forEach=function(S,E){var R=this.bottom;while(R){if(S.call(E,R)===false){return this}R=R.next}return this};A3.getElementsByPoint=function(E,S){var R=this.set();this.forEach(function(b){if(b.isPointInside(E,S)){R.push(b)}});return R};function X(){return this.x+Ap+this.y}function AS(){return this.x+Ap+this.y+Ap+this.width+" \xd7 "+this.height}BG.isPointInside=function(E,S){var R=this.realPath=this.realPath||p[this.type](this);return Aq.isPointInsidePath(R,E,S)};BG.getBBox=function(R){if(this.removed){return{}}var E=this._;if(R){if(E.dirty||!E.bboxwt){this.realPath=p[this.type](this);E.bboxwt=AM(this.realPath);E.bboxwt.toString=AS;E.dirty=0}return E.bboxwt}if(E.dirty||E.dirtyT||!E.bbox){if(E.dirty||!this.realPath){E.bboxwt=0;this.realPath=p[this.type](this)}E.bbox=AM(n(this.realPath,this.matrix));E.bbox.toString=AS;E.dirty=E.dirtyT=0}return E.bbox};BG.clone=function(){if(this.removed){return null}var E=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(E);return E};BG.glow=function(Bk){if(this.type=="text"){return null}Bk=Bk||{};var S={width:(Bk.width||10)+(+this.attr("stroke-width")||1),fill:Bk.fill||false,opacity:Bk.opacity||0.5,offsetx:Bk.offsetx||0,offsety:Bk.offsety||0,color:Bk.color||"#000"},g=S.width/2,b=this.paper,E=b.set(),d=this.realPath||p[this.type](this);d=this.matrix?n(d,this.matrix):d;for(var R=1;R<g+1;R++){E.push(b.path(d).attr({stroke:S.color,fill:S.fill?S.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(S.width/g*R).toFixed(3),opacity:+(S.opacity/g).toFixed(3)}))}return E.insertBefore(this).translate(S.offsetx,S.offsety)};var A6={},H=function(R,E,d,b,Bl,Bk,i,g,S){if(S==null){return N(R,E,d,b,Bl,Bk,i,g)}else{return Aq.findDotsAtSegment(R,E,d,b,Bl,Bk,i,g,c(R,E,d,b,Bl,Bk,i,g,S))}},A5=function(E,R){return function(Bs,d,g){Bs=w(Bs);var Bo,Bn,S,Bk,b="",Br={},Bp,Bm=0;for(var Bl=0,Bq=Bs.length;Bl<Bq;Bl++){S=Bs[Bl];if(S[0]=="M"){Bo=+S[1];Bn=+S[2]}else{Bk=H(Bo,Bn,S[1],S[2],S[3],S[4],S[5],S[6]);if(Bm+Bk>d){if(R&&!Br.start){Bp=H(Bo,Bn,S[1],S[2],S[3],S[4],S[5],S[6],d-Bm);b+=["C"+Bp.start.x,Bp.start.y,Bp.m.x,Bp.m.y,Bp.x,Bp.y];if(g){return b}Br.start=b;b=["M"+Bp.x,Bp.y+"C"+Bp.n.x,Bp.n.y,Bp.end.x,Bp.end.y,S[5],S[6]].join();Bm+=Bk;Bo=+S[5];Bn=+S[6];continue}if(!E&&!R){Bp=H(Bo,Bn,S[1],S[2],S[3],S[4],S[5],S[6],d-Bm);return{x:Bp.x,y:Bp.y,alpha:Bp.alpha}}}Bm+=Bk;Bo=+S[5];Bn=+S[6]}b+=S.shift()+S}Br.end=b;Bp=E?Bm:R?Br:Aq.findDotsAtSegment(Bo,Bn,S[0],S[1],S[2],S[3],S[4],S[5],1);Bp.alpha&&(Bp={x:Bp.x,y:Bp.y,alpha:Bp.alpha});return Bp}};var Ar=A5(1),l=A5(),AD=A5(0,1);Aq.getTotalLength=Ar;Aq.getPointAtLength=l;Aq.getSubpath=function(R,b,S){if(this.getTotalLength(R)-S<0.000001){return AD(R,b).end}var E=AD(R,S,1);return b?AD(E,b).end:E};BG.getTotalLength=function(){if(this.type!="path"){return }if(this.node.getTotalLength){return this.node.getTotalLength()}return Ar(this.attrs.path)};BG.getPointAtLength=function(E){if(this.type!="path"){return }return l(this.attrs.path,E)};BG.getSubpath=function(R,E){if(this.type!="path"){return }return Aq.getSubpath(this.attrs.path,R,E)};var L=Aq.easing_formulas={linear:function(E){return E},"<":function(E){return BO(E,1.7)},">":function(E){return BO(E,0.48)},"<>":function(Bk){var b=0.48-Bk/1.04,S=AT.sqrt(0.1734+b*b),E=S-b,i=BO(AV(E),1/3)*(E<0?-1:1),g=-S-b,d=BO(AV(g),1/3)*(g<0?-1:1),R=i+d+0.5;return(1-R)*3*R*R+R*R*R},backIn:function(R){var E=1.70158;return R*R*((E+1)*R-E)},backOut:function(R){R=R-1;var E=1.70158;return R*R*((E+1)*R+E)+1},elastic:function(E){if(E==!!E){return E}return BO(2,-10*E)*AT.sin((E-0.075)*(2*Au)/0.3)+1},bounce:function(b){var R=7.5625,S=2.75,E;if(b<(1/S)){E=R*b*b}else{if(b<(2/S)){b-=(1.5/S);E=R*b*b+0.75}else{if(b<(2.5/S)){b-=(2.25/S);E=R*b*b+0.9375}else{b-=(2.625/S);E=R*b*b+0.984375}}}return E}};L.easeIn=L["ease-in"]=L["<"];L.easeOut=L["ease-out"]=L[">"];L.easeInOut=L["ease-in-out"]=L["<>"];L["back-in"]=L.backIn;L["back-out"]=L.backOut;var AB=[],Am=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(E){setTimeout(E,16)},Bb=function(){var Bk=+new Date,Bs=0;for(;Bs<AB.length;Bs++){var By=AB[Bs];if(By.el.removed||By.paused){continue}var b=Bk-By.start,Bq=By.ms,Bp=By.easing,Bt=By.from,Bn=By.diff,R=By.to,Bm=By.t,g=By.el,Bo={},E,Bw={},B0;if(By.initstatus){b=(By.initstatus*By.anim.top-By.prev)/(By.percent-By.prev)*Bq;By.status=By.initstatus;delete By.initstatus;By.stop&&AB.splice(Bs--,1)}else{By.status=(By.prev+(By.percent-By.prev)*(b/Bq))/By.anim.top}if(b<0){continue}if(b<Bq){var S=Bp(b/Bq);for(var Br in Bt){if(Bt[AK](Br)){switch(AR[Br]){case Ak:E=+Bt[Br]+S*Bq*Bn[Br];break;case"colour":E="rgb("+[j(AH(Bt[Br].r+S*Bq*Bn[Br].r)),j(AH(Bt[Br].g+S*Bq*Bn[Br].g)),j(AH(Bt[Br].b+S*Bq*Bn[Br].b))].join(",")+")";break;case"path":E=[];for(var Bv=0,Bl=Bt[Br].length;Bv<Bl;Bv++){E[Bv]=[Bt[Br][Bv][0]];for(var Bu=1,Bx=Bt[Br][Bv].length;Bu<Bx;Bu++){E[Bv][Bu]=+Bt[Br][Bv][Bu]+S*Bq*Bn[Br][Bv][Bu]}E[Bv]=E[Bv].join(Ap)}E=E.join(Ap);break;case"transform":if(Bn[Br].real){E=[];for(Bv=0,Bl=Bt[Br].length;Bv<Bl;Bv++){E[Bv]=[Bt[Br][Bv][0]];for(Bu=1,Bx=Bt[Br][Bv].length;Bu<Bx;Bu++){E[Bv][Bu]=Bt[Br][Bv][Bu]+S*Bq*Bn[Br][Bv][Bu]}}}else{var Bz=function(B1){return +Bt[Br][B1]+S*Bq*Bn[Br][B1]};E=[["m",Bz(0),Bz(1),Bz(2),Bz(3),Bz(4),Bz(5)]]}break;case"csv":if(Br=="clip-rect"){E=[];Bv=4;while(Bv--){E[Bv]=+Bt[Br][Bv]+S*Bq*Bn[Br][Bv]}}break;default:var d=[][Bd](Bt[Br]);E=[];Bv=g.paper.customAttributes[Br].length;while(Bv--){E[Bv]=+d[Bv]+S*Bq*Bn[Br][Bv]}break}Bo[Br]=E}}g.attr(Bo);(function(B2,i,B1){setTimeout(function(){eve("raphael.anim.frame."+B2,i,B1)})})(g.id,g,By.anim)}else{(function(B2,B1,i){setTimeout(function(){eve("raphael.anim.frame."+B1.id,B1,i);eve("raphael.anim.finish."+B1.id,B1,i);Aq.is(B2,"function")&&B2.call(B1)})})(By.callback,g,By.anim);g.attr(R);AB.splice(Bs--,1);if(By.repeat>1&&!By.next){for(B0 in R){if(R[AK](B0)){Bw[B0]=By.totalOrigin[B0]}}By.el.attr(Bw);Al(By.anim,By.el,By.anim.percents[0],null,By.totalOrigin,By.repeat-1)}if(By.next&&!By.stop){Al(By.anim,By.el,By.next,null,By.totalOrigin,By.repeat)}}}Aq.svg&&g&&g.paper&&g.paper.safari();AB.length&&Am(Bb)},j=function(E){return E>255?255:E<0?0:E};BG.animateWith=function(R,b,S,E,Bk,Bp){var g=this;if(g.removed){Bp&&Bp.call(g);return g}var Bn=S instanceof BZ?S:Aq.animation(S,E,Bk,Bp),Bm,Bl;Al(Bn,g,Bn.percents[0],null,g.attr());for(var d=0,Bo=AB.length;d<Bo;d++){if(AB[d].anim==b&&AB[d].el==R){AB[Bo-1].start=AB[d].start;break}}return g};function A2(Bq,b,R,Bp,Bo,Bk){var Bl=3*b,Bn=3*(Bp-b)-Bl,E=1-Bl-Bn,i=3*R,Bm=3*(Bo-R)-i,Br=1-i-Bm;function g(Bs){return((E*Bs+Bn)*Bs+Bl)*Bs}function S(Bs,Bu){var Bt=d(Bs,Bu);return((Br*Bt+Bm)*Bt+i)*Bt}function d(Bs,Bz){var By,Bx,Bv,Bt,Bw,Bu;for(Bv=Bs,Bu=0;Bu<8;Bu++){Bt=g(Bv)-Bs;if(AV(Bt)<Bz){return Bv}Bw=(3*E*Bv+2*Bn)*Bv+Bl;if(AV(Bw)<0.000001){break}Bv=Bv-Bt/Bw}By=0;Bx=1;Bv=Bs;if(Bv<By){return By}if(Bv>Bx){return Bx}while(By<Bx){Bt=g(Bv);if(AV(Bt-Bs)<Bz){return Bv}if(Bs>Bt){By=Bv}else{Bx=Bv}Bv=(Bx-By)/2+By}return Bv}return S(Bq,1/(200*Bk))}BG.onAnimation=function(E){E?eve.on("raphael.anim.frame."+this.id,E):eve.unbind("raphael.anim.frame."+this.id);return this};function BZ(d,S){var R=[],b={};this.ms=S;this.times=1;if(d){for(var E in d){if(d[AK](E)){b[AN(E)]=d[E];R.push(AN(E))}}R.sort(T)}this.anim=b;this.top=R[R.length-1];this.percents=R}BZ.prototype.delay=function(R){var E=new BZ(this.anim,this.ms);E.times=this.times;E.del=+R||0;return E};BZ.prototype.repeat=function(R){var E=new BZ(this.anim,this.ms);E.del=this.del;E.times=AT.floor(J(R,0))||1;return E};function Al(B2,S,E,B0,Bk,Bo){E=AN(E);var B9,g,Bn,CA=[],Bu,Bt,d,Bw=B2.ms,B1={},b={},Bq={};if(B0){for(B5=0,Bp=AB.length;B5<Bp;B5++){var B7=AB[B5];if(B7.el.id==S.id&&B7.anim==B2){if(B7.percent!=E){AB.splice(B5,1);Bn=1}else{g=B7}S.attr(B7.totalOrigin);break}}}else{B0=+b}for(var B5=0,Bp=B2.percents.length;B5<Bp;B5++){if(B2.percents[B5]==E||B2.percents[B5]>B0*B2.top){E=B2.percents[B5];Bt=B2.percents[B5-1]||0;Bw=Bw/B2.top*(E-Bt);Bu=B2.percents[B5+1];B9=B2.anim[E];break}else{if(B0){S.attr(B2.anim[B2.percents[B5]])}}}if(!B9){return }if(!g){for(var By in B9){if(B9[AK](By)){if(AR[AK](By)||S.paper.customAttributes[AK](By)){B1[By]=S.attr(By);(B1[By]==null)&&(B1[By]=O[By]);b[By]=B9[By];switch(AR[By]){case Ak:Bq[By]=(b[By]-B1[By])/Bw;break;case"colour":B1[By]=Aq.getRGB(B1[By]);var Bz=Aq.getRGB(b[By]);Bq[By]={r:(Bz.r-B1[By].r)/Bw,g:(Bz.g-B1[By].g)/Bw,b:(Bz.b-B1[By].b)/Bw};break;case"path":var Bl=w(B1[By],b[By]),Bs=Bl[1];B1[By]=Bl[0];Bq[By]=[];for(B5=0,Bp=B1[By].length;B5<Bp;B5++){Bq[By][B5]=[0];for(var B4=1,B6=B1[By][B5].length;B4<B6;B4++){Bq[By][B5][B4]=(Bs[B5][B4]-B1[By][B5][B4])/Bw}}break;case"transform":var CC=S._,CB=Aa(CC[By],b[By]);if(CB){B1[By]=CB.from;b[By]=CB.to;Bq[By]=[];Bq[By].real=true;for(B5=0,Bp=B1[By].length;B5<Bp;B5++){Bq[By][B5]=[B1[By][B5][0]];for(B4=1,B6=B1[By][B5].length;B4<B6;B4++){Bq[By][B5][B4]=(b[By][B5][B4]-B1[By][B5][B4])/Bw}}}else{var Bx=(S.matrix||new Ae),B8={_:{transform:CC.transform},getBBox:function(){return S.getBBox(1)}};B1[By]=[Bx.a,Bx.b,Bx.c,Bx.d,Bx.e,Bx.f];An(B8,b[By]);b[By]=B8._.transform;Bq[By]=[(B8.matrix.a-Bx.a)/Bw,(B8.matrix.b-Bx.b)/Bw,(B8.matrix.c-Bx.c)/Bw,(B8.matrix.d-Bx.d)/Bw,(B8.matrix.e-Bx.e)/Bw,(B8.matrix.f-Bx.f)/Bw]}break;case"csv":var R=Bg(B9[By])[f](A),Bm=Bg(B1[By])[f](A);if(By=="clip-rect"){B1[By]=Bm;Bq[By]=[];B5=Bm.length;while(B5--){Bq[By][B5]=(R[B5]-B1[By][B5])/Bw}}b[By]=R;break;default:R=[][Bd](B9[By]);Bm=[][Bd](B1[By]);Bq[By]=[];B5=S.paper.customAttributes[By].length;while(B5--){Bq[By][B5]=((R[B5]||0)-(Bm[B5]||0))/Bw}break}}}}var Bv=B9.easing,B3=Aq.easing_formulas[Bv];if(!B3){B3=Bg(Bv).match(B);if(B3&&B3.length==5){var Br=B3;B3=function(i){return A2(i,+Br[1],+Br[2],+Br[3],+Br[4],Bw)}}else{B3=Ba}}d=B9.start||B2.start||+new Date;B7={anim:B2,percent:E,timestamp:d,start:d+(B2.del||0),status:0,initstatus:B0||0,stop:false,ms:Bw,easing:B3,from:B1,diff:Bq,to:b,el:S,callback:B9.callback,prev:Bt,next:Bu,repeat:Bo||B2.times,origin:S.attr(),totalOrigin:Bk};AB.push(B7);if(B0&&!g&&!Bn){B7.stop=true;B7.start=new Date-Bw*B0;if(AB.length==1){return Bb()}}if(Bn){B7.start=new Date-B7.ms*B0}AB.length==1&&Am(Bb)}else{g.initstatus=B0;g.start=new Date-g.ms*B0}eve("raphael.anim.start."+S.id,S,B2)}Aq.animation=function(d,R,i,g){if(d instanceof BZ){return d}if(Aq.is(i,"function")||!i){g=g||i||null;i=null}d=Object(d);R=+R||0;var b={},S,E;for(E in d){if(d[AK](E)&&AN(E)!=E&&AN(E)+"%"!=E){S=true;b[E]=d[E]}}if(!S){return new BZ(d,R)}else{i&&(b.easing=i);g&&(b.callback=g);return new BZ({100:b},R)}};BG.animate=function(b,E,g,d){var R=this;if(R.removed){d&&d.call(R);return R}var S=b instanceof BZ?b:Aq.animation(b,E,g,d);Al(S,R,S.percents[0],null,R.attr());return R};BG.setTime=function(R,E){if(R&&E!=null){this.status(R,BL(E,R.ms)/R.ms)}return this};BG.status=function(d,b){var R=[],S=0,E,g;if(b!=null){Al(d,this,-1,BL(b,1));return this}else{E=AB.length;for(;S<E;S++){g=AB[S];if(g.el.id==this.id&&(!d||g.anim==d)){if(d){return g.status}R.push({anim:g.anim,status:g.status})}}if(d){return 0}return R}};BG.pause=function(R){for(var E=0;E<AB.length;E++){if(AB[E].el.id==this.id&&(!R||AB[E].anim==R)){if(eve("raphael.anim.pause."+this.id,this,AB[E].anim)!==false){AB[E].paused=true}}}return this};BG.resume=function(R){for(var E=0;E<AB.length;E++){if(AB[E].el.id==this.id&&(!R||AB[E].anim==R)){var S=AB[E];if(eve("raphael.anim.resume."+this.id,this,S.anim)!==false){delete S.paused;this.status(S.anim,S.status)}}}return this};BG.stop=function(R){for(var E=0;E<AB.length;E++){if(AB[E].el.id==this.id&&(!R||AB[E].anim==R)){if(eve("raphael.anim.stop."+this.id,this,AB[E].anim)!==false){AB.splice(E--,1)}}}return this};function AA(R){for(var E=0;E<AB.length;E++){if(AB[E].el.paper==R){AB.splice(E--,1)}}}eve.on("raphael.remove",AA);eve.on("raphael.clear",AA);BG.toString=function(){return"Rapha\xebl\u2019s object"};var AL=function(E){this.items=[];this.length=0;this.type="set";if(E){for(var R=0,S=E.length;R<S;R++){if(E[R]&&(E[R].constructor==BG.constructor||E[R].constructor==AL)){this[this.items.length]=this.items[this.items.length]=E[R];this.length++}}}},BB=AL.prototype;BB.push=function(){var b,E;for(var R=0,S=arguments.length;R<S;R++){b=arguments[R];if(b&&(b.constructor==BG.constructor||b.constructor==AL)){E=this.items.length;this[E]=this.items[E]=b;this.length++}}return this};BB.pop=function(){this.length&&delete this[this.length--];return this.items.pop()};BB.forEach=function(b,E){for(var R=0,S=this.items.length;R<S;R++){if(b.call(E,this.items[R],R)===false){return this}}return this};for(var a in BG){if(BG[AK](a)){BB[a]=(function(E){return function(){var R=arguments;return this.forEach(function(S){S[E][Bf](S,R)})}})(a)}}BB.attr=function(R,g){if(R&&Aq.is(R,BC)&&Aq.is(R[0],"object")){for(var E=0,d=R.length;E<d;E++){this.items[E].attr(R[E])}}else{for(var S=0,b=this.items.length;S<b;S++){this.items[S].attr(R,g)}}return this};BB.clear=function(){while(this.length){this.pop()}};BB.splice=function(b,Bk,Bl){b=b<0?J(this.length+b,0):b;Bk=J(0,BL(this.length-b,Bk));var S=[],E=[],R=[],d;for(d=2;d<arguments.length;d++){R.push(arguments[d])}for(d=0;d<Bk;d++){E.push(this[b+d])}for(;d<this.length-b;d++){S.push(this[b+d])}var g=R.length;for(d=0;d<g+S.length;d++){this.items[b+d]=this[b+d]=d<g?R[d]:S[d-g]}d=this.items.length=this.length-=Bk-g;while(this[d]){delete this[d++]}return new AL(E)};BB.exclude=function(S){for(var E=0,R=this.length;E<R;E++){if(this[E]==S){this.splice(E,1);return true}}};BB.animate=function(S,E,Bk,Bm){(Aq.is(Bk,"function")||!Bk)&&(Bm=Bk||null);var g=this.items.length,b=g,Bn,Bl=this,d;if(!g){return this}Bm&&(d=function(){!--g&&Bm.call(Bl)});Bk=Aq.is(Bk,AJ)?Bk:d;var R=Aq.animation(S,E,Bk,d);Bn=this.items[--b].animate(R);while(b--){this.items[b]&&!this.items[b].removed&&this.items[b].animateWith(Bn,R,R)}return this};BB.insertAfter=function(R){var E=this.items.length;while(E--){this.items[E].insertAfter(R)}return this};BB.getBBox=function(){var E=[],g=[],R=[],b=[];for(var S=this.items.length;S--;){if(!this.items[S].removed){var d=this.items[S].getBBox();E.push(d.x);g.push(d.y);R.push(d.x+d.width);b.push(d.y+d.height)}}E=BL[Bf](0,E);g=BL[Bf](0,g);R=J[Bf](0,R);b=J[Bf](0,b);return{x:E,y:g,x2:R,y2:b,width:R-E,height:b-g}};BB.clone=function(S){S=new AL;for(var E=0,R=this.items.length;E<R;E++){S.push(this.items[E].clone())}return S};BB.toString=function(){return"Rapha\xebl\u2018s set"};Aq.registerFont=function(R){if(!R.face){return R}this.fonts=this.fonts||{};var b={w:R.w,face:{},glyphs:{}},S=R.face["font-family"];for(var i in R.face){if(R.face[AK](i)){b.face[i]=R.face[i]}}if(this.fonts[S]){this.fonts[S].push(b)}else{this.fonts[S]=[b]}if(!R.svg){b.face["units-per-em"]=u(R.face["units-per-em"],10);for(var d in R.glyphs){if(R.glyphs[AK](d)){var g=R.glyphs[d];b.glyphs[d]={w:g.w,k:{},d:g.d&&"M"+g.d.replace(/[mlcxtrv]/g,function(Bk){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[Bk]||"M"})+"z"};if(g.k){for(var E in g.k){if(g[AK](E)){b.glyphs[d].k[E]=g.k[E]}}}}}}return R};A3.getFont=function(Bl,Bm,R,b){b=b||"normal";R=R||"normal";Bm=+Bm||{normal:400,bold:700,lighter:300,bolder:800}[Bm]||400;if(!Aq.fonts){return }var d=Aq.fonts[Bl];if(!d){var S=new RegExp("(^|\\s)"+Bl.replace(/[^\w\d\s+!~.:_-]/g,Aw)+"(\\s|$)","i");for(var E in Aq.fonts){if(Aq.fonts[AK](E)){if(S.test(E)){d=Aq.fonts[E];break}}}}var g;if(d){for(var Bk=0,Bn=d.length;Bk<Bn;Bk++){g=d[Bk];if(g.face["font-weight"]==Bm&&(g.face["font-style"]==R||!g.face["font-style"])&&g.face["font-stretch"]==b){break}}}return g};A3.print=function(Bk,g,E,Bn,Bo,Bx,R){Bx=Bx||"middle";R=J(BL(R||0,1),-1);var Bw=Bg(E)[f](Aw),Bt=0,Bv=0,Br=Aw,By;Aq.is(Bn,E)&&(Bn=this.getFont(Bn));if(Bn){By=(Bo||16)/Bn.face["units-per-em"];var b=Bn.face.bbox[f](A),Bm=+b[0],S=b[3]-b[1],d=0,Bp=+b[1]+(Bx=="baseline"?S+(+Bn.face.descent):S/2);for(var Bs=0,Bl=Bw.length;Bs<Bl;Bs++){if(Bw[Bs]=="\n"){Bt=0;Bu=0;Bv=0;d+=S}else{var Bq=Bv&&Bn.glyphs[Bw[Bs-1]]||{},Bu=Bn.glyphs[Bw[Bs]];Bt+=Bv?(Bq.w||Bn.w)+(Bq.k&&Bq.k[Bw[Bs]]||0)+(Bn.w*R):0;Bv=1}if(Bu&&Bu.d){Br+=Aq.transformPath(Bu.d,["t",Bt*By,d*By,"s",By,By,Bm,Bp,"t",(Bk-Bm)/By,(g-Bp)/By])}}}return this.path(Br).attr({fill:"#000",stroke:"none"})};A3.add=function(b){if(Aq.is(b,"array")){var S=this.set(),R=0,d=b.length,E;for(;R<d;R++){E=b[R]||{};BV[AK](E.type)&&S.push(this[E.type]().attr(E))}}return S};Aq.format=function(R,S){var E=Aq.is(S,BC)?[0][Bd](S):arguments;R&&Aq.is(R,AJ)&&E.length-1&&(R=R.replace(BQ,function(d,b){return E[++b]==null?Aw:E[b]}));return R||Aw};Aq.fullfill=(function(){var S=/\{([^\}]+)\}/g,E=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,R=function(g,d,i){var b=i;d.replace(E,function(Bm,Bl,Bk,Bo,Bn){Bl=Bl||Bo;if(b){if(Bl in b){b=b[Bl]}typeof b=="function"&&Bn&&(b=b())}});b=(b==null||b==i?g:b)+"";return b};return function(d,b){return String(d).replace(S,function(i,g){return R(i,g,b)})}})();Aq.ninja=function(){P.was?(AZ.win.Raphael=P.is):delete Raphael;return Aq};Aq.st=BB;(function(b,R,S){if(b.readyState==null&&b.addEventListener){b.addEventListener(R,S=function(){b.removeEventListener(R,S,false);b.readyState="complete"},false);b.readyState="loading"}function E(){(/in/).test(b.readyState)?setTimeout(E,9):Aq.eve("raphael.DOMload")}E()})(document,"DOMContentLoaded");P.was?(AZ.win.Raphael=Aq):(Raphael=Aq);eve.on("raphael.DOMload",function(){AO=true})})();window.Raphael&&window.Raphael.svg&&function(M){var D="hasOwnProperty",e=String,O=parseFloat,T=parseInt,G=Math,f=G.max,V=G.abs,I=G.pow,H=/[, ]+/,c=M.eve,U="",K=" ";var P="http://www.w3.org/1999/xlink",b={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},X={};M.toString=function(){return"Your browser supports SVG.\nYou are running Rapha\xebl "+this.version};var J=function(S,E){if(E){if(typeof S=="string"){S=J(S)}for(var R in E){if(E[D](R)){if(R.substring(0,6)=="xlink:"){S.setAttributeNS(P,R.substring(6),e(E[R]))}else{S.setAttribute(R,e(E[R]))}}}}else{S=M._g.doc.createElementNS("http://www.w3.org/2000/svg",S);S.style&&(S.style.webkitTapHighlightColor="rgba(0,0,0,0)")}return S},A=function(n,t){var q="linear",R=n.id+t,l=0.5,j=0.5,g=n.node,E=n.paper,v=g.style,S=M._g.doc.getElementById(R);if(!S){t=e(t).replace(M._radial_gradient,function(s,i,w){q="radial";if(i&&w){l=O(i);j=O(w);var o=((j>0.5)*2-1);I(l-0.5,2)+I(j-0.5,2)>0.25&&(j=G.sqrt(0.25-I(l-0.5,2))*o+0.5)&&j!=0.5&&(j=j.toFixed(5)-0.00001*o)}return U});t=t.split(/\s*\-\s*/);if(q=="linear"){var k=t.shift();k=-O(k);if(isNaN(k)){return null}var h=[0,0,G.cos(M.rad(k)),G.sin(M.rad(k))],r=1/(f(V(h[2]),V(h[3]))||1);h[2]*=r;h[3]*=r;if(h[2]<0){h[0]=-h[2];h[2]=0}if(h[3]<0){h[1]=-h[3];h[3]=0}}var p=M._parseDots(t);if(!p){return null}R=R.replace(/[\(\)\s,\xb0#]/g,"_");if(n.gradient&&R!=n.gradient.id){E.defs.removeChild(n.gradient);delete n.gradient}if(!n.gradient){S=J(q+"Gradient",{id:R});n.gradient=S;J(S,q=="radial"?{fx:l,fy:j}:{x1:h[0],y1:h[1],x2:h[2],y2:h[3],gradientTransform:n.matrix.invert()});E.defs.appendChild(S);for(var m=0,u=p.length;m<u;m++){S.appendChild(J("stop",{offset:p[m].offset?p[m].offset:m?"100%":"0%","stop-color":p[m].color||"#fff"}))}}}J(g,{fill:"url(#"+R+")",opacity:1,"fill-opacity":1});v.fill=U;v.opacity=1;v.fillOpacity=1;return 1},B=function(R){var E=R.getBBox(1);J(R.pattern,{patternTransform:R.matrix.invert()+" translate("+E.x+","+E.y+")"})},C=function(s,v,l){if(s.type=="path"){var E=e(v).toLowerCase().split("-"),r=s.paper,AH=l?"end":"start",y=s.node,u=s.attrs,k=u["stroke-width"],AC=E.length,g="classic",AB,S,n,z,x,m=3,AD=3,q=5;while(AC--){switch(E[AC]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":g=E[AC];break;case"wide":AD=5;break;case"narrow":AD=2;break;case"long":m=5;break;case"short":m=2;break}}if(g=="open"){m+=2;AD+=2;q+=2;n=1;z=l?4:1;x={fill:"none",stroke:u.stroke}}else{z=n=m/2;x={fill:u.stroke,stroke:"none"}}if(s._.arrows){if(l){s._.arrows.endPath&&X[s._.arrows.endPath]--;s._.arrows.endMarker&&X[s._.arrows.endMarker]--}else{s._.arrows.startPath&&X[s._.arrows.startPath]--;s._.arrows.startMarker&&X[s._.arrows.startMarker]--}}else{s._.arrows={}}if(g!="none"){var R="raphael-marker-"+g,AG="raphael-marker-"+AH+g+m+AD;if(!M._g.doc.getElementById(R)){r.defs.appendChild(J(J("path"),{"stroke-linecap":"round",d:b[g],id:R}));X[R]=1}else{X[R]++}var j=M._g.doc.getElementById(AG),AA;if(!j){j=J(J("marker"),{id:AG,markerHeight:AD,markerWidth:m,orient:"auto",refX:z,refY:AD/2});AA=J(J("use"),{"xlink:href":"#"+R,transform:(l?"rotate(180 "+m/2+" "+AD/2+") ":U)+"scale("+m/q+","+AD/q+")","stroke-width":(1/((m/q+AD/q)/2)).toFixed(4)});j.appendChild(AA);r.defs.appendChild(j);X[AG]=1}else{X[AG]++;AA=j.getElementsByTagName("use")[0]}J(AA,x);var AF=n*(g!="diamond"&&g!="oval");if(l){AB=s._.arrows.startdx*k||0;S=M.getTotalLength(u.path)-AF*k}else{AB=AF*k;S=M.getTotalLength(u.path)-(s._.arrows.enddx*k||0)}x={};x["marker-"+AH]="url(#"+AG+")";if(S||AB){x.d=Raphael.getSubpath(u.path,AB,S)}J(y,x);s._.arrows[AH+"Path"]=R;s._.arrows[AH+"Marker"]=AG;s._.arrows[AH+"dx"]=AF;s._.arrows[AH+"Type"]=g;s._.arrows[AH+"String"]=v}else{if(l){AB=s._.arrows.startdx*k||0;S=M.getTotalLength(u.path)-AB}else{AB=0;S=M.getTotalLength(u.path)-(s._.arrows.enddx*k||0)}s._.arrows[AH+"Path"]&&J(y,{d:Raphael.getSubpath(u.path,AB,S)});delete s._.arrows[AH+"Path"];delete s._.arrows[AH+"Marker"];delete s._.arrows[AH+"dx"];delete s._.arrows[AH+"Type"];delete s._.arrows[AH+"String"]}for(x in X){if(X[D](x)&&!X[x]){var AE=M._g.doc.getElementById(x);AE&&AE.parentNode.removeChild(AE)}}}},Y={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},L=function(k,h,j){h=Y[e(h).toLowerCase()];if(h){var S=k.attrs["stroke-width"]||"1",E={round:S,square:S,butt:0}[k.attrs["stroke-linecap"]||j["stroke-linecap"]]||0,g=[],R=h.length;while(R--){g[R]=h[R]*S+((R%2)?1:-1)*E}J(k.node,{"stroke-dasharray":g.join(",")})}},Z=function(p,x){var t=p.node,q=p.attrs,m=t.style.visibility;t.style.visibility="hidden";for(var s in x){if(x[D](s)){if(!M._availableAttrs[D](s)){continue}var r=x[s];q[s]=r;switch(s){case"blur":p.blur(r);break;case"href":case"title":case"target":var v=t.parentNode;if(v.tagName.toLowerCase()!="a"){var h=J("a");v.insertBefore(h,t);h.appendChild(t);v=h}if(s=="target"){v.setAttributeNS(P,"show",r=="blank"?"new":r)}else{v.setAttributeNS(P,s,r)}break;case"cursor":t.style.cursor=r;break;case"transform":p.transform(r);break;case"arrow-start":C(p,r);break;case"arrow-end":C(p,r,1);break;case"clip-rect":var R=e(r).split(H);if(R.length==4){p.clip&&p.clip.parentNode.parentNode.removeChild(p.clip.parentNode);var S=J("clipPath"),u=J("rect");S.id=M.createUUID();J(u,{x:R[0],y:R[1],width:R[2],height:R[3]});S.appendChild(u);p.paper.defs.appendChild(S);J(t,{"clip-path":"url(#"+S.id+")"});p.clip=u}if(!r){var n=t.getAttribute("clip-path");if(n){var w=M._g.doc.getElementById(n.replace(/(^url\(#|\)$)/g,U));w&&w.parentNode.removeChild(w);J(t,{"clip-path":U});delete p.clip}}break;case"path":if(p.type=="path"){J(t,{d:r?q.path=M._pathToAbsolute(r):"M0,0"});p._.dirty=1;if(p._.arrows){"startString" in p._.arrows&&C(p,p._.arrows.startString);"endString" in p._.arrows&&C(p,p._.arrows.endString,1)}}break;case"width":t.setAttribute(s,r);p._.dirty=1;if(q.fx){s="x";r=q.x}else{break}case"x":if(q.fx){r=-q.x-(q.width||0)}case"rx":if(s=="rx"&&p.type=="rect"){break}case"cx":t.setAttribute(s,r);p.pattern&&B(p);p._.dirty=1;break;case"height":t.setAttribute(s,r);p._.dirty=1;if(q.fy){s="y";r=q.y}else{break}case"y":if(q.fy){r=-q.y-(q.height||0)}case"ry":if(s=="ry"&&p.type=="rect"){break}case"cy":t.setAttribute(s,r);p.pattern&&B(p);p._.dirty=1;break;case"r":if(p.type=="rect"){J(t,{rx:r,ry:r})}else{t.setAttribute(s,r)}p._.dirty=1;break;case"src":if(p.type=="image"){t.setAttributeNS(P,"href",r)}break;case"stroke-width":if(p._.sx!=1||p._.sy!=1){r/=f(V(p._.sx),V(p._.sy))||1}if(p.paper._vbSize){r*=p.paper._vbSize}t.setAttribute(s,r);if(q["stroke-dasharray"]){L(p,q["stroke-dasharray"],x)}if(p._.arrows){"startString" in p._.arrows&&C(p,p._.arrows.startString);"endString" in p._.arrows&&C(p,p._.arrows.endString,1)}break;case"stroke-dasharray":L(p,r,x);break;case"fill":var i=e(r).match(M._ISURL);if(i){S=J("pattern");var l=J("image");S.id=M.createUUID();J(S,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});J(l,{x:0,y:0,"xlink:href":i[1]});S.appendChild(l);(function(o){M._preload(i[1],function(){var y=this.offsetWidth,z=this.offsetHeight;J(o,{width:y,height:z});J(l,{width:y,height:z});p.paper.safari()})})(S);p.paper.defs.appendChild(S);J(t,{fill:"url(#"+S.id+")"});p.pattern=S;p.pattern&&B(p);break}var g=M.getRGB(r);if(!g.error){delete x.gradient;delete q.gradient;!M.is(q.opacity,"undefined")&&M.is(x.opacity,"undefined")&&J(t,{opacity:q.opacity});!M.is(q["fill-opacity"],"undefined")&&M.is(x["fill-opacity"],"undefined")&&J(t,{"fill-opacity":q["fill-opacity"]})}else{if((p.type=="circle"||p.type=="ellipse"||e(r).charAt()!="r")&&A(p,r)){if("opacity" in q||"fill-opacity" in q){var E=M._g.doc.getElementById(t.getAttribute("fill").replace(/^url\(#|\)$/g,U));if(E){var j=E.getElementsByTagName("stop");J(j[j.length-1],{"stop-opacity":("opacity" in q?q.opacity:1)*("fill-opacity" in q?q["fill-opacity"]:1)})}}q.gradient=r;q.fill="none";break}}g[D]("opacity")&&J(t,{"fill-opacity":g.opacity>1?g.opacity/100:g.opacity});case"stroke":g=M.getRGB(r);t.setAttribute(s,g.hex);s=="stroke"&&g[D]("opacity")&&J(t,{"stroke-opacity":g.opacity>1?g.opacity/100:g.opacity});if(s=="stroke"&&p._.arrows){"startString" in p._.arrows&&C(p,p._.arrows.startString);"endString" in p._.arrows&&C(p,p._.arrows.endString,1)}break;case"gradient":(p.type=="circle"||p.type=="ellipse"||e(r).charAt()!="r")&&A(p,r);break;case"opacity":if(q.gradient&&!q[D]("stroke-opacity")){J(t,{"stroke-opacity":r>1?r/100:r})}case"fill-opacity":if(q.gradient){E=M._g.doc.getElementById(t.getAttribute("fill").replace(/^url\(#|\)$/g,U));if(E){j=E.getElementsByTagName("stop");J(j[j.length-1],{"stop-opacity":r})}break}default:s=="font-size"&&(r=T(r,10)+"px");var k=s.replace(/(\-.)/g,function(o){return o.substring(1).toUpperCase()});t.style[k]=r;p._.dirty=1;t.setAttribute(s,r);break}}}Q(p,x);t.style.visibility=m},d=1.2,Q=function(E,h){if(E.type!="text"||!(h[D]("text")||h[D]("font")||h[D]("font-size")||h[D]("x")||h[D]("y"))){return }var n=E.attrs,S=E.node,p=S.firstChild?T(M._g.doc.defaultView.getComputedStyle(S.firstChild,U).getPropertyValue("font-size"),10):10;if(h[D]("text")){n.text=h.text;while(S.firstChild){S.removeChild(S.firstChild)}var g=e(h.text).split("\n"),R=[],l;for(var j=0,o=g.length;j<o;j++){l=J("tspan");j&&J(l,{dy:p*d,x:n.x});l.appendChild(M._g.doc.createTextNode(g[j]));S.appendChild(l);R[j]=l}}else{R=S.getElementsByTagName("tspan");for(j=0,o=R.length;j<o;j++){if(j){J(R[j],{dy:p*d,x:n.x})}else{J(R[0],{dy:0})}}}J(S,{x:n.x,y:n.y});E._.dirty=1;var k=E._getBBox(),m=n.y-(k.y+k.height/2);m&&M.is(m,"finite")&&J(R[0],{dy:m})},W=function(R,E){var g=0,S=0;this[0]=this.node=R;R.raphael=true;this.id=M._oid++;R.raphaelid=this.id;this.matrix=M.matrix();this.realPath=null;this.paper=E;this.attrs=this.attrs||{};this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1};!E.bottom&&(E.bottom=this);this.prev=E.top;E.top&&(E.top.next=this);E.top=this;this.next=null},N=M.el;W.prototype=N;N.constructor=W;M._engine.path=function(E,g){var R=J("path");g.canvas&&g.canvas.appendChild(R);var S=new W(R,g);S.type="path";Z(S,{fill:"none",stroke:"#000",path:E});return S};N.rotate=function(R,E,g){if(this.removed){return this}R=e(R).split(H);if(R.length-1){E=O(R[1]);g=O(R[2])}R=O(R[0]);(g==null)&&(E=g);if(E==null||g==null){var S=this.getBBox(1);E=S.x+S.width/2;g=S.y+S.height/2}this.transform(this._.transform.concat([["r",R,E,g]]));return this};N.scale=function(h,S,E,g){if(this.removed){return this}h=e(h).split(H);if(h.length-1){S=O(h[1]);E=O(h[2]);g=O(h[3])}h=O(h[0]);(S==null)&&(S=h);(g==null)&&(E=g);if(E==null||g==null){var R=this.getBBox(1)}E=E==null?R.x+R.width/2:E;g=g==null?R.y+R.height/2:g;this.transform(this._.transform.concat([["s",h,S,E,g]]));return this};N.translate=function(R,E){if(this.removed){return this}R=e(R).split(H);if(R.length-1){E=O(R[1])}R=O(R[0])||0;E=+E||0;this.transform(this._.transform.concat([["t",R,E]]));return this};N.transform=function(R){var S=this._;if(R==null){return S.transform}M._extractTransform(this,R);this.clip&&J(this.clip,{transform:this.matrix.invert()});this.pattern&&B(this);this.node&&J(this.node,{transform:this.matrix});if(S.sx!=1||S.sy!=1){var E=this.attrs[D]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":E})}return this};N.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this};N.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this};N.remove=function(){if(this.removed||!this.node.parentNode){return }var R=this.paper;R.__set__&&R.__set__.exclude(this);c.unbind("raphael.*.*."+this.id);if(this.gradient){R.defs.removeChild(this.gradient)}M._tear(this,R);if(this.node.parentNode.tagName.toLowerCase()=="a"){this.node.parentNode.parentNode.removeChild(this.node.parentNode)}else{this.node.parentNode.removeChild(this.node)}for(var E in this){this[E]=typeof this[E]=="function"?M._removedFactory(E):null}this.removed=true};N._getBBox=function(){if(this.node.style.display=="none"){this.show();var E=true}var S={};try{S=this.node.getBBox()}catch(R){}finally{S=S||{}}E&&this.hide();return S};N.attr=function(E,n){if(this.removed){return this}if(E==null){var k={};for(var m in this.attrs){if(this.attrs[D](m)){k[m]=this.attrs[m]}}k.gradient&&k.fill=="none"&&(k.fill=k.gradient)&&delete k.gradient;k.transform=this._.transform;return k}if(n==null&&M.is(E,"string")){if(E=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient}if(E=="transform"){return this._.transform}var l=E.split(H),g={};for(var h=0,p=l.length;h<p;h++){E=l[h];if(E in this.attrs){g[E]=this.attrs[E]}else{if(M.is(this.paper.customAttributes[E],"function")){g[E]=this.paper.customAttributes[E].def}else{g[E]=M._availableAttrs[E]}}}return p-1?g:g[l[0]]}if(n==null&&M.is(E,"array")){g={};for(h=0,p=E.length;h<p;h++){g[E[h]]=this.attr(E[h])}return g}if(n!=null){var R={};R[E]=n}else{if(E!=null&&M.is(E,"object")){R=E}}for(var o in R){c("raphael.attr."+o+"."+this.id,this,R[o])}for(o in this.paper.customAttributes){if(this.paper.customAttributes[D](o)&&R[D](o)&&M.is(this.paper.customAttributes[o],"function")){var j=this.paper.customAttributes[o].apply(this,[].concat(R[o]));this.attrs[o]=R[o];for(var S in j){if(j[D](S)){R[S]=j[S]}}}}Z(this,R);return this};N.toFront=function(){if(this.removed){return this}if(this.node.parentNode.tagName.toLowerCase()=="a"){this.node.parentNode.parentNode.appendChild(this.node.parentNode)}else{this.node.parentNode.appendChild(this.node)}var E=this.paper;E.top!=this&&M._tofront(this,E);return this};N.toBack=function(){if(this.removed){return this}var R=this.node.parentNode;if(R.tagName.toLowerCase()=="a"){R.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild)}else{if(R.firstChild!=this.node){R.insertBefore(this.node,this.node.parentNode.firstChild)}}M._toback(this,this.paper);var E=this.paper;return this};N.insertAfter=function(E){if(this.removed){return this}var R=E.node||E[E.length-1].node;if(R.nextSibling){R.parentNode.insertBefore(this.node,R.nextSibling)}else{R.parentNode.appendChild(this.node)}M._insertafter(this,E,this.paper);return this};N.insertBefore=function(E){if(this.removed){return this}var R=E.node||E[0].node;R.parentNode.insertBefore(this.node,R);M._insertbefore(this,E,this.paper);return this};N.blur=function(R){var E=this;if(+R!==0){var S=J("filter"),g=J("feGaussianBlur");E.attrs.blur=R;S.id=M.createUUID();J(g,{stdDeviation:+R||1.5});S.appendChild(g);E.paper.defs.appendChild(S);E._blur=S;J(E.node,{filter:"url(#"+S.id+")"})}else{if(E._blur){E._blur.parentNode.removeChild(E._blur);delete E._blur;delete E.attrs.blur}E.node.removeAttribute("filter")}};M._engine.circle=function(R,E,i,h){var g=J("circle");R.canvas&&R.canvas.appendChild(g);var S=new W(g,R);S.attrs={cx:E,cy:i,r:h,fill:"none",stroke:"#000"};S.type="circle";J(g,S.attrs);return S};M._engine.rect=function(S,E,l,R,j,k){var i=J("rect");S.canvas&&S.canvas.appendChild(i);var g=new W(i,S);g.attrs={x:E,y:l,width:R,height:j,r:k||0,rx:k||0,ry:k||0,fill:"none",stroke:"#000"};g.type="rect";J(i,g.attrs);return g};M._engine.ellipse=function(R,E,j,i,h){var g=J("ellipse");R.canvas&&R.canvas.appendChild(g);var S=new W(g,R);S.attrs={cx:E,cy:j,rx:i,ry:h,fill:"none",stroke:"#000"};S.type="ellipse";J(g,S.attrs);return S};M._engine.image=function(S,k,E,l,R,j){var i=J("image");J(i,{x:E,y:l,width:R,height:j,preserveAspectRatio:"none"});i.setAttributeNS(P,"href",k);S.canvas&&S.canvas.appendChild(i);var g=new W(i,S);g.attrs={x:E,y:l,width:R,height:j,src:k};g.type="image";return g};M._engine.text=function(R,E,i,h){var g=J("text");R.canvas&&R.canvas.appendChild(g);var S=new W(g,R);S.attrs={x:E,y:i,"text-anchor":"middle",text:h,font:M._availableAttrs.font,stroke:"none",fill:"#000"};S.type="text";Z(S,S.attrs);return S};M._engine.setSize=function(R,E){this.width=R||this.width;this.height=E||this.height;this.canvas.setAttribute("width",this.width);this.canvas.setAttribute("height",this.height);if(this._viewBox){this.setViewBox.apply(this,this._viewBox)}return this};M._engine.create=function(){var g=M._getContainer.apply(0,arguments),R=g&&g.container,k=g.x,j=g.y,S=g.width,l=g.height;if(!R){throw new Error("SVG container not found.")}var E=J("svg"),i="overflow:hidden;",h;k=k||0;j=j||0;S=S||512;l=l||342;J(E,{height:l,version:1.1,width:S,xmlns:"http://www.w3.org/2000/svg"});if(R==1){E.style.cssText=i+"position:absolute;left:"+k+"px;top:"+j+"px";M._g.doc.body.appendChild(E);h=1}else{E.style.cssText=i+"position:relative";if(R.firstChild){R.insertBefore(E,R.firstChild)}else{R.appendChild(E)}}R=new M._Paper;R.width=S;R.height=l;R.canvas=E;R.clear();R._left=R._top=0;h&&(R.renderfix=function(){});R.renderfix();return R};M._engine.setViewBox=function(j,g,l,E,R){c("raphael.setViewBox",this,this._viewBox,[j,g,l,E,R]);var n=f(l/this.width,E/this.height),i=this.top,m=R?"meet":"xMinYMin",S,k;if(j==null){if(this._vbSize){n=1}delete this._vbSize;S="0 0 "+this.width+K+this.height}else{this._vbSize=n;S=j+K+g+K+l+K+E}J(this.canvas,{viewBox:S,preserveAspectRatio:m});while(n&&i){k="stroke-width" in i.attrs?i.attrs["stroke-width"]:1;i.attr({"stroke-width":k});i._.dirty=1;i._.dirtyT=1;i=i.prev}this._viewBox=[j,g,l,E,!!R];return this};M.prototype.renderfix=function(){var i=this.canvas,E=i.style,h;try{h=i.getScreenCTM()||i.createSVGMatrix()}catch(g){h=i.createSVGMatrix()}var S=-h.e%1,R=-h.f%1;if(S||R){if(S){this._left=(this._left+S)%1;E.left=this._left+"px"}if(R){this._top=(this._top+R)%1;E.top=this._top+"px"}}};M.prototype.clear=function(){M.eve("raphael.clear",this);var E=this.canvas;while(E.firstChild){E.removeChild(E.firstChild)}this.bottom=this.top=null;(this.desc=J("desc")).appendChild(M._g.doc.createTextNode("Created with Rapha\xebl "+M.version));E.appendChild(this.desc);E.appendChild(this.defs=J("defs"))};M.prototype.remove=function(){c("raphael.remove",this);this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var E in this){this[E]=typeof this[E]=="function"?M._removedFactory(E):null}};var a=M.st;for(var F in N){if(N[D](F)&&!a[D](F)){a[F]=(function(E){return function(){var R=arguments;return this.forEach(function(S){S[E].apply(S,R)})}})(F)}}}(window.Raphael);window.Raphael&&window.Raphael.vml&&function(M){var F="hasOwnProperty",h=String,O=parseFloat,I=Math,e=I.round,k=I.max,f=I.min,V=I.abs,Y="fill",J=/[, ]+/,d=M.eve,Z=" progid:DXImageTransform.Microsoft",L=" ",T="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},K=/([clmz]),?([^clmz]*)/gi,W=/ progid:\S+Blur\([^\)]+\)/g,j=/-?[^,\s-]+/g,D="position:absolute;left:0;top:0;width:1px;height:1px",B=21600,c={path:1,rect:1,image:1},U={circle:1,ellipse:1},G=function(u){var q=/[ahqstv]/ig,S=M._pathToAbsolute;h(u).match(q)&&(S=M._path2curve);q=/[clmz]/g;if(S==M._pathToAbsolute&&!h(u).match(q)){var o=h(u).replace(K,function(w,y,r){var x=[],p=y.toLowerCase()=="m",v=g[y];r.replace(j,function(z){if(p&&x.length==2){v+=x+g[y=="m"?"l":"L"];x=[]}x.push(e(z*B))});return v+x});return o}var s=S(u),R,E;o=[];for(var m=0,t=s.length;m<t;m++){R=s[m];E=s[m][0].toLowerCase();E=="z"&&(E="x");for(var l=1,n=R.length;l<n;l++){E+=e(R[l]*B)+(l!=n-1?",":T)}o.push(E)}return o.join(L)},P=function(l,S,R){var E=M.matrix();E.rotate(-l,0.5,0.5);return{dx:E.x(S,R),dy:E.y(S,R)}},Q=function(v,u,t,n,l,q){var AE=v._,x=v.matrix,E=AE.fillpos,w=v.node,r=w.style,S=1,R="",AA,AC=B/u,AB=B/t;r.visibility="hidden";if(!u||!t){return }w.coordsize=V(AC)+L+V(AB);r.rotation=q*(u*t<0?-1:1);if(q){var AD=P(q,n,l);n=AD.dx;l=AD.dy}u<0&&(R+="x");t<0&&(R+=" y")&&(S=-1);r.flip=R;w.coordorigin=(n*-AC)+L+(l*-AB);if(E||AE.fillsize){var z=w.getElementsByTagName(Y);z=z&&z[0];w.removeChild(z);if(E){AD=P(q,x.x(E[0],E[1]),x.y(E[0],E[1]));z.position=AD.dx*S+L+AD.dy*S}if(AE.fillsize){z.size=AE.fillsize[0]*V(u)+L+AE.fillsize[1]*V(t)}w.appendChild(z)}r.visibility="visible"};M.toString=function(){return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl "+this.version};var C=function(E,p,R){var r=h(p).toLowerCase().split("-"),m=R?"end":"start",S=r.length,n="classic",q="medium",l="medium";while(S--){switch(r[S]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":n=r[S];break;case"wide":case"narrow":l=r[S];break;case"long":case"short":q=r[S];break}}var s=E.node.getElementsByTagName("stroke")[0];s[m+"arrow"]=n;s[m+"arrowlength"]=q;s[m+"arrowwidth"]=l},a=function(AC,AM){AC.attrs=AC.attrs||{};var AH=AC.node,AQ=AC.attrs,y=AH.style,u,AK=c[AC.type]&&(AM.x!=AQ.x||AM.y!=AQ.y||AM.width!=AQ.width||AM.height!=AQ.height||AM.cx!=AQ.cx||AM.cy!=AQ.cy||AM.rx!=AQ.rx||AM.ry!=AQ.ry||AM.r!=AQ.r),AB=U[AC.type]&&(AQ.cx!=AM.cx||AQ.cy!=AM.cy||AQ.r!=AM.r||AQ.rx!=AM.rx||AQ.ry!=AM.ry),AT=AC;for(var z in AM){if(AM[F](z)){AQ[z]=AM[z]}}if(AK){AQ.path=M._getPath[AC.type](AC);AC._.dirty=1}AM.href&&(AH.href=AM.href);AM.title&&(AH.title=AM.title);AM.target&&(AH.target=AM.target);AM.cursor&&(y.cursor=AM.cursor);"blur" in AM&&AC.blur(AM.blur);if(AM.path&&AC.type=="path"||AK){AH.path=G(~h(AQ.path).toLowerCase().indexOf("r")?M._pathToAbsolute(AQ.path):AQ.path);if(AC.type=="image"){AC._.fillpos=[AQ.x,AQ.y];AC._.fillsize=[AQ.width,AQ.height];Q(AC,1,1,0,0,0)}}"transform" in AM&&AC.transform(AM.transform);if(AB){var n=+AQ.cx,S=+AQ.cy,t=+AQ.rx||+AQ.r||0,r=+AQ.ry||+AQ.r||0;AH.path=M.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",e((n-t)*B),e((S-r)*B),e((n+t)*B),e((S+r)*B),e(n*B))}if("clip-rect" in AM){var R=h(AM["clip-rect"]).split(J);if(R.length==4){R[2]=+R[2]+(+R[0]);R[3]=+R[3]+(+R[1]);var AA=AH.clipRect||M._g.doc.createElement("div"),AS=AA.style;AS.clip=M.format("rect({1}px {2}px {3}px {0}px)",R);if(!AH.clipRect){AS.position="absolute";AS.top=0;AS.left=0;AS.width=AC.paper.width+"px";AS.height=AC.paper.height+"px";AH.parentNode.insertBefore(AA,AH);AA.appendChild(AH);AH.clipRect=AA}}if(!AM["clip-rect"]){AH.clipRect&&(AH.clipRect.style.clip="auto")}}if(AC.textpath){var AO=AC.textpath.style;AM.font&&(AO.font=AM.font);AM["font-family"]&&(AO.fontFamily='"'+AM["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,T)+'"');AM["font-size"]&&(AO.fontSize=AM["font-size"]);AM["font-weight"]&&(AO.fontWeight=AM["font-weight"]);AM["font-style"]&&(AO.fontStyle=AM["font-style"])}if("arrow-start" in AM){C(AT,AM["arrow-start"])}if("arrow-end" in AM){C(AT,AM["arrow-end"],1)}if(AM.opacity!=null||AM["stroke-width"]!=null||AM.fill!=null||AM.src!=null||AM.stroke!=null||AM["stroke-width"]!=null||AM["stroke-opacity"]!=null||AM["fill-opacity"]!=null||AM["stroke-dasharray"]!=null||AM["stroke-miterlimit"]!=null||AM["stroke-linejoin"]!=null||AM["stroke-linecap"]!=null){var AI=AH.getElementsByTagName(Y),AP=false;AI=AI&&AI[0];!AI&&(AP=AI=i(Y));if(AC.type=="image"&&AM.src){AI.src=AM.src}AM.fill&&(AI.on=true);if(AI.on==null||AM.fill=="none"||AM.fill===null){AI.on=false}if(AI.on&&AM.fill){var q=h(AM.fill).match(M._ISURL);if(q){AI.parentNode==AH&&AH.removeChild(AI);AI.rotate=true;AI.src=q[1];AI.type="tile";var E=AC.getBBox(1);AI.position=E.x+L+E.y;AC._.fillpos=[E.x,E.y];M._preload(q[1],function(){AC._.fillsize=[this.offsetWidth,this.offsetHeight]})}else{AI.color=M.getRGB(AM.fill).hex;AI.src=T;AI.type="solid";if(M.getRGB(AM.fill).error&&(AT.type in {circle:1,ellipse:1}||h(AM.fill).charAt()!="r")&&A(AT,AM.fill,AI)){AQ.fill="none";AQ.gradient=AM.fill;AI.rotate=false}}}if("fill-opacity" in AM||"opacity" in AM){var p=((+AQ["fill-opacity"]+1||2)-1)*((+AQ.opacity+1||2)-1)*((+M.getRGB(AM.fill).o+1||2)-1);p=f(k(p,0),1);AI.opacity=p;if(AI.src){AI.color="none"}}AH.appendChild(AI);var v=(AH.getElementsByTagName("stroke")&&AH.getElementsByTagName("stroke")[0]),AR=false;!v&&(AR=v=i("stroke"));if((AM.stroke&&AM.stroke!="none")||AM["stroke-width"]||AM["stroke-opacity"]!=null||AM["stroke-dasharray"]||AM["stroke-miterlimit"]||AM["stroke-linejoin"]||AM["stroke-linecap"]){v.on=true}(AM.stroke=="none"||AM.stroke===null||v.on==null||AM.stroke==0||AM["stroke-width"]==0)&&(v.on=false);var AG=M.getRGB(AM.stroke);v.on&&AM.stroke&&(v.color=AG.hex);p=((+AQ["stroke-opacity"]+1||2)-1)*((+AQ.opacity+1||2)-1)*((+AG.o+1||2)-1);var AD=(O(AM["stroke-width"])||1)*0.75;p=f(k(p,0),1);AM["stroke-width"]==null&&(AD=AQ["stroke-width"]);AM["stroke-width"]&&(v.weight=AD);AD&&AD<1&&(p*=AD)&&(v.weight=1);v.opacity=p;AM["stroke-linejoin"]&&(v.joinstyle=AM["stroke-linejoin"]||"miter");v.miterlimit=AM["stroke-miterlimit"]||8;AM["stroke-linecap"]&&(v.endcap=AM["stroke-linecap"]=="butt"?"flat":AM["stroke-linecap"]=="square"?"square":"round");if(AM["stroke-dasharray"]){var AF={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};v.dashstyle=AF[F](AM["stroke-dasharray"])?AF[AM["stroke-dasharray"]]:T}AR&&AH.appendChild(v)}if(AT.type=="text"){AT.paper.canvas.style.display=T;var AJ=AT.paper.span,AE=100,l=AQ.font&&AQ.font.match(/\d+(?:\.\d*)?(?=px)/);y=AJ.style;AQ.font&&(y.font=AQ.font);AQ["font-family"]&&(y.fontFamily=AQ["font-family"]);AQ["font-weight"]&&(y.fontWeight=AQ["font-weight"]);AQ["font-style"]&&(y.fontStyle=AQ["font-style"]);l=O(AQ["font-size"]||l&&l[0])||10;y.fontSize=l*AE+"px";AT.textpath.string&&(AJ.innerHTML=h(AT.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var x=AJ.getBoundingClientRect();AT.W=AQ.w=(x.right-x.left)/AE;AT.H=AQ.h=(x.bottom-x.top)/AE;AT.X=AQ.x;AT.Y=AQ.y+AT.H/2;("x" in AM||"y" in AM)&&(AT.path.v=M.format("m{0},{1}l{2},{1}",e(AQ.x*B),e(AQ.y*B),e(AQ.x*B)+1));var w=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var AL=0,AN=w.length;AL<AN;AL++){if(w[AL] in AM){AT._.dirty=1;break}}switch(AQ["text-anchor"]){case"start":AT.textpath.style["v-text-align"]="left";AT.bbx=AT.W/2;break;case"end":AT.textpath.style["v-text-align"]="right";AT.bbx=-AT.W/2;break;default:AT.textpath.style["v-text-align"]="center";AT.bbx=0;break}AT.textpath.style["v-text-kern"]=true}},A=function(E,s,v){E.attrs=E.attrs||{};var t=E.attrs,l=Math.pow,m,n,q="linear",r=".5 .5";E.attrs.gradient=s;s=h(s).replace(M._radial_gradient,function(x,y,o){q="radial";if(y&&o){y=O(y);o=O(o);l(y-0.5,2)+l(o-0.5,2)>0.25&&(o=I.sqrt(0.25-l(y-0.5,2))*((o>0.5)*2-1)+0.5);r=y+L+o}return T});s=s.split(/\s*\-\s*/);if(q=="linear"){var R=s.shift();R=-O(R);if(isNaN(R)){return null}}var p=M._parseDots(s);if(!p){return null}E=E.shape||E.node;if(p.length){E.removeChild(v);v.on=true;v.method="none";v.color=p[0].color;v.color2=p[p.length-1].color;var w=[];for(var S=0,u=p.length;S<u;S++){p[S].offset&&w.push(p[S].offset+L+p[S].color)}v.colors=w.length?w.join():"0% "+v.color;if(q=="radial"){v.type="gradientTitle";v.focus="100%";v.focussize="0 0";v.focusposition=r;v.angle=0}else{v.type="gradient";v.angle=(270-R)%360}E.appendChild(v)}return 1},X=function(R,E){this[0]=this.node=R;R.raphael=true;this.id=M._oid++;R.raphaelid=this.id;this.X=0;this.Y=0;this.attrs={};this.paper=E;this.matrix=M.matrix();this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1};!E.bottom&&(E.bottom=this);this.prev=E.top;E.top&&(E.top.next=this);E.top=this;this.next=null};var N=M.el;X.prototype=N;N.constructor=X;N.transform=function(m){if(m==null){return this._.transform}var p=this.paper._viewBoxShift,n=p?"s"+[p.scale,p.scale]+"-1-1t"+[p.dx,p.dy]:T,s;if(p){s=m=h(m).replace(/\.{3}|\u2026/g,this._.transform||T)}M._extractTransform(this,n+m);var t=this.matrix.clone(),v=this.skew,S=this.node,r,l=~h(this.attrs.fill).indexOf("-"),E=!h(this.attrs.fill).indexOf("url(");t.translate(-0.5,-0.5);if(E||l||this.type=="image"){v.matrix="1 0 0 1";v.offset="0 0";r=t.split();if((l&&r.noRotation)||!r.isSimple){S.style.filter=t.toFilter();var q=this.getBBox(),R=this.getBBox(1),w=q.x-R.x,u=q.y-R.y;S.coordorigin=(w*-B)+L+(u*-B);Q(this,1,1,w,u,0)}else{S.style.filter=T;Q(this,r.scalex,r.scaley,r.dx,r.dy,r.rotate)}}else{S.style.filter=T;v.matrix=h(t);v.offset=t.offset()}s&&(this._.transform=s);return this};N.rotate=function(R,E,l){if(this.removed){return this}if(R==null){return }R=h(R).split(J);if(R.length-1){E=O(R[1]);l=O(R[2])}R=O(R[0]);(l==null)&&(E=l);if(E==null||l==null){var S=this.getBBox(1);E=S.x+S.width/2;l=S.y+S.height/2}this._.dirtyT=1;this.transform(this._.transform.concat([["r",R,E,l]]));return this};N.translate=function(R,E){if(this.removed){return this}R=h(R).split(J);if(R.length-1){E=O(R[1])}R=O(R[0])||0;E=+E||0;if(this._.bbox){this._.bbox.x+=R;this._.bbox.y+=E}this.transform(this._.transform.concat([["t",R,E]]));return this};N.scale=function(m,S,E,l){if(this.removed){return this}m=h(m).split(J);if(m.length-1){S=O(m[1]);E=O(m[2]);l=O(m[3]);isNaN(E)&&(E=null);isNaN(l)&&(l=null)}m=O(m[0]);(S==null)&&(S=m);(l==null)&&(E=l);if(E==null||l==null){var R=this.getBBox(1)}E=E==null?R.x+R.width/2:E;l=l==null?R.y+R.height/2:l;this.transform(this._.transform.concat([["s",m,S,E,l]]));this._.dirtyT=1;return this};N.hide=function(){!this.removed&&(this.node.style.display="none");return this};N.show=function(){!this.removed&&(this.node.style.display=T);return this};N._getBBox=function(){if(this.removed){return{}}return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}};N.remove=function(){if(this.removed||!this.node.parentNode){return }this.paper.__set__&&this.paper.__set__.exclude(this);M.eve.unbind("raphael.*.*."+this.id);M._tear(this,this.paper);this.node.parentNode.removeChild(this.node);this.shape&&this.shape.parentNode.removeChild(this.shape);for(var E in this){this[E]=typeof this[E]=="function"?M._removedFactory(E):null}this.removed=true};N.attr=function(E,r){if(this.removed){return this}if(E==null){var o={};for(var q in this.attrs){if(this.attrs[F](q)){o[q]=this.attrs[q]}}o.gradient&&o.fill=="none"&&(o.fill=o.gradient)&&delete o.gradient;o.transform=this._.transform;return o}if(r==null&&M.is(E,"string")){if(E==Y&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient}var p=E.split(J),l={};for(var m=0,t=p.length;m<t;m++){E=p[m];if(E in this.attrs){l[E]=this.attrs[E]}else{if(M.is(this.paper.customAttributes[E],"function")){l[E]=this.paper.customAttributes[E].def}else{l[E]=M._availableAttrs[E]}}}return t-1?l:l[p[0]]}if(this.attrs&&r==null&&M.is(E,"array")){l={};for(m=0,t=E.length;m<t;m++){l[E[m]]=this.attr(E[m])}return l}var R;if(r!=null){R={};R[E]=r}r==null&&M.is(E,"object")&&(R=E);for(var s in R){d("raphael.attr."+s+"."+this.id,this,R[s])}if(R){for(s in this.paper.customAttributes){if(this.paper.customAttributes[F](s)&&R[F](s)&&M.is(this.paper.customAttributes[s],"function")){var n=this.paper.customAttributes[s].apply(this,[].concat(R[s]));this.attrs[s]=R[s];for(var S in n){if(n[F](S)){R[S]=n[S]}}}}if(R.text&&this.type=="text"){this.textpath.string=R.text}a(this,R)}return this};N.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node);this.paper&&this.paper.top!=this&&M._tofront(this,this.paper);return this};N.toBack=function(){if(this.removed){return this}if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);M._toback(this,this.paper)}return this};N.insertAfter=function(E){if(this.removed){return this}if(E.constructor==M.st.constructor){E=E[E.length-1]}if(E.node.nextSibling){E.node.parentNode.insertBefore(this.node,E.node.nextSibling)}else{E.node.parentNode.appendChild(this.node)}M._insertafter(this,E,this.paper);return this};N.insertBefore=function(E){if(this.removed){return this}if(E.constructor==M.st.constructor){E=E[0]}E.node.parentNode.insertBefore(this.node,E.node);M._insertbefore(this,E,this.paper);return this};N.blur=function(E){var R=this.node.runtimeStyle,S=R.filter;S=S.replace(W,T);if(+E!==0){this.attrs.blur=E;R.filter=S+L+Z+".Blur(pixelradius="+(+E||1.5)+")";R.margin=M.format("-{0}px 0 0 -{0}px",e(+E||1.5))}else{R.filter=S;R.margin=0;delete this.attrs.blur}};M._engine.path=function(l,R){var m=i("shape");m.style.cssText=D;m.coordsize=B+L+B;m.coordorigin=R.coordorigin;var n=new X(m,R),E={fill:"none",stroke:"#000"};l&&(E.path=l);n.type="path";n.path=[];n.Path=T;a(n,E);R.canvas.appendChild(m);var S=i("skew");S.on=true;m.appendChild(S);n.skew=S;n.transform(T);return n};M._engine.rect=function(R,o,m,p,S,E){var q=M._rectPath(o,m,p,S,E),l=R.path(q),n=l.attrs;l.X=n.x=o;l.Y=n.y=m;l.W=n.width=p;l.H=n.height=S;n.r=E;n.path=q;l.type="rect";return l};M._engine.ellipse=function(R,E,o,n,m){var l=R.path(),S=l.attrs;l.X=E-n;l.Y=o-m;l.W=n*2;l.H=m*2;l.type="ellipse";a(l,{cx:E,cy:o,rx:n,ry:m});return l};M._engine.circle=function(R,E,n,m){var l=R.path(),S=l.attrs;l.X=E-m;l.Y=n-m;l.W=l.H=m*2;l.type="circle";a(l,{cx:E,cy:n,r:m});return l};M._engine.image=function(R,E,p,n,q,l){var s=M._rectPath(p,n,q,l),m=R.path(s).attr({stroke:"none"}),o=m.attrs,S=m.node,r=S.getElementsByTagName(Y)[0];o.src=E;m.X=o.x=p;m.Y=o.y=n;m.W=o.width=q;m.H=o.height=l;o.path=s;m.type="image";r.parentNode==S&&S.removeChild(r);r.rotate=true;r.src=E;r.type="tile";m._.fillpos=[p,n];m._.fillsize=[q,l];S.appendChild(r);Q(m,1,1,0,0,0);return m};M._engine.text=function(E,q,n,r){var l=i("shape"),t=i("path"),S=i("textpath");q=q||0;n=n||0;r=r||"";t.v=M.format("m{0},{1}l{2},{1}",e(q*B),e(n*B),e(q*B)+1);t.textpathok=true;S.string=h(r);S.on=true;l.style.cssText=D;l.coordsize=B+L+B;l.coordorigin="0 0";var R=new X(l,E),m={fill:"#000",stroke:"none",font:M._availableAttrs.font,text:r};R.shape=l;R.path=t;R.textpath=S;R.type="text";R.attrs.text=h(r);R.attrs.x=q;R.attrs.y=n;R.attrs.w=1;R.attrs.h=1;a(R,m);l.appendChild(S);l.appendChild(t);E.canvas.appendChild(l);var s=i("skew");s.on=true;l.appendChild(s);R.skew=s;R.transform(T);return R};M._engine.setSize=function(S,E){var R=this.canvas.style;this.width=S;this.height=E;S==+S&&(S+="px");E==+E&&(E+="px");R.width=S;R.height=E;R.clip="rect(0 "+S+" "+E+" 0)";if(this._viewBox){M._engine.setViewBox.apply(this,this._viewBox)}return this};M._engine.setViewBox=function(n,m,o,S,l){M.eve("raphael.setViewBox",this,this._viewBox,[n,m,o,S,l]);var E=this.width,q=this.height,r=1/k(o/E,S/q),p,R;if(l){p=q/S;R=E/o;if(o*p<E){n-=(E-o*p)/2/p}if(S*R<q){m-=(q-S*R)/2/R}}this._viewBox=[n,m,o,S,!!l];this._viewBoxShift={dx:-n,dy:-m,scale:r};this.forEach(function(s){s.transform("...")});return this};var i;M._engine.initWin=function(S){var R=S.document;R.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!R.namespaces.rvml&&R.namespaces.add("rvml","urn:schemas-microsoft-com:vml");i=function(l){return R.createElement("<rvml:"+l+' class="rvml">')}}catch(E){i=function(l){return R.createElement("<"+l+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}};M._engine.initWin(M._g.win);M._engine.create=function(){var S=M._getContainer.apply(0,arguments),E=S.container,q=S.height,r,R=S.width,p=S.x,o=S.y;if(!E){throw new Error("VML container not found.")}var m=new M._Paper,n=m.canvas=M._g.doc.createElement("div"),l=n.style;p=p||0;o=o||0;R=R||512;q=q||342;m.width=R;m.height=q;R==+R&&(R+="px");q==+q&&(q+="px");m.coordsize=B*1000+L+B*1000;m.coordorigin="0 0";m.span=M._g.doc.createElement("span");m.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";n.appendChild(m.span);l.cssText=M.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",R,q);if(E==1){M._g.doc.body.appendChild(n);l.left=p+"px";l.top=o+"px";l.position="absolute"}else{if(E.firstChild){E.insertBefore(n,E.firstChild)}else{E.appendChild(n)}}m.renderfix=function(){};return m};M.prototype.clear=function(){M.eve("raphael.clear",this);this.canvas.innerHTML=T;this.span=M._g.doc.createElement("span");this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";this.canvas.appendChild(this.span);this.bottom=this.top=null};M.prototype.remove=function(){M.eve("raphael.remove",this);this.canvas.parentNode.removeChild(this.canvas);for(var E in this){this[E]=typeof this[E]=="function"?M._removedFactory(E):null}return true};var b=M.st;for(var H in N){if(N[F](H)&&!b[F](H)){b[H]=(function(E){return function(){var R=arguments;return this.forEach(function(S){S[E].apply(S,R)})}})(H)}}}(window.Raphael);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs-contextpath', location = 'js/context-path.cp.js' */
AJS=AJS||{};(function(){var A="";A=(A.indexOf("%_CONTEXT_PATH")===0?false:A);AJS.contextPath=function(){var B=null;var D=[A,window.contextPath,window.Confluence&&Confluence.getContextPath(),window.BAMBOO&&BAMBOO.contextPath,window.FECRU&&FECRU.pageContext];for(var C=0;C<D.length;C++){if(typeof D[C]==="string"){B=D[C];break}}return B}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-header', location = 'js/aui-header-responsive.js' */
(function(A){AJS.responsiveheader={};AJS.responsiveheader.setup=function(){var C=A(".aui-header");if(!C.length){return }C.each(function(D,E){B(A(E),D)});function B(J,O){function F(Y){var X;R();if(E>H){M(Y)}else{L.show();X=E-P;for(var W=0;X>=0;W++){X-=U[W].itemWidth}W=W-1;K(W,Y);G(W,I,Y);return W}}function R(){var X=T.length!==0?T.position().left:A(window).width();var W=Q.position().left+Q.outerWidth(true)+S;E=X-W}function D(X){var W=A("<li>"+aui.dropdown2.trigger({menu:{id:"aui-responsive-header-dropdown-content-"+X},text:"More",extraAttributes:{href:"#"},id:"aui-responsive-header-dropdown-trigger-"+X})+"</li>");W.append(aui.dropdown2.contents({id:"aui-responsive-header-dropdown-content-"+X,extraClasses:"aui-style-default",content:aui.dropdown2.section({content:"<ul id='aui-responsive-header-dropdown-list-"+X+"'></ul>"})}));if(S===0){W.appendTo(N(".aui-nav"))}else{W.insertBefore(N(".aui-nav > li > .aui-button").first().parent())}L=W;P=L.outerWidth(true)}function G(W,b,d){if(W<0||b<0||W===b){return }var Z=A("#aui-responsive-header-dropdown-trigger-"+d);var c=Z.parent();var a;var X;if(Z.hasClass("active")){Z.trigger("aui-button-invoke")}var Y=N(".aui-nav > li > a:not(.aui-button):not(#aui-responsive-header-dropdown-trigger-"+d+")").length;while(W>b){a=U[b];if(a&&a.itemElement){X=a.itemElement;if(Y===0){X.prependTo(N(".aui-nav"))}else{X.insertBefore(c)}X.children("a").removeClass("aui-dropdown2-sub-trigger active");b=b+1;Y=Y+1}}}function K(W,a){if(W<0){return }var Y=A("#aui-responsive-header-dropdown-list-"+a);for(var X=W;X<U.length;X++){U[X].itemElement.appendTo(Y);var Z=U[X].itemElement.children("a");if(Z.hasClass("aui-dropdown2-trigger")){Z.addClass("aui-dropdown2-sub-trigger")}}}function M(W){L.hide();G(U.length,I,W)}var T=J.find(".aui-header-secondary .aui-nav").first();A(".aui-header").attr("data-aui-responsive","true");var U=[];var E=0;var H=0;var L;var I;var Q=J.find("#logo");var P=0;var N=(function(){var W=J.find(".aui-header-primary").first();return function(X){return W.find(X)}})();var S=0;N(".aui-button").parent().each(function(W,X){S+=A(X).outerWidth(true)});N(".aui-nav > li > a:not(.aui-button)").each(function(X,Y){var W=A(Y).parent();var Z=W.outerWidth(true);U.push({itemElement:W,itemWidth:Z});H+=Z});I=U.length;A(window).resize(function(){I=F(O)});D(O);var V=Q.find("img");if(V.length!==0){V.attr("data-aui-responsive-header-index",O);V.load(function(W){I=F(O)})}I=F(O);N(".aui-nav").css("width","auto")}}})(AJS.$);AJS.$(AJS.responsiveheader.setup);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-dropdown2', location = 'js/dropdown2.js' */
(function(G){var E=G(document),K=(AJS.$.browser.msie&&parseInt(AJS.$.browser.version,10)==8);var C=null;function I(M){M.preventDefault()}var B=(function(){var O=false;function M(Q){if(!O&&Q.which===1){O=true;E.bind("mouseup mouseleave",N);G(this).trigger("aui-button-invoke")}}function N(){E.unbind("mouseup mouseleave",N);setTimeout(function(){O=false},0)}function P(){if(!O){G(this).trigger("aui-button-invoke")}}if(typeof document.addEventListener==="undefined"){return{click:P,"click selectstart":I,mousedown:function(S){var T=this;var R=document.activeElement;function Q(U){switch(U.toElement){case null:case T:case document.body:case document.documentElement:U.returnValue=false}}M.call(this,S);if(R!==null){R.attachEvent("onbeforedeactivate",Q);setTimeout(function(){R.detachEvent("onbeforedeactivate",Q)},0)}}}}return{click:P,"click mousedown":I,mousedown:M}})();var A={"aui-button-invoke":function(i,S){S=G.extend({selectFirst:true},S);var P=J(this);var O=G(this).addClass("active");var s=O.hasClass("aui-dropdown2-sub-trigger");var n=P.parent()[0];var q=P.next()[0];var e=G(this).attr("data-dropdown2-hide-location");if(e){var a=document.getElementById(e);if(a){n=G(a);q=undefined}else{throw new Error("The specified data-dropdown2-hide-location id doesn't exist")}}var U=S.$menu||O.closest(".aui-dropdown2-trigger-group");if(s){var f=O.closest(".aui-dropdown2");P.addClass(f.attr("class")).addClass("aui-dropdown2-sub-menu")}var T={click:function(u){var t=G(this);if(!Q(t)){return }if(!t.hasClass("interactive")){m()}if(W(t)){g(t,{selectFirst:false});I(u)}},mousemove:function(){var u=G(this);var t=V(u);if(t){g(u,{selectFirst:false})}}};var o={"click focusin mousedown":function(t){var u=t.target;if(document===u&&t.type==="focusin"){return }if(!D(u,P[0])&&!D(u,O[0])){m()}},keydown:function(v){var u;if(v.shiftKey&&v.keyCode==9){k(-1)}else{switch(v.keyCode){case 13:u=Z();if(W(u)){g(u)}else{L(u[0])}break;case 27:b();break;case 37:u=Z();if(W(u)){var t=J(u);if(t.is(":visible")){P.trigger("aui-dropdown2-step-out");return }}if(s){b()}else{r(-1)}break;case 38:k(-1);break;case 39:u=Z();if(W(u)){g(u)}else{r(1)}break;case 40:k(1);break;case 9:k(1);break;default:return }}I(v)}};function d(t,u){t.each(function(){var v=G(this);v.attr("role",u);if(v.hasClass("checked")){v.attr("aria-checked","true");if(u=="radio"){v.closest("ul").attr("role","radiogroup")}}else{v.attr("aria-checked","false")}})}O.attr("aria-controls",O.attr("aria-owns"));if(K){P.removeClass("aui-dropdown2-tailed")}P.find(".disabled").attr("aria-disabled","true");P.find("li.hidden > a").addClass("disabled").attr("aria-disabled","true");d(P.find(".aui-dropdown2-checkbox"),"checkbox");d(P.find(".aui-dropdown2-radio"),"radio");function R(){var AC=O.offset();var AG=O.outerWidth();P.css({left:0,top:0});var AF=P.outerWidth();var AB=G("body").outerWidth(true);var u=Math.max(parseInt(P.css("min-width"),10),AG);var v=O.data("container")||false;var AE="left";var w;if(K){w=parseInt(P.css("border-left-width"),10)+parseInt(P.css("border-right-width"),10);AF=AF-w;u=u-w}if(!s){P.css("min-width",u+"px")}var x=AC.left,AD=AC.top+O.outerHeight();if(s){var z=3;x=AC.left+f.outerWidth()-z;AD=AC.top}if(AB<x+AF&&AF<=x+AG){x=AC.left+AG-AF;if(s){x=AC.left-AF}AE="right"}if(v){var t=O.closest(v),AA=O.offset().left+O.outerWidth(),y=AA+AF;if(u>=AF){AF=u}if(y>AA){x=AA-AF;AE="right"}if(K){x-=w}}P.attr({"data-dropdown2-alignment":AE,"aria-hidden":"false"}).css({display:"block",left:x+"px",top:AD+"px"});P.appendTo(document.body)}R();if(O.hasClass("toolbar-trigger")){P.addClass("aui-dropdown2-in-toolbar")}if(O.parent().hasClass("aui-buttons")){P.addClass("aui-dropdown2-in-buttons")}if(O.parents().hasClass("aui-header")){P.addClass("aui-dropdown2-in-header")}P.trigger("aui-dropdown2-show",S);if(S.selectFirst){N()}j("on");function b(){M();j("off");setTimeout(function(){P.css("display","none").css("min-width","").insertAfter(O).attr("aria-hidden","true");if(!s){O.removeClass("active")}Z().removeClass("active");P.removeClass("aui-dropdown2-in-toolbar");P.removeClass("aui-dropdown2-in-buttons");if(q){P.insertBefore(q)}else{P.appendTo(n)}P.trigger("aui-dropdown2-hide")},0)}function m(){b();if(s){f.trigger("aui-dropdown2-hide-all")}}function h(t){if(s&&t.target===f[0]){b()}}function Q(t){return !t.is(".disabled, [aria-disabled=true]")}function W(t){return t.hasClass("aui-dropdown2-sub-trigger")}function g(t,u){if(!W(t)){return }u=G.extend({},u,{$menu:U});var v=J(t);if(v.is(":visible")){v.trigger("aui-dropdown2-select-first")}else{t.trigger("aui-button-invoke",u)}}function Z(){return P.find("a.active")}var X=null;function V(t){if(X&&X[0]===t[0]){return false}X=t;Z().removeClass("active");if(Q(t)){t.addClass("active")}P.trigger("aui-dropdown2-item-selected");Y();return true}function N(){V(P.find("a:not(.disabled)").first())}function k(u){var t=P.find("> ul > li > a, > .aui-dropdown2-section > ul > li > a").not(".disabled");V(l(t,u,true))}function c(t){if(t.length>0){m();t.trigger("aui-button-invoke")}}function r(t){c(l(U.find(".aui-dropdown2-trigger").not(".disabled, [aria-disabled=true], .aui-dropdown2-sub-trigger"),t,false))}function l(v,w,u){var t=v.index(v.filter(".active"));t+=(t<0&&w<0)?1:0;t+=w;if(u){t%=v.length}else{if(t<0){t=v.length}}return v.eq(t)}function p(){c(G(this))}function M(){if(C===o){E.unbind(o);C=null}}function Y(){if(C===o){return }E.unbind(C);E.bind(o);C=o}function j(u){var v="bind";var t="delegate";if(u!=="on"){v="unbind";t="undelegate"}if(!s){U[t](".aui-dropdown2-trigger:not(.active)","mousemove",p);O[v]("aui-button-invoke",b)}else{f[v]("aui-dropdown2-hide aui-dropdown2-item-selected aui-dropdown2-step-out",h)}P[v]("aui-dropdown2-hide-all",m);P[t]("a",T);P[v]("aui-dropdown2-hide",Y);P[v]("aui-dropdown2-select-first",N)}},mousedown:function(M){if(M.which===1){G(this).bind(F)}}};var F={mouseleave:function(){E.bind(H)},"mouseup mouseleave":function(){G(this).unbind(F)}};var H={mouseup:function(M){var N=G(M.target).closest(".aui-dropdown2 a, .aui-dropdown2-trigger")[0];if(N){setTimeout(function(){L(N)},0)}},"mouseup mouseleave":function(){G(this).unbind(H)}};function L(M){if(M.click){M.click()}else{var N=document.createEvent("MouseEvents");N.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);M.dispatchEvent(N)}}function D(N,M){return(N===M)||G.contains(M,N)}function J(O){if(!(O instanceof AJS.$)){O=G(O)}var P=O.attr("aria-owns"),M=O.attr("aria-haspopup"),N=document.getElementById(P);if(N){return G(N)}else{if(!P){throw new Error("Dropdown 2 trigger required attribute not set: aria-owns")}if(!M){throw new Error("Dropdown 2 trigger required attribute not set: aria-haspopup")}if(!N){throw new Error("Dropdown 2 trigger aria-owns attr set to nonexistent id: "+P)}throw new Error("Dropdown 2 trigger unknown error. I don't know what you did, but there's smoke everywhere. Consult the documentation.")}}E.delegate(".aui-dropdown2-trigger",B);E.delegate(".aui-dropdown2-trigger:not(.active):not([aria-disabled=true]),.aui-dropdown2-sub-trigger:not([aria-disabled=true])",A);E.delegate(".aui-dropdown2-checkbox:not(.disabled)","click",function(){var M=G(this);if(M.hasClass("checked")){M.removeClass("checked").attr("aria-checked","false");M.trigger("aui-dropdown2-item-uncheck")}else{M.addClass("checked").attr("aria-checked","true");M.trigger("aui-dropdown2-item-check")}});E.delegate(".aui-dropdown2-radio:not(.checked):not(.disabled)","click",function(){var M=G(this);var N=M.closest("ul").find(".checked");N.removeClass("checked").attr("aria-checked","false").trigger("aui-dropdown2-item-uncheck");M.addClass("checked").attr("aria-checked","true").trigger("aui-dropdown2-item-check")});E.delegate(".aui-dropdown2 a.disabled","click",function(M){I(M)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/raphael/raphael.shadow.js' */
if(window.Raphael){Raphael.shadow=function(K,J,L,F,Q){Q=Q||{};var B=jQuery(Q.target),N=jQuery("<div/>",{"class":"aui-shadow"}),A=Q.shadow||Q.color||"#000",P=Q.size*10||0,O=Q.offsetSize||3,M=Q.zindex||0,H=Q.radius||0,G="0.4",D=Q.blur||3,C,I,E;L+=P+2*D;F+=P+2*D;if(Raphael.shadow.BOX_SHADOW_SUPPORT){B.addClass("aui-box-shadow");return N.addClass("hidden")}if(K===0&&J===0&&B.length>0){E=B.offset();K=O-D+E.left;J=O-D+E.top}if(jQuery.browser.msie&&jQuery.browser.version<"9"){A="#f0f0f0";G="0.2"}N.css({position:"absolute",left:K,top:J,width:L,height:F,zIndex:M});if(B.length>0){N.appendTo(document.body);C=Raphael(N[0],L,F,H)}else{C=Raphael(K,J,L,F,H)}C.canvas.style.position="absolute";I=C.rect(D,D,L-2*D,F-2*D).attr({fill:A,stroke:A,blur:""+D,opacity:G});return N};Raphael.shadow.BOX_SHADOW_SUPPORT=(function(){var C=document.documentElement.style;var A=["boxShadow","MozBoxShadow","WebkitBoxShadow","msBoxShadow"];for(var B=0;B<A.length;B++){if(A[B] in C){return true}}return false})()};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/jquery/jquery.os.js' */
jQuery.os={};var jQueryOSplatform=navigator.platform.toLowerCase();jQuery.os.windows=(jQueryOSplatform.indexOf("win")!=-1);jQuery.os.mac=(jQueryOSplatform.indexOf("mac")!=-1);jQuery.os.linux=(jQueryOSplatform.indexOf("linux")!=-1);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js-vendor/jquery/jquery-ui/jquery.ui.core.js' */
/*
 * jQuery UI 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(A,D){A.ui=A.ui||{};if(A.ui.version){return }A.extend(A.ui,{version:"1.8.24",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});A.fn.extend({propAttr:A.fn.prop||A.fn.attr,_focus:A.fn.focus,focus:function(E,F){return typeof E==="number"?this.each(function(){var G=this;setTimeout(function(){A(G).focus();if(F){F.call(G)}},E)}):this._focus.apply(this,arguments)},scrollParent:function(){var E;if((A.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){E=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(A.curCSS(this,"position",1))&&(/(auto|scroll)/).test(A.curCSS(this,"overflow",1)+A.curCSS(this,"overflow-y",1)+A.curCSS(this,"overflow-x",1))}).eq(0)}else{E=this.parents().filter(function(){return(/(auto|scroll)/).test(A.curCSS(this,"overflow",1)+A.curCSS(this,"overflow-y",1)+A.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!E.length?A(document):E},zIndex:function(H){if(H!==D){return this.css("zIndex",H)}if(this.length){var F=A(this[0]),E,G;while(F.length&&F[0]!==document){E=F.css("position");if(E==="absolute"||E==="relative"||E==="fixed"){G=parseInt(F.css("zIndex"),10);if(!isNaN(G)&&G!==0){return G}}F=F.parent()}}return 0},disableSelection:function(){return this.bind((A.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(E){E.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});if(!A("<a>").outerWidth(1).jquery){A.each(["Width","Height"],function(G,E){var F=E==="Width"?["Left","Right"]:["Top","Bottom"],H=E.toLowerCase(),J={innerWidth:A.fn.innerWidth,innerHeight:A.fn.innerHeight,outerWidth:A.fn.outerWidth,outerHeight:A.fn.outerHeight};function I(M,L,K,N){A.each(F,function(){L-=parseFloat(A.curCSS(M,"padding"+this,true))||0;if(K){L-=parseFloat(A.curCSS(M,"border"+this+"Width",true))||0}if(N){L-=parseFloat(A.curCSS(M,"margin"+this,true))||0}});return L}A.fn["inner"+E]=function(K){if(K===D){return J["inner"+E].call(this)}return this.each(function(){A(this).css(H,I(this,K)+"px")})};A.fn["outer"+E]=function(K,L){if(typeof K!=="number"){return J["outer"+E].call(this,K)}return this.each(function(){A(this).css(H,I(this,K,true,L)+"px")})}})}function C(G,E){var J=G.nodeName.toLowerCase();if("area"===J){var I=G.parentNode,H=I.name,F;if(!G.href||!H||I.nodeName.toLowerCase()!=="map"){return false}F=A("img[usemap=#"+H+"]")[0];return !!F&&B(F)}return(/input|select|textarea|button|object/.test(J)?!G.disabled:"a"==J?G.href||E:E)&&B(G)}function B(E){return !A(E).parents().andSelf().filter(function(){return A.curCSS(this,"visibility")==="hidden"||A.expr.filters.hidden(this)}).length}A.extend(A.expr[":"],{data:A.expr.createPseudo?A.expr.createPseudo(function(E){return function(F){return !!A.data(F,E)}}):function(G,F,E){return !!A.data(G,E[3])},focusable:function(E){return C(E,!isNaN(A.attr(E,"tabindex")))},tabbable:function(G){var E=A.attr(G,"tabindex"),F=isNaN(E);return(F||E>=0)&&C(G,!F)}});A(function(){var E=document.body,F=E.appendChild(F=document.createElement("div"));F.offsetHeight;A.extend(F.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});A.support.minHeight=F.offsetHeight===100;A.support.selectstart="onselectstart" in F;E.removeChild(F).style.display="none"});if(!A.curCSS){A.curCSS=A.css}A.extend(A.ui,{plugin:{add:function(F,G,I){var H=A.ui[F].prototype;for(var E in I){H.plugins[E]=H.plugins[E]||[];H.plugins[E].push([G,I[E]])}},call:function(E,G,F){var I=E.plugins[G];if(!I||!E.element[0].parentNode){return }for(var H=0;H<I.length;H++){if(E.options[I[H][0]]){I[H][1].apply(E.element,F)}}}},contains:function(F,E){return document.compareDocumentPosition?F.compareDocumentPosition(E)&16:F!==E&&F.contains(E)},hasScroll:function(H,F){if(A(H).css("overflow")==="hidden"){return false}var E=(F&&F==="left")?"scrollLeft":"scrollTop",G=false;if(H[E]>0){return true}H[E]=1;G=(H[E]>0);H[E]=0;return G},isOverAxis:function(F,E,G){return(F>E)&&(F<(E+G))},isOver:function(J,F,I,H,E,G){return A.ui.isOverAxis(J,I,E)&&A.ui.isOverAxis(F,H,G)}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js-vendor/jquery/jquery-ui/jquery.ui.widget.js' */
/*
 * jQuery UI Widget 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(B,D){if(B.cleanData){var C=B.cleanData;B.cleanData=function(E){for(var F=0,G;(G=E[F])!=null;F++){try{B(G).triggerHandler("remove")}catch(H){}}C(E)}}else{var A=B.fn.remove;B.fn.remove=function(E,F){return this.each(function(){if(!F){if(!E||B.filter(E,[this]).length){B("*",this).add([this]).each(function(){try{B(this).triggerHandler("remove")}catch(G){}})}}return A.call(B(this),E,F)})}}B.widget=function(F,H,E){var G=F.split(".")[0],J;F=F.split(".")[1];J=G+"-"+F;if(!E){E=H;H=B.Widget}B.expr[":"][J]=function(K){return !!B.data(K,F)};B[G]=B[G]||{};B[G][F]=function(K,L){if(arguments.length){this._createWidget(K,L)}};var I=new H();I.options=B.extend(true,{},I.options);B[G][F].prototype=B.extend(true,I,{namespace:G,widgetName:F,widgetEventPrefix:B[G][F].prototype.widgetEventPrefix||F,widgetBaseClass:J},E);B.widget.bridge(F,B[G][F])};B.widget.bridge=function(F,E){B.fn[F]=function(I){var G=typeof I==="string",H=Array.prototype.slice.call(arguments,1),J=this;I=!G&&H.length?B.extend.apply(null,[true,I].concat(H)):I;if(G&&I.charAt(0)==="_"){return J}if(G){this.each(function(){var K=B.data(this,F),L=K&&B.isFunction(K[I])?K[I].apply(K,H):K;if(L!==K&&L!==D){J=L;return false}})}else{this.each(function(){var K=B.data(this,F);if(K){K.option(I||{})._init()}else{B.data(this,F,new E(I,this))}})}return J}};B.Widget=function(E,F){if(arguments.length){this._createWidget(E,F)}};B.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(F,G){B.data(G,this.widgetName,this);this.element=B(G);this.options=B.extend(true,{},this.options,this._getCreateOptions(),F);var E=this;this.element.bind("remove."+this.widgetName,function(){E.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return B.metadata&&B.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(F,G){var E=F;if(arguments.length===0){return B.extend({},this.options)}if(typeof F==="string"){if(G===D){return this.options[F]}E={};E[F]=G}this._setOptions(E);return this},_setOptions:function(F){var E=this;B.each(F,function(G,H){E._setOption(G,H)});return this},_setOption:function(E,F){this.options[E]=F;if(E==="disabled"){this.widget()[F?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",F)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(E,F,G){var J,I,H=this.options[E];G=G||{};F=B.Event(F);F.type=(E===this.widgetEventPrefix?E:this.widgetEventPrefix+E).toLowerCase();F.target=this.element[0];I=F.originalEvent;if(I){for(J in I){if(!(J in F)){F[J]=I[J]}}}this.element.trigger(F,G);return !(B.isFunction(H)&&H.call(this.element[0],F,G)===false||F.isDefaultPrevented())}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js-vendor/jquery/jquery-ui/jquery.ui.mouse.js' */
/*
 * jQuery UI Mouse 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(B,C){var A=false;B(document).mouseup(function(D){A=false});B.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var D=this;this.element.bind("mousedown."+this.widgetName,function(E){return D._mouseDown(E)}).bind("click."+this.widgetName,function(E){if(true===B.data(E.target,D.widgetName+".preventClickEvent")){B.removeData(E.target,D.widgetName+".preventClickEvent");E.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){B(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(F){if(A){return }(this._mouseStarted&&this._mouseUp(F));this._mouseDownEvent=F;var E=this,G=(F.which==1),D=(typeof this.options.cancel=="string"&&F.target.nodeName?B(F.target).closest(this.options.cancel).length:false);if(!G||D||!this._mouseCapture(F)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){E.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(F)&&this._mouseDelayMet(F)){this._mouseStarted=(this._mouseStart(F)!==false);if(!this._mouseStarted){F.preventDefault();return true}}if(true===B.data(F.target,this.widgetName+".preventClickEvent")){B.removeData(F.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(H){return E._mouseMove(H)};this._mouseUpDelegate=function(H){return E._mouseUp(H)};B(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);F.preventDefault();A=true;return true},_mouseMove:function(D){if(B.browser.msie&&!(document.documentMode>=9)&&!D.button){return this._mouseUp(D)}if(this._mouseStarted){this._mouseDrag(D);return D.preventDefault()}if(this._mouseDistanceMet(D)&&this._mouseDelayMet(D)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,D)!==false);(this._mouseStarted?this._mouseDrag(D):this._mouseUp(D))}return !this._mouseStarted},_mouseUp:function(D){B(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(D.target==this._mouseDownEvent.target){B.data(D.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(D)}return false},_mouseDistanceMet:function(D){return(Math.max(Math.abs(this._mouseDownEvent.pageX-D.pageX),Math.abs(this._mouseDownEvent.pageY-D.pageY))>=this.options.distance)},_mouseDelayMet:function(D){return this.mouseDelayMet},_mouseStart:function(D){},_mouseDrag:function(D){},_mouseStop:function(D){},_mouseCapture:function(D){return true}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js-vendor/jquery/jquery-ui/jquery.ui.draggable.js' */
/*
 * jQuery UI Draggable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.draggable",A.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return }this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this},_mouseCapture:function(C){var D=this.options;if(this.helper||D.disabled||A(C.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(C);if(!this.handle){return false}if(D.iframeFix){A(D.iframeFix===true?"iframe":D.iframeFix).each(function(){A('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(A(this).offset()).appendTo("body")})}return true},_mouseStart:function(C){var D=this.options;this.helper=this._createHelper(C);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if(A.ui.ddmanager){A.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};A.extend(this.offset,{click:{left:C.pageX-this.offset.left,top:C.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(C);this.originalPageX=C.pageX;this.originalPageY=C.pageY;(D.cursorAt&&this._adjustOffsetFromHelper(D.cursorAt));if(D.containment){this._setContainment()}if(this._trigger("start",C)===false){this._clear();return false}this._cacheHelperProportions();if(A.ui.ddmanager&&!D.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,C)}this._mouseDrag(C,true);if(A.ui.ddmanager){A.ui.ddmanager.dragStart(this,C)}return true},_mouseDrag:function(C,E){this.position=this._generatePosition(C);this.positionAbs=this._convertPositionTo("absolute");if(!E){var D=this._uiHash();if(this._trigger("drag",C,D)===false){this._mouseUp({});return false}this.position=D.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(A.ui.ddmanager){A.ui.ddmanager.drag(this,C)}return false},_mouseStop:function(E){var G=false;if(A.ui.ddmanager&&!this.options.dropBehaviour){G=A.ui.ddmanager.drop(this,E)}if(this.dropped){G=this.dropped;this.dropped=false}var D=this.element[0],F=false;while(D&&(D=D.parentNode)){if(D==document){F=true}}if(!F&&this.options.helper==="original"){return false}if((this.options.revert=="invalid"&&!G)||(this.options.revert=="valid"&&G)||this.options.revert===true||(A.isFunction(this.options.revert)&&this.options.revert.call(this.element,G))){var C=this;A(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(C._trigger("stop",E)!==false){C._clear()}})}else{if(this._trigger("stop",E)!==false){this._clear()}}return false},_mouseUp:function(C){A("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});if(A.ui.ddmanager){A.ui.ddmanager.dragStop(this,C)}return A.ui.mouse.prototype._mouseUp.call(this,C)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(C){var D=!this.options.handle||!A(this.options.handle,this.element).length?true:false;A(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==C.target){D=true}});return D},_createHelper:function(D){var E=this.options;var C=A.isFunction(E.helper)?A(E.helper.apply(this.element[0],[D])):(E.helper=="clone"?this.element.clone().removeAttr("id"):this.element);if(!C.parents("body").length){C.appendTo((E.appendTo=="parent"?this.element[0].parentNode:E.appendTo))}if(C[0]!=this.element[0]&&!(/(fixed|absolute)/).test(C.css("position"))){C.css("position","absolute")}return C},_adjustOffsetFromHelper:function(C){if(typeof C=="string"){C=C.split(" ")}if(A.isArray(C)){C={left:+C[0],top:+C[1]||0}}if("left" in C){this.offset.click.left=C.left+this.margins.left}if("right" in C){this.offset.click.left=this.helperProportions.width-C.right+this.margins.left}if("top" in C){this.offset.click.top=C.top+this.margins.top}if("bottom" in C){this.offset.click.top=this.helperProportions.height-C.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var C=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0])){C.left+=this.scrollParent.scrollLeft();C.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){C={top:0,left:0}}return{top:C.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:C.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var C=this.element.position();return{top:C.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:C.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var F=this.options;if(F.containment=="parent"){F.containment=this.helper[0].parentNode}if(F.containment=="document"||F.containment=="window"){this.containment=[F.containment=="document"?0:A(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,F.containment=="document"?0:A(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(F.containment=="document"?0:A(window).scrollLeft())+A(F.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(F.containment=="document"?0:A(window).scrollTop())+(A(F.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(F.containment)&&F.containment.constructor!=Array){var G=A(F.containment);var D=G[0];if(!D){return }var E=G.offset();var C=(A(D).css("overflow")!="hidden");this.containment=[(parseInt(A(D).css("borderLeftWidth"),10)||0)+(parseInt(A(D).css("paddingLeft"),10)||0),(parseInt(A(D).css("borderTopWidth"),10)||0)+(parseInt(A(D).css("paddingTop"),10)||0),(C?Math.max(D.scrollWidth,D.offsetWidth):D.offsetWidth)-(parseInt(A(D).css("borderLeftWidth"),10)||0)-(parseInt(A(D).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(C?Math.max(D.scrollHeight,D.offsetHeight):D.offsetHeight)-(parseInt(A(D).css("borderTopWidth"),10)||0)-(parseInt(A(D).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=G}else{if(F.containment.constructor==Array){this.containment=F.containment}}},_convertPositionTo:function(F,H){if(!H){H=this.position}var D=F=="absolute"?1:-1;var E=this.options,C=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,G=(/(html|body)/i).test(C[0].tagName);return{top:(H.top+this.offset.relative.top*D+this.offset.parent.top*D-(A.browser.safari&&A.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(G?0:C.scrollTop()))*D)),left:(H.left+this.offset.relative.left*D+this.offset.parent.left*D-(A.browser.safari&&A.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():G?0:C.scrollLeft())*D))}},_generatePosition:function(D){var E=this.options,L=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,I=(/(html|body)/i).test(L[0].tagName);var H=D.pageX;var G=D.pageY;if(this.originalPosition){var C;if(this.containment){if(this.relative_container){var K=this.relative_container.offset();C=[this.containment[0]+K.left,this.containment[1]+K.top,this.containment[2]+K.left,this.containment[3]+K.top]}else{C=this.containment}if(D.pageX-this.offset.click.left<C[0]){H=C[0]+this.offset.click.left}if(D.pageY-this.offset.click.top<C[1]){G=C[1]+this.offset.click.top}if(D.pageX-this.offset.click.left>C[2]){H=C[2]+this.offset.click.left}if(D.pageY-this.offset.click.top>C[3]){G=C[3]+this.offset.click.top}}if(E.grid){var J=E.grid[1]?this.originalPageY+Math.round((G-this.originalPageY)/E.grid[1])*E.grid[1]:this.originalPageY;G=C?(!(J-this.offset.click.top<C[1]||J-this.offset.click.top>C[3])?J:(!(J-this.offset.click.top<C[1])?J-E.grid[1]:J+E.grid[1])):J;var F=E.grid[0]?this.originalPageX+Math.round((H-this.originalPageX)/E.grid[0])*E.grid[0]:this.originalPageX;H=C?(!(F-this.offset.click.left<C[0]||F-this.offset.click.left>C[2])?F:(!(F-this.offset.click.left<C[0])?F-E.grid[0]:F+E.grid[0])):F}}return{top:(G-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(A.browser.safari&&A.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(I?0:L.scrollTop())))),left:(H-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(A.browser.safari&&A.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():I?0:L.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(C,D,E){E=E||this._uiHash();A.ui.plugin.call(this,C,[D,E]);if(C=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return A.Widget.prototype._trigger.call(this,C,D,E)},plugins:{},_uiHash:function(C){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});A.extend(A.ui.draggable,{version:"1.8.24"});A.ui.plugin.add("draggable","connectToSortable",{start:function(D,F){var E=A(this).data("draggable"),G=E.options,C=A.extend({},F,{item:E.element});E.sortables=[];A(G.connectToSortable).each(function(){var H=A.data(this,"sortable");if(H&&!H.options.disabled){E.sortables.push({instance:H,shouldRevert:H.options.revert});H.refreshPositions();H._trigger("activate",D,C)}})},stop:function(D,F){var E=A(this).data("draggable"),C=A.extend({},F,{item:E.element});A.each(E.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;E.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(D);this.instance.options.helper=this.instance.options._helper;if(E.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",D,C)}})},drag:function(D,G){var F=A(this).data("draggable"),C=this;var E=function(J){var O=this.offset.click.top,N=this.offset.click.left;var H=this.positionAbs.top,L=this.positionAbs.left;var K=J.height,M=J.width;var P=J.top,I=J.left;return A.ui.isOver(H+O,L+N,P,I,K,M)};A.each(F.sortables,function(H){this.instance.positionAbs=F.positionAbs;this.instance.helperProportions=F.helperProportions;this.instance.offset.click=F.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=A(C).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return G.helper[0]};D.target=this.instance.currentItem[0];this.instance._mouseCapture(D,true);this.instance._mouseStart(D,true,true);this.instance.offset.click.top=F.offset.click.top;this.instance.offset.click.left=F.offset.click.left;this.instance.offset.parent.left-=F.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=F.offset.parent.top-this.instance.offset.parent.top;F._trigger("toSortable",D);F.dropped=this.instance.element;F.currentItem=F.element;this.instance.fromOutside=F}if(this.instance.currentItem){this.instance._mouseDrag(D)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",D,this.instance._uiHash(this.instance));this.instance._mouseStop(D,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}F._trigger("fromSortable",D);F.dropped=false}}})}});A.ui.plugin.add("draggable","cursor",{start:function(D,E){var C=A("body"),F=A(this).data("draggable").options;if(C.css("cursor")){F._cursor=C.css("cursor")}C.css("cursor",F.cursor)},stop:function(C,D){var E=A(this).data("draggable").options;if(E._cursor){A("body").css("cursor",E._cursor)}}});A.ui.plugin.add("draggable","opacity",{start:function(D,E){var C=A(E.helper),F=A(this).data("draggable").options;if(C.css("opacity")){F._opacity=C.css("opacity")}C.css("opacity",F.opacity)},stop:function(C,D){var E=A(this).data("draggable").options;if(E._opacity){A(D.helper).css("opacity",E._opacity)}}});A.ui.plugin.add("draggable","scroll",{start:function(D,E){var C=A(this).data("draggable");if(C.scrollParent[0]!=document&&C.scrollParent[0].tagName!="HTML"){C.overflowOffset=C.scrollParent.offset()}},drag:function(E,F){var D=A(this).data("draggable"),G=D.options,C=false;if(D.scrollParent[0]!=document&&D.scrollParent[0].tagName!="HTML"){if(!G.axis||G.axis!="x"){if((D.overflowOffset.top+D.scrollParent[0].offsetHeight)-E.pageY<G.scrollSensitivity){D.scrollParent[0].scrollTop=C=D.scrollParent[0].scrollTop+G.scrollSpeed}else{if(E.pageY-D.overflowOffset.top<G.scrollSensitivity){D.scrollParent[0].scrollTop=C=D.scrollParent[0].scrollTop-G.scrollSpeed}}}if(!G.axis||G.axis!="y"){if((D.overflowOffset.left+D.scrollParent[0].offsetWidth)-E.pageX<G.scrollSensitivity){D.scrollParent[0].scrollLeft=C=D.scrollParent[0].scrollLeft+G.scrollSpeed}else{if(E.pageX-D.overflowOffset.left<G.scrollSensitivity){D.scrollParent[0].scrollLeft=C=D.scrollParent[0].scrollLeft-G.scrollSpeed}}}}else{if(!G.axis||G.axis!="x"){if(E.pageY-A(document).scrollTop()<G.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()-G.scrollSpeed)}else{if(A(window).height()-(E.pageY-A(document).scrollTop())<G.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()+G.scrollSpeed)}}}if(!G.axis||G.axis!="y"){if(E.pageX-A(document).scrollLeft()<G.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()-G.scrollSpeed)}else{if(A(window).width()-(E.pageX-A(document).scrollLeft())<G.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()+G.scrollSpeed)}}}}if(C!==false&&A.ui.ddmanager&&!G.dropBehaviour){A.ui.ddmanager.prepareOffsets(D,E)}}});A.ui.plugin.add("draggable","snap",{start:function(D,E){var C=A(this).data("draggable"),F=C.options;C.snapElements=[];A(F.snap.constructor!=String?(F.snap.items||":data(draggable)"):F.snap).each(function(){var H=A(this);var G=H.offset();if(this!=C.element[0]){C.snapElements.push({item:this,width:H.outerWidth(),height:H.outerHeight(),top:G.top,left:G.left})}})},drag:function(O,L){var F=A(this).data("draggable"),M=F.options;var S=M.snapTolerance;var R=L.offset.left,Q=R+F.helperProportions.width,E=L.offset.top,D=E+F.helperProportions.height;for(var P=F.snapElements.length-1;P>=0;P--){var N=F.snapElements[P].left,K=N+F.snapElements[P].width,J=F.snapElements[P].top,U=J+F.snapElements[P].height;if(!((N-S<R&&R<K+S&&J-S<E&&E<U+S)||(N-S<R&&R<K+S&&J-S<D&&D<U+S)||(N-S<Q&&Q<K+S&&J-S<E&&E<U+S)||(N-S<Q&&Q<K+S&&J-S<D&&D<U+S))){if(F.snapElements[P].snapping){(F.options.snap.release&&F.options.snap.release.call(F.element,O,A.extend(F._uiHash(),{snapItem:F.snapElements[P].item})))}F.snapElements[P].snapping=false;continue}if(M.snapMode!="inner"){var C=Math.abs(J-D)<=S;var T=Math.abs(U-E)<=S;var H=Math.abs(N-Q)<=S;var I=Math.abs(K-R)<=S;if(C){L.position.top=F._convertPositionTo("relative",{top:J-F.helperProportions.height,left:0}).top-F.margins.top}if(T){L.position.top=F._convertPositionTo("relative",{top:U,left:0}).top-F.margins.top}if(H){L.position.left=F._convertPositionTo("relative",{top:0,left:N-F.helperProportions.width}).left-F.margins.left}if(I){L.position.left=F._convertPositionTo("relative",{top:0,left:K}).left-F.margins.left}}var G=(C||T||H||I);if(M.snapMode!="outer"){var C=Math.abs(J-E)<=S;var T=Math.abs(U-D)<=S;var H=Math.abs(N-R)<=S;var I=Math.abs(K-Q)<=S;if(C){L.position.top=F._convertPositionTo("relative",{top:J,left:0}).top-F.margins.top}if(T){L.position.top=F._convertPositionTo("relative",{top:U-F.helperProportions.height,left:0}).top-F.margins.top}if(H){L.position.left=F._convertPositionTo("relative",{top:0,left:N}).left-F.margins.left}if(I){L.position.left=F._convertPositionTo("relative",{top:0,left:K-F.helperProportions.width}).left-F.margins.left}}if(!F.snapElements[P].snapping&&(C||T||H||I||G)){(F.options.snap.snap&&F.options.snap.snap.call(F.element,O,A.extend(F._uiHash(),{snapItem:F.snapElements[P].item})))}F.snapElements[P].snapping=(C||T||H||I||G)}}});A.ui.plugin.add("draggable","stack",{start:function(D,E){var G=A(this).data("draggable").options;var F=A.makeArray(A(G.stack)).sort(function(I,H){return(parseInt(A(I).css("zIndex"),10)||0)-(parseInt(A(H).css("zIndex"),10)||0)});if(!F.length){return }var C=parseInt(F[0].style.zIndex)||0;A(F).each(function(H){this.style.zIndex=C+H});this[0].style.zIndex=C+F.length}});A.ui.plugin.add("draggable","zIndex",{start:function(D,E){var C=A(E.helper),F=A(this).data("draggable").options;if(C.css("zIndex")){F._zIndex=C.css("zIndex")}C.css("zIndex",F.zIndex)},stop:function(C,D){var E=A(this).data("draggable").options;if(E._zIndex){A(D.helper).css("zIndex",E._zIndex)}}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js-vendor/jquery/jquery-ui/jquery.ui.sortable.js' */
/*
 * jQuery UI Sortable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.sortable",A.ui.mouse,{widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var C=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?C.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit();this.ready=true},destroy:function(){A.Widget.prototype.destroy.call(this);this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var C=this.items.length-1;C>=0;C--){this.items[C].item.removeData(this.widgetName+"-item")}return this},_setOption:function(C,D){if(C==="disabled"){this.options[C]=D;this.widget()[D?"addClass":"removeClass"]("ui-sortable-disabled")}else{A.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(G,H){var F=this;if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(G);var E=null,D=this,C=A(G.target).parents().each(function(){if(A.data(this,F.widgetName+"-item")==D){E=A(this);return false}});if(A.data(G.target,F.widgetName+"-item")==D){E=A(G.target)}if(!E){return false}if(this.options.handle&&!H){var I=false;A(this.options.handle,E).find("*").andSelf().each(function(){if(this==G.target){I=true}});if(!I){return false}}this.currentItem=E;this._removeCurrentsFromItems();return true},_mouseStart:function(F,G,C){var H=this.options,D=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(F);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};A.extend(this.offset,{click:{left:F.pageX-this.offset.left,top:F.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(F);this.originalPageX=F.pageX;this.originalPageY=F.pageY;(H.cursorAt&&this._adjustOffsetFromHelper(H.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(H.containment){this._setContainment()}if(H.cursor){if(A("body").css("cursor")){this._storedCursor=A("body").css("cursor")}A("body").css("cursor",H.cursor)}if(H.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",H.opacity)}if(H.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",H.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",F,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!C){for(var E=this.containers.length-1;E>=0;E--){this.containers[E]._trigger("activate",F,D._uiHash(this))}}if(A.ui.ddmanager){A.ui.ddmanager.current=this}if(A.ui.ddmanager&&!H.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,F)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(F);return true},_mouseDrag:function(G){this.position=this._generatePosition(G);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var H=this.options,C=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-G.pageY<H.scrollSensitivity){this.scrollParent[0].scrollTop=C=this.scrollParent[0].scrollTop+H.scrollSpeed}else{if(G.pageY-this.overflowOffset.top<H.scrollSensitivity){this.scrollParent[0].scrollTop=C=this.scrollParent[0].scrollTop-H.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-G.pageX<H.scrollSensitivity){this.scrollParent[0].scrollLeft=C=this.scrollParent[0].scrollLeft+H.scrollSpeed}else{if(G.pageX-this.overflowOffset.left<H.scrollSensitivity){this.scrollParent[0].scrollLeft=C=this.scrollParent[0].scrollLeft-H.scrollSpeed}}}else{if(G.pageY-A(document).scrollTop()<H.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()-H.scrollSpeed)}else{if(A(window).height()-(G.pageY-A(document).scrollTop())<H.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()+H.scrollSpeed)}}if(G.pageX-A(document).scrollLeft()<H.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()-H.scrollSpeed)}else{if(A(window).width()-(G.pageX-A(document).scrollLeft())<H.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()+H.scrollSpeed)}}}if(C!==false&&A.ui.ddmanager&&!H.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,G)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var E=this.items.length-1;E>=0;E--){var F=this.items[E],D=F.item[0],I=this._intersectsWithPointer(F);if(!I){continue}if(F.instance!==this.currentContainer){continue}if(D!=this.currentItem[0]&&this.placeholder[I==1?"next":"prev"]()[0]!=D&&!A.ui.contains(this.placeholder[0],D)&&(this.options.type=="semi-dynamic"?!A.ui.contains(this.element[0],D):true)){this.direction=I==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(F)){this._rearrange(G,F)}else{break}this._trigger("change",G,this._uiHash());break}}this._contactContainers(G);if(A.ui.ddmanager){A.ui.ddmanager.drag(this,G)}this._trigger("sort",G,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(D,E){if(!D){return }if(A.ui.ddmanager&&!this.options.dropBehaviour){A.ui.ddmanager.drop(this,D)}if(this.options.revert){var C=this;var F=C.placeholder.offset();C.reverting=true;A(this.helper).animate({left:F.left-this.offset.parent.left-C.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:F.top-this.offset.parent.top-C.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){C._clear(D)})}else{this._clear(D,E)}return false},cancel:function(){var C=this;if(this.dragging){this._mouseUp({target:null});if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var D=this.containers.length-1;D>=0;D--){this.containers[D]._trigger("deactivate",null,C._uiHash(this));if(this.containers[D].containerCache.over){this.containers[D]._trigger("out",null,C._uiHash(this));this.containers[D].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}A.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){A(this.domPosition.prev).after(this.currentItem)}else{A(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(E){var C=this._getItemsAsjQuery(E&&E.connected);var D=[];E=E||{};A(C).each(function(){var F=(A(E.item||this).attr(E.attribute||"id")||"").match(E.expression||(/(.+)[-=_](.+)/));if(F){D.push((E.key||F[1]+"[]")+"="+(E.key&&E.expression?F[1]:F[2]))}});if(!D.length&&E.key){D.push(E.key+"=")}return D.join("&")},toArray:function(E){var C=this._getItemsAsjQuery(E&&E.connected);var D=[];E=E||{};C.each(function(){D.push(A(E.item||this).attr(E.attribute||"id")||"")});return D},_intersectsWith:function(L){var E=this.positionAbs.left,D=E+this.helperProportions.width,K=this.positionAbs.top,J=K+this.helperProportions.height;var F=L.left,C=F+L.width,M=L.top,I=M+L.height;var N=this.offset.click.top,H=this.offset.click.left;var G=(K+N)>M&&(K+N)<I&&(E+H)>F&&(E+H)<C;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>L[this.floating?"width":"height"])){return G}else{return(F<E+(this.helperProportions.width/2)&&D-(this.helperProportions.width/2)<C&&M<K+(this.helperProportions.height/2)&&J-(this.helperProportions.height/2)<I)}},_intersectsWithPointer:function(E){var F=(this.options.axis==="x")||A.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,E.top,E.height),D=(this.options.axis==="y")||A.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,E.left,E.width),H=F&&D,C=this._getDragVerticalDirection(),G=this._getDragHorizontalDirection();if(!H){return false}return this.floating?(((G&&G=="right")||C=="down")?2:1):(C&&(C=="down"?2:1))},_intersectsWithSides:function(F){var D=A.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,F.top+(F.height/2),F.height),E=A.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,F.left+(F.width/2),F.width),C=this._getDragVerticalDirection(),G=this._getDragHorizontalDirection();if(this.floating&&G){return((G=="right"&&E)||(G=="left"&&!E))}else{return C&&((C=="down"&&D)||(C=="up"&&!D))}},_getDragVerticalDirection:function(){var C=this.positionAbs.top-this.lastPositionAbs.top;return C!=0&&(C>0?"down":"up")},_getDragHorizontalDirection:function(){var C=this.positionAbs.left-this.lastPositionAbs.left;return C!=0&&(C>0?"right":"left")},refresh:function(C){this._refreshItems(C);this.refreshPositions();return this},_connectWith:function(){var C=this.options;return C.connectWith.constructor==String?[C.connectWith]:C.connectWith},_getItemsAsjQuery:function(C){var K=this;var H=[];var F=[];var I=this._connectWith();if(I&&C){for(var E=I.length-1;E>=0;E--){var J=A(I[E]);for(var D=J.length-1;D>=0;D--){var G=A.data(J[D],this.widgetName);if(G&&G!=this&&!G.options.disabled){F.push([A.isFunction(G.options.items)?G.options.items.call(G.element):A(G.options.items,G.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),G])}}}}F.push([A.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):A(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var E=F.length-1;E>=0;E--){F[E][0].each(function(){H.push(this)})}return A(H)},_removeCurrentsFromItems:function(){var E=this.currentItem.find(":data("+this.widgetName+"-item)");for(var D=0;D<this.items.length;D++){for(var C=0;C<E.length;C++){if(E[C]==this.items[D].item[0]){this.items.splice(D,1)}}}},_refreshItems:function(C){this.items=[];this.containers=[this];var I=this.items;var O=this;var G=[[A.isFunction(this.options.items)?this.options.items.call(this.element[0],C,{item:this.currentItem}):A(this.options.items,this.element),this]];var K=this._connectWith();if(K&&this.ready){for(var F=K.length-1;F>=0;F--){var L=A(K[F]);for(var E=L.length-1;E>=0;E--){var H=A.data(L[E],this.widgetName);if(H&&H!=this&&!H.options.disabled){G.push([A.isFunction(H.options.items)?H.options.items.call(H.element[0],C,{item:this.currentItem}):A(H.options.items,H.element),H]);this.containers.push(H)}}}}for(var F=G.length-1;F>=0;F--){var J=G[F][1];var D=G[F][0];for(var E=0,M=D.length;E<M;E++){var N=A(D[E]);N.data(this.widgetName+"-item",J);I.push({item:N,instance:J,width:0,height:0,left:0,top:0})}}},refreshPositions:function(C){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var E=this.items.length-1;E>=0;E--){var F=this.items[E];if(F.instance!=this.currentContainer&&this.currentContainer&&F.item[0]!=this.currentItem[0]){continue}var D=this.options.toleranceElement?A(this.options.toleranceElement,F.item):F.item;if(!C){F.width=D.outerWidth();F.height=D.outerHeight()}var G=D.offset();F.left=G.left;F.top=G.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var E=this.containers.length-1;E>=0;E--){var G=this.containers[E].element.offset();this.containers[E].containerCache.left=G.left;this.containers[E].containerCache.top=G.top;this.containers[E].containerCache.width=this.containers[E].element.outerWidth();this.containers[E].containerCache.height=this.containers[E].element.outerHeight()}}return this},_createPlaceholder:function(E){var C=E||this,F=C.options;if(!F.placeholder||F.placeholder.constructor==String){var D=F.placeholder;F.placeholder={element:function(){var G=A(document.createElement(C.currentItem[0].nodeName)).addClass(D||C.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!D){G.style.visibility="hidden"}return G},update:function(G,H){if(D&&!F.forcePlaceholderSize){return }if(!H.height()){H.height(C.currentItem.innerHeight()-parseInt(C.currentItem.css("paddingTop")||0,10)-parseInt(C.currentItem.css("paddingBottom")||0,10))}if(!H.width()){H.width(C.currentItem.innerWidth()-parseInt(C.currentItem.css("paddingLeft")||0,10)-parseInt(C.currentItem.css("paddingRight")||0,10))}}}}C.placeholder=A(F.placeholder.element.call(C.element,C.currentItem));C.currentItem.after(C.placeholder);F.placeholder.update(C,C.placeholder)},_contactContainers:function(C){var E=null,J=null;for(var G=this.containers.length-1;G>=0;G--){if(A.ui.contains(this.currentItem[0],this.containers[G].element[0])){continue}if(this._intersectsWith(this.containers[G].containerCache)){if(E&&A.ui.contains(this.containers[G].element[0],E.element[0])){continue}E=this.containers[G];J=G}else{if(this.containers[G].containerCache.over){this.containers[G]._trigger("out",C,this._uiHash(this));this.containers[G].containerCache.over=0}}}if(!E){return }if(this.containers.length===1){this.containers[J]._trigger("over",C,this._uiHash(this));this.containers[J].containerCache.over=1}else{if(this.currentContainer!=this.containers[J]){var I=10000;var H=null;var D=this.positionAbs[this.containers[J].floating?"left":"top"];for(var F=this.items.length-1;F>=0;F--){if(!A.ui.contains(this.containers[J].element[0],this.items[F].item[0])){continue}var K=this.containers[J].floating?this.items[F].item.offset().left:this.items[F].item.offset().top;if(Math.abs(K-D)<I){I=Math.abs(K-D);H=this.items[F];this.direction=(K-D>0)?"down":"up"}}if(!H&&!this.options.dropOnEmpty){return }this.currentContainer=this.containers[J];H?this._rearrange(C,H,null,true):this._rearrange(C,null,this.containers[J].element,true);this._trigger("change",C,this._uiHash());this.containers[J]._trigger("change",C,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[J]._trigger("over",C,this._uiHash(this));this.containers[J].containerCache.over=1}}},_createHelper:function(D){var E=this.options;var C=A.isFunction(E.helper)?A(E.helper.apply(this.element[0],[D,this.currentItem])):(E.helper=="clone"?this.currentItem.clone():this.currentItem);if(!C.parents("body").length){A(E.appendTo!="parent"?E.appendTo:this.currentItem[0].parentNode)[0].appendChild(C[0])}if(C[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(C[0].style.width==""||E.forceHelperSize){C.width(this.currentItem.width())}if(C[0].style.height==""||E.forceHelperSize){C.height(this.currentItem.height())}return C},_adjustOffsetFromHelper:function(C){if(typeof C=="string"){C=C.split(" ")}if(A.isArray(C)){C={left:+C[0],top:+C[1]||0}}if("left" in C){this.offset.click.left=C.left+this.margins.left}if("right" in C){this.offset.click.left=this.helperProportions.width-C.right+this.margins.left}if("top" in C){this.offset.click.top=C.top+this.margins.top}if("bottom" in C){this.offset.click.top=this.helperProportions.height-C.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var C=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0])){C.left+=this.scrollParent.scrollLeft();C.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){C={top:0,left:0}}return{top:C.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:C.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var C=this.currentItem.position();return{top:C.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:C.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var F=this.options;if(F.containment=="parent"){F.containment=this.helper[0].parentNode}if(F.containment=="document"||F.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,A(F.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(A(F.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(F.containment)){var D=A(F.containment)[0];var E=A(F.containment).offset();var C=(A(D).css("overflow")!="hidden");this.containment=[E.left+(parseInt(A(D).css("borderLeftWidth"),10)||0)+(parseInt(A(D).css("paddingLeft"),10)||0)-this.margins.left,E.top+(parseInt(A(D).css("borderTopWidth"),10)||0)+(parseInt(A(D).css("paddingTop"),10)||0)-this.margins.top,E.left+(C?Math.max(D.scrollWidth,D.offsetWidth):D.offsetWidth)-(parseInt(A(D).css("borderLeftWidth"),10)||0)-(parseInt(A(D).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,E.top+(C?Math.max(D.scrollHeight,D.offsetHeight):D.offsetHeight)-(parseInt(A(D).css("borderTopWidth"),10)||0)-(parseInt(A(D).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(F,H){if(!H){H=this.position}var D=F=="absolute"?1:-1;var E=this.options,C=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,G=(/(html|body)/i).test(C[0].tagName);return{top:(H.top+this.offset.relative.top*D+this.offset.parent.top*D-(A.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(G?0:C.scrollTop()))*D)),left:(H.left+this.offset.relative.left*D+this.offset.parent.left*D-(A.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():G?0:C.scrollLeft())*D))}},_generatePosition:function(F){var I=this.options,C=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,J=(/(html|body)/i).test(C[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var E=F.pageX;var D=F.pageY;if(this.originalPosition){if(this.containment){if(F.pageX-this.offset.click.left<this.containment[0]){E=this.containment[0]+this.offset.click.left}if(F.pageY-this.offset.click.top<this.containment[1]){D=this.containment[1]+this.offset.click.top}if(F.pageX-this.offset.click.left>this.containment[2]){E=this.containment[2]+this.offset.click.left}if(F.pageY-this.offset.click.top>this.containment[3]){D=this.containment[3]+this.offset.click.top}}if(I.grid){var H=this.originalPageY+Math.round((D-this.originalPageY)/I.grid[1])*I.grid[1];D=this.containment?(!(H-this.offset.click.top<this.containment[1]||H-this.offset.click.top>this.containment[3])?H:(!(H-this.offset.click.top<this.containment[1])?H-I.grid[1]:H+I.grid[1])):H;var G=this.originalPageX+Math.round((E-this.originalPageX)/I.grid[0])*I.grid[0];E=this.containment?(!(G-this.offset.click.left<this.containment[0]||G-this.offset.click.left>this.containment[2])?G:(!(G-this.offset.click.left<this.containment[0])?G-I.grid[0]:G+I.grid[0])):G}}return{top:(D-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(A.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(J?0:C.scrollTop())))),left:(E-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(A.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():J?0:C.scrollLeft())))}},_rearrange:function(H,G,D,F){D?D[0].appendChild(this.placeholder[0]):G.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?G.item[0]:G.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var E=this,C=this.counter;window.setTimeout(function(){if(C==E.counter){E.refreshPositions(!F)}},0)},_clear:function(E,F){this.reverting=false;var G=[],C=this;if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var D in this._storedCSS){if(this._storedCSS[D]=="auto"||this._storedCSS[D]=="static"){this._storedCSS[D]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!F){G.push(function(H){this._trigger("receive",H,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!F){G.push(function(H){this._trigger("update",H,this._uiHash())})}if(this!==this.currentContainer){if(!F){G.push(function(H){this._trigger("remove",H,this._uiHash())});G.push((function(H){return function(I){H._trigger("receive",I,this._uiHash(this))}}).call(this,this.currentContainer));G.push((function(H){return function(I){H._trigger("update",I,this._uiHash(this))}}).call(this,this.currentContainer))}}for(var D=this.containers.length-1;D>=0;D--){if(!F){G.push((function(H){return function(I){H._trigger("deactivate",I,this._uiHash(this))}}).call(this,this.containers[D]))}if(this.containers[D].containerCache.over){G.push((function(H){return function(I){H._trigger("out",I,this._uiHash(this))}}).call(this,this.containers[D]));this.containers[D].containerCache.over=0}}if(this._storedCursor){A("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!F){this._trigger("beforeStop",E,this._uiHash());for(var D=0;D<G.length;D++){G[D].call(this,E)}this._trigger("stop",E,this._uiHash())}this.fromOutside=false;return false}if(!F){this._trigger("beforeStop",E,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!F){for(var D=0;D<G.length;D++){G[D].call(this,E)}this._trigger("stop",E,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(A.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(D){var C=D||this;return{helper:C.helper,placeholder:C.placeholder||A([]),position:C.position,originalPosition:C.originalPosition,offset:C.positionAbs,item:C.currentItem,sender:D?D.element:null}}});A.extend(A.ui.sortable,{version:"1.8.24"})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js-vendor/jquery/plugins/jquery.form.js' */
/*
 * jQuery Form Plugin
 * version: 2.67 (12-MAR-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(B){B.fn.ajaxSubmit=function(Q){if(!this.length){A("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof Q=="function"){Q={success:Q}}var H=this.attr("action");var D=(typeof H==="string")?B.trim(H):"";if(D){D=(D.match(/^([^#]+)/)||[])[1]}D=D||window.location.href||"";Q=B.extend(true,{url:D,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},Q);var R={};this.trigger("form-pre-serialize",[this,Q,R]);if(R.veto){A("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(Q.beforeSerialize&&Q.beforeSerialize(this,Q)===false){A("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var F,N,L=this.formToArray(Q.semantic);if(Q.data){Q.extraData=Q.data;for(F in Q.data){if(Q.data[F] instanceof Array){for(var I in Q.data[F]){L.push({name:F,value:Q.data[F][I]})}}else{N=Q.data[F];N=B.isFunction(N)?N():N;L.push({name:F,value:N})}}}if(Q.beforeSubmit&&Q.beforeSubmit(L,this,Q)===false){A("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[L,this,Q,R]);if(R.veto){A("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var C=B.param(L);if(Q.type.toUpperCase()=="GET"){Q.url+=(Q.url.indexOf("?")>=0?"&":"?")+C;Q.data=null}else{Q.data=C}var P=this,K=[];if(Q.resetForm){K.push(function(){P.resetForm()})}if(Q.clearForm){K.push(function(){P.clearForm()})}if(!Q.dataType&&Q.target){var O=Q.success||function(){};K.push(function(T){var S=Q.replaceTarget?"replaceWith":"html";B(Q.target)[S](T).each(O,arguments)})}else{if(Q.success){K.push(Q.success)}}Q.success=function(W,T,X){var V=Q.context||Q;for(var U=0,S=K.length;U<S;U++){K[U].apply(V,[W,T,X||P,P])}};var G=B("input:file",this).length>0;var E="multipart/form-data";var J=(P.attr("enctype")==E||P.attr("encoding")==E);if(Q.iframe!==false&&(G||Q.iframe||J)){if(Q.closeKeepAlive){B.get(Q.closeKeepAlive,M)}else{M()}}else{B.ajax(Q)}this.trigger("form-submit-notify",[this,Q]);return this;function M(){var U=P[0];if(B(":input[name=submit],:input[id=submit]",U).length){alert('Error: Form elements must not have name or id of "submit".');return }var a=B.extend(true,{},B.ajaxSettings,Q);a.context=a.context||a;var d="jqFormIO"+(new Date().getTime()),Y="_"+d;var V=B('<iframe id="'+d+'" name="'+d+'" src="'+a.iframeSrc+'" />');var Z=V[0];V.css({position:"absolute",top:"-1000px",left:"-1000px"});var W={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){A("aborting upload...");var g="aborted";this.aborted=1;V.attr("src",a.iframeSrc);W.error=g;a.error&&a.error.call(a.context,W,"error",g);i&&B.event.trigger("ajaxError",[W,a,g]);a.complete&&a.complete.call(a.context,W,"error")}};var i=a.global;if(i&&!B.active++){B.event.trigger("ajaxStart")}if(i){B.event.trigger("ajaxSend",[W,a])}if(a.beforeSend&&a.beforeSend.call(a.context,W,a)===false){if(a.global){B.active--}return }if(W.aborted){return }var h=0;var X=U.clk;if(X){var e=X.name;if(e&&!X.disabled){a.extraData=a.extraData||{};a.extraData[e]=X.value;if(X.type=="image"){a.extraData[e+".x"]=U.clk_x;a.extraData[e+".y"]=U.clk_y}}}function f(){var o=P.attr("target"),g=P.attr("action");U.setAttribute("target",d);if(U.getAttribute("method")!="POST"){U.setAttribute("method","POST")}if(U.getAttribute("action")!=a.url){U.setAttribute("action",a.url)}if(!a.skipEncodingOverride){P.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(a.timeout){setTimeout(function(){h=true;c()},a.timeout)}var m=[];try{if(a.extraData){for(var p in a.extraData){m.push(B('<input type="hidden" name="'+p+'" value="'+a.extraData[p]+'" />').appendTo(U)[0])}}V.appendTo("body");Z.attachEvent?Z.attachEvent("onload",c):Z.addEventListener("load",c,false);U.submit()}finally{U.setAttribute("action",g);if(o){U.setAttribute("target",o)}else{P.removeAttr("target")}B(m).remove()}}if(a.forceSync){f()}else{setTimeout(f,10)}var k,l,j=50;function c(){if(W.aborted){return }var r=Z.contentWindow?Z.contentWindow.document:Z.contentDocument?Z.contentDocument:Z.document;if(!r||r.location.href==a.iframeSrc){return }Z.detachEvent?Z.detachEvent("onload",c):Z.removeEventListener("load",c,false);var n=true;try{if(h){throw"timeout"}var s=a.dataType=="xml"||r.XMLDocument||B.isXMLDoc(r);A("isXml="+s);if(!s&&window.opera&&(r.body==null||r.body.innerHTML=="")){if(--j){A("requeing onLoad callback, DOM not available");setTimeout(c,250);return }}W.responseText=r.body?r.body.innerHTML:r.documentElement?r.documentElement.innerHTML:null;W.responseXML=r.XMLDocument?r.XMLDocument:r;W.getResponseHeader=function(u){var t={"content-type":a.dataType};return t[u]};var q=/(json|script)/.test(a.dataType);if(q||a.textarea){var m=r.getElementsByTagName("textarea")[0];if(m){W.responseText=m.value}else{if(q){var p=r.getElementsByTagName("pre")[0];var g=r.getElementsByTagName("body")[0];if(p){W.responseText=p.textContent}else{if(g){W.responseText=g.innerHTML}}}}}else{if(a.dataType=="xml"&&!W.responseXML&&W.responseText!=null){W.responseXML=b(W.responseText)}}k=S(W,a.dataType,a)}catch(o){A("error caught:",o);n=false;W.error=o;a.error&&a.error.call(a.context,W,"error",o);i&&B.event.trigger("ajaxError",[W,a,o])}if(W.aborted){A("upload aborted");n=false}if(n){a.success&&a.success.call(a.context,k,"success",W);i&&B.event.trigger("ajaxSuccess",[W,a])}i&&B.event.trigger("ajaxComplete",[W,a]);if(i&&!--B.active){B.event.trigger("ajaxStop")}a.complete&&a.complete.call(a.context,W,n?"success":"error");setTimeout(function(){V.removeData("form-plugin-onload");V.remove();W.responseXML=null},100)}var b=B.parseXML||function(g,m){if(window.ActiveXObject){m=new ActiveXObject("Microsoft.XMLDOM");m.async="false";m.loadXML(g)}else{m=(new DOMParser()).parseFromString(g,"text/xml")}return(m&&m.documentElement&&m.documentElement.nodeName!="parsererror")?m:null};var T=B.parseJSON||function(g){return window["eval"]("("+g+")")};var S=function(q,o,n){var m=q.getResponseHeader("content-type")||"",g=o==="xml"||!o&&m.indexOf("xml")>=0,p=g?q.responseXML:q.responseText;if(g&&p.documentElement.nodeName==="parsererror"){B.error&&B.error("parsererror")}if(n&&n.dataFilter){p=n.dataFilter(p,o)}if(typeof p==="string"){if(o==="json"||!o&&m.indexOf("json")>=0){p=T(p)}else{if(o==="script"||!o&&m.indexOf("javascript")>=0){B.globalEval(p)}}}return p}}};B.fn.ajaxForm=function(C){if(this.length===0){var D={s:this.selector,c:this.context};if(!B.isReady&&D.s){A("DOM not ready, queuing ajaxForm");B(function(){B(D.s,D.c).ajaxForm(C)});return this}A("terminating; zero elements found by selector"+(B.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(E){if(!E.isDefaultPrevented()){E.preventDefault();B(this).ajaxSubmit(C)}}).bind("click.form-plugin",function(I){var H=I.target;var F=B(H);if(!(F.is(":submit,input:image"))){var E=F.closest(":submit");if(E.length==0){return }H=E[0]}var G=this;G.clk=H;if(H.type=="image"){if(I.offsetX!=undefined){G.clk_x=I.offsetX;G.clk_y=I.offsetY}else{if(typeof B.fn.offset=="function"){var J=F.offset();G.clk_x=I.pageX-J.left;G.clk_y=I.pageY-J.top}else{G.clk_x=I.pageX-H.offsetLeft;G.clk_y=I.pageY-H.offsetTop}}}setTimeout(function(){G.clk=G.clk_x=G.clk_y=null},100)})};B.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};B.fn.formToArray=function(N){var M=[];if(this.length===0){return M}var D=this[0];var G=N?D.getElementsByTagName("*"):D.elements;if(!G){return M}var I,H,F,O,E,K,C;for(I=0,K=G.length;I<K;I++){E=G[I];F=E.name;if(!F){continue}if(N&&D.clk&&E.type=="image"){if(!E.disabled&&D.clk==E){M.push({name:F,value:B(E).val()});M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}continue}O=B.fieldValue(E,true);if(O&&O.constructor==Array){for(H=0,C=O.length;H<C;H++){M.push({name:F,value:O[H]})}}else{if(O!==null&&typeof O!="undefined"){M.push({name:F,value:O})}}}if(!N&&D.clk){var J=B(D.clk),L=J[0];F=L.name;if(F&&!L.disabled&&L.type=="image"){M.push({name:F,value:J.val()});M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}}return M};B.fn.formSerialize=function(C){return B.param(this.formToArray(C))};B.fn.fieldSerialize=function(D){var C=[];this.each(function(){var H=this.name;if(!H){return }var F=B.fieldValue(this,D);if(F&&F.constructor==Array){for(var G=0,E=F.length;G<E;G++){C.push({name:H,value:F[G]})}}else{if(F!==null&&typeof F!="undefined"){C.push({name:this.name,value:F})}}});return B.param(C)};B.fn.fieldValue=function(H){for(var G=[],E=0,C=this.length;E<C;E++){var F=this[E];var D=B.fieldValue(F,H);if(D===null||typeof D=="undefined"||(D.constructor==Array&&!D.length)){continue}D.constructor==Array?B.merge(G,D):G.push(D)}return G};B.fieldValue=function(C,I){var E=C.name,N=C.type,O=C.tagName.toLowerCase();if(I===undefined){I=true}if(I&&(!E||C.disabled||N=="reset"||N=="button"||(N=="checkbox"||N=="radio")&&!C.checked||(N=="submit"||N=="image")&&C.form&&C.form.clk!=C||O=="select"&&C.selectedIndex==-1)){return null}if(O=="select"){var J=C.selectedIndex;if(J<0){return null}var L=[],D=C.options;var G=(N=="select-one");var K=(G?J+1:D.length);for(var F=(G?J:0);F<K;F++){var H=D[F];if(H.selected){var M=H.value;if(!M){M=(H.attributes&&H.attributes.value&&!(H.attributes.value.specified))?H.text:H.value}if(G){return M}L.push(M)}}return L}return B(C).val()};B.fn.clearForm=function(){return this.each(function(){B("input,select,textarea",this).clearFields()})};B.fn.clearFields=B.fn.clearInputs=function(){return this.each(function(){var D=this.type,C=this.tagName.toLowerCase();if(D=="text"||D=="password"||C=="textarea"){this.value=""}else{if(D=="checkbox"||D=="radio"){this.checked=false}else{if(C=="select"){this.selectedIndex=-1}}}})};B.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};B.fn.enable=function(C){if(C===undefined){C=true}return this.each(function(){this.disabled=!C})};B.fn.selected=function(C){if(C===undefined){C=true}return this.each(function(){var D=this.type;if(D=="checkbox"||D=="radio"){this.checked=C}else{if(this.tagName.toLowerCase()=="option"){var E=B(this).parent("select");if(C&&E[0]&&E[0].type=="select-one"){E.find("option").selected(false)}this.selected=C}}})};function A(){if(B.fn.ajaxSubmit.debug){var C="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log){window.console.log(C)}else{if(window.opera&&window.opera.postError){window.opera.postError(C)}}}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/jquery/jquery.hotkeys.js' */
(function(D){D.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",91:"meta",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",188:",",190:".",191:"/",224:"meta",219:"[",221:"]"},keypressKeys:["<",">","?"],shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"}};D.each(D.hotkeys.keypressKeys,function(E,F){D.hotkeys.shiftNums[F]=F});function A(E){this.num=0;this.timer=E>0?E:false}A.prototype.val=function(){return this.num};A.prototype.inc=function(){if(this.timer){clearTimeout(this.timeout);this.timeout=setTimeout(D.proxy(A.prototype.reset,this),this.timer)}this.num++};A.prototype.reset=function(){if(this.timer){clearTimeout(this.timeout)}this.num=0};function C(G){if(!(D.isPlainObject(G.data)||D.isArray(G.data)||typeof G.data==="string")){return }var F=G.handler,E={timer:700};(function(H){if(typeof H==="string"){E.combo=[H]}else{if(D.isArray(H)){E.combo=H}else{D.extend(E,H)}}E.combo=D.map(E.combo,function(I){return I.toLowerCase()})})(G.data);G.index=new A(E.timer);G.handler=function(M){if(this!==M.target&&(/textarea|select|input/i.test(M.target.nodeName))){return }var J=M.type!=="keypress"?D.hotkeys.specialKeys[M.which]:null,N=String.fromCharCode(M.which).toLowerCase(),K,L="",I={};if(M.altKey&&J!=="alt"){L+="alt+"}if(M.ctrlKey&&J!=="ctrl"){L+="ctrl+"}if(M.metaKey&&!M.ctrlKey&&J!=="meta"){L+="meta+"}if(M.shiftKey&&J!=="shift"){L+="shift+"}if(J){I[L+J]=true}if(N){I[L+N]=true}if(/shift+/.test(L)){I[L.replace("shift+","")+D.hotkeys.shiftNums[(J||N)]]=true}var H=G.index,O=E.combo;if(B(O[H.val()],I)){if(H.val()===O.length-1){H.reset();return F.apply(this,arguments)}else{H.inc()}}else{H.reset();if(B(O[0],I)){H.inc()}}}}function B(H,F){var I=H.split(" ");for(var G=0,E=I.length;G<E;G++){if(F[I[G]]){return true}}return false}D.each(["keydown","keyup","keypress"],function(){D.event.special[this]={add:C}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/jquery/jquery.moveto.js' */
jQuery.fn.moveTo=function(C){var G={transition:false,scrollOffset:35};var E=jQuery.extend(G,C),A=this,D=A.offset().top,B;if((jQuery(window).scrollTop()+jQuery(window).height()-this.outerHeight()<D||jQuery(window).scrollTop()+E.scrollOffset>D)&&jQuery(window).height()>E.scrollOffset){if(jQuery(window).scrollTop()+E.scrollOffset>D){B=D-(jQuery(window).height()-this.outerHeight())+E.scrollOffset}else{B=D-E.scrollOffset}if(!jQuery.fn.moveTo.animating&&E.transition){jQuery(document).trigger("moveToStarted",this);jQuery.fn.moveTo.animating=true;jQuery("html,body").animate({scrollTop:B},1000,function(){jQuery(document).trigger("moveToFinished",A);delete jQuery.fn.moveTo.animating});return this}else{var F=jQuery("html, body");if(F.is(":animated")){F.stop();delete jQuery.fn.moveTo.animating}jQuery(document).trigger("moveToStarted");jQuery(window).scrollTop(B);setTimeout(function(){jQuery(document).trigger("moveToFinished",A)},100);return this}}jQuery(document).trigger("moveToFinished",this);return this};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/event.js' */
AJS.bind=function(A,C,B){try{if(typeof B==="function"){return AJS.$(window).bind(A,C,B)}else{return AJS.$(window).bind(A,C)}}catch(D){AJS.log("error while binding: "+D.message)}};AJS.unbind=function(A,B){try{return AJS.$(window).unbind(A,B)}catch(C){AJS.log("error while unbinding: "+C.message)}};AJS.trigger=function(A,C){try{return AJS.$(window).trigger(A,C)}catch(B){AJS.log("error while triggering: "+B.message)}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/cookie.js' */
(function(){var B="AJS.conglomerate.cookie",F=/(\\|^"|"$)/g,G=/\|\|+/g,I=/"/g,C=/[.*+?|^$()[\]{\\]/g;function E(L,O){O=O||"";var N=new RegExp(D(L)+"=([^|]+)"),M=O.match(N);return M&&M[1]}function J(L,N,P){var M=new RegExp("(\\s|\\|)*\\b"+D(L)+"=[^|]*[|]*");P=P||"";P=P.replace(M,"|");if(N!==""){var O=L+"="+N;if(P.length+O.length<4020){P+="|"+O}}return P.replace(G,"|")}function H(L){return L.replace(F,"")}function K(L){var N=new RegExp("\\b"+D(L)+"=((?:[^\\\\;]+|\\\\.)*)(?:;|$)"),M=document.cookie.match(N);return M&&H(M[1])}function A(M,O,Q){var N="",P,L='"'+O.replace(I,'\\"')+'"';if(Q){P=new Date();P.setTime(+P+Q*24*60*60*1000);N="; expires="+P.toGMTString()}document.cookie=M+"="+L+N+";path=/"}function D(L){return L.replace(C,"\\$&")}AJS.Cookie={save:function(M,N,L){var O=K(B);O=J(M,N,O);A(B,O,L||365)},read:function(M,L){var O=K(B);var N=E(M,O);if(N!=null){return N}return L},erase:function(L){this.save(L,"")}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/dialog.js' */
AJS.popup=function(I){var D={width:800,height:600,closeOnOutsideClick:false,keypressListener:function(J){if(J.keyCode===27&&B.is(":visible")){F.hide()}}};if(typeof I!="object"){I={width:arguments[0],height:arguments[1],id:arguments[2]};I=AJS.$.extend({},I,arguments[3])}I=AJS.$.extend({},D,I);var B=AJS("div").addClass("aui-popup");if(I.id){B.attr("id",I.id)}var E=3000;AJS.$(".aui-dialog").each(function(){var J=AJS.$(this);E=(J.css("z-index")>E)?J.css("z-index"):E});var G=(function(K,J){I.width=(K=(K||I.width));I.height=(J=(J||I.height));B.css({marginTop:-Math.round(J/2)+"px",marginLeft:-Math.round(K/2)+"px",width:K,height:J,"z-index":parseInt(E,10)+2});return arguments.callee})(I.width,I.height);AJS.$("body").append(B);B.hide();AJS.enable(B);var C=AJS.$(".aui-blanket"),A=function(J,K){var L=AJS.$(J,K);if(L.length){L.focus();return true}return false},H=function(J){if(AJS.$(".dialog-page-body",J).find(":focus").length!==0){return }if(I.focusSelector){return A(I.focusSelector,J)}var K=":input:visible:enabled:first";if(A(K,AJS.$(".dialog-page-body",J))){return }if(A(K,AJS.$(".dialog-button-panel",J))){return }A(K,AJS.$(".dialog-page-menu",J))};var F={changeSize:function(J,K){if((J&&J!=I.width)||(K&&K!=I.height)){G(J,K)}this.show()},show:function(){var J=function(){AJS.$(document).off("keydown",I.keypressListener).on("keydown",I.keypressListener);AJS.dim();C=AJS.$(".aui-blanket");if(C.size()!=0&&I.closeOnOutsideClick){C.click(function(){if(B.is(":visible")){F.hide()}})}B.show();AJS.popup.current=this;H(B);AJS.$(document).trigger("showLayer",["popup",this])};J.call(this);this.show=J},hide:function(){AJS.$(document).unbind("keydown",I.keypressListener);C.unbind();this.element.hide();if(AJS.$(".aui-dialog:visible").size()==0){AJS.undim()}var J=document.activeElement;if(this.element.has(J).length){J.blur()}AJS.$(document).trigger("hideLayer",["popup",this]);AJS.popup.current=null;this.enable()},element:B,remove:function(){B.remove();this.element=null},disable:function(){if(!this.disabled){this.popupBlanket=AJS.$("<div class='dialog-blanket'> </div>").css({height:B.height(),width:B.width()});B.append(this.popupBlanket);this.disabled=true}},enable:function(){if(this.disabled){this.disabled=false;this.popupBlanket.remove();this.popupBlanket=null}}};return F};(function(){function F(N,L,K,M){if(!N.buttonpanel){N.addButtonPanel()}this.page=N;this.onclick=K;this._onclick=function(O){return K.call(this,N.dialog,N,O)===true};this.item=AJS("button",L).addClass("button-panel-button");if(M){this.item.addClass(M)}if(typeof K=="function"){this.item.click(this._onclick)}N.buttonpanel.append(this.item);this.id=N.button.length;N.button[this.id]=this}function A(O,M,L,N,K){if(!O.buttonpanel){O.addButtonPanel()}if(!K){K="#"}this.page=O;this.onclick=L;this._onclick=function(P){return L.call(this,O.dialog,O,P)===true};this.item=AJS("a",M).attr("href",K).addClass("button-panel-link");if(N){this.item.addClass(N)}if(typeof L=="function"){this.item.click(this._onclick)}O.buttonpanel.append(this.item);this.id=O.button.length;O.button[this.id]=this}function B(M,L){var K=M=="left"?-1:1;return function(Q){var O=this.page[L];if(this.id!=((K==1)?O.length-1:0)){K*=(Q||1);O[this.id+K].item[(K<0?"before":"after")](this.item);O.splice(this.id,1);O.splice(this.id+K,0,this);for(var N=0,P=O.length;N<P;N++){if(L=="panel"&&this.page.curtab==O[N].id){this.page.curtab=N}O[N].id=N}}return this}}function G(K){return function(){this.page[K].splice(this.id,1);for(var L=0,M=this.page[K].length;L<M;L++){this.page[K][L].id=L}this.item.remove()}}F.prototype.moveUp=F.prototype.moveLeft=B("left","button");F.prototype.moveDown=F.prototype.moveRight=B("right","button");F.prototype.remove=G("button");F.prototype.html=function(K){return this.item.html(K)};F.prototype.onclick=function(K){if(typeof K=="undefined"){return this.onclick}else{this.item.unbind("click",this._onclick);this._onclick=function(L){return K.call(this,page.dialog,page,L)===true};if(typeof K=="function"){this.item.click(this._onclick)}}};var D=20;var H=function(Q,R,K,P,N){if(!(K instanceof AJS.$)){K=AJS.$(K)}this.dialog=Q.dialog;this.page=Q;this.id=Q.panel.length;this.button=AJS("button").html(R).addClass("item-button");if(N){this.button[0].id=N}this.item=AJS("li").append(this.button).addClass("page-menu-item");this.body=AJS("div").append(K).addClass("dialog-panel-body").css("height",Q.dialog.height+"px");this.padding=D;if(P){this.body.addClass(P)}var M=Q.panel.length,O=this;Q.menu.append(this.item);Q.body.append(this.body);Q.panel[M]=this;var L=function(){var S;if(Q.curtab+1){S=Q.panel[Q.curtab];S.body.hide();S.item.removeClass("selected");(typeof S.onblur=="function")&&S.onblur()}Q.curtab=O.id;O.body.show();O.item.addClass("selected");(typeof O.onselect=="function")&&O.onselect();(typeof Q.ontabchange=="function")&&Q.ontabchange(O,S)};if(!this.button.click){AJS.log("atlassian-dialog:Panel:constructor - this.button.click false");this.button.onclick=L}else{this.button.click(L)}L();if(M==0){Q.menu.css("display","none")}else{Q.menu.show()}};H.prototype.select=function(){this.button.click()};H.prototype.moveUp=H.prototype.moveLeft=B("left","panel");H.prototype.moveDown=H.prototype.moveRight=B("right","panel");H.prototype.remove=G("panel");H.prototype.html=function(K){if(K){this.body.html(K);return this}else{return this.body.html()}};H.prototype.setPadding=function(K){if(!isNaN(+K)){this.body.css("padding",+K);this.padding=+K;this.page.recalcSize()}return this};var E=56;var C=51;var I=50;var J=function(K,L){this.dialog=K;this.id=K.page.length;this.element=AJS("div").addClass("dialog-components");this.body=AJS("div").addClass("dialog-page-body");this.menu=AJS("ul").addClass("dialog-page-menu").css("height",K.height+"px");this.body.append(this.menu);this.curtab;this.panel=[];this.button=[];if(L){this.body.addClass(L)}K.popup.element.append(this.element.append(this.menu).append(this.body));K.page[K.page.length]=this};J.prototype.recalcSize=function(){var K=this.header?E:0;var N=this.buttonpanel?C:0;for(var M=this.panel.length;M--;){var L=this.dialog.height-K-N;this.panel[M].body.css("height",L);this.menu.css("height",L)}};J.prototype.addButtonPanel=function(){this.buttonpanel=AJS("div").addClass("dialog-button-panel");this.element.append(this.buttonpanel)};J.prototype.addPanel=function(N,K,M,L){new H(this,N,K,M,L);this.recalcSize();return this};J.prototype.addHeader=function(L,K){if(this.header){this.header.remove()}this.header=AJS("h2").text(L||"").addClass("dialog-title");K&&this.header.addClass(K);this.element.prepend(this.header);this.recalcSize();return this};J.prototype.addButton=function(L,K,M){new F(this,L,K,M);this.recalcSize();return this};J.prototype.addLink=function(M,L,N,K){new A(this,M,L,N,K);this.recalcSize();return this};J.prototype.gotoPanel=function(K){this.panel[K.id||K].select()};J.prototype.getCurrentPanel=function(){return this.panel[this.curtab]};J.prototype.hide=function(){this.element.hide()};J.prototype.show=function(){this.element.show()};J.prototype.remove=function(){this.element.remove()};AJS.Dialog=function(M,K,N){var L={};if(!+M){L=Object(M);M=L.width;K=L.height;N=L.id}this.height=K||480;this.width=M||640;this.id=N;L=AJS.$.extend({},L,{width:this.width,height:this.height,id:this.id});this.popup=AJS.popup(L);this.popup.element.addClass("aui-dialog");this.page=[];this.curpage=0;new J(this)};AJS.Dialog.prototype.addHeader=function(L,K){this.page[this.curpage].addHeader(L,K);return this};AJS.Dialog.prototype.addButton=function(L,K,M){this.page[this.curpage].addButton(L,K,M);return this};AJS.Dialog.prototype.addLink=function(M,L,N,K){this.page[this.curpage].addLink(M,L,N,K);return this};AJS.Dialog.prototype.addSubmit=function(L,K){this.page[this.curpage].addButton(L,K,"button-panel-submit-button");return this};AJS.Dialog.prototype.addCancel=function(L,K){this.page[this.curpage].addLink(L,K,"button-panel-cancel-link");return this};AJS.Dialog.prototype.addButtonPanel=function(){this.page[this.curpage].addButtonPanel();return this};AJS.Dialog.prototype.addPanel=function(N,K,M,L){this.page[this.curpage].addPanel(N,K,M,L);return this};AJS.Dialog.prototype.addPage=function(K){new J(this,K);this.page[this.curpage].hide();this.curpage=this.page.length-1;return this};AJS.Dialog.prototype.nextPage=function(){this.page[this.curpage++].hide();if(this.curpage>=this.page.length){this.curpage=0}this.page[this.curpage].show();return this};AJS.Dialog.prototype.prevPage=function(){this.page[this.curpage--].hide();if(this.curpage<0){this.curpage=this.page.length-1}this.page[this.curpage].show();return this};AJS.Dialog.prototype.gotoPage=function(K){this.page[this.curpage].hide();this.curpage=K;if(this.curpage<0){this.curpage=this.page.length-1}else{if(this.curpage>=this.page.length){this.curpage=0}}this.page[this.curpage].show();return this};AJS.Dialog.prototype.getPanel=function(L,M){var K=(M==null)?this.curpage:L;if(M==null){M=L}return this.page[K].panel[M]};AJS.Dialog.prototype.getPage=function(K){return this.page[K]};AJS.Dialog.prototype.getCurrentPanel=function(){return this.page[this.curpage].getCurrentPanel()};AJS.Dialog.prototype.gotoPanel=function(M,L){if(L!=null){var K=M.id||M;this.gotoPage(K)}this.page[this.curpage].gotoPanel(typeof L=="undefined"?M:L)};AJS.Dialog.prototype.show=function(){this.popup.show();AJS.trigger("show.dialog",{dialog:this});return this};AJS.Dialog.prototype.hide=function(){this.popup.hide();AJS.trigger("hide.dialog",{dialog:this});return this};AJS.Dialog.prototype.remove=function(){this.popup.hide();this.popup.remove();AJS.trigger("remove.dialog",{dialog:this})};AJS.Dialog.prototype.disable=function(){this.popup.disable();return this};AJS.Dialog.prototype.enable=function(){this.popup.enable();return this};AJS.Dialog.prototype.get=function(S){var L=[],R=this;var T='#([^"][^ ]*|"[^"]*")';var U=":(\\d+)";var M="page|panel|button|header";var N="(?:("+M+")(?:"+T+"|"+U+")?|"+T+")";var P=new RegExp("(?:^|,)\\s*"+N+"(?:\\s+"+N+")?\\s*(?=,|$)","ig");(S+"").replace(P,function(f,V,e,W,c,b,Y,g,d){V=V&&V.toLowerCase();var X=[];if(V=="page"&&R.page[W]){X.push(R.page[W]);V=b;V=V&&V.toLowerCase();e=Y;W=g;c=d}else{X=R.page}e=e&&(e+"").replace(/"/g,"");Y=Y&&(Y+"").replace(/"/g,"");c=c&&(c+"").replace(/"/g,"");d=d&&(d+"").replace(/"/g,"");if(V||c){for(var a=X.length;a--;){if(c||(V=="panel"&&(e||(!e&&W==null)))){for(var Z=X[a].panel.length;Z--;){if(X[a].panel[Z].button.html()==c||X[a].panel[Z].button.html()==e||(V=="panel"&&!e&&W==null)){L.push(X[a].panel[Z])}}}if(c||(V=="button"&&(e||(!e&&W==null)))){for(var Z=X[a].button.length;Z--;){if(X[a].button[Z].item.html()==c||X[a].button[Z].item.html()==e||(V=="button"&&!e&&W==null)){L.push(X[a].button[Z])}}}if(X[a][V]&&X[a][V][W]){L.push(X[a][V][W])}if(V=="header"&&X[a].header){L.push(X[a].header)}}}else{L=L.concat(X)}});var Q={length:L.length};for(var O=L.length;O--;){Q[O]=L[O];for(var K in L[O]){if(!(K in Q)){(function(V){Q[V]=function(){for(var W=this.length;W--;){if(typeof this[W][V]=="function"){this[W][V].apply(this[W],arguments)}}}})(K)}}}return Q};AJS.Dialog.prototype.updateHeight=function(){var K=0;var M=AJS.$(window).height()-E-C-(I*2);for(var L=0;this.getPanel(L);L++){if(this.getPanel(L).body.css({height:"auto",display:"block"}).outerHeight()>K){K=Math.min(M,this.getPanel(L).body.outerHeight())}if(L!==this.page[this.curpage].curtab){this.getPanel(L).body.css({display:"none"})}}for(L=0;this.getPanel(L);L++){this.getPanel(L).body.css({height:K||this.height})}this.page[0].menu.height(K);this.height=K+E+C+1;this.popup.changeSize(undefined,this.height)};AJS.Dialog.prototype.isMaximised=function(){return this.popup.element.outerHeight()>=AJS.$(window).height()-(I*2)};AJS.Dialog.prototype.getCurPanel=function(){return this.getPanel(this.page[this.curpage].curtab)};AJS.Dialog.prototype.getCurPanelButton=function(){return this.getCurPanel().button}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/inline-dialog.js' */
(function(B){AJS.InlineDialog=function(Y,K,O,M){if(M&&M.getArrowAttributes){AJS.log("DEPRECATED: getArrowAttributes - See https://ecosystem.atlassian.net/browse/AUI-1362")}if(M&&M.getArrowPath){AJS.log("DEPRECATED: getArrowPath - See https://ecosystem.atlassian.net/browse/AUI-1362")}if(typeof K==="undefined"){K=String(Math.random()).replace(".","");if(B("#inline-dialog-"+K+", #arrow-"+K+", #inline-dialog-shim-"+K).length){throw"GENERATED_IDENTIFIER_NOT_UNIQUE"}}var W=B.extend(false,AJS.InlineDialog.opts,M);var S=function(){return window.Raphael&&M&&(M.getArrowPath||M.getArrowAttributes)};var G;var N;var h;var R=false;var X=false;var f=false;var g;var U;var D=B('<div id="inline-dialog-'+K+'" class="aui-inline-dialog"><div class="contents"></div><div id="arrow-'+K+'" class="arrow"></div></div>');var J=B("#arrow-"+K,D);var d=D.find(".contents");if(!S()){D.find(".arrow").addClass("aui-css-arrow")}d.css("width",W.width+"px");d.mouseover(function(k){clearTimeout(N);D.unbind("mouseover")}).mouseout(function(){b()});var a=function(){if(!G){G={popup:D,hide:function(){b(0)},id:K,show:function(){V()},persistent:W.persistent?true:false,reset:function(){function m(o,n){o.css(n.popupCss);if(S()){if(n.displayAbove){n.arrowCss.top-=B.browser.msie?10:9}if(!o.arrowCanvas){o.arrowCanvas=Raphael("arrow-"+K,16,16)}var p=W.getArrowPath,q=B.isFunction(p)?p(n):p;o.arrowCanvas.path(q).attr(W.getArrowAttributes())}else{if(n.displayAbove&&!J.hasClass("aui-bottom-arrow")){J.addClass("aui-bottom-arrow")}else{if(!n.displayAbove){J.removeClass("aui-bottom-arrow")}}}J.css(n.arrowCss)}var k=W.calculatePositions(D,U,g,W);m(D,k);D.fadeIn(W.fadeTime,function(){});if(B.browser.msie&&~~(B.browser.version)<10){var l=B("#inline-dialog-shim-"+K);if(!l.length){B(D).prepend(B('<iframe class = "inline-dialog-shim" id="inline-dialog-shim-'+K+'" frameBorder="0" src="javascript:false;"></iframe>'))}l.css({width:d.outerWidth(),height:d.outerHeight()})}}}}return G};var V=function(){if(D.is(":visible")){return }h=setTimeout(function(){if(!f||!X){return }W.addActiveClass&&B(Y).addClass("active");R=true;if(!W.persistent){e()}AJS.InlineDialog.current=a();B(document).trigger("showLayer",["inlineDialog",a()]);a().reset()},W.showDelay)};var b=function(k){if(typeof k=="undefined"&&W.persistent){return }X=false;if(R&&W.preHideCallback.call(D[0].popup)){k=(k==null)?W.hideDelay:k;clearTimeout(N);clearTimeout(h);if(k!=null){N=setTimeout(function(){I();W.addActiveClass&&B(Y).removeClass("active");D.fadeOut(W.fadeTime,function(){W.hideCallback.call(D[0].popup)});if(D.arrowCanvas){D.arrowCanvas.remove();D.arrowCanvas=null}R=false;X=false;B(document).trigger("hideLayer",["inlineDialog",a()]);AJS.InlineDialog.current=null;if(!W.cacheContent){f=false;T=false}},k)}}};var c=function(n,l){var k=B(l);W.upfrontCallback.call({popup:D,hide:function(){b(0)},id:K,show:function(){V()}});D.each(function(){if(typeof this.popup!="undefined"){this.popup.hide()}});if(W.closeOthers){B(".aui-inline-dialog").each(function(){!this.popup.persistent&&this.popup.hide()})}U={target:k};if(!n){g={x:k.offset().left,y:k.offset().top}}else{g={x:n.pageX,y:n.pageY}}if(!R){clearTimeout(h)}X=true;var m=function(){T=false;f=true;W.initCallback.call({popup:D,hide:function(){b(0)},id:K,show:function(){V()}});V()};if(!T){T=true;if(B.isFunction(O)){O(d,l,m)}else{B.get(O,function(p,o,q){d.html(W.responseHandler(p,o,q));f=true;W.initCallback.call({popup:D,hide:function(){b(0)},id:K,show:function(){V()}});V()})}}clearTimeout(N);if(!R){V()}return false};D[0].popup=a();var T=false;var Q=false;var P=function(){if(!Q){B(W.container).append(D);Q=true}};var L=B(Y);if(W.onHover){if(W.useLiveEvents){if(L.selector){B(document).on("mousemove",L.selector,function(k){P();c(k,this)}).on("mouseout",L.selector,function(){b()})}else{AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.")}}else{L.mousemove(function(k){P();c(k,this)}).mouseout(function(){b()})}}else{if(!W.noBind){if(W.useLiveEvents){if(L.selector){B(document).on("click",L.selector,function(k){P();c(k,this);return false}).on("mouseout",L.selector,function(){b()})}else{AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.")}}else{L.click(function(k){P();c(k,this);return false}).mouseout(function(){b()})}}}var e=function(){H();C()};var I=function(){Z();j()};var F=false;var E=K+".inline-dialog-check";var H=function(){if(!F){B("body").bind("click."+E,function(l){var k=B(l.target);if(k.closest("#inline-dialog-"+K+" .contents").length===0){b(0)}});F=true}};var Z=function(){if(F){B("body").unbind("click."+E)}F=false};var i=function(k){if(k.keyCode===27){b(0)}};var C=function(){B(document).on("keydown",i)};var j=function(){B(document).off("keydown",i)};D.show=function(k){if(k){k.stopPropagation()}P();c(null,Y)};D.hide=function(){b(0)};D.refresh=function(){if(R){a().reset()}};D.getOptions=function(){return W};return D};function A(D){var C=B(D);var E=B.extend({left:0,top:0},C.offset());return{left:E.left,top:E.top,width:C.outerWidth(),height:C.outerHeight()}}AJS.InlineDialog.opts={onTop:false,responseHandler:function(D,C,E){return D},closeOthers:true,isRelativeToMouse:false,addActiveClass:true,onHover:false,useLiveEvents:false,noBind:false,fadeTime:100,persistent:false,hideDelay:10000,showDelay:0,width:300,offsetX:0,offsetY:10,arrowOffsetX:0,container:"body",cacheContent:true,displayShadow:true,preHideCallback:function(){return true},hideCallback:function(){},initCallback:function(){},upfrontCallback:function(){},calculatePositions:function(D,I,S,C){C=C||{};var P=A(window);var F=A(I.target);var O=A(D);var E=A(D.find(".arrow"));var J=F.left+F.width/2;var N=(window.pageYOffset||document.documentElement.scrollTop)+P.height;var H=10;O.top=F.top+F.height+~~C.offsetY;O.left=F.left+~~C.offsetX;var Q=P.width-(O.left+O.width+H);E.left=J-O.left+~~C.arrowOffsetX;E.top=-(E.height/2);var L=F.top>O.height;var M=(O.top+O.height)<N;var K=(!M&&L)||(L&&C.onTop);if(K){O.top=F.top-O.height-(E.height/2);E.top=O.height}if(C.isRelativeToMouse){if(Q<0){O.right=H;O.left="auto";E.left=S.x-(P.width-O.width)}else{O.left=S.x-20;E.left=S.x-O.left}}else{if(Q<0){O.right=H;O.left="auto";var G=P.width-O.right;var R=G-O.width;E.right="auto";E.left=J-R-E.width/2}else{if(O.width<=F.width/2){E.left=O.width/2;O.left=J-O.width/2}}}return{displayAbove:K,popupCss:{left:O.left,top:O.top,right:O.right},arrowCss:{left:E.left,top:E.top,right:E.right}}},getArrowPath:function(C){return C.displayAbove?"M0,8L8,16,16,8":"M0,8L8,0,16,8"},getArrowAttributes:function(){return{fill:"#fff",stroke:"#ccc"}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/firebug.js' */
AJS.warnAboutFirebug=function(A){AJS.log("DEPRECATED: please remove all uses of AJS.warnAboutFirebug")};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/forms.js' */
AJS.inlineHelp=function(){AJS.$(".icon-inline-help").click(function(){var A=AJS.$(this).siblings(".field-help");if(A.hasClass("hidden")){A.removeClass("hidden")}else{A.addClass("hidden")}})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/keyCode.js' */
(function(A){AJS.keyCode={ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/messages.js' */
(function(){var A=500;var C=5000;var B=100;AJS.messages={setup:function(){AJS.messages.createMessage("generic");AJS.messages.createMessage("error");AJS.messages.createMessage("warning");AJS.messages.createMessage("info");AJS.messages.createMessage("success");AJS.messages.createMessage("hint");AJS.messages.makeCloseable();AJS.messages.makeFadeout()},makeCloseable:function(D){AJS.$(D||"div.aui-message.closeable").each(function(){var F=AJS.$(this),E=AJS.$('<span class="aui-icon icon-close" role="button" tabindex="0"></span>').click(function(){F.closeMessage()}).keypress(function(G){if((G.which===AJS.keyCode.ENTER)||(G.which===AJS.keyCode.SPACE)){F.closeMessage();G.preventDefault()}});F.append(E)})},makeFadeout:function(E,D,F){D=(typeof D!="undefined")?D:C;F=(typeof F!="undefined")?F:A;AJS.$(E||"div.aui-message.fadeout").each(function(){var J=AJS.$(this);var L=false;var H=false;function G(){J.stop(true,false).delay(D).fadeOut(F,function(){J.closeMessage()})}function K(){J.stop(true,false).fadeTo(B,1)}function I(){return !L&&!H}J.focusin(function(){L=true;K()}).focusout(function(){L=false;if(I()){G()}}).hover(function(){H=true;K()},function(){H=false;if(I()){G()}});G()})},template:'<div class="aui-message {type} {closeable} {shadowed} {fadeout}"><p class="title"><span class="aui-icon icon-{type}"></span><strong>{title}</strong></p>{body}<!-- .aui-message --></div>',createMessage:function(D){AJS.messages[D]=function(G,I){var H=this.template,F,E;if(!I){I=G;G="#aui-message-bar"}I.closeable=(I.closeable!==false);I.shadowed=(I.shadowed!==false);F=AJS.$(AJS.template(H).fill({type:D,closeable:I.closeable?"closeable":"",shadowed:I.shadowed?"shadowed":"",fadeout:I.fadeout?"fadeout":"",title:I.title||"","body:html":I.body||""}).toString());if(I.id){if(/[#\'\"\.\s]/g.test(I.id)){AJS.log("AJS.Messages error: ID rejected, must not include spaces, hashes, dots or quotes.")}else{F.attr("id",I.id)}}E=I.insert||"append";if(E==="prepend"){F.prependTo(G)}else{F.appendTo(G)}I.closeable&&AJS.messages.makeCloseable(F);I.fadeout&&AJS.messages.makeFadeout(F,I.delay,I.duration);return F}}};AJS.$.fn.closeMessage=function(){var D=AJS.$(this);if(D.hasClass("aui-message","closeable")){D.stop(true);D.trigger("messageClose",[this]).remove();AJS.$(document).trigger("aui-message-close",[this])}};AJS.$(function(){AJS.messages.setup()})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/tabs.js' */
(function(){var E=/#.*/,F="active-tab",A="active-pane",B="aria-selected",G="aria-hidden";function D(){var I=AJS.$(this);AJS._addID(I);I.attr("role","tab");var H=I.attr("href");AJS.$(H).attr("aria-labelledby",I.attr("id"));if(I.parent().hasClass(F)){I.attr(B,"true")}else{I.attr(B,"false")}}function C(H){AJS.tabs.change(AJS.$(this),H);H&&H.preventDefault()}AJS.tabs={setup:function(){var H=AJS.$(".aui-tabs:not(.aui-tabs-disabled)");H.attr("role","application");H.find(".tabs-pane").each(function(){var M=AJS.$(this);M.attr("role","tabpanel");if(M.hasClass(A)){M.attr(G,"false")}else{M.attr(G,"true")}});for(var I=0,J=H.length;I<J;I++){var K=H.eq(I);if(!K.data("aui-tab-events-bound")){var L=K.children("ul.tabs-menu");L.attr("role","tablist");L.children("li").attr("role","presentation");L.find("> .menu-item a").each(D);L.delegate("a","click",C);K.data("aui-tab-events-bound",true)}}AJS.$(".aui-tabs.vertical-tabs").find("a").each(function(){var N=AJS.$(this);if(!N.attr("title")){var M=N.children("strong:first");if(AJS.isClipped(M)){N.attr("title",N.text())}}})},change:function(I,J){var H=AJS.$(I.attr("href").match(E)[0]);H.addClass(A).attr(G,"false").siblings(".tabs-pane").removeClass(A).attr(G,"true");I.parent("li.menu-item").addClass(F).siblings(".menu-item").removeClass(F);I.closest(".tabs-menu").find("a").attr(B,"false");I.attr(B,"true");I.trigger("tabSelect",{tab:I,pane:H})}};AJS.$(AJS.tabs.setup)})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/template.js' */
AJS.template=(function(G){var J=/\{([^\}]+)\}/g,D=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,H=/([^\\])'/g,F=function(O,N,P,L){var M=P;N.replace(D,function(S,R,Q,U,T){R=R||U;if(M){if(R+":html" in M){M=M[R+":html"];L=true}else{if(R in M){M=M[R]}}if(T&&typeof M=="function"){M=M()}}});if(M==null||M==P){M=O}M=String(M);if(!L){M=E.escape(M)}return M},B=function(L){this.template=this.template.replace(J,function(N,M){return F(N,M,L,true)});return this},K=function(L){this.template=this.template.replace(J,function(N,M){return F(N,M,L)});return this},C=function(){return this.template};var E=function(M){function L(){return L.template}L.template=String(M);L.toString=L.valueOf=C;L.fill=K;L.fillHtml=B;return L},A={},I=[];E.load=function(L){L=String(L);if(!A.hasOwnProperty(L)){I.length>=1000&&delete A[I.shift()];I.push(L);A[L]=G("script[title='"+L.replace(H,"$1\\'")+"']")[0].text}return this(A[L])};E.escape=AJS.escapeHtml;return E})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/whenitype.js' */
(function(A,D){var C=navigator.platform.indexOf("Mac")!==-1;var B=/^(backspace|tab|r(ight|eturn)|s(hift|pace|croll)|c(trl|apslock)|alt|pa(use|ge(up|down))|e(sc|nd)|home|left|up|d(el|own)|insert|f\d\d?|numlock|meta)/i;A.whenIType=function(P){var O=[],I=D.Callbacks();function F(Q){if(!AJS.popup.current&&I){I.fire(Q)}}function G(Q){Q.preventDefault()}function N(Q){var R=Q&&Q.split?D.trim(Q).split(" "):[Q];D.each(R,function(){H(this)})}function K(R){var Q=R.length;while(Q--){if(R[Q].length>1&&R[Q]!=="space"){return true}}return false}function H(S){var R=S instanceof Array?S:M(S.toString());var Q=K(R)?"keydown":"keypress";O.push(R);D(document).bind(Q,R,F);D(document).bind(Q+" keyup",R,G)}function M(S){var U=[],T="",R,Q;while(S.length){if(R=S.match(/^(ctrl|meta|shift|alt)\+/i)){T+=R[0];S=S.substring(R[0].length)}else{if(Q=S.match(B)){U.push(T+Q[0]);S=S.substring(Q[0].length);T=""}else{U.push(T+S[0]);S=S.substring(1);T=""}}}return U}function J(S){var U=D(S),W=U.attr("title")||"",V=O.slice();var R=U.data("kbShortcutAppended")||"";var Q=!R;var T=Q?W:W.substring(0,W.length-R.length);while(V.length){R=E(V.shift().slice(),R,Q);Q=false}if(C){R=R.replace(/Meta/ig,"\u2318").replace(/Shift/ig,"\u21E7")}U.attr("title",T+R);U.data("kbShortcutAppended",R)}function L(R){var S=D(R);var Q=S.data("kbShortcutAppended");if(!Q){return }var T=S.attr("title");S.attr("title",T.replace(Q,""));S.removeData("kbShortcutAppended")}function E(S,R,Q){if(Q){R+=" ("+AJS.format("{0}",S.shift())}else{R=R.replace(/\)$/,"");R+=AJS.format("or {0}",S.shift())}D.each(S,function(){R+=" "+AJS.format(", {0}",this)});R+=")";return R}N(P);return A.whenIType.makeShortcut({executor:I,bindKeys:N,addShortcutsToTitle:J,removeShortcutsFromTitle:L,keypressHandler:F,defaultPreventionHandler:G})};A.whenIType.makeShortcut=function(M){var H=M.executor;var K=M.bindKeys;var I=M.addShortcutsToTitle;var J=M.removeShortcutsFromTitle;var F=M.keypressHandler;var G=M.defaultPreventionHandler;var L=[];function E(N){return function(O,Q){Q=Q||{};var P=Q.focusedClass||"focused";var R=Q.hasOwnProperty("wrapAround")?Q.wrapAround:true;var S=Q.hasOwnProperty("escToCancel")?Q.escToCancel:true;H.add(function(){var V=D(O),U=V.filter("."+P),T=U.length===0?undefined:{transition:true};if(S){D(document).one("keydown",function(W){if(W.keyCode===AJS.keyCode.ESCAPE&&U){U.removeClass(P)}})}if(U.length){U.removeClass(P)}U=N(U,V,R);if(U&&U.length>0){U.addClass(P);U.moveTo(T);if(U.is("a")){U.focus()}else{U.find("a:first").focus()}}});return this}}return{moveToNextItem:E(function(P,Q,O){var N;if(O&&P.length===0){return Q.eq(0)}else{N=D.inArray(P.get(0),Q);if(N<Q.length-1){N=N+1;return Q.eq(N)}else{if(O){return Q.eq(0)}}}return P}),moveToPrevItem:E(function(P,Q,O){var N;if(O&&P.length===0){return Q.filter(":last")}else{N=D.inArray(P.get(0),Q);if(N>0){N=N-1;return Q.eq(N)}else{if(O){return Q.filter(":last")}}}return P}),click:function(N){L.push(N);I(N);H.add(function(){var O=D(N);if(O.length>0){O.click()}});return this},goTo:function(N){H.add(function(){window.location.href=N});return this},followLink:function(N){L.push(N);I(N);H.add(function(){var O=D(N)[0];if(O&&{a:true,link:true}[O.nodeName.toLowerCase()]){window.location.href=O.href}});return this},execute:function(O){var N=this;H.add(function(){O.apply(N,arguments)});return this},evaluate:function(N){N.call(this)},moveToAndClick:function(N){L.push(N);I(N);H.add(function(){var O=D(N);if(O.length>0){O.click();O.moveTo()}});return this},moveToAndFocus:function(N){L.push(N);I(N);H.add(function(P){var O=AJS.$(N);if(O.length>0){O.focus();O.moveTo&&O.moveTo();if(O.is(":input")){P.preventDefault()}}});return this},or:function(N){K(N);return this},unbind:function(){D(document).unbind("keydown keypress",F).unbind("keydown keypress keyup",G);for(var O=0,N=L.length;O<N;O++){J(L[O])}L=[]}}};A.whenIType.fromJSON=function(G,F){var E=[];if(G){D.each(G,function(I,J){var H=J.op,M=J.param,L;if(H==="execute"||H==="evaluate"){L=[new Function(M)]}else{if(/^\[[^\]\[]*,[^\]\[]*\]$/.test(M)){try{L=JSON.parse(M)}catch(K){AJS.error("When using a parameter array, array must be in strict JSON format: "+M)}if(!D.isArray(L)){AJS.error("Badly formatted shortcut parameter. String or JSON Array of parameters required: "+M)}}else{L=[M]}}D.each(J.keys,function(){var O=this;if(F&&C){O=D.map(this,function(P){return P.replace(/ctrl/i,"meta")})}var N=AJS.whenIType(O);N[H].apply(N,L);E.push(N)})})}return E};D(document).bind("iframeAppended",function(F,E){D(E).load(function(){var G=D(E).contents();G.bind("keyup keydown keypress",function(H){if(D.browser.safari&&H.type==="keypress"){return }if(!D(H.target).is(":input")){D.event.trigger(H,arguments,document,true)}})})})})(AJS,AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/jquery/jquery.is-dirty.js' */
jQuery.fn.isDirty=function(){var B,A=[];window.onbeforeunload=function(){var C=window.onbeforeunload;if(B!==false){jQuery.each(A,function(){if(this.initVal!==AJS.$(this).val()){B=true;return false}})}if(B){window.onbeforeunload=null;window.setTimeout(function(){jQuery(document).bind("mousemove",function(){window.onbeforeunload=C;jQuery(document).unbind("mousemove",arguments.callee)})},1000);B=void (0);return AJS.params.dirtyMessage||""}};return function(D){if(this.length===0){return }function C(F){var E=jQuery(this);jQuery.fn.isDirty.fieldInFocus=E;if(jQuery.inArray(this,A)===-1){this.initVal=E.val();A.push(this);E.die(F.type,C)}}jQuery(":not(:input)").live("click",function(){delete jQuery.fn.isDirty.fieldInFocus});jQuery(":input[type != hidden]",this.selector).bind("keydown",C).bind("keypress",C).bind("click",C);jQuery(D.ignoreUnloadFromElems).live("mousedown",function(){B=false});this.each(function(){this.onsubmit=function(E){return function(){B=false;if(E){return E.apply(this,arguments)}}}(this.onsubmit);AJS.$(this).submit(function(){B=false})});return this}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/jquery/jquery.progressbar.js' */
(function(A){A.fn.progressBar=function(I,L){var C=this;var F={height:"1em",showPercentage:true};var B=A.extend(F,L);var J=C.attr("id")+"-incomplete-bar";var D=C.attr("id")+"-complete-bar";var K=C.attr("id")+"-percent-complete-text";if(A("#"+J).length==0){var E=A(document.createElement("div"));E.attr("id",J);E.css({width:"90%",border:"solid 1px #ccc","float":"left","margin-right":"0.5em"});E.addClass("progress-background-color");var G=A(document.createElement("div"));G.attr("id",D);G.addClass("progress-fill-color");G.css({height:B.height,width:I+"%"});var H=A(document.createElement("span"));H.attr("id",K);H.addClass("percent-complete-text");H.html(I+"%");E.append(G);C.append(E);if(B.showPercentage){C.append(H)}}else{A("#"+D).css("width",I+"%");A("#"+K).html(I+"%")}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/jquery/jquery.selection.js' */
(function(A){if(document.selection){var B=function(C){return C.replace(/\u000D/g,"")};A.fn.selection=function(F){var E=this[0];this.focus();if(!E){return false}if(F==null){return document.selection.createRange().text}else{var D=E.scrollTop;var C=document.selection.createRange();C.text=F;C.select();E.focus();E.scrollTop=D}};A.fn.selectionRange=function(C,F){var G=this[0];this.focus();var I=document.selection.createRange();if(C==null){var K=this.val(),J=K.length,E=I.duplicate();E.moveToElementText(G);E.setEndPoint("StartToEnd",I);var D=J-B(E.text).length;E.setEndPoint("StartToStart",I);var H=J-B(E.text).length;if(D!=H&&K.charAt(D+1)=="\n"){D+=1}return{end:D,start:H,text:K.substring(H,D),textBefore:K.substring(0,H),textAfter:K.substring(D)}}else{I.moveToElementText(G);I.collapse(true);I.moveStart("character",C);I.moveEnd("character",F-C);I.select()}}}else{A.fn.selection=function(E){var D=this[0];if(!D){return false}if(E==null){if(D.setSelectionRange){return D.value.substring(D.selectionStart,D.selectionEnd)}else{return false}}else{var C=D.scrollTop;if(!!D.setSelectionRange){var F=D.selectionStart;D.value=D.value.substring(0,F)+E+D.value.substring(D.selectionEnd);D.selectionStart=F;D.selectionEnd=F+E.length}D.focus();D.scrollTop=C}};A.fn.selectionRange=function(F,C){if(F==null){var D={start:this[0].selectionStart,end:this[0].selectionEnd};var E=this.val();D.text=E.substring(D.start,D.end);D.textBefore=E.substring(0,D.start);D.textAfter=E.substring(D.end);return D}else{this[0].selectionStart=F;this[0].selectionEnd=C}}}A.fn.wrapSelection=function(C,D){this.selection(C+this.selection()+(D||""))}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs', location = 'js/jquery/jquery.throbber.js' */
jQuery.fn.throbber=function(A){return function(){var C=[],B={isLatentThreshold:100,minThrobberDisplay:200,loadingClass:"loading"};A(document).ajaxComplete(function(E,D){A(C).each(function(F){if(D===this.get(0)){this.hideThrobber();C.splice(F,1)}})});return function(F){var E,G,D=function(I,H){D.t=setTimeout(function(){clearTimeout(D.t);D.t=undefined;I()},H)};F=A.extend(B,F||{});if(!F.target){return this}G=jQuery(F.target);C.push(A.extend(this,{showThrobber:function(){D(function(){if(!E){G.addClass(F.loadingClass);D(function(){if(E){E()}},F.minThrobberDisplay)}},F.isLatentThreshold)},hideThrobber:function(){E=function(){G.removeClass(F.loadingClass);if(F.end){F.end()}};if(!D.t){E()}}}));this.showThrobber();return this}}()}(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.aui.staging:meta', location = 'js/meta.js' */
/**
 * AJS.Meta is used to access dynamic metadata passed from the
 * server to JavaScript via the page HTML.
 *
 * @since 3.6
 */
(function($) {

    /**
     * Returns a boolean if the passed string is "true" or "false", ignoring case, else returns the original string.
     * @param value
     */
    AJS.asBooleanOrString = function (value) {
        var lc = value ? value.toLowerCase() : "";

        if (lc == "true")  return true;
        if (lc == "false") return false;

        return value;
    };

    // A backing map to use if the user sets data.
    var overrides = {};

    AJS.Meta = $.extend({}, AJS.Meta, {
        /**
         * Sets metadata with a key and value, for use when the state of the page changes after
         * loading from the server
         * @param key
         * @param value
         */
        set: function (key, value) {
            overrides[key] = value;
        },

        /**
         * Returns a value given a key. If no entry exists with the key, undefined is returned.
         * If the string value is "true" or "false" the respective boolean value is returned.
         *
         * @method get
         * @param key
         * @return {String} or {boolean}
         */
        get: function (key) {
            if (typeof overrides[key] != "undefined") return overrides[key];

            var metaEl = $("meta[name='ajs-" + key + "']");
            if (!metaEl.length)
                return undefined;

            var value = metaEl.attr("content");
            return AJS.asBooleanOrString(value);
        },

        /**
         * Returns true if the value for the provided key is equal to "true", else returns false.
         *
         * @method getBoolean
         * @param key
         * @return {boolean}
         */
        getBoolean: function (key) {
            return this.get(key) === true;
        },

        /**
         * Returns a number if the value for the provided key can be converted to one.
         * Good for retrieving content ids to check truthiness (e.g. '0' is truthy but 0 is falsy).
         *
         * @method getNumber
         * @param key
         * @return {number}
         */
        getNumber: function (key) {
            return +this.get(key);
        },

        /**
         * Mainly for use when debugging, returns all Data pairs in a map for eyeballing.
         */
        getAllAsMap: function () {
            var map = {};
            $("meta[name^=ajs-]").each(function () {
                map[this.name.substring(4)] = this.content;
            });
            return $.extend(map, overrides);
        }
    });

    /**
     * Returns Link metadata for a page, commonly found from <link> tags in the <head>.
     */
    AJS.Meta.Links = {

        /**
         * Returns a canonical URI for a Page or BlogPost, if present.
         */
        canonical: function () {
            // e.g. <link href="http://localhost:8080/confluence/display/TST/Home" rel="canonical">
            return $('head link[rel="canonical"]').attr('href');
        },

        /**
         * Returns a shortlink URI for a Page or BlogPost, if present.
         */
        shortlink: function () {
            // e.g. <link href="http://localhost:8080/confluence/x/BAAE" rel="shortlink">
            return $('head link[rel="shortlink"]').attr('href');
        }

    };

})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.aui.staging:dark-features', location = 'js/dark-features.js' */
/**
 * Dark features are features that can enabled and disabled per user via a feature key. Their main use is to allow
 * in-development features to be rolled out to production in a low-risk fashion.
 */
(function ($) {
    var featuresStr = AJS.Meta.get('enabled-dark-features'),
        featuresArr = featuresStr ? featuresStr.split(',') : [],
        features = {};

    $.each(featuresArr, function () {
        features[this] = true;
    });
    

    AJS.DarkFeatures = {
        isEnabled: function (key) {
            return !!features[key];
        },

        enable: function (key) {
            if (key && !features[key])
                features[key] = true;
        },

        disable: function (key) {
            if (key && features[key])
                delete features[key];
        },

        getAllEnabled: function() {
            return featuresArr;
        }
    };
})(AJS.$);


} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.aui.staging:storage-manager', location = 'js/storage-manager.js' */
/**
 * Manager to store data in localStorage, only if supported by the browser.
 * It ensures that the keys are namespaced with a given prefix to avoid clashing with anything else.
 *
 * @param prefix the prefix to be added to the namespace. i.e. 'atlassian'
 * @param id of the storageManager to be returned. This is used to create a unique namespace for keys.
 */
AJS.storageManager = function(prefix, id) {
    var user = AJS.Meta.get("remote-user"),
        namespace = prefix + "." + (user ? user + "." : "") + id,
        delimiter = "#",
        localStorageSupported = false,
        prefixMatch = /\d+#/,
        getPrefix = function(seconds) {
            var milliseconds = (seconds || 0) * 1000;
            if(!milliseconds) {
                return '';
            }
            return +new Date() + milliseconds + delimiter;
        },
        getItem = function(key) {
            if (!localStorageSupported) return null;
            var match;
            var item = localStorage.getItem(namespace + "." + key);
            if(match = prefixMatch.exec(item)) {
                item = item.replace(match[0],'');
                if(+new Date() > match[0].replace("#",'')) {
                    localStorage.removeItem(namespace + "." + key);
                    return null;
                }
            }
            return item;
        };



    try {
        localStorageSupported = 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e) {
        AJS.log("Browser does not support localStorage, Confluence.storageManager will not work.");
    }

    return {
        /**
         * Gets the item stored in local storage for the given key. null is returned if it doesn't exist.
         * Note that this method will always return a string representation of what is stored.
         *
         * @param key
         */
        getItem: getItem,
        /**
         * Returns a boolean to let you know if we contain a key that matches, and has not expired.
         * @param key
         */
        doesContain: function(key) {
            return !!getItem(key);
        },
                /**
         * Gets the item stored in local storage for the given key and returns the boolean value of it.
         * It correctly convert the "true" and "false" strings to return true/false booleans.
         *
         * @param key
         */
        getItemAsBoolean: function (key) {
            var value = getItem(key);
            if (value == "false")
                return false;
            if (value == "true")
                return true;

            return !!value;
        },
        setItem: function(key, value, expire) {
            if (!localStorageSupported) return;
            value = getPrefix(expire) + value;

            localStorage.setItem(namespace + "." + key, value);
        },
        removeItem: function(key) {
            if (!localStorageSupported) return;

            localStorage.removeItem(namespace + "." + key);
        }
    };
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/aui-settings.js' */
AJS.$.ajaxSetup({traditional:true});AJS.isIE6=!window.XMLHttpRequest;AJS.applyPngFilter=function(a,c,b){if(!AJS.isIE6){return false}c=c||a.src;b=b||"scale";a.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+c+"', sizingMethod='"+b+"')";return true};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/ajs/aui-draft.js' */
(function(e){if(typeof AJS.defaultIfUndefined!=="function"){AJS.defaultIfUndefined=function(m,j){var g=null;var l=window;if(typeof j!="undefined"){if(typeof j.defaultValue==="object"){g=j.defaultValue}if(typeof j.rootObject!="undefined"){if(typeof j.rootObject==="object"&&j.rootObject){l=j.rootObject}else{return g}}}if(typeof m!=="string"){return g}var h=m.split(".");for(var k=0;k<h.length;k++){if(!Object.prototype.hasOwnProperty.call(l,h[k])){return g}l=l[h[k]]}return l}}var b=(function(){var g=false;return function(i){var h="debug-switch-enabled";var j=!!window.localStorage;if(typeof i!="boolean"){if(j){return localStorage[h]=="true"}else{return g}}if(j){localStorage.setItem(h,i)}else{g=i}}}());AJS.debug=function(){if(!b()){return}var g=Array.prototype.slice.call(arguments);g.splice(0,0,"DEBUG: "+new Date().toLocaleTimeString());AJS.log.apply(AJS,g)};AJS.debugEnabled=function(g){if(typeof g!="boolean"){return b()}b(g);AJS.log("STICKY FLAG DEBUG ENABLED: "+g)};AJS.logError=function(i,g){var h=[];if(e.browser.webkit){h.push(g)}else{for(prop in g){h.push(prop+": "+g[prop])}}AJS.log(i+h.join(", "))};AJS.toInit=function(g){e(function(){try{g.apply(this,arguments)}catch(h){AJS.logError("Failed to run init function: ",h);AJS.log("Failed toInit function is: "+g)}});return this};if(AJS.Meta.getBoolean("log-rendered")){var f=AJS.log,d=e('<div id="ajs-log" class="log"><h3>AJS Log</h3>\n</div>'),c=e("head"),a;d.toggleClass("hidden",!AJS.Meta.getBoolean("log-visible"));AJS.log=function(h){var i=(typeof(h)==="undefined")?"undefined":h;if(a){if(d.next().length!=0){a.append(d)}}else{var g=document.createElement("script");g.type="text/x-log";g.text=i;c.append(g)}d.append(e("<p></p>").text("\n"+i));f.apply(AJS,arguments)};AJS.toInit(function(){a=e("body");a.append(d)})}AJS.Data=AJS.Data||AJS.Meta;AJS.getJSONWrap=function(i){var h=Confluence.getContextPath();var g=i.url;if(g.indexOf(h)!=0&&g.indexOf("http")!=0){g=h+g}i.loadingElement&&AJS.setVisible(i.loadingElement,true);var j=i.messageHandler;j.clearMessages();e.ajax({type:"GET",url:g,dataType:"json",data:i.data,error:function(){i.loadingElement&&AJS.setVisible(i.loadingElement,false);j.displayMessages(i.errorMessage||"There was an error communicating with the server, please try again later.");i.errorCallback&&i.errorCallback()},success:function(k){i.loadingElement&&AJS.setVisible(i.loadingElement,false);if(j.handleResponseErrors(k)){i.errorCallback&&i.errorCallback();return}i.successCallback&&i.successCallback(k)}})};AJS.Validate=e.extend((function(){var h,g;return{email:function(i){if(!h){h=/^((([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i}return h.test(i)},url:function(i){if(!g){g=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i}return g.test(i)}}}()),AJS.Validate)})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/ajs/message-handler.js' */
(function(d){var a=function(e){var f,g;f=function(){return e.baseElement};g=function(i){var h=d("ul",i);if(!h.length){h=AJS("ul").appendTo(i)}return h};return{getMessageContainer:f,clearMessages:function(){f().addClass("hidden").empty()},displayMessages:function(l){if(!l||!l.length){return}if(!d.isArray(l)){l=[l]}var m=f(),k=g(m);for(var h=0,j=l.length;h<j;h++){AJS("li").text(l[h]).appendTo(k)}m.removeClass("hidden")},handleResponseErrors:function(h,i){var j=[].concat(h.validationErrors||[]).concat(h.actionErrors||[]).concat(h.errorMessage||[]);if(j.length){this.displayMessages(i||j);return true}return false}}};AJS.MessageHandler=function(f,g){var e=d.extend(a(f),g&&g(f));e.getMessageContainer().addClass("message-handler");e.clearMessages();return e};var c=false;var b;AJS.MessageHandler.closeOnNew=function(e){if(typeof e!=="undefined"){c=e}else{return c}};AJS.MessageHandler.message=function(f,e,g){g=g||"success";if(c){f.empty()}AJS.messages[g](f,{body:e,closeable:true,shadowed:true})};AJS.MessageHandler.error=function(f,e){AJS.MessageHandler.message(f,e,"error")};AJS.MessageHandler.actionMessage=function(e,f){b=b||d("#action-messages");AJS.MessageHandler.message(b,e,f)};AJS.MessageHandler.loading=function(e){AJS.MessageHandler.actionMessage(e,"info")}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/dialog.js' */
AJS.ConfluenceDialog=function(a){var b;a=a||{};a=jQuery.extend({},{keypressListener:function(c){if(c.keyCode===27){AJS.debug("dialog.js: escape keydown caught");if(!jQuery(".aui-dropdown",b.popup.element).is(":visible")){if(typeof a.onCancel=="function"){a.onCancel()}else{b.hide()}}}else{if(c.keyCode===13){AJS.debug("dialog.js: enter keydown caught");if(!jQuery(".aui-dropdown",b.popup.element).is(":visible")){var d=c.target.nodeName&&c.target.nodeName.toLowerCase();if(d!="textarea"&&typeof a.onSubmit=="function"){setTimeout(a.onSubmit)}}}}},width:865,height:530},a);b=new AJS.Dialog(a);jQuery(document).bind("hideLayer",function(f,d,c){if(d=="popup"&&c==b){if(typeof a.onCancel=="function"){a.onCancel()}}});return b};AJS.toInit(function(b){AJS.bind("show.dialog",function(h,f){var c=AJS.Meta.get("page-id"),j=AJS.Meta.get("space-key"),d=AJS.Meta.get("editor-mode"),g=AJS.Meta.get("new-page"),i=function(){var e={};if(c){e.pageid=c}if(j){e.spacekey=j}if(d){e.editormode=d}if(g){e.newpage=g}return e};AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:f.dialog.id,properties:i()})});var a=function(e){var g=b(e),f;if(g.attr("data-lasttab-override")){return}if(g.attr("data-tab-default")){f=g.attr("data-tab-default")}var h=Confluence.storageManager(g.attr("id")),d=h.getItem("last-tab"),c=d!=null?d:f;if(c){b(".page-menu-item:visible:eq("+c+") button",g).click()}if(!g.attr("data-lasttab-bound")){b(".page-menu-item",g).each(function(k,j){b(j).click(function(){h.setItem("last-tab",k)})});g.attr("data-lasttab-bound","true")}};b(document).bind("showLayer",function(f,c,d){Confluence.runBinderComponents();if(c=="popup"&&d){a(d.element)}});AJS.Dialog.prototype.overrideLastTab=function(){b(this.popup.element).attr("data-lasttab-override","true")};AJS.Dialog.prototype.addHelpText=function(d,c){if(!d){return}var g=d;if(c){g=AJS.template(d).fill(c).toString()}var f=this.page[this.curpage];if(!f.buttonpanel){f.addButtonPanel()}var e=b("<div class='dialog-tip'></div>").html(g);f.buttonpanel.append(e);b("a",e).click(function(){window.open(this.href,"_blank").focus();return false})};AJS.Dialog.prototype.getTitle=function(){return b("#"+this.id+" .dialog-components:visible h2").text()};AJS.Dialog.prototype.isVisible=function(){return b("#"+this.id).is(":visible")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/aui-overrides.js' */
(function(){window.$=AJS.$;if(typeof AJS!="undefined"){var b=AJS.populateParameters;AJS.populateParameters=function(){b.apply(AJS,arguments);AJS.$("meta[name^=ajs-]").each(function(){var c=this.name,d=this.content;c=c.substring(4).replace(/(-\w)/g,function(e){return e.charAt(1).toUpperCase()});if(typeof AJS.params[c]=="undefined"){AJS.params[c]=AJS.asBooleanOrString(d)}})}}AJS.$.fn.disable=function(c){return this.each(function(){var d=AJS.$(this);var e=d.prop("disabled",true).addClass("disabled").attr("id");if(e){AJS.$("label[for="+e+"]",d.parent()).addClass("disabled")}})};AJS.$.fn.enable=function(c){return this.each(function(){var d=AJS.$(this);var e=d.attr("disabled",false).removeClass("disabled").attr("id");if(e){AJS.$("label[for="+e+"]",d.parent()).removeClass("disabled")}})};AJS.$.debounce=function(e,c){var d;return function(){var g=this,f=arguments;if(d){clearTimeout(d);d=undefined}d=setTimeout(function(){e.apply(g,f);d=undefined},c)}};if(AJS.indexOf(["_"],"_")>-1){AJS.log("AJS.indexOf override can be removed as AUI-2142 has been fixed")}else{var a=AJS.indexOf;AJS.indexOf=function(f,e,d){var c=d;if(!d){c=null}return a.call(this,f,e,c)}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/calendar/jquery.ui.datepicker.js' */
/*
 * jQuery UI Datepicker 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function( $, undefined ) {

$.extend($.ui, { datepicker: { version: "1.8.11" } });

var PROP_NAME = 'datepicker';
var dpuuid = new Date().getTime();

/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this.debug = false; // Change this to true to start debugging
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
	this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
	this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
	this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
	this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
	this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
	this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
	this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
	this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		closeText: 'Done', // Display text for close link
		prevText: 'Prev', // Display text for previous month link
		nextText: 'Next', // Display text for next month link
		currentText: 'Today', // Display text for current month link
		monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'], // Names of months for drop-down and formatting
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
		weekHeader: 'Wk', // Column header for week of the year
		dateFormat: 'mm/dd/yy', // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: '' // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: 'focus', // 'focus' for popup on focus,
			// 'button' for trigger button, or 'both' for either
		showAnim: 'fadeIn', // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: '', // Display text following the input box, e.g. showing the format
		buttonText: '...', // Text for trigger button
		buttonImage: '', // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: 'c-10:c+10', // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: '+10', // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with '+' for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: 'fast', // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: '', // Selector for an alternate field to store selected dates into
		altFormat: '', // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false // True to size the input for the date format, false to leave as is
	};
	$.extend(this._defaults, this.regional['']);
	this.dpDiv = $('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>');
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: 'hasDatepicker',

	/* Debug logging (if enabled). */
	log: function () {
		if (this.debug)
			console.log.apply('', arguments);
	},

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span
	   @param  settings  object - the new settings to use for this date picker instance (anonymous) */
	_attachDatepicker: function(target, settings) {
		// check for settings on the control itself - in namespace 'date:'
		var inlineSettings = null;
		for (var attrName in this._defaults) {
			var attrValue = target.getAttribute('date:' + attrName);
			if (attrValue) {
				inlineSettings = inlineSettings || {};
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		var nodeName = target.nodeName.toLowerCase();
		var inline = (nodeName == 'div' || nodeName == 'span');
		if (!target.id) {
			this.uuid += 1;
			target.id = 'dp' + this.uuid;
		}
		var inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
		if (nodeName == 'input') {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			$('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName))
			return;
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp).
			bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key);
			});
		this._autoSize(inst);
		$.data(target, PROP_NAME, inst);
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var appendText = this._get(inst, 'appendText');
		var isRTL = this._get(inst, 'isRTL');
		if (inst.append)
			inst.append.remove();
		if (appendText) {
			inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
			input[isRTL ? 'before' : 'after'](inst.append);
		}
		input.unbind('focus', this._showDatepicker);
		if (inst.trigger)
			inst.trigger.remove();
		var showOn = this._get(inst, 'showOn');
		if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
			var buttonText = this._get(inst, 'buttonText');
			var buttonImage = this._get(inst, 'buttonImage');
			inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
				$('<img/>').addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$('<button type="button"></button>').addClass(this._triggerClass).
					html(buttonImage == '' ? buttonText : $('<img/>').attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? 'before' : 'after'](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
					$.datepicker._hideDatepicker();
				else
					$.datepicker._showDatepicker(input[0]);
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, 'autoSize') && !inst.inline) {
			var date = new Date(2009, 12 - 1, 20); // Ensure double digits
			var dateFormat = this._get(inst, 'dateFormat');
			if (dateFormat.match(/[DM]/)) {
				var findMax = function(names) {
					var max = 0;
					var maxI = 0;
					for (var i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					'monthNames' : 'monthNamesShort'))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
			}
			inst.input.attr('size', this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName))
			return;
		divSpan.addClass(this.markerClassName).append(inst.dpDiv).
			bind("setData.datepicker", function(event, key, value){
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key){
				return this._get(inst, key);
			});
		$.data(target, PROP_NAME, inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		inst.dpDiv.show();
	},

	/* Pop-up the date picker in a "dialog" box.
	   @param  input     element - ignored
	   @param  date      string or Date - the initial date to display
	   @param  onSelect  function - the function to call when a date is selected
	   @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	   @param  pos       int[2] - coordinates for the dialog's position within the screen or
	                     event - with x/y coordinates or
	                     leave empty for default (screen centre)
	   @return the manager object */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var inst = this._dialogInst; // internal instance
		if (!inst) {
			this.uuid += 1;
			var id = 'dp' + this.uuid;
			this._dialogInput = $('<input type="text" id="' + id +
				'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
			this._dialogInput.keydown(this._doKeyDown);
			$('body').append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], PROP_NAME, inst);
		}
		extendRemove(inst.settings, settings || {});
		date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			var browserWidth = document.documentElement.clientWidth;
			var browserHeight = document.documentElement.clientHeight;
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI)
			$.blockUI(this.dpDiv);
		$.data(this._dialogInput[0], PROP_NAME, inst);
		return this;
	},

	/* Detach a datepicker from its control.
	   @param  target    element - the target input field or division or span */
	_destroyDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		$.removeData(target, PROP_NAME);
		if (nodeName == 'input') {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind('focus', this._showDatepicker).
				unbind('keydown', this._doKeyDown).
				unbind('keypress', this._doKeyPress).
				unbind('keyup', this._doKeyUp);
		} else if (nodeName == 'div' || nodeName == 'span')
			$target.removeClass(this.markerClassName).empty();
	},

	/* Enable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_enableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = false;
			inst.trigger.filter('button').
				each(function() { this.disabled = false; }).end().
				filter('img').css({opacity: '1.0', cursor: ''});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().removeClass('ui-state-disabled');
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_disableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = true;
			inst.trigger.filter('button').
				each(function() { this.disabled = true; }).end().
				filter('img').css({opacity: '0.5', cursor: 'default'});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().addClass('ui-state-disabled');
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	   @param  target    element - the target input field or division or span
	   @return boolean - true if disabled, false if enabled */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] == target)
				return true;
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	   @param  target  element - the target input field or division or span
	   @return  object - the associated instance data
	   @throws  error if a jQuery problem getting data */
	_getInst: function(target) {
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw 'Missing instance data for this datepicker';
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span
	   @param  name    object - the new settings to update or
	                   string - the name of the setting to change or retrieve,
	                   when retrieving also 'all' for all instance settings or
	                   'defaults' for all global defaults
	   @param  value   any - the new value for the setting
	                   (omit if above is an object or to retrieve a value) */
	_optionDatepicker: function(target, name, value) {
		var inst = this._getInst(target);
		if (arguments.length == 2 && typeof name == 'string') {
			return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}
		var settings = name || {};
		if (typeof name == 'string') {
			settings = {};
			settings[name] = value;
		}
		if (inst) {
			if (this._curInst == inst) {
				this._hideDatepicker();
			}
			var date = this._getDateDatepicker(target, true);
			var minDate = this._getMinMaxDate(inst, 'min');
			var maxDate = this._getMinMaxDate(inst, 'max');
			extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
				inst.settings.minDate = this._formatDate(inst, minDate);
			if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDateDatepicker(target, date);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	   @param  target   element - the target input field or division or span
	   @param  date     Date - the new date */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	   @param  target     element - the target input field or division or span
	   @param  noDefault  boolean - true if no default date is to be used
	   @return Date - the current date */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline)
			this._setDateFromField(inst, noDefault);
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var inst = $.datepicker._getInst(event.target);
		var handled = true;
		var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing)
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' +
									$.datepicker._currentClass + ')', inst.dpDiv);
						if (sel[0])
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						else
							$.datepicker._hideDatepicker();
						return false; // don't submit the form
						break; // select the value on enter
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, 'stepBigMonths') :
							-$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, 'stepBigMonths') :
							+$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									-$.datepicker._get(inst, 'stepBigMonths') :
									-$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									+$.datepicker._get(inst, 'stepBigMonths') :
									+$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		else {
			handled = false;
		}
		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if ($.datepicker._get(inst, 'constrainInput')) {
			var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
			var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if (inst.input.val() != inst.lastVal) {
			try {
				var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));
				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (event) {
				$.datepicker.log(event);
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	   @param  input  element - the input field attached to the date picker or
	                  event - if triggered by focus */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
			input = $('input', input.parentNode)[0];
		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
			return;
		var inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst != inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
		}
		var beforeShow = $.datepicker._get(inst, 'beforeShow');
		extendRemove(inst.settings, (beforeShow ? beforeShow.apply(input, [input, inst]) : {}));
		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);
		if ($.datepicker._inDialog) // hide cursor
			input.value = '';
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}
		var isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css('position') == 'fixed';
			return !isFixed;
		});
		if (isFixed && $.browser.opera) { // correction for Opera when fixed and scrolled
			$.datepicker._pos[0] -= document.documentElement.scrollLeft;
			$.datepicker._pos[1] -= document.documentElement.scrollTop;
		}
		var offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
			left: offset.left + 'px', top: offset.top + 'px'});
		if (!inst.inline) {
			var showAnim = $.datepicker._get(inst, 'showAnim');
			var duration = $.datepicker._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._datepickerShowing = true;
				var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
				if( !! cover.length ){
					var borders = $.datepicker._getBorders(inst.dpDiv);
					cover.css({left: -borders[0], top: -borders[1],
						width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
				}
			};
			inst.dpDiv.zIndex($(input).zIndex()+1);
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
			if (!showAnim || !duration)
				postProcess();
			if (inst.input.is(':visible') && !inst.input.is(':disabled'))
				inst.input.focus();
			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		var self = this;
		var borders = $.datepicker._getBorders(inst.dpDiv);
		inst.dpDiv.empty().append(this._generateHTML(inst));
		var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
		if( !!cover.length ){ //avoid call to outerXXXX() when not in IE6
			cover.css({left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()})
		}
		inst.dpDiv.find('button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a')
				.bind('mouseout', function(){
					$(this).removeClass('ui-state-hover');
					if(this.className.indexOf('ui-datepicker-prev') != -1) $(this).removeClass('ui-datepicker-prev-hover');
					if(this.className.indexOf('ui-datepicker-next') != -1) $(this).removeClass('ui-datepicker-next-hover');
				})
				.bind('mouseover', function(){
					if (!self._isDisabledDatepicker( inst.inline ? inst.dpDiv.parent()[0] : inst.input[0])) {
						$(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
						$(this).addClass('ui-state-hover');
						if(this.className.indexOf('ui-datepicker-prev') != -1) $(this).addClass('ui-datepicker-prev-hover');
						if(this.className.indexOf('ui-datepicker-next') != -1) $(this).addClass('ui-datepicker-next-hover');
					}
				})
			.end()
			.find('.' + this._dayOverClass + ' a')
				.trigger('mouseover')
			.end();
		var numMonths = this._getNumberOfMonths(inst);
		var cols = numMonths[1];
		var width = 17;
		if (cols > 1)
			inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
		else
			inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
		inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
			'Class']('ui-datepicker-multi');
		inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
			'Class']('ui-datepicker-rtl');
		if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
				// #6694 - don't focus the input if it's already focused
				// this breaks the change event in IE
				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
			inst.input.focus();
		// deffered render of the years select (to avoid flashes on Firefox)
		if( inst.yearshtml ){
			var origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml ){
					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	/* Retrieve the size of left and top borders for an element.
	   @param  elem  (jQuery object) the element of interest
	   @return  (number[2]) the left and top borders */
	_getBorders: function(elem) {
		var convert = function(value) {
			return {thin: 1, medium: 2, thick: 3}[value] || value;
		};
		return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth();
		var dpHeight = inst.dpDiv.outerHeight();
		var inputWidth = inst.input ? inst.input.outerWidth() : 0;
		var inputHeight = inst.input ? inst.input.outerHeight() : 0;
		var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
		var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();

		offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var inst = this._getInst(obj);
		var isRTL = this._get(inst, 'isRTL');
        while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
            obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
        }
        var position = $(obj).offset();
	    return [position.left, position.top];
	},

	/* Hide the date picker from view.
	   @param  input  element - the input field attached to the date picker */
	_hideDatepicker: function(input) {
		var inst = this._curInst;
		if (!inst || (input && inst != $.data(input, PROP_NAME)))
			return;
		if (this._datepickerShowing) {
			var showAnim = this._get(inst, 'showAnim');
			var duration = this._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._tidyDialog(inst);
				this._curInst = null;
			};
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
			if (!showAnim)
				postProcess();
			var onClose = this._get(inst, 'onClose');
			if (onClose)
				onClose.apply((inst.input ? inst.input[0] : null),
					[(inst.input ? inst.input.val() : ''), inst]);  // trigger custom callback
			this._datepickerShowing = false;
			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
				if ($.blockUI) {
					$.unblockUI();
					$('body').append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst)
			return;
		var $target = $(event.target);
		if ($target[0].id != $.datepicker._mainDivId &&
				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.hasClass($.datepicker._triggerClass) &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))
			$.datepicker._hideDatepicker();
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		}
		else {
			var date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		inst._selectingMonthYear = false;
		inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
			parseInt(select.options[select.selectedIndex].value,10);
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Restore input focus after not changing month/year. */
	_clickMonthYear: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (inst.input && inst._selectingMonthYear) {
			setTimeout(function() {
				inst.input.focus();
			}, 0);
		}
		inst._selectingMonthYear = !inst._selectingMonthYear;
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var target = $(id);
		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}
		var inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $('a', td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		this._selectDate(target, '');
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input)
			inst.input.val(dateStr);
		this._updateAlternate(inst);
		var onSelect = this._get(inst, 'onSelect');
		if (onSelect)
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		else if (inst.input)
			inst.input.trigger('change'); // fire the change event
		if (inst.inline)
			this._updateDatepicker(inst);
		else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) != 'object')
				inst.input.focus(); // restore focus
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altField = this._get(inst, 'altField');
		if (altField) { // update alternate field too
			var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
			var date = this._getDate(inst);
			var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	   @param  date  Date - the date to customise
	   @return [boolean, string] - is this date selectable?, what is its CSS class? */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ''];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	   @param  date  Date - the date to get the week for
	   @return  number - the number of the week within the year that contains this date */
	iso8601Week: function(date) {
		var checkDate = new Date(date.getTime());
		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
		var time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	   See formatDate below for the possible formats.

	   @param  format    string - the expected format of the date
	   @param  value     string - the date in the above format
	   @param  settings  Object - attributes include:
	                     shortYearCutoff  number - the cutoff year for determining the century (optional)
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  Date - the extracted date value or null if value is blank */
	parseDate: function (format, value, settings) {
		if (format == null || value == null)
			throw 'Invalid arguments';
		value = (typeof value == 'object' ? value.toString() : value + '');
		if (value == '')
			return null;
		var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		var year = -1;
		var month = -1;
		var day = -1;
		var doy = -1;
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Extract a number from the string value
		var getNumber = function(match) {
			var isDoubled = lookAhead(match);
			var size = (match == '@' ? 14 : (match == '!' ? 20 :
				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
			var digits = new RegExp('^\\d{1,' + size + '}');
			var num = value.substring(iValue).match(digits);
			if (!num)
				throw 'Missing number at position ' + iValue;
			iValue += num[0].length;
			return parseInt(num[0], 10);
		};
		// Extract a name from the string value and convert to an index
		var getName = function(match, shortNames, longNames) {
			var names = (lookAhead(match) ? longNames : shortNames);
			for (var i = 0; i < names.length; i++) {
				if (value.substr(iValue, names[i].length).toLowerCase() == names[i].toLowerCase()) {
					iValue += names[i].length;
					return i + 1;
				}
			}
			throw 'Unknown name at position ' + iValue;
		};
		// Confirm that a literal character matches the string value
		var checkLiteral = function() {
			if (value.charAt(iValue) != format.charAt(iFormat))
				throw 'Unexpected literal at position ' + iValue;
			iValue++;
		};
		var iValue = 0;
		for (var iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					checkLiteral();
			else
				switch (format.charAt(iFormat)) {
					case 'd':
						day = getNumber('d');
						break;
					case 'D':
						getName('D', dayNamesShort, dayNames);
						break;
					case 'o':
						doy = getNumber('o');
						break;
					case 'm':
						month = getNumber('m');
						break;
					case 'M':
						month = getName('M', monthNamesShort, monthNames);
						break;
					case 'y':
						year = getNumber('y');
						break;
					case '@':
						var date = new Date(getNumber('@'));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '!':
						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'"))
							checkLiteral();
						else
							literal = true;
						break;
					default:
						checkLiteral();
				}
		}
		if (year == -1)
			year = new Date().getFullYear();
		else if (year < 100)
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				var dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim)
					break;
				month++;
				day -= dim;
			} while (true);
		}
		var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
			throw 'Invalid date'; // E.g. 31/02/*
		return date;
	},

	/* Standard date formats. */
	ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
	COOKIE: 'D, dd M yy',
	ISO_8601: 'yy-mm-dd',
	RFC_822: 'D, d M y',
	RFC_850: 'DD, dd-M-y',
	RFC_1036: 'D, d M y',
	RFC_1123: 'D, d M yy',
	RFC_2822: 'D, d M yy',
	RSS: 'D, d M y', // RFC 822
	TICKS: '!',
	TIMESTAMP: '@',
	W3C: 'yy-mm-dd', // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	   The format can be combinations of the following:
	   d  - day of month (no leading zero)
	   dd - day of month (two digit)
	   o  - day of year (no leading zeros)
	   oo - day of year (three digit)
	   D  - day name short
	   DD - day name long
	   m  - month of year (no leading zero)
	   mm - month of year (two digit)
	   M  - month name short
	   MM - month name long
	   y  - year (two digit)
	   yy - year (four digit)
	   @ - Unix timestamp (ms since 01/01/1970)
	   ! - Windows ticks (100ns since 01/01/0001)
	   '...' - literal text
	   '' - single quote

	   @param  format    string - the desired format of the date
	   @param  date      Date - the date value to format
	   @param  settings  Object - attributes include:
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  string - the date in the above format */
	formatDate: function (format, date, settings) {
		if (!date)
			return '';
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Format a number, with leading zero if necessary
		var formatNumber = function(match, value, len) {
			var num = '' + value;
			if (lookAhead(match))
				while (num.length < len)
					num = '0' + num;
			return num;
		};
		// Format a name, short or long as requested
		var formatName = function(match, value, shortNames, longNames) {
			return (lookAhead(match) ? longNames[value] : shortNames[value]);
		};
		var output = '';
		var literal = false;
		if (date)
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal)
					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
						literal = false;
					else
						output += format.charAt(iFormat);
				else
					switch (format.charAt(iFormat)) {
						case 'd':
							output += formatNumber('d', date.getDate(), 2);
							break;
						case 'D':
							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
							break;
						case 'o':
							output += formatNumber('o',
								(date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000, 3);
							break;
						case 'm':
							output += formatNumber('m', date.getMonth() + 1, 2);
							break;
						case 'M':
							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
							break;
						case 'y':
							output += (lookAhead('y') ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
							break;
						case '@':
							output += date.getTime();
							break;
						case '!':
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'"))
								output += "'";
							else
								literal = true;
							break;
						default:
							output += format.charAt(iFormat);
					}
			}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var chars = '';
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		for (var iFormat = 0; iFormat < format.length; iFormat++)
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					chars += format.charAt(iFormat);
			else
				switch (format.charAt(iFormat)) {
					case 'd': case 'm': case 'y': case '@':
						chars += '0123456789';
						break;
					case 'D': case 'M':
						return null; // Accept anything
					case "'":
						if (lookAhead("'"))
							chars += "'";
						else
							literal = true;
						break;
					default:
						chars += format.charAt(iFormat);
				}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() == inst.lastVal) {
			return;
		}
		var dateFormat = this._get(inst, 'dateFormat');
		var dates = inst.lastVal = inst.input ? inst.input.val() : null;
		var date, defaultDate;
		date = defaultDate = this._getDefaultDate(inst);
		var settings = this._getFormatConfig(inst);
		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			this.log(event);
			dates = (noDefault ? '' : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
			var date = new Date();
			date.setDate(date.getDate() + offset);
			return date;
		};
		var offsetString = function(offset) {
			try {
				return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					offset, $.datepicker._getFormatConfig(inst));
			}
			catch (e) {
				// Ignore
			}
			var date = (offset.toLowerCase().match(/^c/) ?
				$.datepicker._getDate(inst) : null) || new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			var day = date.getDate();
			var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
			var matches = pattern.exec(offset);
			while (matches) {
				switch (matches[2] || 'd') {
					case 'd' : case 'D' :
						day += parseInt(matches[1],10); break;
					case 'w' : case 'W' :
						day += parseInt(matches[1],10) * 7; break;
					case 'm' : case 'M' :
						month += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
					case 'y': case 'Y' :
						year += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
				}
				matches = pattern.exec(offset);
			}
			return new Date(year, month, day);
		};
		var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
			(typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
		newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	   Hours may be non-zero on daylight saving cut-over:
	   > 12 when midnight changeover, but then cannot generate
	   midnight datetime, so jump to 1AM, otherwise reset.
	   @param  date  (Date) the date to check
	   @return  (Date) the corrected date */
	_daylightSavingAdjust: function(date) {
		if (!date) return null;
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date;
		var origMonth = inst.selectedMonth;
		var origYear = inst.selectedYear;
		var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
			this._notifyChange(inst);
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? '' : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var today = new Date();
		today = this._daylightSavingAdjust(
			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
		var isRTL = this._get(inst, 'isRTL');
		var showButtonPanel = this._get(inst, 'showButtonPanel');
		var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
		var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
		var numMonths = this._getNumberOfMonths(inst);
		var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
		var stepMonths = this._get(inst, 'stepMonths');
		var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
		var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
			new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var drawMonth = inst.drawMonth - showCurrentAtPos;
		var drawYear = inst.drawYear;
		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;
		var prevText = this._get(inst, 'prevText');
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));
		var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', -' + stepMonths + ', \'M\');"' +
			' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+ prevText +'"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
		var nextText = this._get(inst, 'nextText');
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));
		var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', +' + stepMonths + ', \'M\');"' +
			' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+ nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
		var currentText = this._get(inst, 'currentText');
		var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
		var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._hideDatepicker();">' + this._get(inst, 'closeText') + '</button>' : '');
		var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
			(this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._gotoToday(\'#' + inst.id + '\');"' +
			'>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
		var firstDay = parseInt(this._get(inst, 'firstDay'),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);
		var showWeek = this._get(inst, 'showWeek');
		var dayNames = this._get(inst, 'dayNames');
		var dayNamesShort = this._get(inst, 'dayNamesShort');
		var dayNamesMin = this._get(inst, 'dayNamesMin');
		var monthNames = this._get(inst, 'monthNames');
		var monthNamesShort = this._get(inst, 'monthNamesShort');
		var beforeShowDay = this._get(inst, 'beforeShowDay');
		var showOtherMonths = this._get(inst, 'showOtherMonths');
		var selectOtherMonths = this._get(inst, 'selectOtherMonths');
		var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
		var defaultDate = this._getDefaultDate(inst);
		var html = '';
		for (var row = 0; row < numMonths[0]; row++) {
			var group = '';
			for (var col = 0; col < numMonths[1]; col++) {
				var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				var cornerClass = ' ui-corner-all';
				var calender = '';
				if (isMultiMonth) {
					calender += '<div class="ui-datepicker-group';
					if (numMonths[1] > 1)
						switch (col) {
							case 0: calender += ' ui-datepicker-group-first';
								cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
							case numMonths[1]-1: calender += ' ui-datepicker-group-last';
								cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
							default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
						}
					calender += '">';
				}
				calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
					(/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
					(/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					'</div><table class="ui-datepicker-calendar"><thead>' +
					'<tr>';
				var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
				for (var dow = 0; dow < 7; dow++) { // days of the week
					var day = (dow + firstDay) % 7;
					thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
				}
				calender += thead + '</tr></thead><tbody>';
				var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				var numRows = (isMultiMonth ? 6 : Math.ceil((leadDays + daysInMonth) / 7)); // calculate the number of rows to generate
				var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += '<tr>';
					var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
						this._get(inst, 'calculateWeek')(printDate) + '</td>');
					for (var dow = 0; dow < 7; dow++) { // create date picker days
						var daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
						var otherMonth = (printDate.getMonth() != drawMonth);
						var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += '<td class="' +
							((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
							(otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
							((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							' ' + this._dayOverClass : '') + // highlight selected day
							(unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled': '') +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
							(printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
							(printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
							(unselectable ? '' : ' onclick="DP_jQuery_' + dpuuid + '.datepicker._selectDay(\'#' +
							inst.id + '\',' + printDate.getMonth() + ',' + printDate.getFullYear() + ', this);return false;"') + '>' + // actions
							(otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
							(unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
							(printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
							(printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
							(otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
							'" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + '</tr>';
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += '</tbody></table>' + (isMultiMonth ? '</div>' +
							((numMonths[0] > 0 && col == numMonths[1]-1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
				group += calender;
			}
			html += group;
		}
		html += buttonPanel + ($.browser.msie && parseInt($.browser.version,10) < 7 && !inst.inline ?
			'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {
		var changeMonth = this._get(inst, 'changeMonth');
		var changeYear = this._get(inst, 'changeYear');
		var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
		var html = '<div class="ui-datepicker-title">';
		var monthHtml = '';
		// month selection
		if (secondary || !changeMonth)
			monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
		else {
			var inMinYear = (minDate && minDate.getFullYear() == drawYear);
			var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
			monthHtml += '<select class="ui-datepicker-month" ' +
				'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'M\');" ' +
				'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' +
			 	'>';
			for (var month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) &&
						(!inMaxYear || month <= maxDate.getMonth()))
					monthHtml += '<option value="' + month + '"' +
						(month == drawMonth ? ' selected="selected"' : '') +
						'>' + monthNamesShort[month] + '</option>';
			}
			monthHtml += '</select>';
		}
		if (!showMonthAfterYear)
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
		// year selection
		inst.yearshtml = '';
		if (secondary || !changeYear)
			html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
		else {
			// determine range of years to display
			var years = this._get(inst, 'yearRange').split(':');
			var thisYear = new Date().getFullYear();
			var determineYear = function(value) {
				var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
					(value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
					parseInt(value, 10)));
				return (isNaN(year) ? thisYear : year);
			};
			var year = determineYear(years[0]);
			var endYear = Math.max(year, determineYear(years[1] || ''));
			year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
			endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
			inst.yearshtml += '<select class="ui-datepicker-year" ' +
				'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'Y\');" ' +
				'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' +
				'>';
			for (; year <= endYear; year++) {
				inst.yearshtml += '<option value="' + year + '"' +
					(year == drawYear ? ' selected="selected"' : '') +
					'>' + year + '</option>';
			}
			inst.yearshtml += '</select>';
			//when showing there is no need for later update
			if( ! $.browser.mozilla ){
				html += inst.yearshtml;
				inst.yearshtml = null;
			} else {
				// will be replaced later with inst.yearshtml
				html += '<select class="ui-datepicker-year"><option value="' + drawYear + '" selected="selected">' + drawYear + '</option></select>';
			}
		}
		html += this._get(inst, 'yearSuffix');
		if (showMonthAfterYear)
			html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
		html += '</div>'; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period == 'Y' ? offset : 0);
		var month = inst.drawMonth + (period == 'M' ? offset : 0);
		var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
			(period == 'D' ? offset : 0);
		var date = this._restrictMinMax(inst,
			this._daylightSavingAdjust(new Date(year, month, day)));
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period == 'M' || period == 'Y')
			this._notifyChange(inst);
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var newDate = (minDate && date < minDate ? minDate : date);
		newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
		return newDate;
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, 'onChangeMonthYear');
		if (onChange)
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, 'numberOfMonths');
		return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst);
		var date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
		if (offset < 0)
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, 'shortYearCutoff');
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
			monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day == 'object' ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
	}
});

/* jQuery extend now ignores nulls! */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props)
		if (props[name] == null || props[name] == undefined)
			target[name] = props[name];
	return target;
};

/* Determine whether an object is an array. */
function isArray(a) {
	return (a && (($.browser.safari && typeof a == 'object' && a.length) ||
		(a.constructor && a.constructor.toString().match(/\Array\(\)/))));
};

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
                    Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){

	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}

	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick).
			find('body').append($.datepicker.dpDiv);
		$.datepicker.initialized = true;
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	return this.each(function() {
		typeof options == 'string' ?
			$.datepicker['_' + options + 'Datepicker'].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.8.11";

// Workaround for #4055
// Add another global to avoid noConflict issues with inline event handlers
window['DP_jQuery_' + dpuuid] = $;

})(jQuery);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/calendar/date-picker-defaults.js' */
jQuery(function($){
     var shortestDays = [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
    ], shortDays = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
    ], dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
    ], monthNames   = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"

    ], monthNamesShort = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
    ];//no defaults as will let our internationalisation system handle it


    //we set the default so that we dont have to have lots of .js files handling the language
	$.datepicker.regional[''] = {
		closeText:   "Done",
		prevText:   "Prev",
		nextText:   "Next",
		currentText:   "Today",
		monthNames: monthNames,
		monthNamesShort: monthNamesShort,
		dayNames: dayNames,
		dayNamesShort: shortDays,
		dayNamesMin: shortestDays,
		weekHeader:  "wk",
		dateFormat: $.datepicker.ISO_8601,
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['']);
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:raphael', location = '/includes/js/raphael/raphael-spinner.js' */
Raphael.spinner=function(k,f,h){var o=h||"#fff",n=f*13/60,s=f*35/60,p=f,d=p+n,c=p+n,m=Raphael(k,p*2+n*2,p*2+n*2),l=[],e=[],u=2*Math.PI/12,j={stroke:o,"stroke-width":n,"stroke-linecap":"round"};for(var q=0;q<12;q++){var g=u*q-Math.PI/2,b=Math.cos(g),a=Math.sin(g);e[q]=q/12;l[q]=m.path([["M",d+s*b,c+s*a],["L",d+p*b,c+p*a]]).attr(j)}var t;(function v(){e.unshift(e.pop());for(var r=0;r<12;r++){l[r].attr("opacity",e[r])}m.safari();t=setTimeout(v,80)})();return function(){clearTimeout(t);m.remove()}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.restplugin:confluence-rest', location = 'js/confluence-rest.js' */
AJS.REST = (function($) {
    var baseUrl = "/rest/prototype/1/";

    AJS.safeHTML = function (html) {
        return html.replace(/[<>&"']/g, function (symbol) {
            return "&#" + symbol.charCodeAt() + ";";
        });
    };

    /**
     * Converts a single object in REST format into an object in the format expected by AJS.dropDown.
     */
    var getDropdownObjectForRestResult = function (result) {
        if (!result) {
            AJS.log("REST result is null");
            return null;
        }
        if (!result.link || !$.isArray(result.link)) {
            AJS.log("No link for result with title: " + result.title);
            return null;
        }
        if (!result.title) {
            AJS.log("No title for result with id: " + result.id);
            return null;
        }
        var obj = {
            href : encodeURI(AJS.REST.findLink(result.link)),
            name : AJS.safeHTML(result.title),
            spaceName: AJS.safeHTML(AJS.REST.findSpaceName(result)),
            restObj : result
        };
        if (result.thumbnailLink) {
            var versionQuery = result.version ? "?version="+result.version + "&modificationDate=" : "";
            obj.icon = result.thumbnailLink.href + versionQuery;
        } else {
            obj.className = result.iconClass || "content-type-" + result.type + (result.type == "space" ? "desc" : "");
        }
        return obj;
    };

    return {

        getBaseUrl: function() {
            return baseUrl;
        },

        /**
         * Takes a relative path,
         *
         *   e.g. 'session/history.json?max-results=20'
         *
         * and prefixes it with the context and REST paths to form a complete '/'-based URL,
         *
         * e.g.  '/confluence/rest/prototype/1/session/history.json?max-results=20'
         *
         * @param path end of URL to be prefixed
         */
        makeUrl: function (path) {
            return Confluence.getContextPath() + baseUrl + path;
        },

        /**
         * Iterates through the links array to find the first matching link of the given type and rel.
         * @param links typically the link field on a REST JSON object
         * @param type type of link. Defaults to "text/html" if not defined.
         * @param rel relationship of the link. Defaults to "alternate".
         */
        findLink: function(links, type, rel) {
            if (!type) type = "text/html";
            if (!rel) rel = "alternate";
            if (AJS.$.isArray(links)) {
                for (var i=0,ii=links.length; i<ii; i++) {
                    var link = links[i];
                    if (link.type == type && link.rel == rel) {
                        return link.href;
                    }
                }
            }
            return "#";
        },

        findSpaceName: function(restObj){
            if (restObj.space){
                return restObj.space.name;
            }
            return "";
        },

        /**
         * Converts a matrix in REST format into a matrix in the format expected by AJS.dropDown.
         *
         * @param restMatrix matrix of objects in Confluence REST format
         * @return matrix of objects in Confluence drop-down format
         */
        convertFromRest: function (restMatrix) {
            var matrix = [], catArray, obj;
            for (var i = 0, len = restMatrix.length; i < len; i++) {
                catArray = [];
                for (var j = 0, len2 = restMatrix[i].length; j < len2; j++) {
                    obj = getDropdownObjectForRestResult(restMatrix[i][j]);
                    obj && catArray.push(obj);
                }
                catArray.length && matrix.push(catArray);
            }
            return matrix;
        },

        /**
         * Given an ContentEntityObject's REST data construct the alias, destination, href and wiki-markup.
         *
         * @param data - the content data in REST format
         */
        wikiLink : function (data) {
            var alias = data.title,
                destination = data.wikiLink && data.wikiLink.slice(1, -1); // remove the [ and ]

            // CONF-18940 strip off the space key and page title if linking to an attachment on the current page
            if (destination && data.type == "attachment" && data.space && data.space.key == AJS.Meta.get('space-key') &&
                data.ownerId == AJS.params.attachmentSourceContentId) {
                    destination = destination.substring(destination.indexOf("^"));
            }

            var wikiMarkup = destination && (alias != destination ? (alias + "|") : "") + destination;
            AJS.log("AJS.Editor.Autocompleter.Manager.makeLinkDetails =>" + wikiMarkup);

            return {
                alias : alias,
                destination : destination,
                href : this.findLink(data.link),
                wikiMarkup : wikiMarkup
            };
        },

        /**
         * Converts an object in REST format into a matrix containing the REST data.
         *
         * @async - called from an AJAX callback method
         * @param restObj object in Confluence REST format
         */
        makeRestMatrixFromData: function (restObj, suggestionField) {
            var restMatrix = [];
            var resultArr = eval("restObj." + suggestionField);
            if (resultArr && resultArr.length)
                    restMatrix.push(resultArr);
            return restMatrix;
        },

        /**
         * Converts an object in REST format into a matrix containing the search REST data.
         *
         * @async - called from an AJAX callback method
         * @param restObj object in Confluence REST format
         * @param suggestionField - the name of the field in the resObj that stores the suggestion. If null, "group" is used.
         * The "group" is the field used for in the /search/name REST service. 
         */
        makeRestMatrixFromSearchData: function(restObj, suggestionField) {
            var restMatrix = [];
            suggestionField = suggestionField || "group";
            var resultArr = eval("restObj." + suggestionField);
            if (resultArr) {

                var set = {
                    content: [],
                    attachment: [],
                    userinfo: [],
                    spacedesc: [],
                    page: [],
                    blogpost: [],
                    comment: [],
                    personalspacedesc: [],
                    mail: []
                };
                for (var i = 0, ii = resultArr.length; i < ii; i++) {
                    var group = resultArr[i];
                    set[group.name] && set[group.name].push(group.result);
                }

                // This line determines the order that the search sections appear. Don't change this unless you have to.
                restMatrix = restMatrix.concat(set.content, set.attachment, set.userinfo, set.spacedesc, set.page, set.blogpost, set.comment, set.personalspacedesc, set.mail);
            }
            else {
                log("makeRestMatrixFromData", "WARNING: Unknown rest object", restObj);
            }

            return restMatrix;
        }
    };
})(AJS.$);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.soy.soy-template-plugin:soy-deps', location = 'js/soyutils.js' */
/*!
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var goog=goog||{};goog.inherits=function(b,a){function c(){}c.prototype=a.prototype;b.superClass_=a.prototype;b.prototype=new c();b.prototype.constructor=b};if(!goog.userAgent){goog.userAgent=(function(){var b="";if("undefined"!==typeof navigator&&navigator&&"string"==typeof navigator.userAgent){b=navigator.userAgent}var a=b.indexOf("Opera")==0;return{HAS_JSCRIPT:typeof"ScriptEngine" in this,IS_OPERA:a,IS_IE:!a&&b.indexOf("MSIE")!=-1,IS_WEBKIT:!a&&b.indexOf("WebKit")!=-1}})()}if(!goog.asserts){goog.asserts={fail:function(a){}}}if(!goog.dom){goog.dom={};goog.dom.DomHelper=function(a){this.document_=a||document};goog.dom.DomHelper.prototype.getDocument=function(){return this.document_};goog.dom.DomHelper.prototype.createElement=function(a){return this.document_.createElement(a)};goog.dom.DomHelper.prototype.createDocumentFragment=function(){return this.document_.createDocumentFragment()}}if(!goog.format){goog.format={insertWordBreaks:function(j,a){j=String(j);var f=[];var h=0;var b=false;var k=false;var g=0;var d=0;for(var e=0,c=j.length;e<c;++e){var l=j.charCodeAt(e);if(g>=a&&l!=32){f[h++]=j.substring(d,e);d=e;f[h++]=goog.format.WORD_BREAK;g=0}if(b){if(l==62){b=false}}else{if(k){switch(l){case 59:k=false;++g;break;case 60:k=false;b=true;break;case 32:k=false;g=0;break}}else{switch(l){case 60:b=true;break;case 38:k=true;break;case 32:g=0;break;default:++g;break}}}}f[h++]=j.substring(d);return f.join("")},WORD_BREAK:goog.userAgent.IS_WEBKIT?"<wbr></wbr>":goog.userAgent.IS_OPERA?"&shy;":"<wbr>"}}if(!goog.i18n){goog.i18n={bidi:{detectRtlDirectionality:function(b,a){b=soyshim.$$bidiStripHtmlIfNecessary_(b,a);return soyshim.$$bidiRtlWordRatio_(b)>soyshim.$$bidiRtlDetectionThreshold_}}}}goog.i18n.bidi.Dir={RTL:-1,UNKNOWN:0,LTR:1};goog.i18n.bidi.toDir=function(a){if(typeof a=="number"){return a>0?goog.i18n.bidi.Dir.LTR:a<0?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.UNKNOWN}else{return a?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR}};goog.i18n.BidiFormatter=function(a){this.dir_=goog.i18n.bidi.toDir(a)};goog.i18n.BidiFormatter.prototype.dirAttr=function(c,a){var b=soy.$$bidiTextDir(c,a);return b&&b!=this.dir_?b<0?"dir=rtl":"dir=ltr":""};goog.i18n.BidiFormatter.prototype.endEdge=function(){return this.dir_<0?"left":"right"};goog.i18n.BidiFormatter.prototype.mark=function(){return((this.dir_>0)?"\u200E":(this.dir_<0)?"\u200F":"")};goog.i18n.BidiFormatter.prototype.markAfter=function(c,a){var b=soy.$$bidiTextDir(c,a);return soyshim.$$bidiMarkAfterKnownDir_(this.dir_,b,c,a)};goog.i18n.BidiFormatter.prototype.spanWrap=function(d,c){d=String(d);var b=soy.$$bidiTextDir(d,true);var a=soyshim.$$bidiMarkAfterKnownDir_(this.dir_,b,d,true);if(b>0&&this.dir_<=0){d="<span dir=ltr>"+d+"</span>"}else{if(b<0&&this.dir_>=0){d="<span dir=rtl>"+d+"</span>"}}return d+a};goog.i18n.BidiFormatter.prototype.startEdge=function(){return this.dir_<0?"right":"left"};goog.i18n.BidiFormatter.prototype.unicodeWrap=function(d,c){d=String(d);var b=soy.$$bidiTextDir(d,true);var a=soyshim.$$bidiMarkAfterKnownDir_(this.dir_,b,d,true);if(b>0&&this.dir_<=0){d="\u202A"+d+"\u202C"}else{if(b<0&&this.dir_>=0){d="\u202B"+d+"\u202C"}}return d+a};goog.string={newLineToBr:function(b,a){b=String(b);if(!goog.string.NEWLINE_TO_BR_RE_.test(b)){return b}return b.replace(/(\r\n|\r|\n)/g,a?"<br />":"<br>")},urlEncode:encodeURIComponent,NEWLINE_TO_BR_RE_:/[\r\n]/};goog.string.StringBuffer=function(a,b){this.buffer_=goog.userAgent.HAS_JSCRIPT?[]:"";if(a!=null){this.append.apply(this,arguments)}};goog.string.StringBuffer.prototype.bufferLength_=0;goog.string.StringBuffer.prototype.append=function(c,b,e){if(goog.userAgent.HAS_JSCRIPT){if(b==null){this.buffer_[this.bufferLength_++]=c}else{var a=this.buffer_;a.push.apply(a,arguments);this.bufferLength_=this.buffer_.length}}else{this.buffer_+=c;if(b!=null){for(var d=1;d<arguments.length;d++){this.buffer_+=arguments[d]}}}return this};goog.string.StringBuffer.prototype.clear=function(){if(goog.userAgent.HAS_JSCRIPT){this.buffer_.length=0;this.bufferLength_=0}else{this.buffer_=""}};goog.string.StringBuffer.prototype.toString=function(){if(goog.userAgent.HAS_JSCRIPT){var a=this.buffer_.join("");this.clear();if(a){this.append(a)}return a}else{return(this.buffer_)}};if(!goog.soy){goog.soy={renderAsElement:function(c,a,b,d){return(soyshim.$$renderWithWrapper_(c,a,d,true,b))},renderAsFragment:function(c,a,b,d){return soyshim.$$renderWithWrapper_(c,a,d,false,b)},renderElement:function(c,d,a,b){c.innerHTML=d(a,null,b)}}}var soy={esc:{}};var soydata={};var soyshim={$$DEFAULT_TEMPLATE_DATA_:{}};soyshim.$$renderWithWrapper_=function(h,f,b,c,i){var d=b||document;var a=d.createElement("div");a.innerHTML=h(f||soyshim.$$DEFAULT_TEMPLATE_DATA_,undefined,i);if(a.childNodes.length==1){var g=a.firstChild;if(!c||g.nodeType==1){return(g)}}if(c){return a}var e=d.createDocumentFragment();while(a.firstChild){e.appendChild(a.firstChild)}return e};soyshim.$$bidiMarkAfterKnownDir_=function(c,b,d,a){return(c>0&&(b<0||soyshim.$$bidiIsRtlExitText_(d,a))?"\u200E":c<0&&(b>0||soyshim.$$bidiIsLtrExitText_(d,a))?"\u200F":"")};soyshim.$$bidiStripHtmlIfNecessary_=function(b,a){return a?b.replace(soyshim.$$BIDI_HTML_SKIP_RE_," "):b};soyshim.$$BIDI_HTML_SKIP_RE_=/<[^>]*>|&[^;]+;/g;soyshim.$$bidiLtrChars_="A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";soyshim.$$bidiNeutralChars_="\u0000-\u0020!-@[-`{-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u2BFF";soyshim.$$bidiRtlChars_="\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";soyshim.$$bidiRtlDirCheckRe_=new RegExp("^[^"+soyshim.$$bidiLtrChars_+"]*["+soyshim.$$bidiRtlChars_+"]");soyshim.$$bidiNeutralDirCheckRe_=new RegExp("^["+soyshim.$$bidiNeutralChars_+"]*$|^http://");soyshim.$$bidiIsRtlText_=function(a){return soyshim.$$bidiRtlDirCheckRe_.test(a)};soyshim.$$bidiIsNeutralText_=function(a){return soyshim.$$bidiNeutralDirCheckRe_.test(a)};soyshim.$$bidiRtlDetectionThreshold_=0.4;soyshim.$$bidiRtlWordRatio_=function(e){var b=0;var a=0;var d=e.split(" ");for(var c=0;c<d.length;c++){if(soyshim.$$bidiIsRtlText_(d[c])){b++;a++}else{if(!soyshim.$$bidiIsNeutralText_(d[c])){a++}}}return a==0?0:b/a};soyshim.$$bidiLtrExitDirCheckRe_=new RegExp("["+soyshim.$$bidiLtrChars_+"][^"+soyshim.$$bidiRtlChars_+"]*$");soyshim.$$bidiRtlExitDirCheckRe_=new RegExp("["+soyshim.$$bidiRtlChars_+"][^"+soyshim.$$bidiLtrChars_+"]*$");soyshim.$$bidiIsLtrExitText_=function(b,a){b=soyshim.$$bidiStripHtmlIfNecessary_(b,a);return soyshim.$$bidiLtrExitDirCheckRe_.test(b)};soyshim.$$bidiIsRtlExitText_=function(b,a){b=soyshim.$$bidiStripHtmlIfNecessary_(b,a);return soyshim.$$bidiRtlExitDirCheckRe_.test(b)};soy.StringBuilder=goog.string.StringBuffer;soydata.SanitizedContentKind={HTML:0,JS_STR_CHARS:1,URI:2,HTML_ATTRIBUTE:3};soydata.SanitizedContent=function(a){this.content=a};soydata.SanitizedContent.prototype.contentKind;soydata.SanitizedContent.prototype.toString=function(){return this.content};soydata.SanitizedHtml=function(a){soydata.SanitizedContent.call(this,a)};goog.inherits(soydata.SanitizedHtml,soydata.SanitizedContent);soydata.SanitizedHtml.prototype.contentKind=soydata.SanitizedContentKind.HTML;soydata.SanitizedJsStrChars=function(a){soydata.SanitizedContent.call(this,a)};goog.inherits(soydata.SanitizedJsStrChars,soydata.SanitizedContent);soydata.SanitizedJsStrChars.prototype.contentKind=soydata.SanitizedContentKind.JS_STR_CHARS;soydata.SanitizedUri=function(a){soydata.SanitizedContent.call(this,a)};goog.inherits(soydata.SanitizedUri,soydata.SanitizedContent);soydata.SanitizedUri.prototype.contentKind=soydata.SanitizedContentKind.URI;soydata.SanitizedHtmlAttribute=function(a){soydata.SanitizedContent.call(this,a)};goog.inherits(soydata.SanitizedHtmlAttribute,soydata.SanitizedContent);soydata.SanitizedHtmlAttribute.prototype.contentKind=soydata.SanitizedContentKind.HTML_ATTRIBUTE;soy.renderElement=goog.soy.renderElement;soy.renderAsFragment=function(d,b,a,c){return goog.soy.renderAsFragment(d,b,c,new goog.dom.DomHelper(a))};soy.renderAsElement=function(d,b,a,c){return goog.soy.renderAsElement(d,b,c,new goog.dom.DomHelper(a))};soy.$$augmentData=function(d,a){function e(){}e.prototype=d;var c=new e();for(var b in a){c[b]=a[b]}return c};soy.$$getMapKeys=function(c){var b=[];for(var a in c){b.push(a)}return b};soy.$$getDelegateId=function(a){return a};soy.$$DELEGATE_REGISTRY_PRIORITIES_={};soy.$$DELEGATE_REGISTRY_FUNCTIONS_={};soy.$$registerDelegateFn=function(e,c,b){var d="key_"+e;var a=soy.$$DELEGATE_REGISTRY_PRIORITIES_[d];if(a===undefined||c>a){soy.$$DELEGATE_REGISTRY_PRIORITIES_[d]=c;soy.$$DELEGATE_REGISTRY_FUNCTIONS_[d]=b}else{if(c==a){throw Error('Encountered two active delegates with same priority (id/name "'+e+'").')}else{}}};soy.$$getDelegateFn=function(b){var a=soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_"+b];return a?a:soy.$$EMPTY_TEMPLATE_FN_};soy.$$EMPTY_TEMPLATE_FN_=function(a,c,b){return""};soy.$$escapeHtml=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML){return a.content}return soy.esc.$$escapeHtmlHelper(a)};soy.$$escapeHtmlRcdata=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML){return soy.esc.$$normalizeHtmlHelper(a.content)}return soy.esc.$$escapeHtmlHelper(a)};soy.$$stripHtmlTags=function(a){return String(a).replace(soy.esc.$$HTML_TAG_REGEX_,"")};soy.$$escapeHtmlAttribute=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML){return soy.esc.$$normalizeHtmlHelper(soy.$$stripHtmlTags(a.content))}return soy.esc.$$escapeHtmlHelper(a)};soy.$$escapeHtmlAttributeNospace=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML){return soy.esc.$$normalizeHtmlNospaceHelper(soy.$$stripHtmlTags(a.content))}return soy.esc.$$escapeHtmlNospaceHelper(a)};soy.$$filterHtmlAttribute=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML_ATTRIBUTE){return a.content.replace(/=([^"']*)$/,'="$1"')}return soy.esc.$$filterHtmlAttributeHelper(a)};soy.$$filterHtmlElementName=function(a){return soy.esc.$$filterHtmlElementNameHelper(a)};soy.$$escapeJs=function(a){return soy.$$escapeJsString(a)};soy.$$escapeJsString=function(a){if(typeof a==="object"&&a.contentKind===soydata.SanitizedContentKind.JS_STR_CHARS){return a.content}return soy.esc.$$escapeJsStringHelper(a)};soy.$$escapeJsValue=function(a){if(a==null){return" null "}switch(typeof a){case"boolean":case"number":return" "+a+" ";default:return"'"+soy.esc.$$escapeJsStringHelper(String(a))+"'"}};soy.$$escapeJsRegex=function(a){return soy.esc.$$escapeJsRegexHelper(a)};soy.$$problematicUriMarks_=/['()]/g;soy.$$pctEncode_=function(a){return"%"+a.charCodeAt(0).toString(16)};soy.$$escapeUri=function(a){if(typeof a==="object"&&a.contentKind===soydata.SanitizedContentKind.URI){return soy.$$normalizeUri(a)}var b=soy.esc.$$escapeUriHelper(a);soy.$$problematicUriMarks_.lastIndex=0;if(soy.$$problematicUriMarks_.test(b)){return b.replace(soy.$$problematicUriMarks_,soy.$$pctEncode_)}return b};soy.$$normalizeUri=function(a){return soy.esc.$$normalizeUriHelper(a)};soy.$$filterNormalizeUri=function(a){return soy.esc.$$filterNormalizeUriHelper(a)};soy.$$escapeCssString=function(a){return soy.esc.$$escapeCssStringHelper(a)};soy.$$filterCssValue=function(a){if(a==null){return""}return soy.esc.$$filterCssValueHelper(a)};soy.$$changeNewlineToBr=function(a){return goog.string.newLineToBr(String(a),false)};soy.$$insertWordBreaks=function(b,a){return goog.format.insertWordBreaks(String(b),a)};soy.$$truncate=function(c,a,b){c=String(c);if(c.length<=a){return c}if(b){if(a>3){a-=3}else{b=false}}if(soy.$$isHighSurrogate_(c.charAt(a-1))&&soy.$$isLowSurrogate_(c.charAt(a))){a-=1}c=c.substring(0,a);if(b){c+="..."}return c};soy.$$isHighSurrogate_=function(a){return 55296<=a&&a<=56319};soy.$$isLowSurrogate_=function(a){return 56320<=a&&a<=57343};soy.$$bidiFormatterCache_={};soy.$$getBidiFormatterInstance_=function(a){return soy.$$bidiFormatterCache_[a]||(soy.$$bidiFormatterCache_[a]=new goog.i18n.BidiFormatter(a))};soy.$$bidiTextDir=function(b,a){if(!b){return 0}return goog.i18n.bidi.detectRtlDirectionality(b,a)?-1:1};soy.$$bidiDirAttr=function(b,c,a){return new soydata.SanitizedHtmlAttribute(soy.$$getBidiFormatterInstance_(b).dirAttr(c,a))};soy.$$bidiMarkAfter=function(b,d,a){var c=soy.$$getBidiFormatterInstance_(b);return c.markAfter(d,a)};soy.$$bidiSpanWrap=function(a,c){var b=soy.$$getBidiFormatterInstance_(a);return b.spanWrap(c+"",true)};soy.$$bidiUnicodeWrap=function(a,c){var b=soy.$$getBidiFormatterInstance_(a);return b.unicodeWrap(c+"",true)};soy.esc.$$escapeUriHelper=function(a){return encodeURIComponent(String(a))};soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_={"\x00":"\x26#0;","\x22":"\x26quot;","\x26":"\x26amp;","\x27":"\x26#39;","\x3c":"\x26lt;","\x3e":"\x26gt;","\x09":"\x26#9;","\x0a":"\x26#10;","\x0b":"\x26#11;","\x0c":"\x26#12;","\x0d":"\x26#13;"," ":"\x26#32;","-":"\x26#45;","/":"\x26#47;","\x3d":"\x26#61;","`":"\x26#96;","\x85":"\x26#133;","\xa0":"\x26#160;","\u2028":"\x26#8232;","\u2029":"\x26#8233;"};soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_[a]};soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_={"\x00":"\\x00","\x08":"\\x08","\x09":"\\t","\x0a":"\\n","\x0b":"\\x0b","\x0c":"\\f","\x0d":"\\r","\x22":"\\x22","\x26":"\\x26","\x27":"\\x27","/":"\\/","\x3c":"\\x3c","\x3d":"\\x3d","\x3e":"\\x3e","\\":"\\\\","\x85":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029","$":"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"};soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_[a]};soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_={"\x00":"\\0 ","\x08":"\\8 ","\x09":"\\9 ","\x0a":"\\a ","\x0b":"\\b ","\x0c":"\\c ","\x0d":"\\d ","\x22":"\\22 ","\x26":"\\26 ","\x27":"\\27 ","(":"\\28 ",")":"\\29 ","*":"\\2a ","/":"\\2f ",":":"\\3a ",";":"\\3b ","\x3c":"\\3c ","\x3d":"\\3d ","\x3e":"\\3e ","@":"\\40 ","\\":"\\5c ","{":"\\7b ","}":"\\7d ","\x85":"\\85 ","\xa0":"\\a0 ","\u2028":"\\2028 ","\u2029":"\\2029 "};soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_[a]};soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_={"\x00":"%00","\x01":"%01","\x02":"%02","\x03":"%03","\x04":"%04","\x05":"%05","\x06":"%06","\x07":"%07","\x08":"%08","\x09":"%09","\x0a":"%0A","\x0b":"%0B","\x0c":"%0C","\x0d":"%0D","\x0e":"%0E","\x0f":"%0F","\x10":"%10","\x11":"%11","\x12":"%12","\x13":"%13","\x14":"%14","\x15":"%15","\x16":"%16","\x17":"%17","\x18":"%18","\x19":"%19","\x1a":"%1A","\x1b":"%1B","\x1c":"%1C","\x1d":"%1D","\x1e":"%1E","\x1f":"%1F"," ":"%20","\x22":"%22","\x27":"%27","(":"%28",")":"%29","\x3c":"%3C","\x3e":"%3E","\\":"%5C","{":"%7B","}":"%7D","\x7f":"%7F","\x85":"%C2%85","\xa0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"};soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_[a]};soy.esc.$$MATCHER_FOR_ESCAPE_HTML_=/[\x00\x22\x26\x27\x3c\x3e]/g;soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_=/[\x00\x22\x27\x3c\x3e]/g;soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_=/[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_=/[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_=/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTE_=/^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i;soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_=/^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i;soy.esc.$$escapeHtmlHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$normalizeHtmlHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$escapeHtmlNospaceHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$normalizeHtmlNospaceHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$escapeJsStringHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_,soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)};soy.esc.$$escapeJsRegexHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_,soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)};soy.esc.$$escapeCssStringHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_,soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_)};soy.esc.$$filterCssValueHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_.test(b)){return"zSoyz"}return b};soy.esc.$$normalizeUriHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_,soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)};soy.esc.$$filterNormalizeUriHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_.test(b)){return"zSoyz"}return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_,soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)};soy.esc.$$filterHtmlAttributeHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTE_.test(b)){return"zSoyz"}return b};soy.esc.$$filterHtmlElementNameHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_.test(b)){return"zSoyz"}return b};soy.esc.$$HTML_TAG_REGEX_=/<(?:!|\/?[a-zA-Z])(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.soy.soy-template-plugin:soy-deps', location = 'js/atlassian-deps.js' */
window.atl_soy=window.atl_soy||{};atl_soy.concat=function(d,c){if(d.concat){return d.concat(c)}var e={};for(var f in d){if(d.hasOwnProperty(f)){e[f]=d[f]}}for(var f in c){if(c.hasOwnProperty(f)){e[f]=c[f]}}return e};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/confluence.js' */
(function(a){Confluence={getContextPath:function(){return AJS.Meta.get("context-path")},getBaseUrl:function(){return AJS.$("#confluence-base-url").attr("content")||""},getBuildNumber:function(){return AJS.Meta.get("build-number")},getContentId:function(){var b=AJS.Meta.get("content-id");if(!+b){b=AJS.Meta.get("page-id")}if(!+b){b="0"}return b},getXsrfToken:function(){return AJS.Meta.get("atl-token")},runBinderComponents:function(){for(var b in Confluence.Binder){if(Confluence.Binder.hasOwnProperty(b)){try{Confluence.Binder[b]()}catch(c){AJS.logError("Exception in initialising of component '"+b+"': "+c.message)}}}},placeFocus:function(){Confluence.Binder.placeFocus()},unescapeEntities:function(c){var b={amp:"&",lt:"<",gt:">","#39":"'",quot:'"'};if(c==null){return c}return(""+c).replace(/&[#\d\w]+;/g,function(e){var d=e.substring(1,e.length-1);return b[d]||e})},sessionCheck:function(f,d){var e=AJS.Meta.get("remote-user");if(!e){return}var b=this.getContextPath()+AJS.REST.getBaseUrl()+"session/check/"+e;var c=this;return a.getJSON(b).done(function(){AJS.debug("SESSION CHECK - OK - "+e)}).fail(function(){AJS.log("SESSION CHECK - FAIL - "+e);c.sessionFail(f,d)})},sessionFail:function(f,e){if(!f){var d=a(".aui-dialog:visible");if(d.length){f=d.find(".dialog-panel-body").empty();d.find(".aui-button").attr("disabled","disabled")}else{throw new Error("sessionFail method really expected a visible dialog about now :/")}}if(!e){var c='<a class="reload" href="">';var b="</a>";e=AJS.format("Your session has expired. Please {0}reload{1} the page to try again.",c,b);f.on("click","a.reload",function(){window.location.reload()})}AJS.messages.warning(f,{body:e,closeable:false,shadowed:true})}};Confluence.Binder={placeFocus:function(){var c,b=-1;AJS.$("input[data-focus]").each(function(){var e=AJS.$(this),d=e.attr("data-focus");if(d>b){b=d;c=e}});c&&c.focus()}}})(AJS.$);AJS.toInit(function(){Confluence.runBinderComponents()});AJS.Confluence=Confluence;Confluence.hintManager=function(b){if(!AJS.$.isArray(b)){throw new Error("Hints passed in must be an array of strings")}var a=Math.floor(Math.random()*b.length);return{getNextHint:function(){var c=b[a];a=(a+1)%b.length;return c}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/confluence-defaults.js' */
(function(a){Confluence.Defaults={maxResults:50}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/confluence-highlighter.js' */
(function(){Confluence.Highlighter=function(e,a){var g,b;if(e&&e.length&&e[0]){var h=[];for(var d=0,f=e.length;d<f;d++){var c=e[d];c&&h.push(c.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"))}g=new RegExp("("+h.join("|")+")","gi");b=AJS.template(a||"<strong>{highlight}</strong>").fill({highlight:"$1"}).toString()}return{highlight:function(i,j){if(!i){return i}if(!j){i=AJS.template.escape(i)}if(!g){return i}return i.replace(g,b)},safeHighlight:function(l){if(!l){return l}if(g&&b){var j=b.split("$1");var m=j[0];var i=j[1];l=l.replace(g,"@@@hl@@@$1@@@endhl@@@")}var k=_.escape(l).replace(/@@@hl@@@/gi,m).replace(/@@@endhl@@@/gi,i);return k}}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/position.js' */
AJS.Position=(function(a){return{spaceAboveBelow:function(k,e){var b=e.position().top,d,f,j,h=e.outerHeight(true),c,g,i;if(k.nodeName=="IFRAME"){d=k.contentWindow||k.contentDocument;c=a(k).height();f=a(d.document||d);g=b-f.scrollTop()}else{f=a(k);c=f.height();g=b-f.position().top}i=c-g-h;return{above:g,below:i}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/cache-manager.js' */
(function(){AJS.Confluence.cacheManager=function(a){if(!(this instanceof AJS.Confluence.cacheManager)){return new AJS.Confluence.cacheManager(a)}this.cache={};this.cacheStack=[];this.cacheSize=a||30};AJS.Confluence.cacheManager.prototype.get=function(b){var c=this.cache[b];if(!c){return}var a=this.cacheStack[this.cacheStack.length-1][0]+1;c.weight=a;this.cacheStack.push([a,b]);return c.value};AJS.Confluence.cacheManager.prototype.put=function(b,d){var a=this.cacheStack.length?(this.cacheStack[this.cacheStack.length-1][0]+1):0;this.cache[b]={weight:a,value:d};this.cacheStack.push([a,b]);var e,c,f;while(this.cacheStack.length>this.cacheSize){e=this.cacheStack.shift();c=e[0];f=e[1];if(c===this.cache[f].weight){delete this.cache[f]}}};AJS.Confluence.cacheManager.prototype.clear=function(){this.cache={};this.cacheStack=[]}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/localstorage-cache-manager.js' */
(function(a){AJS.Confluence.localStorageCacheManager=function(i,d){this.cache={};this.cacheStack=[];this.cacheSize=d||30;if(!window.localStorage||(typeof i!=="string"&&i.length>0)){return}var f="Confluence."+i,c=f+".cache",h=f+".cacheStack";var b=localStorage.getItem(c);var j=localStorage.getItem(h);var k=this;if(b&&j){try{this.cache=JSON.parse(b);this.cacheStack=JSON.parse(j)}catch(g){this.cache={};this.cacheStack={}}}a(window).unload(function(){localStorage[c]=JSON.stringify(k.cache);localStorage[h]=JSON.stringify(k.cacheStack)})};AJS.Confluence.localStorageCacheManager.prototype=new AJS.Confluence.cacheManager()})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/confluence-storage-manager.js' */
Confluence.storageManager=function(a){return AJS.storageManager("confluence",a)};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/input-driven-dropdown.js' */
(function(d){var c=function(f){var h=f.$.closest(".aui-dd-parent").width(),g=20;if(!h){f.$.width("25em");h=f.$.width()}d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=AJS("var","&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth+l>h-g){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f){d("a span:not(.icon)",f.$).each(function(){var i=d(this);var g;try{g=AJS.dropDown.getAdditionalPropertyValue(i,"spaceName")}catch(h){AJS.logError("Problem getting space name: "+h.message)}var j=i.text();if(g){j+=" ("+AJS("i").html(g).text()+")"}i.attr("title",j)})};var e=function(k,g){var j=k.options,h=k.dd;if(h){h.hide();h.$.remove()}j.ajsDropDownOptions=j.ajsDropDownOptions||{};if(j.ajsDropDownOptions&&!j.ajsDropDownOptions.alignment){j.ajsDropDownOptions.alignment="left"}j.ajsDropDownOptions.selectionHandler=j.ajsDropDownOptions.selectionHandler||function(o,n){if(o.type!="click"){var l=d("a",n).first();var m=l.attr("href");var p=o.type==="keydown"&&(o.metaKey||o.ctrlKey)&&o.which===13;if(p){window.open(m,"_blank")}else{l.click();document.location=m}o.preventDefault()}};var f=k.dd=AJS.dropDown(g.matrix,j.ajsDropDownOptions)[0];if(j.ajsDropDownOptions&&j.ajsDropDownOptions.className){f.$.addClass(j.ajsDropDownOptions.className)}if(j.dropdownPlacement){j.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}var i=new Confluence.Highlighter(g.queryTokens||[g.query]);d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var l=d(this);l.html(i.safeHighlight(l.text()))});c(f);b(f);if(j.dropdownPostprocess){j.dropdownPostprocess(f.$)}f.show(k._effect);if(typeof j.onShow=="function"){j.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AJS.Confluence.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(l,k,f){var i=this;if(l!=i._value){i._value=l;i.busy=false;clearTimeout(i._timer);var g=i.options.minLengthForGetData||2,j=new RegExp("\\S{"+g+",}");if(k||j.test(l)){var m=i.cacheManager.get(l);if(m){e(i,m)}else{i.busy=true;var h=function(){i.options.getDataAndRunCallback.call(i,l,function(){i.show.apply(this,arguments);f&&f(l)})};if(i.options.dropDownDelay===0){h()}else{i._timer=setTimeout(function(){h()},i.options.dropDownDelay||200)}}}else{i.dd&&i.dd.hide();f&&f(l)}}};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AJS.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/quicksearchdropdown.js' */
(function(a){a.fn.quicksearch=function(f,i,e){if(i){e.onShow=i}e.makeParams=e.makeParams||function(j){return{query:j}};var c=function(l){var m=l.statusMessage;var k;if(m){k=[[{html:l.statusMessage,className:"error"}]]}else{if(e.makeRestMatrixFromData){var j=e.makeRestMatrixFromData(l);k=AJS.REST.convertFromRest(j);if(e.addDropdownData){k=e.addDropdownData(k)}}else{k=l.contentNameMatches}}return k};var d,h;if(typeof f=="function"){h=f();d=function(k){var j=f();if(j!=h){h=j;k.clearCache()}return j}}else{d=function(){return f}}e.getDataAndRunCallback=e.getDataAndRunCallback||function(n,o){var m=this,k=d(m,n);if(e.includeUrlPrefix==undefined||e.includeUrlPrefix){k=(AJS.Meta.get("context-path")||"")+k}var j=a.data(m,"lastRequest");if(j){j.abort()}var l=a.ajax({type:"GET",dataType:"json",url:k,xhrFields:{withCredentials:true},data:e.makeParams(n),success:function(q,r){a(window).trigger("quicksearch.ajax-success",{url:k,json:q,resultStatus:r});if(document.activeElement!=b[0]){return}var p=c(q);if(q.results&&q.results.length>0){o.call(m,p,n,q.queryTokens)}else{o.call(m,p)}},global:false,timeout:5000,error:function(s,q,r){a(window).trigger("quicksearch.ajax-error",{url:k,xmlHttpRequest:s,resultStatus:q,errorThrown:r});if(document.activeElement!=b[0]){return}if(q=="timeout"){var p=c({statusMessage:"Timeout",query:n});o.call(m,p,null)}},complete:function(){a.removeData(m,"lastRequest");b.trigger("quick-search-loading-stop")}});a.data(m,"lastRequest",l);b.trigger("quick-search-loading-start")};var g=AJS.inputDrivenDropdown(e),b=a(this);b.keyup(function(j){if(j.which==13||j.which==9){return}!b.hasClass("placeholded")&&g.change(this.value,false,function(k){b.attr("data-last-search",k)})});b.quickSearchControl=g;b.bind("clearCache.autocomplete",function(){g.clearCache()});b.bind("hide.autocomplete",function(){g.hide()});return b}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/placeholder.js' */
AJS.Confluence.Binder.placeholder=function(c){c=c||document.body;var d=AJS.$;var a=["autocomplete-multiuser","select2-input"];var b=document.createElement("input");if("placeholder" in b){return}d('textarea[placeholder][data-placeholder-bound!="true"],input[placeholder][data-placeholder-bound!="true"],input.default-text[data-placeholder-bound!="true"]',c).each(function(){var h=d(this).attr("data-placeholder-bound","true");for(var e=0,j=a.length;e<j;++e){if(h.hasClass(a[e])){return}}h.bind("reset.placeholder",function(l,k){var i=k.element.closest("form");i.bind("submit",function(){if(k.element.hasClass("placeholded")){k.element.val("")}})});var f=function(){if(d.trim(h.val()).length){return}var i=h.attr("placeholder")||h.attr("data-default-text");h.val(i).addClass("placeholded").trigger("reset.placeholder",{element:h,defaultText:i});h.trigger("reset.default-text")},g=function(){if(!h.hasClass("placeholded")){return}h.val("");h.removeClass("placeholded")};f();h.blur(f).focus(g).mousedown(g)})};Confluence.Binder.inputDefaultText=Confluence.Binder.placeholder;
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/inserter.js' */
AJS.Confluence.Binder.insertOnEvent=function(){var a=AJS.$;a('.insert-on-event[data-inserter-bound!="true"]').each(function(){var f=a(this).attr("data-inserter-bound","true"),e=a(f.attr("data-target"))[0],c=f.attr("data-event"),d=f.attr("data-insert-position"),b=f.attr("data-insert-unique-key");if(e&&c&&d){a(self).bind(c,function(j,i){if(e==i.target){if(b){var g=i.content[b],h={};a(".key-holder",d).each(function(){h[a(this).attr("data-key")]=true});if(g in h){return}}a(d).append(AJS.template(f.text()).fill(i.content))}})}})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/autocomplete-user.js' */
Confluence.Binder.autocompleteUserOrGroup=function(b){b=b||document.body;var c=AJS.$;var a=function(e){if(!e||!e.result){throw new Error("Invalid JSON format")}c.each(e.result,function(f,g){g.key=g.username||g.name;if(g.type==="group"){g.title=g.name;g.link=[];g.thumbnailLink={href:AJS.contextPath()+"/images/icons/avatar_group_48.png"}}});var d=[];d.push(e.result);return d};c.each(["user","group","user-or-group"],function(d,e){c("input.autocomplete-"+e+'[data-autocomplete-user-or-group-bound!="true"]',b).each(function(){var j=c(this).attr("data-autocomplete-user-or-group-bound","true").attr("autocomplete","off");var h=j.attr("data-max")||10,l=j.attr("data-alignment")||"left",k=j.attr("data-dropdown-target"),g=null,i=j.attr("data-target"),f=i&&c(i);if(k){g=c(k)}else{g=c("<div></div>");j.after(g)}if(j.attr("data-resize-to-input")){g.width(j.outerWidth());g.addClass("resize-to-input")}g.addClass("aui-dd-parent autocomplete");j.quicksearch(AJS.REST.getBaseUrl()+"search/"+e+".json",function(){j.trigger("open.autocomplete-user-or-group");if(e==="user"){j.trigger("open.autocomplete-user")}},{makeParams:function(m){return{"max-results":h,query:m}},dropdownPlacement:function(m){g.append(m)},makeRestMatrixFromData:a,addDropdownData:function(m){if(!m.length){var n=j.attr("data-none-message");if(n){m.push([{name:n,className:"no-results",href:"#"}])}}return m},ajsDropDownOptions:{alignment:l,displayHandler:function(m){if(m.restObj&&m.restObj.username){return m.name+" ("+AJS.escapeHtml(m.restObj.username)+")"}return m.name},selectionHandler:function(p,o){if(o.find(".search-for").length){j.trigger("selected.autocomplete-user-or-group",{searchFor:j.val()});if(e==="user"){j.trigger("selected.autocomplete-user",{searchFor:j.val()})}return}if(o.find(".no-results").length){this.hide();p.preventDefault();return}var n=c("span:eq(0)",o).data("properties");if(f){var m=n.restObj.title;if(n.restObj.username){m+=" ("+n.restObj.username+")"}j.val(m);f.val(n.restObj.key)}else{j.val(n.restObj.key)}j.trigger("selected.autocomplete-user-or-group",{content:n.restObj});if(e==="user"){j.trigger("selected.autocomplete-user",{content:n.restObj})}this.hide();p.preventDefault()}}})})});Confluence.Binder.autocompleteUser=function(){}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/autocomplete-content.js' */
(function(b){var a=function(f){if(!f||!f.group){throw new Error("Invalid JSON format")}var e=[];for(var g=0,h=f.group.length;g<h;g++){e.push(f.group[g].result)}return e};var d=function(p,i,f,g){var o=b(p),t="data-autocomplete-content-bound";if(o.attr(t)){return}if(typeof i=="string"){i=[i]}o.attr(t,"true").attr("autocomplete","off");var q=i.join(","),h=o.attr("data-max")||10,m=o.attr("data-alignment")||"left",l=o.attr("data-spacekey"),k=o.attr("data-none-message"),n=o.attr("data-search-link-message"),s=o.attr("data-template")||f,e=o.attr("data-target"),j=o.attr("data-dropdown-target"),r=null;if(j){r=b(j)}else{r=b("<div></div>");o.after(r)}r.addClass("aui-dd-parent autocomplete");o.focus(function(){l=o.attr("data-spacekey")});o.quicksearch(AJS.REST.getBaseUrl()+"search/name.json",null,{onShow:function(){o.trigger("open.autocomplete-content",{contentTypes:i})},makeParams:function(v){var u={"max-results":h,pageSize:h,type:q,query:v};if(l){u.spaceKey=l}return u},dropdownPlacement:function(u){r.append(u)},makeRestMatrixFromData:a,addDropdownData:function(v){if(!v.length){if(k){v.push([{name:k,className:"no-results",href:"#"}])}}if(n){var w=AJS.escapeHtml(o.val());var u=AJS.format(n,w);v.push([{className:"search-for",name:u,href:"#"}])}return v},ajsDropDownOptions:{alignment:m,displayHandler:g,selectionHandler:function(x,v){AJS.debug("autocomplete-content: ajsDropDownOptions.selectionHandler");if(v.find(".search-for").length){o.trigger("selected.autocomplete-content",{contentTypes:i,searchFor:o.val()});return}if(v.find(".no-results").length){AJS.debug("no results selected");this.hide();x.preventDefault();return}var u=v.data("properties");o.val(AJS.template(s).fillHtml(u.restObj));if(e){var w=AJS.template(f).fillHtml(u.restObj);b(e).val(w)}o.trigger("selected.autocomplete-content",{contentTypes:i,content:u.restObj,selection:v});this.hide();x.preventDefault()}}})};Confluence.Binder.autocompleteSpace=function(e){e=e||document.body;b("input.autocomplete-space",e).each(function(){d(this,["spacedesc","personalspacedesc"],"{name}",function(f){return f.name})})};Confluence.Binder.autocompleteAttachment=function(e){e=e||document.body;b("input.autocomplete-attachment",e).each(function(){d(this,"attachment","{fileName}",function(f){var g=(f.restObj&&f.restObj.fileName)||f.name;if(f.restObj&&f.restObj.space&&f.restObj.space.title){g+=" ("+f.restObj.space.title+")"}return g})})};var c=function(e){return(e.restObj&&e.restObj.title&&AJS.escapeHtml(e.restObj.title))||e.name};Confluence.Binder.autocompletePage=function(e){e=e||document.body;b("input.autocomplete-page",e).each(function(){d(this,"page","{title}",c)})};Confluence.Binder.autocompleteBlogpost=function(e){e=e||document.body;b("input.autocomplete-blogpost",e).each(function(){d(this,"blogpost","{title}",c)})};Confluence.Binder.autocompleteConfluenceContent=function(e){e=e||document.body;b("input.autocomplete-confluence-content",e).each(function(){d(this,["page","blogpost"],"{title}",c)})};Confluence.Binder.autocompleteSearch=function(e){e=e||document.body;b("input.autocomplete-search",e).each(function(){d(this,[],"{title}",c)})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/attachment-uploader.js' */
(function(b){var a=function(c,e){var d;return b.extend({getForm:function(){return b("form",c.baseElement)},getUploadingMessageElement:function(){return b(".upload-in-progress",c.baseElement)},pack:function(){},displayErrors:function(f){d.displayMessages(f);this.pack()},clearErrors:function(){d.clearMessages();this.pack()},setUploadInProgress:function(g,h){var f=this.getUploadingMessageElement();if(g){f.html(h||this.getDefaultUploadingMessage())}AJS.setVisible(f,g);AJS.setVisible(this.getForm(),!g)},onUploadSuccess:function(){},getMessageHandler:function(){if(!d){d=AJS.MessageHandler({baseElement:b(".warning",c.baseElement)})}return d},getDefaultErrorMessage:function(){return "Could not upload the file to Confluence. The server may be unavailable."},getDefaultUploadingMessage:function(){return "File uploading\u2026"},getContentId:function(){return AJS.Meta.get("attachment-source-content-id")}},e&&e(c))};Confluence.AttachmentUploader=function(d,g){var c,e,f;c=a(d,g);e=c.getMessageHandler();f=c.getForm();if(AJS.Meta.getBoolean("can-attach-files")){f.ajaxForm({dataType:"json",timeout:3600000,data:{contentId:c.getContentId(),responseFormat:"html"},resetForm:true,beforeSubmit:function(){c.setUploadInProgress(true);e.clearMessages()},success:function(h){c.setUploadInProgress(false);if(e.handleResponseErrors(h,c.getDefaultErrorMessage())){return}c.onUploadSuccess(h.attachmentsAdded||[])},error:function(h){c.setUploadInProgress(false);e.displayMessages(c.getDefaultErrorMessage());AJS.logError("Response from server was: "+h.responseText)}});f.find("input:file").change(function(){f.submit()})}else{f.remove()}return c}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/hover-user.js' */
Confluence.Binder.userHover=(function(){var f=[],b=Confluence.getContextPath(),d=AJS.$;var a=function(i){var h=f[i],g={username:h,target:this};d(self).trigger("hover-user.open",g);d(".ajs-menu-bar",this).ajsMenu();d(".follow, .unfollow",this).each(function(){var j=d(this).click(function(l){if(j.hasClass("waiting")){return}var k=j.hasClass("unfollow")?"/unfollowuser.action":"/followuser.action";j.addClass("waiting");console.log("This is the new file");AJS.safe.post(b+k+"?username="+encodeURIComponent(h)+"&mode=blank",{},function(){j.removeClass("waiting");j.parent().toggleClass("follow-item").toggleClass("unfollow-item");d(self).trigger("hover-user.follow",g)});return AJS.stopEvent(l)})})};var c=["span.user-hover-trigger","a.confluence-userlink","img.confluence-userlink","a.userLogoLink"].join(", ");var e=AJS.DarkFeatures.isEnabled("show.business.group.in.user.hover");return function(){d(c).filter("[data-user-hover-bound!='true']").each(function(){var h=d(this),i=h.attr("data-username");h.attr("title","").attr("data-user-hover-bound","true");d("img",h).attr("title","");var g=d.inArray(i,f);if(g==-1){f.push(i);g=d.inArray(i,f)}d(this).addClass("userlink-"+g)});d.each(f,function(h){var g=b+"/users/userinfopopup.action?username="+encodeURIComponent(f[h]);if(e){g+="&profileGroups=business"}AJS.contentHover(d(".userlink-"+h),h,g,a)})}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/favourites.js' */
(function(c){var e=[];var b=function(f){return f.hasClass("icon-remove-fav")};var a=function(g,i,h){var k=b(h),j=h.parent().find(".icon-wait"),f,l;if(i=="page"){f=Confluence.getContextPath()+"/json/"+(k?"removefavourite.action":"addfavourite.action");l={entityId:g}}if(i=="space"){f=Confluence.getContextPath()+"/json/"+(k?"removespacefromfavourites.action":"addspacetofavourites.action");l={key:g}}h.addClass("hidden");j.removeClass("hidden");AJS.safe.ajax({url:f,type:"POST",data:l}).done(function(m){AJS.debug(m)}).fail(function(o,n,m){AJS.debug("Error Toggling Favourite: "+n)}).always(function(){j.addClass("hidden");h.parent().find(k?".icon-add-fav":".icon-remove-fav").removeClass("hidden");delete e[g];AJS.trigger(k?"remove-fav-complete":"add-fav-complete")})};var d=function(g,f){if(g.attr("data-favourites-bound")){return}g.delegate(".icon-add-fav, .icon-remove-fav","click",function(k){var i=c(k.target);var h,j=g.attr("data-entity-type");if(f&&f.getEntityId&&typeof f.getEntityId=="function"){h=f.getEntityId(i)}else{h=g.attr("data-entity-id")}if(e[h]){AJS.log("Already busy toggling favourite for "+j+" '"+h+"'. Ignoring request.");return}e[h]=true;a(h,j,i);return false});g.attr("data-favourites-bound",true)};AJS.Confluence.Binder.favourites=function(){c(".entity-favourites").each(function(){if(!c(this).attr("data-favourites-bound")){d(c(this),{})}})};c.fn.favourites=function(f){c(this).each(function(){var g=c(this);d(g,f)})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/watches.js' */
(function(f){var g=[];var e=function(h){return a(h)||d(h)};var a=function(h){return h.hasClass("icon-stop-watching")};var d=function(h){return h.hasClass("link-stop-watching")};var c=function(j,l,k){var i=e(k),o=a(k),m=k.parent().find(".icon-wait"),h,n;if(l=="page"){h=Confluence.getContextPath()+"/users/"+(i?"removepagenotificationajax.action":"addpagenotificationajax.action");n={pageId:j}}if(l=="space"){h=Confluence.getContextPath()+"/users/"+(i?"removespacenotificationajax.action":"addspacenotificationajax.action");n={spaceKey:j}}k.addClass("hidden");m.removeClass("hidden");AJS.safe.ajax({url:h,type:"POST",data:n,success:function(p){AJS.log(p);m.addClass("hidden");if(o){k.parent().find(i?".icon-start-watching":".icon-stop-watching").removeClass("hidden")}else{k.parent().find(i?".link-start-watching":".link-stop-watching").removeClass("hidden")}delete g[j]},error:function(r,q,p){m.addClass("hidden");if(o){k.parent().find(i?".icon-start-watching":".icon-stop-watching").removeClass("hidden")}else{k.parent().find(i?".link-start-watching":".link-stop-watching").removeClass("hidden")}AJS.log("Error Toggling Watching: "+q);delete g[j]}})};var b=function(i,h){if(i.attr("data-watching-bound")){return}i.delegate(".icon-start-watching, .icon-stop-watching, .link-start-watching, .link-stop-watching","click",function(m){var k=f(m.target);var j,l=i.attr("data-entity-type");if(h&&h.getEntityId&&typeof h.getEntityId=="function"){j=h.getEntityId(k)}else{j=i.attr("data-entity-id")}if(g[j]){AJS.log("Already busy toggling favourite for "+l+" '"+j+"'. Ignoring request.");return}g[j]=true;c(j,l,k);return false});i.attr("data-watching-bound",true)};AJS.Confluence.Binder.watching=function(){f(".entity-watching").each(function(){if(!f(this).attr("data-watching-bound")){b(f(this),{})}})};f.fn.watching=function(h){f(this).each(function(){var i=f(this);b(i,h)})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:core', location = '/includes/soy/dialog.soy' */
// This file was automatically generated from dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dialog == 'undefined') { Confluence.Templates.Dialog = {}; }


Confluence.Templates.Dialog.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.customHelpLink({href: opt_data.href, text: soy.$$escapeHtml("Help")}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dialog.customHelpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="dialog-help-link"><a href="', soy.$$escapeHtml(opt_data.href), '" target="_blank">', soy.$$escapeHtml(opt_data.text), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:property-panel-js', location = '/includes/js/components/property-panel.js' */
(function(d){var b=function(h,j){var l=-13,g=d('<div class="aui-tip-parent"></div>');if(d.browser.msie&&d.browser.version<9){l=-15}var f=j?14:7;h.prepend(g).css({zIndex:3001});var i=Raphael(g[0],15,f),k=i.path("M0,6.0001l6.00001-6.00001,6.0001,6.0001").attr({fill:"#f5f5f5",stroke:"#e2e2e2"});i.canvas.style.zIndex=3000;tip=i;if(j){k.rotate(180);if(d.support.opacity){k.clone().translate(2,3).attr({fill:"#A0A0A0",stroke:"#A0A0A0",opacity:".5",blur:"1"}).toBack()}l=l+h.outerHeight()+11}g.css({top:l,left:10});return i},c=function(f,g){return Raphael.shadow(0,0,f.outerWidth(true),f.outerHeight(true),{radius:5,target:f[0],offset:2})},e=function(g,h,f,k){var i=f.outerHeight(),j=i+~~k,l=AJS.Position.spaceAboveBelow(g[0],h);if(l.below>=j){return false}return(l.above>=j)},a=function(g,f){f=f||{};setTimeout(function(){var k=AJS.Rte.Content.offset(g.anchor),s=g.panel.width(),p=s+k.left-d(window).width()+10,t=7,h=0,i=d(g.anchor).outerHeight(),o,j=k.left-(p>0?p:0)-h;if(g.shouldFlip){o=k.top-t-g.panel.outerHeight()-4}else{o=k.top+t+i}if(g.options.anchorIframe){var r=d(g.options.anchorIframe),n=r.offset().top+r.height()-g.panel.outerHeight()-10;o=Math.min(o,n)}g.panel.find(".aui-tip-parent").css({left:Math.min(Math.abs(k.left-j)+10,s-12)});j=Math.max(0,j);var m={top:o,left:j},q=g.panel.add(g.shadow),l=function(){if(g.shadow){g.shadow.css("left",g.panel.position().left-1)}};f.animate?q.animate(m,f.animateDuration,l):(function(){q.css(m);l()})()},f.delay||0)};AJS.Confluence.PropertyPanel={shouldCreate:true,current:null,createFromButtonModel:function(o,g,n,q){var f=AJS("div").attr({"class":"panel-buttons"});for(var k=0,p=n.length;k<p;k++){if(!n[k]){continue}var m=n[k],l=m.html||'<span class="icon"></span>',h=[];if(m.text){l+='<span class="panel-button-text">'+m.text+"</span>"}m.className&&h.push(m.className);m.disabled&&h.push("disabled");m.selected&&h.push("selected");!n[k+1]&&h.push("last");!n[k-1]&&h.push("first");var j;if(!m.html){j=AJS("a").attr({href:n[k].href||"#"}).addClass("aui-button").html(l);if(m.disabled){j.attr("title",m.disabledText);j.disable();j.click(function(i){return AJS.stopEvent(i)})}else{n[k].click&&(function(r,i,s){i.click(function(t){r.click(i,s);return AJS.stopEvent(t)})})(n[k],j,g)}}else{j=d(m.html)}m.tooltip&&j.attr("data-tooltip",m.tooltip);j.addClass(h.join(" "));f.append(j)}return this.create(o,g,f,q)},create:function(j,g,i,p){p=p||{};AJS.Rte.BookmarkManager.storeBookmark();var l=d("#property-panel"),f,n=p.enableFlip==undefined||p.enableFlip,o;l.length&&this.destroy();l=AJS("div").addClass("aui-property-panel-parent").addClass(j+"-panel").attr("id","property-panel").appendTo("body");f=AJS("div").addClass("aui-property-panel").append(i);l.append(f).css({top:0,left:-10000});o=n&&e(d(p.anchorIframe||d(g).parent()),d(g),l,10);var h=this;i.find(".last:last").css({"margin-right":0});var m=c(l,o),k=b(l,o);this.current={anchor:g,panel:l,hasAnchorChanged:function(q){return q&&h.hasAnchorChanged(q)},snapToElement:function(q){a(this,q)},shouldFlip:o,shadow:m,tip:k,options:p,updating:true,type:j};a(this.current);f=this.current;AJS.$(document).bind("keydown.property-panel.escape",function(q){if(q.keyCode===27){AJS.Confluence.PropertyPanel.destroy()}});AJS.$(document).bind("click.property-panel",function(q){if(!AJS.$(q.target).closest("#property-panel").length){AJS.Confluence.PropertyPanel.destroy()}});AJS.trigger("created.property-panel",this.current);this.current.updating=false;return this.current},destroy:function(){if(!this.current){AJS.log("PropertyPanel.destroy: called with no current PropertyPanel, returning");return}if(this.current.updating){AJS.log("PropertyPanel.destroy: called while updating, returning");return}AJS.trigger("destroyed.property-panel",this.current);AJS.$(document).unbind(".property-panel").unbind(".contextToolbar");this.current.panel.remove();this.current.shadow&&this.current.shadow.remove();this.current=null},hasAnchorChanged:function(f){var g=this.current;if(g&&d(g.anchor)[0]==d(f)[0]){return(g.options.originalHeight&&(g.options.originalHeight!=d(f).height()))}return true}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-autocomplete-deprecated', location = 'js/jquery/jquery.autocomplete.js' */
(function(A){AJS.log("DEPRECATED: jquery.autocomplete.js - See https://ecosystem.atlassian.net/browse/AUI-393");A.fn.autocomplete=function(B,C,K){K=typeof C=="function"?C:(typeof K=="function"?K:function(){});C=!isNaN(Number(C))?C:3;var J=this;J[0].lastSelectedValue=J.val();var H=A(document.createElement("ol"));var D=J.offset();var G=parseInt(A("body").css("border-left-width"));H.css({position:"absolute",width:J.outerWidth()-2+"px"});H.addClass("autocompleter");this.after(H);H.css({margin:(Math.abs(this.offset().left-H.offset().left)>=Math.abs(this.offset().top-H.offset().top))?J.outerHeight()+"px 0 0 -"+J.outerWidth()+"px":"-1px 0 0 0"});H.hide();function F(){H.hide();A(document).unbind("click",F)}function E(){var L=J.val();if(L.length>=C&&L!=J[0].lastQuery&&L!=J[0].lastSelectedValue){A.getJSON(B+encodeURI(L),function(P){var R="";L=L.toLowerCase();var U=L.split(" ");for(var Q=0,W=P.length;Q<W;Q++){var S=false;if(P[Q].fullName&&P[Q].username){var V=P[Q].fullName+" ("+P[Q].username+")";var M=P[Q].fullName.split(" ");for(var O=0,T=M.length;O<T;O++){for(var N=0;N<U.length;N++){if(M[O].toLowerCase().indexOf(U[N])==0){M[O]="<strong>"+M[O].substring(0,U[N].length)+"</strong>"+M[O].substring(U[N].length);S=true}}}if(!S){for(var N=0;N<U.length;N++){if(P[Q].username&&P[Q].username.toLowerCase().indexOf(U[N])==0){P[Q].username="<strong>"+P[Q].username.substring(0,U[N].length)+"</strong>"+P[Q].username.substring(U[N].length)}}}P[Q].fullName=M.join(" ");R+="<li><span>"+P[Q].fullName+"</span> <span class='username-in-autocomplete-list'>("+P[Q].username+")</span><i class='fullDetails'>"+V+"</i><i class='username'>"+P[Q].username+"</i><i class='fullName'>"+P[Q].fullName+"</i></li>"}if(P[Q].status){R+="<li>"+P[Q].status+"</li>"}}H.html(R);A("li",H).click(function(Y){Y.stopPropagation();var X=A("i.fullDetails",this).html();I(X)}).hover(function(){A(".focused").removeClass("focused");A(this).addClass("focused")},function(){});A(document).click(F);H.show()});J[0].lastQuery=L}else{if(L.length<C){F()}}}J.keydown(function(M){var L=this;if(this.timer){clearTimeout(this.timer)}var N={"40":function(){var O=A(".focused").removeClass("focused").next();if(O.length){O.addClass("focused")}else{A(".autocompleter li:first").addClass("focused")}},"38":function(){var O=A(".focused").removeClass("focused").prev();if(O.length){O.addClass("focused")}else{A("li:last",H).addClass("focused")}},"27":function(){F()},"13":function(){var O=A(".focused i.fullDetails").html();I(O)},"9":function(){this[13]();setTimeout(function(){L.focus()},0)}};if(H.css("display")!="none"&&M.keyCode in N){M.preventDefault();N[M.keyCode]()}this.timer=setTimeout(E,300)});function I(N){var M=J.val();if(N){J[0].lastSelectedValue=N;J.val(N);var L={input:J,originalValue:M,value:N,fullName:A(".focused i.fullName").text(),username:A(".focused i.username").text()};K(L);F()}}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/master.js' */
AJS.toInit(function(a){AJS.applySearchPlaceholders=function(b){AJS.log("AJS.applySearchPlaceholders is deprecated. Use AJS.Confluence.Binder.placeholder instead");AJS.Confluence.Binder.placeholder()};a("#messageContainer .confluence-messages").each(function(){var b=this;if(!getCookie(b.id)){a(b).show();a(".message-close-button",b).click(function(){a(b).slideUp();setCookie(b.id,true)})}})});AJS.General={getContextPath:Confluence.getContextPath,getBaseUrl:Confluence.getBaseUrl};(function(){var a={};AJS.I18n={keys:{},get:function(g,b,c){var e=true,d=Confluence.getContextPath()+"/rest/prototype/1/i18n",h={locale:AJS.params.userLocale};if(AJS.$.isArray(g)){for(var f in g){if(!a[f]){e=false}}h.pluginKeys=g}else{e=a[g];d+="/"+g}if(e){if(typeof b=="function"){b(AJS.I18n.keys)}return}AJS.$.ajax({url:d,data:h,dataType:"json",success:function(i){AJS.I18n.load(i);a[g]=true;if(typeof b=="function"){b(i)}},error:function(i,j){AJS.log("Error loading I18n for "+g+":"+j);if(typeof c=="function"){c(j)}}})},load:function(b){AJS.$.extend(AJS.I18n.keys,b)},getText:function(b,c){var d=AJS.params["i18n."+b]||AJS.I18n.keys[b]||b;if(!c){return d}if(arguments.length==2&&c instanceof Array){c.unshift(d)}else{c=Array.prototype.slice.call(arguments,0);c[0]=d}return AJS.format.apply(AJS,c)}}})();(function(){var b=/\S/,c=/^[\s\uFEFF]+/,a=/[\s\uFEFF]+$/;if(b.test("\xA0")){c=/^[\s\uFEFF\xA0]+/;a=/[\s\uFEFF\xA0]+$/}AJS.trim=AJS.trim||function(d){if(!d){return""}return d.replace(c,"").replace(a,"")}})();jQuery.fn.selectableEffects=function(a,b,c){var e=jQuery,d=e(this);if(c){d.data("properties",c)}d.click(function(g){var f=e(this);if(b){b(this,f.data("properties"))}a.find(".selected").removeClass("selected");f.addClass("selected");return AJS.stopEvent(g)});d.hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")})};jQuery.fn.shortenUntil=function(d){var b=jQuery;var c=0;while(!d()&&c<this.length){var a=b(this[c]).text();if(a=="\u2026"){c++;continue}b(this[c]).text(a.replace(/[^\u2026]\u2026?$/,"\u2026"))}return this};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/template-renderer.js' */
AJS.html=function(a){var b=new String(a);b.isHtml=true;return b};AJS.toInit(function(b){var a={};AJS.loadTemplateScripts=function(f){f=f||document;b("script",f).each(function(){if(this.type=="text/x-template"){a[this.title]=AJS.html(this.text)}})};AJS.loadTemplateScripts();AJS.getTemplate=function(f){var g=a[f];if(!g){g=e(f,document)}return g};function e(f,g){var h=b('script[title="'+f+'"]',g);if(h.length==0){return null}a[f]=AJS.html(h[0].text);return a[f]}var d={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};AJS.escapeEntities=function(f){if(f==null){return f}if(f.isHtml){return""+f}return(""+f).replace(/[&<>'"]/g,function(g){return d[g]||g})};function c(g){var f=arguments;return g.replace(/\{(\d+)\}/g,function(k,h){var j=f[parseInt(h,10)+1];return j!=null?j:k})}AJS.renderTemplate=function(f,g){if(!AJS.getTemplate(f)){return""}if(!b.isArray(g)){g=Array.prototype.slice.call(arguments,1)}var k=AJS.getTemplate(f).toString();var j=[k];for(var h=0;h<g.length;h++){j.push(AJS.escapeEntities(g[h]))}return c.apply(this,j)};AJS.loadTemplatesFromUrl=function(f,h){var g=AJS.Meta.get("static-resource-url-prefix");if(f.indexOf("http")!=0&&f.indexOf(g)!=0){f=g+f}b.ajax({url:f,data:{locale:AJS.params.userLocale},dataType:"html",success:function(i){var j=AJS("div").append(i);AJS.loadTemplateScripts(j);h&&h()}})};AJS.loadWebResourceTemplates=function(f,h,i){var g="/download/resources/"+f+"/"+h;return this.loadTemplatesFromUrl(g,i)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/menu.js' */
AJS.menuShowCount=0;(function(){var f=jQuery;var h=null;var g=function(i){if(typeof AJS.dropDownTimer!="undefined"&&AJS.dropDownHider){clearTimeout(AJS.dropDownTimer);delete AJS.dropDownTimer;AJS.dropDownHider();AJS.dropDownHider=null}};var e=function(){return f(".ajs-menu-bar.menu-bar-open").length>0};var a=function(i){f(i).closest(".ajs-menu-bar").find(".ajs-drop-down").each(function(j){this.hide()})};var d=function(i){return f(i).closest(".ajs-menu-bar").hasClass("menu-bar-open")};var b=function(i){f(i).closest(".ajs-menu-bar").addClass("menu-bar-open")};var c=function(i){f(i).closest(".ajs-menu-bar").removeClass("menu-bar-open")};f.fn.ajsMenu=function(i){i=i||{};f(".ajs-button",this).each(function(){f(this).mouseover(function(){var k=this;var m=d(k);a(k);if(m){var l=f(document);var j=function(){c(k);return false};l.unbind("click.menu");setTimeout(function(){l.one("click.menu",j)},1);b(k)}})});f(".ajs-menu-item",this).each(function(){f(this).ajsMenuItem(i)})};f.fn.ajsMenuItem=function(r){r=r||{};var k=this,i=f(this),o=f(".ajs-drop-down",k);if(!o.length){return}o=o[0];o.hidden=true;o.focused=-1;o.hide=function(){if(!this.hidden){i.toggleClass("opened");var t=f(k.parentNode);if(t.find(".opened").length==0){c(k)}var s=f("a",this);f(this).toggleClass("assistive");this.hidden=true;f(document).unbind("click",this.fhide).unbind("keydown",this.fmovefocus).unbind("keypress",this.blocker);if(this.focused+1){f(s[this.focused]).removeClass("active")}this.focused=-1}};o.show=function(){if(typeof this.hidden=="undefined"||this.hidden){var s=this,w=f(this);w.toggleClass("assistive");i.toggleClass("opened");b(k);this.hidden=false;this.timer=setTimeout(function(){f(document).click(s.fhide)},1);f(document).keydown(s.fmovefocus).keypress(s.blocker);var t=f("a",s);t.each(function(y){var x=this.parentNode.parentNode;f(this).hover(function(z){if(x.focused+1){f(t[x.focused].parentNode).removeClass("active")}f(this.parentNode).addClass("active");x.focused=y},function(z){if(x.focused+1){f(t[x.focused].parentNode).removeClass("active")}x.focused=-1})});var v=(window.pageYOffset||document.documentElement.scrollTop);var u=v+f(window).height();w.removeClass("above");if(!r.isFixedPosition){if(w.offset().top+w.height()>u){w.addClass("above");if(w.offset().top<v){w.removeClass("above")}}}}};o.isMenuBarOpened=function(){return d(o)};o.closeOthers=function(){a(o)};o.fmovefocus=function(s){o.movefocus(s)};o.fhide=function(s){o.hide(s);return AJS.$(s.target).closest(".ajs-drop-down").length>0};o.blocker=function(s){var t=s.which;if(t==40||t==38){return false}};o.movefocus=function(u){var x=u.which,t=this.getElementsByTagName("a"),w=this.focused,s=(x==9),v;do{switch(x){case 40:case 9:if(u.shiftKey){this.focused--}else{this.focused++}break;case 38:this.focused--;break;case 27:this.hide();return false;default:return true}v=(this.focused<0||this.focused>t.length-1)}while(!v&&f(t[this.focused].parentNode).hasClass("assistive"));if(s&&v){if(w!=-1){f(t[w].parentNode).removeClass("active")}this.focused=-1;this.hide();return false}else{if(!s){if(this.focused<0){this.focused=t.length-1}else{if(this.focused>t.length-1){this.focused=0}}}}if(w>=0){f(t[w].parentNode).removeClass("active")}t[this.focused].focus();f(t[this.focused].parentNode).addClass("active");u.stopPropagation();u.preventDefault();return false};o.show();clearTimeout(o.timer);var l=f(o),j=l.offset();o.hide();var n=f(".trigger",k);if(n.length){var q=function(){clearTimeout(AJS.dropDownTimer);delete AJS.dropDownTimer;AJS.dropDownHider();AJS.dropDownHider=null;o.show()};var p=function(t){var s=typeof AJS.dropDownTimer!="undefined";h=o;if(s){q()}else{AJS.dropDownShower=function(){o.show();delete AJS.dropDownShowerTimer};AJS.dropDownShowerTimer=setTimeout(AJS.dropDownShower,t)}};var m=function(s){var t=typeof AJS.dropDownShowerTimer!="undefined";if(t){clearTimeout(AJS.dropDownShowerTimer);delete AJS.dropDownShowerTimer}if(typeof AJS.dropDownTimer!="undefined"){clearTimeout(AJS.dropDownTimer);delete AJS.dropDownHider}AJS.dropDownHider=function(){o.hide();delete AJS.dropDownTimer};AJS.dropDownTimer=setTimeout(AJS.dropDownHider,s)};i.mouseover(function(){if(o.isMenuBarOpened()){if(o.hidden){a(o);o.show()}}else{i.addClass("hover")}});i.mouseout(function(){if(!o.isMenuBarOpened()){i.removeClass("hover")}});n.click(function(){if(o.hidden){n.parent("li").removeClass("hover");var s=e();o.show();return s}else{o.hide();n.parent("li").addClass("hover");return false}})}}})();AJS.toInit(function(e){e("#view-user-history-link").click(function(g){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=600, height=400, scrollbars, resizable");g.preventDefault();return false});var c=function(g){if(e("#action-messages").html().indexOf(g)===-1){AJS.messages.error("#action-messages",{body:g})}};var d=function(j,h,k){if(j.actionErrors){for(var g=0;g<j.actionErrors.length;g++){c(j.actionErrors)}}else{if(j.errorMessage){c(j.errorMessage)}else{k()}}h.removeClass("waiting")};var f=function(h,g){try{return AJS.$.parseJSON(h.responseText)}catch(i){console.error('Error while parsing "'+h.responseText+'": '+i);return g}};e("#page-favourite").click(function(j){var h=e(this),i=h.find("span");if(h.hasClass("waiting")){return AJS.stopEvent(j)}h.addClass("waiting");var g=Confluence.getContextPath()+"/json/addfavourite.action";if(h.hasClass("selected")){g=Confluence.getContextPath()+"/json/removefavourite.action"}AJS.safe.ajax({url:g,type:"POST",dataType:"json",data:{entityId:AJS.params.pageId},success:function(k){d(k,h,function(){h.toggleClass("selected");h.toggleClass("ie-page-favourite-selected");if(h.hasClass("selected")){i.text("Remove Favourite")}else{i.text("Favourite")}})},error:function(k){d(f(k,{}),h,function(){c("Server error while updating favourite")})}});return AJS.stopEvent(j)});var b=e("#action-menu-link"),a=e("#add-menu-link");if(b.length){b.next().addClass("most-right-menu-item")}else{if(a.length){a.next().addClass("most-right-menu-item")}}e("#action-menu").on({"aui-dropdown2-show":function(){e(this).css({right:function(){return e(window).width()-b.offset().left-b.outerWidth(true)-1},left:"auto"})}});e(".ajs-menu-bar").ajsMenu({isFixedPosition:true})});AJS.$(function(a){a("#header-menu-bar .ajs-menu-item").each(function(){var c=a(this),d=a(".ajs-drop-down",this),b=c.width();if(b>d.width()){d.width(b.valueOf()+50);AJS.log("Dropdown width override occurred")}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/jquery-plugins/jquery.simpleScrollTo-1.0.js' */
jQuery.fn.simpleScrollTo=function(c){var e=jQuery;var a=e(this[0]);var b=e(c).position().top;var d=b+e(c).outerHeight()-a.outerHeight();if(b<0){a.scrollTop(a.scrollTop()+b)}else{if(d>0){a.scrollTop(a.scrollTop()+d)}}return this};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/websudo.js' */
AJS.toInit(function(a){a("a#websudo-drop.drop-non-websudo").click(function(){a.getJSON(a(this).attr("href"),function(){a("li#confluence-message-websudo-message").slideUp(function(){AJS.trigger("confluence.header-resized")})});return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/jquery-plugins/jquery.cookie.js' */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+m.path:"";var g=m.domain?"; domain="+m.domain:"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-spinner', location = 'js-vendor/spin/spin.js' */
!function(I,K,A){var E=["webkit","Moz","ms","O"],P={},O;function G(Q,T){var R=K.createElement(Q||"div"),S;for(S in T){R[S]=T[S]}return R}function H(R){for(var Q=1,S=arguments.length;Q<S;Q++){R.appendChild(arguments[Q])}return R}var J=function(){var Q=G("style",{type:"text/css"});H(K.getElementsByTagName("head")[0],Q);return Q.sheet||Q.styleSheet}();function C(U,Q,V,Y){var R=["opacity",Q,~~(U*100),V,Y].join("-"),S=0.01+V/Y*100,X=Math.max(1-(1-U)/Q*(100-S),U),W=O.substring(0,O.indexOf("Animation")).toLowerCase(),T=W&&"-"+W+"-"||"";if(!P[R]){J.insertRule("@"+T+"keyframes "+R+"{0%{opacity:"+X+"}"+S+"%{opacity:"+U+"}"+(S+0.01)+"%{opacity:1}"+(S+Q)%100+"%{opacity:"+U+"}100%{opacity:"+X+"}}",J.cssRules.length);P[R]=1}return R}function N(T,U){var S=T.style,Q,R;if(S[U]!==A){return U}U=U.charAt(0).toUpperCase()+U.slice(1);for(R=0;R<E.length;R++){Q=E[R]+U;if(S[Q]!==A){return Q}}}function F(Q,S){for(var R in S){Q.style[N(Q,R)||R]=S[R]}return Q}function M(S){for(var Q=1;Q<arguments.length;Q++){var R=arguments[Q];for(var T in R){if(S[T]===A){S[T]=R[T]}}}return S}function L(Q){var R={x:Q.offsetLeft,y:Q.offsetTop};while((Q=Q.offsetParent)){R.x+=Q.offsetLeft,R.y+=Q.offsetTop}return R}var D={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:1/4,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto",position:"relative"};var B=function B(Q){if(!this.spin){return new B(Q)}this.opts=M(Q||{},B.defaults,D)};B.defaults={};M(B.prototype,{spin:function(X){this.stop();var b=this,Q=b.opts,R=b.el=F(G(0,{className:Q.className}),{position:Q.position,width:0,zIndex:Q.zIndex}),a=Q.radius+Q.length+Q.width,c,Z;if(X){X.insertBefore(R,X.firstChild||null);Z=L(X);c=L(R);F(R,{left:(Q.left=="auto"?Z.x-c.x+(X.offsetWidth>>1):parseInt(Q.left,10)+a)+"px",top:(Q.top=="auto"?Z.y-c.y+(X.offsetHeight>>1):parseInt(Q.top,10)+a)+"px"})}R.setAttribute("aria-role","progressbar");b.lines(R,b.opts);if(!O){var U=0,S=Q.fps,W=S/Q.speed,V=(1-Q.opacity)/(W*Q.trail/100),Y=W/Q.lines;(function T(){U++;for(var d=Q.lines;d;d--){var e=Math.max(1-(U+d*Y)%W*V,Q.opacity);b.opacity(R,Q.lines-d,e,Q)}b.timeout=b.el&&setTimeout(T,~~(1000/S))})()}return b},stop:function(){var Q=this.el;if(Q){clearTimeout(this.timeout);if(Q.parentNode){Q.parentNode.removeChild(Q)}this.el=A}return this},lines:function(S,U){var R=0,Q;function T(V,W){return F(G(),{position:"absolute",width:(U.length+U.width)+"px",height:U.width+"px",background:V,boxShadow:W,transformOrigin:"left",transform:"rotate("+~~(360/U.lines*R+U.rotate)+"deg) translate("+U.radius+"px,0)",borderRadius:(U.corners*U.width>>1)+"px"})}for(;R<U.lines;R++){Q=F(G(),{position:"absolute",top:1+~(U.width/2)+"px",transform:U.hwaccel?"translate3d(0,0,0)":"",opacity:U.opacity,animation:O&&C(U.opacity,U.trail,R,U.lines)+" "+1/U.speed+"s linear infinite"});if(U.shadow){H(Q,F(T("#000","0 0 4px #000"),{top:2+"px"}))}H(S,H(Q,T(U.color,"0 0 1px rgba(0,0,0,.1)")))}return S},opacity:function(R,Q,S){if(Q<R.childNodes.length){R.childNodes[Q].style.opacity=S}}});(function(){function Q(T,S){return G("<"+T+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',S)}var R=F(G("group"),{behavior:"url(#default#VML)"});if(!N(R,"transform")&&R.adj){J.addRule(".spin-vml","behavior:url(#default#VML)");B.prototype.lines=function(U,T){var S=T.length+T.width,a=2*S;function Z(){return F(Q("group",{coordsize:a+" "+a,coordorigin:-S+" "+-S}),{width:a,height:a})}var V=-(T.width+T.length)*2+"px",Y=F(Z(),{position:"absolute",top:V,left:V}),X;function W(c,b,d){H(Y,H(F(Z(),{rotation:360/T.lines*c+"deg",left:~~b}),H(F(Q("roundrect",{arcsize:T.corners}),{width:S,height:T.width,left:T.radius,top:-T.width>>1,filter:d}),Q("fill",{color:T.color,opacity:T.opacity}),Q("stroke",{opacity:0}))))}if(T.shadow){for(X=1;X<=T.lines;X++){W(X,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")}}for(X=1;X<=T.lines;X++){W(X)}return H(U,Y)};B.prototype.opacity=function(T,S,V,U){var W=T.firstChild;U=U.shadow&&U.lines||0;if(W&&S+U<W.childNodes.length){W=W.childNodes[S+U];W=W&&W.firstChild;W=W&&W.firstChild;if(W){W.opacity=V}}}}else{O=N(R,"animation")}})();if(typeof define=="function"&&define.amd){define(function(){return B})}else{I.Spinner=B}}(window,document);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-spinner', location = 'js-vendor/jquery/jquery.spin.js' */
(function(A){A.fn.spin=function(E,D){var C,B;if(typeof E==="string"){if(!E in A.fn.spin.presets){throw new Error("Preset '"+E+"' isn't defined")}C=A.fn.spin.presets[E];B=D||{}}else{if(D){throw new Error("Invalid arguments. Accepted arguments:\n$.spin([String preset[, Object options]]),\n$.spin(Object options),\n$.spin(Boolean shouldSpin)")}C=A.fn.spin.presets.small;B=A.isPlainObject(E)?E:{}}if(window.Spinner){return this.each(function(){var G=A(this),F=G.data();if(F.spinner){F.spinner.stop();delete F.spinner}if(E===false){return }B=A.extend({color:G.css("color")},C,B);F.spinner=new Spinner(B).spin(this)})}else{throw"Spinner class not available."}};A.fn.spin.presets={small:{lines:12,length:3,width:2,radius:3,trail:60,speed:1.5},medium:{lines:12,length:5,width:3,radius:8,trail:60,speed:1.5},large:{lines:12,length:8,width:4,radius:10,trail:60,speed:1.5}};A.fn.spinStop=function(){if(window.Spinner){return this.each(function(){var C=A(this),B=C.data();if(B.spinner){B.spinner.stop();delete B.spinner}})}else{throw"Spinner class not available."}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-permissions-editor', location = '/includes/js/page-permissions-manager.js' */
AJS.PagePermissions=AJS.PagePermissions||{};AJS.toInit(function(e){var h="user",s="group";var j=Confluence.getContextPath();var n=function(){return e("#rte-button-restrictions").parent().is(":visible")};var a=null;var k=null;var q=null;var m={addNames:function(v,x){var w=this;var u=v.replace(/\s*,\s*/g,",").split(",");var y=e("#waitImage");y.show();var z={name:u,type:x||"",pageId:AJS.Meta.get("parent-page-id"),spaceKey:AJS.Meta.get("space-key")};e.getJSON(j+"/pages/getentities.action",z,function(E){y.hide();for(var D=0,A=E.length;D<A;D++){var B=E[D].entity;w.addEntity(E[D]);var C=e.inArray(B.name,u);u.splice(C,1)}k.validator.handleNonExistentEntityNames(u)})},addEntity:function(w){if(!w){return}var v=w.entity;var u=w.report;var y=k.getPermissionType();if(k.validator.isDuplicateEntityForType(v,y)){q.highlightEntityRow(v,y);return}var x={entity:v,view:true,edit:true,report:u};q.addRow(x,y);Confluence.Binder.userHover();q.changedByUser();q.highlightEntityRow(v,y);k.nameField.removeFromNameInput(v.name)},makePermissionStrings:function(){var u=q.makePermissionMap(false);return{viewPermissionsUsers:u.user.view.join(","),editPermissionsUsers:u.user.edit.join(","),viewPermissionsGroups:u.group.view.join(","),editPermissionsGroups:u.group.edit.join(",")}}};e.extend(AJS.PagePermissions,{addUserPermissions:function(u){m.addNames(u,h)},addGroupPermissions:function(u){m.addNames(u,s)},makePermissionStrings:m.makePermissionStrings,updateEditPageRestrictions:d});function f(w){q.allowEditing(w.userCanEditRestrictions);q.resetInherited();if(!m.permissionsEdited){q.resetDirect()}if(!w){return}for(var x=0,z=w.permissions.length;x<z;x++){var F=w.permissions[x];var B=F[0].toLowerCase();var u=F[1];var D=F[2];var v=(u==h)?w.users[D]:w.groups[D];var E=F[3];var C=F[4];var y=+E&&E!=AJS.params.pageId;if(m.permissionsEdited&&!y){continue}var A={owningId:E,entity:v.entity,report:v.report};A[B]=true;A.owningTitle=C;A.inherited=y;q.addRow(A,B)}if(w.permissions.length>0){Confluence.Binder.userHover()}q.saveBackup();q.refresh()}function d(){var A=q.makePermissionMap(false),x=e("#rte-button-restrictions"),B=x.find(".icon"),D=x.find(".trigger-text"),w=[].concat(A.group.view).concat(A.user.view).concat(A.group.edit).concat(A.user.edit),u=e("#page-inherited-permissions-table-desc:visible"),z="icon-restricted icon-restricted-inherited icon-unrestricted";if(w.length||u.length){var E=w.length?"icon-restricted":"icon-restricted-inherited";B.removeClass(z).addClass(E);D.text("Restricted")}else{B.removeClass(z).addClass("icon-unrestricted");D.text("Unrestricted")}m.permissionsEdited=false;var y=m.makePermissionStrings();for(var C in y){var v=y[C];e("#"+C).val(v);if(m.originalPermissions[C]!=v){m.permissionsEdited=true}}}function p(){k.validator.resetValidationErrors();q.clearHighlight();AJS.$(".button-spinner").spinStop();a.hide();window.scrollTo(m.bookmark.scrollX,m.bookmark.scrollY)}function g(){var v=e(".permissions-update-button").disable();AJS.$(".button-spinner").spin();if(n()){d();v.enable();p()}else{var u=m.makePermissionStrings();u.pageId=AJS.params.pageId;e("#waitImage").show();AJS.safe.post(j+"/pages/setpagepermissions.action",u,function(w){e("#waitImage").hide();AJS.trigger("system-content-metadata.toggled-restrictions",{hasRestrictions:w.hasPermissions});v.enable();p()},"json")}}function c(){p();if(n()){q.restoreBackup()}return false}function o(){a=AJS.ConfluenceDialog({width:840,height:530,id:"update-page-restrictions-dialog",onCancel:c});if(AJS.Meta.get("content-type")=="blogpost"){a.addHeader("Blog Restrictions")}else{a.addHeader("Page Restrictions")}a.addPanel("Page Permissions Editor",Confluence.Templates.PagePermissions.dialogPanel({currentUser:AJS.params.remoteUser,currentUserAvatar:AJS.params.currentUserAvatarUrl}));a.addButton("Save",g,"permissions-update-button");a.addCancel("Close",c);a.popup.element.find(".dialog-title").prepend(Confluence.Templates.PagePermissions.helpLink());a.popup.element.find(".dialog-button-panel").prepend("<div class='button-spinner'>&nbsp;</div>");a.popup.element.find("#userpicker-popup-link").click(function(){var v=window.open(Confluence.getContextPath()+"/spaces/openuserpicker.action?key="+AJS.params.spaceKey+"&startIndex=0&onPopupSubmit=AJS.PagePermissions.addUserPermissions","EntitiesPicker","status=yes,resizable=yes,top=100,left=200,width=700,height=680,scrollbars=yes");v.focus();return false});a.popup.element.find("#grouppicker-popup-link").click(function(){var v=window.open(Confluence.getContextPath()+"/spaces/opengrouppicker.action?key="+AJS.params.spaceKey+"&startIndex=0&actionName=dosearchgroups.action&onPopupSubmit=AJS.PagePermissions.addGroupPermissions","EntitiesPicker","status=yes,resizable=yes,top=100,left=200,width=580,height=550,scrollbars=yes");v.focus();return false});k=AJS.PagePermissions.Controls(m);var u=e("#page-permissions-table").bind("changed",r);q=AJS.PagePermissions.Table(u);m.table=q}function i(u){m.bookmark={scrollX:document.documentElement.scrollLeft,scrollY:document.documentElement.scrollTop};b();k.setVisible(u.userCanEditRestrictions);AJS.setVisible(".permissions-update-button",u.userCanEditRestrictions);a.show()}function t(z,w){if(!m.originalPermissions&&n()){m.originalPermissions=Confluence.Editor.getPagePermissions()}var x=(w&&e("#newSpaceKey").val())||AJS.Meta.get("space-key");var u=(w&&e("#parentPageString").val())||"";var y={pageId:AJS.Meta.get("page-id"),parentPageId:AJS.Meta.get("parent-page-id"),parentPageTitle:u,spaceKey:x};var v;if(AJS.params.newPage){y.draftId=AJS.Meta.get("content-id")}e("#waitImage").show();if(n()){v=j+"/pages/geteditpagepermissions.action";e.extend(y,Confluence.Editor.getPagePermissions())}else{v=j+"/pages/getpagepermissions.action"}e.getJSON(v,y,function(A){e("#waitImage").hide();f(A);z(A)})}function l(u){a||o();t(i,u)}function r(){e(".permissions-update-button").enable();e(".button-panel-cancel-link").text("Cancel")}function b(){e(".permissions-update-button").disable();e(".button-panel-cancel-link").text("Close")}e("#action-page-permissions-link").click(function(u){u.preventDefault();l(false)});AJS.bind("system-content-metadata.open-restrictions-dialog",function(){l(false)});e("#rte-button-restrictions").live("click",function(u){u.preventDefault();l(true)});if(n()){m.originalPermissions=Confluence.Editor.getPagePermissions()}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-permissions-editor', location = '/includes/js/page-permissions-table.js' */
AJS.PagePermissions.Table=function(b){var d=AJS.$,c=this;var a=false;this.refresh=function(){var h=b.find(".view-permission-row");var g=b.find(".edit-permission-row");var i=h.length>0;var f=g.length>0;AJS.setVisible("#page-permissions-no-views",!i);AJS.setVisible("#page-permissions-no-edits",!f);b.each(function(){d(".view-permission-row .page-permissions-marker-cell span",this).removeClass("first-of-type").filter(":first").addClass("first-of-type");d(".edit-permission-row .page-permissions-marker-cell span",this).removeClass("first-of-type").filter(":first").addClass("first-of-type")});c.clearHighlight()};this.saveBackup=function(){this.copy=b.children().clone(true)};this.restoreBackup=function(){b.children().remove();b.append(this.copy)};this.addCount=0;this.makePermissionMap=function(g){var f={user:{view:[],edit:[]},group:{view:[],edit:[]}};b.find("tr.view-permission-row, tr.edit-permission-row").each(function(){var k=d(this);var i=k.is(".user-permission")?"user":"group";var j=k.is(".view-permission-row")?"view":"edit";var h;if(i=="user"){if(g){h=k.find(".permission-entity-display-name").text()}else{h=k.attr("data-userkey")}}else{h=k.find(".permission-entity-name").text()}f[i][j].push(h)});return f};this.makePermissionMapForCheckboxes=function(g){var f={user:{view:[],edit:[]},group:{view:[],edit:[]}};b.find("tr.view-permission-row").each(function(){var m=d(this);var i=m.find(".view-permission-cell input").prop("checked");var l=m.find(".edit-permission-cell input").prop("checked");if(i||l){var j=m.hasClass("user-permission")?"user":"group";var k=(g&&(j=="user"))?"display-name":"name";var h=m.find(".permission-entity-"+k).text();if(i&&(g||!m.hasClass("readonly-permission"))){f[j].view.push(h)}if(l){f[j].edit.push(h)}}});return f};var e=function(i,f){var h=i.find("td.permission-entity");var g=Confluence.getContextPath()+(f.profilePictureDownloadPath||"/images/icons/avatar_"+f.type+"_32.png");h.find("img").attr("src",g);h.find(".permission-entity-name").text(f.name);if(f.type=="group"){h.find(".permission-entity-name-wrap").hide()}h.find(".permission-entity-display-name").text(f.fullName||f.name);var j=h.find("span.entity-container");if(f.type=="user"){j.addClass("content-hover user-hover-trigger").attr("data-username",f.name);i.attr("data-userkey",f.userKey)}};this.addRow=function(q,l){var i=q.entity;var h=d(Confluence.Templates.PagePermissions.permissionRow());h.addClass(i.type+"-permission");h.addClass(l+"-permission-row");if(l=="edit"){h.find(".page-permissions-marker-cell span").text("Editing restricted to:")}e(h,i);var j=!a||q.inherited||q.readOnly;if(j){h.addClass("readonly-permission")}var m=h.find(".remove-permission-link");if(j||!a){m.remove()}else{m.attr("id","remove-permission-"+this.addCount++);m.click(function(s){d(this).closest("tr").remove();c.changedByUser();return AJS.stopEvent(s)})}if(q.inherited){var n=d(".page-permissions-table[owningTitle='"+AJS.escape(q.owningTitle)+"']");if(!n.length){var g=d(Confluence.Templates.PagePermissions.inheritedPermissionsTable());n=g.find("table");n.attr("owningTitle",AJS.escape(q.owningTitle));var k=g.find(".page-inherited-permissions-table-desc");var o=k.find("a"),f=Confluence.getContextPath()+"/pages/viewpage.action?pageId="+q.owningId;o.attr("href",f).attr("target","_blank").text(q.owningTitle).addClass("page-perms-owningTitle");var r=d("#content-title");var p=r.length?r.val():AJS.Meta.get("page-title");k.find("span").addClass(".page-perms-inherited-this-page").text(p);d("#page-inherited-permissions-tables").append(g)}n.append(h);d("#page-inherited-permissions-table-desc").show();d("#page-inherited-permissions-table-div").removeClass("hidden")}else{if(l=="view"){d("#page-permissions-no-edits").before(h)}else{b.append(h)}}};this.changedByUser=function(){b.trigger("changed");c.clearHighlight();c.refresh()};this.resetDirect=function(){b.find("tr:not(.marker-row)").remove();c.addCount=0};this.resetInherited=function(){d("#page-inherited-permissions-table-desc").hide();d("#page-inherited-permissions-tables div").remove()};b.click(function(f){c.clearHighlight()});d("#page-inherited-permissions-table-desc").click(function(){d(".page-inheritance-togglable").toggleClass("hidden");d(".icon",this).toggleClass("twisty-open").toggleClass("twisty-closed")});this.highlightEntityRow=function(f,h){var g=b.find("."+h+"-permission-row").filter(function(){return d(".permission-entity-name",this).text()==f.name});d("#page-permissions-tables").simpleScrollTo(g);g.addClass("highlighted-permission")};this.clearHighlight=function(){d("tr.highlighted-permission").removeClass("highlighted-permission")};this.allowEditing=function(f){a=f};return this};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-permissions-editor', location = '/includes/js/page-permissions-form.js' */
AJS.PagePermissions.Controls=function(b){var d=AJS.$;d("div#page-permissions-error-div span.icon-close").click(function(){d("div#page-permissions-error-div").addClass("hidden")});var c={handleNonExistentEntityNames:function(g){if(!g||!g.length){return}var f=g.join(", ");var h="Unknown user or group:"+" "+f;d("div#page-permissions-error-div").find("p").text(h).end().removeClass("hidden")},isDuplicateEntityForType:function(f,h){var g=d("#page-permissions-table ."+f.type+"-permission."+h+"-permission-row .permission-entity-name").filter(function(){return d(this).text()==f.name});return g.length>0},resetValidationErrors:function(){d("div#page-permissions-error-div").addClass("hidden")}};var a=(function(){var f=d("#page-permissions-names-input");var h=d("#page-permissions-names-hidden");var g=f.val();f.keypress(function(i){if(i.keyCode==13){e();f.focus();return false}return true});f.bind("selected.autocomplete-user-or-group",function(k,j){var i=j.content.key;h.val(unescape(i.replace(/\+/g," ")));f.val("");e(j.content.type);k.preventDefault()});f.focus(function(){var k=f.next(".aui-dd-parent");if(!k.length){return}k.show();var i=f.offset().left;if(k.offset().left!=i){k.css("margin-left",0);var m=i-k.offset().left;k.css("margin-left",m+"px")}var l=f.offset().top+f.outerHeight();if(k.offset().top!=l){k.css("margin-top",0);var j=l-k.offset().top;k.css("margin-top",j+"px")}k.css({width:f.outerWidth()});k.hide()});return{getValue:function(){var i=h.val();if(i){h.val("")}else{i=f.val();if(i==g){i=""}}return i},removeFromNameInput:function(m){if(!m){return}var l=f.val();if(!l){return}var j=l.split(",");for(var k=0;k<j.length;k++){j[k]=d.trim(j[k])}j=d.grep(j,function(i){return i!=""&&i!=m});if(j.length){f.val(j.join(", "))}else{if(document.activeElement==f[0]){f.val("")}}}}})();var e=function(f){c.resetValidationErrors();b.table.clearHighlight();var g=a.getValue();if(!g){return}b.addNames(g,f)};d("#page-permissions-choose-me").click(function(f){c.resetValidationErrors();b.addNames(d(this).find(".remote-user-name").text());return AJS.stopEvent(f)});d("#permissions-error-div-close").click(function(f){c.resetValidationErrors();return AJS.stopEvent(f)});d("#add-typed-names").click(function(){e()});return{validator:c,nameField:a,setVisible:function(f){AJS.setVisible("#page-permissions-editor-form",f);AJS.setVisible(".remove-permission-link",f)},isShowing:function(){return !d("#page-permissions-editor-form").hasClass("hidden")},getPermissionType:function(){return !!d("#restrictViewRadio:checked").length?"view":"edit"}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-permissions-editor', location = '/includes/soy/page-permissions.soy' */
// This file was automatically generated from page-permissions.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PagePermissions == 'undefined') { Confluence.Templates.PagePermissions = {}; }


Confluence.Templates.PagePermissions.dialogPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="page-permissions-div"><div id="page-permissions-editor-form"><div id="page-permissions-error-div" class="aui-message warning shadowed closeable hidden"><p class="title"/><span class="aui-icon icon-warning"></span><span class="aui-icon icon-close" tabindex="0" role="button"></span></div><div id="page-permissions-type-radios" class="page-permissions-label-rows"><div class="radio"><input id="restrictViewRadio" class="radio" type="radio" checked="checked" name="pagePermissionTypeRadio" value="view"/><label for="restrictViewRadio">', soy.$$escapeHtml("Restrict viewing"), '</label><input id="restrictEditRadio" class="radio" type="radio" name="pagePermissionTypeRadio" value="edit"/><label for="restrictEditRadio">', soy.$$escapeHtml("Restrict editing"), '</label></div></div><div id="page-permissions-input" class="page-permissions-label-rows"><div class="page-permissions-label">', soy.$$escapeHtml("To:"), '</div><div id="page-permissions-chooser-box">', (opt_data.currentUser) ? '<span id="page-permissions-choose-me" class="aui-button normal"><a href="#"><img src="' + soy.$$escapeHtml("") + soy.$$escapeHtml(opt_data.currentUserAvatar) + '" alt="' + soy.$$escapeHtml("Me") + '"/>' + soy.$$escapeHtml("Me") + '</a><span class="remote-user-name hidden">' + soy.$$escapeHtml(opt_data.currentUser) + '</span></span>' : '', '<span id="page-permissions-choose-user" class="aui-button"><a id="userpicker-popup-link"  href="#"><img src="', soy.$$escapeHtml(""), '/images/icons/user_16.png" height="16" width="16" border="0" align="absmiddle"  title="Choose users" />', soy.$$escapeHtml("Person..."), '</a></span><span id="page-permissions-choose-group" class="aui-button"><a id="grouppicker-popup-link"  href="#"><img src="', soy.$$escapeHtml(""), '/images/icons/group_16.png" height="16" width="16" border="0" align="absmiddle"  title="Choose groups" />', soy.$$escapeHtml("Group..."), '</a></span></div><div id="page-permissions-input-box"><input id="page-permissions-names-input" class="autocomplete-user-or-group text" type="text" name="permissionNames" placeholder="', soy.$$escapeHtml("Enter user or group name:"), '" data-max="10" data-none-message="', soy.$$escapeHtml("No matches"), '" data-target="#page-permissions-names-hidden" data-dropdown-target="#page-perms-name-dropdown-wrapper" data-resize-to-input="true" size="30"/><input type="hidden" id="page-permissions-names-hidden"/><button class="aui-button" id="add-typed-names">', soy.$$escapeHtml("Restrict"), '</button><div id="page-perms-name-dropdown-wrapper" class="aui-dd-parent autocomplete autocomplete-user-or-group-target"></div></div></div></div><div id="page-permissions-tables"><div id="page-permissions-table-div"><table id="page-permissions-table" class="page-permissions-table"><tr id="page-permissions-no-views" class="marker-row"><td colspan="3" class="page-permissions-marker-cell"><span class="aui-icon aui-icon-small aui-iconfont-view"></span><span>', soy.$$escapeHtml("No view restrictions are defined"), '</span></td></tr><tr id="page-permissions-no-edits" class="marker-row"><td colspan="3" class="page-permissions-marker-cell"><span class="aui-icon aui-icon-small edit-icon"></span><span>', soy.$$escapeHtml("No edit restrictions are defined"), '</span></td></tr></table></div><div id="page-inherited-permissions-table-div" class="hidden"><span id="page-inherited-permissions-table-desc"><a class="icon twisty-closed">', soy.$$escapeHtml("Show/Hide"), '</a><a id="toggle-inherited-permissions" title="', soy.$$escapeHtml("Click to see inherited restrictions"), '">', soy.$$escapeHtml("This page has restricted parent pages. It can only be seen by users who can see those parent pages."), '</a></span><div id="page-inherited-permissions-tables" class="hidden page-inheritance-togglable"></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PagePermissions.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-55/Page+Restrictions"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PagePermissions.inheritedPermissionsTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="page-inherited-permissions-owner-div"><div class="page-inherited-permissions-table-desc">', "Viewing restrictions apply to \u201c\x3ca\x3e\x3c/a\x3e\u201d. In order to see \u201c\x3cspan\x3e\x3c/span\x3e\u201d, a user must be in the following list of users and groups:", '</div><table class="page-permissions-table"></table></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PagePermissions.permissionRow = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr class="permission-row"><td class="page-permissions-marker-cell"><span>', soy.$$escapeHtml("Viewing restricted to:"), '</span></td><td class="permission-entity" nowrap="true"><span class="entity-container"><img class="permission-entity-picture"/><span class="permission-entity-display-name"></span><span class="permission-entity-name-wrap">&nbsp;(<span class="permission-entity-name"></span>)</span></span></td><td class="permission-detail-column"><div class="permission-remove-div"><a href="#" class="remove-permission-link">', soy.$$escapeHtml("Remove restriction"), '</a></div></td></tr>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.content.action.menu:linkpopup-resources', location = '/includes/js/linkpage.js' */
AJS.toInit(function(c){if(!c("link[rel=canonical]").length){return}var b=null;var a=function(){b=new AJS.Dialog(600,210,"link-page-popup").addHeader("Link to this Page").addPanel("Link to this Page","<form id='link-page-popup-form' class='aui'><fieldset></fieldset></form>").addCancel("Close",function(f){b.hide();return false});if(Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.enabled){b.addHelpText(AJS.format("Shortcut tip: Pressing \u003cb>{0}\u003c\/b> also opens this dialog box","k"))}var d=[{label:"Link",id:"link",value:c("link[rel=canonical]").attr("href")},{label:"Tiny Link",id:"tiny-link",value:c("link[rel=shortlink]").attr("href")}];c.each(d,function(){c("#link-page-popup-form fieldset").append(AJS.format("<div class='field-group'><label for=''link-popup-field-{0}''>{1}:</label><input id=''link-popup-field-{0}'' readonly=''readonly'' value='''' class=''text'' type=''text''></div>",this.id,this.label)).find("input:last").val(this.value)});var e=c("#link-page-popup-form fieldset input.text");e.focus(function(){c(this).select()});e.mouseup(function(f){f.preventDefault()})};c("#link-to-page-link").click(function(d){if(!b){a()}var f=c(this).parents(".ajs-drop-down")[0];f&&f.hide();b.show();c("#link-page-popup-form #link-popup-field-tiny-link").select();return AJS.stopEvent(d)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.extra.officeconnector:editinoffice', location = 'templates/extra/editinword/editInOffice.js' */
AJS.toInit(function(B){var A=AJS.Data.get("context-path");
var C=B("#edit-in-word, #edit-in-word-pathauth, a.office-editable, a.office-editable-pathauth");
C.click(function(G){G.preventDefault();
var F=B(this);
var E=F.attr("data-use-path-auth");
if(typeof (E)=="undefined"){E=(F.attr("id")=="edit-in-word-pathauth"||F.hasClass("office-editable-pathauth"))
}else{E=(E==="true")
}var H=F.attr("href");
var D=F.attr("data-prog-id");
if(typeof (D)=="undefined"){D=getProgID(H)
}return doEditInOffice(A,H,D,E)
})
});
function getProgID(A){var B=A.substring(A.lastIndexOf(".")+1);
switch(B){case"ppt":case"pptx":case"ppsx":case"pot":case"potx":case"pptm":return"PowerPoint.Show";
case"doc":case"docx":case"dot":case"dotx":return"Word.Document";
case"xls":case"xlt":case"xlsx":case"xlst":case"xlsm":return"Excel.Sheet";
default:return""
}}function filterPath(B,C,A){AJS.$.ajax({url:contextPath+"/rest/office/1.0/authtoken",success:function(G){if(G.token){var D=B.split("/");
var F="";
for(var E=0;
E<D.length-1;
E++){if(D[E].length){F=F+"/"+D[E]
}}F=F+"/ocauth/"+G.token+"/"+D[D.length-1];
C(F)
}else{A("Unable to retrieve a temporary auth token. Check your server logs.")
}},error:function(D,F,E){A("Ajax error retrieving token: "+F+", error from server: "+E)
},statusCode:{403:function(){A("The current configuration requires you to be logged in to use the Office Connector.")
}}})
}function getCookie(B){var F=document.cookie.split(";");
var C="";
var D="";
var E="";
for(var A=0;
A<F.length;
A++){C=F[A].split("=");
D=C[0].replace(/^\s+|\s+$/g,"");
if(D==B){if(C.length>1){E=unescape(C[1].replace(/^\s+|\s+$/g,""))
}return E
}C=null;
D=""
}return null
}function getBaseUrl(){return location.protocol+"//"+location.host
}function handleTokenError(A){alert(A)
}function doEditInOffice(A,B,D,H){var G=getBaseUrl();
if(window.ActiveXObject!==undefined){var E;
try{E=new ActiveXObject("SharePoint.OpenDocuments.1")
}catch(C){window.alert("Unable to create an ActiveX object to open the document. This is most likely because of the security settings for your browser.");
return false
}if(E){if(H){filterPath(B,function(J){E.EditDocument(G+J,D)
},handleTokenError)
}else{E.EditDocument(G+B,D)
}return false
}else{window.alert("Cannot instantiate the required ActiveX control to open the document. This is most likely because you do not have Office installed or you have an older version of Office.");
return false
}}else{if(window.URLLauncher){var F=navigator.appVersion.indexOf("Mac")!=-1;
var I=function(L){var J=new URLLauncher();
if(J.open2){var N=new RegExp(A+"/plugins/servlet/[^/]+/");
var M=L.match(N);
var K=L.substring(M[0].length);
J.open2(encodeURI(M[0]),encodeURI(K))
}else{J.open(L)
}};
if(H&&!F){B=filterPath(B,I,handleTokenError)
}else{I(B)
}}else{if(window.InstallTrigger){if(window.confirm("A plugin is required to use this feature. Would you like to download it?")){InstallTrigger.install({"WebDAV Launcher":"https://update.atlassian.com/office-connector/URLLauncher/latest/webdavloader.xpi"})
}}else{window.alert("Firefox or Internet Explorer is required to use this feature.")
}}}return false
}function enableEdit(A){A.style.cursor="pointer";
A.style.backgroundColor="#cccccc";
A.style.color=""
}function disableEdit(A){A.style.cursor="";
A.style.backgroundColor="#ffffff";
A.style.color="#ffffff"
};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.advanced:get-more-helper', location = 'com/atlassian/confluence/plugins/macros/advanced/js/get-more-helper.js' */
(function(a){AJS.moreLinkClickHandler=function(c){var b=a(this),d=b.attr("href"),f=b.closest(".more-link-container");if(!f.length){throw new Error("Could not find more link container when one was expected.")}f.addClass("loading");a.get(d,function(h){var g=a(h).wrap("<div/>").parent();var e=g.children("ul").children("li");f.closest(".results-container").children("ul").append(e);var i=g.find(".more-link-container");if(i.length===0){f.remove()}else{f.replaceWith(i)}if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()}});return AJS.stopEvent(c)}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.advanced:get-more', location = 'com/atlassian/confluence/plugins/macros/advanced/js/get-more.js' */
AJS.toInit(function(a){a(".results-container").on("click",".more-link",AJS.moreLinkClickHandler)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.advanced:get-more', location = 'com/atlassian/confluence/plugins/macros/advanced/js/filter-control.js' */
AJS.toInit(function(a){a("select.content-filter").change(function(){a(".filter-control .waiting-image").removeClass("hidden");var b=a(this);a.get(AJS.params.changesUrl,{contentType:a(this).val()},function(e){var d=a(e);var c=b.parent();c.parent().siblings(".results-container").children("ul").html(d);a(".waiting-image",c).addClass("hidden");a(".more-link",d).click(AJS.moreLinkClickHandler)})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.profile:profile-macro-styles', location = '/includes/js/personal-sidebar.js' */
AJS.toInit(function(e){var b=Confluence.storageManager("personal-sidebar"),d=e("#personal-info-sidebar"),a=d.height(),c=e("#content");function f(){d.toggleClass("collapsed");c.toggleClass("sidebar-collapsed");d.trigger("toggled")}if(b.getItemAsBoolean("show")){f()}e(".sidebar-collapse").click(function(g){f();b.setItem("show",d.hasClass("collapsed"));return AJS.stopEvent(g)}).height(a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:fancy-box', location = '/includes/fancybox/jquery.fancybox-1.3.4.js' */
(function(B){var L,T,Q,M,d,m,J,A,O,z,C=0,H={},j=[],e=0,G={},y=[],f=null,o=new Image(),i=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,k=/[^\.]\.(swf)\s*$/i,p,N=1,h=0,t="",b,c,P=false,s=B.extend(B("<div/>")[0],{prop:0}),S=B.browser.msie&&B.browser.version<7&&!window.XMLHttpRequest,r=function(){T.hide();o.onerror=o.onload=null;if(f){f.abort()}L.empty()},x=function(){if(false===H.onError(j,C,H)){T.hide();P=false;return}H.titleShow=false;H.width="auto";H.height="auto";L.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');n()},w=function(){var Z=j[C],W,Y,ab,aa,V,X;r();H=B.extend({},B.fn.fancybox.defaults,(typeof B(Z).data("fancybox")=="undefined"?H:B(Z).data("fancybox")));X=H.onStart(j,C,H);if(X===false){P=false;return}else{if(typeof X=="object"){H=B.extend(H,X)}}ab=H.title||(Z.nodeName?B(Z).attr("title"):Z.title)||"";H.orig=B(Z).is("img")&&B(Z);if(Z.nodeName&&!H.orig){H.orig=B(Z).children("img:first").length?B(Z).children("img:first"):B(Z)}if(ab===""&&H.orig&&H.titleFromAlt){ab=H.orig.attr("alt")}W=H.href||(Z.nodeName?B(Z).attr("href"):Z.href)||null;if((/^(?:javascript)/i).test(W)||W=="#"){W=null}if(H.type){Y=H.type;if(!W){W=H.content}}else{if(H.content){Y="html"}else{if(H.dataAttr){Y="dataAttribute";W=H.orig.attr("data-"+H.dataAttr)}else{if(W){if(W.match(i)){Y="image"}else{if(W.match(k)){Y="swf"}else{if(B(Z).hasClass("iframe")){Y="iframe"}else{if(W.indexOf("#")===0){Y="inline"}else{Y="ajax"}}}}}}}}if(!Y){x();return}if(Y=="inline"){Z=W.substr(W.indexOf("#"));Y=B(Z).length>0?"inline":"ajax"}H.type=Y;H.href=W;H.title=ab;if(H.autoDimensions){if(H.type=="html"||H.type=="inline"||H.type=="ajax"){H.width="auto";H.height="auto"}else{H.autoDimensions=false}}if(H.modal){H.overlayShow=true;H.hideOnOverlayClick=false;H.hideOnContentClick=false;H.enableEscapeButton=false;H.showCloseButton=false}H.padding=parseInt(H.padding,10);H.margin=parseInt(H.margin,10);L.css("padding",(H.padding+H.margin));B(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){B(this).replaceWith(m.children())});switch(Y){case"html":L.html(H.content);n();break;case"inline":if(B(Z).parent().is("#fancybox-content")===true){P=false;return}B('<div class="fancybox-inline-tmp" />').hide().insertBefore(B(Z)).bind("fancybox-cleanup",function(){B(this).replaceWith(m.children())}).bind("fancybox-cancel",function(){B(this).replaceWith(L.children())});B(Z).appendTo(L);n();break;case"image":case"dataAttribute":P=false;B.fancybox.showActivity();o=new Image();o.onerror=function(){x()};o.onload=function(){P=true;o.onerror=o.onload=null;F()};o.src=W;break;case"swf":H.scrolling="no";aa='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+H.width+'" height="'+H.height+'"><param name="movie" value="'+W+'"></param>';V="";B.each(H.swf,function(ac,ad){aa+='<param name="'+ac+'" value="'+ad+'"></param>';V+=" "+ac+'="'+ad+'"'});aa+='<embed src="'+W+'" type="application/x-shockwave-flash" width="'+H.width+'" height="'+H.height+'"'+V+"></embed></object>";L.html(aa);n();break;case"ajax":P=false;B.fancybox.showActivity();H.ajax.win=H.ajax.success;f=B.ajax(B.extend({},H.ajax,{url:W,data:H.ajax.data||{},error:function(ac,ae,ad){if(ac.status>0){x()}},success:function(ad,af,ac){var ae=typeof ac=="object"?ac:f;if(ae.status==200){if(typeof H.ajax.win=="function"){X=H.ajax.win(W,ad,af,ac);if(X===false){T.hide();return}else{if(typeof X=="string"||typeof X=="object"){ad=X}}}L.html(ad);n()}}}));break;case"iframe":E();break}},n=function(){var V=H.width,W=H.height;if(V.toString().indexOf("%")>-1){V=parseInt((B(window).width()-(H.margin*2))*parseFloat(V)/100,10)+"px"}else{V=V=="auto"?"auto":V+"px"}if(W.toString().indexOf("%")>-1){W=parseInt((B(window).height()-(H.margin*2))*parseFloat(W)/100,10)+"px"}else{W=W=="auto"?"auto":W+"px"}L.wrapInner('<div style="width:'+V+";height:"+W+";overflow: "+(H.scrolling=="auto"?"auto":(H.scrolling=="yes"?"scroll":"hidden"))+';position:relative;"></div>');H.width=L.width();H.height=L.height();E()},F=function(){H.width=o.width;H.height=o.height;B("<img />").attr({id:"fancybox-img",src:o.src,alt:H.title}).appendTo(L);E()},E=function(){var W,V;T.hide();if(M.is(":visible")&&false===G.onCleanup(y,e,G)){B.event.trigger("fancybox-cancel");P=false;return}P=true;B(m.add(Q)).unbind();B(window).unbind("resize.fb scroll.fb");B(document).unbind("keydown.fb");if(M.is(":visible")&&G.titlePosition!=="outside"){M.css("height",M.height())}y=j;e=C;G=H;if(G.overlayShow){Q.css({"background-color":G.overlayColor,opacity:G.overlayOpacity,cursor:G.hideOnOverlayClick?"pointer":"auto",height:B(document).height()});if(!Q.is(":visible")){if(S){B("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"})}Q.show()}}else{Q.hide()}c=R();l();if(M.is(":visible")){B(J.add(O).add(z)).hide();W=M.position();b={top:W.top,left:W.left,width:M.width(),height:M.height()};V=(b.width==c.width&&b.height==c.height);m.fadeTo(G.changeFade,0.3,function(){var X=function(){m.html(L.contents()).fadeTo(G.changeFade,1,v)};B.event.trigger("fancybox-change");m.empty().removeAttr("filter").css({"border-width":G.padding,width:c.width-G.padding*2,height:H.autoDimensions?"auto":c.height-h-G.padding*2});if(V){X()}else{s.prop=0;B(s).animate({prop:1},{duration:G.changeSpeed,easing:G.easingChange,step:U,complete:X})}});return}M.removeAttr("style");m.css("border-width",G.padding);if(G.transitionIn=="elastic"){b=I();m.html(L.contents());M.show();if(G.opacity){c.opacity=0}s.prop=0;B(s).animate({prop:1},{duration:G.speedIn,easing:G.easingIn,step:U,complete:v});return}if(G.titlePosition=="inside"&&h>0){A.show()}m.css({width:c.width-G.padding*2,height:H.autoDimensions?"auto":c.height-h-G.padding*2}).html(L.contents());M.css(c).fadeIn(G.transitionIn=="none"?0:G.speedIn,v)},D=function(V){if(V&&V.length){if(G.titlePosition=="float"){return'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+V+'</td><td id="fancybox-title-float-right"></td></tr></table>'}return'<div id="fancybox-title-'+G.titlePosition+'">'+V+"</div>"}return false},l=function(){t=G.title||"";h=0;A.empty().removeAttr("style").removeClass();if(G.titleShow===false){A.hide();return}t=B.isFunction(G.titleFormat)?G.titleFormat(t,y,e,G):D(t);if(!t||t===""){A.hide();return}A.addClass("fancybox-title-"+G.titlePosition).html(t).appendTo("body").show();switch(G.titlePosition){case"inside":A.css({width:c.width-(G.padding*2),marginLeft:G.padding,marginRight:G.padding});h=A.outerHeight(true);A.appendTo(d);c.height+=h;break;case"over":A.css({marginLeft:G.padding,width:c.width-(G.padding*2),bottom:G.padding}).appendTo(d);break;case"float":A.css("left",parseInt((A.width()-c.width-40)/2,10)*-1).appendTo(M);break;default:A.css({width:c.width-(G.padding*2),paddingLeft:G.padding,paddingRight:G.padding}).appendTo(M);break}A.hide()},g=function(){if(G.enableEscapeButton||G.enableKeyboardNav){B(document).bind("keydown.fb",function(V){if(V.keyCode==27&&G.enableEscapeButton){V.preventDefault();B.fancybox.close()}else{if((V.keyCode==37||V.keyCode==39)&&G.enableKeyboardNav&&V.target.tagName!=="INPUT"&&V.target.tagName!=="TEXTAREA"&&V.target.tagName!=="SELECT"){V.preventDefault();B.fancybox[V.keyCode==37?"prev":"next"]()}}})}if(!G.showNavArrows){O.hide();z.hide();return}if((G.cyclic&&y.length>1)||e!==0){O.show()}if((G.cyclic&&y.length>1)||e!=(y.length-1)){z.show()}},v=function(){if(!B.support.opacity){m.get(0).style.removeAttribute("filter");M.get(0).style.removeAttribute("filter")}if(H.autoDimensions){m.css("height","auto")}M.css("height","auto");if(t&&t.length){A.show()}if(G.showCloseButton){J.show()}g();if(G.hideOnContentClick){m.bind("click",B.fancybox.close)}if(G.hideOnOverlayClick){Q.bind("click",B.fancybox.close)}B(window).bind("resize.fb",B.fancybox.resize);if(G.centerOnScroll){B(window).bind("scroll.fb",B.fancybox.center)}if(G.type=="iframe"){B('<iframe id="fancybox-frame" name="fancybox-frame'+new Date().getTime()+'" frameborder="0" hspace="0" '+(B.browser.msie?'allowtransparency="true""':"")+' scrolling="'+H.scrolling+'" src="'+G.href+'"></iframe>').appendTo(m)}M.show();P=false;B.fancybox.center();G.onComplete(y,e,G);K()},K=function(){var V,W;if((y.length-1)>e){V=y[e+1].href;if(typeof V!=="undefined"&&V.match(i)){W=new Image();W.src=V}}if(e>0){V=y[e-1].href;if(typeof V!=="undefined"&&V.match(i)){W=new Image();W.src=V}}},U=function(W){var V={width:parseInt(b.width+(c.width-b.width)*W,10),height:parseInt(b.height+(c.height-b.height)*W,10),top:parseInt(b.top+(c.top-b.top)*W,10),left:parseInt(b.left+(c.left-b.left)*W,10)};if(typeof c.opacity!=="undefined"){V.opacity=W<0.5?0.5:W}M.css(V);m.css({width:V.width-G.padding*2,height:V.height-(h*W)-G.padding*2})},u=function(){return[B(window).width()-(G.margin*2),B(window).height()-(G.margin*2),B(document).scrollLeft()+G.margin,B(document).scrollTop()+G.margin]},R=function(){var V=u(),Z={},W=G.autoScale,X=G.padding*2,Y;if(G.width.toString().indexOf("%")>-1){Z.width=parseInt((V[0]*parseFloat(G.width))/100,10)}else{Z.width=G.width+X}if(G.height.toString().indexOf("%")>-1){Z.height=parseInt((V[1]*parseFloat(G.height))/100,10)}else{Z.height=G.height+X}if(W&&(Z.width>V[0]||Z.height>V[1])){if(H.type=="image"||H.type=="dataAttribute"||H.type=="swf"){Y=(G.width)/(G.height);if((Z.width)>V[0]){Z.width=V[0];Z.height=parseInt(((Z.width-X)/Y)+X,10)}if((Z.height)>V[1]){Z.height=V[1];Z.width=parseInt(((Z.height-X)*Y)+X,10)}}else{Z.width=Math.min(Z.width,V[0]);Z.height=Math.min(Z.height,V[1])}}Z.top=parseInt(Math.max(V[3]-20,V[3]+((V[1]-Z.height-40)*0.5)),10);Z.left=parseInt(Math.max(V[2]-20,V[2]+((V[0]-Z.width-40)*0.5)),10);return Z},q=function(V){var W=V.offset();W.top+=parseInt(V.css("paddingTop"),10)||0;W.left+=parseInt(V.css("paddingLeft"),10)||0;W.top+=parseInt(V.css("border-top-width"),10)||0;W.left+=parseInt(V.css("border-left-width"),10)||0;W.width=V.width();W.height=V.height();return W},I=function(){var Y=H.orig?B(H.orig):false,X={},W,V;if(Y&&Y.length){W=q(Y);X={width:W.width+(G.padding*2),height:W.height+(G.padding*2),top:W.top-G.padding-20,left:W.left-G.padding-20}}else{V=u();X={width:G.padding*2,height:G.padding*2,top:parseInt(V[3]+V[1]*0.5,10),left:parseInt(V[2]+V[0]*0.5,10)}}return X},a=function(){if(!T.is(":visible")){clearInterval(p);return}B("div",T).css("top",(N*-40)+"px");N=(N+1)%12};B.fn.fancybox=function(V){if(!B(this).length){return this}B(this).data("fancybox",B.extend({},V,(B.metadata?B(this).metadata():{}))).unbind("click.fb").bind("click.fb",function(X){X.preventDefault();if(P){return}P=true;B(this).blur();j=[];C=0;var W=B(this).attr("rel")||"";if(!W||W==""||W==="nofollow"){j.push(this)}else{j=B("a[rel="+W+"], area[rel="+W+"]");C=j.index(this)}w();return});return this};B.fancybox=function(Y){var X;if(P){return}P=true;X=typeof arguments[1]!=="undefined"?arguments[1]:{};j=[];C=parseInt(X.index,10)||0;if(B.isArray(Y)){for(var W=0,V=Y.length;W<V;W++){if(typeof Y[W]=="object"){B(Y[W]).data("fancybox",B.extend({},X,Y[W]))}else{Y[W]=B({}).data("fancybox",B.extend({content:Y[W]},X))}}j=jQuery.merge(j,Y)}else{if(typeof Y=="object"){B(Y).data("fancybox",B.extend({},X,Y))}else{Y=B({}).data("fancybox",B.extend({content:Y},X))}j.push(Y)}if(C>j.length||C<0){C=0}w()};B.fancybox.showActivity=function(){clearInterval(p);T.show();p=setInterval(a,66)};B.fancybox.hideActivity=function(){T.hide()};B.fancybox.next=function(){return B.fancybox.pos(e+1)};B.fancybox.prev=function(){return B.fancybox.pos(e-1)};B.fancybox.pos=function(V){if(P){return}V=parseInt(V,10);j=y;if(V>-1&&V<y.length){C=V;w()}else{if(G.cyclic&&y.length>1){C=V>=y.length?0:y.length-1;w()}}return};B.fancybox.cancel=function(){if(P){return}P=true;B.event.trigger("fancybox-cancel");r();H.onCancel(j,C,H);P=false};B.fancybox.close=function(){if(P||M.is(":hidden")){return}P=true;if(G&&false===G.onCleanup(y,e,G)){P=false;return}r();B(J.add(O).add(z)).hide();B(m.add(Q)).unbind();B(window).unbind("resize.fb scroll.fb");B(document).unbind("keydown.fb");m.find("iframe").attr("src",S&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");if(G.titlePosition!=="inside"){A.empty()}M.stop();function V(){Q.fadeOut("fast");A.empty().hide();M.hide();B.event.trigger("fancybox-cleanup");m.empty();G.onClosed(y,e,G);y=H=[];e=C=0;G=H={};P=false}if(G.transitionOut=="elastic"){b=I();var W=M.position();c={top:W.top,left:W.left,width:M.width(),height:M.height()};if(G.opacity){c.opacity=1}A.empty().hide();s.prop=1;B(s).animate({prop:0},{duration:G.speedOut,easing:G.easingOut,step:U,complete:V})}else{M.fadeOut(G.transitionOut=="none"?0:G.speedOut,V)}};B.fancybox.resize=function(){if(Q.is(":visible")){Q.css("height",B(document).height())}B.fancybox.center(true)};B.fancybox.center=function(){var V,W;if(P){return}W=arguments[0]===true?1:0;V=u();if(!W&&(M.width()>V[0]||M.height()>V[1])){return}M.stop().animate({top:""+parseInt(Math.max(V[3]-20,V[3]+((V[1]-m.height()-40)*0.5)-G.padding),10),left:""+parseInt(Math.max(V[2]-20,V[2]+((V[0]-m.width()-40)*0.5)-G.padding),10)},typeof arguments[0]=="number"?arguments[0]:200)};B.fancybox.init=function(){if(B("#fancybox-wrap").length){return}B("body").append(L=B('<div id="fancybox-tmp"></div>'),T=B('<div id="fancybox-loading"><div></div></div>'),Q=B('<div id="fancybox-overlay"></div>'),M=B('<div id="fancybox-wrap"></div>'));d=B('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(M);d.append(m=B('<div id="fancybox-content"></div>'),J=B('<a id="fancybox-close"></a>'),A=B('<div id="fancybox-title"></div>'),O=B('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),z=B('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));J.click(B.fancybox.close);T.click(B.fancybox.cancel);O.click(function(V){V.preventDefault();B.fancybox.prev()});z.click(function(V){V.preventDefault();B.fancybox.next()});if(B.fn.mousewheel){M.bind("mousewheel.fb",function(V,W){if(P){V.preventDefault()}else{if(B(V.target).get(0).clientHeight==0||B(V.target).get(0).scrollHeight===B(V.target).get(0).clientHeight){V.preventDefault();B.fancybox[W>0?"prev":"next"]()}}})}if(!B.support.opacity){M.addClass("fancybox-ie")}if(S){T.addClass("fancybox-ie6");M.addClass("fancybox-ie6");B('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(d)}};B.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};B(document).ready(function(){B.fancybox.init()})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:labels-editor', location = '/includes/js/labels-dialog.js' */
AJS.toInit(function(c){if(!Confluence.Templates.Labels){return}var b=null;var d=function(){c("#"+b.id).find(".label-list").removeClass("editable");b.hide();return false};var a=function(){b=AJS.ConfluenceDialog({width:600,height:250,id:"edit-labels-dialog",onCancel:d});b.addHeader("Labels");b.addPanel("Label Editor",Confluence.Templates.Labels.dialog());b.addCancel("Close",d);b.addHelpText("Shortcut tip: In page view, pressing \u003cb>{shortcut}\u003c\/b> also opens this dialog box",{shortcut:"l"});b.popup.element.find(".dialog-title").prepend(Confluence.Templates.Labels.helpLink());c("#add-labels-form").submit(function(h){var f=c("#labels-string");h.preventDefault();var g=c("#dialog-label-list");AJS.Labels.addLabel(f.val(),g.attr("entityid"),g.attr("entitytype"));f.focus();setTimeout(function(){c("#labels-autocomplete-list").find(".aui-dropdown").addClass("hidden")})});AJS.Labels.bindAutocomplete()};c("#rte-button-labels").live("click",function(f){AJS.Labels.openDialog()});c(".show-labels-editor").click(function(g){g.preventDefault();var f=c(g.target).closest(".labels-section-content");AJS.Labels.openDialog(f)});AJS.Labels.bindOpenDialog=function(e){e.click(function(g){g.preventDefault();var f=c(g.target).closest(".labels-section-content");if(f.length){AJS.Labels.openDialog(f)}else{AJS.Labels.openDialog()}})};AJS.Labels.openDialog=function(g){var h,i,l,k;if(!b){a()}if(g){i=g.attr("entityid");h=g.attr("entitytype")}else{h=AJS.Meta.get("content-type");i=AJS.Meta.get("page-id")}l=AJS.Labels.routes.list(h,i);k=c("#dialog-label-list");k.attr("entityid",i);k.attr("entitytype",h);var f=function(){b.show();c("#labels-string").val("").focus();AJS.trigger("labels.dialog.open")};var j=function(n){k.html(Confluence.Templates.Labels.dialogLabelList({labels:n.labels,spaceKey:AJS.Meta.get("space-key"),editable:true}));f()};if(AJS.Labels.isNewPage()){if(!k.find("ul").children().size()){var e=c("#createPageLabelsString").val()||"";var m=AJS.Labels.parseLabelStringToArray(e);j({labels:m})}else{f()}}else{AJS.$.ajax({url:l,cache:false,success:j,error:function(n,o){AJS.Labels.setLabelError("Unable to fetch current labels from the server.");f()}})}c("#dialog-label-list").attr("data-ready","true")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:labels-editor', location = '/includes/soy/labels-dialog.soy' */
// This file was automatically generated from labels-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Labels == 'undefined') { Confluence.Templates.Labels = {}; }


Confluence.Templates.Labels.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-55/Adding+Labels"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.dialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="labels-dialog"><form id="add-labels-form" method="GET" action="" class="aui"><div id="label-operation-error-container"><div id="label-operation-error-message" class="error-message" ></div></div><div id="label-input-fields"><input id="labels-string" autocomplete="off" name="labels-string" value="labels-string" class="text"><input id="add-labels-editor-button" type="submit" class="add-labels aui-button" value="', soy.$$escapeHtml("Add"), '"></div><div id="labels-autocomplete-list" class="aui-dd-parent resize-to-input"></div><div id="dialog-label-list" class="labels-section-content"><!-- DIV placeholder for labels list, is copied into in labels-dialog.js --></div><div class="labels-tip"></div></form></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.dialogLabelList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="label-list editable">');
  Confluence.Templates.Labels.labels(opt_data, output);
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.labels = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var labelList14 = opt_data.labels;
  var labelListLen14 = labelList14.length;
  for (var labelIndex14 = 0; labelIndex14 < labelListLen14; labelIndex14++) {
    var labelData14 = labelList14[labelIndex14];
    output.append('<li class="aui-label ', (opt_data.editable) ? 'aui-label-closeable aui-label-split' : '', '" data-label-id="', soy.$$escapeHtml(labelData14.id), '"><a class="aui-label-split-main" href="', soy.$$escapeHtml(""), '/label/', soy.$$escapeHtml(opt_data.spaceKey), '/', soy.$$escapeHtml(labelData14.name), '" rel="tag">', (! labelData14.prefix || labelData14.prefix == 'global' || labelData14.prefix == 'team') ? soy.$$escapeHtml(labelData14.name) : soy.$$escapeHtml(labelData14.prefix) + ':' + soy.$$escapeHtml(labelData14.name), '</a>', (opt_data.editable) ? '<span class="aui-label-split-close"><span tabindex="0" class="aui-icon aui-icon-close"  title="' + soy.$$escapeHtml("Delete Label") + '" original-title="' + soy.$$escapeHtml("Delete Label") + '">' + soy.$$escapeHtml("Delete Label") + '</span></span>' : '', '</li>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.nolabels = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="no-labels-message">', soy.$$escapeHtml("No labels"), '</li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:labels-editor', location = '/includes/js/labels.js' */
AJS.Labels=(function(f){var n=function(){var r=0;if(AJS.Meta.get("num-labels")){r=AJS.Meta.get("num-labels")}else{if(f("#createPageLabelsString").val()){r=f.trim(f("#createPageLabelsString").val()).split(/\s+/).length}}if(r!=0){AJS.Meta.set("num-labels",r);f("#rte-button-labels").trigger("updateLabel")}};AJS.bind("init.rte-control",n);var c=function(r){r=AJS.$.trim(r);if(!r){return[]}var s=[];var t=new Date().getTime();f(r.split(/\s+/)).each(function(w,y){var v=y.split(":"),x,u=v[0];if(v.length===2){x=v[0];u=v[1]}s.push({name:u,prefix:x,id:t});t++});return s};var e={labelView:".label-list",labelItem:".aui-label",noLabelsMessage:".no-labels-message",idAttribute:"data-label-id",labelsFormFieldId:AJS.Meta.get("labels-form-field-id")||"createPageLabelsString"};var q=Confluence.getContextPath();var o={base:q+"/rest/ui/1.0/",getRestEndPoint:function(r){var s=(r=="attachment")?"attachment/":(r=="template")?"template/":(r=="space")?"space/":"content/";return this.base+s},index:q+"/labels/autocompletelabel.action?maxResults=3",validate:function(){return this.getRestEndPoint()+"labels/validate"},add:function(s,r){return this.getRestEndPoint(s)+r+"/labels"},remove:function(s,r,t){return this.getRestEndPoint(s)+r+"/label/"+t},list:function(s,r){return this.getRestEndPoint(s)+r+"/labels"}};var j=function(){return !!document.getElementById("createpageform")||!!document.getElementById("createpagetemplate")};var a=function(){return f(".space-administration").length};function i(r,u){if(!(r&&u)){var s=f("#dialog-label-list");r=s.attr("entityid");u=s.attr("entitytype")}if(!(r&&u)){return f(e.labelView)}var t=f(".labels-section-content").filter(function(){return this.getAttribute("entityid")==r&&this.getAttribute("entitytype")==u});return t.find(e.labelView)}var m=function(r){p();if(r&&r.promise){r.always([l,h]);r.done(function(u,t){AJS.Meta.set("num-labels",i().first().find(e.labelItem).size());f("#rte-button-labels").trigger("updateLabel");var s=t.not(".editable");if(t.find(".aui-label").length===0){s.find(".labels-edit-container").before(Confluence.Templates.Labels.nolabels())}else{s.find(".no-labels-message").remove()}})}return r};var b=function(){f("#labels-string, #add-labels-editor-button").attr({disabled:"disabled","aria-disabled":true})};var h=function(){f("#labels-string, #add-labels-editor-button").removeAttr("disabled aria-disabled")};var l=function(){f("#labels-string").val("")};var p=function(s){s=s||null;var r="#label-operation-error-message";f(r).empty().toggle(!!s);AJS.messages.warning(r,{body:s})};var k=function(s,x,v){if(!s){return false}b();var t=f("#"+e.labelsFormFieldId);if(j()){var A=(t.val()+" "+s).split(/\s+/);var u=[];AJS.$.each(A,function(C,B){if(AJS.$.inArray(B,u)===-1){u.push(B)}});s=u.join(" ")}var z=c(s);var w={url:j()?o.validate():o.add(v,x),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(z)},r,y=f.Deferred();r=AJS.$.ajax(w);r.done(function(E){var D=f("#dialog-label-list").find(".label-list"),C=i(x,v).not(".editable"),B=E.labels;if(j()){t.val(s);var F=new Date().getTime();AJS.$.each(B,function(H,G){G.id=F++});D.empty()}D.html(Confluence.Templates.Labels.labels({labels:B,spaceKey:AJS.Meta.get("space-key"),editable:true}));C.find("li.aui-label").remove();C.find("li.labels-edit-container").before(Confluence.Templates.Labels.labels({labels:B,spaceKey:AJS.Meta.get("space-key")}));y.resolve(B,C.add(D))});r.fail(function(E,B){var C;if(B==="timeout"){C="Connecting to the server timed out, you\'ll need to try again"}else{try{C=JSON.parse(E.responseText).message}catch(D){C=B;AJS.log("Unexpected error when adding labels: "+D.message)}}AJS.log("Failed to add labels: "+C);AJS.log("Failed to add labels xhr: "+E.responseText);p(C);y.reject(B)});return y.promise()};var d=function(t,s,w){if(!t){return false}t=t.jquery?t:f(t);if(a()){s=AJS.Meta.get("space-key");w="space"}var y=t.attr(e.idAttribute),r=f.trim(t.find("a").text()),x,v={type:"DELETE",dataType:"json",contentType:"application/json",data:{}},u=f.Deferred();if(j()){x=f.Deferred();x.resolve()}else{v.url=o.remove(w,s,y);x=AJS.$.ajax(v)}x.done(function(){var A=i(s,w);if(a()){A=f("#space-categories-list")}var z=A.find(e.labelItem);var B=z.filter("["+e.idAttribute+"='"+y+"']");B.fadeOut("normal",function(){B.remove();u.resolve(t,A)})});x.fail(function(A,z){AJS.log(z);p(z=="timeout"?"Connecting to the server timed out, you\'ll need to try again":z);u.reject(z)});j()&&u.done(function(){var z=f("#"+e.labelsFormFieldId);var A=z.val();var B=A.split(/\s+/);B=f.grep(B,function(C){return(!C||C==r)},true);z.val(B.join(" "))});return u.promise()};var g=function(){var w=f("#labels-string"),v=w.parents("#add-labels-form").length;if(!w.length){return}var t=function(x){f("#labels-autocomplete-list").append(x)};var u=function(F){if(F.find("a.label-suggestion").length){var G=f("span",F),C=f.data(G[0],"properties"),E=w.val(),y=[];if(v){y=E.split(/\s+/);y[y.length-1]=C.name;w.val(y.join(" "))}else{var D=AJS.Labels.queryTokens,J=-1,z,A="";for(var B=0,I=D.length;B<I;B++){A=D[B];z=E.lastIndexOf(A);if(z>J){J=z}}if(J!=-1){var H=E.substr(0,J);var x=E.substr(J+A.length).match(/^\s+/);if(x){H+=x[0]}w.val(H+C.name)}else{w.val(C.name)}}}};var r=function(){if(!f("#labels-autocomplete-list .label-suggestion").length||w.val()===""){this.hide()}else{if(!v){var z=f("#labels-autocomplete-list a.label-suggestion");for(var x=0,y=z.length;x<y;x++){z.get(x).href="#"}}}};var s="/labels/autocompletelabel.action?maxResults=3";f(window).bind("quicksearch.ajax-success",function(y,x){if(x.url==s){AJS.Labels.queryTokens=(x.json&&x.json.queryTokens)||[];return false}});f(window).bind("quicksearch.ajax-error",function(y,x){if(x.url==s){AJS.Labels.queryTokens=[];return false}});w.quicksearch(s,r,{makeParams:function(x){return{query:x,contentId:AJS.params.pageId||""}},dropdownPlacement:t,ajsDropDownOptions:{selectionHandler:function(y,x){u(x);this.hide();y.preventDefault()}}})};f(".label-list.editable .aui-icon-close").live("click",function(s){s.preventDefault();var r=f("#dialog-label-list");AJS.Labels.removeLabel(f(this).closest("li"),r.attr("entityid"),r.attr("entitytype"))});AJS.toInit(function(){if(a()){AJS.Labels.bindAutocomplete();f(".label-list").addClass("editable")}});return{addLabel:function(s,r,t){return m(k(s,r,t))},removeLabel:function(s,r,t){return m(d(s,r,t))},bindAutocomplete:g,isNewPage:j,routes:o,setLabelError:p,parseLabelStringToArray:c}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:floating-scrollbar', location = '/includes/js/jquery-plugins/jquery.floatingScrollbar.js' */
/*!
 * jQuery Floating Scrollbar - v0.4 - 02/28/2011
 * http://benalman.com/
 *
 * Copyright (c) 2011 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(d){var i=d(this),e=d("html"),a=d([]),j,f,g=d('<div id="floating-scrollbar"><div/></div>'),b=g.children();g.hide().css({position:"fixed",bottom:0,height:"30px",overflowX:"auto",overflowY:"hidden"}).scroll(function(){j&&j.scrollLeft(g.scrollLeft())});b.css({border:"1px solid #fff",opacity:0.01});d.fn.floatingScrollbar=function(l){if(l===false){a=a.not(this);this.unbind("scroll",k);if(!a.length){g.detach();i.unbind("resize scroll",c)}}else{if(this.length){if(!a.length){i.resize(c).scroll(c)}a=a.add(this)}}c();return this};d.floatingScrollbarUpdate=c;function h(l){g.toggle(!!l)}function k(){j&&g.scrollLeft(j.scrollLeft())}function c(){f=j;j=null;a.each(function(){var s=d(this),t=s.offset().top,p=t+s.height(),r=i.scrollTop()+i.height(),q=30;if(t+q<r&&p>r){j=s;return false}});if(!j){h();return}var m=j.scrollLeft(),l=j.scrollLeft(90019001).scrollLeft(),o=j.innerWidth(),n=o+l;j.scrollLeft(m);if(n<=o){h();return}h(true);if(!f||f[0]!==j[0]){f&&f.unbind("scroll",k);j.scroll(k).after(g)}g.css({left:j.offset().left-i.scrollLeft(),width:o}).scrollLeft(m);b.width(n)}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:floating-scrollbar', location = '/includes/js/table-floating-scrollbar.js' */
AJS.toInit(function(a){a(".wiki-content").find(".table-wrap").floatingScrollbar()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:view-content', location = '/includes/js/image-effects.js' */
AJS.toInit(function(b){var a={padding:0,speedIn:500,speedOut:500,overlayShow:true,overlayOpacity:0.5,dataAttr:"image-src"};b("img.confluence-embedded-image").each(function(){var c=b(this);if(!c.parent("a").length){c.fancybox(a)}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:view-content', location = '/includes/js/page-metadata.js' */
AJS.toInit(function(b){var d=b("#version-comment");if(d.length){var a=b("#show-version-comment");var c=b("#hide-version-comment");a.click(function(f){a.hide();c.show();d.show();return AJS.stopEvent(f)});c.click(function(f){c.hide();a.show();d.hide();return AJS.stopEvent(f)});if(a.length&&c.length){d.hide()}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:view-content', location = '/includes/js/manage-watchers.js' */
jQuery(function(a){a(document).on("click","#manage-watchers-menu-item, .cw-manage-watchers",function(h){h.preventDefault();var c="manage-watchers-dialog";var i=new AJS.ConfluenceDialog({width:865,height:530,id:c,onCancel:function(){i.hide().remove()}});i.addHeader("Manage Watchers");i.addPanel("default",Confluence.Templates.ManageWatchers.dialogContent({pageId:AJS.Meta.get("page-id"),xsrfToken:AJS.Meta.get("atl-token")}));i.addCancel("Close",function(){i.hide().remove();return false});i.show();var d=a("#"+c);d.find(".dialog-title").prepend(Confluence.Templates.ManageWatchers.helpLink());d.find("input:visible, button:visible").each(function(e){a(this).attr("tabindex",e+1)});AJS.Confluence.Binder.placeholder();d.bind("remove-list-item.manage-watchers",function(p,o){var m=o.item,n=o.list,q=o.username;m.addClass("removing");AJS.safe.ajax({dataType:"json",type:"POST",url:AJS.params.contextPath+"/json/removewatch.action",data:{pageId:AJS.params.pageId,username:q},error:function(){console.error("Failed to delete watcher. Refresh page to see latest status.");m.removeClass("removing")},success:function(){m.slideUp().remove();d.trigger("list-updated.manage-watchers",{list:n})}})});d.bind("list-updated.manage-watchers",function(p,o){var n=o.list;var m=a("li.watch-user",n).length>0;if(!m){n.find(".no-users").removeClass("hidden");return}n.find(".no-users").addClass("hidden");Confluence.Binder.userHover();n.find(".confluence-userlink").each(function(){a(this).click(function(q){q.preventDefault()})})});d.bind("list-data-retrieved.manage-watchers",function(p,o){var n=o.list,m=o.watchers;n.find(".watch-user").remove();if(m&&m.length){a.each(m,function(){var r=this.name;var q={username:r,fullName:this.fullName,url:AJS.params.contextPath+"/display/~"+this.name,iconUrl:AJS.params.contextPath+this.profilePictureDownloadPath};var e=a(Confluence.Templates.ManageWatchers.userItem(q));n.append(e);e.find(".remove-watch").click(function(){d.trigger("remove-list-item.manage-watchers",{username:r,item:e,list:n})})})}n.find(".loading").hide();d.trigger("list-updated.manage-watchers",{list:n})});var f=d.find(".page-watchers .user-list");var k=d.find(".space-watchers .user-list");AJS.safe.ajax({url:AJS.params.contextPath+"/json/listwatchers.action",dataType:"json",data:{pageId:AJS.params.pageId},error:function(){console.error("Failed to retrieve watchers.")},success:function(e){d.trigger("list-data-retrieved.manage-watchers",{list:f,watchers:e.pageWatchers});d.trigger("list-data-retrieved.manage-watchers",{list:k,watchers:e.spaceWatchers})}});var l=d.find("form");var j=l.find("#add-watcher-user");var b=l.find("#add-watcher-username");var g=(function(){var e=l.find("> .status");return{clear:function(){e.addClass("hidden").removeClass("loading error").text("")},loading:function(m){e.addClass("loading").removeClass("hidden error").html(m)},error:function(m){e.addClass("error").removeClass("hidden loading").html(m)}}})();l.ajaxForm({beforeSerialize:function(){if(b.val()==""){b.val(j.val())}},beforeSubmit:function(){j.blur().prop("disabled",true);f.addClass("updating");g.loading("Adding watcher\u2026")},dataType:"json",error:function(m,e){console.error("Failed to add watcher: "+e)},success:function(e){b.val("");j.prop("disabled",false).val("").focus();f.removeClass("updating");if(e.actionErrors&&e.actionErrors.length){g.error(e.actionErrors[0]);return}d.trigger("list-data-retrieved.manage-watchers",{list:f,watchers:e.pageWatchers});g.clear()}});j.bind("selected.autocomplete-user-or-group",function(n,m){l.submit()});j.focus()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:view-content', location = '/includes/soy/manage-watchers.soy' */
// This file was automatically generated from manage-watchers.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ManageWatchers == 'undefined') { Confluence.Templates.ManageWatchers = {}; }


Confluence.Templates.ManageWatchers.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-group"><div class="aui-item page-watchers"><h3>', soy.$$escapeHtml("Watching this page"), '</h3><p>', soy.$$escapeHtml("These people are notified when the page is changed. You can add or remove people from this list."), '</p><form class="aui" action="', soy.$$escapeHtml(""), '/json/addwatch.action" method="POST"><input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.xsrfToken), '"><input type="hidden" name="pageId" value="', soy.$$escapeHtml(opt_data.pageId), '"/><input type="hidden" id="add-watcher-username" name="username" value=""/><label for="add-watcher-user">', soy.$$escapeHtml("User"), '</label><input id="add-watcher-user" name="userFullName" class="text autocomplete-user" type="text" value="" placeholder="', soy.$$escapeHtml("Full name or username"), '" data-max="10" data-target="#add-watcher-username" data-dropdown-target="#add-watcher-dropdown" data-template="{title}" data-none-message="', soy.$$escapeHtml("No matching users found."), '"><input id="add-watcher-submit" type="submit" name="add"  class="button submit" value="', soy.$$escapeHtml("Add"), '"><div id="add-watcher-dropdown" class="aui-dd-parent autocomplete"></div><div class="status hidden"></div></form><ul class="user-list"><li class="loading">', "Loading\u2026", '</li><li class="no-users hidden">', soy.$$escapeHtml("No page watchers"), '</li></ul></div><div class="aui-item space-watchers"><h3>', soy.$$escapeHtml("Watching this space"), '</h3><p>', soy.$$escapeHtml("These people are notified when any content in the space is changed. You cannot modify this list."), '</p><ul class="user-list"><li class="loading">', "Loading\u2026", '</li><li class="no-users hidden">', soy.$$escapeHtml("No space watchers"), '</li></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.ManageWatchers.userItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="watch-user"><img class="profile-picture confluence-userlink" src="', soy.$$escapeHtml(opt_data.iconUrl), '" data-username="', soy.$$escapeHtml(opt_data.username), '"><span class="user-hover-trigger" data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml(opt_data.fullName), '</span> <span class="username">(', soy.$$escapeHtml(opt_data.username), ')</span><span class="remove-watch" title="', soy.$$escapeHtml("Delete"), '" data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml("Delete"), '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.ManageWatchers.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-55/Managing+Watchers"}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:view-content', location = '/includes/js/page-children.js' */
AJS.toInit(function(c){var f,j;var a=function(l){if(l.homePage){var m="Home page";return'<span class="child-display"><span class="icon icon-home-page" title="'+m+'">'+m+':</span> <a href="'+AJS.params.contextPath+l.href+'">'+l.text+"</a></span>"}else{var k=l.recentlyUpdated?"icon icon-recently-updated-page":"icon icon-page";return'<span class="child-display"><span class="'+k+'" title="Page">Page:</span> <a href="'+AJS.params.contextPath+l.href+'">'+AJS.escapeHtml(l.text)+"</a></span>"}};var e=function(m){var k=c("#page-children:not(.children-loaded)");g();if(m&&k.length){if(m.errorMessage){k.html("<span class='error'>"+m.errorMessage+"</span>");return}var l=[];c.each(m,function(n,o){l.push(a(o))});k.html(l.join(""));k.addClass("children-loaded")}};var g=function(){if(j){j();j=null}f.addClass("hidden")};var b=function(k){AJS.safe.ajax({url:AJS.params.contextPath+"/json/pagechildrenstoresettings.action",type:"POST",data:{pageId:AJS.params.pageId,showChildren:k},success:function(){},error:function(m,l){AJS.log("Failed to store the user 'showChildren' user setting: "+l)}})};var i=function(){var k=c("#page-children:not(.children-loaded)");if(k.length){f=c("<div class='throbber'></div>");k.append(f);j=Raphael.spinner(f[0],10,"#666");AJS.safe.ajax({url:AJS.params.contextPath+"/json/pagechildren.action",type:"POST",data:{pageId:AJS.params.pageId,showChildren:true},success:e,error:function(o,n,m){var l="Could not load child pages.";g();k.html("<span class='error'>"+l+"</span>");AJS.log("Error retrieving child pages: "+n)}})}else{b(true)}};var d=function(){c("#page-children").hide();b(false)};var h=function(){c("#page-children").show();if(c("#children-section:not(.children-showing)").length){i()}else{b(true)}};c("#children-section a.children-show-hide").each(function(){c(this).click(function(l){var k=c("#children-section");if(k.hasClass("children-showing")){d();k.removeClass("children-showing").addClass("children-hidden")}else{h();k.removeClass("children-hidden").addClass("children-showing")}return AJS.stopEvent(l)})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:jquery-json', location = '/includes/js/jquery-plugins/jquery.json-2.3.js' */
(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};$.toJSON=typeof JSON==="object"&&JSON.stringify?JSON.stringify:function(o){if(o===null){return"null"}var type=typeof o;if(type==="undefined"){return undefined}if(type==="number"||type==="boolean"){return""+o}if(type==="string"){return $.quoteString(o)}if(type==="object"){if(typeof o.toJSON==="function"){return $.toJSON(o.toJSON())}if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month="0"+month}if(day<10){day="0"+day}if(hours<10){hours="0"+hours}if(minutes<10){minutes="0"+minutes}if(seconds<10){seconds="0"+seconds}if(milli<100){milli="0"+milli}if(milli<10){milli="0"+milli}return'"'+year+"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds+"."+milli+'Z"'}if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||"null")}return"["+ret.join(",")+"]"}var name,val,pairs=[];for(var k in o){type=typeof k;if(type==="number"){name='"'+k+'"'}else{if(type==="string"){name=$.quoteString(k)}else{continue}}type=typeof o[k];if(type==="function"||type==="undefined"){continue}val=$.toJSON(o[k]);pairs.push(name+":"+val)}return"{"+pairs.join(",")+"}"}};$.evalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(src){return eval("("+src+")")};$.secureEvalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered)){return eval("("+src+")")}else{throw new SyntaxError("Error parsing JSON, source is not valid.")}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==="string"){return c}c=a.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"'}return'"'+string+'"'}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:safe-ajax', location = '/includes/js/safe-ajax.js' */
(function(){var a=jQuery.ajax;AJS.safe={ajax:function(b){if(b.data&&typeof b.data=="object"){b.data.atl_token=jQuery("#atlassian-token").attr("content");return a(b)}},get:function(){jQuery.ajax=AJS.safe.ajax;try{return jQuery.get.apply(jQuery,arguments)}finally{jQuery.ajax=a}},getScript:function(b,c){return AJS.safe.get(b,null,c,"script")},getJSON:function(b,c,d){return AJS.safe.get(b,c,d,"json")},post:function(b,d,e,c){jQuery.ajax=AJS.safe.ajax;try{return jQuery.post.apply(jQuery,arguments)}finally{jQuery.ajax=a}}}})();AJS.safeAjax=function(a){return AJS.safe.ajax(a)};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:search-results-grid', location = '/includes/js/search-results-grid.js' */
(function(){var a=function(b){return{id:b.id,title:b.title,url:AJS.REST.findLink(b.link),type:b.type,spaceName:b.space?b.space.title:"",spaceKey:b.space?b.space.key:"",friendlyDate:b.lastModifiedDate?b.lastModifiedDate.friendly:"",date:b.lastModifiedDate?b.lastModifiedDate.date:""}};jQuery.fn.searchResultsGrid=function(b,f,n,d){var g=jQuery,h=this;var j=f.results;if(!j||!j.length){var p=AJS.format(d.noSearchResults,AJS.escapeEntities(b));h.html("<div class='no-results'>"+p+"</div>");return}h.html(AJS.getTemplate("searchResultsGrid").toString());if(!f.skipResultCount){var m=f.startIndex+1,k=f.startIndex+j.length,l=AJS.format(d.resultsCount,m,k,f.total,AJS.escapeEntities(b));h.prepend(AJS.renderTemplate("searchResultsGridCount",AJS.html(l)))}for(var e=0;e<j.length;e++){var o=j[e];o=f.convertFromRest?a(o):o;var c=g(AJS.renderTemplate("searchResultsGridRow",[o.title,o.url,o.type,o.spaceName,o.spaceKey,o.friendlyDate,o.date]));if(o.type=="attachment"&&o.id){c.attr("data-attachment-id",o.id)}c.selectableEffects(h,n.select,j[e]);h.find("table").append(c)}g(".search-result:first",h).click()}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-ordering-tree', location = '/includes/js/ddtree/spinner.js' */
(function(a){a.ui=a.ui||{};a.fn.extend({spinner:function(b){if(!this.is(".ui-spinner")){return new a.ui.spinner(this,b||{})}}});a.ui.spinner=function(e,k){this.anchor=e;var g=AJS.params.staticResourceUrlPrefix||contextPath;this.images=k.images||[g+"/images/ddtree/black spinner/1.png",g+"/images/ddtree/black spinner/2.png",g+"/images/ddtree/black spinner/3.png",g+"/images/ddtree/black spinner/4.png",g+"/images/ddtree/black spinner/5.png",g+"/images/ddtree/black spinner/6.png",g+"/images/ddtree/black spinner/7.png",g+"/images/ddtree/black spinner/8.png",g+"/images/ddtree/black spinner/9.png",g+"/images/ddtree/black spinner/10.png",g+"/images/ddtree/black spinner/11.png",g+"/images/ddtree/black spinner/12.png"];this.width=k.width||"16px";this.height=k.height||k.width||"16px";this.hide=function(){this.anchor.hide();this.stop()};this.show=function(){this.start();this.anchor.show()};this.fadeIn=function(){this.anchor.fadeIn.apply(this.anchor,arguments)};this.fadeOut=function(){this.anchor.fadeOut.apply(this.anchor,arguments)};this.moveTo=function(i,l){this.anchor.css("top",l);this.anchor.css("left",i)};this.putInBox=function(n){var l=n.x||n.x1,o=n.y||n.y1,m=(typeof n.width=="undefined")?n.x2-n.x1:n.width,i=(typeof n.height=="undefined")?n.y2-n.y1:n.height;this.moveTo(l+Math.round((m-this.offsetWidth)/2),o+Math.round((i-this.offsetHeight)/2))};this.start=function(){if(!this.timer){this.timer=setInterval(b,100)}return this.timer};this.stop=function(){clearInterval(this.timer);this.timer=null};this.divs=[];for(var d=0,j=this.images.length;d<j;d++){var c=document.createElement("div");if(!AJS.applyPngFilter(c,this.images[d])){var f=document.createElement("img");f.src=this.images[d];f.style.width=this.width;f.style.height=this.height;c.appendChild(f)}c.style.width=this.width;c.style.height=this.height;this.anchor.append(c);if(!this.offsetWidth){this.offsetWidth=c.offsetWidth;this.offsetHeight=c.offsetHeight}this.divs.push(a(c).hide())}this.frame=0;this.direction=1;var h=this;var b=function(){h.divs[h.frame].hide();h.frame+=h.direction;if(h.frame>=h.divs.length){h.frame=0}if(h.frame<0){h.frame=h.divs.length-1}h.divs[h.frame].show()};this.anchor.css("position","absolute")}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-ordering-tree', location = '/includes/js/ddtree/tree.js' */
(function(b){b.ui=b.ui||{};b.fn.extend({tree:function(c){if(!this.is(".ui-tree")){return new b.ui.tree(this,c)}}});var a=function(c){c.preventDefault()};b.ui.tree=function(f,h){var e=f,t=this,F=false,g=arguments;if(!(/^[ou]l$/i.test(e[0].tagName))){F=true;if(!h.url){return false}e.html("<ul></ul>");e=b("ul",e)}var v=e[0];e.addClass("ui-tree");var n={list:e,visibleNodes:[],dim:e.offset(),points:[],win:b(window),timer:null,prev:0,events:{grab:function(){},click:function(){},drag:function(){},drop:function(){},append:function(){},insertabove:function(){},insertbelow:function(){},load:function(){},nodeover:function(){},nodeout:function(){},onready:function(){},order:function(){},orderUndo:function(){},remove:function(){},preview:function(){}}};this.options=h;this.expandPath=function(i,L){L=L||function(){};if(i.length){var K=1,J,H,I=function(){if(K<i.length){for(var M in i[K]){J=t.findNodeBy(M,i[K][M]);if(J){break}}K++;J.open(I)}else{L()}};for(H in i[0]){J=this.findNodeBy(H,i[0][H]);break}if(!J){return}J.open(I)}else{L()}};this.reload=function(H){if(F){e.remove()}for(var I in H){this.options[I]=H[I]}return new g.callee(f,this.options)};this.append=function(i){var H=x(i);e.append(H);c.call(H);o()};this.unhighlight=function(){e.find("li.highlighted").each(function(i,H){b(this).removeClass("highlighted")})};function k(O,N){O=(O+"").toLowerCase();N=(N+"").toLowerCase();var J=/(\d+|\D+)/g,K=O.match(J),H=N.match(J),M=Math.max(K.length,H.length);for(var I=0;I<M;I++){if(I==K.length){return -1}if(I==H.length){return 1}var P=parseInt(K[I],10),L=parseInt(H[I],10);if(P==K[I]&&L==H[I]&&P!=L){return(P-L)/Math.abs(P-L)}if((P!=K[I]||L!=H[I])&&K[I]!=H[I]){return K[I]<H[I]?-1:1}}return 0}function u(I){this[0]=I[0];this.$=I;this.text=I.find("span").text();this.href=I.find("a").attr("href");this.linkClass=I.find("a").attr("class");this.nodeClass=I.attr("class");this.open=function(J){if(!n.visibleNodes.length){AJS.log("tried to open empty node");return}return n.visibleNodes[this[0].num].open&&n.visibleNodes[this[0].num].open(J)};this.insertChild=function(J){J.$&&(J=J[0]);n.visibleNodes[this[0].num].append(J)};this.reorder=function(){n.visibleNodes[this[0].num].order(k)};this.close=function(){n.visibleNodes[this[0].num].close()};this.getAttribute=function(J){return this[0][J]};this.setAttribute=function(J,K){this[0][J]=K};this.highlight=function(){this.$.addClass("highlighted")};this.unhighlight=function(){this.$.removeClass("highlighted")};this.makeDraggable=function(){this.setAttribute("undraggable",false);this.$.removeClass("undraggable")};this.makeUndraggable=function(){this.setAttribute("undraggable",true);this.$.addClass("undraggable")};this.makeClickable=function(K){this.setAttribute("unclickable",false);this.$.removeClass("unclickable");var L=this[0].getElementsByTagName("a");var J;if(K){J=b(L[0])}else{J=b(L)}J.unbind("click",a);J.click(n.events.click)};this.makeUnclickable=function(K){this.setAttribute("unclickable",true);this.$.addClass("unclickable");var L=this[0].getElementsByTagName("a");var J;if(K){J=b(L[0])}else{J=b(L)}J.click(a);J.unbind("click",n.events.click)};this.setText=function(J){this.text=J;this[0].text=J;this.$.find("span").text(J)};this.getParent=function(){if(this.$.parent(":not(.ui-tree)").length){var J=this.$.parent().parent();if(J.length){return new u(b(J[0]))}}return null};this.append=function(L){var K=this.$.find("ul");if(!K.length){if(this[0].toBeLoaded){var M=this;this.open(function(){M.append(L)});return false}this.$.append("<ul></ul>");K=this.$.find("ul")}var J=x(L);K.append(J);c.call(J);if(typeof this[0].closed=="undefined"){this.$.addClass("closed");this[0].closed=true;K.hide()}o()};this.below=function(J){var K=x(J);this.$.after(K);c.call(K);o()};this.above=function(J){var K=x(J);this.$.before(K);c.call(K);o()};this.remove=function(){this.$.remove();o()};this.reload=function(){if(this[0].getElementsByTagName("ul").length){this[0].removeChild(this[0].getElementsByTagName("ul")[0]);this.$.removeClass("opened").addClass("closed");this[0].closed=true;n.visibleNodes[this[0].num].open()}};this.order=function(O){var L=b("ul",this.$),J=this[0];J.ordered=true;if(L.length){var K=[];J.oldorder=[];b("li",this.$).each(function(){K.push(this);J.oldorder.push(this)});function P(R,Q){return O(b(R).find("span").html(),b(Q).find("span").html())}K.sort(P);J.order=K;for(var M=0,N=K.length;M<N;M++){L.append(K[M])}}o()};this.orderUndo=function(){this[0].ordered=false;var J=b("ul",this.$);if(this[0].oldorder&&J.length){for(var K=0,L=this[0].oldorder.length;K<L;K++){J.append(this[0].oldorder[K])}}this[0].oldorder=null;o()};this.setOrdered=function(J){this[0].ordered=J;b("a.abc:first",this).css("display",J?"none":"block");b("a.rollback:first",this).css("display","none")};if(t.options.parameters&&t.options.parameters.length){for(var i=0,H=t.options.parameters.length;i<H;i++){if(I[0][t.options.parameters[i]]){this[t.options.parameters[i]]=I[0][t.options.parameters[i]]}}}}this.findNodeBy=function(I,M){var K=[],H=v.getElementsByTagName("li");for(var J=0,L=H.length;J<L;J++){if(H[J][I]==M){K.push(new u(b(H[J])))}}if(K.length==0){return null}else{if(K.length==1){return K[0]}else{return K}}};if(h.url){var r=document.createElement("div");r.className="tree-spinner";if(h.spinnerId){r.id=h.spinnerId}b("body").append(r);n.spinner=b(r).spinner();n.spinner.hide()}for(var y in n.events){if(typeof h[y]=="function"){n.events[y]=h[y]}}function z(i){return !(i.tagName.toLowerCase()=="li"&&b("li:not(.tree-helper)",i).length<1)}function d(i){this.$li=b(i);this.height=this.$li.height()}d.prototype.append=function(i){if(this.$li[0]==i){return false}if(this.$li[0].toBeLoaded){var J=this;this.load(function(){J.append(i)});return false}if(this.$li[0].tagName.toLowerCase()=="li"){var I=b("ul:first",this.$li);var H=i.parentNode.parentNode;b(".rollback:first",H).css("display","none");if(I.length){I.append(i);if(this.$li[0].ordered){this.order(k)}}else{I=document.createElement("ul");I.appendChild(i);this.$li[0].appendChild(I);this.$li.addClass("opened");b(".click-zone:first",this.$li).css("display","inline");b(".rollback:first",this.$li).css("display","none")}if(!z(H)){n.visibleNodes[H.num].notaFolderAnymore()}setTimeout(o,0);n.events.append.call({source:i,target:this.$li[0]})}};d.prototype.below=function(i){var H=i.parentNode.parentNode;this.$li.after(i);b(".rollback:first",H).css("display","none");if(z(H)){if(!b(i.parentNode).hasClass("ui-tree")&&!i.parentNode.parentNode.undraggable){i.parentNode.parentNode.ordered=false;b(".abc:first",i.parentNode.parentNode).css("display","block");b(".rollback:first",i.parentNode.parentNode).css("display","none")}}else{n.visibleNodes[H.num].notaFolderAnymore()}setTimeout(o,0);n.events.insertbelow.call({source:i,target:this.$li[0]})};d.prototype.above=function(i){var H=i.parentNode.parentNode;this.$li.before(i);b(".rollback:first",H).css("display","none");if(z(H)){if(!b(i.parentNode).hasClass("ui-tree")&&!i.parentNode.parentNode.undraggable){i.parentNode.parentNode.ordered=false;b(".abc:first",i.parentNode.parentNode).css("display","block");b(".rollback:first",i.parentNode.parentNode).css("display","none")}}else{n.visibleNodes[H.num].notaFolderAnymore()}setTimeout(o,0);n.events.insertabove.call({source:i,target:this.$li[0]})};d.prototype.order=function(M){var H=this.$li[0];H.ordered=true;var J=b("ul:first",this.$li);if(J.length){var I=[];H.oldorder=[];b("li",this.$li).each(function(){if(this.parentNode.parentNode==H){I.push(this);H.oldorder.push(this)}});function N(O,i){var Q=b("span",O).text().replace(/^\s+|\s+$/g,""),P=b("span",i).text().replace(/^\s+|\s+$/g,"");return M(Q,P)}I.sort(N);H.order=I;for(var K=0,L=I.length;K<L;K++){J.append(I[K])}}o()};d.prototype.orderUndo=function(){var H=this.$li[0];H.ordered=false;var I=b("ul:first",this.$li);if(H.oldorder&&I.length&&I[0].parentNode==H){for(var J=0,K=H.oldorder.length;J<K;J++){I.append(H.oldorder[J])}}H.oldorder=null;H.oldor=null;o()};d.prototype.open=function(H){H=H||function(){};if(this.$li.hasClass("closed")){var i=b("ul:has(li)",this.$li);if(i.length){i.show();this.closed=false;this.$li.removeClass("closed").addClass("opened");o();H(true);return true}else{return this.load(H)}}H(false);return false};d.prototype.close=function(H){H=H||function(){};var i=this.$li.contents().filter("ul:has(li)");if(i.length){i.hide();this.closed=true;this.$li.removeClass("opened").addClass("closed");n.visibleNodes.splice(this.$li[0].num+1,i[0].getElementsByTagName("li").length);o();H()}};d.prototype.load=function(P){var H=t.options.url;if(!H){return false}P=P||function(){};this.$li[0].toBeLoaded=false;this.$li[0].closed=true;var J={};if(h.parameters&&h.parameters.length){for(var K=0,Q=h.parameters.length;K<Q;K++){J[h.parameters[K]]=(this.$li[0][h.parameters[K]]||"")}}var I=this,N=this.$li[0].getElementsByTagName("span")[0],O=N.offsetWidth,M=Math.round(b(N).offset().left);I.loading=true;n.spinner.putInBox({x:M+O,y:this.top,width:25,height:n.H});n.spinner.show();var L=function(V){var T=b("ul",I.$li);if(!T.length){T=document.createElement("ul");I.$li[0].appendChild(T);T=b(T)}I.ordered=(typeof V[0].position!="number");for(var S=0,U=V.length;S<U;S++){var R=x(V[S]);T[0].appendChild(R);c.call(R)}T.hide();I.open(P);n.events.load();n.spinner.hide();I.$li[0].ordered=I.ordered;b(".abc:first",I.$li[0]).css("display",I.ordered||R.undraggable?"none":"block");b(".rollback:first",I.$li[0]).css("display","none")};b.ajax({url:H,type:"GET",dataType:"json",data:J,success:L});return true};d.prototype.notaFolderAnymore=function(){this.$li.removeClass("closed").removeClass("opened");b(".click-zone:first",this.$li).hide();b(".abc:first",this.$li).css("display","none");b(".rollback:first",this.$li).css("display","none");var i=this.$li[0].getElementsByTagName("ul");this.closed=false;if(i.length){this.$li[0].removeChild(i[0])}};function m(i){var H=n.points[i];if(typeof H!="undefined"){return{visibleNode:n.visibleNodes[H.num],where:H.where,top:H.top}}else{return{visibleNode:new d(v),where:"append",top:n.dim.top}}}function j(){var L={y:0,num:0};n.points=[];for(var I=0,K=n.visibleNodes.length;I<K;I++){var N=n.visibleNodes[I].$li.offset(),O=Math.round(N.top);n.visibleNodes[I].top=O;n.visibleNodes[I].left=Math.round(N.left);if(L.y){var M=(O-L.y)/4;for(var J=L.y;J<O;J++){var H=(J-L.y<M)?"above":(J-L.y<M*3)?"append":"below";n.points[J]={num:L.num,where:H,top:L.y}}}if(I==K-1){var M=(n.visibleNodes[I].height)/4;for(var J=O;J<O+n.visibleNodes[I].height;J++){var H=(J-O<M)?"above":(J-O<M*3)?"append":"below";n.points[J]={num:I,where:H,top:O}}}L.y=O;L.num=I}}function o(){n.visibleNodes=[];var H=b("li:visible",v);for(var I=0,J=H.length;I<J;I++){if(!b(H[I]).hasClass("tree-helper")){H[I].num=n.visibleNodes.length;n.visibleNodes.push(new d(H[I]))}}j()}this.updateVisibleNodes=o;var B=function(){var i={distance:3,helper:"clone",opacity:0.7,cursorAt:{top:n.H/2,left:30},stop:function(L,K){clearInterval(n.timer);clearTimeout(n.opentimer);n.opentimer=null;var I=m(n.prev);I.visibleNode.$li.removeClass("over").removeClass("above").removeClass("append").removeClass("below");I.visibleNode.$li.next().removeClass("over").removeClass("above").removeClass("append").removeClass("below");n.win.unbind("keypress",n.escape);delete n.escape;if(i.revert){i.revert=false;return false}I=m(L.pageY||L.originalEvent.pageY);var J=I.visibleNode.$li[0],H=true;while(J!=v){if(J==this){H=false;break}J=J.parentNode}H=H&&!(I.where=="above"&&I.visibleNode.$li.prev()[0]==this)&&!(I.where=="append"&&I.visibleNode.$li[0]==this.parentNode.parentNode);if(H){I.visibleNode[I.where](this);n.events.drop.call({position:I.where,source:this,target:I.visibleNode.$li[0]})}},start:function(J,H){var I=this;H.helper.append("<strong></strong>").addClass("tree-helper").find(".button-panel").remove();n.events.grab.call(I);if(this.undraggable){H.helper.addClass("no");i.revert=true}n.escape=function(M){if(M.keyCode==27){var K=m(n.prev);K.visibleNode.$li.removeClass("over").removeClass("above").removeClass("append").removeClass("below");K.visibleNode.$li.next().removeClass("over").removeClass("above").removeClass("append").removeClass("below");var L=H.helper.clone();H.helper.before(L);L.animate({left:Math.round(b(I).offset().left)+"px",top:Math.round(b(I).offset().top)+"px",opacity:0},"slow","swing",function(){L.remove()});H.helper.css("display","none");i.revert=true}};n.win.keypress(n.escape)},drag:function(N,M){N.pageY=N.pageY||N.originalEvent.pageY;N.pageX=N.pageX||N.originalEvent.pageX;var H=m(n.prev);H.visibleNode.$li.removeClass("above").removeClass("append").removeClass("below");H.visibleNode.$li.next().removeClass("above").removeClass("append").removeClass("below");if(!i.revert||n.out){n.prev=N.pageY;var K=m(n.prev);if(K.visibleNode.$li[0]==v){i.revert=true;n.out=true;return}else{if(n.out){n.out=false;i.revert=false}}if(K.visibleNode!=H.visibleNode){n.events.nodeout.call(H.visibleNode.$li);if(n.opentimer){clearTimeout(n.opentimer);n.opentimer=false}}n.events.nodeover.call({element:K.visibleNode.$li,position:K.where});var J=K.where,I=K.visibleNode.$li.next();if(J=="below"&&I.length&&!I.hasClass("tree-helper")){I.addClass("above")}else{m(n.prev).visibleNode.$li.addClass(J)}if(K.where=="append"&&(K.visibleNode.closed||K.visibleNode.$li[0].toBeLoaded)&&!n.opentimer){n.opentimer=(function(O){return setTimeout(function(){O.visibleNode.$li.removeClass("append");O.visibleNode.open(function(){n.opentimer=false})},500)})(K)}var L=arguments.callee;if(n.win.height()-N.pageY+n.win.scrollTop()<30){clearInterval(n.timer);n.timer=setInterval(function(){window.scrollBy(0,4);M.helper.css("top",parseInt(M.helper.css("top"))+4+"px");L({pageY:N.pageY+4},M)},n.win.height()-N.pageY+n.win.scrollTop())}else{if(n.win.scrollTop()>0&&(N.pageY-n.win.scrollTop())<30){clearInterval(n.timer);n.timer=setInterval(function(){window.scrollBy(0,-4);L({pageY:N.pageY-4},M);M.helper.css("top",parseInt(M.helper.css("top"))-4+"px")},N.pageY-n.win.scrollTop())}else{if(n.timer){clearInterval(n.timer)}}}n.events.drag.call({element:this,left:N.pageX,top:N.pageY})}}};return i};function c(){var i=b(this);if(t.options.undraggable){i.mousedown(a)}else{i.draggable(B());i[0].undraggable=i.hasClass("undraggable")}var H=b(this.getElementsByTagName("a")[0]);if(t.options.unclickable){i.addClass("unclickable");H.click(a)}else{H.click(n.events.click)}if(t.options.oninsert){t.options.oninsert.call(new u(i),H)}}b.ui.tree.callNumber=0;var q=function(i){if(n.visibleNodes[this.parentNode.num].loading){return}if(b(this.parentNode).hasClass("closed")){n.visibleNodes[this.parentNode.num].open()}else{n.visibleNodes[this.parentNode.num].close()}return false},s=function(i){if(!b(i.target).hasClass("tree-helper")){b(".button-panel:first",this).addClass("hover")}return false},E=function(i){if(!b(i.target).hasClass("tree-helper")){b(".button-panel:first",this).removeClass("hover")}return false},D=function(){var i=n.visibleNodes[this.parentNode.parentNode.num];i.order(k);n.events.order.call({source:i.$li[0]});b(this).hide();b("a.rollback",this.parentNode).show();return false},w=function(H){var i=n.visibleNodes[this.parentNode.parentNode.num];i.orderUndo();n.events.orderUndo.call({source:i.$li[0],orderedChildren:b("ul:first",i.$li[0]).children()});b(this).hide();b("a.abc",this.parentNode).show();return false},G=function(H){H.preventDefault();var i=n.visibleNodes[this.parentNode.parentNode.num];n.events.preview.call({source:preview,node:i.$li[0]})},A=function(H){H.preventDefault();var i=n.visibleNodes[this.parentNode.parentNode.num];n.events.remove.call({source:i.$li[0]})};function x(I){var S=document.createElement("li");S.className=I.nodeClass;if(t.options.parameters&&t.options.parameters.length){for(var K=0,L=t.options.parameters.length;K<L;K++){if(I[t.options.parameters[K]]){S[t.options.parameters[K]]=I[t.options.parameters[K]]}}}if(t.options.nodeId){S.id="node-"+I[t.options.nodeId]}var Q=document.createElement("a"),R=document.createElement("span"),J=document.createElement("i");J.className="decorator";Q.href=I.href;R.appendChild(document.createTextNode(I.text));Q.appendChild(R);Q.appendChild(J);Q.className=I.linkClass;var M=document.createElement("div");b(M).addClass("click-zone");b(M).click(q);b(S).mouseover(s).mouseout(E);S.appendChild(M);S.appendChild(Q);var i=document.createElement("div");i.className="button-panel";S.appendChild(i);var P=document.createElement("a");P.className="abc";P.title="Sort Alphabetically";i.appendChild(P);var H=document.createElement("a");H.className="rollback";H.title="Undo Sorting";i.appendChild(H);b(P).click(D);b(H).click(w);if(t.options.isAdministrator){var N=document.createElement("a");N.className="preview-node";N.title="Preview";i.appendChild(N);b(N).click(G);var T=document.createElement("a");T.className="remove-node";T.title="Delete";i.appendChild(T);b(T).click(A)}b(P).css("display","none");b(H).css("display","none");var O=b(S);if(O.hasClass("opened")){O.removeClass("opened").addClass("closed");S.closed=true}else{if(O.hasClass("closed")){S.toBeLoaded=true}else{b(M).css("display","none")}}return S}var p=e.contents().filter("li");if(p.length>0){n.H=p.height();p.each(c);o();n.events.onready.call(this)}else{var l=t.options.initUrl||t.options.url;if(!l){return false}n.spinner.putInBox({x:n.dim.left+16,y:n.dim.top,width:16,height:16});n.spinner.show();var C=++b.ui.tree.callNumber;b.getJSON(l,function(L){var K=+new Date;for(var I=0,J=L.length;I<J;I++){var H=x(L[I]);v.appendChild(H);if(I==0){n.H=b(H).height()}c.call(H)}o();n.spinner.hide();if(C==b.ui.tree.callNumber){n.events.onready.call(this);b.ui.tree.callNumber=0}})}n.offset=v.offsetTop;setInterval(function(){if(v.offsetTop!=n.offset){j();n.offset=v.offsetTop}},10);return this}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/namespace.js' */
window.Confluence||(window.Confluence={});window.Confluence.UI||(window.Confluence.UI={});window.Confluence.UI.Components||(window.Confluence.UI.Components={});window.Confluence.UI.Components.SpacePicker||(window.Confluence.UI.Components.SpacePicker={});window.Confluence.UI.Components.LabelPicker||(window.Confluence.UI.Components.LabelPicker={});window.Confluence.UI.Components.Pagination||(window.Confluence.UI.Components.Pagination={});window.Confluence.UI.Components.SpacePagePicker||(window.Confluence.UI.Components.SpacePagePicker={});window.Confluence.UI.Components.PagePicker||(window.Confluence.UI.Components.PagePicker={});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-picker', location = '/js/space-picker.js' */
(function(h,g){var b={conf_all:"All spaces",conf_favorites:"Favourite spaces",conf_global:"Site spaces",conf_personal:"Personal spaces"};var f={data:null,suggestCategories:null};var c=function(i,l){var k=h(i).val();if(k!==""){var j=b[k];if(j){l({id:k,text:j});return}h.getJSON(AJS.contextPath()+"/rest/prototype/1/space/"+k).done(function(m){l({id:m.key,text:_.escape(m.name)})}).fail(function(){AJS.log("Couldn't resolve spaceKey:",k);l({id:k,text:_.escape(k)})})}};var d=function(j){var i;if(j.suggestCategories){var k={text:"",children:_.map(j.suggestCategories,function(l){return{id:l,text:b[l]}})}}return function(l){if(i){l.callback(i);return}h.getJSON(AJS.contextPath()+"/rest/recentlyviewed/1.0/recent/spaces").done(function(m){var n={results:[]};if(k){n.results.push(k)}if(m.length>0){n.results.push({text:"Suggested spaces",children:_.map(m,function(o){return{id:o.key,text:_.escape(o.name)}})})}l.callback(n);i=n}).fail(function(){AJS.log("Couldn't fetch recent spaces");var m={results:[]};if(k){m.results.push(k)}l.callback(m)})}};var e=function(){return window.Select2.query.ajax({url:AJS.contextPath()+"/rest/quicknav/1/search?type=spacedesc&type=personalspacedesc",data:function(i,j){return{query:i,maxPerCategory:25}},quietMillis:250,results:function(l,k){var j=l.contentNameMatches;if(j.length<=1){return{results:[]}}else{var i=_.map(j[0],function(m){return{id:m.spaceKey,text:m.spaceName}});return{results:[{text:"Search results",children:i}]}}}})};var a=function(j){var i=e();var k=d(j);return function(l){if(l.term.length<2){k(l)}else{i(l)}}};g.build=function(j){j=_.extend({},f,j);var i={placeholder:"Select a space",formatResult:function(k,l,m){l.attr("title",h("<div/>").html(k.text).text());return h.fn.select2.defaults.formatResult.apply(this,arguments)},escapeMarkup:function(k){return k}};if(j.data){return _.extend(i,{data:j.data})}else{return _.extend(i,{initSelection:c,query:a(j)})}}}(AJS.$,window.Confluence.UI.Components.SpacePicker));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/atlassian.soy' */
// This file was automatically generated from atlassian.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.renderExtraAttributes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data != null && opt_data.extraAttributes) {
    if (Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]') {
      var attrList7 = soy.$$getMapKeys(opt_data.extraAttributes);
      var attrListLen7 = attrList7.length;
      for (var attrIndex7 = 0; attrIndex7 < attrListLen7; attrIndex7++) {
        var attrData7 = attrList7[attrIndex7];
        output.append(' ', soy.$$escapeHtml(attrData7), '="', soy.$$escapeHtml(opt_data.extraAttributes[attrData7]), '"');
      }
    } else {
      output.append(' ', opt_data.extraAttributes);
    }
  }
  return opt_sb ? '' : output.toString();
};


aui.renderExtraClasses = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data != null && opt_data.extraClasses) {
    if ((opt_data.extraClasses) instanceof Array) {
      var classList23 = opt_data.extraClasses;
      var classListLen23 = classList23.length;
      for (var classIndex23 = 0; classIndex23 < classListLen23; classIndex23++) {
        var classData23 = classList23[classIndex23];
        output.append(' ', soy.$$escapeHtml(classData23));
      }
    } else {
      output.append(' ', soy.$$escapeHtml(opt_data.extraClasses));
    }
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/badges.soy' */
// This file was automatically generated from badges.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.badges == 'undefined') { aui.badges = {}; }


aui.badges.badge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-badge');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/buttons.soy' */
// This file was automatically generated from buttons.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.buttons == 'undefined') { aui.buttons = {}; }


aui.buttons.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.href) {
    output.append('<a href="', soy.$$escapeHtml(opt_data.href), '"');
    aui.buttons.buttonAttributes(opt_data, output);
    output.append('>');
    aui.buttons.buttonIcon(opt_data, output);
    output.append(soy.$$escapeHtml(opt_data.text), '</a>');
  } else if (opt_data.tagName == 'input') {
    output.append('<input type="', soy.$$escapeHtml(opt_data.inputType ? opt_data.inputType : 'button'), '" ');
    aui.buttons.buttonAttributes(opt_data, output);
    output.append(' value="', soy.$$escapeHtml(opt_data.text), '" />');
  } else {
    output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'button'));
    aui.buttons.buttonAttributes(opt_data, output);
    output.append('>');
    aui.buttons.buttonIcon(opt_data, output);
    output.append(soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'button'), '>');
  }
  return opt_sb ? '' : output.toString();
};


aui.buttons.buttons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-buttons');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.buttons.buttonAttributes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-button', (opt_data.splitButtonType == 'main') ? ' aui-button-split-main' : '', (opt_data.dropdown2Target) ? ' aui-dropdown2-trigger' + ((opt_data.splitButtonType == 'more') ? ' aui-button-split-more' : '') : '');
  switch (opt_data.type) {
    case 'primary':
      output.append(' aui-button-primary');
      break;
    case 'link':
      output.append(' aui-button-link');
      break;
    case 'subtle':
      output.append(' aui-button-subtle');
      break;
  }
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append((opt_data.isPressed) ? ' aria-pressed="' + soy.$$escapeHtml(opt_data.isPressed) + '"' : '', (opt_data.isDisabled) ? ' aria-disabled="' + soy.$$escapeHtml(opt_data.isDisabled) + '"' + ((opt_data.isDisabled == true) ? (opt_data.tagName == 'button' || opt_data.tagName == 'input') ? ' disabled="disabled" ' : '' : '') : '', (opt_data.dropdown2Target) ? ' aria-owns="' + soy.$$escapeHtml(opt_data.dropdown2Target) + '" aria-haspopup="true"' : '', (opt_data.tagName == 'a') ? ' tabindex="0"' : '');
  return opt_sb ? '' : output.toString();
};


aui.buttons.buttonIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.iconType) ? '<span class="' + ((opt_data.iconType == 'aui') ? 'aui-icon' : '') + ((opt_data.iconClass) ? ' ' + soy.$$escapeHtml(opt_data.iconClass) : '') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) + ' ' : '') + '</span>' : '');
  return opt_sb ? '' : output.toString();
};


aui.buttons.splitButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.buttons.button(soy.$$augmentData(opt_data.splitButtonMain, {splitButtonType: 'main'}), output);
  aui.buttons.button(soy.$$augmentData(opt_data.splitButtonMore, {splitButtonType: 'more'}), output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/dropdown.soy' */
// This file was automatically generated from dropdown.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dropdown == 'undefined') { aui.dropdown = {}; }


aui.dropdown.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dd-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><span class="dropdown-text">', (opt_data.accessibilityText) ? soy.$$escapeHtml(opt_data.accessibilityText) : '', '</span>', (! (opt_data.showIcon == false)) ? '<span class="icon icon-dropdown"></span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown.menu = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown hidden');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown.parent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dd-parent');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="dropdown-item');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><a href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '">', soy.$$escapeHtml(opt_data.text), '</a></', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/dropdown2.soy' */
// This file was automatically generated from dropdown2.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dropdown2 == 'undefined') { aui.dropdown2 = {}; }


aui.dropdown2.dropdown2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dropdown2.trigger(soy.$$augmentData(opt_data.trigger, {menu: opt_data.menu}), output);
  aui.dropdown2.contents(opt_data.menu, output);
  return opt_sb ? '' : output.toString();
};


aui.dropdown2.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown2-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('" aria-owns="', soy.$$escapeHtml(opt_data.menu.id), '" aria-haspopup="true"', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', (opt_data.container) ? ' data-container="' + soy.$$escapeHtml(opt_data.container) + '"' : '', ((! opt_data.tagName || opt_data.tagName == 'a') && (! opt_data.extraAttributes || Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]' && ! opt_data.extraAttributes.href && ! opt_data.extraAttributes.tabindex)) ? ' tabindex="0"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', (opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', (! (opt_data.showIcon == false)) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClasses ? opt_data.iconClasses : 'aui-icon-dropdown') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) : '') + '</span>' : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown2.contents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="', soy.$$escapeHtml(opt_data.id), '" class="aui-dropdown2');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', '</div>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown2.section = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown2-section');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.label) ? '<strong>' + soy.$$escapeHtml(opt_data.label) + '</strong>' : '', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/form.soy' */
// This file was automatically generated from form.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.form == 'undefined') { aui.form = {}; }


aui.form.form = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui', (opt_data.isUnsectioned) ? ' unsectioned' : '', (opt_data.isLongLabels) ? ' long-label' : '', (opt_data.isTopLabels) ? ' top-label' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('" action="', soy.$$escapeHtml(opt_data.action), '" method="', soy.$$escapeHtml(opt_data.method ? opt_data.method : 'post'), '"', (opt_data.enctype) ? 'enctype="' + soy.$$escapeHtml(opt_data.enctype) + '"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</form>');
  return opt_sb ? '' : output.toString();
};


aui.form.formDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldset = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var hasClass__soy51 = opt_data.isInline || opt_data.isDateSelect || opt_data.isGroup || opt_data.extraClasses;
  output.append('<fieldset', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  if (hasClass__soy51) {
    output.append(' class="', soy.$$escapeHtml(opt_data.isInline ? 'inline' : opt_data.isDateSelect ? 'date-select' : opt_data.isGroup ? 'group' : ''));
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
  }
  aui.renderExtraAttributes(opt_data, output);
  output.append('><legend><span>', opt_data.legendContent, '</span></legend>', opt_data.content, '</fieldset>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.buttons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="buttons-container', (opt_data.alignment) ? ' ' + soy.$$escapeHtml(opt_data.alignment) : '', '"><div class="buttons">', opt_data.content, '</div></div>');
  return opt_sb ? '' : output.toString();
};


aui.form.label = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<label', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' for="', soy.$$escapeHtml(opt_data.forField), '"');
  if (opt_data.extraClasses) {
    output.append(' class="');
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
  }
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label>');
  return opt_sb ? '' : output.toString();
};


aui.form.input = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<input', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="', soy.$$escapeHtml(opt_data.type == 'password' ? 'text' : opt_data.type == 'submit' ? 'button' : opt_data.type));
  aui.renderExtraClasses(opt_data, output);
  output.append('" type="', soy.$$escapeHtml(opt_data.type), '" name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '"', (opt_data.value) ? ' value="' + soy.$$escapeHtml(opt_data.value) + '"' : '', ((opt_data.type == 'checkbox' || opt_data.type == 'radio') && opt_data.isChecked) ? ' checked="checked"' : '', (opt_data.type == 'text' && opt_data.maxLength) ? ' maxlength="' + soy.$$escapeHtml(opt_data.maxLength) + '"' : '', (opt_data.type == 'text' && opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '', ((opt_data.type == 'text' || opt_data.type == 'password') && opt_data.autocomplete) ? ' autocomplete="' + soy.$$escapeHtml(opt_data.autocomplete) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '', (opt_data.isAutofocus) ? ' autofocus' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('/>');
  return opt_sb ? '' : output.toString();
};


aui.form.submit = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param185 = new soy.StringBuilder((opt_data.name) ? 'name="' + soy.$$escapeHtml(opt_data.name) + '"' : '');
  aui.renderExtraAttributes(opt_data, param185);
  aui.buttons.button({id: opt_data.id, tagName: 'input', inputType: 'submit', text: opt_data.text, type: opt_data.type, href: opt_data.href, isDisabled: opt_data.isDisabled, isPressed: opt_data.isPressed, iconType: opt_data.iconType, iconText: opt_data.iconText, iconClass: opt_data.iconClass, dropdown2Target: opt_data.dropdown2Target, splitButtonType: opt_data.splitButtonType, extraClasses: opt_data.extraClasses, extraAttributes: param185.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param209 = new soy.StringBuilder((opt_data.name) ? 'name="' + soy.$$escapeHtml(opt_data.name) + '"' : '');
  aui.renderExtraAttributes(opt_data, param209);
  aui.buttons.button({id: opt_data.id, tagName: opt_data.tagName, inputType: opt_data.inputType, text: opt_data.text, type: opt_data.type, href: opt_data.href, isDisabled: opt_data.isDisabled, isPressed: opt_data.isPressed, iconType: opt_data.iconType, iconText: opt_data.iconText, iconClass: opt_data.iconClass, dropdown2Target: opt_data.dropdown2Target, splitButtonType: opt_data.splitButtonType, extraClasses: opt_data.extraClasses, extraAttributes: param209.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.linkButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param232 = new soy.StringBuilder('cancel');
  aui.renderExtraClasses(opt_data, param232);
  var param236 = new soy.StringBuilder((opt_data.name) ? 'name="' + soy.$$escapeHtml(opt_data.name) + '"' : '');
  aui.renderExtraAttributes(opt_data, param236);
  aui.buttons.button({id: opt_data.id, tagName: 'a', inputType: opt_data.inputType, text: opt_data.text, type: 'link', href: opt_data.href ? opt_data.href : opt_data.url, isDisabled: opt_data.isDisabled, isPressed: opt_data.isPressed, iconType: opt_data.iconType, iconText: opt_data.iconText, iconClass: opt_data.iconClass, dropdown2Target: opt_data.dropdown2Target, splitButtonType: opt_data.splitButtonType, extraClasses: param232.toString(), extraAttributes: param236.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.textarea = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<textarea', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '" class="textarea');
  aui.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.rows) ? ' rows="' + soy.$$escapeHtml(opt_data.rows) + '"' : '', (opt_data.cols) ? ' cols="' + soy.$$escapeHtml(opt_data.cols) + '"' : '', (opt_data.autocomplete) ? ' autocomplete="' + soy.$$escapeHtml(opt_data.autocomplete) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '', (opt_data.isAutofocus) ? ' autofocus' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '</textarea>');
  return opt_sb ? '' : output.toString();
};


aui.form.select = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<select', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '" class="', soy.$$escapeHtml(opt_data.isMultiple ? 'multi-select' : 'select'));
  aui.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '', (opt_data.isAutofocus) ? ' autofocus' : '', (opt_data.isMultiple) ? ' multiple' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  var optionList321 = opt_data.options;
  var optionListLen321 = optionList321.length;
  for (var optionIndex321 = 0; optionIndex321 < optionListLen321; optionIndex321++) {
    var optionData321 = optionList321[optionIndex321];
    aui.form.optionOrOptgroup(optionData321, output);
  }
  output.append('</select>');
  return opt_sb ? '' : output.toString();
};


aui.form.optionOrOptgroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.options) {
    output.append('<optgroup label="', soy.$$escapeHtml(opt_data.text), '">');
    var optionList331 = opt_data.options;
    var optionListLen331 = optionList331.length;
    for (var optionIndex331 = 0; optionIndex331 < optionListLen331; optionIndex331++) {
      var optionData331 = optionList331[optionIndex331];
      aui.form.optionOrOptgroup(optionData331, output);
    }
    output.append('</optgroup>');
  } else {
    output.append('<option value="', soy.$$escapeHtml(opt_data.value), '" ', (opt_data.selected) ? 'selected' : '', '>', soy.$$escapeHtml(opt_data.text), '</option>');
  }
  return opt_sb ? '' : output.toString();
};


aui.form.value = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-value');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</span>');
  return opt_sb ? '' : output.toString();
};


aui.form.field = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var isCheckboxOrRadio__soy361 = opt_data.type == 'checkbox' || opt_data.type == 'radio';
  var fieldWidthClass__soy362 = opt_data.fieldWidth ? opt_data.fieldWidth + '-field' : '';
  output.append('<div class="', (isCheckboxOrRadio__soy361) ? soy.$$escapeHtml(opt_data.type) : 'field-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  if (opt_data.labelContent && ! isCheckboxOrRadio__soy361) {
    aui.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}, output);
  }
  switch (opt_data.type) {
    case 'textarea':
      aui.form.textarea({id: opt_data.id, name: opt_data.name, value: opt_data.value, rows: opt_data.rows, cols: opt_data.cols, autocomplete: opt_data.autocomplete, isDisabled: opt_data.isDisabled ? true : false, isAutofocus: opt_data.isAutofocus, extraClasses: fieldWidthClass__soy362}, output);
      break;
    case 'select':
      aui.form.select({id: opt_data.id, name: opt_data.name, options: opt_data.options, isMultiple: opt_data.isMultiple, size: opt_data.size, isDisabled: opt_data.isDisabled ? true : false, isAutofocus: opt_data.isAutofocus, extraClasses: fieldWidthClass__soy362}, output);
      break;
    case 'value':
      aui.form.value({id: opt_data.id, content: soy.$$escapeHtml(opt_data.value)}, output);
      break;
    case 'text':
    case 'password':
    case 'file':
    case 'radio':
    case 'checkbox':
    case 'button':
    case 'submit':
    case 'reset':
      aui.form.input({id: opt_data.id, name: opt_data.name, type: opt_data.type, value: opt_data.value, maxLength: opt_data.maxLength, size: opt_data.size, autocomplete: opt_data.autocomplete, isChecked: opt_data.isChecked, isDisabled: opt_data.isDisabled ? true : false, isAutofocus: opt_data.isAutofocus, extraClasses: fieldWidthClass__soy362}, output);
      break;
  }
  if (opt_data.labelContent && isCheckboxOrRadio__soy361) {
    aui.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}, output);
  }
  if (opt_data.descriptionText) {
    aui.form.fieldDescription({message: opt_data.descriptionText}, output);
  }
  if (opt_data.errorTexts) {
    var errorList432 = opt_data.errorTexts;
    var errorListLen432 = errorList432.length;
    for (var errorIndex432 = 0; errorIndex432 < errorListLen432; errorIndex432++) {
      var errorData432 = errorList432[errorIndex432];
      aui.form.fieldError({message: errorData432}, output);
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="error');
  aui.renderExtraClasses(opt_data, output);
  output.append('">', soy.$$escapeHtml(opt_data.message), '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="description');
  aui.renderExtraClasses(opt_data, output);
  output.append('">', soy.$$escapeHtml(opt_data.message), '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.textField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'text', labelContent: opt_data.labelContent, value: opt_data.value, maxLength: opt_data.maxLength, size: opt_data.size, autocomplete: opt_data.autocomplete, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, isAutofocus: opt_data.isAutofocus, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, fieldWidth: opt_data.fieldWidth}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.textareaField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'textarea', labelContent: opt_data.labelContent, value: opt_data.value, rows: opt_data.rows, cols: opt_data.cols, autocomplete: opt_data.autocomplete, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, isAutofocus: opt_data.isAutofocus, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, fieldWidth: opt_data.fieldWidth}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.passwordField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'password', labelContent: opt_data.labelContent, value: opt_data.value, autocomplete: opt_data.autocomplete, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, isAutofocus: opt_data.isAutofocus, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, fieldWidth: opt_data.fieldWidth}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.fileField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'file', labelContent: opt_data.labelContent, value: opt_data.value, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, isAutofocus: opt_data.isAutofocus, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.selectField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, name: opt_data.name, type: 'select', labelContent: opt_data.labelContent, options: opt_data.options, isMultiple: opt_data.isMultiple, size: opt_data.size, isRequired: opt_data.isRequired, isDisabled: opt_data.isDisabled, isAutofocus: opt_data.isAutofocus, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, fieldWidth: opt_data.fieldWidth}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.checkboxField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param538 = new soy.StringBuilder((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList542 = opt_data.fields;
  var fieldListLen542 = fieldList542.length;
  for (var fieldIndex542 = 0; fieldIndex542 < fieldListLen542; fieldIndex542++) {
    var fieldData542 = fieldList542[fieldIndex542];
    aui.form.field(soy.$$augmentData(fieldData542, {type: 'checkbox', id: fieldData542.id, name: fieldData542.name, labelContent: soy.$$escapeHtml(fieldData542.labelText), isChecked: fieldData542.isChecked, isDisabled: fieldData542.isDisabled, isAutofocus: fieldData542.isAutofocus, descriptionText: fieldData542.descriptionText, errorTexts: fieldData542.errorTexts, extraClasses: fieldData542.extraClasses, extraAttributes: fieldData542.extraAttributes}), param538);
  }
  param538.append((opt_data.isMatrix) ? '</div>' : '');
  if (opt_data.descriptionText || opt_data.errorTexts && opt_data.errorTexts.length) {
    aui.form.field({descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, isDisabled: false}, param538);
  }
  aui.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param538.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.radioField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param573 = new soy.StringBuilder((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList577 = opt_data.fields;
  var fieldListLen577 = fieldList577.length;
  for (var fieldIndex577 = 0; fieldIndex577 < fieldListLen577; fieldIndex577++) {
    var fieldData577 = fieldList577[fieldIndex577];
    aui.form.field(soy.$$augmentData(fieldData577, {type: 'radio', name: opt_data.name ? opt_data.name : opt_data.id, value: fieldData577.value, id: fieldData577.id, labelContent: soy.$$escapeHtml(fieldData577.labelText), isChecked: fieldData577.isChecked, isDisabled: fieldData577.isDisabled, isAutofocus: fieldData577.isAutofocus, descriptionText: fieldData577.descriptionText, errorTexts: fieldData577.errorTexts, extraClasses: fieldData577.extraClasses, extraAttributes: fieldData577.extraAttributes}), param573);
  }
  param573.append((opt_data.isMatrix) ? '</div>' : '');
  if (opt_data.descriptionText || opt_data.errorTexts && opt_data.errorTexts.length) {
    aui.form.field({descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, isDisabled: false}, param573);
  }
  aui.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param573.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.valueField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field({id: opt_data.id, type: 'value', value: opt_data.value, labelContent: opt_data.labelContent, isRequired: opt_data.isRequired, descriptionText: opt_data.descriptionText, errorTexts: opt_data.errorTexts, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/group.soy' */
// This file was automatically generated from group.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.group == 'undefined') { aui.group = {}; }


aui.group.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-group', (opt_data.isSplit) ? ' aui-group-split' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.group.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-item');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/labels.soy' */
// This file was automatically generated from labels.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.labels == 'undefined') { aui.labels = {}; }


aui.labels.label = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.url && opt_data.isCloseable == true) {
    output.append('<span', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-label aui-label-closeable aui-label-split');
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
    aui.renderExtraAttributes(opt_data, output);
    output.append('><a class="aui-label-split-main" href="', soy.$$escapeHtml(opt_data.url), '">', soy.$$escapeHtml(opt_data.text), '</a><span class="aui-label-split-close" >');
    aui.labels.closeIcon(opt_data, output);
    output.append('</span></span>');
  } else {
    output.append('<', soy.$$escapeHtml(opt_data.url ? 'a' : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-label', (opt_data.isCloseable) ? ' aui-label-closeable' : '');
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
    aui.renderExtraAttributes(opt_data, output);
    output.append((opt_data.url) ? ' href="' + soy.$$escapeHtml(opt_data.url) + '"' : '', '>', soy.$$escapeHtml(opt_data.text));
    if (opt_data.isCloseable) {
      aui.labels.closeIcon(opt_data, output);
    }
    output.append('</', soy.$$escapeHtml(opt_data.url ? 'a' : 'span'), '>');
  }
  return opt_sb ? '' : output.toString();
};


aui.labels.closeIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span tabindex="0" class="aui-icon aui-icon-close"');
  if (opt_data.hasTitle != false) {
    output.append(' title="');
    aui.labels.closeIconText(opt_data, output);
    output.append('"');
  }
  output.append('>');
  aui.labels.closeIconText(opt_data, output);
  output.append('</span>');
  return opt_sb ? '' : output.toString();
};


aui.labels.closeIconText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.closeIconText) ? soy.$$escapeHtml(opt_data.closeIconText) : '(' + soy.$$escapeHtml("Remove") + ' ' + soy.$$escapeHtml(opt_data.text) + ')');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/message.soy' */
// This file was automatically generated from message.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.message == 'undefined') { aui.message = {}; }


aui.message.info = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'info'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.warning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'warning'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'error'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.success = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'success'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.hint = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'hint'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.generic = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'generic'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.message = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-message ', soy.$$escapeHtml(opt_data.type ? opt_data.type : 'generic'), (opt_data.isCloseable) ? ' closeable' : '', (opt_data.isShadowed) ? ' shadowed' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.titleContent) ? '<p class="title"><strong>' + opt_data.titleContent + '</strong></p>' : '', opt_data.content, '<span class="aui-icon icon-', soy.$$escapeHtml(opt_data.type ? opt_data.type : 'generic'), '"></span>', (opt_data.isCloseable) ? '<span class="aui-icon icon-close" role="button" tabindex="0"></span>' : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/page.soy' */
// This file was automatically generated from page.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.page == 'undefined') { aui.page = {}; }


aui.page.document = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<!DOCTYPE html><html lang="', soy.$$escapeHtml(opt_ijData.language ? opt_ijData.language : 'en'), '"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>', soy.$$escapeHtml(opt_data.windowTitle), '</title>', (opt_data.headContent) ? opt_data.headContent : '', '</head><body');
  if (opt_data.pageType) {
    if (opt_data.pageType == 'generic') {
      if (opt_data.extraClasses) {
        output.append(' class="');
        aui.renderExtraClasses(opt_data, output, opt_ijData);
        output.append('"');
      }
    } else if (opt_data.pageType == 'focused') {
      output.append(' class="aui-page-focused aui-page-focused-', soy.$$escapeHtml(opt_data.focusedPageSize ? opt_data.focusedPageSize : 'xlarge'));
      aui.renderExtraClasses(opt_data, output, opt_ijData);
      output.append('"');
    } else {
      output.append(' class="aui-page-', soy.$$escapeHtml(opt_data.pageType));
      aui.renderExtraClasses(opt_data, output, opt_ijData);
      output.append('"');
    }
  } else {
    output.append(' class="');
    aui.renderExtraClasses(opt_data, output, opt_ijData);
    output.append('"');
  }
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</body></html>');
  return opt_sb ? '' : output.toString();
};


aui.page.page = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="page"><header id="header" role="banner">', opt_data.headerContent, '</header><!-- #header --><section id="content" role="main">', opt_data.contentContent, '</section><!-- #content --><footer id="footer" role="contentinfo">', opt_data.footerContent, '</footer><!-- #footer --></div><!-- #page -->');
  return opt_sb ? '' : output.toString();
};


aui.page.header = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<nav', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-header aui-dropdown2-trigger-group');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append(' role="navigation"><div class="aui-header-inner">', (opt_data.headerBeforeContent) ? '<div class="aui-header-before">' + opt_data.headerBeforeContent + '</div>' : '', '<div class="aui-header-primary"><h1 id="logo" class="aui-header-logo', (opt_data.headerLogoImageUrl) ? ' aui-header-logo-custom' : (opt_data.logo) ? ' aui-header-logo-' + soy.$$escapeHtml(opt_data.logo) : '', '"><a href="', soy.$$escapeHtml(opt_data.headerLink ? opt_data.headerLink : '/'), '">', (opt_data.headerLogoImageUrl) ? '<img src="' + soy.$$escapeHtml(opt_data.headerLogoImageUrl) + '" alt="' + soy.$$escapeHtml(opt_data.headerLogoText) + '" />' : '<span class="aui-header-logo-device">' + soy.$$escapeHtml(opt_data.headerLogoText ? opt_data.headerLogoText : '') + '</span>', (opt_data.headerText) ? '<span class="aui-header-logo-text">' + soy.$$escapeHtml(opt_data.headerText) + '</span>' : '', '</a></h1>', (opt_data.primaryNavContent) ? opt_data.primaryNavContent : '', '</div>', (opt_data.secondaryNavContent) ? '<div class="aui-header-secondary">' + opt_data.secondaryNavContent + '</div>' : '', (opt_data.headerAfterContent) ? '<div class="aui-header-after">' + opt_data.headerAfterContent + '</div>' : '', '</div><!-- .aui-header-inner--></nav><!-- .aui-header -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanel = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), ' class="aui-page-panel');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('><div class="aui-page-panel-inner">', opt_data.content, '</div><!-- .aui-page-panel-inner --></', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '><!-- .aui-page-panel -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelNav = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), ' class="aui-page-panel-nav');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '><!-- .aui-page-panel-nav -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelContent = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), ' class="aui-page-panel-content');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '><!-- .aui-page-panel-content -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelSidebar = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside'), ' class="aui-page-panel-sidebar');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside'), '><!-- .aui-page-panel-sidebar -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelItem = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), ' class="aui-page-panel-item');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '><!-- .aui-page-panel-item -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeader = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header class="aui-page-header');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('><div class="aui-page-header-inner">', opt_data.content, '</div><!-- .aui-page-header-inner --></header><!-- .aui-page-header -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeaderImage = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-image');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-image -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeaderMain = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-main');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-main -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeaderActions = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-actions');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-actions -->');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/panel.soy' */
// This file was automatically generated from panel.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.panel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-panel');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/table.soy' */
// This file was automatically generated from table.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.table = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.columnsContent) ? opt_data.columnsContent : '', (opt_data.captionContent) ? '<caption>' + opt_data.captionContent + '</caption>' : '', (opt_data.theadContent) ? '<thead>' + opt_data.theadContent + '</thead>' : '', (opt_data.tfootContent) ? '<tfoot>' + opt_data.tfootContent + '</tfoot>' : '', (! opt_data.contentIncludesTbody) ? '<tbody>' : '', opt_data.content, (! opt_data.contentIncludesTbody) ? '</tbody>' : '', '</table>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/tabs.soy' */
// This file was automatically generated from tabs.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.tabs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-tabs ', soy.$$escapeHtml(opt_data.isVertical ? 'vertical-tabs' : 'horizontal-tabs'), (opt_data.isDisabled) ? ' aui-tabs-disabled' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><ul class="tabs-menu">');
  var itemList19 = opt_data.menuItems;
  var itemListLen19 = itemList19.length;
  for (var itemIndex19 = 0; itemIndex19 < itemListLen19; itemIndex19++) {
    var itemData19 = itemList19[itemIndex19];
    aui.tabMenuItem(itemData19, output);
  }
  output.append('</ul>', opt_data.paneContent, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.tabMenuItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="menu-item', (opt_data.isActive) ? ' active-tab' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><a href="', soy.$$escapeHtml(opt_data.url), '"><strong>', soy.$$escapeHtml(opt_data.text), '</strong></a></li>');
  return opt_sb ? '' : output.toString();
};


aui.tabPane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="tabs-pane', (opt_data.isActive) ? ' active-pane' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/toolbar.soy' */
// This file was automatically generated from toolbar.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.toolbar == 'undefined') { aui.toolbar = {}; }


aui.toolbar.toolbar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.split = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-split toolbar-split-', soy.$$escapeHtml(opt_data.split));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</ul>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li ', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-item', (opt_data.isPrimary) ? ' primary' : '', (opt_data.isActive) ? ' active' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</li>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('" href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '"', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</a>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! (opt_data != null)) {
    output.append('Either $text or both $title and $iconClass must be provided.');
  } else {
    var param107 = new soy.StringBuilder();
    aui.toolbar.trigger({url: opt_data.url, title: opt_data.title, content: ((opt_data.iconClass) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClass) + '"></span>' : '') + ((opt_data.text) ? '<span class="trigger-text">' + soy.$$escapeHtml(opt_data.text) + '</span>' : '')}, param107);
    aui.toolbar.item({isActive: opt_data.isActive, isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param107.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


aui.toolbar.link = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param125 = new soy.StringBuilder('toolbar-item-link');
  aui.renderExtraClasses(opt_data, param125);
  var param129 = new soy.StringBuilder();
  aui.toolbar.trigger({url: opt_data.url, content: soy.$$escapeHtml(opt_data.text)}, param129);
  aui.toolbar.item({id: opt_data.id, extraClasses: param125.toString(), extraAttributes: opt_data.extraAttributes, content: param129.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.toolbar.dropdownInternal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param138 = new soy.StringBuilder(opt_data.itemClass);
  aui.renderExtraClasses(opt_data, param138);
  var param143 = new soy.StringBuilder((opt_data.splitButtonContent) ? opt_data.splitButtonContent : '');
  var param148 = new soy.StringBuilder();
  aui.dropdown.trigger({extraClasses: 'toolbar-trigger', accessibilityText: opt_data.text}, param148);
  aui.dropdown.menu({content: opt_data.dropdownItemsContent}, param148);
  aui.dropdown.parent({content: param148.toString()}, param143);
  aui.toolbar.item({isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: param138.toString(), extraAttributes: opt_data.extraAttributes, content: param143.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.toolbar.dropdown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-dropdown', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, text: opt_data.text, dropdownItemsContent: opt_data.dropdownItemsContent}, output);
  return opt_sb ? '' : output.toString();
};


aui.toolbar.splitButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param172 = new soy.StringBuilder();
  aui.toolbar.trigger({url: opt_data.url, content: soy.$$escapeHtml(opt_data.text)}, param172);
  aui.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-splitbutton', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, dropdownItemsContent: opt_data.dropdownItemsContent, splitButtonContent: param172.toString()}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/toolbar2.soy' */
// This file was automatically generated from toolbar2.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.toolbar2 == 'undefined') { aui.toolbar2 = {}; }


aui.toolbar2.toolbar2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append(' role="toolbar"><div class="aui-toolbar2-inner">', opt_data.content, '</div></div>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar2.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2-', soy.$$escapeHtml(opt_data.item));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar2.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/progress-tracker.soy' */
// This file was automatically generated from progress-tracker.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.progressTracker == 'undefined') { aui.progressTracker = {}; }


aui.progressTracker.progressTracker = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-progress-tracker', (opt_data.isInverted) ? ' aui-progress-tracker-inverted' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  var param18 = new soy.StringBuilder();
  var currentStepList19 = opt_data.steps;
  var currentStepListLen19 = currentStepList19.length;
  for (var currentStepIndex19 = 0; currentStepIndex19 < currentStepListLen19; currentStepIndex19++) {
    var currentStepData19 = currentStepList19[currentStepIndex19];
    if (currentStepData19['isCurrent']) {
      var stepList22 = opt_data.steps;
      var stepListLen22 = stepList22.length;
      for (var stepIndex22 = 0; stepIndex22 < stepListLen22; stepIndex22++) {
        var stepData22 = stepList22[stepIndex22];
        aui.progressTracker.step(soy.$$augmentData(stepData22, {width: Math.round(100 / opt_data.steps.length * 10000) / 10000, href: stepIndex22 < currentStepIndex19 ? stepData22['href'] : null}), param18);
      }
    }
  }
  aui.progressTracker.content({steps: opt_data.steps, content: param18.toString()}, output);
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


aui.progressTracker.content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.content != '') {
    output.append(opt_data.content);
  } else {
    var stepList36 = opt_data.steps;
    var stepListLen36 = stepList36.length;
    for (var stepIndex36 = 0; stepIndex36 < stepListLen36; stepIndex36++) {
      var stepData36 = stepList36[stepIndex36];
      aui.progressTracker.step(soy.$$augmentData(stepData36, {isCurrent: stepIndex36 == 0, width: Math.round(100 / opt_data.steps.length * 10000) / 10000, href: null}), output);
    }
  }
  return opt_sb ? '' : output.toString();
};


aui.progressTracker.step = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-progress-tracker-step', (opt_data.isCurrent) ? ' aui-progress-tracker-step-current' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('" style="width: ', soy.$$escapeHtml(opt_data.width), '%;"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><', soy.$$escapeHtml(opt_data.href ? 'a' : 'span'), (opt_data.href) ? ' href="' + soy.$$escapeHtml(opt_data.href) + '"' : '', '>', soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.href ? 'a' : 'span'), '></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/expander.soy' */
// This file was automatically generated from expander.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.expander == 'undefined') { aui.expander = {}; }


aui.expander.content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-expander-content');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append((opt_data.initiallyExpanded) ? ' aria-expanded="' + soy.$$escapeHtml(opt_data.initiallyExpanded) + '"' : '', '>', (opt_data.content) ? opt_data.content : '', '</div>');
  return opt_sb ? '' : output.toString();
};


aui.expander.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tag ? opt_data.tag : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.replaceText) ? ' data-replace-text="' + soy.$$escapeHtml(opt_data.replaceText) + '"' : '', (opt_data.replaceSelector) ? ' data-replace-selector="' + soy.$$escapeHtml(opt_data.replaceSelector) + '"' : '', ' class="aui-expander-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append(' aria-controls="', soy.$$escapeHtml(opt_data.contentId), '"', (opt_data.collapsible) ? ' data-collapsible="' + soy.$$escapeHtml(opt_data.collapsible) + '"' : '', '>', (opt_data.content) ? opt_data.content : '', '</', soy.$$escapeHtml(opt_data.tag ? opt_data.tag : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.expander.revealText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param64 = new soy.StringBuilder(soy.$$escapeHtml(opt_data.contentContent));
  aui.expander.trigger({id: opt_data.triggerId, contentId: opt_data.contentId, tag: 'a', content: '<span class=\'reveal-text-trigger-text\'>Show more</span>', replaceSelector: '.reveal-text-trigger-text', replaceText: 'Show less', extraAttributes: opt_data.triggerExtraAttributes, extraClasses: ((opt_data.triggerExtraClasses) ? soy.$$escapeHtml(opt_data.triggerExtraClasses) + '  ' : '') + ' aui-expander-reveal-text'}, param64);
  aui.expander.content({id: opt_data.contentId, content: param64.toString(), extraAttributes: opt_data.contentExtraAttributes, extraClasses: opt_data.contentExtraClasses}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/avatar.soy' */
// This file was automatically generated from avatar.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.avatar == 'undefined') { aui.avatar = {}; }


aui.avatar.avatar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-avatar aui-avatar-', soy.$$escapeHtml(opt_data.size), soy.$$escapeHtml(opt_data.isProject ? ' aui-avatar-project' : ''), soy.$$escapeHtml(opt_data.badgeContent ? ' aui-avatar-badged' : ''));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><span class="aui-avatar-inner"><img src="', soy.$$escapeHtml(opt_data.avatarImageUrl), '"', (opt_data.accessibilityText) ? ' alt="' + soy.$$escapeHtml(opt_data.accessibilityText) + '"' : '', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', (opt_data.imageClasses) ? ' class="' + soy.$$escapeHtml(opt_data.imageClasses) + '"' : '', ' /></span>', (opt_data.badgeContent) ? opt_data.badgeContent : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/atlassian/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.icons == 'undefined') { aui.icons = {}; }


aui.icons.icon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-icon', (opt_data.useIconFont) ? ' aui-icon-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'small') : '', ' aui', soy.$$escapeHtml(opt_data.useIconFont ? '-iconfont' : '-icon'), soy.$$escapeHtml(opt_data.iconFontSet ? '-' + opt_data.iconFontSet : ''), '-', soy.$$escapeHtml(opt_data.icon));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.accessibilityText) ? soy.$$escapeHtml(opt_data.accessibilityText) : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/soy/page-move-dialog.soy' */
// This file was automatically generated from page-move-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.MovePage == 'undefined') { Confluence.Templates.MovePage = {}; }


Confluence.Templates.MovePage.movePageAdvancedPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="row information"><div class="inner"><div class="element">', soy.$$escapeHtml("Specify the new parent page for this page and its children by space and title."), '</div></div></div><form class="aui" onsubmit="return false;"><fieldset><legend class="assistive"><span>', soy.$$escapeHtml("Change the Parent Page to a Known Page"), '</span></legend><div class="field-group"><label for="new-space">', soy.$$escapeHtml("New space:"), '</label><div class="value new-space-value"><input id="new-space-key" name="new-space-key" type="hidden" value="', soy.$$escapeHtml(opt_data.spaceKey), '">', (opt_data.canMoveBetweenSpaces) ? '<span class="space-input"><input id="new-space" name="new-space" value="' + soy.$$escapeHtml(opt_data.spaceName) + '" class="text long-field"></span><div class="description hidden">' + soy.$$escapeHtml("Start typing a space name to see a list of suggestions.") + '</div>' : '<span class="space-input"><input id="new-space" name="new-space" value="' + soy.$$escapeHtml(opt_data.spaceName) + '" disabled="disabled" class="text long-field"></span><div class="description warning">' + soy.$$escapeHtml("You cannot move this page to another space because you do not have permission to delete it from this space.") + '</div>', '<div class="new-space-dropdown aui-dd-parent autocomplete"></div></div></div><div class="field-group"><label for="new-parent-page">', soy.$$escapeHtml("New parent page:"), '</label><div class="value new-parent-page-value"><span class="page-input"><input id="new-parent-page" name="new-parent-page" value="', soy.$$escapeHtml(opt_data.parentPageTitle), '" class="text long-field"></span><div class="description">', soy.$$escapeHtml("Start typing a page title to see a list of suggestions."), '</div><div class="new-parent-page-dropdown aui-dd-parent autocomplete"></div></div></div></fieldset></form><div class="location-info"><div class="row"><label>', soy.$$escapeHtml("Current location:"), '</label><div class="value breadcrumbs-container"><div class="breadcrumbs-line"><ul id="current-parent-breadcrumbs" class="breadcrumbs"></ul></div></div></div><div class="row"><label>', soy.$$escapeHtml("New location:"), '</label><div class="value breadcrumbs-container"><div class="breadcrumbs-line"><ul id="new-parent-breadcrumbs" class="breadcrumbs"></ul></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.movePageSearchPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="row information"><div class="inner"><div class="element">', soy.$$escapeHtml("Search for and select the new parent page for this page and its children."), '</div></div></div><div id="move-page-search-container" class="row"><form class="aui" onsubmit="return false;"><fieldset><legend class="assistive"><span>', soy.$$escapeHtml("Search for a New Parent Page"), '</span></legend><label  for="move-page-search-query" class="assistive">', soy.$$escapeHtml("Search keywords"), '</label><input class="search-query text" id="move-page-search-query"><label  for="move-page-search-spac" class="assistive">', soy.$$escapeHtml("Search in space"), '</label>', (opt_data.canMoveBetweenSpaces) ? '<select id="move-page-search-space" class="search-space select"><option value="conf_all" selected="selected">' + soy.$$escapeHtml("All Spaces") + '</option><option value="' + soy.$$escapeHtml(opt_data.spaceKey) + '">' + soy.$$escapeHtml(opt_data.spaceName) + '</option></select>' : '<select id="move-page-search-space" class="search-space select" disabled="disabled"><option value="' + soy.$$escapeHtml(opt_data.spaceKey) + '" selected="selected">' + soy.$$escapeHtml(opt_data.spaceName) + '</option></select>', '<input type="button" value="', soy.$$escapeHtml("Search"), '" class="button submit">', (! opt_data.canMoveBetweenSpaces) ? '<div class="description warning">' + soy.$$escapeHtml("You cannot move this page to another space because you do not have permission to delete it from this space.") + '</div>' : '', '</fieldset></form><div class="search-results"></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.errorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="move-errors" class="hidden warning"></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.breadcrumbItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a class="', soy.$$escapeHtml(opt_data.className), '" title="', soy.$$escapeHtml(opt_data.title), '" tabindex="-1"><span>', soy.$$escapeHtml(opt_data.text), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.breadcrumbLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="loading"><span>', "Loading breadcrumbs\u2026", '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.breadcrumbError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="warning last"><span>', soy.$$escapeHtml("Error retrieving breadcrumbs."), '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.noMatchingPages = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol><li><span class="warning">', soy.$$escapeHtml("No matching pages found."), '</span></li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.noMatchingSpaces = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol><li><span class="warning">', soy.$$escapeHtml("No matching spaces found."), '</span></li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.searchResultsLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="searching">', soy.$$escapeHtml("Searching\u2026"), '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.pageHistoryLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="searching">', soy.$$escapeHtml("Loading\u2026"), '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.panelLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span>', soy.$$escapeHtml("Loading\u2026"), '</span>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.browsePanelSpace = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul><li id=\'tree-root-node-item\' class=\'root-node-list-item\'><a class=\'root-node\' href=\'#\'>', soy.$$escapeHtml(opt_data.linkText), '</a></li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.orderingPagePanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="orderingPlaceHolder"></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.reorderCheckbox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span id="reorderRequirement"><input id="reorderCheck" type="checkbox" name="reorderFlag" title="', soy.$$escapeHtml("Choose the position of this page within the list of child pages."), '"/><label for="reorderCheck" title="', soy.$$escapeHtml("Choose the position of this page within the list of child pages."), '">', soy.$$escapeHtml("Reorder"), '</label></span>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-55/Moving+a+Page"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.historyPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="row information"><div class="inner"><div class="element">', soy.$$escapeHtml(AJS.format("Select the new parent page for this page and its children from your history.",opt_data.pageTitle)), '</div></div></div><div id="move-page-search-container" class="row"><div class="search-results"></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.MovePage.browsePanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="row information"><div class="inner"><div class="element">', soy.$$escapeHtml(AJS.format("Click to select the new parent page for this page and its children.",opt_data.pageTitle)), '</div></div></div><div class="tree"></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/js/page-move-dialog-ordering.js' */
jQuery.fn.movePageOrdering=function(i,j,g,e){var f=jQuery;var c=f("#confluence-context-path").attr("content");var b=f("#orderingPlaceHolder",this);b.addClass("loading").html(Confluence.Templates.MovePage.panelLoading());b.load(c+"/panels/reorderpage.action",{panelName:"reorder",spaceKey:i,title:j,movedPageId:AJS.params.pageId,pageTitle:g},function(){b.removeClass("loading");h(b,e);a(f(".siblings",b))});var d=function(m,o){var l;var n=m.prevAll("li.sibling")[0];if(n){l="below"}else{l="above";n=m.nextAll("li.sibling")[0]}if(n){AJS.debug("Reorder: positionIndicator = "+l+" and target = "+n.innerHTML);var k=f("i",n).text();o(k,l)}};var h=function(k,p){var m=f(".dropper",k),o=f(".target",m);var l=0;f("li",m).each(function(q){!q&&f(this).before(f('<li class="leading">&nbsp;</li>'));f(this).after(f('<li class="leading">&nbsp;</li>'))});var n=o.next();f(".leading",m).hover(function(q){f(this).addClass("here")},function(){f(this).removeClass("here")}).click(function(){d(f(this),p);var q=this;o.hide(150,function(){q!=n[0]&&f(q).after(n).after(o);o.show(150)})})};var a=function(k){var m=f(".target",k);if(m.length){var l=m.position().top;var n=k.height();if(l<0||l>n){k.scrollTop(k.scrollTop()+l-n/3)}}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/js/page-move-dialog-breadcrumbs.js' */
jQuery.fn.renderBreadcrumbs=function(k){var g=jQuery,e=this,j=[],h=0,m=k.length-1,a=k[h],c=a.url.indexOf("~")>=0?"personalspacedesc":"spacedesc",l,b=e.closest(".breadcrumbs-container").width(),f=function(){return e.width()<b},d;j.push(Confluence.Templates.MovePage.breadcrumbItem({text:a.title,title:a.title,className:(h==m?"last":"")}));while(h++<m){l=k[h];j.push(Confluence.Templates.MovePage.breadcrumbItem({text:l.title,title:l.title,className:(h==m?"last":"")}))}this.html(j.join(""));d=g("li a span",this);d.each(function(i){if(i!=0&&i!=m){g(this).shortenUntil(f)}});g(d.get(0)).shortenUntil(f);g(d.get(m)).shortenUntil(f);return this};AJS.toInit(function(d){var b=d("#confluence-context-path").attr("content");function a(e){for(var f=1;f<e.length;f++){if(e[f].title==AJS.Meta.get("page-title")){return false}}return true}if(!AJS.MoveDialog){AJS.MoveDialog={}}var c={};AJS.MoveDialog.getBreadcrumbs=function(f,h,e){var g=f.userName?f.userName:(f.pageId?(f.pageId+":"+f.fileName):(f.spaceKey+":"+f.title+":"+f.postingDay+":"+f.fileName));if(g in c){h(c[g],"success");return}d.ajax({type:"GET",dataType:"json",data:f,url:b+"/pages/breadcrumb.action",error:e||function(){},success:function(j,k){if(!j||!j.breadcrumbs){e(j,k);return}var i=d.makeArray(j.breadcrumbs);while(i[0]&&j.type!="userinfo"&&/peopledirectory\.action$/.test(i[0].url)){i.shift()}if(j.type=="page"&&i[1]&&/pages\.action/.test(i[1].url)){i.splice(1,1)}i.type=j.type;c[g]=i;h(i,k)}})};AJS.MoveDialog.Breadcrumbs=function(h,f){var e=0;function g(l,k,j){h.renderBreadcrumbs(k);var i=l!=AJS.Meta.get("space-key")||a(k);if(i){j.clearErrors();d(j.moveButton).prop("disabled",false)}else{j.error("You cannot move a page to be underneath itself or its children.");d("li:last-child",h).addClass("warning")}}return{update:function(j,i){h.html(Confluence.Templates.MovePage.breadcrumbLoading());var k=e+=1;var l=function(){if(k!=e){AJS.debug("Breadcrumb response for ",j," is stale, ignoring.");return true}return false};(f||AJS.MoveDialog.getBreadcrumbs)(j,function(m,n){if(l()){return}if(n!="success"||!m){h.html(Confluence.Templates.MovePage.breadcrumbError());return}g(j.spaceKey,m,i)},function(m){if(l()){return}h.html(Confluence.Templates.MovePage.breadcrumbError());if(m.status==404){i.error("The specified page was not found.")}})}}};AJS.Breadcrumbs={};AJS.Breadcrumbs.getBreadcrumbs=function(f,h,e){if(!f.id){throw new Error("id is a required parameter in 'options'")}if(!f.type){throw new Error("type is a required parameter in 'options'")}var g=f.id+":"+f.type;if(g in c){h(c[g],"success");return}d.ajax({type:"GET",dataType:"json",data:f,url:Confluence.getContextPath()+AJS.REST.getBaseUrl()+"breadcrumb",error:e||function(){},success:function(j,k){if(!j||!j.breadcrumbs){e(j,k);return}var i=d.makeArray(j.breadcrumbs);while(i[0]&&j.type!="userinfo"&&/peopledirectory.action$/.test(i[0].url)){i.shift()}i.type=j.type;c[g]=i;h(i,k)}})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/js/page-move-dialog-location.js' */
jQuery.fn.movePageAutocomplete=function(d,c,b,a){var f=jQuery;var e=a;return f(this).quicksearch(d,null,{dropdownPostprocess:function(g){f("> ol.last",g).remove();if(!f("> ol",g).length){f(g).append(b)}f("> ol:last-child",g).addClass("last");f("a",g).attr("tabindex","-1")},dropdownPlacement:function(g){f(c).append(g)},ajsDropDownOptions:{selectionHandler:function(h,g){if(g){this.hide("selected");e(h,g);h.preventDefault()}}}})};jQuery.fn.movePageLocation=function(c){var f=jQuery;var b=f(this);var e=f("#new-space",b);var d=f("#new-space-key",b);var a=f("#new-parent-page",b);var g=function(){if(e.is(":visible")){if(e.val()==""){e.val(AJS.Meta.get("space-name"));d.val(AJS.Meta.get("space-key"))}c.clearErrors();c.select(d.val(),e.val(),a.val())}};a.blur(g).focus(function(){c.clearErrors();AJS.dropDown.current&&AJS.dropDown.current.hide()});e.blur(g).focus(function(){AJS.dropDown.current&&AJS.dropDown.current.hide()});e.movePageAutocomplete("/rest/quicknav/1/search?type=spacedesc&type=personalspacedesc",f(".new-space-dropdown",b),Confluence.Templates.MovePage.noMatchingSpaces(),function(j,i){var h=i.find("span").data("properties");d.val(h.spaceKey);e.val(AJS("span").html(h.name).text());a.val("");g();a.focus()});a.movePageAutocomplete(function(){return"/rest/quicknav/1/search?type=page&spaceKey="+d.val()},f(".new-parent-page-dropdown",b),Confluence.Templates.MovePage.noMatchingPages(),function(i,h){var j=AJS("span").html(h.find("span").data("properties").name).text();a.val(j);g();window.setTimeout(function(){c.moveButton.focus()},50)})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/js/page-move-dialog-search.js' */
jQuery.fn.movePageSearch=function(b){var h=jQuery;var c=h("#confluence-context-path").attr("content");var a=this;var e=h("input[type=button]",a);var g=h("input.search-query",a);var f=h(".search-space",a);var d=h(".search-results",a);h([f[0],g[0]]).keydown(function(i){if(i.which==13){e.click()}});h([g[0],d[0]]).keydown(function(j){function i(n){var l=h(".search-result",a);var m=h(".search-result.selected",a);var k=l.index(m)+n;if(k<0){k=l.length-1}if(k>=l.length){k=0}l.eq(k).click()}if(j.which==38){i(-1)}else{if(j.which==40){i(1)}}});e.click(function(){b.clearErrors();var i=g.val();if(i==""){d.empty();return}d.html(Confluence.Templates.MovePage.searchResultsLoading());h.ajax({type:"GET",dataType:"json",data:{queryString:i,where:f.val(),types:["spacedesc","personalspacedesc","page"]},url:c+"/json/search.action",error:function(){b.error("Failed to retrieve search results from the server.")},success:function(k,j){if(j!="success"){b.error("Failed to retrieve search results from the server.");return}var l={select:function(m,n){if(n.type=="page"){b.select(n.spaceKey,n.spaceName,n.title,n.id)}else{b.select(n.spaceKey,n.spaceName)}}};d.searchResultsGrid(i,k,h(b).extend(l),{noSearchResults:"There were no pages found containing \u003cb>{0}\u003c\/b>.",resultsCount:"Showing \u003cb>{0}\u003c\/b>-\u003cb>{1}\u003c\/b> of \u003cb>{2}\u003c\/b> pages containing \u003cb>{3}\u003c\/b>."})}})})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/js/page-move-dialog-history.js' */
jQuery.fn.movePageHistory=function(b){var e=jQuery;var c=e("#confluence-context-path").attr("content");var a=this;var d=e(".search-results",a);e(d).keydown(function(g){function f(k){var i=e(".search-result",a);var j=e(".search-result.selected",a);var h=i.index(j)+k;if(h<0){h=i.length-1}if(h>=i.length){h=0}i.eq(h).click()}if(g.which==38){f(-1)}else{if(g.which==40){f(1)}}});d.html(Confluence.Templates.MovePage.pageHistoryLoading());e.ajax({type:"GET",dataType:"json",data:{types:["spacedesc","personalspacedesc","page"]},url:c+"/json/history.action",error:function(){b.error(AJS.params.movePageDialogHistoryError)},success:function(g,f){if(f!="success"){b.error(AJS.params.movePageDialogHistoryError);return}if(!g.history||g.history.length==0){d.html("<div class='no-results'>"+"There were no recently viewed pages found."+"</div>");return}d.html(AJS.getTemplate("searchResultsGrid").toString());e.each(g.history,function(){var i=this;if(i.id==AJS.params.pageId){return}var h=AJS.$(AJS.renderTemplate("searchResultsGridRow",[i.title,c+i.url,i.type,i.spaceName,i.spaceKey,i.friendlyDate,i.date]));e(h).click(function(j){if(i.type=="page"){b.select(i.spaceKey,i.spaceName,i.title,i.id)}else{b.select(i.spaceKey,i.spaceName)}d.find(".selected").removeClass("selected");e(this).addClass("selected");return AJS.stopEvent(j)});e(h).hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")});d.find("table").append(h)});if(e(".search-result",d).length==0){d.html("<div class='no-results'>"+"There were no recently viewed pages found."+"</div>")}}})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/js/page-move-dialog-browse.js' */
jQuery.fn.movePageBrowse=function(m,j,b,l,d,f){var e=jQuery;var c=e("#confluence-context-path").attr("content");var a=this;var g=e(".tree",a);g.addClass("loading").html(Confluence.Templates.MovePage.panelLoading());var o,k=function(){g.removeClass("rendering").addClass("expanding");e("#parent-selection-tree .dialog-button-panel").remove();h(AJS.Meta.get("space-key"),d,function(s){if(s&&d!=""){var p=o.findNodeBy("text",d);if(p){p.$.find("> a").addClass("current-parent")}}var r=AJS.Meta.get("page-title");if(s&&r){var q=o.findNodeBy("text",r);if(q){q.makeUnclickable();if(r!=f){q.setText(f)}}}h(j,l,function(w){if(w){var v=o.findNodeBy("text",l);if(v){v.$.find("> a").addClass("highlighted");var t=v.$.position().top;var u=g.height();if(t<0||t>u){g.scrollTop(g.scrollTop()+t-u/3)}}}g.removeClass("expanding")})})};var i=function(p){p.preventDefault();e("a.highlighted",g).removeClass("highlighted");e(this).addClass("highlighted");j=e("#chosenSpaceKey").val();b=e("#chosenSpaceKey option:selected").text();l=e(this).hasClass("root-node")?"":e(this).find("span").text();m.select(j,b,l)};var n=function(){e("select#chosenSpaceKey").val(j).change(function(){var q=e(this).val();var p=e(this).find("option:selected").text();e("#tree-root-node-item a").text(p).toggleClass("highlighted",j==q&&l=="").toggleClass("current-parent",AJS.Meta.get("space-key")==q&&d=="");g.addClass("rendering");o=o.reload({initUrl:c+"/pages/children.action?spaceKey="+encodeURIComponent(q)+"&node=root"})});e("#tree-root-div").html(Confluence.Templates.MovePage.browsePanelSpace({linkText:b})).find("a").click(i).toggleClass("highlighted",l=="").toggleClass("current-parent",AJS.Meta.get("space-key")==j&&d=="")};var h=function(q,p,r){if(q!=e("#chosenSpaceKey").val()){r(false);return}AJS.MoveDialog.getBreadcrumbs({spaceKey:q,title:p},function(s){var t=s.slice(1);t[0]&&t[0].url.indexOf("collector/pages.action")!==-1&&t.shift();var u=e.map(t,function(v){return{text:v.title}});o.expandPath(u,function(){r(true)})},function(){m.error("Could not retrieve tree expansion information.");r(false)})};g.load(c+"/panels/browsepagelocation.action",{panelName:"browse",dialogMode:"view",spaceKey:j,parentPageString:l,pageId:AJS.params.pageId},function(){g.removeClass("loading").addClass("rendering");n();o=e("#parent-selection-tree").tree({url:c+"/pages/children.action",initUrl:c+"/pages/children.action?spaceKey="+encodeURIComponent(j)+"&node=root",parameters:["pageId","text"],undraggable:true,spinnerId:"move-page-dialog-spinner",nodeId:"pageId",click:i,onready:k,oninsert:function(){var p=this.$;if(p.parents("li:first").attr("unclickable")){this.makeUnclickable()}}});AJS.MoveDialog.tree=o})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/js/page-move-dialog.js' */
AJS.toInit(function(g){var h=840;var e=590;var f=71;Confluence.MovePageDialog=function(k){var p=AJS.Meta.get("page-title");k=g.extend({spaceKey:AJS.Meta.get("space-key"),spaceName:AJS.Meta.get("space-name"),pageTitle:p,parentPageTitle:AJS.Meta.get("parent-page-title"),title:AJS.format("Move Page \u2013 \u2018{0}\u2019",p),buttonName:"Move",openedPanel:"Advanced",moveHandler:function(I){AJS.debug("No move handler defined. Closing dialog.");I.remove()},cancelHandler:function(I){I.remove();return false}},k);var j=k.spaceKey;var A=k.spaceName;var F=k.parentPageTitle;var n="";var q="";var o=function(I,J){n=I;q=J};var G=AJS.ConfluenceDialog({width:h,height:e,id:"move-page-dialog"});var E={spaceKey:j,spaceName:A,parentPageTitle:F,canMoveBetweenSpaces:AJS.Meta.get("page-id")==0||AJS.Meta.getBoolean("can-remove-page")};G.addHeader(k.title);G.addPanel("Advanced",Confluence.Templates.MovePage.movePageAdvancedPanel(E),"location-panel","location-panel-id");G.addPanel("Search",Confluence.Templates.MovePage.movePageSearchPanel(E),"search-panel","search-panel-id");G.addPanel("Recently Viewed",Confluence.Templates.MovePage.historyPanel({pageTitle:AJS.Meta.get("page-title")}),"history-panel","history-panel-id");G.addPanel("Browse",Confluence.Templates.MovePage.browsePanel({pageTitle:AJS.Meta.get("page-title")}),"browse-panel","browse-panel-id");G.get('#"'+"Advanced"+'"')[0].onselect=function(){g("#new-space-key").val(j);g("#new-space").val(A);g("#new-parent-page").val(F).select()};G.get('#"'+"Search"+'"')[0].onselect=function(){g("#move-page-dialog .search-panel .search-results .selected").removeClass("selected");g("#move-page-dialog input.search-query").focus()};G.get('#"'+"Recently Viewed"+'"')[0].onselect=function(){g(".history-panel",B).movePageHistory(u)};G.get('#"'+"Browse"+'"')[0].onselect=function(){AJS.debug("browse: "+[j,A,F].join());g(".browse-panel",B).movePageBrowse(u,j,A,F,t,k.pageTitle)};var z=function(J){J.nextPage();var I=g("#move-page-dialog");g(".ordering-panel",I).movePageOrdering(j,F,k.pageTitle,o)};var x=function(J){var L=g("#new-space:visible").val();var K=g("#new-space-key").val();var I=g("#new-parent-page:visible").val();if(L&&(L!=A||K!=j||I!=F)){AJS.MoveDialog.getBreadcrumbs({spaceKey:K,pageTitle:I},function(){Confluence.PageLocation.set({spaceKey:K,spaceName:L,parentPageTitle:I});k.moveHandler(J,K,L,I,n,q,i)},function(M){g("#new-parent-breadcrumbs").html(Confluence.Templates.MovePage.breadcrumbError());if(M.status==404){u.error("The specified page was not found.")}})}else{Confluence.PageLocation.set({spaceKey:j,spaceName:A,parentPageTitle:F});k.moveHandler(J,j,A,F,n,q,i)}};var H=function(I){if(g("#reorderCheck")[0].checked){z(I)}else{x(I)}};G.addButton(k.buttonName,H,"move-button");G.addCancel("Cancel",k.cancelHandler);G.popup.element.find(".dialog-title").prepend(Confluence.Templates.MovePage.helpLink());G.addPage().addHeader(k.title).addPanel("Page Ordering",Confluence.Templates.MovePage.orderingPagePanel(),"ordering-panel","ordering-panel-id").addLink("Back",function(I){I.prevPage()},"dialog-back-link").addButton("Reorder",x,"reorder-button").addCancel("Cancel",k.cancelHandler);var C=G.get("button#"+k.buttonName)[0].item;g("button.move-button").before(Confluence.Templates.MovePage.reorderCheckbox());G.gotoPage(0);var B=g("#move-page-dialog");var y=B.find(".dialog-page-menu");var s=B.find(".dialog-page-body");var m=g(y[0]);var w=g(s[0]);w.height(m.height());w.width("75%");w.find(".dialog-panel-body").height(m.height()-f);var r=g(y[1]);var D=g(s[1]);r.width("0");D.width("100%");G.show();g(".location-panel .location-info",B).appendTo(g(".dialog-page-body:first",B));var l=new AJS.MoveDialog.Breadcrumbs(g("#new-parent-breadcrumbs"));function i(M){var L=g("#move-errors");if(L.length>0){L.remove()}L=g(Confluence.Templates.MovePage.errorMessage());var J=B.find(".browse-controls:visible");if(!J.length){J=B.find(".dialog-panel-body:visible")}J.append(L);if(!M||M.length==0){g(C).prop("disabled",false);return}var I="The following error(s) occurred:";I+="<ul>\n<li>";if(g.isArray(M)){I+=M.join("</li>\n<li>")}else{I+=M}I+="</li>\n</ul>";var K=aui.message.warning({content:I});L.html(K);L.removeClass("hidden");G.gotoPage(0)}var u={moveButton:C,clearErrors:function(){i([])},error:i,select:function(K,J,I){AJS.debug("select: "+[K,J,I].join());j=K;A=J;F=I||"";g(C).prop("disabled",true);l.update({spaceKey:j,title:F},u)}};G.overrideLastTab();G.get('#"'+k.openedPanel+'"').select();var t=AJS.Meta.get("parent-page-title")||AJS.Meta.get("from-page-title");var v=new AJS.MoveDialog.Breadcrumbs(g("#current-parent-breadcrumbs"));v.update({spaceKey:AJS.Meta.get("space-key"),title:t},u);g(".location-panel",B).movePageLocation(u);g(".search-panel",B).movePageSearch(u);g(".history-panel",B).movePageHistory(u);g("#new-parent-page").select();if(k.hint){G.addHelpText(k.hint.template||k.hint.text,k.hint.arguments)}return B};var d=function(k,j,l,i){var m={pageId:AJS.params.pageId,spaceKey:k};if(l){m.position=i;m.targetId=l}else{if(j!=""){m.targetTitle=j;m.position="append"}else{m.position="topLevel"}}return m};function a(m,o,i,p,r,j,l){m=m.popup.element;m.addClass("waiting");g("button",m).prop("disabled",true);var k=g("<div class='throbber'></div>");m.append(k);var q=Raphael.spinner(k[0],100,"#666");function n(s){l(s);m.removeClass("waiting");q();g("button",m).prop("disabled",false)}AJS.safe.ajax({url:contextPath+"/pages/movepage.action",type:"GET",dataType:"json",data:new d(o,p,r,j),error:function(){n("Move failed. There was a problem contacting the server.")},success:function(s){var t=[].concat(s.validationErrors||[]).concat(s.actionErrors||[]).concat(s.errorMessage||[]);if(t.length>0){n(t);return}window.location.href=contextPath+s.page.url+(s.page.url.indexOf("?")>=0?"&":"?")+"moved=true"}})}g("#action-move-page-dialog-link").click(function(i){i.preventDefault();if(g("#move-page-dialog").length>0){g("#move-page-dialog, body > .shadow, body > .aui-blanket").remove()}new Confluence.MovePageDialog({moveHandler:a});return false});var c;g("#rte-button-location").click(function(i){i.preventDefault();if(g("#move-page-dialog").length>0){g("#move-page-dialog, body > .shadow, body > .aui-blanket").remove()}new Confluence.MovePageDialog({spaceName:c,spaceKey:g("#newSpaceKey").val(),pageTitle:g("#content-title").val(),parentPageTitle:g("#parentPageString").val(),buttonName:"Move",title:"Set Page Location",moveHandler:function(n,k,o,p,m,l,j){c=o;g("#newSpaceKey").val(k);g("#parentPageString").val(p);if(p!=""){g("#position").val("append")}else{g("#position").val("topLevel")}if(m){g("#targetId").val(m);g("#position").val(l)}n.remove()}});return false});var b=null;Confluence.PageLocation={get:function(){if(b){return b}return{spaceName:AJS.Meta.get("space-name"),spaceKey:AJS.Meta.get("space-key"),parentPageTitle:AJS.Meta.get("parent-page-title")}},set:function(i){b=i}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/js/blogpost-move-dialog.js' */
AJS.toInit(function(c){var d=400;var b=250;Confluence.MoveBlogPostDialog=function(g){var i=AJS.Meta.get("page-title");g=c.extend({spaceKey:AJS.Meta.get("space-key"),spaceName:AJS.Meta.get("space-name"),title:"Move to",buttonName:"Move",moveHandler:function(j){AJS.debug("No move handler defined. Closing dialog.");j.remove()},cancelHandler:function(j){j.remove();return false}},g);var h=AJS.ConfluenceDialog({width:d,height:b,id:"move-blogpost-dialog"});h.addHeader(g.title);h.addPanel("move.blogpost.dialog.panel.title",Confluence.Templates.MoveBlogPost.dialogPanel(),"move-blogpost-dialog-panel","move-blogpost-dialog-panel-id");c("#new-space").auiSelect2(Confluence.UI.Components.SpacePicker.build());var e=function(k){var j=c("#new-space").val();g.moveHandler(k,j,f)};function f(j){c("#move-blogpost-dialog .move-errors").empty();AJS.messages.error("#move-blogpost-dialog .move-errors",{body:j,closeable:false})}h.addButton(g.buttonName,e,"move-button");h.addCancel("Cancel",g.cancelHandler);h.show();return h};function a(j,f,g){j=j.popup.element;j.addClass("waiting");c("button",j).prop("disabled",true);var k=c("<div class='throbber'></div>");j.append(k);var i=Raphael.spinner(k[0],100,"#666");function h(l){g(l);j.removeClass("waiting");i();c("button",j).prop("disabled",false)}function e(l){AJS.trigger("analyticsEvent",{name:l,data:{newSpaceKey:f,oldSpaceKey:AJS.params.spaceKey,blogPostId:AJS.params.pageId}})}if(f===""){h("Please select a space");return}c.ajax({url:contextPath+"/pages/moveblogpost.action",type:"GET",dataType:"json",data:{blogPostId:AJS.params.pageId,spaceKey:f},error:function(){h("Move blog post failed");e("moveblogpost.ajaxError")},success:function(l){var m=[].concat(l.validationErrors||[]).concat(l.actionErrors||[]).concat(l.errorMessage||[]);if(m.length>0){h(m[0]);e("moveblogpost.serverValidationError");return}e("moveblogpost.success");window.location.href=contextPath+l.blogPost.url+(l.blogPost.url.indexOf("?")>=0?"&":"?")+"moved=true"}})}c("#action-move-blogpost-dialog-link").click(function(f){f.preventDefault();if(c("#move-blogpost-dialog").length>0){c("#move-blogpost-dialog, body > .shadow, body > .aui-blanket").remove()}new Confluence.MoveBlogPostDialog({moveHandler:a});return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:page-move-resources', location = '/includes/soy/blogpost-move-dialog.soy' */
// This file was automatically generated from blogpost-move-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.MoveBlogPost == 'undefined') { Confluence.Templates.MoveBlogPost = {}; }


Confluence.Templates.MoveBlogPost.dialogPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="new-space-value"><input type="hidden" id="new-space" style="width: 100%"/></div><div class="move-errors"></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:animation', location = '/includes/js/animation.js' */
var AJS=AJS||{};AJS.animation={running:[],queue:[],timer:null,duration:300,period:20,add:function(a){this.queue.push(a)},start:function(){if(this.timer!=null){return}this.running=this.queue;this.queue=[];jQuery.each(this.running,function(){if(this.onStart){this.onStart()}});var c=this;var b=new Date().getTime();var a=b+this.duration;this.timer=setInterval(function(){var d=new Date().getTime();var e=(d-b)/(a-b);if(e<=1){c.animate(e)}if(e>=1&&c.timer!=null){c.finish()}},this.period);return this.timer},finish:function(){clearInterval(this.timer);jQuery.each(this.running,function(){if(this.onFinish){this.onFinish()}});this.running=[];this.timer=null;if(this.queue.length>0){this.start()}},animate:function(a){jQuery.each(this.running,function(){if(this.animate){this.animate(AJS.animation.interpolate(a,this.start,this.end,this.reverse))}})},interpolate:function(d,c,a,b){if(typeof c!="undefined"&&typeof a!="undefined"){if(b){return a+d*(c-a)}else{return c+d*(a-c)}}return d},combine:function(a){return{animations:a,append:function(b){this.animations.push(b);return this},onStart:function(){jQuery.each(this.animations,function(){if(this.onStart){this.onStart()}})},onFinish:function(){jQuery.each(this.animations,function(){if(this.onFinish){this.onFinish()}})},animate:function(b){jQuery.each(this.animations,function(){if(this.animate){this.animate(AJS.animation.interpolate(b,this.start,this.end,this.reverse))}})}}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:breadcrumbs', location = '/includes/js/breadcrumbs.js' */
AJS.toInit(function(a){a("#ellipsis").live("click",function(){try{a("#breadcrumbs .hidden-crumb").removeClass("hidden-crumb");a(this).addClass("hidden-crumb");AJS.trigger("breadcrumbs.expanded")}catch(b){AJS.log(b)}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:contentnamesearch', location = '/includes/js/contentnamesearch.js' */
Confluence.QuickNav=(function(c){var b=[];var a;return{addDropDownPostProcess:function(d){if(typeof d!=="undefined"){b.push(d)}else{AJS.log("WARN: Attempted to add a dropdown post-process function that was undefined.")}},setMakeParams:function(d){a=d},init:function(e,d){e.quicksearch("/rest/quicknav/1/search",null,{dropdownPlacement:d,dropdownPostprocess:function(f){c.each(b,function(h,g){g&&g(f)})},makeParams:function(f){if(a){return a(f)}else{return{query:f}}},ajsDropDownOptions:{className:"quick-search-dropdown"}})}}})(AJS.$);AJS.toInit(function(){var h=function(){AJS.$("#quick-search").on("keydown",function(m){var k=AJS.dropDown.current&&AJS.dropDown.current.getFocusIndex()!=-1;var n=m.which===13&&(m.metaKey||m.ctrlKey);if(n&&!k){var l=AJS.$(this);l.attr("target","_blank");l.submit();l.attr("target","")}})};var e=function(){AJS.$("#quick-search").on("click","div.quick-search-dropdown li",function(q){var l=AJS.$(this);var p=AJS.$(q.target);var n=!(p.is("a")&&(p.parent().children("a")).index(p)===1)||(q.originalEvent!==undefined);if(n){var m=l.children("a:first").attr("class");var k=l.index("div.quick-search-dropdown li");var o={name:"quicknav-click-"+m,data:{index:k}};AJS.trigger("analytics",o)}});AJS.$("#quick-search").on("submit",function(){var l=AJS.$("div.quick-search-dropdown li").length;var k={name:"quicknav-hit-enter",data:{results:l}};AJS.trigger("analytics",k)})};var f=function(){var k=AJS.$("#quick-search-query");AJS.$("#quick-search").on({"quick-search-loading-start":function(){k.addClass("loading")},"quick-search-loading-stop":function(){k.removeClass("loading")}})};var g=function(k){return function(l){k.closest("form").find(".quick-nav-drop-down").append(l)}};var b=function(k){AJS.$("a",k).each(function(){var n=AJS.$(this);var l=n.find("span");var m=AJS.dropDown.getAdditionalPropertyValue(l,"spaceName");if(m&&!n.is(".content-type-spacedesc")){n.after(n.clone().attr("class","space-name").html(m));n.parent().addClass("with-space-name")}})};var j=AJS.$("#quick-search-query"),c=AJS.$("#space-blog-quick-search-query"),d=AJS.$("#confluence-space-key");var a=g(j);var i=AJS.defaultIfUndefined("Atlassian.SearchableApps.QuickNav",{defaultValue:Confluence.QuickNav});i.init(j,a);i.addDropDownPostProcess(b);if(c.length&&d.length){c.quicksearch("/rest/quicknav/1/search?type=blogpost&spaceKey="+AJS("i").html(d.attr("content")).text(),null,{dropdownPlacement:g(c)})}e();f();h()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:userlink', location = '/includes/js/userlink.js' */
(function(a){AJS.contentHover=function(j,i,d,f,m){var b=a.extend(false,AJS.contentHover.opts,m);var h,l,c=a("#content-hover-"+i);if(!c.length){a(b.container).append(a('<div id="content-hover-'+i+'" class="ajs-content-hover"><div class="contents"></div></div>'));c=a("#content-hover-"+i);h=c.find(".contents");h.css("width",b.width+"px").mouseover(function(){clearTimeout(e.hideDelayTimer);c.unbind("mouseover")}).mouseout(function(){g()})}else{h=c.find(".contents")}var e=c[0];var k=function(){if(c.is(":visible")){return}e.showTimer=setTimeout(function(){if(!e.contentLoaded||!e.shouldShow){return}e.beingShown=true;var p=a(window),n=l.x-3,r=l.y+15;if(n+b.width+30>p.width()){c.css({right:"20px",left:"auto"})}else{c.css({left:n+"px",right:"auto"})}var o=(window.pageYOffset||document.documentElement.scrollTop)+p.height();if((r+c.height())>o){r=o-c.height()-5;c.mouseover(function(){clearTimeout(e.hideDelayTimer)}).mouseout(function(){g()})}c.css({top:r+"px"});var q=a("#content-hover-shadow").appendTo(c).show();c.fadeIn(b.fadeTime,function(){e.beingShown=false});q.css({width:h.outerWidth()+32+"px",height:h.outerHeight()+25+"px"});a(".b",q).css("width",h.outerWidth()-26+"px");a(".l, .r",q).css("height",h.outerHeight()-21+"px")},b.showDelay)};var g=function(){e.beingShown=false;e.shouldShow=false;clearTimeout(e.hideDelayTimer);clearTimeout(e.showTimer);clearTimeout(e.loadTimer);e.contentLoading=false;e.shouldLoadContent=false;e.hideDelayTimer=setTimeout(function(){c.fadeOut(b.fadeTime)},b.hideDelay)};a(j).mousemove(function(n){l={x:n.pageX,y:n.pageY};if(!e.beingShown){clearTimeout(e.showTimer)}e.shouldShow=true;if(!e.contentLoaded){if(e.contentLoading){if(e.shouldLoadContent){var o=(l.x-e.initialMousePosition.x)*(l.x-e.initialMousePosition.x)+(l.y-e.initialMousePosition.y)*(l.y-e.initialMousePosition.y);if(o>(b.mouseMoveThreshold*b.mouseMoveThreshold)){e.contentLoading=false;e.shouldLoadContent=false;clearTimeout(e.loadTimer);return}}}else{e.initialMousePosition=l;e.shouldLoadContent=true;e.contentLoading=true;e.loadTimer=setTimeout(function(){if(!e.shouldLoadContent){return}h.load(d,function(){e.contentLoaded=true;e.contentLoading=false;f.call(c,i);k()})},b.loadDelay)}}clearTimeout(e.hideDelayTimer);if(!e.beingShown){k()}}).mouseout(function(){g()});h.click(function(n){n.stopPropagation()});a("body").click(function(){e.beingShown=false;clearTimeout(e.hideDelayTimer);clearTimeout(e.showTimer);c.hide()});return c};AJS.contentHover.opts={fadeTime:100,hideDelay:500,showDelay:700,loadDelay:50,width:300,mouseMoveThreshold:10,container:"body"};AJS.toInit(function(){a("body").append(a('<div id="content-hover-shadow"><div class="tl"></div><div class="tr"></div><div class="l"></div><div class="r"></div><div class="bl"></div><div class="br"></div><div class="b"></div></div>'));a("#content-hover-shadow").hide()})})(jQuery);if(typeof AJS.followCallbacks=="undefined"){AJS.followCallbacks=[]}if(typeof AJS.favouriteCallbacks=="undefined"){AJS.favouriteCallbacks=[]}AJS.toInit(function(a){a(self).bind("hover-user.follow",function(f,d){for(var b=0,c=AJS.followCallbacks.length;b<c;b++){AJS.followCallbacks[b](d.username)}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.userstatus:userstatus-resources', location = '/includes/js/userstatus.js' */
AJS.toInit(function(e){var c,f=140;function b(){var n="idontthinksohal";var k=new AJS.Dialog(650,n,"update-user-status-dialog");var m=k.popup.element;var l=e(Confluence.Templates.UserStatus.dialogContent({maxChars:f}));k.addHeader("What are you working on?");k.addPanel("Set Status",l);k.addButton("Update",i,"status-update-button");k.addCancel("Cancel",function(o){o.hide();return false});k.setError=function(o){e(".error-message",m).html(o)};return k}function h(l){var k;if(!l){k="You must enter a status."}else{if(!e.trim(l)){k="Whitespace is cool and all, but you might want to add a message in there, too."}else{if(l.length>f){k=AJS.format("The status message is too long. Status messages must be no longer than {0} characters.",f)}}}if(k){c.setError(k)}return !k}function d(k){e(".current-user-latest-status .status-text").html(k.text);e(".current-user-latest-status a[id^=view]").each(function(){var m=e(this),l=m.attr("href");m.attr("href",l.replace(/\d+$/,k.id)).text(k.friendlyDate).attr("title",new Date(k.date).toLocaleString())})}function j(){e.getJSON(Confluence.getContextPath()+"/status/current.action",function(k){if(k.errorMessage){c.setError(k.errorMessage)}else{d(k)}})}var i=function(){var n=c.popup.element,q=e("#status-text",n),l=e(".status-update-button",n),p=q.val(),k,o;function m(){q.blur();q.prop("disabled",true).prop("readonly",true);l.prop("disabled",true);return function(){try{q.focus()}catch(r){}q.prop("disabled",false).prop("readonly",false);l.prop("disabled",false)}}k=m();if(!h(p)){k();return false}o=AJS.safe.ajax({url:Confluence.getContextPath()+"/status/update.action",type:"POST",dataType:"json",data:{text:p}});o.done(k).fail(k);o.done(function(r){if(r.errorMessage){c.setError(r.errorMessage)}else{d(r);q.val("");n.fadeOut(200,function(){c.hide()})}});o.fail(function(t,s,r){AJS.log("Error updating status: "+s);AJS.log(r);c.setError("There was an error - "+r)});return o.promise()};var a=function(k){var m=k.popup.element,o=e("#status-text",m),n=e(".chars-left",m),l=e(".status-update-button",m);o.keydown(function(p){if(p.keyCode==13){i()}}).bind("blur focus change "+(!e.browser.msie?"paste input":"keyup"),function(){var q=e(this).val(),p=f-q.length;l.prop("disabled",!q.length);n.text(Math.abs(p)).toggleClass("close-to-limit",p<20).toggleClass("over-limit",p<0)});e("form",m).submit(function(p){p.preventDefault();i()})};var g="#create-user-status-link";e(g).click(function(l){var k=e(this).parents(".ajs-drop-down")[0];k&&k.hide();if(typeof c=="undefined"){c=b();a(c)}j();c.setError("");c.show();e("#update-user-status-dialog #status-text").prop("readonly",false).prop("disabled",false).focus();return AJS.stopEvent(l)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.userstatus:userstatus-resources', location = '/includes/soy/userstatus-dialog.soy' */
// This file was automatically generated from userstatus-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.UserStatus == 'undefined') { Confluence.Templates.UserStatus = {}; }


Confluence.Templates.UserStatus.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div><span class=\'error-message\'></span></div><form class="aui update-status"><fieldset><label for="status-text" class="assistive">', soy.$$escapeHtml(AJS.format("Enter your status ({0} character limit)",opt_data.maxChars)), '</label><textarea name="status-text" id="status-text"></textarea><span class="chars-left">', soy.$$escapeHtml(opt_data.maxChars), '</span></fieldset><p id="dialog-current-status" class="current-user-latest-status"><strong>', soy.$$escapeHtml("Last update:"), '</strong> <span class="status-text"></span></p></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.gadgets:gadget-directory-resources', location = 'script/gadget-directory-dialog.js' */
var GADGET_DIRECTORY = null;

GadgetDirectory = function() {};
GadgetDirectory.prototype = {
    dlg: null,
    gadget_list: null,

    showDialog: function() {
        //Create the dialog
        this.dlg.addHeader(GADGET_DIRECTORY.translations.header);
        this.dlg.addCancel(GADGET_DIRECTORY.translations.closeButton, function(dlg) {dlg.hide(); return false;});

        AJS.$(".throbber").hide();
        this.dlg.getCurrentPanel().html(this.buildPanel());
    },

    buildPanel: function() {
        return AJS.$("<div/>").addClass("directory-panel").append(this.buildDirectoryHelp()).append(this.buildDirectoryList());
    },

    buildDirectoryHelp: function() {
        var helpPanel = AJS.$("<div/>").addClass("directory-help");
        AJS.$("<h3/>").addClass("directory-help-title").html(GADGET_DIRECTORY.translations.helpTitle1).appendTo(helpPanel);
        AJS.$("<p/>").addClass("directory-help-text").html(GADGET_DIRECTORY.translations.helpBody1).appendTo(helpPanel);
        AJS.$("<h3/>").addClass("directory-help-title").html(GADGET_DIRECTORY.translations.helpTitle2).appendTo(helpPanel);
        AJS.$("<p/>").addClass("directory-help-text").html(GADGET_DIRECTORY.translations.helpBody2).appendTo(helpPanel);
        AJS.$("<p/>").html(GADGET_DIRECTORY.translations.moreInfo).appendTo(helpPanel);
        return helpPanel;
    },

    buildDirectoryList: function() {
        if (!GADGET_DIRECTORY.gadget_list)
            return AJS.$("<div/>").addClass("no-gadgets").html("No gadgets found.");

        var directory_list = AJS.$("<ol/>").addClass("macro-list");
        AJS.$.each(GADGET_DIRECTORY.gadget_list, function(i, gadget_item) {
            var directory_item = AJS.$("<li/>").attr("id", "macro-" + gadget_item.title.split(' ').join('')).addClass("macro-list-item");

            var title = AJS.$("<h3/>").addClass("macro-title").html(gadget_item.title);

            var gadgetUrl = AJS.$("<p/>").append(AJS.$("<span/>").append(AJS.$("<a/>").addClass("macro-uri").attr("href", gadget_item.url).attr("target", "_blank").attr("title", gadget_item.url).html(GADGET_DIRECTORY.translations.gadgetUrl)));
            var author = AJS.$("<p/>").addClass("macro-author");
            if (gadget_item.author) {
                author.html("By " + gadget_item.author);
            } else {
                author.html(GADGET_DIRECTORY.translations.noAuthor);
            }
            var description = AJS.$("<p/>").addClass("macro-desc");
            if (gadget_item.description) {
                description.html(gadget_item.description);
            } else {
                description.html(GADGET_DIRECTORY.translations.noDescription);
            }

            if (gadget_item.thumbnail) {
                var thumbnail = AJS.$("<img/>").addClass("macro-icon").attr({
                       height: 60,
                       width: 120,
                       alt: "",
                       src: gadget_item.thumbnail
                   });
                directory_item.append(thumbnail);
            }
            directory_item.append(title);
            directory_item.append(gadgetUrl);
            directory_item.append(author);
            directory_item.append(description);
            
            directory_list.append(directory_item);
        });

        return directory_list;
    },

    buildThrobber: function() {
        var throbber = AJS.$("<div/>").addClass("throbber");
        Raphael.spinner(throbber[0], 60, "#666");
        return throbber;
    },

    loadDirectory: function() {
        AJS.$(document).keyup(function (e) {
            if (e.keyCode == 27)  {
                GADGET_DIRECTORY.dlg.hide();
                AJS.$(document).unbind("keyup", arguments.callee);
                return AJS.stopEvent(e);
            }
        });
        if (this.dlg) {
            this.dlg.show();
        } else {
            this.dlg = new AJS.Dialog(865, 530, "gadget-directory-dialog");
            this.dlg.addPanel("", "panel1");
            this.dlg.getCurrentPanel().html(this.buildThrobber());
            this.dlg.getCurrentPanel().setPadding(0);
            this.dlg.getCurrentPanel().body.css("overflow", "hidden");
            this.dlg.show();

            AJS.$.ajax({
                    url: contextPath + "/rest/gadget/1.0/published/gadgetsdirectory",
                    type: "GET",
                    dataType: "json",
                    success: function(data) {
                        if (data.directoryList)
                            GADGET_DIRECTORY.gadget_list = data.directoryList;
                        GADGET_DIRECTORY.translations = data.translations;
                        GADGET_DIRECTORY.showDialog();
                    },
                    error: function() {
                        GADGET_DIRECTORY.dlg.getCurrentPanel().html(AJS.$("<div/>").addClass("loading-error").html("An error has occurred while trying to load the gadget directory."));
                    },
                    timeout: 12000
            });
        }
    }
};


AJS.toInit(function ($)
{
    GADGET_DIRECTORY = new GadgetDirectory();
    AJS.$("#gadget-directory-link").click(function (e) {
        // remove "interactive" class from menu item. with "interactive" class, the menu does not close when clicking
        // on a menu item. "interactive" class added by help-analytics.js from atlassian-nav-links-plugin-3.2.12
        $(this).removeClass("interactive");
        GADGET_DIRECTORY.loadDirectory();
        e.preventDefault();
    });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:atlassian-effects', location = '/includes/js/effects.js' */
function placeFocus(){if(document.location.hash||document.getElementById("editpageform")||document.getElementById("createpageform")||document.getElementById("upload-attachments")||document.getElementById("addcomment")){return}var l="";var a=window.location.search.substring(1);var f=a.split("&");for(var d=0;d<f.length;d++){var m=f[d].split("=")[0];var h=f[d].split("=")[1];if(m=="autofocus"&&(h!=null&&h.length>0)){l="'"+h+"'"}}var c=false;for(var d=0;d<document.forms.length;d++){var k=document.forms[d].elements;if(document.forms[d].id!="quick-search"&&document.forms[d].id!="space-blog-quick-search"&&document.forms[d].name!="inlinecommentform"){for(var b=0;b<k.length;b++){if((k[b].type=="text"||k[b].type=="password"||k[b].type=="textarea")&&!k[b].disabled&&!(k[b].style.display=="none")){try{if(l!=null&&l.length>0){if(k[b].id==l){k[b].focus();c=true;break}}else{k[b].focus();c=true;break}}catch(g){}}}}if(c){break}}}function setCookie(b,g,i,f,h,j,e,a){var d=b+"="+escape(g);if(i){var c=new Date(i,f,h);d+="; expires="+c.toGMTString()}if(j){d+="; path="+escape(j)}else{d+="; path=/"}if(e){d+="; domain="+escape(e)}if(a){d+="; secure"}document.cookie=d}function getCookie(b){var a=document.cookie.match(b+"=(.*?)(;|$)");if(a){return(unescape(a[1]))}else{return null}}function highlight(a){new Effect.Highlight(a,{endcolor:"#f0f0f0"})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-select2', location = 'js-vendor/jquery/plugins/jquery.select2.js' */
(function(A){if(typeof A.fn.each2=="undefined"){A.extend(A.fn,{each2:function(E){var C=A([0]),D=-1,B=this.length;while(++D<B&&(C.context=C[0]=this[D])&&E.call(C[0],D,C)!==false){}return this}})}})(jQuery);(function(d,M){if(window.Select2!==M){return }var k,n,X,C,A,P,O={x:0,y:0},V,W,k={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(o){o=o.which?o.which:o;switch(o){case k.LEFT:case k.RIGHT:case k.UP:case k.DOWN:return true}return false},isControl:function(p){var o=p.which;switch(o){case k.SHIFT:case k.CTRL:case k.ALT:return true}if(p.metaKey){return true}return false},isFunctionKey:function(o){o=o.which?o.which:o;return o>=112&&o<=123}},b="<div class='select2-measure-scrollbar'></div>",D={"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z"};V=d(document);A=(function(){var o=1;return function(){return o++}}());function E(r){var p,q,o,s;if(!r||r.length<1){return r}p="";for(q=0,o=r.length;q<o;q++){s=r.charAt(q);p+=D[s]||s}return p}function Q(q,r){var p=0,o=r.length;for(;p<o;p=p+1){if(T(q,r[p])){return p}}return -1}function m(){var o=d(b);o.appendTo("body");var p={width:o.width()-o[0].clientWidth,height:o.height()-o[0].clientHeight};o.remove();return p}function T(p,o){if(p===o){return true}if(p===M||o===M){return false}if(p===null||o===null){return false}if(p.constructor===String){return p+""===o+""}if(o.constructor===String){return o+""===p+""}return false}function I(p,r){var s,q,o;if(p===null||p.length<1){return[]}s=p.split(r);for(q=0,o=s.length;q<o;q=q+1){s[q]=d.trim(s[q])}return s}function H(o){return o.outerWidth(false)-o.width()}function f(p){var o="keyup-change-value";p.on("keydown",function(){if(d.data(p,o)===M){d.data(p,o,p.val())}});p.on("keyup",function(){var q=d.data(p,o);if(q!==M&&p.val()!==q){d.removeData(p,o);p.trigger("keyup-change")}})}V.on("mousemove",function(o){O.x=o.pageX;O.y=o.pageY});function j(o){o.on("mousemove",function(q){var p=O;if(p===M||p.x!==q.pageX||p.y!==q.pageY){d(q.target).trigger("mousemove-filtered",q)}})}function K(r,p,o){o=o||M;var q;return function(){var s=arguments;window.clearTimeout(q);q=window.setTimeout(function(){p.apply(o,s)},r)}}function S(q){var o=false,p;return function(){if(o===false){p=q();o=true}return p}}function L(o,q){var p=K(o,function(r){q.trigger("scroll-debounced",r)});q.on("scroll",function(r){if(Q(r.target,q.get())>=0){p(r)}})}function i(o){if(o[0]===document.activeElement){return }window.setTimeout(function(){var q=o[0],r=o.val().length,p;o.focus();if(o.is(":visible")&&q===document.activeElement){if(q.setSelectionRange){q.setSelectionRange(r,r)}else{if(q.createTextRange){p=q.createTextRange();p.collapse(false);p.select()}}}},0)}function F(o){o=d(o)[0];var r=0;var p=0;if("selectionStart" in o){r=o.selectionStart;p=o.selectionEnd-r}else{if("selection" in document){o.focus();var q=document.selection.createRange();p=document.selection.createRange().text.length;q.moveStart("character",-o.value.length);r=q.text.length-p}}return{offset:r,length:p}}function a(o){o.preventDefault();o.stopPropagation()}function B(o){o.preventDefault();o.stopImmediatePropagation()}function N(p){if(!P){var o=p[0].currentStyle||window.getComputedStyle(p[0],null);P=d(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:o.fontSize,fontFamily:o.fontFamily,fontStyle:o.fontStyle,fontWeight:o.fontWeight,letterSpacing:o.letterSpacing,textTransform:o.textTransform,whiteSpace:"nowrap"});P.attr("class","select2-sizer");d("body").append(P)}P.text(p.val());return P.width()}function J(p,t,o){var r,s=[],q;r=p.attr("class");if(r){r=""+r;d(r.split(" ")).each2(function(){if(this.indexOf("select2-")===0){s.push(this)}})}r=t.attr("class");if(r){r=""+r;d(r.split(" ")).each2(function(){if(this.indexOf("select2-")!==0){q=o(this);if(q){s.push(q)}}})}p.attr("class",s.join(" "))}function U(t,s,q,o){var r=E(t.toUpperCase()).indexOf(E(s.toUpperCase())),p=s.length;if(r<0){q.push(o(t));return }q.push(o(t.substring(0,r)));q.push("<span class='select2-match'>");q.push(o(t.substring(r,r+p)));q.push("</span>");q.push(o(t.substring(r+p,t.length)))}function g(o){var p={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(o).replace(/[&<>"'\/\\]/g,function(q){return p[q]})}function e(p){var s,q=null,t=p.quietMillis||100,r=p.url,o=this;return function(u){window.clearTimeout(s);s=window.setTimeout(function(){var x=p.data,w=r,z=p.transport||d.fn.select2.ajaxDefaults.transport,v={type:p.type||"GET",cache:p.cache||false,jsonpCallback:p.jsonpCallback||M,dataType:p.dataType||"json"},y=d.extend({},d.fn.select2.ajaxDefaults.params,v);x=x?x.call(o,u.term,u.page,u.context):null;w=(typeof w==="function")?w.call(o,u.term,u.page,u.context):w;if(q){q.abort()}if(p.params){if(d.isFunction(p.params)){d.extend(y,p.params.call(o))}else{d.extend(y,p.params)}}d.extend(y,{url:w,dataType:p.dataType,data:x,success:function(AB){var AA=p.results(AB,u.page);u.callback(AA)}});q=z.call(o,y)},t)}}function h(p){var s=p,r,q,t=function(u){return""+u.text};if(d.isArray(s)){q=s;s={results:q}}if(d.isFunction(s)===false){q=s;s=function(){return q}}var o=s();if(o.text){t=o.text;if(!d.isFunction(t)){r=o.text;t=function(u){return u[r]}}}return function(w){var v=w.term,u={results:[]},x;if(v===""){w.callback(s());return }x=function(z,AB){var AA,y;z=z[0];if(z.children){AA={};for(y in z){if(z.hasOwnProperty(y)){AA[y]=z[y]}}AA.children=[];d(z.children).each2(function(AC,AD){x(AD,AA.children)});if(AA.children.length||w.matcher(v,t(AA),z)){AB.push(AA)}}else{if(w.matcher(v,t(z),z)){AB.push(z)}}};d(s().results).each2(function(z,y){x(y,u.results)});w.callback(u)}}function Z(p){var o=d.isFunction(p);return function(s){var r=s.term,q={results:[]};d(o?p():p).each(function(){var t=this.text!==M,u=t?this.text:this;if(r===""||s.matcher(r,u)){q.results.push(t?this:{id:this,text:this})}});s.callback(q)}}function Y(o,p){if(d.isFunction(o)){return true}if(!o){return false}throw new Error(p+" must be a function or a falsy value")}function c(o){return d.isFunction(o)?o():o}function R(o){var p=0;d.each(o,function(q,r){if(r.children){p+=R(r.children)}else{p++}});return p}function G(w,x,u,o){var p=w,y=false,r,v,s,q,t;if(!o.createSearchChoice||!o.tokenSeparators||o.tokenSeparators.length<1){return M}while(true){v=-1;for(s=0,q=o.tokenSeparators.length;s<q;s++){t=o.tokenSeparators[s];v=w.indexOf(t);if(v>=0){break}}if(v<0){break}r=w.substring(0,v);w=w.substring(v+t.length);if(r.length>0){r=o.createSearchChoice.call(this,r,x);if(r!==M&&r!==null&&o.id(r)!==M&&o.id(r)!==null){y=false;for(s=0,q=x.length;s<q;s++){if(T(o.id(r),o.id(x[s]))){y=true;break}}if(!y){u(r)}}}}if(p!==w){return w}}function l(o,p){var q=function(){};q.prototype=new o;q.prototype.constructor=q;q.prototype.parent=o.prototype;q.prototype=d.extend(q.prototype,p);return q}n=l(Object,{bind:function(p){var o=this;return function(){p.apply(o,arguments)}},init:function(s){var q,p,t=".select2-results";this.opts=s=this.prepareOpts(s);this.id=s.id;if(s.element.data("select2")!==M&&s.element.data("select2")!==null){s.element.data("select2").destroy()}this.container=this.createContainer();this.containerId="s2id_"+(s.element.attr("id")||"autogen"+A());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");this.container.attr("id",this.containerId);this.body=S(function(){return s.element.closest("body")});J(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.attr("style",s.element.attr("style"));this.container.css(c(s.containerCss));this.container.addClass(c(s.containerCssClass));this.elementTabIndex=this.opts.element.attr("tabindex");this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",a);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");J(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);this.dropdown.addClass(c(s.dropdownCssClass));this.dropdown.data("select2",this);this.dropdown.on("click",a);this.results=q=this.container.find(t);this.search=p=this.container.find("input.select2-input");this.queryCount=0;this.resultsPage=0;this.context=null;this.initContainer();this.container.on("click",a);j(this.results);this.dropdown.on("mousemove-filtered touchstart touchmove touchend",t,this.bind(this.highlightUnderEvent));L(80,this.results);this.dropdown.on("scroll-debounced",t,this.bind(this.loadMoreIfNeeded));d(this.container).on("change",".select2-input",function(u){u.stopPropagation()});d(this.dropdown).on("change",".select2-input",function(u){u.stopPropagation()});if(d.fn.mousewheel){q.mousewheel(function(x,y,v,u){var w=q.scrollTop();if(u>0&&w-u<=0){q.scrollTop(0);a(x)}else{if(u<0&&q.get(0).scrollHeight-q.scrollTop()+u<=q.height()){q.scrollTop(q.get(0).scrollHeight-q.height());a(x)}}})}f(p);p.on("keyup-change input paste",this.bind(this.updateResults));p.on("focus",function(){p.addClass("select2-focused")});p.on("blur",function(){p.removeClass("select2-focused")});this.dropdown.on("mouseup",t,this.bind(function(u){if(d(u.target).closest(".select2-result-selectable").length>0){this.highlightUnderEvent(u);this.selectHighlighted(u)}}));this.dropdown.on("click mouseup mousedown",function(u){u.stopPropagation()});if(d.isFunction(this.opts.initSelection)){this.initSelection();this.monitorSource()}if(s.maximumInputLength!==null){this.search.attr("maxlength",s.maximumInputLength)}var r=s.element.prop("disabled");if(r===M){r=false}this.enable(!r);var o=s.element.prop("readonly");if(o===M){o=false}this.readonly(o);W=W||m();this.autofocus=s.element.prop("autofocus");s.element.prop("autofocus",false);if(this.autofocus){this.focus()}this.nextSearchTerm=M},destroy:function(){var p=this.opts.element,o=p.data("select2");this.close();if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null}if(o!==M){o.container.remove();o.dropdown.remove();p.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||false);if(this.elementTabIndex){p.attr({tabindex:this.elementTabIndex})}else{p.removeAttr("tabindex")}p.show()}},optionToData:function(o){if(o.is("option")){return{id:o.prop("value"),text:o.text(),element:o.get(),css:o.attr("class"),disabled:o.prop("disabled"),locked:T(o.attr("locked"),"locked")||T(o.data("locked"),true)}}else{if(o.is("optgroup")){return{text:o.attr("label"),children:[],element:o.get(),css:o.attr("class")}}}},prepareOpts:function(t){var r,p,o,s,q=this;r=t.element;if(r.get(0).tagName.toLowerCase()==="select"){this.select=p=t.element}if(p){d.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in t){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}})}t=d.extend({},{populateResults:function(u,v,x){var w,y=this.opts.id;w=function(AF,z,AE){var AG,AB,AL,AI,AC,AK,AA,AJ,AH,AD;AF=t.sortResults(AF,z,x);for(AG=0,AB=AF.length;AG<AB;AG=AG+1){AL=AF[AG];AC=(AL.disabled===true);AI=(!AC)&&(y(AL)!==M);AK=AL.children&&AL.children.length>0;AA=d("<li></li>");AA.addClass("select2-results-dept-"+AE);AA.addClass("select2-result");AA.addClass(AI?"select2-result-selectable":"select2-result-unselectable");if(AC){AA.addClass("select2-disabled")}if(AK){AA.addClass("select2-result-with-children")}AA.addClass(q.opts.formatResultCssClass(AL));AJ=d(document.createElement("div"));AJ.addClass("select2-result-label");AD=t.formatResult(AL,AJ,x,q.opts.escapeMarkup);if(AD!==M){AJ.html(AD)}AA.append(AJ);if(AK){AH=d("<ul></ul>");AH.addClass("select2-result-sub");w(AL.children,AH,AE+1);AA.append(AH)}AA.data("select2-data",AL);z.append(AA)}};w(v,u,0)}},d.fn.select2.defaults,t);if(typeof (t.id)!=="function"){o=t.id;t.id=function(u){return u[o]}}if(d.isArray(t.element.data("select2Tags"))){if("tags" in t){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+t.element.attr("id")}t.tags=t.element.data("select2Tags")}if(p){t.query=this.bind(function(y){var x={results:[],more:false},w=y.term,v,u,z;z=function(AA,AC){var AB;if(AA.is("option")){if(y.matcher(w,AA.text(),AA)){AC.push(q.optionToData(AA))}}else{if(AA.is("optgroup")){AB=q.optionToData(AA);AA.children().each2(function(AD,AE){z(AE,AB.children)});if(AB.children.length>0){AC.push(AB)}}}};v=r.children();if(this.getPlaceholder()!==M&&v.length>0){u=this.getPlaceholderOption();if(u){v=v.not(u)}}v.each2(function(AA,AB){z(AB,x.results)});y.callback(x)});t.id=function(u){return u.id};t.formatResultCssClass=function(u){return u.css}}else{if(!("query" in t)){if("ajax" in t){s=t.element.data("ajax-url");if(s&&s.length>0){t.ajax.url=s}t.query=e.call(t.element,t.ajax)}else{if("data" in t){t.query=h(t.data)}else{if("tags" in t){t.query=Z(t.tags);if(t.createSearchChoice===M){t.createSearchChoice=function(u){return{id:d.trim(u),text:d.trim(u)}}}if(t.initSelection===M){t.initSelection=function(u,w){var v=[];d(I(u.val(),t.separator)).each(function(){var y={id:this,text:this},x=t.tags;if(d.isFunction(x)){x=x()}d(x).each(function(){if(T(this.id,y.id)){y=this;return false}});v.push(y)});w(v)}}}}}}}if(typeof (t.query)!=="function"){throw"query function not defined for Select2 "+t.element.attr("id")}return t},monitorSource:function(){var p=this.opts.element,q,o;p.on("change.select2",this.bind(function(r){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection()}}));q=this.bind(function(){var s=p.prop("disabled");if(s===M){s=false}this.enable(!s);var r=p.prop("readonly");if(r===M){r=false}this.readonly(r);J(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.addClass(c(this.opts.containerCssClass));J(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);this.dropdown.addClass(c(this.opts.dropdownCssClass))});p.on("propertychange.select2",q);if(this.mutationCallback===M){this.mutationCallback=function(r){r.forEach(q)}}o=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(o!==M){if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null}this.propertyObserver=new o(this.mutationCallback);this.propertyObserver.observe(p.get(0),{attributes:true,subtree:false})}},triggerSelect:function(p){var o=d.Event("select2-selecting",{val:this.id(p),object:p});this.opts.element.trigger(o);return !o.isDefaultPrevented()},triggerChange:function(o){o=o||{};o=d.extend({},o,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",true);this.opts.element.trigger(o);this.opts.element.data("select2-change-triggered",false);this.opts.element.click();if(this.opts.blurOnChange){this.opts.element.blur()}},isInterfaceEnabled:function(){return this.enabledInterface===true},enableInterface:function(){var o=this._enabled&&!this._readonly,p=!o;if(o===this.enabledInterface){return false}this.container.toggleClass("select2-container-disabled",p);this.close();this.enabledInterface=o;return true},enable:function(o){if(o===M){o=true}if(this._enabled===o){return }this._enabled=o;this.opts.element.prop("disabled",!o);this.enableInterface()},disable:function(){this.enable(false)},readonly:function(o){if(o===M){o=false}if(this._readonly===o){return false}this._readonly=o;this.opts.element.prop("readonly",o);this.enableInterface();return true},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var q=this.dropdown,t=this.container.offset(),AC=this.container.outerHeight(false),AD=this.container.outerWidth(false),y=q.outerHeight(false),AA=d(window),AH=AA.width(),w=AA.height(),p=AA.scrollLeft()+AH,AG=AA.scrollTop()+w,r=t.top+AC,AE=t.left,o=r+y<=AG,v=(t.top-y)>=this.body().scrollTop(),z=q.outerWidth(false),AJ=AE+z<=p,AI=q.hasClass("select2-drop-above"),u,AF,s,x,AB;if(AI){AF=true;if(!v&&o){s=true;AF=false}}else{AF=false;if(!o&&v){s=true;AF=true}}if(s){q.hide();t=this.container.offset();AC=this.container.outerHeight(false);AD=this.container.outerWidth(false);y=q.outerHeight(false);p=AA.scrollLeft()+AH;AG=AA.scrollTop()+w;r=t.top+AC;AE=t.left;z=q.outerWidth(false);AJ=AE+z<=p;q.show()}if(this.opts.dropdownAutoWidth){AB=d(".select2-results",q)[0];q.addClass("select2-drop-auto-width");q.css("width","");z=q.outerWidth(false)+(AB.scrollHeight===AB.clientHeight?0:W.width);z>AD?AD=z:z=AD;AJ=AE+z<=p}else{this.container.removeClass("select2-drop-auto-width")}if(this.body().css("position")!=="static"){u=this.body().offset();r-=u.top;AE-=u.left}if(!AJ){AE=t.left+AD-z}x={left:AE,width:AD};if(AF){x.bottom=w-t.top;x.top="auto";this.container.addClass("select2-drop-above");q.addClass("select2-drop-above")}else{x.top=r;x.bottom="auto";this.container.removeClass("select2-drop-above");q.removeClass("select2-drop-above")}x=d.extend(x,c(this.opts.dropdownCss));q.css(x)},shouldOpen:function(){var o;if(this.opened()){return false}if(this._enabled===false||this._readonly===true){return false}o=d.Event("select2-opening");this.opts.element.trigger(o);return !o.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen()){return false}this.opening();return true},opening:function(){var t=this.containerId,o="scroll."+t,r="resize."+t,q="orientationchange."+t,p;this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.clearDropdownAlignmentPreference();if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body())}p=d("#select2-drop-mask");if(p.length==0){p=d(document.createElement("div"));p.attr("id","select2-drop-mask").attr("class","select2-drop-mask");p.hide();p.appendTo(this.body());p.on("mousedown touchstart click",function(v){var w=d("#select2-drop"),u;if(w.length>0){u=w.data("select2");if(u.opts.selectOnBlur){u.selectHighlighted({noFocus:true})}u.close({focus:true});v.preventDefault();v.stopPropagation()}})}if(this.dropdown.prev()[0]!==p[0]){this.dropdown.before(p)}d("#select2-drop").removeAttr("id");this.dropdown.attr("id","select2-drop");p.show();this.positionDropdown();this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");var s=this;this.container.parents().add(window).each(function(){d(this).on(r+" "+o+" "+q,function(u){s.positionDropdown()})})},close:function(){if(!this.opened()){return }var r=this.containerId,o="scroll."+r,q="resize."+r,p="orientationchange."+r;this.container.parents().add(window).each(function(){d(this).off(o).off(q).off(p)});this.clearDropdownAlignmentPreference();d("#select2-drop-mask").hide();this.dropdown.removeAttr("id");this.dropdown.hide();this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");this.results.empty();this.clearSearch();this.search.removeClass("select2-active");this.opts.element.trigger(d.Event("select2-close"))},externalSearch:function(o){this.open();this.search.val(o);this.updateResults(false)},clearSearch:function(){},getMaximumSelectionSize:function(){return c(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var r=this.results,q,o,v,u,s,t,p;o=this.highlight();if(o<0){return }if(o==0){r.scrollTop(0);return }q=this.findHighlightableChoices().find(".select2-result-label");v=d(q[o]);u=v.offset().top+v.outerHeight(true);if(o===q.length-1){p=r.find("li.select2-more-results");if(p.length>0){u=p.offset().top+p.outerHeight(true)}}s=r.offset().top+r.outerHeight(true);if(u>s){r.scrollTop(r.scrollTop()+(u-s))}t=v.offset().top-r.offset().top;if(t<0&&v.css("display")!="none"){r.scrollTop(r.scrollTop()+t)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)")},moveHighlight:function(r){var q=this.findHighlightableChoices(),p=this.highlight();while(p>-1&&p<q.length){p+=r;var o=d(q[p]);if(o.hasClass("select2-result-selectable")&&!o.hasClass("select2-disabled")&&!o.hasClass("select2-selected")){this.highlight(p);break}}},highlight:function(p){var r=this.findHighlightableChoices(),o,q;if(arguments.length===0){return Q(r.filter(".select2-highlighted")[0],r.get())}if(p>=r.length){p=r.length-1}if(p<0){p=0}this.removeHighlight();o=d(r[p]);o.addClass("select2-highlighted");this.ensureHighlightVisible();q=o.data("select2-data");if(q){this.opts.element.trigger({type:"select2-highlight",val:this.id(q),choice:q})}},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(p){var o=d(p.target).closest(".select2-result-selectable");if(o.length>0&&!o.is(".select2-highlighted")){var q=this.findHighlightableChoices();this.highlight(q.index(o))}else{if(o.length==0){this.removeHighlight()}}},loadMoreIfNeeded:function(){var s=this.results,r=s.find("li.select2-more-results"),u,t=this.resultsPage+1,o=this,q=this.search.val(),p=this.context;if(r.length===0){return }u=r.offset().top-s.offset().top-s.height();if(u<=this.opts.loadMorePadding){r.addClass("select2-active");this.opts.query({element:this.opts.element,term:q,page:t,context:p,matcher:this.opts.matcher,callback:this.bind(function(v){if(!o.opened()){return }o.opts.populateResults.call(this,s,v.results,{term:q,page:t,context:p});o.postprocessResults(v,false,false);if(v.more===true){r.detach().appendTo(s).text(o.opts.formatLoadMore(t+1));window.setTimeout(function(){o.loadMoreIfNeeded()},10)}else{r.remove()}o.positionDropdown();o.resultsPage=t;o.context=v.context;this.opts.element.trigger({type:"select2-loaded",items:v})})})}},tokenize:function(){},updateResults:function(w){var AA=this.search,u=this.results,o=this.opts,t,z=this,x,s=AA.val(),q=d.data(this.container,"select2-last-term"),y;if(w!==true&&q&&T(s,q)){return }d.data(this.container,"select2-last-term",s);if(w!==true&&(this.showSearchInput===false||!this.opened())){return }function v(){AA.removeClass("select2-active");z.positionDropdown()}function p(AB){u.html(AB);v()}y=++this.queryCount;var r=this.getMaximumSelectionSize();if(r>=1){t=this.data();if(d.isArray(t)&&t.length>=r&&Y(o.formatSelectionTooBig,"formatSelectionTooBig")){p("<li class='select2-selection-limit'>"+o.formatSelectionTooBig(r)+"</li>");return }}if(AA.val().length<o.minimumInputLength){if(Y(o.formatInputTooShort,"formatInputTooShort")){p("<li class='select2-no-results'>"+o.formatInputTooShort(AA.val(),o.minimumInputLength)+"</li>")}else{p("")}if(w&&this.showSearch){this.showSearch(true)}return }if(o.maximumInputLength&&AA.val().length>o.maximumInputLength){if(Y(o.formatInputTooLong,"formatInputTooLong")){p("<li class='select2-no-results'>"+o.formatInputTooLong(AA.val(),o.maximumInputLength)+"</li>")}else{p("")}return }if(o.formatSearching&&this.findHighlightableChoices().length===0){p("<li class='select2-searching'>"+o.formatSearching()+"</li>")}AA.addClass("select2-active");this.removeHighlight();x=this.tokenize();if(x!=M&&x!=null){AA.val(x)}this.resultsPage=1;o.query({element:o.element,term:AA.val(),page:this.resultsPage,context:null,matcher:o.matcher,callback:this.bind(function(AC){var AB;if(y!=this.queryCount){return }if(!this.opened()){this.search.removeClass("select2-active");return }this.context=(AC.context===M)?null:AC.context;if(this.opts.createSearchChoice&&AA.val()!==""){AB=this.opts.createSearchChoice.call(z,AA.val(),AC.results);if(AB!==M&&AB!==null&&z.id(AB)!==M&&z.id(AB)!==null){if(d(AC.results).filter(function(){return T(z.id(this),z.id(AB))}).length===0){AC.results.unshift(AB)}}}if(AC.results.length===0&&Y(o.formatNoMatches,"formatNoMatches")){p("<li class='select2-no-results'>"+o.formatNoMatches(AA.val())+"</li>");return }u.empty();z.opts.populateResults.call(this,u,AC.results,{term:AA.val(),page:this.resultsPage,context:null});if(AC.more===true&&Y(o.formatLoadMore,"formatLoadMore")){u.append("<li class='select2-more-results'>"+z.opts.escapeMarkup(o.formatLoadMore(this.resultsPage))+"</li>");window.setTimeout(function(){z.loadMoreIfNeeded()},10)}this.postprocessResults(AC,w);v();this.opts.element.trigger({type:"select2-loaded",items:AC})})})},cancel:function(){this.close()},blur:function(){if(this.opts.selectOnBlur){this.selectHighlighted({noFocus:true})}this.close();this.container.removeClass("select2-container-active");if(this.search[0]===document.activeElement){this.search.blur()}this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){i(this.search)},selectHighlighted:function(p){var o=this.highlight(),q=this.results.find(".select2-highlighted"),r=q.closest(".select2-result").data("select2-data");if(r){this.highlight(o);this.onSelect(r,p)}else{if(p&&p.noFocus){this.close()}}},getPlaceholder:function(){var o;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((o=this.getPlaceholderOption())!==M?o.text():M)},getPlaceholderOption:function(){if(this.select){var o=this.select.children("option").first();if(this.opts.placeholderOption!==M){return(this.opts.placeholderOption==="first"&&o)||(typeof this.opts.placeholderOption==="function"&&this.opts.placeholderOption(this.select))}else{if(o.text()===""&&o.val()===""){return o}}}},initContainerWidth:function(){function p(){var u,s,v,t,r,q;if(this.opts.width==="off"){return null}else{if(this.opts.width==="element"){return this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px"}else{if(this.opts.width==="copy"||this.opts.width==="resolve"){u=this.opts.element.attr("style");if(u!==M){s=u.split(";");for(t=0,r=s.length;t<r;t=t+1){q=s[t].replace(/\s/g,"");v=q.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);if(v!==null&&v.length>=1){return v[1]}}}if(this.opts.width==="resolve"){u=this.opts.element.css("width");if(u.indexOf("%")>0){return u}return(this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px")}return null}else{if(d.isFunction(this.opts.width)){return this.opts.width()}else{return this.opts.width}}}}}var o=p.call(this);if(o!==null){this.container.css("width",o)}}});X=l(n,{createContainer:function(){var o=d(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow'><b></b></span>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return o},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.focusser.prop("disabled",!this.isInterfaceEnabled())}},opening:function(){var q,p,o;if(this.opts.minimumResultsForSearch>=0){this.showSearch(true)}this.parent.opening.apply(this,arguments);if(this.showSearchInput!==false){this.search.val(this.focusser.val())}this.search.focus();q=this.search.get(0);if(q.createTextRange){p=q.createTextRange();p.collapse(false);p.select()}else{if(q.setSelectionRange){o=this.search.val().length;q.setSelectionRange(o,o)}}if(this.search.val()===""){if(this.nextSearchTerm!=M){this.search.val(this.nextSearchTerm);this.search.select()}}this.focusser.prop("disabled",true).val("");this.updateResults(true);this.opts.element.trigger(d.Event("select2-open"))},close:function(o){if(!this.opened()){return }this.parent.close.apply(this,arguments);o=o||{focus:true};this.focusser.removeAttr("disabled");if(o.focus){this.focusser.focus()}},focus:function(){if(this.opened()){this.close()}else{this.focusser.removeAttr("disabled");this.focusser.focus()}},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments);this.focusser.removeAttr("disabled");this.focusser.focus()},destroy:function(){d("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id"));this.parent.destroy.apply(this,arguments)},initContainer:function(){var p,o=this.container,q=this.dropdown;if(this.opts.minimumResultsForSearch<0){this.showSearch(false)}else{this.showSearch(true)}this.selection=p=o.find(".select2-choice");this.focusser=o.find(".select2-focusser");this.focusser.attr("id","s2id_autogen"+A());d("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id"));this.focusser.attr("tabindex",this.elementTabIndex);this.search.on("keydown",this.bind(function(r){if(!this.isInterfaceEnabled()){return }if(r.which===k.PAGE_UP||r.which===k.PAGE_DOWN){a(r);return }switch(r.which){case k.UP:case k.DOWN:this.moveHighlight((r.which===k.UP)?-1:1);a(r);return ;case k.ENTER:this.selectHighlighted();a(r);return ;case k.TAB:this.selectHighlighted({noFocus:true});return ;case k.ESC:this.cancel(r);a(r);return }}));this.search.on("blur",this.bind(function(r){if(document.activeElement===this.body().get(0)){window.setTimeout(this.bind(function(){this.search.focus()}),0)}}));this.focusser.on("keydown",this.bind(function(r){if(!this.isInterfaceEnabled()){return }if(r.which===k.TAB||k.isControl(r)||k.isFunctionKey(r)||r.which===k.ESC){return }if(this.opts.openOnEnter===false&&r.which===k.ENTER){a(r);return }if(r.which==k.DOWN||r.which==k.UP||(r.which==k.ENTER&&this.opts.openOnEnter)){if(r.altKey||r.ctrlKey||r.shiftKey||r.metaKey){return }this.open();a(r);return }if(r.which==k.DELETE||r.which==k.BACKSPACE){if(this.opts.allowClear){this.clear()}a(r);return }}));f(this.focusser);this.focusser.on("keyup-change input",this.bind(function(r){if(this.opts.minimumResultsForSearch>=0){r.stopPropagation();if(this.opened()){return }this.open()}}));p.on("mousedown","abbr",this.bind(function(r){if(!this.isInterfaceEnabled()){return }this.clear();B(r);this.close();this.selection.focus()}));p.on("mousedown",this.bind(function(r){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}if(this.opened()){this.close()}else{if(this.isInterfaceEnabled()){this.open()}}a(r)}));q.on("mousedown",this.bind(function(){this.search.focus()}));p.on("focus",this.bind(function(r){a(r)}));this.focusser.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active");this.opts.element.trigger(d.Event("select2-blur"))}}));this.search.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}this.container.addClass("select2-container-active")}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.setPlaceholder()},clear:function(q){var r=this.selection.data("select2-data");if(r){var p=d.Event("select2-clearing");this.opts.element.trigger(p);if(p.isDefaultPrevented()){return }var o=this.getPlaceholderOption();this.opts.element.val(o?o.val():"");this.selection.find(".select2-chosen").empty();this.selection.removeData("select2-data");this.setPlaceholder();if(q!==false){this.opts.element.trigger({type:"select2-removed",val:this.id(r),choice:r});this.triggerChange({removed:r})}}},initSelection:function(){var p;if(this.isPlaceholderOptionSelected()){this.updateSelection(null);this.close();this.setPlaceholder()}else{var o=this;this.opts.initSelection.call(null,this.opts.element,function(q){if(q!==M&&q!==null){o.updateSelection(q);o.close();o.setPlaceholder()}})}},isPlaceholderOptionSelected:function(){var o;if(!this.getPlaceholder()){return false}return((o=this.getPlaceholderOption())!==M&&o.prop("selected"))||(this.opts.element.val()==="")||(this.opts.element.val()===M)||(this.opts.element.val()===null)},prepareOpts:function(){var p=this.parent.prepareOpts.apply(this,arguments),o=this;if(p.element.get(0).tagName.toLowerCase()==="select"){p.initSelection=function(q,s){var r=q.find("option").filter(function(){return this.selected});s(o.optionToData(r))}}else{if("data" in p){p.initSelection=p.initSelection||function(r,t){var s=r.val();var q=null;p.query({matcher:function(u,x,v){var w=T(s,p.id(v));if(w){q=v}return w},callback:!d.isFunction(t)?d.noop:function(){t(q)}})}}}return p},getPlaceholder:function(){if(this.select){if(this.getPlaceholderOption()===M){return M}}return this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var o=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&o!==M){if(this.select&&this.getPlaceholderOption()===M){return }this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(o));this.selection.addClass("select2-default");this.container.removeClass("select2-allowclear")}},postprocessResults:function(t,p,s){var r=0,o=this,u=true;this.findHighlightableChoices().each2(function(v,w){if(T(o.id(w.data("select2-data")),o.opts.element.val())){r=v;return false}});if(s!==false){if(p===true&&r>=0){this.highlight(r)}else{this.highlight(0)}}if(p===true){var q=this.opts.minimumResultsForSearch;if(q>=0){this.showSearch(R(t.results)>=q)}}},showSearch:function(o){if(this.showSearchInput===o){return }this.showSearchInput=o;this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!o);this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!o);d(this.dropdown,this.container).toggleClass("select2-with-searchbox",o)},onSelect:function(q,p){if(!this.triggerSelect(q)){return }var o=this.opts.element.val(),r=this.data();this.opts.element.val(this.id(q));this.updateSelection(q);this.opts.element.trigger({type:"select2-selected",val:this.id(q),choice:q});this.nextSearchTerm=this.opts.nextSearchTerm(q,this.search.val());this.close();if(!p||!p.noFocus){this.focusser.focus()}if(!T(o,this.id(q))){this.triggerChange({added:q,removed:r})}},updateSelection:function(r){var p=this.selection.find(".select2-chosen"),q,o;this.selection.data("select2-data",r);p.empty();if(r!==null){q=this.opts.formatSelection(r,p,this.opts.escapeMarkup)}if(q!==M){p.append(q)}o=this.opts.formatSelectionCssClass(r,p);if(o!==M){p.addClass(o)}this.selection.removeClass("select2-default");if(this.opts.allowClear&&this.getPlaceholder()!==M){this.container.addClass("select2-allowclear")}},val:function(){var s,p=false,q=null,o=this,r=this.data();if(arguments.length===0){return this.opts.element.val()}s=arguments[0];if(arguments.length>1){p=arguments[1]}if(this.select){this.select.val(s).find("option").filter(function(){return this.selected}).each2(function(t,u){q=o.optionToData(u);return false});this.updateSelection(q);this.setPlaceholder();if(p){this.triggerChange({added:q,removed:r})}}else{if(!s&&s!==0){this.clear(p);return }if(this.opts.initSelection===M){throw new Error("cannot call val() if initSelection() is not defined")}this.opts.element.val(s);this.opts.initSelection(this.opts.element,function(t){o.opts.element.val(!t?"":o.id(t));o.updateSelection(t);o.setPlaceholder();if(p){o.triggerChange({added:t,removed:r})}})}},clearSearch:function(){this.search.val("");this.focusser.val("")},data:function(q){var p,o=false;if(arguments.length===0){p=this.selection.data("select2-data");if(p==M){p=null}return p}else{if(arguments.length>1){o=arguments[1]}if(!q){this.clear(o)}else{p=this.data();this.opts.element.val(!q?"":this.id(q));this.updateSelection(q);if(o){this.triggerChange({added:q,removed:p})}}}}});C=l(n,{createContainer:function(){var o=d(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return o},prepareOpts:function(){var p=this.parent.prepareOpts.apply(this,arguments),o=this;if(p.element.get(0).tagName.toLowerCase()==="select"){p.initSelection=function(q,s){var r=[];q.find("option").filter(function(){return this.selected}).each2(function(t,u){r.push(o.optionToData(u))});s(r)}}else{if("data" in p){p.initSelection=p.initSelection||function(q,t){var r=I(q.val(),p.separator);var s=[];p.query({matcher:function(u,x,v){var w=d.grep(r,function(y){return T(y,p.id(v))}).length;if(w){s.push(v)}return w},callback:!d.isFunction(t)?d.noop:function(){var u=[];for(var x=0;x<r.length;x++){var y=r[x];for(var w=0;w<s.length;w++){var v=s[w];if(T(y,p.id(v))){u.push(v);s.splice(w,1);break}}}t(u)}})}}}return p},selectChoice:function(o){var p=this.container.find(".select2-search-choice-focus");if(p.length&&o&&o[0]==p[0]){}else{if(p.length){this.opts.element.trigger("choice-deselected",p)}p.removeClass("select2-search-choice-focus");if(o&&o.length){this.close();o.addClass("select2-search-choice-focus");this.opts.element.trigger("choice-selected",o)}}},destroy:function(){d("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id"));this.parent.destroy.apply(this,arguments)},initContainer:function(){var o=".select2-choices",p;this.searchContainer=this.container.find(".select2-search-field");this.selection=p=this.container.find(o);var q=this;this.selection.on("click",".select2-search-choice:not(.select2-locked)",function(r){q.search[0].focus();q.selectChoice(d(this))});this.search.attr("id","s2id_autogen"+A());d("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id"));this.search.on("input paste",this.bind(function(){if(!this.isInterfaceEnabled()){return }if(!this.opened()){this.open()}}));this.search.attr("tabindex",this.elementTabIndex);this.keydowns=0;this.search.on("keydown",this.bind(function(v){if(!this.isInterfaceEnabled()){return }++this.keydowns;var t=p.find(".select2-search-choice-focus");var u=t.prev(".select2-search-choice:not(.select2-locked)");var s=t.next(".select2-search-choice:not(.select2-locked)");var w=F(this.search);if(t.length&&(v.which==k.LEFT||v.which==k.RIGHT||v.which==k.BACKSPACE||v.which==k.DELETE||v.which==k.ENTER)){var r=t;if(v.which==k.LEFT&&u.length){r=u}else{if(v.which==k.RIGHT){r=s.length?s:null}else{if(v.which===k.BACKSPACE){this.unselect(t.first());this.search.width(10);r=u.length?u:s}else{if(v.which==k.DELETE){this.unselect(t.first());this.search.width(10);r=s.length?s:null}else{if(v.which==k.ENTER){r=null}}}}}this.selectChoice(r);a(v);if(!r||!r.length){this.open()}return }else{if(((v.which===k.BACKSPACE&&this.keydowns==1)||v.which==k.LEFT)&&(w.offset==0&&!w.length)){this.selectChoice(p.find(".select2-search-choice:not(.select2-locked)").last());a(v);return }else{this.selectChoice(null)}}if(this.opened()){switch(v.which){case k.UP:case k.DOWN:this.moveHighlight((v.which===k.UP)?-1:1);a(v);return ;case k.ENTER:this.selectHighlighted();a(v);return ;case k.TAB:this.selectHighlighted({noFocus:true});this.close();return ;case k.ESC:this.cancel(v);a(v);return }}if(v.which===k.TAB||k.isControl(v)||k.isFunctionKey(v)||v.which===k.BACKSPACE||v.which===k.ESC){return }if(v.which===k.ENTER){if(this.opts.openOnEnter===false){return }else{if(v.altKey||v.ctrlKey||v.shiftKey||v.metaKey){return }}}this.open();if(v.which===k.PAGE_UP||v.which===k.PAGE_DOWN){a(v)}if(v.which===k.ENTER){a(v)}}));this.search.on("keyup",this.bind(function(r){this.keydowns=0;this.resizeSearch()}));this.search.on("blur",this.bind(function(r){this.container.removeClass("select2-container-active");this.search.removeClass("select2-focused");this.selectChoice(null);if(!this.opened()){this.clearSearch()}r.stopImmediatePropagation();this.opts.element.trigger(d.Event("select2-blur"))}));this.container.on("click",o,this.bind(function(r){if(!this.isInterfaceEnabled()){return }if(d(r.target).closest(".select2-search-choice").length>0){return }this.selectChoice(null);this.clearPlaceholder();if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}this.open();this.focusSearch();r.preventDefault()}));this.container.on("focus",o,this.bind(function(){if(!this.isInterfaceEnabled()){return }if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");this.clearPlaceholder()}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.clearSearch()},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.search.prop("disabled",!this.isInterfaceEnabled())}},initSelection:function(){var p;if(this.opts.element.val()===""&&this.opts.element.text()===""){this.updateSelection([]);this.close();this.clearSearch()}if(this.select||this.opts.element.val()!==""){var o=this;this.opts.initSelection.call(null,this.opts.element,function(q){if(q!==M&&q!==null){o.updateSelection(q);o.close();o.clearSearch()}})}},clearSearch:function(){var p=this.getPlaceholder(),o=this.getMaxSearchWidth();if(p!==M&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(p).addClass("select2-default");this.search.width(o>0?o:this.container.css("width"))}else{this.search.val("").width(10)}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default")}},opening:function(){this.clearPlaceholder();this.resizeSearch();this.parent.opening.apply(this,arguments);this.focusSearch();this.updateResults(true);this.search.focus();this.opts.element.trigger(d.Event("select2-open"))},close:function(){if(!this.opened()){return }this.parent.close.apply(this,arguments)},focus:function(){this.close();this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(r){var q=[],p=[],o=this;d(r).each(function(){if(Q(o.id(this),q)<0){q.push(o.id(this));p.push(this)}});r=p;this.selection.find(".select2-search-choice").remove();d(r).each(function(){o.addSelectedChoice(this)});o.postprocessResults()},tokenize:function(){var o=this.search.val();o=this.opts.tokenizer.call(this,o,this.data(),this.bind(this.onSelect),this.opts);if(o!=null&&o!=M){this.search.val(o);if(o.length>0){this.open()}}},onSelect:function(p,o){if(!this.triggerSelect(p)){return }this.addSelectedChoice(p);this.opts.element.trigger({type:"selected",val:this.id(p),choice:p});if(this.select||!this.opts.closeOnSelect){this.postprocessResults(p,false,this.opts.closeOnSelect===true)}if(this.opts.closeOnSelect){this.close();this.search.width(10)}else{if(this.countSelectableResults()>0){this.search.width(10);this.resizeSearch();if(this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()){this.updateResults(true)}this.positionDropdown()}else{this.close();this.search.width(10)}}this.triggerChange({added:p});if(!o||!o.noFocus){this.focusSearch()}},cancel:function(){this.close();this.focusSearch()},addSelectedChoice:function(s){var u=!s.locked,q=d("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),v=d("<li class='select2-search-choice select2-locked'><div></div></li>");var r=u?q:v,o=this.id(s),p=this.getVal(),t,w;t=this.opts.formatSelection(s,r.find("div"),this.opts.escapeMarkup);if(t!=M){r.find("div").replaceWith("<div>"+t+"</div>")}w=this.opts.formatSelectionCssClass(s,r.find("div"));if(w!=M){r.addClass(w)}if(u){r.find(".select2-search-choice-close").on("mousedown",a).on("click dblclick",this.bind(function(x){if(!this.isInterfaceEnabled()){return }d(x.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(d(x.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch()})).dequeue();a(x)})).on("focus",this.bind(function(){if(!this.isInterfaceEnabled()){return }this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active")}))}r.data("select2-data",s);r.insertBefore(this.searchContainer);p.push(o);this.setVal(p)},unselect:function(q){var s=this.getVal(),r,p;q=q.closest(".select2-search-choice");if(q.length===0){throw"Invalid argument: "+q+". Must be .select2-search-choice"}r=q.data("select2-data");if(!r){return }while((p=Q(this.id(r),s))>=0){s.splice(p,1);this.setVal(s);if(this.select){this.postprocessResults()}}var o=d.Event("select2-removing");o.val=this.id(r);o.choice=r;this.opts.element.trigger(o);if(o.isDefaultPrevented()){return }q.remove();this.opts.element.trigger({type:"select2-removed",val:this.id(r),choice:r});this.triggerChange({removed:r})},postprocessResults:function(s,p,r){var t=this.getVal(),u=this.results.find(".select2-result"),q=this.results.find(".select2-result-with-children"),o=this;u.each2(function(w,v){var x=o.id(v.data("select2-data"));if(Q(x,t)>=0){v.addClass("select2-selected");v.find(".select2-result-selectable").addClass("select2-selected")}});q.each2(function(w,v){if(!v.is(".select2-result-selectable")&&v.find(".select2-result-selectable:not(.select2-selected)").length===0){v.addClass("select2-selected")}});if(this.highlight()==-1&&r!==false){o.highlight(0)}if(!this.opts.createSearchChoice&&!u.filter(".select2-result:not(.select2-selected)").length>0){if(!s||s&&!s.more&&this.results.find(".select2-no-results").length===0){if(Y(o.opts.formatNoMatches,"formatNoMatches")){this.results.append("<li class='select2-no-results'>"+o.opts.formatNoMatches(o.search.val())+"</li>")}}}},getMaxSearchWidth:function(){return this.selection.width()-H(this.search)},resizeSearch:function(){var t,r,q,o,p,s=H(this.search);t=N(this.search)+10;r=this.search.offset().left;q=this.selection.width();o=this.selection.offset().left;p=q-(r-o)-s;if(p<t){p=q-s}if(p<40){p=q-s}if(p<=0){p=t}this.search.width(Math.floor(p))},getVal:function(){var o;if(this.select){o=this.select.val();return o===null?[]:o}else{o=this.opts.element.val();return I(o,this.opts.separator)}},setVal:function(p){var o;if(this.select){this.select.val(p)}else{o=[];d(p).each(function(){if(Q(this,o)<0){o.push(this)}});this.opts.element.val(o.length===0?"":o.join(this.opts.separator))}},buildChangeDetails:function(o,r){var r=r.slice(0),o=o.slice(0);for(var q=0;q<r.length;q++){for(var p=0;p<o.length;p++){if(T(this.opts.id(r[q]),this.opts.id(o[p]))){r.splice(q,1);if(q>0){q--}o.splice(p,1);p--}}}return{added:r,removed:o}},val:function(r,p){var q,o=this;if(arguments.length===0){return this.getVal()}q=this.data();if(!q.length){q=[]}if(!r&&r!==0){this.opts.element.val("");this.updateSelection([]);this.clearSearch();if(p){this.triggerChange({added:this.data(),removed:q})}return }this.setVal(r);if(this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection));if(p){this.triggerChange(this.buildChangeDetails(q,this.data()))}}else{if(this.opts.initSelection===M){throw new Error("val() cannot be called if initSelection() is not defined")}this.opts.initSelection(this.opts.element,function(t){var s=d.map(t,o.id);o.setVal(s);o.updateSelection(t);o.clearSearch();if(p){o.triggerChange(o.buildChangeDetails(q,o.data()))}})}this.clearSearch()},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")}this.search.width(0);this.searchContainer.hide()},onSortEnd:function(){var p=[],o=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){p.push(o.opts.id(d(this).data("select2-data")))});this.setVal(p);this.triggerChange()},data:function(q,r){var p=this,s,o;if(arguments.length===0){return this.selection.find(".select2-search-choice").map(function(){return d(this).data("select2-data")}).get()}else{o=this.data();if(!q){q=[]}s=d.map(q,function(t){return p.opts.id(t)});this.setVal(s);this.updateSelection(q);this.clearSearch();if(r){this.triggerChange(this.buildChangeDetails(o,this.data()))}}}});d.fn.select2=function(){var t=Array.prototype.slice.call(arguments,0),p,s,o,v,x,w=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],u=["opened","isFocused","container","dropdown"],q=["val","data"],r={search:"externalSearch"};this.each(function(){if(t.length===0||typeof (t[0])==="object"){p=t.length===0?{}:d.extend({},t[0]);p.element=d(this);if(p.element.get(0).tagName.toLowerCase()==="select"){x=p.element.prop("multiple")}else{x=p.multiple||false;if("tags" in p){p.multiple=x=true}}s=x?new C():new X();s.init(p)}else{if(typeof (t[0])==="string"){if(Q(t[0],w)<0){throw"Unknown method: "+t[0]}v=M;s=d(this).data("select2");if(s===M){return }o=t[0];if(o==="container"){v=s.container}else{if(o==="dropdown"){v=s.dropdown}else{if(r[o]){o=r[o]}v=s[o].apply(s,t.slice(1))}}if(Q(t[0],u)>=0||(Q(t[0],q)&&t.length==1)){return false}}else{throw"Invalid arguments to select2 plugin: "+t}}});return(v===M)?this:v};d.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(p,q,s,o){var r=[];U(p.text,s.term,r,o);return r.join("")},formatSelection:function(q,p,o){return q?o(q.text):M},sortResults:function(p,o,q){return p},formatResultCssClass:function(o){return M},formatSelectionCssClass:function(p,o){return M},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(o,p){var q=p-o.length;return"Please enter "+q+" more character"+(q==1?"":"s")},formatInputTooLong:function(p,o){var q=p.length-o;return"Please delete "+q+" character"+(q==1?"":"s")},formatSelectionTooBig:function(o){return"You can only select "+o+" item"+(o==1?"":"s")},formatLoadMore:function(o){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(o){return o.id},matcher:function(o,p){return E(""+p).toUpperCase().indexOf(E(""+o).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:G,escapeMarkup:g,blurOnChange:false,selectOnBlur:false,adaptContainerCssClass:function(o){return o},adaptDropdownCssClass:function(o){return null},nextSearchTerm:function(o,p){return M}};d.fn.select2.ajaxDefaults={transport:d.ajax,params:{type:"GET",cache:false,dataType:"json"}};window.Select2={query:{ajax:e,local:h,tags:Z},util:{debounce:K,markMatch:U,escapeMarkup:g,stripDiacritics:E},"class":{"abstract":n,single:X,multi:C}}}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-select2', location = 'js/aui-select2.js' */
(function(C){var E=C.fn.select2;var D="aui-select2-container";var B="aui-select2-drop aui-dropdown2 aui-style-default";var A="aui-has-avatar";C.fn.auiSelect2=function(I){var H;if(C.isPlainObject(I)){var F=C.extend({},I);var G=F.hasAvatar?" "+A:"";F.containerCssClass=D+G+(F.containerCssClass?" "+F.containerCssClass:"");F.dropdownCssClass=B+G+(F.dropdownCssClass?" "+F.dropdownCssClass:"");H=Array.prototype.slice.call(arguments,1);H.unshift(F)}else{if(!arguments.length){H=[{containerCssClass:D,dropdownCssClass:B}]}else{H=arguments}}return E.apply(this,H)}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:dom-filter-field', location = '/includes/js/components/dom-filter-field.js' */
(function(a){Confluence.DomFilterField=function(k){var d={items:null,matcher:function(m,n){var l=m.text().toLowerCase();return l.indexOf(n)>-1},searcher:function(m,l){if(l!==""){l=l.toLowerCase();m.each(function(){var n=a(this);var o=k.matcher(n,l);n.toggleClass("hidden",!o)})}else{m.removeClass("hidden")}},postSearch:function(l){},placeholderText:"Search",submitCallback:function(l,m){AJS.debug("Confluence.DomFilterField submitted with "+l.length+" item(s) for search text >"+m+"<")}};k=a.extend(d,k);var f;function c(){f=a(k.items)}c();function e(){return a.trim(j.filter(":not(.blank-search)").val())}function i(){return e()!==""}function h(){return f.filter(":visible")}var b=a(Confluence.Templates.DomFilterField.form());var j=b.find("input");function g(){k.searcher(f,e());k.postSearch(h())}j.keyup(function(l){g();return AJS.stopEvent(l)}).keyup(function(l){return AJS.stopEvent(l)}).focus(function(l){if(j.hasClass("blank-search")){j.removeClass("blank-search").val("")}l.target.select()}).blur(function(l){if(!i()){j.addClass("blank-search").val(k.placeholderText)}}).blur();if(k.formId){b.attr("id",k.formId)}if(k.inputId){j.attr("id",k.inputId)}b.submit(function(m){AJS.stopEvent(m);var l=h();if(l.length){k.submitCallback(l,e())}return false});return{form:b,reset:function(){if(i()){j.val("").blur();k.searcher(f,"")}},refreshItems:c,filter:g,focus:function(){j.focus()},focusAndSearch:function(l){l=a.trim(l);j.val(l).keyup();l&&j.removeClass("blank-search");j.focus()}}}}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.components:dom-filter-field', location = '/includes/soy/dom-filter-field.soy' */
// This file was automatically generated from dom-filter-field.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DomFilterField == 'undefined') { Confluence.Templates.DomFilterField = {}; }


Confluence.Templates.DomFilterField.form = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form class="aui dom-filter-field-form"><input type="text" class="text"/></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">', (opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '', '<p>', soy.$$escapeHtml(opt_data.descriptionContent), '</p></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<img class="wait-icon" src="', soy.$$escapeHtml(""), '/images/icons/wait.gif">');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function($){function findNextPageId(pageId,pages){var thisPageIdIndex=-1;_.each(pages,function(element,index){if(element.id==pageId){thisPageIdIndex=index;return}});return pages[thisPageIdIndex+1].id}Confluence.DialogWizard=function(dialog,finalAction){function newPage(config,pageId,soyRenderContext,wizardData,wizard){var wizardPage=_.find(config.wizard.pages,function(page){return page.id==pageId});wizard.trigger("pre-render."+pageId,{soyRenderContext:soyRenderContext,wizardData:wizardData});try{var soyTemplateFunction=eval(wizardPage.templateKey);var $soyRender=$(soyTemplateFunction(soyRenderContext))}catch(e){throw Error("wizard points to a non-existent Soy template '"+wizardPage.templateKey+"'. Check your web-resources or server logs.")}$soyRender.find("a, area, button, input, object, select, textarea").attr("tabindex","10");var $panelContent;if(wizardPage.descriptionContent){$panelContent=$(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:wizardPage.descriptionHeaderLink,descriptionHeader:wizardPage.descriptionHeader,descriptionContent:wizardPage.descriptionContent}));$panelContent.addClass("with-description").find(".dialog-wizard-page-main").append($soyRender)}else{$panelContent=$soyRender}var dialogPageId=pageId;if(dialog.id=="create-dialog"){dialogPageId="create-dialog-"+pageId}var page=dialog.addPage(dialogPageId).page[dialog.curpage];page.addHeader(wizardPage.title).addPanel("SinglePanel",$panelContent,"singlePanel");page.element.find("form").submit(function(){return false});if(wizardPage.descriptionContent){page.element.find(".dialog-panel-body").css({padding:0})}Confluence.Binder.autocompleteMultiUser($soyRender);Confluence.Binder.placeholder($soyRender);function nextCallback(ev){$soyRender.find(".placeholded").val("");var pageData={};var formArray=$soyRender.parent().find("form").serializeArray();_.each(formArray,function(item){pageData[item.name]=item.value});var e=$.Event("submit."+pageId);var state={$container:$soyRender,wizardData:wizardData,pageData:pageData};var validationDeferred=$.Deferred();validationDeferred.done(function(){wizardData.pages[pageId]=pageData;var nextPageId;if(state.nextPageId){nextPageId=state.nextPageId}else{nextPageId=!wizardPage.last&&findNextPageId(pageId,config.wizard.pages)}if(!state.nextPageId&&wizardPage.last){doFinalAction(ev,state,wizardData,finalAction,wizard);dialog.popup.element.find(":input,a").filter(":visible").disable().addClass("disabled");buttons.prepend(Confluence.Templates.DialogWizard.waitIcon())}else{newPage(config,nextPageId,soyRenderContext,wizardData,wizard)}});validationDeferred.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+pageId)});state.validationDeferred=validationDeferred;wizard.trigger(e,state);if(state.async){return}if(e.isDefaultPrevented()){validationDeferred.reject();return}validationDeferred.resolve()}var buttons=dialog.addFullButtonPanel(page,nextCallback,null,wizardPage.last);buttons.find(".button-panel-back").click(function(){delete wizardData.pages[pageId]});buttons.find(".aui-button-primary").attr("tabindex","10");$soyRender.find("input, select, textarea").eq(0).focus();wizard.trigger("post-render."+pageId,{$container:$soyRender,wizardData:wizardData})}function doFinalAction(ev,state,wizardData,finalAction,wizard){if(state.finalUrl){window.location=state.finalUrl}else{_.each(wizardData.pages,function(pageData){_.extend(wizardData,pageData)});delete wizardData.pages;finalAction(ev,wizardData,null,wizard)}}return{newPage:newPage,doFinalAction:doFinalAction}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/blueprint-object.js' */
(function(e){var k={};var c;var a;var i={};var l={};function m(o){switch(o){case"view":return"content-blueprint/create-content";case"space":return"space-blueprint/create-space";default:return"content-blueprint/create-draft"}}function f(x,q,w,v){AJS.trigger("blueprint.before-create");var t=Confluence.storageManager("confluence-create-content-plugin");var y=e.parseJSON(t.getItem("used"));if(y==null){y=[]}y.push(c.itemModuleCompleteKey);t.setItem("used",JSON.stringify(y));var z="";if(_.isString(x)){z=x}var s=c.createResult;var B;if(v&&v.getSubmissionRestPath){B=v.getSubmissionRestPath()}else{B="/rest/create-dialog/1.0/"+m(s)}var p=Confluence.getContextPath()+B;var A=w?w.getParentPageId():"";var o=!!q.goToIndexPage;delete q.goToIndexPage;var r;if(v&&v.assembleSubmissionObject){r=v.assembleSubmissionObject(q)}else{if(s=="space"){r=b(q)}else{r=n(z,q,A)}}var u=JSON.stringify(r);e.ajax({url:p,type:"POST",dataType:"json",contentType:"application/json",data:u}).done(function(D){var C=o?(D.indexPage.createSuccessRedirectUrl||D.indexPage.url):(D.createSuccessRedirectUrl||D.url);window.location=C});AJS.trigger("blueprint.after-create")}function b(o){var p={spaceKey:o.spaceKey,name:o.name,description:o.description,permissions:o.spacePermission,spaceBlueprintId:c.contentBlueprintId};p.context=o;return p}function n(u,t,q){t=t||{};u=t.title||u||"";var s=t.viewPermissionsUsers||"";var r=t.contentTemplateId||"";var o=t.contentTemplateKey||"";q=t.parentPageId||q;var p={};p.spaceKey=a;p.contentBlueprintId=c.contentBlueprintId;p.contentTemplateId=r;p.contentTemplateKey=o;p.title=u;p.viewPermissionsUsers=s;p.context=t;p.parentPageId=q;return p}function j(q){var o=Confluence.storageManager("confluence-create-content-plugin");var p=e.parseJSON(o.getItem("used"));if(p==null){p=[]}if(e.inArray(q,p)==-1){p.push(q)}o.setItem("used",JSON.stringify(p))}Confluence.Blueprint={register:function(o,p){k[o]=p},validateTitle:function(p,s,t,o){var r=e.trim(p.val()),q;if(!t){t="Title is required."}if(!o){o="A page with this name already exists."}if(!r){q=t}else{if(!Confluence.Blueprint.canCreatePage(s,r)){q=o}}if(q){p.focus().siblings(".error").html(q);return false}return true},canCreatePage:function(q,p){var o=false;e.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/can-create-page",dataType:"json",data:{spaceKey:q,pageTitle:p},async:false}).done(function(r){o=r}).fail(function(r){AJS.log("Failed to call 'can-create-page' - "+r)});return o},hasWizard:function h(p,o){return(l[p]||(o&&o.wizard))&&!i[p]},setWizard:function d(q,p){var o=e({});p(o);l[q]=o},getWizard:function(o){return l[o]||e({})},setDirectCallback:function(p,o){i[p]=o},getDirectCallback:function(o){return i[o]},fireWizard:function(w,r,D){var q=D.initContext||{};a=r.spaceKey;c=r;var p=r.itemModuleCompleteKey;j(p);if(p){var v=p.replace(/\.|:/g,"_");AJS.trigger("analytics",{name:D.id+".submit."+v,data:{spaceKey:a}});var B;var u=this.getDirectCallback(p);if(u){B=function x(){var E={spaceKey:a,pageData:{},initContext:q};u(w,E);var F=e.extend(q,{pageData:E.pageData});new Confluence.DialogWizard(D,f).doFinalAction(w,E,F,f)}}else{if(r.wizard){var o=r.wizard.pages[0].id;B=function s(){var E=Confluence.Blueprint.getWizard(p);Confluence.DialogWizard(D,f).newPage(r,o,{},e.extend(q,{spaceKey:a,pages:{},parentPageId:D.getParentPageId()}),E)}}else{if(k[p]){B=function t(){k[p](D,a,f)}}else{if(r.contentBlueprintId){B=function z(){f(null,e.extend(q,r),D)}}else{throw Error("No way to process item: "+p)}}}}if(r.howToUseTemplate){Confluence.Blueprint.HowToUse.check(D,r,B)}else{B()}}else{if(r.templateId){AJS.trigger("analytics",{name:D.id+".submit.template",data:{spaceKey:a,templateId:r.templateId}});var C=Confluence.getContextPath()+"/pages/createpage-entervariables.action?templateId="+encodeURIComponent(r.templateId)+"&spaceKey="+encodeURIComponent(a)+"&title="+encodeURIComponent(r.title||"")+"&newSpaceKey="+encodeURIComponent(a);for(var y in q){C+="&"+encodeURIComponent(y)+"="+encodeURIComponent(q[y])}var A=D.getParentPageId();if(A&&a==AJS.Meta.get("space-key")){C+="&fromPageId="+encodeURIComponent(A)}window.location=C}else{throw new Error("Unknown item: "+r)}}}};function g(){var o={};if(AJS.Meta.get("page-title")){o.parentPageId=AJS.Meta.get("page-id");o.parentPageTitle=AJS.Meta.get("page-title")}else{o.parentPageId=AJS.Meta.get("parent-page-id");o.parentPageTitle=AJS.Meta.get("from-page-title")}return o}Confluence.Blueprint.Util={};Confluence.Blueprint.Util.getParentPageLocation=g})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:user-select2', location = 'user-select2/avatar.soy' */
// This file was automatically generated from avatar.soy.
// Please don't edit this file by hand.

if (typeof CreateContent == 'undefined') { var CreateContent = {}; }
if (typeof CreateContent.avatar == 'undefined') { CreateContent.avatar = {}; }


CreateContent.avatar.avatarWithName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.avatarImageUrl, accessibilityText: opt_data.displayName, title: opt_data.displayName, extraAttributes: {'data-username': opt_data.userId}}, output);
  output.append(soy.$$escapeHtml(opt_data.displayName));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:user-select2', location = 'user-select2/user-multiselect.js' */
Confluence.Binder.autocompleteMultiUser=function(b){b=b||document.body;var c=AJS.$;var a=function(){var d=c(".select2-drop-active > .select2-results");if(d.children(".select2-result-selectable").length===0&&d.children(".select2-disabled").length){d.append('<li class="select2-no-results">'+AJS.escapeHtml("No matches found")+"</li>")}};c("input.autocomplete-multiuser[data-autocomplete-bound != 'true']",b).each(function(){var d=c(this);d.auiSelect2({multiple:true,minimumInputLength:2,formatInputTooShort:function(){return "Start typing to search for a user"},ajax:{transport:function(h){var i=h.success;delete h.success;return c.ajax.apply(c.ajax,arguments).done(i).done(a)},data:function(h){return{"max-results":6,query:h}},dataType:"json",url:Confluence.getContextPath()+"/rest/prototype/1/search/user.json",results:function(i){var h=[];c.each(i.result,function(){h.push({id:this.username,text:this.title,imgSrc:this.thumbnailLink.href})});return{results:h}},quietMillis:300},formatResult:function(h){return CreateContent.avatar.avatarWithName({size:"small",displayName:h.text,userId:h.id,avatarImageUrl:h.imgSrc})},escapeMarkup:function(h){return h},formatSelection:function(h){return CreateContent.avatar.avatarWithName({size:"xsmall",displayName:h.text,userId:h.id,avatarImageUrl:h.imgSrc})},dropdownCssClass:"users-dropdown",containerCssClass:"users-autocomplete",hasAvatar:true});if(!d.data("autofill-user")){return}var g=AJS.Meta.get("remote-user"),f=AJS.Meta.get("current-user-fullname"),e=AJS.Meta.get("current-user-avatar-url");if(g&&f&&e){d.auiSelect2("data",[{id:g,text:f,imgSrc:AJS.contextPath()+e}])}})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-base.js' */
Confluence.Dialogs=Confluence.Dialogs||{};(function(b){Confluence.Dialogs.CreateDialogBase=function a(G){var f,P,o=G.dialogId,u=G.webItemsPath,x=[],g=false,r=Confluence.storageManager("confluence-create-content-plugin");function y(){if(P.find(".button-panel-cancel-link:visible").is(".disabled")){return}Confluence.Blueprint.HowToUse.notifyCancel(f);AJS.trigger("analytics",{name:o+".cancel"});f.remove();b(".tipsy").remove();f=null;P=null;return false}function N(){return b(".create-dialog-create-button:visible")}function L(){return b(".create-dialog-body .template:visible").length}function B(Q){return Q.data("content-blueprint-id")}function C(S){var U=B(S),R=S.data("template-id"),T=U||R,Q=U?"contentBlueprintId":"templateId";if(!T){return O("itemModuleCompleteKey",S.data("item-module-complete-key"))}return O(Q,T)}function j(Q){if(!L()){return false}if(b(this).attr("disabled")==="disabled"){return false}b(this).attr("disabled","disabled").before(Confluence.Templates.Blueprints.waitIcon());var T=A.getSpaceKey();var S=b(".template.selected");var R=C(S);if(!R){throw new Error("Expected at least one template to be selected")}R.spaceKey=T;Confluence.Blueprint.fireWizard(Q,R,f)}function v(){if(!L()){N().attr("disabled","disabled")}else{N().removeAttr("disabled")}}function O(Q,R){return _.find(A.loadedWebitems[A.getSpaceKey()],function(S){return S[Q]==R})}function I(Q){return O("contentBlueprintId",Q)}function D(S){var R=I(S);var Q=R&&R.wizard;var T=e(!Q);N().text(T)}function q(Q){Q.addClass("selected").siblings().removeClass("selected");D(B(Q));AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{item:Q})}function p(Q,V){var S=Q.find(".template");var U=S.filter(".selected");var R=S.index(U)+V;R=R%S.length;var T=S.eq(R);q(T);T.focus();Q.simpleScrollTo(T)}function c(R){var Q=2;switch(R){case 37:return -1;case 39:return +1;case 38:return -Q;case 40:return +Q}return 0}function H(Q){Q.bind("keydown",function(R){var S=c(R.which);if(S){p(Q,S);return AJS.stopEvent(R)}})}function k(aa,U){var Z=A.getSpaceKey();var ac=A.loadedWebitems[Z];ac=A.filterWebItems(ac);g=ac&&ac.length>0&&ac[0].isPromoted;x=m(ac);if(!g&&aa){ac=x}var R=Confluence.Templates.Blueprints.templates({webItems:ac,spaceKey:Z});var X=b(R);var W=F(X);if(g&&W===undefined){var Z=A.getSpaceKey();var T=b.parseJSON(r.getItem("showMore"))||{};var Y=T[Z];if(!Y||Y<3){var S=X.find(".template");_.each(S,function(ae){var ad=b(ae);var af=C(ad);if(!af.isPromoted){ad.hide()}});var ab=X.append(Confluence.Templates.Blueprints.Promoted.showMore())[0];b("#promoted-link",ab).click(function(){T[Z]=(Y||0)+1;r.setItem("showMore",JSON.stringify(T));b(this).closest(".templates").find(".template").css("display","");b(this).closest("li").remove();v()})}}var Q=P.find(".templates");if(Q.length){if(U){Q.fadeOut(150,function(){Q.replaceWith(X.fadeIn(150));t();n();H(X)})}else{Q.replaceWith(X)}}else{b(".template-select-container-body").append(X)}if(J()){var V=!aa;z(x.length,V)}else{d()}if(P.searcher){P.searcher.refreshItems();P.searcher.filter()}P.find(".loading").removeClass("loading");P.trigger("create-content.loaded");n();H(X);if(J()){t()}if(W!==undefined){P.find(".templates").simpleScrollTo(W.first().click())}v()}function F(U){if(!f.initContext){return}var V;var R;var T=Confluence.Blueprint.Selector.getSelectors();for(var S=0,Q=T.length;S<Q;S++){V=T[S](f.initContext);if(V&&V.length){R=U.find('.template[data-item-module-complete-key="'+V+'"]');if(R.length){return R}else{AJS.log("Attempted to select a blueprint that could not be found in the create dialog: "+V)}}}}function t(){var Q=b(".templates");Q.css("height",Q.outerHeight(false)-b("#discover-new-banner").outerHeight())}function n(){b(".template").click(function(){q(b(this))}).dblclick(function(){N().click()}).focus(function(){b(this).click()});b(".template:visible:first").click()}function m(V){var U="",S=[],T=[];for(var R=0,Q=V.length;R<Q;R++){if(V[R].isNew){T=M();U=(b.inArray(V[R].itemModuleCompleteKey,T)!=-1);if(U){V[R].isNew=false}else{S.push(V[R])}}}return S}function E(){var Q=b.parseJSON(r.getItem("dismissed"));return Q||[]}function M(){var Q=b.parseJSON(r.getItem("used"));return Q||[]}function d(){var Q=b("#discover-new-banner");if(Q.length){Q.remove()}}function z(T,R){d();var Q=Confluence.Templates.Blueprints.discoverNewBanner({newItemsNo:T,showLinkToNew:R});var S=b(".template-select-container-body");S.prepend(Q);S.find(".aui-button-link").click(function(){var U=!b(this).data("is-filtered");A.fillWebItemsInDialog(U,true)});b("#discover-new-banner .icon-close").click(function(){b("#discover-new-banner").slideUp(150);var V=E();var U,W;for(U=0,max=x.length;U<max;U++){W=x[U].itemModuleCompleteKey;if(b.inArray(W,V)==-1){V.push(W)}}r.setItem("dismissed",JSON.stringify(V));A.fillWebItemsInDialog(false)})}function J(){if(x.length==0||g){return false}var R=E();if(R.length==0){return true}for(var Q=0;Q<x.length;++Q){if(b.inArray(x[Q].itemModuleCompleteKey,R)==-1){return true}}return false}function l(Q){var Q=Q||{},S=function(U){if(f){if(U.keyCode===27){y()}else{if(U.keyCode===13){var V=U.target.nodeName&&U.target.nodeName.toLowerCase();if(V=="textarea"){return}N().click()}}}};var R={width:840,height:449,id:o,closeOnOutsideClick:false,keypressListener:S,focusSelector:".templates"};f=b.extend(new AJS.Dialog(R),A);P=f.popup.element;f.addHeader(G.headingText);f.initContext=Q.initContext;var T=P.searcher=Confluence.DomFilterField({items:"#create-dialog .templates .template",inputId:"createDialogFilter",placeholderText:"Filter",postSearch:function(U){if(U.length==0){AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{noVisibleItem:true})}else{U.eq(0).click()}if(!Q.showStepOne){v()}},submitCallback:function(U,V){U.eq(0).dblclick()}});T.form.find("input").attr("tabindex",100);P.find(".dialog-title").prepend(G.helpLinkTemplate(),T.form);f.addPanel("SinglePanel",Confluence.Templates.Blueprints.createDialogBody(),"loading");b.extend(f,{addButtonPanel:w,addFullButtonPanel:i,addBackButton:s,removeBackButton:h});f.addButtonPanel(f.getPage(0),j);f.prevPage=function(){P.find(".wait-icon").remove();P.find(".create-dialog-create-button").removeAttr("disabled");return AJS.Dialog.prototype.prevPage.apply(f,arguments)};P.find(".dialog-button-panel").find("button, .button-panel-link").attr("tabindex",100);P.options=Q=b.extend({showDialog:true,updateHeight:true},Q);f.getPanel(0).setPadding(0);f.gotoPanel(0);Q.showDialog&&f.show();Confluence.sessionCheck();return f}function e(Q){return Q?"Create":"Next"}function w(U,T,Q,S){var R=e(Q);U.addButton(AJS.I18n.getText(R),null,"create-dialog-create-button");U.buttonpanel.find(".button-panel-button").removeClass("button-panel-button").addClass("aui-button");U.buttonpanel.find(".create-dialog-create-button").addClass("aui-button-primary").click(T);if(S){U.buttonpanel.addClass(S)}this.addCancel("Close",y)}function i(S,R,T,Q){this.addBackButton(S,T);this.addButtonPanel(S,R,Q);return S.buttonpanel}function s(Q,R){Q.addButton("Back",function(S){R&&R();if(S.curpage==1){S.fillWebItemsInDialog()}S.prevPage();Q.remove();S.page.pop()},"button-panel-back")}function h(){var R=this.getPage(this.curpage);var Q=R.buttonpanel.find(".button-panel-back");Q.remove()}function K(S,R){var Q=this,R=_.isUndefined(R)?true:R;Q.loadedWebitems=Q.loadedWebitems||{};var T=this.loadedWebitems[S];if(T){return AJS.$.Deferred().resolveWith(T)}return b.ajax({url:Confluence.getContextPath()+u,dataType:"json",data:{spaceKey:S},async:R}).done(function(U){Q.loadedWebitems[S]=U})}var A={openDialog:l,closeDialog:y,requestWebItems:K,loadedWebitems:{},loadedSpaces:{},fillWebItemsInDialog:k,filterWebItems:function(Q){return Q},getSpaceKey:function(){return null}};return A}}(AJS.$));Confluence.Dialogs.Events={};Confluence.Dialogs.Events.ITEM_SELECTED="create-dialog.item-selected";
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-blueprint-selector.js' */
(function(b){var a=[];Confluence.Blueprint.Selector={registerSelector:function(c){if(c&&typeof(c)==="function"){a.push(c)}},getSelectors:function(){return a}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-location-panel.js' */
(function(a){Confluence.Dialogs=Confluence.Dialogs||{};Confluence.Dialogs.LocationPanel=function b(s){AJS.bind(Confluence.Dialogs.Events.ITEM_SELECTED,d);var r,n,u,q,m=s.openDialog;var g=a.getJSON(Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces",{promotedSpaceKey:AJS.params.spaceKey,promotedSpacesLimit:10,otherSpacesLimit:1000}).done(function(v){s.loadedSpaces=v;AJS.trigger("create-dialog.data-ready")});var j;var c=null;var k="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post";function l(w,v){var x=u.find(".template-select-container");x.addClass("loading");v.requestWebItems(w).done(function(y){v.fillWebItemsInDialog(false)}).fail(function(){Confluence.sessionFail&&Confluence.sessionFail()})}s.openDialog=function(w){var v=m(w);u=v.popup.element;var x=u.find(".create-dialog-body").prepend(Confluence.Templates.Blueprints.createDialogLocationPanel({}));q=x.find("#create-dialog-parent-container");j=x.find(".space-select");g.done(function(){var z=s.loadedSpaces,y=z.promotedSpaces.spaces[0]||z.otherSpaces.spaces[0];o(z,u);if(!r){r=s.requestWebItems(y.id)}if(!n){n=f(y.id)}r.done(function(C){if(!u.options.showStepOne){s.fillWebItemsInDialog(false)}u.options.updateHeight&&v.updateHeight();try{var A=a._data(document).events.keydown;var F=A.length;if(F<2){return}var B=A[F-1].handler;var E=A[F-2].handler;if(B===E){A.pop();AJS.log("Create Dialog - Removed duplicated keydown listener")}else{AJS.log("Create Dialog - AUI-1322 is fixed, remove this code!")}}catch(D){AJS.log("Error attempting to removed doubled keypressListener from jQuery")}});n.done(function(A){e(A,u)})});u.find(".create-dialog-location-bar input.space-select").change(function(){var y=a(this).val();l(y,v);f(y).done(function(z){e(z,u)})});return v};s.getParentPageId=function(){return c};s.filterWebItems=function(v){if(u.options.location=="child-page"){return _.reject(v,function(w){return w.itemModuleCompleteKey==k})}return v};s.getSpaceKey=function i(){var v=j.val();return v||AJS.Meta.get("space-key")};function d(x,y){if(!q||!q.length){AJS.log("WARNING: refreshLocation should not be getting triggered - $locationDiv is not set");return}var w;if(y){if(y.config){w=y.config}else{if(y.item){w=y.item.data()}}}var A=w&&(w.itemModuleCompleteKey||w.templateId)||null,v=a("#page-restricted-container").length;if(!y.noVisibleItem&&!v&&h(A,w.spaceKey)){var z=Confluence.Blueprint.Util.getParentPageLocation();q.find("span").text(z.parentPageTitle);q.show();c=z.parentPageId}else{q.hide();c=null}}function h(y,x){if(!y){return true}var w=AJS.Meta.get("space-key"),v=x||j.val();if(!w||(w!=v)){return false}if(!Confluence.Blueprint.Util.getParentPageLocation().parentPageTitle){return false}if(AJS.Meta.get("content-type")!="page"){return false}if(y=="com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-blueprint-item"){return false}return(y!=k)}function t(x){var w=[];var y=x.promotedSpaces.spaces;if(y&&y.length){w.push({text:"Suggested spaces",children:y})}var v=x.otherSpaces&&!x.otherSpaces.resultsTruncated&&x.otherSpaces.spaces;if(v&&v.length){w.push({text:"All Spaces",children:v})}return w}function o(C,B){if(C.otherSpaces&&C.otherSpaces.resultsTruncated){var x=B.find(".space-select-control-container .description");x.removeClass("hidden");var y={gravity:"w",delayIn:500,delayOut:0,offset:5};x.find("a").tooltip(y).click(function(){return false})}j.auiSelect2({data:t(C),escapeMarkup:function(D){return D},width:"270px",containerCssClass:"select2-space-select",formatResult:function(D,E,F){E.attr("title",a("<div/>").html(D.text).text());return a.fn.select2.defaults.formatResult.apply(this,arguments)},openOnEnter:false});var w=j.data("select2");w.data(C.promotedSpaces.spaces[0]||C.otherSpaces.spaces[0]);var z=50;var v=w.opts.populateResults;w.opts.populateResults=function(D,E,F){var H=false;var G=E;if(E[1]&&E[1].children&&E[1].children.length>z){G=[];a(E).each2(function(){G.push(a.extend(true,{},this))});G[1].children=G[1].children.slice(0,z);G[1].children.push({text:"Type to find more spaces"});H=true}v.call(w,D,G,F);H&&E[1].children.pop()};var A=B.find(".select2-space-select .select2-input");if(A.length&&"placeholder" in A[0]){A.attr("placeholder","Filter spaces"+" ...")}}function f(v){return a.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces/adminCheck",dataType:"json",data:{spaceKey:v}})}var p=(AJS.Meta.get("confluence-flavour").toLowerCase()!="vanilla");function e(z,y){var v=z,B=y.find(".add-remove-customise-templates-trigger");if(!v&&p){B.remove();return}var A=Confluence.getContextPath(),x;if(v){A+="/pages/templates2/listpagetemplates.action?key="+j.val();x="Add or customise templates for the selected space"}else{A+="/plugins/servlet/upm/marketplace/featured?category=Blueprints";x="Find more content you can create"}var w=Confluence.Templates.Blueprints.customiseTemplatesLink({linkUrl:A,linkText:x});if(B.length){B.replaceWith(w)}else{y.find(".dialog-button-panel:first").prepend(w)}}}}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-content.js' */
AJS.toInit(function(e){Confluence.Blueprint.Dialog=Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/blueprints/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.helpLink,headingText:"Create"});var b=e("#create-page-button"),a=false;if(!b.length){return}Confluence.Dialogs.LocationPanel(Confluence.Blueprint.Dialog);b.click(function(f){if(c(f)){Confluence.Blueprint.Dialog.openDialog();return false}}).mousedown(function(g){var f=g.which||g.button;if(e.browser.mozilla&&f==2||f==3){f=0}a=f!==0&&f!==1||g.ctrlKey||g.altKey||g.shiftKey||g.metaKey});d(b);e(document).on("click",".create-child-page-link",function(){Confluence.Blueprint.Dialog.openDialog({location:"child-page"});return false});e("#addPageLink, #addBlogLink, .acs-pagetree-create-link").hide();function c(g){if(!a){return true}a=false;var f=e(g.target).closest("a").attr("href");if(!f||f.indexOf("createpage.action")==-1){return true}return false}function d(f){var h=AJS.Meta.get("space-key"),k=AJS.Meta.get("content-type"),j=AJS.Meta.get("content-id")||AJS.Meta.get("page-id"),i=AJS.contextPath()+"/pages/createpage.action",g;if(h){if(k=="page"){g=i+"?"+e.param({spaceKey:h,fromPageId:j})}else{g=i+"?"+e.param({spaceKey:h})}f.attr("href",g)}else{f.attr("href","#")}}});AJS.bind("shortcuts-loaded.keyboardshortcuts",function(b,a){AJS.$.each(a.shortcuts,function(d,c){if(c.param=="#createPageLink"){a.shortcuts.splice(d,1);return false}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-launcher.js' */
(function(){function a(d,c,e){Confluence.Blueprint.Dialog.requestWebItems(d,c).done(function(f){var g=Confluence.Blueprint.Dialog.loadedWebitems[d];if(_.isEmpty(g)){AJS.log("create-from-template-macro: No Create dialog web items found for spaceKey >"+d+"<");return}e(f,g)}).fail(function(){AJS.log("create-from-template-macro: requestWebItems call for spaceKey >"+d+"< failed")})}function b(){var c={};AJS.$("#create-dialog-init-params div").each(function(){c[$(this).data("key")]=$(this).data("value")});return c}AJS.toInit(function(){Confluence.Blueprint.Dialog.launch=function(d){if(!_.isObject(d)){throw new Error("Confluence.Blueprint.Dialog.launch called with no options")}var f=d.spaceKey,h=d.contentBlueprintId,e=d.templateId,g=d.title;if(f){var c=Confluence.Blueprint.Dialog.openDialog({showDialog:false,updateHeight:false,showStepOne:true,initContext:b()});a(f,true,function(l,m){var j=_.find(m,function(n){if(h){return n.contentBlueprintId==h}return n.templateId==e});if(!j){AJS.log("create-from-template-macro: No Create dialog web item found for contentBlueprintId >"+h+"< and templateId >"+e+"<");return}var k=j.itemModuleCompleteKey;j=$.extend({},j);j.title=g;j.spaceKey=""+f;AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{config:j});Confluence.Blueprint.fireWizard(l,j,c);c.removeBackButton();var i=j.howToUseTemplate&&!j.skipHowToUse;if(i||Confluence.Blueprint.hasWizard(k,j)){c.show()}})}else{Confluence.Blueprint.Dialog.openDialog({initContext:b()})}}});AJS.getWindowQueryParams=function(){var h={};if(window.location.search.length>1){var c=window.location.search.substr(1).split("&");for(var e=0;e<c.length;e++){var g=c[e].split("=");var d=unescape(g[0]);var f=g.length>1?unescape(g[1]):"";h[d]=f}}return h};AJS.toInit(function(){var e=AJS.getWindowQueryParams();var d=e.createDialogSpaceKey;if(!e.createDialog&&!d){return}var c=e.createDialogBlueprintKey;if(d&&c){a(d,false,function(g,h){var f=_.find(h,function(i){return i.blueprintModuleCompleteKey==c});if(f){e.createDialogBlueprintId=f.contentBlueprintId}else{AJS.log("No blueprint found with key: "+c)}});delete e.createDialogBlueprintKey}if(d&&!e.createDialogBlueprintId&&!e.createDialogTemplateId){AJS.log("Confluence.Blueprint.Dialog.launch triggered with incorrect options - please check the URL query: "+window.location.search);return}Confluence.Blueprint.Dialog.launch({spaceKey:d,contentBlueprintId:e.createDialogBlueprintId,templateId:e.createDialogTemplateId})})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-how-to-use.js' */
(function($){function markHowToUseVisited(contentBlueprintId,skipHowToUse){AJS.log("blueprint-how-to: marking skipHowToUse for "+contentBlueprintId+", "+skipHowToUse);var url=Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/skip-how-to-use";AJS.safe.post(url,{contentBlueprintId:contentBlueprintId,skip:skipHowToUse}).done(function(){AJS.log("blueprint-how-to: Saved skipHowToUse for "+contentBlueprintId+", "+skipHowToUse)}).fail(function(){AJS.log("blueprint-how-to: FAILED SAVE skipHowToUse for "+contentBlueprintId+", "+skipHowToUse)})}function showHowToUsePage(createDialog,data,callback){AJS.log("blueprint-how-to: showing how-to-use page");createDialog.addPage("how-to-use-blueprint-page");$(".dialog-page-body.how-to-use-blueprint-page").attr("data-content-blueprint-id",data.contentBlueprintId).attr("data-blueprint-key",data.blueprintModuleCompleteKey);var page=createDialog.getPage(createDialog.curpage);var pageHeader="Let\u2019s get started";page.addHeader(pageHeader);var panelContents=eval(data.howToUseTemplate+"()");page.addPanel("how-to-panel",panelContents);createDialog.addBackButton(page);createDialog.addButtonPanel(page,callback,!data.wizard,"how-to-button-panel");if(!AJS.Meta.get("remote-user")){return}function skipHowToUseChanged(){var skip=$(this).prop("checked");if(skip){createDialog.blueprintHowTosSkipped=createDialog.blueprintHowTosSkipped||{};createDialog.blueprintHowTosSkipped[data.contentBlueprintId]=true}else{delete createDialog.blueprintHowTosSkipped[data.contentBlueprintId]}markHowToUseVisited(data.contentBlueprintId,skip)}page.buttonpanel.append(Confluence.Templates.Blueprints.howToUseSkipCheckbox());var isAlreadySkipped=!!(createDialog.blueprintHowTosSkipped&&createDialog.blueprintHowTosSkipped[data.contentBlueprintId]);page.buttonpanel.find("#dont-show-how-to-use").change(skipHowToUseChanged).prop("checked",isAlreadySkipped)}Confluence.Blueprint.HowToUse={check:function(createDialog,config,callback){AJS.log("blueprint-how-to: checking status and showing How-to-Use page if needed");if(!config.skipHowToUse){showHowToUsePage(createDialog,config,callback)}else{callback()}},notifyCancel:function(createDialog){AJS.log("blueprint-how-to: cancel notified");if(createDialog.blueprintHowTosSkipped){_.each(createDialog.blueprintHowTosSkipped,function(value,contentBlueprintId){markHowToUseVisited(contentBlueprintId,false)})}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-blank-page-listener.js' */
function submitBlankPage(g,d){var f=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(d.spaceKey);var c=Confluence.Blueprint.Util.getParentPageLocation().parentPageId,a=$("#page-restricted-container").length;if(!a&&c&&d.spaceKey==AJS.Meta.get("space-key")&&AJS.Meta.get("content-type")=="page"){f+="&fromPageId="+encodeURIComponent(c)}if(d.initContext){for(var b in d.initContext){f+="&"+encodeURIComponent(b)+"="+encodeURIComponent(d.initContext[b])}}d.finalUrl=f}Confluence.Blueprint.setDirectCallback("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page",submitBlankPage);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-blank-blog-post-listener.js' */
Confluence.Blueprint.setDirectCallback("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post",function(c,b){var d=Confluence.getContextPath()+"/pages/createblogpost.action?spaceKey="+encodeURIComponent(b.spaceKey);if(b.initContext){for(var a in b.initContext){d+="&"+encodeURIComponent(a)+"="+encodeURIComponent(b.initContext[a])}}b.finalUrl=d});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-content.soy' */
// This file was automatically generated from create-content.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.createDialogBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Blueprints.waitContainer(null, output);
  output.append('<div class="create-dialog-body loadable"><div class="template-select-container">');
  Confluence.Templates.Blueprints.waitContainer(null, output);
  output.append('<div class="template-select-container-body loadable"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.waitContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="wait-container">');
  Confluence.Templates.Blueprints.waitIcon(null, output);
  output.append('<span class="wait-text">', soy.$$escapeHtml("Loading"), '&hellip;</span></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.waitIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<img class="wait-icon" src="', soy.$$escapeHtml(""), '/images/icons/wait.gif">');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-55/Creating+Content"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.spaceHelpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-55/Creating+a+Space"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.spaceOption = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<option value="', soy.$$escapeHtml(opt_data.space.key), '">', soy.$$escapeHtml(opt_data.space.title), '</option>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.templates = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="templates" data-space-key="', soy.$$escapeHtml(opt_data.spaceKey), '" tabindex="100">');
  var webItemList33 = opt_data.webItems;
  var webItemListLen33 = webItemList33.length;
  for (var webItemIndex33 = 0; webItemIndex33 < webItemListLen33; webItemIndex33++) {
    var webItemData33 = webItemList33[webItemIndex33];
    output.append('<li class="template"', (webItemData33.itemModuleCompleteKey) ? 'data-item-module-complete-key="' + soy.$$escapeHtml(webItemData33.itemModuleCompleteKey) + '"' : '', (webItemData33.blueprintModuleCompleteKey) ? 'data-blueprint-module-complete-key="' + soy.$$escapeHtml(webItemData33.blueprintModuleCompleteKey) + '"' : '', (webItemData33.contentBlueprintId) ? 'data-content-blueprint-id="' + soy.$$escapeHtml(webItemData33.contentBlueprintId) + '"' : '', (webItemData33.templateId) ? 'data-template-id="' + soy.$$escapeHtml(webItemData33.templateId) + '"' : '', (webItemData33.createResult) ? 'data-create-result="' + soy.$$escapeHtml(webItemData33.createResult) + '"' : '', (webItemData33.howToUseTemplate) ? 'data-how-to-use-template="' + soy.$$escapeHtml(webItemData33.howToUseTemplate) + '"' : '', '>', (webItemData33.styleClass) ? '<span class="template-preview ' + soy.$$escapeHtml(webItemData33.styleClass) + '"></span>' : '<img class="template-preview" src="' + soy.$$escapeHtml(webItemData33.iconURL) + '">', '<div class="template-meta"><div class="template-name">', soy.$$escapeHtml(webItemData33.name), (webItemData33.isNew) ? '<span class="aui-lozenge aui-lozenge-complete new-flag">' + soy.$$escapeHtml("NEW") + '</span>' : '', '</div><div class="template-description">', soy.$$escapeHtml(webItemData33.description ? webItemData33.description : ''), '</div></div></li>');
  }
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.discoverNewBanner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header id="header" role="banner"><div id="discover-new-banner" class="aui-message hint shadowed closeable"><p class="title">', (opt_data.showLinkToNew) ? (opt_data.newItemsNo == 1) ? AJS.format("\x3cbutton class\x3d\x22aui-button aui-button-link\x22 data-is-filtered\x3d\x22false\x22\x3e{0} new item\x3c/button\x3e has been added",opt_data.newItemsNo) : AJS.format("\x3cbutton class\x3d\x22aui-button aui-button-link\x22 data-is-filtered\x3d\x22false\x22\x3e{0} new items\x3c/button\x3e have been added",opt_data.newItemsNo) : ((opt_data.newItemsNo == 1) ? soy.$$escapeHtml(AJS.format("Showing {0} new added item.",opt_data.newItemsNo)) : soy.$$escapeHtml(AJS.format("Showing {0} new added items.",opt_data.newItemsNo))) + '&nbsp;<button class="aui-button aui-button-link" data-is-filtered="true">' + soy.$$escapeHtml("Show all") + '</button>', '</p><span class="aui-icon aui-icon-small aui-iconfont-info"></span><span class="aui-icon icon-close" role="button" tabindex="0"></span></div></header>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.customiseTemplatesLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="add-remove-customise-templates-trigger button-panel-link" href="', soy.$$escapeHtml(opt_data.linkUrl), '" tabindex="-1">', soy.$$escapeHtml(opt_data.linkText), '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.sidebarIndexPagePopup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h2>', soy.$$escapeHtml(AJS.format("Find your {0} here",opt_data.indexPageTitle)), '</h2><p>', soy.$$escapeHtml(AJS.format("You\x27\x27ve created a {0} page. A shortcut in your sidebar has been added where you can find other {0} in this space.",opt_data.indexPageTitle)), '</p><br/><form><button id="dismiss-index-popup" class="aui-button aui-style" type="submit">', soy.$$escapeHtml("Dismiss"), '</button></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.howToUseSkipCheckbox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="dialog-tip"><input id="dont-show-how-to-use" type="checkbox" name="skipHowToUse"><label for="dont-show-how-to-use" type="checkbox"><span class="checkbox-label">', soy.$$escapeHtml("Don\u2019t show this again"), '</span></label></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.createHiddenField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<input name="', soy.$$escapeHtml(opt_data.name), '" value="', soy.$$escapeHtml(opt_data.value), '" type="hidden"/>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.createDialogInitParams = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.params && opt_data.params.length) {
    output.append('<div id="create-dialog-init-params" class="hidden">');
    var paramList136 = opt_data.params;
    var paramListLen136 = paramList136.length;
    for (var paramIndex136 = 0; paramIndex136 < paramListLen136; paramIndex136++) {
      var paramData136 = paramList136[paramIndex136];
      output.append('<div data-key="', soy.$$escapeHtml(paramData136.key), '" data-value="', soy.$$escapeHtml(paramData136.value), '"></div>');
    }
    output.append('</div>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-dialog-location-panel.soy' */
// This file was automatically generated from create-dialog-location-panel.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.createDialogLocationPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="create-dialog-location-bar"><div><label>', soy.$$escapeHtml("Select space"), '</label><div class="space-select-control-container"><input type="text" class="space-select" tabindex="100"/><div class="description hidden">', soy.$$escapeHtml("Only suggested spaces are being shown."), '&nbsp;<a href="" title="', soy.$$escapeHtml("If the space you want is not in the list, please go to the space and try again. (The site has too many spaces to show all here.)"), '" tabindex="-1">', soy.$$escapeHtml("Why?"), '</a></div></div></div><div id="create-dialog-parent-container">', soy.$$escapeHtml("Parent"), ':&nbsp;<span></span></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/promoted.soy' */
// This file was automatically generated from promoted.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.Promoted == 'undefined') { Confluence.Templates.Blueprints.Promoted = {}; }


Confluence.Templates.Blueprints.Promoted.showMore = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="promoted-link-container"><div><button id="promoted-link" class="aui-button aui-button-link">', soy.$$escapeHtml("Show more"), '</button></div></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.Promoted.promoteTemplateLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<button class=\'promoted-template-link aui-button-link aui-button\' data-promoted=\'', soy.$$escapeHtml(opt_data.templatePromoted), '\' title=\'', soy.$$escapeHtml("Promoted templates display at the top of the Create dialog. Unpromoted blueprints and templates will be collapsed below it."), '\'>', (opt_data.templatePromoted) ? soy.$$escapeHtml("Unpromote") : soy.$$escapeHtml("Promote"), '</button>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.Promoted.middot = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'web-item-operations-divider\'>&nbsp;&middot;</span>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/index-page.soy' */
// This file was automatically generated from index-page.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.IndexPage == 'undefined') { Confluence.Templates.Blueprints.IndexPage = {}; }


Confluence.Templates.Blueprints.IndexPage.createFromTemplateMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="create-from-template"><ac:parameter ac:name="contentBlueprintId">', soy.$$escapeHtml(opt_data.contentBlueprintId), '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter>;<ac:parameter ac:name="buttonLabel">', soy.$$escapeHtml(opt_data.createButtonLabel), '</ac:parameter><ac:parameter ac:name="spaceKey">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="templateName">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter><ac:parameter ac:name="createResult">', soy.$$escapeHtml(opt_data.createResult), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.IndexPage.contentReportTableMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="content-report-table"><ac:parameter ac:name="labels">', soy.$$escapeHtml(opt_data.templateLabel), '</ac:parameter><ac:parameter ac:name="analytics-key">', soy.$$escapeHtml(opt_data.analyticsKey), '</ac:parameter><ac:parameter ac:name="spaces">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="blankTitle">', soy.$$escapeHtml(opt_data.blankTitle), '</ac:parameter><ac:parameter ac:name="blankDescription">', soy.$$escapeHtml(opt_data.blankDescription), '</ac:parameter><ac:parameter ac:name="createButtonLabel">', soy.$$escapeHtml(opt_data.createButtonLabel), '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter><ac:parameter ac:name="contentBlueprintId">', soy.$$escapeHtml(opt_data.contentBlueprintId), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Shared == 'undefined') { Confluence.Templates.Shared = {}; }


Confluence.Templates.Shared.macroXhtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="', soy.$$escapeHtml(opt_data.macroName), '">');
  var paramNameList6 = soy.$$getMapKeys(opt_data.parameters);
  var paramNameListLen6 = paramNameList6.length;
  for (var paramNameIndex6 = 0; paramNameIndex6 < paramNameListLen6; paramNameIndex6++) {
    var paramNameData6 = paramNameList6[paramNameIndex6];
    output.append('<ac:parameter ac:name="', soy.$$escapeHtml(paramNameData6), '">', soy.$$escapeHtml(opt_data.parameters[paramNameData6]), '</ac:parameter>');
  }
  output.append('</ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:tooltip', location = '/includes/js/ajs/tooltip.js' */
(function(a){AJS.Tooltip=function(d){var g=a('<div class="ajs-tooltip-arrow"></div>'),f=a('<div class="ajs-tooltip">'+d.text+"</div>"),c=a('<div class="ajs-tooltip-wrapper"></div>').appendTo(a("body")),e=3,b=function(){var h=d.anchor.offset();c.css({left:h.left+d.anchor.width(),top:h.top+(d.anchor.height()/2)-(c.height()/2)-2});g.css({top:(c.height()/2)-e})};g.addClass("ajs-tooltip-arrow-left");c.append(g).append(f);f.css({width:d.width});d.anchor.bind("mouseover",function(){b();c.fadeIn("fast")});d.anchor.bind("mouseout",function(){c.fadeOut("fast")});d.anchor.click(function(h){h.preventDefault();if(!c.is(":visible")){b();c.fadeIn("fast")}else{c.fadeOut("fast")}})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:keygen', location = '/includes/js/ajs/jquery.keygen.js' */
(function(c,b){c.KeyGenerator=function(){var i=["THE","A","AN","AS","AND","OF","OR"],f={},h=function(k){return k.join("").length},j=function(k){return b.grep(k,function(m,l){return b.inArray(m,i)===-1})},g=function(l){var k="";b.each(l,function(m,n){k+=n.charAt(0)});return k},e=function(m){var l=false;var k;for(k=0;k<m.length;k++){if(d(m[k])){l=true}else{if(l){return m.substring(0,k+1)}}}return m},d=function(k){return k&&k.length===1&&k.search("[AEIOUY]")!==-1};f[199]="C";f[231]="c";f[252]="u";f[251]="u";f[250]="u";f[249]="u";f[233]="e";f[234]="e";f[235]="e";f[232]="e";f[226]="a";f[228]="a";f[224]="a";f[229]="a";f[225]="a";f[239]="i";f[238]="i";f[236]="i";f[237]="i";f[196]="A";f[197]="A";f[201]="E";f[230]="ae";f[198]="Ae";f[244]="o";f[246]="o";f[242]="o";f[243]="o";f[220]="U";f[255]="Y";f[214]="O";f[241]="n";f[209]="N";return{generateKey:function(n,y){y=b.extend({},y);var m=(typeof y.desiredKeyLength=="number")?y.desiredKeyLength:4,u=(typeof y.maxKeyLength=="number")?y.maxKeyLength:Infinity,s=(typeof y.charBlacklistRegex!="undefined"?y.charBlacklistRegex:/[^a-zA-Z0-9]/g);n=b.trim(n);if(!n){return""}var r=[];for(var q=0,x=n.length;q<x;q++){var k=f[n.charCodeAt(q)];r.push(k?k:n[q])}n=r.join("");var t=[];b.each(n.split(/\s+/),function(z,A){if(A){A=A.replace(s,"");A=A.toUpperCase();A.length&&t.push(A)}});if(m&&h(t)>m){t=j(t)}var v;if(t.length==0){v=""}else{if(t.length==1){var l=t[0],o=e(l);if(u<l.length||Math.abs(l.length-m)>=Math.abs(o.length-m)){v=o}else{v=l}}else{var w=h(t),p=g(t);if(u<w||Math.abs(w-m)>=Math.abs(p.length-m)){v=p}else{v=t.join("")}}}if(u&&v.length>u){v=v.substr(0,u)}return v}}};var a=c.KeyGenerator();b.fn.generateFrom=function(g,e){var d={desiredKeyLength:4,maxKeyLength:10,maxNameLength:30,timeoutMS:100,charBlacklistRegex:/[^a-zA-Z0-9]/g,uppercase:true,validationCallback:function(){},errorCallback:function(){}},f=b(this).first(),g=g.first(),e=b.extend({},d,e);(function(){var j=function(){return f.data("autosuggest")!==false},o=function(p){if(p){if(f.data("lastGeneratedValue")!==p){f.data("autosuggest",false)}}else{f.data("autosuggest",true)}},n=function(p){var q=f.val();f.data("lastGeneratedValue",p);f.val(p);return q!=p},h=function(){o(f.val());k()},i=function(p){m(p,h)},m=function(s,q){var p=b(s.target),r;r=function(){l(s);q();if(p.is(":visible")){p.data("checkHook",setTimeout(r,e.timeoutMS))}};if(!p.data("checkHook")){p.data("checkHook",setTimeout(r,0))}},l=function(q){h();var p=b(q.target);clearTimeout(p.data("checkHook"));p.removeData("checkHook")},k=function(){if(j()){var p=a.generateKey(g.val(),{desiredKeyLength:e.desiredKeyLength,maxKeyLength:e.maxKeyLength,charBlacklistRegex:e.charBlacklistRegex});if(n(p)){e.validationCallback()}}};g.attr("maxlength",e.maxNameLength);f.attr("maxlength",e.maxKeyLength);if(e.uppercase){f.css("text-transform","uppercase")}if(document.activeElement&&document.activeElement===g[0]){i({target:g[0]})}g.focus(i);g.blur(l)})();return this}})(window,jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/js/space-welcome-dialog.js' */
Confluence.SpaceBlueprint=Confluence.SpaceBlueprint||{};Confluence.SpaceBlueprint.WelcomeDialog=(function(f){var d;function b(){AJS.Meta.set("show-space-welcome-dialog",false);return f.ajax({type:"post",url:Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces/skip-space-welcome-dialog"})}function a(){b();Confluence.SpaceBlueprint.Dialog.launch();d.remove()}function e(){d.remove()}function g(h){d.addButton("Create",a,"start-creating-space");h.buttonpanel.find(".button-panel-button").removeClass("button-panel-button").addClass("aui-button");h.buttonpanel.find(".start-creating-space").addClass("aui-button-primary");d.addCancel("Close",e)}function c(){d=new AJS.Dialog({width:840,height:449,id:"space-welcome-dialog",closeOnOutsideClick:false});var h="What is a space?";d.addHeader(h);var i=Confluence.Templates.Blueprints.CreateSpace.welcome();d.addPanel("how-to-panel",i);g(d.getPage(0));d.show()}return{isShowWelcomeDialog:function(){return AJS.Meta.getBoolean("show-space-welcome-dialog")},showWelcomeDialog:c}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/js/space-dialog.js' */
Confluence.SpaceBlueprint=Confluence.SpaceBlueprint||{};AJS.toInit(function(c){Confluence.SpaceBlueprint.Dialog=c.extend(Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/space-blueprint/dialog/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.spaceHelpLink,headingText:"Create space"}),{getParentPageId:function(){return undefined},getSpaceKey:function(){return undefined},launch:function(f){var e=f?{showDialog:false,updateHeight:false,showStepOne:true,initContext:{}}:{};if(!f&&Confluence.SpaceBlueprint.WelcomeDialog.isShowWelcomeDialog()){Confluence.SpaceBlueprint.WelcomeDialog.showWelcomeDialog();return}var d=Confluence.SpaceBlueprint.Dialog.openDialog(e);Confluence.SpaceBlueprint.Dialog.requestWebItems().done(function(i){Confluence.SpaceBlueprint.Dialog.fillWebItemsInDialog();var j=Confluence.SpaceBlueprint.Dialog.loadedWebitems[undefined];if(_.isEmpty(j)){AJS.log("Could not load space dialog - web items not found");return}if(!f){return}var h=_.find(j,function(k){return k.itemModuleCompleteKey==f});if(!h){AJS.log("Error finding space blueprint with id"+f);return}Confluence.Blueprint.fireWizard(i,h,d);d.removeBackButton();var g=h.howToUseTemplate&&!h.skipHowToUse;if(g||Confluence.Blueprint.hasWizard(f,h)){d.show()}}).fail(function(){AJS.log("Could not load space dialog - request for web items failed")})}});var a=c('#create-space-button, a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]'),b=c("#create-personal-space-link");if(b.length){b.unbind("click");b.click(function(){Confluence.SpaceBlueprint.Dialog.launch("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-personal-space-item");return false})}if(!a.length){return}c('a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]').unbind("click");a.click(function(){Confluence.SpaceBlueprint.Dialog.launch();return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/soy/space-dialog-wizard-common.soy' */
// This file was automatically generated from space-dialog-wizard-common.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateSpace == 'undefined') { Confluence.Templates.Blueprints.CreateSpace = {}; }


Confluence.Templates.Blueprints.CreateSpace.createSpaceForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form method="post" class="aui common-space-form">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: opt_data.showSpacePermission, fieldErrors: opt_data.fieldErrors, name: opt_data.name, spaceKey: opt_data.spaceKey, spacePermission: opt_data.spacePermission, disableRequiredIcon: true}, output);
  output.append('<input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" /></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<fieldset><div class="field-group"><label for="name">', soy.$$escapeHtml("Space name"), (! opt_data.disableRequiredIcon) ? '<span class="aui-icon icon-required"/>' : '', '</label><input class="text long-field" name="name" autocomplete="off" ', (opt_data.name) ? 'value="' + soy.$$escapeHtml(opt_data.name) + '"' : '', '/>');
  if (opt_data.fieldErrors && opt_data.fieldErrors['name']) {
    var errorList29 = opt_data.fieldErrors['name'];
    var errorListLen29 = errorList29.length;
    for (var errorIndex29 = 0; errorIndex29 < errorListLen29; errorIndex29++) {
      var errorData29 = errorList29[errorIndex29];
      output.append('<div class="error">', soy.$$escapeHtml(errorData29), '</div>');
    }
  } else {
    output.append('<div class="error hidden"></div>');
  }
  output.append('</div><div class="field-group"><label for="spaceKey">', soy.$$escapeHtml("Space key"), (! opt_data.disableRequiredIcon) ? '<span class="aui-icon icon-required"/>' : '', '</label><input class="text long-field" name="spaceKey" ', (opt_data.spaceKey) ? 'value="' + soy.$$escapeHtml(opt_data.spaceKey) + '"' : '', '/><span class="aui-icon aui-icon-small aui-iconfont-help" data-unicode="UTF+E003" data-tooltip="', soy.$$escapeHtml("This unique key is used in your space URL"), '" original-title=""/>');
  if (opt_data.fieldErrors && opt_data.fieldErrors['spaceKey']) {
    var errorList52 = opt_data.fieldErrors['spaceKey'];
    var errorListLen52 = errorList52.length;
    for (var errorIndex52 = 0; errorIndex52 < errorListLen52; errorIndex52++) {
      var errorData52 = errorList52[errorIndex52];
      output.append('<div class="error">', soy.$$escapeHtml(errorData52), '</div>');
    }
  } else {
    output.append('<div class="error hidden"></div>');
  }
  output.append('</div></fieldset>');
  if (opt_data.showSpacePermission) {
    Confluence.Templates.Blueprints.CreateSpace.spaceFormPermissions(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.CreateSpace.createPersonalSpaceForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form method="post" class="aui common-space-form how-to-use-blueprint-page"><h2>', soy.$$escapeHtml("With a personal space, you can..."), '</h2><ol class="howto-steps horizontal"><li class="howto-step"><h3>', soy.$$escapeHtml("Stay organised"), '</h3><p>', soy.$$escapeHtml("Keep your notes, task lists, files and other personal content organised."), '</p></li><li class="howto-step"><h3>', soy.$$escapeHtml("Share news"), '</h3><p>', soy.$$escapeHtml("Use your blog to make announcements, capture ideas and share learnings."), '</p></li><li class="howto-step"><h3>', soy.$$escapeHtml("Introduce yourself"), '</h3><p>', soy.$$escapeHtml("Customise your personal homepage and introduce yourself to the team."), '</p></li></ol></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.CreateSpace.spaceFormPermissions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<fieldset class="group', (opt_data.spacePermission == 'private') ? ' locked' : '', '" id="permissions-group"><div class="checkbox"><input class="checkbox" type="checkbox" id="permission-private" name="spacePermission" value="private"', (opt_data.spacePermission == 'private') ? ' checked="checked"' : '', ' /><label for="permission-private">', soy.$$escapeHtml("Visible only to me"), '</label></div></fieldset>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.CreateSpace.welcome = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="space-types"><li><p>', soy.$$escapeHtml("Team"), '</p></li><li><p>', soy.$$escapeHtml("Project"), '</p></li><li><p>', soy.$$escapeHtml("Department"), '</p></li></ul><div class="space-description"><h1>', soy.$$escapeHtml("A space is a home for all your content"), '</h1><ul><li>', soy.$$escapeHtml("Create as many spaces as you like and use them for teams, projects and departments within your company."), '</p></li><li>', soy.$$escapeHtml("Add documents, files and photos to your space using pages and keep them organised in a hierarchy."), '</p></li><li>', soy.$$escapeHtml("Use the blog on your space to share news and make announcements."), '</p></li></ul></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/js/space-dialog-wizard-common.js' */
AJS.toInit(function(g){var l,j,b,i,f,k,n=100,o={name:g.Deferred().reject(),spaceKey:g.Deferred().reject()};var h={spaceKey:function(){var p=g.Deferred();var q=g.trim(l.val());if(!q){p.reject("You must enter a space key.");o.spaceKey=p;return p.promise()}if(k){AJS.log("Aborting previous space key validation request.");k.abort()}k=g.getJSON(AJS.Confluence.getContextPath()+"/ajax/spaceavailable.action",{key:q}).done(function(r){if(!r.available&&r.message){p.reject(r.message)}else{p.resolve()}k=false});o.spaceKey=p;return p.promise()},name:function(){var p=g.Deferred();if(!g.trim(j.val())){p.reject("You must enter a space name.")}else{p.resolve()}o.name=p;return p.promise()}};function d(s){var r=s[0];if(r.setSelectionRange){var q=s.val().length;r.setSelectionRange(0,q)}else{if(r.createTextRange){var p=r.createTextRange();p.execCommand("SelectAll");p.select()}}}function a(p){if(p){b.removeAttr("disabled")}else{b.attr("disabled","disabled")}}function c(r){var p=r.attr("name");var q=r.siblings(".error");var s=h[p]();s.done(function(){q.text("").addClass("hidden")});s.fail(function(u,t){if(!t){q.text(u).removeClass("hidden")}});s.always(function(){r.attr("data-validated-value",r.val())});return s}function m(p){a(false);l=p.find("input[name='spaceKey']").first();j=p.find("input[name='name']").first();i=l.parent().find(".error");f=j.parent().find(".error");l.generateFrom(j,{uppercase:false,maxNameLength:255,maxKeyLength:255,timeoutMS:n,validationCallback:function(){l.trigger("input")}});function t(u){if(u.state()==="pending"){u.reject("",true)}}function r(){c(g(this));g.when.apply(g,_.values(o)).done(function(){a(true)}).fail(function(v,u){if(!u){a(false)}})}var s=g.debounce(r,250);var q=g.debounce(r,250);j.on("change input",function(){_.each(o,t);s.apply(this,arguments)});l.on("change input",function(){_.each(o,t);k&&k.abort();q.apply(this,arguments)});l.focus(function(){d(l)});p.find("#permission-private").change(function(){g("#permissions-group").toggleClass("locked")})}var e={live:true,gravity:"w",title:"data-tooltip",delayIn:250,delayOut:0};g(".common-space-form .aui-iconfont-help").tooltip(e);Confluence.SpaceBlueprint.CommonWizardBindings={preRender:function(q,p){p.soyRenderContext.atlToken=AJS.Meta.get("atl-token");p.soyRenderContext.showSpacePermission=true},postRender:function(q,p){b=g(".create-dialog-create-button:visible");m(p.$container)},submit:function(q,p){setTimeout(function(){var s=c(l);var r=c(j);g.when(s,r).done(p.validationDeferred.resolve).fail(function(){p.validationDeferred.reject.apply(this,arguments);a(false)})},n+1);p.async=true;return false}};AJS.trigger("blueprint.wizard-register.ready")});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/js/blank-space-dialog-wizard.js' */
AJS.toInit(function(){Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-space-item",function(a){a.on("pre-render.commonPage",Confluence.SpaceBlueprint.CommonWizardBindings.preRender);a.on("post-render.commonPage",Confluence.SpaceBlueprint.CommonWizardBindings.postRender);a.on("submit.commonPage",Confluence.SpaceBlueprint.CommonWizardBindings.submit)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/js/create-personal-space-listener.js' */
AJS.toInit(function(){Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-personal-space-item",function(a){a.assembleSubmissionObject=function(b){return{spaceUserKey:""}};a.getSubmissionRestPath=function(){return"/rest/create-dialog/1.0/space-blueprint/create-personal-space"}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.shortcuts.atlassian-shortcuts-plugin:shortcuts', location = '/js/keycommands.js' */
AJS.bind("initialize.keyboardshortcuts",function(){var D=AJS.$,B=function(F){return(AJS.Data&&AJS.Data.get(F))||AJS.params[F]},A=B("build-number"),E=B("keyboardshortcut-hash");if(!A||!E){throw new Error("build-number and keyboardshortcut-hash must both exist in AJS.Data or AJS.params.")}var C=AJS.contextPath()+"/rest/shortcuts/latest/shortcuts/"+encodeURIComponent(A)+"/"+encodeURIComponent(E);D.getJSON(C,function(H){var F=H.shortcuts;if(!F){throw new Error("Server returned no shortcuts.")}AJS.trigger("shortcuts-loaded.keyboardshortcuts",{shortcuts:F});var I=[];var K={enableContext:function(M){var L=D.grep(F,function(N){return N.context===M});I=I.concat(AJS.whenIType.fromJSON(L,true))}};var G=function(){AJS.trigger("register-contexts.keyboardshortcuts",{shortcutRegistry:K})};G();AJS.bind("add-bindings.keyboardshortcuts",G);var J=function(){D.each(I,function(){this.unbind()});I=[]};AJS.bind("remove-bindings.keyboardshortcuts",J)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'js/confluence-keyboard-shortcuts.js' */
AJS.toInit(function($) {
    AJS.debug("confluence-keyboard-shortcuts initialising");

    // CGP-151/CONFDEV-811 - Skip this if you are in the Page Gadget
    if (AJS.PageGadget || (window.parent.AJS && window.parent.AJS.PageGadget)) {
        AJS.debug("Inside the Page Gadget. Skipping keyboard shortcuts");
        return;
    }

    Confluence.KeyboardShortcuts.enabled = AJS.Meta.getBoolean('use-keyboard-shortcuts');

    AJS.bind("shortcuts-loaded.keyboardshortcuts", function (e, data) {
        Confluence.KeyboardShortcuts.shortcuts = data.shortcuts;
        $("#keyboard-shortcuts-link").click(Confluence.KeyboardShortcuts.openDialog);
    });

    AJS.bind("register-contexts.keyboardshortcuts", function(e, data){

        // Only bind the shortcuts for contexts if the user has the preference set
        if (!Confluence.KeyboardShortcuts.enabled) {
            return;
        }
        // Here we bind to register-contexts.keyboardshortcuts so that we can select which
        // keyboard shortcut contexts should be enabled. We use jQuery selectors to determine
        // which keyboard shortcut contexts are applicable to a page.

        var shortcutRegistry = data.shortcutRegistry;
        shortcutRegistry.enableContext("global");
        
        //See CONFDEV-12510 for why we need to check that Confluence.Editor.isVisible exists.
        var editorVisible = Confluence && Confluence.Editor && Confluence.Editor.isVisible && Confluence.Editor.isVisible();
        $("#action-menu-link").length && !editorVisible && shortcutRegistry.enableContext("viewcontent");
        $("#viewPageLink").length && shortcutRegistry.enableContext("viewinfo");

        if (editorVisible) {
            shortcutRegistry.enableContext("editor");

            // tinymce shortcuts are added through the tinymce apis
            var ed = tinyMCE.activeEditor,
                editorForm = $("#rte").closest("form");

            $.each(Confluence.KeyboardShortcuts.shortcuts, function (i, shortcut) {
                if (shortcut.context.indexOf("tinymce") != 0) return;

                var operation = shortcut.op,
                    param = shortcut.param;
                $.each(shortcut.keys, function () {
                    var shortcutKey = this,
                        shortcutFunc;
                    if (operation == "click") {
                        shortcutFunc = function() { $(param).click(); };
                    }
                    else if (operation == "execute") {
                        shortcutFunc = param;
                    }
                    if (shortcutFunc) {
                        if ($.isArray(shortcutKey)) {
                            shortcutKey = shortcutKey.join(",");
                        }
                        AJS.debug("Adding shortcut for " + shortcutKey);
                        ed.addShortcut(shortcutKey.toLowerCase(), "", shortcutFunc);

                        // CONFDEV-3711: Binds a keydown event to the form input elements to capture the editor
                        // save and preview shortcuts
                        if (shortcut.context == "tinymce.actions" && shortcutKey.indexOf("+") != -1) {
                            AJS.debug("Binding shortcut on inputs too for " + shortcutKey);
                            editorForm.delegate(":input", "keydown", function(event) {
                                var code = (event.keyCode ? event.keyCode : event.which);
                                var shortcutarray = shortcutKey.split("+");
                                // Parses the shortcut and checks if correct keys are present.
                                shortcutarray = $.map(shortcutarray, function(key) {
                                    return (((key == "Ctrl") && (event.metaKey)) || ((key == "Shift") && (event.shiftKey)) || (code == key.charCodeAt(0)) ? null : key);
                                });
                                if (!(shortcutarray.length)) {
                                    shortcutFunc();
                                    event.preventDefault();
                                }
                            });
                        }

                    } else {
                        AJS.logError("ERROR: unkown editor shortcut key operation " + operation + " for shortcut " + shortcutKey);
                    }
                });
            });
        }

        Confluence.KeyboardShortcuts.ready = true;
    });

    function initShortcuts() {
        // AKS requires that we load the I18n resources before we ask to initialize the keyboard shortcuts
        AJS.I18n.get(["com.atlassian.confluence.keyboardshortcuts","com.atlassian.plugins.editor"], function() {
            AJS.trigger("initialize.keyboardshortcuts");
        }, function() {
            AJS.logError("There was an error loading the keyboard shortcuts, please try again");
        });
    }

    // Why is this if statment needed? It seems that when we are ready to do an import, the pluginsystem is up, and we
    // pull down the super batch. This superbatch contains this code and it fires off a request to Confluence to get the
    // i18n resources. This request gets redirected to 'selectsetupstep.action' which due to the fact that the import is
    // running thinks we are done, and redirects to 'finishsetup.action' and things blow up.
    if (typeof Confluence.getContextPath() != "undefined") {
        if ($("#rte").length) { //If there is an editor on the page wait for it to load before initializing shortcuts
            AJS.bind("init.rte", function() {
                initShortcuts();
            });
        } else {
            initShortcuts();
        }
    }

    //CONFDEV-4913 - Disable shortcuts after we click add comment
    $("#add-comment-menu-link, #add-comment-rte").click(function() {
        AJS.trigger("remove-bindings.keyboardshortcuts");
    });

});

// Add functions that are referenced from the execute shortcut operations in atlassian-plugin.xml here
Confluence.KeyboardShortcuts = {
    Editor: [], // hack for jira issue plugin, remove once the plugin has been updated
    enabled: false,
    ready: false,
    dialog: null,
    closeDialog: function() {
        Confluence.KeyboardShortcuts.getDialog().then(function(dialog) {
            dialog.hide();
        });
        return false;
    },
    openDialog: function() {
        // remove "interactive" class from menu item. with "interactive" class, the menu does not close when clicking
        // on a menu item. "interactive" class added by help-analytics.js from atlassian-nav-links-plugin-3.2.12
        $(this).removeClass("interactive");
        Confluence.KeyboardShortcuts.getDialog().then(function(dialog) {
            dialog.show();
        });
        return false;
    }
};


} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'js/shortcut-dialog.js' */
(function($) {

var popup;

Confluence.KeyboardShortcuts.getDialog = function () {
    var dfr = $.Deferred();

    if (popup) {
        return dfr.resolve(popup);
    }

    var shortcuts = Confluence.KeyboardShortcuts.shortcuts,

    cancel = function() {
        AJS.debug("Hiding Shortcuts help");
        popup.hide();
        return false;
    },

    //Same technique as tinyMCE.
    isMac = navigator.platform.indexOf('Mac') != -1,

    //Construct the key sequence diagram shown on the keyboard shortcuts help dialog
    //e.g. shortcut.keys = [["g", "d"]]
    makeKeySequence = function (shortcut) {
        var sequenceSpan = AJS("span").addClass("item-action");
        // TODO - may need "or" in future if keys has length > 1
        var keySequence = shortcut.keys[0];

        for(var i = 0; i < keySequence.length; i++) {
            if(i > 0)
                sequenceSpan.append(makeKbdSeparator("then"));

            makeKeyCombo(keySequence[i], sequenceSpan);
        }

        return sequenceSpan;
    },

    makeKeyCombo = function(combo, sequence) {
        var keys = combo.split("+");

        for (var i = 0; i < keys.length; i++) {
            if (i > 0)
                sequence.append(makeKbdSeparator("+"));

            makeKeyAlternatives(keys[i], sequence);
        }
    },

    makeKeyAlternatives = function(key, sequence) {
        var keys = key.split("..");

        for (var i = 0; i < keys.length; i++) {
            if (i > 0)
                sequence.append(makeKbdSeparator("to"));

            sequence.append(makeKbd(keys[i]));
        }
    },

    makeKbd = function(key) {
        var kbd = AJS("kbd");

        switch (key){
            case "Shift":
            case "Sh":
                kbd.text("Shift");
                kbd.addClass("modifier-key");
                break;
            case "Ctrl":
                var text = isMac ? '\u2318' : "Ctrl";  //Apple command key
                kbd.text(text);
                kbd.addClass("modifier-key");
                break;
            case "Tab":
                kbd.text("Tab");
                kbd.addClass("modifier-key");
                break;
            case "Alt":
                kbd.text("Alt");
                kbd.addClass("modifier-key");
                break;
            default:
                kbd.text(key);
                kbd.addClass("regular-key");
        }

        return kbd;
    },

    makeKbdSeparator = function(text) {
        var separator = AJS("span");
        separator.text(text);
        separator.addClass("key-separator");
        return separator;
    },

    makeShortcutModule = function(title, contexts, shortcuts) {
        var module = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutModule({title: title}));
        var list = module.find("ul");

        for (var i = 0; i < shortcuts.length; i++) {
            var shortcut = shortcuts[i];
            if (shortcut.hidden) {
                continue;
            }
            if($.inArray(shortcut.context, contexts) != -1) {
                var shortcutItem = AJS("li").addClass("item-details");
                // CONF-24450: Try to use the description property from the shortcut,
                // if that doesn't work then fall back to resolving the i18n property client-side.
                var text = shortcut.description || AJS.I18n.getText(shortcut.descKey);
                var desc = AJS("strong").addClass("item-description").append(text);
                shortcutItem.append(desc);
                shortcutItem.append(makeKeySequence(shortcut));
                list.append(shortcutItem);
            }
        }

        return module;
    },

    makeGeneralShortcutsMenu = function() {
        var generalShortcutsMenuPane = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel({panelId: "general-shortcuts-panel"}));
        var generalShortcutsMenu = $(generalShortcutsMenuPane).children(".shortcutsmenu");

        if (AJS.Meta.get("remote-user")) {
            generalShortcutsMenuPane.find(".keyboard-shortcut-dialog-panel-header").append(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox());
        }

        generalShortcutsMenu.append(makeShortcutModule("Global Shortcuts", ["global"], shortcuts));
        generalShortcutsMenu.append(makeShortcutModule("Page \/ Blog Post Actions", ["viewcontent", "viewinfo"], shortcuts));

        return generalShortcutsMenuPane;
    },

    makeEditorShortcutsMenu = function() {
        var editorShortcutsMenuPane = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel({panelId: "editor-shortcuts-panel"}));
        var editorShortcutsMenu = $(editorShortcutsMenuPane).children(".shortcutsmenu");

        editorShortcutsMenu.append(makeShortcutModule("Block Formatting", ["tinymce.block"], shortcuts));
        editorShortcutsMenu.append(makeShortcutModule("Rich Formatting", ["tinymce.rich"], shortcuts));
        editorShortcutsMenu.append(makeShortcutModule("Editing Actions", ["tinymce.actions"], shortcuts));

        return editorShortcutsMenuPane;
    },

    toggleEnabled = function (event) {
        var enable = $(this).prop('checked');
        // TODO - after 3.4-m4 and blitz - error handling architecture
        AJS.$.ajax(
            {
                type: "POST",
                url: Confluence.getContextPath() + "/rest/confluenceshortcuts/latest/enabled",
                data: $.toJSON({
                    enabled: enable
                }),
                dataType: "json",
                contentType: "application/json"
            }).done(function() {
                Confluence.KeyboardShortcuts.enabled = enable;
                Confluence.KeyboardShortcuts.ready = false;
                if (enable) {
                    AJS.trigger("add-bindings.keyboardshortcuts");
                } else {
                    AJS.trigger("remove-bindings.keyboardshortcuts");
                }
            });
    },

    initialiseEnableShortcutsCheckbox = function () {
        $('#keyboard-shortcut-enabled-checkbox')
            .prop('checked', Confluence.KeyboardShortcuts.enabled)
            .click(toggleEnabled);
    };

    popup = AJS.ConfluenceDialog({
        width: 950,
        height: 660,
        id: "keyboard-shortcuts-dialog"
    });

    popup.addHeader("Keyboard Shortcuts");
    popup.addPanel("General", makeGeneralShortcutsMenu());
    popup.addPanel("Editor", makeEditorShortcutsMenu());
    popup.addCancel("Close", cancel);
    // CONFDEV-12853: Add help link via prepend() instead of append() to prevent FF display issue
    popup.popup.element.find(".dialog-title").prepend(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutHelpLink());
    AJS.trigger("keyboard-shortcut-dialog-ready", popup);

    // If you have an editor visible automatically open the Editor tab.
    if (Confluence && Confluence.Editor && Confluence.Editor.isVisible()) {
        popup.overrideLastTab();
        popup.gotoPanel(1);
    } else {
        popup.gotoPanel(0);
    }

    dfr.resolve(popup);
    initialiseEnableShortcutsCheckbox();
    return dfr;
};

}(AJS.$));

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'js/shortcut-dialog-tab-autoformat.js' */
/*
Adds the "Editor Autoformatting" tab to the Keyboard Shortcuts help dialog
 */
AJS.toInit(function($) {
    var templates = Confluence.Templates.KeyboardShortcutsDialog.Autoformat,

    buildShortcutModule = function(title, context, itemBuilder) {
        var module = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutModule({title: title})),
        list = module.find("ul"),
        items = getMenuItemsForContext(context);

        for (var i = 0, ii = items.length; i < ii; i++) {
            list.append (
                itemBuilder(items[i])
            );
        }

        return module;       
    },

    buildStandardShortcutModule = function(title, context, itemTemplate) {
        return buildShortcutModule(
                title,
                context,
                function (item) {
                    return itemTemplate({output: item.description, type: item.action});
                }
        );
    },

    buildEmoticonModule = function(title, context) {
        var emoticonResourceUrl = AJS.params.staticResourceUrlPrefix + "/images/icons/emoticons/";
        return buildShortcutModule(
                title,
                context,
                function (item) {
                    return templates.emoticonHelpItem(
                            {src: emoticonResourceUrl + item.img, type: item.action}
                    );
                }
        );
    },

    getMenuItemsForContext = function(context) {
        return $.grep(Confluence.KeyboardShortcuts.Autoformat, function(e) {
            return e.context == context;
        });
    },

    buildHelpPanel = function() {
        var autoformatHelpPanel = $(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel({panelId: 'autoformat-shortcuts-panel'})),
        autoformatHelpPanelMenu = autoformatHelpPanel.children(".shortcutsmenu");

        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule(
                        "Font Formatting",
                        "autoformat.font_formatting",
                        templates.simpleHelpItem
                )
        );
        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule("Autocomplete",
                        "autoformat.autocomplete",
                        templates.keyboardShortcutItem
                )
        );
        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule(
                        "Tables",
                        "autoformat.tables",
                        templates.tableHelpItem
                )
        );
        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule(
                        "Styles",
                        "autoformat.styles",
                        templates.styleHelpItem
                ).addClass("styles-module")
        );
        autoformatHelpPanelMenu.append(
                buildEmoticonModule(
                        "Emoticons",
                        "autoformat.emoticons"
                )
        );
        autoformatHelpPanelMenu.append(
                buildStandardShortcutModule(
                        "Lists",
                        "autoformat.lists",
                        templates.simpleHelpItem
                )
        );

        if (AJS.Meta.get("remote-user"))
        {
            autoformatHelpPanel.find(".keyboard-shortcut-dialog-panel-header").append(
                templates.configureAutocomplete(
                        {href: Confluence.getContextPath() + "/users/viewmyeditorsettings.action"}
                )
            );
        }

        return autoformatHelpPanel;
    };

    AJS.bind("keyboard-shortcut-dialog-ready", function(e, popup) {
        popup.addPanel("Editor Autoformatting", buildHelpPanel());
    });

    Confluence.KeyboardShortcuts.Autoformat = [
        {
            context: "autoformat.font_formatting",
            description: templates.boldDescription(),
            action: "*Bold*"
        },
        {
            context: "autoformat.font_formatting",
            description: templates.underlineDescription(),
            action: "+Underline+"
        },
        {
            context: "autoformat.font_formatting",
            description: templates.italicDescription(),
            action: "_Italic_"
        },
        {
            context: "autoformat.font_formatting",
            description: templates.monospaceDescription(),
            action: "{{Monospace}}"
        },
        {
            context: "autoformat.tables",
            description: templates.tableDescription(),
            action: "||||| + enter"
        },
        {
            context: "autoformat.tables",
            description: templates.tableWithHeadingsDiscriptions(),
            action: "||heading||heading||"
        },
        {
            context: "autoformat.styles",
            description: templates.h1Description(),
            action: "h1. Heading"
        },
        {
            context: "autoformat.styles",
            description: templates.h3Description(),
            action: "h3. Heading"
        },
        {
            context: "autoformat.styles",
            description: templates.bqDescription(),
            action: "bq. Quote"
        },
        {
            context: "autoformat.emoticons",
            img: "check.png",
            action: "(\/)"
        },
        {
            context: "autoformat.emoticons",
            img: "smile.png",
            action: ":)"
        },
        {
            context: "autoformat.lists",
            description: templates.numberedListDescription(),
            action: "# list"
        },
        {
            context: "autoformat.lists",
            description: templates.bulletedListDescription(),
            action: "* bullets"
        },
        {
            context: "autoformat.lists",
            description: templates.inlineTaskListDescription(),
            action: "[] task"
        },
        {
            context: "autoformat.autocomplete",
            description: "Image\/Media",
            action: "!"
        },
        {
            context: "autoformat.autocomplete",
            description: "Link",
            action: "["
        },
        {
            context: "autoformat.autocomplete",
            description: "Macro",
            action: "{"
        }
    ];
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'templates/shortcut-dialog-tab-autoformat.soy' */
// This file was automatically generated from shortcut-dialog-tab-autoformat.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.KeyboardShortcutsDialog == 'undefined') { Confluence.Templates.KeyboardShortcutsDialog = {}; }
if (typeof Confluence.Templates.KeyboardShortcutsDialog.Autoformat == 'undefined') { Confluence.Templates.KeyboardShortcutsDialog.Autoformat = {}; }


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.configureAutocomplete = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="keyboard-shortcut-autocomplete-message">', soy.$$escapeHtml("To configure Autocomplete,"), ' <a target="_blank" href=', soy.$$escapeHtml(opt_data.href), '>', soy.$$escapeHtml("go to your editor settings"), '</a></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="item-details"><span class="item-description wiki-content">', opt_data.output, '</span><span class="', opt_data.actionClass, ' item-action">', opt_data.type, '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.simpleHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: ''}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.tableHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'table-action'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.styleHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'style-action'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.keyboardShortcutItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: soy.$$escapeHtml(opt_data.output), type: '<kbd class="regular-key">' + soy.$$escapeHtml(opt_data.type) + '</kbd>', actionClass: ''}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.emoticonHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.simpleHelpItem({output: '<img src=' + soy.$$escapeHtml(opt_data.src) + '></img>', type: opt_data.type}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.boldDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<b>', soy.$$escapeHtml("Bold"), '</b> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.underlineDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span style="text-decoration: underline;">', soy.$$escapeHtml("Underline"), '</span> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.italicDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<em>', soy.$$escapeHtml("Italic"), '</em> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.monospaceDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<code>', soy.$$escapeHtml("Monospace"), '</code> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.tableDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="confluenceTable"><tbody><tr><td class="confluenceTd">', soy.$$escapeHtml("first cell"), '</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr></tbody></table>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.tableWithHeadingsDiscriptions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="confluenceTable"><tbody><tr><th class="confluenceTh">', soy.$$escapeHtml("heading"), '</th><th class="confluenceTh">', soy.$$escapeHtml("heading"), '</th></tr><tr><td class="confluenceTd">&#8203;</td><td class="confluenceTd">&#8203;</td></tr></tbody></table>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.h1Description = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("Heading"), '</h1>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.h3Description = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h3>', soy.$$escapeHtml("Heading"), '</h3>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.bqDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<blockquote>', soy.$$escapeHtml("Quote"), '</blockquote>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.numberedListDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol><li>', soy.$$escapeHtml("list"), '</li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.bulletedListDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul><li>', soy.$$escapeHtml("bullets"), '</li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.inlineTaskListDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="inline-task-list"><li>task</li></ul>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'templates/help-dialog.soy' */
// This file was automatically generated from help-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.KeyboardShortcutsDialog == 'undefined') { Confluence.Templates.KeyboardShortcutsDialog = {}; }


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutModule = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="module"><div class="mod-header"><h3>', soy.$$escapeHtml(opt_data.title), '</h3></div><div class="mod-content"><ul class="mod-item"></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutHelpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.customHelpLink({href: soy.$$escapeHtml("https://docs.atlassian.com/confluence/docs-55/Keyboard+Shortcuts"), text: soy.$$escapeHtml("View All Shortcuts")}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form name="shortcut-settings" id="shortcut-settings-form"><input type="checkbox" name="enabled" id="keyboard-shortcut-enabled-checkbox"><label for="keyboard-shortcut-enabled-checkbox">', soy.$$escapeHtml("Enable General Shortcuts"), '</label></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id=', soy.$$escapeHtml(opt_data.panelId), '><div class="keyboard-shortcut-dialog-panel-header"></div><div class="shortcutsmenu"></div><div class="keyboard-shortcut-dialog-panel-footer"></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs-underscorejs', location = 'js-vendor/underscorejs/underscore.js' */
(function(){var W=this;var K=W._;var d={};var c=Array.prototype,F=Object.prototype,R=Function.prototype;var h=c.push,O=c.slice,Y=c.concat,D=F.toString,J=F.hasOwnProperty;var l=c.forEach,Q=c.map,e=c.reduce,C=c.reduceRight,B=c.filter,b=c.every,P=c.some,N=c.indexOf,L=c.lastIndexOf,U=Array.isArray,E=Object.keys,f=R.bind;var m=function(n){if(n instanceof m){return n}if(!(this instanceof m)){return new m(n)}this._wrapped=n};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=m}exports._=m}else{W._=m}m.VERSION="1.5.2";var i=m.each=m.forEach=function(s,p,o){if(s==null){return }if(l&&s.forEach===l){s.forEach(p,o)}else{if(s.length===+s.length){for(var n=0,r=s.length;n<r;n++){if(p.call(o,s[n],n,s)===d){return }}}else{var q=m.keys(s);for(var n=0,r=q.length;n<r;n++){if(p.call(o,s[q[n]],q[n],s)===d){return }}}}};m.map=m.collect=function(q,p,o){var n=[];if(q==null){return n}if(Q&&q.map===Q){return q.map(p,o)}i(q,function(t,r,s){n.push(p.call(o,t,r,s))});return n};var G="Reduce of empty array with no initial value";m.reduce=m.foldl=m.inject=function(r,q,n,p){var o=arguments.length>2;if(r==null){r=[]}if(e&&r.reduce===e){if(p){q=m.bind(q,p)}return o?r.reduce(q,n):r.reduce(q)}i(r,function(u,s,t){if(!o){n=u;o=true}else{n=q.call(p,n,u,s,t)}});if(!o){throw new TypeError(G)}return n};m.reduceRight=m.foldr=function(t,q,n,p){var o=arguments.length>2;if(t==null){t=[]}if(C&&t.reduceRight===C){if(p){q=m.bind(q,p)}return o?t.reduceRight(q,n):t.reduceRight(q)}var s=t.length;if(s!==+s){var r=m.keys(t);s=r.length}i(t,function(w,u,v){u=r?r[--s]:--s;if(!o){n=t[u];o=true}else{n=q.call(p,n,t[u],u,v)}});if(!o){throw new TypeError(G)}return n};m.find=m.detect=function(q,p,o){var n;a(q,function(t,r,s){if(p.call(o,t,r,s)){n=t;return true}});return n};m.filter=m.select=function(q,p,o){var n=[];if(q==null){return n}if(B&&q.filter===B){return q.filter(p,o)}i(q,function(t,r,s){if(p.call(o,t,r,s)){n.push(t)}});return n};m.reject=function(p,o,n){return m.filter(p,function(s,q,r){return !o.call(n,s,q,r)},n)};m.every=m.all=function(q,p,o){p||(p=m.identity);var n=true;if(q==null){return n}if(b&&q.every===b){return q.every(p,o)}i(q,function(t,r,s){if(!(n=n&&p.call(o,t,r,s))){return d}});return !!n};var a=m.some=m.any=function(q,p,o){p||(p=m.identity);var n=false;if(q==null){return n}if(P&&q.some===P){return q.some(p,o)}i(q,function(t,r,s){if(n||(n=p.call(o,t,r,s))){return d}});return !!n};m.contains=m.include=function(o,n){if(o==null){return false}if(N&&o.indexOf===N){return o.indexOf(n)!=-1}return a(o,function(p){return p===n})};m.invoke=function(p,q){var n=O.call(arguments,2);var o=m.isFunction(q);return m.map(p,function(r){return(o?q:r[q]).apply(r,n)})};m.pluck=function(o,n){return m.map(o,function(p){return p[n]})};m.where=function(o,n,p){if(m.isEmpty(n)){return p?void 0:[]}return m[p?"find":"filter"](o,function(r){for(var q in n){if(n[q]!==r[q]){return false}}return true})};m.findWhere=function(o,n){return m.where(o,n,true)};m.max=function(q,p,o){if(!p&&m.isArray(q)&&q[0]===+q[0]&&q.length<65535){return Math.max.apply(Math,q)}if(!p&&m.isEmpty(q)){return -Infinity}var n={computed:-Infinity,value:-Infinity};i(q,function(u,r,t){var s=p?p.call(o,u,r,t):u;s>n.computed&&(n={value:u,computed:s})});return n.value};m.min=function(q,p,o){if(!p&&m.isArray(q)&&q[0]===+q[0]&&q.length<65535){return Math.min.apply(Math,q)}if(!p&&m.isEmpty(q)){return Infinity}var n={computed:Infinity,value:Infinity};i(q,function(u,r,t){var s=p?p.call(o,u,r,t):u;s<n.computed&&(n={value:u,computed:s})});return n.value};m.shuffle=function(q){var p;var o=0;var n=[];i(q,function(r){p=m.random(o++);n[o-1]=n[p];n[p]=r});return n};m.sample=function(p,q,o){if(arguments.length<2||o){return p[m.random(p.length-1)]}return m.shuffle(p).slice(0,Math.max(0,q))};var A=function(n){return m.isFunction(n)?n:function(o){return o[n]}};m.sortBy=function(q,p,n){var o=A(p);return m.pluck(m.map(q,function(t,r,s){return{value:t,index:r,criteria:o.call(n,t,r,s)}}).sort(function(u,t){var s=u.criteria;var r=t.criteria;if(s!==r){if(s>r||s===void 0){return 1}if(s<r||r===void 0){return -1}}return u.index-t.index}),"value")};var T=function(n){return function(s,r,p){var o={};var q=r==null?m.identity:A(r);i(s,function(v,t){var u=q.call(p,v,t,s);n(o,u,v)});return o}};m.groupBy=T(function(n,o,p){(m.has(n,o)?n[o]:(n[o]=[])).push(p)});m.indexBy=T(function(n,o,p){n[o]=p});m.countBy=T(function(n,o){m.has(n,o)?n[o]++:n[o]=1});m.sortedIndex=function(u,t,q,p){q=q==null?m.identity:A(q);var s=q.call(p,t);var n=0,r=u.length;while(n<r){var o=(n+r)>>>1;q.call(p,u[o])<s?n=o+1:r=o}return n};m.toArray=function(n){if(!n){return[]}if(m.isArray(n)){return O.call(n)}if(n.length===+n.length){return m.map(n,m.identity)}return m.values(n)};m.size=function(n){if(n==null){return 0}return(n.length===+n.length)?n.length:m.keys(n).length};m.first=m.head=m.take=function(q,p,o){if(q==null){return void 0}return(p==null)||o?q[0]:O.call(q,0,p)};m.initial=function(q,p,o){return O.call(q,0,q.length-((p==null)||o?1:p))};m.last=function(q,p,o){if(q==null){return void 0}if((p==null)||o){return q[q.length-1]}else{return O.call(q,Math.max(q.length-p,0))}};m.rest=m.tail=m.drop=function(q,p,o){return O.call(q,(p==null)||o?1:p)};m.compact=function(n){return m.filter(n,m.identity)};var X=function(o,p,n){if(p&&m.every(o,m.isArray)){return Y.apply(n,o)}i(o,function(q){if(m.isArray(q)||m.isArguments(q)){p?h.apply(n,q):X(q,p,n)}else{n.push(q)}});return n};m.flatten=function(o,n){return X(o,n,[])};m.without=function(n){return m.difference(n,O.call(arguments,1))};m.uniq=m.unique=function(t,s,r,q){if(m.isFunction(s)){q=r;r=s;s=false}var o=r?m.map(t,r,q):t;var p=[];var n=[];i(o,function(v,u){if(s?(!u||n[n.length-1]!==v):!m.contains(n,v)){n.push(v);p.push(t[u])}});return p};m.union=function(){return m.uniq(m.flatten(arguments,true))};m.intersection=function(o){var n=O.call(arguments,1);return m.filter(m.uniq(o),function(p){return m.every(n,function(q){return m.indexOf(q,p)>=0})})};m.difference=function(o){var n=Y.apply(c,O.call(arguments,1));return m.filter(o,function(p){return !m.contains(n,p)})};m.zip=function(){var p=m.max(m.pluck(arguments,"length").concat(0));var o=new Array(p);for(var n=0;n<p;n++){o[n]=m.pluck(arguments,""+n)}return o};m.object=function(r,o){if(r==null){return{}}var n={};for(var p=0,q=r.length;p<q;p++){if(o){n[r[p]]=o[p]}else{n[r[p][0]]=r[p][1]}}return n};m.indexOf=function(r,p,q){if(r==null){return -1}var n=0,o=r.length;if(q){if(typeof q=="number"){n=(q<0?Math.max(0,o+q):q)}else{n=m.sortedIndex(r,p);return r[n]===p?n:-1}}if(N&&r.indexOf===N){return r.indexOf(p,q)}for(;n<o;n++){if(r[n]===p){return n}}return -1};m.lastIndexOf=function(r,p,q){if(r==null){return -1}var n=q!=null;if(L&&r.lastIndexOf===L){return n?r.lastIndexOf(p,q):r.lastIndexOf(p)}var o=(n?q:r.length);while(o--){if(r[o]===p){return o}}return -1};m.range=function(s,p,r){if(arguments.length<=1){p=s||0;s=0}r=arguments[2]||1;var q=Math.max(Math.ceil((p-s)/r),0);var n=0;var o=new Array(q);while(n<q){o[n++]=s;s+=r}return o};var g=function(){};m.bind=function(q,o){var n,p;if(f&&q.bind===f){return f.apply(q,O.call(arguments,1))}if(!m.isFunction(q)){throw new TypeError}n=O.call(arguments,2);return p=function(){if(!(this instanceof p)){return q.apply(o,n.concat(O.call(arguments)))}g.prototype=q.prototype;var s=new g;g.prototype=null;var r=q.apply(s,n.concat(O.call(arguments)));if(Object(r)===r){return r}return s}};m.partial=function(o){var n=O.call(arguments,1);return function(){return o.apply(this,n.concat(O.call(arguments)))}};m.bindAll=function(o){var n=O.call(arguments,1);if(n.length===0){throw new Error("bindAll must be passed function names")}i(n,function(p){o[p]=m.bind(o[p],o)});return o};m.memoize=function(p,o){var n={};o||(o=m.identity);return function(){var q=o.apply(this,arguments);return m.has(n,q)?n[q]:(n[q]=p.apply(this,arguments))}};m.delay=function(o,p){var n=O.call(arguments,2);return setTimeout(function(){return o.apply(null,n)},p)};m.defer=function(n){return m.delay.apply(m,[n,1].concat(O.call(arguments,1)))};m.throttle=function(o,q,u){var n,s,v;var t=null;var r=0;u||(u={});var p=function(){r=u.leading===false?0:new Date;t=null;v=o.apply(n,s)};return function(){var w=new Date;if(!r&&u.leading===false){r=w}var x=q-(w-r);n=this;s=arguments;if(x<=0){clearTimeout(t);t=null;r=w;v=o.apply(n,s)}else{if(!t&&u.trailing!==false){t=setTimeout(p,x)}}return v}};m.debounce=function(r,u,o){var t,p,q,s,n;return function(){q=this;p=arguments;s=new Date();var w=function(){var x=(new Date())-s;if(x<u){t=setTimeout(w,u-x)}else{t=null;if(!o){n=r.apply(q,p)}}};var v=o&&!t;if(!t){t=setTimeout(w,u)}if(v){n=r.apply(q,p)}return n}};m.once=function(p){var n=false,o;return function(){if(n){return o}n=true;o=p.apply(this,arguments);p=null;return o}};m.wrap=function(n,o){return function(){var p=[n];h.apply(p,arguments);return o.apply(this,p)}};m.compose=function(){var n=arguments;return function(){var o=arguments;for(var p=n.length-1;p>=0;p--){o=[n[p].apply(this,o)]}return o[0]}};m.after=function(o,n){return function(){if(--o<1){return n.apply(this,arguments)}}};m.keys=E||function(p){if(p!==Object(p)){throw new TypeError("Invalid object")}var o=[];for(var n in p){if(m.has(p,n)){o.push(n)}}return o};m.values=function(r){var q=m.keys(r);var p=q.length;var n=new Array(p);for(var o=0;o<p;o++){n[o]=r[q[o]]}return n};m.pairs=function(r){var p=m.keys(r);var o=p.length;var q=new Array(o);for(var n=0;n<o;n++){q[n]=[p[n],r[p[n]]]}return q};m.invert=function(r){var n={};var q=m.keys(r);for(var o=0,p=q.length;o<p;o++){n[r[q[o]]]=q[o]}return n};m.functions=m.methods=function(p){var o=[];for(var n in p){if(m.isFunction(p[n])){o.push(n)}}return o.sort()};m.extend=function(n){i(O.call(arguments,1),function(o){if(o){for(var p in o){n[p]=o[p]}}});return n};m.pick=function(o){var p={};var n=Y.apply(c,O.call(arguments,1));i(n,function(q){if(q in o){p[q]=o[q]}});return p};m.omit=function(p){var q={};var o=Y.apply(c,O.call(arguments,1));for(var n in p){if(!m.contains(o,n)){q[n]=p[n]}}return q};m.defaults=function(n){i(O.call(arguments,1),function(o){if(o){for(var p in o){if(n[p]===void 0){n[p]=o[p]}}}});return n};m.clone=function(n){if(!m.isObject(n)){return n}return m.isArray(n)?n.slice():m.extend({},n)};m.tap=function(o,n){n(o);return o};var j=function(u,t,o,p){if(u===t){return u!==0||1/u==1/t}if(u==null||t==null){return u===t}if(u instanceof m){u=u._wrapped}if(t instanceof m){t=t._wrapped}var r=D.call(u);if(r!=D.call(t)){return false}switch(r){case"[object String]":return u==String(t);case"[object Number]":return u!=+u?t!=+t:(u==0?1/u==1/t:u==+t);case"[object Date]":case"[object Boolean]":return +u==+t;case"[object RegExp]":return u.source==t.source&&u.global==t.global&&u.multiline==t.multiline&&u.ignoreCase==t.ignoreCase}if(typeof u!="object"||typeof t!="object"){return false}var n=o.length;while(n--){if(o[n]==u){return p[n]==t}}var s=u.constructor,q=t.constructor;if(s!==q&&!(m.isFunction(s)&&(s instanceof s)&&m.isFunction(q)&&(q instanceof q))){return false}o.push(u);p.push(t);var x=0,w=true;if(r=="[object Array]"){x=u.length;w=x==t.length;if(w){while(x--){if(!(w=j(u[x],t[x],o,p))){break}}}}else{for(var v in u){if(m.has(u,v)){x++;if(!(w=m.has(t,v)&&j(u[v],t[v],o,p))){break}}}if(w){for(v in t){if(m.has(t,v)&&!(x--)){break}}w=!x}}o.pop();p.pop();return w};m.isEqual=function(o,n){return j(o,n,[],[])};m.isEmpty=function(o){if(o==null){return true}if(m.isArray(o)||m.isString(o)){return o.length===0}for(var n in o){if(m.has(o,n)){return false}}return true};m.isElement=function(n){return !!(n&&n.nodeType===1)};m.isArray=U||function(n){return D.call(n)=="[object Array]"};m.isObject=function(n){return n===Object(n)};i(["Arguments","Function","String","Number","Date","RegExp"],function(n){m["is"+n]=function(o){return D.call(o)=="[object "+n+"]"}});if(!m.isArguments(arguments)){m.isArguments=function(n){return !!(n&&m.has(n,"callee"))}}if(typeof (/./)!=="function"){m.isFunction=function(n){return typeof n==="function"}}m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))};m.isNaN=function(n){return m.isNumber(n)&&n!=+n};m.isBoolean=function(n){return n===true||n===false||D.call(n)=="[object Boolean]"};m.isNull=function(n){return n===null};m.isUndefined=function(n){return n===void 0};m.has=function(o,n){return J.call(o,n)};m.noConflict=function(){W._=K;return this};m.identity=function(n){return n};m.times=function(s,r,q){var o=Array(Math.max(0,s));for(var p=0;p<s;p++){o[p]=r.call(q,p)}return o};m.random=function(o,n){if(n==null){n=o;o=0}return o+Math.floor(Math.random()*(n-o+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};M.unescape=m.invert(M.escape);var k={escape:new RegExp("["+m.keys(M.escape).join("")+"]","g"),unescape:new RegExp("("+m.keys(M.unescape).join("|")+")","g")};m.each(["escape","unescape"],function(n){m[n]=function(o){if(o==null){return""}return(""+o).replace(k[n],function(p){return M[n][p]})}});m.result=function(n,p){if(n==null){return void 0}var o=n[p];return m.isFunction(o)?o.call(n):o};m.mixin=function(n){i(m.functions(n),function(o){var p=m[o]=n[o];m.prototype[o]=function(){var q=[this._wrapped];h.apply(q,arguments);return S.call(this,p.apply(m,q))}})};var Z=0;m.uniqueId=function(n){var o=++Z+"";return n?n+o:o};m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var V=/(.)^/;var H={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};var I=/\\|'|\r|\n|\t|\u2028|\u2029/g;m.template=function(v,q,p){var o;p=m.defaults({},p,m.templateSettings);var r=new RegExp([(p.escape||V).source,(p.interpolate||V).source,(p.evaluate||V).source].join("|")+"|$","g");var s=0;var n="__p+='";v.replace(r,function(x,y,w,AA,z){n+=v.slice(s,z).replace(I,function(AB){return"\\"+H[AB]});if(y){n+="'+\n((__t=("+y+"))==null?'':_.escape(__t))+\n'"}if(w){n+="'+\n((__t=("+w+"))==null?'':__t)+\n'"}if(AA){n+="';\n"+AA+"\n__p+='"}s=z+x.length;return x});n+="';\n";if(!p.variable){n="with(obj||{}){\n"+n+"}\n"}n="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+n+"return __p;\n";try{o=new Function(p.variable||"obj","_",n)}catch(t){t.source=n;throw t}if(q){return o(q,m)}var u=function(w){return o.call(this,w,m)};u.source="function("+(p.variable||"obj")+"){\n"+n+"}";return u};m.chain=function(n){return m(n).chain()};var S=function(n){return this._chain?m(n).chain():n};m.mixin(m);i(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var o=c[n];m.prototype[n]=function(){var p=this._wrapped;o.apply(p,arguments);if((n=="shift"||n=="splice")&&p.length===0){delete p[0]}return S.call(this,p)}});i(["concat","join","slice"],function(n){var o=c[n];m.prototype[n]=function(){return S.call(this,o.apply(this._wrapped,arguments))}});m.extend(m.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}})}).call(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:ajs-backbone', location = 'js-vendor/backbone/backbone.js' */
/* THIS FILE HAS BEEN MODIFIED BY ATLASSIAN. Modified lines are marked below, search "ATLASSIAN" */
(function(){var U=this;var b=U.Backbone;var G=[];var d=G.push;var N=G.slice;var T=G.splice;var Z;if(typeof exports!=="undefined"){Z=exports}else{Z=U.Backbone={}}Z.VERSION="1.0.0";var l=U._;if(!l&&(typeof require!=="undefined")){l=require("underscore")}Z.$=U.jQuery||U.Zepto||U.ender||U.$;Z.noConflict=function(){U.Backbone=b;return this};Z.emulateHTTP=false;Z.emulateJSON=false;var j=Z.Events={on:function(m,p,o){if(!X(this,"on",m,[p,o])||!p){return this}this._events||(this._events={});var n=this._events[m]||(this._events[m]=[]);n.push({callback:p,context:o,ctx:o||this});return this},once:function(n,q,o){if(!X(this,"once",n,[q,o])||!q){return this}var m=this;var p=l.once(function(){m.off(n,p);q.apply(this,arguments)});p._callback=q;return this.on(n,p,o)},off:function(m,v,n){var t,u,w,s,r,o,q,p;if(!this._events||!X(this,"off",m,[v,n])){return this}if(!m&&!v&&!n){this._events={};return this}s=m?[m]:l.keys(this._events);for(r=0,o=s.length;r<o;r++){m=s[r];if(w=this._events[m]){this._events[m]=t=[];if(v||n){for(q=0,p=w.length;q<p;q++){u=w[q];if((v&&v!==u.callback&&v!==u.callback._callback)||(n&&n!==u.context)){t.push(u)}}}if(!t.length){delete this._events[m]}}}return this},trigger:function(o){if(!this._events){return this}var n=N.call(arguments,1);if(!X(this,"trigger",o,n)){return this}var p=this._events[o];var m=this._events.all;if(p){B(p,n)}if(m){B(m,arguments)}return this},stopListening:function(p,m,r){var n=this._listeners;if(!n){return this}var o=!m&&!r;if(typeof m==="object"){r=this}if(p){(n={})[p._listenerId]=p}for(var q in n){n[q].off(m,r,this);if(o){delete this._listeners[q]}}return this}};var W=/\s+/;var X=function(t,r,n,q){if(!n){return true}if(typeof n==="object"){for(var p in n){t[r].apply(t,[p,n[p]].concat(q))}return false}if(W.test(n)){var s=n.split(W);for(var o=0,m=s.length;o<m;o++){t[r].apply(t,[s[o]].concat(q))}return false}return true};var B=function(r,p){var s,q=-1,o=r.length,n=p[0],m=p[1],t=p[2];switch(p.length){case 0:while(++q<o){(s=r[q]).callback.call(s.ctx)}return ;case 1:while(++q<o){(s=r[q]).callback.call(s.ctx,n)}return ;case 2:while(++q<o){(s=r[q]).callback.call(s.ctx,n,m)}return ;case 3:while(++q<o){(s=r[q]).callback.call(s.ctx,n,m,t)}return ;default:while(++q<o){(s=r[q]).callback.apply(s.ctx,p)}}};var c={listenTo:"on",listenToOnce:"once"};l.each(c,function(m,n){j[n]=function(q,o,s){var p=this._listeners||(this._listeners={});var r=q._listenerId||(q._listenerId=l.uniqueId("l"));p[r]=q;if(typeof o==="object"){s=this}q[m](o,s,this);return this}});j.bind=j.on;j.unbind=j.off;l.extend(Z,j);var e=Z.Model=function(m,o){var p;var n=m||{};o||(o={});this.cid=l.uniqueId("c");this.attributes={};l.extend(this,l.pick(o,f));if(o.parse){n=this.parse(n,o)||{}}if(p=l.result(this,"defaults")){n=l.defaults({},n,p)}this.set(n,o);this.changed={};this.initialize.apply(this,arguments)};var f=["url","urlRoot","collection"];l.extend(e.prototype,j,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(m){return l.clone(this.attributes)},sync:function(){return Z.sync.apply(this,arguments)},get:function(m){return this.attributes[m]},escape:function(m){return l.escape(this.get(m))},has:function(m){return this.get(m)!=null},set:function(u,m,y){var s,v,w,t,r,x,o,q;if(u==null){return this}if(typeof u==="object"){v=u;y=m}else{(v={})[u]=m}y||(y={});if(!this._validate(v,y)){return false}w=y.unset;r=y.silent;t=[];x=this._changing;this._changing=true;if(!x){this._previousAttributes=l.clone(this.attributes);this.changed={}}q=this.attributes,o=this._previousAttributes;if(this.idAttribute in v){this.id=v[this.idAttribute]}for(s in v){m=v[s];if(!l.isEqual(q[s],m)){t.push(s)}if(!l.isEqual(o[s],m)){this.changed[s]=m}else{delete this.changed[s]}w?delete q[s]:q[s]=m}if(!r){if(t.length){this._pending=true}for(var p=0,n=t.length;p<n;p++){this.trigger("change:"+t[p],this,q[t[p]],y)}}if(x){return this}if(!r){while(this._pending){this._pending=false;this.trigger("change",this,y)}}this._pending=false;this._changing=false;return this},unset:function(m,n){return this.set(m,void 0,l.extend({},n,{unset:true}))},clear:function(n){var m={};for(var o in this.attributes){m[o]=void 0}return this.set(m,l.extend({},n,{unset:true}))},hasChanged:function(m){if(m==null){return !l.isEmpty(this.changed)}return l.has(this.changed,m)},changedAttributes:function(o){if(!o){return this.hasChanged()?l.clone(this.changed):false}var q,p=false;var n=this._changing?this._previousAttributes:this.attributes;for(var m in o){if(l.isEqual(n[m],(q=o[m]))){continue}(p||(p={}))[m]=q}return p},previous:function(m){if(m==null||!this._previousAttributes){return null}return this._previousAttributes[m]},previousAttributes:function(){return l.clone(this._previousAttributes)},fetch:function(n){n=n?l.clone(n):{};if(n.parse===void 0){n.parse=true}var m=this;var o=n.success;n.success=function(p){if(!m.set(m.parse(p,n),n)){return false}if(o){o(m,p,n)}m.trigger("sync",m,p,n)};h(this,n);return this.sync("read",this,n)},save:function(q,n,u){var r,m,t,o=this.attributes;if(q==null||typeof q==="object"){r=q;u=n}else{(r={})[q]=n}if(r&&(!u||!u.wait)&&!this.set(r,u)){return false}u=l.extend({validate:true},u);if(!this._validate(r,u)){return false}if(r&&u.wait){this.attributes=l.extend({},o,r)}if(u.parse===void 0){u.parse=true}var p=this;var s=u.success;u.success=function(w){p.attributes=o;var v=p.parse(w,u);if(u.wait){v=l.extend(r||{},v)}if(l.isObject(v)&&!p.set(v,u)){return false}if(s){s(p,w,u)}p.trigger("sync",p,w,u)};h(this,u);m=this.isNew()?"create":(u.patch?"patch":"update");if(m==="patch"){u.attrs=r}t=this.sync(m,this,u);if(r&&u.wait){this.attributes=o}return t},destroy:function(n){n=n?l.clone(n):{};var m=this;var q=n.success;var o=function(){m.trigger("destroy",m,m.collection,n)};n.success=function(r){if(n.wait||m.isNew()){o()}if(q){q(m,r,n)}if(!m.isNew()){m.trigger("sync",m,r,n)}};if(this.isNew()){n.success();return false}h(this,n);var p=this.sync("delete",this,n);if(!n.wait){o()}return p},url:function(){var m=l.result(this,"urlRoot")||l.result(this.collection,"url")||R();if(this.isNew()){return m}return m+(m.charAt(m.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(n,m){return n},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(m){return this._validate({},l.extend(m||{},{validate:true}))},_validate:function(o,n){if(!n.validate||!this.validate){return true}o=l.extend({},this.attributes,o);var m=this.validationError=this.validate(o,n)||null;if(!m){return true}this.trigger("invalid",this,m,l.extend(n||{},{validationError:m}));return false}});var A=["keys","values","pairs","invert","pick","omit"];l.each(A,function(m){e.prototype[m]=function(){var n=N.call(arguments);n.unshift(this.attributes);return l[m].apply(l,n)}});var C=Z.Collection=function(n,m){m||(m={});if(m.url){this.url=m.url}if(m.model){this.model=m.model}if(m.comparator!==void 0){this.comparator=m.comparator}this._reset();this.initialize.apply(this,arguments);if(n){this.reset(n,l.extend({silent:true},m))}};var O={add:true,remove:true,merge:true};var k={add:true,merge:false,remove:false};l.extend(C.prototype,j,{model:e,initialize:function(){},toJSON:function(m){return this.map(function(n){return n.toJSON(m)})},sync:function(){return Z.sync.apply(this,arguments)},add:function(n,m){return this.set(n,l.defaults(m||{},k))},remove:function(r,p){r=l.isArray(r)?r.slice():[r];p||(p={});var q,m,o,n;for(q=0,m=r.length;q<m;q++){n=this.get(r[q]);if(!n){continue}delete this._byId[n.id];delete this._byId[n.cid];o=this.indexOf(n);this.models.splice(o,1);this.length--;if(!p.silent){p.index=o;n.trigger("remove",n,this,p)}this._removeReference(n)}return this},set:function(n,z){z=l.defaults(z||{},O);if(z.parse){n=this.parse(n,z)}if(!l.isArray(n)){n=n?[n]:[]}var u,q,w,x,o,v;var p=z.at;var t=this.comparator&&(p==null)&&z.sort!==false;var r=l.isString(this.comparator)?this.comparator:null;var y=[],m=[],s={};for(u=0,q=n.length;u<q;u++){if(!(w=this._prepareModel(n[u],z))){continue}if(o=this.get(w)){if(z.remove){s[o.cid]=true}if(z.merge){o.set(w.attributes,z);if(t&&!v&&o.hasChanged(r)){v=true}}}else{if(z.add){y.push(w);w.on("all",this._onModelEvent,this);this._byId[w.cid]=w;if(w.id!=null){this._byId[w.id]=w}}}}if(z.remove){for(u=0,q=this.length;u<q;++u){if(!s[(w=this.models[u]).cid]){m.push(w)}}if(m.length){this.remove(m,z)}}if(y.length){if(t){v=true}this.length+=y.length;if(p!=null){T.apply(this.models,[p,0].concat(y))}else{d.apply(this.models,y)}}if(v){this.sort({silent:true})}if(z.silent){return this}for(u=0,q=y.length;u<q;u++){(w=y[u]).trigger("add",w,this,z)}if(v){this.trigger("sort",this,z)}return this},reset:function(p,n){n||(n={});for(var o=0,m=this.models.length;o<m;o++){this._removeReference(this.models[o])}n.previousModels=this.models;this._reset();this.add(p,l.extend({silent:true},n));if(!n.silent){this.trigger("reset",this,n)}return this},push:function(n,m){n=this._prepareModel(n,m);this.add(n,l.extend({at:this.length},m));return n},pop:function(n){var m=this.at(this.length-1);this.remove(m,n);return m},unshift:function(n,m){n=this._prepareModel(n,m);this.add(n,l.extend({at:0},m));return n},shift:function(n){var m=this.at(0);this.remove(m,n);return m},slice:function(n,m){return this.models.slice(n,m)},get:function(m){if(m==null){return void 0}return this._byId[m.id!=null?m.id:m.cid||m]},at:function(m){return this.models[m]},where:function(m,n){if(l.isEmpty(m)){return n?void 0:[]}return this[n?"find":"filter"](function(o){for(var p in m){if(m[p]!==o.get(p)){return false}}return true})},findWhere:function(m){return this.where(m,true)},sort:function(m){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}m||(m={});if(l.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(l.bind(this.comparator,this))}if(!m.silent){this.trigger("sort",this,m)}return this},sortedIndex:function(m,p,n){p||(p=this.comparator);var o=l.isFunction(p)?p:function(q){return q.get(p)};return l.sortedIndex(this.models,m,o,n)},pluck:function(m){return l.invoke(this.models,"get",m)},fetch:function(m){m=m?l.clone(m):{};if(m.parse===void 0){m.parse=true}var o=m.success;var n=this;m.success=function(p){var q=m.reset?"reset":"set";n[q](p,m);if(o){o(n,p,m)}n.trigger("sync",n,p,m)};h(this,m);return this.sync("read",this,m)},create:function(n,m){m=m?l.clone(m):{};if(!(n=this._prepareModel(n,m))){return false}if(!m.wait){this.add(n,m)}var p=this;var o=m.success;m.success=function(r,s,q){if(q.wait){p.add(r,q)}if(o){o(r,s,q)}};n.save(null,m);return n},parse:function(n,m){return n},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(o,n){if(o instanceof e){if(!o.collection){o.collection=this}return o}n||(n={});n.collection=this;var m=new this.model(o,n);if(!m._validate(o,n)){this.trigger("invalid",this,o,n);return false}return m},_removeReference:function(m){if(this===m.collection){delete m.collection}m.off("all",this._onModelEvent,this)},_onModelEvent:function(o,n,p,m){if((o==="add"||o==="remove")&&p!==this){return }if(o==="destroy"){this.remove(n,m)}if(n&&o==="change:"+n.idAttribute){delete this._byId[n.previous(n.idAttribute)];if(n.id!=null){this._byId[n.id]=n}}this.trigger.apply(this,arguments)}});var Y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];l.each(Y,function(m){C.prototype[m]=function(){var n=N.call(arguments);n.unshift(this.models);return l[m].apply(l,n)}});var K=["groupBy","countBy","sortBy"];l.each(K,function(m){C.prototype[m]=function(p,n){var o=l.isFunction(p)?p:function(q){return q.get(p)};return l[m](this.models,o,n)}});var g=Z.View=function(m){this.cid=l.uniqueId("view");this._configure(m||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var V=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];l.extend(g.prototype,j,{tagName:"div",$:function(m){return this.$el.find(m)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(m,n){if(this.$el){this.undelegateEvents()}this.$el=m instanceof Z.$?m:Z.$(m);this.el=this.$el[0];if(n!==false){this.delegateEvents()}return this},delegateEvents:function(q){if(!(q||(q=l.result(this,"events")))){return this}this.undelegateEvents();for(var p in q){var r=q[p];if(!l.isFunction(r)){r=this[q[p]]}if(!r){continue}var o=p.match(V);var n=o[1],m=o[2];r=l.bind(r,this);n+=".delegateEvents"+this.cid;if(m===""){this.$el.on(n,r)}else{this.$el.on(n,m,r)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(m){if(this.options){m=l.extend({},l.result(this,"options"),m)}l.extend(this,l.pick(m,E));this.options=m},_ensureElement:function(){if(!this.el){var m=l.extend({},l.result(this,"attributes"));if(this.id){m.id=l.result(this,"id")}if(this.className){m["class"]=l.result(this,"className")}var n=Z.$("<"+l.result(this,"tagName")+">").attr(m);this.setElement(n,false)}else{this.setElement(l.result(this,"el"),false)}}});Z.sync=function(s,n,m){var p=J[s];l.defaults(m||(m={}),{emulateHTTP:Z.emulateHTTP,emulateJSON:Z.emulateJSON});var r={type:p,dataType:"json"};if(!m.url){r.url=l.result(n,"url")||R()}if(m.data==null&&n&&(s==="create"||s==="update"||s==="patch")){r.contentType="application/json";r.data=JSON.stringify(m.attrs||n.toJSON(m))}if(m.emulateJSON){r.contentType="application/x-www-form-urlencoded";r.data=r.data?{model:r.data}:{}}if(m.emulateHTTP&&(p==="PUT"||p==="DELETE"||p==="PATCH")){r.type="POST";if(m.emulateJSON){r.data._method=p}var o=m.beforeSend;m.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",p);if(o){return o.apply(this,arguments)}}}if(r.type!=="GET"&&!m.emulateJSON){r.processData=false}if(r.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){r.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var q=m.xhr=Z.ajax(l.extend(r,m));n.trigger("request",n,q,m);return q};var J={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};Z.ajax=function(){return Z.$.ajax.apply(Z.$,arguments)};var P=Z.Router=function(m){m||(m={});if(m.routes){this.routes=m.routes}this._bindRoutes();this.initialize.apply(this,arguments)};var Q=/\((.*?)\)/g;var S=/(\(\?)?:\w+/g;var D=/\*\w+/g;var H=/[\-{}\[\]+?.,\\\^$|#\s]/g;l.extend(P.prototype,j,{initialize:function(){},route:function(n,o,p){if(!l.isRegExp(n)){n=this._routeToRegExp(n)}if(l.isFunction(o)){p=o;o=""}if(!p){p=this[o]}var m=this;Z.history.route(n,function(r){var q=m._extractParameters(n,r);p&&p.apply(m,q);m.trigger.apply(m,["route:"+o].concat(q));m.trigger("route",o,q);Z.history.trigger("route",m,o,q)});return this},navigate:function(n,m){Z.history.navigate(n,m);return this},_bindRoutes:function(){if(!this.routes){return }this.routes=l.result(this,"routes");var n,m=l.keys(this.routes);while((n=m.pop())!=null){this.route(n,this.routes[n])}},_routeToRegExp:function(m){m=m.replace(H,"\\$&").replace(Q,"(?:$1)?").replace(S,function(o,n){return n?o:"([^/]+)"}).replace(D,"(.*?)");return new RegExp("^"+m+"$")},_extractParameters:function(m,n){var o=m.exec(n).slice(1);return l.map(o,function(p){return p?decodeURIComponent(p):null})}});var I=Z.History=function(){this.handlers=[];l.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var a=/^[#\/]|\s+$/g;var F=/^\/+|\/+$/g;var i=/msie [\w.]+/;var M=/\/$/;I.started=false;l.extend(I.prototype,j,{interval:50,getHash:function(n){var m=(n||this).location.href.match(/#(.*)$/);return m?m[1]:""},getFragment:function(o,n){if(o==null){if(this._hasPushState||!this._wantsHashChange||n){o=this.location.pathname;var m=this.root.replace(M,"");if(!o.indexOf(m)){o=o.substr(m.length)}}else{o=this.getHash()}}return o.replace(a,"")},start:function(o){if(I.started){throw new Error("Backbone.history has already been started")}I.started=true;this.options=l.extend({},{root:"/"},this.options,o);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var n=this.getFragment();var m=document.documentMode;var q=(i.exec(navigator.userAgent.toLowerCase())&&(!m||m<=7));this.root=("/"+this.root+"/").replace(F,"/");if(q&&this._wantsHashChange){this.iframe=Z.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(n)}if(this._hasPushState){Z.$(window).on("popstate",this.checkUrl)}else{if(this._wantsHashChange&&("onhashchange" in window)&&!q){Z.$(window).on("hashchange",this.checkUrl)}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}}}this.fragment=n;var r=this.location;var p=r.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!p){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else{if(this._wantsPushState&&this._hasPushState&&p&&r.hash){this.fragment=this.getHash().replace(a,"");this.history.replaceState({},document.title,this.root+this.fragment+r.search)}}if(!this.options.silent){return this.loadUrl()}},stop:function(){Z.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(m,n){this.handlers.unshift({route:m,callback:n})},checkUrl:function(n){var m=this.getFragment();if(m===this.fragment&&this.iframe){m=this.getFragment(this.getHash(this.iframe))}if(m===this.fragment){return false}if(this.iframe){this.navigate(m)}this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(o){var n=this.fragment=this.getFragment(o);var m=l.any(this.handlers,function(p){if(p.route.test(n)){p.callback(n);return true}});return m},navigate:function(o,n){if(!I.started){return false}if(!n||n===true){n={trigger:n}}o=this.getFragment(o||"");if(this.fragment===o){return }this.fragment=o;var m=this.root+o;if(this._hasPushState){this.history[n.replace?"replaceState":"pushState"]({},document.title,m)}else{if(this._wantsHashChange){this._updateHash(this.location,o,n.replace);if(this.iframe&&(o!==this.getFragment(this.getHash(this.iframe)))){if(!n.replace){this.iframe.document.open().close()}this._updateHash(this.iframe.location,o,n.replace)}}else{return this.location.assign(m)}}if(n.trigger){this.loadUrl(o)}},_updateHash:function(m,o,p){if(p){var n=m.href.replace(/(javascript:|#).*$/,"");m.replace(n+"#"+o)}else{m.hash="#"+o}}});Z.history=new I;var L=function(m,o){var n=this;var q;if(m&&l.has(m,"constructor")){q=m.constructor}else{q=function(){return n.apply(this,arguments)}}l.extend(q,n,o);var p=function(){this.constructor=q};p.prototype=n.prototype;q.prototype=new p;if(m){l.extend(q.prototype,m)}q.__super__=n.prototype;return q};e.extend=C.extend=P.extend=g.extend=I.extend=L;var R=function(){throw new Error('A "url" property or function must be specified')};var h=function(o,n){var m=n.error;n.error=function(p){if(m){m(o,p,n)}o.trigger("error",o,p,n)}}}).call(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-events/events.js' */
(function(A){AJS.triggerEvt=function(C,B){A(AJS).trigger(C,B)};AJS.bindEvt=function(B,C){A(AJS).bind(B,C)};AJS.triggerEvtForInst=function(B,D,C){A(D).trigger(B,C);AJS.triggerEvt(B,C);if(D.id){AJS.triggerEvt(D.id+"_"+B,C)}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js-vendor/jquery/serializetoobject.js' */
jQuery.fn.serializeObject=function(){var A={};this.find(":input:not(:button):not(:submit):not(:radio):not('select[multiple]')").each(function(){if(this.name===""){return }if(this.value===null){this.value=""}A[this.name]=this.value.match(/^(tru|fals)e$/i)?this.value.toLowerCase()=="true":this.value});this.find("input:radio:checked").each(function(){A[this.name]=this.value});this.find("select[multiple]").each(function(){var B=jQuery(this),C=B.val();if(B.data("aui-ss")){if(C){A[this.name]=C[0]}else{A[this.name]=""}}else{if(C!==null){A[this.name]=C}else{A[this.name]=[]}}});return A};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.js' */
(function(B){AJS.RestfulTable=Backbone.View.extend({initialize:function(D){var C=this;C.options=B.extend(true,C._getDefaultOptions(D),D);C.id=this.options.id;C._event=AJS.RestfulTable.Events;C.classNames=AJS.RestfulTable.ClassNames;C.dataKeys=AJS.RestfulTable.DataKeys;this.$table=B(D.el).addClass(this.classNames.RESTFUL_TABLE).addClass(this.classNames.ALLOW_HOVER).addClass("aui").addClass(C.classNames.LOADING);this.$table.wrapAll("<form class='aui' action='#' />");this.$thead=B("<thead/>");this.$theadRow=B("<tr />").appendTo(this.$thead);this.$tbody=B("<tbody/>");if(!this.$table.length){throw new Error("AJS.RestfulTable: Init failed! The table you have specified ["+this.$table.selector+"] cannot be found.")}if(!this.options.columns){throw new Error("AJS.RestfulTable: Init failed! You haven't provided any columns to render.")}this.showGlobalLoading();B.each(this.options.columns,function(E,F){var G=B.isFunction(F.header)?F.header():F.header;if(typeof G==="undefined"){AJS.warn("You have not specified [header] for column ["+F.id+"]. Using id for now...");G=F.id}C.$theadRow.append("<th>"+G+"</th>")});C.$theadRow.append("<th></th><th></th>");this._models=this._createCollection();this._rowClass=this.options.views.row;this.editRows=[];this.$table.closest("form").submit(function(E){if(C.focusedRow){C.focusedRow.trigger(C._event.SAVE)}E.preventDefault()});if(this.options.allowReorder){this.$theadRow.prepend("<th />");this.$tbody.sortable({handle:"."+this.classNames.DRAG_HANDLE,helper:function(G,E){var F=B("<div/>").attr("class",E.attr("class")).addClass(C.classNames.MOVEABLE);E.children().each(function(I){var L=B(this);var K=parseInt(0+L.css("border-left-width"),10);var H=parseInt(0+L.css("border-right-width"),10);var J=L[0].clientWidth+K+H;F.append(B("<div/>").html(L.html()).attr("class",L.attr("class")).width(J))});F=B("<div class='aui-restfultable-readonly'/>").append(F);F.css({left:E.offset().left});F.appendTo(document.body);return F},start:function(F,G){var E=G.helper[0].clientHeight;var H=G.placeholder.find("td");G.item.addClass(C.classNames.MOVEABLE).children().each(function(J){B(this).width(H.eq(J).width())});var I='<td colspan="'+C.getColumnCount()+'">&nbsp;</td>';G.placeholder.html(I).css({height:E,visibility:"visible"});C.getRowFromElement(G.item[0]).trigger(C._event.MODAL)},stop:function(E,F){if(AJS.$(F.item[0]).is(":visible")){F.item.removeClass(C.classNames.MOVEABLE).children().attr("style","");F.placeholder.removeClass(C.classNames.ROW);C.getRowFromElement(F.item[0]).trigger(C._event.MODELESS)}},update:function(G,I){var E,F,H={},J=C.getRowFromElement(I.item[0]);if(J){if(C.options.reverseOrder){F=I.item.next();if(!F.length){H.position="First"}else{E=C.getRowFromElement(F).model;H.after=E.url()}}else{F=I.item.prev();if(!F.length){H.position="First"}else{E=C.getRowFromElement(F).model;H.after=E.url()}}B.ajax({url:J.model.url()+"/move",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(H),complete:function(){J.hideLoading()},success:function(K){AJS.triggerEvtForInst(C._event.REORDER_SUCCESS,C,[K])},error:function(L){var K=B.parseJSON(L.responseText||L.data);AJS.triggerEvtForInst(C._event.SERVER_ERROR,C,[K,L,this])}});J.showLoading()}},axis:"y",delay:0,containment:"document",cursor:"move",scroll:true,zIndex:8000});this.$tbody.bind("selectstart mousedown",function(E){return !B(E.target).is("."+C.classNames.DRAG_HANDLE)})}if(this.options.allowCreate!==false){this._createRow=new this.options.views.editRow({columns:this.options.columns,isCreateRow:true,model:this.options.model.extend({url:function(){return C.options.resources.self}}),cancelAccessKey:this.options.cancelAccessKey,submitAccessKey:this.options.submitAccessKey,allowReorder:this.options.allowReorder,fieldFocusSelector:this.options.fieldFocusSelector}).bind(this._event.CREATED,function(E){if((C.options.addPosition==undefined&&C.options.createPosition==="bottom")||C.options.addPosition==="bottom"){C.addRow(E)}else{C.addRow(E,0)}}).bind(this._event.VALIDATION_ERROR,function(){this.trigger(C._event.FOCUS)}).render({errors:{},values:{}});this.$create=B('<tbody class="'+this.classNames.CREATE+'" />').append(this._createRow.el);this._applyFocusCoordinator(this._createRow);this._createRow.trigger(this._event.FOCUS)}this._models.bind("remove",function(E){B.each(C.getRows(),function(F,G){if(G.model===E){if(G.hasFocus()&&C._createRow){C._createRow.trigger(C._event.FOCUS)}C.removeRow(G)}})});if(B.isFunction(this.options.resources.all)){this.options.resources.all(function(E){C.populate(E)})}else{B.get(this.options.resources.all,function(E){C.populate(E)})}},_createCollection:function(){var C=this;var D=this.options.Collection.extend({sort:function(E){E||(E={});if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}this.tableRows=C.getRows();this.models=this.sortBy(this.comparator);this.tableRows=undefined;if(!E.silent){this.trigger("refresh",this,E)}return this},remove:function(F,E){this.tableRows=C.getRows();Backbone.Collection.prototype.remove.apply(this,arguments);this.tableRows=undefined;return this}});return new D([],{comparator:function(F){var E;B.each(this.tableRows!==undefined?this.tableRows:C.getRows(),function(G){if(this.model.id===F.id){E=G;return false}});return E}})},populate:function(C){if(this.options.reverseOrder){C.reverse()}this.hideGlobalLoading();if(C&&C.length){this._models.reset([],{silent:true});this.renderRows(C);if(this.isEmpty()){this.showNoEntriesMsg()}}else{this.showNoEntriesMsg()}this.$table.append(this.$thead);if(this.options.createPosition==="bottom"){this.$table.append(this.$tbody).append(this.$create)}else{this.$table.append(this.$create).append(this.$tbody)}this.$table.removeClass(this.classNames.LOADING).trigger(this._event.INITIALIZED,[this]);AJS.triggerEvtForInst(this._event.INITIALIZED,this,[this]);if(this.options.autoFocus){this.$table.find(":input:text:first").focus()}},showGlobalLoading:function(){if(!this.$loading){this.$loading=B('<div class="aui-restfultable-init">'+AJS.RestfulTable.throbber()+'<span class="aui-restfultable-loading">'+this.options.loadingMsg+"</span></div>")}if(!this.$loading.is(":visible")){this.$loading.insertAfter(this.$table)}return this},hideGlobalLoading:function(){if(this.$loading){this.$loading.remove()}return this},addRow:function(D,F){var C,E;if(!D.id){throw new Error("AJS.RestfulTable.addRow: to add a row values object must contain an id. Maybe you are not returning it from your restend point?Recieved:"+JSON.stringify(D))}E=new this.options.model(D);C=this._renderRow(E,F);this._models.add(E);this.removeNoEntriesMsg();AJS.triggerEvtForInst(this._event.ROW_ADDED,this,[C,this]);return this},removeRow:function(C){this._models.remove(C.model);C.remove();if(this.isEmpty()){this.showNoEntriesMsg()}AJS.triggerEvtForInst(this._event.ROW_REMOVED,this,[C,this])},isEmpty:function(){return this._models.length===0},getModels:function(){return this._models},getTable:function(){return this.$table},getTableBody:function(){return this.$tbody},getCreateRow:function(){return this._createRow},getColumnCount:function(){var C=2;if(this.allowReorder){++C}return this.options.columns.length+C},getRowFromElement:function(C){return B(C).data(this.dataKeys.ROW_VIEW)},showNoEntriesMsg:function(){if(this.$noEntries){this.$noEntries.remove()}this.$noEntries=B("<tr>").addClass(this.classNames.NO_ENTRIES).append(B("<td>").attr("colspan",this.getColumnCount()).text(this.options.noEntriesMsg)).appendTo(this.$tbody);return this},removeNoEntriesMsg:function(){if(this.$noEntries&&this._models.length>0){this.$noEntries.remove()}return this},getRows:function(){var C=this,D=[];this.$tbody.find("."+this.classNames.READ_ONLY).each(function(){var E=B(this),F=E.data(C.dataKeys.ROW_VIEW);if(F){D.push(F)}});return D},_renderRow:function(H,G){var D=this,F=this.$tbody.find("."+this.classNames.READ_ONLY),C,E;E=new this._rowClass({model:H,columns:this.options.columns,allowEdit:this.options.allowEdit,allowDelete:this.options.allowDelete,allowReorder:this.options.allowReorder,deleteConfirmation:this.options.deleteConfirmation});this.removeNoEntriesMsg();E.bind(this._event.ROW_EDIT,function(I){AJS.triggerEvtForInst(this._event.EDIT_ROW,{},[this,D]);D.edit(this,I)});C=E.render().$el;if(G!==-1){if(typeof G==="number"&&F.length!==0){C.insertBefore(F[G])}else{this.$tbody.append(C)}}C.data(this.dataKeys.ROW_VIEW,E);E.bind(this._event.MODAL,function(){D.$table.removeClass(D.classNames.ALLOW_HOVER);D.$tbody.sortable("disable");B.each(D.getRows(),function(){if(!D.isRowBeingEdited(this)){this.delegateEvents({})}})});E.bind(this._event.MODELESS,function(){D.$table.addClass(D.classNames.ALLOW_HOVER);D.$tbody.sortable("enable");B.each(D.getRows(),function(){if(!D.isRowBeingEdited(this)){this.delegateEvents()}})});this._applyFocusCoordinator(E);this.trigger(this._event.ROW_INITIALIZED,E);return E},isRowBeingEdited:function(D){var C=false;B.each(this.editRows,function(){if(this.el===D.el){C=true;return false}});return C},_applyFocusCoordinator:function(D){var C=this;if(!D.hasFocusBound){D.hasFocusBound=true;D.bind(this._event.FOCUS,function(){if(C.focusedRow&&C.focusedRow!==D){C.focusedRow.trigger(C._event.BLUR)}C.focusedRow=D;if(D instanceof AJS.RestfulTable.Row&&C._createRow){C._createRow.enable()}})}return this},_removeEditRow:function(D){var C=B.inArray(D,this.editRows);this.editRows.splice(C,1);return this},_shiftFocusAfterEdit:function(){if(this.editRows.length>0){this.editRows[this.editRows.length-1].trigger(this._event.FOCUS)}else{if(this._createRow){this._createRow.trigger(this._event.FOCUS)}}return this},_saveEditRowOnBlur:function(){return this.editRows.length<=1},dismissEditRows:function(){var C=this;B.each(this.editRows,function(){if(!this.hasUpdates()){this.trigger(C._event.FINISHED_EDITING)}})},edit:function(G,F){var C=this,E=new this.options.views.editRow({el:G.el,columns:this.options.columns,isUpdateMode:true,allowReorder:this.options.allowReorder,fieldFocusSelector:this.options.fieldFocusSelector,model:G.model,cancelAccessKey:this.options.cancelAccessKey,submitAccessKey:this.options.submitAccessKey}),D=G.model.toJSON();D.update=true;E.render({errors:{},update:true,values:D}).bind(C._event.UPDATED,function(H,I){C._removeEditRow(this);this.unbind();G.render().delegateEvents();G.trigger(C._event.UPDATED);if(I!==false){C._shiftFocusAfterEdit()}}).bind(C._event.VALIDATION_ERROR,function(){this.trigger(C._event.FOCUS)}).bind(C._event.FINISHED_EDITING,function(){C._removeEditRow(this);G.render().delegateEvents();this.unbind()}).bind(C._event.CANCEL,function(){C._removeEditRow(this);this.unbind();G.render().delegateEvents();C._shiftFocusAfterEdit()}).bind(C._event.BLUR,function(){C.dismissEditRows();if(C._saveEditRowOnBlur()){this.trigger(C._event.SAVE,false)}});this._applyFocusCoordinator(E);E.trigger(C._event.FOCUS,F);if(C._createRow){C._createRow.disable()}this.editRows.push(E);return E},renderRows:function(E){var C=this._models.comparator,D=[];this._models.comparator=undefined;var F=_.map(E,function(H){var G=new this.options.model(H);D.push(this._renderRow(G,-1).el);return G},this);this._models.add(F,{silent:true});this._models.comparator=C;this.removeNoEntriesMsg();this.$tbody.append(D);return this},_getDefaultOptions:function(C){return{model:C.model||AJS.RestfulTable.EntryModel,allowEdit:true,views:{editRow:AJS.RestfulTable.EditRow,row:AJS.RestfulTable.Row},Collection:Backbone.Collection.extend({url:C.resources.self,model:C.model||AJS.RestfulTable.EntryModel}),allowReorder:false,fieldFocusSelector:function(D){return":input[name="+D+"], #"+D},loadingMsg:C.loadingMsg||"Loading"}}});AJS.RestfulTable.throbber=function A(){return'<span class="aui-restfultable-throbber"></span>'};AJS.RestfulTable.throbber=function A(){return'<span class="aui-restfultable-throbber"></span>'};AJS.RestfulTable.DataKeys={ENABLED_SUBMIT:"enabledSubmit",ROW_VIEW:"RestfulTable_Row_View"};AJS.RestfulTable.ClassNames={NO_VALUE:"aui-restfultable-editable-no-value",NO_ENTRIES:"aui-restfultable-no-entires",RESTFUL_TABLE:"aui-restfultable",ROW:"aui-restfultable-row",READ_ONLY:"aui-restfultable-readonly",ACTIVE:"aui-restfultable-active",ALLOW_HOVER:"aui-restfultable-allowhover",FOCUSED:"aui-restfultable-focused",MOVEABLE:"aui-restfultable-movable",DISABLED:"aui-restfultable-disabled",SUBMIT:"aui-restfultable-submit",CANCEL:"aui-restfultable-cancel",EDIT_ROW:"aui-restfultable-editrow",CREATE:"aui-restfultable-create",DRAG_HANDLE:"aui-restfultable-draghandle",ORDER:"aui-restfultable-order",EDITABLE:"aui-restfultable-editable",ERROR:"error",DELETE:"aui-restfultable-delete",LOADING:"loading"};AJS.RestfulTable.Events={REORDER_SUCCESS:"RestfulTable.reorderSuccess",ROW_ADDED:"RestfulTable.rowAdded",ROW_REMOVED:"RestfulTable.rowRemoved",EDIT_ROW:"RestfulTable.switchedToEditMode",SERVER_ERROR:"RestfulTable.serverError",CREATED:"created",UPDATED:"updated",FOCUS:"focus",BLUR:"blur",SUBMIT:"submit",SAVE:"save",MODAL:"modal",MODELESS:"modeless",CANCEL:"cancel",CONTENT_REFRESHED:"contentRefreshed",RENDER:"render",FINISHED_EDITING:"finishedEditing",VALIDATION_ERROR:"validationError",SUBMIT_STARTED:"submitStarted",SUBMIT_FINISHED:"submitFinished",INITIALIZED:"initialized",ROW_INITIALIZED:"rowInitialized",ROW_EDIT:"editRow"}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.entrymodel.js' */
(function(A){AJS.RestfulTable.EntryModel=Backbone.Model.extend({sync:function(F,D,C){var B=this;var E=C.error;C.error=function(G){B._serverErrorHandler(G,this);if(E){E.apply(this,arguments)}};return Backbone.sync.apply(Backbone,arguments)},save:function(D,F){F=F||{};var C=this,H,B,E=F.error,G=F.success;F.error=function(I,K){var J=A.parseJSON(K.responseText||K.data);if(E){E.call(C,C,J,K)}};if(this.isNew()){Backbone.Model.prototype.save.call(this,D,F)}else{if(D){H=AJS.RestfulTable.EntryModel.extend({url:this.url()});B=new H({id:this.id});B.save=Backbone.Model.prototype.save;F.success=function(I,J){C.clear().set(I.toJSON());if(G){G.call(C,C,J)}};B.save(D,F)}}},destroy:function(D){D=D||{};var B=this,C=this.url(),E;if(D.data){E=A.param(D.data)}if(E!==""){C=C+"?"+E}A.ajax({url:C,type:"DELETE",dataType:"json",contentType:"application/json",success:function(F){if(B.collection){B.collection.remove(B)}if(D.success){D.success.call(B,F)}},error:function(F){B._serverErrorHandler(F,this);if(D.error){D.error.call(B,F)}}});return this},changedAttributes:function(B){var D={},C=this.toJSON();A.each(B,function(E,F){if(!C[E]){if(typeof F==="string"){if(A.trim(F)!==""){D[E]=F}}else{if(A.isArray(F)){if(F.length!==0){D[E]=F}}else{D[E]=F}}}else{if(C[E]&&C[E]!==F){if(typeof F==="object"){if(!_.isEqual(F,C[E])){D[E]=F}}else{D[E]=F}}}});if(!_.isEmpty(D)){this.addExpand(D);return D}},addExpand:function(B){},_serverErrorHandler:function(D,B){var C;if(D.status!==400){C=A.parseJSON(D.responseText||D.data);AJS.triggerEvtForInst(AJS.RestfulTable.Events.SERVER_ERROR,this,[C,D,B])}},fetch:function(B){B=B||{};this.clear();Backbone.Model.prototype.fetch.call(this,B)}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.editrow.js' */
(function(A){AJS.RestfulTable.EditRow=Backbone.View.extend({tagName:"tr",events:{focusin:"_focus",click:"_focus",keyup:"_handleKeyUpEvent"},initialize:function(B){this.$el=A(this.el);this._event=AJS.RestfulTable.Events;this.classNames=AJS.RestfulTable.ClassNames;this.dataKeys=AJS.RestfulTable.DataKeys;this.columns=B.columns;this.isCreateRow=B.isCreateRow;this.allowReorder=B.allowReorder;this.events["click ."+this.classNames.CANCEL]="_cancel";this.delegateEvents();if(B.isUpdateMode){this.isUpdateMode=true}else{this._modelClass=B.model;this.model=new this._modelClass()}this.fieldFocusSelector=B.fieldFocusSelector;this.bind(this._event.CANCEL,function(){this.disabled=true}).bind(this._event.SAVE,function(C){if(!this.disabled){this.submit(C)}}).bind(this._event.FOCUS,function(C){this.focus(C)}).bind(this._event.BLUR,function(){this.$el.removeClass(this.classNames.FOCUSED);this.disable()}).bind(this._event.SUBMIT_STARTED,function(){this._submitStarted()}).bind(this._event.SUBMIT_FINISHED,function(){this._submitFinished()})},defaultColumnRenderer:function(B){if(B.allowEdit!==false){return A("<input type='text' />").addClass("text").attr({name:B.name,value:B.value})}else{if(B.value){return document.createTextNode(B.value)}}},renderDragHandle:function(){return'<span class="'+this.classNames.DRAG_HANDLE+'"></span></td>'},_handleKeyUpEvent:function(B){if(B.keyCode===27){this.trigger(this._event.CANCEL)}},_cancel:function(B){this.trigger(this._event.CANCEL);B.preventDefault();return this},_submitStarted:function(){this.submitting=true;this.showLoading().disable().delegateEvents({});return this},_submitFinished:function(){this.submitting=false;this.hideLoading().enable().delegateEvents(this.events);return this},_focus:function(B){if(!this.hasFocus()){this.trigger(this._event.FOCUS,B.target.name)}return this},hasFocus:function(){return this.$el.hasClass(this.classNames.FOCUSED)},focus:function(C){var D,B;this.enable();if(C){D=this.$el.find(this.fieldFocusSelector(C))}else{B=this.$el.find(this.classNames.ERROR+":first");if(B.length===0){D=this.$el.find(":input:text:first")}else{D=B.parent().find(":input")}}this.$el.addClass(this.classNames.FOCUSED);D.focus().trigger("select");return this},disable:function(){var C,B;if(A.browser.mozilla){B=this.$el.find(":submit");if(B.length){C=A("<input type='submit' class='"+this.classNames.SUBMIT+"' />").addClass(B.attr("class")).val(B.val()).data(this.dataKeys.ENABLED_SUBMIT,B);B.replaceWith(C)}}this.$el.addClass(this.classNames.DISABLED).find(":submit").attr("disabled","disabled");return this},enable:function(){var B,C;if(A.browser.mozilla){B=this.$el.find(this.classNames.SUBMIT),C=B.data(this.dataKeys.ENABLED_SUBMIT);if(C&&B.length){B.replaceWith(C)}}this.$el.removeClass(this.classNames.DISABLED).find(":submit").removeAttr("disabled");return this},showLoading:function(){this.$el.addClass(this.classNames.LOADING);return this},hideLoading:function(){this.$el.removeClass(this.classNames.LOADING);return this},hasUpdates:function(){return !!this.mapSubmitParams(this.serializeObject())},serializeObject:function(){return this.$el.serializeObject()},mapSubmitParams:function(B){return this.model.changedAttributes(B)},submit:function(D){var B=this,C;if(document.activeElement!==window){A(document.activeElement).blur()}if(this.isUpdateMode){C=this.mapSubmitParams(this.serializeObject());if(!C){return B.trigger(B._event.CANCEL)}}else{this.model.clear();C=this.mapSubmitParams(this.serializeObject())}this.trigger(this._event.SUBMIT_STARTED);this.model.save(C,{success:function(){if(B.isUpdateMode){B.trigger(B._event.UPDATED,B.model,D)}else{B.trigger(B._event.CREATED,B.model.toJSON());B.model=new B._modelClass();B.render({errors:{},values:{}});B.trigger(B._event.FOCUS)}B.trigger(B._event.SUBMIT_FINISHED)},error:function(E,F,G){if(G.status===400){B.renderErrors(F.errors).trigger(B._event.VALIDATION_ERROR,F.errors)}B.trigger(B._event.SUBMIT_FINISHED)},silent:true});return this},renderError:function(B,C){return A("<div />").attr("data-field",B).addClass(this.classNames.ERROR).text(C)},renderErrors:function(C){var B=this;this.$("."+this.classNames.ERROR).remove();if(C){A.each(C,function(D,E){B.$el.find("[name='"+D+"']").closest("td").append(B.renderError(D,E))})}return this},render:function(C){var B=this;this.$el.empty();if(this.allowReorder){A('<td  class="'+this.classNames.ORDER+'" />').append(this.renderDragHandle()).appendTo(B.$el)}A.each(this.columns,function(E,F){var G,I,H=C.values[F.id],D=[{name:F.id,value:H,allowEdit:F.allowEdit},C.values,B.model];if(H){B.$el.attr("data-"+F.id,H)}if(B.isCreateRow&&F.createView){G=new F.createView({model:B.model}).render(D[0])}else{if(F.editView){G=new F.editView({model:B.model}).render(D[0])}else{G=B.defaultColumnRenderer.apply(B,D)}}I=A("<td />");if(typeof G==="object"&&G.done){G.done(function(J){I.append(J)})}else{I.append(G)}if(F.styleClass){I.addClass(F.styleClass)}I.appendTo(B.$el)});this.$el.append(this.renderOperations(C.update,C.values)).addClass(this.classNames.ROW+" "+this.classNames.EDIT_ROW);this.trigger(this._event.RENDER,this.$el,C.values);this.$el.trigger(this._event.CONTENT_REFRESHED,[this.$el]);return this},renderOperations:function(C){var B=A('<td class="aui-restfultable-operations" />');if(C){B.append(A('<input class="aui-button" type="submit" />').attr({accesskey:this.submitAccessKey,value:"Update"})).append(A('<a class="aui-button aui-button-link" href="#" />').addClass(this.classNames.CANCEL).text("Cancel").attr({accesskey:this.cancelAccessKey}))}else{B.append(A('<input class="aui-button" type="submit" />').attr({accesskey:this.submitAccessKey,value:"Add"}))}return B.add(A('<td class="aui-restfultable-status" />').append(AJS.RestfulTable.throbber()))}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.customview.js' */
AJS.RestfulTable.CustomEditView=AJS.RestfulTable.CustomCreateView=AJS.RestfulTable.CustomReadView=Backbone.View;
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.row.js' */
(function(A){AJS.RestfulTable.Row=Backbone.View.extend({tagName:"tr",events:{"click .aui-restfultable-editable":"edit"},initialize:function(C){var B=this;C=C||{};this._event=AJS.RestfulTable.Events;this.classNames=AJS.RestfulTable.ClassNames;this.dataKeys=AJS.RestfulTable.DataKeys;this.columns=C.columns;this.allowEdit=C.allowEdit;this.allowDelete=C.allowDelete;if(!this.events["click .aui-restfultable-editable"]){throw new Error("It appears you have overridden the events property. To add events you will need to usea work around. https://github.com/documentcloud/backbone/issues/244")}this.index=C.index||0;this.deleteConfirmation=C.deleteConfirmation;this.allowReorder=C.allowReorder;this.$el=A(this.el);this.bind(this._event.CANCEL,function(){this.disabled=true}).bind(this._event.FOCUS,function(D){this.focus(D)}).bind(this._event.BLUR,function(){this.unfocus()}).bind(this._event.MODAL,function(){this.$el.addClass(this.classNames.ACTIVE)}).bind(this._event.MODELESS,function(){this.$el.removeClass(this.classNames.ACTIVE)})},renderDragHandle:function(){return'<span class="'+this.classNames.DRAG_HANDLE+'"></span></td>'},defaultColumnRenderer:function(B){if(B.value){return document.createTextNode(B.value.toString())}},sync:function(C){this.model.addExpand(C);var B=this;this.showLoading();this.model.save(C,{success:function(){B.hideLoading().render();B.trigger(B._event.UPDATED)},error:function(){B.hideLoading()}});return this},refresh:function(D,C){var B=this;this.showLoading();this.model.fetch({success:function(){B.hideLoading().render();if(D){D.apply(this,arguments)}},error:function(){B.hideLoading();if(C){C.apply(this,arguments)}}});return this},hasFocus:function(){return this.$el.hasClass(this.classNames.FOCUSED)},focus:function(){A(this.el).addClass(this.classNames.FOCUSED);return this},unfocus:function(){A(this.el).removeClass(this.classNames.FOCUSED);return this},showLoading:function(){this.$el.addClass(this.classNames.LOADING);return this},hideLoading:function(){this.$el.removeClass(this.classNames.LOADING);return this},edit:function(C){var B;if(A(C.target).is("."+this.classNames.EDITABLE)){B=A(C.target).attr("data-field-name")}else{B=A(C.target).closest("."+this.classNames.EDITABLE).attr("data-field-name")}this.trigger(this._event.ROW_EDIT,B);return this},renderOperations:function(){var B=this;if(this.allowDelete!==false){return A("<a href='#' class='aui-button' />").addClass(this.classNames.DELETE).text("Delete").click(function(C){C.preventDefault();B.destroy()})}},destroy:function(){if(this.deleteConfirmation){var B=AJS.popup(400,200,"delete-entity-"+this.model.get("id"));B.element.html(this.deleteConfirmation(this.model.toJSON()));B.show();B.element.find(".cancel").click(function(){B.hide()});B.element.find("form").submit(_.bind(function(C){B.hide();this.model.destroy();C.preventDefault()},this))}else{this.model.destroy()}},render:function(){var B=this,D=this.model.toJSON(),E=A("<td class='aui-restfultable-operations' />").append(this.renderOperations({},D)),C=A("<td class='aui-restfultable-status' />").append(AJS.RestfulTable.throbber());this.$el.removeClass(this.classNames.DISABLED+" "+this.classNames.FOCUSED+" "+this.classNames.LOADING+" "+this.classNames.EDIT_ROW).addClass(this.classNames.READ_ONLY).empty();if(this.allowReorder){A('<td  class="'+this.classNames.ORDER+'" />').append(this.renderDragHandle()).appendTo(B.$el)}this.$el.attr("data-id",this.model.id);A.each(this.columns,function(G,I){var J,L=A("<td />"),K=D[I.id],M=I.fieldName||I.id,F=[{name:M,value:K,allowEdit:I.allowEdit},D,B.model];if(K){B.$el.attr("data-"+I.id,K)}if(I.readView){J=new I.readView({model:B.model}).render(F[0])}else{J=B.defaultColumnRenderer.apply(B,F)}if(B.allowEdit!==false&&I.allowEdit!==false){var H=A("<span />").addClass(B.classNames.EDITABLE).append(aui.icons.icon({useIconFont:true,icon:"edit"})).append(J).attr("data-field-name",M);L=A("<td />").append(H).appendTo(B.$el);if(!J||A.trim(J)==""){L.addClass(B.classNames.NO_VALUE);H.html(A("<em />").text(this.emptyText||"Enter value"))}}else{L.append(J)}if(I.styleClass){L.addClass(I.styleClass)}L.appendTo(B.$el)});this.$el.append(E).append(C).addClass(this.classNames.ROW+" "+this.classNames.READ_ONLY);this.trigger(this._event.RENDER,this.$el,D);this.$el.trigger(this._event.CONTENT_REFRESHED,[this.$el]);return this}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-tooltips', location = 'js-vendor/jquery/jquery.tipsy.js' */
(function(E){function D(H,G){return(typeof H=="function")?(H.call(G)):H}function F(G){while(G=G.parentNode){if(G==document){return true}}return false}var A=0;function B(){var G=A++;return"tipsyuid"+G}function C(H,G){this.$element=E(H);this.options=G;this.enabled=true;this.fixTitle()}C.prototype={show:function(){var P=this.getTitle();if(P&&this.enabled){var I=this.tip();I.find(".tipsy-inner")[this.options.html?"html":"text"](P);I[0].className="tipsy";I.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var L=this;function H(){L.hoverTooltip=true}function M(){if(L.hoverState=="in"){return }L.hoverTooltip=false;if(L.options.trigger!="manual"){var R=L.options.trigger=="hover"?"mouseleave.tipsy":"blur.tipsy";L.$element.trigger(R)}}if(this.options.hoverable){I.hover(H,M)}if(this.options.className){I.addClass(D(this.options.className,this.$element[0]))}var N=E.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var G=I[0].offsetWidth,K=I[0].offsetHeight,Q=D(this.options.gravity,this.$element[0]);var O;switch(Q.charAt(0)){case"n":O={top:N.top+N.height+this.options.offset,left:N.left+N.width/2-G/2};break;case"s":O={top:N.top-K-this.options.offset,left:N.left+N.width/2-G/2};break;case"e":O={top:N.top+N.height/2-K/2,left:N.left-G-this.options.offset};break;case"w":O={top:N.top+N.height/2-K/2,left:N.left+N.width+this.options.offset};break}if(Q.length==2){if(Q.charAt(1)=="w"){O.left=N.left+N.width/2-15}else{O.left=N.left+N.width/2-G+15}}I.css(O).addClass("tipsy-"+Q);I.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+Q.charAt(0);if(this.options.fade){I.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{I.css({visibility:"visible",opacity:this.options.opacity})}if(this.options.aria){var J=B();I.attr("id",J);this.$element.attr("aria-describedby",J)}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){E(this).remove()})}else{this.tip().remove()}if(this.options.aria){this.$element.removeAttr("aria-describedby")}},fixTitle:function(){var G=this.$element;if(G.attr("title")||typeof (G.attr("original-title"))!="string"){G.attr("original-title",G.attr("title")||"").removeAttr("title")}},getTitle:function(){var I,G=this.$element,H=this.options;this.fixTitle();var I,H=this.options;if(typeof H.title=="string"){I=G.attr(H.title=="title"?"original-title":H.title)}else{if(typeof H.title=="function"){I=H.title.call(G[0])}}I=(""+I).replace(/(^\s*|\s*$)/,"");return I||H.fallback},tip:function(){if(!this.$tip){this.$tip=E('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>').attr("role","tooltip");this.$tip.data("tipsy-pointee",this.$element[0])}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};E.fn.tipsy=function(J){if(J===true){return this.data("tipsy")}else{if(typeof J=="string"){var L=this.data("tipsy");if(L){L[J]()}return this}}J=E.extend({},E.fn.tipsy.defaults,J);if(J.hoverable){J.delayOut=J.delayOut||20}function I(N){var O=E.data(N,"tipsy");if(!O){O=new C(N,E.fn.tipsy.elementOptions(N,J));E.data(N,"tipsy",O)}return O}function M(){var N=I(this);N.hoverState="in";if(J.delayIn==0){N.show()}else{N.fixTitle();setTimeout(function(){if(N.hoverState=="in"){N.show()}},J.delayIn)}}function H(){var N=I(this);N.hoverState="out";if(J.delayOut==0){N.hide()}else{setTimeout(function(){if(N.hoverState=="out"&&!N.hoverTooltip){N.hide()}},J.delayOut)}}if(!J.live){this.each(function(){I(this)})}if(J.trigger!="manual"){var K=J.trigger=="hover"?"mouseenter.tipsy":"focus.tipsy",G=J.trigger=="hover"?"mouseleave.tipsy":"blur.tipsy";if(J.live){E(this.context).on(K,this.selector,M).on(G,this.selector,H)}else{this.bind(K,M).bind(G,H)}}return this};E.fn.tipsy.defaults={aria:false,className:null,delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,hoverable:false,offset:0,opacity:0.8,title:"title",trigger:"hover"};E.fn.tipsy.revalidate=function(){E(".tipsy").each(function(){var G=E.data(this,"tipsy-pointee");if(!G||!F(G)){E(this).remove()}})};E.fn.tipsy.elementOptions=function(H,G){return E.metadata?E.extend({},G,E(H).metadata()):G};E.fn.tipsy.autoNS=function(){return E(this).offset().top>(E(document).scrollTop()+E(window).height()/2)?"s":"n"};E.fn.tipsy.autoWE=function(){return E(this).offset().left>(E(document).scrollLeft()+E(window).width()/2)?"e":"w"};E.fn.tipsy.autoBounds=function(H,G){return function(){var I={ns:G[0],ew:(G.length>1?G[1]:false)},L=E(document).scrollTop()+H,J=E(document).scrollLeft()+H,K=E(this);if(K.offset().top<L){I.ns="n"}if(K.offset().left<J){I.ew="w"}if(E(window).width()+E(document).scrollLeft()-K.offset().left<H){I.ew="e"}if(E(window).height()+E(document).scrollTop()-K.offset().top<H){I.ns="s"}return I.ns+(I.ew?I.ew:"")}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-tooltips', location = 'js/aui-experimental-tooltip.js' */
(function(A){A.fn.tooltip=function(B){var E=A.extend({},A.fn.tooltip.defaults,B),C=this.tipsy(E);if(E.hideOnClick&&(E.trigger=="hover"||!E.trigger&&this.tipsy.defaults.trigger=="hover")){var D=function(){A(this).tipsy("hide")};if(E.live){A(this.context).on("click.tipsy",this.selector,D)}else{this.bind("click.tipsy",D)}}return C};A.fn.tooltip.defaults={opacity:1,offset:1,delayIn:500,hoverable:true,hideOnClick:true}}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


