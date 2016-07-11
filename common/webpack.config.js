 var webpack = require('webpack');
 var HtmlWebpackPlugin = require('html-webpack-plugin')
 module.exports = {
     entry: {
         aa: ['./src/a.js'],
         bb: ['./src/b.js']
     },
     output: {
         path: './dist',
         filename: 'app.[name].js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         }]
     },
     plugins: [
         new webpack.optimize.CommonsChunkPlugin({
             // 提取出的公共模块的名称，js会打包为common.js，css为common.css
             // common.js会按照module.exports中output的路径打包，
             // common.css会按照ExtractTextPlugin插件设置的路径打包
             //如果按照网上的例子直接写为common.js,
             //会导致提取出来的公共css被打包成css/js/common.js/css
             name: 'common',
             //chunks----从哪些文件中提取
             //目前这里不需要设置，因为所有js文件都需要被提取
             //chunks: getEntry('./public/src/js/Entry/*/**.js')

         }),
         new HtmlWebpackPlugin({hash:true})
     ]
 }
