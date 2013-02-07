define(['jquery','underscore', 'WinesCollection', 'WineListItemView', 'WineListView'], function($, _, WineCollection, WineListItemView, WineListView){
    return function(page){
        var p = page ? parseInt(page, 10) : 1;
        var wineList = new WineCollection();
        wineList.fetch({success: function(){
            $("#content").html(new WineListView({model: wineList, page: p}).el);
        }});
    };
});
