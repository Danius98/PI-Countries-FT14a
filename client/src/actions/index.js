export function getCountry() {
    return function(dispatch) {
        return axios("http://localhost:3001/Country")
        .then(response => response.json())
        .then(json => {
            dispatch({type: "GET_COUNTRIES", payload: json});
        });
    };
}

export function getCountries(nombre) {
    return function(dispatch) {
        return axios("http://localhost:3001/Country?=" + nombre)
        .then(response => response.json())
        .then(json => {
            dispatch({type: "GET_COUNTRIES", payload: json});
        });
    };
}