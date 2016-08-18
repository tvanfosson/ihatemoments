// ==UserScript==
// @name         Remove moments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';



(function() {
    function hideMoments() {
        var tabs = document.getElementsByClassName('js-moments-tab');
        for (var i = 0; i < tabs.length; ++i) {
            var tab = tabs[i];
            tab.style.display = 'none';
        }
    }

    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        this.addEventListener('load', function() {
            hideMoments();
        });
        origOpen.apply(this, arguments);
    };

    hideMoments();
})();
