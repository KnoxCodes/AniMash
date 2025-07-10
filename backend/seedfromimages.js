// server/scripts/seedFromImages.js
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { Mongouri } = require("./config.js")
const Character = require("./models/Character");

mongoose.connect(Mongouri);

const imagesDir = path.join(__dirname, "../images");

const files = fs.readdirSync(imagesDir);

const characters = files.map((filename) => {
  const name = filename
    .replace(/\.[^/.]+$/, "") // remove file extension
    .replace(/[_-]/g, " ")     // replace _ or - with space
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize words
    console.log(name);
  return {
    name,
    image: `/images/${filename}`, // this will be served via Express
  };
});

Character.insertMany(characters)
  .then(() => {
    console.log("Characters seeded successfully.");
    mongoose.disconnect();
  })
  .catch(console.error);
