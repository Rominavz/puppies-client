import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Search, IconSearch } from "../styles/SearchBar";
import { getAllDogs, setCurrentPage } from "../../src/actions";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setSearch(e.target.value); 
      };
    
    const handleOnClick = (e) => {
        e.preventDefault();
        if (!search) {
          alert('Please enter a breed of dog');
        } else {
          dispatch(getAllDogs(search));
          dispatch(setCurrentPage(1));
          setSearch("");  
        }
        
    };
    return(
        <div>
        <Search onSubmit={handleOnClick}>
            <IconSearch onClick={handleOnClick}/>
            <input
            type='text'
            placeholder='Search a Dog...'
            onChange={handleOnChange}
            value={search}
            autoComplete='off'
            />
        </Search>
        </div>
    );
}