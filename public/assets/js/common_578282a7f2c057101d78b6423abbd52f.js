!function c(u,a,i){function s(e,t){if(!a[e]){if(!u[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(d)return d(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[e]={exports:{}};u[e][0].call(o.exports,function(t){return s(u[e][1][t]||t)},o,o.exports,c,u,a,i)}return a[e].exports}for(var d="function"==typeof require&&require,t=0;t<i.length;t++)s(i[t]);return s}({1:[function(t,e,r){"use strict";var n=u(t("./../components/lazyLoading")),o=t("../components/functions/querySelector"),c=u(t("../components/hamburger"));function u(t){return t&&t.__esModule?t:{default:t}}var a=(0,o.qSA)(".b-lazy"),i=(0,o.qS)(".main-header");document.addEventListener("DOMContentLoaded",function(){null!==a&&(0,n.default)(a),null!==i&&(0,c.default)()})},{"../components/functions/querySelector":2,"../components/hamburger":3,"./../components/lazyLoading":4}],2:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.qSA=r.qS=void 0;var n=document.querySelector.bind(document);r.qS=n;var o=document.querySelectorAll.bind(document);r.qSA=o},{}],3:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=t("./functions/querySelector");r.default=function(){var e=(0,o.qS)(".js-hamburger"),r=(0,o.qS)("body"),n=(0,o.qS)(".main-header__nav");e.addEventListener("click",function(){t(e.classList.contains("is-active"))});var t=function(t){e.classList.toggle("is-active"),e.setAttribute("aria-expanded","".concat(t?"false":"true")),r.classList.toggle("disabled-scroll"),n.classList.toggle("is-opened")}}},{"./functions/querySelector":2}],4:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t){function r(e){return["data-src","data-srcset"].forEach(function(t){return e.removeAttribute(t)})}if("IntersectionObserver"in window){var n=new IntersectionObserver(function(t){t.forEach(function(t){if(t.isIntersecting){var e=t.target;"IMG"===e.tagName?(e.src=e.getAttribute("data-src"),e.hasAttribute("srcset")&&(e.srcset=e.getAttribute("data-srcset"))):e.style.setProperty("background-image","url(".concat(e.getAttribute("data-src"),")")),r(e),n.unobserve(e)}})});t.forEach(function(t){n.observe(t)})}else t.forEach(function(t){"IMG"===t.tagName?(t.setAttribute("src",t.getAttribute("data-src")),t.hasAttribute("srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"))):t.style.setProperty("background-image","url(".concat(t.getAttribute("data-src"),")")),r(t)})}},{}]},{},[1]);