const chroma = require("chroma-js");

const palette = {
  blue: "#69a4fc", // #69a4fc
  purple: "#bea1f7", // #bea1f7
  // violet: "#83a7e0", // #9196ba
  // purple2: "#83a7e0", // #83a7e0
  pink: "#ff9ce6", // #ff9ce6
  green: "#aee8a3", // #aee8a3
  green2: "#9cdbc1", // #9cdbc1
  reda: "#ff8e9a", // #ff8e9a
  orange: "#ff9a7b", // #ff9a7b
  yellow: "#ffe69c", // #ffe69c
  cyan: "#8cf6ff", // #8cf6ff

  white: "#f2f4f8",
  white60: "#f2f4f8a3",

  gray: "#959BA5",
  gray2: "#8193B1",
  gray3: "#8193B1",

  // #f2564f
  red: "red",

  //Bright versions, used for e.g, in terminal
  blueBright: "#2f71e8",
  magentaBright: "#9D72F3",
  greenBright: "#73d783",
  cyanBright: "#5CF1FF",
  redBright: "#FF5C6C",
  whiteBright: "#F8FAFB",
  yellowBright: "#FFDA6B",

  // #080a0c
  // #242734
  // #1d1d2a vs #282a37 vs #242734
  // #353648

  black3: "#1d1f26",

  dark1: "#1D222A",
  dark2: "#1d1f26",
  dark3: "#3F495A",
  dark4: "#58667E",
  dark5: "#C8DCFF",
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

    // Import variables
    import: palette.yellow,
  },

  accent: palette.blue, // "#5c61ec",
  accent50: chroma("#5c61ec").alpha(0.8).hex(),
  accentDark: "#3f3f5d",
  borderDark: "#3f3f5d",
  borderBright: "#7578bd",

  accentForeground: palette.black3,
  foreground: palette.white,
  foreground40: chroma(palette.white).alpha(0.4).hex(),
  foreground60: palette.white60,

  background1: "#242734",
  background2: chroma("hsl(226, 15%, 18.6%)").hex(), // "#282a37", // "#1d252b", // "#171d22", // #121316
  background250: chroma("#282a37").alpha(0.5).hex(),
  background3: "#1d1f26",
  // chrome("hsl(226, 15.8%, 18.6%)").hex()"
  // hsl(226.7, 13.4%, 13.1%)
  comments: palette.dark4,
  namespace: palette.purple,
  types: palette.pink,
  customTypes: palette.purple,
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
  defaultFunctionMembers: palette.purple,

  // TODO: switch to using base color? (make base = blue?)
  blue5: chroma(palette.blue).alpha(0.05).hex(),
  blue10: chroma(palette.blue).alpha(0.1).hex(),
  blue15: chroma(palette.blue).alpha(0.15).hex(),
  blue25: chroma(palette.blue).alpha(0.25).hex(),
  blue35: chroma(palette.blue).alpha(0.35).hex(),
  yellow10: chroma(palette.yellow).alpha(0.1).hex(),
  yellow40: chroma(palette.yellow).alpha(0.4).hex(),
  yellow50: chroma(palette.yellow).alpha(0.5).hex(),
  yellow70: chroma(palette.yellow).alpha(0.7).hex(),

  dark4_25: `${palette.dark4}40`, // 25% opacity
  dark4_55: `${palette.dark4}8C`, // 55% opacity

  // TODO: think which one should be the base and other one variant?
  base: palette.yellow,
  base2: palette.blue,
  base2_65: `${palette.blue}A6`, // 65% opacity,

  black40: "#00000066", // 40% opacity

  error: palette.redBright,
  warning: palette.yellowBright,

  // Git decoration, gutter
  modified: palette.purple,
  deleted: palette.red,
  added: palette.green,
  conflict: palette.yellow,
  untracked: palette.purple,

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
