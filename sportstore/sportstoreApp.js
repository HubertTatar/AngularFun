var app = angular.module("sportsStore", ["customFilters", "cart", "ngRoute"])
	.config(function($routeProvider){
		
		$routeProvider.when("/complete", {
			templateUrl: "views/thankYou.html"
		});
		
		$routeProvider.when("/placeorder",{
			templateUrl: "views/placeOrder.html"
		});
		
		$routeProvider.when("/checkout", {
			templateUrl: "views/checkoutSummary.html"
		});
		
		$routeProvider.when("/products", {
			templateUrl: "views/productList.html"
		});
		
		$routeProvider.otherwise({
			templateUrl: "views/productList.html"
		});
		//zapamietać: 
		// '/' na poczatku powoduje to że serwer podaje z roota - http://localhost:5000/views/productList.html
		// rozpoczecie od nazwy katalogu sprawia że dodaje katalog sportstore - http://localhost:5000/sportstore/views/productList.html
	});

