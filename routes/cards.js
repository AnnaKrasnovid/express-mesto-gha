const router = require('express').Router();
const { getCards, deleteCard, createCard, likeCard, dislikeCard } = require('../controllers/cards');
const auth = require('../middlewares/auth');
const validation = require('../middlewares/validation');

router.get('/', auth, getCards);
router.post('/', auth, validation.checkCreateCard, createCard);
router.delete('/:cardId', auth, validation.checkCardId, deleteCard);
router.put('/:cardId/likes', auth, validation.checkCardId, likeCard);
router.delete('/:cardId/likes', auth, validation.checkCardId, dislikeCard);

module.exports = router;
