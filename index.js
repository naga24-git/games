'use strict';
 
const express = require('express');
 
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/games', (req, res) => {
  console.log(`Received POST request for /games`);
  const game = req.body;
  game.gameId = 1;
  res.send(game);
});

app.get('/games/:gameId', (req, res) => {
  console.log(`Received GET request for /games/:gameId`);
  res.send(require(`./games${req.params.gameId}.json`));
});

app.post('/games/:gameId/play-packages', (req, res) => {
  console.log(`Received POST request for /games/:gameId/play-packages`);
  const pkg = req.body;
  pkg.packageId = 1;
  res.send(pkg);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});