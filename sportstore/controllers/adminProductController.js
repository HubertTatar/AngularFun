angular.module("sportsStoreAdmin")
	.constant("productUrl", "http://localhost:5000/products/")
	.config(function ($httpProvider){
		$httpProvider.defaults.withCredentials = true;
	})
	.controller("productCtrl", function($scope, $resource, productUrl){
		
		$scope.productResource = $resource(productUrl + ":id", {id: "@id"});
		
		$scope.listProducts = function() {
			$scope.products = [];
			
			$scope.productResource.query(function(data) {
					$scope.products = data;
				}, function(error) {
					$scope.products = [];
					$scope.error = error;
				});
		}
		
		$scope.deleteProduct = function(product) {
			product.$delete().then(function(){
				$scope.products.splice($scope.products.indexOf(product), 1);
			});
		}
		
		$scope.createProduct = function(product){
			new $scope.productResource(product).$save().then(function(newProduct){
				$scope.products.push(newProduct);
				$scope.editedProduct = null;
			});
		}
		
		$scope.updateProduct = function(product){
			product.$save();
			$scope.editedProduct = null;
		}
		
		$scope.startEdit = function (product) {
			$scope.editedProduct = product;
		}
		
		$scope.cancelEdit = function() {
			$scope.editedProduct = null;
		}
		
		$scope.listProducts();
	});
	
/*	
var Resource = $resource('/restapi/resource');

Resource.query(function(data) {
    // success handler
}, function(error) {
    // error handler
});

Resource.query({
    'query': 'thequery'
},function(data) {
    // success handler
}, function(error) {
    // error handler
});

Resource.query().$promise.then(function(data) {
    // success handler
}, function(error) {
    // error handler
});

Resource.query({
    'query': 'thequery'
}).$promise.then(function(data) {
    // success handler
}, function(error) {
    // error handler
});
*/