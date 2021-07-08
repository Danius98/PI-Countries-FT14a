const express = require('express')
const morgan = require('morgan')
const PORT = 3001;
const app = express()
const errorHandler = require('./src/utils/middlewares/errorHandler')
const setHeaders = require('./src/utils/middlewares/setHeaders')
const routes = require('./src/app.js');
const { conn } = require('./src/db.js');

//headers
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({limit: '50mb'}))
app.use(morgan('dev'))
app.use(setHeaders)

//rutas
app.get('/', (_req, res) => {
  res.send('privet');
});

//middleware de errores
app.use(errorHandler)


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
