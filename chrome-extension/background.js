// function createMenu() {
//   const menus = [
//     { id: 'devtools-left', title: 'To left' },
//     { id: 'devtools-right', title: 'To right' },
//     { id: 'devtools-bottom', title: 'To bottom' },
//     { id: 'devtools-panel', title: 'Open in a panel (enable in browser settings)' },
//     { id: 'devtools-remote', title: 'Open Remote DevTools' }
//   ];

//   let shortcuts = {};
//   chrome.commands.getAll(commands => {
//     commands.forEach(({ name, shortcut }) => {
//       shortcuts[name] = shortcut;
//     });

//     menus.forEach(({ id, title }) => {
//       chrome.contextMenus.create({
//         id: id,
//         title: title + (shortcuts[id] ? ' (' + shortcuts[id] + ')' : ''),
//         contexts: ['all']
//       });
//     });
//   });
// }
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

  chrome.contextMenus.create({
    id: 'saveCodeSnippet',
    title: 'Save code snippet',
    contexts: ['all']
  });
  chrome.contextMenus.create({
    id: 'highlight',
    title: 'Highlight',
    contexts: ['all']
  });
  chrome.contextMenus.onClicked.addListener(function(data) {
    console.log('adding listner', data)
//     editable: false
// frameId: 0
// menuItemId: "saveCodeSnippet"
// pageUrl: "chrome://extensions/"
// selectionText: "lflamoameidbdinphdjhmpbkimfobcdc"
// ?pageUrl=${data.pageUrl}&action=${data.menuItemId}&selectionText=${data.selectionText}
    const url = 'http://localhost:3009/api/v1/save';
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({
        menuItemId: data.menuItemId,
        selectionText: data.selectionText,
        pageUrl: data.pageUrl
      }) // body data type must match "Content-Type" header
    }).then(d => console.log('response from server',d))
    .catch(err => console.error(err));
    // fetch(`http://localhost:3009/api/v1/save`, {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // })
  });
});
// chrome.runtime.onInstalled.addListener(() => {
//   createMenu();
// });