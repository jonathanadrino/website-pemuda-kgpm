import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const baseURL = 'http://localhost:3000'
function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [highlight, setHighlight] = useState("");
  const [image, setImage] = useState("");
  const [uploadImage, setUploadImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    axios.get(`${baseURL}/post/${id}`).then((response) => {
      console.log(response);

      const {title,body,highlight,imgUrl} = response.data

      console.log(response.data);

      setTitle(title)
      setHighlight(highlight)
      setBody(body)
      setImage(imgUrl)
      setImgUrl(imgUrl)
    });
  }, [])

  const handleTitleChange = (event) => {
    console.log(event.target.value);
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
      setUploadImage(null);
    } else {
      setImage(URL.createObjectURL(event.target.files[0]));
      setUploadImage(event.target.files[0]);
    }
  };

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  function submit() {
    const reason = "Tidak dapat upload karena";
    if (!title) {
      MySwal.fire("Gagal!", `${reason} judul kosong`, "error");
    } else if (!body) {
      MySwal.fire("Gagal!", `${reason} isi berita kosong`, "error");
    } else if (!highlight) {
      MySwal.fire("Gagal!", `${reason} highlight berita kosong`, "error");
    } else {
      let bodyFormData = new FormData();

      bodyFormData.append("title", title);
      bodyFormData.append("highlight", highlight);
      bodyFormData.append("body", body);
      bodyFormData.append(`image`, uploadImage);
      axios({
        method: "PUT",
        url: `http://localhost:3000/post/${id}`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data", access_token: localStorage.getItem('access_token') },
      })
        .then(function (response) {
          navigate('/pelayanan')
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  }

  return (
    <div className="container my-5 pt-5">
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
            <Form.Control type="text" onChange={handleTitleChange} defaultValue={title}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Highlight Berita</Form.Label>
            <Form.Control type="text" onChange={handleHighlightChange} value={highlight}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Isi Berita</Form.Label>
            <Form.Control as="textarea" rows={10} onChange={handleBody} value={body}/>
          </Form.Group>
        </Form>
        <Button style={{ width: "100px" }} onClick={submit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default EditPost;
