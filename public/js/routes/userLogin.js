define(['jquery', 'underscore', 'UserAuthModel', 'UserLoginView'], function ($, _, User, UserLoginView) {
    var userLoginView = new UserLoginView({model: new User()});
    return userLoginView.el;
});