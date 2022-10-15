const express = require('express');

const router = express.Router();

// router.get('/', function (req, res) {
//   res.json({
//     message: 'Hello World',
//     id: '01',
//   });
// });

router.use('/article', require('./article.js'));
router.use('/user', require('./user.js'));

module.exports = router;
