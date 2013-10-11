// UserCollection
define(['jquery', 'underscore', 'backbone', 'UserModel'], function($, _, Backbone, User){
    return Backbone.Collection.extend({
        model: User,
        url: "/users"
    });
});
