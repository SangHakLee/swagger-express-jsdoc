var express = require('express');
var router = express.Router();

var users = [];

/**
 * @swagger
 * definitions:
 *   Users:
 *     required:
 *       - username
 *     properties:
 *       username:
 *         type: string
 *       path:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: All about /users
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Add User
 *     description: Add user by username
 *     tags: [Users]
 *     parameters:
 *       - name: username
 *         description: User's name
 *         in: formData
 *         type: string
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success add user
 */
router.post('/', function(req, res, next) {
  users.push(req.body.username);
  res.json({results: users});
});

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get Users
 *     description: Get All Users
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success get all users
 */
router.get('/', function(req, res, next) {
  res.json({results: users});
});


/**
 * @swagger
 * /users/{username}:
 *   put:
 *     summary: Update User
 *     description: Update username by username
 *     tags: [Users]
 *     parameters:
 *       - name: username
 *         description: User's name
 *         in: path
 *         type: string
 *         required: true
 *       - name: name
 *         description: Name you want to edit
 *         in: formData
 *         type: string
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success update user
 *       400:
 *         description: Can't find user by username
 */
router.put('/:username', function(req, res, next) {
  var user = users.indexOf(req.params.username);
  if (user > -1) {
    users.splice(user, 1, req.body.name);
    res.json({results: users});
  } else {
    res.sendStatus(400);
  }
});


/**
 * @swagger
 * /users/{username}:
 *   delete:
 *     summary: Delete User
 *     description: Delete user by username
 *     tags: [Users]
 *     parameters:
 *       - name: username
 *         description: User's name
 *         in: path
 *         type: string
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success delete user
 *       400:
 *         description: Can't find user by username
 */
router.delete('/:username', function(req, res, next) {
  var user = users.indexOf(req.params.username);
  if (user > -1) {
    users.splice(user ,1);
    res.json({results: users});
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
