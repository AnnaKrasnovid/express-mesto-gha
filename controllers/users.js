const User = require('../models/user');
const ErrorNotFound = require('../error/ErrorNotFound');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: `Внутренняя ошибка сервера ${err.name}: ${err.message}` }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      return res.status(500).send({ message: `Внутренняя ошибка сервера ${err.name}: ${err.message}` });
    });
};

module.exports.getUsersId = (req, res) => {
  User.findById(req.params.userId)
    .orFail(() => {
      throw new ErrorNotFound('Пользователь не найден');
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Неверный id' });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.errorMessage }); // поправила и не проверила
      }
      return res.status(500).send({ message: `Внутренняя ошибка сервера ${err.name}: ${err.message}` });
    });
};

module.exports.updateUserInfo = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .orFail(() => {
      throw new ErrorNotFound('Пользователь с таким id не найден');
    })
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.errorMessage }); // поправила и не проверила
      }
      return res.status(500).send({ message: `Внутренняя ошибка сервера ${err.name}: ${err.message}` });
    });
};

module.exports.updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .orFail(() => {
      throw new ErrorNotFound('Пользователь с таким id не найден');
    })
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.errorMessage }); // поправила и не проверила
      }
      return res.status(500).send({ message: `Внутренняя ошибка сервера ${err.name}: ${err.message}` });
    });
};
