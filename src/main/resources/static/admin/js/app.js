(function () {
    angular.module('broomwagon', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngResource',                   // resource for rest services
        'cgNotify'                      // Notifications
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad