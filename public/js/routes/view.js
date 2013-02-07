define(['jquery', 'underscore', 'WineModel', 'WineView'], function($, _, Wine, WineView){
    return function(id){
        var wine = new Wine({_id: id});
        wine.fetch({success: function(){
            $("#content").html(new WineView({model: wine}).el);
        }});
    };
});
