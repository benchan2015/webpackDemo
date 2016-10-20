var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var glob = require('glob');
var fs = require("fs");
glob.sync('./dist/**/*.js').forEach(function(entry) {
    fs.unlinkSync(entry);
});

module.exports = {
    entry: { index: './src/javascripts/index', abc: './src/javascripts/aaa' },
    output: {
        path: 'dist',
        publicPath: '../',
        filename: 'js/[name].[chunkhash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './src/aaa.html',
            template: './src/aaa.html',
            title: 'Custom template',
            inject: 'body',
            chunks: ['abc', 'vendors']
        }),
        new HtmlWebpackPlugin({
            filename: './src/index.html',
            template: './src/index.html',
            title: 'Welcome',
            inject: 'body',
            chunks: ['index', 'vendors']
        }),
        new CommonsChunkPlugin({
            name: 'vendors' // 将公共模块提取，生成名为`vendors`的chunk    
        }),
        new webpack.ProvidePlugin({
            Vue: 'Vue'
        }),
    ],
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.vue', ''], //注意要添加''，不然查找文件时后缀不在里面的会报错，如html不在里面，那么htmlwebpackplugin中的file中是html结尾的就会报错
    }
};
