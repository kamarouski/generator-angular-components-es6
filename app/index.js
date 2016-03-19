var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  copyWebpackConfig: function(){
    this.fs.copyTpl(this.templatePath("_webpack.config.js"), this.destinationPath("webpack.config.js"));
  },
  copyPackagesConfig: function(){
    this.fs.copyTpl(this.templatePath("_package.json"), this.destinationPath("package.json"));
//    this.npmInstall();
  },
  initializeApp: function(){
    this.fs.copyTpl(this.templatePath("_app.js"), this.destinationPath('app/' + this.appName + '.js'))
  },
  prompting: function(){
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your application name',
      default: this.appname
    }, function(answers){
      this.appName = answers.name;
      done();
    }.bind(this));
  }
});
