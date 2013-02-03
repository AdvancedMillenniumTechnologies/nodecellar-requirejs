require.config({
    paths: {
        'jquery': 'lib/jquery-1.8.2.min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'bootstrap': 'lib/bootstrap.min',
        'text': 'lib/text',
        'utils': 'utils',
        'paginator': 'views/paginator',
        'WineModel': 'models/wine',
        'WinesCollection': 'collections/wines',
        'WineView': 'views/winedetails',
        'WineViewTpl': '../tpl/WineView.html',
        'WineListView': 'views/winelist',
        'WineListItemView': 'views/winelistitem',
        'WineListItemViewTpl': '../tpl/WineListItemView.html',
        'HomeView': 'views/home',
        'HomeViewTpl': '../tpl/HomeView.html',
        'AboutView': 'views/about',
        'AboutViewTpl': '../tpl/AboutView.html'
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
        'paginator': {
            deps: ['backbone'],
            exports: 'Paginator'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'main', 'bootstrap', 'utils', 'paginator'], function($, _, Backbone, AppRouter ){
    $(function(){
        window.app = new AppRouter();
        Backbone.history.start();
    });
});
