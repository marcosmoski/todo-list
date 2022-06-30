module.exports = {
  content: [
    './src/**/*.tsx'  
  ],
  theme: {
    extend: {
      h: {
       50: '12.5rem', 
      },
      colors: {
        fontFamily: { 
          sans: 'Roboto, sans-serif'
        },
        colors: {
          danger: '#E25858',
          green: {
            300: '#00B37E',
            500: '#00875F',
            700: '#015F43',
          },
          blue: {
            500: '#4EA8DE',
            900: '#1E6F9F',
          },
          orange: {
            500: '#FBA94C',
          },
          red: {
            500: '#F75A68',
          },
          gray: {
            100: '#F2F2F2',
            200: '#D9D9D9',
            300: '#808080',
            400: '#333333',
            500: '#262626',
            600: '#1A1A1A',
            700: '#0D0D0D',
            900: '#09090A'
          },
          purple: {
            500: '#8284FA',
            900: '#5E60CE'
          },
        },
      }
    },
  },
  plugins: [],
}