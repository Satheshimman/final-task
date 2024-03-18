import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./Home";
import { Details } from "./Details";


export const Routing=()=>{
    return(
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/details" element={<Details/>}></Route>
          </Routes>
       </BrowserRouter>
    )
}
