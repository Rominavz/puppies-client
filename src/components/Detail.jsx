import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDogById, cleanDogDetail, deleteDog } from '../actions/';
import Loader from "./Loader";
import styles from "../styles/Detail1.module.css";
import { MdHome } from "react-icons/md";
import { useHistory } from "react-router-dom";
import trash from "../assets/trash.png";

export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { dog } = useSelector((state) => state);  

    const history = useHistory();

    const handleDelete = () => {
        dispatch(deleteDog(id));
        alert('Dog deleted');
        history.push("/home");
    }

    useEffect(() => {
        dispatch(getDogById(id));
        return () => dispatch(cleanDogDetail());
    }, [dispatch, id]);

    return (
        <div>
            <Link to="/home">
            <MdHome className={styles.goBack}>Home</MdHome>
            </Link>
            <div className={styles.dogDetail}>
                {dog.length === 0 ? (
                    <Loader /> ) : (
                        dog.length > 0 && (
                            <div>
                                <div  className={styles.dogBack}>
                                    <img src={dog[0].image} width="1530px" alt=''/>
                                </div>

                                <div className={styles.info}>
                                        <h1>{dog[0].name}</h1>
                                        <div>
                                            <p>
                                                Height: {dog[0].height} cm.
                                                Weight: {dog[0].weight} kg
                                            </p>
                                            <p>Life-span: {dog[0].life_span} </p>
                                            <p>
                                                Temperament: {dog[0].temperament?.map((temp) => {
                                                    return <option key={temp}>{temp}</option>
                                                })}
                                            </p>
                                        </div> 
                                        {dog[0].createdInDb && (  
                                        <img
                                          src={trash}  width= '50px'
                                          alt="trash"
                                          onClick={handleDelete}
                                         />   
                                        )}       
                                </div>
                            </div>
                    )
                )}
            </div>
        </div>
      );
    };