const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // https://github.com/jantimon/html-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // https://webpack.js.org/plugins/extract-text-webpack-plugin/
const CopyWebpackPlugin = require('copy-webpack-plugin');  // 파일 복사

// const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // dist git 관리를 위해 제거 

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
    quick: './src/js/quick.js',
    // multiple : './src/js/multiple.js'
    // boolma: ['./framework/bulma-0.8.0/bulma.sass']
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {

    //filename: 'js/bundle.js'
    // filename: 'js/[name].js'
    // filename: 'index.js'
    // filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[chunkhash].js',
    // sourceMapFilename: '[name].[chunkhash].map',
    // chunkFilename: '[id].[chunkhash].js'
    filename: '[chunkhash].js',
    // sourceMapFilename: '[chunkhash].map',
    // chunkFilename: '[chunkhash].js'
  },
  plugins: [

    // new CleanWebpackPlugin(),
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    //new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new MiniCssExtractPlugin({
      // filename: 'style.css',
      // chunkFilename: 'css/[id].css',
      // filename: '[name].css',
      path: path.resolve(__dirname, 'dist'),
      // filename: '[name].[chunkhash].css',
      // sourceMapFilename: '[name].[chunkhash].map',
      // chunkFilename: '[id].[chunkhash].css'
      filename: '[chunkhash].css',
      // sourceMapFilename: '[chunkhash].map',
      // chunkFilename: '[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      title: '회사소개-코드레시피',
      hash: true,
      filename: 'index.html',
      excludeChunks: ['quick'], // entry에서 해당 리스트를 제외한 나머지
      template: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: '퀵서비스솔루션-코드레시피',
      hash: true,
      filename: 'quick.html',
      excludeChunks: ['index'], // entry에서 해당 리스트를 제외한 나머지
      template: 'quick.html'
    }),
    new HtmlWebpackPlugin({
      title: '구성원-코드레시피',
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
      },
      // {
      //   test: /\.(png|xml|json|ico)$/i,
      //   /* Exclude fonts while working with images, e.g. .svg can be both image or font. */
      //   include: path.resolve(__dirname, 'favicon'),
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: 'dist/favicon/'
      //     }
      //   }]
      // },
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  // mode: 'development'
  mode: 'development'
};