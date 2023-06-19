import { Route, Routes } from "react-router-dom";
import Welcome  from "../pages/welcome/welcome";
import Home from "../pages/home/home";


const Router = () => {
 return ( 
        <Routes>
            <Route path={process.env.PUBLIC_URL}>
              <Route path="" element={<Welcome/>}/>
              <Route path="home/" element={<Home/>}/>
            </Route>
        </Routes>
     
 )
}



export default Router;