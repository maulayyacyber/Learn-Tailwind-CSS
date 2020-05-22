let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss')

mix.sass('resources/sass/app.scss', 'dist/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })