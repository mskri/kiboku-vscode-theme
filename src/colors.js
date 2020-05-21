// #A3D0E8
// #80B2FF
// #E5CD84

const palette = {
  blue: '#69A4FC', // hsl(216, 96%, 70%)
  purple: '#BEA1F7', // hsl(260, 84%, 80%)
  purple3: '#9CB5FF', // hsl(225, 100%, 81%)
  pink: '#ff9ce6', // hsl(315, 100%, 81%)
  green: '#AEE8A3', // hsl(110, 60%, 77%)
  red: '#FF8E9A', // hsl(354, 100%, 78%)
  orange: '#ff9a7b', // hsl(14, 100%, 74%)
  yellow: '#FFE69C', // hsl(45, 100%, 81%)
  cyan: '#8CF6FF', // hsl(185, 100%, 78%)
  black: '#21252B', // hsl(216, 13%, 15%)
  foreground: '#8193B1', // hsl(218, 24%, 60%)

  light1: '#D8DEE9', // hsl(218, 28%, 88%)
  light2: '#959BA5', // hsl(218, 8%, 62%)

  dark1: '#1F242D', // hsl(218, 18%, 15%)
  dark2: '#262C36', // hsl(218, 18%, 18%)
  dark3: '#3F495A', // hsl(218, 18%, 30%)
  dark4: '#58667E', // hsl(218, 18%, 42%)
  dark5: '#C8DCFF', // hsl(218, 100%, 88%)
};

module.exports = {
  ...palette,

  comments: palette.dark4,
  namespace: palette.purple,
  types: palette.pink,
  readonlyVariables: palette.light1,
  variables: palette.yellow,
  parameters: palette.yellow,
  property: palette.foreground,
  propertyDeclaration: palette.light1,
  punctuation: palette.foreground,
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
  ansiWhite: palette.light1,
  ansiYellow: palette.yellow,
  ansiBrightBlack: '#3d475c',
  ansiBrightBlue: '#1085FF',
  ansiBrightCyan: '#08E8DE',
  ansiBrightGreen: '#69c52e',
  ansiBrightMagenta: '#8B00FF',
  ansiBrightRed: '#D74E42',
  ansiBrightWhite: '#C6CCD7',
  ansiBrightYellow: '#E9D16C',
};
