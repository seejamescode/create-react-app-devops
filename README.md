# Create React App DevOps

See the app live at: https://create-react-app-devops.now.sh/

Looking for v1 that uses IBM Cloud (Bluemix)? Check it out [here](https://github.com/seejamescode/create-react-app-devops/tree/v1).

This is a repo that proves how easily it is to implement automated builds, Node servers, and Express APIs around [Create React App](https://github.com/facebookincubator/create-react-app). In this repo, we do the following (broken up by commits):

1.  [Use Create React App to get the UI up](https://github.com/seejamescode/create-react-app-devops/commit/debefa3032268719c74aeab8d168254415f0e47e)
2.  [Setup Your server with Node, Express, and Babel](https://github.com/seejamescode/create-react-app-devops/commit/b866e3ec95aaeba44b4164fd7e124c3568b08d63)
3.  [Run the app on the web with Zeit Now](https://github.com/seejamescode/create-react-app-devops/commit/f582ea67f4ff3a8ba7605af92b52d3945c6974e4)
4.  [Fetch API data while keeping secrets secure](https://github.com/seejamescode/create-react-app-devops/commit/a1e91d649c7b246c00f65c072f8e7a4f97f60eb8)
5.  [Automatic deployment from master branch pushes and tag releases using GitHub and Travis CI](https://github.com/seejamescode/create-react-app-devops/commit/8bccd0640a15c5a4661a458e0c6f5f5be03843e2)

This project was inspired by [Create React PWA](https://github.com/jeffposnick/create-react-pwa) -a project that explains how to upgrade your Create React App project to a Progressive Web App.

## Fork Instructions

1.  Create accounts at [Zeit](https://zeit.co/) (for app hosting), [Github](https://github.com) (for code hosting), and [Travis CI](https://travis-ci.org/) (for autodeployment).

2.  Install on your machine [Zeit Now Desktop](https://zeit.co/download), [Node](https://docs.npmjs.com/getting-started/installing-node), and [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-tab).

3.  [Fork this repo in the top right corner and create a local clone to your computer](https://help.github.com/articles/fork-a-repo/)

4.  Change `create-react-app-devops` to a unique app name at:

    - [now.json, line 2](https://github.com/seejamescode/create-react-app-devops/blob/master/now.json#L2)
    - [now-staging.json, line 2](https://github.com/seejamescode/create-react-app-devops/blob/master/now.json#L2) (Keep `-staging` at the end.)
    - [package.json, line 2](https://github.com/seejamescode/create-react-app-devops/blob/master/package.json#L2)
    - [package.json, line 30](https://github.com/seejamescode/create-react-app-devops/blob/master/package.json#L30)
    - [package.json, line 32](https://github.com/seejamescode/create-react-app-devops/blob/master/package.json#L32)

5.  Request a new [personal access token](https://github.com/settings/tokens/new) with repo scope from GitHub and create a `now-secrets.json` file at the root of the repo like `{ "@github": "YOUR_ACCESS_TOKEN" }`. This file will be [gitignored](https://help.github.com/articles/ignoring-files/), so it will never end up on GitHub to keep your token secure.

6.  Run `now secret add github YOUR_ACCESS_TOKEN` so that Zeit Now knows your access token without receiving the secrets file.

7.  Run `yarn deploy:staging && yarn deploy:production` to push a staging version and production version of your app. You should be able to access them at YOUR_UNIQUE_APP_NAME.now.sh and YOUR_UNIQUE_APP_NAME-staging.now.sh.

8.  Get a token at [Zeit](https://zeit.co/account/tokens). Then go to [Travis CI](https://travis-ci.org/), activate the repo, and add an environment variable called `NOW_TOKEN` with the token value you just received.

To recap what we have done: First, we quickly got our React project configured thanks to Create React App. Then we built a simple server that can use any [Babel](https://babeljs.io/docs/en) presets and plugins you want to add to `package.json`. We pushed the app online with both a staging instance and production instance. Next, we have Travis updating the staging instance whenever you push to your master branch on GitHub with no downtime. And to update the production instance, all you have to do us make a release on the GitHub repo.

I hope this project has helped make your workflow easier as you make epic web apps! A big 🙏 goes to the contributors of [Babel](https://github.com/babel/babel/graphs/contributors), [Create React App](https://github.com/facebookincubator/create-react-app/graphs/contributors), [Express](https://github.com/expressjs/express/graphs/contributors), [Node](https://github.com/nodejs/node/graphs/contributors), and all other packages used. Also, all the ❤️️ goes to Zeit, Github, and Travis CI for their free tiers.
