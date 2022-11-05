import { Link, useNavigate } from "react-router-dom";
import "./NavbarComponent.css";

function AdminNavbar() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ backroundColor: "gray" }}
    >
      <div
        className="bg-dark"
        style={{ marginTop: "13vh", borderRadius: "0px" }}
      >
        <Link
          to="/admin/post"
          className="mx-2 admin-item"

        >
          POST
        </Link>
        <Link
          to="/admin/renungan"
          className="mx-2 admin-item"
        >
          RENUNGAN
        </Link>
      </div>
    </div>
  );
}

export default AdminNavbar;
