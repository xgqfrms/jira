# demo

https://github.com/hartleybrody/buzzkill/blob/master/bootstrap.js

https://github.com/hartleybrody/buzzkill/blob/master/manifest.json

```js
// when the extension is first installed
chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({ clean_news_feed: true });
});

// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
    if (tab.url.toLowerCase().indexOf("facebook.com") > -1) {
        chrome.pageAction.show(tab.id);
    }
});

// update the icon when the user's settings change
// chrome.storage.onChanged.addListener(function(changes, areaName){
//     alert("changed settings");
//     console.log("changed settings");
//     if (localStorage["clean_news_feed"] == "true"){
//         path = "active-icon.jpeg";
//     } else {
//         path = "inactive-icon.jpeg";
//     }
//     chrome.tabs.getCurrent( function(tab){
//         chrome.pageAction.setIcon({
//             "tabId": tab.id,
//             "path": path
//         });
//     });
// });
```

```js
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"]
  });
});
```

```js
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"]
  });
});

// This will run when a bookmark is created.
chrome.bookmarks.onCreated.addListener(function() {
  // do something
});
chrome.runtime.onMessage.addListener(function(message, sender, reply) {
  chrome.runtime.onMessage.removeListener(event);
});
```

```js
//
```

## content script

```js

  chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == “changeColor”){
        chrome.tabs.executeScript({
          code: 'document.body.style.backgroundColor="orange"'
        });
      }
   });

```

```js
  chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == “runContentScript”){
        chrome.tabs.executeScript({
          file: 'contentScript.js'
        });
      }
   });

```

## github jira chrome extensions

https://github.com/RobQuistNL/chrome-github-jira/blob/master/src/options.js

```js
chrome.storage.sync.get({}, function() {
    //
});
chrome.storage.sync.set({}, function() {
    //
});

chrome.storage.sync.remove(['jiraUrl', 'prTemplate']);

```

https://github.com/maxday/jira-issue-easyCopy/blob/master/content.js


```js

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    var issueNumber = document.getElementById("key-val").textContent;
    var issueDescription = document.getElementById("summary-val").textContent;
    sendResponse(issueNumber + " - " + issueDescription);
});


```

https://github.com/maxday/jira-issue-easyCopy/blob/master/background.js

```js

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, { text: "report_back" }, sendToClipbord);
});
 
function sendToClipbord(myString) {
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = myString;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
}

```

https://github.com/taylorfoss89/Jira-Chrome-Extension/blob/master/jiraExtension/popup.js


```js
    chrome.tabs.update({
        url: "https://contegixapp1.livenation.com/jira/browse/" + jiraGroup + '-' + jiraNumber
    });

```


https://github.com/hbmartin/chrome-jira/blob/master/background.js

```js
chrome.browserAction.setBadgeText({text: count.toString()});

chrome.browserAction.setBadgeBackgroundColor({color: [20, 20, 20, 230]}); 

chrome.windows.getAll({populate:true}, function(winData) {
    //
});

// Handle Jira keyword in omnibox
chrome.omnibox.onInputEntered.addListener(function(text) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, {
      url: jira_url + "/secure/QuickSearch.jspa?searchString=" + text
    });
  });
});

chrome.extension.onMessage.addListener(function(msg,sender,sendResponse){
  if (msg == "updateJira"){
    console.log("async update");
    setTimeout(updateJira, 2);
  }
});

```

https://github.com/hbmartin/chrome-jira/blob/master/common.js
https://github.com/hbmartin/chrome-jira/blob/master/manifest.json


https://github.com/hbmartin/chrome-jira/blob/master/options.js

```js
chrome.extension.sendMessage("updateJira");

```
https://github.com/hbmartin/chrome-jira/blob/master/popup.js

```js
chrome.extension.getBackgroundPage().updateJira();
window.open(chrome.extension.getURL("options.html"));
chrome.extension.sendMessage("updateJira");

```

https://github.com/joshuaheng/jira-github-chrome/blob/master/background.js


```js
chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  if (info.status == "complete") {
    chrome.tabs.executeScript(tabId, {file: 'content.js'});
  }
});

```
https://github.com/joshuaheng/jira-github-chrome/blob/master/content.js

```js

(() => {
  const $title = document.querySelector('.js-issue-title');
  if (!$title) {
    return;
  }

  chrome.storage.local.get(['jiraUrl', 'inlineLinks'], (options) => {
    const jiraUrl = !!options.jiraUrl ?
      options.jiraUrl :
      'https://jira.nextcapital.com';

    let title = $title.innerHTML.replace(/(<a[^>]+>|⬆︎|<\/a>)/g, '');

    title.match(/[a-zA-Z0-9-]+(?=[\],\s\d#]*\])/g).forEach((tag) => {
      const url = `${jiraUrl}/browse/${tag}`;
      const attrs = `href="${url}" target="_blank"`;

      const replacement = options.inlineLinks === false ?
        `${tag}<a ${attrs}>⬆︎</a>` :
        `<a ${attrs}>${tag}</a>`;

      title = title.replace(tag, replacement);
    });

    $title.innerHTML = title;
  });
})();

```
https://github.com/joshuaheng/jira-github-chrome/blob/master/options.js


```js

const $jiraUrlInput = document.querySelector('#jira-url');
const $inlineLinksInput = document.querySelector('#inline-links');

chrome.storage.local.get(['jiraUrl', 'inlineLinks'], (options) => {
  if (!!options.jiraUrl) {
    $jiraUrlInput.value = options.jiraUrl;
  }

  if (options.inlineLinks !== false) {
    $inlineLinksInput.setAttribute('checked', 'checked');
  }
});

$jiraUrlInput.addEventListener('change', () => {
  chrome.storage.local.set({ jiraUrl: $jiraUrlInput.value });
});

$inlineLinksInput.addEventListener('change', () => {
  chrome.storage.local.set({ inlineLinks: $inlineLinksInput.checked });
});

```
