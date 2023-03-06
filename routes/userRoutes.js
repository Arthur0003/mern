const { Router } = require('express');
const {
  registration,
  login,
  check,
  getAll,
} = require('../controllers/userController');
const { auth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/', getAll);
router.post('/registration', registration);
router.post('/login', login);
router.get('/check', auth, check);

module.exports = router;
