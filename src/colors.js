const chroma = require('chroma-js');

const colors = {};
const palette = {
  blue: '#69a4fc', // #69a4fc
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

  //Bright versions, used for e.g, in terminal
  blueBright: '#2f71e8',
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

  accent: palette.blue,
  accent50: chroma(palette.blue).alpha(0.8).hex(),
  accentDark: chroma(palette.blue).darken(0.8).hex(),
  accentDarker: chroma(palette.blue).darken(1).hex(),
  borderDark: '#3f3f5d', // TODO: replace
  borderBright: palette.dark5, // TODO: replace?

  foreground: palette.white,
  foreground40: chroma(palette.white).alpha(0.4).hex(),
  foreground60: chroma(palette.white).alpha(0.6).hex(),

  background1: '#242734',
  background2: '#282c37',
  background3: '#1d1f26',

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
