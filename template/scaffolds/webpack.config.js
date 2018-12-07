
export default function (webpackConfig) {
//console.log(JSON.stringify(webpackConfig.module))
  const t={
    test: /\.js$/i,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {

          plugins:[
            [
              require.resolve('babel-plugin-import'),
              {
                "libraryName":"sc-dva-antd-pro",
                "libraryDirectory":"es",
                "style": true
              }
            ]
          ],
        }}

    ],

  }

  return webpackConfig
};
