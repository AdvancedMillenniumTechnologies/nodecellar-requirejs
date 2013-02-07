define(['jquery', 'underscore', 'AboutView'], function($, _, AboutView){
    var aboutView = new AboutView();
    return function(){
        $('#content').html(aboutView.el);
    };
});

