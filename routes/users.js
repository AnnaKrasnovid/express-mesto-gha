const router = require('express').Router();

const { getUsers, createUser, getUsersId, updateUserInfo, updateUserAvatar } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:userId', getUsersId);
router.post('/users', createUser);
router.patch('/users/me', updateUserInfo);
router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
