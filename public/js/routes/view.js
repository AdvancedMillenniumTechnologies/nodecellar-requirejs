define(['jquery', 'underscore', 'text!WineViewTpl', 'WineModel', 'WineView'], function($, _, WineViewTpl, Wine, WineView){
    if (typeof WineView.prototype.template === "undefined") WineView.prototype.template = _.template(WineViewTpl);
    return function(id){
        var wine = new Wine({_id: id});
        wine.fetch({success: function(){
            $("#content").html(new WineView({model: wine}).el);
        }});
    };
});
