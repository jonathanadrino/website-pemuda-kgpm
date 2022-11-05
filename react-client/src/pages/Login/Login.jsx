import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { useEffect } from "react";
function Login({ loggedIn, authentication }) {
  const MySwal = withReactContent(Swal);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(authentication);
  }, []);

  const login = (e) => {
    e.preventDefault();
    axioslogin();
  };

  const axioslogin = async () => {
    try {
      Swal.fire({
        title: "Loading",
      });
      Swal.showLoading();
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/login",
        data: {
          username: username,
          password: password,
        },
      });
      console.log(response);
      console.log(response.data);

      localStorage.setItem("access_token", response.data.access_token);
      loggedIn();
      navigate("/admin/post");
    
        MySwal.fire("Oke maso", " ", "success");
        Swal.hideLoading();
    
    } catch (err) {
      console.log(err);
     
        MySwal.fire("Error", err.response.data.message, "error");
        Swal.hideLoading();
    
    }
  };

  return (
    <div style={{ height: "90.5vh" }}>
      <div className="my-5 d-flex justify-content-center">
        <div className="Auth-form-container">
          <form
            className="Auth-form"
            onSubmit={login}
            style={{ borderRadius: "0px" }}
          >
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">login</h3>
              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="masukin username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  style={{ borderRadius: "0px" }}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="masukin password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  style={{ borderRadius: "0px" }}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  style={{ borderRadius: "0px" }}
                >
                  GAS!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
