let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // https://developers.chrome.com/content_scripts#pi
        // https://developers.chrome.com/extensions/activeTab
        // https://developers.chrome.com/tabs#method-executeScript
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code: 'document.body.style.backgroundColor = "' + color + '";'
            }
        );
    });
};