(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CoreMicroDevSdk = {}));
})(this, (function (exports) { 'use strict';

  var index = 42;

  function wtf() {
    return "fuck";
  }

  const PI = 3.14;
  function addPi(x) {
    console.log(x);
    return x + PI;
  }

  function add(a, b) {
    return a + b;
  }
  function answerIs() {
    console.log("the answer is " + index);
    return "the answer is " + index;
  }

  exports.add = add;
  exports.addPi = addPi;
  exports.answerIs = answerIs;
  exports.wtf = wtf;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
