define(['jquery', 'underscore', 'about', 'text!aboutview'], function($, _, AboutView, AboutViewTpl){
    AboutView.prototype.template = _.template(AboutViewTpl);
    var aboutView = new AboutView();
    return function(){
        $('#content').html(aboutView.el);
    };
});

