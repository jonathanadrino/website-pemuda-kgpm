import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Profil from "./pages/Profil/Profil";
import DivisiKerja from "./pages/DivisiKerja/DivisiKerja";
import Pelayanan from "./pages/Pelayanan/Pelayanan";
import Wilayah from "./pages/Wilayah/Wilayah";
import Renungan from "./pages/Renungan/Renungan";
import AddRenungan from "./pages/AddRenungan/AddRenungan";
import Login from "./pages/Login/Login";
import RenunganDetail from "./pages/RenunganDetail/RenunganDetail";
import AddPost from "./pages/AddPost/AddPost";
import EditPost from "./pages/EditPost/EditPost";
import PostDetail from "./pages/PostDetail/PostDetail";
import PostAdmin from "./pages/PostAdmin/PostAdmin";
import RenunganAdmin from "./pages/RenunganAdmin/RenunganAdmin";
import AdminRenunganDetail from "./pages/AdminRenunganDetail/AdminRenunganDetail";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import PrivateRoutes from "./utilities/PrivateRoutes";
import LoginRoute from "./utilities/LoginRoute";

function App() {
  const [authentication, setAuththentication] = useState(false);

  function checkToken() {
    if (localStorage.getItem("access_token")) {
      setAuththentication(true);
    } else {
      setAuththentication(false);
    }

    console.log(authentication, "auth ni");
  }

  useEffect(() => {
    checkToken();
  }, [authentication]);

  return (
    <div className="App container-fluid" stlye={{marginInline: '0px'}}>
      <NavbarComponent
        auth={authentication}
        loggedOut={() => setAuththentication(false)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/divisikerja" element={<DivisiKerja />} />
        <Route path="/pelayanan" element={<Pelayanan />} />
        <Route path="/wilayah" element={<UnderConstruction />} />
        <Route path="/renungan" element={<Renungan />} />
        <Route path="/renungan/add" element={<AddRenungan />} />
        <Route path="/renungan/:id" element={<RenunganDetail />} />
        <Route path="/pelayanan/:id" element={<PostDetail />} />
        <Route element={<LoginRoute auth={authentication}/>}>
          <Route
            path="/login"
            element={
              <Login
                loggedIn={() => setAuththentication(true)}
              />
            }
          />
        </Route>

        <Route element={<PrivateRoutes auth={authentication} />}>
          <Route path="/admin/post" element={<PostAdmin />} />
          <Route path="/admin/renungan" element={<RenunganAdmin />} />
          <Route path="/admin/addpost" element={<AddPost />} />
          <Route path="/admin/editpost/:id" element={<EditPost />} />
          <Route path="/admin/renungan/:id" element={<AdminRenunganDetail />} />
        </Route>
      </Routes>
      <Footer auth={authentication} />
    </div>
  );
}

export default App;
