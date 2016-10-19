var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
  entry:{index: './src/index.js',abc:'./src/aaa.js'},
  output: {
    path: 'dist',
    publicPath:'../',
    filename: 'js/[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:'./src/aaa.html',
      template:'./src/aaa.html',
      title: 'Custom template',
      inject: 'head',
      chunks:['abc']
    }),
    new HtmlWebpackPlugin({
      filename:'./src/index.html',
      template:'./src/index.html',
      title: 'Welcome',
      inject: 'body',
      chunks:['index']
    })
  ]
};