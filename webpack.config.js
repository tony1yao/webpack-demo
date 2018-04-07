
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

            }
        ]
    }
}