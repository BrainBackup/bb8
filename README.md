# BB8: modular, powerful and extendable project for memory improvment

<img alt="brain-backup" style="margin-left: 28%" src="logo.png" width="800px">


* * *
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![CI](https://github.com/BrainBackup/code-snippet/workflows/CI/badge.svg?branch=master)
![Docker Images Creation](https://github.com/BrainBackup/code-snippet/workflows/Docker%20Image%20CI/badge.svg?branch=master)
![Auth-service](https://github.com/BrainBackup/bb8/workflows/Auth-service/badge.svg)
![NPM packages](https://github.com/BrainBackup/bb8/workflows/NPM%20packages/badge.svg)

## Overview

* Provide users an ability to save code snippets, highlighted data from anywhere on the web.
* Code snippets will be provided once the user starts typing in an IDE, searching, and analytics using a web application.
* The users will be able to add data using chrome-extension, keyboard shortcut, right-click and simple user interface.

## Simple development process

### local development using docker

`docker-compose build`

`docker-compose up`

* process.env.NODE_ENV  - development, test and production - should be passed as env variable

### local development without docker

`cd auth-service && yarn start:dev`

`cd mysql && docker-compose up`

### Chrome extension

* Side loading the chrome extension: go to chrome://extensions, click on Load unpacked, select the chrome-extension directoy
* Open issue: the header should include `chrome-extension::` and follow up the subject of the issue.
* TODO: Automatic way to update the app.

### Test NLP service

* MLQA reserch from Facebook® should be a good start.
