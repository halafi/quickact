const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    // let tailwind handle purging in production mode
  ],
};
