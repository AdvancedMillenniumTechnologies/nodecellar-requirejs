define(function(){
    return function(){
        var wine = new Wine();
        $('#content').html(new WineView({model: wine}).el);
    };
});
