import axios from "axios"
export const GET_COUNTRIES = "GET_COUNTRIES"

export function getCountry() {
    return async function(dispatch) {
        try {
        const json = await axios.get("http://localhost:3001/Country");
        return dispatch({ type: "GET_COUNTRIES", payload: json.data})
         } catch(error) {
            console.log(error)
        };
    }
}

export function getCountries(nombre) {
    return async function(dispatch) {
        try {
        const json = await axios.get("http://localhost:3001/Country?=" + nombre);
        return dispatch({ type: "GET_COUNTRIES", payload: json.data})
         } catch(error) {
            console.log(error)
        };
    }
}