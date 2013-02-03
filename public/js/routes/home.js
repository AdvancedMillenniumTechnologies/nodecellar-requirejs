define(function(){
    var homeView = new HomeView();
    return function(){
        $('#content').html(homeView.el);
    };
});
