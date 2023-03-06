const jwt = require('jsonwebtoken');
const User = require('../schemas/userSchema');

const auth = async (req, res, next) => {
  try {
    const tokenType = req.headers.authorization?.split(' ')[0];
    const token = req.headers.authorization?.split(' ')[1];

    if (!token && tokenType !== 'Bearer') {
      res.status(401);
      throw new Error('Unauthorized user');
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedToken.id).select('-password');
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  auth,
};
