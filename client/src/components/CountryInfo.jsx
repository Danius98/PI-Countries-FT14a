import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountryID } from '../actions/index.js';
import  Activity  from './Countries/ActivityDetail.jsx';

export default function CountryID() {
    const CountryDetailed = useSelector((state) => state.countryInfo)
    const dispatch = useDispatch();
    const  codigo  = useParams();
    useEffect(() => {
        dispatch(getCountryID(codigo.idCountry));
    }, [dispatch, codigo.idCountry]);
    console.log(codigo, "codigo")
    console.log(CountryDetailed, "Detalle del país")
    return (
        <div>
            <button>
                <Link to="/Country">Home</Link>
            </button>
            <div>
              <h1>{CountryDetailed.nombre}</h1>
              <h3>{CountryDetailed.codigo}</h3>
              <div>
                  <img src={CountryDetailed.bandera} alt="No se encontró la bandera"/>
              </div>
                 <h3>Continente: {CountryDetailed.continente}</h3>
                 <h4>Subcontinente: {CountryDetailed.subcontinente}</h4>
                 <h5>Capital: {CountryDetailed.capital}</h5>
                 <h5>Superficie: {CountryDetailed.superficie}Km2</h5>
                 <h5>Poblacion: {CountryDetailed.poblacion} Habitantes</h5>
                 <div>
                 <Activity countryName={CountryDetailed.nombre} Activity={CountryDetailed.Activity}/>
                 </div>
            </div>
        </div>
    )
}