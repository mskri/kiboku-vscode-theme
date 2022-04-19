module.exports = function createTheme({ name, colors }) {
  return {
    semanticHighlighting: true,
    name: name,
    type: 'dark',
    colors: {
      focusBorder: colors.base2_65,
      foreground: colors.gray,
      descriptionForeground: colors.gray,
      errorForeground: colors.error,

      'icon.foreground': colors.white,
      'widget.shadow': colors.black40,

      'button.background': colors.dark3,
      'button.foreground': colors.white,
      'button.hoverBackground': colors.dark4,

      'checkbox.background': colors.dark1,
      'checkbox.foreground': colors.white,
      'checkbox.border': colors.dark1,

      'dropdown.background': colors.dark1,
      'dropdown.border': colors.dark1,
      'dropdown.foreground': colors.white,
      'dropdown.listBackground': colors.dark2,

      'input.background': colors.dark1,
      'input.border': colors.dark1,
      'input.foreground': colors.white,
      'input.placeholderForeground': colors.gray,

      'badge.foreground': colors.dark1,
      'badge.background': colors.base,

      'progressBar.background': '#ff0000',

      'titleBar.activeForeground': colors.white,
      'titleBar.activeBackground': colors.dark2,
      'titleBar.inactiveForeground': colors.gray,
      'titleBar.inactiveBackground': colors.dark2,
      'titleBar.border': colors.dark1,

      // Bar where you have files, search, debug, extensions etc.
      'activityBar.foreground': colors.white,
      'activityBar.inactiveForeground': colors.dark4,
      'activityBar.background': colors.dark2,
      'activityBar.activeBorder': colors.base,
      'activityBar.border': colors.dark1,

      // Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.
      // https://code.visualstudio.com/api/references/theme-color#activity-bar
      'activityBarBadge.foreground': colors.dark1,
      'activityBarBadge.background': colors.base,

      // Side Bar contains views like the Explorer and Search.
      // https://code.visualstudio.com/api/references/theme-color#side-bar
      'sideBar.foreground': colors.white,
      'sideBar.background': colors.dark2,
      'sideBar.border': colors.dark1,
      'sideBarTitle.foreground': colors.gray,
      'sideBarSectionHeader.foreground': colors.gray,
      'sideBarSectionHeader.background': colors.dark2,

      // Colors for list and trees like the File Explorer
      // https://code.visualstudio.com/api/references/theme-color#lists-and-trees
      'list.hoverForeground': colors.white,
      'list.inactiveSelectionForeground': colors.gray,
      'list.activeSelectionForeground': colors.white,
      'list.hoverBackground': colors.blue25,
      'list.inactiveSelectionBackground': colors.blue15,
      'list.activeSelectionBackground': colors.blue15,
      'list.inactiveFocusBackground': '#1d2d3e',
      'list.focusBackground': colors.blue25,
      'list.focusForeground': colors.white,

      'tree.indentGuidesStroke': colors.dark4,

      'notificationCenterHeader.background': colors.dark2,
      'notificationCenterHeader.foreground': colors.white,
      'notifications.background': colors.dark3,
      'notifications.border': colors.dark3,
      'notificationToast.border': colors.dark3,
      'notificationLink.foreground': colors.base2,
      'notificationsErrorIcon.foreground': colors.error,
      'notificationsWarningIcon.foreground': colors.warning,
      'notificationsInfoIcon.foreground': colors.white,

      'pickerGroup.border': '#444d56',
      'pickerGroup.foreground': colors.white,

      // cmd + shift + p
      'quickInput.background': colors.dark2,
      'quickInput.foreground': colors.white,

      'statusBar.foreground': colors.gray,
      'statusBar.background': colors.dark2,
      'statusBar.border': colors.dark1,
      'statusBar.noFolderBackground': colors.dark2,
      'statusBar.debuggingBackground': colors.base,
      'statusBar.debuggingForeground': colors.dark1,

      'searchEditor.textInputBorder': colors.dark1,

      'editorGroupHeader.tabsBackground': colors.dark2,
      'editorGroup.dropBackground': colors.dark3,

      // Editor tabs
      'tab.activeForeground': colors.white,
      'tab.inactiveForeground': colors.gray,
      'tab.inactiveBackground': colors.dark2,
      'tab.activeBackground': colors.blue15,
      'tab.hoverBackground': colors.blue25,
      'tab.border': colors.dark2,

      // Breadcrumbs
      'breadcrumb.foreground': colors.gray,
      'breadcrumb.focusForeground': colors.white,
      'breadcrumb.background': colors.dark2,
      'breadcrumb.activeSelectionForeground': colors.white,
      'breadcrumbPicker.background': colors.dark2,

      'editor.foreground': colors.syntax.fg,
      'editor.background': colors.dark2,
      'editor.foldBackground': colors.yellow10,
      'editor.lineHighlightBackground': colors.blue10,
      'editor.inactiveSelectionBackground': colors.blue15,
      'editor.selectionBackground': colors.blue15,
      'editor.wordHighlightBackground': colors.blue35,

      'editor.findMatchBackground': colors.yellow70,
      'editor.findMatchHighlightBackground': colors.yellow40,

      'editorLineNumber.foreground': colors.dark3,
      'editorLineNumber.activeForeground': colors.white,
      'editorIndentGuide.background': colors.dark3,
      'editorIndentGuide.activeBackground': colors.dark4,
      'editorWhitespace.foreground': colors.dark4,
      'editorCursor.foreground': colors.dark5,

      'editorBracketMatch.border': colors.dark5,

      'editorGutter.modifiedBackground': colors.modified,
      'editorGutter.addedBackground': colors.added,
      'editorGutter.deletedBackground': colors.deleted,

      'editorError.foreground': colors.error,
      'editorWarning.foreground': colors.orange,

      'editorWidget.background': colors.dark2,
      'editorWidget.foreground': colors.white,
      'editorWidget.border': colors.dark3,
      'editorWidget.resizeBorder': colors.dark3,

      'editorLightBulb.foreground': colors.base,
      'editorLightBulbAutoFix.foreground': colors.base,

      'diffEditor.insertedTextBorder': colors.added,
      'diffEditor.removedTextBorder': colors.deleted,

      'scrollbar.shadow': colors.black40,
      'scrollbarSlider.background': colors.dark4_25,
      'scrollbarSlider.hoverBackground': colors.dark4_40,
      'scrollbarSlider.activeBackground': colors.dark4_55,

      'editorOverviewRuler.border': colors.dark1,

      'panel.background': colors.dark2,
      'panel.border': colors.dark1,
      'panelTitle.activeBorder': colors.base,
      'panelTitle.activeForeground': colors.white,
      'panelTitle.inactiveForeground': colors.gray,

      'panelInput.border': '#2f363d',
      'terminal.foreground': colors.gray,
      'terminal.ansiBlack': colors.ansiBlack,
      'terminal.ansiBlue': colors.ansiBlue,
      'terminal.ansiBrightBlack': colors.ansiBrightBlack,
      'terminal.ansiBrightBlue': colors.ansiBrightBlue,
      'terminal.ansiBrightCyan': colors.ansiBrightCyan,
      'terminal.ansiBrightGreen': colors.ansiBrightGreen,
      'terminal.ansiBrightMagenta': colors.ansiBrightMagenta,
      'terminal.ansiBrightRed': colors.ansiBrightRed,
      'terminal.ansiBrightWhite': colors.ansiBrightWhite,
      'terminal.ansiBrightYellow': colors.ansiBrightYellow,
      'terminal.ansiCyan': colors.ansiCyan,
      'terminal.ansiGreen': colors.ansiGreen,
      'terminal.ansiMagenta': colors.ansiMagenta,
      'terminal.ansiRed': colors.ansiRed,
      'terminal.ansiWhite': colors.ansiWhite,
      'terminal.ansiYellow': colors.ansiYellow,
      'terminal.selectionBackground': colors.blue15,
      'terminalCursor.background': colors.dark2,
      'terminalCursor.foreground': colors.dark5,

      'gitDecoration.addedResourceForeground': colors.added,
      'gitDecoration.modifiedResourceForeground': colors.modified,
      'gitDecoration.deletedResourceForeground': colors.deleted,
      'gitDecoration.untrackedResourceForeground': colors.untracked,
      'gitDecoration.ignoredResourceForeground': colors.gray,
      'gitDecoration.conflictingResourceForeground': colors.conflict,
      'gitDecoration.submoduleResourceForeground': colors.gray,

      'debugToolBar.background': colors.dark1,
      'debugToolBar.border': colors.dark1,

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

      // // User defined classes
      // // fallback: entity.name.type.class
      // class: colors.variables,

      // // Math, RegExp
      // // fallback: support.class
      // 'class.defaultLibrary': colors.cyan,

      // // defining function, e.g. const MakeRainbow = () => {}
      // // "function": "#ffff00"
      // 'function.declaration.readonly': colors.functions,

      // // e.g. jest
      // // fallback: entity.name.namespace
      // namespace: colors.namespace,

      // // e.g. `Promise` in `Promise<void>`
      // interface: colors.types,
      // 'interface.defaultLibrary': colors.types,
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
      // {
      //   name: 'Template literal {}',
      //   scope:
      //     'punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end',
      //   settings: {
      //     foreground: colors.foreground,
      //   },
      // },
      {
        name: 'Types',
        scope:
          'entity.name.type, support.type.primitive, support.type.builtin, 	punctuation.definition.typeparameters.begin, 	punctuation.definition.typeparameters.end, storage.type.error',
        settings: {
          foreground: colors.syntax.type,
        },
      },
      // {
      //   name: 'Namespace',
      //   scope: 'entity.name.namespace',
      //   settings: {
      //     foreground: colors.namespace,
      //   },
      // },
      {
        name: 'Graphql types',
        scope:
          'variable.fragment.graphql, keyword.operator.nulltype.graphql, support.type.enum.graphql, entity.scalar.graphql',
        settings: {
          foreground: colors.types,
        },
      },
      {
        name: 'Graphql custom types and function',
        scope: 'support.type.graphql, entity.name.function.graphql',
        settings: {
          foreground: colors.customTypes,
        },
      },
      {
        name: 'Graphql variables',
        scope: 'variable.graphql, variable.fragment.graphql',
        settings: {
          foreground: colors.white,
        },
      },
      // {
      //   name: 'Punctuations - , ;',
      //   scope:
      //     'punctuation.separator.comma, punctuation.terminator.rule, punctuation.terminator.statement',
      //   settings: {
      //     foreground: colors.punctuation,
      //   },
      // },
      // {
      //   name: 'Built-lib functions',
      //   scope: 'entity.name.function.member',
      //   settings: {
      //     foreground: colors.functionMembers,
      //   },
      // },
      // {
      //   name: 'Variable - constant',
      //   scope: 'variable.other.constant',
      //   settings: {
      //     foreground: colors.readonlyVariables,
      //   },
      // },
      // {
      //   name: 'Variables',
      //   scope:
      //     'variable.other.readwrite , entity.name.variable, variable.other.object',
      //   settings: {
      //     foreground: colors.variables,
      //   },
      // },
      // {
      //   name: 'console',
      //   scope: 'support.class.console',
      //   settings: {
      //     foreground: colors.blue,
      //   },
      // },
      // {
      //   name: 'Support classes - Promise, Math',
      //   scope: 'support.class',
      //   settings: {
      //     foreground: colors.foreground,
      //   },
      // },
      // {
      //   name: 'new',
      //   scope: 'keyword.operator.new',
      //   settings: {
      //     foreground: colors.cyan, // TODO: better color
      //   },
      // },
      {
        name: 'Object property',
        scope: 'variable.other.property, variable.other.object.property',
        settings: {
          foreground: colors.syntax.property,
        },
      },
      // {
      //   name: 'Object literal key',
      //   scope: 'meta.object-literal.key',
      //   settings: {
      //     foreground: colors.propertyDeclaration,
      //   },
      // },
      // {
      //   name: 'Custom classes',
      //   scope: 'entity.name.type.class',
      //   settings: {
      //     foreground: colors.variables,
      //   },
      // },
      // {
      //   name: 'Built-in classes and constants',
      //   scope: 'support.variable.object.process',
      //   settings: {
      //     foreground: colors.blue,
      //   },
      // },
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
          foreground: colors.red,
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
        scope: 'markup.underline.link.markdown',
        settings: {
          foreground: colors.green,
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
          foreground: colors.punctuation,
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
          foreground: colors.constantKeywords,
        },
      },
      {
        name: 'JSON: punctuation (: ,)',
        scope:
          'punctuation.separator.dictionary.pair.json, punctuation.separator.dictionary.key-value.json',
        settings: {
          foreground: colors.punctuation,
        },
      },
      {
        name: 'YAML: tags/keys',
        scope: 'entity.name.tag.yaml',
        settings: {
          foreground: colors.keys,
        },
      },
      {
        name: 'YAML: punctuation (:), sequence items (-)',
        scope: 'punctuation.separator.key-value.mapping.yaml',
        settings: {
          foreground: colors.punctuation,
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
