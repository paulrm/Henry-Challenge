const { Router } = require('express');

// Importamos la ruta 
const apiRouter = require('./api.js');

const router = Router();


//  cargarmos cada enrutador en una ruta

router.use('/api', apiRouter);

module.exports = router;