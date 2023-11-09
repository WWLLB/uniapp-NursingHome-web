const path = require('path');

module.exports = {
  // 其他配置项
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src')
    }
  }
}