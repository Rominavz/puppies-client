import{
    GET_ALL_DOGS,
    GET_DOG_BY_ID,
    CLEAN_DOG_DETAIL,
    GET_ALL_TEMPERAMENTS,
    SET_CURRENT_PAGE,
    FILTER_BY_ORIGEN,
    FILTER_BY_TEMPERAMENT,
    ORDER_DOGS,
    DELETE_DOG,
} from '../actions/types'

const initialState = {
    dogs: [],
    allDogs:[],
    dog:[], //detalle
    allTemperaments:[],
    page: 1,
}

function rootReducer(state= initialState, {type, payload}){
    switch(type){
        case GET_ALL_DOGS:
            return{
                ...state,
                dogs: payload,
                allDogs: payload,  
            };
        case GET_DOG_BY_ID:
            return{
                ...state,
                dog: payload,
            }; 
        case DELETE_DOG:
            return{
                ...state,
            }; 
        case CLEAN_DOG_DETAIL:
            return{
                ...state,
                dog: [],
            };     
        case GET_ALL_TEMPERAMENTS:
            return{
                ...state,
                allTemperaments: payload,
            };
        case SET_CURRENT_PAGE:
            return{
                ...state,
                page: payload,
            };
        case FILTER_BY_ORIGEN:
            const allDogs = state.allDogs;
            const origenFilter = payload === 'created' ? allDogs.filter(c => c.createdInDb) : allDogs.filter(c => !c.createdInDb);
            return{
                ...state,
                dogs: payload === 'All' ? allDogs: origenFilter,
            };
        case FILTER_BY_TEMPERAMENT:
            const allDogsTemp = state.allDogs;
            const temperamentFilter = payload === 'All' ? allDogsTemp : allDogsTemp.filter(t => t.temperament?.includes(payload));
            return{
                ...state,
                dogs: temperamentFilter,
            };
        case ORDER_DOGS:
            let ordered = state.dogs;
            
            payload === 'Asc' &&
                ordered.sort((a,b) =>{
                    return a.name.localeCompare(b.name);
                })
            payload === 'Desc' &&
                ordered.sort((a,b) =>{
                    return b.name.localeCompare(a.name);
                });
                       
            payload === 'Max' &&
                ordered.sort((a,b) =>{
                let oneb = Number(b.weight.trim().split(" - ")[1]);
                oneb ? b = oneb : b = 0;
                let onea = Number(a.weight.trim().split(" - ")[1]);
                onea ? a = onea : a = 0;
                return b - a
                });
            
            payload === 'Min' &&
                ordered.sort((a,b) =>{
                let twob = Number(b.weight.trim().split(" - ")[1]);
                twob ? b =  twob : b = 100;
                let twoa = Number(a.weight.trim().split(" - ")[1]);
                twoa ? a = twoa : a = 100;
                return a - b
                });   
                                
            return{
                ...state,
                dogs: ordered,
            }
     default: return state;
    }        
}

export default rootReducer;