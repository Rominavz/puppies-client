

export const validate = (dog) => {
    let errors = {};
    // \u00f1 y \u00d1 son el equivalente para "ñ" y "Ñ",
    if (!dog.name.trim()) {
      errors.name = "Fill is required";
    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(dog.name)) {
      errors.name = "Name must contain only letters";
    }    
    if (!dog.height_min){
        errors.height_min = "Fill is required";
    } else if(dog.height_min < 1 || dog.height_min > 150){
        errors.height_min = "Check the value";
    }
    if (!dog.height_max){
        errors.height_max = "Fill is required";
    } else if(dog.height_max < 1 || dog.height_max > 180){
        errors.height_max = "Check the value";
    }
    if (dog.height_max <= dog.height_min){
        errors.height_max = "Max_Height must be highter that Min_Height"
    }
    
    if (!dog.weight_min){
        errors.weight_min = "Fill is required";
    } else if(dog.weight_min < 1 || dog.weight_min > 150){
        errors.weight_min = "Check the value";
    }
    if (!dog.weight_max){
        errors.weight_max = "Fill is required";
    } else if(dog.weight_max < 1 || dog.weight_max > 180){
        errors.weight_max = "Check the value";
    }
    if (dog.weight_max <= dog.weight_min){
        errors.weight_max = "Max_Height must be highter that Min_Height"
    }
    
    if (!/(jpg|jpeg|png)/i.test(dog.image)){
        errors.image = "Only jpg, jpeg, and png urls are allowed";
    }
    if (dog.life_span !== '' && (dog.life_span > 50 || dog.life_span <1)){
        errors.life_span = "Life_span cannot exceed 50 years or be negative"
    }
    if (dog.temperament.length===0){
        errors.temperament = "Choose at least one";
    }

  return errors;
    
}

