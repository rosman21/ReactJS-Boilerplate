var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js',
        vendor: './src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js',
    },
    watchOptions: {
        poll: true
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
              },
              {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=/css/assets/[name].[hash].[ext]'
              },
              {
                test: /\.css$/,
                exclude: path.resolve(__dirname, './app/css'),
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
              },
              {
                test: /\.css$/,
                include: path.resolve(__dirname, './app/css'),
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
              }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        })
      ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
          }),
          new HtmlWebpackPlugin({
              filename: 'index.html',
              template: './src/index.html'
          }),
          new ExtractTextPlugin({filename: 'css/[name].css'})
    ]
} else {
    module.exports.devtool = '#source-map'
}
