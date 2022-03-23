const router = require('express').Router();
const auth = require('../middlewares/auth');
const validation = require('../middlewares/validation');
const { getUsers, updateUserInfo, getCurrentUsers, updateUserAvatar, getUsersId } = require('../controllers/users');

router.get('/', auth, getUsers);
router.patch('/me', auth, validation.checkUserInfo, updateUserInfo);
router.get('/me', auth, getCurrentUsers);
router.patch('/me/avatar', auth, validation.checkUserAvatar, updateUserAvatar);
router.get('/users/:userId', auth, getUsersId);

module.exports = router;
