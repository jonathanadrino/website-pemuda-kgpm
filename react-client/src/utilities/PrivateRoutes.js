import { Outlet, Navigate, Route } from "react-router-dom";
import AdminNavbar from "../components/Navbar/AdminNavbar";

function PrivateRoutes ({auth}){

    return (
       auth ? <><AdminNavbar/><Outlet/></>: <Navigate to="/login"/>
       
    )
} 

export default PrivateRoutes