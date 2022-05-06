import React from 'react';
import { DogContainer, Details, Info, Icono, Bkg} from "../styles/Dog";


export default function Dog ({id, name, image, temperament, weight}){
    return(
        <DogContainer>
            <Details to={`/home/detail/${id}`}> 
                <div>
                    <img src={image} alt='flag not found'/>
                    <h3>{name}</h3>
                    <Info>
                        <Icono><h2>^</h2></Icono>
                        <Bkg>
                        <p> Wt: {weight}kg </p>
                        <p> Temperament 
                            {temperament?.map((temp) => {
                                return <option key={temp}>{temp}</option>
                            })}
                           </p> 
                        </Bkg>
                    </Info>
                </div>
            </Details>
        </DogContainer>
    );
}