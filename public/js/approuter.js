// AppRouter
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

    return Backbone.Router.extend({

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

        setContent: function(htmlContent){
            $('#content').html(htmlContent);
        },

        selectMenuItem: function(menuItem){
            this.$navItems.removeClass('active');
            if (menuItem) {
                this.$navItems.filter('.' + menuItem).addClass('active');
            }    
        },
        home: function (id) {
            var self = this;
            require(['routes/home'], function(htmlContent){
                self.setContent(htmlContent);
            });
        },

        list: function(page) {
            var self = this;
            this.selectMenuItem('home-menu');
            require(['routes/list'], function(callback){
                callback(page).done(function(htmlContent){
                    self.setContent(htmlContent);
                });
            });
        },

        wineDetails: function (id) {
            var self = this;
            this.selectMenuItem();
            require(['routes/addview'], function(av){
                av.initView(id).done(function(htmlContent){
                    self.setContent(htmlContent);
                });
            });
        },

        addWine: function() {
            var self = this;
            this.selectMenuItem('add-menu');
            require(['routes/addview'], function(av){
                var htmlContent = av.initAdd();
                self.setContent(htmlContent);
            });
        },

        about: function () {
            var self = this;
            this.selectMenuItem('about-menu');
            require(['routes/about'], function(htmlContent){
                self.setContent(htmlContent);
            });
        }

    });

});
