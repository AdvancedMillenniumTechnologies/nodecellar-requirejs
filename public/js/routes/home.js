define(['jquery', 'underscore', 'home', 'text!homeview'], function($, _, HomeView, HomeViewTpl){
    HomeView.prototype.template = _.template(HomeViewTpl);
    var homeView = new HomeView();
    return function(){
        $('#content').html(homeView.el);
    };
});
