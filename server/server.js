const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/boardgames', { useNewUrlParser: true, useUnifiedTopology: true });

const gameSchema = new mongoose.Schema({
    name: String,
    status: String
});

const Game = mongoose.model('Game', gameSchema);

app.get('/games', async (req, res) => {
    const games = await Game.find();
    res.json(games);
});

app.post('/games/:id/status', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    await Game.findByIdAndUpdate(id, { status });
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
