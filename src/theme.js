module.exports = function getColor({ name, colors }) {
  return {
    semanticHighlighting: true,
    name: name,
    type: 'dark',
    colors: {
      focusBorder: `${colors.base2}A6`, // 65% opacity,
      foreground: colors.light2,
      descriptionForeground: colors.light2,
      errorForeground: colors.error,

      'icon.foreground': colors.light1,
      'widget.shadow': '#00000066', // 40% opacity

      'button.background': colors.dark3,
      'button.foreground': colors.light1,
      'button.hoverBackground': colors.dark4,

      'checkbox.background': colors.dark1,
      'checkbox.foreground': colors.light1,
      'checkbox.border': colors.dark1,

      'dropdown.background': colors.dark1,
      'dropdown.border': colors.dark1,
      'dropdown.foreground': colors.light1,
      'dropdown.listBackground': colors.dark2,

      'input.background': colors.dark1,
      'input.border': colors.dark1,
      'input.foreground': colors.light1,
      'input.placeholderForeground': colors.light2,

      'badge.foreground': colors.dark1,
      'badge.background': colors.base,

      'progressBar.background': '#ff0000',

      'titleBar.activeForeground': colors.light1,
      'titleBar.activeBackground': colors.dark2,
      'titleBar.inactiveForeground': colors.light2,
      'titleBar.inactiveBackground': colors.dark2,
      'titleBar.border': colors.dark1,

      // Bar where you have files, search, debug, extensions etc.
      'activityBar.foreground': colors.light1,
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
      'sideBar.foreground': colors.light1,
      'sideBar.background': colors.dark2,
      'sideBar.border': colors.dark1,
      'sideBarTitle.foreground': colors.light2,
      'sideBarSectionHeader.foreground': colors.light2,
      'sideBarSectionHeader.background': colors.dark2,

      // Colors for list and trees like the File Explorer
      // https://code.visualstudio.com/api/references/theme-color#lists-and-trees
      'list.hoverForeground': colors.light1,
      'list.inactiveSelectionForeground': colors.light2,
      'list.activeSelectionForeground': colors.light1,
      'list.hoverBackground': colors.blue30,
      'list.inactiveSelectionBackground': colors.blue15,
      'list.activeSelectionBackground': colors.blue15,
      'list.inactiveFocusBackground': '#1d2d3e',
      'list.focusBackground': colors.blue30,
      'list.focusForeground': colors.light1,

      'tree.indentGuidesStroke': colors.dark4,

      'notificationCenterHeader.background': colors.dark2,
      'notificationCenterHeader.foreground': colors.light1,
      'notifications.background': colors.dark3,
      'notifications.border': colors.dark3,
      'notificationToast.border': colors.dark3,
      'notificationLink.foreground': colors.base2,
      'notificationsErrorIcon.foreground': colors.error,
      'notificationsWarningIcon.foreground': colors.warning,
      'notificationsInfoIcon.foreground': colors.light1,

      'pickerGroup.border': '#444d56',
      'pickerGroup.foreground': colors.light1,

      // cmd + shift + p
      'quickInput.background': colors.dark2,
      'quickInput.foreground': colors.light1,

      'statusBar.foreground': colors.light2,
      'statusBar.background': colors.dark2,
      'statusBar.border': colors.dark1,
      'statusBar.noFolderBackground': colors.dark2,
      'statusBar.debuggingBackground': colors.base,
      'statusBar.debuggingForeground': colors.dark1,

      'searchEditor.textInputBorder': colors.dark1,

      'editorGroupHeader.tabsBackground': colors.dark2,
      'editorGroup.dropBackground': colors.dark3,

      // Editor tabs
      'tab.activeForeground': colors.light1,
      'tab.inactiveForeground': colors.light2,
      'tab.inactiveBackground': colors.dark2,
      'tab.activeBackground': colors.blue15,
      'tab.hoverBackground': colors.blue30,
      'tab.border': colors.dark2,

      // Breadcrumbs
      'breadcrumb.foreground': colors.light2,
      'breadcrumb.focusForeground': colors.light1,
      'breadcrumb.background': colors.dark2,
      'breadcrumb.activeSelectionForeground': colors.light1,
      'breadcrumbPicker.background': colors.dark2,

      'editor.foreground': colors.foreground,
      'editor.background': colors.dark2,
      'editor.foldBackground': colors.yellow10,
      'editor.lineHighlightBackground': colors.blue8,
      'editor.inactiveSelectionBackground': colors.blue15,
      'editor.selectionBackground': colors.blue15,
      'editor.wordHighlightBackground': `${colors.base2}33`,

      'editor.findMatchBackground': colors.dark4,
      'editor.findMatchHighlightBackground': `${colors.dark3}D9`, // 85% opacity

      'editorLineNumber.foreground': colors.dark3,
      'editorLineNumber.activeForeground': colors.light1,
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
      'editorWidget.foreground': colors.light1,
      'editorWidget.border': colors.dark3,
      'editorWidget.resizeBorder': colors.dark3,

      'diffEditor.insertedTextBorder': colors.added,
      'diffEditor.removedTextBorder': colors.deleted,

      'scrollbar.shadow': '#00000066', // 40% opacity
      'scrollbarSlider.background': `${colors.dark4}40`, // 25% opacity
      'scrollbarSlider.hoverBackground': `${colors.dark4}66`, // 40% opacity
      'scrollbarSlider.activeBackground': `${colors.dark4}8C`, // 55% opacity

      'editorOverviewRuler.border': colors.dark1,

      'panel.background': colors.dark2,
      'panel.border': colors.dark1,
      'panelTitle.activeBorder': colors.base,
      'panelTitle.activeForeground': colors.light1,
      'panelTitle.inactiveForeground': colors.light2,

      'panelInput.border': '#2f363d',
      'terminal.foreground': colors.light2,
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
      'gitDecoration.ignoredResourceForeground': colors.light2,
      'gitDecoration.conflictingResourceForeground': colors.conflict,
      'gitDecoration.submoduleResourceForeground': colors.light2,

      'debugToolBar.background': colors.dark1,
      'debugToolBar.border': colors.dark1,

      'settings.headerForeground': colors.light1,
      'settings.modifiedItemIndicator': colors.modified,

      'welcomePage.buttonBackground': '#2f363d',
      'welcomePage.buttonHoverBackground': '#444d56',
    },
    semanticTokenColors: {
      // "variable": "#ffff00",
      // "variable.declaration.readonly": "#69c52e",
      // "variable.declaration.readonly.local": "#69c52e",

      // using const variables
      // fallback: variable.other.constant
      'variable.readonly': colors.readonlyVariables,

      // using non-const variable names - e.g. console
      // fallback: variable.other.readwrite , entity.name.variable
      variable: colors.cyan, //colors.light1,

      // let and var variable declaration
      'variable.declaration': colors.variables,

      // const variable declaration
      'variable.declaration.readonly': colors.readonlyVariables,

      // e.g. 'console' in console.log or 'Math' in Math.floor()
      // fallback: support.constant
      // 'variable.readonly.defaultLibrary': colors.cyan,
      'variable.defaultLibrary': colors.foreground,

      // fallback: variable.parameter
      parameter: colors.parameters,

      // fallback: entity.name.type
      type: colors.types,

      // 'log' in console.log
      // fallback: entity.name.function.member
      member: colors.functionMembers,
      'member.defaultLibrary': colors.defaultFunctionMembers,

      // Object properties
      // fallback: variable.other.property
      property: colors.property,
      'property.declaration': colors.propertyDeclaration,
      'property.defaultLibrary': colors.property,

      // User defined classes
      // fallback: entity.name.type.class
      class: colors.variables,

      // Math, RegExp
      // fallback: support.class
      'class.defaultLibrary': colors.cyan,

      // defining function, e.g. const MakeRainbow = () => {}
      // "function": "#ffff00"
      'function.declaration.readonly': colors.functions,

      // e.g. jest
      // fallback: entity.name.namespace
      namespace: colors.namespace,

      // e.g. `Promise` in `Promise<void>`
      interface: colors.types,
      'interface.defaultLibrary': colors.types,
    },
    tokenColors: [
      {
        name: 'Imported alias name',
        scope: 'variable.other.readwrite.alias',
        settings: {
          foreground: colors.variables,
        },
      },
      {
        name:
          'Imported alias name, variables defined outside of scope where they are used in, i.e. imports or top leve',
        scope: 'variable.other',
        settings: {
          foreground: colors.light1,
        },
      },
      {
        name: 'Function parameters',
        scope: 'variable.parameter',
        settings: {
          foreground: colors.parameters,
        },
      },
      {
        name: 'Components, tags',
        scope: 'support.class.component, entity.name.tag',
        settings: {
          foreground: colors.components,
        },
      },
      {
        name: 'Strings',
        scope: 'string',
        settings: {
          foreground: colors.green,
        },
      },
      {
        name: 'Template literal {}',
        scope:
          'punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end',
        settings: {
          foreground: colors.foreground,
        },
      },
      {
        name: 'Types',
        scope:
          'entity.name.type, support.type.primitive, support.type.builtin, 	punctuation.definition.typeparameters.begin, 	punctuation.definition.typeparameters.end, keyword.operator.nulltype.graphql, support.type.graphql, variable.fragment.graphql',
        settings: {
          foreground: colors.types,
        },
      },
      {
        name: 'Namespace',
        scope: 'entity.name.namespace',
        settings: {
          foreground: colors.namespace,
        },
      },
      {
        name: 'Graphql types',
        scope: 'keyword.operator.nulltype.graphql, support.type.graphql',
        settings: {
          foreground: colors.types,
        },
      },
      {
        name: 'Graphql variables',
        scope: 'variable.graphql, variable.fragment.graphql',
        settings: {
          foreground: colors.light1,
        },
      },
      {
        name: 'Punctuations - , ;',
        scope:
          'punctuation.separator.comma, punctuation.terminator.rule, punctuation.terminator.statement',
        settings: {
          foreground: colors.punctuation,
        },
      },
      {
        name: 'Function calls',
        scope: 'entity.name.function',
        settings: {
          foreground: colors.functions,
        },
      },
      {
        name: 'Built-lib functions',
        scope: 'entity.name.function.member',
        settings: {
          foreground: colors.functionMembers,
        },
      },
      {
        name: 'Booleans',
        scope: 'constant.language.boolean',
        settings: {
          foreground: colors.constantKeywords,
        },
      },
      {
        name: 'Numbers',
        scope: 'constant.numeric',
        settings: {
          foreground: colors.constantKeywords,
        },
      },
      {
        name: 'Nulls',
        scope: 'constant.language.null',
        settings: {
          foreground: colors.constantKeywords,
        },
      },
      {
        name: 'Variable - constant',
        scope: 'variable.other.constant',
        settings: {
          foreground: colors.readonlyVariables,
        },
      },
      {
        name: 'Variables',
        scope:
          'variable.other.readwrite , entity.name.variable, variable.other.object',
        settings: {
          foreground: colors.variables,
        },
      },
      {
        name: 'console',
        scope: 'support.class.console',
        settings: {
          foreground: colors.blue,
        },
      },
      {
        name: 'Support classes - Promise, Math',
        scope: 'support.class',
        settings: {
          foreground: colors.foreground,
        },
      },
      {
        name: 'new',
        scope: 'keyword.operator.new',
        settings: {
          foreground: colors.cyan, // TODO: better color
        },
      },
      {
        name: 'Object property',
        scope: 'variable.other.property, variable.other.object.property',
        settings: {
          foreground: colors.property,
        },
      },
      {
        name: 'Object literal key',
        scope: 'meta.object-literal.key',
        settings: {
          foreground: colors.propertyDeclaration,
        },
      },
      {
        name: 'Custom classes',
        scope: 'entity.name.type.class',
        settings: {
          foreground: colors.variables,
        },
      },
      {
        name: 'Built-in classes and constants',
        scope: 'support.variable.object.process',
        settings: {
          foreground: colors.blue,
        },
      },
      {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
          foreground: colors.comments,
          fontStyle: 'italic',
        },
      },
      {
        name: 'CSS class, id, tag',
        scope:
          'entity.other.attribute-name.css, entity.name.tag.css, entity.other.attribute-name.class.css',
        settings: {
          foreground: colors.light1,
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
          foreground: colors.light1,
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
          foreground: colors.light1,
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
          foreground: colors.light1,
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
    ],
  };
};
