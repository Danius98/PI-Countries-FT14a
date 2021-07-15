import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getCountry, createActivity, Name_OrderA, Name_OrderZ, Continent, Pop_Order_Max, Pop_Order_Min} from '../actions/index.js';
import Buscador from './Buscador';

const NavBar = ({getCountry, createActivity, Name_OrderA, Name_OrderZ, Pop_Order_Max, Pop_Order_Min, Continent}) => {
    const[Order, setOrder] = useState('');
    const[continente, setcontinente] = useState('');
    const[Activity, setActivity] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        if(continente) {
            getCountry();
            if(continente !== "Todos") {
                setTimeout(() => {
                    dispatch(Continent(continente))
                }, 1000)
            }
        }
    }, [continente]);
    useEffect(() => {
        if(Order === "Todos") getCountry();
        else if(Order === "A-Z") Name_OrderA();
        else if(Order === "Z-A") Name_OrderZ();
        else if(Order === "Mayor Población") Pop_Order_Max();
        else if(Order === "Menor Población") Pop_Order_Min();
    }, [Order])
    const activityHandler = (e) => {
        e.preventDefault()
        setActivity(e.target.value)
    }
    const showActHandler = (e) => {
        e.preventDefault()
        getCountry()
        setTimeout(() => {
            dispatch(createActivity(Activity))
        }, 1000);
        console.log(Activity)
        setActivity('')
    }
    console.log(Activity)
    return (
        <div>
            <Link to='/'>
            <p>Bienvenidos</p>
            </Link>
            <div>
                <h5>Ordenado según:</h5>
                <select onChange={(event) => setOrder(event.target.value)}>
                    <option value="Todos">Todos</option>
                    <option value="A-Z">Alfabético A-Z</option>
                    <option value="Z-A">Alfabético Z-A</option>
                    <option value="Mayor Población">Mayor Población</option>
                    <option value="Menor Población">Menor Población</option>
                </select>
                <Buscador/>
            </div>
            <div>
                <h5>Filtrado por Continente</h5>
                <div>
                <select onChange={(event) => setcontinente(event.target.value)}>
                    <option value="Todo">Todo</option>
                    <option value="Europe">Europa</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
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
                    value={Activity}
                    onChange={activityHandler}
                    />
                    <button onClick={showActHandler}>Buscá</button>
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
        createActivity: (payload) => dispatch(createActivity(payload)),
        Name_OrderA: () => dispatch(Name_OrderA()),
        Name_OrderZ: () => dispatch(Name_OrderZ()),
        Continent: (continente) => dispatch(Continent(continente)),
        Pop_Order_Max: () => dispatch(Pop_Order_Max()),
        Pop_Order_Min: () => dispatch(Pop_Order_Min())
    }
}

const mapStateToProps = (state) => {
    return {
        countriesLoaded: state.countriesLoaded
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)