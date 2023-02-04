const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        port: 5001,
        historyApiFallback: true
    },
    module: {
         rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                
            },
            {
                test: /\.module\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader'
                    }
                ]
            }
         ]
    },
    resolve: {
        extensions: [".js",'.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            publicPath: '/' 
        })
    ]
}