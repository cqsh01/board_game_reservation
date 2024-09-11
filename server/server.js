const express = require('express');
<<<<<<< HEAD
const mongoose = require('mongoose');
=======
const { Sequelize, DataTypes } = require('sequelize');
>>>>>>> 46e7330 (Add server setup with dependencies)
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/boardgames', { useNewUrlParser: true, useUnifiedTopology: true });

const gameSchema = new mongoose.Schema({
    name: String,
    status: String
});

const Game = mongoose.model('Game', gameSchema);

app.get('/games', async (req, res) => {
    const games = await Game.find();
=======
// 连接到MySQL数据库
const sequelize = new Sequelize('boardgames', 'root', 'yourpassword', {
    host: 'localhost',
    dialect: 'mysql'
});

// 定义Game模型
const Game = sequelize.define('Game', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'games',
    timestamps: false
});

// 同步数据库
sequelize.sync();

app.get('/games', async (req, res) => {
    const games = await Game.findAll();
>>>>>>> 46e7330 (Add server setup with dependencies)
    res.json(games);
});

app.post('/games/:id/status', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
<<<<<<< HEAD
    await Game.findByIdAndUpdate(id, { status });
=======
    await Game.update({ status }, { where: { id } });
>>>>>>> 46e7330 (Add server setup with dependencies)
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
