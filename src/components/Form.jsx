import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import trash from "../assets/trash.png";
import { Link } from "react-router-dom";
import { createDog,  getAllTemperaments } from "../actions";

import { BackBtn } from "../styles/BackBtn";
import {
        FormContainer,
        Temp,
        InputLabel,
        InfoImg,
        Top,
        Content,
        Select,
        InputText,
        BtnForm,
        Error,
       } from "../styles/Form";

import { validate } from "../utils/validation";

export default function Form() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { allTemperaments } = useSelector((state) => state);

    const [dog, setDog] = useState({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        image: "",
        life_span:"",
        temperament: [],
      });

    const [errors, setErrors] = useState({});

      useEffect(() => {
        dispatch(getAllTemperaments());
      },[dispatch]);

      const handleOnChange = (e) => {
        setDog({
          ...dog,
          [e.target.name]: e.target.value,
        });
    
        setErrors(validate({ 
            ...dog,
            [e.target.name]: e.target.value,
        }));
      };

      const handleSelect = (e) => {
        setDog({
            ...dog,
            temperament: [...new Set([...dog.temperament, e.target.value])],
        });
    
        setErrors(validate({ 
            ...dog,
            temperament: [...new Set([...dog.temperament, e.target.value])],
        }));
      };

      const handleDelete = (temperament) => {
        setDog({
          ...dog,
          temperament: dog.temperament.filter((t) => t !== temperament),
        });
        setErrors(validate({ 
            ...dog,
            temperament: dog.temperament.filter((t) => t !== temperament),
        }));
      };

      const handleOnSubmit = (e) => {
        e.preventDefault();
        if (
          dog.name &&
          dog.height_min &&
          dog.height_max &&
          dog.weight_min &&
          dog.weight_max &&
          dog.temperament.length &&
          !Object.keys(errors).length
        ) {
          dispatch(createDog(dog));
          alert("Dog successfully created");
          setDog({
            name: "",
            height_min: "",
            height_max: "",
            weight_min: "",
            weight_max: "",
            image: "",
            life_span:"",
            temperament: [],
          });
          history.push("/home");
        } else {
          alert("Please complete the required fields or review the errors");
        }
      };

return(
    <FormContainer onSubmit={handleOnSubmit}>
        <Top>
            <Link to="/home">
            <BackBtn title="Regresar" secondary></BackBtn>
            </Link>
            <h1>Create your Dog</h1>
        </Top>

        <div>
                <InfoImg>
                    <img
                    src={
                          dog.image
                          ? dog.image
                          : "https://cdn.pixabay.com/photo/2017/08/24/12/11/dog-2676562_960_720.png"
                        }
                    alt="dog profile"
                    />
                </InfoImg>
                <Content>   
                      <InputLabel>
                          <p>Name</p>
                          <InputText
                          type="text"
                          name="name"
                          value={dog.name}
                          autoComplete="off"
                          placeholder="Name"
                          onChange={handleOnChange}
                          />
                          {errors.name && <Error>{errors.name}</Error>}       
                      </InputLabel>
                                            
                      <InputLabel>
                          <p>Height</p>
                          <InputText
                          type="number"
                          name="height_min"
                          value={dog.height_min}
                          autoComplete="off"
                          placeholder="Cm. Min."
                          onChange={handleOnChange}
                          />
                          {errors.height_min && <Error>{errors.height_min}</Error>} 
                          <InputText
                          type="number"
                          name="height_max"
                          value={dog.height_max}
                          autoComplete="off"
                          placeholder="Cm. Max."
                          onChange={handleOnChange}
                          />
                          {errors.height_max && <Error>{errors.height_max}</Error>} 
                      </InputLabel>
                                            
                      <InputLabel>
                          <p>Weight</p>
                          <InputText
                          type="number"
                          name="weight_min"
                          value={dog.weight_min}
                          autoComplete="off"
                          placeholder="Kg. Min."
                          onChange={handleOnChange}
                          />
                          {errors.weight_min && <Error>{errors.weight_min}</Error>} 
                          <InputText
                          type="number"
                          name="weight_max"
                          value={dog.weight_max}
                          autoComplete="off"
                          placeholder="Kg. Max."
                          onChange={handleOnChange}
                          />
                          {errors.weight_max && <Error>{errors.weight_max}</Error>}     
                      </InputLabel>
                      
                      <InputLabel>
                          <p>Image</p>
                          <InputText
                          type="url"
                          name="image"
                          value={dog.image}
                          autoComplete="off"
                          placeholder="Enter Url from your Image"
                          onChange={handleOnChange}
                          />
                          {errors.image && <Error>{errors.image}</Error>}  
                      </InputLabel>
                     
                      <InputLabel>
                          <p>Life_span</p>
                          <InputText
                          type="number"
                          name="life_span"
                          value={dog.life_span}
                          autoComplete="off"
                          placeholder="Years"
                          onChange={handleOnChange}
                          />
                          {errors.life_span && <Error>{errors.life_span}</Error>}
                      </InputLabel>
                                            
                      <InputLabel>
                              <Select name="temperament" onChange={handleSelect}>
                                <option value="">Temperament</option>
                                {allTemperaments?.map((temperament) => {
                                        return (
                                        <option key={temperament.id} value={temperament.name}>
                                            {temperament.name}
                                        </option>
                                    );
                                    })}
                              </Select>
                              {errors.temperament && <Error>{errors.temperament}</Error>}  
                              <div>
                                  {dog.temperament.map((temperament) => (
                                      <Temp key={temperament.id}>
                                      {temperament}
                                      <img
                                          src={trash}
                                          alt="trash"
                                          onClick={() => handleDelete(temperament)}
                                      />
                                      </Temp>
                                  ))}
                              </div>
                      </InputLabel>
                      
                    
              <div>
                <BtnForm type="submit" tertiary>
                  SAVE
                </BtnForm>
              </div>
        </Content>
        </div>


    </FormContainer>
)
}