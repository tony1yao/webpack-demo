
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/app.js',
    output: {
        path: __dirname + "/dist",
        filename: 'js/[name]-bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'index.html',
            inject: 'body'
        })
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['env']
                    }
                }

            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader?importLoaders=1","postcss-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader","css-loader","postcss-loader","less-loader"]
            }
        ]
    }

}