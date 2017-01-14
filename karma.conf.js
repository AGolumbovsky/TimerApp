var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        sigleRun: true,
        frameworks:['mocha'],
        files: [
            // 'node_modules/jquery/dist/jquery.min.js',
            // 'node_modules/foundationj-sites/dist/foundation.min.js',
            'app/tests/**/*.test.jsx'
        ],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};