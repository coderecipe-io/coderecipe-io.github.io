const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // https://github.com/jantimon/html-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // https://webpack.js.org/plugins/extract-text-webpack-plugin/


module.exports = {
  // entry files
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  entry: {
    // test: ['@babel/polyfill', './src/js/main.js', './src/scss/main.scss'],
    style: [
      './framework/bootstrap-4.4.1/scss/bootstrap.scss'
    ],
    index: './src/js/index.js',
    // multiple : './src/js/multiple.js'
    // boolma: ['./framework/bulma-0.8.0/bulma.sass']
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    //filename: 'js/bundle.js'
    // filename: 'js/[name].js'
    filename: 'js/index.js'
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    //new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      title: '코드레시피-웹팩',
      hash: true,
      filename: 'index.html',
      excludeChunks: [''], // entry에서 해당 리스트를 제외한 나머지
      template: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: '코드레시피-웹팩',
      hash: true,
      filename: 'quick.html',
      excludeChunks: [''], // entry에서 해당 리스트를 제외한 나머지
      template: 'quick.html'
    }),
    new HtmlWebpackPlugin({
      title: '코드레시피-웹팩',
      hash: true,
      filename: 'member.html',
      excludeChunks: [''], // entry에서 해당 리스트를 제외한 나머지
      template: 'member.html'
    }),
    new HtmlWebpackPlugin({
      title: '코드레시피-웹팩',
      hash: true,
      filename: 'contact.html',
      excludeChunks: [''], // entry에서 해당 리스트를 제외한 나머지
      template: 'contact.html'
    }),
  ],
  module: {
    rules: [{
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
      },
      {
        test: /\.(ttf|eot|svg|gif|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // include: style,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  // mode: 'development'
  mode: 'development'
};