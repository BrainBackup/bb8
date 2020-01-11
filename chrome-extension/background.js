function createMenu() {
  const menus = [
    { id: 'devtools-left', title: 'To left' },
    { id: 'devtools-right', title: 'To right' },
    { id: 'devtools-bottom', title: 'To bottom' },
    { id: 'devtools-panel', title: 'Open in a panel (enable in browser settings)' },
    { id: 'devtools-remote', title: 'Open Remote DevTools' }
  ];

  let shortcuts = {};
  chrome.commands.getAll(commands => {
    commands.forEach(({ name, shortcut }) => {
      shortcuts[name] = shortcut;
    });

    menus.forEach(({ id, title }) => {
      chrome.contextMenus.create({
        id: id,
        title: title + (shortcuts[id] ? ' (' + shortcuts[id] + ')' : ''),
        contexts: ['all']
      });
    });
  });
}
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  
  chrome.contextMenus.onClicked.addListener(({ menuItemId }) => {
    console.log('yOHAY DATAY  ');
    debug;
  });
});
chrome.runtime.onInstalled.addListener(() => {
  createMenu();
});