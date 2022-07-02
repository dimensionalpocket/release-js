// This spec fails on GitHub Actions when running on tags.

import { expect } from '@dimensionalpocket/development'
import release from 'release-it'
import defaults from '../index.js'

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
