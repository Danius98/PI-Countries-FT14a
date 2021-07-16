const { Router } = require('express');
const { Op } = require('sequelize');
const { Country, Activity } = require('../db');
const router = Router();

router.get('/', async function getAll(req, res) {
    const { nombre } = req.query; 
    try {
        if(!nombre) {
            const All_Country = await Country.findAll({include: Activity, limit:250, offset:0});
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

/*router.get('/:id', async function getCountryId(req, res) {
    try { 
        const { id } = req.params;
        //const Country = await Country.find(codigo.toUpperCase(), {include: {model: Activity}})
        const Country = await Country.findOne(
            {where: {
                codigo: id
            }}
            )
        return res.json(Country);
    } catch (error) {
        res.send(error);
    } 
})*/

/*router.get('/:idCountry', async function getCountryId(req, res) {
    try {
        const id = req.params.idPais.toUpperCase();
        console.log(id)
        const nacion = await Country.findByPk({
            where: {
                codigo: id,
            },
            include: Activity,
        });
        return res.json(nacion);
    } catch (error) {
       res.send(error);
    }
})*/

router.get("/:id", async (req, res) => { // PUTO EL QUE LO MODIFIQUE
    try {
      let { id } = req.params;
      let query = await Country.findByPk(id.toUpperCase(), {
        include: { model: Activity },
      });
      console.log(query)
      res.json(query);
    } catch (err) {
      res.json("ID NOT FOUND");
    }
  });

module.exports = router

