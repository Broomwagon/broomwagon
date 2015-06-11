/**
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/inventory/products");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        .state('inventory', {
            abstract: true,
            url: "/inventory",
            templateUrl: "/admin/common/content.html"
        })
        .state('inventory.products', {
            url: "/products",
            templateUrl: "/admin/products.html",
            data: { pageTitle: 'Products' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: [
                                '/admin/js/plugins/dataTables/jquery.dataTables.js',
                                '/admin/css/plugins/dataTables/dataTables.bootstrap.css']
                        },
                        {
                            files: ['/admin/js/plugins/dataTables/dataTables.bootstrap.js']
                        },
                        {
                            name: 'datatables',
                            files: ['/admin/js/plugins/dataTables/angular-datatables.min.js']
                        }
                    ]);
                }
            }
        })
        .state('inventory.product', {
            url: "/product/:id",
            templateUrl: "/admin/product.html",
            data: { pageTitle: 'Product' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'summernote',
                            files: [
                                '/admin/css/plugins/summernote/summernote.css',
                                '/admin/css/plugins/summernote/summernote-bs3.css',
                                '/admin/js/plugins/summernote/summernote.min.js',
                                '/admin/js/plugins/summernote/angular-summernote.min.js'
                            ]
                        }
                    ]);
                }
            }
        })
        .state('look-and-feel', {
            abstract: true,
            url: "/look-and-feel",
            templateUrl: "/admin/common/content.html"
        })
        .state('look-and-feel.pages', {
            url: "/pages",
            templateUrl: "/admin/pages.html",
            data: {pageTitle: 'Pages'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: [
                                '/admin/js/plugins/dataTables/jquery.dataTables.js',
                                '/admin/css/plugins/dataTables/dataTables.bootstrap.css'
                            ]
                        },
                        {
                            files: ['/admin/js/plugins/dataTables/dataTables.bootstrap.js']
                        },
                        {
                            name: 'datatables',
                            files: ['/admin/js/plugins/dataTables/angular-datatables.min.js']
                        }
                    ]);
                }
            }
        })
        .state('look-and-feel.page', {
            url: "/page/:id",
            templateUrl: "/admin/page.html",
            data: {pageTitle: 'Page'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.sortable',
                            files: ['/adminDemo/js/plugins/ui-sortable/sortable.js']
                        }
                    ]);
                }
            }
        })
        .state('look-and-feel.segments', {
            url: "/segments",
            templateUrl: "/admin/segments.html",
            data: {pageTitle: 'Segments'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: [
                                '/admin/js/plugins/dataTables/jquery.dataTables.js',
                                '/admin/css/plugins/dataTables/dataTables.bootstrap.css'
                            ]
                        },
                        {
                            files: ['/admin/js/plugins/dataTables/dataTables.bootstrap.js']
                        },
                        {
                            name: 'datatables',
                            files: ['/admin/js/plugins/dataTables/angular-datatables.min.js']
                        }
                    ]);
                }
            }
        })
        .state('look-and-feel.segment', {
            url: "/segment/:id",
            templateUrl: "/admin/segment.html",
            data: {pageTitle: 'Segment'}
        })
    ;
}
angular
    .module('broomwagon')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
