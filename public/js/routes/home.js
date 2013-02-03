define(['jquery', 'underscore', 'HomeView', 'text!HomeViewTpl'], function($, _, HomeView, HomeViewTpl){
    HomeView.prototype.template = _.template(HomeViewTpl);
    var homeView = new HomeView();
    return function(){
        $('#content').html(homeView.el);
    };
});
