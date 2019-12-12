const requireContext = require('require-context');
const path = require('path');
const { Router } = require('express');

module.exports = app => {
  const router = Router();
  const context = requireContext(path.join(__dirname, '..', 'controllers'), true, /\.js$/)

  context.keys().forEach(fileName => {
    context(fileName)(router)
  });

  return router;
};