var test = require('tape')
var freq = require('..')

test('custom tuning', function (t) {
  t.equal(freq(444, 57), 222)
  t.equal(freq(448, 57), 224)
  t.end()
})
test('partially applied', function (t) {
  var f = freq(500)
  t.equal(f(57), 250)
  t.end()
})
test('440 is the default tuning', function (t) {
  t.equal(freq(null, 57), 220)
  t.equal(freq(0, 60), 261.6255653005986)
  t.end()
})
test('invalid midi', function (t) {
  t.equal(freq(440, null), null)
  t.equal(freq(440, 'blah'), null)
  t.end()
})
