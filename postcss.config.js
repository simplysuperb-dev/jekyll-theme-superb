const cssnano = require('cssnano')({ preset: 'default' })

module.exports = {
  plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : [])
  ]
}