var expect = require('chai').expect
  , client = require('utilise.client')
  , owner  = require('./')

describe('owner', function() {

  !client && it('should default to global for node', function(){
    expect(owner).to.be.equal(global)
  })

  /* istanbul ignore next */
  client && it('should default to window for client', function(){
    expect(owner).to.be.equal(window)
  })

})