const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    gameBoard: './src/game/gameBoardArray.js',
    players: './src/game/players.js',
    checkWinner: './src/game/checkWinner.js'
  },
  devtool: 'inline-source-map',
  devServer:{
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Solid Tic-Tac-Toe',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};