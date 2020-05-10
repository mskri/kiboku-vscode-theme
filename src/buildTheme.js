const { writeFile } = require('fs');
const { promisify } = require('util');
const getTheme = require('./theme.js');
const colors = require('./colors.js');

const themeName = 'kiboku';
const promisifiedWriteFile = promisify(writeFile);

const buildTheme = async () => {
  try {
    const themeWithColors = getTheme({
      name: themeName,
      colors: Object.entries(colors).reduce(
        (colorScheme, [colorName, colorValue]) => ({
          ...colorScheme,
          [colorName]: colorValue,
        }),
        {}
      ),
    });

    await promisifiedWriteFile(
      `./themes/${themeName}-color-theme.json`,
      JSON.stringify(themeWithColors)
    );
    console.log('Theme built');
  } catch (error) {
    console.error('Error building theme:', error);
  }
};

buildTheme();
