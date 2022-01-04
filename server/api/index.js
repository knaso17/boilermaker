const router = require('express').Router();

// router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/example', require('./example')); // matches all requests to /api/example/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
