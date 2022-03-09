const chroma = require('chroma-js');

const palette = {
  blue: '#69A4FC', // hsl(216, 96%, 70%)
  purple: '#BEA1F7', // hsl(260, 84%, 80%)
  violet: '#9CB5FF', // hsl(225, 100%, 81%)
  purple2: '#83a7e0',
  pink: '#FF9CE6', // hsl(315, 100%, 81%)
  green: '#AEE8A3', // hsl(110, 60%, 77%)
  green2: '#9cdbc1', // hsl(110, 60%, 77%)
  red: '#FF8E9A', // hsl(354, 100%, 78%)
  orange: '#FF9A7B', // hsl(14, 100%, 74%)
  yellow: '#FFE69C', // hsl(45, 100%, 81%)
  cyan: '#8CF6FF', // hsl(185, 100%, 78%)

  white: '#F2F4F8', // hsl(218, 28%, 96%)
  gray: '#959BA5', // hsl(218, 8%, 62%)
  gray2: '#8193B1', // hsl(218, 24%, 60%)
  gray3: '#8193B1', // hsl(218, 24%, 60%)
  // #C0CAF5

  // "Bright" versions, used for e.g. in terminal
  blueBright: '#3785FB', // hsl(216, 96%, 60%)
  magentaBright: '#9D72F3', // hsl(260, 84%, 70%)
  greenBright: '#73d783', // hsl(110, 60%, 67%)
  cyanBright: '#5CF1FF', // hsl(185, 100%, 68%)
  redBright: '#FF5C6C', // hsl(354, 100%, 68%)
  whiteBright: '#F8FAFB', // hsl(218, 28%, 98%)
  yellowBright: '#FFDA6B', // hsl(45, 100%, 71%)

  dark1: '#1D222A', // hsl(218, 18%, 14%)
  dark2: '#1d1f26',
  // dark2: '#262C36', // hsl(218, 18%, 18%)
  dark3: '#3F495A', // hsl(218, 18%, 30%)
  dark4: '#58667E', // hsl(218, 18%, 42%)
  dark5: '#C8DCFF', // hsl(218, 100%, 88%)
};

module.exports = {
  ...palette,

  // NEW

  syntax: {
    fg: palette.gray3,
    other: palette.gray2,
    variable: palette.white,
    parameter: palette.white,
    operator: palette.cyan,
    class: palette.white,
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

    // Import variables
    import: palette.yellow,
  },

  // END NEW

  foreground: palette.gray2,
  comments: palette.dark4,
  namespace: palette.purple,
  types: palette.pink,
  customTypes: palette.violet,
  readonlyVariables: palette.white,
  variables: palette.white,
  parameters: palette.white,
  property: palette.foreground,
  propertyDeclaration: palette.white,
  punctuation: palette.foreground,
  functions: palette.blue,
  components: palette.white,
  constantKeywords: palette.orange, // e.g. true, numberics or null
  keys: palette.white,
  functionMembers: palette.blue,
  defaultFunctionMembers: palette.violet,

  // TODO: switch to using base color? (make base = blue?)
  blue10: `${palette.blue}1A`, // 10% opacity
  blue15: `${palette.blue}25`, // 15% opacity
  blue25: `${palette.blue}40`, // 25% opacity
  blue35: `${palette.blue}59`, // 35% opacity
  yellow10: `${palette.yellow}1A`, // 10% opacity
  yellow40: `${palette.yellow}66`, // 40% opacity
  yellow50: `${palette.yellow}80`, // 50% opacity
  yellow70: `${palette.yellow}B3`, // 70% opacity

  dark4_25: `${palette.dark4}40`, // 25% opacity
  dark4_55: `${palette.dark4}8C`, // 55% opacity

  // TODO: think which one should be the base and other one variant?
  base: palette.yellow,
  base2: palette.blue,
  base2_65: `${palette.blue}A6`, // 65% opacity,

  black40: '#00000066', // 40% opacity

  error: palette.redBright,
  warning: palette.yellowBright,

  // Git decoration, gutter
  modified: palette.purple,
  deleted: palette.red,
  added: palette.green,
  conflict: palette.yellow,
  untracked: palette.violet,

  // Terminal colors
  ansiBlack: palette.dark1,
  ansiBlue: palette.blue,
  ansiCyan: palette.cyan,
  ansiGreen: palette.green,
  ansiMagenta: palette.purple,
  ansiRed: palette.red,
  ansiWhite: palette.white,
  ansiYellow: palette.yellow,
  ansiBrightBlack: palette.dark4,
  ansiBrightBlue: palette.blueBright,
  ansiBrightCyan: palette.cyanBright,
  ansiBrightGreen: palette.greenBright,
  ansiBrightMagenta: palette.magentaBright,
  ansiBrightRed: palette.redBright,
  ansiBrightWhite: palette.whiteBright,
  ansiBrightYellow: palette.yellowBright,
};

function hex(hsl) {
  return chroma(hsl).hex();
}
