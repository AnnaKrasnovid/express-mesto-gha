const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { createUser, login } = require('./controllers/users');
// const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/middlewares');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', { useNewUrlParser: true });

/* app.use((req, res, next) => {
  req.user = { _id: '6229c9b339759853acfb90a2' };

  next();
}); */

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

// app.use('/', require('./routes/users'));

app.post('/signin', login);
app.post('/signup', createUser);

// app.use(auth);

app.use((req, res) => {
  res.status(404).send({ message: 'Not found' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
