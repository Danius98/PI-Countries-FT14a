const { Router } = require('express');
const { Country } = require('../models/Country');

const router = Router();

router.get('/', (_req, res, next) => {
    return Country.findAll()
    .then((name) => res.send(name))
    .catch((error) => next(error));
    });

module.exports = router;