/**
 * InventoryCtrl
 */
function InventoryCtrl($scope, $http) {
    $http.get('/json/products/')
        .success(function(data, status) {
            $scope.products = data;
        }).error(function(data, status) {
            // error
        });
}

/**
 * TranslateCtrl
 */
function TranslateCtrl($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}

/**
 * SearchCtrl
 */
function SearchCtrl($scope, $location) {
    $scope.submit = function () {
        $scope.query = 'search is not implemented yet :)'
    };
}

function ProductCtrl($scope, $http, $location) {
    $http.get('/json/products/url0')
        .success(function(data, status) {
            $scope.product = data;
        }).error(function(data, status) {
            // error
        });

    $scope.cancel = function () {
        $location.path('/inventory/products')
    };

    $scope.save = function () {
        $scope.product.title = 'saved'
    };
}

angular
    .module('broomwagon')
    .controller('InventoryCtrl', InventoryCtrl)
    .controller('TranslateCtrl', TranslateCtrl)
    .controller('SearchCtrl', SearchCtrl)
    .controller('ProductCtrl', ProductCtrl)

