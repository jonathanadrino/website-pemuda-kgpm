import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import "./Pelayanan.css";

const baseURL = "http://localhost:3000/post";
function Pelayanan() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      let temp = [];

      for (let i = 0; i < response.data.length; i++) {
        temp.push(response.data[i]);
      }

      setPost(temp);
    });
  }, []);

  const click = (id) => {
    navigate(`/pelayanan/${id}`);
  };

  if (!post) {
    return (
      //   <div className="row">
      //     <div>
      //       <img />
      //     </div>
      //   </div>
      // </div>

      <div
      style={{ height: "100vh", width: "100vw" }}
        className="mt-5 pt-5 d-flex justify-content-center align-items-center"
      >
        <PulseLoader color="#36d7b7" size={21} speedMultiplier={0.5} />
      </div>
    );
  }

  return (
    <div className="my-5 pt-3 container mx-auto">
      <div className="d-flex justify-content-center mx-auto my-4">
        <h1>Berita Pelayanan</h1>
      </div>
      <div className="row mt-1 justify-content-evenly">
        {post.map((e) => {
          return (
            <Card style={{ width: "20.5rem" }} className="card-item mt-3">
              <div className="overflow">
                <img
                  variant="top"
                  src={e.imgUrl}
                  className="my-1"
                  style={{
                    height: "300px",
                    width: "100%",
                    borderRadius: "0px",
                    objectFit: "contain",
                    padding: "0px",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title style={{ height: "60px" }}>{e.title} </Card.Title>
                <Card.Text>
                  {e.highlight.length > 50
                    ? `${e.highlight.substring(0, 50)}........`
                    : e.highlight}
                </Card.Text>
                <Button
                  variant="outline-dark"
                  style={{ borderRadius: "0px" }}
                  onClick={() => click(e.id)}
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
}

export default Pelayanan;
