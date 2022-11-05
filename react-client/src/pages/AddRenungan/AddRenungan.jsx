import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function AddRenungan() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  function createPost() {
    axios
      .post("http://localhost:3000/renungan", {
        title: title,
        body: body,
        author: author,
      })
      .then((response) => {
        if (response.status === 201) {
          MySwal.fire("Berhasil", "Menunggu persetujuan admin", "success");
          navigate(`/renungan`);
        }
      })
      .catch((err) => {
        MySwal.fire("Good job!", err.message, "error");
      });
  }

  return (
    <div className="container" style={{ height: "85vh", marginTop: "15vh" }}>
      <div className="d-flex row justify-content-center">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nama Pembuat</Form.Label>
            <Form.Control type="text" onChange={handleAuthorChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Judul Renungan</Form.Label>
            <Form.Control type="text" onChange={handleTitleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Isi Renungan</Form.Label>
            <Form.Control as="textarea" rows={10} onChange={handleBody} />
          </Form.Group>
        </Form>
        <Button style={{ width: "100px" }} onClick={createPost}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AddRenungan;
