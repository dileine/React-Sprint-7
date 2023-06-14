import { PanellWeb } from "../panell/panell";
import { ContainerTable } from "./table-styled";

 const Table = ({setCheckbox, services, additionalServices, setAdditionalServices, totalPrice}) => {

  const {webPage, seoInquiry, addCampaign} = services;
  const{numPages, numLang} = additionalServices;
  
   return(<ContainerTable>
      <p> ¿Qué quieres hacer?</p>
      <div>
        <label htmlFor="webPage">
          <input
            type="checkbox"
            id="webPage"
            checked={webPage}
            onChange={setCheckbox}
          />
           Una página Web (500€)
        </label>
      </div>
      {webPage && (
        <div>
          <PanellWeb
            numPages={numPages}
            numLang={numLang}
            setPages={(value) =>
              setAdditionalServices((prevServices) => ({
                ...prevServices,
                numPages: value,
              }))
            }
            setLang={(value) =>
              setAdditionalServices((prevServices) => ({
                ...prevServices,
                numLang: value,
              }))
            }
          />
        </div>
      )}[]
      <div>
        <label htmlFor="seoInquiry">
          <input
            type="checkbox"
            id="seoInquiry"
            checked={seoInquiry}
            onChange={setCheckbox}
          />
           Una consulta SEO (300€)
        </label>
      </div>
      <div>
        <label htmlFor="addCampaign">
          <input
            type="checkbox"
            id="addCampaign"
            checked={addCampaign}
            onChange={setCheckbox}
          />  
           Una campaña de Google Adds (200€)
        </label>
      </div>
      <p>Precio: {totalPrice}</p>
      </ContainerTable>
   );
}

export default Table;