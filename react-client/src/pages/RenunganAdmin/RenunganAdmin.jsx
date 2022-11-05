import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import PulseLoader from "react-spinners/PulseLoader";
const baseURL = "http://localhost:3000";
function RenunganAdmin() {
  const [renungan, setRenungan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`${baseURL}/renungan/admin`).then((response) => {
    
        setRenungan(response.data);
     
    });
  };

  const updateRenungan = (id) => {
    Swal.fire({
      title: "Loading",
    });
    Swal.showLoading();
    axios({
      method: "PATCH",
      url: `${baseURL}/renungan/${id}`,
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then((response) => {
        setRenungan(response.data);
        Swal.fire("Updated", " ", "success");
        Swal.hideLoading();
        console.log(renungan);
      })
      .catch((err) => {
        Swal.fire("Update Error", " ", "error");
        Swal.hideLoading();
      });
  };

  const delPost = (id) => {
    Swal.fire({
      title: "Loading",
    });
    Swal.showLoading();
    axios({ 
      url: `${baseURL}/renungan/${id}`, method: "DELETE",
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    
    }).then((response) => {

      setRenungan(response.data.data);
      Swal.fire(response.data.message, " ", "success");
      Swal.hideLoading();
    }).catch((err) => {
      Swal.fire("Error", " ", "error");
      Swal.hideLoading();
    })
  };

  if (!renungan) {
    return (
      <div
        style={{ height: "84vh", width: "100vw" }}
        className="d-flex justify-content-center align-items-center"
      >
        <PulseLoader color="#36d7b7" size={21} speedMultiplier={0.5} />
      </div>
    );
  }

  const click = (id) => {
    navigate(`/pelayanan/${id}`);
  };

  const clickView = (id) => {
    navigate('/admin/renungan/' + id)
  }

  return (
    <div className="my-3 container" style={{ height: "100vh" }}>
      <div>
        <h3>ADMIN PANEL - RENUNGAN</h3>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th className="text-center">id</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Yg isi</th>
              <th className="text-center">Status</th>
              <th className="text-center">Mo</th>
            </tr>
          </thead>
          <tbody>
            {renungan.map((e) => {
              return (
                <tr>
                  <td className="text-center">{e.id}</td>
                  <td>{e.title}</td>
                  <td className="text-center">{e.author}</td>
                  <td className="text-center">
                    {e.status ? "aktif" : "nonaktif"}
                  </td>
                  <td>
                    <div
                      className="d-flex justify-content-center flex-wrap"
                      style={{ marginInline: "0px" }}
                    >
                      <Button
                        variant="primary"
                        size="sm"
                        style={{ borderRadius: "0px" }}
                        className="mx-1 my-1"
                        onClick={()=> clickView(e.id)}
                      >
                        Lia
                      </Button>
                      {e.status ? (
                        <Button
                          size="sm"
                          onClick={() => updateRenungan(e.id)}
                          variant="dark"
                          style={{ borderRadius: "0px" }}
                          className="mx-1 my-1"
                        >
                          Nonaktifkan
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => updateRenungan(e.id)}
                          variant="success"
                          style={{ borderRadius: "0px" }}
                          className="mx-1 my-1"
                        >
                          Aktifkan
                        </Button>
                      )}
                      <Button
                        variant="danger"
                        size="sm"
                        style={{ borderRadius: "0px" }}
                        className="mx-1 my-1"
                        onClick={() => delPost(e.id)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default RenunganAdmin;
