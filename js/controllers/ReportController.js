app.controller('ReportController', ['$scope', function ($scope, productService) {
    $scope.products = productService.getProducts();
    console.log($scope.products);
}]);
                                    
    
    
    