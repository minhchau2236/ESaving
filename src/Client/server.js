// import express from 'express';
// import config from './config';
// import serverRender from 'renderers/server';

const express = require('express');
const config = require('./config');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  // var initialContent = await serverRender();
  res.render('index');
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});