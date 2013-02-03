define(['jquery','underscore','text!WineListItemViewTpl', 'WinesCollection', 'WineListItemView', 'WineListView'], function($, _, WineListItemViewTpl, WineCollection, WineListItemView, WineListView){
    WineListItemView.prototype.template = _.template(WineListItemViewTpl);    
    return function(page){
        var p = page ? parseInt(page, 10) : 1;
        var wineList = new WineCollection();
        wineList.fetch({success: function(){
            $("#content").html(new WineListView({model: wineList, page: p}).el);
        }});
    };
});
