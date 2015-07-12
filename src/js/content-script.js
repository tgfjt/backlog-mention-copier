(function(d) {
  'use strict';

  var file = chrome.extension.getURL('/build/js/embed-copy.js');
  var s, th;
  th = d.getElementsByTagName('body')[0];
  s = d.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  return th.appendChild(s);
})(document);
