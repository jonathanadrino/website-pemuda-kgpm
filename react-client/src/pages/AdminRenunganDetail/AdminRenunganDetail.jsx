import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminRenunganDetail.css";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

import PulseLoader from "react-spinners/PulseLoader";

function RenunganDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [status, setStatus] = useState(false);
  const baseURL = "http://localhost:3000";
  useEffect(() => {
    axios.get(`${baseURL}/renungan/${id}`).then((response) => {
      console.log(response);
      setContent(response.data);
      setStatus(response.data.status);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (content == null) {
    return (
      <div
        style={{ height: "84vh", width: "98.5vw" }}
        className="d-flex justify-content-center align-items-center"
      >
        <PulseLoader color="#36d7b7" size={21} speedMultiplier={0.5} />
      </div>
    );
  }

  const updateRenungan = () => {
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
        Swal.fire("Updated", " ", "success");
        Swal.hideLoading();
        navigate('/admin/renungan')
      })
      .catch((err) => {
        Swal.fire("Update Error", " ", "error");
        Swal.hideLoading();
      });
  };

  function NewlineText(text) {
    return text.replace(/\n/g, "\n");
  }
  return (
    <>
      <div className="mt-3 container d-flex">
        <div>
          <h1>Renungan {content.title}</h1>
          <h5 className="py-1">
            Penulis:{" "}
            <span className="bg-dark px-1" style={{ color: "white" }}>
              {content.author}
            </span>
          </h5>
          <p className="mt-5 text-body">{NewlineText(content.body)}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
        {status ? (
          <Button
            variant="dark"
            style={{ borderRadius: "0px" }}
            className="mx-1 my-1"
            onClick={() => updateRenungan()}
          >
            Nonaktifkan
          </Button>
        ) : (
          <Button
            variant="success"
            style={{ borderRadius: "0px" }}
            className="mx-1 my-1"
            onClick={() => updateRenungan()}
          >
            Aktifkan
          </Button>
        )}
        <Button
          variant="danger"
          style={{ borderRadius: "0px" }}
          className="mx-1 my-1"
        >
          Hapus
        </Button>
      </div>
    </>
  );
}

export default RenunganDetail;
