const { Router } = require('express');
//const { Country } = require('../models/Country');

const router = Router();

router.get('/', (_req, res) => {
    res.send('soy activity!');
})

module.exports = router;