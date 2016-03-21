var webpack = require('webpack');
var path = require('path');

var AssetsWebpackPlugin = require('assets-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');
var SpriteSmithPlugin = require('webpack-spritesmith');

var PROD = JSON.parse(process.env.PROD_ENV || '0');
var DEV = !PROD;

var settings = {
    destDir: '/<%= outputDir %>/'
};

settings.root = path.join(__dirname, path.dirname(settings.destDir));

var plugins = [
    new ExtractTextPlugin("[hash]/[name].css"),
    new AssetsWebpackPlugin(),
    new CleanWebpackPlugin([settings.destDir.split('/').slice(-2)[0]], {
        root: settings.root,
        versbose: true,
        dry: false
    }),
    new SpriteSmithPlugin({
        src: {
            cwd: path.resolve(__dirname, 'app/shared/images/sprite'),
            glob: '*.png'
        },
        target: {
            image:  path.resolve(__dirname, 'app/shared/images/sprite.png'),
            css: path.resolve(__dirname, 'app/shared/sass/sprite.scss')
        },
        apiOptions: {
            cssImageRef: '../images/sprite.png'
        }
    })
];

if (PROD) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: PROD, compress: { warnings: false } }));
}

if (DEV) {
    plugins.push(new LiveReloadPlugin());
}

module.exports = {
  cache: true,
  context: __dirname,
  entry: './app/<%= appName %>.js',
  output: {
    filename: '[hash]/name.js',
    path: path.join(__dirname, "<%= outputDir %>"),
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015']}},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?" + (PROD ? "minimize" : "-minimize") + "!sass-loader") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?" + (PROD ? "minimize" : "-minimize")) },
      { test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[hash].[ext]' },
      { test: /\.html$/, include: /app/, loader: 'ngtemplate?relativeTo=' + path.resolve(__dirname, './app') + '/!html'},
      { test: /\.svg$/, loader: "url?limit=8192"}
    ]
  },
  plugins: plugins
}
