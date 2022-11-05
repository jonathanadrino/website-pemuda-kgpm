import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate, NavLink } from "react-router-dom";
import logo from "./259847016_129763979475486_3718542542589869257_n.jpg";
import "./NavbarComponent.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function NavbarComponent({ auth, loggedOut }) {
  const navigate = useNavigate();
  const logout = (e) => {
    MySwal.fire({
      title: "Cabut ?",
      confirmButtonText: "Yes",
      showCancelButton: true,
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-2",
        confirmButton: "order-1 right-gap",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        e.preventDefault();
        localStorage.clear();
        loggedOut();
        MySwal.fire("Yah kaluar", " ", "success");
        navigate("/login");
      }
    });
  };

  const clickDashboard = () => {
    navigate("/admin/post");
  };
  return (
    <Navbar
      bg="transparent"
      expand="lg"
      className="shadow-sm fixed-top glass"
      style={{ width: "100vw" }}
    >
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="40px"
            height="40px"
            className="d-inline-block align-top rounded-circle shadow"
          />
        </Navbar.Brand>
        <Link to="/" className="align-self-center text-center nav-title">
          <div
            style={{
              margin: "auto",
              textDecoration: "none",
            }}
          >
            KOMISI PEMUDA KGPM
          </div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="navbar__link" to="/">
              HOME
            </NavLink>
            <NavDropdown
              title="ORGANISASI"
              className="dropdown"
              titleColor="dark"
            >
              <NavDropdown.Item>
                <NavLink className="navbar__link" to="/profil">
                  KOMISI
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="navbar__link" to="/divisikerja">
                  DIVISI KERJA
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="navbar__link" to="/profil">
                  LSKP
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="navbar__link" to="/profil">
                  KOORDINATOR DAERAH
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink className="navbar__link" to="/pelayanan">
              PELAYANAN
            </NavLink>
            <NavLink className="navbar__link" to="/wilayah">
              WILAYAH
            </NavLink>
            <NavLink className="navbar__link" to="/renungan">
              RENUNGAN
            </NavLink>
          </Nav>
          {auth ? (
            <div className="px-1">
              {" "}
              <Button
                className="mx-1"
                variant="outline-dark"
                size="sm"
                onClick={clickDashboard}
                style={{ borderRadius: "0px" }}
              >
                ADMIN
              </Button>{" "}
              <Button
                className="mx-1"
                size="sm"
                onClick={logout}
                variant="danger"
                style={{ borderRadius: "0px" }}
              >
                LOGOUT
              </Button>
            </div>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
