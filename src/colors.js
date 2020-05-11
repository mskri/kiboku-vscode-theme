const palette = {
  // "#80B2FF", "#82AAFF",
  // blue: '#6495EE',
  blue: '#69A4FC',
  blue2: '#80B2FF',
  blue3: '#A3D0E8',
  purple: '#BEA1F7',
  purple2: '#DDA3E8',
  purple3: '#9CB5FF', //'#9CB5FF',
  purple4: '#676E95',
  pink: '#ff9ce6',
  green: '#AEE8A3',
  // red: '#F97583',
  red: '#FF8E9A',
  orange: '#ff9a7b',
  // yellow: '#FFEA7F',
  yellow: '#FFE69C',
  yellow2: '#E5CD84',
  // yellowDark: chroma('#FFE69C').saturate(2).darken(0.75).hex(), // '#D6C020',
  yellowDark: '#D6C020',
  cyan: '#8CF6FF',
  white: '#D8DEE9',
  white2: '#7C8DAB', // editor foreground
  // white2: chroma('#80B2FF').desaturate(1).darken(0.2).hex(),
  // white2: '#81a1c1',
};

module.exports = {
  ...palette,

  // needs to be made more easily differentiable from white2
  comments: palette.purple4,
  namespace: palette.purple,
  interface: '#ff0000', // palette.pink,
  types: palette.pink,

  // readonlyVariables: '#BEA1F7',
  // readonlyVariables: palette.yellow2,
  readonlyVariables: palette.white,

  variables: palette.yellow,

  parameters: palette.yellow,
  property: palette.white2,
  punctuation: palette.white2,
  functions: palette.blue,
  components: palette.white,
  booleansAndNumbers: palette.orange,
  keys: palette.white,

  functionMembers: palette.blue,
  defaultFunctionMembers: palette.cyan,

  foreground: '#959da5',
  foregroundBrighter: palette.white,

  border: chroma('#2D323A').darken(0.5).hex(),
  background: '#2D323A',
  background2: '#2D323A',

  base: palette.yellow,

  inactiveForeground: '#6a737d',

  error: '#ea4a5a',

  // Git decoration, gutter
  modified: palette.purple, // '#b392f0',
  deleted: palette.red, // '#ea4a5a',
  added: palette.green, // '#34d058',
  conflict: palette.yellow, // "#ffab70",
  ignored: '#6a737d',
  untracked: palette.purple3, // "#34d058",

  // Active section indicator bar (editors, search, debug etc.)
  activeBorder: '#ffea7f',

  // Terminal colors
  ansiBlack: '#21252B',
  ansiBlue: palette.blue,
  ansiCyan: palette.cyan,
  ansiGreen: palette.green,
  ansiMagenta: palette.purple,
  ansiRed: palette.red,
  ansiWhite: palette.white,
  ansiYellow: palette.yellow,
  ansiBrightBlack: '#5F6672',
  ansiBrightBlue: '#1085FF',
  ansiBrightCyan: '#08E8DE',
  ansiBrightGreen: '#69c52e',
  ansiBrightMagenta: '#8B00FF',
  ansiBrightRed: '#D74E42',
  ansiBrightWhite: '#C6CCD7',
  ansiBrightYellow: '#E9D16C',
};
