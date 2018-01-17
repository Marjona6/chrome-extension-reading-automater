function addArticle(link) {
	alert('adding article: ', link);
	// get link
	// save link somewhere... where?
}

chrome.contextMenus.create({
	title: 'Add link to Reading List',
	contexts: ["link"],
	onclick: addArticle
});