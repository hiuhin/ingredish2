const express = require("express");
const keys = require("../../config/keys");

const router = express.Router();

const Recipe = require("./../../models/Recipe");

const mongoose = require("mongoose");
const passport = require("passport");
require("./../../config/passport")(passport);

const jwt = require("jsonwebtoken");

router.get(
  `/`,
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    debugger;
    console.log("here");
    console.log("router", req.query.search.split(","));
    Recipe.find({
      keywords: { $all: req.query.search.split(",")}
    })
          .sort({ date: -1 })
          .then(recipes => res.json(recipes))
          .catch(err =>
            res.status(404).json({ norecipesfound: "No Recipes found" })
          );
  }
);

// router.get("/", (req, res) => {
//     debugger;
//     Recipe.find({
//       ingredients: { $text: { $search: req.config["0"] } }
//     }).then(recipes => res.json(recipes));
// })

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
  async (req, res) => {
    
      console.log(req.body);
      req.body.directions = {};
    // const user = await user.findById(req.user.id).select("-password");

    const newRecipe = new Recipe({
      // users: [req.user.id],
      name: req.body.name,
      ingredients: [req.body.ingredients],
      keywords: [req.body.keywords],
      directions: req.body.directions,
      image_url: req.body.image_url,
      nutrition_facts: req.body.nutrition_facts    
    });

    newRecipe
      .save()
      .then(recipe => res.json(recipe))
      .catch(err =>
        res.status(404).json({ norecipesfound: "No Recipes found" })
      );
  }

);

module.exports = router;
