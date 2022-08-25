module.exports = function createTheme({ name, colors }) {
  return {
    semanticHighlighting: true,
    name: name,
    type: 'dark',
    colors: {
      focusBorder: colors.border,
      foreground: colors.foreground,
      descriptionForeground: colors.foreground,
      // disabledForeground: colors.redBright,
      // selection.background
      // descriptionForeground
      errorForeground: colors.red,
      'sash.hoverBorder': colors.yellow,

      'icon.foreground': colors.foreground2,
      'widget.shadow': colors.background1,

      // TODO: update
      'button.background': colors.accent,
      'button.foreground': colors.white,
      'button.hoverBackground': colors.accentHover,

      'checkbox.background': colors.backgroundPopup,
      'checkbox.foreground': colors.foreground,
      'checkbox.border': colors.border,

      'dropdown.background': colors.backgroundPopup,
      'dropdown.border': colors.border,
      'dropdown.foreground': colors.foreground,
      'dropdown.listBackground': colors.backgroundPopup,

      'input.background': colors.background2,
      'input.border': colors.background2,
      'input.foreground': colors.foreground,
      'input.placeholderForeground': colors.foregroundInactive,

      'badge.foreground': colors.background1,
      'badge.background': colors.yellow,

      'toolbar.activeBackground': colors.red,
      'toolbar.hoverBackground': colors.backgroundPopup,

      'progressBar.background': colors.accent,

      'titleBar.activeForeground': colors.foreground,
      'titleBar.activeBackground': colors.background1,
      'titleBar.inactiveForeground': colors.foreground2,
      'titleBar.inactiveBackground': colors.background2,
      'titleBar.border': colors.background1,

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

      'editor.findMatchBackground': colors.dark4, // TODO: update
      'editor.findMatchHighlightBackground': colors.yellow30, // TODO: update

      'editorIndentGuide.background': colors.foregroundSubtle,
      'editorCursor.foreground': colors.dark5,
      'editorBracketMatch.border': colors.yellow,

      'editorGutter.modifiedBackground': colors.modified,
      'editorGutter.addedBackground': colors.added,
      'editorGutter.deletedBackground': colors.deleted,

      'editorError.foreground': colors.red,
      'editorWarning.foreground': colors.orange,

      'editorWidget.background': colors.background2,
      'editorWidget.foreground': colors.foreground,
      'editorWidget.resizeBorder': colors.foreground2,
      // 'editorSuggestWidget.selectedIconForeground': colors.green,
      // 'editorSuggestWidget.selectedForeground': colors.green,

      'editorLightBulb.foreground': colors.yellow,
      'editorLightBulbAutoFix.foreground': colors.yellow,

      // Editor colors
      // https://code.visualstudio.com/api/references/theme-color#editor-colors
      'editor.background': colors.background1,
      'editor.foreground': colors.syntax.fg,
      'editorLineNumber.foreground': colors.foregroundInactive,
      'editorLineNumber.activeForeground': colors.foreground,
      'editor.selectionBackground': colors.blue25,
      // editor.inactiveSelectionBackground: Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
      // editor.selectionHighlightBackground: Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
      // editor.selectionHighlightBorder: Border color for regions with the same content as the selection.

      // Colors for list and trees like the File Explorer
      // https://code.visualstudio.com/api/references/theme-color#lists-and-trees
      // 'list.hoverForeground': colors.foreground,
      // 'list.inactiveSelectionForeground': colors.foreground,
      // 'list.activeSelectionForeground': colors.foreground,
      // 'list.hoverBackground': colors.backgroundHover,
      // 'list.inactiveSelectionBackground': colors.blue15,
      // 'list.activeSelectionBackground': colors.blue15,
      'list.focusBackground': colors.backgroundHover,
      'list.focusForeground': colors.foreground,

      'notificationCenterHeader.background': colors.background2,
      'notificationCenterHeader.foreground': colors.white,
      'notifications.background': colors.background2,
      'notifications.border': colors.background2,
      'notificationToast.border': colors.background2,
      'notificationLink.foreground': colors.accent,
      'notificationsErrorIcon.foreground': colors.red,
      'notificationsWarningIcon.foreground': colors.yellow,
      'notificationsInfoIcon.foreground': colors.white,

      'pickerGroup.border': '#444d56',
      'pickerGroup.foreground': colors.white,

      // cmd + shift + p
      'pickerGroup.border': colors.background2,
      'pickerGroup.foreground': colors.foreground,
      'quickInput.background': colors.background2,
      'quickInput.foreground': colors.white,
      'quickInputList.focusBackground': colors.backgroundPopup,
      'quickInputList.focusForeground': colors.foreground,
      'quickInputList.focusIconForeground': colors.foreground,
      'quickInputTitle.background': colors.red,
      'keybindingLabel.background': colors.background2,
      'keybindingLabel.foreground': colors.foreground,
      'keybindingLabel.border': colors.background2,

      'statusBar.foreground': colors.foreground2,
      'statusBar.background': colors.background1,
      'statusBar.border': colors.background1,
      'statusBar.noFolderBackground': colors.background1,
      'statusBar.debuggingBackground': colors.yellow,
      'statusBar.debuggingForeground': colors.background1,

      'searchEditor.textInputBorder': colors.background1,

      // Breadcrumbs
      'breadcrumb.foreground': colors.foreground2,
      'breadcrumb.focusForeground': colors.foreground,
      'breadcrumb.background': colors.background1,
      'breadcrumb.activeSelectionForeground': colors.foreground,
      'breadcrumbPicker.background': colors.background2,

      'diffEditor.insertedTextBorder': colors.added,
      'diffEditor.removedTextBorder': colors.deleted,

      'scrollbar.shadow': colors.border,
      'scrollbarSlider.background': colors.foregroundSubtle,
      'scrollbarSlider.hoverBackground': colors.foreground2,
      'scrollbarSlider.activeBackground': colors.foreground2,

      'editorOverviewRuler.border': colors.background1,

      'panel.background': colors.background1,
      'panel.border': colors.border,
      'panelTitle.activeBorder': colors.base,
      'panelTitle.activeForeground': colors.white,
      'panelTitle.inactiveForeground': colors.foreground,

      'panelInput.border': '#2f363d',
      'terminal.foreground': colors.foreground,
      'terminal.ansiBlack': colors.black,
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
        scope:
          'support.class.component, entity.name.tag, meta.property-name.scss',
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
