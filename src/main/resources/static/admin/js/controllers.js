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

function PageCtrl($scope, $compile, $stateParams, Page, notify) {
    if ($stateParams.id) {
        Page.get({id: $stateParams.id},
            function success(response) {
                $scope.page = response;
                var firstRow = true;
                for (var i = 0; i < $scope.page.rows.length; i++) {
                    if (!firstRow) {
                        addElement('broom-divider', $scope.$new(), $compile)
                    }
                    firstRow = false;
                    for (var y = 0; y < $scope.page.rows[i].segments.length; y++) {
                        var newScope = $scope.$new();
                        newScope.segment = $scope.page.rows[i].segments[y];
                        addElement('broom-segment', newScope, $compile)
                    }
                }
            },
            function error(errorResponse) {
                notify({
                    message: 'Page not found!',
                    classes: 'alert-danger',
                    templateUrl: '/admin/common/notify.html'
                });
            }
        );
    }

    $scope.elementIndex = 0;

    $scope.addElement = function () {
        addElement('broom-segment', $scope.$new(), $compile)
    };

    $scope.addDivider = function () {
        addElement('broom-divider', $scope.$new(), $compile)
    };

    $scope.save = function () {
        var elements = [];

        $('.elementJson').each(function (index) {
            elements.push(JSON.parse($(this).html()));
        });

        if ($scope.page === undefined) {
            $scope.page = {};
        }

        $scope.page.rows = [];
        var currentRow = 0;
        $scope.page.rows[currentRow] = [];
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].type === undefined) {
                $scope.page.rows[currentRow].push(elements[i]);
            } else if (elements[i].type === 'divider' && currentRow > 0) {
                currentRow++;
                $scope.page.rows[currentRow] = [];
            }
        }

        if ($scope.page.id) {
            Page.update($scope.page, function () {
                console.log("saved");
            });
        } else {
            Page.save($scope.page, function () {
                console.log("saved");
            });
        }
    }
}

function addElement(elementName, $scope, $compile) {
    appendElementToBody($compile(createElement(elementName))($scope));
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

function SegmentCtrl($scope) {
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
    .controller('SegmentCtrl', SegmentCtrl);


