module.exports = function getColor({ name, colors }) {
  return {
    semanticHighlighting: true,
    name: name,
    type: "dark",
    colors: {
      "focusBorder": "#005cc5",
      "foreground": colors.foreground,
      "errorForeground": colors.error,
      descriptionForeground: colors.foreground,
      "textLink.foreground": "#79b8ff",
      "textLink.activeForeground": "#c8e1ff",
      "textBlockQuote.background": colors.background,
      "textBlockQuote.border": "#444d56",
      "textCodeBlock.background": "#2f363d",
      "textPreformat.foreground": colors.foreground,
      "textSeparator.foreground": "#586069",
      "button.background": "#176f2c",
      "button.foreground": "#dcffe4",
      "button.hoverBackground": "#22863a",
      "checkbox.background": "#444d56",
      "checkbox.border": "#1b1f23",
      "dropdown.background": "#2f363d",
      "dropdown.border": "#1b1f23",
      "dropdown.foreground": colors.foregroundBrighter,
      "dropdown.listBackground": colors.background,
      "input.background": "#2f363d",
      "input.border": "#1b1f23",
      "input.foreground": colors.foregroundBrighter,
      "input.placeholderForeground": colors.foreground,
      "badge.foreground": "#c8e1ff",
      "badge.background": "#044289",
      "progressBar.background": "#0366d6",
      "titleBar.activeForeground": colors.foregroundBrighter,
      "titleBar.activeBackground": colors.background,
      "titleBar.inactiveForeground": colors.foreground,
      "titleBar.inactiveBackground": "#1f2428",
      "titleBar.border": "#1b1f23",

      "activityBar.foreground": colors.foregroundBrighter,
      "activityBar.inactiveForeground": colors.inactiveForeground,
      "activityBar.background": colors.background,
      "activityBarBadge.foreground": "#fff",
      // Activity notification badge background color.
      "activityBarBadge.background": colors.blue,
      "activityBar.activeBorder": colors.activeBorder,
      "activityBar.border": "#1b1f23",

      "sideBar.foreground": "#e1e4e8",
      "sideBar.background": "#1f2428",
      "sideBar.border": "#1b1f23",
      "sideBarTitle.foreground": colors.foregroundBrighter,
      "sideBarSectionHeader.foreground": colors.foregroundBrighter,
      "sideBarSectionHeader.background": "#1f2428",
      "sideBarSectionHeader.border": "#1b1f23",
      "list.hoverForeground": colors.foregroundBrighter,
      "list.inactiveSelectionForeground": colors.foregroundBrighter,
      "list.activeSelectionForeground": colors.foregroundBrighter,
      "list.hoverBackground": colors.background,
      "list.inactiveSelectionBackground": "#282e34",
      "list.activeSelectionBackground": "#39414a",
      "list.inactiveFocusBackground": "#1d2d3e",
      "list.focusBackground": "#044289",
      "tree.indentGuidesStroke": "#2f363d",
      "notificationCenterHeader.background": colors.background,
      "pickerGroup.border": "#444d56",
      "pickerGroup.foreground": colors.foregroundBrighter,
      "quickInput.background": colors.background,
      "quickInput.foreground": colors.foregroundBrighter,
      "statusBar.foreground": colors.foreground,
      "statusBar.background": colors.background,
      "statusBar.border": "#1b1f23",
      "statusBar.noFolderBackground": colors.background,
      "statusBar.debuggingBackground": "#931c06",
      "statusBar.debuggingForeground": "#1b1f23",
      "editorGroupHeader.tabsBackground": "#1f2428",
      "editorGroupHeader.tabsBorder": "#1b1f23",
      "editorGroup.border": "#1b1f23",
      "tab.activeForeground": colors.foregroundBrighter,
      "tab.inactiveForeground": colors.foreground,
      "tab.inactiveBackground": "#1f2428",
      "tab.activeBackground": colors.background,
      "tab.hoverBackground": colors.background,
      "tab.unfocusedHoverBackground": colors.background,
      "tab.border": "#1b1f23",
      "tab.unfocusedActiveBorderTop": "#1b1f23",
      "tab.activeBorder": colors.background,
      "tab.unfocusedActiveBorder": colors.background,
      "tab.activeBorderTop": colors.activeBorder,
      "breadcrumb.foreground": colors.foreground,
      "breadcrumb.focusForeground": colors.foregroundBrighter,
      "breadcrumb.activeSelectionForeground": colors.foreground,
      "breadcrumbPicker.background": "#2b3036",
      "editor.foreground": colors.editorForeground,
      "editor.background": colors.background,
      "editor.foldBackground": "#282e33",
      "editor.lineHighlightBackground": "#2b3036",
      "editorLineNumber.foreground": "#444d56",
      "editorLineNumber.activeForeground": colors.foregroundBrighter,
      "editorIndentGuide.background": "#2f363d",
      "editorIndentGuide.activeBackground": "#444d56",
      "editorWhitespace.foreground": colors.inactiveForeground,
      "editorCursor.foreground": "#c8e1ff",
      "editor.inactiveSelectionBackground": "#79b8ff11",
      "editor.selectionBackground": "#2188ff33",
      "editor.wordHighlightBackground": "#2188ff22",
      "editor.findMatchBackground": "#ffd33d44",
      "editor.findMatchHighlightBackground": "#ffd33d22",
      "editorBracketMatch.background": "#005cc5",
      "editorBracketMatch.border": "#005cc5",
      "editorGutter.modifiedBackground": colors.modified,
      "editorGutter.addedBackground": "#28a745",
      "editorGutter.deletedBackground": colors.deleted,

      // Foreground color of error squiggles in the editor
      "editorError.foreground": colors.error,
      // Foreground color of warning squiggles in the editor.
      "editorWarning.foreground": colors.orange,
      // Border color of info boxes in the editor.
      "editorInfo.border": colors.yellow,

      "diffEditor.insertedTextBackground": "#28a74511",
      "diffEditor.removedTextBackground": "#d73a4918",

      // Scrollbar slider shadow to indicate that the view is scrolled
      "scrollbar.shadow": "#0008",
      "scrollbarSlider.background": "#6a737d33",
      "scrollbarSlider.hoverBackground": "#6a737d44",
      "scrollbarSlider.activeBackground": "#6a737d88",

      // -------------------------
      // Overview ruler
      // -------------------------

      // Color of the overview ruler border.
      "editorOverviewRuler.border": "#1b1f23",

      "panel.background": "#1f2428",
      "panel.border": "#1b1f23",
      "panelTitle.activeBorder": colors.activeBorder,
      "panelTitle.activeForeground": colors.foregroundBrighter,
      "panelTitle.inactiveForeground": colors.foreground,
      "panelInput.border": "#2f363d",
      "terminal.foreground": colors.foreground,
      "gitDecoration.addedResourceForeground": colors.added,
      "gitDecoration.modifiedResourceForeground": colors.modified,
      "gitDecoration.deletedResourceForeground": colors.deleted,
      "gitDecoration.untrackedResourceForeground": colors.untracked,
      "gitDecoration.ignoredResourceForeground": colors.ignored,
      "gitDecoration.conflictingResourceForeground": colors.conflict,
      "gitDecoration.submoduleResourceForeground": colors.ignored,
      "debugToolBar.background": "#2b3036",
      "editor.stackFrameHighlightBackground": "#b08800",
      "editor.focusedStackFrameHighlightBackground": "#dbab09",
      "settings.headerForeground": colors.foregroundBrighter,
      "settings.modifiedItemIndicator": "#0366d6",
      "welcomePage.buttonBackground": "#2f363d",
      "welcomePage.buttonHoverBackground": "#444d56",
    },
    semanticTokenColors: {
      // "variable": "#ffff00",
      // "variable.declaration.readonly": "#69c52e",
      // "variable.declaration.readonly.local": "#69c52e",

      // const variable names
      // fallback: variable.other.constant
      "variable.readonly": colors.readonlyVariables,

      // let or var variable names
      // fallback: variable.other.readwrite , entity.name.variable
      variable: colors.variables,

      // fallback: variable.parameter
      parameter: colors.parameters,

      // fallback: entity.name.type
      type: colors.pink,

      // e.g. 'console' in console.log or 'Math' in Math.floor()
      // fallback: support.constant
      // 'variable.readonly.defaultLibrary': colors.cyan,
      "variable.defaultLibrary": {
        foreground: colors.cyan,
        fontStyle: "",
      },

      // 'log' in console.log
      // fallback: entity.name.function.member
      member: colors.blue,
      "member.defaultLibrary": {
        foreground: colors.blue,
        fontStyle: "",
      },

      // Object properties
      // fallback: variable.other.property
      property: colors.property,
      "property.defaultLibrary": {
        foreground: colors.property,
        fontStyle: "",
      },

      // User defined classes
      // fallback: entity.name.type.class
      class: colors.orange,

      // Math, RegExp
      // fallback: support.class
      // 'class.defaultLibrary': colors.cyan,

      // defining function, e.g. const MakeRainbow = () => {}
      // "function": "#ffff00"
      "function.declaration.readonly": colors.blue,
    },
    tokenColors: [
      {
        name:
          "Imported alias name, variables defined outside of scope where they are used in, i.e. imports or top leve",
        scope: "variable.other",
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: "Function parameters",
        scope: "variable.parameter",
        settings: {
          foreground: colors.parameters,
        },
      },
      {
        name: "Components",
        scope: "support.class.component",
        settings: {
          foreground: colors.variables,
        },
      },
      {
        name: "Strings",
        scope: "string",
        settings: {
          foreground: colors.green,
        },
      },
      {
        name: "Types",
        scope: "entity.name.type, support.type.primitive",
        settings: {
          foreground: colors.pink,
        },
      },
      {
        name: "Punctuations - , ;",
        scope:
          "punctuation.separator.comma, punctuation.terminator.rule, punctuation.terminator.statement",
        settings: {
          foreground: colors.punctuation,
        },
      },
      {
        name: "Function calls",
        scope: "entity.name.function",
        settings: {
          foreground: colors.blue,
        },
      },
      {
        name: "Booleans",
        scope: "constant.language.boolean",
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: "Numbers",
        scope: "constant.numeric.decimal",
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: "Variable - constant",
        scope: "variable.other.constant",
        settings: {
          foreground: colors.readonlyVariables,
        },
      },
      {
        name: "Variables",
        scope:
          "variable.other.readwrite , entity.name.variable, variable.other.object",
        settings: {
          foreground: colors.variables,
        },
      },
      {
        name: "console",
        scope: "support.class.console",
        settings: {
          foreground: colors.cyan,
        },
      },
      {
        name: "Object property",
        scope: "variable.other.property, variable.other.object.property",
        settings: {
          foreground: colors.property,
        },
      },
      {
        name: "Custom classes",
        scope: "entity.name.type.class",
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: "Built-in classes and constants",
        scope: "support.class, support.variable.object.process",
        settings: {
          foreground: colors.cyan,
        },
      },
      {
        name: "Comments",
        scope: "comment, punctuation.definition.comment",
        settings: {
          foreground: colors.purple2,
          fontStyle: "italic",
        },
      },
      {
        name: "CSS class, id, tag",
        scope: "entity.other.attribute-name.css, entity.name.tag.css",
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: "CSS value",
        scope: "support.constant.property-value.css",
        settings: {
          foreground: colors.purple,
        },
      },
      {
        name: "CSS units",
        scope: "keyword.other.unit.css",
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: "CSS numbers",
        scope: "constant.numeric.css",
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: "Markdown paragraph text",
        scope: "meta.paragraph.markdown",
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: "Markdown heading",
        scope: "markup.heading",
        settings: {
          foreground: colors.red,
        },
      },
      {
        name: "Markdown link title",
        scope: "string.other.link.title.markdown, punctuation.definition.string.begin.markdown, punctuation.definition.string.end.markdown",
        settings: {
          foreground: colors.blue,
        },
      },
      {
        name: "Markdown links",
        scope: "markup.underline.link.markdown",
        settings: {
          foreground: colors.green,
        },
      },
      {
        name: "Markdown bold",
        scope: "markup.bold.markdown",
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: "Markdown italic",
        scope: "markup.italic.markdown",
        settings: {
          foreground: colors.yellow,
        },
      },
      {
        name: "Markdown inline code",
        scope: "markup.inline.raw.string.markdown",
        settings: {
          foreground: colors.pink,
        },
      },
      {
        name: "Markdown code block fence",
        scope: "punctuation.definition.markdown",
        settings: {
          foreground: colors.punctuation,
        },
      },
      {
        name: "Markdown quote",
        scope: "markup.quote.markdown",
        settings: {
          foreground: colors.orange2,
        },
      },
    ],
  };
};
