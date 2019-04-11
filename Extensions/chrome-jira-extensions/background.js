"use strict";

/**
 * 
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2018.12.13
 * @modified 2018.12.13
 * 
 * @description  background.js
 * @augments 
 * @example 
 * 
 */

// https://developers.chrome.com/runtime#event-onInstalled
chrome.runtime.onInstalled.addListener(function() {
    // https://developers.chrome.com/storage
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log('The color is green.');
    });
    // https://developers.chrome.com/declarativeContent
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            hostEquals: 'developer.chrome.com',
                        },
                    }),
                ],
                actions: [
                    new chrome.declarativeContent.ShowPageAction(),
                ],
            },
        ]);
    });
});