const router = require('express').Router();
const auth = require('../middlewares/auth');

const { getUsers, updateUserInfo, getCurrentUsers, updateUserAvatar } = require('../controllers/users');

router.get('/', auth, getUsers);
router.patch('/me', auth, updateUserInfo);
router.get('/me', auth, getCurrentUsers);
router.patch('/me/avatar', auth, updateUserAvatar);

module.exports = router;
