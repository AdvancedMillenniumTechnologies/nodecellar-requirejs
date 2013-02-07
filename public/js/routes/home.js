define(['jquery', 'underscore', 'HomeView'], function($, _, HomeView){
    var homeView = new HomeView();
    return function(){
        $('#content').html(homeView.el);
    };
});
