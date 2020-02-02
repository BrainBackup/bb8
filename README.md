<img alt="CodeSnippet" src="logo.png" width="356px" style="left=50%">

#Code snippet: modular, powerful and extendable project for memory improvment.

* * *
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview
* Provide users an ability to save code snippets, highlighted data from anywhere on the web.
* Code snippets will be provided once the user starts typing in an IDE, searching, and analytics using a web application.
* The users will be able to add data using chrome-extension, keyboard shortcut, right-click and simple user interface.

## Simple development process

### local development

`docker-compose build`

`docker-compose up`

* process.env.NODE_ENV  - development, test and production - should be passed as env variable

### Chrome extension:

* Side loading the chrome extension: go to chrome://extensions, click on Load unpacked, select the chrome-extension directoy
* Open issue: the header should include `chrome-extension::` and follow up the subject of the issue.
* TODO: Automatic way to update the app.

### Test NLP service
* MLQA reserch from Facebook® should be a good start. 
