module.exports = {
  entry: {
    main: './main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // babel的config,
            plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
          }
        }
      }
    ]
  },
  mode: "development",   // 让build出来的文件更加可读
  optimization: {   // 让build出来的文件更加可读
    minimize: false
  }
}