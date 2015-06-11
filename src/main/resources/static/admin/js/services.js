function ProductFactory($resource) {
    return $resource('/api/products/:id', {
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

function PageFactory($resource) {
    return $resource('/api/pages/:id', {
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

function SegmentFactory($resource) {
    return $resource('/api/segments/:id', {
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
    .factory('Page', PageFactory)
    .factory('Segment', SegmentFactory);