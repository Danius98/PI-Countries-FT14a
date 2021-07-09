const { Router } = require('express');
const { Sequelize, Op } = require('sequelize');
const { Country, Activity } = require('../db');
const router = Router();

//router.get('/', getAll)
//router.get('/:idPais', CountryId)

router.get('/', async function getAll(req, res) {
    const { nombre } = req.query; 
    try {
        if(!nombre) {
            const All_Country = await Country.findAll({include: Activity});
            res.json(All_Country);
        } else {
            const CountryQuery = await Country.findAll({
                where: {
                    nombre: { // como esta en la BD
                        [Op.iLike]: `%${nombre}%`
                    },
                },
                include: Activity
            });
            if(!CountryQuery[0]) {
                console.log('error');
                return res.status(404).json({error: `No hay país con el nombre, ${nombre}`});
            }
            return res.json(CountryQuery);
        }
    } catch (error) {
        res.send(error);
    }
})

/*router.get('/:idPais', async function getCountryId(req, res) {
    try { 
        const { idPais } = req.params;
        const Country = await Country.findbyPk(idPais.toUpperCase(), {include: Activity})
        return res.json(Country);
    } catch (error) {
        res.send(error);
    } 
})*/

router.get('/:idCountry', async function getCountryId(req, res) {
    try {
        const id = req.params.idCountry.toUpperCase();
        console.log(id)
        const nacion = await Country.findOne({
            where: {
                codigo: id,
            },
            include: Activity,
        });
        return res.json(nacion);
    } catch (error) {
       res.send(error);
    }
})

module.exports = router

