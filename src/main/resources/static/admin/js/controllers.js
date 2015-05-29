/**
 * InventoryCtrl
 */
function InventoryCtrl($scope, Product) {
    var products = Product.query(function() {
        $scope.products = products;
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

function ProductCtrl($scope, $location, $stateParams, Product, notify) {

    Product.get({id: $stateParams.id},
        function success(response) {
            $scope.product = response;
        },
        function error(errorResponse) {
            notify({
                message: 'Product not found!',
                classes: 'alert-danger',
                templateUrl: '/admin/common/notify.html'
            });
        }
    );

    $scope.cancel = function () {
        $scope.product.title = 'not saved'
        $location.path('/inventory/products')
    };

    $scope.save = function () {
        if ($scope.product.id) {
            Product.update($scope.product, function() {
                console.log("saved");
            });
        } else {
            Product.save($scope.product, function() {
                console.log("saved");
            });
        }
    };
}

angular
    .module('broomwagon')
    .controller('InventoryCtrl', InventoryCtrl)
    .controller('TranslateCtrl', TranslateCtrl)
    .controller('SearchCtrl', SearchCtrl)
    .controller('ProductCtrl', ProductCtrl)

