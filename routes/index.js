var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Index
 *   description: All about /
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Index
 *     description: It will return 'index' results
 *     tags: [Index]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: hello world
 */
router.get('/', function(req, res, next) {
  res.json({results: 'index'});
});

module.exports = router;
