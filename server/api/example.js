// apiRoutes/puppies.js
const router = require('express').Router();

// matches GET requests to /api/puppies/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/puppies/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/puppies/:puppyId
router.put('/:puppyId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/puppies/:puppyId
router.delete('/:puppyId', function (req, res, next) { /* etc */});

//log-in route
router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body)});
  } catch (err) {
    next(err)
  }
})

//sign-up route
router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

module.exports = router;
