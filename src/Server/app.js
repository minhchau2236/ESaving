const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const outcomeCategoryRouter = require('./src/routes/outcomeCategoryRoutes')();

const config = {
  user: 'sa',
  password: '123456@Aa',
  server: 'localhost\\MSSQLSERVER', // You can use 'localhost\\instance' to connect to named instance
  database: 'ESaving',
  port: 1433,
};

sql.connect(config).catch(error => debug(error));
app.use('/api/category', outcomeCategoryRouter);


app.get('/', (req, res) => {
  res.send('Hello from my library E saving');
});

app.listen(3000, function () {
  debug(`Listen to ${port} ${chalk.green('3000')}`);
});
