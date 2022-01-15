'use strict'

const mapConfig = {
  inline: false,
  annotation: true,
  sourcesContent: true
}

module.exports = (context) => {
  return {
    map: context.file.dirname.includes('examples') ? false : mapConfig,
    plugins: {
      'postcss-preset-env': {
        stage: 1,
        autoprefixer: {
          cascade: false
        },
        features: {
          'color-mod-function': { unresolved: 'ignore' },
          'custom-properties': false
        }
      },
      'postcss-combine-duplicated-selectors': true,
      'postcss-sort-media-queries': true,
      rtlcss: context.env === 'RTL'
    }
  }
}
