import React from "react";
import { Link } from "react-router-dom";

export default function Activity(props) {
    const {Actividades, Pais} = props
    if(Actividades && Actividades.length > 0) {
        console.log(Actividades);
        return(
            <div>
                <h4>Actividades planeadas en {Pais}</h4>
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Duracion (horas)</th>
                        <th>Estación</th>
                        <th>Dificultad</th>
                    </tr>
                    </thead>
                    <tbody>
                        {Actividades && Actividades.map((a) => (
                            <tr key={a.codigo}>
                                <td>{a.Nombre}</td>
                                <td>{a.Duracion}</td>
                                <td>{a.Temporada}</td>
                                <td>{a.Dificultad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return <Link to="/Activity"><h3>¡Planea Actividades para este país!</h3></Link>
    }
} 