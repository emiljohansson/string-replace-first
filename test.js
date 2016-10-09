import test from 'ava'
import replaceFirst from './'

test(t => {
  const expected = 'path-to/file'
  const actual = replaceFirst('path/to/file', '/', '-')
  t.is(actual, expected)
})
