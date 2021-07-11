import React from "react";
import { Link } from 'react-router-dom';
import { getCountry } from '../actions/index.js';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

export function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountry());
    }, [dispatch]);
const Country = ({ bandera, nombre, continente, subcontinente, codigo, Activity}) => {
    return (
        <div>
            <Link to={`/Country/${codigo}`}>
              <img src={bandera} alt="No hay bandera"></img>
            <h2>{nombre}</h2>
              <h3>{continente}</h3>
              <h4>{subcontinente}</h4>
              <h4>{Activity}</h4>
              </Link>
        </div>
    )
    }
}

export default Home;

