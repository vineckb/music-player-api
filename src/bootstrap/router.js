import path from 'path';
import fs from 'fs';

export default function (app) {
  const routesPath = path.resolve(path.dirname(''), 'src', 'routes');

  fs.readdirSync(routesPath).forEach(async file => {
    if (file.match(/\.js$/) === null || file === 'index.js') return;
      const name = file.replace('.js', '');
      const router = await import(`../routes/${file}`);

      app.use(`/${name}`, router.default);
    }
  );
};
