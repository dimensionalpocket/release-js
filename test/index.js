// @ts-check

const { expect } = require('@dimensionalpocket/development')

const defaults = require('../')
const defaultsFromConfig = require('../config/defaults')

describe('main require', function () {
  it('exports defaults from config', function () {
    expect(defaults).to.eq(defaultsFromConfig)
  })
})
