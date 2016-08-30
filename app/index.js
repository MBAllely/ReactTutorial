var React         = require('react');
var ReactDOM      = require('react-dom');
var routes        = require('./config/routes');
var Raven         = require('raven-js');

var sentryKey = '33c9bf015f744c0a89c9bae68ae64116';
var sentryApp = '94703';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL,{
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install()

ReactDOM.render(
  routes,
  document.getElementById('app')
);
