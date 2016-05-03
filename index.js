var COINS = [200, 100, 50, 20, 10, 5, 2, 1];

module.exports = function(price, cash){
	var rez = [],
		change = cash - price;

	if (isNaN(change)) throw new TypeError('invalid input value'); 
	if (change < 0) throw new Error('not enough cash'); 
	if(change === 0) return [];


 	return [];
};