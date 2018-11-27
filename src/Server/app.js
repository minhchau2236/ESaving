const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
const db = require('./src/db/models/setupDatabase');

const outcomeCategoryRouter = require('./src/routes/outcomeCategoryRoutes')(db);
const outcomeItemRouter = require('./src/routes/outcomeItemRoutes')(db);
const authRouter = require('./src/routes/AuthRoutes')(db);

app.use('/api/category', outcomeCategoryRouter);
app.use('/api/outcomeItem', outcomeItemRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Hello from my library E saving');
});

app.listen(port, function () {
  debug(`Listen to ${port} ${chalk.green(port)}`);
});
