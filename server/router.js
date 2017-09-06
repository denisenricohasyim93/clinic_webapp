var express = require('express');
var router = express.Router();
var User = require('./user');
var path = require('path');

var lab = require('./lab');
var data = require('./data');

router.get('/', function (req, res) {
    if (req.session.userId) {
        return res.sendFile(path.join(__dirname + '/../public/index.html'))
    }
    return res.sendFile(path.join(__dirname + '/../public/login.html'))
})

router.get('/data', function (req, res) {
    User.findById(req.session.userId, function (error, user) {
        res.send(user)
    }
    );
})

router.get('/demo', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'))
})

router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'))
})

router.get('/demo_data', function (req, res) {
    res.send([data, lab])
})

router.post('/insert', function (req, res) {
    User.findById(req.session.userId).exec(function (err, user) {
        if (err) throw err;
        user.patients = req.body.data.patients
        user.diagnosis_list = req.body.data.diagnosis_list
        user.medicine_dose_list = req.body.data.medicine_dose_list
        user.medicine_list = req.body.data.medicine_list

        user.save(function (err) {
            if (err) throw err;
            res.send(user.toJSON());
        })
    })
})


//POST route for updating data
router.post('/', function (req, res, next) {
    // confirm that user typed same password twice
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords dont match");
        return next(err);
    }

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                req.session.userId = user._id;
                return res.redirect('/');
            }
        });

    } else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
})

// GET route after registering
router.get('/profile', function (req, res, next) {
    User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
                }
            }
        });
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

module.exports = router;