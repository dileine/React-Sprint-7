import React from "react";
import { Button } from "../../basics-styled/button"

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

  return <Button onClick={handleLocalStorageReset}>Reset Storage</Button>


};

export default ResetButton;