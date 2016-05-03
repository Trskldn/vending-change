var COINS = [200, 100, 50, 20, 10, 5, 2, 1];

module.exports = function(price, cash){
	var rez = [],
		change = cash - price,
		coin;

	if (isNaN(change)) throw new TypeError('invalid input value'); 
	if (change < 0) throw new Error('not enough cash'); 
	if (price < 0 || cash < 0) throw new Error('expected positive number');
	while (change > 0) {
		 coin = COINS.find(item => change >= item);
		 change -= coin;
		 rez.push(coin);
	}

 	return rez;
};