import React from "react";
import styles from "../styles/Slider.module.css";
import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";


function Slider() {
  return (
    <div className={styles.slider}>
      <figure>
        <img src={slider1} alt="dog slide 1" />
        <img src={slider2} alt="dog slide 2" />
        <img src={slider3} alt="dog slide 3" />
      </figure>
      
      <div className={styles.landingContainer}>
        <h1>Find your perfect dog</h1>
        <h3>Discover its temperament, size, life-span and more...</h3>
        <Link to="/home">
            <MdHome className={styles.homeBtn}>Home</MdHome>
        </Link>
      </div>
    </div>
  );
}

export default Slider;