// @ts-check

import { expect } from '@dimensionalpocket/development'

import defaults from '../index.js'
import defaultsFromConfig from '../config/default.js'

describe('main require', function () {
  it('exports defaults from config', function () {
    expect(defaults).to.eq(defaultsFromConfig)
  })
})
