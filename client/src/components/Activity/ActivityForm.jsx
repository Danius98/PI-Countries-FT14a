import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountriesName } from "../../actions";
import  ActivityCountry  from "./ActivityCountry";

export default function ActivityForm() {
    const Countries = useSelector((state) => state.countriesLoaded);
    const [input, setInput] = useState('');
    const [currentPage, setCurrentPage] = useState('');
    const dispatch = useDispatch();

    const next_Page = () => {
        if(countries.length <= currentPage + 15) {
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 15);
    };
    const prev_Page = () => {
        if (currentPage < 14) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage - 15);
        }
    };
    const first_Page = () => {
        setCurrentPage(0);
    };
    const last_Page = () => {
        setCurrentPage(countries.length - 15)
    };
    useEffect(() => {
        first_Page()
    }, [countries]);

    const Filtred_Country = countries.slice(currentPage, currentPage + 10);

    const [dataForm, setDataForm] = useState({
        Nombre: '',
        Dificultad: '',
        Duracion: '',
        Temporada: '',
        countryCodigo: []
    });

    const stateReset = () => {
        setDataForm({
            Nombre: '',
            Dificultad: '',
            Duracion: '',
            Temporada: '',
            countryCodigo: []
        });
        setInputName('');
    };
    const submitInputName = (e) => {
        e.preventDefault();
        setInputName(e.target.value);
    };
    const setDataHandler = (e) => {
        e.preventDefault();
        setDataForm({
            ...dataForm,
            [e.target.value]: e.target.value,
        });
    };
    const setCodeHandler = (e) => {
        e.preventDefault();
        setDataForm({
            ...dataForm,
            [e.target.Nombre]: dataForm[e.target.Nombre].concat(e.target.value),
        })
        alert("País añadido")
    };
    useEffect(() => {
        dispatch(getCountriesName(inputName));
        const submitForm = (e) => {
            e.preventDefault();
            let form = true;
            if(dataForm["Nombre"].length < 2) {
                form = false;
            } else if (!dataForm["countryCodigo"].length > 1) {
                form = false;
            }
            if(form) {
                dispatch(createCountry(dataForm))
                .then(() => stateReset())
                .then(() => alert("Actividad añadida"))
            } else {
                return alert("Por favor llena todos los campos antes de crear una actividad");
            }
        };
        return (
            <p>Rodrigo maricon</p>
        )
    })


}