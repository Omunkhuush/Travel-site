const path = require("path");
const postCSSPlugins = [require('postcss-simple-vars'),
                        require('postcss-nested'),
                        require('autoprefixer'),
                        require('postcss-import'),
                        require('postcss-mixins')
                    ];
module.exports = {
    entry:"./app/assets/scripts/App.js", 
    output: {
        filename:'bundled.js',
        path:path.resolve(__dirname,'app')
    },
    devServer:{
        watchFiles:{
            paths:["./app/**/*.html"],
            options:{
                usePolling:false,
            }
        },
        static:{
            directory: path.join(__dirname,'app'),
        },
        hot: true,
        port: 3000
        //host: '0.0.0.0'
    },
    mode:'development',
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader',{
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions:{
                            plugins:postCSSPlugins
                        }
                    }
                }],
            },
        ],
    },
};