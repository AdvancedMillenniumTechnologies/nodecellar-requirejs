define(function(){
    var aboutView = new AboutView();
    return function(){
        $('#content').html(aboutView.el);
    };
});

