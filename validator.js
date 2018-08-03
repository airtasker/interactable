MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function() {
    checkForSelectors();
});


observer.observe(document, {
    subtree: true,
    attributes: true
});

chrome.storage.sync.get({selector: ''}, function(items) {
    window.selector = items.selector;
});

function updateSelector(element) {
    if (!element.getAttribute(window.selector)) {
        element.style.border = "3px solid #FF0000";
    }
}

function checkForSelectors() {
    var welement = ['a', 'button', 'input', 'textarea', 'select'];
    welement.map(function( ele) {
        var allele = document.getElementsByTagName(ele);
        for (var i=0, max=allele.length; i < max; i++) {
            updateSelector(allele[i]);
        }
    });
}
