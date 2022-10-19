module.exports = function createTheme({ name, colors }) {
  return {
    semanticHighlighting: true,
    name: name,
    type: 'dark',
    colors: {
      focusBorder: colors.dark4,
      foreground: colors.foreground,
      descriptionForeground: colors.foreground,
      errorForeground: colors.redBright,

      'icon.foreground': colors.white,
      'widget.shadow': colors.black40,

      // TODO: update
      'button.background': colors.accent,
      'button.foreground': colors.white,
      'button.hoverBackground': colors.accentHover,

      'checkbox.background': colors.black1,
      'checkbox.foreground': colors.white,
      'checkbox.border': colors.black1,

      'dropdown.background': colors.black1,
      'dropdown.border': colors.black1,
      'dropdown.foreground': colors.white,
      'dropdown.listBackground': colors.black2,

      'input.background': colors.input,
      'input.border': colors.inputBorder,
      'input.foreground': colors.inputForeground,
      'input.placeholderForeground': colors.foregroundInactive,

      'badge.foreground': colors.black1,
      'badge.background': colors.yellow,

      'progressBar.background': colors.accent,

      'titleBar.activeForeground': colors.white,
      'titleBar.activeBackground': colors.black2,
      'titleBar.inactiveForeground': colors.foreground,
      'titleBar.inactiveBackground': colors.black2,
      'titleBar.border': colors.black1,

      // The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.
      // https://code.visualstudio.com/api/references/theme-color#activity-bar
      'activityBar.dropBorder': colors.white, // TODO: or accent?
      'activityBar.foreground': colors.foreground,
      'activityBar.inactiveForeground': colors.foregroundInactive,
      'activityBar.border': colors.border,
      'activityBar.background': colors.background1,
      'activityBarBadge.foreground': colors.background1,
      'activityBarBadge.background': colors.white,
      'activityBar.activeBorder': colors.accent,
      'activityBar.activeBackground': colors.accent,
      'activityBar.activeFocusBorder': colors.border,

      // The Side Bar contains views like the Explorer and Search.
      // https://code.visualstudio.com/api/references/theme-color#side-bar
      'sideBar.background': colors.background3,
      'sideBar.foreground': colors.foreground,
      'sideBar.border': colors.border,
      'sideBar.dropBackground': colors.accentHover,
      'sideBarTitle.foreground': colors.foreground2,
      'sideBarSectionHeader.background': colors.background1,
      'sideBarSectionHeader.foreground': colors.foreground2,
      'sideBarSectionHeader.border': colors.background1,

      'textLink.foreground': colors.link,

      // The Minimap shows a minified version of the current file.
      // https://code.visualstudio.com/api/references/theme-color#minimap
      //
      // TODO

      // Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
      // https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
      'editorGroup.border': colors.border, // TODO this doesn't look good
      'editorGroup.dropBackground': colors.background1,
      'editorGroupHeader.noTabsBackground': colors.background1,
      'editorGroupHeader.tabsBackground': colors.background1,
      // "editorGroupHeader.tabsBorder": colors.background1,
      // "editorGroupHeader.border": colors.background1,
      'editorGroup.emptyBackground': colors.background1,
      'editorGroup.focusedEmptyBorder': colors.border,
      'editorGroup.dropIntoPromptForeground': colors.foreground,
      'editorGroup.dropIntoPromptBackground': colors.background1,
      'editorGroup.dropIntoPromptBorder': colors.background1,
      'tab.activeBackground': colors.backgroundHover,
      // "tab.unfocusedActiveBackground": colors.blue15, // TODO
      'tab.activeForeground': colors.foreground,
      'tab.border': colors.background1,
      'tab.activeBorder': colors.accent,
      'tab.unfocusedActiveBorder': colors.background1,
      'tab.lastPinnedBorder': colors.border,
      'tab.inactiveBackground': colors.background1,
      'tab.unfocusedInactiveBackground': colors.background1,
      'tab.inactiveForeground': colors.foregroundInactive,
      // tab.unfocusedActiveForeground: Active tab foreground color in an inactive editor group.
      // tab.unfocusedInactiveForeground: Inactive tab foreground color in an inactive editor group.
      // 'tab.unfocusedHoverBackground': colors.red1,
      'tab.hoverBackground': colors.backgroundHover,
      // tab.unfocusedHoverForeground: Tab foreground color in an unfocused group when hovering
      // tab.hoverBorder: Border to highlight tabs when hovering
      // tab.unfocusedHoverBorder: Border to highlight tabs in an unfocused group when hovering
      // tab.activeModifiedBorder: Border on the top of modified (dirty) active tabs in an active group.
      // tab.inactiveModifiedBorder: Border on the top of modified (dirty) inactive tabs in an active group.
      // tab.unfocusedActiveModifiedBorder: Border on the top of modified (dirty) active tabs in an unfocused group.
      // tab.unfocusedInactiveModifiedBorder: Border on the top of modified (dirty) inactive tabs in an unfocused group.
      // editorPane.background: Background color of the editor pane visible on the left and right side of the centered editor layout.
      // sideBySideEditor.horizontalBorder: Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
      // sideBySideEditor.verticalBorder: Color to separate two editors from each other when shown side by side in an editor group from left to right.

      'editor.foldBackground': colors.yellow15,
      'editor.lineHighlightBackground': colors.blue10, // TODO: update
      'editor.inactiveSelectionBackground': colors.blue15, // TODO: update
      // 'editor.selectionBackground': colors.red, // TODO: update
      'editor.wordHighlightBackground': colors.dark4, // TODO: update

      'editor.findMatchBackground': colors.purple, // TODO: update
      'editor.findMatchHighlightBackground': colors.purple50, // TODO: update

      'editorIndentGuide.background': colors.dark4_50,
      'editorCursor.foreground': colors.dark5,

      'editorBracketMatch.border': colors.dark5,

      'editorGutter.modifiedBackground': colors.modified,
      'editorGutter.addedBackground': colors.added,
      'editorGutter.deletedBackground': colors.deleted,

      'editorError.foreground': colors.redBright,
      'editorWarning.foreground': colors.orange,

      'editorWidget.background': colors.black2,
      'editorWidget.foreground': colors.white,
      'editorWidget.resizeBorder': colors.dark4,

      'editorLightBulb.foreground': colors.yellow,
      'editorLightBulbAutoFix.foreground': colors.yellow,

      // Editor colors
      // https://code.visualstudio.com/api/references/theme-color#editor-colors
      'editor.background': colors.background1,
      'editor.foreground': colors.syntax.fg,
      'editorLineNumber.foreground': colors.dark4,
      'editorLineNumber.activeForeground': colors.blue,
      // "editorCursor.background": colors.red,
      // "editorCursor.foreground": colors.red,
      'editor.selectionBackground': colors.blue25,
      // editor.inactiveSelectionBackground: Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
      // editor.selectionHighlightBackground: Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
      // editor.selectionHighlightBorder: Border color for regions with the same content as the selection.

      // Colors for list and trees like the File Explorer
      // https://code.visualstudio.com/api/references/theme-color#lists-and-trees
      'list.hoverForeground': colors.white,
      'list.inactiveSelectionForeground': colors.foreground,
      'list.activeSelectionForeground': colors.white,
      'list.hoverBackground': colors.blue25,
      'list.inactiveSelectionBackground': colors.blue15,
      'list.activeSelectionBackground': colors.blue15,
      'list.inactiveFocusBackground': '#1d2d3e',
      'list.focusBackground': colors.blue25,
      'list.focusForeground': colors.white,

      'notificationCenterHeader.background': colors.black2,
      'notificationCenterHeader.foreground': colors.white,
      'notifications.background': colors.dark4,
      'notifications.border': colors.dark4,
      'notificationToast.border': colors.dark4,
      'notificationLink.foreground': colors.blue,
      'notificationsErrorIcon.foreground': colors.redBright,
      'notificationsWarningIcon.foreground': colors.yellowBright,
      'notificationsInfoIcon.foreground': colors.white,

      'pickerGroup.border': '#444d56',
      'pickerGroup.foreground': colors.white,

      // cmd + shift + p
      'quickInput.background': colors.black2,
      'quickInput.foreground': colors.white,

      'statusBar.foreground': colors.foreground2,
      'statusBar.background': colors.background1,
      'statusBar.border': colors.background1,
      'statusBar.noFolderBackground': colors.background1,
      'statusBar.debuggingBackground': colors.yellow,
      'statusBar.debuggingForeground': colors.background1,

      'searchEditor.textInputBorder': colors.black1,

      // Breadcrumbs
      'breadcrumb.foreground': colors.foreground2,
      'breadcrumb.focusForeground': colors.white,
      'breadcrumb.background': colors.black2,
      'breadcrumb.activeSelectionForeground': colors.white,
      'breadcrumbPicker.background': colors.black2,

      'diffEditor.insertedTextBorder': colors.added,
      'diffEditor.removedTextBorder': colors.deleted,

      'scrollbar.shadow': colors.dark4_25,
      'scrollbarSlider.background': colors.dark4_25,
      'scrollbarSlider.hoverBackground': colors.dark4_50,
      'scrollbarSlider.activeBackground': colors.dark4,

      'editorOverviewRuler.border': colors.black1,

      'panel.background': colors.background1,
      'panel.border': colors.border,
      'panelTitle.activeBorder': colors.base,
      'panelTitle.activeForeground': colors.white,
      'panelTitle.inactiveForeground': colors.foreground,

      'panelInput.border': '#2f363d',
      'terminal.foreground': colors.foreground,
      'terminal.ansiBlack': colors.black1,
      'terminal.ansiBlue': colors.blue,
      'terminal.ansiBrightBlack': colors.dark4,
      'terminal.ansiBrightBlue': colors.blueBright,
      'terminal.ansiBrightCyan': colors.cyanBright,
      'terminal.ansiBrightGreen': colors.greenBright,
      'terminal.ansiBrightMagenta': colors.magentaBright,
      'terminal.ansiBrightRed': colors.redBright,
      'terminal.ansiBrightWhite': colors.whiteBright,
      'terminal.ansiBrightYellow': colors.yellowBright,
      'terminal.ansiCyan': colors.cyan,
      'terminal.ansiGreen': colors.green,
      'terminal.ansiMagenta': colors.purple,
      'terminal.ansiRed': colors.red,
      'terminal.ansiWhite': colors.white,
      'terminal.ansiYellow': colors.yellow,
      'terminal.selectionBackground': colors.blue15,
      'terminalCursor.background': colors.black2,
      'terminalCursor.foreground': colors.dark5,

      'gitDecoration.addedResourceForeground': colors.added,
      'gitDecoration.modifiedResourceForeground': colors.modified,
      'gitDecoration.deletedResourceForeground': colors.deleted,
      'gitDecoration.untrackedResourceForeground': colors.untracked,
      'gitDecoration.ignoredResourceForeground': colors.foreground,
      'gitDecoration.conflictingResourceForeground': colors.conflict,
      'gitDecoration.submoduleResourceForeground': colors.foreground,

      'debugToolBar.background': colors.black1,
      'debugToolBar.border': colors.black1,

      'settings.headerForeground': colors.white,
      'settings.modifiedItemIndicator': colors.modified,

      'welcomePage.buttonBackground': '#2f363d',
      'welcomePage.buttonHoverBackground': '#444d56',
    },
    semanticTokenColors: {
      // using const variables
      // fallback: variable.other.constant
      // 'variable.readonly': colors.variables,

      // using non-const variable names - e.g. console
      // fallback: variable.other.readwrite , entity.name.variable
      variable: colors.syntax.variable,

      parameter: colors.syntax.parameter,
      'parameter.label': colors.syntax.fg,
      property: colors.syntax.property,
      class: colors.syntax.class,
      namespace: colors.syntax.namespace,

      // e.g. 'console' in console.log or 'Math' in `Math.floor()`
      // fallback: support.constant
      'variable.defaultLibrary': colors.syntax.keyword2,

      // Default library functions, e.g. `setTimeout`
      'function.defaultLibrary': colors.syntax.keyword,

      // E.g. `log()` in `console.log` or `floor()` in `Math.floor()`
      'method.defaultLibrary': colors.syntax.function,

      method: colors.syntax.function,
      'method.declaration': colors.syntax.function,
      function: colors.syntax.function,
      // 'function.declaration': colors.syntax.function,

      // // fallback: variable.parameter
      // parameter: colors.parameters,

      // // fallback: entity.name.type
      type: colors.syntax.type,

      // // fallback: entity.name.function.member
      // member: colors.functionMembers,
      // 'member.defaultLibrary': colors.defaultFunctionMembers,

      // // Object properties
      // // fallback: variable.other.property
      // property: colors.property,
      // 'property.declaration': colors.propertyDeclaration,
      // 'property.defaultLibrary': colors.property,

      // // Math, RegExp
      // // fallback: support.class
      // 'class.defaultLibrary': colors.cyan,

      // // defining function, e.g. const MakeRainbow = () => {}
      // // "function": "#ffff00"
      // 'function.declaration.readonly': colors.functions,

      // // e.g. jest
      // // fallback: entity.name.namespace
      // namespace: colors.namespace,
    },
    tokenColors: [
      {
        name: 'Imported alias name',
        scope: 'variable.other.readwrite',
        settings: {
          foreground: colors.syntax.import,
        },
      },
      {
        name: 'Strings',
        scope: 'string, string.quoted.double',
        settings: {
          foreground: colors.syntax.string,
        },
      },
      {
        name: 'Booleans',
        scope: 'constant.language.boolean',
        settings: {
          foreground: colors.syntax.boolean,
        },
      },
      {
        name: 'Constants (nil in go)',
        scope: 'constant.language',
        settings: {
          foreground: colors.syntax.boolean,
        },
      },
      {
        name: 'Numbers',
        scope: 'constant.numeric',
        settings: {
          foreground: colors.syntax.number,
        },
      },
      {
        name: 'Nulls',
        scope: 'constant.language.null',
        settings: {
          foreground: colors.syntax.null,
        },
      },
      {
        name: 'Operators (=, !=, ==)',
        scope: 'keyword.operator',
        settings: {
          foreground: colors.syntax.other,
        },
      },
      {
        name: 'Keywords (export, default, return, function, struct, type, import, package)',
        scope: 'keyword, storage.type.function',
        settings: {
          foreground: colors.syntax.keyword,
        },
      },
      {
        name: 'Go: Keywords ',
        scope: 'keyword.operator.address',
        settings: {
          foreground: colors.syntax.keyword2,
        },
      },
      {
        name: 'Variables',
        scope: 'variable.other.assignment',
        settings: {
          foreground: colors.syntax.variable,
        },
      },
      {
        name: 'Variable storage type (let, const, var)',
        scope: 'storage.type',
        settings: {
          foreground: colors.syntax.keyword,
        },
      },
      {
        name: 'Variable: this',
        scope: 'variable.language.this',
        settings: {
          foreground: colors.syntax.keyword2,
        },
      },
      {
        name: 'Functions (calling a function)',
        scope: 'entity.name.function, support.function',
        settings: {
          foreground: colors.syntax.function,
        },
      },
      {
        name: 'Components, tags',
        scope: 'support.class.component, entity.name.tag',
        settings: {
          foreground: colors.syntax.components,
        },
      },
      {
        name: 'Attributes (className, id, etc.)',
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: colors.syntax.fg,
        },
      },
      {
        name: 'Types',
        scope:
          'entity.name.type, support.type.primitive, support.type.builtin, 	punctuation.definition.typeparameters.begin, 	punctuation.definition.typeparameters.end, storage.type.error',
        settings: {
          foreground: colors.syntax.type,
        },
      },
      {
        name: 'Graphql types',
        scope:
          'variable.fragment.graphql, keyword.operator.nulltype.graphql, support.type.enum.graphql, entity.scalar.graphql',
        settings: {
          foreground: colors.syntax.type,
        },
      },
      {
        name: 'Graphql custom types and function',
        scope: 'support.type.graphql, entity.name.function.graphql',
        settings: {
          foreground: colors.syntax.typeCustom,
        },
      },
      {
        name: 'Graphql variables',
        scope: 'variable.graphql, variable.fragment.graphql',
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: 'Object property',
        scope: 'variable.other.property, variable.other.object.property',
        settings: {
          foreground: colors.syntax.property,
        },
      },
      {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
          foreground: colors.syntax.comment,
          fontStyle: 'italic',
        },
      },
      {
        name: 'PostCSS: *',
        scope: 'keyword.operator.postcss',
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: 'CSS class, id, tag, attribute selector, @rule, @font-face',
        scope:
          'entity.other.attribute-name.css, entity.name.tag.css, entity.other.attribute-name.class.css, entity.other.attribute-name.id.css, entity.other.attribute-selector, keyword.control.at-rule.css, keyword.control.at-rule.font-face.css',
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: 'CSS variables',
        scope: 'variable.css, variable.argument.css',
        settings: {
          foreground: colors.yellow,
        },
      },
      {
        name: 'CSS meta selector',
        scope:
          'entity.other.attribute-name.pseudo-class.css, entity.other.attribute-name.pseudo-element.css',
        settings: {
          foreground: colors.pink,
        },
      },
      {
        name: 'CSS properties',
        scope: 'meta.property-name.css',
        settings: {
          foreground: colors.dark5,
        },
      },
      {
        name: 'CSS value',
        scope: 'support.constant.property-value.css',
        settings: {
          foreground: colors.purple,
        },
      },
      {
        name: 'CSS units',
        scope: 'keyword.other.unit.css',
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: 'CSS numbers',
        scope: 'constant.numeric.css',
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: 'Markdown paragraph text',
        scope: 'meta.paragraph.markdown',
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: 'Markdown heading',
        scope: 'markup.heading',
        settings: {
          foreground: colors.purple,
        },
      },
      {
        name: 'Markdown link title',
        scope:
          'string.other.link.title.markdown, punctuation.definition.string.begin.markdown, punctuation.definition.string.end.markdown',
        settings: {
          foreground: colors.blue,
        },
      },
      {
        name: 'Markdown links',
        scope:
          'markup.underline.link.markdown, markup.underline.link.image.markdown',
        settings: {
          foreground: colors.foreground2,
        },
      },
      {
        name: 'Markdown bold',
        scope: 'markup.bold.markdown',
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: 'Markdown italic',
        scope: 'markup.italic.markdown',
        settings: {
          foreground: colors.yellow,
        },
      },
      {
        name: 'Markdown inline code',
        scope: 'markup.inline.raw.string.markdown',
        settings: {
          foreground: colors.pink,
        },
      },
      {
        name: 'Markdown code block fence',
        scope: 'punctuation.definition.markdown',
        settings: {
          foreground: colors.syntax.fg,
        },
      },
      {
        name: 'Markdown quote',
        scope: 'markup.quote.markdown',
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: 'HTML tags',
        scope:
          'entity.name.tag.structure.any.html, entity.name.tag.block.any.html, entity.name.tag.inline.any.html',
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: 'HTML text',
        scope: 'text.html',
        settings: {
          foreground: colors.foreground,
        },
      },
      {
        name: 'HTML punctuation',
        scope:
          'punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html',
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: 'JSON: keys',
        scope: 'support.type.property-name.json',
        settings: {
          foreground: colors.keys,
        },
      },
      {
        name: 'JSON: constants (e.g. booleans, numeric)',
        scope: 'constant.language.json, constant.numeric.json',
        settings: {
          foreground: colors.orange,
        },
      },
      {
        name: 'JSON: punctuation (: ,)',
        scope:
          'punctuation.separator.dictionary.pair.json, punctuation.separator.dictionary.key-value.json',
        settings: {
          foreground: colors.syntax.fg,
        },
      },
      {
        name: 'YAML: tags/keys',
        scope: 'entity.name.tag.yaml',
        settings: {
          foreground: colors.syntax.fg,
        },
      },
      {
        name: 'YAML: punctuation (:), sequence items (-)',
        scope: 'punctuation.separator.key-value.mapping.yaml',
        settings: {
          foreground: colors.syntax.fg,
        },
      },
      {
        name: 'TOML: table, array',
        scope:
          'entity.other.attribute-name.table.toml, entity.other.attribute-name.table.array.toml',
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: 'INI: group title',
        scope: 'entity.name.section.group-title.ini',
        settings: {
          foreground: colors.white,
        },
      },
    ],
  };
};
