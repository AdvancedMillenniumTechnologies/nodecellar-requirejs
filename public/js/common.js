require.config({
    paths: {
        'jquery': 'lib/jquery-1.8.2.min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'bootstrap': 'lib/bootstrap.min',
        'utils': 'utils',
        'models': 'models/models',
        'paginator': 'views/paginator',
        'header': 'views/header',
        'home': 'views/home',
        'winelist': 'views/winelist',
        'winedetails': 'views/winedetails',
        'about': 'views/about'
    },
    shim: {
        'jquery': {
            exports: "$"
        },
        'underscore': {
            exports: "_"
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'utils': {
            exports: 'utils'
        },
        'models': {
            deps: ['backbone']
        },
        'paginator': {
            deps: ['backbone'],
            exports: 'Paginator'
        },
        'header': {
            deps: ['backbone'],
            exports: 'HeaderView'
        },
        'home': {
            deps: ['backbone'],
            exports: 'HomeView'
        },
        'winelist': {
            deps: ['backbone']
        },
        'winedetails': {
            deps: ['backbone', 'utils'],
            exports: 'WineView'
        },
        'about': {
            deps: ['backbone'],
            exports: 'AboutView'
        },
        'main': {
            deps: ['backbone'],
            exports: 'AppRouter'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'bootstrap', 'utils', 'models', 'paginator', 'header', 'home', 'winelist', 'winedetails', 'about', 'main'], function($, _, Backbone){
    utils.loadTemplate(['HomeView', 'HeaderView', 'WineView', 'WineListItemView', 'AboutView'], function() {
        new AppRouter();
        Backbone.history.start();
    });
});
