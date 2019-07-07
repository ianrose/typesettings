module.exports = ({
  parser: 'postcss-scss',
  plugins: [
    require('postcss-easy-import')({
      'prefix': '_',
      'extensions': [
        '.scss'
      ]
    })
  ]
})
