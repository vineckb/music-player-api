const requireContext = require('require-context');
const path = require('path');
 
function router (app) {
  const context = requireContext(path.join(__dirname, 'controllers'), true, /\.js$/)

  context.keys().forEach(fileName => {
    app.use(`/${fileName.split('.')[0]}`, context(fileName))
  });
}

module.exports = router;