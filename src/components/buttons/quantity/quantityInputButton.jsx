import React from "react";
import { ContainerInput, QuantityButton, QuantityValue } from "./quantityInputButton-styled";

const QuantityInputButton = ({value, onChange}) =>{

    const handleIncrement=() =>{
        onChange(parseInt(value) + 1);
    };
    const handleDecrement = () => {
        if (value > 0){
            onChange(parseInt(value) - 1)
        }
    };

    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value);
        if(!isNaN(inputValue)){
            onChange(inputValue);
        } else{
            onChange(0);
        }
    }

    return(
        <ContainerInput>
            <QuantityButton onClick={handleIncrement}>+</QuantityButton>
            <QuantityValue type="text" value={value} onChange={handleInputChange}/>
        <QuantityButton onClick={handleDecrement}>-</QuantityButton>
        </ContainerInput>
    );
}

export default QuantityInputButton;