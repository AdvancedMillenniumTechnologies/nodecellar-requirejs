require.config({
    paths: {
        'jquery': 'lib/jquery-1.8.2.min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'bootstrap': 'lib/bootstrap.min',
        'text': 'lib/text',
        'utils': 'utils',
        'models': 'models/models',
        'paginator': 'views/paginator',
        'home': 'views/home',
        'winelist': 'views/winelist',
        'winedetails': 'views/winedetails',
        'about': 'views/about',
        'homeview': '../tpl/HomeView.html',
        'wineview': '../tpl/WineView.html',
        'winelistitemview': '../tpl/WineListItemView.html',
        'aboutview': '../tpl/AboutView.html'
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

require(['jquery', 'underscore', 'backbone', 'bootstrap', 'utils', 'paginator', 'main'], function($, _, Backbone ){
    $(function(){
        window.app = new AppRouter();
        Backbone.history.start();
    });
});
