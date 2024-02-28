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
    <Routes>
        <Route path={'/Marcher/PC'} element={<Marcher/>}/>
        <Route path={'/Marcher/card'} element={<MarcherCard/>}/>
        <Route path={'/marcher/:id'} element={<MarcherParams/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
}