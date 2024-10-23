const path = require('path');

module.exports = {
  webpack: {
    // alias
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}