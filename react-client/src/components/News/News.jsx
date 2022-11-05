import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:3000/post";

function News() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      let temp = [];

      for (let i = 0; i < response.data.length; i++) {
        temp.push(response.data[i]);
      }
      setPost(temp);
      console.log(temp);
    });
  }, []);

  function clickPost(id) {
    navigate("/pelayanan/" + id);
  }

  if (!post) return null;
  return (
    <>
      <div className="container justify-content-center py-5 cont-art">
        <h1 className="text-center">BERITA PELAYANAN</h1>
        <div className="row mt-3 justify-content-evenly">
          {post.map((e) => {
            return (
              <Card style={{ width: "20.5rem" }} className="card-item mt-5">
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
                      padding: '0px'
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{height:'60px'}}>{e.title} </Card.Title>
                  <Card.Text>
                    {e.highlight.length > 50
                      ? `${e.highlight.substring(0, 50)}........`
                      : e.highlight}
                  </Card.Text>
                  <Button variant="outline-dark" style={{borderRadius: '0px'}} onClick={() => clickPost(e.id)}>
                    Baca Selengkapnya
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
