define(['jquery', 'underscore', 'text!WineViewTpl', 'WineModel', 'WineView'], function($, _, WineViewTpl, Wine, WineView){
    if (typeof WineView.prototype.template === "undefined") WineView.prototype.template = _.template(WineViewTpl);
    return function(){
        var wine = new Wine();
        $('#content').html(new WineView({model: wine}).el);
    };
});
