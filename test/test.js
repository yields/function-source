
describe('function-source', function(){

  var source = require('function-source')
    , assert = require('assert');

  it('(function(){})', function(){
    assert('' == source(function(){}));
  })

  it('(console.log)', function(){
    assert('[native code]' == source(console.log).trim());
  })

  it('(dummy)', function(){
    assert(dummy.src == source(dummy).trim());
  })

  it('(str)', function(){
    assert(dummy.src == source(dummy.toString()).trim())
  })

  it('(function(\n){ "baz"; })', function(){
    assert('"baz";' == source('function(\n){ "baz"; }').trim());
  })

  // src
  dummy.src = [
    'for (var k in arguments) {',
    '  assert;',
    '}',
    '',
    'assert;',
  ].join('\n');

  // dummy
  function dummy(){

    for (var k in arguments) {
      assert;
    }

    assert;

  }

})
