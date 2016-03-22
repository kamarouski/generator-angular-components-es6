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
        this.componentName = answers.componentName;
        this.componentFileName = answers.componentName.replace(/\.?([A-Z]+)/g, function(x, y){return '-' + y.toLowerCase()})
      done();
    }.bind(this));
  },
  addComponent: function(){
      var args = {
           componentName: this.componentName,
           componentFileName: this.componentFileName,
           componentClassName: this.componentName.charAt(0).toUpperCase() + this.componentName.slice(1)
       };
      this.fs.copyTpl(this.templatePath('_component.js'),
                      this.destinationPath('app/components/' + this.componentName + '/' + this.componentFileName + '-component.js'),
                      args);

      this.fs.copyTpl(this.templatePath('_controller.js'),
                      this.destinationPath('app/components/' + this.componentName + '/' + this.componentFileName + '-controller.js'),
                      args);

      this.fs.copyTpl(this.templatePath('_template.html'),
                      this.destinationPath('app/components/' + this.componentName + '/' + this.componentFileName + '.html'),
                      args);

      this.fs.copyTpl(this.templatePath('_styles.scss'),
                      this.destinationPath('app/components/' + this.componentName + '/' + this.componentFileName + '.scss'),
                      args);
  }
});
