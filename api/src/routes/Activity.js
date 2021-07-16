const { Router } = require('express');
const { Country, Activity } = require('../db');
const router = Router();

router.post('/', async function newActivity(req, res) {
    const { Nombre, Dificultad, Duracion, Temporada, countryCodigo } = req.body;
    const Val_Actividad = await Activity.findOne({
        where: {
            Nombre: Nombre,
        },
    }); 
    if(!Val_Actividad) {
        const new_Actividad = await Activity.create({
            Nombre: Nombre,
            Dificultad: Dificultad,
            Duracion: Duracion,
            Temporada: Temporada
        });
        const PaisID = await Country.findAll({
            where: {
                codigo: countryCodigo,
            },
        });
        const show_Actividad = await new_Actividad.addCountry(PaisID);
        return res.send(show_Actividad);
    }
    const PaisID = await Country.findAll({
        where: {
            codigo: countryCodigo,
        },
    });
    const show_Actividad = await Val_Actividad.addCountry(PaisID);
    res.send(show_Actividad)
})

module.exports = router;