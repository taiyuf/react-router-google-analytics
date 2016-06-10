export default function Ga(trackingCode) {

  if (!!window && !!trackingCode) {

    const script        = 'script';
    const url           = 'https://www.google-analytics.com/analytics.js';
    const scriptElement = document.createElement(script);
    const target        = document.getElementsByTagName(script)[0];
    const gao           = 'GoogleAnalyticsObject';

    window[gao] = 'ga';
    window.ga   = window.ga || function () {
      (window.ga.q = window.ga.q || []).push(arguments);
    };

    window.ga.l         = 1 * new Date();
    scriptElement.async = 1;
    scriptElement.src   = url;

    target.parentNode.insertBefore(scriptElement, target);
    window.ga('create', trackingCode, 'auto');
    window.ga.apply(window.ga, arguments);

    return window.ga;

  } else {

    return function () { console.log(arguments); };

  }
}
