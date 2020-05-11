const chroma = require('chroma-js');

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
};

module.exports = {
  ...palette,

  comments: palette.purple4, // needs to be made more easily differentiable from white2
  namespace: palette.purple,
  types: palette.pink,
  readonlyVariables: palette.white,
  variables: palette.yellow,
  parameters: palette.yellow,
  property: palette.white2,
  propertyDeclaration: palette.white,
  punctuation: palette.white2,
  functions: palette.blue,
  components: palette.white,
  constantKeywords: palette.orange, // e.g. true, numberics or null
  keys: palette.white,
  functionMembers: palette.blue,
  defaultFunctionMembers: palette.cyan,

  // Editor colors
  foreground: '#959da5',
  foregroundBrighter: palette.white,
  border: chroma('#2D323A').darken(0.5).hex(),
  borderBg: '#d8dee926', // 15% opacity
  background: '#2D323A',
  background2: chroma('#2D323A').darken(0.12).hex(),
  base: palette.yellow,
  baseDarker: chroma(palette.yellow).darken(0.5).hex(),
  onBase: '#2D323A',
  onBase2: '#fff',
  base2: palette.blue,
  base2Darker: chroma(palette.blue).darken(0.5).hex(),
  focus: `${palette.blue}B3`, // 70% opacity
  selectionBackground: '#2188ff2E', // 18% opacity
  inactiveForeground: '#6a737d',

  error: '#ea4a5a',

  // Git decoration, gutter
  modified: palette.purple,
  deleted: palette.red,
  added: palette.green,
  conflict: palette.yellow,
  ignored: '#6a737d',
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
  ansiBrightBlack: '#5F6672',
  ansiBrightBlue: '#1085FF',
  ansiBrightCyan: '#08E8DE',
  ansiBrightGreen: '#69c52e',
  ansiBrightMagenta: '#8B00FF',
  ansiBrightRed: '#D74E42',
  ansiBrightWhite: '#C6CCD7',
  ansiBrightYellow: '#E9D16C',
};
