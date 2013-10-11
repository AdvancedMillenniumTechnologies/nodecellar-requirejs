// User add view
define(['jquery', 'underscore', 'backbone', 'utils', 'text!UserAddTpl', 'validation'], function ($, _, Backbone, utils, UserAddTpl, Validation) {

    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        template: _.template(UserAddTpl),

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            Validation.bind(this);
            return this;
        },

        events: {
            "change": "change",
            "click .save": "beforeSave"
        },


        change: function (event) {
            // Remove any existing alert message
            utils.hideAlert();

            // Apply the change to the model
            var target = event.target;
            var change = {};
            change[target.name] = target.value;
            this.model.set(change, {silent: true});

            // Run validation rule (if any) on changed item
            var errorMessage = this.model.preValidate(target.name, target.value);
            if (errorMessage) {
                utils.addValidationError(target.id, errorMessage);
            } else {
                utils.removeValidationError(target.id);
            }
        },

        beforeSave: function () {
            this.saveUser();
            return false;
        },

        saveUser: function () {
            var self = this;
            console.log('before save');
            this.model.save(null, {
                success: function (model) {
                    if (model.error) {
                        self.render();
                        utils.showAlert('Error', 'An error occurred while trying to create a user', 'alert-error');
                    } else {
                        //app.navigate('users/login', true);
                        utils.showAlert('Success!', 'User created. now you may login <a href="#users/login">here</a>', 'alert-success');
                    }
                },
                error: function () {
                    utils.showAlert('Error', 'An error occurred while trying to create a user', 'alert-error');
                }
            });
        }

    });
});
