import data from "./data-komisi";
import Card from "react-bootstrap/Card";
import {useEffect} from 'react'

function Profil() {
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="my-5 pt-5">
      <div className="d-flex justify-content-center">
        <h1 style={{textAlign: 'center'}}>Komisi Pemuda Pucuk Pimpinan KGPM Periode 2022</h1>
      </div>
      <div className="d-flex mt-3 justify-content-center flex-wrap container">
        {data.map((e) => {
          return (
            <div key={e.name}>
              <Card
                style={{ width: "19.5rem", border: "0px" }}
                className="mx-3 my-3 card-struct"
              >
                <img
                  variant="top"
                  src={require(`./photos-komisi/${e.img}.png`)}
                  style={{ width: "11rem", margin: "auto", height: "12rem" }}
                />
                <Card.Body>
                  <div className="d-flex justify-content-center" style={{borderBottom: '3px solid black'}}>
                  <Card.Title style={{fontSize: '18px'}}>{e.name}</Card.Title>
                  </div>
                  <Card.Text className='mt-2' style={{textAlign: 'center'}}>{e.title}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profil;
