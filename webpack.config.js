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
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        })
    ]
}