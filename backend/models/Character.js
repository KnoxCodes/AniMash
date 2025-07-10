const mongoose = require("mongoose");

// Define the schema for anime characters
const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Path to image, e.g., /images/naruto.png
    required: true,
  },
  votes: {
    type: Number,
    default: 0, // Each character starts with 0 votes
  },
});

// Export the model to use in routes and seed scripts
module.exports = mongoose.model("Character", CharacterSchema);
