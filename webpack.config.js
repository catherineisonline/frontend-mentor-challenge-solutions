// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js', // Your entry point
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Your HTML template
            filename: 'index.html', // Output filename for HTML
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], // Ensures ES6+ code works in older browsers
                    },
                },
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
        compress: true,
        port: 8080,
    },
};
