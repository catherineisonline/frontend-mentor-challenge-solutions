import test from 'ava';
var fs = require('fs')
var exec = require('co-exec');

test('init()', function * (t) {
    var commit = yield exec('node index.js -i');
    t.true(fs.existsSync('.travis.yml'));
});

test('badge()', function * (t) {
    var commit = yield exec('node index.js -b');
    var cfg = require('get-git-info')(__dirname);
    
    t.regex(commit, new RegExp("/" + cfg.user + "/"));
    t.regex(commit, new RegExp("" + cfg.project + ""));
});
