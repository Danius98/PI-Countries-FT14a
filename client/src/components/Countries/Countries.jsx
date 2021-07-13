import React, { useEffect, useState } from 'react';
import CountryCard from './Card.jsx';
import { useSelector } from 'react-redux';

export default function Countries() {
    const countries = useSelector((state) => state.countriesLoaded);
    const [currentPage, setCurrentPage] = useState(0);

    const next_Page = () => {
        if(countries.length <= currentPage + 10) {
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 10);
    };
    const prev_Page = () => {
        if (currentPage < 9) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage - 10);
        }
    };
    const first_Page = () => {
        setCurrentPage(0);
    };
    const last_Page = () => {
        setCurrentPage(countries.length - 10)
    };
    useEffect(() => {
        first_Page()
    }, [countries]);

const Filtred_Country = countries.slice(currentPage, currentPage + 10);

return (
    <div>
        <button onClick={first_Page}> {"<="}</button>
        <button onClick={prev_Page}> {"<"}</button>
        <button onClick={next_Page}> {">"}</button>
        <button onClick={last_Page}> {"=>"}</button>
        <div>
        {Filtred_Country.map((e) => (
        <CountryCard
        codigo = {e.codigo}
        bandera = {e.bandera}
        nombre = {e.nombre}
        continente = {e.continente}
        />
        ))}
      </div>
    </div>
)
}