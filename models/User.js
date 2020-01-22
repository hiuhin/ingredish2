const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  saved_recipes: [{
    recipe: {
      type: Schema.Types.ObjectId,
      ref: "recipes"
    }
  }]
});

module.exports = User = mongoose.model("User", UserSchema);