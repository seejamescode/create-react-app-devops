# Create React App DevOps

See the app live at: https://create-react-app-devops.mybluemix.net/

This is a repo that proves how easily it is to implement automated builds around [Create React App](https://github.com/facebookincubator/create-react-app). In this repo, we do the following (broken up by commits):

1. [Use Create React App to Get the UI Up](https://github.com/seejamescode/create-react-app-devops/commit/0dbaf64a02f0eeedba2e5a134d472a58b3fc55a5)
2. [Setup Your Server with Node, Express, and Babel](https://github.com/seejamescode/create-react-app-devops/commit/aafd7e34b43906814b7bb49e0a3d33e211e81281)
3. [Run the App on the Web with Bluemix](https://github.com/seejamescode/create-react-app-devops/commit/3d61ec57acdbd0988c4aadf402415d290cf9c064)
4. [Automagically Deploy from Github with Travis CI](https://github.com/seejamescode/create-react-app-devops/commit/0a624c089cdf19c966c431d49aeaa2ea9992941f)
5. [Fetch API Data While Keeping Keys Secure](https://github.com/seejamescode/create-react-app-devops/commit/2a4fe33006f46b4f036f1846874ef869243d5743)
6. [Create a Staging App for Experimentation](https://github.com/seejamescode/create-react-app-devops/commit/e792b417e6a6b843516fd485668587bc9f513c04)

There are three ways to implement this in your own Create React App project:

- Follow along with the Medium story to make it yourself: [Let's Write Create React App DevOps Together](https://medium.com/@seejamescode/lets-write-create-react-app-devops-together-dc19512c6fbb#.un9m9z1qn)
- Inspect the comparison between the initial Create React App use and the final commit: [Github Comparison Between First and Last Commit](https://github.com/seejamescode/create-react-app-devops/compare/0dbaf64a02f0eeedba2e5a134d472a58b3fc55a5...master)
- Fork this repo and follow the instructions below: [Fork Create React App DevOps](https://github.com/seejamescode/create-react-app-devops#fork-destination-box)

This project was inspired by [Create React PWA](https://github.com/jeffposnick/create-react-pwa) -a project that explains how to upgrade your Create React App project to a Progressive Web App.

## Fork Instructions

1) Create accounts at [Bluemix](https://bluemix.net/), [Github](https://console.ng.bluemix.net/), and [Travis CI](https://travis-ci.org/).

2) Install on your machine the [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html), [Node](https://docs.npmjs.com/getting-started/installing-node), and [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-tab).

3) You will change `create-react-app-devops` to a unique app name on:

- [.travis.yml](https://github.com/seejamescode/create-react-app-devops/blob/master/.travis.yml) - Lines 24 and 30
- [manifest-staging.yml](https://github.com/seejamescode/create-react-app-devops/blob/master/manifest-staging.yml) - Line 3
- [manifest.yml](https://github.com/seejamescode/create-react-app-devops/blob/master/manifest.yml) - Line 3
- [package.json](https://github.com/seejamescode/create-react-app-devops/blob/master/package.json) - Line 2

4) Add your Bluemix account email to lines 11 and 12 of [.travis.yml](https://github.com/seejamescode/create-react-app-devops/blob/master/.travis.yml)

5) Login into Bluemix from your terminal with `cf login -a https://api.ng.bluemix.net`

6) Run `cf push <your-app-name> -f manifest.yml` to push the production version of your app.

7) Run `cf push <your-app-name>-staging -f manifest-staging.yml` to push the staging version of your app.

8) Request a new access token from github: https://github.com/settings/tokens/new

9) Set that access token in `keys.json` in the root of your repo. This file is already listed in your `.gitignore`. So no worries about the public stealing your API key:
```
{
  "github": "<your-github-key>"
}
```

10) Run `cf cups keys -p keys.json` to upload your key to a Bluemix service.

11) Commit and push your repo to Github.

12) Access Travis CI and go to your repo's settings on there. Add an environment variable called `BLUEMIX_PASSWORD` and set it to your Bluemix password.

To recap what we have done: First, we quickly got our React project configured thanks to Create React App. Then we built a simple server. We pushed the app into the world. Next, we got Travis deploying the app (with zero downtime) for any of our changes. Lastly, we also set up a staging app so that we could test pre-release.

To recap what we have done: First, we quickly got our React project configured thanks to Create React App. Then we built a simple server. We pushed the app into the world. Next, we got Travis deploying the app (with zero downtime) for any of our changes. Then we used the Github API while keeping our key away from public eyes. Lastly, we also set up a staging app so that we could test pre-release.

I hope this project has helped make your workflow easier as you make epic web apps! A big 🙏 goes to the contributors of [Babel](https://github.com/babel/babel/graphs/contributors), [Create React App](https://github.com/facebookincubator/create-react-app/graphs/contributors), [Express](https://github.com/expressjs/express/graphs/contributors), [Node](https://github.com/nodejs/node/graphs/contributors), and all other packages used. Also, all the ❤️️ goes to Bluemix, Github, and Travis CI for their free tiers.
