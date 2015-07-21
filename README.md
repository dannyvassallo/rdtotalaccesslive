#RD Total Acess Live

A gated app for livestream features on the Radio Disney iPhone/Android App webview.

This includes:

1. jQuery
2. Bootstrap
4. Heroku Deployment Config


### Getting Started

------------------------
Clone the repo using the GUI or terminal. To do so in terminal, use the following:
```shell
git clone https://github.com/dannyvassallo/rdtotalaccesslive.git
cd rdtotalaccesslive
```

From the "rdtotalaccesslive" directory, install the gems by running the following:
```shell
bundle install
```

To fire up the server while in the "rdtotalaccesslive" directory use this command:
```shell
middleman s
```

If you are having issues with livereload not working fire up the server using:
```shell
middleman s --force-polling --verbose
```

To kill the server use "ctrl+c"

If you find yourself curious as to what directory you are in use the following in terminal:
```shell
pwd
```
It should turn up "rdtotalaccesslive"

### Deploying

Create a new app on heroku using heroku-cli. Pass in the following:
```shell
heroku create YOUR-APP-NAME
```

To deploy, commit all changes and pass in:
```shell
git push heroku master
```

To deploy a non-master branch use:
```shell
git push heroku MY-NEW-BRANCH:master
```
