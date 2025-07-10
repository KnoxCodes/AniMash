import express from 'express';
import { Port, Mongouri } from './config.js';
import mongoose from 'mongoose';
import Character from './models/Character.js'
import cors from 'cors'; // add this at the top
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.json());
app.use(cors()); // add this after express.json()


// Required if you're using ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the /images folder statically
app.use('/images', express.static(path.join(__dirname, '../images')));


mongoose.connect(Mongouri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Mongo connection error:", err));



app.get('/home', (req, res) => {
    res.send('hello');
})

app.put('/vote', async (req, res) => {
    const { id } = req.body;

    await Character.findByIdAndUpdate(id, {
      $inc: { votes: 1 },
    });
    res.status(200).json({ message: "Vote counted!" });
});

app.get("/vote", async (req, res) => {
    try {
      const characters = await Character.aggregate([{ $sample: { size: 2 } }]);
      res.json(characters);
    } catch (err) {
      console.error("Error fetching characters:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


// GET: Leaderboard - returns characters sorted by votes (highest first)
app.get("/leaderboard", async (req, res) => {
    try {
      const topCharacters = await Character.find()
        .sort({ votes: -1 }) // Sort descending
        .limit(20);           // Optional: limit to top 20
  
      res.json(topCharacters);
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
      res.status(500).json({ error: "Failed to load leaderboard" });
    }
  });
  


app.listen(Port);