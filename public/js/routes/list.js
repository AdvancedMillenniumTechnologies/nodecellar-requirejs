define(['jquery','underscore', 'WinesCollection', 'WineListItemView', 'WineListView'], function($, _, WineCollection, WineListItemView, WineListView){
    return function(page){
        var p = page ? parseInt(page, 10) : 1,
            wineList = new WineCollection(),
            defer = $.Deferred(),
            renderPromise = defer.then(function(){
                return new WineListView({model: wineList, page: p}).el;
            });
        wineList.fetch({success: function(){
            defer.resolve();
        }});
        return renderPromise;
    };
});
