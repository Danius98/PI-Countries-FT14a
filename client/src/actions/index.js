import axios from "axios"
export const GET_COUNTRIES = "GET_COUNTRIES", 
GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME",
GET_COUNTRY_ID = "GET_COUNTRY_ID",
SHOW_ACTIVITY = "SHOW_ACTIVITY",
NAME_ORDER_A = "NAME_ORDER_A",
NAME_ORDER_Z = "NAME_ORDER_Z",
CONTINENT = "CONTINENT",
POP_ORDER_MAX = "POP_ORDER_MAX",
POP_ORDER_MIN = "POP_ORDER_MIN" 

export function getCountry() {
    return async function(dispatch) {
        try {
        const json = await axios.get("http://localhost:3001/Country/");
        return dispatch({ type: "GET_COUNTRIES", payload: json.data})
         } catch(error) {
            console.log(error)
        };
    }
}

export function getCountriesName(nombre) {
    return async function(dispatch) {
        try {
        const json = await axios.get("http://localhost:3001/Country?nombre=" + nombre);
        return dispatch({ type: "GET_COUNTRIES_NAME", payload: json.data})
         } catch(error) {
            console.log("No se mostró el país")
        };
    }
}

export function getCountryID(codigo) {
    return async function(dispatch) {
    try {
        const json = await axios.get(`http://localhost:3001/Country/${codigo}`);
        return dispatch({ type: "GET_COUNTRY_ID", payload: json.data})
    } catch(error) {
        console.log("No se encontró el país con ese ID")
    }
    }
}

export function createActivity(activity) {
    return async function() {
    try {
        const addAct = await axios.post("http://localhost:3001/Activity", activity);
        console.log(addAct)
    } catch (error) {
        console.log("No se mostró la Actividad")
    };
  }
}

export function show_Activity(payload) {
    return {
        type: SHOW_ACTIVITY,
        payload
    };
};

export function Name_OrderA() {
    return {
        type: NAME_ORDER_A,
    }
}

export function Name_OrderZ() {
    return {
        type: NAME_ORDER_Z,
    }
}

export function Continent(payload) {
    return {
        type: CONTINENT,
        payload
    }
}

export function Pop_Order_Max() {
    return {
    type: POP_ORDER_MAX,
    }
}

export function Pop_Order_Min() {
    return {
        type: POP_ORDER_MIN,
    }
}