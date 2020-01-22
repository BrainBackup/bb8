# code-snippet

Code snippet project

This project is one of many small projects that are aiming to create backup to our brain.

## Simple development process

### Chrome extension:

* Side loading the chrome extension: go to chrome://extensions, click on Load unpacked, select the chrome-extension directoy
* Open issue: the header should include `chrome-extension::` and follow up the subject of the issue.

### Server GW:

`./run_elastic.sh`
`cd server`
`npm start`
* process.env.NODE_ENV  - development, test and production - should be passed as env variable
