(function() {
  'use strict';

  chrome.contextMenus.create({
    title: 'Copy from now comment',
    type: 'normal',
    contexts: ['all'],
    onclick: function() {
      chrome.tabs.executeScript(null, {
        file: 'build/js/copy.js',
        allFrames: true
      });
    }
  });

  chrome.contextMenus.create({
    title: 'Paste',
    type: 'normal',
    contexts: ['all'],
    onclick: function() {
      chrome.tabs.executeScript(null, {
        file: 'build/js/paste.js',
        allFrames: true
      });
    }
  });

  chrome.contextMenus.create({
    title: 'Clear',
    type: 'normal',
    contexts: ['all'],
    onclick: function() {
      chrome.tabs.executeScript(null, {
        file: 'build/js/clear.js',
        allFrames: true
      });
    }
  });
})();
