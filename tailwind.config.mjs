export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F4A7B',
        tertiary: '#3E3E40',
        custom: {
          1: '#62BECB',
          2: '#DD4033',
          3: '#EA5566',
          4: '#F57D7D',
          5: '#F9FBFD',
          6: '#0E0E10'
        }
      },
      boxShadow: {
        custom: '0px 4px 17px rgba(15, 74, 123, 0.15)',
        card: '0px 4px 17px rgba(98, 190, 203, 0.15)',
        details: '0px 4px 17px rgba(0, 0, 0, 0.15)',
        button: '0px 4px 17px rgba(194, 32, 51, 0.25)',
        tr: '0px 4px 10px rgba(62, 62, 64, 0.1)'
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  }
};
