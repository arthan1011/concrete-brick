let path = require('path');
let HtmlWebpackPlugin  = require('html-webpack-plugin');

const rules = [
    {
        test: /\.ts$/,
        loader: 'ts-loader'
    },
    {
        test: /\.s[ca]ss/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader'
    }
];


module.exports = {
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: rules
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            inject: 'body',
        }),
    ],
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    }
};
