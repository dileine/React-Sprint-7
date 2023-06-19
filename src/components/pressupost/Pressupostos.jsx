import React, { useEffect }  from "react";
import Table from "../table/table";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import ResetButton from "../buttons/reset/resetButton";

const Pressupostos = () => {const [services, setServices] = useLocalStorage("services", {
    webPage: false,
    seoInquiry: false,
    adsCampaign: false,
  });

  const [totalPrice, setTotalPrice] = useLocalStorage("totalPrice", 0);

  const [additionalServices, setAdditionalServices] = useLocalStorage(
    "additionalServices",
    {
      numPages: 0,
      numLang: 0,
    }
  );

  const setCheckbox = (event) => {
    const { id, checked } = event.target;
    setServices((prevServices) => ({
      ...prevServices,
      [id]: checked,
    }));
  };

  useEffect(() => {
    const { webPage, seoInquiry, adsCampaign } = services;
    const { numPages, numLang } = additionalServices;
    let totalPrice = 0;

    if (webPage) {
      totalPrice += 500;
      totalPrice +=
        numPages !== 0 && numLang !== 0 ? numPages * numLang * 30 : 0;
    }

    if (seoInquiry) {
      totalPrice += 300;
    }

    if (adsCampaign) {
      totalPrice += 200;
    }

    setTotalPrice(totalPrice);
  }, [services, additionalServices, setTotalPrice]);

  return (
    <div>
      <Table
        setCheckbox={setCheckbox}
        services={services}
        additionalServices={additionalServices}
        setAdditionalServices={setAdditionalServices}
        totalPrice={totalPrice}
      />
      <ResetButton
        setServices={setServices}
        setAdditionalServices={setAdditionalServices}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );}

  export default Pressupostos;