
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs, getAllTemperaments, setCurrentPage, filterDogByOrigen, filterDogByTemperament, orderDogs } from '../actions';

import Dog from './Dog';
import Loader from './Loader';
import Paged from './Paged';
import Filters from './Filter';

import noResults from '../assets/noResults.png';
import { Card, NoResult, Btnprinc } from '../styles/Home';
import { Button, ConteinerBtn } from "../styles/Button";
import { GrUpdate } from "react-icons/gr"
import { IoFilter } from "react-icons/io5";


export default function Dogs(){
 
    const dispatch = useDispatch();
    const { dogs, page, allTemperaments } = useSelector((state) =>state);
    const [filters, setFilters] = useState(false);
    const [ ,setOrder] = useState();

    let dogsPerPage = 8;
    const indexOfLastDog = page * dogsPerPage; 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexOfFirstDog,indexOfLastDog);

    useEffect (()=>{
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
        dispatch(setCurrentPage(1))
    },[dispatch])

    const handleFilterOrigen = (e) =>{
        dispatch(filterDogByOrigen(e.target.value));
        dispatch(setCurrentPage(1));
        setOrder(e.target.value);
    };

    const handleFilterTemperament = (e) =>{
        dispatch(filterDogByTemperament(e.target.value));
        dispatch(setCurrentPage(1));
        setOrder(e.target.value);
    };

    const handleOrdered = (e) => {
        dispatch(orderDogs(e.target.value));
        dispatch(setCurrentPage(1));
        setOrder(e.target.value);
    };
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getAllDogs());
        dispatch(setCurrentPage(1));
        setFilters('')
    };

    return(
        <div>
                <ConteinerBtn>
                    <Button title="Filtros" primary onClick={() => setFilters(!filters)}>
                    <Btnprinc><IoFilter>Filters</IoFilter></Btnprinc>
                    </Button>
                    <Button onClick={handleClick}>
                        <GrUpdate>All</GrUpdate>
                    </Button>
                </ConteinerBtn>
                { filters && (
                    <Filters
                    temperaments={allTemperaments}
                    handleOrdered={handleOrdered}
                    handleFilterOrigen={handleFilterOrigen}
                    handleFilterTemperament={handleFilterTemperament}
                    />
                 )}
                <Card>
                    { dogs.length === 0 ? (
                        <Loader /> ) : (
                        dogs.length>0 && currentDogs?.map((e,index) => (
                            <Dog
                            key={index} id={e.id} name={e.name} image={e.image} temperament={e.temperament} weight={e.weight}
                            />))
                            ) || (
                            <NoResult>
                                <img src={noResults} alt="no Results" />
                                <h2>No se encontraron resultados</h2>
                            </NoResult> 
                            )
                    }
                </Card>
                <Paged dogsPerPage={dogsPerPage}/>

        </div>
    )
}