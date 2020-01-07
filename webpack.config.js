const path = require('path');

module.exports = {
  entry: './index.js',
  target: 'web',
  output: {
    libraryTarget: 'umd',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'kj-package': 'kj-package',
  },
};