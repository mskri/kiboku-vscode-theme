// #A3D0E8
// #80B2FF
// #E5CD84

const palette = {
  blue: '#69A4FC',
  purple: '#BEA1F7',
  purple3: '#9CB5FF',
  purple4: '#676E95',
  pink: '#ff9ce6',
  green: '#AEE8A3',
  red: '#FF8E9A',
  orange: '#ff9a7b',
  yellow: '#FFE69C',
  yellowDark: '#D6C020',
  cyan: '#8CF6FF',
  white: '#D8DEE9',
  white2: '#7C8DAB',
  black: '#21252B',

  light1: '#D8DEE9',
  light2: '#959BA5',
  light3: '#6a737d', // TODO: should be more easily differentiated?

  dark1: '#1F242D',
  dark2: '#262C36',
  dark3: '#3F495A',
  dark4: '#58667E',
  dark5: '#C8DCFF',
};

module.exports = {
  ...palette,

  comments: palette.purple4, // needs to be made more easily differentiable from white2
  namespace: palette.purple,
  types: palette.pink,
  readonlyVariables: palette.light1,
  variables: palette.yellow,
  parameters: palette.yellow,
  property: palette.white2,
  propertyDeclaration: palette.light1,
  punctuation: palette.white2,
  functions: palette.blue,
  components: palette.light1,
  constantKeywords: palette.orange, // e.g. true, numberics or null
  keys: palette.light1,
  functionMembers: palette.blue,
  defaultFunctionMembers: palette.cyan,

  blue8: `${palette.blue}14`, // 8% opacity
  blue15: `${palette.blue}25`, // 15% opacity
  blue30: `${palette.blue}40`, // 25% opacity
  yellow10: `${palette.yellow}1A`, // 10% opacity

  base: palette.yellow,
  base2: palette.blue,

  error: '#ea4a5a',
  warning: palette.yellow,

  // Git decoration, gutter
  modified: palette.purple,
  deleted: palette.red,
  added: palette.green,
  conflict: palette.yellow,
  untracked: palette.purple3,

  // Terminal colors
  ansiBlack: palette.black,
  ansiBlue: palette.blue,
  ansiCyan: palette.cyan,
  ansiGreen: palette.green,
  ansiMagenta: palette.purple,
  ansiRed: palette.red,
  ansiWhite: palette.white,
  ansiYellow: palette.yellow,
  ansiBrightBlack: '#000000',
  ansiBrightBlue: '#1085FF',
  ansiBrightCyan: '#08E8DE',
  ansiBrightGreen: '#69c52e',
  ansiBrightMagenta: '#8B00FF',
  ansiBrightRed: '#D74E42',
  ansiBrightWhite: '#C6CCD7',
  ansiBrightYellow: '#E9D16C',
};
