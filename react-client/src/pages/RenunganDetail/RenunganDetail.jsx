import { json, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./RenunganDetail.css";

import PulseLoader from "react-spinners/PulseLoader";

function RenunganDetail() {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [status, setStatus] = useState(true)
  const baseURL = "http://localhost:3000";
  useEffect(() => {
    axios.get(`${baseURL}/renungan/${id}`).then((response) => {
      setStatus(response.data.status)
      setContent(response.data);

      console.log(status);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (content == null) {
    return (
      <div
      style={{ height: "100vh", width: "100vw" }}
        className="d-flex justify-content-center align-items-center"
      >
        <PulseLoader color="#36d7b7" size={21} speedMultiplier={0.5} />
      </div>
    );
  }
  if (status == false) {
    return (
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="d-flex justify-content-center align-items-center"
      >
        <h1>RENUNGAN BELUM DISETUJUI ADMIN</h1>
      </div>
    );
  }

  function NewlineText(text) {
    return text.replace(/\n/g, "\n");
  }
  return (
    <div className="mt-5 pt-5 container d-flex">
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
  );
}

export default RenunganDetail;
