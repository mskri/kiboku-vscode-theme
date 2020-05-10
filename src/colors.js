const palette = {
  // "#80B2FF", "#82AAFF",
  // blue: '#6495EE',
  blue: '#69A4FC',
  blue2: '#80B2FF',
  blue3: '#A3D0E8',
  purple: '#C792EA', // '#BEA1F7',
  purple2: '#DDA3E8',
  purple3: '#9CB5FF', //'#9CB5FF',
  pink: '#ff9ce6',
  green: '#AEE8A3',
  red: '#F97583',
  orange: '#ff9a7b',
  // yellow: '#FFEA7F',
  yellow: '#FFE69C',
  yellow2: '#FFD969',
  cyan: '#8CF6FF',
  white: '#e5e9f0',
  white2: '#7C8DAB', // editor foreground
};

module.exports = {
  ...palette,

  comments: palette.purple3,

  // readonlyVariables: "#BEA1F7",
  readonlyVariables: palette.yellow2,
  // readonlyVariables: palette.red,

  variables: palette.red,

  parameters: palette.red,
  property: palette.white,
  punctuation: palette.pink,
  functions: palette.blue,
  components: palette.purple,
  booleansAndNumbers: palette.orange,

  foreground: '#959da5',
  foregroundBrighter: palette.white,

  background: '#2D323A',

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
