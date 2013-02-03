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
        var _this = this;
        require(['routes/home'], function(){
            if (!_this.homeView) {
                _this.homeView = new HomeView();
            }
            $('#content').html(_this.homeView.el);
        });
    },

	list: function(page) {
        this.selectMenuItem('home-menu');
        require(['routes/list'], function(){
            var p = page ? parseInt(page, 10) : 1;
            var wineList = new WineCollection();
            wineList.fetch({success: function(){
                $("#content").html(new WineListView({model: wineList, page: p}).el);
            }});
        });
    },

    wineDetails: function (id) {
        this.selectMenuItem();
        require(['routes/view'], function(){
            var wine = new Wine({_id: id});
            wine.fetch({success: function(){
                $("#content").html(new WineView({model: wine}).el);
            }});
        });
    },

	addWine: function() {
        this.selectMenuItem('add-menu');
        require(['routes/add'], function(){
            var wine = new Wine();
            $('#content').html(new WineView({model: wine}).el);
        });
	},

    about: function () {
        var _this = this;
        this.selectMenuItem('about-menu');
        require(['routes/about'], function(){
            if (!_this.aboutView) {
                _this.aboutView = new AboutView();
            }
            $('#content').html(_this.aboutView.el);
        });
    }

});

