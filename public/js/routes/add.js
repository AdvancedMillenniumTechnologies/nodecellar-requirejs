define(['jquery', 'underscore', 'WineModel', 'WineView'], function($, _, Wine, WineView){
    return function(){
        var wine = new Wine();
        $('#content').html(new WineView({model: wine}).el);
    };
});
