function ProductFactory($resource) {
    return $resource('/json/products/:id', {
        id: '@id'
    }, {
        update: {
            method: "PUT"
        },
        remove: {
            method: "DELETE"
        }
    });
}

angular
    .module('broomwagon')
    .factory('Product', ProductFactory)