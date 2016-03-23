var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  prompting: function(){
    var done = this.async();
    this.prompt([{
      "type": "input",
      "name": "componentName",
      "message": "Component name",
      default: "myComponent"
    }], function(answers) {
        var paths = answers.componentName.split('/');
        this.componentName = paths[paths.length - 1];
        this.componentsPath = answers.componentName;

        this.componentFileName = this.componentName.replace(/\.?([A-Z]+)/g, function(x, y){return '-' + y.toLowerCase()})
      done();
    }.bind(this));
  },
  addComponent: function(){
      var args = {
           componentName: this.componentName,
           componentFileName: this.componentFileName,
           componentClassName: this.componentName.charAt(0).toUpperCase() + this.componentName.slice(1)
       };
       var pathPrefix = 'app/components/' + this.componentsPath + '/' + this.componentFileName;

      this.fs.copyTpl(this.templatePath('_component.js'), this.destinationPath(pathPrefix + '-component.js'), args);
      this.fs.copyTpl(this.templatePath('_controller.js'), this.destinationPath(pathPrefix + '-controller.js'), args);
      this.fs.copyTpl(this.templatePath('_template.html'), this.destinationPath(pathPrefix + '.html'), args);
      this.fs.copyTpl(this.templatePath('_styles.scss'), this.destinationPath(pathPrefix + '.scss'), args);
  }
});
