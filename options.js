// Saves options to chrome.storage
function save_options() {
    var url = document.getElementById('url').value;
    var selector = document.getElementById('selector').value;
    var extState = document.getElementById('extState').checked;
    chrome.storage.sync.set({
        url: url,
        selector: selector,
        extState: extState
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
    chrome.runtime.reload()
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        url: '',
        selector: '',
        extState: true
    }, function(items) {
        document.getElementById('url').value = items.url;
        document.getElementById('selector').value = items.selector;
        document.getElementById('extState').checked = items.extState;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);