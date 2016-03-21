var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  copyWebpackConfig: function(){
    this.fs.copyTpl(this.templatePath("_webpack.config.js"), this.destinationPath("webpack.config.js"), {appName: this.appName, outputDir: this.outputDir});
  },
  copyPackagesConfig: function(){
    this.fs.copyTpl(this.templatePath("_package.json"), this.destinationPath("package.json"), { appName: this.appName});
    this.npmInstall();
  },
  initializeApp: function(){
    var source = "_app.js";
    if(this.addSample) {
      source = "_app-sample.js";
    }
    this.fs.copyTpl(this.templatePath(source), this.destinationPath('app/' + this.appName + '.js'))
  },
  createSample: function(){
    if(!this.addSample) return;

    this.fs.copyTpl(this.templatePath('./sample/sample-component.js'), this.destinationPath('app/sample/sample-component.js'));
    this.fs.copyTpl(this.templatePath('./sample/sample-controller.js'), this.destinationPath('app/sample/sample-controller.js'));
    this.fs.copyTpl(this.templatePath('./sample/sample-service.js'), this.destinationPath('app/sample/sample-service.js'));
    this.fs.copyTpl(this.templatePath('./sample/sample-template.html'), this.destinationPath('app/sample/sample-template.html'));
    this.fs.copyTpl(this.templatePath('./sample/sample-styles.scss'), this.destinationPath('app/sample/sample-styles.scss'));
  },
  prompting: function(){
    var done = this.async();
    this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your application name',
      default: this.appname
    }, {
      type: 'confirm',
      name: 'addSample',
      message: 'Add sample component?',
      default: false
    }, {
      type: 'input',
      name: 'outputDir',
      message: 'Output directory',
      default: 'public'
    }], function(answers){
      this.appName = answers.name;
      this.addSample = answers.addSample;
      this.outputDir = answers.outputDir;
      done();
    }.bind(this));
  }
});
