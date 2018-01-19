function addArticle() {
    return function (info, tab) {
        var url = info.linkUrl;
        alert(url);
        // below: need logic to first check sync storage for the key
        // if it exists, get its value and add this url on to the end of the list of urls
        // if it doesn't exist, set it and add this url as the value
        // anytime a user adds a new value, it should be added on to the end (separated by commas? spaces?)
        //        chrome.storage.sync.set({'key': 'value'});
        //        chrome.tabs.create({
        //            url: url,
        //        });
    }
    // save link somewhere... where?
}

// for viewing a list of saved articles

// for loading one saved article to read

// for finishing a saved article and loading the next

// for automatically loading the reading browser at a set time/date

// for setting the time and date and reading browser options

chrome.contextMenus.create({
    title: 'Add link to Reading List',
    contexts: ["link"],
    onclick: addArticle()
});
