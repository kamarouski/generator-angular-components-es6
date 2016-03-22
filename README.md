# Generator Angular Components ES6
[![npm](https://img.shields.io/npm/l/generator-angular2-webpack-starter.svg)](http://opensource.org/licenses/MIT)

A [Yeoman](http://yeoman.io) generator to bootstrap Angular application with Webpack and ES6 classes.

## Contribution
It's a very early version of the generator. Any feedback is welcome.

**TODO:**
* Add component generator
* Add routing support
* Add webpack dev server support

## Setting up project

* Install: `npm install -g yo generator-angular-webpack-es6`
* Run: `yo angular-webpack-es6`

## Commands
* `yo angular-webpack-es6` shows a wizard for generation of a new generator

## Generated Structure
```
angular-webpack-es6/
 ├──app/                                     * source files to be compiled to javascript
 |   ├──sample                               * optional. Sample component for the app.
 |   |  ├──sample-component.js               * Angular component definition
 |   |  ├──sample-controller.js              * Angular controller for sample component
 |   |  ├──sample-service.js                 * Angular service for sample component
 |   |  ├──sample-template.html              * Angular template for sample component
 |   |  ├──sample-styles.scss                * Styles for sample component
 |   └──%appname%.js                         * entry file for our Angular application
 ├──webpack.config.js                        * webpack config
 └──package.json                             * package.json file

```

## Webpack configuration


## License
[MIT](/LICENSE)
