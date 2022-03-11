// eslint-disable-next-line import/no-extraneous-dependencies
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#004aad',
        '@font-family': 'Titillium Web',
        '@text-color': '#000',
      },
    },
  }),
);
