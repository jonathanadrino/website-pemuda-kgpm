import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import "./Footer.css";

function Footer({ auth }) {
  return (
    <>
      <div class="row" style={{ width: "100vw", height: "30vh" }}>
        <div class="col-sm bg-dark d-flex justify-content-center align-items-center">
          <div className="py-3 d-flex justify-content-center mx-auto">
            <div>
              <div className="d-flex my-2" style={{ color: "white" }}>
                Komisi Pemuda Pucuk Pimpinan KGPM
              </div>
              <div className="d-flex" style={{ color: "white" }}>
                Jalan Sea Malalayang Satu,
              </div>
              <div className="d-flex" style={{ color: "white" }}>
                Manado, Sulawesi Utara Indonesia,
              </div>
              <div className="d-flex" style={{ color: "white" }}>
                {" "}
                95012
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm bg-dark d-flex justify-content-center align-items-center">
          <div className="row">
            <div
              className="d-flex justify-content-center my-2"
              style={{ color: "white" }}
            >
              Media sosial
            </div>
            <div className="d-flex justify-content-center mb-4">
              <section>
                <a
                  className="btn btn-outline-light btn-floating m-1 fb"
                  href="https://facebook.com/pemudaKGPM"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  style={{ borderRadius: "0px" }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1 ig"
                  href="https://www.instagram.com/pemudakgpm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  style={{ borderRadius: "0px" }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1 yt"
                  href="https://www.youtube.com/channel/UCl8HQYWcLn_TgVIa_fcNddw"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  style={{ borderRadius: "0px" }}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </section>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ color: "white" }}
            >
              © 2022 Komisi Pemuda Pucuk Pimpinan KGPM
            </div>
          </div>
        </div>
        <div class="col-sm bg-dark d-flex justify-content-center align-items-center">
          <div className="py-3 d-flex justify-content-center">
            
              <div className="d-flex justify-content-center">
                {!auth ? (
                  <Link to="/login" className="footer-btn">
                    Login Admin
                  </Link>
                ) : (
                  <Link to="/admin/post" className="footer-btn">
                    Admin dashboard
                  </Link>
                )}
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/wilayah" className="footer-btn">
                  Database
                </Link>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

{
  /* <div className="d-flex justify-content-center">
{!auth ? (
  <Link to="/login" className="footer-btn"  >Login Admin</Link>
) : (
  <Link to="/admin/post" className="footer-btn">Admin dashboard</Link>
)}
</div>
<div className="d-flex justify-content-center" >
<Link to="/wilayah" className="footer-btn">Database</Link>
</div> */
}
