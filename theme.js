

module.exports = function getColor({ name, colors }) {
  return {
    semanticHighlighting: true,
    name: name,
    type: "dark",
    semanticTokenColors: {
      // "variable": "#ffff00",
      // "variable.declaration.readonly": "#69c52e",
      // "variable.declaration.readonly.local": "#69c52e",

      // const variable names
      // fallback: variable.other.constant
      "variable.readonly": colors.yellow,

      // let or var variable names
      // fallback: variable.other.readwrite , entity.name.variable
      "variable": colors.yellow2,


      // fallback: entity.name.type
      "type": colors.pink,

      // "variable.readonly.local": "#1085FF",
      "variable.defaultLibrary": colors.cyan, // e.g. 'console' in console.log or 'Math' in Math.floor()

      // 'log' in console.log
      // fallback: entity.name.function.member
      "member": colors.blue,

      // Object properties
      // fallback: variable.other.property
      "property": colors.white,
      "property.readonly": '#1085FF',

      // fallback: support.constant
      "variable.readonly.defaultLibrary": "#ff0000",

      // RegExp
      // fallback: entity.name.type.class
      "class": "#ff0000",

      // "function": "#ffff00"
      "function.declaration.readonly": colors.blue, // defining function, e.g. const MakeRainbow = () => {}
    },
    colors: {
      "editor.background": colors.background,
      "editor.foreground": colors.foreground,
    },
    tokenColors: [
      {
        name: "Imported alias name, variables defined outside of scope where they are used in, i.e. imports or top leve",
        scope: "variable.other",
        settings: {
          foreground: colors.white,
        },
      },
      {
        name: "Function parameters",
        scope: "variable.parameter",
        settings: {
          foreground: colors.white
        },
      },
      {
        name: "Components",
        scope: "support.class.component",
        settings: {
          foreground: colors.cyan,
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
      // {
      //   name: "Keywords, storage",
      //   scope: "keyword.control, storage.type",
      //   settings: {
      //     foreground: colors.purple,
      //   }
      // },
      // {
      //   name: "Operators",
      //   scope: "keyword.operator",
      //   settings: {
      //     foreground: colors.white,
      //   }
      // },
      // {
      //   name: "Punctuations",
      //   scope: "punctuation",
      //   settings: {
      //     foreground: colors.white
      //   }
      // },
      // {
      //   name: "Entity",
      //   scope: "entity.other",
      //   settings: {
      //     foreground: colors.purple2
      //   }
      // },
      {
        name: "Function calls",
        scope: "entity.name.function",
        settings: {
          foreground: colors.blue
        }
      },
      {
        name: "Booleans",
        scope: "constant.language.boolean",
        settings: {
          foreground: colors.orange
        }
      },
      {
        name: "Numbers",
        scope: "constant.numeric.decimal",
        settings: {
          foreground: colors.orange
        }
      },
      {
        name: "Comments",
        scope: "comment, punctuation.definition.comment",
        settings: {
          foreground: colors.purple2,
          fontStyle: "italic",
        },
      },
      // {
      //   name: "Function",
      //   scope: "entity.name.function, support.function",
      //   settings: {
      //     foreground: colors.blue,
      //   },
      // },
      // {
      //   name: "Invalid",
      //   scope: "invalid",
      //   settings: {
      //     foreground: colors.orange,
      //   },
      // },
      // {
      //   name:
      //     "Keywords - assignments, colon, semicolon, comma, comma, artimethric",
      //   scope:
      //     "keyword.operator.assignment, keyword.operator.type.annotation, punctuation.terminator.statement, punctuation.separator.comma, punctuation.separator.parameter, keyword.operator.arithmetic",
      //   settings: {
      //     foreground: colors.white,
      //   },
      // },
      // {
      //   name: "Punctuator accessor '?' ",
      //   scope: "punctuation.accessor",
      //   settings: {
      //     foreground: colors.white,
      //     fontStyle: "bold",
      //   },
      // },
      // {
      //   // Could be simplified to keyword.operator, keyword.control ?
      //   name:
      //     "Keywords - if, else, comparison, logical, control, switch, break, try, catch, new, await, array, ternary, import, from, as, export, pipe, module",
      //   scope:
      //     "keyword.operator.comparison, keyword.operator.logical, keyword.control.conditional, keyword.control.switch, keyword.control.loop, keyword.control.trycatch, keyword.operator.new, keyword.control.flow, keyword.operator.ternary, keyword.control.import, keyword.control.from, keyword.control.as, keyword.control.export, keyword.operator.type, keyword.operator.accessor, keyword.control.shell",
      //   settings: {
      //     foreground: colors.purple,
      //   },
      // },
      // {
      //   name: "Module variable",
      //   scope: "entity.name.type.module",
      //   settings: {
      //     foreground: colors.red,
      //   },
      // },
      // {
      //   name: "New",
      //   scope: "new.expr",
      //   settings: {
      //     foreground: colors.blue,
      //   },
      // },
      // {
      //   name:
      //     "Types - interface, inherited class, primitive types, custom type annotations, alias, declaration, parameters",
      //   scope:
      //     "entity.name.type.interface, entity.other.inherited-class, support.type.primitive, meta.type.annotation, entity.name.type.alias, meta.type.declaration, meta.type.parameters",
      //   settings: {
      //     foreground: colors.pink,
      //   },
      // },
      // {
      //   name: "Storage - const, let, var",
      //   scope: "storage",
      //   settings: {
      //     foreground: colors.purple2,
      //   },
      // },
      // {
      //   name: "String",
      //   scope: "string.quoted",
      //   settings: {
      //     foreground: colors.green,
      //   },
      // },
      // {
      //   name: "Braces, brackets, block, tag open, tag close",
      //   scope:
      //     "meta.brace.round, meta.brace.square, punctuation.definition.block, punctuation.definition.tag.begin, punctuation.definition.tag.end, punctuation.definition.block",
      //   settings: {
      //     foreground: colors.white,
      //   },
      // },
      // {
      //   name: "Variable - template literal",
      //   scope: "meta.embedded.line",
      //   settings: {
      //     foreground: colors.white,
      //   },
      // },
      // {
      //   name: "Template literal expression ${}",
      //   scope:
      //     "punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end",
      //   settings: {
      //     foreground: colors.blue,
      //   },
      // },
      // // Already defined by member.defaultLibrary
      // // Needed for fallback
      // {
      //   name: "Component",
      //   scope: "support.class.component",
      //   settings: {
      //     foreground: colors.cyan,
      //   },
      // },
      // {
      //   name: "Component props",
      //   // "scope": "meta.tag.attributes",
      //   scope: "entity.other.attribute-name",
      //   settings: {
      //     foreground: colors.purple2,
      //   },
      // },
      // {
      //   name: "Support: import all *, Math, console.log",
      //   scope:
      //     "constant.language.import-export-all, support.constant, support.class, support.variable.property",
      //   settings: {
      //     foreground: colors.cyan,
      //   },
      // },
      // {
      //   name: "Import names",
      //   scope: "variable.other.readwrite.alias",
      //   settings: {
      //     foreground: colors.white,
      //   },
      // },
      // {
      //   name:
      //     "Variables - object property, property, type key, type key, type optional",
      //   scope:
      //     "variable.other.object.property, variable.other.property, variable.object.property, keyword.operator.optional, variable.other.constant.property",
      //   settings: {
      //     foreground: colors.white,
      //   },
      // },
      // {
      //   name: "Variable name - object, const, let",
      //   scope: "meta.definition.variable, variable.other.constant",
      //   settings: {
      //     foreground: colors.variables,
      //   },
      // },
      // {
      //   name: "Used variable name",
      //   scope: "variable.other.readwrite",
      //   settings: {
      //     foreground: colors.variables,
      //   },
      // },
      // {
      //   name: "Function parameter",
      //   scope: "variable.parameter, meta.function.arrow.js",
      //   settings: {
      //     foreground: colors.yellow,
      //   },
      // },
      // {
      //   name: "Variables being called, variables assigned to prop keys",
      //   scope: "meta.function-call, variable.other.object, meta.embedded.expression",
      //   settings: {
      //     foreground: colors.variables,
      //   },
      // },
      // {
      //   name: "Object keys",
      //   scope: "meta.object-literal, constant.other.object.key.js", //, constant.other.object.key.js",
      //   settings: {
      //     foreground: colors.red,
      //   },
      // },
      // {
      //   name: "Booleans, numbers",
      //   scope: "constant.language.boolean, constant.numeric",
      //   settings: {
      //     foreground: colors.orange,
      //   },
      // },
      // {
      //   name: "Markup Heading",
      //   scope: "markup.heading",
      //   settings: {
      //     foreground: colors.red,
      //   },
      // },
      // {
      //   name: "Markup Bold",
      //   scope: "markup.bold",
      //   settings: {
      //     foreground: colors.yellow,
      //   },
      // },
      // {
      //   name: "Markup Link Title",
      //   scope:
      //     "string.other.link.title, punctuation.definition.string.begin.markdown, punctuation.definition.string.end.markdown",
      //   settings: {
      //     foreground: colors.blue,
      //   },
      // },
      // {
      //   name: "Markup Underline Link",
      //   scope: "markup.underline.link, meta.link.inline",
      //   settings: {
      //     foreground: colors.green,
      //   },
      // },
      // {
      //   name: "Markup code fences",
      //   scope:
      //     "fenced_code.block.language.markdown, punctuation.definition.markdown",
      //   settings: {
      //     foreground: colors.purple,
      //   },
      // },
      // {
      //   name: "JSON keys, YAML keys",
      //   scope: "support.type.property-name.json",
      //   settings: {
      //     foreground: colors.red,
      //   },
      // },
      // {
      //   name: "CSS class, id, :root, presudo-classes etc.",
      //   scope: "entity.name.tag.css, entity.other.attribute-name.class.css, entity.other.attribute-name.pseudo-class.css",
      //   settings: {
      //     foreground: colors.red,
      //   },
      // },
      // {
      //   name: "CSS: selector, at-rule (font-face etc.), variables",
      //   scope: "meta.selector.css, variable.css",
      //   settings: {
      //     foreground: colors.red,
      //   },
      // },
      // {
      //   name: "CSS property key",
      //   scope:
      //     "support.type.property-name.css, support.type.vendored.property-name.css, variable.parameter.postcss",
      //   settings: {
      //     foreground: colors.purple2,
      //   },
      // },
      // {
      //   name: "CSS keywords, property values",
      //   scope:
      //     "keyword.control.at-rule, support.constant.vendored.property-value.css, support.constant.font-name.css, support.constant.property-value.css",
      //   settings: {
      //     foreground: colors.red,
      //   },
      // },
      // {
      //   name: "CSS units",
      //   scope:
      //     "keyword.other.unit.css",
      //   settings: {
      //     foreground: colors.orange,
      //   },
      // },
      // {
      //   name: "CSS support",
      //   scope: "entity.other.attribute-name.css",
      //   settings: {
      //     foreground: colors.cyan,
      //   },
      // },
      // {
      //   name: "CSS functions",
      //   scope: "support.function.misc.css",
      //   settings: {
      //     foreground: colors.blue,
      //   },
      // },
    ],
  };
};
