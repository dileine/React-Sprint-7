import React, { useState, useEffect } from "react";

function App() {
  const [webPage, setWebPage] = useState(false);
  const [seoInquiry, setSeoInquiry] = useState(false);
  const [addCampaign, setAddCampaign] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "webPage") {
      setWebPage(checked);
    } else if (name === "seoInquiry") {
      setSeoInquiry(checked);
    } else if (name === "addCampaign") {
      setAddCampaign(checked);
    }
  };

  useEffect(() => {
    let totalPrice = 0;

    if (webPage) {
      totalPrice += 500;
    }

    if (seoInquiry) {
      totalPrice += 300;
    }

    if (addCampaign) {
      totalPrice += 200;
    }

    setTotalPrice(totalPrice);
  }, [webPage, seoInquiry, addCampaign]);

  return (
    <div>
      <p>¿Qué quieres hacer?</p>
      <div>
        <label>
          <input
            type="checkbox"
            name="webPage"
            checked={webPage}
            onChange={handleCheckboxChange}
          />
          Una página Web (500€)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="seoInquiry"
            checked={seoInquiry}
            onChange={handleCheckboxChange}
          />
          Una consulta SEO (300€)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="addCampaign"
            checked={addCampaign}
            onChange={handleCheckboxChange}
          />{" "}
          Una campaña de Google Adds (200€)
        </label>
      </div>
      <p>Precio: {totalPrice}</p>
    </div>
  );
}

export default App;
