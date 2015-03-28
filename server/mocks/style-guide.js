module.exports = function(app) {
  var express = require('express');
  var styleGuideRouter = express.Router();

  styleGuideRouter.get('/', function(req, res) {
    res.send({
      'style-guide': []
    });
  });

  styleGuideRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  styleGuideRouter.get('/:id', function(req, res) {
    res.send({
      'style-guide': {
        id: req.params.id
      }
    });
  });

  styleGuideRouter.put('/:id', function(req, res) {
    res.send({
      'style-guide': {
        id: req.params.id
      }
    });
  });

  styleGuideRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/style-guide', styleGuideRouter);
};
