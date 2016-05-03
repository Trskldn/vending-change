var COINS = [200, 100, 50, 20, 10, 5, 2, 1];

module.exports = function(price, cash){
	var rez = [],
		change = cash - price,
		coin;

	if (isNaN(change)) throw new TypeError('price and cash should be a number'); 
	if (change < 0) throw new Error('cash should be greater than price'); 
	if (price < 0) throw new Error('price should be positive number');
	if (cash < 0) throw new Error('cash should be positive number');
  
	while (change > 0) {
		 coin = COINS.find(item => change >= item);
		 change -= coin;
		 rez.push(coin);
	}

 	return rez;
};