const requireContext = require('require-context');

  
function importAll (r, cb) {
  r.keys().forEach(fileName => {
    const name = fileName.split('.')[0];
    cb(name, r(fileName));
  });
}
 
function router (app) {

  importAll(requireContext('../../src/controllers', true, /\.js$/), (name, load) => {
    app.use(`/${name}`, load)
  });
}

module.exports = router;