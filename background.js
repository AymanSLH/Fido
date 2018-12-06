function getword(info,tab) {
  chrome.tabs.create({
    url: "http://www.google.com/search"
  });
}

chrome.contextMenus.create({
  title: "Block This Site",
  contexts:["all"],
  onclick: getword
});

chrome.contextMenus.create({
  title: "Only Hide This Page",
  contexts:["all"],
  onclick: getword
});
