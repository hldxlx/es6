const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:__dirname + '/public',
        filename:'./js/[name].js'
    },
    devServer:{
        contentBase:'./public',
        inline:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        })
    ]
}