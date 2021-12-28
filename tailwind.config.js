module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F4A7B',
        // secondary: '#FFCE00',
        custom: {
          1: '#62BECB',
          2: '#DD4033',
          3: '#EA5566',
          4: '#F57D7D',
          5: '#F9FBFD'
        }
      },
      boxShadow: {
        custom: '0px 4px 17px rgba(15, 74, 123, 0.15)',
        card: '0px 4px 17px rgba(98, 190, 203, 0.15)',
        details: '0px 4px 17px rgba(0, 0, 0, 0.15)'
      }
    }
  },
  variants: {
    extend: {}
  }
};
