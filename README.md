# Generator Angular Components ES6
[![npm](https://img.shields.io/npm/l/generator-angular2-webpack-starter.svg)](http://opensource.org/licenses/MIT)

A [Yeoman](http://yeoman.io) generator to bootstrap Angular 1.5+ applications with ES6 and Webpack.

Suitable for component-based application structure. Facilitates creation of components tree.

## Contribution
It's a very early version of the generator. Any feedback is welcome.

**TODO:**
* ~~Add component generator~~
* Add routing support
* Add webpack dev server support

## Setting up project

* Install: `npm install -g yo generator-angular-components-es6`
* Run: `yo angular-components-es6`

## Commands
* `yo angular-components-es6` shows a wizard for generation of a new generator.
* `yo angular-components-es6:component` generates new component in your application. Supports nested components. E.g. 'parent/nested' will generate a component with name 'nested' in /app/components/parent directory.

## Generated Structure
```
angular-webpack-es6/
 ├──app/                                     * source files to be compiled to javascript
 |   ├──components                           * Root directory for your application components
 |   └──%appname%.js                         * entry file for our Angular application
 ├──webpack.config.js                        * webpack config
 └──package.json                             * package.json file

```

## Component Structure
Generated component directory has the following structure
```
app/components/awesome
 ├──nestedComponent/                         * Nested component used by this component.
 ├──awesome-component.js                     * Angular module and component registration file. Includes Angular 1.5+ component registration logic.
 ├──awesome-controller.js                    * Angular controller for your component.
 ├──awesome.html                             * Angular template for your component.
 └──awesome.scss                             * Styles for your component
```

## Webpack features
* Bundles and minifies all javascript and css files.
* Copies all image files to output folder and gives unique names to images based on content hash.
* Generates a single sprite images for all images in /app/shared/images/sprite directory.
* Gives unique names to assets based on its content hash which help busting cache for changed assets.
* Includes all angular templates into js file and adds them to template cache.
* Enables LiveReload for dev configuration

## License
[MIT](/LICENSE)
