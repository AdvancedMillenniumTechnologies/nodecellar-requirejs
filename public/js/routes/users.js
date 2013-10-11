define(['jquery', 'underscore', 'UserModel', 'UserAddView'], function ($, _, User, UserAddView) {
    return {
        /*initView: function(id){
         var user = new User({_id: id}),
         defer = $.Deferred(),
         renderPromise = defer.then(function(){
         return new UserView({model: user}).el;
         });
         user.fetch({success: function(){
         defer.resolve();
         }});
         return renderPromise;
         },*/
        initAdd: function () {
            return new UserAddView({model: new User()}).el;
        }
    }
});