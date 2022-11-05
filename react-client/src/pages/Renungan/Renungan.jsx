import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import "./Renungan.css";

const baseURL = "http://localhost:3000/renungan";
function Renungan() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/renungan/add", { replace: true }),
    [navigate]
  );
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);
   
        setPost(response.data);
    
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div
      style={{ height: "100vh", width: "100vw" }}
        className="mt-5 pt-5 d-flex justify-content-center align-items-center"
      >
        <PulseLoader color="#36d7b7" size={21} speedMultiplier={0.5} />
      </div>
    );
  }

  function clickRenungan(id) {
    navigate(`/renungan/${id}`);
  }

  console.log(window.location.href);

  if (post) {
    return (
      <div className="container justify-content-center my-5 pt-5 cont-art">
        <h1 className="text-center">Renungan</h1>
        <div className="d-flex justify-content-center mt-3">
          <Button
            onClick={handleOnClick}
            variant="success"
            style={{ borderRadius: "0px" }}
          >
            Tambah Renungan
          </Button>
        </div>
        <div className="row mt-1 justify-content-evenly">
          {post.map((e) => {
            return (
              <Card style={{ width: "20.5rem" }} className="card-item mt-5">
                <Card.Body>
                  <Card.Title style={{height: "50px"}}>{e.title} </Card.Title>
                  <div>
                    <h5>
                      {e.author}
                    </h5>
                  </div>
                  <Card.Text style={{height: '40px'}}>
                    {e.body.length > 50
                      ? `${e.body.substring(0, 65)}........`
                      : e.body}
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{ borderRadius: "0px" }}
                    onClick={() => clickRenungan(e.id)}
                  >
                    Baca Selengkapnya
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="mt-5 pt-4 container d-flex justify-content-center flex-wrap"
        style={{ height: "90vh" }}
      >
        <div>
          <div className="mt-3 d-flex justify-content-center">
            <h1>Renungan</h1>
          </div>
          <div className="m-3 d-flex justify-content-center">
            <Button onClick={handleOnClick} variant="success">
              Tambah Renungan
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Renungan;
