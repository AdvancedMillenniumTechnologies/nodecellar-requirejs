// WineCollection
define(['jquery', 'underscore', 'backbone', 'WineModel'], function($, _, Backbone, Wine){
    return Backbone.Collection.extend({
        model: Wine,
        url: "/wines"
    });
});
