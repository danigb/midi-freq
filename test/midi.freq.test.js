var vows = require('vows')
var assert = require('assert')
var freq = require('..')

vows.describe('midi.freq').addBatch({
  'custom tuning': function () {
    assert.equal(freq(444, 57), 222)
    assert.equal(freq(448, 57), 224)
  },
  'partially applied': function () {
    var f = freq(500)
    assert.equal(f(57), 250)
  },
  '440 is the default tuning': function () {
    assert.equal(freq(null, 57), 220)
    assert.equal(freq(null, 60), 261.6255653005986)
  },
  'invalid midi': function () {
    assert.equal(freq(440, null), null)
    assert.equal(freq(440, 'blah'), null)
  }
}).export(module)
