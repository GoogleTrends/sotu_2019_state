!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}({0:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},13:function(t,e,n){"use strict";n.r(e);var r,i=n(2),o=n.n(i),u={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return u.android()||u.blackberry()||u.ios()||u.opera()||u.windows()}},a=u;var c={init:function(t){r=Math.max(document.documentElement.clientWidth,window.innerWidth||0);var e=d3.select(".state-wrapper").selectAll("div").data(t).enter().append("div").attr("class","state-item");e.append("div").attr("class","state-name").text(function(t){return t.State});var n=e.selectAll(".entity").data(function(t){var e=t;return Object.keys(t).map(function(t){return{cat:t,value:e[t]}}).sort(function(t,e){return e.value-t.value}).filter(function(t){return"State"!=t.cat}).slice(0,10)}).enter().append("p").attr("class","entity").append("span").text(function(t){return t.cat});n.on("mouseover",function(t){var e=t.cat;n.classed("selected",function(t){return t.cat==e})}),e.each(function(t){0==d3.select(this).node().offsetLeft&&d3.select(this).selectAll(".entity").filter(function(t,e){if(0==e||4==e||9==e||19==e)return t}).append("span").attr("class","label").text(function(t,e){return 0==e?r<600?"#1":"Most-search Topic":1==e?"#5":2==e?"#10":"#20"})})},resize:function(){r=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}},f=d3.select("body"),s=0;function l(){var t=f.node().offsetWidth;s!==t&&(s=t,c.resize())}f.classed("is-mobile",a.any()),window.addEventListener("resize",o()(l,150)),d3.csv("assets/data/state_indexed.csv",function(t){c.init(t)})},2:function(t,e,n){(function(e){var n="Expected a function",r=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=s||l||Function("return this")(),p=Object.prototype.toString,v=Math.max,y=Math.min,b=function(){return d.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==i}(t))return r;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=a.test(t);return n||c.test(t)?f(t.slice(2),n?2:8):u.test(t)?r:+t}t.exports=function(t,e,r){var i,o,u,a,c,f,s=0,l=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function g(e){var n=i,r=o;return i=o=void 0,s=e,a=t.apply(r,n)}function w(t){var n=t-f;return void 0===f||n>=e||n<0||d&&t-s>=u}function j(){var t=b();if(w(t))return x(t);c=setTimeout(j,function(t){var n=e-(t-f);return d?y(n,u-(t-s)):n}(t))}function x(t){return c=void 0,p&&i?g(t):(i=o=void 0,a)}function O(){var t=b(),n=w(t);if(i=arguments,o=this,f=t,n){if(void 0===c)return function(t){return s=t,c=setTimeout(j,e),l?g(t):a}(f);if(d)return c=setTimeout(j,e),g(f)}return void 0===c&&(c=setTimeout(j,e)),a}return e=h(e)||0,m(r)&&(l=!!r.leading,u=(d="maxWait"in r)?v(h(r.maxWait)||0,e):u,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==c&&clearTimeout(c),s=0,i=f=o=c=void 0},O.flush=function(){return void 0===c?a:x(b())},O}}).call(this,n(0))}});