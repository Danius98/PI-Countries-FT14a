import React from 'react';
import { Link } from "react-router-dom";
//import styles from './Card.module.css';

export default function CountryCard(props) {
  // acá va tu código
  const {codigo, nombre, bandera, continente} = props;
  return (
  <div>
    <Link to={`/Country/${codigo}`}>
    <li>
      <img width={100}src={bandera} alt="No imagen"/>
  <h4>{nombre}</h4>
  <h4>{continente}</h4>
    </li>
    </Link>
  </div>)
};