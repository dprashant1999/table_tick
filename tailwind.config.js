/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '12' : ['12px', '20px'],
        '14' : ['14px', '20px'],
        '16' : ['16px', '28px'],
        '18' : ['18px', '28px'],
        '20' : ['20px', '26px'],
        '22' : ['22px','32px'],
        '24' : ['24px', '29px'],
        '28' : ['28px','28px'],
        '32' : ['32px', '42px'],
        '34' : ['34px','44px'],
        '36' : ['36px','46px'],
        '38' : ['38px','48px'],
        '42' : ['42px','62px'],
        '46' : ['46px','56px'],
        '48' : ['48px','59px'],
        '50' : ['50px', '60px'],
        '52' : ['52px','62px'],
        '64' : ['64px','78px'],
      },
      colors: {
        'primary' : '#182848',
        'secondary' : '#E94E1B',
        'green' : '#00973A',
        'yellow' : '#EFBE00',
        // 'b2' : '#D7DFE9',
        // 'l2' : '#F0F3F9',
        // 'l3' : '#F9FAFB',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
