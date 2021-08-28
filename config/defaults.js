/* eslint-disable no-template-curly-in-string */

module.exports = {
  'only-version': true,
  'disable-metrics': true,
  git: {
    commitMessage: 'chore: release v${version}',
    tagAnnotation: 'v${version}'
  },
  github: {
    release: true,
    releaseName: 'v${version}'
  },
  npm: {
    publish: false
  },
  plugins: {
    '@release-it/bumper': {
      out: 'version.json'
    }
  }
}
