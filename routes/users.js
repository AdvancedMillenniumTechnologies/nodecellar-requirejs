var mongo = require('mongodb'),
    Db = mongo.Db,
    BSON = mongo.BSONPure,
    db;

var dbURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/winedb';

Db.connect(dbURI, { server: {auto_reconnect: true}, db: {w: 1} }, function (err, _db) {
    if (!err) {
        db = _db;
        console.log("Connected to 'winedb' database");
        _db.collection('users', {strict: true}, function (err, collection) {
            if (err) {
                console.log("The 'users' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    } else {
        console.log('Could\'t connect to database : ' + err.message);
    }

});


exports.loginUser = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log('Retrieving user: ' + email);
    db.collection('users', function (err, collection) {
        collection.count({'email': email, 'password': password}, function (err, item) {
            if (err || item === 0) {
                res.send({'error': 'An error has occurred', 'err': err});
            } else {
                req.session.user = email;
                res.send({'success': 'success', "item": item});
            }
        });
    });
};

exports.addUser = function (req, res) {
    var user = req.body;
    console.log('Adding user: ' + JSON.stringify(user));
    db.collection('users', function (err, collection) {
        collection.count({'email': user.email}, function (err, item) {
            if (err || item !== 0) {
                res.send({'error': 'An error has occurred', 'err': err});
            } else {
                collection.insert(user, {safe: true}, function (err, result) {
                    if (err) {
                        res.send({'error': 'An error has occurred'});
                    } else {
                        console.log('Success: ' + JSON.stringify(result[0]));
                        res.send(result[0]);
                    }
                });
            }
        });

    });
};

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function () {

    var users = [
        {
            name: "Nisanth",
            email: "nisanth@amt.in",
            password: "nisanth123"
        }
    ];

    db.collection('users', function (err, collection) {
        collection.insert(users, {safe: true}, function (err, result) {
        });
    });

};
