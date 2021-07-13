import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountry, getCountriesName } from "../actions/index.js";

export default function Buscador() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const onClickHandler = () => {
        dispatch(getCountriesName(input));
    };
    const homeHandler = () => {
        dispatch(getCountry());
    };
    return (
        <div>
            <input
            type="text"
            placeholder="Buscá por nombre"
            name="input"
            onChange={(e) => inputHandler(e)}
            />
            <div>
            <button onClick={() => onClickHandler()}>Buscar</button>
            <button onClick={() => homeHandler()}>Reestablecer</button>
            </div>
        </div>
    );
};

