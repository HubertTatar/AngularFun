angular.module("cart", [])
	.factory("cart", function(){
		var cartData = [];
		//tutaj jest jakis babol
		return {
			addProduct: function(id, name, price) {
				var addedToExistingItem = false;
				for (var i = 0; cartData.length; i++) {
					console.log(cartData.length);
					console.log(cartData[i]);						
					console.log("checking existing " + id +" "+ name +" "+ price);					
					console.log("existing " + cartData[i].id  +" "+ cartData[i].name);					
			
					if (cartData[i].id == id) {
						cartData[i].count++;
						addedToExistingItem = true;
						break;
					}
				}
				if (!addedToExistingItem) {
					console.log("adding new " + id +" "+ name +" "+ price);
					cartData.push({
						count: 1, id: id, price: price, name: name
					});
				}
			},
			removeProduct: function(id) {
				for (var i = 0; i < cartData.length; i++) {
					if (cartData[i].id == id) {
						cartData.splice(i ,1);
						break;
					}
				}
			},
			getProducts: function(){
				return cartData;
			}
		}
	})
	.directive("cartSummary", function(cart){
		return {
			restrict: "E",
			templateUrl: "components/cart/cartSummary.html",
			controller: function ($scope) {
				var cartData = cart.getProducts();
				
				$scope.total = function() {
					var total = 0;
					for (var i = 0; i < cartData.length; i++) {
						total += (cartData[i].price * cartData[i].count);
					}
					return total;
				}
				
				$scope.itemCount = function() {
					var total = 0;
					for (var i = 0; i < cartData.length; i++) {
						total += cartData[i].count;
					}
					return total;
				}
			}
		};
	});