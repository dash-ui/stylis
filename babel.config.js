module.exports = (api) => {
  if (api.env('test')) {
    return [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ]
  }

  const module = api.env('module')
  const esm = api.env('esm')

  return {
    presets: [
      [
        '@babel/env',
        {
          modules: esm || module ? false : 'commonjs',
          targets: module
            ? {
                browsers: '> 2%',
              }
            : {
                node: '12',
              },
        },
      ],
    ],
  }
}
