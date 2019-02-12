const path = require('path');

module.exports = {
    entry: './Scripts/es6/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        path: path.resolve( __dirname,  './Scripts/build'),
        publicPath: '/',
        filename: 'bundle.js'
    }
    
};