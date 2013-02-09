define(['jquery', 'underscore', 'WineModel', 'WineView'], function($, _, Wine, WineView){
    return new WineView({model: new Wine()}).el;
});
