import { ContainerPanell } from "./panell-styled";

export const PanellWeb = ({numPages, numLang, setPages, setLang}) => {
    return <ContainerPanell>
        <label>Número de páginas: <input type="text" id="numPag" value={numPages} onChange={(e)=>setPages(e.target.value)}/></label>
        <label>Número de idiomas: <input type="text" id="numLang" value={numLang} onChange ={(e)=>setLang(e.target.value)}/></label>
    </ContainerPanell>
}
;