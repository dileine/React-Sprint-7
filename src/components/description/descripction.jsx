import React from "react";
import  Link  from "../link/link";
import { Container } from "./description-styled";   


const Description = () => {

    return (
    <Container>
     <p>Aquesta és una aplicació destinada al càlcul i registre de pressupostos.
         Els serveis que s'ofereixen són:</p>
        <ul>
         <li>Pàgina Web</li>
         <li>Consultoria SEO</li>
         <li>Campanya Google Ads</li>
        </ul>
     <p>Dins el servei de Pàgina Web teniu l'opció d'escollir el número de pàgines i d'idiomes</p>
      
          <Link to="/home">Iniciar càlcul</Link>              
    </Container>
    
    );
}

export default Description;

