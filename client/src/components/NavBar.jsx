import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { 
getCountry,
getCountriesName,
Name_OrderA, 
Name_OrderZ,
Pop_Order_Max,
Pop_Order_Min, 
Continent} from '../actions/index.js';
import Buscador from './Buscador';
import Name_Order from './Ordenamiento.jsx';

const NavBar = ({getCountry, getCountriesName, Name_OrderA, Name_OrderZ, Pop_Order_Max, Pop_Order_Min}) => {
    const[Order, setOrder] = useState('');
    const[continente, setcontinente] = useState('');
    const[Actividad, setActividad] = useState('')
    const dispatch = useDispatch();
    useEffect(() => {
        if(continente) {
            getCountry();
            if(continente !== "Todos") {
                setTimeout(() => {
                    dispatch(Continent(continente))
                }, 2000)
            }
        }
    }, [continente]);
    useEffect(() => {
        if(Order === "Todos") getCountry();
        else if(Order === "A-Z") Name_OrderA();
        else if(Order === "Z-A") Name_OrderZ();
        else if(Order === "> Población") Pop_Order_Max();
        else if(Order === "< Población") Pop_Order_Min();
    }, [Order])
    const activityHandler = (e) => {
        e.preventDefault()
        setActividad(e.target.value)
    }
    console.log(Actividad)
    return (
        <div>
            <Link to='/'>
            <p>Bienvenidos</p>
            </Link>
            <div>
                <h5>Ordenado según:</h5>
                <select onChange={(event) => setOrder(event.target.value)}>
                    <option value="Todos">Todos</option>
                    <option value="A-Z">Alfabético</option>
                    <option value="> Población">Población</option>
                </select>
                <Buscador/>
            </div>
            <div>
                <h5>Filtrado por Continente</h5>
                <div>
                <select onChange={(event) => setcontinente(event.target.value)}>
                    <option value="Todo">Todo</option>
                    <option value="Europa">Europa</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Oceania">Oceania</option>
                </select>
                </div>
            </div>
            <div>
                <label>Actividad</label>
                <form>
                    <input
                    placeholder="Buscá tu actividad"
                    type="text"
                    value={Actividad}
                    onChange={activityHandler}
                    />
                    <button onClick>Buscá</button>
                    <Link to="/Activity">
                    <h5>Crea una Actividad</h5>
                    </Link>
                </form>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCountry: () => dispatch(getCountry()),
        
    }
}

const mapStateToProps = (state) => {
    return {
        countriesLoaded: state.countriesLoaded
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(NavBar)