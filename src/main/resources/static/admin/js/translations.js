
function config($translateProvider) {

    $translateProvider
        .translations('en', {
            INVENTORY: 'Invetory',
            PRODUCTS: 'Products',
            SEARCH: 'Search...'
        });

    $translateProvider.preferredLanguage('en');
}

angular
    .module('broomwagon')
    .config(config)
