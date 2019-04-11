chrome.runtime.onInstalled.addListener(function() {
    // chrome.contextMenus.create({
    //     "id": "sampleContextMenu",
    //     "title": "Sample Context Menu",
    //     "contexts": ["selection"]
    // });
    setTimeout(() => {
        try {
            // SVNCC({ kind: "BUG修复", testing: true, });
            let header = document.querySelector(`[class="jumbotron-lead"]`);
            let title = header.innerText;
            // alert(`title = ${title}`);
            // console.log(`title =`, title);
            // if (window.copy) {
            //     window.copy(title);
            //     alert(`copied!`);
            // } else {
            //     console.error(`auto copy failed!`, window);
            //     console.error(`auto copy failed!`, window.copy);
            //     // undefined
            // }
            console.log(`bg title =`, title);
            chrome.tabs.executeScript(
                null,
                {
                    code: 'window.copy(' + title + ');',
                },
            );
        } catch (error) {
            console.log(`Content Script Error`, error);
        }
    }, 3000);
});

// // This will run when a bookmark is created.
// chrome.bookmarks.onCreated.addListener(function() {
//     // do something
// });
// chrome.runtime.onMessage.addListener(function(message, sender, reply) {
//     chrome.runtime.onMessage.removeListener(event);
// });
