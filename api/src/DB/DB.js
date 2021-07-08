const axios = require('axios');
const { Country } = require ('../db')
const ALL_COUNTRY = "https://restcountries.eu/rest/v2/all"

async function DataBase(_req, res) {
    try {
      {
        const All_Api = await axios.get(ALL_COUNTRY);
        const Country_Model = All_Api.data.map((e) => {
            return {
                codigo: e.alpha3Code,
                nombre: e.name,
                bandera: e.flag,
                capital: e.capital,
                continente: e.region,
                subcontinente: e.subregion,
                superficie: e.area,
                poblacion: e.population,
            };
        });
        Country_Model.forEach(async (e) => {
            await Country.findOrCreate({
                where: {
                    codigo: e.codigo,
                    nombre: e.nombre,
                    bandera: e.bandera,
                    capital: e.capital,
                    continente: e.continente,
                    subcontinente: e.subcontinente,
                    superficie: e.superficie,
                    poblacion: e.poblacion,
                },
            });
        });
      }
      console.log('Josha')
    } catch(error) {
        res.send(error);
    }
}

module.exports = {DataBase}