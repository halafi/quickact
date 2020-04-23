import express from 'express';
import morgan from 'morgan';

import template from './services/template';

const app = express();
const port = process.env.PORT || 3000; // dotenv

app.use(morgan('tiny'));
app.use(express.static('dist')); // serve static assets, on production this should be done by CDN

app.use((req, res, next) => {
  if (req.path.includes('.')) {
    next();
  } else {
    template(req.path).pipe(res);
  }
});

app.listen(port, () => console.log(`[server] listening on port ${port}!`));
