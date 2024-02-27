import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Marcher from "./Marcher";
import MarcherCard from "./MarcherCard";
import { useSelector } from "react-redux";
import MarcherParams from "./MarcherParams";
import NavMarcher from "./navMarcher";

export default function MarcherApp() {
    const selector = useSelector((state)=>state.MarcherCard.length)//fixed-top
    console.log(selector)
    return <>
    <BrowserRouter>
    <NavMarcher/>




    {/* <nav class="navbar navbar-dark bg-dark"> */}
    {/* <nav    className="navbar navbar-expand-lg navbar-light bg-light fixed-top d-flex justify-content-around">
    <Link className="nav-link text-lg">Marcher</Link>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link to={'/Marcher/PC'} className="nav-link" >Home  <span className="sr-only">(current)</span></Link>
                </li>
               
             
            </ul>
            
        </div>
        <div className="Block">
  <Link to={'/Marcher/card'} className="nav-link" >
      
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
  </svg>{parseInt(selector)}
        </Link>
  </div>
    </nav> */}
    <Routes>
        <Route path={'/Marcher/PC'} element={<Marcher/>}/>
        <Route path={'/Marcher/card'} element={<MarcherCard/>}/>
        <Route path={'/marcher/:id'} element={<MarcherParams/>}/>

    </Routes>

    
    </BrowserRouter>
    
    </>
}