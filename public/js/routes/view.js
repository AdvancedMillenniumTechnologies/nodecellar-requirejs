define(['jquery', 'underscore', 'text!wineview', 'models', 'winedetails'], function($, _, WineViewTpl){
    if (typeof WineView.prototype.template === "undefined") WineView.prototype.template = _.template(WineViewTpl);
    return function(id){
        var wine = new Wine({_id: id});
        wine.fetch({success: function(){
            $("#content").html(new WineView({model: wine}).el);
        }});
    };
});
