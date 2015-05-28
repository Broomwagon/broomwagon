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

angular
    .module('broomwagon')
    .controller('InventoryCtrl', InventoryCtrl)
    .controller('TranslateCtrl', TranslateCtrl)
    .controller('SearchCtrl', SearchCtrl)

