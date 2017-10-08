// const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default

// const styledComponentsTransformer = createStyledComponentsTransformer()

const tsOptions = env => env === 'dev' ? {
  // getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
} : {
  ignoreDiagnostics: [2307, 2322, 2339, 2345, 2459],
}

module.exports = env => [
  {
    test: /worker\.[jt]s/,
    loader: 'worker-loader',
  },
  {
    test: /\.tsx?$/,
    use: {
      loader: 'awesome-typescript-loader',
      options: tsOptions(env),
    },
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
    ],
    include: [
      /node_modules/,
    ],
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 1,
      },
    },
  },
].filter(item => item)
