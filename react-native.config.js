/** @type {import('@react-native-community/cli-types').UserDependencyConfig} */
module.exports = {
  dependency: {
    platforms: {
      android: {
        sourceDir: './android',
        packageImportPath:
          'import site.platech.reactn.taptopay.PlatechTapToPayPackage;',
        packageInstance: 'new PlatechTapToPayPackage()',
      },
      ios: null,
    },
  },
};
