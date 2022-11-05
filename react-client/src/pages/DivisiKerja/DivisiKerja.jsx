import {
  data,
  rohani,
  minat,
  organisasi,
  kader,
  dana,
  media,
  aksi,
} from "./data-divisi";
import { Form, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import './DivisiKerja.css'

function DivisiKerja() {
  const [option, setOption] = useState("all");
  function clickChoice(value) {
    setOption(value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let inti;

  if (option === "all" || option === "inti") {
    inti = (
      <div className={`d-flex flex-wrap container justify-content-center`}>
        {data.map((e) => {
          return (
            <div key={e.name}>
              <Card
                style={{ width: "19.5rem", border: "0px" }}
                className="mx-3 my-3 card-struct"
              >
                {/* <img
              variant="top"
              src="https://pbs.twimg.com/media/FgsBgkGaMAAanVC.jpg"
              style={{ width: "11rem", margin: "auto", height: "12rem" }}
            /> */}
                <Card.Body>
                  <div
                    className="d-flex justify-content-center"
                    style={{ borderBottom: "3px solid black" }}
                  >
                    <Card.Title style={{ fontSize: "18px" }}>
                      {e.name}
                    </Card.Title>
                  </div>
                  <Card.Text className="mt-2" style={{ textAlign: "center" }}>
                    {e.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  } 
  let subdivisiOrganisasi;

  if (option === "all" || option === "organisasi") {
    subdivisiOrganisasi = (
      <>
        <div className={`d-flex justify-content-center${option==="organisasi" ? " d-none" : ""}`}>
          <h1 style={{ textAlign: "center" }}>Subdivisi Organisasi</h1>
        </div>
        <div className="d-flex mt-3 justify-content-center flex-wrap container">
          {organisasi.map((e) => {
            return (
              <div key={e.name}>
                <Card
                  style={{ width: "19.5rem", border: "0px" }}
                  className="mx-3 my-3 card-struct"
                >
                  {/* <img
              variant="top"
              src="https://pbs.twimg.com/media/FgsBgkGaMAAanVC.jpg"
              style={{ width: "11rem", margin: "auto", height: "12rem" }}
            /> */}
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center"
                      style={{ borderBottom: "3px solid black" }}
                    >
                      <Card.Title style={{ fontSize: "18px" }}>
                        {e.name}
                      </Card.Title>
                    </div>
                    <Card.Text className="mt-2" style={{ textAlign: "center" }}>
                      {e.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  } 

  let subdivisiKader;

  if (option === "all" || option === "kader") {
    subdivisiKader = (
      <>
        <div className={`d-flex justify-content-center${option==="kader" ? " d-none" : ""}`}>
          <h1 style={{ textAlign: "center" }}>Subdivisi Kaderisasi</h1>
        </div>
        <div className="d-flex mt-3 justify-content-center flex-wrap container">
          {kader.map((e) => {
            return (
              <div key={e.name}>
                <Card
                  style={{ width: "19.5rem", border: "0px" }}
                  className="mx-3 my-3 card-struct"
                >
                  {/* <img
                  variant="top"
                  src="https://pbs.twimg.com/media/FgsBgkGaMAAanVC.jpg"
                  style={{ width: "11rem", margin: "auto", height: "12rem" }}
                /> */}
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center"
                      style={{ borderBottom: "3px solid black" }}
                    >
                      <Card.Title style={{ fontSize: "18px" }}>
                        {e.name}
                      </Card.Title>
                    </div>
                    <Card.Text className="mt-2" style={{ textAlign: "center" }}>
                      {e.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  let subdivisiAksi;

  if (option === "all" || option === "aksi") {
    subdivisiAksi = (
      <>
        <div className={`d-flex justify-content-center${option==="aksi" ? " d-none" : ""}`}>
          <h1 style={{ textAlign: "center" }}>
            Subdivisi Aksi Pelayanan dan Mitra Pelayanan
          </h1>
        </div>
        <div className="d-flex mt-3 justify-content-center flex-wrap container">
          {aksi.map((e) => {
            return (
              <div key={e.name}>
                <Card
                  style={{ width: "19.5rem", border: "0px" }}
                  className="mx-3 my-3 card-struct"
                >
                  {/* <img
                  variant="top"
                  src="https://pbs.twimg.com/media/FgsBgkGaMAAanVC.jpg"
                  style={{ width: "11rem", margin: "auto", height: "12rem" }}
                /> */}
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center"
                      style={{ borderBottom: "3px solid black" }}
                    >
                      <Card.Title style={{ fontSize: "18px" }}>
                        {e.name}
                      </Card.Title>
                    </div>
                    <Card.Text className="mt-2" style={{ textAlign: "center" }}>
                      {e.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  let subdivisiRohani;

  if (option === "all" || option === "rohani") {
    subdivisiRohani = (
      <>
        <div className={`d-flex justify-content-center${option==="rohani" ? " d-none" : ""}`}>
          <h1 style={{ textAlign: "center" }}>
            Subdivisi Kerohanian
          </h1>
        </div>
        <div className="d-flex mt-3 justify-content-center flex-wrap container">
          {rohani.map((e) => {
            return (
              <div key={e.name}>
                <Card
                  style={{ width: "19.5rem", border: "0px" }}
                  className="mx-3 my-3 card-struct"
                >
                  {/* <img
                  variant="top"
                  src="https://pbs.twimg.com/media/FgsBgkGaMAAanVC.jpg"
                  style={{ width: "11rem", margin: "auto", height: "12rem" }}
                /> */}
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center"
                      style={{ borderBottom: "3px solid black" }}
                    >
                      <Card.Title style={{ fontSize: "18px" }}>
                        {e.name}
                      </Card.Title>
                    </div>
                    <Card.Text className="mt-2" style={{ textAlign: "center" }}>
                      {e.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  let subdivisiMinat;

  if (option === "all" || option === "minat") {
    subdivisiMinat = (
      <>
        <div className={`d-flex justify-content-center${option==="minat" ? " d-none" : ""}`}>
          <h1 style={{ textAlign: "center" }}>Subdivisi Minat dan Bakat</h1>
        </div>
        <div className="d-flex mt-3 justify-content-center flex-wrap container">
          {minat.map((e) => {
            return (
              <div key={e.name}>
                <Card
                  style={{ width: "19.5rem", border: "0px" }}
                  className="mx-3 my-3 card-struct"
                >
                  {/* <img
                  variant="top"
                  src="https://pbs.twimg.com/media/FgsBgkGaMAAanVC.jpg"
                  style={{ width: "11rem", margin: "auto", height: "12rem" }}
                /> */}
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center"
                      style={{ borderBottom: "3px solid black" }}
                    >
                      <Card.Title style={{ fontSize: "18px" }}>
                        {e.name}
                      </Card.Title>
                    </div>
                    <Card.Text className="mt-2" style={{ textAlign: "center" }}>
                      {e.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  let subdivisiMedia;

  if (option === "all" || option === "media") {
    subdivisiMedia = (
      <>
        <div className={`d-flex justify-content-center${option==="media" ? " d-none" : ""}`}>
          <h1 style={{ textAlign: "center" }}>
            Subdivisi Media Komunikasi dan Informasi
          </h1>
        </div>
        <div className="d-flex mt-3 justify-content-center flex-wrap container">
          {media.map((e) => {
            return (
              <div key={e.name}>
                <Card
                  style={{ width: "19.5rem", border: "0px" }}
                  className="mx-3 my-3 card-struct"
                >
                  {/* <img
              variant="top"
              src="https://pbs.twimg.com/media/FgsBgkGaMAAanVC.jpg"
              style={{ width: "11rem", margin: "auto", height: "12rem" }}
            /> */}
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center"
                      style={{ borderBottom: "3px solid black" }}
                    >
                      <Card.Title style={{ fontSize: "18px" }}>
                        {e.name}
                      </Card.Title>
                    </div>
                    <Card.Text className="mt-2" style={{ textAlign: "center" }}>
                      {e.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  let subDivisiDana;

  if (option === "all" || option === "dana") {
    subDivisiDana = (
      <>
        <div className={`d-flex justify-content-center${option==="dana" ? " d-none" : ""}`}>
          <h1 style={{ textAlign: "center" }}>Subdivisi Pendanaan</h1>
        </div>
        <div className="d-flex mt-3 justify-content-center flex-wrap container">
          {dana.map((e) => {
            return (
              <div key={e.name}>
                <Card
                  style={{ width: "19.5rem", border: "0px" }}
                  className="mx-3 my-3 card-struct"
                >
                  {/* <img
                  variant="top"
                  src="https://pbs.twimg.com/media/FgsBgkGaMAAanVC.jpg"
                  style={{ width: "11rem", margin: "auto", height: "12rem" }}
                /> */}
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center"
                      style={{ borderBottom: "3px solid black" }}
                    >
                      <Card.Title style={{ fontSize: "18px" }}>
                        {e.name}
                      </Card.Title>
                    </div>
                    <Card.Text className="mt-2" style={{ textAlign: "center" }}>
                      {e.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <div className="my-5 pt-5">
      <div className="d-flex justify-content-center">
        <h1 style={{ textAlign: "center" }}>
          Divisi Kerja Komisi Pemuda Pucuk Pimpinan KGPM Periode 2022
        </h1>
      </div>
      <div className="d-flex justify-content-center my-3">
        <Form.Select
          aria-label="Default select example"
          value={option}
          onChange={(e) => {clickChoice(e.target.value)}}
          className="option-dk"
        >
          <option
            style={{
              textAlign: "center",
            }}
            value="all"
          >
            Semua
          </option>
          <option
            style={{
              textAlign: "center",
            }}
            value="inti"
          >
            Inti
          </option>
          <option
            value="organisasi"
            style={{
              textAlign: "center",
            }}
          >
            Subdivisi Organisasi
          </option>
          <option
            
            style={{
              textAlign: "center",
            }}
            value="kader"
          >
            Subdivisi Kaderisasi
          </option>
          <option
            value="aksi"
            style={{
              textAlign: "center",
            }}
          >
            Subdivisi Aksi Pelayanan dan Mitra Pelayanan
          </option>
          <option
            value="rohani"
            style={{
              textAlign: "center",
            }}
          >
            Subdivisi Kerohanian
          </option>
          <option
            value="minat"
            style={{
              textAlign: "center",
            }}
          >
            Subdivisi Minat dan Bakat
          </option>
          <option
            value="media"
            style={{
              textAlign: "center",
            }}
          >
            Subdivisi Media Komunikasi dan Informasi
          </option>
          <option
            value="dana"
            style={{
              textAlign: "center",
            }}
          >
            Subdivisi Pendanaan
          </option>
        </Form.Select>
      </div>
      {inti}
      {subdivisiOrganisasi}
      {subdivisiKader}
      {subdivisiAksi}
      {subdivisiRohani}
      {subdivisiMinat}
      {subdivisiMedia}
      {subDivisiDana}
    </div>
  );
}

export default DivisiKerja;
