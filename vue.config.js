module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy:'https://qr-scan2.herokuapp.com/api/'
  }
}
