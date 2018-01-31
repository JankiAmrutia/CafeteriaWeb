module.exports = {
    entry: 'src/Index.jsx',
    output: {
        path: __dirname + './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
};