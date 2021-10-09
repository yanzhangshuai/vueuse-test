module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        loose: true,
        corejs: {
          version: '3.15.2',
          proposals: true
        }
      }
    ],
    ['@babel/preset-typescript', { allExtensions: true }]
  ],
  plugins: [
  ]
};
