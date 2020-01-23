const express = require("express");
const keys = require("../../config/keys");

const router = express.Router();

const Keyword = require("./../../models/Keyword");

const mongoose = require("mongoose");
const passport = require("passport");
require("./../../config/passport")(passport);

const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  Keyword.find()
    .sort({ date: -1 })
    .then(keyword => res.json(keyword))
    .catch(err =>
      res.status(404).json({ nokeywordssfound: "No Keywords found" })
    );
});

// router.get("/user/:user_id", (req, res) => {
//     Tweet.find({ user: req.params.user_id })
//         .then(tweets => res.json(tweets))
//         .catch(err =>
//             res.status(404).json({ notweetsfound: "No tweets found from that user" }));
// });

// router.get("/:id", (req, res) => {
//     Tweet.findById(req.params.id)
//         .then(tweet => res.json(tweet))
//         .catch(err =>
//             res.status(404).json({ notweetfound: "No tweet found with that ID" })
//         );
// });

router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    req.body.instructions = {};
    const newKeyword = new Keyword({
      // users: [req.user.id],
      name: req.body.name
    });

    newKeyword.save().then(keyword => res.json(keyword));
  }
);

module.exports = router;
