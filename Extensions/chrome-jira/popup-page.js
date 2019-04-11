
"use strict";

/**
 * 
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2018-12-16
 * 
 * @description 
 * @augments 
 * @example 
 * 
 */

function click(e) {
    chrome.tabs.executeScript(null,{
        code: "document.body.style.backgroundColor='" + e.target.id + "'",
    });
    window.close();
}

function change(type = ``) {
    chrome.tabs.executeScript(null,{
        code: `document.body.classList.add("${type}");`,
        // code: `document.body.setAttribute("type", "${type}");`,
        // code: `document.body.classList.add("${type}");`,
    });
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    // change color
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
    // 
    var select = document.querySelector(`[id="jira-type"]`);
    select.addEventListener('change', () => {
        // let value = document.querySelector(`[id="jira-type"]`).value;
        let value = select.value;
        console.log(`option value =`, value);
        if (value) {
            change(value);
        }
    });
});

