'use strict'

const mapConfig = {
  inline: false,
  annotation: true,
  sourcesContent: true
}

module.exports = context => {
  return {
    map: context.file.dirname.includes('examples') ? false : mapConfig,
    plugins: {
      'preset-env': {
        stage: 1,
        autoprefixer: {
          cascade: false
        },
        features: {
          'color-mod-function': {unresolved: 'ignore'},
          'custom-properties': false,
        },
      },
      'combine-duplicated-selectors',
      'sort-media-queries',
      rtlcss: context.env === 'RTL'
    }
  }
}
