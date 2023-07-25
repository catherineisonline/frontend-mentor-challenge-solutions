var parser = require('iniparser'),
    path = require('path');

module.exports = function (gitConfigPath) {
  var _path = gitConfigPath + '/.git/config';
  var results = {};
  try {
    results = parser.parseSync(_path);
  } catch (err) { }
  // console.log(results)
  return parseUrl(results['remote "origin"'].url);
};

function parseUrl(url){
  // console.log(url)
  var user, project;
  
  var arr = url.split('/');
  
  if(url.indexOf('https') != -1){
    //url: 'https://github.com/weui/weui.git'
    project = arr.pop();
    user = arr.pop();
  }else{
    //url: 'git@github.com:lutepluto/fancy.git'
    project = arr.pop();
    var _user = arr.pop();
    user = _user.split(':')[1]
  }
  
  return {
    user:user,
    project: project.replace('.git','')
  }
}