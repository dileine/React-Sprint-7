import React from "react";
import { ContainerResetButton } from "./resetButton-styled";

export const ResetButton = ({
  setServices, 
  setAdditionalServices, 
  setTotalPrice,
})=> {
   
    const handleLocalStorageReset = () => {
    localStorage.clear();
    setServices({ webPage: false, seoInquiry: false, adsCampaign: false });
    setTotalPrice(0);
    setAdditionalServices({ numPages: 0, numLang: 0 });
  };

  return(
    <ContainerResetButton onClick={handleLocalStorageReset}>Reset Storage</ContainerResetButton>
  );

};

export default ResetButton;