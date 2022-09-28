const chroma = require('chroma-js');

const colors = {};
const palette = {
  blue: chroma('#69a4fc').brighten(0.2).hex(), // #69a4fc
  purple: '#bea1f7', // #bea1f7
  magenta: '#FF00FF',
  pink: '#ff9ce6', // #ff9ce6
  green: '#aee8a3', // #aee8a3
  green2: '#9cdbc1', // #9cdbc1
  red: '#ff8e9a', // #ff8e9a
  orange: '#ff9a7b', // #ff9a7b
  yellow: '#ffe69c', // #ffe69c
  cyan: '#8cf6ff', // #8cf6ff

  white: '#f2f4f8',
  gray: '#8193B1',
  black1: '#1D222A',
  black2: '#1d1f26',
  dark4: '#58667E',
  dark5: '#C8DCFF',
  red1: '#f2564f',

  accent: '#5e6ad2',
  accentBright: chroma('#5e6ad2').brighten(1.2).hex(),

  //Bright versions, used for e.g, in terminal
  blueBright: chroma('#69a4fc').darken(0.9).hex(), //'#2f71e8',
  magentaBright: '#9D72F3',
  greenBright: '#73d783',
  cyanBright: '#5CF1FF',
  redBright: '#FF5C6C',
  whiteBright: '#F8FAFB',
  yellowBright: '#FFDA6B',
};

module.exports = {
  ...palette,

  syntax: {
    fg: palette.gray,
    other: palette.gray,
    variable: palette.white,
    parameter: palette.white,
    operator: palette.cyan,
    class: palette.purple,
    property: palette.white,
    function: palette.blue,
    boolean: palette.orange,
    number: palette.orange,
    null: palette.orange,
    keyword: palette.violet,
    keyword2: palette.purple,
    number: palette.orange,
    string: palette.green,
    namespace: palette.pink,
    components: palette.dark5,
    comment: palette.green2,
    type: palette.pink,
    typeCustom: palette.purple,
    import: palette.yellow,
  },

  accent: palette.accent, //chroma(palette.purple).darken(0.8).hex(),
  accentHover: '#717ce1',

  foreground: palette.white,
  foreground2: chroma('rgb(138, 143, 152)').hex(),

  // accent #5e6ad2
  // accent hover #717ce1

  border: chroma('#ffffff').alpha(0.1).hex(),
  input: chroma('#27282b').hex(),
  inputForeground: palette.white,
  foregroundInactive: chroma('rgb(98, 102, 109)').hex(),
  inputBorder: chroma('#27282b').hex(),
  link: palette.accentBright,

  background1: '#1f2023', //'#242734',
  background2: chroma('rgb(39, 40, 43)').hex(),
  background3: '#1b1c1e',

  backgroundHover: chroma('rgb(45, 47, 54)').hex(),

  blue10: chroma(palette.blue).alpha(0.1).hex(),
  blue15: chroma(palette.blue).alpha(0.15).hex(),
  blue25: chroma(palette.blue).alpha(0.25).hex(),
  yellow15: chroma(palette.yellow).alpha(0.15).hex(),
  purple50: chroma(palette.purple).alpha(0.5).hex(),

  dark4_25: chroma(palette.dark4).alpha(0.25).hex(),
  dark4_50: chroma(palette.dark4).alpha(0.5).hex(),
  black40: chroma(palette.black1).alpha(0.4).hex(),

  // Git decoration, gutter
  modified: palette.purple,
  deleted: palette.red,
  added: palette.green,
  conflict: palette.yellow,
  untracked: palette.purple,
};
