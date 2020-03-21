const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry files
  entry: { test: ['@babel/polyfill', './src/js/main.js', './src/scss/main.scss'],
  bootstrap:[
      './framework/bootstrap-4.4.1/scss/bootstrap.scss'
    , './framework/bootstrap-4.4.1/scss/bootstrap-grid.scss'
    , './framework/bootstrap-4.4.1/scss/bootstrap-reboot.scss'
    ],
  boolma: ['./framework/bulma-0.8.0/bulma.sass']
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    //filename: 'js/bundle.js'
    filename: 'js/[name].js'
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    //new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};