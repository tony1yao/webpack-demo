
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: 'js/[name]-[hash].js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'a.html',
            title: 'this is a.html',
            chunks: ['main','a'],
            inject: false
        }),
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'b.html',
            title: 'this is b.html',
            chunks: ['b','a'],
            inject: false 
        }),
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'c.html',
            title: 'this is c.html',
            chunks: ['c','a'],
            inject: false
        })
    ]
}