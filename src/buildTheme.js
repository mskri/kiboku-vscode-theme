const { writeFile } = require('fs/promises');
const createTheme = require('./theme.js');
const colors = require('./colors.js');

const themeName = 'kiboku';

const buildTheme = async () => {
  try {
    const themeWithColors = createTheme({
      name: themeName,
      colors: Object.entries(colors).reduce(
        (colorScheme, [colorName, colorValue]) => ({
          ...colorScheme,
          [colorName]: colorValue,
        }),
        {}
      ),
    });

    await writeFile(
      `./themes/${themeName}-color-theme.json`,
      JSON.stringify(themeWithColors)
    );
    console.log('Theme built');
  } catch (error) {
    console.error('Error building theme:', error);
  }
};

buildTheme();
