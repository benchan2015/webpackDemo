 module.exports = {
     /*定义入口文件的基本路径，默认值process.cwd()，即当前目录*/
     context: __dirname,
     entry: {
         page1: "./app/page1",

         //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
         page2: ["./app/page2_1", "./app/page2_2"]
     },
     output: {
         path: './dist',
         filename: '[name].bundle.js',
         publicPath: "/assets/",
         jsonpFunction:'abcaaaaaaaaaaaaaaaaaaaaaa'
     },
     module: {
         loaders: [{
             test: /\.scss$/,
             loader: 'style-loader!css-loader!sass-loader'
         }, {
             test: /\.css$/,
             loader: 'style-loader!css-loader'
         }]
     },
     devtool:'source-map'
 };

