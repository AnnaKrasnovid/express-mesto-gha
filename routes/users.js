const router = require('express').Router();

const { getUsers, createUser, getUsersId, updateUser, updateUserAvatar } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:userId', getUsersId);
router.post('/users', createUser);
router.patch('/users/me', updateUser);
router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
