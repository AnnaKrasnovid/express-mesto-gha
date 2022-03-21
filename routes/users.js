const router = require('express').Router();
const auth = require('../middlewares/auth');

const { getUsers, /* createUser, getUsersId, */ updateUserInfo, getCurrentUsers, updateUserAvatar } = require('../controllers/users');

router.get('/', auth, getUsers);
// router.get('/:userId', getUsersId);
// router.post('/users', createUser);
router.patch('/me', auth, updateUserInfo);
router.get('/me', auth, getCurrentUsers);
router.patch('/me/avatar', auth, updateUserAvatar);

module.exports = router;
