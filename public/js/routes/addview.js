define(['jquery', 'underscore', 'WineModel', 'WineView'], function($, _, Wine, WineView){
    return {
        initView: function(id){
            var wine = new Wine({_id: id}),
                defer = $.Deferred(),
                renderPromise = defer.then(function(){
                    return new WineView({model: wine}).el;
                });
            wine.fetch({success: function(){
                defer.resolve();
            }});
            return renderPromise;
        },
        initAdd: function(){
            return new WineView({model: new Wine()}).el;
        }
    }
});