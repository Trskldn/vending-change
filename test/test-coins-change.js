var getChange = require('../index');
var expect = require('chai').expect;

process.env.NODE_ENV = 'test';

 describe('getChange', function() {

 	describe('result', function() {
	 	it('getChange(13, 50) should return  [20, 10, 5, 2]', function() {
			var result = getChange(13, 50);
	 		expect(result).to.be.deep.equal([20, 10, 5, 2]);   
	 	});

	 	it('when price equal to paid cash ,should return empty array', function() {
	 		var result = getChange(100,100);
	 		expect(result).to.be.deep.equal([]);
	 	});

	 	it('should throw error,when price bigger then paid cash', function() {
	 		expect(getChange.bind(null, 50, 13)).to.throw(Error);   
	 	});

 	});

 	describe('arguments', function() {
	 	it('getChange() should throw TypeError,  when input value not present', function() {
	 		expect(getChange).to.throw(TypeError);
	 	});

	 	it('getChange(-1, -1) should throw Error', function() {
			expect(() => getChange(-1, -1) ).to.throw(Error);
	 	});

	 	it('getChange(-1, 10) should throw Error', function() {
			expect(() => getChange(-1, 10) ).to.throw(Error);
	 	});

	 	it('getChange(10, -200) should throw Error', function() {
			expect(() => getChange(10, -200) ).to.throw(Error);
	 	});

	 	it('getChange("foo", [234]) should throw TypeError', function() {
			expect(() => getChange("foo", [234]) ).to.throw(TypeError);
	 	});
 	});
 });


