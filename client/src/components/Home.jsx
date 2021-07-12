import React from "react";
import { getCountry } from "../actions/index.js";
import { UseEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "./Card"


export default function Home() {
    const countries = useSelector((state) => state.countriesLoaded
    )
    console.log(countries)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountry());
      }, [dispatch])
    return (
        <div>
            <ul>
        {countries.map((e) => (
          <Card
            bandera={e.bandera}
            nombre={e.nombre}
            continente={e.continente}
            codigo={e.codigo}
          />
        ))}
        </ul>
        </div>
    )
    }


//export default Home;