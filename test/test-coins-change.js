var getChange = require('../index');
var expect = require('chai').expect;

process.env.NODE_ENV = 'test';

 describe('getChange', function() {
 	it('should throw TypeError,  when input value not present', function() {
 		expect(getChange).to.throw(TypeError);
 	});

 	it('getChange(13, 50) should return  [20, 10, 5, 2]', function() {
		var result = getChange(13, 50);
 		expect(result).to.be.deep.equal([20, 10, 5, 2]);   
 	});
 
 	it('should throw error,when price bigger then cache', function() {
 		expect(getChange.bind(null, 50, 13)).to.throw(Error);   
 	});
 	
 	it('when price equal to paid cash ,should return empty array', function() {
 		var result = getChange(100,100);
 		expect(result).to.be.deep.equal([]);
 	});

 });


