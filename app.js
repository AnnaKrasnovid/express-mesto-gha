const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', { useNewUrlParser: true });

app.use((req, res, next) => {
  req.user = { _id: '6229c9b339759853acfb90a2' };

  next();
});

app.use('/', require('./routes/users'));

app.use('/', require('./routes/cards'));

app.use((req, res, next) => {
  res.status(404).send({ message: "Can't find that" });

  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
