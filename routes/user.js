const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("../client/src/utils/passport");
const listingController = require("../controllers/listingController");

router.post("/", (req, res) => {
    console.log("user signup");
    const {
        username,
        password,
        firstname,
        lastname,
        email,
        dob,
        license,
        userType
    } = req.body;
    console.log(req.body);
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log("User.js post error: ", err);
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            });
        } else {
            const newUser = new User({
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
                email: email,
                dob: dob,
                license: license,
                userType: userType
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                res.json(savedUser);
            });
        }
    });
});

router.post(
    "/login",
    function(req, res, next) {
        console.log(req.body);
        next();
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("logged in", req.user);
        var userInfo = {
            username: req.user.username,
            firstname: req.user.firstname,
            lastname: req.user.lastname,
            userType: req.user.userType
        };
        res.send(userInfo);
    }
);

router.route("/").get(listingController.findUser);

router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout();
        res.send({ msg: "logging out" });
    } else {
        res.send({ msg: "no user to log out" });
    }
});

module.exports = router;