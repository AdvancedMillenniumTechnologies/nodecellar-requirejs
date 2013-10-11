// AboutView
define(['jquery', 'underscore', 'backbone', 'utils', 'text!UserLoginTpl', 'validation'], function ($, _, Backbone, utils, UserLoginTpl, Validation) {

    return Backbone.View.extend({

        template: _.template(UserLoginTpl),

        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            Validation.bind(this);
            return this;
        },

        events: {
            "click .login": "login"
        },


        login:function (event) {
            event.preventDefault(); // Don't let this button submit the form
            var url = '/users/login';
            console.log('Loggin in... ');
            var formValues = {
                email: $('#email').val(),
                password: $('#password').val()
            };

            $.ajax({
                url:url,
                type:'POST',
                dataType:"json",
                data: formValues,
                success:function (data) {
                    console.log(["Login request details: ", data]);

                    if(data.error) {  // If there is an error, show the error messages
                        utils.showAlert('Error', 'Please check email and password', 'alert-error');
                    }
                    else { // If not, send them back to the home page
                        utils.showAlert('Success!', 'Success', 'alert-success');

                    }
                }
            });
        }

    });
});
