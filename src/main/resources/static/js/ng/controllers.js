/**
 * InventoryCtrl
 */
function TestCtrl($scope) {
    $scope.message = 'Yo!';
}

angular
    .module('broomwagon')
    .controller('TestCtrl', TestCtrl)

