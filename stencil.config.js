exports.config = {
  bundles: [
    { components: ['my-name', 'solar-planet'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
