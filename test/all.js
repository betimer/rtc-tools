var test = require('tape');

test('can import rtc module', function(t) {
  t.plan(1);
  t.ok(require('../'), 'imported successfully');
});