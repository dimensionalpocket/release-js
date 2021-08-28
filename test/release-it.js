const { expect } = require('@dimensionalpocket/development')
const release = require('release-it')
const defaults = require('../')

describe('release-it', function () {
  it('works with default options (except only-version)', async function () {
    var testOptions = {
      'only-version': false,
      'dry-run': true,
      ci: true // skip all prompts
    }

    var options = Object.assign(testOptions, defaults)
    options.git.requireCleanWorkingDir = false // will be dirty during tests

    var output = await release(options)
    expect(output.version).to.exist
  })
})
