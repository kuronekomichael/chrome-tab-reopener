chrome.browserAction.onClicked.addListener(function(tab) {
    const url = tab.url;
    chrome.tabs.remove(tab.id, () => {
        chrome.tabs.create({url: url});
    });
});
