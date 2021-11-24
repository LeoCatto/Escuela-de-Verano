const initialState = {
    alumnos: [],
    alumnoDetail: [],
    filterAlumn:[]
  };

  export default function rootReducer(state = initialState, action){

    switch(action.type){
      case "GET_ALUMN":
        return{
          ...state,
          alumnos:action.payload,
          filterAlumn:action.payload
        }
      case "GET_ALUMN_DETAIL":
          return{
            ...state,
            alumnoDetail: action.payload,
          }
          case "ASC":
        return {
          ...state,
          filtereddogs: state.filtereddogs
            .filter((b) => b.name !== null)
            .sort((a, b) =>
              a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            ),
        };
        case "DESC":
        return {
          ...state,
          filtereddogs: state.filtereddogs
            .filter((b) => b.name !== null)
            .sort((a, b) =>
              a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
            ),
        };
      case "MAXYEARS":
        return{
          ...state,
          filterAlumn:state.filterAlumn
          .filter((b) => b.years !== null)
          .sort((a,b)=>
          a.years.split(" ")[2]>b.years.split(" ")[2]?1:-1
          ) 
        }
      case "MINYEARS":
        return{
          ...state,
          filterAlumn:state.filterAlumn
          .filter((b) => b.years !== null)
          .sort((a,b)=>
          a.years.split(" ")[2]<b.years.split(" ")[2]?1:-1
          ) 
        }
      case "QUINCENA":
        return{
          ...state,
          filterAlumn: state.filterAlumn
          .filter((a)=>a.quincena !== null)
          .sort
        }
        case "FILTER":
          return {
            ...state,
            filterAlumn: action.payload,
          };
  
        default:
          return state;    
    }

  }