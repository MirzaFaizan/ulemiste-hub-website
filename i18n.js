/* eslint-disable no-undef */
module.exports = {
    locales: ['en', 'ee'],
    defaultLocale: 'en',
    pages: {
        '*': ['common']
    },
    loadLocaleFrom: (lang, ns) =>
        // You can use a dynamic import, fetch, whatever. You should
        // return a Promise with the JSON file.
        import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default)
};
