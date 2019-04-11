
"use strict";

/**
 * 
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2018.12.13
 * @modified 2018.12.13
 * 
 * @description Options
 * @augments 
 * @example 
 * 
 */


let page = document.getElementById('buttonDiv');

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({color: item}, function() {
                console.log('color is ' + item);
            });
        });
        page.appendChild(button);
    }
}

constructOptions(kButtonColors);