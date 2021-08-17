/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const nextTranslate = require('next-translate');

module.exports = {
    eslint: { ignoreDuringBuilds: true },
    images: { domains: ['new.eluring.com'] },
    nextTranslate: nextTranslate({
        webpack: (config) => {
            return config;
        },
        webpackDevMiddleware: (config) => {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300
            };

            return config;
        }
    })
};
