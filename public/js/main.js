var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "wines"	: "list",
        "wines/page/:page"	: "list",
        "wines/add"         : "addWine",
        "wines/:id"         : "wineDetails",
        "about"             : "about"
    },

    initialize: function () {
        this.$navItems = $('.nav').find('li');
    },
    selectMenuItem: function(menuItem){
        this.$navItems.removeClass('active');
        if (menuItem) {
            this.$navItems.filter('.' + menuItem).addClass('active');
        }    
    },
    home: function (id) {
        require(['routes/home'], function(callback){
            callback();
        });
    },

	list: function(page) {
        this.selectMenuItem('home-menu');
        require(['routes/list'], function(callback){
            callback(page);
        });
    },

    wineDetails: function (id) {
        this.selectMenuItem();
        require(['routes/view'], function(callback){
            callback(id);
        });
    },

	addWine: function() {
        this.selectMenuItem('add-menu');
        require(['routes/add'], function(callback){
            callback();
        });
	},

    about: function () {
        this.selectMenuItem('about-menu');
        require(['routes/about'], function(callback){
            callback();
        });
    }

});

