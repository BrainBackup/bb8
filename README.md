# code-snippet
Code snipper project
The project should give ability to users to use code from articles they found intresting.
Contribution is more than welcome.

## Simple development process

[ ] Side loading the chrome extension: go to chrome://extensions, click on Load unpacked, select the chrome-extension directoy
[ ] develop the server GW:
`cd server`
`npm run dev`
[ ] run elasticsearch: `./run_elastic.sh` 

[ ] TODO: add one docker-compose to rule them  all.

* process.env.NODE_ENV  - development, test and production - should be passed as env variable