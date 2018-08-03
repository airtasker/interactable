chrome.storage.sync.get({url: '', extState: true}, function(items) {
    window.allowedURL = items.url;
    window.extState = items.extState;
});



var tabUpdated = function (tabId, changeInfo, tab) {
    if (tab.url.indexOf(window.allowedURL) >= 0 && window.extState === true){
        chrome.tabs.executeScript(tabId, {
            file: 'validator.js',
            runAt: 'document_end'
        });
    }
};

chrome.tabs.onUpdated.addListener(tabUpdated);

