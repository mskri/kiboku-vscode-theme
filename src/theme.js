module.exports = function getColor({ name, colors }) {
  return {
    semanticHighlighting: true,
    name: name,
    type: 'dark',
    colors: {
      focusBorder: '#005cc5',
      foreground: colors.foreground,
      descriptionForeground: colors.foreground,
      errorForeground: colors.error,
      'textLink.foreground': '#79b8ff',
      'textLink.activeForeground': '#c8e1ff',
      'textBlockQuote.background': colors.background,
      'textBlockQuote.border': '#444d56',
      'textCodeBlock.background': '#2f363d',
      'textPreformat.foreground': colors.foreground,
      'textSeparator.foreground': '#586069',
      'button.background': '#176f2c',
      'button.foreground': '#dcffe4',
      'button.hoverBackground': '#22863a',
      'checkbox.background': '#444d56',
      'checkbox.border': colors.border,
      'dropdown.background': '#2f363d',
      'dropdown.border': colors.border,
      'dropdown.foreground': colors.foregroundBrighter,
      'dropdown.listBackground': colors.background,
      'input.background': '#2f363d',
      'input.border': colors.border,
      'input.foreground': colors.foregroundBrighter,
      'input.placeholderForeground': colors.foreground,
      'badge.foreground': '#c8e1ff',
      'badge.background': '#044289',
      'progressBar.background': '#0366d6',
      'titleBar.activeForeground': colors.foregroundBrighter,
      'titleBar.activeBackground': colors.background,
      'titleBar.inactiveForeground': colors.foreground,
      'titleBar.inactiveBackground': colors.background2,
      'titleBar.border': colors.border,

      'activityBar.foreground': colors.foregroundBrighter,
      'activityBar.inactiveForeground': colors.inactiveForeground,
      'activityBar.background': colors.background,
      'activityBarBadge.foreground': '#fff',
      // Activity notification badge background color.
      'activityBarBadge.background': colors.blue,
      'activityBar.activeBorder': colors.activeBorder,
      'activityBar.border': colors.border,

      'sideBar.foreground': '#e1e4e8',
      'sideBar.background': colors.background2,
      'sideBar.border': colors.border,
      'sideBarTitle.foreground': colors.foregroundBrighter,
      'sideBarSectionHeader.foreground': colors.foregroundBrighter,
      'sideBarSectionHeader.background': colors.background2,
      // 'sideBarSectionHeader.border': colors.background2,
      'list.hoverForeground': colors.foregroundBrighter,
      'list.inactiveSelectionForeground': colors.foregroundBrighter,
      'list.activeSelectionForeground': colors.foregroundBrighter,
      'list.hoverBackground': colors.background,
      'list.inactiveSelectionBackground': '#282e34',
      'list.activeSelectionBackground': '#39414a',
      'list.inactiveFocusBackground': '#1d2d3e',
      'list.focusBackground': '#044289',
      'tree.indentGuidesStroke': '#2f363d',
      'notificationCenterHeader.background': colors.background,
      'pickerGroup.border': '#444d56',
      'pickerGroup.foreground': colors.foregroundBrighter,
      'quickInput.background': colors.background,
      'quickInput.foreground': colors.foregroundBrighter,
      'statusBar.foreground': colors.foreground,
      'statusBar.background': colors.background,
      'statusBar.border': colors.border,
      'statusBar.noFolderBackground': colors.background,
      'statusBar.debuggingBackground': colors.yellowDark,
      'statusBar.debuggingForeground': colors.border,
      'editorGroupHeader.tabsBackground': colors.background2,
      'editorGroupHeader.tabsBorder': colors.border,
      // 'editorGroup.border': colors.border,
      'tab.activeForeground': colors.foregroundBrighter,
      'tab.inactiveForeground': colors.foreground,
      'tab.inactiveBackground': colors.background2,
      'tab.activeBackground': colors.background,
      'tab.hoverBackground': colors.background,
      'tab.unfocusedHoverBackground': colors.background,
      'tab.border': colors.border,
      'tab.unfocusedActiveBorderTop': colors.border,
      'tab.activeBorder': colors.base,
      'tab.unfocusedActiveBorder': colors.background,
      'breadcrumb.foreground': colors.foreground,
      'breadcrumb.focusForeground': colors.foregroundBrighter,
      'breadcrumb.activeSelectionForeground': colors.foreground,
      'breadcrumbPicker.background': '#2b3036',
      'editor.foreground': colors.white2,
      'editor.background': colors.background,
      'editor.foldBackground': '#282e33',
      'editor.lineHighlightBackground': '#2b3036',
      'editorLineNumber.foreground': '#444d56',
      'editorLineNumber.activeForeground': colors.foregroundBrighter,
      'editorIndentGuide.background': '#2f363d',
      'editorIndentGuide.activeBackground': '#444d56',
      'editorWhitespace.foreground': colors.inactiveForeground,
      'editorCursor.foreground': '#c8e1ff',
      'editor.inactiveSelectionBackground': '#79b8ff11',
      'editor.selectionBackground': '#2188ff33',
      'editor.wordHighlightBackground': '#2188ff22',
      'editor.findMatchBackground': '#ffd33d44',
      'editor.findMatchHighlightBackground': '#ffd33d22',
      'editorBracketMatch.background': '#005cc5',
      'editorBracketMatch.border': '#005cc5',
      'editorGutter.modifiedBackground': colors.modified,
      'editorGutter.addedBackground': '#28a745',
      'editorGutter.deletedBackground': colors.deleted,

      // Foreground color of error squiggles in the editor
      'editorError.foreground': colors.error,
      // Foreground color of warning squiggles in the editor.
      'editorWarning.foreground': colors.orange,
      // Border color of info boxes in the editor.
      'editorInfo.border': colors.base,

      'diffEditor.insertedTextBackground': '#28a74511',
      'diffEditor.removedTextBackground': '#d73a4918',

      // Scrollbar slider shadow to indicate that the view is scrolled
      'scrollbar.shadow': '#0000004D',
      'scrollbarSlider.background': '#6a737d33',
      'scrollbarSlider.hoverBackground': '#6a737d44',
      'scrollbarSlider.activeBackground': '#6a737d88',

      // -------------------------
      // Overview ruler
      // -------------------------

      // Color of the overview ruler border.
      'editorOverviewRuler.border': colors.border,
      // TODO: add background color (some opacity color)

      'panel.background': colors.background2,
      'panel.border': colors.border,
      'panelTitle.activeBorder': colors.activeBorder,
      'panelTitle.activeForeground': colors.foregroundBrighter,
      'panelTitle.inactiveForeground': colors.foreground,
      'panelInput.border': '#2f363d',
      'terminal.foreground': colors.foreground,
      'gitDecoration.addedResourceForeground': colors.added,
      'gitDecoration.modifiedResourceForeground': colors.modified,
      'gitDecoration.deletedResourceForeground': colors.deleted,
      'gitDecoration.untrackedResourceForeground': colors.untracked,
      'gitDecoration.ignoredResourceForeground': colors.ignored,
      'gitDecoration.conflictingResourceForeground': colors.conflict,
      'gitDecoration.submoduleResourceForeground': colors.ignored,
      'debugToolBar.background': '#2b3036',
      'editor.stackFrameHighlightBackground': '#b08800',
      'editor.focusedStackFrameHighlightBackground': '#dbab09',
      'settings.headerForeground': colors.foregroundBrighter,
      'settings.modifiedItemIndicator': '#0366d6',
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
      variable: colors.cyan, //colors.white,

      // let and var variable declaration
      'variable.declaration': colors.variables,

      // const variable declaration
      'variable.declaration.readonly': colors.readonlyVariables,

      // e.g. 'console' in console.log or 'Math' in Math.floor()
      // fallback: support.constant
      // 'variable.readonly.defaultLibrary': colors.cyan,
      'variable.defaultLibrary': {
        foreground: colors.white2,
        fontStyle: '',
      },

      // fallback: variable.parameter
      parameter: colors.parameters,

      // fallback: entity.name.type
      type: colors.types,

      // 'log' in console.log
      // fallback: entity.name.function.member
      member: colors.functionMembers,
      'member.defaultLibrary': {
        foreground: colors.defaultFunctionMembers,
        fontStyle: '',
      },

      // Object properties
      // fallback: variable.other.property
      property: colors.property,
      'property.declaration': colors.propertyDeclaration,
      'property.defaultLibrary': {
        foreground: colors.property,
        fontStyle: '',
      },

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
      'interface.defaultLibrary': {
        foreground: colors.types,
        fontStyle: '',
      },
    },
    tokenColors: [
      {
        name: 'Imported alias name',
        scope: 'variable.other.readwrite.alias',
        settings: {
          foreground: colors.variables,
          // foreground: colors.white,
        },
      },
      {
        name:
          'Imported alias name, variables defined outside of scope where they are used in, i.e. imports or top leve',
        scope: 'variable.other',
        settings: {
          foreground: colors.white,
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
        name: 'Components',
        scope: 'support.class.component',
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
          foreground: colors.white2,
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
          foreground: colors.white,
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
        scope: 'constant.numeric.decimal',
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
          foreground: colors.white2,
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
        scope: 'entity.other.attribute-name.css, entity.name.tag.css',
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
          foreground: colors.white2,
        },
      },
      {
        name: 'HTML punctuation',
        scope:
          'punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html',
        settings: {
          foreground: colors.white, // white2
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
