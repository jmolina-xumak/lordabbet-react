const path = require('path');
const CopyNodeModulesPlugin = require('copy-modules-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            require('@babel/plugin-proposal-function-bind')
                                .default,
                            require('@babel/plugin-proposal-class-properties')
                                .default,
                            require('@babel/plugin-transform-modules-commonjs')
                                .default,
                        ],
                    },
                },
            },
            {
                // Preprocess our own .css files
                // This is the place to add your own loaders (e.g. sass/less etc.)
                // for a list of loaders, see https://webpack.js.org/loaders/#styling
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|otf|ttf|eot|woff|svg|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                        },
                    },
                ],
            },
            {
                test: /\.(mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    externals: {
        react: 'commonjs react',
    },
    plugins: [
        new CopyNodeModulesPlugin({
            destination: '.node_modules_prod',
        }),
    ],
};
