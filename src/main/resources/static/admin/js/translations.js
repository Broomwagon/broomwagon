
function config($translateProvider) {

    $translateProvider
        .translations('en', {
            INVENTORY: 'Inventory',
            PRODUCTS: 'Products',
            SEARCH: 'Search...',
            LOOK_AND_FEEL: 'Look and feel',
            PAGES: 'Pages'
        });

    $translateProvider.preferredLanguage('en');
}

angular
    .module('broomwagon')
    .config(config);
