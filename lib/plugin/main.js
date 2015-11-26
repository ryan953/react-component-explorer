var fs = require('fs');

// var template = require('./index.template.html'); // TODO needs babel plain file loader
var template = fs.readFileSync('./index.template.html', {
  encoding: 'utf8',
});

var Template = {
  size: function() {
    return template.length;
  },
  source: function() {
    return template;
  },
};

var Plugin = function(options) {
  console.log('plugin options');
  this.options = options;
};

Plugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {

    compilation.assets['uie.template.html'] = Template;
    callback();
  });
};

module.exports = Plugin;
