const palette = {
  blue: '#69A4FC', // hsl(216, 96%, 70%)
  purple: '#BEA1F7', // hsl(260, 84%, 80%)
  violet: '#9CB5FF', // hsl(225, 100%, 81%)
  pink: '#FF9CE6', // hsl(315, 100%, 81%)
  green: '#AEE8A3', // hsl(110, 60%, 77%)
  red: '#FF8E9A', // hsl(354, 100%, 78%)
  orange: '#FF9A7B', // hsl(14, 100%, 74%)
  yellow: '#FFE69C', // hsl(45, 100%, 81%)
  cyan: '#8CF6FF', // hsl(185, 100%, 78%)

  white: '#D8DEE9', // hsl(218, 28%, 88%)
  gray: '#959BA5', // hsl(218, 8%, 62%)
  gray2: '#8193B1', // hsl(218, 24%, 60%)

  // "Bright" versions, used for e.g. in terminal
  blueBright: '#3785FB', // hsl(216, 96%, 60%)
  magentaBright: '#9D72F3', // hsl(260, 84%, 70%)
  greenBright: '#89DD78', // hsl(110, 60%, 67%)
  cyanBright: '#5CF1FF', // hsl(185, 100%, 68%)
  redBright: '#FF5C6C', // hsl(354, 100%, 68%)
  whiteBright: '#F8FAFB', // hsl(218, 28%, 98%)
  yellowBright: '#FFDA6B', // hsl(45, 100%, 71%)

  dark1: '#1D222A', // hsl(218, 18%, 14%)
  dark2: '#262C36', // hsl(218, 18%, 18%)
  dark3: '#3F495A', // hsl(218, 18%, 30%)
  dark4: '#58667E', // hsl(218, 18%, 42%)
  dark5: '#C8DCFF', // hsl(218, 100%, 88%)
};

module.exports = {
  ...palette,

  foreground: palette.gray2,
  comments: palette.dark4,
  namespace: palette.purple,
  types: palette.pink,
  readonlyVariables: palette.white,
  variables: palette.yellow,
  parameters: palette.yellow,
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

  // TODO: think which one should be the base and other one variant?
  base: palette.yellow,
  base2: palette.blue,

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
