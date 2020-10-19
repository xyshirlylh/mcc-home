module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue/enterprise/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variable.scss"; @import "@/assets/styles/_mixin.scss";`
      }
    }
  },

  devServer: {
    proxy: {
      "/mcc": {
        target: "http://192.168.102.103:8087",
        ws: false,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/mcc/": "/"
        }
      },
    }
  }
};
