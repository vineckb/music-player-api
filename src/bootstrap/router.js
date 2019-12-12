const requireContext = require('require-context');
const path = require('path');

module.exports = function (app) {
  const context = requireContext(path.join(__dirname, '..', 'routes'), true, /\.js$/)

  context.keys().forEach(fileName => {
    const name = fileName.split('.')[0];
    app.use(`/${name}`, router)
  });
};