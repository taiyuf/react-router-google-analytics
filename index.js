'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ga;
function Ga(trackingCode) {

  if (!!window && !!trackingCode) {

    var script = 'script';
    var url = 'https://www.google-analytics.com/analytics.js';
    var scriptElement = document.createElement(script);
    var target = document.getElementsByTagName(script)[0];
    var gao = 'GoogleAnalyticsObject';

    window[gao] = 'ga';
    window.ga = window.ga || function () {
      (window.ga.q = window.ga.q || []).push(arguments);
    };

    window.ga.l = 1 * new Date();
    scriptElement.async = 1;
    scriptElement.src = url;

    target.parentNode.insertBefore(scriptElement, target);
    window.ga('create', trackingCode, 'auto');
    window.ga.apply(window.ga, arguments);

    return window.ga;
  } else {

    return function () {
      console.log(arguments);
    };
  }
}
