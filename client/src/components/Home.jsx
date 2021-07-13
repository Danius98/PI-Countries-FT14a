import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Countries from "./Countries/Countries"
import { getCountry } from "../actions/index.js";
import { useDispatch } from "react-redux";


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountry());
      }, [dispatch])
    return (
        <div>
          <Countries/>
        </div>
    )
}