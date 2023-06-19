import React from "react";
import { ContainerPanell } from "./panell-styled";
import  QuantityInputButton from "../buttons/inputButton/inputButton";



const PanellWeb = ({ numPages, numLang, setPages, setLang }) => {


  return (
    <ContainerPanell>
      <label>
        Número de páginas:
          <QuantityInputButton value={numPages} onChange={setPages}/>
      </label>
      <label>
        Número de idiomas:
     <QuantityInputButton value={numLang} onChange={setLang}/>
       </label>
    </ContainerPanell>
  );
};

export default PanellWeb;