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

function PageCtrl($scope, $compile, $stateParams, Page, Segment, notify) {
    var pages = Page.query(function () {
        $scope.pages = pages;
    });

    if ($stateParams.id) {

        var segments = Segment.query(function () {
            $scope.segments = segments;
        });

        Page.get({id: $stateParams.id},
            function success(response) {
                $scope.page = response;
                var firstRow = true;
                for (var i = 0; i < $scope.page.rows.length; i++) {
                    if (!firstRow) {
                        addElement('broom-divider', $scope.$new(), $compile)
                    }
                    firstRow = false;
                    for (var y = 0; y < $scope.page.rows[i].columns.length; y++) {
                        var newScope = $scope.$new();
                        newScope.column = $scope.page.rows[i].columns[y];
                        addElement('broom-segment', newScope, $compile);
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

        var rowObj = {};
        rowObj.columns = [];
        var rows = [];
        rows.push(rowObj);

        for (var i = 0; i < elements.length; i++) {
            if (elements[i].type === undefined || elements[i].type != 'divider') {
                rowObj.columns.push(elements[i]);
            } else if (elements[i].type === 'divider') {
                rowObj = {};
                rowObj.columns = [];
                rows.push(rowObj);
            }
        }

        $scope.page.rows = rows;

        if ($scope.page.id) {
            Page.update($scope.page,
                function success(response) {
                    notify({
                        message: 'Updated',
                        classes: 'alert-info',
                        templateUrl: '/admin/common/notify.html'
                    });
                },
                function error(response) {
                    notify({
                        message: 'Error',
                        classes: 'alert-danger',
                        templateUrl: '/admin/common/notify.html'
                    });
                }
            );
        } else {
            Page.save($scope.page,
                function success(response) {
                    $scope.page = response;
                    notify({
                        message: 'Saved',
                        classes: 'alert-info',
                        templateUrl: '/admin/common/notify.html'
                    });
                },
                function error(response) {
                    notify({
                        message: 'Error',
                        classes: 'alert-danger',
                        templateUrl: '/admin/common/notify.html'
                    });
                }
            );
        }
    }
}

function addElement(elementName, scope, $compile) {
    appendElementToBody($compile(createElement(elementName))(scope));
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

function ColumnCtrl($scope, Segment) {

}

function SegmentCtrl($scope, $stateParams, Segment, notify, $location) {
    var segments = Segment.query(function () {
        $scope.segments = segments;
    });

    if ($stateParams.id) {
        Segment.get({id: $stateParams.id},
            function success(response) {
                $scope.segment = response;
            },
            function error(errorResponse) {
                notify({
                    message: 'Segment not found!',
                    classes: 'alert-danger',
                    templateUrl: '/admin/common/notify.html'
                });
            }
        );
    }

    $scope.save = function () {
        if ($scope.segment.id) {
            Segment.update($scope.segment,
                function success(response) {
                    notify({
                        message: 'Saved',
                        classes: 'alert-info',
                        templateUrl: '/admin/common/notify.html'
                    });
                },
                function error(response) {
                    notify({
                        message: 'Error',
                        classes: 'alert-danger',
                        templateUrl: '/admin/common/notify.html'
                    });
                }
            );
        } else {
            Segment.save($scope.segment,
                function success(response) {
                    $scope.segment = response;
                    notify({
                        message: 'Saved',
                        classes: 'alert-info',
                        templateUrl: '/admin/common/notify.html'
                    });
                },
                function error(response) {
                    notify({
                        message: 'Error',
                        classes: 'alert-danger',
                        templateUrl: '/admin/common/notify.html'
                    });
                }
            );
        }
    };

    $scope.cancel = function () {
        $location.path('/look-and-feel/segments')
    };

    $scope.addParameter = function () {
        if ($scope.segment.parameters === undefined) {
            $scope.segment.parameters = {};
        }

        $scope.segment.parameters[''] = "";
    };

    $scope.removeParameter = function (key) {
        delete $scope.segment.parameters[key];
    }
}

angular
    .module('broomwagon')
    .controller('InventoryCtrl', InventoryCtrl)
    .controller('TranslateCtrl', TranslateCtrl)
    .controller('SearchCtrl', SearchCtrl)
    .controller('ProductCtrl', ProductCtrl)
    .controller('PageCtrl', PageCtrl)
    .controller('ColumnCtrl', ColumnCtrl)
    .controller('DraggablePanelsCtrl', DraggablePanelsCtrl)
    .controller('SegmentCtrl', SegmentCtrl);


