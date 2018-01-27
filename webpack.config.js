const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    entry:{
        index: __dirname + '/src/js/index.js'
    },
    output:{
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module:{
        rules:[
            {
                test: /.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
          'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev? '"development"':'"production"'
            }
        }),
        new HTMLPlugin({
            filename:'index.html',
            template:"./index.html"
        })//路由
    ]
}

if(isDev){
    config.devServer = {
        contentBase: "/",//根目录必须加
        host: '0.0.0.0',//port不用指定，程序会自动分配未被占用的端口
        overlay: {
            errors :true
        },
        open: true
    }
}

module.exports = config
