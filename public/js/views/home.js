// HomeView
define(['jquery', 'underscore', 'backbone', 'text!HomeViewTpl'], function($, _, Backbone, HomeViewTpl){

    return Backbone.View.extend({

        template: _.template(HomeViewTpl),

        initialize:function () {
            this.render();
        },

        render:function () {
            $(this.el).html(this.template());
            return this;
        }

    });
});



