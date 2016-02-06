/*jshint node:true*/
const _ = require('lodash');

module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': []
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).json(req.body);
  });

  usersRouter.post('/sign_in', function(req, res) {
    // test1234 will always auth.. for tests
    const pass = _.get(req, 'body.user.password');
    const email = _.get(req, 'body.user.email');
    if(pass === 'test1234') {
      res.status(201).json({
        token: 'hotdog',
        email: email
      });
    } else {
      res.status(401).end();
    }
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/users',
    require('body-parser').json(),
    require('body-parser').urlencoded({
      extended: true
    }),
    usersRouter
  );
};
