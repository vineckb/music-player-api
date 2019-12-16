import requireContext from 'require-context';
import path from 'path';

export default function (app) {
  const context = requireContext(path.join(__dirname, '..', 'routes'), true, /\.js$/);
  
  context.keys().forEach(fileName => {
    const name = fileName.split('.')[0];
    app.use(`/${name}`, context(fileName).default);
  });

};