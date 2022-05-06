import axios from 'axios';
import{
    GET_ALL_DOGS,
    GET_DOG_BY_ID,
    CLEAN_DOG_DETAIL,
    SET_CURRENT_PAGE,
    GET_ALL_TEMPERAMENTS,
    FILTER_BY_ORIGEN,
    FILTER_BY_TEMPERAMENT,
    ORDER_DOGS,
    CREATE_DOG,
   
} from '../actions/types';

export const getAllDogs = (name) =>{
    return (dispatch) =>{
    axios.get(`/dogs?name=${name ? name : ''}`)
    .then(response => {
        return dispatch ({
            type: GET_ALL_DOGS, payload: response.data});
    })
    .catch(error => {
        alert('Sorry, Dog not found');
    });
    };
};
export const getDogById = (id) => {
    return (dispatch) =>{
    axios.get(`/dogs/${id}`)
    .then(response => {
            return dispatch({
                type: GET_DOG_BY_ID, payload: response.data});
        })
    .catch((error) => {
        console.log(error);
    });
    };
};
/* export const getDogById = (id) => {
    return (dispatch) =>{
    fetch(`http://localhost:3001/dogs/${id}`)
    .then(response => response.json())
        .then((json) => {
            return dispatch({
                type: GET_DOG_BY_ID, payload: json});
        })
    .catch((error) => {
        console.log(error);
    });
    };
}; */
export const cleanDogDetail = () => {
    return{
        type: CLEAN_DOG_DETAIL,
    }
};
export const getAllTemperaments = () =>{
    return (dispatch) =>{
    axios.get(`/temperament`)
    .then(response => {
        return dispatch ({
            type: GET_ALL_TEMPERAMENTS, payload: response.data});
    })
    .catch(error => {
        alert(error.response.data.message);
    });
    };
};
export const setCurrentPage = (payload) => {
    return{
        type: SET_CURRENT_PAGE,
        payload,
    }
};
export const filterDogByOrigen = (payload) => {
    return{
        type: FILTER_BY_ORIGEN,
        payload,
    }
};
export const filterDogByTemperament = (payload) => {
    return{
        type: FILTER_BY_TEMPERAMENT,
        payload,
    }
};
export const orderDogs = (payload) => {
    return{
        type: ORDER_DOGS,
        payload,
    }
};
export const createDog = (dog) => {
    return async (dispatch) =>{
    try{
        await axios.post(`/dog`, dog);
            return dispatch ({
                type: CREATE_DOG,
            });
        }catch(error) {
        console.log(error);
        }
    };
};