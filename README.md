# Kiboku color theme for Visual Studio Code

> :warning: This theme is still being worked. Expect changes before 1.0.0

Works best with semantic token colors enabled!

## Install

1. Go to [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=mskri.kiboku-vscode-theme)
2. Click on the "Install" button

Enable semantic token colors by adding following to your `settings.json`

```json
"editor.semanticTokenColorCustomizations": {
  "enabled": true
},
```

### Syntax colors

|                                Hex                                 | HSL                   | Name   |
| :----------------------------------------------------------------: | :-------------------- | ------ |
| ![#69A4FC](https://via.placeholder.com/10/69A4FC?text=+) `#69A4FC` | `hsl(216, 96%, 70%)`  | Blue   |
| ![#BEA1F7](https://via.placeholder.com/10/BEA1F7?text=+) `#BEA1F7` | `hsl(260, 84%, 80%)`  | Purple |
| ![#9CB5FF](https://via.placeholder.com/10/9CB5FF?text=+) `#9CB5FF` | `hsl(225, 100%, 81%)` | Violet |
| ![#ff9ce6](https://via.placeholder.com/10/FF9CE6?text=+) `#FF9CE6` | `hsl(315, 100%, 81%)` | Pink   |
| ![#AEE8A3](https://via.placeholder.com/10/AEE8A3?text=+) `#AEE8A3` | `hsl(110, 60%, 77%)`  | Green  |
| ![#FF8E9A](https://via.placeholder.com/10/FF8E9A?text=+) `#FF8E9A` | `hsl(354, 100%, 78%)` | Red    |
| ![#FF9A7B](https://via.placeholder.com/10/FF9A7B?text=+) `#FF9A7B` | `hsl(14, 100%, 74%)`  | Orange |
| ![#FFE69C](https://via.placeholder.com/10/FFE69C?text=+) `#FFE69C` | `hsl(45, 100%, 81%)`  | Yellow |
| ![#8CF6FF](https://via.placeholder.com/10/8CF6FF?text=+) `#8CF6FF` | `hsl(185, 100%, 78%)` | Cyan   |
| ![#D8DEE9](https://via.placeholder.com/10/D8DEE9?text=+) `#D8DEE9` | `hsl(218, 28%, 88%)`  | White  |
| ![#959BA5](https://via.placeholder.com/10/959BA5?text=+) `#959BA5` | `hsl(218, 8%, 62%)`   | Gray   |
| ![#8193B1](https://via.placeholder.com/10/8193B1?text=+) `#8193B1` | `hsl(218, 24%, 60%)`  | Gray2  |

## Contribute

1. Clone repository
2. Open the repository in Visual Studio Code
3. Start Extension Development Host window by pressing `F5`.
4. Open `Code > Preferences > Color Theme` and pick "Kiboku"
5. Run `npm install` to install development depedencies
6. Run `npm start` to automatically run the theme builder when files in `src/` change
7. Make changes to the theme
8. Commit your changes and open a PR.

### Help for working with theming

- [VS Code theme color API reference](https://code.visualstudio.com/api/references/theme-color)
- Examine syntax scopes by invoking the [`Developer: Inspect Editor Tokens and Scopes`](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector) command from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) in the Extension Development Host window.
