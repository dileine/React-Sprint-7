import React, { useState, useEffect } from "react";
import Table from "./components/table/table";

function App() {
  const [services, setServices] = useState({
    webPage: false,
    seoInquiry: false,
    addCampaign: false,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const [additionalServices, setAdditionalServices] = useState({
    numPages: "",
    numLang: "",
  });

  const setCheckbox = (event) => {
    const { id, checked } = event.target;
    setServices((prevServices) => ({
      ...prevServices,
      [id]: checked,
    }));
  };

  useEffect(() => {
    const { webPage, seoInquiry, addCampaign } = services;
    const { numPages, numLang } = additionalServices;
    let totalPrice = 0;

    if (webPage) {
      totalPrice += 500;
      totalPrice +=
        numPages !== "" && numLang !== "" ? numPages * numLang * 30 : 0;
    }

    if (seoInquiry) {
      totalPrice += 300;
    }

    if (addCampaign) {
      totalPrice += 200;
    }

    setTotalPrice(totalPrice);
  }, [services, additionalServices]);

  return (
    <Table
      setCheckbox={setCheckbox}
      services={services}
      additionalServices={additionalServices}
      setAdditionalServices={setAdditionalServices}
      totalPrice={totalPrice}
    />
  );
}

export default App;
