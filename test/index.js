// @ts-check

const { expect } = require('@dimensionalpocket/development')

const defaults = require('../')
const defaultsFromConfig = require('../config/default')

describe('main require', function () {
  it('exports defaults from config', function () {
    expect(defaults).to.eq(defaultsFromConfig)
  })
})
