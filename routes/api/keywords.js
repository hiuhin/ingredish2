const express = require("express");
const keys = require("../../config/keys");

const router = express.Router();

const Keyword = require("./../../models/Keyword");

const mongoose = require("mongoose");
const passport = require("passport");
require("./../../config/passport")(passport);

const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    const keyword = await (Keyword.find({
      name: req.query.search
    }).count() > 0);
    console.log("keyword", keyword);
    // if (keyword.length === 0) return res.status(400).send({ msg: "No Recipe for this ingredient yet" });
      // res.json(keyword);
    return keyword;
  }
  catch (err) {
    console.log(err.message);
    res.status(500).send("Nooo")
  }

      // res.status(400).send({ name: err. })
    // );
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
  (req, res) => {
    req.body.instructions = {};
    const newKeyword = new Keyword({
      name: req.body.name
    });

    newKeyword.save().then(keyword => res.json(keyword));
  }
);

module.exports = router;
