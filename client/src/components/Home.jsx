import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { getCountry } from "../actions/index.js";
import { useDispatch } from "react-redux";
import Countries from "./Countries/Countries"
import NavBar from "./NavBar"


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountry());
      }, [dispatch])
    return (
      <div>
        <NavBar/>
        <div>
          <Countries/>
          </div>
        </div>
    )
}