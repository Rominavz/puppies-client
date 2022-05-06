import React from "react";
import Dogs from "../components/Dogs";
import NavBar from "../components/NavBar";
import { ContainerHome } from '../styles/Home';

export default function Home(){
    return(
        <ContainerHome>
            <NavBar/>
            <Dogs/>
        </ContainerHome>
    )
};