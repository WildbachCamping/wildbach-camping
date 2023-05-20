module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './storyblok/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#a9c1af',
        'primary-white': '#eceeed',
        'secondary-green': '#133525',
        'primary-grey': '#444',
        'bookmark-white': '#f7f7f7',
      },
    },
    fontFamily: {
      Eurostile: ['Eurostile, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      display: 'flex',
      'align-items': 'center',
      width: '100%',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
