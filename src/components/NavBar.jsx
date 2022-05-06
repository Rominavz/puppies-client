import React from 'react';
import { LinkTo } from "../styles/Link";
import styles from "../styles/Nav.module.css";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";


export default function NavBar(){
    return(
        
            <div className={styles.nav}>
                <SearchBar/> 
                <div className={styles.navsub}>
                <LinkTo to='/'>
                   <img src={logo} width='80px' height='65px' alt="logo" />
                </LinkTo>
                <LinkTo to = '/create'>CREATE</LinkTo>
                </div>
            </div>
    );
};