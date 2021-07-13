import axios from "axios"
export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME"

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
        const json = await axios.get("http://localhost:3001/Country/" + nombre);
        return dispatch({ type: "GET_COUNTRIES_NAME", payload: json.data})
         } catch(error) {
            console.log(error)
        };
    }
}