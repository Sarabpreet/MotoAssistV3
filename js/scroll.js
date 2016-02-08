/*! smooth-scroll v8.0.0 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,r,o,a,c={},i="querySelector"in document&&"addEventListener"in e&&"onhashchange"in e,u={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,scrollOnLoad:!0,callback:function(){}},s=function(){var e={},t=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=s(!0,e[r],n[r]):e[r]=n[r])};r>n;n++){var a=arguments[n];o(a)}return e},l=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,r,o=t.charAt(0),a="classList"in document.documentElement;for("["===o&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document;e=e.parentNode){if("."===o)if(a){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===o&&e.id===t.substr(1))return e;if("["===o&&e.hasAttribute(n[0])){if(!r)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};c.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,a="",c=n.charCodeAt(0);++o<r;){if(t=n.charCodeAt(o),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===o&&t>=48&&57>=t||1===o&&t>=48&&57>=t&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(o):"\\"+n.charAt(o)}return"#"+a};var d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var r=0;if(e.offsetParent)do r+=e.offsetTop,e=e.offsetParent;while(e);return r=r-t-n,r>=0?r:0},m=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},g=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},p=function(e){return null===e?0:l(e)+e.offsetTop};c.animateScroll=function(t,n,a){var c=g(n?n.getAttribute("data-options"):null),i=s(i||u,a||{},c),l="[object Number]"===Object.prototype.toString.call(t)?!0:!1,f=l?null:e.document.querySelector(t);if(l||f){var v=e.pageYOffset;r||(r=e.document.querySelector(i.selectorHeader)),o||(o=p(r));var b,O,y,S=l?t:h(f,o,parseInt(i.offset,10)),I=S-v,E=m(),H=0,L=function(r,o,a){var c=e.pageYOffset;(r==o||c==o||e.innerHeight+c>=E)&&(clearInterval(a),f&&f.focus(),i.callback(t,n))},A=function(){H+=16,O=H/parseInt(i.speed,10),O=O>1?1:O,y=v+I*d(i.easing,O),e.scrollTo(0,Math.floor(y)),L(y,S,b)},C=function(){b=setInterval(A,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()}};var v=function(){var n=e.location.hash;if(a&&(a.id=a.getAttribute("data-scroll-id"),a=null),n){n=c.escapeCharacters(n);var r=document.querySelector(t.select+'[href*="'+n+'"]');c.animateScroll(n,r,t)}},b=function(n){var r=f(n.target,t.selector);if(r&&r.hash){var o=c.escapeCharacters(r.hash);if(o===(e.location.hash||"#top"))return void c.animateScroll(o,r,t);a=document.querySelector(o),a&&(a.setAttribute("data-scroll-id",a.id),a.id="")}},O=function(e){n||(n=setTimeout(function(){n=null,o=p(r)},66))};return c.destroy=function(){t&&(document.removeEventListener("click",b,!1),e.removeEventListener("hashchange",v,!1),e.removeEventListener("resize",O,!1),t=null,n=null,r=null,o=null,a=null)},c.init=function(n){i&&(c.destroy(),t=s(u,n||{}),r=e.document.querySelector(t.selectorHeader),o=p(r),document.addEventListener("click",b,!1),e.addEventListener("hashchange",v,!1),r&&e.addEventListener("resize",O,!1),t.scrollOnLoad&&(setTimeout(function(){window.scrollTo(0,0)},1),v()))},c});


