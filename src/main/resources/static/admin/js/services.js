function ProductFactory($resource) {
    return $resource('/api/products/:id', {
        id: '@id'
    });
}

function PageFactory($resource) {
    return $resource('/api/pages/:id', {
        id: '@id'
    });
}

angular
    .module('broomwagon')
    .factory('Product', ProductFactory)
    .factory('Page', PageFactory);