import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function AddPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [highlight, setHighlight] = useState("");
  const [image, setImage] = useState("https://fakeimg.pl/200x200");
  const [uploadImage, setUploadImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleHighlightChange = (event) => {
    setHighlight(event.target.value);
  };

  const handleImageChange = (event) => {
    const type = event.target.files[0].type.split("/")[0];
    console.log(type);
    if (type !== "image") {
      MySwal.fire("File salah!", `File harus dalam bentuk gambar`, "error");
      setImage("https://fakeimg.pl/200x200");
      setUploadImage(null);
    } else {
      setImage(URL.createObjectURL(event.target.files[0]));
      setUploadImage(event.target.files[0]);
    }
  };

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  function createPost() {
    const reason = "Tidak dapat upload karena";
    if (!title) {
      MySwal.fire("Gagal!", `${reason} judul kosong`, "error");
    } else if (!body) {
      MySwal.fire("Gagal!", `${reason} isi berita kosong`, "error");
    } else if (!highlight) {
      MySwal.fire("Gagal!", `${reason} highlight berita kosong`, "error");
    } else if (!uploadImage) {
      MySwal.fire("Gagal!", `${reason} gambar berita kosong`, "error");
    } else {
      let bodyFormData = new FormData();

      bodyFormData.append("title", title);
      bodyFormData.append("highlight", highlight);
      bodyFormData.append("body", body);
      bodyFormData.append(`image`, uploadImage);
      axios({
        method: "post",
        url: "http://localhost:3000/post",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data", access_token: localStorage.getItem('access_token')},
      })
        .then(function (response) {
          navigate('/admin/post');
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  }

  return (
    <div className="container my-3">
      <div className="d-flex row justify-content-center">
        <div className="mb-3">
          <label>Gambar</label>
          <div className="mx-auto">
            <div>
              <img
                className="border"
                src={image}
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="my-3">
              <input type="file" onChange={handleImageChange} />
            </div>
          </div>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Judul Berita</Form.Label>
            <Form.Control type="text" onChange={handleTitleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Highlight Berita</Form.Label>
            <Form.Control type="text" onChange={handleHighlightChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Isi Berita</Form.Label>
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

export default AddPost;
