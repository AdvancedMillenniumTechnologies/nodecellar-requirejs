//WineListItemView
define(['jquery', 'underscore', 'backbone','text!WineListItemViewTpl'], function($, _, Backbone, WineListItemViewTpl){

    return Backbone.View.extend({

        template: _.template(WineListItemViewTpl),
        
        tagName: "li",

        initialize: function () {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }

    });
});
