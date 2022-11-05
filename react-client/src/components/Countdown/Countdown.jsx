import "./Countdown.css";
import Button from "react-bootstrap/Button";

function Countdown({ timerDays, timerHours, timerMinutes, timerSeconds }) {
  return (
    <>
      <div className="row   countdown justify-content-center">
        <div className="align-self-end">
          <p className="coundown-title"
            style={{
              fontSize: "50px",
              padding: "0px",
              color: "black",
              textAlign: "center",
              fontFamily: 'Bebas Neue'
            }}
          >
            RAPAT KONSULTASI TAHUNAN 2022
          </p>
        </div>
        <div className="d-flex justify-content-center">
          {/* <h1
            style={{
              fontSize: "20px",
              padding: "10px",
              color: "black",
              textAlign: "center",
              border: "3px solid",
              boxShadow: "5px 10px",
              borderRadius: "10px",
              backgroundColor: "#ffcc00",
            }}
          >
            {timerDays} Hari {timerHours} Jam {timerMinutes} Menit{" "}
            {timerSeconds} Detik
          </h1> */}
          <div className="row">
            <p style={{textAlign: 'center', fontSize: '80px'}}>{timerDays}</p>
            <p style={{textAlign: 'center', marginTop: '-80px'}}>HARI</p>
          </div>
          <div className="row">
            <p style={{textAlign: 'center', fontSize: '80px'}}>{timerHours}</p>
            <p style={{textAlign: 'center', marginTop: '-80px'}}>JAM</p>
          </div>
          <div className="row">
            <p style={{textAlign: 'center', fontSize: '80px'}}>{timerMinutes}</p>
            <p style={{textAlign: 'center', marginTop: '-80px'}}>MENIT</p>
          </div>
          <div className="row">
            <p style={{textAlign: 'center', fontSize: '80px'}}>{timerSeconds}</p>
            <p style={{textAlign: 'center', marginTop: '-80px'}}>DETIK</p>
          </div>
        </div>
      </div>
    </>
  );
}

Countdown.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Countdown;
