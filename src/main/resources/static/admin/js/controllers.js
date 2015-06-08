function InventoryCtrl($scope, Product) {
    var products = Product.query(function() {
        $scope.products = products;
    });
}

function TranslateCtrl($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}

function SearchCtrl($scope, $location) {
    $scope.submit = function () {
        $scope.query = 'search is not implemented yet :)'
    };
}

function ProductCtrl($scope, $location, $stateParams, Product, notify) {

    if ($stateParams.id) {
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
    }

    $scope.cancel = function () {
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

function LookAndFeelCtrl($scope, Page) {
    var pages = Page.query(function () {
        $scope.pages = pages;
    });
}

function PageCtrl($scope, $compile) {
    $scope.elementIndex = 0;

    $scope.addElement = function () {
        $scope.elementIndex++;
        var newScope = $scope.$new();
        newScope.elementIndex = $scope.elementIndex;

        appendElementToBody($compile(createElement('broom-element'))(newScope));
    };

    $scope.addDivider = function () {
        appendElementToBody($compile(createElement('broom-divider'))($scope.$new()));
    }
}

function appendElementToBody(elementObject) {
    angular.element(document.querySelector('#sortable-view')).append(elementObject);
}

function createElement(elementName) {
    return angular.element(document.createElement(elementName));
}

function DraggablePanelsCtrl($scope) {
    $scope.sortableOptions = {
        connectWith: ".connectPanels",
        handler: ".ibox-title"
    };
}

function RowCtrl($scope) {
    $scope.testIndex = 0;
    $scope.activities =
        [
            "Slider",
            "Product",
            "Promo"
        ];
}

angular
    .module('broomwagon')
    .controller('InventoryCtrl', InventoryCtrl)
    .controller('TranslateCtrl', TranslateCtrl)
    .controller('SearchCtrl', SearchCtrl)
    .controller('ProductCtrl', ProductCtrl)
    .controller('LookAndFeelCtrl', LookAndFeelCtrl)
    .controller('PageCtrl', PageCtrl)
    .controller('DraggablePanelsCtrl', DraggablePanelsCtrl)
    .controller('RowCtrl', RowCtrl);


