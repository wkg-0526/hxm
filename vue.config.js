module.exports = {
  publicPath: "./",
  // process.env.NODE_ENV === "production" ? "/production-sub-path/" : "./",
  devServer: {
    proxy: {
      "*": {
        target: "http://1669260du6.iok.la", // 要请求的后台地址

        changeOrigin: true, // 是否跨域
        // pathRewrite: {
        // 	'^/user': '/',
        // },
      },
    },
  },
};
