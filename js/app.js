angular.module("calcApp", []).
controller("calcController", function($scope){
	$scope.title = "Waitstaff Calculator";

	$scope.calculate = function(){
		var taxValue = ($scope.taxRate / 100) * $scope.baseMealPrice;
		$scope.subtotal = taxValue + $scope.baseMealPrice;
		$scope.tip = ($scope.tipPercentage / 100) * $scope.subtotal;
		$scope.customerTotal = $scope.tip + $scope.subtotal;

		$scope.tipTotal = $scope.tipTotal + $scope.tip;
		$scope.mealCount++;
		$scope.averageTip = $scope.tipTotal / $scope.mealCount;

	};

	$scope.reset = function(){
		$scope.baseMealPrice = 0;
		$scope.taxRate = 0;
		$scope.tipPercentage = 0;

		$scope.subtotal= 0.0;
		$scope.tip = 0.0;
		$scope.customerTotal = 0.0;

		$scope.tipTotal = 0.0;
		$scope.mealCount = 0;
		$scope.averageTip = 0.0;
	};

	$scope.reset();
});
