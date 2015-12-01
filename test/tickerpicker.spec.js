var chai = require('chai');
var ticker = require('../dist/tickerpicker');
var _ = require('lodash');

var should = chai.should();

describe('tickerpicker', function() {
  
  ticker.setStockData([
    {"name":"ABC Products Company","symbol":"ABC"},
    {"name":"BCD Inc","symbol":"BCD"},
    {"name":"XYZ Products LLC","symbol":"XYZ"}
  ]);
      
  it('should suggest symbols based on partial company names', function() {
    _.map(ticker.symbol("prod"), 'symbol').should.eql([ "ABC", "XYZ" ]);
  });
  
  it('should suggest company names based on partial stock symbols', function() {
    _.map(ticker.suggest("Bc"), 'name').should.eql([ "ABC Products Company", "BCD Inc" ]);
  });
});


