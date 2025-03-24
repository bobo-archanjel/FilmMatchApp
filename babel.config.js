module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',    // important!
        path: '.env',          // your .env file location
      }],
    ],
  };
};
