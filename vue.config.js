const { resolve } = require('path')

module.exports = {
  configureWebpack: {
    name: 'Workshop Store',
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        '@src': resolve(__dirname, 'src'),
        '@router': resolve(__dirname, 'src/router'),
        '@views': resolve(__dirname, 'src/router/views'),
        '@layouts': resolve(__dirname, 'src/router/layouts'),
        '@components': resolve(__dirname, 'src/components'),
        '@state': resolve(__dirname, 'src/state'),
      },
    },
  },
}
