'use strict'

module.exports = {
  port: '4008',
  title: 'headhunting',
  vendor: [
    'vue',
    'vue-router',
    'vuex'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
