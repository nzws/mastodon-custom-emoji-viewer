const presets = [
  [
    '@babel/preset-env',
    { useBuiltIns: 'usage', corejs: 3, targets: { esmodules: true } }
  ],
  'linaria/babel'
];

const plugins = [['@babel/plugin-transform-react-jsx', { pragma: 'h' }]];

module.exports = { presets, plugins };
