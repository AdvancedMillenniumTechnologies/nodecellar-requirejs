define(['jquery', 'underscore', 'text!wineview', 'models', 'winedetails'], function($, _, WineViewTpl){
    if (typeof WineView.prototype.template === "undefined") WineView.prototype.template = _.template(WineViewTpl);
    return function(){
        var wine = new Wine();
        $('#content').html(new WineView({model: wine}).el);
    };
});
