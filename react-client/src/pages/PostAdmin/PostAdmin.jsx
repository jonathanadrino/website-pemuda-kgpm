import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import PulseLoader from "react-spinners/PulseLoader";
const baseURL = "http://localhost:3000/post";
function PostAdmin() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(post);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      let temp = [];

      for (let i = 0; i < response.data.length; i++) {
        temp.push(response.data[i]);
      }

      setPost(temp);
    });
  }, []);

  if (!post) {
    return (
      <div
        style={{ height: "84vh", width: "98.5vw" }}
        className="d-flex justify-content-center align-items-center"
      >
        <PulseLoader color="#36d7b7" size={21} speedMultiplier={0.5} />
      </div>
    );
  }

  const click = (id) => {
    navigate(`/pelayanan/${id}`);
  };

  const edit = (id) => {
    navigate(`/admin/editpost/${id}`);
  };

  const delPost = (id) => {
    Swal.fire({
      title: "Loading",
    });
    Swal.showLoading();
    axios({ 
      url: `${baseURL}/${id}`, method: "DELETE",
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    
    }).then((response) => {
      Swal.fire(response.data.message, " ", "success");
      Swal.hideLoading();

      setPost(response.data.newData);
    })
    .catch((err) => {
      Swal.fire("Error", " ", "error");
      Swal.hideLoading();
    });
  };

  return (
    <div className="py-3 container" style={{ height: "100vh" }}>
      <div>
        <h3>ADMIN PANEL - POST</h3>
      </div>
      <div>
        <Button
          size="sm"
          onClick={() => {
            navigate("/admin/addpost");
          }}
          variant="success"
          style={{ borderRadius: "0px" }}
        >
          Bekeng post baru
        </Button>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover className="mb-5 mt-3">
          <thead>
            <tr>
              <th className="text-center">id</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Yg isi</th>
              <th className="text-center">Yg robah</th>
              <th className="text-center">Mo</th>
            </tr>
          </thead>
          <tbody>
            {post.map((e) => {
              return (
                <tr>
                  <td className="text-center">{e.id}</td>
                  <td>{e.title}</td>
                  <td className="text-center">{e.addedBy}</td>
                  <td className="text-center">
                    {e.modifiedBy ? e.modifiedBy : "blum ada"}
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Button
                        size="sm"
                        onClick={() => edit(e.id)}
                        variant="primary"
                        style={{ borderRadius: "0px" }}
                        className="mx-1"
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        style={{ borderRadius: "0px" }}
                        className="mx-1"
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

export default PostAdmin;
