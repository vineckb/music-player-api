const path = require('path');
const fs = require('fs');

module.exports = app => {
  const routesPath = path.resolve(path.dirname(''), 'src', 'app', 'routes');

  fs.readdirSync(routesPath).forEach(async file => {
    if (file.match(/\.js$/) === null || file === 'index.js') return;
      const name = file.replace('.js', '');
      const router = await import(`./app/routes/${file}`);

      app.use(`/${name}`, router.default);
    }
  );
}
