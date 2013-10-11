// Wine
define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

    return Backbone.Model.extend({

        validation: {
            name: {
                required: true
            },
            email: {
                pattern: 'email',
                required: true
            },
            password: {
                required: true
            }
        },

        urlRoot: "/users",

        idAttribute: "_id",

        initialize: function () {

        },

        defaults: {
            _id: null,
            name: null,
            email: null,
            password: null
        }
    });

});
