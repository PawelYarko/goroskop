parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/bgi.jpg":[["bgi.6726cf6f.jpg","YiTp"],"YiTp"],"./../images/goroskop1.svg":[["goroskop1.67c9cd76.svg","DCwX"],"DCwX"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const t={form:document.querySelector(".main__form"),footerElStart:document.querySelector(".main__footer--start"),footerElEnd:document.querySelector(".main__footer--end"),btnContainer:document.querySelector(".form__button--container"),radioBtns:document.querySelectorAll(".form__radio-btn"),formBtn:document.querySelector(".form__button"),mainContaer:document.querySelector(".main__content")};let e="";function o(){t.footerElStart.classList.toggle("is-active"),t.btnContainer.classList.toggle("is-open"),t.footerElEnd.classList.toggle("is-active")}function n(n){n.preventDefault();for(const r of t.radioBtns)r.checked&&(e=r.value,o())}function r(e){e.preventDefault(),t.mainContaer.classList.add("is-active")}t.form.addEventListener("change",n),t.form.addEventListener("submit",r);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goroskop/src.93e39fa4.js.map