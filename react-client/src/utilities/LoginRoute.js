import { Outlet, Navigate, Route } from "react-router-dom";
import AdminNavbar from "../components/Navbar/AdminNavbar";

function LoginRoute ({auth}){

    return (
       auth ? <><Navigate to="/admin/post"/></>: <Outlet/>
       
    )
} 

export default LoginRoute