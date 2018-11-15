const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const sql = require('mssql');
const Sequelize = require('sequelize');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const config = {
  user: 'sa',
  password: '123456@Aa',
  server: 'localhost\\MSSQLSERVER', // You can use 'localhost\\instance' to connect to named instance
  database: 'ESaving',
  port: 1433,
};

sql.connect(config).catch(error => debug(error));

const sequelize = new Sequelize('ESaving', 'sa', '123456@Aa', {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const outcomeCategoryRouter = require('./src/routes/OutcomeCategoryRoutes')(sequelize);
const authRouter = require('./src/routes/AuthRoutes')();

app.use('/api/category', outcomeCategoryRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Hello from my library E saving');
});

app.listen(port, function () {
  debug(`Listen to ${port} ${chalk.green(port)}`);
});
