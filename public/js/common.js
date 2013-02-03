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
        'header': 'views/header',
        'home': 'views/home',
        'winelist': 'views/winelist',
        'winedetails': 'views/winedetails',
        'about': 'views/about',
        'homeview': '../tpl/HomeView.html',
        'headerview': '../tpl/HeaderView.html',
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

require(['jquery', 'underscore', 'backbone', 'text!homeview', 'text!headerview', 'text!wineview', 'text!winelistitemview', 'text!aboutview', 'bootstrap', 'utils', 'models', 'paginator', 'header', 'home', 'winelist', 'winedetails', 'about', 'main'], function($, _, Backbone, HomeViewTpl, HeaderViewTpl, WineViewTpl, WineListItemViewTpl, AboutViewTpl){
    HomeView.prototype.template = _.template(HomeViewTpl);
    HeaderView.prototype.template = _.template(HeaderViewTpl);
    WineView.prototype.template = _.template(WineViewTpl);
    WineView.prototype.template = _.template(WineViewTpl);
    WineListItemView.prototype.template = _.template(WineListItemViewTpl);
    AboutView.prototype.template = _.template(AboutViewTpl);

    new AppRouter();
    Backbone.history.start();
});
