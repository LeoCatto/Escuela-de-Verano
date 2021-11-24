export const GET_ALUMN = "GET_ALUMN";
export const GET_ALUMN_DETAIL = "GET_ALUMN_DETAIL";
export const ADD_ALUMN = "ADD_ALUMN";


export function getAlumn(name) {
    return function (dispatch) {
      if(!name){
        return fetch("http://localhost:3000/alumnos")
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: GET_ALUMN, payload: json });
        });
      }else {
        return fetch(`http://localhost:3000/alumnos?name=${name}`)
          .then((response) => response.json())
          .then((json) => {
            dispatch({ type: GET_ALUMN, payload: json });
          });
      } 
    };
  }

  export function getAlumnDetail(id) {
    return function (dispatch) {
        return fetch(`http://localhost:3000/alumnos/${id}`)
          .then((response) => response.json())
          .then((json) => {
            dispatch({ type: GET_ALUMN_DETAIL, payload: json });
          });
    };
  }

  export function getOrderByWeight(value) {
	if (value === 'MINMAX') {
		return {
			type: 'MINMAX',
		};
	} else {
		return {
			type: 'MAXMIN',
		};
	}
}

export function getOrderByYears(value){
	if(value==='MAXYEARS'){
		return{
			type:'MAXYEARS'
		}
	}
}

export function filter(value) {
	return {
		type: 'FILTER',
		payload: value
	};
}