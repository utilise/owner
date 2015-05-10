var expect = require('chai').expect
  , mock = require('mockery')

describe('owner', function() {

  it('should default to global for node', function(){
    expect(require('./')).to.be.equal(global)
  })

  it('should default to window for client', function(){
    global.window = {}
    mock.enable()
    mock.registerMock('client', true)
    delete require.cache[require.resolve('client')]
    delete require.cache[require.resolve('./')]
    expect(require('./')).to.be.equal(window)
  })

})