const palette = {
  // "#80B2FF", "#82AAFF",
  blue: "#6495EE",
  // purple: '#c6a2f8',
  purple: "#DDA3E8",
  // purple2: '#9D7CD8',
  purple3: "#9CB5FF",
  pink: "#ff9ce6",
  green: "#AEE8A3", // '#B1DC91',
  red: "#F97583",
  orange: "#ff9a7b",
  // yellow: '#FFEA7F',
  yellow: "#FFE69C",
  yellow2: "#FFD969",
  cyan: "#8CF6FF",
  white: "#e5e9f0",
  white2: '#7C8DAB', // editor foreground
};

module.exports = {
  ...palette,

  // readonlyVariables: "#BEA1F7",
  // readonlyVariables: '#7ABBDE',
  readonlyVariables: palette.orange,
  // readonlyVariables: palette.red,

  // variables: '#A3D0E8',
  // variables: palette.red,
  variables: "#BEA1F7",

  parameters: palette.yellow,
  property: palette.white,
  punctuation: palette.pink,

  foreground: "#959da5",
  foregroundBrighter: palette.white,

  background: "#22272F",

  inactiveForeground: "#6a737d",

  error: "#ea4a5a",

  // Git decoration, gutter
  modified: palette.purple, // '#b392f0',
  deleted: palette.red, // '#ea4a5a',
  added: palette.green, // '#34d058',
  conflict: palette.yellow, // "#ffab70",
  ignored: "#6a737d",
  untracked: palette.purple3, // "#34d058",

  // Active section indicator bar (editors, search, debug etc.)
  activeBorder: "#ffea7f",

  // Terminal colors
  ansiBlack: "#21252B",
  ansiBlue: palette.blue,
  ansiCyan: palette.cyan,
  ansiGreen: palette.green,
  ansiMagenta: palette.purple,
  ansiRed: palette.red,
  ansiWhite: palette.white,
  ansiYellow: palette.yellow,
  ansiBrightBlack: "#5F6672",
  ansiBrightBlue: "#1085FF",
  ansiBrightCyan: "#08E8DE",
  ansiBrightGreen: "#69c52e",
  ansiBrightMagenta: "#8B00FF",
  ansiBrightRed: "#D74E42",
  ansiBrightWhite: "#C6CCD7",
  ansiBrightYellow: "#E9D16C",
};
